/**
 * Keyboard Shortcuts for CalmWeb
 */

export interface ShortcutDefinition {
  id: string;
  name: string;
  description: string;
  defaultCombo: string;
  action: () => void;
}

export interface ShortcutCombo {
  alt?: boolean;
  ctrl?: boolean;
  shift?: boolean;
  meta?: boolean;
  key: string;
}

const SHORTCUT_DEFAULTS: Record<string, string> = {
  toggleExtension: 'Alt+Shift+E',
  toggleReader: 'Alt+R',
  cycleLayout: 'Alt+L',
  toggleNeutralize: 'Alt+N',
  showOriginal: 'Alt+O',
  openSettings: 'Alt+,',
};

export function parseShortcut(combo: string): ShortcutCombo {
  const parts = combo.toLowerCase().split('+');
  const result: ShortcutCombo = { key: '' };

  for (const part of parts) {
    switch (part) {
      case 'alt':
        result.alt = true;
        break;
      case 'ctrl':
      case 'control':
        result.ctrl = true;
        break;
      case 'shift':
        result.shift = true;
        break;
      case 'meta':
      case 'cmd':
      case 'command':
        result.meta = true;
        break;
      default:
        result.key = part;
    }
  }

  return result;
}

export function formatShortcut(combo: ShortcutCombo): string {
  const parts: string[] = [];
  
  if (combo.ctrl) parts.push('Ctrl');
  if (combo.alt) parts.push('Alt');
  if (combo.shift) parts.push('Shift');
  if (combo.meta) parts.push('Cmd');
  if (combo.key) parts.push(combo.key.toUpperCase());

  return parts.join('+');
}

export class ShortcutManager {
  private shortcuts: Map<string, ShortcutDefinition> = new Map();
  private enabled: boolean = true;
  private boundHandler: (e: KeyboardEvent) => void;

  constructor() {
    this.boundHandler = this.handleKeyDown.bind(this);
  }

  register(definition: ShortcutDefinition): void {
    this.shortcuts.set(definition.id, definition);
  }

  unregister(id: string): void {
    this.shortcuts.delete(id);
  }

  start(): void {
    document.addEventListener('keydown', this.boundHandler);
  }

  stop(): void {
    document.removeEventListener('keydown', this.boundHandler);
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (!this.enabled) return;

    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }

    for (const [, definition] of this.shortcuts) {
      const combo = parseShortcut(definition.defaultCombo);
      
      if (this.matchesCombo(e, combo)) {
        e.preventDefault();
        e.stopPropagation();
        definition.action();
        return;
      }
    }
  }

  private matchesCombo(e: KeyboardEvent, combo: ShortcutCombo): boolean {
    const keyMatches = e.key.toLowerCase() === combo.key.toLowerCase();
    const altMatches = !!combo.alt === e.altKey;
    const ctrlMatches = !!combo.ctrl === e.ctrlKey;
    const shiftMatches = !!combo.shift === e.shiftKey;
    const metaMatches = !!combo.meta === e.metaKey;

    return keyMatches && altMatches && ctrlMatches && shiftMatches && metaMatches;
  }

  getAll(): ShortcutDefinition[] {
    return Array.from(this.shortcuts.values());
  }

  getById(id: string): ShortcutDefinition | undefined {
    return this.shortcuts.get(id);
  }
}

export const defaultShortcuts: ShortcutDefinition[] = [
  {
    id: 'toggleExtension',
    name: 'Toggle Extension',
    description: 'Enable or disable CalmWeb globally',
    defaultCombo: SHORTCUT_DEFAULTS.toggleExtension,
    action: () => {
      console.log('[CalmWeb] Toggle extension shortcut triggered');
    },
  },
  {
    id: 'toggleReader',
    name: 'Toggle Super Reader',
    description: 'Open or close the Super Reader overlay',
    defaultCombo: SHORTCUT_DEFAULTS.toggleReader,
    action: () => {
      console.log('[CalmWeb] Toggle reader shortcut triggered');
    },
  },
  {
    id: 'cycleLayout',
    name: 'Cycle Reader Layout',
    description: 'Switch to the next reader layout',
    defaultCombo: SHORTCUT_DEFAULTS.cycleLayout,
    action: () => {
      console.log('[CalmWeb] Cycle layout shortcut triggered');
    },
  },
];

export function createShortcutManager(): ShortcutManager {
  const manager = new ShortcutManager();

  defaultShortcuts.forEach((def) => manager.register(def));

  return manager;
}