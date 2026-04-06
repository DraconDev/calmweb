var universal=(function(){var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));function l(e){return e}var u=c(o(((e,t)=>{(function(n,r){if(typeof define==`function`&&define.amd)define(`webextension-polyfill`,[`module`],r);else if(e!==void 0)r(t);else{var i={exports:{}};r(i),n.browser=i.exports}})(typeof globalThis<`u`?globalThis:typeof self<`u`?self:e,function(e){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw Error(`This script should only be loaded in a browser extension.`);globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id?e.exports=globalThis.browser:e.exports=(e=>{let t={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(t).length===0)throw Error(`api-metadata.json has not been included in browser-polyfill`);class n extends WeakMap{constructor(e,t=void 0){super(t),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}let r=e=>e&&typeof e==`object`&&typeof e.then==`function`,i=(t,n)=>(...r)=>{e.runtime.lastError?t.reject(Error(e.runtime.lastError.message)):n.singleCallbackArg||r.length<=1&&n.singleCallbackArg!==!1?t.resolve(r[0]):t.resolve(r)},a=e=>e==1?`argument`:`arguments`,o=(e,t)=>function(n,...r){if(r.length<t.minArgs)throw Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${r.length}`);if(r.length>t.maxArgs)throw Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${r.length}`);return new Promise((a,o)=>{if(t.fallbackToNoCallback)try{n[e](...r,i({resolve:a,reject:o},t))}catch(i){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),n[e](...r),t.fallbackToNoCallback=!1,t.noCallback=!0,a()}else t.noCallback?(n[e](...r),a()):n[e](...r,i({resolve:a,reject:o},t))})},s=(e,t,n)=>new Proxy(t,{apply(t,r,i){return n.call(r,e,...i)}}),c=Function.call.bind(Object.prototype.hasOwnProperty),l=(e,t={},n={})=>{let r=Object.create(null);return new Proxy(Object.create(e),{has(t,n){return n in e||n in r},get(i,a,u){if(a in r)return r[a];if(!(a in e))return;let d=e[a];if(typeof d==`function`)if(typeof t[a]==`function`)d=s(e,e[a],t[a]);else if(c(n,a)){let t=o(a,n[a]);d=s(e,e[a],t)}else d=d.bind(e);else if(typeof d==`object`&&d&&(c(t,a)||c(n,a)))d=l(d,t[a],n[a]);else if(c(n,`*`))d=l(d,t[a],n[`*`]);else return Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get(){return e[a]},set(t){e[a]=t}}),d;return r[a]=d,d},set(t,n,i,a){return n in r?r[n]=i:e[n]=i,!0},defineProperty(e,t,n){return Reflect.defineProperty(r,t,n)},deleteProperty(e,t){return Reflect.deleteProperty(r,t)}})},u=e=>({addListener(t,n,...r){t.addListener(e.get(n),...r)},hasListener(t,n){return t.hasListener(e.get(n))},removeListener(t,n){t.removeListener(e.get(n))}}),d=new n(e=>typeof e==`function`?function(t){e(l(t,{},{getContent:{minArgs:0,maxArgs:0}}))}:e),ee=new n(e=>typeof e==`function`?function(t,n,i){let a=!1,o,s=new Promise(e=>{o=function(t){a=!0,e(t)}}),c;try{c=e(t,n,o)}catch(e){c=Promise.reject(e)}let l=c!==!0&&r(c);return c!==!0&&!l&&!a?!1:((e=>{e.then(e=>{i(e)},e=>{let t;t=e&&(e instanceof Error||typeof e.message==`string`)?e.message:`An unexpected error occurred`,i({__mozWebExtensionPolyfillReject__:!0,message:t})}).catch(e=>{console.error(`Failed to send onMessage rejected reply`,e)})})(l?c:s),!0)}:e),te=({reject:t,resolve:n},r)=>{e.runtime.lastError?e.runtime.lastError.message===`The message port closed before a response was received.`?n():t(Error(e.runtime.lastError.message)):r&&r.__mozWebExtensionPolyfillReject__?t(Error(r.message)):n(r)},ne=(e,t,n,...r)=>{if(r.length<t.minArgs)throw Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${r.length}`);if(r.length>t.maxArgs)throw Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${r.length}`);return new Promise((e,t)=>{let i=te.bind(null,{resolve:e,reject:t});r.push(i),n.sendMessage(...r)})},re={devtools:{network:{onRequestFinished:u(d)}},runtime:{onMessage:u(ee),onMessageExternal:u(ee),sendMessage:ne.bind(null,`sendMessage`,{minArgs:1,maxArgs:3})},tabs:{sendMessage:ne.bind(null,`sendMessage`,{minArgs:2,maxArgs:3})}},f={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return t.privacy={network:{"*":f},services:{"*":f},websites:{"*":f}},l(e,re,t)})(chrome)})}))(),1),d=globalThis.browser?.runtime?.id?globalThis.browser:globalThis.chrome,ee=Error(`request for lock canceled`),te=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},ne=class{constructor(e,t=ee){this._value=e,this._cancelError=t,this._queue=[],this._weightedWaiters=[]}acquire(e=1,t=0){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);return new Promise((n,r)=>{let i={resolve:n,reject:r,weight:e,priority:t},a=f(this._queue,e=>t<=e.priority);a===-1&&e<=this._value?this._dispatchItem(i):this._queue.splice(a+1,0,i)})}runExclusive(e){return te(this,arguments,void 0,function*(e,t=1,n=0){let[r,i]=yield this.acquire(t,n);try{return yield e(r)}finally{i()}})}waitForUnlock(e=1,t=0){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);return this._couldLockImmediately(e,t)?Promise.resolve():new Promise(n=>{this._weightedWaiters[e-1]||(this._weightedWaiters[e-1]=[]),re(this._weightedWaiters[e-1],{resolve:n,priority:t})})}isLocked(){return this._value<=0}getValue(){return this._value}setValue(e){this._value=e,this._dispatchQueue()}release(e=1){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);this._value+=e,this._dispatchQueue()}cancel(){this._queue.forEach(e=>e.reject(this._cancelError)),this._queue=[]}_dispatchQueue(){for(this._drainUnlockWaiters();this._queue.length>0&&this._queue[0].weight<=this._value;)this._dispatchItem(this._queue.shift()),this._drainUnlockWaiters()}_dispatchItem(e){let t=this._value;this._value-=e.weight,e.resolve([t,this._newReleaser(e.weight)])}_newReleaser(e){let t=!1;return()=>{t||(t=!0,this.release(e))}}_drainUnlockWaiters(){if(this._queue.length===0)for(let e=this._value;e>0;e--){let t=this._weightedWaiters[e-1];t&&(t.forEach(e=>e.resolve()),this._weightedWaiters[e-1]=[])}else{let e=this._queue[0].priority;for(let t=this._value;t>0;t--){let n=this._weightedWaiters[t-1];if(!n)continue;let r=n.findIndex(t=>t.priority<=e);(r===-1?n:n.splice(0,r)).forEach((e=>e.resolve()))}}}_couldLockImmediately(e,t){return(this._queue.length===0||this._queue[0].priority<t)&&e<=this._value}};function re(e,t){let n=f(e,e=>t.priority<=e.priority);e.splice(n+1,0,t)}function f(e,t){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return-1}var ie=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},ae=class{constructor(e){this._semaphore=new ne(1,e)}acquire(){return ie(this,arguments,void 0,function*(e=0){let[,t]=yield this._semaphore.acquire(1,e);return t})}runExclusive(e,t=0){return this._semaphore.runExclusive(()=>e(),1,t)}isLocked(){return this._semaphore.isLocked()}waitForUnlock(e=0){return this._semaphore.waitForUnlock(1,e)}release(){this._semaphore.isLocked()&&this._semaphore.release()}cancel(){return this._semaphore.cancel()}},oe=Object.prototype.hasOwnProperty;function p(e,t){var n,r;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&p(e[r],t[r]););return r===-1}if(!n||typeof e==`object`){for(n in r=0,e)if(oe.call(e,n)&&++r&&!oe.call(t,n)||!(n in t)||!p(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!==e&&t!==t}se();function se(){let e={local:m(`local`),session:m(`session`),sync:m(`sync`),managed:m(`managed`)},t=t=>{let n=e[t];if(n==null){let n=Object.keys(e).join(`, `);throw Error(`Invalid area "${t}". Options: ${n}`)}return n},n=e=>{let n=e.indexOf(`:`),r=e.substring(0,n),i=e.substring(n+1);if(i==null)throw Error(`Storage key should be in the form of "area:key", but received "${e}"`);return{driverArea:r,driverKey:i,driver:t(r)}},r=e=>e+`$`,i=(e,t)=>{let n={...e};return Object.entries(t).forEach(([e,t])=>{t==null?delete n[e]:n[e]=t}),n},a=(e,t)=>e??t??null,o=e=>typeof e==`object`&&!Array.isArray(e)?e:{},s=async(e,t,n)=>a(await e.getItem(t),n?.fallback??n?.defaultValue),c=async(e,t)=>{let n=r(t);return o(await e.getItem(n))},l=async(e,t,n)=>{await e.setItem(t,n??null)},u=async(e,t,n)=>{let a=r(t),s=o(await e.getItem(a));await e.setItem(a,i(s,n))},ee=async(e,t,n)=>{if(await e.removeItem(t),n?.removeMeta){let n=r(t);await e.removeItem(n)}},te=async(e,t,n)=>{let i=r(t);if(n==null)await e.removeItem(i);else{let t=o(await e.getItem(i));[n].flat().forEach(e=>delete t[e]),await e.setItem(i,t)}},ne=(e,t,n)=>e.watch(t,n);return{getItem:async(e,t)=>{let{driver:r,driverKey:i}=n(e);return await s(r,i,t)},getItems:async t=>{let r=new Map,i=new Map,o=[];t.forEach(e=>{let t,a;typeof e==`string`?t=e:`getValue`in e?(t=e.key,a={fallback:e.fallback}):(t=e.key,a=e.options),o.push(t);let{driverArea:s,driverKey:c}=n(t),l=r.get(s)??[];r.set(s,l.concat(c)),i.set(t,a)});let s=new Map;return await Promise.all(Array.from(r.entries()).map(async([t,n])=>{(await e[t].getItems(n)).forEach(e=>{let n=`${t}:${e.key}`,r=i.get(n),o=a(e.value,r?.fallback??r?.defaultValue);s.set(n,o)})})),o.map(e=>({key:e,value:s.get(e)}))},getMeta:async e=>{let{driver:t,driverKey:r}=n(e);return await c(t,r)},getMetas:async e=>{let t=e.map(e=>{let t=typeof e==`string`?e:e.key,{driverArea:i,driverKey:a}=n(t);return{key:t,driverArea:i,driverKey:a,driverMetaKey:r(a)}}),i=t.reduce((e,t)=>(e[t.driverArea]??=[],e[t.driverArea].push(t),e),{}),a={};return await Promise.all(Object.entries(i).map(async([e,t])=>{let n=await d.storage[e].get(t.map(e=>e.driverMetaKey));t.forEach(e=>{a[e.key]=n[e.driverMetaKey]??{}})})),t.map(e=>({key:e.key,meta:a[e.key]}))},setItem:async(e,t)=>{let{driver:r,driverKey:i}=n(e);await l(r,i,t)},setItems:async e=>{let r={};e.forEach(e=>{let{driverArea:t,driverKey:i}=n(`key`in e?e.key:e.item.key);r[t]??=[],r[t].push({key:i,value:e.value})}),await Promise.all(Object.entries(r).map(async([e,n])=>{await t(e).setItems(n)}))},setMeta:async(e,t)=>{let{driver:r,driverKey:i}=n(e);await u(r,i,t)},setMetas:async e=>{let a={};e.forEach(e=>{let{driverArea:t,driverKey:r}=n(`key`in e?e.key:e.item.key);a[t]??=[],a[t].push({key:r,properties:e.meta})}),await Promise.all(Object.entries(a).map(async([e,n])=>{let a=t(e),s=n.map(({key:e})=>r(e)),c=await a.getItems(s),l=Object.fromEntries(c.map(({key:e,value:t})=>[e,o(t)])),u=n.map(({key:e,properties:t})=>{let n=r(e);return{key:n,value:i(l[n]??{},t)}});await a.setItems(u)}))},removeItem:async(e,t)=>{let{driver:r,driverKey:i}=n(e);await ee(r,i,t)},removeItems:async e=>{let i={};e.forEach(e=>{let t,a;typeof e==`string`?t=e:`getValue`in e?t=e.key:`item`in e?(t=e.item.key,a=e.options):(t=e.key,a=e.options);let{driverArea:o,driverKey:s}=n(t);i[o]??=[],i[o].push(s),a?.removeMeta&&i[o].push(r(s))}),await Promise.all(Object.entries(i).map(async([e,n])=>{await t(e).removeItems(n)}))},clear:async e=>{await t(e).clear()},removeMeta:async(e,t)=>{let{driver:r,driverKey:i}=n(e);await te(r,i,t)},snapshot:async(e,n)=>{let i=await t(e).snapshot();return n?.excludeKeys?.forEach(e=>{delete i[e],delete i[r(e)]}),i},restoreSnapshot:async(e,n)=>{await t(e).restoreSnapshot(n)},watch:(e,t)=>{let{driver:r,driverKey:i}=n(e);return ne(r,i,t)},unwatch(){Object.values(e).forEach(e=>{e.unwatch()})},defineItem:(e,t)=>{let{driver:i,driverKey:a}=n(e),{version:o=1,migrations:d={},onMigrationComplete:re,debug:f=!1}=t??{};if(o<1)throw Error(`Storage item version cannot be less than 1. Initial versions should be set to 1, not 0.`);let ie=!1,oe=async()=>{let t=r(a),[{value:n},{value:s}]=await i.getItems([a,t]);if(ie=n==null&&s?.v==null&&!!o,n==null)return;let c=s?.v??1;if(c>o)throw Error(`Version downgrade detected (v${c} -> v${o}) for "${e}"`);if(c===o)return;f&&console.debug(`[@wxt-dev/storage] Running storage migration for ${e}: v${c} -> v${o}`);let l=Array.from({length:o-c},(e,t)=>c+t+1),u=n;for(let t of l)try{u=await d?.[t]?.(u)??u,f&&console.debug(`[@wxt-dev/storage] Storage migration processed for version: v${t}`)}catch(n){throw new ce(e,t,{cause:n})}await i.setItems([{key:a,value:u},{key:t,value:{...s,v:o}}]),f&&console.debug(`[@wxt-dev/storage] Storage migration completed for ${e} v${o}`,{migratedValue:u}),re?.(u,o)},p=t?.migrations==null?Promise.resolve():oe().catch(t=>{console.error(`[@wxt-dev/storage] Migration failed for ${e}`,t)}),se=new ae,m=()=>t?.fallback??t?.defaultValue??null,le=()=>se.runExclusive(async()=>{let e=await i.getItem(a);if(e!=null||t?.init==null)return e;let n=await t.init();return await i.setItem(a,n),e==null&&o>1&&await u(i,a,{v:o}),n});return p.then(le),{key:e,get defaultValue(){return m()},get fallback(){return m()},getValue:async()=>(await p,t?.init?await le():await s(i,a,t)),getMeta:async()=>(await p,await c(i,a)),setValue:async e=>{await p,ie?(ie=!1,await Promise.all([l(i,a,e),u(i,a,{v:o})])):await l(i,a,e)},setMeta:async e=>(await p,await u(i,a,e)),removeValue:async e=>(await p,await ee(i,a,e)),removeMeta:async e=>(await p,await te(i,a,e)),watch:e=>ne(i,a,(t,n)=>e(t??m(),n??m())),migrate:oe}}}}function m(e){let t=()=>{if(d.runtime==null)throw Error(`'wxt/storage' must be loaded in a web extension environment

 - If thrown during a build, see https://github.com/wxt-dev/wxt/issues/371
 - If thrown during tests, mock 'wxt/browser' correctly. See https://wxt.dev/guide/go-further/testing.html
`);if(d.storage==null)throw Error(`You must add the 'storage' permission to your manifest to use 'wxt/storage'`);let t=d.storage[e];if(t==null)throw Error(`"browser.storage.${e}" is undefined`);return t},n=new Set;return{getItem:async e=>(await t().get(e))[e],getItems:async e=>{let n=await t().get(e);return e.map(e=>({key:e,value:n[e]??null}))},setItem:async(e,n)=>{n==null?await t().remove(e):await t().set({[e]:n})},setItems:async e=>{let n=e.reduce((e,{key:t,value:n})=>(e[t]=n,e),{});await t().set(n)},removeItem:async e=>{await t().remove(e)},removeItems:async e=>{await t().remove(e)},clear:async()=>{await t().clear()},snapshot:async()=>await t().get(),restoreSnapshot:async e=>{await t().set(e)},watch(e,r){let i=t=>{let n=t[e];n==null||p(n.newValue,n.oldValue)||r(n.newValue??null,n.oldValue??null)};return t().onChanged.addListener(i),n.add(i),()=>{t().onChanged.removeListener(i),n.delete(i)}},unwatch(){n.forEach(e=>{t().onChanged.removeListener(e)}),n.clear()}}}var ce=class extends Error{constructor(e,t,n){super(`v${t} migration failed for "${e}"`,n),this.key=e,this.version=t}};async function le(e){return u.default.runtime.sendMessage(e)}var h;(function(e){e.assertEqual=e=>{};function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&Number.isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(h||={});var ue;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(ue||={});var g=h.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),_=e=>{switch(typeof e){case`undefined`:return g.undefined;case`string`:return g.string;case`number`:return Number.isNaN(e)?g.nan:g.number;case`boolean`:return g.boolean;case`function`:return g.function;case`bigint`:return g.bigint;case`symbol`:return g.symbol;case`object`:return Array.isArray(e)?g.array:e===null?g.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?g.promise:typeof Map<`u`&&e instanceof Map?g.map:typeof Set<`u`&&e instanceof Set?g.set:typeof Date<`u`&&e instanceof Date?g.date:g.object;default:return g.unknown}},v=h.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),y=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,h.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)if(r.path.length>0){let n=r.path[0];t[n]=t[n]||[],t[n].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};y.create=e=>new y(e);var b=(e,t)=>{let n;switch(e.code){case v.invalid_type:n=e.received===g.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case v.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,h.jsonStringifyReplacer)}`;break;case v.unrecognized_keys:n=`Unrecognized key(s) in object: ${h.joinValues(e.keys,`, `)}`;break;case v.invalid_union:n=`Invalid input`;break;case v.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${h.joinValues(e.options)}`;break;case v.invalid_enum_value:n=`Invalid enum value. Expected ${h.joinValues(e.options)}, received '${e.received}'`;break;case v.invalid_arguments:n=`Invalid function arguments`;break;case v.invalid_return_type:n=`Invalid function return type`;break;case v.invalid_date:n=`Invalid date`;break;case v.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:h.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case v.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`||e.type===`bigint`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case v.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case v.custom:n=`Invalid input`;break;case v.invalid_intersection_types:n=`Intersection results could not be merged`;break;case v.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case v.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,h.assertNever(e)}return{message:n}},de=b;function fe(){return de}var pe=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}};function x(e,t){let n=fe(),r=pe({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===b?void 0:b].filter(e=>!!e)});e.common.issues.push(r)}var S=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return C;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return C;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},C=Object.freeze({status:`aborted`}),me=e=>({status:`dirty`,value:e}),w=e=>({status:`valid`,value:e}),he=e=>e.status===`aborted`,ge=e=>e.status===`dirty`,T=e=>e.status===`valid`,_e=e=>typeof Promise<`u`&&e instanceof Promise,E;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(E||={});var D=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},ve=(e,t)=>{if(T(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){return this._error||=new y(e.common.issues),this._error}}};function O(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var k=class{get description(){return this._def.description}_getType(e){return _(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:_(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new S,ctx:{common:e.parent.common,data:e.data,parsedType:_(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(_e(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:_(e)};return ve(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:_(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return T(n)?{value:n.value}:{issues:t.common.issues}}catch(e){e?.message?.toLowerCase()?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>T(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:_(e)},r=this._parse({data:e,path:n.path,parent:n});return ve(n,await(_e(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:v.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new R({schema:this,typeName:V.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return z.create(this,this._def)}nullable(){return B.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return M.create(this)}promise(){return L.create(this,this._def)}or(e){return et.create([this,e],this._def)}and(e){return rt.create(this,e,this._def)}transform(e){return new R({...O(this._def),schema:this,typeName:V.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new pt({...O(this._def),innerType:this,defaultValue:t,typeName:V.ZodDefault})}brand(){return new gt({typeName:V.ZodBranded,type:this,...O(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new mt({...O(this._def),innerType:this,catchValue:t,typeName:V.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return _t.create(this,e)}readonly(){return vt.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},ye=/^c[^\s-]{8,}$/i,be=/^[0-9a-z]+$/,xe=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Se=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Ce=/^[a-z0-9_-]{21}$/i,we=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Te=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Ee=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,De=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,Oe,ke=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ae=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,je=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Me=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ne=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Pe=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Fe=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,Ie=RegExp(`^${Fe}$`);function Le(e){let t=`[0-5]\\d`;e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`);let n=e.precision?`+`:`?`;return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`}function Re(e){return RegExp(`^${Le(e)}$`)}function ze(e){let t=`${Fe}T${Le(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function Be(e,t){return!!((t===`v4`||!t)&&ke.test(e)||(t===`v6`||!t)&&je.test(e))}function Ve(e,t){if(!we.test(e))return!1;try{let[n]=e.split(`.`);if(!n)return!1;let r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&i.alg!==t)}catch{return!1}}function He(e,t){return!!((t===`v4`||!t)&&Ae.test(e)||(t===`v6`||!t)&&Me.test(e))}var Ue=class e extends k{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==g.string){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.string,received:t.parsedType}),C}let t=new S,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),x(n,{code:v.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),x(n,{code:v.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?x(n,{code:v.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&x(n,{code:v.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)Ee.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`email`,code:v.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)Oe||=new RegExp(De,`u`),Oe.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`emoji`,code:v.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)Se.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`uuid`,code:v.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)Ce.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`nanoid`,code:v.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)ye.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`cuid`,code:v.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)be.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`cuid2`,code:v.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)xe.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`ulid`,code:v.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),x(n,{validation:`url`,code:v.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`regex`,code:v.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),x(n,{code:v.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),x(n,{code:v.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),x(n,{code:v.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?ze(r).test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{code:v.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?Ie.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{code:v.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?Re(r).test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{code:v.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?Te.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`duration`,code:v.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?Be(e.data,r.version)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`ip`,code:v.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?Ve(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`jwt`,code:v.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?He(e.data,r.version)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`cidr`,code:v.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?Ne.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`base64`,code:v.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?Pe.test(e.data)||(n=this._getOrReturnCtx(e,n),x(n,{validation:`base64url`,code:v.invalid_string,message:r.message}),t.dirty()):h.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:v.invalid_string,...E.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...E.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...E.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...E.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...E.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...E.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...E.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...E.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...E.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...E.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...E.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...E.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...E.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...E.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...E.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...E.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...E.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...E.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...E.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...E.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...E.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...E.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...E.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...E.errToObj(t)})}nonempty(e){return this.min(1,E.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};Ue.create=e=>new Ue({checks:[],typeName:V.ZodString,coerce:e?.coerce??!1,...O(e)});function We(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return Number.parseInt(e.toFixed(i).replace(`.`,``))%Number.parseInt(t.toFixed(i).replace(`.`,``))/10**i}var Ge=class e extends k{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==g.number){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.number,received:t.parsedType}),C}let t,n=new S;for(let r of this._def.checks)r.kind===`int`?h.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),x(t,{code:v.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),x(t,{code:v.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),x(t,{code:v.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?We(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),x(t,{code:v.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),x(t,{code:v.not_finite,message:r.message}),n.dirty()):h.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,E.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,E.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,E.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,E.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:E.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:E.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:E.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:E.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:E.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:E.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:E.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:E.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:E.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:E.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&h.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};Ge.create=e=>new Ge({checks:[],typeName:V.ZodNumber,coerce:e?.coerce||!1,...O(e)});var Ke=class e extends k{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==g.bigint)return this._getInvalidInput(e);let t,n=new S;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),x(t,{code:v.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),x(t,{code:v.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),x(t,{code:v.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):h.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.bigint,received:t.parsedType}),C}gte(e,t){return this.setLimit(`min`,e,!0,E.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,E.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,E.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,E.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:E.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:E.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:E.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:E.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:E.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:E.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};Ke.create=e=>new Ke({checks:[],typeName:V.ZodBigInt,coerce:e?.coerce??!1,...O(e)});var qe=class extends k{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==g.boolean){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.boolean,received:t.parsedType}),C}return w(e.data)}};qe.create=e=>new qe({typeName:V.ZodBoolean,coerce:e?.coerce||!1,...O(e)});var Je=class e extends k{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==g.date){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.date,received:t.parsedType}),C}if(Number.isNaN(e.data.getTime()))return x(this._getOrReturnCtx(e),{code:v.invalid_date}),C;let t=new S,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),x(n,{code:v.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),x(n,{code:v.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):h.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:E.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:E.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};Je.create=e=>new Je({checks:[],coerce:e?.coerce||!1,typeName:V.ZodDate,...O(e)});var Ye=class extends k{_parse(e){if(this._getType(e)!==g.symbol){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.symbol,received:t.parsedType}),C}return w(e.data)}};Ye.create=e=>new Ye({typeName:V.ZodSymbol,...O(e)});var Xe=class extends k{_parse(e){if(this._getType(e)!==g.undefined){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.undefined,received:t.parsedType}),C}return w(e.data)}};Xe.create=e=>new Xe({typeName:V.ZodUndefined,...O(e)});var Ze=class extends k{_parse(e){if(this._getType(e)!==g.null){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.null,received:t.parsedType}),C}return w(e.data)}};Ze.create=e=>new Ze({typeName:V.ZodNull,...O(e)});var Qe=class extends k{constructor(){super(...arguments),this._any=!0}_parse(e){return w(e.data)}};Qe.create=e=>new Qe({typeName:V.ZodAny,...O(e)});var A=class extends k{constructor(){super(...arguments),this._unknown=!0}_parse(e){return w(e.data)}};A.create=e=>new A({typeName:V.ZodUnknown,...O(e)});var j=class extends k{_parse(e){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.never,received:t.parsedType}),C}};j.create=e=>new j({typeName:V.ZodNever,...O(e)});var $e=class extends k{_parse(e){if(this._getType(e)!==g.undefined){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.void,received:t.parsedType}),C}return w(e.data)}};$e.create=e=>new $e({typeName:V.ZodVoid,...O(e)});var M=class e extends k{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==g.array)return x(t,{code:v.invalid_type,expected:g.array,received:t.parsedType}),C;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(x(t,{code:e?v.too_big:v.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(x(t,{code:v.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(x(t,{code:v.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new D(t,e,t.path,n)))).then(e=>S.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new D(t,e,t.path,n)));return S.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:E.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:E.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:E.toString(n)}})}nonempty(e){return this.min(1,e)}};M.create=(e,t)=>new M({type:e,minLength:null,maxLength:null,exactLength:null,typeName:V.ZodArray,...O(t)});function N(e){if(e instanceof P){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=z.create(N(r))}return new P({...e._def,shape:()=>t})}else if(e instanceof M)return new M({...e._def,type:N(e.element)});else if(e instanceof z)return z.create(N(e.unwrap()));else if(e instanceof B)return B.create(N(e.unwrap()));else if(e instanceof I)return I.create(e.items.map(e=>N(e)));else return e}var P=class e extends k{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape();return this._cached={shape:e,keys:h.objectKeys(e)},this._cached}_parse(e){if(this._getType(e)!==g.object){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.object,received:t.parsedType}),C}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof j&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new D(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof j){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(x(n,{code:v.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new D(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>S.mergeObjectSync(t,e)):S.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return E.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{let r=this._def.errorMap?.(e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:E.errToObj(t).message??r}:{message:r}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:V.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};for(let e of h.objectKeys(t))t[e]&&this.shape[e]&&(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}omit(t){let n={};for(let e of h.objectKeys(this.shape))t[e]||(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}deepPartial(){return N(this)}partial(t){let n={};for(let e of h.objectKeys(this.shape)){let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}return new e({...this._def,shape:()=>n})}required(t){let n={};for(let e of h.objectKeys(this.shape))if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof z;)t=t._def.innerType;n[e]=t}return new e({...this._def,shape:()=>n})}keyof(){return ut(h.objectKeys(this.shape))}};P.create=(e,t)=>new P({shape:()=>e,unknownKeys:`strip`,catchall:j.create(),typeName:V.ZodObject,...O(t)}),P.strictCreate=(e,t)=>new P({shape:()=>e,unknownKeys:`strict`,catchall:j.create(),typeName:V.ZodObject,...O(t)}),P.lazycreate=(e,t)=>new P({shape:e,unknownKeys:`strip`,catchall:j.create(),typeName:V.ZodObject,...O(t)});var et=class extends k{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new y(e.ctx.common.issues));return x(t,{code:v.invalid_union,unionErrors:n}),C}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new y(e));return x(t,{code:v.invalid_union,unionErrors:i}),C}}get options(){return this._def.options}};et.create=(e,t)=>new et({options:e,typeName:V.ZodUnion,...O(t)});var F=e=>e instanceof ct?F(e.schema):e instanceof R?F(e.innerType()):e instanceof lt?[e.value]:e instanceof dt?e.options:e instanceof ft?h.objectValues(e.enum):e instanceof pt?F(e._def.innerType):e instanceof Xe?[void 0]:e instanceof Ze?[null]:e instanceof z?[void 0,...F(e.unwrap())]:e instanceof B?[null,...F(e.unwrap())]:e instanceof gt||e instanceof vt?F(e.unwrap()):e instanceof mt?F(e._def.innerType):[],tt=class e extends k{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==g.object)return x(t,{code:v.invalid_type,expected:g.object,received:t.parsedType}),C;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(x(t,{code:v.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),C)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=F(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:V.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...O(r)})}};function nt(e,t){let n=_(e),r=_(t);if(e===t)return{valid:!0,data:e};if(n===g.object&&r===g.object){let n=h.objectKeys(t),r=h.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=nt(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}else if(n===g.array&&r===g.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=nt(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}else if(n===g.date&&r===g.date&&+e==+t)return{valid:!0,data:e};else return{valid:!1}}var rt=class extends k{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(he(e)||he(r))return C;let i=nt(e.value,r.value);return i.valid?((ge(e)||ge(r))&&t.dirty(),{status:t.value,value:i.data}):(x(n,{code:v.invalid_intersection_types}),C)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};rt.create=(e,t,n)=>new rt({left:e,right:t,typeName:V.ZodIntersection,...O(n)});var I=class e extends k{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==g.array)return x(n,{code:v.invalid_type,expected:g.array,received:n.parsedType}),C;if(n.data.length<this._def.items.length)return x(n,{code:v.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),C;!this._def.rest&&n.data.length>this._def.items.length&&(x(n,{code:v.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new D(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>S.mergeArray(t,e)):S.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};I.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new I({items:e,typeName:V.ZodTuple,rest:null,...O(t)})};var it=class e extends k{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==g.object)return x(n,{code:v.invalid_type,expected:g.object,received:n.parsedType}),C;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new D(n,e,n.path,e)),value:a._parse(new D(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?S.mergeObjectAsync(t,r):S.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof k?new e({keyType:t,valueType:n,typeName:V.ZodRecord,...O(r)}):new e({keyType:Ue.create(),valueType:t,typeName:V.ZodRecord,...O(n)})}},at=class extends k{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==g.map)return x(n,{code:v.invalid_type,expected:g.map,received:n.parsedType}),C;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new D(n,e,n.path,[a,`key`])),value:i._parse(new D(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return C;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}else{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return C;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};at.create=(e,t,n)=>new at({valueType:t,keyType:e,typeName:V.ZodMap,...O(n)});var ot=class e extends k{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==g.set)return x(n,{code:v.invalid_type,expected:g.set,received:n.parsedType}),C;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(x(n,{code:v.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(x(n,{code:v.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return C;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new D(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:E.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:E.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};ot.create=(e,t)=>new ot({valueType:e,minSize:null,maxSize:null,typeName:V.ZodSet,...O(t)});var st=class e extends k{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==g.function)return x(t,{code:v.invalid_type,expected:g.function,received:t.parsedType}),C;function n(e,n){return pe({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,fe(),b].filter(e=>!!e),issueData:{code:v.invalid_arguments,argumentsError:n}})}function r(e,n){return pe({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,fe(),b].filter(e=>!!e),issueData:{code:v.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof L){let e=this;return w(async function(...t){let o=new y([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}else{let e=this;return w(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new y([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new y([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:I.create(t).rest(A.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||I.create([]).rest(A.create()),returns:n||A.create(),typeName:V.ZodFunction,...O(r)})}},ct=class extends k{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};ct.create=(e,t)=>new ct({getter:e,typeName:V.ZodLazy,...O(t)});var lt=class extends k{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return x(t,{received:t.data,code:v.invalid_literal,expected:this._def.value}),C}return{status:`valid`,value:e.data}}get value(){return this._def.value}};lt.create=(e,t)=>new lt({value:e,typeName:V.ZodLiteral,...O(t)});function ut(e,t){return new dt({values:e,typeName:V.ZodEnum,...O(t)})}var dt=class e extends k{_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return x(t,{expected:h.joinValues(n),received:t.parsedType,code:v.invalid_type}),C}if(this._cache||=new Set(this._def.values),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return x(t,{received:t.data,code:v.invalid_enum_value,options:n}),C}return w(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};dt.create=ut;var ft=class extends k{_parse(e){let t=h.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==g.string&&n.parsedType!==g.number){let e=h.objectValues(t);return x(n,{expected:h.joinValues(e),received:n.parsedType,code:v.invalid_type}),C}if(this._cache||=new Set(h.getValidEnumValues(this._def.values)),!this._cache.has(e.data)){let e=h.objectValues(t);return x(n,{received:n.data,code:v.invalid_enum_value,options:e}),C}return w(e.data)}get enum(){return this._def.values}};ft.create=(e,t)=>new ft({values:e,typeName:V.ZodNativeEnum,...O(t)});var L=class extends k{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==g.promise&&t.common.async===!1?(x(t,{code:v.invalid_type,expected:g.promise,received:t.parsedType}),C):w((t.parsedType===g.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};L.create=(e,t)=>new L({type:e,typeName:V.ZodPromise,...O(t)});var R=class extends k{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===V.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{x(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return C;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?C:r.status===`dirty`||t.value===`dirty`?me(r.value):r});{if(t.value===`aborted`)return C;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?C:r.status===`dirty`||t.value===`dirty`?me(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?C:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?C:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!T(e))return C;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>T(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):C);h.assertNever(r)}};R.create=(e,t,n)=>new R({schema:e,typeName:V.ZodEffects,effect:t,...O(n)}),R.createWithPreprocess=(e,t,n)=>new R({schema:t,effect:{type:`preprocess`,transform:e},typeName:V.ZodEffects,...O(n)});var z=class extends k{_parse(e){return this._getType(e)===g.undefined?w(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};z.create=(e,t)=>new z({innerType:e,typeName:V.ZodOptional,...O(t)});var B=class extends k{_parse(e){return this._getType(e)===g.null?w(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};B.create=(e,t)=>new B({innerType:e,typeName:V.ZodNullable,...O(t)});var pt=class extends k{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===g.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};pt.create=(e,t)=>new pt({innerType:e,typeName:V.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...O(t)});var mt=class extends k{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return _e(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new y(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new y(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};mt.create=(e,t)=>new mt({innerType:e,typeName:V.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...O(t)});var ht=class extends k{_parse(e){if(this._getType(e)!==g.nan){let t=this._getOrReturnCtx(e);return x(t,{code:v.invalid_type,expected:g.nan,received:t.parsedType}),C}return{status:`valid`,value:e.data}}};ht.create=e=>new ht({typeName:V.ZodNaN,...O(e)});var gt=class extends k{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},_t=class e extends k{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?C:e.status===`dirty`?(t.dirty(),me(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?C:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:V.ZodPipeline})}},vt=class extends k{_parse(e){let t=this._def.innerType._parse(e),n=e=>(T(e)&&(e.value=Object.freeze(e.value)),e);return _e(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};vt.create=(e,t)=>new vt({innerType:e,typeName:V.ZodReadonly,...O(t)}),P.lazycreate;var V;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(V||={});var H=Ue.create,U=Ge.create;ht.create,Ke.create;var W=qe.create;Je.create,Ye.create,Xe.create,Ze.create,Qe.create,A.create,j.create,$e.create;var G=M.create,K=P.create;P.strictCreate,et.create;var yt=tt.create;rt.create,I.create,it.create,at.create,ot.create,st.create,ct.create;var q=lt.create,bt=dt.create;ft.create,L.create,R.create,z.create,B.create,R.createWithPreprocess,_t.create;var xt=bt([`local_rules`,`byok_llm`,`hosted_llm`]),St=`openrouter/free`,Ct=bt([`show`,`blur`,`hide`,`neutralize`,`collapse`,`rebuild`]);K({id:H(),site:H(),fingerprint:H(),sourceName:H().optional(),title:H(),metadata:G(H()),isNew:W(),url:H().url().optional()}),K({decision:Ct,confidence:U().min(0).max(1),reason:H(),neutralizedTitle:H().optional(),error:H().optional()});var wt=K({politics:W().default(!1),ragebait:W().default(!1),spoilers:W().default(!1),clickbait:W().default(!1)}),Tt=K({blocklistChannels:G(H()).default([]),blocklistKeywords:G(H()).default([]),allowlistChannels:G(H()).default([]),allowlistKeywords:G(H()).default([]),presets:wt.default({politics:!1,ragebait:!1,spoilers:!1,clickbait:!1})}),Et=bt([`light`,`medium`,`strict`]),Dt=K({enabled:W().default(!0),mode:Et.default(`medium`),showIndicator:W().default(!0),showDiffOnHover:W().default(!0),excludeDomains:G(H()).default([])}),Ot={enabled:!0,mode:`medium`,showIndicator:!0,showDiffOnHover:!0,excludeDomains:[]},kt=K({enabled:W().default(!0),defaultLayout:H().default(`auto`),defaultTheme:H().default(`default`),autoOpen:W().default(!0),textOnly:W().default(!0),font:H().default(`Inter`),fontSize:H().default(`17px`),showInContextMenu:W().default(!0),apiEndpoint:H().optional(),apiKey:H().optional()}),At={enabled:!0,defaultLayout:`auto`,defaultTheme:`default`,autoOpen:!0,textOnly:!0,font:`Inter`,fontSize:`17px`,showInContextMenu:!0},jt=bt([`off`,`blur`,`hide`]),Mt=K({enabled:W().default(!0),mode:jt.default(`blur`),blurThreshold:U().min(0).max(1).default(.5),hideThreshold:U().min(0).max(1).default(.8),analyzeAltText:W().default(!0),analyzeThumbnails:W().default(!0),showToggle:W().default(!0),revealOnHover:W().default(!0)}),Nt={enabled:!0,mode:`blur`,blurThreshold:.5,hideThreshold:.8,analyzeAltText:!0,analyzeThumbnails:!0,showToggle:!0,revealOnHover:!0},Pt=bt([`social_media`,`content_farms`,`gambling`,`adult`,`piracy`,`malware`,`spam`,`fake_news`,`productivity`,`shopping`,`gaming`,`streaming`,`news`,`custom`]),Ft=K({enabled:W().default(!0),blockBlockedSites:W().default(!0),searchFilterEnabled:W().default(!0),hideBlockedResults:W().default(!0),showCategoryBadge:W().default(!1),blockedCategories:G(Pt).default([]),customBlocklist:G(H()).default([]),customAllowlist:G(H()).default([]),useExternalBlocklists:W().default(!0),redirectToDDG:W().default(!1)});K({enabled:W().default(!0),processingMode:xt.default(`local_rules`),strictness:U().min(0).max(100).default(80),rules:Tt.default({blocklistChannels:[],blocklistKeywords:[],allowlistChannels:[],allowlistKeywords:[],presets:{politics:!1,ragebait:!0,spoilers:!1,clickbait:!0}}),byokKey:H().optional(),aiModel:H().default(St),customEndpoint:H().optional(),neutralization:Dt.default(Ot),reader:kt.default(At),mediaFilter:Mt.default(Nt),siteFilter:Ft.default({enabled:!0,blockBlockedSites:!0,searchFilterEnabled:!0,hideBlockedResults:!0,showCategoryBadge:!1,blockedCategories:[`gambling`,`malware`,`spam`,`fake_news`,`content_farms`],customBlocklist:[],customAllowlist:[],useExternalBlocklists:!0,redirectToDDG:!1})});function It(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return t.toString(36)}function Lt(e){return It(`${e.title}|${e.sourceName||``}|${e.site}`)}K({totalFiltered:U().default(0),byAction:K({hide:U().default(0),blur:U().default(0),neutralize:U().default(0),collapse:U().default(0)}).default({hide:0,blur:0,neutralize:0,collapse:0}),byPreset:K({politics:U().default(0),ragebait:U().default(0),spoilers:U().default(0),clickbait:U().default(0)}).default({politics:0,ragebait:0,spoilers:0,clickbait:0}),timeSaved:U().default(0),topFilteredSources:G(H()).default([]),dailyHistory:G(K({date:H(),count:U()})).default([]),lastReset:U().default(Date.now())});var Rt={preset_politics:`Politics filtered`,preset_ragebait:`Ragebait blocked`,preset_spoilers:`Spoiler shield`,preset_clickbait:`Clickbait removed`,blocklist_channel:`Blocked source`,blocklist_keyword:`Filtered keyword`,llm_classification:`AI filtered`,hosted:`Content filtered`};function zt(e){for(let[t,n]of Object.entries(Rt))if(e.includes(t))return n;return`Content filtered`}function Bt(e){return e.includes(`politics`)?`🏛️`:e.includes(`ragebait`)?`😠`:e.includes(`spoilers`)?`🤐`:e.includes(`clickbait`)?`🎯`:e.includes(`channel`)||e.includes(`keyword`)?`🚫`:`🛡️`}function Vt(e){let{reason:t,originalElement:n,result:r,onExpand:i,siteId:a}=e,o=document.createElement(`div`);o.className=`calmweb-collapse-container`,o.setAttribute(`data-calmweb-collapse`,`true`),o.setAttribute(`data-calmweb-reason`,t);let s=zt(t);return o.innerHTML=`
    <div class="calmweb-collapse-badge">
      <span class="calmweb-collapse-icon">${Bt(t)}</span>
      <span class="calmweb-collapse-label">${s}</span>
    </div>
    <button class="calmweb-collapse-expand" type="button">
      <span>Show anyway</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
  `,o.querySelector(`.calmweb-collapse-expand`).addEventListener(`click`,e=>{e.stopPropagation(),Ht(o,n),i&&i()}),o.setAttribute(`data-calmweb-original-height`,String(n.offsetHeight)),o.setAttribute(`data-calmweb-site`,a||`unknown`),o}function Ht(e,t){e.classList.add(`calmweb-collapse-expanding`),requestAnimationFrame(()=>{t.style.display=``,t.style.opacity=`0`,t.style.transition=`opacity 0.2s ease-in-out`,e.replaceWith(t),requestAnimationFrame(()=>{t.style.opacity=`1`,setTimeout(()=>{t.style.transition=``,t.style.opacity=``},200)})})}var Ut=[`nav`,`header`,`footer`,`aside`,`[class*="nav"]`,`[class*="menu"]`,`[class*="sidebar"]`,`[class*="footer"]`,`[class*="header"]`,`[class*="banner"]`,`[class*="breadcrumb"]`,`[class*="pagination"]`,`[role="navigation"]`,`[role="banner"]`,`[role="contentinfo"]`],Wt=200;function Gt(e){return Ut.some(t=>{try{return e.closest(t)!==null}catch{return!1}})}function Kt(e){let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`&&t.opacity!==`0`&&e.offsetWidth>0&&e.offsetHeight>0}function J(e){return e.innerText?.trim()||``}function qt(e){let t=[],n=new Set,r=(e,r,i=!1)=>{if(!e||Gt(e)||!i&&!Kt(e))return;let a=r?r.substring(0,30).toLowerCase():`${e.tagName}-${e.className}`.substring(0,30);n.has(a)||t.length>=Wt||(n.add(a),t.push(e))},i=e.querySelectorAll(`h1, h2, h3, h4, h5, h6`);for(let e of Array.from(i)){let t=J(e);t.length<2||r(e,t)}let a=e.querySelectorAll(`p`);for(let e of Array.from(a)){let t=J(e);t.length<20||r(e,t)}let o=e.querySelectorAll(`a[href]`);for(let e of Array.from(o)){let t=J(e);t.length<5||r(e.closest(`div, section, td, li, p`)||e,t)}let s=e.querySelectorAll(`img`);for(let e of Array.from(s)){let t=e.getAttribute(`alt`)||``,n=e.getAttribute(`src`)||``;e.offsetWidth<50||e.offsetHeight<50||!t&&(e.offsetWidth<100||e.offsetHeight<100)||r(e,t||`Image: ${n.substring(0,20)}`,!0)}let c=e.querySelectorAll(`video, iframe[src*="youtube"], iframe[src*="vimeo"], iframe[src*="video"]`);for(let e of Array.from(c))r(e,J(e)||e.getAttribute(`title`)||e.getAttribute(`src`)||``,!0);let l=e.querySelectorAll(`li`);for(let e of Array.from(l)){let t=J(e);t.length<15||r(e,t)}let u=e.querySelectorAll(`article, section, [role="article"]`);for(let e of Array.from(u)){let t=J(e);t.length<30||r(e,t)}let d=e.querySelectorAll(`div`);for(let e of Array.from(d)){let t=J(e);t.length<200||Gt(e)||r(e,t.substring(0,100))}return console.log(`[UniversalAdapter] Found ${t.length} content items (headings, paragraphs, images, videos, etc)`),t}function Jt(e){if(e.tagName===`IMG`)return e.getAttribute(`alt`)||`Image`;if(e.tagName===`VIDEO`||e.tagName===`IFRAME`)return e.getAttribute(`title`)||e.getAttribute(`src`)||`Video`;for(let t of[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]){let n=e.querySelector(t);if(n&&n.textContent){let e=n.textContent.trim();if(e.length>0)return e}}let t=e.querySelectorAll(`a`);for(let e of Array.from(t)){let t=e.textContent?.trim();if(t&&t.length>3)return t}let n=(e.textContent||``).trim();return n.length>0?n.substring(0,100):`Untitled`}function Yt(e){for(let t of[`[class*="author"]`,`[rel="author"]`,`.byline`,`.source`,`[class*="byline"]`,`[class*="source"]`])try{let n=e.querySelector(t);if(n&&n.textContent){let e=n.textContent.trim();if(e.length>0)return e}}catch{}return window.location.hostname}function Xt(e){let t=[];if(e.tagName===`IMG`){let n=e.getAttribute(`alt`);n&&t.push(`alt: ${n}`)}let n=e.querySelector(`time, [datetime]`);if(n){let e=n.getAttribute(`datetime`)||J(n);e&&t.push(e)}return t}var Y={siteId:`universal`,matches:[/.*/],discoverUnits:qt,extractData(e){let t=Jt(e),n=Yt(e),r=Xt(e),i=Lt({title:t,sourceName:n,site:`universal`,metadata:r});return{id:e.id||`uni-${i}`,site:`universal`,fingerprint:i,sourceName:n,title:t,metadata:r,isNew:!1}},applyDecision(e,t){e.removeAttribute(`data-calmweb-processed`),e.style.filter=``,e.style.opacity=``,e.classList.remove(`calmweb-blurred`,`calmweb-hidden`);let n=Jt(e);if(t.decision===`hide`)e.style.display=`none`,e.setAttribute(`data-calmweb-processed`,`hidden`),window.dispatchEvent(new CustomEvent(`calmweb:neutralized`,{detail:{before:n,after:`[Hidden]`}}));else if(t.decision===`collapse`){let r=Vt({reason:t.reason,originalElement:e,result:t,siteId:`universal`});e.style.display=`none`,e.insertAdjacentElement(`afterend`,r),e.setAttribute(`data-calmweb-processed`,`collapsed`),window.dispatchEvent(new CustomEvent(`calmweb:neutralized`,{detail:{before:n,after:`[Collapsed]`}}))}else if(t.decision===`blur`)e.classList.add(`calmweb-blurred`),e.setAttribute(`data-calmweb-processed`,`blur`);else if(t.decision===`neutralize`&&t.neutralizedTitle){let r=n,i=e.querySelector(`h1, h2, h3, h4, h5, h6, a`);i instanceof HTMLElement&&(i.innerText=t.neutralizedTitle),e.setAttribute(`data-calmweb-processed`,`neutralized`),window.dispatchEvent(new CustomEvent(`calmweb:neutralized`,{detail:{before:r,after:t.neutralizedTitle}}))}else e.setAttribute(`data-calmweb-processed`,`show`)}},X={CLASSIFY_UNIT:`calmweb:classifyUnit`,GET_SETTINGS:`calmweb:getSettings`,UPDATE_SETTINGS:`calmweb:updateSettings`,CLEAR_CACHE:`calmweb:clearCache`,GET_STATS:`calmweb:getStats`,INCREMENT_STAT:`calmweb:incrementStat`};yt(`type`,[K({type:q(X.CLASSIFY_UNIT),unit:K({id:H(),site:H(),fingerprint:H(),sourceName:H().optional(),title:H(),metadata:G(H()),isNew:W(),url:H().url().optional()})}),K({type:q(X.GET_SETTINGS)}),K({type:q(X.UPDATE_SETTINGS),settings:K({enabled:W().optional(),rules:K({blocklistChannels:G(H()).optional(),blocklistKeywords:G(H()).optional(),allowlistChannels:G(H()).optional(),allowlistKeywords:G(H()).optional(),presets:K({politics:W().optional(),ragebait:W().optional(),spoilers:W().optional(),clickbait:W().optional()}).optional()}).optional()})}),K({type:q(X.CLEAR_CACHE)}),K({type:q(X.GET_STATS)}),K({type:q(X.INCREMENT_STAT),key:q(`totalFiltered`),amount:U().optional()})]);var Zt=`[class*="ad-container"],[class*="ad_container"],[class*="adContainer"],[class*="ad-wrapper"],[class*="ad_wrapper"],[class*="adWrapper"],[class*="ad-slot"],[class*="ad_slot"],[class*="adSlot"],[class*="ad-banner"],[class*="ad_banner"],[class*="adBanner"],[class*="ad-unit"],[class*="ad_unit"],[class*="adUnit"],[class*="ad-placement"],[class*="ad_placement"],[class*="adPlacement"],[class*="ad-wrapper"],[class*="advert"],[class*="advertisement"],[class*="advertisment"],[id*="ad-container"],[id*="ad_container"],[id*="adContainer"],[id*="ad-slot"],[id*="ad_slot"],[id*="adSlot"],[id*="ad-banner"],[id*="ad_banner"],[id*="adBanner"],[id*="ad-unit"],[id*="ad_unit"],[id*="adUnit"],[id*="advert"],[id*="advertisement"],.ad,.ads,.adsbygoogle,.ad-placement,.ad-zone,.ad-box,.ad-block,.ad-panel,.ad-section,.ad-label,.ad-placeholder,.ad-overlay,.ad-leaderboard,.ad-sidebar,.ad-inline,.ad-mobile,.ad-desktop,.ad-top,.ad-bottom,.ad-header,.ad-footer,.ad-content,.ad-right,.ad-left,.ad-center,.advert,.advertisement,.advertising,.advertorial,.sponsored,.sponsor,.sponsored-content,.sponsored-post,.promoted,.promotion,.promo,[data-ad],[data-ad-slot],[data-ad-client],[data-ad-format],[data-adunit],[data-adunit-path],[data-dfp],[data-google-query-id],[aria-label="advertisement"],[aria-label="Ad"],[aria-label="Sponsored"],.google-ad,.googleads,.adsense,ins.adsbygoogle,iframe[src*="doubleclick.net"],iframe[src*="googlesyndication.com"],iframe[src*="googleadservices.com"],iframe[src*="adnxs.com"],iframe[src*="amazon-adsystem.com"],iframe[src*="adsrvr.org"],iframe[src*="adform.net"],iframe[src*="moatads.com"],iframe[src*="outbrain.com"],iframe[src*="taboola.com"],iframe[src*="criteo.com"],iframe[src*="criteo.net"],iframe[id*="google_ads"],[data-testid*="promoted"],[data-promoted="true"],[class*="promoted-tweet"],[class*="sponsored-label"],[class*="ad-badge"],[class*="newsletter-popup"],[class*="newsletter-overlay"],[class*="subscribe-popup"],[class*="signup-popup"],[class*="email-signup"],[class*="mail-signup"],[class*="cookie-banner-ad"],[class*="consent-banner-promo"]`.split(`,`),Qt=[`doubleclick.net`,`googlesyndication.com`,`googleadservices.com`,`adservice.google`,`pagead2.googlesyndication.com`,`securepubads.g.doubleclick.net`,`adnxs.com`,`amazon-adsystem.com`,`adsrvr.org`,`adform.net`,`moatads.com`,`outbrain.com`,`taboola.com`,`criteo.com`,`criteo.net`,`ads-twitter.com`,`facebook.com/tr`,`analytics.tiktok.com`,`snap.licdn.com`,`bat.bing.com`];function $t(e=document){let t=0;for(let n of Zt)try{let r=e.querySelectorAll(n);for(let e of Array.from(r))e instanceof HTMLElement&&(e.style.setProperty(`display`,`none`,`important`),e.setAttribute(`data-calmweb-ad-hidden`,`true`),t++)}catch{}let n=e.querySelectorAll(`iframe`);for(let e of Array.from(n)){let n=e.getAttribute(`src`)||``;Qt.some(e=>n.includes(e))&&(e.style.setProperty(`display`,`none`,`important`),e.setAttribute(`data-calmweb-ad-hidden`,`true`),t++)}return{hidden:t,removed:0,total:t+0}}function en(e=document){$t(e);let t=new MutationObserver(t=>{let n=!1;for(let e of t)if(e.addedNodes.length>0){n=!0;break}n&&$t(e)});return t.observe(e.body||e.documentElement,{childList:!0,subtree:!0}),()=>t.disconnect()}var tn=`calmweb-cleanup-css`,nn=`
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
`;function rn(){if(document.getElementById(tn))return()=>{};let e=document.createElement(`style`);return e.id=tn,e.textContent=nn,document.head.appendChild(e),()=>{let e=document.getElementById(tn);e&&e.remove()}}var an=`calmweb-activity-overlay`,on=`calmweb-activity-styles`,Z=[],sn=20,Q=null,$=!1;function cn(){if(document.getElementById(on))return;let e=document.createElement(`style`);e.id=on,e.textContent=`
    #${an} {
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
  `,document.head.appendChild(e)}function ln(){let e=document.createElement(`div`);e.id=an,e.innerHTML=`
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
  `;let t=e.querySelector(`.calmweb-activity-header`),n=e.querySelector(`.calmweb-activity-panel`),r=e.querySelectorAll(`.calmweb-activity-tab`);return t.addEventListener(`click`,()=>{$=!$,n.classList.toggle(`visible`,$),$&&dn(`all`)}),r.forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),r.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),dn(e.dataset.tab||`all`)})}),e}function un(){if(!Q)return;let e=Z.length,t=Q.querySelector(`.calmweb-activity-badge`),n=Q.querySelector(`.calmweb-activity-count`);t.textContent=e.toString(),t.classList.toggle(`empty`,e===0),n.textContent=`${e} item${e===1?``:`s`} filtered`}function dn(e){if(!Q)return;let t=Q.querySelector(`.calmweb-activity-list`),n=e===`all`?Z:Z.filter(t=>t.type===e);if(n.length===0){t.innerHTML=`
      <div class="calmweb-activity-empty">
        <div class="calmweb-activity-empty-icon">✨</div>
        <div>No recent activity</div>
      </div>
    `;return}t.innerHTML=n.map(e=>{let t=pn(e.timestamp),n={neutralized:`Neutralized`,blocked:`Blocked`,media:`Media`,search:`Search`}[e.type];return e.type===`neutralized`&&e.after?`
        <div class="calmweb-activity-item ${e.type}">
          <div class="calmweb-activity-label">${n}</div>
          <div class="calmweb-activity-before">${fn(e.before)}</div>
          <div class="calmweb-activity-arrow">↓</div>
          <div class="calmweb-activity-after">${fn(e.after)}</div>
          <div class="calmweb-activity-time">${t}</div>
        </div>
      `:`
      <div class="calmweb-activity-item ${e.type}">
        <div class="calmweb-activity-label">${n}</div>
        <div class="calmweb-activity-after">${fn(e.before)}</div>
        ${e.reason?`<div class="calmweb-activity-time">${e.reason}</div>`:``}
        <div class="calmweb-activity-time">${t}</div>
      </div>
    `}).join(``)}function fn(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function pn(e){let t=Math.floor((Date.now()-e)/1e3);if(t<60)return`Just now`;let n=Math.floor(t/60);return n<60?`${n}m ago`:`${Math.floor(n/60)}h ago`}function mn(e){if(Z.unshift({...e,id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,timestamp:Date.now()}),Z.length>sn&&(Z=Z.slice(0,sn)),un(),$){let e=Q?.querySelector(`.calmweb-activity-tab.active`);dn(e?.dataset.tab||`all`)}}function hn(e,t){mn({type:`neutralized`,before:e,after:t})}function gn(e,t){mn({type:`blocked`,before:e,reason:t})}function _n(e,t){mn({type:`media`,before:e||`Image`,after:t===`blurred`?`Blurred`:`Hidden`})}function vn(e){mn({type:`search`,before:e,reason:`Hidden from results`})}async function yn(){if(document.getElementById(an)){console.log(`[ActivityOverlay] Already initialized`);return}console.log(`[ActivityOverlay] Starting initialization...`);try{let e=await le({type:X.GET_SETTINGS});console.log(`[ActivityOverlay] Settings received:`,e);let t=e?.enabled&&(e.neutralization?.enabled||e.mediaFilter?.enabled||e.siteFilter?.enabled);if(console.log(`[ActivityOverlay] shouldShow:`,t,`enabled:`,e?.enabled,`neutralization:`,e?.neutralization?.enabled,`mediaFilter:`,e?.mediaFilter?.enabled,`siteFilter:`,e?.siteFilter?.enabled),!t){console.log(`[ActivityOverlay] Not showing overlay - filtering disabled`);return}cn(),Q=ln(),document.body.appendChild(Q),console.log(`[ActivityOverlay] Overlay added to page`),window.addEventListener(`calmweb:neutralized`,(e=>{hn(e.detail.before,e.detail.after)})),window.addEventListener(`calmweb:blocked`,(e=>{gn(e.detail.domain,e.detail.reason)})),window.addEventListener(`calmweb:mediaFiltered`,(e=>{_n(e.detail.altText,e.detail.action)})),window.addEventListener(`calmweb:searchFiltered`,(e=>{vn(e.detail.domain)}))}catch(e){console.error(`[ActivityOverlay] Failed to initialize:`,e)}}var bn=l({matches:[`<all_urls>`],runAt:`document_idle`,main(){console.log(`[CalmWeb] Universal script starting on:`,window.location.hostname),yn().then(()=>{console.log(`[CalmWeb] Activity overlay initialized`)}),rn();let e=document.createElement(`style`);e.id=`calmweb-styles-universal`,e.textContent=`
      [data-calmweb-processed="blur"] {
        filter: blur(10px) !important;
        transition: filter 0.3s ease !important;
        pointer-events: auto;
      }
      [data-calmweb-processed="blur"]:hover {
        filter: none !important;
      }
      [data-calmweb-processed="hidden"],
      [data-calmweb-processed="collapsed"] {
        display: none !important;
      }
      [data-calmweb-processing] {
        opacity: 0.5;
      }
    `,document.head.appendChild(e);let t=0,n=0,r=async e=>{if(e.length===0)return;let r=e.map(e=>{let t=Y.extractData(e);return e.setAttribute(`data-calmweb-processing`,`true`),t}),i=await Promise.all(r.map(e=>le({type:X.CLASSIFY_UNIT,unit:e})));e.forEach((e,r)=>{let a=i[r];e.removeAttribute(`data-calmweb-processing`),a&&!(`error`in a)&&(Y.applyDecision(e,a),t++,a.decision!==`show`&&(n++,console.log(`[CalmWeb] Filtered "${a.decision}": ${a.reason}`)))}),console.log(`[CalmWeb] Total: ${t} processed, ${n} filtered`)},i=Y.discoverUnits(document);console.log(`[CalmWeb] Discovered`,i.length,`content items`),r(i),new MutationObserver(e=>{for(let t of e)if(t.type===`childList`&&t.addedNodes.length>0){for(let e of Array.from(t.addedNodes))if(e instanceof HTMLElement){let t=Y.discoverUnits(e).filter(e=>!e.hasAttribute(`data-calmweb-processed`));t.length>0&&r(t)}}}).observe(document.body,{childList:!0,subtree:!0}),setInterval(()=>{let e=Y.discoverUnits(document).filter(e=>!e.hasAttribute(`data-calmweb-processed`));e.length>0&&r(e)},5e3),en(document)}}),xn={debug:(...e)=>([...e],void 0),log:(...e)=>([...e],void 0),warn:(...e)=>([...e],void 0),error:(...e)=>([...e],void 0)};return(()=>{let e;try{e=bn.main(),e instanceof Promise&&(e=e.catch(e=>{throw xn.error(`The unlisted script "universal" crashed on startup!`,e),e}))}catch(e){throw xn.error(`The unlisted script "universal" crashed on startup!`,e),e}return e})()})();
universal;