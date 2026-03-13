# CalmWeb - "See What You Want, How You Want It"

## Vision
A browser extension that transforms your web experience in three ways:
1. **Filter** - Remove what you don't want to see
2. **Neutralize** - Transform text to be calm and neutral
3. **Super Reader** - Consume any site's content in your preferred layout

---

## Current Sprint: Complete! ✅

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

### Sprint 4 (Week 8-9): Polish & Infrastructure - Remaining
- [ ] Performance optimizations (lazy classification)
- [ ] Context menu integration
- [ ] Enhanced stats and weekly reports

---

## Test Results
```
Test Files: 4 passed (4)
Tests: 62 passed (62)
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
└───────────────────────────────────────────────────────────┘
```

---

## Key Files Created

### Neutralizer Module
```
apps/extension/src/neutralizer/
├── index.ts          # Main exports
├── sentiment.ts      # Emotion detection
├── tone-classifier.ts # Tone detection (ragebait, clickbait, etc.)
├── rewriter.ts       # Text rewriting engine
├── local-rules.ts    # 30+ neutralization patterns
└── llm-rewrite.ts    # LLM-powered rewriting
```

### Super Reader Module
```
apps/extension/src/renderer/
├── index.ts          # Main exports
├── collapse.ts       # Collapse placeholder
├── neutralize.ts     # Neutralization indicator
├── reader.ts         # Reader overlay
├── extractor/
│   ├── index.ts
│   └── article.ts    # Article extraction
├── layouts/
│   ├── index.ts      # 5 layouts
│   └── ...           # newspaper, terminal, card, feed, magazine
└── themes/
    └── index.ts      # 4 themes
```

### Presets Module
```
apps/extension/src/presets/
├── index.ts          # Preset loader
├── types.ts          # FilterPreset interface
├── politics.ts       # 60+ keywords, 30+ channels
├── ragebait.ts       # Outrage patterns
├── spoilers.ts       # Spoiler detection
└── clickbait.ts      # Clickbait patterns
```

---

## Options Page Tabs

1. **Overview** - Stats, status, quick controls
2. **Presets** - Toggle politics, ragebait, spoilers, clickbait
3. **Custom Rules** - Blocklist/allowlist channels & keywords
4. **Neutralize** - Mode (light/medium/strict), indicators, exclusions
5. **AI & Advanced** - Processing mode, API keys, cache

---

## Keyboard Shortcuts

- `Alt+R` - Toggle Super Reader

---

## See Also
- [PLAN.md](./PLAN.md) - Detailed implementation plan
- [BLUEPRINT.md](./BLUEPRINT.md) - Original system design