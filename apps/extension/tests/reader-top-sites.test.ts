/**
 * Top 1000 Sites Reader Test
 * 
 * Tests reader against realistic page structures found on the world's
 * most popular websites. Based on actual page templates and structures.
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';
import { autoDetectLayout } from '../src/renderer/layouts';

interface SiteTemplate {
  site: string;
  category: string;
  url: string;
  html: string;
  minContentLength: number;
}

// Helper to create a DOM document
function createDoc(html: string, title = 'Test'): Document {
  const doc = document.implementation.createHTMLDocument(title);
  doc.body.innerHTML = html;
  return doc;
}

// Helper to run extraction test
function testSite(template: SiteTemplate) {
  const doc = createDoc(template.html, template.url);
  const article = extractArticle(doc, template.url, true);
  const layout = autoDetectLayout(article);
  
  const container = document.createElement('div');
  const header = document.createElement('div');
  const footer = document.createElement('div');
  
  let error: Error | null = null;
  try {
    layout.render(article, container, {}, { header, footer });
  } catch (e) {
    error = e as Error;
  }
  
  return {
    article,
    container,
    header,
    footer,
    error,
    success: !error,
    contentLength: article.content.length,
  };
}

// ============================================================================
// TOP 1000 SITE TEMPLATES (grouped by category)
// ============================================================================

const SITE_TEMPLATES: SiteTemplate[] = [
  // ==========================================================================
  // SEARCH ENGINES
  // ==========================================================================
  {
    site: 'google.com',
    category: 'Search Engine',
    url: 'https://www.google.com/search?q=test',
    html: `
      <html><body>
        <div class="main">
          <h1 class="search">Search Results for "test"</h1>
          <div class="result">
            <h3><a href="/url1">Result Title One</a></h3>
            <p>This is the snippet for the first search result showing relevant content.</p>
          </div>
          <div class="result">
            <h3><a href="/url2">Result Title Two</a></h3>
            <p>Another snippet describing the second result with useful information.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'bing.com',
    category: 'Search Engine',
    url: 'https://www.bing.com/search?q=test',
    html: `
      <html><body>
        <div id="b_content">
          <h2 id="title">Search Results</h2>
          <li class="sa_item">
            <h3><a href="/url1">First Result</a></h3>
            <p>Snippet describing the first search result.</p>
          </li>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },

  // ==========================================================================
  // SOCIAL MEDIA
  // ==========================================================================
  {
    site: 'twitter.com / x.com',
    category: 'Social Media',
    url: 'https://twitter.com/user/status/123',
    html: `
      <html><body>
        <article class="main-tweet">
          <h1 class="tweet-title">Tweet by @user</h1>
          <div class="tweet-content">
            <p>This is the full text of the tweet that was posted by the user on the platform.</p>
          </div>
        </article>
        <div class="replies">
          <h2>Replies</h2>
          <p>First reply to the tweet with additional commentary.</p>
        </div>
      </body></html>
    `,
    minContentLength: 80,
  },
  {
    site: 'facebook.com',
    category: 'Social Media',
    url: 'https://www.facebook.com/user/posts/123',
    html: `
      <html><body>
        <div class="userpost">
          <h1 class="post-title">Post by User</h1>
          <div class="post-content">
            <p>The main content of the Facebook post as written by the user.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'instagram.com',
    category: 'Social Media',
    url: 'https://www.instagram.com/p/ABC123/',
    html: `
      <html><body>
        <article class="post">
          <div class="caption">
            <p>Caption text describing the photo posted by the user.</p>
          </div>
          <div class="comments">
            <p>User comment on the post.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 40,
  },
  {
    site: 'linkedin.com',
    category: 'Social Media',
    url: 'https://www.linkedin.com/posts/user-123',
    html: `
      <html><body>
        <article class="post">
          <h1 class="post-title">Post by User</h1>
          <div class="post-content">
            <p>The main content of the LinkedIn post discussing professional topics.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'reddit.com',
    category: 'Social Media',
    url: 'https://www.reddit.com/r/programming/comments/abc',
    html: `
      <html><body>
        <article class="post">
          <h1 class="title">Post Title</h1>
          <div class="usertext">
            <p>The main content of the Reddit post as written by the author.</p>
          </div>
        </article>
        <section class="comments">
          <h2>Comments</h2>
          <p>A comment on the Reddit post providing additional perspective.</p>
        </section>
      </body></html>
    `,
    minContentLength: 60,
  },
  {
    site: 'tiktok.com',
    category: 'Social Media',
    url: 'https://www.tiktok.com/@user/video/123',
    html: `
      <html><body>
        <div class="video-info">
          <h1 class="title">Video Title</h1>
          <div class="description">
            <p>Description of the TikTok video content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 30,
  },

  // ==========================================================================
  // VIDEO / STREAMING
  // ==========================================================================
  {
    site: 'youtube.com',
    category: 'Video',
    url: 'https://www.youtube.com/watch?v=abc123',
    html: `
      <html><body>
        <div class="watch-main-col">
          <h1 class="title">Video Title</h1>
          <div class="description">
            <p>Description of the YouTube video with important details.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 40,
  },
  {
    site: 'netflix.com',
    category: 'Streaming',
    url: 'https://www.netflix.com/title/123456',
    html: `
      <html><body>
        <div class="hero-detail">
          <h1 class="title">Movie or Show Title</h1>
          <div class="synopsis">
            <p>A detailed synopsis of the movie or show describing the plot.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 60,
  },
  {
    site: 'twitch.tv',
    category: 'Streaming',
    url: 'https://www.twitch.tv/user',
    html: `
      <html><body>
        <div class="stream-info">
          <h1 class="channel-name">Channel Title</h1>
          <div class="about">
            <p>Channel description and information about the streamer.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 40,
  },
  {
    site: 'hulu.com',
    category: 'Streaming',
    url: 'https://www.hulu.com/movies/title',
    html: `
      <html><body>
        <div class="details">
          <h1 class="title">Hulu Title</h1>
          <p class="description">Description of the Hulu content.</p>
        </div>
      </body></html>
    `,
    minContentLength: 40,
  },
  {
    site: 'disneyplus.com',
    category: 'Streaming',
    url: 'https://www.disneyplus.com/title/123',
    html: `
      <html><body>
        <div class="detail-page">
          <h1 class="title">Disney+ Title</h1>
          <div class="description">
            <p>Description of the Disney+ movie or show.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 40,
  },
  {
    site: 'hbomax.com',
    category: 'Streaming',
    url: 'https://www.max.com/title/abc',
    html: `
      <html><body>
        <div class="title-detail">
          <h1 class="title">Max Title</h1>
          <div class="synopsis">
            <p>Synopsis of the HBO Max content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 40,
  },

  // ==========================================================================
  // E-COMMERCE
  // ==========================================================================
  {
    site: 'amazon.com',
    category: 'E-Commerce',
    url: 'https://www.amazon.com/dp/B09V3KXJPB',
    html: `
      <html><body>
        <div class="product-detail">
          <h1 class="product-title">Product Title</h1>
          <div class="product-description">
            <p>Detailed description of the Amazon product features and specifications.</p>
          </div>
          <div class="feature-bullets">
            <p>Feature one of the product being sold.</p>
            <p>Feature two of the product being sold.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'ebay.com',
    category: 'E-Commerce',
    url: 'https://www.ebay.com/itm/123456',
    html: `
      <html><body>
        <div class="item-detail">
          <h1 class="x-item-title">Item Title</h1>
          <div class="x-item-description">
            <p>Description of the eBay listing item.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'walmart.com',
    category: 'E-Commerce',
    url: 'https://www.walmart.com/ip/123456',
    html: `
      <html><body>
        <div class="product-main">
          <h1 class="prod-title">Product Title</h1>
          <div class="about-desc">
            <p>Product description from Walmart.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'target.com',
    category: 'E-Commerce',
    url: 'https://www.target.com/p/12345',
    html: `
      <html><body>
        <div class="h-100">
          <h1 class="Heading">Product Title</h1>
          <div class="description">
            <p>Target product description and details.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'bestbuy.com',
    category: 'E-Commerce',
    url: 'https://www.bestbuy.com/site/12345.p',
    html: `
      <html><body>
        <div class="shop-content">
          <h1 class="sku-title">Product Title</h1>
          <div class="shop-description">
            <p>Best Buy product description with technical specs.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 60,
  },
  {
    site: 'aliexpress.com',
    category: 'E-Commerce',
    url: 'https://www.aliexpress.com/item/123456.html',
    html: `
      <html><body>
        <div class="product-detail">
          <h1 class="product-title">Product Title</h1>
          <div class="product-description">
            <p>AliExpress product description from the seller.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'etsy.com',
    category: 'E-Commerce',
    url: 'https://www.etsy.com/listing/123456',
    html: `
      <html><body>
        <div class="listing-page">
          <h1 class="listing-title">Item Title</h1>
          <div class="description">
            <p>Handmade item description from the Etsy seller.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 60,
  },
  {
    site: 'shopify-stores',
    category: 'E-Commerce',
    url: 'https://shop.example.com/products/title',
    html: `
      <html><body>
        <div class="product-section">
          <h1 class="product-title">Product Title</h1>
          <div class="product-description">
            <p>Product description from a Shopify store.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },

  // ==========================================================================
  // NEWS / MEDIA
  // ==========================================================================
  {
    site: 'cnn.com',
    category: 'News',
    url: 'https://www.cnn.com/2024/01/15/media/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Article Headline</h1>
          <div class="article-content">
            <p>The main article content describing the news story in detail.</p>
            <p>Additional paragraphs providing more context and information.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'bbc.com',
    category: 'News',
    url: 'https://www.bbc.com/news/world-12345678',
    html: `
      <html><body>
        <article class="article">
          <h1 class="bbc-headline">Headline</h1>
          <div class="bbc-article-body">
            <p>Article content from BBC News with detailed reporting.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'nytimes.com',
    category: 'News',
    url: 'https://www.nytimes.com/2024/01/15/world/region/story',
    html: `
      <html><body>
        <article class="story">
          <h1 class="headline">Article Headline</h1>
          <section class="article-content">
            <p>New York Times article content with in-depth reporting.</p>
          </section>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'washingtonpost.com',
    category: 'News',
    url: 'https://www.washingtonpost.com/news/story',
    html: `
      <html><body>
        <article class="article'>
          <h1 class="headline">Headline</h1>
          <div class="article-body">
            <p>Washington Post article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'theguardian.com',
    category: 'News',
    url: 'https://www.theguardian.com/news/2024/jan/15/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Headline</h1>
          <div class="article-body">
            <p>The Guardian article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'foxnews.com',
    category: 'News',
    url: 'https://www.foxnews.com/politics/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Article Headline</h1>
          <div class="article-content">
            <p>Fox News article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'msnbc.com',
    category: 'News',
    url: 'https://www.msnbc.com/news/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Headline</h1>
          <div class="article-body">
            <p>MSNBC article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'huffpost.com',
    category: 'News',
    url: 'https://www.huffpost.com/entry/story',
    html: `
      <html><body>
        <article>
          <h1 class="headline">Headline</h1>
          <div class="entry-content">
            <p>HuffPost article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'news.ycombinator.com',
    category: 'News',
    url: 'https://news.ycombinator.com/item?id=123456',
    html: `
      <html><body>
        <tr class="athing">
          <div class="comment">
            <span class="commtext">A HN story about an interesting topic.</span>
          </div>
        </tr>
      </body></html>
    `,
    minContentLength: 40,
  },
  {
    site: 'reuters.com',
    category: 'News',
    url: 'https://www.reuters.com/world/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Reuters Headline</h1>
          <div class="article-body">
            <p>Reuters news article content with factual reporting.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'apnews.com',
    category: 'News',
    url: 'https://apnews.com/article/abc123',
    html: `
      <html><body>
        <article class="Article">
          <h1 class="headline">AP News Headline</h1>
          <div class="ArticleBody">
            <p>Associated Press news article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'bloomberg.com',
    category: 'News',
    url: 'https://www.bloomberg.com/news/articles/123',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Bloomberg Headline</h1>
          <div class="article-body">
            <p>Bloomberg news article about markets and business.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'wsj.com',
    category: 'News',
    url: 'https://www.wsj.com/articles/title-123',
    html: `
      <html><body>
        <article class="article">
          <h1 class="wsj-headline">Headline</h1>
          <div class="wsj-article-body">
            <p>Wall Street Journal article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'usatoday.com',
    category: 'News',
    url: 'https://www.usatoday.com/story/news/2024/01/15/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Headline</h1>
          <div class="piano-article-content">
            <p>USA Today article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'nbcnews.com',
    category: 'News',
    url: 'https://www.nbcnews.com/news/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">NBC News Headline</h1>
          <div class="article-body">
            <p>NBC News article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'abcnews.com',
    category: 'News',
    url: 'https://abcnews.go.com/News/story',
    html: `
      <html><body>
        <article class="Article">
          <h1 class="headline">ABC News Headline</h1>
          <div class="ArticleBody">
            <p>ABC News article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'cbsnews.com',
    category: 'News',
    url: 'https://www.cbsnews.com/news/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">CBS News Headline</h1>
          <div class="article-body">
            <p>CBS News article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },

  // ==========================================================================
  // WIKIPEDIA / KNOWLEDGE
  // ==========================================================================
  {
    site: 'wikipedia.org',
    category: 'Knowledge',
    url: 'https://en.wikipedia.org/wiki/Quantum_computing',
    html: `
      <html><body>
        <div id="content">
          <h1 id="firstHeading">Quantum Computing</h1>
          <div id="bodyContent">
            <div class="mw-parser-output">
              <p>Quantum computing is a type of computation that harnesses quantum mechanical phenomena.</p>
              <h2>History</h2>
              <p>The field began in 1980 when Paul Benioff proposed a quantum mechanical model.</p>
            </div>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'wiktionary.org',
    category: 'Knowledge',
    url: 'https://en.wiktionary.org/wiki/test',
    html: `
      <html><body>
        <div class="mw-parser-output">
          <h1 class="firstHeading">Test</h1>
          <div class="description">
            <p>A definition of the word test.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'wikihow.com',
    category: 'Knowledge',
    url: 'https://www.wikihow.com/Do-Something',
    html: `
      <html><body>
        <article class="article">
          <h1 class="title">How to Do Something</h1>
          <div class="step">
            <p>First step of the tutorial.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'britannica.com',
    category: 'Knowledge',
    url: 'https://www.britannica.com/topic/topic-name',
    html: `
      <html><body>
        <article class="topic-article">
          <h1 class="topic-title">Topic Title</h1>
          <div class="topic-content">
            <p>Britannica article content with encyclopedic information.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'stackoverflow.com',
    category: 'Knowledge',
    url: 'https://stackoverflow.com/questions/12345678',
    html: `
      <html><body>
        <div id="question">
          <h1 class="question-h1">Question Title</h1>
          <div class="post-text">
            <p>The question being asked by the developer.</p>
          </div>
        </div>
        <div id="answers">
          <div class="answer">
            <div class="post-text">
              <p>An answer to the question providing a solution.</p>
            </div>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'quora.com',
    category: 'Knowledge',
    url: 'https://www.quora.com/What-is-the-answer-to',
    html: `
      <html><body>
        <div class="q-text">
          <h1 class="question_title">What is the answer to this question?</h1>
          <div class="answer">
            <p>An answer providing useful information.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'medium.com',
    category: 'Knowledge',
    url: 'https://medium.com/@user/article-title',
    html: `
      <html><body>
        <article class="post-article">
          <h1 class="graf--title">Article Title</h1>
          <div class="post-content">
            <p>Medium article content by the author.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'dev.to',
    category: 'Knowledge',
    url: 'https://dev.to/user/article-title',
    html: `
      <html><body>
        <article class="article">
          <h1 class="crayons-title">Article Title</h1>
          <div class="crayons-article-main">
            <p>Dev.to article content about programming.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },

  // ==========================================================================
  // BLOGS
  // ==========================================================================
  {
    site: 'wordpress.com',
    category: 'Blog',
    url: 'https://blog.example.com/post-title',
    html: `
      <html><body>
        <article class="post">
          <h1 class="entry-title">Post Title</h1>
          <div class="entry-content">
            <p>WordPress blog post content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'substack.com',
    category: 'Blog',
    url: 'https://newsletter.substack.com/p/title',
    html: `
      <html><body>
        <article class="letter">
          <h1 class="post-title">Newsletter Title</h1>
          <div class="body">
            <p>Substack newsletter content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'ghost.org',
    category: 'Blog',
    url: 'https://blog.example.com/title',
    html: `
      <html><body>
        <article class="post">
          <h1 class="post-title">Post Title</h1>
          <div class="post-content">
            <p>Ghost blog content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'substack-like',
    category: 'Blog',
    url: 'https://newsletter.example.com/p/title',
    html: `
      <html><body>
        <main class="letter">
          <h1 class="title">Newsletter Title</h1>
          <div class="content">
            <p>Newsletter content in typical format.</p>
          </div>
        </main>
      </body></html>
    `,
    minContentLength: 150,
  },

  // ==========================================================================
  // DOCUMENTATION / TECH
  // ==========================================================================
  {
    site: 'github.com',
    category: 'Documentation',
    url: 'https://github.com/user/repo/blob/main/README.md',
    html: `
      <html><body>
        <article class="markdown-body">
          <h1>Repository README</h1>
          <p>Description of the GitHub repository and how to use it.</p>
          <h2>Installation</h2>
          <p>How to install the project dependencies.</p>
        </article>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'developer.mozilla.org',
    category: 'Documentation',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    html: `
      <html><body>
        <article class="Article">
          <h1 class="page-title">JavaScript Guide</h1>
          <div class="wikiArticle">
            <p>MDN documentation about JavaScript programming language.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'docs.microsoft.com',
    category: 'Documentation',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    html: `
      <html><body>
        <article class="docs">
          <h1 class="title">C# Documentation</h1>
          <div class="content">
            <p>Microsoft documentation for C# programming.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'docs.python.org',
    category: 'Documentation',
    url: 'https://docs.python.org/3/tutorial/',
    html: `
      <html><body>
        <div class="body">
          <section class="section">
            <h1>Python Tutorial</h1>
            <p>The Python tutorial documentation content.</p>
          </section>
        </div>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'react.dev',
    category: 'Documentation',
    url: 'https://react.dev/learn',
    html: `
      <html><body>
        <article class="prose">
          <h1>React Tutorial</h1>
          <p>Learn React documentation and tutorial content.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'vuejs.org',
    category: 'Documentation',
    url: 'https://vuejs.org/guide/',
    html: `
      <html><body>
        <article class="content">
          <h1>Vue.js Guide</h1>
          <p>Vue.js documentation content.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'angular.io',
    category: 'Documentation',
    url: 'https://angular.io/guide/intro',
    html: `
      <html><body>
        <article class="content">
          <h1 class="title">Angular Guide</h1>
          <p>Angular documentation content.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'nextjs.org',
    category: 'Documentation',
    url: 'https://nextjs.org/docs',
    html: `
      <html><body>
        <article class="docs">
          <h1 class="title">Next.js Documentation</h1>
          <p>Next.js framework documentation.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'nodejs.org',
    category: 'Documentation',
    url: 'https://nodejs.org/en/docs/',
    html: `
      <html><body>
        <article class="document">
          <h1>Node.js Documentation</h1>
          <p>Node.js API documentation and guides.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'tailwindcss.com',
    category: 'Documentation',
    url: 'https://tailwindcss.com/docs',
    html: `
      <html><body>
        <article class="content">
          <h1>Tailwind CSS Documentation</h1>
          <p>Tailwind CSS utility-first CSS framework documentation.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'getbootstrap.com',
    category: 'Documentation',
    url: 'https://getbootstrap.com/docs/5.3/getting-started/',
    html: `
      <html><body>
        <article class="bd-content">
          <h1>Bootstrap Getting Started</h1>
          <p>Bootstrap documentation content.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'rust-lang.org',
    category: 'Documentation',
    url: 'https://doc.rust-lang.org/book/',
    html: `
      <html><body>
        <main class="page">
          <h1>The Rust Programming Language Book</h1>
          <p>The official Rust book documentation.</p>
        </main>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'golang.org',
    category: 'Documentation',
    url: 'https://go.dev/doc/',
    html: `
      <html><body>
        <article class="document">
          <h1>Go Documentation</h1>
          <p>Go programming language documentation.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'typescriptlang.org',
    category: 'Documentation',
    url: 'https://www.typescriptlang.org/docs/',
    html: `
      <html><body>
        <article class="content">
          <h1>TypeScript Documentation</h1>
          <p>TypeScript language documentation and handbook.</p>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'deno.land',
    category: 'Documentation',
    url: 'https://deno.land/manual',
    html: `
      <html><body>
        <main class="manual">
          <h1>Deno Manual</h1>
          <p>Deno runtime documentation.</p>
        </main>
      </body></html>
    `,
    minContentLength: 150,
  },

  // ==========================================================================
  // GOVERNMENT / EDUCATION
  // ==========================================================================
  {
    site: 'nih.gov',
    category: 'Government',
    url: 'https://www.nih.gov/health-topics/nutrition',
    html: `
      <html><body>
        <article class="article">
          <h1 class="title">Health Topic Title</h1>
          <div class="content">
            <p>NIH health information article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'cdc.gov',
    category: 'Government',
    url: 'https://www.cdc.gov/health-topics/illness',
    html: `
      <html><body>
        <article class="cdc-article">
          <h1 class="cdcheadline">Health Topic</h1>
          <div class="body">
            <p>CDC health information content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'gov.uk',
    category: 'Government',
    url: 'https://www.gov.uk/guidance/topic',
    html: `
      <html><body>
        <article class="gem-c-article">
          <h1 class="gem-c-title__text">Guidance Title</h1>
          <div class="gem-c-article">
            <p>UK government guidance content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'irs.gov',
    category: 'Government',
    url: 'https://www.irs.gov/taxtopics/tc100',
    html: `
      <html><body>
        <article class="IRS-content">
          <h1>Tax Topic Title</h1>
          <div class="body">
            <p>IRS tax information content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'courts.ca.gov',
    category: 'Government',
    url: 'https://www.courts.ca.gov/courts.htm',
    html: `
      <html><body>
        <article class="court-page">
          <h1 class="page-title">Court Information</h1>
          <div class="content">
            <p>California courts information.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'ed.gov',
    category: 'Education',
    url: 'https://www.ed.gov/about/ed-initiatives',
    html: `
      <html><body>
        <article class="content">
          <h1 class="title">Education Initiative</h1>
          <div class="body">
            <p>Department of Education content about initiatives.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'khanacademy.org',
    category: 'Education',
    url: 'https://www.khanacademy.org/science/biology',
    html: `
      <html><body>
        <article class="article">
          <h1>Biology Course</h1>
          <div class="description">
            <p>Khan Academy educational content description.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'coursera.org',
    category: 'Education',
    url: 'https://www.coursera.org/learn/course-name',
    html: `
      <html><body>
        <div class="course-body">
          <h1>Course Title</h1>
          <div class="about">
            <p>About this Coursera course content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'wikipedia-schools',
    category: 'Education',
    url: 'https://schools.wikipedia.org/wiki/Topic',
    html: `
      <html><body>
        <div class="school-content">
          <h1>Topic Title</h1>
          <p>Educational content from Wikipedia for schools.</p>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },

  // ==========================================================================
  // ENTERTAINMENT / HOBBIES
  // ==========================================================================
  {
    site: 'imdb.com',
    category: 'Entertainment',
    url: 'https://www.imdb.com/title/tt1234567/',
    html: `
      <html><body>
        <div class="title-section">
          <h1 class="title">Movie Title</h1>
          <div class="plot-summary">
            <p>IMDB movie plot summary describing the film.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'rottentomatoes.com',
    category: 'Entertainment',
    url: 'https://www.rottentomatoes.com/m/movie_title',
    html: `
      <html><body>
        <div class="panel-body">
          <h1 class="title">Movie Title</h1>
          <div class="movie_synopsis">
            <p>Rotten Tomatoes movie synopsis.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 80,
  },
  {
    site: 'metacritic.com',
    category: 'Entertainment',
    url: 'https://www.metacritic.com/movie/movie-title',
    html: `
      <html><body>
        <div class="product_page">
          <h1 class="product_title">Movie Title</h1>
          <div class=" synopsis">
            <p>Metacritic movie description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 80,
  },
  {
    site: 'ign.com',
    category: 'Entertainment',
    url: 'https://www.ign.com/articles/game-review',
    html: `
      <html><body>
        <article class="article">
          <h1 class="title">Review Title</h1>
          <div class="article-body">
            <p>IGN review content about games, movies, or shows.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'gamespot.com',
    category: 'Entertainment',
    url: 'https://www.gamespot.com/reviews/game-review',
    html: `
      <html><body>
        <article class="js-review-article">
          <h1 class="headline">Review Headline</h1>
          <div class="long-form">
            <p>GameSpot review content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'pitchfork.com',
    category: 'Entertainment',
    url: 'https://pitchfork.com/reviews/albums/title/',
    html: `
      <html><body>
        <article class="single-album">
          <h1 class="review-title">Album Title</h1>
          <div class="article-content">
            <p>Pitchfork music review content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'rollingstone.com',
    category: 'Entertainment',
    url: 'https://www.rollingstone.com/article/title',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Article Headline</h1>
          <div class="article-content">
            <p>Rolling Stone article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'variety.com',
    category: 'Entertainment',
    url: 'https://variety.com/2024/television/title-123',
    html: `
      <html><body>
        <article class="article">
          <h1 class="article-heading">Headline</h1>
          <div class="article-body">
            <p>Variety entertainment news content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'ew.com',
    category: 'Entertainment',
    url: 'https://ew.com/article/title',
    html: `
      <html><body>
        <article class="article">
          <h1 class="article-heading">Headline</h1>
          <div class="article-container">
            <p>Entertainment Weekly article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'pinterest.com',
    category: 'Entertainment',
    url: 'https://www.pinterest.com/pin/123456789/',
    html: `
      <html><body>
        <div class="pin">
          <h1 class="pinTitle">Pin Title</h1>
          <div class="pinDescription">
            <p>Description of the Pinterest pin.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 30,
  },
  {
    site: 'spotify.com',
    category: 'Entertainment',
    url: 'https://open.spotify.com/track/123',
    html: `
      <html><body>
        <div class="track-info">
          <h1>Track Title</h1>
          <p>Artist Name</p>
          <div class="description">
            <p>Track or album description from Spotify.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 40,
  },
  {
    site: 'soundcloud.com',
    category: 'Entertainment',
    url: 'https://soundcloud.com/user/track',
    html: `
      <html><body>
        <div class="soundContainer">
          <h1 class="trackTitle">Track Title</h1>
          <div class="description">
            <p>SoundCloud track description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 30,
  },

  // ==========================================================================
  // TRAVEL / RECIPE / LIFESTYLE
  // ==========================================================================
  {
    site: 'tripadvisor.com',
    category: 'Travel',
    url: 'https://www.tripadvisor.com/Attraction-Review-g123-d456',
    html: `
      <html><body>
        <div class="attraction-detail">
          <h1 class="title">Attraction Name</h1>
          <div class="description">
            <p>Description of the tourist attraction.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'airbnb.com',
    category: 'Travel',
    url: 'https://www.airbnb.com/rooms/12345',
    html: `
      <html><body>
        <div class="_1e7ybj">
          <h1 class="_fecoyn58">Listing Title</h1>
          <div class="_cgmtf1">
            <p>Description of the Airbnb listing.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'booking.com',
    category: 'Travel',
    url: 'https://www.booking.com/hotel/12345.html',
    html: `
      <html><body>
        <div class="hp__hotel-title">
          <h1 class="pp-header__title">Hotel Name</h1>
          <div class="description">
            <p>Hotel description from Booking.com.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'expedia.com',
    category: 'Travel',
    url: 'https://www.expedia.com/Hotel-Guest-Reviews/HotelId123',
    html: `
      <html><body>
        <div class="hotel-description">
          <h1>Hotel Name</h1>
          <p>Expedia hotel description.</p>
        </div>
      </body></html>
    `,
    minContentLength: 80,
  },
  {
    site: 'allrecipes.com',
    category: 'Recipe',
    url: 'https://www.allrecipes.com/recipe/12345',
    html: `
      <html><body>
        <article class="recipe">
          <h1 class="recipe-title">Recipe Title</h1>
          <div class="recipe-directions">
            <h2>Directions</h2>
            <p>Step by step cooking instructions.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'foodnetwork.com',
    category: 'Recipe',
    url: 'https://www.foodnetwork.com/recipes/recipe-name',
    html: `
      <html><body>
        <div class="o-AssetBody">
          <h1 class="o-AssetTitle">Recipe Name</h1>
          <div class="o-AssetDescription">
            <p>Food Network recipe description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'seriouseats.com',
    category: 'Recipe',
    url: 'https://www.seriouseats.com/recipe-title',
    html: `
      <html><body>
        <article class="recipe">
          <h1 class="title">Recipe Title</h1>
          <div class="recipe-content">
            <p>Serious Eats recipe content with detailed instructions.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'eatingwell.com',
    category: 'Recipe',
    url: 'https://www.eatingwell.com/recipe/12345',
    html: `
      <html><body>
        <div class="recipe-content">
          <h1>Recipe Title</h1>
          <p>EatingWell healthy recipe content.</p>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'buzzfeed.com',
    category: 'Lifestyle',
    url: 'https://www.buzzfeed.com/article/title',
    html: `
      <html><body>
        <article class="article">
          <h1 class="article-title">Article Title</h1>
          <div class="article-content">
            <p>BuzzFeed article content with listicles and features.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'vice.com',
    category: 'Lifestyle',
    url: 'https://www.vice.com/en/article/title',
    html: `
      <html><body>
        <article class="article">
          <h1 class="article__title">Article Title</h1>
          <div class="article__body">
            <p>Vice article content covering culture and lifestyle.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },

  // ==========================================================================
  // FINANCE / BUSINESS
  // ==========================================================================
  {
    site: 'finance.yahoo.com',
    category: 'Finance',
    url: 'https://finance.yahoo.com/news/title-123',
    html: `
      <html><body>
        <article class="caas-body">
          <h1 class="caas-title">Article Title</h1>
          <div class="caas-body">
            <p>Yahoo Finance article content about markets and business.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'marketwatch.com',
    category: 'Finance',
    url: 'https://www.marketwatch.com/story/title-123',
    html: `
      <html><body>
        <article class="article-body">
          <h1 class="article-headline">Headline</h1>
          <div class="article-wrap">
            <p>MarketWatch article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'investopedia.com',
    category: 'Finance',
    url: 'https://www.investopedia.com/terms/t/term.asp',
    html: `
      <html><body>
        <article class="article">
          <h1 class="title">Term Definition</h1>
          <div class="content">
            <p>Investopedia financial term definition and explanation.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'seekingalpha.com',
    category: 'Finance',
    url: 'https://seekingalpha.com/article/12345',
    html: `
      <html><body>
        <article class="article">
          <h1 class="article-title">Analysis Title</h1>
          <div class="article-content">
            <p>Seeking Alpha financial analysis content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'fool.com',
    category: 'Finance',
    url: 'https://www.fool.com/earnings/ticker/2024/01/15/title',
    html: `
      <html><body>
        <article class="article">
          <h1 class="title">Article Title</h1>
          <div class="article-content">
            <p>The Motley Fool investment advice content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'nerdwallet.com',
    category: 'Finance',
    url: 'https://www.nerdwallet.com/article/finance/title',
    html: `
      <html><body>
        <div class="article">
          <h1>Article Title</h1>
          <div class="article-content">
            <p>NerdWallet finance article content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'mint.com',
    category: 'Finance',
    url: 'https://mint.com/blog/article-title',
    html: `
      <html><body>
        <div class="blog-article">
          <h1>Article Title</h1>
          <p>Mint personal finance blog content.</p>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'glassdoor.com',
    category: 'Business',
    url: 'https://www.glassdoor.com/Overview/Company-Overview',
    html: `
      <html><body>
        <div class="mainContent">
          <h1>Company Name</h1>
          <div class="description">
            <p>Company description from Glassdoor.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'indeed.com',
    category: 'Business',
    url: 'https://www.indeed.com/cmp/Company/reviews',
    html: `
      <html><body>
        <div class="cmp-Reviews">
          <h1>Company Reviews</h1>
          <p>Company review content from Indeed.</p>
        </div>
      </body></html>
    `,
    minContentLength: 80,
  },

  // ==========================================================================
  // SPORTS
  // ==========================================================================
  {
    site: 'espn.com',
    category: 'Sports',
    url: 'https://www.espn.com/nba/story/_/id/12345678/title',
    html: `
      <html><body>
        <article class="article">
          <h1 class="article-headline">Article Headline</h1>
          <div class="article-body">
            <p>ESPN sports article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'sports.yahoo.com',
    category: 'Sports',
    url: 'https://sports.yahoo.com/news/title-123',
    html: `
      <html><body>
        <div class="article">
          <h1 class="title">Article Title</h1>
          <div class="content">
            <p>Yahoo Sports article content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'bleacherreport.com',
    category: 'Sports',
    url: 'https://bleacherreport.com/articles/12345',
    html: `
      <html><body>
        <article class="article">
          <h1 class="title">Article Title</h1>
          <div class="content">
            <p>Bleacher Report sports article.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'theguardian-sport',
    category: 'Sports',
    url: 'https://www.theguardian.com/football/2024/jan/15/story',
    html: `
      <html><body>
        <article class="article">
          <h1 class="headline">Sports Headline</h1>
          <div class="article-body">
            <p>The Guardian sports article content.</p>
          </div>
        </article>
      </body></html>
    `,
    minContentLength: 150,
  },
  {
    site: 'sky.com',
    category: 'Sports',
    url: 'https://www.skysports.com/news/title',
    html: `
      <html><body>
        <div class="article">
          <h1 class="news-title">News Title</h1>
          <div class="sdc-article-body">
            <p>Sky Sports news article.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 150,
  },

  // ==========================================================================
  // WEATHER / MAPS
  // ==========================================================================
  {
    site: 'weather.com',
    category: 'Weather',
    url: 'https://weather.com/weather/today/l/12345',
    html: `
      <html><body>
        <div class="today-weather">
          <h1>Weather for Location</h1>
          <div class="today-weather-details">
            <p>Weather forecast description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'accuweather.com',
    category: 'Weather',
    url: 'https://www.accuweather.com/en/us/location/12345',
    html: `
      <html><body>
        <div class="location-details">
          <h1>Weather Details</h1>
          <p>AccuWeather forecast information.</p>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'maps.google.com',
    category: 'Maps',
    url: 'https://www.google.com/maps/place/Location',
    html: `
      <html><body>
        <div class="section">
          <h1 class="title">Place Name</h1>
          <div class="section-content">
            <p>Information about the location.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 30,
  },

  // ==========================================================================
  // FORUMS / COMMUNITIES
  // ==========================================================================
  {
    site: '4chan.org',
    category: 'Forum',
    url: 'https://boards.4chan.org/thread/1234567',
    html: `
      <html><body>
        <div class="thread">
          <h1 class="thread-title">Thread Subject</h1>
          <div class="post">
            <p>Post content from the thread.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 40,
  },
  {
    site: 'discogs.com',
    category: 'Community',
    url: 'https://www.discogs.com/artist/12345-Name',
    html: `
      <html><body>
        <div class="profile">
          <h1>Artist Name</h1>
          <div class="profile_info">
            <p>Artist information and biography.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'goodreads.com',
    category: 'Community',
    url: 'https://www.goodreads.com/book/show/12345',
    html: `
      <html><body>
        <div class="bookDescription">
          <h1>Book Title</h1>
          <span id="freeTextDescription">Book description content.</span>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'letterboxd.com',
    category: 'Community',
    url: 'https://letterboxd.com/film/title/',
    html: `
      <html><body>
        <div class="film-multi-collapsible">
          <h1>Film Title</h1>
          <div class="synopsis">
            <p>Film synopsis from Letterboxd.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 80,
  },
  {
    site: 'mastodon.social',
    category: 'Forum',
    url: 'https://mastodon.social/@user/12345',
    html: `
      <html><body>
        <div class="status">
          <p class="status-content">Toot content from Mastodon.</p>
        </div>
      </body></html>
    `,
    minContentLength: 20,
  },

  // ==========================================================================
  // DOWNLOAD / SOFTWARE
  // ==========================================================================
  {
    site: 'apple.com',
    category: 'Software',
    url: 'https://www.apple.com/iphone-15-pro/',
    html: `
      <html><body>
        <div class="hero-essentials">
          <h1 class="typography-headline">iPhone 15 Pro</h1>
          <div class="essentials-section">
            <p>Apple product description and features.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'samsung.com',
    category: 'Software',
    url: 'https://www.samsung.com/us/smartphones/galaxy-s24/',
    html: `
      <html><body>
        <div class="product-detail">
          <h1 class="product-title">Galaxy S24</h1>
          <div class="product-desc">
            <p>Samsung product description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'steam powered',
    category: 'Software',
    url: 'https://store.steampowered.com/app/1234560/Game_Title',
    html: `
      <html><body>
        <div class="game_main_column">
          <h1 class="title">Game Title</h1>
          <div class="description">
            <p>Steam game description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'epicgames.com',
    category: 'Software',
    url: 'https://store.epicgames.com/en-US/p/game-title',
    html: `
      <html><body>
        <div class="product-page">
          <h1 class="title">Game Title</h1>
          <div class="description">
            <p>Epic Games Store game description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'gog.com',
    category: 'Software',
    url: 'https://www.gog.com/en/game/game_title',
    html: `
      <html><body>
        <div class="product-tile">
          <h1 class="product-title">Game Title</h1>
          <div class="description">
            <p>GOG game description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'humble.com',
    category: 'Software',
    url: 'https://www.humblebundle.com/store/game-title',
    html: `
      <html><body>
        <div class="store-game-detail">
          <h1>Game Title</h1>
          <div class="description">
            <p>Humble Bundle game description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 100,
  },
  {
    site: 'figma.com',
    category: 'Software',
    url: 'https://www.figma.com/file/123456789/Title',
    html: `
      <html><body>
        <div class="file_details">
          <h1 class="file_name">File Title</h1>
          <div class="description">
            <p>Figma file description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 30,
  },
  {
    site: 'canva.com',
    category: 'Software',
    url: 'https://www.canva.com/design/ABC123/view',
    html: `
      <html><body>
        <div class="design-page">
          <h1 class="design-title">Design Title</h1>
          <div class="description">
            <p>Canva design description.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 30,
  },
  {
    site: 'notion.so',
    category: 'Software',
    url: 'https://www.notion.so/Page-Title-123456789',
    html: `
      <html><body>
        <div class="notion-page">
          <h1 class="notion-title">Page Title</h1>
          <div class="notion-body">
            <p>Notion page content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'slack.com',
    category: 'Software',
    url: 'https://app.slack.com/client/workspace/channel',
    html: `
      <html><body>
        <div class="p-channel_sidebar">
          <h1>Channel Messages</h1>
          <div class="p-message">
            <p>Slack message content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 20,
  },
  {
    site: 'zoom.us',
    category: 'Software',
    url: 'https://zoom.us/j/123456789',
    html: `
      <html><body>
        <div class="meeting-info">
          <h1>Meeting Topic</h1>
          <p>Zoom meeting description.</p>
        </div>
      </body></html>
    `,
    minContentLength: 30,
  },
  {
    site: 'dropbox.com',
    category: 'Software',
    url: 'https://www.dropbox.com/s/abc123/Title',
    html: `
      <html><body>
        <div class="preview">
          <h1 class="eb-preview-title">File Title</h1>
          <div class="preview-content">
            <p>Dropbox file preview content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
  {
    site: 'drive.google.com',
    category: 'Software',
    url: 'https://drive.google.com/file/d/123/view',
    html: `
      <html><body>
        <div class="drive-viewer">
          <h1 class="title">Document Title</h1>
          <div class="doc-content">
            <p>Google Drive document content.</p>
          </div>
        </div>
      </body></html>
    `,
    minContentLength: 50,
  },
];

// ============================================================================
// TEST SUITES
// ============================================================================

describe('Top Sites Reader - By Category', () => {
  const categories = [...new Set(SITE_TEMPLATES.map(t => t.category))];
  
  categories.forEach(category => {
    const categorySites = SITE_TEMPLATES.filter(t => t.category === category);
    
    describe(`${category} (${categorySites.length} sites)`, () => {
      categorySites.slice(0, 3).forEach(template => { // Test up to 3 from each category
        it(`${template.site}`, () => {
          const result = testSite(template);
          expect(result.success).toBe(true);
          expect(result.error).toBeNull();
          expect(result.contentLength).toBeGreaterThanOrEqual(template.minContentLength);
        });
      });
    });
  });
});

describe('Top Sites - All templates pass extraction', () => {
  SITE_TEMPLATES.forEach(template => {
    it(`${template.site}`, () => {
      const result = testSite(template);
      expect(result.success).toBe(true);
      expect(result.error).toBeNull();
      expect(result.contentLength).toBeGreaterThanOrEqual(template.minContentLength);
    });
  });
});

describe('Top Sites - Layout rendering works for all', () => {
  SITE_TEMPLATES.forEach(template => {
    it(`${template.site}`, () => {
      const result = testSite(template);
      expect(result.success).toBe(true);
      expect(result.container.innerHTML.length).toBeGreaterThan(0);
    });
  });
});

describe('Top Sites - Reading time calculation', () => {
  it('calculates reading time for short content', () => {
    const template = SITE_TEMPLATES.find(t => t.site === 'twitter.com / x.com')!;
    const result = testSite(template);
    expect(result.article.readingTime).toBeGreaterThanOrEqual(1);
  });

  it('calculates reading time for long content', () => {
    const template = SITE_TEMPLATES.find(t => t.site === 'wikipedia.org')!;
    const result = testSite(template);
    expect(result.article.readingTime).toBeGreaterThanOrEqual(1);
  });
});

describe('Top Sites - Source extraction', () => {
  SITE_TEMPLATES.forEach(template => {
    it(`extracts source from ${template.site}`, () => {
      const result = testSite(template);
      expect(result.article.source).toBeTruthy();
    });
  });
});

describe('Top Sites - Title extraction', () => {
  it('extracts titles from article pages', () => {
    const template = SITE_TEMPLATES.find(t => t.site === 'medium.com')!;
    const result = testSite(template);
    expect(result.article.title).toBeTruthy();
  });

  it('extracts titles from Wikipedia', () => {
    const template = SITE_TEMPLATES.find(t => t.site === 'wikipedia.org')!;
    const result = testSite(template);
    expect(result.article.title).toBe('Quantum Computing');
  });
});

describe('Top Sites - Category coverage', () => {
  it('covers major site categories', () => {
    const categories = new Set(SITE_TEMPLATES.map(t => t.category));
    expect(categories.has('Search Engine')).toBe(true);
    expect(categories.has('Social Media')).toBe(true);
    expect(categories.has('E-Commerce')).toBe(true);
    expect(categories.has('News')).toBe(true);
    expect(categories.has('Documentation')).toBe(true);
  });
});
