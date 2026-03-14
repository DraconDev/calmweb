import { describe, it, expect, beforeEach } from 'vitest';
import { StatsTracker, getWeeklyReport, type DailyStats } from '../src/stats';

describe('StatsTracker', () => {
  let tracker: StatsTracker;

  beforeEach(() => {
    tracker = new StatsTracker();
  });

  it('should start with zero stats', () => {
    const stats = tracker.getStats();
    expect(stats.totalFiltered).toBe(0);
    expect(stats.itemsCollapsed).toBe(0);
    expect(stats.itemsBlurred).toBe(0);
    expect(stats.itemsHidden).toBe(0);
  });

  it('should track collapsed items', () => {
    tracker.recordAction('collapse', 'politics');
    tracker.recordAction('collapse', 'ragebait');
    
    const stats = tracker.getStats();
    expect(stats.totalFiltered).toBe(2);
    expect(stats.itemsCollapsed).toBe(2);
  });

  it('should track blurred items', () => {
    tracker.recordAction('blur', 'spoilers');
    
    const stats = tracker.getStats();
    expect(stats.totalFiltered).toBe(1);
    expect(stats.itemsBlurred).toBe(1);
  });

  it('should track hidden items', () => {
    tracker.recordAction('hide', 'politics');
    
    const stats = tracker.getStats();
    expect(stats.totalFiltered).toBe(1);
    expect(stats.itemsHidden).toBe(1);
  });

  it('should track by preset', () => {
    tracker.recordAction('collapse', 'politics');
    tracker.recordAction('collapse', 'politics');
    tracker.recordAction('collapse', 'ragebait');
    
    const stats = tracker.getStats();
    expect(stats.byPreset.politics).toBe(2);
    expect(stats.byPreset.ragebait).toBe(1);
  });

  it('should track by site', () => {
    tracker.recordAction('collapse', 'politics', 'youtube');
    tracker.recordAction('collapse', 'politics', 'reddit');
    
    const stats = tracker.getStats();
    expect(stats.bySite.youtube).toBe(1);
    expect(stats.bySite.reddit).toBe(1);
  });

  it('should calculate time saved', () => {
    for (let i = 0; i < 10; i++) {
      tracker.recordAction('collapse', 'politics');
    }
    
    const stats = tracker.getStats();
    expect(stats.timeSavedMs).toBeGreaterThan(0);
  });

  it('should reset stats', () => {
    tracker.recordAction('collapse', 'politics');
    tracker.reset();
    
    const stats = tracker.getStats();
    expect(stats.totalFiltered).toBe(0);
  });

  it('should export stats as JSON', () => {
    tracker.recordAction('collapse', 'politics');
    const exported = tracker.exportJSON();
    
    expect(() => JSON.parse(exported)).not.toThrow();
    const parsed = JSON.parse(exported);
    expect(parsed.totalFiltered).toBe(1);
  });
});

describe('Daily Stats', () => {
  it('should track daily history', () => {
    const tracker = new StatsTracker();
    tracker.recordAction('collapse', 'politics');
    tracker.recordAction('collapse', 'ragebait');
    
    const history = tracker.getDailyHistory(7);
    expect(history.length).toBe(7);
    expect(history[0].totalFiltered).toBe(2);
  });

  it('should return correct number of days', () => {
    const tracker = new StatsTracker();
    const history = tracker.getDailyHistory(30);
    expect(history.length).toBe(30);
  });
});

describe('Weekly Report', () => {
  it('should generate weekly report', () => {
    const tracker = new StatsTracker();
    tracker.recordAction('collapse', 'politics');
    tracker.recordAction('blur', 'spoilers');
    tracker.recordAction('hide', 'ragebait');
    
    const report = getWeeklyReport(tracker);
    
    expect(report.totalFiltered).toBe(3);
    expect(report.topPresets).toBeDefined();
    expect(report.topSites).toBeDefined();
    expect(report.timeSavedMs).toBeGreaterThan(0);
  });

  it('should identify top presets', () => {
    const tracker = new StatsTracker();
    tracker.recordAction('collapse', 'politics');
    tracker.recordAction('collapse', 'politics');
    tracker.recordAction('collapse', 'politics');
    tracker.recordAction('collapse', 'ragebait');
    
    const report = getWeeklyReport(tracker);
    
    expect(report.topPresets[0]?.preset).toBe('politics');
    expect(report.topPresets[0]?.count).toBe(3);
  });

  it('should identify top sites', () => {
    const tracker = new StatsTracker();
    tracker.recordAction('collapse', 'politics', 'youtube');
    tracker.recordAction('collapse', 'politics', 'youtube');
    tracker.recordAction('collapse', 'politics', 'reddit');
    
    const report = getWeeklyReport(tracker);
    
    expect(report.topSites[0]?.site).toBe('youtube');
    expect(report.topSites[0]?.count).toBe(2);
  });

  it('should handle empty stats', () => {
    const tracker = new StatsTracker();
    const report = getWeeklyReport(tracker);
    
    expect(report.totalFiltered).toBe(0);
    expect(report.topPresets.length).toBe(0);
    expect(report.topSites.length).toBe(0);
  });
});

describe('Stats Persistence', () => {
  it('should serialize and deserialize stats', () => {
    const tracker1 = new StatsTracker();
    tracker1.recordAction('collapse', 'politics');
    tracker1.recordAction('blur', 'spoilers');
    
    const exported = tracker1.exportJSON();
    
    const tracker2 = new StatsTracker();
    tracker2.importJSON(exported);
    
    const stats = tracker2.getStats();
    expect(stats.totalFiltered).toBe(2);
    expect(stats.itemsCollapsed).toBe(1);
    expect(stats.itemsBlurred).toBe(1);
  });
});
