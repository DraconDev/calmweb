/**
 * Filter List Fetcher for CalmWeb
 *
 * Downloads and caches community filter lists (EasyList, EasyPrivacy, etc.)
 * Lists are stored in local storage and refreshed periodically.
 */

const DEBUG = false;

function debug(...args: unknown[]) {
  if (DEBUG) console.log('[FilterList]', ...args);
}

export interface FilterListConfig {
  id: string;
  name: string;
  url: string;
  refreshIntervalMs: number; // How often to refresh
  enabled: boolean;
}

export interface CachedFilterList {
  id: string;
  content: string;
  fetchedAt: number;
  etag?: string;
  lastModified?: string;
}

// Default filter lists to pull
export const DEFAULT_FILTER_LISTS: FilterListConfig[] = [
  {
    id: 'easylist',
    name: 'EasyList (Ad Blocking)',
    url: 'https://easylist.to/easylist/easylist.txt',
    refreshIntervalMs: 24 * 60 * 60 * 1000, // 24 hours
    enabled: true,
  },
  {
    id: 'easyprivacy',
    name: 'EasyPrivacy (Tracker Blocking)',
    url: 'https://easylist.to/easylist/easyprivacy.txt',
    refreshIntervalMs: 24 * 60 * 60 * 1000,
    enabled: true,
  },
  {
    id: 'fanboy-annoyances',
    name: 'Fanboy Annoyances (Cookie/Social/Newsletter)',
    url: 'https://secure.fanboy.co.nz/fanboy-annoyance.txt',
    refreshIntervalMs: 24 * 60 * 60 * 1000,
    enabled: true,
  },
  {
    id: 'fanboy-social',
    name: 'Fanboy Social',
    url: 'https://easylist.to/easylist/fanboy-social.txt',
    refreshIntervalMs: 24 * 60 * 60 * 1000,
    enabled: true,
  },
];

const STORAGE_PREFIX = 'filterlist:';
const LAST_REFRESH_KEY = 'filterlist:lastRefresh';

/**
 * Fetch a single filter list with conditional request headers
 */
async function fetchFilterList(config: FilterListConfig): Promise<CachedFilterList | null> {
  try {
    const cached = await getCachedList(config.id);
    const headers: Record<string, string> = {};

    // Use ETag/Last-Modified for conditional requests
    if (cached?.etag) {
      headers['If-None-Match'] = cached.etag;
    }
    if (cached?.lastModified) {
      headers['If-Modified-Since'] = cached.lastModified;
    }

    const response = await fetch(config.url, {
      headers,
      signal: AbortSignal.timeout(30000), // 30s timeout
    });

    // 304 Not Modified - use cached version
    if (response.status === 304 && cached) {
      return cached;
    }

    if (!response.ok) {
      console.warn(`[FilterList] Failed to fetch ${config.id}: ${response.status}`);
      return cached; // Fall back to cached version
    }

    const content = await response.text();
    const etag = response.headers.get('ETag') || undefined;
    const lastModified = response.headers.get('Last-Modified') || undefined;

    const result: CachedFilterList = {
      id: config.id,
      content,
      fetchedAt: Date.now(),
      etag,
      lastModified,
    };

    // Cache the result
    await cacheList(config.id, result);
    console.log(`[FilterList] Updated ${config.id} (${formatBytes(content.length)})`);

    return result;
  } catch (error) {
    console.warn(`[FilterList] Error fetching ${config.id}:`, error);
    return await getCachedList(config.id); // Fall back to cache
  }
}

/**
 * Get a cached filter list from storage
 */
async function getCachedList(id: string): Promise<CachedFilterList | null> {
  try {
    const result = await chrome.storage.local.get(STORAGE_PREFIX + id);
    return result[STORAGE_PREFIX + id] || null;
  } catch {
    return null;
  }
}

/**
 * Cache a filter list to storage
 */
async function cacheList(id: string, list: CachedFilterList): Promise<void> {
  try {
    await chrome.storage.local.set({ [STORAGE_PREFIX + id]: list });
  } catch (error) {
    console.warn(`[FilterList] Failed to cache ${id}:`, error);
  }
}

/**
 * Fetch all enabled filter lists
 */
export async function fetchAllLists(
  configs: FilterListConfig[] = DEFAULT_FILTER_LISTS
): Promise<Map<string, CachedFilterList>> {
  const results = new Map<string, CachedFilterList>();
  const enabled = configs.filter(c => c.enabled);

  // Fetch in parallel
  const fetches = enabled.map(async (config) => {
    const list = await fetchFilterList(config);
    if (list) {
      results.set(config.id, list);
    }
  });

  await Promise.all(fetches);

  // Update last refresh timestamp
  await chrome.storage.local.set({ [LAST_REFRESH_KEY]: Date.now() });

  return results;
}

/**
 * Check if any lists need refreshing
 */
export async function needsRefresh(configs: FilterListConfig[] = DEFAULT_FILTER_LISTS): Promise<boolean> {
  try {
    const result = await chrome.storage.local.get(LAST_REFRESH_KEY);
    const lastRefresh = result[LAST_REFRESH_KEY] || 0;

    for (const config of configs) {
      if (!config.enabled) continue;
      const age = Date.now() - lastRefresh;
      if (age > config.refreshIntervalMs) {
        return true;
      }
    }

    return false;
  } catch {
    return true; // Refresh on error
  }
}

/**
 * Get all cached lists without fetching
 */
export async function getCachedLists(
  configs: FilterListConfig[] = DEFAULT_FILTER_LISTS
): Promise<Map<string, CachedFilterList>> {
  const results = new Map<string, CachedFilterList>();

  for (const config of configs) {
    if (!config.enabled) continue;
    const list = await getCachedList(config.id);
    if (list) {
      results.set(config.id, list);
    }
  }

  return results;
}

/**
 * Clear all cached filter lists
 */
export async function clearCachedLists(): Promise<void> {
  const keys = DEFAULT_FILTER_LISTS.map(c => STORAGE_PREFIX + c.id);
  keys.push(LAST_REFRESH_KEY);
  await chrome.storage.local.remove(keys);
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
