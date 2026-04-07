/**
 * Background Service Worker for CalmWeb
 *
 * Handles:
 * - Message routing from content scripts and popup
 * - Content classification (local rules only)
 * - Settings and cache management
 * - Statistics tracking
 * - Context menu integration
 * - Filter list management (EasyList, EasyPrivacy, etc.)
 */

import { defineBackground } from 'wxt/utils/define-background';
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
import {
  fetchAllLists,
  getCachedLists,
  needsRefresh,
  parseCachedLists,
  createNetworkRules,
  applyNetworkRules,
} from '@/src/filterlist';
import { updateAllBlocklists, getBlocklistStats } from '@/src/filter/blocklist-fetcher';
import {
  getTextModeSettings,
  isTextModeEnabled,
  setTextModeEnabled,
} from '@/src/filter/skip-list';

// ============================================================================
// Filter List Management
// ============================================================================

/**
 * Initialize filter lists - fetch if needed, apply network rules
 */
async function initializeFilterLists(): Promise<void> {
  try {
    // Check if we need to refresh
    const shouldRefresh = await needsRefresh();

    let lists;
    if (shouldRefresh) {
      console.log('[Background] Fetching filter lists...');
      lists = await fetchAllLists();
    } else {
      console.log('[Background] Using cached filter lists');
      lists = await getCachedLists();
    }

    if (lists.size === 0) {
      console.log('[Background] No filter lists available');
      return;
    }

    // Parse filter lists
    const parsed = parseCachedLists(lists);
    console.log(`[Background] Parsed ${parsed.stats.cssRules} CSS rules, ${parsed.stats.urlRules} URL rules`);

    // Apply network blocking rules
    if (parsed.urlPatterns.length > 0) {
      const networkRules = createNetworkRules(parsed.urlPatterns);
      await applyNetworkRules(networkRules);
      console.log(`[Background] Applied ${networkRules.length} network blocking rules`);
    }
  } catch (error) {
    console.error('[Background] Failed to initialize filter lists:', error);
  }
}

/**
 * Schedule periodic filter list refresh
 */
function scheduleRefresh(): void {
  // Filter lists: Check every hour
  browser.alarms.create('filterlist-refresh', { periodInMinutes: 60 });
  
  // Blocklists: Check every 6 hours (malware sites change frequently)
  browser.alarms.create('blocklist-refresh', { periodInMinutes: 360 });

  browser.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === 'filterlist-refresh') {
      if (await needsRefresh()) {
        console.log('[Background] Periodic filter list refresh');
        await initializeFilterLists();
      }
    }
    
    if (alarm.name === 'blocklist-refresh') {
      console.log('[Background] Periodic blocklist refresh');
      await initializeBlocklists();
    }
  });
}

// ============================================================================
// Blocklist Management
// ============================================================================

async function initializeBlocklists(): Promise<void> {
  try {
    console.log('[Background] Fetching external blocklists...');
    await updateAllBlocklists();
    const stats = await getBlocklistStats();
    console.log(`[Background] Blocklist stats: ${stats.totalDomains.toLocaleString()} domains from ${stats.bySource.length} sources`);
  } catch (error) {
    console.error('[Background] Failed to initialize blocklists:', error);
  }
}

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
    id: 'separator-2',
    type: 'separator',
    contexts: ['action'],
  });

  browser.contextMenus.create({
    id: 'calmweb-toggle-textmode',
    title: 'Toggle Text Mode',
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

      case 'calmweb-toggle-textmode': {
        const enabled = await isTextModeEnabled();
        await setTextModeEnabled(!enabled);
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

type MessageHandler = (message: any, sender: any) => Promise<any>;

const handlers: Record<string, MessageHandler> = {
  // Classify a single content unit using local rules only
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

      // 3. Classify using local rules only
      const result = await classifyContent(unit, {
        rules: settings.rules,
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
    message; sender;
    return await settingsStore.getValue();
  },

  // Update user settings (partial update)
  [MESSAGE_TYPES.UPDATE_SETTINGS]: async (message: any, sender: any) => {
    sender;
    const updates = message.settings as Partial<UserSettings>;
    const current = await settingsStore.getValue();
    if (current) {
      const updated = { ...current, ...updates };
      if (updates.rules) {
        updated.rules = { ...current.rules, ...updates.rules };
      }
      await settingsStore.setValue(updated);
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
    sender;
    if (message.key === 'totalFiltered') {
      await incrementFilteredCount(message.amount);
    }
    return await statsStore.getValue();
  },

  // Get blocklist statistics
  'calmweb:getBlocklistStats': async (message: any, sender: any) => {
    message; sender;
    return await getBlocklistStats();
  },

  // Force refresh blocklists
  'calmweb:refreshBlocklists': async (message: any, sender: any) => {
    message; sender;
    await updateAllBlocklists();
    return await getBlocklistStats();
  },

  // Text Mode: Get settings
  'calmweb:getTextMode': async (message: any, sender: any) => {
    message; sender;
    return await getTextModeSettings();
  },

  // Text Mode: Check if enabled
  'calmweb:isTextModeEnabled': async (message: any, sender: any) => {
    message; sender;
    return await isTextModeEnabled();
  },

  // Text Mode: Toggle enabled
  'calmweb:toggleTextMode': async (message: any, sender: any) => {
    message; sender;
    const enabled = await isTextModeEnabled();
    await setTextModeEnabled(!enabled);
    return !enabled;
  },

  // Text Mode: Update settings
  'calmweb:updateTextMode': async (message: any, sender: any) => {
    message; sender;
    const { getTextModeSettings } = await import('@/src/filter/skip-list');
    const settings = await getTextModeSettings();
    const updates = message.settings as Partial<typeof settings>;
    const updated = { ...settings, ...updates };
    await (await import('wxt/utils/storage')).storage.defineItem('sync:calmweb-textmode-settings', { fallback: updated }).setValue(updated);
    return updated;
  },
};

// ============================================================================
// Background Service Worker Definition
// ============================================================================

export default defineBackground(() => {
  console.log('[Background] CalmWeb service worker started');

  // Lifecycle callbacks
  browser.runtime.onInstalled.addListener(async () => {
    console.log('[Background] CalmWeb installed');
    await initializeStores();
    await setupContextMenu();

    // Initialize filter lists (fetch and apply network rules)
    await initializeFilterLists();

    // Initialize external blocklists (Steven Black, etc.)
    await initializeBlocklists();

    // Initialize skip list with defaults
    const { initializeSkipList } = await import('@/src/filter/skip-list');
    await initializeSkipList();

    // Schedule periodic refresh
    scheduleRefresh();

    browser.tabs.create({ url: browser.runtime.getURL('/options.html') });
  });

  // Clicking extension icon opens the dashboard
  browser.action.onClicked.addListener(() => {
    browser.tabs.create({ url: browser.runtime.getURL('/options.html') });
  });

  // Message listener
  browser.runtime.onMessage.addListener(((message: any, sender: any, sendResponse: (response: any) => void) => {
    const handler = handlers[message.type];
    if (!handler) {
      console.warn('[Background] Unhandled message type:', message.type);
      return;
    }

    handler(message, sender)
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
