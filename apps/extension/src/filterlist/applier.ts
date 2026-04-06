/**
 * Filter List Applier for CalmWeb
 *
 * Takes parsed filter lists and applies them as:
 * 1. CSS injection (hides elements matching selectors)
 * 2. URL blocking (via declarativeNetRequest)
 */

import type { ParsedFilterLists } from './parser';

const DEBUG = false;

function debug(...args: unknown[]) {
  if (DEBUG) console.log('[FilterList]', ...args);
}

const FILTERLIST_CSS_ID = 'calmweb-filterlist-css';

/**
 * Generate CSS rules from parsed filter lists
 */
export function generateFilterListCss(parsed: ParsedFilterLists): string {
  if (parsed.cssSelectors.length === 0) {
    return '';
  }

  // Join all selectors with comma and hide them
  const selectorGroups = chunkSelectors(parsed.cssSelectors, 500);

  const rules: string[] = [];
  for (const group of selectorGroups) {
    rules.push(`${group.join(',\n')} {\n  display: none !important;\n}`);
  }

  return rules.join('\n\n');
}

/**
 * Chunk selectors into groups to avoid CSS rule size limits
 */
function chunkSelectors(selectors: string[], chunkSize: number): string[][] {
  const chunks: string[][] = [];
  for (let i = 0; i < selectors.length; i += chunkSize) {
    chunks.push(selectors.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 * Inject filter list CSS into a page
 */
export function injectFilterListCss(css: string): () => void {
  if (!css) return () => {};

  // Remove existing filter list CSS
  const existing = document.getElementById(FILTERLIST_CSS_ID);
  if (existing) {
    existing.remove();
  }

  const style = document.createElement('style');
  style.id = FILTERLIST_CSS_ID;
  style.textContent = css;
  document.head.appendChild(style);

  return () => {
    const el = document.getElementById(FILTERLIST_CSS_ID);
    if (el) el.remove();
  };
}

/**
 * Check if filter list CSS is injected
 */
export function isFilterListCssInjected(): boolean {
  return !!document.getElementById(FILTERLIST_CSS_ID);
}

/**
 * Remove filter list CSS
 */
export function removeFilterListCss(): void {
  const el = document.getElementById(FILTERLIST_CSS_ID);
  if (el) el.remove();
}

/**
 * Create declarativeNetRequest rules from URL patterns
 */
export function createNetworkRules(
  urlPatterns: string[],
  startId: number = 1000
): any[] {
  const rules: any[] = [];
  let ruleId = startId;

  for (const pattern of urlPatterns) {
    // Skip if pattern is too short or invalid
    if (pattern.length < 4) continue;

    try {
      // Create a regex pattern that matches URLs containing this domain
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regexPattern = `^https?://([^/]*\\.)?${escapedPattern}`;

      rules.push({
        id: ruleId++,
        priority: 1,
        action: { type: 'block' },
        condition: {
          regexFilter: regexPattern,
          resourceTypes: ['script', 'image', 'xmlhttprequest', 'sub_frame', 'media', 'font'],
        },
      });

      // Limit to avoid hitting Chrome's rule limits
      if (ruleId > startId + 5000) break;
    } catch {
      // Skip invalid patterns
    }
  }

  return rules;
}

/**
 * Apply declarativeNetRequest rules (must be called from background)
 */
export async function applyNetworkRules(
  rules: chrome.declarativeNetRequest.Rule[]
): Promise<void> {
  try {
    // Get existing dynamic rules
    const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
    const existingIds = existingRules.map(r => r.id);

    // Remove old rules
    if (existingIds.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: existingIds,
      });
    }

    // Add new rules (chunked to avoid limits)
    const chunkSize = 5000;
    for (let i = 0; i < rules.length; i += chunkSize) {
      const chunk = rules.slice(i, i + chunkSize);
      await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: chunk,
      });
    }

    console.log(`[FilterList] Applied ${rules.length} network blocking rules`);
  } catch (error) {
    console.error('[FilterList] Failed to apply network rules:', error);
  }
}

/**
 * Remove all dynamic network rules
 */
export async function clearNetworkRules(): Promise<void> {
  try {
    const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
    const existingIds = existingRules.map(r => r.id);
    if (existingIds.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: existingIds,
      });
    }
  } catch (error) {
    console.error('[FilterList] Failed to clear network rules:', error);
  }
}
