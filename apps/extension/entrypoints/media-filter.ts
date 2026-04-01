/**
 * Media Filter Content Script
 *
 * Injected on all pages to filter media based on alt text analysis.
 * Handles dynamically loaded content via MutationObserver.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { UserSettings } from '@calmweb/shared';
import { 
  filterMedia, 
  unfilterAllMedia, 
  setMediaFilterSettings,
  getFilteredCount 
} from '@/src/media/alt-text-filter';
import { initMediaToggle, updateFilteredCount } from '@/src/media/toggle';
import { initActivityOverlay } from '@/src/ui/activity-overlay';

let observer: MutationObserver | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let periodicTimer: ReturnType<typeof setInterval> | null = null;
let isProcessing = false;

function detectSiteId(): string | null {
  const host = window.location.hostname;
  if (host.includes('youtube.com') || host.includes('youtu.be')) return 'youtube';
  if (host.includes('reddit.com')) return 'reddit';
  if (host.includes('x.com') || host.includes('twitter.com')) return 'x';
  return null;
}

function processMedia(): void {
  if (isProcessing) return;
  isProcessing = true;
  
  try {
    const siteId = detectSiteId() || undefined;
    filterMedia(document, { siteId });
    updateFilteredCount(getFilteredCount());
  } finally {
    isProcessing = false;
  }
}

function debouncedProcess(): void {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(processMedia, 150);
}

function startObserver(): void {
  if (observer) return;

  const processMutations = (mutations: MutationRecord[]) => {
    let shouldProcess = false;
    
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof HTMLElement) {
            if (node.tagName === 'IMG' || 
                node.tagName === 'VIDEO' ||
                node.querySelector('img[alt], video[aria-label], [role="img"]')) {
              shouldProcess = true;
              break;
            }
          }
        }
      } else if (mutation.type === 'attributes') {
        if (mutation.attributeName === 'alt' || 
            mutation.attributeName === 'aria-label' ||
            mutation.attributeName === 'src') {
          shouldProcess = true;
        }
      }
      
      if (shouldProcess) break;
    }
    
    if (shouldProcess) {
      debouncedProcess();
    }
  };

  observer = new MutationObserver(processMutations);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['alt', 'aria-label', 'src'],
  });

  // Periodic scan for any missed content (handles edge cases)
  periodicTimer = setInterval(() => {
    const unprocessed = document.querySelectorAll('img[alt]:not([data-calmweb-media-blurred]):not([data-calmweb-media-hidden])');
    if (unprocessed.length > 0) {
      processMedia();
    }
  }, 3000);
}

function stopObserver(): void {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  if (periodicTimer) {
    clearInterval(periodicTimer);
    periodicTimer = null;
  }
}

async function init(): Promise<void> {
  initActivityOverlay();

  try {
    const settings = await sendToBackground<UserSettings>({ 
      type: MESSAGE_TYPES.GET_SETTINGS 
    });

    if (!settings) return;

    if (settings.mediaFilter) {
      setMediaFilterSettings(settings.mediaFilter);
    }

    if (settings.mediaFilter?.showToggle) {
      await initMediaToggle();
    }

    if (settings.mediaFilter?.enabled && settings.mediaFilter.mode !== 'off') {
      processMedia();
      startObserver();
    }

    window.addEventListener('calmweb:mediaFilterChanged', ((e: CustomEvent) => {
      const newSettings = e.detail;
      setMediaFilterSettings(newSettings);
      
      if (newSettings.enabled && newSettings.mode !== 'off') {
        processMedia();
        startObserver();
      } else {
        unfilterAllMedia();
        stopObserver();
      }
    }) as EventListener);

    // Handle scroll events for lazy-loaded images
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    window.addEventListener('scroll', () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (settings.mediaFilter?.enabled && settings.mediaFilter.mode !== 'off') {
          processMedia();
        }
      }, 500);
    }, { passive: true });

    // Handle URL changes (SPA navigation)
    let lastUrl = location.href;
    const urlObserver = new MutationObserver(() => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        if (settings.mediaFilter?.enabled && settings.mediaFilter.mode !== 'off') {
          setTimeout(processMedia, 500);
        }
      }
    });
    urlObserver.observe(document.body, { childList: true, subtree: true });

  } catch (error) {
    console.error('[MediaFilter] Failed to initialize:', error);
  }
}

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  main: init,
});
