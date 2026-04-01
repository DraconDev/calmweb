import { describe, it, expect } from 'vitest';
import { analyzeSentiment } from '../src/neutralizer/sentiment';
import { classifyTone, isManipulative, getToneSeverity } from '../src/neutralizer/tone-classifier';
import { rewriteWithLocalRules, previewChanges, getRulesForMode } from '../src/neutralizer/local-rules';
import { analyzeForNeutralization, neutralizeText } from '../src/neutralizer/index';

describe('Sentiment Analysis', () => {
  it('should return neutral for neutral text', () => {
    const result = analyzeSentiment('The weather is nice today.');
    expect(result.score).toBeGreaterThanOrEqual(-0.1);
    expect(result.score).toBeLessThanOrEqual(0.1);
    expect(result.magnitude).toBeLessThan(0.3);
  });

  it('should detect negative sentiment in ragebait', () => {
    const result = analyzeSentiment('This will make you furious!');
    expect(result.score).toBeLessThan(0);
    expect(result.emotions.anger).toBeGreaterThan(0);
  });

  it('should detect fear in fear-mongering text', () => {
    const result = analyzeSentiment('Terrifying new crisis will doom us all');
    expect(result.emotions.fear).toBeGreaterThan(0);
  });

  it('should detect joy in positive text', () => {
    const result = analyzeSentiment('Amazing incredible wonderful news!');
    expect(result.emotions.joy).toBeGreaterThan(0);
    expect(result.score).toBeGreaterThan(0);
  });

  it('should identify highly negative text', () => {
    const result = analyzeSentiment('This is disgusting outrageous furious anger hate!');
    expect(result.score).toBeLessThan(0);
    expect(result.magnitude).toBeGreaterThan(0);
  });

  it('should detect high anger', () => {
    const result = analyzeSentiment('People are furious and outraged about this');
    expect(result.emotions.anger + result.emotions.disgust).toBeGreaterThan(0);
  });
});

describe('Tone Classification', () => {
  it('should classify neutral text as neutral', () => {
    const result = classifyTone('The meeting is scheduled for tomorrow.');
    expect(result.primary).toBe('neutral');
  });

  it('should detect ragebait', () => {
    const result = classifyTone('This will make you furious!');
    expect(result.primary).toBe('ragebait');
    expect(result.confidence).toBeGreaterThan(0.3);
  });

  it('should detect clickbait', () => {
    const result = classifyTone("You won't believe this one weird trick!");
    expect(result.primary).toBe('clickbait');
  });

  it('should detect fear-mongering', () => {
    const result = classifyTone('Terrifying crisis will cause disaster');
    expect(result.primary).toBe('fear-mongering');
  });

  it('should provide indicators for detected tones', () => {
    const result = classifyTone('Breaking: Shocking truth revealed!');
    expect(result.indicators.length).toBeGreaterThan(0);
  });

  it('should identify manipulative tone', () => {
    const result = classifyTone('Act now! This is your only chance!');
    expect(isManipulative(result)).toBe(true);
  });

  it('should return correct severity levels', () => {
    const neutral = classifyTone('Regular headline');
    expect(getToneSeverity(neutral)).toBe('low');

    const ragebait = classifyTone('This will make you furious! Outrage!');
    expect(getToneSeverity(ragebait)).not.toBe('low');
  });
});

describe('Local Rules Rewriter', () => {
  it('should neutralize shocking language', () => {
    const result = rewriteWithLocalRules('Shocking discovery!', { mode: 'light' });
    expect(result.rewritten).toBe('Notable discovery!');
    expect(result.changes.length).toBeGreaterThan(0);
  });

  it('should remove clickbait phrases', () => {
    const result = rewriteWithLocalRules("You won't believe what happened", { mode: 'light' });
    expect(result.rewritten).not.toContain("won't believe");
  });

  it('should neutralize outrage language in medium mode', () => {
    const result = rewriteWithLocalRules('Outrage over new policy', { mode: 'medium' });
    expect(result.rewritten).toBe('Discussion over new policy');
  });

  it('should apply strict rules only in strict mode', () => {
    const light = rewriteWithLocalRules('Democrat proposes new bill', { mode: 'light' });
    const strict = rewriteWithLocalRules('Democrat proposes new bill', { mode: 'strict' });
    
    expect(light.rewritten).toContain('Democrat');
    expect(strict.rewritten.toLowerCase()).toContain('politician');
  });

  it('should preserve text with no patterns', () => {
    const result = rewriteWithLocalRules('The cat sat on the mat.', { mode: 'medium' });
    expect(result.rewritten).toBe('The cat sat on the mat.');
    expect(result.changes.length).toBe(0);
    expect(result.confidence).toBe(1.0);
  });

  it('should clean up extra whitespace', () => {
    const result = rewriteWithLocalRules('Shocking  news!', { mode: 'light' });
    expect(result.rewritten).toBe('Notable news!');
  });

  it('should return correct rules for each mode', () => {
    const lightRules = getRulesForMode('light');
    const mediumRules = getRulesForMode('medium');
    const strictRules = getRulesForMode('strict');

    expect(lightRules.every(r => r.strength === 'light')).toBe(true);
    expect(mediumRules.every(r => ['light', 'medium'].includes(r.strength))).toBe(true);
    expect(strictRules.length).toBeGreaterThan(mediumRules.length);
  });

  it('should preview changes without rewriting', () => {
    const changes = previewChanges('Shocking breakthrough!', 'light');
    expect(changes.length).toBeGreaterThan(0);
    expect(changes[0].original).toBe('Shocking');
    expect(changes[0].replacement).toBe('Notable');
  });
});

describe('Neutralization Analysis', () => {
  it('should analyze text for neutralization', () => {
    const analysis = analyzeForNeutralization('This will make you furious!');
    expect(analysis.shouldNeutralize).toBe(true);
    expect(analysis.tone.primary).toBe('ragebait');
  });

  it('should not flag neutral text', () => {
    const analysis = analyzeForNeutralization('The stock market closed up 2% today.');
    expect(analysis.shouldNeutralize).toBe(false);
  });

  it('should calculate confidence correctly', () => {
    const analysis = analyzeForNeutralization('OUTRAGE! You won\'t believe this shocking crisis!');
    expect(analysis.confidence).toBeGreaterThan(0.3);
  });
});

describe('Neutralize Text Integration', () => {
  it('should neutralize ragebait text', async () => {
    const result = await neutralizeText(
      'This will make you furious!',
      'medium'
    );
    expect(result.rewritten).not.toBe(result.original);
    expect(result.analysis.shouldNeutralize).toBe(true);
  });

  it('should return unchanged for neutral text', async () => {
    const result = await neutralizeText(
      'Regular news headline',
      'medium'
    );
    expect(result.rewritten).toBe(result.original);
    expect(result.analysis.shouldNeutralize).toBe(false);
  });

  it('should use local rules when no LLM configured', async () => {
    const result = await neutralizeText(
      'Shocking revelation!',
      'light'
    );
    expect(result.rewritten).toBe('Notable revelation!');
  });
});