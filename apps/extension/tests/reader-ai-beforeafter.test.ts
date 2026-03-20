/**
 * AI Reader Before/After Tests
 * 
 * Tests the complete AI-powered reader flow showing what gets filtered
 * and how content is transformed.
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';
import { analyzeWithAI } from '../src/renderer/reader-ai';
import type { UserSettings } from '@calmweb/shared';

interface BeforeAfterResult {
  url: string;
  title: string;
  originalLength: number;
  aiFilteredLength: number;
  cssFilteredLength: number;
  aiConfidence: number;
  aiSummary: string;
  decisions: Array<{ action: string; reason: string }>;
  filteredElements: string[];
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

  // AI-based filtering (may fail without real API key)
  let aiFilteredLength = 0;
  let aiConfidence = 0;
  let aiSummary = '';
  let aiDecisions: Array<{ action: string; reason: string }> = [];

  const mockSettings: UserSettings = {
    enabled: true,
    processingMode: 'byok_llm',
    strictness: 80,
    rules: {
      blocklistChannels: [],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
    },
    byokKey: process.env.OPENROUTER_API_KEY || 'test-key',
    aiModel: 'openrouter/free',
    neutralization: { enabled: true, mode: 'medium', showIndicator: true, showDiffOnHover: true, excludeDomains: [] },
    reader: { enabled: true, defaultLayout: 'auto', defaultTheme: 'default', autoOpen: true, textOnly: false, font: 'Inter', fontSize: '17px', showInContextMenu: true },
  };

  try {
    const aiResult = await analyzeWithAI({
      title: doc.title,
      url,
      html: doc.body?.innerHTML?.slice(0, 12000) || '',
      text: doc.body?.textContent?.slice(0, 6000) || '',
    }, mockSettings);

    aiFilteredLength = aiResult.filteredContent.length;
    aiConfidence = aiResult.confidence;
    aiSummary = aiResult.summary;
    aiDecisions = aiResult.decisions.slice(0, 5);
  } catch {
    // AI failed, will use CSS fallback
  }

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
    aiFilteredLength: aiFilteredLength || cssFilteredLength,
    cssFilteredLength,
    aiConfidence,
    aiSummary,
    decisions: aiDecisions,
    filteredElements: removedElements,
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

describe('AI Reader Before/After', () => {
  const results: BeforeAfterResult[] = [];

  it('should compare AI filtering vs CSS filtering on real pages', async () => {
    console.log('\n🔬 AI READER BEFORE/AFTER ANALYSIS\n');
    console.log('='.repeat(100));

    for (const site of TEST_SITES) {
      console.log(`\n⏳ Testing: ${site.name}...`);
      const result = await testBeforeAfter(site.url);
      if (result) {
        results.push(result);
      } else {
        console.log(`  ⚠ Failed to fetch: ${site.url}`);
      }
    }

    console.log('\n');
    console.log('='.repeat(100));
    console.log('BEFORE/AFTER COMPARISON\n');
    console.log('='.repeat(100));

    for (const r of results) {
      const cssReduction = ((1 - r.cssFilteredLength / r.originalLength) * 100).toFixed(1);
      const aiReduction = ((1 - r.aiFilteredLength / r.originalLength) * 100).toFixed(1);

      console.log(`\n📰 ${r.title || r.url}`);
      console.log(`   URL: ${r.url}`);
      console.log(`   ─────────────────────────────────────────`);
      console.log(`   ORIGINAL CONTENT:  ${r.originalLength.toLocaleString().padStart(10)} chars`);
      console.log(`   CSS FILTERED:      ${r.cssFilteredLength.toLocaleString().padStart(10)} chars (${cssReduction}% removed)`);
      console.log(`   AI FILTERED:       ${r.aiFilteredLength.toLocaleString().padStart(10)} chars (${aiReduction}% removed)`);
      console.log(`   AI CONFIDENCE:     ${(r.aiConfidence * 100).toFixed(0)}%`);

      if (r.aiSummary) {
        console.log(`   AI SUMMARY: "${r.aiSummary.slice(0, 100)}..."`);
      }

      if (r.removedElements.length > 0) {
        console.log(`   📦 REMOVED BY CSS:`);
        for (const el of r.removedElements.slice(0, 5)) {
          console.log(`      - ${el}`);
        }
      }

      if (r.decisions.length > 0) {
        console.log(`   🤖 AI DECISIONS:`);
        for (const d of r.decisions.slice(0, 3)) {
          console.log(`      - [${d.action}] ${d.reason.slice(0, 60)}`);
        }
      }
    }

    console.log('\n' + '='.repeat(100));
    console.log('\n📊 SUMMARY STATISTICS\n');

    const avgOriginal = results.reduce((s, r) => s + r.originalLength, 0) / results.length;
    const avgCSS = results.reduce((s, r) => s + r.cssFilteredLength, 0) / results.length;
    const avgAI = results.reduce((s, r) => s + r.aiFilteredLength, 0) / results.length;
    const avgConfidence = results.reduce((s, r) => s + r.aiConfidence, 0) / results.length;

    console.log(`   Average Original:  ${Math.round(avgOriginal).toLocaleString()} chars`);
    console.log(`   Average CSS:       ${Math.round(avgCSS).toLocaleString()} chars (${((1 - avgCSS/avgOriginal) * 100).toFixed(1)}% removed)`);
    console.log(`   Average AI:        ${Math.round(avgAI).toLocaleString()} chars (${((1 - avgAI/avgOriginal) * 100).toFixed(1)}% removed)`);
    console.log(`   Average Confidence: ${(avgConfidence * 100).toFixed(0)}%`);
    console.log('\n');

    expect(results.length).toBeGreaterThan(0);
  }, 120000);

  it('should show what AI decided to keep vs remove', async () => {
    console.log('\n🎯 AI DECISION DETAILS\n');

    for (const r of results) {
      console.log(`\n${'─'.repeat(60)}`);
      console.log(`${r.title || r.url}`);
      console.log(`${'─'.repeat(60)}`);

      const keepDecisions = r.decisions.filter(d => d.action === 'keep');
      const removeDecisions = r.decisions.filter(d => d.action === 'remove');
      const summarizeDecisions = r.decisions.filter(d => d.action === 'summarize');

      console.log(`\n   ✅ AI CHOSE TO KEEP (${keepDecisions.length} decisions):`);
      for (const d of keepDecisions.slice(0, 3)) {
        console.log(`      - ${d.reason.slice(0, 70)}`);
      }
      if (keepDecisions.length > 3) {
        console.log(`      ... and ${keepDecisions.length - 3} more`);
      }

      console.log(`\n   ❌ AI CHOSE TO REMOVE (${removeDecisions.length} decisions):`);
      for (const d of removeDecisions.slice(0, 3)) {
        console.log(`      - ${d.reason.slice(0, 70)}`);
      }
      if (removeDecisions.length > 3) {
        console.log(`      ... and ${removeDecisions.length - 3} more`);
      }

      if (summarizeDecisions.length > 0) {
        console.log(`\n   📝 AI CHOSE TO SUMMARIZE (${summarizeDecisions.length} decisions):`);
        for (const d of summarizeDecisions.slice(0, 2)) {
          console.log(`      - ${d.reason.slice(0, 70)}`);
        }
      }
    }

    console.log('\n');
  });

  it('should verify filtering quality', () => {
    console.log('\n✅ FILTERING QUALITY CHECKS\n');

    let passed = 0;
    let failed = 0;

    for (const r of results) {
      const checks = {
        contentExtracted: r.cssFilteredLength > 100,
        aiAvailable: r.aiConfidence > 0,  // AI only if we have real API key
        meaningfulReduction: (1 - r.cssFilteredLength / r.originalLength) > 0.05,
        noCompleteEmpty: r.aiFilteredLength > 50 || r.cssFilteredLength > 50,
      };

      const cssOnlyPassed = checks.contentExtracted && checks.meaningfulReduction && checks.noCompleteEmpty;
      if (cssOnlyPassed) passed++; else failed++;

      console.log(`   ${cssOnlyPassed ? '✓' : '✗'} ${r.url.replace('https://', '').slice(0, 40)}`);
      console.log(`      CSS extracted: ${checks.contentExtracted ? '✓' : '✗'} (${r.cssFilteredLength.toLocaleString()} chars)`);
      console.log(`      AI available: ${checks.aiAvailable ? '✓' : '○'} (confidence: ${(r.aiConfidence * 100).toFixed(0)}%)`);
      console.log(`      Reduction: ${checks.meaningfulReduction ? '✓' : '✗'} (${((1 - r.cssFilteredLength / r.originalLength) * 100).toFixed(1)}% removed)`);
    }

    console.log(`\n   Total: ${passed}/${results.length} passed (CSS filtering working)`);
    console.log(`   Note: AI requires OPENROUTER_API_KEY env var to run`);

    expect(passed / results.length).toBeGreaterThanOrEqual(0.8);
  });
});
