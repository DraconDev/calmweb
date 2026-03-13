/**
 * Reddit Site Adapter for CalmWeb
 *
 * Handles Reddit post cards on both new Reddit (reddit.com) and old format.
 */

import type { SiteAdapter, ContentUnit, ClassificationResult } from '@calmweb/shared';
import { generateFingerprint } from '@calmweb/shared';
import { createCollapsePlaceholder } from '@/src/renderer/collapse';

// New Reddit selectors
const NEW_REDDIT = {
  postCard: '[data-testid="post-container"], div[data-click-id="body"]',
  title: '[data-testid="post-title"], h3',
  subreddit: '[data-testid="subreddit-name"] a, a[href*="/r/"]',
  metadata: '[data-testid="post-options-menu"] span, .text-neutral-content',
} as const;

// Old Reddit selectors (fallback)
const OLD_REDDIT = {
  postCard: '.thing.thing-type-self, .thing.thing-type-link',
  title: '.title a',
  subreddit: '.subreddit a',
  metadata: '.tagline span',
} as const;

/**
 * Check if we're on new Reddit
 */
function isNewReddit(): boolean {
  return window.location.hostname === 'www.reddit.com' ||
         window.location.hostname === 'reddit.com';
}

/**
 * Discover all post card elements within a root
 */
export function discoverUnits(root: Document | HTMLElement): HTMLElement[] {
  const selectors = isNewReddit()
    ? NEW_REDDIT.postCard
    : `${NEW_REDDIT.postCard}, ${OLD_REDDIT.postCard}`;

  const nodes = root.querySelectorAll(selectors);
  return Array.from(nodes) as HTMLElement[];
}

/**
 * Extract data from a Reddit post card
 */
export function extractData(element: HTMLElement): ContentUnit {
  const newReddit = isNewReddit();
  const titleEl = element.querySelector(newReddit ? NEW_REDDIT.title : OLD_REDDIT.title) as HTMLElement | null;
  const title = (titleEl?.innerText || titleEl?.textContent || '').trim() || 'Untitled';

  const subredditEl = element.querySelector(newReddit ? NEW_REDDIT.subreddit : OLD_REDDIT.subreddit) as HTMLElement | null;
  let sourceName = (subredditEl?.innerText || subredditEl?.textContent || '').trim() || undefined;
  if (!sourceName && subredditEl) {
    // Try to extract from href if it's an anchor
    const anchor = subredditEl as HTMLAnchorElement;
    if (anchor.getAttribute?.('href')) {
      const href = anchor.getAttribute('href') || '';
      const match = href.match(/\/r\/([^\/]+)/);
      if (match) {
        sourceName = `r/${match[1]}`;
      }
    }
  }

  const metadataEls = element.querySelectorAll(newReddit ? NEW_REDDIT.metadata : OLD_REDDIT.metadata);
  const metadata = Array.from(metadataEls)
    .map(el => ((el as HTMLElement).innerText || el.textContent || '').trim())
    .filter(Boolean);

  const fingerprint = generateFingerprint({ title, sourceName, site: 'reddit', metadata });
  const id = element.id || `reddit-${fingerprint}`;

  return {
    id,
    site: 'reddit',
    fingerprint,
    sourceName,
    title,
    metadata,
    isNew: false,
  };
}

/**
 * Apply classification decision to a Reddit post card
 */
export function applyDecision(element: HTMLElement, result: ClassificationResult): void {
  element.removeAttribute('data-calmweb-processed');
  element.style.display = '';
  element.style.filter = '';
  element.classList.remove('calmweb-blurred', 'calmweb-hidden', 'calmweb-neutralized');

  if (result.decision === 'hide') {
    element.style.display = 'none';
    element.setAttribute('data-calmweb-processed', 'hidden');
    return;
  }

  if (result.decision === 'blur') {
    element.classList.add('calmweb-blurred');
    element.setAttribute('data-calmweb-processed', 'blur');
    return;
  }

  if (result.decision === 'neutralize' && result.neutralizedTitle) {
    const newReddit = isNewReddit();
    const titleEl = element.querySelector(newReddit ? NEW_REDDIT.title : OLD_REDDIT.title) as HTMLElement | null;
    if (titleEl) {
      titleEl.innerText = result.neutralizedTitle;
    }
    element.classList.add('calmweb-neutralized');
    element.setAttribute('data-calmweb-processed', 'neutralized');
    return;
  }

  if (result.decision === 'rebuild') {
    element.style.display = 'none';
    element.setAttribute('data-calmweb-processed', 'rebuild');
    return;
  }

  element.setAttribute('data-calmweb-processed', 'show');
}

/**
 * Reddit Site Adapter
 */
export const redditAdapter: SiteAdapter = {
  siteId: 'reddit',
  matches: [
    /^https?:\/\/(www\.)?reddit\.com\/.*/,
    /^https?:\/\/old\.reddit\.com\/.*/,
  ],
  discoverUnits,
  extractData,
  applyDecision,
};
