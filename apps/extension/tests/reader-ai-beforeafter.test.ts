/**
 * CSS Reader Before/After Tests
 * 
 * Tests the CSS-based reader filtering showing what gets removed.
 * AI-powered analysis is handled by the Dracon platform API (requires extension context).
 * 
 * These tests verify CSS extraction works correctly without the extension runtime.
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';

interface BeforeAfterResult {
  url: string;
  title: string;
  originalLength: number;
  cssFilteredLength: number;
  removedElements: string[];
}

async function fetchPage(url: string): Promise<{ html: string; title: string; error?: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CalmWeb-Reader-Test/1.0)',
      },
    });

    clearTimeout(timeout);
    if (!response.ok) return { html: '', title: '', error: `HTTP ${response.status}` };

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return { html, title: doc.title };
  } catch (err: any) {
    clearTimeout(timeout);
    return { html: '', title: '', error: err.message };
  }
}

function countElements(root: Element | Document): Record<string, number> {
  return {
    scripts: root.querySelectorAll('script').length,
    styles: root.querySelectorAll('style').length,
    iframes: root.querySelectorAll('iframe').length,
    nav: root.querySelectorAll('nav, [role="navigation"]').length,
    aside: root.querySelectorAll('aside, [role="complementary"]').length,
    footer: root.querySelectorAll('footer, [role="contentinfo"]').length,
    ads: root.querySelectorAll('[class*="ad"], [id*="ad"], .advertisement, .ads').length,
    social: root.querySelectorAll('[class*="social"], [class*="share"], .share-buttons').length,
    comments: root.querySelectorAll('[class*="comment"], #comments, .disqus').length,
    newsletter: root.querySelectorAll('[class*="newsletter"], [class*="subscribe"]').length,
    cookies: root.querySelectorAll('[class*="cookie"], .gdpr, .consent').length,
    modals: root.querySelectorAll('[class*="modal"], [class*="popup"], [class*="lightbox"]').length,
    videos: root.querySelectorAll('video, embed, object').length,
    images: root.querySelectorAll('img').length,
    links: root.querySelectorAll('a').length,
    paragraphs: root.querySelectorAll('p').length,
    headings: root.querySelectorAll('h1,h2,h3,h4,h5,h6').length,
    lists: root.querySelectorAll('ul, ol').length,
    tables: root.querySelectorAll('table').length,
  };
}

async function testBeforeAfter(url: string): Promise<BeforeAfterResult | null> {
  const { html, title, error } = await fetchPage(url);
  if (error || !html) return null;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const originalLength = doc.body?.textContent?.length || 0;
  const originalElements = countElements(doc);

  // CSS-based extraction
  const article = extractArticle(doc, url, 'full');
  const cssFilteredLength = article.content.length;
  const cssElements = countElements(article.contentHtml);

  const removedElements: string[] = [];
  if (originalElements.scripts > 0 && cssElements.scripts === 0) {
    removedElements.push(`scripts: ${originalElements.scripts}`);
  }
  if (originalElements.ads > 0 && cssElements.ads === 0) {
    removedElements.push(`ads: ${originalElements.ads}`);
  }
  if (originalElements.nav > 0 && cssElements.nav === 0) {
    removedElements.push(`nav: ${originalElements.nav}`);
  }
  if (originalElements.aside > 0 && cssElements.aside === 0) {
    removedElements.push(`aside: ${originalElements.aside}`);
  }
  if (originalElements.footer > 0 && cssElements.footer === 0) {
    removedElements.push(`footer: ${originalElements.footer}`);
  }
  if (originalElements.newsletter > 0 && cssElements.newsletter === 0) {
    removedElements.push(`newsletter: ${originalElements.newsletter}`);
  }
  if (originalElements.cookies > 0 && cssElements.cookies === 0) {
    removedElements.push(`cookies: ${originalElements.cookies}`);
  }
  if (originalElements.modals > 0 && cssElements.modals === 0) {
    removedElements.push(`modals: ${originalElements.modals}`);
  }

  return {
    url,
    title,
    originalLength,
    cssFilteredLength,
    removedElements,
  };
}

const TEST_SITES = [
  { name: 'BBC News', url: 'https://www.bbc.com/news/technology' },
  { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Quantum_computing' },
  { name: 'MDN Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'The Verge', url: 'https://www.theverge.com' },
  { name: 'Stack Overflow', url: 'https://stackoverflow.com/questions' },
  { name: 'Reddit', url: 'https://www.reddit.com/r/programming/' },
];

describe('CSS Reader Filtering', () => {
  const results: BeforeAfterResult[] = [];

  it('should demonstrate CSS filtering on real pages', async () => {
    console.log('\n🔬 CSS READER FILTERING ANALYSIS\n');
    console.log('='.repeat(100));

    for (const site of TEST_SITES) {
      console.log(`\n⏳ Testing: ${site.name}...`);
      const result = await testBeforeAfter(site.url);
      if (result) {
        results.push(result);
        console.log(`  ✓ Done`);
      } else {
        console.log(`  ⚠ Failed to fetch: ${site.url}`);
      }
    }

    console.log('\n');
    console.log('='.repeat(100));
    console.log('BEFORE/AFTER COMPARISON\n');
    console.log('='.repeat(100));

    for (const r of results) {
      const reduction = ((1 - r.cssFilteredLength / r.originalLength) * 100).toFixed(1);

      console.log(`\n📰 ${r.title || r.url}`);
      console.log(`   URL: ${r.url}`);
      console.log(`   ─────────────────────────────────────────`);
      console.log(`   ORIGINAL CONTENT:  ${r.originalLength.toLocaleString().padStart(10)} chars`);
      console.log(`   CSS FILTERED:      ${r.cssFilteredLength.toLocaleString().padStart(10)} chars (${reduction}% removed)`);

      if (r.removedElements.length > 0) {
        console.log(`   📦 REMOVED ELEMENTS:`);
        for (const el of r.removedElements.slice(0, 5)) {
          console.log(`      - ${el}`);
        }
      }
    }

    console.log('\n' + '='.repeat(100));
    console.log('\n📊 SUMMARY STATISTICS\n');

    const avgOriginal = results.reduce((s, r) => s + r.originalLength, 0) / results.length;
    const avgCSS = results.reduce((s, r) => s + r.cssFilteredLength, 0) / results.length;

    console.log(`   Average Original:  ${Math.round(avgOriginal).toLocaleString()} chars`);
    console.log(`   Average CSS:      ${Math.round(avgCSS).toLocaleString()} chars (${((1 - avgCSS/avgOriginal) * 100).toFixed(1)}% removed)`);
    console.log(`   AI Features:       Requires Dracon platform authentication (works in extension context)`);
    console.log('\n');

    expect(results.length).toBeGreaterThan(0);
  }, 120000);

  it('should verify CSS filtering quality', async () => {
    console.log('\n✅ FILTERING QUALITY CHECKS\n');

    let passed = 0;
    let failed = 0;

    for (const r of results) {
      const checks = {
        contentExtracted: r.cssFilteredLength > 100,
        meaningfulReduction: (1 - r.cssFilteredLength / r.originalLength) > 0.05,
        noCompleteEmpty: r.cssFilteredLength > 50,
      };

      const cssPassed = checks.contentExtracted && checks.meaningfulReduction && checks.noCompleteEmpty;
      if (cssPassed) passed++; else failed++;

      console.log(`   ${cssPassed ? '✓' : '✗'} ${r.url.replace('https://', '').slice(0, 40)}`);
      console.log(`      CSS extracted: ${checks.contentExtracted ? '✓' : '✗'} (${r.cssFilteredLength.toLocaleString()} chars)`);
      console.log(`      Reduction: ${checks.meaningfulReduction ? '✓' : '✗'} (${((1 - r.cssFilteredLength / r.originalLength) * 100).toFixed(1)}% removed)`);
    }

    console.log(`\n   Total: ${passed}/${results.length} passed`);
    console.log(`   Note: AI features require Dracon platform authentication in extension context`);

    expect(passed / results.length).toBeGreaterThanOrEqual(0.8);
  });
});
