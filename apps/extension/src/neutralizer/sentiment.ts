import { z } from 'zod';

export const SentimentResultSchema = z.object({
  score: z.number().min(-1).max(1),
  magnitude: z.number().min(0).max(1),
  emotions: z.object({
    anger: z.number().min(0).max(1),
    fear: z.number().min(0).max(1),
    sadness: z.number().min(0).max(1),
    joy: z.number().min(0).max(1),
    disgust: z.number().min(0).max(1),
  }),
});

export type SentimentResult = z.infer<typeof SentimentResultSchema>;

const NEGATIVE_PATTERNS = {
  anger: [
    /\b(outrage|furious|angry|rage|fuming|livid|irate|incensed)\b/gi,
    /\b(hate|loathe|despise|detest)\b/gi,
    /\b(this will make you (angry|furious|mad))\b/gi,
  ],
  fear: [
    /\b(terrifying|horrifying|scary|nightmare|doom|crisis)\b/gi,
    /\b(they don't want you to know)\b/gi,
    /\b(warning|alert|danger|threat)\b/gi,
  ],
  sadness: [
    /\b(devastating|heartbreaking|tragic|tearjerker|grief)\b/gi,
    /\b(sob story|sad|depressing|melancholy)\b/gi,
  ],
  disgust: [
    /\b(disgusting|revolting|repulsive|gross|vile|sickening)\b/gi,
    /\b(nasty|appalling|atrocious)\b/gi,
  ],
  joy: [
    /\b(amazing|incredible|wonderful|fantastic|thrilled|ecstatic)\b/gi,
    /\b(joy|delight|happiness|bliss)\b/gi,
  ],
};

const INTENSITY_WORDS: Record<string, number> = {
  'extremely': 0.9,
  'incredibly': 0.85,
  'absolutely': 0.8,
  'totally': 0.75,
  'very': 0.7,
  'really': 0.65,
  'quite': 0.5,
  'somewhat': 0.4,
  'slightly': 0.3,
  'a bit': 0.2,
};

function countMatches(text: string, patterns: RegExp[]): number {
  let count = 0;
  for (const pattern of patterns) {
    const matches = text.match(pattern);
    if (matches) count += matches.length;
  }
  return count;
}

function getIntensityModifier(text: string): number {
  for (const [word, value] of Object.entries(INTENSITY_WORDS)) {
    if (text.toLowerCase().includes(word)) {
      return value;
    }
  }
  return 0.5;
}

export function analyzeSentiment(text: string): SentimentResult {
  const emotions = {
    anger: Math.min(1, countMatches(text, NEGATIVE_PATTERNS.anger) * 0.25),
    fear: Math.min(1, countMatches(text, NEGATIVE_PATTERNS.fear) * 0.25),
    sadness: Math.min(1, countMatches(text, NEGATIVE_PATTERNS.sadness) * 0.25),
    joy: Math.min(1, countMatches(text, NEGATIVE_PATTERNS.joy) * 0.2),
    disgust: Math.min(1, countMatches(text, NEGATIVE_PATTERNS.disgust) * 0.25),
  };

  const negativeEmotions = emotions.anger + emotions.fear + emotions.sadness + emotions.disgust;
  const positiveEmotions = emotions.joy;

  const intensityModifier = getIntensityModifier(text);
  
  const rawScore = (positiveEmotions - negativeEmotions) / 4;
  const score = Math.max(-1, Math.min(1, rawScore));
  
  const magnitude = Math.min(1, (negativeEmotions + positiveEmotions) * intensityModifier);

  return {
    score,
    magnitude,
    emotions,
  };
}

export function isHighlyNegative(result: SentimentResult, threshold = 0.3): boolean {
  return result.score < -threshold && result.magnitude > 0.4;
}

export function hasHighAnger(result: SentimentResult, threshold = 0.3): boolean {
  return result.emotions.anger > threshold;
}

export function hasHighFear(result: SentimentResult, threshold = 0.3): boolean {
  return result.emotions.fear > threshold;
}