/**
 * CalmWeb Shared Types and Schemas
 *
 * Core interfaces and Zod validation for the CalmWeb content firewall extension.
 */

import { z } from 'zod';

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
// Exports for TypeScript consumers
// ============================================================================

export type {
  ProcessingMode,
  ActionDecision,
  ContentUnit,
  ClassificationResult,
  UserSettings,
  UserRules,
  PresetSelection,
};
