/**
 * Universal Site Adapter for CalmWeb
 * 
 * A fallback adapter that handles generic web content on any site.
 */

import type { SiteAdapter } from '@calmweb/shared';
import { generateFingerprint } from '@calmweb/shared';

// Generic selectors for common web content
const SELECTORS = {
  units: 'article, section, .post, .entry, .item, li',
  title: 'h1, h2, h3, h4, .title, .heading, a[href*="/p/"]',
  source: '.author, .source, .site-name, cite, span[class*="author"]',
} as const;

export const universalAdapter: SiteAdapter = {
  siteId: 'universal',
  matches: [/.*/], // Match everything
  
  discoverUnits(root) {
    const nodes = root.querySelectorAll(SELECTORS.units);
    // Filter out very small or hidden elements
    return Array.from(nodes).filter(el => {
      const htmlEl = el as HTMLElement;
      return htmlEl.innerText?.length > 20 && htmlEl.offsetHeight > 40;
    }) as HTMLElement[];
  },

  extractData(element) {
    const titleEl = element.querySelector(SELECTORS.title) as HTMLElement | null;
    const title = (titleEl?.innerText || titleEl?.textContent || 'Generic Content').trim();
    
    const sourceEl = element.querySelector(SELECTORS.source) as HTMLElement | null;
    const sourceName = (sourceEl?.innerText || sourceEl?.textContent || window.location.hostname).trim();

    const fingerprint = generateFingerprint({ title, sourceName, site: 'universal', metadata: [] });

    return {
      id: element.id || `uni-${fingerprint}`,
      site: 'universal',
      fingerprint,
      sourceName,
      title,
      metadata: [],
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
    } else if (result.decision === 'blur') {
      element.classList.add('calmweb-blurred');
      element.setAttribute('data-calmweb-processed', 'blur');
    } else if (result.decision === 'neutralize' && result.neutralizedTitle) {
      const titleEl = element.querySelector(SELECTORS.title) as HTMLElement | null;
      if (titleEl) titleEl.innerText = result.neutralizedTitle;
      element.setAttribute('data-calmweb-processed', 'neutralized');
    } else {
      element.setAttribute('data-calmweb-processed', 'show');
    }
  }
};
