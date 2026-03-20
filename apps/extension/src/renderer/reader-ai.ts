/**
 * AI-Powered Reader Analyzer for CalmWeb Super Reader
 * 
 * Uses AI to analyze page content and decide what to show/filter.
 */

import { OPENROUTER_ENDPOINT, DEFAULT_OPENROUTER_MODEL } from '@calmweb/shared';
import type { UserSettings } from '@calmweb/shared';

export interface ContentDecision {
  selector?: string;
  action: 'keep' | 'remove' | 'summarize';
  reason: string;
  content?: string;
}

export interface ReaderAnalysisResult {
  title: string;
  decisions: ContentDecision[];
  summary: string;
  filteredContent: string;
  confidence: number;
}

interface LLMConfig {
  endpoint: string;
  apiKey: string;
  model: string;
}

function getLLMConfig(settings: UserSettings): LLMConfig | null {
  if (settings.processingMode === 'byok_llm' && settings.byokKey) {
    return {
      endpoint: settings.customEndpoint || OPENROUTER_ENDPOINT,
      apiKey: settings.byokKey,
      model: settings.aiModel || DEFAULT_OPENROUTER_MODEL,
    };
  }
  if (settings.processingMode === 'hosted_llm' && settings.byokKey) {
    return {
      endpoint: settings.customEndpoint || OPENROUTER_ENDPOINT,
      apiKey: settings.byokKey,
      model: settings.aiModel || DEFAULT_OPENROUTER_MODEL,
    };
  }
  return null;
}

function buildSystemPrompt(): string {
  return `You are CalmWeb's Super Reader analyzer. Your job is to extract clean, meaningful content from web pages.

Analyze the page content and decide what should be shown to the user. You must respond with ONLY valid JSON, no markdown or explanation.

Output format:
{
  "title": "Clean, readable title (or original if already good)",
  "summary": "2-3 sentence summary of the main content",
  "decisions": [
    {"action": "keep", "reason": "Main article content"},
    {"action": "remove", "reason": "Navigation menu"},
    {"action": "remove", "reason": "Advertisement"},
    {"action": "summarize", "reason": "Comments section - too noisy", "content": "12 user comments summarized: [key points]"}
  ],
  "filteredContent": "The main content to display, as clean HTML. Preserve: headings (h1-h6), paragraphs, lists (ul/ol), tables, links (mark as safe), images (with alt text). Remove: ads, nav, sidebars, footers, modals, cookie notices, social widgets.",
  "confidence": 0.85
}

Rules:
1. "filteredContent" should be valid HTML with semantic tags preserved
2. Links should be kept but marked safe - AI will add rel="noopener" later
3. Images should be kept if they're content (not icons/ads)
4. Tables should be preserved for data
5. Remove: nav, aside, footer, header, ads, comments, social-share, newsletter popups, cookie banners, sticky elements, hidden elements
6. Keep: article body, product info, forum threads, documentation, recipes, any meaningful content
7. If page is primarily comments/forum thread, summarize the discussion
8. confidence: how sure you are (0.5-1.0), lower if page is complex/messy`;
}

function buildUserPrompt(pageContent: {
  title: string;
  url: string;
  html: string;
  text: string;
}): string {
  return `Analyze this web page and extract what should be shown:

URL: ${pageContent.url}
Original Title: ${pageContent.title}

Page HTML (abbreviated):
${pageContent.html.slice(0, 8000)}

Plain text content:
${pageContent.text.slice(0, 5000)}

Respond with JSON only.`;
}

interface OpenRouterResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
}

async function callOpenRouter(
  prompt: string,
  config: LLMConfig
): Promise<string> {
  const response = await fetch(config.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey.trim()}`,
      'HTTP-Referer': 'https://calmweb.app',
      'X-OpenRouter-Title': 'CalmWeb',
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        { role: 'system', content: buildSystemPrompt() },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 2000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter error: ${response.status} - ${errorText}`);
  }

  const data: OpenRouterResponse = await response.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    if (data.error?.message) {
      throw new Error(`OpenRouter error: ${data.error.message}`);
    }
    throw new Error('No content in OpenRouter response');
  }

  return content;
}

function parseAIResponse(content: string): ReaderAnalysisResult {
  try {
    const cleaned = content.replace(/```json\n?/g, '').replace(/```\n?$/g, '').trim();
    const parsed = JSON.parse(cleaned);

    return {
      title: parsed.title || 'Untitled',
      decisions: parsed.decisions || [],
      summary: parsed.summary || '',
      filteredContent: parsed.filteredContent || '',
      confidence: Math.max(0.5, Math.min(1.0, parsed.confidence || 0.8)),
    };
  } catch (err) {
    console.error('[CalmWeb] Failed to parse AI response:', err);
    return {
      title: 'Untitled',
      decisions: [],
      summary: 'AI analysis failed',
      filteredContent: '',
      confidence: 0,
    };
  }
}

export async function analyzeWithAI(
  pageContent: {
    title: string;
    url: string;
    html: string;
    text: string;
  },
  settings: UserSettings
): Promise<ReaderAnalysisResult> {
  const config = getLLMConfig(settings);

  if (!config) {
    console.warn('[CalmWeb] AI not configured, using fallback');
    return {
      title: pageContent.title,
      decisions: [],
      summary: '',
      filteredContent: pageContent.text.slice(0, 10000),
      confidence: 0,
    };
  }

  try {
    const prompt = buildUserPrompt(pageContent);
    const response = await callOpenRouter(prompt, config);
    const result = parseAIResponse(response);

    console.log('[CalmWeb] AI analysis complete, confidence:', result.confidence);
    return result;
  } catch (err) {
    console.error('[CalmWeb] AI analysis failed:', err);
    return {
      title: pageContent.title,
      decisions: [],
      summary: '',
      filteredContent: pageContent.text.slice(0, 10000),
      confidence: 0,
    };
  }
}

export function applyAIDecisions(
  content: HTMLElement,
  decisions: ContentDecision[]
): void {
  for (const decision of decisions) {
    if (decision.action === 'remove' && decision.selector) {
      try {
        content.querySelectorAll(decision.selector).forEach(el => el.remove());
      } catch {
        // Invalid selector, skip
      }
    }
  }
}

export function sanitizeFilteredHTML(html: string): string {
  const doc = document.createElement('div');
  doc.innerHTML = html;

  doc.querySelectorAll('a').forEach(a => {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });

  doc.querySelectorAll('script, style, iframe:not([src*="youtube"]):not([src*="vimeo"])').forEach(el => el.remove());

  return doc.innerHTML;
}
