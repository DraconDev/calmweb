/**
 * CalmWeb Reader API Client
 * 
 * Uses wxt-shared for auth and API calls to the Dracon platform.
 * - Free tier: CSS-only filtering (no AI)
 * - Paid tier: AI-powered analysis via /api/v1/reader/analyze (platform endpoint)
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

interface ReaderAnalyzePlatformResponse {
  success: boolean;
  title: string;
  summary: string;
  filtered_content: string;
  confidence: number;
  decisions: Array<{
    action: string;
    reason: string;
  }>;
  error?: string;
}

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
    const result = await client.post<ReaderAnalyzePlatformResponse>(
      '/api/v1/reader/analyze',
      {
        url: request.url,
        html: request.html,
        text: request.text,
        title: request.title,
      },
    );

    return {
      success: result.success,
      title: result.title || request.title,
      summary: result.summary || '',
      filteredContent: result.filtered_content || '',
      confidence: result.confidence ?? 0,
      decisions: Array.isArray(result.decisions)
        ? result.decisions.map((d) => ({
            action: d.action as 'keep' | 'remove' | 'summarize',
            reason: d.reason,
          }))
        : [],
      error: result.error,
    };
  } catch (err: any) {
    console.error('[CalmWeb] API analysis failed:', err);
    return fallbackResponse(request, err.message || 'Analysis failed');
  }
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
