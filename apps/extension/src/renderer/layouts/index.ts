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
    padding: 48px 24px 80px;
    font-family: var(--lf);
    font-size: var(--ls);
    line-height: var(--lh);
    color: #d4d4d8;
  }

  .calm-header {
    margin-bottom: 40px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(139, 92, 246, 0.12);
  }

  .calm-header.centered { text-align: center; }

  .calm-title {
    font-size: 2.25em;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 16px;
    color: #f4f4f5;
    letter-spacing: -0.02em;
  }

  .calm-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    font-size: 0.85em;
    color: #52525b;
  }

  .calm-header.centered .calm-meta { justify-content: center; }

  .calm-meta-item::before { content: '·'; margin-right: 8px; }
  .calm-meta-item:first-child::before { display: none; }

  .calm-content {
    color: #a1a1aa;
  }

  .calm-content.columns-2 {
    column-count: 2;
    column-gap: 32px;
    column-rule: 1px solid rgba(139, 92, 246, 0.08);
  }

  .calm-content p { margin: 0 0 1.5em; }
  .calm-content p.centered { text-align: center; }

  .calm-content h2 {
    margin: 2em 0 0.75em;
    font-size: 1.5em;
    color: #e4e4e7;
    font-weight: 700;
  }

  .calm-content h3 {
    margin: 1.5em 0 0.5em;
    font-size: 1.25em;
    color: #e4e4e7;
    font-weight: 600;
  }

  .calm-content.columns-2 h2,
  .calm-content.columns-2 h3,
  .calm-content.columns-2 blockquote,
  .calm-content.columns-2 pre,
  .calm-content.columns-2 figure {
    column-span: all;
  }

  .calm-content ul, .calm-content ol {
    margin: 0 0 1.5em;
    padding-left: 1.5em;
  }

  .calm-content li { margin: 0.25em 0; }

  .calm-content blockquote {
    border-left: 3px solid #8b5cf6;
    padding-left: 1em;
    margin: 1.5em 0;
    font-style: italic;
    color: #71717a;
  }

  .calm-content img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5em 0;
    opacity: 0.9;
  }

  .calm-content a { color: #a78bfa; text-decoration: none; }
  .calm-content a:hover { text-decoration: underline; color: #c4b5fd; }

  .calm-content pre {
    background: #0f0f14;
    border: 1px solid rgba(139, 92, 246, 0.1);
    color: #e4e4e7;
    padding: 1em;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 0.9em;
    margin: 1.5em 0;
  }

  .calm-content code {
    font-family: 'JetBrains Mono', monospace;
    background: rgba(139, 92, 246, 0.08);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #a78bfa;
  }

  .calm-content pre code { background: none; padding: 0; color: inherit; }

  .calm-dropcap::first-letter {
    float: left;
    font-size: 4em;
    line-height: 0.8;
    margin-right: 12px;
    margin-top: 6px;
    font-weight: 700;
    color: #8b5cf6;
  }

  .calm-caption {
    font-size: 0.85em;
    color: #52525b;
    font-style: italic;
    margin: 0.5em 0 1.5em;
  }

  .calm-footer {
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid rgba(139, 92, 246, 0.1);
    font-size: 0.85em;
    color: #3f3f46;
    text-align: center;
  }

  .calm-footer.centered { text-align: center; }

  .calm-source {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .calm-favicon { width: 16px; height: 16px; border-radius: 2px; }
`;

// ============================================================================
// The One Layout
// ============================================================================

export const adaptiveLayout: ReaderLayout = {
  id: 'adaptive',
  name: 'Adaptive',
  description: 'Automatically adjusts to page content',
  render(article, container) {
    const profile = analyzeContent(article);
    const heroImage = article.images?.[0];

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
        .calm-layout {
          --lw: ${profile.maxWidth};
          --lf: ${profile.fontFamily};
          --ls: ${profile.fontSize};
          --lh: ${profile.lineHeight};
        }
        ${DARK_CSS}
        @media (max-width: 700px) {
          .calm-content.columns-2 { column-count: 1; }
        }
      </style>
      <div class="calm-layout">
        ${heroImage ? `<img class="calm-hero" src="${heroImage.src}" alt="${heroImage.alt || ''}" style="width:100%;height:auto;border-radius:12px;margin-bottom:32px;opacity:0.9;">` : ''}
        <header class="calm-header ${profile.centered ? 'centered' : ''}">
          <h1 class="calm-title">${escapeHtml(article.title)}</h1>
          <div class="calm-meta">
            ${article.author ? `<span class="calm-meta-item">${escapeHtml(article.author)}</span>` : ''}
            ${article.date ? `<span class="calm-meta-item">${article.date}</span>` : ''}
            <span class="calm-meta-item">${article.readingTime} min read</span>
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
