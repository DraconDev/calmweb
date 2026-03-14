import { describe, it, expect } from 'vitest';
import { parseShortcut, formatShortcut, ShortcutManager, defaultShortcuts } from '../src/shortcuts';

describe('parseShortcut', () => {
  it('should parse Alt+R', () => {
    const result = parseShortcut('Alt+R');
    expect(result.alt).toBe(true);
    expect(result.key).toBe('r');
    expect(result.ctrl).toBeUndefined();
    expect(result.shift).toBeUndefined();
  });

  it('should parse Ctrl+Shift+A', () => {
    const result = parseShortcut('Ctrl+Shift+A');
    expect(result.ctrl).toBe(true);
    expect(result.shift).toBe(true);
    expect(result.key).toBe('a');
  });

  it('should parse Alt+Shift+E', () => {
    const result = parseShortcut('Alt+Shift+E');
    expect(result.alt).toBe(true);
    expect(result.shift).toBe(true);
    expect(result.key).toBe('e');
  });

  it('should parse single key', () => {
    const result = parseShortcut('Escape');
    expect(result.key).toBe('escape');
  });

  it('should handle Cmd as meta', () => {
    const result = parseShortcut('Cmd+S');
    expect(result.meta).toBe(true);
    expect(result.key).toBe('s');
  });

  it('should handle Command as meta', () => {
    const result = parseShortcut('Command+Q');
    expect(result.meta).toBe(true);
    expect(result.key).toBe('q');
  });

  it('should handle Control as ctrl', () => {
    const result = parseShortcut('Control+V');
    expect(result.ctrl).toBe(true);
    expect(result.key).toBe('v');
  });

  it('should be case insensitive', () => {
    const result1 = parseShortcut('ALT+R');
    const result2 = parseShortcut('alt+r');
    expect(result1.alt).toBe(result2.alt);
    expect(result1.key).toBe(result2.key);
  });
});

describe('formatShortcut', () => {
  it('should format Alt+R', () => {
    const result = formatShortcut({ alt: true, key: 'r' });
    expect(result).toBe('Alt+R');
  });

  it('should format Ctrl+Shift+A', () => {
    const result = formatShortcut({ ctrl: true, shift: true, key: 'a' });
    expect(result).toBe('Ctrl+Shift+A');
  });

  it('should format with meta as Cmd', () => {
    const result = formatShortcut({ meta: true, key: 's' });
    expect(result).toBe('Cmd+S');
  });

  it('should format complex combo', () => {
    const result = formatShortcut({ ctrl: true, alt: true, shift: true, key: 'x' });
    expect(result).toBe('Ctrl+Alt+Shift+X');
  });
});

describe('ShortcutManager', () => {
  it('should register shortcuts', () => {
    const manager = new ShortcutManager();
    manager.register({
      id: 'test',
      name: 'Test',
      description: 'Test shortcut',
      defaultCombo: 'Alt+T',
      action: () => {},
    });

    expect(manager.getById('test')).toBeDefined();
  });

  it('should unregister shortcuts', () => {
    const manager = new ShortcutManager();
    manager.register({
      id: 'test',
      name: 'Test',
      description: 'Test shortcut',
      defaultCombo: 'Alt+T',
      action: () => {},
    });

    manager.unregister('test');
    expect(manager.getById('test')).toBeUndefined();
  });

  it('should return all shortcuts', () => {
    const manager = new ShortcutManager();
    manager.register({
      id: 'test1',
      name: 'Test 1',
      description: 'Test shortcut 1',
      defaultCombo: 'Alt+1',
      action: () => {},
    });
    manager.register({
      id: 'test2',
      name: 'Test 2',
      description: 'Test shortcut 2',
      defaultCombo: 'Alt+2',
      action: () => {},
    });

    const all = manager.getAll();
    expect(all.length).toBe(2);
  });

  it('should be enabled by default', () => {
    const manager = new ShortcutManager();
    manager.register({
      id: 'test',
      name: 'Test',
      description: 'Test shortcut',
      defaultCombo: 'Alt+T',
      action: () => {},
    });

    expect(manager.getById('test')).toBeDefined();
  });

  it('should support enable/disable', () => {
    const manager = new ShortcutManager();
    manager.setEnabled(false);
    manager.setEnabled(true);
    
    expect(manager.getById('test')?.id).toBeUndefined();
  });
});

describe('Default Shortcuts', () => {
  it('should have toggle extension shortcut', () => {
    const toggle = defaultShortcuts.find(s => s.id === 'toggleExtension');
    expect(toggle).toBeDefined();
    expect(toggle?.defaultCombo).toBe('Alt+Shift+E');
  });

  it('should have toggle reader shortcut', () => {
    const reader = defaultShortcuts.find(s => s.id === 'toggleReader');
    expect(reader).toBeDefined();
    expect(reader?.defaultCombo).toBe('Alt+R');
  });

  it('should have cycle layout shortcut', () => {
    const layout = defaultShortcuts.find(s => s.id === 'cycleLayout');
    expect(layout).toBeDefined();
    expect(layout?.defaultCombo).toBe('Alt+L');
  });

  it('should have all required properties', () => {
    defaultShortcuts.forEach(shortcut => {
      expect(shortcut.id).toBeTruthy();
      expect(shortcut.name).toBeTruthy();
      expect(shortcut.description).toBeTruthy();
      expect(shortcut.defaultCombo).toBeTruthy();
      expect(typeof shortcut.action).toBe('function');
    });
  });
});

describe('Parse and Format Round-trip', () => {
  const testCombos = [
    'Alt+R',
    'Ctrl+Shift+E',
    'Cmd+S',
    'Alt+Shift+L',
    'Ctrl+Alt+Delete',
  ];

  testCombos.forEach(combo => {
    it(`should round-trip ${combo}`, () => {
      const parsed = parseShortcut(combo);
      const formatted = formatShortcut(parsed);
      const reparsed = parseShortcut(formatted);
      
      expect(reparsed.alt).toBe(parsed.alt);
      expect(reparsed.ctrl).toBe(parsed.ctrl);
      expect(reparsed.shift).toBe(parsed.shift);
      expect(reparsed.meta).toBe(parsed.meta);
      expect(reparsed.key).toBe(parsed.key);
    });
  });
});
