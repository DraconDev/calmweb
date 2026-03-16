/**
 * Reader Entry Point for CalmWeb
 *
 * Opens on EVERY page by default - this is the primary way to browse.
 * Raw mode toggle available in toolbar to see original page.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { openReader, closeReader, isReaderOpen } from '../src/renderer/reader';
import { MESSAGE_TYPES } from '../src/messaging';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import browser from 'webextension-polyfill';
import type { UserSettings } from '@calmweb/shared';

const FLOATING_BTN_ID = 'calmweb-raw-toggle';

function hasContent(): boolean {
  const bodyText = document.body?.textContent || '';
  return bodyText.trim().length >= 200;
}

function showFloatingButton(): void {
  if (document.getElementById(FLOATING_BTN_ID)) return;

  const btn = document.createElement('div');
  btn.id = FLOATING_BTN_ID;
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  `;
  btn.title = 'Open Filtered View (Ctrl+Shift+R)';
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: '#a78bfa',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: '2147483646',
    boxShadow: '0 4px 20px rgba(167, 139, 250, 0.4)',
    transition: 'all 0.2s ease',
    border: 'none',
  });
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.1)';
    btn.style.boxShadow = '0 6px 24px rgba(167, 139, 250, 0.5)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = '0 4px 20px rgba(167, 139, 250, 0.4)';
  });
  btn.addEventListener('click', () => {
    btn.remove();
    try { openReader(); } catch (err) { console.error('[CalmWeb]', err); }
  });
  document.body.appendChild(btn);
}

function hideFloatingButton(): void {
  document.getElementById(FLOATING_BTN_ID)?.remove();
}

function safeToggleReader(): void {
  try {
    if (isReaderOpen()) {
      closeReader();
      showFloatingButton();
    } else {
      hideFloatingButton();
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
        hideFloatingButton();
        try { if (!isReaderOpen()) openReader(); } catch (err) { console.error('[CalmWeb]', err); }
      }
      if (message.type === MESSAGE_TYPES.CLOSE_READER) {
        try { if (isReaderOpen()) { closeReader(); showFloatingButton(); } } catch (err) { console.error('[CalmWeb]', err); }
      }
    });

    // Auto-open on ALL pages (unless disabled in settings)
    try {
      const settings = await sendToBackground<UserSettings>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settings?.reader?.autoOpen !== false && settings?.enabled !== false && hasContent()) {
        setTimeout(() => {
          console.log('[CalmWeb] Auto-opening filtered view');
          try {
            openReader();
          } catch (err) {
            console.error('[CalmWeb] Failed to open reader:', err);
          }
        }, 800);
      } else if (settings?.reader?.autoOpen !== false && settings?.enabled !== false) {
        // No content to show, show floating button
        showFloatingButton();
      }
    } catch {
      // If settings fail, default to opening
      if (hasContent()) {
        setTimeout(() => {
          try { openReader(); } catch (err) { console.error('[CalmWeb]', err); }
        }, 800);
      }
    }
  },
});
