/**
 * Google Search Content Script for CalmWeb
 *
 * Instead of trying to filter Google's complex DOM (which causes freezes),
 * this extracts search results and displays them in a clean Super Reader view.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { MESSAGE_TYPES } from '@/src/messaging';
import { isGoogleSearchPage, extractSearchData, type GoogleSearchResult } from '@/src/adapters/google';
import browser from 'webextension-polyfill';

const OVERLAY_ID = 'calmweb-google-reader';

export default defineContentScript({
  matches: ['*://*.google.com/search*', '*://*.google.co.uk/search*', '*://*.google.ca/search*', '*://*.google.de/search*', '*://*.google.fr/search*', '*://*.google.com.au/search*'],
  runAt: 'document_idle',

  main() {
    if (!isGoogleSearchPage()) return;

    console.log('[CalmWeb] Google Search script loaded');

    // Listen for reader toggle from popup/context menu
    browser.runtime.onMessage.addListener((message: any) => {
      if (message.type === MESSAGE_TYPES.TOGGLE_READER) {
        toggleGoogleReader();
      }
      if (message.type === MESSAGE_TYPES.OPEN_READER) {
        openGoogleReader();
      }
    });

    // Keyboard shortcut: Ctrl+Shift+R (matches main reader)
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && !e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        e.stopPropagation();
        toggleGoogleReader();
      }
      if (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        e.stopPropagation();
        toggleGoogleReader();
      }
    }, true);

    // Auto-open on load after a short delay for results to render
    setTimeout(() => {
      const data = extractSearchData();
      if (data.results.length > 0) {
        openGoogleReader();
      }
    }, 800);
  },
});

function toggleGoogleReader(): void {
  const existing = document.getElementById(OVERLAY_ID);
  if (existing) {
    existing.remove();
    return;
  }
  openGoogleReader();
}

function openGoogleReader(): void {
  const existing = document.getElementById(OVERLAY_ID);
  if (existing) return;

  const data = extractSearchData();
  if (data.results.length === 0) return;

  const overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  const shadow = overlay.attachShadow({ mode: 'open' });

  shadow.innerHTML = `
    <style>${OVERLAY_STYLES}</style>
    <div class="reader-toolbar">
      <div class="reader-toolbar-left">
        <div class="reader-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          CalmWeb Reader
        </div>
        <div class="reader-query">"${escapeHtml(data.query)}"</div>
        <span class="reader-count">${data.results.length} results</span>
      </div>
      <div class="reader-toolbar-right">
        <button class="reader-btn" data-action="toggle-view">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
          </svg>
          View
        </button>
        <button class="reader-btn reader-btn-close" data-action="close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
          Close
        </button>
      </div>
    </div>
    <div class="reader-content" id="reader-content">
      <div class="reader-results" id="reader-results">
        ${renderResults(data.results)}
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  setupEventListeners(shadow, overlay);
}

function renderResults(results: GoogleSearchResult[]): string {
  return results.map((r, i) => `
    <article class="result-card" data-index="${i}">
      <div class="result-header">
        <span class="result-position">${r.position}</span>
        <div class="result-title-row">
          <h3 class="result-title">
            <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener">${escapeHtml(r.title)}</a>
          </h3>
        </div>
      </div>
      ${r.snippet ? `<p class="result-snippet">${escapeHtml(r.snippet)}</p>` : ''}
      <div class="result-meta">
        <span class="result-source">${escapeHtml(r.source)}</span>
        <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener" class="result-url">${escapeHtml(truncateUrl(r.url, 60))}</a>
      </div>
    </article>
  `).join('');
}

function renderResultsList(results: GoogleSearchResult[]): string {
  return results.map((r) => `
    <li class="list-item">
      <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener" class="list-title">${escapeHtml(r.title)}</a>
      <span class="list-source">${escapeHtml(r.source)}</span>
      ${r.snippet ? `<p class="list-snippet">${escapeHtml(r.snippet)}</p>` : ''}
    </li>
  `).join('');
}

function setupEventListeners(shadow: ShadowRoot, overlay: HTMLElement): void {
  // Close button
  shadow.querySelector('[data-action="close"]')?.addEventListener('click', () => {
    overlay.remove();
  });

  // Escape key
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', handleEsc);
    }
  };
  document.addEventListener('keydown', handleEsc);

  // Toggle view
  let isCardView = true;
  shadow.querySelector('[data-action="toggle-view"]')?.addEventListener('click', () => {
    const data = extractSearchData();
    const container = shadow.getElementById('reader-results');
    if (!container) return;

    isCardView = !isCardView;
    container.className = isCardView ? 'reader-results' : 'reader-results list-view';
    container.innerHTML = isCardView
      ? renderResults(data.results)
      : `<ol class="results-list">${renderResultsList(data.results)}</ol>`;
  });
}

function truncateUrl(url: string, maxLen: number): string {
  if (url.length <= maxLen) return url;
  return url.substring(0, maxLen) + '...';
}

function escapeHtml(text: string): string {
  const span = document.createElement('span');
  span.textContent = text;
  return span.innerHTML;
}

const OVERLAY_STYLES = `
  :host {
    all: initial;
  }

  #${OVERLAY_ID} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2147483647;
    background: #09090b;
    color: #d4d4d8;
    overflow-y: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .reader-toolbar {
    position: sticky;
    top: 0;
    height: 56px;
    background: rgba(15, 15, 15, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    z-index: 10;
  }

  .reader-toolbar-left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .reader-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 14px;
    color: #a78bfa;
    white-space: nowrap;
  }

  .reader-query {
    font-size: 13px;
    color: #9ca3af;
    max-width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .reader-count {
    font-size: 11px;
    color: #6b7280;
    background: rgba(255,255,255,0.06);
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
  }

  .reader-toolbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .reader-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 14px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #9ca3af;
    cursor: pointer;
    transition: all 0.15s ease;
    font-family: inherit;
  }

  .reader-btn:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.2);
    color: #e5e7eb;
  }

  .reader-btn-close {
    background: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.3);
    color: #f87171;
  }

  .reader-btn-close:hover {
    background: rgba(239, 68, 68, 0.25);
    border-color: rgba(239, 68, 68, 0.5);
    color: #fca5a5;
  }

  .reader-content {
    max-width: 780px;
    margin: 0 auto;
    padding: 24px;
  }

  /* Card View */
  .reader-results {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .result-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    padding: 20px;
    transition: all 0.2s ease;
  }

  .result-card:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(167, 139, 250, 0.2);
    transform: translateY(-1px);
  }

  .result-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 8px;
  }

  .result-position {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    min-width: 28px;
    background: rgba(167, 139, 250, 0.15);
    color: #a78bfa;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    margin-top: 2px;
  }

  .result-title-row {
    flex: 1;
    min-width: 0;
  }

  .result-title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
  }

  .result-title a {
    color: #e5e7eb;
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .result-title a:hover {
    color: #a78bfa;
  }

  .result-snippet {
    font-size: 14px;
    line-height: 1.6;
    color: #9ca3af;
    margin: 8px 0 12px 40px;
  }

  .result-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 40px;
    font-size: 12px;
  }

  .result-source {
    color: #6b7280;
    font-weight: 600;
    background: rgba(255,255,255,0.06);
    padding: 2px 8px;
    border-radius: 4px;
  }

  .result-url {
    color: #4b5563;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .result-url:hover {
    color: #6b7280;
  }

  /* List View */
  .list-view .results-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .list-view .list-item {
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .list-view .list-item:last-child {
    border-bottom: none;
  }

  .list-view .list-title {
    color: #a78bfa;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
  }

  .list-view .list-title:hover {
    text-decoration: underline;
  }

  .list-view .list-source {
    font-size: 11px;
    color: #6b7280;
    margin-left: 8px;
  }

  .list-view .list-snippet {
    font-size: 13px;
    color: #6b7280;
    margin: 4px 0 0;
    line-height: 1.5;
  }
`;
