/**
 * Ad Filter Module for CalmWeb
 *
 * Provides backup ad-blocking by hiding common ad elements on web pages.
 * Works alongside content filtering as a lightweight ad blocker.
 */

// ============================================================================
// Common Ad Selectors
// ============================================================================

const AD_SELECTORS = [
  // Generic ad containers
  '[class*="ad-container"]',
  '[class*="ad_container"]',
  '[class*="adContainer"]',
  '[class*="ad-wrapper"]',
  '[class*="ad_wrapper"]',
  '[class*="adWrapper"]',
  '[class*="ad-slot"]',
  '[class*="ad_slot"]',
  '[class*="adSlot"]',
  '[class*="ad-banner"]',
  '[class*="ad_banner"]',
  '[class*="adBanner"]',
  '[class*="ad-unit"]',
  '[class*="ad_unit"]',
  '[class*="adUnit"]',
  '[class*="ad-placement"]',
  '[class*="ad_placement"]',
  '[class*="adPlacement"]',
  '[class*="ad-wrapper"]',
  '[class*="advert"]',
  '[class*="advertisement"]',
  '[class*="advertisment"]',
  '[id*="ad-container"]',
  '[id*="ad_container"]',
  '[id*="adContainer"]',
  '[id*="ad-slot"]',
  '[id*="ad_slot"]',
  '[id*="adSlot"]',
  '[id*="ad-banner"]',
  '[id*="ad_banner"]',
  '[id*="adBanner"]',
  '[id*="ad-unit"]',
  '[id*="ad_unit"]',
  '[id*="adUnit"]',
  '[id*="advert"]',
  '[id*="advertisement"]',

  // Common ad class names
  '.ad',
  '.ads',
  '.adsbygoogle',
  '.ad-placement',
  '.ad-zone',
  '.ad-box',
  '.ad-block',
  '.ad-panel',
  '.ad-section',
  '.ad-label',
  '.ad-placeholder',
  '.ad-overlay',
  '.ad-leaderboard',
  '.ad-sidebar',
  '.ad-inline',
  '.ad-mobile',
  '.ad-desktop',
  '.ad-top',
  '.ad-bottom',
  '.ad-header',
  '.ad-footer',
  '.ad-content',
  '.ad-right',
  '.ad-left',
  '.ad-center',
  '.advert',
  '.advertisement',
  '.advertising',
  '.advertorial',
  '.sponsored',
  '.sponsor',
  '.sponsored-content',
  '.sponsored-post',
  '.promoted',
  '.promotion',
  '.promo',

  // Ad network specific
  '[data-ad]',
  '[data-ad-slot]',
  '[data-ad-client]',
  '[data-ad-format]',
  '[data-adunit]',
  '[data-adunit-path]',
  '[data-dfp]',
  '[data-google-query-id]',
  '[aria-label="advertisement"]',
  '[aria-label="Ad"]',
  '[aria-label="Sponsored"]',

  // Google Ads
  '.google-ad',
  '.googleads',
  '.adsense',
  'ins.adsbygoogle',

  // Common iframe ad patterns
  'iframe[src*="doubleclick.net"]',
  'iframe[src*="googlesyndication.com"]',
  'iframe[src*="googleadservices.com"]',
  'iframe[src*="adnxs.com"]',
  'iframe[src*="amazon-adsystem.com"]',
  'iframe[src*="adsrvr.org"]',
  'iframe[src*="adform.net"]',
  'iframe[src*="moatads.com"]',
  'iframe[src*="outbrain.com"]',
  'iframe[src*="taboola.com"]',
  'iframe[src*="criteo.com"]',
  'iframe[src*="criteo.net"]',
  'iframe[id*="google_ads"]',

  // Social/promoted content
  '[data-testid*="promoted"]',
  '[data-promoted="true"]',
  '[class*="promoted-tweet"]',
  '[class*="sponsored-label"]',
  '[class*="ad-badge"]',

  // Newsletter popups and subscription overlays
  '[class*="newsletter-popup"]',
  '[class*="newsletter-overlay"]',
  '[class*="subscribe-popup"]',
  '[class*="signup-popup"]',
  '[class*="email-signup"]',
  '[class*="mail-signup"]',

  // Cookie consent ads
  '[class*="cookie-banner-ad"]',
  '[class*="consent-banner-promo"]',
];

// ============================================================================
// URL Patterns to Block
// ============================================================================

const AD_URL_PATTERNS = [
  'doubleclick.net',
  'googlesyndication.com',
  'googleadservices.com',
  'adservice.google',
  'pagead2.googlesyndication.com',
  'securepubads.g.doubleclick.net',
  'adnxs.com',
  'amazon-adsystem.com',
  'adsrvr.org',
  'adform.net',
  'moatads.com',
  'outbrain.com',
  'taboola.com',
  'criteo.com',
  'criteo.net',
  'ads-twitter.com',
  'facebook.com/tr',
  'analytics.tiktok.com',
  'snap.licdn.com',
  'bat.bing.com',
];

// ============================================================================
// Core Functions
// ============================================================================

export interface AdFilterResult {
  hidden: number;
  removed: number;
  total: number;
}

/**
 * Hide ad elements by setting display:none
 */
export function hideAds(root: Document | HTMLElement = document): AdFilterResult {
  let hidden = 0;
  let removed = 0;

  for (const selector of AD_SELECTORS) {
    try {
      const elements = root.querySelectorAll(selector);
      for (const el of Array.from(elements)) {
        if (el instanceof HTMLElement) {
          el.style.setProperty('display', 'none', 'important');
          el.setAttribute('data-calmweb-ad-hidden', 'true');
          hidden++;
        }
      }
    } catch {
      // Invalid selector, skip
    }
  }

  // Also handle iframes with ad sources
  const iframes = root.querySelectorAll('iframe');
  for (const iframe of Array.from(iframes)) {
    const src = iframe.getAttribute('src') || '';
    if (AD_URL_PATTERNS.some(pattern => src.includes(pattern))) {
      (iframe as HTMLElement).style.setProperty('display', 'none', 'important');
      iframe.setAttribute('data-calmweb-ad-hidden', 'true');
      hidden++;
    }
  }

  return { hidden, removed, total: hidden + removed };
}

/**
 * Restore hidden ad elements
 */
export function restoreAds(root: Document | HTMLElement = document): number {
  let restored = 0;
  const hiddenAds = root.querySelectorAll('[data-calmweb-ad-hidden="true"]');
  for (const el of Array.from(hiddenAds)) {
    if (el instanceof HTMLElement) {
      el.style.removeProperty('display');
      el.removeAttribute('data-calmweb-ad-hidden');
      restored++;
    }
  }
  return restored;
}

/**
 * Check if a URL matches an ad pattern
 */
export function isAdUrl(url: string): boolean {
  return AD_URL_PATTERNS.some(pattern => url.includes(pattern));
}

/**
 * Get the list of ad selectors (for testing/debugging)
 */
export function getAdSelectors(): string[] {
  return [...AD_SELECTORS];
}

/**
 * Get the list of ad URL patterns (for testing/debugging)
 */
export function getAdUrlPatterns(): string[] {
  return [...AD_URL_PATTERNS];
}

/**
 * Set up a MutationObserver to continuously hide ads as new content loads.
 * Returns a disconnect function to stop observing.
 */
export function observeAndHideAds(root: Document = document): () => void {
  // Initial pass
  hideAds(root);

  const observer = new MutationObserver((mutations) => {
    let hasNewElements = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        hasNewElements = true;
        break;
      }
    }
    if (hasNewElements) {
      hideAds(root);
    }
  });

  observer.observe(root.body || root.documentElement, {
    childList: true,
    subtree: true,
  });

  return () => observer.disconnect();
}
