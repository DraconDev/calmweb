import { useEffect, useState } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { MESSAGE_TYPES } from '@/src/messaging';
import { Container, Card, Header, Footer, Switch, Spinner } from '@components';
import { Settings, Shield, Activity, BarChart3, ExternalLink } from 'lucide-react';
import type { Stats } from '@calmweb/shared';

export default function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [stats, setStats] = useState<Stats>({ totalFiltered: 0, lastReset: 0 });
  const [loading, setLoading] = useState(true);
  const [currentSite, setCurrentSite] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const url = tabs[0]?.url || '';
      const hostname = new URL(url).hostname;
      setCurrentSite(hostname);

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

  const openOptions = () => {
    chrome.runtime.openOptionsPage();
  };

  if (loading) {
    return (
      <Container className="w-[360px] h-[450px] flex items-center justify-center">
        <Spinner size="lg" />
      </Container>
    );
  }

  return (
    <Container className="w-[360px] min-h-[480px] p-0 flex flex-col bg-background">
      <Header className="bg-primary/5 border-b-primary/10 py-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-xl text-primary-foreground shadow-lg shadow-primary/20">
              <Shield size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">CalmWeb</h1>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                <Activity size={12} className="text-green-500 animate-pulse" />
                Protection Active
              </div>
            </div>
          </div>
          <Switch
            checked={enabled}
            onCheckedChange={toggleEnabled}
            className="scale-110"
          />
        </div>
      </Header>

      <main className="flex-1 p-4 space-y-4">
        <Card variant="default" padding="lg" className="border-primary/10 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
            <BarChart3 size={80} />
          </div>
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Filtered</span>
            <div className="text-4xl font-black text-primary tabular-nums">
              {stats.totalFiltered.toLocaleString()}
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-primary/5 pt-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-muted-foreground">Current Site</span>
              <div className="text-sm font-semibold truncate" title={currentSite}>{currentSite}</div>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-muted-foreground">Session Status</span>
              <div className="text-sm font-semibold text-green-500">Monitoring</div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={openOptions}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-all group"
          >
            <Settings size={20} className="text-primary group-hover:rotate-45 transition-transform" />
            <span className="text-xs font-bold">Settings</span>
          </button>
          
          <button
            onClick={openOptions}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-primary/10 bg-card hover:bg-muted transition-all group"
          >
            <ExternalLink size={20} className="text-muted-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span className="text-xs font-bold">Dashboard</span>
          </button>
        </div>
      </main>

      <Footer className="py-4 bg-muted/30 border-t-primary/5">
        <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
          <span>v1.0.0</span>
          <span>•</span>
          <span>Open Source Filtering</span>
        </div>
      </Footer>
    </Container>
  );
}

