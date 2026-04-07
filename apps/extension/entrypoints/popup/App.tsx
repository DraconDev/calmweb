import { useEffect, useState } from 'react';
import { sendToBackground } from '@dracon/wxt-shared/extension';
import { BookOpen, Settings, Shield } from 'lucide-react';
import browser from 'webextension-polyfill';
import clsx from 'clsx';

export default function PopupApp() {
  const [textModeEnabled, setTextModeEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadState();
  }, []);

  const loadState = async () => {
    try {
      const enabled = await sendToBackground<boolean>({ type: 'calmweb:isTextModeEnabled' });
      setTextModeEnabled(enabled ?? false);
    } catch (error) {
      console.error('[Popup] Failed to load state:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTextMode = async () => {
    try {
      const newState = await sendToBackground<boolean>({ type: 'calmweb:toggleTextMode' });
      setTextModeEnabled(newState ?? !textModeEnabled);
    } catch (error) {
      console.error('[Popup] Failed to toggle text mode:', error);
    }
  };

  const openSettings = () => {
    browser.runtime.openOptionsPage();
  };

  if (loading) {
    return (
      <div className="w-64 h-48 flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-72 bg-background text-foreground p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="text-primary" size={20} />
          <span className="font-bold text-lg">CalmWeb</span>
        </div>
        <button
          onClick={openSettings}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors"
          title="Open Settings"
        >
          <Settings size={18} className="text-muted-foreground" />
        </button>
      </div>

      <div className="space-y-3">
        <div
          className={clsx(
            'flex items-center justify-between p-3 rounded-xl border-2 transition-all cursor-pointer',
            textModeEnabled
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-muted-foreground/50'
          )}
          onClick={toggleTextMode}
        >
          <div className="flex items-center gap-3">
            <div className={clsx(
              'p-2 rounded-lg',
              textModeEnabled ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
            )}>
              <BookOpen size={18} />
            </div>
            <div>
              <p className="font-medium text-sm">Text Mode</p>
              <p className="text-xs text-muted-foreground">
                {textModeEnabled ? 'Active' : 'Inactive'}
              </p>
            </div>
          </div>
          <div
            className={clsx(
              'w-10 h-6 rounded-full transition-colors relative',
              textModeEnabled ? 'bg-primary' : 'bg-muted'
            )}
          >
            <div
              className={clsx(
                'absolute top-1 w-4 h-4 rounded-full bg-white transition-transform',
                textModeEnabled ? 'translate-x-5' : 'translate-x-1'
              )}
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Text-only content firewall
        </p>
      </div>
    </div>
  );
}
