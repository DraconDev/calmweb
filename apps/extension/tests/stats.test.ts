import { describe, it, expect } from 'vitest';
import { generateWeeklyReport } from '../src/stats';
import type { EnhancedStats } from '@calmweb/shared';

describe('Stats Functions', () => {
  const mockStats: EnhancedStats = {
    totalFiltered: 100,
    byAction: {
      hide: 20,
      collapse: 50,
      blur: 20,
      neutralize: 10,
    },
    byPreset: {
      politics: 40,
      ragebait: 30,
      spoilers: 15,
      clickbait: 15,
    },
    topFilteredSources: ['youtube', 'reddit', 'twitter'],
    dailyHistory: [
      { date: '2024-01-15', count: 10 },
      { date: '2024-01-14', count: 15 },
      { date: '2024-01-13', count: 12 },
    ],
    timeSaved: 3600,
    lastReset: Date.now() - 86400000,
  };

  describe('generateWeeklyReport', () => {
    it('should generate a readable report', async () => {
      const report = await generateWeeklyReport(mockStats);
      
      expect(report).toContain('Weekly Report');
      expect(report).toContain('Politics');
      expect(report).toContain('Ragebait');
      expect(report).toContain('Time saved');
    });

    it('should include all preset categories', async () => {
      const report = await generateWeeklyReport(mockStats);
      
      expect(report).toContain('Politics');
      expect(report).toContain('Ragebait');
      expect(report).toContain('Spoilers');
      expect(report).toContain('Clickbait');
    });

    it('should include action breakdown', async () => {
      const report = await generateWeeklyReport(mockStats);
      
      expect(report).toContain('hidden');
      expect(report).toContain('collapsed');
      expect(report).toContain('blurred');
      expect(report).toContain('neutralized');
    });

    it('should include time saved calculation', async () => {
      const report = await generateWeeklyReport(mockStats);
      
      expect(report).toContain('hours');
    });

    it('should handle empty stats', async () => {
      const emptyStats: EnhancedStats = {
        totalFiltered: 0,
        byAction: { hide: 0, collapse: 0, blur: 0, neutralize: 0 },
        byPreset: { politics: 0, ragebait: 0, spoilers: 0, clickbait: 0 },
        topFilteredSources: [],
        dailyHistory: [],
        timeSaved: 0,
        lastReset: Date.now(),
      };
      
      const report = await generateWeeklyReport(emptyStats);
      expect(report).toContain('Weekly Report');
    });
  });
});
