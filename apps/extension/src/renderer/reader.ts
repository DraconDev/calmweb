/**
 * Reader Overlay for CalmWeb Super Reader
 */

import type { ExtractedArticle } from './extractor';
import type { ReaderLayout } from './layouts';
import { extractArticle } from './extractor';
import { getLayout, autoDetectLayout } from './layouts';

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
    background: #09090b;
  }

`;

let currentLayout: ReaderLayout;
let currentFont: string = 'Inter, -apple-system, sans-serif';
let currentFontSize: string = '17px';

export function openReader(options: ReaderOptions = {}): void {
  // Lock page scrolling
  document.body.style.setProperty('overflow', 'hidden', 'important');

  // Remove any existing overlay
  document.getElementById(OVERLAY_ID)?.remove();

  // Try to extract content
  let article: ExtractedArticle | null = null;
  try {
    article = extractArticle(document, window.location.href, options.textOnly ?? true);
  } catch (err) {
    console.error('[CalmWeb] Extraction failed:', err);
  }

  // Set up layout/fonts
  currentLayout = options.layoutId ? getLayout(options.layoutId) : autoDetectLayout(article || fallbackArticle());
  currentFont = options.font ? `${options.font}, -apple-system, sans-serif` : 'Inter, -apple-system, sans-serif';
  currentFontSize = options.fontSize || '17px';

  const titleText = article?.title || document.title || 'Current Page';

  // Create overlay with INLINE STYLES (no shadow DOM, no CSS files)
  const overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  overlay.style.cssText = `
    position: fixed !important;
    top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
    width: 100vw !important; height: 100vh !important;
    z-index: 2147483647 !important;
    background: #09090b !important;
    color: #d4d4d8 !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    font-family: ${currentFont} !important;
  `;

  // Toolbar
  const toolbar = document.createElement('div');
  toolbar.style.cssText = `
    position: sticky !important; top: 0 !important; z-index: 10 !important;
    height: 56px !important; display: flex !important; align-items: center !important;
    justify-content: space-between !important; padding: 0 20px !important;
    background: rgba(9,9,11,0.95) !important; backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(139,92,246,0.1) !important;
  `;

  // Logo
  const logo = document.createElement('div');
  logo.style.cssText = 'display:flex;align-items:center;gap:8px;font-weight:700;font-size:14px;color:#8b5cf6;';
  logo.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Filtered`;

  // Title
  const title = document.createElement('div');
  title.style.cssText = 'font-size:13px;color:#52525b;max-width:400px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
  title.textContent = titleText;

  const left = document.createElement('div');
  left.style.cssText = 'display:flex;align-items:center;gap:12px;min-width:0;';
  left.appendChild(logo);
  left.appendChild(title);

  // Buttons
  const rawBtn = document.createElement('button');
  rawBtn.style.cssText = 'display:flex;align-items:center;gap:6px;padding:8px 14px;background:transparent;border:1px solid rgba(255,255,255,0.06);border-radius:8px;font-size:13px;color:#a1a1aa;cursor:pointer;font-family:inherit;';
  rawBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> Raw`;
  rawBtn.onclick = () => { closeReader(); options.onClose?.(); };

  const closeBtn = document.createElement('button');
  closeBtn.style.cssText = 'display:flex;align-items:center;gap:6px;padding:8px 14px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);border-radius:8px;font-size:13px;color:#f87171;cursor:pointer;font-family:inherit;';
  closeBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Close`;
  closeBtn.onclick = () => { closeReader(); options.onClose?.(); };

  const right = document.createElement('div');
  right.style.cssText = 'display:flex;align-items:center;gap:8px;';
  right.appendChild(rawBtn);
  right.appendChild(closeBtn);

  toolbar.appendChild(left);
  toolbar.appendChild(right);

  // Content area
  const content = document.createElement('div');
  content.id = 'calmweb-reader-content';
  content.style.cssText = 'padding: 0 0 80px; min-height: calc(100vh - 56px);';

  // Assemble
  overlay.appendChild(toolbar);
  overlay.appendChild(content);
  document.body.appendChild(overlay);

  // Render content
  if (article && article.title) {
    try {
      currentLayout.render(article, content, { font: currentFont, fontSize: currentFontSize });
    } catch (err) {
      console.error('[CalmWeb] Layout render failed:', err);
      renderFallback(content, article.title, article.content);
    }
  } else {
    const fallback = fallbackArticle();
    try {
      currentLayout.render(fallback, content, { font: currentFont, fontSize: currentFontSize });
    } catch (err) {
      renderFallback(content, document.title, document.body?.textContent?.slice(0, 2000) || '');
    }
  }

  // Escape key
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') { closeReader(); document.removeEventListener('keydown', handleEsc); }
  };
  document.addEventListener('keydown', handleEsc);
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
  // Restore page scrolling
  document.body.style.removeProperty('overflow');
}

function setupEventListeners(shadow: ShadowRoot, _overlay: HTMLElement, options: ReaderOptions): void {
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