/**
 * Spoilers Preset for CalmWeb
 * 
 * Protects against plot leaks, endings, and spoilers for media content.
 */

import type { FilterPreset } from './types';

export const spoilersPreset: FilterPreset = {
  id: 'spoilers',
  name: 'Spoiler Shield',
  description: 'Protect your experience from plot leaks and endings',
  version: '1.0.0',
  updated: '2024-01-15',
  author: 'CalmWeb',
  
  patterns: {
    keywords: [
      'spoiler', 'spoilers', 'spoil', 'spoiled',
      'ending', 'ending explained', 'ending revealed', 'the ending',
      'twist', 'plot twist', 'surprise ending', 'shocking ending',
      'dies', 'death', 'killed', 'murdered', 'murder', 'killer',
      'plot leak', 'leaked', 'leaks',
      'revealed', 'revelation', 'reveal',
      'finale', 'season finale', 'series finale', 'final episode',
      'who did it', 'whodunit', 'the killer is', 'the culprit',
      'secret ending', 'alternate ending', 'post-credits',
      'after credits', 'mid-credits', 'easter egg',
      'explained', 'breakdown', 'analysis',
      'character death', 'main character dies',
    ],
    channels: [],
    regex: [
      '\\b(spoiler\\s*(alert|warning|below)?)\\b',
      '\\b(ending\\s+(explained|revealed|breakdown))\\b',
      '\\b(.*\\s+dies\\s+in\\s+.*)\\b',
      '\\b(who\\s+(dies|is\\s+the\\s+killer))\\b',
      '\\b(plot\\s+(twist|leak|hole))\\b',
      '\\b([a-z]+\\s+is\\s+the\\s+killer)\\b',
    ],
  },
  
  actions: {
    default: 'blur',
    confidence: 0.75,
  },
};