import { z } from 'zod';
import type { UserSettings } from '@calmweb/shared';

export const RewriteModeSchema = z.enum(['light', 'medium', 'strict']);

export type RewriteMode = z.infer<typeof RewriteModeSchema>;

export const TextChangeSchema = z.object({
  original: z.string(),
  replacement: z.string(),
  reason: z.string(),
});

export type TextChange = z.infer<typeof TextChangeSchema>;

export const RewriteResultSchema = z.object({
  original: z.string(),
  rewritten: z.string(),
  changes: z.array(TextChangeSchema),
  confidence: z.number().min(0).max(1),
  mode: RewriteModeSchema,
});

export type RewriteResult = z.infer<typeof RewriteResultSchema>;

export interface RewriteOptions {
  mode: RewriteMode;
  preserveFacts: boolean;
  maxLength?: number;
}

import { rewriteWithLocalRules } from './local-rules';
import { rewriteWithLLM } from './llm-rewrite';

export async function rewriteText(
  original: string,
  options: RewriteOptions,
  settings: UserSettings
): Promise<RewriteResult> {
  const local = rewriteWithLocalRules(original, { mode: options.mode });
  
  if (local.confidence > 0.8 && local.changes.length > 0) {
    return local;
  }

  // Always try AI rewrite (we no longer support local-only mode)
  try {
      const llm = await rewriteWithLLM(original, { mode: options.mode }, settings);
      if (llm.confidence > local.confidence) {
        return llm;
      }
    } catch (error) {
      console.warn('[CalmWeb] LLM rewrite failed, using local result:', error);
    }
  }

  return local;
}

export function shouldNeutralize(text: string, options: RewriteOptions): boolean {
  const local = rewriteWithLocalRules(text, { mode: options.mode });
  return local.changes.length > 0;
}