# CalmWeb - "See What You Want, How You Want It"

## Vision
A browser extension that transforms your web experience in three ways:
1. **Filter** - Remove what you don't want to see
2. **Neutralize** - Transform text to be calm and neutral
3. **Super Reader** - Consume any site's content in your preferred layout

---

## Current Sprint (Week 1-2)

### 🎯 Primary Goals
- [ ] Implement **Collapse** action (placeholder + expand)
- [ ] Enhance **Universal Adapter** for reliable extraction
- [ ] Add **Preset Libraries** with curated filter lists

### Tasks

#### Collapse Action
- [ ] Add `collapse` to `ActionDecisionSchema` in shared types
- [ ] Create `src/renderer/collapse.ts` with placeholder logic
- [ ] Update all adapters with `collapse` case in `applyDecision()`
- [ ] Add CSS styles for collapse placeholder
- [ ] Update classifier to return `collapse` decision
- [ ] Write tests for collapse renderer

#### Universal Adapter v2
- [ ] Implement priority-based selector discovery
- [ ] Add content validation (min text, title presence, visibility)
- [ ] Create fallback dynamic selector discovery
- [ ] Add iframe/embed detection for embedded content
- [ ] Write comprehensive adapter tests

#### Preset Libraries
- [ ] Create `src/presets/` directory structure
- [ ] Implement `FilterPreset` interface
- [ ] Write `politics.ts` preset with expanded keywords
- [ ] Write `ragebait.ts` preset
- [ ] Write `spoilers.ts` preset  
- [ ] Write `clickbait.ts` preset
- [ ] Create smart presets (no-negativity, focus-mode, entertainment-only)
- [ ] Integrate preset loader with classifier

---

## Next Sprint (Week 3-4): Neutralization Engine

### 🎯 Goals
- [ ] Core neutralizer (sentiment, tone classification, rewriting)
- [ ] Neutralization UI (inline markers, diff view, undo)
- [ ] Neutralization settings in options page

### Key Files to Create
```
src/neutralizer/
├── index.ts
├── sentiment.ts
├── tone-classifier.ts
├── rewriter.ts
├── local-rules.ts
└── llm-rewrite.ts
```

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
- [x] Hide/Blur/Neutralize actions
- [x] Decision caching
- [x] TypeScript compilation clean
- [x] All 26 tests passing

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
│   ├── renderer/         # (NEW) Render actions
│   ├── neutralizer/      # (NEW) Text neutralization
│   ├── presets/          # (NEW) Filter presets
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
- `collapse` - (NEW) Show placeholder with expand option
- `rebuild` - (Future) Restructure content card

---

## See Also
- [PLAN.md](./PLAN.md) - Detailed implementation plan
- [BLUEPRINT.md](./BLUEPRINT.md) - Original system design