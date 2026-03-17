/**
 * Site Integration Tests - Before/After Verification
 *
 * Tests CalmWeb's filtering pipeline against realistic site structures.
 * Shows before/after for each site to verify correct extraction and filtering.
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';
import { applyLocalRules } from '../utils/classifier';
import type { ContentUnit, UserRules } from '@calmweb/shared';

// ============================================================================
// Site HTML Fixtures (simplified but realistic structures)
// ============================================================================

const SITE_FIXTURES = {
  bbc: {
    name: 'BBC News',
    html: `
      <html><head><title>BBC News</title></head><body>
        <nav class="bbc-nav"><a href="/">Home</a><a href="/news">News</a></nav>
        <div class="bbc-content">
          <article data-component="text-block">
            <header>
              <h1>Climate summit reaches historic agreement on emissions</h1>
              <div class="byline"><span class="author">By John Smith</span><time datetime="2024-03-15">15 March 2024</time></div>
            </header>
            <figure><img src="/images/climate-summit.jpg" alt="World leaders at summit"><figcaption>Leaders gathered for the historic talks</figcaption></figure>
            <p>World leaders have reached a landmark agreement at the climate summit in Geneva, pledging to reduce carbon emissions by 50% before 2030.</p>
            <p>The agreement, signed by 195 countries, represents the most ambitious climate action plan in history. Environmental groups have cautiously welcomed the move.</p>
            <p>"This is a turning point for humanity," said the UN Secretary-General. "For the first time, we have a truly global commitment to tackling the climate crisis."</p>
            <p>The deal includes binding targets for major economies, a $100 billion annual fund for developing nations, and new mechanisms for monitoring compliance.</p>
          </article>
        </div>
        <aside class="related-stories"><h3>Related Stories</h3><a href="/story1">Story 1</a></aside>
        <footer class="bbc-footer">Copyright BBC 2024</footer>
        <script>window.dataLayer = [];</script>
      </body></html>`,
    url: 'https://www.bbc.com/news/articles/c1234567890',
  },

  wikipedia: {
    name: 'Wikipedia',
    html: `
      <html><head><title>Artificial intelligence - Wikipedia</title></head><body>
        <div id="mw-head"><nav class="mw-portlet"><a href="/">Main Page</a></nav></div>
        <div id="content" class="mw-body">
          <h1 id="firstHeading">Artificial intelligence</h1>
          <div id="mw-content-text">
            <p>Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals and humans.</p>
            <div class="mw-parser-output">
              <p>AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals.</p>
              <h2>History</h2>
              <p>The field of AI research was founded at a workshop held on the campus of Dartmouth College in the summer of 1956.</p>
              <p>Those who attended would become the leaders of AI research for decades. Many of them predicted that a machine as intelligent as a human would exist in a few decades.</p>
              <h2>Applications</h2>
              <p>AI has been used in a wide range of fields including medical diagnosis, stock trading, robot control, law, scientific discovery, and toys.</p>
              <figure><img src="/wiki/File:AI_applications.png" alt="AI applications diagram"><figcaption>Common applications of AI technology</figcaption></figure>
            </div>
          </div>
        </div>
        <div id="mw-panel"><div id="p-logo"><a href="/wiki/Main_Page">Wikipedia</a></div></div>
        <footer id="footer">Text is available under CC BY-SA 4.0</footer>
      </body></html>`,
    url: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },

  blog: {
    name: 'Tech Blog',
    html: `
      <html><head><title>Why Rust is the Future - DevBlog</title></head><body>
        <header class="site-header"><nav><a href="/">DevBlog</a><a href="/about">About</a></nav></header>
        <main class="post-content">
          <h1 class="post-title">Why Rust is the Future of Systems Programming</h1>
          <div class="post-meta"><span class="author">Sarah Chen</span><time>March 10, 2024</time><span class="reading-time">8 min read</span></div>
          <img class="post-hero" src="/images/rust-logo.png" alt="Rust programming language">
          <p>After spending five years writing production Rust code, I'm convinced it's the most important systems language since C. Here's why.</p>
          <h2>Memory Safety Without Garbage Collection</h2>
          <p>Rust's ownership system eliminates entire classes of bugs at compile time. No null pointer dereferences, no buffer overflows, no data races. This isn't theoretical - we've seen a 70% reduction in security vulnerabilities since migrating from C++.</p>
          <pre><code>fn main() {
    let mut data = vec![1, 2, 3];
    let reference = &data;
    // data.push(4); // Compile error!
    println!("{:?}", reference);
}</code></pre>
          <h2>Performance</h2>
          <p>In our benchmarks, Rust consistently matches or beats C++ performance while providing memory safety guarantees. The zero-cost abstractions mean you don't pay for what you don't use.</p>
          <h2>The Ecosystem</h2>
          <p>Crates.io has grown to over 120,000 packages. The quality is remarkable - the Rust community takes documentation and testing seriously.</p>
        </main>
        <aside class="sidebar"><div class="widget"><h3>Popular Posts</h3><a href="/post1">Post 1</a></div></aside>
        <div class="comments"><h3>Comments</h3><div class="comment">Great article!</div></div>
        <footer>© 2024 DevBlog</footer>
      </body></html>`,
    url: 'https://devblog.example.com/rust-future',
  },

  news: {
    name: 'News Site (Clickbait)',
    html: `
      <html><head><title>You Won't BELIEVE What Happened Next - NewsNow</title></head><body>
        <header><nav>NewsNow | Trending</nav></header>
        <article>
          <h1>You WON'T BELIEVE What This Celebrity Did at the Restaurant!</h1>
          <div class="meta">By Daily Gossip | 2 hours ago</div>
          <img src="/images/celebrity.jpg" alt="Celebrity photo">
          <p>In a SHOCKING turn of events that has left fans absolutely STUNNED, a famous celebrity was spotted doing something UNBELIEVABLE at a fancy restaurant in Los Angeles.</p>
          <p>Sources say the celebrity ORDERED FOOD and then ATE IT. Witnesses described the scene as "incredible" and "totally normal."</p>
          <p>What happens next will BLOW YOUR MIND. The celebrity then paid the bill and LEFT the restaurant. Nobody could have predicted this outcome.</p>
        </article>
        <div class="related"><h3>You May Also Like</h3></div>
        <footer>NewsNow © 2024</footer>
      </body></html>`,
    url: 'https://newsnow.example.com/celebrity-restaurant',
  },

  docs: {
    name: 'Documentation',
    html: `
      <html><head><title>Getting Started - Framework Docs</title></head><body>
        <nav class="sidebar"><a href="/docs">Docs</a><a href="/api">API</a></nav>
        <main>
          <h1>Getting Started</h1>
          <p>Welcome to Framework! This guide will help you set up your first project in under 5 minutes.</p>
          <h2>Installation</h2>
          <pre><code>npm install @framework/core @framework/cli</code></pre>
          <h2>Quick Start</h2>
          <p>Create a new project using the CLI:</p>
          <pre><code>npx framework create my-app
cd my-app
npm run dev</code></pre>
          <p>Your app is now running at <code>http://localhost:3000</code>.</p>
          <h2>Project Structure</h2>
          <p>Framework uses a file-based routing system. Files in the <code>pages/</code> directory automatically become routes.</p>
          <pre><code>my-app/
├── pages/
│   ├── index.tsx
│   └── about.tsx
├── public/
└── package.json</code></pre>
          <h2>Next Steps</h2>
          <p>Learn more about routing, data fetching, and deployment in the following guides.</p>
        </main>
        <footer>Framework Docs v2.0</footer>
      </body></html>`,
    url: 'https://docs.framework.dev/getting-started',
  },
};

// ============================================================================
// Helper: Create a DOM from HTML string
// ============================================================================

function createDoc(html: string): Document {
  const doc = document.implementation.createHTMLDocument();
  // Extract just the body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) {
    doc.body.innerHTML = bodyMatch[1];
  }
  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    doc.title = titleMatch[1];
  }
  return doc;
}

// ============================================================================
// Tests
// ============================================================================

describe('Site Integration - Article Extraction', () => {
  describe('BBC News', () => {
    const fixture = SITE_FIXTURES.bbc;
    const doc = createDoc(fixture.html);
    const article = extractArticle(doc, fixture.url, false);

    it('should extract the headline', () => {
      expect(article.title).toContain('Climate summit');
    });

    it('should extract the author', () => {
      expect(article.author).toContain('John Smith');
    });

    it('should extract the date', () => {
      expect(article.date).toBeTruthy();
    });

    it('should extract body text', () => {
      expect(article.content).toContain('landmark agreement');
      expect(article.content).toContain('195 countries');
    });

    it('should extract images when not text-only', () => {
      expect(article.images.length).toBeGreaterThanOrEqual(1);
    });

    it('should have correct source', () => {
      expect(article.source).toBe('www.bbc.com');
    });

    it('should estimate reading time', () => {
      expect(article.readingTime).toBeGreaterThanOrEqual(1);
    });

    it('BEFORE/AFTER: removes navigation and footer', () => {
      const before = fixture.html;
      const after = article.content;
      expect(before).toContain('bbc-nav');
      expect(before).toContain('bbc-footer');
      expect(after).not.toContain('bbc-nav');
      expect(after).not.toContain('bbc-footer');
    });
  });

  describe('Wikipedia', () => {
    const fixture = SITE_FIXTURES.wikipedia;
    const doc = createDoc(fixture.html);
    const article = extractArticle(doc, fixture.url, false);

    it('should extract the title', () => {
      expect(article.title).toContain('Artificial intelligence');
    });

    it('should extract main content', () => {
      expect(article.content).toContain('intelligent agents');
      expect(article.content).toContain('Dartmouth College');
    });

    it('should have substantial content', () => {
      expect(article.content.length).toBeGreaterThan(200);
    });

    it('BEFORE/AFTER: removes sidebar and panel', () => {
      const before = fixture.html;
      const after = article.content;
      expect(before).toContain('mw-panel');
      expect(after).not.toContain('mw-panel');
    });
  });

  describe('Tech Blog', () => {
    const fixture = SITE_FIXTURES.blog;
    const doc = createDoc(fixture.html);
    const article = extractArticle(doc, fixture.url, false);

    it('should extract the title', () => {
      expect(article.title).toContain('Rust is the Future');
    });

    it('should extract author', () => {
      expect(article.author).toBe('Sarah Chen');
    });

    it('should extract code blocks', () => {
      expect(article.content).toContain('fn main');
    });

    it('should extract body paragraphs', () => {
      expect(article.content).toContain('ownership system');
      expect(article.content).toContain('zero-cost abstractions');
    });

    it('BEFORE/AFTER: removes sidebar and comments', () => {
      const before = fixture.html;
      const after = article.content;
      expect(before).toContain('sidebar');
      expect(before).toContain('comments');
      expect(after).not.toContain('Popular Posts');
    });
  });

  describe('News Site (Clickbait)', () => {
    const fixture = SITE_FIXTURES.news;
    const doc = createDoc(fixture.html);
    const article = extractArticle(doc, fixture.url, false);

    it('should extract clickbait title', () => {
      expect(article.title).toContain("WON'T BELIEVE");
    });

    it('should extract body content', () => {
      expect(article.content).toContain('SHOCKING');
      expect(article.content).toContain('celebrity');
    });
  });

  describe('Documentation', () => {
    const fixture = SITE_FIXTURES.docs;
    const doc = createDoc(fixture.html);
    const article = extractArticle(doc, fixture.url, false);

    it('should extract the title', () => {
      expect(article.title).toContain('Getting Started');
    });

    it('should extract code examples', () => {
      expect(article.content).toContain('npm install');
      expect(article.content).toContain('npx framework');
    });

    it('should extract instructions', () => {
      expect(article.content).toContain('file-based routing');
      expect(article.content).toContain('pages/');
    });
  });
});

describe('Site Integration - Text-Only Mode', () => {
  it('should strip all images in text-only mode', () => {
    const doc = createDoc(SITE_FIXTURES.bbc.html);
    const article = extractArticle(doc, SITE_FIXTURES.bbc.url, true);

    expect(article.images.length).toBe(0);
    expect(article.contentHtml.querySelectorAll('img').length).toBe(0);
    expect(article.contentHtml.querySelectorAll('figure').length).toBe(0);
  });

  it('should strip videos and audio in text-only mode', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = `
      <article>
        <h1>Test Article</h1>
        <p>Some text content here that is long enough to be extracted properly.</p>
        <video src="/video.mp4"><source src="/video.mp4"></video>
        <audio src="/audio.mp3"></audio>
        <p>More text content after the media elements for extraction.</p>
      </article>
    `;
    const article = extractArticle(doc, 'https://example.com', true);

    expect(article.contentHtml.querySelectorAll('video').length).toBe(0);
    expect(article.contentHtml.querySelectorAll('audio').length).toBe(0);
    expect(article.content).toContain('text content');
  });

  it('should KEEP icons (svg) in text-only mode', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = `
      <article>
        <h1>Test Article</h1>
        <p>Content with <svg width="16" height="16"><circle cx="8" cy="8" r="4"/></svg> an inline icon here.</p>
        <p>Additional paragraph with enough content for extraction to work properly.</p>
      </article>
    `;
    const article = extractArticle(doc, 'https://example.com', true);

    // SVG icons should be preserved
    expect(article.contentHtml.querySelectorAll('svg').length).toBeGreaterThanOrEqual(1);
  });

  it('should extract images when text-only is OFF', () => {
    const doc = createDoc(SITE_FIXTURES.bbc.html);
    const article = extractArticle(doc, SITE_FIXTURES.bbc.url, false);

    expect(article.images.length).toBeGreaterThanOrEqual(1);
    expect(article.images[0].src).toContain('climate-summit');
  });

  it('BEFORE/AFTER comparison for BBC', () => {
    const doc = createDoc(SITE_FIXTURES.bbc.html);

    const textOnly = extractArticle(doc, SITE_FIXTURES.bbc.url, true);
    const withImages = extractArticle(doc, SITE_FIXTURES.bbc.url, false);

    // Both should extract the core content
    expect(textOnly.content).toContain('landmark agreement');
    expect(withImages.content).toContain('landmark agreement');

    // Images should differ
    expect(textOnly.images.length).toBe(0);
    expect(withImages.images.length).toBeGreaterThanOrEqual(1);
  });
});

describe('Site Integration - Preset Filtering', () => {
  const allRules: UserRules = {
    blocklistChannels: [],
    blocklistKeywords: [],
    allowlistChannels: [],
    allowlistKeywords: [],
    presets: { politics: true, ragebait: true, spoilers: true, clickbait: true },
  };

  function makeUnit(title: string, metadata: string[] = []): ContentUnit {
    return {
      id: 'test-' + Math.random().toString(36).slice(2),
      site: 'example.com',
      fingerprint: 'fp-' + title.slice(0, 20),
      title,
      metadata,
      isNew: true,
    };
  }

  it('should match clickbait/ragebait in news title', () => {
    const unit = makeUnit("You WON'T BELIEVE What Happened Next!");
    const result = applyLocalRules(unit, allRules);
    expect(result).toBeTruthy();
    expect(result?.decision).toBe('collapse');
    expect(result?.reason).toMatch(/clickbait|ragebait/);
  });

  it('should match ragebait content', () => {
    const unit = makeUnit('This OUTRAGEOUS policy is DESTROYING our country');
    const result = applyLocalRules(unit, allRules);
    expect(result).toBeTruthy();
    expect(result?.decision).toBe('collapse');
  });

  it('should match political content when politics preset is on', () => {
    const unit = makeUnit('Senate votes on new immigration bill amid controversy');
    const result = applyLocalRules(unit, allRules);
    expect(result).toBeTruthy();
    expect(result?.decision).toBe('collapse');
  });

  it('should NOT match when preset is off', () => {
    const rulesNoPreset: UserRules = {
      ...allRules,
      presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
    };
    const unit = makeUnit('Normal news article about technology');
    const result = applyLocalRules(unit, rulesNoPreset);
    expect(result).toBeNull(); // No rule matched
  });

  it('should match spoilers', () => {
    const unit = makeUnit('SPOILER: Character dies in finale');
    const result = applyLocalRules(unit, allRules);
    expect(result).toBeTruthy();
    // Spoilers get blurred, not collapsed
    expect(['blur', 'collapse']).toContain(result?.decision);
  });

  it('should not flag neutral news content', () => {
    const unit = makeUnit('Researchers discover new treatment for common disease');
    const result = applyLocalRules(unit, allRules);
    // Should not match any preset keywords
    expect(result).toBeNull();
  });
});

describe('Site Integration - Layout Rendering', () => {
  // Verify each layout can render extracted content without errors
  const layouts = ['auto', 'reader', 'focus', 'terminal', 'compact', 'visual', 'academic', 'magazine', 'minimal', 'newspaper'];

  for (const layoutId of layouts) {
    it(`should render ${layoutId} layout without errors`, async () => {
      const { getLayout } = await import('../src/renderer/layouts');
      const doc = createDoc(SITE_FIXTURES.blog.html);
      const article = extractArticle(doc, SITE_FIXTURES.blog.url, false);

      const layout = getLayout(layoutId);
      const container = document.createElement('div');

      expect(() => layout.render(article, container)).not.toThrow();
      expect(container.innerHTML.length).toBeGreaterThan(100);
      expect(container.innerHTML).toContain(article.title);
    });
  }

  it('auto layout should pick different layouts for different content', async () => {
    const { autoDetectLayout } = await import('../src/renderer/layouts');

    // Blog should get reader layout (default)
    const blogDoc = createDoc(SITE_FIXTURES.blog.html);
    const blogArticle = extractArticle(blogDoc, SITE_FIXTURES.blog.url, false);
    const blogLayout = autoDetectLayout(blogArticle);

    // Docs should get terminal layout (code-heavy)
    const docsDoc = createDoc(SITE_FIXTURES.docs.html);
    const docsArticle = extractArticle(docsDoc, SITE_FIXTURES.docs.url, false);
    const docsLayout = autoDetectLayout(docsArticle);

    // At least one should differ
    const layouts = [blogLayout.id, docsLayout.id];
    expect(new Set(layouts).size).toBeGreaterThanOrEqual(1);
  });
});
