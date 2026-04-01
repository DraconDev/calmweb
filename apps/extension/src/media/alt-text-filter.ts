/**
 * Alt-Text Media Filter
 *
 * Analyzes image/video alt text for clickbait/ragebait patterns
 * and optionally blurs/hides matching media.
 */

import { rewriteWithLocalRules } from '@/src/neutralizer/local-rules';
import type { MediaFilterSettings } from '@calmweb/shared';
import { defaultMediaFilterSettings } from '@calmweb/shared';

export interface MediaFilterResult {
  element: HTMLElement;
  shouldFilter: boolean;
  reason?: string;
  altText?: string;
  confidence: number;
}

const MEDIA_SELECTORS = [
  'img[alt]',
  'video[aria-label]',
  '[role="img"][aria-label]',
  'picture img[alt]',
  'figure img[alt]',
];

const THUMBNAIL_SELECTORS: Record<string, string[]> = {
  youtube: [
    'ytd-thumbnail img',
    'ytd-video-preview img',
    '#thumbnail img',
  ],
  reddit: [
    '[data-testid="post-container"] img',
    '.thumbnail img',
  ],
  x: [
    '[data-testid="tweet"] img',
    '[data-testid="previewInterstitialImage"]',
  ],
};

let currentSettings: MediaFilterSettings = defaultMediaFilterSettings;
let filteredCount = 0;

export function setMediaFilterSettings(settings: MediaFilterSettings): void {
  currentSettings = settings;
}

export function getMediaFilterSettings(): MediaFilterSettings {
  return currentSettings;
}

export function discoverMedia(root: Document | HTMLElement = document): HTMLImageElement[] {
  const elements: HTMLImageElement[] = [];
  
  for (const selector of MEDIA_SELECTORS) {
    const nodes = root.querySelectorAll<HTMLImageElement>(selector);
    elements.push(...Array.from(nodes));
  }
  
  return elements;
}

export function analyzeAltText(altText: string): {
  shouldFilter: boolean;
  reason?: string;
  confidence: number;
} {
  if (!altText || altText.length < 3) {
    return { shouldFilter: false, confidence: 0 };
  }
  
  const result = rewriteWithLocalRules(altText, { mode: 'medium' });
  
  if (result.changes.length === 0) {
    return { shouldFilter: false, confidence: 0 };
  }
  
  const reason = result.changes
    .map(c => `"${c.original}" → "${c.replacement}"`)
    .join(', ');
  
  const confidence = Math.min(1, result.changes.length * 0.25);
  
  return {
    shouldFilter: confidence >= currentSettings.blurThreshold,
    reason,
    confidence,
  };
}

export function filterMedia(
  root: Document | HTMLElement = document,
  options: {
    siteId?: string;
  } = {}
): MediaFilterResult[] {
  if (!currentSettings.enabled || currentSettings.mode === 'off') {
    return [];
  }

  const { siteId } = options;
  const results: MediaFilterResult[] = [];
  
  let media = discoverMedia(root);
  
  if (siteId && THUMBNAIL_SELECTORS[siteId]) {
    const siteSpecific = THUMBNAIL_SELECTORS[siteId]
      .flatMap(s => Array.from(root.querySelectorAll<HTMLImageElement>(s)));
    if (siteSpecific.length > 0) {
      media = siteSpecific;
    }
  }
  
  for (const element of media) {
    if (element.hasAttribute('data-calmweb-media-hidden') || 
        element.hasAttribute('data-calmweb-media-blurred')) {
      continue;
    }

    const altText = element.getAttribute('alt') || 
                    element.getAttribute('aria-label') || '';
    
    const analysis = analyzeAltText(altText);
    
    const result: MediaFilterResult = {
      element,
      shouldFilter: analysis.shouldFilter,
      reason: analysis.reason,
      altText,
      confidence: analysis.confidence,
    };

    if (analysis.confidence >= currentSettings.hideThreshold && currentSettings.mode === 'hide') {
      element.style.setProperty('display', 'none', 'important');
      element.setAttribute('data-calmweb-media-hidden', 'true');
      element.setAttribute('data-calmweb-reason', analysis.reason || '');
      filteredCount++;
      window.dispatchEvent(new CustomEvent('calmweb:mediaFiltered', {
        detail: { altText, reason: analysis.reason, action: 'hide', confidence: analysis.confidence }
      }));
    } else if (analysis.confidence >= currentSettings.blurThreshold && currentSettings.mode === 'blur') {
      element.style.filter = 'blur(20px)';
      element.style.transition = 'filter 0.2s';
      element.setAttribute('data-calmweb-media-blurred', 'true');
      element.setAttribute('data-calmweb-reason', analysis.reason || '');
      filteredCount++;
      window.dispatchEvent(new CustomEvent('calmweb:mediaFiltered', {
        detail: { altText, reason: analysis.reason, action: 'blur', confidence: analysis.confidence }
      }));
      
      if (currentSettings.revealOnHover) {
        element.addEventListener('mouseenter', () => {
          element.style.filter = 'none';
        });
        element.addEventListener('mouseleave', () => {
          element.style.filter = 'blur(20px)';
        });
      }
    }
    
    results.push(result);
  }
  
  return results;
}

export function unfilterAllMedia(): void {
  const hidden = document.querySelectorAll('[data-calmweb-media-hidden]');
  const blurred = document.querySelectorAll('[data-calmweb-media-blurred]');
  
  hidden.forEach(el => {
    (el as HTMLElement).style.display = '';
    el.removeAttribute('data-calmweb-media-hidden');
    el.removeAttribute('data-calmweb-reason');
  });
  
  blurred.forEach(el => {
    (el as HTMLElement).style.filter = '';
    (el as HTMLElement).style.transition = '';
    el.removeAttribute('data-calmweb-media-blurred');
    el.removeAttribute('data-calmweb-reason');
  });

  filteredCount = 0;
}

export function getFilteredCount(): number {
  return filteredCount;
}

export function getMediaStats(): {
  total: number;
  hidden: number;
  blurred: number;
} {
  const total = document.querySelectorAll('[data-calmweb-media-hidden], [data-calmweb-media-blurred]').length;
  const hidden = document.querySelectorAll('[data-calmweb-media-hidden]').length;
  const blurred = document.querySelectorAll('[data-calmweb-media-blurred]').length;
  
  return { total, hidden, blurred };
}
