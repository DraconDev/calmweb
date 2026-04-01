import { useEffect, useState, useCallback } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { UserSettings, UserRules, Stats, NeutralizationSettings, MediaFilterSettings, SiteFilterSettings } from '@calmweb/shared';
import { defaultUserSettings, defaultNeutralizationSettings, defaultMediaFilterSettings, defaultSiteFilterSettings } from '@calmweb/shared';
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
  Wand2,
  EyeOff,
  Filter,
  ImageOff,
  Ban,
  RefreshCcw,
} from 'lucide-react';
import clsx from 'clsx';


type TabId = 'overview' | 'presets' | 'rules' | 'neutralize' | 'media' | 'sites';

interface PresetsTabProps {
  presets: { politics: boolean; ragebait: boolean; spoilers: boolean; clickbait: boolean };
  onChange: (presets: { politics: boolean; ragebait: boolean; spoilers: boolean; clickbait: boolean }) => void;
}

interface CustomRulesTabProps {
  rules: UserRules;
  onChange: (rules: UserRules) => void;
}

interface NeutralizeTabProps {
  settings: NeutralizationSettings;
  onChange: (settings: NeutralizationSettings) => void;
}

interface MediaFilterTabProps {
  settings: MediaFilterSettings;
  onChange: (settings: MediaFilterSettings) => void;
}

interface SitesTabProps {
  settings: SiteFilterSettings;
  onChange: (settings: SiteFilterSettings) => void;
}

export default function OptionsApp() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const hash = window.location.hash.slice(1) as TabId;
    const validTabs: TabId[] = ['overview', 'presets', 'rules', 'neutralize'];
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
    { id: 'media', label: 'Media Filter', icon: ImageOff },
    { id: 'sites', label: 'Site Filter', icon: Ban },
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
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-500">

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <StatCard label="Items Filtered" value={stats.totalFiltered.toLocaleString()} icon={ShieldAlert} />
                  <StatCard label="Active Rules" value={(settings.rules.blocklistChannels.length + settings.rules.blocklistKeywords.length).toString()} icon={Database} />
                  <StatCard label="Protection" value="Neural" icon={Zap} highlight />
                </div>

                {/* Master Toggle */}
                <div className="rounded-xl bg-card border border-border p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${settings.enabled ? 'bg-green-500/10 text-green-500' : 'bg-muted text-muted-foreground'}`}>
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Protection {settings.enabled ? 'Active' : 'Paused'}</h3>
                        <p className="text-xs text-muted-foreground">
                          {settings.enabled ? 'Filtering content on all pages' : 'All content is shown unfiltered'}
                        </p>
                      </div>
                    </div>
                    <Switch checked={settings.enabled} onCheckedChange={(enabled) => saveSettings({ enabled })} />
                  </div>
                </div>

                {/* Quick Filters */}
                <div className="rounded-xl bg-card border border-border p-5">
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2 text-muted-foreground">
                    <ShieldAlert size={14} />
                    Quick Filters
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { id: 'politics', label: 'Politics', icon: '🏛️' },
                      { id: 'ragebait', label: 'Ragebait', icon: '😤' },
                      { id: 'spoilers', label: 'Spoilers', icon: '🙈' },
                      { id: 'clickbait', label: 'Clickbait', icon: '🎣' },
                    ].map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => {
                          const newPresets = { ...settings.rules.presets, [preset.id]: !settings.rules.presets[preset.id as keyof typeof settings.rules.presets] };
                          saveSettings({ rules: { ...settings.rules, presets: newPresets } });
                        }}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all text-sm ${
                          settings.rules.presets[preset.id as keyof typeof settings.rules.presets]
                            ? 'bg-primary/10 text-foreground'
                            : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                        }`}
                      >
                        <span>{preset.icon}</span>
                        <span className="font-medium">{preset.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Filtering */}
                <div className="rounded-xl bg-card border border-border p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                        <EyeOff size={16} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Content Filtering</h3>
                        <p className="text-xs text-muted-foreground">
                          Images, videos, and audio stripped. Icons preserved. Text only.
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                      Always On
                    </span>
                  </div>
                </div>

                {/* Filter Lists */}
                <div className="rounded-xl bg-card border border-border p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Filter size={16} className="text-primary" />
                      <h3 className="font-semibold text-sm">Filter Lists</h3>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-green-500/10 text-green-500 px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>EasyList (Ads)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>EasyPrivacy (Trackers)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>Fanboy Annoyances</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Neutralization */}
                  <div className="rounded-xl bg-card border border-border p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${settings.neutralization?.enabled ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                          <Wand2 size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">Neutralization</h3>
                          <p className="text-xs text-muted-foreground">
                            {settings.neutralization?.enabled ? `${settings.neutralization.mode} mode` : 'Inactive'}
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.neutralization?.enabled || false}
                        onCheckedChange={(enabled) => saveSettings({ neutralization: { ...settings.neutralization, enabled } })}
                      />
                    </div>
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

            {activeTab === 'media' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <MediaFilterTab
                  settings={settings.mediaFilter || defaultMediaFilterSettings}
                  onChange={(mediaFilter) => saveSettings({ mediaFilter })}
                />
              </div>
            )}

            {activeTab === 'sites' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <SitesTab
                  settings={settings.siteFilter || defaultSiteFilterSettings}
                  onChange={(siteFilter) => saveSettings({ siteFilter })}
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

// ============================================================================
// Media Filter Tab Component
// ============================================================================

function MediaFilterTab({ settings, onChange }: MediaFilterTabProps) {
  const modes = [
    { id: 'off', name: 'Off', desc: 'No media filtering', icon: '🚫' },
    { id: 'blur', name: 'Blur', desc: 'Blur suspicious images, reveal on hover', icon: '🌫️' },
    { id: 'hide', name: 'Hide', desc: 'Completely hide suspicious images', icon: '👁️‍🗨️' },
  ] as const;

  return (
    <div className="space-y-8 max-w-2xl">
      <Card padding="lg" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full text-primary">
            <ImageOff size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Enable Media Filter</h4>
            <p className="text-sm text-muted-foreground">Filter images based on alt text analysis</p>
          </div>
        </div>
        <Switch
          checked={settings.enabled}
          onCheckedChange={(enabled) => onChange({ ...settings, enabled })}
        />
      </Card>

      <Card padding="lg">
        <h4 className="font-bold text-lg mb-4">Filter Mode</h4>
        <div className="grid grid-cols-3 gap-4">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => onChange({ ...settings, mode: mode.id as 'off' | 'blur' | 'hide' })}
              className={clsx(
                "p-4 rounded-xl border-2 text-left transition-all",
                settings.mode === mode.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground/50"
              )}
            >
              <span className="text-2xl mb-2 block">{mode.icon}</span>
              <h5 className="font-bold">{mode.name}</h5>
              <p className="text-xs text-muted-foreground">{mode.desc}</p>
            </button>
          ))}
        </div>
      </Card>

      <Card padding="lg">
        <h4 className="font-bold text-lg mb-4">Options</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Show Toggle Button</h5>
              <p className="text-sm text-muted-foreground">Floating button to quickly toggle filtering</p>
            </div>
            <Switch
              checked={settings.showToggle}
              onCheckedChange={(showToggle) => onChange({ ...settings, showToggle })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Reveal on Hover</h5>
              <p className="text-sm text-muted-foreground">Show blurred images when hovering</p>
            </div>
            <Switch
              checked={settings.revealOnHover}
              onCheckedChange={(revealOnHover) => onChange({ ...settings, revealOnHover })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Analyze Alt Text</h5>
              <p className="text-sm text-muted-foreground">Check image alt attributes for clickbait</p>
            </div>
            <Switch
              checked={settings.analyzeAltText}
              onCheckedChange={(analyzeAltText) => onChange({ ...settings, analyzeAltText })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Filter Thumbnails</h5>
              <p className="text-sm text-muted-foreground">Site-specific thumbnail filtering (YouTube, Reddit, X)</p>
            </div>
            <Switch
              checked={settings.analyzeThumbnails}
              onCheckedChange={(analyzeThumbnails) => onChange({ ...settings, analyzeThumbnails })}
            />
          </div>
        </div>
      </Card>

      <Card padding="lg">
        <h4 className="font-bold text-lg mb-4">Sensitivity</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Adjust how aggressively images are filtered based on clickbait confidence score.
        </p>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Blur Threshold</span>
              <span className="font-mono">{(settings.blurThreshold * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={settings.blurThreshold * 100}
              onChange={(e) => onChange({ ...settings, blurThreshold: parseInt(e.target.value) / 100 })}
              className="w-full accent-primary"
            />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Hide Threshold</span>
              <span className="font-mono">{(settings.hideThreshold * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={settings.hideThreshold * 100}
              onChange={(e) => onChange({ ...settings, hideThreshold: parseInt(e.target.value) / 100 })}
              className="w-full accent-primary"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

// ============================================================================
// Sites Tab Component
// ============================================================================

const SITE_CATEGORIES_UI = [
  { id: 'social_media', name: 'Social Media', icon: '👥', desc: 'Facebook, Twitter, Instagram, TikTok, Reddit' },
  { id: 'gambling', name: 'Gambling', icon: '🎰', desc: 'Online casinos, betting, lottery sites' },
  { id: 'adult', name: 'Adult Content', icon: '🔞', desc: 'Pornography and adult material' },
  { id: 'piracy', name: 'Piracy', icon: '🏴‍☠️', desc: 'Torrent, streaming, download sites' },
  { id: 'malware', name: 'Malware', icon: '🦠', desc: 'Known malicious and phishing sites' },
  { id: 'spam', name: 'Spam & Clickbait', icon: '📧', desc: 'Low-quality, spammy content farms' },
  { id: 'fake_news', name: 'Fake News', icon: '📰', desc: 'Known disinformation sources' },
  { id: 'productivity', name: 'Productivity Blockers', icon: '⏰', desc: 'Distractions during work hours' },
  { id: 'shopping', name: 'Shopping', icon: '🛒', desc: 'E-commerce sites' },
  { id: 'gaming', name: 'Gaming', icon: '🎮', desc: 'Gaming sites and platforms' },
  { id: 'streaming', name: 'Streaming', icon: '📺', desc: 'Video and music streaming' },
  { id: 'news', name: 'News Sites', icon: '📰', desc: 'General news outlets' },
] as const;

function SitesTab({ settings, onChange }: SitesTabProps) {
  const [blocklistStats, setBlocklistStats] = useState<{
    totalDomains: number;
    bySource: { id: string; name: string; count: number }[];
    lastUpdated: number | null;
  } | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const toggleCategory = (categoryId: string) => {
    const current = settings.blockedCategories || [];
    const updated = current.includes(categoryId as any)
      ? current.filter(c => c !== categoryId)
      : [...current, categoryId as any];
    onChange({ ...settings, blockedCategories: updated });
  };

  const loadBlocklistStats = async () => {
    try {
      const result = await sendToBackground<{
        totalDomains: number;
        bySource: { id: string; name: string; count: number }[];
        lastUpdated: number | null;
      }>({ type: 'calmweb:getBlocklistStats' });
      setBlocklistStats(result);
    } catch (error) {
      console.error('Failed to load blocklist stats:', error);
    }
  };

  const refreshBlocklists = async () => {
    setRefreshing(true);
    try {
      await sendToBackground({ type: 'calmweb:refreshBlocklists' });
      await loadBlocklistStats();
    } catch (error) {
      console.error('Failed to refresh blocklists:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadBlocklistStats();
  }, []);

  const formatLastUpdated = (timestamp: number | null) => {
    if (!timestamp) return 'Never';
    const diff = Date.now() - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <Card padding="lg" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-500/10 rounded-full text-red-500">
            <Ban size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Enable Site Filtering</h4>
            <p className="text-sm text-muted-foreground">Block sites by category or custom list</p>
          </div>
        </div>
        <Switch
          checked={settings.enabled}
          onCheckedChange={(enabled) => onChange({ ...settings, enabled })}
        />
      </Card>

      <Card padding="lg">
        <h4 className="font-bold text-lg mb-4">Site Blocking</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Block Access to Blocked Sites</h5>
              <p className="text-sm text-muted-foreground">Show blocked page instead of loading site</p>
            </div>
            <Switch
              checked={settings.blockBlockedSites}
              onCheckedChange={(blockBlockedSites) => onChange({ ...settings, blockBlockedSites })}
            />
          </div>
        </div>
      </Card>

      <Card padding="lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-lg">External Blocklists</h4>
          <button
            onClick={refreshBlocklists}
            disabled={refreshing}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-50"
          >
            <RefreshCcw size={14} className={refreshing ? 'animate-spin' : ''} />
            {refreshing ? 'Updating...' : 'Update Now'}
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-2xl font-bold text-primary">
              {blocklistStats?.totalDomains?.toLocaleString() || '...'}
            </p>
            <p className="text-xs text-muted-foreground">Total Domains</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-2xl font-bold">
              {blocklistStats?.bySource?.length || 0}
            </p>
            <p className="text-xs text-muted-foreground">Sources</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-lg font-bold">
              {formatLastUpdated(blocklistStats?.lastUpdated ?? null)}
            </p>
            <p className="text-xs text-muted-foreground">Last Updated</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Auto-updates every 6 hours. Sources: Steven Black, OISD, blocklist.site
        </p>
      </Card>

      <Card padding="lg">
        <h4 className="font-bold text-lg mb-4">Search Result Filtering</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Filter Search Results</h5>
              <p className="text-sm text-muted-foreground">Hide blocked sites from Google, Bing, DuckDuckGo</p>
            </div>
            <Switch
              checked={settings.searchFilterEnabled}
              onCheckedChange={(searchFilterEnabled) => onChange({ ...settings, searchFilterEnabled })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Hide Blocked Results</h5>
              <p className="text-sm text-muted-foreground">Remove blocked sites from search results</p>
            </div>
            <Switch
              checked={settings.hideBlockedResults}
              onCheckedChange={(hideBlockedResults) => onChange({ ...settings, hideBlockedResults })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Show Category Badges</h5>
              <p className="text-sm text-muted-foreground">Display category indicator on results</p>
            </div>
            <Switch
              checked={settings.showCategoryBadge}
              onCheckedChange={(showCategoryBadge) => onChange({ ...settings, showCategoryBadge })}
            />
          </div>
        </div>
      </Card>

      <Card padding="lg">
        <h4 className="font-bold text-lg mb-4">Blocked Categories</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Enable categories to block all sites in that category.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {SITE_CATEGORIES_UI.map((category) => {
            const isBlocked = settings.blockedCategories?.includes(category.id as any);
            return (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={clsx(
                  "p-4 rounded-xl border-2 text-left transition-all",
                  isBlocked
                    ? "border-red-500 bg-red-500/5"
                    : "border-border hover:border-muted-foreground/50"
                )}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{category.icon}</span>
                  <h5 className="font-bold text-sm">{category.name}</h5>
                  {isBlocked && <span className="text-xs text-red-500 ml-auto">Blocked</span>}
                </div>
                <p className="text-xs text-muted-foreground">{category.desc}</p>
              </button>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        <Card padding="lg">
          <h4 className="font-bold text-lg mb-4 text-red-500">Custom Blocklist</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Add specific domains to block.
          </p>
          <textarea
            value={(settings.customBlocklist || []).join('\n')}
            onChange={(e) => onChange({ 
              ...settings, 
              customBlocklist: e.target.value.split('\n').map(s => s.trim()).filter(Boolean) 
            })}
            placeholder="example.com&#10;anothersite.com"
            className="flex min-h-[150px] w-full rounded-xl border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
          />
        </Card>

        <Card padding="lg">
          <h4 className="font-bold text-lg mb-4 text-green-500">Custom Allowlist</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Domains that will never be blocked.
          </p>
          <textarea
            value={(settings.customAllowlist || []).join('\n')}
            onChange={(e) => onChange({ 
              ...settings, 
              customAllowlist: e.target.value.split('\n').map(s => s.trim()).filter(Boolean) 
            })}
            placeholder="trusted-site.com&#10;allowed-site.com"
            className="flex min-h-[150px] w-full rounded-xl border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
          />
        </Card>
      </div>
    </div>
  );
}