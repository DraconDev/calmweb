/**
 * Background Service Worker for CalmWeb
 *
 * Handles:
 * - Message routing from content scripts and popup
 * - Content classification (rules + LLM)
 * - Settings and cache management
 * - Statistics tracking
 */

import { defineBackground } from 'wxt/utils/define-background';
import { createMessageRouter, setupLifecycle, isBackgroundMessage } from '@dracon/wxt-shared/background';
import { createExtension } from '@dracon/wxt-shared/extension';
import type { MessageHandler } from '@dracon/wxt-shared/background';
import { MESSAGE_TYPES } from '@/src/messaging';
import { classifyContent } from '@/utils/classifier';
import {
  settingsStore,
  getCachedResult,
  setCachedResult,
  incrementFilteredCount,
  clearDecisionCache,
  initializeStores,
} from '@/utils/storage';
import type { ContentUnit, ClassificationResult, UserSettings } from '@calmweb/shared';
import browser from 'webextension-polyfill';

// Initialize extension (provides apiClient, config, auth)
const ext = createExtension({
  appName: 'CalmWeb',
  appId: 'calmweb',
  debug: true,
});

// ============================================================================
// Message Handlers
// ============================================================================

const handlers: Record<string, MessageHandler> = {
  // Classify a single content unit
  [MESSAGE_TYPES.CLASSIFY_UNIT]: async (message: any, sender: any) => {
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
    return await settingsStore.getValue();
  },

  // Update user settings (partial update)
  [MESSAGE_TYPES.UPDATE_SETTINGS]: async (message: any, sender: any) => {
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
    await clearDecisionCache();
    return { success: true };
  },

  // Get statistics
  [MESSAGE_TYPES.GET_STATS]: async (message: any, sender: any) => {
    return await statsStore.getValue();
  },

  // Increment a stat (e.g., totalFiltered)
  [MESSAGE_TYPES.INCREMENT_STAT]: async (message: any, sender: any) => {
    if (message.key === 'totalFiltered') {
      await incrementFilteredCount(message.amount);
    }
    return await statsStore.getValue();
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
