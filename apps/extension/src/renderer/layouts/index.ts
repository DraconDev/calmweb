/**
 * Adaptive Layout Engine for CalmWeb
 *
 * ONE layout that adapts its presentation based on page content.
 * Analyzes the article and adjusts columns, spacing, typography accordingly.
 */

import type { ExtractedArticle } from '../extractor';

export interface ReaderLayout {
  id: string;
  name: string;
  description: string;
  render: (article: ExtractedArticle, container: HTMLElement, options?: { font?: string; fontSize?: string }) => void;
}

function escapeHtml(text: string): string {
  const span = document.createElement('span');
  span.textContent = text;
  return span.innerHTML;
}

// ============================================================================
// Content Analysis
// ============================================================================

interface ContentProfile {
  type: 'article' | 'code' | 'news' | 'docs' | 'essay';
  columns: number;
  maxWidth: string;
  dropcap: boolean;
  centered: boolean;
}

function analyzeContent(article: ExtractedArticle): ContentProfile {
  const html = article.contentHtml;
  const codeBlocks = html.querySelectorAll('pre, code').length;
  const paragraphs = html.querySelectorAll('p').length;
  const headings = html.querySelectorAll('h1,h2,h3').length;

  // Code-heavy → wider
  if (codeBlocks >= 3) {
    return { type: 'code', columns: 1, maxWidth: '900px', dropcap: false, centered: false };
  }

  // Short news → compact columns
  if (article.readingTime <= 3 && paragraphs <= 6) {
    return { type: 'news', columns: 2, maxWidth: '800px', dropcap: false, centered: false };
  }

  // Long academic → 2 columns
  if (article.readingTime >= 8 && headings >= 3) {
    return { type: 'docs', columns: 2, maxWidth: '900px', dropcap: false, centered: false };
  }

  // Very long → centered
  if (article.readingTime >= 12) {
    return { type: 'essay', columns: 1, maxWidth: '640px', dropcap: false, centered: true };
  }

  // Default article → elegant with dropcap
  return { type: 'article', columns: 1, maxWidth: '700px', dropcap: true, centered: false };
}

// ============================================================================
// Dark Theme CSS (shared across all presentations)
// ============================================================================

const DARK_CSS = `
  #calmweb-reader-overlay * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  #calmweb-reader-overlay .cw-layout {
    margin: 0 auto !important;
    padding: 0 32px 100px !important;
    color: #c9c9d0 !important;
    line-height: 1.8 !important;
    max-width: 800px;
  }

  #calmweb-reader-overlay .cw-header {
    margin-bottom: 48px !important;
    padding-bottom: 32px !important;
    border-bottom: 1px solid rgba(255,255,255,0.06) !important;
  }

  #calmweb-reader-overlay .cw-header.cw-centered { text-align: center !important; }

  #calmweb-reader-overlay .cw-title {
    font-size: 2.2em !important;
    font-weight: 700 !important;
    line-height: 1.2 !important;
    margin: 0 0 20px !important;
    color: #f0f0f5 !important;
    letter-spacing: -0.03em !important;
  }

  #calmweb-reader-overlay .cw-meta {
    display: flex !important;
    align-items: center !important;
    gap: 16px !important;
    flex-wrap: wrap !important;
    font-size: 0.85em !important;
    color: #7a7a85 !important;
    font-weight: 500 !important;
  }

  #calmweb-reader-overlay .cw-header.cw-centered .cw-meta { justify-content: center !important; }

  #calmweb-reader-overlay .cw-meta-sep { color: #4a4a55 !important; }

  #calmweb-reader-overlay .cw-content p { 
    margin: 0 0 1.5em !important; 
    color: #c9c9d0 !important; 
    line-height: 1.85 !important;
    font-size: 1.05em !important;
  }
  #calmweb-reader-overlay .cw-content p.cw-centered { text-align: center !important; }

  #calmweb-reader-overlay .cw-content h2 {
    margin: 2.5em 0 0.8em !important;
    font-size: 1.5em !important;
    color: #e8e8f0 !important;
    font-weight: 600 !important;
    letter-spacing: -0.02em !important;
    padding-bottom: 0.3em !important;
    border-bottom: 1px solid rgba(139, 92, 246, 0.2) !important;
  }

  #calmweb-reader-overlay .cw-content h3 {
    margin: 2em 0 0.6em !important;
    font-size: 1.2em !important;
    color: #d8d8e0 !important;
    font-weight: 600 !important;
  }

  #calmweb-reader-overlay .cw-content h4 {
    margin: 1.5em 0 0.5em !important;
    font-size: 1.05em !important;
    color: #c0c0c8 !important;
    font-weight: 600 !important;
  }

  #calmweb-reader-overlay .cw-content.cw-columns-2 {
    column-count: 2 !important;
    column-gap: 48px !important;
    column-rule: 1px solid rgba(255,255,255,0.06) !important;
  }

  #calmweb-reader-overlay .cw-content.cw-columns-2 h2,
  #calmweb-reader-overlay .cw-content.cw-columns-2 h3,
  #calmweb-reader-overlay .cw-content.cw-columns-2 blockquote,
  #calmweb-reader-overlay .cw-content.cw-columns-2 pre,
  #calmweb-reader-overlay .cw-content.cw-columns-2 figure {
    column-span: all !important;
  }

  #calmweb-reader-overlay .cw-content ul, 
  #calmweb-reader-overlay .cw-content ol {
    margin: 0 0 1.5em !important;
    padding-left: 1.8em !important;
  }

  #calmweb-reader-overlay .cw-content li { 
    margin: 0.4em 0 !important; 
    line-height: 1.75 !important;
    color: #c9c9d0 !important;
  }

  #calmweb-reader-overlay .cw-content blockquote {
    border-left: 3px solid #7c6aed !important;
    padding: 0.75em 0 0.75em 1.5em !important;
    margin: 2em 0 !important;
    color: #9090a0 !important;
    font-style: italic !important;
    background: rgba(124, 106, 237, 0.05) !important;
    border-radius: 0 8px 8px 0 !important;
  }

  #calmweb-reader-overlay .cw-content blockquote p { margin-bottom: 0 !important; color: #9090a0 !important; }

  #calmweb-reader-overlay .cw-content img {
    max-width: 100% !important;
    height: auto !important;
    border-radius: 12px !important;
    margin: 2em 0 !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
  }

  #calmweb-reader-overlay .cw-content a { 
    color: #8b7cf6 !important; 
    text-decoration: none !important; 
    transition: color 0.15s !important; 
  }
  #calmweb-reader-overlay .cw-content a:hover { 
    color: #b49eff !important; 
    text-decoration: underline !important; 
  }

  #calmweb-reader-overlay .cw-content code {
    background: rgba(139, 92, 246, 0.1) !important;
    padding: 0.15em 0.4em !important;
    border-radius: 4px !important;
    font-size: 0.9em !important;
    color: #c4b5fd !important;
  }

  #calmweb-reader-overlay .cw-content pre {
    background: rgba(0,0,0,0.4) !important;
    border: 1px solid rgba(139, 92, 246, 0.15) !important;
    border-radius: 12px !important;
    padding: 1.25em !important;
    overflow-x: auto !important;
    font-size: 0.88em !important;
    margin: 2em 0 !important;
    line-height: 1.6 !important;
  }

  #calmweb-reader-overlay .cw-content pre code { 
    background: none !important; 
    padding: 0 !important; 
    color: #e0dffe !important; 
  }

  #calmweb-reader-overlay .cw-dropcap::first-letter {
    float: left !important;
    font-size: 3.5em !important;
    line-height: 0.85 !important;
    margin-right: 10px !important;
    margin-top: 4px !important;
    font-weight: 700 !important;
    color: #8b7cf6 !important;
  }

  #calmweb-reader-overlay .cw-caption {
    font-size: 0.85em !important;
    color: #6a6a75 !important;
    font-style: italic !important;
    margin: 0.5em 0 1.5em !important;
  }

  #calmweb-reader-overlay .cw-footer {
    margin-top: 64px !important;
    padding-top: 24px !important;
    border-top: 1px solid rgba(255,255,255,0.06) !important;
    font-size: 0.82em !important;
    color: #5a5a65 !important;
    text-align: center !important;
  }

  #calmweb-reader-overlay .cw-source {
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
  }

  #calmweb-reader-overlay .cw-favicon { 
    width: 14px !important; 
    height: 14px !important; 
    border-radius: 2px !important; 
    opacity: 0.6 !important; 
  }
  
  #calmweb-reader-overlay .cw-content span,
  #calmweb-reader-overlay .cw-content i,
  #calmweb-reader-overlay .cw-content em,
  #calmweb-reader-overlay .cw-content b,
  #calmweb-reader-overlay .cw-content strong {
    color: inherit !important;
  }
`;

// ============================================================================
// The One Layout
// ============================================================================

export const adaptiveLayout: ReaderLayout = {
  id: 'adaptive',
  name: 'Adaptive',
  description: 'Automatically adjusts to page content',
  render(article, container, options = {}) {
    const profile = analyzeContent(article);
    const heroImage = article.images?.[0];

    const font = options.font || 'Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    const fontSize = options.fontSize || '17px';
    const lineHeight = '1.75';

    // Build content HTML
    let contentHtml = article.contentHtml.innerHTML;

    // Wrap first <p> with dropcap class if appropriate
    if (profile.dropcap) {
      contentHtml = contentHtml.replace(/<p>/, '<p class="cw-dropcap">');
    }

    // Center paragraphs for essay mode
    if (profile.centered) {
      contentHtml = contentHtml.replace(/<p>/g, '<p class="cw-centered">');
    }

    container.innerHTML = `
      <style>${DARK_CSS}</style>
      <div class="cw-layout" style="max-width:${profile.maxWidth};font-family:${font};font-size:${fontSize};line-height:${lineHeight};">
        ${heroImage ? `<img class="cw-hero" src="${heroImage.src}" alt="${heroImage.alt || ''}" style="width:100%;height:auto;border-radius:12px;margin-bottom:32px;opacity:0.9;">` : ''}
        <header class="cw-header ${profile.centered ? 'cw-centered' : ''}">
          <h1 class="cw-title">${escapeHtml(article.title)}</h1>
          <div class="cw-meta">
            ${article.author ? `<span>${escapeHtml(article.author)}</span>` : ''}
            ${(article.author && article.date) ? '<span class="cw-meta-sep">·</span>' : ''}
            ${article.date ? `<span>${article.date}</span>` : ''}
            <span class="cw-meta-sep">·</span>
            <span>${article.readingTime} min</span>
          </div>
        </header>
        <article class="cw-content ${profile.columns > 1 ? 'cw-columns-2' : ''}">${contentHtml}</article>
        <footer class="cw-footer ${profile.centered ? 'cw-centered' : ''}">
          <div class="cw-source">
            ${article.favicon ? `<img class="cw-favicon" src="${escapeHtml(article.favicon)}" alt="">` : ''}
            <span>${escapeHtml(article.source)}</span>
          </div>
        </footer>
      </div>
    `;
  },
};

// ============================================================================
// Layout list (kept for compatibility, but only one real layout)
// ============================================================================

export const allLayouts: ReaderLayout[] = [
  adaptiveLayout,
];

export function getLayout(_id: string): ReaderLayout {
  return adaptiveLayout;
}

export function autoDetectLayout(_article: ExtractedArticle): ReaderLayout {
  return adaptiveLayout;
}
