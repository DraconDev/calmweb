/**
 * Article Extractor for CalmWeb Super Reader
 *
 * Extracts clean article content from any webpage.
 */

export interface ExtractedArticle {
  title: string;
  author?: string;
  date?: string;
  content: string;
  contentHtml: HTMLElement;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  source: string;
  favicon?: string;
  readingTime: number;
  url: string;
}

const REMOVE_SELECTORS = [
  'nav', 'aside', 'footer', 'header:not(article header)',
  '.ad', '.advertisement', '.ads', '.ad-container', '.ad-slot', '.ad-wrapper',
  '.sidebar', '.related', '.recommended', '.suggestions',
  '.social-share', '.share-buttons', '.social-links', '.social-bar',
  '.comments', '#comments', '.comment-section',
  'script', 'style', 'noscript', 'iframe',
  '[class*="newsletter"]', '[class*="subscribe"]',
  '[class*="popup"]', '[class*="modal"]',
  '.author-bio', '.author-info', '.about-author',
  '.tags', '.tag-list', '.categories',
  '.breadcrumb', '.breadcrumbs',
  '.pagination', '.pager',
  '.cookie-notice', '.gdpr', '[class*="consent"]', '[class*="cookie-banner"]',
  // Chat widgets
  '[class*="intercom"]', '[class*="drift"]', '[class*="zendesk"]', '[class*="crisp"]',
  '[class*="livechat"]', '[class*="chat-widget"]', '#intercom-container',
  // Paywalls & overlays
  '[class*="paywall"]', '[class*="premium"]', '[class*="metered"]',
  '[class*="overlay"]', '[class*="backdrop"]',
  // App banners & prompts
  '[class*="app-banner"]', '[class*="install-prompt"]', '[class*="download-app"]',
  // Surveys & feedback
  '[class*="survey"]', '[class*="feedback"]', '[class*="poll"]', '[class*="rating"]',
  // Sponsored content markers
  '[class*="sponsored"]', '[class*="promoted"]', '[class*="native-ad"]',
  // Sticky elements (usually nav/banners)
  '[style*="position: sticky"]', '[style*="position:fixed"]',
];

const CONTENT_SELECTORS = [
  // Wikipedia-specific (before generic #content)
  '#mw-content-text',
  '.mw-parser-output',
  // Semantic HTML
  'article',
  '[role="article"]',
  'main article',
  // Common CMS patterns
  '.post-content',
  '.article-content',
  '.entry-content',
  '.post-body',
  '.article-body',
  '.content-body',
  // Main containers (last resort)
  'main',
  '[role="main"]',
  '#content',
  '.content',
];

const TITLE_SELECTORS = [
  'article h1',
  'h1[itemprop="headline"]',
  '[property="og:title"]',
  'meta[name="twitter:title"]',
  'h1',
  '.post-title',
  '.article-title',
  '.entry-title',
];

const AUTHOR_SELECTORS = [
  '[rel="author"]',
  '[itemprop="author"]',
  '.author-name',
  '.byline',
  '.author',
  'meta[name="author"]',
];

const DATE_SELECTORS = [
  'time',
  '[itemprop="datePublished"]',
  '[datetime]',
  '.post-date',
  '.article-date',
  '.publish-date',
  'meta[name="date"]',
  '[property="article:published_time"]',
];

export function extractArticle(doc: Document, url: string, textOnly = true): ExtractedArticle {
  const title = extractTitle(doc);
  const author = extractAuthor(doc);
  const date = extractDate(doc);
  const mainContent = findMainContent(doc);
  const images = textOnly ? [] : extractImages(mainContent);
  const cleanedContent = cleanContent(mainContent, textOnly);
  const favicon = extractFavicon(doc);
  const readingTime = calculateReadingTime(cleanedContent.textContent || '');

  return {
    title,
    author,
    date,
    content: cleanedContent.textContent || '',
    contentHtml: cleanedContent,
    images,
    source: new URL(url).hostname,
    favicon,
    readingTime,
    url,
  };
}

function extractTitle(doc: Document): string {
  for (const selector of TITLE_SELECTORS) {
    const el = doc.querySelector(selector);
    if (el) {
      const title = el.getAttribute('content') || el.textContent?.trim();
      if (title && title.length > 5 && title.length < 300) {
        return title;
      }
    }
  }
  return doc.title || 'Untitled';
}

function extractAuthor(doc: Document): string | undefined {
  for (const selector of AUTHOR_SELECTORS) {
    const el = doc.querySelector(selector);
    if (el) {
      let author = el.getAttribute('content') || el.textContent?.trim();
      if (author && author.length < 100) {
        // Strip common prefixes
        author = author.replace(/^(by|written by|reported by)\s+/i, '');
        return author;
      }
    }
  }
  return undefined;
}

function extractDate(doc: Document): string | undefined {
  for (const selector of DATE_SELECTORS) {
    const el = doc.querySelector(selector);
    if (el) {
      const dateAttr = el.getAttribute('datetime') || el.getAttribute('content');
      const dateText = dateAttr || el.textContent?.trim();
      if (dateText) {
        try {
          const parsed = new Date(dateText);
          if (!isNaN(parsed.getTime())) {
            return parsed.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
          }
        } catch {
          continue;
        }
      }
    }
  }
  return undefined;
}

function findMainContent(doc: Document): HTMLElement {
  for (const selector of CONTENT_SELECTORS) {
    const el = doc.querySelector(selector);
    if (el && el.textContent && el.textContent.trim().length > 200) {
      return el as HTMLElement;
    }
  }

  const candidates = doc.querySelectorAll('div, section, main');
  let best: HTMLElement | null = null;
  let bestScore = 0;

  candidates.forEach((candidate) => {
    const html = candidate as HTMLElement;
    const textLength = html.textContent?.length || 0;
    const paragraphs = html.querySelectorAll('p').length;
    const score = textLength + (paragraphs * 100);

    if (score > bestScore) {
      bestScore = score;
      best = html;
    }
  });

  return best || doc.body;
}

function cleanContent(el: HTMLElement, textOnly = true): HTMLElement {
  const clone = el.cloneNode(true) as HTMLElement;

  REMOVE_SELECTORS.forEach((selector) => {
    clone.querySelectorAll(selector).forEach((el) => el.remove());
  });

  // Strip media in text-only mode, but preserve caption text
  if (textOnly) {
    // Replace <figure> with its <figcaption> text as a <p>
    clone.querySelectorAll('figure').forEach((figure) => {
      const caption = figure.querySelector('figcaption');
      if (caption && caption.textContent?.trim()) {
        const p = document.createElement('p');
        p.textContent = caption.textContent.trim();
        p.classList.add('calmweb-caption');
        figure.replaceWith(p);
      } else {
        figure.remove();
      }
    });

    // Remove media elements but keep small icons (width/height <= 32 or SVG data URIs)
    clone.querySelectorAll('img').forEach((img) => {
      const w = parseInt(img.getAttribute('width') || '0');
      const h = parseInt(img.getAttribute('height') || '0');
      const src = img.getAttribute('src') || '';
      // Keep small icons, SVGs, data URIs
      if ((w > 0 && w <= 32) || (h > 0 && h <= 32)) return;
      if (src.startsWith('data:image/svg')) return;
      img.remove();
    });
    clone.querySelectorAll('video, audio, source, track, picture, canvas, embed, object').forEach((el) => el.remove());
  }

  clone.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('/')) {
      a.removeAttribute('href');
    }
  });

  clone.querySelectorAll('*').forEach((el) => {
    const html = el as HTMLElement;
    html.removeAttribute('style');
    html.removeAttribute('class');
    html.removeAttribute('id');
    html.removeAttribute('onclick');
    html.removeAttribute('onmouseover');
    html.removeAttribute('onmouseout');
  });

  return clone;
}

function extractImages(content: HTMLElement): Array<{ src: string; alt: string; caption?: string }> {
  const images: Array<{ src: string; alt: string; caption?: string }> = [];

  content.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src') || img.getAttribute('data-src');
    if (src && !src.includes('avatar') && !src.includes('icon') && !src.includes('logo')) {
      const alt = img.getAttribute('alt') || '';
      const figure = img.closest('figure');
      const caption = figure?.querySelector('figcaption')?.textContent?.trim();

      images.push({ src, alt, caption });
    }
  });

  return images.slice(0, 20);
}

function extractFavicon(doc: Document): string | undefined {
  const icon = doc.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
  const href = icon?.getAttribute('href');
  
  if (href) {
    if (href.startsWith('//')) return 'https:' + href;
    if (href.startsWith('/')) {
      const origin = doc.location?.origin || 'https://example.com';
      return origin + href;
    }
    return href;
  }

  return undefined;
}

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}