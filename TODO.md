# CalmWeb - "See What You Want, How You Want It"

## Vision
A browser extension that transforms your web experience in three ways:
1. **Filter** - Remove what you don't want to see
2. **Neutralize** - Transform text to be calm and neutral
3. **Super Reader** - Consume any site's content in your preferred layout

---

## Current Sprint (Week 3-4): Neutralization Engine

### 🎯 Goals
- [x] Core neutralizer (sentiment, tone classification, rewriting)
- [ ] Neutralization UI (inline markers, diff view, undo)
- [ ] Neutralization settings in options page

### Tasks

#### Core Neutralizer ✅
- [x] Create `src/neutralizer/` directory
- [x] `sentiment.ts` - Sentiment analysis with emotion detection
- [x] `tone-classifier.ts` - Detect ragebait, clickbait, fear-mongering tones
- [x] `rewriter.ts` - Main text rewriting engine
- [x] `local-rules.ts` - Rule-based neutralization (30+ patterns)
- [x] `llm-rewrite.ts` - LLM-powered rewriting
- [x] `index.ts` - Export `analyzeForNeutralization()`, `neutralizeText()`
- [x] Write comprehensive tests (27 tests for neutralizer)

#### Neutralization UI (Next)
- [ ] Create `src/renderer/neutralize.ts` with indicator
- [ ] Add diff view component for showing original vs rewritten
- [ ] Add per-item undo functionality
- [ ] Add neutralization styles to CSS

#### Neutralization Settings
- [ ] Add NeutralizationSettings to shared types
- [ ] Add Neutralize tab to options page
- [ ] Add mode selector (light/medium/strict)
- [ ] Add domain exclusion list

---

## Sprint 1 (Week 1-2): Enhanced Filtering ✅

### Completed
- [x] Implement **Collapse** action (placeholder + expand)
- [x] Enhance **Universal Adapter** for reliable extraction
- [x] Add **Preset Libraries** with curated filter lists
- [x] All 45 tests passing

---

## Sprint 3 (Week 5-7): Super Reader Mode

### 🎯 Goals
- [ ] Article extraction engine
- [ ] 5 layout templates (Newspaper, Terminal, Card, Feed, Magazine)
- [ ] Reader overlay UI with toolbar
- [ ] Reader settings and keyboard shortcuts

### Key Files to Create
```
src/renderer/
├── layouts/
│   ├── newspaper.ts
│   ├── terminal.ts
│   ├── card.ts
│   ├── feed.ts
│   └── magazine.ts
├── extractor/
│   ├── article.ts
│   ├── transcript.ts
│   └── thread.ts
entrypoints/
└── reader.ts
```

---

## Sprint 4 (Week 8-9): Polish & Infrastructure

### 🎯 Goals
- [ ] Performance optimizations (lazy classification, pre-processing)
- [ ] Keyboard shortcuts
- [ ] Context menu integration
- [ ] Enhanced stats and weekly reports

---

## Completed ✅

- [x] Core extension architecture
- [x] YouTube, Reddit, X/Twitter adapters
- [x] Universal adapter (basic)
- [x] Local rules classifier
- [x] BYOK LLM integration
- [x] Hosted LLM framework
- [x] Popup UI (Quick View)
- [x] Options page (Dashboard with sidebar)
- [x] Icon assets (shield logo)
- [x] Hide/Blur/Neutralize/Collapse actions
- [x] Decision caching
- [x] TypeScript compilation clean
- [x] All 45 tests passing
- [x] **Neutralizer Core** (Sprint 2)
  - Sentiment analysis with emotion detection
  - Tone classification (ragebait, clickbait, fear-mongering, etc.)
  - Local rules rewriter (30+ neutralization patterns)
  - LLM-powered rewriting for complex cases
  - Mode support (light/medium/strict)

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
│   │  │Original │ │Blurred  │ │ Neutralized Text │   │   │
│   │  │DOM      │ │Overlay  │ │ (AI rewrite)     │   │   │
│   │  └─────────┘ └─────────┘ └──────────────────┘   │   │
│   │  ┌─────────────────────────────────────────┐    │   │
│   │  │           SUPER READER LAYOUT            │    │   │
│   │  │  Unified view for any content source     │    │   │
│   │  └─────────────────────────────────────────┘    │   │
│   └──────────────────────────────────────────────────┘   │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

---

## Quick Reference

### Key Directories
```
apps/extension/
├── entrypoints/          # WXT entry points
│   ├── background.ts     # Service worker
│   ├── popup/            # Popup UI
│   ├── options/          # Options page
│   ├── youtube.ts        # YouTube content script
│   ├── reddit.ts         # Reddit content script
│   ├── x.ts              # X/Twitter content script
│   └── universal.ts      # Universal content script
├── src/
│   ├── adapters/         # Site-specific adapters
│   ├── components/       # React components
│   ├── renderer/         # Render actions (collapse, neutralize)
│   ├── neutralizer/      # Text neutralization engine
│   ├── presets/          # Filter presets
│   └── messaging/        # Message types
├── utils/
│   ├── classifier.ts     # Classification logic
│   └── storage.ts        # Storage utilities
└── tests/                # Test files

packages/shared/
└── src/
    └── index.ts          # Shared types and schemas
```

### Message Types
- `CLASSIFY_UNIT` - Classify a content unit
- `GET_SETTINGS` - Get user settings
- `UPDATE_SETTINGS` - Update settings
- `CLEAR_CACHE` - Clear decision cache
- `GET_STATS` - Get statistics
- `INCREMENT_STAT` - Increment a stat

### Action Decisions
- `show` - No modification
- `blur` - CSS blur with hover reveal
- `hide` - Remove from DOM
- `neutralize` - Replace title with neutral version
- `collapse` - Show placeholder with expand option
- `rebuild` - (Future) Restructure content card

---

## See Also
- [PLAN.md](./PLAN.md) - Detailed implementation plan
- [BLUEPRINT.md](./BLUEPRINT.md) - Original system design