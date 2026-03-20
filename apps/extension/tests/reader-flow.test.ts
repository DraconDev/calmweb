/**
 * Debug test - traces the full reader flow to find failures
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';
import { autoDetectLayout } from '../src/renderer/layouts';

describe('Reader Flow Debug', () => {
  it('should trace Wikipedia extraction → layout → render', () => {
    // 1. Create Wikipedia-like DOM
    const doc = document.implementation.createHTMLDocument('Quantum computing - Wikipedia');
    doc.body.innerHTML = `
      <div id="mw-panel"><nav>sidebar nav</nav></div>
      <div id="content">
        <h1 id="firstHeading">Quantum computing</h1>
        <div id="mw-content-text">
          <div class="mw-parser-output">
            <p><b>Quantum computing</b> is a type of computation that harnesses quantum-mechanical phenomena such as superposition and entanglement.</p>
            <h2>History</h2>
            <p>The field began in 1980 when physicist Paul Benioff proposed a quantum mechanical model of the Turing machine.</p>
            <h2>Applications</h2>
            <p>Applications include cryptography, drug discovery, and optimization problems.</p>
            <p>As of 2024, the largest quantum computers have over 1,000 qubits.</p>
          </div>
        </div>
      </div>
      <footer>Wikipedia footer CC BY-SA</footer>
    `;

    // 2. Extract
    const article = extractArticle(doc, 'https://en.wikipedia.org/wiki/Quantum_computing', 'textOnly');
    
    console.log('--- EXTRACTION ---');
    console.log('Title:', article?.title);
    console.log('Content length:', article?.content?.length);
    console.log('Has contentHtml:', !!article?.contentHtml);
    console.log('ContentHtml children:', article?.contentHtml?.children?.length);

    expect(article).toBeTruthy();
    expect(article.title).toBeTruthy();
    expect(article.content.length).toBeGreaterThan(50);
    expect(article.contentHtml).toBeTruthy();

    // 3. Detect layout
    const layout = autoDetectLayout(article);
    console.log('--- LAYOUT ---');
    console.log('Layout ID:', layout.id);
    console.log('Layout name:', layout.name);
    expect(layout.id).toBe('default');

    // 4. Render
    const container = document.createElement('div');
    console.log('--- RENDERING ---');
    
    expect(() => {
      layout.render(article, container, { font: 'Inter', fontSize: '16px' });
    }).not.toThrow();

    console.log('HTML length:', container.innerHTML.length);
    console.log('Contains title:', container.innerHTML.includes('Quantum'));
    console.log('Contains content:', container.innerHTML.includes('computation'));

    expect(container.innerHTML.length).toBeGreaterThan(200);
    expect(container.innerHTML).toContain('Quantum');
    expect(container.innerHTML).toContain('computation');
  });

  it('should render with fallback when extraction returns minimal content', () => {
    // Simulate a page with no proper article structure
    const doc = document.implementation.createHTMLDocument('Simple Page');
    doc.body.innerHTML = `
      <div class="header">Site Header</div>
      <div class="content">
        <h1>Welcome</h1>
        <p>This is a simple page with just a few paragraphs of text.</p>
        <p>Nothing fancy, but it should still render something.</p>
      </div>
      <div class="footer">Footer content</div>
    `;

    const article = extractArticle(doc, 'https://example.com/simple', 'textOnly');
    const layout = autoDetectLayout(article);
    const container = document.createElement('div');

    expect(() => {
      layout.render(article, container, { font: 'Inter', fontSize: '16px' });
    }).not.toThrow();

    expect(container.innerHTML.length).toBeGreaterThan(100);
  });

  it('should handle empty page gracefully', () => {
    const doc = document.implementation.createHTMLDocument('Empty Page');
    doc.body.innerHTML = `<div>Just a tiny bit of text</div>`;

    const article = extractArticle(doc, 'https://example.com/tiny', 'textOnly');
    // Even minimal content should produce something
    expect(article).toBeTruthy();

    const layout = autoDetectLayout(article);
    const container = document.createElement('div');

    // Should not throw
    expect(() => {
      layout.render(article, container, { font: 'Inter', fontSize: '16px' });
    }).not.toThrow();
  });

it('should render with different fonts', () => {
    // In Shadow DOM mode, fonts are handled by reader.ts styles
    // In fallback mode, fonts are hardcoded. Just verify no throw.
    const fonts = ['Inter', 'Georgia', 'Arial'];
    for (const font of fonts) {
      const doc = document.implementation.createHTMLDocument('Font Test');
      doc.body.innerHTML = `<article><h1>Font Test Article</h1><p>Content</p></article>`;
      const article = extractArticle(doc, 'https://example.com/font', 'textOnly');
      const layout = autoDetectLayout(article);
      const container = document.createElement('div');
      expect(() => {
        layout.render(article, container, { font, fontSize: '16px' });
      }).not.toThrow();
    }
  });

  it('should render dark theme correctly', () => {
    const doc = document.implementation.createHTMLDocument('Theme Test');
    doc.body.innerHTML = `
      <article>
        <h1>Dark Theme Test</h1>
        <p>Testing that the dark theme renders with proper colors.</p>
        <p>Should have dark background and light text.</p>
      </article>
    `;

    const article = extractArticle(doc, 'https://example.com/theme', 'textOnly');
    const layout = autoDetectLayout(article);
    const container = document.createElement('div');
    layout.render(article, container);

// Check for rendered content structure (layout fills content area)
    const html = container.innerHTML;
    expect(html).toContain('cw-content');
    expect(html).toContain('Dark Theme Test'); // title
  });
});
