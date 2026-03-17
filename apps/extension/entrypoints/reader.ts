/**
 * Reader Entry Point for CalmWeb
 *
 * Hides the page IMMEDIATELY and shows a loading screen.
 * Then extracts content and shows filtered layout.
 * No flash of original page.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { openReader, closeReader, isReaderOpen } from '../src/renderer/reader';
import { MESSAGE_TYPES } from '../src/messaging';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import browser from 'webextension-polyfill';
import type { UserSettings } from '@calmweb/shared';

const LOADING_ID = 'calmweb-loading';
const FLOATING_BTN_ID = 'calmweb-raw-toggle';

const LOADING_STYLES = `
  #${LOADING_ID} {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw; height: 100vh;
    z-index: 2147483647;
    background: #09090b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .calmweb-loading-spinner {
    width: 32px; height: 32px;
    border: 3px solid rgba(255,255,255,0.06);
    border-top-color: #8b5cf6;
    border-radius: 50%;
    animation: calmweb-spin 0.8s linear infinite;
  }
  .calmweb-loading-text {
    color: #52525b;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
  .calmweb-loading-logo {
    color: #8b5cf6;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  @keyframes calmweb-spin {
    to { transform: rotate(360deg); }
  }
`;

function showLoading(): void {
  if (document.getElementById(LOADING_ID)) return;

  // Hide page immediately
  document.documentElement.style.setProperty('overflow', 'hidden', 'important');
  document.documentElement.style.setProperty('visibility', 'hidden', 'important');
  document.body.style.setProperty('overflow', 'hidden', 'important');
  document.body.style.setProperty('visibility', 'hidden', 'important');

  const loader = document.createElement('div');
  loader.id = LOADING_ID;
  loader.style.setProperty('visibility', 'visible', 'important');
  loader.innerHTML = `
    <style>${LOADING_STYLES}</style>
    <div class="calmweb-loading-logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    </div>
    <div class="calmweb-loading-spinner"></div>
    <div class="calmweb-loading-text">Filtering...</div>
  `;
  document.body.appendChild(loader);
}

function hideLoading(): void {
  document.getElementById(LOADING_ID)?.remove();
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
  btn.title = 'Filtered View (Ctrl+Shift+R)';
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: '#8b5cf6',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: '2147483646',
    boxShadow: '0 4px 24px rgba(139, 92, 246, 0.35), 0 0 0 1px rgba(139, 92, 246, 0.1)',
    transition: 'all 0.2s ease',
    border: 'none',
  });
  btn.addEventListener('mouseenter', () => { btn.style.transform = 'scale(1.1)'; });
  btn.addEventListener('mouseleave', () => { btn.style.transform = 'scale(1)'; });
  btn.addEventListener('click', () => {
    btn.remove();
    showLoading();
    setTimeout(() => {
      hideLoading();
      try { openReader(); } catch (err) { console.error('[CalmWeb]', err); }
    }, 300);
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
      if (message.type === MESSAGE_TYPES.TOGGLE_READER) safeToggleReader();
      if (message.type === MESSAGE_TYPES.OPEN_READER) {
        hideFloatingButton();
        try { if (!isReaderOpen()) openReader(); } catch (err) { console.error('[CalmWeb]', err); }
      }
      if (message.type === MESSAGE_TYPES.CLOSE_READER) {
        try { if (isReaderOpen()) { closeReader(); showFloatingButton(); } } catch (err) { console.error('[CalmWeb]', err); }
      }
    });

    // Check settings
    let shouldFilter = true;
    let readerSettings: { textOnly?: boolean; defaultLayout?: string; font?: string; fontSize?: string } = {};
    try {
      const settings = await sendToBackground<UserSettings>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settings?.reader?.autoOpen === false || settings?.enabled === false) {
        shouldFilter = false;
      }
      readerSettings = settings?.reader || {};
    } catch {
      // Default to filtering
    }

    if (shouldFilter) {
      // Show loading immediately, then open reader
      showLoading();
      setTimeout(() => {
        hideLoading();
        try {
          openReader({
            textOnly: readerSettings.textOnly !== false,
            layoutId: readerSettings.defaultLayout,
            font: readerSettings.font,
            fontSize: readerSettings.fontSize,
          });
        } catch (err) {
          console.error('[CalmWeb] Failed to open reader:', err);
          // If reader fails, restore the page
          document.documentElement.style.removeProperty('overflow');
          document.documentElement.style.removeProperty('visibility');
          document.body.style.removeProperty('overflow');
          document.body.style.removeProperty('visibility');
        }
      }, 600);
    }
  },
});
