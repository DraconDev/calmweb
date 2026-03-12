# CalmWeb - "See What You Want, How You Want It"

## Vision
A browser extension that transforms your web experience in three ways:
1. **Filter** - Remove what you don't want to see
2. **Neutralize** - Transform text to be calm and neutral  
3. **Super Reader** - Consume any site's content in your preferred layout

---

## Phase 1: Core Filtering Engine

### Content Detection
- [ ] **Universal Adapter**: Robust DOM extraction for any website
- [ ] **Site-specific Adapters**: Optimize for top 20 sites (YouTube, Reddit, X, news sites)
- [ ] **Dynamic Selectors**: Auto-detect content containers when static selectors fail
- [ ] **Video/Embed Detection**: Filter embedded videos, tweets, iframes

### Classification System
- [x] Local rules engine (keywords, channels, presets)
- [ ] **Preset Libraries**: Curated filter lists (politics, ragebait, spoilers, ads, trackers)
- [ ] **Smart Presets**: "No negativity today", "Focus mode", "Entertainment only"
- [ ] **Regex Support**: Advanced pattern matching for custom rules
- [ ] **Whitelist Intelligence**: Auto-whitelist trusted sources

### Decision Actions
- [x] Hide - Remove completely
- [x] Blur - Obscure with hover-to-reveal
- [x] Neutralize - Replace inflammatory text
- [ ] **Collapse** - Show minimal placeholder with "Show anyway" button
- [ ] **Summarize** - AI-generated neutral summary inline
- [ ] **Redirect** - Link to neutral source on same topic

---

## Phase 2: Text Neutralization Engine

### Core Neutralizer
- [ ] **Sentiment Analysis**: Detect inflammatory/emotional language
- [ ] **Tone Classifier**: Identify ragebait, clickbait, manipulation tactics
- [ ] **Rewrite Engine**: Transform text to neutral tone
  - [ ] Local fallback (rule-based)
  - [ ] LLM-powered (BYOK or hosted)
- [ ] **Confidence Scoring**: Show how much was changed

### UI Integration
- [ ] **Inline Markers**: Visual indicator when text is neutralized
- [ ] **Diff View**: Toggle between original/neutralized
- [ ] **Undo Per-item**: Restore original text on demand
- [ ] **Learning Mode**: User corrections improve future neutralization

### Neutralization Modes
- [ ] **Light**: Only extreme content
- [ ] **Medium**: Remove emotional language
- [ ] **Strict**: Clinical, fact-only text
- [ ] **Custom**: User-defined tone preferences

---

## Phase 3: Super Reader Mode

### Layout Engine
- [ ] **Unified Article View**: Any article → clean, consistent layout
- [ ] **Reader Presets**: 
  - [ ] Newspaper (multi-column, serif)
  - [ ] Terminal (monospace, dark)
  - [ ] Card (Pinterest-style grid)
  - [ ] Feed (Twitter-like stream)
  - [ ] Magazine (image-rich, large type)
- [ ] **Custom Themes**: User-defined fonts, colors, spacing
- [ ] **Responsive**: Adapts to window size

### Content Extraction
- [ ] **Article Parser**: Extract title, author, date, body, images
- [ ] **Video Transcript**: Pull transcripts from YouTube
- [ ] **Thread Unroller**: Combine Twitter/Reddit threads into single article
- [ ] **Comment Aggregator**: Pull top comments as annotations
- [ ] **Related Content**: Find similar articles from allowlisted sources

### Super Reader Features
- [ ] **Progress Tracking**: Remember reading position
- [ ] **Speed Reading**: Highlighting, pacing
- [ ] **TTS Integration**: Read aloud with neutralized text
- [ ] **Annotations**: Highlight, annotate, export
- [ ] **Collections**: Save articles to themed folders
- [ ] **Offline Mode**: Cache content for offline reading

---

## Phase 4: Infrastructure & Polish

### AI Integration
- [x] BYOK (Bring Your Own Key) - OpenAI
- [ ] **Multi-provider**: Anthropic, Google, local models
- [ ] **Hosted Tier**: Dracon platform integration
- [ ] **Cost Estimation**: Show API usage/costs
- [ ] **Fallback Chain**: Local → BYOK → Hosted

### Storage & Sync
- [ ] **Cloud Sync**: Settings/rules sync across devices
- [ ] **Import/Export**: JSON backup of all settings
- [ ] **Community Lists**: Subscribe to shared filter lists
- [ ] **Rule Versioning**: Undo/redo settings changes

### Performance
- [ ] **Lazy Classification**: Only process visible content
- [ ] **Cache Persistence**: Survive browser restart
- [ ] **Background Pre-processing**: Classify on scroll anticipation
- [ ] **Benchmark Suite**: Performance regression tests

### UX Polish
- [ ] **Onboarding Tour**: Guide new users
- [ ] **Keyboard Shortcuts**: Power user controls
- [ ] **Context Menu**: Right-click to filter/neutralize
- [ ] **Stats Dashboard**: What was filtered, how much time saved
- [ ] **Impact Report**: Weekly summary of filtering activity

---

## Quick Wins (Do First)

1. [ ] Fix structural issues (`src/renderer/`, `src/utils/` empty dirs)
2. [ ] Verify universal adapter works on random sites
3. [ ] Add "Collapse" action (placeholder + show button)
4. [ ] Create first Reader layout (clean article view)
5. [ ] Add neutralization indicator UI

---

## Architecture Notes

```
┌─────────────────────────────────────────────────────────┐
│                    CALMWEB ARCHITECTURE                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   ┌──────────┐    ┌──────────┐    ┌──────────────────┐  │
│   │  CONTENT │───►│ CLASSIFY │───►│     DECIDE       │  │
│   │  SCRIPTS │    │  ENGINE  │    │  (hide/blur/     │  │
│   │          │    │          │    │   neutralize/    │  │
│   │  Site    │    │  Rules   │    │   collapse/      │  │
│   │  Adapters│    │  Cache   │    │   reader)        │  │
│   └──────────┘    │  LLM     │    └──────────────────┘  │
│                    └──────────┘             │           │
│                                             ▼           │
│   ┌──────────────────────────────────────────────────┐  │
│   │                   RENDERER                       │  │
│   │  ┌─────────┐ ┌─────────┐ ┌──────────────────┐   │  │
│   │  │Original │ │Blurred  │ │ Neutralized Text │   │  │
│   │  │DOM      │ │Overlay  │ │ (AI rewrite)     │   │  │
│   │  └─────────┘ └─────────┘ └──────────────────┘   │  │
│   │  ┌─────────────────────────────────────────┐    │  │
│   │  │           SUPER READER LAYOUT            │    │  │
│   │  │  Unified view for any content source     │    │  │
│   │  └─────────────────────────────────────────┘    │  │
│   └──────────────────────────────────────────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Success Metrics

- **Filter Accuracy**: >95% of unwanted content removed
- **False Positive Rate**: <2% of wanted content filtered
- **Neutralization Quality**: User rating >4/5
- **Reader Adoption**: Users spend >50% reading time in Super Reader
- **Performance**: <50ms per content unit classification