/**
 * Full Reader Flow Integration Tests
 * 
 * Tests actual pages through the complete CalmWeb reader pipeline:
 * 1. Fetch real page HTML
 * 2. Extract content via extractArticle()
 * 3. Run through layout renderer
 * 4. Verify output quality
 */

import { describe, it, expect } from 'vitest';
import { extractArticle } from '../src/renderer/extractor';
import { defaultLayout } from '../src/renderer/layouts';
import type { ExtractedArticle } from '../src/renderer/extractor';

interface FlowTestResult {
  url: string;
  category: string;
  success: boolean;
  extracted: boolean;
  rendered: boolean;
  title: string;
  contentLength: number;
  outputLength: number;
  errors: string[];
  quality: {
    hasTitle: boolean;
    hasContent: boolean;
    contentPreserved: boolean;
    noScripts: boolean;
    linksSafe: boolean;
  };
}

async function fetchPage(url: string): Promise<{ html: string; title: string; error?: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CalmWeb-Reader-Test/1.0)',
        'Accept': 'text/html,application/xhtml+xml',
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return { html: '', title: '', error: `HTTP ${response.status}` };
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return { html, title: doc.title || '' };
  } catch (err: any) {
    clearTimeout(timeout);
    return { html: '', title: '', error: err.message || 'Unknown error' };
  }
}

function testReaderFlow(html: string, url: string, category: string): FlowTestResult {
  const errors: string[] = [];
  
  // 1. Parse HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  if (!doc.body) {
    return {
      url,
      category,
      success: false,
      extracted: false,
      rendered: false,
      title: '',
      contentLength: 0,
      outputLength: 0,
      errors: ['No body element'],
      quality: { hasTitle: false, hasContent: false, contentPreserved: false, noScripts: false, linksSafe: false },
    };
  }

  // 2. Extract content
  let article: ExtractedArticle;
  try {
    article = extractArticle(doc, url, 'full');
  } catch (err: any) {
    errors.push(`Extraction failed: ${err.message}`);
    return {
      url,
      category,
      success: false,
      extracted: false,
      rendered: false,
      title: doc.title,
      contentLength: 0,
      outputLength: 0,
      errors,
      quality: { hasTitle: false, hasContent: false, contentPreserved: false, noScripts: false, linksSafe: false },
    };
  }

  const contentLength = article.content.length;

  // 3. Render through layout
  const container = document.createElement('div');
  const header = document.createElement('div');
  const footer = document.createElement('div');

  try {
    defaultLayout.render(article, container, {}, { header, footer });
  } catch (err: any) {
    errors.push(`Render failed: ${err.message}`);
    return {
      url,
      category,
      success: false,
      extracted: true,
      rendered: false,
      title: article.title,
      contentLength,
      outputLength: 0,
      errors,
      quality: { hasTitle: false, hasContent: false, contentPreserved: false, noScripts: false, linksSafe: false },
    };
  }

  const outputLength = container.innerHTML.length + header.innerHTML.length + footer.innerHTML.length;

  // 4. Verify quality
  const outputHtml = container.innerHTML + header.innerHTML;
  
  const quality = {
    hasTitle: header.innerHTML.includes('cw-title-main') && article.title.length > 0,
    hasContent: contentLength > 100,
    contentPreserved: contentLength > 0 && outputLength > contentLength * 0.5,
    noScripts: !outputHtml.includes('<script'),
    linksSafe: !outputHtml.includes('javascript:') && !outputHtml.includes('onclick='),
  };

  return {
    url,
    category,
    success: true,
    extracted: true,
    rendered: true,
    title: article.title,
    contentLength,
    outputLength,
    errors,
    quality,
  };
}

const FLOW_TEST_SITES = [
  // News (full articles)
  { name: 'BBC Technology', category: 'news', url: 'https://www.bbc.com/news/technology' },
  { name: 'The Guardian World', category: 'news', url: 'https://www.theguardian.com/world' },
  { name: 'NYT', category: 'news', url: 'https://www.nytimes.com' },
  
  // Wikipedia (structured content)
  { name: 'Wikipedia Quantum', category: 'reference', url: 'https://en.wikipedia.org/wiki/Quantum_computing' },
  { name: 'Wikipedia Climate', category: 'reference', url: 'https://en.wikipedia.org/wiki/Climate_change' },
  
  // Documentation
  { name: 'MDN JavaScript', category: 'docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Stack Overflow', category: 'docs', url: 'https://stackoverflow.com/questions/11227809/why-is-processing-a-sorted-array-faster-than-processing-an-unsorted-array' },
  
  // Forums
  { name: 'Hacker News', category: 'forum', url: 'https://news.ycombinator.com' },
  { name: 'Reddit Programming', category: 'forum', url: 'https://www.reddit.com/r/programming/' },
  
  // E-commerce (product pages)
  { name: 'Amazon Search', category: 'ecommerce', url: 'https://www.amazon.com/s?k=wireless+headphones' },
  
  // Tech blogs
  { name: 'TechCrunch', category: 'tech', url: 'https://techcrunch.com' },
  { name: 'The Verge', category: 'tech', url: 'https://www.theverge.com' },
  
  // Government/Reference
  { name: 'NASA', category: 'government', url: 'https://www.nasa.gov' },
  
  // Health
  { name: 'WebMD', category: 'health', url: 'https://www.webmd.com' },
  
  // Science
  { name: 'Wikipedia Science', category: 'science', url: 'https://en.wikipedia.org/wiki/Science' },
  
  // Edge cases
  { name: 'Google Search', category: 'edge', url: 'https://www.google.com/search?q=quantum+computing' },
  { name: 'Wikipedia Main', category: 'edge', url: 'https://en.wikipedia.org/wiki/Main_Page' },
];

describe('Full Reader Flow Integration', () => {
  const results: FlowTestResult[] = [];

  it('should run all sites through extract → render pipeline', async () => {
    console.log('\n🚀 Testing full reader flow on real pages...\n');

    // Fetch pages in batches
    const BATCH_SIZE = 4;
    for (let i = 0; i < FLOW_TEST_SITES.length; i += BATCH_SIZE) {
      const batch = FLOW_TEST_SITES.slice(i, i + BATCH_SIZE);
      
      const batchResults = await Promise.all(batch.map(async (site) => {
        const { html, title, error } = await fetchPage(site.url);
        
        if (error || !html) {
          return {
            url: site.url,
            category: site.category,
            success: false,
            extracted: false,
            rendered: false,
            title: title || error || 'Failed',
            contentLength: 0,
            outputLength: 0,
            errors: [error || 'No HTML'],
            quality: { hasTitle: false, hasContent: false, contentPreserved: false, noScripts: false, linksSafe: false },
          } as FlowTestResult;
        }

        return testReaderFlow(html, site.url, site.category);
      }));

      results.push(...batchResults);
      console.log(`  Progress: ${Math.min(i + BATCH_SIZE, FLOW_TEST_SITES.length)}/${FLOW_TEST_SITES.length}`);
    }

    // Report results
    console.log('\n📊 READER FLOW RESULTS\n');
    console.log('═'.repeat(100));
    console.log(' SITE                      CATEGORY      EXTRACT  RENDER  QUALITY SCORE  TITLE LEN  OUTPUT LEN');
    console.log('─'.repeat(100));

    const passed = results.filter(r => r.success && r.quality.hasTitle && r.quality.hasContent);
    const failed = results.filter(r => !r.success || !r.quality.hasTitle || !r.quality.hasContent);

    for (const r of results) {
      const qualityScore = Object.values(r.quality).filter(Boolean).length * 20;
      const status = r.success ? (qualityScore >= 80 ? '✓' : '△') : '✗';
      const titleLen = r.title.length.toString().padStart(8);
      const outputLen = r.outputLength.toString().padStart(10);
      
      console.log(
        `${status} ${r.url.replace('https://', '').slice(0, 26).padEnd(26)} ` +
        `${r.category.padEnd(12)} ${r.extracted ? 'YES' : 'NO'.padEnd(8)} ${r.rendered ? 'YES' : 'NO'.padEnd(8)} ` +
        `${qualityScore.toString().padEnd(6)} ${titleLen} ${outputLen}`
      );
    }

    console.log('═'.repeat(100));
    console.log(`\n✅ PASSED: ${passed.length}/${results.length} sites`);
    console.log(`❌ FAILED: ${failed.length}/${results.length} sites\n`);

    if (failed.length > 0) {
      console.log('Failed sites:');
      for (const f of failed) {
        console.log(`  - ${f.url}: ${f.errors.join(', ')}`);
      }
    }

    // Assert at least 80% pass rate
    const passRate = (passed.length / results.length) * 100;
    expect(passRate).toBeGreaterThanOrEqual(80);
  }, 120000);

  it('should show detailed quality metrics for passed sites', () => {
    console.log('\n📋 QUALITY BREAKDOWN\n');

    const passed = results.filter(r => r.success);
    
    if (passed.length === 0) {
      console.log('  No sites passed, skipping detailed breakdown');
      return;
    }

    const metrics = {
      hasTitle: passed.filter(r => r.quality.hasTitle).length,
      hasContent: passed.filter(r => r.quality.hasContent).length,
      contentPreserved: passed.filter(r => r.quality.contentPreserved).length,
      noScripts: passed.filter(r => r.quality.noScripts).length,
      linksSafe: passed.filter(r => r.quality.linksSafe).length,
    };

    console.log('  Metric              Passed  Total   Rate');
    console.log('  ─────────────────────────────────────────');
    console.log(`  Has Title           ${metrics.hasTitle.toString().padEnd(7)} ${passed.length}     ${((metrics.hasTitle / passed.length) * 100).toFixed(0)}%`);
    console.log(`  Has Content         ${metrics.hasContent.toString().padEnd(7)} ${passed.length}     ${((metrics.hasContent / passed.length) * 100).toFixed(0)}%`);
    console.log(`  Content Preserved   ${metrics.contentPreserved.toString().padEnd(7)} ${passed.length}     ${((metrics.contentPreserved / passed.length) * 100).toFixed(0)}%`);
    console.log(`  No Scripts          ${metrics.noScripts.toString().padEnd(7)} ${passed.length}     ${((metrics.noScripts / passed.length) * 100).toFixed(0)}%`);
    console.log(`  Links Safe          ${metrics.linksSafe.toString().padEnd(7)} ${passed.length}     ${((metrics.linksSafe / passed.length) * 100).toFixed(0)}%`);
    
    console.log('\n');

    // Each metric should be at least 80%
    expect(metrics.hasTitle / passed.length).toBeGreaterThanOrEqual(0.8);
    expect(metrics.hasContent / passed.length).toBeGreaterThanOrEqual(0.8);
    expect(metrics.noScripts / passed.length).toBeGreaterThanOrEqual(0.8);
    expect(metrics.linksSafe / passed.length).toBeGreaterThanOrEqual(0.8);
  });

  it('should show example rendered output for a passed site', () => {
    const passed = results.filter(r => r.success && r.quality.hasTitle && r.quality.hasContent);
    
    if (passed.length === 0) {
      console.log('\n  No sites passed to show example output');
      return;
    }

    // Pick a Wikipedia page as example (structured content)
    const example = passed.find(r => r.url.includes('wikipedia.org/wiki/Quantum')) || passed[0];
    
    console.log('\n📄 EXAMPLE RENDERED OUTPUT\n');
    console.log(`  URL: ${example.url}`);
    console.log(`  Title: ${example.title}`);
    console.log(`  Content length: ${example.contentLength}`);
    console.log(`  Output length: ${example.outputLength}`);
    console.log('\n  Quality checks:');
    console.log(`    ✓ Title extracted: ${example.quality.hasTitle}`);
    console.log(`    ✓ Content extracted: ${example.quality.hasContent} (${example.contentLength} chars)`);
    console.log(`    ✓ Scripts removed: ${example.quality.noScripts}`);
    console.log(`    ✓ Links safe: ${example.quality.linksSafe}`);
  });
});
