/**
 * Preset Libraries for CalmWeb
 * 
 * Curated filter presets for common content categories.
 */

import type { FilterPreset, SmartPreset } from './types';
import { SMART_PRESETS } from './types';

export { type FilterPreset, type SmartPreset, type FilterPattern, SMART_PRESETS } from './types';
export { politicsPreset } from './politics';
export { ragebaitPreset } from './ragebait';
export { spoilersPreset } from './spoilers';
export { clickbaitPreset } from './clickbait';

import { politicsPreset } from './politics';
import { ragebaitPreset } from './ragebait';
import { spoilersPreset } from './spoilers';
import { clickbaitPreset } from './clickbait';

export const PRESETS: Record<string, FilterPreset> = {
  politics: politicsPreset,
  ragebait: ragebaitPreset,
  spoilers: spoilersPreset,
  clickbait: clickbaitPreset,
};

export function getPreset(id: string): FilterPreset | undefined {
  return PRESETS[id];
}

export function getAllPresets(): FilterPreset[] {
  return Object.values(PRESETS);
}

export function getSmartPreset(id: string): SmartPreset | undefined {
  return SMART_PRESETS.find(p => p.id === id);
}

export function getSmartPresets(): SmartPreset[] {
  return SMART_PRESETS;
}

export function resolveSmartPreset(smart: SmartPreset): FilterPreset[] {
  const resolved: FilterPreset[] = [];
  
  for (const presetId of smart.combines) {
    const base = PRESETS[presetId];
    if (base) {
      const override = smart.overrides?.[presetId];
      if (override) {
        resolved.push({
          ...base,
          actions: { ...base.actions, ...override },
        });
      } else {
        resolved.push(base);
      }
    }
  }
  
  return resolved;
}

export function matchPresetKeywords(title: string, presetId: string): boolean {
  const preset = PRESETS[presetId];
  if (!preset) return false;
  
  const titleLower = title.toLowerCase();
  
  if (preset.patterns.keywords) {
    for (const kw of preset.patterns.keywords) {
      if (titleLower.includes(kw.toLowerCase())) {
        return true;
      }
    }
  }
  
  if (preset.patterns.regex) {
    for (const pattern of preset.patterns.regex) {
      try {
        const regex = new RegExp(pattern, 'i');
        if (regex.test(title)) {
          return true;
        }
      } catch {
        console.warn(`[Presets] Invalid regex in ${presetId}: ${pattern}`);
      }
    }
  }
  
  return false;
}

export function matchPresetChannel(sourceName: string | undefined, presetId: string): boolean {
  const preset = PRESETS[presetId];
  if (!preset || !sourceName || !preset.patterns.channels) return false;
  
  const sourceLower = sourceName.toLowerCase();
  
  for (const chan of preset.patterns.channels) {
    if (sourceLower.includes(chan.toLowerCase())) {
      return true;
    }
  }
  
  return false;
}