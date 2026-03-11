/**
 * Content Script for YouTube
 *
 * Observes video cards, classifies them via background, and applies decisions.
 */

import { defineContentScript } from 'wxt';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { youtubeAdapter } from '@/src/adapters/youtube';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { ClassificationResult, ContentUnit } from '@calmweb/shared';

export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  runAt: 'document_idle',
  main() {
    console.log('[Content] YouTube script loaded');

    // Inject global styles for blur/hide effects
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

      // Prepare data payloads
      const unitDataList: ContentUnit[] = units.map(el => {
        const data = youtubeAdapter.extractData(el);
        data.isNew = isNew;
        return data;
      });

      // Batch classify via background
      const results: (ClassificationResult | { error: string })[] = await Promise.all(
        unitDataList.map(unit =>
          sendToBackground<ClassificationResult>({
            type: MESSAGE_TYPES.CLASSIFY_UNIT,
            unit,
          })
        )
      );

      // Apply decisions to the corresponding elements
      units.forEach((el, idx) => {
        const result = results[idx];
        if (result && !('error' in result)) {
          youtubeAdapter.applyDecision(el, result);
        }
        // Remove processing flag
        el.removeAttribute('data-calmweb-processing');
      });
    };

    // Initial pass: process all existing video cards
    const initialCards = youtubeAdapter.discoverUnits(document);
    initialCards.forEach(el => el.setAttribute('data-calmweb-processing', ''));
    processUnits(initialCards, false);

    // MutationObserver for infinite scroll / dynamically loaded content
    const observer = new MutationObserver((mutations) => {
      const newCards: HTMLElement[] = [];

      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            // Check if the added node itself is a video card
            if (youtubeAdapter.discoverUnits(node).length > 0) {
              newCards.push(...youtubeAdapter.discoverUnits(node));
            } else if (node.querySelectorAll) {
              // Or contains video cards as descendants
              const descendants = youtubeAdapter.discoverUnits(node);
              // Filter out ones already processed
              const unprocessed = descendants.filter(el => !el.getAttribute('data-calmweb-processing'));
              newCards.push(...unprocessed);
            }
          }
        }
      }

      if (newCards.length > 0) {
        newCards.forEach(el => el.setAttribute('data-calmweb-processing', ''));
        processUnits(newCards, true);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Optional: Re-scan periodically in case YouTube does major DOM changes
    setInterval(() => {
      const allCards = youtubeAdapter.discoverUnits(document);
      const unprocessed = allCards.filter(el => !el.getAttribute('data-calmweb-processed'));
      if (unprocessed.length > 0) {
        unprocessed.forEach(el => el.setAttribute('data-calmweb-processing', ''));
        processUnits(unprocessed, true);
      }
    }, 5000);
  },
});
