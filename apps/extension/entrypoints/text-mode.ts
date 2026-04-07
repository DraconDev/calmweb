/**
 * Content Script for Text-Only Mode (Content Firewall)
 *
 * Transforms pages into text-only content by:
 * 1. Checking if current URL should be skipped
 * 2. Extracting clean text content from the page
 * 3. Blocking all media (only showing from allowlisted domains)
 * 4. Rendering a text-only overlay
 */

import { defineContentScript } from 'wxt/utils/define-content-script';
import { shouldSkipUrl, getSkipListSettings, isTextModeEnabled } from '@/src/filter/skip-list';
import { extractForTextMode, type ExtractedContent } from '@/src/extractor/text-extractor';
import { createTextOverlayWithSettings, removeTextOverlay, isTextOverlayActive } from '@/src/renderer/text-overlay';
import { blockAllMediaInDocument, setupMediaObserver } from '@/src/media/blocker';

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  async main() {
    console.log('[CalmWeb Text Mode] Starting on:', window.location.href);

    const skipList = await getSkipListSettings();

    if (shouldSkipUrl(window.location.href, skipList)) {
      console.log('[CalmWeb Text Mode] Skipping - URL in skip list');
      return;
    }

    const textModeEnabled = await isTextModeEnabled();
    if (!textModeEnabled) {
      console.log('[CalmWeb Text Mode] Text mode disabled');
      return;
    }

    if (isTextOverlayActive()) {
      console.log('[CalmWeb Text Mode] Overlay already active');
      return;
    }

    console.log('[CalmWeb Text Mode] Activating text mode...');

    await activateTextMode();
  },
});

async function activateTextMode(): Promise<void> {
  try {
    const extracted: ExtractedContent = extractForTextMode(document);

    if (!extracted.content || extracted.content.length < 50) {
      console.log('[CalmWeb Text Mode] Insufficient content, skipping');
      return;
    }

    console.log('[CalmWeb Text Mode] Extracted content:', {
      title: extracted.title,
      readingTime: extracted.readingTime,
      contentLength: extracted.content.length,
    });

    const mediaBlockedCount = await blockAllMediaInDocument(document);
    console.log('[CalmWeb Text Mode] Blocked', mediaBlockedCount, 'media elements');

    const overlay = await createTextOverlayWithSettings({
      title: extracted.title,
      content: formatContentForDisplay(extracted.content),
      sourceUrl: extracted.sourceUrl || window.location.href,
      sourceName: extracted.sourceName,
      author: extracted.author,
      date: extracted.date,
      readingTime: extracted.readingTime,
    });

    document.body.appendChild(overlay);

    const observer = setupMediaObserver(document.body, (count) => {
      console.log('[CalmWeb Text Mode] Blocked', count, 'additional media elements');
    });

    (window as unknown as { __calmwebTextModeObserver: MutationObserver }).__calmwebTextModeObserver = observer;

    console.log('[CalmWeb Text Mode] Text overlay activated successfully');
  } catch (error) {
    console.error('[CalmWeb Text Mode] Error activating text mode:', error);
  }
}

function formatContentForDisplay(content: string): string {
  const paragraphs = content.split(/\n\n+/);
  return paragraphs
    .map(p => p.trim())
    .filter(p => p.length > 0)
    .map(p => `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`)
    .join('\n');
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export function deactivateTextMode(): void {
  const observer = (window as unknown as { __calmwebTextModeObserver?: MutationObserver }).__calmwebTextModeObserver;
  if (observer) {
    observer.disconnect();
    delete (window as unknown as { __calmwebTextModeObserver?: MutationObserver }).__calmwebTextModeObserver;
  }

  removeTextOverlay();
  console.log('[CalmWeb Text Mode] Deactivated');
}
