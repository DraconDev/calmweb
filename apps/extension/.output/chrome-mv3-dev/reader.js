var reader = (function() {
  "use strict";
  function defineContentScript(definition2) {
    return definition2;
  }
  const REMOVE_SELECTORS = [
    "nav",
    "aside",
    "footer",
    'header:not(article header):not([class*="site-header"]):not([class*="main-header"])',
    ".ad",
    ".advertisement",
    ".ads",
    ".ad-container",
    ".ad-slot",
    ".ad-wrapper",
    ".advert",
    '[id*="ad-"]',
    '[class*="ad-"]',
    '[id*="advert"]',
    '[class*="advert"]',
    ".sidebar",
    ".related",
    ".recommended",
    ".suggestions",
    ".more-stories",
    ".social-share",
    ".share-buttons",
    ".social-links",
    ".social-bar",
    ".share-bar",
    ".comments",
    "#comments",
    ".comment-section",
    ".responses",
    ".disqus",
    "script",
    "style",
    "noscript",
    'iframe:not([src*="youtube"]):not([src*="vimeo"])',
    '[class*="newsletter"]',
    '[class*="subscribe"]',
    '[class*="signup"]',
    '[class*="popup"]',
    '[class*="modal"]',
    '[class*="lightbox"]',
    ".author-bio",
    ".author-info",
    ".about-author",
    ".post-author",
    ".tags",
    ".tag-list",
    ".categories",
    ".topic-tags",
    ".breadcrumb",
    ".breadcrumbs",
    ".crumbs",
    ".pagination",
    ".pager",
    ".page-nav",
    ".cookie-notice",
    ".gdpr",
    '[class*="consent"]',
    '[class*="cookie-banner"]',
    ".cookie-banner",
    '[class*="intercom"]',
    '[class*="drift"]',
    '[class*="zendesk"]',
    '[class*="crisp"]',
    '[class*="livechat"]',
    '[class*="chat-widget"]',
    "#intercom-container",
    '[class*="paywall"]',
    '[class*="premium"]',
    '[class*="metered"]',
    '[class*="locked"]',
    '[class*="overlay"]',
    '[class*="backdrop"]',
    '[class*="mask"]',
    '[class*="app-banner"]',
    '[class*="install-prompt"]',
    '[class*="download-app"]',
    '[class*="survey"]',
    '[class*="feedback"]',
    '[class*="poll"]',
    '[class*="rating"]',
    '[class*="sponsored"]',
    '[class*="promoted"]',
    '[class*="native-ad"]',
    '[class*="age-gate"]',
    '[class*="age-verification"]',
    '[class*="cookie-law"]',
    '[class*="eu-cookie"]',
    '[style*="position: sticky"]',
    '[style*="position:fixed"]',
    '[style*="display: none"]',
    '[style*="display:none"]',
    "[hidden]",
    '[aria-hidden="true"]',
    ".promo",
    ".promo-banner",
    ".promo-code",
    ".newsletter-popup",
    ".subscribe-popup",
    "#wpadminbar",
    ".amp-sidebar",
    ".amp-menu"
  ];
  const TITLE_SELECTORS = [
    "article h1",
    'h1[itemprop="headline"]',
    '[property="og:title"]',
    'meta[name="twitter:title"]',
    "h1.title",
    'h1[itemprop="name"]',
    ".product-title",
    ".product-name",
    ".listing-title",
    ".thread-title",
    "h1",
    ".post-title",
    ".article-title",
    ".entry-title",
    '[class*="title"] h1',
    'meta[property="og:title"]'
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
  const TRACKING_PARAMS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "fbclid",
    "gclid",
    "gclsrc",
    "mc_cid",
    "mc_eid",
    "ref",
    "referer",
    "referrer",
    "affiliate",
    "aff_id",
    "campaign_id",
    "ad_id",
    "adgroup_id",
    "ttclid",
    "twclid",
    "s_kwcid",
    "scid",
    "_ga",
    "_gl",
    "vero_id",
    "mailchimp_campaign_id",
    "fb_action_ids",
    "fb_action_types",
    "fb_source",
    "fb_campaign_ids",
    "oly_enc_id",
    "oly_anon_id",
    "perfmon_ref_id",
    "spm",
    "spm_id",
    "rdt_cid",
    "rdt_tid",
    "trk_contact",
    "trk_msg",
    "trk_module",
    "trk_sid",
    "zanpid",
    "igshid",
    "tt_sigid",
    "tt_mediaid"
  ];
  const SUSPICIOUS_DOMAINS = [
    "bit.ly",
    "tinyurl.com",
    "t.co",
    "goo.gl",
    "ow.ly",
    "is.gd",
    "buff.ly",
    "adf.ly",
    "j.mp",
    "tr.im",
    "tiny.cc",
    "lnkd.in",
    "db.tt",
    "qr.ae",
    "adcrun.ch",
    "psty.jp",
    "shorl.com",
    "hypERM.com",
    "firefe.st",
    "cort.as",
    "clck.ru",
    "clicky.me",
    "budurl.com",
    "snipurl.com",
    "snurl.com",
    "short.to",
    "url.ie",
    "shorenstein.org"
  ];
  function stripTrackingFromUrl(href, baseUrl) {
    try {
      const url = new URL(href, baseUrl);
      const hostname = url.hostname;
      if (SUSPICIOUS_DOMAINS.some((d) => hostname.includes(d))) {
        return "";
      }
      TRACKING_PARAMS.forEach((param) => url.searchParams.delete(param));
      url.searchParams.delete("_ga");
      url.searchParams.delete("_gl");
      url.searchParams.delete("ref");
      url.searchParams.delete("ref_src");
      url.searchParams.delete("ref_url");
      url.hash = "";
      const cleaned = url.toString();
      return cleaned === url.origin + url.pathname + "/" ? "" : cleaned;
    } catch {
      return "";
    }
  }
  function extractArticle(doc, url, mode = "textOnly") {
    const title = extractTitle(doc);
    const author = extractAuthor(doc);
    const date = extractDate(doc);
    const mainContent = findMainContent(doc);
    const images = mode !== "textOnly" ? extractImages(mainContent) : [];
    const cleanedContent = cleanContent(mainContent, mode, url);
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
        let author = el.getAttribute("content") || el.textContent?.trim();
        if (author && author.length < 100) {
          author = author.replace(/^(by|written by|reported by)\s+/i, "");
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
    const candidates = doc.querySelectorAll('main, article, [role="main"], [role="article"], section, div, body');
    let bestElement = null;
    let bestScore = 0;
    for (const candidate of Array.from(candidates)) {
      if (!isVisibleElement(candidate)) continue;
      const score = scoreElement(candidate);
      if (score > bestScore) {
        bestScore = score;
        bestElement = candidate;
      }
    }
    return bestElement || doc.body;
  }
  function isVisibleElement(el) {
    const style = window.getComputedStyle(el);
    if (style.display === "none") return false;
    if (style.visibility === "hidden") return false;
    if (style.opacity === "0") return false;
    if (parseFloat(style.opacity) < 0.1) return false;
    if (el.hasAttribute("hidden")) return false;
    if (el.getAttribute("aria-hidden") === "true") return false;
    if (el.hasAttribute("data-visible") && el.getAttribute("data-visible") === "false") return false;
    return true;
  }
  function scoreElement(el) {
    const html = el;
    const text = html.textContent?.trim() || "";
    const innerHTML = html.innerHTML || "";
    if (text.length < 50) return 0;
    const textLength = text.length;
    const htmlLength = innerHTML.length;
    const textDensity = htmlLength > 0 ? textLength / htmlLength : 0;
    if (textDensity < 0.05) return 0;
    const paragraphs = html.querySelectorAll("p").length;
    const headings = html.querySelectorAll("h1,h2,h3,h4,h5,h6").length;
    const lists = html.querySelectorAll("ul, ol, dl").length;
    const tables = html.querySelectorAll("table").length;
    const links = html.querySelectorAll("a").length;
    const images = html.querySelectorAll("img").length;
    const blockChildren = html.querySelectorAll("p, div, section, article, blockquote, pre, ul, ol, table").length;
    let score = 0;
    score += textLength * textDensity;
    score += paragraphs * 100;
    score += headings * 80;
    score += lists * 60;
    score += tables * 100;
    score += links * 5;
    score += images * 10;
    score += blockChildren * 30;
    const tagName = el.tagName.toLowerCase();
    if (tagName === "article") score += 500;
    if (tagName === "main") score += 400;
    if (tagName === "section") score += 200;
    const depth = getDepth(el);
    score *= Math.max(0.3, 1 - depth * 0.05);
    if (score > 5e4) return 5e4;
    return score;
  }
  function getDepth(el) {
    let depth = 0;
    let parent = el.parentElement;
    while (parent) {
      depth++;
      parent = parent.parentElement;
    }
    return depth;
  }
  function cleanContent(el, mode = "textOnly", baseUrl = "") {
    const clone = el.cloneNode(true);
    REMOVE_SELECTORS.forEach((selector) => {
      clone.querySelectorAll(selector).forEach((el2) => el2.remove());
    });
    if (mode === "textOnly") {
      cleanTextOnly(clone);
    } else if (mode === "safe") {
      cleanSafeMode(clone, baseUrl);
    } else if (mode === "full") {
      cleanFullMode(clone, baseUrl);
    }
    return clone;
  }
  function cleanTextOnly(el) {
    el.querySelectorAll("figure").forEach((figure) => {
      const caption = figure.querySelector("figcaption");
      if (caption && caption.textContent?.trim()) {
        const p = document.createElement("p");
        p.textContent = caption.textContent.trim();
        figure.replaceWith(p);
      } else {
        figure.remove();
      }
    });
    el.querySelectorAll("img").forEach((img) => {
      const w = parseInt(img.getAttribute("width") || "0");
      const h = parseInt(img.getAttribute("height") || "0");
      const src = img.getAttribute("src") || "";
      if (w > 0 && w <= 32 || h > 0 && h <= 32) return;
      if (src.startsWith("data:image/svg")) return;
      img.remove();
    });
    el.querySelectorAll("video, audio, source, track, picture, canvas, embed, object, iframe").forEach((e) => e.remove());
    el.querySelectorAll("*").forEach((e) => {
      const html = e;
      html.removeAttribute("style");
      html.removeAttribute("class");
      html.removeAttribute("id");
      html.removeAttribute("onclick");
      html.removeAttribute("onmouseover");
      html.removeAttribute("onmouseout");
    });
    el.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href && !href.startsWith("http") && !href.startsWith("/") && !href.startsWith("#")) {
        a.removeAttribute("href");
      }
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    });
  }
  function cleanSafeMode(el, baseUrl) {
    el.querySelectorAll("figure").forEach((figure) => {
      const caption = figure.querySelector("figcaption");
      if (caption && caption.textContent?.trim()) {
        const p = document.createElement("p");
        p.textContent = `[Image: ${caption.textContent.trim()}]`;
        figure.replaceWith(p);
      } else {
        figure.remove();
      }
    });
    el.querySelectorAll("img").forEach((img) => {
      const alt = img.getAttribute("alt") || "Image";
      const span = document.createElement("span");
      span.className = "cw-media-placeholder";
      span.textContent = `[${alt}]`;
      span.setAttribute("data-cw-media", "image");
      img.replaceWith(span);
    });
    el.querySelectorAll("video, audio, source, track, picture, canvas, embed, object, iframe").forEach((media) => {
      const span = document.createElement("span");
      span.className = "cw-media-placeholder";
      span.textContent = `[Media - ${media.tagName.toLowerCase()}]`;
      span.setAttribute("data-cw-media", media.tagName.toLowerCase());
      media.replaceWith(span);
    });
    el.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("http") || href.startsWith("/") || href.startsWith("#")) {
        const cleaned = stripTrackingFromUrl(href, baseUrl);
        if (cleaned) {
          a.setAttribute("href", cleaned);
        } else {
          a.removeAttribute("href");
        }
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      } else {
        a.removeAttribute("href");
      }
    });
    el.querySelectorAll('button, input[type="submit"], input[type="button"], input[type="reset"]').forEach((btn) => {
      btn.setAttribute("data-cw-disabled", "true");
      btn.setAttribute("disabled", "true");
    });
    el.querySelectorAll('input:not([type="submit"]):not([type="button"]):not([type="reset"]), textarea, select').forEach((input) => {
      input.setAttribute("data-cw-disabled", "true");
      input.setAttribute("disabled", "true");
    });
    el.querySelectorAll("*").forEach((e) => {
      const html = e;
      html.removeAttribute("onclick");
      html.removeAttribute("onmouseover");
      html.removeAttribute("onmouseout");
      html.removeAttribute("onchange");
      html.removeAttribute("onsubmit");
      const style = html.getAttribute("style") || "";
      if (style && !style.includes("display") && !style.includes("visibility")) {
        html.removeAttribute("style");
      }
    });
  }
  function cleanFullMode(el, baseUrl) {
    el.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("http") || href.startsWith("/") || href.startsWith("#")) {
        const cleaned = stripTrackingFromUrl(href, baseUrl);
        if (cleaned) {
          a.setAttribute("href", cleaned);
        } else {
          a.removeAttribute("href");
        }
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      } else {
        a.removeAttribute("href");
      }
    });
    el.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || "";
      if (src.startsWith("javascript:") || src.startsWith("data:text/html")) {
        img.remove();
      } else {
        const cleaned = stripTrackingFromUrl(src, baseUrl);
        if (cleaned) {
          img.setAttribute("src", cleaned);
        }
      }
    });
    el.querySelectorAll("video, audio").forEach((media) => {
      media.removeAttribute("autoplay");
      media.removeAttribute("autoplay");
      const sources = media.querySelectorAll("source");
      sources.forEach((source) => {
        const src = source.getAttribute("src") || "";
        if (src.startsWith("javascript:")) {
          source.remove();
        }
      });
    });
    el.querySelectorAll("iframe").forEach((iframe) => {
      const src = iframe.getAttribute("src") || "";
      if (src.startsWith("javascript:")) {
        iframe.remove();
      } else if (!src.startsWith("http") && !src.startsWith("/")) {
        iframe.remove();
      }
    });
    el.querySelectorAll("form").forEach((form) => {
      form.setAttribute("data-cw-form-disabled", "true");
      form.addEventListener("submit", (e) => e.preventDefault(), { once: true });
    });
    el.querySelectorAll("*").forEach((e) => {
      const html = e;
      html.removeAttribute("onclick");
      html.removeAttribute("onmouseover");
      html.removeAttribute("onmouseout");
      html.removeAttribute("onchange");
      html.removeAttribute("onsubmit");
      html.removeAttribute("onfocus");
      html.removeAttribute("onblur");
      html.removeAttribute("onload");
      html.removeAttribute("onerror");
      const style = html.getAttribute("style") || "";
      if (style && (style.includes("expression") || style.includes("behavior") || style.includes("javascript:"))) {
        html.removeAttribute("style");
      }
      html.removeAttribute("id");
    });
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
  const defaultLayout = {
    id: "default",
    name: "Default",
    description: "Preserves original content structure",
    render(article, container, _options = {}, extras = {}) {
      const headerEl = extras.header || container.closest(".cw-overlay")?.querySelector(".cw-article-header");
      const footerEl = extras.footer || container.closest(".cw-overlay")?.querySelector(".cw-footer");
      if (headerEl) {
        headerEl.innerHTML = `
        <h1 class="cw-title-main">${escapeHtml$1(article.title)}</h1>
        <div class="cw-meta">
          ${article.author ? `<span class="cw-meta-item">${escapeHtml$1(article.author)}</span>` : ""}
          ${article.author && article.date ? '<span class="cw-meta-sep"></span>' : ""}
          ${article.date ? `<span class="cw-meta-item">${escapeHtml$1(article.date)}</span>` : ""}
          ${article.source ? `<span class="cw-meta-sep"></span><span class="cw-meta-item">${escapeHtml$1(article.source)}</span>` : ""}
        </div>
      `;
      }
      if (footerEl) {
        footerEl.innerHTML = `
        <a href="${escapeHtml$1(article.url)}" class="cw-source" target="_blank" rel="noopener noreferrer">
          ${article.favicon ? `<img class="cw-favicon" src="${escapeHtml$1(article.favicon)}" alt="">` : ""}
          <span>View Original</span>
        </a>
      `;
      }
      container.innerHTML = `<article class="cw-content">${article.contentHtml.innerHTML}</article>`;
    }
  };
  function getLayout(_id) {
    return defaultLayout;
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var browserPolyfill$3 = { exports: {} };
  var browserPolyfill$2 = browserPolyfill$3.exports;
  var hasRequiredBrowserPolyfill$1;
  function requireBrowserPolyfill$1() {
    if (hasRequiredBrowserPolyfill$1) return browserPolyfill$3.exports;
    hasRequiredBrowserPolyfill$1 = 1;
    (function(module, exports$1) {
      (function(global, factory) {
        {
          factory(module);
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : browserPolyfill$2, function(module2) {
        if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result2;
                try {
                  result2 = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result2 = Promise.reject(err);
                }
                const isResultThenable = result2 !== true && isThenable(result2);
                if (result2 !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result2);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    })(browserPolyfill$3);
    return browserPolyfill$3.exports;
  }
  var browserPolyfillExports$1 = requireBrowserPolyfill$1();
  const browser$2 = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports$1);
  const warnedDeprecations = /* @__PURE__ */ new Set();
  function warnDeprecatedProductRoute(methodName, route) {
    const key = `${methodName}:${route}`;
    if (warnedDeprecations.has(key))
      return;
    warnedDeprecations.add(key);
    console.warn(`[wxt-shared] ${methodName}() is deprecated. ${route} is a legacy migration route. Prefer the canonical platform endpoints under /api/v1/auth, /api/v1/billing, and /api/v1/chat/completions.`);
  }
  function createApiClient(options) {
    const { config: config2, getAuth, setAuth, onAuthError } = options;
    async function getAuthState() {
      const auth = await getAuth();
      return {
        isAuthenticated: !!auth.accessToken,
        user: auth.user,
        token: auth.accessToken,
        subscription: auth.subscription
      };
    }
    async function isAuthenticated() {
      const state = await getAuthState();
      return state.isAuthenticated;
    }
    async function refreshTokens() {
      const auth = await getAuth();
      if (!auth.refreshToken)
        return false;
      try {
        const response = await fetch(`${config2.apiUrl}/api/v1/auth/refresh`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include"
          // Include refresh_token cookie
        });
        if (!response.ok)
          throw new Error("Refresh failed");
        const data = await response.json();
        await setAuth({
          ...auth,
          accessToken: data.session_token || data.access_token,
          refreshToken: data.refresh_token || auth.refreshToken
        });
        return true;
      } catch (e) {
        console.error("[API] Token refresh failed:", e);
        return false;
      }
    }
    async function performRequest(endpoint, opts = {}, isRetry = false) {
      const { method = "GET", body, headers: customHeaders, skipAuth } = opts;
      const headers = {
        "Content-Type": "application/json",
        ...customHeaders
      };
      if (!skipAuth) {
        const { token, isAuthenticated: authed } = await getAuthState();
        if (!authed) {
          throw new Error("Authentication required. Please log in.");
        }
        headers["Authorization"] = `Bearer ${token}`;
      }
      const finalBody = method !== "GET" && body ? JSON.stringify(body) : void 0;
      let url = endpoint.startsWith("http") ? endpoint : `${config2.apiUrl}${endpoint}`;
      url = url.replace(/([^:])\/\/+/g, "$1/");
      const response = await fetch(url, {
        method,
        headers,
        body: finalBody,
        credentials: "include"
      });
      if (response.status === 401 || response.status === 403) {
        const { token } = await getAuthState();
        if (token?.startsWith("dem-") || isRetry) {
          onAuthError?.();
          throw new Error(`Authentication failed (${response.status}).`);
        }
        const refreshed = await refreshTokens();
        if (refreshed) {
          return performRequest(endpoint, opts, true);
        }
        onAuthError?.();
        throw new Error(`Session expired. Please log in again.`);
      }
      if (!response.ok) {
        const errorText = await response.text();
        if (errorText.includes("<!DOCTYPE html>") || errorText.includes("<html")) {
          console.error(`[API] Received HTML error from ${url}. Status: ${response.status}`);
          throw new Error(`Cloud connection interrupted (Status ${response.status}). Please check your API URL.`);
        }
        throw new Error(errorText || `API error: ${response.status}`);
      }
      return response.json();
    }
    async function request(endpoint, opts = {}) {
      const isContentScript = typeof window !== "undefined" && (window.location.protocol === "http:" || window.location.protocol === "https:");
      if (isContentScript) {
        try {
          const response = await browser$2.runtime.sendMessage({
            type: "apiProxyRequest",
            endpoint,
            ...opts
          });
          if (response && typeof response === "object" && "error" in response) {
            throw new Error(response.error);
          }
          return response;
        } catch (error) {
          console.error("[API] Proxy request failed:", error);
          throw error;
        }
      }
      return performRequest(endpoint, opts);
    }
    async function get(endpoint, headers) {
      return request(endpoint, { method: "GET", headers });
    }
    async function post(endpoint, body, headers) {
      return request(endpoint, { method: "POST", body, headers });
    }
    async function put(endpoint, body, headers) {
      return request(endpoint, { method: "PUT", body, headers });
    }
    async function del(endpoint, headers) {
      return request(endpoint, { method: "DELETE", headers });
    }
    async function getUser() {
      return request("/api/v1/user", { method: "GET" });
    }
    async function addQuota(amount) {
      return post("/api/v1/billing/checkout", { quota: amount });
    }
    async function getQuota() {
      return request("/api/v1/billing/quota", { method: "GET" });
    }
    async function chatCompletions(payload) {
      return post("/api/v1/chat/completions", payload);
    }
    async function productChatCompletions(productSlug, payload) {
      warnDeprecatedProductRoute("productChatCompletions", `/api/v1/products/${productSlug}/chat/completions`);
      return post(`/api/v1/products/${productSlug}/chat/completions`, payload);
    }
    async function productSubscribe(productSlug, priceId) {
      warnDeprecatedProductRoute("productSubscribe", `/api/v1/products/${productSlug}/subscribe`);
      return post(`/api/v1/products/${productSlug}/subscribe`, { price_id: priceId });
    }
    async function getProductUser(productSlug) {
      warnDeprecatedProductRoute("getProductUser", `/api/v1/products/${productSlug}/user`);
      return request(`/api/v1/products/${productSlug}/user`, { method: "GET" });
    }
    return {
      // Core
      request,
      performRequest,
      // Direct request without proxy
      getAuthState,
      isAuthenticated,
      refreshTokens,
      // HTTP methods
      get,
      post,
      put,
      del,
      // Canonical platform operations
      getUser,
      addQuota,
      getQuota,
      chatCompletions,
      productChatCompletions,
      productSubscribe,
      getProductUser
    };
  }
  const __vite_import_meta_env__ = {};
  const API_URLS = {
    local: {
      dracon: "http://localhost:8080",
      api: "http://localhost:8080"
    },
    stage: {
      dracon: "https://stage.dracon.uk",
      api: "https://stage.dracon.uk"
    },
    prod: {
      dracon: "https://dracon.uk",
      api: "https://dracon.uk"
    }
  };
  function parseEnvironment(value) {
    if (value === "local" || value === "stage" || value === "prod") {
      return value;
    }
    return void 0;
  }
  function detectEnvironment() {
    if (typeof window !== "undefined") {
      const protocol = window.location.protocol;
      if (protocol !== "http:" && protocol !== "https:") {
        return void 0;
      }
      const hostname = window.location.hostname;
      if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.includes("local")) {
        return "local";
      }
      if (hostname.includes("stage.") || hostname.includes("staging.")) {
        return "stage";
      }
      if (hostname === "dracon.uk" || hostname.endsWith(".dracon.uk")) {
        return hostname.startsWith("stage.") ? "stage" : "prod";
      }
    }
    return void 0;
  }
  function createConfig(options) {
    const envFromImportMeta = parseEnvironment(__vite_import_meta_env__?.VITE_APP_ENV);
    const detectedEnv = options.autoDetectEnv !== false ? detectEnvironment() : void 0;
    const env = options.env ?? envFromImportMeta ?? detectedEnv ?? options.defaultEnv ?? "prod";
    if (__vite_import_meta_env__?.VITE_APP_ENV && !envFromImportMeta) {
      console.warn(`[${options.appName}] Invalid VITE_APP_ENV="${void 0}", falling back to "${env}"`);
    }
    const urls = API_URLS[env];
    if (options.debug || __vite_import_meta_env__?.WXT_DEBUG === "true") {
      console.log(`[${options.appName}] Config:`, { env, draconUrl: urls.dracon, apiUrl: urls.api });
    }
    const draconUrl = options.customDraconUrl || __vite_import_meta_env__?.WXT_DRACON_URL || urls.dracon;
    const apiUrl = options.customApiUrl || __vite_import_meta_env__?.WXT_API_URL || urls.api;
    try {
      new URL(draconUrl);
      new URL(apiUrl);
    } catch {
      console.warn(`[${options.appName}] Invalid URL configuration:`, { draconUrl, apiUrl });
    }
    const debug = options.debug || __vite_import_meta_env__?.WXT_DEBUG === "true";
    return {
      draconUrl,
      apiUrl,
      env,
      appName: options.appName,
      debug,
      auth: {
        googleEndpoint: "/api/v1/auth/login/google",
        loginEndpoint: "/api/v1/auth/login",
        refreshEndpoint: "/api/v1/auth/refresh",
        userInfoEndpoint: "/api/v1/auth/token/user_info"
      }
    };
  }
  const browser$1 = globalThis.browser?.runtime?.id ? globalThis.browser : globalThis.chrome;
  const E_CANCELED = new Error("request for lock canceled");
  var __awaiter$2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result2) {
        result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  class Semaphore {
    constructor(_value, _cancelError = E_CANCELED) {
      this._value = _value;
      this._cancelError = _cancelError;
      this._queue = [];
      this._weightedWaiters = [];
    }
    acquire(weight = 1, priority = 0) {
      if (weight <= 0)
        throw new Error(`invalid weight ${weight}: must be positive`);
      return new Promise((resolve, reject) => {
        const task = { resolve, reject, weight, priority };
        const i = findIndexFromEnd(this._queue, (other) => priority <= other.priority);
        if (i === -1 && weight <= this._value) {
          this._dispatchItem(task);
        } else {
          this._queue.splice(i + 1, 0, task);
        }
      });
    }
    runExclusive(callback_1) {
      return __awaiter$2(this, arguments, void 0, function* (callback, weight = 1, priority = 0) {
        const [value, release] = yield this.acquire(weight, priority);
        try {
          return yield callback(value);
        } finally {
          release();
        }
      });
    }
    waitForUnlock(weight = 1, priority = 0) {
      if (weight <= 0)
        throw new Error(`invalid weight ${weight}: must be positive`);
      if (this._couldLockImmediately(weight, priority)) {
        return Promise.resolve();
      } else {
        return new Promise((resolve) => {
          if (!this._weightedWaiters[weight - 1])
            this._weightedWaiters[weight - 1] = [];
          insertSorted(this._weightedWaiters[weight - 1], { resolve, priority });
        });
      }
    }
    isLocked() {
      return this._value <= 0;
    }
    getValue() {
      return this._value;
    }
    setValue(value) {
      this._value = value;
      this._dispatchQueue();
    }
    release(weight = 1) {
      if (weight <= 0)
        throw new Error(`invalid weight ${weight}: must be positive`);
      this._value += weight;
      this._dispatchQueue();
    }
    cancel() {
      this._queue.forEach((entry) => entry.reject(this._cancelError));
      this._queue = [];
    }
    _dispatchQueue() {
      this._drainUnlockWaiters();
      while (this._queue.length > 0 && this._queue[0].weight <= this._value) {
        this._dispatchItem(this._queue.shift());
        this._drainUnlockWaiters();
      }
    }
    _dispatchItem(item) {
      const previousValue = this._value;
      this._value -= item.weight;
      item.resolve([previousValue, this._newReleaser(item.weight)]);
    }
    _newReleaser(weight) {
      let called = false;
      return () => {
        if (called)
          return;
        called = true;
        this.release(weight);
      };
    }
    _drainUnlockWaiters() {
      if (this._queue.length === 0) {
        for (let weight = this._value; weight > 0; weight--) {
          const waiters = this._weightedWaiters[weight - 1];
          if (!waiters)
            continue;
          waiters.forEach((waiter) => waiter.resolve());
          this._weightedWaiters[weight - 1] = [];
        }
      } else {
        const queuedPriority = this._queue[0].priority;
        for (let weight = this._value; weight > 0; weight--) {
          const waiters = this._weightedWaiters[weight - 1];
          if (!waiters)
            continue;
          const i = waiters.findIndex((waiter) => waiter.priority <= queuedPriority);
          (i === -1 ? waiters : waiters.splice(0, i)).forEach(((waiter) => waiter.resolve()));
        }
      }
    }
    _couldLockImmediately(weight, priority) {
      return (this._queue.length === 0 || this._queue[0].priority < priority) && weight <= this._value;
    }
  }
  function insertSorted(a, v) {
    const i = findIndexFromEnd(a, (other) => v.priority <= other.priority);
    a.splice(i + 1, 0, v);
  }
  function findIndexFromEnd(a, predicate) {
    for (let i = a.length - 1; i >= 0; i--) {
      if (predicate(a[i])) {
        return i;
      }
    }
    return -1;
  }
  var __awaiter$1 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result2) {
        result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  class Mutex {
    constructor(cancelError) {
      this._semaphore = new Semaphore(1, cancelError);
    }
    acquire() {
      return __awaiter$1(this, arguments, void 0, function* (priority = 0) {
        const [, releaser] = yield this._semaphore.acquire(1, priority);
        return releaser;
      });
    }
    runExclusive(callback, priority = 0) {
      return this._semaphore.runExclusive(() => callback(), 1, priority);
    }
    isLocked() {
      return this._semaphore.isLocked();
    }
    waitForUnlock(priority = 0) {
      return this._semaphore.waitForUnlock(1, priority);
    }
    release() {
      if (this._semaphore.isLocked())
        this._semaphore.release();
    }
    cancel() {
      return this._semaphore.cancel();
    }
  }
  var has = Object.prototype.hasOwnProperty;
  function dequal(foo, bar) {
    var ctor, len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
      if (ctor === Date) return foo.getTime() === bar.getTime();
      if (ctor === RegExp) return foo.toString() === bar.toString();
      if (ctor === Array) {
        if ((len = foo.length) === bar.length) {
          while (len-- && dequal(foo[len], bar[len])) ;
        }
        return len === -1;
      }
      if (!ctor || typeof foo === "object") {
        len = 0;
        for (ctor in foo) {
          if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
          if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
        }
        return Object.keys(bar).length === len;
      }
    }
    return foo !== foo && bar !== bar;
  }
  const storage = createStorage();
  function createStorage() {
    const drivers = {
      local: createDriver("local"),
      session: createDriver("session"),
      sync: createDriver("sync"),
      managed: createDriver("managed")
    };
    const getDriver = (area) => {
      const driver = drivers[area];
      if (driver == null) {
        const areaNames = Object.keys(drivers).join(", ");
        throw Error(`Invalid area "${area}". Options: ${areaNames}`);
      }
      return driver;
    };
    const resolveKey = (key) => {
      const deliminatorIndex = key.indexOf(":");
      const driverArea = key.substring(0, deliminatorIndex);
      const driverKey = key.substring(deliminatorIndex + 1);
      if (driverKey == null) throw Error(`Storage key should be in the form of "area:key", but received "${key}"`);
      return {
        driverArea,
        driverKey,
        driver: getDriver(driverArea)
      };
    };
    const getMetaKey = (key) => key + "$";
    const mergeMeta = (oldMeta, newMeta) => {
      const newFields = { ...oldMeta };
      Object.entries(newMeta).forEach(([key, value]) => {
        if (value == null) delete newFields[key];
        else newFields[key] = value;
      });
      return newFields;
    };
    const getValueOrFallback = (value, fallback) => value ?? fallback ?? null;
    const getMetaValue = (properties) => typeof properties === "object" && !Array.isArray(properties) ? properties : {};
    const getItem = async (driver, driverKey, opts) => {
      return getValueOrFallback(await driver.getItem(driverKey), opts?.fallback ?? opts?.defaultValue);
    };
    const getMeta = async (driver, driverKey) => {
      const metaKey = getMetaKey(driverKey);
      return getMetaValue(await driver.getItem(metaKey));
    };
    const setItem = async (driver, driverKey, value) => {
      await driver.setItem(driverKey, value ?? null);
    };
    const setMeta = async (driver, driverKey, properties) => {
      const metaKey = getMetaKey(driverKey);
      const existingFields = getMetaValue(await driver.getItem(metaKey));
      await driver.setItem(metaKey, mergeMeta(existingFields, properties));
    };
    const removeItem = async (driver, driverKey, opts) => {
      await driver.removeItem(driverKey);
      if (opts?.removeMeta) {
        const metaKey = getMetaKey(driverKey);
        await driver.removeItem(metaKey);
      }
    };
    const removeMeta = async (driver, driverKey, properties) => {
      const metaKey = getMetaKey(driverKey);
      if (properties == null) await driver.removeItem(metaKey);
      else {
        const newFields = getMetaValue(await driver.getItem(metaKey));
        [properties].flat().forEach((field) => delete newFields[field]);
        await driver.setItem(metaKey, newFields);
      }
    };
    const watch = (driver, driverKey, cb) => driver.watch(driverKey, cb);
    return {
      getItem: async (key, opts) => {
        const { driver, driverKey } = resolveKey(key);
        return await getItem(driver, driverKey, opts);
      },
      getItems: async (keys) => {
        const areaToKeyMap = /* @__PURE__ */ new Map();
        const keyToOptsMap = /* @__PURE__ */ new Map();
        const orderedKeys = [];
        keys.forEach((key) => {
          let keyStr;
          let opts;
          if (typeof key === "string") keyStr = key;
          else if ("getValue" in key) {
            keyStr = key.key;
            opts = { fallback: key.fallback };
          } else {
            keyStr = key.key;
            opts = key.options;
          }
          orderedKeys.push(keyStr);
          const { driverArea, driverKey } = resolveKey(keyStr);
          const areaKeys = areaToKeyMap.get(driverArea) ?? [];
          areaToKeyMap.set(driverArea, areaKeys.concat(driverKey));
          keyToOptsMap.set(keyStr, opts);
        });
        const resultsMap = /* @__PURE__ */ new Map();
        await Promise.all(Array.from(areaToKeyMap.entries()).map(async ([driverArea, keys2]) => {
          (await drivers[driverArea].getItems(keys2)).forEach((driverResult) => {
            const key = `${driverArea}:${driverResult.key}`;
            const opts = keyToOptsMap.get(key);
            const value = getValueOrFallback(driverResult.value, opts?.fallback ?? opts?.defaultValue);
            resultsMap.set(key, value);
          });
        }));
        return orderedKeys.map((key) => ({
          key,
          value: resultsMap.get(key)
        }));
      },
      getMeta: async (key) => {
        const { driver, driverKey } = resolveKey(key);
        return await getMeta(driver, driverKey);
      },
      getMetas: async (args) => {
        const keys = args.map((arg) => {
          const key = typeof arg === "string" ? arg : arg.key;
          const { driverArea, driverKey } = resolveKey(key);
          return {
            key,
            driverArea,
            driverKey,
            driverMetaKey: getMetaKey(driverKey)
          };
        });
        const areaToDriverMetaKeysMap = keys.reduce((map, key) => {
          map[key.driverArea] ??= [];
          map[key.driverArea].push(key);
          return map;
        }, {});
        const resultsMap = {};
        await Promise.all(Object.entries(areaToDriverMetaKeysMap).map(async ([area, keys2]) => {
          const areaRes = await browser$1.storage[area].get(keys2.map((key) => key.driverMetaKey));
          keys2.forEach((key) => {
            resultsMap[key.key] = areaRes[key.driverMetaKey] ?? {};
          });
        }));
        return keys.map((key) => ({
          key: key.key,
          meta: resultsMap[key.key]
        }));
      },
      setItem: async (key, value) => {
        const { driver, driverKey } = resolveKey(key);
        await setItem(driver, driverKey, value);
      },
      setItems: async (items) => {
        const areaToKeyValueMap = {};
        items.forEach((item) => {
          const { driverArea, driverKey } = resolveKey("key" in item ? item.key : item.item.key);
          areaToKeyValueMap[driverArea] ??= [];
          areaToKeyValueMap[driverArea].push({
            key: driverKey,
            value: item.value
          });
        });
        await Promise.all(Object.entries(areaToKeyValueMap).map(async ([driverArea, values]) => {
          await getDriver(driverArea).setItems(values);
        }));
      },
      setMeta: async (key, properties) => {
        const { driver, driverKey } = resolveKey(key);
        await setMeta(driver, driverKey, properties);
      },
      setMetas: async (items) => {
        const areaToMetaUpdatesMap = {};
        items.forEach((item) => {
          const { driverArea, driverKey } = resolveKey("key" in item ? item.key : item.item.key);
          areaToMetaUpdatesMap[driverArea] ??= [];
          areaToMetaUpdatesMap[driverArea].push({
            key: driverKey,
            properties: item.meta
          });
        });
        await Promise.all(Object.entries(areaToMetaUpdatesMap).map(async ([storageArea, updates]) => {
          const driver = getDriver(storageArea);
          const metaKeys = updates.map(({ key }) => getMetaKey(key));
          const existingMetas = await driver.getItems(metaKeys);
          const existingMetaMap = Object.fromEntries(existingMetas.map(({ key, value }) => [key, getMetaValue(value)]));
          const metaUpdates = updates.map(({ key, properties }) => {
            const metaKey = getMetaKey(key);
            return {
              key: metaKey,
              value: mergeMeta(existingMetaMap[metaKey] ?? {}, properties)
            };
          });
          await driver.setItems(metaUpdates);
        }));
      },
      removeItem: async (key, opts) => {
        const { driver, driverKey } = resolveKey(key);
        await removeItem(driver, driverKey, opts);
      },
      removeItems: async (keys) => {
        const areaToKeysMap = {};
        keys.forEach((key) => {
          let keyStr;
          let opts;
          if (typeof key === "string") keyStr = key;
          else if ("getValue" in key) keyStr = key.key;
          else if ("item" in key) {
            keyStr = key.item.key;
            opts = key.options;
          } else {
            keyStr = key.key;
            opts = key.options;
          }
          const { driverArea, driverKey } = resolveKey(keyStr);
          areaToKeysMap[driverArea] ??= [];
          areaToKeysMap[driverArea].push(driverKey);
          if (opts?.removeMeta) areaToKeysMap[driverArea].push(getMetaKey(driverKey));
        });
        await Promise.all(Object.entries(areaToKeysMap).map(async ([driverArea, keys2]) => {
          await getDriver(driverArea).removeItems(keys2);
        }));
      },
      clear: async (base) => {
        await getDriver(base).clear();
      },
      removeMeta: async (key, properties) => {
        const { driver, driverKey } = resolveKey(key);
        await removeMeta(driver, driverKey, properties);
      },
      snapshot: async (base, opts) => {
        const data = await getDriver(base).snapshot();
        opts?.excludeKeys?.forEach((key) => {
          delete data[key];
          delete data[getMetaKey(key)];
        });
        return data;
      },
      restoreSnapshot: async (base, data) => {
        await getDriver(base).restoreSnapshot(data);
      },
      watch: (key, cb) => {
        const { driver, driverKey } = resolveKey(key);
        return watch(driver, driverKey, cb);
      },
      unwatch() {
        Object.values(drivers).forEach((driver) => {
          driver.unwatch();
        });
      },
      defineItem: (key, opts) => {
        const { driver, driverKey } = resolveKey(key);
        const { version: targetVersion = 1, migrations = {}, onMigrationComplete, debug = false } = opts ?? {};
        if (targetVersion < 1) throw Error("Storage item version cannot be less than 1. Initial versions should be set to 1, not 0.");
        let needsVersionSet = false;
        const migrate = async () => {
          const driverMetaKey = getMetaKey(driverKey);
          const [{ value }, { value: meta }] = await driver.getItems([driverKey, driverMetaKey]);
          needsVersionSet = value == null && meta?.v == null && !!targetVersion;
          if (value == null) return;
          const currentVersion = meta?.v ?? 1;
          if (currentVersion > targetVersion) throw Error(`Version downgrade detected (v${currentVersion} -> v${targetVersion}) for "${key}"`);
          if (currentVersion === targetVersion) return;
          if (debug) console.debug(`[@wxt-dev/storage] Running storage migration for ${key}: v${currentVersion} -> v${targetVersion}`);
          const migrationsToRun = Array.from({ length: targetVersion - currentVersion }, (_, i) => currentVersion + i + 1);
          let migratedValue = value;
          for (const migrateToVersion of migrationsToRun) try {
            migratedValue = await migrations?.[migrateToVersion]?.(migratedValue) ?? migratedValue;
            if (debug) console.debug(`[@wxt-dev/storage] Storage migration processed for version: v${migrateToVersion}`);
          } catch (err) {
            throw new MigrationError(key, migrateToVersion, { cause: err });
          }
          await driver.setItems([{
            key: driverKey,
            value: migratedValue
          }, {
            key: driverMetaKey,
            value: {
              ...meta,
              v: targetVersion
            }
          }]);
          if (debug) console.debug(`[@wxt-dev/storage] Storage migration completed for ${key} v${targetVersion}`, { migratedValue });
          onMigrationComplete?.(migratedValue, targetVersion);
        };
        const migrationsDone = opts?.migrations == null ? Promise.resolve() : migrate().catch((err) => {
          console.error(`[@wxt-dev/storage] Migration failed for ${key}`, err);
        });
        const initMutex = new Mutex();
        const getFallback = () => opts?.fallback ?? opts?.defaultValue ?? null;
        const getOrInitValue = () => initMutex.runExclusive(async () => {
          const value = await driver.getItem(driverKey);
          if (value != null || opts?.init == null) return value;
          const newValue = await opts.init();
          await driver.setItem(driverKey, newValue);
          if (value == null && targetVersion > 1) await setMeta(driver, driverKey, { v: targetVersion });
          return newValue;
        });
        migrationsDone.then(getOrInitValue);
        return {
          key,
          get defaultValue() {
            return getFallback();
          },
          get fallback() {
            return getFallback();
          },
          getValue: async () => {
            await migrationsDone;
            if (opts?.init) return await getOrInitValue();
            else return await getItem(driver, driverKey, opts);
          },
          getMeta: async () => {
            await migrationsDone;
            return await getMeta(driver, driverKey);
          },
          setValue: async (value) => {
            await migrationsDone;
            if (needsVersionSet) {
              needsVersionSet = false;
              await Promise.all([setItem(driver, driverKey, value), setMeta(driver, driverKey, { v: targetVersion })]);
            } else await setItem(driver, driverKey, value);
          },
          setMeta: async (properties) => {
            await migrationsDone;
            return await setMeta(driver, driverKey, properties);
          },
          removeValue: async (opts2) => {
            await migrationsDone;
            return await removeItem(driver, driverKey, opts2);
          },
          removeMeta: async (properties) => {
            await migrationsDone;
            return await removeMeta(driver, driverKey, properties);
          },
          watch: (cb) => watch(driver, driverKey, (newValue, oldValue) => cb(newValue ?? getFallback(), oldValue ?? getFallback())),
          migrate
        };
      }
    };
  }
  function createDriver(storageArea) {
    const getStorageArea = () => {
      if (browser$1.runtime == null) throw Error(`'wxt/storage' must be loaded in a web extension environment

 - If thrown during a build, see https://github.com/wxt-dev/wxt/issues/371
 - If thrown during tests, mock 'wxt/browser' correctly. See https://wxt.dev/guide/go-further/testing.html
`);
      if (browser$1.storage == null) throw Error("You must add the 'storage' permission to your manifest to use 'wxt/storage'");
      const area = browser$1.storage[storageArea];
      if (area == null) throw Error(`"browser.storage.${storageArea}" is undefined`);
      return area;
    };
    const watchListeners = /* @__PURE__ */ new Set();
    return {
      getItem: async (key) => {
        return (await getStorageArea().get(key))[key];
      },
      getItems: async (keys) => {
        const result2 = await getStorageArea().get(keys);
        return keys.map((key) => ({
          key,
          value: result2[key] ?? null
        }));
      },
      setItem: async (key, value) => {
        if (value == null) await getStorageArea().remove(key);
        else await getStorageArea().set({ [key]: value });
      },
      setItems: async (values) => {
        const map = values.reduce((map2, { key, value }) => {
          map2[key] = value;
          return map2;
        }, {});
        await getStorageArea().set(map);
      },
      removeItem: async (key) => {
        await getStorageArea().remove(key);
      },
      removeItems: async (keys) => {
        await getStorageArea().remove(keys);
      },
      clear: async () => {
        await getStorageArea().clear();
      },
      snapshot: async () => {
        return await getStorageArea().get();
      },
      restoreSnapshot: async (data) => {
        await getStorageArea().set(data);
      },
      watch(key, cb) {
        const listener = (changes) => {
          const change = changes[key];
          if (change == null || dequal(change.newValue, change.oldValue)) return;
          cb(change.newValue ?? null, change.oldValue ?? null);
        };
        getStorageArea().onChanged.addListener(listener);
        watchListeners.add(listener);
        return () => {
          getStorageArea().onChanged.removeListener(listener);
          watchListeners.delete(listener);
        };
      },
      unwatch() {
        watchListeners.forEach((listener) => {
          getStorageArea().onChanged.removeListener(listener);
        });
        watchListeners.clear();
      }
    };
  }
  var MigrationError = class extends Error {
    constructor(key, version, options) {
      super(`v${version} migration failed for "${key}"`, options);
      this.key = key;
      this.version = version;
    }
  };
  const defaultAuthStore = {
    accessToken: "",
    refreshToken: "",
    user: null,
    subscription: null
  };
  function createAuthStore(key = "sync:auth") {
    return storage.defineItem(key, {
      fallback: defaultAuthStore
    });
  }
  const READER_SYSTEM_PROMPT = `You are a web page analyzer for CalmWeb, a browser extension that helps users read web pages more comfortably. Your task is to analyze the provided web page content and return a JSON response indicating what content should be kept, removed, or summarized.

Return a JSON object with this exact structure:
{
  "title": "improved or confirmed page title",
  "summary": "2-3 sentence summary of the main content",
  "filteredContent": "the cleaned main content with ads, navigation, and irrelevant elements removed",
  "confidence": 0.0-1.0 indicating how confident you are in the analysis,
  "decisions": [
    {"action": "keep"|"remove"|"summarize", "reason": "explanation"}
  ]
}

Rules:
- Keep the main article/story/content body
- Remove: ads, navigation menus, headers, footers, sidebars, comments (unless they add value), cookie notices, popups
- Summarize: long discussions, comment threads, nested replies
- Preserve: headings, paragraphs, lists, code blocks, images with alt text, links
- filteredContent should be plain text content, not raw HTML
- confidence should be lower for very messy/complex pages or pages with unusual structures`;
  let apiClient = null;
  let config = null;
  function getApiClient() {
    if (apiClient) return apiClient;
    try {
      config = createConfig({
        appName: "CalmWeb"
      });
      const authStore = createAuthStore("sync:auth");
      apiClient = createApiClient({
        config,
        getAuth: () => authStore.getValue(),
        setAuth: (auth) => authStore.setValue(auth),
        onAuthError: () => {
          console.log("[CalmWeb] Auth error - user needs to log in");
        }
      });
      return apiClient;
    } catch (err) {
      console.error("[CalmWeb] Failed to initialize API client:", err);
      return null;
    }
  }
  async function analyzePageWithBackend(request) {
    const client = getApiClient();
    if (!client) {
      return fallbackResponse(request, "API client not available");
    }
    try {
      const quota = await getQuotaInfo();
      if (!quota.isPaidUser || quota.remaining <= 0) {
        return fallbackResponse(
          request,
          quota.isPaidUser ? "No analyses remaining. Upgrade for unlimited access." : "AI analysis requires a subscription."
        );
      }
      const pageContext = `Page URL: ${request.url}
Page Title: ${request.title}

Page Content:
${request.text}`;
      const completion = await client.chatCompletions({
        messages: [
          { role: "system", content: READER_SYSTEM_PROMPT },
          { role: "user", content: pageContext }
        ],
        stream: false
      });
      const content = completion.choices[0]?.message?.content || "";
      return parseReaderResponse(content, request.title);
    } catch (err) {
      console.error("[CalmWeb] API analysis failed:", err);
      return fallbackResponse(request, err.message || "Analysis failed");
    }
  }
  function parseReaderResponse(content, fallbackTitle) {
    const trimmed = content.trim();
    let jsonStr = trimmed;
    const codeBlockMatch = trimmed.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
    if (codeBlockMatch) {
      jsonStr = codeBlockMatch[1];
    }
    const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0]);
        return {
          success: true,
          title: parsed.title || fallbackTitle,
          summary: parsed.summary || "",
          filteredContent: parsed.filteredContent || "",
          confidence: parsed.confidence ?? 0.5,
          decisions: Array.isArray(parsed.decisions) ? parsed.decisions : [],
          error: void 0
        };
      } catch {
      }
    }
    return {
      success: false,
      title: fallbackTitle,
      summary: "",
      filteredContent: trimmed.slice(0, 1e4),
      confidence: 0,
      decisions: [],
      error: "Failed to parse AI response as JSON"
    };
  }
  function fallbackResponse(request, error) {
    return {
      success: false,
      title: request.title,
      summary: "",
      filteredContent: request.text.slice(0, 1e4),
      confidence: 0,
      decisions: [],
      error
    };
  }
  async function getQuotaInfo() {
    const client = getApiClient();
    if (!client) {
      return { total: 0, used: 0, remaining: 0, isPaidUser: false };
    }
    try {
      const [userResponse, quotaResponse] = await Promise.all([
        client.getUser(),
        client.getQuota()
      ]);
      const isPaidUser = userResponse.subscription?.active || false;
      const remaining = isPaidUser ? quotaResponse.remaining : 0;
      return {
        total: quotaResponse.total,
        used: quotaResponse.used,
        remaining,
        isPaidUser
      };
    } catch (err) {
      console.error("[CalmWeb] Failed to get quota:", err);
      return { total: 0, used: 0, remaining: 0, isPaidUser: false };
    }
  }
  const HOST_ID = "calmweb-reader-host";
  async function openReader(options = {}) {
    document.body.style.setProperty("overflow", "hidden", "important");
    closeReader();
    const mode = options.mode || "full";
    let article = null;
    let apiResult = null;
    const quota = await getQuotaInfo();
    console.log("[CalmWeb] Quota check:", quota.isPaidUser ? "Paid user" : "Free user", "- Remaining:", quota.remaining);
    if (quota.isPaidUser && quota.remaining > 0) {
      console.log("[CalmWeb] Using AI-powered analysis...");
      try {
        apiResult = await analyzePageWithBackend({
          title: document.title,
          url: window.location.href,
          html: document.body?.innerHTML?.slice(0, 15e3) || "",
          text: document.body?.textContent?.slice(0, 8e3) || ""
        });
        if (apiResult.success) {
          console.log("[CalmWeb] API analysis succeeded");
        } else {
          console.log("[CalmWeb] API analysis failed:", apiResult.error);
        }
      } catch (err) {
        console.error("[CalmWeb] API analysis error:", err);
      }
    } else {
      console.log("[CalmWeb] No AI - using CSS extraction (free tier)");
    }
    if (!apiResult?.success) {
      try {
        article = extractArticle(document, window.location.href, mode);
      } catch (err) {
        console.error("[CalmWeb] Extraction failed:", err);
      }
    }
    const titleText = apiResult?.title || article?.title || document.title || "Current Page";
    const layout = options.layoutId ? getLayout(options.layoutId) : defaultLayout;
    const host = document.createElement("div");
    host.id = HOST_ID;
    host.style.cssText = `
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 2147483647 !important;
    pointer-events: auto !important;
  `;
    const shadow = host.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
    
    html {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: transparent;
      color: #e2e8f0;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .cw-overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0d0d14 100%);
      overflow-y: auto;
      overflow-x: hidden;
    }

    /* Subtle animated gradient background */
    .cw-bg-pattern {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      opacity: 0.4;
      background: 
        radial-gradient(ellipse at 20% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 100%, rgba(59, 130, 246, 0.06) 0%, transparent 50%);
    }

    /* Toolbar */
    .cw-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      background: rgba(10, 10, 15, 0.85);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .cw-toolbar-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .cw-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 15px;
      color: #a78bfa;
      letter-spacing: -0.02em;
    }

    .cw-logo svg {
      filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.4));
    }

    .cw-title {
      font-size: 13px;
      color: #64748b;
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 16px;
      border-left: 1px solid rgba(255, 255, 255, 0.08);
    }

    .cw-toolbar-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .cw-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      font-size: 13px;
      font-weight: 500;
      color: #94a3b8;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .cw-btn:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.12);
      color: #e2e8f0;
      transform: translateY(-1px);
    }

    .cw-btn:active {
      transform: translateY(0);
    }

    .cw-btn-primary {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%);
      border-color: rgba(139, 92, 246, 0.25);
      color: #a78bfa;
    }

    .cw-btn-primary:hover {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.15) 100%);
      border-color: rgba(139, 92, 246, 0.4);
      color: #c4b5fd;
      box-shadow: 0 4px 20px rgba(139, 92, 246, 0.15);
    }

    .cw-btn-close {
      background: rgba(239, 68, 68, 0.1);
      border-color: rgba(239, 68, 68, 0.2);
      color: #f87171;
    }

    .cw-btn-close:hover {
      background: rgba(239, 68, 68, 0.2);
      border-color: rgba(239, 68, 68, 0.35);
      color: #fca5a5;
    }

    /* Main content area */
    .cw-main {
      max-width: 720px;
      margin: 0 auto;
      padding: 120px 24px 120px;
    }

    /* Article header */
    .cw-article-header {
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .cw-title-main {
      font-size: 2.75rem;
      font-weight: 700;
      line-height: 1.15;
      margin: 0 0 20px;
      color: #f8fafc;
      letter-spacing: -0.035em;
      text-shadow: 0 2px 30px rgba(139, 92, 246, 0.1);
    }

    .cw-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      font-size: 0.875rem;
      color: #64748b;
    }

    .cw-meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .cw-meta-sep {
      width: 4px;
      height: 4px;
      background: #334155;
      border-radius: 50%;
    }

    .cw-reading-time {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      background: rgba(139, 92, 246, 0.1);
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #a78bfa;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .cw-ai-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 20px;
      font-size: 0.7rem;
      font-weight: 600;
      color: #60a5fa;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* Content styles - universal for all content types */
    .cw-content {
      font-size: 1rem;
      line-height: 1.7;
      color: #cbd5e1;
    }

    .cw-content > * {
      margin-bottom: 1em;
    }

    .cw-content h1,
    .cw-content h2,
    .cw-content h3,
    .cw-content h4,
    .cw-content h5,
    .cw-content h6 {
      color: #f1f5f9;
      line-height: 1.3;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    .cw-content h1 { font-size: 1.75em; font-weight: 700; }
    .cw-content h2 { font-size: 1.5em; font-weight: 600; }
    .cw-content h3 { font-size: 1.25em; font-weight: 600; }
    .cw-content h4 { font-size: 1.1em; font-weight: 600; }

    .cw-content p {
      margin: 0 0 1em;
      color: #cbd5e1;
    }

    .cw-content h3 {
      font-size: 1.25em;
      font-weight: 600;
      color: #e2e8f0;
      margin: 2em 0 0.75em;
    }

    .cw-content h4 {
      font-size: 1.1em;
      font-weight: 600;
      color: #e2e8f0;
      margin: 1.5em 0 0.5em;
    }

    .cw-content a {
      color: #818cf8;
      text-decoration: none;
      border-bottom: 1px solid rgba(129, 140, 248, 0.3);
      transition: all 0.15s ease;
    }

    .cw-content a:hover {
      color: #a5b4fc;
      border-bottom-color: rgba(129, 140, 248, 0.6);
    }

    .cw-content img {
      max-width: 100%;
      height: auto;
      border-radius: 16px;
      margin: 2em 0;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .cw-content blockquote {
      margin: 2.5em 0;
      padding: 24px 28px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.03) 100%);
      border-left: 3px solid #7c3aed;
      border-radius: 0 16px 16px 0;
      font-style: italic;
      color: #a5b4fc;
    }

    .cw-content blockquote p {
      margin: 0;
      font-size: 1.1em;
      color: inherit;
    }

    .cw-content blockquote p:first-of-type::first-letter {
      float: none;
      font-size: inherit;
      line-height: inherit;
      margin: 0;
      font-weight: inherit;
      color: inherit;
      text-shadow: none;
    }

    .cw-content ul, .cw-content ol {
      margin: 1.5em 0;
      padding-left: 1.75em;
    }

    .cw-content li {
      margin: 0.6em 0;
      color: #cbd5e1;
    }

    .cw-content ul li::marker {
      color: #7c3aed;
    }

    .cw-content ol li::marker {
      color: #7c3aed;
      font-weight: 600;
    }

    .cw-content pre {
      margin: 2em 0;
      padding: 24px;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(139, 92, 246, 0.15);
      border-radius: 16px;
      overflow-x: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9em;
      line-height: 1.6;
      color: #e2e8f0;
    }

    .cw-content code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9em;
      padding: 0.2em 0.5em;
      background: rgba(139, 92, 246, 0.1);
      border-radius: 6px;
      color: #c4b5fd;
    }

    .cw-content pre code {
      padding: 0;
      background: transparent;
      color: inherit;
    }

    .cw-content table {
      width: 100%;
      margin: 2em 0;
      border-collapse: collapse;
      font-size: 0.95em;
    }

    .cw-content th, .cw-content td {
      padding: 12px 16px;
      border: 1px solid rgba(255, 255, 255, 0.06);
      text-align: left;
    }

    .cw-content th {
      background: rgba(139, 92, 246, 0.1);
      font-weight: 600;
      color: #e2e8f0;
    }

    .cw-content td {
      color: #94a3b8;
    }

    .cw-content hr {
      margin: 3em 0;
      border: none;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent);
    }

    /* Figures and captions */
    .cw-content figure {
      margin: 2em 0;
      padding: 0;
    }

    .cw-content figcaption {
      margin-top: 0.75em;
      font-size: 0.875rem;
      color: #64748b;
      text-align: center;
      font-style: italic;
    }

    /* Media */
    .cw-content video,
    .cw-content audio {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      margin: 1.5em 0;
      background: rgba(0, 0, 0, 0.3);
    }

    .cw-content iframe {
      max-width: 100%;
      border-radius: 12px;
      margin: 1.5em 0;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Definition lists */
    .cw-content dl {
      margin: 1.5em 0;
    }

    .cw-content dt {
      font-weight: 600;
      color: #e2e8f0;
      margin-top: 1em;
    }

    .cw-content dd {
      margin-left: 1.5em;
      color: #94a3b8;
    }

    /* Details/Summary (accordions) */
    .cw-content details {
      margin: 1.5em 0;
      padding: 16px 20px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
    }

    .cw-content summary {
      font-weight: 600;
      color: #e2e8f0;
      cursor: pointer;
      padding: 4px 0;
      list-style: none;
    }

    .cw-content summary::-webkit-details-marker {
      display: none;
    }

    .cw-content summary::before {
      content: '▶';
      display: inline-block;
      margin-right: 10px;
      font-size: 0.75em;
      color: #7c3aed;
      transition: transform 0.2s ease;
    }

    .cw-content details[open] summary::before {
      transform: rotate(90deg);
    }

    .cw-content details > *:not(summary) {
      margin-top: 1em;
      padding-left: 1.5em;
    }

    /* Form elements - disabled/neutralized */
    .cw-content form[data-cw-form-disabled],
    .cw-content form[disabled] {
      pointer-events: none;
      opacity: 0.7;
    }

    .cw-content input,
    .cw-content textarea,
    .cw-content select {
      display: block;
      width: 100%;
      padding: 12px 16px;
      margin: 1em 0;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      color: #e2e8f0;
      font-size: 0.95rem;
      font-family: inherit;
    }

    .cw-content input[data-cw-disabled],
    .cw-content input[disabled],
    .cw-content textarea[data-cw-disabled],
    .cw-content textarea[disabled],
    .cw-content select[data-cw-disabled],
    .cw-content select[disabled] {
      pointer-events: none;
      background: rgba(0, 0, 0, 0.2);
      color: #64748b;
    }

    .cw-content input::placeholder,
    .cw-content textarea::placeholder {
      color: #475569;
    }

    .cw-content button,
    .cw-content input[type="submit"],
    .cw-content input[type="button"],
    .cw-content input[type="reset"] {
      padding: 12px 24px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%);
      border: 1px solid rgba(139, 92, 246, 0.25);
      border-radius: 10px;
      color: #a78bfa;
      font-size: 0.95rem;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s ease;
      margin: 0.5em 0;
    }

    .cw-content button[data-cw-disabled],
    .cw-content button[disabled],
    .cw-content input[type="submit"][data-cw-disabled],
    .cw-content input[type="submit"][disabled] {
      pointer-events: none;
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Abbreviations */
    .cw-content abbr {
      border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
      cursor: help;
    }

    /* Mark/highlight */
    .cw-content mark {
      background: rgba(251, 191, 36, 0.2);
      color: #fbbf24;
      padding: 0.1em 0.3em;
      border-radius: 4px;
    }

    /* Del/ins (edits) */
    .cw-content del {
      color: #64748b;
      text-decoration: line-through;
    }

    .cw-content ins {
      color: #34d399;
      text-decoration: underline;
    }

    /* Small text */
    .cw-content small {
      font-size: 0.8em;
      color: #64748b;
    }

    /* Strong/emphasis */
    .cw-content strong {
      font-weight: 700;
      color: #f1f5f9;
    }

    .cw-content em {
      font-style: italic;
    }

    /* Address */
    .cw-content address {
      font-style: normal;
      margin: 1.5em 0;
      padding: 16px 20px;
      background: rgba(139, 92, 246, 0.05);
      border-left: 3px solid #7c3aed;
      border-radius: 0 12px 12px 0;
    }

    /* Cite */
    .cw-content cite {
      font-style: italic;
      color: #a78bfa;
    }

    /* Time */
    .cw-content time {
      color: #64748b;
      font-size: 0.9em;
    }

    /* Code blocks with language labels */
    .cw-content pre[class*="language-"] {
      position: relative;
    }

    .cw-content pre[class*="language-"]::before {
      content: attr(class);
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 0.7rem;
      color: #64748b;
      text-transform: uppercase;
    }

    /* Math/code equations */
    .cw-content math,
    .cw-content .math {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.95em;
      background: rgba(0, 0, 0, 0.2);
      padding: 0.2em 0.5em;
      border-radius: 6px;
    }

    /* Hero image */
    .cw-hero {
      width: calc(100% + 80px);
      max-width: calc(100% + 80px);
      height: auto;
      border-radius: 24px;
      margin: 0 -40px 48px;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
    }

    /* Footer */
    .cw-footer {
      margin-top: 80px;
      padding-top: 32px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }

    .cw-source {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.875rem;
      color: #64748b;
    }

    .cw-favicon {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      opacity: 0.7;
    }

    .cw-source-url {
      color: #818cf8;
      text-decoration: none;
    }

    /* Two column layout for long content */
    .cw-columns-2 {
      column-count: 2;
      column-gap: 48px;
      column-rule: 1px solid rgba(255, 255, 255, 0.05);
    }

    .cw-columns-2 h1,
    .cw-columns-2 h2,
    .cw-columns-2 h3,
    .cw-columns-2 blockquote,
    .cw-columns-2 pre {
      column-span: all;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .cw-toolbar {
        padding: 0 16px;
        height: 56px;
      }
      
      .cw-title {
        display: none;
      }
      
      .cw-main {
        padding: 100px 20px 80px;
      }
      
      .cw-title-main {
        font-size: 2rem;
      }
      
      .cw-content {
        font-size: 1rem;
      }
      
      .cw-content p:first-of-type {
        font-size: 1.1em;
      }
      
      .cw-columns-2 {
        column-count: 1;
      }
      
      .cw-hero {
        width: calc(100% + 40px);
        margin: 0 -20px 32px;
        border-radius: 16px;
      }
      
      .cw-btn span {
        display: none;
      }
      
      .cw-btn {
        padding: 10px 12px;
      }
    }

    /* Focus visible for accessibility */
    .cw-btn:focus-visible {
      outline: 2px solid #7c3aed;
      outline-offset: 2px;
    }

    /* Selection color */
    ::selection {
      background: rgba(139, 92, 246, 0.3);
      color: #f8fafc;
    }

    /* Animations */
    @keyframes cw-fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .cw-main {
      animation: cw-fade-in 0.4s ease-out;
    }

    @keyframes cw-underline-expand {
      from { width: 0; }
      to { width: 100%; }
    }
  `;
    shadow.appendChild(style);
    const overlay = document.createElement("div");
    overlay.className = "cw-overlay";
    const bgPattern = document.createElement("div");
    bgPattern.className = "cw-bg-pattern";
    const toolbar = document.createElement("div");
    toolbar.className = "cw-toolbar";
    toolbar.innerHTML = `
    <div class="cw-toolbar-left">
      <div class="cw-logo">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
        CalmWeb
      </div>
      <div class="cw-title">${escapeHtml(titleText)}</div>
    </div>
    <div class="cw-toolbar-right">
      <button class="cw-btn cw-btn-primary" id="cw-raw-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
        <span>Original</span>
      </button>
      <button class="cw-btn cw-btn-close" id="cw-close-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
        <span>Close</span>
      </button>
    </div>
  `;
    const main = document.createElement("main");
    main.className = "cw-main";
    const headerPlaceholder = document.createElement("header");
    headerPlaceholder.className = "cw-article-header";
    const content = document.createElement("div");
    content.className = "cw-content";
    const footerPlaceholder = document.createElement("footer");
    footerPlaceholder.className = "cw-footer";
    main.appendChild(headerPlaceholder);
    main.appendChild(content);
    main.appendChild(footerPlaceholder);
    overlay.appendChild(bgPattern);
    overlay.appendChild(toolbar);
    overlay.appendChild(main);
    shadow.appendChild(overlay);
    document.body.appendChild(host);
    shadow.getElementById("cw-close-btn")?.addEventListener("click", () => {
      closeReader();
      options.onClose?.();
    });
    shadow.getElementById("cw-raw-btn")?.addEventListener("click", () => {
      closeReader();
      options.onClose?.();
    });
    if (apiResult?.success && apiResult.filteredContent) {
      headerPlaceholder.innerHTML = `
      <h1 class="cw-title-main">${escapeHtml(apiResult.title)}</h1>
      <div class="cw-meta">
        ${apiResult.summary ? `<span class="cw-meta-item">${escapeHtml(apiResult.summary.slice(0, 100))}</span>` : ""}
        <span class="cw-meta-sep"></span>
        <span class="cw-ai-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          AI Filtered
        </span>
      </div>
    `;
      content.innerHTML = apiResult.filteredContent;
      sanitizeLinks(content);
    } else {
      const renderArticle = article && article.title ? article : fallbackArticle();
      try {
        layout.render(renderArticle, content, {
          font: options.font || "Inter",
          fontSize: options.fontSize || "17px"
        }, {
          header: headerPlaceholder,
          footer: footerPlaceholder
        });
      } catch (err) {
        console.error("[CalmWeb] Layout render failed:", err);
        renderFallback(content, renderArticle);
      }
    }
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeReader();
        document.removeEventListener("keydown", handleEsc);
      }
    };
    document.addEventListener("keydown", handleEsc);
  }
  function fallbackArticle() {
    return {
      title: document.title || "Current Page",
      author: void 0,
      date: void 0,
      content: document.body?.textContent?.slice(0, 5e3) || "",
      contentHtml: (() => {
        const div = document.createElement("div");
        const text = document.body?.textContent || "";
        const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 20).slice(0, 20);
        for (const p of paragraphs) {
          const el = document.createElement("p");
          el.textContent = p.trim();
          div.appendChild(el);
        }
        return div;
      })(),
      images: [],
      source: window.location.hostname,
      favicon: void 0,
      readingTime: Math.ceil((document.body?.textContent?.split(/\s+/).length || 0) / 200),
      url: window.location.href
    };
  }
  function renderFallback(container, article) {
    container.innerHTML = `
    <p>${escapeHtml(article.content.slice(0, 500))}</p>
  `;
  }
  function sanitizeLinks(container) {
    container.querySelectorAll("a").forEach((a) => {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    });
  }
  function closeReader() {
    document.getElementById(HOST_ID)?.remove();
    document.body.style.removeProperty("overflow");
  }
  function escapeHtml(text) {
    const span = document.createElement("span");
    span.textContent = text;
    return span.innerHTML;
  }
  function isReaderOpen() {
    return !!document.getElementById(HOST_ID);
  }
  var util;
  (function(util2) {
    util2.assertEqual = (_) => {
    };
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
      const filtered = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e) {
        return obj[e];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  class ZodError extends Error {
    get errors() {
      return this.issues;
    }
    constructor(issues) {
      super();
      this.issues = [];
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error) => {
        for (const issue of error.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i = 0;
            while (i < issue.path.length) {
              const el = issue.path[i];
              const terminal = i === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    static assert(value) {
      if (!(value instanceof ZodError)) {
        throw new Error(`Not a ZodError: ${value}`);
      }
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          const firstEl = sub.path[0];
          fieldErrors[firstEl] = fieldErrors[firstEl] || [];
          fieldErrors[firstEl].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
  };
  const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "bigint")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  let overrideErrorMap = errorMap;
  function getErrorMap() {
    return overrideErrorMap;
  }
  const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    if (issueData.message !== void 0) {
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message
      };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m) => !!m).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: errorMessage
    };
  };
  function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        overrideMap,
        // then global override map
        overrideMap === errorMap ? void 0 : errorMap
        // then global default map
      ].filter((x) => !!x)
    });
    ctx.common.issues.push(issue);
  }
  class ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s of results) {
        if (s.status === "aborted")
          return INVALID;
        if (s.status === "dirty")
          status.dirty();
        arrayValue.push(s.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key;
        const value = await pair.value;
        syncPairs.push({
          key,
          value
        });
      }
      return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  }
  const INVALID = Object.freeze({
    status: "aborted"
  });
  const DIRTY = (value) => ({ status: "dirty", value });
  const OK = (value) => ({ status: "valid", value });
  const isAborted = (x) => x.status === "aborted";
  const isDirty = (x) => x.status === "dirty";
  const isValid = (x) => x.status === "valid";
  const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
  })(errorUtil || (errorUtil = {}));
  class ParseInputLazyPath {
    constructor(parent, value, path, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (Array.isArray(this._key)) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  }
  const handleResult = (ctx, result2) => {
    if (isValid(result2)) {
      return { success: true, data: result2.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error = new ZodError(ctx.common.issues);
          this._error = error;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      const { message } = params;
      if (iss.code === "invalid_enum_value") {
        return { message: message ?? ctx.defaultError };
      }
      if (typeof ctx.data === "undefined") {
        return { message: message ?? required_error ?? ctx.defaultError };
      }
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      return { message: message ?? invalid_type_error ?? ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  class ZodType {
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result2 = this._parse(input);
      if (isAsync(result2)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result2;
    }
    _parseAsync(input) {
      const result2 = this._parse(input);
      return Promise.resolve(result2);
    }
    parse(data, params) {
      const result2 = this.safeParse(data, params);
      if (result2.success)
        return result2.data;
      throw result2.error;
    }
    safeParse(data, params) {
      const ctx = {
        common: {
          issues: [],
          async: params?.async ?? false,
          contextualErrorMap: params?.errorMap
        },
        path: params?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result2 = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result2);
    }
    "~validate"(data) {
      const ctx = {
        common: {
          issues: [],
          async: !!this["~standard"].async
        },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      if (!this["~standard"].async) {
        try {
          const result2 = this._parseSync({ data, path: [], parent: ctx });
          return isValid(result2) ? {
            value: result2.value
          } : {
            issues: ctx.common.issues
          };
        } catch (err) {
          if (err?.message?.toLowerCase()?.includes("encountered")) {
            this["~standard"].async = true;
          }
          ctx.common = {
            issues: [],
            async: true
          };
        }
      }
      return this._parseAsync({ data, path: [], parent: ctx }).then((result2) => isValid(result2) ? {
        value: result2.value
      } : {
        issues: ctx.common.issues
      });
    }
    async parseAsync(data, params) {
      const result2 = await this.safeParseAsync(data, params);
      if (result2.success)
        return result2.data;
      throw result2.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params?.errorMap,
          async: true
        },
        path: params?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result2 = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result2);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result2 = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result2 instanceof Promise) {
          return result2.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result2) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    constructor(def) {
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
      this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (data) => this["~validate"](data)
      };
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    brand() {
      return new ZodBranded({
        typeName: ZodFirstPartyTypeKind.ZodBranded,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodCatch
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    readonly() {
      return ZodReadonly.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  const cuidRegex = /^c[^\s-]{8,}$/i;
  const cuid2Regex = /^[0-9a-z]+$/;
  const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  const nanoidRegex = /^[a-z0-9_-]{21}$/i;
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  let emojiRegex;
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  const dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
      secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
      secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
  }
  function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
  }
  function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
      opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
      return false;
    try {
      const [header] = jwt.split(".");
      if (!header)
        return false;
      const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base64));
      if (typeof decoded !== "object" || decoded === null)
        return false;
      if ("typ" in decoded && decoded?.typ !== "JWT")
        return false;
      if (!decoded.alg)
        return false;
      if (alg && decoded.alg !== alg)
        return false;
      return true;
    } catch {
      return false;
    }
  }
  function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
      return true;
    }
    return false;
  }
  class ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "nanoid") {
          if (!nanoidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "nanoid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "date") {
          const regex = dateRegex;
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "date",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "time") {
          const regex = timeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "time",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "duration") {
          if (!durationRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "duration",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "jwt") {
          if (!isValidJWT(input.data, check.alg)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "jwt",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cidr") {
          if (!isValidCidr(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cidr",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64") {
          if (!base64Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64url") {
          if (!base64urlRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
      return this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
    }
    _addCheck(check) {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
      return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
      return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
      return this._addCheck({
        kind: "base64url",
        ...errorUtil.errToObj(message)
      });
    }
    jwt(options) {
      return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
      return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        offset: options?.offset ?? false,
        local: options?.local ?? false,
        ...errorUtil.errToObj(options?.message)
      });
    }
    date(message) {
      return this._addCheck({ kind: "date", message });
    }
    time(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: options
        });
      }
      return this._addCheck({
        kind: "time",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        ...errorUtil.errToObj(options?.message)
      });
    }
    duration(message) {
      return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options?.position,
        ...errorUtil.errToObj(options?.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
      return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
    }
    toLowerCase() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
    }
    toUpperCase() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxLength() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  }
  ZodString.create = (params) => {
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
  }
  class ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max = null;
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        } else if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return Number.isFinite(min) && Number.isFinite(max);
    }
  }
  ZodNumber.create = (params) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  class ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        try {
          input.data = BigInt(input.data);
        } catch {
          return this._getInvalidInput(input);
        }
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        return this._getInvalidInput(input);
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  }
  ZodBigInt.create = (params) => {
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
  class ZodBoolean extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodBoolean.create = (params) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  class ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (Number.isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min != null ? new Date(min) : null;
    }
    get maxDate() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max != null ? new Date(max) : null;
    }
  }
  ZodDate.create = (params) => {
    return new ZodDate({
      checks: [],
      coerce: params?.coerce || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params)
    });
  };
  class ZodSymbol extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodSymbol.create = (params) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params)
    });
  };
  class ZodUndefined extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodUndefined.create = (params) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params)
    });
  };
  class ZodNull extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodNull.create = (params) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params)
    });
  };
  class ZodAny extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodAny.create = (params) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params)
    });
  };
  class ZodUnknown extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodUnknown.create = (params) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params)
    });
  };
  class ZodNever extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  }
  ZodNever.create = (params) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params)
    });
  };
  class ZodVoid extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodVoid.create = (params) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params)
    });
  };
  class ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result3) => {
          return ParseStatus.mergeArray(status, result3);
        });
      }
      const result2 = [...ctx.data].map((item, i) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      });
      return ParseStatus.mergeArray(status, result2);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodArray.create = (schema, params) => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params)
    });
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  class ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      this._cached = { shape, keys };
      return this._cached;
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") ;
        else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: errorUtil.errToObj(message).message ?? defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
      return new ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
      const merged = new ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
      return new ZodObject({
        ...this._def,
        catchall: index
      });
    }
    pick(mask) {
      const shape = {};
      for (const key of util.objectKeys(mask)) {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    /**
     * @deprecated
     */
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  }
  ZodObject.create = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  class ZodUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result2 of results) {
          if (result2.result.status === "valid") {
            return result2.result;
          }
        }
        for (const result2 of results) {
          if (result2.result.status === "dirty") {
            ctx.common.issues.push(...result2.ctx.common.issues);
            return result2.result;
          }
        }
        const unionErrors = results.map((result2) => new ZodError(result2.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result2 = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result2.status === "valid") {
            return result2;
          } else if (result2.status === "dirty" && !dirty) {
            dirty = { result: result2, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  ZodUnion.create = (types, params) => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params)
    });
  };
  const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return util.objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else if (type instanceof ZodOptional) {
      return [void 0, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodNullable) {
      return [null, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodBranded) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
      return getDiscriminator(type._def.innerType);
    } else {
      return [];
    }
  };
  class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.optionsMap.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
      const optionsMap = /* @__PURE__ */ new Map();
      for (const type of options) {
        const discriminatorValues = getDiscriminator(type.shape[discriminator]);
        if (!discriminatorValues.length) {
          throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
          }
          optionsMap.set(value, type);
        }
      }
      return new ZodDiscriminatedUnion({
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
        discriminator,
        options,
        optionsMap,
        ...processCreateParams(params)
      });
    }
  }
  function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
      return { valid: true, data: a };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b);
      const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a, ...b };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a.length !== b.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
      return { valid: true, data: a };
    } else {
      return { valid: false };
    }
  }
  class ZodIntersection extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  }
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params)
    });
  };
  class ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x) => !!x);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new ZodTuple({
        ...this._def,
        rest
      });
    }
  }
  ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params)
    });
  };
  class ZodMap extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  }
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params)
    });
  };
  class ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size, message) {
      return this.min(size, message).max(size, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodSet.create = (valueType, params) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params)
    });
  };
  class ZodLazy extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  }
  ZodLazy.create = (getter, params) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params)
    });
  };
  class ZodLiteral extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  }
  ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params)
    });
  };
  function createZodEnum(values, params) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum,
      ...processCreateParams(params)
    });
  }
  class ZodEnum extends ZodType {
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!this._cache) {
        this._cache = new Set(this._def.values);
      }
      if (!this._cache.has(input.data)) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values, newDef = this._def) {
      return ZodEnum.create(values, {
        ...this._def,
        ...newDef
      });
    }
    exclude(values, newDef = this._def) {
      return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
        ...this._def,
        ...newDef
      });
    }
  }
  ZodEnum.create = createZodEnum;
  class ZodNativeEnum extends ZodType {
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!this._cache) {
        this._cache = new Set(util.getValidEnumValues(this._def.values));
      }
      if (!this._cache.has(input.data)) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params)
    });
  };
  class ZodPromise extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  }
  ZodPromise.create = (schema, params) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params)
    });
  };
  class ZodEffects extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(processed).then(async (processed2) => {
            if (status.value === "aborted")
              return INVALID;
            const result2 = await this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
            if (result2.status === "aborted")
              return INVALID;
            if (result2.status === "dirty")
              return DIRTY(result2.value);
            if (status.value === "dirty")
              return DIRTY(result2.value);
            return result2;
          });
        } else {
          if (status.value === "aborted")
            return INVALID;
          const result2 = this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
          if (result2.status === "aborted")
            return INVALID;
          if (result2.status === "dirty")
            return DIRTY(result2.value);
          if (status.value === "dirty")
            return DIRTY(result2.value);
          return result2;
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result2 = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result2);
          }
          if (result2 instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return INVALID;
          const result2 = effect.transform(base.value, checkCtx);
          if (result2 instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result2 };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return INVALID;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result2) => ({
              status: status.value,
              value: result2
            }));
          });
        }
      }
      util.assertNever(effect);
    }
  }
  ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params)
    });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params)
    });
  };
  class ZodOptional extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodOptional.create = (type, params) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params)
    });
  };
  class ZodNullable extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodNullable.create = (type, params) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params)
    });
  };
  class ZodDefault extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  ZodDefault.create = (type, params) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
  class ZodCatch extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result2 = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result2)) {
        return result2.then((result3) => {
          return {
            status: "valid",
            value: result3.status === "valid" ? result3.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  ZodCatch.create = (type, params) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
  class ZodNaN extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  }
  ZodNaN.create = (params) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params)
    });
  };
  class ZodBranded extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  }
  class ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a, b) {
      return new ZodPipeline({
        in: a,
        out: b,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  }
  class ZodReadonly extends ZodType {
    _parse(input) {
      const result2 = this._def.innerType._parse(input);
      const freeze = (data) => {
        if (isValid(data)) {
          data.value = Object.freeze(data.value);
        }
        return data;
      };
      return isAsync(result2) ? result2.then((data) => freeze(data)) : freeze(result2);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params)
    });
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  const stringType = ZodString.create;
  const numberType = ZodNumber.create;
  const booleanType = ZodBoolean.create;
  ZodNever.create;
  const arrayType = ZodArray.create;
  const objectType = ZodObject.create;
  ZodUnion.create;
  const discriminatedUnionType = ZodDiscriminatedUnion.create;
  ZodIntersection.create;
  ZodTuple.create;
  const literalType = ZodLiteral.create;
  const enumType = ZodEnum.create;
  ZodPromise.create;
  ZodOptional.create;
  ZodNullable.create;
  const MESSAGE_TYPES = {
    // Classification
    CLASSIFY_UNIT: "calmweb:classifyUnit",
    // Settings management
    GET_SETTINGS: "calmweb:getSettings",
    UPDATE_SETTINGS: "calmweb:updateSettings",
    // Cache management
    CLEAR_CACHE: "calmweb:clearCache",
    // Statistics
    GET_STATS: "calmweb:getStats",
    INCREMENT_STAT: "calmweb:incrementStat",
    // Reader
    TOGGLE_READER: "calmweb:toggleReader",
    OPEN_READER: "calmweb:openReader",
    CLOSE_READER: "calmweb:closeReader",
    // AI Connection
    TEST_CONNECTION: "calmweb:testConnection"
  };
  const ClassifyUnitMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.CLASSIFY_UNIT),
    unit: objectType({
      id: stringType(),
      site: stringType(),
      fingerprint: stringType(),
      sourceName: stringType().optional(),
      title: stringType(),
      metadata: arrayType(stringType()),
      isNew: booleanType(),
      url: stringType().url().optional()
    })
  });
  const GetSettingsMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.GET_SETTINGS)
  });
  const UpdateSettingsMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.UPDATE_SETTINGS),
    settings: objectType({
      enabled: booleanType().optional(),
      processingMode: enumType(["byok_llm", "hosted_llm"]).optional(),
      strictness: numberType().min(0).max(100).optional(),
      rules: objectType({
        blocklistChannels: arrayType(stringType()).optional(),
        blocklistKeywords: arrayType(stringType()).optional(),
        allowlistChannels: arrayType(stringType()).optional(),
        allowlistKeywords: arrayType(stringType()).optional(),
        presets: objectType({
          politics: booleanType().optional(),
          ragebait: booleanType().optional(),
          spoilers: booleanType().optional(),
          clickbait: booleanType().optional()
        }).optional()
      }).optional(),
      byokKey: stringType().optional()
    })
  });
  const ClearCacheMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.CLEAR_CACHE)
  });
  const GetStatsMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.GET_STATS)
  });
  const IncrementStatMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.INCREMENT_STAT),
    key: literalType("totalFiltered"),
    amount: numberType().optional()
  });
  const TestConnectionMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.TEST_CONNECTION),
    apiKey: stringType(),
    model: stringType().optional(),
    endpoint: stringType().optional()
  });
  discriminatedUnionType("type", [
    ClassifyUnitMessageSchema,
    GetSettingsMessageSchema,
    UpdateSettingsMessageSchema,
    ClearCacheMessageSchema,
    GetStatsMessageSchema,
    IncrementStatMessageSchema,
    TestConnectionMessageSchema
  ]);
  async function sendToBackground(message) {
    return browser$2.runtime.sendMessage(message);
  }
  var browserPolyfill$1 = { exports: {} };
  var browserPolyfill = browserPolyfill$1.exports;
  var hasRequiredBrowserPolyfill;
  function requireBrowserPolyfill() {
    if (hasRequiredBrowserPolyfill) return browserPolyfill$1.exports;
    hasRequiredBrowserPolyfill = 1;
    (function(module, exports$1) {
      (function(global, factory) {
        {
          factory(module);
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : browserPolyfill, function(module2) {
        if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result2;
                try {
                  result2 = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result2 = Promise.reject(err);
                }
                const isResultThenable = result2 !== true && isThenable(result2);
                if (result2 !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result2);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    })(browserPolyfill$1);
    return browserPolyfill$1.exports;
  }
  var browserPolyfillExports = requireBrowserPolyfill();
  const browser = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports);
  const GOOGLE_SEARCH_HOST_RE = /^(?:www\.|encrypted\.)?google\.[a-z.]+$/;
  const GOOGLE_SEARCH_PATHS = /* @__PURE__ */ new Set(["/", "/search", "/webhp"]);
  function isGoogleSearchPage(url = window.location.href) {
    try {
      const parsed = new URL(url);
      return GOOGLE_SEARCH_HOST_RE.test(parsed.hostname) && (parsed.searchParams.has("q") || GOOGLE_SEARCH_PATHS.has(parsed.pathname));
    } catch {
      return false;
    }
  }
  const LOADING_ID = "calmweb-loading";
  const FLOATING_BTN_ID = "calmweb-raw-toggle";
  const LOADING_STYLES = `
  #${LOADING_ID} {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw; height: 100vh;
    z-index: 2147483647;
    background: #09090b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .calmweb-loading-spinner {
    width: 28px; height: 28px;
    border: 2px solid rgba(255,255,255,0.06);
    border-top-color: #8b5cf6;
    border-radius: 50%;
    animation: calmweb-spin 0.8s linear infinite;
  }
  .calmweb-loading-text { color: #3f3f46; font-size: 12px; font-weight: 500; }
  @keyframes calmweb-spin { to { transform: rotate(360deg); } }
`;
  function isInteractiveSite() {
    const hostname = window.location.hostname.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    const skipDomains = [
      "mail.google",
      "calendar.google",
      "drive.google",
      "docs.google",
      "sheets.google",
      "slides.google",
      "meet.google",
      "github.com",
      "gitlab.com",
      "slack.com",
      "discord.com",
      "notion.so",
      "figma.com",
      "linear.app",
      "trello.com",
      "netflix.com",
      "spotify.com",
      "youtube.com"
    ];
    if (skipDomains.some((d) => hostname.includes(d))) return true;
    const skipPaths = [
      "/login",
      "/signin",
      "/signup",
      "/register",
      "/auth",
      "/account",
      "/settings",
      "/admin",
      "/dashboard",
      "/checkout",
      "/cart"
    ];
    if (skipPaths.some((p) => path.startsWith(p))) return true;
    const inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="search"]), textarea, select');
    if (inputs.length > 4) return true;
    return false;
  }
  function showLoading() {
    try {
      if (document.getElementById(LOADING_ID)) return;
      document.body.style.setProperty("overflow", "hidden", "important");
      const loader = document.createElement("div");
      loader.id = LOADING_ID;
      loader.innerHTML = `<style>${LOADING_STYLES}</style>
      <div class="calmweb-loading-spinner"></div>
      <div class="calmweb-loading-text">Filtering...</div>`;
      document.body.appendChild(loader);
    } catch (err) {
      console.error("[CalmWeb] Loading screen failed:", err);
    }
  }
  function hideLoading() {
    document.getElementById(LOADING_ID)?.remove();
  }
  function showFloatingButton() {
    if (document.getElementById(FLOATING_BTN_ID)) return;
    const btn = document.createElement("div");
    btn.id = FLOATING_BTN_ID;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
    btn.title = "Filtered View (Ctrl+Shift+R)";
    Object.assign(btn.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: "#8b5cf6",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: "2147483646",
      boxShadow: "0 4px 24px rgba(139, 92, 246, 0.3)",
      transition: "transform 0.15s ease",
      border: "none"
    });
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
    btn.addEventListener("click", () => {
      btn.remove();
      showLoading();
      setTimeout(() => {
        hideLoading();
        try {
          openReader();
        } catch (e) {
          console.error(e);
        }
      }, 300);
    });
    document.body.appendChild(btn);
  }
  function hideFloatingButton() {
    document.getElementById(FLOATING_BTN_ID)?.remove();
  }
  function safeToggleReader() {
    try {
      if (isReaderOpen()) {
        closeReader();
        showFloatingButton();
      } else {
        hideFloatingButton();
        openReader();
      }
    } catch (err) {
      console.error("[CalmWeb] Reader toggle failed:", err);
    }
  }
  const definition = defineContentScript({
    matches: ["<all_urls>"],
    runAt: "document_idle",
    async main() {
      console.log("[CalmWeb] Reader loaded on", window.location.hostname);
      if (isGoogleSearchPage()) {
        console.log("[CalmWeb] Skipping reader on Google search page");
        return;
      }
      document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.key.toLowerCase() === "r") {
          e.preventDefault();
          e.stopPropagation();
          safeToggleReader();
        }
        if (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.key.toLowerCase() === "r") {
          e.preventDefault();
          e.stopPropagation();
          safeToggleReader();
        }
      }, true);
      browser.runtime.onMessage.addListener((message) => {
        if (message.type === MESSAGE_TYPES.TOGGLE_READER) safeToggleReader();
        if (message.type === MESSAGE_TYPES.OPEN_READER) {
          hideFloatingButton();
          try {
            if (!isReaderOpen()) openReader();
          } catch (e) {
            console.error(e);
          }
        }
        if (message.type === MESSAGE_TYPES.CLOSE_READER) {
          try {
            if (isReaderOpen()) {
              closeReader();
              showFloatingButton();
            }
          } catch (e) {
            console.error(e);
          }
        }
      });
      let shouldFilter = true;
      let readerSettings = {};
      try {
        const settingsPromise = sendToBackground({ type: MESSAGE_TYPES.GET_SETTINGS });
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Settings timeout")), 2e3));
        const settings = await Promise.race([settingsPromise, timeout]);
        if (settings?.reader?.autoOpen === false || settings?.enabled === false) shouldFilter = false;
        readerSettings = settings?.reader || {};
        console.log("[CalmWeb] Settings loaded, filtering:", shouldFilter);
      } catch (err) {
        console.warn("[CalmWeb] Settings load failed, defaulting to filter:", err);
      }
      if (!shouldFilter) {
        showFloatingButton();
        return;
      }
      if (isInteractiveSite()) {
        showFloatingButton();
        return;
      }
      console.log("[CalmWeb] Opening reader...");
      showLoading();
      openReader({
        mode: readerSettings.mode || "full",
        layoutId: readerSettings.defaultLayout,
        font: readerSettings.font,
        fontSize: readerSettings.fontSize
      }).then(() => {
        hideLoading();
        console.log("[CalmWeb] Reader opened OK");
      }).catch((err) => {
        console.error("[CalmWeb] Reader failed:", err);
        hideLoading();
        showFloatingButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uL3NyYy9yZW5kZXJlci9leHRyYWN0b3IvYXJ0aWNsZS50cyIsIi4uLy4uL3NyYy9yZW5kZXJlci9sYXlvdXRzL2luZGV4LnRzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIi4uLy4uLy4uLy4uLy4uL3d4dC1zaGFyZWQvZGlzdC9hcGkvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL2Rpc3QvY29uZmlnL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9ub2RlX21vZHVsZXMvQHd4dC1kZXYvYnJvd3Nlci9zcmMvaW5kZXgubWpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9ub2RlX21vZHVsZXMvYXN5bmMtbXV0ZXgvaW5kZXgubWpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9ub2RlX21vZHVsZXMvZGVxdWFsL2xpdGUvaW5kZXgubWpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9ub2RlX21vZHVsZXMvQHd4dC1kZXYvc3RvcmFnZS9kaXN0L2luZGV4Lm1qcyIsIi4uLy4uLy4uLy4uLy4uL3d4dC1zaGFyZWQvZGlzdC9zdG9yYWdlL2luZGV4LmpzIiwiLi4vLi4vc3JjL3JlbmRlcmVyL3JlYWRlci1hcGkudHMiLCIuLi8uLi9zcmMvcmVuZGVyZXIvcmVhZGVyLnRzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL1pvZEVycm9yLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9sb2NhbGVzL2VuLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9lcnJvcnMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvcGFyc2VVdGlsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL2Vycm9yVXRpbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy96b2QvdjMvdHlwZXMuanMiLCIuLi8uLi9zcmMvbWVzc2FnaW5nL2luZGV4LnRzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9kaXN0L2V4dGVuc2lvbi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwiLi4vLi4vc3JjL2FkYXB0ZXJzL2dvb2dsZS50cyIsIi4uLy4uL2VudHJ5cG9pbnRzL3JlYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gc3JjL3V0aWxzL2RlZmluZS1jb250ZW50LXNjcmlwdC50c1xuZnVuY3Rpb24gZGVmaW5lQ29udGVudFNjcmlwdChkZWZpbml0aW9uKSB7XG5cdHJldHVybiBkZWZpbml0aW9uO1xufVxuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IGRlZmluZUNvbnRlbnRTY3JpcHQgfTsiLCIvKipcbiAqIEFydGljbGUgRXh0cmFjdG9yIGZvciBDYWxtV2ViIFN1cGVyIFJlYWRlclxuICpcbiAqIEV4dHJhY3RzIGNsZWFuIGFydGljbGUgY29udGVudCBmcm9tIGFueSB3ZWJwYWdlLlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0cmFjdGVkQXJ0aWNsZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcj86IHN0cmluZztcbiAgZGF0ZT86IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBjb250ZW50SHRtbDogSFRNTEVsZW1lbnQ7XG4gIGltYWdlczogQXJyYXk8e1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGFsdDogc3RyaW5nO1xuICAgIGNhcHRpb24/OiBzdHJpbmc7XG4gIH0+O1xuICBzb3VyY2U6IHN0cmluZztcbiAgZmF2aWNvbj86IHN0cmluZztcbiAgcmVhZGluZ1RpbWU6IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmNvbnN0IFJFTU9WRV9TRUxFQ1RPUlMgPSBbXG4gICduYXYnLCAnYXNpZGUnLCAnZm9vdGVyJywgJ2hlYWRlcjpub3QoYXJ0aWNsZSBoZWFkZXIpOm5vdChbY2xhc3MqPVwic2l0ZS1oZWFkZXJcIl0pOm5vdChbY2xhc3MqPVwibWFpbi1oZWFkZXJcIl0pJyxcbiAgJy5hZCcsICcuYWR2ZXJ0aXNlbWVudCcsICcuYWRzJywgJy5hZC1jb250YWluZXInLCAnLmFkLXNsb3QnLCAnLmFkLXdyYXBwZXInLCAnLmFkdmVydCcsXG4gICdbaWQqPVwiYWQtXCJdJywgJ1tjbGFzcyo9XCJhZC1cIl0nLCAnW2lkKj1cImFkdmVydFwiXScsICdbY2xhc3MqPVwiYWR2ZXJ0XCJdJyxcbiAgJy5zaWRlYmFyJywgJy5yZWxhdGVkJywgJy5yZWNvbW1lbmRlZCcsICcuc3VnZ2VzdGlvbnMnLCAnLm1vcmUtc3RvcmllcycsXG4gICcuc29jaWFsLXNoYXJlJywgJy5zaGFyZS1idXR0b25zJywgJy5zb2NpYWwtbGlua3MnLCAnLnNvY2lhbC1iYXInLCAnLnNoYXJlLWJhcicsXG4gICcuY29tbWVudHMnLCAnI2NvbW1lbnRzJywgJy5jb21tZW50LXNlY3Rpb24nLCAnLnJlc3BvbnNlcycsICcuZGlzcXVzJyxcbiAgJ3NjcmlwdCcsICdzdHlsZScsICdub3NjcmlwdCcsICdpZnJhbWU6bm90KFtzcmMqPVwieW91dHViZVwiXSk6bm90KFtzcmMqPVwidmltZW9cIl0pJyxcbiAgJ1tjbGFzcyo9XCJuZXdzbGV0dGVyXCJdJywgJ1tjbGFzcyo9XCJzdWJzY3JpYmVcIl0nLCAnW2NsYXNzKj1cInNpZ251cFwiXScsXG4gICdbY2xhc3MqPVwicG9wdXBcIl0nLCAnW2NsYXNzKj1cIm1vZGFsXCJdJywgJ1tjbGFzcyo9XCJsaWdodGJveFwiXScsXG4gICcuYXV0aG9yLWJpbycsICcuYXV0aG9yLWluZm8nLCAnLmFib3V0LWF1dGhvcicsICcucG9zdC1hdXRob3InLFxuICAnLnRhZ3MnLCAnLnRhZy1saXN0JywgJy5jYXRlZ29yaWVzJywgJy50b3BpYy10YWdzJyxcbiAgJy5icmVhZGNydW1iJywgJy5icmVhZGNydW1icycsICcuY3J1bWJzJyxcbiAgJy5wYWdpbmF0aW9uJywgJy5wYWdlcicsICcucGFnZS1uYXYnLFxuICAnLmNvb2tpZS1ub3RpY2UnLCAnLmdkcHInLCAnW2NsYXNzKj1cImNvbnNlbnRcIl0nLCAnW2NsYXNzKj1cImNvb2tpZS1iYW5uZXJcIl0nLCAnLmNvb2tpZS1iYW5uZXInLFxuICAnW2NsYXNzKj1cImludGVyY29tXCJdJywgJ1tjbGFzcyo9XCJkcmlmdFwiXScsICdbY2xhc3MqPVwiemVuZGVza1wiXScsICdbY2xhc3MqPVwiY3Jpc3BcIl0nLFxuICAnW2NsYXNzKj1cImxpdmVjaGF0XCJdJywgJ1tjbGFzcyo9XCJjaGF0LXdpZGdldFwiXScsICcjaW50ZXJjb20tY29udGFpbmVyJyxcbiAgJ1tjbGFzcyo9XCJwYXl3YWxsXCJdJywgJ1tjbGFzcyo9XCJwcmVtaXVtXCJdJywgJ1tjbGFzcyo9XCJtZXRlcmVkXCJdJywgJ1tjbGFzcyo9XCJsb2NrZWRcIl0nLFxuICAnW2NsYXNzKj1cIm92ZXJsYXlcIl0nLCAnW2NsYXNzKj1cImJhY2tkcm9wXCJdJywgJ1tjbGFzcyo9XCJtYXNrXCJdJyxcbiAgJ1tjbGFzcyo9XCJhcHAtYmFubmVyXCJdJywgJ1tjbGFzcyo9XCJpbnN0YWxsLXByb21wdFwiXScsICdbY2xhc3MqPVwiZG93bmxvYWQtYXBwXCJdJyxcbiAgJ1tjbGFzcyo9XCJzdXJ2ZXlcIl0nLCAnW2NsYXNzKj1cImZlZWRiYWNrXCJdJywgJ1tjbGFzcyo9XCJwb2xsXCJdJywgJ1tjbGFzcyo9XCJyYXRpbmdcIl0nLFxuICAnW2NsYXNzKj1cInNwb25zb3JlZFwiXScsICdbY2xhc3MqPVwicHJvbW90ZWRcIl0nLCAnW2NsYXNzKj1cIm5hdGl2ZS1hZFwiXScsXG4gICdbY2xhc3MqPVwiYWdlLWdhdGVcIl0nLCAnW2NsYXNzKj1cImFnZS12ZXJpZmljYXRpb25cIl0nLFxuICAnW2NsYXNzKj1cImNvb2tpZS1sYXdcIl0nLCAnW2NsYXNzKj1cImV1LWNvb2tpZVwiXScsXG4gICdbc3R5bGUqPVwicG9zaXRpb246IHN0aWNreVwiXScsICdbc3R5bGUqPVwicG9zaXRpb246Zml4ZWRcIl0nLFxuICAnW3N0eWxlKj1cImRpc3BsYXk6IG5vbmVcIl0nLCAnW3N0eWxlKj1cImRpc3BsYXk6bm9uZVwiXScsICdbaGlkZGVuXScsXG4gICdbYXJpYS1oaWRkZW49XCJ0cnVlXCJdJyxcbiAgJy5wcm9tbycsICcucHJvbW8tYmFubmVyJywgJy5wcm9tby1jb2RlJyxcbiAgJy5uZXdzbGV0dGVyLXBvcHVwJywgJy5zdWJzY3JpYmUtcG9wdXAnLFxuICAnI3dwYWRtaW5iYXInLFxuICAnLmFtcC1zaWRlYmFyJywgJy5hbXAtbWVudScsXG5dO1xuXG5jb25zdCBUSVRMRV9TRUxFQ1RPUlMgPSBbXG4gICdhcnRpY2xlIGgxJyxcbiAgJ2gxW2l0ZW1wcm9wPVwiaGVhZGxpbmVcIl0nLFxuICAnW3Byb3BlcnR5PVwib2c6dGl0bGVcIl0nLFxuICAnbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScsXG4gICdoMS50aXRsZScsXG4gICdoMVtpdGVtcHJvcD1cIm5hbWVcIl0nLFxuICAnLnByb2R1Y3QtdGl0bGUnLFxuICAnLnByb2R1Y3QtbmFtZScsXG4gICcubGlzdGluZy10aXRsZScsXG4gICcudGhyZWFkLXRpdGxlJyxcbiAgJ2gxJyxcbiAgJy5wb3N0LXRpdGxlJyxcbiAgJy5hcnRpY2xlLXRpdGxlJyxcbiAgJy5lbnRyeS10aXRsZScsXG4gICdbY2xhc3MqPVwidGl0bGVcIl0gaDEnLFxuICAnbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJyxcbl07XG5cbmNvbnN0IEFVVEhPUl9TRUxFQ1RPUlMgPSBbXG4gICdbcmVsPVwiYXV0aG9yXCJdJyxcbiAgJ1tpdGVtcHJvcD1cImF1dGhvclwiXScsXG4gICcuYXV0aG9yLW5hbWUnLFxuICAnLmJ5bGluZScsXG4gICcuYXV0aG9yJyxcbiAgJ21ldGFbbmFtZT1cImF1dGhvclwiXScsXG5dO1xuXG5jb25zdCBEQVRFX1NFTEVDVE9SUyA9IFtcbiAgJ3RpbWUnLFxuICAnW2l0ZW1wcm9wPVwiZGF0ZVB1Ymxpc2hlZFwiXScsXG4gICdbZGF0ZXRpbWVdJyxcbiAgJy5wb3N0LWRhdGUnLFxuICAnLmFydGljbGUtZGF0ZScsXG4gICcucHVibGlzaC1kYXRlJyxcbiAgJ21ldGFbbmFtZT1cImRhdGVcIl0nLFxuICAnW3Byb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiXScsXG5dO1xuXG5leHBvcnQgdHlwZSBDbGVhbk1vZGUgPSAndGV4dE9ubHknIHwgJ3NhZmUnIHwgJ2Z1bGwnO1xuXG5jb25zdCBUUkFDS0lOR19QQVJBTVMgPSBbXG4gICd1dG1fc291cmNlJywgJ3V0bV9tZWRpdW0nLCAndXRtX2NhbXBhaWduJywgJ3V0bV90ZXJtJywgJ3V0bV9jb250ZW50JyxcbiAgJ2ZiY2xpZCcsICdnY2xpZCcsICdnY2xzcmMnLFxuICAnbWNfY2lkJywgJ21jX2VpZCcsXG4gICdyZWYnLCAncmVmZXJlcicsICdyZWZlcnJlcicsXG4gICdhZmZpbGlhdGUnLCAnYWZmX2lkJyxcbiAgJ2NhbXBhaWduX2lkJywgJ2FkX2lkJywgJ2FkZ3JvdXBfaWQnLFxuICAndHRjbGlkJywgJ3R3Y2xpZCcsXG4gICdzX2t3Y2lkJywgJ3NjaWQnLFxuICAnX2dhJywgJ19nbCcsXG4gICd2ZXJvX2lkJywgJ21haWxjaGltcF9jYW1wYWlnbl9pZCcsXG4gICdmYl9hY3Rpb25faWRzJywgJ2ZiX2FjdGlvbl90eXBlcycsICdmYl9zb3VyY2UnLFxuICAnZmJfY2FtcGFpZ25faWRzJyxcbiAgJ29seV9lbmNfaWQnLCAnb2x5X2Fub25faWQnLFxuICAncGVyZm1vbl9yZWZfaWQnLFxuICAnc3BtJywgJ3NwbV9pZCcsXG4gICdyZHRfY2lkJywgJ3JkdF90aWQnLFxuICAndHJrX2NvbnRhY3QnLCAndHJrX21zZycsICd0cmtfbW9kdWxlJywgJ3Rya19zaWQnLFxuICAnemFucGlkJyxcbiAgJ2lnc2hpZCcsXG4gICd0dF9zaWdpZCcsICd0dF9tZWRpYWlkJyxcbl07XG5cbmNvbnN0IFNVU1BJQ0lPVVNfRE9NQUlOUyA9IFtcbiAgJ2JpdC5seScsICd0aW55dXJsLmNvbScsICd0LmNvJywgJ2dvby5nbCcsXG4gICdvdy5seScsICdpcy5nZCcsICdidWZmLmx5JywgJ2FkZi5seScsXG4gICdqLm1wJywgJ3RyLmltJywgJ3RpbnkuY2MnLCAnbG5rZC5pbicsXG4gICdkYi50dCcsICdxci5hZScsICdhZGNydW4uY2gnLCAncHN0eS5qcCcsXG4gICdzaG9ybC5jb20nLCAnaHlwRVJNLmNvbScsICdmaXJlZmUuc3QnLFxuICAnY29ydC5hcycsICdjbGNrLnJ1JywgJ2NsaWNreS5tZScsICdidWR1cmwuY29tJyxcbiAgJ3NuaXB1cmwuY29tJywgJ3NudXJsLmNvbScsICdzaG9ydC50bycsICd1cmwuaWUnLFxuICAnc2hvcmVuc3RlaW4ub3JnJyxcbl07XG5cbmZ1bmN0aW9uIHN0cmlwVHJhY2tpbmdGcm9tVXJsKGhyZWY6IHN0cmluZywgYmFzZVVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGhyZWYsIGJhc2VVcmwpO1xuICAgIGNvbnN0IGhvc3RuYW1lID0gdXJsLmhvc3RuYW1lO1xuXG4gICAgaWYgKFNVU1BJQ0lPVVNfRE9NQUlOUy5zb21lKGQgPT4gaG9zdG5hbWUuaW5jbHVkZXMoZCkpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgVFJBQ0tJTkdfUEFSQU1TLmZvckVhY2gocGFyYW0gPT4gdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW0pKTtcblxuICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdfZ2EnKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnX2dsJyk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3JlZicpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdyZWZfc3JjJyk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3JlZl91cmwnKTtcblxuICAgIHVybC5oYXNoID0gJyc7XG5cbiAgICBjb25zdCBjbGVhbmVkID0gdXJsLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIGNsZWFuZWQgPT09IHVybC5vcmlnaW4gKyB1cmwucGF0aG5hbWUgKyAnLycgPyAnJyA6IGNsZWFuZWQ7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEFydGljbGUoZG9jOiBEb2N1bWVudCwgdXJsOiBzdHJpbmcsIG1vZGU6IENsZWFuTW9kZSA9ICd0ZXh0T25seScpOiBFeHRyYWN0ZWRBcnRpY2xlIHtcbiAgY29uc3QgdGl0bGUgPSBleHRyYWN0VGl0bGUoZG9jKTtcbiAgY29uc3QgYXV0aG9yID0gZXh0cmFjdEF1dGhvcihkb2MpO1xuICBjb25zdCBkYXRlID0gZXh0cmFjdERhdGUoZG9jKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBmaW5kTWFpbkNvbnRlbnQoZG9jKTtcbiAgY29uc3QgaW1hZ2VzID0gbW9kZSAhPT0gJ3RleHRPbmx5JyA/IGV4dHJhY3RJbWFnZXMobWFpbkNvbnRlbnQpIDogW107XG4gIGNvbnN0IGNsZWFuZWRDb250ZW50ID0gY2xlYW5Db250ZW50KG1haW5Db250ZW50LCBtb2RlLCB1cmwpO1xuICBjb25zdCBmYXZpY29uID0gZXh0cmFjdEZhdmljb24oZG9jKTtcbiAgY29uc3QgcmVhZGluZ1RpbWUgPSBjYWxjdWxhdGVSZWFkaW5nVGltZShjbGVhbmVkQ29udGVudC50ZXh0Q29udGVudCB8fCAnJyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBhdXRob3IsXG4gICAgZGF0ZSxcbiAgICBjb250ZW50OiBjbGVhbmVkQ29udGVudC50ZXh0Q29udGVudCB8fCAnJyxcbiAgICBjb250ZW50SHRtbDogY2xlYW5lZENvbnRlbnQsXG4gICAgaW1hZ2VzLFxuICAgIHNvdXJjZTogbmV3IFVSTCh1cmwpLmhvc3RuYW1lLFxuICAgIGZhdmljb24sXG4gICAgcmVhZGluZ1RpbWUsXG4gICAgdXJsLFxuICB9O1xufVxuXG5mdW5jdGlvbiBleHRyYWN0VGl0bGUoZG9jOiBEb2N1bWVudCk6IHN0cmluZyB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgVElUTEVfU0VMRUNUT1JTKSB7XG4gICAgY29uc3QgZWwgPSBkb2MucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIHx8IGVsLnRleHRDb250ZW50Py50cmltKCk7XG4gICAgICBpZiAodGl0bGUgJiYgdGl0bGUubGVuZ3RoID4gNSAmJiB0aXRsZS5sZW5ndGggPCAzMDApIHtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZG9jLnRpdGxlIHx8ICdVbnRpdGxlZCc7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBdXRob3IoZG9jOiBEb2N1bWVudCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgQVVUSE9SX1NFTEVDVE9SUykge1xuICAgIGNvbnN0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbCkge1xuICAgICAgbGV0IGF1dGhvciA9IGVsLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIHx8IGVsLnRleHRDb250ZW50Py50cmltKCk7XG4gICAgICBpZiAoYXV0aG9yICYmIGF1dGhvci5sZW5ndGggPCAxMDApIHtcbiAgICAgICAgLy8gU3RyaXAgY29tbW9uIHByZWZpeGVzXG4gICAgICAgIGF1dGhvciA9IGF1dGhvci5yZXBsYWNlKC9eKGJ5fHdyaXR0ZW4gYnl8cmVwb3J0ZWQgYnkpXFxzKy9pLCAnJyk7XG4gICAgICAgIHJldHVybiBhdXRob3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRlKGRvYzogRG9jdW1lbnQpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIERBVEVfU0VMRUNUT1JTKSB7XG4gICAgY29uc3QgZWwgPSBkb2MucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBkYXRlQXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0ZXRpbWUnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgIGNvbnN0IGRhdGVUZXh0ID0gZGF0ZUF0dHIgfHwgZWwudGV4dENvbnRlbnQ/LnRyaW0oKTtcbiAgICAgIGlmIChkYXRlVGV4dCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGRhdGVUZXh0KTtcbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRNYWluQ29udGVudChkb2M6IERvY3VtZW50KTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBjYW5kaWRhdGVzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ21haW4sIGFydGljbGUsIFtyb2xlPVwibWFpblwiXSwgW3JvbGU9XCJhcnRpY2xlXCJdLCBzZWN0aW9uLCBkaXYsIGJvZHknKTtcblxuICBsZXQgYmVzdEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIGxldCBiZXN0U2NvcmUgPSAwO1xuXG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIEFycmF5LmZyb20oY2FuZGlkYXRlcykpIHtcbiAgICBpZiAoIWlzVmlzaWJsZUVsZW1lbnQoY2FuZGlkYXRlKSkgY29udGludWU7XG4gICAgXG4gICAgY29uc3Qgc2NvcmUgPSBzY29yZUVsZW1lbnQoY2FuZGlkYXRlKTtcbiAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgYmVzdEVsZW1lbnQgPSBjYW5kaWRhdGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RFbGVtZW50IHx8IGRvYy5ib2R5O1xufVxuXG5mdW5jdGlvbiBpc1Zpc2libGVFbGVtZW50KGVsOiBFbGVtZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSByZXR1cm4gZmFsc2U7XG4gIGlmIChzdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykgcmV0dXJuIGZhbHNlO1xuICBpZiAoc3R5bGUub3BhY2l0eSA9PT0gJzAnKSByZXR1cm4gZmFsc2U7XG4gIGlmIChwYXJzZUZsb2F0KHN0eWxlLm9wYWNpdHkpIDwgMC4xKSByZXR1cm4gZmFsc2U7XG4gIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2hpZGRlbicpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJykgcmV0dXJuIGZhbHNlO1xuICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZpc2libGUnKSAmJiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScpID09PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzY29yZUVsZW1lbnQoZWw6IEVsZW1lbnQpOiBudW1iZXIge1xuICBjb25zdCBodG1sID0gZWwgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IHRleHQgPSBodG1sLnRleHRDb250ZW50Py50cmltKCkgfHwgJyc7XG4gIGNvbnN0IGlubmVySFRNTCA9IGh0bWwuaW5uZXJIVE1MIHx8ICcnO1xuXG4gIGlmICh0ZXh0Lmxlbmd0aCA8IDUwKSByZXR1cm4gMDtcblxuICBjb25zdCB0ZXh0TGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gIGNvbnN0IGh0bWxMZW5ndGggPSBpbm5lckhUTUwubGVuZ3RoO1xuICBjb25zdCB0ZXh0RGVuc2l0eSA9IGh0bWxMZW5ndGggPiAwID8gdGV4dExlbmd0aCAvIGh0bWxMZW5ndGggOiAwO1xuXG4gIGlmICh0ZXh0RGVuc2l0eSA8IDAuMDUpIHJldHVybiAwO1xuXG4gIGNvbnN0IHBhcmFncmFwaHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKS5sZW5ndGg7XG4gIGNvbnN0IGhlYWRpbmdzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCdoMSxoMixoMyxoNCxoNSxoNicpLmxlbmd0aDtcbiAgY29uc3QgbGlzdHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLCBvbCwgZGwnKS5sZW5ndGg7XG4gIGNvbnN0IHRhYmxlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbCgndGFibGUnKS5sZW5ndGg7XG4gIGNvbnN0IGxpbmtzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCdhJykubGVuZ3RoO1xuICBjb25zdCBpbWFnZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmxlbmd0aDtcbiAgY29uc3QgYmxvY2tDaGlsZHJlbiA9IGh0bWwucXVlcnlTZWxlY3RvckFsbCgncCwgZGl2LCBzZWN0aW9uLCBhcnRpY2xlLCBibG9ja3F1b3RlLCBwcmUsIHVsLCBvbCwgdGFibGUnKS5sZW5ndGg7XG5cbiAgbGV0IHNjb3JlID0gMDtcblxuICBzY29yZSArPSB0ZXh0TGVuZ3RoICogdGV4dERlbnNpdHk7XG5cbiAgc2NvcmUgKz0gcGFyYWdyYXBocyAqIDEwMDtcbiAgc2NvcmUgKz0gaGVhZGluZ3MgKiA4MDtcbiAgc2NvcmUgKz0gbGlzdHMgKiA2MDtcbiAgc2NvcmUgKz0gdGFibGVzICogMTAwO1xuICBzY29yZSArPSBsaW5rcyAqIDU7XG4gIHNjb3JlICs9IGltYWdlcyAqIDEwO1xuICBzY29yZSArPSBibG9ja0NoaWxkcmVuICogMzA7XG5cbiAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHRhZ05hbWUgPT09ICdhcnRpY2xlJykgc2NvcmUgKz0gNTAwO1xuICBpZiAodGFnTmFtZSA9PT0gJ21haW4nKSBzY29yZSArPSA0MDA7XG4gIGlmICh0YWdOYW1lID09PSAnc2VjdGlvbicpIHNjb3JlICs9IDIwMDtcblxuICBjb25zdCBkZXB0aCA9IGdldERlcHRoKGVsKTtcbiAgc2NvcmUgKj0gTWF0aC5tYXgoMC4zLCAxIC0gKGRlcHRoICogMC4wNSkpO1xuXG4gIGlmIChzY29yZSA+IDUwMDAwKSByZXR1cm4gNTAwMDA7XG5cbiAgcmV0dXJuIHNjb3JlO1xufVxuXG5mdW5jdGlvbiBnZXREZXB0aChlbDogRWxlbWVudCk6IG51bWJlciB7XG4gIGxldCBkZXB0aCA9IDA7XG4gIGxldCBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAocGFyZW50KSB7XG4gICAgZGVwdGgrKztcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZGVwdGg7XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ29udGVudChlbDogSFRNTEVsZW1lbnQsIG1vZGU6IENsZWFuTW9kZSA9ICd0ZXh0T25seScsIGJhc2VVcmw6IHN0cmluZyA9ICcnKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBjbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcblxuICBSRU1PVkVfU0VMRUNUT1JTLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgY2xvbmUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikuZm9yRWFjaCgoZWwpID0+IGVsLnJlbW92ZSgpKTtcbiAgfSk7XG5cbiAgaWYgKG1vZGUgPT09ICd0ZXh0T25seScpIHtcbiAgICBjbGVhblRleHRPbmx5KGNsb25lKTtcbiAgfSBlbHNlIGlmIChtb2RlID09PSAnc2FmZScpIHtcbiAgICBjbGVhblNhZmVNb2RlKGNsb25lLCBiYXNlVXJsKTtcbiAgfSBlbHNlIGlmIChtb2RlID09PSAnZnVsbCcpIHtcbiAgICBjbGVhbkZ1bGxNb2RlKGNsb25lLCBiYXNlVXJsKTtcbiAgfVxuXG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gY2xlYW5UZXh0T25seShlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgLy8gUmVwbGFjZSA8ZmlndXJlPiB3aXRoIGl0cyA8ZmlnY2FwdGlvbj4gdGV4dCBhcyBhIDxwPlxuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdmaWd1cmUnKS5mb3JFYWNoKChmaWd1cmUpID0+IHtcbiAgICBjb25zdCBjYXB0aW9uID0gZmlndXJlLnF1ZXJ5U2VsZWN0b3IoJ2ZpZ2NhcHRpb24nKTtcbiAgICBpZiAoY2FwdGlvbiAmJiBjYXB0aW9uLnRleHRDb250ZW50Py50cmltKCkpIHtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwLnRleHRDb250ZW50ID0gY2FwdGlvbi50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICBmaWd1cmUucmVwbGFjZVdpdGgocCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZ3VyZS5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFJlbW92ZSBtZWRpYSBlbGVtZW50cyBidXQga2VlcCBzbWFsbCBpY29uc1xuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBjb25zdCB3ID0gcGFyc2VJbnQoaW1nLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCAnMCcpO1xuICAgIGNvbnN0IGggPSBwYXJzZUludChpbWcuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSB8fCAnMCcpO1xuICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnO1xuICAgIGlmICgodyA+IDAgJiYgdyA8PSAzMikgfHwgKGggPiAwICYmIGggPD0gMzIpKSByZXR1cm47XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOmltYWdlL3N2ZycpKSByZXR1cm47XG4gICAgaW1nLnJlbW92ZSgpO1xuICB9KTtcbiAgZWwucXVlcnlTZWxlY3RvckFsbCgndmlkZW8sIGF1ZGlvLCBzb3VyY2UsIHRyYWNrLCBwaWN0dXJlLCBjYW52YXMsIGVtYmVkLCBvYmplY3QsIGlmcmFtZScpLmZvckVhY2goKGUpID0+IGUucmVtb3ZlKCkpO1xuXG4gIC8vIFJlbW92ZSBjbGFzc2VzLCBzdHlsZXMsIGV2ZW50IGhhbmRsZXJzIGZyb20gYWxsIGVsZW1lbnRzXG4gIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29uY2xpY2snKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW92ZXInKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW91dCcpO1xuICB9KTtcblxuICAvLyBTYW5pdGl6ZSBsaW5rc1xuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaCgoYSkgPT4ge1xuICAgIGNvbnN0IGhyZWYgPSBhLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmIChocmVmICYmICFocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSAmJiAhaHJlZi5zdGFydHNXaXRoKCcvJykgJiYgIWhyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIH1cbiAgICBhLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIGEuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYW5TYWZlTW9kZShlbDogSFRNTEVsZW1lbnQsIGJhc2VVcmw6IHN0cmluZyk6IHZvaWQge1xuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdmaWd1cmUnKS5mb3JFYWNoKChmaWd1cmUpID0+IHtcbiAgICBjb25zdCBjYXB0aW9uID0gZmlndXJlLnF1ZXJ5U2VsZWN0b3IoJ2ZpZ2NhcHRpb24nKTtcbiAgICBpZiAoY2FwdGlvbiAmJiBjYXB0aW9uLnRleHRDb250ZW50Py50cmltKCkpIHtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwLnRleHRDb250ZW50ID0gYFtJbWFnZTogJHtjYXB0aW9uLnRleHRDb250ZW50LnRyaW0oKX1dYDtcbiAgICAgIGZpZ3VyZS5yZXBsYWNlV2l0aChwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlndXJlLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZWwucXVlcnlTZWxlY3RvckFsbCgnaW1nJykuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgY29uc3QgYWx0ID0gaW1nLmdldEF0dHJpYnV0ZSgnYWx0JykgfHwgJ0ltYWdlJztcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gJ2N3LW1lZGlhLXBsYWNlaG9sZGVyJztcbiAgICBzcGFuLnRleHRDb250ZW50ID0gYFske2FsdH1dYDtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1jdy1tZWRpYScsICdpbWFnZScpO1xuICAgIGltZy5yZXBsYWNlV2l0aChzcGFuKTtcbiAgfSk7XG5cbiAgZWwucXVlcnlTZWxlY3RvckFsbCgndmlkZW8sIGF1ZGlvLCBzb3VyY2UsIHRyYWNrLCBwaWN0dXJlLCBjYW52YXMsIGVtYmVkLCBvYmplY3QsIGlmcmFtZScpLmZvckVhY2goKG1lZGlhKSA9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9ICdjdy1tZWRpYS1wbGFjZWhvbGRlcic7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGBbTWVkaWEgLSAke21lZGlhLnRhZ05hbWUudG9Mb3dlckNhc2UoKX1dYDtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1jdy1tZWRpYScsIG1lZGlhLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgbWVkaWEucmVwbGFjZVdpdGgoc3Bhbik7XG4gIH0pO1xuXG4gIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKChhKSA9PiB7XG4gICAgY29uc3QgaHJlZiA9IGEuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG4gICAgaWYgKGhyZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IGhyZWYuc3RhcnRzV2l0aCgnLycpIHx8IGhyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBjb25zdCBjbGVhbmVkID0gc3RyaXBUcmFja2luZ0Zyb21VcmwoaHJlZiwgYmFzZVVybCk7XG4gICAgICBpZiAoY2xlYW5lZCkge1xuICAgICAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsIGNsZWFuZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYS5yZW1vdmVBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIH1cbiAgICAgIGEuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICBhLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYS5yZW1vdmVBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1jdy1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9KTtcblxuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpub3QoW3R5cGU9XCJzdWJtaXRcIl0pOm5vdChbdHlwZT1cImJ1dHRvblwiXSk6bm90KFt0eXBlPVwicmVzZXRcIl0pLCB0ZXh0YXJlYSwgc2VsZWN0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3ctZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9KTtcblxuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBlIGFzIEhUTUxFbGVtZW50O1xuICAgIGh0bWwucmVtb3ZlQXR0cmlidXRlKCdvbmNsaWNrJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29ubW91c2VvdmVyJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29ubW91c2VvdXQnKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25jaGFuZ2UnKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25zdWJtaXQnKTtcbiAgICBjb25zdCBzdHlsZSA9IGh0bWwuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuICAgIGlmIChzdHlsZSAmJiAhc3R5bGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSAmJiAhc3R5bGUuaW5jbHVkZXMoJ3Zpc2liaWxpdHknKSkge1xuICAgICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYW5GdWxsTW9kZShlbDogSFRNTEVsZW1lbnQsIGJhc2VVcmw6IHN0cmluZyk6IHZvaWQge1xuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaCgoYSkgPT4ge1xuICAgIGNvbnN0IGhyZWYgPSBhLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCBocmVmLnN0YXJ0c1dpdGgoJy8nKSB8fCBocmVmLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgY29uc3QgY2xlYW5lZCA9IHN0cmlwVHJhY2tpbmdGcm9tVXJsKGhyZWYsIGJhc2VVcmwpO1xuICAgICAgaWYgKGNsZWFuZWQpIHtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBjbGVhbmVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB9XG4gICAgICBhLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgYS5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgfVxuICB9KTtcblxuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBjb25zdCBzcmMgPSBpbWcuZ2V0QXR0cmlidXRlKCdzcmMnKSB8fCAnJztcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2phdmFzY3JpcHQ6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6dGV4dC9odG1sJykpIHtcbiAgICAgIGltZy5yZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2xlYW5lZCA9IHN0cmlwVHJhY2tpbmdGcm9tVXJsKHNyYywgYmFzZVVybCk7XG4gICAgICBpZiAoY2xlYW5lZCkge1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBjbGVhbmVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvLCBhdWRpbycpLmZvckVhY2goKG1lZGlhKSA9PiB7XG4gICAgbWVkaWEucmVtb3ZlQXR0cmlidXRlKCdhdXRvcGxheScpO1xuICAgIG1lZGlhLnJlbW92ZUF0dHJpYnV0ZSgnYXV0b3BsYXknKTtcbiAgICBjb25zdCBzb3VyY2VzID0gbWVkaWEucXVlcnlTZWxlY3RvckFsbCgnc291cmNlJyk7XG4gICAgc291cmNlcy5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgIGNvbnN0IHNyYyA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnO1xuICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgIHNvdXJjZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZWwucXVlcnlTZWxlY3RvckFsbCgnaWZyYW1lJykuZm9yRWFjaCgoaWZyYW1lKSA9PiB7XG4gICAgY29uc3Qgc3JjID0gaWZyYW1lLmdldEF0dHJpYnV0ZSgnc3JjJykgfHwgJyc7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICBpZnJhbWUucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmICghc3JjLnN0YXJ0c1dpdGgoJ2h0dHAnKSAmJiAhc3JjLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgaWZyYW1lLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZWwucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1jdy1mb3JtLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksIHsgb25jZTogdHJ1ZSB9KTtcbiAgfSk7XG5cbiAgZWwucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goKGUpID0+IHtcbiAgICBjb25zdCBodG1sID0gZSBhcyBIVE1MRWxlbWVudDtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25jbGljaycpO1xuICAgIGh0bWwucmVtb3ZlQXR0cmlidXRlKCdvbm1vdXNlb3ZlcicpO1xuICAgIGh0bWwucmVtb3ZlQXR0cmlidXRlKCdvbm1vdXNlb3V0Jyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29uY2hhbmdlJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29uc3VibWl0Jyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29uZm9jdXMnKTtcbiAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnb25ibHVyJyk7XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ29ubG9hZCcpO1xuICAgIGh0bWwucmVtb3ZlQXR0cmlidXRlKCdvbmVycm9yJyk7XG4gICAgY29uc3Qgc3R5bGUgPSBodG1sLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgICBpZiAoc3R5bGUgJiYgKHN0eWxlLmluY2x1ZGVzKCdleHByZXNzaW9uJykgfHwgc3R5bGUuaW5jbHVkZXMoJ2JlaGF2aW9yJykgfHwgc3R5bGUuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpKSB7XG4gICAgICBodG1sLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SW1hZ2VzKGNvbnRlbnQ6IEhUTUxFbGVtZW50KTogQXJyYXk8eyBzcmM6IHN0cmluZzsgYWx0OiBzdHJpbmc7IGNhcHRpb24/OiBzdHJpbmcgfT4ge1xuICBjb25zdCBpbWFnZXM6IEFycmF5PHsgc3JjOiBzdHJpbmc7IGFsdDogc3RyaW5nOyBjYXB0aW9uPzogc3RyaW5nIH0+ID0gW107XG5cbiAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBjb25zdCBzcmMgPSBpbWcuZ2V0QXR0cmlidXRlKCdzcmMnKSB8fCBpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgIGlmIChzcmMgJiYgIXNyYy5pbmNsdWRlcygnYXZhdGFyJykgJiYgIXNyYy5pbmNsdWRlcygnaWNvbicpICYmICFzcmMuaW5jbHVkZXMoJ2xvZ28nKSkge1xuICAgICAgY29uc3QgYWx0ID0gaW1nLmdldEF0dHJpYnV0ZSgnYWx0JykgfHwgJyc7XG4gICAgICBjb25zdCBmaWd1cmUgPSBpbWcuY2xvc2VzdCgnZmlndXJlJyk7XG4gICAgICBjb25zdCBjYXB0aW9uID0gZmlndXJlPy5xdWVyeVNlbGVjdG9yKCdmaWdjYXB0aW9uJyk/LnRleHRDb250ZW50Py50cmltKCk7XG5cbiAgICAgIGltYWdlcy5wdXNoKHsgc3JjLCBhbHQsIGNhcHRpb24gfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW1hZ2VzLnNsaWNlKDAsIDIwKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEZhdmljb24oZG9jOiBEb2N1bWVudCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGljb24gPSBkb2MucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJpY29uXCJdLCBsaW5rW3JlbD1cInNob3J0Y3V0IGljb25cIl0nKTtcbiAgY29uc3QgaHJlZiA9IGljb24/LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBcbiAgaWYgKGhyZWYpIHtcbiAgICBpZiAoaHJlZi5zdGFydHNXaXRoKCcvLycpKSByZXR1cm4gJ2h0dHBzOicgKyBocmVmO1xuICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3Qgb3JpZ2luID0gZG9jLmxvY2F0aW9uPy5vcmlnaW4gfHwgJ2h0dHBzOi8vZXhhbXBsZS5jb20nO1xuICAgICAgcmV0dXJuIG9yaWdpbiArIGhyZWY7XG4gICAgfVxuICAgIHJldHVybiBocmVmO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUmVhZGluZ1RpbWUodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3Qgd29yZHNQZXJNaW51dGUgPSAyMDA7XG4gIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgvXFxzKy8pLmxlbmd0aDtcbiAgcmV0dXJuIE1hdGgubWF4KDEsIE1hdGguY2VpbCh3b3JkcyAvIHdvcmRzUGVyTWludXRlKSk7XG59IiwiLyoqXG4gKiBMYXlvdXQgRW5naW5lIGZvciBDYWxtV2ViIFN1cGVyIFJlYWRlclxuICogXG4gKiBTaW1wbHkgaW5qZWN0cyB0aGUgZXh0cmFjdGVkIGNvbnRlbnQgaW50byBvdXIgcHJlbWl1bSBkYXJrIFVJLlxuICogUmVzcGVjdHMgdGhlIG9yaWdpbmFsIGNvbnRlbnQgc3RydWN0dXJlIC0gbm8gZm9yY2VkIHNpbmdsZS1jb2x1bW4uXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBFeHRyYWN0ZWRBcnRpY2xlIH0gZnJvbSAnLi4vZXh0cmFjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBSZWFkZXJMYXlvdXQge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHJlbmRlcjogKGFydGljbGU6IEV4dHJhY3RlZEFydGljbGUsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG9wdGlvbnM/OiB7IGZvbnQ/OiBzdHJpbmc7IGZvbnRTaXplPzogc3RyaW5nIH0sIGV4dHJhcz86IHsgaGVhZGVyPzogSFRNTEVsZW1lbnQ7IGZvb3Rlcj86IEhUTUxFbGVtZW50IH0pID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBzcGFuLmlubmVySFRNTDtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMYXlvdXQ6IFJlYWRlckxheW91dCA9IHtcbiAgaWQ6ICdkZWZhdWx0JyxcbiAgbmFtZTogJ0RlZmF1bHQnLFxuICBkZXNjcmlwdGlvbjogJ1ByZXNlcnZlcyBvcmlnaW5hbCBjb250ZW50IHN0cnVjdHVyZScsXG4gIHJlbmRlcihhcnRpY2xlLCBjb250YWluZXIsIF9vcHRpb25zID0ge30sIGV4dHJhcyA9IHt9KSB7XG4gICAgY29uc3QgaGVhZGVyRWwgPSBleHRyYXMuaGVhZGVyIHx8IGNvbnRhaW5lci5jbG9zZXN0KCcuY3ctb3ZlcmxheScpPy5xdWVyeVNlbGVjdG9yKCcuY3ctYXJ0aWNsZS1oZWFkZXInKTtcbiAgICBjb25zdCBmb290ZXJFbCA9IGV4dHJhcy5mb290ZXIgfHwgY29udGFpbmVyLmNsb3Nlc3QoJy5jdy1vdmVybGF5Jyk/LnF1ZXJ5U2VsZWN0b3IoJy5jdy1mb290ZXInKTtcblxuICAgIGlmIChoZWFkZXJFbCkge1xuICAgICAgaGVhZGVyRWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDEgY2xhc3M9XCJjdy10aXRsZS1tYWluXCI+JHtlc2NhcGVIdG1sKGFydGljbGUudGl0bGUpfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdy1tZXRhXCI+XG4gICAgICAgICAgJHthcnRpY2xlLmF1dGhvciA/IGA8c3BhbiBjbGFzcz1cImN3LW1ldGEtaXRlbVwiPiR7ZXNjYXBlSHRtbChhcnRpY2xlLmF1dGhvcil9PC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAke2FydGljbGUuYXV0aG9yICYmIGFydGljbGUuZGF0ZSA/ICc8c3BhbiBjbGFzcz1cImN3LW1ldGEtc2VwXCI+PC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAke2FydGljbGUuZGF0ZSA/IGA8c3BhbiBjbGFzcz1cImN3LW1ldGEtaXRlbVwiPiR7ZXNjYXBlSHRtbChhcnRpY2xlLmRhdGUpfTwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgJHthcnRpY2xlLnNvdXJjZSA/IGA8c3BhbiBjbGFzcz1cImN3LW1ldGEtc2VwXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiY3ctbWV0YS1pdGVtXCI+JHtlc2NhcGVIdG1sKGFydGljbGUuc291cmNlKX08L3NwYW4+YCA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgaWYgKGZvb3RlckVsKSB7XG4gICAgICBmb290ZXJFbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxhIGhyZWY9XCIke2VzY2FwZUh0bWwoYXJ0aWNsZS51cmwpfVwiIGNsYXNzPVwiY3ctc291cmNlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICR7YXJ0aWNsZS5mYXZpY29uID8gYDxpbWcgY2xhc3M9XCJjdy1mYXZpY29uXCIgc3JjPVwiJHtlc2NhcGVIdG1sKGFydGljbGUuZmF2aWNvbil9XCIgYWx0PVwiXCI+YCA6ICcnfVxuICAgICAgICAgIDxzcGFuPlZpZXcgT3JpZ2luYWw8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8YXJ0aWNsZSBjbGFzcz1cImN3LWNvbnRlbnRcIj4ke2FydGljbGUuY29udGVudEh0bWwuaW5uZXJIVE1MfTwvYXJ0aWNsZT5gO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGFsbExheW91dHM6IFJlYWRlckxheW91dFtdID0gW1xuICBkZWZhdWx0TGF5b3V0LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExheW91dChfaWQ6IHN0cmluZyk6IFJlYWRlckxheW91dCB7XG4gIHJldHVybiBkZWZhdWx0TGF5b3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b0RldGVjdExheW91dChfYXJ0aWNsZTogRXh0cmFjdGVkQXJ0aWNsZSk6IFJlYWRlckxheW91dCB7XG4gIHJldHVybiBkZWZhdWx0TGF5b3V0O1xufVxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMi4wIC0gVHVlIE1heSAxNCAyMDI0IDE4OjAxOjI5ICovXG4gIC8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICghKGdsb2JhbFRoaXMuY2hyb21lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZS5pZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cbiAgaWYgKCEoZ2xvYmFsVGhpcy5icm93c2VyICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lLmlkKSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gICAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gICAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAgIC8vIEpTT04gZmlsZS5cbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImkxOG5cIjoge1xuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkbGVcIjoge1xuICAgICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidGFic1wiOiB7XG4gICAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgICAqIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgICAqL1xuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAgICpcbiAgICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgICAgbWF4QXJnczogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCIvKipcbiAqIEFQSSBjbGllbnQgZm9yIHRoZSBEcmFjb24gcGxhdGZvcm0gQVBJLlxuICpcbiAqIFByb3ZpZGVzIHN0YW5kYXJkaXplZCBBUEkgYWNjZXNzIHdpdGg6XG4gKiAtIEF1dG9tYXRpYyBhdXRoZW50aWNhdGlvbiBoYW5kbGluZyB2aWEgQmVhcmVyIHRva2VuXG4gKiAtIFRva2VuIHJlZnJlc2ggdXNpbmcgYC9hcGkvdjEvYXV0aC9yZWZyZXNoYFxuICogLSBDb250ZW50IHNjcmlwdCBwcm94eWluZyB0aHJvdWdoIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdFxuICogLSBUZW1wb3JhcnkgbGVnYWN5IHByb2R1Y3Qtcm91dGUgaGVscGVycyBmb3IgbWlncmF0aW9uXG4gKi9cbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5jb25zdCB3YXJuZWREZXByZWNhdGlvbnMgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiB3YXJuRGVwcmVjYXRlZFByb2R1Y3RSb3V0ZShtZXRob2ROYW1lLCByb3V0ZSkge1xuICAgIGNvbnN0IGtleSA9IGAke21ldGhvZE5hbWV9OiR7cm91dGV9YDtcbiAgICBpZiAod2FybmVkRGVwcmVjYXRpb25zLmhhcyhrZXkpKVxuICAgICAgICByZXR1cm47XG4gICAgd2FybmVkRGVwcmVjYXRpb25zLmFkZChrZXkpO1xuICAgIGNvbnNvbGUud2FybihgW3d4dC1zaGFyZWRdICR7bWV0aG9kTmFtZX0oKSBpcyBkZXByZWNhdGVkLiAke3JvdXRlfSBpcyBhIGxlZ2FjeSBtaWdyYXRpb24gcm91dGUuIGAgK1xuICAgICAgICAnUHJlZmVyIHRoZSBjYW5vbmljYWwgcGxhdGZvcm0gZW5kcG9pbnRzIHVuZGVyIC9hcGkvdjEvYXV0aCwgL2FwaS92MS9iaWxsaW5nLCBhbmQgL2FwaS92MS9jaGF0L2NvbXBsZXRpb25zLicpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQVBJIENsaWVudCBGYWN0b3J5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXBpQ2xpZW50KG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZ2V0QXV0aCwgc2V0QXV0aCwgb25BdXRoRXJyb3IgfSA9IG9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGF1dGggc3RhdGVcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBdXRoU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhYXV0aC5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIHVzZXI6IGF1dGgudXNlcixcbiAgICAgICAgICAgIHRva2VuOiBhdXRoLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiBhdXRoLnN1YnNjcmlwdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGdldEF1dGhTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNBdXRoZW50aWNhdGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoIGFjY2VzcyB0b2tlbiB1c2luZyB0aGUgcGxhdGZvcm0gcmVmcmVzaCBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBhdXRoID0gYXdhaXQgZ2V0QXV0aCgpO1xuICAgICAgICBpZiAoIWF1dGgucmVmcmVzaFRva2VuKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9hcGkvdjEvYXV0aC9yZWZyZXNoYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIC8vIEluY2x1ZGUgcmVmcmVzaF90b2tlbiBjb29raWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZnJlc2ggZmFpbGVkJyk7XG4gICAgICAgICAgICAvLyBUaGUgcGxhdGZvcm0gcmV0dXJucyBuZXcgdG9rZW5zIGluIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGF3YWl0IHNldEF1dGgoe1xuICAgICAgICAgICAgICAgIC4uLmF1dGgsXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGRhdGEuc2Vzc2lvbl90b2tlbiB8fCBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IGRhdGEucmVmcmVzaF90b2tlbiB8fCBhdXRoLnJlZnJlc2hUb2tlbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBUEldIFRva2VuIHJlZnJlc2ggZmFpbGVkOicsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gZGlyZWN0IEhUVFAgcmVxdWVzdCB3aXRoIGF1dGhcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBwZXJmb3JtUmVxdWVzdChlbmRwb2ludCwgb3B0cyA9IHt9LCBpc1JldHJ5ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QgPSAnR0VUJywgYm9keSwgaGVhZGVyczogY3VzdG9tSGVhZGVycywgc2tpcEF1dGggfSA9IG9wdHM7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgLi4uY3VzdG9tSGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFza2lwQXV0aCkge1xuICAgICAgICAgICAgY29uc3QgeyB0b2tlbiwgaXNBdXRoZW50aWNhdGVkOiBhdXRoZWQgfSA9IGF3YWl0IGdldEF1dGhTdGF0ZSgpO1xuICAgICAgICAgICAgaWYgKCFhdXRoZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIHJlcXVpcmVkLiBQbGVhc2UgbG9nIGluLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluYWxCb2R5ID0gbWV0aG9kICE9PSAnR0VUJyAmJiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCB1cmwgPSBlbmRwb2ludC5zdGFydHNXaXRoKCdodHRwJylcbiAgICAgICAgICAgID8gZW5kcG9pbnRcbiAgICAgICAgICAgIDogYCR7Y29uZmlnLmFwaVVybH0ke2VuZHBvaW50fWA7XG4gICAgICAgIC8vIE5vcm1hbGl6ZSBVUkw6IHJlbW92ZSBkb3VibGUgc2xhc2hlcyBleGNlcHQgYWZ0ZXIgcHJvdG9jb2xcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLyhbXjpdKVxcL1xcLysvZywgJyQxLycpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IGZpbmFsQm9keSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBIYW5kbGUgYXV0aCBlcnJvcnNcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCBnZXRBdXRoU3RhdGUoKTtcbiAgICAgICAgICAgIC8vIFNraXAgcmVmcmVzaCBmb3IgZGVtbyB0b2tlbnMgb3IgaWYgYWxyZWFkeSByZXRyeWluZ1xuICAgICAgICAgICAgaWYgKHRva2VuPy5zdGFydHNXaXRoKCdkZW0tJykgfHwgaXNSZXRyeSkge1xuICAgICAgICAgICAgICAgIG9uQXV0aEVycm9yPy4oKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF1dGhlbnRpY2F0aW9uIGZhaWxlZCAoJHtyZXNwb25zZS5zdGF0dXN9KS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hlZCA9IGF3YWl0IHJlZnJlc2hUb2tlbnMoKTtcbiAgICAgICAgICAgIGlmIChyZWZyZXNoZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyZm9ybVJlcXVlc3QoZW5kcG9pbnQsIG9wdHMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25BdXRoRXJyb3I/LigpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXNzaW9uIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgLy8gSGFuZGxlIEhUTUwgZXJyb3IgcmVzcG9uc2VzIChsaWtlIDQwNCBTaWduYWwgTG9zdClcbiAgICAgICAgICAgIGlmIChlcnJvclRleHQuaW5jbHVkZXMoJzwhRE9DVFlQRSBodG1sPicpIHx8IGVycm9yVGV4dC5pbmNsdWRlcygnPGh0bWwnKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtBUEldIFJlY2VpdmVkIEhUTUwgZXJyb3IgZnJvbSAke3VybH0uIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDbG91ZCBjb25uZWN0aW9uIGludGVycnVwdGVkIChTdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9KS4gUGxlYXNlIGNoZWNrIHlvdXIgQVBJIFVSTC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclRleHQgfHwgYEFQSSBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFpbiBBUEkgcmVxdWVzdCBoYW5kbGVyXG4gICAgICogQXV0b21hdGljYWxseSBwcm94aWVzIHJlcXVlc3RzIHRocm91Z2ggYmFja2dyb3VuZCBzY3JpcHQgaWYgcnVubmluZyBpbiBjb250ZW50IHNjcmlwdFxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QoZW5kcG9pbnQsIG9wdHMgPSB7fSkge1xuICAgICAgICAvLyBDaGVjayBpZiBydW5uaW5nIGluIGNvbnRlbnQgc2NyaXB0XG4gICAgICAgIGNvbnN0IGlzQ29udGVudFNjcmlwdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonIHx8IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpO1xuICAgICAgICBpZiAoaXNDb250ZW50U2NyaXB0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcGlQcm94eVJlcXVlc3QnLFxuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHR5cGVvZiByZXNwb25zZSA9PT0gJ29iamVjdCcgJiYgJ2Vycm9yJyBpbiByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQVBJXSBQcm94eSByZXF1ZXN0IGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlyZWN0IHJlcXVlc3QgKFBvcHVwLCBCYWNrZ3JvdW5kLCBPcHRpb25zKVxuICAgICAgICByZXR1cm4gcGVyZm9ybVJlcXVlc3QoZW5kcG9pbnQsIG9wdHMpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gSFRUUCBNZXRob2QgU2hvcnRjdXRzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldChlbmRwb2ludCwgaGVhZGVycykge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCwgeyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzIH0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBwb3N0KGVuZHBvaW50LCBib2R5LCBoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50LCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5LCBoZWFkZXJzIH0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBwdXQoZW5kcG9pbnQsIGJvZHksIGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQsIHsgbWV0aG9kOiAnUFVUJywgYm9keSwgaGVhZGVycyB9KTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsKGVuZHBvaW50LCBoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50LCB7IG1ldGhvZDogJ0RFTEVURScsIGhlYWRlcnMgfSk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBQbGF0Zm9ybSBBUEkgb3BlcmF0aW9uc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB1c2VyIGluZm8gZnJvbSB0aGUgcGxhdGZvcm0uXG4gICAgICogUmV0dXJucyB1c2VyIGRhdGEgaW5jbHVkaW5nIHN1YnNjcmlwdGlvbiBzdGF0dXMuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9hcGkvdjEvdXNlcicsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVyY2hhc2UgcXVvdGEgdmlhIFBhZGRsZSBjaGVja291dC5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBhZGRRdW90YShhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIHBvc3QoJy9hcGkvdjEvYmlsbGluZy9jaGVja291dCcsIHsgcXVvdGE6IGFtb3VudCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgcXVvdGEgYmFsYW5jZS5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRRdW90YSgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9hcGkvdjEvYmlsbGluZy9xdW90YScsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2Fub25pY2FsIEFJIGNoYXQtY29tcGxldGlvbnMgQVBJLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYXRDb21wbGV0aW9ucyhwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBwb3N0KCcvYXBpL3YxL2NoYXQvY29tcGxldGlvbnMnLCBwYXlsb2FkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgUHJlZmVyIGBjaGF0Q29tcGxldGlvbnMoKWAuXG4gICAgICogUHJvZHVjdC1zcGVjaWZpYyBjaGF0IHJvdXRlcyBhcmUgYSBsZWdhY3kgbWlncmF0aW9uIHN1cmZhY2UuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gcHJvZHVjdENoYXRDb21wbGV0aW9ucyhwcm9kdWN0U2x1ZywgcGF5bG9hZCkge1xuICAgICAgICB3YXJuRGVwcmVjYXRlZFByb2R1Y3RSb3V0ZSgncHJvZHVjdENoYXRDb21wbGV0aW9ucycsIGAvYXBpL3YxL3Byb2R1Y3RzLyR7cHJvZHVjdFNsdWd9L2NoYXQvY29tcGxldGlvbnNgKTtcbiAgICAgICAgcmV0dXJuIHBvc3QoYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vY2hhdC9jb21wbGV0aW9uc2AsIHBheWxvYWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBQcmVmZXIgYHN1YnNjcmliZSgpYC5cbiAgICAgKiBQcm9kdWN0LXNwZWNpZmljIHN1YnNjcmliZSByb3V0ZXMgYXJlIGEgbGVnYWN5IG1pZ3JhdGlvbiBzdXJmYWNlLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHByb2R1Y3RTdWJzY3JpYmUocHJvZHVjdFNsdWcsIHByaWNlSWQpIHtcbiAgICAgICAgd2FybkRlcHJlY2F0ZWRQcm9kdWN0Um91dGUoJ3Byb2R1Y3RTdWJzY3JpYmUnLCBgL2FwaS92MS9wcm9kdWN0cy8ke3Byb2R1Y3RTbHVnfS9zdWJzY3JpYmVgKTtcbiAgICAgICAgcmV0dXJuIHBvc3QoYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vc3Vic2NyaWJlYCwgeyBwcmljZV9pZDogcHJpY2VJZCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgUHJlZmVyIGBnZXRVc2VyKClgLlxuICAgICAqIFByb2R1Y3Qtc3BlY2lmaWMgdXNlciByb3V0ZXMgYXJlIGEgbGVnYWN5IG1pZ3JhdGlvbiBzdXJmYWNlLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RVc2VyKHByb2R1Y3RTbHVnKSB7XG4gICAgICAgIHdhcm5EZXByZWNhdGVkUHJvZHVjdFJvdXRlKCdnZXRQcm9kdWN0VXNlcicsIGAvYXBpL3YxL3Byb2R1Y3RzLyR7cHJvZHVjdFNsdWd9L3VzZXJgKTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vdXNlcmAsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQ29yZVxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBwZXJmb3JtUmVxdWVzdCwgLy8gRGlyZWN0IHJlcXVlc3Qgd2l0aG91dCBwcm94eVxuICAgICAgICBnZXRBdXRoU3RhdGUsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCxcbiAgICAgICAgcmVmcmVzaFRva2VucyxcbiAgICAgICAgLy8gSFRUUCBtZXRob2RzXG4gICAgICAgIGdldCxcbiAgICAgICAgcG9zdCxcbiAgICAgICAgcHV0LFxuICAgICAgICBkZWwsXG4gICAgICAgIC8vIENhbm9uaWNhbCBwbGF0Zm9ybSBvcGVyYXRpb25zXG4gICAgICAgIGdldFVzZXIsXG4gICAgICAgIGFkZFF1b3RhLFxuICAgICAgICBnZXRRdW90YSxcbiAgICAgICAgY2hhdENvbXBsZXRpb25zLFxuICAgICAgICBwcm9kdWN0Q2hhdENvbXBsZXRpb25zLFxuICAgICAgICBwcm9kdWN0U3Vic2NyaWJlLFxuICAgICAgICBnZXRQcm9kdWN0VXNlcixcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBDb25maWd1cmF0aW9uIHV0aWxpdGllcyBmb3IgV1hUIGV4dGVuc2lvbnNcbiAqXG4gKiBQcm92aWRlcyBzdGFuZGFyZGl6ZWQgZW52aXJvbm1lbnQgY29uZmlndXJhdGlvbiB3aXRoXG4gKiBzdXBwb3J0IGZvciBsb2NhbCwgc3RhZ2luZywgYW5kIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzLlxuICovXG4vKipcbiAqIEFQSSBVUkwgbWFwcGluZ3MgZm9yIGRpZmZlcmVudCBlbnZpcm9ubWVudHNcbiAqL1xuY29uc3QgQVBJX1VSTFMgPSB7XG4gICAgbG9jYWw6IHtcbiAgICAgICAgZHJhY29uOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgICAgYXBpOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICB9LFxuICAgIHN0YWdlOiB7XG4gICAgICAgIGRyYWNvbjogJ2h0dHBzOi8vc3RhZ2UuZHJhY29uLnVrJyxcbiAgICAgICAgYXBpOiAnaHR0cHM6Ly9zdGFnZS5kcmFjb24udWsnLFxuICAgIH0sXG4gICAgcHJvZDoge1xuICAgICAgICBkcmFjb246ICdodHRwczovL2RyYWNvbi51aycsXG4gICAgICAgIGFwaTogJ2h0dHBzOi8vZHJhY29uLnVrJyxcbiAgICB9LFxufTtcbi8qKlxuICogQ3JlYXRlIGEgc3RhbmRhcmRpemVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKlxuICogQHBhcmFtIG9wdGlvbnMgLSBDb25maWd1cmF0aW9uIG9wdGlvbnNcbiAqIEByZXR1cm5zIERyYWNvbkNvbmZpZyBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGNvbnN0IGNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gKiAgIGFwcE5hbWU6ICdNeUV4dGVuc2lvbicsXG4gKiAgIGVudjogJ2xvY2FsJywgLy8gb3IgdXNlIGltcG9ydC5tZXRhLmVudi5WSVRFX0FQUF9FTlZcbiAqIH0pO1xuICogYGBgXG4gKi9cbi8qKlxuICogRGV0ZWN0IGVudmlyb25tZW50IGJhc2VkIG9uIHdpbmRvdyBsb2NhdGlvbiBvciBob3N0bmFtZVxuICogVXNlZnVsIGZvciBhdXRvLWRldGVjdGluZyBsb2NhbCBkZXZlbG9wbWVudFxuICovXG5mdW5jdGlvbiBwYXJzZUVudmlyb25tZW50KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAnbG9jYWwnIHx8IHZhbHVlID09PSAnc3RhZ2UnIHx8IHZhbHVlID09PSAncHJvZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGV0ZWN0RW52aXJvbm1lbnQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UncmUgaW4gYSBicm93c2VyIGNvbnRleHRcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIGlmIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICAgIC8vIExvY2FsIGRldmVsb3BtZW50IGRldGVjdGlvblxuICAgICAgICBpZiAoaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8IGhvc3RuYW1lID09PSAnMTI3LjAuMC4xJyB8fCBob3N0bmFtZS5pbmNsdWRlcygnbG9jYWwnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdsb2NhbCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RhZ2luZyBkZXRlY3Rpb25cbiAgICAgICAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKCdzdGFnZS4nKSB8fCBob3N0bmFtZS5pbmNsdWRlcygnc3RhZ2luZy4nKSkge1xuICAgICAgICAgICAgcmV0dXJuICdzdGFnZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvc3RuYW1lID09PSAnZHJhY29uLnVrJyB8fCBob3N0bmFtZS5lbmRzV2l0aCgnLmRyYWNvbi51aycpKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9zdG5hbWUuc3RhcnRzV2l0aCgnc3RhZ2UuJykgPyAnc3RhZ2UnIDogJ3Byb2QnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uZmlnKG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbnZGcm9tSW1wb3J0TWV0YSA9IHBhcnNlRW52aXJvbm1lbnQoaW1wb3J0Lm1ldGEuZW52Py5WSVRFX0FQUF9FTlYpO1xuICAgIGNvbnN0IGRldGVjdGVkRW52ID0gb3B0aW9ucy5hdXRvRGV0ZWN0RW52ICE9PSBmYWxzZSA/IGRldGVjdEVudmlyb25tZW50KCkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgZW52ID0gb3B0aW9ucy5lbnYgPz9cbiAgICAgICAgZW52RnJvbUltcG9ydE1ldGEgPz9cbiAgICAgICAgZGV0ZWN0ZWRFbnYgPz9cbiAgICAgICAgb3B0aW9ucy5kZWZhdWx0RW52ID8/XG4gICAgICAgICdwcm9kJztcbiAgICBpZiAoaW1wb3J0Lm1ldGEuZW52Py5WSVRFX0FQUF9FTlYgJiYgIWVudkZyb21JbXBvcnRNZXRhKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgWyR7b3B0aW9ucy5hcHBOYW1lfV0gSW52YWxpZCBWSVRFX0FQUF9FTlY9XCIke2ltcG9ydC5tZXRhLmVudi5WSVRFX0FQUF9FTlZ9XCIsIGZhbGxpbmcgYmFjayB0byBcIiR7ZW52fVwiYCk7XG4gICAgfVxuICAgIGNvbnN0IHVybHMgPSBBUElfVVJMU1tlbnZdO1xuICAgIC8vIERlYnVnIGxvZ2dpbmdcbiAgICBpZiAob3B0aW9ucy5kZWJ1ZyB8fCBpbXBvcnQubWV0YS5lbnY/LldYVF9ERUJVRyA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbJHtvcHRpb25zLmFwcE5hbWV9XSBDb25maWc6YCwgeyBlbnYsIGRyYWNvblVybDogdXJscy5kcmFjb24sIGFwaVVybDogdXJscy5hcGkgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRyYWNvblVybCA9IG9wdGlvbnMuY3VzdG9tRHJhY29uVXJsIHx8XG4gICAgICAgIGltcG9ydC5tZXRhLmVudj8uV1hUX0RSQUNPTl9VUkwgfHxcbiAgICAgICAgdXJscy5kcmFjb247XG4gICAgY29uc3QgYXBpVXJsID0gb3B0aW9ucy5jdXN0b21BcGlVcmwgfHxcbiAgICAgICAgaW1wb3J0Lm1ldGEuZW52Py5XWFRfQVBJX1VSTCB8fFxuICAgICAgICB1cmxzLmFwaTtcbiAgICAvLyBWYWxpZGF0ZSBVUkxzXG4gICAgdHJ5IHtcbiAgICAgICAgbmV3IFVSTChkcmFjb25VcmwpO1xuICAgICAgICBuZXcgVVJMKGFwaVVybCk7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBbJHtvcHRpb25zLmFwcE5hbWV9XSBJbnZhbGlkIFVSTCBjb25maWd1cmF0aW9uOmAsIHsgZHJhY29uVXJsLCBhcGlVcmwgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBpbXBvcnQubWV0YS5lbnY/LldYVF9ERUJVRyA9PT0gJ3RydWUnO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRyYWNvblVybCxcbiAgICAgICAgYXBpVXJsLFxuICAgICAgICBlbnYsXG4gICAgICAgIGFwcE5hbWU6IG9wdGlvbnMuYXBwTmFtZSxcbiAgICAgICAgZGVidWcsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgIGdvb2dsZUVuZHBvaW50OiAnL2FwaS92MS9hdXRoL2xvZ2luL2dvb2dsZScsXG4gICAgICAgICAgICBsb2dpbkVuZHBvaW50OiAnL2FwaS92MS9hdXRoL2xvZ2luJyxcbiAgICAgICAgICAgIHJlZnJlc2hFbmRwb2ludDogJy9hcGkvdjEvYXV0aC9yZWZyZXNoJyxcbiAgICAgICAgICAgIHVzZXJJbmZvRW5kcG9pbnQ6ICcvYXBpL3YxL2F1dGgvdG9rZW4vdXNlcl9pbmZvJyxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gY2hlY2sgaWYgcnVubmluZyBpbiBsb2NhbGhvc3QvZGV2ZWxvcG1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxob3N0KGNvbmZpZykge1xuICAgIHJldHVybiBjb25maWcuYXBpVXJsLmluY2x1ZGVzKCdsb2NhbGhvc3QnKSB8fCBjb25maWcuZW52ID09PSAnbG9jYWwnO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gZ2V0IGJhc2UgQVBJIFVSTCB3aXRoIHByb3BlciBmb3JtYXR0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlQXBpVXJsKGNvbmZpZykge1xuICAgIHJldHVybiBjb25maWcuYXBpVXJsLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG59XG4vKipcbiAqIEdldCB0aGUgZnVsbCBVUkwgZm9yIGEgcGxhdGZvcm0gQVBJIGVuZHBvaW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogY29uc3QgdXNlclVybCA9IGdldFBsYXRmb3JtVXJsKGNvbmZpZywgJy9hcGkvdjEvdXNlcicpO1xuICogLy8gPT4gJ2h0dHBzOi8vZHJhY29uLnVrL2FwaS92MS91c2VyJ1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF0Zm9ybVVybChjb25maWcsIHBhdGgpIHtcbiAgICByZXR1cm4gYCR7Z2V0QmFzZUFwaVVybChjb25maWcpfSR7cGF0aH1gO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGdldFBsYXRmb3JtVXJsKClgLlxuICogS2VwdCBhcyBhIGNvbXBhdGliaWxpdHkgYWxpYXMgZm9yIG9sZGVyIGV4dGVuc2lvbiBjb2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9tb1VybChjb25maWcsIHBhdGgpIHtcbiAgICByZXR1cm4gZ2V0UGxhdGZvcm1VcmwoY29uZmlnLCBwYXRoKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmdWxsIFVSTCBmb3IgYSBTYW0gQVBJIGVuZHBvaW50LlxuICogU2FtZSBhcyBgZ2V0UGxhdGZvcm1VcmwoKWAgYnV0IHNlbWFudGljYWxseSBjbGVhcmVyIGZvciBTYW1BSS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNhbVVybChjb25maWcsIHBhdGgpIHtcbiAgICByZXR1cm4gZ2V0UGxhdGZvcm1VcmwoY29uZmlnLCBwYXRoKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmdWxsIFVSTCBmb3IgYW4gQUkgc2VydmljZSBlbmRwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QUlTZXJ2aWNlVXJsKGNvbmZpZywgcGF0aCkge1xuICAgIHJldHVybiBgJHtnZXRCYXNlQXBpVXJsKGNvbmZpZyl9L2FpJHtwYXRofWA7XG59XG4vKipcbiAqIEdldCB0aGUgZnVsbCBPQXV0aCBsb2dpbiBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGhVcmwoY29uZmlnLCBwcm92aWRlciA9ICdnb29nbGUnKSB7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5kcmFjb25Vcmx9L2FwaS92MS9hdXRoL2xvZ2luLyR7cHJvdmlkZXJ9YDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vICNyZWdpb24gc25pcHBldFxuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBnbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWU/LmlkXG4gID8gZ2xvYmFsVGhpcy5icm93c2VyXG4gIDogZ2xvYmFsVGhpcy5jaHJvbWU7XG4vLyAjZW5kcmVnaW9uIHNuaXBwZXRcbiIsImNvbnN0IEVfVElNRU9VVCA9IG5ldyBFcnJvcigndGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBtdXRleCB0byBiZWNvbWUgYXZhaWxhYmxlJyk7XG5jb25zdCBFX0FMUkVBRFlfTE9DS0VEID0gbmV3IEVycm9yKCdtdXRleCBhbHJlYWR5IGxvY2tlZCcpO1xuY29uc3QgRV9DQU5DRUxFRCA9IG5ldyBFcnJvcigncmVxdWVzdCBmb3IgbG9jayBjYW5jZWxlZCcpO1xuXG52YXIgX19hd2FpdGVyJDIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNsYXNzIFNlbWFwaG9yZSB7XG4gICAgY29uc3RydWN0b3IoX3ZhbHVlLCBfY2FuY2VsRXJyb3IgPSBFX0NBTkNFTEVEKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gX3ZhbHVlO1xuICAgICAgICB0aGlzLl9jYW5jZWxFcnJvciA9IF9jYW5jZWxFcnJvcjtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzID0gW107XG4gICAgfVxuICAgIGFjcXVpcmUod2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0geyByZXNvbHZlLCByZWplY3QsIHdlaWdodCwgcHJpb3JpdHkgfTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBmaW5kSW5kZXhGcm9tRW5kKHRoaXMuX3F1ZXVlLCAob3RoZXIpID0+IHByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSAmJiB3ZWlnaHQgPD0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBOZWVkcyBpbW1lZGlhdGUgZGlzcGF0Y2gsIHNraXAgdGhlIHF1ZXVlXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hJdGVtKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcXVldWUuc3BsaWNlKGkgKyAxLCAwLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFja18xKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChjYWxsYmFjaywgd2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBbdmFsdWUsIHJlbGVhc2VdID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvdWxkTG9ja0ltbWVkaWF0ZWx5KHdlaWdodCwgcHJpb3JpdHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdID0gW107XG4gICAgICAgICAgICAgICAgaW5zZXJ0U29ydGVkKHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSwgeyByZXNvbHZlLCBwcmlvcml0eSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzTG9ja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgPD0gMDtcbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hRdWV1ZSgpO1xuICAgIH1cbiAgICByZWxlYXNlKHdlaWdodCA9IDEpIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgKz0gd2VpZ2h0O1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5fcXVldWUuZm9yRWFjaCgoZW50cnkpID0+IGVudHJ5LnJlamVjdCh0aGlzLl9jYW5jZWxFcnJvcikpO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hRdWV1ZSgpIHtcbiAgICAgICAgdGhpcy5fZHJhaW5VbmxvY2tXYWl0ZXJzKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX3F1ZXVlWzBdLndlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hJdGVtKHRoaXMuX3F1ZXVlLnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5VbmxvY2tXYWl0ZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Rpc3BhdGNoSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgLT0gaXRlbS53ZWlnaHQ7XG4gICAgICAgIGl0ZW0ucmVzb2x2ZShbcHJldmlvdXNWYWx1ZSwgdGhpcy5fbmV3UmVsZWFzZXIoaXRlbS53ZWlnaHQpXSk7XG4gICAgfVxuICAgIF9uZXdSZWxlYXNlcih3ZWlnaHQpIHtcbiAgICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIF9kcmFpblVubG9ja1dhaXRlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IHdlaWdodCA9IHRoaXMuX3ZhbHVlOyB3ZWlnaHQgPiAwOyB3ZWlnaHQtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRlcnMgPSB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKCF3YWl0ZXJzKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB3YWl0ZXJzLmZvckVhY2goKHdhaXRlcikgPT4gd2FpdGVyLnJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBxdWV1ZWRQcmlvcml0eSA9IHRoaXMuX3F1ZXVlWzBdLnByaW9yaXR5O1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB3YWl0ZXJzLmZpbmRJbmRleCgod2FpdGVyKSA9PiB3YWl0ZXIucHJpb3JpdHkgPD0gcXVldWVkUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIChpID09PSAtMSA/IHdhaXRlcnMgOiB3YWl0ZXJzLnNwbGljZSgwLCBpKSlcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHdhaXRlciA9PiB3YWl0ZXIucmVzb2x2ZSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvdWxkTG9ja0ltbWVkaWF0ZWx5KHdlaWdodCwgcHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5fcXVldWVbMF0ucHJpb3JpdHkgPCBwcmlvcml0eSkgJiZcbiAgICAgICAgICAgIHdlaWdodCA8PSB0aGlzLl92YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnNlcnRTb3J0ZWQoYSwgdikge1xuICAgIGNvbnN0IGkgPSBmaW5kSW5kZXhGcm9tRW5kKGEsIChvdGhlcikgPT4gdi5wcmlvcml0eSA8PSBvdGhlci5wcmlvcml0eSk7XG4gICAgYS5zcGxpY2UoaSArIDEsIDAsIHYpO1xufVxuZnVuY3Rpb24gZmluZEluZGV4RnJvbUVuZChhLCBwcmVkaWNhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbnZhciBfX2F3YWl0ZXIkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgTXV0ZXgge1xuICAgIGNvbnN0cnVjdG9yKGNhbmNlbEVycm9yKSB7XG4gICAgICAgIHRoaXMuX3NlbWFwaG9yZSA9IG5ldyBTZW1hcGhvcmUoMSwgY2FuY2VsRXJyb3IpO1xuICAgIH1cbiAgICBhY3F1aXJlKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyJDEodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAocHJpb3JpdHkgPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBbLCByZWxlYXNlcl0gPSB5aWVsZCB0aGlzLl9zZW1hcGhvcmUuYWNxdWlyZSgxLCBwcmlvcml0eSk7XG4gICAgICAgICAgICByZXR1cm4gcmVsZWFzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHByaW9yaXR5ID0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLnJ1bkV4Y2x1c2l2ZSgoKSA9PiBjYWxsYmFjaygpLCAxLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIGlzTG9ja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmlzTG9ja2VkKCk7XG4gICAgfVxuICAgIHdhaXRGb3JVbmxvY2socHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUud2FpdEZvclVubG9jaygxLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKSlcbiAgICAgICAgICAgIHRoaXMuX3NlbWFwaG9yZS5yZWxlYXNlKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5jYW5jZWwoKTtcbiAgICB9XG59XG5cbnZhciBfX2F3YWl0ZXIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHdpdGhUaW1lb3V0KHN5bmMsIHRpbWVvdXQsIHRpbWVvdXRFcnJvciA9IEVfVElNRU9VVCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjcXVpcmU6ICh3ZWlnaHRPclByaW9yaXR5LCBwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgbGV0IHdlaWdodDtcbiAgICAgICAgICAgIGlmIChpc1NlbWFwaG9yZShzeW5jKSkge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlaWdodCAhPT0gdW5kZWZpbmVkICYmIHdlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzVGltZW91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpc1RpbWVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGltZW91dEVycm9yKTtcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCAoaXNTZW1hcGhvcmUoc3luYylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3luYy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN5bmMuYWNxdWlyZShwcmlvcml0eSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxlYXNlID0gQXJyYXkuaXNBcnJheSh0aWNrZXQpID8gdGlja2V0WzFdIDogdGlja2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRpY2tldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHdlaWdodCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlbGVhc2UgPSAoKSA9PiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2V0ID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aWNrZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlID0gdGlja2V0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKHRpY2tldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlID0gdGlja2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsZWFzZSh3ZWlnaHQpIHtcbiAgICAgICAgICAgIHN5bmMucmVsZWFzZSh3ZWlnaHQpO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3luYy5jYW5jZWwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2FpdEZvclVubG9jazogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdCh0aW1lb3V0RXJyb3IpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAoaXNTZW1hcGhvcmUoc3luYylcbiAgICAgICAgICAgICAgICAgICAgPyBzeW5jLndhaXRGb3JVbmxvY2sod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgOiBzeW5jLndhaXRGb3JVbmxvY2socHJpb3JpdHkpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBpc0xvY2tlZDogKCkgPT4gc3luYy5pc0xvY2tlZCgpLFxuICAgICAgICBnZXRWYWx1ZTogKCkgPT4gc3luYy5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRWYWx1ZTogKHZhbHVlKSA9PiBzeW5jLnNldFZhbHVlKHZhbHVlKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNTZW1hcGhvcmUoc3luYykge1xuICAgIHJldHVybiBzeW5jLmdldFZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGlzbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZnVuY3Rpb24gdHJ5QWNxdWlyZShzeW5jLCBhbHJlYWR5QWNxdWlyZWRFcnJvciA9IEVfQUxSRUFEWV9MT0NLRUQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiB3aXRoVGltZW91dChzeW5jLCAwLCBhbHJlYWR5QWNxdWlyZWRFcnJvcik7XG59XG5cbmV4cG9ydCB7IEVfQUxSRUFEWV9MT0NLRUQsIEVfQ0FOQ0VMRUQsIEVfVElNRU9VVCwgTXV0ZXgsIFNlbWFwaG9yZSwgdHJ5QWNxdWlyZSwgd2l0aFRpbWVvdXQgfTtcbiIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5leHBvcnQgZnVuY3Rpb24gZGVxdWFsKGZvbywgYmFyKSB7XG5cdHZhciBjdG9yLCBsZW47XG5cdGlmIChmb28gPT09IGJhcikgcmV0dXJuIHRydWU7XG5cblx0aWYgKGZvbyAmJiBiYXIgJiYgKGN0b3I9Zm9vLmNvbnN0cnVjdG9yKSA9PT0gYmFyLmNvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKGN0b3IgPT09IERhdGUpIHJldHVybiBmb28uZ2V0VGltZSgpID09PSBiYXIuZ2V0VGltZSgpO1xuXHRcdGlmIChjdG9yID09PSBSZWdFeHApIHJldHVybiBmb28udG9TdHJpbmcoKSA9PT0gYmFyLnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdGlmICgobGVuPWZvby5sZW5ndGgpID09PSBiYXIubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBkZXF1YWwoZm9vW2xlbl0sIGJhcltsZW5dKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoIWN0b3IgfHwgdHlwZW9mIGZvbyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGxlbiA9IDA7XG5cdFx0XHRmb3IgKGN0b3IgaW4gZm9vKSB7XG5cdFx0XHRcdGlmIChoYXMuY2FsbChmb28sIGN0b3IpICYmICsrbGVuICYmICFoYXMuY2FsbChiYXIsIGN0b3IpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlmICghKGN0b3IgaW4gYmFyKSB8fCAhZGVxdWFsKGZvb1tjdG9yXSwgYmFyW2N0b3JdKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGJhcikubGVuZ3RoID09PSBsZW47XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZvbyAhPT0gZm9vICYmIGJhciAhPT0gYmFyO1xufVxuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJAd3h0LWRldi9icm93c2VyXCI7XG5pbXBvcnQgeyBNdXRleCB9IGZyb20gXCJhc3luYy1tdXRleFwiO1xuaW1wb3J0IHsgZGVxdWFsIH0gZnJvbSBcImRlcXVhbC9saXRlXCI7XG5cbi8vI3JlZ2lvbiBzcmMvaW5kZXgudHNcbi8qKlxuKiBTaW1wbGlmaWVkIHN0b3JhZ2UgQVBJcyB3aXRoIHN1cHBvcnQgZm9yIHZlcnNpb25lZCBmaWVsZHMsIHNuYXBzaG90cywgbWV0YWRhdGEsIGFuZCBpdGVtIGRlZmluaXRpb25zLlxuKlxuKiBTZWUgW3RoZSBndWlkZV0oaHR0cHM6Ly93eHQuZGV2L3N0b3JhZ2UuaHRtbCkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4qIEBtb2R1bGUgQHd4dC1kZXYvc3RvcmFnZVxuKi9cbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVTdG9yYWdlKCk7XG5mdW5jdGlvbiBjcmVhdGVTdG9yYWdlKCkge1xuXHRjb25zdCBkcml2ZXJzID0ge1xuXHRcdGxvY2FsOiBjcmVhdGVEcml2ZXIoXCJsb2NhbFwiKSxcblx0XHRzZXNzaW9uOiBjcmVhdGVEcml2ZXIoXCJzZXNzaW9uXCIpLFxuXHRcdHN5bmM6IGNyZWF0ZURyaXZlcihcInN5bmNcIiksXG5cdFx0bWFuYWdlZDogY3JlYXRlRHJpdmVyKFwibWFuYWdlZFwiKVxuXHR9O1xuXHRjb25zdCBnZXREcml2ZXIgPSAoYXJlYSkgPT4ge1xuXHRcdGNvbnN0IGRyaXZlciA9IGRyaXZlcnNbYXJlYV07XG5cdFx0aWYgKGRyaXZlciA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBhcmVhTmFtZXMgPSBPYmplY3Qua2V5cyhkcml2ZXJzKS5qb2luKFwiLCBcIik7XG5cdFx0XHR0aHJvdyBFcnJvcihgSW52YWxpZCBhcmVhIFwiJHthcmVhfVwiLiBPcHRpb25zOiAke2FyZWFOYW1lc31gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRyaXZlcjtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZUtleSA9IChrZXkpID0+IHtcblx0XHRjb25zdCBkZWxpbWluYXRvckluZGV4ID0ga2V5LmluZGV4T2YoXCI6XCIpO1xuXHRcdGNvbnN0IGRyaXZlckFyZWEgPSBrZXkuc3Vic3RyaW5nKDAsIGRlbGltaW5hdG9ySW5kZXgpO1xuXHRcdGNvbnN0IGRyaXZlcktleSA9IGtleS5zdWJzdHJpbmcoZGVsaW1pbmF0b3JJbmRleCArIDEpO1xuXHRcdGlmIChkcml2ZXJLZXkgPT0gbnVsbCkgdGhyb3cgRXJyb3IoYFN0b3JhZ2Uga2V5IHNob3VsZCBiZSBpbiB0aGUgZm9ybSBvZiBcImFyZWE6a2V5XCIsIGJ1dCByZWNlaXZlZCBcIiR7a2V5fVwiYCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRyaXZlckFyZWEsXG5cdFx0XHRkcml2ZXJLZXksXG5cdFx0XHRkcml2ZXI6IGdldERyaXZlcihkcml2ZXJBcmVhKVxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGdldE1ldGFLZXkgPSAoa2V5KSA9PiBrZXkgKyBcIiRcIjtcblx0Y29uc3QgbWVyZ2VNZXRhID0gKG9sZE1ldGEsIG5ld01ldGEpID0+IHtcblx0XHRjb25zdCBuZXdGaWVsZHMgPSB7IC4uLm9sZE1ldGEgfTtcblx0XHRPYmplY3QuZW50cmllcyhuZXdNZXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblx0XHRcdGlmICh2YWx1ZSA9PSBudWxsKSBkZWxldGUgbmV3RmllbGRzW2tleV07XG5cdFx0XHRlbHNlIG5ld0ZpZWxkc1trZXldID0gdmFsdWU7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIG5ld0ZpZWxkcztcblx0fTtcblx0Y29uc3QgZ2V0VmFsdWVPckZhbGxiYWNrID0gKHZhbHVlLCBmYWxsYmFjaykgPT4gdmFsdWUgPz8gZmFsbGJhY2sgPz8gbnVsbDtcblx0Y29uc3QgZ2V0TWV0YVZhbHVlID0gKHByb3BlcnRpZXMpID0+IHR5cGVvZiBwcm9wZXJ0aWVzID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IHt9O1xuXHRjb25zdCBnZXRJdGVtID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKSA9PiB7XG5cdFx0cmV0dXJuIGdldFZhbHVlT3JGYWxsYmFjayhhd2FpdCBkcml2ZXIuZ2V0SXRlbShkcml2ZXJLZXkpLCBvcHRzPy5mYWxsYmFjayA/PyBvcHRzPy5kZWZhdWx0VmFsdWUpO1xuXHR9O1xuXHRjb25zdCBnZXRNZXRhID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5KSA9PiB7XG5cdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoZHJpdmVyS2V5KTtcblx0XHRyZXR1cm4gZ2V0TWV0YVZhbHVlKGF3YWl0IGRyaXZlci5nZXRJdGVtKG1ldGFLZXkpKTtcblx0fTtcblx0Y29uc3Qgc2V0SXRlbSA9IGFzeW5jIChkcml2ZXIsIGRyaXZlcktleSwgdmFsdWUpID0+IHtcblx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbShkcml2ZXJLZXksIHZhbHVlID8/IG51bGwpO1xuXHR9O1xuXHRjb25zdCBzZXRNZXRhID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoZHJpdmVyS2V5KTtcblx0XHRjb25zdCBleGlzdGluZ0ZpZWxkcyA9IGdldE1ldGFWYWx1ZShhd2FpdCBkcml2ZXIuZ2V0SXRlbShtZXRhS2V5KSk7XG5cdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW0obWV0YUtleSwgbWVyZ2VNZXRhKGV4aXN0aW5nRmllbGRzLCBwcm9wZXJ0aWVzKSk7XG5cdH07XG5cdGNvbnN0IHJlbW92ZUl0ZW0gPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpID0+IHtcblx0XHRhd2FpdCBkcml2ZXIucmVtb3ZlSXRlbShkcml2ZXJLZXkpO1xuXHRcdGlmIChvcHRzPy5yZW1vdmVNZXRhKSB7XG5cdFx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdFx0YXdhaXQgZHJpdmVyLnJlbW92ZUl0ZW0obWV0YUtleSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZW1vdmVNZXRhID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoZHJpdmVyS2V5KTtcblx0XHRpZiAocHJvcGVydGllcyA9PSBudWxsKSBhd2FpdCBkcml2ZXIucmVtb3ZlSXRlbShtZXRhS2V5KTtcblx0XHRlbHNlIHtcblx0XHRcdGNvbnN0IG5ld0ZpZWxkcyA9IGdldE1ldGFWYWx1ZShhd2FpdCBkcml2ZXIuZ2V0SXRlbShtZXRhS2V5KSk7XG5cdFx0XHRbcHJvcGVydGllc10uZmxhdCgpLmZvckVhY2goKGZpZWxkKSA9PiBkZWxldGUgbmV3RmllbGRzW2ZpZWxkXSk7XG5cdFx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbShtZXRhS2V5LCBuZXdGaWVsZHMpO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgd2F0Y2ggPSAoZHJpdmVyLCBkcml2ZXJLZXksIGNiKSA9PiBkcml2ZXIud2F0Y2goZHJpdmVyS2V5LCBjYik7XG5cdHJldHVybiB7XG5cdFx0Z2V0SXRlbTogYXN5bmMgKGtleSwgb3B0cykgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0cmV0dXJuIGF3YWl0IGdldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpO1xuXHRcdH0sXG5cdFx0Z2V0SXRlbXM6IGFzeW5jIChrZXlzKSA9PiB7XG5cdFx0XHRjb25zdCBhcmVhVG9LZXlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0Y29uc3Qga2V5VG9PcHRzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdGNvbnN0IG9yZGVyZWRLZXlzID0gW107XG5cdFx0XHRrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRsZXQga2V5U3RyO1xuXHRcdFx0XHRsZXQgb3B0cztcblx0XHRcdFx0aWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIGtleVN0ciA9IGtleTtcblx0XHRcdFx0ZWxzZSBpZiAoXCJnZXRWYWx1ZVwiIGluIGtleSkge1xuXHRcdFx0XHRcdGtleVN0ciA9IGtleS5rZXk7XG5cdFx0XHRcdFx0b3B0cyA9IHsgZmFsbGJhY2s6IGtleS5mYWxsYmFjayB9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGtleVN0ciA9IGtleS5rZXk7XG5cdFx0XHRcdFx0b3B0cyA9IGtleS5vcHRpb25zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9yZGVyZWRLZXlzLnB1c2goa2V5U3RyKTtcblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5U3RyKTtcblx0XHRcdFx0Y29uc3QgYXJlYUtleXMgPSBhcmVhVG9LZXlNYXAuZ2V0KGRyaXZlckFyZWEpID8/IFtdO1xuXHRcdFx0XHRhcmVhVG9LZXlNYXAuc2V0KGRyaXZlckFyZWEsIGFyZWFLZXlzLmNvbmNhdChkcml2ZXJLZXkpKTtcblx0XHRcdFx0a2V5VG9PcHRzTWFwLnNldChrZXlTdHIsIG9wdHMpO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCByZXN1bHRzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oYXJlYVRvS2V5TWFwLmVudHJpZXMoKSkubWFwKGFzeW5jIChbZHJpdmVyQXJlYSwga2V5c10pID0+IHtcblx0XHRcdFx0KGF3YWl0IGRyaXZlcnNbZHJpdmVyQXJlYV0uZ2V0SXRlbXMoa2V5cykpLmZvckVhY2goKGRyaXZlclJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGAke2RyaXZlckFyZWF9OiR7ZHJpdmVyUmVzdWx0LmtleX1gO1xuXHRcdFx0XHRcdGNvbnN0IG9wdHMgPSBrZXlUb09wdHNNYXAuZ2V0KGtleSk7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRWYWx1ZU9yRmFsbGJhY2soZHJpdmVyUmVzdWx0LnZhbHVlLCBvcHRzPy5mYWxsYmFjayA/PyBvcHRzPy5kZWZhdWx0VmFsdWUpO1xuXHRcdFx0XHRcdHJlc3VsdHNNYXAuc2V0KGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pKTtcblx0XHRcdHJldHVybiBvcmRlcmVkS2V5cy5tYXAoKGtleSkgPT4gKHtcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZTogcmVzdWx0c01hcC5nZXQoa2V5KVxuXHRcdFx0fSkpO1xuXHRcdH0sXG5cdFx0Z2V0TWV0YTogYXN5bmMgKGtleSkgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0cmV0dXJuIGF3YWl0IGdldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXkpO1xuXHRcdH0sXG5cdFx0Z2V0TWV0YXM6IGFzeW5jIChhcmdzKSA9PiB7XG5cdFx0XHRjb25zdCBrZXlzID0gYXJncy5tYXAoKGFyZykgPT4ge1xuXHRcdFx0XHRjb25zdCBrZXkgPSB0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiID8gYXJnIDogYXJnLmtleTtcblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0ZHJpdmVyQXJlYSxcblx0XHRcdFx0XHRkcml2ZXJLZXksXG5cdFx0XHRcdFx0ZHJpdmVyTWV0YUtleTogZ2V0TWV0YUtleShkcml2ZXJLZXkpXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGFyZWFUb0RyaXZlck1ldGFLZXlzTWFwID0ga2V5cy5yZWR1Y2UoKG1hcCwga2V5KSA9PiB7XG5cdFx0XHRcdG1hcFtrZXkuZHJpdmVyQXJlYV0gPz89IFtdO1xuXHRcdFx0XHRtYXBba2V5LmRyaXZlckFyZWFdLnB1c2goa2V5KTtcblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH0sIHt9KTtcblx0XHRcdGNvbnN0IHJlc3VsdHNNYXAgPSB7fTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5lbnRyaWVzKGFyZWFUb0RyaXZlck1ldGFLZXlzTWFwKS5tYXAoYXN5bmMgKFthcmVhLCBrZXlzXSkgPT4ge1xuXHRcdFx0XHRjb25zdCBhcmVhUmVzID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldChrZXlzLm1hcCgoa2V5KSA9PiBrZXkuZHJpdmVyTWV0YUtleSkpO1xuXHRcdFx0XHRrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdHNNYXBba2V5LmtleV0gPSBhcmVhUmVzW2tleS5kcml2ZXJNZXRhS2V5XSA/PyB7fTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KSk7XG5cdFx0XHRyZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4gKHtcblx0XHRcdFx0a2V5OiBrZXkua2V5LFxuXHRcdFx0XHRtZXRhOiByZXN1bHRzTWFwW2tleS5rZXldXG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRzZXRJdGVtOiBhc3luYyAoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0YXdhaXQgc2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgdmFsdWUpO1xuXHRcdH0sXG5cdFx0c2V0SXRlbXM6IGFzeW5jIChpdGVtcykgPT4ge1xuXHRcdFx0Y29uc3QgYXJlYVRvS2V5VmFsdWVNYXAgPSB7fTtcblx0XHRcdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoXCJrZXlcIiBpbiBpdGVtID8gaXRlbS5rZXkgOiBpdGVtLml0ZW0ua2V5KTtcblx0XHRcdFx0YXJlYVRvS2V5VmFsdWVNYXBbZHJpdmVyQXJlYV0gPz89IFtdO1xuXHRcdFx0XHRhcmVhVG9LZXlWYWx1ZU1hcFtkcml2ZXJBcmVhXS5wdXNoKHtcblx0XHRcdFx0XHRrZXk6IGRyaXZlcktleSxcblx0XHRcdFx0XHR2YWx1ZTogaXRlbS52YWx1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmVudHJpZXMoYXJlYVRvS2V5VmFsdWVNYXApLm1hcChhc3luYyAoW2RyaXZlckFyZWEsIHZhbHVlc10pID0+IHtcblx0XHRcdFx0YXdhaXQgZ2V0RHJpdmVyKGRyaXZlckFyZWEpLnNldEl0ZW1zKHZhbHVlcyk7XG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRzZXRNZXRhOiBhc3luYyAoa2V5LCBwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRhd2FpdCBzZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKTtcblx0XHR9LFxuXHRcdHNldE1ldGFzOiBhc3luYyAoaXRlbXMpID0+IHtcblx0XHRcdGNvbnN0IGFyZWFUb01ldGFVcGRhdGVzTWFwID0ge307XG5cdFx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgZHJpdmVyQXJlYSwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KFwia2V5XCIgaW4gaXRlbSA/IGl0ZW0ua2V5IDogaXRlbS5pdGVtLmtleSk7XG5cdFx0XHRcdGFyZWFUb01ldGFVcGRhdGVzTWFwW2RyaXZlckFyZWFdID8/PSBbXTtcblx0XHRcdFx0YXJlYVRvTWV0YVVwZGF0ZXNNYXBbZHJpdmVyQXJlYV0ucHVzaCh7XG5cdFx0XHRcdFx0a2V5OiBkcml2ZXJLZXksXG5cdFx0XHRcdFx0cHJvcGVydGllczogaXRlbS5tZXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChPYmplY3QuZW50cmllcyhhcmVhVG9NZXRhVXBkYXRlc01hcCkubWFwKGFzeW5jIChbc3RvcmFnZUFyZWEsIHVwZGF0ZXNdKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRyaXZlciA9IGdldERyaXZlcihzdG9yYWdlQXJlYSk7XG5cdFx0XHRcdGNvbnN0IG1ldGFLZXlzID0gdXBkYXRlcy5tYXAoKHsga2V5IH0pID0+IGdldE1ldGFLZXkoa2V5KSk7XG5cdFx0XHRcdGNvbnN0IGV4aXN0aW5nTWV0YXMgPSBhd2FpdCBkcml2ZXIuZ2V0SXRlbXMobWV0YUtleXMpO1xuXHRcdFx0XHRjb25zdCBleGlzdGluZ01ldGFNYXAgPSBPYmplY3QuZnJvbUVudHJpZXMoZXhpc3RpbmdNZXRhcy5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBba2V5LCBnZXRNZXRhVmFsdWUodmFsdWUpXSkpO1xuXHRcdFx0XHRjb25zdCBtZXRhVXBkYXRlcyA9IHVwZGF0ZXMubWFwKCh7IGtleSwgcHJvcGVydGllcyB9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoa2V5KTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0a2V5OiBtZXRhS2V5LFxuXHRcdFx0XHRcdFx0dmFsdWU6IG1lcmdlTWV0YShleGlzdGluZ01ldGFNYXBbbWV0YUtleV0gPz8ge30sIHByb3BlcnRpZXMpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtcyhtZXRhVXBkYXRlcyk7XG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRyZW1vdmVJdGVtOiBhc3luYyAoa2V5LCBvcHRzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRhd2FpdCByZW1vdmVJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKTtcblx0XHR9LFxuXHRcdHJlbW92ZUl0ZW1zOiBhc3luYyAoa2V5cykgPT4ge1xuXHRcdFx0Y29uc3QgYXJlYVRvS2V5c01hcCA9IHt9O1xuXHRcdFx0a2V5cy5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdFx0bGV0IGtleVN0cjtcblx0XHRcdFx0bGV0IG9wdHM7XG5cdFx0XHRcdGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSBrZXlTdHIgPSBrZXk7XG5cdFx0XHRcdGVsc2UgaWYgKFwiZ2V0VmFsdWVcIiBpbiBrZXkpIGtleVN0ciA9IGtleS5rZXk7XG5cdFx0XHRcdGVsc2UgaWYgKFwiaXRlbVwiIGluIGtleSkge1xuXHRcdFx0XHRcdGtleVN0ciA9IGtleS5pdGVtLmtleTtcblx0XHRcdFx0XHRvcHRzID0ga2V5Lm9wdGlvbnM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0a2V5U3RyID0ga2V5LmtleTtcblx0XHRcdFx0XHRvcHRzID0ga2V5Lm9wdGlvbnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5U3RyKTtcblx0XHRcdFx0YXJlYVRvS2V5c01hcFtkcml2ZXJBcmVhXSA/Pz0gW107XG5cdFx0XHRcdGFyZWFUb0tleXNNYXBbZHJpdmVyQXJlYV0ucHVzaChkcml2ZXJLZXkpO1xuXHRcdFx0XHRpZiAob3B0cz8ucmVtb3ZlTWV0YSkgYXJlYVRvS2V5c01hcFtkcml2ZXJBcmVhXS5wdXNoKGdldE1ldGFLZXkoZHJpdmVyS2V5KSk7XG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5lbnRyaWVzKGFyZWFUb0tleXNNYXApLm1hcChhc3luYyAoW2RyaXZlckFyZWEsIGtleXNdKSA9PiB7XG5cdFx0XHRcdGF3YWl0IGdldERyaXZlcihkcml2ZXJBcmVhKS5yZW1vdmVJdGVtcyhrZXlzKTtcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdGNsZWFyOiBhc3luYyAoYmFzZSkgPT4ge1xuXHRcdFx0YXdhaXQgZ2V0RHJpdmVyKGJhc2UpLmNsZWFyKCk7XG5cdFx0fSxcblx0XHRyZW1vdmVNZXRhOiBhc3luYyAoa2V5LCBwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRhd2FpdCByZW1vdmVNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKTtcblx0XHR9LFxuXHRcdHNuYXBzaG90OiBhc3luYyAoYmFzZSwgb3B0cykgPT4ge1xuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldERyaXZlcihiYXNlKS5zbmFwc2hvdCgpO1xuXHRcdFx0b3B0cz8uZXhjbHVkZUtleXM/LmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRkZWxldGUgZGF0YVtrZXldO1xuXHRcdFx0XHRkZWxldGUgZGF0YVtnZXRNZXRhS2V5KGtleSldO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9LFxuXHRcdHJlc3RvcmVTbmFwc2hvdDogYXN5bmMgKGJhc2UsIGRhdGEpID0+IHtcblx0XHRcdGF3YWl0IGdldERyaXZlcihiYXNlKS5yZXN0b3JlU25hcHNob3QoZGF0YSk7XG5cdFx0fSxcblx0XHR3YXRjaDogKGtleSwgY2IpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdHJldHVybiB3YXRjaChkcml2ZXIsIGRyaXZlcktleSwgY2IpO1xuXHRcdH0sXG5cdFx0dW53YXRjaCgpIHtcblx0XHRcdE9iamVjdC52YWx1ZXMoZHJpdmVycykuZm9yRWFjaCgoZHJpdmVyKSA9PiB7XG5cdFx0XHRcdGRyaXZlci51bndhdGNoKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGRlZmluZUl0ZW06IChrZXksIG9wdHMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGNvbnN0IHsgdmVyc2lvbjogdGFyZ2V0VmVyc2lvbiA9IDEsIG1pZ3JhdGlvbnMgPSB7fSwgb25NaWdyYXRpb25Db21wbGV0ZSwgZGVidWcgPSBmYWxzZSB9ID0gb3B0cyA/PyB7fTtcblx0XHRcdGlmICh0YXJnZXRWZXJzaW9uIDwgMSkgdGhyb3cgRXJyb3IoXCJTdG9yYWdlIGl0ZW0gdmVyc2lvbiBjYW5ub3QgYmUgbGVzcyB0aGFuIDEuIEluaXRpYWwgdmVyc2lvbnMgc2hvdWxkIGJlIHNldCB0byAxLCBub3QgMC5cIik7XG5cdFx0XHRsZXQgbmVlZHNWZXJzaW9uU2V0ID0gZmFsc2U7XG5cdFx0XHRjb25zdCBtaWdyYXRlID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBkcml2ZXJNZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdFx0XHRjb25zdCBbeyB2YWx1ZSB9LCB7IHZhbHVlOiBtZXRhIH1dID0gYXdhaXQgZHJpdmVyLmdldEl0ZW1zKFtkcml2ZXJLZXksIGRyaXZlck1ldGFLZXldKTtcblx0XHRcdFx0bmVlZHNWZXJzaW9uU2V0ID0gdmFsdWUgPT0gbnVsbCAmJiBtZXRhPy52ID09IG51bGwgJiYgISF0YXJnZXRWZXJzaW9uO1xuXHRcdFx0XHRpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VmVyc2lvbiA9IG1ldGE/LnYgPz8gMTtcblx0XHRcdFx0aWYgKGN1cnJlbnRWZXJzaW9uID4gdGFyZ2V0VmVyc2lvbikgdGhyb3cgRXJyb3IoYFZlcnNpb24gZG93bmdyYWRlIGRldGVjdGVkICh2JHtjdXJyZW50VmVyc2lvbn0gLT4gdiR7dGFyZ2V0VmVyc2lvbn0pIGZvciBcIiR7a2V5fVwiYCk7XG5cdFx0XHRcdGlmIChjdXJyZW50VmVyc2lvbiA9PT0gdGFyZ2V0VmVyc2lvbikgcmV0dXJuO1xuXHRcdFx0XHRpZiAoZGVidWcpIGNvbnNvbGUuZGVidWcoYFtAd3h0LWRldi9zdG9yYWdlXSBSdW5uaW5nIHN0b3JhZ2UgbWlncmF0aW9uIGZvciAke2tleX06IHYke2N1cnJlbnRWZXJzaW9ufSAtPiB2JHt0YXJnZXRWZXJzaW9ufWApO1xuXHRcdFx0XHRjb25zdCBtaWdyYXRpb25zVG9SdW4gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0YXJnZXRWZXJzaW9uIC0gY3VycmVudFZlcnNpb24gfSwgKF8sIGkpID0+IGN1cnJlbnRWZXJzaW9uICsgaSArIDEpO1xuXHRcdFx0XHRsZXQgbWlncmF0ZWRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1pZ3JhdGVUb1ZlcnNpb24gb2YgbWlncmF0aW9uc1RvUnVuKSB0cnkge1xuXHRcdFx0XHRcdG1pZ3JhdGVkVmFsdWUgPSBhd2FpdCBtaWdyYXRpb25zPy5bbWlncmF0ZVRvVmVyc2lvbl0/LihtaWdyYXRlZFZhbHVlKSA/PyBtaWdyYXRlZFZhbHVlO1xuXHRcdFx0XHRcdGlmIChkZWJ1ZykgY29uc29sZS5kZWJ1ZyhgW0B3eHQtZGV2L3N0b3JhZ2VdIFN0b3JhZ2UgbWlncmF0aW9uIHByb2Nlc3NlZCBmb3IgdmVyc2lvbjogdiR7bWlncmF0ZVRvVmVyc2lvbn1gKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE1pZ3JhdGlvbkVycm9yKGtleSwgbWlncmF0ZVRvVmVyc2lvbiwgeyBjYXVzZTogZXJyIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtcyhbe1xuXHRcdFx0XHRcdGtleTogZHJpdmVyS2V5LFxuXHRcdFx0XHRcdHZhbHVlOiBtaWdyYXRlZFZhbHVlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRrZXk6IGRyaXZlck1ldGFLZXksXG5cdFx0XHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0XHRcdC4uLm1ldGEsXG5cdFx0XHRcdFx0XHR2OiB0YXJnZXRWZXJzaW9uXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XSk7XG5cdFx0XHRcdGlmIChkZWJ1ZykgY29uc29sZS5kZWJ1ZyhgW0B3eHQtZGV2L3N0b3JhZ2VdIFN0b3JhZ2UgbWlncmF0aW9uIGNvbXBsZXRlZCBmb3IgJHtrZXl9IHYke3RhcmdldFZlcnNpb259YCwgeyBtaWdyYXRlZFZhbHVlIH0pO1xuXHRcdFx0XHRvbk1pZ3JhdGlvbkNvbXBsZXRlPy4obWlncmF0ZWRWYWx1ZSwgdGFyZ2V0VmVyc2lvbik7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbWlncmF0aW9uc0RvbmUgPSBvcHRzPy5taWdyYXRpb25zID09IG51bGwgPyBQcm9taXNlLnJlc29sdmUoKSA6IG1pZ3JhdGUoKS5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtAd3h0LWRldi9zdG9yYWdlXSBNaWdyYXRpb24gZmFpbGVkIGZvciAke2tleX1gLCBlcnIpO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBpbml0TXV0ZXggPSBuZXcgTXV0ZXgoKTtcblx0XHRcdGNvbnN0IGdldEZhbGxiYWNrID0gKCkgPT4gb3B0cz8uZmFsbGJhY2sgPz8gb3B0cz8uZGVmYXVsdFZhbHVlID8/IG51bGw7XG5cdFx0XHRjb25zdCBnZXRPckluaXRWYWx1ZSA9ICgpID0+IGluaXRNdXRleC5ydW5FeGNsdXNpdmUoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF3YWl0IGRyaXZlci5nZXRJdGVtKGRyaXZlcktleSk7XG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsIHx8IG9wdHM/LmluaXQgPT0gbnVsbCkgcmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRjb25zdCBuZXdWYWx1ZSA9IGF3YWl0IG9wdHMuaW5pdCgpO1xuXHRcdFx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbShkcml2ZXJLZXksIG5ld1ZhbHVlKTtcblx0XHRcdFx0aWYgKHZhbHVlID09IG51bGwgJiYgdGFyZ2V0VmVyc2lvbiA+IDEpIGF3YWl0IHNldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHsgdjogdGFyZ2V0VmVyc2lvbiB9KTtcblx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0XHRtaWdyYXRpb25zRG9uZS50aGVuKGdldE9ySW5pdFZhbHVlKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGtleSxcblx0XHRcdFx0Z2V0IGRlZmF1bHRWYWx1ZSgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZ2V0RmFsbGJhY2soKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0IGZhbGxiYWNrKCkge1xuXHRcdFx0XHRcdHJldHVybiBnZXRGYWxsYmFjaygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRWYWx1ZTogYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdGlmIChvcHRzPy5pbml0KSByZXR1cm4gYXdhaXQgZ2V0T3JJbml0VmFsdWUoKTtcblx0XHRcdFx0XHRlbHNlIHJldHVybiBhd2FpdCBnZXRJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0TWV0YTogYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdHJldHVybiBhd2FpdCBnZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0VmFsdWU6IGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdGlmIChuZWVkc1ZlcnNpb25TZXQpIHtcblx0XHRcdFx0XHRcdG5lZWRzVmVyc2lvblNldCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW3NldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIHZhbHVlKSwgc2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSwgeyB2OiB0YXJnZXRWZXJzaW9uIH0pXSk7XG5cdFx0XHRcdFx0fSBlbHNlIGF3YWl0IHNldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIHZhbHVlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0TWV0YTogYXN5bmMgKHByb3BlcnRpZXMpID0+IHtcblx0XHRcdFx0XHRhd2FpdCBtaWdyYXRpb25zRG9uZTtcblx0XHRcdFx0XHRyZXR1cm4gYXdhaXQgc2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSwgcHJvcGVydGllcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZVZhbHVlOiBhc3luYyAob3B0cykgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdHJldHVybiBhd2FpdCByZW1vdmVJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVtb3ZlTWV0YTogYXN5bmMgKHByb3BlcnRpZXMpID0+IHtcblx0XHRcdFx0XHRhd2FpdCBtaWdyYXRpb25zRG9uZTtcblx0XHRcdFx0XHRyZXR1cm4gYXdhaXQgcmVtb3ZlTWV0YShkcml2ZXIsIGRyaXZlcktleSwgcHJvcGVydGllcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdhdGNoOiAoY2IpID0+IHdhdGNoKGRyaXZlciwgZHJpdmVyS2V5LCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBjYihuZXdWYWx1ZSA/PyBnZXRGYWxsYmFjaygpLCBvbGRWYWx1ZSA/PyBnZXRGYWxsYmFjaygpKSksXG5cdFx0XHRcdG1pZ3JhdGVcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuZnVuY3Rpb24gY3JlYXRlRHJpdmVyKHN0b3JhZ2VBcmVhKSB7XG5cdGNvbnN0IGdldFN0b3JhZ2VBcmVhID0gKCkgPT4ge1xuXHRcdGlmIChicm93c2VyLnJ1bnRpbWUgPT0gbnVsbCkgdGhyb3cgRXJyb3IoYCd3eHQvc3RvcmFnZScgbXVzdCBiZSBsb2FkZWQgaW4gYSB3ZWIgZXh0ZW5zaW9uIGVudmlyb25tZW50XG5cbiAtIElmIHRocm93biBkdXJpbmcgYSBidWlsZCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93eHQtZGV2L3d4dC9pc3N1ZXMvMzcxXG4gLSBJZiB0aHJvd24gZHVyaW5nIHRlc3RzLCBtb2NrICd3eHQvYnJvd3NlcicgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93eHQuZGV2L2d1aWRlL2dvLWZ1cnRoZXIvdGVzdGluZy5odG1sXG5gKTtcblx0XHRpZiAoYnJvd3Nlci5zdG9yYWdlID09IG51bGwpIHRocm93IEVycm9yKFwiWW91IG11c3QgYWRkIHRoZSAnc3RvcmFnZScgcGVybWlzc2lvbiB0byB5b3VyIG1hbmlmZXN0IHRvIHVzZSAnd3h0L3N0b3JhZ2UnXCIpO1xuXHRcdGNvbnN0IGFyZWEgPSBicm93c2VyLnN0b3JhZ2Vbc3RvcmFnZUFyZWFdO1xuXHRcdGlmIChhcmVhID09IG51bGwpIHRocm93IEVycm9yKGBcImJyb3dzZXIuc3RvcmFnZS4ke3N0b3JhZ2VBcmVhfVwiIGlzIHVuZGVmaW5lZGApO1xuXHRcdHJldHVybiBhcmVhO1xuXHR9O1xuXHRjb25zdCB3YXRjaExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdHJldHVybiB7XG5cdFx0Z2V0SXRlbTogYXN5bmMgKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIChhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLmdldChrZXkpKVtrZXldO1xuXHRcdH0sXG5cdFx0Z2V0SXRlbXM6IGFzeW5jIChrZXlzKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLmdldChrZXlzKTtcblx0XHRcdHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiAoe1xuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlOiByZXN1bHRba2V5XSA/PyBudWxsXG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRzZXRJdGVtOiBhc3luYyAoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpIGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkucmVtb3ZlKGtleSk7XG5cdFx0XHRlbHNlIGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuc2V0KHsgW2tleV06IHZhbHVlIH0pO1xuXHRcdH0sXG5cdFx0c2V0SXRlbXM6IGFzeW5jICh2YWx1ZXMpID0+IHtcblx0XHRcdGNvbnN0IG1hcCA9IHZhbHVlcy5yZWR1Y2UoKG1hcCwgeyBrZXksIHZhbHVlIH0pID0+IHtcblx0XHRcdFx0bWFwW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH0sIHt9KTtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuc2V0KG1hcCk7XG5cdFx0fSxcblx0XHRyZW1vdmVJdGVtOiBhc3luYyAoa2V5KSA9PiB7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnJlbW92ZShrZXkpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSXRlbXM6IGFzeW5jIChrZXlzKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnJlbW92ZShrZXlzKTtcblx0XHR9LFxuXHRcdGNsZWFyOiBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLmNsZWFyKCk7XG5cdFx0fSxcblx0XHRzbmFwc2hvdDogYXN5bmMgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuZ2V0KCk7XG5cdFx0fSxcblx0XHRyZXN0b3JlU25hcHNob3Q6IGFzeW5jIChkYXRhKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnNldChkYXRhKTtcblx0XHR9LFxuXHRcdHdhdGNoKGtleSwgY2IpIHtcblx0XHRcdGNvbnN0IGxpc3RlbmVyID0gKGNoYW5nZXMpID0+IHtcblx0XHRcdFx0Y29uc3QgY2hhbmdlID0gY2hhbmdlc1trZXldO1xuXHRcdFx0XHRpZiAoY2hhbmdlID09IG51bGwgfHwgZGVxdWFsKGNoYW5nZS5uZXdWYWx1ZSwgY2hhbmdlLm9sZFZhbHVlKSkgcmV0dXJuO1xuXHRcdFx0XHRjYihjaGFuZ2UubmV3VmFsdWUgPz8gbnVsbCwgY2hhbmdlLm9sZFZhbHVlID8/IG51bGwpO1xuXHRcdFx0fTtcblx0XHRcdGdldFN0b3JhZ2VBcmVhKCkub25DaGFuZ2VkLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdHdhdGNoTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRnZXRTdG9yYWdlQXJlYSgpLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG5cdFx0XHRcdHdhdGNoTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0dW53YXRjaCgpIHtcblx0XHRcdHdhdGNoTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRcdGdldFN0b3JhZ2VBcmVhKCkub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdH0pO1xuXHRcdFx0d2F0Y2hMaXN0ZW5lcnMuY2xlYXIoKTtcblx0XHR9XG5cdH07XG59XG52YXIgTWlncmF0aW9uRXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3Ioa2V5LCB2ZXJzaW9uLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIoYHYke3ZlcnNpb259IG1pZ3JhdGlvbiBmYWlsZWQgZm9yIFwiJHtrZXl9XCJgLCBvcHRpb25zKTtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IE1pZ3JhdGlvbkVycm9yLCBzdG9yYWdlIH07IiwiLyoqXG4gKiBTdG9yYWdlIHV0aWxpdGllcyBmb3IgV1hUIGV4dGVuc2lvbnNcbiAqXG4gKiBQcm92aWRlcyB0eXBlZCBzdG9yYWdlIHdyYXBwZXJzIHVzaW5nIFdYVCdzIHN0b3JhZ2UgdXRpbGl0aWVzXG4gKiB3aXRoIGNvbnNpc3RlbnQgcGF0dGVybnMgZm9yIGF1dGgsIHNldHRpbmdzLCBhbmQgYXBwIGRhdGEuXG4gKi9cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICd3eHQvdXRpbHMvc3RvcmFnZSc7XG5leHBvcnQgY29uc3QgZGVmYXVsdEF1dGhTdG9yZSA9IHtcbiAgICBhY2Nlc3NUb2tlbjogJycsXG4gICAgcmVmcmVzaFRva2VuOiAnJyxcbiAgICB1c2VyOiBudWxsLFxuICAgIHN1YnNjcmlwdGlvbjogbnVsbCxcbn07XG4vKipcbiAqIENyZWF0ZSBhbiBhdXRoIHN0b3JlIHdpdGggdGhlIGdpdmVuIGtleVxuICpcbiAqIEBwYXJhbSBrZXkgLSBTdG9yYWdlIGtleSAoZGVmYXVsdDogJ3N5bmM6YXV0aCcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdXRoU3RvcmUoa2V5ID0gJ3N5bmM6YXV0aCcpIHtcbiAgICByZXR1cm4gc3RvcmFnZS5kZWZpbmVJdGVtKGtleSwge1xuICAgICAgICBmYWxsYmFjazogZGVmYXVsdEF1dGhTdG9yZSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBkZWZhdWx0RXh0ZW5zaW9uU2V0dGluZ3MgPSB7XG4gICAgdGhlbWU6ICdzeXN0ZW0nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG59O1xuLyoqXG4gKiBDcmVhdGUgYSBzZXR0aW5ncyBzdG9yZSB3aXRoIHRoZSBnaXZlbiBrZXlcbiAqXG4gKiBAcGFyYW0ga2V5IC0gU3RvcmFnZSBrZXkgKGRlZmF1bHQ6ICdzeW5jOnNldHRpbmdzJylcbiAqIEBwYXJhbSBmYWxsYmFjayAtIERlZmF1bHQgc2V0dGluZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdzU3RvcmUoa2V5ID0gJ3N5bmM6c2V0dGluZ3MnLCBmYWxsYmFjayA9IGRlZmF1bHRFeHRlbnNpb25TZXR0aW5ncykge1xuICAgIHJldHVybiBzdG9yYWdlLmRlZmluZUl0ZW0oa2V5LCB7IGZhbGxiYWNrIH0pO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2VuZXJpYyBTdG9yYWdlIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogQ3JlYXRlIGEgdHlwZWQgc3RvcmFnZSBpdGVtIHdpdGggZmFsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGtleSwgZmFsbGJhY2spIHtcbiAgICByZXR1cm4gc3RvcmFnZS5kZWZpbmVJdGVtKGtleSwgeyBmYWxsYmFjayB9KTtcbn1cbi8vIE5vdGU6IGNsZWFyQWxsU3RvcmFnZSBhbmQgZ2V0U3RvcmFnZUtleXMgcmVxdWlyZSBXWFQtc3BlY2lmaWMgQVBJc1xuLy8gVGhlc2Ugc2hvdWxkIGJlIGltcGxlbWVudGVkIGluIHRoZSBleHRlbnNpb24gaXRzZWxmIGlmIG5lZWRlZFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUXVvdGEgTWFuYWdlbWVudCAoRmlyZWZveCBzeW5jIHN0b3JhZ2UgbGltaXRzKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IHsgRklSRUZPWF9TWU5DX1FVT1RBX0JZVEVTLCBGSVJFRk9YX0lURU1fUVVPVEFfQllURVMsIGdldEJyb3dzZXJLaW5kLCBoYXNTdHJpY3RRdW90YSwgZ2V0UXVvdGFTdGF0dXMsIGVzdGltYXRlU2l6ZSwgdHJpbUFycmF5VG9TaXplLCBjaGVja1N0b3JlUXVvdGEsIGVuc3VyZVN5bmNRdW90YSwgdHJpbU9sZEl0ZW1zLCB9IGZyb20gJy4vcXVvdGEuanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBDYWxtV2ViIFJlYWRlciBBUEkgQ2xpZW50XG4gKiBcbiAqIFVzZXMgd3h0LXNoYXJlZCBmb3IgYXV0aCBhbmQgQVBJIGNhbGxzIHRvIHRoZSBEcmFjb24gcGxhdGZvcm0uXG4gKiAtIEZyZWUgdGllcjogQ1NTLW9ubHkgZmlsdGVyaW5nIChubyBBSSlcbiAqIC0gUGFpZCB0aWVyOiBBSS1wb3dlcmVkIGFuYWx5c2lzIHZpYSAvYXBpL3YxL2NoYXQvY29tcGxldGlvbnNcbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVBcGlDbGllbnQgfSBmcm9tICdAZHJhY29uL3d4dC1zaGFyZWQvYXBpJztcbmltcG9ydCB7IGNyZWF0ZUNvbmZpZyB9IGZyb20gJ0BkcmFjb24vd3h0LXNoYXJlZC9jb25maWcnO1xuaW1wb3J0IHsgY3JlYXRlQXV0aFN0b3JlLCB0eXBlIEF1dGhTdG9yZSB9IGZyb20gJ0BkcmFjb24vd3h0LXNoYXJlZC9zdG9yYWdlJztcbmltcG9ydCB0eXBlIHsgRHJhY29uQ29uZmlnIH0gZnJvbSAnQGRyYWNvbi93eHQtc2hhcmVkL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5hbHlzaXNSZXF1ZXN0IHtcbiAgdXJsOiBzdHJpbmc7XG4gIGh0bWw6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuYWx5c2lzUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdW1tYXJ5OiBzdHJpbmc7XG4gIGZpbHRlcmVkQ29udGVudDogc3RyaW5nO1xuICBjb25maWRlbmNlOiBudW1iZXI7XG4gIGRlY2lzaW9uczogQXJyYXk8e1xuICAgIGFjdGlvbjogJ2tlZXAnIHwgJ3JlbW92ZScgfCAnc3VtbWFyaXplJztcbiAgICByZWFzb246IHN0cmluZztcbiAgfT47XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1b3RhSW5mbyB7XG4gIHRvdGFsOiBudW1iZXI7XG4gIHVzZWQ6IG51bWJlcjtcbiAgcmVtYWluaW5nOiBudW1iZXI7XG4gIGlzUGFpZFVzZXI6IGJvb2xlYW47XG59XG5cbmNvbnN0IFJFQURFUl9TWVNURU1fUFJPTVBUID0gYFlvdSBhcmUgYSB3ZWIgcGFnZSBhbmFseXplciBmb3IgQ2FsbVdlYiwgYSBicm93c2VyIGV4dGVuc2lvbiB0aGF0IGhlbHBzIHVzZXJzIHJlYWQgd2ViIHBhZ2VzIG1vcmUgY29tZm9ydGFibHkuIFlvdXIgdGFzayBpcyB0byBhbmFseXplIHRoZSBwcm92aWRlZCB3ZWIgcGFnZSBjb250ZW50IGFuZCByZXR1cm4gYSBKU09OIHJlc3BvbnNlIGluZGljYXRpbmcgd2hhdCBjb250ZW50IHNob3VsZCBiZSBrZXB0LCByZW1vdmVkLCBvciBzdW1tYXJpemVkLlxuXG5SZXR1cm4gYSBKU09OIG9iamVjdCB3aXRoIHRoaXMgZXhhY3Qgc3RydWN0dXJlOlxue1xuICBcInRpdGxlXCI6IFwiaW1wcm92ZWQgb3IgY29uZmlybWVkIHBhZ2UgdGl0bGVcIixcbiAgXCJzdW1tYXJ5XCI6IFwiMi0zIHNlbnRlbmNlIHN1bW1hcnkgb2YgdGhlIG1haW4gY29udGVudFwiLFxuICBcImZpbHRlcmVkQ29udGVudFwiOiBcInRoZSBjbGVhbmVkIG1haW4gY29udGVudCB3aXRoIGFkcywgbmF2aWdhdGlvbiwgYW5kIGlycmVsZXZhbnQgZWxlbWVudHMgcmVtb3ZlZFwiLFxuICBcImNvbmZpZGVuY2VcIjogMC4wLTEuMCBpbmRpY2F0aW5nIGhvdyBjb25maWRlbnQgeW91IGFyZSBpbiB0aGUgYW5hbHlzaXMsXG4gIFwiZGVjaXNpb25zXCI6IFtcbiAgICB7XCJhY3Rpb25cIjogXCJrZWVwXCJ8XCJyZW1vdmVcInxcInN1bW1hcml6ZVwiLCBcInJlYXNvblwiOiBcImV4cGxhbmF0aW9uXCJ9XG4gIF1cbn1cblxuUnVsZXM6XG4tIEtlZXAgdGhlIG1haW4gYXJ0aWNsZS9zdG9yeS9jb250ZW50IGJvZHlcbi0gUmVtb3ZlOiBhZHMsIG5hdmlnYXRpb24gbWVudXMsIGhlYWRlcnMsIGZvb3RlcnMsIHNpZGViYXJzLCBjb21tZW50cyAodW5sZXNzIHRoZXkgYWRkIHZhbHVlKSwgY29va2llIG5vdGljZXMsIHBvcHVwc1xuLSBTdW1tYXJpemU6IGxvbmcgZGlzY3Vzc2lvbnMsIGNvbW1lbnQgdGhyZWFkcywgbmVzdGVkIHJlcGxpZXNcbi0gUHJlc2VydmU6IGhlYWRpbmdzLCBwYXJhZ3JhcGhzLCBsaXN0cywgY29kZSBibG9ja3MsIGltYWdlcyB3aXRoIGFsdCB0ZXh0LCBsaW5rc1xuLSBmaWx0ZXJlZENvbnRlbnQgc2hvdWxkIGJlIHBsYWluIHRleHQgY29udGVudCwgbm90IHJhdyBIVE1MXG4tIGNvbmZpZGVuY2Ugc2hvdWxkIGJlIGxvd2VyIGZvciB2ZXJ5IG1lc3N5L2NvbXBsZXggcGFnZXMgb3IgcGFnZXMgd2l0aCB1bnVzdWFsIHN0cnVjdHVyZXNgO1xuXG5sZXQgYXBpQ2xpZW50OiBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVBcGlDbGllbnQ+IHwgbnVsbCA9IG51bGw7XG5sZXQgY29uZmlnOiBEcmFjb25Db25maWcgfCBudWxsID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0QXBpQ2xpZW50KCk6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUFwaUNsaWVudD4gfCBudWxsIHtcbiAgaWYgKGFwaUNsaWVudCkgcmV0dXJuIGFwaUNsaWVudDtcblxuICB0cnkge1xuICAgIGNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gICAgICBhcHBOYW1lOiAnQ2FsbVdlYicsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoU3RvcmUgPSBjcmVhdGVBdXRoU3RvcmUoJ3N5bmM6YXV0aCcpO1xuXG4gICAgYXBpQ2xpZW50ID0gY3JlYXRlQXBpQ2xpZW50KHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIGdldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5nZXRWYWx1ZSgpLFxuICAgICAgc2V0QXV0aDogKGF1dGg6IEF1dGhTdG9yZSkgPT4gYXV0aFN0b3JlLnNldFZhbHVlKGF1dGgpLFxuICAgICAgb25BdXRoRXJyb3I6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tDYWxtV2ViXSBBdXRoIGVycm9yIC0gdXNlciBuZWVkcyB0byBsb2cgaW4nKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXBpQ2xpZW50O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbQ2FsbVdlYl0gRmFpbGVkIHRvIGluaXRpYWxpemUgQVBJIGNsaWVudDonLCBlcnIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplUGFnZVdpdGhCYWNrZW5kKFxuICByZXF1ZXN0OiBBbmFseXNpc1JlcXVlc3Rcbik6IFByb21pc2U8QW5hbHlzaXNSZXNwb25zZT4ge1xuICBjb25zdCBjbGllbnQgPSBnZXRBcGlDbGllbnQoKTtcblxuICBpZiAoIWNsaWVudCkge1xuICAgIHJldHVybiBmYWxsYmFja1Jlc3BvbnNlKHJlcXVlc3QsICdBUEkgY2xpZW50IG5vdCBhdmFpbGFibGUnKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcXVvdGEgPSBhd2FpdCBnZXRRdW90YUluZm8oKTtcbiAgICBcbiAgICBpZiAoIXF1b3RhLmlzUGFpZFVzZXIgfHwgcXVvdGEucmVtYWluaW5nIDw9IDApIHtcbiAgICAgIHJldHVybiBmYWxsYmFja1Jlc3BvbnNlKFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBxdW90YS5pc1BhaWRVc2VyIFxuICAgICAgICAgID8gJ05vIGFuYWx5c2VzIHJlbWFpbmluZy4gVXBncmFkZSBmb3IgdW5saW1pdGVkIGFjY2Vzcy4nXG4gICAgICAgICAgOiAnQUkgYW5hbHlzaXMgcmVxdWlyZXMgYSBzdWJzY3JpcHRpb24uJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZUNvbnRleHQgPSBgUGFnZSBVUkw6ICR7cmVxdWVzdC51cmx9XFxuUGFnZSBUaXRsZTogJHtyZXF1ZXN0LnRpdGxlfVxcblxcblBhZ2UgQ29udGVudDpcXG4ke3JlcXVlc3QudGV4dH1gO1xuXG4gICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IGNsaWVudC5jaGF0Q29tcGxldGlvbnMoe1xuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgeyByb2xlOiAnc3lzdGVtJywgY29udGVudDogUkVBREVSX1NZU1RFTV9QUk9NUFQgfSxcbiAgICAgICAgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHBhZ2VDb250ZXh0IH0sXG4gICAgICBdLFxuICAgICAgc3RyZWFtOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjb21wbGV0aW9uLmNob2ljZXNbMF0/Lm1lc3NhZ2U/LmNvbnRlbnQgfHwgJyc7XG4gICAgcmV0dXJuIHBhcnNlUmVhZGVyUmVzcG9uc2UoY29udGVudCwgcmVxdWVzdC50aXRsZSk7XG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignW0NhbG1XZWJdIEFQSSBhbmFseXNpcyBmYWlsZWQ6JywgZXJyKTtcbiAgICByZXR1cm4gZmFsbGJhY2tSZXNwb25zZShyZXF1ZXN0LCBlcnIubWVzc2FnZSB8fCAnQW5hbHlzaXMgZmFpbGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VSZWFkZXJSZXNwb25zZShcbiAgY29udGVudDogc3RyaW5nLFxuICBmYWxsYmFja1RpdGxlOiBzdHJpbmcsXG4pOiBBbmFseXNpc1Jlc3BvbnNlIHtcbiAgY29uc3QgdHJpbW1lZCA9IGNvbnRlbnQudHJpbSgpO1xuXG4gIGxldCBqc29uU3RyID0gdHJpbW1lZDtcbiAgY29uc3QgY29kZUJsb2NrTWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9gYGAoPzpqc29uKT9cXHMqXFxuPyhbXFxzXFxTXSo/KVxcbj9gYGAvKTtcbiAgaWYgKGNvZGVCbG9ja01hdGNoKSB7XG4gICAganNvblN0ciA9IGNvZGVCbG9ja01hdGNoWzFdO1xuICB9XG5cbiAgY29uc3QganNvbk1hdGNoID0ganNvblN0ci5tYXRjaCgvXFx7W1xcc1xcU10qXFx9Lyk7XG4gIGlmIChqc29uTWF0Y2gpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShqc29uTWF0Y2hbMF0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IHBhcnNlZC50aXRsZSB8fCBmYWxsYmFja1RpdGxlLFxuICAgICAgICBzdW1tYXJ5OiBwYXJzZWQuc3VtbWFyeSB8fCAnJyxcbiAgICAgICAgZmlsdGVyZWRDb250ZW50OiBwYXJzZWQuZmlsdGVyZWRDb250ZW50IHx8ICcnLFxuICAgICAgICBjb25maWRlbmNlOiBwYXJzZWQuY29uZmlkZW5jZSA/PyAwLjUsXG4gICAgICAgIGRlY2lzaW9uczogQXJyYXkuaXNBcnJheShwYXJzZWQuZGVjaXNpb25zKSA/IHBhcnNlZC5kZWNpc2lvbnMgOiBbXSxcbiAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBGYWxsIHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIHRpdGxlOiBmYWxsYmFja1RpdGxlLFxuICAgIHN1bW1hcnk6ICcnLFxuICAgIGZpbHRlcmVkQ29udGVudDogdHJpbW1lZC5zbGljZSgwLCAxMDAwMCksXG4gICAgY29uZmlkZW5jZTogMCxcbiAgICBkZWNpc2lvbnM6IFtdLFxuICAgIGVycm9yOiAnRmFpbGVkIHRvIHBhcnNlIEFJIHJlc3BvbnNlIGFzIEpTT04nLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmYWxsYmFja1Jlc3BvbnNlKFxuICByZXF1ZXN0OiBBbmFseXNpc1JlcXVlc3QsXG4gIGVycm9yOiBzdHJpbmcsXG4pOiBBbmFseXNpc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICB0aXRsZTogcmVxdWVzdC50aXRsZSxcbiAgICBzdW1tYXJ5OiAnJyxcbiAgICBmaWx0ZXJlZENvbnRlbnQ6IHJlcXVlc3QudGV4dC5zbGljZSgwLCAxMDAwMCksXG4gICAgY29uZmlkZW5jZTogMCxcbiAgICBkZWNpc2lvbnM6IFtdLFxuICAgIGVycm9yLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVvdGFJbmZvKCk6IFByb21pc2U8UXVvdGFJbmZvPiB7XG4gIGNvbnN0IGNsaWVudCA9IGdldEFwaUNsaWVudCgpO1xuXG4gIGlmICghY2xpZW50KSB7XG4gICAgcmV0dXJuIHsgdG90YWw6IDAsIHVzZWQ6IDAsIHJlbWFpbmluZzogMCwgaXNQYWlkVXNlcjogZmFsc2UgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgW3VzZXJSZXNwb25zZSwgcXVvdGFSZXNwb25zZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBjbGllbnQuZ2V0VXNlcigpLFxuICAgICAgY2xpZW50LmdldFF1b3RhKCksXG4gICAgXSk7XG5cbiAgICBjb25zdCBpc1BhaWRVc2VyID0gdXNlclJlc3BvbnNlLnN1YnNjcmlwdGlvbj8uYWN0aXZlIHx8IGZhbHNlO1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IGlzUGFpZFVzZXIgPyBxdW90YVJlc3BvbnNlLnJlbWFpbmluZyA6IDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWw6IHF1b3RhUmVzcG9uc2UudG90YWwsXG4gICAgICB1c2VkOiBxdW90YVJlc3BvbnNlLnVzZWQsXG4gICAgICByZW1haW5pbmcsXG4gICAgICBpc1BhaWRVc2VyLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tDYWxtV2ViXSBGYWlsZWQgdG8gZ2V0IHF1b3RhOicsIGVycik7XG4gICAgcmV0dXJuIHsgdG90YWw6IDAsIHVzZWQ6IDAsIHJlbWFpbmluZzogMCwgaXNQYWlkVXNlcjogZmFsc2UgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBjbGllbnQgPSBnZXRBcGlDbGllbnQoKTtcbiAgaWYgKCFjbGllbnQpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGNsaWVudC5pc0F1dGhlbnRpY2F0ZWQoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5VcGdyYWRlUGFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgY2xpZW50ID0gZ2V0QXBpQ2xpZW50KCk7XG4gIGlmICghY2xpZW50KSByZXR1cm47XG5cbiAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmdldFVzZXIoKS5jYXRjaCgoKSA9PiBudWxsKTtcblxuICBpZiAodXNlclJlc3BvbnNlPy5zdWJzY3JpcHRpb24/LmFjdGl2ZSkge1xuICAgIGNvbnNvbGUubG9nKCdbQ2FsbVdlYl0gVXNlciBhbHJlYWR5IGhhcyBhY3RpdmUgc3Vic2NyaXB0aW9uJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNoZWNrb3V0X3VybCB9ID0gYXdhaXQgY2xpZW50LmFkZFF1b3RhKDEwMCk7XG4gICAgaWYgKGNoZWNrb3V0X3VybCkge1xuICAgICAgd2luZG93Lm9wZW4oY2hlY2tvdXRfdXJsLCAnX2JsYW5rJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbQ2FsbVdlYl0gRmFpbGVkIHRvIG9wZW4gdXBncmFkZSBwYWdlOicsIGVycik7XG4gIH1cbn1cbiIsIi8qKlxuICogUmVhZGVyIE92ZXJsYXkgLSBVbml2ZXJzYWwgcmVhZGluZyBtb2RlIHdpdGggU2hhZG93IERPTSBpc29sYXRpb25cbiAqIFdvcmtzIG9uIGFueSB3ZWJwYWdlLCBub3QganVzdCBhcnRpY2xlc1xuICogXG4gKiBDYW4gd29yayBpbiB0d28gbW9kZXM6XG4gKiAxLiBGYXN0IG1vZGU6IERpcmVjdCBDU1MtYmFzZWQgZXh0cmFjdGlvbiAobm8gQUkpIC0gZnJlZSBmb3IgYWxsXG4gKiAyLiBBSSBtb2RlOiBBSS1wb3dlcmVkIGFuYWx5c2lzIHZpYSBEcmFjb24gcGxhdGZvcm0gQVBJIC0gcmVxdWlyZXMgc3Vic2NyaXB0aW9uXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBFeHRyYWN0ZWRBcnRpY2xlLCBDbGVhbk1vZGUgfSBmcm9tICcuL2V4dHJhY3Rvcic7XG5pbXBvcnQgeyBleHRyYWN0QXJ0aWNsZSB9IGZyb20gJy4vZXh0cmFjdG9yJztcbmltcG9ydCB7IGdldExheW91dCwgZGVmYXVsdExheW91dCB9IGZyb20gJy4vbGF5b3V0cyc7XG5pbXBvcnQgeyBhbmFseXplUGFnZVdpdGhCYWNrZW5kLCBnZXRRdW90YUluZm8sIHR5cGUgQW5hbHlzaXNSZXNwb25zZSB9IGZyb20gJy4vcmVhZGVyLWFwaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhZGVyT3B0aW9ucyB7XG4gIGxheW91dElkPzogc3RyaW5nO1xuICBtb2RlPzogQ2xlYW5Nb2RlO1xuICBmb250Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IHN0cmluZztcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEhPU1RfSUQgPSAnY2FsbXdlYi1yZWFkZXItaG9zdCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuUmVhZGVyKG9wdGlvbnM6IFJlYWRlck9wdGlvbnMgPSB7fSk6IFByb21pc2U8dm9pZD4ge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nLCAnaW1wb3J0YW50Jyk7XG4gIGNsb3NlUmVhZGVyKCk7XG5cbiAgY29uc3QgbW9kZSA9IG9wdGlvbnMubW9kZSB8fCAnZnVsbCc7XG5cbiAgbGV0IGFydGljbGU6IEV4dHJhY3RlZEFydGljbGUgfCBudWxsID0gbnVsbDtcbiAgbGV0IGFwaVJlc3VsdDogQW5hbHlzaXNSZXNwb25zZSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0IHF1b3RhID0gYXdhaXQgZ2V0UXVvdGFJbmZvKCk7XG4gIGNvbnNvbGUubG9nKCdbQ2FsbVdlYl0gUXVvdGEgY2hlY2s6JywgcXVvdGEuaXNQYWlkVXNlciA/ICdQYWlkIHVzZXInIDogJ0ZyZWUgdXNlcicsICctIFJlbWFpbmluZzonLCBxdW90YS5yZW1haW5pbmcpO1xuXG4gIGlmIChxdW90YS5pc1BhaWRVc2VyICYmIHF1b3RhLnJlbWFpbmluZyA+IDApIHtcbiAgICBjb25zb2xlLmxvZygnW0NhbG1XZWJdIFVzaW5nIEFJLXBvd2VyZWQgYW5hbHlzaXMuLi4nKTtcbiAgICB0cnkge1xuICAgICAgYXBpUmVzdWx0ID0gYXdhaXQgYW5hbHl6ZVBhZ2VXaXRoQmFja2VuZCh7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgaHRtbDogZG9jdW1lbnQuYm9keT8uaW5uZXJIVE1MPy5zbGljZSgwLCAxNTAwMCkgfHwgJycsXG4gICAgICAgIHRleHQ6IGRvY3VtZW50LmJvZHk/LnRleHRDb250ZW50Py5zbGljZSgwLCA4MDAwKSB8fCAnJyxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXBpUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tDYWxtV2ViXSBBUEkgYW5hbHlzaXMgc3VjY2VlZGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnW0NhbG1XZWJdIEFQSSBhbmFseXNpcyBmYWlsZWQ6JywgYXBpUmVzdWx0LmVycm9yKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tDYWxtV2ViXSBBUEkgYW5hbHlzaXMgZXJyb3I6JywgZXJyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ1tDYWxtV2ViXSBObyBBSSAtIHVzaW5nIENTUyBleHRyYWN0aW9uIChmcmVlIHRpZXIpJyk7XG4gIH1cblxuICBpZiAoIWFwaVJlc3VsdD8uc3VjY2Vzcykge1xuICAgIHRyeSB7XG4gICAgICBhcnRpY2xlID0gZXh0cmFjdEFydGljbGUoZG9jdW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBtb2RlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tDYWxtV2ViXSBFeHRyYWN0aW9uIGZhaWxlZDonLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpdGxlVGV4dCA9IGFwaVJlc3VsdD8udGl0bGUgfHwgYXJ0aWNsZT8udGl0bGUgfHwgZG9jdW1lbnQudGl0bGUgfHwgJ0N1cnJlbnQgUGFnZSc7XG4gIGNvbnN0IGxheW91dCA9IG9wdGlvbnMubGF5b3V0SWQgPyBnZXRMYXlvdXQob3B0aW9ucy5sYXlvdXRJZCkgOiBkZWZhdWx0TGF5b3V0O1xuXG4gIGNvbnN0IGhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9zdC5pZCA9IEhPU1RfSUQ7XG4gIGhvc3Quc3R5bGUuY3NzVGV4dCA9IGBcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMjE0NzQ4MzY0NyAhaW1wb3J0YW50O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGA7XG5cbiAgY29uc3Qgc2hhZG93ID0gaG9zdC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cbiAgLy8gUHJlbWl1bSBkYXJrIHRoZW1lIHN0eWxlc1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwJmZhbWlseT1KZXRCcmFpbnMrTW9ubzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgXG4gICAgKiB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiA4cHg7IH1cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBib3JkZXItcmFkaXVzOiA0cHg7IH1cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyB9XG4gICAgXG4gICAgaHRtbCB7XG4gICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICB9XG4gICAgXG4gICAgYm9keSB7XG4gICAgICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogI2UyZThmMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgfVxuICAgIFxuICAgIC5jdy1vdmVybGF5IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBhMGEwZiAwJSwgIzEyMTIxYSA1MCUsICMwZDBkMTQgMTAwJSk7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgIC8qIFN1YnRsZSBhbmltYXRlZCBncmFkaWVudCBiYWNrZ3JvdW5kICovXG4gICAgLmN3LWJnLXBhdHRlcm4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICBiYWNrZ3JvdW5kOiBcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgMjAlIDAlLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4wOCkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IDgwJSAxMDAlLCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNikgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgfVxuXG4gICAgLyogVG9vbGJhciAqL1xuICAgIC5jdy10b29sYmFyIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMCwgMTAsIDE1LCAwLjg1KTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KSBzYXR1cmF0ZSgxODAlKTtcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE4MCUpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgfVxuXG4gICAgLmN3LXRvb2xiYXItbGVmdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuY3ctbG9nbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogI2E3OGJmYTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgIH1cblxuICAgIC5jdy1sb2dvIHN2ZyB7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA4cHggcmdiYSgxMzksIDkyLCAyNDYsIDAuNCkpO1xuICAgIH1cblxuICAgIC5jdy10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgIH1cblxuICAgIC5jdy10b29sYmFyLXJpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5jdy1idG4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgLmN3LWJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgICAgY29sb3I6ICNlMmU4ZjA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuXG4gICAgLmN3LWJ0bjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cblxuICAgIC5jdy1idG4tcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4xNSkgMCUsIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA4KSAxMDAlKTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMzksIDkyLCAyNDYsIDAuMjUpO1xuICAgICAgY29sb3I6ICNhNzhiZmE7XG4gICAgfVxuXG4gICAgLmN3LWJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjI1KSAwJSwgcmdiYSgxMzksIDkyLCAyNDYsIDAuMTUpIDEwMCUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzOSwgOTIsIDI0NiwgMC40KTtcbiAgICAgIGNvbG9yOiAjYzRiNWZkO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4xNSk7XG4gICAgfVxuXG4gICAgLmN3LWJ0bi1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjIpO1xuICAgICAgY29sb3I6ICNmODcxNzE7XG4gICAgfVxuXG4gICAgLmN3LWJ0bi1jbG9zZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjIpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjM1KTtcbiAgICAgIGNvbG9yOiAjZmNhNWE1O1xuICAgIH1cblxuICAgIC8qIE1haW4gY29udGVudCBhcmVhICovXG4gICAgLmN3LW1haW4ge1xuICAgICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMTIwcHggMjRweCAxMjBweDtcbiAgICB9XG5cbiAgICAvKiBBcnRpY2xlIGhlYWRlciAqL1xuICAgIC5jdy1hcnRpY2xlLWhlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICB9XG5cbiAgICAuY3ctdGl0bGUtbWFpbiB7XG4gICAgICBmb250LXNpemU6IDIuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgICAgY29sb3I6ICNmOGZhZmM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDM1ZW07XG4gICAgICB0ZXh0LXNoYWRvdzogMCAycHggMzBweCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4xKTtcbiAgICB9XG5cbiAgICAuY3ctbWV0YSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICB9XG5cbiAgICAuY3ctbWV0YS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgfVxuXG4gICAgLmN3LW1ldGEtc2VwIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6ICMzMzQxNTU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLmN3LXJlYWRpbmctdGltZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzksIDkyLCAyNDYsIDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjYTc4YmZhO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgfVxuXG4gICAgLmN3LWFpLWJhZGdlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yKSAwJSwgcmdiYSgxMzksIDkyLCAyNDYsIDAuMikgMTAwJSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4zKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzYwYTVmYTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIH1cblxuICAgIC8qIENvbnRlbnQgc3R5bGVzIC0gdW5pdmVyc2FsIGZvciBhbGwgY29udGVudCB0eXBlcyAqL1xuICAgIC5jdy1jb250ZW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IGgxLFxuICAgIC5jdy1jb250ZW50IGgyLFxuICAgIC5jdy1jb250ZW50IGgzLFxuICAgIC5jdy1jb250ZW50IGg0LFxuICAgIC5jdy1jb250ZW50IGg1LFxuICAgIC5jdy1jb250ZW50IGg2IHtcbiAgICAgIGNvbG9yOiAjZjFmNWY5O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgaDEgeyBmb250LXNpemU6IDEuNzVlbTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAgIC5jdy1jb250ZW50IGgyIHsgZm9udC1zaXplOiAxLjVlbTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIC5jdy1jb250ZW50IGgzIHsgZm9udC1zaXplOiAxLjI1ZW07IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAuY3ctY29udGVudCBoNCB7IGZvbnQtc2l6ZTogMS4xZW07IGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuICAgIC5jdy1jb250ZW50IHAge1xuICAgICAgbWFyZ2luOiAwIDAgMWVtO1xuICAgICAgY29sb3I6ICNjYmQ1ZTE7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICNlMmU4ZjA7XG4gICAgICBtYXJnaW46IDJlbSAwIDAuNzVlbTtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBoNCB7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjZTJlOGYwO1xuICAgICAgbWFyZ2luOiAxLjVlbSAwIDAuNWVtO1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IGEge1xuICAgICAgY29sb3I6ICM4MThjZjg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjksIDE0MCwgMjQ4LCAwLjMpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgYTpob3ZlciB7XG4gICAgICBjb2xvcjogI2E1YjRmYztcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMTI5LCAxNDAsIDI0OCwgMC42KTtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIG1hcmdpbjogMmVtIDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IGJsb2NrcXVvdGUge1xuICAgICAgbWFyZ2luOiAyLjVlbSAwO1xuICAgICAgcGFkZGluZzogMjRweCAyOHB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMzksIDkyLCAyNDYsIDAuMDgpIDAlLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4wMykgMTAwJSk7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3YzNhZWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDE2cHggMTZweCAwO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgY29sb3I6ICNhNWI0ZmM7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgYmxvY2txdW90ZSBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBibG9ja3F1b3RlIHA6Zmlyc3Qtb2YtdHlwZTo6Zmlyc3QtbGV0dGVyIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgdWwsIC5jdy1jb250ZW50IG9sIHtcbiAgICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMS43NWVtO1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IGxpIHtcbiAgICAgIG1hcmdpbjogMC42ZW0gMDtcbiAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IHVsIGxpOjptYXJrZXIge1xuICAgICAgY29sb3I6ICM3YzNhZWQ7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgb2wgbGk6Om1hcmtlciB7XG4gICAgICBjb2xvcjogIzdjM2FlZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgcHJlIHtcbiAgICAgIG1hcmdpbjogMmVtIDA7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzksIDkyLCAyNDYsIDAuMTUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBjb2xvcjogI2UyZThmMDtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBjb2RlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzOSwgOTIsIDI0NiwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGNvbG9yOiAjYzRiNWZkO1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IHByZSBjb2RlIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAyZW0gMDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCB0aCwgLmN3LWNvbnRlbnQgdGQge1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgdGgge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzksIDkyLCAyNDYsIDAuMSk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICNlMmU4ZjA7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgdGQge1xuICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgaHIge1xuICAgICAgbWFyZ2luOiAzZW0gMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgxMzksIDkyLCAyNDYsIDAuMyksIHRyYW5zcGFyZW50KTtcbiAgICB9XG5cbiAgICAvKiBGaWd1cmVzIGFuZCBjYXB0aW9ucyAqL1xuICAgIC5jdy1jb250ZW50IGZpZ3VyZSB7XG4gICAgICBtYXJnaW46IDJlbSAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBmaWdjYXB0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuNzVlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG5cbiAgICAvKiBNZWRpYSAqL1xuICAgIC5jdy1jb250ZW50IHZpZGVvLFxuICAgIC5jdy1jb250ZW50IGF1ZGlvIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBtYXJnaW46IDEuNWVtIDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgaWZyYW1lIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBtYXJnaW46IDEuNWVtIDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgIH1cblxuICAgIC8qIERlZmluaXRpb24gbGlzdHMgKi9cbiAgICAuY3ctY29udGVudCBkbCB7XG4gICAgICBtYXJnaW46IDEuNWVtIDA7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgZHQge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjZTJlOGYwO1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IGRkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxLjVlbTtcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIH1cblxuICAgIC8qIERldGFpbHMvU3VtbWFyeSAoYWNjb3JkaW9ucykgKi9cbiAgICAuY3ctY29udGVudCBkZXRhaWxzIHtcbiAgICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBzdW1tYXJ5IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogI2UyZThmMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBzdW1tYXJ5Ojotd2Via2l0LWRldGFpbHMtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgc3VtbWFyeTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICfilrYnO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICBjb2xvcjogIzdjM2FlZDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgZGV0YWlsc1tvcGVuXSBzdW1tYXJ5OjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIH1cblxuICAgIC5jdy1jb250ZW50IGRldGFpbHMgPiAqOm5vdChzdW1tYXJ5KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xuICAgIH1cblxuICAgIC8qIEZvcm0gZWxlbWVudHMgLSBkaXNhYmxlZC9uZXV0cmFsaXplZCAqL1xuICAgIC5jdy1jb250ZW50IGZvcm1bZGF0YS1jdy1mb3JtLWRpc2FibGVkXSxcbiAgICAuY3ctY29udGVudCBmb3JtW2Rpc2FibGVkXSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBpbnB1dCxcbiAgICAuY3ctY29udGVudCB0ZXh0YXJlYSxcbiAgICAuY3ctY29udGVudCBzZWxlY3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgY29sb3I6ICNlMmU4ZjA7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBpbnB1dFtkYXRhLWN3LWRpc2FibGVkXSxcbiAgICAuY3ctY29udGVudCBpbnB1dFtkaXNhYmxlZF0sXG4gICAgLmN3LWNvbnRlbnQgdGV4dGFyZWFbZGF0YS1jdy1kaXNhYmxlZF0sXG4gICAgLmN3LWNvbnRlbnQgdGV4dGFyZWFbZGlzYWJsZWRdLFxuICAgIC5jdy1jb250ZW50IHNlbGVjdFtkYXRhLWN3LWRpc2FibGVkXSxcbiAgICAuY3ctY29udGVudCBzZWxlY3RbZGlzYWJsZWRdIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgaW5wdXQ6OnBsYWNlaG9sZGVyLFxuICAgIC5jdy1jb250ZW50IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBidXR0b24sXG4gICAgLmN3LWNvbnRlbnQgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbiAgICAuY3ctY29udGVudCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuICAgIC5jdy1jb250ZW50IGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4xNSkgMCUsIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA4KSAxMDAlKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjI1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBjb2xvcjogI2E3OGJmYTtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBtYXJnaW46IDAuNWVtIDA7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgYnV0dG9uW2RhdGEtY3ctZGlzYWJsZWRdLFxuICAgIC5jdy1jb250ZW50IGJ1dHRvbltkaXNhYmxlZF0sXG4gICAgLmN3LWNvbnRlbnQgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXVtkYXRhLWN3LWRpc2FibGVkXSxcbiAgICAuY3ctY29udGVudCBpbnB1dFt0eXBlPVwic3VibWl0XCJdW2Rpc2FibGVkXSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgLyogQWJicmV2aWF0aW9ucyAqL1xuICAgIC5jdy1jb250ZW50IGFiYnIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICBjdXJzb3I6IGhlbHA7XG4gICAgfVxuXG4gICAgLyogTWFyay9oaWdobGlnaHQgKi9cbiAgICAuY3ctY29udGVudCBtYXJrIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTEsIDM2LCAwLjIpO1xuICAgICAgY29sb3I6ICNmYmJmMjQ7XG4gICAgICBwYWRkaW5nOiAwLjFlbSAwLjNlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAvKiBEZWwvaW5zIChlZGl0cykgKi9cbiAgICAuY3ctY29udGVudCBkZWwge1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG5cbiAgICAuY3ctY29udGVudCBpbnMge1xuICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAvKiBTbWFsbCB0ZXh0ICovXG4gICAgLmN3LWNvbnRlbnQgc21hbGwge1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIH1cblxuICAgIC8qIFN0cm9uZy9lbXBoYXNpcyAqL1xuICAgIC5jdy1jb250ZW50IHN0cm9uZyB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmMWY1Zjk7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgZW0ge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cblxuICAgIC8qIEFkZHJlc3MgKi9cbiAgICAuY3ctY29udGVudCBhZGRyZXNzIHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KTtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdjM2FlZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XG4gICAgfVxuXG4gICAgLyogQ2l0ZSAqL1xuICAgIC5jdy1jb250ZW50IGNpdGUge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgY29sb3I6ICNhNzhiZmE7XG4gICAgfVxuXG4gICAgLyogVGltZSAqL1xuICAgIC5jdy1jb250ZW50IHRpbWUge1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIH1cblxuICAgIC8qIENvZGUgYmxvY2tzIHdpdGggbGFuZ3VhZ2UgbGFiZWxzICovXG4gICAgLmN3LWNvbnRlbnQgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmN3LWNvbnRlbnQgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoY2xhc3MpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA4cHg7XG4gICAgICByaWdodDogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgIC8qIE1hdGgvY29kZSBlcXVhdGlvbnMgKi9cbiAgICAuY3ctY29udGVudCBtYXRoLFxuICAgIC5jdy1jb250ZW50IC5tYXRoIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cblxuICAgIC8qIEhlcm8gaW1hZ2UgKi9cbiAgICAuY3ctaGVybyB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlICsgODBweCk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSArIDgwcHgpO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgIG1hcmdpbjogMCAtNDBweCA0OHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAzMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIH1cblxuICAgIC8qIEZvb3RlciAqL1xuICAgIC5jdy1mb290ZXIge1xuICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gICAgfVxuXG4gICAgLmN3LXNvdXJjZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICB9XG5cbiAgICAuY3ctZmF2aWNvbiB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG5cbiAgICAuY3ctc291cmNlLXVybCB7XG4gICAgICBjb2xvcjogIzgxOGNmODtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICAvKiBUd28gY29sdW1uIGxheW91dCBmb3IgbG9uZyBjb250ZW50ICovXG4gICAgLmN3LWNvbHVtbnMtMiB7XG4gICAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgICBjb2x1bW4tZ2FwOiA0OHB4O1xuICAgICAgY29sdW1uLXJ1bGU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgIH1cblxuICAgIC5jdy1jb2x1bW5zLTIgaDEsXG4gICAgLmN3LWNvbHVtbnMtMiBoMixcbiAgICAuY3ctY29sdW1ucy0yIGgzLFxuICAgIC5jdy1jb2x1bW5zLTIgYmxvY2txdW90ZSxcbiAgICAuY3ctY29sdW1ucy0yIHByZSB7XG4gICAgICBjb2x1bW4tc3BhbjogYWxsO1xuICAgIH1cblxuICAgIC8qIFJlc3BvbnNpdmUgKi9cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5jdy10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jdy10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jdy1tYWluIHtcbiAgICAgICAgcGFkZGluZzogMTAwcHggMjBweCA4MHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY3ctdGl0bGUtbWFpbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmN3LWNvbnRlbnQge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jdy1jb250ZW50IHA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jdy1jb2x1bW5zLTIge1xuICAgICAgICBjb2x1bW4tY291bnQ6IDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jdy1oZXJvIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDQwcHgpO1xuICAgICAgICBtYXJnaW46IDAgLTIwcHggMzJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmN3LWJ0biBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmN3LWJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBGb2N1cyB2aXNpYmxlIGZvciBhY2Nlc3NpYmlsaXR5ICovXG4gICAgLmN3LWJ0bjpmb2N1cy12aXNpYmxlIHtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjN2MzYWVkO1xuICAgICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgICB9XG5cbiAgICAvKiBTZWxlY3Rpb24gY29sb3IgKi9cbiAgICA6OnNlbGVjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzOSwgOTIsIDI0NiwgMC4zKTtcbiAgICAgIGNvbG9yOiAjZjhmYWZjO1xuICAgIH1cblxuICAgIC8qIEFuaW1hdGlvbnMgKi9cbiAgICBAa2V5ZnJhbWVzIGN3LWZhZGUtaW4ge1xuICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgfVxuICAgICAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICB9XG5cbiAgICAuY3ctbWFpbiB7XG4gICAgICBhbmltYXRpb246IGN3LWZhZGUtaW4gMC40cyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGN3LXVuZGVybGluZS1leHBhbmQge1xuICAgICAgZnJvbSB7IHdpZHRoOiAwOyB9XG4gICAgICB0byB7IHdpZHRoOiAxMDAlOyB9XG4gICAgfVxuICBgO1xuICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIC8vIEJ1aWxkIG92ZXJsYXlcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9ICdjdy1vdmVybGF5JztcblxuICAvLyBCYWNrZ3JvdW5kIHBhdHRlcm5cbiAgY29uc3QgYmdQYXR0ZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJnUGF0dGVybi5jbGFzc05hbWUgPSAnY3ctYmctcGF0dGVybic7XG5cbiAgLy8gVG9vbGJhclxuICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvb2xiYXIuY2xhc3NOYW1lID0gJ2N3LXRvb2xiYXInO1xuICB0b29sYmFyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY3ctdG9vbGJhci1sZWZ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3ctbG9nb1wiPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNhNzhiZmFcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAyMnM4LTQgOC0xMFY1bC04LTMtOCAzdjdjMCA2IDggMTAgOCAxMHpcIi8+XG4gICAgICAgICAgPHBhdGggZD1cIk05IDEybDIgMiA0LTRcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICBDYWxtV2ViXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdy10aXRsZVwiPiR7ZXNjYXBlSHRtbCh0aXRsZVRleHQpfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjdy10b29sYmFyLXJpZ2h0XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY3ctYnRuIGN3LWJ0bi1wcmltYXJ5XCIgaWQ9XCJjdy1yYXctYnRuXCI+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIi8+XG4gICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCI5XCIgeDI9XCIyMVwiIHkyPVwiOVwiLz5cbiAgICAgICAgICA8bGluZSB4MT1cIjlcIiB5MT1cIjIxXCIgeDI9XCI5XCIgeTI9XCI5XCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4+T3JpZ2luYWw8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjdy1idG4gY3ctYnRuLWNsb3NlXCIgaWQ9XCJjdy1jbG9zZS1idG5cIj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgICAgPGxpbmUgeDE9XCIxOFwiIHkxPVwiNlwiIHgyPVwiNlwiIHkyPVwiMThcIi8+XG4gICAgICAgICAgPGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3Bhbj5DbG9zZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIC8vIE1haW4gY29udGVudCBhcmVhXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NOYW1lID0gJ2N3LW1haW4nO1xuXG4gIC8vIEFydGljbGUgaGVhZGVyIHBsYWNlaG9sZGVyXG4gIGNvbnN0IGhlYWRlclBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlclBsYWNlaG9sZGVyLmNsYXNzTmFtZSA9ICdjdy1hcnRpY2xlLWhlYWRlcic7XG5cbiAgLy8gQ29udGVudCBwbGFjZWhvbGRlclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2N3LWNvbnRlbnQnO1xuXG4gIC8vIEZvb3RlciBwbGFjZWhvbGRlclxuICBjb25zdCBmb290ZXJQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXJQbGFjZWhvbGRlci5jbGFzc05hbWUgPSAnY3ctZm9vdGVyJztcblxuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlclBsYWNlaG9sZGVyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChmb290ZXJQbGFjZWhvbGRlcik7XG5cbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChiZ1BhdHRlcm4pO1xuICBvdmVybGF5LmFwcGVuZENoaWxkKHRvb2xiYXIpO1xuICBvdmVybGF5LmFwcGVuZENoaWxkKG1haW4pO1xuICBzaGFkb3cuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob3N0KTtcblxuICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgc2hhZG93LmdldEVsZW1lbnRCeUlkKCdjdy1jbG9zZS1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VSZWFkZXIoKTtcbiAgICBvcHRpb25zLm9uQ2xvc2U/LigpO1xuICB9KTtcbiAgc2hhZG93LmdldEVsZW1lbnRCeUlkKCdjdy1yYXctYnRuJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsb3NlUmVhZGVyKCk7XG4gICAgb3B0aW9ucy5vbkNsb3NlPy4oKTtcbiAgfSk7XG5cbiAgLy8gUmVuZGVyIGNvbnRlbnRcbiAgaWYgKGFwaVJlc3VsdD8uc3VjY2VzcyAmJiBhcGlSZXN1bHQuZmlsdGVyZWRDb250ZW50KSB7XG4gICAgaGVhZGVyUGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGgxIGNsYXNzPVwiY3ctdGl0bGUtbWFpblwiPiR7ZXNjYXBlSHRtbChhcGlSZXN1bHQudGl0bGUpfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3ctbWV0YVwiPlxuICAgICAgICAke2FwaVJlc3VsdC5zdW1tYXJ5ID8gYDxzcGFuIGNsYXNzPVwiY3ctbWV0YS1pdGVtXCI+JHtlc2NhcGVIdG1sKGFwaVJlc3VsdC5zdW1tYXJ5LnNsaWNlKDAsIDEwMCkpfTwvc3Bhbj5gIDogJyd9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY3ctbWV0YS1zZXBcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY3ctYWktYmFkZ2VcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMkwyIDdsMTAgNSAxMC01LTEwLTV6XCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yIDE3bDEwIDUgMTAtNVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMiAxMmwxMCA1IDEwLTVcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgQUkgRmlsdGVyZWRcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGFwaVJlc3VsdC5maWx0ZXJlZENvbnRlbnQ7XG4gICAgc2FuaXRpemVMaW5rcyhjb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZW5kZXJBcnRpY2xlID0gYXJ0aWNsZSAmJiBhcnRpY2xlLnRpdGxlID8gYXJ0aWNsZSA6IGZhbGxiYWNrQXJ0aWNsZSgpO1xuICAgIHRyeSB7XG4gICAgICBsYXlvdXQucmVuZGVyKHJlbmRlckFydGljbGUsIGNvbnRlbnQsIHtcbiAgICAgICAgZm9udDogb3B0aW9ucy5mb250IHx8ICdJbnRlcicsXG4gICAgICAgIGZvbnRTaXplOiBvcHRpb25zLmZvbnRTaXplIHx8ICcxN3B4JyxcbiAgICAgIH0sIHtcbiAgICAgICAgaGVhZGVyOiBoZWFkZXJQbGFjZWhvbGRlcixcbiAgICAgICAgZm9vdGVyOiBmb290ZXJQbGFjZWhvbGRlcixcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW0NhbG1XZWJdIExheW91dCByZW5kZXIgZmFpbGVkOicsIGVycik7XG4gICAgICByZW5kZXJGYWxsYmFjayhjb250ZW50LCByZW5kZXJBcnRpY2xlKTtcbiAgICB9XG4gIH1cblxuICAvLyBFc2NhcGUga2V5IGhhbmRsZXJcbiAgY29uc3QgaGFuZGxlRXNjID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBjbG9zZVJlYWRlcigpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzYyk7XG4gICAgfVxuICB9O1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcbn1cblxuZnVuY3Rpb24gZmFsbGJhY2tBcnRpY2xlKCk6IEV4dHJhY3RlZEFydGljbGUge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSB8fCAnQ3VycmVudCBQYWdlJyxcbiAgICBhdXRob3I6IHVuZGVmaW5lZCxcbiAgICBkYXRlOiB1bmRlZmluZWQsXG4gICAgY29udGVudDogZG9jdW1lbnQuYm9keT8udGV4dENvbnRlbnQ/LnNsaWNlKDAsIDUwMDApIHx8ICcnLFxuICAgIGNvbnRlbnRIdG1sOiAoKCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuYm9keT8udGV4dENvbnRlbnQgfHwgJyc7XG4gICAgICBjb25zdCBwYXJhZ3JhcGhzID0gdGV4dC5zcGxpdCgvXFxuXFxzKlxcbi8pLmZpbHRlcihwID0+IHAudHJpbSgpLmxlbmd0aCA+IDIwKS5zbGljZSgwLCAyMCk7XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgcGFyYWdyYXBocykge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBwLnRyaW0oKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXY7XG4gICAgfSkoKSxcbiAgICBpbWFnZXM6IFtdLFxuICAgIHNvdXJjZTogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLFxuICAgIGZhdmljb246IHVuZGVmaW5lZCxcbiAgICByZWFkaW5nVGltZTogTWF0aC5jZWlsKChkb2N1bWVudC5ib2R5Py50ZXh0Q29udGVudD8uc3BsaXQoL1xccysvKS5sZW5ndGggfHwgMCkgLyAyMDApLFxuICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZhbGxiYWNrKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGFydGljbGU6IEV4dHJhY3RlZEFydGljbGUpOiB2b2lkIHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8cD4ke2VzY2FwZUh0bWwoYXJ0aWNsZS5jb250ZW50LnNsaWNlKDAsIDUwMCkpfTwvcD5cbiAgYDtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVMaW5rcyhjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaChhID0+IHtcbiAgICBhLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIGEuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUmVhZGVyKCk6IHZvaWQge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChIT1NUX0lEKT8ucmVtb3ZlKCk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBzcGFuLmlubmVySFRNTDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZGVyT3BlbigpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSE9TVF9JRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVSZWFkZXIob3B0aW9ucz86IFJlYWRlck9wdGlvbnMpOiB2b2lkIHtcbiAgaWYgKGlzUmVhZGVyT3BlbigpKSB7XG4gICAgY2xvc2VSZWFkZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBvcGVuUmVhZGVyKG9wdGlvbnMpO1xuICB9XG59XG4iLCJleHBvcnQgdmFyIHV0aWw7XG4oZnVuY3Rpb24gKHV0aWwpIHtcbiAgICB1dGlsLmFzc2VydEVxdWFsID0gKF8pID0+IHsgfTtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWwpICYmIE1hdGguZmxvb3IodmFsKSA9PT0gdmFsO1xuICAgIGZ1bmN0aW9uIGpvaW5WYWx1ZXMoYXJyYXksIHNlcGFyYXRvciA9IFwiIHwgXCIpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcCgodmFsKSA9PiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IGAnJHt2YWx9J2AgOiB2YWwpKS5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbmV4cG9ydCB2YXIgb2JqZWN0VXRpbDtcbihmdW5jdGlvbiAob2JqZWN0VXRpbCkge1xuICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXMgPSAoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZmlyc3QsXG4gICAgICAgICAgICAuLi5zZWNvbmQsIC8vIHNlY29uZCBvdmVyd3JpdGVzIGZpcnN0XG4gICAgICAgIH07XG4gICAgfTtcbn0pKG9iamVjdFV0aWwgfHwgKG9iamVjdFV0aWwgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmV4cG9ydCBjb25zdCBnZXRQYXJzZWRUeXBlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIGRhdGE7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZDtcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3RyaW5nO1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKGRhdGEpID8gWm9kUGFyc2VkVHlwZS5uYW4gOiBab2RQYXJzZWRUeXBlLm51bWJlcjtcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJvb2xlYW47XG4gICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZnVuY3Rpb247XG4gICAgICAgIGNhc2UgXCJiaWdpbnRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJpZ2ludDtcbiAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3ltYm9sO1xuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5udWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudGhlbiAmJiB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiYgZGF0YS5jYXRjaCAmJiB0eXBlb2YgZGF0YS5jYXRjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUucHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5tYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIFNldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBEYXRlICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm9iamVjdDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVua25vd247XG4gICAgfVxufTtcbiIsImltcG9ydCB7IHV0aWwgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWwuanNcIjtcbmV4cG9ydCBjb25zdCBab2RJc3N1ZUNvZGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcImludmFsaWRfdHlwZVwiLFxuICAgIFwiaW52YWxpZF9saXRlcmFsXCIsXG4gICAgXCJjdXN0b21cIixcbiAgICBcImludmFsaWRfdW5pb25cIixcbiAgICBcImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvclwiLFxuICAgIFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIsXG4gICAgXCJ1bnJlY29nbml6ZWRfa2V5c1wiLFxuICAgIFwiaW52YWxpZF9hcmd1bWVudHNcIixcbiAgICBcImludmFsaWRfcmV0dXJuX3R5cGVcIixcbiAgICBcImludmFsaWRfZGF0ZVwiLFxuICAgIFwiaW52YWxpZF9zdHJpbmdcIixcbiAgICBcInRvb19zbWFsbFwiLFxuICAgIFwidG9vX2JpZ1wiLFxuICAgIFwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXNcIixcbiAgICBcIm5vdF9tdWx0aXBsZV9vZlwiLFxuICAgIFwibm90X2Zpbml0ZVwiLFxuXSk7XG5leHBvcnQgY29uc3QgcXVvdGVsZXNzSnNvbiA9IChvYmopID0+IHtcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAyKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC9cIihbXlwiXSspXCI6L2csIFwiJDE6XCIpO1xufTtcbmV4cG9ydCBjbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBnZXQgZXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXM7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGlzc3Vlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZElzc3VlID0gKHN1YikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIHN1Yl07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkSXNzdWVzID0gKHN1YnMgPSBbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIC4uLnN1YnNdO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhY3R1YWxQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIGFjdHVhbFByb3RvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19wcm90b19fID0gYWN0dWFsUHJvdG87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gXCJab2RFcnJvclwiO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IGlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHN0YXRpYyBhc3NlcnQodmFsdWUpIHtcbiAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBab2RFcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGEgWm9kRXJyb3I6ICR7dmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5pc3N1ZXMsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyLCAyKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3Vlcy5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGZsYXR0ZW4obWFwcGVyID0gKGlzc3VlKSA9PiBpc3N1ZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge307XG4gICAgICAgIGNvbnN0IGZvcm1FcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5pc3N1ZXMpIHtcbiAgICAgICAgICAgIGlmIChzdWIucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RFbCA9IHN1Yi5wYXRoWzBdO1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW2ZpcnN0RWxdID0gZmllbGRFcnJvcnNbZmlyc3RFbF0gfHwgW107XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbZmlyc3RFbF0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcbiIsImltcG9ydCB7IFpvZElzc3VlQ29kZSB9IGZyb20gXCIuLi9ab2RFcnJvci5qc1wiO1xuaW1wb3J0IHsgdXRpbCwgWm9kUGFyc2VkVHlwZSB9IGZyb20gXCIuLi9oZWxwZXJzL3V0aWwuanNcIjtcbmNvbnN0IGVycm9yTWFwID0gKGlzc3VlLCBfY3R4KSA9PiB7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgc3dpdGNoIChpc3N1ZS5jb2RlKSB7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZTpcbiAgICAgICAgICAgIGlmIChpc3N1ZS5yZWNlaXZlZCA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJSZXF1aXJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBFeHBlY3RlZCAke2lzc3VlLmV4cGVjdGVkfSwgcmVjZWl2ZWQgJHtpc3N1ZS5yZWNlaXZlZH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfbGl0ZXJhbDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBsaXRlcmFsIHZhbHVlLCBleHBlY3RlZCAke0pTT04uc3RyaW5naWZ5KGlzc3VlLmV4cGVjdGVkLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlcil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVW5yZWNvZ25pemVkIGtleShzKSBpbiBvYmplY3Q6ICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLmtleXMsIFwiLCBcIil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3I6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZW51bSB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9LCByZWNlaXZlZCAnJHtpc3N1ZS5yZWNlaXZlZH0nYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiBhcmd1bWVudHNgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfcmV0dXJuX3R5cGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZnVuY3Rpb24gcmV0dXJuIHR5cGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkYXRlYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChcImluY2x1ZGVzXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgaW5jbHVkZSBcIiR7aXNzdWUudmFsaWRhdGlvbi5pbmNsdWRlc31cImA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbi5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGAke21lc3NhZ2V9IGF0IG9uZSBvciBtb3JlIHBvc2l0aW9ucyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHtpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9ufWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJzdGFydHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3Qgc3RhcnQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5zdGFydHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJlbmRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IGVuZCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmVuZHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUudmFsaWRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudmFsaWRhdGlvbiAhPT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkICR7aXNzdWUudmFsaWRhdGlvbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19zbWFsbDpcbiAgICAgICAgICAgIGlmIChpc3N1ZS50eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBBcnJheSBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBtb3JlIHRoYW5gfSAke2lzc3VlLm1pbmltdW19IGVsZW1lbnQocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFN0cmluZyBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBvdmVyYH0gJHtpc3N1ZS5taW5pbXVtfSBjaGFyYWN0ZXIocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5IGVxdWFsIHRvIGAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGAgOiBgZ3JlYXRlciB0aGFuIGB9JHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWluaW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBsZXNzIHRoYW4gb3IgZXF1YWwgdG9gIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEJpZ0ludCBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvYCA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKE51bWJlcihpc3N1ZS5tYXhpbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuY3VzdG9tOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlczpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW50ZXJzZWN0aW9uIHJlc3VsdHMgY291bGQgbm90IGJlIG1lcmdlZGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7aXNzdWUubXVsdGlwbGVPZn1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9maW5pdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJOdW1iZXIgbXVzdCBiZSBmaW5pdGVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IF9jdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZSk7XG4gICAgfVxuICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBlcnJvck1hcDtcbiIsImltcG9ydCBkZWZhdWx0RXJyb3JNYXAgZnJvbSBcIi4vbG9jYWxlcy9lbi5qc1wiO1xubGV0IG92ZXJyaWRlRXJyb3JNYXAgPSBkZWZhdWx0RXJyb3JNYXA7XG5leHBvcnQgeyBkZWZhdWx0RXJyb3JNYXAgfTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRFcnJvck1hcChtYXApIHtcbiAgICBvdmVycmlkZUVycm9yTWFwID0gbWFwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yTWFwKCkge1xuICAgIHJldHVybiBvdmVycmlkZUVycm9yTWFwO1xufVxuIiwiaW1wb3J0IHsgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgZGVmYXVsdEVycm9yTWFwIGZyb20gXCIuLi9sb2NhbGVzL2VuLmpzXCI7XG5leHBvcnQgY29uc3QgbWFrZUlzc3VlID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgcGF0aCwgZXJyb3JNYXBzLCBpc3N1ZURhdGEgfSA9IHBhcmFtcztcbiAgICBjb25zdCBmdWxsUGF0aCA9IFsuLi5wYXRoLCAuLi4oaXNzdWVEYXRhLnBhdGggfHwgW10pXTtcbiAgICBjb25zdCBmdWxsSXNzdWUgPSB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgfTtcbiAgICBpZiAoaXNzdWVEYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3QgbWFwcyA9IGVycm9yTWFwc1xuICAgICAgICAuZmlsdGVyKChtKSA9PiAhIW0pXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBtYXAgb2YgbWFwcykge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBtYXAoZnVsbElzc3VlLCB7IGRhdGEsIGRlZmF1bHRFcnJvcjogZXJyb3JNZXNzYWdlIH0pLm1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBFTVBUWV9QQVRIID0gW107XG5leHBvcnQgZnVuY3Rpb24gYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBpc3N1ZURhdGEpIHtcbiAgICBjb25zdCBvdmVycmlkZU1hcCA9IGdldEVycm9yTWFwKCk7XG4gICAgY29uc3QgaXNzdWUgPSBtYWtlSXNzdWUoe1xuICAgICAgICBpc3N1ZURhdGE6IGlzc3VlRGF0YSxcbiAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCAvLyBjb250ZXh0dWFsIGVycm9yIG1hcCBpcyBmaXJzdCBwcmlvcml0eVxuICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLCAvLyB0aGVuIHNjaGVtYS1ib3VuZCBtYXAgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBvdmVycmlkZU1hcCwgLy8gdGhlbiBnbG9iYWwgb3ZlcnJpZGUgbWFwXG4gICAgICAgICAgICBvdmVycmlkZU1hcCA9PT0gZGVmYXVsdEVycm9yTWFwID8gdW5kZWZpbmVkIDogZGVmYXVsdEVycm9yTWFwLCAvLyB0aGVuIGdsb2JhbCBkZWZhdWx0IG1hcFxuICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICB9KTtcbiAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKGlzc3VlKTtcbn1cbmV4cG9ydCBjbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBwYWlyO1xuICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKGtleS52YWx1ZSAhPT0gXCJfX3Byb3RvX19cIiAmJiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSkge1xuICAgICAgICAgICAgICAgIGZpbmFsT2JqZWN0W2tleS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsT2JqZWN0IH07XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IElOVkFMSUQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBzdGF0dXM6IFwiYWJvcnRlZFwiLFxufSk7XG5leHBvcnQgY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmV4cG9ydCBjb25zdCBPSyA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlIH0pO1xuZXhwb3J0IGNvbnN0IGlzQWJvcnRlZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCI7XG5leHBvcnQgY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuZXhwb3J0IGNvbnN0IGlzVmFsaWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwidmFsaWRcIjtcbmV4cG9ydCBjb25zdCBpc0FzeW5jID0gKHgpID0+IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuIiwiZXhwb3J0IHZhciBlcnJvclV0aWw7XG4oZnVuY3Rpb24gKGVycm9yVXRpbCkge1xuICAgIGVycm9yVXRpbC5lcnJUb09iaiA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZSB9IDogbWVzc2FnZSB8fCB7fTtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludDpcbiAgICBlcnJvclV0aWwudG9TdHJpbmcgPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyBtZXNzYWdlIDogbWVzc2FnZT8ubWVzc2FnZTtcbn0pKGVycm9yVXRpbCB8fCAoZXJyb3JVdGlsID0ge30pKTtcbiIsImltcG9ydCB7IFpvZEVycm9yLCBab2RJc3N1ZUNvZGUsIH0gZnJvbSBcIi4vWm9kRXJyb3IuanNcIjtcbmltcG9ydCB7IGRlZmF1bHRFcnJvck1hcCwgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCB7IGVycm9yVXRpbCB9IGZyb20gXCIuL2hlbHBlcnMvZXJyb3JVdGlsLmpzXCI7XG5pbXBvcnQgeyBESVJUWSwgSU5WQUxJRCwgT0ssIFBhcnNlU3RhdHVzLCBhZGRJc3N1ZVRvQ29udGV4dCwgaXNBYm9ydGVkLCBpc0FzeW5jLCBpc0RpcnR5LCBpc1ZhbGlkLCBtYWtlSXNzdWUsIH0gZnJvbSBcIi4vaGVscGVycy9wYXJzZVV0aWwuanNcIjtcbmltcG9ydCB7IHV0aWwsIFpvZFBhcnNlZFR5cGUsIGdldFBhcnNlZFR5cGUgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWwuanNcIjtcbmNsYXNzIFBhcnNlSW5wdXRMYXp5UGF0aCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB2YWx1ZSwgcGF0aCwga2V5KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlZFBhdGggPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgIH1cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZWRQYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZFBhdGgucHVzaCguLi50aGlzLl9wYXRoLCAuLi50aGlzLl9rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIHRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhdGg7XG4gICAgfVxufVxuY29uc3QgaGFuZGxlUmVzdWx0ID0gKGN0eCwgcmVzdWx0KSA9PiB7XG4gICAgaWYgKGlzVmFsaWQocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQudmFsdWUgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIGZhaWxlZCBidXQgbm8gaXNzdWVzIGRldGVjdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuZnVuY3Rpb24gcHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIGNvbnN0IHsgZXJyb3JNYXAsIGludmFsaWRfdHlwZV9lcnJvciwgcmVxdWlyZWRfZXJyb3IsIGRlc2NyaXB0aW9uIH0gPSBwYXJhbXM7XG4gICAgaWYgKGVycm9yTWFwICYmIChpbnZhbGlkX3R5cGVfZXJyb3IgfHwgcmVxdWlyZWRfZXJyb3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgdXNlIFwiaW52YWxpZF90eXBlX2Vycm9yXCIgb3IgXCJyZXF1aXJlZF9lcnJvclwiIGluIGNvbmp1bmN0aW9uIHdpdGggY3VzdG9tIGVycm9yIG1hcC5gKTtcbiAgICB9XG4gICAgaWYgKGVycm9yTWFwKVxuICAgICAgICByZXR1cm4geyBlcnJvck1hcDogZXJyb3JNYXAsIGRlc2NyaXB0aW9uIH07XG4gICAgY29uc3QgY3VzdG9tTWFwID0gKGlzcywgY3R4KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gcGFyYW1zO1xuICAgICAgICBpZiAoaXNzLmNvZGUgPT09IFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gcmVxdWlyZWRfZXJyb3IgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc3MuY29kZSAhPT0gXCJpbnZhbGlkX3R5cGVcIilcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyBpbnZhbGlkX3R5cGVfZXJyb3IgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgIH07XG4gICAgcmV0dXJuIHsgZXJyb3JNYXA6IGN1c3RvbU1hcCwgZGVzY3JpcHRpb24gfTtcbn1cbmV4cG9ydCBjbGFzcyBab2RUeXBlIHtcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIF9nZXRUeXBlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBfZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCkge1xuICAgICAgICByZXR1cm4gKGN0eCB8fCB7XG4gICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IG5ldyBQYXJzZVN0YXR1cygpLFxuICAgICAgICAgICAgY3R4OiB7XG4gICAgICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcGFyc2VTeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3luY2hyb25vdXMgcGFyc2UgZW5jb3VudGVyZWQgcHJvbWlzZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX3BhcnNlQXN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfVxuICAgIHBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNhZmVQYXJzZShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgc2FmZVBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBwYXJhbXM/LmFzeW5jID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zPy5lcnJvck1hcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBwYXJhbXM/LnBhdGggfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIFwifnZhbGlkYXRlXCIoZGF0YSkge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAhIXRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZVN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnI/Lm1lc3NhZ2U/LnRvTG93ZXJDYXNlKCk/LmluY2x1ZGVzKFwiZW5jb3VudGVyZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jb21tb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSkudGhlbigocmVzdWx0KSA9PiBpc1ZhbGlkKHJlc3VsdClcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zPy5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBwYXJhbXM/LnBhdGggfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdCkgPyBtYXliZUFzeW5jUmVzdWx0IDogUHJvbWlzZS5yZXNvbHZlKG1heWJlQXN5bmNSZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIHJlZmluZShjaGVjaywgbWVzc2FnZSkge1xuICAgICAgICBjb25zdCBnZXRJc3N1ZVByb3BlcnRpZXMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudCgodmFsLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrKHZhbCk7XG4gICAgICAgICAgICBjb25zdCBzZXRFcnJvciA9ICgpID0+IGN0eC5hZGRJc3N1ZSh7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmN1c3RvbSxcbiAgICAgICAgICAgICAgICAuLi5nZXRJc3N1ZVByb3BlcnRpZXModmFsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZmluZW1lbnQoY2hlY2ssIHJlZmluZW1lbnREYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayh2YWwpKSB7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHR5cGVvZiByZWZpbmVtZW50RGF0YSA9PT0gXCJmdW5jdGlvblwiID8gcmVmaW5lbWVudERhdGEodmFsLCBjdHgpIDogcmVmaW5lbWVudERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlZmluZW1lbnQocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicmVmaW5lbWVudFwiLCByZWZpbmVtZW50IH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdXBlclJlZmluZShyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KHJlZmluZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihkZWYpIHtcbiAgICAgICAgLyoqIEFsaWFzIG9mIHNhZmVQYXJzZUFzeW5jICovXG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zYWZlUGFyc2VBc3luYztcbiAgICAgICAgdGhpcy5fZGVmID0gZGVmO1xuICAgICAgICB0aGlzLnBhcnNlID0gdGhpcy5wYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZSA9IHRoaXMuc2FmZVBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFyc2VBc3luYyA9IHRoaXMucGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZUFzeW5jID0gdGhpcy5zYWZlUGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc3BhLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lID0gdGhpcy5yZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmVtZW50ID0gdGhpcy5yZWZpbmVtZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VwZXJSZWZpbmUgPSB0aGlzLnN1cGVyUmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSB0aGlzLm9wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGFibGUgPSB0aGlzLm51bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGlzaCA9IHRoaXMubnVsbGlzaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLnByb21pc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vciA9IHRoaXMub3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmQgPSB0aGlzLmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJhbmQgPSB0aGlzLmJyYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IHRoaXMuZGVmYXVsdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhdGNoID0gdGhpcy5jYXRjaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlID0gdGhpcy5kZXNjcmliZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBpcGUgPSB0aGlzLnBpcGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IHRoaXMucmVhZG9ubHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc051bGxhYmxlID0gdGhpcy5pc051bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNPcHRpb25hbCA9IHRoaXMuaXNPcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdID0ge1xuICAgICAgICAgICAgdmVyc2lvbjogMSxcbiAgICAgICAgICAgIHZlbmRvcjogXCJ6b2RcIixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoZGF0YSkgPT4gdGhpc1tcIn52YWxpZGF0ZVwiXShkYXRhKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVsbGFibGUoKS5vcHRpb25hbCgpO1xuICAgIH1cbiAgICBhcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZEFycmF5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFByb21pc2UuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG9yKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gWm9kVW5pb24uY3JlYXRlKFt0aGlzLCBvcHRpb25dLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBhbmQoaW5jb21pbmcpIHtcbiAgICAgICAgcmV0dXJuIFpvZEludGVyc2VjdGlvbi5jcmVhdGUodGhpcywgaW5jb21pbmcsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQoZGVmKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicmFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCcmFuZGVkKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChkZWYpIHtcbiAgICAgICAgY29uc3QgY2F0Y2hWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgaW5uZXJUeXBlOiB0aGlzLFxuICAgICAgICAgICAgY2F0Y2hWYWx1ZTogY2F0Y2hWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzY3JpYmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgVGhpcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgVGhpcyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpcGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBab2RQaXBlbGluZS5jcmVhdGUodGhpcywgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmVhZG9ubHkoKSB7XG4gICAgICAgIHJldHVybiBab2RSZWFkb25seS5jcmVhdGUodGhpcyk7XG4gICAgfVxuICAgIGlzT3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZSh1bmRlZmluZWQpLnN1Y2Nlc3M7XG4gICAgfVxuICAgIGlzTnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZShudWxsKS5zdWNjZXNzO1xuICAgIH1cbn1cbmNvbnN0IGN1aWRSZWdleCA9IC9eY1teXFxzLV17OCx9JC9pO1xuY29uc3QgY3VpZDJSZWdleCA9IC9eWzAtOWEtel0rJC87XG5jb25zdCB1bGlkUmVnZXggPSAvXlswLTlBLUhKS01OUC1UVi1aXXsyNn0kL2k7XG4vLyBjb25zdCB1dWlkUmVnZXggPVxuLy8gICAvXihbYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bMS01XVthLWYwLTldezN9LVthLWYwLTldezR9LVthLWYwLTldezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuY29uc3QgdXVpZFJlZ2V4ID0gL15bMC05YS1mQS1GXXs4fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXsxMn0kL2k7XG5jb25zdCBuYW5vaWRSZWdleCA9IC9eW2EtejAtOV8tXXsyMX0kL2k7XG5jb25zdCBqd3RSZWdleCA9IC9eW0EtWmEtejAtOS1fXStcXC5bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10qJC87XG5jb25zdCBkdXJhdGlvblJlZ2V4ID0gL15bLStdP1AoPyEkKSg/Oig/OlstK10/XFxkK1kpfCg/OlstK10/XFxkK1suLF1cXGQrWSQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86KD86Wy0rXT9cXGQrVyl8KD86Wy0rXT9cXGQrWy4sXVxcZCtXJCkpPyg/Oig/OlstK10/XFxkK0QpfCg/OlstK10/XFxkK1suLF1cXGQrRCQpKT8oPzpUKD89W1xcZCstXSkoPzooPzpbLStdP1xcZCtIKXwoPzpbLStdP1xcZCtbLixdXFxkK0gkKSk/KD86KD86Wy0rXT9cXGQrTSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtNJCkpPyg/OlstK10/XFxkKyg/OlsuLF1cXGQrKT9TKT8pPz8kLztcbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2MTgxLzE1NTAxNTVcbi8vIG9sZCB2ZXJzaW9uOiB0b28gc2xvdywgZGlkbid0IHN1cHBvcnQgdW5pY29kZVxuLy8gY29uc3QgZW1haWxSZWdleCA9IC9eKCgoW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKyhcXC4oW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKykqKXwoKFxceDIyKSgoKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KChbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3Zl18XFx4MjF8W1xceDIzLVxceDViXXxbXFx4NWQtXFx4N2VdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoXFxcXChbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpKSooKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KFxceDIyKSkpQCgoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSQvaTtcbi8vb2xkIGVtYWlsIHJlZ2V4XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF0uLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXS4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKCg/IS0pKFtePD4oKVtcXF0uLDs6XFxzQFwiXStcXC4pK1tePD4oKVtcXF0uLDs6XFxzQFwiXXsxLH0pW14tPD4oKVtcXF0uLDs6XFxzQFwiXSQvaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcWygoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcXSl8KFxcW0lQdjY6KChbYS1mMC05XXsxLDR9Oil7N318OjooW2EtZjAtOV17MSw0fTopezAsNn18KFthLWYwLTldezEsNH06KXsxfTooW2EtZjAtOV17MSw0fTopezAsNX18KFthLWYwLTldezEsNH06KXsyfTooW2EtZjAtOV17MSw0fTopezAsNH18KFthLWYwLTldezEsNH06KXszfTooW2EtZjAtOV17MSw0fTopezAsM318KFthLWYwLTldezEsNH06KXs0fTooW2EtZjAtOV17MSw0fTopezAsMn18KFthLWYwLTldezEsNH06KXs1fTooW2EtZjAtOV17MSw0fTopezAsMX0pKFthLWYwLTldezEsNH18KCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpKVxcXSl8KFtBLVphLXowLTldKFtBLVphLXowLTktXSpbQS1aYS16MC05XSkqKFxcLltBLVphLXpdezIsfSkrKSkkLztcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXpBLVowLTlcXC5cXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC9cXD1cXD9cXF5cXF9cXGBcXHtcXHxcXH1cXH5cXC1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkkL2k7XG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oPyFcXC4pKD8hLipcXC5cXC4pKFtBLVowLTlfJytcXC1cXC5dKilbQS1aMC05XystXUAoW0EtWjAtOV1bQS1aMC05XFwtXSpcXC4pK1tBLVpdezIsfSQvaTtcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtejAtOS1dKyg/OlxcLlthLXowLTlcXC1dKykqJC9pO1xuLy8gZnJvbSBodHRwczovL3RoZWtldmluc2NvdHQuY29tL2Vtb2ppcy1pbi1qYXZhc2NyaXB0LyN3cml0aW5nLWEtcmVndWxhci1leHByZXNzaW9uXG5jb25zdCBfZW1vamlSZWdleCA9IGBeKFxcXFxwe0V4dGVuZGVkX1BpY3RvZ3JhcGhpY318XFxcXHB7RW1vamlfQ29tcG9uZW50fSkrJGA7XG5sZXQgZW1vamlSZWdleDtcbi8vIGZhc3Rlciwgc2ltcGxlciwgc2FmZXJcbmNvbnN0IGlwdjRSZWdleCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pJC87XG5jb25zdCBpcHY0Q2lkclJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC8oM1swLTJdfFsxMl0/WzAtOV0pJC87XG4vLyBjb25zdCBpcHY2UmVnZXggPVxuLy8gL14oKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpJC87XG5jb25zdCBpcHY2UmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSkkLztcbmNvbnN0IGlwdjZDaWRyUmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSlcXC8oMTJbMC04XXwxWzAxXVswLTldfFsxLTldP1swLTldKSQvO1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzg2MDM5Mi9kZXRlcm1pbmUtaWYtc3RyaW5nLWlzLWluLWJhc2U2NC11c2luZy1qYXZhc2NyaXB0XG5jb25zdCBiYXNlNjRSZWdleCA9IC9eKFswLTlhLXpBLVorL117NH0pKigoWzAtOWEtekEtWisvXXsyfT09KXwoWzAtOWEtekEtWisvXXszfT0pKT8kLztcbi8vIGh0dHBzOi8vYmFzZTY0Lmd1cnUvc3RhbmRhcmRzL2Jhc2U2NHVybFxuY29uc3QgYmFzZTY0dXJsUmVnZXggPSAvXihbMC05YS16QS1aLV9dezR9KSooKFswLTlhLXpBLVotX117Mn0oPT0pPyl8KFswLTlhLXpBLVotX117M30oPSk/KSk/JC87XG4vLyBzaW1wbGVcbi8vIGNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGBcXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfWA7XG4vLyBubyBsZWFwIHllYXIgdmFsaWRhdGlvblxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LSgoMFsxMzU3OF18MTB8MTIpLTMxfCgwWzEzLTldfDFbMC0yXSktMzB8KDBbMS05XXwxWzAtMl0pLSgwWzEtOV18MVxcXFxkfDJcXFxcZCkpYDtcbi8vIHdpdGggbGVhcCB5ZWFyIHZhbGlkYXRpb25cbmNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGAoKFxcXFxkXFxcXGRbMjQ2OF1bMDQ4XXxcXFxcZFxcXFxkWzEzNTc5XVsyNl18XFxcXGRcXFxcZDBbNDhdfFswMjQ2OF1bMDQ4XTAwfFsxMzU3OV1bMjZdMDApLTAyLTI5fFxcXFxkezR9LSgoMFsxMzU3OF18MVswMl0pLSgwWzEtOV18WzEyXVxcXFxkfDNbMDFdKXwoMFs0NjldfDExKS0oMFsxLTldfFsxMl1cXFxcZHwzMCl8KDAyKS0oMFsxLTldfDFcXFxcZHwyWzAtOF0pKSlgO1xuY29uc3QgZGF0ZVJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7ZGF0ZVJlZ2V4U291cmNlfSRgKTtcbmZ1bmN0aW9uIHRpbWVSZWdleFNvdXJjZShhcmdzKSB7XG4gICAgbGV0IHNlY29uZHNSZWdleFNvdXJjZSA9IGBbMC01XVxcXFxkYDtcbiAgICBpZiAoYXJncy5wcmVjaXNpb24pIHtcbiAgICAgICAgc2Vjb25kc1JlZ2V4U291cmNlID0gYCR7c2Vjb25kc1JlZ2V4U291cmNlfVxcXFwuXFxcXGR7JHthcmdzLnByZWNpc2lvbn19YDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5wcmVjaXNpb24gPT0gbnVsbCkge1xuICAgICAgICBzZWNvbmRzUmVnZXhTb3VyY2UgPSBgJHtzZWNvbmRzUmVnZXhTb3VyY2V9KFxcXFwuXFxcXGQrKT9gO1xuICAgIH1cbiAgICBjb25zdCBzZWNvbmRzUXVhbnRpZmllciA9IGFyZ3MucHJlY2lzaW9uID8gXCIrXCIgOiBcIj9cIjsgLy8gcmVxdWlyZSBzZWNvbmRzIGlmIHByZWNpc2lvbiBpcyBub256ZXJvXG4gICAgcmV0dXJuIGAoWzAxXVxcXFxkfDJbMC0zXSk6WzAtNV1cXFxcZCg6JHtzZWNvbmRzUmVnZXhTb3VyY2V9KSR7c2Vjb25kc1F1YW50aWZpZXJ9YDtcbn1cbmZ1bmN0aW9uIHRpbWVSZWdleChhcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3RpbWVSZWdleFNvdXJjZShhcmdzKX0kYCk7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmV4cG9ydCBmdW5jdGlvbiBkYXRldGltZVJlZ2V4KGFyZ3MpIHtcbiAgICBsZXQgcmVnZXggPSBgJHtkYXRlUmVnZXhTb3VyY2V9VCR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfWA7XG4gICAgY29uc3Qgb3B0cyA9IFtdO1xuICAgIG9wdHMucHVzaChhcmdzLmxvY2FsID8gYFo/YCA6IGBaYCk7XG4gICAgaWYgKGFyZ3Mub2Zmc2V0KVxuICAgICAgICBvcHRzLnB1c2goYChbKy1dXFxcXGR7Mn06P1xcXFxkezJ9KWApO1xuICAgIHJlZ2V4ID0gYCR7cmVnZXh9KCR7b3B0cy5qb2luKFwifFwiKX0pYDtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApO1xufVxuZnVuY3Rpb24gaXNWYWxpZElQKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY2XCIgfHwgIXZlcnNpb24pICYmIGlwdjZSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNWYWxpZEpXVChqd3QsIGFsZykge1xuICAgIGlmICghand0UmVnZXgudGVzdChqd3QpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW2hlYWRlcl0gPSBqd3Quc3BsaXQoXCIuXCIpO1xuICAgICAgICBpZiAoIWhlYWRlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gQ29udmVydCBiYXNlNjR1cmwgdG8gYmFzZTY0XG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IGhlYWRlclxuICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgXCIrXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIilcbiAgICAgICAgICAgIC5wYWRFbmQoaGVhZGVyLmxlbmd0aCArICgoNCAtIChoZWFkZXIubGVuZ3RoICUgNCkpICUgNCksIFwiPVwiKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IEpTT04ucGFyc2UoYXRvYihiYXNlNjQpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWNvZGVkICE9PSBcIm9iamVjdFwiIHx8IGRlY29kZWQgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChcInR5cFwiIGluIGRlY29kZWQgJiYgZGVjb2RlZD8udHlwICE9PSBcIkpXVFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIWRlY29kZWQuYWxnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYWxnICYmIGRlY29kZWQuYWxnICE9PSBhbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1ZhbGlkQ2lkcihpcCwgdmVyc2lvbikge1xuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NFwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY0Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NkNpZHJSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGNsYXNzIFpvZFN0cmluZyBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IFN0cmluZyhpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmxlbmd0aCA+IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBpbnB1dC5kYXRhLmxlbmd0aCA+IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gaW5wdXQuZGF0YS5sZW5ndGggPCBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnIHx8IHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1haWxcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVtb2ppXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZW1vamlSZWdleCA9IG5ldyBSZWdFeHAoX2Vtb2ppUmVnZXgsIFwidVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlbW9qaVJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbW9qaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXVpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInV1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm5hbm9pZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuYW5vaWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwibmFub2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY3VpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY3VpZDJcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZDJSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY3VpZDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVsaWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdWxpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1bGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1cmxcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBVUkwoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBjaGVjay5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXN1bHQgPSBjaGVjay5yZWdleC50ZXN0KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICghdGVzdFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0cmltXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImluY2x1ZGVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuaW5jbHVkZXMoY2hlY2sudmFsdWUsIGNoZWNrLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGluY2x1ZGVzOiBjaGVjay52YWx1ZSwgcG9zaXRpb246IGNoZWNrLnBvc2l0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0b0xvd2VyQ2FzZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidG9VcHBlckNhc2VcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInN0YXJ0c1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5zdGFydHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IHN0YXJ0c1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbmRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmVuZHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGVuZHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZXRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImRhdGVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZVJlZ2V4O1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkdXJhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkdXJhdGlvblJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkdXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiaXBcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZElQKGlucHV0LmRhdGEsIGNoZWNrLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImp3dFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkSldUKGlucHV0LmRhdGEsIGNoZWNrLmFsZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJqd3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImNpZHJcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZENpZHIoaW5wdXQuZGF0YSwgY2hlY2sudmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjaWRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJiYXNlNjRcIikge1xuICAgICAgICAgICAgICAgIGlmICghYmFzZTY0UmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImJhc2U2NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NHVybFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJiYXNlNjR1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX3JlZ2V4KHJlZ2V4LCB2YWxpZGF0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZmluZW1lbnQoKGRhdGEpID0+IHJlZ2V4LnRlc3QoZGF0YSksIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24sXG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1haWwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtYWlsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1cmxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBlbW9qaShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZW1vamlcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1dWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1dWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgbmFub2lkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJuYW5vaWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjdWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZDIobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWQyXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdWxpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidWxpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGJhc2U2NChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiYmFzZTY0XCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgYmFzZTY0dXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gYmFzZTY0dXJsIGVuY29kaW5nIGlzIGEgbW9kaWZpY2F0aW9uIG9mIGJhc2U2NCB0aGF0IGNhbiBzYWZlbHkgYmUgdXNlZCBpbiBVUkxzIGFuZCBmaWxlbmFtZXNcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiYmFzZTY0dXJsXCIsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBqd3Qob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImp3dFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGlwKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJpcFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGNpZHIob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImNpZHJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBkYXRldGltZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgICAgICBraW5kOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIG9mZnNldDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9jYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2Ygb3B0aW9ucz8ucHJlY2lzaW9uID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnM/LnByZWNpc2lvbixcbiAgICAgICAgICAgIG9mZnNldDogb3B0aW9ucz8ub2Zmc2V0ID8/IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWw6IG9wdGlvbnM/LmxvY2FsID8/IGZhbHNlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGF0ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZGF0ZVwiLCBtZXNzYWdlIH0pO1xuICAgIH1cbiAgICB0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwidGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwidGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2Ygb3B0aW9ucz8ucHJlY2lzaW9uID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnM/LnByZWNpc2lvbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zPy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGR1cmF0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkdXJhdGlvblwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHJlZ2V4KHJlZ2V4LCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbmNsdWRlcyh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbmNsdWRlc1wiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgcG9zaXRpb246IG9wdGlvbnM/LnBvc2l0aW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJzdGFydHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbmRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJlbmRzV2l0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5MZW5ndGgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heExlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibGVuZ3RoXCIsXG4gICAgICAgICAgICB2YWx1ZTogbGVuLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXF1aXZhbGVudCB0byBgLm1pbigxKWBcbiAgICAgKi9cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkpO1xuICAgIH1cbiAgICB0cmltKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidHJpbVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9Mb3dlckNhc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0b0xvd2VyQ2FzZVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9VcHBlckNhc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0b1VwcGVyQ2FzZVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZXRpbWUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZXRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0RhdGUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ0aW1lXCIpO1xuICAgIH1cbiAgICBnZXQgaXNEdXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkdXJhdGlvblwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1haWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1haWxcIik7XG4gICAgfVxuICAgIGdldCBpc1VSTCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1cmxcIik7XG4gICAgfVxuICAgIGdldCBpc0Vtb2ppKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImVtb2ppXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVVUlEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInV1aWRcIik7XG4gICAgfVxuICAgIGdldCBpc05BTk9JRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJuYW5vaWRcIik7XG4gICAgfVxuICAgIGdldCBpc0NVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRDIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZDJcIik7XG4gICAgfVxuICAgIGdldCBpc1VMSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidWxpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzSVAoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaXBcIik7XG4gICAgfVxuICAgIGdldCBpc0NJRFIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY2lkclwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQmFzZTY0KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImJhc2U2NFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQmFzZTY0dXJsKCkge1xuICAgICAgICAvLyBiYXNlNjR1cmwgZW5jb2RpbmcgaXMgYSBtb2RpZmljYXRpb24gb2YgYmFzZTY0IHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGluIFVSTHMgYW5kIGZpbGVuYW1lc1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImJhc2U2NHVybFwiKTtcbiAgICB9XG4gICAgZ2V0IG1pbkxlbmd0aCgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4TGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxufVxuWm9kU3RyaW5nLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3RyaW5nLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlID8/IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2NjQ4NC93aHktZG9lcy1tb2R1bHVzLW9wZXJhdG9yLXJldHVybi1mcmFjdGlvbmFsLW51bWJlci1pbi1qYXZhc2NyaXB0LzMxNzExMDM0IzMxNzExMDM0XG5mdW5jdGlvbiBmbG9hdFNhZmVSZW1haW5kZXIodmFsLCBzdGVwKSB7XG4gICAgY29uc3QgdmFsRGVjQ291bnQgPSAodmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBzdGVwRGVjQ291bnQgPSAoc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3QgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICAgIGNvbnN0IHZhbEludCA9IE51bWJlci5wYXJzZUludCh2YWwudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIGNvbnN0IHN0ZXBJbnQgPSBOdW1iZXIucGFyc2VJbnQoc3RlcC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgcmV0dXJuICh2YWxJbnQgJSBzdGVwSW50KSAvIDEwICoqIGRlY0NvdW50O1xufVxuZXhwb3J0IGNsYXNzIFpvZE51bWJlciBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1pbiA9IHRoaXMuZ3RlO1xuICAgICAgICB0aGlzLm1heCA9IHRoaXMubHRlO1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLm11bHRpcGxlT2Y7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IE51bWJlcihpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udW1iZXIsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJpbnRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdXRpbC5pc0ludGVnZXIoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBcImludGVnZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA8IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA8PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhID4gY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhID49IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIGlmIChmbG9hdFNhZmVSZW1haW5kZXIoaW5wdXQuZGF0YSwgY2hlY2sudmFsdWUpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImZpbml0ZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9maW5pdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGd0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZ3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2V0TGltaXQoa2luZCwgdmFsdWUsIGluY2x1c2l2ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuY2hlY2tzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImludFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25uZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtdWx0aXBsZU9mKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbml0ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImZpbml0ZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2FmZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KS5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgZ2V0IGlzSW50KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImludFwiIHx8IChjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIiAmJiB1dGlsLmlzSW50ZWdlcihjaC52YWx1ZSkpKTtcbiAgICB9XG4gICAgZ2V0IGlzRmluaXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwiZmluaXRlXCIgfHwgY2gua2luZCA9PT0gXCJpbnRcIiB8fCBjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobWluKSAmJiBOdW1iZXIuaXNGaW5pdGUobWF4KTtcbiAgICB9XG59XG5ab2ROdW1iZXIuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdW1iZXIsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQmlnSW50IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gQmlnSW50KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYmlnaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW52YWxpZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA8IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA8PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhID4gY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhID49IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJpZ2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhICUgY2hlY2sudmFsdWUgIT09IEJpZ0ludCgwKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVPZjogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIF9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5iaWdpbnQsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ucG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25uZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxufVxuWm9kQmlnSW50LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQmlnSW50LFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlID8/IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEJvb2xlYW4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCb29sZWFuKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYm9vbGVhbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5ib29sZWFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEJvb2xlYW4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQm9vbGVhbih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQm9vbGVhbixcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2REYXRlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gbmV3IERhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5kYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmRhdGUsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGlucHV0LmRhdGEuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPCBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEuZ2V0VGltZSgpID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShpbnB1dC5kYXRhLmdldFRpbWUoKSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZERhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkRhdGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogbWluRGF0ZS5nZXRUaW1lKCksXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4RGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBtYXhEYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5EYXRlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW4gIT0gbnVsbCA/IG5ldyBEYXRlKG1pbikgOiBudWxsO1xuICAgIH1cbiAgICBnZXQgbWF4RGF0ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4ICE9IG51bGwgPyBuZXcgRGF0ZShtYXgpIDogbnVsbDtcbiAgICB9XG59XG5ab2REYXRlLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERhdGUoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlIHx8IGZhbHNlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERhdGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kU3ltYm9sIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3ltYm9sKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RTeW1ib2wuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU3ltYm9sKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTeW1ib2wsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5kZWZpbmVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmRlZmluZWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5kZWZpbmVkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmRlZmluZWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTnVsbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVsbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2ROdWxsLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGwoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQW55IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHRvIHByZXZlbnQgaW5zdGFuY2VzIG9mIG90aGVyIGNsYXNzZXMgZnJvbSBleHRlbmRpbmcgWm9kQW55LiB0aGlzIGNhdXNlcyBpc3N1ZXMgd2l0aCBjYXRjaGFsbCBpbiBab2RPYmplY3QuXG4gICAgICAgIHRoaXMuX2FueSA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQW55LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEFueSh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQW55LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFVua25vd24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gcmVxdWlyZWRcbiAgICAgICAgdGhpcy5fdW5rbm93biA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5rbm93bi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmtub3duKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmtub3duLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE5ldmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmV2ZXIsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG59XG5ab2ROZXZlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROZXZlcih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmV2ZXIsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVm9pZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS52b2lkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFZvaWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVm9pZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVm9pZCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RBcnJheSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCwgc3RhdHVzIH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYuZXhhY3RMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY3R4LmRhdGEubGVuZ3RoIDwgZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRvb0JpZyB8fCB0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiB0b29CaWcgPyBab2RJc3N1ZUNvZGUudG9vX2JpZyA6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06ICh0b29TbWFsbCA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06ICh0b29CaWcgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5leGFjdExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWluTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgZGVmLm1pbkxlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluTGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluTGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPiBkZWYubWF4TGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4TGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VBc3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgICAgIH0pKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZVN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IG1pbkxlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiBtYXhMZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGV4YWN0TGVuZ3RoOiB7IHZhbHVlOiBsZW4sIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kQXJyYXkuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgbWluTGVuZ3RoOiBudWxsLFxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgICAgIGV4YWN0TGVuZ3RoOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFycmF5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnNjaGVtYS5fZGVmLFxuICAgICAgICAgICAgdHlwZTogZGVlcFBhcnRpYWxpZnkoc2NoZW1hLmVsZW1lbnQpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kVHVwbGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZFR1cGxlLmNyZWF0ZShzY2hlbWEuaXRlbXMubWFwKChpdGVtKSA9PiBkZWVwUGFydGlhbGlmeShpdGVtKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kT2JqZWN0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBJbiBtb3N0IGNhc2VzLCB0aGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgLSB1bmtub3duIHByb3BlcnRpZXMgYXJlIG5vdyBzaWxlbnRseSBzdHJpcHBlZC5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gcGFzcyB0aHJvdWdoIHVua25vd24gcHJvcGVydGllcywgdXNlIGAucGFzc3Rocm91Z2goKWAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uc3RyaWN0ID0gdGhpcy5wYXNzdGhyb3VnaDtcbiAgICAgICAgLy8gZXh0ZW5kPFxuICAgICAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlLFxuICAgICAgICAvLyAgIE5ld091dHB1dCBleHRlbmRzIHV0aWwuZmxhdHRlbjx7XG4gICAgICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBPdXRwdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX291dHB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAgICAgLy8gICAgICAgPyBPdXRwdXRba11cbiAgICAgICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAgICAgLy8gICB9PixcbiAgICAgICAgLy8gICBOZXdJbnB1dCBleHRlbmRzIHV0aWwuZmxhdHRlbjx7XG4gICAgICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBJbnB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfaW5wdXRcIl1cbiAgICAgICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAgICAgLy8gICAgICAgPyBJbnB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+XG4gICAgICAgIC8vID4oXG4gICAgICAgIC8vICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gKTogWm9kT2JqZWN0PFxuICAgICAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIEF1Z21lbnRhdGlvbj4sXG4gICAgICAgIC8vICAgVW5rbm93bktleXMsXG4gICAgICAgIC8vICAgQ2F0Y2hhbGwsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0LFxuICAgICAgICAvLyAgIE5ld0lucHV0XG4gICAgICAgIC8vID4ge1xuICAgICAgICAvLyAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgLy8gICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgLy8gICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAvLyAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgLy8gICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgfSkgYXMgYW55O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYC5leHRlbmRgIGluc3RlYWRcbiAgICAgICAgICogICovXG4gICAgICAgIHRoaXMuYXVnbWVudCA9IHRoaXMuZXh0ZW5kO1xuICAgIH1cbiAgICBfZ2V0Q2FjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVkICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IHV0aWwub2JqZWN0S2V5cyhzaGFwZSk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IHsgc2hhcGUsIGtleXMgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGtleXM6IHNoYXBlS2V5cyB9ID0gdGhpcy5fZ2V0Q2FjaGVkKCk7XG4gICAgICAgIGNvbnN0IGV4dHJhS2V5cyA9IFtdO1xuICAgICAgICBpZiAoISh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlciAmJiB0aGlzLl9kZWYudW5rbm93bktleXMgPT09IFwic3RyaXBcIikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGFwZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFwZUtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbGlkYXRvciA9IHNoYXBlW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICB2YWx1ZToga2V5VmFsaWRhdG9yLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlcikge1xuICAgICAgICAgICAgY29uc3QgdW5rbm93bktleXMgPSB0aGlzLl9kZWYudW5rbm93bktleXM7XG4gICAgICAgICAgICBpZiAodW5rbm93bktleXMgPT09IFwicGFzc3Rocm91Z2hcIikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBjdHguZGF0YVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmljdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogZXh0cmFLZXlzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaXBcIikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBab2RPYmplY3QgZXJyb3I6IGludmFsaWQgdW5rbm93bktleXMgdmFsdWUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBydW4gY2F0Y2hhbGwgdmFsaWRhdGlvblxuICAgICAgICAgICAgY29uc3QgY2F0Y2hhbGwgPSB0aGlzLl9kZWYuY2F0Y2hhbGw7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0Y2hhbGwuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkgLy8sIGN0eC5jaGlsZChrZXkpLCB2YWx1ZSwgZ2V0UGFyc2VkVHlwZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IHBhaXIuYWx3YXlzU2V0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bmNQYWlycztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHN5bmNQYWlycykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzaGFwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgIH1cbiAgICBzdHJpY3QobWVzc2FnZSkge1xuICAgICAgICBlcnJvclV0aWwuZXJyVG9PYmo7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICAgICAgLi4uKG1lc3NhZ2UgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcDogKGlzc3VlLCBjdHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRFcnJvciA9IHRoaXMuX2RlZi5lcnJvck1hcD8uKGlzc3VlLCBjdHgpLm1lc3NhZ2UgPz8gY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcInVucmVjb2duaXplZF9rZXlzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLm1lc3NhZ2UgPz8gZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge30pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RyaXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwYXNzdGhyb3VnaCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwicGFzc3Rocm91Z2hcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNvbnN0IEF1Z21lbnRGYWN0b3J5ID1cbiAgICAvLyAgIDxEZWYgZXh0ZW5kcyBab2RPYmplY3REZWY+KGRlZjogRGVmKSA9PlxuICAgIC8vICAgPEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlPihcbiAgICAvLyAgICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAvLyAgICk6IFpvZE9iamVjdDxcbiAgICAvLyAgICAgZXh0ZW5kU2hhcGU8UmV0dXJuVHlwZTxEZWZbXCJzaGFwZVwiXT4sIEF1Z21lbnRhdGlvbj4sXG4gICAgLy8gICAgIERlZltcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgICBEZWZbXCJjYXRjaGFsbFwiXVxuICAgIC8vICAgPiA9PiB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgICAuLi5kZWYsXG4gICAgLy8gICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgLy8gICAgICAgICAuLi5kZWYuc2hhcGUoKSxcbiAgICAvLyAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAvLyAgICAgICB9KSxcbiAgICAvLyAgICAgfSkgYXMgYW55O1xuICAgIC8vICAgfTtcbiAgICBleHRlbmQoYXVnbWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJpb3IgdG8gem9kQDEuMC4xMiB0aGVyZSB3YXMgYSBidWcgaW4gdGhlXG4gICAgICogaW5mZXJyZWQgdHlwZSBvZiBtZXJnZWQgb2JqZWN0cy4gUGxlYXNlXG4gICAgICogdXBncmFkZSBpZiB5b3UgYXJlIGV4cGVyaWVuY2luZyBpc3N1ZXMuXG4gICAgICovXG4gICAgbWVyZ2UobWVyZ2luZykge1xuICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgICAgICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4ubWVyZ2luZy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9XG4gICAgLy8gbWVyZ2U8XG4gICAgLy8gICBJbmNvbWluZyBleHRlbmRzIEFueVpvZE9iamVjdCxcbiAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIEluY29taW5nW1wic2hhcGVcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9vdXRwdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgLy8gICB9LFxuICAgIC8vICAgTmV3SW5wdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX2lucHV0XCJdXG4gICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH1cbiAgICAvLyA+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdLFxuICAgIC8vICAgTmV3T3V0cHV0LFxuICAgIC8vICAgTmV3SW5wdXRcbiAgICAvLyA+IHtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBzZXRLZXkoa2V5LCBzY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVnbWVudCh7IFtrZXldOiBzY2hlbWEgfSk7XG4gICAgfVxuICAgIC8vIG1lcmdlPEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0PihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogLy9ab2RPYmplY3Q8VCAmIEluY29taW5nW1wiX3NoYXBlXCJdLCBVbmtub3duS2V5cywgQ2F0Y2hhbGw+ID0gKG1lcmdpbmcpID0+IHtcbiAgICAvLyBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdXG4gICAgLy8gPiB7XG4gICAgLy8gICAvLyBjb25zdCBtZXJnZWRTaGFwZSA9IG9iamVjdFV0aWwubWVyZ2VTaGFwZXMoXG4gICAgLy8gICAvLyAgIHRoaXMuX2RlZi5zaGFwZSgpLFxuICAgIC8vICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgIC8vICAgLy8gKTtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBjYXRjaGFsbChpbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjYXRjaGFsbDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaWNrKG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKG1hc2spKSB7XG4gICAgICAgICAgICBpZiAobWFza1trZXldICYmIHRoaXMuc2hhcGVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb21pdChtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgaWYgKCFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZGVlcFBhcnRpYWwoKSB7XG4gICAgICAgIHJldHVybiBkZWVwUGFydGlhbGlmeSh0aGlzKTtcbiAgICB9XG4gICAgcGFydGlhbChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICBpZiAobWFzayAmJiAhbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IGZpZWxkU2NoZW1hLm9wdGlvbmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWlyZWQobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpIHtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld0ZpZWxkID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld0ZpZWxkIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGQgPSBuZXdGaWVsZC5fZGVmLmlubmVyVHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IG5ld0ZpZWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGtleW9mKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlWm9kRW51bSh1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpO1xuICAgIH1cbn1cblpvZE9iamVjdC5jcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LnN0cmljdENyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LmxhenljcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9kZWYub3B0aW9ucztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgaXNzdWUtZnJlZSB2YWxpZGF0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXNzdWVzIGZyb20gZGlydHkgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4ucmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIGludmFsaWRcbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gbmV3IFpvZEVycm9yKHJlc3VsdC5jdHguY29tbW9uLmlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy5tYXAoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpLnRoZW4oaGFuZGxlUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGlydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIiAmJiAhZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB7IHJlc3VsdCwgY3R4OiBjaGlsZEN0eCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzLnB1c2goY2hpbGRDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5kaXJ0eS5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5LnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gaXNzdWVzLm1hcCgoaXNzdWVzKSA9PiBuZXcgWm9kRXJyb3IoaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG59XG5ab2RVbmlvbi5jcmVhdGUgPSAodHlwZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5pb24oe1xuICAgICAgICBvcHRpb25zOiB0eXBlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2REaXNjcmltaW5hdGVkVW5pb24gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBnZXREaXNjcmltaW5hdG9yID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExhenkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5zY2hlbWEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRWZmZWN0cykge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLmlubmVyVHlwZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIFt0eXBlLnZhbHVlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGUub3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE5hdGl2ZUVudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0VmFsdWVzKHR5cGUuZW51bSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2REZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kVW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBbbnVsbCwgLi4uZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RCcmFuZGVkKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kUmVhZG9ubHkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RDYXRjaCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLl9kZWYuaW5uZXJUeXBlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59O1xuZXhwb3J0IGNsYXNzIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yID0gdGhpcy5kaXNjcmltaW5hdG9yO1xuICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yVmFsdWUgPSBjdHguZGF0YVtkaXNjcmltaW5hdG9yXTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5vcHRpb25zTWFwLmdldChkaXNjcmltaW5hdG9yVmFsdWUpO1xuICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBBcnJheS5mcm9tKHRoaXMub3B0aW9uc01hcC5rZXlzKCkpLFxuICAgICAgICAgICAgICAgIHBhdGg6IFtkaXNjcmltaW5hdG9yXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGRpc2NyaW1pbmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGlzY3JpbWluYXRvcjtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnNNYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9uc01hcDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBkaXNjcmltaW5hdGVkIHVuaW9uIHNjaGVtYS4gSXRzIGJlaGF2aW91ciBpcyB2ZXJ5IHNpbWlsYXIgdG8gdGhhdCBvZiB0aGUgbm9ybWFsIHoudW5pb24oKSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBIb3dldmVyLCBpdCBvbmx5IGFsbG93cyBhIHVuaW9uIG9mIG9iamVjdHMsIGFsbCBvZiB3aGljaCBuZWVkIHRvIHNoYXJlIGEgZGlzY3JpbWluYXRvciBwcm9wZXJ0eS4gVGhpcyBwcm9wZXJ0eSBtdXN0XG4gICAgICogaGF2ZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgZWFjaCBvYmplY3QgaW4gdGhlIHVuaW9uLlxuICAgICAqIEBwYXJhbSBkaXNjcmltaW5hdG9yIHRoZSBuYW1lIG9mIHRoZSBkaXNjcmltaW5hdG9yIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHR5cGVzIGFuIGFycmF5IG9mIG9iamVjdCBzY2hlbWFzXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUoZGlzY3JpbWluYXRvciwgb3B0aW9ucywgcGFyYW1zKSB7XG4gICAgICAgIC8vIEdldCBhbGwgdGhlIHZhbGlkIGRpc2NyaW1pbmF0b3IgdmFsdWVzXG4gICAgICAgIGNvbnN0IG9wdGlvbnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yVmFsdWVzID0gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNoYXBlW2Rpc2NyaW1pbmF0b3JdKTtcbiAgICAgICAgICAgIGlmICghZGlzY3JpbWluYXRvclZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZGlzY3JpbWluYXRvciB2YWx1ZSBmb3Iga2V5IFxcYCR7ZGlzY3JpbWluYXRvcn1cXGAgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIGFsbCBzY2hlbWEgb3B0aW9uc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkaXNjcmltaW5hdG9yVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpc2NyaW1pbmF0b3IgcHJvcGVydHkgJHtTdHJpbmcoZGlzY3JpbWluYXRvcil9IGhhcyBkdXBsaWNhdGUgdmFsdWUgJHtTdHJpbmcodmFsdWUpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zTWFwLnNldCh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2REaXNjcmltaW5hdGVkVW5pb24oe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnNNYXAsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1lcmdlVmFsdWVzKGEsIGIpIHtcbiAgICBjb25zdCBhVHlwZSA9IGdldFBhcnNlZFR5cGUoYSk7XG4gICAgY29uc3QgYlR5cGUgPSBnZXRQYXJzZWRUeXBlKGIpO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgY29uc3QgYktleXMgPSB1dGlsLm9iamVjdEtleXMoYik7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSB1dGlsLm9iamVjdEtleXMoYSkuZmlsdGVyKChrZXkpID0+IGJLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEpO1xuICAgICAgICBjb25zdCBuZXdPYmogPSB7IC4uLmEsIC4uLmIgfTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcmVkS2V5cykge1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFsdWUgPSBtZXJnZVZhbHVlcyhhW2tleV0sIGJba2V5XSk7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IHNoYXJlZFZhbHVlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld09iaiB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5hcnJheSAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BID0gYVtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBpdGVtQiA9IGJbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFsdWUgPSBtZXJnZVZhbHVlcyhpdGVtQSwgaXRlbUIpO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzaGFyZWRWYWx1ZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3QXJyYXkgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmICthID09PSArYikge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogYSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZEludGVyc2VjdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBoYW5kbGVQYXJzZWQgPSAocGFyc2VkTGVmdCwgcGFyc2VkUmlnaHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fib3J0ZWQocGFyc2VkTGVmdCkgfHwgaXNBYm9ydGVkKHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VWYWx1ZXMocGFyc2VkTGVmdC52YWx1ZSwgcGFyc2VkUmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFtZXJnZWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlydHkocGFyc2VkTGVmdCkgfHwgaXNEaXJ0eShwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogbWVyZ2VkLmRhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLmxlZnQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKS50aGVuKChbbGVmdCwgcmlnaHRdKSA9PiBoYW5kbGVQYXJzZWQobGVmdCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQYXJzZWQodGhpcy5fZGVmLmxlZnQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSwgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSA9IChsZWZ0LCByaWdodCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RJbnRlcnNlY3Rpb24oe1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kSW50ZXJzZWN0aW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gdHlwZSBab2RUdXBsZUl0ZW1zID0gW1pvZFR5cGVBbnksIC4uLlpvZFR5cGVBbnlbXV07XG5leHBvcnQgY2xhc3MgWm9kVHVwbGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgbWluaW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdCA9IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICBpZiAoIXJlc3QgJiYgY3R4LmRhdGEubGVuZ3RoID4gdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbLi4uY3R4LmRhdGFdXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuX2RlZi5pdGVtc1tpdGVtSW5kZXhdIHx8IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gc2NoZW1hLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGl0ZW1JbmRleCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4gISF4KTsgLy8gZmlsdGVyIG51bGxzXG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoaXRlbXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIGl0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaXRlbXM7XG4gICAgfVxuICAgIHJlc3QocmVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJlc3QsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblpvZFR1cGxlLmNyZWF0ZSA9IChzY2hlbWFzLCBwYXJhbXMpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NoZW1hcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSBvZiBzY2hlbWFzIHRvIHoudHVwbGUoWyAuLi4gXSlcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICBpdGVtczogc2NoZW1hcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RUdXBsZSxcbiAgICAgICAgcmVzdDogbnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RSZWNvcmQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBjdHguZGF0YVtrZXldLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuICAgICAgICBpZiAoc2Vjb25kIGluc3RhbmNlb2YgWm9kVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAgICAgIGtleVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogc2Vjb25kLFxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcmQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAga2V5VHlwZTogWm9kU3RyaW5nLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhzZWNvbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kTWFwIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IGtleVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgIH1cbiAgICBnZXQgdmFsdWVTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm1hcCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5tYXAsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGNvbnN0IHBhaXJzID0gWy4uLmN0eC5kYXRhLmVudHJpZXMoKV0ubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIFtpbmRleCwgXCJrZXlcIl0pKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBbaW5kZXgsIFwidmFsdWVcIl0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZE1hcC5jcmVhdGUgPSAoa2V5VHlwZSwgdmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE1hcCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAga2V5VHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RNYXAsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kU2V0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zZXQpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc2V0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoZGVmLm1pblNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplIDwgZGVmLm1pblNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pblNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluU2l6ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4U2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPiBkZWYubWF4U2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heFNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4U2l6ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGZ1bmN0aW9uIGZpbmFsaXplU2V0KGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgcGFyc2VkU2V0LmFkZChlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcGFyc2VkU2V0IH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbLi4uY3R4LmRhdGEudmFsdWVzKCldLm1hcCgoaXRlbSwgaSkgPT4gdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZWxlbWVudHMpLnRoZW4oKGVsZW1lbnRzKSA9PiBmaW5hbGl6ZVNldChlbGVtZW50cykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsaXplU2V0KGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtaW4obWluU2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5TaXplOiB7IHZhbHVlOiBtaW5TaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhTaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1heFNpemU6IHsgdmFsdWU6IG1heFNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2l6ZShzaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbihzaXplLCBtZXNzYWdlKS5tYXgoc2l6ZSwgbWVzc2FnZSk7XG4gICAgfVxuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblpvZFNldC5jcmVhdGUgPSAodmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAgbWluU2l6ZTogbnVsbCxcbiAgICAgICAgbWF4U2l6ZTogbnVsbCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTZXQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRnVuY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRoaXMuaW1wbGVtZW50O1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5mdW5jdGlvbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBcmdzSXNzdWUoYXJncywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIGN0eC5zY2hlbWFFcnJvck1hcCwgZ2V0RXJyb3JNYXAoKSwgZGVmYXVsdEVycm9yTWFwXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlUmV0dXJuc0lzc3VlKHJldHVybnMsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXR1cm5zLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW2N0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCBjdHguc2NoZW1hRXJyb3JNYXAsIGdldEVycm9yTWFwKCksIGRlZmF1bHRFcnJvck1hcF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVHlwZUVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAgfTtcbiAgICAgICAgY29uc3QgZm4gPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5yZXR1cm5zIGluc3RhbmNlb2YgWm9kUHJvbWlzZSkge1xuICAgICAgICAgICAgLy8gV291bGQgbG92ZSBhIHdheSB0byBhdm9pZCBkaXNhYmxpbmcgdGhpcyBydWxlLCBidXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gYW4gYWxpYXMgKHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHdhcyB3aGF0IGNhdXNlZCAyNjUxKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9LKGFzeW5jIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBhd2FpdCBtZS5fZGVmLmFyZ3MucGFyc2VBc3luYyhhcmdzLCBwYXJhbXMpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VBcmdzSXNzdWUoYXJncywgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBwYXJzZWRBcmdzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gYXdhaXQgbWUuX2RlZi5yZXR1cm5zLl9kZWYudHlwZVxuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhyZXN1bHQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gbWUuX2RlZi5hcmdzLnNhZmVQYXJzZShhcmdzLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkQXJncy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBab2RFcnJvcihbbWFrZUFyZ3NJc3N1ZShhcmdzLCBwYXJzZWRBcmdzLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBwYXJzZWRBcmdzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJldHVybnMgPSBtZS5fZGVmLnJldHVybnMuc2FmZVBhcnNlKHJlc3VsdCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFJldHVybnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBwYXJzZWRSZXR1cm5zLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucy5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1ldGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5hcmdzO1xuICAgIH1cbiAgICByZXR1cm5UeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnJldHVybnM7XG4gICAgfVxuICAgIGFyZ3MoLi4uaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBhcmdzOiBab2RUdXBsZS5jcmVhdGUoaXRlbXMpLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm5zKHJldHVyblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5UeXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdHJpY3RJbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYXJncywgcmV0dXJucywgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgYXJnczogKGFyZ3MgPyBhcmdzIDogWm9kVHVwbGUuY3JlYXRlKFtdKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpKSxcbiAgICAgICAgICAgIHJldHVybnM6IHJldHVybnMgfHwgWm9kVW5rbm93bi5jcmVhdGUoKSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRnVuY3Rpb24sXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RMYXp5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBsYXp5U2NoZW1hID0gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgICAgICByZXR1cm4gbGF6eVNjaGVtYS5fcGFyc2UoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgIH1cbn1cblpvZExhenkuY3JlYXRlID0gKGdldHRlciwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMYXp5KHtcbiAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGF6eSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RMaXRlcmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5kYXRhICE9PSB0aGlzLl9kZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB0aGlzLl9kZWYudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWU7XG4gICAgfVxufVxuWm9kTGl0ZXJhbC5jcmVhdGUgPSAodmFsdWUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGl0ZXJhbCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMaXRlcmFsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gY3JlYXRlWm9kRW51bSh2YWx1ZXMsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kRW51bSh7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5leHBvcnQgY2xhc3MgWm9kRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LmRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZSA9IG5ldyBTZXQodGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgVmFsdWVzKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZ2V0IEVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBleHRyYWN0KHZhbHVlcywgbmV3RGVmID0gdGhpcy5fZGVmKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh2YWx1ZXMsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIC4uLm5ld0RlZixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGV4Y2x1ZGUodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdCkgPT4gIXZhbHVlcy5pbmNsdWRlcyhvcHQpKSwge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RFbnVtLmNyZWF0ZSA9IGNyZWF0ZVpvZEVudW07XG5leHBvcnQgY2xhc3MgWm9kTmF0aXZlRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbnVtVmFsdWVzID0gdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZyAmJiBjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBuZXcgU2V0KHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzKHRoaXMuX2RlZi52YWx1ZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlLmhhcyhpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBlbnVtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG59XG5ab2ROYXRpdmVFbnVtLmNyZWF0ZSA9ICh2YWx1ZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmF0aXZlRW51bSh7XG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hdGl2ZUVudW0sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kUHJvbWlzZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmIGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNpZmllZCA9IGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnByb21pc2UgPyBjdHguZGF0YSA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEVmZmVjdHMgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBpbm5lclR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hO1xuICAgIH1cbiAgICBzb3VyY2VUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYS5fZGVmLnR5cGVOYW1lID09PSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0c1xuICAgICAgICAgICAgPyB0aGlzLl9kZWYuc2NoZW1hLnNvdXJjZVR5cGUoKVxuICAgICAgICAgICAgOiB0aGlzLl9kZWYuc2NoZW1hO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gdGhpcy5fZGVmLmVmZmVjdCB8fCBudWxsO1xuICAgICAgICBjb25zdCBjaGVja0N0eCA9IHtcbiAgICAgICAgICAgIGFkZElzc3VlOiAoYXJnKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBhcmcpO1xuICAgICAgICAgICAgICAgIGlmIChhcmcuZmF0YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eC5wYXRoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tDdHguYWRkSXNzdWUgPSBjaGVja0N0eC5hZGRJc3N1ZS5iaW5kKGNoZWNrQ3R4KTtcbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInByZXByb2Nlc3NcIikge1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gZWZmZWN0LnRyYW5zZm9ybShjdHguZGF0YSwgY2hlY2tDdHgpO1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3NlZCkudGhlbihhc3luYyAocHJvY2Vzc2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJyZWZpbmVtZW50XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGVSZWZpbmVtZW50ID0gKGFjYykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVmZmVjdC5yZWZpbmVtZW50KGFjYywgY2hlY2tDdHgpO1xuICAgICAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXN5bmMgcmVmaW5lbWVudCBlbmNvdW50ZXJlZCBkdXJpbmcgc3luY2hyb25vdXMgcGFyc2Ugb3BlcmF0aW9uLiBVc2UgLnBhcnNlQXN5bmMgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB2YWx1ZSBpcyBpZ25vcmVkXG4gICAgICAgICAgICAgICAgZXhlY3V0ZVJlZmluZW1lbnQoaW5uZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXN5bmNocm9ub3VzIHRyYW5zZm9ybSBlbmNvdW50ZXJlZCBkdXJpbmcgc3luY2hyb25vdXMgcGFyc2Ugb3BlcmF0aW9uLiBVc2UgLnBhcnNlQXN5bmMgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiByZXN1bHQgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChiYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpKS50aGVuKChyZXN1bHQpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGVmZmVjdCk7XG4gICAgfVxufVxuWm9kRWZmZWN0cy5jcmVhdGUgPSAoc2NoZW1hLCBlZmZlY3QsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICBlZmZlY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzID0gKHByZXByb2Nlc3MsIHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJwcmVwcm9jZXNzXCIsIHRyYW5zZm9ybTogcHJlcHJvY2VzcyB9LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgeyBab2RFZmZlY3RzIGFzIFpvZFRyYW5zZm9ybWVyIH07XG5leHBvcnQgY2xhc3MgWm9kT3B0aW9uYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kT3B0aW9uYWwuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT3B0aW9uYWwoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT3B0aW9uYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTnVsbGFibGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5udWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gT0sobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2ROdWxsYWJsZS5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdWxsYWJsZSh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdWxsYWJsZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2REZWZhdWx0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBsZXQgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fZGVmLmRlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZURlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZERlZmF1bHQuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHR5cGVvZiBwYXJhbXMuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zLmRlZmF1bHQgOiAoKSA9PiBwYXJhbXMuZGVmYXVsdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RDYXRjaCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgLy8gbmV3Q3R4IGlzIHVzZWQgdG8gbm90IGNvbGxlY3QgaXNzdWVzIGZyb20gaW5uZXIgdHlwZXMgaW4gY3R4XG4gICAgICAgIGNvbnN0IG5ld0N0eCA9IHtcbiAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGE6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgcGF0aDogbmV3Q3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IHtcbiAgICAgICAgICAgICAgICAuLi5uZXdDdHgsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwidmFsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGVmLmNhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RFcnJvcihuZXdDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RFcnJvcihuZXdDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2F0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZENhdGNoLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZENhdGNoKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICBjYXRjaFZhbHVlOiB0eXBlb2YgcGFyYW1zLmNhdGNoID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMuY2F0Y2ggOiAoKSA9PiBwYXJhbXMuY2F0Y2gsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTmFOIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubmFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5hbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbn1cblpvZE5hTi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYU4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hTixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBCUkFORCA9IFN5bWJvbChcInpvZF9icmFuZFwiKTtcbmV4cG9ydCBjbGFzcyBab2RCcmFuZGVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kUGlwZWxpbmUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLmluLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkoaW5SZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IHRoaXMuX2RlZi5pbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZGlydHlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RQaXBlbGluZSh7XG4gICAgICAgICAgICBpbjogYSxcbiAgICAgICAgICAgIG91dDogYixcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUGlwZWxpbmUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RSZWFkb25seSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGNvbnN0IGZyZWV6ZSA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBPYmplY3QuZnJlZXplKGRhdGEudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBpc0FzeW5jKHJlc3VsdCkgPyByZXN1bHQudGhlbigoZGF0YSkgPT4gZnJlZXplKGRhdGEpKSA6IGZyZWV6ZShyZXN1bHQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZFJlYWRvbmx5LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFJlYWRvbmx5KHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlYWRvbmx5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIHouY3VzdG9tICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gY2xlYW5QYXJhbXMocGFyYW1zLCBkYXRhKSB7XG4gICAgY29uc3QgcCA9IHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcyhkYXRhKSA6IHR5cGVvZiBwYXJhbXMgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHBhcmFtcyB9IDogcGFyYW1zO1xuICAgIGNvbnN0IHAyID0gdHlwZW9mIHAgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHAgfSA6IHA7XG4gICAgcmV0dXJuIHAyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbShjaGVjaywgX3BhcmFtcyA9IHt9LCBcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqXG4gKiBQYXNzIGBmYXRhbGAgaW50byB0aGUgcGFyYW1zIG9iamVjdCBpbnN0ZWFkOlxuICpcbiAqIGBgYHRzXG4gKiB6LnN0cmluZygpLmN1c3RvbSgodmFsKSA9PiB2YWwubGVuZ3RoID4gNSwgeyBmYXRhbDogZmFsc2UgfSlcbiAqIGBgYFxuICpcbiAqL1xuZmF0YWwpIHtcbiAgICBpZiAoY2hlY2spXG4gICAgICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCkuc3VwZXJSZWZpbmUoKGRhdGEsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgciA9IGNoZWNrKGRhdGEpO1xuICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gcGFyYW1zLmZhdGFsID8/IGZhdGFsID8/IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wYXJhbXMsIGZhdGFsOiBfZmF0YWwgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IF9mYXRhbCA9IHBhcmFtcy5mYXRhbCA/PyBmYXRhbCA/PyB0cnVlO1xuICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKTtcbn1cbmV4cG9ydCB7IFpvZFR5cGUgYXMgU2NoZW1hLCBab2RUeXBlIGFzIFpvZFNjaGVtYSB9O1xuZXhwb3J0IGNvbnN0IGxhdGUgPSB7XG4gICAgb2JqZWN0OiBab2RPYmplY3QubGF6eWNyZWF0ZSxcbn07XG5leHBvcnQgdmFyIFpvZEZpcnN0UGFydHlUeXBlS2luZDtcbihmdW5jdGlvbiAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kKSB7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3RyaW5nXCJdID0gXCJab2RTdHJpbmdcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdW1iZXJcIl0gPSBcIlpvZE51bWJlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hTlwiXSA9IFwiWm9kTmFOXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQmlnSW50XCJdID0gXCJab2RCaWdJbnRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCb29sZWFuXCJdID0gXCJab2RCb29sZWFuXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGF0ZVwiXSA9IFwiWm9kRGF0ZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN5bWJvbFwiXSA9IFwiWm9kU3ltYm9sXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5kZWZpbmVkXCJdID0gXCJab2RVbmRlZmluZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsXCJdID0gXCJab2ROdWxsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQW55XCJdID0gXCJab2RBbnlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmtub3duXCJdID0gXCJab2RVbmtub3duXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmV2ZXJcIl0gPSBcIlpvZE5ldmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVm9pZFwiXSA9IFwiWm9kVm9pZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFycmF5XCJdID0gXCJab2RBcnJheVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9iamVjdFwiXSA9IFwiWm9kT2JqZWN0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5pb25cIl0gPSBcIlpvZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCJdID0gXCJab2REaXNjcmltaW5hdGVkVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RJbnRlcnNlY3Rpb25cIl0gPSBcIlpvZEludGVyc2VjdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFR1cGxlXCJdID0gXCJab2RUdXBsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFJlY29yZFwiXSA9IFwiWm9kUmVjb3JkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTWFwXCJdID0gXCJab2RNYXBcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTZXRcIl0gPSBcIlpvZFNldFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEZ1bmN0aW9uXCJdID0gXCJab2RGdW5jdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExhenlcIl0gPSBcIlpvZExhenlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMaXRlcmFsXCJdID0gXCJab2RMaXRlcmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRW51bVwiXSA9IFwiWm9kRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVmZmVjdHNcIl0gPSBcIlpvZEVmZmVjdHNcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYXRpdmVFbnVtXCJdID0gXCJab2ROYXRpdmVFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT3B0aW9uYWxcIl0gPSBcIlpvZE9wdGlvbmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbGFibGVcIl0gPSBcIlpvZE51bGxhYmxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGVmYXVsdFwiXSA9IFwiWm9kRGVmYXVsdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZENhdGNoXCJdID0gXCJab2RDYXRjaFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFByb21pc2VcIl0gPSBcIlpvZFByb21pc2VcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCcmFuZGVkXCJdID0gXCJab2RCcmFuZGVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUGlwZWxpbmVcIl0gPSBcIlpvZFBpcGVsaW5lXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVhZG9ubHlcIl0gPSBcIlpvZFJlYWRvbmx5XCI7XG59KShab2RGaXJzdFBhcnR5VHlwZUtpbmQgfHwgKFpvZEZpcnN0UGFydHlUeXBlS2luZCA9IHt9KSk7XG4vLyByZXF1aXJlcyBUUyA0LjQrXG5jbGFzcyBDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoLi4uXykgeyB9XG59XG5jb25zdCBpbnN0YW5jZU9mVHlwZSA9IChcbi8vIGNvbnN0IGluc3RhbmNlT2ZUeXBlID0gPFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuY2xzLCBwYXJhbXMgPSB7XG4gICAgbWVzc2FnZTogYElucHV0IG5vdCBpbnN0YW5jZSBvZiAke2Nscy5uYW1lfWAsXG59KSA9PiBjdXN0b20oKGRhdGEpID0+IGRhdGEgaW5zdGFuY2VvZiBjbHMsIHBhcmFtcyk7XG5jb25zdCBzdHJpbmdUeXBlID0gWm9kU3RyaW5nLmNyZWF0ZTtcbmNvbnN0IG51bWJlclR5cGUgPSBab2ROdW1iZXIuY3JlYXRlO1xuY29uc3QgbmFuVHlwZSA9IFpvZE5hTi5jcmVhdGU7XG5jb25zdCBiaWdJbnRUeXBlID0gWm9kQmlnSW50LmNyZWF0ZTtcbmNvbnN0IGJvb2xlYW5UeXBlID0gWm9kQm9vbGVhbi5jcmVhdGU7XG5jb25zdCBkYXRlVHlwZSA9IFpvZERhdGUuY3JlYXRlO1xuY29uc3Qgc3ltYm9sVHlwZSA9IFpvZFN5bWJvbC5jcmVhdGU7XG5jb25zdCB1bmRlZmluZWRUeXBlID0gWm9kVW5kZWZpbmVkLmNyZWF0ZTtcbmNvbnN0IG51bGxUeXBlID0gWm9kTnVsbC5jcmVhdGU7XG5jb25zdCBhbnlUeXBlID0gWm9kQW55LmNyZWF0ZTtcbmNvbnN0IHVua25vd25UeXBlID0gWm9kVW5rbm93bi5jcmVhdGU7XG5jb25zdCBuZXZlclR5cGUgPSBab2ROZXZlci5jcmVhdGU7XG5jb25zdCB2b2lkVHlwZSA9IFpvZFZvaWQuY3JlYXRlO1xuY29uc3QgYXJyYXlUeXBlID0gWm9kQXJyYXkuY3JlYXRlO1xuY29uc3Qgb2JqZWN0VHlwZSA9IFpvZE9iamVjdC5jcmVhdGU7XG5jb25zdCBzdHJpY3RPYmplY3RUeXBlID0gWm9kT2JqZWN0LnN0cmljdENyZWF0ZTtcbmNvbnN0IHVuaW9uVHlwZSA9IFpvZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgPSBab2REaXNjcmltaW5hdGVkVW5pb24uY3JlYXRlO1xuY29uc3QgaW50ZXJzZWN0aW9uVHlwZSA9IFpvZEludGVyc2VjdGlvbi5jcmVhdGU7XG5jb25zdCB0dXBsZVR5cGUgPSBab2RUdXBsZS5jcmVhdGU7XG5jb25zdCByZWNvcmRUeXBlID0gWm9kUmVjb3JkLmNyZWF0ZTtcbmNvbnN0IG1hcFR5cGUgPSBab2RNYXAuY3JlYXRlO1xuY29uc3Qgc2V0VHlwZSA9IFpvZFNldC5jcmVhdGU7XG5jb25zdCBmdW5jdGlvblR5cGUgPSBab2RGdW5jdGlvbi5jcmVhdGU7XG5jb25zdCBsYXp5VHlwZSA9IFpvZExhenkuY3JlYXRlO1xuY29uc3QgbGl0ZXJhbFR5cGUgPSBab2RMaXRlcmFsLmNyZWF0ZTtcbmNvbnN0IGVudW1UeXBlID0gWm9kRW51bS5jcmVhdGU7XG5jb25zdCBuYXRpdmVFbnVtVHlwZSA9IFpvZE5hdGl2ZUVudW0uY3JlYXRlO1xuY29uc3QgcHJvbWlzZVR5cGUgPSBab2RQcm9taXNlLmNyZWF0ZTtcbmNvbnN0IGVmZmVjdHNUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGU7XG5jb25zdCBvcHRpb25hbFR5cGUgPSBab2RPcHRpb25hbC5jcmVhdGU7XG5jb25zdCBudWxsYWJsZVR5cGUgPSBab2ROdWxsYWJsZS5jcmVhdGU7XG5jb25zdCBwcmVwcm9jZXNzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3M7XG5jb25zdCBwaXBlbGluZVR5cGUgPSBab2RQaXBlbGluZS5jcmVhdGU7XG5jb25zdCBvc3RyaW5nID0gKCkgPT4gc3RyaW5nVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvbnVtYmVyID0gKCkgPT4gbnVtYmVyVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvYm9vbGVhbiA9ICgpID0+IGJvb2xlYW5UeXBlKCkub3B0aW9uYWwoKTtcbmV4cG9ydCBjb25zdCBjb2VyY2UgPSB7XG4gICAgc3RyaW5nOiAoKGFyZykgPT4gWm9kU3RyaW5nLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBudW1iZXI6ICgoYXJnKSA9PiBab2ROdW1iZXIuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGJvb2xlYW46ICgoYXJnKSA9PiBab2RCb29sZWFuLmNyZWF0ZSh7XG4gICAgICAgIC4uLmFyZyxcbiAgICAgICAgY29lcmNlOiB0cnVlLFxuICAgIH0pKSxcbiAgICBiaWdpbnQ6ICgoYXJnKSA9PiBab2RCaWdJbnQuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGRhdGU6ICgoYXJnKSA9PiBab2REYXRlLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbn07XG5leHBvcnQgeyBhbnlUeXBlIGFzIGFueSwgYXJyYXlUeXBlIGFzIGFycmF5LCBiaWdJbnRUeXBlIGFzIGJpZ2ludCwgYm9vbGVhblR5cGUgYXMgYm9vbGVhbiwgZGF0ZVR5cGUgYXMgZGF0ZSwgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSBhcyBkaXNjcmltaW5hdGVkVW5pb24sIGVmZmVjdHNUeXBlIGFzIGVmZmVjdCwgZW51bVR5cGUgYXMgZW51bSwgZnVuY3Rpb25UeXBlIGFzIGZ1bmN0aW9uLCBpbnN0YW5jZU9mVHlwZSBhcyBpbnN0YW5jZW9mLCBpbnRlcnNlY3Rpb25UeXBlIGFzIGludGVyc2VjdGlvbiwgbGF6eVR5cGUgYXMgbGF6eSwgbGl0ZXJhbFR5cGUgYXMgbGl0ZXJhbCwgbWFwVHlwZSBhcyBtYXAsIG5hblR5cGUgYXMgbmFuLCBuYXRpdmVFbnVtVHlwZSBhcyBuYXRpdmVFbnVtLCBuZXZlclR5cGUgYXMgbmV2ZXIsIG51bGxUeXBlIGFzIG51bGwsIG51bGxhYmxlVHlwZSBhcyBudWxsYWJsZSwgbnVtYmVyVHlwZSBhcyBudW1iZXIsIG9iamVjdFR5cGUgYXMgb2JqZWN0LCBvYm9vbGVhbiwgb251bWJlciwgb3B0aW9uYWxUeXBlIGFzIG9wdGlvbmFsLCBvc3RyaW5nLCBwaXBlbGluZVR5cGUgYXMgcGlwZWxpbmUsIHByZXByb2Nlc3NUeXBlIGFzIHByZXByb2Nlc3MsIHByb21pc2VUeXBlIGFzIHByb21pc2UsIHJlY29yZFR5cGUgYXMgcmVjb3JkLCBzZXRUeXBlIGFzIHNldCwgc3RyaWN0T2JqZWN0VHlwZSBhcyBzdHJpY3RPYmplY3QsIHN0cmluZ1R5cGUgYXMgc3RyaW5nLCBzeW1ib2xUeXBlIGFzIHN5bWJvbCwgZWZmZWN0c1R5cGUgYXMgdHJhbnNmb3JtZXIsIHR1cGxlVHlwZSBhcyB0dXBsZSwgdW5kZWZpbmVkVHlwZSBhcyB1bmRlZmluZWQsIHVuaW9uVHlwZSBhcyB1bmlvbiwgdW5rbm93blR5cGUgYXMgdW5rbm93biwgdm9pZFR5cGUgYXMgdm9pZCwgfTtcbmV4cG9ydCBjb25zdCBORVZFUiA9IElOVkFMSUQ7XG4iLCIvKipcbiAqIE1lc3NhZ2luZyBwcm90b2NvbCBmb3IgQ2FsbVdlYlxuICpcbiAqIERlZmluZXMgbWVzc2FnZSB0eXBlcyBhbmQgcGF5bG9hZHMgZm9yIGNvbW11bmljYXRpb24gYmV0d2VlblxuICogY29udGVudCBzY3JpcHRzLCBiYWNrZ3JvdW5kIHdvcmtlciwgcG9wdXAsIGFuZCBvcHRpb25zIHBhZ2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBDb250ZW50VW5pdCwgQ2xhc3NpZmljYXRpb25SZXN1bHQsIFVzZXJTZXR0aW5ncywgU3RhdHMgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFR5cGUgQ29uc3RhbnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEVTID0ge1xuICAvLyBDbGFzc2lmaWNhdGlvblxuICBDTEFTU0lGWV9VTklUOiAnY2FsbXdlYjpjbGFzc2lmeVVuaXQnLFxuICAvLyBTZXR0aW5ncyBtYW5hZ2VtZW50XG4gIEdFVF9TRVRUSU5HUzogJ2NhbG13ZWI6Z2V0U2V0dGluZ3MnLFxuICBVUERBVEVfU0VUVElOR1M6ICdjYWxtd2ViOnVwZGF0ZVNldHRpbmdzJyxcbiAgLy8gQ2FjaGUgbWFuYWdlbWVudFxuICBDTEVBUl9DQUNIRTogJ2NhbG13ZWI6Y2xlYXJDYWNoZScsXG4gIC8vIFN0YXRpc3RpY3NcbiAgR0VUX1NUQVRTOiAnY2FsbXdlYjpnZXRTdGF0cycsXG4gIElOQ1JFTUVOVF9TVEFUOiAnY2FsbXdlYjppbmNyZW1lbnRTdGF0JyxcbiAgLy8gUmVhZGVyXG4gIFRPR0dMRV9SRUFERVI6ICdjYWxtd2ViOnRvZ2dsZVJlYWRlcicsXG4gIE9QRU5fUkVBREVSOiAnY2FsbXdlYjpvcGVuUmVhZGVyJyxcbiAgQ0xPU0VfUkVBREVSOiAnY2FsbXdlYjpjbG9zZVJlYWRlcicsXG4gIC8vIEFJIENvbm5lY3Rpb25cbiAgVEVTVF9DT05ORUNUSU9OOiAnY2FsbXdlYjp0ZXN0Q29ubmVjdGlvbicsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlVHlwZSA9IHR5cGVvZiBNRVNTQUdFX1RZUEVTW2tleW9mIHR5cGVvZiBNRVNTQUdFX1RZUEVTXTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVzc2FnZSBQYXlsb2FkIFR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NpZnlVbml0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkNMQVNTSUZZX1VOSVQ7XG4gIHVuaXQ6IENvbnRlbnRVbml0O1xufVxuXG5leHBvcnQgdHlwZSBDbGFzc2lmeVVuaXRSZXNwb25zZSA9IENsYXNzaWZpY2F0aW9uUmVzdWx0IHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U2V0dGluZ3NNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuR0VUX1NFVFRJTkdTO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNldHRpbmdzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLlVQREFURV9TRVRUSU5HUztcbiAgc2V0dGluZ3M6IFBhcnRpYWw8VXNlclNldHRpbmdzPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXR0aW5nc1Jlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckNhY2hlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkNMRUFSX0NBQ0hFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFyQ2FjaGVSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U3RhdHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuR0VUX1NUQVRTO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluY3JlbWVudFN0YXRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuSU5DUkVNRU5UX1NUQVQ7XG4gIGtleTogJ3RvdGFsRmlsdGVyZWQnO1xuICBhbW91bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdENvbm5lY3Rpb25NZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuVEVTVF9DT05ORUNUSU9OO1xuICBhcGlLZXk6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIGVuZHBvaW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RDb25uZWN0aW9uUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBtb2RlbD86IHN0cmluZztcbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVuaW9uIFR5cGUgZm9yIEFsbCBNZXNzYWdlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDYWxtV2ViTWVzc2FnZSA9IFxuICB8IENsYXNzaWZ5VW5pdE1lc3NhZ2VcbiAgfCBHZXRTZXR0aW5nc01lc3NhZ2VcbiAgfCBVcGRhdGVTZXR0aW5nc01lc3NhZ2VcbiAgfCBDbGVhckNhY2hlTWVzc2FnZVxuICB8IEdldFN0YXRzTWVzc2FnZVxuICB8IEluY3JlbWVudFN0YXRNZXNzYWdlXG4gIHwgVGVzdENvbm5lY3Rpb25NZXNzYWdlO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXNwb25zZSBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBHZXRTZXR0aW5nc1Jlc3BvbnNlID0gVXNlclNldHRpbmdzO1xuZXhwb3J0IHR5cGUgR2V0U3RhdHNSZXNwb25zZSA9IFN0YXRzO1xuZXhwb3J0IHR5cGUgSW5jcmVtZW50U3RhdFJlc3BvbnNlID0gU3RhdHM7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgVmFsaWRhdGlvbiAocnVudGltZSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbmNvbnN0IENsYXNzaWZ5VW5pdE1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkNMQVNTSUZZX1VOSVQpLFxuICB1bml0OiB6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCksXG4gICAgc2l0ZTogei5zdHJpbmcoKSxcbiAgICBmaW5nZXJwcmludDogei5zdHJpbmcoKSxcbiAgICBzb3VyY2VOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgdGl0bGU6IHouc3RyaW5nKCksXG4gICAgbWV0YWRhdGE6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gICAgaXNOZXc6IHouYm9vbGVhbigpLFxuICAgIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLFxuICB9KSxcbn0pO1xuXG5jb25zdCBHZXRTZXR0aW5nc01lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkdFVF9TRVRUSU5HUyksXG59KTtcblxuY29uc3QgVXBkYXRlU2V0dGluZ3NNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5VUERBVEVfU0VUVElOR1MpLFxuICBzZXR0aW5nczogei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcHJvY2Vzc2luZ01vZGU6IHouZW51bShbJ2J5b2tfbGxtJywgJ2hvc3RlZF9sbG0nXSkub3B0aW9uYWwoKSxcbiAgICBzdHJpY3RuZXNzOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMTAwKS5vcHRpb25hbCgpLFxuICAgIHJ1bGVzOiB6Lm9iamVjdCh7XG4gICAgICBibG9ja2xpc3RDaGFubmVsczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgYmxvY2tsaXN0S2V5d29yZHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICAgIGFsbG93bGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBhbGxvd2xpc3RLZXl3b3Jkczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgcHJlc2V0czogei5vYmplY3Qoe1xuICAgICAgICBwb2xpdGljczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgICAgcmFnZWJhaXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICAgIHNwb2lsZXJzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICBjbGlja2JhaXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICB9KS5vcHRpb25hbCgpLFxuICAgIH0pLm9wdGlvbmFsKCksXG4gICAgYnlva0tleTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB9KSxcbn0pO1xuXG5jb25zdCBDbGVhckNhY2hlTWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5saXRlcmFsKE1FU1NBR0VfVFlQRVMuQ0xFQVJfQ0FDSEUpLFxufSk7XG5cbmNvbnN0IEdldFN0YXRzTWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5saXRlcmFsKE1FU1NBR0VfVFlQRVMuR0VUX1NUQVRTKSxcbn0pO1xuXG5jb25zdCBJbmNyZW1lbnRTdGF0TWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5saXRlcmFsKE1FU1NBR0VfVFlQRVMuSU5DUkVNRU5UX1NUQVQpLFxuICBrZXk6IHoubGl0ZXJhbCgndG90YWxGaWx0ZXJlZCcpLFxuICBhbW91bnQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBUZXN0Q29ubmVjdGlvbk1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLlRFU1RfQ09OTkVDVElPTiksXG4gIGFwaUtleTogei5zdHJpbmcoKSxcbiAgbW9kZWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW5kcG9pbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgTWVzc2FnZVNjaGVtYSA9IHouZGlzY3JpbWluYXRlZFVuaW9uKCd0eXBlJywgW1xuICBDbGFzc2lmeVVuaXRNZXNzYWdlU2NoZW1hLFxuICBHZXRTZXR0aW5nc01lc3NhZ2VTY2hlbWEsXG4gIFVwZGF0ZVNldHRpbmdzTWVzc2FnZVNjaGVtYSxcbiAgQ2xlYXJDYWNoZU1lc3NhZ2VTY2hlbWEsXG4gIEdldFN0YXRzTWVzc2FnZVNjaGVtYSxcbiAgSW5jcmVtZW50U3RhdE1lc3NhZ2VTY2hlbWEsXG4gIFRlc3RDb25uZWN0aW9uTWVzc2FnZVNjaGVtYSxcbl0pO1xuXG4vKipcbiAqIFZhbGlkYXRlIGEgbWVzc2FnZSBwYXlsb2FkIGFnYWluc3QgdGhlIHNjaGVtYS5cbiAqIFRocm93cyBpZiBpbnZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKG1lc3NhZ2U6IHVua25vd24pOiBDYWxtV2ViTWVzc2FnZSB7XG4gIC8vIEZvciBub3csIHBlcmZvcm0gcnVudGltZSB0eXBlIGFzc2VydGlvbi4gRnV0dXJlOiB1c2UgTWVzc2FnZVNjaGVtYS5wYXJzZShtZXNzYWdlKVxuICByZXR1cm4gbWVzc2FnZSBhcyBDYWxtV2ViTWVzc2FnZTtcbn1cbiIsIi8qKlxuICogRXh0ZW5zaW9uIHV0aWxpdGllcyBhbmQgZmFjdG9yeVxuICpcbiAqIFByb3ZpZGVzOlxuICogLSBjcmVhdGVFeHRlbnNpb24oKSAtIENvbXBsZXRlIHNldHVwIGluIG9uZSBjYWxsXG4gKiAtIENvbnRleHQgZGV0ZWN0aW9uIGhlbHBlcnNcbiAqIC0gVGFiIG1hbmFnZW1lbnRcbiAqIC0gTWVzc2FnZSBwYXNzaW5nIHV0aWxpdGllc1xuICovXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgY3JlYXRlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4LmpzJztcbmltcG9ydCB7IGNyZWF0ZUFwaUNsaWVudCwgfSBmcm9tICcuLi9hcGkvaW5kZXguanMnO1xuaW1wb3J0IHsgY3JlYXRlQXV0aEZsb3cgfSBmcm9tICcuLi9hdXRoL2luZGV4LmpzJztcbmltcG9ydCB7IGRlZmF1bHRBdXRoU3RvcmUgfSBmcm9tICcuLi9zdG9yYWdlL2luZGV4LmpzJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICd3eHQvdXRpbHMvc3RvcmFnZSc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXh0ZW5zaW9uKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGFwcE5hbWUsIGFwcElkLCBlbnYsIGRlYnVnLCBzdG9yYWdlS2V5ID0gJ3N5bmM6YXV0aCcgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKHsgYXBwTmFtZSwgZW52LCBkZWJ1ZyB9KTtcbiAgICBjb25zdCBhdXRoU3RvcmUgPSBzdG9yYWdlLmRlZmluZUl0ZW0oc3RvcmFnZUtleSwge1xuICAgICAgICBmYWxsYmFjazogZGVmYXVsdEF1dGhTdG9yZSxcbiAgICB9KTtcbiAgICBjb25zdCBhcGlDbGllbnQgPSBjcmVhdGVBcGlDbGllbnQoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGdldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRBdXRoOiAoYXV0aCkgPT4gYXV0aFN0b3JlLnNldFZhbHVlKGF1dGgpLFxuICAgICAgICBvbkF1dGhFcnJvcjogKCkgPT4gYXV0aEZsb3cub3BlbkxvZ2luKCksXG4gICAgfSk7XG4gICAgY29uc3QgYXV0aEZsb3cgPSBjcmVhdGVBdXRoRmxvdyh7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgYXBwSWQsXG4gICAgICAgIGdldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRBdXRoOiAoYXV0aCkgPT4gYXV0aFN0b3JlLnNldFZhbHVlKGF1dGgpLFxuICAgICAgICByZXNldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5zZXRWYWx1ZShkZWZhdWx0QXV0aFN0b3JlKSxcbiAgICB9KTtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBdXRoU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBhd2FpdCBhdXRoU3RvcmUuZ2V0VmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogISFhdXRoLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgdXNlcjogYXV0aC51c2VyXG4gICAgICAgICAgICAgICAgPyB7IGVtYWlsOiBhdXRoLnVzZXIuZW1haWwsIG5hbWU6IGF1dGgudXNlci5uYW1lIHx8ICdVc2VyJywgcGljdHVyZTogYXV0aC51c2VyLnBpY3R1cmUgfVxuICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIHRva2VuOiBhdXRoLmFjY2Vzc1Rva2VuIHx8IG51bGwsXG4gICAgICAgICAgICBxdW90YTogbnVsbCwgLy8gRmV0Y2hlZCBzZXBhcmF0ZWx5IHZpYSBnZXRRdW90YSgpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBnZXRBdXRoU3RhdGUoKSkuaXNBdXRoZW50aWNhdGVkO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGFwaUNsaWVudCxcbiAgICAgICAgYXV0aEZsb3csXG4gICAgICAgIGF1dGhTdG9yZSxcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgYXBwSWQsXG4gICAgICAgIGdldEF1dGhTdGF0ZSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICBvcGVuTG9naW46IGF1dGhGbG93Lm9wZW5Mb2dpbixcbiAgICAgICAgb3BlbkRhc2hib2FyZDogYXV0aEZsb3cub3BlbkRhc2hib2FyZCxcbiAgICAgICAgbG9nb3V0OiBhdXRoRmxvdy5sb2dvdXQsXG4gICAgICAgIGdldFVzZXI6ICgpID0+IGFwaUNsaWVudC5nZXRVc2VyKCksXG4gICAgICAgIGFkZFF1b3RhOiAoYW1vdW50KSA9PiBhcGlDbGllbnQuYWRkUXVvdGEoYW1vdW50ID8/IDEwMCksXG4gICAgICAgIGdldFF1b3RhOiAoKSA9PiBhcGlDbGllbnQuZ2V0UXVvdGEoKSxcbiAgICAgICAgc3Vic2NyaWJlOiAoYW1vdW50KSA9PiBhcGlDbGllbnQuYWRkUXVvdGEoYW1vdW50ID8/IDEwMCksXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYXNpY0V4dGVuc2lvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogb3B0aW9ucy5hcHBOYW1lLFxuICAgICAgICBhcHBJZDogb3B0aW9ucy5hcHBJZCxcbiAgICAgICAgZ2V0RXh0ZW5zaW9uT3JpZ2luLFxuICAgICAgICBnZXRFeHRlbnNpb25VcmwsXG4gICAgICAgIG9wZW5Jbk5ld1RhYixcbiAgICAgICAgZ2V0QWN0aXZlVGFiLFxuICAgICAgICBzZW5kVG9CYWNrZ3JvdW5kLFxuICAgICAgICBoYXNQZXJtaXNzaW9uLFxuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbixcbiAgICB9O1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGV4dCBEZXRlY3Rpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbnRlbnRTY3JpcHQoKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonIHx8IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0V4dGVuc2lvbkNvbnRleHQoKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdjaHJvbWUtZXh0ZW5zaW9uOicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQmFja2dyb3VuZFNjcmlwdCgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICh0eXBlb2YgZ2xvYmFsVGhpcy5TZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBzZWxmIGluc3RhbmNlb2YgZ2xvYmFsVGhpcy5TZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpKTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuc2lvbiBVUkwgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVuc2lvbk9yaWdpbigpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnJykucmVwbGFjZSgvXFwvJC8sICcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlbnNpb25VcmwocGF0aCkge1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKHBhdGgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXV0aENhbGxiYWNrVXJsKHVybCkge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXMoYnJvd3Nlci5ydW50aW1lLmlkKSAmJiB1cmwuaW5jbHVkZXMoJ2F1dGgtY2FsbGJhY2snKTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRhYiBNYW5hZ2VtZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3BlbkluTmV3VGFiKHVybCkge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVRhYigpIHtcbiAgICBjb25zdCBbdGFiXSA9IGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICByZXR1cm4gdGFiO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9BY3RpdmVUYWIobWVzc2FnZSkge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEFjdGl2ZVRhYigpO1xuICAgIGlmICh0YWI/LmlkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVJbkFjdGl2ZVRhYihmdW5jKSB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgZ2V0QWN0aXZlVGFiKCk7XG4gICAgaWYgKCF0YWI/LmlkKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBicm93c2VyLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiLmlkIH0sXG4gICAgICAgICAgICBmdW5jLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF0/LnJlc3VsdDtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRlbnQgU2NyaXB0IEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kVG9CYWNrZ3JvdW5kKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUGVybWlzc2lvbiBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9ucyA9IFtdKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIucGVybWlzc2lvbnMuY29udGFpbnMoeyBwZXJtaXNzaW9ucyB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9ucyA9IFtdKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIucGVybWlzc2lvbnMucmVxdWVzdCh7IHBlcm1pc3Npb25zIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMi4wIC0gVHVlIE1heSAxNCAyMDI0IDE4OjAxOjI5ICovXG4gIC8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICghKGdsb2JhbFRoaXMuY2hyb21lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZS5pZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cbiAgaWYgKCEoZ2xvYmFsVGhpcy5icm93c2VyICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lLmlkKSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gICAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gICAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAgIC8vIEpTT04gZmlsZS5cbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImkxOG5cIjoge1xuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkbGVcIjoge1xuICAgICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidGFic1wiOiB7XG4gICAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgICAqIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgICAqL1xuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAgICpcbiAgICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgICAgbWF4QXJnczogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCIvKipcbiAqIEdvb2dsZSBTZWFyY2ggQWRhcHRlciBmb3IgQ2FsbVdlYlxuICpcbiAqIEluc3RlYWQgb2YgdHJ5aW5nIHRvIGZpbHRlciBHb29nbGUncyBjb21wbGV4IERPTSAod2hpY2ggZnJlZXplcyksXG4gKiB3ZSBleHRyYWN0IHNlYXJjaCByZXN1bHRzIGFuZCBkaXNwbGF5IHRoZW0gaW4gYSBjbGVhbiBTdXBlciBSZWFkZXIgdmlldy5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZVNlYXJjaFJlc3VsdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBzbmlwcGV0OiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZVNlYXJjaERhdGEge1xuICBxdWVyeTogc3RyaW5nO1xuICByZXN1bHRzOiBHb29nbGVTZWFyY2hSZXN1bHRbXTtcbiAgcmVzdWx0Q291bnQ6IG51bWJlcjtcbn1cblxuY29uc3QgUkVTVUxUX1NFTEVDVE9SUyA9IFtcbiAgLy8gTWFpbiBzZWFyY2ggcmVzdWx0c1xuICAnI3NlYXJjaCAuZycsXG4gICcjcnNvIC5nJyxcbiAgJ1tkYXRhLWh2ZWlkXSAuZycsXG4gIC8vIEFsdGVybmF0aXZlIHNlbGVjdG9yc1xuICAnLnRGMkN4YycsXG4gICcueXVSVWJmJyxcbl07XG5cbmNvbnN0IEdPT0dMRV9TRUFSQ0hfSE9TVF9SRSA9IC9eKD86d3d3XFwufGVuY3J5cHRlZFxcLik/Z29vZ2xlXFwuW2Etei5dKyQvO1xuY29uc3QgR09PR0xFX1NFQVJDSF9QQVRIUyA9IG5ldyBTZXQoWycvJywgJy9zZWFyY2gnLCAnL3dlYmhwJ10pO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgYSBHb29nbGUgc2VhcmNoIHJlc3VsdHMgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNHb29nbGVTZWFyY2hQYWdlKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgVVJMKHVybCk7XG4gICAgcmV0dXJuIChcbiAgICAgIEdPT0dMRV9TRUFSQ0hfSE9TVF9SRS50ZXN0KHBhcnNlZC5ob3N0bmFtZSkgJiZcbiAgICAgIChwYXJzZWQuc2VhcmNoUGFyYW1zLmhhcygncScpIHx8IEdPT0dMRV9TRUFSQ0hfUEFUSFMuaGFzKHBhcnNlZC5wYXRobmFtZSkpXG4gICAgKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWFyY2ggcXVlcnkgZnJvbSB0aGUgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWFyY2hRdWVyeSgpOiBzdHJpbmcge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICByZXR1cm4gcGFyYW1zLmdldCgncScpIHx8ICcnO1xufVxuXG4vKipcbiAqIEV4dHJhY3Qgc2VhcmNoIHJlc3VsdHMgZnJvbSB0aGUgR29vZ2xlIHNlYXJjaCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U2VhcmNoUmVzdWx0cyhkb2M6IERvY3VtZW50ID0gZG9jdW1lbnQpOiBHb29nbGVTZWFyY2hSZXN1bHRbXSB7XG4gIGNvbnN0IHJlc3VsdHM6IEdvb2dsZVNlYXJjaFJlc3VsdFtdID0gW107XG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAvLyBUcnkgZWFjaCBzZWxlY3RvciBwYXR0ZXJuXG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgUkVTVUxUX1NFTEVDVE9SUykge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGh0bWwgPSBlbCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgLy8gRXh0cmFjdCB0aXRsZSBhbmQgVVJMXG4gICAgICBjb25zdCB0aXRsZUVsID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdoMycpO1xuICAgICAgY29uc3QgbGlua0VsID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdhW2hyZWZePVwiaHR0cFwiXSwgYVtocmVmXj1cIi91cmxcIl0nKTtcblxuICAgICAgaWYgKCF0aXRsZUVsIHx8ICFsaW5rRWwpIHJldHVybjtcblxuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVsLnRleHRDb250ZW50Py50cmltKCkgfHwgJyc7XG4gICAgICBsZXQgdXJsID0gbGlua0VsLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuXG4gICAgICAvLyBIYW5kbGUgR29vZ2xlJ3MgcmVkaXJlY3QgVVJMc1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCcvdXJsPycpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc3Vic3RyaW5nKDQpKTtcbiAgICAgICAgICB1cmwgPSBwYXJhbXMuZ2V0KCdxJykgfHwgcGFyYW1zLmdldCgndXJsJykgfHwgdXJsO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBLZWVwIG9yaWdpbmFsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCBpZiBubyB0aXRsZSBvciBkdXBsaWNhdGUgVVJMXG4gICAgICBpZiAoIXRpdGxlIHx8IHNlZW4uaGFzKHVybCkpIHJldHVybjtcbiAgICAgIHNlZW4uYWRkKHVybCk7XG5cbiAgICAgIC8vIEV4dHJhY3Qgc25pcHBldFxuICAgICAgY29uc3Qgc25pcHBldFNlbGVjdG9ycyA9IFtcbiAgICAgICAgJy5Wd2lDM2InLFxuICAgICAgICAnLklzWnZlYycsXG4gICAgICAgICdbZGF0YS1zbmNmXScsXG4gICAgICAgICcuczN2OXJkJyxcbiAgICAgICAgJy5zdCcsXG4gICAgICBdO1xuICAgICAgbGV0IHNuaXBwZXQgPSAnJztcbiAgICAgIGZvciAoY29uc3Qgc2VsIG9mIHNuaXBwZXRTZWxlY3RvcnMpIHtcbiAgICAgICAgY29uc3Qgc25pcHBldEVsID0gaHRtbC5xdWVyeVNlbGVjdG9yKHNlbCk7XG4gICAgICAgIGlmIChzbmlwcGV0RWw/LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgc25pcHBldCA9IHNuaXBwZXRFbC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRXh0cmFjdCBzb3VyY2UgZG9tYWluXG4gICAgICBsZXQgc291cmNlID0gJyc7XG4gICAgICB0cnkge1xuICAgICAgICBzb3VyY2UgPSBuZXcgVVJMKHVybCkuaG9zdG5hbWU7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgc291cmNlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIC8vIFNraXAgbm9uLWh0dHAgbGlua3MgKGFkcywgaW50ZXJuYWwgR29vZ2xlIGxpbmtzKVxuICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSByZXR1cm47XG5cbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB1cmwsXG4gICAgICAgIHNuaXBwZXQsXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgcG9zaXRpb246IHJlc3VsdHMubGVuZ3RoICsgMSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IGFsbCBzZWFyY2ggZGF0YSBmcm9tIHRoZSBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U2VhcmNoRGF0YShkb2M6IERvY3VtZW50ID0gZG9jdW1lbnQpOiBHb29nbGVTZWFyY2hEYXRhIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogZ2V0U2VhcmNoUXVlcnkoKSxcbiAgICByZXN1bHRzOiBleHRyYWN0U2VhcmNoUmVzdWx0cyhkb2MpLFxuICAgIHJlc3VsdENvdW50OiBleHRyYWN0U2VhcmNoUmVzdWx0cyhkb2MpLmxlbmd0aCxcbiAgfTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIER1Y2tEdWNrR28gVVJMIGZvciB0aGUgY3VycmVudCBHb29nbGUgc2VhcmNoIHF1ZXJ5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGREdWNrRHVja0dvU2VhcmNoVXJsKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpOiBzdHJpbmcge1xuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBVUkwodXJsKTtcbiAgICBjb25zdCBxdWVyeSA9IHBhcnNlZC5zZWFyY2hQYXJhbXMuZ2V0KCdxJyk/LnRyaW0oKSB8fCAnJztcblxuICAgIGNvbnN0IGR1Y2tkdWNrZ28gPSBuZXcgVVJMKCdodHRwczovL2R1Y2tkdWNrZ28uY29tLycpO1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgZHVja2R1Y2tnby5zZWFyY2hQYXJhbXMuc2V0KCdxJywgcXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBkdWNrZHVja2dvLnRvU3RyaW5nKCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnaHR0cHM6Ly9kdWNrZHVja2dvLmNvbS8nO1xuICB9XG59XG4iLCIvKipcbiAqIFJlYWRlciBFbnRyeSBQb2ludCBmb3IgQ2FsbVdlYlxuICpcbiAqIEFMV0FZUyBzaG93cyBvdXIgbGF5b3V0LiBOZXZlciBzaG93cyBvcmlnaW5hbCBwYWdlLlxuICogTG9ncyBldmVyeXRoaW5nIGZvciBkZWJ1Z2dpbmcuXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lQ29udGVudFNjcmlwdCB9IGZyb20gJ3d4dC91dGlscy9kZWZpbmUtY29udGVudC1zY3JpcHQnO1xuaW1wb3J0IHsgb3BlblJlYWRlciwgY2xvc2VSZWFkZXIsIGlzUmVhZGVyT3BlbiB9IGZyb20gJy4uL3NyYy9yZW5kZXJlci9yZWFkZXInO1xuaW1wb3J0IHsgTUVTU0FHRV9UWVBFUyB9IGZyb20gJy4uL3NyYy9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgc2VuZFRvQmFja2dyb3VuZCB9IGZyb20gJ0BkcmFjb24vd3h0LXNoYXJlZC9leHRlbnNpb24nO1xuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB0eXBlIHsgVXNlclNldHRpbmdzIH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcbmltcG9ydCB7IGlzR29vZ2xlU2VhcmNoUGFnZSB9IGZyb20gJ0Avc3JjL2FkYXB0ZXJzL2dvb2dsZSc7XG5cbmNvbnN0IExPQURJTkdfSUQgPSAnY2FsbXdlYi1sb2FkaW5nJztcbmNvbnN0IEZMT0FUSU5HX0JUTl9JRCA9ICdjYWxtd2ViLXJhdy10b2dnbGUnO1xuXG5jb25zdCBMT0FESU5HX1NUWUxFUyA9IGBcbiAgIyR7TE9BRElOR19JRH0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gICAgYmFja2dyb3VuZDogIzA5MDkwYjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiAgfVxuICAuY2FsbXdlYi1sb2FkaW5nLXNwaW5uZXIge1xuICAgIHdpZHRoOiAyOHB4OyBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjOGI1Y2Y2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGNhbG13ZWItc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICAuY2FsbXdlYi1sb2FkaW5nLXRleHQgeyBjb2xvcjogIzNmM2Y0NjsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyB9XG4gIEBrZXlmcmFtZXMgY2FsbXdlYi1zcGluIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cbmA7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNtYXJ0IERldGVjdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc0ludGVyYWN0aXZlU2l0ZSgpOiBib29sZWFuIHtcbiAgY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGNvbnN0IHNraXBEb21haW5zID0gW1xuICAgICdtYWlsLmdvb2dsZScsICdjYWxlbmRhci5nb29nbGUnLCAnZHJpdmUuZ29vZ2xlJywgJ2RvY3MuZ29vZ2xlJyxcbiAgICAnc2hlZXRzLmdvb2dsZScsICdzbGlkZXMuZ29vZ2xlJywgJ21lZXQuZ29vZ2xlJyxcbiAgICAnZ2l0aHViLmNvbScsICdnaXRsYWIuY29tJywgJ3NsYWNrLmNvbScsICdkaXNjb3JkLmNvbScsXG4gICAgJ25vdGlvbi5zbycsICdmaWdtYS5jb20nLCAnbGluZWFyLmFwcCcsICd0cmVsbG8uY29tJyxcbiAgICAnbmV0ZmxpeC5jb20nLCAnc3BvdGlmeS5jb20nLCAneW91dHViZS5jb20nLFxuICBdO1xuICBpZiAoc2tpcERvbWFpbnMuc29tZShkID0+IGhvc3RuYW1lLmluY2x1ZGVzKGQpKSkgcmV0dXJuIHRydWU7XG5cbiAgY29uc3Qgc2tpcFBhdGhzID0gWycvbG9naW4nLCAnL3NpZ25pbicsICcvc2lnbnVwJywgJy9yZWdpc3RlcicsICcvYXV0aCcsXG4gICAgJy9hY2NvdW50JywgJy9zZXR0aW5ncycsICcvYWRtaW4nLCAnL2Rhc2hib2FyZCcsICcvY2hlY2tvdXQnLCAnL2NhcnQnXTtcbiAgaWYgKHNraXBQYXRocy5zb21lKHAgPT4gcGF0aC5zdGFydHNXaXRoKHApKSkgcmV0dXJuIHRydWU7XG5cbiAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW3R5cGU9XCJzZWFyY2hcIl0pLCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gIGlmIChpbnB1dHMubGVuZ3RoID4gNCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVSVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBzaG93TG9hZGluZygpOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoTE9BRElOR19JRCkpIHJldHVybjtcbiAgICAvLyBMb2NrIHNjcm9sbGluZ1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicsICdpbXBvcnRhbnQnKTtcbiAgICAvLyBDcmVhdGUgbG9hZGluZyBvdmVybGF5IChjb3ZlcnMgcGFnZSB3aXRoIG9wYXF1ZSBiYWNrZ3JvdW5kKVxuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvYWRlci5pZCA9IExPQURJTkdfSUQ7XG4gICAgbG9hZGVyLmlubmVySFRNTCA9IGA8c3R5bGU+JHtMT0FESU5HX1NUWUxFU308L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItbG9hZGluZy1zcGlubmVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1sb2FkaW5nLXRleHRcIj5GaWx0ZXJpbmcuLi48L2Rpdj5gO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignW0NhbG1XZWJdIExvYWRpbmcgc2NyZWVuIGZhaWxlZDonLCBlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKCk6IHZvaWQge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChMT0FESU5HX0lEKT8ucmVtb3ZlKCk7XG4gIC8vIFNjcm9sbGluZyBpcyByZXN0b3JlZCBieSB0aGUgcmVhZGVyIHJlbmRlcmVyIHdoZW4gaXQgY2xvc2VzXG59XG5cbmZ1bmN0aW9uIHNob3dGbG9hdGluZ0J1dHRvbigpOiB2b2lkIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEZMT0FUSU5HX0JUTl9JRCkpIHJldHVybjtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bi5pZCA9IEZMT0FUSU5HX0JUTl9JRDtcbiAgYnRuLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIj48cGF0aCBkPVwiTTEyIDIyczgtNCA4LTEwVjVsLTgtMy04IDN2N2MwIDYgOCAxMCA4IDEwelwiLz48L3N2Zz5gO1xuICBidG4udGl0bGUgPSAnRmlsdGVyZWQgVmlldyAoQ3RybCtTaGlmdCtSKSc7XG4gIE9iamVjdC5hc3NpZ24oYnRuLnN0eWxlLCB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogJzIwcHgnLCByaWdodDogJzIwcHgnLFxuICAgIHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzQwcHgnLCBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIGJhY2tncm91bmQ6ICcjOGI1Y2Y2JywgY29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLCB6SW5kZXg6ICcyMTQ3NDgzNjQ2JyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCAyNHB4IHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjMpJyxcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMTVzIGVhc2UnLCBib3JkZXI6ICdub25lJyxcbiAgfSk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4geyBidG4uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknOyB9KTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7IGJ0bi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknOyB9KTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJ0bi5yZW1vdmUoKTtcbiAgICBzaG93TG9hZGluZygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBoaWRlTG9hZGluZygpOyB0cnkgeyBvcGVuUmVhZGVyKCk7IH0gY2F0Y2ggKGUpIHsgY29uc29sZS5lcnJvcihlKTsgfSB9LCAzMDApO1xuICB9KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidG4pO1xufVxuXG5mdW5jdGlvbiBoaWRlRmxvYXRpbmdCdXR0b24oKTogdm9pZCB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEZMT0FUSU5HX0JUTl9JRCk/LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzYWZlVG9nZ2xlUmVhZGVyKCk6IHZvaWQge1xuICB0cnkge1xuICAgIGlmIChpc1JlYWRlck9wZW4oKSkgeyBjbG9zZVJlYWRlcigpOyBzaG93RmxvYXRpbmdCdXR0b24oKTsgfVxuICAgIGVsc2UgeyBoaWRlRmxvYXRpbmdCdXR0b24oKTsgb3BlblJlYWRlcigpOyB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tDYWxtV2ViXSBSZWFkZXIgdG9nZ2xlIGZhaWxlZDonLCBlcnIpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1haW5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29udGVudFNjcmlwdCh7XG4gIG1hdGNoZXM6IFsnPGFsbF91cmxzPiddLFxuICBydW5BdDogJ2RvY3VtZW50X2lkbGUnLFxuXG4gIGFzeW5jIG1haW4oKSB7XG4gICAgY29uc29sZS5sb2coJ1tDYWxtV2ViXSBSZWFkZXIgbG9hZGVkIG9uJywgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcblxuICAgIC8vIEdvb2dsZSBzZWFyY2ggcGFnZXMgYXJlIGhhbmRsZWQgYnkgdGhlIGRlZGljYXRlZCByZWRpcmVjdCBzY3JpcHQuXG4gICAgaWYgKGlzR29vZ2xlU2VhcmNoUGFnZSgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnW0NhbG1XZWJdIFNraXBwaW5nIHJlYWRlciBvbiBHb29nbGUgc2VhcmNoIHBhZ2UnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBLZXlib2FyZCBzaG9ydGN1dHNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmN0cmxLZXkgJiYgZS5zaGlmdEtleSAmJiAhZS5hbHRLZXkgJiYgIWUubWV0YUtleSAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSAncicpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBlLnN0b3BQcm9wYWdhdGlvbigpOyBzYWZlVG9nZ2xlUmVhZGVyKCk7XG4gICAgICB9XG4gICAgICBpZiAoZS5hbHRLZXkgJiYgIWUuY3RybEtleSAmJiAhZS5tZXRhS2V5ICYmICFlLnNoaWZ0S2V5ICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdyJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHNhZmVUb2dnbGVSZWFkZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0cnVlKTtcblxuICAgIC8vIE1lc3NhZ2VzXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZTogYW55KSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSBNRVNTQUdFX1RZUEVTLlRPR0dMRV9SRUFERVIpIHNhZmVUb2dnbGVSZWFkZXIoKTtcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IE1FU1NBR0VfVFlQRVMuT1BFTl9SRUFERVIpIHsgaGlkZUZsb2F0aW5nQnV0dG9uKCk7IHRyeSB7IGlmICghaXNSZWFkZXJPcGVuKCkpIG9wZW5SZWFkZXIoKTsgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmVycm9yKGUpOyB9IH1cbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IE1FU1NBR0VfVFlQRVMuQ0xPU0VfUkVBREVSKSB7IHRyeSB7IGlmIChpc1JlYWRlck9wZW4oKSkgeyBjbG9zZVJlYWRlcigpOyBzaG93RmxvYXRpbmdCdXR0b24oKTsgfSB9IGNhdGNoIChlKSB7IGNvbnNvbGUuZXJyb3IoZSk7IH0gfVxuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBzZXR0aW5ncyB3aXRoIHRpbWVvdXQgLSBkZWZhdWx0IHRvIGZpbHRlcmluZyBpZiBzZXR0aW5ncyB1bmF2YWlsYWJsZVxuICAgIGxldCBzaG91bGRGaWx0ZXIgPSB0cnVlO1xuICAgIGxldCByZWFkZXJTZXR0aW5nczogYW55ID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNldHRpbmdzUHJvbWlzZSA9IHNlbmRUb0JhY2tncm91bmQ8VXNlclNldHRpbmdzPih7IHR5cGU6IE1FU1NBR0VfVFlQRVMuR0VUX1NFVFRJTkdTIH0pO1xuICAgICAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignU2V0dGluZ3MgdGltZW91dCcpKSwgMjAwMCkpO1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBQcm9taXNlLnJhY2UoW3NldHRpbmdzUHJvbWlzZSwgdGltZW91dF0pIGFzIFVzZXJTZXR0aW5ncztcbiAgICAgIGlmIChzZXR0aW5ncz8ucmVhZGVyPy5hdXRvT3BlbiA9PT0gZmFsc2UgfHwgc2V0dGluZ3M/LmVuYWJsZWQgPT09IGZhbHNlKSBzaG91bGRGaWx0ZXIgPSBmYWxzZTtcbiAgICAgIHJlYWRlclNldHRpbmdzID0gc2V0dGluZ3M/LnJlYWRlciB8fCB7fTtcbiAgICAgIGNvbnNvbGUubG9nKCdbQ2FsbVdlYl0gU2V0dGluZ3MgbG9hZGVkLCBmaWx0ZXJpbmc6Jywgc2hvdWxkRmlsdGVyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybignW0NhbG1XZWJdIFNldHRpbmdzIGxvYWQgZmFpbGVkLCBkZWZhdWx0aW5nIHRvIGZpbHRlcjonLCBlcnIpO1xuICAgIH1cblxuICAgIGlmICghc2hvdWxkRmlsdGVyKSB7IHNob3dGbG9hdGluZ0J1dHRvbigpOyByZXR1cm47IH1cbiAgICBpZiAoaXNJbnRlcmFjdGl2ZVNpdGUoKSkgeyBzaG93RmxvYXRpbmdCdXR0b24oKTsgcmV0dXJuOyB9XG5cbiAgICBjb25zb2xlLmxvZygnW0NhbG1XZWJdIE9wZW5pbmcgcmVhZGVyLi4uJyk7XG4gICAgc2hvd0xvYWRpbmcoKTtcblxuICAgIG9wZW5SZWFkZXIoe1xuICAgICAgbW9kZTogcmVhZGVyU2V0dGluZ3MubW9kZSB8fCAnZnVsbCcsXG4gICAgICBsYXlvdXRJZDogcmVhZGVyU2V0dGluZ3MuZGVmYXVsdExheW91dCxcbiAgICAgIGZvbnQ6IHJlYWRlclNldHRpbmdzLmZvbnQsXG4gICAgICBmb250U2l6ZTogcmVhZGVyU2V0dGluZ3MuZm9udFNpemUsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBoaWRlTG9hZGluZygpO1xuICAgICAgY29uc29sZS5sb2coJ1tDYWxtV2ViXSBSZWFkZXIgb3BlbmVkIE9LJyk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignW0NhbG1XZWJdIFJlYWRlciBmYWlsZWQ6JywgZXJyKTtcbiAgICAgIGhpZGVMb2FkaW5nKCk7XG4gICAgICBzaG93RmxvYXRpbmdCdXR0b24oKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluaXRpb24iLCJlbCIsImVzY2FwZUh0bWwiLCJ0aGlzIiwibW9kdWxlIiwicHJveHlUYXJnZXQiLCJ2YWx1ZSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJjb25maWciLCJicm93c2VyIiwia2V5cyIsIm9wdHMiLCJtYXAiLCJ1dGlsIiwib2JqZWN0VXRpbCIsImRlZmF1bHRFcnJvck1hcCIsImVycm9yVXRpbCIsImVycm9yTWFwIiwiY3R4IiwiaXNzdWVzIiwiZWxlbWVudHMiLCJwcm9jZXNzZWQiLCJab2RGaXJzdFBhcnR5VHlwZUtpbmQiLCJ6Lm9iamVjdCIsInoubGl0ZXJhbCIsInouc3RyaW5nIiwiei5hcnJheSIsInouYm9vbGVhbiIsInouZW51bSIsInoubnVtYmVyIiwiei5kaXNjcmltaW5hdGVkVW5pb24iXSwibWFwcGluZ3MiOiI7O0FBQ0EsV0FBUyxvQkFBb0JBLGFBQVk7QUFDeEMsV0FBT0E7QUFBQSxFQUNSO0FDb0JBLFFBQU0sbUJBQW1CO0FBQUEsSUFDdkI7QUFBQSxJQUFPO0FBQUEsSUFBUztBQUFBLElBQVU7QUFBQSxJQUMxQjtBQUFBLElBQU87QUFBQSxJQUFrQjtBQUFBLElBQVE7QUFBQSxJQUFpQjtBQUFBLElBQVk7QUFBQSxJQUFlO0FBQUEsSUFDN0U7QUFBQSxJQUFlO0FBQUEsSUFBa0I7QUFBQSxJQUFrQjtBQUFBLElBQ25EO0FBQUEsSUFBWTtBQUFBLElBQVk7QUFBQSxJQUFnQjtBQUFBLElBQWdCO0FBQUEsSUFDeEQ7QUFBQSxJQUFpQjtBQUFBLElBQWtCO0FBQUEsSUFBaUI7QUFBQSxJQUFlO0FBQUEsSUFDbkU7QUFBQSxJQUFhO0FBQUEsSUFBYTtBQUFBLElBQW9CO0FBQUEsSUFBYztBQUFBLElBQzVEO0FBQUEsSUFBVTtBQUFBLElBQVM7QUFBQSxJQUFZO0FBQUEsSUFDL0I7QUFBQSxJQUF5QjtBQUFBLElBQXdCO0FBQUEsSUFDakQ7QUFBQSxJQUFvQjtBQUFBLElBQW9CO0FBQUEsSUFDeEM7QUFBQSxJQUFlO0FBQUEsSUFBZ0I7QUFBQSxJQUFpQjtBQUFBLElBQ2hEO0FBQUEsSUFBUztBQUFBLElBQWE7QUFBQSxJQUFlO0FBQUEsSUFDckM7QUFBQSxJQUFlO0FBQUEsSUFBZ0I7QUFBQSxJQUMvQjtBQUFBLElBQWU7QUFBQSxJQUFVO0FBQUEsSUFDekI7QUFBQSxJQUFrQjtBQUFBLElBQVM7QUFBQSxJQUFzQjtBQUFBLElBQTRCO0FBQUEsSUFDN0U7QUFBQSxJQUF1QjtBQUFBLElB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0dkJwQixXQUFPLFlBQVksS0FBSztBQUd4QixVQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsWUFBUSxZQUFZO0FBR3BCLFVBQU0sWUFBWSxTQUFTLGNBQWMsS0FBSztBQUM5QyxjQUFVLFlBQVk7QUFHdEIsVUFBTSxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzVDLFlBQVEsWUFBWTtBQUNwQixZQUFRLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBU1EsV0FBVyxTQUFTLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNCakQsVUFBTSxPQUFPLFNBQVMsY0FBYyxNQUFNO0FBQzFDLFNBQUssWUFBWTtBQUdqQixVQUFNLG9CQUFvQixTQUFTLGNBQWMsUUFBUTtBQUN6RCxzQkFBa0IsWUFBWTtBQUc5QixVQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsWUFBUSxZQUFZO0FBR3BCLFVBQU0sb0JBQW9CLFNBQVMsY0FBYyxRQUFRO0FBQ3pELHNCQUFrQixZQUFZO0FBRTlCLFNBQUssWUFBWSxpQkFBaUI7QUFDbEMsU0FBSyxZQUFZLE9BQU87QUFDeEIsU0FBSyxZQUFZLGlCQUFpQjtBQUVsQyxZQUFRLFlBQVksU0FBUztBQUM3QixZQUFRLFlBQVksT0FBTztBQUMzQixZQUFRLFlBQVksSUFBSTtBQUN4QixXQUFPLFlBQVksT0FBTztBQUUxQixhQUFTLEtBQUssWUFBWSxJQUFJO0FBRzlCLFdBQU8sZUFBZSxjQUFjLEdBQUcsaUJBQWlCLFNBQVMsTUFBTTtBQUNyRSxrQkFBQTtBQUNBLGNBQVEsVUFBQTtBQUFBLElBQ1YsQ0FBQztBQUNELFdBQU8sZUFBZSxZQUFZLEdBQUcsaUJBQWlCLFNBQVMsTUFBTTtBQUNuRSxrQkFBQTtBQUNBLGNBQVEsVUFBQTtBQUFBLElBQ1YsQ0FBQztBQUdELFFBQUksV0FBVyxXQUFXLFVBQVUsaUJBQWlCO0FBQ25ELHdCQUFrQixZQUFZO0FBQUEsa0NBQ0EsV0FBVyxVQUFVLEtBQUssQ0FBQztBQUFBO0FBQUEsVUFFbkQsVUFBVSxVQUFVLDhCQUE4QixXQUFXLFVBQVUsUUFBUSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlqSCxjQUFRLFlBQVksVUFBVTtBQUM5QixvQkFBYyxPQUFPO0FBQUEsSUFDdkIsT0FBTztBQUNMLFlBQU0sZ0JBQWdCLFdBQVcsUUFBUSxRQUFRLFVBQVUsZ0JBQUE7QUFDM0QsVUFBSTtBQUNGLGVBQU8sT0FBTyxlQUFlLFNBQVM7QUFBQSxVQUNwQyxNQUFNLFFBQVEsUUFBUTtBQUFBLFVBQ3RCLFVBQVUsUUFBUSxZQUFZO0FBQUEsUUFBQSxHQUM3QjtBQUFBLFVBQ0QsUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFFBQUEsQ0FDVDtBQUFBLE1BQ0gsU0FBUyxLQUFLO0FBQ1osZ0JBQVEsTUFBTSxtQ0FBbUMsR0FBRztBQUNwRCx1QkFBZSxTQUFTLGFBQWE7QUFBQSxNQUN2QztBQUFBLElBQ0Y7QUFHQSxVQUFNLFlBQVksQ0FBQyxNQUFxQjtBQUN0QyxVQUFJLEVBQUUsUUFBUSxVQUFVO0FBQ3RCLG9CQUFBO0FBQ0EsaUJBQVMsb0JBQW9CLFdBQVcsU0FBUztBQUFBLE1BQ25EO0FBQUEsSUFDRjtBQUNBLGFBQVMsaUJBQWlCLFdBQVcsU0FBUztBQUFBLEVBQ2hEO0FBRUEsV0FBUyxrQkFBb0M7QUFDM0MsV0FBTztBQUFBLE1BQ0wsT0FBTyxTQUFTLFNBQVM7QUFBQSxNQUN6QixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixTQUFTLFNBQVMsTUFBTSxhQUFhLE1BQU0sR0FBRyxHQUFJLEtBQUs7QUFBQSxNQUN2RCxjQUFjLE1BQU07QUFDbEIsY0FBTSxNQUFNLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLGNBQU0sT0FBTyxTQUFTLE1BQU0sZUFBZTtBQUMzQyxjQUFNLGFBQWEsS0FBSyxNQUFNLFNBQVMsRUFBRSxPQUFPLENBQUEsTUFBSyxFQUFFLEtBQUEsRUFBTyxTQUFTLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUN0RixtQkFBVyxLQUFLLFlBQVk7QUFDMUIsZ0JBQU0sS0FBSyxTQUFTLGNBQWMsR0FBRztBQUNyQyxhQUFHLGNBQWMsRUFBRSxLQUFBO0FBQ25CLGNBQUksWUFBWSxFQUFFO0FBQUEsUUFDcEI7QUFDQSxlQUFPO0FBQUEsTUFDVCxHQUFBO0FBQUEsTUFDQSxRQUFRLENBQUE7QUFBQSxNQUNSLFFBQVEsT0FBTyxTQUFTO0FBQUEsTUFDeEIsU0FBUztBQUFBLE1BQ1QsYUFBYSxLQUFLLE1BQU0sU0FBUyxNQUFNLGFBQWEsTUFBTSxLQUFLLEVBQUUsVUFBVSxLQUFLLEdBQUc7QUFBQSxNQUNuRixLQUFLLE9BQU8sU0FBUztBQUFBLElBQUE7QUFBQSxFQUV6QjtBQUVBLFdBQVMsZUFBZSxXQUF3QixTQUFpQztBQUMvRSxjQUFVLFlBQVk7QUFBQSxTQUNmLFdBQVcsUUFBUSxRQUFRLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUFBO0FBQUEsRUFFbEQ7QUFFQSxXQUFTLGNBQWMsV0FBOEI7QUFDbkQsY0FBVSxpQkFBaUIsR0FBRyxFQUFFLFFBQVEsQ0FBQSxNQUFLO0FBQzNDLFFBQUUsYUFBYSxVQUFVLFFBQVE7QUFDakMsUUFBRSxhQUFhLE9BQU8scUJBQXFCO0FBQUEsSUFDN0MsQ0FBQztBQUFBLEVBQ0g7QUFFTyxXQUFTLGNBQW9CO0FBQ2xDLGFBQVMsZUFBZSxPQUFPLEdBQUcsT0FBQTtBQUNsQyxhQUFTLEtBQUssTUFBTSxlQUFlLFVBQVU7QUFBQSxFQUMvQztBQUVBLFdBQVMsV0FBVyxNQUFzQjtBQUN4QyxVQUFNLE9BQU8sU0FBUyxjQUFjLE1BQU07QUFDMUMsU0FBSyxjQUFjO0FBQ25CLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFFTyxXQUFTLGVBQXdCO0FBQ3RDLFdBQU8sQ0FBQyxDQUFDLFNBQVMsZUFBZSxPQUFPO0FBQUEsRUFDMUM7QUNuZ0NPLE1BQUk7QUFDWCxHQUFDLFNBQVVDLE9BQU07QUFDYixJQUFBQSxNQUFLLGNBQWMsQ0FBQyxNQUFNO0FBQUEsSUFBRTtBQUM1QixhQUFTLFNBQVMsTUFBTTtBQUFBLElBQUU7QUFDMUIsSUFBQUEsTUFBSyxXQUFXO0FBQ2hCLGFBQVMsWUFBWSxJQUFJO0FBQ3JCLFlBQU0sSUFBSSxNQUFLO0FBQUEsSUFDbkI7QUFDQSxJQUFBQSxNQUFLLGNBQWM7QUFDbkIsSUFBQUEsTUFBSyxjQUFjLENBQUMsVUFBVTtBQUMxQixZQUFNLE1BQU0sQ0FBQTtBQUNaLGlCQUFXLFFBQVEsT0FBTztBQUN0QixZQUFJLElBQUksSUFBSTtBQUFBLE1BQ2hCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxJQUFBQSxNQUFLLHFCQUFxQixDQUFDLFFBQVE7QUFDL0IsWUFBTSxZQUFZQSxNQUFLLFdBQVcsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLFFBQVE7QUFDcEYsWUFBTSxXQUFXLENBQUE7QUFDakIsaUJBQVcsS0FBSyxXQUFXO0FBQ3ZCLGlCQUFTLENBQUMsSUFBSSxJQUFJLENBQUM7QUFBQSxNQUN2QjtBQUNBLGFBQU9BLE1BQUssYUFBYSxRQUFRO0FBQUEsSUFDckM7QUFDQSxJQUFBQSxNQUFLLGVBQWUsQ0FBQyxRQUFRO0FBQ3pCLGFBQU9BLE1BQUssV0FBVyxHQUFHLEVBQUUsSUFBSSxTQUFVLEdBQUc7QUFDekMsZUFBTyxJQUFJLENBQUM7QUFBQSxNQUNoQixDQUFDO0FBQUEsSUFDTDtBQUNBLElBQUFBLE1BQUssYUFBYSxPQUFPLE9BQU8sU0FBUyxhQUNuQyxDQUFDLFFBQVEsT0FBTyxLQUFLLEdBQUcsSUFDeEIsQ0FBQyxXQUFXO0FBQ1YsWUFBTSxPQUFPLENBQUE7QUFDYixpQkFBVyxPQUFPLFFBQVE7QUFDdEIsWUFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLFFBQVEsR0FBRyxHQUFHO0FBQ25ELGVBQUssS0FBSyxHQUFHO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDSixJQUFBQSxNQUFLLE9BQU8sQ0FBQyxLQUFLLFlBQVk7QUFDMUIsaUJBQVcsUUFBUSxLQUFLO0FBQ3BCLFlBQUksUUFBUSxJQUFJO0FBQ1osaUJBQU87QUFBQSxNQUNmO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxJQUFBQSxNQUFLLFlBQVksT0FBTyxPQUFPLGNBQWMsYUFDdkMsQ0FBQyxRQUFRLE9BQU8sVUFBVSxHQUFHLElBQzdCLENBQUMsUUFBUSxPQUFPLFFBQVEsWUFBWSxPQUFPLFNBQVMsR0FBRyxLQUFLLEtBQUssTUFBTSxHQUFHLE1BQU07QUFDdEYsYUFBUyxXQUFXLE9BQU8sWUFBWSxPQUFPO0FBQzFDLGFBQU8sTUFBTSxJQUFJLENBQUMsUUFBUyxPQUFPLFFBQVEsV0FBVyxJQUFJLEdBQUcsTUFBTSxHQUFJLEVBQUUsS0FBSyxTQUFTO0FBQUEsSUFDMUY7QUFDQSxJQUFBQSxNQUFLLGFBQWE7QUFDbEIsSUFBQUEsTUFBSyx3QkFBd0IsQ0FBQyxHQUFHLFVBQVU7QUFDdkMsVUFBSSxPQUFPLFVBQVUsVUFBVTtBQUMzQixlQUFPLE1BQU0sU0FBUTtBQUFBLE1BQ3pCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKLEdBQUcsU0FBUyxPQUFPLENBQUEsRUFBRztBQUNmLE1BQUk7QUFDWCxHQUFDLFNBQVVDLGFBQVk7QUFDbkIsSUFBQUEsWUFBVyxjQUFjLENBQUMsT0FBTyxXQUFXO0FBQ3hDLGFBQU87QUFBQSxRQUNILEdBQUc7QUFBQSxRQUNILEdBQUc7QUFBQTtBQUFBLE1BQ2Y7QUFBQSxJQUNJO0FBQUEsRUFDSixHQUFHLGVBQWUsYUFBYSxDQUFBLEVBQUc7QUFDM0IsUUFBTSxnQkFBZ0IsS0FBSyxZQUFZO0FBQUEsSUFDMUM7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSixDQUFDO0FBQ00sUUFBTSxnQkFBZ0IsQ0FBQyxTQUFTO0FBQ25DLFVBQU0sSUFBSSxPQUFPO0FBQ2pCLFlBQVEsR0FBQztBQUFBLE1BQ0wsS0FBSztBQUNELGVBQU8sY0FBYztBQUFBLE1BQ3pCLEtBQUs7QUFDRCxlQUFPLGNBQWM7QUFBQSxNQUN6QixLQUFLO0FBQ0QsZUFBTyxPQUFPLE1BQU0sSUFBSSxJQUFJLGNBQWMsTUFBTSxjQUFjO0FBQUEsTUFDbEUsS0FBSztBQUNELGVBQU8sY0FBYztBQUFBLE1BQ3pCLEtBQUs7QUFDRCxlQUFPLGNBQWM7QUFBQSxNQUN6QixLQUFLO0FBQ0QsZUFBTyxjQUFjO0FBQUEsTUFDekIsS0FBSztBQUNELGVBQU8sY0FBYztBQUFBLE1BQ3pCLEtBQUs7QUFDRCxZQUFJLE1BQU0sUUFBUSxJQUFJLEdBQUc7QUFDckIsaUJBQU8sY0FBYztBQUFBLFFBQ3pCO0FBQ0EsWUFBSSxTQUFTLE1BQU07QUFDZixpQkFBTyxjQUFjO0FBQUEsUUFDekI7QUFDQSxZQUFJLEtBQUssUUFBUSxPQUFPLEtBQUssU0FBUyxjQUFjLEtBQUssU0FBUyxPQUFPLEtBQUssVUFBVSxZQUFZO0FBQ2hHLGlCQUFPLGNBQWM7QUFBQSxRQUN6QjtBQUNBLFlBQUksT0FBTyxRQUFRLGVBQWUsZ0JBQWdCLEtBQUs7QUFDbkQsaUJBQU8sY0FBYztBQUFBLFFBQ3pCO0FBQ0EsWUFBSSxPQUFPLFFBQVEsZUFBZSxnQkFBZ0IsS0FBSztBQUNuRCxpQkFBTyxjQUFjO0FBQUEsUUFDekI7QUFDQSxZQUFJLE9BQU8sU0FBUyxlQUFlLGdCQUFnQixNQUFNO0FBQ3JELGlCQUFPLGNBQWM7QUFBQSxRQUN6QjtBQUNBLGVBQU8sY0FBYztBQUFBLE1BQ3pCO0FBQ0ksZUFBTyxjQUFjO0FBQUEsSUFDakM7QUFBQSxFQUNBO0FDbklPLFFBQU0sZUFBZSxLQUFLLFlBQVk7QUFBQSxJQUN6QztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0osQ0FBQztBQUFBLEVBS00sTUFBTSxpQkFBaUIsTUFBTTtBQUFBLElBQ2hDLElBQUksU0FBUztBQUNULGFBQU8sS0FBSztBQUFBLElBQ2hCO0FBQUEsSUFDQSxZQUFZLFFBQVE7QUFDaEIsWUFBSztBQUNMLFdBQUssU0FBUyxDQUFBO0FBQ2QsV0FBSyxXQUFXLENBQUMsUUFBUTtBQUNyQixhQUFLLFNBQVMsQ0FBQyxHQUFHLEtBQUssUUFBUSxHQUFHO0FBQUEsTUFDdEM7QUFDQSxXQUFLLFlBQVksQ0FBQyxPQUFPLE9BQU87QUFDNUIsYUFBSyxTQUFTLENBQUMsR0FBRyxLQUFLLFFBQVEsR0FBRyxJQUFJO0FBQUEsTUFDMUM7QUFDQSxZQUFNLGNBQWMsV0FBVztBQUMvQixVQUFJLE9BQU8sZ0JBQWdCO0FBRXZCLGVBQU8sZUFBZSxNQUFNLFdBQVc7QUFBQSxNQUMzQyxPQUNLO0FBQ0QsYUFBSyxZQUFZO0FBQUEsTUFDckI7QUFDQSxXQUFLLE9BQU87QUFDWixXQUFLLFNBQVM7QUFBQSxJQUNsQjtBQUFBLElBQ0EsT0FBTyxTQUFTO0FBQ1osWUFBTSxTQUFTLFdBQ1gsU0FBVSxPQUFPO0FBQ2IsZUFBTyxNQUFNO0FBQUEsTUFDakI7QUFDSixZQUFNLGNBQWMsRUFBRSxTQUFTLEdBQUU7QUFDakMsWUFBTSxlQUFlLENBQUMsVUFBVTtBQUM1QixtQkFBVyxTQUFTLE1BQU0sUUFBUTtBQUM5QixjQUFJLE1BQU0sU0FBUyxpQkFBaUI7QUFDaEMsa0JBQU0sWUFBWSxJQUFJLFlBQVk7QUFBQSxVQUN0QyxXQUNTLE1BQU0sU0FBUyx1QkFBdUI7QUFDM0MseUJBQWEsTUFBTSxlQUFlO0FBQUEsVUFDdEMsV0FDUyxNQUFNLFNBQVMscUJBQXFCO0FBQ3pDLHlCQUFhLE1BQU0sY0FBYztBQUFBLFVBQ3JDLFdBQ1MsTUFBTSxLQUFLLFdBQVcsR0FBRztBQUM5Qix3QkFBWSxRQUFRLEtBQUssT0FBTyxLQUFLLENBQUM7QUFBQSxVQUMxQyxPQUNLO0FBQ0QsZ0JBQUksT0FBTztBQUNYLGdCQUFJLElBQUk7QUFDUixtQkFBTyxJQUFJLE1BQU0sS0FBSyxRQUFRO0FBQzFCLG9CQUFNLEtBQUssTUFBTSxLQUFLLENBQUM7QUFDdkIsb0JBQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxTQUFTO0FBQzNDLGtCQUFJLENBQUMsVUFBVTtBQUNYLHFCQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRTtBQUFBLGNBUXhDLE9BQ0s7QUFDRCxxQkFBSyxFQUFFLElBQUksS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUU7QUFDcEMscUJBQUssRUFBRSxFQUFFLFFBQVEsS0FBSyxPQUFPLEtBQUssQ0FBQztBQUFBLGNBQ3ZDO0FBQ0EscUJBQU8sS0FBSyxFQUFFO0FBQ2Q7QUFBQSxZQUNKO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQ0EsbUJBQWEsSUFBSTtBQUNqQixhQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0EsT0FBTyxPQUFPLE9BQU87QUFDakIsVUFBSSxFQUFFLGlCQUFpQixXQUFXO0FBQzlCLGNBQU0sSUFBSSxNQUFNLG1CQUFtQixLQUFLLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0o7QUFBQSxJQUNBLFdBQVc7QUFDUCxhQUFPLEtBQUs7QUFBQSxJQUNoQjtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssdUJBQXVCLENBQUM7QUFBQSxJQUNwRTtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxLQUFLLE9BQU8sV0FBVztBQUFBLElBQ2xDO0FBQUEsSUFDQSxRQUFRLFNBQVMsQ0FBQyxVQUFVLE1BQU0sU0FBUztBQUN2QyxZQUFNLGNBQWMsQ0FBQTtBQUNwQixZQUFNLGFBQWEsQ0FBQTtBQUNuQixpQkFBVyxPQUFPLEtBQUssUUFBUTtBQUMzQixZQUFJLElBQUksS0FBSyxTQUFTLEdBQUc7QUFDckIsZ0JBQU0sVUFBVSxJQUFJLEtBQUssQ0FBQztBQUMxQixzQkFBWSxPQUFPLElBQUksWUFBWSxPQUFPLEtBQUssQ0FBQTtBQUMvQyxzQkFBWSxPQUFPLEVBQUUsS0FBSyxPQUFPLEdBQUcsQ0FBQztBQUFBLFFBQ3pDLE9BQ0s7QUFDRCxxQkFBVyxLQUFLLE9BQU8sR0FBRyxDQUFDO0FBQUEsUUFDL0I7QUFBQSxNQUNKO0FBQ0EsYUFBTyxFQUFFLFlBQVksWUFBVztBQUFBLElBQ3BDO0FBQUEsSUFDQSxJQUFJLGFBQWE7QUFDYixhQUFPLEtBQUssUUFBTztBQUFBLElBQ3ZCO0FBQUEsRUFDSjtBQUNBLFdBQVMsU0FBUyxDQUFDLFdBQVc7QUFDMUIsVUFBTSxRQUFRLElBQUksU0FBUyxNQUFNO0FBQ2pDLFdBQU87QUFBQSxFQUNYO0FDbElBLFFBQU0sV0FBVyxDQUFDLE9BQU8sU0FBUztBQUM5QixRQUFJO0FBQ0osWUFBUSxNQUFNLE1BQUk7QUFBQSxNQUNkLEtBQUssYUFBYTtBQUNkLFlBQUksTUFBTSxhQUFhLGNBQWMsV0FBVztBQUM1QyxvQkFBVTtBQUFBLFFBQ2QsT0FDSztBQUNELG9CQUFVLFlBQVksTUFBTSxRQUFRLGNBQWMsTUFBTSxRQUFRO0FBQUEsUUFDcEU7QUFDQTtBQUFBLE1BQ0osS0FBSyxhQUFhO0FBQ2Qsa0JBQVUsbUNBQW1DLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxxQkFBcUIsQ0FBQztBQUN2RztBQUFBLE1BQ0osS0FBSyxhQUFhO0FBQ2Qsa0JBQVUsa0NBQWtDLEtBQUssV0FBVyxNQUFNLE1BQU0sSUFBSSxDQUFDO0FBQzdFO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVTtBQUNWO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVSx5Q0FBeUMsS0FBSyxXQUFXLE1BQU0sT0FBTyxDQUFDO0FBQ2pGO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVSxnQ0FBZ0MsS0FBSyxXQUFXLE1BQU0sT0FBTyxDQUFDLGVBQWUsTUFBTSxRQUFRO0FBQ3JHO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVTtBQUNWO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVTtBQUNWO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVTtBQUNWO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxZQUFJLE9BQU8sTUFBTSxlQUFlLFVBQVU7QUFDdEMsY0FBSSxjQUFjLE1BQU0sWUFBWTtBQUNoQyxzQkFBVSxnQ0FBZ0MsTUFBTSxXQUFXLFFBQVE7QUFDbkUsZ0JBQUksT0FBTyxNQUFNLFdBQVcsYUFBYSxVQUFVO0FBQy9DLHdCQUFVLEdBQUcsT0FBTyxzREFBc0QsTUFBTSxXQUFXLFFBQVE7QUFBQSxZQUN2RztBQUFBLFVBQ0osV0FDUyxnQkFBZ0IsTUFBTSxZQUFZO0FBQ3ZDLHNCQUFVLG1DQUFtQyxNQUFNLFdBQVcsVUFBVTtBQUFBLFVBQzVFLFdBQ1MsY0FBYyxNQUFNLFlBQVk7QUFDckMsc0JBQVUsaUNBQWlDLE1BQU0sV0FBVyxRQUFRO0FBQUEsVUFDeEUsT0FDSztBQUNELGlCQUFLLFlBQVksTUFBTSxVQUFVO0FBQUEsVUFDckM7QUFBQSxRQUNKLFdBQ1MsTUFBTSxlQUFlLFNBQVM7QUFDbkMsb0JBQVUsV0FBVyxNQUFNLFVBQVU7QUFBQSxRQUN6QyxPQUNLO0FBQ0Qsb0JBQVU7QUFBQSxRQUNkO0FBQ0E7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLFlBQUksTUFBTSxTQUFTO0FBQ2Ysb0JBQVUsc0JBQXNCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsSUFBSSxNQUFNLE9BQU87QUFBQSxpQkFDaEgsTUFBTSxTQUFTO0FBQ3BCLG9CQUFVLHVCQUF1QixNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLElBQUksTUFBTSxPQUFPO0FBQUEsaUJBQzVHLE1BQU0sU0FBUztBQUNwQixvQkFBVSxrQkFBa0IsTUFBTSxRQUFRLHNCQUFzQixNQUFNLFlBQVksOEJBQThCLGVBQWUsR0FBRyxNQUFNLE9BQU87QUFBQSxpQkFDMUksTUFBTSxTQUFTO0FBQ3BCLG9CQUFVLGtCQUFrQixNQUFNLFFBQVEsc0JBQXNCLE1BQU0sWUFBWSw4QkFBOEIsZUFBZSxHQUFHLE1BQU0sT0FBTztBQUFBLGlCQUMxSSxNQUFNLFNBQVM7QUFDcEIsb0JBQVUsZ0JBQWdCLE1BQU0sUUFBUSxzQkFBc0IsTUFBTSxZQUFZLDhCQUE4QixlQUFlLEdBQUcsSUFBSSxLQUFLLE9BQU8sTUFBTSxPQUFPLENBQUMsQ0FBQztBQUFBO0FBRS9KLG9CQUFVO0FBQ2Q7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLFlBQUksTUFBTSxTQUFTO0FBQ2Ysb0JBQVUsc0JBQXNCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxZQUFZLFdBQVcsSUFBSSxNQUFNLE9BQU87QUFBQSxpQkFDL0csTUFBTSxTQUFTO0FBQ3BCLG9CQUFVLHVCQUF1QixNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksWUFBWSxPQUFPLElBQUksTUFBTSxPQUFPO0FBQUEsaUJBQzVHLE1BQU0sU0FBUztBQUNwQixvQkFBVSxrQkFBa0IsTUFBTSxRQUFRLFlBQVksTUFBTSxZQUFZLDBCQUEwQixXQUFXLElBQUksTUFBTSxPQUFPO0FBQUEsaUJBQ3pILE1BQU0sU0FBUztBQUNwQixvQkFBVSxrQkFBa0IsTUFBTSxRQUFRLFlBQVksTUFBTSxZQUFZLDBCQUEwQixXQUFXLElBQUksTUFBTSxPQUFPO0FBQUEsaUJBQ3pILE1BQU0sU0FBUztBQUNwQixvQkFBVSxnQkFBZ0IsTUFBTSxRQUFRLFlBQVksTUFBTSxZQUFZLDZCQUE2QixjQUFjLElBQUksSUFBSSxLQUFLLE9BQU8sTUFBTSxPQUFPLENBQUMsQ0FBQztBQUFBO0FBRXBKLG9CQUFVO0FBQ2Q7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLGtCQUFVO0FBQ1Y7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLGtCQUFVO0FBQ1Y7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLGtCQUFVLGdDQUFnQyxNQUFNLFVBQVU7QUFDMUQ7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLGtCQUFVO0FBQ1Y7QUFBQSxNQUNKO0FBQ0ksa0JBQVUsS0FBSztBQUNmLGFBQUssWUFBWSxLQUFLO0FBQUEsSUFDbEM7QUFDSSxXQUFPLEVBQUUsUUFBTztBQUFBLEVBQ3BCO0FDMUdBLE1BQUksbUJBQW1CQztBQUtoQixXQUFTLGNBQWM7QUFDMUIsV0FBTztBQUFBLEVBQ1g7QUNOTyxRQUFNLFlBQVksQ0FBQyxXQUFXO0FBQ2pDLFVBQU0sRUFBRSxNQUFNLE1BQU0sV0FBVyxVQUFTLElBQUs7QUFDN0MsVUFBTSxXQUFXLENBQUMsR0FBRyxNQUFNLEdBQUksVUFBVSxRQUFRLENBQUEsQ0FBRztBQUNwRCxVQUFNLFlBQVk7QUFBQSxNQUNkLEdBQUc7QUFBQSxNQUNILE1BQU07QUFBQSxJQUNkO0FBQ0ksUUFBSSxVQUFVLFlBQVksUUFBVztBQUNqQyxhQUFPO0FBQUEsUUFDSCxHQUFHO0FBQUEsUUFDSCxNQUFNO0FBQUEsUUFDTixTQUFTLFVBQVU7QUFBQSxNQUMvQjtBQUFBLElBQ0k7QUFDQSxRQUFJLGVBQWU7QUFDbkIsVUFBTSxPQUFPLFVBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDakIsTUFBSyxFQUNMLFFBQU87QUFDWixlQUFXLE9BQU8sTUFBTTtBQUNwQixxQkFBZSxJQUFJLFdBQVcsRUFBRSxNQUFNLGNBQWMsYUFBWSxDQUFFLEVBQUU7QUFBQSxJQUN4RTtBQUNBLFdBQU87QUFBQSxNQUNILEdBQUc7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNqQjtBQUFBLEVBQ0E7QUFFTyxXQUFTLGtCQUFrQixLQUFLLFdBQVc7QUFDOUMsVUFBTSxjQUFjLFlBQVc7QUFDL0IsVUFBTSxRQUFRLFVBQVU7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsTUFBTSxJQUFJO0FBQUEsTUFDVixNQUFNLElBQUk7QUFBQSxNQUNWLFdBQVc7QUFBQSxRQUNQLElBQUksT0FBTztBQUFBO0FBQUEsUUFDWCxJQUFJO0FBQUE7QUFBQSxRQUNKO0FBQUE7QUFBQSxRQUNBLGdCQUFnQkEsV0FBa0IsU0FBWUE7QUFBQUE7QUFBQUEsTUFDMUQsRUFBVSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQzNCLENBQUs7QUFDRCxRQUFJLE9BQU8sT0FBTyxLQUFLLEtBQUs7QUFBQSxFQUNoQztBQUFBLEVBQ08sTUFBTSxZQUFZO0FBQUEsSUFDckIsY0FBYztBQUNWLFdBQUssUUFBUTtBQUFBLElBQ2pCO0FBQUEsSUFDQSxRQUFRO0FBQ0osVUFBSSxLQUFLLFVBQVU7QUFDZixhQUFLLFFBQVE7QUFBQSxJQUNyQjtBQUFBLElBQ0EsUUFBUTtBQUNKLFVBQUksS0FBSyxVQUFVO0FBQ2YsYUFBSyxRQUFRO0FBQUEsSUFDckI7QUFBQSxJQUNBLE9BQU8sV0FBVyxRQUFRLFNBQVM7QUFDL0IsWUFBTSxhQUFhLENBQUE7QUFDbkIsaUJBQVcsS0FBSyxTQUFTO0FBQ3JCLFlBQUksRUFBRSxXQUFXO0FBQ2IsaUJBQU87QUFDWCxZQUFJLEVBQUUsV0FBVztBQUNiLGlCQUFPLE1BQUs7QUFDaEIsbUJBQVcsS0FBSyxFQUFFLEtBQUs7QUFBQSxNQUMzQjtBQUNBLGFBQU8sRUFBRSxRQUFRLE9BQU8sT0FBTyxPQUFPLFdBQVU7QUFBQSxJQUNwRDtBQUFBLElBQ0EsYUFBYSxpQkFBaUIsUUFBUSxPQUFPO0FBQ3pDLFlBQU0sWUFBWSxDQUFBO0FBQ2xCLGlCQUFXLFFBQVEsT0FBTztBQUN0QixjQUFNLE1BQU0sTUFBTSxLQUFLO0FBQ3ZCLGNBQU0sUUFBUSxNQUFNLEtBQUs7QUFDekIsa0JBQVUsS0FBSztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsUUFDaEIsQ0FBYTtBQUFBLE1BQ0w7QUFDQSxhQUFPLFlBQVksZ0JBQWdCLFFBQVEsU0FBUztBQUFBLElBQ3hEO0FBQUEsSUFDQSxPQUFPLGdCQUFnQixRQUFRLE9BQU87QUFDbEMsWUFBTSxjQUFjLENBQUE7QUFDcEIsaUJBQVcsUUFBUSxPQUFPO0FBQ3RCLGNBQU0sRUFBRSxLQUFLLE1BQUssSUFBSztBQUN2QixZQUFJLElBQUksV0FBVztBQUNmLGlCQUFPO0FBQ1gsWUFBSSxNQUFNLFdBQVc7QUFDakIsaUJBQU87QUFDWCxZQUFJLElBQUksV0FBVztBQUNmLGlCQUFPLE1BQUs7QUFDaEIsWUFBSSxNQUFNLFdBQVc7QUFDakIsaUJBQU8sTUFBSztBQUNoQixZQUFJLElBQUksVUFBVSxnQkFBZ0IsT0FBTyxNQUFNLFVBQVUsZUFBZSxLQUFLLFlBQVk7QUFDckYsc0JBQVksSUFBSSxLQUFLLElBQUksTUFBTTtBQUFBLFFBQ25DO0FBQUEsTUFDSjtBQUNBLGFBQU8sRUFBRSxRQUFRLE9BQU8sT0FBTyxPQUFPLFlBQVc7QUFBQSxJQUNyRDtBQUFBLEVBQ0o7QUFDTyxRQUFNLFVBQVUsT0FBTyxPQUFPO0FBQUEsSUFDakMsUUFBUTtBQUFBLEVBQ1osQ0FBQztBQUNNLFFBQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLFNBQVMsTUFBSztBQUNsRCxRQUFNLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxTQUFTLE1BQUs7QUFDL0MsUUFBTSxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDdEMsUUFBTSxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDcEMsUUFBTSxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDcEMsUUFBTSxVQUFVLENBQUMsTUFBTSxPQUFPLFlBQVksZUFBZSxhQUFhO0FDNUd0RSxNQUFJO0FBQ1gsR0FBQyxTQUFVQyxZQUFXO0FBQ2xCLElBQUFBLFdBQVUsV0FBVyxDQUFDLFlBQVksT0FBTyxZQUFZLFdBQVcsRUFBRSxZQUFZLFdBQVcsQ0FBQTtBQUV6RixJQUFBQSxXQUFVLFdBQVcsQ0FBQyxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsU0FBUztBQUFBLEVBQ3ZGLEdBQUcsY0FBYyxZQUFZLENBQUEsRUFBRztBQUFBLEVDQWhDLE1BQU0sbUJBQW1CO0FBQUEsSUFDckIsWUFBWSxRQUFRLE9BQU8sTUFBTSxLQUFLO0FBQ2xDLFdBQUssY0FBYyxDQUFBO0FBQ25CLFdBQUssU0FBUztBQUNkLFdBQUssT0FBTztBQUNaLFdBQUssUUFBUTtBQUNiLFdBQUssT0FBTztBQUFBLElBQ2hCO0FBQUEsSUFDQSxJQUFJLE9BQU87QUFDUCxVQUFJLENBQUMsS0FBSyxZQUFZLFFBQVE7QUFDMUIsWUFBSSxNQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUc7QUFDMUIsZUFBSyxZQUFZLEtBQUssR0FBRyxLQUFLLE9BQU8sR0FBRyxLQUFLLElBQUk7QUFBQSxRQUNyRCxPQUNLO0FBQ0QsZUFBSyxZQUFZLEtBQUssR0FBRyxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBQUEsUUFDbEQ7QUFBQSxNQUNKO0FBQ0EsYUFBTyxLQUFLO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBQ0EsUUFBTSxlQUFlLENBQUMsS0FBS1YsWUFBVztBQUNsQyxRQUFJLFFBQVFBLE9BQU0sR0FBRztBQUNqQixhQUFPLEVBQUUsU0FBUyxNQUFNLE1BQU1BLFFBQU8sTUFBSztBQUFBLElBQzlDLE9BQ0s7QUFDRCxVQUFJLENBQUMsSUFBSSxPQUFPLE9BQU8sUUFBUTtBQUMzQixjQUFNLElBQUksTUFBTSwyQ0FBMkM7QUFBQSxNQUMvRDtBQUNBLGFBQU87QUFBQSxRQUNILFNBQVM7QUFBQSxRQUNULElBQUksUUFBUTtBQUNSLGNBQUksS0FBSztBQUNMLG1CQUFPLEtBQUs7QUFDaEIsZ0JBQU0sUUFBUSxJQUFJLFNBQVMsSUFBSSxPQUFPLE1BQU07QUFDNUMsZUFBSyxTQUFTO0FBQ2QsaUJBQU8sS0FBSztBQUFBLFFBQ2hCO0FBQUEsTUFDWjtBQUFBLElBQ0k7QUFBQSxFQUNKO0FBQ0EsV0FBUyxvQkFBb0IsUUFBUTtBQUNqQyxRQUFJLENBQUM7QUFDRCxhQUFPLENBQUE7QUFDWCxVQUFNLEVBQUUsVUFBQVcsV0FBVSxvQkFBb0IsZ0JBQWdCLFlBQVcsSUFBSztBQUN0RSxRQUFJQSxjQUFhLHNCQUFzQixpQkFBaUI7QUFDcEQsWUFBTSxJQUFJLE1BQU0sMEZBQTBGO0FBQUEsSUFDOUc7QUFDQSxRQUFJQTtBQUNBLGFBQU8sRUFBRSxVQUFVQSxXQUFVLFlBQVc7QUFDNUMsVUFBTSxZQUFZLENBQUMsS0FBSyxRQUFRO0FBQzVCLFlBQU0sRUFBRSxRQUFPLElBQUs7QUFDcEIsVUFBSSxJQUFJLFNBQVMsc0JBQXNCO0FBQ25DLGVBQU8sRUFBRSxTQUFTLFdBQVcsSUFBSSxhQUFZO0FBQUEsTUFDakQ7QUFDQSxVQUFJLE9BQU8sSUFBSSxTQUFTLGFBQWE7QUFDakMsZUFBTyxFQUFFLFNBQVMsV0FBVyxrQkFBa0IsSUFBSSxhQUFZO0FBQUEsTUFDbkU7QUFDQSxVQUFJLElBQUksU0FBUztBQUNiLGVBQU8sRUFBRSxTQUFTLElBQUksYUFBWTtBQUN0QyxhQUFPLEVBQUUsU0FBUyxXQUFXLHNCQUFzQixJQUFJLGFBQVk7QUFBQSxJQUN2RTtBQUNBLFdBQU8sRUFBRSxVQUFVLFdBQVcsWUFBVztBQUFBLEVBQzdDO0FBQUEsRUFDTyxNQUFNLFFBQVE7QUFBQSxJQUNqQixJQUFJLGNBQWM7QUFDZCxhQUFPLEtBQUssS0FBSztBQUFBLElBQ3JCO0FBQUEsSUFDQSxTQUFTLE9BQU87QUFDWixhQUFPLGNBQWMsTUFBTSxJQUFJO0FBQUEsSUFDbkM7QUFBQSxJQUNBLGdCQUFnQixPQUFPLEtBQUs7QUFDeEIsYUFBUSxPQUFPO0FBQUEsUUFDWCxRQUFRLE1BQU0sT0FBTztBQUFBLFFBQ3JCLE1BQU0sTUFBTTtBQUFBLFFBQ1osWUFBWSxjQUFjLE1BQU0sSUFBSTtBQUFBLFFBQ3BDLGdCQUFnQixLQUFLLEtBQUs7QUFBQSxRQUMxQixNQUFNLE1BQU07QUFBQSxRQUNaLFFBQVEsTUFBTTtBQUFBLE1BQzFCO0FBQUEsSUFDSTtBQUFBLElBQ0Esb0JBQW9CLE9BQU87QUFDdkIsYUFBTztBQUFBLFFBQ0gsUUFBUSxJQUFJLFlBQVc7QUFBQSxRQUN2QixLQUFLO0FBQUEsVUFDRCxRQUFRLE1BQU0sT0FBTztBQUFBLFVBQ3JCLE1BQU0sTUFBTTtBQUFBLFVBQ1osWUFBWSxjQUFjLE1BQU0sSUFBSTtBQUFBLFVBQ3BDLGdCQUFnQixLQUFLLEtBQUs7QUFBQSxVQUMxQixNQUFNLE1BQU07QUFBQSxVQUNaLFFBQVEsTUFBTTtBQUFBLFFBQzlCO0FBQUEsTUFDQTtBQUFBLElBQ0k7QUFBQSxJQUNBLFdBQVcsT0FBTztBQUNkLFlBQU1YLFVBQVMsS0FBSyxPQUFPLEtBQUs7QUFDaEMsVUFBSSxRQUFRQSxPQUFNLEdBQUc7QUFDakIsY0FBTSxJQUFJLE1BQU0sd0NBQXdDO0FBQUEsTUFDNUQ7QUFDQSxhQUFPQTtBQUFBLElBQ1g7QUFBQSxJQUNBLFlBQVksT0FBTztBQUNmLFlBQU1BLFVBQVMsS0FBSyxPQUFPLEtBQUs7QUFDaEMsYUFBTyxRQUFRLFFBQVFBLE9BQU07QUFBQSxJQUNqQztBQUFBLElBQ0EsTUFBTSxNQUFNLFFBQVE7QUFDaEIsWUFBTUEsVUFBUyxLQUFLLFVBQVUsTUFBTSxNQUFNO0FBQzFDLFVBQUlBLFFBQU87QUFDUCxlQUFPQSxRQUFPO0FBQ2xCLFlBQU1BLFFBQU87QUFBQSxJQUNqQjtBQUFBLElBQ0EsVUFBVSxNQUFNLFFBQVE7QUFDcEIsWUFBTSxNQUFNO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDSixRQUFRLENBQUE7QUFBQSxVQUNSLE9BQU8sUUFBUSxTQUFTO0FBQUEsVUFDeEIsb0JBQW9CLFFBQVE7QUFBQSxRQUM1QztBQUFBLFFBQ1ksTUFBTSxRQUFRLFFBQVEsQ0FBQTtBQUFBLFFBQ3RCLGdCQUFnQixLQUFLLEtBQUs7QUFBQSxRQUMxQixRQUFRO0FBQUEsUUFDUjtBQUFBLFFBQ0EsWUFBWSxjQUFjLElBQUk7QUFBQSxNQUMxQztBQUNRLFlBQU1BLFVBQVMsS0FBSyxXQUFXLEVBQUUsTUFBTSxNQUFNLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDcEUsYUFBTyxhQUFhLEtBQUtBLE9BQU07QUFBQSxJQUNuQztBQUFBLElBQ0EsWUFBWSxNQUFNO0FBQ2QsWUFBTSxNQUFNO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDSixRQUFRLENBQUE7QUFBQSxVQUNSLE9BQU8sQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO0FBQUEsUUFDM0M7QUFBQSxRQUNZLE1BQU0sQ0FBQTtBQUFBLFFBQ04sZ0JBQWdCLEtBQUssS0FBSztBQUFBLFFBQzFCLFFBQVE7QUFBQSxRQUNSO0FBQUEsUUFDQSxZQUFZLGNBQWMsSUFBSTtBQUFBLE1BQzFDO0FBQ1EsVUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFLE9BQU87QUFDMUIsWUFBSTtBQUNBLGdCQUFNQSxVQUFTLEtBQUssV0FBVyxFQUFFLE1BQU0sTUFBTSxDQUFBLEdBQUksUUFBUSxLQUFLO0FBQzlELGlCQUFPLFFBQVFBLE9BQU0sSUFDZjtBQUFBLFlBQ0UsT0FBT0EsUUFBTztBQUFBLFVBQ3RDLElBQ3NCO0FBQUEsWUFDRSxRQUFRLElBQUksT0FBTztBQUFBLFVBQzNDO0FBQUEsUUFDWSxTQUNPLEtBQUs7QUFDUixjQUFJLEtBQUssU0FBUyxZQUFXLEdBQUksU0FBUyxhQUFhLEdBQUc7QUFDdEQsaUJBQUssV0FBVyxFQUFFLFFBQVE7QUFBQSxVQUM5QjtBQUNBLGNBQUksU0FBUztBQUFBLFlBQ1QsUUFBUSxDQUFBO0FBQUEsWUFDUixPQUFPO0FBQUEsVUFDM0I7QUFBQSxRQUNZO0FBQUEsTUFDSjtBQUNBLGFBQU8sS0FBSyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUEsR0FBSSxRQUFRLElBQUcsQ0FBRSxFQUFFLEtBQUssQ0FBQ0EsWUFBVyxRQUFRQSxPQUFNLElBQ2xGO0FBQUEsUUFDRSxPQUFPQSxRQUFPO0FBQUEsTUFDOUIsSUFDYztBQUFBLFFBQ0UsUUFBUSxJQUFJLE9BQU87QUFBQSxNQUNuQyxDQUFhO0FBQUEsSUFDVDtBQUFBLElBQ0EsTUFBTSxXQUFXLE1BQU0sUUFBUTtBQUMzQixZQUFNQSxVQUFTLE1BQU0sS0FBSyxlQUFlLE1BQU0sTUFBTTtBQUNyRCxVQUFJQSxRQUFPO0FBQ1AsZUFBT0EsUUFBTztBQUNsQixZQUFNQSxRQUFPO0FBQUEsSUFDakI7QUFBQSxJQUNBLE1BQU0sZUFBZSxNQUFNLFFBQVE7QUFDL0IsWUFBTSxNQUFNO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDSixRQUFRLENBQUE7QUFBQSxVQUNSLG9CQUFvQixRQUFRO0FBQUEsVUFDNUIsT0FBTztBQUFBLFFBQ3ZCO0FBQUEsUUFDWSxNQUFNLFFBQVEsUUFBUSxDQUFBO0FBQUEsUUFDdEIsZ0JBQWdCLEtBQUssS0FBSztBQUFBLFFBQzFCLFFBQVE7QUFBQSxRQUNSO0FBQUEsUUFDQSxZQUFZLGNBQWMsSUFBSTtBQUFBLE1BQzFDO0FBQ1EsWUFBTSxtQkFBbUIsS0FBSyxPQUFPLEVBQUUsTUFBTSxNQUFNLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDMUUsWUFBTUEsVUFBUyxPQUFPLFFBQVEsZ0JBQWdCLElBQUksbUJBQW1CLFFBQVEsUUFBUSxnQkFBZ0I7QUFDckcsYUFBTyxhQUFhLEtBQUtBLE9BQU07QUFBQSxJQUNuQztBQUFBLElBQ0EsT0FBTyxPQUFPLFNBQVM7QUFDbkIsWUFBTSxxQkFBcUIsQ0FBQyxRQUFRO0FBQ2hDLFlBQUksT0FBTyxZQUFZLFlBQVksT0FBTyxZQUFZLGFBQWE7QUFDL0QsaUJBQU8sRUFBRSxRQUFPO0FBQUEsUUFDcEIsV0FDUyxPQUFPLFlBQVksWUFBWTtBQUNwQyxpQkFBTyxRQUFRLEdBQUc7QUFBQSxRQUN0QixPQUNLO0FBQ0QsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUNBLGFBQU8sS0FBSyxZQUFZLENBQUMsS0FBSyxRQUFRO0FBQ2xDLGNBQU1BLFVBQVMsTUFBTSxHQUFHO0FBQ3hCLGNBQU0sV0FBVyxNQUFNLElBQUksU0FBUztBQUFBLFVBQ2hDLE1BQU0sYUFBYTtBQUFBLFVBQ25CLEdBQUcsbUJBQW1CLEdBQUc7QUFBQSxRQUN6QyxDQUFhO0FBQ0QsWUFBSSxPQUFPLFlBQVksZUFBZUEsbUJBQWtCLFNBQVM7QUFDN0QsaUJBQU9BLFFBQU8sS0FBSyxDQUFDLFNBQVM7QUFDekIsZ0JBQUksQ0FBQyxNQUFNO0FBQ1AsdUJBQVE7QUFDUixxQkFBTztBQUFBLFlBQ1gsT0FDSztBQUNELHFCQUFPO0FBQUEsWUFDWDtBQUFBLFVBQ0osQ0FBQztBQUFBLFFBQ0w7QUFDQSxZQUFJLENBQUNBLFNBQVE7QUFDVCxtQkFBUTtBQUNSLGlCQUFPO0FBQUEsUUFDWCxPQUNLO0FBQ0QsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUFBLElBQ0EsV0FBVyxPQUFPLGdCQUFnQjtBQUM5QixhQUFPLEtBQUssWUFBWSxDQUFDLEtBQUssUUFBUTtBQUNsQyxZQUFJLENBQUMsTUFBTSxHQUFHLEdBQUc7QUFDYixjQUFJLFNBQVMsT0FBTyxtQkFBbUIsYUFBYSxlQUFlLEtBQUssR0FBRyxJQUFJLGNBQWM7QUFDN0YsaUJBQU87QUFBQSxRQUNYLE9BQ0s7QUFDRCxpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNMO0FBQUEsSUFDQSxZQUFZLFlBQVk7QUFDcEIsYUFBTyxJQUFJLFdBQVc7QUFBQSxRQUNsQixRQUFRO0FBQUEsUUFDUixVQUFVLHNCQUFzQjtBQUFBLFFBQ2hDLFFBQVEsRUFBRSxNQUFNLGNBQWMsV0FBVTtBQUFBLE1BQ3BELENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxZQUFZLFlBQVk7QUFDcEIsYUFBTyxLQUFLLFlBQVksVUFBVTtBQUFBLElBQ3RDO0FBQUEsSUFDQSxZQUFZLEtBQUs7QUFFYixXQUFLLE1BQU0sS0FBSztBQUNoQixXQUFLLE9BQU87QUFDWixXQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSTtBQUNqQyxXQUFLLFlBQVksS0FBSyxVQUFVLEtBQUssSUFBSTtBQUN6QyxXQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssSUFBSTtBQUMzQyxXQUFLLGlCQUFpQixLQUFLLGVBQWUsS0FBSyxJQUFJO0FBQ25ELFdBQUssTUFBTSxLQUFLLElBQUksS0FBSyxJQUFJO0FBQzdCLFdBQUssU0FBUyxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBQ25DLFdBQUssYUFBYSxLQUFLLFdBQVcsS0FBSyxJQUFJO0FBQzNDLFdBQUssY0FBYyxLQUFLLFlBQVksS0FBSyxJQUFJO0FBQzdDLFdBQUssV0FBVyxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3ZDLFdBQUssV0FBVyxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3ZDLFdBQUssVUFBVSxLQUFLLFFBQVEsS0FBSyxJQUFJO0FBQ3JDLFdBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBQ2pDLFdBQUssVUFBVSxLQUFLLFFBQVEsS0FBSyxJQUFJO0FBQ3JDLFdBQUssS0FBSyxLQUFLLEdBQUcsS0FBSyxJQUFJO0FBQzNCLFdBQUssTUFBTSxLQUFLLElBQUksS0FBSyxJQUFJO0FBQzdCLFdBQUssWUFBWSxLQUFLLFVBQVUsS0FBSyxJQUFJO0FBQ3pDLFdBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBQ2pDLFdBQUssVUFBVSxLQUFLLFFBQVEsS0FBSyxJQUFJO0FBQ3JDLFdBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBQ2pDLFdBQUssV0FBVyxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3ZDLFdBQUssT0FBTyxLQUFLLEtBQUssS0FBSyxJQUFJO0FBQy9CLFdBQUssV0FBVyxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3ZDLFdBQUssYUFBYSxLQUFLLFdBQVcsS0FBSyxJQUFJO0FBQzNDLFdBQUssYUFBYSxLQUFLLFdBQVcsS0FBSyxJQUFJO0FBQzNDLFdBQUssV0FBVyxJQUFJO0FBQUEsUUFDaEIsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsVUFBVSxDQUFDLFNBQVMsS0FBSyxXQUFXLEVBQUUsSUFBSTtBQUFBLE1BQ3REO0FBQUEsSUFDSTtBQUFBLElBQ0EsV0FBVztBQUNQLGFBQU8sWUFBWSxPQUFPLE1BQU0sS0FBSyxJQUFJO0FBQUEsSUFDN0M7QUFBQSxJQUNBLFdBQVc7QUFDUCxhQUFPLFlBQVksT0FBTyxNQUFNLEtBQUssSUFBSTtBQUFBLElBQzdDO0FBQUEsSUFDQSxVQUFVO0FBQ04sYUFBTyxLQUFLLFNBQVEsRUFBRyxTQUFRO0FBQUEsSUFDbkM7QUFBQSxJQUNBLFFBQVE7QUFDSixhQUFPLFNBQVMsT0FBTyxJQUFJO0FBQUEsSUFDL0I7QUFBQSxJQUNBLFVBQVU7QUFDTixhQUFPLFdBQVcsT0FBTyxNQUFNLEtBQUssSUFBSTtBQUFBLElBQzVDO0FBQUEsSUFDQSxHQUFHLFFBQVE7QUFDUCxhQUFPLFNBQVMsT0FBTyxDQUFDLE1BQU0sTUFBTSxHQUFHLEtBQUssSUFBSTtBQUFBLElBQ3BEO0FBQUEsSUFDQSxJQUFJLFVBQVU7QUFDVixhQUFPLGdCQUFnQixPQUFPLE1BQU0sVUFBVSxLQUFLLElBQUk7QUFBQSxJQUMzRDtBQUFBLElBQ0EsVUFBVSxXQUFXO0FBQ2pCLGFBQU8sSUFBSSxXQUFXO0FBQUEsUUFDbEIsR0FBRyxvQkFBb0IsS0FBSyxJQUFJO0FBQUEsUUFDaEMsUUFBUTtBQUFBLFFBQ1IsVUFBVSxzQkFBc0I7QUFBQSxRQUNoQyxRQUFRLEVBQUUsTUFBTSxhQUFhLFVBQVM7QUFBQSxNQUNsRCxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsUUFBUSxLQUFLO0FBQ1QsWUFBTSxtQkFBbUIsT0FBTyxRQUFRLGFBQWEsTUFBTSxNQUFNO0FBQ2pFLGFBQU8sSUFBSSxXQUFXO0FBQUEsUUFDbEIsR0FBRyxvQkFBb0IsS0FBSyxJQUFJO0FBQUEsUUFDaEMsV0FBVztBQUFBLFFBQ1gsY0FBYztBQUFBLFFBQ2QsVUFBVSxzQkFBc0I7QUFBQSxNQUM1QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsUUFBUTtBQUNKLGFBQU8sSUFBSSxXQUFXO0FBQUEsUUFDbEIsVUFBVSxzQkFBc0I7QUFBQSxRQUNoQyxNQUFNO0FBQUEsUUFDTixHQUFHLG9CQUFvQixLQUFLLElBQUk7QUFBQSxNQUM1QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsTUFBTSxLQUFLO0FBQ1AsWUFBTSxpQkFBaUIsT0FBTyxRQUFRLGFBQWEsTUFBTSxNQUFNO0FBQy9ELGFBQU8sSUFBSSxTQUFTO0FBQUEsUUFDaEIsR0FBRyxvQkFBb0IsS0FBSyxJQUFJO0FBQUEsUUFDaEMsV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFFBQ1osVUFBVSxzQkFBc0I7QUFBQSxNQUM1QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxhQUFhO0FBQ2xCLFlBQU0sT0FBTyxLQUFLO0FBQ2xCLGFBQU8sSUFBSSxLQUFLO0FBQUEsUUFDWixHQUFHLEtBQUs7QUFBQSxRQUNSO0FBQUEsTUFDWixDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSyxRQUFRO0FBQ1QsYUFBTyxZQUFZLE9BQU8sTUFBTSxNQUFNO0FBQUEsSUFDMUM7QUFBQSxJQUNBLFdBQVc7QUFDUCxhQUFPLFlBQVksT0FBTyxJQUFJO0FBQUEsSUFDbEM7QUFBQSxJQUNBLGFBQWE7QUFDVCxhQUFPLEtBQUssVUFBVSxNQUFTLEVBQUU7QUFBQSxJQUNyQztBQUFBLElBQ0EsYUFBYTtBQUNULGFBQU8sS0FBSyxVQUFVLElBQUksRUFBRTtBQUFBLElBQ2hDO0FBQUEsRUFDSjtBQUNBLFFBQU0sWUFBWTtBQUNsQixRQUFNLGFBQWE7QUFDbkIsUUFBTSxZQUFZO0FBR2xCLFFBQU0sWUFBWTtBQUNsQixRQUFNLGNBQWM7QUFDcEIsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sZ0JBQWdCO0FBYXRCLFFBQU0sYUFBYTtBQUluQixRQUFNLGNBQWM7QUFDcEIsTUFBSTtBQUVKLFFBQU0sWUFBWTtBQUNsQixRQUFNLGdCQUFnQjtBQUd0QixRQUFNLFlBQVk7QUFDbEIsUUFBTSxnQkFBZ0I7QUFFdEIsUUFBTSxjQUFjO0FBRXBCLFFBQU0saUJBQWlCO0FBTXZCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sWUFBWSxJQUFJLE9BQU8sSUFBSSxlQUFlLEdBQUc7QUFDbkQsV0FBUyxnQkFBZ0IsTUFBTTtBQUMzQixRQUFJLHFCQUFxQjtBQUN6QixRQUFJLEtBQUssV0FBVztBQUNoQiwyQkFBcUIsR0FBRyxrQkFBa0IsVUFBVSxLQUFLLFNBQVM7QUFBQSxJQUN0RSxXQUNTLEtBQUssYUFBYSxNQUFNO0FBQzdCLDJCQUFxQixHQUFHLGtCQUFrQjtBQUFBLElBQzlDO0FBQ0EsVUFBTSxvQkFBb0IsS0FBSyxZQUFZLE1BQU07QUFDakQsV0FBTyw4QkFBOEIsa0JBQWtCLElBQUksaUJBQWlCO0FBQUEsRUFDaEY7QUFDQSxXQUFTLFVBQVUsTUFBTTtBQUNyQixXQUFPLElBQUksT0FBTyxJQUFJLGdCQUFnQixJQUFJLENBQUMsR0FBRztBQUFBLEVBQ2xEO0FBRU8sV0FBUyxjQUFjLE1BQU07QUFDaEMsUUFBSSxRQUFRLEdBQUcsZUFBZSxJQUFJLGdCQUFnQixJQUFJLENBQUM7QUFDdkQsVUFBTSxPQUFPLENBQUE7QUFDYixTQUFLLEtBQUssS0FBSyxRQUFRLE9BQU8sR0FBRztBQUNqQyxRQUFJLEtBQUs7QUFDTCxXQUFLLEtBQUssc0JBQXNCO0FBQ3BDLFlBQVEsR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUNsQyxXQUFPLElBQUksT0FBTyxJQUFJLEtBQUssR0FBRztBQUFBLEVBQ2xDO0FBQ0EsV0FBUyxVQUFVLElBQUksU0FBUztBQUM1QixTQUFLLFlBQVksUUFBUSxDQUFDLFlBQVksVUFBVSxLQUFLLEVBQUUsR0FBRztBQUN0RCxhQUFPO0FBQUEsSUFDWDtBQUNBLFNBQUssWUFBWSxRQUFRLENBQUMsWUFBWSxVQUFVLEtBQUssRUFBRSxHQUFHO0FBQ3RELGFBQU87QUFBQSxJQUNYO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFDQSxXQUFTLFdBQVcsS0FBSyxLQUFLO0FBQzFCLFFBQUksQ0FBQyxTQUFTLEtBQUssR0FBRztBQUNsQixhQUFPO0FBQ1gsUUFBSTtBQUNBLFlBQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxNQUFNLEdBQUc7QUFDOUIsVUFBSSxDQUFDO0FBQ0QsZUFBTztBQUVYLFlBQU0sU0FBUyxPQUNWLFFBQVEsTUFBTSxHQUFHLEVBQ2pCLFFBQVEsTUFBTSxHQUFHLEVBQ2pCLE9BQU8sT0FBTyxVQUFXLElBQUssT0FBTyxTQUFTLEtBQU0sR0FBSSxHQUFHO0FBQ2hFLFlBQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUM7QUFDdkMsVUFBSSxPQUFPLFlBQVksWUFBWSxZQUFZO0FBQzNDLGVBQU87QUFDWCxVQUFJLFNBQVMsV0FBVyxTQUFTLFFBQVE7QUFDckMsZUFBTztBQUNYLFVBQUksQ0FBQyxRQUFRO0FBQ1QsZUFBTztBQUNYLFVBQUksT0FBTyxRQUFRLFFBQVE7QUFDdkIsZUFBTztBQUNYLGFBQU87QUFBQSxJQUNYLFFBQ007QUFDRixhQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0o7QUFDQSxXQUFTLFlBQVksSUFBSSxTQUFTO0FBQzlCLFNBQUssWUFBWSxRQUFRLENBQUMsWUFBWSxjQUFjLEtBQUssRUFBRSxHQUFHO0FBQzFELGFBQU87QUFBQSxJQUNYO0FBQ0EsU0FBSyxZQUFZLFFBQVEsQ0FBQyxZQUFZLGNBQWMsS0FBSyxFQUFFLEdBQUc7QUFDMUQsYUFBTztBQUFBLElBQ1g7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ08sTUFBTSxrQkFBa0IsUUFBUTtBQUFBLElBQ25DLE9BQU8sT0FBTztBQUNWLFVBQUksS0FBSyxLQUFLLFFBQVE7QUFDbEIsY0FBTSxPQUFPLE9BQU8sTUFBTSxJQUFJO0FBQUEsTUFDbEM7QUFDQSxZQUFNLGFBQWEsS0FBSyxTQUFTLEtBQUs7QUFDdEMsVUFBSSxlQUFlLGNBQWMsUUFBUTtBQUNyQyxjQUFNWSxPQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsMEJBQWtCQSxNQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVUEsS0FBSTtBQUFBLFFBQzlCLENBQWE7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUNBLFlBQU0sU0FBUyxJQUFJLFlBQVc7QUFDOUIsVUFBSSxNQUFNO0FBQ1YsaUJBQVcsU0FBUyxLQUFLLEtBQUssUUFBUTtBQUNsQyxZQUFJLE1BQU0sU0FBUyxPQUFPO0FBQ3RCLGNBQUksTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPO0FBQ2pDLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLGNBQ2YsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLGNBQ1gsT0FBTztBQUFBLGNBQ1AsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLE9BQU87QUFDM0IsY0FBSSxNQUFNLEtBQUssU0FBUyxNQUFNLE9BQU87QUFDakMsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsY0FDZixNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsY0FDUCxTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsVUFBVTtBQUM5QixnQkFBTSxTQUFTLE1BQU0sS0FBSyxTQUFTLE1BQU07QUFDekMsZ0JBQU0sV0FBVyxNQUFNLEtBQUssU0FBUyxNQUFNO0FBQzNDLGNBQUksVUFBVSxVQUFVO0FBQ3BCLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyxnQkFBSSxRQUFRO0FBQ1IsZ0NBQWtCLEtBQUs7QUFBQSxnQkFDbkIsTUFBTSxhQUFhO0FBQUEsZ0JBQ25CLFNBQVMsTUFBTTtBQUFBLGdCQUNmLE1BQU07QUFBQSxnQkFDTixXQUFXO0FBQUEsZ0JBQ1gsT0FBTztBQUFBLGdCQUNQLFNBQVMsTUFBTTtBQUFBLGNBQzNDLENBQXlCO0FBQUEsWUFDTCxXQUNTLFVBQVU7QUFDZixnQ0FBa0IsS0FBSztBQUFBLGdCQUNuQixNQUFNLGFBQWE7QUFBQSxnQkFDbkIsU0FBUyxNQUFNO0FBQUEsZ0JBQ2YsTUFBTTtBQUFBLGdCQUNOLFdBQVc7QUFBQSxnQkFDWCxPQUFPO0FBQUEsZ0JBQ1AsU0FBUyxNQUFNO0FBQUEsY0FDM0MsQ0FBeUI7QUFBQSxZQUNMO0FBQ0EsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxTQUFTO0FBQzdCLGNBQUksQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDOUIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFNBQVM7QUFDN0IsY0FBSSxDQUFDLFlBQVk7QUFDYix5QkFBYSxJQUFJLE9BQU8sYUFBYSxHQUFHO0FBQUEsVUFDNUM7QUFDQSxjQUFJLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQzlCLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLFlBQVk7QUFBQSxjQUNaLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxRQUFRO0FBQzVCLGNBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDN0Isa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFVBQVU7QUFDOUIsY0FBSSxDQUFDLFlBQVksS0FBSyxNQUFNLElBQUksR0FBRztBQUMvQixrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsUUFBUTtBQUM1QixjQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQzdCLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLFlBQVk7QUFBQSxjQUNaLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxTQUFTO0FBQzdCLGNBQUksQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDOUIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsY0FBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLElBQUksR0FBRztBQUM3QixrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsT0FBTztBQUMzQixjQUFJO0FBQ0EsZ0JBQUksSUFBSSxNQUFNLElBQUk7QUFBQSxVQUN0QixRQUNNO0FBQ0Ysa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFNBQVM7QUFDN0IsZ0JBQU0sTUFBTSxZQUFZO0FBQ3hCLGdCQUFNLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxJQUFJO0FBQzlDLGNBQUksQ0FBQyxZQUFZO0FBQ2Isa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsZ0JBQU0sT0FBTyxNQUFNLEtBQUssS0FBSTtBQUFBLFFBQ2hDLFdBQ1MsTUFBTSxTQUFTLFlBQVk7QUFDaEMsY0FBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLE1BQU0sT0FBTyxNQUFNLFFBQVEsR0FBRztBQUNuRCxrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixNQUFNLGFBQWE7QUFBQSxjQUNuQixZQUFZLEVBQUUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFNBQVE7QUFBQSxjQUM3RCxTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsZUFBZTtBQUNuQyxnQkFBTSxPQUFPLE1BQU0sS0FBSyxZQUFXO0FBQUEsUUFDdkMsV0FDUyxNQUFNLFNBQVMsZUFBZTtBQUNuQyxnQkFBTSxPQUFPLE1BQU0sS0FBSyxZQUFXO0FBQUEsUUFDdkMsV0FDUyxNQUFNLFNBQVMsY0FBYztBQUNsQyxjQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEdBQUc7QUFDckMsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsWUFBWSxFQUFFLFlBQVksTUFBTSxNQUFLO0FBQUEsY0FDckMsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFlBQVk7QUFDaEMsY0FBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLE1BQU0sS0FBSyxHQUFHO0FBQ25DLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFlBQVksRUFBRSxVQUFVLE1BQU0sTUFBSztBQUFBLGNBQ25DLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxZQUFZO0FBQ2hDLGdCQUFNLFFBQVEsY0FBYyxLQUFLO0FBQ2pDLGNBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDekIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsZ0JBQU0sUUFBUTtBQUNkLGNBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDekIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsZ0JBQU0sUUFBUSxVQUFVLEtBQUs7QUFDN0IsY0FBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksR0FBRztBQUN6QixrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixNQUFNLGFBQWE7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsWUFBWTtBQUNoQyxjQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQ2pDLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLFlBQVk7QUFBQSxjQUNaLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxNQUFNO0FBQzFCLGNBQUksQ0FBQyxVQUFVLE1BQU0sTUFBTSxNQUFNLE9BQU8sR0FBRztBQUN2QyxrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsT0FBTztBQUMzQixjQUFJLENBQUMsV0FBVyxNQUFNLE1BQU0sTUFBTSxHQUFHLEdBQUc7QUFDcEMsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsY0FBSSxDQUFDLFlBQVksTUFBTSxNQUFNLE1BQU0sT0FBTyxHQUFHO0FBQ3pDLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLFlBQVk7QUFBQSxjQUNaLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxVQUFVO0FBQzlCLGNBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDL0Isa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLGFBQWE7QUFDakMsY0FBSSxDQUFDLGVBQWUsS0FBSyxNQUFNLElBQUksR0FBRztBQUNsQyxrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osT0FDSztBQUNELGVBQUssWUFBWSxLQUFLO0FBQUEsUUFDMUI7QUFBQSxNQUNKO0FBQ0EsYUFBTyxFQUFFLFFBQVEsT0FBTyxPQUFPLE9BQU8sTUFBTSxLQUFJO0FBQUEsSUFDcEQ7QUFBQSxJQUNBLE9BQU8sT0FBTyxZQUFZLFNBQVM7QUFDL0IsYUFBTyxLQUFLLFdBQVcsQ0FBQyxTQUFTLE1BQU0sS0FBSyxJQUFJLEdBQUc7QUFBQSxRQUMvQztBQUFBLFFBQ0EsTUFBTSxhQUFhO0FBQUEsUUFDbkIsR0FBRyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQ3pDLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxVQUFVLE9BQU87QUFDYixhQUFPLElBQUksVUFBVTtBQUFBLFFBQ2pCLEdBQUcsS0FBSztBQUFBLFFBQ1IsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsS0FBSztBQUFBLE1BQy9DLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxNQUFNLFNBQVM7QUFDWCxhQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sU0FBUyxHQUFHLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUMzRTtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLE9BQU8sR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDekU7QUFBQSxJQUNBLE1BQU0sU0FBUztBQUNYLGFBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxTQUFTLEdBQUcsVUFBVSxTQUFTLE9BQU8sR0FBRztBQUFBLElBQzNFO0FBQUEsSUFDQSxLQUFLLFNBQVM7QUFDVixhQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sUUFBUSxHQUFHLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUMxRTtBQUFBLElBQ0EsT0FBTyxTQUFTO0FBQ1osYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLFVBQVUsR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDNUU7QUFBQSxJQUNBLEtBQUssU0FBUztBQUNWLGFBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxRQUFRLEdBQUcsVUFBVSxTQUFTLE9BQU8sR0FBRztBQUFBLElBQzFFO0FBQUEsSUFDQSxNQUFNLFNBQVM7QUFDWCxhQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sU0FBUyxHQUFHLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUMzRTtBQUFBLElBQ0EsS0FBSyxTQUFTO0FBQ1YsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLFFBQVEsR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDMUU7QUFBQSxJQUNBLE9BQU8sU0FBUztBQUNaLGFBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxVQUFVLEdBQUcsVUFBVSxTQUFTLE9BQU8sR0FBRztBQUFBLElBQzVFO0FBQUEsSUFDQSxVQUFVLFNBQVM7QUFFZixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLEdBQUcsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN6QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLE9BQU8sR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDekU7QUFBQSxJQUNBLEdBQUcsU0FBUztBQUNSLGFBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxNQUFNLEdBQUcsVUFBVSxTQUFTLE9BQU8sR0FBRztBQUFBLElBQ3hFO0FBQUEsSUFDQSxLQUFLLFNBQVM7QUFDVixhQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sUUFBUSxHQUFHLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUMxRTtBQUFBLElBQ0EsU0FBUyxTQUFTO0FBQ2QsVUFBSSxPQUFPLFlBQVksVUFBVTtBQUM3QixlQUFPLEtBQUssVUFBVTtBQUFBLFVBQ2xCLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLFFBQVE7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUN6QixDQUFhO0FBQUEsTUFDTDtBQUNBLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sV0FBVyxPQUFPLFNBQVMsY0FBYyxjQUFjLE9BQU8sU0FBUztBQUFBLFFBQ3ZFLFFBQVEsU0FBUyxVQUFVO0FBQUEsUUFDM0IsT0FBTyxTQUFTLFNBQVM7QUFBQSxRQUN6QixHQUFHLFVBQVUsU0FBUyxTQUFTLE9BQU87QUFBQSxNQUNsRCxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSyxTQUFTO0FBQ1YsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLFFBQVEsUUFBTyxDQUFFO0FBQUEsSUFDbkQ7QUFBQSxJQUNBLEtBQUssU0FBUztBQUNWLFVBQUksT0FBTyxZQUFZLFVBQVU7QUFDN0IsZUFBTyxLQUFLLFVBQVU7QUFBQSxVQUNsQixNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxTQUFTO0FBQUEsUUFDekIsQ0FBYTtBQUFBLE1BQ0w7QUFDQSxhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLFdBQVcsT0FBTyxTQUFTLGNBQWMsY0FBYyxPQUFPLFNBQVM7QUFBQSxRQUN2RSxHQUFHLFVBQVUsU0FBUyxTQUFTLE9BQU87QUFBQSxNQUNsRCxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxTQUFTO0FBQ2QsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLFlBQVksR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDOUU7QUFBQSxJQUNBLE1BQU0sT0FBTyxTQUFTO0FBQ2xCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBLEdBQUcsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN6QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxPQUFPLFNBQVM7QUFDckIsYUFBTyxLQUFLLFVBQVU7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0EsVUFBVSxTQUFTO0FBQUEsUUFDbkIsR0FBRyxVQUFVLFNBQVMsU0FBUyxPQUFPO0FBQUEsTUFDbEQsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFdBQVcsT0FBTyxTQUFTO0FBQ3ZCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBLEdBQUcsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN6QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxPQUFPLFNBQVM7QUFDckIsYUFBTyxLQUFLLFVBQVU7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0EsR0FBRyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQ3pDLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxJQUFJLFdBQVcsU0FBUztBQUNwQixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLEdBQUcsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN6QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxXQUFXLFNBQVM7QUFDcEIsYUFBTyxLQUFLLFVBQVU7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxHQUFHLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDekMsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLE9BQU8sS0FBSyxTQUFTO0FBQ2pCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsR0FBRyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQ3pDLENBQVM7QUFBQSxJQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJQSxTQUFTLFNBQVM7QUFDZCxhQUFPLEtBQUssSUFBSSxHQUFHLFVBQVUsU0FBUyxPQUFPLENBQUM7QUFBQSxJQUNsRDtBQUFBLElBQ0EsT0FBTztBQUNILGFBQU8sSUFBSSxVQUFVO0FBQUEsUUFDakIsR0FBRyxLQUFLO0FBQUEsUUFDUixRQUFRLENBQUMsR0FBRyxLQUFLLEtBQUssUUFBUSxFQUFFLE1BQU0sUUFBUTtBQUFBLE1BQzFELENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxjQUFjO0FBQ1YsYUFBTyxJQUFJLFVBQVU7QUFBQSxRQUNqQixHQUFHLEtBQUs7QUFBQSxRQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLEVBQUUsTUFBTSxlQUFlO0FBQUEsTUFDakUsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLGNBQWM7QUFDVixhQUFPLElBQUksVUFBVTtBQUFBLFFBQ2pCLEdBQUcsS0FBSztBQUFBLFFBQ1IsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsRUFBRSxNQUFNLGVBQWU7QUFBQSxNQUNqRSxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxhQUFhO0FBQ2IsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFVBQVU7QUFBQSxJQUNqRTtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxhQUFhO0FBQ2IsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFVBQVU7QUFBQSxJQUNqRTtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE9BQU87QUFBQSxJQUM5RDtBQUFBLElBQ0EsSUFBSSxRQUFRO0FBQ1IsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLEtBQUs7QUFBQSxJQUM1RDtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE9BQU87QUFBQSxJQUM5RDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxXQUFXO0FBQ1gsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUMvRDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE9BQU87QUFBQSxJQUM5RDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxPQUFPO0FBQ1AsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLElBQUk7QUFBQSxJQUMzRDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxXQUFXO0FBQ1gsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUMvRDtBQUFBLElBQ0EsSUFBSSxjQUFjO0FBRWQsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFdBQVc7QUFBQSxJQUNsRTtBQUFBLElBQ0EsSUFBSSxZQUFZO0FBQ1osVUFBSSxNQUFNO0FBQ1YsaUJBQVcsTUFBTSxLQUFLLEtBQUssUUFBUTtBQUMvQixZQUFJLEdBQUcsU0FBUyxPQUFPO0FBQ25CLGNBQUksUUFBUSxRQUFRLEdBQUcsUUFBUTtBQUMzQixrQkFBTSxHQUFHO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQSxJQUNBLElBQUksWUFBWTtBQUNaLFVBQUksTUFBTTtBQUNWLGlCQUFXLE1BQU0sS0FBSyxLQUFLLFFBQVE7QUFDL0IsWUFBSSxHQUFHLFNBQVMsT0FBTztBQUNuQixjQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVE7QUFDM0Isa0JBQU0sR0FBRztBQUFBLFFBQ2pCO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQUEsRUFDSjtBQUNBLFlBQVUsU0FBUyxDQUFDLFdBQVc7QUFDM0IsV0FBTyxJQUFJLFVBQVU7QUFBQSxNQUNqQixRQUFRLENBQUE7QUFBQSxNQUNSLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsUUFBUSxRQUFRLFVBQVU7QUFBQSxNQUMxQixHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFFQSxXQUFTLG1CQUFtQixLQUFLLE1BQU07QUFDbkMsVUFBTSxlQUFlLElBQUksU0FBUSxFQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJO0FBQ3pELFVBQU0sZ0JBQWdCLEtBQUssU0FBUSxFQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJO0FBQzNELFVBQU0sV0FBVyxjQUFjLGVBQWUsY0FBYztBQUM1RCxVQUFNLFNBQVMsT0FBTyxTQUFTLElBQUksUUFBUSxRQUFRLEVBQUUsUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUNyRSxVQUFNLFVBQVUsT0FBTyxTQUFTLEtBQUssUUFBUSxRQUFRLEVBQUUsUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUN2RSxXQUFRLFNBQVMsVUFBVyxNQUFNO0FBQUEsRUFDdEM7QUFBQSxFQUNPLE1BQU0sa0JBQWtCLFFBQVE7QUFBQSxJQUNuQyxjQUFjO0FBQ1YsWUFBTSxHQUFHLFNBQVM7QUFDbEIsV0FBSyxNQUFNLEtBQUs7QUFDaEIsV0FBSyxNQUFNLEtBQUs7QUFDaEIsV0FBSyxPQUFPLEtBQUs7QUFBQSxJQUNyQjtBQUFBLElBQ0EsT0FBTyxPQUFPO0FBQ1YsVUFBSSxLQUFLLEtBQUssUUFBUTtBQUNsQixjQUFNLE9BQU8sT0FBTyxNQUFNLElBQUk7QUFBQSxNQUNsQztBQUNBLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSztBQUN0QyxVQUFJLGVBQWUsY0FBYyxRQUFRO0FBQ3JDLGNBQU1BLE9BQU0sS0FBSyxnQkFBZ0IsS0FBSztBQUN0QywwQkFBa0JBLE1BQUs7QUFBQSxVQUNuQixNQUFNLGFBQWE7QUFBQSxVQUNuQixVQUFVLGNBQWM7QUFBQSxVQUN4QixVQUFVQSxLQUFJO0FBQUEsUUFDOUIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxNQUFNO0FBQ1YsWUFBTSxTQUFTLElBQUksWUFBVztBQUM5QixpQkFBVyxTQUFTLEtBQUssS0FBSyxRQUFRO0FBQ2xDLFlBQUksTUFBTSxTQUFTLE9BQU87QUFDdEIsY0FBSSxDQUFDLEtBQUssVUFBVSxNQUFNLElBQUksR0FBRztBQUM3QixrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixNQUFNLGFBQWE7QUFBQSxjQUNuQixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsT0FBTztBQUMzQixnQkFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxRQUFRLE1BQU0sUUFBUSxNQUFNO0FBQ2xGLGNBQUksVUFBVTtBQUNWLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLGNBQ2YsTUFBTTtBQUFBLGNBQ04sV0FBVyxNQUFNO0FBQUEsY0FDakIsT0FBTztBQUFBLGNBQ1AsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLE9BQU87QUFDM0IsZ0JBQU0sU0FBUyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLFFBQVEsTUFBTTtBQUNoRixjQUFJLFFBQVE7QUFDUixrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxjQUNmLE1BQU07QUFBQSxjQUNOLFdBQVcsTUFBTTtBQUFBLGNBQ2pCLE9BQU87QUFBQSxjQUNQLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxjQUFjO0FBQ2xDLGNBQUksbUJBQW1CLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxHQUFHO0FBQ25ELGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFlBQVksTUFBTTtBQUFBLGNBQ2xCLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxVQUFVO0FBQzlCLGNBQUksQ0FBQyxPQUFPLFNBQVMsTUFBTSxJQUFJLEdBQUc7QUFDOUIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLE9BQ0s7QUFDRCxlQUFLLFlBQVksS0FBSztBQUFBLFFBQzFCO0FBQUEsTUFDSjtBQUNBLGFBQU8sRUFBRSxRQUFRLE9BQU8sT0FBTyxPQUFPLE1BQU0sS0FBSTtBQUFBLElBQ3BEO0FBQUEsSUFDQSxJQUFJLE9BQU8sU0FBUztBQUNoQixhQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sTUFBTSxVQUFVLFNBQVMsT0FBTyxDQUFDO0FBQUEsSUFDeEU7QUFBQSxJQUNBLEdBQUcsT0FBTyxTQUFTO0FBQ2YsYUFBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLE9BQU8sVUFBVSxTQUFTLE9BQU8sQ0FBQztBQUFBLElBQ3pFO0FBQUEsSUFDQSxJQUFJLE9BQU8sU0FBUztBQUNoQixhQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sTUFBTSxVQUFVLFNBQVMsT0FBTyxDQUFDO0FBQUEsSUFDeEU7QUFBQSxJQUNBLEdBQUcsT0FBTyxTQUFTO0FBQ2YsYUFBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLE9BQU8sVUFBVSxTQUFTLE9BQU8sQ0FBQztBQUFBLElBQ3pFO0FBQUEsSUFDQSxTQUFTLE1BQU0sT0FBTyxXQUFXLFNBQVM7QUFDdEMsYUFBTyxJQUFJLFVBQVU7QUFBQSxRQUNqQixHQUFHLEtBQUs7QUFBQSxRQUNSLFFBQVE7QUFBQSxVQUNKLEdBQUcsS0FBSyxLQUFLO0FBQUEsVUFDYjtBQUFBLFlBQ0k7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0EsU0FBUyxVQUFVLFNBQVMsT0FBTztBQUFBLFVBQ3ZEO0FBQUEsUUFDQTtBQUFBLE1BQ0EsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFVBQVUsT0FBTztBQUNiLGFBQU8sSUFBSSxVQUFVO0FBQUEsUUFDakIsR0FBRyxLQUFLO0FBQUEsUUFDUixRQUFRLENBQUMsR0FBRyxLQUFLLEtBQUssUUFBUSxLQUFLO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLElBQUksU0FBUztBQUNULGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sU0FBUyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQy9DLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxTQUFTLFNBQVM7QUFDZCxhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFNBQVMsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUMvQyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxTQUFTO0FBQ2QsYUFBTyxLQUFLLFVBQVU7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxTQUFTLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFlBQVksU0FBUztBQUNqQixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFNBQVMsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUMvQyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsWUFBWSxTQUFTO0FBQ2pCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsU0FBUyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQy9DLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxXQUFXLE9BQU8sU0FBUztBQUN2QixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOO0FBQUEsUUFDQSxTQUFTLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLE9BQU8sU0FBUztBQUNaLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sU0FBUyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQy9DLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxLQUFLLFNBQVM7QUFDVixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU8sT0FBTztBQUFBLFFBQ2QsU0FBUyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQy9DLENBQVMsRUFBRSxVQUFVO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxPQUFPLE9BQU87QUFBQSxRQUNkLFNBQVMsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUMvQyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxXQUFXO0FBQ1gsVUFBSSxNQUFNO0FBQ1YsaUJBQVcsTUFBTSxLQUFLLEtBQUssUUFBUTtBQUMvQixZQUFJLEdBQUcsU0FBUyxPQUFPO0FBQ25CLGNBQUksUUFBUSxRQUFRLEdBQUcsUUFBUTtBQUMzQixrQkFBTSxHQUFHO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQSxJQUNBLElBQUksV0FBVztBQUNYLFVBQUksTUFBTTtBQUNWLGlCQUFXLE1BQU0sS0FBSyxLQUFLLFFBQVE7QUFDL0IsWUFBSSxHQUFHLFNBQVMsT0FBTztBQUNuQixjQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVE7QUFDM0Isa0JBQU0sR0FBRztBQUFBLFFBQ2pCO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFDQSxJQUFJLFFBQVE7QUFDUixhQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsU0FBVSxHQUFHLFNBQVMsZ0JBQWdCLEtBQUssVUFBVSxHQUFHLEtBQUssQ0FBRTtBQUFBLElBQ3RIO0FBQUEsSUFDQSxJQUFJLFdBQVc7QUFDWCxVQUFJLE1BQU07QUFDVixVQUFJLE1BQU07QUFDVixpQkFBVyxNQUFNLEtBQUssS0FBSyxRQUFRO0FBQy9CLFlBQUksR0FBRyxTQUFTLFlBQVksR0FBRyxTQUFTLFNBQVMsR0FBRyxTQUFTLGNBQWM7QUFDdkUsaUJBQU87QUFBQSxRQUNYLFdBQ1MsR0FBRyxTQUFTLE9BQU87QUFDeEIsY0FBSSxRQUFRLFFBQVEsR0FBRyxRQUFRO0FBQzNCLGtCQUFNLEdBQUc7QUFBQSxRQUNqQixXQUNTLEdBQUcsU0FBUyxPQUFPO0FBQ3hCLGNBQUksUUFBUSxRQUFRLEdBQUcsUUFBUTtBQUMzQixrQkFBTSxHQUFHO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQ0EsYUFBTyxPQUFPLFNBQVMsR0FBRyxLQUFLLE9BQU8sU0FBUyxHQUFHO0FBQUEsSUFDdEQ7QUFBQSxFQUNKO0FBQ0EsWUFBVSxTQUFTLENBQUMsV0FBVztBQUMzQixXQUFPLElBQUksVUFBVTtBQUFBLE1BQ2pCLFFBQVEsQ0FBQTtBQUFBLE1BQ1IsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxRQUFRLFFBQVEsVUFBVTtBQUFBLE1BQzFCLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxrQkFBa0IsUUFBUTtBQUFBLElBQ25DLGNBQWM7QUFDVixZQUFNLEdBQUcsU0FBUztBQUNsQixXQUFLLE1BQU0sS0FBSztBQUNoQixXQUFLLE1BQU0sS0FBSztBQUFBLElBQ3BCO0FBQUEsSUFDQSxPQUFPLE9BQU87QUFDVixVQUFJLEtBQUssS0FBSyxRQUFRO0FBQ2xCLFlBQUk7QUFDQSxnQkFBTSxPQUFPLE9BQU8sTUFBTSxJQUFJO0FBQUEsUUFDbEMsUUFDTTtBQUNGLGlCQUFPLEtBQUssaUJBQWlCLEtBQUs7QUFBQSxRQUN0QztBQUFBLE1BQ0o7QUFDQSxZQUFNLGFBQWEsS0FBSyxTQUFTLEtBQUs7QUFDdEMsVUFBSSxlQUFlLGNBQWMsUUFBUTtBQUNyQyxlQUFPLEtBQUssaUJBQWlCLEtBQUs7QUFBQSxNQUN0QztBQUNBLFVBQUksTUFBTTtBQUNWLFlBQU0sU0FBUyxJQUFJLFlBQVc7QUFDOUIsaUJBQVcsU0FBUyxLQUFLLEtBQUssUUFBUTtBQUNsQyxZQUFJLE1BQU0sU0FBUyxPQUFPO0FBQ3RCLGdCQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU07QUFDbEYsY0FBSSxVQUFVO0FBQ1Ysa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsTUFBTTtBQUFBLGNBQ04sU0FBUyxNQUFNO0FBQUEsY0FDZixXQUFXLE1BQU07QUFBQSxjQUNqQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsT0FBTztBQUMzQixnQkFBTSxTQUFTLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxRQUFRLE1BQU0sUUFBUSxNQUFNO0FBQ2hGLGNBQUksUUFBUTtBQUNSLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLE1BQU0sYUFBYTtBQUFBLGNBQ25CLE1BQU07QUFBQSxjQUNOLFNBQVMsTUFBTTtBQUFBLGNBQ2YsV0FBVyxNQUFNO0FBQUEsY0FDakIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLGNBQWM7QUFDbEMsY0FBSSxNQUFNLE9BQU8sTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFHO0FBQ3hDLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFlBQVksTUFBTTtBQUFBLGNBQ2xCLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixPQUNLO0FBQ0QsZUFBSyxZQUFZLEtBQUs7QUFBQSxRQUMxQjtBQUFBLE1BQ0o7QUFDQSxhQUFPLEVBQUUsUUFBUSxPQUFPLE9BQU8sT0FBTyxNQUFNLEtBQUk7QUFBQSxJQUNwRDtBQUFBLElBQ0EsaUJBQWlCLE9BQU87QUFDcEIsWUFBTSxNQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsd0JBQWtCLEtBQUs7QUFBQSxRQUNuQixNQUFNLGFBQWE7QUFBQSxRQUNuQixVQUFVLGNBQWM7QUFBQSxRQUN4QixVQUFVLElBQUk7QUFBQSxNQUMxQixDQUFTO0FBQ0QsYUFBTztBQUFBLElBQ1g7QUFBQSxJQUNBLElBQUksT0FBTyxTQUFTO0FBQ2hCLGFBQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxNQUFNLFVBQVUsU0FBUyxPQUFPLENBQUM7QUFBQSxJQUN4RTtBQUFBLElBQ0EsR0FBRyxPQUFPLFNBQVM7QUFDZixhQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sT0FBTyxVQUFVLFNBQVMsT0FBTyxDQUFDO0FBQUEsSUFDekU7QUFBQSxJQUNBLElBQUksT0FBTyxTQUFTO0FBQ2hCLGFBQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxNQUFNLFVBQVUsU0FBUyxPQUFPLENBQUM7QUFBQSxJQUN4RTtBQUFBLElBQ0EsR0FBRyxPQUFPLFNBQVM7QUFDZixhQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sT0FBTyxVQUFVLFNBQVMsT0FBTyxDQUFDO0FBQUEsSUFDekU7QUFBQSxJQUNBLFNBQVMsTUFBTSxPQUFPLFdBQVcsU0FBUztBQUN0QyxhQUFPLElBQUksVUFBVTtBQUFBLFFBQ2pCLEdBQUcsS0FBSztBQUFBLFFBQ1IsUUFBUTtBQUFBLFVBQ0osR0FBRyxLQUFLLEtBQUs7QUFBQSxVQUNiO0FBQUEsWUFDSTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQSxTQUFTLFVBQVUsU0FBUyxPQUFPO0FBQUEsVUFDdkQ7QUFBQSxRQUNBO0FBQUEsTUFDQSxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsVUFBVSxPQUFPO0FBQ2IsYUFBTyxJQUFJLFVBQVU7QUFBQSxRQUNqQixHQUFHLEtBQUs7QUFBQSxRQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLEtBQUs7QUFBQSxNQUMvQyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxTQUFTO0FBQ2QsYUFBTyxLQUFLLFVBQVU7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTixPQUFPLE9BQU8sQ0FBQztBQUFBLFFBQ2YsV0FBVztBQUFBLFFBQ1gsU0FBUyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQy9DLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxTQUFTLFNBQVM7QUFDZCxhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE9BQU8sT0FBTyxDQUFDO0FBQUEsUUFDZixXQUFXO0FBQUEsUUFDWCxTQUFTLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFlBQVksU0FBUztBQUNqQixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE9BQU8sT0FBTyxDQUFDO0FBQUEsUUFDZixXQUFXO0FBQUEsUUFDWCxTQUFTLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFlBQVksU0FBUztBQUNqQixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE9BQU8sT0FBTyxDQUFDO0FBQUEsUUFDZixXQUFXO0FBQUEsUUFDWCxTQUFTLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFdBQVcsT0FBTyxTQUFTO0FBQ3ZCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBLFNBQVMsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUMvQyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxXQUFXO0FBQ1gsVUFBSSxNQUFNO0FBQ1YsaUJBQVcsTUFBTSxLQUFLLEtBQUssUUFBUTtBQUMvQixZQUFJLEdBQUcsU0FBUyxPQUFPO0FBQ25CLGNBQUksUUFBUSxRQUFRLEdBQUcsUUFBUTtBQUMzQixrQkFBTSxHQUFHO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQSxJQUNBLElBQUksV0FBVztBQUNYLFVBQUksTUFBTTtBQUNWLGlCQUFXLE1BQU0sS0FBSyxLQUFLLFFBQVE7QUFDL0IsWUFBSSxHQUFHLFNBQVMsT0FBTztBQUNuQixjQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVE7QUFDM0Isa0JBQU0sR0FBRztBQUFBLFFBQ2pCO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQUEsRUFDSjtBQUNBLFlBQVUsU0FBUyxDQUFDLFdBQVc7QUFDM0IsV0FBTyxJQUFJLFVBQVU7QUFBQSxNQUNqQixRQUFRLENBQUE7QUFBQSxNQUNSLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsUUFBUSxRQUFRLFVBQVU7QUFBQSxNQUMxQixHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNPLE1BQU0sbUJBQW1CLFFBQVE7QUFBQSxJQUNwQyxPQUFPLE9BQU87QUFDVixVQUFJLEtBQUssS0FBSyxRQUFRO0FBQ2xCLGNBQU0sT0FBTyxRQUFRLE1BQU0sSUFBSTtBQUFBLE1BQ25DO0FBQ0EsWUFBTSxhQUFhLEtBQUssU0FBUyxLQUFLO0FBQ3RDLFVBQUksZUFBZSxjQUFjLFNBQVM7QUFDdEMsY0FBTSxNQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsMEJBQWtCLEtBQUs7QUFBQSxVQUNuQixNQUFNLGFBQWE7QUFBQSxVQUNuQixVQUFVLGNBQWM7QUFBQSxVQUN4QixVQUFVLElBQUk7QUFBQSxRQUM5QixDQUFhO0FBQ0QsZUFBTztBQUFBLE1BQ1g7QUFDQSxhQUFPLEdBQUcsTUFBTSxJQUFJO0FBQUEsSUFDeEI7QUFBQSxFQUNKO0FBQ0EsYUFBVyxTQUFTLENBQUMsV0FBVztBQUM1QixXQUFPLElBQUksV0FBVztBQUFBLE1BQ2xCLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsUUFBUSxRQUFRLFVBQVU7QUFBQSxNQUMxQixHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNPLE1BQU0sZ0JBQWdCLFFBQVE7QUFBQSxJQUNqQyxPQUFPLE9BQU87QUFDVixVQUFJLEtBQUssS0FBSyxRQUFRO0FBQ2xCLGNBQU0sT0FBTyxJQUFJLEtBQUssTUFBTSxJQUFJO0FBQUEsTUFDcEM7QUFDQSxZQUFNLGFBQWEsS0FBSyxTQUFTLEtBQUs7QUFDdEMsVUFBSSxlQUFlLGNBQWMsTUFBTTtBQUNuQyxjQUFNQSxPQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsMEJBQWtCQSxNQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVUEsS0FBSTtBQUFBLFFBQzlCLENBQWE7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksT0FBTyxNQUFNLE1BQU0sS0FBSyxRQUFPLENBQUUsR0FBRztBQUNwQyxjQUFNQSxPQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsMEJBQWtCQSxNQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsUUFDbkMsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsWUFBTSxTQUFTLElBQUksWUFBVztBQUM5QixVQUFJLE1BQU07QUFDVixpQkFBVyxTQUFTLEtBQUssS0FBSyxRQUFRO0FBQ2xDLFlBQUksTUFBTSxTQUFTLE9BQU87QUFDdEIsY0FBSSxNQUFNLEtBQUssUUFBTyxJQUFLLE1BQU0sT0FBTztBQUNwQyxrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxjQUNmLFdBQVc7QUFBQSxjQUNYLE9BQU87QUFBQSxjQUNQLFNBQVMsTUFBTTtBQUFBLGNBQ2YsTUFBTTtBQUFBLFlBQzlCLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxPQUFPO0FBQzNCLGNBQUksTUFBTSxLQUFLLFFBQU8sSUFBSyxNQUFNLE9BQU87QUFDcEMsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsY0FDZixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsY0FDUCxTQUFTLE1BQU07QUFBQSxjQUNmLE1BQU07QUFBQSxZQUM5QixDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osT0FDSztBQUNELGVBQUssWUFBWSxLQUFLO0FBQUEsUUFDMUI7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLFFBQ0gsUUFBUSxPQUFPO0FBQUEsUUFDZixPQUFPLElBQUksS0FBSyxNQUFNLEtBQUssUUFBTyxDQUFFO0FBQUEsTUFDaEQ7QUFBQSxJQUNJO0FBQUEsSUFDQSxVQUFVLE9BQU87QUFDYixhQUFPLElBQUksUUFBUTtBQUFBLFFBQ2YsR0FBRyxLQUFLO0FBQUEsUUFDUixRQUFRLENBQUMsR0FBRyxLQUFLLEtBQUssUUFBUSxLQUFLO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLElBQUksU0FBUyxTQUFTO0FBQ2xCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sT0FBTyxRQUFRLFFBQU87QUFBQSxRQUN0QixTQUFTLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLElBQUksU0FBUyxTQUFTO0FBQ2xCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sT0FBTyxRQUFRLFFBQU87QUFBQSxRQUN0QixTQUFTLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDL0MsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLElBQUksVUFBVTtBQUNWLFVBQUksTUFBTTtBQUNWLGlCQUFXLE1BQU0sS0FBSyxLQUFLLFFBQVE7QUFDL0IsWUFBSSxHQUFHLFNBQVMsT0FBTztBQUNuQixjQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVE7QUFDM0Isa0JBQU0sR0FBRztBQUFBLFFBQ2pCO0FBQUEsTUFDSjtBQUNBLGFBQU8sT0FBTyxPQUFPLElBQUksS0FBSyxHQUFHLElBQUk7QUFBQSxJQUN6QztBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsVUFBSSxNQUFNO0FBQ1YsaUJBQVcsTUFBTSxLQUFLLEtBQUssUUFBUTtBQUMvQixZQUFJLEdBQUcsU0FBUyxPQUFPO0FBQ25CLGNBQUksUUFBUSxRQUFRLEdBQUcsUUFBUTtBQUMzQixrQkFBTSxHQUFHO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQ0EsYUFBTyxPQUFPLE9BQU8sSUFBSSxLQUFLLEdBQUcsSUFBSTtBQUFBLElBQ3pDO0FBQUEsRUFDSjtBQUNBLFVBQVEsU0FBUyxDQUFDLFdBQVc7QUFDekIsV0FBTyxJQUFJLFFBQVE7QUFBQSxNQUNmLFFBQVEsQ0FBQTtBQUFBLE1BQ1IsUUFBUSxRQUFRLFVBQVU7QUFBQSxNQUMxQixVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxrQkFBa0IsUUFBUTtBQUFBLElBQ25DLE9BQU8sT0FBTztBQUNWLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSztBQUN0QyxVQUFJLGVBQWUsY0FBYyxRQUFRO0FBQ3JDLGNBQU0sTUFBTSxLQUFLLGdCQUFnQixLQUFLO0FBQ3RDLDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVSxJQUFJO0FBQUEsUUFDOUIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsYUFBTyxHQUFHLE1BQU0sSUFBSTtBQUFBLElBQ3hCO0FBQUEsRUFDSjtBQUNBLFlBQVUsU0FBUyxDQUFDLFdBQVc7QUFDM0IsV0FBTyxJQUFJLFVBQVU7QUFBQSxNQUNqQixVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxxQkFBcUIsUUFBUTtBQUFBLElBQ3RDLE9BQU8sT0FBTztBQUNWLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSztBQUN0QyxVQUFJLGVBQWUsY0FBYyxXQUFXO0FBQ3hDLGNBQU0sTUFBTSxLQUFLLGdCQUFnQixLQUFLO0FBQ3RDLDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVSxJQUFJO0FBQUEsUUFDOUIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsYUFBTyxHQUFHLE1BQU0sSUFBSTtBQUFBLElBQ3hCO0FBQUEsRUFDSjtBQUNBLGVBQWEsU0FBUyxDQUFDLFdBQVc7QUFDOUIsV0FBTyxJQUFJLGFBQWE7QUFBQSxNQUNwQixVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxnQkFBZ0IsUUFBUTtBQUFBLElBQ2pDLE9BQU8sT0FBTztBQUNWLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSztBQUN0QyxVQUFJLGVBQWUsY0FBYyxNQUFNO0FBQ25DLGNBQU0sTUFBTSxLQUFLLGdCQUFnQixLQUFLO0FBQ3RDLDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVSxJQUFJO0FBQUEsUUFDOUIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsYUFBTyxHQUFHLE1BQU0sSUFBSTtBQUFBLElBQ3hCO0FBQUEsRUFDSjtBQUNBLFVBQVEsU0FBUyxDQUFDLFdBQVc7QUFDekIsV0FBTyxJQUFJLFFBQVE7QUFBQSxNQUNmLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQUEsRUFDTyxNQUFNLGVBQWUsUUFBUTtBQUFBLElBQ2hDLGNBQWM7QUFDVixZQUFNLEdBQUcsU0FBUztBQUVsQixXQUFLLE9BQU87QUFBQSxJQUNoQjtBQUFBLElBQ0EsT0FBTyxPQUFPO0FBQ1YsYUFBTyxHQUFHLE1BQU0sSUFBSTtBQUFBLElBQ3hCO0FBQUEsRUFDSjtBQUNBLFNBQU8sU0FBUyxDQUFDLFdBQVc7QUFDeEIsV0FBTyxJQUFJLE9BQU87QUFBQSxNQUNkLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQUEsRUFDTyxNQUFNLG1CQUFtQixRQUFRO0FBQUEsSUFDcEMsY0FBYztBQUNWLFlBQU0sR0FBRyxTQUFTO0FBRWxCLFdBQUssV0FBVztBQUFBLElBQ3BCO0FBQUEsSUFDQSxPQUFPLE9BQU87QUFDVixhQUFPLEdBQUcsTUFBTSxJQUFJO0FBQUEsSUFDeEI7QUFBQSxFQUNKO0FBQ0EsYUFBVyxTQUFTLENBQUMsV0FBVztBQUM1QixXQUFPLElBQUksV0FBVztBQUFBLE1BQ2xCLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQUEsRUFDTyxNQUFNLGlCQUFpQixRQUFRO0FBQUEsSUFDbEMsT0FBTyxPQUFPO0FBQ1YsWUFBTSxNQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsd0JBQWtCLEtBQUs7QUFBQSxRQUNuQixNQUFNLGFBQWE7QUFBQSxRQUNuQixVQUFVLGNBQWM7QUFBQSxRQUN4QixVQUFVLElBQUk7QUFBQSxNQUMxQixDQUFTO0FBQ0QsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKO0FBQ0EsV0FBUyxTQUFTLENBQUMsV0FBVztBQUMxQixXQUFPLElBQUksU0FBUztBQUFBLE1BQ2hCLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQUEsRUFDTyxNQUFNLGdCQUFnQixRQUFRO0FBQUEsSUFDakMsT0FBTyxPQUFPO0FBQ1YsWUFBTSxhQUFhLEtBQUssU0FBUyxLQUFLO0FBQ3RDLFVBQUksZUFBZSxjQUFjLFdBQVc7QUFDeEMsY0FBTSxNQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsMEJBQWtCLEtBQUs7QUFBQSxVQUNuQixNQUFNLGFBQWE7QUFBQSxVQUNuQixVQUFVLGNBQWM7QUFBQSxVQUN4QixVQUFVLElBQUk7QUFBQSxRQUM5QixDQUFhO0FBQ0QsZUFBTztBQUFBLE1BQ1g7QUFDQSxhQUFPLEdBQUcsTUFBTSxJQUFJO0FBQUEsSUFDeEI7QUFBQSxFQUNKO0FBQ0EsVUFBUSxTQUFTLENBQUMsV0FBVztBQUN6QixXQUFPLElBQUksUUFBUTtBQUFBLE1BQ2YsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNPLE1BQU0saUJBQWlCLFFBQVE7QUFBQSxJQUNsQyxPQUFPLE9BQU87QUFDVixZQUFNLEVBQUUsS0FBSyxPQUFNLElBQUssS0FBSyxvQkFBb0IsS0FBSztBQUN0RCxZQUFNLE1BQU0sS0FBSztBQUNqQixVQUFJLElBQUksZUFBZSxjQUFjLE9BQU87QUFDeEMsMEJBQWtCLEtBQUs7QUFBQSxVQUNuQixNQUFNLGFBQWE7QUFBQSxVQUNuQixVQUFVLGNBQWM7QUFBQSxVQUN4QixVQUFVLElBQUk7QUFBQSxRQUM5QixDQUFhO0FBQ0QsZUFBTztBQUFBLE1BQ1g7QUFDQSxVQUFJLElBQUksZ0JBQWdCLE1BQU07QUFDMUIsY0FBTSxTQUFTLElBQUksS0FBSyxTQUFTLElBQUksWUFBWTtBQUNqRCxjQUFNLFdBQVcsSUFBSSxLQUFLLFNBQVMsSUFBSSxZQUFZO0FBQ25ELFlBQUksVUFBVSxVQUFVO0FBQ3BCLDRCQUFrQixLQUFLO0FBQUEsWUFDbkIsTUFBTSxTQUFTLGFBQWEsVUFBVSxhQUFhO0FBQUEsWUFDbkQsU0FBVSxXQUFXLElBQUksWUFBWSxRQUFRO0FBQUEsWUFDN0MsU0FBVSxTQUFTLElBQUksWUFBWSxRQUFRO0FBQUEsWUFDM0MsTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLFlBQ1AsU0FBUyxJQUFJLFlBQVk7QUFBQSxVQUM3QyxDQUFpQjtBQUNELGlCQUFPLE1BQUs7QUFBQSxRQUNoQjtBQUFBLE1BQ0o7QUFDQSxVQUFJLElBQUksY0FBYyxNQUFNO0FBQ3hCLFlBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxVQUFVLE9BQU87QUFDdkMsNEJBQWtCLEtBQUs7QUFBQSxZQUNuQixNQUFNLGFBQWE7QUFBQSxZQUNuQixTQUFTLElBQUksVUFBVTtBQUFBLFlBQ3ZCLE1BQU07QUFBQSxZQUNOLFdBQVc7QUFBQSxZQUNYLE9BQU87QUFBQSxZQUNQLFNBQVMsSUFBSSxVQUFVO0FBQUEsVUFDM0MsQ0FBaUI7QUFDRCxpQkFBTyxNQUFLO0FBQUEsUUFDaEI7QUFBQSxNQUNKO0FBQ0EsVUFBSSxJQUFJLGNBQWMsTUFBTTtBQUN4QixZQUFJLElBQUksS0FBSyxTQUFTLElBQUksVUFBVSxPQUFPO0FBQ3ZDLDRCQUFrQixLQUFLO0FBQUEsWUFDbkIsTUFBTSxhQUFhO0FBQUEsWUFDbkIsU0FBUyxJQUFJLFVBQVU7QUFBQSxZQUN2QixNQUFNO0FBQUEsWUFDTixXQUFXO0FBQUEsWUFDWCxPQUFPO0FBQUEsWUFDUCxTQUFTLElBQUksVUFBVTtBQUFBLFVBQzNDLENBQWlCO0FBQ0QsaUJBQU8sTUFBSztBQUFBLFFBQ2hCO0FBQUEsTUFDSjtBQUNBLFVBQUksSUFBSSxPQUFPLE9BQU87QUFDbEIsZUFBTyxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLE1BQU07QUFDOUMsaUJBQU8sSUFBSSxLQUFLLFlBQVksSUFBSSxtQkFBbUIsS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUM7QUFBQSxRQUM5RSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUNaLFlBQVc7QUFDakIsaUJBQU8sWUFBWSxXQUFXLFFBQVFBLE9BQU07QUFBQSxRQUNoRCxDQUFDO0FBQUEsTUFDTDtBQUNBLFlBQU1BLFVBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLE1BQU07QUFDMUMsZUFBTyxJQUFJLEtBQUssV0FBVyxJQUFJLG1CQUFtQixLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQztBQUFBLE1BQzdFLENBQUM7QUFDRCxhQUFPLFlBQVksV0FBVyxRQUFRQSxPQUFNO0FBQUEsSUFDaEQ7QUFBQSxJQUNBLElBQUksVUFBVTtBQUNWLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxJQUNBLElBQUksV0FBVyxTQUFTO0FBQ3BCLGFBQU8sSUFBSSxTQUFTO0FBQUEsUUFDaEIsR0FBRyxLQUFLO0FBQUEsUUFDUixXQUFXLEVBQUUsT0FBTyxXQUFXLFNBQVMsVUFBVSxTQUFTLE9BQU8sRUFBQztBQUFBLE1BQy9FLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxJQUFJLFdBQVcsU0FBUztBQUNwQixhQUFPLElBQUksU0FBUztBQUFBLFFBQ2hCLEdBQUcsS0FBSztBQUFBLFFBQ1IsV0FBVyxFQUFFLE9BQU8sV0FBVyxTQUFTLFVBQVUsU0FBUyxPQUFPLEVBQUM7QUFBQSxNQUMvRSxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsT0FBTyxLQUFLLFNBQVM7QUFDakIsYUFBTyxJQUFJLFNBQVM7QUFBQSxRQUNoQixHQUFHLEtBQUs7QUFBQSxRQUNSLGFBQWEsRUFBRSxPQUFPLEtBQUssU0FBUyxVQUFVLFNBQVMsT0FBTyxFQUFDO0FBQUEsTUFDM0UsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFNBQVMsU0FBUztBQUNkLGFBQU8sS0FBSyxJQUFJLEdBQUcsT0FBTztBQUFBLElBQzlCO0FBQUEsRUFDSjtBQUNBLFdBQVMsU0FBUyxDQUFDLFFBQVEsV0FBVztBQUNsQyxXQUFPLElBQUksU0FBUztBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQ0EsV0FBUyxlQUFlLFFBQVE7QUFDNUIsUUFBSSxrQkFBa0IsV0FBVztBQUM3QixZQUFNLFdBQVcsQ0FBQTtBQUNqQixpQkFBVyxPQUFPLE9BQU8sT0FBTztBQUM1QixjQUFNLGNBQWMsT0FBTyxNQUFNLEdBQUc7QUFDcEMsaUJBQVMsR0FBRyxJQUFJLFlBQVksT0FBTyxlQUFlLFdBQVcsQ0FBQztBQUFBLE1BQ2xFO0FBQ0EsYUFBTyxJQUFJLFVBQVU7QUFBQSxRQUNqQixHQUFHLE9BQU87QUFBQSxRQUNWLE9BQU8sTUFBTTtBQUFBLE1BQ3pCLENBQVM7QUFBQSxJQUNMLFdBQ1Msa0JBQWtCLFVBQVU7QUFDakMsYUFBTyxJQUFJLFNBQVM7QUFBQSxRQUNoQixHQUFHLE9BQU87QUFBQSxRQUNWLE1BQU0sZUFBZSxPQUFPLE9BQU87QUFBQSxNQUMvQyxDQUFTO0FBQUEsSUFDTCxXQUNTLGtCQUFrQixhQUFhO0FBQ3BDLGFBQU8sWUFBWSxPQUFPLGVBQWUsT0FBTyxPQUFNLENBQUUsQ0FBQztBQUFBLElBQzdELFdBQ1Msa0JBQWtCLGFBQWE7QUFDcEMsYUFBTyxZQUFZLE9BQU8sZUFBZSxPQUFPLE9BQU0sQ0FBRSxDQUFDO0FBQUEsSUFDN0QsV0FDUyxrQkFBa0IsVUFBVTtBQUNqQyxhQUFPLFNBQVMsT0FBTyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsZUFBZSxJQUFJLENBQUMsQ0FBQztBQUFBLElBQzNFLE9BQ0s7QUFDRCxhQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0o7QUFBQSxFQUNPLE1BQU0sa0JBQWtCLFFBQVE7QUFBQSxJQUNuQyxjQUFjO0FBQ1YsWUFBTSxHQUFHLFNBQVM7QUFDbEIsV0FBSyxVQUFVO0FBS2YsV0FBSyxZQUFZLEtBQUs7QUFxQ3RCLFdBQUssVUFBVSxLQUFLO0FBQUEsSUFDeEI7QUFBQSxJQUNBLGFBQWE7QUFDVCxVQUFJLEtBQUssWUFBWTtBQUNqQixlQUFPLEtBQUs7QUFDaEIsWUFBTSxRQUFRLEtBQUssS0FBSyxNQUFLO0FBQzdCLFlBQU0sT0FBTyxLQUFLLFdBQVcsS0FBSztBQUNsQyxXQUFLLFVBQVUsRUFBRSxPQUFPLEtBQUk7QUFDNUIsYUFBTyxLQUFLO0FBQUEsSUFDaEI7QUFBQSxJQUNBLE9BQU8sT0FBTztBQUNWLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSztBQUN0QyxVQUFJLGVBQWUsY0FBYyxRQUFRO0FBQ3JDLGNBQU1ZLE9BQU0sS0FBSyxnQkFBZ0IsS0FBSztBQUN0QywwQkFBa0JBLE1BQUs7QUFBQSxVQUNuQixNQUFNLGFBQWE7QUFBQSxVQUNuQixVQUFVLGNBQWM7QUFBQSxVQUN4QixVQUFVQSxLQUFJO0FBQUEsUUFDOUIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsWUFBTSxFQUFFLFFBQVEsSUFBRyxJQUFLLEtBQUssb0JBQW9CLEtBQUs7QUFDdEQsWUFBTSxFQUFFLE9BQU8sTUFBTSxVQUFTLElBQUssS0FBSyxXQUFVO0FBQ2xELFlBQU0sWUFBWSxDQUFBO0FBQ2xCLFVBQUksRUFBRSxLQUFLLEtBQUssb0JBQW9CLFlBQVksS0FBSyxLQUFLLGdCQUFnQixVQUFVO0FBQ2hGLG1CQUFXLE9BQU8sSUFBSSxNQUFNO0FBQ3hCLGNBQUksQ0FBQyxVQUFVLFNBQVMsR0FBRyxHQUFHO0FBQzFCLHNCQUFVLEtBQUssR0FBRztBQUFBLFVBQ3RCO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFDQSxZQUFNLFFBQVEsQ0FBQTtBQUNkLGlCQUFXLE9BQU8sV0FBVztBQUN6QixjQUFNLGVBQWUsTUFBTSxHQUFHO0FBQzlCLGNBQU0sUUFBUSxJQUFJLEtBQUssR0FBRztBQUMxQixjQUFNLEtBQUs7QUFBQSxVQUNQLEtBQUssRUFBRSxRQUFRLFNBQVMsT0FBTyxJQUFHO0FBQUEsVUFDbEMsT0FBTyxhQUFhLE9BQU8sSUFBSSxtQkFBbUIsS0FBSyxPQUFPLElBQUksTUFBTSxHQUFHLENBQUM7QUFBQSxVQUM1RSxXQUFXLE9BQU8sSUFBSTtBQUFBLFFBQ3RDLENBQWE7QUFBQSxNQUNMO0FBQ0EsVUFBSSxLQUFLLEtBQUssb0JBQW9CLFVBQVU7QUFDeEMsY0FBTSxjQUFjLEtBQUssS0FBSztBQUM5QixZQUFJLGdCQUFnQixlQUFlO0FBQy9CLHFCQUFXLE9BQU8sV0FBVztBQUN6QixrQkFBTSxLQUFLO0FBQUEsY0FDUCxLQUFLLEVBQUUsUUFBUSxTQUFTLE9BQU8sSUFBRztBQUFBLGNBQ2xDLE9BQU8sRUFBRSxRQUFRLFNBQVMsT0FBTyxJQUFJLEtBQUssR0FBRyxFQUFDO0FBQUEsWUFDdEUsQ0FBcUI7QUFBQSxVQUNMO0FBQUEsUUFDSixXQUNTLGdCQUFnQixVQUFVO0FBQy9CLGNBQUksVUFBVSxTQUFTLEdBQUc7QUFDdEIsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixNQUFNLGFBQWE7QUFBQSxjQUNuQixNQUFNO0FBQUEsWUFDOUIsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsZ0JBQWdCLFFBQVM7QUFBQSxhQUU3QjtBQUNELGdCQUFNLElBQUksTUFBTSxzREFBc0Q7QUFBQSxRQUMxRTtBQUFBLE1BQ0osT0FDSztBQUVELGNBQU0sV0FBVyxLQUFLLEtBQUs7QUFDM0IsbUJBQVcsT0FBTyxXQUFXO0FBQ3pCLGdCQUFNLFFBQVEsSUFBSSxLQUFLLEdBQUc7QUFDMUIsZ0JBQU0sS0FBSztBQUFBLFlBQ1AsS0FBSyxFQUFFLFFBQVEsU0FBUyxPQUFPLElBQUc7QUFBQSxZQUNsQyxPQUFPLFNBQVM7QUFBQSxjQUFPLElBQUksbUJBQW1CLEtBQUssT0FBTyxJQUFJLE1BQU0sR0FBRztBQUFBO0FBQUEsWUFDM0Y7QUFBQSxZQUNvQixXQUFXLE9BQU8sSUFBSTtBQUFBLFVBQzFDLENBQWlCO0FBQUEsUUFDTDtBQUFBLE1BQ0o7QUFDQSxVQUFJLElBQUksT0FBTyxPQUFPO0FBQ2xCLGVBQU8sUUFBUSxRQUFPLEVBQ2pCLEtBQUssWUFBWTtBQUNsQixnQkFBTSxZQUFZLENBQUE7QUFDbEIscUJBQVcsUUFBUSxPQUFPO0FBQ3RCLGtCQUFNLE1BQU0sTUFBTSxLQUFLO0FBQ3ZCLGtCQUFNLFFBQVEsTUFBTSxLQUFLO0FBQ3pCLHNCQUFVLEtBQUs7QUFBQSxjQUNYO0FBQUEsY0FDQTtBQUFBLGNBQ0EsV0FBVyxLQUFLO0FBQUEsWUFDeEMsQ0FBcUI7QUFBQSxVQUNMO0FBQ0EsaUJBQU87QUFBQSxRQUNYLENBQUMsRUFDSSxLQUFLLENBQUMsY0FBYztBQUNyQixpQkFBTyxZQUFZLGdCQUFnQixRQUFRLFNBQVM7QUFBQSxRQUN4RCxDQUFDO0FBQUEsTUFDTCxPQUNLO0FBQ0QsZUFBTyxZQUFZLGdCQUFnQixRQUFRLEtBQUs7QUFBQSxNQUNwRDtBQUFBLElBQ0o7QUFBQSxJQUNBLElBQUksUUFBUTtBQUNSLGFBQU8sS0FBSyxLQUFLLE1BQUs7QUFBQSxJQUMxQjtBQUFBLElBQ0EsT0FBTyxTQUFTO0FBQ1osZ0JBQVU7QUFDVixhQUFPLElBQUksVUFBVTtBQUFBLFFBQ2pCLEdBQUcsS0FBSztBQUFBLFFBQ1IsYUFBYTtBQUFBLFFBQ2IsR0FBSSxZQUFZLFNBQ1Y7QUFBQSxVQUNFLFVBQVUsQ0FBQyxPQUFPLFFBQVE7QUFDdEIsa0JBQU0sZUFBZSxLQUFLLEtBQUssV0FBVyxPQUFPLEdBQUcsRUFBRSxXQUFXLElBQUk7QUFDckUsZ0JBQUksTUFBTSxTQUFTO0FBQ2YscUJBQU87QUFBQSxnQkFDSCxTQUFTLFVBQVUsU0FBUyxPQUFPLEVBQUUsV0FBVztBQUFBLGNBQ2hGO0FBQ3dCLG1CQUFPO0FBQUEsY0FDSCxTQUFTO0FBQUEsWUFDckM7QUFBQSxVQUNvQjtBQUFBLFFBQ3BCLElBQ2tCO01BQ2xCLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxRQUFRO0FBQ0osYUFBTyxJQUFJLFVBQVU7QUFBQSxRQUNqQixHQUFHLEtBQUs7QUFBQSxRQUNSLGFBQWE7QUFBQSxNQUN6QixDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsY0FBYztBQUNWLGFBQU8sSUFBSSxVQUFVO0FBQUEsUUFDakIsR0FBRyxLQUFLO0FBQUEsUUFDUixhQUFhO0FBQUEsTUFDekIsQ0FBUztBQUFBLElBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFrQkEsT0FBTyxjQUFjO0FBQ2pCLGFBQU8sSUFBSSxVQUFVO0FBQUEsUUFDakIsR0FBRyxLQUFLO0FBQUEsUUFDUixPQUFPLE9BQU87QUFBQSxVQUNWLEdBQUcsS0FBSyxLQUFLLE1BQUs7QUFBQSxVQUNsQixHQUFHO0FBQUEsUUFDbkI7QUFBQSxNQUNBLENBQVM7QUFBQSxJQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTUEsTUFBTSxTQUFTO0FBQ1gsWUFBTSxTQUFTLElBQUksVUFBVTtBQUFBLFFBQ3pCLGFBQWEsUUFBUSxLQUFLO0FBQUEsUUFDMUIsVUFBVSxRQUFRLEtBQUs7QUFBQSxRQUN2QixPQUFPLE9BQU87QUFBQSxVQUNWLEdBQUcsS0FBSyxLQUFLLE1BQUs7QUFBQSxVQUNsQixHQUFHLFFBQVEsS0FBSyxNQUFLO0FBQUEsUUFDckM7QUFBQSxRQUNZLFVBQVUsc0JBQXNCO0FBQUEsTUFDNUMsQ0FBUztBQUNELGFBQU87QUFBQSxJQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBb0NBLE9BQU8sS0FBSyxRQUFRO0FBQ2hCLGFBQU8sS0FBSyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEdBQUcsT0FBTSxDQUFFO0FBQUEsSUFDekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXNCQSxTQUFTLE9BQU87QUFDWixhQUFPLElBQUksVUFBVTtBQUFBLFFBQ2pCLEdBQUcsS0FBSztBQUFBLFFBQ1IsVUFBVTtBQUFBLE1BQ3RCLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxLQUFLLE1BQU07QUFDUCxZQUFNLFFBQVEsQ0FBQTtBQUNkLGlCQUFXLE9BQU8sS0FBSyxXQUFXLElBQUksR0FBRztBQUNyQyxZQUFJLEtBQUssR0FBRyxLQUFLLEtBQUssTUFBTSxHQUFHLEdBQUc7QUFDOUIsZ0JBQU0sR0FBRyxJQUFJLEtBQUssTUFBTSxHQUFHO0FBQUEsUUFDL0I7QUFBQSxNQUNKO0FBQ0EsYUFBTyxJQUFJLFVBQVU7QUFBQSxRQUNqQixHQUFHLEtBQUs7QUFBQSxRQUNSLE9BQU8sTUFBTTtBQUFBLE1BQ3pCLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxLQUFLLE1BQU07QUFDUCxZQUFNLFFBQVEsQ0FBQTtBQUNkLGlCQUFXLE9BQU8sS0FBSyxXQUFXLEtBQUssS0FBSyxHQUFHO0FBQzNDLFlBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRztBQUNaLGdCQUFNLEdBQUcsSUFBSSxLQUFLLE1BQU0sR0FBRztBQUFBLFFBQy9CO0FBQUEsTUFDSjtBQUNBLGFBQU8sSUFBSSxVQUFVO0FBQUEsUUFDakIsR0FBRyxLQUFLO0FBQUEsUUFDUixPQUFPLE1BQU07QUFBQSxNQUN6QixDQUFTO0FBQUEsSUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSUEsY0FBYztBQUNWLGFBQU8sZUFBZSxJQUFJO0FBQUEsSUFDOUI7QUFBQSxJQUNBLFFBQVEsTUFBTTtBQUNWLFlBQU0sV0FBVyxDQUFBO0FBQ2pCLGlCQUFXLE9BQU8sS0FBSyxXQUFXLEtBQUssS0FBSyxHQUFHO0FBQzNDLGNBQU0sY0FBYyxLQUFLLE1BQU0sR0FBRztBQUNsQyxZQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRztBQUNwQixtQkFBUyxHQUFHLElBQUk7QUFBQSxRQUNwQixPQUNLO0FBQ0QsbUJBQVMsR0FBRyxJQUFJLFlBQVksU0FBUTtBQUFBLFFBQ3hDO0FBQUEsTUFDSjtBQUNBLGFBQU8sSUFBSSxVQUFVO0FBQUEsUUFDakIsR0FBRyxLQUFLO0FBQUEsUUFDUixPQUFPLE1BQU07QUFBQSxNQUN6QixDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxNQUFNO0FBQ1gsWUFBTSxXQUFXLENBQUE7QUFDakIsaUJBQVcsT0FBTyxLQUFLLFdBQVcsS0FBSyxLQUFLLEdBQUc7QUFDM0MsWUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUc7QUFDcEIsbUJBQVMsR0FBRyxJQUFJLEtBQUssTUFBTSxHQUFHO0FBQUEsUUFDbEMsT0FDSztBQUNELGdCQUFNLGNBQWMsS0FBSyxNQUFNLEdBQUc7QUFDbEMsY0FBSSxXQUFXO0FBQ2YsaUJBQU8sb0JBQW9CLGFBQWE7QUFDcEMsdUJBQVcsU0FBUyxLQUFLO0FBQUEsVUFDN0I7QUFDQSxtQkFBUyxHQUFHLElBQUk7QUFBQSxRQUNwQjtBQUFBLE1BQ0o7QUFDQSxhQUFPLElBQUksVUFBVTtBQUFBLFFBQ2pCLEdBQUcsS0FBSztBQUFBLFFBQ1IsT0FBTyxNQUFNO0FBQUEsTUFDekIsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFFBQVE7QUFDSixhQUFPLGNBQWMsS0FBSyxXQUFXLEtBQUssS0FBSyxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxFQUNKO0FBQ0EsWUFBVSxTQUFTLENBQUMsT0FBTyxXQUFXO0FBQ2xDLFdBQU8sSUFBSSxVQUFVO0FBQUEsTUFDakIsT0FBTyxNQUFNO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixVQUFVLFNBQVMsT0FBTTtBQUFBLE1BQ3pCLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQ0EsWUFBVSxlQUFlLENBQUMsT0FBTyxXQUFXO0FBQ3hDLFdBQU8sSUFBSSxVQUFVO0FBQUEsTUFDakIsT0FBTyxNQUFNO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixVQUFVLFNBQVMsT0FBTTtBQUFBLE1BQ3pCLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQ0EsWUFBVSxhQUFhLENBQUMsT0FBTyxXQUFXO0FBQ3RDLFdBQU8sSUFBSSxVQUFVO0FBQUEsTUFDakI7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFVBQVUsU0FBUyxPQUFNO0FBQUEsTUFDekIsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNPLE1BQU0saUJBQWlCLFFBQVE7QUFBQSxJQUNsQyxPQUFPLE9BQU87QUFDVixZQUFNLEVBQUUsSUFBRyxJQUFLLEtBQUssb0JBQW9CLEtBQUs7QUFDOUMsWUFBTSxVQUFVLEtBQUssS0FBSztBQUMxQixlQUFTLGNBQWMsU0FBUztBQUU1QixtQkFBV1osV0FBVSxTQUFTO0FBQzFCLGNBQUlBLFFBQU8sT0FBTyxXQUFXLFNBQVM7QUFDbEMsbUJBQU9BLFFBQU87QUFBQSxVQUNsQjtBQUFBLFFBQ0o7QUFDQSxtQkFBV0EsV0FBVSxTQUFTO0FBQzFCLGNBQUlBLFFBQU8sT0FBTyxXQUFXLFNBQVM7QUFFbEMsZ0JBQUksT0FBTyxPQUFPLEtBQUssR0FBR0EsUUFBTyxJQUFJLE9BQU8sTUFBTTtBQUNsRCxtQkFBT0EsUUFBTztBQUFBLFVBQ2xCO0FBQUEsUUFDSjtBQUVBLGNBQU0sY0FBYyxRQUFRLElBQUksQ0FBQ0EsWUFBVyxJQUFJLFNBQVNBLFFBQU8sSUFBSSxPQUFPLE1BQU0sQ0FBQztBQUNsRiwwQkFBa0IsS0FBSztBQUFBLFVBQ25CLE1BQU0sYUFBYTtBQUFBLFVBQ25CO0FBQUEsUUFDaEIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxJQUFJLE9BQU8sT0FBTztBQUNsQixlQUFPLFFBQVEsSUFBSSxRQUFRLElBQUksT0FBTyxXQUFXO0FBQzdDLGdCQUFNLFdBQVc7QUFBQSxZQUNiLEdBQUc7QUFBQSxZQUNILFFBQVE7QUFBQSxjQUNKLEdBQUcsSUFBSTtBQUFBLGNBQ1AsUUFBUSxDQUFBO0FBQUEsWUFDaEM7QUFBQSxZQUNvQixRQUFRO0FBQUEsVUFDNUI7QUFDZ0IsaUJBQU87QUFBQSxZQUNILFFBQVEsTUFBTSxPQUFPLFlBQVk7QUFBQSxjQUM3QixNQUFNLElBQUk7QUFBQSxjQUNWLE1BQU0sSUFBSTtBQUFBLGNBQ1YsUUFBUTtBQUFBLFlBQ2hDLENBQXFCO0FBQUEsWUFDRCxLQUFLO0FBQUEsVUFDekI7QUFBQSxRQUNZLENBQUMsQ0FBQyxFQUFFLEtBQUssYUFBYTtBQUFBLE1BQzFCLE9BQ0s7QUFDRCxZQUFJLFFBQVE7QUFDWixjQUFNLFNBQVMsQ0FBQTtBQUNmLG1CQUFXLFVBQVUsU0FBUztBQUMxQixnQkFBTSxXQUFXO0FBQUEsWUFDYixHQUFHO0FBQUEsWUFDSCxRQUFRO0FBQUEsY0FDSixHQUFHLElBQUk7QUFBQSxjQUNQLFFBQVEsQ0FBQTtBQUFBLFlBQ2hDO0FBQUEsWUFDb0IsUUFBUTtBQUFBLFVBQzVCO0FBQ2dCLGdCQUFNQSxVQUFTLE9BQU8sV0FBVztBQUFBLFlBQzdCLE1BQU0sSUFBSTtBQUFBLFlBQ1YsTUFBTSxJQUFJO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDNUIsQ0FBaUI7QUFDRCxjQUFJQSxRQUFPLFdBQVcsU0FBUztBQUMzQixtQkFBT0E7QUFBQSxVQUNYLFdBQ1NBLFFBQU8sV0FBVyxXQUFXLENBQUMsT0FBTztBQUMxQyxvQkFBUSxFQUFFLFFBQUFBLFNBQVEsS0FBSyxTQUFRO0FBQUEsVUFDbkM7QUFDQSxjQUFJLFNBQVMsT0FBTyxPQUFPLFFBQVE7QUFDL0IsbUJBQU8sS0FBSyxTQUFTLE9BQU8sTUFBTTtBQUFBLFVBQ3RDO0FBQUEsUUFDSjtBQUNBLFlBQUksT0FBTztBQUNQLGNBQUksT0FBTyxPQUFPLEtBQUssR0FBRyxNQUFNLElBQUksT0FBTyxNQUFNO0FBQ2pELGlCQUFPLE1BQU07QUFBQSxRQUNqQjtBQUNBLGNBQU0sY0FBYyxPQUFPLElBQUksQ0FBQ2EsWUFBVyxJQUFJLFNBQVNBLE9BQU0sQ0FBQztBQUMvRCwwQkFBa0IsS0FBSztBQUFBLFVBQ25CLE1BQU0sYUFBYTtBQUFBLFVBQ25CO0FBQUEsUUFDaEIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDSjtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxLQUFLLEtBQUs7QUFBQSxJQUNyQjtBQUFBLEVBQ0o7QUFDQSxXQUFTLFNBQVMsQ0FBQyxPQUFPLFdBQVc7QUFDakMsV0FBTyxJQUFJLFNBQVM7QUFBQSxNQUNoQixTQUFTO0FBQUEsTUFDVCxVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQVFBLFFBQU0sbUJBQW1CLENBQUMsU0FBUztBQUMvQixRQUFJLGdCQUFnQixTQUFTO0FBQ3pCLGFBQU8saUJBQWlCLEtBQUssTUFBTTtBQUFBLElBQ3ZDLFdBQ1MsZ0JBQWdCLFlBQVk7QUFDakMsYUFBTyxpQkFBaUIsS0FBSyxXQUFXO0FBQUEsSUFDNUMsV0FDUyxnQkFBZ0IsWUFBWTtBQUNqQyxhQUFPLENBQUMsS0FBSyxLQUFLO0FBQUEsSUFDdEIsV0FDUyxnQkFBZ0IsU0FBUztBQUM5QixhQUFPLEtBQUs7QUFBQSxJQUNoQixXQUNTLGdCQUFnQixlQUFlO0FBRXBDLGFBQU8sS0FBSyxhQUFhLEtBQUssSUFBSTtBQUFBLElBQ3RDLFdBQ1MsZ0JBQWdCLFlBQVk7QUFDakMsYUFBTyxpQkFBaUIsS0FBSyxLQUFLLFNBQVM7QUFBQSxJQUMvQyxXQUNTLGdCQUFnQixjQUFjO0FBQ25DLGFBQU8sQ0FBQyxNQUFTO0FBQUEsSUFDckIsV0FDUyxnQkFBZ0IsU0FBUztBQUM5QixhQUFPLENBQUMsSUFBSTtBQUFBLElBQ2hCLFdBQ1MsZ0JBQWdCLGFBQWE7QUFDbEMsYUFBTyxDQUFDLFFBQVcsR0FBRyxpQkFBaUIsS0FBSyxPQUFNLENBQUUsQ0FBQztBQUFBLElBQ3pELFdBQ1MsZ0JBQWdCLGFBQWE7QUFDbEMsYUFBTyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsS0FBSyxPQUFNLENBQUUsQ0FBQztBQUFBLElBQ3BELFdBQ1MsZ0JBQWdCLFlBQVk7QUFDakMsYUFBTyxpQkFBaUIsS0FBSyxRQUFRO0FBQUEsSUFDekMsV0FDUyxnQkFBZ0IsYUFBYTtBQUNsQyxhQUFPLGlCQUFpQixLQUFLLFFBQVE7QUFBQSxJQUN6QyxXQUNTLGdCQUFnQixVQUFVO0FBQy9CLGFBQU8saUJBQWlCLEtBQUssS0FBSyxTQUFTO0FBQUEsSUFDL0MsT0FDSztBQUNELGFBQU8sQ0FBQTtBQUFBLElBQ1g7QUFBQSxFQUNKO0FBQUEsRUFDTyxNQUFNLDhCQUE4QixRQUFRO0FBQUEsSUFDL0MsT0FBTyxPQUFPO0FBQ1YsWUFBTSxFQUFFLElBQUcsSUFBSyxLQUFLLG9CQUFvQixLQUFLO0FBQzlDLFVBQUksSUFBSSxlQUFlLGNBQWMsUUFBUTtBQUN6QywwQkFBa0IsS0FBSztBQUFBLFVBQ25CLE1BQU0sYUFBYTtBQUFBLFVBQ25CLFVBQVUsY0FBYztBQUFBLFVBQ3hCLFVBQVUsSUFBSTtBQUFBLFFBQzlCLENBQWE7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUNBLFlBQU0sZ0JBQWdCLEtBQUs7QUFDM0IsWUFBTSxxQkFBcUIsSUFBSSxLQUFLLGFBQWE7QUFDakQsWUFBTSxTQUFTLEtBQUssV0FBVyxJQUFJLGtCQUFrQjtBQUNyRCxVQUFJLENBQUMsUUFBUTtBQUNULDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsU0FBUyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUksQ0FBRTtBQUFBLFVBQzFDLE1BQU0sQ0FBQyxhQUFhO0FBQUEsUUFDcEMsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxJQUFJLE9BQU8sT0FBTztBQUNsQixlQUFPLE9BQU8sWUFBWTtBQUFBLFVBQ3RCLE1BQU0sSUFBSTtBQUFBLFVBQ1YsTUFBTSxJQUFJO0FBQUEsVUFDVixRQUFRO0FBQUEsUUFDeEIsQ0FBYTtBQUFBLE1BQ0wsT0FDSztBQUNELGVBQU8sT0FBTyxXQUFXO0FBQUEsVUFDckIsTUFBTSxJQUFJO0FBQUEsVUFDVixNQUFNLElBQUk7QUFBQSxVQUNWLFFBQVE7QUFBQSxRQUN4QixDQUFhO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFBQSxJQUNBLElBQUksZ0JBQWdCO0FBQ2hCLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxJQUNBLElBQUksVUFBVTtBQUNWLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxJQUNBLElBQUksYUFBYTtBQUNiLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFTQSxPQUFPLE9BQU8sZUFBZSxTQUFTLFFBQVE7QUFFMUMsWUFBTSxhQUFhLG9CQUFJLElBQUc7QUFFMUIsaUJBQVcsUUFBUSxTQUFTO0FBQ3hCLGNBQU0sc0JBQXNCLGlCQUFpQixLQUFLLE1BQU0sYUFBYSxDQUFDO0FBQ3RFLFlBQUksQ0FBQyxvQkFBb0IsUUFBUTtBQUM3QixnQkFBTSxJQUFJLE1BQU0sbUNBQW1DLGFBQWEsbURBQW1EO0FBQUEsUUFDdkg7QUFDQSxtQkFBVyxTQUFTLHFCQUFxQjtBQUNyQyxjQUFJLFdBQVcsSUFBSSxLQUFLLEdBQUc7QUFDdkIsa0JBQU0sSUFBSSxNQUFNLDBCQUEwQixPQUFPLGFBQWEsQ0FBQyx3QkFBd0IsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUFBLFVBQzFHO0FBQ0EscUJBQVcsSUFBSSxPQUFPLElBQUk7QUFBQSxRQUM5QjtBQUFBLE1BQ0o7QUFDQSxhQUFPLElBQUksc0JBQXNCO0FBQUEsUUFDN0IsVUFBVSxzQkFBc0I7QUFBQSxRQUNoQztBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxHQUFHLG9CQUFvQixNQUFNO0FBQUEsTUFDekMsQ0FBUztBQUFBLElBQ0w7QUFBQSxFQUNKO0FBQ0EsV0FBUyxZQUFZLEdBQUcsR0FBRztBQUN2QixVQUFNLFFBQVEsY0FBYyxDQUFDO0FBQzdCLFVBQU0sUUFBUSxjQUFjLENBQUM7QUFDN0IsUUFBSSxNQUFNLEdBQUc7QUFDVCxhQUFPLEVBQUUsT0FBTyxNQUFNLE1BQU0sRUFBQztBQUFBLElBQ2pDLFdBQ1MsVUFBVSxjQUFjLFVBQVUsVUFBVSxjQUFjLFFBQVE7QUFDdkUsWUFBTSxRQUFRLEtBQUssV0FBVyxDQUFDO0FBQy9CLFlBQU0sYUFBYSxLQUFLLFdBQVcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRTtBQUMvRSxZQUFNLFNBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFDO0FBQzNCLGlCQUFXLE9BQU8sWUFBWTtBQUMxQixjQUFNLGNBQWMsWUFBWSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUM5QyxZQUFJLENBQUMsWUFBWSxPQUFPO0FBQ3BCLGlCQUFPLEVBQUUsT0FBTyxNQUFLO0FBQUEsUUFDekI7QUFDQSxlQUFPLEdBQUcsSUFBSSxZQUFZO0FBQUEsTUFDOUI7QUFDQSxhQUFPLEVBQUUsT0FBTyxNQUFNLE1BQU0sT0FBTTtBQUFBLElBQ3RDLFdBQ1MsVUFBVSxjQUFjLFNBQVMsVUFBVSxjQUFjLE9BQU87QUFDckUsVUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRO0FBQ3ZCLGVBQU8sRUFBRSxPQUFPLE1BQUs7QUFBQSxNQUN6QjtBQUNBLFlBQU0sV0FBVyxDQUFBO0FBQ2pCLGVBQVMsUUFBUSxHQUFHLFFBQVEsRUFBRSxRQUFRLFNBQVM7QUFDM0MsY0FBTSxRQUFRLEVBQUUsS0FBSztBQUNyQixjQUFNLFFBQVEsRUFBRSxLQUFLO0FBQ3JCLGNBQU0sY0FBYyxZQUFZLE9BQU8sS0FBSztBQUM1QyxZQUFJLENBQUMsWUFBWSxPQUFPO0FBQ3BCLGlCQUFPLEVBQUUsT0FBTyxNQUFLO0FBQUEsUUFDekI7QUFDQSxpQkFBUyxLQUFLLFlBQVksSUFBSTtBQUFBLE1BQ2xDO0FBQ0EsYUFBTyxFQUFFLE9BQU8sTUFBTSxNQUFNLFNBQVE7QUFBQSxJQUN4QyxXQUNTLFVBQVUsY0FBYyxRQUFRLFVBQVUsY0FBYyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUc7QUFDaEYsYUFBTyxFQUFFLE9BQU8sTUFBTSxNQUFNLEVBQUM7QUFBQSxJQUNqQyxPQUNLO0FBQ0QsYUFBTyxFQUFFLE9BQU8sTUFBSztBQUFBLElBQ3pCO0FBQUEsRUFDSjtBQUFBLEVBQ08sTUFBTSx3QkFBd0IsUUFBUTtBQUFBLElBQ3pDLE9BQU8sT0FBTztBQUNWLFlBQU0sRUFBRSxRQUFRLElBQUcsSUFBSyxLQUFLLG9CQUFvQixLQUFLO0FBQ3RELFlBQU0sZUFBZSxDQUFDLFlBQVksZ0JBQWdCO0FBQzlDLFlBQUksVUFBVSxVQUFVLEtBQUssVUFBVSxXQUFXLEdBQUc7QUFDakQsaUJBQU87QUFBQSxRQUNYO0FBQ0EsY0FBTSxTQUFTLFlBQVksV0FBVyxPQUFPLFlBQVksS0FBSztBQUM5RCxZQUFJLENBQUMsT0FBTyxPQUFPO0FBQ2YsNEJBQWtCLEtBQUs7QUFBQSxZQUNuQixNQUFNLGFBQWE7QUFBQSxVQUN2QyxDQUFpQjtBQUNELGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksUUFBUSxVQUFVLEtBQUssUUFBUSxXQUFXLEdBQUc7QUFDN0MsaUJBQU8sTUFBSztBQUFBLFFBQ2hCO0FBQ0EsZUFBTyxFQUFFLFFBQVEsT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFJO0FBQUEsTUFDckQ7QUFDQSxVQUFJLElBQUksT0FBTyxPQUFPO0FBQ2xCLGVBQU8sUUFBUSxJQUFJO0FBQUEsVUFDZixLQUFLLEtBQUssS0FBSyxZQUFZO0FBQUEsWUFDdkIsTUFBTSxJQUFJO0FBQUEsWUFDVixNQUFNLElBQUk7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUM1QixDQUFpQjtBQUFBLFVBQ0QsS0FBSyxLQUFLLE1BQU0sWUFBWTtBQUFBLFlBQ3hCLE1BQU0sSUFBSTtBQUFBLFlBQ1YsTUFBTSxJQUFJO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDNUIsQ0FBaUI7QUFBQSxRQUNqQixDQUFhLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssQ0FBQztBQUFBLE1BQ3hELE9BQ0s7QUFDRCxlQUFPLGFBQWEsS0FBSyxLQUFLLEtBQUssV0FBVztBQUFBLFVBQzFDLE1BQU0sSUFBSTtBQUFBLFVBQ1YsTUFBTSxJQUFJO0FBQUEsVUFDVixRQUFRO0FBQUEsUUFDeEIsQ0FBYSxHQUFHLEtBQUssS0FBSyxNQUFNLFdBQVc7QUFBQSxVQUMzQixNQUFNLElBQUk7QUFBQSxVQUNWLE1BQU0sSUFBSTtBQUFBLFVBQ1YsUUFBUTtBQUFBLFFBQ3hCLENBQWEsQ0FBQztBQUFBLE1BQ047QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNBLGtCQUFnQixTQUFTLENBQUMsTUFBTSxPQUFPLFdBQVc7QUFDOUMsV0FBTyxJQUFJLGdCQUFnQjtBQUFBLE1BQ3ZCO0FBQUEsTUFDQTtBQUFBLE1BQ0EsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQUVPLE1BQU0saUJBQWlCLFFBQVE7QUFBQSxJQUNsQyxPQUFPLE9BQU87QUFDVixZQUFNLEVBQUUsUUFBUSxJQUFHLElBQUssS0FBSyxvQkFBb0IsS0FBSztBQUN0RCxVQUFJLElBQUksZUFBZSxjQUFjLE9BQU87QUFDeEMsMEJBQWtCLEtBQUs7QUFBQSxVQUNuQixNQUFNLGFBQWE7QUFBQSxVQUNuQixVQUFVLGNBQWM7QUFBQSxVQUN4QixVQUFVLElBQUk7QUFBQSxRQUM5QixDQUFhO0FBQ0QsZUFBTztBQUFBLE1BQ1g7QUFDQSxVQUFJLElBQUksS0FBSyxTQUFTLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFDMUMsMEJBQWtCLEtBQUs7QUFBQSxVQUNuQixNQUFNLGFBQWE7QUFBQSxVQUNuQixTQUFTLEtBQUssS0FBSyxNQUFNO0FBQUEsVUFDekIsV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ3RCLENBQWE7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUNBLFlBQU0sT0FBTyxLQUFLLEtBQUs7QUFDdkIsVUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLFNBQVMsS0FBSyxLQUFLLE1BQU0sUUFBUTtBQUNuRCwwQkFBa0IsS0FBSztBQUFBLFVBQ25CLE1BQU0sYUFBYTtBQUFBLFVBQ25CLFNBQVMsS0FBSyxLQUFLLE1BQU07QUFBQSxVQUN6QixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDdEIsQ0FBYTtBQUNELGVBQU8sTUFBSztBQUFBLE1BQ2hCO0FBQ0EsWUFBTSxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksRUFDckIsSUFBSSxDQUFDLE1BQU0sY0FBYztBQUMxQixjQUFNLFNBQVMsS0FBSyxLQUFLLE1BQU0sU0FBUyxLQUFLLEtBQUssS0FBSztBQUN2RCxZQUFJLENBQUM7QUFDRCxpQkFBTztBQUNYLGVBQU8sT0FBTyxPQUFPLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBQUEsTUFDL0UsQ0FBQyxFQUNJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLFVBQUksSUFBSSxPQUFPLE9BQU87QUFDbEIsZUFBTyxRQUFRLElBQUksS0FBSyxFQUFFLEtBQUssQ0FBQyxZQUFZO0FBQ3hDLGlCQUFPLFlBQVksV0FBVyxRQUFRLE9BQU87QUFBQSxRQUNqRCxDQUFDO0FBQUEsTUFDTCxPQUNLO0FBQ0QsZUFBTyxZQUFZLFdBQVcsUUFBUSxLQUFLO0FBQUEsTUFDL0M7QUFBQSxJQUNKO0FBQUEsSUFDQSxJQUFJLFFBQVE7QUFDUixhQUFPLEtBQUssS0FBSztBQUFBLElBQ3JCO0FBQUEsSUFDQSxLQUFLLE1BQU07QUFDUCxhQUFPLElBQUksU0FBUztBQUFBLFFBQ2hCLEdBQUcsS0FBSztBQUFBLFFBQ1I7QUFBQSxNQUNaLENBQVM7QUFBQSxJQUNMO0FBQUEsRUFDSjtBQUNBLFdBQVMsU0FBUyxDQUFDLFNBQVMsV0FBVztBQUNuQyxRQUFJLENBQUMsTUFBTSxRQUFRLE9BQU8sR0FBRztBQUN6QixZQUFNLElBQUksTUFBTSx1REFBdUQ7QUFBQSxJQUMzRTtBQUNBLFdBQU8sSUFBSSxTQUFTO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxNQUFNO0FBQUEsTUFDTixHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQXVETyxNQUFNLGVBQWUsUUFBUTtBQUFBLElBQ2hDLElBQUksWUFBWTtBQUNaLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxJQUNBLElBQUksY0FBYztBQUNkLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxJQUNBLE9BQU8sT0FBTztBQUNWLFlBQU0sRUFBRSxRQUFRLElBQUcsSUFBSyxLQUFLLG9CQUFvQixLQUFLO0FBQ3RELFVBQUksSUFBSSxlQUFlLGNBQWMsS0FBSztBQUN0QywwQkFBa0IsS0FBSztBQUFBLFVBQ25CLE1BQU0sYUFBYTtBQUFBLFVBQ25CLFVBQVUsY0FBYztBQUFBLFVBQ3hCLFVBQVUsSUFBSTtBQUFBLFFBQzlCLENBQWE7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUNBLFlBQU0sVUFBVSxLQUFLLEtBQUs7QUFDMUIsWUFBTSxZQUFZLEtBQUssS0FBSztBQUM1QixZQUFNLFFBQVEsQ0FBQyxHQUFHLElBQUksS0FBSyxRQUFPLENBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBRyxVQUFVO0FBQy9ELGVBQU87QUFBQSxVQUNILEtBQUssUUFBUSxPQUFPLElBQUksbUJBQW1CLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDO0FBQUEsVUFDOUUsT0FBTyxVQUFVLE9BQU8sSUFBSSxtQkFBbUIsS0FBSyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUM7QUFBQSxRQUN0RztBQUFBLE1BQ1EsQ0FBQztBQUNELFVBQUksSUFBSSxPQUFPLE9BQU87QUFDbEIsY0FBTSxXQUFXLG9CQUFJLElBQUc7QUFDeEIsZUFBTyxRQUFRLFVBQVUsS0FBSyxZQUFZO0FBQ3RDLHFCQUFXLFFBQVEsT0FBTztBQUN0QixrQkFBTSxNQUFNLE1BQU0sS0FBSztBQUN2QixrQkFBTSxRQUFRLE1BQU0sS0FBSztBQUN6QixnQkFBSSxJQUFJLFdBQVcsYUFBYSxNQUFNLFdBQVcsV0FBVztBQUN4RCxxQkFBTztBQUFBLFlBQ1g7QUFDQSxnQkFBSSxJQUFJLFdBQVcsV0FBVyxNQUFNLFdBQVcsU0FBUztBQUNwRCxxQkFBTyxNQUFLO0FBQUEsWUFDaEI7QUFDQSxxQkFBUyxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUs7QUFBQSxVQUN2QztBQUNBLGlCQUFPLEVBQUUsUUFBUSxPQUFPLE9BQU8sT0FBTyxTQUFRO0FBQUEsUUFDbEQsQ0FBQztBQUFBLE1BQ0wsT0FDSztBQUNELGNBQU0sV0FBVyxvQkFBSSxJQUFHO0FBQ3hCLG1CQUFXLFFBQVEsT0FBTztBQUN0QixnQkFBTSxNQUFNLEtBQUs7QUFDakIsZ0JBQU0sUUFBUSxLQUFLO0FBQ25CLGNBQUksSUFBSSxXQUFXLGFBQWEsTUFBTSxXQUFXLFdBQVc7QUFDeEQsbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxJQUFJLFdBQVcsV0FBVyxNQUFNLFdBQVcsU0FBUztBQUNwRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFDQSxtQkFBUyxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUs7QUFBQSxRQUN2QztBQUNBLGVBQU8sRUFBRSxRQUFRLE9BQU8sT0FBTyxPQUFPLFNBQVE7QUFBQSxNQUNsRDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0EsU0FBTyxTQUFTLENBQUMsU0FBUyxXQUFXLFdBQVc7QUFDNUMsV0FBTyxJQUFJLE9BQU87QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLE1BQ0EsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNPLE1BQU0sZUFBZSxRQUFRO0FBQUEsSUFDaEMsT0FBTyxPQUFPO0FBQ1YsWUFBTSxFQUFFLFFBQVEsSUFBRyxJQUFLLEtBQUssb0JBQW9CLEtBQUs7QUFDdEQsVUFBSSxJQUFJLGVBQWUsY0FBYyxLQUFLO0FBQ3RDLDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVSxJQUFJO0FBQUEsUUFDOUIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsWUFBTSxNQUFNLEtBQUs7QUFDakIsVUFBSSxJQUFJLFlBQVksTUFBTTtBQUN0QixZQUFJLElBQUksS0FBSyxPQUFPLElBQUksUUFBUSxPQUFPO0FBQ25DLDRCQUFrQixLQUFLO0FBQUEsWUFDbkIsTUFBTSxhQUFhO0FBQUEsWUFDbkIsU0FBUyxJQUFJLFFBQVE7QUFBQSxZQUNyQixNQUFNO0FBQUEsWUFDTixXQUFXO0FBQUEsWUFDWCxPQUFPO0FBQUEsWUFDUCxTQUFTLElBQUksUUFBUTtBQUFBLFVBQ3pDLENBQWlCO0FBQ0QsaUJBQU8sTUFBSztBQUFBLFFBQ2hCO0FBQUEsTUFDSjtBQUNBLFVBQUksSUFBSSxZQUFZLE1BQU07QUFDdEIsWUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsT0FBTztBQUNuQyw0QkFBa0IsS0FBSztBQUFBLFlBQ25CLE1BQU0sYUFBYTtBQUFBLFlBQ25CLFNBQVMsSUFBSSxRQUFRO0FBQUEsWUFDckIsTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLFlBQ1AsU0FBUyxJQUFJLFFBQVE7QUFBQSxVQUN6QyxDQUFpQjtBQUNELGlCQUFPLE1BQUs7QUFBQSxRQUNoQjtBQUFBLE1BQ0o7QUFDQSxZQUFNLFlBQVksS0FBSyxLQUFLO0FBQzVCLGVBQVMsWUFBWUMsV0FBVTtBQUMzQixjQUFNLFlBQVksb0JBQUksSUFBRztBQUN6QixtQkFBVyxXQUFXQSxXQUFVO0FBQzVCLGNBQUksUUFBUSxXQUFXO0FBQ25CLG1CQUFPO0FBQ1gsY0FBSSxRQUFRLFdBQVc7QUFDbkIsbUJBQU8sTUFBSztBQUNoQixvQkFBVSxJQUFJLFFBQVEsS0FBSztBQUFBLFFBQy9CO0FBQ0EsZUFBTyxFQUFFLFFBQVEsT0FBTyxPQUFPLE9BQU8sVUFBUztBQUFBLE1BQ25EO0FBQ0EsWUFBTSxXQUFXLENBQUMsR0FBRyxJQUFJLEtBQUssUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLE1BQU0sVUFBVSxPQUFPLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDekgsVUFBSSxJQUFJLE9BQU8sT0FBTztBQUNsQixlQUFPLFFBQVEsSUFBSSxRQUFRLEVBQUUsS0FBSyxDQUFDQSxjQUFhLFlBQVlBLFNBQVEsQ0FBQztBQUFBLE1BQ3pFLE9BQ0s7QUFDRCxlQUFPLFlBQVksUUFBUTtBQUFBLE1BQy9CO0FBQUEsSUFDSjtBQUFBLElBQ0EsSUFBSSxTQUFTLFNBQVM7QUFDbEIsYUFBTyxJQUFJLE9BQU87QUFBQSxRQUNkLEdBQUcsS0FBSztBQUFBLFFBQ1IsU0FBUyxFQUFFLE9BQU8sU0FBUyxTQUFTLFVBQVUsU0FBUyxPQUFPLEVBQUM7QUFBQSxNQUMzRSxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxTQUFTLFNBQVM7QUFDbEIsYUFBTyxJQUFJLE9BQU87QUFBQSxRQUNkLEdBQUcsS0FBSztBQUFBLFFBQ1IsU0FBUyxFQUFFLE9BQU8sU0FBUyxTQUFTLFVBQVUsU0FBUyxPQUFPLEVBQUM7QUFBQSxNQUMzRSxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSyxNQUFNLFNBQVM7QUFDaEIsYUFBTyxLQUFLLElBQUksTUFBTSxPQUFPLEVBQUUsSUFBSSxNQUFNLE9BQU87QUFBQSxJQUNwRDtBQUFBLElBQ0EsU0FBUyxTQUFTO0FBQ2QsYUFBTyxLQUFLLElBQUksR0FBRyxPQUFPO0FBQUEsSUFDOUI7QUFBQSxFQUNKO0FBQ0EsU0FBTyxTQUFTLENBQUMsV0FBVyxXQUFXO0FBQ25DLFdBQU8sSUFBSSxPQUFPO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQW1ITyxNQUFNLGdCQUFnQixRQUFRO0FBQUEsSUFDakMsSUFBSSxTQUFTO0FBQ1QsYUFBTyxLQUFLLEtBQUssT0FBTTtBQUFBLElBQzNCO0FBQUEsSUFDQSxPQUFPLE9BQU87QUFDVixZQUFNLEVBQUUsSUFBRyxJQUFLLEtBQUssb0JBQW9CLEtBQUs7QUFDOUMsWUFBTSxhQUFhLEtBQUssS0FBSyxPQUFNO0FBQ25DLGFBQU8sV0FBVyxPQUFPLEVBQUUsTUFBTSxJQUFJLE1BQU0sTUFBTSxJQUFJLE1BQU0sUUFBUSxJQUFHLENBQUU7QUFBQSxJQUM1RTtBQUFBLEVBQ0o7QUFDQSxVQUFRLFNBQVMsQ0FBQyxRQUFRLFdBQVc7QUFDakMsV0FBTyxJQUFJLFFBQVE7QUFBQSxNQUNmO0FBQUEsTUFDQSxVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxtQkFBbUIsUUFBUTtBQUFBLElBQ3BDLE9BQU8sT0FBTztBQUNWLFVBQUksTUFBTSxTQUFTLEtBQUssS0FBSyxPQUFPO0FBQ2hDLGNBQU0sTUFBTSxLQUFLLGdCQUFnQixLQUFLO0FBQ3RDLDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsVUFBVSxJQUFJO0FBQUEsVUFDZCxNQUFNLGFBQWE7QUFBQSxVQUNuQixVQUFVLEtBQUssS0FBSztBQUFBLFFBQ3BDLENBQWE7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUNBLGFBQU8sRUFBRSxRQUFRLFNBQVMsT0FBTyxNQUFNLEtBQUk7QUFBQSxJQUMvQztBQUFBLElBQ0EsSUFBSSxRQUFRO0FBQ1IsYUFBTyxLQUFLLEtBQUs7QUFBQSxJQUNyQjtBQUFBLEVBQ0o7QUFDQSxhQUFXLFNBQVMsQ0FBQyxPQUFPLFdBQVc7QUFDbkMsV0FBTyxJQUFJLFdBQVc7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFDQSxXQUFTLGNBQWMsUUFBUSxRQUFRO0FBQ25DLFdBQU8sSUFBSSxRQUFRO0FBQUEsTUFDZjtBQUFBLE1BQ0EsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNPLE1BQU0sZ0JBQWdCLFFBQVE7QUFBQSxJQUNqQyxPQUFPLE9BQU87QUFDVixVQUFJLE9BQU8sTUFBTSxTQUFTLFVBQVU7QUFDaEMsY0FBTSxNQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsY0FBTSxpQkFBaUIsS0FBSyxLQUFLO0FBQ2pDLDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsVUFBVSxLQUFLLFdBQVcsY0FBYztBQUFBLFVBQ3hDLFVBQVUsSUFBSTtBQUFBLFVBQ2QsTUFBTSxhQUFhO0FBQUEsUUFDbkMsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxDQUFDLEtBQUssUUFBUTtBQUNkLGFBQUssU0FBUyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU07QUFBQSxNQUMxQztBQUNBLFVBQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxNQUFNLElBQUksR0FBRztBQUM5QixjQUFNLE1BQU0sS0FBSyxnQkFBZ0IsS0FBSztBQUN0QyxjQUFNLGlCQUFpQixLQUFLLEtBQUs7QUFDakMsMEJBQWtCLEtBQUs7QUFBQSxVQUNuQixVQUFVLElBQUk7QUFBQSxVQUNkLE1BQU0sYUFBYTtBQUFBLFVBQ25CLFNBQVM7QUFBQSxRQUN6QixDQUFhO0FBQ0QsZUFBTztBQUFBLE1BQ1g7QUFDQSxhQUFPLEdBQUcsTUFBTSxJQUFJO0FBQUEsSUFDeEI7QUFBQSxJQUNBLElBQUksVUFBVTtBQUNWLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxJQUNBLElBQUksT0FBTztBQUNQLFlBQU0sYUFBYSxDQUFBO0FBQ25CLGlCQUFXLE9BQU8sS0FBSyxLQUFLLFFBQVE7QUFDaEMsbUJBQVcsR0FBRyxJQUFJO0FBQUEsTUFDdEI7QUFDQSxhQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsWUFBTSxhQUFhLENBQUE7QUFDbkIsaUJBQVcsT0FBTyxLQUFLLEtBQUssUUFBUTtBQUNoQyxtQkFBVyxHQUFHLElBQUk7QUFBQSxNQUN0QjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFDQSxJQUFJLE9BQU87QUFDUCxZQUFNLGFBQWEsQ0FBQTtBQUNuQixpQkFBVyxPQUFPLEtBQUssS0FBSyxRQUFRO0FBQ2hDLG1CQUFXLEdBQUcsSUFBSTtBQUFBLE1BQ3RCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQSxJQUNBLFFBQVEsUUFBUSxTQUFTLEtBQUssTUFBTTtBQUNoQyxhQUFPLFFBQVEsT0FBTyxRQUFRO0FBQUEsUUFDMUIsR0FBRyxLQUFLO0FBQUEsUUFDUixHQUFHO0FBQUEsTUFDZixDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsUUFBUSxRQUFRLFNBQVMsS0FBSyxNQUFNO0FBQ2hDLGFBQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sU0FBUyxHQUFHLENBQUMsR0FBRztBQUFBLFFBQ3ZFLEdBQUcsS0FBSztBQUFBLFFBQ1IsR0FBRztBQUFBLE1BQ2YsQ0FBUztBQUFBLElBQ0w7QUFBQSxFQUNKO0FBQ0EsVUFBUSxTQUFTO0FBQUEsRUFDVixNQUFNLHNCQUFzQixRQUFRO0FBQUEsSUFDdkMsT0FBTyxPQUFPO0FBQ1YsWUFBTSxtQkFBbUIsS0FBSyxtQkFBbUIsS0FBSyxLQUFLLE1BQU07QUFDakUsWUFBTSxNQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsVUFBSSxJQUFJLGVBQWUsY0FBYyxVQUFVLElBQUksZUFBZSxjQUFjLFFBQVE7QUFDcEYsY0FBTSxpQkFBaUIsS0FBSyxhQUFhLGdCQUFnQjtBQUN6RCwwQkFBa0IsS0FBSztBQUFBLFVBQ25CLFVBQVUsS0FBSyxXQUFXLGNBQWM7QUFBQSxVQUN4QyxVQUFVLElBQUk7QUFBQSxVQUNkLE1BQU0sYUFBYTtBQUFBLFFBQ25DLENBQWE7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksQ0FBQyxLQUFLLFFBQVE7QUFDZCxhQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssbUJBQW1CLEtBQUssS0FBSyxNQUFNLENBQUM7QUFBQSxNQUNuRTtBQUNBLFVBQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxNQUFNLElBQUksR0FBRztBQUM5QixjQUFNLGlCQUFpQixLQUFLLGFBQWEsZ0JBQWdCO0FBQ3pELDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsVUFBVSxJQUFJO0FBQUEsVUFDZCxNQUFNLGFBQWE7QUFBQSxVQUNuQixTQUFTO0FBQUEsUUFDekIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsYUFBTyxHQUFHLE1BQU0sSUFBSTtBQUFBLElBQ3hCO0FBQUEsSUFDQSxJQUFJLE9BQU87QUFDUCxhQUFPLEtBQUssS0FBSztBQUFBLElBQ3JCO0FBQUEsRUFDSjtBQUNBLGdCQUFjLFNBQVMsQ0FBQyxRQUFRLFdBQVc7QUFDdkMsV0FBTyxJQUFJLGNBQWM7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNPLE1BQU0sbUJBQW1CLFFBQVE7QUFBQSxJQUNwQyxTQUFTO0FBQ0wsYUFBTyxLQUFLLEtBQUs7QUFBQSxJQUNyQjtBQUFBLElBQ0EsT0FBTyxPQUFPO0FBQ1YsWUFBTSxFQUFFLElBQUcsSUFBSyxLQUFLLG9CQUFvQixLQUFLO0FBQzlDLFVBQUksSUFBSSxlQUFlLGNBQWMsV0FBVyxJQUFJLE9BQU8sVUFBVSxPQUFPO0FBQ3hFLDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVSxJQUFJO0FBQUEsUUFDOUIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsWUFBTSxjQUFjLElBQUksZUFBZSxjQUFjLFVBQVUsSUFBSSxPQUFPLFFBQVEsUUFBUSxJQUFJLElBQUk7QUFDbEcsYUFBTyxHQUFHLFlBQVksS0FBSyxDQUFDLFNBQVM7QUFDakMsZUFBTyxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU07QUFBQSxVQUNuQyxNQUFNLElBQUk7QUFBQSxVQUNWLFVBQVUsSUFBSSxPQUFPO0FBQUEsUUFDckMsQ0FBYTtBQUFBLE1BQ0wsQ0FBQyxDQUFDO0FBQUEsSUFDTjtBQUFBLEVBQ0o7QUFDQSxhQUFXLFNBQVMsQ0FBQyxRQUFRLFdBQVc7QUFDcEMsV0FBTyxJQUFJLFdBQVc7QUFBQSxNQUNsQixNQUFNO0FBQUEsTUFDTixVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxtQkFBbUIsUUFBUTtBQUFBLElBQ3BDLFlBQVk7QUFDUixhQUFPLEtBQUssS0FBSztBQUFBLElBQ3JCO0FBQUEsSUFDQSxhQUFhO0FBQ1QsYUFBTyxLQUFLLEtBQUssT0FBTyxLQUFLLGFBQWEsc0JBQXNCLGFBQzFELEtBQUssS0FBSyxPQUFPLFdBQVUsSUFDM0IsS0FBSyxLQUFLO0FBQUEsSUFDcEI7QUFBQSxJQUNBLE9BQU8sT0FBTztBQUNWLFlBQU0sRUFBRSxRQUFRLElBQUcsSUFBSyxLQUFLLG9CQUFvQixLQUFLO0FBQ3RELFlBQU0sU0FBUyxLQUFLLEtBQUssVUFBVTtBQUNuQyxZQUFNLFdBQVc7QUFBQSxRQUNiLFVBQVUsQ0FBQyxRQUFRO0FBQ2YsNEJBQWtCLEtBQUssR0FBRztBQUMxQixjQUFJLElBQUksT0FBTztBQUNYLG1CQUFPLE1BQUs7QUFBQSxVQUNoQixPQUNLO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSjtBQUFBLFFBQ0EsSUFBSSxPQUFPO0FBQ1AsaUJBQU8sSUFBSTtBQUFBLFFBQ2Y7QUFBQSxNQUNaO0FBQ1EsZUFBUyxXQUFXLFNBQVMsU0FBUyxLQUFLLFFBQVE7QUFDbkQsVUFBSSxPQUFPLFNBQVMsY0FBYztBQUM5QixjQUFNLFlBQVksT0FBTyxVQUFVLElBQUksTUFBTSxRQUFRO0FBQ3JELFlBQUksSUFBSSxPQUFPLE9BQU87QUFDbEIsaUJBQU8sUUFBUSxRQUFRLFNBQVMsRUFBRSxLQUFLLE9BQU9DLGVBQWM7QUFDeEQsZ0JBQUksT0FBTyxVQUFVO0FBQ2pCLHFCQUFPO0FBQ1gsa0JBQU1mLFVBQVMsTUFBTSxLQUFLLEtBQUssT0FBTyxZQUFZO0FBQUEsY0FDOUMsTUFBTWU7QUFBQSxjQUNOLE1BQU0sSUFBSTtBQUFBLGNBQ1YsUUFBUTtBQUFBLFlBQ2hDLENBQXFCO0FBQ0QsZ0JBQUlmLFFBQU8sV0FBVztBQUNsQixxQkFBTztBQUNYLGdCQUFJQSxRQUFPLFdBQVc7QUFDbEIscUJBQU8sTUFBTUEsUUFBTyxLQUFLO0FBQzdCLGdCQUFJLE9BQU8sVUFBVTtBQUNqQixxQkFBTyxNQUFNQSxRQUFPLEtBQUs7QUFDN0IsbUJBQU9BO0FBQUEsVUFDWCxDQUFDO0FBQUEsUUFDTCxPQUNLO0FBQ0QsY0FBSSxPQUFPLFVBQVU7QUFDakIsbUJBQU87QUFDWCxnQkFBTUEsVUFBUyxLQUFLLEtBQUssT0FBTyxXQUFXO0FBQUEsWUFDdkMsTUFBTTtBQUFBLFlBQ04sTUFBTSxJQUFJO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDNUIsQ0FBaUI7QUFDRCxjQUFJQSxRQUFPLFdBQVc7QUFDbEIsbUJBQU87QUFDWCxjQUFJQSxRQUFPLFdBQVc7QUFDbEIsbUJBQU8sTUFBTUEsUUFBTyxLQUFLO0FBQzdCLGNBQUksT0FBTyxVQUFVO0FBQ2pCLG1CQUFPLE1BQU1BLFFBQU8sS0FBSztBQUM3QixpQkFBT0E7QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUNBLFVBQUksT0FBTyxTQUFTLGNBQWM7QUFDOUIsY0FBTSxvQkFBb0IsQ0FBQyxRQUFRO0FBQy9CLGdCQUFNQSxVQUFTLE9BQU8sV0FBVyxLQUFLLFFBQVE7QUFDOUMsY0FBSSxJQUFJLE9BQU8sT0FBTztBQUNsQixtQkFBTyxRQUFRLFFBQVFBLE9BQU07QUFBQSxVQUNqQztBQUNBLGNBQUlBLG1CQUFrQixTQUFTO0FBQzNCLGtCQUFNLElBQUksTUFBTSwyRkFBMkY7QUFBQSxVQUMvRztBQUNBLGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksSUFBSSxPQUFPLFVBQVUsT0FBTztBQUM1QixnQkFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFdBQVc7QUFBQSxZQUN0QyxNQUFNLElBQUk7QUFBQSxZQUNWLE1BQU0sSUFBSTtBQUFBLFlBQ1YsUUFBUTtBQUFBLFVBQzVCLENBQWlCO0FBQ0QsY0FBSSxNQUFNLFdBQVc7QUFDakIsbUJBQU87QUFDWCxjQUFJLE1BQU0sV0FBVztBQUNqQixtQkFBTyxNQUFLO0FBRWhCLDRCQUFrQixNQUFNLEtBQUs7QUFDN0IsaUJBQU8sRUFBRSxRQUFRLE9BQU8sT0FBTyxPQUFPLE1BQU0sTUFBSztBQUFBLFFBQ3JELE9BQ0s7QUFDRCxpQkFBTyxLQUFLLEtBQUssT0FBTyxZQUFZLEVBQUUsTUFBTSxJQUFJLE1BQU0sTUFBTSxJQUFJLE1BQU0sUUFBUSxJQUFHLENBQUUsRUFBRSxLQUFLLENBQUMsVUFBVTtBQUNqRyxnQkFBSSxNQUFNLFdBQVc7QUFDakIscUJBQU87QUFDWCxnQkFBSSxNQUFNLFdBQVc7QUFDakIscUJBQU8sTUFBSztBQUNoQixtQkFBTyxrQkFBa0IsTUFBTSxLQUFLLEVBQUUsS0FBSyxNQUFNO0FBQzdDLHFCQUFPLEVBQUUsUUFBUSxPQUFPLE9BQU8sT0FBTyxNQUFNLE1BQUs7QUFBQSxZQUNyRCxDQUFDO0FBQUEsVUFDTCxDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0o7QUFDQSxVQUFJLE9BQU8sU0FBUyxhQUFhO0FBQzdCLFlBQUksSUFBSSxPQUFPLFVBQVUsT0FBTztBQUM1QixnQkFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLFdBQVc7QUFBQSxZQUNyQyxNQUFNLElBQUk7QUFBQSxZQUNWLE1BQU0sSUFBSTtBQUFBLFlBQ1YsUUFBUTtBQUFBLFVBQzVCLENBQWlCO0FBQ0QsY0FBSSxDQUFDLFFBQVEsSUFBSTtBQUNiLG1CQUFPO0FBQ1gsZ0JBQU1BLFVBQVMsT0FBTyxVQUFVLEtBQUssT0FBTyxRQUFRO0FBQ3BELGNBQUlBLG1CQUFrQixTQUFTO0FBQzNCLGtCQUFNLElBQUksTUFBTSxpR0FBaUc7QUFBQSxVQUNySDtBQUNBLGlCQUFPLEVBQUUsUUFBUSxPQUFPLE9BQU8sT0FBT0EsUUFBTTtBQUFBLFFBQ2hELE9BQ0s7QUFDRCxpQkFBTyxLQUFLLEtBQUssT0FBTyxZQUFZLEVBQUUsTUFBTSxJQUFJLE1BQU0sTUFBTSxJQUFJLE1BQU0sUUFBUSxJQUFHLENBQUUsRUFBRSxLQUFLLENBQUMsU0FBUztBQUNoRyxnQkFBSSxDQUFDLFFBQVEsSUFBSTtBQUNiLHFCQUFPO0FBQ1gsbUJBQU8sUUFBUSxRQUFRLE9BQU8sVUFBVSxLQUFLLE9BQU8sUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDQSxhQUFZO0FBQUEsY0FDN0UsUUFBUSxPQUFPO0FBQUEsY0FDZixPQUFPQTtBQUFBLFlBQy9CLEVBQXNCO0FBQUEsVUFDTixDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0o7QUFDQSxXQUFLLFlBQVksTUFBTTtBQUFBLElBQzNCO0FBQUEsRUFDSjtBQUNBLGFBQVcsU0FBUyxDQUFDLFFBQVEsUUFBUSxXQUFXO0FBQzVDLFdBQU8sSUFBSSxXQUFXO0FBQUEsTUFDbEI7QUFBQSxNQUNBLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEM7QUFBQSxNQUNBLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUNBLGFBQVcsdUJBQXVCLENBQUMsWUFBWSxRQUFRLFdBQVc7QUFDOUQsV0FBTyxJQUFJLFdBQVc7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsUUFBUSxFQUFFLE1BQU0sY0FBYyxXQUFXLFdBQVU7QUFBQSxNQUNuRCxVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBRU8sTUFBTSxvQkFBb0IsUUFBUTtBQUFBLElBQ3JDLE9BQU8sT0FBTztBQUNWLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSztBQUN0QyxVQUFJLGVBQWUsY0FBYyxXQUFXO0FBQ3hDLGVBQU8sR0FBRyxNQUFTO0FBQUEsTUFDdkI7QUFDQSxhQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSztBQUFBLElBQzNDO0FBQUEsSUFDQSxTQUFTO0FBQ0wsYUFBTyxLQUFLLEtBQUs7QUFBQSxJQUNyQjtBQUFBLEVBQ0o7QUFDQSxjQUFZLFNBQVMsQ0FBQyxNQUFNLFdBQVc7QUFDbkMsV0FBTyxJQUFJLFlBQVk7QUFBQSxNQUNuQixXQUFXO0FBQUEsTUFDWCxVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxvQkFBb0IsUUFBUTtBQUFBLElBQ3JDLE9BQU8sT0FBTztBQUNWLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSztBQUN0QyxVQUFJLGVBQWUsY0FBYyxNQUFNO0FBQ25DLGVBQU8sR0FBRyxJQUFJO0FBQUEsTUFDbEI7QUFDQSxhQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSztBQUFBLElBQzNDO0FBQUEsSUFDQSxTQUFTO0FBQ0wsYUFBTyxLQUFLLEtBQUs7QUFBQSxJQUNyQjtBQUFBLEVBQ0o7QUFDQSxjQUFZLFNBQVMsQ0FBQyxNQUFNLFdBQVc7QUFDbkMsV0FBTyxJQUFJLFlBQVk7QUFBQSxNQUNuQixXQUFXO0FBQUEsTUFDWCxVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxtQkFBbUIsUUFBUTtBQUFBLElBQ3BDLE9BQU8sT0FBTztBQUNWLFlBQU0sRUFBRSxJQUFHLElBQUssS0FBSyxvQkFBb0IsS0FBSztBQUM5QyxVQUFJLE9BQU8sSUFBSTtBQUNmLFVBQUksSUFBSSxlQUFlLGNBQWMsV0FBVztBQUM1QyxlQUFPLEtBQUssS0FBSyxhQUFZO0FBQUEsTUFDakM7QUFDQSxhQUFPLEtBQUssS0FBSyxVQUFVLE9BQU87QUFBQSxRQUM5QjtBQUFBLFFBQ0EsTUFBTSxJQUFJO0FBQUEsUUFDVixRQUFRO0FBQUEsTUFDcEIsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLGdCQUFnQjtBQUNaLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxFQUNKO0FBQ0EsYUFBVyxTQUFTLENBQUMsTUFBTSxXQUFXO0FBQ2xDLFdBQU8sSUFBSSxXQUFXO0FBQUEsTUFDbEIsV0FBVztBQUFBLE1BQ1gsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxjQUFjLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxVQUFVLE1BQU0sT0FBTztBQUFBLE1BQ25GLEdBQUcsb0JBQW9CLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ08sTUFBTSxpQkFBaUIsUUFBUTtBQUFBLElBQ2xDLE9BQU8sT0FBTztBQUNWLFlBQU0sRUFBRSxJQUFHLElBQUssS0FBSyxvQkFBb0IsS0FBSztBQUU5QyxZQUFNLFNBQVM7QUFBQSxRQUNYLEdBQUc7QUFBQSxRQUNILFFBQVE7QUFBQSxVQUNKLEdBQUcsSUFBSTtBQUFBLFVBQ1AsUUFBUSxDQUFBO0FBQUEsUUFDeEI7QUFBQSxNQUNBO0FBQ1EsWUFBTUEsVUFBUyxLQUFLLEtBQUssVUFBVSxPQUFPO0FBQUEsUUFDdEMsTUFBTSxPQUFPO0FBQUEsUUFDYixNQUFNLE9BQU87QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNKLEdBQUc7QUFBQSxRQUNuQjtBQUFBLE1BQ0EsQ0FBUztBQUNELFVBQUksUUFBUUEsT0FBTSxHQUFHO0FBQ2pCLGVBQU9BLFFBQU8sS0FBSyxDQUFDQSxZQUFXO0FBQzNCLGlCQUFPO0FBQUEsWUFDSCxRQUFRO0FBQUEsWUFDUixPQUFPQSxRQUFPLFdBQVcsVUFDbkJBLFFBQU8sUUFDUCxLQUFLLEtBQUssV0FBVztBQUFBLGNBQ25CLElBQUksUUFBUTtBQUNSLHVCQUFPLElBQUksU0FBUyxPQUFPLE9BQU8sTUFBTTtBQUFBLGNBQzVDO0FBQUEsY0FDQSxPQUFPLE9BQU87QUFBQSxZQUMxQyxDQUF5QjtBQUFBLFVBQ3pCO0FBQUEsUUFDWSxDQUFDO0FBQUEsTUFDTCxPQUNLO0FBQ0QsZUFBTztBQUFBLFVBQ0gsUUFBUTtBQUFBLFVBQ1IsT0FBT0EsUUFBTyxXQUFXLFVBQ25CQSxRQUFPLFFBQ1AsS0FBSyxLQUFLLFdBQVc7QUFBQSxZQUNuQixJQUFJLFFBQVE7QUFDUixxQkFBTyxJQUFJLFNBQVMsT0FBTyxPQUFPLE1BQU07QUFBQSxZQUM1QztBQUFBLFlBQ0EsT0FBTyxPQUFPO0FBQUEsVUFDdEMsQ0FBcUI7QUFBQSxRQUNyQjtBQUFBLE1BQ1E7QUFBQSxJQUNKO0FBQUEsSUFDQSxjQUFjO0FBQ1YsYUFBTyxLQUFLLEtBQUs7QUFBQSxJQUNyQjtBQUFBLEVBQ0o7QUFDQSxXQUFTLFNBQVMsQ0FBQyxNQUFNLFdBQVc7QUFDaEMsV0FBTyxJQUFJLFNBQVM7QUFBQSxNQUNoQixXQUFXO0FBQUEsTUFDWCxVQUFVLHNCQUFzQjtBQUFBLE1BQ2hDLFlBQVksT0FBTyxPQUFPLFVBQVUsYUFBYSxPQUFPLFFBQVEsTUFBTSxPQUFPO0FBQUEsTUFDN0UsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQUEsRUFDTyxNQUFNLGVBQWUsUUFBUTtBQUFBLElBQ2hDLE9BQU8sT0FBTztBQUNWLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSztBQUN0QyxVQUFJLGVBQWUsY0FBYyxLQUFLO0FBQ2xDLGNBQU0sTUFBTSxLQUFLLGdCQUFnQixLQUFLO0FBQ3RDLDBCQUFrQixLQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVSxJQUFJO0FBQUEsUUFDOUIsQ0FBYTtBQUNELGVBQU87QUFBQSxNQUNYO0FBQ0EsYUFBTyxFQUFFLFFBQVEsU0FBUyxPQUFPLE1BQU0sS0FBSTtBQUFBLElBQy9DO0FBQUEsRUFDSjtBQUNBLFNBQU8sU0FBUyxDQUFDLFdBQVc7QUFDeEIsV0FBTyxJQUFJLE9BQU87QUFBQSxNQUNkLFVBQVUsc0JBQXNCO0FBQUEsTUFDaEMsR0FBRyxvQkFBb0IsTUFBTTtBQUFBLElBQ3JDLENBQUs7QUFBQSxFQUNMO0FBQUEsRUFFTyxNQUFNLG1CQUFtQixRQUFRO0FBQUEsSUFDcEMsT0FBTyxPQUFPO0FBQ1YsWUFBTSxFQUFFLElBQUcsSUFBSyxLQUFLLG9CQUFvQixLQUFLO0FBQzlDLFlBQU0sT0FBTyxJQUFJO0FBQ2pCLGFBQU8sS0FBSyxLQUFLLEtBQUssT0FBTztBQUFBLFFBQ3pCO0FBQUEsUUFDQSxNQUFNLElBQUk7QUFBQSxRQUNWLFFBQVE7QUFBQSxNQUNwQixDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUztBQUNMLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxFQUNKO0FBQUEsRUFDTyxNQUFNLG9CQUFvQixRQUFRO0FBQUEsSUFDckMsT0FBTyxPQUFPO0FBQ1YsWUFBTSxFQUFFLFFBQVEsSUFBRyxJQUFLLEtBQUssb0JBQW9CLEtBQUs7QUFDdEQsVUFBSSxJQUFJLE9BQU8sT0FBTztBQUNsQixjQUFNLGNBQWMsWUFBWTtBQUM1QixnQkFBTSxXQUFXLE1BQU0sS0FBSyxLQUFLLEdBQUcsWUFBWTtBQUFBLFlBQzVDLE1BQU0sSUFBSTtBQUFBLFlBQ1YsTUFBTSxJQUFJO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDNUIsQ0FBaUI7QUFDRCxjQUFJLFNBQVMsV0FBVztBQUNwQixtQkFBTztBQUNYLGNBQUksU0FBUyxXQUFXLFNBQVM7QUFDN0IsbUJBQU8sTUFBSztBQUNaLG1CQUFPLE1BQU0sU0FBUyxLQUFLO0FBQUEsVUFDL0IsT0FDSztBQUNELG1CQUFPLEtBQUssS0FBSyxJQUFJLFlBQVk7QUFBQSxjQUM3QixNQUFNLFNBQVM7QUFBQSxjQUNmLE1BQU0sSUFBSTtBQUFBLGNBQ1YsUUFBUTtBQUFBLFlBQ2hDLENBQXFCO0FBQUEsVUFDTDtBQUFBLFFBQ0o7QUFDQSxlQUFPLFlBQVc7QUFBQSxNQUN0QixPQUNLO0FBQ0QsY0FBTSxXQUFXLEtBQUssS0FBSyxHQUFHLFdBQVc7QUFBQSxVQUNyQyxNQUFNLElBQUk7QUFBQSxVQUNWLE1BQU0sSUFBSTtBQUFBLFVBQ1YsUUFBUTtBQUFBLFFBQ3hCLENBQWE7QUFDRCxZQUFJLFNBQVMsV0FBVztBQUNwQixpQkFBTztBQUNYLFlBQUksU0FBUyxXQUFXLFNBQVM7QUFDN0IsaUJBQU8sTUFBSztBQUNaLGlCQUFPO0FBQUEsWUFDSCxRQUFRO0FBQUEsWUFDUixPQUFPLFNBQVM7QUFBQSxVQUNwQztBQUFBLFFBQ1ksT0FDSztBQUNELGlCQUFPLEtBQUssS0FBSyxJQUFJLFdBQVc7QUFBQSxZQUM1QixNQUFNLFNBQVM7QUFBQSxZQUNmLE1BQU0sSUFBSTtBQUFBLFlBQ1YsUUFBUTtBQUFBLFVBQzVCLENBQWlCO0FBQUEsUUFDTDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxPQUFPLE9BQU8sR0FBRyxHQUFHO0FBQ2hCLGFBQU8sSUFBSSxZQUFZO0FBQUEsUUFDbkIsSUFBSTtBQUFBLFFBQ0osS0FBSztBQUFBLFFBQ0wsVUFBVSxzQkFBc0I7QUFBQSxNQUM1QyxDQUFTO0FBQUEsSUFDTDtBQUFBLEVBQ0o7QUFBQSxFQUNPLE1BQU0sb0JBQW9CLFFBQVE7QUFBQSxJQUNyQyxPQUFPLE9BQU87QUFDVixZQUFNQSxVQUFTLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSztBQUMvQyxZQUFNLFNBQVMsQ0FBQyxTQUFTO0FBQ3JCLFlBQUksUUFBUSxJQUFJLEdBQUc7QUFDZixlQUFLLFFBQVEsT0FBTyxPQUFPLEtBQUssS0FBSztBQUFBLFFBQ3pDO0FBQ0EsZUFBTztBQUFBLE1BQ1g7QUFDQSxhQUFPLFFBQVFBLE9BQU0sSUFBSUEsUUFBTyxLQUFLLENBQUMsU0FBUyxPQUFPLElBQUksQ0FBQyxJQUFJLE9BQU9BLE9BQU07QUFBQSxJQUNoRjtBQUFBLElBQ0EsU0FBUztBQUNMLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDckI7QUFBQSxFQUNKO0FBQ0EsY0FBWSxTQUFTLENBQUMsTUFBTSxXQUFXO0FBQ25DLFdBQU8sSUFBSSxZQUFZO0FBQUEsTUFDbkIsV0FBVztBQUFBLE1BQ1gsVUFBVSxzQkFBc0I7QUFBQSxNQUNoQyxHQUFHLG9CQUFvQixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUFBLEVBQ0w7QUFrRE8sTUFBSTtBQUNYLEdBQUMsU0FBVWdCLHdCQUF1QjtBQUM5QixJQUFBQSx1QkFBc0IsV0FBVyxJQUFJO0FBQ3JDLElBQUFBLHVCQUFzQixXQUFXLElBQUk7QUFDckMsSUFBQUEsdUJBQXNCLFFBQVEsSUFBSTtBQUNsQyxJQUFBQSx1QkFBc0IsV0FBVyxJQUFJO0FBQ3JDLElBQUFBLHVCQUFzQixZQUFZLElBQUk7QUFDdEMsSUFBQUEsdUJBQXNCLFNBQVMsSUFBSTtBQUNuQyxJQUFBQSx1QkFBc0IsV0FBVyxJQUFJO0FBQ3JDLElBQUFBLHVCQUFzQixjQUFjLElBQUk7QUFDeEMsSUFBQUEsdUJBQXNCLFNBQVMsSUFBSTtBQUNuQyxJQUFBQSx1QkFBc0IsUUFBUSxJQUFJO0FBQ2xDLElBQUFBLHVCQUFzQixZQUFZLElBQUk7QUFDdEMsSUFBQUEsdUJBQXNCLFVBQVUsSUFBSTtBQUNwQyxJQUFBQSx1QkFBc0IsU0FBUyxJQUFJO0FBQ25DLElBQUFBLHVCQUFzQixVQUFVLElBQUk7QUFDcEMsSUFBQUEsdUJBQXNCLFdBQVcsSUFBSTtBQUNyQyxJQUFBQSx1QkFBc0IsVUFBVSxJQUFJO0FBQ3BDLElBQUFBLHVCQUFzQix1QkFBdUIsSUFBSTtBQUNqRCxJQUFBQSx1QkFBc0IsaUJBQWlCLElBQUk7QUFDM0MsSUFBQUEsdUJBQXNCLFVBQVUsSUFBSTtBQUNwQyxJQUFBQSx1QkFBc0IsV0FBVyxJQUFJO0FBQ3JDLElBQUFBLHVCQUFzQixRQUFRLElBQUk7QUFDbEMsSUFBQUEsdUJBQXNCLFFBQVEsSUFBSTtBQUNsQyxJQUFBQSx1QkFBc0IsYUFBYSxJQUFJO0FBQ3ZDLElBQUFBLHVCQUFzQixTQUFTLElBQUk7QUFDbkMsSUFBQUEsdUJBQXNCLFlBQVksSUFBSTtBQUN0QyxJQUFBQSx1QkFBc0IsU0FBUyxJQUFJO0FBQ25DLElBQUFBLHVCQUFzQixZQUFZLElBQUk7QUFDdEMsSUFBQUEsdUJBQXNCLGVBQWUsSUFBSTtBQUN6QyxJQUFBQSx1QkFBc0IsYUFBYSxJQUFJO0FBQ3ZDLElBQUFBLHVCQUFzQixhQUFhLElBQUk7QUFDdkMsSUFBQUEsdUJBQXNCLFlBQVksSUFBSTtBQUN0QyxJQUFBQSx1QkFBc0IsVUFBVSxJQUFJO0FBQ3BDLElBQUFBLHVCQUFzQixZQUFZLElBQUk7QUFDdEMsSUFBQUEsdUJBQXNCLFlBQVksSUFBSTtBQUN0QyxJQUFBQSx1QkFBc0IsYUFBYSxJQUFJO0FBQ3ZDLElBQUFBLHVCQUFzQixhQUFhLElBQUk7QUFBQSxFQUMzQyxHQUFHLDBCQUEwQix3QkFBd0IsQ0FBQSxFQUFHO0FBVXhELFFBQU0sYUFBYSxVQUFVO0FBQzdCLFFBQU0sYUFBYSxVQUFVO0FBRzdCLFFBQU0sY0FBYyxXQUFXO0FBT2IsV0FBUztBQUUzQixRQUFNLFlBQVksU0FBUztBQUMzQixRQUFNLGFBQWEsVUFBVTtBQUVYLFdBQVM7QUFDM0IsUUFBTSx5QkFBeUIsc0JBQXNCO0FBQzVCLGtCQUFnQjtBQUN2QixXQUFTO0FBTTNCLFFBQU0sY0FBYyxXQUFXO0FBQy9CLFFBQU0sV0FBVyxRQUFRO0FBRUwsYUFBVztBQUVWLGNBQVk7QUFDWixjQUFZO0FDOWtIMUIsUUFBTSxnQkFBZ0I7QUFBQTtBQUFBLElBRTNCLGVBQWU7QUFBQTtBQUFBLElBRWYsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUE7QUFBQSxJQUVqQixhQUFhO0FBQUE7QUFBQSxJQUViLFdBQVc7QUFBQSxJQUNYLGdCQUFnQjtBQUFBO0FBQUEsSUFFaEIsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsY0FBYztBQUFBO0FBQUEsSUFFZCxpQkFBaUI7QUFBQSxFQUNuQjtBQXNGQSxRQUFNLDRCQUE0QkMsV0FBUztBQUFBLElBQ3pDLE1BQU1DLFlBQVUsY0FBYyxhQUFhO0FBQUEsSUFDM0MsTUFBTUQsV0FBUztBQUFBLE1BQ2IsSUFBSUUsV0FBRTtBQUFBLE1BQ04sTUFBTUEsV0FBRTtBQUFBLE1BQ1IsYUFBYUEsV0FBRTtBQUFBLE1BQ2YsWUFBWUEsV0FBRSxFQUFTLFNBQUE7QUFBQSxNQUN2QixPQUFPQSxXQUFFO0FBQUEsTUFDVCxVQUFVQyxVQUFRRCxZQUFVO0FBQUEsTUFDNUIsT0FBT0UsWUFBRTtBQUFBLE1BQ1QsS0FBS0YsV0FBRSxFQUFTLElBQUEsRUFBTSxTQUFBO0FBQUEsSUFBUyxDQUNoQztBQUFBLEVBQ0gsQ0FBQztBQUVELFFBQU0sMkJBQTJCRixXQUFTO0FBQUEsSUFDeEMsTUFBTUMsWUFBVSxjQUFjLFlBQVk7QUFBQSxFQUM1QyxDQUFDO0FBRUQsUUFBTSw4QkFBOEJELFdBQVM7QUFBQSxJQUMzQyxNQUFNQyxZQUFVLGNBQWMsZUFBZTtBQUFBLElBQzdDLFVBQVVELFdBQVM7QUFBQSxNQUNqQixTQUFTSSxZQUFFLEVBQVUsU0FBQTtBQUFBLE1BQ3JCLGdCQUFnQkMsU0FBTyxDQUFDLFlBQVksWUFBWSxDQUFDLEVBQUUsU0FBQTtBQUFBLE1BQ25ELFlBQVlDLFdBQUUsRUFBUyxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxTQUFBO0FBQUEsTUFDdkMsT0FBT04sV0FBUztBQUFBLFFBQ2QsbUJBQW1CRyxVQUFRRCxXQUFFLENBQVEsRUFBRSxTQUFBO0FBQUEsUUFDdkMsbUJBQW1CQyxVQUFRRCxXQUFFLENBQVEsRUFBRSxTQUFBO0FBQUEsUUFDdkMsbUJBQW1CQyxVQUFRRCxXQUFFLENBQVEsRUFBRSxTQUFBO0FBQUEsUUFDdkMsbUJBQW1CQyxVQUFRRCxXQUFFLENBQVEsRUFBRSxTQUFBO0FBQUEsUUFDdkMsU0FBU0YsV0FBUztBQUFBLFVBQ2hCLFVBQVVJLFlBQUUsRUFBVSxTQUFBO0FBQUEsVUFDdEIsVUFBVUEsWUFBRSxFQUFVLFNBQUE7QUFBQSxVQUN0QixVQUFVQSxZQUFFLEVBQVUsU0FBQTtBQUFBLFVBQ3RCLFdBQVdBLFlBQUUsRUFBVSxTQUFBO0FBQUEsUUFBUyxDQUNqQyxFQUFFLFNBQUE7QUFBQSxNQUFTLENBQ2IsRUFBRSxTQUFBO0FBQUEsTUFDSCxTQUFTRixXQUFFLEVBQVMsU0FBQTtBQUFBLElBQVMsQ0FDOUI7QUFBQSxFQUNILENBQUM7QUFFRCxRQUFNLDBCQUEwQkYsV0FBUztBQUFBLElBQ3ZDLE1BQU1DLFlBQVUsY0FBYyxXQUFXO0FBQUEsRUFDM0MsQ0FBQztBQUVELFFBQU0sd0JBQXdCRCxXQUFTO0FBQUEsSUFDckMsTUFBTUMsWUFBVSxjQUFjLFNBQVM7QUFBQSxFQUN6QyxDQUFDO0FBRUQsUUFBTSw2QkFBNkJELFdBQVM7QUFBQSxJQUMxQyxNQUFNQyxZQUFVLGNBQWMsY0FBYztBQUFBLElBQzVDLEtBQUtBLFlBQVUsZUFBZTtBQUFBLElBQzlCLFFBQVFLLFdBQUUsRUFBUyxTQUFBO0FBQUEsRUFDckIsQ0FBQztBQUVELFFBQU0sOEJBQThCTixXQUFTO0FBQUEsSUFDM0MsTUFBTUMsWUFBVSxjQUFjLGVBQWU7QUFBQSxJQUM3QyxRQUFRQyxXQUFFO0FBQUEsSUFDVixPQUFPQSxXQUFFLEVBQVMsU0FBQTtBQUFBLElBQ2xCLFVBQVVBLFdBQUUsRUFBUyxTQUFBO0FBQUEsRUFDdkIsQ0FBQztBQUU0QksseUJBQXFCLFFBQVE7QUFBQSxJQUN4RDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQ3RDTSxpQkFBZSxpQkFBaUIsU0FBUztBQUM1QyxXQUFPckIsVUFBUSxRQUFRLFlBQVksT0FBTztBQUFBLEVBQzlDOzs7Ozs7OztBQ3JKQSxPQUFDLFNBQVUsUUFBUSxTQUFTO0FBR2lCO0FBQ3pDLGtCQUFRLE1BQU07QUFBQSxRQUNsQjtBQUFBLE1BT0EsR0FBRyxPQUFPLGVBQWUsY0FBYyxhQUFhLE9BQU8sU0FBUyxjQUFjLE9BQU9QLGlCQUFNLFNBQVVDLFNBQVE7QUFTL0csWUFBSSxFQUFFLFdBQVcsVUFBVSxXQUFXLE9BQU8sV0FBVyxXQUFXLE9BQU8sUUFBUSxLQUFLO0FBQ3JGLGdCQUFNLElBQUksTUFBTSwyREFBMkQ7QUFBQSxRQUMvRTtBQUNFLFlBQUksRUFBRSxXQUFXLFdBQVcsV0FBVyxRQUFRLFdBQVcsV0FBVyxRQUFRLFFBQVEsS0FBSztBQUN4RixnQkFBTSxtREFBbUQ7QUFPekQsZ0JBQU0sV0FBVyxtQkFBaUI7QUFJaEMsa0JBQU0sY0FBYztBQUFBLGNBQ2xCLFVBQVU7QUFBQSxnQkFDUixTQUFTO0FBQUEsa0JBQ1AsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixPQUFPO0FBQUEsa0JBQ0wsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLGFBQWE7QUFBQSxnQkFDWCxVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixPQUFPO0FBQUEsa0JBQ0wsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixlQUFlO0FBQUEsa0JBQ2IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixhQUFhO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixjQUFjO0FBQUEsa0JBQ1osV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixXQUFXO0FBQUEsa0JBQ1QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixRQUFRO0FBQUEsa0JBQ04sV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixjQUFjO0FBQUEsa0JBQ1osV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLGlCQUFpQjtBQUFBLGdCQUNmLFdBQVc7QUFBQSxrQkFDVCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLHdCQUF3QjtBQUFBO2dCQUUxQixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQTtnQkFFMUIsMkJBQTJCO0FBQUEsa0JBQ3pCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsZ0JBQWdCO0FBQUEsa0JBQ2QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixhQUFhO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYiwyQkFBMkI7QUFBQSxrQkFDekIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQTtnQkFFMUIsZ0JBQWdCO0FBQUEsa0JBQ2QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQTtnQkFFMUIsV0FBVztBQUFBLGtCQUNULFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsd0JBQXdCO0FBQUE7Z0JBRTFCLFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLHdCQUF3QjtBQUFBLGdCQUNwQztBQUFBO2NBRVEsZ0JBQWdCO0FBQUEsZ0JBQ2QsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsZUFBZTtBQUFBLGtCQUNiLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsaUJBQWlCO0FBQUEsa0JBQ2YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixtQkFBbUI7QUFBQSxrQkFDakIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixrQkFBa0I7QUFBQSxrQkFDaEIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixpQkFBaUI7QUFBQSxrQkFDZixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLHNCQUFzQjtBQUFBLGtCQUNwQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLG1CQUFtQjtBQUFBLGtCQUNqQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLG9CQUFvQjtBQUFBLGtCQUNsQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsWUFBWTtBQUFBLGdCQUNWLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsZ0JBQWdCO0FBQUEsZ0JBQ2QsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxXQUFXO0FBQUEsZ0JBQ1QsT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsc0JBQXNCO0FBQUEsa0JBQ3BCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxZQUFZO0FBQUEsZ0JBQ1YsbUJBQW1CO0FBQUEsa0JBQ2pCLFFBQVE7QUFBQSxvQkFDTixXQUFXO0FBQUEsb0JBQ1gsV0FBVztBQUFBLG9CQUNYLHFCQUFxQjtBQUFBLGtCQUNuQztBQUFBO2dCQUVVLFVBQVU7QUFBQSxrQkFDUixVQUFVO0FBQUEsb0JBQ1IsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQSxvQkFDWCxxQkFBcUI7QUFBQTtrQkFFdkIsWUFBWTtBQUFBLG9CQUNWLHFCQUFxQjtBQUFBLHNCQUNuQixXQUFXO0FBQUEsc0JBQ1gsV0FBVztBQUFBLG9CQUMzQjtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0E7QUFBQTtjQUVRLGFBQWE7QUFBQSxnQkFDWCxVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixTQUFTO0FBQUEsa0JBQ1AsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixlQUFlO0FBQUEsa0JBQ2IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixRQUFRO0FBQUEsa0JBQ04sV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQTtnQkFFMUIsU0FBUztBQUFBLGtCQUNQLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsY0FBYztBQUFBLGtCQUNaLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsUUFBUTtBQUFBLGtCQUNOLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsd0JBQXdCO0FBQUEsZ0JBQ3BDO0FBQUE7Y0FFUSxhQUFhO0FBQUEsZ0JBQ1gsNkJBQTZCO0FBQUEsa0JBQzNCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsNEJBQTRCO0FBQUEsa0JBQzFCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxXQUFXO0FBQUEsZ0JBQ1QsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsZUFBZTtBQUFBLGtCQUNiLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxRQUFRO0FBQUEsZ0JBQ04sa0JBQWtCO0FBQUEsa0JBQ2hCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsc0JBQXNCO0FBQUEsa0JBQ3BCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxZQUFZO0FBQUEsZ0JBQ1YscUJBQXFCO0FBQUEsa0JBQ25CLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxRQUFRO0FBQUEsZ0JBQ04sY0FBYztBQUFBLGtCQUNaLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxjQUFjO0FBQUEsZ0JBQ1osT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsV0FBVztBQUFBLGtCQUNULFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsY0FBYztBQUFBLGtCQUNaLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsaUJBQWlCO0FBQUEsa0JBQ2YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLGlCQUFpQjtBQUFBLGdCQUNmLFNBQVM7QUFBQSxrQkFDUCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLHNCQUFzQjtBQUFBLGtCQUNwQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsY0FBYztBQUFBLGdCQUNaLFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFFBQVE7QUFBQSxrQkFDTixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLHdCQUF3QjtBQUFBO2dCQUUxQixXQUFXO0FBQUEsa0JBQ1QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQTtnQkFFMUIsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsd0JBQXdCO0FBQUE7Z0JBRTFCLFFBQVE7QUFBQSxrQkFDTixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLHdCQUF3QjtBQUFBLGdCQUNwQztBQUFBO2NBRVEsZUFBZTtBQUFBLGdCQUNiLFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFdBQVc7QUFBQSxrQkFDVCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsV0FBVztBQUFBLGdCQUNULHFCQUFxQjtBQUFBLGtCQUNuQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLG1CQUFtQjtBQUFBLGtCQUNqQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLG1CQUFtQjtBQUFBLGtCQUNqQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLHNCQUFzQjtBQUFBLGtCQUNwQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGVBQWU7QUFBQSxrQkFDYixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLHFCQUFxQjtBQUFBLGtCQUNuQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLG1CQUFtQjtBQUFBLGtCQUNqQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsWUFBWTtBQUFBLGdCQUNWLGNBQWM7QUFBQSxrQkFDWixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLHFCQUFxQjtBQUFBLGtCQUNuQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFdBQVc7QUFBQSxrQkFDVCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsV0FBVztBQUFBLGdCQUNULFNBQVM7QUFBQSxrQkFDUCxTQUFTO0FBQUEsb0JBQ1AsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixPQUFPO0FBQUEsb0JBQ0wsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixpQkFBaUI7QUFBQSxvQkFDZixXQUFXO0FBQUEsb0JBQ1gsV0FBVztBQUFBO2tCQUViLFVBQVU7QUFBQSxvQkFDUixXQUFXO0FBQUEsb0JBQ1gsV0FBVztBQUFBO2tCQUViLE9BQU87QUFBQSxvQkFDTCxXQUFXO0FBQUEsb0JBQ1gsV0FBVztBQUFBLGtCQUN6QjtBQUFBO2dCQUVVLFdBQVc7QUFBQSxrQkFDVCxPQUFPO0FBQUEsb0JBQ0wsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixpQkFBaUI7QUFBQSxvQkFDZixXQUFXO0FBQUEsb0JBQ1gsV0FBVztBQUFBLGtCQUN6QjtBQUFBO2dCQUVVLFFBQVE7QUFBQSxrQkFDTixTQUFTO0FBQUEsb0JBQ1AsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixPQUFPO0FBQUEsb0JBQ0wsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixpQkFBaUI7QUFBQSxvQkFDZixXQUFXO0FBQUEsb0JBQ1gsV0FBVztBQUFBO2tCQUViLFVBQVU7QUFBQSxvQkFDUixXQUFXO0FBQUEsb0JBQ1gsV0FBVztBQUFBO2tCQUViLE9BQU87QUFBQSxvQkFDTCxXQUFXO0FBQUEsb0JBQ1gsV0FBVztBQUFBLGtCQUN6QjtBQUFBLGdCQUNBO0FBQUE7Y0FFUSxRQUFRO0FBQUEsZ0JBQ04scUJBQXFCO0FBQUEsa0JBQ25CLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsa0JBQWtCO0FBQUEsa0JBQ2hCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsV0FBVztBQUFBLGtCQUNULFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsaUJBQWlCO0FBQUEsa0JBQ2YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixPQUFPO0FBQUEsa0JBQ0wsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixjQUFjO0FBQUEsa0JBQ1osV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixXQUFXO0FBQUEsa0JBQ1QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixtQkFBbUI7QUFBQSxrQkFDakIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixhQUFhO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixhQUFhO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixhQUFhO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixRQUFRO0FBQUEsa0JBQ04sV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixTQUFTO0FBQUEsa0JBQ1AsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixhQUFhO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixlQUFlO0FBQUEsa0JBQ2IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixXQUFXO0FBQUEsa0JBQ1QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixtQkFBbUI7QUFBQSxrQkFDakIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLFlBQVk7QUFBQSxnQkFDVixPQUFPO0FBQUEsa0JBQ0wsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLGlCQUFpQjtBQUFBLGdCQUNmLGdCQUFnQjtBQUFBLGtCQUNkLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxjQUFjO0FBQUEsZ0JBQ1osMEJBQTBCO0FBQUEsa0JBQ3hCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxXQUFXO0FBQUEsZ0JBQ1QsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsY0FBYztBQUFBLGtCQUNaLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsa0JBQWtCO0FBQUEsa0JBQ2hCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUEsY0FDQTtBQUFBO0FBRU0sZ0JBQUksT0FBTyxLQUFLLFdBQVcsRUFBRSxXQUFXLEdBQUc7QUFDekMsb0JBQU0sSUFBSSxNQUFNLDZEQUE2RDtBQUFBLFlBQ3JGO0FBQUEsWUFZTSxNQUFNLHVCQUF1QixRQUFRO0FBQUEsY0FDbkMsWUFBWSxZQUFZLFFBQVEsUUFBVztBQUN6QyxzQkFBTSxLQUFLO0FBQ1gscUJBQUssYUFBYTtBQUFBLGNBQzVCO0FBQUEsY0FDUSxJQUFJLEtBQUs7QUFDUCxvQkFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLEdBQUc7QUFDbEIsdUJBQUssSUFBSSxLQUFLLEtBQUssV0FBVyxHQUFHLENBQUM7QUFBQSxnQkFDOUM7QUFDVSx1QkFBTyxNQUFNLElBQUksR0FBRztBQUFBLGNBQzlCO0FBQUEsWUFDQTtBQVNNLGtCQUFNLGFBQWEsV0FBUztBQUMxQixxQkFBTyxTQUFTLE9BQU8sVUFBVSxZQUFZLE9BQU8sTUFBTSxTQUFTO0FBQUEsWUFDM0U7QUFpQ00sa0JBQU0sZUFBZSxDQUFDLFNBQVMsYUFBYTtBQUMxQyxxQkFBTyxJQUFJLGlCQUFpQjtBQUMxQixvQkFBSSxjQUFjLFFBQVEsV0FBVztBQUNuQywwQkFBUSxPQUFPLElBQUksTUFBTSxjQUFjLFFBQVEsVUFBVSxPQUFPLENBQUM7QUFBQSxnQkFDN0UsV0FBcUIsU0FBUyxxQkFBcUIsYUFBYSxVQUFVLEtBQUssU0FBUyxzQkFBc0IsT0FBTztBQUN6RywwQkFBUSxRQUFRLGFBQWEsQ0FBQyxDQUFDO0FBQUEsZ0JBQzNDLE9BQWlCO0FBQ0wsMEJBQVEsUUFBUSxZQUFZO0FBQUEsZ0JBQ3hDO0FBQUEsY0FDQTtBQUFBLFlBQ0E7QUFDTSxrQkFBTSxxQkFBcUIsYUFBVyxXQUFXLElBQUksYUFBYTtBQTRCbEUsa0JBQU0sb0JBQW9CLENBQUMsTUFBTSxhQUFhO0FBQzVDLHFCQUFPLFNBQVMscUJBQXFCLFdBQVcsTUFBTTtBQUNwRCxvQkFBSSxLQUFLLFNBQVMsU0FBUyxTQUFTO0FBQ2xDLHdCQUFNLElBQUksTUFBTSxxQkFBcUIsU0FBUyxPQUFPLElBQUksbUJBQW1CLFNBQVMsT0FBTyxDQUFDLFFBQVEsSUFBSSxXQUFXLEtBQUssTUFBTSxFQUFFO0FBQUEsZ0JBQzdJO0FBQ1Usb0JBQUksS0FBSyxTQUFTLFNBQVMsU0FBUztBQUNsQyx3QkFBTSxJQUFJLE1BQU0sb0JBQW9CLFNBQVMsT0FBTyxJQUFJLG1CQUFtQixTQUFTLE9BQU8sQ0FBQyxRQUFRLElBQUksV0FBVyxLQUFLLE1BQU0sRUFBRTtBQUFBLGdCQUM1STtBQUNVLHVCQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxzQkFBSSxTQUFTLHNCQUFzQjtBQUlqQyx3QkFBSTtBQUNGLDZCQUFPLElBQUksRUFBRSxHQUFHLE1BQU0sYUFBYTtBQUFBLHdCQUNqQztBQUFBLHdCQUNBO0FBQUEseUJBQ0MsUUFBUSxDQUFDO0FBQUEsb0JBQzVCLFNBQXVCLFNBQVM7QUFDaEIsOEJBQVEsS0FBSyxHQUFHLElBQUksNEdBQWlILE9BQU87QUFDNUksNkJBQU8sSUFBSSxFQUFFLEdBQUcsSUFBSTtBQUlwQiwrQkFBUyx1QkFBdUI7QUFDaEMsK0JBQVMsYUFBYTtBQUN0Qiw4QkFBTztBQUFBLG9CQUN2QjtBQUFBLGtCQUNBLFdBQXVCLFNBQVMsWUFBWTtBQUM5QiwyQkFBTyxJQUFJLEVBQUUsR0FBRyxJQUFJO0FBQ3BCLDRCQUFPO0FBQUEsa0JBQ3JCLE9BQW1CO0FBQ0wsMkJBQU8sSUFBSSxFQUFFLEdBQUcsTUFBTSxhQUFhO0FBQUEsc0JBQ2pDO0FBQUEsc0JBQ0E7QUFBQSx1QkFDQyxRQUFRLENBQUM7QUFBQSxrQkFDMUI7QUFBQSxnQkFDQSxDQUFXO0FBQUEsY0FDWDtBQUFBLFlBQ0E7QUFxQk0sa0JBQU0sYUFBYSxDQUFDLFFBQVEsUUFBUSxZQUFZO0FBQzlDLHFCQUFPLElBQUksTUFBTSxRQUFRO0FBQUEsZ0JBQ3ZCLE1BQU0sY0FBYyxTQUFTLE1BQU07QUFDakMseUJBQU8sUUFBUSxLQUFLLFNBQVMsUUFBUSxHQUFHLElBQUk7QUFBQSxnQkFDeEQ7QUFBQSxjQUNBLENBQVM7QUFBQSxZQUNUO0FBQ00sZ0JBQUksaUJBQWlCLFNBQVMsS0FBSyxLQUFLLE9BQU8sVUFBVSxjQUFjO0FBeUJ2RSxrQkFBTSxhQUFhLENBQUMsUUFBUSxXQUFXLENBQUEsR0FBSSxXQUFXLE9BQU87QUFDM0Qsa0JBQUksUUFBUSx1QkFBTyxPQUFPLElBQUk7QUFDOUIsa0JBQUksV0FBVztBQUFBLGdCQUNiLElBQUlDLGNBQWEsTUFBTTtBQUNyQix5QkFBTyxRQUFRLFVBQVUsUUFBUTtBQUFBLGdCQUM3QztBQUFBLGdCQUNVLElBQUlBLGNBQWEsTUFBTSxVQUFVO0FBQy9CLHNCQUFJLFFBQVEsT0FBTztBQUNqQiwyQkFBTyxNQUFNLElBQUk7QUFBQSxrQkFDL0I7QUFDWSxzQkFBSSxFQUFFLFFBQVEsU0FBUztBQUNyQiwyQkFBTztBQUFBLGtCQUNyQjtBQUNZLHNCQUFJLFFBQVEsT0FBTyxJQUFJO0FBQ3ZCLHNCQUFJLE9BQU8sVUFBVSxZQUFZO0FBSS9CLHdCQUFJLE9BQU8sU0FBUyxJQUFJLE1BQU0sWUFBWTtBQUV4Qyw4QkFBUSxXQUFXLFFBQVEsT0FBTyxJQUFJLEdBQUcsU0FBUyxJQUFJLENBQUM7QUFBQSxvQkFDdkUsV0FBeUIsZUFBZSxVQUFVLElBQUksR0FBRztBQUd6QywwQkFBSSxVQUFVLGtCQUFrQixNQUFNLFNBQVMsSUFBSSxDQUFDO0FBQ3BELDhCQUFRLFdBQVcsUUFBUSxPQUFPLElBQUksR0FBRyxPQUFPO0FBQUEsb0JBQ2hFLE9BQXFCO0FBR0wsOEJBQVEsTUFBTSxLQUFLLE1BQU07QUFBQSxvQkFDekM7QUFBQSxrQkFDQSxXQUF1QixPQUFPLFVBQVUsWUFBWSxVQUFVLFNBQVMsZUFBZSxVQUFVLElBQUksS0FBSyxlQUFlLFVBQVUsSUFBSSxJQUFJO0FBSTVILDRCQUFRLFdBQVcsT0FBTyxTQUFTLElBQUksR0FBRyxTQUFTLElBQUksQ0FBQztBQUFBLGtCQUN0RSxXQUF1QixlQUFlLFVBQVUsR0FBRyxHQUFHO0FBRXhDLDRCQUFRLFdBQVcsT0FBTyxTQUFTLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQztBQUFBLGtCQUNyRSxPQUFtQjtBQUdMLDJCQUFPLGVBQWUsT0FBTyxNQUFNO0FBQUEsc0JBQ2pDLGNBQWM7QUFBQSxzQkFDZCxZQUFZO0FBQUEsc0JBQ1osTUFBTTtBQUNKLCtCQUFPLE9BQU8sSUFBSTtBQUFBLHNCQUNwQztBQUFBLHNCQUNnQixJQUFJQyxRQUFPO0FBQ1QsK0JBQU8sSUFBSSxJQUFJQTtBQUFBLHNCQUNqQztBQUFBLG9CQUNBLENBQWU7QUFDRCwyQkFBTztBQUFBLGtCQUNyQjtBQUNZLHdCQUFNLElBQUksSUFBSTtBQUNkLHlCQUFPO0FBQUEsZ0JBQ25CO0FBQUEsZ0JBQ1UsSUFBSUQsY0FBYSxNQUFNLE9BQU8sVUFBVTtBQUN0QyxzQkFBSSxRQUFRLE9BQU87QUFDakIsMEJBQU0sSUFBSSxJQUFJO0FBQUEsa0JBQzVCLE9BQW1CO0FBQ0wsMkJBQU8sSUFBSSxJQUFJO0FBQUEsa0JBQzdCO0FBQ1kseUJBQU87QUFBQSxnQkFDbkI7QUFBQSxnQkFDVSxlQUFlQSxjQUFhLE1BQU0sTUFBTTtBQUN0Qyx5QkFBTyxRQUFRLGVBQWUsT0FBTyxNQUFNLElBQUk7QUFBQSxnQkFDM0Q7QUFBQSxnQkFDVSxlQUFlQSxjQUFhLE1BQU07QUFDaEMseUJBQU8sUUFBUSxlQUFlLE9BQU8sSUFBSTtBQUFBLGdCQUNyRDtBQUFBO0FBYVEsa0JBQUksY0FBYyxPQUFPLE9BQU8sTUFBTTtBQUN0QyxxQkFBTyxJQUFJLE1BQU0sYUFBYSxRQUFRO0FBQUEsWUFDOUM7QUFrQk0sa0JBQU0sWUFBWSxpQkFBZTtBQUFBLGNBQy9CLFlBQVksUUFBUSxhQUFhLE1BQU07QUFDckMsdUJBQU8sWUFBWSxXQUFXLElBQUksUUFBUSxHQUFHLEdBQUcsSUFBSTtBQUFBLGNBQzlEO0FBQUEsY0FDUSxZQUFZLFFBQVEsVUFBVTtBQUM1Qix1QkFBTyxPQUFPLFlBQVksV0FBVyxJQUFJLFFBQVEsQ0FBQztBQUFBLGNBQzVEO0FBQUEsY0FDUSxlQUFlLFFBQVEsVUFBVTtBQUMvQix1QkFBTyxlQUFlLFdBQVcsSUFBSSxRQUFRLENBQUM7QUFBQSxjQUN4RDtBQUFBLFlBQ0E7QUFDTSxrQkFBTSw0QkFBNEIsSUFBSSxlQUFlLGNBQVk7QUFDL0Qsa0JBQUksT0FBTyxhQUFhLFlBQVk7QUFDbEMsdUJBQU87QUFBQSxjQUNqQjtBQVVRLHFCQUFPLFNBQVMsa0JBQWtCLEtBQUs7QUFDckMsc0JBQU0sYUFBYSxXQUFXLEtBQUssSUFBbUI7QUFBQSxrQkFDcEQsWUFBWTtBQUFBLG9CQUNWLFNBQVM7QUFBQSxvQkFDVCxTQUFTO0FBQUEsa0JBQ3ZCO0FBQUEsZ0JBQ0EsQ0FBVztBQUNELHlCQUFTLFVBQVU7QUFBQSxjQUM3QjtBQUFBLFlBQ0EsQ0FBTztBQUNELGtCQUFNLG9CQUFvQixJQUFJLGVBQWUsY0FBWTtBQUN2RCxrQkFBSSxPQUFPLGFBQWEsWUFBWTtBQUNsQyx1QkFBTztBQUFBLGNBQ2pCO0FBbUJRLHFCQUFPLFNBQVMsVUFBVSxTQUFTLFFBQVEsY0FBYztBQUN2RCxvQkFBSSxzQkFBc0I7QUFDMUIsb0JBQUk7QUFDSixvQkFBSSxzQkFBc0IsSUFBSSxRQUFRLGFBQVc7QUFDL0Msd0NBQXNCLFNBQVUsVUFBVTtBQUN4QywwQ0FBc0I7QUFDdEIsNEJBQVEsUUFBUTtBQUFBLGtCQUM5QjtBQUFBLGdCQUNBLENBQVc7QUFDRCxvQkFBSUU7QUFDSixvQkFBSTtBQUNGLGtCQUFBQSxVQUFTLFNBQVMsU0FBUyxRQUFRLG1CQUFtQjtBQUFBLGdCQUNsRSxTQUFtQixLQUFLO0FBQ1osa0JBQUFBLFVBQVMsUUFBUSxPQUFPLEdBQUc7QUFBQSxnQkFDdkM7QUFDVSxzQkFBTSxtQkFBbUJBLFlBQVcsUUFBUSxXQUFXQSxPQUFNO0FBSzdELG9CQUFJQSxZQUFXLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUI7QUFDaEUseUJBQU87QUFBQSxnQkFDbkI7QUFNVSxzQkFBTSxxQkFBcUIsYUFBVztBQUNwQywwQkFBUSxLQUFLLFNBQU87QUFFbEIsaUNBQWEsR0FBRztBQUFBLGtCQUM5QixHQUFlLFdBQVM7QUFHVix3QkFBSUM7QUFDSix3QkFBSSxVQUFVLGlCQUFpQixTQUFTLE9BQU8sTUFBTSxZQUFZLFdBQVc7QUFDMUUsc0JBQUFBLFdBQVUsTUFBTTtBQUFBLG9CQUNoQyxPQUFxQjtBQUNMLHNCQUFBQSxXQUFVO0FBQUEsb0JBQzFCO0FBQ2MsaUNBQWE7QUFBQSxzQkFDWCxtQ0FBbUM7QUFBQSxzQkFDbkMsU0FBQUE7QUFBQSxvQkFDaEIsQ0FBZTtBQUFBLGtCQUNmLENBQWEsRUFBRSxNQUFNLFNBQU87QUFFZCw0QkFBUSxNQUFNLDJDQUEyQyxHQUFHO0FBQUEsa0JBQzFFLENBQWE7QUFBQSxnQkFDYjtBQUtVLG9CQUFJLGtCQUFrQjtBQUNwQixxQ0FBbUJELE9BQU07QUFBQSxnQkFDckMsT0FBaUI7QUFDTCxxQ0FBbUIsbUJBQW1CO0FBQUEsZ0JBQ2xEO0FBR1UsdUJBQU87QUFBQSxjQUNqQjtBQUFBLFlBQ0EsQ0FBTztBQUNELGtCQUFNLDZCQUE2QixDQUFDO0FBQUEsY0FDbEM7QUFBQSxjQUNBO0FBQUEsZUFDQyxVQUFVO0FBQ1gsa0JBQUksY0FBYyxRQUFRLFdBQVc7QUFJbkMsb0JBQUksY0FBYyxRQUFRLFVBQVUsWUFBWSxrREFBa0Q7QUFDaEcsMEJBQU87QUFBQSxnQkFDbkIsT0FBaUI7QUFDTCx5QkFBTyxJQUFJLE1BQU0sY0FBYyxRQUFRLFVBQVUsT0FBTyxDQUFDO0FBQUEsZ0JBQ3JFO0FBQUEsY0FDQSxXQUFtQixTQUFTLE1BQU0sbUNBQW1DO0FBRzNELHVCQUFPLElBQUksTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLGNBQ3pDLE9BQWU7QUFDTCx3QkFBUSxLQUFLO0FBQUEsY0FDdkI7QUFBQSxZQUNBO0FBQ00sa0JBQU0scUJBQXFCLENBQUMsTUFBTSxVQUFVLG9CQUFvQixTQUFTO0FBQ3ZFLGtCQUFJLEtBQUssU0FBUyxTQUFTLFNBQVM7QUFDbEMsc0JBQU0sSUFBSSxNQUFNLHFCQUFxQixTQUFTLE9BQU8sSUFBSSxtQkFBbUIsU0FBUyxPQUFPLENBQUMsUUFBUSxJQUFJLFdBQVcsS0FBSyxNQUFNLEVBQUU7QUFBQSxjQUMzSTtBQUNRLGtCQUFJLEtBQUssU0FBUyxTQUFTLFNBQVM7QUFDbEMsc0JBQU0sSUFBSSxNQUFNLG9CQUFvQixTQUFTLE9BQU8sSUFBSSxtQkFBbUIsU0FBUyxPQUFPLENBQUMsUUFBUSxJQUFJLFdBQVcsS0FBSyxNQUFNLEVBQUU7QUFBQSxjQUMxSTtBQUNRLHFCQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxzQkFBTSxZQUFZLDJCQUEyQixLQUFLLE1BQU07QUFBQSxrQkFDdEQ7QUFBQSxrQkFDQTtBQUFBLGdCQUNaLENBQVc7QUFDRCxxQkFBSyxLQUFLLFNBQVM7QUFDbkIsZ0NBQWdCLFlBQVksR0FBRyxJQUFJO0FBQUEsY0FDN0MsQ0FBUztBQUFBLFlBQ1Q7QUFDTSxrQkFBTSxpQkFBaUI7QUFBQSxjQUNyQixVQUFVO0FBQUEsZ0JBQ1IsU0FBUztBQUFBLGtCQUNQLG1CQUFtQixVQUFVLHlCQUF5QjtBQUFBLGdCQUNsRTtBQUFBO2NBRVEsU0FBUztBQUFBLGdCQUNQLFdBQVcsVUFBVSxpQkFBaUI7QUFBQSxnQkFDdEMsbUJBQW1CLFVBQVUsaUJBQWlCO0FBQUEsZ0JBQzlDLGFBQWEsbUJBQW1CLEtBQUssTUFBTSxlQUFlO0FBQUEsa0JBQ3hELFNBQVM7QUFBQSxrQkFDVCxTQUFTO0FBQUEsaUJBQ1Y7QUFBQTtjQUVILE1BQU07QUFBQSxnQkFDSixhQUFhLG1CQUFtQixLQUFLLE1BQU0sZUFBZTtBQUFBLGtCQUN4RCxTQUFTO0FBQUEsa0JBQ1QsU0FBUztBQUFBLGlCQUNWO0FBQUEsY0FDWDtBQUFBO0FBRU0sa0JBQU0sa0JBQWtCO0FBQUEsY0FDdEIsT0FBTztBQUFBLGdCQUNMLFNBQVM7QUFBQSxnQkFDVCxTQUFTO0FBQUE7Y0FFWCxLQUFLO0FBQUEsZ0JBQ0gsU0FBUztBQUFBLGdCQUNULFNBQVM7QUFBQTtjQUVYLEtBQUs7QUFBQSxnQkFDSCxTQUFTO0FBQUEsZ0JBQ1QsU0FBUztBQUFBLGNBQ25CO0FBQUE7QUFFTSx3QkFBWSxVQUFVO0FBQUEsY0FDcEIsU0FBUztBQUFBLGdCQUNQLEtBQUs7QUFBQTtjQUVQLFVBQVU7QUFBQSxnQkFDUixLQUFLO0FBQUE7Y0FFUCxVQUFVO0FBQUEsZ0JBQ1IsS0FBSztBQUFBLGNBQ2Y7QUFBQTtBQUVNLG1CQUFPLFdBQVcsZUFBZSxnQkFBZ0IsV0FBVztBQUFBLFVBQ2xFO0FBSUksVUFBQUgsUUFBTyxVQUFVLFNBQVMsTUFBTTtBQUFBLFFBQ3BDLE9BQVM7QUFDTCxVQUFBQSxRQUFPLFVBQVUsV0FBVztBQUFBLFFBQ2hDO0FBQUEsTUFDQSxDQUFDO0FBQUE7Ozs7O0FDeHFDRCxRQUFNLHdCQUF3QjtBQUM5QixRQUFNLHNCQUFzQixvQkFBSSxJQUFJLENBQUMsS0FBSyxXQUFXLFFBQVEsQ0FBQztBQUt2RCxXQUFTLG1CQUFtQixNQUFjLE9BQU8sU0FBUyxNQUFlO0FBQzlFLFFBQUk7QUFDRixZQUFNLFNBQVMsSUFBSSxJQUFJLEdBQUc7QUFDMUIsYUFDRSxzQkFBc0IsS0FBSyxPQUFPLFFBQVEsTUFDekMsT0FBTyxhQUFhLElBQUksR0FBRyxLQUFLLG9CQUFvQixJQUFJLE9BQU8sUUFBUTtBQUFBLElBRTVFLFFBQVE7QUFDTixhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUNoQ0EsUUFBTSxhQUFhO0FBQ25CLFFBQU0sa0JBQWtCO0FBRXhCLFFBQU0saUJBQWlCO0FBQUEsS0FDbEIsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNEJmLFdBQVMsb0JBQTZCO0FBQ3BDLFVBQU0sV0FBVyxPQUFPLFNBQVMsU0FBUyxZQUFBO0FBQzFDLFVBQU0sT0FBTyxPQUFPLFNBQVMsU0FBUyxZQUFBO0FBRXRDLFVBQU0sY0FBYztBQUFBLE1BQ2xCO0FBQUEsTUFBZTtBQUFBLE1BQW1CO0FBQUEsTUFBZ0I7QUFBQSxNQUNsRDtBQUFBLE1BQWlCO0FBQUEsTUFBaUI7QUFBQSxNQUNsQztBQUFBLE1BQWM7QUFBQSxNQUFjO0FBQUEsTUFBYTtBQUFBLE1BQ3pDO0FBQUEsTUFBYTtBQUFBLE1BQWE7QUFBQSxNQUFjO0FBQUEsTUFDeEM7QUFBQSxNQUFlO0FBQUEsTUFBZTtBQUFBLElBQUE7QUFFaEMsUUFBSSxZQUFZLEtBQUssQ0FBQSxNQUFLLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRyxRQUFPO0FBRXhELFVBQU0sWUFBWTtBQUFBLE1BQUM7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFhO0FBQUEsTUFDOUQ7QUFBQSxNQUFZO0FBQUEsTUFBYTtBQUFBLE1BQVU7QUFBQSxNQUFjO0FBQUEsTUFBYTtBQUFBLElBQUE7QUFDaEUsUUFBSSxVQUFVLEtBQUssQ0FBQSxNQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsRUFBRyxRQUFPO0FBRXBELFVBQU0sU0FBUyxTQUFTLGlCQUFpQixtRUFBbUU7QUFDNUcsUUFBSSxPQUFPLFNBQVMsRUFBRyxRQUFPO0FBRTlCLFdBQU87QUFBQSxFQUNUO0FBTUEsV0FBUyxjQUFvQjtBQUMzQixRQUFJO0FBQ0YsVUFBSSxTQUFTLGVBQWUsVUFBVSxFQUFHO0FBRXpDLGVBQVMsS0FBSyxNQUFNLFlBQVksWUFBWSxVQUFVLFdBQVc7QUFFakUsWUFBTSxTQUFTLFNBQVMsY0FBYyxLQUFLO0FBQzNDLGFBQU8sS0FBSztBQUNaLGFBQU8sWUFBWSxVQUFVLGNBQWM7QUFBQTtBQUFBO0FBRzNDLGVBQVMsS0FBSyxZQUFZLE1BQU07QUFBQSxJQUNsQyxTQUFTLEtBQUs7QUFDWixjQUFRLE1BQU0sb0NBQW9DLEdBQUc7QUFBQSxJQUN2RDtBQUFBLEVBQ0Y7QUFFQSxXQUFTLGNBQW9CO0FBQzNCLGFBQVMsZUFBZSxVQUFVLEdBQUcsT0FBQTtBQUFBLEVBRXZDO0FBRUEsV0FBUyxxQkFBMkI7QUFDbEMsUUFBSSxTQUFTLGVBQWUsZUFBZSxFQUFHO0FBQzlDLFVBQU0sTUFBTSxTQUFTLGNBQWMsS0FBSztBQUN4QyxRQUFJLEtBQUs7QUFDVCxRQUFJLFlBQVk7QUFDaEIsUUFBSSxRQUFRO0FBQ1osV0FBTyxPQUFPLElBQUksT0FBTztBQUFBLE1BQ3ZCLFVBQVU7QUFBQSxNQUFTLFFBQVE7QUFBQSxNQUFRLE9BQU87QUFBQSxNQUMxQyxPQUFPO0FBQUEsTUFBUSxRQUFRO0FBQUEsTUFBUSxjQUFjO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQVcsT0FBTztBQUFBLE1BQzlCLFNBQVM7QUFBQSxNQUFRLFlBQVk7QUFBQSxNQUFVLGdCQUFnQjtBQUFBLE1BQ3ZELFFBQVE7QUFBQSxNQUFXLFFBQVE7QUFBQSxNQUMzQixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFBd0IsUUFBUTtBQUFBLElBQUEsQ0FDN0M7QUFDRCxRQUFJLGlCQUFpQixjQUFjLE1BQU07QUFBRSxVQUFJLE1BQU0sWUFBWTtBQUFBLElBQWMsQ0FBQztBQUNoRixRQUFJLGlCQUFpQixjQUFjLE1BQU07QUFBRSxVQUFJLE1BQU0sWUFBWTtBQUFBLElBQVksQ0FBQztBQUM5RSxRQUFJLGlCQUFpQixTQUFTLE1BQU07QUFDbEMsVUFBSSxPQUFBO0FBQ0osa0JBQUE7QUFDQSxpQkFBVyxNQUFNO0FBQUUsb0JBQUE7QUFBZSxZQUFJO0FBQUUscUJBQUE7QUFBQSxRQUFjLFNBQVMsR0FBRztBQUFFLGtCQUFRLE1BQU0sQ0FBQztBQUFBLFFBQUc7QUFBQSxNQUFFLEdBQUcsR0FBRztBQUFBLElBQ2hHLENBQUM7QUFDRCxhQUFTLEtBQUssWUFBWSxHQUFHO0FBQUEsRUFDL0I7QUFFQSxXQUFTLHFCQUEyQjtBQUNsQyxhQUFTLGVBQWUsZUFBZSxHQUFHLE9BQUE7QUFBQSxFQUM1QztBQUVBLFdBQVMsbUJBQXlCO0FBQ2hDLFFBQUk7QUFDRixVQUFJLGdCQUFnQjtBQUFFLG9CQUFBO0FBQWUsMkJBQUE7QUFBQSxNQUFzQixPQUN0RDtBQUFFLDJCQUFBO0FBQXNCLG1CQUFBO0FBQUEsTUFBYztBQUFBLElBQzdDLFNBQVMsS0FBSztBQUNaLGNBQVEsTUFBTSxtQ0FBbUMsR0FBRztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQU1BLFFBQUEsYUFBZSxvQkFBb0I7QUFBQSxJQUNqQyxTQUFTLENBQUMsWUFBWTtBQUFBLElBQ3RCLE9BQU87QUFBQSxJQUVQLE1BQU0sT0FBTztBQUNYLGNBQVEsSUFBSSw4QkFBOEIsT0FBTyxTQUFTLFFBQVE7QUFHbEUsVUFBSSxzQkFBc0I7QUFDeEIsZ0JBQVEsSUFBSSxpREFBaUQ7QUFDN0Q7QUFBQSxNQUNGO0FBR0EsZUFBUyxpQkFBaUIsV0FBVyxDQUFDLE1BQU07QUFDMUMsWUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxZQUFBLE1BQWtCLEtBQUs7QUFDckYsWUFBRSxlQUFBO0FBQWtCLFlBQUUsZ0JBQUE7QUFBbUIsMkJBQUE7QUFBQSxRQUMzQztBQUNBLFlBQUksRUFBRSxVQUFVLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxZQUFBLE1BQWtCLEtBQUs7QUFDdEYsWUFBRSxlQUFBO0FBQWtCLFlBQUUsZ0JBQUE7QUFBbUIsMkJBQUE7QUFBQSxRQUMzQztBQUFBLE1BQ0YsR0FBRyxJQUFJO0FBR1AsY0FBUSxRQUFRLFVBQVUsWUFBWSxDQUFDLFlBQWlCO0FBQ3RELFlBQUksUUFBUSxTQUFTLGNBQWMsY0FBZSxrQkFBQTtBQUNsRCxZQUFJLFFBQVEsU0FBUyxjQUFjLGFBQWE7QUFBRSw2QkFBQTtBQUFzQixjQUFJO0FBQUUsZ0JBQUksQ0FBQyxhQUFBLEVBQWdCLFlBQUE7QUFBQSxVQUFjLFNBQVMsR0FBRztBQUFFLG9CQUFRLE1BQU0sQ0FBQztBQUFBLFVBQUc7QUFBQSxRQUFFO0FBQ25KLFlBQUksUUFBUSxTQUFTLGNBQWMsY0FBYztBQUFFLGNBQUk7QUFBRSxnQkFBSSxnQkFBZ0I7QUFBRSwwQkFBQTtBQUFlLGlDQUFBO0FBQUEsWUFBc0I7QUFBQSxVQUFFLFNBQVMsR0FBRztBQUFFLG9CQUFRLE1BQU0sQ0FBQztBQUFBLFVBQUc7QUFBQSxRQUFFO0FBQUEsTUFDMUosQ0FBQztBQUdELFVBQUksZUFBZTtBQUNuQixVQUFJLGlCQUFzQixDQUFBO0FBQzFCLFVBQUk7QUFDRixjQUFNLGtCQUFrQixpQkFBK0IsRUFBRSxNQUFNLGNBQWMsY0FBYztBQUMzRixjQUFNLFVBQVUsSUFBSSxRQUFRLENBQUMsR0FBRyxXQUFXLFdBQVcsTUFBTSxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQyxHQUFHLEdBQUksQ0FBQztBQUN4RyxjQUFNLFdBQVcsTUFBTSxRQUFRLEtBQUssQ0FBQyxpQkFBaUIsT0FBTyxDQUFDO0FBQzlELFlBQUksVUFBVSxRQUFRLGFBQWEsU0FBUyxVQUFVLFlBQVksTUFBTyxnQkFBZTtBQUN4Rix5QkFBaUIsVUFBVSxVQUFVLENBQUE7QUFDckMsZ0JBQVEsSUFBSSx5Q0FBeUMsWUFBWTtBQUFBLE1BQ25FLFNBQVMsS0FBSztBQUNaLGdCQUFRLEtBQUsseURBQXlELEdBQUc7QUFBQSxNQUMzRTtBQUVBLFVBQUksQ0FBQyxjQUFjO0FBQUUsMkJBQUE7QUFBc0I7QUFBQSxNQUFRO0FBQ25ELFVBQUkscUJBQXFCO0FBQUUsMkJBQUE7QUFBc0I7QUFBQSxNQUFRO0FBRXpELGNBQVEsSUFBSSw2QkFBNkI7QUFDekMsa0JBQUE7QUFFQSxpQkFBVztBQUFBLFFBQ1QsTUFBTSxlQUFlLFFBQVE7QUFBQSxRQUM3QixVQUFVLGVBQWU7QUFBQSxRQUN6QixNQUFNLGVBQWU7QUFBQSxRQUNyQixVQUFVLGVBQWU7QUFBQSxNQUFBLENBQzFCLEVBQUUsS0FBSyxNQUFNO0FBQ1osb0JBQUE7QUFDQSxnQkFBUSxJQUFJLDRCQUE0QjtBQUFBLE1BQzFDLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUTtBQUNoQixnQkFBUSxNQUFNLDRCQUE0QixHQUFHO0FBQzdDLG9CQUFBO0FBQ0EsMkJBQUE7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwzLDYsNyw4LDksMTMsMTQsMTUsMTYsMTcsMTgsMTksMjJdfQ==
reader;