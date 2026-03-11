import React, { useEffect, useState, useCallback } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { UserSettings, PresetSelection } from '@calmweb/shared';
import { defaultUserSettings } from '@calmweb/shared';

type TabId = 'presets' | 'advanced' | 'rules';

export default function OptionsApp() {
  const [activeTab, setActiveTab] = useState<TabId>('presets');
  const [settings, setSettings] = useState<UserSettings>(defaultUserSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await sendToBackground<UserSettings>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (data) {
        setSettings(data);
      }
    } catch (error) {
      console.error('[Options] Failed to load settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = useCallback(async (updates: Partial<UserSettings>) => {
    setSaving(true);
    try {
      await sendToBackground({
        type: MESSAGE_TYPES.UPDATE_SETTINGS,
        settings: updates,
      });
      // Update local state optimistically
      setSettings(prev => ({ ...prev, ...updates }));
    } catch (error) {
      console.error('[Options] Failed to save settings:', error);
    } finally {
      setSaving(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'presets':
        return (
          <PresetsTab 
            presets={settings.rules.presets} 
            onChange={(presets) => saveSettings({ rules: { ...settings.rules, presets } })}
          />
        );
      case 'advanced':
        return (
          <AdvancedTab
            processingMode={settings.processingMode}
            strictness={settings.strictness}
            byokKey={settings.byokKey || ''}
            onChange={(updates) => saveSettings(updates)}
          />
        );
      case 'rules':
        return (
          <CustomRulesTab
            rules={settings.rules}
            onChange={(rules) => saveSettings({ rules })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">CalmWeb Options</h1>
          <p className="text-sm text-muted-foreground">Customize your content filtering</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex border-b mb-6">
          {(['presets', 'advanced', 'rules'] as TabId[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab === 'presets' ? 'Presets' : tab === 'advanced' ? 'Advanced' : 'Custom Rules'}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="space-y-6">
          {renderContent()}
        </div>
      </div>

      {/* Footer status */}
      <footer className="border-t mt-8">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between text-sm text-muted-foreground">
          <span>CalmWeb v1.0.0</span>
          {saving && <span className="text-primary">Saving...</span>}
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// Presets Tab
// ============================================================================

interface PresetsTabProps {
  presets: PresetSelection;
  onChange: (presets: PresetSelection) => void;
}

function PresetsTab({ presets, onChange }: PresetsTabProps) {
  const toggle = (key: keyof PresetSelection) => {
    const newPresets = { ...presets, [key]: !presets[key] };
    onChange(newPresets);
  };

  return (
    <div className="space-y-4">
      <div className="bg-muted/50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Quick Filter Presets</h2>
        <p className="text-sm text-muted-foreground">
          Enable these presets to automatically block common content types using curated keyword lists.
        </p>
      </div>

      <div className="space-y-3">
        <PresetToggle
          label="Block Politics"
          description="Filter election, party, and political figure discussions"
          checked={presets.politics}
          onChange={() => toggle('politics')}
        />
        <PresetToggle
          label="Block Ragebait"
          description="Filter outrage-inducing, shocking, or enraging content"
          checked={presets.ragebait}
          onChange={() => toggle('ragebait')}
        />
        <PresetToggle
          label="Block Spoilers"
          description="Filter content with spoilers for movies, games, shows"
          checked={presets.spoilers}
          onChange={() => toggle('spoilers')}
        />
        <PresetToggle
          label="Block Clickbait"
          description="Filter sensational, misleading, or 'click here' content"
          checked={presets.clickbait}
          onChange={() => toggle('clickbait')}
        />
      </div>
    </div>
  );
}

function PresetToggle({ label, description, checked, onChange }: {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`w-11 h-6 rounded-full transition-colors ${
          checked ? 'bg-primary' : 'bg-muted'
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}

// ============================================================================
// Advanced Tab
// ============================================================================

interface AdvancedTabProps {
  processingMode: UserSettings['processingMode'];
  strictness: number;
  byokKey: string;
  onChange: (updates: Partial<UserSettings>) => void;
}

function AdvancedTab({ processingMode, strictness, byokKey, onChange }: AdvancedTabProps) {
  return (
    <div className="space-y-6">
      <div className="bg-muted/50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Advanced Settings</h2>
        <p className="text-sm text-muted-foreground">
          Control how content is classified and use your own AI API key.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Processing Mode</label>
        <select
          value={processingMode}
          onChange={(e) => onChange({ processingMode: e.target.value as UserSettings['processingMode'] })}
          className="w-full p-2 border rounded-md bg-background"
        >
          <option value="local_rules">Local Rules Only (fast)</option>
          <option value="byok_llm">BYOK LLM (Bring Your Own Key)</option>
          <option value="hosted_llm">Hosted AI (requires subscription)</option>
        </select>
        <p className="text-xs text-muted-foreground mt-1">
          {processingMode === 'local_rules' && 'Only use keyword/channel rules. Fastest, no AI.'}
          {processingMode === 'byok_llm' && 'Use OpenAI-compatible API key for AI moderation.'}
          {processingMode === 'hosted_llm' && 'Use Dracon platform AI (requires active subscription).'}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Strictness: {strictness}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={strictness}
          onChange={(e) => onChange({ strictness: parseInt(e.target.value) })}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Permissive (more shown)</span>
          <span>Strict (more filtered)</span>
        </div>
      </div>

      {processingMode === 'byok_llm' && (
        <div>
          <label className="block text-sm font-medium mb-2">
            OpenAI API Key (BYOK)
          </label>
          <input
            type="password"
            value={byokKey}
            onChange={(e) => onChange({ byokKey: e.target.value })}
            placeholder="sk-..."
            className="w-full p-2 border rounded-md bg-background"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Your key is stored locally and used to call OpenAI-compatible APIs.
          </p>
        </div>
      )}

      <div className="border-t pt-4">
        <button
          onClick={async () => {
            await sendToBackground({ type: MESSAGE_TYPES.CLEAR_CACHE });
            alert('Decision cache cleared.');
          }}
          className="px-4 py-2 text-sm border rounded-md hover:bg-muted transition-colors"
        >
          Clear Decision Cache
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// Custom Rules Tab
// ============================================================================

interface CustomRulesTabProps {
  rules: UserSettings['rules'];
  onChange: (rules: UserSettings['rules']) => void;
}

function CustomRulesTab({ rules, onChange }: CustomRulesTabProps) {
  const updateList = (field: keyof UserRules, value: string) => {
    const items = value.split('\n').map(line => line.trim()).filter(Boolean);
    onChange({
      ...rules,
      [field]: items,
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-muted/50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Custom Rules</h2>
        <p className="text-sm text-muted-foreground">
          Define your own channel names and keywords to block or allow. One per line.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Blocklist */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Blocklist Channels
            </label>
            <textarea
              value={rules.blocklistChannels.join('\n')}
              onChange={(e) => updateList('blocklistChannels', e.target.value)}
              placeholder="Channel names to hide (e.g., CNN, Fox News)"
              className="w-full h-32 p-2 border rounded-md bg-background text-sm"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Content from these channel names will be hidden.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Blocklist Keywords
            </label>
            <textarea
              value={rules.blocklistKeywords.join('\n')}
              onChange={(e) => updateList('blocklistKeywords', e.target.value)}
              placeholder="Keywords in title to hide (e.g., spoiler, leaked)"
              className="w-full h-32 p-2 border rounded-md bg-background text-sm"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Titles containing these words will be hidden.
            </p>
          </div>
        </div>

        {/* Allowlist */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Allowlist Channels
            </label>
            <textarea
              value={rules.allowlistChannels.join('\n')}
              onChange={(e) => updateList('allowlistChannels', e.target.value)}
              placeholder="Channels to always show (overrides blocklists)"
              className="w-full h-32 p-2 border rounded-md bg-background text-sm"
            />
            <p className="text-xs text-muted-foreground mt-1">
              These channels will always be shown even if other rules match.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Allowlist Keywords
            </label>
            <textarea
              value={rules.allowlistKeywords.join('\n')}
              onChange={(e) => updateList('allowlistKeywords', e.target.value)}
              placeholder="Keywords to always show"
              className="w-full h-32 p-2 border rounded-md bg-background text-sm"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Titles containing these words will always be shown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
