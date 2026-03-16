/**
 * Reader Entry Point for CalmWeb
 *
 * Listens for keyboard shortcut and background messages to toggle Super Reader mode.
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { toggleReader } from '../src/renderer/reader';
import { MESSAGE_TYPES } from '../src/messaging';
import browser from 'webextension-polyfill';

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

    browser.runtime.onMessage.addListener((message: any) => {
      if (message.type === MESSAGE_TYPES.TOGGLE_READER) {
        console.log('[CalmWeb] Toggle reader via message');
        toggleReader();
      }
      if (message.type === MESSAGE_TYPES.OPEN_READER) {
        console.log('[CalmWeb] Open reader via message');
        toggleReader(); // Will open if not already open
      }
      if (message.type === MESSAGE_TYPES.CLOSE_READER) {
        console.log('[CalmWeb] Close reader via message');
        toggleReader(); // Will close if already open
      }
    });
  },
});