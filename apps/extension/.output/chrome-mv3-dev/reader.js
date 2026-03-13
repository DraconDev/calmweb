var reader = (function() {
  "use strict";
  function defineContentScript(definition2) {
    return definition2;
  }
  const REMOVE_SELECTORS = [
    "nav",
    "aside",
    "footer",
    "header:not(article header)",
    ".ad",
    ".advertisement",
    ".ads",
    ".ad-container",
    ".sidebar",
    ".related",
    ".recommended",
    ".suggestions",
    ".social-share",
    ".share-buttons",
    ".social-links",
    ".comments",
    "#comments",
    ".comment-section",
    "script",
    "style",
    "noscript",
    "iframe",
    '[class*="newsletter"]',
    '[class*="subscribe"]',
    '[class*="popup"]',
    '[class*="modal"]',
    ".author-bio",
    ".author-info",
    ".about-author",
    ".tags",
    ".tag-list",
    ".categories",
    ".breadcrumb",
    ".breadcrumbs",
    ".pagination",
    ".pager",
    ".cookie-notice",
    ".gdpr"
  ];
  const CONTENT_SELECTORS = [
    "article",
    '[role="article"]',
    "main article",
    ".post-content",
    ".article-content",
    ".entry-content",
    ".post-body",
    ".article-body",
    ".content-body",
    "main",
    '[role="main"]',
    "#content",
    ".content"
  ];
  const TITLE_SELECTORS = [
    "article h1",
    'h1[itemprop="headline"]',
    '[property="og:title"]',
    'meta[name="twitter:title"]',
    "h1",
    ".post-title",
    ".article-title",
    ".entry-title"
  ];
  const AUTHOR_SELECTORS = [
    '[rel="author"]',
    '[itemprop="author"]',
    ".author-name",
    ".byline",
    ".author",
    'meta[name="author"]'
  ];
  const DATE_SELECTORS = [
    "time",
    '[itemprop="datePublished"]',
    "[datetime]",
    ".post-date",
    ".article-date",
    ".publish-date",
    'meta[name="date"]',
    '[property="article:published_time"]'
  ];
  function extractArticle(doc, url) {
    const title = extractTitle(doc);
    const author = extractAuthor(doc);
    const date = extractDate(doc);
    const mainContent = findMainContent(doc);
    const cleanedContent = cleanContent(mainContent);
    const images = extractImages(cleanedContent);
    const favicon = extractFavicon(doc);
    const readingTime = calculateReadingTime(cleanedContent.textContent || "");
    return {
      title,
      author,
      date,
      content: cleanedContent.textContent || "",
      contentHtml: cleanedContent,
      images,
      source: new URL(url).hostname,
      favicon,
      readingTime,
      url
    };
  }
  function extractTitle(doc) {
    for (const selector of TITLE_SELECTORS) {
      const el = doc.querySelector(selector);
      if (el) {
        const title = el.getAttribute("content") || el.textContent?.trim();
        if (title && title.length > 5 && title.length < 300) {
          return title;
        }
      }
    }
    return doc.title || "Untitled";
  }
  function extractAuthor(doc) {
    for (const selector of AUTHOR_SELECTORS) {
      const el = doc.querySelector(selector);
      if (el) {
        const author = el.getAttribute("content") || el.textContent?.trim();
        if (author && author.length < 100) {
          return author;
        }
      }
    }
    return void 0;
  }
  function extractDate(doc) {
    for (const selector of DATE_SELECTORS) {
      const el = doc.querySelector(selector);
      if (el) {
        const dateAttr = el.getAttribute("datetime") || el.getAttribute("content");
        const dateText = dateAttr || el.textContent?.trim();
        if (dateText) {
          try {
            const parsed = new Date(dateText);
            if (!isNaN(parsed.getTime())) {
              return parsed.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              });
            }
          } catch {
            continue;
          }
        }
      }
    }
    return void 0;
  }
  function findMainContent(doc) {
    for (const selector of CONTENT_SELECTORS) {
      const el = doc.querySelector(selector);
      if (el && el.textContent && el.textContent.trim().length > 200) {
        return el;
      }
    }
    const candidates = doc.querySelectorAll("div, section, main");
    let best = null;
    let bestScore = 0;
    candidates.forEach((candidate) => {
      const html = candidate;
      const textLength = html.textContent?.length || 0;
      const paragraphs = html.querySelectorAll("p").length;
      const score = textLength + paragraphs * 100;
      if (score > bestScore) {
        bestScore = score;
        best = html;
      }
    });
    return best || doc.body;
  }
  function cleanContent(el) {
    const clone = el.cloneNode(true);
    REMOVE_SELECTORS.forEach((selector) => {
      clone.querySelectorAll(selector).forEach((el2) => el2.remove());
    });
    clone.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href && !href.startsWith("http") && !href.startsWith("/")) {
        a.removeAttribute("href");
      }
    });
    clone.querySelectorAll("*").forEach((el2) => {
      const html = el2;
      html.removeAttribute("style");
      html.removeAttribute("class");
      html.removeAttribute("id");
      html.removeAttribute("onclick");
      html.removeAttribute("onmouseover");
      html.removeAttribute("onmouseout");
    });
    return clone;
  }
  function extractImages(content) {
    const images = [];
    content.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || img.getAttribute("data-src");
      if (src && !src.includes("avatar") && !src.includes("icon") && !src.includes("logo")) {
        const alt = img.getAttribute("alt") || "";
        const figure = img.closest("figure");
        const caption = figure?.querySelector("figcaption")?.textContent?.trim();
        images.push({ src, alt, caption });
      }
    });
    return images.slice(0, 20);
  }
  function extractFavicon(doc) {
    const icon = doc.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    const href = icon?.getAttribute("href");
    if (href) {
      if (href.startsWith("//")) return "https:" + href;
      if (href.startsWith("/")) {
        const origin = doc.location?.origin || "https://example.com";
        return origin + href;
      }
      return href;
    }
    return void 0;
  }
  function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  }
  const createBaseStyles = (layout) => `
  .reader-container {
    max-width: ${layout.maxWidth};
    margin: 0 auto;
    padding: 40px 20px;
    font-family: ${layout.fontFamily};
    font-size: ${layout.fontSize};
    line-height: ${layout.lineHeight};
    color: #1f2937;
  }

  .reader-header {
    margin-bottom: 40px;
    text-align: center;
  }

  .reader-title {
    font-size: 2.5em;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 16px;
    color: #111827;
  }

  .reader-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-size: 0.9em;
    color: #6b7280;
    flex-wrap: wrap;
  }

  .reader-meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .reader-content {
    column-count: ${layout.columns};
    column-gap: 40px;
    column-rule: 1px solid #e5e7eb;
  }

  .reader-content p {
    margin: 0 0 1.5em;
    text-align: justify;
    hyphens: auto;
  }

  .reader-content h2, .reader-content h3 {
    column-span: all;
    margin: 2em 0 1em;
  }

  .reader-content img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1em 0;
  }

  .reader-content blockquote {
    column-span: all;
    border-left: 3px solid #3b82f6;
    padding-left: 1.5em;
    margin: 1.5em 0;
    font-style: italic;
    color: #4b5563;
  }

  .reader-content pre, .reader-content code {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    background: #f3f4f6;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .reader-content pre {
    column-span: all;
    padding: 1em;
    overflow-x: auto;
  }

  .reader-footer {
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid #e5e7eb;
    text-align: center;
    font-size: 0.85em;
    color: #9ca3af;
  }

  .reader-source {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .reader-favicon {
    width: 16px;
    height: 16px;
    border-radius: 2px;
  }

  @media (prefers-color-scheme: dark) {
    .reader-container {
      color: #e5e7eb;
    }

    .reader-title {
      color: #f9fafb;
    }

    .reader-meta {
      color: #9ca3af;
    }

    .reader-content {
      column-rule-color: #374151;
    }

    .reader-content blockquote {
      color: #9ca3af;
      border-left-color: #60a5fa;
    }

    .reader-content pre, .reader-content code {
      background: #1f2937;
    }

    .reader-footer {
      border-top-color: #374151;
      color: #6b7280;
    }
  }
`;
  const renderHeader = (article) => `
  <header class="reader-header">
    <h1 class="reader-title">${escapeHtml$1(article.title)}</h1>
    <div class="reader-meta">
      ${article.author ? `<span class="reader-meta-item">By ${escapeHtml$1(article.author)}</span>` : ""}
      ${article.date ? `<span class="reader-meta-item">${article.date}</span>` : ""}
      <span class="reader-meta-item">${article.readingTime} min read</span>
    </div>
  </header>
`;
  const renderFooter = (article) => `
  <footer class="reader-footer">
    <div class="reader-source">
      ${article.favicon ? `<img class="reader-favicon" src="${escapeHtml$1(article.favicon)}" alt="">` : ""}
      <span>${escapeHtml$1(article.source)}</span>
    </div>
  </footer>
`;
  function escapeHtml$1(text) {
    const span = document.createElement("span");
    span.textContent = text;
    return span.innerHTML;
  }
  const newspaperLayout = {
    id: "newspaper",
    name: "Newspaper",
    description: "Classic multi-column layout with serif font",
    columns: 2,
    maxWidth: "900px",
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "18px",
    lineHeight: "1.7",
    render(article, container) {
      container.innerHTML = `
      <style>${createBaseStyles(this)}</style>
      <div class="reader-container">
        ${renderHeader(article)}
        <article class="reader-content">
          ${article.contentHtml.innerHTML}
        </article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const terminalLayout = {
    id: "terminal",
    name: "Terminal",
    description: "Hacker-style monospace dark theme",
    columns: 1,
    maxWidth: "800px",
    fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", monospace',
    fontSize: "14px",
    lineHeight: "1.6",
    render(article, container) {
      container.innerHTML = `
      <style>
        ${createBaseStyles(this)}
        .reader-container {
          background: #0d1117;
          color: #c9d1d9;
          border: 1px solid #30363d;
          border-radius: 8px;
          padding: 30px;
        }
        .reader-title {
          color: #58a6ff;
        }
        .reader-meta {
          color: #8b949e;
        }
        .reader-content {
          color: #c9d1d9;
        }
        .reader-content a {
          color: #58a6ff;
        }
        .reader-footer {
          border-top-color: #30363d;
          color: #6e7681;
        }
        .reader-container::before {
          content: '> calmweb-reader';
          display: block;
          color: #7ee787;
          margin-bottom: 20px;
          font-size: 12px;
        }
      </style>
      <div class="reader-container">
        ${renderHeader(article)}
        <article class="reader-content">
          ${article.contentHtml.innerHTML}
        </article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const cardLayout = {
    id: "card",
    name: "Card",
    description: "Pinterest-style card layout with images",
    columns: 1,
    maxWidth: "680px",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: "17px",
    lineHeight: "1.8",
    render(article, container) {
      const heroImage = article.images[0];
      container.innerHTML = `
      <style>
        ${createBaseStyles(this)}
        .reader-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          overflow: hidden;
          max-width: 680px;
        }
        .reader-hero {
          width: 100%;
          height: 300px;
          object-fit: cover;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .reader-inner {
          padding: 40px;
        }
        .reader-title {
          font-size: 2em;
        }
        .reader-content {
          column-count: 1;
        }
        @media (prefers-color-scheme: dark) {
          .reader-container {
            background: #1f2937;
          }
        }
      </style>
      <div class="reader-container">
        ${heroImage ? `<img class="reader-hero" src="${heroImage.src}" alt="${heroImage.alt}">` : ""}
        <div class="reader-inner">
          ${renderHeader(article)}
          <article class="reader-content">
            ${article.contentHtml.innerHTML}
          </article>
          ${renderFooter(article)}
        </div>
      </div>
    `;
    }
  };
  const feedLayout = {
    id: "feed",
    name: "Feed",
    description: "Twitter-like stream layout",
    columns: 1,
    maxWidth: "600px",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: "16px",
    lineHeight: "1.6",
    render(article, container) {
      container.innerHTML = `
      <style>
        ${createBaseStyles(this)}
        .reader-container {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
        }
        .reader-header {
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 16px;
          margin-bottom: 16px;
        }
        .reader-title {
          font-size: 1.3em;
          margin-bottom: 8px;
        }
        .reader-meta {
          justify-content: flex-start;
          font-size: 0.85em;
        }
        .reader-content {
          column-count: 1;
          font-size: 0.95em;
        }
        .reader-content p {
          margin-bottom: 1em;
        }
        .reader-footer {
          margin-top: 20px;
          padding-top: 16px;
          text-align: left;
        }
        @media (prefers-color-scheme: dark) {
          .reader-container {
            background: #16181c;
            border-color: #38444d;
          }
          .reader-header, .reader-footer {
            border-color: #38444d;
          }
        }
      </style>
      <div class="reader-container">
        ${renderHeader(article)}
        <article class="reader-content">
          ${article.contentHtml.innerHTML}
        </article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const magazineLayout = {
    id: "magazine",
    name: "Magazine",
    description: "Image-rich editorial style",
    columns: 1,
    maxWidth: "820px",
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "19px",
    lineHeight: "1.75",
    render(article, container) {
      container.innerHTML = `
      <style>
        ${createBaseStyles(this)}
        .reader-container {
          padding: 60px 40px;
        }
        .reader-title {
          font-size: 3em;
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .reader-meta {
          font-style: italic;
          font-size: 1em;
        }
        .reader-content {
          column-count: 1;
          max-width: 640px;
          margin: 0 auto;
        }
        .reader-content p:first-child::first-letter {
          float: left;
          font-size: 4em;
          line-height: 0.8;
          margin-right: 12px;
          margin-top: 4px;
          font-weight: 700;
          color: #111827;
        }
        .reader-content img {
          max-width: none;
          width: calc(100% + 180px);
          margin-left: -90px;
        }
        @media (prefers-color-scheme: dark) {
          .reader-content p:first-child::first-letter {
            color: #f9fafb;
          }
        }
      </style>
      <div class="reader-container">
        ${renderHeader(article)}
        <article class="reader-content">
          ${article.contentHtml.innerHTML}
        </article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const allLayouts = [
    newspaperLayout,
    terminalLayout,
    cardLayout,
    feedLayout,
    magazineLayout
  ];
  function getLayout(id) {
    return allLayouts.find((l) => l.id === id) || newspaperLayout;
  }
  const defaultTheme = {
    id: "default",
    name: "Light",
    background: "#ffffff",
    text: "#1f2937",
    accent: "#3b82f6",
    isDark: false
  };
  const darkTheme = {
    id: "dark",
    name: "Dark",
    background: "#111827",
    text: "#e5e7eb",
    accent: "#60a5fa",
    isDark: true
  };
  const sepiaTheme = {
    id: "sepia",
    name: "Sepia",
    background: "#f4ecd8",
    text: "#433422",
    accent: "#8b5a2b",
    isDark: false
  };
  const midnightTheme = {
    id: "midnight",
    name: "Midnight",
    background: "#0f172a",
    text: "#e2e8f0",
    accent: "#818cf8",
    isDark: true
  };
  const allThemes = [
    defaultTheme,
    darkTheme,
    sepiaTheme,
    midnightTheme
  ];
  function getTheme(id) {
    return allThemes.find((t) => t.id === id) || defaultTheme;
  }
  function applyTheme(theme, container) {
    container.style.setProperty("--reader-bg", theme.background);
    container.style.setProperty("--reader-text", theme.text);
    container.style.setProperty("--reader-accent", theme.accent);
    container.setAttribute("data-theme", theme.id);
  }
  const OVERLAY_ID = "calmweb-reader-overlay";
  const OVERLAY_STYLES = `
  #${OVERLAY_ID} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2147483647;
    background: var(--reader-bg, #ffffff);
    color: var(--reader-text, #1f2937);
    overflow-y: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .calmweb-reader-toolbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 10;
  }

  .calmweb-reader-toolbar-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .calmweb-reader-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 14px;
    color: #3b82f6;
  }

  .calmweb-reader-title {
    font-size: 13px;
    color: #6b7280;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .calmweb-reader-toolbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .calmweb-reader-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 12px;
    background: transparent;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #374151;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .calmweb-reader-btn:hover {
    background: rgba(0,0,0,0.05);
    border-color: rgba(0,0,0,0.2);
  }

  .calmweb-reader-btn:active {
    transform: scale(0.97);
  }

  .calmweb-reader-btn-close {
    background: #ef4444;
    border-color: #ef4444;
    color: white;
  }

  .calmweb-reader-btn-close:hover {
    background: #dc2626;
  }

  .calmweb-reader-dropdown {
    position: relative;
  }

  .calmweb-reader-dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    min-width: 160px;
    padding: 8px;
    display: none;
  }

  .calmweb-reader-dropdown-menu.open {
    display: block;
  }

  .calmweb-reader-dropdown-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 13px;
    color: #374151;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .calmweb-reader-dropdown-item:hover {
    background: rgba(0,0,0,0.05);
  }

  .calmweb-reader-dropdown-item.active {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }

  .calmweb-reader-content {
    margin-top: 56px;
    min-height: calc(100vh - 56px);
  }

  @media (prefers-color-scheme: dark) {
    .calmweb-reader-toolbar {
      background: rgba(17, 24, 39, 0.95);
      border-bottom-color: rgba(255,255,255,0.1);
    }

    .calmweb-reader-btn {
      border-color: rgba(255,255,255,0.1);
      color: #e5e7eb;
    }

    .calmweb-reader-btn:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.2);
    }

    .calmweb-reader-dropdown-menu {
      background: #1f2937;
      border-color: rgba(255,255,255,0.1);
    }

    .calmweb-reader-dropdown-item {
      color: #e5e7eb;
    }

    .calmweb-reader-dropdown-item:hover {
      background: rgba(255,255,255,0.05);
    }
  }
`;
  let currentLayout;
  let currentTheme;
  let currentArticle = null;
  function openReader(options = {}) {
    const existing = document.getElementById(OVERLAY_ID);
    if (existing) return;
    currentLayout = getLayout(options.layoutId || "newspaper");
    currentTheme = getTheme(options.themeId || "default");
    const article = extractArticle(document, window.location.href);
    currentArticle = article;
    const overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    const shadow = overlay.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <style>${OVERLAY_STYLES}</style>
    <div class="calmweb-reader-toolbar">
      <div class="calmweb-reader-toolbar-left">
        <div class="calmweb-reader-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Super Reader
        </div>
        <div class="calmweb-reader-title">${escapeHtml(article.title)}</div>
      </div>
      <div class="calmweb-reader-toolbar-right">
        <div class="calmweb-reader-dropdown">
          <button class="calmweb-reader-btn" data-dropdown="layout">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
            </svg>
            <span class="layout-name">${currentLayout.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="layout">
            ${allLayouts.map((l) => `
              <div class="calmweb-reader-dropdown-item ${l.id === currentLayout.id ? "active" : ""}" data-layout="${l.id}">
                ${l.name}
              </div>
            `).join("")}
          </div>
        </div>

        <div class="calmweb-reader-dropdown">
          <button class="calmweb-reader-btn" data-dropdown="theme">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <span class="theme-name">${currentTheme.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="theme">
            ${allThemes.map((t) => `
              <div class="calmweb-reader-dropdown-item ${t.id === currentTheme.id ? "active" : ""}" data-theme="${t.id}">
                ${t.name}
              </div>
            `).join("")}
          </div>
        </div>

        <button class="calmweb-reader-btn calmweb-reader-btn-close" data-action="close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
          Close
        </button>
      </div>
    </div>
    <div class="calmweb-reader-content" id="reader-content"></div>
  `;
    document.body.appendChild(overlay);
    const contentEl = shadow.getElementById("reader-content");
    applyTheme(currentTheme, overlay);
    currentLayout.render(article, contentEl);
    setupEventListeners(shadow, overlay, options);
  }
  function closeReader() {
    const overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
      overlay.remove();
    }
  }
  function setupEventListeners(shadow, overlay, options) {
    shadow.querySelectorAll("[data-dropdown]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const menuId = btn.getAttribute("data-dropdown");
        const menu = shadow.querySelector(`[data-menu="${menuId}"]`);
        shadow.querySelectorAll(".calmweb-reader-dropdown-menu").forEach((m) => {
          if (m !== menu) m.classList.remove("open");
        });
        menu?.classList.toggle("open");
      });
    });
    shadow.querySelectorAll("[data-layout]").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const layoutId = item.getAttribute("data-layout");
        if (layoutId) {
          currentLayout = getLayout(layoutId);
          const contentEl = shadow.getElementById("reader-content");
          if (currentArticle) {
            contentEl.innerHTML = "";
            currentLayout.render(currentArticle, contentEl);
          }
          shadow.querySelectorAll("[data-layout]").forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
          shadow.querySelector(".layout-name").textContent = currentLayout.name;
          shadow.querySelector('[data-menu="layout"]')?.classList.remove("open");
        }
      });
    });
    shadow.querySelectorAll("[data-theme]").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const themeId = item.getAttribute("data-theme");
        if (themeId) {
          currentTheme = getTheme(themeId);
          applyTheme(currentTheme, overlay);
          shadow.querySelectorAll("[data-theme]").forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
          shadow.querySelector(".theme-name").textContent = currentTheme.name;
          shadow.querySelector('[data-menu="theme"]')?.classList.remove("open");
        }
      });
    });
    const closeBtn = shadow.querySelector('[data-action="close"]');
    closeBtn?.addEventListener("click", () => {
      closeReader();
      options.onClose?.();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeReader();
        options.onClose?.();
      }
    });
    document.addEventListener("click", () => {
      shadow.querySelectorAll(".calmweb-reader-dropdown-menu").forEach((m) => {
        m.classList.remove("open");
      });
    });
  }
  function escapeHtml(text) {
    const span = document.createElement("span");
    span.textContent = text;
    return span.innerHTML;
  }
  function isReaderOpen() {
    return !!document.getElementById(OVERLAY_ID);
  }
  function toggleReader(options) {
    if (isReaderOpen()) {
      closeReader();
    } else {
      openReader(options);
    }
  }
  const definition = defineContentScript({
    matches: ["<all_urls>"],
    runAt: "document_idle",
    main() {
      console.log("[CalmWeb] Reader content script loaded");
      document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "r") {
          e.preventDefault();
          toggleReader();
        }
      });
    }
  });
  function initPlugins() {
  }
  function print(method, ...args) {
    if (typeof args[0] === "string") method(`[wxt] ${args.shift()}`, ...args);
    else method("[wxt]", ...args);
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  const result = (() => {
    try {
      initPlugins();
    } catch (err) {
      logger.error(`Failed to initialize plugins for "${"reader"}"`, err);
      throw err;
    }
    let result2;
    try {
      result2 = definition.main();
      if (result2 instanceof Promise) result2 = result2.catch((err) => {
        logger.error(`The unlisted script "${"reader"}" crashed on startup!`, err);
        throw err;
      });
    } catch (err) {
      logger.error(`The unlisted script "${"reader"}" crashed on startup!`, err);
      throw err;
    }
    return result2;
  })();
  return result;
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uL3NyYy9yZW5kZXJlci9leHRyYWN0b3IvYXJ0aWNsZS50cyIsIi4uLy4uL3NyYy9yZW5kZXJlci9sYXlvdXRzL2luZGV4LnRzIiwiLi4vLi4vc3JjL3JlbmRlcmVyL3RoZW1lcy9pbmRleC50cyIsIi4uLy4uL3NyYy9yZW5kZXJlci9yZWFkZXIudHMiLCIuLi8uLi9lbnRyeXBvaW50cy9yZWFkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIHNyYy91dGlscy9kZWZpbmUtY29udGVudC1zY3JpcHQudHNcbmZ1bmN0aW9uIGRlZmluZUNvbnRlbnRTY3JpcHQoZGVmaW5pdGlvbikge1xuXHRyZXR1cm4gZGVmaW5pdGlvbjtcbn1cblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBkZWZpbmVDb250ZW50U2NyaXB0IH07IiwiLyoqXG4gKiBBcnRpY2xlIEV4dHJhY3RvciBmb3IgQ2FsbVdlYiBTdXBlciBSZWFkZXJcbiAqXG4gKiBFeHRyYWN0cyBjbGVhbiBhcnRpY2xlIGNvbnRlbnQgZnJvbSBhbnkgd2VicGFnZS5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJhY3RlZEFydGljbGUge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I/OiBzdHJpbmc7XG4gIGRhdGU/OiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgY29udGVudEh0bWw6IEhUTUxFbGVtZW50O1xuICBpbWFnZXM6IEFycmF5PHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xuICB9PjtcbiAgc291cmNlOiBzdHJpbmc7XG4gIGZhdmljb24/OiBzdHJpbmc7XG4gIHJlYWRpbmdUaW1lOiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xufVxuXG5jb25zdCBSRU1PVkVfU0VMRUNUT1JTID0gW1xuICAnbmF2JywgJ2FzaWRlJywgJ2Zvb3RlcicsICdoZWFkZXI6bm90KGFydGljbGUgaGVhZGVyKScsXG4gICcuYWQnLCAnLmFkdmVydGlzZW1lbnQnLCAnLmFkcycsICcuYWQtY29udGFpbmVyJyxcbiAgJy5zaWRlYmFyJywgJy5yZWxhdGVkJywgJy5yZWNvbW1lbmRlZCcsICcuc3VnZ2VzdGlvbnMnLFxuICAnLnNvY2lhbC1zaGFyZScsICcuc2hhcmUtYnV0dG9ucycsICcuc29jaWFsLWxpbmtzJyxcbiAgJy5jb21tZW50cycsICcjY29tbWVudHMnLCAnLmNvbW1lbnQtc2VjdGlvbicsXG4gICdzY3JpcHQnLCAnc3R5bGUnLCAnbm9zY3JpcHQnLCAnaWZyYW1lJyxcbiAgJ1tjbGFzcyo9XCJuZXdzbGV0dGVyXCJdJywgJ1tjbGFzcyo9XCJzdWJzY3JpYmVcIl0nLFxuICAnW2NsYXNzKj1cInBvcHVwXCJdJywgJ1tjbGFzcyo9XCJtb2RhbFwiXScsXG4gICcuYXV0aG9yLWJpbycsICcuYXV0aG9yLWluZm8nLCAnLmFib3V0LWF1dGhvcicsXG4gICcudGFncycsICcudGFnLWxpc3QnLCAnLmNhdGVnb3JpZXMnLFxuICAnLmJyZWFkY3J1bWInLCAnLmJyZWFkY3J1bWJzJyxcbiAgJy5wYWdpbmF0aW9uJywgJy5wYWdlcicsXG4gICcuY29va2llLW5vdGljZScsICcuZ2RwcicsXG5dO1xuXG5jb25zdCBDT05URU5UX1NFTEVDVE9SUyA9IFtcbiAgJ2FydGljbGUnLFxuICAnW3JvbGU9XCJhcnRpY2xlXCJdJyxcbiAgJ21haW4gYXJ0aWNsZScsXG4gICcucG9zdC1jb250ZW50JyxcbiAgJy5hcnRpY2xlLWNvbnRlbnQnLFxuICAnLmVudHJ5LWNvbnRlbnQnLFxuICAnLnBvc3QtYm9keScsXG4gICcuYXJ0aWNsZS1ib2R5JyxcbiAgJy5jb250ZW50LWJvZHknLFxuICAnbWFpbicsXG4gICdbcm9sZT1cIm1haW5cIl0nLFxuICAnI2NvbnRlbnQnLFxuICAnLmNvbnRlbnQnLFxuXTtcblxuY29uc3QgVElUTEVfU0VMRUNUT1JTID0gW1xuICAnYXJ0aWNsZSBoMScsXG4gICdoMVtpdGVtcHJvcD1cImhlYWRsaW5lXCJdJyxcbiAgJ1twcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJyxcbiAgJ21ldGFbbmFtZT1cInR3aXR0ZXI6dGl0bGVcIl0nLFxuICAnaDEnLFxuICAnLnBvc3QtdGl0bGUnLFxuICAnLmFydGljbGUtdGl0bGUnLFxuICAnLmVudHJ5LXRpdGxlJyxcbl07XG5cbmNvbnN0IEFVVEhPUl9TRUxFQ1RPUlMgPSBbXG4gICdbcmVsPVwiYXV0aG9yXCJdJyxcbiAgJ1tpdGVtcHJvcD1cImF1dGhvclwiXScsXG4gICcuYXV0aG9yLW5hbWUnLFxuICAnLmJ5bGluZScsXG4gICcuYXV0aG9yJyxcbiAgJ21ldGFbbmFtZT1cImF1dGhvclwiXScsXG5dO1xuXG5jb25zdCBEQVRFX1NFTEVDVE9SUyA9IFtcbiAgJ3RpbWUnLFxuICAnW2l0ZW1wcm9wPVwiZGF0ZVB1Ymxpc2hlZFwiXScsXG4gICdbZGF0ZXRpbWVdJyxcbiAgJy5wb3N0LWRhdGUnLFxuICAnLmFydGljbGUtZGF0ZScsXG4gICcucHVibGlzaC1kYXRlJyxcbiAgJ21ldGFbbmFtZT1cImRhdGVcIl0nLFxuICAnW3Byb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiXScsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEFydGljbGUoZG9jOiBEb2N1bWVudCwgdXJsOiBzdHJpbmcpOiBFeHRyYWN0ZWRBcnRpY2xlIHtcbiAgY29uc3QgdGl0bGUgPSBleHRyYWN0VGl0bGUoZG9jKTtcbiAgY29uc3QgYXV0aG9yID0gZXh0cmFjdEF1dGhvcihkb2MpO1xuICBjb25zdCBkYXRlID0gZXh0cmFjdERhdGUoZG9jKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBmaW5kTWFpbkNvbnRlbnQoZG9jKTtcbiAgY29uc3QgY2xlYW5lZENvbnRlbnQgPSBjbGVhbkNvbnRlbnQobWFpbkNvbnRlbnQpO1xuICBjb25zdCBpbWFnZXMgPSBleHRyYWN0SW1hZ2VzKGNsZWFuZWRDb250ZW50KTtcbiAgY29uc3QgZmF2aWNvbiA9IGV4dHJhY3RGYXZpY29uKGRvYyk7XG4gIGNvbnN0IHJlYWRpbmdUaW1lID0gY2FsY3VsYXRlUmVhZGluZ1RpbWUoY2xlYW5lZENvbnRlbnQudGV4dENvbnRlbnQgfHwgJycpO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgYXV0aG9yLFxuICAgIGRhdGUsXG4gICAgY29udGVudDogY2xlYW5lZENvbnRlbnQudGV4dENvbnRlbnQgfHwgJycsXG4gICAgY29udGVudEh0bWw6IGNsZWFuZWRDb250ZW50LFxuICAgIGltYWdlcyxcbiAgICBzb3VyY2U6IG5ldyBVUkwodXJsKS5ob3N0bmFtZSxcbiAgICBmYXZpY29uLFxuICAgIHJlYWRpbmdUaW1lLFxuICAgIHVybCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFRpdGxlKGRvYzogRG9jdW1lbnQpOiBzdHJpbmcge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFRJVExFX1NFTEVDVE9SUykge1xuICAgIGNvbnN0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbCkge1xuICAgICAgY29uc3QgdGl0bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSB8fCBlbC50ZXh0Q29udGVudD8udHJpbSgpO1xuICAgICAgaWYgKHRpdGxlICYmIHRpdGxlLmxlbmd0aCA+IDUgJiYgdGl0bGUubGVuZ3RoIDwgMzAwKSB7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRvYy50aXRsZSB8fCAnVW50aXRsZWQnO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0QXV0aG9yKGRvYzogRG9jdW1lbnQpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIEFVVEhPUl9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IGF1dGhvciA9IGVsLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIHx8IGVsLnRleHRDb250ZW50Py50cmltKCk7XG4gICAgICBpZiAoYXV0aG9yICYmIGF1dGhvci5sZW5ndGggPCAxMDApIHtcbiAgICAgICAgcmV0dXJuIGF1dGhvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdERhdGUoZG9jOiBEb2N1bWVudCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgREFURV9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IGRhdGVBdHRyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRldGltZScpIHx8IGVsLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgY29uc3QgZGF0ZVRleHQgPSBkYXRlQXR0ciB8fCBlbC50ZXh0Q29udGVudD8udHJpbSgpO1xuICAgICAgaWYgKGRhdGVUZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoZGF0ZVRleHQpO1xuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZE1haW5Db250ZW50KGRvYzogRG9jdW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgQ09OVEVOVF9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwgJiYgZWwudGV4dENvbnRlbnQgJiYgZWwudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCA+IDIwMCkge1xuICAgICAgcmV0dXJuIGVsIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnZGl2LCBzZWN0aW9uLCBtYWluJyk7XG4gIGxldCBiZXN0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBsZXQgYmVzdFNjb3JlID0gMDtcblxuICBjYW5kaWRhdGVzLmZvckVhY2goKGNhbmRpZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBjYW5kaWRhdGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dExlbmd0aCA9IGh0bWwudGV4dENvbnRlbnQ/Lmxlbmd0aCB8fCAwO1xuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKS5sZW5ndGg7XG4gICAgY29uc3Qgc2NvcmUgPSB0ZXh0TGVuZ3RoICsgKHBhcmFncmFwaHMgKiAxMDApO1xuXG4gICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgIGJlc3QgPSBodG1sO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGJlc3QgfHwgZG9jLmJvZHk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ29udGVudChlbDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuXG4gIFJFTU9WRV9TRUxFQ1RPUlMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKChlbCkgPT4gZWwucmVtb3ZlKCkpO1xuICB9KTtcblxuICBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaCgoYSkgPT4ge1xuICAgIGNvbnN0IGhyZWYgPSBhLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmIChocmVmICYmICFocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSAmJiAhaHJlZi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgfVxuICB9KTtcblxuICBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBodG1sID0gZWwgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29uY2xpY2snKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW92ZXInKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW91dCcpO1xuICB9KTtcblxuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJbWFnZXMoY29udGVudDogSFRNTEVsZW1lbnQpOiBBcnJheTx7IHNyYzogc3RyaW5nOyBhbHQ6IHN0cmluZzsgY2FwdGlvbj86IHN0cmluZyB9PiB7XG4gIGNvbnN0IGltYWdlczogQXJyYXk8eyBzcmM6IHN0cmluZzsgYWx0OiBzdHJpbmc7IGNhcHRpb24/OiBzdHJpbmcgfT4gPSBbXTtcblxuICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmZvckVhY2goKGltZykgPT4ge1xuICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8IGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgaWYgKHNyYyAmJiAhc3JjLmluY2x1ZGVzKCdhdmF0YXInKSAmJiAhc3JjLmluY2x1ZGVzKCdpY29uJykgJiYgIXNyYy5pbmNsdWRlcygnbG9nbycpKSB7XG4gICAgICBjb25zdCBhbHQgPSBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKSB8fCAnJztcbiAgICAgIGNvbnN0IGZpZ3VyZSA9IGltZy5jbG9zZXN0KCdmaWd1cmUnKTtcbiAgICAgIGNvbnN0IGNhcHRpb24gPSBmaWd1cmU/LnF1ZXJ5U2VsZWN0b3IoJ2ZpZ2NhcHRpb24nKT8udGV4dENvbnRlbnQ/LnRyaW0oKTtcblxuICAgICAgaW1hZ2VzLnB1c2goeyBzcmMsIGFsdCwgY2FwdGlvbiB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbWFnZXMuc2xpY2UoMCwgMjApO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RmF2aWNvbihkb2M6IERvY3VtZW50KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgaWNvbiA9IGRvYy5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImljb25cIl0sIGxpbmtbcmVsPVwic2hvcnRjdXQgaWNvblwiXScpO1xuICBjb25zdCBocmVmID0gaWNvbj8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIFxuICBpZiAoaHJlZikge1xuICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoJy8vJykpIHJldHVybiAnaHR0cHM6JyArIGhyZWY7XG4gICAgaWYgKGhyZWYuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCBvcmlnaW4gPSBkb2MubG9jYXRpb24/Lm9yaWdpbiB8fCAnaHR0cHM6Ly9leGFtcGxlLmNvbSc7XG4gICAgICByZXR1cm4gb3JpZ2luICsgaHJlZjtcbiAgICB9XG4gICAgcmV0dXJuIGhyZWY7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSZWFkaW5nVGltZSh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB3b3Jkc1Blck1pbnV0ZSA9IDIwMDtcbiAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KC9cXHMrLykubGVuZ3RoO1xuICByZXR1cm4gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHdvcmRzIC8gd29yZHNQZXJNaW51dGUpKTtcbn0iLCIvKipcbiAqIExheW91dCBFbmdpbmUgZm9yIENhbG1XZWIgU3VwZXIgUmVhZGVyXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBFeHRyYWN0ZWRBcnRpY2xlIH0gZnJvbSAnLi4vZXh0cmFjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBSZWFkZXJMYXlvdXQge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNvbHVtbnM6IG51bWJlcjtcbiAgbWF4V2lkdGg6IHN0cmluZztcbiAgZm9udEZhbWlseTogc3RyaW5nO1xuICBmb250U2l6ZTogc3RyaW5nO1xuICBsaW5lSGVpZ2h0OiBzdHJpbmc7XG4gIHJlbmRlcjogKGFydGljbGU6IEV4dHJhY3RlZEFydGljbGUsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGNyZWF0ZUJhc2VTdHlsZXMgPSAobGF5b3V0OiBSZWFkZXJMYXlvdXQpOiBzdHJpbmcgPT4gYFxuICAucmVhZGVyLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAke2xheW91dC5tYXhXaWR0aH07XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAke2xheW91dC5mb250RmFtaWx5fTtcbiAgICBmb250LXNpemU6ICR7bGF5b3V0LmZvbnRTaXplfTtcbiAgICBsaW5lLWhlaWdodDogJHtsYXlvdXQubGluZUhlaWdodH07XG4gICAgY29sb3I6ICMxZjI5Mzc7XG4gIH1cblxuICAucmVhZGVyLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucmVhZGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICAgIGNvbG9yOiAjMTExODI3O1xuICB9XG5cbiAgLnJlYWRlci1tZXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLnJlYWRlci1tZXRhLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgfVxuXG4gIC5yZWFkZXItY29udGVudCB7XG4gICAgY29sdW1uLWNvdW50OiAke2xheW91dC5jb2x1bW5zfTtcbiAgICBjb2x1bW4tZ2FwOiA0MHB4O1xuICAgIGNvbHVtbi1ydWxlOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgfVxuXG4gIC5yZWFkZXItY29udGVudCBwIHtcbiAgICBtYXJnaW46IDAgMCAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cblxuICAucmVhZGVyLWNvbnRlbnQgaDIsIC5yZWFkZXItY29udGVudCBoMyB7XG4gICAgY29sdW1uLXNwYW46IGFsbDtcbiAgICBtYXJnaW46IDJlbSAwIDFlbTtcbiAgfVxuXG4gIC5yZWFkZXItY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgfVxuXG4gIC5yZWFkZXItY29udGVudCBibG9ja3F1b3RlIHtcbiAgICBjb2x1bW4tc3BhbjogYWxsO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzNiODJmNjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xuICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICM0YjU1NjM7XG4gIH1cblxuICAucmVhZGVyLWNvbnRlbnQgcHJlLCAucmVhZGVyLWNvbnRlbnQgY29kZSB7XG4gICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsICdGaXJhIENvZGUnLCBtb25vc3BhY2U7XG4gICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG5cbiAgLnJlYWRlci1jb250ZW50IHByZSB7XG4gICAgY29sdW1uLXNwYW46IGFsbDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuXG4gIC5yZWFkZXItZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICBjb2xvcjogIzljYTNhZjtcbiAgfVxuXG4gIC5yZWFkZXItc291cmNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAucmVhZGVyLWZhdmljb24ge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cblxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgLnJlYWRlci1jb250YWluZXIge1xuICAgICAgY29sb3I6ICNlNWU3ZWI7XG4gICAgfVxuXG4gICAgLnJlYWRlci10aXRsZSB7XG4gICAgICBjb2xvcjogI2Y5ZmFmYjtcbiAgICB9XG5cbiAgICAucmVhZGVyLW1ldGEge1xuICAgICAgY29sb3I6ICM5Y2EzYWY7XG4gICAgfVxuXG4gICAgLnJlYWRlci1jb250ZW50IHtcbiAgICAgIGNvbHVtbi1ydWxlLWNvbG9yOiAjMzc0MTUxO1xuICAgIH1cblxuICAgIC5yZWFkZXItY29udGVudCBibG9ja3F1b3RlIHtcbiAgICAgIGNvbG9yOiAjOWNhM2FmO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM2MGE1ZmE7XG4gICAgfVxuXG4gICAgLnJlYWRlci1jb250ZW50IHByZSwgLnJlYWRlci1jb250ZW50IGNvZGUge1xuICAgICAgYmFja2dyb3VuZDogIzFmMjkzNztcbiAgICB9XG5cbiAgICAucmVhZGVyLWZvb3RlciB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAjMzc0MTUxO1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoYXJ0aWNsZTogRXh0cmFjdGVkQXJ0aWNsZSk6IHN0cmluZyA9PiBgXG4gIDxoZWFkZXIgY2xhc3M9XCJyZWFkZXItaGVhZGVyXCI+XG4gICAgPGgxIGNsYXNzPVwicmVhZGVyLXRpdGxlXCI+JHtlc2NhcGVIdG1sKGFydGljbGUudGl0bGUpfTwvaDE+XG4gICAgPGRpdiBjbGFzcz1cInJlYWRlci1tZXRhXCI+XG4gICAgICAke2FydGljbGUuYXV0aG9yID8gYDxzcGFuIGNsYXNzPVwicmVhZGVyLW1ldGEtaXRlbVwiPkJ5ICR7ZXNjYXBlSHRtbChhcnRpY2xlLmF1dGhvcil9PC9zcGFuPmAgOiAnJ31cbiAgICAgICR7YXJ0aWNsZS5kYXRlID8gYDxzcGFuIGNsYXNzPVwicmVhZGVyLW1ldGEtaXRlbVwiPiR7YXJ0aWNsZS5kYXRlfTwvc3Bhbj5gIDogJyd9XG4gICAgICA8c3BhbiBjbGFzcz1cInJlYWRlci1tZXRhLWl0ZW1cIj4ke2FydGljbGUucmVhZGluZ1RpbWV9IG1pbiByZWFkPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbmA7XG5cbmNvbnN0IHJlbmRlckZvb3RlciA9IChhcnRpY2xlOiBFeHRyYWN0ZWRBcnRpY2xlKTogc3RyaW5nID0+IGBcbiAgPGZvb3RlciBjbGFzcz1cInJlYWRlci1mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVhZGVyLXNvdXJjZVwiPlxuICAgICAgJHthcnRpY2xlLmZhdmljb24gPyBgPGltZyBjbGFzcz1cInJlYWRlci1mYXZpY29uXCIgc3JjPVwiJHtlc2NhcGVIdG1sKGFydGljbGUuZmF2aWNvbil9XCIgYWx0PVwiXCI+YCA6ICcnfVxuICAgICAgPHNwYW4+JHtlc2NhcGVIdG1sKGFydGljbGUuc291cmNlKX08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuYDtcblxuZnVuY3Rpb24gZXNjYXBlSHRtbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHNwYW4uaW5uZXJIVE1MO1xufVxuXG5leHBvcnQgY29uc3QgbmV3c3BhcGVyTGF5b3V0OiBSZWFkZXJMYXlvdXQgPSB7XG4gIGlkOiAnbmV3c3BhcGVyJyxcbiAgbmFtZTogJ05ld3NwYXBlcicsXG4gIGRlc2NyaXB0aW9uOiAnQ2xhc3NpYyBtdWx0aS1jb2x1bW4gbGF5b3V0IHdpdGggc2VyaWYgZm9udCcsXG4gIGNvbHVtbnM6IDIsXG4gIG1heFdpZHRoOiAnOTAwcHgnLFxuICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWYnLFxuICBmb250U2l6ZTogJzE4cHgnLFxuICBsaW5lSGVpZ2h0OiAnMS43JyxcbiAgcmVuZGVyKGFydGljbGUsIGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8c3R5bGU+JHtjcmVhdGVCYXNlU3R5bGVzKHRoaXMpfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAke3JlbmRlckhlYWRlcihhcnRpY2xlKX1cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWFkZXItY29udGVudFwiPlxuICAgICAgICAgICR7YXJ0aWNsZS5jb250ZW50SHRtbC5pbm5lckhUTUx9XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgJHtyZW5kZXJGb290ZXIoYXJ0aWNsZSl9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHRlcm1pbmFsTGF5b3V0OiBSZWFkZXJMYXlvdXQgPSB7XG4gIGlkOiAndGVybWluYWwnLFxuICBuYW1lOiAnVGVybWluYWwnLFxuICBkZXNjcmlwdGlvbjogJ0hhY2tlci1zdHlsZSBtb25vc3BhY2UgZGFyayB0aGVtZScsXG4gIGNvbHVtbnM6IDEsXG4gIG1heFdpZHRoOiAnODAwcHgnLFxuICBmb250RmFtaWx5OiAnXCJKZXRCcmFpbnMgTW9ub1wiLCBcIkZpcmEgQ29kZVwiLCBcIlNGIE1vbm9cIiwgbW9ub3NwYWNlJyxcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgbGluZUhlaWdodDogJzEuNicsXG4gIHJlbmRlcihhcnRpY2xlLCBjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAke2NyZWF0ZUJhc2VTdHlsZXModGhpcyl9XG4gICAgICAgIC5yZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGQxMTE3O1xuICAgICAgICAgIGNvbG9yOiAjYzlkMWQ5O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDM2M2Q7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci10aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICM1OGE2ZmY7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1tZXRhIHtcbiAgICAgICAgICBjb2xvcjogIzhiOTQ5ZTtcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQge1xuICAgICAgICAgIGNvbG9yOiAjYzlkMWQ5O1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCBhIHtcbiAgICAgICAgICBjb2xvcjogIzU4YTZmZjtcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLWZvb3RlciB7XG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzMwMzYzZDtcbiAgICAgICAgICBjb2xvcjogIzZlNzY4MTtcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnPiBjYWxtd2ViLXJlYWRlcic7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICM3ZWU3ODc7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAke3JlbmRlckhlYWRlcihhcnRpY2xlKX1cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWFkZXItY29udGVudFwiPlxuICAgICAgICAgICR7YXJ0aWNsZS5jb250ZW50SHRtbC5pbm5lckhUTUx9XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgJHtyZW5kZXJGb290ZXIoYXJ0aWNsZSl9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRMYXlvdXQ6IFJlYWRlckxheW91dCA9IHtcbiAgaWQ6ICdjYXJkJyxcbiAgbmFtZTogJ0NhcmQnLFxuICBkZXNjcmlwdGlvbjogJ1BpbnRlcmVzdC1zdHlsZSBjYXJkIGxheW91dCB3aXRoIGltYWdlcycsXG4gIGNvbHVtbnM6IDEsXG4gIG1heFdpZHRoOiAnNjgwcHgnLFxuICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZicsXG4gIGZvbnRTaXplOiAnMTdweCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjgnLFxuICByZW5kZXIoYXJ0aWNsZSwgY29udGFpbmVyKSB7XG4gICAgY29uc3QgaGVyb0ltYWdlID0gYXJ0aWNsZS5pbWFnZXNbMF07XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgJHtjcmVhdGVCYXNlU3R5bGVzKHRoaXMpfVxuICAgICAgICAucmVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoMCwwLDAsMC4wOCk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItaGVybyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItaW5uZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1jb250ZW50IHtcbiAgICAgICAgICBjb2x1bW4tY291bnQ6IDE7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgICAgIC5yZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZjI5Mzc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cInJlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgJHtoZXJvSW1hZ2UgPyBgPGltZyBjbGFzcz1cInJlYWRlci1oZXJvXCIgc3JjPVwiJHtoZXJvSW1hZ2Uuc3JjfVwiIGFsdD1cIiR7aGVyb0ltYWdlLmFsdH1cIj5gIDogJyd9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWFkZXItaW5uZXJcIj5cbiAgICAgICAgICAke3JlbmRlckhlYWRlcihhcnRpY2xlKX1cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlYWRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAke2FydGljbGUuY29udGVudEh0bWwuaW5uZXJIVE1MfVxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAke3JlbmRlckZvb3RlcihhcnRpY2xlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZlZWRMYXlvdXQ6IFJlYWRlckxheW91dCA9IHtcbiAgaWQ6ICdmZWVkJyxcbiAgbmFtZTogJ0ZlZWQnLFxuICBkZXNjcmlwdGlvbjogJ1R3aXR0ZXItbGlrZSBzdHJlYW0gbGF5b3V0JyxcbiAgY29sdW1uczogMSxcbiAgbWF4V2lkdGg6ICc2MDBweCcsXG4gIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBzYW5zLXNlcmlmJyxcbiAgZm9udFNpemU6ICcxNnB4JyxcbiAgbGluZUhlaWdodDogJzEuNicsXG4gIHJlbmRlcihhcnRpY2xlLCBjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAke2NyZWF0ZUJhc2VTdHlsZXModGhpcyl9XG4gICAgICAgIC5yZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLWhlYWRlciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItbWV0YSB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCB7XG4gICAgICAgICAgY29sdW1uLWNvdW50OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCBwIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1mb290ZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgLnJlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE2MTgxYztcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzM4NDQ0ZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWRlci1oZWFkZXIsIC5yZWFkZXItZm9vdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzM4NDQ0ZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAke3JlbmRlckhlYWRlcihhcnRpY2xlKX1cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWFkZXItY29udGVudFwiPlxuICAgICAgICAgICR7YXJ0aWNsZS5jb250ZW50SHRtbC5pbm5lckhUTUx9XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgJHtyZW5kZXJGb290ZXIoYXJ0aWNsZSl9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hZ2F6aW5lTGF5b3V0OiBSZWFkZXJMYXlvdXQgPSB7XG4gIGlkOiAnbWFnYXppbmUnLFxuICBuYW1lOiAnTWFnYXppbmUnLFxuICBkZXNjcmlwdGlvbjogJ0ltYWdlLXJpY2ggZWRpdG9yaWFsIHN0eWxlJyxcbiAgY29sdW1uczogMSxcbiAgbWF4V2lkdGg6ICc4MjBweCcsXG4gIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZicsXG4gIGZvbnRTaXplOiAnMTlweCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjc1JyxcbiAgcmVuZGVyKGFydGljbGUsIGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8c3R5bGU+XG4gICAgICAgICR7Y3JlYXRlQmFzZVN0eWxlcyh0aGlzKX1cbiAgICAgICAgLnJlYWRlci1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHggNDBweDtcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItbWV0YSB7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCB7XG4gICAgICAgICAgY29sdW1uLWNvdW50OiAxO1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1jb250ZW50IHA6Zmlyc3QtY2hpbGQ6OmZpcnN0LWxldHRlciB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICMxMTE4Mjc7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1jb250ZW50IGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxODBweCk7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC05MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAucmVhZGVyLWNvbnRlbnQgcDpmaXJzdC1jaGlsZDo6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjlmYWZiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICR7cmVuZGVySGVhZGVyKGFydGljbGUpfVxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlYWRlci1jb250ZW50XCI+XG4gICAgICAgICAgJHthcnRpY2xlLmNvbnRlbnRIdG1sLmlubmVySFRNTH1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAke3JlbmRlckZvb3RlcihhcnRpY2xlKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgYWxsTGF5b3V0czogUmVhZGVyTGF5b3V0W10gPSBbXG4gIG5ld3NwYXBlckxheW91dCxcbiAgdGVybWluYWxMYXlvdXQsXG4gIGNhcmRMYXlvdXQsXG4gIGZlZWRMYXlvdXQsXG4gIG1hZ2F6aW5lTGF5b3V0LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExheW91dChpZDogc3RyaW5nKTogUmVhZGVyTGF5b3V0IHtcbiAgcmV0dXJuIGFsbExheW91dHMuZmluZCgobCkgPT4gbC5pZCA9PT0gaWQpIHx8IG5ld3NwYXBlckxheW91dDtcbn0iLCIvKipcbiAqIFRoZW1lcyBmb3IgQ2FsbVdlYiBTdXBlciBSZWFkZXJcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRlclRoZW1lIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgYWNjZW50OiBzdHJpbmc7XG4gIGlzRGFyazogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUaGVtZTogUmVhZGVyVGhlbWUgPSB7XG4gIGlkOiAnZGVmYXVsdCcsXG4gIG5hbWU6ICdMaWdodCcsXG4gIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgdGV4dDogJyMxZjI5MzcnLFxuICBhY2NlbnQ6ICcjM2I4MmY2JyxcbiAgaXNEYXJrOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBkYXJrVGhlbWU6IFJlYWRlclRoZW1lID0ge1xuICBpZDogJ2RhcmsnLFxuICBuYW1lOiAnRGFyaycsXG4gIGJhY2tncm91bmQ6ICcjMTExODI3JyxcbiAgdGV4dDogJyNlNWU3ZWInLFxuICBhY2NlbnQ6ICcjNjBhNWZhJyxcbiAgaXNEYXJrOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlcGlhVGhlbWU6IFJlYWRlclRoZW1lID0ge1xuICBpZDogJ3NlcGlhJyxcbiAgbmFtZTogJ1NlcGlhJyxcbiAgYmFja2dyb3VuZDogJyNmNGVjZDgnLFxuICB0ZXh0OiAnIzQzMzQyMicsXG4gIGFjY2VudDogJyM4YjVhMmInLFxuICBpc0Rhcms6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IG1pZG5pZ2h0VGhlbWU6IFJlYWRlclRoZW1lID0ge1xuICBpZDogJ21pZG5pZ2h0JyxcbiAgbmFtZTogJ01pZG5pZ2h0JyxcbiAgYmFja2dyb3VuZDogJyMwZjE3MmEnLFxuICB0ZXh0OiAnI2UyZThmMCcsXG4gIGFjY2VudDogJyM4MThjZjgnLFxuICBpc0Rhcms6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgYWxsVGhlbWVzOiBSZWFkZXJUaGVtZVtdID0gW1xuICBkZWZhdWx0VGhlbWUsXG4gIGRhcmtUaGVtZSxcbiAgc2VwaWFUaGVtZSxcbiAgbWlkbmlnaHRUaGVtZSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGVtZShpZDogc3RyaW5nKTogUmVhZGVyVGhlbWUge1xuICByZXR1cm4gYWxsVGhlbWVzLmZpbmQoKHQpID0+IHQuaWQgPT09IGlkKSB8fCBkZWZhdWx0VGhlbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRoZW1lKHRoZW1lOiBSZWFkZXJUaGVtZSwgY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tcmVhZGVyLWJnJywgdGhlbWUuYmFja2dyb3VuZCk7XG4gIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yZWFkZXItdGV4dCcsIHRoZW1lLnRleHQpO1xuICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tcmVhZGVyLWFjY2VudCcsIHRoZW1lLmFjY2VudCk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZS5pZCk7XG59IiwiLyoqXG4gKiBSZWFkZXIgT3ZlcmxheSBmb3IgQ2FsbVdlYiBTdXBlciBSZWFkZXJcbiAqL1xuXG5pbXBvcnQgdHlwZSB7IEV4dHJhY3RlZEFydGljbGUgfSBmcm9tICcuL2V4dHJhY3Rvcic7XG5pbXBvcnQgdHlwZSB7IFJlYWRlckxheW91dCB9IGZyb20gJy4vbGF5b3V0cyc7XG5pbXBvcnQgdHlwZSB7IFJlYWRlclRoZW1lIH0gZnJvbSAnLi90aGVtZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEFydGljbGUgfSBmcm9tICcuL2V4dHJhY3Rvcic7XG5pbXBvcnQgeyBnZXRMYXlvdXQsIGFsbExheW91dHMgfSBmcm9tICcuL2xheW91dHMnO1xuaW1wb3J0IHsgZ2V0VGhlbWUsIGFsbFRoZW1lcywgYXBwbHlUaGVtZSB9IGZyb20gJy4vdGhlbWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZWFkZXJPcHRpb25zIHtcbiAgbGF5b3V0SWQ/OiBzdHJpbmc7XG4gIHRoZW1lSWQ/OiBzdHJpbmc7XG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBPVkVSTEFZX0lEID0gJ2NhbG13ZWItcmVhZGVyLW92ZXJsYXknO1xuY29uc3QgT1ZFUkxBWV9TVFlMRVMgPSBgXG4gICMke09WRVJMQVlfSUR9IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVhZGVyLWJnLCAjZmZmZmZmKTtcbiAgICBjb2xvcjogdmFyKC0tcmVhZGVyLXRleHQsICMxZjI5MzcpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTZweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgLmNhbG13ZWItcmVhZGVyLXRvb2xiYXItbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci1sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzYjgyZjY7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzZiNzI4MDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci10b29sYmFyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzM3NDE1MTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICB9XG5cbiAgLmNhbG13ZWItcmVhZGVyLWJ0bjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItYnRuLWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWY0NDQ0O1xuICAgIGJvcmRlci1jb2xvcjogI2VmNDQ0NDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItYnRuLWNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGMyNjI2O1xuICB9XG5cbiAgLmNhbG13ZWItcmVhZGVyLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLW1lbnUub3BlbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzM3NDE1MTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuICB9XG5cbiAgLmNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24taXRlbS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xuICAgIGNvbG9yOiAjM2I4MmY2O1xuICB9XG5cbiAgLmNhbG13ZWItcmVhZGVyLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICB9XG5cbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC5jYWxtd2ViLXJlYWRlci10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTcsIDI0LCAzOSwgMC45NSk7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItcmVhZGVyLWJ0biB7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICAgIGNvbG9yOiAjZTVlN2ViO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLXJlYWRlci1idG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLXJlYWRlci1kcm9wZG93bi1tZW51IHtcbiAgICAgIGJhY2tncm91bmQ6ICMxZjI5Mzc7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24taXRlbSB7XG4gICAgICBjb2xvcjogI2U1ZTdlYjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAgIH1cbiAgfVxuYDtcblxubGV0IGN1cnJlbnRMYXlvdXQ6IFJlYWRlckxheW91dDtcbmxldCBjdXJyZW50VGhlbWU6IFJlYWRlclRoZW1lO1xubGV0IGN1cnJlbnRBcnRpY2xlOiBFeHRyYWN0ZWRBcnRpY2xlIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuUmVhZGVyKG9wdGlvbnM6IFJlYWRlck9wdGlvbnMgPSB7fSk6IHZvaWQge1xuICBjb25zdCBleGlzdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuICBpZiAoZXhpc3RpbmcpIHJldHVybjtcblxuICBjdXJyZW50TGF5b3V0ID0gZ2V0TGF5b3V0KG9wdGlvbnMubGF5b3V0SWQgfHwgJ25ld3NwYXBlcicpO1xuICBjdXJyZW50VGhlbWUgPSBnZXRUaGVtZShvcHRpb25zLnRoZW1lSWQgfHwgJ2RlZmF1bHQnKTtcblxuICBjb25zdCBhcnRpY2xlID0gZXh0cmFjdEFydGljbGUoZG9jdW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgY3VycmVudEFydGljbGUgPSBhcnRpY2xlO1xuXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG5cbiAgY29uc3Qgc2hhZG93ID0gb3ZlcmxheS5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cbiAgc2hhZG93LmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+JHtPVkVSTEFZX1NUWUxFU308L3N0eWxlPlxuICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXJlYWRlci10b29sYmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1yZWFkZXItdG9vbGJhci1sZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXJlYWRlci1sb2dvXCI+XG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDIyczgtNCA4LTEwVjVsLTgtMy04IDN2N2MwIDYgOCAxMCA4IDEwelwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICBTdXBlciBSZWFkZXJcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXJlYWRlci10aXRsZVwiPiR7ZXNjYXBlSHRtbChhcnRpY2xlLnRpdGxlKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLXRvb2xiYXItcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWRyb3Bkb3duXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWJ0blwiIGRhdGEtZHJvcGRvd249XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgICAgICA8cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiN1wiLz5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjE0XCIgeT1cIjNcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCI3XCIvPlxuICAgICAgICAgICAgICA8cmVjdCB4PVwiM1wiIHk9XCIxNFwiIHdpZHRoPVwiN1wiIGhlaWdodD1cIjdcIi8+XG4gICAgICAgICAgICAgIDxyZWN0IHg9XCIxNFwiIHk9XCIxNFwiIHdpZHRoPVwiN1wiIGhlaWdodD1cIjdcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGF5b3V0LW5hbWVcIj4ke2N1cnJlbnRMYXlvdXQubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLW1lbnVcIiBkYXRhLW1lbnU9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICR7YWxsTGF5b3V0cy5tYXAobCA9PiBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXJlYWRlci1kcm9wZG93bi1pdGVtICR7bC5pZCA9PT0gY3VycmVudExheW91dC5pZCA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS1sYXlvdXQ9XCIke2wuaWR9XCI+XG4gICAgICAgICAgICAgICAgJHtsLm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYCkuam9pbignJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXJlYWRlci1kcm9wZG93blwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxtd2ViLXJlYWRlci1idG5cIiBkYXRhLWRyb3Bkb3duPVwidGhlbWVcIj5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMXYyTTEyIDIxdjJNNC4yMiA0LjIybDEuNDIgMS40Mk0xOC4zNiAxOC4zNmwxLjQyIDEuNDJNMSAxMmgyTTIxIDEyaDJNNC4yMiAxOS43OGwxLjQyLTEuNDJNMTguMzYgNS42NGwxLjQyLTEuNDJcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhlbWUtbmFtZVwiPiR7Y3VycmVudFRoZW1lLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXJlYWRlci1kcm9wZG93bi1tZW51XCIgZGF0YS1tZW51PVwidGhlbWVcIj5cbiAgICAgICAgICAgICR7YWxsVGhlbWVzLm1hcCh0ID0+IGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLWl0ZW0gJHt0LmlkID09PSBjdXJyZW50VGhlbWUuaWQgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtdGhlbWU9XCIke3QuaWR9XCI+XG4gICAgICAgICAgICAgICAgJHt0Lm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYCkuam9pbignJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxtd2ViLXJlYWRlci1idG4gY2FsbXdlYi1yZWFkZXItYnRuLWNsb3NlXCIgZGF0YS1hY3Rpb249XCJjbG9zZVwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOCA2TDYgMThNNiA2bDEyIDEyXCIvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIENsb3NlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWNvbnRlbnRcIiBpZD1cInJlYWRlci1jb250ZW50XCI+PC9kaXY+XG4gIGA7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICBjb25zdCBjb250ZW50RWwgPSBzaGFkb3cuZ2V0RWxlbWVudEJ5SWQoJ3JlYWRlci1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XG4gIGFwcGx5VGhlbWUoY3VycmVudFRoZW1lLCBvdmVybGF5KTtcbiAgY3VycmVudExheW91dC5yZW5kZXIoYXJ0aWNsZSwgY29udGVudEVsKTtcblxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKHNoYWRvdywgb3ZlcmxheSwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVJlYWRlcigpOiB2b2lkIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhzaGFkb3c6IFNoYWRvd1Jvb3QsIG92ZXJsYXk6IEhUTUxFbGVtZW50LCBvcHRpb25zOiBSZWFkZXJPcHRpb25zKTogdm9pZCB7XG4gIHNoYWRvdy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wZG93bl0nKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBtZW51SWQgPSAoYnRuIGFzIEhUTUxFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZHJvcGRvd24nKTtcbiAgICAgIGNvbnN0IG1lbnUgPSBzaGFkb3cucXVlcnlTZWxlY3RvcihgW2RhdGEtbWVudT1cIiR7bWVudUlkfVwiXWApO1xuICAgICAgXG4gICAgICBzaGFkb3cucXVlcnlTZWxlY3RvckFsbCgnLmNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLW1lbnUnKS5mb3JFYWNoKG0gPT4ge1xuICAgICAgICBpZiAobSAhPT0gbWVudSkgbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgbWVudT8uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIH0pO1xuICB9KTtcblxuICBzaGFkb3cucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGF5b3V0XScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgbGF5b3V0SWQgPSAoaXRlbSBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdkYXRhLWxheW91dCcpO1xuICAgICAgaWYgKGxheW91dElkKSB7XG4gICAgICAgIGN1cnJlbnRMYXlvdXQgPSBnZXRMYXlvdXQobGF5b3V0SWQpO1xuICAgICAgICBjb25zdCBjb250ZW50RWwgPSBzaGFkb3cuZ2V0RWxlbWVudEJ5SWQoJ3JlYWRlci1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmIChjdXJyZW50QXJ0aWNsZSkge1xuICAgICAgICAgIGNvbnRlbnRFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICBjdXJyZW50TGF5b3V0LnJlbmRlcihjdXJyZW50QXJ0aWNsZSwgY29udGVudEVsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2hhZG93LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxheW91dF0nKS5mb3JFYWNoKGkgPT4gaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHNoYWRvdy5xdWVyeVNlbGVjdG9yKCcubGF5b3V0LW5hbWUnKSEudGV4dENvbnRlbnQgPSBjdXJyZW50TGF5b3V0Lm5hbWU7XG4gICAgICAgIHNoYWRvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZW51PVwibGF5b3V0XCJdJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgc2hhZG93LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRoZW1lXScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgdGhlbWVJZCA9IChpdGVtIGFzIEhUTUxFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICAgIGlmICh0aGVtZUlkKSB7XG4gICAgICAgIGN1cnJlbnRUaGVtZSA9IGdldFRoZW1lKHRoZW1lSWQpO1xuICAgICAgICBhcHBseVRoZW1lKGN1cnJlbnRUaGVtZSwgb3ZlcmxheSk7XG4gICAgICAgIFxuICAgICAgICBzaGFkb3cucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGhlbWVdJykuZm9yRWFjaChpID0+IGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBzaGFkb3cucXVlcnlTZWxlY3RvcignLnRoZW1lLW5hbWUnKSEudGV4dENvbnRlbnQgPSBjdXJyZW50VGhlbWUubmFtZTtcbiAgICAgICAgc2hhZG93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1lbnU9XCJ0aGVtZVwiXScpPy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gc2hhZG93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbj1cImNsb3NlXCJdJyk7XG4gIGNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbG9zZVJlYWRlcigpO1xuICAgIG9wdGlvbnMub25DbG9zZT8uKCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGNsb3NlUmVhZGVyKCk7XG4gICAgICBvcHRpb25zLm9uQ2xvc2U/LigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hhZG93LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxtd2ViLXJlYWRlci1kcm9wZG93bi1tZW51JykuZm9yRWFjaChtID0+IHtcbiAgICAgIG0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHNwYW4uaW5uZXJIVE1MO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkZXJPcGVuKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVJlYWRlcihvcHRpb25zPzogUmVhZGVyT3B0aW9ucyk6IHZvaWQge1xuICBpZiAoaXNSZWFkZXJPcGVuKCkpIHtcbiAgICBjbG9zZVJlYWRlcigpO1xuICB9IGVsc2Uge1xuICAgIG9wZW5SZWFkZXIob3B0aW9ucyk7XG4gIH1cbn0iLCIvKipcbiAqIFJlYWRlciBFbnRyeSBQb2ludCBmb3IgQ2FsbVdlYlxuICpcbiAqIExpc3RlbnMgZm9yIGtleWJvYXJkIHNob3J0Y3V0IHRvIHRvZ2dsZSBTdXBlciBSZWFkZXIgbW9kZS5cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVDb250ZW50U2NyaXB0IH0gZnJvbSAnd3h0L3V0aWxzL2RlZmluZS1jb250ZW50LXNjcmlwdCc7XG5pbXBvcnQgeyB0b2dnbGVSZWFkZXIgfSBmcm9tICcuLi9zcmMvcmVuZGVyZXIvcmVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29udGVudFNjcmlwdCh7XG4gIG1hdGNoZXM6IFsnPGFsbF91cmxzPiddLFxuICBydW5BdDogJ2RvY3VtZW50X2lkbGUnLFxuXG4gIG1haW4oKSB7XG4gICAgY29uc29sZS5sb2coJ1tDYWxtV2ViXSBSZWFkZXIgY29udGVudCBzY3JpcHQgbG9hZGVkJyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmFsdEtleSAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSAncicpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVSZWFkZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn0pOyJdLCJuYW1lcyI6WyJkZWZpbml0aW9uIiwiZWwiLCJlc2NhcGVIdG1sIl0sIm1hcHBpbmdzIjoiOztBQUNBLFdBQVMsb0JBQW9CQSxhQUFZO0FBQ3hDLFdBQU9BO0FBQUEsRUFDUjtBQ29CQSxRQUFNLG1CQUFtQjtBQUFBLElBQ3ZCO0FBQUEsSUFBTztBQUFBLElBQVM7QUFBQSxJQUFVO0FBQUEsSUFDMUI7QUFBQSxJQUFPO0FBQUEsSUFBa0I7QUFBQSxJQUFRO0FBQUEsSUFDakM7QUFBQSxJQUFZO0FBQUEsSUFBWTtBQUFBLElBQWdCO0FBQUEsSUFDeEM7QUFBQSxJQUFpQjtBQUFBLElBQWtCO0FBQUEsSUFDbkM7QUFBQSxJQUFhO0FBQUEsSUFBYTtBQUFBLElBQzFCO0FBQUEsSUFBVTtBQUFBLElBQVM7QUFBQSxJQUFZO0FBQUEsSUFDL0I7QUFBQSxJQUF5QjtBQUFBLElBQ3pCO0FBQUEsSUFBb0I7QUFBQSxJQUNwQjtBQUFBLElBQWU7QUFBQSxJQUFnQjtBQUFBLElB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Q2pGLGVBQUssVUFBVSxJQUFJLFFBQVE7QUFDM0IsaUJBQU8sY0FBYyxhQUFhLEVBQUcsY0FBYyxhQUFhO0FBQ2hFLGlCQUFPLGNBQWMscUJBQXFCLEdBQUcsVUFBVSxPQUFPLE1BQU07QUFBQSxRQUN0RTtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUVELFVBQU0sV0FBVyxPQUFPLGNBQWMsdUJBQXVCO0FBQzdELGNBQVUsaUJBQWlCLFNBQVMsTUFBTTtBQUN4QyxrQkFBQTtBQUNBLGNBQVEsVUFBQTtBQUFBLElBQ1YsQ0FBQztBQUVELGFBQVMsaUJBQWlCLFdBQVcsQ0FBQyxNQUFNO0FBQzFDLFVBQUksRUFBRSxRQUFRLFVBQVU7QUFDdEIsb0JBQUE7QUFDQSxnQkFBUSxVQUFBO0FBQUEsTUFDVjtBQUFBLElBQ0YsQ0FBQztBQUVELGFBQVMsaUJBQWlCLFNBQVMsTUFBTTtBQUN2QyxhQUFPLGlCQUFpQiwrQkFBK0IsRUFBRSxRQUFRLENBQUEsTUFBSztBQUNwRSxVQUFFLFVBQVUsT0FBTyxNQUFNO0FBQUEsTUFDM0IsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUFBLEVBQ0g7QUFFQSxXQUFTLFdBQVcsTUFBc0I7QUFDeEMsVUFBTSxPQUFPLFNBQVMsY0FBYyxNQUFNO0FBQzFDLFNBQUssY0FBYztBQUNuQixXQUFPLEtBQUs7QUFBQSxFQUNkO0FBRU8sV0FBUyxlQUF3QjtBQUN0QyxXQUFPLENBQUMsQ0FBQyxTQUFTLGVBQWUsVUFBVTtBQUFBLEVBQzdDO0FBRU8sV0FBUyxhQUFhLFNBQStCO0FBQzFELFFBQUksZ0JBQWdCO0FBQ2xCLGtCQUFBO0FBQUEsSUFDRixPQUFPO0FBQ0wsaUJBQVcsT0FBTztBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQzdXQSxRQUFBLGFBQWUsb0JBQW9CO0FBQUEsSUFDakMsU0FBUyxDQUFDLFlBQVk7QUFBQSxJQUN0QixPQUFPO0FBQUEsSUFFUCxPQUFPO0FBQ0wsY0FBUSxJQUFJLHdDQUF3QztBQUVwRCxlQUFTLGlCQUFpQixXQUFXLENBQUMsTUFBTTtBQUMxQyxZQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksWUFBQSxNQUFrQixLQUFLO0FBQzNDLFlBQUUsZUFBQTtBQUNGLHVCQUFBO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
reader;