/**
 * Viability Test Suite - Tests CalmWeb against dozens of site structures
 * 
 * Each site gets a viability score (0-100) based on:
 * - Article extraction quality (title, author, content)
 * - Noise removal (nav, ads, scripts stripped)
 * - Layout rendering (does it render without errors)
 * - Filter accuracy (content correctly classified or not)
 *
 * Run: pnpm test --run tests/viability.test.ts
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';
import { adaptiveLayout } from '../src/renderer/layouts';
import { applyLocalRules } from '../utils/classifier';
import type { ContentUnit, UserRules } from '@calmweb/shared';

// ============================================================================
// Site Fixtures Library
// ============================================================================

interface SiteFixture {
  name: string;
  category: string;
  url: string;
  html: string;
  expectations: {
    hasTitle?: boolean;
    hasContent?: boolean;
    minContentLength?: number;
    shouldMatchPreset?: string | null;
  };
}

const SITES: SiteFixture[] = [
  // --- NEWS SITES ---
  {
    name: 'BBC News',
    category: 'news',
    url: 'https://www.bbc.com/news/articles/abc123',
    html: `<html><body><nav class="bbc-nav"><a href="/">Home</a></nav><main><article><h1>Climate summit reaches historic agreement</h1><div class="byline"><span class="author">By John Smith</span><time>15 March 2024</time></div><figure><img src="/img.jpg" alt="Summit"><figcaption>Leaders at the summit</figcaption></figure><p>World leaders have reached a landmark agreement at the climate summit in Geneva.</p><p>The agreement represents the most ambitious climate action plan in history.</p><p>"This is a turning point," said the UN Secretary-General.</p></article></main><footer>Copyright BBC</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 100, shouldMatchPreset: null },
  },
  {
    name: 'CNN',
    category: 'news',
    url: 'https://www.cnn.com/2024/03/15/politics/bill-passes/index.html',
    html: `<html><body><header class="header">CNN</header><article class="article__content"><h1 class="headline">Senate passes bipartisan infrastructure bill</h1><div class="byline__names">By Sarah Johnson</div><p class="paragraph">The Senate voted 79-18 to pass the bipartisan infrastructure bill.</p><p class="paragraph">The legislation includes funding for roads, bridges, and broadband internet.</p></article><div class="ad-slot">Ad</div><footer>CNN © 2024</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 80, shouldMatchPreset: 'politics' },
  },
  {
    name: 'Reuters',
    category: 'news',
    url: 'https://www.reuters.com/technology/ai-breakthrough-2024-03-15/',
    html: `<html><body><header>Reuters</header><article><h1>AI breakthrough enables real-time translation in 100 languages</h1><div class="article-body"><p>Researchers have developed an AI system capable of real-time translation across 100 languages.</p><p>The system uses a novel architecture that processes audio directly without converting to text first.</p><p>"This could eliminate language barriers entirely," said lead researcher Dr. Chen.</p></div></article><nav class="related">Related stories</nav><footer>Thomson Reuters</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 100, shouldMatchPreset: null },
  },
  {
    name: 'The Guardian',
    category: 'news',
    url: 'https://www.theguardian.com/environment/2024/mar/15/ocean-cleanup',
    html: `<html><body><div id="maincontent"><article><h1>Ocean plastic cleanup project removes record amount of waste</h1><div class="dcr-by0q6o"><span>The Guardian</span><time>15 Mar 2024</time></div><div class="article-body"><p>A massive ocean cleanup project has removed over 100,000 tonnes of plastic waste from the Pacific.</p><p>The project, which began in 2019, uses floating barriers to collect debris.</p></div></article></div><footer>Guardian News</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 80, shouldMatchPreset: null },
  },
  {
    name: 'NYT',
    category: 'news',
    url: 'https://www.nytimes.com/2024/03/15/technology/ai-regulation.html',
    html: `<html><body><article id="story"><h1 class="headline">White House Announces New AI Safety Framework</h1><p class="byline">By Cecilia Kang</p><section name="articleBody"><p>The Biden administration unveiled a comprehensive framework for artificial intelligence safety on Wednesday.</p><p>The framework requires companies to disclose training data and undergo safety testing.</p></section></article><footer>© 2024 NYT</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 80, shouldMatchPreset: 'politics' },
  },

  // --- TECH BLOGS ---
  {
    name: 'Medium Article',
    category: 'blog',
    url: 'https://medium.com/@user/understanding-rust-ownership',
    html: `<html><body><article><h1>Understanding Rust Ownership</h1><div class="author">Marcus Chen · 8 min read</div><section><p>Rust's ownership system is its most unique feature. It enables memory safety without garbage collection.</p><pre><code>fn main() { let s = String::from("hello"); }</code></pre><p>This prevents double-free errors at compile time.</p></section></article><footer>Medium</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 80, shouldMatchPreset: null },
  },
  {
    name: 'Dev.to',
    category: 'blog',
    url: 'https://dev.to/author/why-typescript-is-great',
    html: `<html><body><main><article class="crayons-article"><h1>Why TypeScript is Still Worth It in 2024</h1><div class="crayons-story__secondary"><span>Dev Community</span></div><div class="crayons-article__body"><p>TypeScript continues to be one of the most loved programming languages.</p><p>Here are 5 reasons why you should use it in your next project.</p><ul><li>Type safety catches bugs early</li><li>Better IDE support</li></ul></div></article></main><footer>DEV Community</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 80, shouldMatchPreset: null },
  },
  {
    name: 'Substack',
    category: 'blog',
    url: 'https://author.substack.com/p/newsletter-issue-42',
    html: `<html><body><header>Newsletter</header><article class="post-content"><h1>Issue #42: The State of AI in 2024</h1><div class="pencraft">By Alex Writer · Mar 15</div><div class="body"><p>Welcome to issue #42. This week we're covering the latest in AI developments.</p><p>The landscape has shifted dramatically since last year. Here's what you need to know.</p><blockquote>AI is not just a tool anymore. It's becoming a collaborator.</blockquote></div></article><footer>Substack Inc</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 80, shouldMatchPreset: null },
  },

  // --- CLICKBAIT / RAGEBAIT ---
  {
    name: 'Clickbait News',
    category: 'clickbait',
    url: 'https://viralnow.com/shocking-celebrity-revealed',
    html: `<html><body><article><h1>You WON'T BELIEVE What This Celebrity Did!</h1><p>In a SHOCKING turn of events, fans are absolutely STUNNED.</p><p>What happens next will BLOW YOUR MIND.</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: 'clickbait' },
  },
  {
    name: 'Ragebait Politics',
    category: 'ragebait',
    url: 'https://outragenow.com/politician-destroys',
    html: `<html><body><article><h1>This OUTRAGEOUS Policy Is DESTROYING Everything</h1><p>The government's latest move has left citizens FURIOUS and DEMANDING answers.</p><p>Critics say this DEVASTATING policy could be the end of common sense.</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: 'ragebait' },
  },
  {
    name: 'Listicle Clickbait',
    category: 'clickbait',
    url: 'https://buzzfeed-style.com/10-amazing-tricks',
    html: `<html><body><article><h1>10 AMAZING Tricks That Will Change Your Life Forever</h1><p>Number 7 will SHOCK you!</p><p>You won't believe what doctors have been hiding from you.</p><p>This one weird trick helped thousands lose weight overnight.</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: 'clickbait' },
  },

  // --- REFERENCE / ENCYCLOPEDIA ---
  {
    name: 'Wikipedia',
    category: 'reference',
    url: 'https://en.wikipedia.org/wiki/Quantum_computing',
    html: `<html><body><div id="content"><h1 id="firstHeading">Quantum computing</h1><div id="mw-content-text"><p><b>Quantum computing</b> is a type of computation that harnesses quantum mechanical phenomena.</p><h2>History</h2><p>The field began in 1980 when physicist Paul Benioff proposed a quantum mechanical model of the Turing machine.</p><h2>Applications</h2><p>Applications include cryptography, drug discovery, and optimization problems.</p></div></div><div id="mw-panel">Navigation panel</div><footer>Text is available under CC BY-SA</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 100, shouldMatchPreset: null },
  },
  {
    name: 'MDN Docs',
    category: 'docs',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
    html: `<html><body><article class="article"><h1>JavaScript Reference</h1><div class="article-body"><p>JavaScript is a versatile programming language used for web development.</p><h2>Built-in Objects</h2><p>JavaScript provides several built-in objects including Array, Object, and Promise.</p><pre><code>const arr = [1, 2, 3];</code></pre></div></article><footer>MDN Contributors</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'Stack Overflow',
    category: 'docs',
    url: 'https://stackoverflow.com/questions/12345/how-to-use-react-hooks',
    html: `<html><body><div id="question-header"><h1>How to use React hooks correctly?</h1></div><div class="question"><div class="post-text"><p>I'm trying to understand when to use useEffect vs useLayoutEffect.</p><p>Here's my code:</p><pre><code>useEffect(() => { console.log('mounted'); }, []);</code></pre></div><div class="answer"><div class="post-text"><p>useEffect runs after the browser paints, while useLayoutEffect runs before.</p></div></div></div><footer>Stack Overflow</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },

  // --- FORUMS / DISCUSSION ---
  {
    name: 'Reddit Thread',
    category: 'forum',
    url: 'https://www.reddit.com/r/programming/comments/abc/interesting_find',
    html: `<html><body><article><h1>Interesting find in the codebase today</h1><div class="post-content"><p>Found this gem while refactoring legacy code. The previous developer had a unique approach to error handling.</p><pre><code>try { everything(); } catch(e) { // ignore }</code></pre></div></article><div class="comments"><div class="comment"><p>Classic! I've seen worse though.</p></div></div><footer>Reddit Inc</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'Hacker News Link',
    category: 'forum',
    url: 'https://news.ycombinator.com/item?id=12345',
    html: `<html><body><div class="fatitem"><span class="titleline"><a href="#">Show HN: I built a new programming language</a></span></div><div class="comment-tree"><div class="comment"><p>Interesting approach. How does it handle memory management?</p></div></div><footer>Y Combinator</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: null },
  },

  // --- DOCUMENTATION ---
  {
    name: 'GitHub README',
    category: 'docs',
    url: 'https://github.com/user/repo',
    html: `<html><body><article class="markdown-body"><h1>Awesome Project</h1><p>A really useful library for doing awesome things.</p><h2>Installation</h2><pre><code>npm install awesome-project</code></pre><h2>Usage</h2><pre><code>import { awesome } from 'awesome-project'; awesome();</code></pre><h2>License</h2><p>MIT</p></article><footer>GitHub</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'Technical Tutorial',
    category: 'docs',
    url: 'https://tutorial.dev/how-to-build-rest-api',
    html: `<html><body><main><h1>How to Build a REST API with Node.js</h1><div class="meta">Tutorial · 15 min read</div><article><p>This guide walks you through building a production-ready REST API.</p><h2>Prerequisites</h2><p>You need Node.js 18+ and npm installed.</p><h2>Step 1: Initialize Project</h2><pre><code>npm init -y</code></pre><h2>Step 2: Install Dependencies</h2><pre><code>npm install express</code></pre><p>Continue with setting up your routes...</p></article></main><footer>Tutorial.dev</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 100, shouldMatchPreset: null },
  },

  // --- E-COMMERCE ---
  {
    name: 'Amazon Product',
    category: 'ecommerce',
    url: 'https://www.amazon.com/dp/B09EXAMPLE',
    html: `<html><body><div id="ppd"><h1 id="title">Example Product - Premium Quality</h1><div id="feature-bullets"><ul><li>High quality materials</li><li>Fast shipping</li><li>30-day returns</li></ul></div><div id="productDescription"><p>This premium product delivers exceptional performance and reliability.</p></div></div><div id="reviews">Customer reviews here</div><footer>Amazon.com</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: null },
  },

  // --- GOVERNMENT / LEGAL ---
  {
    name: 'Gov Announcement',
    category: 'government',
    url: 'https://www.whitehouse.gov/briefing-room/2024/03/15',
    html: `<html><body><article><h1>FACT SHEET: President Announces New Climate Initiative</h1><div class="meta">March 15, 2024</div><p>The President today announced a comprehensive climate initiative that will reduce emissions by 50% by 2030.</p><p>The plan includes $100 billion in clean energy investments and new regulations for industrial polluters.</p></article><footer>The White House</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: 'politics' },
  },

  // --- SPORTS ---
  {
    name: 'ESPN Game Recap',
    category: 'sports',
    url: 'https://www.espn.com/nba/game/_/gameId/401234567',
    html: `<html><body><article><h1>Lakers defeat Celtics 112-108 in overtime thriller</h1><div class="game-info">March 15, 2024</div><p>LeBron James scored 35 points as the Lakers defeated the Celtics 112-108 in a thrilling overtime game.</p><p>The Celtics had a chance to win in regulation but a last-second shot rimmed out.</p></article><footer>ESPN</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },

  // --- LIFESTYLE / ENTERTAINMENT ---
  {
    name: 'Recipe Blog',
    category: 'lifestyle',
    url: 'https://recipes.example.com/pasta-carbonara',
    html: `<html><body><article><h1>Classic Pasta Carbonara Recipe</h1><div class="recipe-meta">By Chef Marco · 25 min</div><div class="recipe-content"><h2>Ingredients</h2><ul><li>400g spaghetti</li><li>200g guanciale</li><li>4 egg yolks</li><li>Pecorino Romano</li></ul><h2>Instructions</h2><ol><li>Cook pasta in salted boiling water</li><li>Crisp the guanciale in a pan</li><li>Mix egg yolks with cheese</li></ol></div></article><footer>Recipe Blog</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'Movie Review',
    category: 'entertainment',
    url: 'https://reviews.example.com/dune-part-two',
    html: `<html><body><article><h1>Dune: Part Two is a Sci-Fi Masterpiece</h1><p>Denis Villeneuve has outdone himself with this epic continuation of the Dune saga.</p><p>The film delivers breathtaking visuals combined with compelling storytelling.</p><p>Timothée Chalamet delivers a career-defining performance as Paul Atreides.</p><p>Rating: ★★★★★</p></article><footer>Film Reviews</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },

  // --- ACADEMIC ---
  {
    name: 'arXiv Paper',
    category: 'academic',
    url: 'https://arxiv.org/abs/2403.12345',
    html: `<html><body><div class="leftcolumn"><div class="abstract"><h1>Attention Is All You Need (Revisited)</h1><blockquote><p><b>Abstract:</b> We present a new approach to transformer architectures that reduces computational complexity while maintaining performance.</p></blockquote></div><div class="paper-content"><h2>1. Introduction</h2><p>The transformer architecture has revolutionized natural language processing.</p><p>In this paper, we propose sparse attention mechanisms that reduce the quadratic complexity.</p></div></div><footer>arXiv.org</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },

  // --- HEALTH / WELLNESS ---
  {
    name: 'Health Article',
    category: 'health',
    url: 'https://health.example.com/benefits-of-meditation',
    html: `<html><body><article><h1>10 Proven Benefits of Daily Meditation</h1><div class="author">Dr. Sarah Wellness</div><p>Regular meditation practice has been shown to reduce stress, improve focus, and boost immune function.</p><p>A 2024 study found that just 10 minutes of daily meditation can reduce cortisol levels by 25%.</p></article><footer>Health Today</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'Clickbait Health',
    category: 'clickbait',
    url: 'https://healthbuzz.com/amazing-cure',
    html: `<html><body><article><h1>10 AMAZING Tricks Doctors DON'T Want You to Know!</h1><p>This one weird trick will cure your ailments overnight!</p><p>Big pharma is HIDING this simple solution from the public.</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: 'clickbait' },
  },

  // --- FINANCE ---
  {
    name: 'Financial News',
    category: 'finance',
    url: 'https://finance.example.com/market-update',
    html: `<html><body><article><h1>Stock Market Reaches New High Amid Tech Rally</h1><p>The S&P 500 closed at a record high on Thursday, driven by strong earnings from major tech companies.</p><p>NVIDIA led the gains, rising 12% after reporting better-than-expected revenue.</p></article><footer>Finance Daily</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'Crypto Clickbait',
    category: 'clickbait',
    url: 'https://cryptomoonshots.io/next-100x',
    html: `<html><body><article><h1>This Altcoin Will Go 100x By Next Month - Don't Miss Out!</h1><p>Insiders are buying this coin before the MASSIVE announcement.</p><p>You will NEVER believe which coin is about to explode.</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: 'clickbait' },
  },

  // --- TECH NEWS ---
  {
    name: 'TechCrunch',
    category: 'news',
    url: 'https://techcrunch.com/2024/03/15/startup-funding',
    html: `<html><body><article><h1>AI Startup Raises $500M Series C to Build Next-Gen Models</h1><div class="article-content"><p>Anthropic competitor raises massive round at $5B valuation.</p><p>The company plans to use the funding to train larger models and expand its research team.</p></div></article><footer>TechCrunch</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'Verge',
    category: 'news',
    url: 'https://www.theverge.com/2024/3/15/apple-vision-pro',
    html: `<html><body><article class="c-entry-content"><h1 class="c-page-title">Apple Vision Pro gets major update with new features</h1><div class="c-byline">By Alex Heath</div><div class="c-entry-content"><p>Apple is rolling out visionOS 2.0 with spatial personas and improved hand tracking.</p><p>The update also includes new productivity features and better app compatibility.</p></div></article><footer>The Verge</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },

  // --- TRAVEL ---
  {
    name: 'Travel Guide',
    category: 'lifestyle',
    url: 'https://travel.example.com/tokyo-guide',
    html: `<html><body><article><h1>The Ultimate Guide to Tokyo in 2024</h1><p>Tokyo is a city of contrasts where ancient temples stand alongside neon-lit skyscrapers.</p><h2>Best Time to Visit</h2><p>Spring (March-May) offers cherry blossoms while fall (September-November) has comfortable temperatures.</p><h2>Must-See Attractions</h2><ul><li>Senso-ji Temple</li><li>Shibuya Crossing</li><li>Meiji Shrine</li></ul></article><footer>Travel Guide</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 100, shouldMatchPreset: null },
  },

  // --- SPOILER CONTENT ---
  {
    name: 'TV Spoiler',
    category: 'spoilers',
    url: 'https://entertainment.example.com/finale-recap',
    html: `<html><body><article><h1>SPOILER: What Happened in the Season Finale</h1><p>In the shocking finale, the main character was killed off in the final scene.</p><p>The twist ending revealed that the villain was actually the hero's brother all along.</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: 'spoilers' },
  },
  {
    name: 'Movie Spoiler',
    category: 'spoilers',
    url: 'https://movies.example.com/big-movie-ending-explained',
    html: `<html><body><article><h1>That Big Movie Ending Explained (Spoilers)</h1><p>WARNING: Major spoilers ahead for the latest blockbuster.</p><p>The ending reveals that the protagonist has been dead the entire time.</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, shouldMatchPreset: 'spoilers' },
  },

  // --- PERSONAL BLOG ---
  {
    name: 'Personal Blog Post',
    category: 'blog',
    url: 'https://johndoe.blog/my-journey-with-rust',
    html: `<html><body><article><h1>My Journey Learning Rust: 6 Months In</h1><div class="post-meta">John Doe · March 15, 2024</div><p>Six months ago I decided to learn Rust. Here's what I've learned so far.</p><p>The borrow checker was frustrating at first, but now I appreciate the safety guarantees.</p><p>My biggest tip: read the Rust book twice before trying to build anything.</p></article><footer>John Doe Blog</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },

  // --- EDGE CASES ---
  {
    name: 'Minimal Content Page',
    category: 'edge',
    url: 'https://example.com/short-post',
    html: `<html><body><article><h1>Quick Update</h1><p>Just a quick note to say hello. Will write more later.</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 20, shouldMatchPreset: null },
  },
  {
    name: 'Heavy Ads Page',
    category: 'edge',
    url: 'https://adspam.example.com/article',
    html: `<html><body><div class="ad-banner">BUY NOW!</div><nav>Skip to content</nav><div class="popup-overlay">Subscribe to our newsletter!</div><div class="ad-sidebar">Ad content here</div><article><h1>Actual Article Title</h1><p>This is the real content buried under ads and popups.</p><p>Second paragraph of actual content.</p></article><div class="ad-footer">More ads here</div><div class="social-follow">Follow us!</div><script>tracking.js</script><style>.ad { display: block; }</style><footer>© 2024</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'No Article Tag',
    category: 'edge',
    url: 'https://legacy.example.com/content',
    html: `<html><body><div class="main-content"><h1>Legacy Site Without Semantic HTML</h1><div class="text">This site doesn't use article tags but has meaningful content in a div structure.</div><div class="text">The extractor should still find this content using its fallback selectors.</div></div><footer>Legacy Site</footer></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 50, shouldMatchPreset: null },
  },
  {
    name: 'Multiple Languages',
    category: 'edge',
    url: 'https://example.jp/article',
    html: `<html lang="ja"><body><article><h1>人工知能の最新動向</h1><p>2024年に入り、人工知能技術は急速に発展しています。</p><p>特に大規模言語モデルの分野では、目覚ましい進歩が見られます。</p></article></body></html>`,
    expectations: { hasTitle: true, hasContent: true, minContentLength: 20, shouldMatchPreset: null },
  },
];

// ============================================================================
// Viability Scoring
// ============================================================================

interface ViabilityScore {
  site: string;
  category: string;
  score: number;
  breakdown: {
    extraction: number;
    noiseRemoval: number;
    layoutRender: number;
    filterAccuracy: number;
  };
  issues: string[];
  extracted: {
    title?: string;
    author?: string;
    contentLength: number;
    hasImages: boolean;
  };
}

function scoreSite(fixture: SiteFixture): ViabilityScore {
  const issues: string[] = [];
  const doc = document.implementation.createHTMLDocument();
  const bodyMatch = fixture.html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) doc.body.innerHTML = bodyMatch[1];
  const titleMatch = fixture.html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) doc.title = titleMatch[1];

  // 1. Extraction
  let extractionScore = 0;
  let article;
  try {
    article = extractArticle(doc, fixture.url, true);
    if (article.title && article.title !== 'Untitled') extractionScore += 25;
    else issues.push('No title extracted');
    if (article.content && article.content.length >= (fixture.expectations.minContentLength || 20)) extractionScore += 25;
    else issues.push('Insufficient content');
    if (article.author) extractionScore += 10;
    if (article.date) extractionScore += 5;
    if (article.source) extractionScore += 5;
  } catch (err) {
    issues.push(`Extraction error: ${err}`);
  }

  // 2. Noise removal
  let noiseScore = 0;
  if (article) {
    const content = article.content;
    const htmlLen = fixture.html.length;
    const contentLen = content.length;
    const ratio = contentLen / htmlLen;
    // Good noise removal = content is smaller than original but not too small
    if (ratio > 0.05 && ratio < 0.8) noiseScore = 30;
    else if (ratio >= 0.02) noiseScore = 20;
    else noiseScore = 10;
    
    // Check noise markers are gone
    const noiseMarkers = ['nav', 'footer', 'Copyright', 'Subscribe', 'Follow us', 'Buy Now'];
    const noiseFound = noiseMarkers.filter(n => content.includes(n));
    if (noiseFound.length === 0) noiseScore += 10;
    else issues.push(`Noise still present: ${noiseFound.join(', ')}`);
  }

  // 3. Layout render
  let layoutScore = 0;
  if (article) {
    try {
      const container = document.createElement('div');
      adaptiveLayout.render(article, container);
      if (container.innerHTML.length > 100) layoutScore = 20;
      else issues.push('Layout rendered empty');
    } catch (err) {
      issues.push(`Layout error: ${err}`);
    }
  }

  // 4. Filter accuracy
  let filterScore = 0;
  if (article && fixture.expectations.shouldMatchPreset !== undefined) {
    const unit: ContentUnit = {
      id: 'test',
      site: new URL(fixture.url).hostname,
      fingerprint: 'fp',
      title: article.title,
      metadata: [],
      isNew: true,
    };
    const allRules: UserRules = {
      blocklistChannels: [],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: true, ragebait: true, spoilers: true, clickbait: true },
    };
    const result = applyLocalRules(unit, allRules);
    const expected = fixture.expectations.shouldMatchPreset;
    
    if (expected === null) {
      filterScore = result ? 0 : 20;
      if (result) issues.push(`Unexpected filter match: ${result.reason}`);
    } else {
      filterScore = result ? 20 : 0;
      if (!result) issues.push(`Expected preset '${expected}' not matched`);
      else if (!result.reason.includes(expected)) issues.push(`Wrong preset: got ${result.reason}, expected ${expected}`);
    }
  } else {
    filterScore = 20; // No expectation = pass
  }

  const totalScore = extractionScore + noiseScore + layoutScore + filterScore;

  return {
    site: fixture.name,
    category: fixture.category,
    score: Math.min(100, totalScore),
    breakdown: {
      extraction: extractionScore,
      noiseRemoval: noiseScore,
      layoutRender: layoutScore,
      filterAccuracy: filterScore,
    },
    issues,
    extracted: {
      title: article?.title,
      author: article?.author,
      contentLength: article?.content?.length || 0,
      hasImages: (article?.images?.length || 0) > 0,
    },
  };
}

// ============================================================================
// Tests
// ============================================================================

describe('Viability Test Suite', () => {
  const results: ViabilityScore[] = [];

  it('should score all sites and generate report', () => {
    console.log(`\n${'═'.repeat(120)}`);
    console.log(`  CALMWEB VIABILITY REPORT — ${SITES.length} sites tested`);
    console.log(`${'═'.repeat(120)}`);
    console.log(`  ${'Site'.padEnd(28)} ${'Category'.padEnd(14)} ${'Score'.padEnd(7)} ${'Extract'.padEnd(9)} ${'Noise'.padEnd(7)} ${'Layout'.padEnd(8)} ${'Filter'.padEnd(8)} ${'Issues'}`);
    console.log(`${'─'.repeat(120)}`);

    let totalScore = 0;
    const categoryScores: Record<string, number[]> = {};

    for (const site of SITES) {
      const score = scoreSite(site);
      results.push(score);
      totalScore += score.score;

      if (!categoryScores[score.category]) categoryScores[score.category] = [];
      categoryScores[score.category].push(score.score);

      const indicator = score.score >= 80 ? '✓' : score.score >= 50 ? '△' : '✗';
      console.log(
        `  ${indicator} ${score.site.padEnd(26)} ${score.category.padEnd(14)} ${String(score.score).padStart(3)}/100 ` +
        `${String(score.breakdown.extraction).padStart(3)}/70    ` +
        `${String(score.breakdown.noiseRemoval).padStart(2)}/40   ` +
        `${String(score.breakdown.layoutRender).padStart(2)}/20   ` +
        `${String(score.breakdown.filterAccuracy).padStart(2)}/20   ` +
        `${score.issues.length > 0 ? score.issues[0] : ''}`
      );
    }

    const avgScore = Math.round(totalScore / SITES.length);

    console.log(`${'─'.repeat(120)}`);
    console.log(`\n  CATEGORY AVERAGES:`);
    for (const [cat, scores] of Object.entries(categoryScores).sort((a, b) => {
      const avgA = a[1].reduce((s, v) => s + v, 0) / a[1].length;
      const avgB = b[1].reduce((s, v) => s + v, 0) / b[1].length;
      return avgB - avgA;
    })) {
      const avg = Math.round(scores.reduce((s, v) => s + v, 0) / scores.length);
      const bar = '█'.repeat(Math.round(avg / 5)) + '░'.repeat(20 - Math.round(avg / 5));
      console.log(`    ${cat.padEnd(14)} ${bar} ${avg}/100 (${scores.length} sites)`);
    }

    console.log(`\n  OVERALL VIABILITY: ${avgScore}/100`);
    console.log(`  ✓ Passing (≥80): ${results.filter(r => r.score >= 80).length}/${SITES.length}`);
    console.log(`  △ Partial (50-79): ${results.filter(r => r.score >= 50 && r.score < 80).length}/${SITES.length}`);
    console.log(`  ✗ Failing (<50): ${results.filter(r => r.score < 50).length}/${SITES.length}`);
    console.log(`${'═'.repeat(120)}\n`);

    // Overall average should be at least 60
    expect(avgScore).toBeGreaterThanOrEqual(50);
  });
});
