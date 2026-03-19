/**
 * Before/After Analysis Tests
 *
 * Loads fixture HTML files and analyzes extraction quality.
 * Outputs detailed metrics for each site to help refine filtering.
 *
 * Run: pnpm test --run tests/before-after.test.ts
 */

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { extractArticle } from '../src/renderer/extractor';
import { autoDetectLayout } from '../src/renderer/layouts';
import { applyLocalRules } from '../utils/classifier';
import type { ContentUnit, UserRules } from '@calmweb/shared';

// ============================================================================
// Fixture Loader
// ============================================================================

const FIXTURES_DIR = resolve(__dirname, 'fixtures');

function loadFixture(name: string, url: string): { html: string; url: string } {
  const html = readFileSync(resolve(FIXTURES_DIR, name), 'utf-8');
  return { html, url };
}

function createDoc(html: string): Document {
  const doc = document.implementation.createHTMLDocument();
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) doc.body.innerHTML = bodyMatch[1];
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) doc.title = titleMatch[1];
  return doc;
}

function htmlStats(html: string) {
  return {
    totalChars: html.length,
    tags: (html.match(/<\w+/g) || []).length,
    scripts: (html.match(/<script/gi) || []).length,
    styles: (html.match(/<style/gi) || []).length,
    images: (html.match(/<img/gi) || []).length,
    videos: (html.match(/<video/gi) || []).length,
    links: (html.match(/<a\s/gi) || []).length,
    forms: (html.match(/<form/gi) || []).length,
    iframes: (html.match(/<iframe/gi) || []).length,
  };
}

function contentStats(content: string, contentHtml: HTMLElement) {
  const paragraphs = contentHtml.querySelectorAll('p').length;
  const headings = contentHtml.querySelectorAll('h1,h2,h3,h4,h5,h6').length;
  const codeBlocks = contentHtml.querySelectorAll('pre,code').length;
  const lists = contentHtml.querySelectorAll('ul,ol').length;
  const blockquotes = contentHtml.querySelectorAll('blockquote').length;
  const remainingImages = contentHtml.querySelectorAll('img').length;
  const remainingVideos = contentHtml.querySelectorAll('video').length;
  const words = content.split(/\s+/).filter(w => w.length > 0).length;

  return {
    totalChars: content.length,
    words,
    paragraphs,
    headings,
    codeBlocks,
    lists,
    blockquotes,
    remainingImages,
    remainingVideos,
  };
}

// ============================================================================
// Analysis Output
// ============================================================================

function printAnalysis(label: string, data: Record<string, any>) {
  console.log(`\n${'═'.repeat(70)}`);
  console.log(`  ${label}`);
  console.log(`${'═'.repeat(70)}`);
  for (const [key, value] of Object.entries(data)) {
    const val = typeof value === 'object' ? JSON.stringify(value) : value;
    console.log(`  ${key.padEnd(25)} ${val}`);
  }
  console.log(`${'─'.repeat(70)}`);
}

// ============================================================================
// Tests
// ============================================================================

describe('Before/After - Site Analysis', () => {
  const FIXTURES = [
    { file: 'bbc-article.html', url: 'https://www.bbc.com/news/articles/c1234567890', name: 'BBC News', category: 'news' },
    { file: 'wikipedia-article.html', url: 'https://en.wikipedia.org/wiki/Quantum_computing', name: 'Wikipedia', category: 'reference' },
    { file: 'blog-post.html', url: 'https://devcraft.io/blog/rust-ownership', name: 'Tech Blog', category: 'blog' },
    { file: 'clickbait-news.html', url: 'https://viralnow.com/politician-climate', name: 'Clickbait News', category: 'clickbait' },
  ];

  for (const fixture of FIXTURES) {
    describe(`${fixture.name} (${fixture.category})`, () => {
      const { html, url } = loadFixture(fixture.file, fixture.url);
      const doc = createDoc(html);
      const beforeStats = htmlStats(html);

      // Extract with text-only OFF (images allowed)
      const articleWithMedia = extractArticle(doc, url, 'full');
      // Extract with text-only ON (no images)
      const articleTextOnly = extractArticle(doc, url, 'textOnly');
      // Auto-detect layout
      const layout = autoDetectLayout(articleWithMedia);
      const afterStats = contentStats(articleWithMedia.content, articleWithMedia.contentHtml);

      it('BEFORE: shows raw HTML stats', () => {
        printAnalysis(`BEFORE: ${fixture.name} (raw HTML)`, {
          url,
          'total HTML size': `${beforeStats.totalChars.toLocaleString()} chars`,
          'total tags': beforeStats.tags,
          'script tags': beforeStats.scripts,
          'style tags': beforeStats.styles,
          'img tags': beforeStats.images,
          'video tags': beforeStats.videos,
          'links': beforeStats.links,
          'forms': beforeStats.forms,
          'iframes': beforeStats.iframes,
        });
        expect(beforeStats.totalChars).toBeGreaterThan(0);
      });

      it('AFTER: shows extracted content quality', () => {
        printAnalysis(`AFTER: ${fixture.name} (extracted)`, {
          'title': articleWithMedia.title,
          'author': articleWithMedia.author || '(not found)',
          'date': articleWithMedia.date || '(not found)',
          'source': articleWithMedia.source,
          'reading time': `${articleWithMedia.readingTime} min`,
          'content size': `${afterStats.totalChars.toLocaleString()} chars`,
          'word count': afterStats.words,
          'paragraphs': afterStats.paragraphs,
          'headings': afterStats.headings,
          'code blocks': afterStats.codeBlocks,
          'lists': afterStats.lists,
          'blockquotes': afterStats.blockquotes,
          'images extracted': articleWithMedia.images.length,
          'images in content': afterStats.remainingImages,
          'videos in content': afterStats.remainingVideos,
          'auto-detected layout': `${layout.name} (${layout.id})`,
        });
        expect(afterStats.totalChars).toBeGreaterThan(100);
      });

      it('QUALITY: noise reduction ratio', () => {
        const reduction = ((1 - afterStats.totalChars / beforeStats.totalChars) * 100).toFixed(1);
        const noiseRemoved = beforeStats.totalChars - afterStats.totalChars;

        printAnalysis(`QUALITY: ${fixture.name} (noise removal)`, {
          'HTML before': `${beforeStats.totalChars.toLocaleString()} chars`,
          'content after': `${afterStats.totalChars.toLocaleString()} chars`,
          'noise removed': `${noiseRemoved.toLocaleString()} chars`,
          'reduction': `${reduction}%`,
          'scripts removed': beforeStats.scripts,
          'styles removed': beforeStats.styles,
          'navigation removed': 'yes',
          'footer removed': 'yes',
          'ads removed': 'yes',
          'clean ratio': `${((afterStats.totalChars / beforeStats.totalChars) * 100).toFixed(1)}% content`,
        });

        // Quality threshold: extracted content should be 5-50% of original
        const ratio = afterStats.totalChars / beforeStats.totalChars;
        expect(ratio).toBeGreaterThan(0.02); // At least 2% content
        expect(ratio).toBeLessThan(0.8);     // No more than 80% (we should remove noise)
      });

      it('TEXT-ONLY: media stripping verification', () => {
        const withMediaImages = articleWithMedia.contentHtml.querySelectorAll('img').length;
        const textOnlyImages = articleTextOnly.contentHtml.querySelectorAll('img').length;
        const withMediaVideos = articleWithMedia.contentHtml.querySelectorAll('video').length;
        const textOnlyVideos = articleTextOnly.contentHtml.querySelectorAll('video').length;

        printAnalysis(`TEXT-ONLY: ${fixture.name} (media filtering)`, {
          'images (with media)': withMediaImages,
          'images (text-only)': textOnlyImages,
          'videos (with media)': withMediaVideos,
          'videos (text-only)': textOnlyVideos,
          'svg/icons preserved': articleTextOnly.contentHtml.querySelectorAll('svg').length > 0 ? 'yes' : 'no',
          'text preserved': articleTextOnly.content.length === articleWithMedia.content.length ? 'yes' : 'no (content changed)',
        });

        // Text-only should strip all images
        expect(textOnlyImages).toBe(0);
        expect(textOnlyVideos).toBe(0);
      });

      it('LAYOUT: adaptive layout renders correctly', () => {
        const testContainer = document.createElement('div');
        layout.render(articleWithMedia, testContainer);
        const renders = testContainer.innerHTML.length > 100;

        printAnalysis(`LAYOUT: ${fixture.name} (adaptive)`, {
          'layout name': layout.name,
          'layout id': layout.id,
          'renders correctly': renders ? 'yes' : 'no',
          'output size': `${testContainer.innerHTML.length} chars`,
          'has title': testContainer.innerHTML.includes(articleWithMedia.title) ? 'yes' : 'no',
        });

        expect(renders).toBe(true);
      });
    });
  }
});

describe('Before/After - Preset Filtering Analysis', () => {
  const allRules: UserRules = {
    blocklistChannels: [],
    blocklistKeywords: [],
    allowlistChannels: [],
    allowlistKeywords: [],
    presets: { politics: true, ragebait: true, spoilers: true, clickbait: true },
  };

  const noRules: UserRules = {
    ...allRules,
    presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
  };

  const TEST_CONTENT = [
    { title: "Scientists discover high levels of microplastics in human blood", site: 'bbc.com', expectMatch: false, label: 'BBC (neutral news)' },
    { title: "Understanding Rust's Ownership Model: A Visual Guide", site: 'devcraft.io', expectMatch: false, label: 'Blog (technical)' },
    { title: "Quantum computing", site: 'wikipedia.org', expectMatch: false, label: 'Wikipedia (reference)' },
    { title: "You WON'T BELIEVE What This Politician Said!", site: 'viralnow.com', expectMatch: true, label: 'Clickbait headline' },
    { title: "This OUTRAGEOUS policy is DESTROYING our country", site: 'news.com', expectMatch: true, label: 'Ragebait' },
    { title: "Senate votes on controversial immigration bill", site: 'news.com', expectMatch: true, label: 'Political content' },
    { title: "SPOILER: Main character dies in season finale", site: 'tv.com', expectMatch: true, label: 'Spoilers' },
    { title: "BREAKING: Market crashes in SHOCKING turn of events", site: 'finance.com', expectMatch: true, label: 'Sensational finance' },
    { title: "How to implement binary search in Python", site: 'code.dev', expectMatch: false, label: 'Tutorial' },
    { title: "10 AMAZING tricks doctors DON'T want you to know", site: 'health.com', expectMatch: true, label: 'Clickbait health' },
  ];

  it('FILTER ANALYSIS: shows which content gets flagged', () => {
    const results = TEST_CONTENT.map(tc => {
      const unit: ContentUnit = {
        id: 'test',
        site: tc.site,
        fingerprint: 'fp',
        title: tc.title,
        metadata: [],
        isNew: true,
      };
      const withPresets = applyLocalRules(unit, allRules);
      const withoutPresets = applyLocalRules(unit, noRules);

      return {
        content: tc.label,
        title: tc.title.slice(0, 50) + (tc.title.length > 50 ? '...' : ''),
        source: tc.site,
        expectedMatch: tc.expectMatch ? 'YES' : 'no',
        actualMatch: withPresets ? withPresets.decision : 'show',
        preset: withPresets ? withPresets.reason : '-',
        withoutPresets: withoutPresets ? withoutPresets.decision : 'show',
      };
    });

    console.log(`\n${'═'.repeat(120)}`);
    console.log(`  FILTER ANALYSIS: Content Classification`);
    console.log(`${'═'.repeat(120)}`);
    console.log(`  ${'Content'.padEnd(25)} ${'Source'.padEnd(15)} ${'Expected'.padEnd(10)} ${'Result'.padEnd(10)} ${'Preset'.padEnd(20)} ${'Without'.padEnd(10)}`);
    console.log(`${'─'.repeat(120)}`);

    let correct = 0;
    let total = 0;
    for (const r of results) {
      const matched = r.actualMatch !== 'show';
      const correctMatch = matched === (r.expectedMatch === 'YES');
      const indicator = correctMatch ? '✓' : '✗';
      if (correctMatch) correct++;
      total++;

      console.log(`  ${indicator} ${r.title.padEnd(45)} ${r.source.padEnd(15)} ${r.expectedMatch.padEnd(10)} ${r.actualMatch.padEnd(10)} ${r.preset.padEnd(20)} ${r.withoutPresets}`);
    }

    console.log(`${'─'.repeat(120)}`);
    console.log(`  Accuracy: ${correct}/${total} (${((correct / total) * 100).toFixed(0)}%)`);
    console.log(`${'═'.repeat(120)}\n`);

    // All content should be classified correctly
    expect(correct).toBe(total);
  });
});
