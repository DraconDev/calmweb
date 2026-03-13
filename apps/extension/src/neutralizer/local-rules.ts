/**
 * Local Rules Rewriter for CalmWeb
 * 
 * Simple pattern-based text transformations without LLM.
 */

import type { NeutralizationMode, NeutralizationRule, RewriteResult, TextChange } from './types';

// Built-in neutralization rules
const NEUTRALIZATION_RULES: NeutralizationRule[] = [
  // Clickbait patterns
  { pattern: /\b(shocking|jaw-dropping|mind-blowing)\b/gi, replacement: 'notable', mode: 'medium' },
  { pattern: /\b(you won'?t believe)\b/gi, replacement: '', mode: 'light' },
  { pattern: /\b(mind[- ]?blowing)\b/gi, replacement: 'interesting', mode: 'medium' },
  { pattern: /\b(one (weird|simple) trick)\b/gi, replacement: 'one method', mode: 'medium' },
  { pattern: /\b(doctors hate him)\b/gi, replacement: '', mode: 'light' },
  { pattern: /\b(this simple (trick|method))\b/gi, replacement: 'this approach', mode: 'medium' },
  
  // Emotional language
  { pattern: /\b(outrage( over| after)?)\b/gi, replacement: 'discussion about', mode: 'strict' },
  { pattern: /\b(this will make you (angry|mad|furious))\b/gi, replacement: '', mode: 'medium' },
  { pattern: /\b(everyone is (mad|angry|furious))\b/gi, replacement: 'people are discussing', mode: 'strict' },
  { pattern: /\b(can'?t believe)\b/gi, replacement: 'learned about', mode: 'strict' },
  { pattern: /\b(terrifying|terrified)\b/gi, replacement: 'concerning', mode: 'strict' },
  { pattern: /\b(devastating|devastated)\b/gi, replacement: 'significant', mode: 'strict' },
  
  // Sensationalism
  { pattern: /\b(unbelievable|incredible)\b/gi, replacement: 'notable', mode: 'medium' },
  { pattern: /\b(utterly|completely|totally)\b/gi, replacement: 'very', mode: 'strict' },
  { pattern: /\b(absolute|absolute)\b/gi, replacement: '', mode: 'strict' },
  { pattern: /\b(must (watch|read|see))\b/gi, replacement: 'recommended', mode: 'medium' },
  { pattern: /\b(life[- ]?changing)\b/gi, replacement: 'helpful', mode: 'medium' },
  { pattern: /\b(amazing|awesome)\b/gi, replacement: 'good', mode: 'strict' },
  
  // Politics neutralization
  { pattern: /\b(democrat|democratic)\b/gi, replacement: 'political', mode: 'strict' },
  { pattern: /\b(republican)\b/gi, replacement: 'political', mode: 'strict' },
  { pattern: /\b(liberal)\b/gi, replacement: 'progressive', mode: 'strict' },
  { pattern: /\b(conservative)\b/gi, replacement: 'traditional', mode: 'strict' },
  { pattern: /\b(socialist)\b/gi, replacement: '', mode: 'strict' },
  { pattern: /\b(left[- ]?wing|right[- ]?wing)\b/gi, replacement: '', mode: 'strict' },
  
  // Fear-mongering
  { pattern: /\b(crisis!?)\b/gi, replacement: 'situation', mode: 'strict' },
  { pattern: /\b(disaster!?)\b/gi, replacement: 'event', mode: 'strict' },
  { pattern: /\b(catastrophe)\b/gi, replacement: 'major change', mode: 'strict' },
  { pattern: /\b(impending doom)\b/gi, replacement: 'future developments', mode: 'strict' },
  
  // Urgency manipulation
  { pattern: /\b(warning[::]\s*)\b/gi, replacement: '', mode: 'medium' },
  { pattern: /\b(alert[::]\s*)\b/gi, replacement: '', mode: 'medium' },
  { pattern: /\b(urgent[::]\s*)\b/gi, replacement: '', mode: 'medium' },
  { pattern: /\b(don'?t (miss|scroll past))\b/gi, replacement: '', mode: 'light' },
  
  // Exaggeration
  { pattern: /\b(always|never)\b/gi, replacement: 'often', mode: 'strict' },
  { pattern: /\b(everyone|nobody)\b/gi, replacement: 'many people', mode: 'strict' },
  { pattern: /\b(huge|massive|enormous)\b/gi, replacement: 'large', mode: 'strict' },
  { pattern: /\b(destroyed|demolished)\b/gi, replacement: 'affected', mode: 'strict' },
];

function ruleApplies(rule: NeutralizationRule, mode: NeutralizationMode): boolean {
  if (rule.mode === 'all') return true;
  
  const modeOrder: NeutralizationMode[] = ['light', 'medium', 'strict'];
  const ruleIndex = modeOrder.indexOf(rule.mode as NeutralizationMode);
  const modeIndex = modeOrder.indexOf(mode);
  
  return modeIndex >= ruleIndex;
}

export function rewriteWithLocalRules(
  text: string,
  mode: NeutralizationMode,
  customRules?: NeutralizationRule[]
): RewriteResult {
  let rewritten = text;
  const changes: TextChange[] = [];
  
  // Combine built-in and custom rules
  const allRules = [...NEUTRALIZATION_RULES, ...(customRules || [])];
  
  for (const rule of allRules) {
    if (!ruleApplies(rule, mode)) continue;
    
    const regex = typeof rule.pattern === 'string' 
      ? new RegExp(rule.pattern.source, rule.pattern.flags)
      : rule.pattern;
    
    const matches = rewritten.match(regex);
    if (matches) {
      for (const match of matches) {
        if (match && match.trim()) {
          changes.push({
            original: match,
            replacement: rule.replacement,
            reason: rule.description || 'neutralization rule',
          });
        }
      }
      rewritten = rewritten.replace(regex, rule.replacement);
    }
  }
  
  // Clean up multiple spaces
  rewritten = rewritten.replace(/\s+/g, ' ').trim();
  
  // Clean up orphaned punctuation
  rewritten = rewritten.replace(/\s+([.,!?])/g, '$1');
  rewritten = rewritten.replace(/([.,!?]){2,}/g, '$1');
  
  return {
    original: text,
    rewritten,
    changes,
    confidence: changes.length > 0 ? 0.7 : 1.0,
  tone: changes.length > 2 ? 'sensational' : 'neutral',
  };
}

export function estimateReadability(text: string): number {
  const words = text.split(/\s+/).length;
  const sentences = text.split(/[.!?]+/).length;
  const syllables = text.match(/[aeiouy]+/gi)?.length || 0;
  
  if (words === 0 || sentences === 0) return 0;
  
  // Simplified Flesch reading ease
  const score = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
  return Math.max(0, Math.min(100, score));
}