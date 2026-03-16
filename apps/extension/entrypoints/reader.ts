/**
 * Reader Entry Point for CalmWeb
 *
 * Listens for keyboard shortcut and background messages to toggle Super Reader mode.
 * Auto-opens on article pages when enabled in settings.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { openReader, closeReader, isReaderOpen } from '../src/renderer/reader';
import { MESSAGE_TYPES } from '../src/messaging';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import browser from 'webextension-polyfill';
import type { UserSettings } from '@calmweb/shared';

function isArticlePage(): boolean {
  const hostname = window.location.hostname.toLowerCase();
  const skipDomains = [
    'google.com', 'youtube.com', 'reddit.com', 'twitter.com', 'x.com',
    'facebook.com', 'instagram.com', 'linkedin.com', 'github.com',
    'stackoverflow.com', 'wikipedia.org', 'amazon.com', 'ebay.com',
  ];
  if (skipDomains.some(d => hostname.includes(d))) return false;

  if (document.querySelector('article')) return true;

  const path = window.location.pathname.toLowerCase();
  const articlePatterns = [
    /\/\d{4}\/\d{2}\/\d{2}\//,
    /\/\d{4}\/\d{2}\//,
    /\/(article|articles|post|blog|news|story|entry)\//,
    /\/[a-z0-9-]+\/[a-z0-9-]{20,}/,
  ];
  if (articlePatterns.some(p => p.test(path))) return true;

  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType?.getAttribute('content')?.includes('article')) return true;

  const main = document.querySelector('main, [role="main"], #content, .content, .post-content, .article-body, .entry-content');
  if (main && main.textContent && main.textContent.length > 2000) return true;

  return false;
}

function safeToggleReader(): void {
  try {
    if (isReaderOpen()) {
      closeReader();
    } else {
      openReader();
    }
  } catch (err) {
    console.error('[CalmWeb] Reader toggle failed:', err);
  }
}

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_end',

  async main() {
    console.log('[CalmWeb] Reader content script loaded on', window.location.hostname);

    // Keyboard shortcut - use capture phase to ensure we get it first
    document.addEventListener('keydown', (e) => {
      if (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        e.stopPropagation();
        safeToggleReader();
      }
    }, true); // capture phase

    // Message handlers
    browser.runtime.onMessage.addListener((message: any) => {
      if (message.type === MESSAGE_TYPES.TOGGLE_READER) {
        console.log('[CalmWeb] Toggle reader via message');
        safeToggleReader();
      }
      if (message.type === MESSAGE_TYPES.OPEN_READER) {
        console.log('[CalmWeb] Open reader via message');
        try {
          if (!isReaderOpen()) openReader();
        } catch (err) {
          console.error('[CalmWeb] Failed to open reader:', err);
        }
      }
      if (message.type === MESSAGE_TYPES.CLOSE_READER) {
        console.log('[CalmWeb] Close reader via message');
        try {
          if (isReaderOpen()) closeReader();
        } catch (err) {
          console.error('[CalmWeb] Failed to close reader:', err);
        }
      }
    });

    // Auto-open on article pages
    try {
      const settings = await sendToBackground<UserSettings>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settings?.reader?.autoOpen && isArticlePage()) {
        setTimeout(() => {
          console.log('[CalmWeb] Auto-opening reader on article page');
          safeToggleReader();
        }, 1500);
      }
    } catch {
      // Silently fail if settings can't be loaded
    }
  },
});
