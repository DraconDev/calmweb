import { defineConfig } from 'wxt';
import { resolve } from 'path';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: process.env.NODE_ENV === "development"
      ? "__MSG_extNameDev__"
      : "__MSG_extName__",
    description: "__MSG_extDescription__",
    default_locale: "en",
    version: "1.0.0",
    permissions: ["storage", "activeTab", "scripting"],
    host_permissions: [
      "*://*.youtube.com/*",
      "*://*.reddit.com/*",
      "*://*.x.com/*",
      "*://*.twitter.com/*",
      "*://*.news.com/*",
      "*://*.bbc.com/*",
      "*://*.cnn.com/*",
      "*://*.nytimes.com/*"
    ],
    icons: {
      "16": "icon/16.png",
      "32": "icon/32.png",
      "48": "icon/48.png",
      "96": "icon/96.png",
      "128": "icon/128.png",
    },
    action: {
      default_popup: "popup.html",
      default_icon: {
        "16": "icon/16.png",
        "32": "icon/32.png",
        "48": "icon/48.png",
        "128": "icon/128.png",
      },
    },
    options_ui: {
      page: "options.html",
      open_in_tab: true,
    },
    background: {
      service_worker: "background.ts",
      type: "module",
    },
    web_accessible_resources: [
      {
        resources: ["styles.css", "assets/*"],
        matches: ["<all_urls>"],
      },
    ],
    // Content scripts for supported sites
    content_scripts: [
      {
        matches: ["<all_urls>"],
        js: ["universal.js"],
        run_at: "document_idle",
      },
      {
        matches: ["*://*.youtube.com/*"],
        js: ["youtube.js"],
        run_at: "document_idle",
      },
      {
        matches: ["*://*.reddit.com/*"],
        js: ["reddit.js"],
        run_at: "document_idle",
      },
      {
        matches: ["*://*.x.com/*", "*://*.twitter.com/*"],
        js: ["x.js"],
        run_at: "document_idle",
      },
    ],
  },
  vite: () => ({
    resolve: {
      alias: {
        '@': resolve(__dirname),
        '@components': resolve(__dirname, 'src/components'),
      },
    },
  }),
});
