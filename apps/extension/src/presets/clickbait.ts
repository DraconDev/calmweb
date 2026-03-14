/**
 * Clickbait Preset for CalmWeb
 * 
 * Filters sensationalist, misleading, and clickbait headlines.
 */

import type { FilterPreset } from './types';

export const clickbaitPreset: FilterPreset = {
  id: 'clickbait',
  name: 'Clickbait Filter',
  description: 'Clean up sensationalist and misleading headlines',
  version: '1.0.0',
  updated: '2024-01-15',
  author: 'CalmWeb',
  
  patterns: {
    keywords: [
      'you need to see', 'you have to see', 'must watch', 'must read',
      'mind blowing', 'mind-blowing', 'mindblowing',
      'will shock you', 'shocking', 'shocked', 'shock',
      'secret', 'secrets', 'they don\'t want you to know', 'don\'t want you to know',
      'doctors hate him', 'hate him', 'hate her',
      'one weird trick', 'weird trick', 'simple trick',
      'this simple', 'this one simple', 'just one',
      'miracle', 'miraculous', 'amazing', 'incredible', 'unbelievable',
      'you\'ll never guess', 'never guess', 'guess what',
      'jaw-dropping', 'jaw dropping', 'dropped my jaw',
      'life changing', 'life-changing', 'changed my life',
      'hack', 'hacks', 'life hack', 'lifehacks',
      'cheat', 'cheats', 'cheat code', 'shortcut',
      'this is why', 'here\'s why', 'the reason why',
      'what happened next', 'happened next', 'then this happened',
      'you won\'t believe', 'cannot believe', 'can\'t believe',
      'number [0-9]+ will', 'number [0-9]+ is',
      'only [0-9]+ people know',
      'nobody tells you', 'no one tells you', 'nobody told you',
      'things you need to know', 'things you should know',
      'reasons why', 'reasons you', 'ways to',
      'tips for', 'secrets to', 'tricks for',
      'will leave you', 'will make you',
      'need to know', 'should know', 'have to know',
      'things that will', 'ways that will',
      'number one', 'number 1', 'top 10', 'top ten',
      'best kept secret', 'well kept secret',
      'what happens when', 'see what happens',
      'try this', 'do this',
    ],
    channels: [
      'buzzfeed', 'buzfeed', 'buzz feed',
      'clickhole', 'click hole',
      'upworthy', 'up worthy',
      'viralnova', 'viral nova',
      'diply', 'thatscoop',
      'interesting thingss',
    ],
    regex: [
      '\\b(you\\s+won\'t\\s+believe)\\b',
      '\\b(doctors\\s+hate\\s+him)\\b',
      '\\b(one\\s+weird\\s+trick)\\b',
      '\\b(mind\\s*-?\\s*blowing)\\b',
      '\\b(jaw\\s*-?\\s*dropping)\\b',
      '\\b(life\\s*-?\\s*changing)\\b',
      '\\b(what\\s+happened\\s+next\\s+will)\\b',
      '\\b(number\\s+\\d+\\s+(will|is|shock))\\b',
      '\\b(only\\s+\\d+\\s+(people|percent)\\s+know)\\b',
    ],
  },
  
  actions: {
    default: 'collapse',
    confidence: 0.8,
  },
};