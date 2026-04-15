var textMode=(function(){function e(e){return e}var t=globalThis.browser?.runtime?.id?globalThis.browser:globalThis.chrome,n=Error(`request for lock canceled`),r=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},i=class{constructor(e,t=n){this._value=e,this._cancelError=t,this._queue=[],this._weightedWaiters=[]}acquire(e=1,t=0){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);return new Promise((n,r)=>{let i={resolve:n,reject:r,weight:e,priority:t},a=o(this._queue,e=>t<=e.priority);a===-1&&e<=this._value?this._dispatchItem(i):this._queue.splice(a+1,0,i)})}runExclusive(e){return r(this,arguments,void 0,function*(e,t=1,n=0){let[r,i]=yield this.acquire(t,n);try{return yield e(r)}finally{i()}})}waitForUnlock(e=1,t=0){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);return this._couldLockImmediately(e,t)?Promise.resolve():new Promise(n=>{this._weightedWaiters[e-1]||(this._weightedWaiters[e-1]=[]),a(this._weightedWaiters[e-1],{resolve:n,priority:t})})}isLocked(){return this._value<=0}getValue(){return this._value}setValue(e){this._value=e,this._dispatchQueue()}release(e=1){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);this._value+=e,this._dispatchQueue()}cancel(){this._queue.forEach(e=>e.reject(this._cancelError)),this._queue=[]}_dispatchQueue(){for(this._drainUnlockWaiters();this._queue.length>0&&this._queue[0].weight<=this._value;)this._dispatchItem(this._queue.shift()),this._drainUnlockWaiters()}_dispatchItem(e){let t=this._value;this._value-=e.weight,e.resolve([t,this._newReleaser(e.weight)])}_newReleaser(e){let t=!1;return()=>{t||(t=!0,this.release(e))}}_drainUnlockWaiters(){if(this._queue.length===0)for(let e=this._value;e>0;e--){let t=this._weightedWaiters[e-1];t&&(t.forEach(e=>e.resolve()),this._weightedWaiters[e-1]=[])}else{let e=this._queue[0].priority;for(let t=this._value;t>0;t--){let n=this._weightedWaiters[t-1];if(!n)continue;let r=n.findIndex(t=>t.priority<=e);(r===-1?n:n.splice(0,r)).forEach((e=>e.resolve()))}}}_couldLockImmediately(e,t){return(this._queue.length===0||this._queue[0].priority<t)&&e<=this._value}};function a(e,t){let n=o(e,e=>t.priority<=e.priority);e.splice(n+1,0,t)}function o(e,t){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return-1}var s=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},c=class{constructor(e){this._semaphore=new i(1,e)}acquire(){return s(this,arguments,void 0,function*(e=0){let[,t]=yield this._semaphore.acquire(1,e);return t})}runExclusive(e,t=0){return this._semaphore.runExclusive(()=>e(),1,t)}isLocked(){return this._semaphore.isLocked()}waitForUnlock(e=0){return this._semaphore.waitForUnlock(1,e)}release(){this._semaphore.isLocked()&&this._semaphore.release()}cancel(){return this._semaphore.cancel()}},l=Object.prototype.hasOwnProperty;function u(e,t){var n,r;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&u(e[r],t[r]););return r===-1}if(!n||typeof e==`object`){for(n in r=0,e)if(l.call(e,n)&&++r&&!l.call(t,n)||!(n in t)||!u(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!==e&&t!==t}var d=f();function f(){let e={local:p(`local`),session:p(`session`),sync:p(`sync`),managed:p(`managed`)},n=t=>{let n=e[t];if(n==null){let n=Object.keys(e).join(`, `);throw Error(`Invalid area "${t}". Options: ${n}`)}return n},r=e=>{let t=e.indexOf(`:`),r=e.substring(0,t),i=e.substring(t+1);if(i==null)throw Error(`Storage key should be in the form of "area:key", but received "${e}"`);return{driverArea:r,driverKey:i,driver:n(r)}},i=e=>e+`$`,a=(e,t)=>{let n={...e};return Object.entries(t).forEach(([e,t])=>{t==null?delete n[e]:n[e]=t}),n},o=(e,t)=>e??t??null,s=e=>typeof e==`object`&&!Array.isArray(e)?e:{},l=async(e,t,n)=>o(await e.getItem(t),n?.fallback??n?.defaultValue),u=async(e,t)=>{let n=i(t);return s(await e.getItem(n))},d=async(e,t,n)=>{await e.setItem(t,n??null)},f=async(e,t,n)=>{let r=i(t),o=s(await e.getItem(r));await e.setItem(r,a(o,n))},h=async(e,t,n)=>{if(await e.removeItem(t),n?.removeMeta){let n=i(t);await e.removeItem(n)}},g=async(e,t,n)=>{let r=i(t);if(n==null)await e.removeItem(r);else{let t=s(await e.getItem(r));[n].flat().forEach(e=>delete t[e]),await e.setItem(r,t)}},_=(e,t,n)=>e.watch(t,n);return{getItem:async(e,t)=>{let{driver:n,driverKey:i}=r(e);return await l(n,i,t)},getItems:async t=>{let n=new Map,i=new Map,a=[];t.forEach(e=>{let t,o;typeof e==`string`?t=e:`getValue`in e?(t=e.key,o={fallback:e.fallback}):(t=e.key,o=e.options),a.push(t);let{driverArea:s,driverKey:c}=r(t),l=n.get(s)??[];n.set(s,l.concat(c)),i.set(t,o)});let s=new Map;return await Promise.all(Array.from(n.entries()).map(async([t,n])=>{(await e[t].getItems(n)).forEach(e=>{let n=`${t}:${e.key}`,r=i.get(n),a=o(e.value,r?.fallback??r?.defaultValue);s.set(n,a)})})),a.map(e=>({key:e,value:s.get(e)}))},getMeta:async e=>{let{driver:t,driverKey:n}=r(e);return await u(t,n)},getMetas:async e=>{let n=e.map(e=>{let t=typeof e==`string`?e:e.key,{driverArea:n,driverKey:a}=r(t);return{key:t,driverArea:n,driverKey:a,driverMetaKey:i(a)}}),a=n.reduce((e,t)=>(e[t.driverArea]??=[],e[t.driverArea].push(t),e),{}),o={};return await Promise.all(Object.entries(a).map(async([e,n])=>{let r=await t.storage[e].get(n.map(e=>e.driverMetaKey));n.forEach(e=>{o[e.key]=r[e.driverMetaKey]??{}})})),n.map(e=>({key:e.key,meta:o[e.key]}))},setItem:async(e,t)=>{let{driver:n,driverKey:i}=r(e);await d(n,i,t)},setItems:async e=>{let t={};e.forEach(e=>{let{driverArea:n,driverKey:i}=r(`key`in e?e.key:e.item.key);t[n]??=[],t[n].push({key:i,value:e.value})}),await Promise.all(Object.entries(t).map(async([e,t])=>{await n(e).setItems(t)}))},setMeta:async(e,t)=>{let{driver:n,driverKey:i}=r(e);await f(n,i,t)},setMetas:async e=>{let t={};e.forEach(e=>{let{driverArea:n,driverKey:i}=r(`key`in e?e.key:e.item.key);t[n]??=[],t[n].push({key:i,properties:e.meta})}),await Promise.all(Object.entries(t).map(async([e,t])=>{let r=n(e),o=t.map(({key:e})=>i(e)),c=await r.getItems(o),l=Object.fromEntries(c.map(({key:e,value:t})=>[e,s(t)])),u=t.map(({key:e,properties:t})=>{let n=i(e);return{key:n,value:a(l[n]??{},t)}});await r.setItems(u)}))},removeItem:async(e,t)=>{let{driver:n,driverKey:i}=r(e);await h(n,i,t)},removeItems:async e=>{let t={};e.forEach(e=>{let n,a;typeof e==`string`?n=e:`getValue`in e?n=e.key:`item`in e?(n=e.item.key,a=e.options):(n=e.key,a=e.options);let{driverArea:o,driverKey:s}=r(n);t[o]??=[],t[o].push(s),a?.removeMeta&&t[o].push(i(s))}),await Promise.all(Object.entries(t).map(async([e,t])=>{await n(e).removeItems(t)}))},clear:async e=>{await n(e).clear()},removeMeta:async(e,t)=>{let{driver:n,driverKey:i}=r(e);await g(n,i,t)},snapshot:async(e,t)=>{let r=await n(e).snapshot();return t?.excludeKeys?.forEach(e=>{delete r[e],delete r[i(e)]}),r},restoreSnapshot:async(e,t)=>{await n(e).restoreSnapshot(t)},watch:(e,t)=>{let{driver:n,driverKey:i}=r(e);return _(n,i,t)},unwatch(){Object.values(e).forEach(e=>{e.unwatch()})},defineItem:(e,t)=>{let{driver:n,driverKey:a}=r(e),{version:o=1,migrations:s={},onMigrationComplete:p,debug:v=!1}=t??{};if(o<1)throw Error(`Storage item version cannot be less than 1. Initial versions should be set to 1, not 0.`);let y=!1,b=async()=>{let t=i(a),[{value:r},{value:c}]=await n.getItems([a,t]);if(y=r==null&&c?.v==null&&!!o,r==null)return;let l=c?.v??1;if(l>o)throw Error(`Version downgrade detected (v${l} -> v${o}) for "${e}"`);if(l===o)return;v&&console.debug(`[@wxt-dev/storage] Running storage migration for ${e}: v${l} -> v${o}`);let u=Array.from({length:o-l},(e,t)=>l+t+1),d=r;for(let t of u)try{d=await s?.[t]?.(d)??d,v&&console.debug(`[@wxt-dev/storage] Storage migration processed for version: v${t}`)}catch(n){throw new m(e,t,{cause:n})}await n.setItems([{key:a,value:d},{key:t,value:{...c,v:o}}]),v&&console.debug(`[@wxt-dev/storage] Storage migration completed for ${e} v${o}`,{migratedValue:d}),p?.(d,o)},x=t?.migrations==null?Promise.resolve():b().catch(t=>{console.error(`[@wxt-dev/storage] Migration failed for ${e}`,t)}),S=new c,C=()=>t?.fallback??t?.defaultValue??null,w=()=>S.runExclusive(async()=>{let e=await n.getItem(a);if(e!=null||t?.init==null)return e;let r=await t.init();return await n.setItem(a,r),e==null&&o>1&&await f(n,a,{v:o}),r});return x.then(w),{key:e,get defaultValue(){return C()},get fallback(){return C()},getValue:async()=>(await x,t?.init?await w():await l(n,a,t)),getMeta:async()=>(await x,await u(n,a)),setValue:async e=>{await x,y?(y=!1,await Promise.all([d(n,a,e),f(n,a,{v:o})])):await d(n,a,e)},setMeta:async e=>(await x,await f(n,a,e)),removeValue:async e=>(await x,await h(n,a,e)),removeMeta:async e=>(await x,await g(n,a,e)),watch:e=>_(n,a,(t,n)=>e(t??C(),n??C())),migrate:b}}}}function p(e){let n=()=>{if(t.runtime==null)throw Error(`'wxt/storage' must be loaded in a web extension environment

 - If thrown during a build, see https://github.com/wxt-dev/wxt/issues/371
 - If thrown during tests, mock 'wxt/browser' correctly. See https://wxt.dev/guide/go-further/testing.html
`);if(t.storage==null)throw Error(`You must add the 'storage' permission to your manifest to use 'wxt/storage'`);let n=t.storage[e];if(n==null)throw Error(`"browser.storage.${e}" is undefined`);return n},r=new Set;return{getItem:async e=>(await n().get(e))[e],getItems:async e=>{let t=await n().get(e);return e.map(e=>({key:e,value:t[e]??null}))},setItem:async(e,t)=>{t==null?await n().remove(e):await n().set({[e]:t})},setItems:async e=>{let t=e.reduce((e,{key:t,value:n})=>(e[t]=n,e),{});await n().set(t)},removeItem:async e=>{await n().remove(e)},removeItems:async e=>{await n().remove(e)},clear:async()=>{await n().clear()},snapshot:async()=>await n().get(),restoreSnapshot:async e=>{await n().set(e)},watch(e,t){let i=n=>{let r=n[e];r==null||u(r.newValue,r.oldValue)||t(r.newValue??null,r.oldValue??null)};return n().onChanged.addListener(i),r.add(i),()=>{n().onChanged.removeListener(i),r.delete(i)}},unwatch(){r.forEach(e=>{n().onChanged.removeListener(e)}),r.clear()}}}var m=class extends Error{constructor(e,t,n){super(`v${t} migration failed for "${e}"`,n),this.key=e,this.version=t}},h=d.defineItem(`sync:calmweb-textmode-settings`,{fallback:{enabled:!1,skipList:{domains:[],patterns:[]},mediaAllowlist:{domains:[],types:[`image`,`video`,`audio`]},layout:{fontFamily:`Georgia, serif`,fontSize:18,lineHeight:1.7,maxWidth:700,padding:32,theme:`light`}}});async function g(){return(await h.getValue()).skipList}function _(e,t){try{let n=new URL(e).hostname.toLowerCase();if(t.domains.includes(n))return!0;for(let e of t.domains)if(n===e||n.endsWith(`.${e}`))return!0;for(let n of t.patterns)if(v(e,n))return!0;return!1}catch{return!1}}function v(e,t){try{if(t.startsWith(`*://`)){let n=t.replace(/\./g,`\\.`).replace(/\*/g,`.*`).replace(/\?/g,`.`);return RegExp(`^${n}`,`i`).test(e)}if(t.startsWith(`*.`)){let n=t.slice(2).toLowerCase(),r=new URL(e);return r.hostname===n||r.hostname.endsWith(`.${n}`)}return new URL(e).hostname.toLowerCase()===t.toLowerCase()}catch{return!1}}async function y(){return(await h.getValue()).enabled}var b=`script,style,noscript,iframe,embed,object,video,audio,img,picture,figure,svg,canvas,nav,header,footer,aside,form,button,input,select,textarea,.ad,.ads,.advertisement,.social,.share,.social-share,.share-buttons,[class*="comment"],[class*="related"],[class*="sidebar"],[class*="newsletter"],[class*="subscribe"],[class*="popup"],[class*="modal"],[class*="overlay"],[class*="banner"],[class*="cookie"],[class*="GDPR"],[id*="cookie"],[id*="newsletter"],[role="button"],[role="navigation"],[role="banner"],[role="contentinfo"],[aria-hidden="true"],[data-ad],[data-advertisement],yt-formatted-string,ytd-compact-video-renderer,ytd-video-renderer,ytd-rich-item-renderer,ytd-grid-video-renderer`.split(`,`),x=[`article`,`[role="article"]`,`main`,`[role="main"]`,`.post-content`,`.article-content`,`.entry-content`,`.post-body`,`.article-body`,`.story-body`,`.content-body`,`#article-body`,`#content-body`,`.node-content`,`.field-body`],S=[`h1.title`,`h1.article-title`,`h1.post-title`,`h1.entry-title`,`article h1`,`.article-header h1`,`.post-header h1`,`meta[property="og:title"]`,`meta[name="twitter:title"]`,`title`],C=[`[rel="author"]`,`.author`,`.byline`,`[class*="author"]`,`[class*="byline"]`,`meta[name="author"]`],w=[`time[datetime]`,`time[pubdate]`,`.date`,`.published`,`[class*="date"]`,`[class*="time"]`,`meta[property="article:published_time"]`];function T(e,t){let n=e.querySelector(t);return n&&(n.getAttribute(`content`)||n.textContent?.trim())||null}function E(e){let t=e.split(/\s+/).filter(e=>e.length>0).length;return Math.max(1,Math.ceil(t/200))}function D(e){let t=e.cloneNode(!0);for(let e of b)try{t.querySelectorAll(e).forEach(e=>e.remove())}catch{continue}for(let e of Array.from(t.querySelectorAll(`[onclick], [onload], [onerror]`)))e.removeAttribute(`onclick`),e.removeAttribute(`onload`),e.removeAttribute(`onerror`);t.querySelectorAll(`a`).forEach(e=>{let t=document.createElement(`span`);t.textContent=e.textContent||``,e.replaceWith(t)}),t.querySelectorAll(`h1,h2,h3,h4,h5,h6`).forEach(e=>{e.innerHTML=`<strong>${e.textContent||``}</strong>`}),t.querySelectorAll(`blockquote`).forEach(e=>{e.innerHTML=`<em>"${e.textContent||``}"</em>`}),t.querySelectorAll(`ul, ol`).forEach(e=>{let t=Array.from(e.querySelectorAll(`li`)).map(e=>`• ${e.textContent||``}`).join(`
`),n=document.createElement(`p`);n.innerHTML=t.replace(/\n/g,`<br>`),e.replaceWith(n)}),t.querySelectorAll(`div, section, article`).forEach(e=>{e.textContent!==e.innerHTML&&e.querySelectorAll(`br`).forEach(e=>e.replaceWith(document.createTextNode(`
`)))});let n=t.innerHTML;return n=n.replace(/<br\s*\/?>/gi,`
`),n=n.replace(/<\/p><p>/gi,`

`),n=n.replace(/<[^>]+>/g,``),n=n.replace(/&nbsp;/g,` `),n=n.replace(/&amp;/g,`&`),n=n.replace(/&lt;/g,`<`),n=n.replace(/&gt;/g,`>`),n=n.replace(/&quot;/g,`"`),n=n.replace(/&#39;/g,`'`),n=n.replace(/\n{3,}/g,`

`),n=n.trim(),n}function O(e){for(let t of x)try{let n=e.querySelector(t);if(n&&n.textContent&&n.textContent.length>200)return n}catch{continue}let t=e instanceof Document?e.body:e;if(!t)return null;let n=Array.from(t.querySelectorAll(`div, section`)),r=null,i=0;for(let e of n){if((e.textContent||``).length<200)continue;let t=e.querySelectorAll(`p`),n=e.querySelectorAll(`a`),a=e.querySelectorAll(`h1, h2, h3, h4, h5, h6`),o=t.length*10+n.length*2+a.length*5;o>i&&(i=o,r=e)}return r||t}function k(e){for(let t of S)if(t.startsWith(`meta`)){let n=T(e,t);if(n)return n}else{let n=e.querySelector(t);if(n){let e=n.textContent?.trim();if(e)return e}}return e.title||`Untitled`}function A(e){for(let t of C){let n=e.querySelector(t);if(n){let e=n.getAttribute(`content`)||n.textContent?.trim();if(e)return e}}}function ee(e){for(let t of w)if(t.startsWith(`meta`)){let n=T(e,t);if(n)return n}else{let n=e.querySelector(t);if(n){let e=n.getAttribute(`datetime`);if(e)return e;let t=n.textContent?.trim();if(t)return t}}}function j(e){let t=T(e,`meta[property="og:description"]`);if(t)return t;let n=T(e,`meta[name="description"]`);if(n)return n}function M(e){let t=k(e),n=O(e),r=n?D(n):``,i=e.location.hostname,a=e.location.href,o=A(e),s=ee(e),c=j(e);return{title:t,content:r,sourceName:i,sourceUrl:a,author:o,date:s,readingTime:E(r),excerpt:c}}function N(e){return M(e)}var P=d.defineItem(`sync:calmweb-textmode-settings`,{fallback:{enabled:!1,skipList:{domains:[],patterns:[]},mediaAllowlist:{domains:[],types:[`image`,`video`,`audio`]},layout:{fontFamily:`Georgia, serif`,fontSize:18,lineHeight:1.7,maxWidth:700,padding:32,theme:`light`}}});async function F(){return(await P.getValue()).layout}function I(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}async function L(e){let t=await F(),n=document.createElement(`div`);n.id=`calmweb-text-overlay`;let r=n.attachShadow({mode:`open`}),i=document.createElement(`style`);i.textContent=B(),r.appendChild(i);let a=document.createElement(`div`);return a.className=`calmweb-text-container`,a.innerHTML=`
    <header class="calmweb-text-header">
      <h1>${I(e.title)}</h1>
      <div class="calmweb-text-meta">
        ${e.sourceName?`<span class="calmweb-source">${I(e.sourceName)}</span>`:``}
        ${e.author?`<span class="calmweb-author">${I(e.author)}</span>`:``}
        ${e.date?`<time class="calmweb-date">${I(e.date)}</time>`:``}
        ${e.readingTime?`<span class="calmweb-reading-time">${e.readingTime} min read</span>`:``}
      </div>
    </header>
    <main class="calmweb-text-content">
      ${e.content}
    </main>
    <footer class="calmweb-text-footer">
      <a href="${I(e.sourceUrl)}" target="_blank" rel="noopener">View original</a>
      <span class="calmweb-badge">CalmWeb</span>
    </footer>
  `,r.appendChild(a),R(r,t),n}function R(e,t){let n=document.createElement(`style`);n.textContent=`
    :host {
      ${z(t.theme)}
      --calmweb-font-family: ${t.fontFamily};
      --calmweb-font-size: ${t.fontSize}px;
      --calmweb-line-height: ${t.lineHeight};
      --calmweb-max-width: ${t.maxWidth}px;
      --calmweb-padding: ${t.padding}px;
    }
  `,e.insertBefore(n,e.firstChild)}function z(e){switch(e){case`dark`:return`
        --calmweb-bg: #1a1a1a;
        --calmweb-text: #e5e5e5;
        --calmweb-accent: #6b9fff;
        --calmweb-border: #333;
        --calmweb-muted: #888;
      `;case`sepia`:return`
        --calmweb-bg: #f4ecd8;
        --calmweb-text: #433422;
        --calmweb-accent: #8b6914;
        --calmweb-border: #c9b896;
        --calmweb-muted: #7a6a4f;
      `;default:return`
        --calmweb-bg: #fafafa;
        --calmweb-text: #1a1a1a;
        --calmweb-accent: #2563eb;
        --calmweb-border: #e5e5e5;
        --calmweb-muted: #666;
      `}}function B(){return`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--calmweb-bg, #fafafa);
      color: var(--calmweb-text, #1a1a1a);
      font-family: var(--calmweb-font-family, Georgia, serif);
      font-size: var(--calmweb-font-size, 18px);
      line-height: var(--calmweb-line-height, 1.7);
      overflow-y: auto;
      z-index: 2147483647;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .calmweb-text-container {
      max-width: var(--calmweb-max-width, 700px);
      margin: 0 auto;
      padding: var(--calmweb-padding, 32px);
    }

    .calmweb-text-header {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--calmweb-border, #e5e5e5);
    }

    .calmweb-text-header h1 {
      font-size: 2em;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
      line-height: 1.2;
    }

    .calmweb-text-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1.5rem;
      font-size: 0.85em;
      color: var(--calmweb-muted, #666);
    }

    .calmweb-text-meta > span::before {
      content: '';
    }

    .calmweb-source {
      font-weight: 500;
    }

    .calmweb-text-content {
      margin: 2rem 0;
    }

    .calmweb-text-content p {
      margin: 1em 0;
    }

    .calmweb-text-content h1,
    .calmweb-text-content h2,
    .calmweb-text-content h3,
    .calmweb-text-content h4,
    .calmweb-text-content h5,
    .calmweb-text-content h6 {
      margin: 1.5em 0 0.5em 0;
      font-weight: 600;
      line-height: 1.3;
    }

    .calmweb-text-content h1 { font-size: 1.8em; }
    .calmweb-text-content h2 { font-size: 1.5em; }
    .calmweb-text-content h3 { font-size: 1.25em; }
    .calmweb-text-content h4 { font-size: 1.1em; }

    .calmweb-text-content a {
      color: var(--calmweb-accent, #2563eb);
      text-decoration: underline;
    }

    .calmweb-text-content blockquote {
      margin: 1.5em 0;
      padding: 0.5em 1.5em;
      border-left: 3px solid var(--calmweb-border, #e5e5e5);
      font-style: italic;
      color: var(--calmweb-muted, #666);
    }

    .calmweb-text-content ul,
    .calmweb-text-content ol {
      margin: 1em 0;
      padding-left: 2em;
    }

    .calmweb-text-content li {
      margin: 0.5em 0;
    }

    .calmweb-text-content pre,
    .calmweb-text-content code {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.9em;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .calmweb-text-content pre {
      padding: 1em;
      overflow-x: auto;
    }

    .calmweb-text-content code {
      padding: 0.2em 0.4em;
    }

    .calmweb-text-content pre code {
      padding: 0;
      background: none;
    }

    .calmweb-text-content img,
    .calmweb-text-content video,
    .calmweb-text-content audio,
    .calmweb-text-content iframe {
      display: none;
    }

    .calmweb-text-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
      padding-top: 1rem;
      border-top: 1px solid var(--calmweb-border, #e5e5e5);
      font-size: 0.85em;
      color: var(--calmweb-muted, #666);
    }

    .calmweb-text-footer a {
      color: var(--calmweb-accent, #2563eb);
      text-decoration: none;
    }

    .calmweb-text-footer a:hover {
      text-decoration: underline;
    }

    .calmweb-badge {
      background: var(--calmweb-accent, #2563eb);
      color: white;
      padding: 0.25em 0.75em;
      border-radius: 999px;
      font-size: 0.75em;
      font-weight: 500;
    }
  `}function V(){return document.getElementById(`calmweb-text-overlay`)!==null}var H=d.defineItem(`sync:calmweb-textmode-settings`,{fallback:{enabled:!1,skipList:{domains:[],patterns:[]},mediaAllowlist:{domains:[],types:[`image`,`video`,`audio`]},layout:{fontFamily:`Georgia, serif`,fontSize:18,lineHeight:1.7,maxWidth:700,padding:32,theme:`light`}}});async function U(){return(await H.getValue()).mediaAllowlist}function W(e,t,n){if(!n.types.includes(t))return!1;try{let t=new URL(e).hostname.toLowerCase();for(let e of n.domains){let n=e.toLowerCase();if(t===n||t.endsWith(`.${n}`))return!0}return!1}catch{return!e.startsWith(`http://`)&&!e.startsWith(`https://`)&&!e.startsWith(`//`)}}function G(e){let t=e.tagName.toUpperCase();return t===`IMG`||t===`PICTURE`?`image`:t===`VIDEO`||t===`EMBED`||t===`OBJECT`?`video`:t===`AUDIO`||t===`SOURCE`?`audio`:e.classList.contains(`video-container`)||e.getAttribute(`data-video-src`)?`video`:e.classList.contains(`audio-container`)||e.getAttribute(`data-audio-src`)?`audio`:null}async function K(e,t={}){let n=await U(),r=[];for(let t of[`img`,`video`,`audio`,`source`,`picture`,`figure`,`svg`,`iframe[src*="youtube"]`,`iframe[src*="vimeo"]`,`iframe[src*="video"]`,`iframe[src*="twitter"]`,`iframe[src*="instagram"]`,`embed`,`object`,`[class*="video-container"]`,`[class*="media-wrapper"]`,`[data-video-src]`,`[data-audio-src]`])try{let i=e.querySelectorAll(t);for(let e of Array.from(i)){if(!(e instanceof HTMLElement))continue;let t=G(e);if(!t)continue;let i=null;i=e.tagName===`SOURCE`?e.src:e.tagName===`VIDEO`||e.tagName===`AUDIO`?e.currentSrc||e.src:e.tagName===`IMG`?e.src:e.getAttribute(`src`)||e.getAttribute(`data-src`)||e.getAttribute(`data-video-src`)||e.getAttribute(`data-audio-src`),i&&(W(i,t,n)||r.push(e))}}catch{continue}return r}function q(e){e.style.display=`none`,e.setAttribute(`data-calmweb-media-blocked`,`true`)}async function J(e){let t=await K(e);for(let e of t)q(e);return t.length}function Y(e,t){let n=new MutationObserver(async e=>{let n=0;for(let t of e)for(let e of Array.from(t.addedNodes)){if(!(e instanceof HTMLElement))continue;let t=e.querySelectorAll?.(`img, video, audio, source, iframe, picture, svg, embed, object`);if(t)for(let e of Array.from(t)){if(!(e instanceof HTMLElement))continue;let t=G(e);if(!t)continue;let r=null;if(r=e.tagName===`SOURCE`?e.src:e.tagName===`VIDEO`||e.tagName===`AUDIO`?e.currentSrc||e.src:e.tagName===`IMG`?e.src:e.getAttribute(`src`)||e.getAttribute(`data-src`),!r)continue;let i=await U();W(r,t,i)||(q(e),n++)}let r=G(e);if(r){let t=null;if(e.tagName===`SOURCE`?t=e.src:e.tagName===`VIDEO`||e.tagName===`AUDIO`?t=e.currentSrc||e.src:e.tagName===`IMG`&&(t=e.src),t){let i=await U();W(t,r,i)||(q(e),n++)}}}n>0&&t&&t(n)});return n.observe(e,{childList:!0,subtree:!0}),n}var X=e({matches:[`<all_urls>`],runAt:`document_idle`,async main(){console.log(`[CalmWeb Text Mode] Starting on:`,window.location.href);let e=await g();if(_(window.location.href,e)){console.log(`[CalmWeb Text Mode] Skipping - URL in skip list`);return}if(!await y()){console.log(`[CalmWeb Text Mode] Text mode disabled`);return}if(V()){console.log(`[CalmWeb Text Mode] Overlay already active`);return}console.log(`[CalmWeb Text Mode] Activating text mode...`),await Z()}});async function Z(){try{let e=N(document);if(!e.content||e.content.length<50){console.log(`[CalmWeb Text Mode] Insufficient content, skipping`);return}console.log(`[CalmWeb Text Mode] Extracted content:`,{title:e.title,readingTime:e.readingTime,contentLength:e.content.length});let t=await J(document);console.log(`[CalmWeb Text Mode] Blocked`,t,`media elements`);let n=await L({title:e.title,content:Q(e.content),sourceUrl:e.sourceUrl||window.location.href,sourceName:e.sourceName,author:e.author,date:e.date,readingTime:e.readingTime});document.body.appendChild(n);let r=Y(document.body,e=>{console.log(`[CalmWeb Text Mode] Blocked`,e,`additional media elements`)});window.__calmwebTextModeObserver=r,console.log(`[CalmWeb Text Mode] Text overlay activated successfully`)}catch(e){console.error(`[CalmWeb Text Mode] Error activating text mode:`,e)}}function Q(e){return e.split(/\n\n+/).map(e=>e.trim()).filter(e=>e.length>0).map(e=>`<p>${te(e).replace(/\n/g,`<br>`)}</p>`).join(`
`)}function te(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}var $={debug:(...e)=>([...e],void 0),log:(...e)=>([...e],void 0),warn:(...e)=>([...e],void 0),error:(...e)=>([...e],void 0)};return(()=>{let e;try{e=X.main(),e instanceof Promise&&(e=e.catch(e=>{throw $.error(`The unlisted script "text-mode" crashed on startup!`,e),e}))}catch(e){throw $.error(`The unlisted script "text-mode" crashed on startup!`,e),e}return e})()})();
textMode;