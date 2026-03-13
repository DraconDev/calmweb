/**
 * Neutralizer Types for CalmWeb
 */

export interface SentimentResult {
  score: number;        // -1 (very negative) to +1 (very positive)
  magnitude: number;    // 0 to 1, intensity of emotion
  emotions: {
    anger: number;
    fear: number;
    sadness: number;
    joy: number;
    disgust: number;
  };
}

export type ToneType = 
  | 'neutral' 
  | 'ragebait' 
  | 'clickbait' 
  | 'fear-mongering' 
  | 'misleading' 
  | 'manipulative'
  | 'sensational';

export interface ToneResult {
  primary: ToneType;
  confidence: number;
  indicators: string[];
}

export interface TextChange {
  original: string;
  replacement: string;
  reason: string;
}

export interface RewriteResult {
  original: string;
  rewritten: string;
  changes: TextChange[];
  confidence: number;
  tone?: ToneType;
}

export type NeutralizationMode = 'light' | 'medium' | 'strict' | 'custom';

export interface NeutralizationOptions {
  mode: NeutralizationMode;
  preserveFacts: boolean;
  maxLength?: number;
  customRules?: NeutralizationRule[];
}

export interface NeutralizationRule {
  pattern: string | RegExp;
  replacement: string;
  mode: NeutralizationMode | 'all';
  description?: string;
}

export interface NeutralizationSettings {
  enabled: boolean;
  mode: NeutralizationMode;
  showIndicator: boolean;
  showDiffOnHover: boolean;
  preserveDomains: string[];
}