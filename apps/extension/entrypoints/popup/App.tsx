import { useEffect, useState } from 'react';
import { sendToBackground, getActiveTab } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import { youtubeAdapter, redditAdapter, xAdapter } from '@/src/adapters';
import { Container, Card, Header, Footer, Switch, Spinner } from '@/src/components';
import type { Stats } from '@calmweb/shared';

export default function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [stats, setStats] = useState<Stats>({ totalFiltered: 0, lastReset: 0 });
  const [loading, setLoading] = useState(true);
  const [siteSupported, setSiteSupported] = useState(false);
  const [currentSite, setCurrentSite] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const tab = await getActiveTab();
      const url = tab?.url || '';
      const hostname = new URL(url).hostname;
      setCurrentSite(hostname);

      const adapters = [youtubeAdapter, redditAdapter, xAdapter];
      const supported = adapters.some(adapter =>
        adapter.matches.some(regex => regex.test(url))
      );
      setSiteSupported(supported);

      const settings = await sendToBackground<{ enabled: boolean }>({
        type: MESSAGE_TYPES.GET_SETTINGS,
      });
      if (settings) setEnabled(settings.enabled);

      const statsData = await sendToBackground<Stats>({
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

  const resetStats = async () => {
    await sendToBackground({ type: MESSAGE_TYPES.CLEAR_CACHE });
    await sendToBackground({ type: MESSAGE_TYPES.UPDATE_SETTINGS, settings: {} }); // trigger stats reset via background
    setStats({ totalFiltered: 0, lastReset: Date.now() });
  };

  const openOptions = () => {
    chrome.runtime.openOptionsPage();
  };

  if (loading) {
    return (
      <Container className="min-h-[400px] flex items-center justify-center">
        <Spinner size="lg" />
      </Container>
    );
  }

  return (
    <Container className="min-h-[400px] space-y-4 py-4">
      <Header
        title="CalmWeb"
        subtitle={siteSupported ? `Active on ${currentSite}` : 'Site not supported'}
      />

      {!siteSupported ? (
        <Card variant="muted" padding="md">
          <p className="text-sm text-yellow-600 dark:text-yellow-400">
            This site is not supported yet.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Supported: YouTube, Reddit, X
          </p>
        </Card>
      ) : (
        <Card variant="default" padding="md">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Enabled</span>
            <Switch
              checked={enabled}
              onCheckedChange={toggleEnabled}
              id="enable-switch"
            />
          </div>

          <div className="mt-4 space-y-2 text-sm">
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

          <div className="mt-4 pt-3 border-t">
            <button
              onClick={resetStats}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Reset statistics
            </button>
          </div>
        </Card>
      )}

      <Footer>
        <button
          onClick={openOptions}
          className="text-sm text-primary hover:underline"
        >
          Open Options
        </button>
      </Footer>
    </Container>
  );
}
