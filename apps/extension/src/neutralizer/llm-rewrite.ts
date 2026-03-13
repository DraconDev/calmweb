/**
 * LLM-powered Text Rewriter for CalmWeb
 * 
 * Uses BYOK or hosted LLM for more sophisticated neutralization.
 */

import type { RewriteResult, NeutralizationMode, TextChange } from './types';
import type { UserSettings } from '@calmweb/shared';
import type { ApiClient } from '@dracon/wxt-shared/api';

const MODE_PROMPTS: Record<NeutralizationMode, string> = {
  light: `Only remove extreme manipulation and deception. Keep most emotional language intact.`,
  medium: `Remove emotional manipulation and sensational language. Keep factual content.`,
  strict: `Transform to clinical, fact-only text. Remove ALL emotional language, opinions, and subjective descriptors.`,
  custom: `Follow the user's specific preferences for tone.`,
};

export async function rewriteWithLLM(
  text: string,
  mode: NeutralizationMode,
  settings: UserSettings,
  apiClient?: ApiClient
): Promise<RewriteResult> {
  const systemPrompt = `You are a text neutralization assistant for CalmWeb, a browser extension that helps users control their content experience.

Your job is to rewrite headlines and titles to be:
- Factual and neutral
- Free of emotional manipulation
- Clear and informative

Neutralization mode: ${mode}
${MODE_PROMPTS[mode]}

RULES:
1. Keep core factual information intact
2. Remove: sensationalism, emotional triggers, clickbait patterns
3. Use neutral, professional language
4. If already neutral, return unchanged

Examples:
- "This WILL make you FURIOUS" → "A notable situation"
- "Doctors HATE this trick" → "A medical approach"
- "SHOCKING truth REVEALED" → "New information available"

Respond with JSON:
{
  "rewritten": "the neutralized text",
  "changes": [{"original": "what was changed", "replacement": "what replaced it", "reason": "why"}],
  "confidence": 0.0-1.0,
  "tone": "neutral|sensational|manipulative"
}`;

  try {
    let response: { choices: Array<{ message?: { content?: string } }> };
    
    if (settings.processingMode === 'byok_llm' && settings.byokKey) {
      const endpoint = 'https://api.openai.com/v1/chat/completions';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${settings.byokKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: `Neutralize this text:\n\n"${text}"` },
          ],
          temperature: 0.2,
          max_tokens: 500,
        }),
      });
      
      if (!res.ok) {
        throw new Error(`BYOK API error: ${res.status}`);
      }
      
      response = await res.json();
    } else if (settings.processingMode === 'hosted_llm' && apiClient) {
      response = await apiClient.chatCompletions({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Neutralize this text:\n\n"${text}"` },
        ],
      });
    } else {
      throw new Error('No LLM available');
    }
    
    const content = response.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('No response from LLM');
    }
    
    // Parse JSON response
    let parsed: RewriteResult;
    try {
      parsed = JSON.parse(content);
    } catch {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Could not parse LLM response');
      }
    }
    
    // Validate and clean
    return {
      original: text,
      rewritten: parsed.rewritten || text,
      changes: parsed.changes || [],
      confidence: Math.max(0, Math.min(1, parsed.confidence || 0.7)),
      tone: parsed.tone,
    };
  } catch (error) {
    console.error('[Neutralizer] LLM error:', error);
    return {
      original: text,
      rewritten: text,
      changes: [],
      confidence: 0,
      tone: 'neutral',
    };
  }
}