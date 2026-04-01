import { describe, it, expect } from 'vitest';
import { analyzeAltText } from '../src/media/alt-text-filter';

describe('Alt-Text Media Filter', () => {
  describe('analyzeAltText', () => {
    it('should not filter neutral alt text', () => {
      const result = analyzeAltText('A diagram showing the architecture');
      expect(result.shouldFilter).toBe(false);
      expect(result.confidence).toBe(0);
    });

    it('should detect clickbait alt text', () => {
      const result = analyzeAltText("You won't BELIEVE what this image shows!");
      expect(result.shouldFilter).toBe(true);
      expect(result.confidence).toBeGreaterThan(0);
    });

    it('should detect ragebait alt text', () => {
      const result = analyzeAltText('This image will make you FURIOUS');
      expect(result.shouldFilter).toBe(true);
      expect(result.confidence).toBeGreaterThan(0);
    });

    it('should detect sensationalist alt text', () => {
      const result = analyzeAltText('SHOCKING photo reveals the truth');
      expect(result.shouldFilter).toBe(true);
      expect(result.confidence).toBeGreaterThan(0);
    });

    it('should handle empty alt text', () => {
      const result = analyzeAltText('');
      expect(result.shouldFilter).toBe(false);
    });

    it('should handle short alt text', () => {
      const result = analyzeAltText('OK');
      expect(result.shouldFilter).toBe(false);
    });

    it('should not filter professional alt text', () => {
      const cases = [
        'Chart showing quarterly results',
        'Team photo from the conference',
        'Screenshot of the application interface',
        'Historical photo from 1950',
      ];

      for (const alt of cases) {
        const result = analyzeAltText(alt);
        expect(result.shouldFilter).toBe(false);
      }
    });
  });
});
