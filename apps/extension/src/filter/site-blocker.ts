/**
 * Site Blocker Module
 *
 * Blocks access to sites based on categories and custom blocklists.
 * Shows a blocked page instead of redirecting.
 */

import { 
  SITE_CATEGORIES, 
  getCategoryForDomain, 
  type SiteCategory 
} from './categories';

export interface SiteBlockSettings {
  enabled: boolean;
  blockedCategories: SiteCategory[];
  customBlocklist: string[];
  customAllowlist: string[];
  showBlockedPage: boolean;
  blockMessage: string;
}

export const defaultSiteBlockSettings: SiteBlockSettings = {
  enabled: true,
  blockedCategories: [],
  customBlocklist: [],
  customAllowlist: [],
  showBlockedPage: true,
  blockMessage: 'This site is blocked by CalmWeb Super Filter',
};

export interface BlockResult {
  blocked: boolean;
  reason: 'category' | 'custom' | 'allowlist';
  category?: SiteCategory;
  categoryInfo?: {
    name: string;
    icon: string;
  };
}

export function shouldBlockSite(
  domain: string, 
  settings: SiteBlockSettings
): BlockResult {
  if (!settings.enabled) {
    return { blocked: false, reason: 'allowlist' };
  }

  // Check allowlist first
  const normalizedDomain = domain.toLowerCase().replace(/^www\./, '');
  
  for (const allowed of settings.customAllowlist) {
    const normalizedAllowed = allowed.toLowerCase().replace(/^www\./, '');
    if (normalizedDomain === normalizedAllowed || normalizedDomain.endsWith('.' + normalizedAllowed)) {
      return { blocked: false, reason: 'allowlist' };
    }
  }

  // Check blocked categories
  const category = getCategoryForDomain(normalizedDomain);
  if (category && settings.blockedCategories.includes(category)) {
    const categoryInfo = SITE_CATEGORIES.find(c => c.id === category);
    return {
      blocked: true,
      reason: 'category',
      category,
      categoryInfo: categoryInfo ? {
        name: categoryInfo.name,
        icon: categoryInfo.icon,
      } : undefined,
    };
  }

  // Check custom blocklist
  for (const blocked of settings.customBlocklist) {
    const normalizedBlocked = blocked.toLowerCase().replace(/^www\./, '');
    if (normalizedDomain === normalizedBlocked || normalizedDomain.endsWith('.' + normalizedBlocked)) {
      return { blocked: true, reason: 'custom' };
    }
  }

  return { blocked: false, reason: 'allowlist' };
}

export function generateBlockedPageHTML(
  domain: string,
  result: BlockResult
): string {
  const categoryInfo = result.categoryInfo;
  const icon = categoryInfo?.icon || '🚫';
  const categoryName = categoryInfo?.name || 'Blocked Site';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Site Blocked - CalmWeb</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      text-align: center;
      padding: 40px;
      max-width: 500px;
    }
    .icon {
      font-size: 80px;
      margin-bottom: 24px;
    }
    h1 {
      font-size: 32px;
      margin-bottom: 16px;
      font-weight: 700;
    }
    .category {
      font-size: 14px;
      color: #a0a0a0;
      margin-bottom: 24px;
      padding: 8px 16px;
      background: rgba(255,255,255,0.1);
      border-radius: 20px;
      display: inline-block;
    }
    .domain {
      font-size: 18px;
      color: #6366f1;
      margin-bottom: 32px;
      word-break: break-all;
    }
    .message {
      font-size: 16px;
      color: #888;
      margin-bottom: 32px;
      line-height: 1.6;
    }
    .buttons {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    button {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-primary {
      background: #6366f1;
      color: white;
    }
    .btn-primary:hover {
      background: #4f46e5;
    }
    .btn-secondary {
      background: rgba(255,255,255,0.1);
      color: white;
    }
    .btn-secondary:hover {
      background: rgba(255,255,255,0.2);
    }
    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #555;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .logo-text {
      font-weight: 700;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <span>🛡️</span>
      <span class="logo-text">CalmWeb</span>
    </div>
    <div class="icon">${icon}</div>
    <h1>Site Blocked</h1>
    ${categoryName ? `<div class="category">${categoryName}</div>` : ''}
    <div class="domain">${domain}</div>
    <p class="message">
      This site has been blocked by your Super Filter settings.
      You can change this in the extension options.
    </p>
    <div class="buttons">
      <button class="btn-secondary" onclick="window.history.back()">
        ← Go Back
      </button>
      <button class="btn-primary" onclick="window.open(chrome.runtime.getURL('/options.html#sites'), '_blank')">
        Settings
      </button>
      <button class="btn-secondary" id="proceed">
        Proceed Anyway
      </button>
    </div>
    <p class="footer">
      Blocked by CalmWeb Super Filter
    </p>
  </div>
  <script>
    document.getElementById('proceed').addEventListener('click', () => {
      // Store in session that user wants to proceed
      sessionStorage.setItem('calmweb-allow-' + '${domain}', 'true');
      location.reload();
    });
    
    // Check if user already allowed this session
    if (sessionStorage.getItem('calmweb-allow-' + '${domain}') === 'true') {
      sessionStorage.removeItem('calmweb-allow-' + '${domain}');
    }
  </script>
</body>
</html>
`;
}
