import { z } from 'zod';

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

export async function rewriteText(
  original: string,
  options: RewriteOptions,
): Promise<RewriteResult> {
  return rewriteWithLocalRules(original, { mode: options.mode });
}

export function shouldNeutralize(text: string, options: RewriteOptions): boolean {
  const local = rewriteWithLocalRules(text, { mode: options.mode });
  return local.changes.length > 0;
}
