var reader=(function(){"use strict";function J(e){return e}const T=["nav","aside","footer","header:not(article header)",".ad",".advertisement",".ads",".ad-container",".sidebar",".related",".recommended",".suggestions",".social-share",".share-buttons",".social-links",".comments","#comments",".comment-section","script","style","noscript","iframe",'[class*="newsletter"]','[class*="subscribe"]','[class*="popup"]','[class*="modal"]',".author-bio",".author-info",".about-author",".tags",".tag-list",".categories",".breadcrumb",".breadcrumbs",".pagination",".pager",".cookie-notice",".gdpr"],A=["article",'[role="article"]',"main article",".post-content",".article-content",".entry-content",".post-body",".article-body",".content-body","main",'[role="main"]',"#content",".content"],M=["article h1",'h1[itemprop="headline"]','[property="og:title"]','meta[name="twitter:title"]',"h1",".post-title",".article-title",".entry-title"],C=['[rel="author"]','[itemprop="author"]',".author-name",".byline",".author",'meta[name="author"]'],z=["time",'[itemprop="datePublished"]',"[datetime]",".post-date",".article-date",".publish-date",'meta[name="date"]','[property="article:published_time"]'];function H(e,t){const r=q(e),o=R(e),n=B(e),i=I(e),a=F(i),c=P(a),d=D(e),G=O(a.textContent||"");return{title:r,author:o,date:n,content:a.textContent||"",contentHtml:a,images:c,source:new URL(t).hostname,favicon:d,readingTime:G,url:t}}function q(e){for(const t of M){const r=e.querySelector(t);if(r){const o=r.getAttribute("content")||r.textContent?.trim();if(o&&o.length>5&&o.length<300)return o}}return e.title||"Untitled"}function R(e){for(const t of C){const r=e.querySelector(t);if(r){const o=r.getAttribute("content")||r.textContent?.trim();if(o&&o.length<100)return o}}}function B(e){for(const t of z){const r=e.querySelector(t);if(r){const n=r.getAttribute("datetime")||r.getAttribute("content")||r.textContent?.trim();if(n)try{const i=new Date(n);if(!isNaN(i.getTime()))return i.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch{continue}}}}function I(e){for(const n of A){const i=e.querySelector(n);if(i&&i.textContent&&i.textContent.trim().length>200)return i}const t=e.querySelectorAll("div, section, main");let r=null,o=0;return t.forEach(n=>{const i=n,a=i.textContent?.length||0,c=i.querySelectorAll("p").length,d=a+c*100;d>o&&(o=d,r=i)}),r||e.body}function F(e){const t=e.cloneNode(!0);return T.forEach(r=>{t.querySelectorAll(r).forEach(o=>o.remove())}),t.querySelectorAll("a").forEach(r=>{const o=r.getAttribute("href");o&&!o.startsWith("http")&&!o.startsWith("/")&&r.removeAttribute("href")}),t.querySelectorAll("*").forEach(r=>{const o=r;o.removeAttribute("style"),o.removeAttribute("class"),o.removeAttribute("id"),o.removeAttribute("onclick"),o.removeAttribute("onmouseover"),o.removeAttribute("onmouseout")}),t}function P(e){const t=[];return e.querySelectorAll("img").forEach(r=>{const o=r.getAttribute("src")||r.getAttribute("data-src");if(o&&!o.includes("avatar")&&!o.includes("icon")&&!o.includes("logo")){const n=r.getAttribute("alt")||"",a=r.closest("figure")?.querySelector("figcaption")?.textContent?.trim();t.push({src:o,alt:n,caption:a})}}),t.slice(0,20)}function D(e){const r=e.querySelector('link[rel="icon"], link[rel="shortcut icon"]')?.getAttribute("href");if(r)return r.startsWith("//")?"https:"+r:r.startsWith("/")?(e.location?.origin||"https://example.com")+r:r}function O(e){const r=e.split(/\s+/).length;return Math.max(1,Math.ceil(r/200))}const m=e=>`
  .reader-container {
    max-width: ${e.maxWidth};
    margin: 0 auto;
    padding: 40px 20px;
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
    line-height: ${e.lineHeight};
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
    column-count: ${e.columns};
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
`,p=e=>`
  <header class="reader-header">
    <h1 class="reader-title">${g(e.title)}</h1>
    <div class="reader-meta">
      ${e.author?`<span class="reader-meta-item">By ${g(e.author)}</span>`:""}
      ${e.date?`<span class="reader-meta-item">${e.date}</span>`:""}
      <span class="reader-meta-item">${e.readingTime} min read</span>
    </div>
  </header>
`,u=e=>`
  <footer class="reader-footer">
    <div class="reader-source">
      ${e.favicon?`<img class="reader-favicon" src="${g(e.favicon)}" alt="">`:""}
      <span>${g(e.source)}</span>
    </div>
  </footer>
`;function g(e){const t=document.createElement("span");return t.textContent=e,t.innerHTML}const w={id:"newspaper",name:"Newspaper",description:"Classic multi-column layout with serif font",columns:2,maxWidth:"900px",fontFamily:'Georgia, "Times New Roman", serif',fontSize:"18px",lineHeight:"1.7",render(e,t){t.innerHTML=`
      <style>${m(this)}</style>
      <div class="reader-container">
        ${p(e)}
        <article class="reader-content">
          ${e.contentHtml.innerHTML}
        </article>
        ${u(e)}
      </div>
    `}},v=[w,{id:"terminal",name:"Terminal",description:"Hacker-style monospace dark theme",columns:1,maxWidth:"800px",fontFamily:'"JetBrains Mono", "Fira Code", "SF Mono", monospace',fontSize:"14px",lineHeight:"1.6",render(e,t){t.innerHTML=`
      <style>
        ${m(this)}
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
        ${p(e)}
        <article class="reader-content">
          ${e.contentHtml.innerHTML}
        </article>
        ${u(e)}
      </div>
    `}},{id:"card",name:"Card",description:"Pinterest-style card layout with images",columns:1,maxWidth:"680px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"17px",lineHeight:"1.8",render(e,t){const r=e.images[0];t.innerHTML=`
      <style>
        ${m(this)}
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
        ${r?`<img class="reader-hero" src="${r.src}" alt="${r.alt}">`:""}
        <div class="reader-inner">
          ${p(e)}
          <article class="reader-content">
            ${e.contentHtml.innerHTML}
          </article>
          ${u(e)}
        </div>
      </div>
    `}},{id:"feed",name:"Feed",description:"Twitter-like stream layout",columns:1,maxWidth:"600px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"16px",lineHeight:"1.6",render(e,t){t.innerHTML=`
      <style>
        ${m(this)}
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
        ${p(e)}
        <article class="reader-content">
          ${e.contentHtml.innerHTML}
        </article>
        ${u(e)}
      </div>
    `}},{id:"magazine",name:"Magazine",description:"Image-rich editorial style",columns:1,maxWidth:"820px",fontFamily:'Georgia, "Times New Roman", serif',fontSize:"19px",lineHeight:"1.75",render(e,t){t.innerHTML=`
      <style>
        ${m(this)}
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
        ${p(e)}
        <article class="reader-content">
          ${e.contentHtml.innerHTML}
        </article>
        ${u(e)}
      </div>
    `}}];function k(e){return v.find(t=>t.id===e)||w}const L={id:"default",name:"Light",background:"#ffffff",text:"#1f2937",accent:"#3b82f6",isDark:!1},S=[L,{id:"dark",name:"Dark",background:"#111827",text:"#e5e7eb",accent:"#60a5fa",isDark:!0},{id:"sepia",name:"Sepia",background:"#f4ecd8",text:"#433422",accent:"#8b5a2b",isDark:!1},{id:"midnight",name:"Midnight",background:"#0f172a",text:"#e2e8f0",accent:"#818cf8",isDark:!0}];function $(e){return S.find(t=>t.id===e)||L}function E(e,t){t.style.setProperty("--reader-bg",e.background),t.style.setProperty("--reader-text",e.text),t.style.setProperty("--reader-accent",e.accent),t.setAttribute("data-theme",e.id)}const f="calmweb-reader-overlay",W=`
  #${f} {
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
`;let l,s,h=null;function _(e={}){if(document.getElementById(f))return;l=k(e.layoutId||"newspaper"),s=$(e.themeId||"default");const r=H(document,window.location.href);h=r;const o=document.createElement("div");o.id=f;const n=o.attachShadow({mode:"open"});n.innerHTML=`
    <style>${W}</style>
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
            <span class="layout-name">${l.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="layout">
            ${v.map(a=>`
              <div class="calmweb-reader-dropdown-item ${a.id===l.id?"active":""}" data-layout="${a.id}">
                ${a.name}
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
            <span class="theme-name">${s.name}</span>
          </button>
          <div class="calmweb-reader-dropdown-menu" data-menu="theme">
            ${S.map(a=>`
              <div class="calmweb-reader-dropdown-item ${a.id===s.id?"active":""}" data-theme="${a.id}">
                ${a.name}
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
  `,document.body.appendChild(o);const i=n.getElementById("reader-content");E(s,o),l.render(r,i),j(n,o,e)}function x(){const e=document.getElementById(f);e&&e.remove()}function j(e,t,r){e.querySelectorAll("[data-dropdown]").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const a=n.getAttribute("data-dropdown"),c=e.querySelector(`[data-menu="${a}"]`);e.querySelectorAll(".calmweb-reader-dropdown-menu").forEach(d=>{d!==c&&d.classList.remove("open")}),c?.classList.toggle("open")})}),e.querySelectorAll("[data-layout]").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const a=n.getAttribute("data-layout");if(a){l=k(a);const c=e.getElementById("reader-content");h&&(c.innerHTML="",l.render(h,c)),e.querySelectorAll("[data-layout]").forEach(d=>d.classList.remove("active")),n.classList.add("active"),e.querySelector(".layout-name").textContent=l.name,e.querySelector('[data-menu="layout"]')?.classList.remove("open")}})}),e.querySelectorAll("[data-theme]").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const a=n.getAttribute("data-theme");a&&(s=$(a),E(s,t),e.querySelectorAll("[data-theme]").forEach(c=>c.classList.remove("active")),n.classList.add("active"),e.querySelector(".theme-name").textContent=s.name,e.querySelector('[data-menu="theme"]')?.classList.remove("open"))})}),e.querySelector('[data-action="close"]')?.addEventListener("click",()=>{x(),r.onClose?.()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(x(),r.onClose?.())}),document.addEventListener("click",()=>{e.querySelectorAll(".calmweb-reader-dropdown-menu").forEach(n=>{n.classList.remove("open")})})}function N(e){const t=document.createElement("span");return t.textContent=e,t.innerHTML}function U(){return!!document.getElementById(f)}function V(e){U()?x():_(e)}const Y={matches:["<all_urls>"],runAt:"document_idle",main(){console.log("[CalmWeb] Reader content script loaded"),document.addEventListener("keydown",e=>{e.altKey&&e.key.toLowerCase()==="r"&&(e.preventDefault(),V())})}};function oe(){}function b(e,...t){}const y={debug:(...e)=>b(console.debug,...e),log:(...e)=>b(console.log,...e),warn:(...e)=>b(console.warn,...e),error:(...e)=>b(console.error,...e)};return(()=>{try{}catch(t){throw y.error('Failed to initialize plugins for "reader"',t),t}let e;try{e=Y.main(),e instanceof Promise&&(e=e.catch(t=>{throw y.error('The unlisted script "reader" crashed on startup!',t),t}))}catch(t){throw y.error('The unlisted script "reader" crashed on startup!',t),t}return e})()})();
reader;