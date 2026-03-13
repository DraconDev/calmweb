/**
 * Collapse Renderer for CalmWeb
 * 
 * Creates a minimal placeholder for filtered content that can be expanded.
 */

import type { ClassificationResult } from '@calmweb/shared';

export interface CollapseOptions {
  reason: string;
  originalElement: HTMLElement;
  result: ClassificationResult;
  onExpand?: () => void;
  siteId?: string;
}

const REASON_LABELS: Record<string, string> = {
  preset_politics: 'Politics filtered',
  preset_ragebait: 'Ragebait blocked',
  preset_spoilers: 'Spoiler shield',
  preset_clickbait: 'Clickbait removed',
  blocklist_channel: 'Blocked source',
  blocklist_keyword: 'Filtered keyword',
  llm_classification: 'AI filtered',
  hosted: 'Content filtered',
};

function getReasonLabel(reason: string): string {
  for (const [key, label] of Object.entries(REASON_LABELS)) {
    if (reason.includes(key)) {
      return label;
    }
  }
  return 'Content filtered';
}

function getReasonIcon(reason: string): string {
  if (reason.includes('politics')) return '🏛️';
  if (reason.includes('ragebait')) return '😠';
  if (reason.includes('spoilers')) return '🤐';
  if (reason.includes('clickbait')) return '🎯';
  if (reason.includes('channel') || reason.includes('keyword')) return '🚫';
  return '🛡️';
}

export function createCollapsePlaceholder(options: CollapseOptions): HTMLElement {
  const { reason, originalElement, result, onExpand, siteId } = options;
  
  const container = document.createElement('div');
  container.className = 'calmweb-collapse-container';
  container.setAttribute('data-calmweb-collapse', 'true');
  container.setAttribute('data-calmweb-reason', reason);
  
  const label = getReasonLabel(reason);
  const icon = getReasonIcon(reason);
  
  container.innerHTML = `
    <div class="calmweb-collapse-badge">
      <span class="calmweb-collapse-icon">${icon}</span>
      <span class="calmweb-collapse-label">${label}</span>
    </div>
    <button class="calmweb-collapse-expand" type="button">
      <span>Show anyway</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
  `;
  
  const expandBtn = container.querySelector('.calmweb-collapse-expand') as HTMLButtonElement;
  
  expandBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    expandCollapsedContent(container, originalElement);
    if (onExpand) {
      onExpand();
    }
  });
  
  container.setAttribute('data-calmweb-original-height', String(originalElement.offsetHeight));
  container.setAttribute('data-calmweb-site', siteId || 'unknown');
  
  return container;
}

function expandCollapsedContent(placeholder: HTMLElement, originalElement: HTMLElement): void {
  placeholder.classList.add('calmweb-collapse-expanding');
  
  requestAnimationFrame(() => {
    originalElement.style.display = '';
    originalElement.style.opacity = '0';
    originalElement.style.transition = 'opacity 0.2s ease-in-out';
    
    placeholder.replaceWith(originalElement);
    
    requestAnimationFrame(() => {
      originalElement.style.opacity = '1';
      setTimeout(() => {
        originalElement.style.transition = '';
        originalElement.style.opacity = '';
      }, 200);
    });
  });
}

export function isCollapsed(element: HTMLElement): boolean {
  return element.hasAttribute('data-calmweb-collapse');
}

export function getCollapseInfo(element: HTMLElement): { reason: string; site: string } | null {
  if (!isCollapsed(element)) return null;
  
  return {
    reason: element.getAttribute('data-calmweb-reason') || 'unknown',
    site: element.getAttribute('data-calmweb-site') || 'unknown',
  };
}

export function createCollapseStyles(): string {
  return `
.calmweb-collapse-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  margin: 4px 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.05) 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: all 0.2s ease;
  cursor: default;
  min-height: 32px;
}

.calmweb-collapse-container:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 51, 234, 0.08) 100%);
  border-color: rgba(59, 130, 246, 0.3);
}

.calmweb-collapse-badge {
  display: flex;
  align-items: center;
  gap: 6px;
}

.calmweb-collapse-icon {
  font-size: 14px;
  line-height: 1;
}

.calmweb-collapse-label {
  font-size: 12px;
  font-weight: 500;
  color: rgba(59, 130, 246, 0.9);
  letter-spacing: 0.01em;
}

.calmweb-collapse-expand {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  color: rgba(59, 130, 246, 0.85);
  cursor: pointer;
  transition: all 0.15s ease;
}

.calmweb-collapse-expand:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: rgba(59, 130, 246, 1);
}

.calmweb-collapse-expand:active {
  transform: scale(0.97);
}

.calmweb-collapse-expand svg {
  opacity: 0.7;
  transition: transform 0.2s ease;
}

.calmweb-collapse-expand:hover svg {
  opacity: 1;
  transform: translateY(1px);
}

.calmweb-collapse-expanding {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.2s ease;
}

@media (prefers-color-scheme: dark) {
  .calmweb-collapse-container {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 100%);
    border-color: rgba(59, 130, 246, 0.25);
  }
  
  .calmweb-collapse-label {
    color: rgba(96, 165, 250, 1);
  }
  
  .calmweb-collapse-expand {
    background: rgba(59, 130, 246, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
    color: rgba(96, 165, 250, 1);
  }
}
`;
}