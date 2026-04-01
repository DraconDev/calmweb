/**
 * ABP Filter List Parser for CalmWeb
 *
 * Parses Adblock Plus format filter lists into CSS selectors and URL patterns.
 * Supports EasyList, EasyPrivacy, Fanboy, and other ABP-compatible lists.
 */

export interface ParsedFilterLists {
  cssSelectors: string[];
  urlPatterns: string[];
  stats: {
    totalRules: number;
    cssRules: number;
    urlRules: number;
    skippedRules: number;
    parseTimeMs: number;
  };
}

/**
 * Parse one or more filter list contents into CSS selectors and URL patterns
 */
export function parseFilterLists(contents: string[]): ParsedFilterLists {
  const start = performance.now();
  const cssSelectors = new Set<string>();
  const urlPatterns = new Set<string>();
  let totalRules = 0;
  let skippedRules = 0;

  for (const content of contents) {
    const lines = content.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();

      // Skip empty lines, comments, metadata
      if (!trimmed || trimmed.startsWith('!') || trimmed.startsWith('[')) {
        continue;
      }

      totalRules++;

      // Skip exception rules (whitelisted)
      if (trimmed.startsWith('@@')) {
        skippedRules++;
        continue;
      }

      // CSS hiding rule (contains ##)
      if (trimmed.includes('##')) {
        const selector = parseCssHidingRule(trimmed);
        if (selector) {
          cssSelectors.add(selector);
        } else {
          skippedRules++;
        }
        continue;
      }

      // Extended CSS hiding rule (contains #?# or #@#)
      if (trimmed.includes('#?#') || trimmed.includes('#@#')) {
        // These are more complex rules, skip for simplicity
        skippedRules++;
        continue;
      }

      // URL blocking rule
      const urlPattern = parseUrlBlockingRule(trimmed);
      if (urlPattern) {
        urlPatterns.add(urlPattern);
      } else {
        skippedRules++;
      }
    }
  }

  const parseTimeMs = performance.now() - start;

  return {
    cssSelectors: Array.from(cssSelectors),
    urlPatterns: Array.from(urlPatterns),
    stats: {
      totalRules,
      cssRules: cssSelectors.size,
      urlRules: urlPatterns.size,
      skippedRules,
      parseTimeMs,
    },
  };
}

/**
 * Parse a CSS hiding rule (e.g., ##.ad-container or example.com##div.ad)
 */
function parseCssHidingRule(line: string): string | null {
  // Find the ## separator
  const separatorIndex = line.indexOf('##');
  if (separatorIndex === -1) return null;

  // Everything after ## is the CSS selector
  let selector = line.substring(separatorIndex + 2);

  // Skip if selector is empty
  if (!selector || selector.trim().length === 0) return null;

  // Clean up the selector - remove any trailing whitespace
  selector = selector.trim();

  // Validate it looks like a CSS selector (basic check)
  if (!selector.match(/^[.#\[\]:a-zA-Z_-]/)) {
    // Might be an element-specific rule like "example.com##.ad"
    // We'll use it as-is since the selector part after ## is what matters
  }

  // Skip complex selectors that might break CSS
  if (selector.includes(':has(') || selector.includes(':not(')) {
    // These are valid CSS but might be slow, include them anyway
  }

  // Skip selectors with invalid characters
  if (selector.includes('||') || selector.includes('^')) {
    return null; // These are URL patterns, not CSS selectors
  }

  return selector;
}

/**
 * Parse a URL blocking rule into a regex-compatible pattern
 */
function parseUrlBlockingRule(line: string): string | null {
  // Skip rules that are clearly CSS hiding rules
  if (line.includes('##') || line.includes('#?#') || line.includes('#@#')) {
    return null;
  }

  // Skip overly complex rules
  if (line.length > 500) return null;

  // Skip rules with wildcards at the start (too broad)
  if (line.startsWith('*')) return null;

  let pattern = line;

  // Handle anchors
  // ||domain.com^ - matches domain and subdomains
  if (pattern.startsWith('||')) {
    pattern = pattern.substring(2);
    // Convert to domain pattern
    const domain = pattern.split('/')[0].split('^')[0].split('*')[0];
    if (domain && domain.includes('.')) {
      return domain;
    }
  }

  // Remove leading/trailing anchors
  if (pattern.startsWith('|')) {
    pattern = pattern.substring(1);
  }
  if (pattern.endsWith('|')) {
    pattern = pattern.substring(0, pattern.length - 1);
  }

  // Convert separator (^) to wildcard
  pattern = pattern.replace(/\^/g, '*');

  // Skip if too short (probably not a valid domain)
  if (pattern.length < 4) return null;

  // Extract domain-like patterns
  // Simple heuristic: look for patterns that contain a dot and don't start with *
  if (!pattern.startsWith('*') && pattern.includes('.')) {
    // This looks like a domain
    const domainPart = pattern.split('/')[0].split('*')[0];
    if (domainPart && domainPart.includes('.')) {
      return domainPart;
    }
  }

  // For other patterns, return null (too complex or not useful for domain blocking)
  return null;
}

/**
 * Parse filter lists from cached filter list objects
 */
export function parseCachedLists(
  lists: Map<string, { content: string }>
): ParsedFilterLists {
  const contents = Array.from(lists.values()).map(l => l.content);
  return parseFilterLists(contents);
}

/**
 * Get statistics about parsed filter lists
 */
export function getFilterListStats(parsed: ParsedFilterLists): string {
  return [
    `Total rules: ${parsed.stats.totalRules.toLocaleString()}`,
    `CSS rules: ${parsed.stats.cssRules.toLocaleString()}`,
    `URL rules: ${parsed.stats.urlRules.toLocaleString()}`,
    `Skipped: ${parsed.stats.skippedRules.toLocaleString()}`,
    `Parse time: ${parsed.stats.parseTimeMs.toFixed(1)}ms`,
  ].join('\n');
}
