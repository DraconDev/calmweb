/**
 * Background Service Worker for CalmWeb
 *
 * Handles:
 * - Message routing from content scripts and popup
 * - Content classification (rules + LLM)
 * - Settings and cache management
 * - Statistics tracking
 * - Context menu integration
 */

import { defineBackground } from 'wxt/utils/define-background';
import { createMessageRouter, setupLifecycle, isBackgroundMessage } from '@dracon/wxt-shared/background';
import { createExtension } from '@dracon/wxt-shared/extension';
import type { MessageHandler } from '@dracon/wxt-shared/background';
import { MESSAGE_TYPES } from '@/src/messaging';
import { classifyContent } from '@/utils/classifier';
import {
  settingsStore,
  statsStore,
  getCachedResult,
  setCachedResult,
  incrementFilteredCount,
  clearDecisionCache,
  initializeStores,
} from '@/utils/storage';
import type { ContentUnit, UserSettings } from '@calmweb/shared';
import browser from 'webextension-polyfill';

// Initialize extension (provides apiClient, config, auth)
const ext = createExtension({
  appName: 'CalmWeb',
  appId: 'calmweb',
  debug: true,
});

// ============================================================================
// Context Menu Setup
// ============================================================================

async function setupContextMenu(): Promise<void> {
  try {
    await browser.contextMenus.removeAll();
  } catch {
    // Ignore if no menus exist
  }

  browser.contextMenus.create({
    id: 'calmweb-toggle-extension',
    title: 'Toggle CalmWeb',
    contexts: ['action'],
  });

  browser.contextMenus.create({
    id: 'calmweb-open-reader',
    title: 'Open in Super Reader',
    contexts: ['page'],
  });

  browser.contextMenus.create({
    id: 'calmweb-neutralize-selection',
    title: 'Neutralize Selected Text',
    contexts: ['selection'],
  });

  browser.contextMenus.create({
    id: 'separator-1',
    type: 'separator',
    contexts: ['page', 'selection'],
  });

  browser.contextMenus.create({
    id: 'calmweb-open-settings',
    title: 'Open Settings',
    contexts: ['action'],
  });

  browser.contextMenus.create({
    id: 'calmweb-view-stats',
    title: 'View Statistics',
    contexts: ['action'],
  });

  browser.contextMenus.onClicked.addListener(async (info, tab) => {
    const menuItemId = info.menuItemId as string;

    switch (menuItemId) {
      case 'calmweb-toggle-extension': {
        const settings = await settingsStore.getValue();
        await settingsStore.setValue({ ...settings, enabled: !settings.enabled });
        break;
      }

      case 'calmweb-open-reader': {
        if (tab?.id) {
          browser.tabs.sendMessage(tab.id, { type: MESSAGE_TYPES.TOGGLE_READER });
        }
        break;
      }

      case 'calmweb-neutralize-selection': {
        if (tab?.id && info.selectionText) {
          browser.tabs.sendMessage(tab.id, {
            type: 'NEUTRALIZE_SELECTION',
            text: info.selectionText,
          });
        }
        break;
      }

      case 'calmweb-open-settings': {
        browser.runtime.openOptionsPage();
        break;
      }

      case 'calmweb-view-stats': {
        browser.tabs.create({ url: browser.runtime.getURL('/options.html') });
        break;
      }
    }
  });
}

// ============================================================================
// Message Handlers
// ============================================================================

const handlers: Record<string, MessageHandler> = {
  // Classify a single content unit
  [MESSAGE_TYPES.CLASSIFY_UNIT]: async (message: any, sender: any) => {
    sender; // silence unused warning
    const unit: ContentUnit = message.unit;

    try {
      // 1. Check cache first
      const cached = await getCachedResult(unit.fingerprint);
      if (cached) {
        return cached;
      }

      // 2. Get current settings
      const settings = await settingsStore.getValue();

      // If extension is globally disabled, show everything
      if (!settings.enabled) {
        return { decision: 'show', confidence: 1, reason: 'disabled' };
      }

      // 3. Classify using rules + LLM
      const result = await classifyContent(unit, {
        processingMode: settings.processingMode,
        strictness: settings.strictness,
        rules: settings.rules,
        byokKey: settings.byokKey,
        aiModel: settings.aiModel,
        customEndpoint: settings.customEndpoint,
      }, {
        apiClient: ext.apiClient,
      });

      // 4. Cache the result
      await setCachedResult(unit.fingerprint, result);

      // 5. Update stats if not 'show'
      if (result.decision !== 'show') {
        await incrementFilteredCount(1);
      }

      return result;
    } catch (error) {
      console.error('[Background] Classification error:', error);
      // Graceful degradation: show the content
      return {
        decision: 'show',
        confidence: 0,
        reason: 'error',
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },

  // Get current user settings
  [MESSAGE_TYPES.GET_SETTINGS]: async (message: any, sender: any) => {
    // Unused params
    message; sender;
    return await settingsStore.getValue();
  },

  // Update user settings (partial update)
  [MESSAGE_TYPES.UPDATE_SETTINGS]: async (message: any, sender: any) => {
    sender; // unused
    const updates = message.settings as Partial<UserSettings>;
    const current = await settingsStore.getValue();
    if (current) {
      // Merge partial update
      const updated = { ...current, ...updates };
      // Deep merge rules if provided
      if (updates.rules) {
        updated.rules = { ...current.rules, ...updates.rules };
      }
      await settingsStore.setValue(updated);
      // Clear cache when rules change significantly
      if (updates.rules) {
        await clearDecisionCache();
      }
      return { success: true };
    }
    return { success: false };
  },

  // Clear decision cache
  [MESSAGE_TYPES.CLEAR_CACHE]: async (message: any, sender: any) => {
    message; sender;
    await clearDecisionCache();
    return { success: true };
  },

  // Get statistics
  [MESSAGE_TYPES.GET_STATS]: async (message: any, sender: any) => {
    message; sender;
    return await statsStore.getValue();
  },

  // Increment a stat (e.g., totalFiltered)
  [MESSAGE_TYPES.INCREMENT_STAT]: async (message: any, sender: any) => {
    sender; // unused
    if (message.key === 'totalFiltered') {
      await incrementFilteredCount(message.amount);
    }
    return await statsStore.getValue();
  },

  // Test AI connection via OpenRouter
  [MESSAGE_TYPES.TEST_CONNECTION]: async (message: any, sender: any) => {
    sender; // unused
    const { apiKey, model, endpoint } = message;
    const testEndpoint = endpoint || 'https://openrouter.ai/api/v1/chat/completions';
    const testModel = model || 'openrouter/free';

    async function tryConnect(): Promise<{ success: boolean; model?: string; error?: string }> {
      try {
        const response = await fetch(testEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://calmweb.app',
            'X-OpenRouter-Title': 'CalmWeb',
          },
          body: JSON.stringify({
            model: testModel,
            messages: [{ role: 'user', content: 'Reply with exactly: OK' }],
            max_tokens: 5,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          return { success: false, error: `HTTP ${response.status}: ${errorText}` };
        }

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;
        if (content) {
          return { success: true, model: testModel };
        }
        return { success: false, error: 'No response content' };
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : String(error),
        };
      }
    }

    // First attempt
    const result = await tryConnect();
    if (result.success) return result;

    // Retry once after short delay (handles cold start / DNS)
    await new Promise(r => setTimeout(r, 1500));
    return tryConnect();
  },
};

// Create router with API client for proxy requests
const router = createMessageRouter({
  apiClient: ext.apiClient, // For apiProxyRequest messages (not used directly in CalmWeb but available)
  handlers,
  onUnhandled: (msg) => {
    console.warn('[Background] Unhandled message type:', msg.type);
  },
});

// ============================================================================
// Background Service Worker Definition
// ============================================================================

export default defineBackground(() => {
  console.log('[Background] CalmWeb service worker started');

  // Lifecycle callbacks
  setupLifecycle({
    onInstall: async () => {
      console.log('[Background] CalmWeb installed');
      // Initialize stores with defaults
      await initializeStores();
      // Setup context menus
      await setupContextMenu();
      // Open dashboard on install
      browser.tabs.create({ url: browser.runtime.getURL('/options.html') });
    },
    onUpdate: () => {
      console.log('[Background] CalmWeb updated');
    },
  });

  // Clicking extension icon opens the dashboard
  browser.action.onClicked.addListener(() => {
    browser.tabs.create({ url: browser.runtime.getURL('/options.html') });
  });

  // Message listener
  browser.runtime.onMessage.addListener(((message: any, sender: any, sendResponse: (response: any) => void) => {
    if (!isBackgroundMessage(message)) {
      return;
    }

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
  }) as any);
});
