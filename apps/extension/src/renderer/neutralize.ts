/**
 * Neutralize Renderer for CalmWeb
 *
 * Shows visual indicators for neutralized text with diff view toggle.
 */

import type { ClassificationResult } from '@calmweb/shared';

export interface NeutralizeOptions {
  originalText: string;
  neutralizedText: string;
  result: ClassificationResult;
  element: HTMLElement;
  showIndicator?: boolean;
}

export function createNeutralizeIndicator(options: NeutralizeOptions): HTMLElement {
  const { originalText, neutralizedText, result, element, showIndicator = true } = options;

  element.setAttribute('data-calmweb-neutralized', 'true');
  element.setAttribute('data-calmweb-original', originalText);
  element.setAttribute('data-calmweb-neutralized-text', neutralizedText);
  
  if (result.confidence < 0.7) {
    element.setAttribute('data-calmweb-confidence', 'low');
  } else if (result.confidence < 0.9) {
    element.setAttribute('data-calmweb-confidence', 'medium');
  } else {
    element.setAttribute('data-calmweb-confidence', 'high');
  }

  element.classList.add('calmweb-neutralized');

  if (showIndicator) {
    const indicator = document.createElement('span');
    indicator.className = 'calmweb-neutralize-indicator';
    indicator.title = `Neutralized: ${result.reason}`;
    indicator.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    `;
    element.appendChild(indicator);
  }

  const tooltip = document.createElement('div');
  tooltip.className = 'calmweb-neutralize-tooltip';
  tooltip.innerHTML = `
    <div class="calmweb-tooltip-header">
      <span class="calmweb-tooltip-icon">✓</span>
      <span>Neutralized</span>
    </div>
    <div class="calmweb-tooltip-content">
      <div class="calmweb-tooltip-row">
        <span class="calmweb-tooltip-label">Original:</span>
        <span class="calmweb-tooltip-value calmweb-tooltip-original">${escapeHtml(originalText)}</span>
      </div>
      <div class="calmweb-tooltip-row">
        <span class="calmweb-tooltip-label">Rewritten:</span>
        <span class="calmweb-tooltip-value calmweb-tooltip-rewritten">${escapeHtml(neutralizedText)}</span>
      </div>
    </div>
    <div class="calmweb-tooltip-actions">
      <button class="calmweb-tooltip-btn" data-action="toggle">Show Original</button>
      <button class="calmweb-tooltip-btn" data-action="copy">Copy Both</button>
    </div>
  `;
  element.appendChild(tooltip);

  const toggleBtn = tooltip.querySelector('[data-action="toggle"]') as HTMLButtonElement;
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNeutralizedView(element);
    toggleBtn.textContent = element.classList.contains('calmweb-showing-original') 
      ? 'Show Neutralized' 
      : 'Show Original';
  });

  const copyBtn = tooltip.querySelector('[data-action="copy"]') as HTMLButtonElement;
  copyBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    copyToClipboard(`Original: ${originalText}\nNeutralized: ${neutralizedText}`);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy Both', 1500);
  });

  element.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('.calmweb-tooltip-btn')) return;
    toggleNeutralizedView(element);
  });

  return element;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text).catch(() => {
    console.warn('[CalmWeb] Failed to copy to clipboard');
  });
}

export function toggleNeutralizedView(element: HTMLElement): void {
  const isNeutralized = element.getAttribute('data-calmweb-neutralized') === 'true';
  if (!isNeutralized) return;

  const original = element.getAttribute('data-calmweb-original') || '';
  const neutralized = element.getAttribute('data-calmweb-neutralized-text') || '';
  const indicator = element.querySelector('.calmweb-neutralize-indicator');
  const tooltip = element.querySelector('.calmweb-neutralize-tooltip');

  if (element.classList.contains('calmweb-showing-original')) {
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = neutralized;
      }
    });
    element.classList.remove('calmweb-showing-original');
    element.classList.add('calmweb-neutralized');
    if (indicator) (indicator as HTMLElement).style.display = '';
  } else {
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = original;
      }
    });
    element.classList.add('calmweb-showing-original');
    element.classList.remove('calmweb-neutralized');
    if (indicator) (indicator as HTMLElement).style.display = 'none';
  }

  if (tooltip) {
    element.appendChild(tooltip);
  }
}

export function createNeutralizeStyles(): string {
  return `
    .calmweb-neutralized {
      position: relative;
      cursor: pointer;
      transition: all 0.15s ease;
      border-radius: 2px;
    }

    .calmweb-neutralized:hover {
      background: rgba(34, 197, 94, 0.08);
    }

    .calmweb-neutralize-indicator {
      position: absolute;
      top: -6px;
      right: -6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      background: #22c55e;
      border: 2px solid white;
      border-radius: 50%;
      color: white;
      font-size: 8px;
      font-weight: bold;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      pointer-events: none;
      z-index: 100;
    }

    .calmweb-neutralized[data-calmweb-confidence="low"] .calmweb-neutralize-indicator {
      background: #f59e0b;
    }

    .calmweb-neutralized[data-calmweb-confidence="medium"] .calmweb-neutralize-indicator {
      background: #3b82f6;
    }

    .calmweb-neutralize-tooltip {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      min-width: 280px;
      max-width: 400px;
      background: #1f2937;
      color: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 12px;
      z-index: 10000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: all 0.2s ease;
      pointer-events: none;
    }

    .calmweb-neutralized:hover .calmweb-neutralize-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      pointer-events: auto;
    }

    .calmweb-tooltip-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      font-weight: 600;
    }

    .calmweb-tooltip-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background: #22c55e;
      border-radius: 50%;
      font-size: 11px;
    }

    .calmweb-tooltip-content {
      padding: 12px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .calmweb-tooltip-row {
      margin-bottom: 8px;
    }

    .calmweb-tooltip-row:last-child {
      margin-bottom: 0;
    }

    .calmweb-tooltip-label {
      display: block;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: rgba(255,255,255,0.5);
      margin-bottom: 2px;
    }

    .calmweb-tooltip-value {
      display: block;
      line-height: 1.4;
    }

    .calmweb-tooltip-original {
      text-decoration: line-through;
      opacity: 0.6;
    }

    .calmweb-tooltip-rewritten {
      color: #22c55e;
    }

    .calmweb-tooltip-actions {
      display: flex;
      gap: 8px;
      padding: 12px 16px;
    }

    .calmweb-tooltip-btn {
      flex: 1;
      padding: 8px 12px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 6px;
      color: white;
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .calmweb-tooltip-btn:hover {
      background: rgba(255,255,255,0.2);
      border-color: rgba(255,255,255,0.3);
    }

    .calmweb-tooltip-btn:active {
      transform: scale(0.97);
    }

    .calmweb-showing-original {
      background: rgba(239, 68, 68, 0.08);
      text-decoration: line-through;
      opacity: 0.7;
    }

    @media (prefers-color-scheme: dark) {
      .calmweb-neutralized:hover {
        background: rgba(34, 197, 94, 0.12);
      }
      
      .calmweb-neutralize-indicator {
        border-color: #1f2937;
      }
    }
  `;
}

export function isNeutralized(element: HTMLElement): boolean {
  return element.hasAttribute('data-calmweb-neutralized');
}

export function getNeutralizedInfo(element: HTMLElement): {
  original: string;
  neutralized: string;
  confidence: string;
} | null {
  if (!isNeutralized(element)) return null;

  return {
    original: element.getAttribute('data-calmweb-original') || '',
    neutralized: element.getAttribute('data-calmweb-neutralized-text') || '',
    confidence: element.getAttribute('data-calmweb-confidence') || 'high',
  };
}