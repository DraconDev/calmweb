var reader=(function(){"use strict";function $r(t){return t}const _t=["nav","aside","footer","header:not(article header)",".ad",".advertisement",".ads",".ad-container",".sidebar",".related",".recommended",".suggestions",".social-share",".share-buttons",".social-links",".comments","#comments",".comment-section","script","style","noscript","iframe",'[class*="newsletter"]','[class*="subscribe"]','[class*="popup"]','[class*="modal"]',".author-bio",".author-info",".about-author",".tags",".tag-list",".categories",".breadcrumb",".breadcrumbs",".pagination",".pager",".cookie-notice",".gdpr"],At=["article",'[role="article"]',"main article",".post-content",".article-content",".entry-content",".post-body",".article-body",".content-body","main",'[role="main"]',"#content",".content"],kt=["article h1",'h1[itemprop="headline"]','[property="og:title"]','meta[name="twitter:title"]',"h1",".post-title",".article-title",".entry-title"],wt=['[rel="author"]','[itemprop="author"]',".author-name",".byline",".author",'meta[name="author"]'],Tt=["time",'[itemprop="datePublished"]',"[datetime]",".post-date",".article-date",".publish-date",'meta[name="date"]','[property="article:published_time"]'];function St(t,e){const r=Ct(t),n=Et(t),a=$t(t),s=Rt(t),i=Nt(s),o=Ot(i),l=Mt(t),m=Lt(i.textContent||"");return{title:r,author:n,date:a,content:i.textContent||"",contentHtml:i,images:o,source:new URL(e).hostname,favicon:l,readingTime:m,url:e}}function Ct(t){for(const e of kt){const r=t.querySelector(e);if(r){const n=r.getAttribute("content")||r.textContent?.trim();if(n&&n.length>5&&n.length<300)return n}}return t.title||"Untitled"}function Et(t){for(const e of wt){const r=t.querySelector(e);if(r){const n=r.getAttribute("content")||r.textContent?.trim();if(n&&n.length<100)return n}}}function $t(t){for(const e of Tt){const r=t.querySelector(e);if(r){const a=r.getAttribute("datetime")||r.getAttribute("content")||r.textContent?.trim();if(a)try{const s=new Date(a);if(!isNaN(s.getTime()))return s.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch{continue}}}}function Rt(t){for(const a of At){const s=t.querySelector(a);if(s&&s.textContent&&s.textContent.trim().length>200)return s}const e=t.querySelectorAll("div, section, main");let r=null,n=0;return e.forEach(a=>{const s=a,i=s.textContent?.length||0,o=s.querySelectorAll("p").length,l=i+o*100;l>n&&(n=l,r=s)}),r||t.body}function Nt(t){const e=t.cloneNode(!0);return _t.forEach(r=>{e.querySelectorAll(r).forEach(n=>n.remove())}),e.querySelectorAll("a").forEach(r=>{const n=r.getAttribute("href");n&&!n.startsWith("http")&&!n.startsWith("/")&&r.removeAttribute("href")}),e.querySelectorAll("*").forEach(r=>{const n=r;n.removeAttribute("style"),n.removeAttribute("class"),n.removeAttribute("id"),n.removeAttribute("onclick"),n.removeAttribute("onmouseover"),n.removeAttribute("onmouseout")}),e}function Ot(t){const e=[];return t.querySelectorAll("img").forEach(r=>{const n=r.getAttribute("src")||r.getAttribute("data-src");if(n&&!n.includes("avatar")&&!n.includes("icon")&&!n.includes("logo")){const a=r.getAttribute("alt")||"",i=r.closest("figure")?.querySelector("figcaption")?.textContent?.trim();e.push({src:n,alt:a,caption:i})}}),e.slice(0,20)}function Mt(t){const r=t.querySelector('link[rel="icon"], link[rel="shortcut icon"]')?.getAttribute("href");if(r)return r.startsWith("//")?"https:"+r:r.startsWith("/")?(t.location?.origin||"https://example.com")+r:r}function Lt(t){const r=t.split(/\s+/).length;return Math.max(1,Math.ceil(r/200))}function Z(t){const e=document.createElement("span");return e.textContent=t,e.innerHTML}const ee=t=>`
  <div class="reader-meta">
    ${t.author?`<span class="reader-meta-item author">${Z(t.author)}</span>`:""}
    ${t.date?`<span class="reader-meta-item date">${t.date}</span>`:""}
    <span class="reader-meta-item time">${t.readingTime} min read</span>
  </div>
`,te=t=>`
  <footer class="reader-footer">
    <div class="reader-source">
      ${t.favicon?`<img class="reader-favicon" src="${Z(t.favicon)}" alt="">`:""}
      <span>${Z(t.source)}</span>
    </div>
  </footer>
`,re=`
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
`,$e={id:"reader",name:"Reader",description:"Optimized for long-form articles with elegant typography",bestFor:["articles","essays","blog posts","newsletter"],columns:1,maxWidth:"680px",fontFamily:'Georgia, Charter, "Times New Roman", serif',fontSize:"19px",lineHeight:"1.75",render(t,e){e.innerHTML=`
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
        ${re}
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
          .reader-content p:first-child::first-letter { color: #f9fafb; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${Z(t.title)}</h1>
          ${ee(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${te(t)}
      </div>
    `}},We={id:"focus",name:"Focus",description:"Distraction-free reading with maximum concentration",bestFor:["deep reading","learning","study material"],columns:1,maxWidth:"600px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"18px",lineHeight:"1.8",render(t,e){e.innerHTML=`
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
        ${re}
        .reader-footer { text-align: center; border: none; margin-top: 80px; }
        @media (prefers-color-scheme: dark) {
          .reader-container { background: #0a0a0a; color: #d1d5db; }
          .reader-title { color: #f3f4f6; }
          .reader-content { color: #d1d5db; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${Z(t.title)}</h1>
          ${ee(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${te(t)}
      </div>
    `}},He={id:"terminal",name:"Terminal",description:"Hacker-style for code and technical content",bestFor:["code","documentation","tutorials","technical blogs"],columns:1,maxWidth:"900px",fontFamily:'"JetBrains Mono", "Fira Code", "SF Mono", monospace',fontSize:"14px",lineHeight:"1.7",render(t,e){e.innerHTML=`
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
        ${re}
        .reader-footer { border-top-color: #30363d; color: #6e7681; }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${Z(t.title)}</h1>
          ${ee(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${te(t)}
      </div>
    `}},Ge={id:"compact",name:"Compact",description:"Dense layout for news and quick scanning",bestFor:["news","updates","briefs","quick reads"],columns:2,maxWidth:"800px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"15px",lineHeight:"1.6",render(t,e){e.innerHTML=`
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
        ${re}
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
          <h1 class="reader-title">${Z(t.title)}</h1>
          ${ee(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${te(t)}
      </div>
    `}},Ye={id:"visual",name:"Visual",description:"Image-forward layout for photo essays and visual stories",bestFor:["photo essays","travel","lifestyle","portfolio"],columns:1,maxWidth:"840px",fontFamily:"Georgia, Charter, serif",fontSize:"18px",lineHeight:"1.75",render(t,e){const r=t.images[0];e.innerHTML=`
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
        ${re}
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
            <h1 class="reader-title">${Z(t.title)}</h1>
            ${ee(t)}
          </header>
          <article class="reader-content">${t.contentHtml.innerHTML}</article>
          ${te(t)}
        </div>
      </div>
    `}},Je={id:"academic",name:"Academic",description:"Formal two-column layout for papers and research",bestFor:["papers","research","reports","documentation"],columns:2,maxWidth:"900px",fontFamily:'"Source Serif Pro", Georgia, "Times New Roman", serif',fontSize:"15px",lineHeight:"1.65",render(t,e){e.innerHTML=`
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
        ${re}
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
          <h1 class="reader-title">${Z(t.title)}</h1>
          ${ee(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${te(t)}
      </div>
    `}},Ke=[$e,We,He,Ge,Ye,Je];function Qe(t){return Ke.find(e=>e.id===t)||$e}function It(t){const e=t.contentHtml,r=t.content||"",n=e.querySelectorAll("pre, code").length,a=e.querySelectorAll("p").length,s=t.images.length,i=r.length,o=i>0?s/(i/500):0,l=e.querySelectorAll("h2, h3").length,m=e.querySelectorAll("blockquote").length;return n>=3?He:o>.5||s>=4&&i<3e3?Ye:t.readingTime<=3&&a<=6?Ge:t.readingTime>=8&&l>=3&&m>=2?Je:t.readingTime>=12?We:$e}const Xe={id:"default",name:"Light",background:"#ffffff",text:"#1f2937",accent:"#3b82f6",isDark:!1},et=[Xe,{id:"dark",name:"Dark",background:"#111827",text:"#e5e7eb",accent:"#60a5fa",isDark:!0},{id:"sepia",name:"Sepia",background:"#f4ecd8",text:"#433422",accent:"#8b5a2b",isDark:!1},{id:"midnight",name:"Midnight",background:"#0f172a",text:"#e2e8f0",accent:"#818cf8",isDark:!0}];function tt(t){return et.find(e=>e.id===t)||Xe}function rt(t,e){e.style.setProperty("--reader-bg",t.background),e.style.setProperty("--reader-text",t.text),e.style.setProperty("--reader-accent",t.accent),e.setAttribute("data-theme",t.id)}const ce="calmweb-reader-overlay",jt=`
  #${ce} {
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
`;let W,H,Re=null;function Zt(t={}){if(document.getElementById(ce))return;const r=St(document,window.location.href);Re=r,W=t.layoutId?Qe(t.layoutId):It(r),H=tt(t.themeId||"default");const n=document.createElement("div");n.id=ce;const a=n.attachShadow({mode:"open"});a.innerHTML=`
    <style>${jt}</style>
    <div class="calmweb-reader-toolbar">
      <div class="calmweb-reader-toolbar-left">
        <div class="calmweb-reader-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Super Reader
        </div>
        <div class="calmweb-reader-title">${Pt(r.title)}</div>
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
            <span class="layout-name">${W.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="layout">
            ${Ke.map(i=>`
              <div class="calmweb-reader-dropdown-item ${i.id===W.id?"active":""}" data-layout="${i.id}">
                ${i.name}
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
            <span class="theme-name">${H.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="theme">
            ${et.map(i=>`
              <div class="calmweb-reader-dropdown-item ${i.id===H.id?"active":""}" data-theme="${i.id}">
                ${i.name}
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
  `,document.body.appendChild(n);const s=a.getElementById("reader-content");rt(H,n),W.render(r,s),zt(a,n,t)}function Ne(){const t=document.getElementById(ce);t&&t.remove()}function zt(t,e,r){t.querySelectorAll("[data-dropdown]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const i=a.getAttribute("data-dropdown"),o=t.querySelector(`[data-menu="${i}"]`);t.querySelectorAll(".calmweb-reader-dropdown-menu").forEach(l=>{l!==o&&l.classList.remove("open")}),o?.classList.toggle("open")})}),t.querySelectorAll("[data-layout]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const i=a.getAttribute("data-layout");if(i){W=Qe(i);const o=t.getElementById("reader-content");Re&&(o.innerHTML="",W.render(Re,o)),t.querySelectorAll("[data-layout]").forEach(l=>l.classList.remove("active")),a.classList.add("active"),t.querySelector(".layout-name").textContent=W.name,t.querySelector('[data-menu="layout"]')?.classList.remove("open")}})}),t.querySelectorAll("[data-theme]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const i=a.getAttribute("data-theme");i&&(H=tt(i),rt(H,e),t.querySelectorAll("[data-theme]").forEach(o=>o.classList.remove("active")),a.classList.add("active"),t.querySelector(".theme-name").textContent=H.name,t.querySelector('[data-menu="theme"]')?.classList.remove("open"))})}),t.querySelector('[data-action="close"]')?.addEventListener("click",()=>{Ne(),r.onClose?.()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(Ne(),r.onClose?.())}),document.addEventListener("click",()=>{t.querySelectorAll(".calmweb-reader-dropdown-menu").forEach(a=>{a.classList.remove("open")})})}function Pt(t){const e=document.createElement("span");return e.textContent=t,e.innerHTML}function Dt(){return!!document.getElementById(ce)}function he(t){Dt()?Ne():Zt(t)}var A;(function(t){t.assertEqual=a=>{};function e(a){}t.assertIs=e;function r(a){throw new Error}t.assertNever=r,t.arrayToEnum=a=>{const s={};for(const i of a)s[i]=i;return s},t.getValidEnumValues=a=>{const s=t.objectKeys(a).filter(o=>typeof a[a[o]]!="number"),i={};for(const o of s)i[o]=a[o];return t.objectValues(i)},t.objectValues=a=>t.objectKeys(a).map(function(s){return a[s]}),t.objectKeys=typeof Object.keys=="function"?a=>Object.keys(a):a=>{const s=[];for(const i in a)Object.prototype.hasOwnProperty.call(a,i)&&s.push(i);return s},t.find=(a,s)=>{for(const i of a)if(s(i))return i},t.isInteger=typeof Number.isInteger=="function"?a=>Number.isInteger(a):a=>typeof a=="number"&&Number.isFinite(a)&&Math.floor(a)===a;function n(a,s=" | "){return a.map(i=>typeof i=="string"?`'${i}'`:i).join(s)}t.joinValues=n,t.jsonStringifyReplacer=(a,s)=>typeof s=="bigint"?s.toString():s})(A||(A={}));var nt;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(nt||(nt={}));const u=A.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),V=t=>{switch(typeof t){case"undefined":return u.undefined;case"string":return u.string;case"number":return Number.isNaN(t)?u.nan:u.number;case"boolean":return u.boolean;case"function":return u.function;case"bigint":return u.bigint;case"symbol":return u.symbol;case"object":return Array.isArray(t)?u.array:t===null?u.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?u.promise:typeof Map<"u"&&t instanceof Map?u.map:typeof Set<"u"&&t instanceof Set?u.set:typeof Date<"u"&&t instanceof Date?u.date:u.object;default:return u.unknown}},c=A.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class z extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}format(e){const r=e||function(s){return s.message},n={_errors:[]},a=s=>{for(const i of s.issues)if(i.code==="invalid_union")i.unionErrors.map(a);else if(i.code==="invalid_return_type")a(i.returnTypeError);else if(i.code==="invalid_arguments")a(i.argumentsError);else if(i.path.length===0)n._errors.push(r(i));else{let o=n,l=0;for(;l<i.path.length;){const m=i.path[l];l===i.path.length-1?(o[m]=o[m]||{_errors:[]},o[m]._errors.push(r(i))):o[m]=o[m]||{_errors:[]},o=o[m],l++}}};return a(this),n}static assert(e){if(!(e instanceof z))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,A.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){const r={},n=[];for(const a of this.issues)if(a.path.length>0){const s=a.path[0];r[s]=r[s]||[],r[s].push(e(a))}else n.push(e(a));return{formErrors:n,fieldErrors:r}}get formErrors(){return this.flatten()}}z.create=t=>new z(t);const Oe=(t,e)=>{let r;switch(t.code){case c.invalid_type:t.received===u.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case c.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,A.jsonStringifyReplacer)}`;break;case c.unrecognized_keys:r=`Unrecognized key(s) in object: ${A.joinValues(t.keys,", ")}`;break;case c.invalid_union:r="Invalid input";break;case c.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${A.joinValues(t.options)}`;break;case c.invalid_enum_value:r=`Invalid enum value. Expected ${A.joinValues(t.options)}, received '${t.received}'`;break;case c.invalid_arguments:r="Invalid function arguments";break;case c.invalid_return_type:r="Invalid function return type";break;case c.invalid_date:r="Invalid date";break;case c.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:A.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case c.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="bigint"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case c.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case c.custom:r="Invalid input";break;case c.invalid_intersection_types:r="Intersection results could not be merged";break;case c.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case c.not_finite:r="Number must be finite";break;default:r=e.defaultError,A.assertNever(t)}return{message:r}};let Ft=Oe;function Vt(){return Ft}const qt=t=>{const{data:e,path:r,errorMaps:n,issueData:a}=t,s=[...r,...a.path||[]],i={...a,path:s};if(a.message!==void 0)return{...a,path:s,message:a.message};let o="";const l=n.filter(m=>!!m).slice().reverse();for(const m of l)o=m(i,{data:e,defaultError:o}).message;return{...a,path:s,message:o}};function d(t,e){const r=Vt(),n=qt({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r,r===Oe?void 0:Oe].filter(a=>!!a)});t.common.issues.push(n)}class E{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){const n=[];for(const a of r){if(a.status==="aborted")return p;a.status==="dirty"&&e.dirty(),n.push(a.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,r){const n=[];for(const a of r){const s=await a.key,i=await a.value;n.push({key:s,value:i})}return E.mergeObjectSync(e,n)}static mergeObjectSync(e,r){const n={};for(const a of r){const{key:s,value:i}=a;if(s.status==="aborted"||i.status==="aborted")return p;s.status==="dirty"&&e.dirty(),i.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof i.value<"u"||a.alwaysSet)&&(n[s.value]=i.value)}return{status:e.value,value:n}}}const p=Object.freeze({status:"aborted"}),de=t=>({status:"dirty",value:t}),R=t=>({status:"valid",value:t}),at=t=>t.status==="aborted",st=t=>t.status==="dirty",ne=t=>t.status==="valid",ge=t=>typeof Promise<"u"&&t instanceof Promise;var f;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(f||(f={}));class q{constructor(e,r,n,a){this._cachedPath=[],this.parent=e,this.data=r,this._path=n,this._key=a}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const it=(t,e)=>{if(ne(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new z(t.common.issues);return this._error=r,this._error}}};function x(t){if(!t)return{};const{errorMap:e,invalid_type_error:r,required_error:n,description:a}=t;if(e&&(r||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:a}:{errorMap:(i,o)=>{const{message:l}=t;return i.code==="invalid_enum_value"?{message:l??o.defaultError}:typeof o.data>"u"?{message:l??n??o.defaultError}:i.code!=="invalid_type"?{message:o.defaultError}:{message:l??r??o.defaultError}},description:a}}class _{get description(){return this._def.description}_getType(e){return V(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:V(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new E,ctx:{common:e.parent.common,data:e.data,parsedType:V(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const r=this._parse(e);if(ge(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){const r=this._parse(e);return Promise.resolve(r)}parse(e,r){const n=this.safeParse(e,r);if(n.success)return n.data;throw n.error}safeParse(e,r){const n={common:{issues:[],async:r?.async??!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:V(e)},a=this._parseSync({data:e,path:n.path,parent:n});return it(n,a)}"~validate"(e){const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:V(e)};if(!this["~standard"].async)try{const n=this._parseSync({data:e,path:[],parent:r});return ne(n)?{value:n.value}:{issues:r.common.issues}}catch(n){n?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:r}).then(n=>ne(n)?{value:n.value}:{issues:r.common.issues})}async parseAsync(e,r){const n=await this.safeParseAsync(e,r);if(n.success)return n.data;throw n.error}async safeParseAsync(e,r){const n={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:V(e)},a=this._parse({data:e,path:n.path,parent:n}),s=await(ge(a)?a:Promise.resolve(a));return it(n,s)}refine(e,r){const n=a=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(a):r;return this._refinement((a,s)=>{const i=e(a),o=()=>s.addIssue({code:c.custom,...n(a)});return typeof Promise<"u"&&i instanceof Promise?i.then(l=>l?!0:(o(),!1)):i?!0:(o(),!1)})}refinement(e,r){return this._refinement((n,a)=>e(n)?!0:(a.addIssue(typeof r=="function"?r(n,a):r),!1))}_refinement(e){return new J({schema:this,typeName:y.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return D.create(this,this._def)}nullable(){return K.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return L.create(this)}promise(){return be.create(this,this._def)}or(e){return ye.create([this,e],this._def)}and(e){return xe.create(this,e,this._def)}transform(e){return new J({...x(this._def),schema:this,typeName:y.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const r=typeof e=="function"?e:()=>e;return new _e({...x(this._def),innerType:this,defaultValue:r,typeName:y.ZodDefault})}brand(){return new pt({typeName:y.ZodBranded,type:this,...x(this._def)})}catch(e){const r=typeof e=="function"?e:()=>e;return new Ae({...x(this._def),innerType:this,catchValue:r,typeName:y.ZodCatch})}describe(e){const r=this.constructor;return new r({...this._def,description:e})}pipe(e){return Fe.create(this,e)}readonly(){return ke.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Bt=/^c[^\s-]{8,}$/i,Ut=/^[0-9a-z]+$/,Wt=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Ht=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Gt=/^[a-z0-9_-]{21}$/i,Yt=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Jt=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Kt=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Qt="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Me;const Xt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,er=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,tr=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,rr=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,nr=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,ar=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ot="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",sr=new RegExp(`^${ot}$`);function ct(t){let e="[0-5]\\d";t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`);const r=t.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${r}`}function ir(t){return new RegExp(`^${ct(t)}$`)}function or(t){let e=`${ot}T${ct(t)}`;const r=[];return r.push(t.local?"Z?":"Z"),t.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function cr(t,e){return!!((e==="v4"||!e)&&Xt.test(t)||(e==="v6"||!e)&&tr.test(t))}function dr(t,e){if(!Yt.test(t))return!1;try{const[r]=t.split(".");if(!r)return!1;const n=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),a=JSON.parse(atob(n));return!(typeof a!="object"||a===null||"typ"in a&&a?.typ!=="JWT"||!a.alg||e&&a.alg!==e)}catch{return!1}}function lr(t,e){return!!((e==="v4"||!e)&&er.test(t)||(e==="v6"||!e)&&rr.test(t))}class B extends _{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==u.string){const s=this._getOrReturnCtx(e);return d(s,{code:c.invalid_type,expected:u.string,received:s.parsedType}),p}const n=new E;let a;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(a=this._getOrReturnCtx(e,a),d(a,{code:c.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),n.dirty());else if(s.kind==="max")e.data.length>s.value&&(a=this._getOrReturnCtx(e,a),d(a,{code:c.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),n.dirty());else if(s.kind==="length"){const i=e.data.length>s.value,o=e.data.length<s.value;(i||o)&&(a=this._getOrReturnCtx(e,a),i?d(a,{code:c.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&d(a,{code:c.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),n.dirty())}else if(s.kind==="email")Kt.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"email",code:c.invalid_string,message:s.message}),n.dirty());else if(s.kind==="emoji")Me||(Me=new RegExp(Qt,"u")),Me.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"emoji",code:c.invalid_string,message:s.message}),n.dirty());else if(s.kind==="uuid")Ht.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"uuid",code:c.invalid_string,message:s.message}),n.dirty());else if(s.kind==="nanoid")Gt.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"nanoid",code:c.invalid_string,message:s.message}),n.dirty());else if(s.kind==="cuid")Bt.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"cuid",code:c.invalid_string,message:s.message}),n.dirty());else if(s.kind==="cuid2")Ut.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"cuid2",code:c.invalid_string,message:s.message}),n.dirty());else if(s.kind==="ulid")Wt.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"ulid",code:c.invalid_string,message:s.message}),n.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{a=this._getOrReturnCtx(e,a),d(a,{validation:"url",code:c.invalid_string,message:s.message}),n.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"regex",code:c.invalid_string,message:s.message}),n.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(a=this._getOrReturnCtx(e,a),d(a,{code:c.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),n.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(a=this._getOrReturnCtx(e,a),d(a,{code:c.invalid_string,validation:{startsWith:s.value},message:s.message}),n.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(a=this._getOrReturnCtx(e,a),d(a,{code:c.invalid_string,validation:{endsWith:s.value},message:s.message}),n.dirty()):s.kind==="datetime"?or(s).test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{code:c.invalid_string,validation:"datetime",message:s.message}),n.dirty()):s.kind==="date"?sr.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{code:c.invalid_string,validation:"date",message:s.message}),n.dirty()):s.kind==="time"?ir(s).test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{code:c.invalid_string,validation:"time",message:s.message}),n.dirty()):s.kind==="duration"?Jt.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"duration",code:c.invalid_string,message:s.message}),n.dirty()):s.kind==="ip"?cr(e.data,s.version)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"ip",code:c.invalid_string,message:s.message}),n.dirty()):s.kind==="jwt"?dr(e.data,s.alg)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"jwt",code:c.invalid_string,message:s.message}),n.dirty()):s.kind==="cidr"?lr(e.data,s.version)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"cidr",code:c.invalid_string,message:s.message}),n.dirty()):s.kind==="base64"?nr.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"base64",code:c.invalid_string,message:s.message}),n.dirty()):s.kind==="base64url"?ar.test(e.data)||(a=this._getOrReturnCtx(e,a),d(a,{validation:"base64url",code:c.invalid_string,message:s.message}),n.dirty()):A.assertNever(s);return{status:n.value,value:e.data}}_regex(e,r,n){return this.refinement(a=>e.test(a),{validation:r,code:c.invalid_string,...f.errToObj(n)})}_addCheck(e){return new B({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...f.errToObj(e)})}url(e){return this._addCheck({kind:"url",...f.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...f.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...f.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...f.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...f.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...f.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...f.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...f.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...f.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...f.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...f.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...f.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...f.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...f.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...f.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...f.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...f.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...f.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...f.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...f.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...f.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...f.errToObj(r)})}nonempty(e){return this.min(1,f.errToObj(e))}trim(){return new B({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new B({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new B({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}B.create=t=>new B({checks:[],typeName:y.ZodString,coerce:t?.coerce??!1,...x(t)});function ur(t,e){const r=(t.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,a=r>n?r:n,s=Number.parseInt(t.toFixed(a).replace(".","")),i=Number.parseInt(e.toFixed(a).replace(".",""));return s%i/10**a}class ae extends _{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==u.number){const s=this._getOrReturnCtx(e);return d(s,{code:c.invalid_type,expected:u.number,received:s.parsedType}),p}let n;const a=new E;for(const s of this._def.checks)s.kind==="int"?A.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),d(n,{code:c.invalid_type,expected:"integer",received:"float",message:s.message}),a.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(n=this._getOrReturnCtx(e,n),d(n,{code:c.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),a.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(n=this._getOrReturnCtx(e,n),d(n,{code:c.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),a.dirty()):s.kind==="multipleOf"?ur(e.data,s.value)!==0&&(n=this._getOrReturnCtx(e,n),d(n,{code:c.not_multiple_of,multipleOf:s.value,message:s.message}),a.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),d(n,{code:c.not_finite,message:s.message}),a.dirty()):A.assertNever(s);return{status:a.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,f.toString(r))}gt(e,r){return this.setLimit("min",e,!1,f.toString(r))}lte(e,r){return this.setLimit("max",e,!0,f.toString(r))}lt(e,r){return this.setLimit("max",e,!1,f.toString(r))}setLimit(e,r,n,a){return new ae({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:n,message:f.toString(a)}]})}_addCheck(e){return new ae({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:f.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:f.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:f.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:f.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:f.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:f.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:f.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:f.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:f.toString(e)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&A.isInteger(e.value))}get isFinite(){let e=null,r=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(r===null||n.value>r)&&(r=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(r)&&Number.isFinite(e)}}ae.create=t=>new ae({checks:[],typeName:y.ZodNumber,coerce:t?.coerce||!1,...x(t)});class le extends _{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==u.bigint)return this._getInvalidInput(e);let n;const a=new E;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(n=this._getOrReturnCtx(e,n),d(n,{code:c.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),a.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(n=this._getOrReturnCtx(e,n),d(n,{code:c.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),a.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),d(n,{code:c.not_multiple_of,multipleOf:s.value,message:s.message}),a.dirty()):A.assertNever(s);return{status:a.value,value:e.data}}_getInvalidInput(e){const r=this._getOrReturnCtx(e);return d(r,{code:c.invalid_type,expected:u.bigint,received:r.parsedType}),p}gte(e,r){return this.setLimit("min",e,!0,f.toString(r))}gt(e,r){return this.setLimit("min",e,!1,f.toString(r))}lte(e,r){return this.setLimit("max",e,!0,f.toString(r))}lt(e,r){return this.setLimit("max",e,!1,f.toString(r))}setLimit(e,r,n,a){return new le({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:n,message:f.toString(a)}]})}_addCheck(e){return new le({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:f.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:f.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:f.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:f.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:f.toString(r)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}le.create=t=>new le({checks:[],typeName:y.ZodBigInt,coerce:t?.coerce??!1,...x(t)});class Le extends _{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==u.boolean){const n=this._getOrReturnCtx(e);return d(n,{code:c.invalid_type,expected:u.boolean,received:n.parsedType}),p}return R(e.data)}}Le.create=t=>new Le({typeName:y.ZodBoolean,coerce:t?.coerce||!1,...x(t)});class pe extends _{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==u.date){const s=this._getOrReturnCtx(e);return d(s,{code:c.invalid_type,expected:u.date,received:s.parsedType}),p}if(Number.isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return d(s,{code:c.invalid_date}),p}const n=new E;let a;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(a=this._getOrReturnCtx(e,a),d(a,{code:c.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),n.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(a=this._getOrReturnCtx(e,a),d(a,{code:c.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),n.dirty()):A.assertNever(s);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new pe({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:f.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:f.toString(r)})}get minDate(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}}pe.create=t=>new pe({checks:[],coerce:t?.coerce||!1,typeName:y.ZodDate,...x(t)});class dt extends _{_parse(e){if(this._getType(e)!==u.symbol){const n=this._getOrReturnCtx(e);return d(n,{code:c.invalid_type,expected:u.symbol,received:n.parsedType}),p}return R(e.data)}}dt.create=t=>new dt({typeName:y.ZodSymbol,...x(t)});class Ie extends _{_parse(e){if(this._getType(e)!==u.undefined){const n=this._getOrReturnCtx(e);return d(n,{code:c.invalid_type,expected:u.undefined,received:n.parsedType}),p}return R(e.data)}}Ie.create=t=>new Ie({typeName:y.ZodUndefined,...x(t)});class je extends _{_parse(e){if(this._getType(e)!==u.null){const n=this._getOrReturnCtx(e);return d(n,{code:c.invalid_type,expected:u.null,received:n.parsedType}),p}return R(e.data)}}je.create=t=>new je({typeName:y.ZodNull,...x(t)});class lt extends _{constructor(){super(...arguments),this._any=!0}_parse(e){return R(e.data)}}lt.create=t=>new lt({typeName:y.ZodAny,...x(t)});class ut extends _{constructor(){super(...arguments),this._unknown=!0}_parse(e){return R(e.data)}}ut.create=t=>new ut({typeName:y.ZodUnknown,...x(t)});class U extends _{_parse(e){const r=this._getOrReturnCtx(e);return d(r,{code:c.invalid_type,expected:u.never,received:r.parsedType}),p}}U.create=t=>new U({typeName:y.ZodNever,...x(t)});class mt extends _{_parse(e){if(this._getType(e)!==u.undefined){const n=this._getOrReturnCtx(e);return d(n,{code:c.invalid_type,expected:u.void,received:n.parsedType}),p}return R(e.data)}}mt.create=t=>new mt({typeName:y.ZodVoid,...x(t)});class L extends _{_parse(e){const{ctx:r,status:n}=this._processInputParams(e),a=this._def;if(r.parsedType!==u.array)return d(r,{code:c.invalid_type,expected:u.array,received:r.parsedType}),p;if(a.exactLength!==null){const i=r.data.length>a.exactLength.value,o=r.data.length<a.exactLength.value;(i||o)&&(d(r,{code:i?c.too_big:c.too_small,minimum:o?a.exactLength.value:void 0,maximum:i?a.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:a.exactLength.message}),n.dirty())}if(a.minLength!==null&&r.data.length<a.minLength.value&&(d(r,{code:c.too_small,minimum:a.minLength.value,type:"array",inclusive:!0,exact:!1,message:a.minLength.message}),n.dirty()),a.maxLength!==null&&r.data.length>a.maxLength.value&&(d(r,{code:c.too_big,maximum:a.maxLength.value,type:"array",inclusive:!0,exact:!1,message:a.maxLength.message}),n.dirty()),r.common.async)return Promise.all([...r.data].map((i,o)=>a.type._parseAsync(new q(r,i,r.path,o)))).then(i=>E.mergeArray(n,i));const s=[...r.data].map((i,o)=>a.type._parseSync(new q(r,i,r.path,o)));return E.mergeArray(n,s)}get element(){return this._def.type}min(e,r){return new L({...this._def,minLength:{value:e,message:f.toString(r)}})}max(e,r){return new L({...this._def,maxLength:{value:e,message:f.toString(r)}})}length(e,r){return new L({...this._def,exactLength:{value:e,message:f.toString(r)}})}nonempty(e){return this.min(1,e)}}L.create=(t,e)=>new L({type:t,minLength:null,maxLength:null,exactLength:null,typeName:y.ZodArray,...x(e)});function se(t){if(t instanceof T){const e={};for(const r in t.shape){const n=t.shape[r];e[r]=D.create(se(n))}return new T({...t._def,shape:()=>e})}else return t instanceof L?new L({...t._def,type:se(t.element)}):t instanceof D?D.create(se(t.unwrap())):t instanceof K?K.create(se(t.unwrap())):t instanceof G?G.create(t.items.map(e=>se(e))):t}class T extends _{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),r=A.objectKeys(e);return this._cached={shape:e,keys:r},this._cached}_parse(e){if(this._getType(e)!==u.object){const m=this._getOrReturnCtx(e);return d(m,{code:c.invalid_type,expected:u.object,received:m.parsedType}),p}const{status:n,ctx:a}=this._processInputParams(e),{shape:s,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof U&&this._def.unknownKeys==="strip"))for(const m in a.data)i.includes(m)||o.push(m);const l=[];for(const m of i){const v=s[m],X=a.data[m];l.push({key:{status:"valid",value:m},value:v._parse(new q(a,X,a.path,m)),alwaysSet:m in a.data})}if(this._def.catchall instanceof U){const m=this._def.unknownKeys;if(m==="passthrough")for(const v of o)l.push({key:{status:"valid",value:v},value:{status:"valid",value:a.data[v]}});else if(m==="strict")o.length>0&&(d(a,{code:c.unrecognized_keys,keys:o}),n.dirty());else if(m!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const m=this._def.catchall;for(const v of o){const X=a.data[v];l.push({key:{status:"valid",value:v},value:m._parse(new q(a,X,a.path,v)),alwaysSet:v in a.data})}}return a.common.async?Promise.resolve().then(async()=>{const m=[];for(const v of l){const X=await v.key,Se=await v.value;m.push({key:X,value:Se,alwaysSet:v.alwaysSet})}return m}).then(m=>E.mergeObjectSync(n,m)):E.mergeObjectSync(n,l)}get shape(){return this._def.shape()}strict(e){return f.errToObj,new T({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,n)=>{const a=this._def.errorMap?.(r,n).message??n.defaultError;return r.code==="unrecognized_keys"?{message:f.errToObj(e).message??a}:{message:a}}}:{}})}strip(){return new T({...this._def,unknownKeys:"strip"})}passthrough(){return new T({...this._def,unknownKeys:"passthrough"})}extend(e){return new T({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new T({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:y.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new T({...this._def,catchall:e})}pick(e){const r={};for(const n of A.objectKeys(e))e[n]&&this.shape[n]&&(r[n]=this.shape[n]);return new T({...this._def,shape:()=>r})}omit(e){const r={};for(const n of A.objectKeys(this.shape))e[n]||(r[n]=this.shape[n]);return new T({...this._def,shape:()=>r})}deepPartial(){return se(this)}partial(e){const r={};for(const n of A.objectKeys(this.shape)){const a=this.shape[n];e&&!e[n]?r[n]=a:r[n]=a.optional()}return new T({...this._def,shape:()=>r})}required(e){const r={};for(const n of A.objectKeys(this.shape))if(e&&!e[n])r[n]=this.shape[n];else{let s=this.shape[n];for(;s instanceof D;)s=s._def.innerType;r[n]=s}return new T({...this._def,shape:()=>r})}keyof(){return ht(A.objectKeys(this.shape))}}T.create=(t,e)=>new T({shape:()=>t,unknownKeys:"strip",catchall:U.create(),typeName:y.ZodObject,...x(e)}),T.strictCreate=(t,e)=>new T({shape:()=>t,unknownKeys:"strict",catchall:U.create(),typeName:y.ZodObject,...x(e)}),T.lazycreate=(t,e)=>new T({shape:t,unknownKeys:"strip",catchall:U.create(),typeName:y.ZodObject,...x(e)});class ye extends _{_parse(e){const{ctx:r}=this._processInputParams(e),n=this._def.options;function a(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return r.common.issues.push(...o.ctx.common.issues),o.result;const i=s.map(o=>new z(o.ctx.common.issues));return d(r,{code:c.invalid_union,unionErrors:i}),p}if(r.common.async)return Promise.all(n.map(async s=>{const i={...r,common:{...r.common,issues:[]},parent:null};return{result:await s._parseAsync({data:r.data,path:r.path,parent:i}),ctx:i}})).then(a);{let s;const i=[];for(const l of n){const m={...r,common:{...r.common,issues:[]},parent:null},v=l._parseSync({data:r.data,path:r.path,parent:m});if(v.status==="valid")return v;v.status==="dirty"&&!s&&(s={result:v,ctx:m}),m.common.issues.length&&i.push(m.common.issues)}if(s)return r.common.issues.push(...s.ctx.common.issues),s.result;const o=i.map(l=>new z(l));return d(r,{code:c.invalid_union,unionErrors:o}),p}}get options(){return this._def.options}}ye.create=(t,e)=>new ye({options:t,typeName:y.ZodUnion,...x(e)});const P=t=>t instanceof Pe?P(t.schema):t instanceof J?P(t.innerType()):t instanceof ve?[t.value]:t instanceof Y?t.options:t instanceof De?A.objectValues(t.enum):t instanceof _e?P(t._def.innerType):t instanceof Ie?[void 0]:t instanceof je?[null]:t instanceof D?[void 0,...P(t.unwrap())]:t instanceof K?[null,...P(t.unwrap())]:t instanceof pt||t instanceof ke?P(t.unwrap()):t instanceof Ae?P(t._def.innerType):[];class Ze extends _{_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==u.object)return d(r,{code:c.invalid_type,expected:u.object,received:r.parsedType}),p;const n=this.discriminator,a=r.data[n],s=this.optionsMap.get(a);return s?r.common.async?s._parseAsync({data:r.data,path:r.path,parent:r}):s._parseSync({data:r.data,path:r.path,parent:r}):(d(r,{code:c.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),p)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,n){const a=new Map;for(const s of r){const i=P(s.shape[e]);if(!i.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of i){if(a.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);a.set(o,s)}}return new Ze({typeName:y.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:a,...x(n)})}}function ze(t,e){const r=V(t),n=V(e);if(t===e)return{valid:!0,data:t};if(r===u.object&&n===u.object){const a=A.objectKeys(e),s=A.objectKeys(t).filter(o=>a.indexOf(o)!==-1),i={...t,...e};for(const o of s){const l=ze(t[o],e[o]);if(!l.valid)return{valid:!1};i[o]=l.data}return{valid:!0,data:i}}else if(r===u.array&&n===u.array){if(t.length!==e.length)return{valid:!1};const a=[];for(let s=0;s<t.length;s++){const i=t[s],o=e[s],l=ze(i,o);if(!l.valid)return{valid:!1};a.push(l.data)}return{valid:!0,data:a}}else return r===u.date&&n===u.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class xe extends _{_parse(e){const{status:r,ctx:n}=this._processInputParams(e),a=(s,i)=>{if(at(s)||at(i))return p;const o=ze(s.value,i.value);return o.valid?((st(s)||st(i))&&r.dirty(),{status:r.value,value:o.data}):(d(n,{code:c.invalid_intersection_types}),p)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([s,i])=>a(s,i)):a(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}xe.create=(t,e,r)=>new xe({left:t,right:e,typeName:y.ZodIntersection,...x(r)});class G extends _{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==u.array)return d(n,{code:c.invalid_type,expected:u.array,received:n.parsedType}),p;if(n.data.length<this._def.items.length)return d(n,{code:c.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),p;!this._def.rest&&n.data.length>this._def.items.length&&(d(n,{code:c.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const s=[...n.data].map((i,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new q(n,i,n.path,o)):null}).filter(i=>!!i);return n.common.async?Promise.all(s).then(i=>E.mergeArray(r,i)):E.mergeArray(r,s)}get items(){return this._def.items}rest(e){return new G({...this._def,rest:e})}}G.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new G({items:t,typeName:y.ZodTuple,rest:null,...x(e)})};class ft extends _{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==u.map)return d(n,{code:c.invalid_type,expected:u.map,received:n.parsedType}),p;const a=this._def.keyType,s=this._def.valueType,i=[...n.data.entries()].map(([o,l],m)=>({key:a._parse(new q(n,o,n.path,[m,"key"])),value:s._parse(new q(n,l,n.path,[m,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of i){const m=await l.key,v=await l.value;if(m.status==="aborted"||v.status==="aborted")return p;(m.status==="dirty"||v.status==="dirty")&&r.dirty(),o.set(m.value,v.value)}return{status:r.value,value:o}})}else{const o=new Map;for(const l of i){const m=l.key,v=l.value;if(m.status==="aborted"||v.status==="aborted")return p;(m.status==="dirty"||v.status==="dirty")&&r.dirty(),o.set(m.value,v.value)}return{status:r.value,value:o}}}}ft.create=(t,e,r)=>new ft({valueType:e,keyType:t,typeName:y.ZodMap,...x(r)});class ue extends _{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==u.set)return d(n,{code:c.invalid_type,expected:u.set,received:n.parsedType}),p;const a=this._def;a.minSize!==null&&n.data.size<a.minSize.value&&(d(n,{code:c.too_small,minimum:a.minSize.value,type:"set",inclusive:!0,exact:!1,message:a.minSize.message}),r.dirty()),a.maxSize!==null&&n.data.size>a.maxSize.value&&(d(n,{code:c.too_big,maximum:a.maxSize.value,type:"set",inclusive:!0,exact:!1,message:a.maxSize.message}),r.dirty());const s=this._def.valueType;function i(l){const m=new Set;for(const v of l){if(v.status==="aborted")return p;v.status==="dirty"&&r.dirty(),m.add(v.value)}return{status:r.value,value:m}}const o=[...n.data.values()].map((l,m)=>s._parse(new q(n,l,n.path,m)));return n.common.async?Promise.all(o).then(l=>i(l)):i(o)}min(e,r){return new ue({...this._def,minSize:{value:e,message:f.toString(r)}})}max(e,r){return new ue({...this._def,maxSize:{value:e,message:f.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}}ue.create=(t,e)=>new ue({valueType:t,minSize:null,maxSize:null,typeName:y.ZodSet,...x(e)});class Pe extends _{get schema(){return this._def.getter()}_parse(e){const{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}Pe.create=(t,e)=>new Pe({getter:t,typeName:y.ZodLazy,...x(e)});class ve extends _{_parse(e){if(e.data!==this._def.value){const r=this._getOrReturnCtx(e);return d(r,{received:r.data,code:c.invalid_literal,expected:this._def.value}),p}return{status:"valid",value:e.data}}get value(){return this._def.value}}ve.create=(t,e)=>new ve({value:t,typeName:y.ZodLiteral,...x(e)});function ht(t,e){return new Y({values:t,typeName:y.ZodEnum,...x(e)})}class Y extends _{_parse(e){if(typeof e.data!="string"){const r=this._getOrReturnCtx(e),n=this._def.values;return d(r,{expected:A.joinValues(n),received:r.parsedType,code:c.invalid_type}),p}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const r=this._getOrReturnCtx(e),n=this._def.values;return d(r,{received:r.data,code:c.invalid_enum_value,options:n}),p}return R(e.data)}get options(){return this._def.values}get enum(){const e={};for(const r of this._def.values)e[r]=r;return e}get Values(){const e={};for(const r of this._def.values)e[r]=r;return e}get Enum(){const e={};for(const r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return Y.create(e,{...this._def,...r})}exclude(e,r=this._def){return Y.create(this.options.filter(n=>!e.includes(n)),{...this._def,...r})}}Y.create=ht;class De extends _{_parse(e){const r=A.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==u.string&&n.parsedType!==u.number){const a=A.objectValues(r);return d(n,{expected:A.joinValues(a),received:n.parsedType,code:c.invalid_type}),p}if(this._cache||(this._cache=new Set(A.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const a=A.objectValues(r);return d(n,{received:n.data,code:c.invalid_enum_value,options:a}),p}return R(e.data)}get enum(){return this._def.values}}De.create=(t,e)=>new De({values:t,typeName:y.ZodNativeEnum,...x(e)});class be extends _{unwrap(){return this._def.type}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==u.promise&&r.common.async===!1)return d(r,{code:c.invalid_type,expected:u.promise,received:r.parsedType}),p;const n=r.parsedType===u.promise?r.data:Promise.resolve(r.data);return R(n.then(a=>this._def.type.parseAsync(a,{path:r.path,errorMap:r.common.contextualErrorMap})))}}be.create=(t,e)=>new be({type:t,typeName:y.ZodPromise,...x(e)});class J extends _{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===y.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:r,ctx:n}=this._processInputParams(e),a=this._def.effect||null,s={addIssue:i=>{d(n,i),i.fatal?r.abort():r.dirty()},get path(){return n.path}};if(s.addIssue=s.addIssue.bind(s),a.type==="preprocess"){const i=a.transform(n.data,s);if(n.common.async)return Promise.resolve(i).then(async o=>{if(r.value==="aborted")return p;const l=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return l.status==="aborted"?p:l.status==="dirty"||r.value==="dirty"?de(l.value):l});{if(r.value==="aborted")return p;const o=this._def.schema._parseSync({data:i,path:n.path,parent:n});return o.status==="aborted"?p:o.status==="dirty"||r.value==="dirty"?de(o.value):o}}if(a.type==="refinement"){const i=o=>{const l=a.refinement(o,s);if(n.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?p:(o.status==="dirty"&&r.dirty(),i(o.value),{status:r.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?p:(o.status==="dirty"&&r.dirty(),i(o.value).then(()=>({status:r.value,value:o.value}))))}if(a.type==="transform")if(n.common.async===!1){const i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!ne(i))return p;const o=a.transform(i.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(i=>ne(i)?Promise.resolve(a.transform(i.value,s)).then(o=>({status:r.value,value:o})):p);A.assertNever(a)}}J.create=(t,e,r)=>new J({schema:t,typeName:y.ZodEffects,effect:e,...x(r)}),J.createWithPreprocess=(t,e,r)=>new J({schema:e,effect:{type:"preprocess",transform:t},typeName:y.ZodEffects,...x(r)});class D extends _{_parse(e){return this._getType(e)===u.undefined?R(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}D.create=(t,e)=>new D({innerType:t,typeName:y.ZodOptional,...x(e)});class K extends _{_parse(e){return this._getType(e)===u.null?R(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}K.create=(t,e)=>new K({innerType:t,typeName:y.ZodNullable,...x(e)});class _e extends _{_parse(e){const{ctx:r}=this._processInputParams(e);let n=r.data;return r.parsedType===u.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}_e.create=(t,e)=>new _e({innerType:t,typeName:y.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...x(e)});class Ae extends _{_parse(e){const{ctx:r}=this._processInputParams(e),n={...r,common:{...r.common,issues:[]}},a=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return ge(a)?a.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new z(n.common.issues)},input:n.data})})):{status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new z(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Ae.create=(t,e)=>new Ae({innerType:t,typeName:y.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...x(e)});class gt extends _{_parse(e){if(this._getType(e)!==u.nan){const n=this._getOrReturnCtx(e);return d(n,{code:c.invalid_type,expected:u.nan,received:n.parsedType}),p}return{status:"valid",value:e.data}}}gt.create=t=>new gt({typeName:y.ZodNaN,...x(t)});class pt extends _{_parse(e){const{ctx:r}=this._processInputParams(e),n=r.data;return this._def.type._parse({data:n,path:r.path,parent:r})}unwrap(){return this._def.type}}class Fe extends _{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?p:s.status==="dirty"?(r.dirty(),de(s.value)):this._def.out._parseAsync({data:s.value,path:n.path,parent:n})})();{const a=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return a.status==="aborted"?p:a.status==="dirty"?(r.dirty(),{status:"dirty",value:a.value}):this._def.out._parseSync({data:a.value,path:n.path,parent:n})}}static create(e,r){return new Fe({in:e,out:r,typeName:y.ZodPipeline})}}class ke extends _{_parse(e){const r=this._def.innerType._parse(e),n=a=>(ne(a)&&(a.value=Object.freeze(a.value)),a);return ge(r)?r.then(a=>n(a)):n(r)}unwrap(){return this._def.innerType}}ke.create=(t,e)=>new ke({innerType:t,typeName:y.ZodReadonly,...x(e)});var y;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(y||(y={}));const N=B.create,yt=ae.create,ie=Le.create;U.create;const me=L.create,I=T.create;ye.create;const mr=Ze.create;xe.create,G.create;const Q=ve.create,fr=Y.create;be.create,D.create,K.create;const F={CLASSIFY_UNIT:"calmweb:classifyUnit",GET_SETTINGS:"calmweb:getSettings",UPDATE_SETTINGS:"calmweb:updateSettings",CLEAR_CACHE:"calmweb:clearCache",GET_STATS:"calmweb:getStats",INCREMENT_STAT:"calmweb:incrementStat",TOGGLE_READER:"calmweb:toggleReader",OPEN_READER:"calmweb:openReader",CLOSE_READER:"calmweb:closeReader"},hr=I({type:Q(F.CLASSIFY_UNIT),unit:I({id:N(),site:N(),fingerprint:N(),sourceName:N().optional(),title:N(),metadata:me(N()),isNew:ie(),url:N().url().optional()})}),gr=I({type:Q(F.GET_SETTINGS)}),pr=I({type:Q(F.UPDATE_SETTINGS),settings:I({enabled:ie().optional(),processingMode:fr(["local_rules","byok_llm","hosted_llm"]).optional(),strictness:yt().min(0).max(100).optional(),rules:I({blocklistChannels:me(N()).optional(),blocklistKeywords:me(N()).optional(),allowlistChannels:me(N()).optional(),allowlistKeywords:me(N()).optional(),presets:I({politics:ie().optional(),ragebait:ie().optional(),spoilers:ie().optional(),clickbait:ie().optional()}).optional()}).optional(),byokKey:N().optional()})}),yr=I({type:Q(F.CLEAR_CACHE)}),xr=I({type:Q(F.GET_STATS)}),vr=I({type:Q(F.INCREMENT_STAT),key:Q("totalFiltered"),amount:yt().optional()});mr("type",[hr,gr,pr,yr,xr,vr]);function br(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var we={exports:{}},_r=we.exports,xt;function Ar(){return xt||(xt=1,(function(t,e){(function(r,n){n(t)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:_r,function(r){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)r.exports=globalThis.browser;else{const n="The message port closed before a response was received.",a=s=>{const i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(g,k=void 0){super(k),this.createItem=g}get(g){return this.has(g)||this.set(g,this.createItem(g)),super.get(g)}}const l=h=>h&&typeof h=="object"&&typeof h.then=="function",m=(h,g)=>(...k)=>{s.runtime.lastError?h.reject(new Error(s.runtime.lastError.message)):g.singleCallbackArg||k.length<=1&&g.singleCallbackArg!==!1?h.resolve(k[0]):h.resolve(k)},v=h=>h==1?"argument":"arguments",X=(h,g)=>function(w,...C){if(C.length<g.minArgs)throw new Error(`Expected at least ${g.minArgs} ${v(g.minArgs)} for ${h}(), got ${C.length}`);if(C.length>g.maxArgs)throw new Error(`Expected at most ${g.maxArgs} ${v(g.maxArgs)} for ${h}(), got ${C.length}`);return new Promise(($,O)=>{if(g.fallbackToNoCallback)try{w[h](...C,m({resolve:$,reject:O},g))}catch(b){console.warn(`${h} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,b),w[h](...C),g.fallbackToNoCallback=!1,g.noCallback=!0,$()}else g.noCallback?(w[h](...C),$()):w[h](...C,m({resolve:$,reject:O},g))})},Se=(h,g,k)=>new Proxy(g,{apply(w,C,$){return k.call(C,h,...$)}});let Ce=Function.call.bind(Object.prototype.hasOwnProperty);const Ee=(h,g={},k={})=>{let w=Object.create(null),C={has(O,b){return b in h||b in w},get(O,b,M){if(b in w)return w[b];if(!(b in h))return;let S=h[b];if(typeof S=="function")if(typeof g[b]=="function")S=Se(h,h[b],g[b]);else if(Ce(k,b)){let oe=X(b,k[b]);S=Se(h,h[b],oe)}else S=S.bind(h);else if(typeof S=="object"&&S!==null&&(Ce(g,b)||Ce(k,b)))S=Ee(S,g[b],k[b]);else if(Ce(k,"*"))S=Ee(S,g[b],k["*"]);else return Object.defineProperty(w,b,{configurable:!0,enumerable:!0,get(){return h[b]},set(oe){h[b]=oe}}),S;return w[b]=S,S},set(O,b,M,S){return b in w?w[b]=M:h[b]=M,!0},defineProperty(O,b,M){return Reflect.defineProperty(w,b,M)},deleteProperty(O,b){return Reflect.deleteProperty(w,b)}},$=Object.create(h);return new Proxy($,C)},qe=h=>({addListener(g,k,...w){g.addListener(h.get(k),...w)},hasListener(g,k){return g.hasListener(h.get(k))},removeListener(g,k){g.removeListener(h.get(k))}}),Sr=new o(h=>typeof h!="function"?h:function(k){const w=Ee(k,{},{getContent:{minArgs:0,maxArgs:0}});h(w)}),vt=new o(h=>typeof h!="function"?h:function(k,w,C){let $=!1,O,b=new Promise(fe=>{O=function(j){$=!0,fe(j)}}),M;try{M=h(k,w,O)}catch(fe){M=Promise.reject(fe)}const S=M!==!0&&l(M);if(M!==!0&&!S&&!$)return!1;const oe=fe=>{fe.then(j=>{C(j)},j=>{let Ue;j&&(j instanceof Error||typeof j.message=="string")?Ue=j.message:Ue="An unexpected error occurred",C({__mozWebExtensionPolyfillReject__:!0,message:Ue})}).catch(j=>{console.error("Failed to send onMessage rejected reply",j)})};return oe(S?M:b),!0}),Cr=({reject:h,resolve:g},k)=>{s.runtime.lastError?s.runtime.lastError.message===n?g():h(new Error(s.runtime.lastError.message)):k&&k.__mozWebExtensionPolyfillReject__?h(new Error(k.message)):g(k)},bt=(h,g,k,...w)=>{if(w.length<g.minArgs)throw new Error(`Expected at least ${g.minArgs} ${v(g.minArgs)} for ${h}(), got ${w.length}`);if(w.length>g.maxArgs)throw new Error(`Expected at most ${g.maxArgs} ${v(g.maxArgs)} for ${h}(), got ${w.length}`);return new Promise((C,$)=>{const O=Cr.bind(null,{resolve:C,reject:$});w.push(O),k.sendMessage(...w)})},Er={devtools:{network:{onRequestFinished:qe(Sr)}},runtime:{onMessage:qe(vt),onMessageExternal:qe(vt),sendMessage:bt.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:bt.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},Be={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":Be},services:{"*":Be},websites:{"*":Be}},Ee(s,Er,i)};r.exports=a(chrome)}})})(we)),we.exports}var kr=Ar();const wr=br(kr),Tr={matches:["<all_urls>"],runAt:"document_idle",main(){console.log("[CalmWeb] Reader content script loaded"),document.addEventListener("keydown",t=>{t.altKey&&t.key.toLowerCase()==="r"&&(t.preventDefault(),he())}),wr.runtime.onMessage.addListener(t=>{t.type===F.TOGGLE_READER&&(console.log("[CalmWeb] Toggle reader via message"),he()),t.type===F.OPEN_READER&&(console.log("[CalmWeb] Open reader via message"),he()),t.type===F.CLOSE_READER&&(console.log("[CalmWeb] Close reader via message"),he())})}};function Mr(){}function Te(t,...e){}const Ve={debug:(...t)=>Te(console.debug,...t),log:(...t)=>Te(console.log,...t),warn:(...t)=>Te(console.warn,...t),error:(...t)=>Te(console.error,...t)};return(()=>{try{}catch(e){throw Ve.error('Failed to initialize plugins for "reader"',e),e}let t;try{t=Tr.main(),t instanceof Promise&&(t=t.catch(e=>{throw Ve.error('The unlisted script "reader" crashed on startup!',e),e}))}catch(e){throw Ve.error('The unlisted script "reader" crashed on startup!',e),e}return t})()})();
reader;