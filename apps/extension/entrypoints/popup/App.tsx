import { useEffect, useState } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import { Switch, Spinner } from '@components';
import {
  Shield,
  Activity,
  Settings,
  Wand2,
  Radio,
  Newspaper,
  AlertTriangle,
  EyeOff,
  ExternalLink,
  BookOpen,
  Zap,
  Bot,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import clsx from 'clsx';
import type { UserSettings, Stats } from '@calmweb/shared';
import { DEFAULT_OPENROUTER_MODEL, AI_MODELS } from '@calmweb/shared';

interface TestConnectionResponse {
  success: boolean;
  model?: string;
  error?: string;
}

export default function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [stats, setStats] = useState<Stats>({ totalFiltered: 0, lastReset: 0 });
  const [loading, setLoading] = useState(true);
  const [currentSite, setCurrentSite] = useState<string>('');
  const [isReadable, setIsReadable] = useState(false);

  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<TestConnectionResponse | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const tab = tabs[0];
      const url = tab?.url || '';
      try {
        const hostname = new URL(url).hostname;
        setCurrentSite(hostname);
        // Simple URL-based article detection
        const path = new URL(url).pathname;
        const articlePatterns = [
          /\/\d{4}\/\d{2}\/\d{2}\//,
          /\/\d{4}\/\d{2}\//,
          /\/(article|post|blog|news|story|entry)\//,
          /\/[a-z0-9-]+\/[a-z0-9-]{20,}/,
        ];
        const skipDomains = ['google.com', 'youtube.com', 'reddit.com', 'twitter.com', 'x.com', 'facebook.com', 'instagram.com', 'linkedin.com', 'github.com', 'stackoverflow.com', 'wikipedia.org', 'amazon.com'];
        const isSkipped = skipDomains.some(d => hostname.includes(d));
        setIsReadable(!isSkipped && articlePatterns.some(p => p.test(path.toLowerCase())));
      } catch {
        setCurrentSite('unknown');
      }

      const settingsData = await sendToBackground<UserSettings>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settingsData) {
        setSettings(settingsData);
        setEnabled(settingsData.enabled);
      }

      const statsData = await sendToBackground<Stats>({
        type: MESSAGE_TYPES.GET_STATS,
      });
      if (statsData) setStats(statsData);
    } catch (error) {
      console.error('[Popup] Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleEnabled = async (checked: boolean) => {
    setEnabled(checked);
    await sendToBackground({
      type: MESSAGE_TYPES.UPDATE_SETTINGS,
      settings: { enabled: checked },
    });
  };

  const togglePreset = async (preset: 'politics' | 'ragebait' | 'spoilers' | 'clickbait') => {
    if (!settings) return;
    const newPresets = {
      ...settings.rules.presets,
      [preset]: !settings.rules.presets[preset],
    };
    await sendToBackground({
      type: MESSAGE_TYPES.UPDATE_SETTINGS,
      settings: {
        rules: {
          ...settings.rules,
          presets: newPresets,
        },
      },
    });
    setSettings({
      ...settings,
      rules: {
        ...settings.rules,
        presets: newPresets,
      },
    });
  };

  const toggleNeutralization = async () => {
    if (!settings) return;
    const newEnabled = !settings.neutralization?.enabled;
    await sendToBackground({
      type: MESSAGE_TYPES.UPDATE_SETTINGS,
      settings: {
        neutralization: {
          ...settings.neutralization,
          enabled: newEnabled,
        },
      },
    });
    setSettings({
      ...settings,
      neutralization: {
        ...settings.neutralization,
        enabled: newEnabled,
      },
    });
  };

  const openOptions = (tab?: string) => {
    const url = tab ? `options.html#${tab}` : 'options.html';
    chrome.tabs.create({ url: chrome.runtime.getURL(url) });
  };

  const toggleReader = async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: MESSAGE_TYPES.TOGGLE_READER });
      }
    } catch (error) {
      console.error('[Popup] Failed to toggle reader:', error);
    }
  };

  const testAIConnection = async () => {
    if (!settings?.byokKey) {
      setTestResult({ success: false, error: 'No API key configured' });
      return;
    }
    setTesting(true);
    setTestResult(null);
    try {
      const result = await sendToBackground<TestConnectionResponse>({
        type: MESSAGE_TYPES.TEST_CONNECTION,
        apiKey: settings.byokKey,
        model: settings.aiModel || DEFAULT_OPENROUTER_MODEL,
        endpoint: settings.customEndpoint,
      });
      setTestResult(result || { success: false, error: 'No response' });
    } catch (error) {
      setTestResult({ 
        success: false, 
        error: error instanceof Error ? error.message : String(error) 
      });
    } finally {
      setTesting(false);
    }
  };

  if (loading) {
    return (
      <div className="w-[380px] h-[520px] flex items-center justify-center bg-[#0a0a0a]">
        <Spinner size="lg" />
      </div>
    );
  }

  const presetsEnabled = Object.values(settings?.rules.presets || {}).filter(Boolean).length;
  const hasAPIKey = !!settings?.byokKey;
  const isAIMode = settings?.processingMode === 'byok_llm';
  const modelName = AI_MODELS.find(m => m.id === (settings?.aiModel || DEFAULT_OPENROUTER_MODEL))?.label || settings?.aiModel || 'Llama 3.1 8B (Free)';

  return (
    <div className="w-[380px] h-[520px] flex flex-col bg-[#0a0a0a] overflow-hidden">
      {/* Header - Fixed */}
      <header className="shrink-0 bg-[#111] border-b border-[#1a1a1a] px-3 py-3">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="p-2 bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2a] rounded-xl text-[#a78bfa] border border-[#2a2a3e]">
                <Shield size={18} />
              </div>
              {enabled && (
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#4ade80] rounded-full border-2 border-[#0a0a0a]" />
              )}
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight text-white leading-tight">CalmWeb</h1>
              <div className="flex items-center gap-1.5 text-[10px]">
                {enabled ? (
                  <>
                    <Activity size={9} className="text-[#4ade80]" />
                    <span className="text-[#4ade80] font-medium">Active</span>
                  </>
                ) : (
                  <>
                    <span className="w-1.5 h-1.5 bg-[#444] rounded-full" />
                    <span className="text-[#555]">Paused</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <Switch
            checked={enabled}
            onCheckedChange={toggleEnabled}
          />
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-2 space-y-2.5 scrollbar-thin">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2">
          <StatPill
            label="Filtered"
            value={stats.totalFiltered.toLocaleString()}
            color="text-white"
          />
          <StatPill
            label="Presets"
            value={`${presetsEnabled}/4`}
            color="text-[#4ade80]"
          />
          <StatPill
            label="Neutralize"
            value={settings?.neutralization?.enabled ? 'On' : 'Off'}
            color="text-[#a78bfa]"
          />
        </div>

        {/* Site indicator */}
        <div className="flex items-center gap-1.5 px-1">
          <Radio size={10} className="text-[#333]" />
          <span className="text-[10px] text-[#444] truncate" title={currentSite}>{currentSite}</span>
        </div>

        {/* AI Status */}
        <div className={clsx(
          "p-2.5 rounded-xl border transition-all",
          isAIMode && hasAPIKey
            ? "border-[#4ade80]/20 bg-[#4ade80]/5"
            : "border-[#1a1a1a] bg-[#111]"
        )}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={clsx(
                "p-1 rounded-md shrink-0",
                isAIMode && hasAPIKey ? "bg-[#4ade80] text-white" : "bg-[#1a1a1a] text-[#444]"
              )}>
                <Bot size={12} />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-white">AI Engine</span>
                <span className={clsx(
                  "ml-2 text-[9px] font-bold uppercase",
                  isAIMode && hasAPIKey ? "text-[#4ade80]" : "text-[#444]"
                )}>
                  {isAIMode && hasAPIKey ? 'Active' : 'Off'}
                </span>
              </div>
            </div>
          </div>

          {isAIMode && (
            <div className="text-[10px] text-[#555] mb-2">
              {modelName}
            </div>
          )}

          {/* Test Connection Button */}
          {hasAPIKey && (
            <button
              onClick={testAIConnection}
              disabled={testing}
              className={clsx(
                "w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[10px] font-semibold transition-all border",
                testing
                  ? "bg-[#1a1a1a] text-[#555] cursor-wait border-[#222]"
                  : testResult?.success
                    ? "bg-[#4ade80]/10 text-[#4ade80] border-[#4ade80]/20"
                    : testResult?.error
                      ? "bg-[#1a1a1a] text-[#888] hover:bg-[#222] hover:text-white border-[#222]"
                      : "bg-[#1a1a1a] text-[#888] hover:bg-[#222] hover:text-white border-[#222]"
              )}
            >
              {testing ? (
                <>
                  <Loader2 size={10} className="animate-spin" />
                  Testing...
                </>
              ) : testResult?.success ? (
                <>
                  <CheckCircle2 size={10} />
                  Connected
                </>
              ) : testResult?.error ? (
                <>
                  <Zap size={10} />
                  Retry
                </>
              ) : (
                <>
                  <Zap size={10} />
                  Test Connection
                </>
              )}
            </button>
          )}

          {testResult?.error && !testing && (
            <div className="mt-1.5 text-[9px] text-red-400/70 truncate" title={testResult.error}>
              {testResult.error}
            </div>
          )}
        </div>

        {/* Quick Filters */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5 px-0.5">
            <EyeOff size={11} className="text-[#444]" />
            <span className="text-[10px] font-semibold text-[#444] uppercase tracking-wider">Quick Filters</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 overflow-hidden">
            <PresetToggle
              icon={Newspaper}
              label="Politics"
              enabled={settings?.rules.presets.politics || false}
              onClick={() => togglePreset('politics')}
            />
            <PresetToggle
              icon={AlertTriangle}
              label="Ragebait"
              enabled={settings?.rules.presets.ragebait || false}
              onClick={() => togglePreset('ragebait')}
            />
            <PresetToggle
              icon={EyeOff}
              label="Spoilers"
              enabled={settings?.rules.presets.spoilers || false}
              onClick={() => togglePreset('spoilers')}
            />
            <PresetToggle
              icon={Zap}
              label="Clickbait"
              enabled={settings?.rules.presets.clickbait || false}
              onClick={() => togglePreset('clickbait')}
            />
          </div>
        </div>

        {/* Neutralization Toggle */}
        <button
          onClick={toggleNeutralization}
          className={clsx(
            "w-full p-2.5 rounded-xl border transition-all flex items-center gap-2.5",
            settings?.neutralization?.enabled
              ? "border-[#a78bfa]/20 bg-[#a78bfa]/5"
              : "border-[#1a1a1a] bg-[#111] hover:bg-[#151515]"
          )}
        >
          <div className={clsx(
            "p-1.5 rounded-lg shrink-0",
            settings?.neutralization?.enabled ? "bg-[#a78bfa] text-white" : "bg-[#1a1a1a] text-[#444]"
          )}>
            <Wand2 size={13} />
          </div>
          <div className="flex-1 text-left min-w-0">
            <div className="text-xs font-semibold text-white">Text Neutralization</div>
            <div className="text-[10px] text-[#555] truncate">
              {settings?.neutralization?.enabled ? 'Rewriting inflammatory text' : 'Inactive'}
            </div>
          </div>
          <Switch
            checked={settings?.neutralization?.enabled || false}
            onCheckedChange={toggleNeutralization}
          />
        </button>

        {/* Super Reader */}
        <button
          onClick={toggleReader}
          className={clsx(
            "w-full p-2.5 rounded-xl border transition-all flex items-center gap-2.5",
            isReadable
              ? "border-[#a78bfa]/30 bg-gradient-to-r from-[#1a1a2e]/80 to-[#111] hover:from-[#1f1f3a] hover:to-[#151515]"
              : "border-[#1a1a1a] bg-[#111] hover:bg-[#151515]"
          )}
        >
          <div className={clsx(
            "p-1.5 rounded-lg shrink-0",
            isReadable ? "bg-[#a78bfa] text-white" : "bg-[#1a1a1a] text-[#444]"
          )}>
            <BookOpen size={13} />
          </div>
          <div className="flex-1 text-left min-w-0">
            <div className="text-xs font-semibold text-white">Super Reader</div>
            <div className="text-[10px] text-[#555] truncate">
              {isReadable ? 'Article detected — ready' : 'Press Alt+R on any page'}
            </div>
          </div>
          {isReadable && (
            <span className="text-[8px] font-bold uppercase text-[#a78bfa] shrink-0">Ready</span>
          )}
          <ExternalLink size={12} className="text-[#333] shrink-0" />
        </button>
      </div>

      {/* Footer Actions - Fixed */}
      <div className="shrink-0 px-3 py-2.5 border-t border-[#1a1a1a] bg-[#080808]">
        <div className="grid grid-cols-4 gap-1">
          <FooterButton icon={Shield} label="Presets" onClick={() => openOptions('presets')} />
          <FooterButton icon={Settings} label="Rules" onClick={() => openOptions('rules')} />
          <FooterButton icon={Zap} label="AI" onClick={() => openOptions('advanced')} />
          <FooterButton icon={ExternalLink} label="More" onClick={() => openOptions()} />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Sub-components
// ============================================================================

function StatPill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="text-center p-2 rounded-lg bg-[#111] border border-[#1a1a1a]">
      <div className={clsx("text-lg font-black leading-tight", color)}>{value}</div>
      <div className="text-[9px] font-medium text-[#444] mt-0.5 uppercase tracking-wide">{label}</div>
    </div>
  );
}

interface PresetToggleProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  enabled: boolean;
  onClick: () => void;
}

function PresetToggle({ icon: Icon, label, enabled, onClick }: PresetToggleProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "p-2 rounded-lg border transition-all flex items-center gap-2 text-left min-w-0",
        enabled
          ? "border-[#a78bfa]/20 bg-[#a78bfa]/5"
          : "border-[#1a1a1a] bg-[#111] hover:bg-[#151515] hover:border-[#222]"
      )}
    >
      <div className={clsx(
        "p-1 rounded-md shrink-0",
        enabled ? "bg-[#a78bfa] text-white" : "bg-[#1a1a1a] text-[#444]"
      )}>
        <Icon size={11} />
      </div>
      <span className={clsx(
        "text-[11px] font-medium flex-1",
        enabled ? "text-white" : "text-[#666]"
      )}>
        {label}
      </span>
      {enabled && (
        <span className="text-[8px] font-bold uppercase text-[#4ade80] shrink-0">On</span>
      )}
    </button>
  );
}

function FooterButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors w-full"
    >
      <Icon size={15} className="text-[#555]" />
      <span className="text-[10px] font-medium text-[#555]">{label}</span>
    </button>
  );
}
