/**
 * Media Filter Toggle UI
 *
 * Floating toggle button to enable/disable media filtering on the current page.
 */

import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import type { UserSettings, MediaFilterSettings } from '@calmweb/shared';

const TOGGLE_ID = 'calmweb-media-toggle';
const STYLES_ID = 'calmweb-media-toggle-styles';

function injectStyles(): void {
  if (document.getElementById(STYLES_ID)) return;

  const styles = document.createElement('style');
  styles.id = STYLES_ID;
  styles.textContent = `
    #${TOGGLE_ID} {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 2147483647;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
      background: #6366f1;
      color: white;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    #${TOGGLE_ID} .calmweb-toggle-btn.active {
      background: #22c55e;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn.inactive {
      background: #6b7280;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn svg {
      width: 24px;
      height: 24px;
    }

    #${TOGGLE_ID} .calmweb-tooltip {
      position: absolute;
      right: 56px;
      top: 50%;
      transform: translateY(-50%);
      background: #1f2937;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 13px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn:hover + .calmweb-tooltip {
      opacity: 1;
    }

    #${TOGGLE_ID} .calmweb-panel {
      position: absolute;
      bottom: 56px;
      right: 0;
      width: 220px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      padding: 12px;
      display: none;
      flex-direction: column;
      gap: 8px;
    }

    #${TOGGLE_ID} .calmweb-panel.visible {
      display: flex;
    }

    #${TOGGLE_ID} .calmweb-panel-title {
      font-weight: 600;
      font-size: 14px;
      color: #1f2937;
      margin-bottom: 4px;
    }

    #${TOGGLE_ID} .calmweb-panel-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }

    #${TOGGLE_ID} .calmweb-panel-option:last-child {
      border-bottom: none;
    }

    #${TOGGLE_ID} .calmweb-panel-label {
      font-size: 13px;
      color: #4b5563;
    }

    #${TOGGLE_ID} .calmweb-panel-toggle {
      width: 36px;
      height: 20px;
      border-radius: 10px;
      background: #d1d5db;
      position: relative;
      cursor: pointer;
      transition: background 0.2s;
    }

    #${TOGGLE_ID} .calmweb-panel-toggle.active {
      background: #22c55e;
    }

    #${TOGGLE_ID} .calmweb-panel-toggle::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: white;
      top: 2px;
      left: 2px;
      transition: transform 0.2s;
    }

    #${TOGGLE_ID} .calmweb-panel-toggle.active::after {
      transform: translateX(16px);
    }

    #${TOGGLE_ID} .calmweb-stats {
      font-size: 12px;
      color: #6b7280;
      padding: 8px;
      background: #f3f4f6;
      border-radius: 6px;
      margin-top: 4px;
    }
  `;
  document.head.appendChild(styles);
}

function createToggleButton(settings: MediaFilterSettings): HTMLElement {
  const container = document.createElement('div');
  container.id = TOGGLE_ID;

  const isActive = settings.enabled && settings.mode !== 'off';

  container.innerHTML = `
    <button class="calmweb-toggle-btn ${isActive ? 'active' : 'inactive'}" title="CalmWeb Media Filter">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    </button>
    <span class="calmweb-tooltip">CalmWeb: ${isActive ? 'Media filtering ON' : 'Media filtering OFF'}</span>
    <div class="calmweb-panel">
      <div class="calmweb-panel-title">Media Filter</div>
      <div class="calmweb-panel-option">
        <span class="calmweb-panel-label">Filter Media</span>
        <div class="calmweb-panel-toggle ${settings.enabled ? 'active' : ''}" data-setting="enabled"></div>
      </div>
      <div class="calmweb-panel-option">
        <span class="calmweb-panel-label">Blur Mode</span>
        <div class="calmweb-panel-toggle ${settings.mode === 'blur' ? 'active' : ''}" data-setting="blurMode"></div>
      </div>
      <div class="calmweb-panel-option">
        <span class="calmweb-panel-label">Hide Mode</span>
        <div class="calmweb-panel-toggle ${settings.mode === 'hide' ? 'active' : ''}" data-setting="hideMode"></div>
      </div>
      <div class="calmweb-panel-option">
        <span class="calmweb-panel-label">Reveal on Hover</span>
        <div class="calmweb-panel-toggle ${settings.revealOnHover ? 'active' : ''}" data-setting="revealOnHover"></div>
      </div>
      <div class="calmweb-stats">
        <span class="calmweb-filtered-count">0</span> images filtered
      </div>
    </div>
  `;

  const btn = container.querySelector('.calmweb-toggle-btn') as HTMLElement;
  const panel = container.querySelector('.calmweb-panel') as HTMLElement;

  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    panel.classList.toggle('visible');
  });

  const toggles = container.querySelectorAll('.calmweb-panel-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', async (e) => {
      e.stopPropagation();
      const setting = (toggle as HTMLElement).dataset.setting;
      let newSettings = { ...settings };

      if (setting === 'enabled') {
        newSettings.enabled = !newSettings.enabled;
      } else if (setting === 'blurMode') {
        newSettings.mode = newSettings.mode === 'blur' ? 'off' : 'blur';
      } else if (setting === 'hideMode') {
        newSettings.mode = newSettings.mode === 'hide' ? 'off' : 'hide';
      } else if (setting === 'revealOnHover') {
        newSettings.revealOnHover = !newSettings.revealOnHover;
      }

      await saveMediaSettings(newSettings);
      Object.assign(settings, newSettings);
      updateToggleUI(container, settings);
      
      window.dispatchEvent(new CustomEvent('calmweb:mediaFilterChanged', { 
        detail: newSettings 
      }));
    });
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target as Node)) {
      panel.classList.remove('visible');
    }
  });

  return container;
}

function updateToggleUI(container: HTMLElement, settings: MediaFilterSettings): void {
  const btn = container.querySelector('.calmweb-toggle-btn') as HTMLElement;
  const tooltip = container.querySelector('.calmweb-tooltip') as HTMLElement;
  const isActive = settings.enabled && settings.mode !== 'off';

  btn.className = `calmweb-toggle-btn ${isActive ? 'active' : 'inactive'}`;
  tooltip.textContent = `CalmWeb: ${isActive ? 'Media filtering ON' : 'Media filtering OFF'}`;

  const enabledToggle = container.querySelector('[data-setting="enabled"]') as HTMLElement;
  const blurToggle = container.querySelector('[data-setting="blurMode"]') as HTMLElement;
  const hideToggle = container.querySelector('[data-setting="hideMode"]') as HTMLElement;
  const hoverToggle = container.querySelector('[data-setting="revealOnHover"]') as HTMLElement;

  if (enabledToggle) enabledToggle.className = `calmweb-panel-toggle ${settings.enabled ? 'active' : ''}`;
  if (blurToggle) blurToggle.className = `calmweb-panel-toggle ${settings.mode === 'blur' ? 'active' : ''}`;
  if (hideToggle) hideToggle.className = `calmweb-panel-toggle ${settings.mode === 'hide' ? 'active' : ''}`;
  if (hoverToggle) hoverToggle.className = `calmweb-panel-toggle ${settings.revealOnHover ? 'active' : ''}`;
}

async function saveMediaSettings(settings: MediaFilterSettings): Promise<void> {
  try {
    await sendToBackground({
      type: MESSAGE_TYPES.UPDATE_SETTINGS,
      settings: { mediaFilter: settings },
    });
  } catch (error) {
    console.error('[MediaToggle] Failed to save settings:', error);
  }
}

export async function initMediaToggle(): Promise<void> {
  if (document.getElementById(TOGGLE_ID)) return;

  try {
    const settings = await sendToBackground<UserSettings>({ 
      type: MESSAGE_TYPES.GET_SETTINGS 
    });

    if (!settings?.mediaFilter?.showToggle) return;

    injectStyles();
    const toggle = createToggleButton(settings.mediaFilter);
    document.body.appendChild(toggle);
  } catch (error) {
    console.error('[MediaToggle] Failed to initialize:', error);
  }
}

export function updateFilteredCount(count: number): void {
  const countEl = document.querySelector('.calmweb-filtered-count');
  if (countEl) {
    countEl.textContent = count.toString();
  }
}
