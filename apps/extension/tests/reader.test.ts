import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor/article';
import { getLayout, allLayouts, newspaperLayout, terminalLayout, readerLayout, focusLayout, magazineLayout, minimalLayout } from '../src/renderer/layouts';
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
    
    const article = extractArticle(doc, 'https://example.com/article');
    expect(article.images.length).toBeGreaterThanOrEqual(1);
  });
});

describe('Layout Engine', () => {
  it('should return 10 layouts', () => {
    expect(allLayouts.length).toBe(10);
  });

  it('should contain all layout ids', () => {
    const ids = allLayouts.map(l => l.id);
    expect(ids).toContain('auto');
    expect(ids).toContain('reader');
    expect(ids).toContain('focus');
    expect(ids).toContain('terminal');
    expect(ids).toContain('compact');
    expect(ids).toContain('visual');
    expect(ids).toContain('academic');
    expect(ids).toContain('magazine');
    expect(ids).toContain('minimal');
    expect(ids).toContain('newspaper');
  });

  it('should get layout by id', () => {
    const layout = getLayout('reader');
    expect(layout.id).toBe('reader');
    expect(layout.name).toBe('Reader');
  });

  it('should return auto as default for unknown id', () => {
    const layout = getLayout('unknown');
    expect(layout.id).toBe('auto');
  });

  it('should have correct reader layout properties', () => {
    expect(readerLayout.columns).toBe(1);
    expect(readerLayout.fontFamily).toContain('Georgia');
    expect(readerLayout.bestFor).toContain('articles');
  });

  it('should have correct terminal layout properties', () => {
    expect(terminalLayout.id).toBe('terminal');
    expect(terminalLayout.columns).toBe(1);
    expect(terminalLayout.fontFamily).toContain('Mono');
    expect(terminalLayout.bestFor).toContain('code');
  });

  it('should have correct focus layout properties', () => {
    expect(focusLayout.id).toBe('focus');
    expect(focusLayout.columns).toBe(1);
    expect(focusLayout.bestFor).toContain('deep reading');
  });

  it('should have correct compact layout properties', () => {
    const compact = getLayout('compact');
    expect(compact.columns).toBe(2);
    expect(compact.bestFor).toContain('news');
  });

  it('should have correct visual layout properties', () => {
    const visual = getLayout('visual');
    expect(visual.bestFor).toContain('photo essays');
  });

  it('should have correct academic layout properties', () => {
    const academic = getLayout('academic');
    expect(academic.columns).toBe(2);
    expect(academic.bestFor).toContain('papers');
  });

  it('should have render method for each layout', () => {
    allLayouts.forEach(layout => {
      expect(typeof layout.render).toBe('function');
    });
  });

  it('should have bestFor array for each layout', () => {
    allLayouts.forEach(layout => {
      expect(Array.isArray(layout.bestFor)).toBe(true);
      expect(layout.bestFor.length).toBeGreaterThan(0);
    });
  });

  it('should have a real newspaperLayout', () => {
    expect(newspaperLayout.id).toBe('newspaper');
    expect(newspaperLayout.columns).toBe(3);
    expect(newspaperLayout.name).toBe('Newspaper');
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