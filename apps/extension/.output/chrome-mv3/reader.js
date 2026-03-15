var reader=(function(){"use strict";function J(e){return e}const z=["nav","aside","footer","header:not(article header)",".ad",".advertisement",".ads",".ad-container",".sidebar",".related",".recommended",".suggestions",".social-share",".share-buttons",".social-links",".comments","#comments",".comment-section","script","style","noscript","iframe",'[class*="newsletter"]','[class*="subscribe"]','[class*="popup"]','[class*="modal"]',".author-bio",".author-info",".about-author",".tags",".tag-list",".categories",".breadcrumb",".breadcrumbs",".pagination",".pager",".cookie-notice",".gdpr"],E=["article",'[role="article"]',"main article",".post-content",".article-content",".entry-content",".post-body",".article-body",".content-body","main",'[role="main"]',"#content",".content"],A=["article h1",'h1[itemprop="headline"]','[property="og:title"]','meta[name="twitter:title"]',"h1",".post-title",".article-title",".entry-title"],M=['[rel="author"]','[itemprop="author"]',".author-name",".byline",".author",'meta[name="author"]'],C=["time",'[itemprop="datePublished"]',"[datetime]",".post-date",".article-date",".publish-date",'meta[name="date"]','[property="article:published_time"]'];function H(e,t){const r=q(e),o=F(e),a=R(e),i=I(e),n=W(i),c=B(n),l=D(e),Y=O(n.textContent||"");return{title:r,author:o,date:a,content:n.textContent||"",contentHtml:n,images:c,source:new URL(t).hostname,favicon:l,readingTime:Y,url:t}}function q(e){for(const t of A){const r=e.querySelector(t);if(r){const o=r.getAttribute("content")||r.textContent?.trim();if(o&&o.length>5&&o.length<300)return o}}return e.title||"Untitled"}function F(e){for(const t of M){const r=e.querySelector(t);if(r){const o=r.getAttribute("content")||r.textContent?.trim();if(o&&o.length<100)return o}}}function R(e){for(const t of C){const r=e.querySelector(t);if(r){const a=r.getAttribute("datetime")||r.getAttribute("content")||r.textContent?.trim();if(a)try{const i=new Date(a);if(!isNaN(i.getTime()))return i.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch{continue}}}}function I(e){for(const a of E){const i=e.querySelector(a);if(i&&i.textContent&&i.textContent.trim().length>200)return i}const t=e.querySelectorAll("div, section, main");let r=null,o=0;return t.forEach(a=>{const i=a,n=i.textContent?.length||0,c=i.querySelectorAll("p").length,l=n+c*100;l>o&&(o=l,r=i)}),r||e.body}function W(e){const t=e.cloneNode(!0);return z.forEach(r=>{t.querySelectorAll(r).forEach(o=>o.remove())}),t.querySelectorAll("a").forEach(r=>{const o=r.getAttribute("href");o&&!o.startsWith("http")&&!o.startsWith("/")&&r.removeAttribute("href")}),t.querySelectorAll("*").forEach(r=>{const o=r;o.removeAttribute("style"),o.removeAttribute("class"),o.removeAttribute("id"),o.removeAttribute("onclick"),o.removeAttribute("onmouseover"),o.removeAttribute("onmouseout")}),t}function B(e){const t=[];return e.querySelectorAll("img").forEach(r=>{const o=r.getAttribute("src")||r.getAttribute("data-src");if(o&&!o.includes("avatar")&&!o.includes("icon")&&!o.includes("logo")){const a=r.getAttribute("alt")||"",n=r.closest("figure")?.querySelector("figcaption")?.textContent?.trim();t.push({src:o,alt:a,caption:n})}}),t.slice(0,20)}function D(e){const r=e.querySelector('link[rel="icon"], link[rel="shortcut icon"]')?.getAttribute("href");if(r)return r.startsWith("//")?"https:"+r:r.startsWith("/")?(e.location?.origin||"https://example.com")+r:r}function O(e){const r=e.split(/\s+/).length;return Math.max(1,Math.ceil(r/200))}function d(e){const t=document.createElement("span");return t.textContent=e,t.innerHTML}const p=e=>`
  <div class="reader-meta">
    ${e.author?`<span class="reader-meta-item author">${d(e.author)}</span>`:""}
    ${e.date?`<span class="reader-meta-item date">${e.date}</span>`:""}
    <span class="reader-meta-item time">${e.readingTime} min read</span>
  </div>
`,u=e=>`
  <footer class="reader-footer">
    <div class="reader-source">
      ${e.favicon?`<img class="reader-favicon" src="${d(e.favicon)}" alt="">`:""}
      <span>${d(e.source)}</span>
    </div>
  </footer>
`,f=`
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
`,w={id:"reader",name:"Reader",description:"Optimized for long-form articles with elegant typography",bestFor:["articles","essays","blog posts","newsletter"],columns:1,maxWidth:"680px",fontFamily:'Georgia, Charter, "Times New Roman", serif',fontSize:"19px",lineHeight:"1.75",render(e,t){t.innerHTML=`
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
        ${f}
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
          .reader-content p:first-child::first-letter { color: #f9fafb; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${d(e.title)}</h1>
          ${p(e)}
        </header>
        <article class="reader-content">${e.contentHtml.innerHTML}</article>
        ${u(e)}
      </div>
    `}},v=[w,{id:"focus",name:"Focus",description:"Distraction-free reading with maximum concentration",bestFor:["deep reading","learning","study material"],columns:1,maxWidth:"600px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"18px",lineHeight:"1.8",render(e,t){t.innerHTML=`
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
        ${f}
        .reader-footer { text-align: center; border: none; margin-top: 80px; }
        @media (prefers-color-scheme: dark) {
          .reader-container { background: #0a0a0a; color: #d1d5db; }
          .reader-title { color: #f3f4f6; }
          .reader-content { color: #d1d5db; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${d(e.title)}</h1>
          ${p(e)}
        </header>
        <article class="reader-content">${e.contentHtml.innerHTML}</article>
        ${u(e)}
      </div>
    `}},{id:"terminal",name:"Terminal",description:"Hacker-style for code and technical content",bestFor:["code","documentation","tutorials","technical blogs"],columns:1,maxWidth:"900px",fontFamily:'"JetBrains Mono", "Fira Code", "SF Mono", monospace',fontSize:"14px",lineHeight:"1.7",render(e,t){t.innerHTML=`
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
        ${f}
        .reader-footer { border-top-color: #30363d; color: #6e7681; }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${d(e.title)}</h1>
          ${p(e)}
        </header>
        <article class="reader-content">${e.contentHtml.innerHTML}</article>
        ${u(e)}
      </div>
    `}},{id:"compact",name:"Compact",description:"Dense layout for news and quick scanning",bestFor:["news","updates","briefs","quick reads"],columns:2,maxWidth:"800px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"15px",lineHeight:"1.6",render(e,t){t.innerHTML=`
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
        ${f}
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
          <h1 class="reader-title">${d(e.title)}</h1>
          ${p(e)}
        </header>
        <article class="reader-content">${e.contentHtml.innerHTML}</article>
        ${u(e)}
      </div>
    `}},{id:"visual",name:"Visual",description:"Image-forward layout for photo essays and visual stories",bestFor:["photo essays","travel","lifestyle","portfolio"],columns:1,maxWidth:"840px",fontFamily:"Georgia, Charter, serif",fontSize:"18px",lineHeight:"1.75",render(e,t){const r=e.images[0];t.innerHTML=`
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
        ${f}
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
        ${r?`<img class="reader-hero" src="${r.src}" alt="${r.alt||""}">`:'<div class="reader-hero-placeholder"></div>'}
        <div class="reader-inner">
          <header class="reader-header">
            <h1 class="reader-title">${d(e.title)}</h1>
            ${p(e)}
          </header>
          <article class="reader-content">${e.contentHtml.innerHTML}</article>
          ${u(e)}
        </div>
      </div>
    `}},{id:"academic",name:"Academic",description:"Formal two-column layout for papers and research",bestFor:["papers","research","reports","documentation"],columns:2,maxWidth:"900px",fontFamily:'"Source Serif Pro", Georgia, "Times New Roman", serif',fontSize:"15px",lineHeight:"1.65",render(e,t){t.innerHTML=`
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
        ${f}
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
          <h1 class="reader-title">${d(e.title)}</h1>
          ${p(e)}
        </header>
        <article class="reader-content">${e.contentHtml.innerHTML}</article>
        ${u(e)}
      </div>
    `}}];function $(e){return v.find(t=>t.id===e)||w}const k={id:"default",name:"Light",background:"#ffffff",text:"#1f2937",accent:"#3b82f6",isDark:!1},S=[k,{id:"dark",name:"Dark",background:"#111827",text:"#e5e7eb",accent:"#60a5fa",isDark:!0},{id:"sepia",name:"Sepia",background:"#f4ecd8",text:"#433422",accent:"#8b5a2b",isDark:!1},{id:"midnight",name:"Midnight",background:"#0f172a",text:"#e2e8f0",accent:"#818cf8",isDark:!0}];function L(e){return S.find(t=>t.id===e)||k}function T(e,t){t.style.setProperty("--reader-bg",e.background),t.style.setProperty("--reader-text",e.text),t.style.setProperty("--reader-accent",e.accent),t.setAttribute("data-theme",e.id)}const h="calmweb-reader-overlay",P=`
  #${h} {
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
`;let s,m,b=null;function j(e={}){if(document.getElementById(h))return;s=$(e.layoutId||"reader"),m=L(e.themeId||"default");const r=H(document,window.location.href);b=r;const o=document.createElement("div");o.id=h;const a=o.attachShadow({mode:"open"});a.innerHTML=`
    <style>${P}</style>
    <div class="calmweb-reader-toolbar">
      <div class="calmweb-reader-toolbar-left">
        <div class="calmweb-reader-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Super Reader
        </div>
        <div class="calmweb-reader-title">${N(r.title)}</div>
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
            <span class="layout-name">${s.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="layout">
            ${v.map(n=>`
              <div class="calmweb-reader-dropdown-item ${n.id===s.id?"active":""}" data-layout="${n.id}">
                ${n.name}
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
            <span class="theme-name">${m.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="theme">
            ${S.map(n=>`
              <div class="calmweb-reader-dropdown-item ${n.id===m.id?"active":""}" data-theme="${n.id}">
                ${n.name}
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
  `,document.body.appendChild(o);const i=a.getElementById("reader-content");T(m,o),s.render(r,i),_(a,o,e)}function x(){const e=document.getElementById(h);e&&e.remove()}function _(e,t,r){e.querySelectorAll("[data-dropdown]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const n=a.getAttribute("data-dropdown"),c=e.querySelector(`[data-menu="${n}"]`);e.querySelectorAll(".calmweb-reader-dropdown-menu").forEach(l=>{l!==c&&l.classList.remove("open")}),c?.classList.toggle("open")})}),e.querySelectorAll("[data-layout]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const n=a.getAttribute("data-layout");if(n){s=$(n);const c=e.getElementById("reader-content");b&&(c.innerHTML="",s.render(b,c)),e.querySelectorAll("[data-layout]").forEach(l=>l.classList.remove("active")),a.classList.add("active"),e.querySelector(".layout-name").textContent=s.name,e.querySelector('[data-menu="layout"]')?.classList.remove("open")}})}),e.querySelectorAll("[data-theme]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const n=a.getAttribute("data-theme");n&&(m=L(n),T(m,t),e.querySelectorAll("[data-theme]").forEach(c=>c.classList.remove("active")),a.classList.add("active"),e.querySelector(".theme-name").textContent=m.name,e.querySelector('[data-menu="theme"]')?.classList.remove("open"))})}),e.querySelector('[data-action="close"]')?.addEventListener("click",()=>{x(),r.onClose?.()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(x(),r.onClose?.())}),document.addEventListener("click",()=>{e.querySelectorAll(".calmweb-reader-dropdown-menu").forEach(a=>{a.classList.remove("open")})})}function N(e){const t=document.createElement("span");return t.textContent=e,t.innerHTML}function U(){return!!document.getElementById(h)}function V(e){U()?x():j(e)}const G={matches:["<all_urls>"],runAt:"document_idle",main(){console.log("[CalmWeb] Reader content script loaded"),document.addEventListener("keydown",e=>{e.altKey&&e.key.toLowerCase()==="r"&&(e.preventDefault(),V())})}};function ae(){}function g(e,...t){}const y={debug:(...e)=>g(console.debug,...e),log:(...e)=>g(console.log,...e),warn:(...e)=>g(console.warn,...e),error:(...e)=>g(console.error,...e)};return(()=>{try{}catch(t){throw y.error('Failed to initialize plugins for "reader"',t),t}let e;try{e=G.main(),e instanceof Promise&&(e=e.catch(t=>{throw y.error('The unlisted script "reader" crashed on startup!',t),t}))}catch(t){throw y.error('The unlisted script "reader" crashed on startup!',t),t}return e})()})();
reader;