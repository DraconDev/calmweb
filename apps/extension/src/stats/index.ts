/**
 * Enhanced Stats Tracking for CalmWeb
 */

import type { EnhancedStats, ActionDecision } from '@calmweb/shared';
import { defaultEnhancedStats } from '@calmweb/shared';
import { storage } from 'wxt/storage';

const STATS_KEY = 'local:enhancedStats';

export async function getEnhancedStats(): Promise<EnhancedStats> {
  try {
    const stats = await storage.getItem<EnhancedStats>(STATS_KEY);
    return stats || defaultEnhancedStats;
  } catch {
    return defaultEnhancedStats;
  }
}

export async function saveEnhancedStats(stats: EnhancedStats): Promise<void> {
  await storage.setItem(STATS_KEY, stats);
}

export async function incrementStat(
  action: ActionDecision,
  preset?: string,
  source?: string
): Promise<void> {
  const stats = await getEnhancedStats();

  stats.totalFiltered += 1;

  if (action !== 'show' && action !== 'rebuild') {
    stats.byAction[action] = (stats.byAction[action] || 0) + 1;
  }

  if (preset && preset in stats.byPreset) {
    stats.byPreset[preset as keyof typeof stats.byPreset] += 1;
  }

  if (source) {
    const existing = stats.topFilteredSources.indexOf(source);
    if (existing >= 0) {
      stats.topFilteredSources.splice(existing, 1);
    }
    stats.topFilteredSources.unshift(source);
    stats.topFilteredSources = stats.topFilteredSources.slice(0, 10);
  }

  stats.timeSaved += estimateTimeSaved(action);

  const today = new Date().toISOString().split('T')[0];
  const todayEntry = stats.dailyHistory.find(h => h.date === today);
  if (todayEntry) {
    todayEntry.count += 1;
  } else {
    stats.dailyHistory.push({ date: today, count: 1 });
    stats.dailyHistory = stats.dailyHistory.slice(-30);
  }

  await saveEnhancedStats(stats);
}

function estimateTimeSaved(action: ActionDecision): number {
  const estimates: Record<string, number> = {
    hide: 60,
    collapse: 30,
    blur: 15,
    neutralize: 10,
  };
  return estimates[action] || 0;
}

export async function resetEnhancedStats(): Promise<void> {
  await saveEnhancedStats({
    ...defaultEnhancedStats,
    lastReset: Date.now(),
  });
}

export async function generateWeeklyReport(stats: EnhancedStats): Promise<string> {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const weekStart = oneWeekAgo.toISOString().split('T')[0];

  const weeklyCounts = stats.dailyHistory
    .filter(h => h.date >= weekStart)
    .reduce((sum, h) => sum + h.count, 0);

  const minutesSaved = Math.round(stats.timeSaved / 60);
  const hoursSaved = (minutesSaved / 60).toFixed(1);

  const topPreset = Object.entries(stats.byPreset)
    .sort((a, b) => b[1] - a[1])[0];

  const topAction = Object.entries(stats.byAction)
    .sort((a, b) => b[1] - a[1])[0];

  return `📊 CalmWeb Weekly Report

This week, CalmWeb filtered ${weeklyCounts} items for you.

Breakdown:
• Politics: ${stats.byPreset.politics} items
• Ragebait: ${stats.byPreset.ragebait} items  
• Spoilers: ${stats.byPreset.spoilers} items
• Clickbait: ${stats.byPreset.clickbait} items

Actions taken:
• ${stats.byAction.hide} hidden
• ${stats.byAction.collapse} collapsed
• ${stats.byAction.blur} blurred
• ${stats.byAction.neutralize} neutralized

Time saved: ~${hoursSaved} hours

Top filtered source: ${stats.topFilteredSources[0] || 'N/A'}

Keep browsing calmly! 🛡️`;
}

export async function getStatsSummary(): Promise<{
  total: number;
  today: number;
  thisWeek: number;
  topPreset: string;
  topAction: string;
}> {
  const stats = await getEnhancedStats();
  
  const today = new Date().toISOString().split('T')[0];
  const todayCount = stats.dailyHistory.find(h => h.date === today)?.count || 0;

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const weekStart = oneWeekAgo.toISOString().split('T')[0];
  const weekCount = stats.dailyHistory
    .filter(h => h.date >= weekStart)
    .reduce((sum, h) => sum + h.count, 0);

  const topPreset = Object.entries(stats.byPreset)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || 'none';

  const topAction = Object.entries(stats.byAction)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || 'none';

  return {
    total: stats.totalFiltered,
    today: todayCount,
    thisWeek: weekCount,
    topPreset,
    topAction,
  };
}