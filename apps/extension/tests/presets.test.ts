import { describe, it, expect } from 'vitest';
import { politicsPreset } from '../src/presets/politics';
import { ragebaitPreset } from '../src/presets/ragebait';
import { spoilersPreset } from '../src/presets/spoilers';
import { clickbaitPreset } from '../src/presets/clickbait';
import { matchPreset, getPresetById, allPresets } from '../src/presets';

describe('Politics Preset', () => {
  it('should match election-related content', () => {
    expect(politicsPreset.matches({ title: 'Election results are in', sourceName: '' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Voters head to polls', sourceName: '' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Congress passes new bill', sourceName: '' })).toBe(true);
  });

  it('should match political figure names', () => {
    expect(politicsPreset.matches({ title: 'Biden announces new policy', sourceName: '' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Trump speaks at rally', sourceName: '' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Pelosi statement on vote', sourceName: '' })).toBe(true);
  });

  it('should match political channels', () => {
    expect(politicsPreset.matches({ title: 'News update', sourceName: 'CNN' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Breaking', sourceName: 'Fox News' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Report', sourceName: 'MSNBC' })).toBe(true);
  });

  it('should not match non-political content', () => {
    expect(politicsPreset.matches({ title: 'How to bake a cake', sourceName: 'Cooking Channel' })).toBe(false);
    expect(politicsPreset.matches({ title: 'New video game review', sourceName: 'GamerTV' })).toBe(false);
  });

  it('should match congress/senate keywords', () => {
    expect(politicsPreset.matches({ title: 'Senate votes on bill', sourceName: '' })).toBe(true);
    expect(politicsPreset.matches({ title: 'House committee meeting', sourceName: '' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Lawmakers debate issue', sourceName: '' })).toBe(true);
  });

  it('should match political party terms', () => {
    expect(politicsPreset.matches({ title: 'Democrats propose legislation', sourceName: '' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Republicans block vote', sourceName: '' })).toBe(true);
    expect(politicsPreset.matches({ title: 'Liberal vs conservative debate', sourceName: '' })).toBe(true);
  });

  it('should have correct preset metadata', () => {
    expect(politicsPreset.id).toBe('politics');
    expect(politicsPreset.name).toBeTruthy();
    expect(politicsPreset.description).toBeTruthy();
    expect(politicsPreset.decision).toBe('collapse');
  });
});

describe('Ragebait Preset', () => {
  it('should match outrage-inducing phrases', () => {
    expect(ragebaitPreset.matches({ title: 'This will make you furious', sourceName: '' })).toBe(true);
    expect(ragebaitPreset.matches({ title: 'People are outraged over this', sourceName: '' })).toBe(true);
    expect(ragebaitPreset.matches({ title: 'You will be angry', sourceName: '' })).toBe(true);
  });

  it('should match emotional manipulation patterns', () => {
    expect(ragebaitPreset.matches({ title: 'This is unacceptable behavior', sourceName: '' })).toBe(true);
    expect(ragebaitPreset.matches({ title: 'The audacity of this person', sourceName: '' })).toBe(true);
    expect(ragebaitPreset.matches({ title: 'Lost all faith in humanity', sourceName: '' })).toBe(true);
  });

  it('should match clickbait rage patterns', () => {
    expect(ragebaitPreset.matches({ title: 'Karen goes insane', sourceName: '' })).toBe(true);
    expect(ragebaitPreset.matches({ title: 'Entitled parent demands', sourceName: '' })).toBe(true);
    expect(ragebaitPreset.matches({ title: 'Instant karma moment', sourceName: '' })).toBe(true);
  });

  it('should not match calm content', () => {
    expect(ragebaitPreset.matches({ title: 'How to fix a flat tire', sourceName: '' })).toBe(false);
    expect(ragebaitPreset.matches({ title: 'Cute cat video', sourceName: '' })).toBe(false);
  });

  it('should have correct preset metadata', () => {
    expect(ragebaitPreset.id).toBe('ragebait');
    expect(ragebaitPreset.decision).toBe('collapse');
  });
});

describe('Spoilers Preset', () => {
  it('should match spoiler-related phrases', () => {
    expect(spoilersPreset.matches({ title: 'The ending explained', sourceName: '' })).toBe(true);
    expect(spoilersPreset.matches({ title: 'Character death scene', sourceName: '' })).toBe(true);
    expect(spoilersPreset.matches({ title: 'Plot twist revealed', sourceName: '' })).toBe(true);
  });

  it('should match spoiler warning patterns', () => {
    expect(spoilersPreset.matches({ title: 'Spoiler alert: what happens', sourceName: '' })).toBe(true);
    expect(spoilersPreset.matches({ title: 'Major spoiler for episode', sourceName: '' })).toBe(true);
    expect(spoilersPreset.matches({ title: 'Spoilers ahead', sourceName: '' })).toBe(true);
  });

  it('should match movie/show specific terms', () => {
    expect(spoilersPreset.matches({ title: 'Marvel ending scene', sourceName: '' })).toBe(true);
    expect(spoilersPreset.matches({ title: 'Finale breakdown', sourceName: '' })).toBe(true);
    expect(spoilersPreset.matches({ title: 'Post-credits scene', sourceName: '' })).toBe(true);
  });

  it('should use blur decision for spoilers', () => {
    expect(spoilersPreset.decision).toBe('blur');
  });

  it('should not match non-spoiler content', () => {
    expect(spoilersPreset.matches({ title: 'Movie review (no spoilers)', sourceName: '' })).toBe(false);
    expect(spoilersPreset.matches({ title: 'Behind the scenes featurette', sourceName: '' })).toBe(false);
  });

  it('should have correct preset metadata', () => {
    expect(spoilersPreset.id).toBe('spoilers');
    expect(spoilersPreset.decision).toBe('blur');
  });
});

describe('Clickbait Preset', () => {
  it('should match classic clickbait phrases', () => {
    expect(clickbaitPreset.matches({ title: "You won't believe what happens", sourceName: '' })).toBe(true);
    expect(clickbaitPreset.matches({ title: 'This one simple trick', sourceName: '' })).toBe(true);
    expect(clickbaitPreset.matches({ title: 'Doctors hate him', sourceName: '' })).toBe(true);
  });

  it('should match number list clickbait', () => {
    expect(clickbaitPreset.matches({ title: '10 things you need to know', sourceName: '' })).toBe(true);
    expect(clickbaitPreset.matches({ title: '5 reasons why this works', sourceName: '' })).toBe(true);
    expect(clickbaitPreset.matches({ title: 'Number 7 will shock you', sourceName: '' })).toBe(true);
  });

  it('should match emotional superlatives', () => {
    expect(clickbaitPreset.matches({ title: 'Most incredible transformation', sourceName: '' })).toBe(true);
    expect(clickbaitPreset.matches({ title: 'Shocking truth revealed', sourceName: '' })).toBe(true);
    expect(clickbaitPreset.matches({ title: 'Mind-blowing discovery', sourceName: '' })).toBe(true);
  });

  it('should not match legitimate content', () => {
    expect(clickbaitPreset.matches({ title: 'How to cook pasta', sourceName: '' })).toBe(false);
    expect(clickbaitPreset.matches({ title: 'Weather forecast for today', sourceName: '' })).toBe(false);
  });

  it('should have correct preset metadata', () => {
    expect(clickbaitPreset.id).toBe('clickbait');
    expect(clickbaitPreset.decision).toBe('collapse');
  });
});

describe('Preset Utilities', () => {
  it('should return all presets', () => {
    expect(allPresets.length).toBe(4);
    expect(allPresets.map(p => p.id)).toContain('politics');
    expect(allPresets.map(p => p.id)).toContain('ragebait');
    expect(allPresets.map(p => p.id)).toContain('spoilers');
    expect(allPresets.map(p => p.id)).toContain('clickbait');
  });

  it('should get preset by id', () => {
    const preset = getPresetById('politics');
    expect(preset?.id).toBe('politics');
  });

  it('should return undefined for unknown preset id', () => {
    const preset = getPresetById('unknown');
    expect(preset).toBeUndefined();
  });

  it('should match preset using matchPreset function', () => {
    const content = { title: 'Election results announced', sourceName: '' };
    const match = matchPreset(content, ['politics']);
    expect(match).not.toBeNull();
    expect(match?.id).toBe('politics');
  });

  it('should not match when preset not enabled', () => {
    const content = { title: 'Election results announced', sourceName: '' };
    const match = matchPreset(content, []);
    expect(match).toBeNull();
  });

  it('should match first enabled preset that matches', () => {
    const content = { title: 'This will make you furious about politics', sourceName: '' };
    const match = matchPreset(content, ['ragebait', 'politics']);
    expect(match).not.toBeNull();
  });
});

describe('Real-world Content Samples', () => {
  const testCases = [
    { title: 'BREAKING: Congress passes historic legislation', preset: 'politics' },
    { title: 'You won\'t BELIEVE what this celebrity did', preset: 'clickbait' },
    { title: 'This person\'s entitlement will make you LOSE YOUR MIND', preset: 'ragebait' },
    { title: 'SPOILER: The main character dies at the end', preset: 'spoilers' },
    { title: 'Senate confirms new Supreme Court justice', preset: 'politics' },
    { title: '10 foods that are secretly killing you', preset: 'clickbait' },
    { title: 'Watch: Karen screams at retail worker', preset: 'ragebait' },
    { title: 'Finale ending explained - who survived?', preset: 'spoilers' },
    { title: 'White House responds to crisis', preset: 'politics' },
    { title: 'Doctors HATE this one weird trick', preset: 'clickbait' },
  ];

  testCases.forEach(({ title, preset }) => {
    it(`should match "${preset}" for: "${title}"`, () => {
      const p = getPresetById(preset);
      expect(p?.matches({ title, sourceName: '' })).toBe(true);
    });
  });
});
