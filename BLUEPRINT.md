# CalmWeb Extension - Implementation Blueprint

## Project Overview
CalmWeb is a Manifest V3 content firewall extension built with WXT. It observes DOM mutations on supported sites (YouTube, Reddit, X, News), extracts text/metadata from repeated "content cards", calculates a fingerprint, and classifies content via Rules → BYOK API → Hosted API. Based on the decision, it hides, blurs, neutralizes text, or rebuilds cards.

**Monorepo Structure** (as per spec):
```
calmweb/
├── packages/
│   ├── shared/     # TS interfaces, Zod schemas, constants
│   └── ui/         # Shared UI components (optional, can extend @dracon/wxt-shared/ui)
├── apps/
│   ├── web/        # SaaS dashboard (ignore for now)
│   └── extension/  # WXT app - main extension code
```

## Leveraging Existing Libraries

### @dracon/wxt-shared
The parent repository provides `wxt-shared` (located at `/home/dracon/Dev/extensions/wxt-shared/`) with:

1. **Storage utilities** (`@dracon/wxt-shared/storage`)
   - `createStore<T>(key, fallback)` for typed storage
   - `createAuthStore(key)` & `createSettingsStore(key)` pre-built
   - Uses `wxt/utils/storage` under the hood

2. **API Client** (`@dracon/wxt-shared/api`)
   - `createApiClient(options)` with auto-auth, token refresh, proxy support
   - Methods: `get()`, `post()`, `put()`, `del()`, `chatCompletions()`
   - Automatically proxies through background when called from content scripts

3. **Auth flow** (`@dracon/wxt-shared/auth`)
   - OAuth with Google/GitHub/Discord
   - `createAuthFlow(options)` handles login, logout, token exchange
   - Includes JWT utilities: `decodeJWT()`, `isTokenExpired()`, `getUserFromToken()`

4. **Background utilities** (`@dracon/wxt-shared/background`)
   - `createMessageRouter({ apiClient, handlers, onUnhandled })`
   - Handles `apiProxyRequest` messages automatically
   - Provides lifecycle setup, context menus, tab utilities

5. **Extension factory** (`@dracon/wxt-shared/extension`)
   - `createExtension(options)` sets up everything in one call
   - Provides: `apiClient`, `authFlow`, `authStore`, `getAuthState()`, `isAuthenticated()`
   - Helpers: `isContentScript()`, `sendToBackground()`, `openInNewTab()`, etc.

6. **Config** (`@dracon/wxt-shared/config`)
   - `createConfig({ appName, env, debug })` with environment auto-detection
   - Environment variables: `WXT_API_URL`, `WXT_DRACON_URL`, `VITE_APP_ENV`, `WXT_DEBUG`
   - Supports local/stage/prod

7. **Types** (`@dracon/wxt-shared/types/env`)
   - TypeScript definitions for the above environment variables

### @dracon/wxt-starter
A complete WXT React + Tailwind starter template at `/home/dracon/Dev/extensions/wxt-starter/` showing:
- WXT config with Manifest V3, permissions, host_permissions
- React 19 + Radix UI themes + Tailwind CSS setup
- Example entrypoints: `background.ts`, `content.ts`, `popup/`
- ESLint + Prettier + Vitest configured

## Core Interfaces (to be placed in `packages/shared/src/index.ts`)

```typescript
export type ProcessingMode = 'local_rules' | 'byok_llm' | 'hosted_llm';
export type ActionDecision = 'show' | 'blur' | 'hide' | 'neutralize' | 'rebuild';

export interface ContentUnit {
  id: string; // DOM node ID or generated hash
  site: string; // 'youtube', 'reddit', 'x', 'news'
  fingerprint: string; // Hash of title + source
  sourceName?: string; // Channel/Subreddit name
  title: string;
  metadata: string[]; // Alt text, aria-labels, badges
  isNew: boolean; // True if just inserted via infinite scroll
  url?: string; // Optional link to content
  element?: HTMLElement; // Temporary reference, not serialized
}

export interface ClassificationResult {
  decision: ActionDecision;
  confidence: number; // 0-1
  reason: string;
  neutralizedTitle?: string; // If 'neutralize' was selected
}

export interface SiteAdapter {
  siteId: string;
  matches: RegExp[]; // URL patterns this adapter handles
  discoverUnits: (root: Document | HTMLElement) => HTMLElement[];
  extractData: (element: HTMLElement) => ContentUnit;
  applyDecision: (element: HTMLElement, result: ClassificationResult) => void;
}

export interface UserSettings {
  enabled: boolean;
  processingMode: ProcessingMode;
  strictness: number; // 0-100 threshold for confidence
  rules: UserRules;
  byokKey?: string; // OpenAI/Anthropic API key
}

export interface UserRules {
  blocklistChannels: string[]; // sourceName matches
  blocklistKeywords: string[]; // title regex matches
  allowlistChannels: string[];
  allowlistKeywords: string[];
  presets: PresetSelection;
}

export interface PresetSelection {
  politics: boolean;
  ragebait: boolean;
  spoilers: boolean;
  clickbait: boolean;
}

// Storage keys (consistent naming)
const STORAGE_KEYS = {
  SETTINGS: 'local:settings' as const,
  DECISION_CACHE: 'local:decisionCache' as const,
  BYOK_KEYS: 'local:byokKeys' as const,
  STATS: 'local:stats' as const,
};
```

## Phase 1: WXT Config & Storage Foundation

**File: `apps/extension/wxt.config.ts`**
```typescript
import { defineConfig } from 'wxt';
import { createOptimizedConfig } from '@dracon/wxt-shared/config';

// Use shared optimized config
export default createOptimizedConfig({
  appName: 'CalmWeb',
  appId: 'calmweb',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    description: '__MSG_extDescription__',
    default_locale: 'en',
    permissions: ['storage', 'activeTab', ' scripting'],
    host_permissions: [
      '*://*.youtube.com/*',
      '*://*.reddit.com/*',
      '*://*.x.com/*',
      '*://*.twitter.com/*',
      '*://*.news.com/*', // Will need to define supported news sites
    ],
    icons: {
      '16': 'icon/16.png',
      '32': 'icon/32.png',
      '48': 'icon/48.png',
      '96': 'icon/96.png',
      '128': 'icon/128.png',
    },
    action: {
      default_popup: 'popup.html',
      default_icon: {
        '16': 'icon/16.png',
        '32': 'icon/32.png',
        '48': 'icon/48.png',
        '128': 'icon/128.png',
      },
    },
    background: {
      service_worker: 'background.ts',
      type: 'module',
    },
    web_accessible_resources: [
      {
        resources: ['styles.css', 'assets/*'],
        matches: ['<all_urls>'],
      },
    ],
  },
});
```

**Storage Setup** (in `apps/extension/utils/storage.ts`):
```typescript
import { createStore, createSettingsStore } from '@dracon/wxt-shared/storage';
import type { UserSettings } from '@calmweb/shared'; // from packages/shared

export const defaultSettings: UserSettings = {
  enabled: true,
  processingMode: 'local_rules',
  strictness: 80,
  rules: {
    blocklistChannels: [],
    blocklistKeywords: [],
    allowlistChannels: [],
    allowlistKeywords: [],
    presets: {
      politics: false,
      ragebait: false,
      spoilers: false,
      clickbait: false,
    },
  },
  byokKey: undefined,
};

// Typed storage items
export const settingsStore = createSettingsStore<UserSettings>('local:settings', defaultSettings);
export const decisionCache = createStore<Map<string, ClassificationResult>>('local:decisionCache', new Map());
export const byokKeysStore = createStore<{ openai?: string; anthropic?: string }>('local:byokKeys', {});
export const statsStore = createStore<{ totalFiltered: number; lastReset: number }>('local:stats', {
  totalFiltered: 0,
  lastReset: Date.now(),
});
```

## Phase 2: The Message Bus

**File: `apps/extension/src/messaging/index.ts`**
```typescript
import type { ContentUnit, ClassificationResult } from '@calmweb/shared';

export const MESSAGE_TYPES = {
  CLASSIFY_UNIT: 'classifyUnit',
  GET_SETTINGS: 'getSettings',
  UPDATE_SETTINGS: 'updateSettings',
  CLEAR_CACHE: 'clearCache',
  GET_STATS: 'getStats',
  INCREMENT_STAT: 'incrementStat',
} as const;

// Content script -> Background
export interface ClassifyUnitMessage {
  type: typeof MESSAGE_TYPES.CLASSIFY_UNIT;
  unit: ContentUnit;
}

// Background -> Content script (response)
export type ClassifyUnitResponse = ClassificationResult | { error: string };

// Any direction
export interface GenericMessage<T = any> {
  type: string;
  payload?: T;
}
```

Background script will use `createMessageRouter` from `@dracon/wxt-shared/background` and add handlers for these message types.

## Phase 3: Background Worker (The Brain)

**File: `apps/extension/entrypoints/background.ts`**

```typescript
import { defineBackground } from 'wxt';
import { createMessageRouter, setupLifecycle } from '@dracon/wxt-shared/background';
import { createExtension } from '@dracon/wxt-shared/extension';
import { apiClient } from '@/utils/api'; // custom wrapper using shared apiClient
import { settingsStore, decisionCache, statsStore } from '@/utils/storage';
import { classifyContent } from '@/utils/classifier';
import { MESSAGE_TYPES } from '@/src/messaging';

// Initialize extension
const ext = createExtension({
  appName: 'CalmWeb',
  appId: 'calmweb',
});

// Custom message handlers
const handlers = {
  [MESSAGE_TYPES.CLASSIFY_UNIT]: async (message: { unit: ContentUnit }) => {
    const { unit } = message;

    try {
      // 1. Check cache first
      const cached = decisionCache.getValue().get(unit.fingerprint);
      if (cached) {
        return cached;
      }

      // 2. Get current settings
      const settings = await settingsStore.getValue();

      // 3. Rules Engine (fast local checks)
      const rulesResult = applyLocalRules(unit, settings.rules);
      if (rulesResult) {
        decisionCache.getValue().set(unit.fingerprint, rulesResult);
        return rulesResult;
      }

      // 4. LLM Router
      let result: ClassificationResult;
      if (settings.processingMode === 'byok_llm' && settings.byokKey) {
        result = await classifyWithBYOK(unit, settings.byokKey, settings.strictness);
      } else if (settings.processingMode === 'hosted_llm') {
        result = await classifyWithHosted(unit, ext.apiClient, settings.strictness);
      } else {
        // Default fallback (should not happen if UI enforces valid mode)
        result = { decision: 'show', confidence: 1, reason: 'no_processing_mode' };
      }

      // 5. Cache and return
      decisionCache.getValue().set(unit.fingerprint, result);
      return result;
    } catch (error) {
      console.error('[Background] Classification error:', error);
      // Graceful degradation: show the content
      return { decision: 'show', confidence: 0, reason: 'error', error: error.message };
    }
  },

  [MESSAGE_TYPES.GET_SETTINGS]: async () => {
    return await settingsStore.getValue();
  },

  [MESSAGE_TYPES.UPDATE_SETTINGS]: async (message: { settings: UserSettings }) => {
    await settingsStore.setValue(message.settings);
    // Clear cache when rules change
    decisionCache.getValue().clear();
    return { success: true };
  },

  [MESSAGE_TYPES.CLEAR_CACHE]: async () => {
    decisionCache.getValue().clear();
    return { success: true };
  },

  [MESSAGE_TYPES.GET_STATS]: async () => {
    return statsStore.getValue();
  },

  [MESSAGE_TYPES.INCREMENT_STAT]: async (message: { key: string; amount?: number }) => {
    const stats = statsStore.getValue();
    if (message.key === 'totalFiltered') {
      stats.totalFiltered += message.amount ?? 1;
      stats.lastReset = Date.now();
      await statsStore.setValue(stats);
    }
    return stats;
  },
};

// Create router with API client for proxy requests
const router = createMessageRouter({
  apiClient: ext.apiClient,
  handlers,
  onUnhandled: (msg) => console.warn('[Background] Unhandled message:', msg.type),
});

export default defineBackground(() => {
  console.log('[Background] CalmWeb service worker started');

  // Lifecycle
  setupLifecycle({
    onInstall: async () => {
      console.log('[Background] CalmWeb installed');
      // Initialize stores with defaults if empty
      const currentSettings = await settingsStore.getValue();
      if (!currentSettings) {
        await settingsStore.setValue(defaultSettings);
      }
    },
    onUpdate: () => {
      console.log('[Background] CalmWeb updated');
      // Maybe clear cache on major version updates
    },
  });

  // Message listener
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Use router
    router(message, sender)
      .then((response) => {
        if (response !== undefined) {
          sendResponse(response);
        }
      })
      .catch((err) => {
        console.error('[Background] Handler error:', err);
        sendResponse({ error: err.message });
      });

    return true; // Async response
  });
});
```

**Classifier Utility** (`apps/extension/utils/classifier.ts`):
```typescript
import type { ContentUnit, ClassificationResult, UserRules } from '@calmweb/shared';
import { chatCompletions } from '@dracon/wxt-shared/api';

// Simple regex-based rules engine
function applyLocalRules(unit: ContentUnit, rules: UserRules): ClassificationResult | null {
  const titleLower = unit.title.toLowerCase();

  // Blocklist channel (sourceName)
  if (unit.sourceName && rules.blocklistChannels.some(chan => 
    unit.sourceName!.toLowerCase().includes(chan.toLowerCase())
  )) {
    return { decision: 'hide', confidence: 1, reason: 'blocklist_channel' };
  }

  // Blocklist keywords
  if (rules.blocklistKeywords.some(keyword => 
    titleLower.includes(keyword.toLowerCase())
  )) {
    return { decision: 'hide', confidence: 0.9, reason: 'blocklist_keyword' };
  }

  // Allowlist overrides (show even if other rules would hide)
  if (unit.sourceName && rules.allowlistChannels.some(chan => 
    unit.sourceName!.toLowerCase().includes(chan.toLowerCase())
  )) {
    return { decision: 'show', confidence: 1, reason: 'allowlist_channel' };
  }

  if (rules.allowlistKeywords.some(keyword => 
    titleLower.includes(keyword.toLowerCase())
  )) {
    return { decision: 'show', confidence: 1, reason: 'allowlist_keyword' };
  }

  return null;
}

// Classify using BYOK (OpenAI-compatible API)
async function classifyWithBYOK(
  unit: ContentUnit,
  apiKey: string,
  strictness: number
): Promise<ClassificationResult> {
  const systemPrompt = `You are a content moderation assistant. Classify the following content card as:
- "show": Safe, informative, or desirable content
- "blur": Sensitive but not harmful (e.g., adult-adjacent, mild profanity)
- "hide": Clickbait, ragebait, misinformation, explicit content, spam
- "neutralize": Misleading title but content is okay; suggest a better title
- "rebuild": Content structure is problematic, needs reformatting

Respond with JSON: { "decision": "...", "confidence": 0.0-1.0, "reason": "...", "neutralizedTitle?" "..." }`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // fast and cheap
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Title: ${unit.title}\nSource: ${unit.sourceName || 'unknown'}\nMetadata: ${unit.metadata.join(', ')}` },
        ],
        temperature: 0.2,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    const parsed = JSON.parse(content);

    // Apply strictness threshold
    if (parsed.confidence < (strictness / 100)) {
      return { decision: 'show', confidence: parsed.confidence, reason: 'below_threshold' };
    }

    return parsed;
  } catch (error) {
    console.error('[Classifier] BYOK error:', error);
    // Fallback: show content if API fails
    return { decision: 'show', confidence: 0, reason: 'byok_error', error: error.message };
  }
}

// Classify using hosted platform API (authenticated)
async function classifyWithHosted(
  unit: ContentUnit,
  apiClient: any, // typed from @dracon/wxt-shared
  strictness: number
): Promise<ClassificationResult> {
  try {
    const response = await apiClient.chatCompletions({
      messages: [
        {
          role: 'system',
          content: 'You are CalmWeb moderation assistant. Classify content as show/blur/hide/neutralize/rebuild with confidence 0-1.',
        },
        {
          role: 'user',
          content: `Classify: ${unit.title} from ${unit.sourceName}`,
        },
      ],
      project_id: 'calmweb', // or use app-specific project
      model: 'claude-3-haiku', // or configured default
    });

    const parsed = response.choices[0].message; // assume JSON parsed by API wrapper? May need adjustment

    // Parse JSON from content if returned as string
    let decisionObj: ClassificationResult;
    if (typeof parsed.content === 'string') {
      try {
        decisionObj = JSON.parse(parsed.content);
      } catch {
        // Fallback: plain text decision parsing
        const content = parsed.content.toLowerCase();
        if (content.includes('hide')) decisionObj = { decision: 'hide', confidence: 0.9, reason: 'hosted' };
        else if (content.includes('blur')) decisionObj = { decision: 'blur', confidence: 0.9, reason: 'hosted' };
        else if (content.includes('neutralize')) decisionObj = { decision: 'neutralize', confidence: 0.9, reason: 'hosted' };
        else if (content.includes('rebuild')) decisionObj = { decision: 'rebuild', confidence: 0.9, reason: 'hosted' };
        else decisionObj = { decision: 'show', confidence: 0.9, reason: 'hosted' };
      }
    } else {
      decisionObj = parsed.content as ClassificationResult;
    }

    if (decisionObj.confidence < (strictness / 100)) {
      return { decision: 'show', confidence: decisionObj.confidence, reason: 'below_threshold' };
    }

    return decisionObj;
  } catch (error) {
    console.error('[Classifier] Hosted API error:', error);
    return { decision: 'show', confidence: 0, reason: 'hosted_error', error: error.message };
  }
}

export { applyLocalRules, classifyWithBYOK, classifyWithHosted };
```

## Phase 4: Content Scripts & DOM Adapters

**Adapter Interface** - Implement per site in `apps/extension/src/adapters/`.

Example: **`apps/extension/src/adapters/youtube.ts`**
```typescript
import type { SiteAdapter, ContentUnit } from '@calmweb/shared';

// YouTube-specific selectors
const YOUTUBE_SELECTORS = {
  videoCard: 'ytd-rich-item-renderer', // or ytd-video-renderer for older layout
  title: '#video-title',
  channel: '#text.ytd-channel-name',
  metadata: '#metadata-line yt-formatted-string',
};

export const youtubeAdapter: SiteAdapter = {
  siteId: 'youtube',
  matches: [
    /^https?:\/\/(www\.)?youtube\.com\/.*/,
    /^https?:\/\/youtu\.be\/.*/,
  ],

  discoverUnits(root) {
    return Array.from(root.querySelectorAll(YOUTUBE_SELECTORS.videoCard)).filter(Boolean);
  },

  extractData(element) {
    const titleEl = element.querySelector(YOUTUBE_SELECTORS.title) as HTMLElement;
    const channelEl = element.querySelector(YOUTUBE_SELECTORS.channel) as HTMLElement;
    const metadataEls = element.querySelectorAll(YOUTUBE_SELECTORS.metadata);

    const title = titleEl?.innerText?.trim() || 'Untitled';
    const sourceName = channelEl?.innerText?.trim();
    const metadata = Array.from(metadataEls).map(el => el.innerText.trim()).filter(Boolean);

    // Generate fingerprint: simple hash of title + source
    const fingerprint = simpleHash(title + (sourceName || ''));

    // Use element.id or generate one
    const id = element.id || `yt-${fingerprint}`;

    return {
      id,
      site: 'youtube',
      fingerprint,
      sourceName,
      title,
      metadata,
      isNew: false, // will be set by caller for new nodes
      element, // keep reference for applyDecision
    };
  },

  applyDecision(element, result) {
    // We'll manipulate the DOM element directly
    // Hide
    if (result.decision === 'hide') {
      element.style.display = 'none';
      return;
    }

    // Blur
    if (result.decision === 'blur') {
      element.style.filter = 'blur(10px)';
      element.style.transition = 'filter 0.3s ease';
      // Add hover-to-reveal
      element.addEventListener('mouseenter', () => {
        element.style.filter = 'none';
      });
      element.addEventListener('mouseleave', () => {
        element.style.filter = 'blur(10px)';
      });
      return;
    }

    // Neutralize
    if (result.decision === 'neutralize' && result.neutralizedTitle) {
      const titleEl = element.querySelector(YOUTUBE_SELECTORS.title) as HTMLElement;
      if (titleEl) {
        titleEl.innerText = result.neutralizedTitle;
      }
      return;
    }

    // Rebuild (more complex: restructure or replace)
    if (result.decision === 'rebuild') {
      // For now, hide; later could replace with simplified card
      element.style.display = 'none';
      return;
    }

    // Show (default) - ensure no leftover styles
    element.style.display = '';
    element.style.filter = '';
  },
};

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
}
```

Similarly create `reddit.ts`, `x.ts`, and potentially a generic `news.ts` with site-specific selectors.

**Content Script Entry** (`apps/extension/entrypoints/content/youtube.ts`):
```typescript
import { defineContentScript } from 'wxt';
import { youtubeAdapter } from '@/src/adapters/youtube';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';

export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  runAt: 'document_idle',
  main() {
    console.log('[Content] YouTube script loaded');

    // Add a CSS class initially to prevent flash
    const style = document.createElement('style');
    style.textContent = `
      [data-calmweb-processing] {
        opacity: 0.6;
        transition: opacity 0.3s;
      }
    `;
    document.head.appendChild(style);

    const processPage = async () => {
      const units = youtubeAdapter.discoverUnits(document);
      const now = Date.now();

      // Mark as processing
      units.forEach((el, idx) => {
        el.setAttribute('data-calmweb-processing', '');
        el.setAttribute('data-calmweb-id', `${idx}-${now}`);
      });

      // Send batch to background for classification
      const unitsData = units.map(unit => {
        const data = youtubeAdapter.extractData(unit);
        data.isNew = false; // initial page load
        return data;
      });

      // Batch classify (could send one by one or batch)
      const results = await Promise.all(
        unitsData.map(unit => sendToBackground<ClassificationResult>({
          type: MESSAGE_TYPES.CLASSIFY_UNIT,
          unit,
        }))
      );

      // Apply decisions
      units.forEach((el, idx) => {
        if (results[idx]) {
          youtubeAdapter.applyDecision(el, results[idx]);
        }
        el.removeAttribute('data-calmweb-processing');
      });
    };

    // Initial processing
    processPage();

    // Mutation Observer for infinite scroll
    const observer = new MutationObserver((mutations) => {
      // Debounce: collect all added nodes, find new video cards, process them
      const newNodes = mutations.flatMap(m => Array.from(m.addedNodes));

      // Find any new video cards among added nodes (or their descendants)
      const newCards = newNodes.flatMap(node => {
        if (!(node instanceof HTMLElement)) return [];
        // If the node itself is a video card
        if (youtubeAdapter.discoverUnits(node).length > 0) {
          return youtubeAdapter.discoverUnits(node);
        }
        // Or search within it
        const descendants = youtubeAdapter.discoverUnits(node);
        return descendants.filter(card => card.getAttribute('data-calmweb-processing') === null);
      });

      if (newCards.length > 0) {
        // Process only new cards
        const newUnits = newCards.map(card => {
          const data = youtubeAdapter.extractData(card);
          data.isNew = true;
          card.setAttribute('data-calmweb-processing', '');
          return data;
        });

        // Classify each
        newUnits.forEach(async (unit, idx) => {
          const result = await sendToBackground<ClassificationResult>({
            type: MESSAGE_TYPES.CLASSIFY_UNIT,
            unit,
          });
          if (result) {
            youtubeAdapter.applyDecision(newCards[idx], result);
          }
          newCards[idx].removeAttribute('data-calmweb-processing');
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  },
});
```

Repeat for Reddit (matches `*://*.reddit.com/*`) and other sites.

## Phase 5: UI (Popup & Options)

Use React + Tailwind CSS (already configured in wxt-starter).

**Popup** (`apps/extension/entrypoints/popup/App.tsx`):
```tsx
import React, { useEffect, useState } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import { Switch } from '@/components/Switch'; // use shared UI if available

export default function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [stats, setStats] = useState({ totalFiltered: 0 });
  const [siteSupported, setSiteSupported] = useState(true);

  useEffect(() => {
    // Check if current site is supported
    const url = window.location.hostname;
    const supported = ['youtube.com', 'reddit.com', 'x.com', 'twitter.com'].some(domain => url.includes(domain));
    setSiteSupported(supported);

    // Load settings and stats
    const load = async () => {
      const settings = await sendToBackground<{ enabled: boolean }>({ type: MESSAGE_TYPES.GET_SETTINGS });
      if (settings) setEnabled(settings.enabled);
      const stats = await sendToBackground<{ totalFiltered: number }>({ type: MESSAGE_TYPES.GET_STATS });
      if (stats) setStats(stats);
    };
    load();
  }, []);

  const toggleEnabled = async (checked: boolean) => {
    setEnabled(checked);
    await sendToBackground({
      type: MESSAGE_TYPES.UPDATE_SETTINGS,
      settings: { enabled: checked },
    });
  };

  return (
    <div className="w-80 p-4 bg-background text-foreground">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">CalmWeb</h1>
        <Switch checked={enabled} onCheckedChange={toggleEnabled} />
      </div>

      {!siteSupported ? (
        <p className="text-sm text-yellow-600">This site is not supported yet.</p>
      ) : (
        <div className="space-y-2 text-sm">
          <p>Status: <span className={enabled ? 'text-green-500' : 'text-gray-500'}>
            {enabled ? 'Active' : 'Paused'}
          </span></p>
          <p>Items filtered: <strong>{stats.totalFiltered}</strong></p>
        </div>
      )}

      <div className="mt-4 border-t pt-2">
        <a href="#" onClick={() => window.open(optionsPageUrl)} className="text-blue-500 text-sm">
          Options
        </a>
      </div>
    </div>
  );
}
```

**Options Page** (`apps/extension/entrypoints/options/App.tsx`):
- Tabbed interface: "Presets", "Advanced", "Custom Rules"
- Presets: Toggles for Politics, Ragebait, Spoilers, Clickbait
- Advanced: BYOK API key input (masked), Processing mode select (local_rules/byok_llm/hosted_llm), Strictness slider
- Custom Rules: Textarea for blocklist/allowlist (one per line)

Use `@dracon/wxt-shared/ui` if it provides ready-made components (Switch, Slider, Tabs). If not, use Radix UI primitives.

**Internationalization**: Place messages in `_locales/en/messages.json` etc.

## Implementation Checklist

### Phase 1: Foundation
- [ ] Initialize WXT extension: `npm create wxt@latest apps/extension`
- [ ] Install dependencies: `@dracon/wxt-shared`, `react`, `react-dom`, `tailwindcss`, etc.
- [ ] Copy `wxt.config.ts` using `createOptimizedConfig`
- [ ] Create `packages/shared` with TypeScript interfaces and Zod schemas
- [ ] Create storage utilities in `apps/extension/utils/storage.ts`
- [ ] Create default settings and ensure they persist

### Phase 2: Messaging
- [ ] Define message types in `src/messaging/index.ts`
- [ ] Set up message router in background with handlers for classify, settings, cache

### Phase 3: Background
- [ ] Implement `background.ts` using router
- [ ] Implement `classifier.ts` with rules engine and API calls
- [ ] Test API integration with BYOK and hosted endpoints
- [ ] Add graceful error handling (fallback to show)

### Phase 4: Content Scripts & Adapters
- [ ] Create adapter for YouTube (`src/adapters/youtube.ts`)
- [ ] Create content script entrypoint for YouTube (`entrypoints/content/youtube.ts`)
- [ ] Test DOM discovery and extraction on YouTube
- [ ] Implement applyDecision with blur/hover reveal
- [ ] Add mutation observer for infinite scroll
- [ ] Repeat for Reddit (`reddit.ts`, `entrypoints/content/reddit.ts`)
- [ ] Test on both sites

### Phase 5: UI
- [ ] Create popup UI (`entrypoints/popup/App.tsx`)
- [ ] Connect popup to settings via messaging
- [ ] Create options page (`entrypoints/options/App.tsx`)
- [ ] Implement settings form (mode, strictness, presets, custom rules)
- [ ] Add BYOK key secure input (masked)
- [ ] Test UI interactions and storage persistence

### Polish & QA
- [ ] Add icons (16, 32, 48, 96, 128)
- [ ] Write manifest messages (name, description)
- [ ] Add localizations (optional)
- [ ] Test in Chrome/Firefox
- [ ] Run lint and typecheck: `npm run lint`, `npm run typecheck`
- [ ] Build extension: `npm run build`

## Critical Constraints & Notes

1. **Speed**: DOM extractions must be lightweight; use efficient selectors and avoid layout thrashing.
2. **No eval()**: All logic must be bundled; no remote code execution.
3. **Graceful Degradation**: If background API fails, content scripts default to `show`.
4. **Content Script Limitations**: Cannot access `chrome.storage` directly; must message background.
5. **WXT Idioms**: Use `defineContentScript`, `defineBackground`, `definePopup` auto-imports; don't manually write manifest.
6. **Security**: BYOK keys stored locally; use HTTPS for API calls; sanitize any displayed content.
7. **Fingerprinting**: Use a stable hash (e.g., SHA-256 of title+source) for caching across sessions.
8. **Cache Size**: LRU cache should have a max size (e.g., 1000 entries) to avoid unbounded growth. wxt/storage doesn't provide LRU by default, so implement in wrapper.
9. **Stat Tracking**: Increment `totalFiltered` each time a non-`show` decision is applied.

## Next Steps

After blueprint review:
1. Create `packages/shared` with interfaces and Zod schemas.
2. Scaffold `apps/extension` from `wxt-starter`.
3. Implement Phase 1-2 to get storage and message bus working.
4. Build the classifier in background.
5. Add one site adapter (YouTube) and test end-to-end.
6. Add UI and remaining sites.
