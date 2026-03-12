/**
 * Content Script for Universal Site Support
 *
 * Observes generic web units, classifies them via background, and applies decisions.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { universalAdapter } from '@/src/adapters/universal';
import { youtubeAdapter, redditAdapter, xAdapter } from '@/src/adapters';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { ClassificationResult, ContentUnit } from '@calmweb/shared';

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  main() {
    // Skip if a specific adapter is already handling the page
    const url = window.location.href;
    const specificSite = [youtubeAdapter, redditAdapter, xAdapter].some(adapter => 
      adapter.matches.some(regex => regex.test(url))
    );
    if (specificSite) return;

    console.log('[Content] Universal script loaded for', window.location.hostname);

    const style = document.createElement('style');
    style.id = 'calmweb-styles-universal';
    style.textContent = `
      [data-calmweb-processed="blur"] {
        filter: blur(10px) !important;
        transition: filter 0.3s ease !important;
        pointer-events: auto;
      }
      [data-calmweb-processed="blur"]:hover {
        filter: none !important;
      }
      [data-calmweb-processed="hidden"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    const processUnits = async (units: HTMLElement[]) => {
      if (units.length === 0) return;

      const unitDataList: ContentUnit[] = units.map(el => {
        const data = universalAdapter.extractData(el);
        return data;
      });

      const results = await Promise.all(
        unitDataList.map(unit =>
          sendToBackground<ClassificationResult>({
            type: MESSAGE_TYPES.CLASSIFY_UNIT,
            unit,
          })
        )
      );

      units.forEach((el, idx) => {
        const result = results[idx];
        if (result && !('error' in result)) {
          universalAdapter.applyDecision(el, result);
        }
      });
    };

    // Initial pass
    processUnits(universalAdapter.discoverUnits(document));

    // Simple observer
    const observer = new MutationObserver(() => {
      processUnits(universalAdapter.discoverUnits(document).filter(el => !el.hasAttribute('data-calmweb-processed')));
    });

    observer.observe(document.body, { childList: true, subtree: true });
  },
});
