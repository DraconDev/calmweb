import type { UserSettings } from '@calmweb/shared';
import type { RewriteMode, RewriteResult } from './rewriter';

interface LLMRewriteResponse {
  rewritten: string;
  changes: Array<{
    original: string;
    replacement: string;
    reason: string;
  }>;
}

function buildSystemPrompt(mode: RewriteMode): string {
  const modeDescriptions: Record<RewriteMode, string> = {
    light: 'Only remove extreme emotional manipulation and obvious clickbait patterns.',
    medium: 'Remove emotional language while preserving the core message and tone.',
    strict: 'Transform to clinical, fact-only text. Remove all emotional content.',
  };

  return `You are a text neutralization assistant for CalmWeb.

Your job is to rewrite headlines and titles to be:
- Factual and neutral
- Free of emotional manipulation
- Accurate to the original meaning
- Concise (prefer shorter when possible)

Mode: ${mode}
${modeDescriptions[mode]}

Rules:
1. Keep the core factual information
2. Remove: sensationalism, emotional triggers, clickbait patterns, partisan language
3. Use neutral, objective language
4. If the original is already neutral, return it unchanged
5. Preserve the approximate length - don't make it much longer or shorter

Respond with JSON only, no markdown:
{ "rewritten": "...", "changes": [{ "original": "...", "replacement": "...", "reason": "..." }] }`;
}

function buildUserPrompt(text: string): string {
  return `Rewrite this headline/title to be neutral and factual:

"${text}"

Return JSON with the rewritten text and list of changes made.`;
}

interface LLMConfig {
  endpoint: string;
  apiKey: string;
  model: string;
}

function getLLMConfig(settings: UserSettings): LLMConfig | null {
  if (settings.processingMode === 'byok_llm' && settings.byokKey) {
    return {
      endpoint: 'https://api.openai.com/v1/chat/completions',
      apiKey: settings.byokKey,
      model: 'gpt-3.5-turbo',
    };
  }
  return null;
}

async function callLLM(
  text: string,
  mode: RewriteMode,
  config: LLMConfig
): Promise<LLMRewriteResponse> {
  const response = await fetch(config.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        { role: 'system', content: buildSystemPrompt(mode) },
        { role: 'user', content: buildUserPrompt(text) },
      ],
      temperature: 0.3,
      max_tokens: 200,
    }),
  });

  if (!response.ok) {
    throw new Error(`LLM request failed: ${response.status}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  
  if (!content) {
    throw new Error('No content in LLM response');
  }

  try {
    return JSON.parse(content) as LLMRewriteResponse;
  } catch {
    return {
      rewritten: content.trim(),
      changes: [],
    };
  }
}

export async function rewriteWithLLM(
  text: string,
  options: { mode: RewriteMode },
  settings: UserSettings
): Promise<RewriteResult> {
  const config = getLLMConfig(settings);
  if (!config) {
    throw new Error('LLM not configured');
  }

  const response = await callLLM(text, options.mode, config);

  const changes = response.changes.map(c => ({
    original: c.original,
    replacement: c.replacement,
    reason: c.reason,
  }));

  const confidence = response.rewritten !== text 
    ? Math.min(0.95, 0.7 + (changes.length * 0.05))
    : 1.0;

  return {
    original: text,
    rewritten: response.rewritten,
    changes,
    confidence,
    mode: options.mode,
  };
}

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  
  if (!content) {
    throw new Error('No content in LLM response');
  }

  try {
    return JSON.parse(content) as LLMRewriteResponse;
  } catch {
    return {
      rewritten: content.trim(),
      changes: [],
    };
  }
}

async function callHostedLLM(
  text: string,
  mode: RewriteMode,
  settings: UserSettings
): Promise<LLMRewriteResponse> {
  if (!settings.hostedApiKey) {
    throw new Error('Hosted LLM not configured');
  }

  const endpoint = settings.hostedEndpoint || 'https://api.openai.com/v1/chat/completions';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${settings.hostedApiKey}`,
    },
    body: JSON.stringify({
      model: settings.hostedModel || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: buildSystemPrompt(mode) },
        { role: 'user', content: buildUserPrompt(text) },
      ],
      temperature: 0.3,
      max_tokens: 200,
    }),
  });

  if (!response.ok) {
    throw new Error(`Hosted LLM request failed: ${response.status}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  
  if (!content) {
    throw new Error('No content in hosted LLM response');
  }

  try {
    return JSON.parse(content) as LLMRewriteResponse;
  } catch {
    return {
      rewritten: content.trim(),
      changes: [],
    };
  }
}

export async function rewriteWithLLM(
  text: string,
  options: { mode: RewriteMode },
  settings: UserSettings
): Promise<RewriteResult> {
  let response: LLMRewriteResponse;

  if (settings.processingMode === 'byok') {
    response = await callBYOKLLM(text, options.mode, settings);
  } else if (settings.processingMode === 'hosted') {
    response = await callHostedLLM(text, options.mode, settings);
  } else {
    throw new Error('No LLM processing mode configured');
  }

  const changes: TextChange[] = response.changes.map(c => ({
    original: c.original,
    replacement: c.replacement,
    reason: c.reason,
  }));

  const confidence = response.rewritten !== text 
    ? Math.min(0.95, 0.7 + (changes.length * 0.05))
    : 1.0;

  return {
    original: text,
    rewritten: response.rewritten,
    changes,
    confidence,
    mode: options.mode,
  };
}