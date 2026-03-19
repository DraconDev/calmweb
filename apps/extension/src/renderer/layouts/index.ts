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
// The One Layout
// ============================================================================

export const adaptiveLayout: ReaderLayout = {
  id: 'adaptive',
  name: 'Adaptive',
  description: 'Automatically adjusts to page content',
  render(article, container, options = {}) {
    const profile = analyzeContent(article);
    const heroImage = article.images?.[0];

    options.font; // unused - styles are in shadow DOM
    options.fontSize; // unused

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

    // Update layout max-width based on profile
    const layout = container.closest('.cw-overlay')?.querySelector('.cw-layout') as HTMLElement;
    if (layout) {
      layout.style.maxWidth = profile.maxWidth;
    }

    // Update header with article info
    const header = container.closest('.cw-overlay')?.querySelector('.cw-article-header');
    if (header) {
      header.innerHTML = `
        <h1 class="cw-title-main">${escapeHtml(article.title)}</h1>
        <div class="cw-meta">
          ${article.author ? `<span>${escapeHtml(article.author)}</span>` : ''}
          ${(article.author && article.date) ? '<span class="cw-meta-sep">·</span>' : ''}
          ${article.date ? `<span>${article.date}</span>` : ''}
          <span class="cw-meta-sep">·</span>
          <span>${article.readingTime} min</span>
        </div>
      `;
    }

    // Update footer with source info
    const footer = container.closest('.cw-overlay')?.querySelector('.cw-footer');
    if (footer) {
      footer.innerHTML = `
        <div class="cw-source">
          ${article.favicon ? `<img class="cw-favicon" src="${escapeHtml(article.favicon)}" alt="">` : ''}
          <span>${escapeHtml(article.source)}</span>
        </div>
      `;
    }

    // Set content with optional columns
    container.innerHTML = `
      ${heroImage ? `<img class="cw-hero" src="${heroImage.src}" alt="${heroImage.alt || ''}">` : ''}
      <article class="cw-content ${profile.columns > 1 ? 'cw-columns-2' : ''}">${contentHtml}</article>
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
