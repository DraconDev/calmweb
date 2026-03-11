/**
 * Content Script for X (Twitter)
 *
 * Observes tweets, classifies them, and applies decisions.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { xAdapter } from '@/src/adapters/x';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { ClassificationResult, ContentUnit } from '@calmweb/shared';

export default defineContentScript({
  matches: ['*://*.x.com/*', '*://*.twitter.com/*'],
  runAt: 'document_idle',
  main() {
    console.log('[Content] X/Twitter script loaded');

    const style = document.createElement('style');
    style.id = 'calmweb-styles';
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
      [data-calmweb-processed="rebuild"] {
        display: none !important;
      }
      [data-calmweb-processing] {
        opacity: 0.4;
        transition: opacity 0.3s;
      }
    `;
    document.head.appendChild(style);

    const processUnits = async (units: HTMLElement[], isNew: boolean = false) => {
      if (units.length === 0) return;

      const unitDataList: ContentUnit[] = units.map(el => {
        const data = xAdapter.extractData(el);
        data.isNew = isNew;
        return data;
      });

      const results: (ClassificationResult | { error: string })[] = await Promise.all(
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
          xAdapter.applyDecision(el, result);
        }
        el.removeAttribute('data-calmweb-processing');
      });
    };

    // Initial pass
    const initialTweets = xAdapter.discoverUnits(document);
    initialTweets.forEach(el => el.setAttribute('data-calmweb-processing', ''));
    processUnits(initialTweets, false);

    // MutationObserver
    const observer = new MutationObserver((mutations) => {
      const newTweets: HTMLElement[] = [];

      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (xAdapter.discoverUnits(node).length > 0) {
              newTweets.push(...xAdapter.discoverUnits(node));
            } else if (node.querySelectorAll) {
              const descendants = xAdapter.discoverUnits(node);
              const unprocessed = descendants.filter(el => !el.getAttribute('data-calmweb-processing'));
              newTweets.push(...unprocessed);
            }
          }
        }
      }

      if (newTweets.length > 0) {
        newTweets.forEach(el => el.setAttribute('data-calmweb-processing', ''));
        processUnits(newTweets, true);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setInterval(() => {
      const allTweets = xAdapter.discoverUnits(document);
      const unprocessed = allTweets.filter(el => !el.getAttribute('data-calmweb-processing'));
      if (unprocessed.length > 0) {
        unprocessed.forEach(el => el.setAttribute('data-calmweb-processing', ''));
        processUnits(unprocessed, true);
      }
    }, 5000);
  },
});
