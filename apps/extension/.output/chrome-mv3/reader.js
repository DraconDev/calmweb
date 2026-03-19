var reader=(function(){"use strict";function Rr(r){return r}const bt=["nav","aside","footer","header:not(article header)",".ad",".advertisement",".ads",".ad-container",".ad-slot",".ad-wrapper",".sidebar",".related",".recommended",".suggestions",".social-share",".share-buttons",".social-links",".social-bar",".comments","#comments",".comment-section","script","style","noscript","iframe",'[class*="newsletter"]','[class*="subscribe"]','[class*="popup"]','[class*="modal"]',".author-bio",".author-info",".about-author",".tags",".tag-list",".categories",".breadcrumb",".breadcrumbs",".pagination",".pager",".cookie-notice",".gdpr",'[class*="consent"]','[class*="cookie-banner"]','[class*="intercom"]','[class*="drift"]','[class*="zendesk"]','[class*="crisp"]','[class*="livechat"]','[class*="chat-widget"]',"#intercom-container",'[class*="paywall"]','[class*="premium"]','[class*="metered"]','[class*="overlay"]','[class*="backdrop"]','[class*="app-banner"]','[class*="install-prompt"]','[class*="download-app"]','[class*="survey"]','[class*="feedback"]','[class*="poll"]','[class*="rating"]','[class*="sponsored"]','[class*="promoted"]','[class*="native-ad"]','[style*="position: sticky"]','[style*="position:fixed"]'],vt=["#mw-content-text",".mw-parser-output","article",'[role="article"]',"main article",".post-content",".article-content",".entry-content",".post-body",".article-body",".content-body","main",'[role="main"]',"#content",".content"],_t=["article h1",'h1[itemprop="headline"]','[property="og:title"]','meta[name="twitter:title"]',"h1",".post-title",".article-title",".entry-title"],wt=['[rel="author"]','[itemprop="author"]',".author-name",".byline",".author",'meta[name="author"]'],kt=["time",'[itemprop="datePublished"]',"[datetime]",".post-date",".article-date",".publish-date",'meta[name="date"]','[property="article:published_time"]'];function Tt(r,e,t=!0){const s=Ct(r),n=St(r),a=Et(r),i=Nt(r),o=t?[]:Ot(i),m=Rt(i,t),f=It(r),y=$t(m.textContent||"");return{title:s,author:n,date:a,content:m.textContent||"",contentHtml:m,images:o,source:new URL(e).hostname,favicon:f,readingTime:y,url:e}}function Ct(r){for(const e of _t){const t=r.querySelector(e);if(t){const s=t.getAttribute("content")||t.textContent?.trim();if(s&&s.length>5&&s.length<300)return s}}return r.title||"Untitled"}function St(r){for(const e of wt){const t=r.querySelector(e);if(t){let s=t.getAttribute("content")||t.textContent?.trim();if(s&&s.length<100)return s=s.replace(/^(by|written by|reported by)\s+/i,""),s}}}function Et(r){for(const e of kt){const t=r.querySelector(e);if(t){const n=t.getAttribute("datetime")||t.getAttribute("content")||t.textContent?.trim();if(n)try{const a=new Date(n);if(!isNaN(a.getTime()))return a.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch{continue}}}}function Nt(r){for(const n of vt){const a=r.querySelector(n);if(a&&a.textContent&&a.textContent.trim().length>100)return a}const e=r.querySelectorAll("div, section, main");let t=null,s=0;for(const n of Array.from(e)){const a=n,i=a.textContent?.trim()||"",o=a.querySelectorAll("p").length,m=i.length+o*500;m>s&&(s=m,t=a)}return t||r.body}function Rt(r,e=!0){const t=r.cloneNode(!0);return bt.forEach(s=>{t.querySelectorAll(s).forEach(n=>n.remove())}),e&&(t.querySelectorAll("figure").forEach(s=>{const n=s.querySelector("figcaption");if(n&&n.textContent?.trim()){const a=document.createElement("p");a.textContent=n.textContent.trim(),a.classList.add("calmweb-caption"),s.replaceWith(a)}else s.remove()}),t.querySelectorAll("img").forEach(s=>{const n=parseInt(s.getAttribute("width")||"0"),a=parseInt(s.getAttribute("height")||"0"),i=s.getAttribute("src")||"";n>0&&n<=32||a>0&&a<=32||i.startsWith("data:image/svg")||s.remove()}),t.querySelectorAll("video, audio, source, track, picture, canvas, embed, object").forEach(s=>s.remove())),t.querySelectorAll("a").forEach(s=>{const n=s.getAttribute("href");n&&!n.startsWith("http")&&!n.startsWith("/")&&s.removeAttribute("href")}),t.querySelectorAll("*").forEach(s=>{const n=s;n.removeAttribute("style"),n.removeAttribute("class"),n.removeAttribute("id"),n.removeAttribute("onclick"),n.removeAttribute("onmouseover"),n.removeAttribute("onmouseout")}),t}function Ot(r){const e=[];return r.querySelectorAll("img").forEach(t=>{const s=t.getAttribute("src")||t.getAttribute("data-src");if(s&&!s.includes("avatar")&&!s.includes("icon")&&!s.includes("logo")){const n=t.getAttribute("alt")||"",i=t.closest("figure")?.querySelector("figcaption")?.textContent?.trim();e.push({src:s,alt:n,caption:i})}}),e.slice(0,20)}function It(r){const t=r.querySelector('link[rel="icon"], link[rel="shortcut icon"]')?.getAttribute("href");if(t)return t.startsWith("//")?"https:"+t:t.startsWith("/")?(r.location?.origin||"https://example.com")+t:t}function $t(r){const t=r.split(/\s+/).length;return Math.max(1,Math.ceil(t/200))}function ue(r){const e=document.createElement("span");return e.textContent=r,e.innerHTML}function Mt(r){const e=r.contentHtml,t=e.querySelectorAll("pre, code").length,s=e.querySelectorAll("p").length,n=e.querySelectorAll("h1,h2,h3").length;return t>=3?{type:"code",columns:1,maxWidth:"900px",dropcap:!1,centered:!1}:r.readingTime<=3&&s<=6?{type:"news",columns:2,maxWidth:"800px",dropcap:!1,centered:!1}:r.readingTime>=8&&n>=3?{type:"docs",columns:2,maxWidth:"900px",dropcap:!1,centered:!1}:r.readingTime>=12?{type:"essay",columns:1,maxWidth:"640px",dropcap:!1,centered:!0}:{type:"article",columns:1,maxWidth:"700px",dropcap:!0,centered:!1}}const Ye={id:"adaptive",name:"Adaptive",description:"Automatically adjusts to page content",render(r,e,t={},s={}){const n=Mt(r),a=r.images?.[0];t.font,t.fontSize;let i=r.contentHtml.innerHTML;n.dropcap&&(i=i.replace(/<p>/,'<p class="cw-dropcap">')),n.centered&&(i=i.replace(/<p>/g,'<p class="cw-centered">'));const o=s.header||e.closest(".cw-overlay")?.querySelector(".cw-article-header"),m=s.footer||e.closest(".cw-overlay")?.querySelector(".cw-footer");o&&(o.innerHTML=`
        <h1 class="cw-title-main">${ue(r.title)}</h1>
        <div class="cw-meta">
          ${r.author?`<span class="cw-meta-item">${ue(r.author)}</span>`:""}
          ${r.author&&r.date?'<span class="cw-meta-sep"></span>':""}
          ${r.date?`<span class="cw-meta-item">${r.date}</span>`:""}
          ${r.author||r.date?'<span class="cw-meta-sep"></span>':""}
          <span class="cw-reading-time">${r.readingTime} min read</span>
        </div>
      `),m&&(m.innerHTML=`
        <a href="${ue(r.url)}" class="cw-source" target="_blank" rel="noopener noreferrer">
          ${r.favicon?`<img class="cw-favicon" src="${ue(r.favicon)}" alt="">`:""}
          <span>${ue(r.source)}</span>
        </a>
      `),e.innerHTML=`
      ${a?`<img class="cw-hero" src="${a.src}" alt="${a.alt||""}">`:""}
      <article class="cw-content ${n.columns>1?"cw-columns-2":""}">${i}</article>
    `}};function Pt(r){return Ye}function Lt(r){return Ye}const $e="calmweb-reader-host";function ye(r={}){document.body.style.setProperty("overflow","hidden","important"),ie();let e=null;try{e=Tt(document,window.location.href,r.textOnly??!0)}catch(G){console.error("[CalmWeb] Extraction failed:",G)}const t=e?.title||document.title||"Current Page",s=r.layoutId?Pt(r.layoutId):Lt(e||Je()),n=document.createElement("div");n.id=$e,n.style.cssText=`
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 2147483647 !important;
    pointer-events: auto !important;
  `;const a=n.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
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

    /* Content styles */
    .cw-content {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #cbd5e1;
    }

    .cw-content p {
      margin: 0 0 1.5em;
      color: #cbd5e1;
    }

    .cw-content p:first-of-type {
      font-size: 1.2em;
      color: #e2e8f0;
      line-height: 1.7;
    }

    /* Dropcap for first letter */
    .cw-content p:first-of-type::first-letter {
      float: left;
      font-size: 3.5em;
      line-height: 0.8;
      margin: 0.05em 0.12em 0 0;
      font-weight: 700;
      color: #a78bfa;
      text-shadow: 0 2px 20px rgba(139, 92, 246, 0.3);
    }

    .cw-content h1 {
      font-size: 1.75em;
      font-weight: 700;
      color: #f1f5f9;
      margin: 2em 0 0.75em;
      letter-spacing: -0.02em;
    }

    .cw-content h2 {
      font-size: 1.5em;
      font-weight: 600;
      color: #e2e8f0;
      margin: 2.5em 0 1em;
      letter-spacing: -0.02em;
      padding-bottom: 0.5em;
      border-bottom: 1px solid rgba(139, 92, 246, 0.15);
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
  `,a.appendChild(i);const o=document.createElement("div");o.className="cw-overlay";const m=document.createElement("div");m.className="cw-bg-pattern";const f=document.createElement("div");f.className="cw-toolbar",f.innerHTML=`
    <div class="cw-toolbar-left">
      <div class="cw-logo">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
        CalmWeb
      </div>
      <div class="cw-title">${Qe(t)}</div>
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
  `;const y=document.createElement("main");y.className="cw-main";const M=document.createElement("header");M.className="cw-article-header";const Z=document.createElement("div");Z.className="cw-content";const P=document.createElement("footer");P.className="cw-footer",y.appendChild(M),y.appendChild(Z),y.appendChild(P),o.appendChild(m),o.appendChild(f),o.appendChild(y),a.appendChild(o),document.body.appendChild(n),a.getElementById("cw-close-btn")?.addEventListener("click",()=>{ie(),r.onClose?.()}),a.getElementById("cw-raw-btn")?.addEventListener("click",()=>{ie(),r.onClose?.()});const z=e&&e.title?e:Je();try{s.render(z,Z,{font:r.font||"Inter",fontSize:r.fontSize||"17px"},{header:M,footer:P})}catch(G){console.error("[CalmWeb] Layout render failed:",G),jt(Z,z)}const q=G=>{G.key==="Escape"&&(ie(),document.removeEventListener("keydown",q))};document.addEventListener("keydown",q)}function Je(){return{title:document.title||"Current Page",author:void 0,date:void 0,content:document.body?.textContent?.slice(0,5e3)||"",contentHtml:(()=>{const r=document.createElement("div"),t=(document.body?.textContent||"").split(/\n\s*\n/).filter(s=>s.trim().length>20).slice(0,20);for(const s of t){const n=document.createElement("p");n.textContent=s.trim(),r.appendChild(n)}return r})(),images:[],source:window.location.hostname,favicon:void 0,readingTime:Math.ceil((document.body?.textContent?.split(/\s+/).length||0)/200),url:window.location.href}}function jt(r,e){r.innerHTML=`
    <p>${Qe(e.content.slice(0,500))}</p>
  `}function ie(){document.getElementById($e)?.remove(),document.body.style.removeProperty("overflow")}function Qe(r){const e=document.createElement("span");return e.textContent=r,e.innerHTML}function Me(){return!!document.getElementById($e)}var C;(function(r){r.assertEqual=n=>{};function e(n){}r.assertIs=e;function t(n){throw new Error}r.assertNever=t,r.arrayToEnum=n=>{const a={};for(const i of n)a[i]=i;return a},r.getValidEnumValues=n=>{const a=r.objectKeys(n).filter(o=>typeof n[n[o]]!="number"),i={};for(const o of a)i[o]=n[o];return r.objectValues(i)},r.objectValues=n=>r.objectKeys(n).map(function(a){return n[a]}),r.objectKeys=typeof Object.keys=="function"?n=>Object.keys(n):n=>{const a=[];for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&a.push(i);return a},r.find=(n,a)=>{for(const i of n)if(a(i))return i},r.isInteger=typeof Number.isInteger=="function"?n=>Number.isInteger(n):n=>typeof n=="number"&&Number.isFinite(n)&&Math.floor(n)===n;function s(n,a=" | "){return n.map(i=>typeof i=="string"?`'${i}'`:i).join(a)}r.joinValues=s,r.jsonStringifyReplacer=(n,a)=>typeof a=="bigint"?a.toString():a})(C||(C={}));var Xe;(function(r){r.mergeShapes=(e,t)=>({...e,...t})})(Xe||(Xe={}));const p=C.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),K=r=>{switch(typeof r){case"undefined":return p.undefined;case"string":return p.string;case"number":return Number.isNaN(r)?p.nan:p.number;case"boolean":return p.boolean;case"function":return p.function;case"bigint":return p.bigint;case"symbol":return p.symbol;case"object":return Array.isArray(r)?p.array:r===null?p.null:r.then&&typeof r.then=="function"&&r.catch&&typeof r.catch=="function"?p.promise:typeof Map<"u"&&r instanceof Map?p.map:typeof Set<"u"&&r instanceof Set?p.set:typeof Date<"u"&&r instanceof Date?p.date:p.object;default:return p.unknown}},d=C.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class W extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(a){return a.message},s={_errors:[]},n=a=>{for(const i of a.issues)if(i.code==="invalid_union")i.unionErrors.map(n);else if(i.code==="invalid_return_type")n(i.returnTypeError);else if(i.code==="invalid_arguments")n(i.argumentsError);else if(i.path.length===0)s._errors.push(t(i));else{let o=s,m=0;for(;m<i.path.length;){const f=i.path[m];m===i.path.length-1?(o[f]=o[f]||{_errors:[]},o[f]._errors.push(t(i))):o[f]=o[f]||{_errors:[]},o=o[f],m++}}};return n(this),s}static assert(e){if(!(e instanceof W))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,C.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},s=[];for(const n of this.issues)if(n.path.length>0){const a=n.path[0];t[a]=t[a]||[],t[a].push(e(n))}else s.push(e(n));return{formErrors:s,fieldErrors:t}}get formErrors(){return this.flatten()}}W.create=r=>new W(r);const Pe=(r,e)=>{let t;switch(r.code){case d.invalid_type:r.received===p.undefined?t="Required":t=`Expected ${r.expected}, received ${r.received}`;break;case d.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(r.expected,C.jsonStringifyReplacer)}`;break;case d.unrecognized_keys:t=`Unrecognized key(s) in object: ${C.joinValues(r.keys,", ")}`;break;case d.invalid_union:t="Invalid input";break;case d.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${C.joinValues(r.options)}`;break;case d.invalid_enum_value:t=`Invalid enum value. Expected ${C.joinValues(r.options)}, received '${r.received}'`;break;case d.invalid_arguments:t="Invalid function arguments";break;case d.invalid_return_type:t="Invalid function return type";break;case d.invalid_date:t="Invalid date";break;case d.invalid_string:typeof r.validation=="object"?"includes"in r.validation?(t=`Invalid input: must include "${r.validation.includes}"`,typeof r.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${r.validation.position}`)):"startsWith"in r.validation?t=`Invalid input: must start with "${r.validation.startsWith}"`:"endsWith"in r.validation?t=`Invalid input: must end with "${r.validation.endsWith}"`:C.assertNever(r.validation):r.validation!=="regex"?t=`Invalid ${r.validation}`:t="Invalid";break;case d.too_small:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at least":"more than"} ${r.minimum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at least":"over"} ${r.minimum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="bigint"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(r.minimum))}`:t="Invalid input";break;case d.too_big:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at most":"less than"} ${r.maximum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at most":"under"} ${r.maximum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="bigint"?t=`BigInt must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly":r.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(r.maximum))}`:t="Invalid input";break;case d.custom:t="Invalid input";break;case d.invalid_intersection_types:t="Intersection results could not be merged";break;case d.not_multiple_of:t=`Number must be a multiple of ${r.multipleOf}`;break;case d.not_finite:t="Number must be finite";break;default:t=e.defaultError,C.assertNever(r)}return{message:t}};let Zt=Pe;function zt(){return Zt}const Dt=r=>{const{data:e,path:t,errorMaps:s,issueData:n}=r,a=[...t,...n.path||[]],i={...n,path:a};if(n.message!==void 0)return{...n,path:a,message:n.message};let o="";const m=s.filter(f=>!!f).slice().reverse();for(const f of m)o=f(i,{data:e,defaultError:o}).message;return{...n,path:a,message:o}};function u(r,e){const t=zt(),s=Dt({issueData:e,data:r.data,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,t,t===Pe?void 0:Pe].filter(n=>!!n)});r.common.issues.push(s)}class ${constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const s=[];for(const n of t){if(n.status==="aborted")return b;n.status==="dirty"&&e.dirty(),s.push(n.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,t){const s=[];for(const n of t){const a=await n.key,i=await n.value;s.push({key:a,value:i})}return $.mergeObjectSync(e,s)}static mergeObjectSync(e,t){const s={};for(const n of t){const{key:a,value:i}=n;if(a.status==="aborted"||i.status==="aborted")return b;a.status==="dirty"&&e.dirty(),i.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof i.value<"u"||n.alwaysSet)&&(s[a.value]=i.value)}return{status:e.value,value:s}}}const b=Object.freeze({status:"aborted"}),me=r=>({status:"dirty",value:r}),j=r=>({status:"valid",value:r}),et=r=>r.status==="aborted",tt=r=>r.status==="dirty",oe=r=>r.status==="valid",be=r=>typeof Promise<"u"&&r instanceof Promise;var x;(function(r){r.errToObj=e=>typeof e=="string"?{message:e}:e||{},r.toString=e=>typeof e=="string"?e:e?.message})(x||(x={}));class Y{constructor(e,t,s,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=s,this._key=n}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const rt=(r,e)=>{if(oe(e))return{success:!0,data:e.value};if(!r.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new W(r.common.issues);return this._error=t,this._error}}};function _(r){if(!r)return{};const{errorMap:e,invalid_type_error:t,required_error:s,description:n}=r;if(e&&(t||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:n}:{errorMap:(i,o)=>{const{message:m}=r;return i.code==="invalid_enum_value"?{message:m??o.defaultError}:typeof o.data>"u"?{message:m??s??o.defaultError}:i.code!=="invalid_type"?{message:o.defaultError}:{message:m??t??o.defaultError}},description:n}}class T{get description(){return this._def.description}_getType(e){return K(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:K(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new $,ctx:{common:e.parent.common,data:e.data,parsedType:K(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(be(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const s=this.safeParse(e,t);if(s.success)return s.data;throw s.error}safeParse(e,t){const s={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:K(e)},n=this._parseSync({data:e,path:s.path,parent:s});return rt(s,n)}"~validate"(e){const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:K(e)};if(!this["~standard"].async)try{const s=this._parseSync({data:e,path:[],parent:t});return oe(s)?{value:s.value}:{issues:t.common.issues}}catch(s){s?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(s=>oe(s)?{value:s.value}:{issues:t.common.issues})}async parseAsync(e,t){const s=await this.safeParseAsync(e,t);if(s.success)return s.data;throw s.error}async safeParseAsync(e,t){const s={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:K(e)},n=this._parse({data:e,path:s.path,parent:s}),a=await(be(n)?n:Promise.resolve(n));return rt(s,a)}refine(e,t){const s=n=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(n):t;return this._refinement((n,a)=>{const i=e(n),o=()=>a.addIssue({code:d.custom,...s(n)});return typeof Promise<"u"&&i instanceof Promise?i.then(m=>m?!0:(o(),!1)):i?!0:(o(),!1)})}refinement(e,t){return this._refinement((s,n)=>e(s)?!0:(n.addIssue(typeof t=="function"?t(s,n):t),!1))}_refinement(e){return new re({schema:this,typeName:v.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return H.create(this,this._def)}nullable(){return se.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return V.create(this)}promise(){return Te.create(this,this._def)}or(e){return _e.create([this,e],this._def)}and(e){return we.create(this,e,this._def)}transform(e){return new re({..._(this._def),schema:this,typeName:v.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Ce({..._(this._def),innerType:this,defaultValue:t,typeName:v.ZodDefault})}brand(){return new mt({typeName:v.ZodBranded,type:this,..._(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Se({..._(this._def),innerType:this,catchValue:t,typeName:v.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return qe.create(this,e)}readonly(){return Ee.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Bt=/^c[^\s-]{8,}$/i,Ft=/^[0-9a-z]+$/,Vt=/^[0-9A-HJKMNP-TV-Z]{26}$/i,qt=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Wt=/^[a-z0-9_-]{21}$/i,Ut=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Ht=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Gt=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Kt="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Le;const Yt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Jt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Qt=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Xt=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,er=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,tr=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,st="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",rr=new RegExp(`^${st}$`);function nt(r){let e="[0-5]\\d";r.precision?e=`${e}\\.\\d{${r.precision}}`:r.precision==null&&(e=`${e}(\\.\\d+)?`);const t=r.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function sr(r){return new RegExp(`^${nt(r)}$`)}function nr(r){let e=`${st}T${nt(r)}`;const t=[];return t.push(r.local?"Z?":"Z"),r.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function ar(r,e){return!!((e==="v4"||!e)&&Yt.test(r)||(e==="v6"||!e)&&Qt.test(r))}function ir(r,e){if(!Ut.test(r))return!1;try{const[t]=r.split(".");if(!t)return!1;const s=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),n=JSON.parse(atob(s));return!(typeof n!="object"||n===null||"typ"in n&&n?.typ!=="JWT"||!n.alg||e&&n.alg!==e)}catch{return!1}}function or(r,e){return!!((e==="v4"||!e)&&Jt.test(r)||(e==="v6"||!e)&&Xt.test(r))}class J extends T{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==p.string){const a=this._getOrReturnCtx(e);return u(a,{code:d.invalid_type,expected:p.string,received:a.parsedType}),b}const s=new $;let n;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),s.dirty());else if(a.kind==="max")e.data.length>a.value&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),s.dirty());else if(a.kind==="length"){const i=e.data.length>a.value,o=e.data.length<a.value;(i||o)&&(n=this._getOrReturnCtx(e,n),i?u(n,{code:d.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):o&&u(n,{code:d.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),s.dirty())}else if(a.kind==="email")Gt.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"email",code:d.invalid_string,message:a.message}),s.dirty());else if(a.kind==="emoji")Le||(Le=new RegExp(Kt,"u")),Le.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"emoji",code:d.invalid_string,message:a.message}),s.dirty());else if(a.kind==="uuid")qt.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"uuid",code:d.invalid_string,message:a.message}),s.dirty());else if(a.kind==="nanoid")Wt.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"nanoid",code:d.invalid_string,message:a.message}),s.dirty());else if(a.kind==="cuid")Bt.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"cuid",code:d.invalid_string,message:a.message}),s.dirty());else if(a.kind==="cuid2")Ft.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"cuid2",code:d.invalid_string,message:a.message}),s.dirty());else if(a.kind==="ulid")Vt.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"ulid",code:d.invalid_string,message:a.message}),s.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),u(n,{validation:"url",code:d.invalid_string,message:a.message}),s.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"regex",code:d.invalid_string,message:a.message}),s.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(n=this._getOrReturnCtx(e,n),u(n,{code:d.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),s.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(n=this._getOrReturnCtx(e,n),u(n,{code:d.invalid_string,validation:{startsWith:a.value},message:a.message}),s.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(n=this._getOrReturnCtx(e,n),u(n,{code:d.invalid_string,validation:{endsWith:a.value},message:a.message}),s.dirty()):a.kind==="datetime"?nr(a).test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{code:d.invalid_string,validation:"datetime",message:a.message}),s.dirty()):a.kind==="date"?rr.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{code:d.invalid_string,validation:"date",message:a.message}),s.dirty()):a.kind==="time"?sr(a).test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{code:d.invalid_string,validation:"time",message:a.message}),s.dirty()):a.kind==="duration"?Ht.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"duration",code:d.invalid_string,message:a.message}),s.dirty()):a.kind==="ip"?ar(e.data,a.version)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"ip",code:d.invalid_string,message:a.message}),s.dirty()):a.kind==="jwt"?ir(e.data,a.alg)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"jwt",code:d.invalid_string,message:a.message}),s.dirty()):a.kind==="cidr"?or(e.data,a.version)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"cidr",code:d.invalid_string,message:a.message}),s.dirty()):a.kind==="base64"?er.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"base64",code:d.invalid_string,message:a.message}),s.dirty()):a.kind==="base64url"?tr.test(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{validation:"base64url",code:d.invalid_string,message:a.message}),s.dirty()):C.assertNever(a);return{status:s.value,value:e.data}}_regex(e,t,s){return this.refinement(n=>e.test(n),{validation:t,code:d.invalid_string,...x.errToObj(s)})}_addCheck(e){return new J({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...x.errToObj(e)})}url(e){return this._addCheck({kind:"url",...x.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...x.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...x.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...x.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...x.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...x.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...x.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...x.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...x.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...x.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...x.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...x.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...x.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...x.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...x.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...x.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...x.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...x.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...x.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...x.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...x.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...x.errToObj(t)})}nonempty(e){return this.min(1,x.errToObj(e))}trim(){return new J({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new J({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new J({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}J.create=r=>new J({checks:[],typeName:v.ZodString,coerce:r?.coerce??!1,..._(r)});function cr(r,e){const t=(r.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,n=t>s?t:s,a=Number.parseInt(r.toFixed(n).replace(".","")),i=Number.parseInt(e.toFixed(n).replace(".",""));return a%i/10**n}class ce extends T{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==p.number){const a=this._getOrReturnCtx(e);return u(a,{code:d.invalid_type,expected:p.number,received:a.parsedType}),b}let s;const n=new $;for(const a of this._def.checks)a.kind==="int"?C.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{code:d.invalid_type,expected:"integer",received:"float",message:a.message}),n.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),n.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),n.dirty()):a.kind==="multipleOf"?cr(e.data,a.value)!==0&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.not_multiple_of,multipleOf:a.value,message:a.message}),n.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{code:d.not_finite,message:a.message}),n.dirty()):C.assertNever(a);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,x.toString(t))}gt(e,t){return this.setLimit("min",e,!1,x.toString(t))}lte(e,t){return this.setLimit("max",e,!0,x.toString(t))}lt(e,t){return this.setLimit("max",e,!1,x.toString(t))}setLimit(e,t,s,n){return new ce({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:x.toString(n)}]})}_addCheck(e){return new ce({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:x.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:x.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:x.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:x.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:x.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:x.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:x.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:x.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:x.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&C.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(t===null||s.value>t)&&(t=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ce.create=r=>new ce({checks:[],typeName:v.ZodNumber,coerce:r?.coerce||!1,..._(r)});class ge extends T{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==p.bigint)return this._getInvalidInput(e);let s;const n=new $;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),n.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),n.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.not_multiple_of,multipleOf:a.value,message:a.message}),n.dirty()):C.assertNever(a);return{status:n.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return u(t,{code:d.invalid_type,expected:p.bigint,received:t.parsedType}),b}gte(e,t){return this.setLimit("min",e,!0,x.toString(t))}gt(e,t){return this.setLimit("min",e,!1,x.toString(t))}lte(e,t){return this.setLimit("max",e,!0,x.toString(t))}lt(e,t){return this.setLimit("max",e,!1,x.toString(t))}setLimit(e,t,s,n){return new ge({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:x.toString(n)}]})}_addCheck(e){return new ge({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:x.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:x.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:x.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:x.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:x.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ge.create=r=>new ge({checks:[],typeName:v.ZodBigInt,coerce:r?.coerce??!1,..._(r)});class je extends T{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==p.boolean){const s=this._getOrReturnCtx(e);return u(s,{code:d.invalid_type,expected:p.boolean,received:s.parsedType}),b}return j(e.data)}}je.create=r=>new je({typeName:v.ZodBoolean,coerce:r?.coerce||!1,..._(r)});class ve extends T{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==p.date){const a=this._getOrReturnCtx(e);return u(a,{code:d.invalid_type,expected:p.date,received:a.parsedType}),b}if(Number.isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return u(a,{code:d.invalid_date}),b}const s=new $;let n;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),s.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),s.dirty()):C.assertNever(a);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ve({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:x.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:x.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}ve.create=r=>new ve({checks:[],coerce:r?.coerce||!1,typeName:v.ZodDate,..._(r)});class at extends T{_parse(e){if(this._getType(e)!==p.symbol){const s=this._getOrReturnCtx(e);return u(s,{code:d.invalid_type,expected:p.symbol,received:s.parsedType}),b}return j(e.data)}}at.create=r=>new at({typeName:v.ZodSymbol,..._(r)});class Ze extends T{_parse(e){if(this._getType(e)!==p.undefined){const s=this._getOrReturnCtx(e);return u(s,{code:d.invalid_type,expected:p.undefined,received:s.parsedType}),b}return j(e.data)}}Ze.create=r=>new Ze({typeName:v.ZodUndefined,..._(r)});class ze extends T{_parse(e){if(this._getType(e)!==p.null){const s=this._getOrReturnCtx(e);return u(s,{code:d.invalid_type,expected:p.null,received:s.parsedType}),b}return j(e.data)}}ze.create=r=>new ze({typeName:v.ZodNull,..._(r)});class it extends T{constructor(){super(...arguments),this._any=!0}_parse(e){return j(e.data)}}it.create=r=>new it({typeName:v.ZodAny,..._(r)});class ot extends T{constructor(){super(...arguments),this._unknown=!0}_parse(e){return j(e.data)}}ot.create=r=>new ot({typeName:v.ZodUnknown,..._(r)});class Q extends T{_parse(e){const t=this._getOrReturnCtx(e);return u(t,{code:d.invalid_type,expected:p.never,received:t.parsedType}),b}}Q.create=r=>new Q({typeName:v.ZodNever,..._(r)});class ct extends T{_parse(e){if(this._getType(e)!==p.undefined){const s=this._getOrReturnCtx(e);return u(s,{code:d.invalid_type,expected:p.void,received:s.parsedType}),b}return j(e.data)}}ct.create=r=>new ct({typeName:v.ZodVoid,..._(r)});class V extends T{_parse(e){const{ctx:t,status:s}=this._processInputParams(e),n=this._def;if(t.parsedType!==p.array)return u(t,{code:d.invalid_type,expected:p.array,received:t.parsedType}),b;if(n.exactLength!==null){const i=t.data.length>n.exactLength.value,o=t.data.length<n.exactLength.value;(i||o)&&(u(t,{code:i?d.too_big:d.too_small,minimum:o?n.exactLength.value:void 0,maximum:i?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),s.dirty())}if(n.minLength!==null&&t.data.length<n.minLength.value&&(u(t,{code:d.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),s.dirty()),n.maxLength!==null&&t.data.length>n.maxLength.value&&(u(t,{code:d.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),s.dirty()),t.common.async)return Promise.all([...t.data].map((i,o)=>n.type._parseAsync(new Y(t,i,t.path,o)))).then(i=>$.mergeArray(s,i));const a=[...t.data].map((i,o)=>n.type._parseSync(new Y(t,i,t.path,o)));return $.mergeArray(s,a)}get element(){return this._def.type}min(e,t){return new V({...this._def,minLength:{value:e,message:x.toString(t)}})}max(e,t){return new V({...this._def,maxLength:{value:e,message:x.toString(t)}})}length(e,t){return new V({...this._def,exactLength:{value:e,message:x.toString(t)}})}nonempty(e){return this.min(1,e)}}V.create=(r,e)=>new V({type:r,minLength:null,maxLength:null,exactLength:null,typeName:v.ZodArray,..._(e)});function le(r){if(r instanceof O){const e={};for(const t in r.shape){const s=r.shape[t];e[t]=H.create(le(s))}return new O({...r._def,shape:()=>e})}else return r instanceof V?new V({...r._def,type:le(r.element)}):r instanceof H?H.create(le(r.unwrap())):r instanceof se?se.create(le(r.unwrap())):r instanceof ee?ee.create(r.items.map(e=>le(e))):r}class O extends T{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=C.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==p.object){const f=this._getOrReturnCtx(e);return u(f,{code:d.invalid_type,expected:p.object,received:f.parsedType}),b}const{status:s,ctx:n}=this._processInputParams(e),{shape:a,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof Q&&this._def.unknownKeys==="strip"))for(const f in n.data)i.includes(f)||o.push(f);const m=[];for(const f of i){const y=a[f],M=n.data[f];m.push({key:{status:"valid",value:f},value:y._parse(new Y(n,M,n.path,f)),alwaysSet:f in n.data})}if(this._def.catchall instanceof Q){const f=this._def.unknownKeys;if(f==="passthrough")for(const y of o)m.push({key:{status:"valid",value:y},value:{status:"valid",value:n.data[y]}});else if(f==="strict")o.length>0&&(u(n,{code:d.unrecognized_keys,keys:o}),s.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const y of o){const M=n.data[y];m.push({key:{status:"valid",value:y},value:f._parse(new Y(n,M,n.path,y)),alwaysSet:y in n.data})}}return n.common.async?Promise.resolve().then(async()=>{const f=[];for(const y of m){const M=await y.key,Z=await y.value;f.push({key:M,value:Z,alwaysSet:y.alwaysSet})}return f}).then(f=>$.mergeObjectSync(s,f)):$.mergeObjectSync(s,m)}get shape(){return this._def.shape()}strict(e){return x.errToObj,new O({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,s)=>{const n=this._def.errorMap?.(t,s).message??s.defaultError;return t.code==="unrecognized_keys"?{message:x.errToObj(e).message??n}:{message:n}}}:{}})}strip(){return new O({...this._def,unknownKeys:"strip"})}passthrough(){return new O({...this._def,unknownKeys:"passthrough"})}extend(e){return new O({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new O({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:v.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new O({...this._def,catchall:e})}pick(e){const t={};for(const s of C.objectKeys(e))e[s]&&this.shape[s]&&(t[s]=this.shape[s]);return new O({...this._def,shape:()=>t})}omit(e){const t={};for(const s of C.objectKeys(this.shape))e[s]||(t[s]=this.shape[s]);return new O({...this._def,shape:()=>t})}deepPartial(){return le(this)}partial(e){const t={};for(const s of C.objectKeys(this.shape)){const n=this.shape[s];e&&!e[s]?t[s]=n:t[s]=n.optional()}return new O({...this._def,shape:()=>t})}required(e){const t={};for(const s of C.objectKeys(this.shape))if(e&&!e[s])t[s]=this.shape[s];else{let a=this.shape[s];for(;a instanceof H;)a=a._def.innerType;t[s]=a}return new O({...this._def,shape:()=>t})}keyof(){return dt(C.objectKeys(this.shape))}}O.create=(r,e)=>new O({shape:()=>r,unknownKeys:"strip",catchall:Q.create(),typeName:v.ZodObject,..._(e)}),O.strictCreate=(r,e)=>new O({shape:()=>r,unknownKeys:"strict",catchall:Q.create(),typeName:v.ZodObject,..._(e)}),O.lazycreate=(r,e)=>new O({shape:r,unknownKeys:"strip",catchall:Q.create(),typeName:v.ZodObject,..._(e)});class _e extends T{_parse(e){const{ctx:t}=this._processInputParams(e),s=this._def.options;function n(a){for(const o of a)if(o.result.status==="valid")return o.result;for(const o of a)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const i=a.map(o=>new W(o.ctx.common.issues));return u(t,{code:d.invalid_union,unionErrors:i}),b}if(t.common.async)return Promise.all(s.map(async a=>{const i={...t,common:{...t.common,issues:[]},parent:null};return{result:await a._parseAsync({data:t.data,path:t.path,parent:i}),ctx:i}})).then(n);{let a;const i=[];for(const m of s){const f={...t,common:{...t.common,issues:[]},parent:null},y=m._parseSync({data:t.data,path:t.path,parent:f});if(y.status==="valid")return y;y.status==="dirty"&&!a&&(a={result:y,ctx:f}),f.common.issues.length&&i.push(f.common.issues)}if(a)return t.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(m=>new W(m));return u(t,{code:d.invalid_union,unionErrors:o}),b}}get options(){return this._def.options}}_e.create=(r,e)=>new _e({options:r,typeName:v.ZodUnion,..._(e)});const U=r=>r instanceof Fe?U(r.schema):r instanceof re?U(r.innerType()):r instanceof ke?[r.value]:r instanceof te?r.options:r instanceof Ve?C.objectValues(r.enum):r instanceof Ce?U(r._def.innerType):r instanceof Ze?[void 0]:r instanceof ze?[null]:r instanceof H?[void 0,...U(r.unwrap())]:r instanceof se?[null,...U(r.unwrap())]:r instanceof mt||r instanceof Ee?U(r.unwrap()):r instanceof Se?U(r._def.innerType):[];class De extends T{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.object)return u(t,{code:d.invalid_type,expected:p.object,received:t.parsedType}),b;const s=this.discriminator,n=t.data[s],a=this.optionsMap.get(n);return a?t.common.async?a._parseAsync({data:t.data,path:t.path,parent:t}):a._parseSync({data:t.data,path:t.path,parent:t}):(u(t,{code:d.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),b)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,s){const n=new Map;for(const a of t){const i=U(a.shape[e]);if(!i.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of i){if(n.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);n.set(o,a)}}return new De({typeName:v.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n,..._(s)})}}function Be(r,e){const t=K(r),s=K(e);if(r===e)return{valid:!0,data:r};if(t===p.object&&s===p.object){const n=C.objectKeys(e),a=C.objectKeys(r).filter(o=>n.indexOf(o)!==-1),i={...r,...e};for(const o of a){const m=Be(r[o],e[o]);if(!m.valid)return{valid:!1};i[o]=m.data}return{valid:!0,data:i}}else if(t===p.array&&s===p.array){if(r.length!==e.length)return{valid:!1};const n=[];for(let a=0;a<r.length;a++){const i=r[a],o=e[a],m=Be(i,o);if(!m.valid)return{valid:!1};n.push(m.data)}return{valid:!0,data:n}}else return t===p.date&&s===p.date&&+r==+e?{valid:!0,data:r}:{valid:!1}}class we extends T{_parse(e){const{status:t,ctx:s}=this._processInputParams(e),n=(a,i)=>{if(et(a)||et(i))return b;const o=Be(a.value,i.value);return o.valid?((tt(a)||tt(i))&&t.dirty(),{status:t.value,value:o.data}):(u(s,{code:d.invalid_intersection_types}),b)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([a,i])=>n(a,i)):n(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}we.create=(r,e,t)=>new we({left:r,right:e,typeName:v.ZodIntersection,..._(t)});class ee extends T{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==p.array)return u(s,{code:d.invalid_type,expected:p.array,received:s.parsedType}),b;if(s.data.length<this._def.items.length)return u(s,{code:d.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),b;!this._def.rest&&s.data.length>this._def.items.length&&(u(s,{code:d.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const a=[...s.data].map((i,o)=>{const m=this._def.items[o]||this._def.rest;return m?m._parse(new Y(s,i,s.path,o)):null}).filter(i=>!!i);return s.common.async?Promise.all(a).then(i=>$.mergeArray(t,i)):$.mergeArray(t,a)}get items(){return this._def.items}rest(e){return new ee({...this._def,rest:e})}}ee.create=(r,e)=>{if(!Array.isArray(r))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ee({items:r,typeName:v.ZodTuple,rest:null,..._(e)})};class lt extends T{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==p.map)return u(s,{code:d.invalid_type,expected:p.map,received:s.parsedType}),b;const n=this._def.keyType,a=this._def.valueType,i=[...s.data.entries()].map(([o,m],f)=>({key:n._parse(new Y(s,o,s.path,[f,"key"])),value:a._parse(new Y(s,m,s.path,[f,"value"]))}));if(s.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const m of i){const f=await m.key,y=await m.value;if(f.status==="aborted"||y.status==="aborted")return b;(f.status==="dirty"||y.status==="dirty")&&t.dirty(),o.set(f.value,y.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const m of i){const f=m.key,y=m.value;if(f.status==="aborted"||y.status==="aborted")return b;(f.status==="dirty"||y.status==="dirty")&&t.dirty(),o.set(f.value,y.value)}return{status:t.value,value:o}}}}lt.create=(r,e,t)=>new lt({valueType:e,keyType:r,typeName:v.ZodMap,..._(t)});class fe extends T{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==p.set)return u(s,{code:d.invalid_type,expected:p.set,received:s.parsedType}),b;const n=this._def;n.minSize!==null&&s.data.size<n.minSize.value&&(u(s,{code:d.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),n.maxSize!==null&&s.data.size>n.maxSize.value&&(u(s,{code:d.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());const a=this._def.valueType;function i(m){const f=new Set;for(const y of m){if(y.status==="aborted")return b;y.status==="dirty"&&t.dirty(),f.add(y.value)}return{status:t.value,value:f}}const o=[...s.data.values()].map((m,f)=>a._parse(new Y(s,m,s.path,f)));return s.common.async?Promise.all(o).then(m=>i(m)):i(o)}min(e,t){return new fe({...this._def,minSize:{value:e,message:x.toString(t)}})}max(e,t){return new fe({...this._def,maxSize:{value:e,message:x.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}fe.create=(r,e)=>new fe({valueType:r,minSize:null,maxSize:null,typeName:v.ZodSet,..._(e)});class Fe extends T{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Fe.create=(r,e)=>new Fe({getter:r,typeName:v.ZodLazy,..._(e)});class ke extends T{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return u(t,{received:t.data,code:d.invalid_literal,expected:this._def.value}),b}return{status:"valid",value:e.data}}get value(){return this._def.value}}ke.create=(r,e)=>new ke({value:r,typeName:v.ZodLiteral,..._(e)});function dt(r,e){return new te({values:r,typeName:v.ZodEnum,..._(e)})}class te extends T{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),s=this._def.values;return u(t,{expected:C.joinValues(s),received:t.parsedType,code:d.invalid_type}),b}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),s=this._def.values;return u(t,{received:t.data,code:d.invalid_enum_value,options:s}),b}return j(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return te.create(e,{...this._def,...t})}exclude(e,t=this._def){return te.create(this.options.filter(s=>!e.includes(s)),{...this._def,...t})}}te.create=dt;class Ve extends T{_parse(e){const t=C.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==p.string&&s.parsedType!==p.number){const n=C.objectValues(t);return u(s,{expected:C.joinValues(n),received:s.parsedType,code:d.invalid_type}),b}if(this._cache||(this._cache=new Set(C.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const n=C.objectValues(t);return u(s,{received:s.data,code:d.invalid_enum_value,options:n}),b}return j(e.data)}get enum(){return this._def.values}}Ve.create=(r,e)=>new Ve({values:r,typeName:v.ZodNativeEnum,..._(e)});class Te extends T{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.promise&&t.common.async===!1)return u(t,{code:d.invalid_type,expected:p.promise,received:t.parsedType}),b;const s=t.parsedType===p.promise?t.data:Promise.resolve(t.data);return j(s.then(n=>this._def.type.parseAsync(n,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Te.create=(r,e)=>new Te({type:r,typeName:v.ZodPromise,..._(e)});class re extends T{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===v.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:s}=this._processInputParams(e),n=this._def.effect||null,a={addIssue:i=>{u(s,i),i.fatal?t.abort():t.dirty()},get path(){return s.path}};if(a.addIssue=a.addIssue.bind(a),n.type==="preprocess"){const i=n.transform(s.data,a);if(s.common.async)return Promise.resolve(i).then(async o=>{if(t.value==="aborted")return b;const m=await this._def.schema._parseAsync({data:o,path:s.path,parent:s});return m.status==="aborted"?b:m.status==="dirty"||t.value==="dirty"?me(m.value):m});{if(t.value==="aborted")return b;const o=this._def.schema._parseSync({data:i,path:s.path,parent:s});return o.status==="aborted"?b:o.status==="dirty"||t.value==="dirty"?me(o.value):o}}if(n.type==="refinement"){const i=o=>{const m=n.refinement(o,a);if(s.common.async)return Promise.resolve(m);if(m instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return o.status==="aborted"?b:(o.status==="dirty"&&t.dirty(),i(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>o.status==="aborted"?b:(o.status==="dirty"&&t.dirty(),i(o.value).then(()=>({status:t.value,value:o.value}))))}if(n.type==="transform")if(s.common.async===!1){const i=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!oe(i))return b;const o=n.transform(i.value,a);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(i=>oe(i)?Promise.resolve(n.transform(i.value,a)).then(o=>({status:t.value,value:o})):b);C.assertNever(n)}}re.create=(r,e,t)=>new re({schema:r,typeName:v.ZodEffects,effect:e,..._(t)}),re.createWithPreprocess=(r,e,t)=>new re({schema:e,effect:{type:"preprocess",transform:r},typeName:v.ZodEffects,..._(t)});class H extends T{_parse(e){return this._getType(e)===p.undefined?j(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}H.create=(r,e)=>new H({innerType:r,typeName:v.ZodOptional,..._(e)});class se extends T{_parse(e){return this._getType(e)===p.null?j(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}se.create=(r,e)=>new se({innerType:r,typeName:v.ZodNullable,..._(e)});class Ce extends T{_parse(e){const{ctx:t}=this._processInputParams(e);let s=t.data;return t.parsedType===p.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Ce.create=(r,e)=>new Ce({innerType:r,typeName:v.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,..._(e)});class Se extends T{_parse(e){const{ctx:t}=this._processInputParams(e),s={...t,common:{...t.common,issues:[]}},n=this._def.innerType._parse({data:s.data,path:s.path,parent:{...s}});return be(n)?n.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new W(s.common.issues)},input:s.data})})):{status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new W(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}}Se.create=(r,e)=>new Se({innerType:r,typeName:v.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,..._(e)});class ut extends T{_parse(e){if(this._getType(e)!==p.nan){const s=this._getOrReturnCtx(e);return u(s,{code:d.invalid_type,expected:p.nan,received:s.parsedType}),b}return{status:"valid",value:e.data}}}ut.create=r=>new ut({typeName:v.ZodNaN,..._(r)});class mt extends T{_parse(e){const{ctx:t}=this._processInputParams(e),s=t.data;return this._def.type._parse({data:s,path:t.path,parent:t})}unwrap(){return this._def.type}}class qe extends T{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?b:a.status==="dirty"?(t.dirty(),me(a.value)):this._def.out._parseAsync({data:a.value,path:s.path,parent:s})})();{const n=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return n.status==="aborted"?b:n.status==="dirty"?(t.dirty(),{status:"dirty",value:n.value}):this._def.out._parseSync({data:n.value,path:s.path,parent:s})}}static create(e,t){return new qe({in:e,out:t,typeName:v.ZodPipeline})}}class Ee extends T{_parse(e){const t=this._def.innerType._parse(e),s=n=>(oe(n)&&(n.value=Object.freeze(n.value)),n);return be(t)?t.then(n=>s(n)):s(t)}unwrap(){return this._def.innerType}}Ee.create=(r,e)=>new Ee({innerType:r,typeName:v.ZodReadonly,..._(e)});var v;(function(r){r.ZodString="ZodString",r.ZodNumber="ZodNumber",r.ZodNaN="ZodNaN",r.ZodBigInt="ZodBigInt",r.ZodBoolean="ZodBoolean",r.ZodDate="ZodDate",r.ZodSymbol="ZodSymbol",r.ZodUndefined="ZodUndefined",r.ZodNull="ZodNull",r.ZodAny="ZodAny",r.ZodUnknown="ZodUnknown",r.ZodNever="ZodNever",r.ZodVoid="ZodVoid",r.ZodArray="ZodArray",r.ZodObject="ZodObject",r.ZodUnion="ZodUnion",r.ZodDiscriminatedUnion="ZodDiscriminatedUnion",r.ZodIntersection="ZodIntersection",r.ZodTuple="ZodTuple",r.ZodRecord="ZodRecord",r.ZodMap="ZodMap",r.ZodSet="ZodSet",r.ZodFunction="ZodFunction",r.ZodLazy="ZodLazy",r.ZodLiteral="ZodLiteral",r.ZodEnum="ZodEnum",r.ZodEffects="ZodEffects",r.ZodNativeEnum="ZodNativeEnum",r.ZodOptional="ZodOptional",r.ZodNullable="ZodNullable",r.ZodDefault="ZodDefault",r.ZodCatch="ZodCatch",r.ZodPromise="ZodPromise",r.ZodBranded="ZodBranded",r.ZodPipeline="ZodPipeline",r.ZodReadonly="ZodReadonly"})(v||(v={}));const I=J.create,gt=ce.create,de=je.create;Q.create;const he=V.create,D=O.create;_e.create;const lr=De.create;we.create,ee.create;const X=ke.create,dr=te.create;Te.create,H.create,se.create;const B={CLASSIFY_UNIT:"calmweb:classifyUnit",GET_SETTINGS:"calmweb:getSettings",UPDATE_SETTINGS:"calmweb:updateSettings",CLEAR_CACHE:"calmweb:clearCache",GET_STATS:"calmweb:getStats",INCREMENT_STAT:"calmweb:incrementStat",TOGGLE_READER:"calmweb:toggleReader",OPEN_READER:"calmweb:openReader",CLOSE_READER:"calmweb:closeReader",TEST_CONNECTION:"calmweb:testConnection"},ur=D({type:X(B.CLASSIFY_UNIT),unit:D({id:I(),site:I(),fingerprint:I(),sourceName:I().optional(),title:I(),metadata:he(I()),isNew:de(),url:I().url().optional()})}),mr=D({type:X(B.GET_SETTINGS)}),gr=D({type:X(B.UPDATE_SETTINGS),settings:D({enabled:de().optional(),processingMode:dr(["byok_llm","hosted_llm"]).optional(),strictness:gt().min(0).max(100).optional(),rules:D({blocklistChannels:he(I()).optional(),blocklistKeywords:he(I()).optional(),allowlistChannels:he(I()).optional(),allowlistKeywords:he(I()).optional(),presets:D({politics:de().optional(),ragebait:de().optional(),spoilers:de().optional(),clickbait:de().optional()}).optional()}).optional(),byokKey:I().optional()})}),fr=D({type:X(B.CLEAR_CACHE)}),hr=D({type:X(B.GET_STATS)}),pr=D({type:X(B.INCREMENT_STAT),key:X("totalFiltered"),amount:gt().optional()}),xr=D({type:X(B.TEST_CONNECTION),apiKey:I(),model:I().optional(),endpoint:I().optional()});lr("type",[ur,mr,gr,fr,hr,pr,xr]);function ft(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ne={exports:{}},Ar=Ne.exports,ht;function yr(){return ht||(ht=1,(function(r,e){(function(t,s){s(r)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:Ar,function(t){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)t.exports=globalThis.browser;else{const s="The message port closed before a response was received.",n=a=>{const i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(l,h=void 0){super(h),this.createItem=l}get(l){return this.has(l)||this.set(l,this.createItem(l)),super.get(l)}}const m=c=>c&&typeof c=="object"&&typeof c.then=="function",f=(c,l)=>(...h)=>{a.runtime.lastError?c.reject(new Error(a.runtime.lastError.message)):l.singleCallbackArg||h.length<=1&&l.singleCallbackArg!==!1?c.resolve(h[0]):c.resolve(h)},y=c=>c==1?"argument":"arguments",M=(c,l)=>function(A,...k){if(k.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${y(l.minArgs)} for ${c}(), got ${k.length}`);if(k.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${y(l.maxArgs)} for ${c}(), got ${k.length}`);return new Promise((S,E)=>{if(l.fallbackToNoCallback)try{A[c](...k,f({resolve:S,reject:E},l))}catch(g){console.warn(`${c} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,g),A[c](...k),l.fallbackToNoCallback=!1,l.noCallback=!0,S()}else l.noCallback?(A[c](...k),S()):A[c](...k,f({resolve:S,reject:E},l))})},Z=(c,l,h)=>new Proxy(l,{apply(A,k,S){return h.call(k,c,...S)}});let P=Function.call.bind(Object.prototype.hasOwnProperty);const z=(c,l={},h={})=>{let A=Object.create(null),k={has(E,g){return g in c||g in A},get(E,g,N){if(g in A)return A[g];if(!(g in c))return;let w=c[g];if(typeof w=="function")if(typeof l[g]=="function")w=Z(c,c[g],l[g]);else if(P(h,g)){let L=M(g,h[g]);w=Z(c,c[g],L)}else w=w.bind(c);else if(typeof w=="object"&&w!==null&&(P(l,g)||P(h,g)))w=z(w,l[g],h[g]);else if(P(h,"*"))w=z(w,l[g],h["*"]);else return Object.defineProperty(A,g,{configurable:!0,enumerable:!0,get(){return c[g]},set(L){c[g]=L}}),w;return A[g]=w,w},set(E,g,N,w){return g in A?A[g]=N:c[g]=N,!0},defineProperty(E,g,N){return Reflect.defineProperty(A,g,N)},deleteProperty(E,g){return Reflect.deleteProperty(A,g)}},S=Object.create(c);return new Proxy(S,k)},q=c=>({addListener(l,h,...A){l.addListener(c.get(h),...A)},hasListener(l,h){return l.hasListener(c.get(h))},removeListener(l,h){l.removeListener(c.get(h))}}),G=new o(c=>typeof c!="function"?c:function(h){const A=z(h,{},{getContent:{minArgs:0,maxArgs:0}});c(A)}),xe=new o(c=>typeof c!="function"?c:function(h,A,k){let S=!1,E,g=new Promise(F=>{E=function(R){S=!0,F(R)}}),N;try{N=c(h,A,E)}catch(F){N=Promise.reject(F)}const w=N!==!0&&m(N);if(N!==!0&&!w&&!S)return!1;const L=F=>{F.then(R=>{k(R)},R=>{let ae;R&&(R instanceof Error||typeof R.message=="string")?ae=R.message:ae="An unexpected error occurred",k({__mozWebExtensionPolyfillReject__:!0,message:ae})}).catch(R=>{console.error("Failed to send onMessage rejected reply",R)})};return L(w?N:g),!0}),Ge=({reject:c,resolve:l},h)=>{a.runtime.lastError?a.runtime.lastError.message===s?l():c(new Error(a.runtime.lastError.message)):h&&h.__mozWebExtensionPolyfillReject__?c(new Error(h.message)):l(h)},Ae=(c,l,h,...A)=>{if(A.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${y(l.minArgs)} for ${c}(), got ${A.length}`);if(A.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${y(l.maxArgs)} for ${c}(), got ${A.length}`);return new Promise((k,S)=>{const E=Ge.bind(null,{resolve:k,reject:S});A.push(E),h.sendMessage(...A)})},Ke={devtools:{network:{onRequestFinished:q(G)}},runtime:{onMessage:q(xe),onMessageExternal:q(xe),sendMessage:Ae.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:Ae.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},ne={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":ne},services:{"*":ne},websites:{"*":ne}},z(a,Ke,i)};t.exports=n(chrome)}})})(Ne)),Ne.exports}var br=yr();const vr=ft(br);globalThis.browser?.runtime?.id?globalThis.browser:globalThis.chrome;async function _r(r){return vr.runtime.sendMessage(r)}var Re={exports:{}},wr=Re.exports,pt;function kr(){return pt||(pt=1,(function(r,e){(function(t,s){s(r)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:wr,function(t){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)t.exports=globalThis.browser;else{const s="The message port closed before a response was received.",n=a=>{const i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(l,h=void 0){super(h),this.createItem=l}get(l){return this.has(l)||this.set(l,this.createItem(l)),super.get(l)}}const m=c=>c&&typeof c=="object"&&typeof c.then=="function",f=(c,l)=>(...h)=>{a.runtime.lastError?c.reject(new Error(a.runtime.lastError.message)):l.singleCallbackArg||h.length<=1&&l.singleCallbackArg!==!1?c.resolve(h[0]):c.resolve(h)},y=c=>c==1?"argument":"arguments",M=(c,l)=>function(A,...k){if(k.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${y(l.minArgs)} for ${c}(), got ${k.length}`);if(k.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${y(l.maxArgs)} for ${c}(), got ${k.length}`);return new Promise((S,E)=>{if(l.fallbackToNoCallback)try{A[c](...k,f({resolve:S,reject:E},l))}catch(g){console.warn(`${c} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,g),A[c](...k),l.fallbackToNoCallback=!1,l.noCallback=!0,S()}else l.noCallback?(A[c](...k),S()):A[c](...k,f({resolve:S,reject:E},l))})},Z=(c,l,h)=>new Proxy(l,{apply(A,k,S){return h.call(k,c,...S)}});let P=Function.call.bind(Object.prototype.hasOwnProperty);const z=(c,l={},h={})=>{let A=Object.create(null),k={has(E,g){return g in c||g in A},get(E,g,N){if(g in A)return A[g];if(!(g in c))return;let w=c[g];if(typeof w=="function")if(typeof l[g]=="function")w=Z(c,c[g],l[g]);else if(P(h,g)){let L=M(g,h[g]);w=Z(c,c[g],L)}else w=w.bind(c);else if(typeof w=="object"&&w!==null&&(P(l,g)||P(h,g)))w=z(w,l[g],h[g]);else if(P(h,"*"))w=z(w,l[g],h["*"]);else return Object.defineProperty(A,g,{configurable:!0,enumerable:!0,get(){return c[g]},set(L){c[g]=L}}),w;return A[g]=w,w},set(E,g,N,w){return g in A?A[g]=N:c[g]=N,!0},defineProperty(E,g,N){return Reflect.defineProperty(A,g,N)},deleteProperty(E,g){return Reflect.deleteProperty(A,g)}},S=Object.create(c);return new Proxy(S,k)},q=c=>({addListener(l,h,...A){l.addListener(c.get(h),...A)},hasListener(l,h){return l.hasListener(c.get(h))},removeListener(l,h){l.removeListener(c.get(h))}}),G=new o(c=>typeof c!="function"?c:function(h){const A=z(h,{},{getContent:{minArgs:0,maxArgs:0}});c(A)}),xe=new o(c=>typeof c!="function"?c:function(h,A,k){let S=!1,E,g=new Promise(F=>{E=function(R){S=!0,F(R)}}),N;try{N=c(h,A,E)}catch(F){N=Promise.reject(F)}const w=N!==!0&&m(N);if(N!==!0&&!w&&!S)return!1;const L=F=>{F.then(R=>{k(R)},R=>{let ae;R&&(R instanceof Error||typeof R.message=="string")?ae=R.message:ae="An unexpected error occurred",k({__mozWebExtensionPolyfillReject__:!0,message:ae})}).catch(R=>{console.error("Failed to send onMessage rejected reply",R)})};return L(w?N:g),!0}),Ge=({reject:c,resolve:l},h)=>{a.runtime.lastError?a.runtime.lastError.message===s?l():c(new Error(a.runtime.lastError.message)):h&&h.__mozWebExtensionPolyfillReject__?c(new Error(h.message)):l(h)},Ae=(c,l,h,...A)=>{if(A.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${y(l.minArgs)} for ${c}(), got ${A.length}`);if(A.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${y(l.maxArgs)} for ${c}(), got ${A.length}`);return new Promise((k,S)=>{const E=Ge.bind(null,{resolve:k,reject:S});A.push(E),h.sendMessage(...A)})},Ke={devtools:{network:{onRequestFinished:q(G)}},runtime:{onMessage:q(xe),onMessageExternal:q(xe),sendMessage:Ae.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:Ae.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},ne={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":ne},services:{"*":ne},websites:{"*":ne}},z(a,Ke,i)};t.exports=n(chrome)}})})(Re)),Re.exports}var Tr=kr();const Cr=ft(Tr),Oe="calmweb-loading",We="calmweb-raw-toggle",Sr=`
  #${Oe} {
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
`;function Er(){const r=window.location.hostname.toLowerCase(),e=window.location.pathname.toLowerCase();return!!(["mail.google","calendar.google","drive.google","docs.google","sheets.google","slides.google","meet.google","github.com","gitlab.com","slack.com","discord.com","notion.so","figma.com","linear.app","trello.com","netflix.com","spotify.com","youtube.com"].some(a=>r.includes(a))||["/login","/signin","/signup","/register","/auth","/account","/settings","/admin","/dashboard","/checkout","/cart"].some(a=>e.startsWith(a))||document.querySelectorAll('input:not([type="hidden"]):not([type="search"]), textarea, select').length>4)}function xt(){try{if(document.getElementById(Oe))return;document.body.style.setProperty("overflow","hidden","important");const r=document.createElement("div");r.id=Oe,r.innerHTML=`<style>${Sr}</style>
      <div class="calmweb-loading-spinner"></div>
      <div class="calmweb-loading-text">Filtering...</div>`,document.body.appendChild(r)}catch(r){console.error("[CalmWeb] Loading screen failed:",r)}}function At(){document.getElementById(Oe)?.remove()}function pe(){if(document.getElementById(We))return;const r=document.createElement("div");r.id=We,r.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',r.title="Filtered View (Ctrl+Shift+R)",Object.assign(r.style,{position:"fixed",bottom:"20px",right:"20px",width:"40px",height:"40px",borderRadius:"50%",background:"#8b5cf6",color:"white",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:"2147483646",boxShadow:"0 4px 24px rgba(139, 92, 246, 0.3)",transition:"transform 0.15s ease",border:"none"}),r.addEventListener("mouseenter",()=>{r.style.transform="scale(1.1)"}),r.addEventListener("mouseleave",()=>{r.style.transform="scale(1)"}),r.addEventListener("click",()=>{r.remove(),xt(),setTimeout(()=>{At();try{ye()}catch(e){console.error(e)}},300)}),document.body.appendChild(r)}function yt(){document.getElementById(We)?.remove()}function Ue(){try{Me()?(ie(),pe()):(yt(),ye())}catch(r){console.error("[CalmWeb] Reader toggle failed:",r)}}const Nr={matches:["<all_urls>"],runAt:"document_idle",async main(){console.log("[CalmWeb] Reader loaded on",window.location.hostname),document.addEventListener("keydown",t=>{t.ctrlKey&&t.shiftKey&&!t.altKey&&!t.metaKey&&t.key.toLowerCase()==="r"&&(t.preventDefault(),t.stopPropagation(),Ue()),t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&t.key.toLowerCase()==="r"&&(t.preventDefault(),t.stopPropagation(),Ue())},!0),Cr.runtime.onMessage.addListener(t=>{if(t.type===B.TOGGLE_READER&&Ue(),t.type===B.OPEN_READER){yt();try{Me()||ye()}catch(s){console.error(s)}}if(t.type===B.CLOSE_READER)try{Me()&&(ie(),pe())}catch(s){console.error(s)}});let r=!0,e={};try{const t=_r({type:B.GET_SETTINGS}),s=new Promise((a,i)=>setTimeout(()=>i(new Error("Settings timeout")),2e3)),n=await Promise.race([t,s]);(n?.reader?.autoOpen===!1||n?.enabled===!1)&&(r=!1),e=n?.reader||{},console.log("[CalmWeb] Settings loaded, filtering:",r)}catch(t){console.warn("[CalmWeb] Settings load failed, defaulting to filter:",t)}if(!r){pe();return}if(Er()){pe();return}console.log("[CalmWeb] Opening reader..."),xt(),setTimeout(()=>{At();try{ye({textOnly:e.textOnly!==!1,layoutId:e.defaultLayout,font:e.font,fontSize:e.fontSize}),console.log("[CalmWeb] Reader opened OK")}catch(t){console.error("[CalmWeb] Reader failed:",t),pe()}},250)}};function Or(){}function Ie(r,...e){}const He={debug:(...r)=>Ie(console.debug,...r),log:(...r)=>Ie(console.log,...r),warn:(...r)=>Ie(console.warn,...r),error:(...r)=>Ie(console.error,...r)};return(()=>{try{}catch(e){throw He.error('Failed to initialize plugins for "reader"',e),e}let r;try{r=Nr.main(),r instanceof Promise&&(r=r.catch(e=>{throw He.error('The unlisted script "reader" crashed on startup!',e),e}))}catch(e){throw He.error('The unlisted script "reader" crashed on startup!',e),e}return r})()})();
reader;