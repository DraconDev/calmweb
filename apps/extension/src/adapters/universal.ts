/**
 * Universal Site Adapter for CalmWeb
 * 
 * General content filter that works on ANY page:
 * - ALL text content (everywhere)
 * - ALL images (with alt text analysis)
 * - ALL videos (embedded)
 * - No site-specific logic
 */

import type { SiteAdapter } from '@calmweb/shared';
import { generateFingerprint } from '@calmweb/shared';
import { createCollapsePlaceholder } from '@/src/renderer/collapse';

// Elements to ignore (navigation, footer, etc)
const IGNORE_PARENTS = [
  'nav', 'header', 'footer', 'aside',
  '[class*="nav"]', '[class*="menu"]', '[class*="sidebar"]', 
  '[class*="footer"]', '[class*="header"]', '[class*="banner"]',
  '[class*="breadcrumb"]', '[class*="pagination"]',
  '[role="navigation"]', '[role="banner"]', '[role="contentinfo"]',
];

// Max items to process per page (performance)
const MAX_ITEMS = 200;

/**
 * Check if an element is in ignored content (nav, footer, etc)
 */
function isIgnoredElement(el: Element): boolean {
  return IGNORE_PARENTS.some(sel => {
    try {
      return el.closest(sel) !== null;
    } catch {
      return false;
    }
  });
}

/**
 * Check if an element is visible
 */
function isVisible(el: Element): boolean {
  const style = getComputedStyle(el);
  return style.display !== 'none' && 
         style.visibility !== 'hidden' && 
         style.opacity !== '0' &&
         (el as HTMLElement).offsetWidth > 0 &&
         (el as HTMLElement).offsetHeight > 0;
}

/**
 * Get innerText safely
 */
function getText(el: Element): string {
  return (el as HTMLElement).innerText?.trim() || '';
}

/**
 * Universal content discovery - finds ALL content types
 * 
 * Finds: headings, paragraphs, links, images, videos, list items, article content
 */
export function discoverUnitsUniversal(root: Document | HTMLElement): HTMLElement[] {
  const candidates: HTMLElement[] = [];
  const seen = new Set<string>();

  // Helper to add a candidate
  const addCandidate = (el: HTMLElement, text: string, forceAdd = false) => {
    if (!el) return;
    if (isIgnoredElement(el)) return;
    if (!forceAdd && !isVisible(el)) return;
    
    // Use element itself as key if no text, otherwise use text
    const key = text ? text.substring(0, 30).toLowerCase() : `${el.tagName}-${el.className}`.substring(0, 30);
    if (seen.has(key)) return;
    if (candidates.length >= MAX_ITEMS) return;
    
    seen.add(key);
    candidates.push(el);
  };

  // 1. ALL headings
  const headings = root.querySelectorAll('h1, h2, h3, h4, h5, h6');
  for (const h of Array.from(headings)) {
    const text = getText(h);
    if (text.length < 2) continue;
    addCandidate(h as HTMLElement, text);
  }

  // 2. ALL paragraphs with substantial text
  const paragraphs = root.querySelectorAll('p');
  for (const p of Array.from(paragraphs)) {
    const text = getText(p);
    if (text.length < 20) continue;
    addCandidate(p as HTMLElement, text);
  }

  // 3. ALL links with meaningful text
  const links = root.querySelectorAll('a[href]');
  for (const link of Array.from(links)) {
    const text = getText(link);
    if (text.length < 5) continue;
    const container = link.closest('div, section, td, li, p');
    if (container) {
      addCandidate(container as HTMLElement, text);
    } else {
      addCandidate(link as HTMLElement, text);
    }
  }

  // 4. ALL images with alt text (clickbait often in alt text)
  const images = root.querySelectorAll('img');
  for (const img of Array.from(images)) {
    const alt = img.getAttribute('alt') || '';
    const src = img.getAttribute('src') || '';
    // Skip tiny images, icons, spacers
    if (img.offsetWidth < 50 || img.offsetHeight < 50) continue;
    // Skip if no alt and tiny
    if (!alt && (img.offsetWidth < 100 || img.offsetHeight < 100)) continue;
    addCandidate(img as HTMLElement, alt || `Image: ${src.substring(0, 20)}`, true);
  }

  // 5. ALL videos
  const videos = root.querySelectorAll('video, iframe[src*="youtube"], iframe[src*="vimeo"], iframe[src*="video"]');
  for (const video of Array.from(videos)) {
    const text = getText(video) || video.getAttribute('title') || video.getAttribute('src') || '';
    addCandidate(video as HTMLElement, text, true);
  }

  // 6. ALL list items (news items, article lists often use <li>)
  const listItems = root.querySelectorAll('li');
  for (const li of Array.from(listItems)) {
    const text = getText(li);
    if (text.length < 15) continue;
    addCandidate(li as HTMLElement, text);
  }

  // 7. ALL article/content elements
  const articles = root.querySelectorAll('article, section, [role="article"]');
  for (const article of Array.from(articles)) {
    const text = getText(article);
    if (text.length < 30) continue;
    addCandidate(article as HTMLElement, text);
  }

  // 8. ALL divs with substantial text (fallback for sites with no semantic HTML)
  const divs = root.querySelectorAll('div');
  for (const div of Array.from(divs)) {
    const text = getText(div);
    // Only very substantial divs (probably article content)
    if (text.length < 200) continue;
    // Skip if inside ignored parent
    if (isIgnoredElement(div)) continue;
    addCandidate(div as HTMLElement, text.substring(0, 100));
  }

  console.log(`[UniversalAdapter] Found ${candidates.length} content items (headings, paragraphs, images, videos, etc)`);
  return candidates;
}

/**
 * Extract title from a content unit
 */
function extractTitle(element: HTMLElement): string {
  // Image with alt
  if (element.tagName === 'IMG') {
    return element.getAttribute('alt') || 'Image';
  }
  
  // Video 
  if (element.tagName === 'VIDEO' || element.tagName === 'IFRAME') {
    return element.getAttribute('title') || element.getAttribute('src') || 'Video';
  }
  
  // Try heading first - be more specific about what we're looking for
  const headingSelectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  for (const sel of headingSelectors) {
    const heading = element.querySelector(sel);
    if (heading && heading.textContent) {
      const text = heading.textContent.trim();
      if (text.length > 0) return text;
    }
  }
  
  // Try first link with substantial text
  const links = element.querySelectorAll('a');
  for (const link of Array.from(links)) {
    const text = link.textContent?.trim();
    if (text && text.length > 3) {
      return text;
    }
  }
  
  // Fall back to any substantial text - but prioritize the first part
  const allText = element.textContent || '';
  const trimmed = allText.trim();
  if (trimmed.length > 0) {
    // Return first 100 chars
    return trimmed.substring(0, 100);
  }
  
  return 'Untitled';
}

/**
 * Extract source from a content unit
 */
function extractSource(element: HTMLElement): string {
  // Look for various author patterns
  const authorSelectors = [
    '[class*="author"]',
    '[rel="author"]',
    '.byline',
    '.source',
    '[class*="byline"]',
    '[class*="source"]',
  ];
  
  for (const sel of authorSelectors) {
    try {
      const author = element.querySelector(sel);
      if (author && author.textContent) {
        const text = author.textContent.trim();
        if (text.length > 0) return text;
      }
    } catch {
      // Invalid selector
    }
  }
  
  return window.location.hostname;
}

/**
 * Extract metadata from a content unit
 */
function extractMetadata(element: HTMLElement): string[] {
  const metadata: string[] = [];
  
  // For images, include alt text as metadata
  if (element.tagName === 'IMG') {
    const alt = element.getAttribute('alt');
    if (alt) metadata.push(`alt: ${alt}`);
  }
  
  const date = element.querySelector('time, [datetime]');
  if (date) {
    const text = date.getAttribute('datetime') || getText(date);
    if (text) metadata.push(text);
  }
  
  return metadata;
}

export const universalAdapter: SiteAdapter = {
  siteId: 'universal',
  matches: [/.*/],
  
  discoverUnits: discoverUnitsUniversal,

  extractData(element) {
    const title = extractTitle(element);
    const sourceName = extractSource(element);
    const metadata = extractMetadata(element);

    const fingerprint = generateFingerprint({ 
      title, 
      sourceName, 
      site: 'universal', 
      metadata 
    });

    return {
      id: element.id || `uni-${fingerprint}`,
      site: 'universal',
      fingerprint,
      sourceName,
      title,
      metadata,
      isNew: false,
    };
  },

  applyDecision(element, result) {
    element.removeAttribute('data-calmweb-processed');
    element.style.filter = '';
    element.style.opacity = '';
    element.classList.remove('calmweb-blurred', 'calmweb-hidden');

    const title = extractTitle(element);

    if (result.decision === 'hide') {
      element.style.display = 'none';
      element.setAttribute('data-calmweb-processed', 'hidden');
      window.dispatchEvent(new CustomEvent('calmweb:neutralized', {
        detail: { before: title, after: '[Hidden]' }
      }));
    } else if (result.decision === 'collapse') {
      const placeholder = createCollapsePlaceholder({
        reason: result.reason,
        originalElement: element,
        result,
        siteId: 'universal',
      });
      element.style.display = 'none';
      element.insertAdjacentElement('afterend', placeholder);
      element.setAttribute('data-calmweb-processed', 'collapsed');
      window.dispatchEvent(new CustomEvent('calmweb:neutralized', {
        detail: { before: title, after: '[Collapsed]' }
      }));
    } else if (result.decision === 'blur') {
      element.classList.add('calmweb-blurred');
      element.setAttribute('data-calmweb-processed', 'blur');
    } else if (result.decision === 'neutralize' && result.neutralizedTitle) {
      const originalTitle = title;
      const titleEl = element.querySelector('h1, h2, h3, h4, h5, h6, a');
      if (titleEl instanceof HTMLElement) {
        titleEl.innerText = result.neutralizedTitle;
      }
      element.setAttribute('data-calmweb-processed', 'neutralized');
      window.dispatchEvent(new CustomEvent('calmweb:neutralized', {
        detail: { before: originalTitle, after: result.neutralizedTitle }
      }));
    } else {
      element.setAttribute('data-calmweb-processed', 'show');
    }
  }
};