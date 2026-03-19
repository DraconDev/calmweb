import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor/article';
import { getLayout, allLayouts, autoDetectLayout, adaptiveLayout } from '../src/renderer/layouts';
import { getTheme, allThemes, defaultTheme, darkTheme } from '../src/renderer/themes';

describe('Article Extractor', () => {
  it('should extract title from h1', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = `
      <h1>Test Article Title</h1>
      <article><p>This is the content of the article.</p></article>
    `;
    
    const article = extractArticle(doc, 'https://example.com/article');
    expect(article.title).toBe('Test Article Title');
  });

  it('should extract author from meta tag', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.head.innerHTML = `<meta name="author" content="John Doe">`;
    doc.body.innerHTML = `<article><p>Content here.</p></article>`;
    
    const article = extractArticle(doc, 'https://example.com/article');
    expect(article.author).toBe('John Doe');
  });

  it('should calculate reading time', () => {
    const doc = document.implementation.createHTMLDocument();
    const content = 'word '.repeat(400);
    doc.body.innerHTML = `<article><p>${content}</p></article>`;
    
    const article = extractArticle(doc, 'https://example.com/article');
    expect(article.readingTime).toBeGreaterThanOrEqual(1);
  });

  it('should extract source domain', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = `<article><p>Content</p></article>`;
    
    const article = extractArticle(doc, 'https://example.com/path/to/article');
    expect(article.source).toBe('example.com');
  });

  it('should extract images from content', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = `
      <article>
        <p>Content here.</p>
        <img src="https://example.com/image1.jpg" alt="Test image">
        <img src="https://example.com/avatar.png" alt="avatar">
      </article>
    `;
    
    const article = extractArticle(doc, 'https://example.com/article', 'full');
    expect(article.images.length).toBeGreaterThanOrEqual(1);
  });
});

describe('Layout Engine', () => {
  it('should return 1 adaptive layout', () => {
    expect(allLayouts.length).toBe(1);
    expect(allLayouts[0].id).toBe('adaptive');
  });

  it('should always return adaptive layout', () => {
    expect(getLayout('anything').id).toBe('adaptive');
    expect(getLayout('reader').id).toBe('adaptive');
    expect(getLayout('').id).toBe('adaptive');
  });

  it('autoDetectLayout should return adaptive', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = '<article><h1>Test</h1><p>Content here for testing layout detection with enough text.</p></article>';
    const article = extractArticle(doc, 'https://example.com');
    const layout = autoDetectLayout(article);
    expect(layout.id).toBe('adaptive');
  });

  it('should have render method', () => {
    expect(typeof adaptiveLayout.render).toBe('function');
  });

  it('should render without errors', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = '<article><h1>Test Article</h1><p>Some content here that is long enough to be extracted properly by the extractor function.</p></article>';
    const article = extractArticle(doc, 'https://example.com/test');
    const container = document.createElement('div');
    expect(() => adaptiveLayout.render(article, container)).not.toThrow();
    expect(container.innerHTML.length).toBeGreaterThan(100);
  });
});

describe('Theme Engine', () => {
  it('should return all themes', () => {
    expect(allThemes.length).toBe(4);
    expect(allThemes.map(t => t.id)).toContain('default');
    expect(allThemes.map(t => t.id)).toContain('dark');
    expect(allThemes.map(t => t.id)).toContain('sepia');
  });

  it('should get theme by id', () => {
    const theme = getTheme('dark');
    expect(theme.id).toBe('dark');
    expect(theme.isDark).toBe(true);
  });

  it('should return default theme for unknown id', () => {
    const theme = getTheme('unknown');
    expect(theme.id).toBe('default');
  });

  it('should have correct default theme colors', () => {
    expect(defaultTheme.background).toBe('#ffffff');
    expect(defaultTheme.isDark).toBe(false);
  });

  it('should have correct dark theme colors', () => {
    expect(darkTheme.background).toBe('#111827');
    expect(darkTheme.isDark).toBe(true);
  });

  it('should have accent color for all themes', () => {
    allThemes.forEach(theme => {
      expect(theme.accent).toBeTruthy();
      expect(theme.accent.startsWith('#')).toBe(true);
    });
  });
});