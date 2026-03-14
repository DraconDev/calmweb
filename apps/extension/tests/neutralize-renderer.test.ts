import { describe, it, expect, beforeEach, vi } from 'vitest';
import { 
  createNeutralizeIndicator, 
  toggleNeutralizedView, 
  isNeutralized,
  getNeutralizedInfo,
  createNeutralizeStyles
} from '../src/renderer/neutralize';
import type { ClassificationResult } from '@calmweb/shared';

describe('Neutralize Renderer', () => {
  let element: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    element = document.createElement('div');
    element.textContent = 'Neutralized text';
    document.body.appendChild(element);
  });

  const mockResult: ClassificationResult = {
    decision: 'neutralize',
    confidence: 0.85,
    reason: 'ragebait',
  };

  describe('createNeutralizeIndicator', () => {
    it('should mark element as neutralized', () => {
      createNeutralizeIndicator({
        originalText: 'This will make you FURIOUS!',
        neutralizedText: 'This is notable',
        result: mockResult,
        element,
      });

      expect(element.getAttribute('data-calmweb-neutralized')).toBe('true');
      expect(element.classList.contains('calmweb-neutralized')).toBe(true);
    });

    it('should store original and neutralized text', () => {
      createNeutralizeIndicator({
        originalText: 'SHOCKING news!',
        neutralizedText: 'Notable news',
        result: mockResult,
        element,
      });

      expect(element.getAttribute('data-calmweb-original')).toBe('SHOCKING news!');
      expect(element.getAttribute('data-calmweb-neutralized-text')).toBe('Notable news');
    });

    it('should set confidence level correctly', () => {
      const lowConfidenceResult = { ...mockResult, confidence: 0.5 };
      createNeutralizeIndicator({
        originalText: 'Test',
        neutralizedText: 'Test',
        result: lowConfidenceResult,
        element,
      });

      expect(element.getAttribute('data-calmweb-confidence')).toBe('low');
    });

    it('should set medium confidence', () => {
      const medConfidenceResult = { ...mockResult, confidence: 0.8 };
      createNeutralizeIndicator({
        originalText: 'Test',
        neutralizedText: 'Test',
        result: medConfidenceResult,
        element,
      });

      expect(element.getAttribute('data-calmweb-confidence')).toBe('medium');
    });

    it('should set high confidence', () => {
      const highConfidenceResult = { ...mockResult, confidence: 0.95 };
      createNeutralizeIndicator({
        originalText: 'Test',
        neutralizedText: 'Test',
        result: highConfidenceResult,
        element,
      });

      expect(element.getAttribute('data-calmweb-confidence')).toBe('high');
    });

    it('should add indicator span when showIndicator is true', () => {
      createNeutralizeIndicator({
        originalText: 'Test',
        neutralizedText: 'Test',
        result: mockResult,
        element,
        showIndicator: true,
      });

      const indicator = element.querySelector('.calmweb-neutralize-indicator');
      expect(indicator).toBeTruthy();
    });

    it('should not add indicator span when showIndicator is false', () => {
      createNeutralizeIndicator({
        originalText: 'Test',
        neutralizedText: 'Test',
        result: mockResult,
        element,
        showIndicator: false,
      });

      const indicator = element.querySelector('.calmweb-neutralize-indicator');
      expect(indicator).toBeFalsy();
    });

    it('should add tooltip element', () => {
      createNeutralizeIndicator({
        originalText: 'Original',
        neutralizedText: 'Neutralized',
        result: mockResult,
        element,
      });

      const tooltip = element.querySelector('.calmweb-neutralize-tooltip');
      expect(tooltip).toBeTruthy();
    });

    it('should have toggle button in tooltip', () => {
      createNeutralizeIndicator({
        originalText: 'Original',
        neutralizedText: 'Neutralized',
        result: mockResult,
        element,
      });

      const toggleBtn = element.querySelector('[data-action="toggle"]');
      expect(toggleBtn).toBeTruthy();
    });

    it('should have copy button in tooltip', () => {
      createNeutralizeIndicator({
        originalText: 'Original',
        neutralizedText: 'Neutralized',
        result: mockResult,
        element,
      });

      const copyBtn = element.querySelector('[data-action="copy"]');
      expect(copyBtn).toBeTruthy();
    });
  });

  describe('toggleNeutralizedView', () => {
    it('should toggle to showing original', () => {
      createNeutralizeIndicator({
        originalText: 'SHOCKING!',
        neutralizedText: 'Notable',
        result: mockResult,
        element,
      });

      toggleNeutralizedView(element);
      expect(element.classList.contains('calmweb-showing-original')).toBe(true);
    });

    it('should toggle back to neutralized', () => {
      createNeutralizeIndicator({
        originalText: 'SHOCKING!',
        neutralizedText: 'Notable',
        result: mockResult,
        element,
      });

      toggleNeutralizedView(element);
      toggleNeutralizedView(element);
      expect(element.classList.contains('calmweb-showing-original')).toBe(false);
      expect(element.classList.contains('calmweb-neutralized')).toBe(true);
    });

    it('should do nothing for non-neutralized element', () => {
      const regularDiv = document.createElement('div');
      regularDiv.textContent = 'Normal text';
      
      toggleNeutralizedView(regularDiv);
      expect(regularDiv.classList.contains('calmweb-showing-original')).toBe(false);
    });
  });

  describe('isNeutralized', () => {
    it('should return true for neutralized element', () => {
      createNeutralizeIndicator({
        originalText: 'Test',
        neutralizedText: 'Test',
        result: mockResult,
        element,
      });

      expect(isNeutralized(element)).toBe(true);
    });

    it('should return false for regular element', () => {
      const div = document.createElement('div');
      expect(isNeutralized(div)).toBe(false);
    });
  });

  describe('getNeutralizedInfo', () => {
    it('should return info for neutralized element', () => {
      createNeutralizeIndicator({
        originalText: 'FURIOUS!',
        neutralizedText: 'Concerned',
        result: { ...mockResult, confidence: 0.95 },
        element,
      });

      const info = getNeutralizedInfo(element);
      expect(info).toEqual({
        original: 'FURIOUS!',
        neutralized: 'Concerned',
        confidence: 'high',
      });
    });

    it('should return null for non-neutralized element', () => {
      const div = document.createElement('div');
      expect(getNeutralizedInfo(div)).toBeNull();
    });
  });

  describe('createNeutralizeStyles', () => {
    it('should return CSS string', () => {
      const styles = createNeutralizeStyles();
      expect(typeof styles).toBe('string');
      expect(styles).toContain('.calmweb-neutralized');
    });

    it('should include indicator styles', () => {
      const styles = createNeutralizeStyles();
      expect(styles).toContain('.calmweb-neutralize-indicator');
    });

    it('should include tooltip styles', () => {
      const styles = createNeutralizeStyles();
      expect(styles).toContain('.calmweb-neutralize-tooltip');
    });

    it('should include confidence-based styles', () => {
      const styles = createNeutralizeStyles();
      expect(styles).toContain('data-calmweb-confidence="low"');
      expect(styles).toContain('data-calmweb-confidence="medium"');
    });

    it('should include dark mode styles', () => {
      const styles = createNeutralizeStyles();
      expect(styles).toContain('prefers-color-scheme: dark');
    });
  });

  describe('Copy functionality', () => {
    it('should have copy button that can be clicked', () => {
      const clipboardSpy = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValueOnce(undefined);
      
      createNeutralizeIndicator({
        originalText: 'Original',
        neutralizedText: 'Neutralized',
        result: mockResult,
        element,
      });

      const copyBtn = element.querySelector('[data-action="copy"]') as HTMLButtonElement;
      copyBtn.click();

      expect(clipboardSpy).toHaveBeenCalledWith('Original\nNeutralized: Neutralized');
      
      clipboardSpy.mockRestore();
    });
  });
});
