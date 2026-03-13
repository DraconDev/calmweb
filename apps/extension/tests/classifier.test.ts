import { describe, it, expect } from 'vitest';
import { applyLocalRules } from '@/utils/classifier';
import type { ContentUnit, UserRules } from '@calmweb/shared';

describe('applyLocalRules', () => {
  const baseUnit: ContentUnit = {
    id: 'test-1',
    site: 'youtube',
    fingerprint: 'fp1',
    title: 'Test Video',
    metadata: [],
    isNew: false,
  };

  it('should collapse based on blocklist channel', () => {
    const rules: UserRules = {
      blocklistChannels: ['CNN'],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
    };
    const unit = { ...baseUnit, sourceName: 'CNN News' };
    const result = applyLocalRules(unit, rules);
    expect(result).not.toBeNull();
    expect(result!.decision).toBe('collapse');
    expect(result!.reason).toBe('blocklist_channel');
  });

  it('should collapse based on blocklist keyword (case insensitive)', () => {
    const rules: UserRules = {
      blocklistChannels: [],
      blocklistKeywords: ['spoiler'],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
    };
    const unit = { ...baseUnit, title: 'This movie has a SPOILER' };
    const result = applyLocalRules(unit, rules);
    expect(result).not.toBeNull();
    expect(result!.decision).toBe('collapse');
    expect(result!.reason).toBe('blocklist_keyword');
  });

  it('should show based on allowlist channel overriding blocklist', () => {
    const rules: UserRules = {
      blocklistChannels: ['CNN'],
      blocklistKeywords: [],
      allowlistChannels: ['BBC'],
      allowlistKeywords: [],
      presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
    };
    const unit = { ...baseUnit, sourceName: 'BBC News' };
    const result = applyLocalRules(unit, rules);
    expect(result).not.toBeNull();
    expect(result!.decision).toBe('show');
    expect(result!.reason).toBe('allowlist_channel');
  });

  it('should show based on allowlist keyword', () => {
    const rules: UserRules = {
      blocklistChannels: [],
      blocklistKeywords: ['bad'],
      allowlistChannels: [],
      allowlistKeywords: ['safe'],
      presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
    };
    const unit = { ...baseUnit, title: 'This is a safe video' };
    const result = applyLocalRules(unit, rules);
    expect(result).not.toBeNull();
    expect(result!.decision).toBe('show');
    expect(result!.reason).toBe('allowlist_keyword');
  });

  it('should return null when no rules match', () => {
    const rules: UserRules = {
      blocklistChannels: [],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
    };
    const result = applyLocalRules(baseUnit, rules);
    expect(result).toBeNull();
  });

  it('should detect preset politics keywords', () => {
    const rules: UserRules = {
      blocklistChannels: [],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: true, ragebait: false, spoilers: false, clickbait: false },
    };
    const unit = { ...baseUnit, title: 'Election results coming in' };
    const result = applyLocalRules(unit, rules);
    expect(result).not.toBeNull();
    expect(result!.decision).toBe('collapse');
    expect(result!.reason).toBe('preset_politics');
  });

  it('should detect preset ragebait keywords', () => {
    const rules: UserRules = {
      blocklistChannels: [],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: false, ragebait: true, spoilers: false, clickbait: false },
    };
    const unit = { ...baseUnit, title: 'This will make you angry' };
    const result = applyLocalRules(unit, rules);
    expect(result).not.toBeNull();
    expect(result!.decision).toBe('collapse');
    expect(result!.reason).toBe('preset_ragebait');
  });

  it('should detect preset spoilers keywords', () => {
    const rules: UserRules = {
      blocklistChannels: [],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: false, ragebait: false, spoilers: true, clickbait: false },
    };
    const unit = { ...baseUnit, title: 'The twist ending revealed' };
    const result = applyLocalRules(unit, rules);
    expect(result).not.toBeNull();
    expect(result!.decision).toBe('blur');
    expect(result!.reason).toBe('preset_spoilers');
  });

  it('should detect preset clickbait keywords', () => {
    const rules: UserRules = {
      blocklistChannels: [],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: false, ragebait: false, spoilers: false, clickbait: true },
    };
    const unit = { ...baseUnit, title: 'You won\'t believe this hack' };
    const result = applyLocalRules(unit, rules);
    expect(result).not.toBeNull();
    expect(result!.decision).toBe('collapse');
    expect(result!.reason).toBe('preset_clickbait');
  });
});
