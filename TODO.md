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

---

## Test Results
```
Test Files: 5 passed (5)
Tests: 82 passed (82)
TypeScript: Compiles clean
```

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CALMWEB ARCHITECTURE                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   ┌──────────┐    ┌──────────┐    ┌──────────────────┐   │
│   │  CONTENT │───►│ CLASSIFY │───►│     DECIDE       │   │
│   │  SCRIPTS │    │  ENGINE  │    │  (hide/blur/     │   │
│   │          │    │          │    │   neutralize/    │   │
│   │  Site    │    │  Rules   │    │   collapse/      │   │
│   │  Adapters│    │  Cache   │    │   reader)        │   │
│   └──────────┘    │  LLM     │    └──────────────────┘   │
│                    └──────────┘             │            │
│                                             ▼            │
│   ┌──────────────────────────────────────────────────┐   │
│   │                   RENDERER                       │   │
│   │  ┌─────────┐ ┌─────────┐ ┌──────────────────┐   │   │
│   │  │ Collapse│ │Neutralize│ │  SUPER READER   │   │   │
│   │  │ Overlay │ │Indicator │ │  5 Layouts      │   │   │
│   │  └─────────┘ └─────────┘ │  4 Themes       │   │   │
│   │                          └──────────────────┘   │   │
│   └──────────────────────────────────────────────────┘   │
│                                                           │
│   ┌──────────────────────────────────────────────────┐   │
│   │              PERFORMANCE & STATS                  │   │
│   │  LazyClassifier • BatchProcessor • EnhancedStats │   │
│   │  Debounce • Throttle • Context Menu              │   │
│   └──────────────────────────────────────────────────┘   │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

---

## Key Files Created

### Core Modules
```
apps/extension/src/
├── neutralizer/          # Text neutralization
│   ├── sentiment.ts      # Emotion detection
│   ├── tone-classifier.ts # Tone detection
│   ├── rewriter.ts       # Rewriting engine
│   ├── local-rules.ts    # 30+ patterns
│   └── llm-rewrite.ts    # LLM integration
│
├── renderer/             # UI rendering
│   ├── collapse.ts       # Collapse placeholder
│   ├── neutralize.ts     # Neutralization indicator
│   ├── reader.ts         # Reader overlay
│   ├── extractor/        # Article extraction
│   ├── layouts/          # 5 layouts
│   └── themes/           # 4 themes
│
├── presets/              # Filter presets
│   ├── politics.ts       # 60+ keywords
│   ├── ragebait.ts       # Outrage patterns
│   ├── spoilers.ts       # Spoiler detection
│   └── clickbait.ts      # Clickbait patterns
│
├── performance/          # Optimizations
│   └── index.ts          # LazyClassifier, BatchProcessor
│
├── shortcuts/            # Keyboard shortcuts
│   └── index.ts          # ShortcutManager
│
└── stats/                # Enhanced statistics
    └── index.ts          # Tracking, weekly reports
```

---

## Features Summary

### Filtering
- Hide, blur, collapse, or neutralize content
- Preset libraries for politics, ragebait, spoilers, clickbait
- Custom blocklist/allowlist for channels and keywords
- Per-site adapter support (YouTube, Reddit, X, universal)

### Neutralization
- Sentiment analysis with emotion detection
- Tone classification (6 manipulation types)
- 3 modes: light, medium, strict
- Local rules + LLM fallback
- Visual indicators with diff view

### Super Reader
- Article extraction from any webpage
- 5 layouts: Newspaper, Terminal, Card, Feed, Magazine
- 4 themes: Light, Dark, Sepia, Midnight
- Keyboard shortcut: Alt+R
- Toolbar with layout/theme switching

### Infrastructure
- Lazy classification with IntersectionObserver
- Batch processing for performance
- Context menu integration (6 items)
- Enhanced stats with daily history
- Weekly report generation
- Debounce/throttle utilities

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt+R` | Toggle Super Reader |
| `Alt+Shift+E` | Toggle Extension |
| `Alt+L` | Cycle Reader Layout |
| `Esc` | Close Reader |

---

## Context Menu Items

1. **Toggle CalmWeb** - Enable/disable globally
2. **Open in Super Reader** - Launch reader on current page
3. **Neutralize Selected Text** - Rewrite selected text
4. **Open Settings** - Open options page
5. **View Statistics** - View filtering stats

---

## See Also
- [PLAN.md](./PLAN.md) - Detailed implementation plan
- [BLUEPRINT.md](./BLUEPRINT.md) - Original system design