/**
 * Google Search Content Script for CalmWeb
 *
 * Note: Redirect to DDG is now controlled by siteFilter.redirectToDDG setting.
 * This script is kept for potential future Google-specific functionality.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';

export default defineContentScript({
  matches: ['*://*.google.com/*', '*://*.google.co.uk/*', '*://*.google.ca/*', '*://*.google.de/*', '*://*.google.fr/*', '*://*.google.com.au/*'],
  runAt: 'document_idle',

  main() {
    // Redirect is handled by search-filter.ts based on settings
    // This script can be used for Google-specific features in the future
  },
});
