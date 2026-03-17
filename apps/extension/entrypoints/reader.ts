/**
 * Reader Entry Point for CalmWeb
 *
 * Smart detection: only opens on actual content pages.
 * Shows floating button on sites where reader could help but shouldn't auto-open.
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .calmweb-loading-spinner {
    width: 28px; height: 28px;
    border: 2px solid rgba(255,255,255,0.06);
    border-top-color: #8b5cf6;
    border-radius: 50%;
    animation: calmweb-spin 0.8s linear infinite;
  }
  .calmweb-loading-text { color: #3f3f46; font-size: 12px; font-weight: 500; }
  @keyframes calmweb-spin { to { transform: rotate(360deg); } }
`;

// ============================================================================
// Smart Article Detection
// ============================================================================

function isInteractiveSite(): boolean {
  const hostname = window.location.hostname.toLowerCase();
  const path = window.location.pathname.toLowerCase();

  // Web apps that should never auto-filter
  const skipDomains = [
    'mail.google', 'calendar.google', 'drive.google', 'docs.google',
    'sheets.google', 'slides.google', 'meet.google',
    'github.com', 'gitlab.com', 'bitbucket.org',
    'slack.com', 'discord.com', 'notion.so', 'figma.com',
    'linear.app', 'trello.com', 'asana.com', 'airtable.com',
    'jira.', 'atlassian.net', 'monday.com',
    'netflix.com', 'spotify.com', 'youtube.com',
  ];
  if (skipDomains.some(d => hostname.includes(d))) return true;

  // Login/auth/account pages
  const skipPaths = ['/login', '/signin', '/signup', '/register', '/auth',
    '/account', '/settings', '/admin', '/dashboard', '/checkout', '/cart',
    '/payment', '/oauth', '/callback'];
  if (skipPaths.some(p => path.startsWith(p))) return true;

  // Pages with many form inputs (interactive)
  const inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="search"]), textarea, select');
  if (inputs.length > 4) return true;

  return false;
}

// ============================================================================
// UI
// ============================================================================

function showLoading(): void {
  if (document.getElementById(LOADING_ID)) return;

  document.documentElement.style.setProperty('overflow', 'hidden', 'important');
  document.documentElement.style.setProperty('visibility', 'hidden', 'important');
  document.body.style.setProperty('overflow', 'hidden', 'important');
  document.body.style.setProperty('visibility', 'hidden', 'important');

  const loader = document.createElement('div');
  loader.id = LOADING_ID;
  loader.style.setProperty('visibility', 'visible', 'important');
  loader.innerHTML = `<style>${LOADING_STYLES}</style>
    <div class="calmweb-loading-spinner"></div>
    <div class="calmweb-loading-text">Filtering...</div>`;
  document.body.appendChild(loader);
}

function hideLoading(): void {
  document.getElementById(LOADING_ID)?.remove();
  // Always restore page visibility when hiding loader
  // (openReader will re-hide if it succeeds)
  document.documentElement.style.removeProperty('overflow');
  document.documentElement.style.removeProperty('visibility');
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('visibility');
}

function showFloatingButton(): void {
  if (document.getElementById(FLOATING_BTN_ID)) return;

  const btn = document.createElement('div');
  btn.id = FLOATING_BTN_ID;
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>`;
  btn.title = 'Filtered View (Ctrl+Shift+R)';
  Object.assign(btn.style, {
    position: 'fixed', bottom: '20px', right: '20px',
    width: '40px', height: '40px', borderRadius: '50%',
    background: '#8b5cf6', color: 'white',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', zIndex: '2147483646',
    boxShadow: '0 4px 24px rgba(139, 92, 246, 0.3)',
    transition: 'transform 0.15s ease',
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

// ============================================================================
// Main
// ============================================================================

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',

  async main() {
    console.log('[CalmWeb] Reader loaded on', window.location.hostname);

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.key.toLowerCase() === 'r') {
        e.preventDefault(); e.stopPropagation(); safeToggleReader();
      }
      if (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.key.toLowerCase() === 'r') {
        e.preventDefault(); e.stopPropagation(); safeToggleReader();
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
    let shouldAutoOpen = true;
    let readerSettings: { textOnly?: boolean; defaultLayout?: string; font?: string; fontSize?: string } = {};
    try {
      const settings = await sendToBackground<UserSettings>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settings?.reader?.autoOpen === false || settings?.enabled === false) {
        shouldAutoOpen = false;
      }
      readerSettings = settings?.reader || {};
    } catch {
      // Default to opening
    }

    if (!shouldAutoOpen) return;

    // Skip only truly interactive sites
    if (isInteractiveSite()) {
      showFloatingButton();
      return;
    }

    // Try to open reader - it will fail gracefully if no content
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
        // Reader couldn't extract content - restore page and show floating button
        console.log('[CalmWeb] No extractable content, showing floating button');
        document.documentElement.style.removeProperty('overflow');
        document.documentElement.style.removeProperty('visibility');
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('visibility');
        showFloatingButton();
      }
    }, 400);
  },
});
