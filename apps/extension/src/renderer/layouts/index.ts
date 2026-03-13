/**
 * Layout Engine for CalmWeb Super Reader
 */

import type { ExtractedArticle } from '../extractor';

export interface ReaderLayout {
  id: string;
  name: string;
  description: string;
  columns: number;
  maxWidth: string;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  render: (article: ExtractedArticle, container: HTMLElement) => void;
}

const createBaseStyles = (layout: ReaderLayout): string => `
  .reader-container {
    max-width: ${layout.maxWidth};
    margin: 0 auto;
    padding: 40px 20px;
    font-family: ${layout.fontFamily};
    font-size: ${layout.fontSize};
    line-height: ${layout.lineHeight};
    color: #1f2937;
  }

  .reader-header {
    margin-bottom: 40px;
    text-align: center;
  }

  .reader-title {
    font-size: 2.5em;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 16px;
    color: #111827;
  }

  .reader-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-size: 0.9em;
    color: #6b7280;
    flex-wrap: wrap;
  }

  .reader-meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .reader-content {
    column-count: ${layout.columns};
    column-gap: 40px;
    column-rule: 1px solid #e5e7eb;
  }

  .reader-content p {
    margin: 0 0 1.5em;
    text-align: justify;
    hyphens: auto;
  }

  .reader-content h2, .reader-content h3 {
    column-span: all;
    margin: 2em 0 1em;
  }

  .reader-content img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1em 0;
  }

  .reader-content blockquote {
    column-span: all;
    border-left: 3px solid #3b82f6;
    padding-left: 1.5em;
    margin: 1.5em 0;
    font-style: italic;
    color: #4b5563;
  }

  .reader-content pre, .reader-content code {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    background: #f3f4f6;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .reader-content pre {
    column-span: all;
    padding: 1em;
    overflow-x: auto;
  }

  .reader-footer {
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid #e5e7eb;
    text-align: center;
    font-size: 0.85em;
    color: #9ca3af;
  }

  .reader-source {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .reader-favicon {
    width: 16px;
    height: 16px;
    border-radius: 2px;
  }

  @media (prefers-color-scheme: dark) {
    .reader-container {
      color: #e5e7eb;
    }

    .reader-title {
      color: #f9fafb;
    }

    .reader-meta {
      color: #9ca3af;
    }

    .reader-content {
      column-rule-color: #374151;
    }

    .reader-content blockquote {
      color: #9ca3af;
      border-left-color: #60a5fa;
    }

    .reader-content pre, .reader-content code {
      background: #1f2937;
    }

    .reader-footer {
      border-top-color: #374151;
      color: #6b7280;
    }
  }
`;

const renderHeader = (article: ExtractedArticle): string => `
  <header class="reader-header">
    <h1 class="reader-title">${escapeHtml(article.title)}</h1>
    <div class="reader-meta">
      ${article.author ? `<span class="reader-meta-item">By ${escapeHtml(article.author)}</span>` : ''}
      ${article.date ? `<span class="reader-meta-item">${article.date}</span>` : ''}
      <span class="reader-meta-item">${article.readingTime} min read</span>
    </div>
  </header>
`;

const renderFooter = (article: ExtractedArticle): string => `
  <footer class="reader-footer">
    <div class="reader-source">
      ${article.favicon ? `<img class="reader-favicon" src="${escapeHtml(article.favicon)}" alt="">` : ''}
      <span>${escapeHtml(article.source)}</span>
    </div>
  </footer>
`;

function escapeHtml(text: string): string {
  const span = document.createElement('span');
  span.textContent = text;
  return span.innerHTML;
}

export const newspaperLayout: ReaderLayout = {
  id: 'newspaper',
  name: 'Newspaper',
  description: 'Classic multi-column layout with serif font',
  columns: 2,
  maxWidth: '900px',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: '18px',
  lineHeight: '1.7',
  render(article, container) {
    container.innerHTML = `
      <style>${createBaseStyles(this)}</style>
      <div class="reader-container">
        ${renderHeader(article)}
        <article class="reader-content">
          ${article.contentHtml.innerHTML}
        </article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const terminalLayout: ReaderLayout = {
  id: 'terminal',
  name: 'Terminal',
  description: 'Hacker-style monospace dark theme',
  columns: 1,
  maxWidth: '800px',
  fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", monospace',
  fontSize: '14px',
  lineHeight: '1.6',
  render(article, container) {
    container.innerHTML = `
      <style>
        ${createBaseStyles(this)}
        .reader-container {
          background: #0d1117;
          color: #c9d1d9;
          border: 1px solid #30363d;
          border-radius: 8px;
          padding: 30px;
        }
        .reader-title {
          color: #58a6ff;
        }
        .reader-meta {
          color: #8b949e;
        }
        .reader-content {
          color: #c9d1d9;
        }
        .reader-content a {
          color: #58a6ff;
        }
        .reader-footer {
          border-top-color: #30363d;
          color: #6e7681;
        }
        .reader-container::before {
          content: '> calmweb-reader';
          display: block;
          color: #7ee787;
          margin-bottom: 20px;
          font-size: 12px;
        }
      </style>
      <div class="reader-container">
        ${renderHeader(article)}
        <article class="reader-content">
          ${article.contentHtml.innerHTML}
        </article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const cardLayout: ReaderLayout = {
  id: 'card',
  name: 'Card',
  description: 'Pinterest-style card layout with images',
  columns: 1,
  maxWidth: '680px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: '17px',
  lineHeight: '1.8',
  render(article, container) {
    const heroImage = article.images[0];
    container.innerHTML = `
      <style>
        ${createBaseStyles(this)}
        .reader-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          overflow: hidden;
          max-width: 680px;
        }
        .reader-hero {
          width: 100%;
          height: 300px;
          object-fit: cover;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .reader-inner {
          padding: 40px;
        }
        .reader-title {
          font-size: 2em;
        }
        .reader-content {
          column-count: 1;
        }
        @media (prefers-color-scheme: dark) {
          .reader-container {
            background: #1f2937;
          }
        }
      </style>
      <div class="reader-container">
        ${heroImage ? `<img class="reader-hero" src="${heroImage.src}" alt="${heroImage.alt}">` : ''}
        <div class="reader-inner">
          ${renderHeader(article)}
          <article class="reader-content">
            ${article.contentHtml.innerHTML}
          </article>
          ${renderFooter(article)}
        </div>
      </div>
    `;
  },
};

export const feedLayout: ReaderLayout = {
  id: 'feed',
  name: 'Feed',
  description: 'Twitter-like stream layout',
  columns: 1,
  maxWidth: '600px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: '16px',
  lineHeight: '1.6',
  render(article, container) {
    container.innerHTML = `
      <style>
        ${createBaseStyles(this)}
        .reader-container {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
        }
        .reader-header {
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 16px;
          margin-bottom: 16px;
        }
        .reader-title {
          font-size: 1.3em;
          margin-bottom: 8px;
        }
        .reader-meta {
          justify-content: flex-start;
          font-size: 0.85em;
        }
        .reader-content {
          column-count: 1;
          font-size: 0.95em;
        }
        .reader-content p {
          margin-bottom: 1em;
        }
        .reader-footer {
          margin-top: 20px;
          padding-top: 16px;
          text-align: left;
        }
        @media (prefers-color-scheme: dark) {
          .reader-container {
            background: #16181c;
            border-color: #38444d;
          }
          .reader-header, .reader-footer {
            border-color: #38444d;
          }
        }
      </style>
      <div class="reader-container">
        ${renderHeader(article)}
        <article class="reader-content">
          ${article.contentHtml.innerHTML}
        </article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const magazineLayout: ReaderLayout = {
  id: 'magazine',
  name: 'Magazine',
  description: 'Image-rich editorial style',
  columns: 1,
  maxWidth: '820px',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: '19px',
  lineHeight: '1.75',
  render(article, container) {
    container.innerHTML = `
      <style>
        ${createBaseStyles(this)}
        .reader-container {
          padding: 60px 40px;
        }
        .reader-title {
          font-size: 3em;
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .reader-meta {
          font-style: italic;
          font-size: 1em;
        }
        .reader-content {
          column-count: 1;
          max-width: 640px;
          margin: 0 auto;
        }
        .reader-content p:first-child::first-letter {
          float: left;
          font-size: 4em;
          line-height: 0.8;
          margin-right: 12px;
          margin-top: 4px;
          font-weight: 700;
          color: #111827;
        }
        .reader-content img {
          max-width: none;
          width: calc(100% + 180px);
          margin-left: -90px;
        }
        @media (prefers-color-scheme: dark) {
          .reader-content p:first-child::first-letter {
            color: #f9fafb;
          }
        }
      </style>
      <div class="reader-container">
        ${renderHeader(article)}
        <article class="reader-content">
          ${article.contentHtml.innerHTML}
        </article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const allLayouts: ReaderLayout[] = [
  newspaperLayout,
  terminalLayout,
  cardLayout,
  feedLayout,
  magazineLayout,
];

export function getLayout(id: string): ReaderLayout {
  return allLayouts.find((l) => l.id === id) || newspaperLayout;
}