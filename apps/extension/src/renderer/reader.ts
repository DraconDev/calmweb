/**
 * Reader Overlay for CalmWeb Super Reader
 */

import type { ExtractedArticle } from './extractor';
import type { ReaderLayout } from './layouts';
import type { ReaderTheme } from './themes';
import { extractArticle } from './extractor';
import { getLayout, allLayouts, autoDetectLayout } from './layouts';
import { getTheme, allThemes, applyTheme } from './themes';

export interface ReaderOptions {
  layoutId?: string;
  themeId?: string;
  textOnly?: boolean;
  onClose?: () => void;
}

const OVERLAY_ID = 'calmweb-reader-overlay';
const OVERLAY_STYLES = `
  #${OVERLAY_ID} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2147483647;
    background: var(--reader-bg, #ffffff);
    color: var(--reader-text, #1f2937);
    overflow-y: auto;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .calmweb-reader-toolbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: rgba(9, 9, 11, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(139, 92, 246, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 10;
  }

  .calmweb-reader-toolbar-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .calmweb-reader-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 14px;
    color: #8b5cf6;
  }

  .calmweb-reader-title {
    font-size: 13px;
    color: #52525b;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .calmweb-reader-toolbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .calmweb-reader-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 12px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #a1a1aa;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .calmweb-reader-btn:hover {
    background: rgba(139, 92, 246, 0.08);
    border-color: rgba(139, 92, 246, 0.2);
    color: #e4e4e7;
  }

  .calmweb-reader-btn:active {
    transform: scale(0.97);
  }

  .calmweb-reader-btn-close {
    background: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.3);
    color: #f87171;
  }

  .calmweb-reader-btn-close:hover {
    background: rgba(239, 68, 68, 0.25);
  }

  .calmweb-reader-dropdown {
    position: relative;
  }

  .calmweb-reader-dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: #1a1a26;
    border: 1px solid #252538;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.4);
    min-width: 160px;
    padding: 8px;
    display: none;
  }

  .calmweb-reader-dropdown-menu.open {
    display: block;
  }

  .calmweb-reader-dropdown-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 13px;
    color: #a1a1aa;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .calmweb-reader-dropdown-item:hover {
    background: rgba(167, 139, 250, 0.1);
    color: #d4d4d8;
  }

  .calmweb-reader-dropdown-item.active {
    background: rgba(167, 139, 250, 0.15);
    color: #a78bfa;
  }

  .calmweb-reader-content {
    margin-top: 56px;
    min-height: calc(100vh - 56px);
  }

`;

let currentLayout: ReaderLayout;
let currentTheme: ReaderTheme;
let currentArticle: ExtractedArticle | null = null;

export function openReader(options: ReaderOptions = {}): void {
  try {
    const existing = document.getElementById(OVERLAY_ID);
    if (existing) return;

    const article = extractArticle(document, window.location.href, options.textOnly ?? true);
    if (!article || !article.title) {
      console.warn('[CalmWeb] Could not extract article content');
      return;
    }
    currentArticle = article;

    // Hide all page content and lock scrolling
    document.documentElement.style.setProperty('overflow', 'hidden', 'important');
    document.body.style.setProperty('overflow', 'hidden', 'important');
    document.body.style.setProperty('visibility', 'hidden', 'important');
    document.documentElement.style.setProperty('visibility', 'hidden', 'important');

  // Auto-detect layout unless explicitly specified
  currentLayout = options.layoutId ? getLayout(options.layoutId) : autoDetectLayout(article);
  currentTheme = getTheme(options.themeId || 'default');

  const overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  // Make overlay visible even though body is hidden
  overlay.style.setProperty('visibility', 'visible', 'important');

  const shadow = overlay.attachShadow({ mode: 'open' });

  shadow.innerHTML = `
    <style>${OVERLAY_STYLES}</style>
    <div class="calmweb-reader-toolbar">
      <div class="calmweb-reader-toolbar-left">
        <div class="calmweb-reader-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Filtered
        </div>
        <div class="calmweb-reader-title">${escapeHtml(article.title)}</div>
      </div>
      <div class="calmweb-reader-toolbar-right">
        <div class="calmweb-reader-dropdown">
          <button class="calmweb-reader-btn" data-dropdown="layout">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
            </svg>
            <span class="layout-name">${currentLayout.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="layout">
            ${allLayouts.map(l => `
              <div class="calmweb-reader-dropdown-item ${l.id === currentLayout.id ? 'active' : ''}" data-layout="${l.id}">
                ${l.name}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="calmweb-reader-dropdown">
          <button class="calmweb-reader-btn" data-dropdown="theme">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <span class="theme-name">${currentTheme.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="theme">
            ${allThemes.map(t => `
              <div class="calmweb-reader-dropdown-item ${t.id === currentTheme.id ? 'active' : ''}" data-theme="${t.id}">
                ${t.name}
              </div>
            `).join('')}
          </div>
        </div>

        <button class="calmweb-reader-btn" data-action="raw">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
          </svg>
          Raw
        </button>
        <button class="calmweb-reader-btn calmweb-reader-btn-close" data-action="close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
          Close
        </button>
      </div>
    </div>
    <div class="calmweb-reader-content" id="reader-content"></div>
  `;

  document.body.appendChild(overlay);

  const contentEl = shadow.getElementById('reader-content') as HTMLElement;
  applyTheme(currentTheme, overlay);
  currentLayout.render(article, contentEl);

  setupEventListeners(shadow, overlay, options);
  } catch (err) {
    console.error('[CalmWeb] Failed to open reader:', err);
  }
}

export function closeReader(): void {
  const overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
  // Restore page visibility and scrolling
  document.documentElement.style.removeProperty('overflow');
  document.documentElement.style.removeProperty('visibility');
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('visibility');
}

function setupEventListeners(shadow: ShadowRoot, overlay: HTMLElement, options: ReaderOptions): void {
  shadow.querySelectorAll('[data-dropdown]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const menuId = (btn as HTMLElement).getAttribute('data-dropdown');
      const menu = shadow.querySelector(`[data-menu="${menuId}"]`);
      
      shadow.querySelectorAll('.calmweb-reader-dropdown-menu').forEach(m => {
        if (m !== menu) m.classList.remove('open');
      });
      
      menu?.classList.toggle('open');
    });
  });

  shadow.querySelectorAll('[data-layout]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const layoutId = (item as HTMLElement).getAttribute('data-layout');
      if (layoutId) {
        currentLayout = getLayout(layoutId);
        const contentEl = shadow.getElementById('reader-content') as HTMLElement;
        if (currentArticle) {
          contentEl.innerHTML = '';
          currentLayout.render(currentArticle, contentEl);
        }
        
        shadow.querySelectorAll('[data-layout]').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        shadow.querySelector('.layout-name')!.textContent = currentLayout.name;
        shadow.querySelector('[data-menu="layout"]')?.classList.remove('open');
      }
    });
  });

  shadow.querySelectorAll('[data-theme]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const themeId = (item as HTMLElement).getAttribute('data-theme');
      if (themeId) {
        currentTheme = getTheme(themeId);
        applyTheme(currentTheme, overlay);
        
        shadow.querySelectorAll('[data-theme]').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        shadow.querySelector('.theme-name')!.textContent = currentTheme.name;
        shadow.querySelector('[data-menu="theme"]')?.classList.remove('open');
      }
    });
  });

  const closeBtn = shadow.querySelector('[data-action="close"]');
  closeBtn?.addEventListener('click', () => {
    closeReader();
    options.onClose?.();
  });

  const rawBtn = shadow.querySelector('[data-action="raw"]');
  rawBtn?.addEventListener('click', () => {
    closeReader();
    options.onClose?.();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReader();
      options.onClose?.();
    }
  });

  document.addEventListener('click', () => {
    shadow.querySelectorAll('.calmweb-reader-dropdown-menu').forEach(m => {
      m.classList.remove('open');
    });
  });
}

function escapeHtml(text: string): string {
  const span = document.createElement('span');
  span.textContent = text;
  return span.innerHTML;
}

export function isReaderOpen(): boolean {
  return !!document.getElementById(OVERLAY_ID);
}

export function toggleReader(options?: ReaderOptions): void {
  if (isReaderOpen()) {
    closeReader();
  } else {
    openReader(options);
  }
}