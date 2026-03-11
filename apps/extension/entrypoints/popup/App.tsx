import { useEffect, useState } from 'react';
import { sendToBackground, getActiveTab } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import { youtubeAdapter, redditAdapter, xAdapter } from '@/src/adapters';
import './style.css';

export default function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [stats, setStats] = useState({ totalFiltered: 0, lastReset: 0 });
  const [loading, setLoading] = useState(true);
  const [siteSupported, setSiteSupported] = useState(false);
  const [currentSite, setCurrentSite] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Get active tab URL
      const tab = await getActiveTab();
      const url = tab?.url || '';
      const hostname = new URL(url).hostname;
      setCurrentSite(hostname);

      // Check if any adapter matches
      const adapters = [youtubeAdapter, redditAdapter, xAdapter];
      const supported = adapters.some(adapter => 
        adapter.matches.some(regex => regex.test(url))
      );
      setSiteSupported(supported);

      // Get settings
      const settings = await sendToBackground<{ enabled: boolean }>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settings) setEnabled(settings.enabled);

      // Get stats
      const statsData = await sendToBackground<{ totalFiltered: number; lastReset: number }>({
        type: MESSAGE_TYPES.GET_STATS,
      });
      if (statsData) setStats(statsData);
    } catch (error) {
      console.error('[Popup] Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleEnabled = async (checked: boolean) => {
    setEnabled(checked);
    await sendToBackground({
      type: MESSAGE_TYPES.UPDATE_SETTINGS,
      settings: { enabled: checked },
    });
  };

  const openOptions = () => {
    chrome.runtime.openOptionsPage();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="w-80 p-4 space-y-4 bg-background text-foreground">
      <header className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">CW</span>
        </div>
        <h1 className="text-lg font-semibold">CalmWeb</h1>
      </header>

      {!siteSupported ? (
        <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
          <p className="text-sm text-yellow-600 dark:text-yellow-400">
            This site is not supported yet.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Supported: YouTube, Reddit, X
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Enabled</span>
            <button
              role="switch"
              aria-checked={enabled}
              onClick={() => toggleEnabled(!enabled)}
              className={`w-11 h-6 rounded-full transition-colors ${
                enabled ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  enabled ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className={`font-medium ${enabled ? 'text-green-500' : 'text-gray-500'}`}>
                {enabled ? 'Active' : 'Paused'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Items filtered</span>
              <span className="font-mono font-medium">{stats.totalFiltered.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Site</span>
              <span className="font-mono text-xs max-w-[120px] truncate" title={currentSite}>
                {currentSite}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="border-t pt-3 mt-3">
        <button
          onClick={openOptions}
          className="w-full px-3 py-2 text-sm text-primary hover:bg-muted rounded-md transition-colors"
        >
          Open Options
        </button>
      </div>
    </div>
  );
}
