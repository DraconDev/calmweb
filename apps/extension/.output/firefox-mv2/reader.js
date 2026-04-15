var reader=(function(){"use strict";function pn(r){return r}const Pt=["nav","aside","footer",'header:not(article header):not([class*="site-header"]):not([class*="main-header"])',".ad",".advertisement",".ads",".ad-container",".ad-slot",".ad-wrapper",".advert",'[id*="ad-"]','[class*="ad-"]','[id*="advert"]','[class*="advert"]',".sidebar",".related",".recommended",".suggestions",".more-stories",".social-share",".share-buttons",".social-links",".social-bar",".share-bar",".comments","#comments",".comment-section",".responses",".disqus","script","style","noscript",'iframe:not([src*="youtube"]):not([src*="vimeo"])','[class*="newsletter"]','[class*="subscribe"]','[class*="signup"]','[class*="popup"]','[class*="modal"]','[class*="lightbox"]',".author-bio",".author-info",".about-author",".post-author",".tags",".tag-list",".categories",".topic-tags",".breadcrumb",".breadcrumbs",".crumbs",".pagination",".pager",".page-nav",".cookie-notice",".gdpr",'[class*="consent"]','[class*="cookie-banner"]',".cookie-banner",'[class*="intercom"]','[class*="drift"]','[class*="zendesk"]','[class*="crisp"]','[class*="livechat"]','[class*="chat-widget"]',"#intercom-container",'[class*="paywall"]','[class*="premium"]','[class*="metered"]','[class*="locked"]','[class*="overlay"]','[class*="backdrop"]','[class*="mask"]','[class*="app-banner"]','[class*="install-prompt"]','[class*="download-app"]','[class*="survey"]','[class*="feedback"]','[class*="poll"]','[class*="rating"]','[class*="sponsored"]','[class*="promoted"]','[class*="native-ad"]','[class*="age-gate"]','[class*="age-verification"]','[class*="cookie-law"]','[class*="eu-cookie"]','[style*="position: sticky"]','[style*="position:fixed"]','[style*="display: none"]','[style*="display:none"]',"[hidden]",'[aria-hidden="true"]',".promo",".promo-banner",".promo-code",".newsletter-popup",".subscribe-popup","#wpadminbar",".amp-sidebar",".amp-menu"],$t=["article h1",'h1[itemprop="headline"]','[property="og:title"]','meta[name="twitter:title"]',"h1.title",'h1[itemprop="name"]',".product-title",".product-name",".listing-title",".thread-title","h1",".post-title",".article-title",".entry-title",'[class*="title"] h1','meta[property="og:title"]'],Lt=['[rel="author"]','[itemprop="author"]',".author-name",".byline",".author",'meta[name="author"]'],jt=["time",'[itemprop="datePublished"]',"[datetime]",".post-date",".article-date",".publish-date",'meta[name="date"]','[property="article:published_time"]'],Zt=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","fbclid","gclid","gclsrc","mc_cid","mc_eid","ref","referer","referrer","affiliate","aff_id","campaign_id","ad_id","adgroup_id","ttclid","twclid","s_kwcid","scid","_ga","_gl","vero_id","mailchimp_campaign_id","fb_action_ids","fb_action_types","fb_source","fb_campaign_ids","oly_enc_id","oly_anon_id","perfmon_ref_id","spm","spm_id","rdt_cid","rdt_tid","trk_contact","trk_msg","trk_module","trk_sid","zanpid","igshid","tt_sigid","tt_mediaid"],zt=["bit.ly","tinyurl.com","t.co","goo.gl","ow.ly","is.gd","buff.ly","adf.ly","j.mp","tr.im","tiny.cc","lnkd.in","db.tt","qr.ae","adcrun.ch","psty.jp","shorl.com","hypERM.com","firefe.st","cort.as","clck.ru","clicky.me","budurl.com","snipurl.com","snurl.com","short.to","url.ie","shorenstein.org"];function qe(r,e){try{const t=new URL(r,e),n=t.hostname;if(zt.some(a=>n.includes(a)))return"";Zt.forEach(a=>t.searchParams.delete(a)),t.searchParams.delete("_ga"),t.searchParams.delete("_gl"),t.searchParams.delete("ref"),t.searchParams.delete("ref_src"),t.searchParams.delete("ref_url"),t.hash="";const s=t.toString();return s===t.origin+t.pathname+"/"?"":s}catch{return""}}function qt(r,e,t="textOnly"){const n=Wt(r),s=Vt(r),a=Dt(r),i=Ut(r),o=t!=="textOnly"?Qt(i):[],b=Gt(i,t,e),h=Xt(r),A=er(b.textContent||"");return{title:n,author:s,date:a,content:b.textContent||"",contentHtml:b,images:o,source:new URL(e).hostname,favicon:h,readingTime:A,url:e}}function Wt(r){for(const e of $t){const t=r.querySelector(e);if(t){const n=t.getAttribute("content")||t.textContent?.trim();if(n&&n.length>5&&n.length<300)return n}}return r.title||"Untitled"}function Vt(r){for(const e of Lt){const t=r.querySelector(e);if(t){let n=t.getAttribute("content")||t.textContent?.trim();if(n&&n.length<100)return n=n.replace(/^(by|written by|reported by)\s+/i,""),n}}}function Dt(r){for(const e of jt){const t=r.querySelector(e);if(t){const s=t.getAttribute("datetime")||t.getAttribute("content")||t.textContent?.trim();if(s)try{const a=new Date(s);if(!isNaN(a.getTime()))return a.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch{continue}}}}function Ut(r){const e=r.querySelectorAll('main, article, [role="main"], [role="article"], section, div, body');let t=null,n=0;for(const s of Array.from(e)){if(!Ft(s))continue;const a=Bt(s);a>n&&(n=a,t=s)}return t||r.body}function Ft(r){const e=window.getComputedStyle(r);return!(e.display==="none"||e.visibility==="hidden"||e.opacity==="0"||parseFloat(e.opacity)<.1||r.hasAttribute("hidden")||r.getAttribute("aria-hidden")==="true"||r.hasAttribute("data-visible")&&r.getAttribute("data-visible")==="false")}function Bt(r){const e=r,t=e.textContent?.trim()||"",n=e.innerHTML||"";if(t.length<50)return 0;const s=t.length,a=n.length,i=a>0?s/a:0;if(i<.05)return 0;const o=e.querySelectorAll("p").length,b=e.querySelectorAll("h1,h2,h3,h4,h5,h6").length,h=e.querySelectorAll("ul, ol, dl").length,A=e.querySelectorAll("table").length,j=e.querySelectorAll("a").length,U=e.querySelectorAll("img").length,W=e.querySelectorAll("p, div, section, article, blockquote, pre, ul, ol, table").length;let d=0;d+=s*i,d+=o*100,d+=b*80,d+=h*60,d+=A*100,d+=j*5,d+=U*10,d+=W*30;const g=r.tagName.toLowerCase();g==="article"&&(d+=500),g==="main"&&(d+=400),g==="section"&&(d+=200);const u=Kt(r);return d*=Math.max(.3,1-u*.05),d>5e4?5e4:d}function Kt(r){let e=0,t=r.parentElement;for(;t;)e++,t=t.parentElement;return e}function Gt(r,e="textOnly",t=""){const n=r.cloneNode(!0);return Pt.forEach(s=>{n.querySelectorAll(s).forEach(a=>a.remove())}),e==="textOnly"?Ht(n):e==="safe"?Yt(n,t):e==="full"&&Jt(n,t),n}function Ht(r){r.querySelectorAll("figure").forEach(e=>{const t=e.querySelector("figcaption");if(t&&t.textContent?.trim()){const n=document.createElement("p");n.textContent=t.textContent.trim(),e.replaceWith(n)}else e.remove()}),r.querySelectorAll("img").forEach(e=>{const t=parseInt(e.getAttribute("width")||"0"),n=parseInt(e.getAttribute("height")||"0"),s=e.getAttribute("src")||"";t>0&&t<=32||n>0&&n<=32||s.startsWith("data:image/svg")||e.remove()}),r.querySelectorAll("video, audio, source, track, picture, canvas, embed, object, iframe").forEach(e=>e.remove()),r.querySelectorAll("*").forEach(e=>{const t=e;t.removeAttribute("style"),t.removeAttribute("class"),t.removeAttribute("id"),t.removeAttribute("onclick"),t.removeAttribute("onmouseover"),t.removeAttribute("onmouseout")}),r.querySelectorAll("a").forEach(e=>{const t=e.getAttribute("href");t&&!t.startsWith("http")&&!t.startsWith("/")&&!t.startsWith("#")&&e.removeAttribute("href"),e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")})}function Yt(r,e){r.querySelectorAll("figure").forEach(t=>{const n=t.querySelector("figcaption");if(n&&n.textContent?.trim()){const s=document.createElement("p");s.textContent=`[Image: ${n.textContent.trim()}]`,t.replaceWith(s)}else t.remove()}),r.querySelectorAll("img").forEach(t=>{const n=t.getAttribute("alt")||"Image",s=document.createElement("span");s.className="cw-media-placeholder",s.textContent=`[${n}]`,s.setAttribute("data-cw-media","image"),t.replaceWith(s)}),r.querySelectorAll("video, audio, source, track, picture, canvas, embed, object, iframe").forEach(t=>{const n=document.createElement("span");n.className="cw-media-placeholder",n.textContent=`[Media - ${t.tagName.toLowerCase()}]`,n.setAttribute("data-cw-media",t.tagName.toLowerCase()),t.replaceWith(n)}),r.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href")||"";if(n.startsWith("http")||n.startsWith("/")||n.startsWith("#")){const s=qe(n,e);s?t.setAttribute("href",s):t.removeAttribute("href"),t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")}else t.removeAttribute("href")}),r.querySelectorAll('button, input[type="submit"], input[type="button"], input[type="reset"]').forEach(t=>{t.setAttribute("data-cw-disabled","true"),t.setAttribute("disabled","true")}),r.querySelectorAll('input:not([type="submit"]):not([type="button"]):not([type="reset"]), textarea, select').forEach(t=>{t.setAttribute("data-cw-disabled","true"),t.setAttribute("disabled","true")}),r.querySelectorAll("*").forEach(t=>{const n=t;n.removeAttribute("onclick"),n.removeAttribute("onmouseover"),n.removeAttribute("onmouseout"),n.removeAttribute("onchange"),n.removeAttribute("onsubmit");const s=n.getAttribute("style")||"";s&&!s.includes("display")&&!s.includes("visibility")&&n.removeAttribute("style")})}function Jt(r,e){r.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href")||"";if(n.startsWith("http")||n.startsWith("/")||n.startsWith("#")){const s=qe(n,e);s?t.setAttribute("href",s):t.removeAttribute("href"),t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")}else t.removeAttribute("href")}),r.querySelectorAll("img").forEach(t=>{const n=t.getAttribute("src")||"";if(n.startsWith("javascript:")||n.startsWith("data:text/html"))t.remove();else{const s=qe(n,e);s&&t.setAttribute("src",s)}}),r.querySelectorAll("video, audio").forEach(t=>{t.removeAttribute("autoplay"),t.removeAttribute("autoplay"),t.querySelectorAll("source").forEach(s=>{(s.getAttribute("src")||"").startsWith("javascript:")&&s.remove()})}),r.querySelectorAll("iframe").forEach(t=>{const n=t.getAttribute("src")||"";(n.startsWith("javascript:")||!n.startsWith("http")&&!n.startsWith("/"))&&t.remove()}),r.querySelectorAll("form").forEach(t=>{t.setAttribute("data-cw-form-disabled","true"),t.addEventListener("submit",n=>n.preventDefault(),{once:!0})}),r.querySelectorAll("*").forEach(t=>{const n=t;n.removeAttribute("onclick"),n.removeAttribute("onmouseover"),n.removeAttribute("onmouseout"),n.removeAttribute("onchange"),n.removeAttribute("onsubmit"),n.removeAttribute("onfocus"),n.removeAttribute("onblur"),n.removeAttribute("onload"),n.removeAttribute("onerror");const s=n.getAttribute("style")||"";s&&(s.includes("expression")||s.includes("behavior")||s.includes("javascript:"))&&n.removeAttribute("style"),n.removeAttribute("id")})}function Qt(r){const e=[];return r.querySelectorAll("img").forEach(t=>{const n=t.getAttribute("src")||t.getAttribute("data-src");if(n&&!n.includes("avatar")&&!n.includes("icon")&&!n.includes("logo")){const s=t.getAttribute("alt")||"",i=t.closest("figure")?.querySelector("figcaption")?.textContent?.trim();e.push({src:n,alt:s,caption:i})}}),e.slice(0,20)}function Xt(r){const t=r.querySelector('link[rel="icon"], link[rel="shortcut icon"]')?.getAttribute("href");if(t)return t.startsWith("//")?"https:"+t:t.startsWith("/")?(r.location?.origin||"https://example.com")+t:t}function er(r){const t=r.split(/\s+/).length;return Math.max(1,Math.ceil(t/200))}function de(r){const e=document.createElement("span");return e.textContent=r,e.innerHTML}const it={id:"default",name:"Default",description:"Preserves original content structure",render(r,e,t={},n={}){const s=n.header||e.closest(".cw-overlay")?.querySelector(".cw-article-header"),a=n.footer||e.closest(".cw-overlay")?.querySelector(".cw-footer");s&&(s.innerHTML=`
        <h1 class="cw-title-main">${de(r.title)}</h1>
        <div class="cw-meta">
          ${r.author?`<span class="cw-meta-item">${de(r.author)}</span>`:""}
          ${r.author&&r.date?'<span class="cw-meta-sep"></span>':""}
          ${r.date?`<span class="cw-meta-item">${de(r.date)}</span>`:""}
          ${r.source?`<span class="cw-meta-sep"></span><span class="cw-meta-item">${de(r.source)}</span>`:""}
        </div>
      `),a&&(a.innerHTML=`
        <a href="${de(r.url)}" class="cw-source" target="_blank" rel="noopener noreferrer">
          ${r.favicon?`<img class="cw-favicon" src="${de(r.favicon)}" alt="">`:""}
          <span>View Original</span>
        </a>
      `),e.innerHTML=`<article class="cw-content">${r.contentHtml.innerHTML}</article>`}};function tr(r){return it}function ot(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var we={exports:{}},rr=we.exports,ct;function nr(){return ct||(ct=1,(function(r,e){(function(t,n){n(r)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:rr,function(t){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)t.exports=globalThis.browser;else{const n="The message port closed before a response was received.",s=a=>{const i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(l,m=void 0){super(m),this.createItem=l}get(l){return this.has(l)||this.set(l,this.createItem(l)),super.get(l)}}const b=c=>c&&typeof c=="object"&&typeof c.then=="function",h=(c,l)=>(...m)=>{a.runtime.lastError?c.reject(new Error(a.runtime.lastError.message)):l.singleCallbackArg||m.length<=1&&l.singleCallbackArg!==!1?c.resolve(m[0]):c.resolve(m)},A=c=>c==1?"argument":"arguments",j=(c,l)=>function(w,...N){if(N.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${A(l.minArgs)} for ${c}(), got ${N.length}`);if(N.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${A(l.maxArgs)} for ${c}(), got ${N.length}`);return new Promise((L,T)=>{if(l.fallbackToNoCallback)try{w[c](...N,h({resolve:L,reject:T},l))}catch(p){console.warn(`${c} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,p),w[c](...N),l.fallbackToNoCallback=!1,l.noCallback=!0,L()}else l.noCallback?(w[c](...N),L()):w[c](...N,h({resolve:L,reject:T},l))})},U=(c,l,m)=>new Proxy(l,{apply(w,N,L){return m.call(N,c,...L)}});let W=Function.call.bind(Object.prototype.hasOwnProperty);const d=(c,l={},m={})=>{let w=Object.create(null),N={has(T,p){return p in c||p in w},get(T,p,O){if(p in w)return w[p];if(!(p in c))return;let E=c[p];if(typeof E=="function")if(typeof l[p]=="function")E=U(c,c[p],l[p]);else if(W(m,p)){let q=j(p,m[p]);E=U(c,c[p],q)}else E=E.bind(c);else if(typeof E=="object"&&E!==null&&(W(l,p)||W(m,p)))E=d(E,l[p],m[p]);else if(W(m,"*"))E=d(E,l[p],m["*"]);else return Object.defineProperty(w,p,{configurable:!0,enumerable:!0,get(){return c[p]},set(q){c[p]=q}}),E;return w[p]=E,E},set(T,p,O,E){return p in w?w[p]=O:c[p]=O,!0},defineProperty(T,p,O){return Reflect.defineProperty(w,p,O)},deleteProperty(T,p){return Reflect.deleteProperty(w,p)}},L=Object.create(c);return new Proxy(L,N)},g=c=>({addListener(l,m,...w){l.addListener(c.get(m),...w)},hasListener(l,m){return l.hasListener(c.get(m))},removeListener(l,m){l.removeListener(c.get(m))}}),u=new o(c=>typeof c!="function"?c:function(m){const w=d(m,{},{getContent:{minArgs:0,maxArgs:0}});c(w)}),y=new o(c=>typeof c!="function"?c:function(m,w,N){let L=!1,T,p=new Promise(V=>{T=function(Z){L=!0,V(Z)}}),O;try{O=c(m,w,T)}catch(V){O=Promise.reject(V)}const E=O!==!0&&b(O);if(O!==!0&&!E&&!L)return!1;const q=V=>{V.then(Z=>{N(Z)},Z=>{let Y;Z&&(Z instanceof Error||typeof Z.message=="string")?Y=Z.message:Y="An unexpected error occurred",N({__mozWebExtensionPolyfillReject__:!0,message:Y})}).catch(Z=>{console.error("Failed to send onMessage rejected reply",Z)})};return q(E?O:p),!0}),k=({reject:c,resolve:l},m)=>{a.runtime.lastError?a.runtime.lastError.message===n?l():c(new Error(a.runtime.lastError.message)):m&&m.__mozWebExtensionPolyfillReject__?c(new Error(m.message)):l(m)},R=(c,l,m,...w)=>{if(w.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${A(l.minArgs)} for ${c}(), got ${w.length}`);if(w.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${A(l.maxArgs)} for ${c}(), got ${w.length}`);return new Promise((N,L)=>{const T=k.bind(null,{resolve:N,reject:L});w.push(T),m.sendMessage(...w)})},z={devtools:{network:{onRequestFinished:g(u)}},runtime:{onMessage:g(y),onMessageExternal:g(y),sendMessage:R.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:R.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},v={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":v},services:{"*":v},websites:{"*":v}},d(a,z,i)};t.exports=s(chrome)}})})(we)),we.exports}var sr=nr();const lt=ot(sr),dt=new Set;function We(r,e){const t=`${r}:${e}`;dt.has(t)||(dt.add(t),console.warn(`[wxt-shared] ${r}() is deprecated. ${e} is a legacy migration route. Prefer the canonical platform endpoints under /api/v1/auth, /api/v1/billing, and /api/v1/chat/completions.`))}function ar(r){const{config:e,getAuth:t,setAuth:n,onAuthError:s}=r;async function a(){const v=await t();return{isAuthenticated:!!v.accessToken,user:v.user,token:v.accessToken,subscription:v.subscription}}async function i(){return(await a()).isAuthenticated}async function o(){const v=await t();if(!v.refreshToken)return!1;try{const c=await fetch(`${e.apiUrl}/api/v1/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!c.ok)throw new Error("Refresh failed");const l=await c.json();return await n({...v,accessToken:l.session_token||l.access_token,refreshToken:l.refresh_token||v.refreshToken}),!0}catch(c){return console.error("[API] Token refresh failed:",c),!1}}async function b(v,c={},l=!1){const{method:m="GET",body:w,headers:N,skipAuth:L}=c,T={"Content-Type":"application/json",...N};if(!L){const{token:q,isAuthenticated:V}=await a();if(!V)throw new Error("Authentication required. Please log in.");T.Authorization=`Bearer ${q}`}const p=m!=="GET"&&w?JSON.stringify(w):void 0;let O=v.startsWith("http")?v:`${e.apiUrl}${v}`;O=O.replace(/([^:])\/\/+/g,"$1/");const E=await fetch(O,{method:m,headers:T,body:p,credentials:"include"});if(E.status===401||E.status===403){const{token:q}=await a();if(q?.startsWith("dem-")||l)throw s?.(),new Error(`Authentication failed (${E.status}).`);if(await o())return b(v,c,!0);throw s?.(),new Error("Session expired. Please log in again.")}if(!E.ok){const q=await E.text();throw q.includes("<!DOCTYPE html>")||q.includes("<html")?(console.error(`[API] Received HTML error from ${O}. Status: ${E.status}`),new Error(`Cloud connection interrupted (Status ${E.status}). Please check your API URL.`)):new Error(q||`API error: ${E.status}`)}return E.json()}async function h(v,c={}){if(typeof window<"u"&&(window.location.protocol==="http:"||window.location.protocol==="https:"))try{const m=await lt.runtime.sendMessage({type:"apiProxyRequest",endpoint:v,...c});if(m&&typeof m=="object"&&"error"in m)throw new Error(m.error);return m}catch(m){throw console.error("[API] Proxy request failed:",m),m}return b(v,c)}async function A(v,c){return h(v,{method:"GET",headers:c})}async function j(v,c,l){return h(v,{method:"POST",body:c,headers:l})}async function U(v,c,l){return h(v,{method:"PUT",body:c,headers:l})}async function W(v,c){return h(v,{method:"DELETE",headers:c})}async function d(){return h("/api/v1/user",{method:"GET"})}async function g(v){return j("/api/v1/billing/checkout",{quota:v})}async function u(){return h("/api/v1/billing/quota",{method:"GET"})}async function y(v){return j("/api/v1/chat/completions",v)}async function k(v,c){return We("productChatCompletions",`/api/v1/products/${v}/chat/completions`),j(`/api/v1/products/${v}/chat/completions`,c)}async function R(v,c){return We("productSubscribe",`/api/v1/products/${v}/subscribe`),j(`/api/v1/products/${v}/subscribe`,{price_id:c})}async function z(v){return We("getProductUser",`/api/v1/products/${v}/user`),h(`/api/v1/products/${v}/user`,{method:"GET"})}return{request:h,performRequest:b,getAuthState:a,isAuthenticated:i,refreshTokens:o,get:A,post:j,put:U,del:W,getUser:d,addQuota:g,getQuota:u,chatCompletions:y,productChatCompletions:k,productSubscribe:R,getProductUser:z}}const ue={},ir={local:{dracon:"http://localhost:8080",api:"http://localhost:8080"},stage:{dracon:"https://stage.dracon.uk",api:"https://stage.dracon.uk"},prod:{dracon:"https://dracon.uk",api:"https://dracon.uk"}};function or(r){if(r==="local"||r==="stage"||r==="prod")return r}function cr(){if(typeof window<"u"){const r=window.location.protocol;if(r!=="http:"&&r!=="https:")return;const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1"||e.includes("local"))return"local";if(e.includes("stage.")||e.includes("staging."))return"stage";if(e==="dracon.uk"||e.endsWith(".dracon.uk"))return e.startsWith("stage.")?"stage":"prod"}}function lr(r){const e=or(ue?.VITE_APP_ENV),t=r.autoDetectEnv!==!1?cr():void 0,n=r.env??e??t??r.defaultEnv??"prod";ue?.VITE_APP_ENV&&!e&&console.warn(`[${r.appName}] Invalid VITE_APP_ENV="undefined", falling back to "${n}"`);const s=ir[n];(r.debug||ue?.WXT_DEBUG==="true")&&console.log(`[${r.appName}] Config:`,{env:n,draconUrl:s.dracon,apiUrl:s.api});const a=r.customDraconUrl||ue?.WXT_DRACON_URL||s.dracon,i=r.customApiUrl||ue?.WXT_API_URL||s.api;try{new URL(a),new URL(i)}catch{console.warn(`[${r.appName}] Invalid URL configuration:`,{draconUrl:a,apiUrl:i})}const o=r.debug||ue?.WXT_DEBUG==="true";return{draconUrl:a,apiUrl:i,env:n,appName:r.appName,debug:o,auth:{googleEndpoint:"/api/v1/auth/login/google",loginEndpoint:"/api/v1/auth/login",refreshEndpoint:"/api/v1/auth/refresh",userInfoEndpoint:"/api/v1/auth/token/user_info"}}}const _e=globalThis.browser?.runtime?.id?globalThis.browser:globalThis.chrome,dr=new Error("request for lock canceled");var ur=function(r,e,t,n){function s(a){return a instanceof t?a:new t(function(i){i(a)})}return new(t||(t=Promise))(function(a,i){function o(A){try{h(n.next(A))}catch(j){i(j)}}function b(A){try{h(n.throw(A))}catch(j){i(j)}}function h(A){A.done?a(A.value):s(A.value).then(o,b)}h((n=n.apply(r,e||[])).next())})};class mr{constructor(e,t=dr){this._value=e,this._cancelError=t,this._queue=[],this._weightedWaiters=[]}acquire(e=1,t=0){if(e<=0)throw new Error(`invalid weight ${e}: must be positive`);return new Promise((n,s)=>{const a={resolve:n,reject:s,weight:e,priority:t},i=ut(this._queue,o=>t<=o.priority);i===-1&&e<=this._value?this._dispatchItem(a):this._queue.splice(i+1,0,a)})}runExclusive(e){return ur(this,arguments,void 0,function*(t,n=1,s=0){const[a,i]=yield this.acquire(n,s);try{return yield t(a)}finally{i()}})}waitForUnlock(e=1,t=0){if(e<=0)throw new Error(`invalid weight ${e}: must be positive`);return this._couldLockImmediately(e,t)?Promise.resolve():new Promise(n=>{this._weightedWaiters[e-1]||(this._weightedWaiters[e-1]=[]),gr(this._weightedWaiters[e-1],{resolve:n,priority:t})})}isLocked(){return this._value<=0}getValue(){return this._value}setValue(e){this._value=e,this._dispatchQueue()}release(e=1){if(e<=0)throw new Error(`invalid weight ${e}: must be positive`);this._value+=e,this._dispatchQueue()}cancel(){this._queue.forEach(e=>e.reject(this._cancelError)),this._queue=[]}_dispatchQueue(){for(this._drainUnlockWaiters();this._queue.length>0&&this._queue[0].weight<=this._value;)this._dispatchItem(this._queue.shift()),this._drainUnlockWaiters()}_dispatchItem(e){const t=this._value;this._value-=e.weight,e.resolve([t,this._newReleaser(e.weight)])}_newReleaser(e){let t=!1;return()=>{t||(t=!0,this.release(e))}}_drainUnlockWaiters(){if(this._queue.length===0)for(let e=this._value;e>0;e--){const t=this._weightedWaiters[e-1];t&&(t.forEach(n=>n.resolve()),this._weightedWaiters[e-1]=[])}else{const e=this._queue[0].priority;for(let t=this._value;t>0;t--){const n=this._weightedWaiters[t-1];if(!n)continue;const s=n.findIndex(a=>a.priority<=e);(s===-1?n:n.splice(0,s)).forEach((a=>a.resolve()))}}}_couldLockImmediately(e,t){return(this._queue.length===0||this._queue[0].priority<t)&&e<=this._value}}function gr(r,e){const t=ut(r,n=>e.priority<=n.priority);r.splice(t+1,0,e)}function ut(r,e){for(let t=r.length-1;t>=0;t--)if(e(r[t]))return t;return-1}var fr=function(r,e,t,n){function s(a){return a instanceof t?a:new t(function(i){i(a)})}return new(t||(t=Promise))(function(a,i){function o(A){try{h(n.next(A))}catch(j){i(j)}}function b(A){try{h(n.throw(A))}catch(j){i(j)}}function h(A){A.done?a(A.value):s(A.value).then(o,b)}h((n=n.apply(r,e||[])).next())})};class hr{constructor(e){this._semaphore=new mr(1,e)}acquire(){return fr(this,arguments,void 0,function*(e=0){const[,t]=yield this._semaphore.acquire(1,e);return t})}runExclusive(e,t=0){return this._semaphore.runExclusive(()=>e(),1,t)}isLocked(){return this._semaphore.isLocked()}waitForUnlock(e=0){return this._semaphore.waitForUnlock(1,e)}release(){this._semaphore.isLocked()&&this._semaphore.release()}cancel(){return this._semaphore.cancel()}}var mt=Object.prototype.hasOwnProperty;function Ve(r,e){var t,n;if(r===e)return!0;if(r&&e&&(t=r.constructor)===e.constructor){if(t===Date)return r.getTime()===e.getTime();if(t===RegExp)return r.toString()===e.toString();if(t===Array){if((n=r.length)===e.length)for(;n--&&Ve(r[n],e[n]););return n===-1}if(!t||typeof r=="object"){n=0;for(t in r)if(mt.call(r,t)&&++n&&!mt.call(e,t)||!(t in e)||!Ve(r[t],e[t]))return!1;return Object.keys(e).length===n}}return r!==r&&e!==e}const pr=yr();function yr(){const r={local:ke("local"),session:ke("session"),sync:ke("sync"),managed:ke("managed")},e=d=>{const g=r[d];if(g==null){const u=Object.keys(r).join(", ");throw Error(`Invalid area "${d}". Options: ${u}`)}return g},t=d=>{const g=d.indexOf(":"),u=d.substring(0,g),y=d.substring(g+1);if(y==null)throw Error(`Storage key should be in the form of "area:key", but received "${d}"`);return{driverArea:u,driverKey:y,driver:e(u)}},n=d=>d+"$",s=(d,g)=>{const u={...d};return Object.entries(g).forEach(([y,k])=>{k==null?delete u[y]:u[y]=k}),u},a=(d,g)=>d??g??null,i=d=>typeof d=="object"&&!Array.isArray(d)?d:{},o=async(d,g,u)=>a(await d.getItem(g),u?.fallback??u?.defaultValue),b=async(d,g)=>{const u=n(g);return i(await d.getItem(u))},h=async(d,g,u)=>{await d.setItem(g,u??null)},A=async(d,g,u)=>{const y=n(g),k=i(await d.getItem(y));await d.setItem(y,s(k,u))},j=async(d,g,u)=>{if(await d.removeItem(g),u?.removeMeta){const y=n(g);await d.removeItem(y)}},U=async(d,g,u)=>{const y=n(g);if(u==null)await d.removeItem(y);else{const k=i(await d.getItem(y));[u].flat().forEach(R=>delete k[R]),await d.setItem(y,k)}},W=(d,g,u)=>d.watch(g,u);return{getItem:async(d,g)=>{const{driver:u,driverKey:y}=t(d);return await o(u,y,g)},getItems:async d=>{const g=new Map,u=new Map,y=[];d.forEach(R=>{let z,v;typeof R=="string"?z=R:"getValue"in R?(z=R.key,v={fallback:R.fallback}):(z=R.key,v=R.options),y.push(z);const{driverArea:c,driverKey:l}=t(z),m=g.get(c)??[];g.set(c,m.concat(l)),u.set(z,v)});const k=new Map;return await Promise.all(Array.from(g.entries()).map(async([R,z])=>{(await r[R].getItems(z)).forEach(v=>{const c=`${R}:${v.key}`,l=u.get(c),m=a(v.value,l?.fallback??l?.defaultValue);k.set(c,m)})})),y.map(R=>({key:R,value:k.get(R)}))},getMeta:async d=>{const{driver:g,driverKey:u}=t(d);return await b(g,u)},getMetas:async d=>{const g=d.map(k=>{const R=typeof k=="string"?k:k.key,{driverArea:z,driverKey:v}=t(R);return{key:R,driverArea:z,driverKey:v,driverMetaKey:n(v)}}),u=g.reduce((k,R)=>(k[R.driverArea]??=[],k[R.driverArea].push(R),k),{}),y={};return await Promise.all(Object.entries(u).map(async([k,R])=>{const z=await _e.storage[k].get(R.map(v=>v.driverMetaKey));R.forEach(v=>{y[v.key]=z[v.driverMetaKey]??{}})})),g.map(k=>({key:k.key,meta:y[k.key]}))},setItem:async(d,g)=>{const{driver:u,driverKey:y}=t(d);await h(u,y,g)},setItems:async d=>{const g={};d.forEach(u=>{const{driverArea:y,driverKey:k}=t("key"in u?u.key:u.item.key);g[y]??=[],g[y].push({key:k,value:u.value})}),await Promise.all(Object.entries(g).map(async([u,y])=>{await e(u).setItems(y)}))},setMeta:async(d,g)=>{const{driver:u,driverKey:y}=t(d);await A(u,y,g)},setMetas:async d=>{const g={};d.forEach(u=>{const{driverArea:y,driverKey:k}=t("key"in u?u.key:u.item.key);g[y]??=[],g[y].push({key:k,properties:u.meta})}),await Promise.all(Object.entries(g).map(async([u,y])=>{const k=e(u),R=y.map(({key:l})=>n(l)),z=await k.getItems(R),v=Object.fromEntries(z.map(({key:l,value:m})=>[l,i(m)])),c=y.map(({key:l,properties:m})=>{const w=n(l);return{key:w,value:s(v[w]??{},m)}});await k.setItems(c)}))},removeItem:async(d,g)=>{const{driver:u,driverKey:y}=t(d);await j(u,y,g)},removeItems:async d=>{const g={};d.forEach(u=>{let y,k;typeof u=="string"?y=u:"getValue"in u?y=u.key:"item"in u?(y=u.item.key,k=u.options):(y=u.key,k=u.options);const{driverArea:R,driverKey:z}=t(y);g[R]??=[],g[R].push(z),k?.removeMeta&&g[R].push(n(z))}),await Promise.all(Object.entries(g).map(async([u,y])=>{await e(u).removeItems(y)}))},clear:async d=>{await e(d).clear()},removeMeta:async(d,g)=>{const{driver:u,driverKey:y}=t(d);await U(u,y,g)},snapshot:async(d,g)=>{const u=await e(d).snapshot();return g?.excludeKeys?.forEach(y=>{delete u[y],delete u[n(y)]}),u},restoreSnapshot:async(d,g)=>{await e(d).restoreSnapshot(g)},watch:(d,g)=>{const{driver:u,driverKey:y}=t(d);return W(u,y,g)},unwatch(){Object.values(r).forEach(d=>{d.unwatch()})},defineItem:(d,g)=>{const{driver:u,driverKey:y}=t(d),{version:k=1,migrations:R={},onMigrationComplete:z,debug:v=!1}=g??{};if(k<1)throw Error("Storage item version cannot be less than 1. Initial versions should be set to 1, not 0.");let c=!1;const l=async()=>{const T=n(y),[{value:p},{value:O}]=await u.getItems([y,T]);if(c=p==null&&O?.v==null&&!!k,p==null)return;const E=O?.v??1;if(E>k)throw Error(`Version downgrade detected (v${E} -> v${k}) for "${d}"`);if(E===k)return;v&&console.debug(`[@wxt-dev/storage] Running storage migration for ${d}: v${E} -> v${k}`);const q=Array.from({length:k-E},(Z,Y)=>E+Y+1);let V=p;for(const Z of q)try{V=await R?.[Z]?.(V)??V,v&&console.debug(`[@wxt-dev/storage] Storage migration processed for version: v${Z}`)}catch(Y){throw new br(d,Z,{cause:Y})}await u.setItems([{key:y,value:V},{key:T,value:{...O,v:k}}]),v&&console.debug(`[@wxt-dev/storage] Storage migration completed for ${d} v${k}`,{migratedValue:V}),z?.(V,k)},m=g?.migrations==null?Promise.resolve():l().catch(T=>{console.error(`[@wxt-dev/storage] Migration failed for ${d}`,T)}),w=new hr,N=()=>g?.fallback??g?.defaultValue??null,L=()=>w.runExclusive(async()=>{const T=await u.getItem(y);if(T!=null||g?.init==null)return T;const p=await g.init();return await u.setItem(y,p),T==null&&k>1&&await A(u,y,{v:k}),p});return m.then(L),{key:d,get defaultValue(){return N()},get fallback(){return N()},getValue:async()=>(await m,g?.init?await L():await o(u,y,g)),getMeta:async()=>(await m,await b(u,y)),setValue:async T=>{await m,c?(c=!1,await Promise.all([h(u,y,T),A(u,y,{v:k})])):await h(u,y,T)},setMeta:async T=>(await m,await A(u,y,T)),removeValue:async T=>(await m,await j(u,y,T)),removeMeta:async T=>(await m,await U(u,y,T)),watch:T=>W(u,y,(p,O)=>T(p??N(),O??N())),migrate:l}}}}function ke(r){const e=()=>{if(_e.runtime==null)throw Error(`'wxt/storage' must be loaded in a web extension environment

 - If thrown during a build, see https://github.com/wxt-dev/wxt/issues/371
 - If thrown during tests, mock 'wxt/browser' correctly. See https://wxt.dev/guide/go-further/testing.html
`);if(_e.storage==null)throw Error("You must add the 'storage' permission to your manifest to use 'wxt/storage'");const n=_e.storage[r];if(n==null)throw Error(`"browser.storage.${r}" is undefined`);return n},t=new Set;return{getItem:async n=>(await e().get(n))[n],getItems:async n=>{const s=await e().get(n);return n.map(a=>({key:a,value:s[a]??null}))},setItem:async(n,s)=>{s==null?await e().remove(n):await e().set({[n]:s})},setItems:async n=>{const s=n.reduce((a,{key:i,value:o})=>(a[i]=o,a),{});await e().set(s)},removeItem:async n=>{await e().remove(n)},removeItems:async n=>{await e().remove(n)},clear:async()=>{await e().clear()},snapshot:async()=>await e().get(),restoreSnapshot:async n=>{await e().set(n)},watch(n,s){const a=i=>{const o=i[n];o==null||Ve(o.newValue,o.oldValue)||s(o.newValue??null,o.oldValue??null)};return e().onChanged.addListener(a),t.add(a),()=>{e().onChanged.removeListener(a),t.delete(a)}},unwatch(){t.forEach(n=>{e().onChanged.removeListener(n)}),t.clear()}}}var br=class extends Error{constructor(r,e,t){super(`v${e} migration failed for "${r}"`,t),this.key=r,this.version=e}};const Ar={accessToken:"",refreshToken:"",user:null,subscription:null};function xr(r="sync:auth"){return pr.defineItem(r,{fallback:Ar})}const vr=`You are a web page analyzer for CalmWeb, a browser extension that helps users read web pages more comfortably. Your task is to analyze the provided web page content and return a JSON response indicating what content should be kept, removed, or summarized.

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
- confidence should be lower for very messy/complex pages or pages with unusual structures`;let Ce=null,gt=null;function ft(){if(Ce)return Ce;try{gt=lr({appName:"CalmWeb"});const r=xr("sync:auth");return Ce=ar({config:gt,getAuth:()=>r.getValue(),setAuth:e=>r.setValue(e),onAuthError:()=>{console.log("[CalmWeb] Auth error - user needs to log in")}}),Ce}catch(r){return console.error("[CalmWeb] Failed to initialize API client:",r),null}}async function wr(r){const e=ft();if(!e)return De(r,"API client not available");try{const t=await ht();if(!t.isPaidUser||t.remaining<=0)return De(r,t.isPaidUser?"No analyses remaining. Upgrade for unlimited access.":"AI analysis requires a subscription.");const n=`Page URL: ${r.url}
Page Title: ${r.title}

Page Content:
${r.text}`,a=(await e.chatCompletions({messages:[{role:"system",content:vr},{role:"user",content:n}],stream:!1})).choices[0]?.message?.content||"";return _r(a,r.title)}catch(t){return console.error("[CalmWeb] API analysis failed:",t),De(r,t.message||"Analysis failed")}}function _r(r,e){const t=r.trim();let n=t;const s=t.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);s&&(n=s[1]);const a=n.match(/\{[\s\S]*\}/);if(a)try{const i=JSON.parse(a[0]);return{success:!0,title:i.title||e,summary:i.summary||"",filteredContent:i.filteredContent||"",confidence:i.confidence??.5,decisions:Array.isArray(i.decisions)?i.decisions:[],error:void 0}}catch{}return{success:!1,title:e,summary:"",filteredContent:t.slice(0,1e4),confidence:0,decisions:[],error:"Failed to parse AI response as JSON"}}function De(r,e){return{success:!1,title:r.title,summary:"",filteredContent:r.text.slice(0,1e4),confidence:0,decisions:[],error:e}}async function ht(){const r=ft();if(!r)return{total:0,used:0,remaining:0,isPaidUser:!1};try{const[e,t]=await Promise.all([r.getUser(),r.getQuota()]),n=e.subscription?.active||!1,s=n?t.remaining:0;return{total:t.total,used:t.used,remaining:s,isPaidUser:n}}catch(e){return console.error("[CalmWeb] Failed to get quota:",e),{total:0,used:0,remaining:0,isPaidUser:!1}}}const Ue="calmweb-reader-host";async function Ee(r={}){document.body.style.setProperty("overflow","hidden","important"),me();const e=r.mode||"full";let t=null,n=null;const s=await ht();if(console.log("[CalmWeb] Quota check:",s.isPaidUser?"Paid user":"Free user","- Remaining:",s.remaining),s.isPaidUser&&s.remaining>0){console.log("[CalmWeb] Using AI-powered analysis...");try{n=await wr({title:document.title,url:window.location.href,html:document.body?.innerHTML?.slice(0,15e3)||"",text:document.body?.textContent?.slice(0,8e3)||""}),n.success?console.log("[CalmWeb] API analysis succeeded"):console.log("[CalmWeb] API analysis failed:",n.error)}catch(k){console.error("[CalmWeb] API analysis error:",k)}}else console.log("[CalmWeb] No AI - using CSS extraction (free tier)");if(!n?.success)try{t=qt(document,window.location.href,e)}catch(k){console.error("[CalmWeb] Extraction failed:",k)}const a=n?.title||t?.title||document.title||"Current Page",i=r.layoutId?tr(r.layoutId):it,o=document.createElement("div");o.id=Ue,o.style.cssText=`
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 2147483647 !important;
    pointer-events: auto !important;
  `;const b=o.attachShadow({mode:"open"}),h=document.createElement("style");h.textContent=`
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
  `,b.appendChild(h);const A=document.createElement("div");A.className="cw-overlay";const j=document.createElement("div");j.className="cw-bg-pattern";const U=document.createElement("div");U.className="cw-toolbar",U.innerHTML=`
    <div class="cw-toolbar-left">
      <div class="cw-logo">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
        CalmWeb
      </div>
      <div class="cw-title">${Te(a)}</div>
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
  `;const W=document.createElement("main");W.className="cw-main";const d=document.createElement("header");d.className="cw-article-header";const g=document.createElement("div");g.className="cw-content";const u=document.createElement("footer");if(u.className="cw-footer",W.appendChild(d),W.appendChild(g),W.appendChild(u),A.appendChild(j),A.appendChild(U),A.appendChild(W),b.appendChild(A),document.body.appendChild(o),b.getElementById("cw-close-btn")?.addEventListener("click",()=>{me(),r.onClose?.()}),b.getElementById("cw-raw-btn")?.addEventListener("click",()=>{me(),r.onClose?.()}),n?.success&&n.filteredContent)d.innerHTML=`
      <h1 class="cw-title-main">${Te(n.title)}</h1>
      <div class="cw-meta">
        ${n.summary?`<span class="cw-meta-item">${Te(n.summary.slice(0,100))}</span>`:""}
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
    `,g.innerHTML=n.filteredContent,Er(g);else{const k=t&&t.title?t:kr();try{i.render(k,g,{font:r.font||"Inter",fontSize:r.fontSize||"17px"},{header:d,footer:u})}catch(R){console.error("[CalmWeb] Layout render failed:",R),Cr(g,k)}}const y=k=>{k.key==="Escape"&&(me(),document.removeEventListener("keydown",y))};document.addEventListener("keydown",y)}function kr(){return{title:document.title||"Current Page",author:void 0,date:void 0,content:document.body?.textContent?.slice(0,5e3)||"",contentHtml:(()=>{const r=document.createElement("div"),t=(document.body?.textContent||"").split(/\n\s*\n/).filter(n=>n.trim().length>20).slice(0,20);for(const n of t){const s=document.createElement("p");s.textContent=n.trim(),r.appendChild(s)}return r})(),images:[],source:window.location.hostname,favicon:void 0,readingTime:Math.ceil((document.body?.textContent?.split(/\s+/).length||0)/200),url:window.location.href}}function Cr(r,e){r.innerHTML=`
    <p>${Te(e.content.slice(0,500))}</p>
  `}function Er(r){r.querySelectorAll("a").forEach(e=>{e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")})}function me(){document.getElementById(Ue)?.remove(),document.body.style.removeProperty("overflow")}function Te(r){const e=document.createElement("span");return e.textContent=r,e.innerHTML}function Fe(){return!!document.getElementById(Ue)}var $;(function(r){r.assertEqual=s=>{};function e(s){}r.assertIs=e;function t(s){throw new Error}r.assertNever=t,r.arrayToEnum=s=>{const a={};for(const i of s)a[i]=i;return a},r.getValidEnumValues=s=>{const a=r.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),i={};for(const o of a)i[o]=s[o];return r.objectValues(i)},r.objectValues=s=>r.objectKeys(s).map(function(a){return s[a]}),r.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const a=[];for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&a.push(i);return a},r.find=(s,a)=>{for(const i of s)if(a(i))return i},r.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function n(s,a=" | "){return s.map(i=>typeof i=="string"?`'${i}'`:i).join(a)}r.joinValues=n,r.jsonStringifyReplacer=(s,a)=>typeof a=="bigint"?a.toString():a})($||($={}));var pt;(function(r){r.mergeShapes=(e,t)=>({...e,...t})})(pt||(pt={}));const _=$.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),te=r=>{switch(typeof r){case"undefined":return _.undefined;case"string":return _.string;case"number":return Number.isNaN(r)?_.nan:_.number;case"boolean":return _.boolean;case"function":return _.function;case"bigint":return _.bigint;case"symbol":return _.symbol;case"object":return Array.isArray(r)?_.array:r===null?_.null:r.then&&typeof r.then=="function"&&r.catch&&typeof r.catch=="function"?_.promise:typeof Map<"u"&&r instanceof Map?_.map:typeof Set<"u"&&r instanceof Set?_.set:typeof Date<"u"&&r instanceof Date?_.date:_.object;default:return _.unknown}},f=$.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Q extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(a){return a.message},n={_errors:[]},s=a=>{for(const i of a.issues)if(i.code==="invalid_union")i.unionErrors.map(s);else if(i.code==="invalid_return_type")s(i.returnTypeError);else if(i.code==="invalid_arguments")s(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let o=n,b=0;for(;b<i.path.length;){const h=i.path[b];b===i.path.length-1?(o[h]=o[h]||{_errors:[]},o[h]._errors.push(t(i))):o[h]=o[h]||{_errors:[]},o=o[h],b++}}};return s(this),n}static assert(e){if(!(e instanceof Q))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,$.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},n=[];for(const s of this.issues)if(s.path.length>0){const a=s.path[0];t[a]=t[a]||[],t[a].push(e(s))}else n.push(e(s));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}Q.create=r=>new Q(r);const Be=(r,e)=>{let t;switch(r.code){case f.invalid_type:r.received===_.undefined?t="Required":t=`Expected ${r.expected}, received ${r.received}`;break;case f.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(r.expected,$.jsonStringifyReplacer)}`;break;case f.unrecognized_keys:t=`Unrecognized key(s) in object: ${$.joinValues(r.keys,", ")}`;break;case f.invalid_union:t="Invalid input";break;case f.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${$.joinValues(r.options)}`;break;case f.invalid_enum_value:t=`Invalid enum value. Expected ${$.joinValues(r.options)}, received '${r.received}'`;break;case f.invalid_arguments:t="Invalid function arguments";break;case f.invalid_return_type:t="Invalid function return type";break;case f.invalid_date:t="Invalid date";break;case f.invalid_string:typeof r.validation=="object"?"includes"in r.validation?(t=`Invalid input: must include "${r.validation.includes}"`,typeof r.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${r.validation.position}`)):"startsWith"in r.validation?t=`Invalid input: must start with "${r.validation.startsWith}"`:"endsWith"in r.validation?t=`Invalid input: must end with "${r.validation.endsWith}"`:$.assertNever(r.validation):r.validation!=="regex"?t=`Invalid ${r.validation}`:t="Invalid";break;case f.too_small:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at least":"more than"} ${r.minimum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at least":"over"} ${r.minimum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="bigint"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(r.minimum))}`:t="Invalid input";break;case f.too_big:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at most":"less than"} ${r.maximum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at most":"under"} ${r.maximum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="bigint"?t=`BigInt must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly":r.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(r.maximum))}`:t="Invalid input";break;case f.custom:t="Invalid input";break;case f.invalid_intersection_types:t="Intersection results could not be merged";break;case f.not_multiple_of:t=`Number must be a multiple of ${r.multipleOf}`;break;case f.not_finite:t="Number must be finite";break;default:t=e.defaultError,$.assertNever(r)}return{message:t}};let Tr=Be;function Sr(){return Tr}const Ir=r=>{const{data:e,path:t,errorMaps:n,issueData:s}=r,a=[...t,...s.path||[]],i={...s,path:a};if(s.message!==void 0)return{...s,path:a,message:s.message};let o="";const b=n.filter(h=>!!h).slice().reverse();for(const h of b)o=h(i,{data:e,defaultError:o}).message;return{...s,path:a,message:o}};function x(r,e){const t=Sr(),n=Ir({issueData:e,data:r.data,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,t,t===Be?void 0:Be].filter(s=>!!s)});r.common.issues.push(n)}class B{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const s of t){if(s.status==="aborted")return S;s.status==="dirty"&&e.dirty(),n.push(s.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const s of t){const a=await s.key,i=await s.value;n.push({key:a,value:i})}return B.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const s of t){const{key:a,value:i}=s;if(a.status==="aborted"||i.status==="aborted")return S;a.status==="dirty"&&e.dirty(),i.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof i.value<"u"||s.alwaysSet)&&(n[a.value]=i.value)}return{status:e.value,value:n}}}const S=Object.freeze({status:"aborted"}),ye=r=>({status:"dirty",value:r}),K=r=>({status:"valid",value:r}),yt=r=>r.status==="aborted",bt=r=>r.status==="dirty",ge=r=>r.status==="valid",Se=r=>typeof Promise<"u"&&r instanceof Promise;var C;(function(r){r.errToObj=e=>typeof e=="string"?{message:e}:e||{},r.toString=e=>typeof e=="string"?e:e?.message})(C||(C={}));class re{constructor(e,t,n,s){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const At=(r,e)=>{if(ge(e))return{success:!0,data:e.value};if(!r.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Q(r.common.issues);return this._error=t,this._error}}};function M(r){if(!r)return{};const{errorMap:e,invalid_type_error:t,required_error:n,description:s}=r;if(e&&(t||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(i,o)=>{const{message:b}=r;return i.code==="invalid_enum_value"?{message:b??o.defaultError}:typeof o.data>"u"?{message:b??n??o.defaultError}:i.code!=="invalid_type"?{message:o.defaultError}:{message:b??t??o.defaultError}},description:s}}class P{get description(){return this._def.description}_getType(e){return te(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:te(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new B,ctx:{common:e.parent.common,data:e.data,parsedType:te(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Se(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){const n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:te(e)},s=this._parseSync({data:e,path:n.path,parent:n});return At(n,s)}"~validate"(e){const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:te(e)};if(!this["~standard"].async)try{const n=this._parseSync({data:e,path:[],parent:t});return ge(n)?{value:n.value}:{issues:t.common.issues}}catch(n){n?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(n=>ge(n)?{value:n.value}:{issues:t.common.issues})}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:te(e)},s=this._parse({data:e,path:n.path,parent:n}),a=await(Se(s)?s:Promise.resolve(s));return At(n,a)}refine(e,t){const n=s=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(s):t;return this._refinement((s,a)=>{const i=e(s),o=()=>a.addIssue({code:f.custom,...n(s)});return typeof Promise<"u"&&i instanceof Promise?i.then(b=>b?!0:(o(),!1)):i?!0:(o(),!1)})}refinement(e,t){return this._refinement((n,s)=>e(n)?!0:(s.addIssue(typeof t=="function"?t(n,s):t),!1))}_refinement(e){return new ce({schema:this,typeName:I.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return ee.create(this,this._def)}nullable(){return le.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return J.create(this)}promise(){return Oe.create(this,this._def)}or(e){return Re.create([this,e],this._def)}and(e){return Ne.create(this,e,this._def)}transform(e){return new ce({...M(this._def),schema:this,typeName:I.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Pe({...M(this._def),innerType:this,defaultValue:t,typeName:I.ZodDefault})}brand(){return new It({typeName:I.ZodBranded,type:this,...M(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new $e({...M(this._def),innerType:this,catchValue:t,typeName:I.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return tt.create(this,e)}readonly(){return Le.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Rr=/^c[^\s-]{8,}$/i,Nr=/^[0-9a-z]+$/,Mr=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Or=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Pr=/^[a-z0-9_-]{21}$/i,$r=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Lr=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,jr=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Zr="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ke;const zr=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,qr=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Wr=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Vr=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Dr=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Ur=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,xt="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Fr=new RegExp(`^${xt}$`);function vt(r){let e="[0-5]\\d";r.precision?e=`${e}\\.\\d{${r.precision}}`:r.precision==null&&(e=`${e}(\\.\\d+)?`);const t=r.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Br(r){return new RegExp(`^${vt(r)}$`)}function Kr(r){let e=`${xt}T${vt(r)}`;const t=[];return t.push(r.local?"Z?":"Z"),r.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Gr(r,e){return!!((e==="v4"||!e)&&zr.test(r)||(e==="v6"||!e)&&Wr.test(r))}function Hr(r,e){if(!$r.test(r))return!1;try{const[t]=r.split(".");if(!t)return!1;const n=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),s=JSON.parse(atob(n));return!(typeof s!="object"||s===null||"typ"in s&&s?.typ!=="JWT"||!s.alg||e&&s.alg!==e)}catch{return!1}}function Yr(r,e){return!!((e==="v4"||!e)&&qr.test(r)||(e==="v6"||!e)&&Vr.test(r))}class ne extends P{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==_.string){const a=this._getOrReturnCtx(e);return x(a,{code:f.invalid_type,expected:_.string,received:a.parsedType}),S}const n=new B;let s;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(s=this._getOrReturnCtx(e,s),x(s,{code:f.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),n.dirty());else if(a.kind==="max")e.data.length>a.value&&(s=this._getOrReturnCtx(e,s),x(s,{code:f.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),n.dirty());else if(a.kind==="length"){const i=e.data.length>a.value,o=e.data.length<a.value;(i||o)&&(s=this._getOrReturnCtx(e,s),i?x(s,{code:f.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):o&&x(s,{code:f.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),n.dirty())}else if(a.kind==="email")jr.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"email",code:f.invalid_string,message:a.message}),n.dirty());else if(a.kind==="emoji")Ke||(Ke=new RegExp(Zr,"u")),Ke.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"emoji",code:f.invalid_string,message:a.message}),n.dirty());else if(a.kind==="uuid")Or.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"uuid",code:f.invalid_string,message:a.message}),n.dirty());else if(a.kind==="nanoid")Pr.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"nanoid",code:f.invalid_string,message:a.message}),n.dirty());else if(a.kind==="cuid")Rr.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"cuid",code:f.invalid_string,message:a.message}),n.dirty());else if(a.kind==="cuid2")Nr.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"cuid2",code:f.invalid_string,message:a.message}),n.dirty());else if(a.kind==="ulid")Mr.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"ulid",code:f.invalid_string,message:a.message}),n.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),x(s,{validation:"url",code:f.invalid_string,message:a.message}),n.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"regex",code:f.invalid_string,message:a.message}),n.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(s=this._getOrReturnCtx(e,s),x(s,{code:f.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),n.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(s=this._getOrReturnCtx(e,s),x(s,{code:f.invalid_string,validation:{startsWith:a.value},message:a.message}),n.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(s=this._getOrReturnCtx(e,s),x(s,{code:f.invalid_string,validation:{endsWith:a.value},message:a.message}),n.dirty()):a.kind==="datetime"?Kr(a).test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{code:f.invalid_string,validation:"datetime",message:a.message}),n.dirty()):a.kind==="date"?Fr.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{code:f.invalid_string,validation:"date",message:a.message}),n.dirty()):a.kind==="time"?Br(a).test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{code:f.invalid_string,validation:"time",message:a.message}),n.dirty()):a.kind==="duration"?Lr.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"duration",code:f.invalid_string,message:a.message}),n.dirty()):a.kind==="ip"?Gr(e.data,a.version)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"ip",code:f.invalid_string,message:a.message}),n.dirty()):a.kind==="jwt"?Hr(e.data,a.alg)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"jwt",code:f.invalid_string,message:a.message}),n.dirty()):a.kind==="cidr"?Yr(e.data,a.version)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"cidr",code:f.invalid_string,message:a.message}),n.dirty()):a.kind==="base64"?Dr.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"base64",code:f.invalid_string,message:a.message}),n.dirty()):a.kind==="base64url"?Ur.test(e.data)||(s=this._getOrReturnCtx(e,s),x(s,{validation:"base64url",code:f.invalid_string,message:a.message}),n.dirty()):$.assertNever(a);return{status:n.value,value:e.data}}_regex(e,t,n){return this.refinement(s=>e.test(s),{validation:t,code:f.invalid_string,...C.errToObj(n)})}_addCheck(e){return new ne({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...C.errToObj(e)})}url(e){return this._addCheck({kind:"url",...C.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...C.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...C.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...C.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...C.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...C.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...C.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...C.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...C.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...C.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...C.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...C.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...C.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...C.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...C.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...C.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...C.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...C.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...C.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...C.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...C.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...C.errToObj(t)})}nonempty(e){return this.min(1,C.errToObj(e))}trim(){return new ne({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ne({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ne({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ne.create=r=>new ne({checks:[],typeName:I.ZodString,coerce:r?.coerce??!1,...M(r)});function Jr(r,e){const t=(r.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,s=t>n?t:n,a=Number.parseInt(r.toFixed(s).replace(".","")),i=Number.parseInt(e.toFixed(s).replace(".",""));return a%i/10**s}class fe extends P{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==_.number){const a=this._getOrReturnCtx(e);return x(a,{code:f.invalid_type,expected:_.number,received:a.parsedType}),S}let n;const s=new B;for(const a of this._def.checks)a.kind==="int"?$.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{code:f.invalid_type,expected:"integer",received:"float",message:a.message}),s.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(n=this._getOrReturnCtx(e,n),x(n,{code:f.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(n=this._getOrReturnCtx(e,n),x(n,{code:f.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="multipleOf"?Jr(e.data,a.value)!==0&&(n=this._getOrReturnCtx(e,n),x(n,{code:f.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{code:f.not_finite,message:a.message}),s.dirty()):$.assertNever(a);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,C.toString(t))}gt(e,t){return this.setLimit("min",e,!1,C.toString(t))}lte(e,t){return this.setLimit("max",e,!0,C.toString(t))}lt(e,t){return this.setLimit("max",e,!1,C.toString(t))}setLimit(e,t,n,s){return new fe({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:C.toString(s)}]})}_addCheck(e){return new fe({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:C.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:C.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:C.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:C.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:C.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:C.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:C.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:C.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:C.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&$.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(t===null||n.value>t)&&(t=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}fe.create=r=>new fe({checks:[],typeName:I.ZodNumber,coerce:r?.coerce||!1,...M(r)});class be extends P{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==_.bigint)return this._getInvalidInput(e);let n;const s=new B;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(n=this._getOrReturnCtx(e,n),x(n,{code:f.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(n=this._getOrReturnCtx(e,n),x(n,{code:f.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),x(n,{code:f.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):$.assertNever(a);return{status:s.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return x(t,{code:f.invalid_type,expected:_.bigint,received:t.parsedType}),S}gte(e,t){return this.setLimit("min",e,!0,C.toString(t))}gt(e,t){return this.setLimit("min",e,!1,C.toString(t))}lte(e,t){return this.setLimit("max",e,!0,C.toString(t))}lt(e,t){return this.setLimit("max",e,!1,C.toString(t))}setLimit(e,t,n,s){return new be({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:C.toString(s)}]})}_addCheck(e){return new be({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:C.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:C.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:C.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:C.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:C.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}be.create=r=>new be({checks:[],typeName:I.ZodBigInt,coerce:r?.coerce??!1,...M(r)});class Ge extends P{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==_.boolean){const n=this._getOrReturnCtx(e);return x(n,{code:f.invalid_type,expected:_.boolean,received:n.parsedType}),S}return K(e.data)}}Ge.create=r=>new Ge({typeName:I.ZodBoolean,coerce:r?.coerce||!1,...M(r)});class Ie extends P{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==_.date){const a=this._getOrReturnCtx(e);return x(a,{code:f.invalid_type,expected:_.date,received:a.parsedType}),S}if(Number.isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return x(a,{code:f.invalid_date}),S}const n=new B;let s;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(s=this._getOrReturnCtx(e,s),x(s,{code:f.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),n.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(s=this._getOrReturnCtx(e,s),x(s,{code:f.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),n.dirty()):$.assertNever(a);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ie({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:C.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:C.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Ie.create=r=>new Ie({checks:[],coerce:r?.coerce||!1,typeName:I.ZodDate,...M(r)});class wt extends P{_parse(e){if(this._getType(e)!==_.symbol){const n=this._getOrReturnCtx(e);return x(n,{code:f.invalid_type,expected:_.symbol,received:n.parsedType}),S}return K(e.data)}}wt.create=r=>new wt({typeName:I.ZodSymbol,...M(r)});class He extends P{_parse(e){if(this._getType(e)!==_.undefined){const n=this._getOrReturnCtx(e);return x(n,{code:f.invalid_type,expected:_.undefined,received:n.parsedType}),S}return K(e.data)}}He.create=r=>new He({typeName:I.ZodUndefined,...M(r)});class Ye extends P{_parse(e){if(this._getType(e)!==_.null){const n=this._getOrReturnCtx(e);return x(n,{code:f.invalid_type,expected:_.null,received:n.parsedType}),S}return K(e.data)}}Ye.create=r=>new Ye({typeName:I.ZodNull,...M(r)});class _t extends P{constructor(){super(...arguments),this._any=!0}_parse(e){return K(e.data)}}_t.create=r=>new _t({typeName:I.ZodAny,...M(r)});class kt extends P{constructor(){super(...arguments),this._unknown=!0}_parse(e){return K(e.data)}}kt.create=r=>new kt({typeName:I.ZodUnknown,...M(r)});class se extends P{_parse(e){const t=this._getOrReturnCtx(e);return x(t,{code:f.invalid_type,expected:_.never,received:t.parsedType}),S}}se.create=r=>new se({typeName:I.ZodNever,...M(r)});class Ct extends P{_parse(e){if(this._getType(e)!==_.undefined){const n=this._getOrReturnCtx(e);return x(n,{code:f.invalid_type,expected:_.void,received:n.parsedType}),S}return K(e.data)}}Ct.create=r=>new Ct({typeName:I.ZodVoid,...M(r)});class J extends P{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),s=this._def;if(t.parsedType!==_.array)return x(t,{code:f.invalid_type,expected:_.array,received:t.parsedType}),S;if(s.exactLength!==null){const i=t.data.length>s.exactLength.value,o=t.data.length<s.exactLength.value;(i||o)&&(x(t,{code:i?f.too_big:f.too_small,minimum:o?s.exactLength.value:void 0,maximum:i?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(x(t,{code:f.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(x(t,{code:f.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((i,o)=>s.type._parseAsync(new re(t,i,t.path,o)))).then(i=>B.mergeArray(n,i));const a=[...t.data].map((i,o)=>s.type._parseSync(new re(t,i,t.path,o)));return B.mergeArray(n,a)}get element(){return this._def.type}min(e,t){return new J({...this._def,minLength:{value:e,message:C.toString(t)}})}max(e,t){return new J({...this._def,maxLength:{value:e,message:C.toString(t)}})}length(e,t){return new J({...this._def,exactLength:{value:e,message:C.toString(t)}})}nonempty(e){return this.min(1,e)}}J.create=(r,e)=>new J({type:r,minLength:null,maxLength:null,exactLength:null,typeName:I.ZodArray,...M(e)});function he(r){if(r instanceof D){const e={};for(const t in r.shape){const n=r.shape[t];e[t]=ee.create(he(n))}return new D({...r._def,shape:()=>e})}else return r instanceof J?new J({...r._def,type:he(r.element)}):r instanceof ee?ee.create(he(r.unwrap())):r instanceof le?le.create(he(r.unwrap())):r instanceof ie?ie.create(r.items.map(e=>he(e))):r}class D extends P{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=$.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==_.object){const h=this._getOrReturnCtx(e);return x(h,{code:f.invalid_type,expected:_.object,received:h.parsedType}),S}const{status:n,ctx:s}=this._processInputParams(e),{shape:a,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof se&&this._def.unknownKeys==="strip"))for(const h in s.data)i.includes(h)||o.push(h);const b=[];for(const h of i){const A=a[h],j=s.data[h];b.push({key:{status:"valid",value:h},value:A._parse(new re(s,j,s.path,h)),alwaysSet:h in s.data})}if(this._def.catchall instanceof se){const h=this._def.unknownKeys;if(h==="passthrough")for(const A of o)b.push({key:{status:"valid",value:A},value:{status:"valid",value:s.data[A]}});else if(h==="strict")o.length>0&&(x(s,{code:f.unrecognized_keys,keys:o}),n.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const A of o){const j=s.data[A];b.push({key:{status:"valid",value:A},value:h._parse(new re(s,j,s.path,A)),alwaysSet:A in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const h=[];for(const A of b){const j=await A.key,U=await A.value;h.push({key:j,value:U,alwaysSet:A.alwaysSet})}return h}).then(h=>B.mergeObjectSync(n,h)):B.mergeObjectSync(n,b)}get shape(){return this._def.shape()}strict(e){return C.errToObj,new D({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,n)=>{const s=this._def.errorMap?.(t,n).message??n.defaultError;return t.code==="unrecognized_keys"?{message:C.errToObj(e).message??s}:{message:s}}}:{}})}strip(){return new D({...this._def,unknownKeys:"strip"})}passthrough(){return new D({...this._def,unknownKeys:"passthrough"})}extend(e){return new D({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new D({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:I.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new D({...this._def,catchall:e})}pick(e){const t={};for(const n of $.objectKeys(e))e[n]&&this.shape[n]&&(t[n]=this.shape[n]);return new D({...this._def,shape:()=>t})}omit(e){const t={};for(const n of $.objectKeys(this.shape))e[n]||(t[n]=this.shape[n]);return new D({...this._def,shape:()=>t})}deepPartial(){return he(this)}partial(e){const t={};for(const n of $.objectKeys(this.shape)){const s=this.shape[n];e&&!e[n]?t[n]=s:t[n]=s.optional()}return new D({...this._def,shape:()=>t})}required(e){const t={};for(const n of $.objectKeys(this.shape))if(e&&!e[n])t[n]=this.shape[n];else{let a=this.shape[n];for(;a instanceof ee;)a=a._def.innerType;t[n]=a}return new D({...this._def,shape:()=>t})}keyof(){return Tt($.objectKeys(this.shape))}}D.create=(r,e)=>new D({shape:()=>r,unknownKeys:"strip",catchall:se.create(),typeName:I.ZodObject,...M(e)}),D.strictCreate=(r,e)=>new D({shape:()=>r,unknownKeys:"strict",catchall:se.create(),typeName:I.ZodObject,...M(e)}),D.lazycreate=(r,e)=>new D({shape:r,unknownKeys:"strip",catchall:se.create(),typeName:I.ZodObject,...M(e)});class Re extends P{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;function s(a){for(const o of a)if(o.result.status==="valid")return o.result;for(const o of a)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const i=a.map(o=>new Q(o.ctx.common.issues));return x(t,{code:f.invalid_union,unionErrors:i}),S}if(t.common.async)return Promise.all(n.map(async a=>{const i={...t,common:{...t.common,issues:[]},parent:null};return{result:await a._parseAsync({data:t.data,path:t.path,parent:i}),ctx:i}})).then(s);{let a;const i=[];for(const b of n){const h={...t,common:{...t.common,issues:[]},parent:null},A=b._parseSync({data:t.data,path:t.path,parent:h});if(A.status==="valid")return A;A.status==="dirty"&&!a&&(a={result:A,ctx:h}),h.common.issues.length&&i.push(h.common.issues)}if(a)return t.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(b=>new Q(b));return x(t,{code:f.invalid_union,unionErrors:o}),S}}get options(){return this._def.options}}Re.create=(r,e)=>new Re({options:r,typeName:I.ZodUnion,...M(e)});const X=r=>r instanceof Xe?X(r.schema):r instanceof ce?X(r.innerType()):r instanceof Me?[r.value]:r instanceof oe?r.options:r instanceof et?$.objectValues(r.enum):r instanceof Pe?X(r._def.innerType):r instanceof He?[void 0]:r instanceof Ye?[null]:r instanceof ee?[void 0,...X(r.unwrap())]:r instanceof le?[null,...X(r.unwrap())]:r instanceof It||r instanceof Le?X(r.unwrap()):r instanceof $e?X(r._def.innerType):[];class Je extends P{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==_.object)return x(t,{code:f.invalid_type,expected:_.object,received:t.parsedType}),S;const n=this.discriminator,s=t.data[n],a=this.optionsMap.get(s);return a?t.common.async?a._parseAsync({data:t.data,path:t.path,parent:t}):a._parseSync({data:t.data,path:t.path,parent:t}):(x(t,{code:f.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),S)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,n){const s=new Map;for(const a of t){const i=X(a.shape[e]);if(!i.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of i){if(s.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);s.set(o,a)}}return new Je({typeName:I.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s,...M(n)})}}function Qe(r,e){const t=te(r),n=te(e);if(r===e)return{valid:!0,data:r};if(t===_.object&&n===_.object){const s=$.objectKeys(e),a=$.objectKeys(r).filter(o=>s.indexOf(o)!==-1),i={...r,...e};for(const o of a){const b=Qe(r[o],e[o]);if(!b.valid)return{valid:!1};i[o]=b.data}return{valid:!0,data:i}}else if(t===_.array&&n===_.array){if(r.length!==e.length)return{valid:!1};const s=[];for(let a=0;a<r.length;a++){const i=r[a],o=e[a],b=Qe(i,o);if(!b.valid)return{valid:!1};s.push(b.data)}return{valid:!0,data:s}}else return t===_.date&&n===_.date&&+r==+e?{valid:!0,data:r}:{valid:!1}}class Ne extends P{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=(a,i)=>{if(yt(a)||yt(i))return S;const o=Qe(a.value,i.value);return o.valid?((bt(a)||bt(i))&&t.dirty(),{status:t.value,value:o.data}):(x(n,{code:f.invalid_intersection_types}),S)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([a,i])=>s(a,i)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}Ne.create=(r,e,t)=>new Ne({left:r,right:e,typeName:I.ZodIntersection,...M(t)});class ie extends P{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==_.array)return x(n,{code:f.invalid_type,expected:_.array,received:n.parsedType}),S;if(n.data.length<this._def.items.length)return x(n,{code:f.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),S;!this._def.rest&&n.data.length>this._def.items.length&&(x(n,{code:f.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const a=[...n.data].map((i,o)=>{const b=this._def.items[o]||this._def.rest;return b?b._parse(new re(n,i,n.path,o)):null}).filter(i=>!!i);return n.common.async?Promise.all(a).then(i=>B.mergeArray(t,i)):B.mergeArray(t,a)}get items(){return this._def.items}rest(e){return new ie({...this._def,rest:e})}}ie.create=(r,e)=>{if(!Array.isArray(r))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ie({items:r,typeName:I.ZodTuple,rest:null,...M(e)})};class Et extends P{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==_.map)return x(n,{code:f.invalid_type,expected:_.map,received:n.parsedType}),S;const s=this._def.keyType,a=this._def.valueType,i=[...n.data.entries()].map(([o,b],h)=>({key:s._parse(new re(n,o,n.path,[h,"key"])),value:a._parse(new re(n,b,n.path,[h,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const b of i){const h=await b.key,A=await b.value;if(h.status==="aborted"||A.status==="aborted")return S;(h.status==="dirty"||A.status==="dirty")&&t.dirty(),o.set(h.value,A.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const b of i){const h=b.key,A=b.value;if(h.status==="aborted"||A.status==="aborted")return S;(h.status==="dirty"||A.status==="dirty")&&t.dirty(),o.set(h.value,A.value)}return{status:t.value,value:o}}}}Et.create=(r,e,t)=>new Et({valueType:e,keyType:r,typeName:I.ZodMap,...M(t)});class Ae extends P{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==_.set)return x(n,{code:f.invalid_type,expected:_.set,received:n.parsedType}),S;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(x(n,{code:f.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(x(n,{code:f.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const a=this._def.valueType;function i(b){const h=new Set;for(const A of b){if(A.status==="aborted")return S;A.status==="dirty"&&t.dirty(),h.add(A.value)}return{status:t.value,value:h}}const o=[...n.data.values()].map((b,h)=>a._parse(new re(n,b,n.path,h)));return n.common.async?Promise.all(o).then(b=>i(b)):i(o)}min(e,t){return new Ae({...this._def,minSize:{value:e,message:C.toString(t)}})}max(e,t){return new Ae({...this._def,maxSize:{value:e,message:C.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Ae.create=(r,e)=>new Ae({valueType:r,minSize:null,maxSize:null,typeName:I.ZodSet,...M(e)});class Xe extends P{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Xe.create=(r,e)=>new Xe({getter:r,typeName:I.ZodLazy,...M(e)});class Me extends P{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return x(t,{received:t.data,code:f.invalid_literal,expected:this._def.value}),S}return{status:"valid",value:e.data}}get value(){return this._def.value}}Me.create=(r,e)=>new Me({value:r,typeName:I.ZodLiteral,...M(e)});function Tt(r,e){return new oe({values:r,typeName:I.ZodEnum,...M(e)})}class oe extends P{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),n=this._def.values;return x(t,{expected:$.joinValues(n),received:t.parsedType,code:f.invalid_type}),S}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values;return x(t,{received:t.data,code:f.invalid_enum_value,options:n}),S}return K(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return oe.create(e,{...this._def,...t})}exclude(e,t=this._def){return oe.create(this.options.filter(n=>!e.includes(n)),{...this._def,...t})}}oe.create=Tt;class et extends P{_parse(e){const t=$.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==_.string&&n.parsedType!==_.number){const s=$.objectValues(t);return x(n,{expected:$.joinValues(s),received:n.parsedType,code:f.invalid_type}),S}if(this._cache||(this._cache=new Set($.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const s=$.objectValues(t);return x(n,{received:n.data,code:f.invalid_enum_value,options:s}),S}return K(e.data)}get enum(){return this._def.values}}et.create=(r,e)=>new et({values:r,typeName:I.ZodNativeEnum,...M(e)});class Oe extends P{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==_.promise&&t.common.async===!1)return x(t,{code:f.invalid_type,expected:_.promise,received:t.parsedType}),S;const n=t.parsedType===_.promise?t.data:Promise.resolve(t.data);return K(n.then(s=>this._def.type.parseAsync(s,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Oe.create=(r,e)=>new Oe({type:r,typeName:I.ZodPromise,...M(e)});class ce extends P{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===I.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=this._def.effect||null,a={addIssue:i=>{x(n,i),i.fatal?t.abort():t.dirty()},get path(){return n.path}};if(a.addIssue=a.addIssue.bind(a),s.type==="preprocess"){const i=s.transform(n.data,a);if(n.common.async)return Promise.resolve(i).then(async o=>{if(t.value==="aborted")return S;const b=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return b.status==="aborted"?S:b.status==="dirty"||t.value==="dirty"?ye(b.value):b});{if(t.value==="aborted")return S;const o=this._def.schema._parseSync({data:i,path:n.path,parent:n});return o.status==="aborted"?S:o.status==="dirty"||t.value==="dirty"?ye(o.value):o}}if(s.type==="refinement"){const i=o=>{const b=s.refinement(o,a);if(n.common.async)return Promise.resolve(b);if(b instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?S:(o.status==="dirty"&&t.dirty(),i(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?S:(o.status==="dirty"&&t.dirty(),i(o.value).then(()=>({status:t.value,value:o.value}))))}if(s.type==="transform")if(n.common.async===!1){const i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!ge(i))return S;const o=s.transform(i.value,a);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(i=>ge(i)?Promise.resolve(s.transform(i.value,a)).then(o=>({status:t.value,value:o})):S);$.assertNever(s)}}ce.create=(r,e,t)=>new ce({schema:r,typeName:I.ZodEffects,effect:e,...M(t)}),ce.createWithPreprocess=(r,e,t)=>new ce({schema:e,effect:{type:"preprocess",transform:r},typeName:I.ZodEffects,...M(t)});class ee extends P{_parse(e){return this._getType(e)===_.undefined?K(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ee.create=(r,e)=>new ee({innerType:r,typeName:I.ZodOptional,...M(e)});class le extends P{_parse(e){return this._getType(e)===_.null?K(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}le.create=(r,e)=>new le({innerType:r,typeName:I.ZodNullable,...M(e)});class Pe extends P{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===_.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Pe.create=(r,e)=>new Pe({innerType:r,typeName:I.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...M(e)});class $e extends P{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Se(s)?s.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Q(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Q(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}$e.create=(r,e)=>new $e({innerType:r,typeName:I.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...M(e)});class St extends P{_parse(e){if(this._getType(e)!==_.nan){const n=this._getOrReturnCtx(e);return x(n,{code:f.invalid_type,expected:_.nan,received:n.parsedType}),S}return{status:"valid",value:e.data}}}St.create=r=>new St({typeName:I.ZodNaN,...M(r)});class It extends P{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class tt extends P{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return a.status==="aborted"?S:a.status==="dirty"?(t.dirty(),ye(a.value)):this._def.out._parseAsync({data:a.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?S:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(e,t){return new tt({in:e,out:t,typeName:I.ZodPipeline})}}class Le extends P{_parse(e){const t=this._def.innerType._parse(e),n=s=>(ge(s)&&(s.value=Object.freeze(s.value)),s);return Se(t)?t.then(s=>n(s)):n(t)}unwrap(){return this._def.innerType}}Le.create=(r,e)=>new Le({innerType:r,typeName:I.ZodReadonly,...M(e)});var I;(function(r){r.ZodString="ZodString",r.ZodNumber="ZodNumber",r.ZodNaN="ZodNaN",r.ZodBigInt="ZodBigInt",r.ZodBoolean="ZodBoolean",r.ZodDate="ZodDate",r.ZodSymbol="ZodSymbol",r.ZodUndefined="ZodUndefined",r.ZodNull="ZodNull",r.ZodAny="ZodAny",r.ZodUnknown="ZodUnknown",r.ZodNever="ZodNever",r.ZodVoid="ZodVoid",r.ZodArray="ZodArray",r.ZodObject="ZodObject",r.ZodUnion="ZodUnion",r.ZodDiscriminatedUnion="ZodDiscriminatedUnion",r.ZodIntersection="ZodIntersection",r.ZodTuple="ZodTuple",r.ZodRecord="ZodRecord",r.ZodMap="ZodMap",r.ZodSet="ZodSet",r.ZodFunction="ZodFunction",r.ZodLazy="ZodLazy",r.ZodLiteral="ZodLiteral",r.ZodEnum="ZodEnum",r.ZodEffects="ZodEffects",r.ZodNativeEnum="ZodNativeEnum",r.ZodOptional="ZodOptional",r.ZodNullable="ZodNullable",r.ZodDefault="ZodDefault",r.ZodCatch="ZodCatch",r.ZodPromise="ZodPromise",r.ZodBranded="ZodBranded",r.ZodPipeline="ZodPipeline",r.ZodReadonly="ZodReadonly"})(I||(I={}));const F=ne.create,Rt=fe.create,pe=Ge.create;se.create;const xe=J.create,G=D.create;Re.create;const Qr=Je.create;Ne.create,ie.create;const ae=Me.create,Xr=oe.create;Oe.create,ee.create,le.create;const H={CLASSIFY_UNIT:"calmweb:classifyUnit",GET_SETTINGS:"calmweb:getSettings",UPDATE_SETTINGS:"calmweb:updateSettings",CLEAR_CACHE:"calmweb:clearCache",GET_STATS:"calmweb:getStats",INCREMENT_STAT:"calmweb:incrementStat",TOGGLE_READER:"calmweb:toggleReader",OPEN_READER:"calmweb:openReader",CLOSE_READER:"calmweb:closeReader",TEST_CONNECTION:"calmweb:testConnection"},en=G({type:ae(H.CLASSIFY_UNIT),unit:G({id:F(),site:F(),fingerprint:F(),sourceName:F().optional(),title:F(),metadata:xe(F()),isNew:pe(),url:F().url().optional()})}),tn=G({type:ae(H.GET_SETTINGS)}),rn=G({type:ae(H.UPDATE_SETTINGS),settings:G({enabled:pe().optional(),processingMode:Xr(["byok_llm","hosted_llm"]).optional(),strictness:Rt().min(0).max(100).optional(),rules:G({blocklistChannels:xe(F()).optional(),blocklistKeywords:xe(F()).optional(),allowlistChannels:xe(F()).optional(),allowlistKeywords:xe(F()).optional(),presets:G({politics:pe().optional(),ragebait:pe().optional(),spoilers:pe().optional(),clickbait:pe().optional()}).optional()}).optional(),byokKey:F().optional()})}),nn=G({type:ae(H.CLEAR_CACHE)}),sn=G({type:ae(H.GET_STATS)}),an=G({type:ae(H.INCREMENT_STAT),key:ae("totalFiltered"),amount:Rt().optional()}),on=G({type:ae(H.TEST_CONNECTION),apiKey:F(),model:F().optional(),endpoint:F().optional()});Qr("type",[en,tn,rn,nn,sn,an,on]);async function cn(r){return lt.runtime.sendMessage(r)}var je={exports:{}},ln=je.exports,Nt;function dn(){return Nt||(Nt=1,(function(r,e){(function(t,n){n(r)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:ln,function(t){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)t.exports=globalThis.browser;else{const n="The message port closed before a response was received.",s=a=>{const i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(l,m=void 0){super(m),this.createItem=l}get(l){return this.has(l)||this.set(l,this.createItem(l)),super.get(l)}}const b=c=>c&&typeof c=="object"&&typeof c.then=="function",h=(c,l)=>(...m)=>{a.runtime.lastError?c.reject(new Error(a.runtime.lastError.message)):l.singleCallbackArg||m.length<=1&&l.singleCallbackArg!==!1?c.resolve(m[0]):c.resolve(m)},A=c=>c==1?"argument":"arguments",j=(c,l)=>function(w,...N){if(N.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${A(l.minArgs)} for ${c}(), got ${N.length}`);if(N.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${A(l.maxArgs)} for ${c}(), got ${N.length}`);return new Promise((L,T)=>{if(l.fallbackToNoCallback)try{w[c](...N,h({resolve:L,reject:T},l))}catch(p){console.warn(`${c} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,p),w[c](...N),l.fallbackToNoCallback=!1,l.noCallback=!0,L()}else l.noCallback?(w[c](...N),L()):w[c](...N,h({resolve:L,reject:T},l))})},U=(c,l,m)=>new Proxy(l,{apply(w,N,L){return m.call(N,c,...L)}});let W=Function.call.bind(Object.prototype.hasOwnProperty);const d=(c,l={},m={})=>{let w=Object.create(null),N={has(T,p){return p in c||p in w},get(T,p,O){if(p in w)return w[p];if(!(p in c))return;let E=c[p];if(typeof E=="function")if(typeof l[p]=="function")E=U(c,c[p],l[p]);else if(W(m,p)){let q=j(p,m[p]);E=U(c,c[p],q)}else E=E.bind(c);else if(typeof E=="object"&&E!==null&&(W(l,p)||W(m,p)))E=d(E,l[p],m[p]);else if(W(m,"*"))E=d(E,l[p],m["*"]);else return Object.defineProperty(w,p,{configurable:!0,enumerable:!0,get(){return c[p]},set(q){c[p]=q}}),E;return w[p]=E,E},set(T,p,O,E){return p in w?w[p]=O:c[p]=O,!0},defineProperty(T,p,O){return Reflect.defineProperty(w,p,O)},deleteProperty(T,p){return Reflect.deleteProperty(w,p)}},L=Object.create(c);return new Proxy(L,N)},g=c=>({addListener(l,m,...w){l.addListener(c.get(m),...w)},hasListener(l,m){return l.hasListener(c.get(m))},removeListener(l,m){l.removeListener(c.get(m))}}),u=new o(c=>typeof c!="function"?c:function(m){const w=d(m,{},{getContent:{minArgs:0,maxArgs:0}});c(w)}),y=new o(c=>typeof c!="function"?c:function(m,w,N){let L=!1,T,p=new Promise(V=>{T=function(Z){L=!0,V(Z)}}),O;try{O=c(m,w,T)}catch(V){O=Promise.reject(V)}const E=O!==!0&&b(O);if(O!==!0&&!E&&!L)return!1;const q=V=>{V.then(Z=>{N(Z)},Z=>{let Y;Z&&(Z instanceof Error||typeof Z.message=="string")?Y=Z.message:Y="An unexpected error occurred",N({__mozWebExtensionPolyfillReject__:!0,message:Y})}).catch(Z=>{console.error("Failed to send onMessage rejected reply",Z)})};return q(E?O:p),!0}),k=({reject:c,resolve:l},m)=>{a.runtime.lastError?a.runtime.lastError.message===n?l():c(new Error(a.runtime.lastError.message)):m&&m.__mozWebExtensionPolyfillReject__?c(new Error(m.message)):l(m)},R=(c,l,m,...w)=>{if(w.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${A(l.minArgs)} for ${c}(), got ${w.length}`);if(w.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${A(l.maxArgs)} for ${c}(), got ${w.length}`);return new Promise((N,L)=>{const T=k.bind(null,{resolve:N,reject:L});w.push(T),m.sendMessage(...w)})},z={devtools:{network:{onRequestFinished:g(u)}},runtime:{onMessage:g(y),onMessageExternal:g(y),sendMessage:R.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:R.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},v={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":v},services:{"*":v},websites:{"*":v}},d(a,z,i)};t.exports=s(chrome)}})})(je)),je.exports}var un=dn();const mn=ot(un),Ze="calmweb-loading",rt="calmweb-raw-toggle",gn=`
  #${Ze} {
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
`;function fn(){const r=window.location.hostname.toLowerCase(),e=window.location.pathname.toLowerCase();return!!(["mail.google","calendar.google","drive.google","docs.google","sheets.google","slides.google","meet.google","github.com","gitlab.com","slack.com","discord.com","notion.so","figma.com","linear.app","trello.com","netflix.com","spotify.com","youtube.com"].some(a=>r.includes(a))||["/login","/signin","/signup","/register","/auth","/account","/settings","/admin","/dashboard","/checkout","/cart"].some(a=>e.startsWith(a))||document.querySelectorAll('input:not([type="hidden"]):not([type="search"]), textarea, select').length>4)}function Mt(){try{if(document.getElementById(Ze))return;document.body.style.setProperty("overflow","hidden","important");const r=document.createElement("div");r.id=Ze,r.innerHTML=`<style>${gn}</style>
      <div class="calmweb-loading-spinner"></div>
      <div class="calmweb-loading-text">Filtering...</div>`,document.body.appendChild(r)}catch(r){console.error("[CalmWeb] Loading screen failed:",r)}}function nt(){document.getElementById(Ze)?.remove()}function ve(){if(document.getElementById(rt))return;const r=document.createElement("div");r.id=rt,r.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',r.title="Filtered View (Ctrl+Shift+R)",Object.assign(r.style,{position:"fixed",bottom:"20px",right:"20px",width:"40px",height:"40px",borderRadius:"50%",background:"#8b5cf6",color:"white",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:"2147483646",boxShadow:"0 4px 24px rgba(139, 92, 246, 0.3)",transition:"transform 0.15s ease",border:"none"}),r.addEventListener("mouseenter",()=>{r.style.transform="scale(1.1)"}),r.addEventListener("mouseleave",()=>{r.style.transform="scale(1)"}),r.addEventListener("click",()=>{r.remove(),Mt(),setTimeout(()=>{nt();try{Ee()}catch(e){console.error(e)}},300)}),document.body.appendChild(r)}function Ot(){document.getElementById(rt)?.remove()}function st(){try{Fe()?(me(),ve()):(Ot(),Ee())}catch(r){console.error("[CalmWeb] Reader toggle failed:",r)}}const hn={matches:["<all_urls>"],runAt:"document_idle",async main(){console.log("[CalmWeb] Reader loaded on",window.location.hostname),document.addEventListener("keydown",t=>{t.ctrlKey&&t.shiftKey&&!t.altKey&&!t.metaKey&&t.key.toLowerCase()==="r"&&(t.preventDefault(),t.stopPropagation(),st()),t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&t.key.toLowerCase()==="r"&&(t.preventDefault(),t.stopPropagation(),st())},!0),mn.runtime.onMessage.addListener(t=>{if(t.type===H.TOGGLE_READER&&st(),t.type===H.OPEN_READER){Ot();try{Fe()||Ee()}catch(n){console.error(n)}}if(t.type===H.CLOSE_READER)try{Fe()&&(me(),ve())}catch(n){console.error(n)}});let r=!0,e={};try{const t=cn({type:H.GET_SETTINGS}),n=new Promise((a,i)=>setTimeout(()=>i(new Error("Settings timeout")),2e3)),s=await Promise.race([t,n]);(s?.reader?.autoOpen===!1||s?.enabled===!1)&&(r=!1),e=s?.reader||{},console.log("[CalmWeb] Settings loaded, filtering:",r)}catch(t){console.warn("[CalmWeb] Settings load failed, defaulting to filter:",t)}if(!r){ve();return}if(fn()){ve();return}console.log("[CalmWeb] Opening reader..."),Mt(),Ee({mode:e.mode||"full",layoutId:e.defaultLayout,font:e.font,fontSize:e.fontSize}).then(()=>{nt(),console.log("[CalmWeb] Reader opened OK")}).catch(t=>{console.error("[CalmWeb] Reader failed:",t),nt(),ve()})}};function yn(){}function ze(r,...e){}const at={debug:(...r)=>ze(console.debug,...r),log:(...r)=>ze(console.log,...r),warn:(...r)=>ze(console.warn,...r),error:(...r)=>ze(console.error,...r)};return(()=>{try{}catch(e){throw at.error('Failed to initialize plugins for "reader"',e),e}let r;try{r=hn.main(),r instanceof Promise&&(r=r.catch(e=>{throw at.error('The unlisted script "reader" crashed on startup!',e),e}))}catch(e){throw at.error('The unlisted script "reader" crashed on startup!',e),e}return r})()})();
reader;