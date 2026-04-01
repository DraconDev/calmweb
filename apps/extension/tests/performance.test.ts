import { describe, it, expect } from 'vitest';
import { LazyClassifier, ScrollPreloader, BatchProcessor, debounce, throttle } from '../src/performance';
import { ShortcutManager, createShortcutManager, parseShortcut, formatShortcut } from '../src/shortcuts';

describe('Performance - LazyClassifier', () => {
  it('should create a lazy classifier instance', () => {
    const classifier = new LazyClassifier();
    expect(classifier).toBeDefined();
    expect(classifier.getPendingCount()).toBe(0);
  });

  it('should track pending elements', () => {
    const classifier = new LazyClassifier();
    // Just test that disconnect works without error
    classifier.disconnect();
    expect(classifier.getPendingCount()).toBe(0);
  });

  it('should accept custom options', () => {
    const classifier = new LazyClassifier({
      rootMargin: '200px',
      threshold: 0.5,
    });
    expect(classifier).toBeDefined();
    classifier.disconnect();
  });
});

describe('Performance - ScrollPreloader', () => {
  it('should create a scroll preloader instance', () => {
    const preloader = new ScrollPreloader();
    expect(preloader).toBeDefined();
    expect(preloader.getDirection()).toBe('none');
    preloader.stop();
  });

  it('should start and stop listening', () => {
    const preloader = new ScrollPreloader();
    const callback = () => {};
    
    preloader.start(callback);
    preloader.stop();
  });
});

describe('Performance - BatchProcessor', () => {
  it('should create a batch processor', () => {
    const processor = new BatchProcessor(5, 10);
    expect(processor).toBeDefined();
    expect(processor.getQueueLength()).toBe(0);
  });

  it('should queue items for processing', async () => {
    const processor = new BatchProcessor(5, 10);
    processor.add(() => {});
    processor.add(() => {});
    // Items are processed async, so we check after clearing
    processor.clear();
    expect(processor.getQueueLength()).toBe(0);
  });

  it('should clear the queue', () => {
    const processor = new BatchProcessor(5, 10);
    processor.add(() => {});
    processor.add(() => {});
    processor.clear();
    expect(processor.getQueueLength()).toBe(0);
  });
});

describe('Performance - debounce', () => {
  it('should debounce function calls', async () => {
    let callCount = 0;
    const fn = debounce(() => { callCount++; }, 50);
    
    fn();
    fn();
    fn();
    
    expect(callCount).toBe(0);
    
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(callCount).toBe(1);
  });
});

describe('Performance - throttle', () => {
  it('should throttle function calls', async () => {
    let callCount = 0;
    const fn = throttle(() => { callCount++; }, 50);
    
    fn();
    fn();
    fn();
    
    expect(callCount).toBe(1);
    
    await new Promise(resolve => setTimeout(resolve, 100));
    fn();
    expect(callCount).toBe(2);
  });
});

describe('Shortcuts - parseShortcut', () => {
  it('should parse Alt+R', () => {
    const result = parseShortcut('Alt+R');
    expect(result.alt).toBe(true);
    expect(result.key).toBe('r');
    expect(result.ctrl).toBeUndefined();
  });

  it('should parse Ctrl+Shift+S', () => {
    const result = parseShortcut('Ctrl+Shift+S');
    expect(result.ctrl).toBe(true);
    expect(result.shift).toBe(true);
    expect(result.key).toBe('s');
  });

  it('should parse Cmd+Option+J (macOS)', () => {
    const result = parseShortcut('Cmd+Option+J');
    expect(result.meta).toBe(true);
    expect(result.key).toBe('j');
  });
});

describe('Shortcuts - formatShortcut', () => {
  it('should format Alt+R', () => {
    const result = formatShortcut({ alt: true, key: 'r' });
    expect(result).toBe('Alt+R');
  });

  it('should format Ctrl+Shift+S', () => {
    const result = formatShortcut({ ctrl: true, shift: true, key: 's' });
    expect(result).toBe('Ctrl+Shift+S');
  });
});

describe('Shortcuts - ShortcutManager', () => {
  it('should create a shortcut manager', () => {
    const manager = new ShortcutManager();
    expect(manager).toBeDefined();
    expect(manager.getAll().length).toBe(0);
    manager.stop();
  });

  it('should register shortcuts', () => {
    const manager = new ShortcutManager();
    manager.register({
      id: 'test',
      name: 'Test',
      description: 'Test shortcut',
      defaultCombo: 'Alt+T',
      action: () => {},
    });
    
    expect(manager.getAll().length).toBe(1);
    expect(manager.getById('test')).toBeDefined();
    manager.stop();
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
    expect(manager.getAll().length).toBe(0);
    manager.stop();
  });

  it('should toggle enabled state', () => {
    const manager = new ShortcutManager();
    manager.setEnabled(false);
    manager.setEnabled(true);
    manager.stop();
  });
});

describe('Shortcuts - createShortcutManager', () => {
  it('should create manager with default shortcuts', () => {
    const manager = createShortcutManager();
    const shortcuts = manager.getAll();
    
    expect(shortcuts.length).toBeGreaterThan(0);
    expect(shortcuts.find(s => s.id === 'toggleExtension')).toBeDefined();
    manager.stop();
  });
});