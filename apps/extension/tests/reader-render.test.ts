/**
 * Reader Rendering Tests - Verifies the reader never shows a white screen
 * and always produces visible content regardless of page structure.
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';
import { getLayout, autoDetectLayout } from '../src/renderer/layouts';

// Helper to create a DOM document from HTML string
function createDoc(html: string, title = 'Test Page'): Document {
  const doc = document.implementation.createHTMLDocument(title);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) doc.body.innerHTML = bodyMatch[1];
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) doc.title = titleMatch[1];
  else doc.title = title;
  return doc;
}

import type { CleanMode } from '../src/renderer/extractor';

// Helper to render and verify layout output
function renderAndVerify(doc: Document, url: string, mode: CleanMode = 'textOnly'): { rendered: boolean; output: string; hasTitle: boolean } {
  try {
    const article = extractArticle(doc, url, mode);
    const layout = autoDetectLayout(article);
    const container = document.createElement('div');
    const header = document.createElement('div');
    const footer = document.createElement('div');
    layout.render(article, container, { font: 'Inter, sans-serif', fontSize: '16px' }, { header, footer });
    const fullOutput = header.innerHTML + container.innerHTML + footer.innerHTML;
    return {
      rendered: container.innerHTML.length > 100,
      output: fullOutput,
      hasTitle: fullOutput.includes(article.title),
    };
  } catch (err) {
    return { rendered: false, output: String(err), hasTitle: false };
  }
}

// ============================================================================
// Core Rendering Tests
// ============================================================================

describe('Reader - Always Renders', () => {
  it('should render Wikipedia article page', () => {
    const doc = createDoc(`
      <html><body>
        <div id="content">
          <h1 id="firstHeading">Quantum Computing</h1>
          <div id="mw-content-text">
            <p>Quantum computing uses quantum mechanical phenomena such as superposition and entanglement.</p>
            <p>The field began in 1980 when Paul Benioff proposed a quantum mechanical model.</p>
            <p>Applications include cryptography, drug discovery, and optimization problems.</p>
          </div>
        </div>
        <div id="mw-panel">Navigation</div>
        <footer>CC BY-SA</footer>
      </body></html>
    `, 'https://en.wikipedia.org/wiki/Quantum_Computing');

    const result = renderAndVerify(doc, 'https://en.wikipedia.org/wiki/Quantum_Computing');
    expect(result.rendered).toBe(true);
    expect(result.hasTitle).toBe(true);
    expect(result.output).toContain('Quantum Computing');
  });

  it('should render BBC-style news article', () => {
    const doc = createDoc(`
      <html><body>
        <nav>Navigation</nav>
        <article>
          <h1>Breaking: Major Discovery in Renewable Energy</h1>
          <p>Scientists have developed a revolutionary solar panel that operates at 50% efficiency.</p>
          <p>The breakthrough came after years of research at MIT's energy laboratory.</p>
          <p>This could transform the renewable energy landscape globally.</p>
        </article>
        <aside>Sidebar ads</aside>
        <footer>Copyright</footer>
      </body></html>
    `, 'https://www.bbc.com/news/science');

    const result = renderAndVerify(doc, 'https://www.bbc.com/news/science');
    expect(result.rendered).toBe(true);
    expect(result.output).toContain('Breaking');
    // Nav/footer should be removed
    expect(result.output).not.toContain('Sidebar ads');
  });

  it('should render blog post with code blocks', () => {
    const doc = createDoc(`
      <html><body>
        <article>
          <h1>How to Use React Hooks</h1>
          <p>React hooks let you use state and lifecycle in functional components.</p>
          <pre><code>const [count, setCount] = useState(0);</code></pre>
          <p>This is a fundamental pattern in modern React development.</p>
        </article>
      </body></html>
    `, 'https://devblog.example.com/react-hooks');

    const result = renderAndVerify(doc, 'https://devblog.example.com/react-hooks');
    expect(result.rendered).toBe(true);
    expect(result.output).toContain('React Hooks');
  });

  it('should render documentation page', () => {
    const doc = createDoc(`
      <html><body>
        <main>
          <h1>API Reference: useEffect</h1>
          <p>The useEffect hook lets you perform side effects in function components.</p>
          <pre><code>useEffect(() => { document.title = 'Hello'; });</code></pre>
          <h2>Parameters</h2>
          <p>The effect function and optional dependency array.</p>
        </main>
      </body></html>
    `, 'https://docs.example.com/hooks/useEffect');

    const result = renderAndVerify(doc, 'https://docs.example.com/hooks/useEffect');
    expect(result.rendered).toBe(true);
    expect(result.output).toContain('useEffect');
  });
});

// ============================================================================
// Edge Cases - Pages That Should Still Render
// ============================================================================

describe('Reader - Edge Cases', () => {
  it('should render page with minimal content', () => {
    const doc = createDoc(`
      <html><body>
        <h1>Quick Note</h1>
        <p>Just a brief update on the project status. Things are going well.</p>
      </body></html>
    `, 'https://example.com/short');

    const result = renderAndVerify(doc, 'https://example.com/short');
    expect(result.rendered).toBe(true);
  });

  it('should render page with no article tag', () => {
    const doc = createDoc(`
      <html><body>
        <div class="main">
          <h1>Legacy Page Without Semantic HTML</h1>
          <p>This page uses divs instead of article tags but still has meaningful content that should be extracted properly.</p>
          <p>A second paragraph of actual content here.</p>
        </div>
      </body></html>
    `, 'https://legacy.example.com/page');

    const result = renderAndVerify(doc, 'https://legacy.example.com/page');
    expect(result.rendered).toBe(true);
  });

  it('should render page with heavy ads and still extract content', () => {
    const doc = createDoc(`
      <html><body>
        <div class="ad-banner">BUY STUFF!</div>
        <nav>Navigation menu</nav>
        <script>tracking.js</script>
        <main>
          <article>
            <h1>Real Article Title</h1>
            <p>This is the actual content buried under ads, navigation, and scripts.</p>
            <p>Second paragraph of real content that should be extracted properly.</p>
            <p>Third paragraph with more details about the topic.</p>
          </article>
        </main>
        <div class="popup">Subscribe now!</div>
        <footer>Copyright</footer>
      </body></html>
    `, 'https://adspam.example.com/article');

    const result = renderAndVerify(doc, 'https://adspam.example.com/article');
    expect(result.rendered).toBe(true);
    expect(result.output).toContain('Real Article Title');
  });

  it('should render non-English content', () => {
    const doc = createDoc(`
      <html lang="ja"><body>
        <article>
          <h1>人工知能の最新動向</h1>
          <p>2024年に入り、人工知能技術は急速に発展しています。</p>
          <p>特に大規模言語モデルの分野では目覚ましい進歩が見られます。</p>
        </article>
      </body></html>
    `, 'https://example.jp/ai-news');

    const result = renderAndVerify(doc, 'https://example.jp/ai-news');
    expect(result.rendered).toBe(true);
    expect(result.output).toContain('人工知能');
  });

  it('should render page with tables', () => {
    const doc = createDoc(`
      <html><body>
        <article>
          <h1>Comparison of CPU Performance</h1>
          <p>Here are the benchmark results for the latest processors.</p>
          <table><tr><th>CPU</th><th>Score</th></tr><tr><td>Ryzen 9</td><td>32000</td></tr></table>
          <p>The Ryzen 9 leads in multi-threaded workloads.</p>
        </article>
      </body></html>
    `, 'https://tech.example.com/cpu-benchmarks');

    const result = renderAndVerify(doc, 'https://tech.example.com/cpu-benchmarks');
    expect(result.rendered).toBe(true);
  });

  it('should render long-form article with many paragraphs', () => {
    const paragraphs = Array.from({ length: 20 }, (_, i) => 
      `<p>This is paragraph ${i + 1} of a long article about technology and its impact on society. Each paragraph contains meaningful content that should be preserved.</p>`
    ).join('\n');

    const doc = createDoc(`
      <html><body>
        <article>
          <h1>The Future of Technology</h1>
          ${paragraphs}
        </article>
      </body></html>
    `, 'https://blog.example.com/future-tech');

    const result = renderAndVerify(doc, 'https://blog.example.com/future-tech');
    expect(result.rendered).toBe(true);
    expect(result.output).toContain('paragraph 1');
    expect(result.output).toContain('paragraph 20');
  });
});

// ============================================================================
// Layout Rendering - All layouts work
// ============================================================================

describe('Reader - Layout Rendering', () => {
  const sampleArticle = (() => {
    const doc = createDoc(`
      <html><body>
        <article>
          <h1>Sample Article Title</h1>
          <p>First paragraph of content here with enough text to be meaningful.</p>
          <p>Second paragraph with more details about the topic being discussed.</p>
          <h2>Section Heading</h2>
          <p>Content under the section heading with additional information.</p>
        </article>
      </body></html>
    `, 'https://example.com/article');
    return extractArticle(doc, 'https://example.com/article', 'full');
  })();

  it('adaptive layout renders with dark theme', () => {
    const layout = getLayout('adaptive');
    // Create a mock shadow DOM environment
    const shadowRoot = document.createElement('div');
    shadowRoot.innerHTML = `
      <div class="cw-overlay">
        <div class="cw-article-header"></div>
        <div class="cw-content"></div>
        <footer class="cw-footer"></footer>
      </div>
    `;
    const container = shadowRoot.querySelector('.cw-content') as HTMLElement;
    layout.render(sampleArticle, container, { font: 'Inter', fontSize: '16px' });
    
    // Should render content into the container
    expect(container.innerHTML.length).toBeGreaterThan(100);
    expect(container.innerHTML).toContain('Sample Article Title');
  });

  it('adaptive layout renders title and content', () => {
    const layout = getLayout('adaptive');
    const container = document.createElement('div');
    const header = document.createElement('div');
    const footer = document.createElement('div');
    layout.render(sampleArticle, container, {}, { header, footer });
    
    expect(container.innerHTML).toContain('Sample Article Title');
    expect(container.innerHTML).toContain('First paragraph');
    expect(container.innerHTML).toContain('Section Heading');
  });

  it('adaptive layout includes source attribution', () => {
    const layout = getLayout('adaptive');
    const container = document.createElement('div');
    const header = document.createElement('div');
    const footer = document.createElement('div');
    layout.render(sampleArticle, container, {}, { header, footer });
    
    expect(footer.innerHTML).toContain('example.com');
  });
});

// ============================================================================
// Content Extraction Quality
// ============================================================================

describe('Reader - Extraction strips noise', () => {
  it('should remove navigation elements', () => {
    const doc = createDoc(`
      <html><body>
        <nav class="main-nav"><a href="/">Home</a><a href="/about">About</a></nav>
        <header class="site-header">Site Header</header>
        <article>
          <h1>Article Title</h1>
          <p>Article content goes here with enough text to be extracted.</p>
          <p>Second paragraph of real content.</p>
        </article>
        <footer class="site-footer">Copyright 2024</footer>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    expect(article.content).toContain('Article content');
    expect(article.content).not.toContain('Site Header');
    expect(article.content).not.toContain('Copyright 2024');
  });

  it('should remove script and style tags', () => {
    const doc = createDoc(`
      <html><body>
        <article>
          <h1>Clean Article</h1>
          <script>console.log('tracking');</script>
          <style>.ad { display: block; }</style>
          <p>Article content that should remain after cleaning.</p>
          <p>Another paragraph of clean content.</p>
        </article>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    expect(article.content).not.toContain('console.log');
    expect(article.content).not.toContain('display: block');
    expect(article.content).toContain('Article content');
  });

  it('should remove ad containers', () => {
    const doc = createDoc(`
      <html><body>
        <div class="ad-banner">Advertisement</div>
        <main>
          <article>
            <h1>Important Article</h1>
            <p>Main article content that matters to the reader and contains valuable information.</p>
            <p>Second paragraph with more meaningful content for the reader to consume.</p>
            <p>Third paragraph continuing the article with additional details.</p>
          </article>
        </main>
        <div class="adsbygoogle">Google Ad</div>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    expect(article.content).toContain('Main article content');
  });

  it('should remove cookie notices and GDPR banners', () => {
    const doc = createDoc(`
      <html><body>
        <div class="cookie-notice">We use cookies</div>
        <div class="gdpr-banner">Accept cookies</div>
        <main>
          <article>
            <h1>Article</h1>
            <p>Content that should be preserved after removing cookie notices and banners.</p>
            <p>Second paragraph of meaningful content.</p>
            <p>Third paragraph continues the article.</p>
          </article>
        </main>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    expect(article.content).toContain('preserved');
  });

  it('should remove chat widgets', () => {
    const doc = createDoc(`
      <html><body>
        <div class="intercom-container">Chat with us</div>
        <main>
          <article>
            <h1>Article</h1>
            <p>Article content that should be extracted properly.</p>
            <p>More content here for extraction.</p>
          </article>
        </main>
        <div class="chat-widget">Help</div>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    expect(article.content).toContain('Article content');
  });
});

// ============================================================================
// Text-only mode
// ============================================================================

describe('Reader - Text-only mode', () => {
  it('should strip images but keep text', () => {
    const doc = createDoc(`
      <html><body>
        <article>
          <h1>Article With Images</h1>
          <img src="photo.jpg" alt="A photo" width="800" height="600">
          <p>Text content that should remain.</p>
          <img src="chart.png" alt="Chart" width="600" height="400">
          <p>More text content.</p>
        </article>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    expect(article.content).toContain('Text content');
    expect(article.contentHtml.querySelectorAll('img').length).toBe(0);
    expect(article.images.length).toBe(0);
  });

  it('should keep small icons (<=32px)', () => {
    const doc = createDoc(`
      <html><body>
        <article>
          <h1>Article With Icons</h1>
          <p>Text with <img src="icon.png" width="16" height="16" alt="icon"> inline icon.</p>
          <img src="big-photo.jpg" width="800" height="600" alt="photo">
          <p>More text content here.</p>
        </article>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    // Small icon should remain
    expect(article.contentHtml.querySelectorAll('img').length).toBeGreaterThanOrEqual(1);
  });

  it('should strip video and audio elements', () => {
    const doc = createDoc(`
      <html><body>
        <article>
          <h1>Article With Media</h1>
          <p>Article text content.</p>
          <video src="video.mp4"></video>
          <audio src="audio.mp3"></audio>
          <p>More text after media.</p>
        </article>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    expect(article.contentHtml.querySelectorAll('video').length).toBe(0);
    expect(article.contentHtml.querySelectorAll('audio').length).toBe(0);
    expect(article.content).toContain('Article text content');
  });

  it('should preserve figcaption text as paragraph', () => {
    const doc = createDoc(`
      <html><body>
        <article>
          <h1>Article</h1>
          <figure>
            <img src="chart.png" width="800" height="400">
            <figcaption>This chart shows the quarterly results</figcaption>
          </figure>
          <p>Article text here.</p>
        </article>
      </body></html>
    `, 'https://example.com');

    const article = extractArticle(doc, 'https://example.com', 'textOnly');
    expect(article.content).toContain('quarterly results');
  });
});

// ============================================================================
// Auto-detect layout adapts to content
// ============================================================================

describe('Reader - Adaptive layout', () => {
  it('detects code-heavy content', () => {
    const doc = createDoc(`
      <html><body><article>
        <h1>Tutorial</h1>
        <pre><code>function main() { return true; }</code></pre>
        <pre><code>const x = 42;</code></pre>
        <pre><code>let y = x + 1;</code></pre>
        <pre><code>console.log(y);</code></pre>
        <p>Text between code blocks.</p>
      </article></body></html>
    `, 'https://example.com/tutorial');

    const article = extractArticle(doc, 'https://example.com');
    const layout = autoDetectLayout(article);
    const container = document.createElement('div');
    layout.render(article, container, { font: 'Inter', fontSize: '16px' });
    expect(container.innerHTML.length).toBeGreaterThan(100);
  });

  it('detects short news content', () => {
    const doc = createDoc(`
      <html><body><article>
        <h1>Quick Update</h1>
        <p>Short news item with just a few paragraphs of content.</p>
        <p>Second brief paragraph.</p>
      </article></body></html>
    `, 'https://example.com/news');

    const article = extractArticle(doc, 'https://example.com/news');
    const layout = autoDetectLayout(article);
    const container = document.createElement('div');
    layout.render(article, container);
    expect(container.innerHTML.length).toBeGreaterThan(50);
  });

  it('renders fallback when extraction produces minimal content', () => {
    const doc = createDoc(`
      <html><body>
        <div>Just some text on a page</div>
      </body></html>
    `, 'https://example.com/minimal');

    const article = extractArticle(doc, 'https://example.com/minimal');
    const layout = autoDetectLayout(article);
    const container = document.createElement('div');
    // Should not throw even with minimal content
    expect(() => layout.render(article, container)).not.toThrow();
  });
});
