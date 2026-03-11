/**
 * Storage utilities for CalmWeb extension
 *
 * Provides typed wrappers around WXT storage for settings, cache, BYOK keys, and stats.
 */

import { storage } from 'wxt/utils/storage';
import { createSettingsStore, createStore } from '@dracon/wxt-shared/storage';
import type { UserSettings, ClassificationResult } from '@calmweb/shared';

// ============================================================================
// Storage Keys
// ============================================================================

export const STORAGE_KEYS = {
  SETTINGS: 'local:settings' as const,
  DECISION_CACHE: 'local:decisionCache' as const,
  BYOK_KEYS: 'local:byokKeys' as const,
  STATS: 'local:stats' as const,
} as const;

// ============================================================================
// Default Values
// ============================================================================

import { defaultUserSettings } from '@calmweb/shared';

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
export const settingsStore = createSettingsStore<UserSettings>(STORAGE_KEYS.SETTINGS, defaultUserSettings);

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
// Helper Functions
// ============================================================================

/**
 * Get a cached classification result by fingerprint
 */
export function getCachedResult(fingerprint: string): ClassificationResult | undefined {
  const cache = decisionCache.getValue();
  return cache[fingerprint];
}

/**
 * Set a cached classification result
 */
export function setCachedResult(fingerprint: string, result: ClassificationResult): void {
  const cache = decisionCache.getValue();
  cache[fingerprint] = result;
  decisionCache.setValue(cache);
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
  const stats = statsStore.getValue();
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
// Initialization
// ============================================================================

/**
 * Ensure all stores have default values on first run
 */
export async function initializeStores(): Promise<void> {
  const settings = await settingsStore.getValue();
  if (!settings) {
    await settingsStore.setValue(defaultUserSettings);
  }

  const cache = await decisionCache.getValue();
  if (!cache) {
    await decisionCache.setValue({ ...defaultDecisionCache });
  }

  const keys = await byokKeysStore.getValue();
  if (!keys) {
    await byokKeysStore.setValue({ ...defaultBYOKKeys });
  }

  const stats = await statsStore.getValue();
  if (!stats) {
    await statsStore.setValue({ ...defaultStats });
  }
}
