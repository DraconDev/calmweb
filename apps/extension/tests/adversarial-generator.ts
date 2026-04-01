/**
 * Adversarial Test Data Generator for CalmWeb
 *
 * Generates massive variations of clickbait, ragebait, and manipulative text
 * to stress-test the rewriter and identify gaps.
 */

// ============================================================================
// Base Patterns (What we want to catch)
// ============================================================================

export const CLICKBAIT_PATTERNS = {
  // "You won't believe" variations
  disbelief: [
    "you won't believe",
    "you wont believe",
    "you won't BELIEVE",
    "YOU WON'T BELIEVE",
    "u won't believe",
    "you wont belive", // typo
    "you will not believe",
    "hard to believe",
    "unbelievable",
  ],
  
  // Emotional hooks
  emotional: [
    "will make you cry",
    "will make you laugh",
    "will make you angry",
    "will make you furious",
    "will leave you speechless",
    "will blow your mind",
    "will shock you",
    "will leave you shaking",
    "will restore your faith",
    "will break your heart",
  ],
  
  // Urgency patterns
  urgency: [
    "before it's too late",
    "before they delete this",
    "watch before deleted",
    "must see",
    "must read",
    "you need to see",
    "you need to know",
    "don't miss",
    "act now",
    "limited time",
  ],
  
  // Curiosity gaps
  curiosity: [
    "what happens next",
    "the reason why",
    "here's why",
    "this is why",
    "the truth about",
    "what they don't tell you",
    "what nobody tells you",
    "the secret to",
    "one weird trick",
    "this simple trick",
  ],
  
  // Numbers + superlatives
  numbers: [
    "top 10",
    "top 5",
    "10 things",
    "7 secrets",
    "5 reasons",
    "3 signs",
    "number one",
    "only 1%",
    "only 2%",
    "99% of people",
  ],
  
  // Authority/institutional
  authority: [
    "doctors hate",
    "doctors don't want you to know",
    "scientists discovered",
    "experts reveal",
    "studies show",
    "research proves",
    "the government",
    "they don't want you to know",
    "what big pharma",
    "what the media",
  ],
  
  // Superlatives
  superlatives: [
    "shocking",
    "jaw-dropping",
    "mind-blowing",
    "earth-shattering",
    "game-changing",
    "life-changing",
    "heartbreaking",
    "devastating",
    "incredible",
    "unbelievable",
  ],
};

export const RAGEBAIT_PATTERNS = {
  // Anger inducement
  anger: [
    "will make you furious",
    "will make your blood boil",
    "will make you rage",
    "absolutely disgusting",
    "completely unacceptable",
    "this is unacceptable",
    "people are furious",
    "people are outraged",
    "backlash erupts",
    "outrage over",
  ],
  
  // Strong negative words
  negative: [
    "destroyed",
    "destroying",
    "demolished",
    "annihilated",
    "slammed",
    "blasted",
    "eviscerated",
    "obliterated",
    "decimated",
    "ruined",
  ],
  
  // Emotional amplifiers
  amplifiers: [
    "absolutely",
    "completely",
    "utterly",
    "totally",
    "literally",
    "genuinely",
    "actually",
    "honestly",
    "seriously",
    "truly",
  ],
  
  // Controversy signals
  controversy: [
    "exposed",
    "revealed",
    "scandal",
    "controversy",
    "cover-up",
    "coverup",
    "they tried to hide",
    "they don't want you to see",
    "the real story",
    "what really happened",
  ],
};

export const MANIPULATIVE_PATTERNS = {
  // Fear-based
  fear: [
    "warning",
    "danger",
    "dangerous",
    "terrifying",
    "horrifying",
    "nightmare",
    "crisis",
    "catastrophe",
    "disaster",
    "emergency",
  ],
  
  // Exclusivity
  exclusivity: [
    "only available",
    "exclusive",
    "limited",
    "rare",
    "secret",
    "classified",
    "leaked",
    "not public",
    "insiders only",
    "members only",
  ],
  
  // Bandwagon
  bandwagon: [
    "everyone is",
    "everyone knows",
    "everyone's talking about",
    "viral",
    "trending",
    "breaking",
    "just in",
    "everyone needs",
    "nobody is talking about",
    "the only",
  ],
  
  // Conspiracy
  conspiracy: [
    "they don't want you to know",
    "the government doesn't want",
    "what they're hiding",
    "the truth they hide",
    "mainstream media won't tell",
    "big pharma doesn't want",
    "the real reason",
    "hidden agenda",
    "what's really going on",
    "wake up",
  ],
};

export const NEUTRAL_PATTERNS = {
  // These should NOT be rewritten
  news: [
    "Scientists discover new species",
    "Company announces quarterly results",
    "Study finds correlation between",
    "Researchers develop new method",
    "City council approves budget",
    "Stock market shows growth",
    "Weather forecast predicts",
    "University opens new campus",
    "Team wins championship",
    "Author releases new book",
  ],
  
  // Technical/professional
  technical: [
    "implementation details",
    "historical analysis shows",
    "the hidden layers",
    "crisis management",
    "emergency procedures",
    "warning labels",
    "breaking changes",
    "exclusive or operation",
    "secret key",
    "limited resources",
  ],
};

// ============================================================================
// Variation Generators
// ============================================================================

/**
 * Generate case variations of a phrase
 */
export function caseVariations(phrase: string): string[] {
  return [
    phrase,
    phrase.toUpperCase(),
    phrase.toLowerCase(),
    phrase.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join(''),
    phrase.charAt(0).toUpperCase() + phrase.slice(1),
  ];
}

/**
 * Generate punctuation variations
 */
export function punctuationVariations(phrase: string): string[] {
  const base = phrase.trim();
  return [
    base,
    base + '!',
    base + '!!',
    base + '!!!',
    base + '.',
    base + '?',
    base.toUpperCase() + ':',
    base + '...',
  ];
}

/**
 * Generate common typos
 */
export function typoVariations(phrase: string): string[] {
  const typos: Record<string, string[]> = {
    'you': ['u', 'yo', 'yu'],
    "won't": ['wont', "won't", 'wont'],
    'believe': ['belive', 'beleive', 'beleve'],
    'shocking': ['shoking', 'shockng'],
    'their': ['there', 'thier'],
    'government': ['goverment', 'govt', 'gov'],
    'people': ['ppl', 'peple'],
    'because': ['cause', 'cuz', 'bc'],
    'really': ['realy', 'relly'],
    'everyone': ['every1', 'evryone'],
  };
  
  const results = [phrase];
  const lower = phrase.toLowerCase();
  
  for (const [word, variants] of Object.entries(typos)) {
    if (lower.includes(word)) {
      for (const variant of variants) {
        results.push(phrase.replace(new RegExp(word, 'gi'), variant));
      }
    }
  }
  
  return results;
}

/**
 * Generate all variations of a phrase
 */
export function allVariations(phrase: string): string[] {
  const results = new Set<string>();
  
  for (const cased of caseVariations(phrase)) {
    for (const punct of punctuationVariations(cased)) {
      results.add(punct);
      for (const typo of typoVariations(punct)) {
        results.add(typo);
      }
    }
  }
  
  return Array.from(results);
}

// ============================================================================
// Massive Test Case Generator
// ============================================================================

export interface TestCase {
  input: string;
  category: string;
  subcategory: string;
  shouldRewrite: boolean;
  expectedPatterns?: string[];
}

/**
 * Generate a massive array of test cases
 */
export function generateTestCases(count: number = 10000): TestCase[] {
  const cases: TestCase[] = [];
  
  // Generate clickbait test cases
  for (const [subcategory, patterns] of Object.entries(CLICKBAIT_PATTERNS)) {
    for (const pattern of patterns) {
      for (const variation of allVariations(pattern)) {
        if (cases.length >= count) break;
        
        // Create a full headline
        const headlines = [
          `${variation} what happened next`,
          `${variation} this is crazy`,
          `10 things - ${variation}`,
          `${variation} and you should too`,
          `Why ${variation} matters`,
        ];
        
        for (const headline of headlines) {
          if (cases.length >= count) break;
          cases.push({
            input: headline,
            category: 'clickbait',
            subcategory,
            shouldRewrite: true,
            expectedPatterns: [pattern.split(' ')[0]],
          });
        }
      }
    }
  }
  
  // Generate ragebait test cases
  for (const [subcategory, patterns] of Object.entries(RAGEBAIT_PATTERNS)) {
    for (const pattern of patterns) {
      for (const variation of allVariations(pattern)) {
        if (cases.length >= count) break;
        
        const headlines = [
          `${variation} - you won't believe this`,
          `This is ${variation}`,
          `People are ${variation}`,
          `${variation} over new policy`,
          `Watch: ${variation}`,
        ];
        
        for (const headline of headlines) {
          if (cases.length >= count) break;
          cases.push({
            input: headline,
            category: 'ragebait',
            subcategory,
            shouldRewrite: true,
            expectedPatterns: [pattern.split(' ')[0]],
          });
        }
      }
    }
  }
  
  // Generate manipulative test cases
  for (const [subcategory, patterns] of Object.entries(MANIPULATIVE_PATTERNS)) {
    for (const pattern of patterns) {
      for (const variation of allVariations(pattern)) {
        if (cases.length >= count) break;
        
        const headlines = [
          `${variation} - must read`,
          `The ${variation} secret`,
          `${variation} truth revealed`,
          `Why ${variation} is important`,
          `${variation} and what to do`,
        ];
        
        for (const headline of headlines) {
          if (cases.length >= count) break;
          cases.push({
            input: headline,
            category: 'manipulative',
            subcategory,
            shouldRewrite: true,
            expectedPatterns: [pattern.split(' ')[0]],
          });
        }
      }
    }
  }
  
  // Add neutral test cases (should NOT be rewritten)
  for (const [subcategory, patterns] of Object.entries(NEUTRAL_PATTERNS)) {
    for (const pattern of patterns) {
      if (cases.length >= count) break;
      
      cases.push({
        input: pattern,
        category: 'neutral',
        subcategory,
        shouldRewrite: false,
      });
      
      // Add variations
      for (const variation of caseVariations(pattern)) {
        if (cases.length >= count) break;
        cases.push({
          input: variation,
          category: 'neutral',
          subcategory,
          shouldRewrite: false,
        });
      }
    }
  }
  
  return cases.slice(0, count);
}

/**
 * Generate a report of test results
 */
export function analyzeResults(
  results: Array<{ testCase: TestCase; wasRewritten: boolean }>
): {
  total: number;
  correct: number;
  falsePositives: number;
  falseNegatives: number;
  byCategory: Record<string, { total: number; correct: number }>;
  gaps: string[];
} {
  let correct = 0;
  let falsePositives = 0;
  let falseNegatives = 0;
  const byCategory: Record<string, { total: number; correct: number }> = {};
  const gaps: string[] = [];
  
  for (const { testCase, wasRewritten } of results) {
    if (!byCategory[testCase.category]) {
      byCategory[testCase.category] = { total: 0, correct: 0 };
    }
    byCategory[testCase.category].total++;
    
    if (testCase.shouldRewrite === wasRewritten) {
      correct++;
      byCategory[testCase.category].correct++;
    } else if (testCase.shouldRewrite && !wasRewritten) {
      falseNegatives++;
      gaps.push(`[MISS] ${testCase.category}/${testCase.subcategory}: "${testCase.input}"`);
    } else {
      falsePositives++;
      gaps.push(`[FALSE+] ${testCase.category}/${testCase.subcategory}: "${testCase.input}"`);
    }
  }
  
  return {
    total: results.length,
    correct,
    falsePositives,
    falseNegatives,
    byCategory,
    gaps: gaps.slice(0, 100), // Limit output
  };
}
