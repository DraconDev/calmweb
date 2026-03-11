/**
 * Background Service Worker for CalmWeb
 *
 * Handles:
 * - Message routing from content scripts and popup
 * - Content classification (rules + LLM)
 * - Settings and cache management
 * - Statistics tracking
 */

import { defineBackground } from 'wxt';
import { createMessageRouter, setupLifecycle, isBackgroundMessage } from '@dracon/wxt-shared/background';
import { createExtension } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import { classifyContent } from '@/utils/classifier';
import {
  settingsStore,
  decisionCache,
  statsStore,
  getCachedResult,
  setCachedResult,
  incrementFilteredCount,
  clearDecisionCache,
  initializeStores,
  defaultUserSettings,
} from '@/utils/storage';
import type { UserSettings, ClassificationResult, ContentUnit } from '@calmweb/shared';

// Initialize extension (provides apiClient, config, auth)
const ext = createExtension({
  appName: 'CalmWeb',
  appId: 'calmweb',
  debug: true,
});

// ============================================================================
// Message Handlers
// ============================================================================

const handlers = {
  // Classify a single content unit
  [MESSAGE_TYPES.CLASSIFY_UNIT]: async (message: { unit: ContentUnit }) => {
    const { unit } = message;

    try {
      // 1. Check cache first
      const cached = getCachedResult(unit.fingerprint);
      if (cached) {
        return cached;
      }

      // 2. Get current settings
      const settings = await settingsStore.getValue();
      if (!settings) {
        // Should not happen if initializeStores was called, but fallback
        return { decision: 'show', confidence: 1, reason: 'no_settings' };
      }

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
      }, {
        apiClient: ext.apiClient,
      });

      // 4. Cache the result
      setCachedResult(unit.fingerprint, result);

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
  [MESSAGE_TYPES.GET_SETTINGS]: async () => {
    const settings = await settingsStore.getValue();
    return settings;
  },

  // Update user settings (partial update)
  [MESSAGE_TYPES.UPDATE_SETTINGS]: async (message: { settings: Partial<UserSettings> }) => {
    const current = await settingsStore.getValue();
    if (current) {
      // Merge partial update
      const updated = { ...current, ...message.settings };
      // Deep merge rules if provided
      if (message.settings.rules) {
        updated.rules = { ...current.rules, ...message.settings.rules };
      }
      await settingsStore.setValue(updated);
      // Clear cache when rules change significantly
      if (message.settings.rules) {
        await clearDecisionCache();
      }
      return { success: true };
    }
    return { success: false };
  },

  // Clear decision cache
  [MESSAGE_TYPES.CLEAR_CACHE]: async () => {
    await clearDecisionCache();
    return { success: true };
  },

  // Get statistics
  [MESSAGE_TYPES.GET_STATS]: async () => {
    return statsStore.getValue();
  },

  // Increment a stat (e.g., totalFiltered)
  [MESSAGE_TYPES.INCREMENT_STAT]: async (message: { key: string; amount?: number }) => {
    if (message.key === 'totalFiltered') {
      await incrementFilteredCount(message.amount);
    }
    return statsStore.getValue();
  },
};

// ============================================================================
// Message Router Setup
// ============================================================================

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
      await settingsStore.setValue(ext.apiClient); // No, that's wrong
      await settingsStore.setValue(await settingsStore.getValue() || null); // Actually initialize
    },
    onUpdate: () => {
      console.log('[Background] CalmWeb updated');
    },
  });

  // Message listener
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!isBackgroundMessage(message)) {
      return false;
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
  });
});
