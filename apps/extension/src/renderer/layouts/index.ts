/**
 * Layout Engine for CalmWeb Super Reader
 * 
 * Simply injects the extracted content into our premium dark UI.
 * Respects the original content structure - no forced single-column.
 */

import type { ExtractedArticle } from '../extractor';

export interface ReaderLayout {
  id: string;
  name: string;
  description: string;
  render: (article: ExtractedArticle, container: HTMLElement, options?: { font?: string; fontSize?: string }, extras?: { header?: HTMLElement; footer?: HTMLElement }) => void;
}

function escapeHtml(text: string): string {
  const span = document.createElement('span');
  span.textContent = text;
  return span.innerHTML;
}

export const defaultLayout: ReaderLayout = {
  id: 'default',
  name: 'Default',
  description: 'Preserves original content structure',
  render(article, container, _options = {}, extras = {}) {
    const headerEl = extras.header || container.closest('.cw-overlay')?.querySelector('.cw-article-header');
    const footerEl = extras.footer || container.closest('.cw-overlay')?.querySelector('.cw-footer');

    if (headerEl) {
      headerEl.innerHTML = `
        <h1 class="cw-title-main">${escapeHtml(article.title)}</h1>
        <div class="cw-meta">
          ${article.author ? `<span class="cw-meta-item">${escapeHtml(article.author)}</span>` : ''}
          ${article.author && article.date ? '<span class="cw-meta-sep"></span>' : ''}
          ${article.date ? `<span class="cw-meta-item">${escapeHtml(article.date)}</span>` : ''}
          ${article.source ? `<span class="cw-meta-sep"></span><span class="cw-meta-item">${escapeHtml(article.source)}</span>` : ''}
        </div>
      `;
    }

    if (footerEl) {
      footerEl.innerHTML = `
        <a href="${escapeHtml(article.url)}" class="cw-source" target="_blank" rel="noopener noreferrer">
          ${article.favicon ? `<img class="cw-favicon" src="${escapeHtml(article.favicon)}" alt="">` : ''}
          <span>View Original</span>
        </a>
      `;
    }

    container.innerHTML = `<article class="cw-content">${article.contentHtml.innerHTML}</article>`;
  },
};

export const allLayouts: ReaderLayout[] = [
  defaultLayout,
];

export function getLayout(_id: string): ReaderLayout {
  return defaultLayout;
}

export function autoDetectLayout(_article: ExtractedArticle): ReaderLayout {
  return defaultLayout;
}
