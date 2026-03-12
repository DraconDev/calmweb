/**
 * Storage utilities for CalmWeb extension
 *
 * Uses WXT's native storage API with appropriate storage areas:
 * - sync: for user settings (sync across devices)
 * - local: for cache, BYOK keys, stats (device-specific)
 */

import { storage } from 'wxt/utils/storage';
import type { UserSettings, ClassificationResult } from '@calmweb/shared';
import { defaultUserSettings } from '@calmweb/shared';

// ============================================================================
// Storage Keys (using appropriate prefixes)
// ============================================================================

export const STORAGE_KEYS = {
  SETTINGS: 'sync:calmweb-settings' as const,
  DECISION_CACHE: 'local:calmweb-cache' as const,
  BYOK_KEYS: 'local:calmweb-byok' as const,
  STATS: 'local:calmweb-stats' as const,
} as const;

// ============================================================================
// Default Values
// ============================================================================

const defaultDecisionCache: Record<string, ClassificationResult> = {};
const defaultBYOKKeys: { openai?: string; anthropic?: string } = {};
const defaultStats: { totalFiltered: number; lastReset: number } = {
  totalFiltered: 0,
  lastReset: Date.now(),
};

// ============================================================================
// Typed Storage Items (using WXT storage directly)
// ============================================================================

/**
 * User settings store (sync across devices)
 */
export const settingsStore = storage.defineItem<UserSettings>(STORAGE_KEYS.SETTINGS, {
  fallback: defaultUserSettings,
});

/**
 * Decision cache store (local with LRU eviction)
 * This is a simple object record for serialization; we implement LRU logic in helpers.
 */
export const decisionCache = storage.defineItem<Record<string, ClassificationResult>>(
  STORAGE_KEYS.DECISION_CACHE,
  { fallback: defaultDecisionCache }
);

/**
 * BYOK API keys store (local only)
 */
export const byokKeysStore = storage.defineItem<{ openai?: string; anthropic?: string }>(
  STORAGE_KEYS.BYOK_KEYS,
  { fallback: defaultBYOKKeys }
);

/**
 * Statistics store (local only)
 */
export const statsStore = storage.defineItem<{ totalFiltered: number; lastReset: number }>(
  STORAGE_KEYS.STATS,
  { fallback: defaultStats }
);

// ============================================================================
// LRU Cache Wrapper
// ============================================================================

const LRU_MAX_SIZE = 1000;

/**
 * Get a cached classification result by fingerprint, with LRU eviction logic.
 */
export async function getCachedResult(fingerprint: string): Promise<ClassificationResult | undefined> {
  const cache = await decisionCache.getValue();
  const entry = cache[fingerprint];
  if (!entry) return undefined;

  // Simple LRU: move to end (we'll implement full LRU with timestamp on set)
  // For now, just return the entry; we'll prune on set.
  return entry;
}

/**
 * Set a cached classification result with LRU eviction.
 */
export async function setCachedResult(fingerprint: string, result: ClassificationResult): Promise<void> {
  const cache = await decisionCache.getValue();
  const keys = Object.keys(cache);

  // If adding a new key and exceeding max size, remove least recently used
  // (We'll use simple approach: if size >= max, remove first key)
  if (!cache[fingerprint] && keys.length >= LRU_MAX_SIZE) {
    // Remove the first entry (oldest, approximating LRU)
    const keyToRemove = keys[0];
    delete cache[keyToRemove];
  }

  cache[fingerprint] = result;
  await decisionCache.setValue(cache);
}

/**
 * Clear the decision cache entirely.
 */
export async function clearDecisionCache(): Promise<void> {
  await decisionCache.setValue({ ...defaultDecisionCache });
}

// ============================================================================
// Statistics Helpers
// ============================================================================

/**
 * Increment the total filtered count
 */
export async function incrementFilteredCount(amount: number = 1): Promise<void> {
  const stats = await statsStore.getValue();
  stats.totalFiltered += amount;
  stats.lastReset = Date.now();
  await statsStore.setValue(stats);
}

/**
 * Reset statistics to zero
 */
export async function resetStats(): Promise<void> {
  await statsStore.setValue({ ...defaultStats });
}

// ============================================================================
// Initialization (optional)
// ============================================================================

/**
 * Ensure all stores have default values on first run.
 * Useful for explicitly priming storage.
 */
export async function initializeStores(): Promise<void> {
  // These will use fallback values automatically, but we can call them to ensure
  // storage is ready (e.g., during extension install)
  await Promise.all([
    settingsStore.getValue(),
    decisionCache.getValue(),
    byokKeysStore.getValue(),
    statsStore.getValue(),
  ]);
}
