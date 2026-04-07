import { storage } from 'wxt/utils/storage';

interface SkipListConfig {
  domains: string[];
  patterns: string[];
}

interface TextModeSettings {
  enabled: boolean;
  skipList: SkipListConfig;
  mediaAllowlist: {
    domains: string[];
    types: ('image' | 'video' | 'audio')[];
  };
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
  skipList: {
    domains: [],
    patterns: [],
  },
  mediaAllowlist: {
    domains: [],
    types: ['image', 'video', 'audio'],
  },
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

export const SKIP_LIST_DEFAULTS: string[] = [
  'facebook.com',
  'twitter.com',
  'x.com',
  'instagram.com',
  'tiktok.com',
  'reddit.com',
  'youtube.com',
];

export async function getSkipListSettings(): Promise<SkipListConfig> {
  const settings = await textModeStore.getValue();
  return settings.skipList;
}

export async function addSkipDomain(domain: string): Promise<void> {
  const settings = await textModeStore.getValue();
  const normalizedDomain = domain.toLowerCase().trim();
  if (!settings.skipList.domains.includes(normalizedDomain)) {
    settings.skipList.domains.push(normalizedDomain);
    await textModeStore.setValue(settings);
  }
}

export async function removeSkipDomain(domain: string): Promise<void> {
  const settings = await textModeStore.getValue();
  const normalizedDomain = domain.toLowerCase().trim();
  settings.skipList.domains = settings.skipList.domains.filter((d: string) => d !== normalizedDomain);
  await textModeStore.setValue(settings);
}

export async function addSkipPattern(pattern: string): Promise<void> {
  const settings = await textModeStore.getValue();
  const normalizedPattern = pattern.trim();
  if (!settings.skipList.patterns.includes(normalizedPattern)) {
    settings.skipList.patterns.push(normalizedPattern);
    await textModeStore.setValue(settings);
  }
}

export async function removeSkipPattern(pattern: string): Promise<void> {
  const settings = await textModeStore.getValue();
  settings.skipList.patterns = settings.skipList.patterns.filter((p: string) => p !== pattern);
  await textModeStore.setValue(settings);
}

export function shouldSkipUrl(url: string, skipList: SkipListConfig): boolean {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();

    if (skipList.domains.includes(hostname)) {
      return true;
    }

    for (const domain of skipList.domains) {
      if (hostname === domain || hostname.endsWith(`.${domain}`)) {
        return true;
      }
    }

    for (const pattern of skipList.patterns) {
      if (matchUrlPattern(url, pattern)) {
        return true;
      }
    }

    return false;
  } catch {
    return false;
  }
}

export function matchUrlPattern(url: string, pattern: string): boolean {
  try {
    if (pattern.startsWith('*://')) {
      const regexPattern = pattern
        .replace(/\./g, '\\.')
        .replace(/\*/g, '.*')
        .replace(/\?/g, '.');
      const regex = new RegExp(`^${regexPattern}`, 'i');
      return regex.test(url);
    }

    if (pattern.startsWith('*.')) {
      const domain = pattern.slice(2).toLowerCase();
      const urlObj = new URL(url);
      return urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`);
    }

    const urlObj = new URL(url);
    return urlObj.hostname.toLowerCase() === pattern.toLowerCase();
  } catch {
    return false;
  }
}

export async function isTextModeEnabled(): Promise<boolean> {
  const settings = await textModeStore.getValue();
  return settings.enabled;
}

export async function setTextModeEnabled(enabled: boolean): Promise<void> {
  const settings = await textModeStore.getValue();
  settings.enabled = enabled;
  await textModeStore.setValue(settings);
}

export async function getTextModeSettings(): Promise<TextModeSettings> {
  return textModeStore.getValue();
}

export async function updateTextModeSettings(updates: Partial<TextModeSettings>): Promise<void> {
  const settings = await textModeStore.getValue();
  Object.assign(settings, updates);
  await textModeStore.setValue(settings);
}

export async function initializeSkipList(): Promise<void> {
  const settings = await textModeStore.getValue();
  
  if (settings.skipList.domains.length === 0) {
    settings.skipList.domains = [...SKIP_LIST_DEFAULTS];
    await textModeStore.setValue(settings);
  }
}
