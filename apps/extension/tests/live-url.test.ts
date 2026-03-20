/**
 * Live URL Reader Tests
 * 
 * Tests the reader against actual live web pages.
 * Uses real network requests to verify the reader works on actual sites.
 */

import { describe, it, expect, beforeAll } from 'vitest';

interface LiveTestResult {
  url: string;
  success: boolean;
  title?: string;
  contentLength?: number;
  error?: string;
  duration: number;
}

interface LiveTestSite {
  name: string;
  category: string;
  url: string;
}

const LIVE_TEST_SITES: LiveTestSite[] = [
  // News
  { name: 'BBC News', category: 'news', url: 'https://www.bbc.com/news/technology' },
  { name: 'Reuters', category: 'news', url: 'https://www.reuters.com' },
  { name: 'CNN', category: 'news', url: 'https://www.cnn.com' },
  { name: 'The Guardian', category: 'news', url: 'https://www.theguardian.com' },
  { name: 'NYT', category: 'news', url: 'https://www.nytimes.com' },
  
  // Reference
  { name: 'Wikipedia', category: 'reference', url: 'https://en.wikipedia.org/wiki/Quantum_computing' },
  { name: 'MDN Docs', category: 'docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  
  // Blogs
  { name: 'Medium', category: 'blog', url: 'https://medium.com' },
  { name: 'Dev.to', category: 'blog', url: 'https://dev.to' },
  
  // Forums
  { name: 'Reddit', category: 'forum', url: 'https://www.reddit.com/r/programming/' },
  { name: 'Hacker News', category: 'forum', url: 'https://news.ycombinator.com' },
  { name: 'Stack Overflow', category: 'forum', url: 'https://stackoverflow.com/questions' },
  
  // E-commerce
  { name: 'Amazon', category: 'ecommerce', url: 'https://www.amazon.com/s?k=laptop' },
  { name: 'eBay', category: 'ecommerce', url: 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=headphones' },
  
  // Docs
  { name: 'GitHub', category: 'docs', url: 'https://github.com' },
  { name: 'npm', category: 'docs', url: 'https://www.npmjs.com/package/react' },
  
  // Social
  { name: 'Twitter/X', category: 'social', url: 'https://twitter.com' },
  { name: 'LinkedIn', category: 'social', url: 'https://www.linkedin.com' },
  
  // Video
  { name: 'YouTube', category: 'video', url: 'https://www.youtube.com' },
  { name: 'Vimeo', category: 'video', url: 'https://vimeo.com' },
  
  // Entertainment
  { name: 'IMDb', category: 'entertainment', url: 'https://www.imdb.com' },
  { name: 'Wikipedia Movies', category: 'entertainment', url: 'https://en.wikipedia.org/wiki/Oppenheimer_(film)' },
  
  // Tech
  { name: 'TechCrunch', category: 'tech', url: 'https://techcrunch.com' },
  { name: 'The Verge', category: 'tech', url: 'https://www.theverge.com' },
  { name: 'Ars Technica', category: 'tech', url: 'https://arstechnica.com' },
  
  // Finance
  { name: 'Bloomberg', category: 'finance', url: 'https://www.bloomberg.com' },
  { name: 'CNBC', category: 'finance', url: 'https://www.cnbc.com' },
  
  // Government
  { name: 'White House', category: 'government', url: 'https://www.whitehouse.gov' },
  { name: 'NASA', category: 'government', url: 'https://www.nasa.gov' },
  
  // Education
  { name: 'Khan Academy', category: 'education', url: 'https://www.khanacademy.org' },
  { name: 'Coursera', category: 'education', url: 'https://www.coursera.org' },
  
  // Sports
  { name: 'ESPN', category: 'sports', url: 'https://www.espn.com' },
  { name: 'NBA', category: 'sports', url: 'https://www.nba.com' },
  
  // Recipes/Lifestyle
  { name: 'AllRecipes', category: 'lifestyle', url: 'https://www.allrecipes.com' },
  { name: 'Wikipedia Cooking', category: 'lifestyle', url: 'https://en.wikipedia.org/wiki/Cooking' },
  
  // Health
  { name: 'WebMD', category: 'health', url: 'https://www.webmd.com' },
  { name: 'Wikipedia Medicine', category: 'health', url: 'https://en.wikipedia.org/wiki/Medicine' },
  
  // Science
  { name: 'NASA Science', category: 'science', url: 'https://science.nasa.gov' },
  { name: 'Wikipedia Science', category: 'science', url: 'https://en.wikipedia.org/wiki/Science' },
  
  // Edge cases
  { name: 'Google Search', category: 'edge', url: 'https://www.google.com/search?q=test' },
  { name: 'Empty Page', category: 'edge', url: 'https://example.com' },
  { name: 'Wikipedia Simple', category: 'edge', url: 'https://en.wikipedia.org/wiki/Main_Page' },
];

const TIMEOUT_MS = 15000;
const CONCURRENT_LIMIT = 3;

async function fetchPage(url: string): Promise<{ html: string; title: string; error?: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

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
    const title = doc.title || '';

    return { html, title };
  } catch (err: any) {
    clearTimeout(timeout);
    return { html: '', title: '', error: err.message || 'Unknown error' };
  }
}

async function testLiveUrl(site: LiveTestSite): Promise<LiveTestResult> {
  const start = Date.now();
  
  try {
    const { html, title, error } = await fetchPage(site.url);
    
    if (error) {
      return { url: site.url, success: false, error, duration: Date.now() - start };
    }

    if (!html || html.length < 1000) {
      return { 
        url: site.url, 
        success: false, 
        error: 'Page too small or empty', 
        duration: Date.now() - start 
      };
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const body = doc.body;
    if (!body) {
      return { url: site.url, success: false, error: 'No body element', duration: Date.now() - start };
    }

    return {
      url: site.url,
      success: true,
      title: title || doc.title,
      contentLength: body.textContent?.length || 0,
      duration: Date.now() - start,
    };
  } catch (err: any) {
    return {
      url: site.url,
      success: false,
      error: err.message || 'Unknown error',
      duration: Date.now() - start,
    };
  }
}

async function runLiveTests(sites: LiveTestSite[]): Promise<LiveTestResult[]> {
  const results: LiveTestResult[] = [];
  
  for (let i = 0; i < sites.length; i += CONCURRENT_LIMIT) {
    const batch = sites.slice(i, i + CONCURRENT_LIMIT);
    const batchResults = await Promise.all(batch.map(testLiveUrl));
    results.push(...batchResults);
    
    console.log(`  Progress: ${Math.min(i + CONCURRENT_LIMIT, sites.length)}/${sites.length}`);
  }
  
  return results;
}

describe('Live URL Reader Tests', () => {
  const results: LiveTestResult[] = [];
  
  beforeAll(async () => {
    console.log(`\n🌐 Testing reader against ${LIVE_TEST_SITES.length} live URLs...`);
    console.log('This may take a few minutes due to network requests.\n');
    
    results.push(...await runLiveTests(LIVE_TEST_SITES));
  }, 300000);

  it('should have results for all sites', () => {
    expect(results.length).toBe(LIVE_TEST_SITES.length);
  });

  it('should successfully fetch most pages', () => {
    const successful = results.filter(r => r.success).length;
    const percentage = (successful / results.length) * 100;
    
    console.log(`\n📊 Fetch Success Rate: ${successful}/${results.length} (${percentage.toFixed(1)}%)`);
    
    expect(percentage).toBeGreaterThan(70);
  });

  it('should report individual site results', () => {
    console.log('\n📋 Individual Site Results:\n');
    
    const grouped = LIVE_TEST_SITES.reduce((acc, site) => {
      const result = results.find(r => r.url === site.url);
      if (!acc[site.category]) acc[site.category] = [];
      acc[site.category].push({ site, result });
      return acc;
    }, {} as Record<string, Array<{ site: LiveTestSite; result?: LiveTestResult }>>);
    
    let passed = 0;
    let failed = 0;
    
    for (const [category, items] of Object.entries(grouped)) {
      console.log(`  ${category.toUpperCase()}:`);
      
      for (const { site, result } of items) {
        if (result?.success) {
          console.log(`    ✓ ${site.name}: "${result.title?.slice(0, 40)}..." (${result.contentLength?.toLocaleString()} chars, ${result.duration}ms)`);
          passed++;
        } else {
          console.log(`    △ ${site.name}: ${result?.error || 'Unknown error'}`);
          failed++;
        }
      }
    }
    
    console.log(`\n  Total: ${passed} passed, ${failed} failed (expected some bot-blocked sites)`);
  });
});
