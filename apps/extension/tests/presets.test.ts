import { describe, it, expect } from 'vitest';
import { politicsPreset } from '../src/presets/politics';
import { ragebaitPreset } from '../src/presets/ragebait';
import { spoilersPreset } from '../src/presets/spoilers';
import { clickbaitPreset } from '../src/presets/clickbait';
import { getPreset, getAllPresets, matchPresetKeywords, matchPresetChannel, PRESETS } from '../src/presets';

describe('Politics Preset', () => {
  it('should have correct metadata', () => {
    expect(politicsPreset.id).toBe('politics');
    expect(politicsPreset.name).toBeTruthy();
    expect(politicsPreset.description).toBeTruthy();
    expect(politicsPreset.actions.default).toBe('collapse');
  });

  it('should have keywords defined', () => {
    expect(politicsPreset.patterns.keywords).toBeDefined();
    expect(politicsPreset.patterns.keywords!.length).toBeGreaterThan(20);
  });

  it('should have channels defined', () => {
    expect(politicsPreset.patterns.channels).toBeDefined();
    expect(politicsPreset.patterns.channels!.length).toBeGreaterThan(10);
  });

  it('should match election-related content', () => {
    expect(matchPresetKeywords('Election results are in', 'politics')).toBe(true);
    expect(matchPresetKeywords('Voters head to polls', 'politics')).toBe(true);
    expect(matchPresetKeywords('Congress passes new bill', 'politics')).toBe(true);
  });

  it('should match political figure keywords', () => {
    expect(matchPresetKeywords('Biden announces new policy', 'politics')).toBe(true);
    expect(matchPresetKeywords('Trump speaks at rally', 'politics')).toBe(true);
  });

  it('should match political channels', () => {
    expect(matchPresetChannel('CNN', 'politics')).toBe(true);
    expect(matchPresetChannel('Fox News', 'politics')).toBe(true);
    expect(matchPresetChannel('MSNBC', 'politics')).toBe(true);
  });

  it('should not match non-political content', () => {
    expect(matchPresetKeywords('How to bake a cake', 'politics')).toBe(false);
    expect(matchPresetKeywords('New video game review', 'politics')).toBe(false);
    expect(matchPresetChannel('Cooking Channel', 'politics')).toBe(false);
  });
});

describe('Ragebait Preset', () => {
  it('should have correct metadata', () => {
    expect(ragebaitPreset.id).toBe('ragebait');
    expect(ragebaitPreset.actions.default).toBe('collapse');
  });

  it('should have keywords defined', () => {
    expect(ragebaitPreset.patterns.keywords).toBeDefined();
    expect(ragebaitPreset.patterns.keywords!.length).toBeGreaterThan(10);
  });

  it('should match outrage-inducing phrases', () => {
    expect(matchPresetKeywords('This will make you furious', 'ragebait')).toBe(true);
    expect(matchPresetKeywords('People are outraged over this', 'ragebait')).toBe(true);
    expect(matchPresetKeywords('You will be angry', 'ragebait')).toBe(true);
  });

  it('should match Karen/entitled patterns', () => {
    expect(matchPresetKeywords('Karen goes insane', 'ragebait')).toBe(true);
    expect(matchPresetKeywords('Entitled parent demands', 'ragebait')).toBe(true);
  });

  it('should not match calm content', () => {
    expect(matchPresetKeywords('How to fix a flat tire', 'ragebait')).toBe(false);
    expect(matchPresetKeywords('Cute cat video', 'ragebait')).toBe(false);
  });
});

describe('Spoilers Preset', () => {
  it('should have correct metadata', () => {
    expect(spoilersPreset.id).toBe('spoilers');
    expect(spoilersPreset.actions.default).toBe('blur');
  });

  it('should match spoiler-related phrases', () => {
    expect(matchPresetKeywords('The ending explained', 'spoilers')).toBe(true);
    expect(matchPresetKeywords('Character death scene', 'spoilers')).toBe(true);
    expect(matchPresetKeywords('Plot twist revealed', 'spoilers')).toBe(true);
  });

  it('should match spoiler warning patterns', () => {
    expect(matchPresetKeywords('Spoiler alert: what happens', 'spoilers')).toBe(true);
    expect(matchPresetKeywords('Major spoiler for episode', 'spoilers')).toBe(true);
    expect(matchPresetKeywords('Spoilers ahead', 'spoilers')).toBe(true);
  });

  it('should use blur decision for spoilers', () => {
    expect(spoilersPreset.actions.default).toBe('blur');
  });

  it('should not match non-spoiler content', () => {
    expect(matchPresetKeywords('Movie review without spoilers', 'spoilers')).toBe(false);
    expect(matchPresetKeywords('Behind the scenes featurette', 'spoilers')).toBe(false);
  });
});

describe('Clickbait Preset', () => {
  it('should have correct metadata', () => {
    expect(clickbaitPreset.id).toBe('clickbait');
    expect(clickbaitPreset.actions.default).toBe('collapse');
  });

  it('should match classic clickbait phrases', () => {
    expect(matchPresetKeywords("You won't believe what happens", 'clickbait')).toBe(true);
    expect(matchPresetKeywords('This one simple trick', 'clickbait')).toBe(true);
    expect(matchPresetKeywords('Doctors hate him', 'clickbait')).toBe(true);
  });

  it('should match number list clickbait', () => {
    expect(matchPresetKeywords('10 things you need to know', 'clickbait')).toBe(true);
    expect(matchPresetKeywords('5 reasons why this works', 'clickbait')).toBe(true);
    expect(matchPresetKeywords('Number 7 will shock you', 'clickbait')).toBe(true);
  });

  it('should match emotional superlatives', () => {
    expect(matchPresetKeywords('Most incredible transformation', 'clickbait')).toBe(true);
    expect(matchPresetKeywords('Shocking truth revealed', 'clickbait')).toBe(true);
    expect(matchPresetKeywords('Mind-blowing discovery', 'clickbait')).toBe(true);
  });

  it('should not match legitimate content', () => {
    expect(matchPresetKeywords('How to cook pasta', 'clickbait')).toBe(false);
    expect(matchPresetKeywords('Weather forecast for today', 'clickbait')).toBe(false);
  });
});

describe('Preset Utilities', () => {
  it('should return all presets', () => {
    const all = getAllPresets();
    expect(all.length).toBe(4);
    expect(all.map(p => p.id)).toContain('politics');
    expect(all.map(p => p.id)).toContain('ragebait');
    expect(all.map(p => p.id)).toContain('spoilers');
    expect(all.map(p => p.id)).toContain('clickbait');
  });

  it('should get preset by id', () => {
    const preset = getPreset('politics');
    expect(preset?.id).toBe('politics');
  });

  it('should return undefined for unknown preset id', () => {
    const preset = getPreset('unknown');
    expect(preset).toBeUndefined();
  });

  it('should have PRESETS record', () => {
    expect(Object.keys(PRESETS).length).toBe(4);
    expect(PRESETS['politics']).toBeDefined();
    expect(PRESETS['ragebait']).toBeDefined();
    expect(PRESETS['spoilers']).toBeDefined();
    expect(PRESETS['clickbait']).toBeDefined();
  });
});

describe('Real-world Content Samples', () => {
  const testCases = [
    { title: 'BREAKING: Congress passes historic legislation', preset: 'politics' },
    { title: "You won't BELIEVE what this celebrity did", preset: 'clickbait' },
    { title: "This person's entitlement will make you LOSE YOUR MIND", preset: 'ragebait' },
    { title: 'SPOILER: The main character dies at the end', preset: 'spoilers' },
    { title: 'Senate confirms new Supreme Court justice', preset: 'politics' },
    { title: '10 foods that are secretly killing you', preset: 'clickbait' },
    { title: 'Watch: Karen screams at retail worker', preset: 'ragebait' },
    { title: 'Finale ending explained - who survived?', preset: 'spoilers' },
    { title: 'White House responds to crisis', preset: 'politics' },
    { title: 'Doctors HATE this one weird trick', preset: 'clickbait' },
    { title: 'Lost all faith in humanity after this', preset: 'ragebait' },
    { title: 'Post-credits scene reveals sequel setup', preset: 'spoilers' },
    { title: 'Midterm elections coverage live updates', preset: 'politics' },
    { title: 'Shocking video will leave you speechless', preset: 'clickbait' },
  ];

  testCases.forEach(({ title, preset }) => {
    it(`should match "${preset}" for: "${title}"`, () => {
      expect(matchPresetKeywords(title, preset)).toBe(true);
    });
  });
});

describe('Edge Cases', () => {
  it('should handle empty title', () => {
    expect(matchPresetKeywords('', 'politics')).toBe(false);
    expect(matchPresetKeywords('', 'ragebait')).toBe(false);
  });

  it('should handle undefined sourceName', () => {
    expect(matchPresetChannel(undefined, 'politics')).toBe(false);
  });

  it('should handle unknown preset id', () => {
    expect(matchPresetKeywords('Election news', 'unknown')).toBe(false);
    expect(matchPresetChannel('CNN', 'unknown')).toBe(false);
  });

  it('should be case insensitive', () => {
    expect(matchPresetKeywords('ELECTION RESULTS', 'politics')).toBe(true);
    expect(matchPresetKeywords('election results', 'politics')).toBe(true);
    expect(matchPresetKeywords('ElEcTiOn ReSuLtS', 'politics')).toBe(true);
  });
});
