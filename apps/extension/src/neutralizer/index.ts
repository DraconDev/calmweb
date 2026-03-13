/**
 * Main Text Rewriter for CalmWeb
 * 
 * Coordinates local rules and LLM-based rewriting.
 */

import type { RewriteResult, NeutralizationOptions } from './types';
import { rewriteWithLocalRules } from './local-rules';
import { rewriteWithLLM } from './llm-rewrite';
import type { UserSettings } from '@calmweb/shared';
import type { ApiClient } from '@dracon/wxt-shared/api';

export { rewriteWithLocalRules } from './local-rules';
export { rewriteWithLLM } from './llm-rewrite';
export { analyzeSentiment, isNegativeSentiment, isHighlyEmotional } from './sentiment';
export { classifyTone, isManipulativeTone, getToneDescription } from './tone-classifier';

export type { 
  SentimentResult, 
  ToneType, 
  ToneResult, 
  TextChange, 
  RewriteResult,
  NeutralizationMode,
  NeutralizationOptions,
  NeutralizationRule,
  NeutralizationSettings,
} from './types';

import { analyzeSentiment } from './sentiment';
import { classifyTone } from './tone-classifier';

export interface RewriterConfig {
  settings: UserSettings;
  apiClient?: ApiClient;
}

export async function rewriteText(
  text: string,
  options: NeutralizationOptions,
  config?: RewriterConfig
): Promise<RewriteResult> {
  // Step 1: Try local rules first (fast, free)
  const localResult = rewriteWithLocalRules(text, options.mode, options.customRules);
  
  // If local rules made significant changes, use that
  if (localResult.changes.length >= 3) {
    return localResult;
  }
  
  // If confidence is high, use local result
  if (localResult.confidence >= 0.8) {
    return localResult;
  }
  
  // Step 2: Analyze if more aggressive neutralization needed
  const sentiment = analyzeSentiment(text);
  const tone = classifyTone(text);
  
  // If text is highly emotional or manipulative, try LLM
  if (config?.settings && config.settings.processingMode !== 'local_rules') {
    if (sentiment.magnitude > 0.4 || (tone.primary !== 'neutral' && tone.confidence > 0.5)) {
      const llmResult = await rewriteWithLLM(
        text,
        options.mode,
        config.settings,
        config.apiClient
      );
      
      // Use LLM result if it made more changes
      if (llmResult.changes.length > localResult.changes.length) {
        return llmResult;
      }
    }
  }
  
  return localResult;
}

export function shouldNeutralize(text: string): {
  should: boolean;
  reason: string;
  confidence: number;
} {
  const sentiment = analyzeSentiment(text);
  const tone = classifyTone(text);
  
  if (isNegativeSentiment(sentiment, -0.2) && sentiment.magnitude > 0.3) {
    return {
      should: true,
      reason: 'Negative emotional content detected',
      confidence: Math.abs(sentiment.score) * sentiment.magnitude,
    };
  }
  
  if (tone.primary !== 'neutral' && tone.confidence > 0.4) {
    return {
      should: true,
      reason: `${tone.primary} tone detected`,
      confidence: tone.confidence,
    };
  }
  
  return {
    should: false,
    reason: 'Content appears neutral',
    confidence: 0.9,
  };
}