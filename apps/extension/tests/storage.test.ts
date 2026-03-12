import { describe, it, expect, beforeEach } from 'vitest';
import {
  getCachedResult,
  setCachedResult,
  clearDecisionCache,
  incrementFilteredCount,
  resetStats,
  statsStore,
  decisionCache,
} from '@/utils/storage';
import type { ClassificationResult } from '@calmweb/shared';

// Helper to clear stores before each test
beforeEach(async () => {
  await clearDecisionCache();
  await resetStats();
});

describe('Decision Cache', () => {
  it('should store and retrieve cached result', async () => {
    const fingerprint = 'test-fp-1';
    const result: ClassificationResult = {
      decision: 'hide',
      confidence: 0.9,
      reason: 'test',
    };

    await setCachedResult(fingerprint, result);
    const cached = await getCachedResult(fingerprint);

    expect(cached).toEqual(result);
  });

  it('should return undefined for unknown fingerprint', async () => {
    const cached = await getCachedResult('unknown');
    expect(cached).toBeUndefined();
  });

  it('should clear all cached results', async () => {
    await setCachedResult('fp1', { decision: 'show', confidence: 1, reason: 'a' });
    await setCachedResult('fp2', { decision: 'blur', confidence: 0.8, reason: 'b' });

    await clearDecisionCache();

    expect(await getCachedResult('fp1')).toBeUndefined();
    expect(await getCachedResult('fp2')).toBeUndefined();
  });
});

describe('Statistics', () => {
  it('should increment filtered count', async () => {
    expect((await statsStore.getValue()).totalFiltered).toBe(0);

    await incrementFilteredCount(1);
    expect((await statsStore.getValue()).totalFiltered).toBe(1);

    await incrementFilteredCount(5);
    expect((await statsStore.getValue()).totalFiltered).toBe(6);
  });

  it('should reset stats', async () => {
    await incrementFilteredCount(10);
    await resetStats();

    const stats = await statsStore.getValue();
    expect(stats.totalFiltered).toBe(0);
    expect(stats.lastReset).toBeGreaterThanOrEqual(Date.now() - 1000);
  });
});
