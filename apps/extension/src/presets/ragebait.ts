/**
 * Ragebait Preset for CalmWeb
 * 
 * Filters content designed to trigger anger, outrage, or emotional responses.
 */

import type { FilterPreset } from './types';

export const ragebaitPreset: FilterPreset = {
  id: 'ragebait',
  name: 'Ragebait Shield',
  description: 'Silence content designed specifically to trigger anger',
  version: '1.0.0',
  updated: '2024-01-15',
  author: 'CalmWeb',
  
  patterns: {
    keywords: [
      'outrage', 'outraged', 'outraging', 'disgusting', 'horrific', 'terrible',
      'makes you mad', 'make you angry', 'will make you furious', 'this will enrage',
      'angry', 'furious', 'fume', 'fuming', 'rage', 'enraged', 'infuriating',
      'despicable', 'disgraceful', 'shameful', 'appalling', 'abhorrent',
      'rant', 'destroyed', 'demolished', 'annihilated', 'wrecked',
      'hate', 'hatred', 'hateful', 'loathe', 'despise',
      'scandal', 'scandalous', 'controversy', 'controversial',
      'exposed', 'caught', 'busted', 'blasted', 'slammed',
      'everyone is talking about', 'trending', 'viral',
      'backlash', 'uproar', 'firestorm', 'fury',
      'karen', 'entitled', 'bridezilla', 'choosing beggar',
      'faith in humanity', 'lost faith', 'lose faith',
      'instant karma', 'justice served', 'petty revenge',
      'audacity', 'the nerve', 'unacceptable',
      'blood boil', 'blood boiling', 'makes my blood',
      'lose your mind', 'losing my mind', 'lost my mind',
    ],
    channels: [],
    regex: [
      '\\b(this\\s+will\\s+make\\s+you\\s+(mad|angry|furious|rage))\\b',
      '\\b(you\\s+won\'t\\s+believe\\s+what)\\b',
      '\\b(outrage\\s+(over|at|after))\\b',
      '\\b(backlash\\s+(after|over|erupts))\\b',
      '\\b(everyone\\s+is\\s+(mad|angry|furious|outraged))\\b',
    ],
  },
  
  actions: {
    default: 'collapse',
    confidence: 0.8,
  },
};