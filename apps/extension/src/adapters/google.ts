/**
 * Google Search Adapter for CalmWeb
 *
 * Instead of trying to filter Google's complex DOM (which freezes),
 * we extract search results and display them in a clean Super Reader view.
 */

export interface GoogleSearchResult {
  title: string;
  url: string;
  snippet: string;
  source: string;
  position: number;
}

export interface GoogleSearchData {
  query: string;
  results: GoogleSearchResult[];
  resultCount: number;
}

const RESULT_SELECTORS = [
  // Main search results
  '#search .g',
  '#rso .g',
  '[data-hveid] .g',
  // Alternative selectors
  '.tF2Cxc',
  '.yuRUbf',
];

/**
 * Check if the current page is a Google search results page
 */
export function isGoogleSearchPage(url: string = window.location.href): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.hostname.includes('google.') &&
      parsed.pathname === '/search' &&
      parsed.searchParams.has('q')
    );
  } catch {
    return false;
  }
}

/**
 * Get the search query from the URL
 */
export function getSearchQuery(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get('q') || '';
}

/**
 * Extract search results from the Google search page
 */
export function extractSearchResults(doc: Document = document): GoogleSearchResult[] {
  const results: GoogleSearchResult[] = [];
  const seen = new Set<string>();

  // Try each selector pattern
  for (const selector of RESULT_SELECTORS) {
    const elements = doc.querySelectorAll(selector);
    if (elements.length === 0) continue;

    elements.forEach((el) => {
      const html = el as HTMLElement;

      // Extract title and URL
      const titleEl = html.querySelector('h3');
      const linkEl = html.querySelector('a[href^="http"], a[href^="/url"]');

      if (!titleEl || !linkEl) return;

      const title = titleEl.textContent?.trim() || '';
      let url = linkEl.getAttribute('href') || '';

      // Handle Google's redirect URLs
      if (url.startsWith('/url?')) {
        try {
          const params = new URLSearchParams(url.substring(4));
          url = params.get('q') || params.get('url') || url;
        } catch {
          // Keep original
        }
      }

      // Skip if no title or duplicate URL
      if (!title || seen.has(url)) return;
      seen.add(url);

      // Extract snippet
      const snippetSelectors = [
        '.VwiC3b',
        '.IsZvec',
        '[data-sncf]',
        '.s3v9rd',
        '.st',
      ];
      let snippet = '';
      for (const sel of snippetSelectors) {
        const snippetEl = html.querySelector(sel);
        if (snippetEl?.textContent) {
          snippet = snippetEl.textContent.trim();
          break;
        }
      }

      // Extract source domain
      let source = '';
      try {
        source = new URL(url).hostname;
      } catch {
        source = '';
      }

      // Skip non-http links (ads, internal Google links)
      if (!url.startsWith('http')) return;

      results.push({
        title,
        url,
        snippet,
        source,
        position: results.length + 1,
      });
    });

    if (results.length > 0) break;
  }

  return results;
}

/**
 * Extract all search data from the page
 */
export function extractSearchData(doc: Document = document): GoogleSearchData {
  return {
    query: getSearchQuery(),
    results: extractSearchResults(doc),
    resultCount: extractSearchResults(doc).length,
  };
}

/**
 * Build a DuckDuckGo URL for the current Google search query.
 */
export function buildDuckDuckGoSearchUrl(url: string = window.location.href): string {
  try {
    const parsed = new URL(url);
    const query = parsed.searchParams.get('q')?.trim() || '';

    const duckduckgo = new URL('https://duckduckgo.com/');
    if (query) {
      duckduckgo.searchParams.set('q', query);
    }

    return duckduckgo.toString();
  } catch {
    return 'https://duckduckgo.com/';
  }
}
