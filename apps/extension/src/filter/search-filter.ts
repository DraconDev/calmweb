/**
 * Search Result Filter
 *
 * Filters search results on Google, Bing, DuckDuckGo to hide blocked sites.
 * Uses both built-in categories and external blocklists.
 */

import type { SiteCategory } from './categories';
import { getCategoryForDomain, SITE_CATEGORIES } from './categories';
import { isDomainBlocked, isDomainBlockedSync, initBlocklistCache } from './blocklist-fetcher';

// Initialize blocklist cache on module load
initBlocklistCache();

export interface SearchResultFilterSettings {
  enabled: boolean;
  hideBlocked: boolean;
  showCategoryBadge: boolean;
  blockedCategories: SiteCategory[];
  customBlocklist: string[];
  customAllowlist: string[];
  useExternalBlocklists: boolean;
}

export const defaultSearchFilterSettings: SearchResultFilterSettings = {
  enabled: true,
  hideBlocked: true,
  showCategoryBadge: false,
  blockedCategories: [],
  customBlocklist: [],
  customAllowlist: [],
  useExternalBlocklists: true,
};

// Search engine selectors - updated for modern layouts
const SEARCH_SELECTORS = {
  google: {
    results: '[data-sokoban-container] .g, #search .g, #rso .g, .MjjYud',
    link: 'a[href*="url?"], a[href^="http"]:not([href*="google.com"])',
    title: 'h3, [role="heading"]',
    container: '.g, .MjjYud, [data-sokoban-container]',
  },
  bing: {
    results: '#b_results .b_algo',
    link: 'h2 a, .b_title a',
    title: 'h2, .b_title',
    container: '.b_algo',
  },
  duckduckgo: {
    // DDG results are in: ol.react-results--main > li > article
    // Or HTML version: .result.results_links
    results: 'article, .result.results_links, li[data-testid="result"]',
    link: 'a[href^="http"]:not([href*="duckduckgo.com"])',
    title: 'h2, h3',
    container: 'article, .result, li',
  },
  yahoo: {
    results: '#web .dd, .search-Result',
    link: 'h3 a, .algo-title a',
    title: 'h3, .algo-title',
    container: '.dd, .algo',
  },
};

export function detectSearchEngine(url: string = window.location.href): string | null {
  try {
    const parsed = new URL(url, window.location.href);
    const host = parsed.hostname;
    const path = parsed.pathname;
  
    // Check for search pages specifically
    if (host.includes('google.com') && (path.includes('/search') || path.includes('/webhp'))) return 'google';
    if (host.includes('bing.com') && path.includes('/search')) return 'bing';
    if (host.includes('duckduckgo.com')) return 'duckduckgo';
    if (host.includes('yahoo.com') && path.includes('/search')) return 'yahoo';
    if (host.includes('search.brave.com')) return 'brave';
    if (host.includes('yandex.com')) return 'yandex';
    return null;
  } catch {
    return null;
  }
}

// Extract search query from URL
export function extractSearchQuery(): string | null {
  const url = new URL(window.location.href);
  
  // Google
  const googleQ = url.searchParams.get('q');
  if (googleQ) return googleQ;
  
  // Bing
  const bingQ = url.searchParams.get('q');
  if (bingQ) return bingQ;
  
  // DuckDuckGo
  const ddgQ = url.searchParams.get('q');
  if (ddgQ) return ddgQ;
  
  // Yahoo
  const yahooQ = url.searchParams.get('p');
  if (yahooQ) return yahooQ;
  
  return null;
}

// Redirect to DuckDuckGo
export function redirectToDuckDuckGo(): void {
  const query = extractSearchQuery();
  if (!query) {
    console.log('[SearchFilter] No query found to redirect');
    return;
  }
  
  const ddgUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
  console.log(`[SearchFilter] Redirecting to DuckDuckGo: ${ddgUrl}`);
  window.location.href = ddgUrl;
}

// Check if should redirect to DDG
export function shouldRedirectToDDG(settings: { redirectToDDG?: boolean }): boolean {
  return settings.redirectToDDG === true;
}

function normalizeSearchResultUrl(url: string): string {
  try {
    const urlObj = new URL(url, window.location.href);

    // DuckDuckGo result links are wrapped through /l/?uddg=...
    // Examples:
    //   //duckduckgo.com/l/?uddg=https%3A%2F%2Fexample.com&rut=...
    //   https://duckduckgo.com/l/?uddg=https%3A%2F%2Fexample.com
    if (urlObj.hostname.includes('duckduckgo.com') || urlObj.pathname.startsWith('/l')) {
      const ddgTarget =
        urlObj.searchParams.get('uddg') ||
        urlObj.searchParams.get('u') ||
        urlObj.searchParams.get('rdrurl');

      if (ddgTarget) {
        try {
          return decodeURIComponent(ddgTarget);
        } catch {
          return ddgTarget;
        }
      }
    }

    // Google result links can also be wrapped.
    if (urlObj.pathname === '/url') {
      const googleTarget = urlObj.searchParams.get('q') || urlObj.searchParams.get('url');
      if (googleTarget) {
        try {
          return decodeURIComponent(googleTarget);
        } catch {
          return googleTarget;
        }
      }
    }

    return urlObj.toString();
  } catch {
    return url;
  }
}

export function extractDomainFromUrl(url: string): string | null {
  try {
    const resolvedUrl = normalizeSearchResultUrl(url);
    const urlObj = new URL(resolvedUrl, window.location.href);
    return urlObj.hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

// Sync version for built-in categories and custom lists
export function shouldFilterResultSync(
  domain: string,
  settings: SearchResultFilterSettings
): { filter: boolean; category?: SiteCategory; reason: string } {
  // Check allowlist
  if (settings.customAllowlist.some(allowed => 
    domain === allowed || domain.endsWith('.' + allowed)
  )) {
    return { filter: false, reason: 'allowlist' };
  }

  // Check category
  const category = getCategoryForDomain(domain);
  if (category && settings.blockedCategories.includes(category)) {
    return { filter: true, category, reason: 'category' };
  }

  // Check custom blocklist
  if (settings.customBlocklist.some(blocked =>
    domain === blocked || domain.endsWith('.' + blocked)
  )) {
    return { filter: true, reason: 'custom' };
  }

  // Check external blocklists (sync version uses cached data)
  if (settings.useExternalBlocklists) {
    if (isDomainBlockedSync(domain)) {
      return { filter: true, reason: 'external_blocklist' };
    }
  }

  return { filter: false, reason: 'none' };
}

// Async version that also checks external blocklists
export async function shouldFilterResult(
  domain: string,
  settings: SearchResultFilterSettings
): Promise<{ filter: boolean; category?: SiteCategory; reason: string }> {
  // Check sync conditions first
  const syncResult = shouldFilterResultSync(domain, settings);
  if (syncResult.filter || syncResult.reason === 'allowlist') {
    return syncResult;
  }

  // Check external blocklists if enabled
  if (settings.useExternalBlocklists) {
    const blocked = await isDomainBlocked(domain);
    if (blocked) {
      return { filter: true, reason: 'external_blocklist' };
    }
  }

  return { filter: false, reason: 'none' };
}

export function createCategoryBadge(category: SiteCategory): HTMLElement {
  const info = SITE_CATEGORIES.find(c => c.id === category);
  const badge = document.createElement('span');
  badge.className = 'calmweb-category-badge';
  badge.style.cssText = `
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    background: rgba(99, 102, 241, 0.1);
    color: #6366f1;
    margin-left: 8px;
    vertical-align: middle;
  `;
  badge.textContent = `${info?.icon || '🚫'} ${info?.name || category}`;
  badge.setAttribute('data-calmweb-badge', category);
  return badge;
}

export function filterSearchResults(
  settings: SearchResultFilterSettings,
  engineOverride?: string | null
): { total: number; filtered: number; byCategory: Record<string, number> } {
  if (!settings.enabled) {
    console.log('[SearchFilter] Filtering disabled');
    return { total: 0, filtered: 0, byCategory: {} };
  }

  const engine = engineOverride ?? detectSearchEngine();
  if (!engine) {
    console.log('[SearchFilter] No search engine detected');
    return { total: 0, filtered: 0, byCategory: {} };
  }

  const selectors = SEARCH_SELECTORS[engine as keyof typeof SEARCH_SELECTORS];
  if (!selectors) {
    console.log('[SearchFilter] No selectors for engine:', engine);
    return { total: 0, filtered: 0, byCategory: {} };
  }

  const results = document.querySelectorAll(selectors.results);

  let total = 0;
  let filtered = 0;
  const byCategory: Record<string, number> = {};

  results.forEach(result => {
    const link = result.querySelector(selectors.link) as HTMLAnchorElement;
    if (!link) {
      return;
    }

    const href = link.href;
    if (!href || href.includes('duckduckgo.com') || href.includes('javascript:')) {
      return;
    }

    const domain = extractDomainFromUrl(href);
    if (!domain) {
      return;
    }

    total++;
    const filterResult = shouldFilterResultSync(domain, settings);

    if (filterResult.filter) {
      filtered++;

      if (filterResult.category) {
        byCategory[filterResult.category] = (byCategory[filterResult.category] || 0) + 1;
      }

      if (settings.hideBlocked) {
        (result as HTMLElement).style.display = 'none';
        result.setAttribute('data-calmweb-filtered', 'true');
        result.setAttribute('data-calmweb-reason', filterResult.reason);
        if (filterResult.category) {
          result.setAttribute('data-calmweb-category', filterResult.category);
        }
        window.dispatchEvent(new CustomEvent('calmweb:searchFiltered', {
          detail: { domain, reason: filterResult.reason, category: filterResult.category }
        }));
      } else {
        const title = result.querySelector(selectors.title);
        if (title && !title.querySelector('.calmweb-category-badge')) {
          title.appendChild(createCategoryBadge(filterResult.category || 'custom'));
        }
        result.setAttribute('data-calmweb-flagged', 'true');
      }
    }
  });

return { total, filtered, byCategory };
}

// Async version that includes external blocklists
export async function filterSearchResultsAsync(
  settings: SearchResultFilterSettings,
  engineOverride?: string | null
): Promise<{ total: number; filtered: number; byCategory: Record<string, number> }> {
  if (!settings.enabled) {
    return { total: 0, filtered: 0, byCategory: {} };
  }

  const engine = engineOverride ?? detectSearchEngine();
  if (!engine) {
    return { total: 0, filtered: 0, byCategory: {} };
  }

  const selectors = SEARCH_SELECTORS[engine as keyof typeof SEARCH_SELECTORS];
  if (!selectors) {
    return { total: 0, filtered: 0, byCategory: {} };
  }

  const results = document.querySelectorAll(selectors.results);
  let total = 0;
  let filtered = 0;
  const byCategory: Record<string, number> = {};

  for (const result of Array.from(results)) {
    const link = result.querySelector(selectors.link) as HTMLAnchorElement;
    if (!link) continue;

    const href = link.href;
    const domain = extractDomainFromUrl(href);
    if (!domain) continue;

    total++;
    const filterResult = await shouldFilterResult(domain, settings);

    if (filterResult.filter) {
      filtered++;
      
      if (filterResult.category) {
        byCategory[filterResult.category] = (byCategory[filterResult.category] || 0) + 1;
      }

      if (settings.hideBlocked) {
        (result as HTMLElement).style.display = 'none';
        result.setAttribute('data-calmweb-filtered', 'true');
        result.setAttribute('data-calmweb-reason', filterResult.reason);
        if (filterResult.category) {
          result.setAttribute('data-calmweb-category', filterResult.category);
        }
        window.dispatchEvent(new CustomEvent('calmweb:searchFiltered', {
          detail: { domain, reason: filterResult.reason, category: filterResult.category }
        }));
      } else {
        const title = result.querySelector(selectors.title);
        if (title && !title.querySelector('.calmweb-category-badge')) {
          title.appendChild(createCategoryBadge(filterResult.category || 'custom'));
        }
        result.setAttribute('data-calmweb-flagged', 'true');
      }
    } else if (settings.showCategoryBadge) {
      const category = getCategoryForDomain(domain);
      if (category) {
        const title = result.querySelector(selectors.title);
        if (title && !title.querySelector('.calmweb-category-badge')) {
          title.appendChild(createCategoryBadge(category));
        }
      }
    }
  }

  return { total, filtered, byCategory };
}

export function unfilterSearchResults(): void {
  const filtered = document.querySelectorAll('[data-calmweb-filtered], [data-calmweb-flagged]');
  filtered.forEach(el => {
    (el as HTMLElement).style.display = '';
    el.removeAttribute('data-calmweb-filtered');
    el.removeAttribute('data-calmweb-flagged');
    el.removeAttribute('data-calmweb-reason');
    el.removeAttribute('data-calmweb-category');
  });

  const badges = document.querySelectorAll('.calmweb-category-badge');
  badges.forEach(badge => badge.remove());
}
