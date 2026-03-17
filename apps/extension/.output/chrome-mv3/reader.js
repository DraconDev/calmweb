var reader=(function(){"use strict";function Vr(t){return t}const jt=["nav","aside","footer","header:not(article header)",".ad",".advertisement",".ads",".ad-container",".sidebar",".related",".recommended",".suggestions",".social-share",".share-buttons",".social-links",".comments","#comments",".comment-section","script","style","noscript","iframe",'[class*="newsletter"]','[class*="subscribe"]','[class*="popup"]','[class*="modal"]',".author-bio",".author-info",".about-author",".tags",".tag-list",".categories",".breadcrumb",".breadcrumbs",".pagination",".pager",".cookie-notice",".gdpr"],zt=["article",'[role="article"]',"main article",".post-content",".article-content",".entry-content",".post-body",".article-body",".content-body","main",'[role="main"]',"#content",".content"],Zt=["article h1",'h1[itemprop="headline"]','[property="og:title"]','meta[name="twitter:title"]',"h1",".post-title",".article-title",".entry-title"],Ft=['[rel="author"]','[itemprop="author"]',".author-name",".byline",".author",'meta[name="author"]'],Bt=["time",'[itemprop="datePublished"]',"[datetime]",".post-date",".article-date",".publish-date",'meta[name="date"]','[property="article:published_time"]'];function Dt(t,e,r=!0){const n=qt(t),s=Wt(t),a=Vt(t),i=Ht(t),o=r?[]:Gt(i),m=Ut(i,r),f=Kt(t),v=Yt(m.textContent||"");return{title:n,author:s,date:a,content:m.textContent||"",contentHtml:m,images:o,source:new URL(e).hostname,favicon:f,readingTime:v,url:e}}function qt(t){for(const e of Zt){const r=t.querySelector(e);if(r){const n=r.getAttribute("content")||r.textContent?.trim();if(n&&n.length>5&&n.length<300)return n}}return t.title||"Untitled"}function Wt(t){for(const e of Ft){const r=t.querySelector(e);if(r){let n=r.getAttribute("content")||r.textContent?.trim();if(n&&n.length<100)return n=n.replace(/^(by|written by|reported by)\s+/i,""),n}}}function Vt(t){for(const e of Bt){const r=t.querySelector(e);if(r){const s=r.getAttribute("datetime")||r.getAttribute("content")||r.textContent?.trim();if(s)try{const a=new Date(s);if(!isNaN(a.getTime()))return a.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch{continue}}}}function Ht(t){for(const s of zt){const a=t.querySelector(s);if(a&&a.textContent&&a.textContent.trim().length>200)return a}const e=t.querySelectorAll("div, section, main");let r=null,n=0;return e.forEach(s=>{const a=s,i=a.textContent?.length||0,o=a.querySelectorAll("p").length,m=i+o*100;m>n&&(n=m,r=a)}),r||t.body}function Ut(t,e=!0){const r=t.cloneNode(!0);return jt.forEach(n=>{r.querySelectorAll(n).forEach(s=>s.remove())}),e&&(r.querySelectorAll("figure").forEach(n=>{const s=n.querySelector("figcaption");if(s&&s.textContent?.trim()){const a=document.createElement("p");a.textContent=s.textContent.trim(),a.classList.add("calmweb-caption"),n.replaceWith(a)}else n.remove()}),r.querySelectorAll("img, video, audio, source, track, picture, canvas, embed, object").forEach(n=>n.remove())),r.querySelectorAll("a").forEach(n=>{const s=n.getAttribute("href");s&&!s.startsWith("http")&&!s.startsWith("/")&&n.removeAttribute("href")}),r.querySelectorAll("*").forEach(n=>{const s=n;s.removeAttribute("style"),s.removeAttribute("class"),s.removeAttribute("id"),s.removeAttribute("onclick"),s.removeAttribute("onmouseover"),s.removeAttribute("onmouseout")}),r}function Gt(t){const e=[];return t.querySelectorAll("img").forEach(r=>{const n=r.getAttribute("src")||r.getAttribute("data-src");if(n&&!n.includes("avatar")&&!n.includes("icon")&&!n.includes("logo")){const s=r.getAttribute("alt")||"",i=r.closest("figure")?.querySelector("figcaption")?.textContent?.trim();e.push({src:n,alt:s,caption:i})}}),e.slice(0,20)}function Kt(t){const r=t.querySelector('link[rel="icon"], link[rel="shortcut icon"]')?.getAttribute("href");if(r)return r.startsWith("//")?"https:"+r:r.startsWith("/")?(t.location?.origin||"https://example.com")+r:r}function Yt(t){const r=t.split(/\s+/).length;return Math.max(1,Math.ceil(r/200))}function I(t){const e=document.createElement("span");return e.textContent=t,e.innerHTML}const B=t=>`
  <div class="reader-meta">
    ${t.author?`<span class="reader-meta-item author">${I(t.author)}</span>`:""}
    ${t.date?`<span class="reader-meta-item date">${t.date}</span>`:""}
    <span class="reader-meta-item time">${t.readingTime} min read</span>
  </div>
`,D=t=>`
  <footer class="reader-footer">
    <div class="reader-source">
      ${t.favicon?`<img class="reader-favicon" src="${I(t.favicon)}" alt="">`:""}
      <span>${I(t.source)}</span>
    </div>
  </footer>
`,q=`
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
`,rt={id:"reader",name:"Reader",description:"Optimized for long-form articles with elegant typography",bestFor:["articles","essays","blog posts","newsletter"],columns:1,maxWidth:"680px",fontFamily:'Georgia, Charter, "Times New Roman", serif',fontSize:"19px",lineHeight:"1.75",render(t,e){e.innerHTML=`
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
        ${q}
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #e5e7eb; }
          .reader-title { color: #f9fafb; }
          .reader-content p:first-child::first-letter { color: #f9fafb; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${I(t.title)}</h1>
          ${B(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${D(t)}
      </div>
    `}},nt={id:"focus",name:"Focus",description:"Distraction-free reading with maximum concentration",bestFor:["deep reading","learning","study material"],columns:1,maxWidth:"600px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"18px",lineHeight:"1.8",render(t,e){e.innerHTML=`
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
        ${q}
        .reader-footer { text-align: center; border: none; margin-top: 80px; }
        @media (prefers-color-scheme: dark) {
          .reader-container { background: #0a0a0a; color: #d1d5db; }
          .reader-title { color: #f3f4f6; }
          .reader-content { color: #d1d5db; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${I(t.title)}</h1>
          ${B(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${D(t)}
      </div>
    `}},st={id:"terminal",name:"Terminal",description:"Hacker-style for code and technical content",bestFor:["code","documentation","tutorials","technical blogs"],columns:1,maxWidth:"900px",fontFamily:'"JetBrains Mono", "Fira Code", "SF Mono", monospace',fontSize:"14px",lineHeight:"1.7",render(t,e){e.innerHTML=`
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
        ${q}
        .reader-footer { border-top-color: #30363d; color: #6e7681; }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${I(t.title)}</h1>
          ${B(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${D(t)}
      </div>
    `}},at={id:"compact",name:"Compact",description:"Dense layout for news and quick scanning",bestFor:["news","updates","briefs","quick reads"],columns:2,maxWidth:"800px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"15px",lineHeight:"1.6",render(t,e){e.innerHTML=`
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
        ${q}
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
          <h1 class="reader-title">${I(t.title)}</h1>
          ${B(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${D(t)}
      </div>
    `}},it={id:"visual",name:"Visual",description:"Image-forward layout for photo essays and visual stories",bestFor:["photo essays","travel","lifestyle","portfolio"],columns:1,maxWidth:"840px",fontFamily:"Georgia, Charter, serif",fontSize:"18px",lineHeight:"1.75",render(t,e){const r=t.images[0];e.innerHTML=`
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
        ${q}
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
            <h1 class="reader-title">${I(t.title)}</h1>
            ${B(t)}
          </header>
          <article class="reader-content">${t.contentHtml.innerHTML}</article>
          ${D(t)}
        </div>
      </div>
    `}},ot={id:"academic",name:"Academic",description:"Formal two-column layout for papers and research",bestFor:["papers","research","reports","documentation"],columns:2,maxWidth:"900px",fontFamily:'"Source Serif Pro", Georgia, "Times New Roman", serif',fontSize:"15px",lineHeight:"1.65",render(t,e){e.innerHTML=`
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
        ${q}
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
          <h1 class="reader-title">${I(t.title)}</h1>
          ${B(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${D(t)}
      </div>
    `}},je=[rt,nt,st,at,it,ot,{id:"magazine",name:"Magazine",description:"Editorial magazine style with large headers and pull quotes",bestFor:["magazines","features","long reads","editorials"],columns:1,maxWidth:"720px",fontFamily:'Georgia, "Times New Roman", serif',fontSize:"18px",lineHeight:"1.8",render(t,e){const r=t.images[0];e.innerHTML=`
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 0 24px 48px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #2d2d2d;
        }
        .reader-hero-wrap { margin: 0 -100px 40px; }
        .reader-hero { width: 100%; height: auto; display: block; }
        .reader-header { margin-bottom: 40px; border-bottom: 3px double #333; padding-bottom: 24px; }
        .reader-title { 
          font-size: 2.75em; 
          font-weight: 900; 
          line-height: 1.1; 
          margin: 0 0 16px; 
          letter-spacing: -0.03em;
        }
        .reader-meta { font-size: 0.85em; color: #888; text-transform: uppercase; letter-spacing: 0.1em; }
        .reader-content { font-variant-numeric: oldstyle-nums; }
        .reader-content p:first-child::first-letter { 
          float: left; font-size: 4.5em; line-height: 0.75; margin: 8px 12px 0 0; font-weight: 700;
        }
        .reader-content blockquote { 
          font-size: 1.35em; font-style: italic; border: none; padding: 1em 0; 
          margin: 2em 0; text-align: center; color: #555;
        }
        ${q}
        .reader-footer { margin-top: 48px; text-align: center; border-top: 1px solid #ddd; }
        @media (max-width: 800px) { .reader-hero-wrap { margin: 0 0 24px; } }
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #d4d4d4; }
          .reader-title { color: #f5f5f5; }
          .reader-header { border-bottom-color: #555; }
          .reader-content blockquote { color: #aaa; }
        }
      </style>
      <div class="reader-container">
        ${r?`<div class="reader-hero-wrap"><img class="reader-hero" src="${r.src}" alt="${r.alt||""}"></div>`:""}
        <header class="reader-header">
          <h1 class="reader-title">${I(t.title)}</h1>
          ${B(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${D(t)}
      </div>
    `}},{id:"minimal",name:"Minimal",description:"Clean minimal design with maximum whitespace",bestFor:["essays","philosophy","personal writing","letters"],columns:1,maxWidth:"560px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',fontSize:"17px",lineHeight:"1.85",render(t,e){e.innerHTML=`
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 80px 24px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #333;
        }
        .reader-header { margin-bottom: 48px; }
        .reader-title { 
          font-size: 1.5em; 
          font-weight: 400; 
          line-height: 1.4; 
          margin: 0 0 12px; 
          color: #000;
        }
        .reader-meta { font-size: 0.8em; color: #bbb; }
        .reader-content p { margin-bottom: 1.5em; }
        ${q}
        .reader-footer { margin-top: 60px; border: none; text-align: center; color: #ccc; font-size: 0.75em; }
        @media (prefers-color-scheme: dark) {
          .reader-container { color: #ccc; }
          .reader-title { color: #eee; }
          .reader-meta { color: #666; }
          .reader-footer { color: #444; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${I(t.title)}</h1>
          ${B(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${D(t)}
      </div>
    `}},{id:"newspaper",name:"Newspaper",description:"Classic newspaper column layout",bestFor:["news","columns","opinion","journalism"],columns:3,maxWidth:"960px",fontFamily:'"Times New Roman", Times, Georgia, serif',fontSize:"15px",lineHeight:"1.55",render(t,e){e.innerHTML=`
      <style>
        .reader-container { 
          max-width: ${this.maxWidth}; 
          margin: 0 auto; 
          padding: 32px 24px; 
          font-family: ${this.fontFamily}; 
          font-size: ${this.fontSize}; 
          line-height: ${this.lineHeight}; 
          color: #1a1a1a;
          background: #fdfcf8;
        }
        .reader-header { 
          text-align: center; 
          border-bottom: 2px solid #1a1a1a; 
          border-top: 4px double #1a1a1a;
          padding: 16px 0; 
          margin-bottom: 24px; 
        }
        .reader-title { 
          font-size: 2em; 
          font-weight: 900; 
          line-height: 1.15; 
          margin: 0 0 8px; 
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .reader-meta { justify-content: center; font-size: 0.8em; }
        .reader-content { 
          column-count: 3; 
          column-gap: 24px; 
          column-rule: 1px solid #ccc;
          text-align: justify;
          hyphens: auto;
        }
        .reader-content p { margin-bottom: 0.75em; text-indent: 1.5em; }
        .reader-content p:first-of-type { text-indent: 0; }
        .reader-content h2, .reader-content h3, .reader-content blockquote, .reader-content pre, .reader-content figure { 
          column-span: all; text-indent: 0;
        }
        ${q}
        .reader-footer { 
          margin-top: 32px; padding-top: 12px; 
          border-top: 2px solid #1a1a1a; column-span: all; text-align: center;
        }
        @media (max-width: 800px) { .reader-content { column-count: 2; } }
        @media (max-width: 500px) { .reader-content { column-count: 1; } }
        @media (prefers-color-scheme: dark) {
          .reader-container { background: #1a1a18; color: #ccc; }
          .reader-header { border-bottom-color: #555; border-top-color: #555; }
          .reader-title { color: #f0f0f0; }
          .reader-content { column-rule-color: #444; }
          .reader-footer { border-top-color: #555; }
        }
      </style>
      <div class="reader-container">
        <header class="reader-header">
          <h1 class="reader-title">${I(t.title)}</h1>
          ${B(t)}
        </header>
        <article class="reader-content">${t.contentHtml.innerHTML}</article>
        ${D(t)}
      </div>
    `}}],lt={id:"auto",name:"Auto",description:"Automatically picks the best layout based on page content",bestFor:["everything"],columns:1,maxWidth:"680px",fontFamily:'Georgia, Charter, "Times New Roman", serif',fontSize:"18px",lineHeight:"1.7",render(t,e){const r=dt(t);console.log("[CalmWeb] Auto-detected layout:",r.name),r.render(t,e)}};je.unshift(lt);function ct(t){return je.find(e=>e.id===t)||lt}function dt(t){const e=t.contentHtml,r=t.content||"",n=e.querySelectorAll("pre, code").length,s=e.querySelectorAll("p").length,a=t.images.length,i=r.length,o=i>0?a/(i/500):0,m=e.querySelectorAll("h2, h3").length,f=e.querySelectorAll("blockquote").length;return n>=3?st:o>.5||a>=4&&i<3e3?it:t.readingTime<=3&&s<=6?at:t.readingTime>=8&&m>=3&&f>=2?ot:t.readingTime>=12?nt:rt}const mt={id:"default",name:"Light",background:"#ffffff",text:"#1f2937",accent:"#3b82f6",isDark:!1},ut=[mt,{id:"dark",name:"Dark",background:"#111827",text:"#e5e7eb",accent:"#60a5fa",isDark:!0},{id:"sepia",name:"Sepia",background:"#f4ecd8",text:"#433422",accent:"#8b5a2b",isDark:!1},{id:"midnight",name:"Midnight",background:"#0f172a",text:"#e2e8f0",accent:"#818cf8",isDark:!0}];function gt(t){return ut.find(e=>e.id===t)||mt}function ft(t,e){e.style.setProperty("--reader-bg",t.background),e.style.setProperty("--reader-text",t.text),e.style.setProperty("--reader-accent",t.accent),e.setAttribute("data-theme",t.id)}const he="calmweb-reader-overlay",Jt=`
  #${he} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2147483647;
    background: var(--reader-bg, #09090b);
    color: var(--reader-text, #e4e4e7);
    overflow-y: auto;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .calmweb-reader-toolbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: rgba(9, 9, 11, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(139, 92, 246, 0.1);
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
    color: #8b5cf6;
  }

  .calmweb-reader-title {
    font-size: 13px;
    color: #52525b;
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
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #a1a1aa;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .calmweb-reader-btn:hover {
    background: rgba(139, 92, 246, 0.08);
    border-color: rgba(139, 92, 246, 0.2);
    color: #e4e4e7;
  }

  .calmweb-reader-btn:active {
    transform: scale(0.97);
  }

  .calmweb-reader-btn-close {
    background: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.3);
    color: #f87171;
  }

  .calmweb-reader-btn-close:hover {
    background: rgba(239, 68, 68, 0.25);
  }

  .calmweb-reader-dropdown {
    position: relative;
  }

  .calmweb-reader-dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: #0f0f14;
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 10px 40px rgba(0,0,0,0.5), 0 0 1px rgba(139, 92, 246, 0.1);
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
    color: #a1a1aa;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .calmweb-reader-dropdown-item:hover {
    background: rgba(139, 92, 246, 0.08);
    color: #e4e4e7;
  }

  .calmweb-reader-dropdown-item.active {
    background: rgba(139, 92, 246, 0.12);
    color: #8b5cf6;
  }

  .calmweb-reader-content {
    margin-top: 56px;
    min-height: calc(100vh - 56px);
  }

`;let te,re,ze=null;function we(t={}){try{if(document.getElementById(he))return;const r=Dt(document,window.location.href,t.textOnly??!0);if(!r||!r.title){console.warn("[CalmWeb] Could not extract article content");return}ze=r,document.documentElement.style.setProperty("overflow","hidden","important"),document.body.style.setProperty("overflow","hidden","important"),document.body.style.setProperty("visibility","hidden","important"),document.documentElement.style.setProperty("visibility","hidden","important"),te=t.layoutId?ct(t.layoutId):dt(r),re=gt(t.themeId||"default");const n=document.createElement("div");n.id=he,n.style.setProperty("visibility","visible","important");const s=n.attachShadow({mode:"open"});s.innerHTML=`
    <style>${Jt}</style>
    <div class="calmweb-reader-toolbar">
      <div class="calmweb-reader-toolbar-left">
        <div class="calmweb-reader-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Filtered
        </div>
        <div class="calmweb-reader-title">${Xt(r.title)}</div>
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
            <span class="layout-name">${te.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="layout">
            ${je.map(i=>`
              <div class="calmweb-reader-dropdown-item ${i.id===te.id?"active":""}" data-layout="${i.id}">
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
            <span class="theme-name">${re.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="theme">
            ${ut.map(i=>`
              <div class="calmweb-reader-dropdown-item ${i.id===re.id?"active":""}" data-theme="${i.id}">
                ${i.name}
              </div>
            `).join("")}
          </div>
        </div>

        <button class="calmweb-reader-btn" data-action="raw">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
          </svg>
          Raw
        </button>
        <button class="calmweb-reader-btn calmweb-reader-btn-close" data-action="close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
          Close
        </button>
      </div>
    </div>
    <div class="calmweb-reader-content" id="reader-content"></div>
  `,document.body.appendChild(n);const a=s.getElementById("reader-content");ft(re,n),te.render(r,a),Qt(s,n,t)}catch(e){console.error("[CalmWeb] Failed to open reader:",e)}}function pe(){const t=document.getElementById(he);t&&t.remove(),document.documentElement.style.removeProperty("overflow"),document.documentElement.style.removeProperty("visibility"),document.body.style.removeProperty("overflow"),document.body.style.removeProperty("visibility")}function Qt(t,e,r){t.querySelectorAll("[data-dropdown]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const o=a.getAttribute("data-dropdown"),m=t.querySelector(`[data-menu="${o}"]`);t.querySelectorAll(".calmweb-reader-dropdown-menu").forEach(f=>{f!==m&&f.classList.remove("open")}),m?.classList.toggle("open")})}),t.querySelectorAll("[data-layout]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const o=a.getAttribute("data-layout");if(o){te=ct(o);const m=t.getElementById("reader-content");ze&&(m.innerHTML="",te.render(ze,m)),t.querySelectorAll("[data-layout]").forEach(f=>f.classList.remove("active")),a.classList.add("active"),t.querySelector(".layout-name").textContent=te.name,t.querySelector('[data-menu="layout"]')?.classList.remove("open")}})}),t.querySelectorAll("[data-theme]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const o=a.getAttribute("data-theme");o&&(re=gt(o),ft(re,e),t.querySelectorAll("[data-theme]").forEach(m=>m.classList.remove("active")),a.classList.add("active"),t.querySelector(".theme-name").textContent=re.name,t.querySelector('[data-menu="theme"]')?.classList.remove("open"))})}),t.querySelector('[data-action="close"]')?.addEventListener("click",()=>{pe(),r.onClose?.()}),t.querySelector('[data-action="raw"]')?.addEventListener("click",()=>{pe(),r.onClose?.()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(pe(),r.onClose?.())}),document.addEventListener("click",()=>{t.querySelectorAll(".calmweb-reader-dropdown-menu").forEach(a=>{a.classList.remove("open")})})}function Xt(t){const e=document.createElement("span");return e.textContent=t,e.innerHTML}function Ze(){return!!document.getElementById(he)}var C;(function(t){t.assertEqual=s=>{};function e(s){}t.assertIs=e;function r(s){throw new Error}t.assertNever=r,t.arrayToEnum=s=>{const a={};for(const i of s)a[i]=i;return a},t.getValidEnumValues=s=>{const a=t.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),i={};for(const o of a)i[o]=s[o];return t.objectValues(i)},t.objectValues=s=>t.objectKeys(s).map(function(a){return s[a]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const a=[];for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&a.push(i);return a},t.find=(s,a)=>{for(const i of s)if(a(i))return i},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function n(s,a=" | "){return s.map(i=>typeof i=="string"?`'${i}'`:i).join(a)}t.joinValues=n,t.jsonStringifyReplacer=(s,a)=>typeof a=="bigint"?a.toString():a})(C||(C={}));var ht;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(ht||(ht={}));const p=C.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Y=t=>{switch(typeof t){case"undefined":return p.undefined;case"string":return p.string;case"number":return Number.isNaN(t)?p.nan:p.number;case"boolean":return p.boolean;case"function":return p.function;case"bigint":return p.bigint;case"symbol":return p.symbol;case"object":return Array.isArray(t)?p.array:t===null?p.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?p.promise:typeof Map<"u"&&t instanceof Map?p.map:typeof Set<"u"&&t instanceof Set?p.set:typeof Date<"u"&&t instanceof Date?p.date:p.object;default:return p.unknown}},d=C.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class W extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}format(e){const r=e||function(a){return a.message},n={_errors:[]},s=a=>{for(const i of a.issues)if(i.code==="invalid_union")i.unionErrors.map(s);else if(i.code==="invalid_return_type")s(i.returnTypeError);else if(i.code==="invalid_arguments")s(i.argumentsError);else if(i.path.length===0)n._errors.push(r(i));else{let o=n,m=0;for(;m<i.path.length;){const f=i.path[m];m===i.path.length-1?(o[f]=o[f]||{_errors:[]},o[f]._errors.push(r(i))):o[f]=o[f]||{_errors:[]},o=o[f],m++}}};return s(this),n}static assert(e){if(!(e instanceof W))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,C.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){const r={},n=[];for(const s of this.issues)if(s.path.length>0){const a=s.path[0];r[a]=r[a]||[],r[a].push(e(s))}else n.push(e(s));return{formErrors:n,fieldErrors:r}}get formErrors(){return this.flatten()}}W.create=t=>new W(t);const Fe=(t,e)=>{let r;switch(t.code){case d.invalid_type:t.received===p.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case d.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,C.jsonStringifyReplacer)}`;break;case d.unrecognized_keys:r=`Unrecognized key(s) in object: ${C.joinValues(t.keys,", ")}`;break;case d.invalid_union:r="Invalid input";break;case d.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${C.joinValues(t.options)}`;break;case d.invalid_enum_value:r=`Invalid enum value. Expected ${C.joinValues(t.options)}, received '${t.received}'`;break;case d.invalid_arguments:r="Invalid function arguments";break;case d.invalid_return_type:r="Invalid function return type";break;case d.invalid_date:r="Invalid date";break;case d.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:C.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case d.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="bigint"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case d.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case d.custom:r="Invalid input";break;case d.invalid_intersection_types:r="Intersection results could not be merged";break;case d.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case d.not_finite:r="Number must be finite";break;default:r=e.defaultError,C.assertNever(t)}return{message:r}};let er=Fe;function tr(){return er}const rr=t=>{const{data:e,path:r,errorMaps:n,issueData:s}=t,a=[...r,...s.path||[]],i={...s,path:a};if(s.message!==void 0)return{...s,path:a,message:s.message};let o="";const m=n.filter(f=>!!f).slice().reverse();for(const f of m)o=f(i,{data:e,defaultError:o}).message;return{...s,path:a,message:o}};function u(t,e){const r=tr(),n=rr({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r,r===Fe?void 0:Fe].filter(s=>!!s)});t.common.issues.push(n)}class L{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){const n=[];for(const s of r){if(s.status==="aborted")return A;s.status==="dirty"&&e.dirty(),n.push(s.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,r){const n=[];for(const s of r){const a=await s.key,i=await s.value;n.push({key:a,value:i})}return L.mergeObjectSync(e,n)}static mergeObjectSync(e,r){const n={};for(const s of r){const{key:a,value:i}=s;if(a.status==="aborted"||i.status==="aborted")return A;a.status==="dirty"&&e.dirty(),i.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof i.value<"u"||s.alwaysSet)&&(n[a.value]=i.value)}return{status:e.value,value:n}}}const A=Object.freeze({status:"aborted"}),xe=t=>({status:"dirty",value:t}),P=t=>({status:"valid",value:t}),pt=t=>t.status==="aborted",xt=t=>t.status==="dirty",me=t=>t.status==="valid",ke=t=>typeof Promise<"u"&&t instanceof Promise;var x;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(x||(x={}));class J{constructor(e,r,n,s){this._cachedPath=[],this.parent=e,this.data=r,this._path=n,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const yt=(t,e)=>{if(me(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new W(t.common.issues);return this._error=r,this._error}}};function _(t){if(!t)return{};const{errorMap:e,invalid_type_error:r,required_error:n,description:s}=t;if(e&&(r||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(i,o)=>{const{message:m}=t;return i.code==="invalid_enum_value"?{message:m??o.defaultError}:typeof o.data>"u"?{message:m??n??o.defaultError}:i.code!=="invalid_type"?{message:o.defaultError}:{message:m??r??o.defaultError}},description:s}}class T{get description(){return this._def.description}_getType(e){return Y(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:Y(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new L,ctx:{common:e.parent.common,data:e.data,parsedType:Y(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const r=this._parse(e);if(ke(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){const r=this._parse(e);return Promise.resolve(r)}parse(e,r){const n=this.safeParse(e,r);if(n.success)return n.data;throw n.error}safeParse(e,r){const n={common:{issues:[],async:r?.async??!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Y(e)},s=this._parseSync({data:e,path:n.path,parent:n});return yt(n,s)}"~validate"(e){const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Y(e)};if(!this["~standard"].async)try{const n=this._parseSync({data:e,path:[],parent:r});return me(n)?{value:n.value}:{issues:r.common.issues}}catch(n){n?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:r}).then(n=>me(n)?{value:n.value}:{issues:r.common.issues})}async parseAsync(e,r){const n=await this.safeParseAsync(e,r);if(n.success)return n.data;throw n.error}async safeParseAsync(e,r){const n={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Y(e)},s=this._parse({data:e,path:n.path,parent:n}),a=await(ke(s)?s:Promise.resolve(s));return yt(n,a)}refine(e,r){const n=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,a)=>{const i=e(s),o=()=>a.addIssue({code:d.custom,...n(s)});return typeof Promise<"u"&&i instanceof Promise?i.then(m=>m?!0:(o(),!1)):i?!0:(o(),!1)})}refinement(e,r){return this._refinement((n,s)=>e(n)?!0:(s.addIssue(typeof r=="function"?r(n,s):r),!1))}_refinement(e){return new ae({schema:this,typeName:b.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return H.create(this,this._def)}nullable(){return ie.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return F.create(this)}promise(){return $e.create(this,this._def)}or(e){return Ce.create([this,e],this._def)}and(e){return Se.create(this,e,this._def)}transform(e){return new ae({..._(this._def),schema:this,typeName:b.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const r=typeof e=="function"?e:()=>e;return new Re({..._(this._def),innerType:this,defaultValue:r,typeName:b.ZodDefault})}brand(){return new Et({typeName:b.ZodBranded,type:this,..._(this._def)})}catch(e){const r=typeof e=="function"?e:()=>e;return new Ne({..._(this._def),innerType:this,catchValue:r,typeName:b.ZodCatch})}describe(e){const r=this.constructor;return new r({...this._def,description:e})}pipe(e){return Ke.create(this,e)}readonly(){return Oe.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const nr=/^c[^\s-]{8,}$/i,sr=/^[0-9a-z]+$/,ar=/^[0-9A-HJKMNP-TV-Z]{26}$/i,ir=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,or=/^[a-z0-9_-]{21}$/i,lr=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,cr=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,dr=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,mr="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Be;const ur=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,gr=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,fr=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,hr=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,pr=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,xr=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,At="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",yr=new RegExp(`^${At}$`);function bt(t){let e="[0-5]\\d";t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`);const r=t.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${r}`}function Ar(t){return new RegExp(`^${bt(t)}$`)}function br(t){let e=`${At}T${bt(t)}`;const r=[];return r.push(t.local?"Z?":"Z"),t.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function vr(t,e){return!!((e==="v4"||!e)&&ur.test(t)||(e==="v6"||!e)&&fr.test(t))}function _r(t,e){if(!lr.test(t))return!1;try{const[r]=t.split(".");if(!r)return!1;const n=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),s=JSON.parse(atob(n));return!(typeof s!="object"||s===null||"typ"in s&&s?.typ!=="JWT"||!s.alg||e&&s.alg!==e)}catch{return!1}}function wr(t,e){return!!((e==="v4"||!e)&&gr.test(t)||(e==="v6"||!e)&&hr.test(t))}class Q extends T{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==p.string){const a=this._getOrReturnCtx(e);return u(a,{code:d.invalid_type,expected:p.string,received:a.parsedType}),A}const n=new L;let s;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),n.dirty());else if(a.kind==="max")e.data.length>a.value&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),n.dirty());else if(a.kind==="length"){const i=e.data.length>a.value,o=e.data.length<a.value;(i||o)&&(s=this._getOrReturnCtx(e,s),i?u(s,{code:d.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):o&&u(s,{code:d.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),n.dirty())}else if(a.kind==="email")dr.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"email",code:d.invalid_string,message:a.message}),n.dirty());else if(a.kind==="emoji")Be||(Be=new RegExp(mr,"u")),Be.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"emoji",code:d.invalid_string,message:a.message}),n.dirty());else if(a.kind==="uuid")ir.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"uuid",code:d.invalid_string,message:a.message}),n.dirty());else if(a.kind==="nanoid")or.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"nanoid",code:d.invalid_string,message:a.message}),n.dirty());else if(a.kind==="cuid")nr.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"cuid",code:d.invalid_string,message:a.message}),n.dirty());else if(a.kind==="cuid2")sr.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"cuid2",code:d.invalid_string,message:a.message}),n.dirty());else if(a.kind==="ulid")ar.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"ulid",code:d.invalid_string,message:a.message}),n.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),u(s,{validation:"url",code:d.invalid_string,message:a.message}),n.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"regex",code:d.invalid_string,message:a.message}),n.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(s=this._getOrReturnCtx(e,s),u(s,{code:d.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),n.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(s=this._getOrReturnCtx(e,s),u(s,{code:d.invalid_string,validation:{startsWith:a.value},message:a.message}),n.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(s=this._getOrReturnCtx(e,s),u(s,{code:d.invalid_string,validation:{endsWith:a.value},message:a.message}),n.dirty()):a.kind==="datetime"?br(a).test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{code:d.invalid_string,validation:"datetime",message:a.message}),n.dirty()):a.kind==="date"?yr.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{code:d.invalid_string,validation:"date",message:a.message}),n.dirty()):a.kind==="time"?Ar(a).test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{code:d.invalid_string,validation:"time",message:a.message}),n.dirty()):a.kind==="duration"?cr.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"duration",code:d.invalid_string,message:a.message}),n.dirty()):a.kind==="ip"?vr(e.data,a.version)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"ip",code:d.invalid_string,message:a.message}),n.dirty()):a.kind==="jwt"?_r(e.data,a.alg)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"jwt",code:d.invalid_string,message:a.message}),n.dirty()):a.kind==="cidr"?wr(e.data,a.version)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"cidr",code:d.invalid_string,message:a.message}),n.dirty()):a.kind==="base64"?pr.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"base64",code:d.invalid_string,message:a.message}),n.dirty()):a.kind==="base64url"?xr.test(e.data)||(s=this._getOrReturnCtx(e,s),u(s,{validation:"base64url",code:d.invalid_string,message:a.message}),n.dirty()):C.assertNever(a);return{status:n.value,value:e.data}}_regex(e,r,n){return this.refinement(s=>e.test(s),{validation:r,code:d.invalid_string,...x.errToObj(n)})}_addCheck(e){return new Q({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...x.errToObj(e)})}url(e){return this._addCheck({kind:"url",...x.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...x.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...x.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...x.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...x.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...x.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...x.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...x.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...x.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...x.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...x.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...x.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...x.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...x.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...x.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...x.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...x.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...x.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...x.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...x.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...x.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...x.errToObj(r)})}nonempty(e){return this.min(1,x.errToObj(e))}trim(){return new Q({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Q({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Q({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}Q.create=t=>new Q({checks:[],typeName:b.ZodString,coerce:t?.coerce??!1,..._(t)});function kr(t,e){const r=(t.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,s=r>n?r:n,a=Number.parseInt(t.toFixed(s).replace(".","")),i=Number.parseInt(e.toFixed(s).replace(".",""));return a%i/10**s}class ue extends T{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==p.number){const a=this._getOrReturnCtx(e);return u(a,{code:d.invalid_type,expected:p.number,received:a.parsedType}),A}let n;const s=new L;for(const a of this._def.checks)a.kind==="int"?C.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{code:d.invalid_type,expected:"integer",received:"float",message:a.message}),s.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="multipleOf"?kr(e.data,a.value)!==0&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),u(n,{code:d.not_finite,message:a.message}),s.dirty()):C.assertNever(a);return{status:s.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,x.toString(r))}gt(e,r){return this.setLimit("min",e,!1,x.toString(r))}lte(e,r){return this.setLimit("max",e,!0,x.toString(r))}lt(e,r){return this.setLimit("max",e,!1,x.toString(r))}setLimit(e,r,n,s){return new ue({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:n,message:x.toString(s)}]})}_addCheck(e){return new ue({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:x.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:x.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:x.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:x.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:x.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:x.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:x.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:x.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:x.toString(e)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&C.isInteger(e.value))}get isFinite(){let e=null,r=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(r===null||n.value>r)&&(r=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(r)&&Number.isFinite(e)}}ue.create=t=>new ue({checks:[],typeName:b.ZodNumber,coerce:t?.coerce||!1,..._(t)});class ye extends T{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==p.bigint)return this._getInvalidInput(e);let n;const s=new L;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),u(n,{code:d.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):C.assertNever(a);return{status:s.value,value:e.data}}_getInvalidInput(e){const r=this._getOrReturnCtx(e);return u(r,{code:d.invalid_type,expected:p.bigint,received:r.parsedType}),A}gte(e,r){return this.setLimit("min",e,!0,x.toString(r))}gt(e,r){return this.setLimit("min",e,!1,x.toString(r))}lte(e,r){return this.setLimit("max",e,!0,x.toString(r))}lt(e,r){return this.setLimit("max",e,!1,x.toString(r))}setLimit(e,r,n,s){return new ye({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:n,message:x.toString(s)}]})}_addCheck(e){return new ye({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:x.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:x.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:x.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:x.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:x.toString(r)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}ye.create=t=>new ye({checks:[],typeName:b.ZodBigInt,coerce:t?.coerce??!1,..._(t)});class De extends T{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==p.boolean){const n=this._getOrReturnCtx(e);return u(n,{code:d.invalid_type,expected:p.boolean,received:n.parsedType}),A}return P(e.data)}}De.create=t=>new De({typeName:b.ZodBoolean,coerce:t?.coerce||!1,..._(t)});class Te extends T{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==p.date){const a=this._getOrReturnCtx(e);return u(a,{code:d.invalid_type,expected:p.date,received:a.parsedType}),A}if(Number.isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return u(a,{code:d.invalid_date}),A}const n=new L;let s;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),n.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(s=this._getOrReturnCtx(e,s),u(s,{code:d.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),n.dirty()):C.assertNever(a);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Te({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:x.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:x.toString(r)})}get minDate(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}}Te.create=t=>new Te({checks:[],coerce:t?.coerce||!1,typeName:b.ZodDate,..._(t)});class vt extends T{_parse(e){if(this._getType(e)!==p.symbol){const n=this._getOrReturnCtx(e);return u(n,{code:d.invalid_type,expected:p.symbol,received:n.parsedType}),A}return P(e.data)}}vt.create=t=>new vt({typeName:b.ZodSymbol,..._(t)});class qe extends T{_parse(e){if(this._getType(e)!==p.undefined){const n=this._getOrReturnCtx(e);return u(n,{code:d.invalid_type,expected:p.undefined,received:n.parsedType}),A}return P(e.data)}}qe.create=t=>new qe({typeName:b.ZodUndefined,..._(t)});class We extends T{_parse(e){if(this._getType(e)!==p.null){const n=this._getOrReturnCtx(e);return u(n,{code:d.invalid_type,expected:p.null,received:n.parsedType}),A}return P(e.data)}}We.create=t=>new We({typeName:b.ZodNull,..._(t)});class _t extends T{constructor(){super(...arguments),this._any=!0}_parse(e){return P(e.data)}}_t.create=t=>new _t({typeName:b.ZodAny,..._(t)});class wt extends T{constructor(){super(...arguments),this._unknown=!0}_parse(e){return P(e.data)}}wt.create=t=>new wt({typeName:b.ZodUnknown,..._(t)});class X extends T{_parse(e){const r=this._getOrReturnCtx(e);return u(r,{code:d.invalid_type,expected:p.never,received:r.parsedType}),A}}X.create=t=>new X({typeName:b.ZodNever,..._(t)});class kt extends T{_parse(e){if(this._getType(e)!==p.undefined){const n=this._getOrReturnCtx(e);return u(n,{code:d.invalid_type,expected:p.void,received:n.parsedType}),A}return P(e.data)}}kt.create=t=>new kt({typeName:b.ZodVoid,..._(t)});class F extends T{_parse(e){const{ctx:r,status:n}=this._processInputParams(e),s=this._def;if(r.parsedType!==p.array)return u(r,{code:d.invalid_type,expected:p.array,received:r.parsedType}),A;if(s.exactLength!==null){const i=r.data.length>s.exactLength.value,o=r.data.length<s.exactLength.value;(i||o)&&(u(r,{code:i?d.too_big:d.too_small,minimum:o?s.exactLength.value:void 0,maximum:i?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(u(r,{code:d.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(u(r,{code:d.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),r.common.async)return Promise.all([...r.data].map((i,o)=>s.type._parseAsync(new J(r,i,r.path,o)))).then(i=>L.mergeArray(n,i));const a=[...r.data].map((i,o)=>s.type._parseSync(new J(r,i,r.path,o)));return L.mergeArray(n,a)}get element(){return this._def.type}min(e,r){return new F({...this._def,minLength:{value:e,message:x.toString(r)}})}max(e,r){return new F({...this._def,maxLength:{value:e,message:x.toString(r)}})}length(e,r){return new F({...this._def,exactLength:{value:e,message:x.toString(r)}})}nonempty(e){return this.min(1,e)}}F.create=(t,e)=>new F({type:t,minLength:null,maxLength:null,exactLength:null,typeName:b.ZodArray,..._(e)});function ge(t){if(t instanceof N){const e={};for(const r in t.shape){const n=t.shape[r];e[r]=H.create(ge(n))}return new N({...t._def,shape:()=>e})}else return t instanceof F?new F({...t._def,type:ge(t.element)}):t instanceof H?H.create(ge(t.unwrap())):t instanceof ie?ie.create(ge(t.unwrap())):t instanceof ne?ne.create(t.items.map(e=>ge(e))):t}class N extends T{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),r=C.objectKeys(e);return this._cached={shape:e,keys:r},this._cached}_parse(e){if(this._getType(e)!==p.object){const f=this._getOrReturnCtx(e);return u(f,{code:d.invalid_type,expected:p.object,received:f.parsedType}),A}const{status:n,ctx:s}=this._processInputParams(e),{shape:a,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof X&&this._def.unknownKeys==="strip"))for(const f in s.data)i.includes(f)||o.push(f);const m=[];for(const f of i){const v=a[f],U=s.data[f];m.push({key:{status:"valid",value:f},value:v._parse(new J(s,U,s.path,f)),alwaysSet:f in s.data})}if(this._def.catchall instanceof X){const f=this._def.unknownKeys;if(f==="passthrough")for(const v of o)m.push({key:{status:"valid",value:v},value:{status:"valid",value:s.data[v]}});else if(f==="strict")o.length>0&&(u(s,{code:d.unrecognized_keys,keys:o}),n.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const v of o){const U=s.data[v];m.push({key:{status:"valid",value:v},value:f._parse(new J(s,U,s.path,v)),alwaysSet:v in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const f=[];for(const v of m){const U=await v.key,oe=await v.value;f.push({key:U,value:oe,alwaysSet:v.alwaysSet})}return f}).then(f=>L.mergeObjectSync(n,f)):L.mergeObjectSync(n,m)}get shape(){return this._def.shape()}strict(e){return x.errToObj,new N({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,n)=>{const s=this._def.errorMap?.(r,n).message??n.defaultError;return r.code==="unrecognized_keys"?{message:x.errToObj(e).message??s}:{message:s}}}:{}})}strip(){return new N({...this._def,unknownKeys:"strip"})}passthrough(){return new N({...this._def,unknownKeys:"passthrough"})}extend(e){return new N({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new N({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:b.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new N({...this._def,catchall:e})}pick(e){const r={};for(const n of C.objectKeys(e))e[n]&&this.shape[n]&&(r[n]=this.shape[n]);return new N({...this._def,shape:()=>r})}omit(e){const r={};for(const n of C.objectKeys(this.shape))e[n]||(r[n]=this.shape[n]);return new N({...this._def,shape:()=>r})}deepPartial(){return ge(this)}partial(e){const r={};for(const n of C.objectKeys(this.shape)){const s=this.shape[n];e&&!e[n]?r[n]=s:r[n]=s.optional()}return new N({...this._def,shape:()=>r})}required(e){const r={};for(const n of C.objectKeys(this.shape))if(e&&!e[n])r[n]=this.shape[n];else{let a=this.shape[n];for(;a instanceof H;)a=a._def.innerType;r[n]=a}return new N({...this._def,shape:()=>r})}keyof(){return Ct(C.objectKeys(this.shape))}}N.create=(t,e)=>new N({shape:()=>t,unknownKeys:"strip",catchall:X.create(),typeName:b.ZodObject,..._(e)}),N.strictCreate=(t,e)=>new N({shape:()=>t,unknownKeys:"strict",catchall:X.create(),typeName:b.ZodObject,..._(e)}),N.lazycreate=(t,e)=>new N({shape:t,unknownKeys:"strip",catchall:X.create(),typeName:b.ZodObject,..._(e)});class Ce extends T{_parse(e){const{ctx:r}=this._processInputParams(e),n=this._def.options;function s(a){for(const o of a)if(o.result.status==="valid")return o.result;for(const o of a)if(o.result.status==="dirty")return r.common.issues.push(...o.ctx.common.issues),o.result;const i=a.map(o=>new W(o.ctx.common.issues));return u(r,{code:d.invalid_union,unionErrors:i}),A}if(r.common.async)return Promise.all(n.map(async a=>{const i={...r,common:{...r.common,issues:[]},parent:null};return{result:await a._parseAsync({data:r.data,path:r.path,parent:i}),ctx:i}})).then(s);{let a;const i=[];for(const m of n){const f={...r,common:{...r.common,issues:[]},parent:null},v=m._parseSync({data:r.data,path:r.path,parent:f});if(v.status==="valid")return v;v.status==="dirty"&&!a&&(a={result:v,ctx:f}),f.common.issues.length&&i.push(f.common.issues)}if(a)return r.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(m=>new W(m));return u(r,{code:d.invalid_union,unionErrors:o}),A}}get options(){return this._def.options}}Ce.create=(t,e)=>new Ce({options:t,typeName:b.ZodUnion,..._(e)});const V=t=>t instanceof Ue?V(t.schema):t instanceof ae?V(t.innerType()):t instanceof Ee?[t.value]:t instanceof se?t.options:t instanceof Ge?C.objectValues(t.enum):t instanceof Re?V(t._def.innerType):t instanceof qe?[void 0]:t instanceof We?[null]:t instanceof H?[void 0,...V(t.unwrap())]:t instanceof ie?[null,...V(t.unwrap())]:t instanceof Et||t instanceof Oe?V(t.unwrap()):t instanceof Ne?V(t._def.innerType):[];class Ve extends T{_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==p.object)return u(r,{code:d.invalid_type,expected:p.object,received:r.parsedType}),A;const n=this.discriminator,s=r.data[n],a=this.optionsMap.get(s);return a?r.common.async?a._parseAsync({data:r.data,path:r.path,parent:r}):a._parseSync({data:r.data,path:r.path,parent:r}):(u(r,{code:d.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),A)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,n){const s=new Map;for(const a of r){const i=V(a.shape[e]);if(!i.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of i){if(s.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);s.set(o,a)}}return new Ve({typeName:b.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:s,..._(n)})}}function He(t,e){const r=Y(t),n=Y(e);if(t===e)return{valid:!0,data:t};if(r===p.object&&n===p.object){const s=C.objectKeys(e),a=C.objectKeys(t).filter(o=>s.indexOf(o)!==-1),i={...t,...e};for(const o of a){const m=He(t[o],e[o]);if(!m.valid)return{valid:!1};i[o]=m.data}return{valid:!0,data:i}}else if(r===p.array&&n===p.array){if(t.length!==e.length)return{valid:!1};const s=[];for(let a=0;a<t.length;a++){const i=t[a],o=e[a],m=He(i,o);if(!m.valid)return{valid:!1};s.push(m.data)}return{valid:!0,data:s}}else return r===p.date&&n===p.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Se extends T{_parse(e){const{status:r,ctx:n}=this._processInputParams(e),s=(a,i)=>{if(pt(a)||pt(i))return A;const o=He(a.value,i.value);return o.valid?((xt(a)||xt(i))&&r.dirty(),{status:r.value,value:o.data}):(u(n,{code:d.invalid_intersection_types}),A)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([a,i])=>s(a,i)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}Se.create=(t,e,r)=>new Se({left:t,right:e,typeName:b.ZodIntersection,..._(r)});class ne extends T{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==p.array)return u(n,{code:d.invalid_type,expected:p.array,received:n.parsedType}),A;if(n.data.length<this._def.items.length)return u(n,{code:d.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),A;!this._def.rest&&n.data.length>this._def.items.length&&(u(n,{code:d.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const a=[...n.data].map((i,o)=>{const m=this._def.items[o]||this._def.rest;return m?m._parse(new J(n,i,n.path,o)):null}).filter(i=>!!i);return n.common.async?Promise.all(a).then(i=>L.mergeArray(r,i)):L.mergeArray(r,a)}get items(){return this._def.items}rest(e){return new ne({...this._def,rest:e})}}ne.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ne({items:t,typeName:b.ZodTuple,rest:null,..._(e)})};class Tt extends T{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==p.map)return u(n,{code:d.invalid_type,expected:p.map,received:n.parsedType}),A;const s=this._def.keyType,a=this._def.valueType,i=[...n.data.entries()].map(([o,m],f)=>({key:s._parse(new J(n,o,n.path,[f,"key"])),value:a._parse(new J(n,m,n.path,[f,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const m of i){const f=await m.key,v=await m.value;if(f.status==="aborted"||v.status==="aborted")return A;(f.status==="dirty"||v.status==="dirty")&&r.dirty(),o.set(f.value,v.value)}return{status:r.value,value:o}})}else{const o=new Map;for(const m of i){const f=m.key,v=m.value;if(f.status==="aborted"||v.status==="aborted")return A;(f.status==="dirty"||v.status==="dirty")&&r.dirty(),o.set(f.value,v.value)}return{status:r.value,value:o}}}}Tt.create=(t,e,r)=>new Tt({valueType:e,keyType:t,typeName:b.ZodMap,..._(r)});class Ae extends T{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==p.set)return u(n,{code:d.invalid_type,expected:p.set,received:n.parsedType}),A;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(u(n,{code:d.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(u(n,{code:d.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());const a=this._def.valueType;function i(m){const f=new Set;for(const v of m){if(v.status==="aborted")return A;v.status==="dirty"&&r.dirty(),f.add(v.value)}return{status:r.value,value:f}}const o=[...n.data.values()].map((m,f)=>a._parse(new J(n,m,n.path,f)));return n.common.async?Promise.all(o).then(m=>i(m)):i(o)}min(e,r){return new Ae({...this._def,minSize:{value:e,message:x.toString(r)}})}max(e,r){return new Ae({...this._def,maxSize:{value:e,message:x.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}}Ae.create=(t,e)=>new Ae({valueType:t,minSize:null,maxSize:null,typeName:b.ZodSet,..._(e)});class Ue extends T{get schema(){return this._def.getter()}_parse(e){const{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}Ue.create=(t,e)=>new Ue({getter:t,typeName:b.ZodLazy,..._(e)});class Ee extends T{_parse(e){if(e.data!==this._def.value){const r=this._getOrReturnCtx(e);return u(r,{received:r.data,code:d.invalid_literal,expected:this._def.value}),A}return{status:"valid",value:e.data}}get value(){return this._def.value}}Ee.create=(t,e)=>new Ee({value:t,typeName:b.ZodLiteral,..._(e)});function Ct(t,e){return new se({values:t,typeName:b.ZodEnum,..._(e)})}class se extends T{_parse(e){if(typeof e.data!="string"){const r=this._getOrReturnCtx(e),n=this._def.values;return u(r,{expected:C.joinValues(n),received:r.parsedType,code:d.invalid_type}),A}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const r=this._getOrReturnCtx(e),n=this._def.values;return u(r,{received:r.data,code:d.invalid_enum_value,options:n}),A}return P(e.data)}get options(){return this._def.values}get enum(){const e={};for(const r of this._def.values)e[r]=r;return e}get Values(){const e={};for(const r of this._def.values)e[r]=r;return e}get Enum(){const e={};for(const r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return se.create(e,{...this._def,...r})}exclude(e,r=this._def){return se.create(this.options.filter(n=>!e.includes(n)),{...this._def,...r})}}se.create=Ct;class Ge extends T{_parse(e){const r=C.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==p.string&&n.parsedType!==p.number){const s=C.objectValues(r);return u(n,{expected:C.joinValues(s),received:n.parsedType,code:d.invalid_type}),A}if(this._cache||(this._cache=new Set(C.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const s=C.objectValues(r);return u(n,{received:n.data,code:d.invalid_enum_value,options:s}),A}return P(e.data)}get enum(){return this._def.values}}Ge.create=(t,e)=>new Ge({values:t,typeName:b.ZodNativeEnum,..._(e)});class $e extends T{unwrap(){return this._def.type}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==p.promise&&r.common.async===!1)return u(r,{code:d.invalid_type,expected:p.promise,received:r.parsedType}),A;const n=r.parsedType===p.promise?r.data:Promise.resolve(r.data);return P(n.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}}$e.create=(t,e)=>new $e({type:t,typeName:b.ZodPromise,..._(e)});class ae extends T{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===b.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:r,ctx:n}=this._processInputParams(e),s=this._def.effect||null,a={addIssue:i=>{u(n,i),i.fatal?r.abort():r.dirty()},get path(){return n.path}};if(a.addIssue=a.addIssue.bind(a),s.type==="preprocess"){const i=s.transform(n.data,a);if(n.common.async)return Promise.resolve(i).then(async o=>{if(r.value==="aborted")return A;const m=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return m.status==="aborted"?A:m.status==="dirty"||r.value==="dirty"?xe(m.value):m});{if(r.value==="aborted")return A;const o=this._def.schema._parseSync({data:i,path:n.path,parent:n});return o.status==="aborted"?A:o.status==="dirty"||r.value==="dirty"?xe(o.value):o}}if(s.type==="refinement"){const i=o=>{const m=s.refinement(o,a);if(n.common.async)return Promise.resolve(m);if(m instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?A:(o.status==="dirty"&&r.dirty(),i(o.value),{status:r.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?A:(o.status==="dirty"&&r.dirty(),i(o.value).then(()=>({status:r.value,value:o.value}))))}if(s.type==="transform")if(n.common.async===!1){const i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!me(i))return A;const o=s.transform(i.value,a);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(i=>me(i)?Promise.resolve(s.transform(i.value,a)).then(o=>({status:r.value,value:o})):A);C.assertNever(s)}}ae.create=(t,e,r)=>new ae({schema:t,typeName:b.ZodEffects,effect:e,..._(r)}),ae.createWithPreprocess=(t,e,r)=>new ae({schema:e,effect:{type:"preprocess",transform:t},typeName:b.ZodEffects,..._(r)});class H extends T{_parse(e){return this._getType(e)===p.undefined?P(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}H.create=(t,e)=>new H({innerType:t,typeName:b.ZodOptional,..._(e)});class ie extends T{_parse(e){return this._getType(e)===p.null?P(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ie.create=(t,e)=>new ie({innerType:t,typeName:b.ZodNullable,..._(e)});class Re extends T{_parse(e){const{ctx:r}=this._processInputParams(e);let n=r.data;return r.parsedType===p.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}Re.create=(t,e)=>new Re({innerType:t,typeName:b.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,..._(e)});class Ne extends T{_parse(e){const{ctx:r}=this._processInputParams(e),n={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return ke(s)?s.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new W(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new W(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Ne.create=(t,e)=>new Ne({innerType:t,typeName:b.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,..._(e)});class St extends T{_parse(e){if(this._getType(e)!==p.nan){const n=this._getOrReturnCtx(e);return u(n,{code:d.invalid_type,expected:p.nan,received:n.parsedType}),A}return{status:"valid",value:e.data}}}St.create=t=>new St({typeName:b.ZodNaN,..._(t)});class Et extends T{_parse(e){const{ctx:r}=this._processInputParams(e),n=r.data;return this._def.type._parse({data:n,path:r.path,parent:r})}unwrap(){return this._def.type}}class Ke extends T{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return a.status==="aborted"?A:a.status==="dirty"?(r.dirty(),xe(a.value)):this._def.out._parseAsync({data:a.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?A:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(e,r){return new Ke({in:e,out:r,typeName:b.ZodPipeline})}}class Oe extends T{_parse(e){const r=this._def.innerType._parse(e),n=s=>(me(s)&&(s.value=Object.freeze(s.value)),s);return ke(r)?r.then(s=>n(s)):n(r)}unwrap(){return this._def.innerType}}Oe.create=(t,e)=>new Oe({innerType:t,typeName:b.ZodReadonly,..._(e)});var b;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(b||(b={}));const O=Q.create,$t=ue.create,fe=De.create;X.create;const be=F.create,j=N.create;Ce.create;const Tr=Ve.create;Se.create,ne.create;const ee=Ee.create,Cr=se.create;$e.create,H.create,ie.create;const z={CLASSIFY_UNIT:"calmweb:classifyUnit",GET_SETTINGS:"calmweb:getSettings",UPDATE_SETTINGS:"calmweb:updateSettings",CLEAR_CACHE:"calmweb:clearCache",GET_STATS:"calmweb:getStats",INCREMENT_STAT:"calmweb:incrementStat",TOGGLE_READER:"calmweb:toggleReader",OPEN_READER:"calmweb:openReader",CLOSE_READER:"calmweb:closeReader",TEST_CONNECTION:"calmweb:testConnection"},Sr=j({type:ee(z.CLASSIFY_UNIT),unit:j({id:O(),site:O(),fingerprint:O(),sourceName:O().optional(),title:O(),metadata:be(O()),isNew:fe(),url:O().url().optional()})}),Er=j({type:ee(z.GET_SETTINGS)}),$r=j({type:ee(z.UPDATE_SETTINGS),settings:j({enabled:fe().optional(),processingMode:Cr(["local_rules","byok_llm","hosted_llm"]).optional(),strictness:$t().min(0).max(100).optional(),rules:j({blocklistChannels:be(O()).optional(),blocklistKeywords:be(O()).optional(),allowlistChannels:be(O()).optional(),allowlistKeywords:be(O()).optional(),presets:j({politics:fe().optional(),ragebait:fe().optional(),spoilers:fe().optional(),clickbait:fe().optional()}).optional()}).optional(),byokKey:O().optional()})}),Rr=j({type:ee(z.CLEAR_CACHE)}),Nr=j({type:ee(z.GET_STATS)}),Or=j({type:ee(z.INCREMENT_STAT),key:ee("totalFiltered"),amount:$t().optional()}),Lr=j({type:ee(z.TEST_CONNECTION),apiKey:O(),model:O().optional(),endpoint:O().optional()});Tr("type",[Sr,Er,$r,Rr,Nr,Or,Lr]);function Rt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Le={exports:{}},Mr=Le.exports,Nt;function Ir(){return Nt||(Nt=1,(function(t,e){(function(r,n){n(t)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:Mr,function(r){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)r.exports=globalThis.browser;else{const n="The message port closed before a response was received.",s=a=>{const i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(c,h=void 0){super(h),this.createItem=c}get(c){return this.has(c)||this.set(c,this.createItem(c)),super.get(c)}}const m=l=>l&&typeof l=="object"&&typeof l.then=="function",f=(l,c)=>(...h)=>{a.runtime.lastError?l.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||h.length<=1&&c.singleCallbackArg!==!1?l.resolve(h[0]):l.resolve(h)},v=l=>l==1?"argument":"arguments",U=(l,c)=>function(y,...k){if(k.length<c.minArgs)throw new Error(`Expected at least ${c.minArgs} ${v(c.minArgs)} for ${l}(), got ${k.length}`);if(k.length>c.maxArgs)throw new Error(`Expected at most ${c.maxArgs} ${v(c.maxArgs)} for ${l}(), got ${k.length}`);return new Promise((S,E)=>{if(c.fallbackToNoCallback)try{y[l](...k,f({resolve:S,reject:E},c))}catch(g){console.warn(`${l} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,g),y[l](...k),c.fallbackToNoCallback=!1,c.noCallback=!0,S()}else c.noCallback?(y[l](...k),S()):y[l](...k,f({resolve:S,reject:E},c))})},oe=(l,c,h)=>new Proxy(c,{apply(y,k,S){return h.call(k,l,...S)}});let G=Function.call.bind(Object.prototype.hasOwnProperty);const K=(l,c={},h={})=>{let y=Object.create(null),k={has(E,g){return g in l||g in y},get(E,g,$){if(g in y)return y[g];if(!(g in l))return;let w=l[g];if(typeof w=="function")if(typeof c[g]=="function")w=oe(l,l[g],c[g]);else if(G(h,g)){let M=U(g,h[g]);w=oe(l,l[g],M)}else w=w.bind(l);else if(typeof w=="object"&&w!==null&&(G(c,g)||G(h,g)))w=K(w,c[g],h[g]);else if(G(h,"*"))w=K(w,c[g],h["*"]);else return Object.defineProperty(y,g,{configurable:!0,enumerable:!0,get(){return l[g]},set(M){l[g]=M}}),w;return y[g]=w,w},set(E,g,$,w){return g in y?y[g]=$:l[g]=$,!0},defineProperty(E,g,$){return Reflect.defineProperty(y,g,$)},deleteProperty(E,g){return Reflect.deleteProperty(y,g)}},S=Object.create(l);return new Proxy(S,k)},le=l=>({addListener(c,h,...y){c.addListener(l.get(h),...y)},hasListener(c,h){return c.hasListener(l.get(h))},removeListener(c,h){c.removeListener(l.get(h))}}),Xe=new o(l=>typeof l!="function"?l:function(h){const y=K(h,{},{getContent:{minArgs:0,maxArgs:0}});l(y)}),ve=new o(l=>typeof l!="function"?l:function(h,y,k){let S=!1,E,g=new Promise(Z=>{E=function(R){S=!0,Z(R)}}),$;try{$=l(h,y,E)}catch(Z){$=Promise.reject(Z)}const w=$!==!0&&m($);if($!==!0&&!w&&!S)return!1;const M=Z=>{Z.then(R=>{k(R)},R=>{let de;R&&(R instanceof Error||typeof R.message=="string")?de=R.message:de="An unexpected error occurred",k({__mozWebExtensionPolyfillReject__:!0,message:de})}).catch(R=>{console.error("Failed to send onMessage rejected reply",R)})};return M(w?$:g),!0}),et=({reject:l,resolve:c},h)=>{a.runtime.lastError?a.runtime.lastError.message===n?c():l(new Error(a.runtime.lastError.message)):h&&h.__mozWebExtensionPolyfillReject__?l(new Error(h.message)):c(h)},_e=(l,c,h,...y)=>{if(y.length<c.minArgs)throw new Error(`Expected at least ${c.minArgs} ${v(c.minArgs)} for ${l}(), got ${y.length}`);if(y.length>c.maxArgs)throw new Error(`Expected at most ${c.maxArgs} ${v(c.maxArgs)} for ${l}(), got ${y.length}`);return new Promise((k,S)=>{const E=et.bind(null,{resolve:k,reject:S});y.push(E),h.sendMessage(...y)})},tt={devtools:{network:{onRequestFinished:le(Xe)}},runtime:{onMessage:le(ve),onMessageExternal:le(ve),sendMessage:_e.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:_e.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},ce={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":ce},services:{"*":ce},websites:{"*":ce}},K(a,tt,i)};r.exports=s(chrome)}})})(Le)),Le.exports}var Pr=Ir();const jr=Rt(Pr);globalThis.browser?.runtime?.id?globalThis.browser:globalThis.chrome;async function zr(t){return jr.runtime.sendMessage(t)}var Me={exports:{}},Zr=Me.exports,Ot;function Fr(){return Ot||(Ot=1,(function(t,e){(function(r,n){n(t)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:Zr,function(r){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)r.exports=globalThis.browser;else{const n="The message port closed before a response was received.",s=a=>{const i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(c,h=void 0){super(h),this.createItem=c}get(c){return this.has(c)||this.set(c,this.createItem(c)),super.get(c)}}const m=l=>l&&typeof l=="object"&&typeof l.then=="function",f=(l,c)=>(...h)=>{a.runtime.lastError?l.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||h.length<=1&&c.singleCallbackArg!==!1?l.resolve(h[0]):l.resolve(h)},v=l=>l==1?"argument":"arguments",U=(l,c)=>function(y,...k){if(k.length<c.minArgs)throw new Error(`Expected at least ${c.minArgs} ${v(c.minArgs)} for ${l}(), got ${k.length}`);if(k.length>c.maxArgs)throw new Error(`Expected at most ${c.maxArgs} ${v(c.maxArgs)} for ${l}(), got ${k.length}`);return new Promise((S,E)=>{if(c.fallbackToNoCallback)try{y[l](...k,f({resolve:S,reject:E},c))}catch(g){console.warn(`${l} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,g),y[l](...k),c.fallbackToNoCallback=!1,c.noCallback=!0,S()}else c.noCallback?(y[l](...k),S()):y[l](...k,f({resolve:S,reject:E},c))})},oe=(l,c,h)=>new Proxy(c,{apply(y,k,S){return h.call(k,l,...S)}});let G=Function.call.bind(Object.prototype.hasOwnProperty);const K=(l,c={},h={})=>{let y=Object.create(null),k={has(E,g){return g in l||g in y},get(E,g,$){if(g in y)return y[g];if(!(g in l))return;let w=l[g];if(typeof w=="function")if(typeof c[g]=="function")w=oe(l,l[g],c[g]);else if(G(h,g)){let M=U(g,h[g]);w=oe(l,l[g],M)}else w=w.bind(l);else if(typeof w=="object"&&w!==null&&(G(c,g)||G(h,g)))w=K(w,c[g],h[g]);else if(G(h,"*"))w=K(w,c[g],h["*"]);else return Object.defineProperty(y,g,{configurable:!0,enumerable:!0,get(){return l[g]},set(M){l[g]=M}}),w;return y[g]=w,w},set(E,g,$,w){return g in y?y[g]=$:l[g]=$,!0},defineProperty(E,g,$){return Reflect.defineProperty(y,g,$)},deleteProperty(E,g){return Reflect.deleteProperty(y,g)}},S=Object.create(l);return new Proxy(S,k)},le=l=>({addListener(c,h,...y){c.addListener(l.get(h),...y)},hasListener(c,h){return c.hasListener(l.get(h))},removeListener(c,h){c.removeListener(l.get(h))}}),Xe=new o(l=>typeof l!="function"?l:function(h){const y=K(h,{},{getContent:{minArgs:0,maxArgs:0}});l(y)}),ve=new o(l=>typeof l!="function"?l:function(h,y,k){let S=!1,E,g=new Promise(Z=>{E=function(R){S=!0,Z(R)}}),$;try{$=l(h,y,E)}catch(Z){$=Promise.reject(Z)}const w=$!==!0&&m($);if($!==!0&&!w&&!S)return!1;const M=Z=>{Z.then(R=>{k(R)},R=>{let de;R&&(R instanceof Error||typeof R.message=="string")?de=R.message:de="An unexpected error occurred",k({__mozWebExtensionPolyfillReject__:!0,message:de})}).catch(R=>{console.error("Failed to send onMessage rejected reply",R)})};return M(w?$:g),!0}),et=({reject:l,resolve:c},h)=>{a.runtime.lastError?a.runtime.lastError.message===n?c():l(new Error(a.runtime.lastError.message)):h&&h.__mozWebExtensionPolyfillReject__?l(new Error(h.message)):c(h)},_e=(l,c,h,...y)=>{if(y.length<c.minArgs)throw new Error(`Expected at least ${c.minArgs} ${v(c.minArgs)} for ${l}(), got ${y.length}`);if(y.length>c.maxArgs)throw new Error(`Expected at most ${c.maxArgs} ${v(c.maxArgs)} for ${l}(), got ${y.length}`);return new Promise((k,S)=>{const E=et.bind(null,{resolve:k,reject:S});y.push(E),h.sendMessage(...y)})},tt={devtools:{network:{onRequestFinished:le(Xe)}},runtime:{onMessage:le(ve),onMessageExternal:le(ve),sendMessage:_e.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:_e.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},ce={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":ce},services:{"*":ce},websites:{"*":ce}},K(a,tt,i)};r.exports=s(chrome)}})})(Me)),Me.exports}var Br=Fr();const Dr=Rt(Br),Ie="calmweb-loading",Ye="calmweb-raw-toggle",qr=`
  #${Ie} {
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .calmweb-loading-spinner {
    width: 32px; height: 32px;
    border: 3px solid rgba(255,255,255,0.06);
    border-top-color: #8b5cf6;
    border-radius: 50%;
    animation: calmweb-spin 0.8s linear infinite;
  }
  .calmweb-loading-text {
    color: #52525b;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
  .calmweb-loading-logo {
    color: #8b5cf6;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  @keyframes calmweb-spin {
    to { transform: rotate(360deg); }
  }
`;function Lt(){if(document.getElementById(Ie))return;document.documentElement.style.setProperty("overflow","hidden","important"),document.documentElement.style.setProperty("visibility","hidden","important"),document.body.style.setProperty("overflow","hidden","important"),document.body.style.setProperty("visibility","hidden","important");const t=document.createElement("div");t.id=Ie,t.style.setProperty("visibility","visible","important"),t.innerHTML=`
    <style>${qr}</style>
    <div class="calmweb-loading-logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    </div>
    <div class="calmweb-loading-spinner"></div>
    <div class="calmweb-loading-text">Filtering...</div>
  `,document.body.appendChild(t)}function Mt(){document.getElementById(Ie)?.remove()}function It(){if(document.getElementById(Ye))return;const t=document.createElement("div");t.id=Ye,t.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  `,t.title="Filtered View (Ctrl+Shift+R)",Object.assign(t.style,{position:"fixed",bottom:"20px",right:"20px",width:"44px",height:"44px",borderRadius:"50%",background:"#8b5cf6",color:"white",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:"2147483646",boxShadow:"0 4px 24px rgba(139, 92, 246, 0.35), 0 0 0 1px rgba(139, 92, 246, 0.1)",transition:"all 0.2s ease",border:"none"}),t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.1)"}),t.addEventListener("mouseleave",()=>{t.style.transform="scale(1)"}),t.addEventListener("click",()=>{t.remove(),Lt(),setTimeout(()=>{Mt();try{we()}catch(e){console.error("[CalmWeb]",e)}},300)}),document.body.appendChild(t)}function Pt(){document.getElementById(Ye)?.remove()}function Je(){try{Ze()?(pe(),It()):(Pt(),we())}catch(t){console.error("[CalmWeb] Reader toggle failed:",t)}}const Wr={matches:["<all_urls>"],runAt:"document_end",async main(){console.log("[CalmWeb] Reader loaded on",window.location.hostname),document.addEventListener("keydown",r=>{r.ctrlKey&&r.shiftKey&&!r.altKey&&!r.metaKey&&r.key.toLowerCase()==="r"&&(r.preventDefault(),r.stopPropagation(),Je()),r.altKey&&!r.ctrlKey&&!r.metaKey&&!r.shiftKey&&r.key.toLowerCase()==="r"&&(r.preventDefault(),r.stopPropagation(),Je())},!0),Dr.runtime.onMessage.addListener(r=>{if(r.type===z.TOGGLE_READER&&Je(),r.type===z.OPEN_READER){Pt();try{Ze()||we()}catch(n){console.error("[CalmWeb]",n)}}if(r.type===z.CLOSE_READER)try{Ze()&&(pe(),It())}catch(n){console.error("[CalmWeb]",n)}});let t=!0,e={};try{const r=await zr({type:z.GET_SETTINGS});(r?.reader?.autoOpen===!1||r?.enabled===!1)&&(t=!1),e=r?.reader||{}}catch{}t&&(Lt(),setTimeout(()=>{Mt();try{we({textOnly:e.textOnly!==!1,layoutId:e.defaultLayout})}catch(r){console.error("[CalmWeb] Failed to open reader:",r),document.documentElement.style.removeProperty("overflow"),document.documentElement.style.removeProperty("visibility"),document.body.style.removeProperty("overflow"),document.body.style.removeProperty("visibility")}},600))}};function Qr(){}function Pe(t,...e){}const Qe={debug:(...t)=>Pe(console.debug,...t),log:(...t)=>Pe(console.log,...t),warn:(...t)=>Pe(console.warn,...t),error:(...t)=>Pe(console.error,...t)};return(()=>{try{}catch(e){throw Qe.error('Failed to initialize plugins for "reader"',e),e}let t;try{t=Wr.main(),t instanceof Promise&&(t=t.catch(e=>{throw Qe.error('The unlisted script "reader" crashed on startup!',e),e}))}catch(e){throw Qe.error('The unlisted script "reader" crashed on startup!',e),e}return t})()})();
reader;