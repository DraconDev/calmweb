/**
 * X (Twitter) Site Adapter for CalmWeb
 *
 * Handles tweet cards in timelines, search results, and threads.
 */

import type { SiteAdapter, ContentUnit, ClassificationResult } from '@calmweb/shared';
import { generateFingerprint } from '@calmweb/shared';
import { createCollapsePlaceholder } from '@/src/renderer/collapse';

// X selectors (data-testIDs are relatively stable)
const SELECTORS = {
  tweet: '[data-testid="tweet"], [data-testid="cellInnerDiv"]',
  text: '[data-testid="tweetText"], .x-wi5j6c',
  userName: '[data-testid="User-Name"] [data-testid="User-Name"] , [data-testid="_user"] , .css-901oao a',
  displayName: '[data-testid="User-Name"] span, .css-901oao span:first-child',
  // For media cards
  mediaCard: '[data-testid="tweet"] article',
} as const;

/**
 * Discover all tweet elements within a root
 */
export function discoverUnits(root: Document | HTMLElement): HTMLElement[] {
  const tweets = root.querySelectorAll(SELECTORS.tweet);
  return Array.from(tweets) as HTMLElement[];
}

/**
 * Extract data from a tweet element
 */
export function extractData(element: HTMLElement): ContentUnit {
  // Get tweet text
  const textEl = element.querySelector(SELECTORS.text) as HTMLElement | null;
  const title = (textEl?.innerText || textEl?.textContent || '').trim() || 'No text';

  // Get user display name as sourceName
  const displayNameEl = element.querySelector(SELECTORS.displayName) as HTMLElement | null;
  const sourceName = (displayNameEl?.innerText || displayNameEl?.textContent || '').trim() || undefined;

  // Metadata could include user handle, timestamp, retweets, likes, etc.
  const metaEls = element.querySelectorAll('[data-testid*="engagement"] span, [data-testid="timestamp"]');
  const metadata = Array.from(metaEls)
    .map(el => ((el as HTMLElement).innerText || el.textContent || '').trim())
    .filter(Boolean);

  const fingerprint = generateFingerprint({ title, sourceName, site: 'x', metadata });
  const id = element.id || `x-${fingerprint}`;

  return {
    id,
    site: 'x',
    fingerprint,
    sourceName,
    title,
    metadata,
    isNew: false,
  };
}

/**
 * Apply classification decision to a tweet element
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
    const textEl = element.querySelector(SELECTORS.text) as HTMLElement | null;
    if (textEl) {
      textEl.innerText = result.neutralizedTitle;
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
 * X Site Adapter
 */
export const xAdapter: SiteAdapter = {
  siteId: 'x',
  matches: [
    /^https?:\/\/(www\.)?x\.com\/.*/,
    /^https?:\/\/(www\.)?twitter\.com\/.*/,
  ],
  discoverUnits,
  extractData,
  applyDecision,
};
