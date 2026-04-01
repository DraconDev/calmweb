/**
 * Classifier utility for CalmWeb
 *
 * Provides content classification via local rules only:
 * - Keyword/preset matching
 * - Channel blocking
 * - User blocklists/allowlists
 */

import type { ContentUnit, ClassificationResult, UserRules } from '@calmweb/shared';
import { matchPresetKeywords, matchPresetChannel, getPreset } from '@/src/presets';

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

  // 1. Check active presets - most specific first
  const presetIds = ['spoilers', 'clickbait', 'politics', 'ragebait'] as const;
  
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
// Main Classifier Entry Point
// ============================================================================

/**
 * Classify a ContentUnit using local rules only.
 * No API calls - instant results.
 */
export async function classifyContent(
  unit: ContentUnit,
  settings: {
    rules: UserRules;
  }
): Promise<ClassificationResult> {
  // Try local rules (fast)
  const rulesResult = applyLocalRules(unit, settings.rules);
  if (rulesResult) {
    return rulesResult;
  }

  // No rule matched, show content
  return {
    decision: 'show',
    confidence: 1,
    reason: 'no_match',
  };
}
