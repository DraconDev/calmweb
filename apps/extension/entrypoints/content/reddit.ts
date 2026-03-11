/**
 * Content Script for Reddit
 *
 * Observes Reddit post cards, classifies them, and applies decisions.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { redditAdapter } from '@/src/adapters/reddit';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { ClassificationResult, ContentUnit } from '@calmweb/shared';

export default defineContentScript({
  matches: ['*://*.reddit.com/*'],
  runAt: 'document_idle',
  main() {
    console.log('[Content] Reddit script loaded');

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
        const data = redditAdapter.extractData(el);
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
          redditAdapter.applyDecision(el, result);
        }
        el.removeAttribute('data-calmweb-processing');
      });
    };

    // Initial pass
    const initialPosts = redditAdapter.discoverUnits(document);
    initialPosts.forEach(el => el.setAttribute('data-calmweb-processing', ''));
    processUnits(initialPosts, false);

    // MutationObserver
    const observer = new MutationObserver((mutations) => {
      const newPosts: HTMLElement[] = [];

      for (const mutation of mutations) {
        const added = mutation.addedNodes;
        for (let i = 0; i < added.length; i++) {
          const node = added[i];
          if (node instanceof HTMLElement) {
            // Reddit post card selectors: check if node itself is a post card
            if (node.matches && node.matches('[data-testid="post-container"], div[data-click-id="body"], .thing.thing-type-self, .thing.thing-type-link')) {
              newPosts.push(node);
            } else {
              const descendants = redditAdapter.discoverUnits(node);
              const unprocessed = descendants.filter(el => !el.getAttribute('data-calmweb-processing'));
              newPosts.push(...unprocessed);
            }
          }
        }
      }

      if (newPosts.length > 0) {
        newPosts.forEach(el => el.setAttribute('data-calmweb-processing', ''));
        processUnits(newPosts, true);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setInterval(() => {
      const allPosts = redditAdapter.discoverUnits(document);
      const unprocessed = allPosts.filter(el => !el.getAttribute('data-calmweb-processing'));
      if (unprocessed.length > 0) {
        unprocessed.forEach(el => el.setAttribute('data-calmweb-processing', ''));
        processUnits(unprocessed, true);
      }
    }, 5000);
  },
});
