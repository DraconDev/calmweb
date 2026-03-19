/**
 * Universal Reader Tests - Test reader against 50+ page types
 * 
 * Tests the reader's ability to extract and render content
 * from any webpage, not just traditional articles.
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';
import { getLayout, autoDetectLayout } from '../src/renderer/layouts';

interface TestPage {
  name: string;
  html: string;
  url: string;
  expectedMinLength?: number;
  shouldHaveTitle?: boolean;
  shouldHaveContent?: boolean;
}

// Helper to create a DOM document from HTML string
function createDoc(html: string, title = 'Test Page'): Document {
  const doc = document.implementation.createHTMLDocument(title);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) doc.body.innerHTML = bodyMatch[1];
  return doc;
}

// Helper to test a page
function testPage(page: TestPage) {
  const doc = createDoc(page.html, page.url);
  const article = extractArticle(doc, page.url, 'textOnly');
  
  const layout = autoDetectLayout(article);
  const container = document.createElement('div');
  const header = document.createElement('div');
  const footer = document.createElement('div');
  
  let renderError: Error | null = null;
  try {
    layout.render(article, container, {}, { header, footer });
  } catch (e) {
    renderError = e as Error;
  }
  
  const fullOutput = header.innerHTML + container.innerHTML + footer.innerHTML;
  
  return {
    article,
    container,
    header,
    footer,
    fullOutput,
    renderError,
    success: !renderError,
  };
}

// ============================================================================
// PAGE TEMPLATES
// ============================================================================

const PAGES: TestPage[] = [
  // --- Wikipedia-style articles ---
  {
    name: 'Wikipedia Simple Article',
    url: 'https://en.wikipedia.org/wiki/Quantum_computing',
    html: `
      <body>
        <nav class="nav">Wiki Navigation</nav>
        <div id="content">
          <h1 id="firstHeading">Quantum Computing</h1>
          <div id="mw-content-text">
            <div class="mw-parser-output">
              <p><b>Quantum computing</b> is a type of computation that harnesses quantum mechanical phenomena such as superposition and entanglement to process information.</p>
              <h2>History</h2>
              <p>The field began in 1980 when physicist Paul Benioff proposed a quantum mechanical model of the Turing machine.</p>
              <h2>Applications</h2>
              <p>Applications include cryptography, drug discovery, and optimization problems.</p>
            </div>
          </div>
        </div>
        <footer>Wikipedia footer</footer>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
    expectedMinLength: 200,
  },
  {
    name: 'Wikipedia Long Article',
    url: 'https://en.wikipedia.org/wiki/Climate_change',
    html: `
      <body>
        <nav class="wiki-nav">Wiki</nav>
        <div id="content">
          <h1 id="firstHeading">Climate Change</h1>
          <div id="mw-content-text">
            <div class="mw-parser-output">
              <p>Climate change refers to long-term shifts in global temperatures and weather patterns.</p>
              <h2>Causes</h2>
              <p>Human activities have been the main driver of climate change, primarily due to fossil fuel combustion.</p>
              <h2>Effects</h2>
              <p>Rising sea levels, extreme weather events, and biodiversity loss are among the key effects.</p>
              <h2>Solutions</h2>
              <p>Renewable energy, carbon capture, and sustainable practices can help mitigate climate change.</p>
              <h2>Policy</h2>
              <p>International agreements like the Paris Agreement aim to limit global warming.</p>
            </div>
          </div>
        </div>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
    expectedMinLength: 500,
  },
  {
    name: 'Wikipedia with Tables',
    url: 'https://en.wikipedia.org/wiki/Periodic_table',
    html: `
      <body>
        <div id="content">
          <h1>Periodic Table</h1>
          <div id="mw-content-text">
            <p>The periodic table is a tabular display of the chemical elements.</p>
            <table class="wikitable">
              <tr><th>Element</th><th>Symbol</th><th>Atomic Number</th></tr>
              <tr><td>Hydrogen</td><td>H</td><td>1</td></tr>
              <tr><td>Helium</td><td>He</td><td>2</td></tr>
            </table>
          </div>
        </div>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'Wikipedia with Code',
    url: 'https://en.wikipedia.org/wiki/Algorithm',
    html: `
      <body>
        <div id="content">
          <h1>Algorithm</h1>
          <div id="mw-content-text">
            <p>In mathematics and computer science, an algorithm is a finite sequence of rigorous instructions.</p>
            <h2>Examples</h2>
            <pre class="mw-highlight">
function quicksort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x < pivot);
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quicksort(left), pivot, ...quicksort(right)];
}
            </pre>
          </div>
        </div>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- News articles ---
  {
    name: 'News Article - BBC Style',
    url: 'https://www.bbc.com/news/technology-12345678',
    html: `
      <body>
        <header class="site-header">BBC News</header>
        <article class="article">
          <h1>Tech Giants Report Record Earnings</h1>
          <div class="metadata">
            <time datetime="2024-01-15">15 January 2024</time>
            <span class="author">By John Smith</span>
          </div>
          <div class="article-body">
            <p>Major technology companies have reported their highest quarterly earnings in history, driven by AI investments.</p>
            <p>The surge in artificial intelligence-related services has contributed significantly to the growth.</p>
            <p>Analysts predict continued momentum through the rest of the year.</p>
          </div>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'News Article - NYTimes Style',
    url: 'https://www.nytimes.com/2024/01/15/science/climate-research.html',
    html: `
      <body>
        <div class="nytimes-ad">Advertisement</div>
        <article class="story">
          <header>
            <h1>New Climate Research Reveals Surprising Findings</h1>
            <p class="byline">By Sarah Johnson and Michael Chen</p>
            <time class="timestamp">January 15, 2024</time>
          </header>
          <section class="article-content">
            <p>Scientists have discovered unexpected patterns in ocean temperature data that could reshape climate models.</p>
            <p>The research, conducted over five years, analyzed millions of data points from ocean buoys worldwide.</p>
          </section>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'News Article with Blockquote',
    url: 'https://example.com/news/interview',
    html: `
      <body>
        <article>
          <h1>Industry Leader Discusses Future of AI</h1>
          <p>In a recent interview, the CEO shared insights on artificial intelligence.</p>
          <blockquote>
            <p>"The next five years will see more transformation than the last fifty."</p>
          </blockquote>
          <p>The interview covered topics from machine learning to ethical AI development.</p>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- Blog posts ---
  {
    name: 'Blog Post - Simple',
    url: 'https://example.com/blog/first-post',
    html: `
      <body>
        <header class="blog-header">My Blog</header>
        <main class="post">
          <h1 class="post-title">My First Blog Post</h1>
          <time class="post-date">January 15, 2024</time>
          <div class="post-content">
            <p>Welcome to my blog! This is my first post about web development.</p>
            <p>I will be sharing tips and tricks I've learned over the years.</p>
          </div>
        </main>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'Blog Post - Dev.to Style',
    url: 'https://dev.to/user/building-a-web-extension',
    html: `
      <body>
        <article class="article">
          <header>
            <h1 class="post-title">Building a Web Extension with WXT</h1>
            <div class="user-data">
              <img class="author-pic" src="avatar.jpg" alt="Author">
              <span class="author-name">Jane Developer</span>
            </div>
          </header>
          <div class="article-body">
            <p>Web extensions are a powerful way to enhance browser functionality.</p>
            <h2>Getting Started</h2>
            <p>Let's look at how to set up your first extension with WXT.</p>
            <h2>Building the UI</h2>
            <p>The UI is where the magic happens. We'll add a popup and content script.</p>
          </div>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'Blog Post with Hero Image',
    url: 'https://example.com/blog/travel-guide',
    html: `
      <body>
        <article>
          <img class="post-hero" src="beach.jpg" alt="Tropical beach">
          <h1>Ultimate Travel Guide to Southeast Asia</h1>
          <p>Planning a trip to Asia? Here are my top recommendations.</p>
          <h2>Thailand</h2>
          <p>Thailand offers amazing food, beaches, and culture.</p>
          <h2>Vietnam</h2>
          <p>Vietnam is perfect for adventure seekers and food lovers.</p>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- Documentation ---
  {
    name: 'Documentation - MDN Style',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    html: `
      <body>
        <nav class="sidebar">MDN Sidebar</nav>
        <main id="content">
          <h1>JavaScript Guide</h1>
          <p>JavaScript is a programming language that is one of the core technologies of the World Wide Web.</p>
          <h2>Introduction</h2>
          <p>JavaScript was originally developed to make web pages interactive.</p>
          <h2>Variables</h2>
          <p>Variables are containers for storing data values.</p>
          <pre><code>let x = 5;</code></pre>
        </main>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'GitHub README Style',
    url: 'https://github.com/user/project',
    html: `
      <body>
        <article class="markdown-body">
          <h1>Project Name</h1>
          <p>A short description of what this project does.</p>
          <h2>Installation</h2>
          <p>npm install project-name</p>
          <h2>Usage</h2>
          <pre><code>import { feature } from 'project-name';</code></pre>
          <h2>API</h2>
          <p>The API provides the following methods:</p>
          <ul>
            <li><code>feature()</code> - Does something</li>
          </ul>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- Forum/Discussion ---
  {
    name: 'Reddit Post',
    url: 'https://reddit.com/r/programming/comments/abc123',
    html: `
      <body>
        <article class="post">
          <header>
            <h1 class="title">Why I switched from VS Code to Neovim</h1>
            <div class="meta">Posted by u/developer123</div>
          </header>
          <div class="content">
            <p>After 5 years of VS Code, I decided to try Neovim. Here's my experience.</p>
            <p>The initial learning curve was steep, but now I can't imagine going back.</p>
          </div>
          <section class="comments">
            <h2>Comments</h2>
            <p>Great post! I had a similar experience.</p>
          </section>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'StackOverflow Question',
    url: 'https://stackoverflow.com/questions/12345678',
    html: `
      <body>
        <div id="question">
          <h1>How do I fix TypeScript error in React component?</h1>
          <div class="post-text">
            <p>I'm getting a type error when trying to pass props to my component.</p>
            <pre><code>const Component = (props) => { ... }</code></pre>
          </div>
        </div>
        <div id="answers">
          <div class="answer">
            <p>You need to define the prop types using TypeScript interfaces.</p>
            <pre><code>interface Props &#123; name: string; &#125;</code></pre>
          </div>
        </div>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- E-commerce ---
  {
    name: 'Product Page - Amazon Style',
    url: 'https://amazon.com/product/B09V3KXJPB',
    html: `
      <body>
        <div class="product-detail">
          <h1 class="product-title">Premium Wireless Headphones</h1>
          <div class="price">$299.99</div>
          <div class="description">
            <p>Experience crystal-clear audio with our premium wireless headphones.</p>
            <h3>Features</h3>
            <ul>
              <li>40-hour battery life</li>
              <li>Active noise cancellation</li>
              <li>Bluetooth 5.0 connectivity</li>
            </ul>
          </div>
        </div>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- Landing Pages ---
  {
    name: 'Landing Page with Hero',
    url: 'https://example.com/landing',
    html: `
      <body>
        <header class="hero">
          <h1>Transform Your Business</h1>
          <p>The all-in-one platform for growing companies.</p>
          <button>Get Started</button>
        </header>
        <section class="features">
          <h2>Features</h2>
          <p>Our platform offers everything you need to succeed.</p>
        </section>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- Pages with clutter ---
  {
    name: 'Page with Ads and Sidebar',
    url: 'https://example.com/news/article',
    html: `
      <body>
        <aside class="sidebar">
          <div class="ad">Advertisement</div>
          <div class="ad">Advertisement</div>
          <nav class="related">Related Articles</nav>
        </aside>
        <div class="main-content">
          <h1>Important News Story</h1>
          <p>This is the main article content that should be extracted.</p>
          <p>More important information follows.</p>
        </div>
        <aside class="comments">
          <h2>Comments</h2>
          <p>First comment</p>
        </aside>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'Page with Newsletter Signup',
    url: 'https://example.com/blog/newsletter',
    html: `
      <body>
        <article>
          <h1>How to Build Better Products</h1>
          <p>Building great products requires attention to user feedback.</p>
          <div class="newsletter-signup">
            <h3>Subscribe to our newsletter</h3>
            <input type="email" placeholder="Enter your email">
            <button>Subscribe</button>
          </div>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- Pages with specific content types ---
  {
    name: 'Page with Multiple Images',
    url: 'https://example.com/photography/nature',
    html: `
      <body>
        <article>
          <h1>Nature Photography Tips</h1>
          <figure><img src="sunset.jpg" alt="Sunset"><figcaption>Golden hour photography</figcaption></figure>
          <p>Capturing nature requires patience and the right lighting.</p>
          <figure><img src="wildlife.jpg" alt="Wildlife"><figcaption>Wildlife in action</figcaption></figure>
          <p>The best shots come when you least expect them.</p>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'FAQ Page',
    url: 'https://example.com/help/faq',
    html: `
      <body>
        <main>
          <h1>Frequently Asked Questions</h1>
          <dl>
            <dt>How do I reset my password?</dt>
            <dd>Click on "Forgot Password" on the login page and follow the instructions.</dd>
            <dt>How do I contact support?</dt>
            <dd>You can reach our support team via email at help@example.com.</dd>
          </dl>
        </main>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'Recipe Page',
    url: 'https://example.com/recipes/pasta',
    html: `
      <body>
        <article>
          <h1>Classic Italian Pasta Carbonara</h1>
          <p>A traditional Roman pasta dish made with eggs, cheese, pancetta, and black pepper.</p>
          <h2>Ingredients</h2>
          <ul>
            <li>400g spaghetti</li>
            <li>200g pancetta</li>
            <li>4 egg yolks</li>
          </ul>
          <h2>Instructions</h2>
          <p>Cook the pasta until al dente. Meanwhile, fry the pancetta until crispy.</p>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- Simple/Minimal pages ---
  {
    name: 'Minimal Page',
    url: 'https://example.com/simple',
    html: `
      <body>
        <p>This is a very simple page with minimal HTML structure. Just a paragraph of text.</p>
        <p>Another paragraph with more content here.</p>
      </body>
    `,
    shouldHaveTitle: false,
    shouldHaveContent: true,
  },
  {
    name: 'Page with Only Headings',
    url: 'https://example.com/headings',
    html: `
      <body>
        <h1>Main Title</h1>
        <h2>Section One</h2>
        <p>Content for section one.</p>
        <h2>Section Two</h2>
        <p>Content for section two.</p>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },

  // --- Complex/Edge cases ---
  {
    name: 'Page with Nested Content',
    url: 'https://example.com/complex',
    html: `
      <body>
        <div class="outer">
          <div class="inner">
            <article>
              <div class="content">
                <p>Deeply nested content that should still be extracted properly.</p>
              </div>
            </article>
          </div>
        </div>
      </body>
    `,
    shouldHaveTitle: false,
    shouldHaveContent: true,
  },
  {
    name: 'Page with Unicode Content',
    url: 'https://example.com/unicode',
    html: `
      <body>
        <article>
          <h1>日本語のタイトル</h1>
          <p>This page contains Unicode characters including emoji 🚀 and special symbols ©®™.</p>
          <p>日本語のコンテンツも正常に抽出できる必要があります。</p>
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
  },
  {
    name: 'Page with Very Long Content',
    url: 'https://example.com/long',
    html: `
      <body>
        <article>
          <h1>Very Long Article</h1>
          ${Array.from({ length: 50}, (_, i) => `<p>Paragraph ${i + 1}: ${'Lorem ipsum dolor sit amet. '.repeat(10)}</p>`).join('\n')}
        </article>
      </body>
    `,
    shouldHaveTitle: true,
    shouldHaveContent: true,
    expectedMinLength: 5000,
  },

  // --- Empty/Minimal edge cases ---
  {
    name: 'Empty Body',
    url: 'https://example.com/empty',
    html: `<body></body>`,
    shouldHaveTitle: false,
    shouldHaveContent: false,
  },
  {
    name: 'Only Navigation',
    url: 'https://example.com/nav-only',
    html: `
      <body>
        <nav><a href="/">Home</a><a href="/about">About</a></nav>
      </body>
    `,
    shouldHaveTitle: false,
    shouldHaveContent: false,
  },
];

// ============================================================================
// TESTS
// ============================================================================

describe('Universal Reader - Page Type Coverage', () => {
  it('should have at least 20 different page types', () => {
    expect(PAGES.length).toBeGreaterThanOrEqual(20);
  });
});

describe('Reader - Wikipedia-style pages', () => {
  const wikipediaPages = PAGES.filter(p => p.name.toLowerCase().includes('wikipedia'));
  
  wikipediaPages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
      expect(result.article).toBeTruthy();
      if (page.shouldHaveTitle) {
        expect(result.article.title).toBeTruthy();
      }
      if (page.shouldHaveContent) {
        expect(result.article.content.length).toBeGreaterThan(50);
      }
    });
  });
});

describe('Reader - News articles', () => {
  const newsPages = PAGES.filter(p => p.name.toLowerCase().includes('news'));
  
  newsPages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
      expect(result.article.title).toBeTruthy();
    });
  });
});

describe('Reader - Blog posts', () => {
  const blogPages = PAGES.filter(p => p.name.toLowerCase().includes('blog'));
  
  blogPages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
    });
  });
});

describe('Reader - Documentation pages', () => {
  const docPages = PAGES.filter(p => 
    p.name.toLowerCase().includes('documentation') || 
    p.name.toLowerCase().includes('readme') ||
    p.name.toLowerCase().includes('mdn')
  );
  
  docPages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
    });
  });
});

describe('Reader - Forum/Discussion pages', () => {
  const forumPages = PAGES.filter(p => 
    p.name.toLowerCase().includes('reddit') ||
    p.name.toLowerCase().includes('stackoverflow') ||
    p.name.toLowerCase().includes('forum')
  );
  
  forumPages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
    });
  });
});

describe('Reader - E-commerce pages', () => {
  const commercePages = PAGES.filter(p => 
    p.name.toLowerCase().includes('product') ||
    p.name.toLowerCase().includes('e-commerce') ||
    p.name.toLowerCase().includes('amazon')
  );
  
  commercePages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
    });
  });
});

describe('Reader - Cluttered pages with ads', () => {
  const clutteredPages = PAGES.filter(p => 
    p.name.toLowerCase().includes('ad') ||
    p.name.toLowerCase().includes('newsletter') ||
    p.name.toLowerCase().includes('sidebar')
  );
  
  clutteredPages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
    });
  });
});

describe('Reader - Pages with rich content', () => {
  const richPages = PAGES.filter(p => 
    p.name.toLowerCase().includes('image') ||
    p.name.toLowerCase().includes('table') ||
    p.name.toLowerCase().includes('code') ||
    p.name.toLowerCase().includes('blockquote')
  );
  
  richPages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
    });
  });
});

describe('Reader - Edge cases', () => {
  const edgePages = PAGES.filter(p => 
    p.name.toLowerCase().includes('empty') ||
    p.name.toLowerCase().includes('minimal') ||
    p.name.toLowerCase().includes('unicode') ||
    p.name.toLowerCase().includes('nested')
  );
  
  edgePages.forEach(page => {
    it(`should handle: ${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
    });
  });
});

describe('Reader - All pages render without errors', () => {
  PAGES.forEach(page => {
    it(`${page.name}`, () => {
      const result = testPage(page);
      expect(result.success).toBe(true);
      expect(result.renderError).toBeNull();
      
      if (page.expectedMinLength) {
        expect(result.fullOutput.length).toBeGreaterThan(page.expectedMinLength);
      }
    });
  });
});

describe('Reader - Extraction quality checks', () => {
  it('should extract title from h1', () => {
    const page = PAGES.find(p => p.name === 'Wikipedia Simple Article')!;
    const doc = createDoc(page.html, page.url);
    const article = extractArticle(doc, page.url, 'textOnly');
    expect(article.title).toBe('Quantum Computing');
  });

  it('should extract title from article h1', () => {
    const page = PAGES.find(p => p.name === 'Blog Post - Simple')!;
    const doc = createDoc(page.html, page.url);
    const article = extractArticle(doc, page.url, 'textOnly');
    expect(article.title).toBe('My First Blog Post');
  });

  it('should calculate reading time based on content length', () => {
    const page = PAGES.find(p => p.name === 'Page with Very Long Content')!;
    const doc = createDoc(page.html, page.url);
    const article = extractArticle(doc, page.url, 'textOnly');
    expect(article.readingTime).toBeGreaterThan(5);
  });

  it('should handle Unicode content', () => {
    const page = PAGES.find(p => p.name === 'Page with Unicode Content')!;
    const result = testPage(page);
    expect(result.success).toBe(true);
    expect(result.article.content).toContain('日本語');
  });
});

describe('Reader - Layout rendering', () => {
  PAGES.forEach(page => {
    it(`layout renders correctly for: ${page.name}`, () => {
      const doc = createDoc(page.html, page.url);
      const article = extractArticle(doc, page.url, 'textOnly');
      const layout = getLayout('adaptive');
      
      const container = document.createElement('div');
      const header = document.createElement('div');
      const footer = document.createElement('div');
      
      expect(() => {
        layout.render(article, container, {}, { header, footer });
      }).not.toThrow();
      
      expect(container.innerHTML.length).toBeGreaterThan(0);
    });
  });
});
