import { useEffect, useState, useCallback } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { UserSettings, PresetSelection, UserRules } from '@calmweb/shared';
import { defaultUserSettings } from '@calmweb/shared';
import {
  Container,
  Card,
  Header,
  Footer,
  PageLayout,
  Tabs,
  TabList,
  TabTrigger,
  TabContent,
  Switch,
  Spinner,
  FormField,
  FormRow,
} from '@components';

export default function OptionsApp() {
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
      // Merge updates for local state
      let nextSettings = { ...settings, ...updates };
      if (updates.rules) {
        nextSettings.rules = { ...settings.rules, ...updates.rules };
      }
      
      setSettings(nextSettings);
      
      await sendToBackground({
        type: MESSAGE_TYPES.UPDATE_SETTINGS,
        settings: updates,
      });
    } catch (error) {
      console.error('[Options] Failed to save settings:', error);
    } finally {
      setTimeout(() => setSaving(false), 500); // Small delay for visual feedback
    }
  }, [settings]);

  if (loading) {
    return (
      <Container className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </Container>
    );
  }

  return (
    <PageLayout
      header={
        <Header
          title="CalmWeb Options"
          subtitle="Customize your content filtering and AI processing"
          sticky
        />
      }
      footer={
        <Footer className="flex items-center justify-between text-muted-foreground">
          <span>CalmWeb v1.0.0</span>
          <div className="flex items-center gap-2">
            {saving && (
              <>
                <Spinner size="sm" />
                <span className="text-primary font-medium">Saving changes...</span>
              </>
            )}
            {!saving && <span className="text-green-500 font-medium">All changes saved</span>}
          </div>
        </Footer>
      }
    >
      <Container size="lg" className="py-8">
        <Tabs defaultValue="presets">
          <TabList className="mb-8">
            <TabTrigger value="presets">Presets</TabTrigger>
            <TabTrigger value="rules">Custom Rules</TabTrigger>
            <TabTrigger value="advanced">Advanced</TabTrigger>
          </TabList>

          <TabContent value="presets">
            <PresetsTab
              presets={settings.rules.presets}
              onChange={(presets) => saveSettings({ rules: { ...settings.rules, presets } })}
            />
          </TabContent>

          <TabContent value="rules">
            <CustomRulesTab
              rules={settings.rules}
              onChange={(rules) => saveSettings({ rules })}
            />
          </TabContent>

          <TabContent value="advanced">
            <AdvancedTab
              processingMode={settings.processingMode}
              strictness={settings.strictness}
              byokKey={settings.byokKey || ''}
              onChange={(updates) => saveSettings(updates)}
            />
          </TabContent>
        </Tabs>
      </Container>
    </PageLayout>
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
    onChange({ ...presets, [key]: !presets[key] });
  };

  return (
    <div className="space-y-6">
      <Card variant="muted" padding="md" className="mb-6">
        <h2 className="font-semibold mb-1">Quick Filter Presets</h2>
        <p className="text-sm text-muted-foreground">
          Enable these presets to automatically block common content types using curated keyword lists.
        </p>
      </Card>

      <div className="grid gap-4">
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
    <Card variant="default" padding="md" className="flex items-center justify-between">
      <div className="space-y-0.5">
        <div className="font-medium">{label}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </Card>
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
    <div className="space-y-8">
      <Card variant="muted" padding="md">
        <h2 className="font-semibold mb-1">Processing & AI</h2>
        <p className="text-sm text-muted-foreground">
          Control how content is classified and configure your AI provider.
        </p>
      </Card>

      <div className="space-y-6 max-w-2xl">
        <FormField
          label="Processing Mode"
          description="Choose between local rule-based filtering or advanced AI classification."
        >
          <select
            value={processingMode}
            onChange={(e) => onChange({ processingMode: e.target.value as UserSettings['processingMode'] })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="local_rules">Local Rules Only (Fastest, no AI)</option>
            <option value="byok_llm">BYOK LLM (Bring Your Own Key)</option>
            <option value="hosted_llm">Hosted AI (Managed platform API)</option>
          </select>
        </FormField>

        <FormField
          label={`Classification Strictness: ${strictness}%`}
          description="Higher strictness will filter more content but may have more false positives."
        >
          <div className="pt-2">
            <input
              type="range"
              min="0"
              max="100"
              value={strictness}
              onChange={(e) => onChange({ strictness: parseInt(e.target.value) })}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
              <span>Permissive</span>
              <span>Balanced</span>
              <span>Strict</span>
            </div>
          </div>
        </FormField>

        {processingMode === 'byok_llm' && (
          <FormField
            label="OpenAI API Key (BYOK)"
            description="Your key is stored locally and used only for classification requests."
          >
            <input
              type="password"
              value={byokKey}
              onChange={(e) => onChange({ byokKey: e.target.value })}
              placeholder="sk-..."
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </FormField>
        )
        }

        <div className="pt-4 border-t">
          <button
            onClick={async () => {
              await sendToBackground({ type: MESSAGE_TYPES.CLEAR_CACHE });
              alert('Classification cache cleared successfully.');
            }}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Clear Decision Cache
          </button>
        </div>
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
    <div className="space-y-8">
      <Card variant="muted" padding="md">
        <h2 className="font-semibold mb-1">Custom Rules</h2>
        <p className="text-sm text-muted-foreground">
          Define specific channel names or keywords to block or allow. Enter one item per line.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Blocklist</h3>
          
          <FormField
            label="Blocked Channels"
            description="Exact names or parts of channel names to hide."
          >
            <textarea
              value={rules.blocklistChannels.join('\n')}
              onChange={(e) => updateList('blocklistChannels', e.target.value)}
              placeholder="e.g.\nCNN\nFox News\nDramaChannel"
              className="flex min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </FormField>

          <FormField
            label="Blocked Keywords"
            description="Titles containing these words will be hidden."
          >
            <textarea
              value={rules.blocklistKeywords.join('\n')}
              onChange={(e) => updateList('blocklistKeywords', e.target.value)}
              placeholder="e.g.\nleaked\nending explained\nrumor"
              className="flex min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </FormField>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Allowlist</h3>
          
          <FormField
            label="Allowed Channels"
            description="These channels will always be shown (overrides blocklist)."
          >
            <textarea
              value={rules.allowlistChannels.join('\n')}
              onChange={(e) => updateList('allowlistChannels', e.target.value)}
              placeholder="e.g.\nVeritasium\nKurzgesagt"
              className="flex min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </FormField>

          <FormField
            label="Allowed Keywords"
            description="Titles with these words will always be shown."
          >
            <textarea
              value={rules.allowlistKeywords.join('\n')}
              onChange={(e) => updateList('allowlistKeywords', e.target.value)}
              placeholder="e.g.\nDocumentary\nTutorial"
              className="flex min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}

