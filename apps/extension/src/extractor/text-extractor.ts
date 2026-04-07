export interface ExtractedContent {
  title: string;
  content: string;
  sourceName: string;
  sourceUrl?: string;
  author?: string;
  date?: string;
  readingTime?: number;
  excerpt?: string;
}

const IGNORE_SELECTORS = [
  'script',
  'style',
  'noscript',
  'iframe',
  'embed',
  'object',
  'video',
  'audio',
  'img',
  'picture',
  'figure',
  'svg',
  'canvas',
  'nav',
  'header',
  'footer',
  'aside',
  'form',
  'button',
  'input',
  'select',
  'textarea',
  '.ad',
  '.ads',
  '.advertisement',
  '.social',
  '.share',
  '.social-share',
  '.share-buttons',
  '[class*="comment"]',
  '[class*="related"]',
  '[class*="sidebar"]',
  '[class*="newsletter"]',
  '[class*="subscribe"]',
  '[class*="popup"]',
  '[class*="modal"]',
  '[class*="overlay"]',
  '[class*="banner"]',
  '[class*="cookie"]',
  '[class*="GDPR"]',
  '[id*="cookie"]',
  '[id*="newsletter"]',
  '[role="button"]',
  '[role="navigation"]',
  '[role="banner"]',
  '[role="contentinfo"]',
  '[aria-hidden="true"]',
  '[data-ad]',
  '[data-advertisement]',
  'yt-formatted-string',
  'ytd-compact-video-renderer',
  'ytd-video-renderer',
  'ytd-rich-item-renderer',
  'ytd-grid-video-renderer',
];

const CONTENT_SELECTORS = [
  'article',
  '[role="article"]',
  'main',
  '[role="main"]',
  '.post-content',
  '.article-content',
  '.entry-content',
  '.post-body',
  '.article-body',
  '.story-body',
  '.content-body',
  '#article-body',
  '#content-body',
  '.node-content',
  '.field-body',
];

const TITLE_SELECTORS = [
  'h1.title',
  'h1.article-title',
  'h1.post-title',
  'h1.entry-title',
  'article h1',
  '.article-header h1',
  '.post-header h1',
  'meta[property="og:title"]',
  'meta[name="twitter:title"]',
  'title',
];

const AUTHOR_SELECTORS = [
  '[rel="author"]',
  '.author',
  '.byline',
  '[class*="author"]',
  '[class*="byline"]',
  'meta[name="author"]',
];

const DATE_SELECTORS = [
  'time[datetime]',
  'time[pubdate]',
  '.date',
  '.published',
  '[class*="date"]',
  '[class*="time"]',
  'meta[property="article:published_time"]',
];

function extractMetaContent(doc: Document, selector: string): string | null {
  const el = doc.querySelector(selector);
  if (!el) return null;
  return el.getAttribute('content') || el.textContent?.trim() || null;
}

function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function cleanTextContent(element: HTMLElement): string {
  const clone = element.cloneNode(true) as HTMLElement;

  for (const selector of IGNORE_SELECTORS) {
    try {
      clone.querySelectorAll(selector).forEach(el => el.remove());
    } catch {
      continue;
    }
  }

  for (const el of Array.from(clone.querySelectorAll('[onclick], [onload], [onerror]'))) {
    el.removeAttribute('onclick');
    el.removeAttribute('onload');
    el.removeAttribute('onerror');
  }

  clone.querySelectorAll('a').forEach(a => {
    const span = document.createElement('span');
    span.textContent = a.textContent || '';
    a.replaceWith(span);
  });

  clone.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
    const text = h.textContent || '';
    h.innerHTML = `<strong>${text}</strong>`;
  });

  clone.querySelectorAll('blockquote').forEach(bq => {
    const text = bq.textContent || '';
    bq.innerHTML = `<em>"${text}"</em>`;
  });

  clone.querySelectorAll('ul, ol').forEach(list => {
    const items = Array.from(list.querySelectorAll('li')).map(li => `• ${li.textContent || ''}`).join('\n');
    const p = document.createElement('p');
    p.innerHTML = items.replace(/\n/g, '<br>');
    list.replaceWith(p);
  });

  clone.querySelectorAll('div, section, article').forEach(container => {
    if (container.textContent === container.innerHTML) return;
    const brs = container.querySelectorAll('br');
    brs.forEach(br => br.replaceWith(document.createTextNode('\n')));
  });

  let html = clone.innerHTML;
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = html.replace(/<\/p><p>/gi, '\n\n');
  html = html.replace(/<[^>]+>/g, '');
  html = html.replace(/&nbsp;/g, ' ');
  html = html.replace(/&amp;/g, '&');
  html = html.replace(/&lt;/g, '<');
  html = html.replace(/&gt;/g, '>');
  html = html.replace(/&quot;/g, '"');
  html = html.replace(/&#39;/g, "'");
  html = html.replace(/\n{3,}/g, '\n\n');
  html = html.trim();

  return html;
}

function findMainContent(root: Document | HTMLElement): HTMLElement | null {
  for (const sel of CONTENT_SELECTORS) {
    try {
      const el = root.querySelector<HTMLElement>(sel);
      if (el && el.textContent && el.textContent.length > 200) {
        return el;
      }
    } catch {
      continue;
    }
  }

  const body = root instanceof Document ? root.body : root;
  if (!body) return null;

  const candidates = Array.from(body.querySelectorAll('div, section')) as HTMLElement[];
  let bestCandidate: HTMLElement | null = null;
  let bestScore = 0;

  for (const candidate of candidates) {
    const text = candidate.textContent || '';
    if (text.length < 200) continue;

    const paragraphs = candidate.querySelectorAll('p');
    const links = candidate.querySelectorAll('a');
    const headings = candidate.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const score = paragraphs.length * 10 + links.length * 2 + headings.length * 5;

    if (score > bestScore) {
      bestScore = score;
      bestCandidate = candidate;
    }
  }

  return bestCandidate || body;
}

function extractTitle(doc: Document): string {
  for (const sel of TITLE_SELECTORS) {
    if (sel.startsWith('meta')) {
      const content = extractMetaContent(doc, sel);
      if (content) return content;
    } else {
      const el = doc.querySelector(sel);
      if (el) {
        const text = el.textContent?.trim();
        if (text) return text;
      }
    }
  }
  return doc.title || 'Untitled';
}

function extractAuthor(doc: Document): string | undefined {
  for (const sel of AUTHOR_SELECTORS) {
    const el = doc.querySelector(sel);
    if (el) {
      const text = el.getAttribute('content') || el.textContent?.trim();
      if (text) return text;
    }
  }
  return undefined;
}

function extractDate(doc: Document): string | undefined {
  for (const sel of DATE_SELECTORS) {
    if (sel.startsWith('meta')) {
      const content = extractMetaContent(doc, sel);
      if (content) return content;
    } else {
      const el = doc.querySelector(sel);
      if (el) {
        const datetime = el.getAttribute('datetime');
        if (datetime) return datetime;
        const text = el.textContent?.trim();
        if (text) return text;
      }
    }
  }
  return undefined;
}

function extractExcerpt(doc: Document): string | undefined {
  const ogDesc = extractMetaContent(doc, 'meta[property="og:description"]');
  if (ogDesc) return ogDesc;

  const metaDesc = extractMetaContent(doc, 'meta[name="description"]');
  if (metaDesc) return metaDesc;

  return undefined;
}

export function extractTextContent(doc: Document): ExtractedContent {
  const title = extractTitle(doc);
  const mainContent = findMainContent(doc);
  const content = mainContent ? cleanTextContent(mainContent) : '';
  const sourceName = doc.location.hostname;
  const sourceUrl = doc.location.href;
  const author = extractAuthor(doc);
  const date = extractDate(doc);
  const excerpt = extractExcerpt(doc);
  const readingTime = estimateReadingTime(content);

  return {
    title,
    content,
    sourceName,
    sourceUrl,
    author,
    date,
    readingTime,
    excerpt,
  };
}

export function extractForTextMode(doc: Document): ExtractedContent {
  return extractTextContent(doc);
}
