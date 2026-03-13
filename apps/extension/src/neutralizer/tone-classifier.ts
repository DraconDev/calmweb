import { z } from 'zod';

export const ToneTypeSchema = z.enum([
  'ragebait',
  'clickbait',
  'fear-mongering',
  'misleading',
  'manipulative',
  'sensationalist',
  'neutral',
]);

export type ToneType = z.infer<typeof ToneTypeSchema>;

export const ToneResultSchema = z.object({
  primary: ToneTypeSchema,
  confidence: z.number().min(0).max(1),
  indicators: z.array(z.string()),
  allScores: z.record(ToneTypeSchema, z.number()),
});

export type ToneResult = z.infer<typeof ToneResultSchema>;

const TONE_PATTERNS: Record<ToneType, RegExp[]> = {
  ragebait: [
    /\b(this will make you (angry|furious|mad|rage))\b/i,
    /\b(outrage( over| about| as))\b/i,
    /\b(can't believe)\b/i,
    /\b(furious( about| over| at))\b/i,
    /\b(people are (angry|furious|outraged))\b/i,
    /\b(backlash( erupts| grows| over))\b/i,
    /\b(sparks? outrage)\b/i,
    /\b(angered|enraged|infuriated)\b/i,
  ],
  clickbait: [
    /\b(you won't believe)\b/i,
    /\b(one weird trick)\b/i,
    /\b(doctors (hate|don't want you to know))\b/i,
    /\b(mind-blowing)\b/i,
    /\b(\d+ (things|reasons|secrets|ways))\b/i,
    /\b(what happens next)\b/i,
    /\b(this (is|will) blow your mind)\b/i,
    /\b(shocking (truth|revelation|secret))\b/i,
    /\b(the (one|single|only) (thing|reason|way))\b/i,
  ],
  'fear-mongering': [
    /\b(crisis|disaster|collapse|doom|catastrophe)\b/i,
    /\b(they don't want you to know)\b/i,
    /\b(terrifying( new| truth| reality))\b/i,
    /\b(panic|alarm|emergency)\b/i,
    /\b(threat( to| against| looming))\b/i,
    /\b(danger( warning| alert| imminent))\b/i,
    /\b(scary( truth| reality| facts))\b/i,
  ],
  misleading: [
    /\b(what (they|the media|experts) (won't|don't) tell you)\b/i,
    /\b(the (real|hidden|secret) truth)\b/i,
    /\b(everything you (know|thought) is wrong)\b/i,
    /\b(busted|debunked|exposed)\b/i,
    /\b(lies? (about|exposed|revealed))\b/i,
    /\b(cover-?up)\b/i,
  ],
  manipulative: [
    /\b(act now|hurry|limited time|don't miss)\b/i,
    /\b(before it's (too late|deleted|removed))\b/i,
    /\b(this (might|could|may) be (your|the) (last|only) chance)\b/i,
    /\b(exclusive|secret|leaked)\b/i,
    /\b(insider( information| secret| tip))\b/i,
  ],
  sensationalist: [
    /\b(breaking|developing|just in)\b/i,
    /\b(explosive|bombshell|stunning)\b/i,
    /\b(earth-shattering|game-changing)\b/i,
    /\b(unprecedented|historic|massive)\b/i,
    /\b(jaw-dropping|eye-popping)\b/i,
  ],
  neutral: [],
};

function scoreTone(text: string, patterns: RegExp[]): number {
  let score = 0;

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      score += 0.25;
    }
  }

  return Math.min(1, score);
}

export function classifyTone(text: string): ToneResult {
  const allScores: Record<ToneType, number> = {
    ragebait: 0,
    clickbait: 0,
    'fear-mongering': 0,
    misleading: 0,
    manipulative: 0,
    sensationalist: 0,
    neutral: 0,
  };

  const allIndicators: string[] = [];

  for (const [tone, patterns] of Object.entries(TONE_PATTERNS) as [ToneType, RegExp[]][]) {
    if (tone === 'neutral') continue;
    
    const score = scoreTone(text, patterns);
    allScores[tone] = score;

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) {
        allIndicators.push(`${tone}: "${match[0]}"`);
      }
    }
  }

  const nonNeutralScores = Object.entries(allScores)
    .filter(([tone]) => tone !== 'neutral') as [ToneType, number][];

  const sortedScores = nonNeutralScores.sort((a, b) => b[1] - a[1]);
  const [primary, highestScore] = sortedScores[0] || ['neutral', 0];

  const isNeutral = highestScore < 0.2;
  const confidence = isNeutral ? 0.8 : Math.min(1, highestScore + 0.2);

  return {
    primary: isNeutral ? 'neutral' : primary,
    confidence,
    indicators: allIndicators.slice(0, 5),
    allScores,
  };
}

export function isManipulative(tone: ToneResult): boolean {
  return tone.primary !== 'neutral' && tone.confidence > 0.4;
}

export function getToneSeverity(tone: ToneResult): 'low' | 'medium' | 'high' {
  if (tone.primary === 'neutral' || tone.confidence < 0.3) return 'low';
  if (tone.confidence < 0.6) return 'medium';
  return 'high';
}