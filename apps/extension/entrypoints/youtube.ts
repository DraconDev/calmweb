/**
 * Content Script for YouTube
 *
 * Observes video cards, classifies them via background, and applies decisions.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { youtubeAdapter } from '@/src/adapters/youtube';
import { MESSAGE_TYPES } from '@/src/messaging';
import { injectCleanupCss } from '@/src/adfilter/css-only';
import { initActivityOverlay } from '@/src/ui/activity-overlay';
import type { ClassificationResult, ContentUnit } from '@calmweb/shared';

export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  runAt: 'document_idle',
  main() {
    console.log('[CalmWeb] YouTube script starting...');

    initActivityOverlay().catch(e => console.error('[CalmWeb] Overlay error:', e));

    // Inject CSS cleanup rules (ads, popups, cookie banners, etc.)
    injectCleanupCss();

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

    let filteredCount = 0;

    const processUnits = async (units: HTMLElement[], isNew: boolean = false) => {
      console.log(`[CalmWeb] YouTube: Processing ${units.length} units (isNew: ${isNew})`);
      if (units.length === 0) return;

      // Prepare data payloads
      const unitDataList: ContentUnit[] = units.map((el) => {
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
          if (result.decision !== 'show') {
            filteredCount++;
          }
        }
        el.removeAttribute('data-calmweb-processing');
      });
      
      console.log(`[CalmWeb] YouTube: Total filtered so far: ${filteredCount}`);
    };

    // Initial pass: process all existing video cards
    const initialCards = youtubeAdapter.discoverUnits(document);
    console.log('[CalmWeb] YouTube: Found', initialCards.length, 'video cards');
    
    if (initialCards.length === 0) {
      console.log('[CalmWeb] YouTube: No cards found with specific selectors, will rely on universal adapter');
      // Don't return early - let universal adapter also run as fallback
      // But still set up observers for if YouTube loads more content
    } else {
      initialCards.forEach(el => el.setAttribute('data-calmweb-processing', ''));
      processUnits(initialCards, false);
    }

    // MutationObserver for infinite scroll / dynamically loaded content
    const observer = new MutationObserver((mutations) => {
      const newCards: HTMLElement[] = [];

      for (const mutation of mutations) {
        const added = mutation.addedNodes;
        for (let i = 0; i < added.length; i++) {
          const node = added[i];
          if (node instanceof HTMLElement) {
            if (node.matches && node.matches('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer')) {
              newCards.push(node);
            } else {
              const descendants = youtubeAdapter.discoverUnits(node);
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

    // Periodic rescan (in case YouTube loads content slowly)
    setInterval(() => {
      const allCards = youtubeAdapter.discoverUnits(document);
      const unprocessed = allCards.filter(el => !el.getAttribute('data-calmweb-processing'));
      if (unprocessed.length > 0) {
        console.log('[CalmWeb] YouTube: Periodic rescan found', unprocessed.length, 'new cards');
        unprocessed.forEach(el => el.setAttribute('data-calmweb-processing', ''));
        processUnits(unprocessed, true);
      }
    }, 5000);
  },
});
