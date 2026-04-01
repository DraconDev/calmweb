/**
 * Activity Overlay
 *
 * Floating panel that shows real-time filtering activity:
 * - Neutralized headlines (before → after)
 * - Blocked sites
 * - Filtered media
 * - Search results hidden
 */

import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { UserSettings } from '@calmweb/shared';

const OVERLAY_ID = 'calmweb-activity-overlay';
const STYLES_ID = 'calmweb-activity-styles';

interface ActivityItem {
  id: string;
  type: 'neutralized' | 'blocked' | 'media' | 'search';
  timestamp: number;
  before: string;
  after?: string;
  reason?: string;
}

let activities: ActivityItem[] = [];
let maxActivities = 20;
let overlay: HTMLElement | null = null;
let isExpanded = false;

function injectStyles(): void {
  if (document.getElementById(STYLES_ID)) return;

  const styles = document.createElement('style');
  styles.id = STYLES_ID;
  styles.textContent = `
    #${OVERLAY_ID} {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      max-width: 380px;
    }

    .calmweb-activity-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 12px;
      color: white;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      transition: all 0.2s;
    }

    .calmweb-activity-header:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
    }

    .calmweb-activity-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }

    .calmweb-activity-info {
      flex: 1;
    }

    .calmweb-activity-title {
      font-weight: 600;
      font-size: 13px;
    }

    .calmweb-activity-count {
      font-size: 11px;
      opacity: 0.7;
    }

    .calmweb-activity-badge {
      background: #22c55e;
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 11px;
      font-weight: 600;
    }

    .calmweb-activity-badge.empty {
      background: #6b7280;
    }

    .calmweb-activity-panel {
      margin-top: 8px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      max-height: 400px;
      overflow: hidden;
      display: none;
      animation: slideUp 0.2s ease;
    }

    .calmweb-activity-panel.visible {
      display: block;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .calmweb-activity-tabs {
      display: flex;
      border-bottom: 1px solid #e5e7eb;
      background: #f9fafb;
    }

    .calmweb-activity-tab {
      flex: 1;
      padding: 8px;
      text-align: center;
      font-size: 11px;
      font-weight: 500;
      color: #6b7280;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.15s;
    }

    .calmweb-activity-tab:hover {
      background: #f3f4f6;
    }

    .calmweb-activity-tab.active {
      color: #6366f1;
      border-bottom-color: #6366f1;
    }

    .calmweb-activity-list {
      max-height: 300px;
      overflow-y: auto;
      padding: 8px;
    }

    .calmweb-activity-item {
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 6px;
      background: #f9fafb;
      font-size: 11px;
    }

    .calmweb-activity-item:last-child {
      margin-bottom: 0;
    }

    .calmweb-activity-item.neutralized {
      border-left: 3px solid #8b5cf6;
    }

    .calmweb-activity-item.blocked {
      border-left: 3px solid #ef4444;
    }

    .calmweb-activity-item.media {
      border-left: 3px solid #3b82f6;
    }

    .calmweb-activity-item.search {
      border-left: 3px solid #f59e0b;
    }

    .calmweb-activity-label {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .calmweb-activity-item.neutralized .calmweb-activity-label {
      background: #ede9fe;
      color: #7c3aed;
    }

    .calmweb-activity-item.blocked .calmweb-activity-label {
      background: #fee2e2;
      color: #dc2626;
    }

    .calmweb-activity-item.media .calmweb-activity-label {
      background: #dbeafe;
      color: #2563eb;
    }

    .calmweb-activity-item.search .calmweb-activity-label {
      background: #fef3c7;
      color: #d97706;
    }

    .calmweb-activity-before {
      color: #6b7280;
      text-decoration: line-through;
      margin-bottom: 4px;
      word-break: break-word;
    }

    .calmweb-activity-after {
      color: #111827;
      font-weight: 500;
      word-break: break-word;
    }

    .calmweb-activity-arrow {
      color: #9ca3af;
      margin: 2px 0;
    }

    .calmweb-activity-empty {
      text-align: center;
      padding: 24px;
      color: #9ca3af;
    }

    .calmweb-activity-empty-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .calmweb-activity-time {
      font-size: 10px;
      color: #9ca3af;
      margin-top: 4px;
    }
  `;
  document.head.appendChild(styles);
}

function createOverlay(): HTMLElement {
  const container = document.createElement('div');
  container.id = OVERLAY_ID;

  container.innerHTML = `
    <div class="calmweb-activity-header">
      <div class="calmweb-activity-icon">🛡️</div>
      <div class="calmweb-activity-info">
        <div class="calmweb-activity-title">CalmWeb</div>
        <div class="calmweb-activity-count">0 items filtered</div>
      </div>
      <div class="calmweb-activity-badge empty">0</div>
    </div>
    <div class="calmweb-activity-panel">
      <div class="calmweb-activity-tabs">
        <div class="calmweb-activity-tab active" data-tab="all">All</div>
        <div class="calmweb-activity-tab" data-tab="neutralized">Text</div>
        <div class="calmweb-activity-tab" data-tab="blocked">Sites</div>
        <div class="calmweb-activity-tab" data-tab="media">Media</div>
      </div>
      <div class="calmweb-activity-list"></div>
    </div>
  `;

  const header = container.querySelector('.calmweb-activity-header') as HTMLElement;
  const panel = container.querySelector('.calmweb-activity-panel') as HTMLElement;
  const tabs = container.querySelectorAll('.calmweb-activity-tab');

  header.addEventListener('click', () => {
    isExpanded = !isExpanded;
    panel.classList.toggle('visible', isExpanded);
    if (isExpanded) {
      renderList('all');
    }
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderList((tab as HTMLElement).dataset.tab || 'all');
    });
  });

  return container;
}

function updateBadge(): void {
  if (!overlay) return;

  const count = activities.length;
  const badge = overlay.querySelector('.calmweb-activity-badge') as HTMLElement;
  const countText = overlay.querySelector('.calmweb-activity-count') as HTMLElement;

  badge.textContent = count.toString();
  badge.classList.toggle('empty', count === 0);
  countText.textContent = `${count} item${count !== 1 ? 's' : ''} filtered`;
}

function renderList(filter: string): void {
  if (!overlay) return;

  const list = overlay.querySelector('.calmweb-activity-list') as HTMLElement;
  const filtered = filter === 'all' 
    ? activities 
    : activities.filter(a => a.type === filter);

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="calmweb-activity-empty">
        <div class="calmweb-activity-empty-icon">✨</div>
        <div>No recent activity</div>
      </div>
    `;
    return;
  }

  list.innerHTML = filtered.map(item => {
    const timeAgo = getTimeAgo(item.timestamp);
    const typeLabel = {
      neutralized: 'Neutralized',
      blocked: 'Blocked',
      media: 'Media',
      search: 'Search',
    }[item.type];

    if (item.type === 'neutralized' && item.after) {
      return `
        <div class="calmweb-activity-item ${item.type}">
          <div class="calmweb-activity-label">${typeLabel}</div>
          <div class="calmweb-activity-before">${escapeHtml(item.before)}</div>
          <div class="calmweb-activity-arrow">↓</div>
          <div class="calmweb-activity-after">${escapeHtml(item.after)}</div>
          <div class="calmweb-activity-time">${timeAgo}</div>
        </div>
      `;
    }

    return `
      <div class="calmweb-activity-item ${item.type}">
        <div class="calmweb-activity-label">${typeLabel}</div>
        <div class="calmweb-activity-after">${escapeHtml(item.before)}</div>
        ${item.reason ? `<div class="calmweb-activity-time">${item.reason}</div>` : ''}
        <div class="calmweb-activity-time">${timeAgo}</div>
      </div>
    `;
  }).join('');
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function getTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

export function addActivity(item: Omit<ActivityItem, 'id' | 'timestamp'>): void {
  activities.unshift({
    ...item,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    timestamp: Date.now(),
  });

  if (activities.length > maxActivities) {
    activities = activities.slice(0, maxActivities);
  }

  updateBadge();

  if (isExpanded) {
    const activeTab = overlay?.querySelector('.calmweb-activity-tab.active') as HTMLElement;
    renderList(activeTab?.dataset.tab || 'all');
  }
}

export function logNeutralized(before: string, after: string): void {
  addActivity({
    type: 'neutralized',
    before,
    after,
  });
}

export function logBlocked(domain: string, reason: string): void {
  addActivity({
    type: 'blocked',
    before: domain,
    reason,
  });
}

export function logMedia(altText: string, action: 'blurred' | 'hidden'): void {
  addActivity({
    type: 'media',
    before: altText || 'Image',
    after: action === 'blurred' ? 'Blurred' : 'Hidden',
  });
}

export function logSearch(domain: string): void {
  addActivity({
    type: 'search',
    before: domain,
    reason: 'Hidden from results',
  });
}

export async function initActivityOverlay(): Promise<void> {
  if (document.getElementById(OVERLAY_ID)) {
    console.log('[ActivityOverlay] Already initialized');
    return;
  }

  console.log('[ActivityOverlay] Starting initialization...');

  try {
    const settings = await sendToBackground<UserSettings>({ 
      type: MESSAGE_TYPES.GET_SETTINGS 
    });

    console.log('[ActivityOverlay] Settings received:', settings);

    // Show overlay if any filtering is enabled
    const shouldShow = settings?.enabled && (
      settings.neutralization?.enabled ||
      settings.mediaFilter?.enabled ||
      settings.siteFilter?.enabled
    );

    console.log('[ActivityOverlay] shouldShow:', shouldShow, 'enabled:', settings?.enabled, 'neutralization:', settings?.neutralization?.enabled, 'mediaFilter:', settings?.mediaFilter?.enabled, 'siteFilter:', settings?.siteFilter?.enabled);

    if (!shouldShow) {
      console.log('[ActivityOverlay] Not showing overlay - filtering disabled');
      return;
    }

    injectStyles();
    overlay = createOverlay();
    document.body.appendChild(overlay);
    console.log('[ActivityOverlay] Overlay added to page');

    // Listen for events from content scripts
    window.addEventListener('calmweb:neutralized', ((e: CustomEvent) => {
      logNeutralized(e.detail.before, e.detail.after);
    }) as EventListener);

    window.addEventListener('calmweb:blocked', ((e: CustomEvent) => {
      logBlocked(e.detail.domain, e.detail.reason);
    }) as EventListener);

    window.addEventListener('calmweb:mediaFiltered', ((e: CustomEvent) => {
      logMedia(e.detail.altText, e.detail.action);
    }) as EventListener);

    window.addEventListener('calmweb:searchFiltered', ((e: CustomEvent) => {
      logSearch(e.detail.domain);
    }) as EventListener);

  } catch (error) {
    console.error('[ActivityOverlay] Failed to initialize:', error);
  }
}

export function getActivityCount(): number {
  return activities.length;
}

export function clearActivities(): void {
  activities = [];
  updateBadge();
  if (isExpanded) {
    renderList('all');
  }
}
