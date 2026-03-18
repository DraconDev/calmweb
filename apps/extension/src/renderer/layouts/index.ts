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
  .calm-layout {
    max-width: var(--lw);
    margin: 0 auto;
    padding: 0 32px 100px;
    font-family: var(--lf);
    font-size: var(--ls);
    line-height: var(--lh);
    color: #a1a1aa;
  }

  .calm-header {
    margin-bottom: 48px;
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .calm-header.centered { text-align: center; }

  .calm-title {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 20px;
    color: #e4e4e7;
    letter-spacing: -0.025em;
  }

  .calm-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    font-size: 0.82em;
    color: #3f3f46;
    font-weight: 500;
  }

  .calm-header.centered .calm-meta { justify-content: center; }

  .calm-meta-sep { color: #27272a; }

  .calm-content p { margin: 0 0 1.6em; }
  .calm-content p.centered { text-align: center; }

  .calm-content h2 {
    margin: 2.5em 0 0.8em;
    font-size: 1.35em;
    color: #d4d4d8;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .calm-content h3 {
    margin: 2em 0 0.6em;
    font-size: 1.15em;
    color: #d4d4d8;
    font-weight: 600;
  }

  .calm-content.columns-2 {
    column-count: 2;
    column-gap: 40px;
    column-rule: 1px solid rgba(255,255,255,0.04);
  }

  .calm-content.columns-2 h2,
  .calm-content.columns-2 h3,
  .calm-content.columns-2 blockquote,
  .calm-content.columns-2 pre,
  .calm-content.columns-2 figure {
    column-span: all;
  }

  .calm-content ul, .calm-content ol {
    margin: 0 0 1.6em;
    padding-left: 1.5em;
  }

  .calm-content li { margin: 0.3em 0; line-height: 1.7; }

  .calm-content blockquote {
    border-left: 2px solid rgba(139, 92, 246, 0.3);
    padding: 0.5em 0 0.5em 1.25em;
    margin: 2em 0;
    color: #52525b;
  }

  .calm-content blockquote p { margin-bottom: 0; }

  .calm-content img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2em 0;
    opacity: 0.85;
  }

  .calm-content a { color: #7c6aed; text-decoration: none; transition: color 0.15s; }
  .calm-content a:hover { color: #a78bfa; }

  .calm-content pre {
    background: rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.04);
    border-radius: 10px;
    padding: 1.25em;
    overflow-x: auto;
    font-size: 0.88em;
    margin: 2em 0;
    line-height: 1.6;
  }

  .calm-content code {
    font-family: 'JetBrains Mono', 'SF Mono', monospace;
    font-size: 0.88em;
    color: #a78bfa;
  }

  .calm-content pre code { color: #d4d4d8; }

  .calm-dropcap::first-letter {
    float: left;
    font-size: 3.5em;
    line-height: 0.85;
    margin-right: 10px;
    margin-top: 4px;
    font-weight: 700;
    color: #7c6aed;
  }

  .calm-caption {
    font-size: 0.85em;
    color: #3f3f46;
    font-style: italic;
    margin: 0.5em 0 1.5em;
  }

  .calm-footer {
    margin-top: 64px;
    padding-top: 24px;
    border-top: 1px solid rgba(255,255,255,0.04);
    font-size: 0.82em;
    color: #27272a;
    text-align: center;
  }

  .calm-source {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .calm-favicon { width: 14px; height: 14px; border-radius: 2px; opacity: 0.6; }
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
      contentHtml = contentHtml.replace(/<p>/, '<p class="calm-dropcap">');
    }

    // Center paragraphs for essay mode
    if (profile.centered) {
      contentHtml = contentHtml.replace(/<p>/g, '<p class="centered">');
    }

    container.innerHTML = `
      <style>
        ${DARK_CSS}
        @media (max-width: 700px) {
          .calm-content.columns-2 { column-count: 1; }
        }
      </style>
      <div class="calm-layout" style="max-width:${profile.maxWidth};font-family:${font};font-size:${fontSize};line-height:${lineHeight};">
        ${heroImage ? `<img class="calm-hero" src="${heroImage.src}" alt="${heroImage.alt || ''}" style="width:100%;height:auto;border-radius:12px;margin-bottom:32px;opacity:0.9;">` : ''}
        <header class="calm-header ${profile.centered ? 'centered' : ''}">
          <h1 class="calm-title">${escapeHtml(article.title)}</h1>
          <div class="calm-meta">
            ${article.author ? `<span>${escapeHtml(article.author)}</span>` : ''}
            ${(article.author && article.date) ? '<span class="calm-meta-sep">·</span>' : ''}
            ${article.date ? `<span>${article.date}</span>` : ''}
            <span class="calm-meta-sep">·</span>
            <span>${article.readingTime} min</span>
          </div>
        </header>
        <article class="calm-content ${profile.columns > 1 ? 'columns-2' : ''}">${contentHtml}</article>
        <footer class="calm-footer ${profile.centered ? 'centered' : ''}">
          <div class="calm-source">
            ${article.favicon ? `<img class="calm-favicon" src="${escapeHtml(article.favicon)}" alt="">` : ''}
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
