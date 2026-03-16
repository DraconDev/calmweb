/**
 * CalmWeb Shared Types and Schemas
 *
 * Core interfaces and Zod validation for the CalmWeb content firewall extension.
 */

import { z } from 'zod';

// ============================================================================
// Processing & Action Types
// ============================================================================

export const ProcessingModeSchema = z.enum(['local_rules', 'byok_llm', 'hosted_llm']);
export type ProcessingMode = z.infer<typeof ProcessingModeSchema>;

export const AIProviderSchema = z.enum(['openrouter', 'openai', 'anthropic', 'custom']);
export type AIProvider = z.infer<typeof AIProviderSchema>;

export const ActionDecisionSchema = z.enum(['show', 'blur', 'hide', 'neutralize', 'collapse', 'rebuild']);
export type ActionDecision = z.infer<typeof ActionDecisionSchema>;

// ============================================================================
// Content Unit
// ============================================================================

export const ContentUnitSchema = z.object({
  id: z.string(),
  site: z.string(),
  fingerprint: z.string(),
  sourceName: z.string().optional(),
  title: z.string(),
  metadata: z.array(z.string()),
  isNew: z.boolean(),
  url: z.string().url().optional(),
});
export type ContentUnit = z.infer<typeof ContentUnitSchema>;

// ============================================================================
// Classification Result
// ============================================================================

export const ClassificationResultSchema = z.object({
  decision: ActionDecisionSchema,
  confidence: z.number().min(0).max(1),
  reason: z.string(),
  neutralizedTitle: z.string().optional(),
  error: z.string().optional(),
});
export type ClassificationResult = z.infer<typeof ClassificationResultSchema>;

// ============================================================================
// User Rules
// ============================================================================

export const PresetSelectionSchema = z.object({
  politics: z.boolean().default(false),
  ragebait: z.boolean().default(false),
  spoilers: z.boolean().default(false),
  clickbait: z.boolean().default(false),
});
export type PresetSelection = z.infer<typeof PresetSelectionSchema>;

export const UserRulesSchema = z.object({
  blocklistChannels: z.array(z.string()).default([]),
  blocklistKeywords: z.array(z.string()).default([]),
  allowlistChannels: z.array(z.string()).default([]),
  allowlistKeywords: z.array(z.string()).default([]),
  presets: PresetSelectionSchema.default({
    politics: false,
    ragebait: false,
    spoilers: false,
    clickbait: false,
  }),
});
export type UserRules = z.infer<typeof UserRulesSchema>;

// ============================================================================
// Neutralization Settings
// ============================================================================

export const NeutralizationModeSchema = z.enum(['light', 'medium', 'strict']);
export type NeutralizationMode = z.infer<typeof NeutralizationModeSchema>;

export const NeutralizationSettingsSchema = z.object({
  enabled: z.boolean().default(true),
  mode: NeutralizationModeSchema.default('medium'),
  showIndicator: z.boolean().default(true),
  showDiffOnHover: z.boolean().default(true),
  excludeDomains: z.array(z.string()).default([]),
});
export type NeutralizationSettings = z.infer<typeof NeutralizationSettingsSchema>;

export const defaultNeutralizationSettings: NeutralizationSettings = {
  enabled: true,
  mode: 'medium',
  showIndicator: true,
  showDiffOnHover: true,
  excludeDomains: [],
};

export const ReaderSettingsSchema = z.object({
  enabled: z.boolean().default(true),
  defaultLayout: z.string().default('reader'),
  defaultTheme: z.string().default('default'),
  autoOpen: z.boolean().default(false),
  showInContextMenu: z.boolean().default(true),
});
export type ReaderSettings = z.infer<typeof ReaderSettingsSchema>;

export const defaultReaderSettings: ReaderSettings = {
  enabled: true,
  defaultLayout: 'reader',
  defaultTheme: 'default',
  autoOpen: false,
  showInContextMenu: true,
};

// ============================================================================
// User Settings
// ============================================================================

export const UserSettingsSchema = z.object({
  enabled: z.boolean().default(true),
  processingMode: ProcessingModeSchema.default('local_rules'),
  strictness: z.number().min(0).max(100).default(80),
  rules: UserRulesSchema.default({
    blocklistChannels: [],
    blocklistKeywords: [],
    allowlistChannels: [],
    allowlistKeywords: [],
    presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
  }),
  byokKey: z.string().optional(),
  neutralization: NeutralizationSettingsSchema.default(defaultNeutralizationSettings),
  reader: ReaderSettingsSchema.default(defaultReaderSettings),
});
export type UserSettings = z.infer<typeof UserSettingsSchema>;

export const defaultUserSettings: UserSettings = {
  enabled: true,
  processingMode: 'local_rules',
  strictness: 80,
  rules: {
    blocklistChannels: [],
    blocklistKeywords: [],
    allowlistChannels: [],
    allowlistKeywords: [],
    presets: { politics: false, ragebait: false, spoilers: false, clickbait: false },
  },
  byokKey: undefined,
  neutralization: defaultNeutralizationSettings,
  reader: defaultReaderSettings,
};

// ============================================================================
// Site Adapter
// ============================================================================

export interface SiteAdapter {
  siteId: string;
  matches: RegExp[];
  discoverUnits: (root: Document | HTMLElement) => HTMLElement[];
  extractData: (element: HTMLElement) => ContentUnit;
  applyDecision: (element: HTMLElement, result: ClassificationResult) => void;
}

// ============================================================================
// Fingerprinting
// ============================================================================

/**
 * Simple string hash algorithm for fingerprinting content.
 * Not crytographically secure, but fast and sufficient for caching.
 */
export function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
}

/**
 * Generate a stable fingerprint for a ContentUnit.
 * Combines title and sourceName, ignores variable fields.
 */
export function generateFingerprint(unit: Omit<ContentUnit, 'id' | 'fingerprint' | 'isNew' | 'element'>): string {
  const seed = `${unit.title}|${unit.sourceName || ''}|${unit.site}`;
  return simpleHash(seed);
}

// ============================================================================
// Storage Keys
// ============================================================================

export const STORAGE_KEYS = {
  SETTINGS: 'local:settings' as const,
  DECISION_CACHE: 'local:decisionCache' as const,
  BYOK_KEYS: 'local:byokKeys' as const,
  STATS: 'local:stats' as const,
} as const;

// ============================================================================
// Message Types
// ============================================================================

export const MESSAGE_TYPES = {
  CLASSIFY_UNIT: 'classifyUnit',
  GET_SETTINGS: 'getSettings',
  UPDATE_SETTINGS: 'updateSettings',
  CLEAR_CACHE: 'clearCache',
  GET_STATS: 'getStats',
  INCREMENT_STAT: 'incrementStat',
} as const;

export type MessageType = typeof MESSAGE_TYPES[keyof typeof MESSAGE_TYPES];

// ============================================================================
// Validation Helpers
// ============================================================================

/**
 * Validate a ContentUnit object against the schema.
 * Throws ZodError if invalid.
 */
export function validateContentUnit(unit: unknown): ContentUnit {
  return ContentUnitSchema.parse(unit);
}

/**
 * Validate a ClassificationResult object against the schema.
 */
export function validateClassificationResult(result: unknown): ClassificationResult {
  return ClassificationResultSchema.parse(result);
}

/**
 * Validate UserSettings against the schema.
 */
export function validateUserSettings(settings: unknown): UserSettings {
  return UserSettingsSchema.parse(settings);
}

// ============================================================================
// Enhanced Statistics
// ============================================================================

export const EnhancedStatsSchema = z.object({
  totalFiltered: z.number().default(0),
  byAction: z.object({
    hide: z.number().default(0),
    blur: z.number().default(0),
    neutralize: z.number().default(0),
    collapse: z.number().default(0),
  }).default({ hide: 0, blur: 0, neutralize: 0, collapse: 0 }),
  byPreset: z.object({
    politics: z.number().default(0),
    ragebait: z.number().default(0),
    spoilers: z.number().default(0),
    clickbait: z.number().default(0),
  }).default({ politics: 0, ragebait: 0, spoilers: 0, clickbait: 0 }),
  timeSaved: z.number().default(0),
  topFilteredSources: z.array(z.string()).default([]),
  dailyHistory: z.array(z.object({
    date: z.string(),
    count: z.number(),
  })).default([]),
  lastReset: z.number().default(Date.now()),
});

export type EnhancedStats = z.infer<typeof EnhancedStatsSchema>;

export const defaultEnhancedStats: EnhancedStats = {
  totalFiltered: 0,
  byAction: { hide: 0, blur: 0, neutralize: 0, collapse: 0 },
  byPreset: { politics: 0, ragebait: 0, spoilers: 0, clickbait: 0 },
  timeSaved: 0,
  topFilteredSources: [],
  dailyHistory: [],
  lastReset: Date.now(),
};

// ============================================================================
// Statistics (Legacy)
// ============================================================================

/**
 * Statistics about content filtering activity.
 */
export interface Stats {
  totalFiltered: number;
  lastReset: number;
}


