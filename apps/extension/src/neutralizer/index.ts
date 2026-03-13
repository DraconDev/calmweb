export { analyzeSentiment, isHighlyNegative, hasHighAnger, hasHighFear } from './sentiment';
export type { SentimentResult } from './sentiment';

export { classifyTone, isManipulative, getToneSeverity } from './tone-classifier';
export type { ToneType, ToneResult } from './tone-classifier';

export { rewriteText, shouldNeutralize } from './rewriter';
export type { RewriteMode, RewriteOptions, RewriteResult, TextChange } from './rewriter';

export { rewriteWithLocalRules, getRulesForMode, previewChanges } from './local-rules';
export { rewriteWithLLM } from './llm-rewrite';

import { analyzeSentiment } from './sentiment';
import { classifyTone, isManipulative } from './tone-classifier';
import { rewriteText, type RewriteMode, type RewriteOptions } from './rewriter';
import type { UserSettings } from '@calmweb/shared';

export interface NeutralizationAnalysis {
  sentiment: ReturnType<typeof analyzeSentiment>;
  tone: ReturnType<typeof classifyTone>;
  shouldNeutralize: boolean;
  confidence: number;
}

export function analyzeForNeutralization(text: string): NeutralizationAnalysis {
  const sentiment = analyzeSentiment(text);
  const tone = classifyTone(text);

  const isNegative = sentiment.score < -0.2 && sentiment.magnitude > 0.3;
  const isToneManipulative = isManipulative(tone);
  const shouldNeutralize = isNegative || isToneManipulative;

  const confidence = shouldNeutralize
    ? Math.max(
        Math.abs(sentiment.score),
        tone.confidence
      )
    : 0;

  return {
    sentiment,
    tone,
    shouldNeutralize,
    confidence,
  };
}

export async function neutralizeText(
  text: string,
  settings: UserSettings,
  mode: RewriteMode = 'medium'
): Promise<{ original: string; rewritten: string; analysis: NeutralizationAnalysis }> {
  const analysis = analyzeForNeutralization(text);

  if (!analysis.shouldNeutralize) {
    return {
      original: text,
      rewritten: text,
      analysis,
    };
  }

  const options: RewriteOptions = {
    mode,
    preserveFacts: true,
  };

  const result = await rewriteText(text, options, settings);

  return {
    original: text,
    rewritten: result.rewritten,
    analysis,
  };
}