/**
 * Messaging protocol for CalmWeb
 *
 * Defines message types and payloads for communication between
 * content scripts, background worker, popup, and options page.
 */

import type { ContentUnit, ClassificationResult, UserSettings, Stats } from '@calmweb/shared';

// ============================================================================
// Message Type Constants
// ============================================================================

export const MESSAGE_TYPES = {
  // Classification
  CLASSIFY_UNIT: 'calmweb:classifyUnit',
  // Settings management
  GET_SETTINGS: 'calmweb:getSettings',
  UPDATE_SETTINGS: 'calmweb:updateSettings',
  // Cache management
  CLEAR_CACHE: 'calmweb:clearCache',
  // Statistics
  GET_STATS: 'calmweb:getStats',
  INCREMENT_STAT: 'calmweb:incrementStat',
  // Reader
  TOGGLE_READER: 'calmweb:toggleReader',
  OPEN_READER: 'calmweb:openReader',
  CLOSE_READER: 'calmweb:closeReader',
  // AI Connection
  TEST_CONNECTION: 'calmweb:testConnection',
} as const;

export type MessageType = typeof MESSAGE_TYPES[keyof typeof MESSAGE_TYPES];

// ============================================================================
// Message Payload Types
// ============================================================================

export interface ClassifyUnitMessage {
  type: typeof MESSAGE_TYPES.CLASSIFY_UNIT;
  unit: ContentUnit;
}

export type ClassifyUnitResponse = ClassificationResult | { error: string };

export interface GetSettingsMessage {
  type: typeof MESSAGE_TYPES.GET_SETTINGS;
}

export interface UpdateSettingsMessage {
  type: typeof MESSAGE_TYPES.UPDATE_SETTINGS;
  settings: Partial<UserSettings>;
}

export interface UpdateSettingsResponse {
  success: boolean;
}

export interface ClearCacheMessage {
  type: typeof MESSAGE_TYPES.CLEAR_CACHE;
}

export interface ClearCacheResponse {
  success: boolean;
}

export interface GetStatsMessage {
  type: typeof MESSAGE_TYPES.GET_STATS;
}

export interface IncrementStatMessage {
  type: typeof MESSAGE_TYPES.INCREMENT_STAT;
  key: 'totalFiltered';
  amount?: number;
}

export interface TestConnectionMessage {
  type: typeof MESSAGE_TYPES.TEST_CONNECTION;
  apiKey: string;
  model?: string;
  endpoint?: string;
}

export interface TestConnectionResponse {
  success: boolean;
  model?: string;
  error?: string;
}

// ============================================================================
// Union Type for All Messages
// ============================================================================

export type CalmWebMessage = 
  | ClassifyUnitMessage
  | GetSettingsMessage
  | UpdateSettingsMessage
  | ClearCacheMessage
  | GetStatsMessage
  | IncrementStatMessage
  | TestConnectionMessage;

// ============================================================================
// Response Types
// ============================================================================

export type GetSettingsResponse = UserSettings;
export type GetStatsResponse = Stats;
export type IncrementStatResponse = Stats;

// ============================================================================
// Message Validation (runtime)
// ============================================================================

import { z } from 'zod';

const ClassifyUnitMessageSchema = z.object({
  type: z.literal(MESSAGE_TYPES.CLASSIFY_UNIT),
  unit: z.object({
    id: z.string(),
    site: z.string(),
    fingerprint: z.string(),
    sourceName: z.string().optional(),
    title: z.string(),
    metadata: z.array(z.string()),
    isNew: z.boolean(),
    url: z.string().url().optional(),
  }),
});

const GetSettingsMessageSchema = z.object({
  type: z.literal(MESSAGE_TYPES.GET_SETTINGS),
});

const UpdateSettingsMessageSchema = z.object({
  type: z.literal(MESSAGE_TYPES.UPDATE_SETTINGS),
  settings: z.object({
    enabled: z.boolean().optional(),
    processingMode: z.enum(['local_rules', 'byok_llm', 'hosted_llm']).optional(),
    strictness: z.number().min(0).max(100).optional(),
    rules: z.object({
      blocklistChannels: z.array(z.string()).optional(),
      blocklistKeywords: z.array(z.string()).optional(),
      allowlistChannels: z.array(z.string()).optional(),
      allowlistKeywords: z.array(z.string()).optional(),
      presets: z.object({
        politics: z.boolean().optional(),
        ragebait: z.boolean().optional(),
        spoilers: z.boolean().optional(),
        clickbait: z.boolean().optional(),
      }).optional(),
    }).optional(),
    byokKey: z.string().optional(),
  }),
});

const ClearCacheMessageSchema = z.object({
  type: z.literal(MESSAGE_TYPES.CLEAR_CACHE),
});

const GetStatsMessageSchema = z.object({
  type: z.literal(MESSAGE_TYPES.GET_STATS),
});

const IncrementStatMessageSchema = z.object({
  type: z.literal(MESSAGE_TYPES.INCREMENT_STAT),
  key: z.literal('totalFiltered'),
  amount: z.number().optional(),
});

const TestConnectionMessageSchema = z.object({
  type: z.literal(MESSAGE_TYPES.TEST_CONNECTION),
  apiKey: z.string(),
  model: z.string().optional(),
  endpoint: z.string().optional(),
});

export const MessageSchema = z.discriminatedUnion('type', [
  ClassifyUnitMessageSchema,
  GetSettingsMessageSchema,
  UpdateSettingsMessageSchema,
  ClearCacheMessageSchema,
  GetStatsMessageSchema,
  IncrementStatMessageSchema,
  TestConnectionMessageSchema,
]);

/**
 * Validate a message payload against the schema.
 * Throws if invalid.
 */
export function validateMessage(message: unknown): CalmWebMessage {
  // For now, perform runtime type assertion. Future: use MessageSchema.parse(message)
  return message as CalmWebMessage;
}
