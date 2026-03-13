/**
 * Neutralize Renderer for CalmWeb
 * 
 * Shows visual indicators for neutralized text with diff view.
 */

import type { ClassificationResult } from '@calmweb/shared';

export interface NeutralizeOptions {
  originalText: string;
  neutralizedText: string;
  result: ClassificationResult;
  element: HTMLElement;
}

export function createNeutralizeIndicator(options: NeutralizeOptions): HTMLElement {
  const { originalText, neutralizedText, result, element } = options;
  
  element.setAttribute('data-calmweb-neutralized', 'true');
  element.setAttribute('data-calmweb-original', originalText);
  element.setAttribute('data-calmweb-neutralized-text', neutralizedText);
  element.classList.add('calmweb-neutralized');
  
  if (result.confidence < 1) {
    element.classList.add('calmweb-neutralized-partial');
  }
  
  return element;
}

export function createNeutralizeStyles(): string {
  return `
.calmweb-neutralized {
  position: relative;
}

.calmweb-neutralized::after {
  content: '✓';
  position: absolute;
  top: -4px;
  right: -10px;
  font-size: 9px;
  color: #22c55e;
  background: white;
  border: 1px solid #22c55e;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-weight: bold;
}

.calmweb-neutralized-partial::after {
  color: #f59e0b;
  border-color: #f59e0b;
}

.calmweb-neutralized:hover {
  cursor: pointer;
}

.calmweb-neutralized-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  background: #1f2937;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 11px;
  white-space: nowrap;
  z-index: 10000;
  opacity: 0;
  transform: translateY(-4px);
  transition: all 0.15s ease;
  pointer-events: none;
}

.calmweb-neutralized:hover .calmweb-neutralized-tooltip {
  opacity: 1;
  transform: translateY(4px);
}

@media (prefers-color-scheme: dark) {
  .calmweb-neutralized::after {
    background: #1f2937;
  }
}
`;
}

export function toggleNeutralizedView(element: HTMLElement): void {
  const isNeutralized = element.getAttribute('data-calmweb-neutralized') === 'true';
  const original = element.getAttribute('data-calmweb-original') || '';
  
  if (isNeutralized) {
    const currentText = element.textContent || '';
    if (currentText === original) {
      const neutralized = element.getAttribute('data-calmweb-neutralized-text') || '';
      element.textContent = neutralized;
      element.classList.add('calmweb-neutralized');
    } else {
      element.textContent = original;
      element.classList.remove('calmweb-neutralized');
      element.classList.add('calmweb-original-shown');
    }
  }
}