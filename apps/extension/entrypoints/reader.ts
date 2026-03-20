/**
 * Reader Entry Point for CalmWeb
 *
 * ALWAYS shows our layout. Never shows original page.
 * Logs everything for debugging.
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
// Smart Detection
// ============================================================================

function isInteractiveSite(): boolean {
  const hostname = window.location.hostname.toLowerCase();
  const path = window.location.pathname.toLowerCase();

  const skipDomains = [
    'mail.google', 'calendar.google', 'drive.google', 'docs.google',
    'sheets.google', 'slides.google', 'meet.google',
    'github.com', 'gitlab.com', 'slack.com', 'discord.com',
    'notion.so', 'figma.com', 'linear.app', 'trello.com',
    'netflix.com', 'spotify.com', 'youtube.com',
  ];
  if (skipDomains.some(d => hostname.includes(d))) return true;

  const skipPaths = ['/login', '/signin', '/signup', '/register', '/auth',
    '/account', '/settings', '/admin', '/dashboard', '/checkout', '/cart'];
  if (skipPaths.some(p => path.startsWith(p))) return true;

  const inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="search"]), textarea, select');
  if (inputs.length > 4) return true;

  return false;
}

// ============================================================================
// UI
// ============================================================================

function showLoading(): void {
  try {
    if (document.getElementById(LOADING_ID)) return;
    // Lock scrolling
    document.body.style.setProperty('overflow', 'hidden', 'important');
    // Create loading overlay (covers page with opaque background)
    const loader = document.createElement('div');
    loader.id = LOADING_ID;
    loader.innerHTML = `<style>${LOADING_STYLES}</style>
      <div class="calmweb-loading-spinner"></div>
      <div class="calmweb-loading-text">Filtering...</div>`;
    document.body.appendChild(loader);
  } catch (err) {
    console.error('[CalmWeb] Loading screen failed:', err);
  }
}

function hideLoading(): void {
  document.getElementById(LOADING_ID)?.remove();
  // Scrolling is restored by the reader renderer when it closes
}

function showFloatingButton(): void {
  if (document.getElementById(FLOATING_BTN_ID)) return;
  const btn = document.createElement('div');
  btn.id = FLOATING_BTN_ID;
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
  btn.title = 'Filtered View (Ctrl+Shift+R)';
  Object.assign(btn.style, {
    position: 'fixed', bottom: '20px', right: '20px',
    width: '40px', height: '40px', borderRadius: '50%',
    background: '#8b5cf6', color: 'white',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', zIndex: '2147483646',
    boxShadow: '0 4px 24px rgba(139, 92, 246, 0.3)',
    transition: 'transform 0.15s ease', border: 'none',
  });
  btn.addEventListener('mouseenter', () => { btn.style.transform = 'scale(1.1)'; });
  btn.addEventListener('mouseleave', () => { btn.style.transform = 'scale(1)'; });
  btn.addEventListener('click', () => {
    btn.remove();
    showLoading();
    setTimeout(() => { hideLoading(); try { openReader(); } catch (e) { console.error(e); } }, 300);
  });
  document.body.appendChild(btn);
}

function hideFloatingButton(): void {
  document.getElementById(FLOATING_BTN_ID)?.remove();
}

function safeToggleReader(): void {
  try {
    if (isReaderOpen()) { closeReader(); showFloatingButton(); }
    else { hideFloatingButton(); openReader(); }
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

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.key.toLowerCase() === 'r') {
        e.preventDefault(); e.stopPropagation(); safeToggleReader();
      }
      if (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.key.toLowerCase() === 'r') {
        e.preventDefault(); e.stopPropagation(); safeToggleReader();
      }
    }, true);

    // Messages
    browser.runtime.onMessage.addListener((message: any) => {
      if (message.type === MESSAGE_TYPES.TOGGLE_READER) safeToggleReader();
      if (message.type === MESSAGE_TYPES.OPEN_READER) { hideFloatingButton(); try { if (!isReaderOpen()) openReader(); } catch (e) { console.error(e); } }
      if (message.type === MESSAGE_TYPES.CLOSE_READER) { try { if (isReaderOpen()) { closeReader(); showFloatingButton(); } } catch (e) { console.error(e); } }
    });

    // Load settings with timeout - default to filtering if settings unavailable
    let shouldFilter = true;
    let readerSettings: any = {};
    let fullSettings: UserSettings | undefined = undefined;
    try {
      const settingsPromise = sendToBackground<UserSettings>({ type: MESSAGE_TYPES.GET_SETTINGS });
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Settings timeout')), 2000));
      const settings = await Promise.race([settingsPromise, timeout]) as UserSettings;
      fullSettings = settings;
      if (settings?.reader?.autoOpen === false || settings?.enabled === false) shouldFilter = false;
      readerSettings = settings?.reader || {};
      console.log('[CalmWeb] Settings loaded, filtering:', shouldFilter);
    } catch (err) {
      console.warn('[CalmWeb] Settings load failed, defaulting to filter:', err);
    }

    if (!shouldFilter) { showFloatingButton(); return; }
    if (isInteractiveSite()) { showFloatingButton(); return; }

    console.log('[CalmWeb] Opening reader...');
    showLoading();

    openReader({
      mode: readerSettings.mode || 'full',
      layoutId: readerSettings.defaultLayout,
      font: readerSettings.font,
      fontSize: readerSettings.fontSize,
      settings: fullSettings,
      useAI: readerSettings.useAI !== false,
    }).then(() => {
      hideLoading();
      console.log('[CalmWeb] Reader opened OK');
    }).catch((err) => {
      console.error('[CalmWeb] Reader failed:', err);
      hideLoading();
      showFloatingButton();
    });
  },
});
