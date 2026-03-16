/**
 * Reader Entry Point for CalmWeb
 *
 * Auto-opens on content pages by default.
 * Users can toggle with Ctrl+Shift+R or close with Escape.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { openReader, closeReader, isReaderOpen } from '../src/renderer/reader';
import { MESSAGE_TYPES } from '../src/messaging';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import browser from 'webextension-polyfill';
import type { UserSettings } from '@calmweb/shared';

// Sites where reader should NEVER auto-open (interactive web apps)
const SKIP_SITES = [
  'mail.google.com',
  'calendar.google.com',
  'drive.google.com',
  'docs.google.com',
  'sheets.google.com',
  'slides.google.com',
  'meet.google.com',
  'gmail.com',
  'github.com',
  'gitlab.com',
  'bitbucket.org',
  'slack.com',
  'discord.com',
  'notion.so',
  'figma.com',
  'linear.app',
  'jira.',
  'trello.com',
  'asana.com',
  'airtable.com',
  'sheets.',
  'docs.',
  'admin.',
  'dashboard.',
  'app.',
];

// Sites where reader works well but user might not want it
const OPTIONAL_SITES = [
  'youtube.com',
  'reddit.com',
  'twitter.com',
  'x.com',
  'facebook.com',
  'instagram.com',
  'linkedin.com',
  'tiktok.com',
  'pinterest.com',
  'amazon.com',
  'ebay.com',
  'walmart.com',
  'netflix.com',
  'spotify.com',
  'twitch.tv',
];

function shouldSkipSite(): boolean {
  const hostname = window.location.hostname.toLowerCase();
  const path = window.location.pathname;

  // Always skip interactive web apps
  if (SKIP_SITES.some(s => hostname.includes(s) || hostname.startsWith(s))) return true;
  if (SKIP_SITES.some(s => path.startsWith('/' + s.replace('.', '/')))) return true;

  // Skip social/media sites (reader doesn't help much there)
  if (OPTIONAL_SITES.some(s => hostname.includes(s))) return true;

  // Skip if page is mostly interactive (login, checkout, forms)
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input:not([type="hidden"])');
  if (forms.length > 2 || inputs.length > 5) return true;

  // Skip if very little text content
  const bodyText = document.body?.textContent || '';
  if (bodyText.trim().length < 500) return true;

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
    console.log('[CalmWeb] Reader loaded on', window.location.hostname);

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        e.stopPropagation();
        safeToggleReader();
      }
      if (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        e.stopPropagation();
        safeToggleReader();
      }
    }, true);

    // Message handlers
    browser.runtime.onMessage.addListener((message: any) => {
      if (message.type === MESSAGE_TYPES.TOGGLE_READER) {
        safeToggleReader();
      }
      if (message.type === MESSAGE_TYPES.OPEN_READER) {
        try { if (!isReaderOpen()) openReader(); } catch (err) { console.error('[CalmWeb]', err); }
      }
      if (message.type === MESSAGE_TYPES.CLOSE_READER) {
        try { if (isReaderOpen()) closeReader(); } catch (err) { console.error('[CalmWeb]', err); }
      }
    });

    // Auto-open on content pages
    try {
      const settings = await sendToBackground<UserSettings>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settings?.reader?.autoOpen && settings?.enabled && !shouldSkipSite()) {
        setTimeout(() => {
          console.log('[CalmWeb] Auto-opening reader');
          safeToggleReader();
        }, 1200);
      }
    } catch {
      // Silently fail
    }
  },
});
