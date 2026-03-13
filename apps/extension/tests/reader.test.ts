import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor/article';
import { getLayout, allLayouts, newspaperLayout, terminalLayout } from '../src/renderer/layouts';
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

  it('should clean content by removing ads', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = `
      <article>
        <p>Main content here.</p>
        <div class="ad">Advertisement</div>
        <p>More content.</p>
      </article>
    `;
    
    const article = extractArticle(doc, 'https://example.com/article');
    expect(article.content).not.toContain('Advertisement');
    expect(article.content).toContain('Main content');
  });
});

describe('Layout Engine', () => {
  it('should return all layouts', () => {
    expect(allLayouts.length).toBe(5);
    expect(allLayouts.map(l => l.id)).toContain('newspaper');
    expect(allLayouts.map(l => l.id)).toContain('terminal');
    expect(allLayouts.map(l => l.id)).toContain('card');
    expect(allLayouts.map(l => l.id)).toContain('feed');
    expect(allLayouts.map(l => l.id)).toContain('magazine');
  });

  it('should get layout by id', () => {
    const layout = getLayout('newspaper');
    expect(layout.id).toBe('newspaper');
    expect(layout.name).toBe('Newspaper');
  });

  it('should return newspaper as default for unknown id', () => {
    const layout = getLayout('unknown');
    expect(layout.id).toBe('newspaper');
  });

  it('should have correct newspaper layout properties', () => {
    expect(newspaperLayout.columns).toBe(2);
    expect(newspaperLayout.fontFamily).toContain('Georgia');
  });

  it('should have correct terminal layout properties', () => {
    expect(terminalLayout.id).toBe('terminal');
    expect(terminalLayout.columns).toBe(1);
    expect(terminalLayout.fontFamily).toContain('monospace');
  });

  it('should have render method for each layout', () => {
    allLayouts.forEach(layout => {
      expect(typeof layout.render).toBe('function');
    });
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