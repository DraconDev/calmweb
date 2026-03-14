/**
 * Layout Engine for CalmWeb Super Reader
 * 
 * 6 layouts covering all major reading use cases:
 * - Reader: Long-form articles
 * - Focus: Distraction-free deep reading  
 * - Terminal: Code and technical content
 * - Compact: News and quick reads
 * - Visual: Photo essays and image-rich content
 * - Academic: Papers and research
 */

import type { ExtractedArticle } from '../extractor';

export interface ReaderLayout {
  id: string;
  name: string;
  description: string;
  bestFor: string[];
  columns: number;
  maxWidth: string;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  render: (article: ExtractedArticle, container: HTMLElement) => void;
}

function escapeHtml(text: string): string {
  const span = document.createElement('span');
  span.textContent = text;
  return span.innerHTML;
}

const renderMeta = (article: ExtractedArticle): string => `
  <div class="reader-meta">
    ${article.author ? `<span class="reader-meta-item author">${escapeHtml(article.author)}</span>` : ''}
    ${article.date ? `<span class="reader-meta-item date">${article.date}</span>` : ''}
    <span class="reader-meta-item time">${article.readingTime} min read</span>
  </div>
`;

const renderFooter = (article: ExtractedArticle): string => `
  <footer class="reader-footer">
    <div class="reader-source">
      ${article.favicon ? `<img class="reader-favicon" src="${escapeHtml(article.favicon)}" alt="">` : ''}
      <span>${escapeHtml(article.source)}</span>
    </div>
  </footer>
`;

const baseTypography = `
  .reader-content p { margin: 0 0 1.5em; }
  .reader-content h2 { margin: 2em 0 0.75em; font-size: 1.5em; }
  .reader-content h3 { margin: 1.5em 0 0.5em; font-size: 1.25em; }
  .reader-content ul, .reader-content ol { margin: 0 0 1.5em; padding-left: 1.5em; }
  .reader-content li { margin: 0.25em 0; }
  .reader-content blockquote { 
    border-left: 3px solid #a78bfa; 
    padding-left: 1em; 
    margin: 1.5em 0; 
    font-style: italic; 
    color: #6b7280;
  }
  .reader-content img { 
    max-width: 100%; 
    height: auto; 
    border-radius: 8px; 
    margin: 1.5em 0; 
  }
  .reader-content a { color: #a78bfa; text-decoration: none; }
  .reader-content a:hover { text-decoration: underline; }
  .reader-content pre { 
    background: #1f2937; 
    color: #e5e7eb; 
    padding: 1em; 
    border-radius: 8px; 
    overflow-x: auto; 
    font-size: 0.9em;
    margin: 1.5em 0;
  }
  .reader-content code { 
    font-family: 'JetBrains Mono', 'Fira Code', monospace; 
    background: #f3f4f6; 
    padding: 2px 6px; 
    border-radius: 4px; 
    font-size: 0.9em;
  }
  .reader-content pre code { background: none; padding: 0; }
  
  .reader-meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; font-size: 0.9em; color: #6b7280; }
  .reader-meta-item { display: flex; align-items: center; gap: 4px; }
  .reader-meta-item::before { content: '·'; margin-right: 8px; }
  .reader-meta-item:first-child::before { display: none; }
  
  .reader-footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 0.85em; color: #9ca3af; }
  .reader-source { display: flex; align-items: center; justify-content: center; gap: 8px; }
  .reader-favicon { width: 16px; height: 16px; border-radius: 2px; }
  
  @media (prefers-color-scheme: dark) {
    .reader-content blockquote { color: #9ca3af; }
    .reader-content code { background: #374151; }
    .reader-footer { border-top-color: #374151; }
  }
`;

export const readerLayout: ReaderLayout = {
  id: 'reader',
  name: 'Reader',
  description: 'Optimized for long-form articles with elegant typography',
  bestFor: ['articles', 'essays', 'blog posts', 'newsletter'],
  columns: 1,
  maxWidth: '680px',
  fontFamily: 'Georgia, Charter, "Times New Roman", serif',
  fontSize: '19px',
  lineHeight: '1.75',
  render(article, container) {
    container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 48px 24px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1f2937;
        }
        .reader-header { margin-bottom: 40px; }
        .reader-title { 
          font-size: 2.25em; 
          font-weight: 700; 
          line-height: 1.2; 
          margin: 0 0 16px; 
          color: #111827; 
          letter-spacing: -0.02em;
        }
        .reader-content p:first-child::first-letter { 
          float: left; 
          font-size: 4em; 
          line-height: 0.8; 
          margin-right: 12px; 
          margin-top: 6px; 
          font-weight: 700; 
          color: #111827;
        }
        ${baseTypography}
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
          .reader-content p:first-child::first-letter { color: #f9fafb; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const focusLayout: ReaderLayout = {
  id: 'focus',
  name: 'Focus',
  description: 'Distraction-free reading with maximum concentration',
  bestFor: ['deep reading', 'learning', 'study material'],
  columns: 1,
  maxWidth: '600px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: '18px',
  lineHeight: '1.8',
  render(article, container) {
    container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 80px 24px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #374151;
          background: #fafafa;
        }
        .reader-header { margin-bottom: 48px; text-align: center; }
        .reader-title { 
          font-size: 1.75em; 
          font-weight: 600; 
          line-height: 1.3; 
          margin: 0 0 20px; 
          color: #111827; 
        }
        .reader-meta { justify-content: center; font-size: 0.85em; color: #9ca3af; }
        .reader-content { color: #374151; }
        .reader-content p { margin-bottom: 1.75em; }
        ${baseTypography}
        .reader-footer { text-align: center; border: none; margin-top: 80px; }
        @media (prefers-color-scheme: dark) {
          .reader-container { background: #0a0a0a; color: #d1d5db; }
          .reader-title { color: #f3f4f6; }
          .reader-content { color: #d1d5db; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const terminalLayout: ReaderLayout = {
  id: 'terminal',
  name: 'Terminal',
  description: 'Hacker-style for code and technical content',
  bestFor: ['code', 'documentation', 'tutorials', 'technical blogs'],
  columns: 1,
  maxWidth: '900px',
  fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", monospace',
  fontSize: '14px',
  lineHeight: '1.7',
  render(article, container) {
    container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 32px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #c9d1d9;
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 12px;
        }
        .reader-container::before { 
          content: '$ calmweb-reader'; 
          display: block; 
          color: #7ee787; 
          margin-bottom: 24px; 
          font-size: 12px;
          opacity: 0.8;
        }
        .reader-header { margin-bottom: 32px; padding-bottom: 16px; border-bottom: 1px solid #30363d; }
        .reader-title { 
          font-size: 1.5em; 
          font-weight: 600; 
          line-height: 1.3; 
          margin: 0 0 12px; 
          color: #58a6ff; 
        }
        .reader-meta { font-size: 0.85em; color: #8b949e; }
        .reader-meta-item::before { color: #58a6ff; }
        .reader-content { color: #c9d1d9; }
        .reader-content a { color: #58a6ff; }
        .reader-content code { background: #161b22; color: #7ee787; }
        .reader-content pre { background: #161b22; border: 1px solid #30363d; }
        .reader-content blockquote { border-left-color: #58a6ff; color: #8b949e; }
        ${baseTypography}
        .reader-footer { border-top-color: #30363d; color: #6e7681; }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const compactLayout: ReaderLayout = {
  id: 'compact',
  name: 'Compact',
  description: 'Dense layout for news and quick scanning',
  bestFor: ['news', 'updates', 'briefs', 'quick reads'],
  columns: 2,
  maxWidth: '800px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: '15px',
  lineHeight: '1.6',
  render(article, container) {
    container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 32px 24px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1f2937;
        }
        .reader-header { margin-bottom: 24px; }
        .reader-title { 
          font-size: 1.5em; 
          font-weight: 700; 
          line-height: 1.25; 
          margin: 0 0 8px; 
          color: #111827; 
        }
        .reader-meta { font-size: 0.8em; margin-bottom: 16px; }
        .reader-content { 
          column-count: 2; 
          column-gap: 32px; 
          column-rule: 1px solid #e5e7eb;
        }
        .reader-content p { margin-bottom: 1em; text-align: justify; }
        .reader-content h2, .reader-content h3, .reader-content blockquote, .reader-content pre { 
          column-span: all; 
        }
        ${baseTypography}
        .reader-footer { margin-top: 40px; }
        @media (max-width: 600px) {
          .reader-content { column-count: 1; }
        }
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
          .reader-content { column-rule-color: #374151; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const visualLayout: ReaderLayout = {
  id: 'visual',
  name: 'Visual',
  description: 'Image-forward layout for photo essays and visual stories',
  bestFor: ['photo essays', 'travel', 'lifestyle', 'portfolio'],
  columns: 1,
  maxWidth: '840px',
  fontFamily: 'Georgia, Charter, serif',
  fontSize: '18px',
  lineHeight: '1.75',
  render(article, container) {
    const heroImage = article.images[0];
    container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1f2937;
        }
        .reader-hero { 
          width: 100%; 
          height: 400px; 
          object-fit: cover; 
          margin-bottom: 40px;
        }
        .reader-hero-placeholder {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin-bottom: 40px;
        }
        .reader-inner { padding: 0 32px 48px; }
        .reader-header { margin-bottom: 32px; text-align: center; }
        .reader-title { 
          font-size: 2.5em; 
          font-weight: 400; 
          line-height: 1.2; 
          margin: 0 0 16px; 
          color: #111827; 
          letter-spacing: -0.02em;
        }
        .reader-meta { justify-content: center; }
        .reader-content { max-width: 640px; margin: 0 auto; }
        .reader-content img { 
          width: calc(100% + 100px); 
          max-width: none; 
          margin-left: -50px; 
          margin-right: -50px;
          border-radius: 12px;
        }
        ${baseTypography}
        .reader-footer { max-width: 640px; margin: 60px auto 0; }
        @media (max-width: 768px) {
          .reader-content img { width: 100%; margin-left: 0; margin-right: 0; }
        }
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
        }
      </style>
      <div class="reader-container">
        ${heroImage 
          ? `<img class="reader-hero" src="${heroImage.src}" alt="${heroImage.alt || ''}">` 
          : '<div class="reader-hero-placeholder"></div>'
        }
        <div class="reader-inner">
          <header class="reader-header">
            <h1 class="reader-title">${escapeHtml(article.title)}</h1>
            ${renderMeta(article)}
          </header>
          <article class="reader-content">${article.contentHtml.innerHTML}</article>
          ${renderFooter(article)}
        </div>
      </div>
    `;
  },
};

export const academicLayout: ReaderLayout = {
  id: 'academic',
  name: 'Academic',
  description: 'Formal two-column layout for papers and research',
  bestFor: ['papers', 'research', 'reports', 'documentation'],
  columns: 2,
  maxWidth: '900px',
  fontFamily: '"Source Serif Pro", Georgia, "Times New Roman", serif',
  fontSize: '15px',
  lineHeight: '1.65',
  render(article, container) {
    container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 40px 48px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1a1a1a;
          background: #fff;
        }
        .reader-header { 
          text-align: center; 
          margin-bottom: 40px; 
          padding-bottom: 24px; 
          border-bottom: 2px solid #1a1a1a;
        }
        .reader-title { 
          font-size: 1.75em; 
          font-weight: 700; 
          line-height: 1.3; 
          margin: 0 0 16px; 
          color: #000;
          text-transform: none;
          letter-spacing: 0;
        }
        .reader-meta { justify-content: center; font-size: 0.85em; color: #666; }
        .reader-meta-item.author { font-weight: 600; }
        .reader-content { 
          column-count: 2; 
          column-gap: 40px; 
          column-rule: 1px solid #ccc;
          text-align: justify;
          hyphens: auto;
        }
        .reader-content p { margin-bottom: 1em; text-indent: 1.5em; }
        .reader-content p:first-of-type { text-indent: 0; }
        .reader-content h2 { 
          column-span: all; 
          font-size: 1.25em; 
          margin: 1.5em 0 0.75em;
          padding-top: 0.5em;
          border-top: 1px solid #e5e5e5;
        }
        .reader-content h3 { column-span: all; font-size: 1.1em; margin: 1.25em 0 0.5em; }
        .reader-content blockquote { column-span: all; margin: 1em 0; font-size: 0.95em; }
        .reader-content pre { column-span: all; font-size: 0.85em; }
        .reader-content figure { column-span: all; margin: 1.5em 0; text-align: center; }
        .reader-content figcaption { font-size: 0.85em; color: #666; margin-top: 0.5em; }
        ${baseTypography}
        .reader-footer { 
          margin-top: 48px; 
          padding-top: 16px; 
          border-top: 1px solid #e5e5e5;
          column-span: all;
        }
        @media (max-width: 700px) {
          .reader-content { column-count: 1; }
        }
        @media (prefers-color-scheme: dark) {
          .reader-container { background: #0a0a0a; color: #d4d4d4; }
          .reader-header { border-bottom-color: #404040; }
          .reader-title { color: #f5f5f5; }
          .reader-content h2 { border-top-color: #333; }
          .reader-content { column-rule-color: #333; }
          .reader-footer { border-top-color: #333; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
  },
};

export const allLayouts: ReaderLayout[] = [
  readerLayout,
  focusLayout,
  terminalLayout,
  compactLayout,
  visualLayout,
  academicLayout,
];

export function getLayout(id: string): ReaderLayout {
  return allLayouts.find(l => l.id === id) || readerLayout;
}

export { readerLayout as newspaperLayout, terminalLayout };
