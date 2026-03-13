import { useEffect, useState } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import { Container, Card, Switch, Spinner } from '@components';
import {
  Shield,
  Activity,
  BarChart3,
  Settings,
  Wand2,
  Radio,
  Newspaper,
  AlertTriangle,
  EyeOff,
  ExternalLink,
} from 'lucide-react';
import clsx from 'clsx';
import type { UserSettings, Stats } from '@calmweb/shared';

export default function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [stats, setStats] = useState<Stats>({ totalFiltered: 0, lastReset: 0 });
  const [loading, setLoading] = useState(true);
  const [currentSite, setCurrentSite] = useState<string>('');
  const [siteFiltered, setSiteFiltered] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const url = tabs[0]?.url || '';
      try {
        const hostname = new URL(url).hostname;
        setCurrentSite(hostname);
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

  if (loading) {
    return (
      <Container className="w-[380px] h-[520px] flex items-center justify-center">
        <Spinner size="lg" />
      </Container>
    );
  }

  const presetsEnabled = Object.values(settings?.rules.presets || {}).filter(Boolean).length;

  return (
    <Container className="w-[380px] min-h-[520px] p-0 flex flex-col bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-b border-primary/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="p-2.5 bg-primary rounded-xl text-primary-foreground shadow-lg shadow-primary/30">
                <Shield size={22} />
              </div>
              {enabled && (
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">CalmWeb</h1>
              <div className="flex items-center gap-1.5 text-[11px]">
                {enabled ? (
                  <>
                    <Activity size={10} className="text-green-500" />
                    <span className="text-green-600 font-medium">Active</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 bg-gray-400 rounded-full" />
                    <span className="text-muted-foreground">Paused</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <Switch
            checked={enabled}
            onCheckedChange={toggleEnabled}
            className="scale-110"
          />
        </div>
      </header>

      {/* Stats Card */}
      <div className="px-4 -mt-1">
        <Card className="p-4 border-primary/10 bg-gradient-to-br from-card to-muted/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BarChart3 size={16} className="text-primary" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Statistics</span>
            </div>
            <button
              onClick={() => openOptions()}
              className="text-[10px] font-bold text-primary hover:underline"
            >
              View Details
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 rounded-lg bg-primary/5">
              <div className="text-2xl font-black text-primary">{stats.totalFiltered.toLocaleString()}</div>
              <div className="text-[10px] font-medium text-muted-foreground mt-0.5">Total Filtered</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-green-500/5">
              <div className="text-2xl font-black text-green-600">{presetsEnabled}</div>
              <div className="text-[10px] font-medium text-muted-foreground mt-0.5">Presets On</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-blue-500/5">
              <div className="text-2xl font-black text-blue-600">{settings?.neutralization?.enabled ? 'On' : 'Off'}</div>
              <div className="text-[10px] font-medium text-muted-foreground mt-0.5">Neutralize</div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Radio size={12} />
              <span className="truncate max-w-[180px]" title={currentSite}>{currentSite}</span>
            </div>
            <div className="text-[10px] font-medium text-muted-foreground">
              v1.0.0
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Toggles */}
      <div className="px-4 mt-3 flex-1">
        <div className="flex items-center gap-2 mb-2">
          <EyeOff size={14} className="text-muted-foreground" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quick Filters</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <PresetToggle
            icon={Newspaper}
            label="Politics"
            enabled={settings?.rules.presets.politics || false}
            onClick={() => togglePreset('politics')}
            color="blue"
          />
          <PresetToggle
            icon={AlertTriangle}
            label="Ragebait"
            enabled={settings?.rules.presets.ragebait || false}
            onClick={() => togglePreset('ragebait')}
            color="red"
          />
          <PresetToggle
            icon={EyeOff}
            label="Spoilers"
            enabled={settings?.rules.presets.spoilers || false}
            onClick={() => togglePreset('spoilers')}
            color="purple"
          />
          <PresetToggle
            icon={Radio}
            label="Clickbait"
            enabled={settings?.rules.presets.clickbait || false}
            onClick={() => togglePreset('clickbait')}
            color="orange"
          />
        </div>

        {/* Neutralization Toggle */}
        <button
          onClick={toggleNeutralization}
          className={clsx(
            "w-full mt-3 p-3 rounded-xl border-2 transition-all flex items-center gap-3",
            settings?.neutralization?.enabled
              ? "border-green-500/30 bg-green-500/5"
              : "border-border bg-card hover:bg-muted/50"
          )}
        >
          <div className={clsx(
            "p-2 rounded-lg",
            settings?.neutralization?.enabled ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
          )}>
            <Wand2 size={16} />
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-semibold">Text Neutralization</div>
            <div className="text-[11px] text-muted-foreground">
              {settings?.neutralization?.enabled ? 'Active - Rewriting inflammatory text' : 'Inactive'}
            </div>
          </div>
          <Switch
            checked={settings?.neutralization?.enabled || false}
            onCheckedChange={toggleNeutralization}
          />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-3 border-t border-border/50 bg-muted/20">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => openOptions('presets')}
            className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg hover:bg-muted transition-colors"
          >
            <Shield size={18} className="text-primary" />
            <span className="text-[11px] font-semibold">Presets</span>
          </button>

          <button
            onClick={() => openOptions('rules')}
            className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg hover:bg-muted transition-colors"
          >
            <Settings size={18} className="text-muted-foreground" />
            <span className="text-[11px] font-semibold">Rules</span>
          </button>

          <button
            onClick={() => openOptions()}
            className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg hover:bg-muted transition-colors"
          >
            <ExternalLink size={18} className="text-muted-foreground" />
            <span className="text-[11px] font-semibold">Dashboard</span>
          </button>
        </div>
      </div>
    </Container>
  );
}

interface PresetToggleProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  enabled: boolean;
  onClick: () => void;
  color: 'blue' | 'red' | 'purple' | 'orange';
}

function PresetToggle({ icon: Icon, label, enabled, onClick, color }: PresetToggleProps) {
  const colorClasses = {
    blue: enabled ? 'bg-blue-500/10 border-blue-500/30' : 'bg-card border-border hover:bg-muted/50',
    red: enabled ? 'bg-red-500/10 border-red-500/30' : 'bg-card border-border hover:bg-muted/50',
    purple: enabled ? 'bg-purple-500/10 border-purple-500/30' : 'bg-card border-border hover:bg-muted/50',
    orange: enabled ? 'bg-orange-500/10 border-orange-500/30' : 'bg-card border-border hover:bg-muted/50',
  };

  const iconColorClasses = {
    blue: enabled ? 'bg-blue-500 text-white' : 'bg-muted text-muted-foreground',
    red: enabled ? 'bg-red-500 text-white' : 'bg-muted text-muted-foreground',
    purple: enabled ? 'bg-purple-500 text-white' : 'bg-muted text-muted-foreground',
    orange: enabled ? 'bg-orange-500 text-white' : 'bg-muted text-muted-foreground',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2",
        colorClasses[color]
      )}
    >
      <div className={clsx("p-1.5 rounded-lg", iconColorClasses[color])}>
        <Icon size={14} />
      </div>
      <span className="text-[11px] font-semibold">{label}</span>
      {enabled && (
        <span className="text-[9px] font-bold uppercase text-green-600">On</span>
      )}
    </button>
  );
}