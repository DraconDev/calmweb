/**
 * Reader Entry Point for CalmWeb
 *
 * Listens for keyboard shortcut to toggle Super Reader mode.
 */

export default defineContentScript({
  matches: ['<all_urls>'],

  main() {
    import('../src/renderer/reader').then(({ toggleReader }) => {
      document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'r') {
          e.preventDefault();
          toggleReader();
        }
      });

      browser.runtime.onMessage.addListener((message: { type: string }) => {
        if (message.type === 'TOGGLE_READER') {
          toggleReader();
        }
      });
    });
  },
});