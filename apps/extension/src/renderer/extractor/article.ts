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
  'nav', 'aside', 'footer', 'header:not(article header):not([class*="site-header"]):not([class*="main-header"])',
  '.ad', '.advertisement', '.ads', '.ad-container', '.ad-slot', '.ad-wrapper', '.advert',
  '[id*="ad-"]', '[class*="ad-"]', '[id*="advert"]', '[class*="advert"]',
  '.sidebar', '.related', '.recommended', '.suggestions', '.more-stories',
  '.social-share', '.share-buttons', '.social-links', '.social-bar', '.share-bar',
  '.comments', '#comments', '.comment-section', '.responses', '.disqus',
  'script', 'style', 'noscript', 'iframe:not([src*="youtube"]):not([src*="vimeo"])',
  '[class*="newsletter"]', '[class*="subscribe"]', '[class*="signup"]',
  '[class*="popup"]', '[class*="modal"]', '[class*="lightbox"]',
  '.author-bio', '.author-info', '.about-author', '.post-author',
  '.tags', '.tag-list', '.categories', '.topic-tags',
  '.breadcrumb', '.breadcrumbs', '.crumbs',
  '.pagination', '.pager', '.page-nav',
  '.cookie-notice', '.gdpr', '[class*="consent"]', '[class*="cookie-banner"]', '.cookie-banner',
  '[class*="intercom"]', '[class*="drift"]', '[class*="zendesk"]', '[class*="crisp"]',
  '[class*="livechat"]', '[class*="chat-widget"]', '#intercom-container',
  '[class*="paywall"]', '[class*="premium"]', '[class*="metered"]', '[class*="locked"]',
  '[class*="overlay"]', '[class*="backdrop"]', '[class*="mask"]',
  '[class*="app-banner"]', '[class*="install-prompt"]', '[class*="download-app"]',
  '[class*="survey"]', '[class*="feedback"]', '[class*="poll"]', '[class*="rating"]',
  '[class*="sponsored"]', '[class*="promoted"]', '[class*="native-ad"]',
  '[class*="age-gate"]', '[class*="age-verification"]',
  '[class*="cookie-law"]', '[class*="eu-cookie"]',
  '[style*="position: sticky"]', '[style*="position:fixed"]',
  '[style*="display: none"]', '[style*="display:none"]', '[hidden]',
  '[aria-hidden="true"]',
  '.promo', '.promo-banner', '.promo-code',
  '.newsletter-popup', '.subscribe-popup',
  '#wpadminbar',
  '.amp-sidebar', '.amp-menu',
];

const TITLE_SELECTORS = [
  'article h1',
  'h1[itemprop="headline"]',
  '[property="og:title"]',
  'meta[name="twitter:title"]',
  'h1.title',
  'h1[itemprop="name"]',
  '.product-title',
  '.product-name',
  '.listing-title',
  '.thread-title',
  'h1',
  '.post-title',
  '.article-title',
  '.entry-title',
  '[class*="title"] h1',
  'meta[property="og:title"]',
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

export type CleanMode = 'textOnly' | 'safe' | 'full';

const TRACKING_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'fbclid', 'gclid', 'gclsrc',
  'mc_cid', 'mc_eid',
  'ref', 'referer', 'referrer',
  'affiliate', 'aff_id',
  'campaign_id', 'ad_id', 'adgroup_id',
  'ttclid', 'twclid',
  's_kwcid', 'scid',
  '_ga', '_gl',
  'vero_id', 'mailchimp_campaign_id',
  'fb_action_ids', 'fb_action_types', 'fb_source',
  'fb_campaign_ids',
  'oly_enc_id', 'oly_anon_id',
  'perfmon_ref_id',
  'spm', 'spm_id',
  'rdt_cid', 'rdt_tid',
  'trk_contact', 'trk_msg', 'trk_module', 'trk_sid',
  'zanpid',
  'igshid',
  'tt_sigid', 'tt_mediaid',
];

const SUSPICIOUS_DOMAINS = [
  'bit.ly', 'tinyurl.com', 't.co', 'goo.gl',
  'ow.ly', 'is.gd', 'buff.ly', 'adf.ly',
  'j.mp', 'tr.im', 'tiny.cc', 'lnkd.in',
  'db.tt', 'qr.ae', 'adcrun.ch', 'psty.jp',
  'shorl.com', 'hypERM.com', 'firefe.st',
  'cort.as', 'clck.ru', 'clicky.me', 'budurl.com',
  'snipurl.com', 'snurl.com', 'short.to', 'url.ie',
  'shorenstein.org',
];

function stripTrackingFromUrl(href: string, baseUrl: string): string {
  try {
    const url = new URL(href, baseUrl);
    const hostname = url.hostname;

    if (SUSPICIOUS_DOMAINS.some(d => hostname.includes(d))) {
      return '';
    }

    TRACKING_PARAMS.forEach(param => url.searchParams.delete(param));

    url.searchParams.delete('_ga');
    url.searchParams.delete('_gl');
    url.searchParams.delete('ref');
    url.searchParams.delete('ref_src');
    url.searchParams.delete('ref_url');

    url.hash = '';

    const cleaned = url.toString();
    return cleaned === url.origin + url.pathname + '/' ? '' : cleaned;
  } catch {
    return '';
  }
}

export function extractArticle(doc: Document, url: string, mode: CleanMode = 'textOnly'): ExtractedArticle {
  const title = extractTitle(doc);
  const author = extractAuthor(doc);
  const date = extractDate(doc);
  const mainContent = findMainContent(doc);
  const images = mode !== 'textOnly' ? extractImages(mainContent) : [];
  const cleanedContent = cleanContent(mainContent, mode, url);
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
  const candidates = doc.querySelectorAll('main, article, [role="main"], [role="article"], section, div, body');

  let bestElement: HTMLElement | null = null;
  let bestScore = 0;

  for (const candidate of Array.from(candidates)) {
    if (!isVisibleElement(candidate)) continue;
    
    const score = scoreElement(candidate);
    if (score > bestScore) {
      bestScore = score;
      bestElement = candidate as HTMLElement;
    }
  }

  return bestElement || doc.body;
}

function isVisibleElement(el: Element): boolean {
  const style = window.getComputedStyle(el);
  if (style.display === 'none') return false;
  if (style.visibility === 'hidden') return false;
  if (style.opacity === '0') return false;
  if (parseFloat(style.opacity) < 0.1) return false;
  if (el.hasAttribute('hidden')) return false;
  if (el.getAttribute('aria-hidden') === 'true') return false;
  if (el.hasAttribute('data-visible') && el.getAttribute('data-visible') === 'false') return false;
  return true;
}

function scoreElement(el: Element): number {
  const html = el as HTMLElement;
  const text = html.textContent?.trim() || '';
  const innerHTML = html.innerHTML || '';

  if (text.length < 50) return 0;

  const textLength = text.length;
  const htmlLength = innerHTML.length;
  const textDensity = htmlLength > 0 ? textLength / htmlLength : 0;

  if (textDensity < 0.05) return 0;

  const paragraphs = html.querySelectorAll('p').length;
  const headings = html.querySelectorAll('h1,h2,h3,h4,h5,h6').length;
  const lists = html.querySelectorAll('ul, ol, dl').length;
  const tables = html.querySelectorAll('table').length;
  const links = html.querySelectorAll('a').length;
  const images = html.querySelectorAll('img').length;
  const blockChildren = html.querySelectorAll('p, div, section, article, blockquote, pre, ul, ol, table').length;

  let score = 0;

  score += textLength * textDensity;

  score += paragraphs * 100;
  score += headings * 80;
  score += lists * 60;
  score += tables * 100;
  score += links * 5;
  score += images * 10;
  score += blockChildren * 30;

  const tagName = el.tagName.toLowerCase();
  if (tagName === 'article') score += 500;
  if (tagName === 'main') score += 400;
  if (tagName === 'section') score += 200;

  const depth = getDepth(el);
  score *= Math.max(0.3, 1 - (depth * 0.05));

  if (score > 50000) return 50000;

  return score;
}

function getDepth(el: Element): number {
  let depth = 0;
  let parent = el.parentElement;
  while (parent) {
    depth++;
    parent = parent.parentElement;
  }
  return depth;
}

function cleanContent(el: HTMLElement, mode: CleanMode = 'textOnly', baseUrl: string = ''): HTMLElement {
  const clone = el.cloneNode(true) as HTMLElement;

  REMOVE_SELECTORS.forEach((selector) => {
    clone.querySelectorAll(selector).forEach((el) => el.remove());
  });

  if (mode === 'textOnly') {
    cleanTextOnly(clone);
  } else if (mode === 'safe') {
    cleanSafeMode(clone, baseUrl);
  } else if (mode === 'full') {
    cleanFullMode(clone, baseUrl);
  }

  return clone;
}

function cleanTextOnly(el: HTMLElement): void {
  // Replace <figure> with its <figcaption> text as a <p>
  el.querySelectorAll('figure').forEach((figure) => {
    const caption = figure.querySelector('figcaption');
    if (caption && caption.textContent?.trim()) {
      const p = document.createElement('p');
      p.textContent = caption.textContent.trim();
      figure.replaceWith(p);
    } else {
      figure.remove();
    }
  });

  // Remove media elements but keep small icons
  el.querySelectorAll('img').forEach((img) => {
    const w = parseInt(img.getAttribute('width') || '0');
    const h = parseInt(img.getAttribute('height') || '0');
    const src = img.getAttribute('src') || '';
    if ((w > 0 && w <= 32) || (h > 0 && h <= 32)) return;
    if (src.startsWith('data:image/svg')) return;
    img.remove();
  });
  el.querySelectorAll('video, audio, source, track, picture, canvas, embed, object, iframe').forEach((e) => e.remove());

  // Remove classes, styles, event handlers from all elements
  el.querySelectorAll('*').forEach((e) => {
    const html = e as HTMLElement;
    html.removeAttribute('style');
    html.removeAttribute('class');
    html.removeAttribute('id');
    html.removeAttribute('onclick');
    html.removeAttribute('onmouseover');
    html.removeAttribute('onmouseout');
  });

  // Sanitize links
  el.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#')) {
      a.removeAttribute('href');
    }
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
}

function cleanSafeMode(el: HTMLElement, baseUrl: string): void {
  el.querySelectorAll('figure').forEach((figure) => {
    const caption = figure.querySelector('figcaption');
    if (caption && caption.textContent?.trim()) {
      const p = document.createElement('p');
      p.textContent = `[Image: ${caption.textContent.trim()}]`;
      figure.replaceWith(p);
    } else {
      figure.remove();
    }
  });

  el.querySelectorAll('img').forEach((img) => {
    const alt = img.getAttribute('alt') || 'Image';
    const span = document.createElement('span');
    span.className = 'cw-media-placeholder';
    span.textContent = `[${alt}]`;
    span.setAttribute('data-cw-media', 'image');
    img.replaceWith(span);
  });

  el.querySelectorAll('video, audio, source, track, picture, canvas, embed, object, iframe').forEach((media) => {
    const span = document.createElement('span');
    span.className = 'cw-media-placeholder';
    span.textContent = `[Media - ${media.tagName.toLowerCase()}]`;
    span.setAttribute('data-cw-media', media.tagName.toLowerCase());
    media.replaceWith(span);
  });

  el.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (href.startsWith('http') || href.startsWith('/') || href.startsWith('#')) {
      const cleaned = stripTrackingFromUrl(href, baseUrl);
      if (cleaned) {
        a.setAttribute('href', cleaned);
      } else {
        a.removeAttribute('href');
      }
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    } else {
      a.removeAttribute('href');
    }
  });

  el.querySelectorAll('button, input[type="submit"], input[type="button"], input[type="reset"]').forEach((btn) => {
    btn.setAttribute('data-cw-disabled', 'true');
    btn.setAttribute('disabled', 'true');
  });

  el.querySelectorAll('input:not([type="submit"]):not([type="button"]):not([type="reset"]), textarea, select').forEach((input) => {
    input.setAttribute('data-cw-disabled', 'true');
    input.setAttribute('disabled', 'true');
  });

  el.querySelectorAll('*').forEach((e) => {
    const html = e as HTMLElement;
    html.removeAttribute('onclick');
    html.removeAttribute('onmouseover');
    html.removeAttribute('onmouseout');
    html.removeAttribute('onchange');
    html.removeAttribute('onsubmit');
    const style = html.getAttribute('style') || '';
    if (style && !style.includes('display') && !style.includes('visibility')) {
      html.removeAttribute('style');
    }
  });
}

function cleanFullMode(el: HTMLElement, baseUrl: string): void {
  el.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (href.startsWith('http') || href.startsWith('/') || href.startsWith('#')) {
      const cleaned = stripTrackingFromUrl(href, baseUrl);
      if (cleaned) {
        a.setAttribute('href', cleaned);
      } else {
        a.removeAttribute('href');
      }
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    } else {
      a.removeAttribute('href');
    }
  });

  el.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src') || '';
    if (src.startsWith('javascript:') || src.startsWith('data:text/html')) {
      img.remove();
    } else {
      const cleaned = stripTrackingFromUrl(src, baseUrl);
      if (cleaned) {
        img.setAttribute('src', cleaned);
      }
    }
  });

  el.querySelectorAll('video, audio').forEach((media) => {
    media.removeAttribute('autoplay');
    media.removeAttribute('autoplay');
    const sources = media.querySelectorAll('source');
    sources.forEach((source) => {
      const src = source.getAttribute('src') || '';
      if (src.startsWith('javascript:')) {
        source.remove();
      }
    });
  });

  el.querySelectorAll('iframe').forEach((iframe) => {
    const src = iframe.getAttribute('src') || '';
    if (src.startsWith('javascript:')) {
      iframe.remove();
    } else if (!src.startsWith('http') && !src.startsWith('/')) {
      iframe.remove();
    }
  });

  el.querySelectorAll('form').forEach((form) => {
    form.setAttribute('data-cw-form-disabled', 'true');
    form.addEventListener('submit', (e) => e.preventDefault(), { once: true });
  });

  el.querySelectorAll('*').forEach((e) => {
    const html = e as HTMLElement;
    html.removeAttribute('onclick');
    html.removeAttribute('onmouseover');
    html.removeAttribute('onmouseout');
    html.removeAttribute('onchange');
    html.removeAttribute('onsubmit');
    html.removeAttribute('onfocus');
    html.removeAttribute('onblur');
    html.removeAttribute('onload');
    html.removeAttribute('onerror');
    const style = html.getAttribute('style') || '';
    if (style && (style.includes('expression') || style.includes('behavior') || style.includes('javascript:'))) {
      html.removeAttribute('style');
    }
    html.removeAttribute('id');
  });
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