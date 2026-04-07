import { storage } from 'wxt/utils/storage';

type MediaType = 'image' | 'video' | 'audio';

interface MediaAllowlistConfig {
  domains: string[];
  types: MediaType[];
}

interface TextModeSettings {
  enabled: boolean;
  skipList: {
    domains: string[];
    patterns: string[];
  };
  mediaAllowlist: MediaAllowlistConfig;
  layout: {
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
    maxWidth: number;
    padding: number;
    theme: 'light' | 'dark' | 'sepia';
  };
}

const STORAGE_KEY = 'sync:calmweb-textmode-settings';

const defaultSettings: TextModeSettings = {
  enabled: false,
  skipList: { domains: [], patterns: [] },
  mediaAllowlist: { domains: [], types: ['image', 'video', 'audio'] },
  layout: {
    fontFamily: 'Georgia, serif',
    fontSize: 18,
    lineHeight: 1.7,
    maxWidth: 700,
    padding: 32,
    theme: 'light',
  },
};

const textModeStore = storage.defineItem<TextModeSettings>(STORAGE_KEY, {
  fallback: defaultSettings,
});

export async function getMediaAllowlistSettings(): Promise<MediaAllowlistConfig> {
  const settings = await textModeStore.getValue();
  return settings.mediaAllowlist;
}

export async function addMediaDomain(domain: string): Promise<void> {
  const settings = await textModeStore.getValue();
  const normalizedDomain = domain.toLowerCase().trim();
  if (!settings.mediaAllowlist.domains.includes(normalizedDomain)) {
    settings.mediaAllowlist.domains.push(normalizedDomain);
    await textModeStore.setValue(settings);
  }
}

export async function removeMediaDomain(domain: string): Promise<void> {
  const settings = await textModeStore.getValue();
  const normalizedDomain = domain.toLowerCase().trim();
  settings.mediaAllowlist.domains = settings.mediaAllowlist.domains.filter((d: string) => d !== normalizedDomain);
  await textModeStore.setValue(settings);
}

export async function setMediaTypes(types: MediaType[]): Promise<void> {
  const settings = await textModeStore.getValue();
  settings.mediaAllowlist.types = types;
  await textModeStore.setValue(settings);
}

export function isMediaAllowed(
  src: string,
  type: MediaType,
  allowlist: MediaAllowlistConfig
): boolean {
  if (!allowlist.types.includes(type)) {
    return false;
  }

  try {
    const srcUrl = new URL(src);
    const srcHostname = srcUrl.hostname.toLowerCase();

    for (const domain of allowlist.domains) {
      const normalizedDomain = domain.toLowerCase();
      if (srcHostname === normalizedDomain || srcHostname.endsWith(`.${normalizedDomain}`)) {
        return true;
      }
    }

    return false;
  } catch {
    if (!src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('//')) {
      return true;
    }
    return false;
  }
}

export function extractMediaSrc(element: HTMLSourceElement | HTMLMediaElement | HTMLImageElement): string | null {
  if (element.tagName === 'SOURCE') {
    return (element as HTMLSourceElement).src;
  }
  if (element.tagName === 'VIDEO' || element.tagName === 'AUDIO') {
    return (element as HTMLMediaElement).currentSrc || (element as HTMLMediaElement).src;
  }
  if (element.tagName === 'IMG') {
    return (element as HTMLImageElement).src;
  }
  return null;
}

export function getMediaType(element: HTMLElement): MediaType | null {
  const tagName = element.tagName.toUpperCase();
  if (tagName === 'IMG' || tagName === 'PICTURE') return 'image';
  if (tagName === 'VIDEO' || tagName === 'EMBED' || tagName === 'OBJECT') return 'video';
  if (tagName === 'AUDIO' || tagName === 'SOURCE') return 'audio';
  if (element.classList.contains('video-container') || element.getAttribute('data-video-src')) return 'video';
  if (element.classList.contains('audio-container') || element.getAttribute('data-audio-src')) return 'audio';
  return null;
}
