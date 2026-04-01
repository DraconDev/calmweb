var youtube=(function(){var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));function l(e){return e}var u=c(o(((e,t)=>{(function(n,r){if(typeof define==`function`&&define.amd)define(`webextension-polyfill`,[`module`],r);else if(e!==void 0)r(t);else{var i={exports:{}};r(i),n.browser=i.exports}})(typeof globalThis<`u`?globalThis:typeof self<`u`?self:e,function(e){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw Error(`This script should only be loaded in a browser extension.`);globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id?e.exports=globalThis.browser:e.exports=(e=>{let t={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(t).length===0)throw Error(`api-metadata.json has not been included in browser-polyfill`);class n extends WeakMap{constructor(e,t=void 0){super(t),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}let r=e=>e&&typeof e==`object`&&typeof e.then==`function`,i=(t,n)=>(...r)=>{e.runtime.lastError?t.reject(Error(e.runtime.lastError.message)):n.singleCallbackArg||r.length<=1&&n.singleCallbackArg!==!1?t.resolve(r[0]):t.resolve(r)},a=e=>e==1?`argument`:`arguments`,o=(e,t)=>function(n,...r){if(r.length<t.minArgs)throw Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${r.length}`);if(r.length>t.maxArgs)throw Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${r.length}`);return new Promise((a,o)=>{if(t.fallbackToNoCallback)try{n[e](...r,i({resolve:a,reject:o},t))}catch(i){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),n[e](...r),t.fallbackToNoCallback=!1,t.noCallback=!0,a()}else t.noCallback?(n[e](...r),a()):n[e](...r,i({resolve:a,reject:o},t))})},s=(e,t,n)=>new Proxy(t,{apply(t,r,i){return n.call(r,e,...i)}}),c=Function.call.bind(Object.prototype.hasOwnProperty),l=(e,t={},n={})=>{let r=Object.create(null);return new Proxy(Object.create(e),{has(t,n){return n in e||n in r},get(i,a,u){if(a in r)return r[a];if(!(a in e))return;let d=e[a];if(typeof d==`function`)if(typeof t[a]==`function`)d=s(e,e[a],t[a]);else if(c(n,a)){let t=o(a,n[a]);d=s(e,e[a],t)}else d=d.bind(e);else if(typeof d==`object`&&d&&(c(t,a)||c(n,a)))d=l(d,t[a],n[a]);else if(c(n,`*`))d=l(d,t[a],n[`*`]);else return Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get(){return e[a]},set(t){e[a]=t}}),d;return r[a]=d,d},set(t,n,i,a){return n in r?r[n]=i:e[n]=i,!0},defineProperty(e,t,n){return Reflect.defineProperty(r,t,n)},deleteProperty(e,t){return Reflect.deleteProperty(r,t)}})},u=e=>({addListener(t,n,...r){t.addListener(e.get(n),...r)},hasListener(t,n){return t.hasListener(e.get(n))},removeListener(t,n){t.removeListener(e.get(n))}}),d=new n(e=>typeof e==`function`?function(t){e(l(t,{},{getContent:{minArgs:0,maxArgs:0}}))}:e),f=new n(e=>typeof e==`function`?function(t,n,i){let a=!1,o,s=new Promise(e=>{o=function(t){a=!0,e(t)}}),c;try{c=e(t,n,o)}catch(e){c=Promise.reject(e)}let l=c!==!0&&r(c);return c!==!0&&!l&&!a?!1:((e=>{e.then(e=>{i(e)},e=>{let t;t=e&&(e instanceof Error||typeof e.message==`string`)?e.message:`An unexpected error occurred`,i({__mozWebExtensionPolyfillReject__:!0,message:t})}).catch(e=>{console.error(`Failed to send onMessage rejected reply`,e)})})(l?c:s),!0)}:e),ee=({reject:t,resolve:n},r)=>{e.runtime.lastError?e.runtime.lastError.message===`The message port closed before a response was received.`?n():t(Error(e.runtime.lastError.message)):r&&r.__mozWebExtensionPolyfillReject__?t(Error(r.message)):n(r)},p=(e,t,n,...r)=>{if(r.length<t.minArgs)throw Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${r.length}`);if(r.length>t.maxArgs)throw Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${r.length}`);return new Promise((e,t)=>{let i=ee.bind(null,{resolve:e,reject:t});r.push(i),n.sendMessage(...r)})},te={devtools:{network:{onRequestFinished:u(d)}},runtime:{onMessage:u(f),onMessageExternal:u(f),sendMessage:p.bind(null,`sendMessage`,{minArgs:1,maxArgs:3})},tabs:{sendMessage:p.bind(null,`sendMessage`,{minArgs:2,maxArgs:3})}},m={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return t.privacy={network:{"*":m},services:{"*":m},websites:{"*":m}},l(e,te,t)})(chrome)})}))(),1),d=globalThis.browser?.runtime?.id?globalThis.browser:globalThis.chrome,f=Error(`request for lock canceled`),ee=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},p=class{constructor(e,t=f){this._value=e,this._cancelError=t,this._queue=[],this._weightedWaiters=[]}acquire(e=1,t=0){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);return new Promise((n,r)=>{let i={resolve:n,reject:r,weight:e,priority:t},a=m(this._queue,e=>t<=e.priority);a===-1&&e<=this._value?this._dispatchItem(i):this._queue.splice(a+1,0,i)})}runExclusive(e){return ee(this,arguments,void 0,function*(e,t=1,n=0){let[r,i]=yield this.acquire(t,n);try{return yield e(r)}finally{i()}})}waitForUnlock(e=1,t=0){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);return this._couldLockImmediately(e,t)?Promise.resolve():new Promise(n=>{this._weightedWaiters[e-1]||(this._weightedWaiters[e-1]=[]),te(this._weightedWaiters[e-1],{resolve:n,priority:t})})}isLocked(){return this._value<=0}getValue(){return this._value}setValue(e){this._value=e,this._dispatchQueue()}release(e=1){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);this._value+=e,this._dispatchQueue()}cancel(){this._queue.forEach(e=>e.reject(this._cancelError)),this._queue=[]}_dispatchQueue(){for(this._drainUnlockWaiters();this._queue.length>0&&this._queue[0].weight<=this._value;)this._dispatchItem(this._queue.shift()),this._drainUnlockWaiters()}_dispatchItem(e){let t=this._value;this._value-=e.weight,e.resolve([t,this._newReleaser(e.weight)])}_newReleaser(e){let t=!1;return()=>{t||(t=!0,this.release(e))}}_drainUnlockWaiters(){if(this._queue.length===0)for(let e=this._value;e>0;e--){let t=this._weightedWaiters[e-1];t&&(t.forEach(e=>e.resolve()),this._weightedWaiters[e-1]=[])}else{let e=this._queue[0].priority;for(let t=this._value;t>0;t--){let n=this._weightedWaiters[t-1];if(!n)continue;let r=n.findIndex(t=>t.priority<=e);(r===-1?n:n.splice(0,r)).forEach((e=>e.resolve()))}}}_couldLockImmediately(e,t){return(this._queue.length===0||this._queue[0].priority<t)&&e<=this._value}};function te(e,t){let n=m(e,e=>t.priority<=e.priority);e.splice(n+1,0,t)}function m(e,t){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return-1}var ne=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},re=class{constructor(e){this._semaphore=new p(1,e)}acquire(){return ne(this,arguments,void 0,function*(e=0){let[,t]=yield this._semaphore.acquire(1,e);return t})}runExclusive(e,t=0){return this._semaphore.runExclusive(()=>e(),1,t)}isLocked(){return this._semaphore.isLocked()}waitForUnlock(e=0){return this._semaphore.waitForUnlock(1,e)}release(){this._semaphore.isLocked()&&this._semaphore.release()}cancel(){return this._semaphore.cancel()}},ie=Object.prototype.hasOwnProperty;function h(e,t){var n,r;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&h(e[r],t[r]););return r===-1}if(!n||typeof e==`object`){for(n in r=0,e)if(ie.call(e,n)&&++r&&!ie.call(t,n)||!(n in t)||!h(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!==e&&t!==t}ae();function ae(){let e={local:g(`local`),session:g(`session`),sync:g(`sync`),managed:g(`managed`)},t=t=>{let n=e[t];if(n==null){let n=Object.keys(e).join(`, `);throw Error(`Invalid area "${t}". Options: ${n}`)}return n},n=e=>{let n=e.indexOf(`:`),r=e.substring(0,n),i=e.substring(n+1);if(i==null)throw Error(`Storage key should be in the form of "area:key", but received "${e}"`);return{driverArea:r,driverKey:i,driver:t(r)}},r=e=>e+`$`,i=(e,t)=>{let n={...e};return Object.entries(t).forEach(([e,t])=>{t==null?delete n[e]:n[e]=t}),n},a=(e,t)=>e??t??null,o=e=>typeof e==`object`&&!Array.isArray(e)?e:{},s=async(e,t,n)=>a(await e.getItem(t),n?.fallback??n?.defaultValue),c=async(e,t)=>{let n=r(t);return o(await e.getItem(n))},l=async(e,t,n)=>{await e.setItem(t,n??null)},u=async(e,t,n)=>{let a=r(t),s=o(await e.getItem(a));await e.setItem(a,i(s,n))},f=async(e,t,n)=>{if(await e.removeItem(t),n?.removeMeta){let n=r(t);await e.removeItem(n)}},ee=async(e,t,n)=>{let i=r(t);if(n==null)await e.removeItem(i);else{let t=o(await e.getItem(i));[n].flat().forEach(e=>delete t[e]),await e.setItem(i,t)}},p=(e,t,n)=>e.watch(t,n);return{getItem:async(e,t)=>{let{driver:r,driverKey:i}=n(e);return await s(r,i,t)},getItems:async t=>{let r=new Map,i=new Map,o=[];t.forEach(e=>{let t,a;typeof e==`string`?t=e:`getValue`in e?(t=e.key,a={fallback:e.fallback}):(t=e.key,a=e.options),o.push(t);let{driverArea:s,driverKey:c}=n(t),l=r.get(s)??[];r.set(s,l.concat(c)),i.set(t,a)});let s=new Map;return await Promise.all(Array.from(r.entries()).map(async([t,n])=>{(await e[t].getItems(n)).forEach(e=>{let n=`${t}:${e.key}`,r=i.get(n),o=a(e.value,r?.fallback??r?.defaultValue);s.set(n,o)})})),o.map(e=>({key:e,value:s.get(e)}))},getMeta:async e=>{let{driver:t,driverKey:r}=n(e);return await c(t,r)},getMetas:async e=>{let t=e.map(e=>{let t=typeof e==`string`?e:e.key,{driverArea:i,driverKey:a}=n(t);return{key:t,driverArea:i,driverKey:a,driverMetaKey:r(a)}}),i=t.reduce((e,t)=>(e[t.driverArea]??=[],e[t.driverArea].push(t),e),{}),a={};return await Promise.all(Object.entries(i).map(async([e,t])=>{let n=await d.storage[e].get(t.map(e=>e.driverMetaKey));t.forEach(e=>{a[e.key]=n[e.driverMetaKey]??{}})})),t.map(e=>({key:e.key,meta:a[e.key]}))},setItem:async(e,t)=>{let{driver:r,driverKey:i}=n(e);await l(r,i,t)},setItems:async e=>{let r={};e.forEach(e=>{let{driverArea:t,driverKey:i}=n(`key`in e?e.key:e.item.key);r[t]??=[],r[t].push({key:i,value:e.value})}),await Promise.all(Object.entries(r).map(async([e,n])=>{await t(e).setItems(n)}))},setMeta:async(e,t)=>{let{driver:r,driverKey:i}=n(e);await u(r,i,t)},setMetas:async e=>{let a={};e.forEach(e=>{let{driverArea:t,driverKey:r}=n(`key`in e?e.key:e.item.key);a[t]??=[],a[t].push({key:r,properties:e.meta})}),await Promise.all(Object.entries(a).map(async([e,n])=>{let a=t(e),s=n.map(({key:e})=>r(e)),c=await a.getItems(s),l=Object.fromEntries(c.map(({key:e,value:t})=>[e,o(t)])),u=n.map(({key:e,properties:t})=>{let n=r(e);return{key:n,value:i(l[n]??{},t)}});await a.setItems(u)}))},removeItem:async(e,t)=>{let{driver:r,driverKey:i}=n(e);await f(r,i,t)},removeItems:async e=>{let i={};e.forEach(e=>{let t,a;typeof e==`string`?t=e:`getValue`in e?t=e.key:`item`in e?(t=e.item.key,a=e.options):(t=e.key,a=e.options);let{driverArea:o,driverKey:s}=n(t);i[o]??=[],i[o].push(s),a?.removeMeta&&i[o].push(r(s))}),await Promise.all(Object.entries(i).map(async([e,n])=>{await t(e).removeItems(n)}))},clear:async e=>{await t(e).clear()},removeMeta:async(e,t)=>{let{driver:r,driverKey:i}=n(e);await ee(r,i,t)},snapshot:async(e,n)=>{let i=await t(e).snapshot();return n?.excludeKeys?.forEach(e=>{delete i[e],delete i[r(e)]}),i},restoreSnapshot:async(e,n)=>{await t(e).restoreSnapshot(n)},watch:(e,t)=>{let{driver:r,driverKey:i}=n(e);return p(r,i,t)},unwatch(){Object.values(e).forEach(e=>{e.unwatch()})},defineItem:(e,t)=>{let{driver:i,driverKey:a}=n(e),{version:o=1,migrations:d={},onMigrationComplete:te,debug:m=!1}=t??{};if(o<1)throw Error(`Storage item version cannot be less than 1. Initial versions should be set to 1, not 0.`);let ne=!1,ie=async()=>{let t=r(a),[{value:n},{value:s}]=await i.getItems([a,t]);if(ne=n==null&&s?.v==null&&!!o,n==null)return;let c=s?.v??1;if(c>o)throw Error(`Version downgrade detected (v${c} -> v${o}) for "${e}"`);if(c===o)return;m&&console.debug(`[@wxt-dev/storage] Running storage migration for ${e}: v${c} -> v${o}`);let l=Array.from({length:o-c},(e,t)=>c+t+1),u=n;for(let t of l)try{u=await d?.[t]?.(u)??u,m&&console.debug(`[@wxt-dev/storage] Storage migration processed for version: v${t}`)}catch(n){throw new oe(e,t,{cause:n})}await i.setItems([{key:a,value:u},{key:t,value:{...s,v:o}}]),m&&console.debug(`[@wxt-dev/storage] Storage migration completed for ${e} v${o}`,{migratedValue:u}),te?.(u,o)},h=t?.migrations==null?Promise.resolve():ie().catch(t=>{console.error(`[@wxt-dev/storage] Migration failed for ${e}`,t)}),ae=new re,g=()=>t?.fallback??t?.defaultValue??null,se=()=>ae.runExclusive(async()=>{let e=await i.getItem(a);if(e!=null||t?.init==null)return e;let n=await t.init();return await i.setItem(a,n),e==null&&o>1&&await u(i,a,{v:o}),n});return h.then(se),{key:e,get defaultValue(){return g()},get fallback(){return g()},getValue:async()=>(await h,t?.init?await se():await s(i,a,t)),getMeta:async()=>(await h,await c(i,a)),setValue:async e=>{await h,ne?(ne=!1,await Promise.all([l(i,a,e),u(i,a,{v:o})])):await l(i,a,e)},setMeta:async e=>(await h,await u(i,a,e)),removeValue:async e=>(await h,await f(i,a,e)),removeMeta:async e=>(await h,await ee(i,a,e)),watch:e=>p(i,a,(t,n)=>e(t??g(),n??g())),migrate:ie}}}}function g(e){let t=()=>{if(d.runtime==null)throw Error(`'wxt/storage' must be loaded in a web extension environment

 - If thrown during a build, see https://github.com/wxt-dev/wxt/issues/371
 - If thrown during tests, mock 'wxt/browser' correctly. See https://wxt.dev/guide/go-further/testing.html
`);if(d.storage==null)throw Error(`You must add the 'storage' permission to your manifest to use 'wxt/storage'`);let t=d.storage[e];if(t==null)throw Error(`"browser.storage.${e}" is undefined`);return t},n=new Set;return{getItem:async e=>(await t().get(e))[e],getItems:async e=>{let n=await t().get(e);return e.map(e=>({key:e,value:n[e]??null}))},setItem:async(e,n)=>{n==null?await t().remove(e):await t().set({[e]:n})},setItems:async e=>{let n=e.reduce((e,{key:t,value:n})=>(e[t]=n,e),{});await t().set(n)},removeItem:async e=>{await t().remove(e)},removeItems:async e=>{await t().remove(e)},clear:async()=>{await t().clear()},snapshot:async()=>await t().get(),restoreSnapshot:async e=>{await t().set(e)},watch(e,r){let i=t=>{let n=t[e];n==null||h(n.newValue,n.oldValue)||r(n.newValue??null,n.oldValue??null)};return t().onChanged.addListener(i),n.add(i),()=>{t().onChanged.removeListener(i),n.delete(i)}},unwatch(){n.forEach(e=>{t().onChanged.removeListener(e)}),n.clear()}}}var oe=class extends Error{constructor(e,t,n){super(`v${t} migration failed for "${e}"`,n),this.key=e,this.version=t}};async function se(e){return u.default.runtime.sendMessage(e)}var _;(function(e){e.assertEqual=e=>{};function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&Number.isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(_||={});var ce;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(ce||={});var v=_.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),y=e=>{switch(typeof e){case`undefined`:return v.undefined;case`string`:return v.string;case`number`:return Number.isNaN(e)?v.nan:v.number;case`boolean`:return v.boolean;case`function`:return v.function;case`bigint`:return v.bigint;case`symbol`:return v.symbol;case`object`:return Array.isArray(e)?v.array:e===null?v.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?v.promise:typeof Map<`u`&&e instanceof Map?v.map:typeof Set<`u`&&e instanceof Set?v.set:typeof Date<`u`&&e instanceof Date?v.date:v.object;default:return v.unknown}},b=_.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),x=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,_.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)if(r.path.length>0){let n=r.path[0];t[n]=t[n]||[],t[n].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};x.create=e=>new x(e);var S=(e,t)=>{let n;switch(e.code){case b.invalid_type:n=e.received===v.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case b.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,_.jsonStringifyReplacer)}`;break;case b.unrecognized_keys:n=`Unrecognized key(s) in object: ${_.joinValues(e.keys,`, `)}`;break;case b.invalid_union:n=`Invalid input`;break;case b.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${_.joinValues(e.options)}`;break;case b.invalid_enum_value:n=`Invalid enum value. Expected ${_.joinValues(e.options)}, received '${e.received}'`;break;case b.invalid_arguments:n=`Invalid function arguments`;break;case b.invalid_return_type:n=`Invalid function return type`;break;case b.invalid_date:n=`Invalid date`;break;case b.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:_.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case b.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`||e.type===`bigint`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case b.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case b.custom:n=`Invalid input`;break;case b.invalid_intersection_types:n=`Intersection results could not be merged`;break;case b.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case b.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,_.assertNever(e)}return{message:n}},le=S;function ue(){return le}var de=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}};function C(e,t){let n=ue(),r=de({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===S?void 0:S].filter(e=>!!e)});e.common.issues.push(r)}var w=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return T;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return T;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},T=Object.freeze({status:`aborted`}),fe=e=>({status:`dirty`,value:e}),E=e=>({status:`valid`,value:e}),pe=e=>e.status===`aborted`,me=e=>e.status===`dirty`,D=e=>e.status===`valid`,he=e=>typeof Promise<`u`&&e instanceof Promise,O;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(O||={});var k=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},ge=(e,t)=>{if(D(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){return this._error||=new x(e.common.issues),this._error}}};function A(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var j=class{get description(){return this._def.description}_getType(e){return y(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:y(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new w,ctx:{common:e.parent.common,data:e.data,parsedType:y(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(he(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:y(e)};return ge(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:y(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return D(n)?{value:n.value}:{issues:t.common.issues}}catch(e){e?.message?.toLowerCase()?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>D(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:y(e)},r=this._parse({data:e,path:n.path,parent:n});return ge(n,await(he(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:b.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new B({schema:this,typeName:U.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return V.create(this,this._def)}nullable(){return H.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return P.create(this)}promise(){return z.create(this,this._def)}or(e){return Qe.create([this,e],this._def)}and(e){return tt.create(this,e,this._def)}transform(e){return new B({...A(this._def),schema:this,typeName:U.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new dt({...A(this._def),innerType:this,defaultValue:t,typeName:U.ZodDefault})}brand(){return new mt({typeName:U.ZodBranded,type:this,...A(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new ft({...A(this._def),innerType:this,catchValue:t,typeName:U.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return ht.create(this,e)}readonly(){return gt.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},_e=/^c[^\s-]{8,}$/i,ve=/^[0-9a-z]+$/,ye=/^[0-9A-HJKMNP-TV-Z]{26}$/i,be=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,xe=/^[a-z0-9_-]{21}$/i,Se=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Ce=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,we=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Te=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,Ee,De=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Oe=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,ke=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Ae=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,je=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Me=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Ne=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,Pe=RegExp(`^${Ne}$`);function Fe(e){let t=`[0-5]\\d`;e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`);let n=e.precision?`+`:`?`;return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`}function Ie(e){return RegExp(`^${Fe(e)}$`)}function Le(e){let t=`${Ne}T${Fe(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function Re(e,t){return!!((t===`v4`||!t)&&De.test(e)||(t===`v6`||!t)&&ke.test(e))}function ze(e,t){if(!Se.test(e))return!1;try{let[n]=e.split(`.`);if(!n)return!1;let r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&i.alg!==t)}catch{return!1}}function Be(e,t){return!!((t===`v4`||!t)&&Oe.test(e)||(t===`v6`||!t)&&Ae.test(e))}var Ve=class e extends j{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==v.string){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.string,received:t.parsedType}),T}let t=new w,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),C(n,{code:b.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),C(n,{code:b.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?C(n,{code:b.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&C(n,{code:b.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)we.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`email`,code:b.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)Ee||=new RegExp(Te,`u`),Ee.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`emoji`,code:b.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)be.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`uuid`,code:b.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)xe.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`nanoid`,code:b.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)_e.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`cuid`,code:b.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)ve.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`cuid2`,code:b.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)ye.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`ulid`,code:b.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),C(n,{validation:`url`,code:b.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`regex`,code:b.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),C(n,{code:b.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),C(n,{code:b.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),C(n,{code:b.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?Le(r).test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{code:b.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?Pe.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{code:b.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?Ie(r).test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{code:b.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?Ce.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`duration`,code:b.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?Re(e.data,r.version)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`ip`,code:b.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?ze(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`jwt`,code:b.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?Be(e.data,r.version)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`cidr`,code:b.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?je.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`base64`,code:b.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?Me.test(e.data)||(n=this._getOrReturnCtx(e,n),C(n,{validation:`base64url`,code:b.invalid_string,message:r.message}),t.dirty()):_.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:b.invalid_string,...O.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...O.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...O.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...O.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...O.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...O.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...O.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...O.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...O.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...O.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...O.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...O.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...O.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...O.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...O.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...O.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...O.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...O.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...O.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...O.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...O.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...O.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...O.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...O.errToObj(t)})}nonempty(e){return this.min(1,O.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};Ve.create=e=>new Ve({checks:[],typeName:U.ZodString,coerce:e?.coerce??!1,...A(e)});function He(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return Number.parseInt(e.toFixed(i).replace(`.`,``))%Number.parseInt(t.toFixed(i).replace(`.`,``))/10**i}var Ue=class e extends j{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==v.number){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.number,received:t.parsedType}),T}let t,n=new w;for(let r of this._def.checks)r.kind===`int`?_.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),C(t,{code:b.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),C(t,{code:b.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),C(t,{code:b.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?He(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),C(t,{code:b.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),C(t,{code:b.not_finite,message:r.message}),n.dirty()):_.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,O.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,O.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,O.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,O.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:O.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:O.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:O.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:O.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:O.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:O.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:O.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:O.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:O.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:O.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&_.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};Ue.create=e=>new Ue({checks:[],typeName:U.ZodNumber,coerce:e?.coerce||!1,...A(e)});var We=class e extends j{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==v.bigint)return this._getInvalidInput(e);let t,n=new w;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),C(t,{code:b.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),C(t,{code:b.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),C(t,{code:b.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):_.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.bigint,received:t.parsedType}),T}gte(e,t){return this.setLimit(`min`,e,!0,O.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,O.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,O.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,O.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:O.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:O.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:O.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:O.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:O.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:O.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};We.create=e=>new We({checks:[],typeName:U.ZodBigInt,coerce:e?.coerce??!1,...A(e)});var Ge=class extends j{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==v.boolean){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.boolean,received:t.parsedType}),T}return E(e.data)}};Ge.create=e=>new Ge({typeName:U.ZodBoolean,coerce:e?.coerce||!1,...A(e)});var Ke=class e extends j{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==v.date){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.date,received:t.parsedType}),T}if(Number.isNaN(e.data.getTime()))return C(this._getOrReturnCtx(e),{code:b.invalid_date}),T;let t=new w,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),C(n,{code:b.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),C(n,{code:b.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):_.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:O.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:O.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};Ke.create=e=>new Ke({checks:[],coerce:e?.coerce||!1,typeName:U.ZodDate,...A(e)});var qe=class extends j{_parse(e){if(this._getType(e)!==v.symbol){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.symbol,received:t.parsedType}),T}return E(e.data)}};qe.create=e=>new qe({typeName:U.ZodSymbol,...A(e)});var Je=class extends j{_parse(e){if(this._getType(e)!==v.undefined){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.undefined,received:t.parsedType}),T}return E(e.data)}};Je.create=e=>new Je({typeName:U.ZodUndefined,...A(e)});var Ye=class extends j{_parse(e){if(this._getType(e)!==v.null){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.null,received:t.parsedType}),T}return E(e.data)}};Ye.create=e=>new Ye({typeName:U.ZodNull,...A(e)});var Xe=class extends j{constructor(){super(...arguments),this._any=!0}_parse(e){return E(e.data)}};Xe.create=e=>new Xe({typeName:U.ZodAny,...A(e)});var M=class extends j{constructor(){super(...arguments),this._unknown=!0}_parse(e){return E(e.data)}};M.create=e=>new M({typeName:U.ZodUnknown,...A(e)});var N=class extends j{_parse(e){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.never,received:t.parsedType}),T}};N.create=e=>new N({typeName:U.ZodNever,...A(e)});var Ze=class extends j{_parse(e){if(this._getType(e)!==v.undefined){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.void,received:t.parsedType}),T}return E(e.data)}};Ze.create=e=>new Ze({typeName:U.ZodVoid,...A(e)});var P=class e extends j{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==v.array)return C(t,{code:b.invalid_type,expected:v.array,received:t.parsedType}),T;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(C(t,{code:e?b.too_big:b.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(C(t,{code:b.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(C(t,{code:b.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new k(t,e,t.path,n)))).then(e=>w.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new k(t,e,t.path,n)));return w.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:O.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:O.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:O.toString(n)}})}nonempty(e){return this.min(1,e)}};P.create=(e,t)=>new P({type:e,minLength:null,maxLength:null,exactLength:null,typeName:U.ZodArray,...A(t)});function F(e){if(e instanceof I){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=V.create(F(r))}return new I({...e._def,shape:()=>t})}else if(e instanceof P)return new P({...e._def,type:F(e.element)});else if(e instanceof V)return V.create(F(e.unwrap()));else if(e instanceof H)return H.create(F(e.unwrap()));else if(e instanceof R)return R.create(e.items.map(e=>F(e)));else return e}var I=class e extends j{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape();return this._cached={shape:e,keys:_.objectKeys(e)},this._cached}_parse(e){if(this._getType(e)!==v.object){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.object,received:t.parsedType}),T}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof N&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new k(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof N){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(C(n,{code:b.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new k(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>w.mergeObjectSync(t,e)):w.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return O.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{let r=this._def.errorMap?.(e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:O.errToObj(t).message??r}:{message:r}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:U.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};for(let e of _.objectKeys(t))t[e]&&this.shape[e]&&(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}omit(t){let n={};for(let e of _.objectKeys(this.shape))t[e]||(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}deepPartial(){return F(this)}partial(t){let n={};for(let e of _.objectKeys(this.shape)){let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}return new e({...this._def,shape:()=>n})}required(t){let n={};for(let e of _.objectKeys(this.shape))if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof V;)t=t._def.innerType;n[e]=t}return new e({...this._def,shape:()=>n})}keyof(){return ct(_.objectKeys(this.shape))}};I.create=(e,t)=>new I({shape:()=>e,unknownKeys:`strip`,catchall:N.create(),typeName:U.ZodObject,...A(t)}),I.strictCreate=(e,t)=>new I({shape:()=>e,unknownKeys:`strict`,catchall:N.create(),typeName:U.ZodObject,...A(t)}),I.lazycreate=(e,t)=>new I({shape:e,unknownKeys:`strip`,catchall:N.create(),typeName:U.ZodObject,...A(t)});var Qe=class extends j{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new x(e.ctx.common.issues));return C(t,{code:b.invalid_union,unionErrors:n}),T}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new x(e));return C(t,{code:b.invalid_union,unionErrors:i}),T}}get options(){return this._def.options}};Qe.create=(e,t)=>new Qe({options:e,typeName:U.ZodUnion,...A(t)});var L=e=>e instanceof ot?L(e.schema):e instanceof B?L(e.innerType()):e instanceof st?[e.value]:e instanceof lt?e.options:e instanceof ut?_.objectValues(e.enum):e instanceof dt?L(e._def.innerType):e instanceof Je?[void 0]:e instanceof Ye?[null]:e instanceof V?[void 0,...L(e.unwrap())]:e instanceof H?[null,...L(e.unwrap())]:e instanceof mt||e instanceof gt?L(e.unwrap()):e instanceof ft?L(e._def.innerType):[],$e=class e extends j{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==v.object)return C(t,{code:b.invalid_type,expected:v.object,received:t.parsedType}),T;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(C(t,{code:b.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),T)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=L(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:U.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...A(r)})}};function et(e,t){let n=y(e),r=y(t);if(e===t)return{valid:!0,data:e};if(n===v.object&&r===v.object){let n=_.objectKeys(t),r=_.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=et(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}else if(n===v.array&&r===v.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=et(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}else if(n===v.date&&r===v.date&&+e==+t)return{valid:!0,data:e};else return{valid:!1}}var tt=class extends j{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(pe(e)||pe(r))return T;let i=et(e.value,r.value);return i.valid?((me(e)||me(r))&&t.dirty(),{status:t.value,value:i.data}):(C(n,{code:b.invalid_intersection_types}),T)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};tt.create=(e,t,n)=>new tt({left:e,right:t,typeName:U.ZodIntersection,...A(n)});var R=class e extends j{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==v.array)return C(n,{code:b.invalid_type,expected:v.array,received:n.parsedType}),T;if(n.data.length<this._def.items.length)return C(n,{code:b.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),T;!this._def.rest&&n.data.length>this._def.items.length&&(C(n,{code:b.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new k(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>w.mergeArray(t,e)):w.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};R.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new R({items:e,typeName:U.ZodTuple,rest:null,...A(t)})};var nt=class e extends j{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==v.object)return C(n,{code:b.invalid_type,expected:v.object,received:n.parsedType}),T;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new k(n,e,n.path,e)),value:a._parse(new k(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?w.mergeObjectAsync(t,r):w.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof j?new e({keyType:t,valueType:n,typeName:U.ZodRecord,...A(r)}):new e({keyType:Ve.create(),valueType:t,typeName:U.ZodRecord,...A(n)})}},rt=class extends j{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==v.map)return C(n,{code:b.invalid_type,expected:v.map,received:n.parsedType}),T;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new k(n,e,n.path,[a,`key`])),value:i._parse(new k(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return T;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}else{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return T;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};rt.create=(e,t,n)=>new rt({valueType:t,keyType:e,typeName:U.ZodMap,...A(n)});var it=class e extends j{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==v.set)return C(n,{code:b.invalid_type,expected:v.set,received:n.parsedType}),T;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(C(n,{code:b.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(C(n,{code:b.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return T;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new k(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:O.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:O.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};it.create=(e,t)=>new it({valueType:e,minSize:null,maxSize:null,typeName:U.ZodSet,...A(t)});var at=class e extends j{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==v.function)return C(t,{code:b.invalid_type,expected:v.function,received:t.parsedType}),T;function n(e,n){return de({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ue(),S].filter(e=>!!e),issueData:{code:b.invalid_arguments,argumentsError:n}})}function r(e,n){return de({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ue(),S].filter(e=>!!e),issueData:{code:b.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof z){let e=this;return E(async function(...t){let o=new x([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}else{let e=this;return E(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new x([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new x([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:R.create(t).rest(M.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||R.create([]).rest(M.create()),returns:n||M.create(),typeName:U.ZodFunction,...A(r)})}},ot=class extends j{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};ot.create=(e,t)=>new ot({getter:e,typeName:U.ZodLazy,...A(t)});var st=class extends j{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return C(t,{received:t.data,code:b.invalid_literal,expected:this._def.value}),T}return{status:`valid`,value:e.data}}get value(){return this._def.value}};st.create=(e,t)=>new st({value:e,typeName:U.ZodLiteral,...A(t)});function ct(e,t){return new lt({values:e,typeName:U.ZodEnum,...A(t)})}var lt=class e extends j{_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return C(t,{expected:_.joinValues(n),received:t.parsedType,code:b.invalid_type}),T}if(this._cache||=new Set(this._def.values),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return C(t,{received:t.data,code:b.invalid_enum_value,options:n}),T}return E(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};lt.create=ct;var ut=class extends j{_parse(e){let t=_.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==v.string&&n.parsedType!==v.number){let e=_.objectValues(t);return C(n,{expected:_.joinValues(e),received:n.parsedType,code:b.invalid_type}),T}if(this._cache||=new Set(_.getValidEnumValues(this._def.values)),!this._cache.has(e.data)){let e=_.objectValues(t);return C(n,{received:n.data,code:b.invalid_enum_value,options:e}),T}return E(e.data)}get enum(){return this._def.values}};ut.create=(e,t)=>new ut({values:e,typeName:U.ZodNativeEnum,...A(t)});var z=class extends j{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==v.promise&&t.common.async===!1?(C(t,{code:b.invalid_type,expected:v.promise,received:t.parsedType}),T):E((t.parsedType===v.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};z.create=(e,t)=>new z({type:e,typeName:U.ZodPromise,...A(t)});var B=class extends j{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===U.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{C(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return T;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?T:r.status===`dirty`||t.value===`dirty`?fe(r.value):r});{if(t.value===`aborted`)return T;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?T:r.status===`dirty`||t.value===`dirty`?fe(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?T:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?T:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!D(e))return T;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>D(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):T);_.assertNever(r)}};B.create=(e,t,n)=>new B({schema:e,typeName:U.ZodEffects,effect:t,...A(n)}),B.createWithPreprocess=(e,t,n)=>new B({schema:t,effect:{type:`preprocess`,transform:e},typeName:U.ZodEffects,...A(n)});var V=class extends j{_parse(e){return this._getType(e)===v.undefined?E(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};V.create=(e,t)=>new V({innerType:e,typeName:U.ZodOptional,...A(t)});var H=class extends j{_parse(e){return this._getType(e)===v.null?E(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};H.create=(e,t)=>new H({innerType:e,typeName:U.ZodNullable,...A(t)});var dt=class extends j{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===v.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};dt.create=(e,t)=>new dt({innerType:e,typeName:U.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...A(t)});var ft=class extends j{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return he(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new x(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new x(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};ft.create=(e,t)=>new ft({innerType:e,typeName:U.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...A(t)});var pt=class extends j{_parse(e){if(this._getType(e)!==v.nan){let t=this._getOrReturnCtx(e);return C(t,{code:b.invalid_type,expected:v.nan,received:t.parsedType}),T}return{status:`valid`,value:e.data}}};pt.create=e=>new pt({typeName:U.ZodNaN,...A(e)});var mt=class extends j{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},ht=class e extends j{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?T:e.status===`dirty`?(t.dirty(),fe(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?T:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:U.ZodPipeline})}},gt=class extends j{_parse(e){let t=this._def.innerType._parse(e),n=e=>(D(e)&&(e.value=Object.freeze(e.value)),e);return he(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};gt.create=(e,t)=>new gt({innerType:e,typeName:U.ZodReadonly,...A(t)}),I.lazycreate;var U;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(U||={});var W=Ve.create,G=Ue.create;pt.create,We.create;var K=Ge.create;Ke.create,qe.create,Je.create,Ye.create,Xe.create,M.create,N.create,Ze.create;var q=P.create,J=I.create;I.strictCreate,Qe.create;var _t=$e.create;tt.create,R.create,nt.create,rt.create,it.create,at.create,ot.create;var Y=st.create,vt=lt.create;ut.create,z.create,B.create,V.create,H.create,B.createWithPreprocess,ht.create;var yt=vt([`local_rules`,`byok_llm`,`hosted_llm`]),bt=`openrouter/free`,xt=vt([`show`,`blur`,`hide`,`neutralize`,`collapse`,`rebuild`]);J({id:W(),site:W(),fingerprint:W(),sourceName:W().optional(),title:W(),metadata:q(W()),isNew:K(),url:W().url().optional()}),J({decision:xt,confidence:G().min(0).max(1),reason:W(),neutralizedTitle:W().optional(),error:W().optional()});var St=J({politics:K().default(!1),ragebait:K().default(!1),spoilers:K().default(!1),clickbait:K().default(!1)}),Ct=J({blocklistChannels:q(W()).default([]),blocklistKeywords:q(W()).default([]),allowlistChannels:q(W()).default([]),allowlistKeywords:q(W()).default([]),presets:St.default({politics:!1,ragebait:!1,spoilers:!1,clickbait:!1})}),wt=vt([`light`,`medium`,`strict`]),Tt=J({enabled:K().default(!0),mode:wt.default(`medium`),showIndicator:K().default(!0),showDiffOnHover:K().default(!0),excludeDomains:q(W()).default([])}),Et={enabled:!0,mode:`medium`,showIndicator:!0,showDiffOnHover:!0,excludeDomains:[]},Dt=J({enabled:K().default(!0),defaultLayout:W().default(`auto`),defaultTheme:W().default(`default`),autoOpen:K().default(!0),textOnly:K().default(!0),font:W().default(`Inter`),fontSize:W().default(`17px`),showInContextMenu:K().default(!0),apiEndpoint:W().optional(),apiKey:W().optional()}),Ot={enabled:!0,defaultLayout:`auto`,defaultTheme:`default`,autoOpen:!0,textOnly:!0,font:`Inter`,fontSize:`17px`,showInContextMenu:!0},kt=vt([`off`,`blur`,`hide`]),At=J({enabled:K().default(!0),mode:kt.default(`blur`),blurThreshold:G().min(0).max(1).default(.5),hideThreshold:G().min(0).max(1).default(.8),analyzeAltText:K().default(!0),analyzeThumbnails:K().default(!0),showToggle:K().default(!0),revealOnHover:K().default(!0)}),jt={enabled:!0,mode:`blur`,blurThreshold:.5,hideThreshold:.8,analyzeAltText:!0,analyzeThumbnails:!0,showToggle:!0,revealOnHover:!0},Mt=vt([`social_media`,`content_farms`,`gambling`,`adult`,`piracy`,`malware`,`spam`,`fake_news`,`productivity`,`shopping`,`gaming`,`streaming`,`news`,`custom`]),Nt=J({enabled:K().default(!0),blockBlockedSites:K().default(!0),searchFilterEnabled:K().default(!0),hideBlockedResults:K().default(!0),showCategoryBadge:K().default(!1),blockedCategories:q(Mt).default([]),customBlocklist:q(W()).default([]),customAllowlist:q(W()).default([]),useExternalBlocklists:K().default(!0),redirectToDDG:K().default(!0)});J({enabled:K().default(!0),processingMode:yt.default(`local_rules`),strictness:G().min(0).max(100).default(80),rules:Ct.default({blocklistChannels:[],blocklistKeywords:[],allowlistChannels:[],allowlistKeywords:[],presets:{politics:!1,ragebait:!0,spoilers:!1,clickbait:!0}}),byokKey:W().optional(),aiModel:W().default(bt),customEndpoint:W().optional(),neutralization:Tt.default(Et),reader:Dt.default(Ot),mediaFilter:At.default(jt),siteFilter:Nt.default({enabled:!0,blockBlockedSites:!0,searchFilterEnabled:!0,hideBlockedResults:!0,showCategoryBadge:!1,blockedCategories:[`gambling`,`malware`,`spam`,`fake_news`],customBlocklist:[],customAllowlist:[],useExternalBlocklists:!0,redirectToDDG:!0})});function Pt(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return t.toString(36)}function Ft(e){return Pt(`${e.title}|${e.sourceName||``}|${e.site}`)}J({totalFiltered:G().default(0),byAction:J({hide:G().default(0),blur:G().default(0),neutralize:G().default(0),collapse:G().default(0)}).default({hide:0,blur:0,neutralize:0,collapse:0}),byPreset:J({politics:G().default(0),ragebait:G().default(0),spoilers:G().default(0),clickbait:G().default(0)}).default({politics:0,ragebait:0,spoilers:0,clickbait:0}),timeSaved:G().default(0),topFilteredSources:q(W()).default([]),dailyHistory:q(J({date:W(),count:G()})).default([]),lastReset:G().default(Date.now())});var It={preset_politics:`Politics filtered`,preset_ragebait:`Ragebait blocked`,preset_spoilers:`Spoiler shield`,preset_clickbait:`Clickbait removed`,blocklist_channel:`Blocked source`,blocklist_keyword:`Filtered keyword`,llm_classification:`AI filtered`,hosted:`Content filtered`};function Lt(e){for(let[t,n]of Object.entries(It))if(e.includes(t))return n;return`Content filtered`}function Rt(e){return e.includes(`politics`)?`🏛️`:e.includes(`ragebait`)?`😠`:e.includes(`spoilers`)?`🤐`:e.includes(`clickbait`)?`🎯`:e.includes(`channel`)||e.includes(`keyword`)?`🚫`:`🛡️`}function zt(e){let{reason:t,originalElement:n,result:r,onExpand:i,siteId:a}=e,o=document.createElement(`div`);o.className=`calmweb-collapse-container`,o.setAttribute(`data-calmweb-collapse`,`true`),o.setAttribute(`data-calmweb-reason`,t);let s=Lt(t);return o.innerHTML=`
    <div class="calmweb-collapse-badge">
      <span class="calmweb-collapse-icon">${Rt(t)}</span>
      <span class="calmweb-collapse-label">${s}</span>
    </div>
    <button class="calmweb-collapse-expand" type="button">
      <span>Show anyway</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
  `,o.querySelector(`.calmweb-collapse-expand`).addEventListener(`click`,e=>{e.stopPropagation(),Bt(o,n),i&&i()}),o.setAttribute(`data-calmweb-original-height`,String(n.offsetHeight)),o.setAttribute(`data-calmweb-site`,a||`unknown`),o}function Bt(e,t){e.classList.add(`calmweb-collapse-expanding`),requestAnimationFrame(()=>{t.style.display=``,t.style.opacity=`0`,t.style.transition=`opacity 0.2s ease-in-out`,e.replaceWith(t),requestAnimationFrame(()=>{t.style.opacity=`1`,setTimeout(()=>{t.style.transition=``,t.style.opacity=``},200)})})}var X={videoCard:`ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer`,title:`#video-title, a#video-title-link, #video-title a`,channel:`#text.ytd-channel-name, #channel-name a, ytd-channel-name`,metadata:`#metadata-line yt-formatted-string`,shortCard:`ytd-reel-video-renderer`,shortTitle:`#overlay #title`};function Vt(e){let t=e.querySelectorAll(X.videoCard);return Array.from(t)}function Ht(e){let t=e.querySelector(X.title),n=(t?.innerText||t?.textContent||``).trim()||`Untitled`,r=e.querySelector(X.channel),i=(r?.innerText||r?.textContent||``).trim()||void 0,a=e.querySelectorAll(X.metadata),o=Array.from(a).map(e=>(e.innerText||e.textContent||``).trim()).filter(Boolean),s=Ft({title:n,sourceName:i,site:`youtube`,metadata:o});return{id:e.id||`yt-${s}`,site:`youtube`,fingerprint:s,sourceName:i,title:n,metadata:o,isNew:!1}}function Ut(e,t){if(e.removeAttribute(`data-calmweb-processed`),e.style.display=``,e.style.filter=``,e.style.opacity=``,e.style.transition=``,e.classList.remove(`calmweb-blurred`,`calmweb-hidden`,`calmweb-neutralized`),t.decision===`hide`){e.style.display=`none`,e.setAttribute(`data-calmweb-processed`,`hidden`);let t=e.querySelector(X.title),n=t?.innerText||t?.textContent||`Content`;window.dispatchEvent(new CustomEvent(`calmweb:neutralized`,{detail:{before:n,after:`[Hidden]`}}));return}if(t.decision===`collapse`){let n=zt({reason:t.reason,originalElement:e,result:t,siteId:`youtube`}),r=e.querySelector(X.title),i=r?.innerText||r?.textContent||`Content`;e.style.display=`none`,e.insertAdjacentElement(`afterend`,n),e.setAttribute(`data-calmweb-processed`,`collapsed`),window.dispatchEvent(new CustomEvent(`calmweb:neutralized`,{detail:{before:i,after:`[Collapsed]`}}));return}if(t.decision===`blur`){e.classList.add(`calmweb-blurred`),e.setAttribute(`data-calmweb-processed`,`blur`);return}if(t.decision===`neutralize`&&t.neutralizedTitle){let n=e.querySelector(X.title),r=n?.innerText||``;n&&(n.innerText=t.neutralizedTitle,n.setAttribute(`title`,t.neutralizedTitle)),e.classList.add(`calmweb-neutralized`),e.setAttribute(`data-calmweb-processed`,`neutralized`),window.dispatchEvent(new CustomEvent(`calmweb:neutralized`,{detail:{before:r,after:t.neutralizedTitle}}));return}if(t.decision===`rebuild`){e.style.display=`none`,e.setAttribute(`data-calmweb-processed`,`rebuild`);return}e.setAttribute(`data-calmweb-processed`,`show`)}var Wt={siteId:`youtube`,matches:[/^https?:\/\/(www\.)?youtube\.com\/.*/,/^https?:\/\/youtu\.be\/.*/],discoverUnits:Vt,extractData:Ht,applyDecision:Ut},Z={CLASSIFY_UNIT:`calmweb:classifyUnit`,GET_SETTINGS:`calmweb:getSettings`,UPDATE_SETTINGS:`calmweb:updateSettings`,CLEAR_CACHE:`calmweb:clearCache`,GET_STATS:`calmweb:getStats`,INCREMENT_STAT:`calmweb:incrementStat`};_t(`type`,[J({type:Y(Z.CLASSIFY_UNIT),unit:J({id:W(),site:W(),fingerprint:W(),sourceName:W().optional(),title:W(),metadata:q(W()),isNew:K(),url:W().url().optional()})}),J({type:Y(Z.GET_SETTINGS)}),J({type:Y(Z.UPDATE_SETTINGS),settings:J({enabled:K().optional(),rules:J({blocklistChannels:q(W()).optional(),blocklistKeywords:q(W()).optional(),allowlistChannels:q(W()).optional(),allowlistKeywords:q(W()).optional(),presets:J({politics:K().optional(),ragebait:K().optional(),spoilers:K().optional(),clickbait:K().optional()}).optional()}).optional()})}),J({type:Y(Z.CLEAR_CACHE)}),J({type:Y(Z.GET_STATS)}),J({type:Y(Z.INCREMENT_STAT),key:Y(`totalFiltered`),amount:G().optional()})]);var Gt=`calmweb-cleanup-css`,Kt=`
  /* ============================================================
   * Ads & Sponsored Content
   * ============================================================ */

  /* Generic ad containers */
  [class*="ad-container"],
  [class*="ad_wrapper"],
  [class*="adWrapper"],
  [class*="ad-slot"],
  [class*="adSlot"],
  [class*="ad-banner"],
  [class*="adBanner"],
  [class*="ad-unit"],
  [class*="adUnit"],
  [class*="ad-placement"],
  [class*="adPlacement"],
  [class*="advert"],
  [class*="advertisement"],
  [class*="advertisment"],
  [class*="ad-sidebar"],
  [class*="ad-leaderboard"],
  [class*="ad-inline"],
  [class*="ad-overlay"],
  [class*="ad-popup"],
  .ad, .ads, .adsbygoogle, .ad-zone, .ad-box,
  .ad-block, .ad-panel, .ad-section, .ad-label,
  .ad-placeholder, .ad-mobile, .ad-desktop,
  .ad-top, .ad-bottom, .ad-header, .ad-footer,
  .ad-content, .ad-right, .ad-left, .ad-center,
  .advert, .advertisement, .advertising, .advertorial,
  .sponsored, .sponsor, .sponsored-content, .sponsored-post,
  .promoted, .promotion, .promo,

  /* Ad attributes */
  [data-ad],
  [data-ad-slot],
  [data-ad-client],
  [data-ad-format],
  [data-adunit],
  [aria-label="advertisement"],
  [aria-label="Ad"],
  [aria-label="Sponsored"],

  /* Google Ads */
  .google-ad, .googleads, .adsense,
  ins.adsbygoogle,

  /* Ad network iframes */
  iframe[src*="doubleclick.net"],
  iframe[src*="googlesyndication.com"],
  iframe[src*="googleadservices.com"],
  iframe[src*="adnxs.com"],
  iframe[src*="amazon-adsystem.com"],
  iframe[src*="adsrvr.org"],
  iframe[src*="adform.net"],
  iframe[src*="moatads.com"],
  iframe[src*="outbrain.com"],
  iframe[src*="taboola.com"],
  iframe[src*="criteo.com"],
  iframe[src*="criteo.net"],
  iframe[id*="google_ads"],

  /* Social promoted content */
  [data-testid*="promoted"],
  [data-promoted="true"],
  [class*="promoted-tweet"],
  [class*="sponsored-label"],
  [class*="ad-badge"],

  /* ============================================================
   * Popups & Modals (cookie, newsletter, etc.)
   * ============================================================ */

  /* Cookie/consent banners */
  [class*="cookie-banner"],
  [class*="cookie-banner-overlay"],
  [class*="cookie-notice"],
  [class*="cookie-consent"],
  [class*="cookie-popup"],
  [class*="cookie-alert"],
  [class*="cookie-law"],
  [class*="consent-banner"],
  [class*="consent-popup"],
  [class*="consent-modal"],
  [class*="consent-overlay"],
  [class*="gdpr-banner"],
  [class*="gdpr-popup"],
  [class*="gdpr-consent"],
  [class*="gdpr-overlay"],
  [class*="eu-cookie"],
  .cookie-banner, .cookie-notice, .cookie-consent,
  .gdpr-banner, .gdpr-popup,

  /* Newsletter/subscription popups */
  [class*="newsletter-popup"],
  [class*="newsletter-overlay"],
  [class*="newsletter-modal"],
  [class*="subscribe-popup"],
  [class*="subscribe-overlay"],
  [class*="subscribe-modal"],
  [class*="signup-popup"],
  [class*="signup-overlay"],
  [class*="signup-modal"],
  [class*="email-signup"],
  [class*="mail-signup"],
  [class*="email-popup"],
  [class*="mail-popup"],

  /* Generic modals/popups/overlays */
  [class*="popup-overlay"],
  [class*="modal-overlay"],
  [class*="lightbox-overlay"],
  [class*="dialog-overlay"],
  [class*="backdrop-overlay"],
  [class*="mask-overlay"],

  /* App install banners */
  [class*="app-banner"],
  [class*="install-prompt"],
  [class*="download-app"],
  [class*="mobile-app-banner"],
  [class*="app-install-banner"],

  /* Age verification */
  [class*="age-gate"],
  [class*="age-verification"],
  [class*="age-check"],
  [class*="age-popup"],

  /* Surveys & feedback */
  [class*="survey-popup"],
  [class*="feedback-popup"],
  [class*="poll-popup"],
  [class*="rating-popup"],

  /* ============================================================
   * Sidebar & Supplementary Content
   * ============================================================ */

  /* Sidebars */
  [class*="sidebar-right"],
  [class*="sidebar-left"],
  [class*="sidebar-widget"],
  .sidebar, .side-bar, .aside-bar,

  /* Related/recommended */
  [class*="related-articles"],
  [class*="related-posts"],
  [class*="recommended"],
  [class*="suggested-articles"],
  [class*="suggested-posts"],
  [class*="more-stories"],
  [class*="more-articles"],
  [class*="trending-now"],
  [class*="trending-stories"],
  .related, .recommended, .suggestions, .more-stories,
  .trending,

  /* Social share bars */
  [class*="social-share"],
  [class*="share-buttons"],
  [class*="social-links"],
  [class*="social-bar"],
  [class*="share-bar"],
  [class*="social-icons"],
  [class*="social-media"],
  .social-share, .share-buttons, .social-links,
  .social-bar, .share-bar, .social-media,

  /* Comments */
  [class*="comment-section"],
  [class*="comments-section"],
  [class*="comment-container"],
  [class*="responses-section"],
  .comments, #comments, .comment-section,
  .responses, .disqus,

  /* Author bios */
  [class*="author-bio"],
  [class*="author-info"],
  [class*="about-author"],
  .author-bio, .author-info, .about-author,

  /* Tags & categories */
  [class*="tag-list"],
  [class*="tag-cloud"],
  [class*="topic-tags"],
  [class*="category-list"],
  .tags, .tag-list, .categories, .topic-tags,

  /* Breadcrumbs */
  [class*="breadcrumb"],
  .breadcrumb, .breadcrumbs, .crumbs,

  /* Pagination */
  [class*="pagination"],
  .pagination, .pager, .page-nav,

  /* ============================================================
   * Chat Widgets & Tracking
   * ============================================================ */

  /* Chat widgets */
  [class*="intercom"],
  [class*="drift"],
  [class*="zendesk"],
  [class*="crisp"],
  [class*="livechat"],
  [class*="chat-widget"],
  [class*="chat-box"],
  [class*="support-widget"],
  #intercom-container, .intercom-launcher-frame,
  .drift-frame, .zendesk-frame,

  /* Paywalls */
  [class*="paywall"],
  [class*="pay-wall"],
  [class*="metered"],
  [class*="premium-only"],
  [class*="subscriber-only"],
  [class*="members-only"],

  /* ============================================================
   * WordPress & CMS Specific
   * ============================================================ */

  #wpadminbar,
  .wp-block-navigation,
  .amp-sidebar, .amp-menu,

  /* ============================================================
   * Sticky/Fixed elements (annoying)
   * ============================================================ */

  /* Let's not hide all fixed elements - some are navigation
     We'll be selective with common fixed annoyances */
  [class*="sticky-ad"],
  [class*="fixed-ad"],
  [class*="sticky-banner"],
  [class*="fixed-banner"],
  [class*="sticky-footer"],
  [class*="fixed-footer"],
  [class*="sticky-header"],
  [class*="fixed-header"],

  /* ============================================================
   * Promo & Marketing Banners
   * ============================================================ */

  [class*="promo-banner"],
  [class*="promo-bar"],
  [class*="promo-popup"],
  [class*="promo-code"],
  [class*="promo-overlay"],
  [class*="marketing-banner"],
  [class*="marketing-popup"],
  [class*="announcement-bar"],
  [class*="announcement-banner"],
  .promo-banner, .promo-bar, .promo-popup,
  .announcement-bar, .announcement-banner,

  /* ============================================================
   * Dark Reading Mode (optional theming)
   * ============================================================ */

  /* When CalmWeb dark reading mode is enabled */
  .calmweb-dark-mode body {
    background: #1a1a1a !important;
    color: #e0e0e0 !important;
  }

  /* Allow images to still be visible */
  .calmweb-dark-mode img {
    filter: brightness(0.9) contrast(1.1);
  }

  /* Ensure text is readable */
  .calmweb-dark-mode p,
  .calmweb-dark-mode h1,
  .calmweb-dark-mode h2,
  .calmweb-dark-mode h3,
  .calmweb-dark-mode h4,
  .calmweb-dark-mode h5,
  .calmweb-dark-mode h6,
  .calmweb-dark-mode li,
  .calmweb-dark-mode blockquote,
  .calmweb-dark-mode pre,
  .calmweb-dark-mode code {
    color: inherit !important;
  }
`;function qt(){if(document.getElementById(Gt))return()=>{};let e=document.createElement(`style`);return e.id=Gt,e.textContent=Kt,document.head.appendChild(e),()=>{let e=document.getElementById(Gt);e&&e.remove()}}var Jt=`calmweb-activity-overlay`,Yt=`calmweb-activity-styles`,Q=[],Xt=20,$=null,Zt=!1;function Qt(){if(document.getElementById(Yt))return;let e=document.createElement(`style`);e.id=Yt,e.textContent=`
    #${Jt} {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      max-width: 380px;
    }

    .calmweb-activity-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 12px;
      color: white;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      transition: all 0.2s;
    }

    .calmweb-activity-header:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
    }

    .calmweb-activity-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }

    .calmweb-activity-info {
      flex: 1;
    }

    .calmweb-activity-title {
      font-weight: 600;
      font-size: 13px;
    }

    .calmweb-activity-count {
      font-size: 11px;
      opacity: 0.7;
    }

    .calmweb-activity-badge {
      background: #22c55e;
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 11px;
      font-weight: 600;
    }

    .calmweb-activity-badge.empty {
      background: #6b7280;
    }

    .calmweb-activity-panel {
      margin-top: 8px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      max-height: 400px;
      overflow: hidden;
      display: none;
      animation: slideUp 0.2s ease;
    }

    .calmweb-activity-panel.visible {
      display: block;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .calmweb-activity-tabs {
      display: flex;
      border-bottom: 1px solid #e5e7eb;
      background: #f9fafb;
    }

    .calmweb-activity-tab {
      flex: 1;
      padding: 8px;
      text-align: center;
      font-size: 11px;
      font-weight: 500;
      color: #6b7280;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.15s;
    }

    .calmweb-activity-tab:hover {
      background: #f3f4f6;
    }

    .calmweb-activity-tab.active {
      color: #6366f1;
      border-bottom-color: #6366f1;
    }

    .calmweb-activity-list {
      max-height: 300px;
      overflow-y: auto;
      padding: 8px;
    }

    .calmweb-activity-item {
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 6px;
      background: #f9fafb;
      font-size: 11px;
    }

    .calmweb-activity-item:last-child {
      margin-bottom: 0;
    }

    .calmweb-activity-item.neutralized {
      border-left: 3px solid #8b5cf6;
    }

    .calmweb-activity-item.blocked {
      border-left: 3px solid #ef4444;
    }

    .calmweb-activity-item.media {
      border-left: 3px solid #3b82f6;
    }

    .calmweb-activity-item.search {
      border-left: 3px solid #f59e0b;
    }

    .calmweb-activity-label {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .calmweb-activity-item.neutralized .calmweb-activity-label {
      background: #ede9fe;
      color: #7c3aed;
    }

    .calmweb-activity-item.blocked .calmweb-activity-label {
      background: #fee2e2;
      color: #dc2626;
    }

    .calmweb-activity-item.media .calmweb-activity-label {
      background: #dbeafe;
      color: #2563eb;
    }

    .calmweb-activity-item.search .calmweb-activity-label {
      background: #fef3c7;
      color: #d97706;
    }

    .calmweb-activity-before {
      color: #6b7280;
      text-decoration: line-through;
      margin-bottom: 4px;
      word-break: break-word;
    }

    .calmweb-activity-after {
      color: #111827;
      font-weight: 500;
      word-break: break-word;
    }

    .calmweb-activity-arrow {
      color: #9ca3af;
      margin: 2px 0;
    }

    .calmweb-activity-empty {
      text-align: center;
      padding: 24px;
      color: #9ca3af;
    }

    .calmweb-activity-empty-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .calmweb-activity-time {
      font-size: 10px;
      color: #9ca3af;
      margin-top: 4px;
    }
  `,document.head.appendChild(e)}function $t(){let e=document.createElement(`div`);e.id=Jt,e.innerHTML=`
    <div class="calmweb-activity-header">
      <div class="calmweb-activity-icon">🛡️</div>
      <div class="calmweb-activity-info">
        <div class="calmweb-activity-title">CalmWeb</div>
        <div class="calmweb-activity-count">0 items filtered</div>
      </div>
      <div class="calmweb-activity-badge empty">0</div>
    </div>
    <div class="calmweb-activity-panel">
      <div class="calmweb-activity-tabs">
        <div class="calmweb-activity-tab active" data-tab="all">All</div>
        <div class="calmweb-activity-tab" data-tab="neutralized">Text</div>
        <div class="calmweb-activity-tab" data-tab="blocked">Sites</div>
        <div class="calmweb-activity-tab" data-tab="media">Media</div>
      </div>
      <div class="calmweb-activity-list"></div>
    </div>
  `;let t=e.querySelector(`.calmweb-activity-header`),n=e.querySelector(`.calmweb-activity-panel`),r=e.querySelectorAll(`.calmweb-activity-tab`);return t.addEventListener(`click`,()=>{Zt=!Zt,n.classList.toggle(`visible`,Zt),Zt&&tn(`all`)}),r.forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),r.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),tn(e.dataset.tab||`all`)})}),e}function en(){if(!$)return;let e=Q.length,t=$.querySelector(`.calmweb-activity-badge`),n=$.querySelector(`.calmweb-activity-count`);t.textContent=e.toString(),t.classList.toggle(`empty`,e===0),n.textContent=`${e} item${e===1?``:`s`} filtered`}function tn(e){if(!$)return;let t=$.querySelector(`.calmweb-activity-list`),n=e===`all`?Q:Q.filter(t=>t.type===e);if(n.length===0){t.innerHTML=`
      <div class="calmweb-activity-empty">
        <div class="calmweb-activity-empty-icon">✨</div>
        <div>No recent activity</div>
      </div>
    `;return}t.innerHTML=n.map(e=>{let t=rn(e.timestamp),n={neutralized:`Neutralized`,blocked:`Blocked`,media:`Media`,search:`Search`}[e.type];return e.type===`neutralized`&&e.after?`
        <div class="calmweb-activity-item ${e.type}">
          <div class="calmweb-activity-label">${n}</div>
          <div class="calmweb-activity-before">${nn(e.before)}</div>
          <div class="calmweb-activity-arrow">↓</div>
          <div class="calmweb-activity-after">${nn(e.after)}</div>
          <div class="calmweb-activity-time">${t}</div>
        </div>
      `:`
      <div class="calmweb-activity-item ${e.type}">
        <div class="calmweb-activity-label">${n}</div>
        <div class="calmweb-activity-after">${nn(e.before)}</div>
        ${e.reason?`<div class="calmweb-activity-time">${e.reason}</div>`:``}
        <div class="calmweb-activity-time">${t}</div>
      </div>
    `}).join(``)}function nn(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function rn(e){let t=Math.floor((Date.now()-e)/1e3);if(t<60)return`Just now`;let n=Math.floor(t/60);return n<60?`${n}m ago`:`${Math.floor(n/60)}h ago`}function an(e){if(Q.unshift({...e,id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,timestamp:Date.now()}),Q.length>Xt&&(Q=Q.slice(0,Xt)),en(),Zt){let e=$?.querySelector(`.calmweb-activity-tab.active`);tn(e?.dataset.tab||`all`)}}function on(e,t){an({type:`neutralized`,before:e,after:t})}function sn(e,t){an({type:`blocked`,before:e,reason:t})}function cn(e,t){an({type:`media`,before:e||`Image`,after:t===`blurred`?`Blurred`:`Hidden`})}function ln(e){an({type:`search`,before:e,reason:`Hidden from results`})}async function un(){if(document.getElementById(Jt)){console.log(`[ActivityOverlay] Already initialized`);return}console.log(`[ActivityOverlay] Starting initialization...`);try{let e=await se({type:Z.GET_SETTINGS});console.log(`[ActivityOverlay] Settings received:`,e);let t=e?.enabled&&(e.neutralization?.enabled||e.mediaFilter?.enabled||e.siteFilter?.enabled);if(console.log(`[ActivityOverlay] shouldShow:`,t,`enabled:`,e?.enabled,`neutralization:`,e?.neutralization?.enabled,`mediaFilter:`,e?.mediaFilter?.enabled,`siteFilter:`,e?.siteFilter?.enabled),!t){console.log(`[ActivityOverlay] Not showing overlay - filtering disabled`);return}Qt(),$=$t(),document.body.appendChild($),console.log(`[ActivityOverlay] Overlay added to page`),window.addEventListener(`calmweb:neutralized`,(e=>{on(e.detail.before,e.detail.after)})),window.addEventListener(`calmweb:blocked`,(e=>{sn(e.detail.domain,e.detail.reason)})),window.addEventListener(`calmweb:mediaFiltered`,(e=>{cn(e.detail.altText,e.detail.action)})),window.addEventListener(`calmweb:searchFiltered`,(e=>{ln(e.detail.domain)}))}catch(e){console.error(`[ActivityOverlay] Failed to initialize:`,e)}}var dn=l({matches:[`*://*.youtube.com/*`],runAt:`document_idle`,main(){console.log(`[CalmWeb] YouTube script starting...`),un().catch(e=>console.error(`[CalmWeb] Overlay error:`,e)),qt();let e=document.createElement(`style`);e.id=`calmweb-styles`,e.textContent=`
      [data-calmweb-processed="blur"] {
        filter: blur(10px) !important;
        transition: filter 0.3s ease !important;
        pointer-events: auto;
      }
      [data-calmweb-processed="blur"]:hover {
        filter: none !important;
      }
      [data-calmweb-processed="hidden"],
      [data-calmweb-processed="rebuild"] {
        display: none !important;
      }
      [data-calmweb-processing] {
        opacity: 0.4;
        transition: opacity 0.3s;
      }
    `,document.head.appendChild(e);let t=0,n=async(e,n=!1)=>{if(console.log(`[CalmWeb] YouTube: Processing ${e.length} units (isNew: ${n})`),e.length===0)return;let r=e.map(e=>{let t=Wt.extractData(e);return t.isNew=n,t}),i=await Promise.all(r.map(e=>se({type:Z.CLASSIFY_UNIT,unit:e})));e.forEach((e,n)=>{let r=i[n];r&&!(`error`in r)&&(Wt.applyDecision(e,r),r.decision!==`show`&&t++),e.removeAttribute(`data-calmweb-processing`)}),console.log(`[CalmWeb] YouTube: Total filtered so far: ${t}`)},r=Wt.discoverUnits(document);console.log(`[CalmWeb] YouTube: Found`,r.length,`video cards`),r.length===0?console.log(`[CalmWeb] YouTube: No cards found with specific selectors, will rely on universal adapter`):(r.forEach(e=>e.setAttribute(`data-calmweb-processing`,``)),n(r,!1)),new MutationObserver(e=>{let t=[];for(let n of e){let e=n.addedNodes;for(let n=0;n<e.length;n++){let r=e[n];if(r instanceof HTMLElement)if(r.matches&&r.matches(`ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer`))t.push(r);else{let e=Wt.discoverUnits(r).filter(e=>!e.getAttribute(`data-calmweb-processing`));t.push(...e)}}}t.length>0&&(t.forEach(e=>e.setAttribute(`data-calmweb-processing`,``)),n(t,!0))}).observe(document.body,{childList:!0,subtree:!0}),setInterval(()=>{let e=Wt.discoverUnits(document).filter(e=>!e.getAttribute(`data-calmweb-processing`));e.length>0&&(console.log(`[CalmWeb] YouTube: Periodic rescan found`,e.length,`new cards`),e.forEach(e=>e.setAttribute(`data-calmweb-processing`,``)),n(e,!0))},5e3)}}),fn={debug:(...e)=>([...e],void 0),log:(...e)=>([...e],void 0),warn:(...e)=>([...e],void 0),error:(...e)=>([...e],void 0)};return(()=>{let e;try{e=dn.main(),e instanceof Promise&&(e=e.catch(e=>{throw fn.error(`The unlisted script "youtube" crashed on startup!`,e),e}))}catch(e){throw fn.error(`The unlisted script "youtube" crashed on startup!`,e),e}return e})()})();
youtube;