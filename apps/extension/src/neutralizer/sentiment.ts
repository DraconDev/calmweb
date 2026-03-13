/**
 * Sentiment Analysis for CalmWeb
 * 
 * Local, keyword-based sentiment analysis without external API calls.
 */

import type { SentimentResult } from './types';

// Emotion keyword patterns with weights
const EMOTION_PATTERNS = {
  anger: [
    { pattern: /\b(outrage|outraged|outraging)\b/gi, weight: 0.9 },
    { pattern: /\b(furious|fury|fuming)\b/gi, weight: 0.85 },
    { pattern: /\b(angry|anger|enraged)\b/gi, weight: 0.7 },
    { pattern: /\b(hate|hatred|loathe|despise)\b/gi, weight: 0.8 },
    { pattern: /\b(disgusting|disgust|appalling)\b/gi, weight: 0.75 },
    { pattern: /\b(despicable|disgraceful|shameful)\b/gi, weight: 0.7 },
    { pattern: /\b(rage|enraging|infuriating)\b/gi, weight: 0.85 },
    { pattern: /\b(makes? you (mad|angry|furious))\b/gi, weight: 0.8 },
  ],
  fear: [
    { pattern: /\b(terrifying|terrified|terror)\b/gi, weight: 0.9 },
    { pattern: /\b(scary|scared|frightening)\b/gi, weight: 0.7 },
    { pattern: /\b(danger|dangerous|threat)\b/gi, weight: 0.75 },
    { pattern: /\b(crisis|disaster|catastrophe)\b/gi, weight: 0.8 },
    { pattern: /\b(warning|warn|alert)\b/gi, weight: 0.5 },
    { pattern: /\b(fear|fearful|afraid)\b/gi, weight: 0.75 },
    { pattern: /\b(doom|collapse|ruin)\b/gi, weight: 0.85 },
    { pattern: /\b(panic|panicking|hysteria)\b/gi, weight: 0.8 },
  ],
  sadness: [
    { pattern: /\b(sad|sadness|unhappy)\b/gi, weight: 0.6 },
    { pattern: /\b(tragic|tragedy|heartbreaking)\b/gi, weight: 0.85 },
    { pattern: /\b(grief|grieving|mourn)\b/gi, weight: 0.8 },
    { pattern: /\b(depressing|depressed|depression)\b/gi, weight: 0.75 },
    { pattern: /\b(devastating|devastated)\b/gi, weight: 0.85 },
    { pattern: /\b(hopeless|despair|misery)\b/gi, weight: 0.8 },
    { pattern: /\b(suffering|suffer|painful)\b/gi, weight: 0.7 },
    { pattern: /\b(loss|lost|died|death)\b/gi, weight: 0.65 },
  ],
  joy: [
    { pattern: /\b(amazing|wonderful|fantastic)\b/gi, weight: 0.8 },
    { pattern: /\b(happy|happiness|joy)\b/gi, weight: 0.7 },
    { pattern: /\b(exciting|excited|thrilled)\b/gi, weight: 0.75 },
    { pattern: /\b(celebrat|cheer|delight)\b/gi, weight: 0.7 },
    { pattern: /\b(love|loved|loving)\b/gi, weight: 0.65 },
    { pattern: /\b(beautiful|gorgeous|stunning)\b/gi, weight: 0.6 },
    { pattern: /\b(success|successful|triumph)\b/gi, weight: 0.7 },
    { pattern: /\b(win|won|victory)\b/gi, weight: 0.65 },
  ],
  disgust: [
    { pattern: /\b(gross|disgusting|repulsive)\b/gi, weight: 0.85 },
    { pattern: /\b(nasty|vile|filthy)\b/gi, weight: 0.8 },
    { pattern: /\b(revolting|repugnant|sickening)\b/gi, weight: 0.85 },
    { pattern: /\b(ew|yuck|blech)\b/gi, weight: 0.9 },
    { pattern: /\b(crime|criminal|scandal)\b/gi, weight: 0.6 },
    { pattern: /\b(corrupt|corruption)\b/gi, weight: 0.65 },
  ],
};

// General sentiment patterns
const NEGATIVE_PATTERNS = [
  /\b(bad|terrible|horrible|awful)\b/gi,
  /\b(worst|fail|failure|failed)\b/gi,
  /\b(wrong|mistake|error|broken)\b/gi,
  /\b(problem|issue|trouble|difficult)\b/gi,
  /\b(never|don'?t|won'?t|can'?t)\b/gi,
];

const POSITIVE_PATTERNS = [
  /\b(good|great|excellent|superb)\b/gi,
  /\b(best|perfect|amazing|awesome)\b/gi,
  /\b(right|correct|success|works?)\b/gi,
  /\b(easy|simple|fast|quick)\b/gi,
  /\b(love|recommend|must( have| watch| read))\b/gi,
];

const INTENSIFIERS = [
  /\b(very|really|extremely|incredibly)\b/gi,
  /\b(absolutely|totally|completely|utterly)\b/gi,
  /\b(so|such|quite|rather)\b/gi,
];

export function analyzeSentiment(text: string): SentimentResult {
  const emotions: SentimentResult['emotions'] = {
    anger: 0,
    fear: 0,
    sadness: 0,
    joy: 0,
    disgust: 0,
  };

  // Analyze emotions
  for (const [emotion, patterns] of Object.entries(EMOTION_PATTERNS)) {
    let score = 0;
    for (const { pattern, weight } of patterns) {
      const matches = text.match(pattern);
      if (matches) {
        score += matches.length * weight;
      }
    }
    // Normalize to 0-1 range
    emotions[emotion as keyof typeof emotions] = Math.min(1, score / 3);
  }

  // Calculate overall sentiment score
  let positiveScore = 0;
  let negativeScore = 0;

  for (const pattern of POSITIVE_PATTERNS) {
    const matches = text.match(pattern);
    if (matches) positiveScore += matches.length;
  }

  for (const pattern of NEGATIVE_PATTERNS) {
    const matches = text.match(pattern);
    if (matches) negativeScore += matches.length;
  }

  // Check for intensifiers
  let intensifierMultiplier = 1;
  for (const pattern of INTENSIFIERS) {
    const matches = text.match(pattern);
    if (matches) intensifierMultiplier += matches.length * 0.2;
  }

  // Calculate final score (-1 to +1)
  const totalMatches = positiveScore + negativeScore;
  let score = 0;
  if (totalMatches > 0) {
    score = ((positiveScore - negativeScore) / totalMatches) * intensifierMultiplier;
    score = Math.max(-1, Math.min(1, score));
  }

  // Calculate magnitude (intensity)
  const emotionSum = Object.values(emotions).reduce((a, b) => a + b, 0);
  const magnitude = Math.min(1, (emotionSum + totalMatches * 0.1) / 5);

  return {
    score,
    magnitude,
    emotions,
  };
}

export function isNegativeSentiment(result: SentimentResult, threshold = -0.3): boolean {
  return result.score < threshold;
}

export function isHighlyEmotional(result: SentimentResult, threshold = 0.5): boolean {
  return result.magnitude > threshold;
}