/**
 * Preset Types for CalmWeb
 */

import type { ActionDecision } from '@calmweb/shared';

export interface FilterPattern {
  keywords?: string[];
  channels?: string[];
  regex?: string[];
  domains?: string[];
}

export interface FilterPreset {
  id: string;
  name: string;
  description: string;
  version: string;
  updated: string;
  author?: string;
  patterns: FilterPattern;
  actions: {
    default: ActionDecision;
    confidence: number;
  };
  enabled?: boolean;
}

export interface SmartPreset {
  id: string;
  name: string;
  description: string;
  combines: string[];
  overrides?: {
    [presetId: string]: Partial<FilterPreset['actions']>;
  };
}

export const SMART_PRESETS: SmartPreset[] = [
  {
    id: 'no-negativity',
    name: 'No Negativity',
    description: 'Block all negative content: ragebait, clickbait, and harsh politics',
    combines: ['ragebait', 'clickbait'],
    overrides: {
      politics: { default: 'collapse', confidence: 0.7 },
    },
  },
  {
    id: 'focus-mode',
    name: 'Focus Mode',
    description: 'Maximum filtering for distraction-free browsing',
    combines: ['politics', 'ragebait', 'clickbait'],
    overrides: {
      politics: { default: 'hide' },
      ragebait: { default: 'hide' },
      clickbait: { default: 'collapse' },
    },
  },
  {
    id: 'entertainment-only',
    name: 'Entertainment Only',
    description: 'Hide news, politics, and serious topics',
    combines: ['politics'],
    overrides: {
      politics: { default: 'hide', confidence: 0.95 },
    },
  },
];