/**
 * Universal Site Adapter for CalmWeb
 * 
 * A fallback adapter that handles generic web content on any site.
 * Uses priority-based selector discovery and content validation.
 */

import type { SiteAdapter } from '@calmweb/shared';
import { generateFingerprint } from '@calmweb/shared';
import { createCollapsePlaceholder } from '@/src/renderer/collapse';

// Priority-based selectors - tried in order until enough units found
const SELECTOR_PRIORITIES = [
  // High priority: semantic HTML
  'article',
  'main article',
  '[role="article"]',
  'article[itemscope]',
  
  // Medium-high: common CMS patterns
  '.post',
  '.entry',
  '.content-item',
  '.card',
  '.post-item',
  '.entry-content',
  '.article-content',
  '.news-item',
  '.story',
  '.feed-item',
  
  // Medium: blog/platform patterns
  'div[class*="post"]',
  'div[class*="article"]',
  'div[class*="item"]',
  'div[class*="card"]',
  'section[class*="post"]',
  
  // Low: generic containers (only if others fail)
  'section',
  'li.post',
  'li.item',
  'li.article',
];

// Title selectors with priority
const TITLE_SELECTORS = [
  'h1', 'h2', 'h3', 'h4',
  '.title', '.heading',
  'a[href*="/p/"]',
  '[class*="title"]',
  'header a',
  '.entry-title',
  '.post-title',
  '.article-title',
];

// Source/author selectors
const SOURCE_SELECTORS = [
  '.author', '.source', '.site-name', 'cite',
  'span[class*="author"]', '[rel="author"]',
  '.byline', '.meta-author', '.post-author',
  'a[class*="author"]', '[data-author]',
];

// Minimum thresholds for valid content units
const MIN_TEXT_LENGTH = 30;
const MIN_HEIGHT = 50;
const MIN_WIDTH = 100;
const MIN_UNITS_THRESHOLD = 3;

/**
 * Check if an element is visible and has meaningful content
 */
function isValidContentUnit(el: HTMLElement): boolean {
  // Check dimensions
  if (el.offsetHeight < MIN_HEIGHT || el.offsetWidth < MIN_WIDTH) {
    return false;
  }
  
  // Check text content
  const text = el.innerText?.trim() || '';
  if (text.length < MIN_TEXT_LENGTH) {
    return false;
  }
  
  // Check visibility
  const style = getComputedStyle(el);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
    return false;
  }
  
  // Check for title-like element
  const hasTitle = TITLE_SELECTORS.some(sel => {
    const titleEl = el.querySelector(sel);
    return titleEl && (titleEl.textContent?.trim().length || 0) > 5;
  });
  
  if (!hasTitle) {
    return false;
  }
  
  return true;
}

/**
 * Filter an array of elements to valid content units
 */
function filterValidUnits(nodes: Element[]): HTMLElement[] {
  return Array.from(nodes)
    .filter(el => isValidContentUnit(el as HTMLElement)) as HTMLElement[];
}

/**
 * Discover content units using priority-based selectors
 */
function discoverUnitsPriority(root: Document | HTMLElement): HTMLElement[] {
  for (const selector of SELECTOR_PRIORITIES) {
    try {
      const nodes = root.querySelectorAll(selector);
      const validUnits = filterValidUnits(Array.from(nodes));
      
      if (validUnits.length >= MIN_UNITS_THRESHOLD) {
        return validUnits;
      }
    } catch {
      // Invalid selector, skip
    }
  }
  
  // Fallback: dynamic discovery
  return discoverUnitsDynamic(root);
}

/**
 * Dynamic fallback discovery for content units
 */
function discoverUnitsDynamic(root: Document | HTMLElement): HTMLElement[] {
  const candidates: HTMLElement[] = [];
  const allDivs = root.querySelectorAll('div, section, li, article');
  
  allDivs.forEach(div => {
    const htmlEl = div as HTMLElement;
    
    // Look for title + content pattern
    const children = htmlEl.children;
    if (children.length < 2) return;
    
    // Check for heading/link (potential title)
    const hasHeading = htmlEl.querySelector('h1, h2, h3, h4, h5, a[href]');
    if (!hasHeading) return;
    
    // Check for text content
    const text = htmlEl.innerText?.trim() || '';
    if (text.length < MIN_TEXT_LENGTH) return;
    
    // Avoid nested duplicates
    const isNested = candidates.some(c => c.contains(htmlEl) || htmlEl.contains(c));
    if (!isNested && isValidContentUnit(htmlEl)) {
      candidates.push(htmlEl);
    }
  });
  
  // Deduplicate and limit
  const seen = new Set<HTMLElement>();
  const result: HTMLElement[] = [];
  
  for (const el of candidates) {
    let hasParent = false;
    for (const other of candidates) {
      if (other !== el && other.contains(el)) {
        hasParent = true;
        break;
      }
    }
    
    if (!hasParent && !seen.has(el)) {
      seen.add(el);
      result.push(el);
      
      if (result.length >= 50) break; // Reasonable limit
    }
  }
  
  return result;
}

/**
 * Extract title from a content unit
 */
function extractTitle(element: HTMLElement): string {
  for (const sel of TITLE_SELECTORS) {
    const titleEl = element.querySelector(sel) as HTMLElement | null;
    const text = titleEl?.innerText?.trim() || titleEl?.textContent?.trim();
    if (text && text.length > 5) {
      return text;
    }
  }
  
  // Fallback: first significant text
  const firstText = Array.from(element.querySelectorAll('*'))
    .map(el => (el as HTMLElement).innerText?.trim())
    .find(text => text && text.length > 10);
  
  return firstText || 'Content';
}

/**
 * Extract source/author from a content unit
 */
function extractSource(element: HTMLElement): string {
  for (const sel of SOURCE_SELECTORS) {
    const sourceEl = element.querySelector(sel) as HTMLElement | null;
    const text = sourceEl?.innerText?.trim() || sourceEl?.textContent?.trim();
    if (text && text.length > 1) {
      return text;
    }
  }
  
  return window.location.hostname;
}

/**
 * Extract metadata from a content unit
 */
function extractMetadata(element: HTMLElement): string[] {
  const metadata: string[] = [];
  
  // Look for date/time
  const dateEl = element.querySelector('time, .date, .post-date, [datetime]');
  if (dateEl) {
    const date = dateEl.getAttribute('datetime') || dateEl.textContent?.trim();
    if (date) metadata.push(date);
  }
  
  // Look for category/tag
  const tagEls = element.querySelectorAll('.tag, .category, [rel="tag"]');
  tagEls.forEach(el => {
    const tag = (el as HTMLElement).textContent?.trim();
    if (tag && tag.length < 30) {
      metadata.push(tag);
    }
  });
  
  return metadata.slice(0, 5);
}

export const universalAdapter: SiteAdapter = {
  siteId: 'universal',
  matches: [/.*/],
  
  discoverUnits: discoverUnitsPriority,

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

    if (result.decision === 'hide') {
      element.style.display = 'none';
      element.setAttribute('data-calmweb-processed', 'hidden');
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
    } else if (result.decision === 'blur') {
      element.classList.add('calmweb-blurred');
      element.setAttribute('data-calmweb-processed', 'blur');
    } else if (result.decision === 'neutralize' && result.neutralizedTitle) {
      const titleEl = element.querySelector(TITLE_SELECTORS.join(', ')) as HTMLElement | null;
      if (titleEl) titleEl.innerText = result.neutralizedTitle;
      element.setAttribute('data-calmweb-processed', 'neutralized');
    } else {
      element.setAttribute('data-calmweb-processed', 'show');
    }
  }
};