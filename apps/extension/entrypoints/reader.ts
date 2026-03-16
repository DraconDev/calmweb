/**
 * Reader Entry Point for CalmWeb
 *
 * Listens for keyboard shortcut and background messages to toggle Super Reader mode.
 * Auto-opens on article pages when enabled in settings.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { toggleReader } from '../src/renderer/reader';
import { MESSAGE_TYPES } from '../src/messaging';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import browser from 'webextension-polyfill';
import type { UserSettings } from '@calmweb/shared';

function isArticlePage(): boolean {
  // Skip common non-article sites
  const hostname = window.location.hostname.toLowerCase();
  const skipDomains = [
    'google.com', 'youtube.com', 'reddit.com', 'twitter.com', 'x.com',
    'facebook.com', 'instagram.com', 'linkedin.com', 'github.com',
    'stackoverflow.com', 'wikipedia.org', 'amazon.com', 'ebay.com',
  ];
  if (skipDomains.some(d => hostname.includes(d))) return false;

  // Check for <article> element
  if (document.querySelector('article')) return true;

  // Check URL patterns
  const path = window.location.pathname.toLowerCase();
  const articlePatterns = [
    /\/\d{4}\/\d{2}\/\d{2}\//,    // /2024/03/16/slug
    /\/\d{4}\/\d{2}\//,             // /2024/03/slug
    /\/(article|post|blog|news|story|entry)\//,
    /\/[a-z0-9-]+\/[a-z0-9-]{20,}/, // long slug pattern
  ];
  if (articlePatterns.some(p => p.test(path))) return true;

  // Check meta tags for article type
  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType?.getAttribute('content')?.includes('article')) return true;

  // Check for substantial article-like content (long body text)
  const main = document.querySelector('main, [role="main"], #content, .content, .post-content, .article-body, .entry-content');
  if (main && main.textContent && main.textContent.length > 2000) return true;

  return false;
}

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',

  async main() {
    console.log('[CalmWeb] Reader content script loaded');

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        toggleReader();
      }
    });

    // Message handlers
    browser.runtime.onMessage.addListener((message: any) => {
      if (message.type === MESSAGE_TYPES.TOGGLE_READER) {
        console.log('[CalmWeb] Toggle reader via message');
        toggleReader();
      }
      if (message.type === MESSAGE_TYPES.OPEN_READER) {
        console.log('[CalmWeb] Open reader via message');
        toggleReader();
      }
      if (message.type === MESSAGE_TYPES.CLOSE_READER) {
        console.log('[CalmWeb] Close reader via message');
        toggleReader();
      }
    });

    // Auto-open on article pages
    try {
      const settings = await sendToBackground<UserSettings>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settings?.reader?.autoOpen && isArticlePage()) {
        // Small delay to let page settle
        setTimeout(() => {
          console.log('[CalmWeb] Auto-opening reader on article page');
          toggleReader();
        }, 1500);
      }
    } catch {
      // Silently fail if settings can't be loaded
    }
  },
});
