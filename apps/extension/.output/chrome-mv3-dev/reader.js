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
  function escapeHtml$1(text) {
    const span = document.createElement("span");
    span.textContent = text;
    return span.innerHTML;
  }
  const renderMeta = (article) => `
  <div class="reader-meta">
    ${article.author ? `<span class="reader-meta-item author">${escapeHtml$1(article.author)}</span>` : ""}
    ${article.date ? `<span class="reader-meta-item date">${article.date}</span>` : ""}
    <span class="reader-meta-item time">${article.readingTime} min read</span>
  </div>
`;
  const renderFooter = (article) => `
  <footer class="reader-footer">
    <div class="reader-source">
      ${article.favicon ? `<img class="reader-favicon" src="${escapeHtml$1(article.favicon)}" alt="">` : ""}
      <span>${escapeHtml$1(article.source)}</span>
    </div>
  </footer>
`;
  const baseTypography = `
  .reader-content p { margin: 0 0 1.5em; }
  .reader-content h2 { margin: 2em 0 0.75em; font-size: 1.5em; }
  .reader-content h3 { margin: 1.5em 0 0.5em; font-size: 1.25em; }
  .reader-content ul, .reader-content ol { margin: 0 0 1.5em; padding-left: 1.5em; }
  .reader-content li { margin: 0.25em 0; }
  .reader-content blockquote { 
    border-left: 3px solid #a78bfa; 
    padding-left: 1em; 
    margin: 1.5em 0; 
    font-style: italic; 
    color: #6b7280;
  }
  .reader-content img { 
    max-width: 100%; 
    height: auto; 
    border-radius: 8px; 
    margin: 1.5em 0; 
  }
  .reader-content a { color: #a78bfa; text-decoration: none; }
  .reader-content a:hover { text-decoration: underline; }
  .reader-content pre { 
    background: #1f2937; 
    color: #e5e7eb; 
    padding: 1em; 
    border-radius: 8px; 
    overflow-x: auto; 
    font-size: 0.9em;
    margin: 1.5em 0;
  }
  .reader-content code { 
    font-family: 'JetBrains Mono', 'Fira Code', monospace; 
    background: #f3f4f6; 
    padding: 2px 6px; 
    border-radius: 4px; 
    font-size: 0.9em;
  }
  .reader-content pre code { background: none; padding: 0; }
  
  .reader-meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; font-size: 0.9em; color: #6b7280; }
  .reader-meta-item { display: flex; align-items: center; gap: 4px; }
  .reader-meta-item::before { content: '·'; margin-right: 8px; }
  .reader-meta-item:first-child::before { display: none; }
  
  .reader-footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 0.85em; color: #9ca3af; }
  .reader-source { display: flex; align-items: center; justify-content: center; gap: 8px; }
  .reader-favicon { width: 16px; height: 16px; border-radius: 2px; }
  
  @media (prefers-color-scheme: dark) {
    .reader-content blockquote { color: #9ca3af; }
    .reader-content code { background: #374151; }
    .reader-footer { border-top-color: #374151; }
  }
`;
  const readerLayout = {
    id: "reader",
    name: "Reader",
    description: "Optimized for long-form articles with elegant typography",
    bestFor: ["articles", "essays", "blog posts", "newsletter"],
    columns: 1,
    maxWidth: "680px",
    fontFamily: 'Georgia, Charter, "Times New Roman", serif',
    fontSize: "19px",
    lineHeight: "1.75",
    render(article, container) {
      container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 48px 24px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1f2937;
        }
        .reader-header { margin-bottom: 40px; }
        .reader-title { 
          font-size: 2.25em; 
          font-weight: 700; 
          line-height: 1.2; 
          margin: 0 0 16px; 
          color: #111827; 
          letter-spacing: -0.02em;
        }
        .reader-content p:first-child::first-letter { 
          float: left; 
          font-size: 4em; 
          line-height: 0.8; 
          margin-right: 12px; 
          margin-top: 6px; 
          font-weight: 700; 
          color: #111827;
        }
        ${baseTypography}
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
          .reader-content p:first-child::first-letter { color: #f9fafb; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml$1(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const focusLayout = {
    id: "focus",
    name: "Focus",
    description: "Distraction-free reading with maximum concentration",
    bestFor: ["deep reading", "learning", "study material"],
    columns: 1,
    maxWidth: "600px",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: "18px",
    lineHeight: "1.8",
    render(article, container) {
      container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 80px 24px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #374151;
          background: #fafafa;
        }
        .reader-header { margin-bottom: 48px; text-align: center; }
        .reader-title { 
          font-size: 1.75em; 
          font-weight: 600; 
          line-height: 1.3; 
          margin: 0 0 20px; 
          color: #111827; 
        }
        .reader-meta { justify-content: center; font-size: 0.85em; color: #9ca3af; }
        .reader-content { color: #374151; }
        .reader-content p { margin-bottom: 1.75em; }
        ${baseTypography}
        .reader-footer { text-align: center; border: none; margin-top: 80px; }
        @media (prefers-color-scheme: dark) {
          .reader-container { background: #0a0a0a; color: #d1d5db; }
          .reader-title { color: #f3f4f6; }
          .reader-content { color: #d1d5db; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml$1(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const terminalLayout = {
    id: "terminal",
    name: "Terminal",
    description: "Hacker-style for code and technical content",
    bestFor: ["code", "documentation", "tutorials", "technical blogs"],
    columns: 1,
    maxWidth: "900px",
    fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", monospace',
    fontSize: "14px",
    lineHeight: "1.7",
    render(article, container) {
      container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 32px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #c9d1d9;
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 12px;
        }
        .reader-container::before { 
          content: '$ calmweb-reader'; 
          display: block; 
          color: #7ee787; 
          margin-bottom: 24px; 
          font-size: 12px;
          opacity: 0.8;
        }
        .reader-header { margin-bottom: 32px; padding-bottom: 16px; border-bottom: 1px solid #30363d; }
        .reader-title { 
          font-size: 1.5em; 
          font-weight: 600; 
          line-height: 1.3; 
          margin: 0 0 12px; 
          color: #58a6ff; 
        }
        .reader-meta { font-size: 0.85em; color: #8b949e; }
        .reader-meta-item::before { color: #58a6ff; }
        .reader-content { color: #c9d1d9; }
        .reader-content a { color: #58a6ff; }
        .reader-content code { background: #161b22; color: #7ee787; }
        .reader-content pre { background: #161b22; border: 1px solid #30363d; }
        .reader-content blockquote { border-left-color: #58a6ff; color: #8b949e; }
        ${baseTypography}
        .reader-footer { border-top-color: #30363d; color: #6e7681; }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml$1(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const compactLayout = {
    id: "compact",
    name: "Compact",
    description: "Dense layout for news and quick scanning",
    bestFor: ["news", "updates", "briefs", "quick reads"],
    columns: 2,
    maxWidth: "800px",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: "15px",
    lineHeight: "1.6",
    render(article, container) {
      container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 32px 24px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1f2937;
        }
        .reader-header { margin-bottom: 24px; }
        .reader-title { 
          font-size: 1.5em; 
          font-weight: 700; 
          line-height: 1.25; 
          margin: 0 0 8px; 
          color: #111827; 
        }
        .reader-meta { font-size: 0.8em; margin-bottom: 16px; }
        .reader-content { 
          column-count: 2; 
          column-gap: 32px; 
          column-rule: 1px solid #e5e7eb;
        }
        .reader-content p { margin-bottom: 1em; text-align: justify; }
        .reader-content h2, .reader-content h3, .reader-content blockquote, .reader-content pre { 
          column-span: all; 
        }
        ${baseTypography}
        .reader-footer { margin-top: 40px; }
        @media (max-width: 600px) {
          .reader-content { column-count: 1; }
        }
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
          .reader-content { column-rule-color: #374151; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml$1(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const visualLayout = {
    id: "visual",
    name: "Visual",
    description: "Image-forward layout for photo essays and visual stories",
    bestFor: ["photo essays", "travel", "lifestyle", "portfolio"],
    columns: 1,
    maxWidth: "840px",
    fontFamily: "Georgia, Charter, serif",
    fontSize: "18px",
    lineHeight: "1.75",
    render(article, container) {
      const heroImage = article.images[0];
      container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1f2937;
        }
        .reader-hero { 
          width: 100%; 
          height: 400px; 
          object-fit: cover; 
          margin-bottom: 40px;
        }
        .reader-hero-placeholder {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin-bottom: 40px;
        }
        .reader-inner { padding: 0 32px 48px; }
        .reader-header { margin-bottom: 32px; text-align: center; }
        .reader-title { 
          font-size: 2.5em; 
          font-weight: 400; 
          line-height: 1.2; 
          margin: 0 0 16px; 
          color: #111827; 
          letter-spacing: -0.02em;
        }
        .reader-meta { justify-content: center; }
        .reader-content { max-width: 640px; margin: 0 auto; }
        .reader-content img { 
          width: calc(100% + 100px); 
          max-width: none; 
          margin-left: -50px; 
          margin-right: -50px;
          border-radius: 12px;
        }
        ${baseTypography}
        .reader-footer { max-width: 640px; margin: 60px auto 0; }
        @media (max-width: 768px) {
          .reader-content img { width: 100%; margin-left: 0; margin-right: 0; }
        }
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
        }
      </style>
      <div class="reader-container">
        ${heroImage ? `<img class="reader-hero" src="${heroImage.src}" alt="${heroImage.alt || ""}">` : '<div class="reader-hero-placeholder"></div>'}
        <div class="reader-inner">
          <header class="reader-header">
            <h1 class="reader-title">${escapeHtml$1(article.title)}</h1>
            ${renderMeta(article)}
          </header>
          <article class="reader-content">${article.contentHtml.innerHTML}</article>
          ${renderFooter(article)}
        </div>
      </div>
    `;
    }
  };
  const academicLayout = {
    id: "academic",
    name: "Academic",
    description: "Formal two-column layout for papers and research",
    bestFor: ["papers", "research", "reports", "documentation"],
    columns: 2,
    maxWidth: "900px",
    fontFamily: '"Source Serif Pro", Georgia, "Times New Roman", serif',
    fontSize: "15px",
    lineHeight: "1.65",
    render(article, container) {
      container.innerHTML = `
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 40px 48px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1a1a1a;
          background: #fff;
        }
        .reader-header { 
          text-align: center; 
          margin-bottom: 40px; 
          padding-bottom: 24px; 
          border-bottom: 2px solid #1a1a1a;
        }
        .reader-title { 
          font-size: 1.75em; 
          font-weight: 700; 
          line-height: 1.3; 
          margin: 0 0 16px; 
          color: #000;
          text-transform: none;
          letter-spacing: 0;
        }
        .reader-meta { justify-content: center; font-size: 0.85em; color: #666; }
        .reader-meta-item.author { font-weight: 600; }
        .reader-content { 
          column-count: 2; 
          column-gap: 40px; 
          column-rule: 1px solid #ccc;
          text-align: justify;
          hyphens: auto;
        }
        .reader-content p { margin-bottom: 1em; text-indent: 1.5em; }
        .reader-content p:first-of-type { text-indent: 0; }
        .reader-content h2 { 
          column-span: all; 
          font-size: 1.25em; 
          margin: 1.5em 0 0.75em;
          padding-top: 0.5em;
          border-top: 1px solid #e5e5e5;
        }
        .reader-content h3 { column-span: all; font-size: 1.1em; margin: 1.25em 0 0.5em; }
        .reader-content blockquote { column-span: all; margin: 1em 0; font-size: 0.95em; }
        .reader-content pre { column-span: all; font-size: 0.85em; }
        .reader-content figure { column-span: all; margin: 1.5em 0; text-align: center; }
        .reader-content figcaption { font-size: 0.85em; color: #666; margin-top: 0.5em; }
        ${baseTypography}
        .reader-footer { 
          margin-top: 48px; 
          padding-top: 16px; 
          border-top: 1px solid #e5e5e5;
          column-span: all;
        }
        @media (max-width: 700px) {
          .reader-content { column-count: 1; }
        }
        @media (prefers-color-scheme: dark) {
          .reader-container { background: #0a0a0a; color: #d4d4d4; }
          .reader-header { border-bottom-color: #404040; }
          .reader-title { color: #f5f5f5; }
          .reader-content h2 { border-top-color: #333; }
          .reader-content { column-rule-color: #333; }
          .reader-footer { border-top-color: #333; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${escapeHtml$1(article.title)}</h1>
          ${renderMeta(article)}
        </header>
        <article class="reader-content">${article.contentHtml.innerHTML}</article>
        ${renderFooter(article)}
      </div>
    `;
    }
  };
  const allLayouts = [
    readerLayout,
    focusLayout,
    terminalLayout,
    compactLayout,
    visualLayout,
    academicLayout
  ];
  function getLayout(id) {
    return allLayouts.find((l) => l.id === id) || readerLayout;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uL3NyYy9yZW5kZXJlci9leHRyYWN0b3IvYXJ0aWNsZS50cyIsIi4uLy4uL3NyYy9yZW5kZXJlci9sYXlvdXRzL2luZGV4LnRzIiwiLi4vLi4vc3JjL3JlbmRlcmVyL3RoZW1lcy9pbmRleC50cyIsIi4uLy4uL3NyYy9yZW5kZXJlci9yZWFkZXIudHMiLCIuLi8uLi9lbnRyeXBvaW50cy9yZWFkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIHNyYy91dGlscy9kZWZpbmUtY29udGVudC1zY3JpcHQudHNcbmZ1bmN0aW9uIGRlZmluZUNvbnRlbnRTY3JpcHQoZGVmaW5pdGlvbikge1xuXHRyZXR1cm4gZGVmaW5pdGlvbjtcbn1cblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBkZWZpbmVDb250ZW50U2NyaXB0IH07IiwiLyoqXG4gKiBBcnRpY2xlIEV4dHJhY3RvciBmb3IgQ2FsbVdlYiBTdXBlciBSZWFkZXJcbiAqXG4gKiBFeHRyYWN0cyBjbGVhbiBhcnRpY2xlIGNvbnRlbnQgZnJvbSBhbnkgd2VicGFnZS5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJhY3RlZEFydGljbGUge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I/OiBzdHJpbmc7XG4gIGRhdGU/OiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgY29udGVudEh0bWw6IEhUTUxFbGVtZW50O1xuICBpbWFnZXM6IEFycmF5PHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xuICB9PjtcbiAgc291cmNlOiBzdHJpbmc7XG4gIGZhdmljb24/OiBzdHJpbmc7XG4gIHJlYWRpbmdUaW1lOiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xufVxuXG5jb25zdCBSRU1PVkVfU0VMRUNUT1JTID0gW1xuICAnbmF2JywgJ2FzaWRlJywgJ2Zvb3RlcicsICdoZWFkZXI6bm90KGFydGljbGUgaGVhZGVyKScsXG4gICcuYWQnLCAnLmFkdmVydGlzZW1lbnQnLCAnLmFkcycsICcuYWQtY29udGFpbmVyJyxcbiAgJy5zaWRlYmFyJywgJy5yZWxhdGVkJywgJy5yZWNvbW1lbmRlZCcsICcuc3VnZ2VzdGlvbnMnLFxuICAnLnNvY2lhbC1zaGFyZScsICcuc2hhcmUtYnV0dG9ucycsICcuc29jaWFsLWxpbmtzJyxcbiAgJy5jb21tZW50cycsICcjY29tbWVudHMnLCAnLmNvbW1lbnQtc2VjdGlvbicsXG4gICdzY3JpcHQnLCAnc3R5bGUnLCAnbm9zY3JpcHQnLCAnaWZyYW1lJyxcbiAgJ1tjbGFzcyo9XCJuZXdzbGV0dGVyXCJdJywgJ1tjbGFzcyo9XCJzdWJzY3JpYmVcIl0nLFxuICAnW2NsYXNzKj1cInBvcHVwXCJdJywgJ1tjbGFzcyo9XCJtb2RhbFwiXScsXG4gICcuYXV0aG9yLWJpbycsICcuYXV0aG9yLWluZm8nLCAnLmFib3V0LWF1dGhvcicsXG4gICcudGFncycsICcudGFnLWxpc3QnLCAnLmNhdGVnb3JpZXMnLFxuICAnLmJyZWFkY3J1bWInLCAnLmJyZWFkY3J1bWJzJyxcbiAgJy5wYWdpbmF0aW9uJywgJy5wYWdlcicsXG4gICcuY29va2llLW5vdGljZScsICcuZ2RwcicsXG5dO1xuXG5jb25zdCBDT05URU5UX1NFTEVDVE9SUyA9IFtcbiAgJ2FydGljbGUnLFxuICAnW3JvbGU9XCJhcnRpY2xlXCJdJyxcbiAgJ21haW4gYXJ0aWNsZScsXG4gICcucG9zdC1jb250ZW50JyxcbiAgJy5hcnRpY2xlLWNvbnRlbnQnLFxuICAnLmVudHJ5LWNvbnRlbnQnLFxuICAnLnBvc3QtYm9keScsXG4gICcuYXJ0aWNsZS1ib2R5JyxcbiAgJy5jb250ZW50LWJvZHknLFxuICAnbWFpbicsXG4gICdbcm9sZT1cIm1haW5cIl0nLFxuICAnI2NvbnRlbnQnLFxuICAnLmNvbnRlbnQnLFxuXTtcblxuY29uc3QgVElUTEVfU0VMRUNUT1JTID0gW1xuICAnYXJ0aWNsZSBoMScsXG4gICdoMVtpdGVtcHJvcD1cImhlYWRsaW5lXCJdJyxcbiAgJ1twcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJyxcbiAgJ21ldGFbbmFtZT1cInR3aXR0ZXI6dGl0bGVcIl0nLFxuICAnaDEnLFxuICAnLnBvc3QtdGl0bGUnLFxuICAnLmFydGljbGUtdGl0bGUnLFxuICAnLmVudHJ5LXRpdGxlJyxcbl07XG5cbmNvbnN0IEFVVEhPUl9TRUxFQ1RPUlMgPSBbXG4gICdbcmVsPVwiYXV0aG9yXCJdJyxcbiAgJ1tpdGVtcHJvcD1cImF1dGhvclwiXScsXG4gICcuYXV0aG9yLW5hbWUnLFxuICAnLmJ5bGluZScsXG4gICcuYXV0aG9yJyxcbiAgJ21ldGFbbmFtZT1cImF1dGhvclwiXScsXG5dO1xuXG5jb25zdCBEQVRFX1NFTEVDVE9SUyA9IFtcbiAgJ3RpbWUnLFxuICAnW2l0ZW1wcm9wPVwiZGF0ZVB1Ymxpc2hlZFwiXScsXG4gICdbZGF0ZXRpbWVdJyxcbiAgJy5wb3N0LWRhdGUnLFxuICAnLmFydGljbGUtZGF0ZScsXG4gICcucHVibGlzaC1kYXRlJyxcbiAgJ21ldGFbbmFtZT1cImRhdGVcIl0nLFxuICAnW3Byb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiXScsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEFydGljbGUoZG9jOiBEb2N1bWVudCwgdXJsOiBzdHJpbmcpOiBFeHRyYWN0ZWRBcnRpY2xlIHtcbiAgY29uc3QgdGl0bGUgPSBleHRyYWN0VGl0bGUoZG9jKTtcbiAgY29uc3QgYXV0aG9yID0gZXh0cmFjdEF1dGhvcihkb2MpO1xuICBjb25zdCBkYXRlID0gZXh0cmFjdERhdGUoZG9jKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBmaW5kTWFpbkNvbnRlbnQoZG9jKTtcbiAgY29uc3QgY2xlYW5lZENvbnRlbnQgPSBjbGVhbkNvbnRlbnQobWFpbkNvbnRlbnQpO1xuICBjb25zdCBpbWFnZXMgPSBleHRyYWN0SW1hZ2VzKGNsZWFuZWRDb250ZW50KTtcbiAgY29uc3QgZmF2aWNvbiA9IGV4dHJhY3RGYXZpY29uKGRvYyk7XG4gIGNvbnN0IHJlYWRpbmdUaW1lID0gY2FsY3VsYXRlUmVhZGluZ1RpbWUoY2xlYW5lZENvbnRlbnQudGV4dENvbnRlbnQgfHwgJycpO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgYXV0aG9yLFxuICAgIGRhdGUsXG4gICAgY29udGVudDogY2xlYW5lZENvbnRlbnQudGV4dENvbnRlbnQgfHwgJycsXG4gICAgY29udGVudEh0bWw6IGNsZWFuZWRDb250ZW50LFxuICAgIGltYWdlcyxcbiAgICBzb3VyY2U6IG5ldyBVUkwodXJsKS5ob3N0bmFtZSxcbiAgICBmYXZpY29uLFxuICAgIHJlYWRpbmdUaW1lLFxuICAgIHVybCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFRpdGxlKGRvYzogRG9jdW1lbnQpOiBzdHJpbmcge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFRJVExFX1NFTEVDVE9SUykge1xuICAgIGNvbnN0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbCkge1xuICAgICAgY29uc3QgdGl0bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSB8fCBlbC50ZXh0Q29udGVudD8udHJpbSgpO1xuICAgICAgaWYgKHRpdGxlICYmIHRpdGxlLmxlbmd0aCA+IDUgJiYgdGl0bGUubGVuZ3RoIDwgMzAwKSB7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRvYy50aXRsZSB8fCAnVW50aXRsZWQnO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0QXV0aG9yKGRvYzogRG9jdW1lbnQpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIEFVVEhPUl9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IGF1dGhvciA9IGVsLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIHx8IGVsLnRleHRDb250ZW50Py50cmltKCk7XG4gICAgICBpZiAoYXV0aG9yICYmIGF1dGhvci5sZW5ndGggPCAxMDApIHtcbiAgICAgICAgcmV0dXJuIGF1dGhvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdERhdGUoZG9jOiBEb2N1bWVudCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgREFURV9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IGRhdGVBdHRyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRldGltZScpIHx8IGVsLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgY29uc3QgZGF0ZVRleHQgPSBkYXRlQXR0ciB8fCBlbC50ZXh0Q29udGVudD8udHJpbSgpO1xuICAgICAgaWYgKGRhdGVUZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoZGF0ZVRleHQpO1xuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZE1haW5Db250ZW50KGRvYzogRG9jdW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgQ09OVEVOVF9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwgJiYgZWwudGV4dENvbnRlbnQgJiYgZWwudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCA+IDIwMCkge1xuICAgICAgcmV0dXJuIGVsIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnZGl2LCBzZWN0aW9uLCBtYWluJyk7XG4gIGxldCBiZXN0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBsZXQgYmVzdFNjb3JlID0gMDtcblxuICBjYW5kaWRhdGVzLmZvckVhY2goKGNhbmRpZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBjYW5kaWRhdGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dExlbmd0aCA9IGh0bWwudGV4dENvbnRlbnQ/Lmxlbmd0aCB8fCAwO1xuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKS5sZW5ndGg7XG4gICAgY29uc3Qgc2NvcmUgPSB0ZXh0TGVuZ3RoICsgKHBhcmFncmFwaHMgKiAxMDApO1xuXG4gICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgIGJlc3QgPSBodG1sO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGJlc3QgfHwgZG9jLmJvZHk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ29udGVudChlbDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuXG4gIFJFTU9WRV9TRUxFQ1RPUlMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKChlbCkgPT4gZWwucmVtb3ZlKCkpO1xuICB9KTtcblxuICBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaCgoYSkgPT4ge1xuICAgIGNvbnN0IGhyZWYgPSBhLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmIChocmVmICYmICFocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSAmJiAhaHJlZi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgfVxuICB9KTtcblxuICBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBodG1sID0gZWwgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29uY2xpY2snKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW92ZXInKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW91dCcpO1xuICB9KTtcblxuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJbWFnZXMoY29udGVudDogSFRNTEVsZW1lbnQpOiBBcnJheTx7IHNyYzogc3RyaW5nOyBhbHQ6IHN0cmluZzsgY2FwdGlvbj86IHN0cmluZyB9PiB7XG4gIGNvbnN0IGltYWdlczogQXJyYXk8eyBzcmM6IHN0cmluZzsgYWx0OiBzdHJpbmc7IGNhcHRpb24/OiBzdHJpbmcgfT4gPSBbXTtcblxuICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmZvckVhY2goKGltZykgPT4ge1xuICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8IGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgaWYgKHNyYyAmJiAhc3JjLmluY2x1ZGVzKCdhdmF0YXInKSAmJiAhc3JjLmluY2x1ZGVzKCdpY29uJykgJiYgIXNyYy5pbmNsdWRlcygnbG9nbycpKSB7XG4gICAgICBjb25zdCBhbHQgPSBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKSB8fCAnJztcbiAgICAgIGNvbnN0IGZpZ3VyZSA9IGltZy5jbG9zZXN0KCdmaWd1cmUnKTtcbiAgICAgIGNvbnN0IGNhcHRpb24gPSBmaWd1cmU/LnF1ZXJ5U2VsZWN0b3IoJ2ZpZ2NhcHRpb24nKT8udGV4dENvbnRlbnQ/LnRyaW0oKTtcblxuICAgICAgaW1hZ2VzLnB1c2goeyBzcmMsIGFsdCwgY2FwdGlvbiB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbWFnZXMuc2xpY2UoMCwgMjApO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RmF2aWNvbihkb2M6IERvY3VtZW50KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgaWNvbiA9IGRvYy5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImljb25cIl0sIGxpbmtbcmVsPVwic2hvcnRjdXQgaWNvblwiXScpO1xuICBjb25zdCBocmVmID0gaWNvbj8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIFxuICBpZiAoaHJlZikge1xuICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoJy8vJykpIHJldHVybiAnaHR0cHM6JyArIGhyZWY7XG4gICAgaWYgKGhyZWYuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCBvcmlnaW4gPSBkb2MubG9jYXRpb24/Lm9yaWdpbiB8fCAnaHR0cHM6Ly9leGFtcGxlLmNvbSc7XG4gICAgICByZXR1cm4gb3JpZ2luICsgaHJlZjtcbiAgICB9XG4gICAgcmV0dXJuIGhyZWY7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSZWFkaW5nVGltZSh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB3b3Jkc1Blck1pbnV0ZSA9IDIwMDtcbiAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KC9cXHMrLykubGVuZ3RoO1xuICByZXR1cm4gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHdvcmRzIC8gd29yZHNQZXJNaW51dGUpKTtcbn0iLCIvKipcbiAqIExheW91dCBFbmdpbmUgZm9yIENhbG1XZWIgU3VwZXIgUmVhZGVyXG4gKiBcbiAqIDYgbGF5b3V0cyBjb3ZlcmluZyBhbGwgbWFqb3IgcmVhZGluZyB1c2UgY2FzZXM6XG4gKiAtIFJlYWRlcjogTG9uZy1mb3JtIGFydGljbGVzXG4gKiAtIEZvY3VzOiBEaXN0cmFjdGlvbi1mcmVlIGRlZXAgcmVhZGluZyAgXG4gKiAtIFRlcm1pbmFsOiBDb2RlIGFuZCB0ZWNobmljYWwgY29udGVudFxuICogLSBDb21wYWN0OiBOZXdzIGFuZCBxdWljayByZWFkc1xuICogLSBWaXN1YWw6IFBob3RvIGVzc2F5cyBhbmQgaW1hZ2UtcmljaCBjb250ZW50XG4gKiAtIEFjYWRlbWljOiBQYXBlcnMgYW5kIHJlc2VhcmNoXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBFeHRyYWN0ZWRBcnRpY2xlIH0gZnJvbSAnLi4vZXh0cmFjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBSZWFkZXJMYXlvdXQge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGJlc3RGb3I6IHN0cmluZ1tdO1xuICBjb2x1bW5zOiBudW1iZXI7XG4gIG1heFdpZHRoOiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgZm9udFNpemU6IHN0cmluZztcbiAgbGluZUhlaWdodDogc3RyaW5nO1xuICByZW5kZXI6IChhcnRpY2xlOiBFeHRyYWN0ZWRBcnRpY2xlLCBjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gc3Bhbi5pbm5lckhUTUw7XG59XG5cbmNvbnN0IHJlbmRlck1ldGEgPSAoYXJ0aWNsZTogRXh0cmFjdGVkQXJ0aWNsZSk6IHN0cmluZyA9PiBgXG4gIDxkaXYgY2xhc3M9XCJyZWFkZXItbWV0YVwiPlxuICAgICR7YXJ0aWNsZS5hdXRob3IgPyBgPHNwYW4gY2xhc3M9XCJyZWFkZXItbWV0YS1pdGVtIGF1dGhvclwiPiR7ZXNjYXBlSHRtbChhcnRpY2xlLmF1dGhvcil9PC9zcGFuPmAgOiAnJ31cbiAgICAke2FydGljbGUuZGF0ZSA/IGA8c3BhbiBjbGFzcz1cInJlYWRlci1tZXRhLWl0ZW0gZGF0ZVwiPiR7YXJ0aWNsZS5kYXRlfTwvc3Bhbj5gIDogJyd9XG4gICAgPHNwYW4gY2xhc3M9XCJyZWFkZXItbWV0YS1pdGVtIHRpbWVcIj4ke2FydGljbGUucmVhZGluZ1RpbWV9IG1pbiByZWFkPC9zcGFuPlxuICA8L2Rpdj5cbmA7XG5cbmNvbnN0IHJlbmRlckZvb3RlciA9IChhcnRpY2xlOiBFeHRyYWN0ZWRBcnRpY2xlKTogc3RyaW5nID0+IGBcbiAgPGZvb3RlciBjbGFzcz1cInJlYWRlci1mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVhZGVyLXNvdXJjZVwiPlxuICAgICAgJHthcnRpY2xlLmZhdmljb24gPyBgPGltZyBjbGFzcz1cInJlYWRlci1mYXZpY29uXCIgc3JjPVwiJHtlc2NhcGVIdG1sKGFydGljbGUuZmF2aWNvbil9XCIgYWx0PVwiXCI+YCA6ICcnfVxuICAgICAgPHNwYW4+JHtlc2NhcGVIdG1sKGFydGljbGUuc291cmNlKX08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuYDtcblxuY29uc3QgYmFzZVR5cG9ncmFwaHkgPSBgXG4gIC5yZWFkZXItY29udGVudCBwIHsgbWFyZ2luOiAwIDAgMS41ZW07IH1cbiAgLnJlYWRlci1jb250ZW50IGgyIHsgbWFyZ2luOiAyZW0gMCAwLjc1ZW07IGZvbnQtc2l6ZTogMS41ZW07IH1cbiAgLnJlYWRlci1jb250ZW50IGgzIHsgbWFyZ2luOiAxLjVlbSAwIDAuNWVtOyBmb250LXNpemU6IDEuMjVlbTsgfVxuICAucmVhZGVyLWNvbnRlbnQgdWwsIC5yZWFkZXItY29udGVudCBvbCB7IG1hcmdpbjogMCAwIDEuNWVtOyBwYWRkaW5nLWxlZnQ6IDEuNWVtOyB9XG4gIC5yZWFkZXItY29udGVudCBsaSB7IG1hcmdpbjogMC4yNWVtIDA7IH1cbiAgLnJlYWRlci1jb250ZW50IGJsb2NrcXVvdGUgeyBcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNhNzhiZmE7IFxuICAgIHBhZGRpbmctbGVmdDogMWVtOyBcbiAgICBtYXJnaW46IDEuNWVtIDA7IFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgXG4gICAgY29sb3I6ICM2YjcyODA7XG4gIH1cbiAgLnJlYWRlci1jb250ZW50IGltZyB7IFxuICAgIG1heC13aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiBhdXRvOyBcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7IFxuICAgIG1hcmdpbjogMS41ZW0gMDsgXG4gIH1cbiAgLnJlYWRlci1jb250ZW50IGEgeyBjb2xvcjogI2E3OGJmYTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIC5yZWFkZXItY29udGVudCBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbiAgLnJlYWRlci1jb250ZW50IHByZSB7IFxuICAgIGJhY2tncm91bmQ6ICMxZjI5Mzc7IFxuICAgIGNvbG9yOiAjZTVlN2ViOyBcbiAgICBwYWRkaW5nOiAxZW07IFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgXG4gICAgb3ZlcmZsb3cteDogYXV0bzsgXG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBtYXJnaW46IDEuNWVtIDA7XG4gIH1cbiAgLnJlYWRlci1jb250ZW50IGNvZGUgeyBcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZTsgXG4gICAgYmFja2dyb3VuZDogI2YzZjRmNjsgXG4gICAgcGFkZGluZzogMnB4IDZweDsgXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyBcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG4gIC5yZWFkZXItY29udGVudCBwcmUgY29kZSB7IGJhY2tncm91bmQ6IG5vbmU7IHBhZGRpbmc6IDA7IH1cbiAgXG4gIC5yZWFkZXItbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgZmxleC13cmFwOiB3cmFwOyBmb250LXNpemU6IDAuOWVtOyBjb2xvcjogIzZiNzI4MDsgfVxuICAucmVhZGVyLW1ldGEtaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyB9XG4gIC5yZWFkZXItbWV0YS1pdGVtOjpiZWZvcmUgeyBjb250ZW50OiAnwrcnOyBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuICAucmVhZGVyLW1ldGEtaXRlbTpmaXJzdC1jaGlsZDo6YmVmb3JlIHsgZGlzcGxheTogbm9uZTsgfVxuICBcbiAgLnJlYWRlci1mb290ZXIgeyBtYXJnaW4tdG9wOiA2MHB4OyBwYWRkaW5nLXRvcDogMjBweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7IGZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogIzljYTNhZjsgfVxuICAucmVhZGVyLXNvdXJjZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDhweDsgfVxuICAucmVhZGVyLWZhdmljb24geyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyBib3JkZXItcmFkaXVzOiAycHg7IH1cbiAgXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAucmVhZGVyLWNvbnRlbnQgYmxvY2txdW90ZSB7IGNvbG9yOiAjOWNhM2FmOyB9XG4gICAgLnJlYWRlci1jb250ZW50IGNvZGUgeyBiYWNrZ3JvdW5kOiAjMzc0MTUxOyB9XG4gICAgLnJlYWRlci1mb290ZXIgeyBib3JkZXItdG9wLWNvbG9yOiAjMzc0MTUxOyB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCByZWFkZXJMYXlvdXQ6IFJlYWRlckxheW91dCA9IHtcbiAgaWQ6ICdyZWFkZXInLFxuICBuYW1lOiAnUmVhZGVyJyxcbiAgZGVzY3JpcHRpb246ICdPcHRpbWl6ZWQgZm9yIGxvbmctZm9ybSBhcnRpY2xlcyB3aXRoIGVsZWdhbnQgdHlwb2dyYXBoeScsXG4gIGJlc3RGb3I6IFsnYXJ0aWNsZXMnLCAnZXNzYXlzJywgJ2Jsb2cgcG9zdHMnLCAnbmV3c2xldHRlciddLFxuICBjb2x1bW5zOiAxLFxuICBtYXhXaWR0aDogJzY4MHB4JyxcbiAgZm9udEZhbWlseTogJ0dlb3JnaWEsIENoYXJ0ZXIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmJyxcbiAgZm9udFNpemU6ICcxOXB4JyxcbiAgbGluZUhlaWdodDogJzEuNzUnLFxuICByZW5kZXIoYXJ0aWNsZSwgY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLnJlYWRlci1jb250YWluZXIgeyBcbiAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5tYXhXaWR0aH07IFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgICAgICBwYWRkaW5nOiA0OHB4IDI0cHg7IFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoaXMuZm9udEZhbWlseX07IFxuICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGlzLmZvbnRTaXplfTsgXG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhpcy5saW5lSGVpZ2h0fTsgXG4gICAgICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1oZWFkZXIgeyBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG4gICAgICAgIC5yZWFkZXItdGl0bGUgeyBcbiAgICAgICAgICBmb250LXNpemU6IDIuMjVlbTsgXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjsgXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTZweDsgXG4gICAgICAgICAgY29sb3I6ICMxMTE4Mjc7IFxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCBwOmZpcnN0LWNoaWxkOjpmaXJzdC1sZXR0ZXIgeyBcbiAgICAgICAgICBmbG9hdDogbGVmdDsgXG4gICAgICAgICAgZm9udC1zaXplOiA0ZW07IFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7IFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDsgXG4gICAgICAgICAgbWFyZ2luLXRvcDogNnB4OyBcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyBcbiAgICAgICAgICBjb2xvcjogIzExMTgyNztcbiAgICAgICAgfVxuICAgICAgICAke2Jhc2VUeXBvZ3JhcGh5fVxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgLnJlYWRlci1jb250YWluZXIgeyBjb2xvcjogI2U1ZTdlYjsgfVxuICAgICAgICAgIC5yZWFkZXItdGl0bGUgeyBjb2xvcjogI2Y5ZmFmYjsgfVxuICAgICAgICAgIC5yZWFkZXItY29udGVudCBwOmZpcnN0LWNoaWxkOjpmaXJzdC1sZXR0ZXIgeyBjb2xvcjogI2Y5ZmFmYjsgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cInJlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInJlYWRlci1oZWFkZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJyZWFkZXItdGl0bGVcIj4ke2VzY2FwZUh0bWwoYXJ0aWNsZS50aXRsZSl9PC9oMT5cbiAgICAgICAgICAke3JlbmRlck1ldGEoYXJ0aWNsZSl9XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlYWRlci1jb250ZW50XCI+JHthcnRpY2xlLmNvbnRlbnRIdG1sLmlubmVySFRNTH08L2FydGljbGU+XG4gICAgICAgICR7cmVuZGVyRm9vdGVyKGFydGljbGUpfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb2N1c0xheW91dDogUmVhZGVyTGF5b3V0ID0ge1xuICBpZDogJ2ZvY3VzJyxcbiAgbmFtZTogJ0ZvY3VzJyxcbiAgZGVzY3JpcHRpb246ICdEaXN0cmFjdGlvbi1mcmVlIHJlYWRpbmcgd2l0aCBtYXhpbXVtIGNvbmNlbnRyYXRpb24nLFxuICBiZXN0Rm9yOiBbJ2RlZXAgcmVhZGluZycsICdsZWFybmluZycsICdzdHVkeSBtYXRlcmlhbCddLFxuICBjb2x1bW5zOiAxLFxuICBtYXhXaWR0aDogJzYwMHB4JyxcbiAgZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWYnLFxuICBmb250U2l6ZTogJzE4cHgnLFxuICBsaW5lSGVpZ2h0OiAnMS44JyxcbiAgcmVuZGVyKGFydGljbGUsIGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5yZWFkZXItY29udGFpbmVyIHsgXG4gICAgICAgICAgbWF4LXdpZHRoOiAke3RoaXMubWF4V2lkdGh9OyBcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgICAgICAgcGFkZGluZzogODBweCAyNHB4OyBcbiAgICAgICAgICBmb250LWZhbWlseTogJHt0aGlzLmZvbnRGYW1pbHl9OyBcbiAgICAgICAgICBmb250LXNpemU6ICR7dGhpcy5mb250U2l6ZX07IFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke3RoaXMubGluZUhlaWdodH07IFxuICAgICAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1oZWFkZXIgeyBtYXJnaW4tYm90dG9tOiA0OHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgICAgLnJlYWRlci10aXRsZSB7IFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43NWVtOyBcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwOyBcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zOyBcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4OyBcbiAgICAgICAgICBjb2xvcjogIzExMTgyNzsgXG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1tZXRhIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogIzljYTNhZjsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgeyBjb2xvcjogIzM3NDE1MTsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgcCB7IG1hcmdpbi1ib3R0b206IDEuNzVlbTsgfVxuICAgICAgICAke2Jhc2VUeXBvZ3JhcGh5fVxuICAgICAgICAucmVhZGVyLWZvb3RlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyOiBub25lOyBtYXJnaW4tdG9wOiA4MHB4OyB9XG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAucmVhZGVyLWNvbnRhaW5lciB7IGJhY2tncm91bmQ6ICMwYTBhMGE7IGNvbG9yOiAjZDFkNWRiOyB9XG4gICAgICAgICAgLnJlYWRlci10aXRsZSB7IGNvbG9yOiAjZjNmNGY2OyB9XG4gICAgICAgICAgLnJlYWRlci1jb250ZW50IHsgY29sb3I6ICNkMWQ1ZGI7IH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyZWFkZXItaGVhZGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwicmVhZGVyLXRpdGxlXCI+JHtlc2NhcGVIdG1sKGFydGljbGUudGl0bGUpfTwvaDE+XG4gICAgICAgICAgJHtyZW5kZXJNZXRhKGFydGljbGUpfVxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWFkZXItY29udGVudFwiPiR7YXJ0aWNsZS5jb250ZW50SHRtbC5pbm5lckhUTUx9PC9hcnRpY2xlPlxuICAgICAgICAke3JlbmRlckZvb3RlcihhcnRpY2xlKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdGVybWluYWxMYXlvdXQ6IFJlYWRlckxheW91dCA9IHtcbiAgaWQ6ICd0ZXJtaW5hbCcsXG4gIG5hbWU6ICdUZXJtaW5hbCcsXG4gIGRlc2NyaXB0aW9uOiAnSGFja2VyLXN0eWxlIGZvciBjb2RlIGFuZCB0ZWNobmljYWwgY29udGVudCcsXG4gIGJlc3RGb3I6IFsnY29kZScsICdkb2N1bWVudGF0aW9uJywgJ3R1dG9yaWFscycsICd0ZWNobmljYWwgYmxvZ3MnXSxcbiAgY29sdW1uczogMSxcbiAgbWF4V2lkdGg6ICc5MDBweCcsXG4gIGZvbnRGYW1pbHk6ICdcIkpldEJyYWlucyBNb25vXCIsIFwiRmlyYSBDb2RlXCIsIFwiU0YgTW9ub1wiLCBtb25vc3BhY2UnLFxuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMS43JyxcbiAgcmVuZGVyKGFydGljbGUsIGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5yZWFkZXItY29udGFpbmVyIHsgXG4gICAgICAgICAgbWF4LXdpZHRoOiAke3RoaXMubWF4V2lkdGh9OyBcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgICAgICAgcGFkZGluZzogMzJweDsgXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhpcy5mb250RmFtaWx5fTsgXG4gICAgICAgICAgZm9udC1zaXplOiAke3RoaXMuZm9udFNpemV9OyBcbiAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGlzLmxpbmVIZWlnaHR9OyBcbiAgICAgICAgICBjb2xvcjogI2M5ZDFkOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGQxMTE3O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDM2M2Q7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLWNvbnRhaW5lcjo6YmVmb3JlIHsgXG4gICAgICAgICAgY29udGVudDogJyQgY2FsbXdlYi1yZWFkZXInOyBcbiAgICAgICAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgY29sb3I6ICM3ZWU3ODc7IFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7IFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1oZWFkZXIgeyBtYXJnaW4tYm90dG9tOiAzMnB4OyBwYWRkaW5nLWJvdHRvbTogMTZweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMDM2M2Q7IH1cbiAgICAgICAgLnJlYWRlci10aXRsZSB7IFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07IFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7IFxuICAgICAgICAgIG1hcmdpbjogMCAwIDEycHg7IFxuICAgICAgICAgIGNvbG9yOiAjNThhNmZmOyBcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLW1ldGEgeyBmb250LXNpemU6IDAuODVlbTsgY29sb3I6ICM4Yjk0OWU7IH1cbiAgICAgICAgLnJlYWRlci1tZXRhLWl0ZW06OmJlZm9yZSB7IGNvbG9yOiAjNThhNmZmOyB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCB7IGNvbG9yOiAjYzlkMWQ5OyB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCBhIHsgY29sb3I6ICM1OGE2ZmY7IH1cbiAgICAgICAgLnJlYWRlci1jb250ZW50IGNvZGUgeyBiYWNrZ3JvdW5kOiAjMTYxYjIyOyBjb2xvcjogIzdlZTc4NzsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgcHJlIHsgYmFja2dyb3VuZDogIzE2MWIyMjsgYm9yZGVyOiAxcHggc29saWQgIzMwMzYzZDsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgYmxvY2txdW90ZSB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjNThhNmZmOyBjb2xvcjogIzhiOTQ5ZTsgfVxuICAgICAgICAke2Jhc2VUeXBvZ3JhcGh5fVxuICAgICAgICAucmVhZGVyLWZvb3RlciB7IGJvcmRlci10b3AtY29sb3I6ICMzMDM2M2Q7IGNvbG9yOiAjNmU3NjgxOyB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cInJlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInJlYWRlci1oZWFkZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJyZWFkZXItdGl0bGVcIj4ke2VzY2FwZUh0bWwoYXJ0aWNsZS50aXRsZSl9PC9oMT5cbiAgICAgICAgICAke3JlbmRlck1ldGEoYXJ0aWNsZSl9XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlYWRlci1jb250ZW50XCI+JHthcnRpY2xlLmNvbnRlbnRIdG1sLmlubmVySFRNTH08L2FydGljbGU+XG4gICAgICAgICR7cmVuZGVyRm9vdGVyKGFydGljbGUpfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wYWN0TGF5b3V0OiBSZWFkZXJMYXlvdXQgPSB7XG4gIGlkOiAnY29tcGFjdCcsXG4gIG5hbWU6ICdDb21wYWN0JyxcbiAgZGVzY3JpcHRpb246ICdEZW5zZSBsYXlvdXQgZm9yIG5ld3MgYW5kIHF1aWNrIHNjYW5uaW5nJyxcbiAgYmVzdEZvcjogWyduZXdzJywgJ3VwZGF0ZXMnLCAnYnJpZWZzJywgJ3F1aWNrIHJlYWRzJ10sXG4gIGNvbHVtbnM6IDIsXG4gIG1heFdpZHRoOiAnODAwcHgnLFxuICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZicsXG4gIGZvbnRTaXplOiAnMTVweCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjYnLFxuICByZW5kZXIoYXJ0aWNsZSwgY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLnJlYWRlci1jb250YWluZXIgeyBcbiAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5tYXhXaWR0aH07IFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7IFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoaXMuZm9udEZhbWlseX07IFxuICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGlzLmZvbnRTaXplfTsgXG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhpcy5saW5lSGVpZ2h0fTsgXG4gICAgICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1oZWFkZXIgeyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG4gICAgICAgIC5yZWFkZXItdGl0bGUgeyBcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtOyBcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyBcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTsgXG4gICAgICAgICAgbWFyZ2luOiAwIDAgOHB4OyBcbiAgICAgICAgICBjb2xvcjogIzExMTgyNzsgXG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1tZXRhIHsgZm9udC1zaXplOiAwLjhlbTsgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgeyBcbiAgICAgICAgICBjb2x1bW4tY291bnQ6IDI7IFxuICAgICAgICAgIGNvbHVtbi1nYXA6IDMycHg7IFxuICAgICAgICAgIGNvbHVtbi1ydWxlOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgcCB7IG1hcmdpbi1ib3R0b206IDFlbTsgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgaDIsIC5yZWFkZXItY29udGVudCBoMywgLnJlYWRlci1jb250ZW50IGJsb2NrcXVvdGUsIC5yZWFkZXItY29udGVudCBwcmUgeyBcbiAgICAgICAgICBjb2x1bW4tc3BhbjogYWxsOyBcbiAgICAgICAgfVxuICAgICAgICAke2Jhc2VUeXBvZ3JhcGh5fVxuICAgICAgICAucmVhZGVyLWZvb3RlciB7IG1hcmdpbi10b3A6IDQwcHg7IH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLnJlYWRlci1jb250ZW50IHsgY29sdW1uLWNvdW50OiAxOyB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgICAgIC5yZWFkZXItY29udGFpbmVyIHsgY29sb3I6ICNlNWU3ZWI7IH1cbiAgICAgICAgICAucmVhZGVyLXRpdGxlIHsgY29sb3I6ICNmOWZhZmI7IH1cbiAgICAgICAgICAucmVhZGVyLWNvbnRlbnQgeyBjb2x1bW4tcnVsZS1jb2xvcjogIzM3NDE1MTsgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cInJlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInJlYWRlci1oZWFkZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJyZWFkZXItdGl0bGVcIj4ke2VzY2FwZUh0bWwoYXJ0aWNsZS50aXRsZSl9PC9oMT5cbiAgICAgICAgICAke3JlbmRlck1ldGEoYXJ0aWNsZSl9XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlYWRlci1jb250ZW50XCI+JHthcnRpY2xlLmNvbnRlbnRIdG1sLmlubmVySFRNTH08L2FydGljbGU+XG4gICAgICAgICR7cmVuZGVyRm9vdGVyKGFydGljbGUpfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCB2aXN1YWxMYXlvdXQ6IFJlYWRlckxheW91dCA9IHtcbiAgaWQ6ICd2aXN1YWwnLFxuICBuYW1lOiAnVmlzdWFsJyxcbiAgZGVzY3JpcHRpb246ICdJbWFnZS1mb3J3YXJkIGxheW91dCBmb3IgcGhvdG8gZXNzYXlzIGFuZCB2aXN1YWwgc3RvcmllcycsXG4gIGJlc3RGb3I6IFsncGhvdG8gZXNzYXlzJywgJ3RyYXZlbCcsICdsaWZlc3R5bGUnLCAncG9ydGZvbGlvJ10sXG4gIGNvbHVtbnM6IDEsXG4gIG1heFdpZHRoOiAnODQwcHgnLFxuICBmb250RmFtaWx5OiAnR2VvcmdpYSwgQ2hhcnRlciwgc2VyaWYnLFxuICBmb250U2l6ZTogJzE4cHgnLFxuICBsaW5lSGVpZ2h0OiAnMS43NScsXG4gIHJlbmRlcihhcnRpY2xlLCBjb250YWluZXIpIHtcbiAgICBjb25zdCBoZXJvSW1hZ2UgPSBhcnRpY2xlLmltYWdlc1swXTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAucmVhZGVyLWNvbnRhaW5lciB7IFxuICAgICAgICAgIG1heC13aWR0aDogJHt0aGlzLm1heFdpZHRofTsgXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoaXMuZm9udEZhbWlseX07IFxuICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGlzLmZvbnRTaXplfTsgXG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhpcy5saW5lSGVpZ2h0fTsgXG4gICAgICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1oZXJvIHsgXG4gICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgIGhlaWdodDogNDAwcHg7IFxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItaGVyby1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1pbm5lciB7IHBhZGRpbmc6IDAgMzJweCA0OHB4OyB9XG4gICAgICAgIC5yZWFkZXItaGVhZGVyIHsgbWFyZ2luLWJvdHRvbTogMzJweDsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIC5yZWFkZXItdGl0bGUgeyBcbiAgICAgICAgICBmb250LXNpemU6IDIuNWVtOyBcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yOyBcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4OyBcbiAgICAgICAgICBjb2xvcjogIzExMTgyNzsgXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1tZXRhIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgICAgLnJlYWRlci1jb250ZW50IHsgbWF4LXdpZHRoOiA2NDBweDsgbWFyZ2luOiAwIGF1dG87IH1cbiAgICAgICAgLnJlYWRlci1jb250ZW50IGltZyB7IFxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMDBweCk7IFxuICAgICAgICAgIG1heC13aWR0aDogbm9uZTsgXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC01MHB4OyBcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC01MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgJHtiYXNlVHlwb2dyYXBoeX1cbiAgICAgICAgLnJlYWRlci1mb290ZXIgeyBtYXgtd2lkdGg6IDY0MHB4OyBtYXJnaW46IDYwcHggYXV0byAwOyB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5yZWFkZXItY29udGVudCBpbWcgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IG1hcmdpbi1yaWdodDogMDsgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAucmVhZGVyLWNvbnRhaW5lciB7IGNvbG9yOiAjZTVlN2ViOyB9XG4gICAgICAgICAgLnJlYWRlci10aXRsZSB7IGNvbG9yOiAjZjlmYWZiOyB9XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAke2hlcm9JbWFnZSBcbiAgICAgICAgICA/IGA8aW1nIGNsYXNzPVwicmVhZGVyLWhlcm9cIiBzcmM9XCIke2hlcm9JbWFnZS5zcmN9XCIgYWx0PVwiJHtoZXJvSW1hZ2UuYWx0IHx8ICcnfVwiPmAgXG4gICAgICAgICAgOiAnPGRpdiBjbGFzcz1cInJlYWRlci1oZXJvLXBsYWNlaG9sZGVyXCI+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWFkZXItaW5uZXJcIj5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwicmVhZGVyLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwicmVhZGVyLXRpdGxlXCI+JHtlc2NhcGVIdG1sKGFydGljbGUudGl0bGUpfTwvaDE+XG4gICAgICAgICAgICAke3JlbmRlck1ldGEoYXJ0aWNsZSl9XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWFkZXItY29udGVudFwiPiR7YXJ0aWNsZS5jb250ZW50SHRtbC5pbm5lckhUTUx9PC9hcnRpY2xlPlxuICAgICAgICAgICR7cmVuZGVyRm9vdGVyKGFydGljbGUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgYWNhZGVtaWNMYXlvdXQ6IFJlYWRlckxheW91dCA9IHtcbiAgaWQ6ICdhY2FkZW1pYycsXG4gIG5hbWU6ICdBY2FkZW1pYycsXG4gIGRlc2NyaXB0aW9uOiAnRm9ybWFsIHR3by1jb2x1bW4gbGF5b3V0IGZvciBwYXBlcnMgYW5kIHJlc2VhcmNoJyxcbiAgYmVzdEZvcjogWydwYXBlcnMnLCAncmVzZWFyY2gnLCAncmVwb3J0cycsICdkb2N1bWVudGF0aW9uJ10sXG4gIGNvbHVtbnM6IDIsXG4gIG1heFdpZHRoOiAnOTAwcHgnLFxuICBmb250RmFtaWx5OiAnXCJTb3VyY2UgU2VyaWYgUHJvXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmJyxcbiAgZm9udFNpemU6ICcxNXB4JyxcbiAgbGluZUhlaWdodDogJzEuNjUnLFxuICByZW5kZXIoYXJ0aWNsZSwgY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLnJlYWRlci1jb250YWluZXIgeyBcbiAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5tYXhXaWR0aH07IFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4IDQ4cHg7IFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoaXMuZm9udEZhbWlseX07IFxuICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGlzLmZvbnRTaXplfTsgXG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhpcy5saW5lSGVpZ2h0fTsgXG4gICAgICAgICAgY29sb3I6ICMxYTFhMWE7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLWhlYWRlciB7IFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDsgXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7IFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWExYTFhO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFkZXItdGl0bGUgeyBcbiAgICAgICAgICBmb250LXNpemU6IDEuNzVlbTsgXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzsgXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTZweDsgXG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1tZXRhIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogIzY2NjsgfVxuICAgICAgICAucmVhZGVyLW1ldGEtaXRlbS5hdXRob3IgeyBmb250LXdlaWdodDogNjAwOyB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCB7IFxuICAgICAgICAgIGNvbHVtbi1jb3VudDogMjsgXG4gICAgICAgICAgY29sdW1uLWdhcDogNDBweDsgXG4gICAgICAgICAgY29sdW1uLXJ1bGU6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgaHlwaGVuczogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgcCB7IG1hcmdpbi1ib3R0b206IDFlbTsgdGV4dC1pbmRlbnQ6IDEuNWVtOyB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCBwOmZpcnN0LW9mLXR5cGUgeyB0ZXh0LWluZGVudDogMDsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgaDIgeyBcbiAgICAgICAgICBjb2x1bW4tc3BhbjogYWxsOyBcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTsgXG4gICAgICAgICAgbWFyZ2luOiAxLjVlbSAwIDAuNzVlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWRlci1jb250ZW50IGgzIHsgY29sdW1uLXNwYW46IGFsbDsgZm9udC1zaXplOiAxLjFlbTsgbWFyZ2luOiAxLjI1ZW0gMCAwLjVlbTsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgYmxvY2txdW90ZSB7IGNvbHVtbi1zcGFuOiBhbGw7IG1hcmdpbjogMWVtIDA7IGZvbnQtc2l6ZTogMC45NWVtOyB9XG4gICAgICAgIC5yZWFkZXItY29udGVudCBwcmUgeyBjb2x1bW4tc3BhbjogYWxsOyBmb250LXNpemU6IDAuODVlbTsgfVxuICAgICAgICAucmVhZGVyLWNvbnRlbnQgZmlndXJlIHsgY29sdW1uLXNwYW46IGFsbDsgbWFyZ2luOiAxLjVlbSAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgICAgLnJlYWRlci1jb250ZW50IGZpZ2NhcHRpb24geyBmb250LXNpemU6IDAuODVlbTsgY29sb3I6ICM2NjY7IG1hcmdpbi10b3A6IDAuNWVtOyB9XG4gICAgICAgICR7YmFzZVR5cG9ncmFwaHl9XG4gICAgICAgIC5yZWFkZXItZm9vdGVyIHsgXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDhweDsgXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7IFxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xuICAgICAgICAgIGNvbHVtbi1zcGFuOiBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgLnJlYWRlci1jb250ZW50IHsgY29sdW1uLWNvdW50OiAxOyB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgICAgIC5yZWFkZXItY29udGFpbmVyIHsgYmFja2dyb3VuZDogIzBhMGEwYTsgY29sb3I6ICNkNGQ0ZDQ7IH1cbiAgICAgICAgICAucmVhZGVyLWhlYWRlciB7IGJvcmRlci1ib3R0b20tY29sb3I6ICM0MDQwNDA7IH1cbiAgICAgICAgICAucmVhZGVyLXRpdGxlIHsgY29sb3I6ICNmNWY1ZjU7IH1cbiAgICAgICAgICAucmVhZGVyLWNvbnRlbnQgaDIgeyBib3JkZXItdG9wLWNvbG9yOiAjMzMzOyB9XG4gICAgICAgICAgLnJlYWRlci1jb250ZW50IHsgY29sdW1uLXJ1bGUtY29sb3I6ICMzMzM7IH1cbiAgICAgICAgICAucmVhZGVyLWZvb3RlciB7IGJvcmRlci10b3AtY29sb3I6ICMzMzM7IH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyZWFkZXItaGVhZGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwicmVhZGVyLXRpdGxlXCI+JHtlc2NhcGVIdG1sKGFydGljbGUudGl0bGUpfTwvaDE+XG4gICAgICAgICAgJHtyZW5kZXJNZXRhKGFydGljbGUpfVxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWFkZXItY29udGVudFwiPiR7YXJ0aWNsZS5jb250ZW50SHRtbC5pbm5lckhUTUx9PC9hcnRpY2xlPlxuICAgICAgICAke3JlbmRlckZvb3RlcihhcnRpY2xlKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgYWxsTGF5b3V0czogUmVhZGVyTGF5b3V0W10gPSBbXG4gIHJlYWRlckxheW91dCxcbiAgZm9jdXNMYXlvdXQsXG4gIHRlcm1pbmFsTGF5b3V0LFxuICBjb21wYWN0TGF5b3V0LFxuICB2aXN1YWxMYXlvdXQsXG4gIGFjYWRlbWljTGF5b3V0LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExheW91dChpZDogc3RyaW5nKTogUmVhZGVyTGF5b3V0IHtcbiAgcmV0dXJuIGFsbExheW91dHMuZmluZChsID0+IGwuaWQgPT09IGlkKSB8fCByZWFkZXJMYXlvdXQ7XG59XG5cbmV4cG9ydCB7IHJlYWRlckxheW91dCBhcyBuZXdzcGFwZXJMYXlvdXQgfTtcbiIsIi8qKlxuICogVGhlbWVzIGZvciBDYWxtV2ViIFN1cGVyIFJlYWRlclxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhZGVyVGhlbWUge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBhY2NlbnQ6IHN0cmluZztcbiAgaXNEYXJrOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRoZW1lOiBSZWFkZXJUaGVtZSA9IHtcbiAgaWQ6ICdkZWZhdWx0JyxcbiAgbmFtZTogJ0xpZ2h0JyxcbiAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICB0ZXh0OiAnIzFmMjkzNycsXG4gIGFjY2VudDogJyMzYjgyZjYnLFxuICBpc0Rhcms6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZTogUmVhZGVyVGhlbWUgPSB7XG4gIGlkOiAnZGFyaycsXG4gIG5hbWU6ICdEYXJrJyxcbiAgYmFja2dyb3VuZDogJyMxMTE4MjcnLFxuICB0ZXh0OiAnI2U1ZTdlYicsXG4gIGFjY2VudDogJyM2MGE1ZmEnLFxuICBpc0Rhcms6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3Qgc2VwaWFUaGVtZTogUmVhZGVyVGhlbWUgPSB7XG4gIGlkOiAnc2VwaWEnLFxuICBuYW1lOiAnU2VwaWEnLFxuICBiYWNrZ3JvdW5kOiAnI2Y0ZWNkOCcsXG4gIHRleHQ6ICcjNDMzNDIyJyxcbiAgYWNjZW50OiAnIzhiNWEyYicsXG4gIGlzRGFyazogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgbWlkbmlnaHRUaGVtZTogUmVhZGVyVGhlbWUgPSB7XG4gIGlkOiAnbWlkbmlnaHQnLFxuICBuYW1lOiAnTWlkbmlnaHQnLFxuICBiYWNrZ3JvdW5kOiAnIzBmMTcyYScsXG4gIHRleHQ6ICcjZTJlOGYwJyxcbiAgYWNjZW50OiAnIzgxOGNmOCcsXG4gIGlzRGFyazogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBhbGxUaGVtZXM6IFJlYWRlclRoZW1lW10gPSBbXG4gIGRlZmF1bHRUaGVtZSxcbiAgZGFya1RoZW1lLFxuICBzZXBpYVRoZW1lLFxuICBtaWRuaWdodFRoZW1lLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lKGlkOiBzdHJpbmcpOiBSZWFkZXJUaGVtZSB7XG4gIHJldHVybiBhbGxUaGVtZXMuZmluZCgodCkgPT4gdC5pZCA9PT0gaWQpIHx8IGRlZmF1bHRUaGVtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWU6IFJlYWRlclRoZW1lLCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yZWFkZXItYmcnLCB0aGVtZS5iYWNrZ3JvdW5kKTtcbiAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLXJlYWRlci10ZXh0JywgdGhlbWUudGV4dCk7XG4gIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yZWFkZXItYWNjZW50JywgdGhlbWUuYWNjZW50KTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIHRoZW1lLmlkKTtcbn0iLCIvKipcbiAqIFJlYWRlciBPdmVybGF5IGZvciBDYWxtV2ViIFN1cGVyIFJlYWRlclxuICovXG5cbmltcG9ydCB0eXBlIHsgRXh0cmFjdGVkQXJ0aWNsZSB9IGZyb20gJy4vZXh0cmFjdG9yJztcbmltcG9ydCB0eXBlIHsgUmVhZGVyTGF5b3V0IH0gZnJvbSAnLi9sYXlvdXRzJztcbmltcG9ydCB0eXBlIHsgUmVhZGVyVGhlbWUgfSBmcm9tICcuL3RoZW1lcyc7XG5pbXBvcnQgeyBleHRyYWN0QXJ0aWNsZSB9IGZyb20gJy4vZXh0cmFjdG9yJztcbmltcG9ydCB7IGdldExheW91dCwgYWxsTGF5b3V0cyB9IGZyb20gJy4vbGF5b3V0cyc7XG5pbXBvcnQgeyBnZXRUaGVtZSwgYWxsVGhlbWVzLCBhcHBseVRoZW1lIH0gZnJvbSAnLi90aGVtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRlck9wdGlvbnMge1xuICBsYXlvdXRJZD86IHN0cmluZztcbiAgdGhlbWVJZD86IHN0cmluZztcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IE9WRVJMQVlfSUQgPSAnY2FsbXdlYi1yZWFkZXItb3ZlcmxheSc7XG5jb25zdCBPVkVSTEFZX1NUWUxFUyA9IGBcbiAgIyR7T1ZFUkxBWV9JRH0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMjE0NzQ4MzY0NztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWFkZXItYmcsICNmZmZmZmYpO1xuICAgIGNvbG9yOiB2YXIoLS1yZWFkZXItdGV4dCwgIzFmMjkzNyk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45NSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItdG9vbGJhci1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLmNhbG13ZWItcmVhZGVyLWxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzNiODJmNjtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmNhbG13ZWItcmVhZGVyLXRvb2xiYXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItYnRuOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci1idG4tY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci1idG4tY2xvc2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYzI2MjY7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci1kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24tbWVudS5vcGVuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci1kcm9wZG93bi1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcbiAgfVxuXG4gIC5jYWxtd2ViLXJlYWRlci1kcm9wZG93bi1pdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMSk7XG4gICAgY29sb3I6ICMzYjgyZjY7XG4gIH1cblxuICAuY2FsbXdlYi1yZWFkZXItY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIH1cblxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgLmNhbG13ZWItcmVhZGVyLXRvb2xiYXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNywgMjQsIDM5LCAwLjk1KTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1yZWFkZXItYnRuIHtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgICAgY29sb3I6ICNlNWU3ZWI7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItcmVhZGVyLWJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgYmFja2dyb3VuZDogIzFmMjkzNztcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLXJlYWRlci1kcm9wZG93bi1pdGVtIHtcbiAgICAgIGNvbG9yOiAjZTVlN2ViO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLXJlYWRlci1kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgfVxuICB9XG5gO1xuXG5sZXQgY3VycmVudExheW91dDogUmVhZGVyTGF5b3V0O1xubGV0IGN1cnJlbnRUaGVtZTogUmVhZGVyVGhlbWU7XG5sZXQgY3VycmVudEFydGljbGU6IEV4dHJhY3RlZEFydGljbGUgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5SZWFkZXIob3B0aW9uczogUmVhZGVyT3B0aW9ucyA9IHt9KTogdm9pZCB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG4gIGlmIChleGlzdGluZykgcmV0dXJuO1xuXG4gIGN1cnJlbnRMYXlvdXQgPSBnZXRMYXlvdXQob3B0aW9ucy5sYXlvdXRJZCB8fCAnbmV3c3BhcGVyJyk7XG4gIGN1cnJlbnRUaGVtZSA9IGdldFRoZW1lKG9wdGlvbnMudGhlbWVJZCB8fCAnZGVmYXVsdCcpO1xuXG4gIGNvbnN0IGFydGljbGUgPSBleHRyYWN0QXJ0aWNsZShkb2N1bWVudCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBjdXJyZW50QXJ0aWNsZSA9IGFydGljbGU7XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcblxuICBjb25zdCBzaGFkb3cgPSBvdmVybGF5LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblxuICBzaGFkb3cuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT4ke09WRVJMQVlfU1RZTEVTfTwvc3R5bGU+XG4gICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLXRvb2xiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXJlYWRlci10b29sYmFyLWxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWxvZ29cIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMjJzOC00IDgtMTBWNWwtOC0zLTggM3Y3YzAgNiA4IDEwIDggMTB6XCIvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIFN1cGVyIFJlYWRlclxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLXRpdGxlXCI+JHtlc2NhcGVIdG1sKGFydGljbGUudGl0bGUpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1yZWFkZXItdG9vbGJhci1yaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1yZWFkZXItZHJvcGRvd25cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsbXdlYi1yZWFkZXItYnRuXCIgZGF0YS1kcm9wZG93bj1cImxheW91dFwiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCI3XCIvPlxuICAgICAgICAgICAgICA8cmVjdCB4PVwiMTRcIiB5PVwiM1wiIHdpZHRoPVwiN1wiIGhlaWdodD1cIjdcIi8+XG4gICAgICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjE0XCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiN1wiLz5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjE0XCIgeT1cIjE0XCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiN1wiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYXlvdXQtbmFtZVwiPiR7Y3VycmVudExheW91dC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1yZWFkZXItZHJvcGRvd24tbWVudVwiIGRhdGEtbWVudT1cImxheW91dFwiPlxuICAgICAgICAgICAgJHthbGxMYXlvdXRzLm1hcChsID0+IGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLWl0ZW0gJHtsLmlkID09PSBjdXJyZW50TGF5b3V0LmlkID8gJ2FjdGl2ZScgOiAnJ31cIiBkYXRhLWxheW91dD1cIiR7bC5pZH1cIj5cbiAgICAgICAgICAgICAgICAke2wubmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgKS5qb2luKCcnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWRyb3Bkb3duXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWJ0blwiIGRhdGEtZHJvcGRvd249XCJ0aGVtZVwiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAxdjJNMTIgMjF2Mk00LjIyIDQuMjJsMS40MiAxLjQyTTE4LjM2IDE4LjM2bDEuNDIgMS40Mk0xIDEyaDJNMjEgMTJoMk00LjIyIDE5Ljc4bDEuNDItMS40Mk0xOC4zNiA1LjY0bDEuNDItMS40MlwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aGVtZS1uYW1lXCI+JHtjdXJyZW50VGhlbWUubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLW1lbnVcIiBkYXRhLW1lbnU9XCJ0aGVtZVwiPlxuICAgICAgICAgICAgJHthbGxUaGVtZXMubWFwKHQgPT4gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1yZWFkZXItZHJvcGRvd24taXRlbSAke3QuaWQgPT09IGN1cnJlbnRUaGVtZS5pZCA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS10aGVtZT1cIiR7dC5pZH1cIj5cbiAgICAgICAgICAgICAgICAke3QubmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgKS5qb2luKCcnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbG13ZWItcmVhZGVyLWJ0biBjYWxtd2ViLXJlYWRlci1idG4tY2xvc2VcIiBkYXRhLWFjdGlvbj1cImNsb3NlXCI+XG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDZMNiAxOE02IDZsMTIgMTJcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgQ2xvc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1yZWFkZXItY29udGVudFwiIGlkPVwicmVhZGVyLWNvbnRlbnRcIj48L2Rpdj5cbiAgYDtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gIGNvbnN0IGNvbnRlbnRFbCA9IHNoYWRvdy5nZXRFbGVtZW50QnlJZCgncmVhZGVyLWNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgYXBwbHlUaGVtZShjdXJyZW50VGhlbWUsIG92ZXJsYXkpO1xuICBjdXJyZW50TGF5b3V0LnJlbmRlcihhcnRpY2xlLCBjb250ZW50RWwpO1xuXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoc2hhZG93LCBvdmVybGF5LCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUmVhZGVyKCk6IHZvaWQge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKHNoYWRvdzogU2hhZG93Um9vdCwgb3ZlcmxheTogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFJlYWRlck9wdGlvbnMpOiB2b2lkIHtcbiAgc2hhZG93LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRyb3Bkb3duXScpLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IG1lbnVJZCA9IChidG4gYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnZGF0YS1kcm9wZG93bicpO1xuICAgICAgY29uc3QgbWVudSA9IHNoYWRvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZW51PVwiJHttZW51SWR9XCJdYCk7XG4gICAgICBcbiAgICAgIHNoYWRvdy5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsbXdlYi1yZWFkZXItZHJvcGRvd24tbWVudScpLmZvckVhY2gobSA9PiB7XG4gICAgICAgIGlmIChtICE9PSBtZW51KSBtLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBtZW51Py5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHNoYWRvdy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sYXlvdXRdJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBsYXlvdXRJZCA9IChpdGVtIGFzIEhUTUxFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF5b3V0Jyk7XG4gICAgICBpZiAobGF5b3V0SWQpIHtcbiAgICAgICAgY3VycmVudExheW91dCA9IGdldExheW91dChsYXlvdXRJZCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHNoYWRvdy5nZXRFbGVtZW50QnlJZCgncmVhZGVyLWNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKGN1cnJlbnRBcnRpY2xlKSB7XG4gICAgICAgICAgY29udGVudEVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIGN1cnJlbnRMYXlvdXQucmVuZGVyKGN1cnJlbnRBcnRpY2xlLCBjb250ZW50RWwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzaGFkb3cucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGF5b3V0XScpLmZvckVhY2goaSA9PiBpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgc2hhZG93LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtbmFtZScpIS50ZXh0Q29udGVudCA9IGN1cnJlbnRMYXlvdXQubmFtZTtcbiAgICAgICAgc2hhZG93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1lbnU9XCJsYXlvdXRcIl0nKT8uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBzaGFkb3cucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGhlbWVdJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB0aGVtZUlkID0gKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xuICAgICAgaWYgKHRoZW1lSWQpIHtcbiAgICAgICAgY3VycmVudFRoZW1lID0gZ2V0VGhlbWUodGhlbWVJZCk7XG4gICAgICAgIGFwcGx5VGhlbWUoY3VycmVudFRoZW1lLCBvdmVybGF5KTtcbiAgICAgICAgXG4gICAgICAgIHNoYWRvdy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10aGVtZV0nKS5mb3JFYWNoKGkgPT4gaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHNoYWRvdy5xdWVyeVNlbGVjdG9yKCcudGhlbWUtbmFtZScpIS50ZXh0Q29udGVudCA9IGN1cnJlbnRUaGVtZS5uYW1lO1xuICAgICAgICBzaGFkb3cucXVlcnlTZWxlY3RvcignW2RhdGEtbWVudT1cInRoZW1lXCJdJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBzaGFkb3cucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uPVwiY2xvc2VcIl0nKTtcbiAgY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsb3NlUmVhZGVyKCk7XG4gICAgb3B0aW9ucy5vbkNsb3NlPy4oKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgY2xvc2VSZWFkZXIoKTtcbiAgICAgIG9wdGlvbnMub25DbG9zZT8uKCk7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaGFkb3cucXVlcnlTZWxlY3RvckFsbCgnLmNhbG13ZWItcmVhZGVyLWRyb3Bkb3duLW1lbnUnKS5mb3JFYWNoKG0gPT4ge1xuICAgICAgbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gc3Bhbi5pbm5lckhUTUw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWRlck9wZW4oKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUmVhZGVyKG9wdGlvbnM/OiBSZWFkZXJPcHRpb25zKTogdm9pZCB7XG4gIGlmIChpc1JlYWRlck9wZW4oKSkge1xuICAgIGNsb3NlUmVhZGVyKCk7XG4gIH0gZWxzZSB7XG4gICAgb3BlblJlYWRlcihvcHRpb25zKTtcbiAgfVxufSIsIi8qKlxuICogUmVhZGVyIEVudHJ5IFBvaW50IGZvciBDYWxtV2ViXG4gKlxuICogTGlzdGVucyBmb3Iga2V5Ym9hcmQgc2hvcnRjdXQgdG8gdG9nZ2xlIFN1cGVyIFJlYWRlciBtb2RlLlxuICovXG5cbmltcG9ydCB7IGRlZmluZUNvbnRlbnRTY3JpcHQgfSBmcm9tICd3eHQvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0JztcbmltcG9ydCB7IHRvZ2dsZVJlYWRlciB9IGZyb20gJy4uL3NyYy9yZW5kZXJlci9yZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb250ZW50U2NyaXB0KHtcbiAgbWF0Y2hlczogWyc8YWxsX3VybHM+J10sXG4gIHJ1bkF0OiAnZG9jdW1lbnRfaWRsZScsXG5cbiAgbWFpbigpIHtcbiAgICBjb25zb2xlLmxvZygnW0NhbG1XZWJdIFJlYWRlciBjb250ZW50IHNjcmlwdCBsb2FkZWQnKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUuYWx0S2V5ICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdyJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZVJlYWRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7Il0sIm5hbWVzIjpbImRlZmluaXRpb24iLCJlbCIsImVzY2FwZUh0bWwiXSwibWFwcGluZ3MiOiI7O0FBQ0EsV0FBUyxvQkFBb0JBLGFBQVk7QUFDeEMsV0FBT0E7QUFBQSxFQUNSO0FDb0JBLFFBQU0sbUJBQW1CO0FBQUEsSUFDdkI7QUFBQSxJQUFPO0FBQUEsSUFBUztBQUFBLElBQVU7QUFBQSxJQUMxQjtBQUFBLElBQU87QUFBQSxJQUFrQjtBQUFBLElBQVE7QUFBQSxJQUNqQztBQUFBLElBQVk7QUFBQSxJQUFZO0FBQUEsSUFBZ0I7QUFBQSxJQUN4QztBQUFBLElBQWlCO0FBQUEsSUFBa0I7QUFBQSxJQUNuQztBQUFBLElBQWE7QUFBQSxJQUFhO0FBQUEsSUFDMUI7QUFBQSxJQUFVO0FBQUEsSUFBUztBQUFBLElBQVk7QUFBQSxJQUMvQjtBQUFBLElBQXlCO0FBQUEsSUFDekI7QUFBQSxJQUFvQjtBQUFBLElBQ3BCO0FBQUEsSUFBZTtBQUFBLElBQWdCO0FBQUEsSUFDL0I7QUFBQSxJQUFTO0FBQUEsSUFBYTtBQUFBLElBQ3RCO0FBQUEsSUFBZTtBQUFBLElBQ2Y7QUFBQSxJQUFlO0FBQUEsSUFDZjtBQUFBLElBQWtCO0FBQUEsRUFDcEI7QUFFQSxRQUFNLG9CQUFvQjtBQUFBLElBQ3hCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFB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
reader;