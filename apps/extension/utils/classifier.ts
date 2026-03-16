/**
 * Classifier utility for CalmWeb
 *
 * Provides content classification via:
 * - Local rules engine (fast regex/channel matching)
 * - BYOK LLM (OpenAI-compatible API)
 * - Hosted platform API (Dracon backend)
 */

import type { ContentUnit, ClassificationResult, UserRules } from '@calmweb/shared';
import type { ApiClient } from '@dracon/wxt-shared/api';
import { matchPresetKeywords, matchPresetChannel, getPreset } from '@/src/presets';
import { OPENROUTER_ENDPOINT, DEFAULT_OPENROUTER_MODEL } from '@calmweb/shared';

const VALID_DECISIONS = ['show', 'blur', 'hide', 'neutralize', 'collapse', 'rebuild'] as const;

// ============================================================================
// Rules Engine
// ============================================================================

/**
 * Apply local rules to classify content.
 * Returns a classification if any rule matches, otherwise null.
 */
export function applyLocalRules(unit: ContentUnit, rules: UserRules): ClassificationResult | null {
  const titleLower = unit.title.toLowerCase();
  const presets = rules.presets;

  // 1. Check active presets (politics, ragebait, spoilers, clickbait)
  const presetIds = ['politics', 'ragebait', 'spoilers', 'clickbait'] as const;
  
  for (const presetId of presetIds) {
    if (presets[presetId]) {
      // Check keywords
      if (matchPresetKeywords(unit.title, presetId)) {
        const preset = getPreset(presetId);
        return {
          decision: preset?.actions.default || 'collapse',
          confidence: preset?.actions.confidence || 0.85,
          reason: `preset_${presetId}`,
        };
      }
      
      // Check channels
      if (matchPresetChannel(unit.sourceName, presetId)) {
        const preset = getPreset(presetId);
        return {
          decision: preset?.actions.default || 'collapse',
          confidence: (preset?.actions.confidence || 0.85) + 0.1,
          reason: `preset_${presetId}_channel`,
        };
      }
    }
  }

  // 2. Check user-defined blocklist channels
  if (unit.sourceName && rules.blocklistChannels.length > 0) {
    const sourceLower = unit.sourceName.toLowerCase();
    if (rules.blocklistChannels.some(chan => sourceLower.includes(chan.toLowerCase()))) {
      return { decision: 'collapse', confidence: 1.0, reason: 'blocklist_channel' };
    }
  }

  // 3. Check user-defined blocklist keywords
  if (rules.blocklistKeywords.length > 0) {
    if (rules.blocklistKeywords.some(keyword => titleLower.includes(keyword.toLowerCase()))) {
      return { decision: 'collapse', confidence: 0.9, reason: 'blocklist_keyword' };
    }
  }

  // 4. Allowlist overrides (show even if other rules would hide)
  if (unit.sourceName && rules.allowlistChannels.length > 0) {
    const sourceLower = unit.sourceName.toLowerCase();
    if (rules.allowlistChannels.some(chan => sourceLower.includes(chan.toLowerCase()))) {
      return { decision: 'show', confidence: 1.0, reason: 'allowlist_channel' };
    }
  }

  if (rules.allowlistKeywords.length > 0) {
    if (rules.allowlistKeywords.some(keyword => titleLower.includes(keyword.toLowerCase()))) {
      return { decision: 'show', confidence: 1.0, reason: 'allowlist_keyword' };
    }
  }

  return null;
}

// ============================================================================
// BYOK Classification (OpenAI API)
// ============================================================================

/**
 * Classify content using a user-provided OpenAI-compatible API key.
 */
export async function classifyWithBYOK(
  unit: ContentUnit,
  apiKey: string,
  strictness: number,
  customEndpoint?: string
): Promise<ClassificationResult> {
  const endpoint = customEndpoint || 'https://api.openai.com/v1/chat/completions';
  const systemPrompt = `You are a content moderation assistant for a browser extension called CalmWeb.
Your job is to classify content cards (e.g., video titles, post headlines) and decide what action to take.

Available actions:
- "show": Content is safe, informative, or desirable. No action needed.
- "blur": Content is sensitive but not harmful (e.g., spoilers, mild content). Blur it but allow hover-to-reveal.
- "collapse": Content is potentially unwanted (e.g., politics, clickbait, ragebait). Show a placeholder with option to expand.
- "hide": Content is clearly harmful or completely unwanted. Hide it entirely.
- "neutralize": The title is misleading or sensational but the underlying content might be okay. Provide a better, neutral title.

Respond with ONLY valid JSON:
{
  "decision": "show|blur|collapse|hide|neutralize",
  "confidence": 0.0-1.0,
  "reason": "brief explanation",
  "neutralizedTitle": "optional, only if decision is neutralize"
}

Be moderate. Prefer "collapse" over "hide" when uncertain. Default to "show" if unsure.`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Title: ${unit.title}\nSource: ${unit.sourceName || 'unknown'}\nSite: ${unit.site}\nMetadata: ${unit.metadata.join(', ')}`
          },
        ],
        temperature: 0.2,
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenAI API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('No response content from LLM');
    }

    let parsed: ClassificationResult;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      // Try to extract JSON from the response
      const jsonMatch = content.match(/\{.*\}/s);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Failed to parse LLM response as JSON');
      }
    }

    // Validate decision
    if (!VALID_DECISIONS.includes(parsed.decision as typeof VALID_DECISIONS[number])) {
      parsed.decision = 'show';
    }

    // Clamp confidence
    parsed.confidence = Math.max(0, Math.min(1, parsed.confidence || 0));

    // Apply strictness threshold: if below threshold, show
    if (parsed.confidence < (strictness / 100)) {
      return {
        decision: 'show',
        confidence: parsed.confidence,
        reason: 'below_threshold',
      };
    }

    return parsed;
  } catch (error) {
    console.error('[Classifier] BYOK error:', error);
    // Fallback: show content if API fails
    return {
      decision: 'show',
      confidence: 0,
      reason: 'byok_error',
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// ============================================================================
// Hosted Classification (Platform API)
// ============================================================================

/**
 * Classify content using the Dracon platform's hosted AI API.
 */
export async function classifyWithHosted(
  unit: ContentUnit,
  apiClient: ApiClient,
  strictness: number
): Promise<ClassificationResult> {
  try {
    // Use the platform's chat completions endpoint
    const response = await apiClient.chatCompletions({
      messages: [
        {
          role: 'system',
          content: `You are CalmWeb moderation assistant. Classify content as one of:
- "show": safe content
- "blur": sensitive but not harmful (spoilers, mild content)
- "collapse": potentially unwanted content (politics, clickbait, ragebait) - show placeholder
- "hide": clearly harmful content (spam, explicit, misinformation)
- "neutralize": misleading title, suggest better one

Respond with JSON: { "decision": "...", "confidence": 0.0-1.0, "reason": "...", "neutralizedTitle?" "optional" }`,
        },
        {
          role: 'user',
          content: `Classify this content:\nTitle: ${unit.title}\nSource: ${unit.sourceName || 'unknown'}\nSite: ${unit.site}\nMetadata: ${unit.metadata.join(', ')}`,
        },
      ],
      // project_id will be determined by the backend based on extension appId
    });

    const choice = response.choices?.[0];
    if (!choice) {
      throw new Error('No choices returned from API');
    }

    let parsed: ClassificationResult;
    const contentStr = typeof choice.message?.content === 'string' 
      ? choice.message.content 
      : JSON.stringify(choice.message?.content || {});

    try {
      parsed = JSON.parse(contentStr);
    } catch (e) {
      // Fallback: parse plain text response
      const content = contentStr.toLowerCase();
      if (content.includes('collapse')) {
        parsed = { decision: 'collapse', confidence: 0.9, reason: 'hosted' };
      } else if (content.includes('hide')) {
        parsed = { decision: 'hide', confidence: 0.9, reason: 'hosted' };
      } else if (content.includes('blur')) {
        parsed = { decision: 'blur', confidence: 0.9, reason: 'hosted' };
      } else if (content.includes('neutralize')) {
        parsed = { decision: 'neutralize', confidence: 0.9, reason: 'hosted' };
      } else {
        parsed = { decision: 'show', confidence: 0.9, reason: 'hosted' };
      }
    }

    // Validate decision
    if (!VALID_DECISIONS.includes(parsed.decision as typeof VALID_DECISIONS[number])) {
      parsed.decision = 'show';
    }

    // Clamp confidence
    parsed.confidence = Math.max(0, Math.min(1, parsed.confidence || 0));

    // Apply strictness threshold
    if (parsed.confidence < (strictness / 100)) {
      return {
        decision: 'show',
        confidence: parsed.confidence,
        reason: 'below_threshold',
      };
    }

    return parsed;
  } catch (error) {
    console.error('[Classifier] Hosted API error:', error);
    return {
      decision: 'show',
      confidence: 0,
      reason: 'hosted_error',
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// ============================================================================
// Main Classifier Entry Point
// ============================================================================

export interface ClassifierOptions {
  apiClient?: ApiClient;
}

/**
 * Classify a ContentUnit using the appropriate method based on settings.
 * This is the main entry point for the background worker.
 */
export async function classifyContent(
  unit: ContentUnit,
  settings: {
    processingMode: 'local_rules' | 'byok_llm' | 'hosted_llm';
    strictness: number;
    rules: UserRules;
    byokKey?: string;
  },
  options: ClassifierOptions = {}
): Promise<ClassificationResult> {
  // 1. Try local rules first (fast)
  const rulesResult = applyLocalRules(unit, settings.rules);
  if (rulesResult) {
    return rulesResult;
  }

  // 2. If rules didn't match, use LLM based on processing mode
  if (settings.processingMode === 'byok_llm' && settings.byokKey) {
    return classifyWithBYOK(unit, settings.byokKey, settings.strictness);
  }

  if (settings.processingMode === 'hosted_llm' && options.apiClient) {
    return classifyWithHosted(unit, options.apiClient, settings.strictness);
  }

  // 3. Fallback: show content
  return {
    decision: 'show',
    confidence: 1,
    reason: 'no_matching_mode',
  };
}
