# CalmWeb - "See What You Want, How You Want It"

## Vision
A browser extension that transforms your web experience in three ways:
1. **Filter** - Remove what you don't want to see
2. **Neutralize** - Transform text to be calm and neutral  
3. **Super Reader** - Consume any site's content in your preferred layout

---

## All Sprints Complete! ✅

### Sprint 1 (Week 1-2): Enhanced Filtering ✅
- ✅ Collapse action (placeholder + expand)
- ✅ Universal Adapter v2 (priority selectors, validation)
- ✅ Preset Libraries (politics, ragebait, spoilers, clickbait)

### Sprint 2 (Week 3-4): Neutralization Engine ✅
- ✅ Core neutralizer (sentiment, tone, rewriter)
- ✅ Neutralization UI (indicators, diff view, undo)
- ✅ Neutralization settings tab

### Sprint 3 (Week 5-7): Super Reader Mode ✅
- ✅ Article extraction engine
- ✅ 5 layout templates (Newspaper, Terminal, Card, Feed, Magazine)
- ✅ Reader overlay UI with toolbar
- ✅ 4 themes (Light, Dark, Sepia, Midnight)
- ✅ Keyboard shortcut (Alt+R)

### Sprint 4 (Week 8-9): Polish & Infrastructure ✅
- ✅ Performance optimizations (lazy classification, batch processing)
- ✅ Context menu integration (6 menu items)
- ✅ Enhanced stats tracking (daily history, time saved)
- ✅ Keyboard shortcuts management

### Final Polish ✅
- ✅ Overhauled popup with quick toggles
- ✅ Hash-based tab navigation for settings page
- ✅ Context menu permission added

---

## Test Results
```
Test Files: 5 passed (5)
Tests: 82 passed (82)
TypeScript: Compiles clean
```

---

## Popup Features

The new popup (380x520px) includes:
- **Header**: Shield icon with status indicator, master toggle
- **Stats Card**: Total filtered, presets active, neutralization status
- **Quick Filters**: 4 preset toggles (Politics, Ragebait, Spoilers, Clickbait)
- **Neutralization Toggle**: One-click enable/disable with status
- **Action Buttons**: Presets, Rules, Dashboard (opens settings page in new tab)

## Settings Page

Full dashboard with sidebar navigation:
- **Overview**: Stats, status, master toggle
- **Presets**: Toggle presets with descriptions
- **Custom Rules**: Blocklist/allowlist channels & keywords
- **Neutralize**: Mode, indicators, domain exclusions
- **AI & Advanced**: Processing mode, API keys, cache

Hash routing: `options.html#presets`, `options.html#rules`, etc.

---

## Context Menu Items

Right-click anywhere to access:
1. Toggle CalmWeb
2. Open in Super Reader
3. Neutralize Selected Text
4. Open Settings
5. View Statistics

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt+R` | Toggle Super Reader |
| `Alt+Shift+E` | Toggle Extension |
| `Alt+L` | Cycle Reader Layout |
| `Esc` | Close Reader |

---

## See Also
- [PLAN.md](./PLAN.md) - Detailed implementation plan
- [BLUEPRINT.md](./BLUEPRINT.md) - Original system design