/**
 * Storage utilities for CalmWeb extension
 *
 * Provides typed wrappers around WXT storage for settings, cache, BYOK keys, and stats.
 */

import { createStore } from '@dracon/wxt-shared/storage';
import type { UserSettings, ClassificationResult } from '@calmweb/shared';
import { STORAGE_KEYS, defaultUserSettings } from '@calmweb/shared';

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
// Typed Storage Items
// ============================================================================

/**
 * User settings store
 * Contains: enabled, processingMode, strictness, rules, byokKey
 */
export const settingsStore = createStore<UserSettings>(STORAGE_KEYS.SETTINGS, defaultUserSettings);

/**
 * Decision cache store: fingerprint -> classification result
 * This is a simple object record, not a Map, for serialization.
 */
export const decisionCache = createStore<Record<string, ClassificationResult>>(
  STORAGE_KEYS.DECISION_CACHE,
  defaultDecisionCache
);

/**
 * BYOK API keys store
 */
export const byokKeysStore = createStore<{ openai?: string; anthropic?: string }>(
  STORAGE_KEYS.BYOK_KEYS,
  defaultBYOKKeys
);

/**
 * Statistics store
 */
export const statsStore = createStore<{ totalFiltered: number; lastReset: number }>(
  STORAGE_KEYS.STATS,
  defaultStats
);

// ============================================================================
// Helper Functions (async)
// ============================================================================

/**
 * Get a cached classification result by fingerprint
 */
export async function getCachedResult(fingerprint: string): Promise<ClassificationResult | undefined> {
  const cache = await decisionCache.getValue();
  return cache[fingerprint];
}

/**
 * Set a cached classification result
 */
export async function setCachedResult(fingerprint: string, result: ClassificationResult): Promise<void> {
  const cache = await decisionCache.getValue();
  cache[fingerprint] = result;
  await decisionCache.setValue(cache);
}

/**
 * Clear the decision cache
 */
export async function clearDecisionCache(): Promise<void> {
  await decisionCache.setValue({ ...defaultDecisionCache });
}

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
 * Not strictly necessary as getValue() returns fallback, but can be used
 * to explicitly set defaults in storage.
 */
export async function initializeStores(): Promise<void> {
  // These are optional; the stores already have fallback values.
  // You could explicitly set defaults if desired.
  await settingsStore.getValue();
  await decisionCache.getValue();
  await byokKeysStore.getValue();
  await statsStore.getValue();
}
