/**
 * CalmWeb Reader API Client
 * 
 * Calls YOUR backend API for AI-powered page analysis.
 * The backend handles AI (OpenRouter/self-hosted) and quotas.
 */

import type { UserSettings } from '@calmweb/shared';

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
  quota?: {
    used: number;
    limit: number;
    remaining: number;
  };
  error?: string;
}

interface ApiConfig {
  endpoint: string;
  apiKey: string;
}

function getApiConfig(settings: UserSettings): ApiConfig | null {
  if (settings.reader?.apiEndpoint && settings.reader?.apiKey) {
    return {
      endpoint: settings.reader.apiEndpoint,
      apiKey: settings.reader.apiKey,
    };
  }
  return null;
}

export async function analyzePageWithBackend(
  request: AnalysisRequest,
  settings: UserSettings
): Promise<AnalysisResponse> {
  const config = getApiConfig(settings);

  if (!config) {
    return {
      success: false,
      title: request.title,
      summary: '',
      filteredContent: request.text.slice(0, 10000),
      confidence: 0,
      decisions: [],
      error: 'API not configured. Please set up your CalmWeb API key.',
    };
  }

  try {
    const response = await fetch(`${config.endpoint}/api/v1/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`,
        'X-CalmWeb-Version': '1.0',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        title: request.title,
        summary: '',
        filteredContent: request.text.slice(0, 10000),
        confidence: 0,
        decisions: [],
        error: errorData.message || `API error: ${response.status}`,
      };
    }

    const data = await response.json() as AnalysisResponse;
    return data;
  } catch (err: any) {
    return {
      success: false,
      title: request.title,
      summary: '',
      filteredContent: request.text.slice(0, 10000),
      confidence: 0,
      decisions: [],
      error: err.message || 'Network error',
    };
  }
}

export function isApiConfigured(settings: UserSettings): boolean {
  return getApiConfig(settings) !== null;
}

export function getQuotaInfo(settings: UserSettings): { used: number; limit: number; remaining: number } | null {
  const config = getApiConfig(settings);
  if (!config) return null;
  
  return {
    used: 0,
    limit: 100,
    remaining: 100,
  };
}
