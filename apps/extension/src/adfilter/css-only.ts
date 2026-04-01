/**
 * CSS-only Cleanup Module for CalmWeb
 *
 * Injects a <style> tag to hide annoying elements on any page.
 * No DOM manipulation, no scoring heuristic, no extraction.
 * Browser handles everything - extremely reliable.
 */

const CLEANUP_STYLE_ID = 'calmweb-cleanup-css';

// CSS rules that hide common annoyances
const CLEANUP_CSS = `
  /* ============================================================
   * Ads & Sponsored Content
   * ============================================================ */

  /* Generic ad containers */
  [class*="ad-container"],
  [class*="ad_wrapper"],
  [class*="adWrapper"],
  [class*="ad-slot"],
  [class*="adSlot"],
  [class*="ad-banner"],
  [class*="adBanner"],
  [class*="ad-unit"],
  [class*="adUnit"],
  [class*="ad-placement"],
  [class*="adPlacement"],
  [class*="advert"],
  [class*="advertisement"],
  [class*="advertisment"],
  [class*="ad-sidebar"],
  [class*="ad-leaderboard"],
  [class*="ad-inline"],
  [class*="ad-overlay"],
  [class*="ad-popup"],
  .ad, .ads, .adsbygoogle, .ad-zone, .ad-box,
  .ad-block, .ad-panel, .ad-section, .ad-label,
  .ad-placeholder, .ad-mobile, .ad-desktop,
  .ad-top, .ad-bottom, .ad-header, .ad-footer,
  .ad-content, .ad-right, .ad-left, .ad-center,
  .advert, .advertisement, .advertising, .advertorial,
  .sponsored, .sponsor, .sponsored-content, .sponsored-post,
  .promoted, .promotion, .promo,

  /* Ad attributes */
  [data-ad],
  [data-ad-slot],
  [data-ad-client],
  [data-ad-format],
  [data-adunit],
  [aria-label="advertisement"],
  [aria-label="Ad"],
  [aria-label="Sponsored"],

  /* Google Ads */
  .google-ad, .googleads, .adsense,
  ins.adsbygoogle,

  /* Ad network iframes */
  iframe[src*="doubleclick.net"],
  iframe[src*="googlesyndication.com"],
  iframe[src*="googleadservices.com"],
  iframe[src*="adnxs.com"],
  iframe[src*="amazon-adsystem.com"],
  iframe[src*="adsrvr.org"],
  iframe[src*="adform.net"],
  iframe[src*="moatads.com"],
  iframe[src*="outbrain.com"],
  iframe[src*="taboola.com"],
  iframe[src*="criteo.com"],
  iframe[src*="criteo.net"],
  iframe[id*="google_ads"],

  /* Social promoted content */
  [data-testid*="promoted"],
  [data-promoted="true"],
  [class*="promoted-tweet"],
  [class*="sponsored-label"],
  [class*="ad-badge"],

  /* ============================================================
   * Popups & Modals (cookie, newsletter, etc.)
   * ============================================================ */

  /* Cookie/consent banners */
  [class*="cookie-banner"],
  [class*="cookie-banner-overlay"],
  [class*="cookie-notice"],
  [class*="cookie-consent"],
  [class*="cookie-popup"],
  [class*="cookie-alert"],
  [class*="cookie-law"],
  [class*="consent-banner"],
  [class*="consent-popup"],
  [class*="consent-modal"],
  [class*="consent-overlay"],
  [class*="gdpr-banner"],
  [class*="gdpr-popup"],
  [class*="gdpr-consent"],
  [class*="gdpr-overlay"],
  [class*="eu-cookie"],
  .cookie-banner, .cookie-notice, .cookie-consent,
  .gdpr-banner, .gdpr-popup,

  /* Newsletter/subscription popups */
  [class*="newsletter-popup"],
  [class*="newsletter-overlay"],
  [class*="newsletter-modal"],
  [class*="subscribe-popup"],
  [class*="subscribe-overlay"],
  [class*="subscribe-modal"],
  [class*="signup-popup"],
  [class*="signup-overlay"],
  [class*="signup-modal"],
  [class*="email-signup"],
  [class*="mail-signup"],
  [class*="email-popup"],
  [class*="mail-popup"],

  /* Generic modals/popups/overlays */
  [class*="popup-overlay"],
  [class*="modal-overlay"],
  [class*="lightbox-overlay"],
  [class*="dialog-overlay"],
  [class*="backdrop-overlay"],
  [class*="mask-overlay"],

  /* App install banners */
  [class*="app-banner"],
  [class*="install-prompt"],
  [class*="download-app"],
  [class*="mobile-app-banner"],
  [class*="app-install-banner"],

  /* Age verification */
  [class*="age-gate"],
  [class*="age-verification"],
  [class*="age-check"],
  [class*="age-popup"],

  /* Surveys & feedback */
  [class*="survey-popup"],
  [class*="feedback-popup"],
  [class*="poll-popup"],
  [class*="rating-popup"],

  /* ============================================================
   * Sidebar & Supplementary Content
   * ============================================================ */

  /* Sidebars */
  [class*="sidebar-right"],
  [class*="sidebar-left"],
  [class*="sidebar-widget"],
  .sidebar, .side-bar, .aside-bar,

  /* Related/recommended */
  [class*="related-articles"],
  [class*="related-posts"],
  [class*="recommended"],
  [class*="suggested-articles"],
  [class*="suggested-posts"],
  [class*="more-stories"],
  [class*="more-articles"],
  [class*="trending-now"],
  [class*="trending-stories"],
  .related, .recommended, .suggestions, .more-stories,
  .trending,

  /* Social share bars */
  [class*="social-share"],
  [class*="share-buttons"],
  [class*="social-links"],
  [class*="social-bar"],
  [class*="share-bar"],
  [class*="social-icons"],
  [class*="social-media"],
  .social-share, .share-buttons, .social-links,
  .social-bar, .share-bar, .social-media,

  /* Comments */
  [class*="comment-section"],
  [class*="comments-section"],
  [class*="comment-container"],
  [class*="responses-section"],
  .comments, #comments, .comment-section,
  .responses, .disqus,

  /* Author bios */
  [class*="author-bio"],
  [class*="author-info"],
  [class*="about-author"],
  .author-bio, .author-info, .about-author,

  /* Tags & categories */
  [class*="tag-list"],
  [class*="tag-cloud"],
  [class*="topic-tags"],
  [class*="category-list"],
  .tags, .tag-list, .categories, .topic-tags,

  /* Breadcrumbs */
  [class*="breadcrumb"],
  .breadcrumb, .breadcrumbs, .crumbs,

  /* Pagination */
  [class*="pagination"],
  .pagination, .pager, .page-nav,

  /* ============================================================
   * Chat Widgets & Tracking
   * ============================================================ */

  /* Chat widgets */
  [class*="intercom"],
  [class*="drift"],
  [class*="zendesk"],
  [class*="crisp"],
  [class*="livechat"],
  [class*="chat-widget"],
  [class*="chat-box"],
  [class*="support-widget"],
  #intercom-container, .intercom-launcher-frame,
  .drift-frame, .zendesk-frame,

  /* Paywalls */
  [class*="paywall"],
  [class*="pay-wall"],
  [class*="metered"],
  [class*="premium-only"],
  [class*="subscriber-only"],
  [class*="members-only"],

  /* ============================================================
   * WordPress & CMS Specific
   * ============================================================ */

  #wpadminbar,
  .wp-block-navigation,
  .amp-sidebar, .amp-menu,

  /* ============================================================
   * Sticky/Fixed elements (annoying)
   * ============================================================ */

  /* Let's not hide all fixed elements - some are navigation
     We'll be selective with common fixed annoyances */
  [class*="sticky-ad"],
  [class*="fixed-ad"],
  [class*="sticky-banner"],
  [class*="fixed-banner"],
  [class*="sticky-footer"],
  [class*="fixed-footer"],
  [class*="sticky-header"],
  [class*="fixed-header"],

  /* ============================================================
   * Promo & Marketing Banners
   * ============================================================ */

  [class*="promo-banner"],
  [class*="promo-bar"],
  [class*="promo-popup"],
  [class*="promo-code"],
  [class*="promo-overlay"],
  [class*="marketing-banner"],
  [class*="marketing-popup"],
  [class*="announcement-bar"],
  [class*="announcement-banner"],
  .promo-banner, .promo-bar, .promo-popup,
  .announcement-bar, .announcement-banner,

  /* ============================================================
   * Dark Reading Mode (optional theming)
   * ============================================================ */

  /* When CalmWeb dark reading mode is enabled */
  .calmweb-dark-mode body {
    background: #1a1a1a !important;
    color: #e0e0e0 !important;
  }

  /* Allow images to still be visible */
  .calmweb-dark-mode img {
    filter: brightness(0.9) contrast(1.1);
  }

  /* Ensure text is readable */
  .calmweb-dark-mode p,
  .calmweb-dark-mode h1,
  .calmweb-dark-mode h2,
  .calmweb-dark-mode h3,
  .calmweb-dark-mode h4,
  .calmweb-dark-mode h5,
  .calmweb-dark-mode h6,
  .calmweb-dark-mode li,
  .calmweb-dark-mode blockquote,
  .calmweb-dark-mode pre,
  .calmweb-dark-mode code {
    color: inherit !important;
  }
`;

/**
 * Inject the CSS cleanup styles into the page.
 * Returns a cleanup function to remove them.
 */
export function injectCleanupCss(): () => void {
  if (document.getElementById(CLEANUP_STYLE_ID)) {
    return () => {}; // Already injected
  }

  const style = document.createElement('style');
  style.id = CLEANUP_STYLE_ID;
  style.textContent = CLEANUP_CSS;
  document.head.appendChild(style);

  return () => {
    const existing = document.getElementById(CLEANUP_STYLE_ID);
    if (existing) {
      existing.remove();
    }
  };
}

/**
 * Check if cleanup CSS is currently injected
 */
export function isCleanupCssInjected(): boolean {
  return !!document.getElementById(CLEANUP_STYLE_ID);
}

/**
 * Toggle the cleanup CSS on/off
 */
export function toggleCleanupCss(): boolean {
  if (isCleanupCssInjected()) {
    const el = document.getElementById(CLEANUP_STYLE_ID);
    if (el) el.remove();
    return false;
  } else {
    injectCleanupCss();
    return true;
  }
}

/**
 * Enable dark reading mode on the page.
 * Note: This is experimental and may conflict with site-specific styling.
 */
export function enableDarkMode(): void {
  document.documentElement.classList.add('calmweb-dark-mode');
}

/**
 * Disable dark reading mode
 */
export function disableDarkMode(): void {
  document.documentElement.classList.remove('calmweb-dark-mode');
}

/**
 * Check if dark mode is enabled
 */
export function isDarkModeEnabled(): boolean {
  return document.documentElement.classList.contains('calmweb-dark-mode');
}

/**
 * Toggle dark mode
 */
export function toggleDarkMode(): boolean {
  if (isDarkModeEnabled()) {
    disableDarkMode();
    return false;
  } else {
    enableDarkMode();
    return true;
  }
}

/**
 * Get the count of selectors in the cleanup CSS (for stats)
 */
export function getCleanupSelectorCount(): number {
  return CLEANUP_CSS.split(',').length;
}

/**
 * Test if a selector exists in the cleanup CSS
 */
export function hasCleanupSelector(selector: string): boolean {
  return CLEANUP_CSS.includes(selector);
}
