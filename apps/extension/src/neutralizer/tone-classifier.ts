/**
 * Tone Classifier for CalmWeb
 * 
 * Detects manipulation tactics like ragebait, clickbait, fear-mongering.
 */

import type { ToneType, ToneResult } from './types';

interface TonePattern {
  patterns: RegExp[];
  indicators: string[];
  weight: number;
}

const TONE_PATTERNS: Record<ToneType, TonePattern> = {
  neutral: {
    patterns: [],
    indicators: [],
    weight: 0,
  },
  
  ragebait: {
    patterns: [
      /\b(this will make you (angry|mad|furious))\b/i,
      /\b(outrage (over|after|at))\b/i,
      /\b(can'?t believe)\b/i,
      /\b(everyone is (mad|angry|furious))\b/i,
      /\b(should be (angry|outraged))\b/i,
      /\b(what (they|the media) don'?t want you to know)\b/i,
      /\b(how to make (people|someone) (angry|mad))\b/i,
    ],
    indicators: ['emotional trigger', 'anger inducement', 'outrage bait'],
    weight: 0.9,
  },
  
  clickbait: {
    patterns: [
      /\b(you won'?t believe)\b/i,
      /\b(one (weird|simple) trick)\b/i,
      /\b(doctors (hate|don'?t want you to know))\b/i,
      /\b(mind[- ]?blowing)\b/i,
      /\b(jaw[- ]?dropping)\b/i,
      /\b(life[- ]?changing)\b/i,
      /\b(what happened next)\b/i,
      /\b(number \d+ (will|is|shock))\b/i,
      /\b(only \d+ (people|percent) know)\b/i,
      /\b(secret (to|that|reveals))\b/i,
      /\b(this simple (trick|method|hack))\b/i,
    ],
    indicators: ['curiosity gap', 'sensational language', 'exaggerated claims'],
    weight: 0.85,
  },
  
  'fear-mongering': {
    patterns: [
      /\b(crisis|disaster|catastrophe)\b/i,
      /\b(impending|coming|looming) (doom|disaster|crisis)\b/i,
      /\b(they don'?t want you to know)\b/i,
      /\b(warning[::])/i,
      /\b(alert[::])/i,
      /\b(urgent[::])/i,
      /\b(what you need to know (before|about))\b/i,
      /\b(could (destroy|ruin|kill))\b/i,
      /\b(hidden (danger|threat|risk))\b/i,
    ],
    indicators: ['fear appeal', 'urgency manipulation', 'threat emphasis'],
    weight: 0.85,
  },
  
  misleading: {
    patterns: [
      /\b(shocking truth about)\b/i,
      /\b(what (they|the government|mainstream) (hide|hiding))\b/i,
      /\b(real story (behind|about))\b/i,
      /\b(expose[sd]?\b/i,
      /\b(reveals? the truth)\b/i,
      /\b(everything you know is wrong)\b/i,
    ],
    indicators: ['conspiracy framing', 'truth claims', 'debunk framing'],
    weight: 0.75,
  },
  
  manipulative: {
    patterns: [
      /\b(you (need|must|should) (watch|read|see))\b/i,
      /\b(don'?t (miss|scroll past|ignore))\b/i,
      /\b(this is why)\b/i,
      /\b(the reason)\b/i,
      /\b(here'?s why)\b/i,
      /\b(everyone is talking about)\b/i,
      /\b(going viral)\b/i,
      /\b(trending now)\b/i,
    ],
    indicators: ['urgency language', 'fomo trigger', 'imperative language'],
    weight: 0.7,
  },
  
  sensational: {
    patterns: [
      /\b(unbelievable|incredible|extraordinary)\b/i,
      /\b(shocking|stunning|breathtaking)\b/i,
      /\b(amazing|astonishing|remarkable)\b/i,
      /\b(epic|legendary|historic)\b/i,
      /\b(explosive|bombshell|blockbuster)\b/i,
    ],
    indicators: ['hyperbolic language', 'excessive adjectives', 'dramatic framing'],
    weight: 0.65,
  },
};

export function classifyTone(text: string): ToneResult {
  const scores: { tone: ToneType; score: number; indicators: string[] }[] = [];
  
  for (const [tone, config] of Object.entries(TONE_PATTERNS)) {
    if (tone === 'neutral') continue;
    
    let matchCount = 0;
    const matchedIndicators: string[] = [];
    
    for (const pattern of config.patterns) {
      const matches = text.match(pattern);
      if (matches) {
        matchCount += matches.length;
      }
    }
    
    if (matchCount > 0) {
      const score = Math.min(1, (matchCount * config.weight) / 3);
      scores.push({
        tone: tone as ToneType,
        score,
        indicators: config.indicators,
      });
    }
  }
  
  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);
  
  // Return top match or neutral
  if (scores.length === 0 || scores[0].score < 0.3) {
    return {
      primary: 'neutral',
      confidence: 0.8,
      indicators: [],
    };
  }
  
  return {
    primary: scores[0].tone,
    confidence: scores[0].score,
    indicators: scores[0].indicators,
  };
}

export function getToneDescription(tone: ToneType): string {
  const descriptions: Record<ToneType, string> = {
    neutral: 'Standard, factual content',
    ragebait: 'Designed to provoke anger',
    clickbait: 'Misleading, curiosity-exploiting headline',
    'fear-mongering': 'Uses fear to manipulate',
    misleading: 'Contains false or deceptive claims',
    manipulative: 'Uses psychological tricks',
    sensational: 'Overly dramatic or exaggerated',
  };
  
  return descriptions[tone];
}

export function isManipulativeTone(result: ToneResult): boolean {
  return result.primary !== 'neutral' && result.confidence > 0.5;
}