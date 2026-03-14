import { describe, it, expect, beforeEach } from 'vitest';
import { universalAdapter } from '../src/adapters/universal';
import type { ClassificationResult } from '@calmweb/shared';

describe('Universal Adapter', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('Site Adapter Properties', () => {
    it('should have siteId', () => {
      expect(universalAdapter.siteId).toBe('universal');
    });

    it('should match all URLs', () => {
      expect(universalAdapter.matches.length).toBe(1);
      expect(universalAdapter.matches[0].test('https://any-site.com')).toBe(true);
      expect(universalAdapter.matches[0].test('https://example.org/path')).toBe(true);
    });
  });

  describe('extractData', () => {
    it('should extract title from article element', () => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>Test Article Title</h2>
        <p>Article content here with enough text to be valid.</p>
        <span class="author">John Doe</span>
      `;
      document.body.appendChild(article);

      const data = universalAdapter.extractData(article);
      expect(data.title).toBe('Test Article Title');
    });

    it('should extract source from author element', () => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>Article Title</h2>
        <p>Content here.</p>
        <span class="author">Jane Smith</span>
      `;
      document.body.appendChild(article);

      const data = universalAdapter.extractData(article);
      expect(data.sourceName).toBe('Jane Smith');
    });

    it('should extract metadata from time element', () => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>Article</h2>
        <time datetime="2024-01-15">January 15, 2024</time>
        <p>Content here.</p>
      `;
      document.body.appendChild(article);

      const data = universalAdapter.extractData(article);
      expect(data.metadata).toContain('2024-01-15');
    });

    it('should generate fingerprint', () => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>Unique Title Here</h2>
        <p>Content.</p>
      `;
      document.body.appendChild(article);

      const data = universalAdapter.extractData(article);
      expect(data.fingerprint).toBeTruthy();
      expect(data.fingerprint.length).toBeGreaterThan(0);
    });

    it('should set site to universal', () => {
      const article = document.createElement('article');
      article.innerHTML = '<h2>Title</h2><p>Content here.</p>';
      document.body.appendChild(article);

      const data = universalAdapter.extractData(article);
      expect(data.site).toBe('universal');
    });
  });

  describe('applyDecision', () => {
    it('should hide element for hide decision', () => {
      const element = document.createElement('div');
      element.innerHTML = '<h2>Hidden Content</h2>';
      document.body.appendChild(element);

      const result: ClassificationResult = {
        decision: 'hide',
        confidence: 0.9,
        reason: 'test',
      };

      universalAdapter.applyDecision(element, result);
      expect(element.style.display).toBe('none');
      expect(element.getAttribute('data-calmweb-processed')).toBe('hidden');
    });

    it('should blur element for blur decision', () => {
      const element = document.createElement('div');
      element.innerHTML = '<h2>Spoiler Content</h2>';
      document.body.appendChild(element);

      const result: ClassificationResult = {
        decision: 'blur',
        confidence: 0.9,
        reason: 'preset_spoilers',
      };

      universalAdapter.applyDecision(element, result);
      expect(element.classList.contains('calmweb-blurred')).toBe(true);
      expect(element.getAttribute('data-calmweb-processed')).toBe('blur');
    });

    it('should collapse element for collapse decision', () => {
      const element = document.createElement('div');
      element.innerHTML = '<h2>Political Content</h2>';
      document.body.appendChild(element);

      const result: ClassificationResult = {
        decision: 'collapse',
        confidence: 0.9,
        reason: 'preset_politics',
      };

      universalAdapter.applyDecision(element, result);
      expect(element.style.display).toBe('none');
      expect(element.getAttribute('data-calmweb-processed')).toBe('collapsed');
      
      const placeholder = element.nextElementSibling;
      expect(placeholder?.classList.contains('calmweb-collapse-container')).toBe(true);
    });

    it('should mark show for show decision', () => {
      const element = document.createElement('div');
      element.innerHTML = '<h2>Normal Content</h2>';
      document.body.appendChild(element);

      const result: ClassificationResult = {
        decision: 'show',
        confidence: 0.9,
        reason: 'none',
      };

      universalAdapter.applyDecision(element, result);
      expect(element.getAttribute('data-calmweb-processed')).toBe('show');
    });

    it('should neutralize text for neutralize decision', () => {
      const element = document.createElement('div');
      element.innerHTML = '<h2>SHOCKING NEWS</h2>';
      document.body.appendChild(element);

      const result: ClassificationResult = {
        decision: 'neutralize',
        confidence: 0.9,
        reason: 'ragebait',
        neutralizedTitle: 'Notable News',
      };

      universalAdapter.applyDecision(element, result);
      expect(element.getAttribute('data-calmweb-processed')).toBe('neutralized');
    });
  });

  describe('discoverUnits', () => {
    it('should discover article elements', () => {
      document.body.innerHTML = `
        <article><h2>Article 1</h2><p>Content for article 1 with enough text.</p></article>
        <article><h2>Article 2</h2><p>Content for article 2 with enough text.</p></article>
        <article><h2>Article 3</h2><p>Content for article 3 with enough text.</p></article>
      `;

      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { get: () => 100 });
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { get: () => 200 });

      const units = universalAdapter.discoverUnits!(document);
      expect(units.length).toBeGreaterThanOrEqual(3);
    });

    it('should return empty array for no content', () => {
      document.body.innerHTML = '<div>No content here</div>';
      const units = universalAdapter.discoverUnits!(document);
      expect(units.length).toBe(0);
    });
  });
});
