/**
 * CalmWeb Reader API Client
 * 
 * Uses wxt-shared for auth and API calls to the Dracon platform.
 * - Free tier: CSS-only filtering (no AI)
 * - Paid tier: AI-powered analysis via /api/v1/chat/completions
 */

import { createApiClient } from '@dracon/wxt-shared/api';
import { createConfig } from '@dracon/wxt-shared/config';
import { createAuthStore, type AuthStore } from '@dracon/wxt-shared/storage';
import type { DraconConfig } from '@dracon/wxt-shared/config';

export interface AnalysisRequest {
  url: string;
  html: string;
  text: string;
  title: string;
}

export interface AnalysisResponse {
  success: boolean;
  title: string;
  summary: string;
  filteredContent: string;
  confidence: number;
  decisions: Array<{
    action: 'keep' | 'remove' | 'summarize';
    reason: string;
  }>;
  error?: string;
}

export interface QuotaInfo {
  total: number;
  used: number;
  remaining: number;
  isPaidUser: boolean;
}

const READER_SYSTEM_PROMPT = `You are a web page analyzer for CalmWeb, a browser extension that helps users read web pages more comfortably. Your task is to analyze the provided web page content and return a JSON response indicating what content should be kept, removed, or summarized.

Return a JSON object with this exact structure:
{
  "title": "improved or confirmed page title",
  "summary": "2-3 sentence summary of the main content",
  "filteredContent": "the cleaned main content with ads, navigation, and irrelevant elements removed",
  "confidence": 0.0-1.0 indicating how confident you are in the analysis,
  "decisions": [
    {"action": "keep"|"remove"|"summarize", "reason": "explanation"}
  ]
}

Rules:
- Keep the main article/story/content body
- Remove: ads, navigation menus, headers, footers, sidebars, comments (unless they add value), cookie notices, popups
- Summarize: long discussions, comment threads, nested replies
- Preserve: headings, paragraphs, lists, code blocks, images with alt text, links
- filteredContent should be plain text content, not raw HTML
- confidence should be lower for very messy/complex pages or pages with unusual structures`;

let apiClient: ReturnType<typeof createApiClient> | null = null;
let config: DraconConfig | null = null;

function getApiClient(): ReturnType<typeof createApiClient> | null {
  if (apiClient) return apiClient;

  try {
    config = createConfig({
      appName: 'CalmWeb',
    });

    const authStore = createAuthStore('sync:auth');

    apiClient = createApiClient({
      config,
      getAuth: () => authStore.getValue(),
      setAuth: (auth: AuthStore) => authStore.setValue(auth),
      onAuthError: () => {
        console.log('[CalmWeb] Auth error - user needs to log in');
      },
    });

    return apiClient;
  } catch (err) {
    console.error('[CalmWeb] Failed to initialize API client:', err);
    return null;
  }
}

export async function analyzePageWithBackend(
  request: AnalysisRequest
): Promise<AnalysisResponse> {
  const client = getApiClient();

  if (!client) {
    return fallbackResponse(request, 'API client not available');
  }

  try {
    const pageContext = `Page URL: ${request.url}\nPage Title: ${request.title}\n\nPage Content:\n${request.text}`;

    const completion = await client.chatCompletions({
      messages: [
        { role: 'system', content: READER_SYSTEM_PROMPT },
        { role: 'user', content: pageContext },
      ],
      stream: false,
    });

    const content = completion.choices[0]?.message?.content || '';
    return parseReaderResponse(content, request.title);
  } catch (err: any) {
    console.error('[CalmWeb] API analysis failed:', err);
    return fallbackResponse(request, err.message || 'Analysis failed');
  }
}

function parseReaderResponse(
  content: string,
  fallbackTitle: string,
): AnalysisResponse {
  const trimmed = content.trim();

  let jsonStr = trimmed;
  const codeBlockMatch = trimmed.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (codeBlockMatch) {
    jsonStr = codeBlockMatch[1];
  }

  const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        success: true,
        title: parsed.title || fallbackTitle,
        summary: parsed.summary || '',
        filteredContent: parsed.filteredContent || '',
        confidence: parsed.confidence ?? 0.5,
        decisions: Array.isArray(parsed.decisions) ? parsed.decisions : [],
        error: undefined,
      };
    } catch {
      // Fall through
    }
  }

  return {
    success: false,
    title: fallbackTitle,
    summary: '',
    filteredContent: trimmed.slice(0, 10000),
    confidence: 0,
    decisions: [],
    error: 'Failed to parse AI response as JSON',
  };
}

function fallbackResponse(
  request: AnalysisRequest,
  error: string,
): AnalysisResponse {
  return {
    success: false,
    title: request.title,
    summary: '',
    filteredContent: request.text.slice(0, 10000),
    confidence: 0,
    decisions: [],
    error,
  };
}

export async function getQuotaInfo(): Promise<QuotaInfo> {
  const client = getApiClient();

  if (!client) {
    return { total: 0, used: 0, remaining: 0, isPaidUser: false };
  }

  try {
    const [userResponse, quotaResponse] = await Promise.all([
      client.getUser(),
      client.getQuota(),
    ]);

    const isPaidUser = userResponse.subscription?.active || false;
    const remaining = isPaidUser ? quotaResponse.remaining : 0;

    return {
      total: quotaResponse.total,
      used: quotaResponse.used,
      remaining,
      isPaidUser,
    };
  } catch (err) {
    console.error('[CalmWeb] Failed to get quota:', err);
    return { total: 0, used: 0, remaining: 0, isPaidUser: false };
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const client = getApiClient();
  if (!client) return false;
  return client.isAuthenticated();
}

export async function openUpgradePage(): Promise<void> {
  const client = getApiClient();
  if (!client) return;

  const userResponse = await client.getUser().catch(() => null);

  if (userResponse?.subscription?.active) {
    console.log('[CalmWeb] User already has active subscription');
    return;
  }

  try {
    const { checkout_url } = await client.addQuota(100);
    if (checkout_url) {
      window.open(checkout_url, '_blank');
    }
  } catch (err) {
    console.error('[CalmWeb] Failed to open upgrade page:', err);
  }
}
