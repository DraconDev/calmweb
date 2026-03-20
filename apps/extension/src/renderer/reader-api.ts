/**
 * CalmWeb Reader API Client
 * 
 * Uses wxt-shared for auth and API calls to the Dracon platform.
 * - Free tier: CSS-only filtering (no AI)
 * - Paid tier: AI-powered analysis via /api/v1/reader/analyze
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
    return {
      success: false,
      title: request.title,
      summary: '',
      filteredContent: request.text.slice(0, 10000),
      confidence: 0,
      decisions: [],
      error: 'API client not available',
    };
  }

  try {
    const quota = await getQuotaInfo();
    
    if (!quota.isPaidUser || quota.remaining <= 0) {
      return {
        success: false,
        title: request.title,
        summary: '',
        filteredContent: request.text.slice(0, 10000),
        confidence: 0,
        decisions: [],
        error: quota.isPaidUser 
          ? 'No analyses remaining. Upgrade for unlimited access.'
          : 'AI analysis requires a subscription.',
      };
    }

    const response = await client.post<AnalysisResponse>(
      '/api/v1/reader/analyze',
      request
    );

    return response;
  } catch (err: any) {
    console.error('[CalmWeb] API analysis failed:', err);
    return {
      success: false,
      title: request.title,
      summary: '',
      filteredContent: request.text.slice(0, 10000),
      confidence: 0,
      decisions: [],
      error: err.message || 'Analysis failed',
    };
  }
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
