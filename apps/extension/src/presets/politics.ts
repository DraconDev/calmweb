/**
 * Politics Preset for CalmWeb
 * 
 * Filters political content including election coverage, partisan debates,
 * and political commentary.
 */

import type { FilterPreset } from './types';

export const politicsPreset: FilterPreset = {
  id: 'politics',
  name: 'Politics Shield',
  description: 'Hide election, partisan debates, and political commentary',
  version: '1.0.0',
  updated: '2024-01-15',
  author: 'CalmWeb',
  
  patterns: {
    keywords: [
      'election', 'vote', 'voting', 'ballot', 'campaign', 'candidate', 'poll', 'polling',
      'democrat', 'democratic', 'republican', 'gop', 'liberal', 'conservative',
      'progressive', 'socialist', 'marxist', 'libertarian',
      'biden', 'trump', 'obama', 'clinton', 'sanders', 'pelosi', 'mcconnell',
      'congress', 'senate', 'house', 'white house', 'president', 'presidential',
      'parliament', 'prime minister', 'mp ', 'legislature', 'legislative',
      'political', 'politics', 'partisan', 'bipartisan',
      'left-wing', 'right-wing', 'far-left', 'far-right',
      'cnn', 'fox news', 'msnbc', 'breitbart', 'huffpost', 'politico', 'the hill',
      'voter', 'constituent', 'constituency',
      'dem', 'repub', 'lib', 'con',
    ],
    channels: [
      'cnn', 'fox news', 'msnbc', 'bbc news', 'abc news', 'nbc news', 'cbs news',
      'politico', 'the hill', 'breitbart', 'huffpost', 'vox', 'slate', 'salon',
      'daily wire', 'the blaze', 'infowars', 'the young turks',
      'new york times', 'washington post', 'wall street journal',
      'guardian', 'telegraph', 'independent',
      'the economist', 'foreign policy', 'foreign affairs',
      'joe rogan', 'ben shapiro', 'tucker carlson', 'rachel maddow',
      'sean hannity', 'laura ingraham', 'chris hayes',
    ],
    regex: [
      '\\b(20\\d{2}\\s+(election|presidential))\\b',
      '\\b(vote\\s+(for|against|blue|red|dem|rep))\\b',
      '\\b(democrat(ic)?\\s+(party|candidate|platform))\\b',
      '\\b(republican\\s+(party|candidate|platform))\\b',
      '\\b(midterm\\s+elections?)\\b',
      '\\b(primary\\s+(election|season|day))\\b',
    ],
  },
  
  actions: {
    default: 'collapse',
    confidence: 0.85,
  },
};