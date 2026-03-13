/**
 * Reader Entry Point for CalmWeb
 *
 * Listens for keyboard shortcut to toggle Super Reader mode.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { toggleReader } from '../src/renderer/reader';

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',

  main() {
    console.log('[CalmWeb] Reader content script loaded');

    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        toggleReader();
      }
    });
  },
});