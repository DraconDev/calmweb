/**
 * YouTube Site Adapter for CalmWeb
 *
 * Handles discovery, extraction, and application of classification decisions
 * on YouTube video cards (ytd-rich-item-renderer, ytd-video-renderer).
 */

import type { SiteAdapter, ContentUnit, ClassificationResult } from '@calmweb/shared';
import { generateFingerprint } from '@calmweb/shared';

// Selectors (YouTube uses Polymer/Shadow DOM sometimes, but these work on light DOM)
const SELECTORS = {
  videoCard: 'ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer',
  title: '#video-title, a#video-title-link, #video-title a',
  channel: '#text.ytd-channel-name, #channel-name a, ytd-channel-name',
  metadata: '#metadata-line yt-formatted-string',
  // For shorts
  shortCard: 'ytd-reel-video-renderer',
  shortTitle: '#overlay #title',
} as const;

/**
 * Check if an element is a YouTube video card
 */
function isVideoCard(element: HTMLElement): boolean {
  return element.tagName === 'YT-RICH-ITEM-RENDERER' ||
         element.tagName === 'YT-VIDEO-RENDERER' ||
         element.tagName === 'YT-GRID-VIDEO-RENDERER' ||
         element.tagName === 'YTD-REEL-VIDEO-RENDERER' ||
         element.closest(SELECTORS.videoCard) !== null;
}

/**
 * Discover all video card elements within a root
 */
export function discoverUnits(root: Document | HTMLElement): HTMLElement[] {
  const nodes = root.querySelectorAll(SELECTORS.videoCard);
  return Array.from(nodes) as HTMLElement[];
}

/**
 * Extract data from a video card element
 */
export function extractData(element: HTMLElement): ContentUnit {
  // Find title within the card
  const titleEl = element.querySelector(SELECTORS.title) as HTMLElement | null;
  const title = titleEl?.innerText?.trim() || 'Untitled';

  // Find channel/source name
  const channelEl = element.querySelector(SELECTORS.channel) as HTMLElement | null;
  const sourceName = channelEl?.innerText?.trim();

  // Extract metadata strings
  const metadataEls = element.querySelectorAll(SELECTORS.metadata);
  const metadata = Array.from(metadataEls)
    .map(el => (el as HTMLElement).innerText.trim())
    .filter(Boolean);

  // Generate fingerprint (title + source)
  const fingerprint = generateFingerprint({ title, sourceName, site: 'youtube', metadata });

  // Use element.id or generate a unique ID
  const id = element.id || `yt-${fingerprint}`;

  return {
    id,
    site: 'youtube',
    fingerprint,
    sourceName,
    title,
    metadata,
    isNew: false,
  };
}

/**
 * Apply a classification decision to a video card element
 */
export function applyDecision(element: HTMLElement, result: ClassificationResult): void {
  // Remove any previous CalmWeb modifications
  element.removeAttribute('data-calmweb-processed');
  element.style.display = '';
  element.style.filter = '';
  element.style.opacity = '';
  element.style.transition = '';
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
    const titleEl = element.querySelector(SELECTORS.title) as HTMLElement | null;
    if (titleEl) {
      titleEl.innerText = result.neutralizedTitle;
      titleEl.setAttribute('title', result.neutralizedTitle);
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

  // Default: show (no modification)
  element.setAttribute('data-calmweb-processed', 'show');
}

/**
 * YouTube Site Adapter
 */
export const youtubeAdapter: SiteAdapter = {
  siteId: 'youtube',
  matches: [
    /^https?:\/\/(www\.)?youtube\.com\/.*/,
    /^https?:\/\/youtu\.be\/.*/,
  ],
  discoverUnits,
  extractData,
  applyDecision,
};
