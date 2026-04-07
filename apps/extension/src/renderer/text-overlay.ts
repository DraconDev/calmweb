import { storage } from 'wxt/utils/storage';

export interface TextOverlayContent {
  title: string;
  content: string;
  sourceUrl: string;
  sourceName?: string;
  author?: string;
  date?: string;
  readingTime?: number;
}

export interface TextLayoutSettings {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  maxWidth: number;
  padding: number;
  theme: 'light' | 'dark' | 'sepia';
}

interface TextModeSettings {
  enabled: boolean;
  skipList: { domains: string[]; patterns: string[] };
  mediaAllowlist: { domains: string[]; types: string[] };
  layout: TextLayoutSettings;
}

const STORAGE_KEY = 'sync:calmweb-textmode-settings';

const defaultSettings: TextModeSettings = {
  enabled: false,
  skipList: { domains: [], patterns: [] },
  mediaAllowlist: { domains: [], types: ['image', 'video', 'audio'] },
  layout: {
    fontFamily: 'Georgia, serif',
    fontSize: 18,
    lineHeight: 1.7,
    maxWidth: 700,
    padding: 32,
    theme: 'light',
  },
};

const textModeStore = storage.defineItem<TextModeSettings>(STORAGE_KEY, {
  fallback: defaultSettings,
});

export async function getLayoutSettings(): Promise<TextLayoutSettings> {
  const settings = await textModeStore.getValue();
  return settings.layout;
}

export function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export function createTextOverlay(content: TextOverlayContent): HTMLElement {
  const overlay = document.createElement('div');
  overlay.id = 'calmweb-text-overlay';

  const shadow = overlay.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = getOverlayStyles();
  shadow.appendChild(style);

  const container = document.createElement('div');
  container.className = 'calmweb-text-container';
  container.innerHTML = `
    <header class="calmweb-text-header">
      <h1>${escapeHtml(content.title)}</h1>
      <div class="calmweb-text-meta">
        ${content.sourceName ? `<span class="calmweb-source">${escapeHtml(content.sourceName)}</span>` : ''}
        ${content.author ? `<span class="calmweb-author">${escapeHtml(content.author)}</span>` : ''}
        ${content.date ? `<time class="calmweb-date">${escapeHtml(content.date)}</time>` : ''}
        ${content.readingTime ? `<span class="calmweb-reading-time">${content.readingTime} min read</span>` : ''}
      </div>
    </header>
    <main class="calmweb-text-content">
      ${content.content}
    </main>
    <footer class="calmweb-text-footer">
      <a href="${escapeHtml(content.sourceUrl)}" target="_blank" rel="noopener">View original</a>
      <span class="calmweb-badge">CalmWeb</span>
    </footer>
  `;

  shadow.appendChild(container);
  return overlay;
}

export async function createTextOverlayWithSettings(content: TextOverlayContent): Promise<HTMLElement> {
  const layout = await getLayoutSettings();
  const overlay = document.createElement('div');
  overlay.id = 'calmweb-text-overlay';

  const shadow = overlay.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = getOverlayStyles();
  shadow.appendChild(style);

  const container = document.createElement('div');
  container.className = 'calmweb-text-container';
  container.innerHTML = `
    <header class="calmweb-text-header">
      <h1>${escapeHtml(content.title)}</h1>
      <div class="calmweb-text-meta">
        ${content.sourceName ? `<span class="calmweb-source">${escapeHtml(content.sourceName)}</span>` : ''}
        ${content.author ? `<span class="calmweb-author">${escapeHtml(content.author)}</span>` : ''}
        ${content.date ? `<time class="calmweb-date">${escapeHtml(content.date)}</time>` : ''}
        ${content.readingTime ? `<span class="calmweb-reading-time">${content.readingTime} min read</span>` : ''}
      </div>
    </header>
    <main class="calmweb-text-content">
      ${content.content}
    </main>
    <footer class="calmweb-text-footer">
      <a href="${escapeHtml(content.sourceUrl)}" target="_blank" rel="noopener">View original</a>
      <span class="calmweb-badge">CalmWeb</span>
    </footer>
  `;

  shadow.appendChild(container);

  applyLayoutStyles(shadow, layout);

  return overlay;
}

function applyLayoutStyles(shadow: ShadowRoot, layout: TextLayoutSettings): void {
  const style = document.createElement('style');
  const themeVars = getThemeVariables(layout.theme);
  
  style.textContent = `
    :host {
      ${themeVars}
      --calmweb-font-family: ${layout.fontFamily};
      --calmweb-font-size: ${layout.fontSize}px;
      --calmweb-line-height: ${layout.lineHeight};
      --calmweb-max-width: ${layout.maxWidth}px;
      --calmweb-padding: ${layout.padding}px;
    }
  `;
  shadow.insertBefore(style, shadow.firstChild);
}

function getThemeVariables(theme: 'light' | 'dark' | 'sepia'): string {
  switch (theme) {
    case 'dark':
      return `
        --calmweb-bg: #1a1a1a;
        --calmweb-text: #e5e5e5;
        --calmweb-accent: #6b9fff;
        --calmweb-border: #333;
        --calmweb-muted: #888;
      `;
    case 'sepia':
      return `
        --calmweb-bg: #f4ecd8;
        --calmweb-text: #433422;
        --calmweb-accent: #8b6914;
        --calmweb-border: #c9b896;
        --calmweb-muted: #7a6a4f;
      `;
    default:
      return `
        --calmweb-bg: #fafafa;
        --calmweb-text: #1a1a1a;
        --calmweb-accent: #2563eb;
        --calmweb-border: #e5e5e5;
        --calmweb-muted: #666;
      `;
  }
}

function getOverlayStyles(): string {
  return `
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--calmweb-bg, #fafafa);
      color: var(--calmweb-text, #1a1a1a);
      font-family: var(--calmweb-font-family, Georgia, serif);
      font-size: var(--calmweb-font-size, 18px);
      line-height: var(--calmweb-line-height, 1.7);
      overflow-y: auto;
      z-index: 2147483647;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .calmweb-text-container {
      max-width: var(--calmweb-max-width, 700px);
      margin: 0 auto;
      padding: var(--calmweb-padding, 32px);
    }

    .calmweb-text-header {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--calmweb-border, #e5e5e5);
    }

    .calmweb-text-header h1 {
      font-size: 2em;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
      line-height: 1.2;
    }

    .calmweb-text-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1.5rem;
      font-size: 0.85em;
      color: var(--calmweb-muted, #666);
    }

    .calmweb-text-meta > span::before {
      content: '';
    }

    .calmweb-source {
      font-weight: 500;
    }

    .calmweb-text-content {
      margin: 2rem 0;
    }

    .calmweb-text-content p {
      margin: 1em 0;
    }

    .calmweb-text-content h1,
    .calmweb-text-content h2,
    .calmweb-text-content h3,
    .calmweb-text-content h4,
    .calmweb-text-content h5,
    .calmweb-text-content h6 {
      margin: 1.5em 0 0.5em 0;
      font-weight: 600;
      line-height: 1.3;
    }

    .calmweb-text-content h1 { font-size: 1.8em; }
    .calmweb-text-content h2 { font-size: 1.5em; }
    .calmweb-text-content h3 { font-size: 1.25em; }
    .calmweb-text-content h4 { font-size: 1.1em; }

    .calmweb-text-content a {
      color: var(--calmweb-accent, #2563eb);
      text-decoration: underline;
    }

    .calmweb-text-content blockquote {
      margin: 1.5em 0;
      padding: 0.5em 1.5em;
      border-left: 3px solid var(--calmweb-border, #e5e5e5);
      font-style: italic;
      color: var(--calmweb-muted, #666);
    }

    .calmweb-text-content ul,
    .calmweb-text-content ol {
      margin: 1em 0;
      padding-left: 2em;
    }

    .calmweb-text-content li {
      margin: 0.5em 0;
    }

    .calmweb-text-content pre,
    .calmweb-text-content code {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.9em;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .calmweb-text-content pre {
      padding: 1em;
      overflow-x: auto;
    }

    .calmweb-text-content code {
      padding: 0.2em 0.4em;
    }

    .calmweb-text-content pre code {
      padding: 0;
      background: none;
    }

    .calmweb-text-content img,
    .calmweb-text-content video,
    .calmweb-text-content audio,
    .calmweb-text-content iframe {
      display: none;
    }

    .calmweb-text-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
      padding-top: 1rem;
      border-top: 1px solid var(--calmweb-border, #e5e5e5);
      font-size: 0.85em;
      color: var(--calmweb-muted, #666);
    }

    .calmweb-text-footer a {
      color: var(--calmweb-accent, #2563eb);
      text-decoration: none;
    }

    .calmweb-text-footer a:hover {
      text-decoration: underline;
    }

    .calmweb-badge {
      background: var(--calmweb-accent, #2563eb);
      color: white;
      padding: 0.25em 0.75em;
      border-radius: 999px;
      font-size: 0.75em;
      font-weight: 500;
    }
  `;
}

export function removeTextOverlay(): void {
  const existing = document.getElementById('calmweb-text-overlay');
  if (existing) {
    existing.remove();
  }
}

export function isTextOverlayActive(): boolean {
  return document.getElementById('calmweb-text-overlay') !== null;
}
