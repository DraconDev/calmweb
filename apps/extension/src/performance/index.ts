/**
 * Performance Optimizations for CalmWeb
 *
 * Provides lazy classification, pre-processing, and caching optimizations.
 */

const DEBUG = false;

function debug(...args: unknown[]) {
  if (DEBUG) console.log('[CalmWeb]', ...args);
}

export interface LazyClassifierOptions {
  rootMargin?: string;
  threshold?: number;
  preloadDistance?: number;
}

const DEFAULT_OPTIONS: LazyClassifierOptions = {
  rootMargin: '100px',
  threshold: 0,
  preloadDistance: 500,
};

export class LazyClassifier {
  private observer: IntersectionObserver | null = null;
  private pendingElements: Map<HTMLElement, () => void> = new Map();
  private classifiedElements: WeakSet<HTMLElement> = new WeakSet();
  private options: LazyClassifierOptions;

  constructor(options: Partial<LazyClassifierOptions> = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  observe(elements: HTMLElement[], classifyFn: (el: HTMLElement) => void): void {
    if (!this.observer) {
      this.observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries, classifyFn),
        {
          rootMargin: this.options.rootMargin,
          threshold: this.options.threshold,
        }
      );
    }

    elements.forEach((el) => {
      if (!this.classifiedElements.has(el)) {
        this.pendingElements.set(el, () => classifyFn(el));
        this.observer!.observe(el);
      }
    });
  }

  private handleIntersection(
    entries: IntersectionObserverEntry[],
    classifyFn: (el: HTMLElement) => void
  ): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        this.classifyElement(el, classifyFn);
      }
    });
  }

  private classifyElement(el: HTMLElement, classifyFn: (el: HTMLElement) => void): void {
    if (this.classifiedElements.has(el)) return;

    this.classifiedElements.add(el);
    this.pendingElements.delete(el);

    if (this.observer) {
      this.observer.unobserve(el);
    }

    classifyFn(el);
  }

  forceClassifyAll(classifyFn: (el: HTMLElement) => void): void {
    this.pendingElements.forEach((_, el) => {
      this.classifyElement(el, classifyFn);
    });
  }

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.pendingElements.clear();
  }

  getPendingCount(): number {
    return this.pendingElements.size;
  }
}

export class ScrollPreloader {
  private lastScrollY: number = 0;
  private scrollDirection: 'up' | 'down' | 'none' = 'none';
  private preloadCallback: (() => void) | null = null;
  private ticking: boolean = false;

  constructor() {
    this.handleScroll = this.handleScroll.bind(this);
  }

  start(callback: () => void): void {
    this.preloadCallback = callback;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  stop(): void {
    window.removeEventListener('scroll', this.handleScroll);
    this.preloadCallback = null;
  }

  private handleScroll(): void {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.processScroll();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  private processScroll(): void {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - this.lastScrollY;

    if (Math.abs(delta) > 10) {
      this.scrollDirection = delta > 0 ? 'down' : 'up';
    }

    if (this.scrollDirection === 'down' && this.preloadCallback) {
      this.preloadCallback();
    }

    this.lastScrollY = currentScrollY;
  }

  getDirection(): 'up' | 'down' | 'none' {
    return this.scrollDirection;
  }
}

export class BatchProcessor {
  private queue: Array<() => void> = [];
  private processing: boolean = false;
  private batchSize: number;
  private batchDelay: number;

  constructor(batchSize: number = 10, batchDelay: number = 16) {
    this.batchSize = batchSize;
    this.batchDelay = batchDelay;
  }

  add(fn: () => void): void {
    this.queue.push(fn);
    if (!this.processing) {
      this.processBatch();
    }
  }

  private async processBatch(): Promise<void> {
    this.processing = true;

    while (this.queue.length > 0) {
      const batch = this.queue.splice(0, this.batchSize);
      
      batch.forEach((fn) => fn());
      
      if (this.queue.length > 0) {
        await this.delay(this.batchDelay);
      }
    }

    this.processing = false;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  clear(): void {
    this.queue = [];
  }

  getQueueLength(): number {
    return this.queue.length;
  }
}

export function createIdleCallback(
  callback: () => void,
  options: { timeout?: number } = {}
): number {
  if ('requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback, { timeout: options.timeout || 2000 });
  }
  return setTimeout(callback, 1) as unknown as number;
}

export function cancelIdleCallback(id: number): void {
  if ('cancelIdleCallback' in window) {
    (window as any).cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function measurePerformance(name: string, fn: () => void): number {
  const start = performance.now();
  fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[CalmWeb] ${name}: ${(end - start).toFixed(2)}ms`);
  }
  
  return end - start;
}

export async function measureAsyncPerformance(name: string, fn: () => Promise<void>): Promise<number> {
  const start = performance.now();
  await fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[CalmWeb] ${name}: ${(end - start).toFixed(2)}ms`);
  }
  
  return end - start;
}