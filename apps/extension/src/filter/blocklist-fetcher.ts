/**
 * External Blocklist Fetcher
 *
 * Fetches and caches domain blocklists from popular sources.
 * These lists contain thousands of domains maintained by the community.
 */

const DEBUG = false;

function debug(...args: unknown[]) {
  if (DEBUG) console.log('[Blocklist]', ...args);
}

export interface BlocklistSource {
  id: string;
  name: string;
  category: string;
  url: string;
  format: 'hosts' | 'plain' | 'json';
  enabled: boolean;
  lastUpdated?: number;
  domainCount?: number;
}

export const BLOCKLIST_SOURCES: BlocklistSource[] = [
  // CalmWeb Content Farms - curated blocklist
  {
    id: 'calmweb-content-farms',
    name: 'CalmWeb Content Farms',
    category: 'content_farms',
    url: 'https://raw.githubusercontent.com/anomalyco/calmweb/main/blocklists/content-farms.json',
    format: 'json',
    enabled: true,
  },
  // CalmWeb User-Favoring - sites that are user-serving, never block these
  {
    id: 'calmweb-user-favoring',
    name: 'CalmWeb User-Favoring Sites',
    category: 'user_favoring',
    url: 'https://raw.githubusercontent.com/anomalyco/calmweb/main/blocklists/user-favoring.json',
    format: 'json',
    enabled: true,
  },
  // Steven Black's unified hosts - malware, ads, tracking
  {
    id: 'stevenblack-unified',
    name: 'Steven Black Unified',
    category: 'malware',
    url: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
    format: 'hosts',
    enabled: true,
  },
  {
    id: 'stevenblack-fakenews',
    name: 'Fake News Blocklist',
    category: 'fake_news',
    url: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews/hosts',
    format: 'hosts',
    enabled: true,
  },
  {
    id: 'stevenblack-gambling',
    name: 'Gambling Blocklist',
    category: 'gambling',
    url: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/gambling/hosts',
    format: 'hosts',
    enabled: true,
  },
  {
    id: 'stevenblack-social',
    name: 'Social Media Blocklist',
    category: 'social_media',
    url: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/social/hosts',
    format: 'hosts',
    enabled: false, // Off by default
  },
  {
    id: 'stevenblack-adult',
    name: 'Adult Content Blocklist',
    category: 'adult',
    url: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/porn/hosts',
    format: 'hosts',
    enabled: false, // Off by default
  },
  // Additional sources
  {
    id: 'oisd-full',
    name: 'OISD Blocklist',
    category: 'malware',
    url: 'https://big.oisd.nl/',
    format: 'hosts',
    enabled: true,
  },
  {
    id: 'blocklist-site-spam',
    name: 'Spam Blocklist',
    category: 'spam',
    url: 'https://blocklist.site/app/dl/spam',
    format: 'plain',
    enabled: true,
  },
];

interface CachedBlocklist {
  sourceId: string;
  domains: string[];
  lastUpdated: number;
  domainCount: number;
}

const CACHE_KEY = 'calmweb-blocklist-cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Module-level cache for sync access
let cachedBlocklist: Set<string> = new Set();
let cachedUserFavoring: Set<string> = new Set();
let cacheInitialized = false;

// Default blocklists embedded for immediate use (fallback)
const DEFAULT_BLOCKLISTS = {
  'calmweb-content-farms': [
    'reddit.com', 'www.reddit.com', 'old.reddit.com', 'new.reddit.com',
    'facebook.com', 'www.facebook.com', 'instagram.com', 'www.instagram.com',
    'twitter.com', 'x.com', 'www.x.com',
    'tiktok.com', 'www.tiktok.com', 'snapchat.com', 'www.snapchat.com',
    'youtube.com', 'youtu.be', 'www.youtube.com',
    'vimeo.com', 'www.vimeo.com', 'dailymotion.com', 'www.dailymotion.com',
    'twitch.tv', 'www.twitch.tv', 'ext-twitch.tv',
    'spotify.com', 'open.spotify.com', 'www.spotify.com',
    'byspotify.com', 'tospotify.com',
    'soundcloud.com', 'www.soundcloud.com',
    'netflix.com', 'www.netflix.com', 'netflix.net',
    'hulu.com', 'www.hulu.com',
    'disneyplus.com', 'www.disneyplus.com',
    'hbomax.com', 'www.hbomax.com',
    'primevideo.com', 'www.primevideo.com',
    'cnn.com', 'www.cnn.com', 'edition.cnn.com',
    'bbc.com', 'bbc.co.uk', 'www.bbc.com',
    'nytimes.com', 'www.nytimes.com',
    'washingtonpost.com', 'www.washingtonpost.com',
    'wsj.com', 'www.wsj.com',
    'theguardian.com', 'www.theguardian.com',
    'forbes.com', 'www.forbes.com',
    'reuters.com', 'www.reuters.com',
    'apnews.com', 'www.apnews.com',
    'amazon.com', 'www.amazon.com',
    'ebay.com', 'www.ebay.com',
    'aliexpress.com', 'www.aliexpress.com',
    'wish.com', 'www.wish.com',
    'etsy.com', 'www.etsy.com',
    'walmart.com', 'www.walmart.com',
    'target.com', 'www.target.com',
    'bestbuy.com', 'www.bestbuy.com',
    'shopee.com', 'www.shopee.com',
    'shopify.com', 'www.shopify.com',
    'quora.com', 'www.quora.com',
    'medium.com', 'www.medium.com',
    'substack.com', 'www.substack.com',
    'google.com', 'www.google.com', 'bing.com', 'www.bing.com',
    'yahoo.com', 'search.yahoo.com',
    'baidu.com', 'sogou.com', 'yandex.com',
    'linkedin.com', 'www.linkedin.com',
    'pinterest.com', 'www.pinterest.com',
    'tumblr.com', 'www.tumblr.com',
  ],
  'calmweb-user-favoring': [
    'wikipedia.org', 'www.wikipedia.org',
    'wikimedia.org', 'www.wikimedia.org',
    'github.com', 'www.github.com', 'githubusercontent.com',
    'gitlab.com', 'www.gitlab.com',
    'stackoverflow.com', 'www.stackoverflow.com',
    'stackexchange.com', 'www.stackexchange.com',
    'npmjs.com', 'www.npmjsjs.com',
    'pypi.org', 'www.pypi.org',
    'docker.com', 'www.docker.com',
    'arxiv.org', 'www.arxiv.org',
    'springer.com', 'nature.com', 'science.org',
    'mit.edu', 'harvard.edu', 'stanford.edu', 'berkeley.edu',
    'nasa.gov', 'www.nasa.gov', 'noaa.gov', 'epa.gov',
    'irs.gov', 'ssa.gov', 'cdc.gov', 'nih.gov',
    'paypal.com', 'www.paypal.com',
    'duckduckgo.com', 'www.duckduckgo.com',
    'startpage.com', 'www.startpage.com',
  ]
};

export function initBlocklistCache(): void {
  if (cacheInitialized) return;
  cacheInitialized = true;
  
  // Load defaults immediately into cache
  cachedBlocklist = new Set(DEFAULT_BLOCKLISTS['calmweb-content-farms'] || []);
  cachedUserFavoring = new Set(DEFAULT_BLOCKLISTS['calmweb-user-favoring'] || []);
  
  debug(`Loaded defaults: ${cachedBlocklist.size} blocklist, ${cachedUserFavoring.size} user-favoring`);
  
  // Then trigger async refresh in background
  updateAllBlocklists().then(cache => {
    cachedBlocklist = new Set();
    cachedUserFavoring = new Set();
    
    for (const [sourceId, domains] of cache.entries()) {
      const source = BLOCKLIST_SOURCES.find(s => s.id === sourceId);
      if (source?.category === 'user_favoring') {
        domains.forEach(d => cachedUserFavoring.add(d));
      } else {
        domains.forEach(d => cachedBlocklist.add(d));
      }
    }
    debug(`Updated cache: ${cachedBlocklist.size} blocklist, ${cachedUserFavoring.size} user-favoring`);
  }).catch(err => {
    console.warn('[Blocklist] Remote fetch failed, using defaults:', err);
  });
  
  // Also try to load from storage as fallback
  getCachedBlocklists().then(cache => {
    if (cachedBlocklist.size === 0 && cache.size > 0) {
      cachedBlocklist = new Set();
      cachedUserFavoring = new Set();
      for (const [sourceId, domains] of cache.entries()) {
        const source = BLOCKLIST_SOURCES.find(s => s.id === sourceId);
        if (source?.category === 'user_favoring') {
          domains.forEach(d => cachedUserFavoring.add(d));
        } else {
          domains.forEach(d => cachedBlocklist.add(d));
        }
      }
    }
  }).catch(() => {});
}

// Sync version of isDomainBlocked - uses cached blocklist
export function isDomainBlockedSync(domain: string): boolean {
  const normalized = domain.toLowerCase().replace(/^www\./, '');
  
  // First check if it's a user-favoring domain (never block these)
  if (cachedUserFavoring.size > 0) {
    if (cachedUserFavoring.has(normalized)) return false;
    // Check parent domains too
    const parts = normalized.split('.');
    for (let i = 1; i < parts.length; i++) {
      const parent = parts.slice(i).join('.');
      if (cachedUserFavoring.has(parent)) return false;
    }
  }
  
  // Check blocklist
  if (cachedBlocklist.has(normalized)) {
    return true;
  }
  
  // Parent domain match
  const parts = normalized.split('.');
  for (let i = 1; i < parts.length; i++) {
    const parent = parts.slice(i).join('.');
    if (cachedBlocklist.has(parent)) {
      return true;
    }
  }
  
  return false;
}

export async function fetchBlocklist(source: BlocklistSource): Promise<string[]> {
  // Try remote fetch first
  try {
    const response = await fetch(source.url, {
      headers: {
        'Accept': 'text/plain, application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();
    const domains = parseBlocklist(text, source.format);
    
    debug(`Fetched ${source.name}: ${domains.length} domains`);
    return domains;
  } catch (error) {
    console.warn(`[Blocklist] Failed to fetch ${source.name}, trying local fallback:`, error);
    
    // Fallback to local bundled file
    return fetchLocalBlocklist(source);
  }
}

async function fetchLocalBlocklist(source: BlocklistSource): Promise<string[]> {
  // Map source IDs to local file paths
  const localPaths: Record<string, string> = {
    'calmweb-content-farms': '/blocklists/content-farms.json',
    'calmweb-user-favoring': '/blocklists/user-favoring.json',
  };
  
  const localPath = localPaths[source.id];
  if (!localPath) {
    return [];
  }
  
  try {
    // In extension context, use chrome.runtime.getURL
    const url = typeof chrome !== 'undefined' && chrome.runtime?.getURL
      ? chrome.runtime.getURL(localPath)
      : localPath;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const text = await response.text();
    const domains = parseBlocklist(text, source.format);
    
    console.log(`[Blocklist] Loaded local ${source.name}: ${domains.length} domains`);
    return domains;
  } catch (error) {
    console.error(`[Blocklist] Failed to load local ${source.name}:`, error);
    return [];
  }
}

export function parseBlocklist(content: string, format: string): string[] {
  const domains: string[] = [];
  const lines = content.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    
    // Skip comments and empty lines
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('!') || trimmed.startsWith('[')) {
      continue;
    }

    let domain: string | null = null;

    if (format === 'hosts') {
      // Hosts format: "0.0.0.0 example.com" or "127.0.0.1 example.com"
      const parts = trimmed.split(/\s+/);
      if (parts.length >= 2) {
        domain = parts[1];
      }
    } else if (format === 'plain') {
      // Plain domain list
      domain = trimmed;
    } else if (format === 'json') {
      // JSON format - either array or CalmWeb format with categories
      try {
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) {
          return parsed.filter(d => typeof d === 'string');
        } else if (parsed.categories && Array.isArray(parsed.categories)) {
          // CalmWeb format: { categories: [{ domains: [...] }, ...] }
          return parsed.categories.flatMap((cat: { domains?: string[] }) => 
            cat.domains || []
          ).filter((d: unknown) => typeof d === 'string');
        } else if (parsed.domains && Array.isArray(parsed.domains)) {
          // Simple format: { domains: [...] }
          return parsed.domains.filter((d: unknown) => typeof d === 'string');
        }
      } catch {}
    }

    // Validate domain
    if (domain && isValidDomain(domain)) {
      domains.push(domain.toLowerCase());
    }
  }

  return [...new Set(domains)]; // Dedupe
}

function isValidDomain(domain: string): boolean {
  // Skip localhost, IP addresses, and invalid entries
  if (domain === 'localhost' || 
      domain === 'localhost.localdomain' ||
      domain === 'broadcasthost' ||
      domain === 'ip6-localhost' ||
      domain.startsWith('::1') ||
      /^\d+\.\d+\.\d+\.\d+$/.test(domain)) {
    return false;
  }
  
  // Basic domain validation
  return /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i.test(domain);
}

export async function updateAllBlocklists(): Promise<Map<string, string[]>> {
  const results = new Map<string, string[]>();
  
  const enabledSources = BLOCKLIST_SOURCES.filter(s => s.enabled);
  
  await Promise.all(
    enabledSources.map(async (source) => {
      const domains = await fetchBlocklist(source);
      if (domains.length > 0) {
        results.set(source.id, domains);
      }
    })
  );

  // Cache results
  const cache: CachedBlocklist[] = [];
  for (const [sourceId, domains] of results) {
    cache.push({
      sourceId,
      domains,
      lastUpdated: Date.now(),
      domainCount: domains.length,
    });
  }
  
  await saveCache(cache);
  
  return results;
}

export async function getCachedBlocklists(): Promise<Map<string, string[]>> {
  try {
    const stored = await chrome.storage.local.get(CACHE_KEY);
    const cache: CachedBlocklist[] = stored[CACHE_KEY] || [];
    
    const results = new Map<string, string[]>();
    const now = Date.now();
    
    for (const item of cache) {
      if (now - item.lastUpdated < CACHE_DURATION) {
        results.set(item.sourceId, item.domains);
      }
    }
    
    return results;
  } catch {
    return new Map();
  }
}

async function saveCache(cache: CachedBlocklist[]): Promise<void> {
  await chrome.storage.local.set({ [CACHE_KEY]: cache });
}

export async function getMergedBlocklist(): Promise<Set<string>> {
  const cached = await getCachedBlocklists();
  
  // If no cache or empty, fetch fresh
  if (cached.size === 0) {
    const fresh = await updateAllBlocklists();
    const merged = new Set<string>();
    for (const [sourceId, domains] of fresh.entries()) {
      // Skip user_favoring domains in the blocklist
      const source = BLOCKLIST_SOURCES.find(s => s.id === sourceId);
      if (source?.category === 'user_favoring') continue;
      domains.forEach(d => merged.add(d));
    }
    return merged;
  }
  
  const merged = new Set<string>();
  for (const [sourceId, domains] of cached.entries()) {
    // Skip user_favoring domains in the blocklist
    const source = BLOCKLIST_SOURCES.find(s => s.id === sourceId);
    if (source?.category === 'user_favoring') continue;
    domains.forEach(d => merged.add(d));
  }
  
  return merged;
}

export async function getUserFavoringDomains(): Promise<Set<string>> {
  const cached = await getCachedBlocklists();
  const userFavoring = new Set<string>();
  
  for (const [sourceId, domains] of cached.entries()) {
    const source = BLOCKLIST_SOURCES.find(s => s.id === sourceId);
    if (source?.category === 'user_favoring') {
      domains.forEach(d => userFavoring.add(d));
    }
  }
  
  return userFavoring;
}

export async function isDomainBlocked(domain: string): Promise<boolean> {
  const normalized = domain.toLowerCase().replace(/^www\./, '');
  
  // First check if it's a user-favoring domain (never block these)
  const userFavoring = await getUserFavoringDomains();
  if (userFavoring.size > 0) {
    if (userFavoring.has(normalized)) return false;
    // Check parent domains too
    const parts = normalized.split('.');
    for (let i = 1; i < parts.length; i++) {
      const parent = parts.slice(i).join('.');
      if (userFavoring.has(parent)) return false;
    }
  }
  
  // Then check blocklist
  const blocklist = await getMergedBlocklist();
  
  // Direct match
  if (blocklist.has(normalized)) {
    return true;
  }
  
  // Parent domain match (e.g., www.ads.example.com -> ads.example.com -> example.com)
  const parts = normalized.split('.');
  for (let i = 1; i < parts.length; i++) {
    const parent = parts.slice(i).join('.');
    if (blocklist.has(parent)) {
      return true;
    }
  }
  
  return false;
}

export async function getBlocklistStats(): Promise<{
  totalDomains: number;
  bySource: { id: string; name: string; count: number }[];
  lastUpdated: number | null;
}> {
  try {
    const stored = await chrome.storage.local.get(CACHE_KEY);
    const cache: CachedBlocklist[] = stored[CACHE_KEY] || [];
    
    let totalDomains = 0;
    const bySource: { id: string; name: string; count: number }[] = [];
    let lastUpdated: number | null = null;
    
    for (const item of cache) {
      totalDomains += item.domainCount;
      const source = BLOCKLIST_SOURCES.find(s => s.id === item.sourceId);
      bySource.push({
        id: item.sourceId,
        name: source?.name || item.sourceId,
        count: item.domainCount,
      });
      if (item.lastUpdated > (lastUpdated || 0)) {
        lastUpdated = item.lastUpdated;
      }
    }
    
    return { totalDomains, bySource, lastUpdated };
  } catch {
    return { totalDomains: 0, bySource: [], lastUpdated: null };
  }
}
