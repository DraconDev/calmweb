# CalmWeb Implementation Plan

## Executive Summary

**Goal**: Build a browser extension that transforms web content through three pillars:
1. **Filter** - Remove unwanted content
2. **Neutralize** - Transform inflammatory text to calm, neutral language
3. **Super Reader** - Unified reading experience across all sites

**Current State**: ~60% of Phase 1 complete. Core filtering works with hide/blur/neutralize actions. No Super Reader, no neutralization UI, no collapse action.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CALMWEB ARCHITECTURE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────┐                                                        │
│  │ CONTENT SCRIPTS │  Entry: entrypoints/{youtube,reddit,x,universal}.ts   │
│  │ (Per-site)      │  Adapters: src/adapters/{youtube,reddit,x,universal}  │
│  └────────┬────────┘                                                        │
│           │ discoverUnits() → extractData() → ContentUnit                   │
│           ▼                                                                   │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────┐      │
│  │  BACKGROUND     │───►│   CLASSIFIER    │───►│     DECIDER         │      │
│  │  (ServiceWorker)│    │ utils/classifier│    │                     │      │
│  │                 │    │                 │    │ Decision:           │      │
│  │  - Storage      │    │ 1. Cache lookup │    │  - show             │      │
│  │  - Stats        │    │ 2. Local rules  │    │  - blur             │      │
│  │  - Message route│    │ 3. BYOK LLM     │    │  - hide             │      │
│  │                 │    │ 4. Hosted LLM   │    │  - neutralize       │      │
│  └─────────────────┘    └─────────────────┘    │  - collapse (NEW)   │      │
│                                                 │  - summarize (NEW)  │      │
│                                                 └──────────┬──────────┘      │
│                                                            │                  │
│                                                            ▼                  │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                           RENDERER (NEW)                            │    │
│  │                                                                      │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────────┐   │    │
│  │  │   BLUR     │  │  COLLAPSE   │  │     NEUTRALIZE           │   │    │
│  │  │  Overlay   │  │  Placeholder│  │     Text Rewrite         │   │    │
│  │  │  + Reveal  │  │  + Expand   │  │     + Indicator          │   │    │
│  │  └─────────────┘  └─────────────┘  └──────────────────────────┘   │    │
│  │                                                                      │    │
│  │  ┌─────────────────────────────────────────────────────────────┐   │    │
│  │  │                    SUPER READER MODE                        │   │    │
│  │  │                                                              │   │    │
│  │  │  Entry: entrypoints/reader.ts                               │   │    │
│  │  │  Core: src/renderer/                                        │   │    │
│  │  │                                                              │   │    │
│  │  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │   │    │
│  │  │  │  EXTRACTOR  │  │   LAYOUTS   │  │     THEMES          │ │   │    │
│  │  │  │ Article     │  │ Newspaper   │  │ Default Dark/Light  │ │   │    │
│  │  │  │ Transcript  │  │ Terminal    │  │ Custom Fonts        │ │   │    │
│  │  │  │ Thread      │  │ Card Grid   │  │ Spacing Controls    │ │   │    │
│  │  │  │ Comments    │  │ Feed        │  │ Color Schemes       │ │   │    │
│  │  │  └─────────────┘  └─────────────┘  └─────────────────────┘ │   │    │
│  │  └─────────────────────────────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                           UI LAYER                                   │    │
│  │                                                                       │    │
│  │  Popup (entrypoints/popup)    Options (entrypoints/options)          │    │
│  │  - Quick stats                - Dashboard with sidebar              │    │
│  │  - Global toggle              - Presets / Rules / AI tabs           │    │
│  │  - Link to dashboard          - Super Reader preview (NEW)          │    │
│  │                                - Neutralization settings (NEW)       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Enhanced Filtering (Week 1-2)

### 1.1 Collapse Action

**Purpose**: Instead of hiding content completely, show a minimal placeholder that can be expanded.

**Files to Create/Modify**:

```
apps/extension/
├── src/renderer/
│   ├── index.ts                    # Renderer exports
│   ├── collapse.ts                 # Collapse placeholder logic
│   └── styles.css                  # CSS for collapse overlay
├── src/adapters/
│   └── [all adapters].ts           # Update applyDecision() for 'collapse'
└── packages/shared/src/
    └── index.ts                    # Update ActionDecisionSchema
```

**Implementation Steps**:

1. **Update Types** (`packages/shared/src/index.ts`)
   ```typescript
   export const ActionDecisionSchema = z.enum([
     'show', 'blur', 'hide', 'neutralize', 'collapse', 'rebuild'
   ]);
   ```

2. **Create Collapse Renderer** (`apps/extension/src/renderer/collapse.ts`)
   ```typescript
   interface CollapseOptions {
     reason: string;        // e.g., "politics", "ragebait"
     originalElement: HTMLElement;
     onExpand: () => void;
   }
   
   export function createCollapsePlaceholder(options: CollapseOptions): HTMLElement {
     // Create minimal div with:
     // - Filtered badge (e.g., "Politics filtered")
     // - "Show anyway" button
     // - Smooth expand animation
   }
   ```

3. **Update All Adapters** - Add `collapse` case to `applyDecision()`
   ```typescript
   if (result.decision === 'collapse') {
     const placeholder = createCollapsePlaceholder({
       reason: result.reason,
       originalElement: element,
       onExpand: () => { /* restore original */ }
     });
     element.replaceWith(placeholder);
   }
   ```

4. **Add CSS Styles** (`apps/extension/src/renderer/styles.css`)
   - `.calmweb-collapse-container`
   - `.calmweb-collapse-badge`
   - `.calmweb-collapse-expand-btn`
   - Animation for expand

5. **Update Classifier** (`utils/classifier.ts`)
   - Add `collapse` as potential decision in LLM prompts
   - Update `PRESET_KEYWORDS` to optionally use collapse instead of hide

**Tests**:
- `tests/renderer/collapse.test.ts` - Test placeholder creation
- Update `tests/adapters.test.ts` - Test collapse decision

---

### 1.2 Universal Adapter Enhancement

**Purpose**: Make the universal adapter work reliably on any website.

**Current Issues**:
- Selectors too generic, may miss content or match too much
- No dynamic selector discovery
- No iframe/embed handling

**Files to Modify**:

```
apps/extension/src/adapters/universal.ts
apps/extension/entrypoints/universal.ts
```

**Implementation Steps**:

1. **Smarter Unit Discovery**
   ```typescript
   // Priority-based selector discovery
   const SELECTOR_PRIORITIES = [
     // High priority: semantic HTML
     'article', 'main article', '[role="article"]',
     // Medium: common CMS patterns
     '.post', '.entry', '.content-item', '.card',
     // Low: generic containers (only if others fail)
     'section', 'li.post', 'div[class*="item"]'
   ];
   
   function discoverUnits(root): HTMLElement[] {
     for (const selector of SELECTOR_PRIORITIES) {
       const units = root.querySelectorAll(selector);
       if (units.length >= 3) {  // Threshold
         return filterValidUnits(units);
       }
     }
     return fallbackDiscovery(root);
   }
   ```

2. **Content Validation**
   ```typescript
   function filterValidUnits(nodes: NodeListOf<Element>): HTMLElement[] {
     return Array.from(nodes)
       .filter(el => {
         const html = el as HTMLElement;
         // Must have text content
         const text = html.innerText?.trim();
         if (!text || text.length < 20) return false;
         // Must have title-like element
         const hasTitle = html.querySelector('h1, h2, h3, h4, .title, [class*="title"]');
         if (!hasTitle) return false;
         // Must be visible
         const style = getComputedStyle(html);
         if (style.display === 'none' || style.visibility === 'hidden') return false;
         return true;
       }) as HTMLElement[];
   }
   ```

3. **Dynamic Selector Discovery** (fallback)
   ```typescript
   function fallbackDiscovery(root: Document): HTMLElement[] {
     // Find containers with repeated similar structure
     // Look for elements with title + source pattern
     const allDivs = root.querySelectorAll('div');
     const candidates: HTMLElement[] = [];
     
     allDivs.forEach(div => {
       const children = div.children;
       if (children.length >= 2) {
         // Look for title-like + source-like pattern
         const hasHeading = div.querySelector('h1, h2, h3, h4, a');
         const hasMeta = div.querySelector('span, time, .author, .date');
         if (hasHeading && text.length > 30) {
           candidates.push(div as HTMLElement);
         }
       }
     });
     
     return candidates;
   }
   ```

4. **Iframe/Embed Detection**
   ```typescript
   function discoverEmbeds(root: Document): ContentUnit[] {
     const embeds: ContentUnit[] = [];
     
     // Embedded tweets
     root.querySelectorAll('blockquote.twitter-tweet').forEach(el => {
       embeds.push(extractTweetEmbed(el));
     });
     
     // Embedded YouTube
     root.querySelectorAll('iframe[src*="youtube"]').forEach(el => {
       embeds.push(extractYouTubeEmbed(el));
     });
     
     return embeds;
   }
   ```

**Tests**:
- `tests/adapters/universal.test.ts` - Test with various HTML structures
- Integration test with real sites (mocked)

---

### 1.3 Preset Libraries

**Purpose**: Curated, effective filter lists instead of basic keyword matching.

**Files to Create**:

```
apps/extension/src/presets/
├── index.ts              # Preset loader
├── politics.ts           # Political content keywords
├── ragebait.ts           # Rage-inducing patterns
├── spoilers.ts           # Spoiler detection
├── clickbait.ts          # Clickbait headlines
├── ads.ts                # Ad/tracking content (NEW)
├── trackers.ts           # Tracking pixels/scripts (NEW)
└── custom.ts             # User-contributed lists
```

**Implementation**:

1. **Preset Structure**
   ```typescript
   interface FilterPreset {
     id: string;
     name: string;
     description: string;
     version: string;
     updated: string;
     patterns: {
       keywords: string[];
       channels: string[];
       regex?: RegExp[];
     };
     actions: {
       default: ActionDecision;
       confidence: number;
     };
   }
   ```

2. **Politics Preset Example** (`presets/politics.ts`)
   ```typescript
   export const politicsPreset: FilterPreset = {
     id: 'politics',
     name: 'Politics Shield',
     description: 'Hide election, partisan debates, and political commentary',
     version: '1.0.0',
     updated: '2024-01-15',
     patterns: {
       keywords: [
         // Parties & politicians
         'democrat', 'republican', 'biden', 'trump', 'pelosi', 'mcconnell',
         'congress', 'senate', 'white house', 'parliament',
         // Election terms
         'election', 'vote', 'ballot', 'campaign', 'candidate', 'poll',
         // Partisan language
         'liberal', 'conservative', 'progressive', 'socialist', 'marxist',
         // News shows
         'cnn', 'fox news', 'msnbc', 'breitbart', 'huffpost'
       ],
       channels: [
         'cnn', 'fox news', 'msnbc', 'bbc politics', 'politico',
         'the hill', 'breitbart', 'huffpost', 'vox'
       ],
       regex: [
         /\b(dem|rep|gop)\b/i,
         /\b(20\d{2}\s+election)\b/i,
         /\b(vote\s+(for|against|blue|red))\b/i
       ]
     },
     actions: {
       default: 'collapse',  // Allow user to peek
       confidence: 0.85
     }
   };
   ```

3. **Smart Presets** (combination presets)
   ```typescript
   // preset: no-negativity
   // Combines: ragebait + clickbait + politics (mild)
   
   // preset: focus-mode
   // Combines: everything except allowlisted sources
   
   // preset: entertainment-only
   // Inverts: hide news, politics, finance
   ```

4. **Community Lists Integration**
   ```typescript
   // Import from shared URLs
   async function loadCommunityPreset(url: string): Promise<FilterPreset> {
     const response = await fetch(url);
     const data = await response.json();
     return validatePreset(data); // Zod validation
   }
   ```

---

## Phase 2: Text Neutralization Engine (Week 3-4)

### 2.1 Core Neutralizer

**Purpose**: Transform inflammatory/ragebait text into calm, neutral language.

**Files to Create**:

```
apps/extension/src/neutralizer/
├── index.ts                    # Main neutralizer export
├── sentiment.ts                # Sentiment analysis
├── tone-classifier.ts          # Tone detection (ragebait, clickbait)
├── rewriter.ts                 # Text rewriting engine
├── local-rules.ts              # Rule-based fallback
├── llm-rewrite.ts              # LLM-powered rewriting
└── confidence.ts               # Confidence scoring
```

**Implementation Steps**:

1. **Sentiment Analysis** (`sentiment.ts`)
   ```typescript
   interface SentimentResult {
     score: number;        // -1 (very negative) to +1 (very positive)
     magnitude: number;    // 0 to 1, intensity of emotion
     emotions: {
       anger: number;
       fear: number;
       sadness: number;
       joy: number;
       disgust: number;
     };
   }
   
   export function analyzeSentiment(text: string): SentimentResult {
     // Local keyword-based analysis
     // No external API for speed
     const negativePatterns = [
       /\b(outrage|furious|disgusting|terrible|horrific)\b/gi,
       /\b(hate|loathe|despise)\b/gi,
       /\b(shocking|unbelievable|jaw-dropping)\b/gi
     ];
     
     // Score based on matches and their intensity
   }
   ```

2. **Tone Classifier** (`tone-classifier.ts`)
   ```typescript
   type ToneType = 'ragebait' | 'clickbait' | 'fear-mongering' | 
                   'misleading' | 'manipulative' | 'neutral';
   
   interface ToneResult {
     primary: ToneType;
     confidence: number;
     indicators: string[];  // What triggered this classification
   }
   
   export function classifyTone(text: string): ToneResult {
     // Pattern matching for different manipulation tactics
     const patterns = {
       ragebait: [
         /\b(this will make you (angry|furious|mad))\b/i,
         /\b(outrage over)\b/i,
         /\b(can't believe)\b/i
       ],
       clickbait: [
         /\b(you won't believe)\b/i,
         /\b(one weird trick)\b/i,
         /\b(doctors hate)\b/i,
         /\b(mind-blowing)\b/i
       ],
       'fear-mongering': [
         /\b(crisis|disaster|collapse|doom)\b/i,
         /\b(they don't want you to know)\b/i
       ]
     };
     // Score and return
   }
   ```

3. **Text Rewriter** (`rewriter.ts`)
   ```typescript
   export interface RewriteOptions {
     mode: 'light' | 'medium' | 'strict';
     preserveFacts: boolean;
     maxLength?: number;
   }
   
   export async function rewriteText(
     original: string,
     options: RewriteOptions,
     settings: UserSettings
   ): Promise<RewriteResult> {
     
     // Try local rules first (fast)
     const local = await rewriteWithLocalRules(original, options);
     if (local.confidence > 0.8) return local;
     
     // Fall back to LLM if enabled
     if (settings.processingMode !== 'local_rules') {
       return rewriteWithLLM(original, options, settings);
     }
     
     return local;
   }
   ```

4. **Local Rules Rewriter** (`local-rules.ts`)
   ```typescript
   // Simple pattern-based replacements
   const NEUTRALIZATION_RULES = [
     {
       pattern: /\b(shocking|jaw-dropping|mind-blowing)\b/gi,
       replacement: 'notable',
       strength: 'medium'
     },
     {
       pattern: /\b(you won't believe)\b/gi,
       replacement: '',  // Remove entirely
       strength: 'light'
     },
     {
       pattern: /\b(outrage over|furious about)\b/gi,
       replacement: 'discussion about',
       strength: 'strict'
     },
     {
       pattern: /\b(this will make you (angry|mad|furious))\b/gi,
       replacement: '',
       strength: 'light'
     },
     {
       pattern: /\b(democrat|republican)\b/gi,
       replacement: 'politician',
       strength: 'strict'
     }
   ];
   
   export function rewriteWithLocalRules(
     text: string,
     options: RewriteOptions
   ): RewriteResult {
     let rewritten = text;
     const changes: TextChange[] = [];
     
     for (const rule of NEUTRALIZATION_RULES) {
       if (rule.strength === 'strict' && options.mode !== 'strict') continue;
       
       const matches = text.match(rule.pattern);
       if (matches) {
         rewritten = rewritten.replace(rule.pattern, rule.replacement);
         changes.push({
           original: matches[0],
           replacement: rule.replacement,
           reason: `neutralization_rule:${rule.strength}`
         });
       }
     }
     
     return {
       original: text,
       rewritten: rewritten.trim(),
       changes,
       confidence: changes.length > 0 ? 0.7 : 1.0
     };
   }
   ```

5. **LLM Rewrite** (`llm-rewrite.ts`)
   ```typescript
   export async function rewriteWithLLM(
     text: string,
     options: RewriteOptions,
     settings: UserSettings
   ): Promise<RewriteResult> {
     const systemPrompt = `You are a text neutralization assistant for CalmWeb.
     
     Your job is to rewrite headlines and titles to be:
     - Factual and neutral
     - Free of emotional manipulation
     - Accurate to the original meaning
     
     Mode: ${options.mode}
     - "light": Only remove extreme manipulation
     - "medium": Remove emotional language
     - "strict": Clinical, fact-only text
     
     Rules:
     1. Keep the core factual information
     2. Remove: sensationalism, emotional triggers, clickbait patterns
     3. Use neutral language
     4. If the original is already neutral, return it unchanged
     
     Respond with JSON:
     { "rewritten": "...", "changes": [{ "original": "...", "replacement": "...", "reason": "..." }] }`;
     
     // Call LLM (BYOK or hosted)
   }
   ```

---

### 2.2 Neutralization UI

**Purpose**: Visual indicators and controls for neutralized text.

**Files to Create**:

```
apps/extension/src/renderer/
├── neutralize.ts          # Neutralization renderer
└── styles.css             # Update with neutralization styles

apps/extension/src/components/
├── NeutralizedText.tsx    # React component for neutralized content
└── DiffView.tsx          # Toggle between original/neutralized
```

**Implementation**:

1. **Inline Marker**
   ```css
   .calmweb-neutralized {
     position: relative;
   }
   
   .calmweb-neutralized::after {
     content: '✓';
     position: absolute;
     top: -4px;
     right: -8px;
     font-size: 10px;
     color: var(--calmweb-neutralize-color, #4ade80);
     background: white;
     border-radius: 50%;
     padding: 2px;
   }
   
   .calmweb-neutralized:hover {
     cursor: pointer;
   }
   ```

2. **Diff View Component**
   ```tsx
   function DiffView({ original, rewritten }: DiffViewProps) {
     const [showOriginal, setShowOriginal] = useState(false);
     
     return (
       <span className="calmweb-neutralized-wrapper">
         {showOriginal ? (
           <span className="calmweb-original strikethrough opacity-50">
             {original}
           </span>
         ) : null}
         <span className={clsx("calmweb-neutralized", showOriginal && "opacity-70")}>
           {rewritten}
         </span>
         <button 
           className="calmweb-diff-toggle"
           onClick={() => setShowOriginal(!showOriginal)}
         >
           {showOriginal ? '✕' : '↻'}
         </button>
       </span>
     );
   }
   ```

3. **Undo Per-Item**
   ```typescript
   // Store original text in data attribute
   element.dataset.calmwebOriginal = originalText;
   element.dataset.calmwebNeutralized = 'true';
   
   // On click, restore
   element.addEventListener('click', () => {
     element.textContent = element.dataset.calmwebOriginal;
     delete element.dataset.calmwebNeutralized;
   });
   ```

---

### 2.3 Neutralization Settings UI

**Purpose**: Let users configure neutralization preferences.

**Files to Modify**:

```
apps/extension/entrypoints/options/App.tsx
packages/shared/src/index.ts         # Add neutralization settings to UserSettings
```

**New Settings**:

```typescript
interface NeutralizationSettings {
  enabled: boolean;
  mode: 'light' | 'medium' | 'strict';
  showIndicator: boolean;
  showDiffOnHover: boolean;
  preserveDomains: string[];  // e.g., ['github.com', 'stackoverflow.com']
}
```

---

## Phase 3: Super Reader Mode (Week 5-7)

### 3.1 Core Architecture

**Purpose**: Transform any webpage into a clean, unified reading experience.

**Files to Create**:

```
apps/extension/
├── entrypoints/
│   └── reader.ts                 # Content script for reader injection
├── src/renderer/
│   ├── index.ts                  # Renderer exports
│   ├── layouts/
│   │   ├── base.ts               # Base layout interface
│   │   ├── newspaper.ts          # Multi-column, serif
│   │   ├── terminal.ts           # Monospace, dark
│   │   ├── card.ts               # Pinterest-style grid
│   │   ├── feed.ts               # Twitter-like stream
│   │   └── magazine.ts           # Image-rich, large type
│   ├── themes/
│   │   ├── default.ts            # Default theme
│   │   ├── dark.ts               # Dark mode
│   │   ├── sepia.ts              # Sepia (like Instapaper)
│   │   └── custom.ts             # User-defined
│   ├── extractor/
│   │   ├── article.ts            # Article extraction
│   │   ├── transcript.ts         # YouTube transcripts
│   │   ├── thread.ts              # Twitter/Reddit threads
│   │   └── comments.ts           # Comment aggregation
│   └── ui/
│       ├── ReaderOverlay.tsx     # Main reader UI
│       ├── Toolbar.tsx           # Reader toolbar
│       └── SettingsPanel.tsx     # Reader settings
```

---

### 3.2 Content Extraction

**Implementation**:

1. **Article Extractor** (`extractor/article.ts`)
   ```typescript
   export interface ExtractedArticle {
     title: string;
     author?: string;
     date?: string;
     content: HTMLElement;  // Cleaned article body
     images: { src: string; alt: string; caption?: string }[];
     source: string;        // Original URL
     favicon?: string;
     readingTime: number;   // Minutes
   }
   
   export function extractArticle(doc: Document): ExtractedArticle {
     // 1. Find main content container
     const main = findMainContent(doc);
     
     // 2. Extract title (h1, og:title, title tag)
     const title = extractTitle(doc);
     
     // 3. Extract author (meta author, byline, rel=author)
     const author = extractAuthor(doc);
     
     // 4. Extract date (meta date, time element)
     const date = extractDate(doc);
     
     // 5. Clean content (remove ads, nav, sidebars)
     const cleaned = cleanContent(main);
     
     // 6. Extract images with captions
     const images = extractImages(cleaned);
     
     return { title, author, date, content: cleaned, images, ... };
   }
   
   function findMainContent(doc: Document): HTMLElement {
     // Priority: semantic HTML, then common patterns
     const candidates = [
       doc.querySelector('article'),
       doc.querySelector('main'),
       doc.querySelector('[role="main"]'),
       doc.querySelector('.post-content'),
       doc.querySelector('.article-content'),
       doc.querySelector('.entry-content'),
       // Readability-style scoring
       ...scoreCandidates(doc.querySelectorAll('div, section'))
     ].filter(Boolean);
     
     return selectBest(candidates);
   }
   
   function cleanContent(el: HTMLElement): HTMLElement {
     const clone = el.cloneNode(true) as HTMLElement;
     
     // Remove unwanted elements
     const removeSelectors = [
       'nav', 'aside', 'footer', 'header',
       '.ad', '.advertisement', '.ads',
       '.sidebar', '.related', '.recommended',
       '.social-share', '.share-buttons',
       '.comments', '#comments',
       'script', 'style', 'iframe',
       '[class*="newsletter"]', '[class*="subscribe"]'
     ];
     
     removeSelectors.forEach(sel => {
       clone.querySelectorAll(sel).forEach(el => el.remove());
     });
     
     return clone;
   }
   ```

2. **YouTube Transcript Extractor** (`extractor/transcript.ts`)
   ```typescript
   export async function extractYouTubeTranscript(
     videoId: string
   ): Promise<TranscriptResult> {
     // Use YouTube's timedtext API
     const url = `https://www.youtube.com/api/timedtext?v=${videoId}&lang=en`;
     
     const response = await fetch(url);
     const xml = await response.text();
     
     // Parse XML to transcript segments
     const segments = parseTranscriptXml(xml);
     
     return {
       videoId,
       segments,  // [{ start: 0, end: 5, text: "Hello" }, ...]
       fullText: segments.map(s => s.text).join(' ')
     };
   }
   ```

3. **Thread Unroller** (`extractor/thread.ts`)
   ```typescript
   export async function extractTwitterThread(
     tweetId: string
   ): Promise<ThreadResult> {
     // Fetch tweet and replies
     // Build thread tree
     // Return as unified article
   }
   
   export async function extractRedditThread(
     threadId: string
   ): Promise<ThreadResult> {
     // Get OP and top comments
     // Structure as article with annotations
   }
   ```

---

### 3.3 Layout Engine

**Implementation**:

1. **Base Layout Interface** (`layouts/base.ts`)
   ```typescript
   export interface ReaderLayout {
     id: string;
     name: string;
     description: string;
     
     // Layout configuration
     columns: number;
     maxWidth: string;
     fontFamily: string;
     fontSize: string;
     lineHeight: string;
     
     // Render method
     render(article: ExtractedArticle, container: HTMLElement): void;
   }
   ```

2. **Newspaper Layout** (`layouts/newspaper.ts`)
   ```typescript
   export const newspaperLayout: ReaderLayout = {
     id: 'newspaper',
     name: 'Newspaper',
     description: 'Classic multi-column layout with serif font',
     columns: 2,
     maxWidth: '900px',
     fontFamily: 'Georgia, serif',
     fontSize: '18px',
     lineHeight: '1.7',
     
     render(article, container) {
       container.innerHTML = `
         <header class="reader-header">
           <h1>${article.title}</h1>
           <div class="reader-meta">
             ${article.author ? `<span class="author">${article.author}</span>` : ''}
             ${article.date ? `<time>${article.date}</time>` : ''}
             <span class="reading-time">${article.readingTime} min read</span>
           </div>
         </header>
         <article class="reader-content columns-2">
           ${article.content.innerHTML}
         </article>
       `;
     }
   };
   ```

3. **Terminal Layout** (`layouts/terminal.ts`)
   ```typescript
   export const terminalLayout: ReaderLayout = {
     id: 'terminal',
     name: 'Terminal',
     description: 'Hacker-style monospace dark theme',
     columns: 1,
     maxWidth: '800px',
     fontFamily: '"JetBrains Mono", "Fira Code", monospace',
     fontSize: '14px',
     lineHeight: '1.5',
     // Dark theme, green accent
   };
   ```

---

### 3.4 Reader Entry Point

**Implementation** (`entrypoints/reader.ts`):

```typescript
export default defineContentScript({
   matches: ['<all_urls>'],
   
   main() {
     // Listen for reader activation
     browser.runtime.onMessage.addListener((message) => {
       if (message.type === 'TOGGLE_READER') {
         toggleReader();
       }
     });
     
     // Keyboard shortcut
     document.addEventListener('keydown', (e) => {
       if (e.alt && e.key === 'r') {
         toggleReader();
       }
     });
   }
});

function toggleReader() {
   const existing = document.getElementById('calmweb-reader-overlay');
   if (existing) {
     existing.remove();
     return;
   }
   
   const article = extractArticle(document);
   const overlay = createReaderOverlay(article);
   document.body.appendChild(overlay);
}

function createReaderOverlay(article: ExtractedArticle): HTMLElement {
   const overlay = document.createElement('div');
   overlay.id = 'calmweb-reader-overlay';
   
   // Create shadow DOM for style isolation
   const shadow = overlay.attachShadow({ mode: 'open' });
   
   // Inject styles
   const style = document.createElement('style');
   style.textContent = READER_STYLES;
   shadow.appendChild(style);
   
   // Create reader container
   const container = document.createElement('div');
   container.className = 'reader-container';
   shadow.appendChild(container);
   
   // Render with current layout
   const layout = getCurrentLayout();
   layout.render(article, container);
   
   // Add toolbar
   const toolbar = createToolbar();
   container.prepend(toolbar);
   
   return overlay;
}
```

---

### 3.5 Reader Settings UI

**Add to Options Page**:

```tsx
// In options/App.tsx, add new tab
const navItems = [
   { id: 'overview', label: 'Overview', icon: LayoutDashboard },
   { id: 'presets', label: 'Presets', icon: ShieldCheck },
   { id: 'rules', label: 'Custom Rules', icon: Database },
   { id: 'neutralize', label: 'Neutralize', icon: Wand2 },  // NEW
   { id: 'reader', label: 'Super Reader', icon: BookOpen },  // NEW
   { id: 'advanced', label: 'AI & Advanced', icon: Zap },
];

// Reader Tab Component
function ReaderTab() {
   return (
     <div className="space-y-8">
       <FormField label="Default Layout" description="Choose your preferred reading layout">
         <LayoutSelector />
       </FormField>
       
       <FormField label="Theme" description="Visual appearance">
         <ThemeSelector />
       </FormField>
       
       <FormField label="Typography">
         <div className="grid grid-cols-2 gap-4">
           <select>Font Family</select>
           <input type="number">Font Size</input>
         </div>
       </FormField>
       
       <FormField label="Keyboard Shortcuts">
         <div className="space-y-2">
           <div>Toggle Reader: <kbd>Alt+R</kbd></div>
           <div>Cycle Layouts: <kbd>Alt+L</kbd></div>
         </div>
       </FormField>
       
       <FormField label="Auto-activate on sites">
         <textarea placeholder="Enter domains (one per line)..." />
       </FormField>
     </div>
   );
}
```

---

## Phase 4: Infrastructure & Polish (Week 8-9)

### 4.1 Performance Optimizations

1. **Lazy Classification**
   ```typescript
   // Use IntersectionObserver for viewport detection
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         classifyElement(entry.target);
         observer.unobserve(entry.target);
       }
     });
   }, { rootMargin: '100px' });  // Pre-classify 100px before visible
   ```

2. **Cache Persistence**
   ```typescript
   // Use IndexedDB for larger, persistent cache
   const db = await openDB('calmweb-cache', 1, {
     upgrade(db) {
       db.createObjectStore('decisions', { keyPath: 'fingerprint' });
     }
   });
   
   await db.put('decisions', { fingerprint, result, timestamp });
   ```

3. **Background Pre-processing**
   ```typescript
   // Predict scroll direction and pre-classify
   let lastScrollY = 0;
   window.addEventListener('scroll', () => {
     const direction = window.scrollY > lastScrollY ? 'down' : 'up';
     if (direction === 'down') {
       // Pre-classify elements 500px below viewport
       preloadClassifications(500);
     }
     lastScrollY = window.scrollY;
   });
   ```

---

### 4.2 Keyboard Shortcuts

```typescript
// src/shortcuts/index.ts
export const SHORTCUTS = {
   'toggle-extension': 'Alt+Shift+E',
   'toggle-reader': 'Alt+R',
   'cycle-layout': 'Alt+L',
   'toggle-neutralize': 'Alt+N',
   'show-original': 'Alt+O',
   'open-settings': 'Alt+,',
};

document.addEventListener('keydown', (e) => {
   // Check against shortcuts
   const pressed = [
     e.altKey && 'Alt',
     e.ctrlKey && 'Ctrl',
     e.shiftKey && 'Shift',
     e.key
   ].filter(Boolean).join('+');
   
   for (const [action, shortcut] of Object.entries(SHORTCUTS)) {
     if (pressed === shortcut) {
       e.preventDefault();
       executeAction(action);
     }
   }
});
```

---

### 4.3 Context Menu

```typescript
// background.ts
browser.contextMenus.create({
   id: 'neutralize-selection',
   title: 'Neutralize Selected Text',
   contexts: ['selection']
});

browser.contextMenus.create({
   id: 'open-in-reader',
   title: 'Open in Super Reader',
   contexts: ['link', 'page']
});

browser.contextMenus.onClicked.addListener((info, tab) => {
   if (info.menuItemId === 'neutralize-selection') {
     // Send selected text to neutralizer
     browser.tabs.sendMessage(tab.id, {
       type: 'NEUTRALIZE_SELECTION',
       text: info.selectionText
     });
   }
});
```

---

### 4.4 Stats & Impact Report

```typescript
// Enhanced stats tracking
interface EnhancedStats {
   totalFiltered: number;
   byAction: {
     hide: number;
     blur: number;
     neutralize: number;
     collapse: number;
   };
   byPreset: {
     politics: number;
     ragebait: number;
     spoilers: number;
     clickbait: number;
   };
   timeSaved: number;        // Minutes
   topFilteredSources: string[];
   dailyHistory: { date: string; count: number }[];
   weeklyReport?: {
     generated: string;
     summary: string;
   };
}

// Generate weekly report
async function generateWeeklyReport(stats: EnhancedStats): Promise<string> {
   return `This week, CalmWeb filtered ${stats.totalFiltered} items.
   
   - Politics: ${stats.byPreset.politics} items hidden
   - Ragebait: ${stats.byPreset.ragebait} items neutralized
   - Clickbait: ${stats.byPreset.clickbait} items collapsed
   
   Estimated time saved: ${stats.timeSaved} minutes
   Top filtered sources: ${stats.topFilteredSources.slice(0, 3).join(', ')}`;
}
```

---

## Implementation Timeline

| Week | Phase | Key Deliverables |
|------|-------|------------------|
| 1 | 1.1-1.2 | Collapse action, Universal adapter v2 |
| 2 | 1.3 | Preset libraries, Smart presets |
| 3 | 2.1 | Neutralizer core (sentiment, tone, rewriter) |
| 4 | 2.2-2.3 | Neutralization UI, Settings |
| 5 | 3.1-3.2 | Reader architecture, Article extraction |
| 6 | 3.3 | Layout engine (all 5 layouts) |
| 7 | 3.4-3.5 | Reader entry point, Settings UI |
| 8 | 4.1-4.2 | Performance, Shortcuts |
| 9 | 4.3-4.4 | Context menu, Stats report |

---

## Testing Strategy

### Unit Tests
```
tests/
├── renderer/
│   ├── collapse.test.ts
│   ├── neutralize.test.ts
│   └── layouts.test.ts
├── neutralizer/
│   ├── sentiment.test.ts
│   ├── tone-classifier.test.ts
│   └── rewriter.test.ts
├── extractor/
│   ├── article.test.ts
│   ├── transcript.test.ts
│   └── thread.test.ts
└── presets/
    └── preset-loader.test.ts
```

### Integration Tests
- Test full pipeline: discover → classify → render
- Test with real HTML fixtures from major sites

### E2E Tests (Playwright)
- Install extension
- Navigate to YouTube, Reddit, Twitter
- Verify filtering works
- Toggle Super Reader
- Verify neutralization

---

## Success Criteria

1. **Collapse Action**: Users can peek at filtered content
2. **Neutralizer**: >80% of ragebait successfully neutralized
3. **Super Reader**: Works on >90% of article pages
4. **Performance**: Classification <50ms, Reader render <200ms
5. **User Satisfaction**: Clean UI, intuitive controls

---

## File Summary

### New Files (~50)
- `src/renderer/*` (10 files)
- `src/neutralizer/*` (6 files)
- `src/presets/*` (8 files)
- `src/extractor/*` (4 files)
- `src/layouts/*` (6 files)
- `src/themes/*` (4 files)
- `entrypoints/reader.ts`
- `tests/*` (12+ files)

### Modified Files (~15)
- `packages/shared/src/index.ts` - New types
- `apps/extension/entrypoints/background.ts` - New handlers
- `apps/extension/entrypoints/options/App.tsx` - New tabs
- `apps/extension/utils/classifier.ts` - Collapse support
- `apps/extension/src/adapters/*` - Collapse/Neutralize support
- `apps/extension/utils/storage.ts` - Enhanced stats