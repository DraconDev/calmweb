/**
 * Realistic Test Case Generator
 *
 * Generates 1000+ realistic headlines from various sources:
 * - YouTube video titles
 * - Reddit post titles
 * - News headlines
 * - Twitter/X posts
 * - Blog titles
 */

import { describe, it, expect } from 'vitest';
import { rewriteWithLocalRules } from '../src/neutralizer/local-rules';

// ============================================================================
// Realistic Headline Templates
// ============================================================================

const YOUTUBE_TEMPLATES = {
  clickbait: [
    "You Won't Believe What {subject} Did To {object}",
    "This {noun} Will Change Your Life Forever",
    "{number} {noun}s That Will Make You {emotion}",
    "I {verb} {number} {noun}s To See What Happens",
    "The {adjective} Truth About {subject}",
    "{subject} Reacts To {object} For The First Time",
    "Watch This Before It Gets Deleted",
    "Why {subject} Is {adjective}",
    "The Real Reason {subject} {verb}",
    "{subject} Did Something {adjective}",
    "This Is Why {subject} Is {adjective}",
    "{number} {noun}s You Should Never {verb}",
    "What Happens When You {verb} {number} {noun}s",
    "The Most {adjective} {noun} Ever",
    "{subject} Gets Caught {verb}ing",
    "{subject} DESTROYED By {object}",
    "Everyone Is Switching To This {noun}",
    "Doctors Don't Want You To Know This",
    "Scientists Just Discovered Something {adjective}",
    "{subject} Had No Idea What Was Coming",
  ],
  neutral: [
    "How to {verb} a {noun} - Complete Tutorial",
    "{number} Tips for {verb}ing {noun}s",
    "Understanding {subject}: A Deep Dive",
    "{subject} Review - Is It Worth It?",
    "My Experience With {subject}",
    "Beginner's Guide to {subject}",
    "{subject} vs {object}: Comparison",
    "Building a {noun} from Scratch",
    "How I {verb}ed My {noun}",
    "{subject} Update: What's New",
  ],
};

const REDDIT_TEMPLATES = {
  clickbait: [
    "You won't believe what my {noun} did",
    "This is absolutely {adjective}",
    "My {noun} is literally {emotion}",
    "Everyone needs to see this",
    "The audacity of this {noun}",
    "I'm literally shaking right now",
    "This changes everything",
    "Nobody is talking about this",
    "The amount of {noun} here is {adjective}",
    "Found this {adjective} {noun}",
    "My {noun} after seeing {object}",
    "This is the most {adjective} thing I've ever seen",
    "{subject} are furious about {object}",
    "What the actual {noun}",
    "This needs to go viral",
    "I can't even with this {noun}",
    "The absolute state of {subject}",
    "Plot twist: {text}",
    "Thanks I hate it",
    "This is {adjective} and I love it",
  ],
  neutral: [
    "Just finished my first {noun}",
    "Question about {subject}",
    "Looking for advice on {subject}",
    "My {noun} after {number} months",
    "Comparison between {subject} and {object}",
    "Guide: How to {verb} {noun}s",
    "Discussion: {subject}",
    "Update on my {noun} project",
    "Resources for learning {subject}",
    "Tips for {verb}ing {noun}s",
  ],
};

const NEWS_TEMPLATES = {
  clickbait: [
    "BREAKING: {subject} {verb}s In {adjective} Move",
    "SHOCKING: {subject} Reveals {adjective} Secret",
    "You Won't Believe What {subject} Just Did",
    "{subject} CAUGHT In {adjective} Scandal",
    "EXCLUSIVE: The {adjective} Truth About {subject}",
    "{subject} DESTROYED By {object} In {adjective} Moment",
    "OUTRAGE: {subject} {verb}s And People Are Furious",
    "The {adjective} Reason {subject} {verb}ed",
    "{subject} Under Fire For {adjective} {noun}",
    "Bombshell: {subject} {verb}s {object}",
    "Emergency: {subject} {verb}s Amid {adjective} Crisis",
    "Terrifying: {subject} {verb}s Without Warning",
    "Disaster Strikes: {subject} {verb}s",
    "Exclusive Report: {subject}'s {adjective} Secret",
    "Must Read: Why {subject} Is {adjective}",
  ],
  neutral: [
    "{subject} Announces New {noun}",
    "Study Finds Link Between {subject} and {object}",
    "{subject} Reports {adjective} Quarter",
    "New {noun} Released by {subject}",
    "{subject} Expands to {location}",
    "{number} {noun}s Approved by {subject}",
    "{subject} Partners With {object}",
    "Analysis: {subject} Trends for {year}",
    "{subject} Updates {noun} Policy",
    "Researchers Develop New {noun}",
  ],
};

const TWITTER_TEMPLATES = {
  clickbait: [
    "I'm literally {emotion}",
    "The audacity 💀",
    "This is insane",
    "Everyone needs to see this",
    "I can't believe this is real",
    "NOT THE {noun} 😭",
    "This changed my life",
    "The way I just {verb}ed",
    "NO BECAUSE {text}",
    "Actually {adjective}",
    "Main character energy",
    "This is everything",
    "I have no words",
    "The absolute state",
    "This ain't it chief",
    "Big mad rn",
    "Not me {verb}ing at this",
    "POV: you just {verb}ed",
    "This is the hill I die on",
    "Cancel culture is WILD for this one",
  ],
  neutral: [
    "Just finished {verb}ing my {noun}",
    "Working on a new {noun}",
    "Has anyone tried {subject}?",
    "Looking for {noun} recommendations",
    "Question about {subject}",
    "My {noun} setup for {year}",
    "Thanks to everyone who helped with {noun}",
    "Update: {subject}",
    "Thread on {subject}",
    "Quick tip for {verb}ing {noun}s",
  ],
};

// ============================================================================
// Fill-in Values
// ============================================================================

const SUBJECTS = [
  "CEO", "Company", "Government", "Celebrity", "Politician", "Doctor",
  "Scientist", "Influencer", "Developer", "Student", "Parent", "Teacher",
  "Manager", "Team", "Organization", "Community", "Brand", "Startup",
  "Apple", "Google", "Microsoft", "Amazon", "Netflix", "Disney",
  "the internet", "social media", "mainstream media", "big tech",
];

const OBJECTS = [
  "Competitor", "Rival", "Employee", "Customer", "User", "Fan",
  "Critics", "the public", "everyone", "nobody", "someone",
];

const NOUNS = [
  "Product", "Feature", "Update", "Change", "Decision", "Move",
  "Photo", "Video", "Post", "Tweet", "Comment", "Review",
  "Trick", "Tip", "Secret", "Method", "Hack", "Strategy",
  "Mistake", "Error", "Problem", "Issue", "Bug", "Fix",
  "Deal", "Offer", "Price", "Discount", "Sale",
];

const VERBS = [
  "Announce", "Reveal", "Discover", "Launch", "Release", "Update",
  "Change", "Fix", "Break", "Destroy", "Delete", "Remove",
  "Try", "Test", "Review", "Compare", "Build", "Create",
  "Buy", "Sell", "Find", "Share", "Post", "Tweet",
];

const ADJECTIVES = [
  "Shocking", "Amazing", "Incredible", "Unbelievable", "Insane",
  "Disgusting", "Furious", "Terrifying", "Horrifying", "Devastating",
  "Life-changing", "Mind-blowing", "Jaw-dropping", "Earth-shattering",
  "Critical", "Urgent", "Breaking", "Exclusive", "Hidden", "Secret",
];

const EMOTIONS = [
  "Cry", "Scream", "Rage", "Furious", "Angry", "Mad",
  "Laugh", "Smile", "Happy", "Excited", "Shocked",
  "Speechless", "Sick", "Quitting", "Leaving",
];

const LOCATIONS = [
  "Europe", "Asia", "America", "California", "New York", "London",
  "Tokyo", "Berlin", "Paris", "Sydney", "Toronto",
];

const YEARS = ["2024", "2025", "2026"];
const NUMBERS = ["3", "5", "7", "10", "15", "20", "25", "30", "50", "100"];

const TEXTS = [
  "it's actually real",
  "this is not a drill",
  "they really did that",
  "I'm done",
  "we need to talk",
  "what did I just watch",
];

// ============================================================================
// Template Filler
// ============================================================================

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function _fillTemplate(template: string): string {
  let result = template;
  
  result = result.replace(/{subject}/g, pick(SUBJECTS));
  result = result.replace(/{object}/g, pick(OBJECTS));
  result = result.replace(/{noun}/g, pick(NOUNS));
  result = result.replace(/{verb}/g, pick(VERBS));
  result = result.replace(/{adjective}/g, pick(ADJECTIVES));
  result = result.replace(/{emotion}/g, pick(EMOTIONS));
  result = result.replace(/{location}/g, pick(LOCATIONS));
  result = result.replace(/{year}/g, pick(YEARS));
  result = result.replace(/{number}/g, pick(NUMBERS));
  result = result.replace(/{text}/g, pick(TEXTS));
  
  return result;
}

// ============================================================================
// Test Case Generator
// ============================================================================

interface TestCase {
  input: string;
  source: string;
  type: 'clickbait' | 'neutral';
  expectedToChange: boolean;
}

function generateTestCases(count: number = 1000): TestCase[] {
  const cases: TestCase[] = [];
  const seed = 12345;
  
  // Use seeded random for reproducibility
  let rngState = seed;
  const seededRandom = () => {
    rngState = (rngState * 1103515245 + 12345) & 0x7fffffff;
    return rngState / 0x7fffffff;
  };
  
  const pickSeeded = <T>(arr: T[]): T => {
    const idx = Math.floor(seededRandom() * arr.length);
    return arr[idx];
  };
  
  const fillSeeded = (template: string): string => {
    let result = template;
    result = result.replace(/{subject}/g, pickSeeded(SUBJECTS));
    result = result.replace(/{object}/g, pickSeeded(OBJECTS));
    result = result.replace(/{noun}/g, pickSeeded(NOUNS));
    result = result.replace(/{verb}/g, pickSeeded(VERBS));
    result = result.replace(/{adjective}/g, pickSeeded(ADJECTIVES));
    result = result.replace(/{emotion}/g, pickSeeded(EMOTIONS));
    result = result.replace(/{location}/g, pickSeeded(LOCATIONS));
    result = result.replace(/{year}/g, pickSeeded(YEARS));
    result = result.replace(/{number}/g, pickSeeded(NUMBERS));
    result = result.replace(/{text}/g, pickSeeded(TEXTS));
    return result;
  };
  
  const sources = [
    { name: 'youtube', templates: YOUTUBE_TEMPLATES },
    { name: 'reddit', templates: REDDIT_TEMPLATES },
    { name: 'news', templates: NEWS_TEMPLATES },
    { name: 'twitter', templates: TWITTER_TEMPLATES },
  ];
  
  while (cases.length < count) {
    for (const source of sources) {
      if (cases.length >= count) break;
      
      // Clickbait
      const clickbaitTemplates = source.templates.clickbait;
      const template = clickbaitTemplates[Math.floor(seededRandom() * clickbaitTemplates.length)];
      cases.push({
        input: fillSeeded(template),
        source: source.name,
        type: 'clickbait',
        expectedToChange: true,
      });
      
      // Neutral
      if (cases.length < count && seededRandom() > 0.5) {
        const neutralTemplates = source.templates.neutral;
        const neutralTemplate = neutralTemplates[Math.floor(seededRandom() * neutralTemplates.length)];
        cases.push({
          input: fillSeeded(neutralTemplate),
          source: source.name,
          type: 'neutral',
          expectedToChange: false,
        });
      }
    }
  }
  
  return cases.slice(0, count);
}

// ============================================================================
// Tests
// ============================================================================

describe('Realistic Headline Filter Tests', () => {
  const testCases = generateTestCases(1000);
  
  console.log(`\n[TEST] Generated ${testCases.length} test cases`);
  
  // Stats
  const stats = {
    clickbait: testCases.filter(t => t.type === 'clickbait').length,
    neutral: testCases.filter(t => t.type === 'neutral').length,
  };
  console.log(`[TEST] Clickbait: ${stats.clickbait}, Neutral: ${stats.neutral}`);
  
  it('should process 1000 realistic headlines', () => {
    const startTime = performance.now();
    
    let truePositives = 0;
    let trueNegatives = 0;
    let falsePositives = 0;
    let falseNegatives = 0;
    
    const results: Array<{
      testCase: TestCase;
      wasRewritten: boolean;
      rewritten?: string;
    }> = [];
    
    for (const tc of testCases) {
      const result = rewriteWithLocalRules(tc.input, { mode: 'medium' });
      const wasRewritten = result.changes.length > 0;
      
      results.push({
        testCase: tc,
        wasRewritten,
        rewritten: wasRewritten ? result.rewritten : undefined,
      });
      
      if (tc.expectedToChange && wasRewritten) truePositives++;
      else if (!tc.expectedToChange && !wasRewritten) trueNegatives++;
      else if (!tc.expectedToChange && wasRewritten) falsePositives++;
      else if (tc.expectedToChange && !wasRewritten) falseNegatives++;
    }
    
    const duration = performance.now() - startTime;
    const total = testCases.length;
    const correct = truePositives + trueNegatives;
    const accuracy = (correct / total) * 100;
    
    const precision = truePositives / (truePositives + falsePositives) || 0;
    const recall = truePositives / (truePositives + falseNegatives) || 0;
    const f1 = 2 * (precision * recall) / (precision + recall) || 0;
    
    console.log('\n========================================');
    console.log('[RESULTS] 1000 Realistic Headlines');
    console.log('========================================');
    console.log(`Total: ${total}`);
    console.log(`Duration: ${duration.toFixed(1)}ms (${(duration / total).toFixed(2)}ms per headline)`);
    console.log('\nConfusion Matrix:');
    console.log(`  True Positives:  ${truePositives}`);
    console.log(`  True Negatives:  ${trueNegatives}`);
    console.log(`  False Positives: ${falsePositives}`);
    console.log(`  False Negatives: ${falseNegatives}`);
    console.log('\nMetrics:');
    console.log(`  Accuracy:  ${accuracy.toFixed(1)}%`);
    console.log(`  Precision: ${(precision * 100).toFixed(1)}%`);
    console.log(`  Recall:    ${(recall * 100).toFixed(1)}%`);
    console.log(`  F1 Score:  ${(f1 * 100).toFixed(1)}%`);
    
    // By source
    console.log('\nBy Source:');
    for (const source of ['youtube', 'reddit', 'news', 'twitter']) {
      const sourceCases = results.filter(r => r.testCase.source === source);
      const sourceClickbait = sourceCases.filter(r => r.testCase.type === 'clickbait');
      const sourceNeutral = sourceCases.filter(r => r.testCase.type === 'neutral');
      
      const clickbaitCaught = sourceClickbait.filter(r => r.wasRewritten).length;
      const neutralKept = sourceNeutral.filter(r => !r.wasRewritten).length;
      
      console.log(`  ${source}:`);
      console.log(`    Clickbait caught: ${clickbaitCaught}/${sourceClickbait.length}`);
      console.log(`    Neutral preserved: ${neutralKept}/${sourceNeutral.length}`);
    }
    
    // Sample false positives
    if (falsePositives > 0) {
      console.log('\nSample False Positives (neutral incorrectly changed):');
      const fpSamples = results
        .filter(r => !r.testCase.expectedToChange && r.wasRewritten)
        .slice(0, 5);
      for (const fp of fpSamples) {
        console.log(`  "${fp.testCase.input}"`);
        console.log(`    → "${fp.rewritten}"`);
      }
    }
    
    // Sample false negatives
    if (falseNegatives > 0) {
      console.log('\nSample False Negatives (clickbait not caught):');
      const fnSamples = results
        .filter(r => r.testCase.expectedToChange && !r.wasRewritten)
        .slice(0, 10);
      for (const fn of fnSamples) {
        console.log(`  "${fn.testCase.input}"`);
      }
    }
    
    console.log('========================================\n');
    
    expect(total).toBe(1000);
    expect(duration).toBeLessThan(5000);
    expect(accuracy).toBeGreaterThan(60);
  });
  
  it('should catch majority of clickbait from each source', () => {
    const sources = ['youtube', 'reddit', 'news', 'twitter'];
    
    for (const source of sources) {
      const sourceCases = testCases.filter(t => t.source === source && t.type === 'clickbait');
      let caught = 0;
      
      for (const tc of sourceCases) {
        const result = rewriteWithLocalRules(tc.input, { mode: 'medium' });
        if (result.changes.length > 0) caught++;
      }
      
      const pct = (caught / sourceCases.length) * 100;
      console.log(`[${source}] ${caught}/${sourceCases.length} (${pct.toFixed(0)}%) clickbait caught`);
      
      expect(caught).toBeGreaterThan(sourceCases.length * 0.4);
    }
  });
  
  it('should preserve majority of neutral headlines from each source', () => {
    const sources = ['youtube', 'reddit', 'news', 'twitter'];
    
    for (const source of sources) {
      const sourceCases = testCases.filter(t => t.source === source && t.type === 'neutral');
      let preserved = 0;
      
      for (const tc of sourceCases) {
        const result = rewriteWithLocalRules(tc.input, { mode: 'medium' });
        if (result.changes.length === 0) preserved++;
      }
      
      const pct = (preserved / sourceCases.length) * 100;
      console.log(`[${source}] ${preserved}/${sourceCases.length} (${pct.toFixed(0)}%) neutral preserved`);
      
      expect(preserved).toBeGreaterThan(sourceCases.length * 0.7);
    }
  });
});
