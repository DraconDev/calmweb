/**
 * Reader Overlay - Uses Shadow DOM for complete CSS isolation from host page
 */

import type { ExtractedArticle } from './extractor';
import type { ReaderLayout } from './layouts';
import { extractArticle } from './extractor';
import { getLayout, autoDetectLayout } from './layouts';

export interface ReaderOptions {
  layoutId?: string;
  textOnly?: boolean;
  font?: string;
  fontSize?: string;
  onClose?: () => void;
}

const HOST_ID = 'calmweb-reader-host';

let currentLayout: ReaderLayout;
let currentFont: string = 'Inter, -apple-system, sans-serif';
let currentFontSize: string = '17px';

export function openReader(options: ReaderOptions = {}): void {
  // Lock page scrolling
  document.body.style.setProperty('overflow', 'hidden', 'important');

  // Remove existing overlay
  closeReader();

  // Extract content
  let article: ExtractedArticle | null = null;
  try {
    article = extractArticle(document, window.location.href, options.textOnly ?? true);
  } catch (err) {
    console.error('[CalmWeb] Extraction failed:', err);
  }

  currentLayout = options.layoutId ? getLayout(options.layoutId) : autoDetectLayout(article || fallbackArticle());
  currentFont = options.font ? `${options.font}, -apple-system, sans-serif` : 'Inter, -apple-system, sans-serif';
  currentFontSize = options.fontSize || '17px';

  const titleText = article?.title || document.title || 'Current Page';

  // Create host element (invisible boundary)
  const host = document.createElement('div');
  host.id = HOST_ID;
  host.style.cssText = `
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 2147483647 !important;
    pointer-events: auto !important;
  `;

  // Attach Shadow DOM for complete CSS isolation
  const shadow = host.attachShadow({ mode: 'open' });

  // Inject all styles into shadow root
  const style = document.createElement('style');
  style.textContent = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    .cw-overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #0d0d12 0%, #09090b 50%, #08080a 100%);
      color: #c9c9d0;
      overflow-y: auto;
      overflow-x: hidden;
      font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .cw-toolbar {
      position: sticky;
      top: 0;
      z-index: 10;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      background: linear-gradient(180deg, rgba(13,13,18,0.98) 0%, rgba(9,9,11,0.95) 100%);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(139,92,246,0.15);
    }

    .cw-toolbar-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .cw-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 14px;
      color: #8b5cf6;
    }

    .cw-title {
      font-size: 13px;
      color: #52525b;
      max-width: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .cw-toolbar-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cw-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: transparent;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 8px;
      font-size: 13px;
      color: #a1a1aa;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.15s ease;
    }

    .cw-btn:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.1);
    }

    .cw-btn-close {
      background: rgba(239,68,68,0.15);
      border-color: rgba(239,68,68,0.3);
      color: #f87171;
    }

    .cw-btn-close:hover {
      background: rgba(239,68,68,0.25);
    }

    .cw-content {
      padding: 0 0 80px;
      min-height: calc(100vh - 56px);
    }

    .cw-layout {
      margin: 0 auto;
      padding: 0 32px 100px;
      color: #c9c9d0;
      line-height: 1.8;
      max-width: 800px;
    }

    .cw-article-header {
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .cw-article-header.centered { text-align: center; }

    .cw-title-main {
      font-size: 2.2em;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 20px;
      color: #f0f0f5;
      letter-spacing: -0.03em;
    }

    .cw-meta {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      font-size: 0.85em;
      color: #7a7a85;
      font-weight: 500;
    }

    .cw-header.centered .cw-meta { justify-content: center; }

    .cw-meta-sep { color: #4a4a55; }

    .cw-content p { 
      margin: 0 0 1.5em; 
      color: #c9c9d0; 
      line-height: 1.85;
      font-size: 1.05em;
    }

    .cw-content h1 {
      font-size: 1.8em;
      color: #e8e8f0;
      font-weight: 600;
      margin: 1.5em 0 0.8em;
    }

    .cw-content h2 {
      margin: 2.5em 0 0.8em;
      font-size: 1.5em;
      color: #e8e8f0;
      font-weight: 600;
      letter-spacing: -0.02em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid rgba(139, 92, 246, 0.2);
    }

    .cw-content h3 {
      margin: 2em 0 0.6em;
      font-size: 1.2em;
      color: #d8d8e0;
      font-weight: 600;
    }

    .cw-content h4 {
      margin: 1.5em 0 0.5em;
      font-size: 1.05em;
      color: #c0c0c8;
      font-weight: 600;
    }

    .cw-content.columns-2 {
      column-count: 2;
      column-gap: 48px;
      column-rule: 1px solid rgba(255,255,255,0.06);
    }

    .cw-content.columns-2 h1,
    .cw-content.columns-2 h2,
    .cw-content.columns-2 h3,
    .cw-content.columns-2 blockquote,
    .cw-content.columns-2 pre,
    .cw-content.columns-2 figure {
      column-span: all;
    }

    .cw-content ul, .cw-content ol {
      margin: 0 0 1.5em;
      padding-left: 1.8em;
    }

    .cw-content li { 
      margin: 0.4em 0; 
      line-height: 1.75;
    }

    .cw-content blockquote {
      border-left: 3px solid #7c6aed;
      padding: 0.75em 0 0.75em 1.5em;
      margin: 2em 0;
      color: #9090a0;
      font-style: italic;
      background: rgba(124, 106, 237, 0.05);
      border-radius: 0 8px 8px 0;
    }

    .cw-content blockquote p { margin-bottom: 0; color: #9090a0; }

    .cw-content img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      margin: 2em 0;
      border: 1px solid rgba(255,255,255,0.06);
    }

    .cw-hero {
      width: 100%;
      height: auto;
      border-radius: 12px;
      margin-bottom: 32px;
      opacity: 0.9;
    }

    .cw-content a { 
      color: #8b7cf6; 
      text-decoration: none; 
    }
    .cw-content a:hover { 
      color: #b49eff; 
      text-decoration: underline; 
    }

    .cw-content code {
      background: rgba(139, 92, 246, 0.1);
      padding: 0.15em 0.4em;
      border-radius: 4px;
      font-size: 0.9em;
      color: #c4b5fd;
    }

    .cw-content pre {
      background: rgba(0,0,0,0.4);
      border: 1px solid rgba(139, 92, 246, 0.15);
      border-radius: 12px;
      padding: 1.25em;
      overflow-x: auto;
      font-size: 0.88em;
      margin: 2em 0;
      line-height: 1.6;
    }

    .cw-content pre code { 
      background: none; 
      padding: 0; 
      color: #e0dffe; 
    }

    .cw-dropcap::first-letter {
      float: left;
      font-size: 3.5em;
      line-height: 0.85;
      margin-right: 10px;
      margin-top: 4px;
      font-weight: 700;
      color: #8b7cf6;
    }

    .cw-footer {
      margin-top: 64px;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.06);
      font-size: 0.82em;
      color: #5a5a65;
      text-align: center;
    }

    .cw-source {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .cw-favicon { 
      width: 14px; 
      height: 14px; 
      border-radius: 2px; 
      opacity: 0.6; 
    }

    @media (max-width: 700px) {
      .cw-content.columns-2 { column-count: 1; }
      .cw-layout { padding: 0 16px 60px; }
      .cw-title-main { font-size: 1.6em; }
    }
  `;
  shadow.appendChild(style);

  // Build overlay structure
  const overlay = document.createElement('div');
  overlay.className = 'cw-overlay';

  // Toolbar
  const toolbar = document.createElement('div');
  toolbar.className = 'cw-toolbar';
  toolbar.innerHTML = `
    <div class="cw-toolbar-left">
      <div class="cw-logo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        Filtered
      </div>
      <div class="cw-title">${escapeHtml(titleText)}</div>
    </div>
    <div class="cw-toolbar-right">
      <button class="cw-btn" id="cw-raw-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        </svg>
        Raw
      </button>
      <button class="cw-btn cw-btn-close" id="cw-close-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
        Close
      </button>
    </div>
  `;

  // Content area
  const content = document.createElement('div');
  content.className = 'cw-content';

  // Header and footer placeholders (layout will fill these)
  const headerPlaceholder = document.createElement('div');
  headerPlaceholder.className = 'cw-article-header';

  const footerPlaceholder = document.createElement('footer');
  footerPlaceholder.className = 'cw-footer';

  // Layout wrapper
  const layoutWrapper = document.createElement('div');
  layoutWrapper.className = 'cw-layout';
  layoutWrapper.appendChild(headerPlaceholder);
  layoutWrapper.appendChild(content);
  layoutWrapper.appendChild(footerPlaceholder);

  overlay.appendChild(toolbar);
  overlay.appendChild(layoutWrapper);
  shadow.appendChild(overlay);

  // Add to page
  document.body.appendChild(host);

  // Event listeners (on shadow elements)
  shadow.getElementById('cw-close-btn')?.addEventListener('click', () => {
    closeReader();
    options.onClose?.();
  });
  shadow.getElementById('cw-raw-btn')?.addEventListener('click', () => {
    closeReader();
    options.onClose?.();
  });

  // Render layout into shadow content area
  const renderArticle = article && article.title ? article : fallbackArticle();
  try {
    currentLayout.render(renderArticle, content, { font: currentFont, fontSize: currentFontSize });
  } catch (err) {
    console.error('[CalmWeb] Layout render failed:', err);
    renderFallback(content, renderArticle.title, renderArticle.content);
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
    <div class="cw-layout">
      <h1 class="cw-title-main">${escapeHtml(title)}</h1>
      ${paragraphs.map(p => `<p>${escapeHtml(p.trim())}</p>`).join('')}
    </div>
  `;
}

export function closeReader(): void {
  document.getElementById(HOST_ID)?.remove();
  document.body.style.removeProperty('overflow');
}

function escapeHtml(text: string): string {
  const span = document.createElement('span');
  span.textContent = text;
  return span.innerHTML;
}

export function isReaderOpen(): boolean {
  return !!document.getElementById(HOST_ID);
}

export function toggleReader(options?: ReaderOptions): void {
  if (isReaderOpen()) {
    closeReader();
  } else {
    openReader(options);
  }
}
