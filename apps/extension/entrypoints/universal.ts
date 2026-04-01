/**
 * Content Script for Universal Site Support
 *
 * Uses the universalAdapter which handles ALL content discovery:
 * - Works on ANY page (Wikipedia, news sites, blogs, etc.)
 * - Finds content using multiple strategies
 * - No site-specific selectors needed
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { universalAdapter } from '@/src/adapters/universal';
import { MESSAGE_TYPES } from '@/src/messaging';
import { observeAndHideAds } from '@/src/adfilter';
import { injectCleanupCss } from '@/src/adfilter/css-only';
import { initActivityOverlay } from '@/src/ui/activity-overlay';
import type { ClassificationResult, ContentUnit } from '@calmweb/shared';

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  main() {
    console.log('[CalmWeb] Universal script starting on:', window.location.hostname);

    initActivityOverlay().then(() => {
      console.log('[CalmWeb] Activity overlay initialized');
    });

    // Inject CSS cleanup rules
    injectCleanupCss();

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
      [data-calmweb-processed="hidden"],
      [data-calmweb-processed="collapsed"] {
        display: none !important;
      }
      [data-calmweb-processing] {
        opacity: 0.5;
      }
    `;
    document.head.appendChild(style);

    let processedCount = 0;
    let filteredCount = 0;

    const processUnits = async (units: HTMLElement[]) => {
      if (units.length === 0) return;

      const unitDataList: ContentUnit[] = units.map(el => {
        const data = universalAdapter.extractData(el);
        el.setAttribute('data-calmweb-processing', 'true');
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
        el.removeAttribute('data-calmweb-processing');
        
        if (result && !('error' in result)) {
          universalAdapter.applyDecision(el, result);
          processedCount++;
          if (result.decision !== 'show') {
            filteredCount++;
            console.log(`[CalmWeb] Filtered "${result.decision}": ${result.reason}`);
          }
        }
      });

      console.log(`[CalmWeb] Total: ${processedCount} processed, ${filteredCount} filtered`);
    };

    // Initial pass
    const initialUnits = universalAdapter.discoverUnits(document);
    console.log('[CalmWeb] Discovered', initialUnits.length, 'content items');
    processUnits(initialUnits);

    // Observer for dynamically loaded content
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          for (const node of Array.from(mutation.addedNodes)) {
            if (node instanceof HTMLElement) {
              const units = universalAdapter.discoverUnits(node);
              const unprocessed = units.filter(el => !el.hasAttribute('data-calmweb-processed'));
              if (unprocessed.length > 0) {
                processUnits(unprocessed);
              }
            }
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Periodic rescan
    setInterval(() => {
      const allUnits = universalAdapter.discoverUnits(document);
      const unprocessed = allUnits.filter(el => !el.hasAttribute('data-calmweb-processed'));
      if (unprocessed.length > 0) {
        processUnits(unprocessed);
      }
    }, 5000);

    // Ad filter
    observeAndHideAds(document);
  },
});
