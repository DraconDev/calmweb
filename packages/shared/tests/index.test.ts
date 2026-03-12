import { describe, it, expect } from 'vitest';
import { simpleHash, generateFingerprint } from '@calmweb/shared';
import type { ContentUnit } from '@calmweb/shared';

describe('simpleHash', () => {
  it('should produce consistent hash for same input', () => {
    const hash1 = simpleHash('hello world');
    const hash2 = simpleHash('hello world');
    expect(hash1).toBe(hash2);
  });

  it('should produce different hashes for different inputs', () => {
    const hash1 = simpleHash('hello');
    const hash2 = simpleHash('world');
    expect(hash1).not.toBe(hash2);
  });

  it('should return a string', () => {
    const hash = simpleHash('test');
    expect(typeof hash).toBe('string');
  });

  it('should handle empty string', () => {
    const hash = simpleHash('');
    expect(hash).toBeDefined();
  });
});

describe('generateFingerprint', () => {
  it('should generate consistent fingerprint for same content', () => {
    const unit: Omit<ContentUnit, 'id' | 'fingerprint' | 'isNew' | 'element'> = {
      title: 'Test Title',
      sourceName: 'Test Channel',
      site: 'youtube',
      metadata: [],
    };
    const fp1 = generateFingerprint(unit);
    const fp2 = generateFingerprint(unit);
    expect(fp1).toBe(fp2);
  });

  it('should differentiate by title', () => {
    const unit1 = { title: 'Title A', sourceName: 'Channel', site: 'youtube', metadata: [] };
    const unit2 = { title: 'Title B', sourceName: 'Channel', site: 'youtube', metadata: [] };
    expect(generateFingerprint(unit1)).not.toBe(generateFingerprint(unit2));
  });

  it('should differentiate by sourceName', () => {
    const unit1 = { title: 'Title', sourceName: 'Channel A', site: 'youtube', metadata: [] };
    const unit2 = { title: 'Title', sourceName: 'Channel B', site: 'youtube', metadata: [] };
    expect(generateFingerprint(unit1)).not.toBe(generateFingerprint(unit2));
  });

  it('should handle missing sourceName', () => {
    const unit1 = { title: 'Title', sourceName: undefined, site: 'youtube', metadata: [] };
    const unit2 = { title: 'Title', sourceName: undefined, site: 'youtube', metadata: [] };
    expect(generateFingerprint(unit1)).toBe(generateFingerprint(unit2));
  });
});
