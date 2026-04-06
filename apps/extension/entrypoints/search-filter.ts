/**
 * Search Filter Content Script
 *
 * Filters search results on Google, Bing, DuckDuckGo to hide blocked sites.
 * Also supports redirecting all search to DuckDuckGo.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { UserSettings } from '@calmweb/shared';
import { 
  filterSearchResults, 
  unfilterSearchResults,
  detectSearchEngine,
  redirectToDuckDuckGo
} from '@/src/filter/search-filter';
import { initActivityOverlay } from '@/src/ui/activity-overlay';

let observer: MutationObserver | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

function processResults(): void {
  const settings = getCurrentSettings();
  if (!settings) {
    console.log('[SearchFilter] No settings available');
    return;
  }

  const engine = detectSearchEngine();
  console.log('[SearchFilter] processResults - engine:', engine, 'redirectToDDG:', (settings.siteFilter as any)?.redirectToDDG);

  // Redirect is disabled - users can set DDG as their browser default if desired
  // const sf = settings.siteFilter as any;
  // if (sf?.redirectToDDG && engine !== 'duckduckgo') {
  //   console.log('[SearchFilter] Redirect to DDG enabled, redirecting...');
  //   redirectToDuckDuckGo();
  //   return;
  // }

  if (settings?.siteFilter?.searchFilterEnabled) {
    console.log('[SearchFilter] Processing results with settings:', {
      hideBlocked: settings.siteFilter.hideBlockedResults,
      useExternalBlocklists: settings.siteFilter.useExternalBlocklists,
      blockedCategories: settings.siteFilter.blockedCategories?.length || 0
    });
    
    const result = filterSearchResults({
      enabled: true,
      hideBlocked: settings.siteFilter.hideBlockedResults ?? true,
      showCategoryBadge: settings.siteFilter.showCategoryBadge ?? true,
      blockedCategories: settings.siteFilter.blockedCategories ?? [],
      customBlocklist: settings.siteFilter.customBlocklist ?? [],
      customAllowlist: settings.siteFilter.customAllowlist ?? [],
      useExternalBlocklists: settings.siteFilter.useExternalBlocklists ?? true,
    });
    
    if (result.filtered > 0) {
      console.log(`[SearchFilter] Filtered ${result.filtered}/${result.total} results`, result.byCategory);
    } else if (result.total > 0) {
      console.log(`[SearchFilter] Found ${result.total} results, filtered ${result.filtered}`);
    } else {
      console.log('[SearchFilter] No results found with current selectors');
    }
  } else {
    console.log('[SearchFilter] Search filter not enabled in settings');
  }
}

function debouncedProcess(): void {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(processResults, 200);
}

function startObserver(): void {
  if (observer) return;

  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof HTMLElement) {
            // Check for various search engine result containers
            // DDG: #react-layout, .results, #links
            // Google: #search, [data-sokoban-container]
            // Bing: #b_results
            const isResultsContainer = 
              node.querySelector('#search, #b_results, #links, [data-sokoban-container], .results, .searchResults, ol.react-results--main, #react-layout') ||
              node.id === 'react-layout' ||
              node.classList.contains('results') ||
              node.closest('#react-layout, .results, #links');
            
            if (isResultsContainer) {
              console.log('[SearchFilter] Detected search results container');
              debouncedProcess();
              return;
            }
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

let currentSettings: UserSettings | null = null;
function getCurrentSettings(): UserSettings | null {
  return currentSettings;
}

async function init(): Promise<void> {
  const engine = detectSearchEngine();
  if (!engine) {
    console.log('[SearchFilter] No search engine detected on:', window.location.hostname);
    return;
  }

  console.log(`[SearchFilter] Detected ${engine}, initializing...`);

  // Check redirect setting immediately and redirect before anything else
  try {
    const stored = await chrome.storage.local.get('calmweb-settings');
    const settings = stored['calmweb-settings'];
    console.log('[SearchFilter] Redirect check - settings:', settings?.siteFilter?.redirectToDDG, 'stored:', stored);
    
    const shouldRedirect = settings?.siteFilter?.redirectToDDG === true;

    if (shouldRedirect && engine !== 'duckduckgo') {
      console.log('[SearchFilter] Redirect to DDG enabled, redirecting immediately...');
      redirectToDuckDuckGo();
      return;
    }
  } catch (e) {
    console.log('[SearchFilter] Could not read redirect setting:', e);
  }

  initActivityOverlay();

  try {
    const fullSettings = await sendToBackground<UserSettings>({ 
      type: MESSAGE_TYPES.GET_SETTINGS 
    });

    if (!fullSettings) {
      console.error('[SearchFilter] Failed to get settings');
      return;
    }
    
  currentSettings = fullSettings;

  // Initial filter - slight delay to allow React to render
  setTimeout(processResults, 300);
  
  // For DDG React version, results may take longer - poll a few times
  if (detectSearchEngine() === 'duckduckgo') {
    setTimeout(processResults, 800);
    setTimeout(processResults, 1500);
    setTimeout(processResults, 3000);
  }
  
  startObserver();

    // Re-process on URL change (for instant search)
    let lastUrl = location.href;
    const urlObserver = new MutationObserver(() => {
      if (location.href !== lastUrl) {
        console.log('[SearchFilter] URL changed, re-processing...');
        lastUrl = location.href;
        setTimeout(processResults, 500);
      }
    });
    urlObserver.observe(document.body, { childList: true, subtree: true });

    // Listen for settings changes
    window.addEventListener('calmweb:siteFilterChanged', ((e: CustomEvent) => {
      currentSettings = { ...currentSettings, siteFilter: e.detail } as UserSettings;
      unfilterSearchResults();
      processResults();
    }) as EventListener);

  } catch (error) {
    console.error('[SearchFilter] Failed to initialize:', error);
  }
}

export default defineContentScript({
  matches: [
    '*://*.google.com/search*',
    '*://*.google.com/webhp*',
    '*://*.google.*/search*',
    '*://www.bing.com/search*',
    '*://duckduckgo.com/*',
    '*://www.duckduckgo.com/*',
    '*://html.duckduckgo.com/*',
    '*://lite.duckduckgo.com/*',
    '*://search.yahoo.com/*',
    '*://search.brave.com/*',
  ],
  runAt: 'document_start', // Run earlier to redirect before page loads
  main: init,
});
