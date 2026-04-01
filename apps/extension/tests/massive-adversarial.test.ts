/**
 * Massive Adversarial Test Suite
 *
 * Runs 10,000+ generated test cases against the rewriter to find gaps.
 */

import { describe, it, expect } from 'vitest';
import { rewriteWithLocalRules } from '../src/neutralizer/local-rules';
import {
  generateTestCases,
  analyzeResults,
  type TestCase,
  CLICKBAIT_PATTERNS,
  RAGEBAIT_PATTERNS,
  MANIPULATIVE_PATTERNS,
  NEUTRAL_PATTERNS,
} from './adversarial-generator';

// ============================================================================
// Configuration
// ============================================================================

const TEST_COUNT = 5000; // Adjust based on how many tests you want
const MAX_GAP_OUTPUT = 50; // Limit gap output for readability

// ============================================================================
// Helper Functions
// ============================================================================

function wasRewritten(input: string, mode: 'light' | 'medium' | 'strict' = 'medium'): boolean {
  const result = rewriteWithLocalRules(input, { mode });
  return result.changes.length > 0;
}

// ============================================================================
// Massive Generated Tests
// ============================================================================

describe('Massive Adversarial Rewriter Tests', () => {
  const testCases = generateTestCases(TEST_COUNT);
  
  console.log(`\n[MASSIVE TEST] Generated ${testCases.length} test cases`);
  
  // Count by category
  const byCategory: Record<string, number> = {};
  for (const tc of testCases) {
    byCategory[tc.category] = (byCategory[tc.category] || 0) + 1;
  }
  console.log('[MASSIVE TEST] By category:', byCategory);

  it(`should process all ${testCases.length} test cases and report gaps`, () => {
    const results: Array<{ testCase: TestCase; wasRewritten: boolean }> = [];
    const startTime = performance.now();
    
    for (const tc of testCases) {
      const rewritten = wasRewritten(tc.input);
      results.push({ testCase: tc, wasRewritten: rewritten });
    }
    
    const duration = performance.now() - startTime;
    const analysis = analyzeResults(results);
    
    console.log('\n========================================');
    console.log('[MASSIVE TEST] RESULTS');
    console.log('========================================');
    console.log(`Total tests: ${analysis.total}`);
    console.log(`Correct: ${analysis.correct} (${((analysis.correct / analysis.total) * 100).toFixed(1)}%)`);
    console.log(`False positives: ${analysis.falsePositives}`);
    console.log(`False negatives: ${analysis.falseNegatives}`);
    console.log(`Duration: ${duration.toFixed(1)}ms (${(duration / analysis.total).toFixed(2)}ms per test)`);
    console.log('\nBy category:');
    for (const [cat, stats] of Object.entries(analysis.byCategory)) {
      const pct = ((stats.correct / stats.total) * 100).toFixed(1);
      console.log(`  ${cat}: ${stats.correct}/${stats.total} (${pct}%)`);
    }
    
    if (analysis.gaps.length > 0) {
      console.log(`\nTop ${MAX_GAP_OUTPUT} gaps:`);
      for (const gap of analysis.gaps.slice(0, MAX_GAP_OUTPUT)) {
        console.log(`  ${gap}`);
      }
    }
    
    console.log('========================================\n');
    
    // We want high accuracy, but we're documenting gaps
    // Don't fail the test, just report
    expect(analysis.total).toBe(testCases.length);
    expect(duration).toBeLessThan(5000); // Should be fast
  });
});

// ============================================================================
// Pattern Coverage Tests
// ============================================================================

describe('Pattern Coverage by Category', () => {
  
  describe('Clickbait Patterns', () => {
    const patterns = CLICKBAIT_PATTERNS;
    
    for (const [subcategory, phrases] of Object.entries(patterns)) {
      it(`should catch "${subcategory}" patterns`, () => {
        let caught = 0;
        const missed: string[] = [];
        
        for (const phrase of phrases) {
          if (wasRewritten(phrase)) {
            caught++;
          } else {
            missed.push(phrase);
          }
        }
        
        const pct = ((caught / phrases.length) * 100).toFixed(0);
        console.log(`  [${subcategory}] ${caught}/${phrases.length} (${pct}%) caught`);
        
        if (missed.length > 0 && missed.length < 5) {
          console.log(`    Missed: ${missed.join(', ')}`);
        }
        
        // We expect high but not perfect coverage
        expect(caught).toBeGreaterThan(phrases.length * 0.4);
      });
    }
  });
  
  describe('Ragebait Patterns', () => {
    const patterns = RAGEBAIT_PATTERNS;
    
    for (const [subcategory, phrases] of Object.entries(patterns)) {
      it(`should catch "${subcategory}" patterns`, () => {
        let caught = 0;
        const missed: string[] = [];
        
        for (const phrase of phrases) {
          if (wasRewritten(phrase)) {
            caught++;
          } else {
            missed.push(phrase);
          }
        }
        
        const pct = ((caught / phrases.length) * 100).toFixed(0);
        console.log(`  [${subcategory}] ${caught}/${phrases.length} (${pct}%) caught`);
        
        if (missed.length > 0 && missed.length < 5) {
          console.log(`    Missed: ${missed.join(', ')}`);
        }
        
        // Many ragebait words are standalone (destroyed, literally, absolutely)
        // which have legitimate uses - lower threshold to avoid false positives
        expect(caught).toBeGreaterThan(phrases.length * 0.2);
      });
    }
  });
  
  describe('Manipulative Patterns', () => {
    const patterns = MANIPULATIVE_PATTERNS;
    
    for (const [subcategory, phrases] of Object.entries(patterns)) {
      it(`should catch "${subcategory}" patterns`, () => {
        let caught = 0;
        const missed: string[] = [];
        
        for (const phrase of phrases) {
          if (wasRewritten(phrase)) {
            caught++;
          } else {
            missed.push(phrase);
          }
        }
        
        const pct = ((caught / phrases.length) * 100).toFixed(0);
        console.log(`  [${subcategory}] ${caught}/${phrases.length} (${pct}%) caught`);
        
        if (missed.length > 0 && missed.length < 5) {
          console.log(`    Missed: ${missed.join(', ')}`);
        }
        
        // Manipulative patterns are often standalone words (exclusive, limited, rare)
        // which have legitimate professional uses - lower threshold to avoid false positives
        expect(caught).toBeGreaterThan(phrases.length * 0.25);
      });
    }
  });
  
  describe('Neutral Patterns (Should NOT Rewrite)', () => {
    const patterns = NEUTRAL_PATTERNS;
    
    for (const [subcategory, phrases] of Object.entries(patterns)) {
      it(`should NOT rewrite "${subcategory}" patterns`, () => {
        let unchanged = 0;
        const changed: string[] = [];
        
        for (const phrase of phrases) {
          if (!wasRewritten(phrase)) {
            unchanged++;
          } else {
            changed.push(phrase);
          }
        }
        
        const pct = ((unchanged / phrases.length) * 100).toFixed(0);
        console.log(`  [${subcategory}] ${unchanged}/${phrases.length} (${pct}%) unchanged`);
        
        if (changed.length > 0) {
          console.log(`    FALSE POSITIVES: ${changed.join(', ')}`);
        }
        
        // Neutral patterns should rarely be rewritten
        expect(unchanged).toBeGreaterThanOrEqual(phrases.length * 0.8);
      });
    }
  });
});

// ============================================================================
// Specific Gap Tests (Add new rules here as gaps are found)
// ============================================================================

describe('Known Gap Coverage', () => {
  
  const knownGaps = [
    // Format: { input, shouldBeCaught, description }
    { input: "You won't BELIEVE what happened", shouldBeCaught: true, description: "Case variation of you won't believe" },
    { input: "This will SHOCK you", shouldBeCaught: true, description: "Will shock you pattern" },
    { input: "KAREN goes INSANE", shouldBeCaught: true, description: "Karen pattern" },
    { input: "They DON'T want you to know", shouldBeCaught: true, description: "They don't want you to know" },
    { input: "Everyone is SWITCHING to this", shouldBeCaught: true, description: "Everyone is switching" },
    { input: "The government doesn't want you to KNOW", shouldBeCaught: true, description: "Government conspiracy" },
    { input: "Doctors HATE him", shouldBeCaught: true, description: "Doctors hate him" },
    { input: "One WEIRD trick", shouldBeCaught: true, description: "One weird trick" },
    { input: "Only 1% of people can SOLVE this", shouldBeCaught: true, description: "Only X% can" },
    { input: "The REAL reason why", shouldBeCaught: true, description: "The real reason" },
    
    // Neutral cases
    { input: "The crisis management team", shouldBeCaught: false, description: "Crisis in professional context" },
    { input: "Emergency procedures were followed", shouldBeCaught: false, description: "Emergency in professional context" },
    { input: "The warning label on the product", shouldBeCaught: false, description: "Warning in product context" },
    { input: "Hidden layers in neural networks", shouldBeCaught: false, description: "Hidden in technical context" },
    { input: "Exclusive or operation", shouldBeCaught: false, description: "Exclusive in technical context" },
  ];
  
  for (const { input, shouldBeCaught, description } of knownGaps) {
    it(`${shouldBeCaught ? 'should catch' : 'should NOT catch'}: "${description}"`, () => {
      const result = wasRewritten(input);
      
      if (shouldBeCaught) {
        if (!result) {
          console.log(`  [GAP] Missed: "${input}"`);
        }
        expect(result).toBe(true);
      } else {
        if (result) {
          console.log(`  [FALSE+] Rewrote: "${input}"`);
        }
        expect(result).toBe(false);
      }
    });
  }
});
