import { useEffect, useState, useCallback } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { UserSettings, UserRules, Stats, NeutralizationSettings } from '@calmweb/shared';
import { defaultUserSettings, defaultNeutralizationSettings } from '@calmweb/shared';
import {
  Container,
  Card,
  Switch,
  Spinner,
  FormField,
} from '@components';
import {
  LayoutDashboard,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Database,
  RefreshCw,
  Info,
  Activity,
  Wand2
} from 'lucide-react';
import clsx from 'clsx';

type TabId = 'overview' | 'presets' | 'rules' | 'neutralize' | 'advanced';

interface PresetsTabProps {
  presets: { politics: boolean; ragebait: boolean; spoilers: boolean; clickbait: boolean };
  onChange: (presets: { politics: boolean; ragebait: boolean; spoilers: boolean; clickbait: boolean }) => void;
}

interface AdvancedTabProps {
  processingMode: 'local_rules' | 'byok_llm' | 'hosted_llm';
  strictness: number;
  byokKey: string;
  onChange: (updates: Partial<UserSettings>) => void;
}

interface CustomRulesTabProps {
  rules: UserRules;
  onChange: (rules: UserRules) => void;
}

interface NeutralizeTabProps {
  settings: NeutralizationSettings;
  onChange: (settings: NeutralizationSettings) => void;
}

export default function OptionsApp() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const hash = window.location.hash.slice(1) as TabId;
    const validTabs: TabId[] = ['overview', 'presets', 'rules', 'neutralize', 'advanced'];
    return validTabs.includes(hash) ? hash : 'overview';
  });
  const [settings, setSettings] = useState<UserSettings>(defaultUserSettings);
  const [stats, setStats] = useState<Stats>({ totalFiltered: 0, lastReset: Date.now() });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  const loadData = async () => {
    try {
      const [settingsData, statsData] = await Promise.all([
        sendToBackground<UserSettings>({ type: MESSAGE_TYPES.GET_SETTINGS }),
        sendToBackground<Stats>({ type: MESSAGE_TYPES.GET_STATS })
      ]);

      if (settingsData) setSettings(settingsData);
      if (statsData) setStats(statsData);
    } catch (error) {
      console.error('[Options] Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = useCallback(async (updates: Partial<UserSettings>) => {
    setSaving(true);
    try {
      let nextSettings = { ...settings, ...updates };
      if (updates.rules) {
        nextSettings.rules = { ...settings.rules, ...updates.rules };
      }
      if (updates.neutralization) {
        nextSettings.neutralization = { ...settings.neutralization, ...updates.neutralization };
      }
      setSettings(nextSettings);
      await sendToBackground({
        type: MESSAGE_TYPES.UPDATE_SETTINGS,
        settings: updates,
      });
    } catch (error) {
      console.error('[Options] Failed to save settings:', error);
    } finally {
      setTimeout(() => setSaving(false), 400);
    }
  }, [settings]);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'presets', label: 'Presets', icon: ShieldCheck },
    { id: 'rules', label: 'Custom Rules', icon: Database },
    { id: 'neutralize', label: 'Neutralize', icon: Wand2 },
    { id: 'advanced', label: 'AI & Advanced', icon: Zap },
  ] as const;

  if (loading) {
    return (
      <Container className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </Container>
    );
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/30 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary rounded-lg text-primary-foreground shadow-lg shadow-primary/20">
              <ShieldCheck size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">CalmWeb</span>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={clsx(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/10"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t bg-muted/10">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Protection Active
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b flex items-center justify-between px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
          <h2 className="text-lg font-bold capitalize">{activeTab}</h2>

          <div className="flex items-center gap-4">
            {saving ? (
              <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                <Spinner size="sm" />
                Saving changes...
              </div>
            ) : (
              <div className="text-xs font-medium text-green-500 bg-green-500/5 px-3 py-1 rounded-full border border-green-500/10">
                System Updated
              </div>
            )}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <StatCard
                    label="Items Filtered"
                    value={stats.totalFiltered.toLocaleString()}
                    icon={ShieldAlert}
                    trend="+12% today"
                  />
                  <StatCard
                    label="Active Rules"
                    value={(settings.rules.blocklistChannels.length + settings.rules.blocklistKeywords.length).toString()}
                    icon={Database}
                  />
                  <StatCard
                    label="Protection Level"
                    value={settings.processingMode === 'local_rules' ? "Basic" : "Neural"}
                    icon={Zap}
                    highlight
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card padding="lg" className="space-y-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <Activity size={20} className="text-primary" />
                      Status Overview
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b">
                        <span className="text-sm text-muted-foreground">Engine Status</span>
                        <span className="text-sm font-bold text-green-500">Online</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b">
                        <span className="text-sm text-muted-foreground">Master Toggle</span>
                        <Switch
                          checked={settings.enabled}
                          onCheckedChange={(enabled) => saveSettings({ enabled })}
                        />
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm text-muted-foreground">Last Reset</span>
                        <span className="text-sm font-medium">{new Date(stats.lastReset).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Card>

                  <Card padding="lg" className="bg-primary text-primary-foreground shadow-xl shadow-primary/20">
                    <h3 className="font-bold text-lg mb-2">Did you know?</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Using the Neural processing mode (BYOK or Hosted) allows CalmWeb to understand context and intent, not just keywords. This provides much more accurate protection against sophisticated clickbait.
                    </p>
                    <button
                      onClick={() => setActiveTab('advanced')}
                      className="mt-4 text-xs font-bold uppercase tracking-wider bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                    >
                      Upgrade Protection
                    </button>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'presets' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <PresetsTab
                  presets={settings.rules.presets}
                  onChange={(presets) => saveSettings({ rules: { ...settings.rules, presets } })}
                />
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <CustomRulesTab
                  rules={settings.rules}
                  onChange={(rules) => saveSettings({ rules })}
                />
              </div>
            )}

            {activeTab === 'neutralize' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <NeutralizeTab
                  settings={settings.neutralization || defaultNeutralizationSettings}
                  onChange={(neutralization) => saveSettings({ neutralization })}
                />
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <AdvancedTab
                  processingMode={settings.processingMode}
                  strictness={settings.strictness}
                  byokKey={settings.byokKey || ''}
                  onChange={(updates) => saveSettings(updates)}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, trend, highlight = false }: {
  label: string, value: string, icon: any, trend?: string, highlight?: boolean
}) {
  return (
    <Card className={clsx("relative overflow-hidden", highlight && "border-primary/30")}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
          {trend && <p className="text-[10px] text-green-500 font-bold">{trend}</p>}
        </div>
        <div className={clsx("p-2 rounded-lg", highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>
          <Icon size={20} />
        </div>
      </div>
    </Card>
  );
}

// ============================================================================
// Presets Tab Component
// ============================================================================

function PresetsTab({ presets, onChange }: PresetsTabProps) {
  const items = [
    { id: 'politics', label: 'Block Politics', desc: 'Hide election, partisan debates, and political commentary.', icon: ShieldAlert },
    { id: 'ragebait', label: 'No Ragebait', desc: 'Silence content designed specifically to trigger anger.', icon: Zap },
    { id: 'spoilers', label: 'Spoiler Shield', desc: 'Protect your experience from plot leaks and endings.', icon: Info },
    { id: 'clickbait', label: 'Clickbait Filter', desc: 'Clean up sensationalist and misleading headlines.', icon: RefreshCw },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.id} className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-muted rounded-full text-muted-foreground">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
            <Switch
              checked={presets[item.id]}
              onCheckedChange={() => onChange({ ...presets, [item.id]: !presets[item.id] })}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Neutralize Tab Component
// ============================================================================

function NeutralizeTab({ settings, onChange }: NeutralizeTabProps) {
  const modes = [
    { id: 'light', name: 'Light', desc: 'Only fix extreme cases (clickbait, obvious ragebait)', icon: '🌤️' },
    { id: 'medium', name: 'Medium', desc: 'Balance between preserving voice and removing manipulation', icon: '⚖️' },
    { id: 'strict', name: 'Strict', desc: 'Clinical, fact-only text. Maximum neutrality.', icon: '🔬' },
  ] as const;

  return (
    <div className="space-y-8 max-w-2xl">
      <Card padding="lg" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-500/10 rounded-full text-green-500">
            <Wand2 size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Enable Neutralization</h4>
            <p className="text-sm text-muted-foreground">Automatically rewrite inflammatory headlines</p>
          </div>
        </div>
        <Switch
          checked={settings.enabled}
          onCheckedChange={(enabled) => onChange({ ...settings, enabled })}
        />
      </Card>

      <FormField
        label="Neutralization Mode"
        description="How aggressively to rewrite content"
      >
        <div className="grid grid-cols-1 gap-3 pt-2">
          {modes.map((mode) => (
            <div
              key={mode.id}
              onClick={() => onChange({ ...settings, mode: mode.id as 'light' | 'medium' | 'strict' })}
              className={clsx(
                "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                settings.mode === mode.id 
                  ? "border-primary bg-primary/5" 
                  : "border-transparent bg-muted/30 hover:bg-muted/50"
              )}
            >
              <div className="text-2xl">{mode.icon}</div>
              <div className="flex-1">
                <div className="font-bold text-sm">{mode.name}</div>
                <div className="text-xs text-muted-foreground">{mode.desc}</div>
              </div>
              <div className={clsx(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                settings.mode === mode.id ? "border-primary" : "border-muted-foreground/30"
              )}>
                {settings.mode === mode.id && <div className="w-2 h-2 bg-primary rounded-full" />}
              </div>
            </div>
          ))}
        </div>
      </FormField>

      <div className="grid md:grid-cols-2 gap-6">
        <Card padding="lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold mb-1">Show Indicator</h4>
              <p className="text-xs text-muted-foreground">Display a badge on neutralized text</p>
            </div>
            <Switch
              checked={settings.showIndicator}
              onCheckedChange={(showIndicator) => onChange({ ...settings, showIndicator })}
            />
          </div>
        </Card>

        <Card padding="lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold mb-1">Show Diff on Hover</h4>
              <p className="text-xs text-muted-foreground">Preview original vs rewritten on hover</p>
            </div>
            <Switch
              checked={settings.showDiffOnHover}
              onCheckedChange={(showDiffOnHover) => onChange({ ...settings, showDiffOnHover })}
            />
          </div>
        </Card>
      </div>

      <FormField
        label="Excluded Domains"
        description="Domains where neutralization should not apply (one per line)"
      >
        <textarea
          value={settings.excludeDomains.join('\n')}
          onChange={(e) => {
            const domains = e.target.value.split('\n').map(d => d.trim()).filter(Boolean);
            onChange({ ...settings, excludeDomains: domains });
          }}
          placeholder="github.com&#10;stackoverflow.com&#10;docs.python.org"
          className="flex min-h-[120px] w-full rounded-xl border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
        />
      </FormField>

      <Card padding="lg" className="bg-muted/50">
        <h4 className="font-bold mb-2 flex items-center gap-2">
          <Info size={16} className="text-primary" />
          How it works
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          When neutralization is enabled, CalmWeb analyzes headlines and titles for emotional manipulation, 
          clickbait patterns, and inflammatory language. Content is rewritten to be factual and neutral 
          while preserving the core message. You can always click to see the original text.
        </p>
      </Card>
    </div>
  );
}

// ============================================================================
// Advanced Tab Component
// ============================================================================

function AdvancedTab({ processingMode, strictness, byokKey, onChange }: AdvancedTabProps) {
  return (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-6">
        <FormField
          label="Processing Mode"
          description="The intelligence level used to analyze content."
        >
          <div className="grid grid-cols-1 gap-3 pt-2">
            {[
              { id: 'local_rules', name: 'Local Rules', desc: 'Fast, lightweight, no external calls.', icon: Database },
              { id: 'byok_llm', name: 'Custom AI (BYOK)', desc: 'Connect your own OpenAI/Anthropic key.', icon: Zap },
              { id: 'hosted_llm', name: 'CalmWeb Cloud', desc: 'Our managed neural engine (Pro).', icon: ShieldCheck },
            ].map((mode) => (
              <div
                key={mode.id}
                onClick={() => onChange({ processingMode: mode.id as any })}
                className={clsx(
                  "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                  processingMode === mode.id ? "border-primary bg-primary/5" : "border-transparent bg-muted/30 hover:bg-muted/50"
                )}
              >
                <div className={clsx("p-2 rounded-lg", processingMode === mode.id ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground")}>
                  <mode.icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{mode.name}</div>
                  <div className="text-xs text-muted-foreground">{mode.desc}</div>
                </div>
                <div className={clsx("w-4 h-4 rounded-full border-2 flex items-center justify-center", processingMode === mode.id ? "border-primary" : "border-muted-foreground/30")}>
                  {processingMode === mode.id && <div className="w-2 h-2 bg-primary rounded-full" />}
                </div>
              </div>
            ))}
          </div>
        </FormField>

        <FormField
          label={`Filter Sensitivity: ${strictness}%`}
          description="Balance between thorough filtering and potential false positives."
        >
          <div className="pt-4 px-2">
            <input
              type="range"
              min="0"
              max="100"
              value={strictness}
              onChange={(e) => onChange({ strictness: parseInt(e.target.value) })}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-muted-foreground mt-3">
              <span>Allow More</span>
              <span>Balanced</span>
              <span>Paranoid</span>
            </div>
          </div>
        </FormField>

        {processingMode === 'byok_llm' && (
          <div className="animate-in slide-in-from-top-2 duration-300">
            <FormField
              label="API Provider Key"
              description="OpenAI compatible API key. Stored only on your device."
            >
              <div className="relative">
                <input
                  type="password"
                  value={byokKey}
                  onChange={(e) => onChange({ byokKey: e.target.value })}
                  placeholder="sk-..."
                  className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Zap size={16} className="absolute right-4 top-4 text-muted-foreground/50" />
              </div>
            </FormField>
          </div>
        )}

        <div className="pt-6 border-t">
          <h4 className="text-sm font-bold mb-4">Maintenance</h4>
          <button
            onClick={async () => {
              await sendToBackground({ type: MESSAGE_TYPES.CLEAR_CACHE });
              alert('Classification cache cleared.');
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold border border-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all"
          >
            Reset All Cached Decisions
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Custom Rules Tab Component
// ============================================================================

function CustomRulesTab({ rules, onChange }: CustomRulesTabProps) {
  const updateList = (field: keyof UserRules, value: string) => {
    const items = value.split('\n').map(line => line.trim()).filter(Boolean);
    onChange({ ...rules, [field]: items });
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-8 bg-red-500 rounded-full" />
            <h3 className="text-lg font-bold">Blacklist</h3>
          </div>

          <FormField
            label="Sources to Mute"
            description="Channel names or handles to remove from your feed."
          >
            <textarea
              value={rules.blocklistChannels.join('\n')}
              onChange={(e) => updateList('blocklistChannels', e.target.value)}
              placeholder="Enter names (one per line)..."
              className="flex min-h-[200px] w-full rounded-xl border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
            />
          </FormField>

          <FormField
            label="Restricted Keywords"
            description="Block content containing these specific terms."
          >
            <textarea
              value={rules.blocklistKeywords.join('\n')}
              onChange={(e) => updateList('blocklistKeywords', e.target.value)}
              placeholder="Enter keywords (one per line)..."
              className="flex min-h-[200px] w-full rounded-xl border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
            />
          </FormField>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-8 bg-green-500 rounded-full" />
            <h3 className="text-lg font-bold">Whitelist</h3>
          </div>

          <FormField
            label="Trusted Sources"
            description="Channels that will never be filtered."
          >
            <textarea
              value={rules.allowlistChannels.join('\n')}
              onChange={(e) => updateList('allowlistChannels', e.target.value)}
              placeholder="Enter names..."
              className="flex min-h-[200px] w-full rounded-xl border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
            />
          </FormField>

          <FormField
            label="Safe Keywords"
            description="Terms that bypass all filters."
          >
            <textarea
              value={rules.allowlistKeywords.join('\n')}
              onChange={(e) => updateList('allowlistKeywords', e.target.value)}
              placeholder="Enter keywords..."
              className="flex min-h-[200px] w-full rounded-xl border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}