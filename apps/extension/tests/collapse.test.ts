import { describe, it, expect, beforeEach } from 'vitest';
import { 
  createCollapsePlaceholder, 
  isCollapsed, 
  getCollapseInfo,
  createCollapseStyles 
} from '../src/renderer/collapse';
import type { ClassificationResult } from '@calmweb/shared';

describe('Collapse Renderer', () => {
  let originalElement: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    originalElement = document.createElement('div');
    originalElement.innerHTML = '<p>Political content here</p>';
    document.body.appendChild(originalElement);
  });

  const mockResult: ClassificationResult = {
    decision: 'collapse',
    confidence: 0.9,
    reason: 'preset_politics',
  };

  describe('createCollapsePlaceholder', () => {
    it('should create a collapse container', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_politics',
        originalElement,
        result: mockResult,
      });

      expect(placeholder.classList.contains('calmweb-collapse-container')).toBe(true);
      expect(placeholder.getAttribute('data-calmweb-collapse')).toBe('true');
    });

    it('should set reason attribute', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_ragebait',
        originalElement,
        result: mockResult,
      });

      expect(placeholder.getAttribute('data-calmweb-reason')).toBe('preset_ragebait');
    });

    it('should show correct label for politics', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_politics',
        originalElement,
        result: mockResult,
      });

      expect(placeholder.textContent).toContain('Politics filtered');
    });

    it('should show correct label for ragebait', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_ragebait',
        originalElement,
        result: mockResult,
      });

      expect(placeholder.textContent).toContain('Ragebait blocked');
    });

    it('should show correct label for spoilers', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_spoilers',
        originalElement,
        result: mockResult,
      });

      expect(placeholder.textContent).toContain('Spoiler shield');
    });

    it('should show correct label for clickbait', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_clickbait',
        originalElement,
        result: mockResult,
      });

      expect(placeholder.textContent).toContain('Clickbait removed');
    });

    it('should have expand button', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_politics',
        originalElement,
        result: mockResult,
      });

      const btn = placeholder.querySelector('.calmweb-collapse-expand');
      expect(btn).toBeTruthy();
      expect(btn?.textContent).toContain('Show anyway');
    });

    it('should store original height', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_politics',
        originalElement,
        result: mockResult,
      });

      expect(placeholder.getAttribute('data-calmweb-original-height')).toBeTruthy();
    });

    it('should store site id when provided', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_politics',
        originalElement,
        result: mockResult,
        siteId: 'youtube',
      });

      expect(placeholder.getAttribute('data-calmweb-site')).toBe('youtube');
    });

    it('should use "unknown" for missing site id', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_politics',
        originalElement,
        result: mockResult,
      });

      expect(placeholder.getAttribute('data-calmweb-site')).toBe('unknown');
    });
  });

  describe('isCollapsed', () => {
    it('should return true for collapsed element', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_politics',
        originalElement,
        result: mockResult,
      });

      expect(isCollapsed(placeholder)).toBe(true);
    });

    it('should return false for regular element', () => {
      const div = document.createElement('div');
      expect(isCollapsed(div)).toBe(false);
    });
  });

  describe('getCollapseInfo', () => {
    it('should return info for collapsed element', () => {
      const placeholder = createCollapsePlaceholder({
        reason: 'preset_politics',
        originalElement,
        result: mockResult,
        siteId: 'reddit',
      });

      const info = getCollapseInfo(placeholder);
      expect(info).toEqual({
        reason: 'preset_politics',
        site: 'reddit',
      });
    });

    it('should return null for non-collapsed element', () => {
      const div = document.createElement('div');
      expect(getCollapseInfo(div)).toBeNull();
    });
  });

  describe('createCollapseStyles', () => {
    it('should return CSS string', () => {
      const styles = createCollapseStyles();
      expect(typeof styles).toBe('string');
      expect(styles).toContain('.calmweb-collapse-container');
    });

    it('should include dark mode styles', () => {
      const styles = createCollapseStyles();
      expect(styles).toContain('prefers-color-scheme: dark');
    });

    it('should include hover styles', () => {
      const styles = createCollapseStyles();
      expect(styles).toContain(':hover');
    });
  });

  describe('Reason Icons', () => {
    const testCases = [
      { reason: 'preset_politics', expectedIcon: '🏛️' },
      { reason: 'preset_ragebait', expectedIcon: '😠' },
      { reason: 'preset_spoilers', expectedIcon: '🤐' },
      { reason: 'preset_clickbait', expectedIcon: '🎯' },
      { reason: 'blocklist_channel', expectedIcon: '🚫' },
      { reason: 'unknown_reason', expectedIcon: '🛡️' },
    ];

    testCases.forEach(({ reason, expectedIcon }) => {
      it(`should show ${expectedIcon} icon for ${reason}`, () => {
        const placeholder = createCollapsePlaceholder({
          reason,
          originalElement,
          result: mockResult,
        });

        const icon = placeholder.querySelector('.calmweb-collapse-icon');
        expect(icon?.textContent).toBe(expectedIcon);
      });
    });
  });
});
