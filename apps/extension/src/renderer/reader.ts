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
  font?: string;
  fontSize?: string;
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
    background: var(--reader-bg, #09090b);
    color: var(--reader-text, #e4e4e7);
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
    background: #0f0f14;
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 10px 40px rgba(0,0,0,0.5), 0 0 1px rgba(139, 92, 246, 0.1);
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
    background: rgba(139, 92, 246, 0.08);
    color: #e4e4e7;
  }

  .calmweb-reader-dropdown-item.active {
    background: rgba(139, 92, 246, 0.12);
    color: #8b5cf6;
  }

  .calmweb-reader-content {
    margin-top: 56px;
    min-height: calc(100vh - 56px);
  }

`;

let currentLayout: ReaderLayout;
let currentTheme: ReaderTheme;
let currentArticle: ExtractedArticle | null = null;
let currentFont: string = 'Inter, -apple-system, sans-serif';
let currentFontSize: string = '17px';

export function openReader(options: ReaderOptions = {}): void {
  // Always hide the page FIRST - never flash original content
  document.documentElement.style.setProperty('overflow', 'hidden', 'important');
  document.documentElement.style.setProperty('visibility', 'hidden', 'important');
  document.body.style.setProperty('overflow', 'hidden', 'important');
  document.body.style.setProperty('visibility', 'hidden', 'important');

  // Remove any existing overlay
  document.getElementById(OVERLAY_ID)?.remove();

  // Create overlay immediately - always show our UI
  const overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  overlay.style.setProperty('visibility', 'visible', 'important');
  const shadow = overlay.attachShadow({ mode: 'open' });

  // Try to extract content
  let article: ExtractedArticle | null = null;
  try {
    article = extractArticle(document, window.location.href, options.textOnly ?? true);
  } catch (err) {
    console.error('[CalmWeb] Extraction failed:', err);
  }

  // Set up layout/fonts
  currentLayout = options.layoutId ? getLayout(options.layoutId) : autoDetectLayout(article || fallbackArticle());
  currentTheme = getTheme(options.themeId || 'default');
  currentFont = options.font ? `${options.font}, -apple-system, sans-serif` : 'Inter, -apple-system, sans-serif';
  currentFontSize = options.fontSize || '17px';

  // Build toolbar (always present)
  const titleText = article?.title || document.title || 'Current Page';

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
        <div class="calmweb-reader-title">${escapeHtml(titleText)}</div>
      </div>
      <div class="calmweb-reader-toolbar-right">
        <button class="calmweb-reader-btn" data-action="raw">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
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
    <div class="calmweb-reader-content" id="calmweb-reader-content">
      <div class="calmweb-reader-loading" style="display:flex;align-items:center;justify-content:center;padding:80px 20px;color:#3f3f46;font-size:14px;">
        Rendering content...
      </div>
    </div>
  `;

  // Append to page immediately
  document.body.appendChild(overlay);

  // Render content in next frame (so user sees toolbar immediately)
  requestAnimationFrame(() => {
    const contentEl = shadow.getElementById('calmweb-reader-content');
    if (!contentEl) return;

    if (article && article.title) {
      currentArticle = article;
      try {
        currentLayout.render(article, contentEl, { font: currentFont, fontSize: currentFontSize });
      } catch (err) {
        console.error('[CalmWeb] Layout render failed:', err);
        renderFallback(contentEl, article.title, article.content);
      }
    } else {
      // No extraction - render page title and body text as fallback
      const fallback = fallbackArticle();
      currentArticle = fallback;
      try {
        currentLayout.render(fallback, contentEl, { font: currentFont, fontSize: currentFontSize });
      } catch (err) {
        renderFallback(contentEl, document.title, document.body?.textContent?.slice(0, 2000) || '');
      }
    }
  });

  // Set up event listeners
  setupEventListeners(shadow, overlay, options);
}

function fallbackArticle(): ExtractedArticle {
  return {
    title: document.title || 'Current Page',
    author: undefined,
    date: undefined,
    content: document.body?.textContent?.slice(0, 5000) || '',
    contentHtml: (() => {
      const div = document.createElement('div');
      const text = document.body?.textContent || '';
      const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 20).slice(0, 20);
      for (const p of paragraphs) {
        const el = document.createElement('p');
        el.textContent = p.trim();
        div.appendChild(el);
      }
      return div;
    })(),
    images: [],
    source: window.location.hostname,
    favicon: undefined,
    readingTime: Math.ceil((document.body?.textContent?.split(/\s+/).length || 0) / 200),
    url: window.location.href,
  };
}

function renderFallback(container: HTMLElement, title: string, content: string): void {
  const paragraphs = content.split(/\n\s*\n/).filter(p => p.trim().length > 20).slice(0, 15);
  container.innerHTML = `
    <div style="max-width:680px;margin:0 auto;padding:48px 24px;font-family:${currentFont};font-size:${currentFontSize};color:#a1a1aa;line-height:1.75;">
      <h1 style="font-size:1.8em;color:#e4e4e7;margin:0 0 24px;font-weight:600;letter-spacing:-0.02em;">${escapeHtml(title)}</h1>
      ${paragraphs.map(p => `<p style="margin:0 0 1.5em;">${escapeHtml(p.trim())}</p>`).join('')}
    </div>
  `;
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

  // Handle link clicks - allow normal navigation
  shadow.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('a');
    if (target) {
      // Let browser handle normal link navigation
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReader();
      options.onClose?.();
    }
  });
}

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

  // Handle link clicks in shadow DOM - allow normal navigation
  shadow.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('a');
    if (target) {
      // Let browser handle normal link navigation
      // Close reader so user sees the destination page
      const href = target.getAttribute('href');
      if (href && (href.startsWith('http') || href.startsWith('/'))) {
        // Let it navigate naturally
      }
    }
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