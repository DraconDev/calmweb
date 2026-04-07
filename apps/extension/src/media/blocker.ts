import { getMediaAllowlistSettings, isMediaAllowed, getMediaType } from './allowlist';

interface MediaBlockerOptions {
  hideAllowed?: boolean;
}

export async function getBlockedMediaElements(
  root: Document | HTMLElement,
  _options: MediaBlockerOptions = {}
): Promise<HTMLElement[]> {
  const allowlist = await getMediaAllowlistSettings();
  const blocked: HTMLElement[] = [];

  const mediaSelectors = [
    'img',
    'video',
    'audio',
    'source',
    'picture',
    'figure',
    'svg',
    'iframe[src*="youtube"]',
    'iframe[src*="vimeo"]',
    'iframe[src*="video"]',
    'iframe[src*="twitter"]',
    'iframe[src*="instagram"]',
    'embed',
    'object',
    '[class*="video-container"]',
    '[class*="media-wrapper"]',
    '[data-video-src]',
    '[data-audio-src]',
  ];

  for (const selector of mediaSelectors) {
    try {
      const elements = root.querySelectorAll(selector);
      for (const el of Array.from(elements)) {
        if (!(el instanceof HTMLElement)) continue;
        
        const mediaType = getMediaType(el);
        if (!mediaType) continue;

        let src: string | null = null;

        if (el.tagName === 'SOURCE') {
          src = (el as HTMLSourceElement).src;
        } else if (el.tagName === 'VIDEO' || el.tagName === 'AUDIO') {
          src = (el as HTMLMediaElement).currentSrc || (el as HTMLMediaElement).src;
        } else if (el.tagName === 'IMG') {
          src = (el as HTMLImageElement).src;
        } else {
          src = el.getAttribute('src') || el.getAttribute('data-src') || 
                el.getAttribute('data-video-src') || el.getAttribute('data-audio-src');
        }

        if (!src) continue;

        if (!isMediaAllowed(src, mediaType, allowlist)) {
          blocked.push(el);
        }
      }
    } catch {
      continue;
    }
  }

  return blocked;
}

export function hideMediaElement(element: HTMLElement): void {
  element.style.display = 'none';
  element.setAttribute('data-calmweb-media-blocked', 'true');
}

export function hideAllMedia(root: Document | HTMLElement): void {
  getBlockedMediaElements(root).then(elements => {
    for (const el of elements) {
      hideMediaElement(el);
    }
  });
}

export function createMediaPlaceholder(_element: HTMLElement, mediaType: string): HTMLElement {
  const placeholder = document.createElement('div');
  placeholder.className = 'calmweb-media-placeholder';
  placeholder.setAttribute('data-calmweb-media-type', mediaType);
  placeholder.style.cssText = `
    display: none;
  `;
  return placeholder;
}

export async function blockAllMediaInDocument(doc: Document): Promise<number> {
  const blocked = await getBlockedMediaElements(doc);
  for (const el of blocked) {
    hideMediaElement(el);
  }
  return blocked.length;
}

export function setupMediaObserver(
  root: Document | HTMLElement,
  callback?: (blockedCount: number) => void
): MutationObserver {
  const observer = new MutationObserver(async (mutations) => {
    let newBlocked = 0;

    for (const mutation of mutations) {
      for (const node of Array.from(mutation.addedNodes)) {
        if (!(node instanceof HTMLElement)) continue;

        const mediaElements = node.querySelectorAll?.('img, video, audio, source, iframe, picture, svg, embed, object');
        if (mediaElements) {
          for (const el of Array.from(mediaElements)) {
            if (!(el instanceof HTMLElement)) continue;
            
            const mediaType = getMediaType(el);
            if (!mediaType) continue;

            let src: string | null = null;
            if (el.tagName === 'SOURCE') {
              src = (el as HTMLSourceElement).src;
            } else if (el.tagName === 'VIDEO' || el.tagName === 'AUDIO') {
              src = (el as HTMLMediaElement).currentSrc || (el as HTMLMediaElement).src;
            } else if (el.tagName === 'IMG') {
              src = (el as HTMLImageElement).src;
            } else {
              src = el.getAttribute('src') || el.getAttribute('data-src');
            }

            if (!src) continue;

            const allowlist = await getMediaAllowlistSettings();
            if (!isMediaAllowed(src, mediaType, allowlist)) {
              hideMediaElement(el);
              newBlocked++;
            }
          }
        }

        const directMediaType = getMediaType(node);
        if (directMediaType) {
          let src: string | null = null;
          if (node.tagName === 'SOURCE') {
            src = (node as HTMLSourceElement).src;
          } else if (node.tagName === 'VIDEO' || node.tagName === 'AUDIO') {
            src = (node as HTMLMediaElement).currentSrc || (node as HTMLMediaElement).src;
          } else if (node.tagName === 'IMG') {
            src = (node as HTMLImageElement).src;
          }

          if (src) {
            const allowlist = await getMediaAllowlistSettings();
            if (!isMediaAllowed(src, directMediaType, allowlist)) {
              hideMediaElement(node);
              newBlocked++;
            }
          }
        }
      }
    }

    if (newBlocked > 0 && callback) {
      callback(newBlocked);
    }
  });

  observer.observe(root, {
    childList: true,
    subtree: true,
  });

  return observer;
}
