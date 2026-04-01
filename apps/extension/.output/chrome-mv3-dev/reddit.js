var reddit = (function() {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	//#region ../../node_modules/.pnpm/wxt@0.20.20_@types+node@25.5.0_jiti@2.6.1/node_modules/wxt/dist/utils/define-content-script.mjs
	function defineContentScript(definition) {
		return definition;
	}
	//#endregion
	//#region ../../../wxt-shared/dist/api/index.js
	var import_browser_polyfill = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global, factory) {
			if (typeof define === "function" && define.amd) define("webextension-polyfill", ["module"], factory);
			else if (typeof exports !== "undefined") factory(module);
			else {
				var mod = { exports: {} };
				factory(mod);
				global.browser = mod.exports;
			}
		})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module$1) {
			"use strict";
			if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension.");
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
						"commands": { "getAll": {
							"minArgs": 0,
							"maxArgs": 0
						} },
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
							"inspectedWindow": { "eval": {
								"minArgs": 1,
								"maxArgs": 2,
								"singleCallbackArg": false
							} },
							"panels": {
								"create": {
									"minArgs": 3,
									"maxArgs": 3,
									"singleCallbackArg": true
								},
								"elements": { "createSidebarPane": {
									"minArgs": 1,
									"maxArgs": 1
								} }
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
						"identity": { "launchWebAuthFlow": {
							"minArgs": 1,
							"maxArgs": 1
						} },
						"idle": { "queryState": {
							"minArgs": 1,
							"maxArgs": 1
						} },
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
						"topSites": { "get": {
							"minArgs": 0,
							"maxArgs": 0
						} },
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
						"webRequest": { "handlerBehaviorChanged": {
							"minArgs": 0,
							"maxArgs": 0
						} },
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
					if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
					/**
					* A WeakMap subclass which creates and stores a value for any key which does
					* not exist when accessed, but behaves exactly as an ordinary WeakMap
					* otherwise.
					*
					* @param {function} createItem
					*        A function which will be called in order to create the value for any
					*        key which does not exist, the first time it is accessed. The
					*        function receives, as its only argument, the key being created.
					*/
					class DefaultWeakMap extends WeakMap {
						constructor(createItem, items = void 0) {
							super(items);
							this.createItem = createItem;
						}
						get(key) {
							if (!this.has(key)) this.set(key, this.createItem(key));
							return super.get(key);
						}
					}
					/**
					* Returns true if the given object is an object with a `then` method, and can
					* therefore be assumed to behave as a Promise.
					*
					* @param {*} value The value to test.
					* @returns {boolean} True if the value is thenable.
					*/
					const isThenable = (value) => {
						return value && typeof value === "object" && typeof value.then === "function";
					};
					/**
					* Creates and returns a function which, when called, will resolve or reject
					* the given promise based on how it is called:
					*
					* - If, when called, `chrome.runtime.lastError` contains a non-null object,
					*   the promise is rejected with that value.
					* - If the function is called with exactly one argument, the promise is
					*   resolved to that value.
					* - Otherwise, the promise is resolved to an array containing all of the
					*   function's arguments.
					*
					* @param {object} promise
					*        An object containing the resolution and rejection functions of a
					*        promise.
					* @param {function} promise.resolve
					*        The promise's resolution function.
					* @param {function} promise.reject
					*        The promise's rejection function.
					* @param {object} metadata
					*        Metadata about the wrapped method which has created the callback.
					* @param {boolean} metadata.singleCallbackArg
					*        Whether or not the promise is resolved with only the first
					*        argument of the callback, alternatively an array of all the
					*        callback arguments is resolved. By default, if the callback
					*        function is invoked with only a single argument, that will be
					*        resolved to the promise, while all arguments will be resolved as
					*        an array if multiple are given.
					*
					* @returns {function}
					*        The generated callback function.
					*/
					const makeCallback = (promise, metadata) => {
						return (...callbackArgs) => {
							if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message));
							else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise.resolve(callbackArgs[0]);
							else promise.resolve(callbackArgs);
						};
					};
					const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
					/**
					* Creates a wrapper function for a method with the given name and metadata.
					*
					* @param {string} name
					*        The name of the method which is being wrapped.
					* @param {object} metadata
					*        Metadata about the method being wrapped.
					* @param {integer} metadata.minArgs
					*        The minimum number of arguments which must be passed to the
					*        function. If called with fewer than this number of arguments, the
					*        wrapper will raise an exception.
					* @param {integer} metadata.maxArgs
					*        The maximum number of arguments which may be passed to the
					*        function. If called with more than this number of arguments, the
					*        wrapper will raise an exception.
					* @param {boolean} metadata.singleCallbackArg
					*        Whether or not the promise is resolved with only the first
					*        argument of the callback, alternatively an array of all the
					*        callback arguments is resolved. By default, if the callback
					*        function is invoked with only a single argument, that will be
					*        resolved to the promise, while all arguments will be resolved as
					*        an array if multiple are given.
					*
					* @returns {function(object, ...*)}
					*       The generated wrapper function.
					*/
					const wrapAsyncFunction = (name, metadata) => {
						return function asyncFunctionWrapper(target, ...args) {
							if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
							if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
							return new Promise((resolve, reject) => {
								if (metadata.fallbackToNoCallback) try {
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
								else if (metadata.noCallback) {
									target[name](...args);
									resolve();
								} else target[name](...args, makeCallback({
									resolve,
									reject
								}, metadata));
							});
						};
					};
					/**
					* Wraps an existing method of the target object, so that calls to it are
					* intercepted by the given wrapper function. The wrapper function receives,
					* as its first argument, the original `target` object, followed by each of
					* the arguments passed to the original method.
					*
					* @param {object} target
					*        The original target object that the wrapped method belongs to.
					* @param {function} method
					*        The method being wrapped. This is used as the target of the Proxy
					*        object which is created to wrap the method.
					* @param {function} wrapper
					*        The wrapper function which is called in place of a direct invocation
					*        of the wrapped method.
					*
					* @returns {Proxy<function>}
					*        A Proxy object for the given method, which invokes the given wrapper
					*        method in its place.
					*/
					const wrapMethod = (target, method, wrapper) => {
						return new Proxy(method, { apply(targetMethod, thisObj, args) {
							return wrapper.call(thisObj, target, ...args);
						} });
					};
					let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
					/**
					* Wraps an object in a Proxy which intercepts and wraps certain methods
					* based on the given `wrappers` and `metadata` objects.
					*
					* @param {object} target
					*        The target object to wrap.
					*
					* @param {object} [wrappers = {}]
					*        An object tree containing wrapper functions for special cases. Any
					*        function present in this object tree is called in place of the
					*        method in the same location in the `target` object tree. These
					*        wrapper methods are invoked as described in {@see wrapMethod}.
					*
					* @param {object} [metadata = {}]
					*        An object tree containing metadata used to automatically generate
					*        Promise-based wrapper functions for asynchronous. Any function in
					*        the `target` object tree which has a corresponding metadata object
					*        in the same location in the `metadata` tree is replaced with an
					*        automatically-generated wrapper function, as described in
					*        {@see wrapAsyncFunction}
					*
					* @returns {Proxy<object>}
					*/
					const wrapObject = (target, wrappers = {}, metadata = {}) => {
						let cache = Object.create(null);
						return new Proxy(Object.create(target), {
							has(proxyTarget, prop) {
								return prop in target || prop in cache;
							},
							get(proxyTarget, prop, receiver) {
								if (prop in cache) return cache[prop];
								if (!(prop in target)) return;
								let value = target[prop];
								if (typeof value === "function") if (typeof wrappers[prop] === "function") value = wrapMethod(target, target[prop], wrappers[prop]);
								else if (hasOwnProperty(metadata, prop)) {
									let wrapper = wrapAsyncFunction(prop, metadata[prop]);
									value = wrapMethod(target, target[prop], wrapper);
								} else value = value.bind(target);
								else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) value = wrapObject(value, wrappers[prop], metadata[prop]);
								else if (hasOwnProperty(metadata, "*")) value = wrapObject(value, wrappers[prop], metadata["*"]);
								else {
									Object.defineProperty(cache, prop, {
										configurable: true,
										enumerable: true,
										get() {
											return target[prop];
										},
										set(value) {
											target[prop] = value;
										}
									});
									return value;
								}
								cache[prop] = value;
								return value;
							},
							set(proxyTarget, prop, value, receiver) {
								if (prop in cache) cache[prop] = value;
								else target[prop] = value;
								return true;
							},
							defineProperty(proxyTarget, prop, desc) {
								return Reflect.defineProperty(cache, prop, desc);
							},
							deleteProperty(proxyTarget, prop) {
								return Reflect.deleteProperty(cache, prop);
							}
						});
					};
					/**
					* Creates a set of wrapper functions for an event object, which handles
					* wrapping of listener functions that those messages are passed.
					*
					* A single wrapper is created for each listener function, and stored in a
					* map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
					* retrieve the original wrapper, so that  attempts to remove a
					* previously-added listener work as expected.
					*
					* @param {DefaultWeakMap<function, function>} wrapperMap
					*        A DefaultWeakMap object which will create the appropriate wrapper
					*        for a given listener function when one does not exist, and retrieve
					*        an existing one when it does.
					*
					* @returns {object}
					*/
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
						if (typeof listener !== "function") return listener;
						/**
						* Wraps an onRequestFinished listener function so that it will return a
						* `getContent()` property which returns a `Promise` rather than using a
						* callback API.
						*
						* @param {object} req
						*        The HAR entry object representing the network request.
						*/
						return function onRequestFinished(req) {
							listener(wrapObject(req, {}, { getContent: {
								minArgs: 0,
								maxArgs: 0
							} }));
						};
					});
					const onMessageWrappers = new DefaultWeakMap((listener) => {
						if (typeof listener !== "function") return listener;
						/**
						* Wraps a message listener function so that it may send responses based on
						* its return value, rather than by returning a sentinel value and calling a
						* callback. If the listener function returns a Promise, the response is
						* sent when the promise either resolves or rejects.
						*
						* @param {*} message
						*        The message sent by the other end of the channel.
						* @param {object} sender
						*        Details about the sender of the message.
						* @param {function(*)} sendResponse
						*        A callback which, when called with an arbitrary argument, sends
						*        that value as a response.
						* @returns {boolean}
						*        True if the wrapped listener returned a Promise, which will later
						*        yield a response. False otherwise.
						*/
						return function onMessage(message, sender, sendResponse) {
							let didCallSendResponse = false;
							let wrappedSendResponse;
							let sendResponsePromise = new Promise((resolve) => {
								wrappedSendResponse = function(response) {
									didCallSendResponse = true;
									resolve(response);
								};
							});
							let result;
							try {
								result = listener(message, sender, wrappedSendResponse);
							} catch (err) {
								result = Promise.reject(err);
							}
							const isResultThenable = result !== true && isThenable(result);
							if (result !== true && !isResultThenable && !didCallSendResponse) return false;
							const sendPromisedResult = (promise) => {
								promise.then((msg) => {
									sendResponse(msg);
								}, (error) => {
									let message;
									if (error && (error instanceof Error || typeof error.message === "string")) message = error.message;
									else message = "An unexpected error occurred";
									sendResponse({
										__mozWebExtensionPolyfillReject__: true,
										message
									});
								}).catch((err) => {
									console.error("Failed to send onMessage rejected reply", err);
								});
							};
							if (isResultThenable) sendPromisedResult(result);
							else sendPromisedResult(sendResponsePromise);
							return true;
						};
					});
					const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {
						if (extensionAPIs.runtime.lastError) if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve();
						else reject(new Error(extensionAPIs.runtime.lastError.message));
						else if (reply && reply.__mozWebExtensionPolyfillReject__) reject(new Error(reply.message));
						else resolve(reply);
					};
					const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
						if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
						if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
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
						devtools: { network: { onRequestFinished: wrapEvent(onRequestFinishedWrappers) } },
						runtime: {
							onMessage: wrapEvent(onMessageWrappers),
							onMessageExternal: wrapEvent(onMessageWrappers),
							sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
								minArgs: 1,
								maxArgs: 3
							})
						},
						tabs: { sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
							minArgs: 2,
							maxArgs: 3
						}) }
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
						network: { "*": settingMetadata },
						services: { "*": settingMetadata },
						websites: { "*": settingMetadata }
					};
					return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
				};
				module$1.exports = wrapAPIs(chrome);
			} else module$1.exports = globalThis.browser;
		});
	})))(), 1);
	//#endregion
	//#region ../../../wxt-shared/dist/auth/index.js
	/**
	* Authentication utilities for WXT extensions talking to the Dracon platform.
	*
	* Supports two auth flows:
	* 1. Email Magic Link (default) - Direct email/code verification
	* 2. OAuth (legacy) - Redirect-based flow with code exchange
	*/
	//#endregion
	//#region ../../../wxt-shared/node_modules/@wxt-dev/browser/src/index.mjs
	var browser$2 = globalThis.browser?.runtime?.id ? globalThis.browser : globalThis.chrome;
	//#endregion
	//#region ../../../wxt-shared/node_modules/async-mutex/index.mjs
	var E_CANCELED = /* @__PURE__ */ new Error("request for lock canceled");
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
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
	var Semaphore = class {
		constructor(_value, _cancelError = E_CANCELED) {
			this._value = _value;
			this._cancelError = _cancelError;
			this._queue = [];
			this._weightedWaiters = [];
		}
		acquire(weight = 1, priority = 0) {
			if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
			return new Promise((resolve, reject) => {
				const task = {
					resolve,
					reject,
					weight,
					priority
				};
				const i = findIndexFromEnd(this._queue, (other) => priority <= other.priority);
				if (i === -1 && weight <= this._value) this._dispatchItem(task);
				else this._queue.splice(i + 1, 0, task);
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
			if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
			if (this._couldLockImmediately(weight, priority)) return Promise.resolve();
			else return new Promise((resolve) => {
				if (!this._weightedWaiters[weight - 1]) this._weightedWaiters[weight - 1] = [];
				insertSorted(this._weightedWaiters[weight - 1], {
					resolve,
					priority
				});
			});
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
			if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
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
				if (called) return;
				called = true;
				this.release(weight);
			};
		}
		_drainUnlockWaiters() {
			if (this._queue.length === 0) for (let weight = this._value; weight > 0; weight--) {
				const waiters = this._weightedWaiters[weight - 1];
				if (!waiters) continue;
				waiters.forEach((waiter) => waiter.resolve());
				this._weightedWaiters[weight - 1] = [];
			}
			else {
				const queuedPriority = this._queue[0].priority;
				for (let weight = this._value; weight > 0; weight--) {
					const waiters = this._weightedWaiters[weight - 1];
					if (!waiters) continue;
					const i = waiters.findIndex((waiter) => waiter.priority <= queuedPriority);
					(i === -1 ? waiters : waiters.splice(0, i)).forEach(((waiter) => waiter.resolve()));
				}
			}
		}
		_couldLockImmediately(weight, priority) {
			return (this._queue.length === 0 || this._queue[0].priority < priority) && weight <= this._value;
		}
	};
	function insertSorted(a, v) {
		const i = findIndexFromEnd(a, (other) => v.priority <= other.priority);
		a.splice(i + 1, 0, v);
	}
	function findIndexFromEnd(a, predicate) {
		for (let i = a.length - 1; i >= 0; i--) if (predicate(a[i])) return i;
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
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
	var Mutex = class {
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
			if (this._semaphore.isLocked()) this._semaphore.release();
		}
		cancel() {
			return this._semaphore.cancel();
		}
	};
	//#endregion
	//#region ../../../wxt-shared/node_modules/dequal/lite/index.mjs
	var has = Object.prototype.hasOwnProperty;
	function dequal(foo, bar) {
		var ctor, len;
		if (foo === bar) return true;
		if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
			if (ctor === Date) return foo.getTime() === bar.getTime();
			if (ctor === RegExp) return foo.toString() === bar.toString();
			if (ctor === Array) {
				if ((len = foo.length) === bar.length) while (len-- && dequal(foo[len], bar[len]));
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
	createStorage();
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
				await Promise.all(Array.from(areaToKeyMap.entries()).map(async ([driverArea, keys]) => {
					(await drivers[driverArea].getItems(keys)).forEach((driverResult) => {
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
				await Promise.all(Object.entries(areaToDriverMetaKeysMap).map(async ([area, keys]) => {
					const areaRes = await browser$2.storage[area].get(keys.map((key) => key.driverMetaKey));
					keys.forEach((key) => {
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
				await Promise.all(Object.entries(areaToKeysMap).map(async ([driverArea, keys]) => {
					await getDriver(driverArea).removeItems(keys);
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
					removeValue: async (opts) => {
						await migrationsDone;
						return await removeItem(driver, driverKey, opts);
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
			if (browser$2.runtime == null) throw Error(`'wxt/storage' must be loaded in a web extension environment

 - If thrown during a build, see https://github.com/wxt-dev/wxt/issues/371
 - If thrown during tests, mock 'wxt/browser' correctly. See https://wxt.dev/guide/go-further/testing.html
`);
			if (browser$2.storage == null) throw Error("You must add the 'storage' permission to your manifest to use 'wxt/storage'");
			const area = browser$2.storage[storageArea];
			if (area == null) throw Error(`"browser.storage.${storageArea}" is undefined`);
			return area;
		};
		const watchListeners = /* @__PURE__ */ new Set();
		return {
			getItem: async (key) => {
				return (await getStorageArea().get(key))[key];
			},
			getItems: async (keys) => {
				const result = await getStorageArea().get(keys);
				return keys.map((key) => ({
					key,
					value: result[key] ?? null
				}));
			},
			setItem: async (key, value) => {
				if (value == null) await getStorageArea().remove(key);
				else await getStorageArea().set({ [key]: value });
			},
			setItems: async (values) => {
				const map = values.reduce((map, { key, value }) => {
					map[key] = value;
					return map;
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
	//#endregion
	//#region ../../../wxt-shared/dist/storage/quota.js
	/**
	* Storage Quota Manager
	*
	* Manages sync storage to stay within Firefox's ~100KB limit.
	* Chrome/Edge have much higher limits (~1MB/item, 10MB total) so no trimming needed.
	* Trims data automatically before quota is exceeded on Firefox only.
	*
	* @example
	* ```ts
	* import { checkStoreQuota } from '@dracon/wxt-shared/storage';
	*
	* // Before setting data
	* const { needsTrim, data } = await checkStoreQuota('tasks', currentTasks, newTasks);
	* if (needsTrim) {
	*   console.log('Data was trimmed for Firefox quota');
	* }
	* await syncStore.setValue(data);
	* ```
	*/
	//#endregion
	//#region ../../../wxt-shared/dist/extension/index.js
	/**
	* Extension utilities and factory
	*
	* Provides:
	* - createExtension() - Complete setup in one call
	* - Context detection helpers
	* - Tab management
	* - Message passing utilities
	*/
	async function sendToBackground(message) {
		return import_browser_polyfill.default.runtime.sendMessage(message);
	}
	//#endregion
	//#region ../../node_modules/zod/v3/helpers/util.js
	var util;
	(function(util) {
		util.assertEqual = (_) => {};
		function assertIs(_arg) {}
		util.assertIs = assertIs;
		function assertNever(_x) {
			throw new Error();
		}
		util.assertNever = assertNever;
		util.arrayToEnum = (items) => {
			const obj = {};
			for (const item of items) obj[item] = item;
			return obj;
		};
		util.getValidEnumValues = (obj) => {
			const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
			const filtered = {};
			for (const k of validKeys) filtered[k] = obj[k];
			return util.objectValues(filtered);
		};
		util.objectValues = (obj) => {
			return util.objectKeys(obj).map(function(e) {
				return obj[e];
			});
		};
		util.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
			const keys = [];
			for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
			return keys;
		};
		util.find = (arr, checker) => {
			for (const item of arr) if (checker(item)) return item;
		};
		util.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
		function joinValues(array, separator = " | ") {
			return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
		}
		util.joinValues = joinValues;
		util.jsonStringifyReplacer = (_, value) => {
			if (typeof value === "bigint") return value.toString();
			return value;
		};
	})(util || (util = {}));
	var objectUtil;
	(function(objectUtil) {
		objectUtil.mergeShapes = (first, second) => {
			return {
				...first,
				...second
			};
		};
	})(objectUtil || (objectUtil = {}));
	var ZodParsedType = util.arrayToEnum([
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
	var getParsedType = (data) => {
		switch (typeof data) {
			case "undefined": return ZodParsedType.undefined;
			case "string": return ZodParsedType.string;
			case "number": return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
			case "boolean": return ZodParsedType.boolean;
			case "function": return ZodParsedType.function;
			case "bigint": return ZodParsedType.bigint;
			case "symbol": return ZodParsedType.symbol;
			case "object":
				if (Array.isArray(data)) return ZodParsedType.array;
				if (data === null) return ZodParsedType.null;
				if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
				if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
				if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
				if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
				return ZodParsedType.object;
			default: return ZodParsedType.unknown;
		}
	};
	//#endregion
	//#region ../../node_modules/zod/v3/ZodError.js
	var ZodIssueCode = util.arrayToEnum([
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
	var ZodError = class ZodError extends Error {
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
			if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
			else this.__proto__ = actualProto;
			this.name = "ZodError";
			this.issues = issues;
		}
		format(_mapper) {
			const mapper = _mapper || function(issue) {
				return issue.message;
			};
			const fieldErrors = { _errors: [] };
			const processError = (error) => {
				for (const issue of error.issues) if (issue.code === "invalid_union") issue.unionErrors.map(processError);
				else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
				else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
				else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
				else {
					let curr = fieldErrors;
					let i = 0;
					while (i < issue.path.length) {
						const el = issue.path[i];
						if (!(i === issue.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
						else {
							curr[el] = curr[el] || { _errors: [] };
							curr[el]._errors.push(mapper(issue));
						}
						curr = curr[el];
						i++;
					}
				}
			};
			processError(this);
			return fieldErrors;
		}
		static assert(value) {
			if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
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
			for (const sub of this.issues) if (sub.path.length > 0) {
				const firstEl = sub.path[0];
				fieldErrors[firstEl] = fieldErrors[firstEl] || [];
				fieldErrors[firstEl].push(mapper(sub));
			} else formErrors.push(mapper(sub));
			return {
				formErrors,
				fieldErrors
			};
		}
		get formErrors() {
			return this.flatten();
		}
	};
	ZodError.create = (issues) => {
		return new ZodError(issues);
	};
	//#endregion
	//#region ../../node_modules/zod/v3/locales/en.js
	var errorMap = (issue, _ctx) => {
		let message;
		switch (issue.code) {
			case ZodIssueCode.invalid_type:
				if (issue.received === ZodParsedType.undefined) message = "Required";
				else message = `Expected ${issue.expected}, received ${issue.received}`;
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
				if (typeof issue.validation === "object") if ("includes" in issue.validation) {
					message = `Invalid input: must include "${issue.validation.includes}"`;
					if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
				} else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
				else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
				else util.assertNever(issue.validation);
				else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
				else message = "Invalid";
				break;
			case ZodIssueCode.too_small:
				if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
				else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
				else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
				else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
				else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
				else message = "Invalid input";
				break;
			case ZodIssueCode.too_big:
				if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
				else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
				else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
				else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
				else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
				else message = "Invalid input";
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
	//#endregion
	//#region ../../node_modules/zod/v3/errors.js
	var overrideErrorMap = errorMap;
	function getErrorMap() {
		return overrideErrorMap;
	}
	//#endregion
	//#region ../../node_modules/zod/v3/helpers/parseUtil.js
	var makeIssue = (params) => {
		const { data, path, errorMaps, issueData } = params;
		const fullPath = [...path, ...issueData.path || []];
		const fullIssue = {
			...issueData,
			path: fullPath
		};
		if (issueData.message !== void 0) return {
			...issueData,
			path: fullPath,
			message: issueData.message
		};
		let errorMessage = "";
		const maps = errorMaps.filter((m) => !!m).slice().reverse();
		for (const map of maps) errorMessage = map(fullIssue, {
			data,
			defaultError: errorMessage
		}).message;
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
				ctx.schemaErrorMap,
				overrideMap,
				overrideMap === errorMap ? void 0 : errorMap
			].filter((x) => !!x)
		});
		ctx.common.issues.push(issue);
	}
	var ParseStatus = class ParseStatus {
		constructor() {
			this.value = "valid";
		}
		dirty() {
			if (this.value === "valid") this.value = "dirty";
		}
		abort() {
			if (this.value !== "aborted") this.value = "aborted";
		}
		static mergeArray(status, results) {
			const arrayValue = [];
			for (const s of results) {
				if (s.status === "aborted") return INVALID;
				if (s.status === "dirty") status.dirty();
				arrayValue.push(s.value);
			}
			return {
				status: status.value,
				value: arrayValue
			};
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
				if (key.status === "aborted") return INVALID;
				if (value.status === "aborted") return INVALID;
				if (key.status === "dirty") status.dirty();
				if (value.status === "dirty") status.dirty();
				if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
			}
			return {
				status: status.value,
				value: finalObject
			};
		}
	};
	var INVALID = Object.freeze({ status: "aborted" });
	var DIRTY = (value) => ({
		status: "dirty",
		value
	});
	var OK = (value) => ({
		status: "valid",
		value
	});
	var isAborted = (x) => x.status === "aborted";
	var isDirty = (x) => x.status === "dirty";
	var isValid = (x) => x.status === "valid";
	var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
	//#endregion
	//#region ../../node_modules/zod/v3/helpers/errorUtil.js
	var errorUtil;
	(function(errorUtil) {
		errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
		errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
	})(errorUtil || (errorUtil = {}));
	//#endregion
	//#region ../../node_modules/zod/v3/types.js
	var ParseInputLazyPath = class {
		constructor(parent, value, path, key) {
			this._cachedPath = [];
			this.parent = parent;
			this.data = value;
			this._path = path;
			this._key = key;
		}
		get path() {
			if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
			else this._cachedPath.push(...this._path, this._key);
			return this._cachedPath;
		}
	};
	var handleResult = (ctx, result) => {
		if (isValid(result)) return {
			success: true,
			data: result.value
		};
		else {
			if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
			return {
				success: false,
				get error() {
					if (this._error) return this._error;
					this._error = new ZodError(ctx.common.issues);
					return this._error;
				}
			};
		}
	};
	function processCreateParams(params) {
		if (!params) return {};
		const { errorMap, invalid_type_error, required_error, description } = params;
		if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
		if (errorMap) return {
			errorMap,
			description
		};
		const customMap = (iss, ctx) => {
			const { message } = params;
			if (iss.code === "invalid_enum_value") return { message: message ?? ctx.defaultError };
			if (typeof ctx.data === "undefined") return { message: message ?? required_error ?? ctx.defaultError };
			if (iss.code !== "invalid_type") return { message: ctx.defaultError };
			return { message: message ?? invalid_type_error ?? ctx.defaultError };
		};
		return {
			errorMap: customMap,
			description
		};
	}
	var ZodType = class {
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
			const result = this._parse(input);
			if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
			return result;
		}
		_parseAsync(input) {
			const result = this._parse(input);
			return Promise.resolve(result);
		}
		parse(data, params) {
			const result = this.safeParse(data, params);
			if (result.success) return result.data;
			throw result.error;
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
			return handleResult(ctx, this._parseSync({
				data,
				path: ctx.path,
				parent: ctx
			}));
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
			if (!this["~standard"].async) try {
				const result = this._parseSync({
					data,
					path: [],
					parent: ctx
				});
				return isValid(result) ? { value: result.value } : { issues: ctx.common.issues };
			} catch (err) {
				if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
				ctx.common = {
					issues: [],
					async: true
				};
			}
			return this._parseAsync({
				data,
				path: [],
				parent: ctx
			}).then((result) => isValid(result) ? { value: result.value } : { issues: ctx.common.issues });
		}
		async parseAsync(data, params) {
			const result = await this.safeParseAsync(data, params);
			if (result.success) return result.data;
			throw result.error;
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
			const maybeAsyncResult = this._parse({
				data,
				path: ctx.path,
				parent: ctx
			});
			return handleResult(ctx, await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult)));
		}
		refine(check, message) {
			const getIssueProperties = (val) => {
				if (typeof message === "string" || typeof message === "undefined") return { message };
				else if (typeof message === "function") return message(val);
				else return message;
			};
			return this._refinement((val, ctx) => {
				const result = check(val);
				const setError = () => ctx.addIssue({
					code: ZodIssueCode.custom,
					...getIssueProperties(val)
				});
				if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data) => {
					if (!data) {
						setError();
						return false;
					} else return true;
				});
				if (!result) {
					setError();
					return false;
				} else return true;
			});
		}
		refinement(check, refinementData) {
			return this._refinement((val, ctx) => {
				if (!check(val)) {
					ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
					return false;
				} else return true;
			});
		}
		_refinement(refinement) {
			return new ZodEffects({
				schema: this,
				typeName: ZodFirstPartyTypeKind.ZodEffects,
				effect: {
					type: "refinement",
					refinement
				}
			});
		}
		superRefine(refinement) {
			return this._refinement(refinement);
		}
		constructor(def) {
			/** Alias of safeParseAsync */
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
				effect: {
					type: "transform",
					transform
				}
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
	};
	var cuidRegex = /^c[^\s-]{8,}$/i;
	var cuid2Regex = /^[0-9a-z]+$/;
	var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
	var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
	var nanoidRegex = /^[a-z0-9_-]{21}$/i;
	var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
	var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
	var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
	var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
	var emojiRegex;
	var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
	var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
	var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
	var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
	var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
	var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
	var dateRegex = new RegExp(`^${dateRegexSource}$`);
	function timeRegexSource(args) {
		let secondsRegexSource = `[0-5]\\d`;
		if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
		else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
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
		if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
		regex = `${regex}(${opts.join("|")})`;
		return new RegExp(`^${regex}$`);
	}
	function isValidIP(ip, version) {
		if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
		if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
		return false;
	}
	function isValidJWT(jwt, alg) {
		if (!jwtRegex.test(jwt)) return false;
		try {
			const [header] = jwt.split(".");
			if (!header) return false;
			const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
			const decoded = JSON.parse(atob(base64));
			if (typeof decoded !== "object" || decoded === null) return false;
			if ("typ" in decoded && decoded?.typ !== "JWT") return false;
			if (!decoded.alg) return false;
			if (alg && decoded.alg !== alg) return false;
			return true;
		} catch {
			return false;
		}
	}
	function isValidCidr(ip, version) {
		if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
		if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
		return false;
	}
	var ZodString = class ZodString extends ZodType {
		_parse(input) {
			if (this._def.coerce) input.data = String(input.data);
			if (this._getType(input) !== ZodParsedType.string) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.string,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const status = new ParseStatus();
			let ctx = void 0;
			for (const check of this._def.checks) if (check.kind === "min") {
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
					if (tooBig) addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						maximum: check.value,
						type: "string",
						inclusive: true,
						exact: true,
						message: check.message
					});
					else if (tooSmall) addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						minimum: check.value,
						type: "string",
						inclusive: true,
						exact: true,
						message: check.message
					});
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
				if (!emojiRegex) emojiRegex = new RegExp(_emojiRegex, "u");
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
			} else if (check.kind === "url") try {
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
			else if (check.kind === "regex") {
				check.regex.lastIndex = 0;
				if (!check.regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "regex",
						code: ZodIssueCode.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "trim") input.data = input.data.trim();
			else if (check.kind === "includes") {
				if (!input.data.includes(check.value, check.position)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: {
							includes: check.value,
							position: check.position
						},
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
			else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
			else if (check.kind === "startsWith") {
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
				if (!datetimeRegex(check).test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: "datetime",
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "date") {
				if (!dateRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: "date",
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "time") {
				if (!timeRegex(check).test(input.data)) {
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
			} else util.assertNever(check);
			return {
				status: status.value,
				value: input.data
			};
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
			return this._addCheck({
				kind: "email",
				...errorUtil.errToObj(message)
			});
		}
		url(message) {
			return this._addCheck({
				kind: "url",
				...errorUtil.errToObj(message)
			});
		}
		emoji(message) {
			return this._addCheck({
				kind: "emoji",
				...errorUtil.errToObj(message)
			});
		}
		uuid(message) {
			return this._addCheck({
				kind: "uuid",
				...errorUtil.errToObj(message)
			});
		}
		nanoid(message) {
			return this._addCheck({
				kind: "nanoid",
				...errorUtil.errToObj(message)
			});
		}
		cuid(message) {
			return this._addCheck({
				kind: "cuid",
				...errorUtil.errToObj(message)
			});
		}
		cuid2(message) {
			return this._addCheck({
				kind: "cuid2",
				...errorUtil.errToObj(message)
			});
		}
		ulid(message) {
			return this._addCheck({
				kind: "ulid",
				...errorUtil.errToObj(message)
			});
		}
		base64(message) {
			return this._addCheck({
				kind: "base64",
				...errorUtil.errToObj(message)
			});
		}
		base64url(message) {
			return this._addCheck({
				kind: "base64url",
				...errorUtil.errToObj(message)
			});
		}
		jwt(options) {
			return this._addCheck({
				kind: "jwt",
				...errorUtil.errToObj(options)
			});
		}
		ip(options) {
			return this._addCheck({
				kind: "ip",
				...errorUtil.errToObj(options)
			});
		}
		cidr(options) {
			return this._addCheck({
				kind: "cidr",
				...errorUtil.errToObj(options)
			});
		}
		datetime(options) {
			if (typeof options === "string") return this._addCheck({
				kind: "datetime",
				precision: null,
				offset: false,
				local: false,
				message: options
			});
			return this._addCheck({
				kind: "datetime",
				precision: typeof options?.precision === "undefined" ? null : options?.precision,
				offset: options?.offset ?? false,
				local: options?.local ?? false,
				...errorUtil.errToObj(options?.message)
			});
		}
		date(message) {
			return this._addCheck({
				kind: "date",
				message
			});
		}
		time(options) {
			if (typeof options === "string") return this._addCheck({
				kind: "time",
				precision: null,
				message: options
			});
			return this._addCheck({
				kind: "time",
				precision: typeof options?.precision === "undefined" ? null : options?.precision,
				...errorUtil.errToObj(options?.message)
			});
		}
		duration(message) {
			return this._addCheck({
				kind: "duration",
				...errorUtil.errToObj(message)
			});
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
			for (const ch of this._def.checks) if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
			return min;
		}
		get maxLength() {
			let max = null;
			for (const ch of this._def.checks) if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return max;
		}
	};
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
		return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
	}
	var ZodNumber = class ZodNumber extends ZodType {
		constructor() {
			super(...arguments);
			this.min = this.gte;
			this.max = this.lte;
			this.step = this.multipleOf;
		}
		_parse(input) {
			if (this._def.coerce) input.data = Number(input.data);
			if (this._getType(input) !== ZodParsedType.number) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.number,
					received: ctx.parsedType
				});
				return INVALID;
			}
			let ctx = void 0;
			const status = new ParseStatus();
			for (const check of this._def.checks) if (check.kind === "int") {
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
				if (check.inclusive ? input.data < check.value : input.data <= check.value) {
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
				if (check.inclusive ? input.data > check.value : input.data >= check.value) {
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
			} else util.assertNever(check);
			return {
				status: status.value,
				value: input.data
			};
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
				checks: [...this._def.checks, {
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message)
				}]
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
			for (const ch of this._def.checks) if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
			return min;
		}
		get maxValue() {
			let max = null;
			for (const ch of this._def.checks) if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return max;
		}
		get isInt() {
			return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
		}
		get isFinite() {
			let max = null;
			let min = null;
			for (const ch of this._def.checks) if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
			else if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			} else if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return Number.isFinite(min) && Number.isFinite(max);
		}
	};
	ZodNumber.create = (params) => {
		return new ZodNumber({
			checks: [],
			typeName: ZodFirstPartyTypeKind.ZodNumber,
			coerce: params?.coerce || false,
			...processCreateParams(params)
		});
	};
	var ZodBigInt = class ZodBigInt extends ZodType {
		constructor() {
			super(...arguments);
			this.min = this.gte;
			this.max = this.lte;
		}
		_parse(input) {
			if (this._def.coerce) try {
				input.data = BigInt(input.data);
			} catch {
				return this._getInvalidInput(input);
			}
			if (this._getType(input) !== ZodParsedType.bigint) return this._getInvalidInput(input);
			let ctx = void 0;
			const status = new ParseStatus();
			for (const check of this._def.checks) if (check.kind === "min") {
				if (check.inclusive ? input.data < check.value : input.data <= check.value) {
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
				if (check.inclusive ? input.data > check.value : input.data >= check.value) {
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
			} else util.assertNever(check);
			return {
				status: status.value,
				value: input.data
			};
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
				checks: [...this._def.checks, {
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message)
				}]
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
			for (const ch of this._def.checks) if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
			return min;
		}
		get maxValue() {
			let max = null;
			for (const ch of this._def.checks) if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return max;
		}
	};
	ZodBigInt.create = (params) => {
		return new ZodBigInt({
			checks: [],
			typeName: ZodFirstPartyTypeKind.ZodBigInt,
			coerce: params?.coerce ?? false,
			...processCreateParams(params)
		});
	};
	var ZodBoolean = class extends ZodType {
		_parse(input) {
			if (this._def.coerce) input.data = Boolean(input.data);
			if (this._getType(input) !== ZodParsedType.boolean) {
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
	};
	ZodBoolean.create = (params) => {
		return new ZodBoolean({
			typeName: ZodFirstPartyTypeKind.ZodBoolean,
			coerce: params?.coerce || false,
			...processCreateParams(params)
		});
	};
	var ZodDate = class ZodDate extends ZodType {
		_parse(input) {
			if (this._def.coerce) input.data = new Date(input.data);
			if (this._getType(input) !== ZodParsedType.date) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.date,
					received: ctx.parsedType
				});
				return INVALID;
			}
			if (Number.isNaN(input.data.getTime())) {
				addIssueToContext(this._getOrReturnCtx(input), { code: ZodIssueCode.invalid_date });
				return INVALID;
			}
			const status = new ParseStatus();
			let ctx = void 0;
			for (const check of this._def.checks) if (check.kind === "min") {
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
			} else util.assertNever(check);
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
			for (const ch of this._def.checks) if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
			return min != null ? new Date(min) : null;
		}
		get maxDate() {
			let max = null;
			for (const ch of this._def.checks) if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return max != null ? new Date(max) : null;
		}
	};
	ZodDate.create = (params) => {
		return new ZodDate({
			checks: [],
			coerce: params?.coerce || false,
			typeName: ZodFirstPartyTypeKind.ZodDate,
			...processCreateParams(params)
		});
	};
	var ZodSymbol = class extends ZodType {
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.symbol) {
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
	};
	ZodSymbol.create = (params) => {
		return new ZodSymbol({
			typeName: ZodFirstPartyTypeKind.ZodSymbol,
			...processCreateParams(params)
		});
	};
	var ZodUndefined = class extends ZodType {
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.undefined) {
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
	};
	ZodUndefined.create = (params) => {
		return new ZodUndefined({
			typeName: ZodFirstPartyTypeKind.ZodUndefined,
			...processCreateParams(params)
		});
	};
	var ZodNull = class extends ZodType {
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.null) {
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
	};
	ZodNull.create = (params) => {
		return new ZodNull({
			typeName: ZodFirstPartyTypeKind.ZodNull,
			...processCreateParams(params)
		});
	};
	var ZodAny = class extends ZodType {
		constructor() {
			super(...arguments);
			this._any = true;
		}
		_parse(input) {
			return OK(input.data);
		}
	};
	ZodAny.create = (params) => {
		return new ZodAny({
			typeName: ZodFirstPartyTypeKind.ZodAny,
			...processCreateParams(params)
		});
	};
	var ZodUnknown = class extends ZodType {
		constructor() {
			super(...arguments);
			this._unknown = true;
		}
		_parse(input) {
			return OK(input.data);
		}
	};
	ZodUnknown.create = (params) => {
		return new ZodUnknown({
			typeName: ZodFirstPartyTypeKind.ZodUnknown,
			...processCreateParams(params)
		});
	};
	var ZodNever = class extends ZodType {
		_parse(input) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.never,
				received: ctx.parsedType
			});
			return INVALID;
		}
	};
	ZodNever.create = (params) => {
		return new ZodNever({
			typeName: ZodFirstPartyTypeKind.ZodNever,
			...processCreateParams(params)
		});
	};
	var ZodVoid = class extends ZodType {
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.undefined) {
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
	};
	ZodVoid.create = (params) => {
		return new ZodVoid({
			typeName: ZodFirstPartyTypeKind.ZodVoid,
			...processCreateParams(params)
		});
	};
	var ZodArray = class ZodArray extends ZodType {
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
			if (ctx.common.async) return Promise.all([...ctx.data].map((item, i) => {
				return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
			})).then((result) => {
				return ParseStatus.mergeArray(status, result);
			});
			const result = [...ctx.data].map((item, i) => {
				return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
			});
			return ParseStatus.mergeArray(status, result);
		}
		get element() {
			return this._def.type;
		}
		min(minLength, message) {
			return new ZodArray({
				...this._def,
				minLength: {
					value: minLength,
					message: errorUtil.toString(message)
				}
			});
		}
		max(maxLength, message) {
			return new ZodArray({
				...this._def,
				maxLength: {
					value: maxLength,
					message: errorUtil.toString(message)
				}
			});
		}
		length(len, message) {
			return new ZodArray({
				...this._def,
				exactLength: {
					value: len,
					message: errorUtil.toString(message)
				}
			});
		}
		nonempty(message) {
			return this.min(1, message);
		}
	};
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
		} else if (schema instanceof ZodArray) return new ZodArray({
			...schema._def,
			type: deepPartialify(schema.element)
		});
		else if (schema instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema.unwrap()));
		else if (schema instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema.unwrap()));
		else if (schema instanceof ZodTuple) return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
		else return schema;
	}
	var ZodObject = class ZodObject extends ZodType {
		constructor() {
			super(...arguments);
			this._cached = null;
			/**
			* @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
			* If you want to pass through unknown properties, use `.passthrough()` instead.
			*/
			this.nonstrict = this.passthrough;
			/**
			* @deprecated Use `.extend` instead
			*  */
			this.augment = this.extend;
		}
		_getCached() {
			if (this._cached !== null) return this._cached;
			const shape = this._def.shape();
			this._cached = {
				shape,
				keys: util.objectKeys(shape)
			};
			return this._cached;
		}
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.object) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.object,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const { status, ctx } = this._processInputParams(input);
			const { shape, keys: shapeKeys } = this._getCached();
			const extraKeys = [];
			if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
				for (const key in ctx.data) if (!shapeKeys.includes(key)) extraKeys.push(key);
			}
			const pairs = [];
			for (const key of shapeKeys) {
				const keyValidator = shape[key];
				const value = ctx.data[key];
				pairs.push({
					key: {
						status: "valid",
						value: key
					},
					value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
					alwaysSet: key in ctx.data
				});
			}
			if (this._def.catchall instanceof ZodNever) {
				const unknownKeys = this._def.unknownKeys;
				if (unknownKeys === "passthrough") for (const key of extraKeys) pairs.push({
					key: {
						status: "valid",
						value: key
					},
					value: {
						status: "valid",
						value: ctx.data[key]
					}
				});
				else if (unknownKeys === "strict") {
					if (extraKeys.length > 0) {
						addIssueToContext(ctx, {
							code: ZodIssueCode.unrecognized_keys,
							keys: extraKeys
						});
						status.dirty();
					}
				} else if (unknownKeys === "strip") {} else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
			} else {
				const catchall = this._def.catchall;
				for (const key of extraKeys) {
					const value = ctx.data[key];
					pairs.push({
						key: {
							status: "valid",
							value: key
						},
						value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
						alwaysSet: key in ctx.data
					});
				}
			}
			if (ctx.common.async) return Promise.resolve().then(async () => {
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
			else return ParseStatus.mergeObjectSync(status, pairs);
		}
		get shape() {
			return this._def.shape();
		}
		strict(message) {
			errorUtil.errToObj;
			return new ZodObject({
				...this._def,
				unknownKeys: "strict",
				...message !== void 0 ? { errorMap: (issue, ctx) => {
					const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
					if (issue.code === "unrecognized_keys") return { message: errorUtil.errToObj(message).message ?? defaultError };
					return { message: defaultError };
				} } : {}
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
			return new ZodObject({
				unknownKeys: merging._def.unknownKeys,
				catchall: merging._def.catchall,
				shape: () => ({
					...this._def.shape(),
					...merging._def.shape()
				}),
				typeName: ZodFirstPartyTypeKind.ZodObject
			});
		}
		setKey(key, schema) {
			return this.augment({ [key]: schema });
		}
		catchall(index) {
			return new ZodObject({
				...this._def,
				catchall: index
			});
		}
		pick(mask) {
			const shape = {};
			for (const key of util.objectKeys(mask)) if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
			return new ZodObject({
				...this._def,
				shape: () => shape
			});
		}
		omit(mask) {
			const shape = {};
			for (const key of util.objectKeys(this.shape)) if (!mask[key]) shape[key] = this.shape[key];
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
				if (mask && !mask[key]) newShape[key] = fieldSchema;
				else newShape[key] = fieldSchema.optional();
			}
			return new ZodObject({
				...this._def,
				shape: () => newShape
			});
		}
		required(mask) {
			const newShape = {};
			for (const key of util.objectKeys(this.shape)) if (mask && !mask[key]) newShape[key] = this.shape[key];
			else {
				let newField = this.shape[key];
				while (newField instanceof ZodOptional) newField = newField._def.innerType;
				newShape[key] = newField;
			}
			return new ZodObject({
				...this._def,
				shape: () => newShape
			});
		}
		keyof() {
			return createZodEnum(util.objectKeys(this.shape));
		}
	};
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
	var ZodUnion = class extends ZodType {
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			const options = this._def.options;
			function handleResults(results) {
				for (const result of results) if (result.result.status === "valid") return result.result;
				for (const result of results) if (result.result.status === "dirty") {
					ctx.common.issues.push(...result.ctx.common.issues);
					return result.result;
				}
				const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_union,
					unionErrors
				});
				return INVALID;
			}
			if (ctx.common.async) return Promise.all(options.map(async (option) => {
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
			else {
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
					const result = option._parseSync({
						data: ctx.data,
						path: ctx.path,
						parent: childCtx
					});
					if (result.status === "valid") return result;
					else if (result.status === "dirty" && !dirty) dirty = {
						result,
						ctx: childCtx
					};
					if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
				}
				if (dirty) {
					ctx.common.issues.push(...dirty.ctx.common.issues);
					return dirty.result;
				}
				const unionErrors = issues.map((issues) => new ZodError(issues));
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
	};
	ZodUnion.create = (types, params) => {
		return new ZodUnion({
			options: types,
			typeName: ZodFirstPartyTypeKind.ZodUnion,
			...processCreateParams(params)
		});
	};
	var getDiscriminator = (type) => {
		if (type instanceof ZodLazy) return getDiscriminator(type.schema);
		else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
		else if (type instanceof ZodLiteral) return [type.value];
		else if (type instanceof ZodEnum) return type.options;
		else if (type instanceof ZodNativeEnum) return util.objectValues(type.enum);
		else if (type instanceof ZodDefault) return getDiscriminator(type._def.innerType);
		else if (type instanceof ZodUndefined) return [void 0];
		else if (type instanceof ZodNull) return [null];
		else if (type instanceof ZodOptional) return [void 0, ...getDiscriminator(type.unwrap())];
		else if (type instanceof ZodNullable) return [null, ...getDiscriminator(type.unwrap())];
		else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
		else if (type instanceof ZodReadonly) return getDiscriminator(type.unwrap());
		else if (type instanceof ZodCatch) return getDiscriminator(type._def.innerType);
		else return [];
	};
	var ZodDiscriminatedUnion = class ZodDiscriminatedUnion extends ZodType {
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
			if (ctx.common.async) return option._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			else return option._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
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
				if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
				for (const value of discriminatorValues) {
					if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
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
	};
	function mergeValues(a, b) {
		const aType = getParsedType(a);
		const bType = getParsedType(b);
		if (a === b) return {
			valid: true,
			data: a
		};
		else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
			const bKeys = util.objectKeys(b);
			const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
			const newObj = {
				...a,
				...b
			};
			for (const key of sharedKeys) {
				const sharedValue = mergeValues(a[key], b[key]);
				if (!sharedValue.valid) return { valid: false };
				newObj[key] = sharedValue.data;
			}
			return {
				valid: true,
				data: newObj
			};
		} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
			if (a.length !== b.length) return { valid: false };
			const newArray = [];
			for (let index = 0; index < a.length; index++) {
				const itemA = a[index];
				const itemB = b[index];
				const sharedValue = mergeValues(itemA, itemB);
				if (!sharedValue.valid) return { valid: false };
				newArray.push(sharedValue.data);
			}
			return {
				valid: true,
				data: newArray
			};
		} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
			valid: true,
			data: a
		};
		else return { valid: false };
	}
	var ZodIntersection = class extends ZodType {
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			const handleParsed = (parsedLeft, parsedRight) => {
				if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
				const merged = mergeValues(parsedLeft.value, parsedRight.value);
				if (!merged.valid) {
					addIssueToContext(ctx, { code: ZodIssueCode.invalid_intersection_types });
					return INVALID;
				}
				if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
				return {
					status: status.value,
					value: merged.data
				};
			};
			if (ctx.common.async) return Promise.all([this._def.left._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}), this._def.right._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			})]).then(([left, right]) => handleParsed(left, right));
			else return handleParsed(this._def.left._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}), this._def.right._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}));
		}
	};
	ZodIntersection.create = (left, right, params) => {
		return new ZodIntersection({
			left,
			right,
			typeName: ZodFirstPartyTypeKind.ZodIntersection,
			...processCreateParams(params)
		});
	};
	var ZodTuple = class ZodTuple extends ZodType {
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
			if (!this._def.rest && ctx.data.length > this._def.items.length) {
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
				if (!schema) return null;
				return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
			}).filter((x) => !!x);
			if (ctx.common.async) return Promise.all(items).then((results) => {
				return ParseStatus.mergeArray(status, results);
			});
			else return ParseStatus.mergeArray(status, items);
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
	};
	ZodTuple.create = (schemas, params) => {
		if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
		return new ZodTuple({
			items: schemas,
			typeName: ZodFirstPartyTypeKind.ZodTuple,
			rest: null,
			...processCreateParams(params)
		});
	};
	var ZodRecord = class ZodRecord extends ZodType {
		get keySchema() {
			return this._def.keyType;
		}
		get valueSchema() {
			return this._def.valueType;
		}
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.object) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.object,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const pairs = [];
			const keyType = this._def.keyType;
			const valueType = this._def.valueType;
			for (const key in ctx.data) pairs.push({
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
				value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
				alwaysSet: key in ctx.data
			});
			if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs);
			else return ParseStatus.mergeObjectSync(status, pairs);
		}
		get element() {
			return this._def.valueType;
		}
		static create(first, second, third) {
			if (second instanceof ZodType) return new ZodRecord({
				keyType: first,
				valueType: second,
				typeName: ZodFirstPartyTypeKind.ZodRecord,
				...processCreateParams(third)
			});
			return new ZodRecord({
				keyType: ZodString.create(),
				valueType: first,
				typeName: ZodFirstPartyTypeKind.ZodRecord,
				...processCreateParams(second)
			});
		}
	};
	var ZodMap = class extends ZodType {
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
						if (key.status === "aborted" || value.status === "aborted") return INVALID;
						if (key.status === "dirty" || value.status === "dirty") status.dirty();
						finalMap.set(key.value, value.value);
					}
					return {
						status: status.value,
						value: finalMap
					};
				});
			} else {
				const finalMap = /* @__PURE__ */ new Map();
				for (const pair of pairs) {
					const key = pair.key;
					const value = pair.value;
					if (key.status === "aborted" || value.status === "aborted") return INVALID;
					if (key.status === "dirty" || value.status === "dirty") status.dirty();
					finalMap.set(key.value, value.value);
				}
				return {
					status: status.value,
					value: finalMap
				};
			}
		}
	};
	ZodMap.create = (keyType, valueType, params) => {
		return new ZodMap({
			valueType,
			keyType,
			typeName: ZodFirstPartyTypeKind.ZodMap,
			...processCreateParams(params)
		});
	};
	var ZodSet = class ZodSet extends ZodType {
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
			function finalizeSet(elements) {
				const parsedSet = /* @__PURE__ */ new Set();
				for (const element of elements) {
					if (element.status === "aborted") return INVALID;
					if (element.status === "dirty") status.dirty();
					parsedSet.add(element.value);
				}
				return {
					status: status.value,
					value: parsedSet
				};
			}
			const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
			if (ctx.common.async) return Promise.all(elements).then((elements) => finalizeSet(elements));
			else return finalizeSet(elements);
		}
		min(minSize, message) {
			return new ZodSet({
				...this._def,
				minSize: {
					value: minSize,
					message: errorUtil.toString(message)
				}
			});
		}
		max(maxSize, message) {
			return new ZodSet({
				...this._def,
				maxSize: {
					value: maxSize,
					message: errorUtil.toString(message)
				}
			});
		}
		size(size, message) {
			return this.min(size, message).max(size, message);
		}
		nonempty(message) {
			return this.min(1, message);
		}
	};
	ZodSet.create = (valueType, params) => {
		return new ZodSet({
			valueType,
			minSize: null,
			maxSize: null,
			typeName: ZodFirstPartyTypeKind.ZodSet,
			...processCreateParams(params)
		});
	};
	var ZodFunction = class ZodFunction extends ZodType {
		constructor() {
			super(...arguments);
			this.validate = this.implement;
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.function) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.function,
					received: ctx.parsedType
				});
				return INVALID;
			}
			function makeArgsIssue(args, error) {
				return makeIssue({
					data: args,
					path: ctx.path,
					errorMaps: [
						ctx.common.contextualErrorMap,
						ctx.schemaErrorMap,
						getErrorMap(),
						errorMap
					].filter((x) => !!x),
					issueData: {
						code: ZodIssueCode.invalid_arguments,
						argumentsError: error
					}
				});
			}
			function makeReturnsIssue(returns, error) {
				return makeIssue({
					data: returns,
					path: ctx.path,
					errorMaps: [
						ctx.common.contextualErrorMap,
						ctx.schemaErrorMap,
						getErrorMap(),
						errorMap
					].filter((x) => !!x),
					issueData: {
						code: ZodIssueCode.invalid_return_type,
						returnTypeError: error
					}
				});
			}
			const params = { errorMap: ctx.common.contextualErrorMap };
			const fn = ctx.data;
			if (this._def.returns instanceof ZodPromise) {
				const me = this;
				return OK(async function(...args) {
					const error = new ZodError([]);
					const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
						error.addIssue(makeArgsIssue(args, e));
						throw error;
					});
					const result = await Reflect.apply(fn, this, parsedArgs);
					return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
						error.addIssue(makeReturnsIssue(result, e));
						throw error;
					});
				});
			} else {
				const me = this;
				return OK(function(...args) {
					const parsedArgs = me._def.args.safeParse(args, params);
					if (!parsedArgs.success) throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
					const result = Reflect.apply(fn, this, parsedArgs.data);
					const parsedReturns = me._def.returns.safeParse(result, params);
					if (!parsedReturns.success) throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
					return parsedReturns.data;
				});
			}
		}
		parameters() {
			return this._def.args;
		}
		returnType() {
			return this._def.returns;
		}
		args(...items) {
			return new ZodFunction({
				...this._def,
				args: ZodTuple.create(items).rest(ZodUnknown.create())
			});
		}
		returns(returnType) {
			return new ZodFunction({
				...this._def,
				returns: returnType
			});
		}
		implement(func) {
			return this.parse(func);
		}
		strictImplement(func) {
			return this.parse(func);
		}
		static create(args, returns, params) {
			return new ZodFunction({
				args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
				returns: returns || ZodUnknown.create(),
				typeName: ZodFirstPartyTypeKind.ZodFunction,
				...processCreateParams(params)
			});
		}
	};
	var ZodLazy = class extends ZodType {
		get schema() {
			return this._def.getter();
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			return this._def.getter()._parse({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
		}
	};
	ZodLazy.create = (getter, params) => {
		return new ZodLazy({
			getter,
			typeName: ZodFirstPartyTypeKind.ZodLazy,
			...processCreateParams(params)
		});
	};
	var ZodLiteral = class extends ZodType {
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
			return {
				status: "valid",
				value: input.data
			};
		}
		get value() {
			return this._def.value;
		}
	};
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
	var ZodEnum = class ZodEnum extends ZodType {
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
			if (!this._cache) this._cache = new Set(this._def.values);
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
			for (const val of this._def.values) enumValues[val] = val;
			return enumValues;
		}
		get Values() {
			const enumValues = {};
			for (const val of this._def.values) enumValues[val] = val;
			return enumValues;
		}
		get Enum() {
			const enumValues = {};
			for (const val of this._def.values) enumValues[val] = val;
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
	};
	ZodEnum.create = createZodEnum;
	var ZodNativeEnum = class extends ZodType {
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
			if (!this._cache) this._cache = new Set(util.getValidEnumValues(this._def.values));
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
	};
	ZodNativeEnum.create = (values, params) => {
		return new ZodNativeEnum({
			values,
			typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
			...processCreateParams(params)
		});
	};
	var ZodPromise = class extends ZodType {
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
			return OK((ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data)).then((data) => {
				return this._def.type.parseAsync(data, {
					path: ctx.path,
					errorMap: ctx.common.contextualErrorMap
				});
			}));
		}
	};
	ZodPromise.create = (schema, params) => {
		return new ZodPromise({
			type: schema,
			typeName: ZodFirstPartyTypeKind.ZodPromise,
			...processCreateParams(params)
		});
	};
	var ZodEffects = class extends ZodType {
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
					if (arg.fatal) status.abort();
					else status.dirty();
				},
				get path() {
					return ctx.path;
				}
			};
			checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
			if (effect.type === "preprocess") {
				const processed = effect.transform(ctx.data, checkCtx);
				if (ctx.common.async) return Promise.resolve(processed).then(async (processed) => {
					if (status.value === "aborted") return INVALID;
					const result = await this._def.schema._parseAsync({
						data: processed,
						path: ctx.path,
						parent: ctx
					});
					if (result.status === "aborted") return INVALID;
					if (result.status === "dirty") return DIRTY(result.value);
					if (status.value === "dirty") return DIRTY(result.value);
					return result;
				});
				else {
					if (status.value === "aborted") return INVALID;
					const result = this._def.schema._parseSync({
						data: processed,
						path: ctx.path,
						parent: ctx
					});
					if (result.status === "aborted") return INVALID;
					if (result.status === "dirty") return DIRTY(result.value);
					if (status.value === "dirty") return DIRTY(result.value);
					return result;
				}
			}
			if (effect.type === "refinement") {
				const executeRefinement = (acc) => {
					const result = effect.refinement(acc, checkCtx);
					if (ctx.common.async) return Promise.resolve(result);
					if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
					return acc;
				};
				if (ctx.common.async === false) {
					const inner = this._def.schema._parseSync({
						data: ctx.data,
						path: ctx.path,
						parent: ctx
					});
					if (inner.status === "aborted") return INVALID;
					if (inner.status === "dirty") status.dirty();
					executeRefinement(inner.value);
					return {
						status: status.value,
						value: inner.value
					};
				} else return this._def.schema._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				}).then((inner) => {
					if (inner.status === "aborted") return INVALID;
					if (inner.status === "dirty") status.dirty();
					return executeRefinement(inner.value).then(() => {
						return {
							status: status.value,
							value: inner.value
						};
					});
				});
			}
			if (effect.type === "transform") if (ctx.common.async === false) {
				const base = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (!isValid(base)) return INVALID;
				const result = effect.transform(base.value, checkCtx);
				if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
				return {
					status: status.value,
					value: result
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((base) => {
				if (!isValid(base)) return INVALID;
				return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
					status: status.value,
					value: result
				}));
			});
			util.assertNever(effect);
		}
	};
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
			effect: {
				type: "preprocess",
				transform: preprocess
			},
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			...processCreateParams(params)
		});
	};
	var ZodOptional = class extends ZodType {
		_parse(input) {
			if (this._getType(input) === ZodParsedType.undefined) return OK(void 0);
			return this._def.innerType._parse(input);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	ZodOptional.create = (type, params) => {
		return new ZodOptional({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodOptional,
			...processCreateParams(params)
		});
	};
	var ZodNullable = class extends ZodType {
		_parse(input) {
			if (this._getType(input) === ZodParsedType.null) return OK(null);
			return this._def.innerType._parse(input);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	ZodNullable.create = (type, params) => {
		return new ZodNullable({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodNullable,
			...processCreateParams(params)
		});
	};
	var ZodDefault = class extends ZodType {
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			let data = ctx.data;
			if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
			return this._def.innerType._parse({
				data,
				path: ctx.path,
				parent: ctx
			});
		}
		removeDefault() {
			return this._def.innerType;
		}
	};
	ZodDefault.create = (type, params) => {
		return new ZodDefault({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodDefault,
			defaultValue: typeof params.default === "function" ? params.default : () => params.default,
			...processCreateParams(params)
		});
	};
	var ZodCatch = class extends ZodType {
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			const newCtx = {
				...ctx,
				common: {
					...ctx.common,
					issues: []
				}
			};
			const result = this._def.innerType._parse({
				data: newCtx.data,
				path: newCtx.path,
				parent: { ...newCtx }
			});
			if (isAsync(result)) return result.then((result) => {
				return {
					status: "valid",
					value: result.status === "valid" ? result.value : this._def.catchValue({
						get error() {
							return new ZodError(newCtx.common.issues);
						},
						input: newCtx.data
					})
				};
			});
			else return {
				status: "valid",
				value: result.status === "valid" ? result.value : this._def.catchValue({
					get error() {
						return new ZodError(newCtx.common.issues);
					},
					input: newCtx.data
				})
			};
		}
		removeCatch() {
			return this._def.innerType;
		}
	};
	ZodCatch.create = (type, params) => {
		return new ZodCatch({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodCatch,
			catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
			...processCreateParams(params)
		});
	};
	var ZodNaN = class extends ZodType {
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.nan) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.nan,
					received: ctx.parsedType
				});
				return INVALID;
			}
			return {
				status: "valid",
				value: input.data
			};
		}
	};
	ZodNaN.create = (params) => {
		return new ZodNaN({
			typeName: ZodFirstPartyTypeKind.ZodNaN,
			...processCreateParams(params)
		});
	};
	var ZodBranded = class extends ZodType {
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
	};
	var ZodPipeline = class ZodPipeline extends ZodType {
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			if (ctx.common.async) {
				const handleAsync = async () => {
					const inResult = await this._def.in._parseAsync({
						data: ctx.data,
						path: ctx.path,
						parent: ctx
					});
					if (inResult.status === "aborted") return INVALID;
					if (inResult.status === "dirty") {
						status.dirty();
						return DIRTY(inResult.value);
					} else return this._def.out._parseAsync({
						data: inResult.value,
						path: ctx.path,
						parent: ctx
					});
				};
				return handleAsync();
			} else {
				const inResult = this._def.in._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inResult.status === "aborted") return INVALID;
				if (inResult.status === "dirty") {
					status.dirty();
					return {
						status: "dirty",
						value: inResult.value
					};
				} else return this._def.out._parseSync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx
				});
			}
		}
		static create(a, b) {
			return new ZodPipeline({
				in: a,
				out: b,
				typeName: ZodFirstPartyTypeKind.ZodPipeline
			});
		}
	};
	var ZodReadonly = class extends ZodType {
		_parse(input) {
			const result = this._def.innerType._parse(input);
			const freeze = (data) => {
				if (isValid(data)) data.value = Object.freeze(data.value);
				return data;
			};
			return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	ZodReadonly.create = (type, params) => {
		return new ZodReadonly({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodReadonly,
			...processCreateParams(params)
		});
	};
	ZodObject.lazycreate;
	var ZodFirstPartyTypeKind;
	(function(ZodFirstPartyTypeKind) {
		ZodFirstPartyTypeKind["ZodString"] = "ZodString";
		ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
		ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
		ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
		ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
		ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
		ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
		ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
		ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
		ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
		ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
		ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
		ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
		ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
		ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
		ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
		ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
		ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
		ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
		ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
		ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
		ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
		ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
		ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
		ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
		ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
		ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
		ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
		ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
		ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
		ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
		ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
		ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
		ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
		ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
		ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
	})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
	var stringType = ZodString.create;
	var numberType = ZodNumber.create;
	ZodNaN.create;
	ZodBigInt.create;
	var booleanType = ZodBoolean.create;
	ZodDate.create;
	ZodSymbol.create;
	ZodUndefined.create;
	ZodNull.create;
	ZodAny.create;
	ZodUnknown.create;
	ZodNever.create;
	ZodVoid.create;
	var arrayType = ZodArray.create;
	var objectType = ZodObject.create;
	ZodObject.strictCreate;
	ZodUnion.create;
	var discriminatedUnionType = ZodDiscriminatedUnion.create;
	ZodIntersection.create;
	ZodTuple.create;
	ZodRecord.create;
	ZodMap.create;
	ZodSet.create;
	ZodFunction.create;
	ZodLazy.create;
	var literalType = ZodLiteral.create;
	var enumType = ZodEnum.create;
	ZodNativeEnum.create;
	ZodPromise.create;
	ZodEffects.create;
	ZodOptional.create;
	ZodNullable.create;
	ZodEffects.createWithPreprocess;
	ZodPipeline.create;
	//#endregion
	//#region ../../packages/shared/dist/index.js
	/**
	* CalmWeb Shared Types and Schemas
	*
	* Core interfaces and Zod validation for the CalmWeb content firewall extension.
	*/
	var ProcessingModeSchema = enumType([
		"local_rules",
		"byok_llm",
		"hosted_llm"
	]);
	var DEFAULT_OPENROUTER_MODEL = "openrouter/free";
	var ActionDecisionSchema = enumType([
		"show",
		"blur",
		"hide",
		"neutralize",
		"collapse",
		"rebuild"
	]);
	objectType({
		id: stringType(),
		site: stringType(),
		fingerprint: stringType(),
		sourceName: stringType().optional(),
		title: stringType(),
		metadata: arrayType(stringType()),
		isNew: booleanType(),
		url: stringType().url().optional()
	});
	objectType({
		decision: ActionDecisionSchema,
		confidence: numberType().min(0).max(1),
		reason: stringType(),
		neutralizedTitle: stringType().optional(),
		error: stringType().optional()
	});
	var PresetSelectionSchema = objectType({
		politics: booleanType().default(false),
		ragebait: booleanType().default(false),
		spoilers: booleanType().default(false),
		clickbait: booleanType().default(false)
	});
	var UserRulesSchema = objectType({
		blocklistChannels: arrayType(stringType()).default([]),
		blocklistKeywords: arrayType(stringType()).default([]),
		allowlistChannels: arrayType(stringType()).default([]),
		allowlistKeywords: arrayType(stringType()).default([]),
		presets: PresetSelectionSchema.default({
			politics: false,
			ragebait: false,
			spoilers: false,
			clickbait: false
		})
	});
	var NeutralizationModeSchema = enumType([
		"light",
		"medium",
		"strict"
	]);
	var NeutralizationSettingsSchema = objectType({
		enabled: booleanType().default(true),
		mode: NeutralizationModeSchema.default("medium"),
		showIndicator: booleanType().default(true),
		showDiffOnHover: booleanType().default(true),
		excludeDomains: arrayType(stringType()).default([])
	});
	var defaultNeutralizationSettings = {
		enabled: true,
		mode: "medium",
		showIndicator: true,
		showDiffOnHover: true,
		excludeDomains: []
	};
	var ReaderSettingsSchema = objectType({
		enabled: booleanType().default(true),
		defaultLayout: stringType().default("auto"),
		defaultTheme: stringType().default("default"),
		autoOpen: booleanType().default(true),
		textOnly: booleanType().default(true),
		font: stringType().default("Inter"),
		fontSize: stringType().default("17px"),
		showInContextMenu: booleanType().default(true),
		apiEndpoint: stringType().optional(),
		apiKey: stringType().optional()
	});
	var defaultReaderSettings = {
		enabled: true,
		defaultLayout: "auto",
		defaultTheme: "default",
		autoOpen: true,
		textOnly: true,
		font: "Inter",
		fontSize: "17px",
		showInContextMenu: true
	};
	var MediaFilterModeSchema = enumType([
		"off",
		"blur",
		"hide"
	]);
	var MediaFilterSettingsSchema = objectType({
		enabled: booleanType().default(true),
		mode: MediaFilterModeSchema.default("blur"),
		blurThreshold: numberType().min(0).max(1).default(.5),
		hideThreshold: numberType().min(0).max(1).default(.8),
		analyzeAltText: booleanType().default(true),
		analyzeThumbnails: booleanType().default(true),
		showToggle: booleanType().default(true),
		revealOnHover: booleanType().default(true)
	});
	var defaultMediaFilterSettings = {
		enabled: true,
		mode: "blur",
		blurThreshold: .5,
		hideThreshold: .8,
		analyzeAltText: true,
		analyzeThumbnails: true,
		showToggle: true,
		revealOnHover: true
	};
	var SiteCategorySchema = enumType([
		"social_media",
		"content_farms",
		"gambling",
		"adult",
		"piracy",
		"malware",
		"spam",
		"fake_news",
		"productivity",
		"shopping",
		"gaming",
		"streaming",
		"news",
		"custom"
	]);
	var SiteFilterSettingsSchema = objectType({
		enabled: booleanType().default(true),
		blockBlockedSites: booleanType().default(true),
		searchFilterEnabled: booleanType().default(true),
		hideBlockedResults: booleanType().default(true),
		showCategoryBadge: booleanType().default(false),
		blockedCategories: arrayType(SiteCategorySchema).default([]),
		customBlocklist: arrayType(stringType()).default([]),
		customAllowlist: arrayType(stringType()).default([]),
		useExternalBlocklists: booleanType().default(true),
		redirectToDDG: booleanType().default(true)
	});
	objectType({
		enabled: booleanType().default(true),
		processingMode: ProcessingModeSchema.default("local_rules"),
		strictness: numberType().min(0).max(100).default(80),
		rules: UserRulesSchema.default({
			blocklistChannels: [],
			blocklistKeywords: [],
			allowlistChannels: [],
			allowlistKeywords: [],
			presets: {
				politics: false,
				ragebait: true,
				spoilers: false,
				clickbait: true
			}
		}),
		byokKey: stringType().optional(),
		aiModel: stringType().default(DEFAULT_OPENROUTER_MODEL),
		customEndpoint: stringType().optional(),
		neutralization: NeutralizationSettingsSchema.default(defaultNeutralizationSettings),
		reader: ReaderSettingsSchema.default(defaultReaderSettings),
		mediaFilter: MediaFilterSettingsSchema.default(defaultMediaFilterSettings),
		siteFilter: SiteFilterSettingsSchema.default({
			enabled: true,
			blockBlockedSites: true,
			searchFilterEnabled: true,
			hideBlockedResults: true,
			showCategoryBadge: false,
			blockedCategories: [
				"gambling",
				"malware",
				"spam",
				"fake_news"
			],
			customBlocklist: [],
			customAllowlist: [],
			useExternalBlocklists: true,
			redirectToDDG: true
		})
	});
	/**
	* Simple string hash algorithm for fingerprinting content.
	* Not crytographically secure, but fast and sufficient for caching.
	*/
	function simpleHash(str) {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			const char = str.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash;
		}
		return hash.toString(36);
	}
	/**
	* Generate a stable fingerprint for a ContentUnit.
	* Combines title and sourceName, ignores variable fields.
	*/
	function generateFingerprint(unit) {
		return simpleHash(`${unit.title}|${unit.sourceName || ""}|${unit.site}`);
	}
	objectType({
		totalFiltered: numberType().default(0),
		byAction: objectType({
			hide: numberType().default(0),
			blur: numberType().default(0),
			neutralize: numberType().default(0),
			collapse: numberType().default(0)
		}).default({
			hide: 0,
			blur: 0,
			neutralize: 0,
			collapse: 0
		}),
		byPreset: objectType({
			politics: numberType().default(0),
			ragebait: numberType().default(0),
			spoilers: numberType().default(0),
			clickbait: numberType().default(0)
		}).default({
			politics: 0,
			ragebait: 0,
			spoilers: 0,
			clickbait: 0
		}),
		timeSaved: numberType().default(0),
		topFilteredSources: arrayType(stringType()).default([]),
		dailyHistory: arrayType(objectType({
			date: stringType(),
			count: numberType()
		})).default([]),
		lastReset: numberType().default(Date.now())
	});
	//#endregion
	//#region src/renderer/collapse.ts
	var REASON_LABELS = {
		preset_politics: "Politics filtered",
		preset_ragebait: "Ragebait blocked",
		preset_spoilers: "Spoiler shield",
		preset_clickbait: "Clickbait removed",
		blocklist_channel: "Blocked source",
		blocklist_keyword: "Filtered keyword",
		llm_classification: "AI filtered",
		hosted: "Content filtered"
	};
	function getReasonLabel(reason) {
		for (const [key, label] of Object.entries(REASON_LABELS)) if (reason.includes(key)) return label;
		return "Content filtered";
	}
	function getReasonIcon(reason) {
		if (reason.includes("politics")) return "🏛️";
		if (reason.includes("ragebait")) return "😠";
		if (reason.includes("spoilers")) return "🤐";
		if (reason.includes("clickbait")) return "🎯";
		if (reason.includes("channel") || reason.includes("keyword")) return "🚫";
		return "🛡️";
	}
	function createCollapsePlaceholder(options) {
		const { reason, originalElement, result: _result, onExpand, siteId } = options;
		const container = document.createElement("div");
		container.className = "calmweb-collapse-container";
		container.setAttribute("data-calmweb-collapse", "true");
		container.setAttribute("data-calmweb-reason", reason);
		const label = getReasonLabel(reason);
		container.innerHTML = `
    <div class="calmweb-collapse-badge">
      <span class="calmweb-collapse-icon">${getReasonIcon(reason)}</span>
      <span class="calmweb-collapse-label">${label}</span>
    </div>
    <button class="calmweb-collapse-expand" type="button">
      <span>Show anyway</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
  `;
		container.querySelector(".calmweb-collapse-expand").addEventListener("click", (e) => {
			e.stopPropagation();
			expandCollapsedContent(container, originalElement);
			if (onExpand) onExpand();
		});
		container.setAttribute("data-calmweb-original-height", String(originalElement.offsetHeight));
		container.setAttribute("data-calmweb-site", siteId || "unknown");
		return container;
	}
	function expandCollapsedContent(placeholder, originalElement) {
		placeholder.classList.add("calmweb-collapse-expanding");
		requestAnimationFrame(() => {
			originalElement.style.display = "";
			originalElement.style.opacity = "0";
			originalElement.style.transition = "opacity 0.2s ease-in-out";
			placeholder.replaceWith(originalElement);
			requestAnimationFrame(() => {
				originalElement.style.opacity = "1";
				setTimeout(() => {
					originalElement.style.transition = "";
					originalElement.style.opacity = "";
				}, 200);
			});
		});
	}
	//#endregion
	//#region src/adapters/reddit.ts
	var NEW_REDDIT = {
		postCard: "[data-testid=\"post-container\"], div[data-click-id=\"body\"]",
		title: "[data-testid=\"post-title\"], h3",
		subreddit: "[data-testid=\"subreddit-name\"] a, a[href*=\"/r/\"]",
		metadata: "[data-testid=\"post-options-menu\"] span, .text-neutral-content"
	};
	var OLD_REDDIT = {
		postCard: ".thing.thing-type-self, .thing.thing-type-link",
		title: ".title a",
		subreddit: ".subreddit a",
		metadata: ".tagline span"
	};
	/**
	* Check if we're on new Reddit
	*/
	function isNewReddit() {
		return window.location.hostname === "www.reddit.com" || window.location.hostname === "reddit.com";
	}
	/**
	* Discover all post card elements within a root
	*/
	function discoverUnits(root) {
		const selectors = isNewReddit() ? NEW_REDDIT.postCard : `${NEW_REDDIT.postCard}, ${OLD_REDDIT.postCard}`;
		const nodes = root.querySelectorAll(selectors);
		return Array.from(nodes);
	}
	/**
	* Extract data from a Reddit post card
	*/
	function extractData(element) {
		const newReddit = isNewReddit();
		const titleEl = element.querySelector(newReddit ? NEW_REDDIT.title : OLD_REDDIT.title);
		const title = (titleEl?.innerText || titleEl?.textContent || "").trim() || "Untitled";
		const subredditEl = element.querySelector(newReddit ? NEW_REDDIT.subreddit : OLD_REDDIT.subreddit);
		let sourceName = (subredditEl?.innerText || subredditEl?.textContent || "").trim() || void 0;
		if (!sourceName && subredditEl) {
			const anchor = subredditEl;
			if (anchor.getAttribute?.("href")) {
				const match = (anchor.getAttribute("href") || "").match(/\/r\/([^\/]+)/);
				if (match) sourceName = `r/${match[1]}`;
			}
		}
		const metadataEls = element.querySelectorAll(newReddit ? NEW_REDDIT.metadata : OLD_REDDIT.metadata);
		const metadata = Array.from(metadataEls).map((el) => (el.innerText || el.textContent || "").trim()).filter(Boolean);
		const fingerprint = generateFingerprint({
			title,
			sourceName,
			site: "reddit",
			metadata
		});
		return {
			id: element.id || `reddit-${fingerprint}`,
			site: "reddit",
			fingerprint,
			sourceName,
			title,
			metadata,
			isNew: false
		};
	}
	/**
	* Apply classification decision to a Reddit post card
	*/
	function applyDecision(element, result) {
		element.removeAttribute("data-calmweb-processed");
		element.style.display = "";
		element.style.filter = "";
		element.classList.remove("calmweb-blurred", "calmweb-hidden", "calmweb-neutralized");
		if (result.decision === "hide") {
			element.style.display = "none";
			element.setAttribute("data-calmweb-processed", "hidden");
			const newReddit = isNewReddit();
			const titleEl = element.querySelector(newReddit ? NEW_REDDIT.title : OLD_REDDIT.title);
			const title = titleEl?.innerText || titleEl?.textContent || "Content";
			window.dispatchEvent(new CustomEvent("calmweb:neutralized", { detail: {
				before: title,
				after: "[Hidden]"
			} }));
			return;
		}
		if (result.decision === "collapse") {
			const placeholder = createCollapsePlaceholder({
				reason: result.reason,
				originalElement: element,
				result,
				siteId: "reddit"
			});
			const newReddit = isNewReddit();
			const titleEl = element.querySelector(newReddit ? NEW_REDDIT.title : OLD_REDDIT.title);
			const title = titleEl?.innerText || titleEl?.textContent || "Content";
			element.style.display = "none";
			element.insertAdjacentElement("afterend", placeholder);
			element.setAttribute("data-calmweb-processed", "collapsed");
			window.dispatchEvent(new CustomEvent("calmweb:neutralized", { detail: {
				before: title,
				after: "[Collapsed]"
			} }));
			return;
		}
		if (result.decision === "blur") {
			element.classList.add("calmweb-blurred");
			element.setAttribute("data-calmweb-processed", "blur");
			return;
		}
		if (result.decision === "neutralize" && result.neutralizedTitle) {
			const newReddit = isNewReddit();
			const titleEl = element.querySelector(newReddit ? NEW_REDDIT.title : OLD_REDDIT.title);
			const originalTitle = titleEl?.innerText || "";
			if (titleEl) titleEl.innerText = result.neutralizedTitle;
			element.classList.add("calmweb-neutralized");
			element.setAttribute("data-calmweb-processed", "neutralized");
			window.dispatchEvent(new CustomEvent("calmweb:neutralized", { detail: {
				before: originalTitle,
				after: result.neutralizedTitle
			} }));
			return;
		}
		if (result.decision === "rebuild") {
			element.style.display = "none";
			element.setAttribute("data-calmweb-processed", "rebuild");
			return;
		}
		element.setAttribute("data-calmweb-processed", "show");
	}
	/**
	* Reddit Site Adapter
	*/
	var redditAdapter = {
		siteId: "reddit",
		matches: [/^https?:\/\/(www\.)?reddit\.com\/.*/, /^https?:\/\/old\.reddit\.com\/.*/],
		discoverUnits,
		extractData,
		applyDecision
	};
	//#endregion
	//#region src/messaging/index.ts
	var MESSAGE_TYPES = {
		CLASSIFY_UNIT: "calmweb:classifyUnit",
		GET_SETTINGS: "calmweb:getSettings",
		UPDATE_SETTINGS: "calmweb:updateSettings",
		CLEAR_CACHE: "calmweb:clearCache",
		GET_STATS: "calmweb:getStats",
		INCREMENT_STAT: "calmweb:incrementStat"
	};
	discriminatedUnionType("type", [
		objectType({
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
		}),
		objectType({ type: literalType(MESSAGE_TYPES.GET_SETTINGS) }),
		objectType({
			type: literalType(MESSAGE_TYPES.UPDATE_SETTINGS),
			settings: objectType({
				enabled: booleanType().optional(),
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
				}).optional()
			})
		}),
		objectType({ type: literalType(MESSAGE_TYPES.CLEAR_CACHE) }),
		objectType({ type: literalType(MESSAGE_TYPES.GET_STATS) }),
		objectType({
			type: literalType(MESSAGE_TYPES.INCREMENT_STAT),
			key: literalType("totalFiltered"),
			amount: numberType().optional()
		})
	]);
	//#endregion
	//#region src/adfilter/css-only.ts
	/**
	* CSS-only Cleanup Module for CalmWeb
	*
	* Injects a <style> tag to hide annoying elements on any page.
	* No DOM manipulation, no scoring heuristic, no extraction.
	* Browser handles everything - extremely reliable.
	*/
	var CLEANUP_STYLE_ID = "calmweb-cleanup-css";
	var CLEANUP_CSS = `
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
`;
	/**
	* Inject the CSS cleanup styles into the page.
	* Returns a cleanup function to remove them.
	*/
	function injectCleanupCss() {
		if (document.getElementById(CLEANUP_STYLE_ID)) return () => {};
		const style = document.createElement("style");
		style.id = CLEANUP_STYLE_ID;
		style.textContent = CLEANUP_CSS;
		document.head.appendChild(style);
		return () => {
			const existing = document.getElementById(CLEANUP_STYLE_ID);
			if (existing) existing.remove();
		};
	}
	//#endregion
	//#region src/ui/activity-overlay.ts
	/**
	* Activity Overlay
	*
	* Floating panel that shows real-time filtering activity:
	* - Neutralized headlines (before → after)
	* - Blocked sites
	* - Filtered media
	* - Search results hidden
	*/
	var OVERLAY_ID = "calmweb-activity-overlay";
	var STYLES_ID = "calmweb-activity-styles";
	var activities = [];
	var maxActivities = 20;
	var overlay = null;
	var isExpanded = false;
	function injectStyles() {
		if (document.getElementById(STYLES_ID)) return;
		const styles = document.createElement("style");
		styles.id = STYLES_ID;
		styles.textContent = `
    #${OVERLAY_ID} {
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
  `;
		document.head.appendChild(styles);
	}
	function createOverlay() {
		const container = document.createElement("div");
		container.id = OVERLAY_ID;
		container.innerHTML = `
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
  `;
		const header = container.querySelector(".calmweb-activity-header");
		const panel = container.querySelector(".calmweb-activity-panel");
		const tabs = container.querySelectorAll(".calmweb-activity-tab");
		header.addEventListener("click", () => {
			isExpanded = !isExpanded;
			panel.classList.toggle("visible", isExpanded);
			if (isExpanded) renderList("all");
		});
		tabs.forEach((tab) => {
			tab.addEventListener("click", (e) => {
				e.stopPropagation();
				tabs.forEach((t) => t.classList.remove("active"));
				tab.classList.add("active");
				renderList(tab.dataset.tab || "all");
			});
		});
		return container;
	}
	function updateBadge() {
		if (!overlay) return;
		const count = activities.length;
		const badge = overlay.querySelector(".calmweb-activity-badge");
		const countText = overlay.querySelector(".calmweb-activity-count");
		badge.textContent = count.toString();
		badge.classList.toggle("empty", count === 0);
		countText.textContent = `${count} item${count !== 1 ? "s" : ""} filtered`;
	}
	function renderList(filter) {
		if (!overlay) return;
		const list = overlay.querySelector(".calmweb-activity-list");
		const filtered = filter === "all" ? activities : activities.filter((a) => a.type === filter);
		if (filtered.length === 0) {
			list.innerHTML = `
      <div class="calmweb-activity-empty">
        <div class="calmweb-activity-empty-icon">✨</div>
        <div>No recent activity</div>
      </div>
    `;
			return;
		}
		list.innerHTML = filtered.map((item) => {
			const timeAgo = getTimeAgo(item.timestamp);
			const typeLabel = {
				neutralized: "Neutralized",
				blocked: "Blocked",
				media: "Media",
				search: "Search"
			}[item.type];
			if (item.type === "neutralized" && item.after) return `
        <div class="calmweb-activity-item ${item.type}">
          <div class="calmweb-activity-label">${typeLabel}</div>
          <div class="calmweb-activity-before">${escapeHtml(item.before)}</div>
          <div class="calmweb-activity-arrow">↓</div>
          <div class="calmweb-activity-after">${escapeHtml(item.after)}</div>
          <div class="calmweb-activity-time">${timeAgo}</div>
        </div>
      `;
			return `
      <div class="calmweb-activity-item ${item.type}">
        <div class="calmweb-activity-label">${typeLabel}</div>
        <div class="calmweb-activity-after">${escapeHtml(item.before)}</div>
        ${item.reason ? `<div class="calmweb-activity-time">${item.reason}</div>` : ""}
        <div class="calmweb-activity-time">${timeAgo}</div>
      </div>
    `;
		}).join("");
	}
	function escapeHtml(text) {
		const div = document.createElement("div");
		div.textContent = text;
		return div.innerHTML;
	}
	function getTimeAgo(timestamp) {
		const seconds = Math.floor((Date.now() - timestamp) / 1e3);
		if (seconds < 60) return "Just now";
		const minutes = Math.floor(seconds / 60);
		if (minutes < 60) return `${minutes}m ago`;
		return `${Math.floor(minutes / 60)}h ago`;
	}
	function addActivity(item) {
		activities.unshift({
			...item,
			id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
			timestamp: Date.now()
		});
		if (activities.length > maxActivities) activities = activities.slice(0, maxActivities);
		updateBadge();
		if (isExpanded) {
			const activeTab = overlay?.querySelector(".calmweb-activity-tab.active");
			renderList(activeTab?.dataset.tab || "all");
		}
	}
	function logNeutralized(before, after) {
		addActivity({
			type: "neutralized",
			before,
			after
		});
	}
	function logBlocked(domain, reason) {
		addActivity({
			type: "blocked",
			before: domain,
			reason
		});
	}
	function logMedia(altText, action) {
		addActivity({
			type: "media",
			before: altText || "Image",
			after: action === "blurred" ? "Blurred" : "Hidden"
		});
	}
	function logSearch(domain) {
		addActivity({
			type: "search",
			before: domain,
			reason: "Hidden from results"
		});
	}
	async function initActivityOverlay() {
		if (document.getElementById(OVERLAY_ID)) {
			console.log("[ActivityOverlay] Already initialized");
			return;
		}
		console.log("[ActivityOverlay] Starting initialization...");
		try {
			const settings = await sendToBackground({ type: MESSAGE_TYPES.GET_SETTINGS });
			console.log("[ActivityOverlay] Settings received:", settings);
			const shouldShow = settings?.enabled && (settings.neutralization?.enabled || settings.mediaFilter?.enabled || settings.siteFilter?.enabled);
			console.log("[ActivityOverlay] shouldShow:", shouldShow, "enabled:", settings?.enabled, "neutralization:", settings?.neutralization?.enabled, "mediaFilter:", settings?.mediaFilter?.enabled, "siteFilter:", settings?.siteFilter?.enabled);
			if (!shouldShow) {
				console.log("[ActivityOverlay] Not showing overlay - filtering disabled");
				return;
			}
			injectStyles();
			overlay = createOverlay();
			document.body.appendChild(overlay);
			console.log("[ActivityOverlay] Overlay added to page");
			window.addEventListener("calmweb:neutralized", ((e) => {
				logNeutralized(e.detail.before, e.detail.after);
			}));
			window.addEventListener("calmweb:blocked", ((e) => {
				logBlocked(e.detail.domain, e.detail.reason);
			}));
			window.addEventListener("calmweb:mediaFiltered", ((e) => {
				logMedia(e.detail.altText, e.detail.action);
			}));
			window.addEventListener("calmweb:searchFiltered", ((e) => {
				logSearch(e.detail.domain);
			}));
		} catch (error) {
			console.error("[ActivityOverlay] Failed to initialize:", error);
		}
	}
	//#endregion
	//#region entrypoints/reddit.ts
	/**
	* Content Script for Reddit
	*
	* Observes Reddit post cards, classifies them, and applies decisions.
	*/
	var reddit_default = defineContentScript({
		matches: ["*://*.reddit.com/*"],
		runAt: "document_idle",
		main() {
			console.log("[Content] Reddit script loaded");
			initActivityOverlay();
			injectCleanupCss();
			const style = document.createElement("style");
			style.id = "calmweb-styles";
			style.textContent = `
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
    `;
			document.head.appendChild(style);
			const processUnits = async (units, isNew = false) => {
				if (units.length === 0) return;
				const unitDataList = units.map((el) => {
					const data = redditAdapter.extractData(el);
					data.isNew = isNew;
					return data;
				});
				const results = await Promise.all(unitDataList.map((unit) => sendToBackground({
					type: MESSAGE_TYPES.CLASSIFY_UNIT,
					unit
				})));
				units.forEach((el, idx) => {
					const result = results[idx];
					if (result && !("error" in result)) redditAdapter.applyDecision(el, result);
					el.removeAttribute("data-calmweb-processing");
				});
			};
			const initialPosts = redditAdapter.discoverUnits(document);
			initialPosts.forEach((el) => el.setAttribute("data-calmweb-processing", ""));
			processUnits(initialPosts, false);
			new MutationObserver((mutations) => {
				const newPosts = [];
				for (const mutation of mutations) {
					const added = mutation.addedNodes;
					for (let i = 0; i < added.length; i++) {
						const node = added[i];
						if (node instanceof HTMLElement) if (node.matches && node.matches("[data-testid=\"post-container\"], div[data-click-id=\"body\"], .thing.thing-type-self, .thing.thing-type-link")) newPosts.push(node);
						else {
							const unprocessed = redditAdapter.discoverUnits(node).filter((el) => !el.getAttribute("data-calmweb-processing"));
							newPosts.push(...unprocessed);
						}
					}
				}
				if (newPosts.length > 0) {
					newPosts.forEach((el) => el.setAttribute("data-calmweb-processing", ""));
					processUnits(newPosts, true);
				}
			}).observe(document.body, {
				childList: true,
				subtree: true
			});
			setInterval(() => {
				const unprocessed = redditAdapter.discoverUnits(document).filter((el) => !el.getAttribute("data-calmweb-processing"));
				if (unprocessed.length > 0) {
					unprocessed.forEach((el) => el.setAttribute("data-calmweb-processing", ""));
					processUnits(unprocessed, true);
				}
			}, 5e3);
		}
	});
	//#endregion
	//#region \0virtual:wxt-unlisted-script-entrypoint?/home/dracon/Dev/extensions/calmweb/apps/extension/entrypoints/reddit.ts
	function print(method, ...args) {
		if (typeof args[0] === "string") method(`[wxt] ${args.shift()}`, ...args);
		else method("[wxt]", ...args);
	}
	/** Wrapper around `console` with a "[wxt]" prefix */
	var logger = {
		debug: (...args) => print(console.debug, ...args),
		log: (...args) => print(console.log, ...args),
		warn: (...args) => print(console.warn, ...args),
		error: (...args) => print(console.error, ...args)
	};
	//#endregion
	return (() => {
		let result;
		try {
			result = reddit_default.main();
			if (result instanceof Promise) result = result.catch((err) => {
				logger.error(`The unlisted script "reddit" crashed on startup!`, err);
				throw err;
			});
		} catch (err) {
			logger.error(`The unlisted script "reddit" crashed on startup!`, err);
			throw err;
		}
		return result;
	})();
})();

reddit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZGl0LmpzIiwibmFtZXMiOlsiYnJvd3NlciIsImJyb3dzZXIiLCJicm93c2VyIiwiZGVmYXVsdEVycm9yTWFwIiwiZGVmYXVsdEVycm9yTWFwIiwiZGVmYXVsdEVycm9yTWFwIiwiei5lbnVtIiwiei5vYmplY3QiLCJ6LnN0cmluZyIsInouYXJyYXkiLCJ6LmJvb2xlYW4iLCJ6Lm51bWJlciJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4yMC4yMF9AdHlwZXMrbm9kZUAyNS41LjBfaml0aUAyLjYuMS9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uLy4uLy4uLy4uL3d4dC1zaGFyZWQvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL2Rpc3QvYXBpL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9kaXN0L2F1dGgvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9Ad3h0LWRldi9icm93c2VyL3NyYy9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9hc3luYy1tdXRleC9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9kZXF1YWwvbGl0ZS9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9Ad3h0LWRldi9zdG9yYWdlL2Rpc3QvaW5kZXgubWpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9kaXN0L3N0b3JhZ2UvcXVvdGEuanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL2Rpc3QvZXh0ZW5zaW9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL1pvZEVycm9yLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9sb2NhbGVzL2VuLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9lcnJvcnMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvcGFyc2VVdGlsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL2Vycm9yVXRpbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy96b2QvdjMvdHlwZXMuanMiLCIuLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQvZGlzdC9pbmRleC5qcyIsIi4uLy4uL3NyYy9yZW5kZXJlci9jb2xsYXBzZS50cyIsIi4uLy4uL3NyYy9hZGFwdGVycy9yZWRkaXQudHMiLCIuLi8uLi9zcmMvbWVzc2FnaW5nL2luZGV4LnRzIiwiLi4vLi4vc3JjL2FkZmlsdGVyL2Nzcy1vbmx5LnRzIiwiLi4vLi4vc3JjL3VpL2FjdGl2aXR5LW92ZXJsYXkudHMiLCIuLi8uLi9lbnRyeXBvaW50cy9yZWRkaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIHNyYy91dGlscy9kZWZpbmUtY29udGVudC1zY3JpcHQudHNcbmZ1bmN0aW9uIGRlZmluZUNvbnRlbnRTY3JpcHQoZGVmaW5pdGlvbikge1xuXHRyZXR1cm4gZGVmaW5pdGlvbjtcbn1cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgZGVmaW5lQ29udGVudFNjcmlwdCB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMi4wIC0gVHVlIE1heSAxNCAyMDI0IDE4OjAxOjI5ICovXG4gIC8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICghKGdsb2JhbFRoaXMuY2hyb21lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZS5pZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cbiAgaWYgKCEoZ2xvYmFsVGhpcy5icm93c2VyICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lLmlkKSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gICAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gICAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAgIC8vIEpTT04gZmlsZS5cbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImkxOG5cIjoge1xuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkbGVcIjoge1xuICAgICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidGFic1wiOiB7XG4gICAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgICAqIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgICAqL1xuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAgICpcbiAgICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgICAgbWF4QXJnczogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCIvKipcbiAqIEFQSSBjbGllbnQgZm9yIHRoZSBEcmFjb24gcGxhdGZvcm0gQVBJLlxuICpcbiAqIFByb3ZpZGVzIHN0YW5kYXJkaXplZCBBUEkgYWNjZXNzIHdpdGg6XG4gKiAtIEF1dG9tYXRpYyBhdXRoZW50aWNhdGlvbiBoYW5kbGluZyB2aWEgQmVhcmVyIHRva2VuXG4gKiAtIFRva2VuIHJlZnJlc2ggdXNpbmcgYC9hcGkvdjEvYXV0aC9yZWZyZXNoYFxuICogLSBDb250ZW50IHNjcmlwdCBwcm94eWluZyB0aHJvdWdoIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdFxuICogLSBUZW1wb3JhcnkgbGVnYWN5IHByb2R1Y3Qtcm91dGUgaGVscGVycyBmb3IgbWlncmF0aW9uXG4gKi9cbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5jb25zdCB3YXJuZWREZXByZWNhdGlvbnMgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiB3YXJuRGVwcmVjYXRlZFByb2R1Y3RSb3V0ZShtZXRob2ROYW1lLCByb3V0ZSkge1xuICAgIGNvbnN0IGtleSA9IGAke21ldGhvZE5hbWV9OiR7cm91dGV9YDtcbiAgICBpZiAod2FybmVkRGVwcmVjYXRpb25zLmhhcyhrZXkpKVxuICAgICAgICByZXR1cm47XG4gICAgd2FybmVkRGVwcmVjYXRpb25zLmFkZChrZXkpO1xuICAgIGNvbnNvbGUud2FybihgW3d4dC1zaGFyZWRdICR7bWV0aG9kTmFtZX0oKSBpcyBkZXByZWNhdGVkLiAke3JvdXRlfSBpcyBhIGxlZ2FjeSBtaWdyYXRpb24gcm91dGUuIGAgK1xuICAgICAgICAnUHJlZmVyIHRoZSBjYW5vbmljYWwgcGxhdGZvcm0gZW5kcG9pbnRzIHVuZGVyIC9hcGkvdjEvYXV0aCwgL2FwaS92MS9iaWxsaW5nLCBhbmQgL2FwaS92MS9jaGF0L2NvbXBsZXRpb25zLicpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQVBJIENsaWVudCBGYWN0b3J5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXBpQ2xpZW50KG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZ2V0QXV0aCwgc2V0QXV0aCwgb25BdXRoRXJyb3IgfSA9IG9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGF1dGggc3RhdGVcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBdXRoU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhYXV0aC5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIHVzZXI6IGF1dGgudXNlcixcbiAgICAgICAgICAgIHRva2VuOiBhdXRoLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiBhdXRoLnN1YnNjcmlwdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGdldEF1dGhTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNBdXRoZW50aWNhdGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoIGFjY2VzcyB0b2tlbiB1c2luZyB0aGUgcGxhdGZvcm0gcmVmcmVzaCBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBhdXRoID0gYXdhaXQgZ2V0QXV0aCgpO1xuICAgICAgICBpZiAoIWF1dGgucmVmcmVzaFRva2VuKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9hcGkvdjEvYXV0aC9yZWZyZXNoYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIC8vIEluY2x1ZGUgcmVmcmVzaF90b2tlbiBjb29raWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZnJlc2ggZmFpbGVkJyk7XG4gICAgICAgICAgICAvLyBUaGUgcGxhdGZvcm0gcmV0dXJucyBuZXcgdG9rZW5zIGluIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGF3YWl0IHNldEF1dGgoe1xuICAgICAgICAgICAgICAgIC4uLmF1dGgsXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGRhdGEuc2Vzc2lvbl90b2tlbiB8fCBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IGRhdGEucmVmcmVzaF90b2tlbiB8fCBhdXRoLnJlZnJlc2hUb2tlbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBUEldIFRva2VuIHJlZnJlc2ggZmFpbGVkOicsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gZGlyZWN0IEhUVFAgcmVxdWVzdCB3aXRoIGF1dGhcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBwZXJmb3JtUmVxdWVzdChlbmRwb2ludCwgb3B0cyA9IHt9LCBpc1JldHJ5ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QgPSAnR0VUJywgYm9keSwgaGVhZGVyczogY3VzdG9tSGVhZGVycywgc2tpcEF1dGggfSA9IG9wdHM7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgLi4uY3VzdG9tSGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFza2lwQXV0aCkge1xuICAgICAgICAgICAgY29uc3QgeyB0b2tlbiwgaXNBdXRoZW50aWNhdGVkOiBhdXRoZWQgfSA9IGF3YWl0IGdldEF1dGhTdGF0ZSgpO1xuICAgICAgICAgICAgaWYgKCFhdXRoZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIHJlcXVpcmVkLiBQbGVhc2UgbG9nIGluLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluYWxCb2R5ID0gbWV0aG9kICE9PSAnR0VUJyAmJiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCB1cmwgPSBlbmRwb2ludC5zdGFydHNXaXRoKCdodHRwJylcbiAgICAgICAgICAgID8gZW5kcG9pbnRcbiAgICAgICAgICAgIDogYCR7Y29uZmlnLmFwaVVybH0ke2VuZHBvaW50fWA7XG4gICAgICAgIC8vIE5vcm1hbGl6ZSBVUkw6IHJlbW92ZSBkb3VibGUgc2xhc2hlcyBleGNlcHQgYWZ0ZXIgcHJvdG9jb2xcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLyhbXjpdKVxcL1xcLysvZywgJyQxLycpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IGZpbmFsQm9keSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBIYW5kbGUgYXV0aCBlcnJvcnNcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCBnZXRBdXRoU3RhdGUoKTtcbiAgICAgICAgICAgIC8vIFNraXAgcmVmcmVzaCBmb3IgZGVtbyB0b2tlbnMgb3IgaWYgYWxyZWFkeSByZXRyeWluZ1xuICAgICAgICAgICAgaWYgKHRva2VuPy5zdGFydHNXaXRoKCdkZW0tJykgfHwgaXNSZXRyeSkge1xuICAgICAgICAgICAgICAgIG9uQXV0aEVycm9yPy4oKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF1dGhlbnRpY2F0aW9uIGZhaWxlZCAoJHtyZXNwb25zZS5zdGF0dXN9KS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hlZCA9IGF3YWl0IHJlZnJlc2hUb2tlbnMoKTtcbiAgICAgICAgICAgIGlmIChyZWZyZXNoZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyZm9ybVJlcXVlc3QoZW5kcG9pbnQsIG9wdHMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25BdXRoRXJyb3I/LigpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXNzaW9uIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgLy8gSGFuZGxlIEhUTUwgZXJyb3IgcmVzcG9uc2VzIChsaWtlIDQwNCBTaWduYWwgTG9zdClcbiAgICAgICAgICAgIGlmIChlcnJvclRleHQuaW5jbHVkZXMoJzwhRE9DVFlQRSBodG1sPicpIHx8IGVycm9yVGV4dC5pbmNsdWRlcygnPGh0bWwnKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtBUEldIFJlY2VpdmVkIEhUTUwgZXJyb3IgZnJvbSAke3VybH0uIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDbG91ZCBjb25uZWN0aW9uIGludGVycnVwdGVkIChTdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9KS4gUGxlYXNlIGNoZWNrIHlvdXIgQVBJIFVSTC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclRleHQgfHwgYEFQSSBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFpbiBBUEkgcmVxdWVzdCBoYW5kbGVyXG4gICAgICogQXV0b21hdGljYWxseSBwcm94aWVzIHJlcXVlc3RzIHRocm91Z2ggYmFja2dyb3VuZCBzY3JpcHQgaWYgcnVubmluZyBpbiBjb250ZW50IHNjcmlwdFxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QoZW5kcG9pbnQsIG9wdHMgPSB7fSkge1xuICAgICAgICAvLyBDaGVjayBpZiBydW5uaW5nIGluIGNvbnRlbnQgc2NyaXB0XG4gICAgICAgIGNvbnN0IGlzQ29udGVudFNjcmlwdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonIHx8IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpO1xuICAgICAgICBpZiAoaXNDb250ZW50U2NyaXB0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcGlQcm94eVJlcXVlc3QnLFxuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHR5cGVvZiByZXNwb25zZSA9PT0gJ29iamVjdCcgJiYgJ2Vycm9yJyBpbiByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQVBJXSBQcm94eSByZXF1ZXN0IGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlyZWN0IHJlcXVlc3QgKFBvcHVwLCBCYWNrZ3JvdW5kLCBPcHRpb25zKVxuICAgICAgICByZXR1cm4gcGVyZm9ybVJlcXVlc3QoZW5kcG9pbnQsIG9wdHMpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gSFRUUCBNZXRob2QgU2hvcnRjdXRzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldChlbmRwb2ludCwgaGVhZGVycykge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCwgeyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzIH0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBwb3N0KGVuZHBvaW50LCBib2R5LCBoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50LCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5LCBoZWFkZXJzIH0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBwdXQoZW5kcG9pbnQsIGJvZHksIGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQsIHsgbWV0aG9kOiAnUFVUJywgYm9keSwgaGVhZGVycyB9KTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsKGVuZHBvaW50LCBoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50LCB7IG1ldGhvZDogJ0RFTEVURScsIGhlYWRlcnMgfSk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBQbGF0Zm9ybSBBUEkgb3BlcmF0aW9uc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB1c2VyIGluZm8gZnJvbSB0aGUgcGxhdGZvcm0uXG4gICAgICogUmV0dXJucyB1c2VyIGRhdGEgaW5jbHVkaW5nIHN1YnNjcmlwdGlvbiBzdGF0dXMuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9hcGkvdjEvdXNlcicsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVyY2hhc2UgcXVvdGEgdmlhIFBhZGRsZSBjaGVja291dC5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBhZGRRdW90YShhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIHBvc3QoJy9hcGkvdjEvYmlsbGluZy9jaGVja291dCcsIHsgcXVvdGE6IGFtb3VudCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgcXVvdGEgYmFsYW5jZS5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRRdW90YSgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9hcGkvdjEvYmlsbGluZy9xdW90YScsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2Fub25pY2FsIEFJIGNoYXQtY29tcGxldGlvbnMgQVBJLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYXRDb21wbGV0aW9ucyhwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBwb3N0KCcvYXBpL3YxL2NoYXQvY29tcGxldGlvbnMnLCBwYXlsb2FkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgUHJlZmVyIGBjaGF0Q29tcGxldGlvbnMoKWAuXG4gICAgICogUHJvZHVjdC1zcGVjaWZpYyBjaGF0IHJvdXRlcyBhcmUgYSBsZWdhY3kgbWlncmF0aW9uIHN1cmZhY2UuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gcHJvZHVjdENoYXRDb21wbGV0aW9ucyhwcm9kdWN0U2x1ZywgcGF5bG9hZCkge1xuICAgICAgICB3YXJuRGVwcmVjYXRlZFByb2R1Y3RSb3V0ZSgncHJvZHVjdENoYXRDb21wbGV0aW9ucycsIGAvYXBpL3YxL3Byb2R1Y3RzLyR7cHJvZHVjdFNsdWd9L2NoYXQvY29tcGxldGlvbnNgKTtcbiAgICAgICAgcmV0dXJuIHBvc3QoYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vY2hhdC9jb21wbGV0aW9uc2AsIHBheWxvYWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBQcmVmZXIgYHN1YnNjcmliZSgpYC5cbiAgICAgKiBQcm9kdWN0LXNwZWNpZmljIHN1YnNjcmliZSByb3V0ZXMgYXJlIGEgbGVnYWN5IG1pZ3JhdGlvbiBzdXJmYWNlLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHByb2R1Y3RTdWJzY3JpYmUocHJvZHVjdFNsdWcsIHByaWNlSWQpIHtcbiAgICAgICAgd2FybkRlcHJlY2F0ZWRQcm9kdWN0Um91dGUoJ3Byb2R1Y3RTdWJzY3JpYmUnLCBgL2FwaS92MS9wcm9kdWN0cy8ke3Byb2R1Y3RTbHVnfS9zdWJzY3JpYmVgKTtcbiAgICAgICAgcmV0dXJuIHBvc3QoYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vc3Vic2NyaWJlYCwgeyBwcmljZV9pZDogcHJpY2VJZCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgUHJlZmVyIGBnZXRVc2VyKClgLlxuICAgICAqIFByb2R1Y3Qtc3BlY2lmaWMgdXNlciByb3V0ZXMgYXJlIGEgbGVnYWN5IG1pZ3JhdGlvbiBzdXJmYWNlLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RVc2VyKHByb2R1Y3RTbHVnKSB7XG4gICAgICAgIHdhcm5EZXByZWNhdGVkUHJvZHVjdFJvdXRlKCdnZXRQcm9kdWN0VXNlcicsIGAvYXBpL3YxL3Byb2R1Y3RzLyR7cHJvZHVjdFNsdWd9L3VzZXJgKTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vdXNlcmAsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQ29yZVxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBwZXJmb3JtUmVxdWVzdCwgLy8gRGlyZWN0IHJlcXVlc3Qgd2l0aG91dCBwcm94eVxuICAgICAgICBnZXRBdXRoU3RhdGUsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCxcbiAgICAgICAgcmVmcmVzaFRva2VucyxcbiAgICAgICAgLy8gSFRUUCBtZXRob2RzXG4gICAgICAgIGdldCxcbiAgICAgICAgcG9zdCxcbiAgICAgICAgcHV0LFxuICAgICAgICBkZWwsXG4gICAgICAgIC8vIENhbm9uaWNhbCBwbGF0Zm9ybSBvcGVyYXRpb25zXG4gICAgICAgIGdldFVzZXIsXG4gICAgICAgIGFkZFF1b3RhLFxuICAgICAgICBnZXRRdW90YSxcbiAgICAgICAgY2hhdENvbXBsZXRpb25zLFxuICAgICAgICBwcm9kdWN0Q2hhdENvbXBsZXRpb25zLFxuICAgICAgICBwcm9kdWN0U3Vic2NyaWJlLFxuICAgICAgICBnZXRQcm9kdWN0VXNlcixcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBBdXRoZW50aWNhdGlvbiB1dGlsaXRpZXMgZm9yIFdYVCBleHRlbnNpb25zIHRhbGtpbmcgdG8gdGhlIERyYWNvbiBwbGF0Zm9ybS5cbiAqXG4gKiBTdXBwb3J0cyB0d28gYXV0aCBmbG93czpcbiAqIDEuIEVtYWlsIE1hZ2ljIExpbmsgKGRlZmF1bHQpIC0gRGlyZWN0IGVtYWlsL2NvZGUgdmVyaWZpY2F0aW9uXG4gKiAyLiBPQXV0aCAobGVnYWN5KSAtIFJlZGlyZWN0LWJhc2VkIGZsb3cgd2l0aCBjb2RlIGV4Y2hhbmdlXG4gKi9cbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbCBNYWdpYyBMaW5rIEZsb3dcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbWFpbEF1dGhGbG93KG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgc2V0QXV0aCwgcmVzZXRBdXRoLCBhcHBJZCwgZGFzaGJvYXJkUGF0aCA9ICcvZGFzaGJvYXJkL2xhdW5jaCcsIH0gPSBvcHRpb25zO1xuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgYSBtYWdpYyBsaW5rIGNvZGUgZm9yIHRoZSBnaXZlbiBlbWFpbC5cbiAgICAgKiBTZW5kcyBhIDYtZGlnaXQgY29kZSB0byB0aGUgdXNlcidzIGVtYWlsLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RNYWdpY0xpbmsoZW1haWwpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9hcGkvdjEvYXV0aC9yZXF1ZXN0LW1hZ2ljLWxpbmtgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3RvOiBkYXNoYm9hcmRQYXRoLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWFnaWMgbGluayByZXF1ZXN0IGZhaWxlZDogJHtlcnJvcn1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWZXJpZnkgdGhlIDYtZGlnaXQgY29kZSByZWNlaXZlZCB2aWEgZW1haWwuXG4gICAgICogUmV0dXJucyBhY2Nlc3MgdG9rZW4gZGlyZWN0bHkgKG5vIHJlZGlyZWN0KS5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiB2ZXJpZnlDb2RlKGVtYWlsLCBjb2RlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L2FwaS92MS9hdXRoL3ZlcmlmeS1jb2RlYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIGNvZGUgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvZGUgdmVyaWZpY2F0aW9uIGZhaWxlZDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAvLyBGZXRjaCB1c2VyIGluZm9cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmZXRjaFVzZXJJbmZvKGRhdGEuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgIGF3YWl0IHNldEF1dGgoe1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBkYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46ICcnLCAvLyBFbWFpbCBmbG93IGRvZXNuJ3QgdXNlIHJlZnJlc2ggdG9rZW5zXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlciB8fCBudWxsLFxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQXV0aF0gQ29kZSB2ZXJpZmljYXRpb24gZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBGZXRjaCB1c2VyIGluZm8gdXNpbmcgdGhlIGFjY2VzcyB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckluZm8odG9rZW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBpL3YxL2F1dGgvc2Vzc2lvbmAsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyRGF0YS5lbWFpbCB8fCAnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiB1c2VyRGF0YS5wcm9maWxlX25hbWUgfHwgdXNlckRhdGEubmFtZSB8fCAnVXNlcicsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogdXNlckRhdGEuYXZhdGFyX3VybCB8fCBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBdXRoXSBGYWlsZWQgdG8gZmV0Y2ggdXNlciBpbmZvOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIHBsYXRmb3JtIGRhc2hib2FyZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9wZW5EYXNoYm9hcmQoKSB7XG4gICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IGAke2NvbmZpZy5kcmFjb25Vcmx9JHtkYXNoYm9hcmRQYXRofWAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvZ291dCAtIGNsZWFyIHN0b3JlZCBhdXRoXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICBhd2FpdCByZXNldEF1dGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWVzdE1hZ2ljTGluayxcbiAgICAgICAgdmVyaWZ5Q29kZSxcbiAgICAgICAgb3BlbkRhc2hib2FyZCxcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICAvLyBMZWdhY3kgY29tcGF0aWJpbGl0eVxuICAgICAgICBvcGVuTG9naW46ICgpID0+IG9wZW5EYXNoYm9hcmQoKSxcbiAgICAgICAgZXhjaGFuZ2VDb2RlOiBhc3luYyAoKSA9PiBmYWxzZSxcbiAgICAgICAgaGFuZGxlQXV0aENhbGxiYWNrOiBhc3luYyAoKSA9PiAoe1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogJ1VzZSBlbWFpbCBtYWdpYyBsaW5rIGZsb3cgaW5zdGVhZCdcbiAgICAgICAgfSksXG4gICAgfTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9BdXRoIEZsb3cgKExlZ2FjeSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPQXV0aEF1dGhGbG93KG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgc2V0QXV0aCwgcmVzZXRBdXRoLCBhcHBJZCwgcHJvdmlkZXIgPSAnZ29vZ2xlJywgY2FsbGJhY2tQYXRoID0gJ2F1dGgtY2FsbGJhY2suaHRtbCcsIGRhc2hib2FyZFBhdGggPSAnL2Rhc2hib2FyZC9sYXVuY2gnLCB9ID0gb3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxvZ2luIFVSTCBmb3IgT0F1dGhcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRMb2dpblVybCgpIHtcbiAgICAgICAgY29uc3QgcmVkaXJlY3RVcmwgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGNhbGxiYWNrUGF0aCk7XG4gICAgICAgIHJldHVybiBgJHtjb25maWcuZHJhY29uVXJsfS9hcGkvdjEvYXV0aC9sb2dpbi8ke3Byb3ZpZGVyfT9yZWRpcmVjdF91cmk9JHtlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmwpfSZhcHA9JHthcHBJZH1gO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBsb2dpbiBwYWdlIGluIGEgbmV3IHRhYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9wZW5Mb2dpbigpIHtcbiAgICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogZ2V0TG9naW5VcmwoKSB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgcGxhdGZvcm0gZGFzaGJvYXJkXG4gICAgICovXG4gICAgZnVuY3Rpb24gb3BlbkRhc2hib2FyZCgpIHtcbiAgICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogYCR7Y29uZmlnLmRyYWNvblVybH0ke2Rhc2hib2FyZFBhdGh9YCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9nb3V0IC0gY2xlYXIgc3RvcmVkIGF1dGhcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICAgIGF3YWl0IHJlc2V0QXV0aCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeGNoYW5nZSBhdXRob3JpemF0aW9uIGNvZGUgZm9yIHRva2Vuc1xuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGV4Y2hhbmdlQ29kZShjb2RlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L2FwaS92MS9hdXRoL2V4Y2hhbmdlYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29kZSB9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVG9rZW4gZXhjaGFuZ2UgZmFpbGVkOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmZXRjaFVzZXJJbmZvKGRhdGEuc2Vzc2lvbl90b2tlbik7XG4gICAgICAgICAgICBhd2FpdCBzZXRBdXRoKHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogZGF0YS5zZXNzaW9uX3Rva2VuLFxuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogZGF0YS5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb246IG51bGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0F1dGhdIFRva2VuIGV4Y2hhbmdlIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VySW5mbyh0b2tlbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9hcGkvdjEvdXNlcmAsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlckRhdGEuZW1haWwgfHwgJycsXG4gICAgICAgICAgICAgICAgbmFtZTogdXNlckRhdGEubmFtZSB8fCAnVXNlcicsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogdXNlckRhdGEuYXZhdGFyX3VybCB8fCB1c2VyRGF0YS5waWN0dXJlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBdXRoXSBGYWlsZWQgdG8gZmV0Y2ggdXNlciBpbmZvOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgYXV0aCBjYWxsYmFjayBmcm9tIE9BdXRoXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQXV0aENhbGxiYWNrKCkge1xuICAgICAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoaGFzaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBjb25zdCBjb2RlID0gcGFyYW1zLmdldCgnY29kZScpO1xuICAgICAgICBjb25zdCBlcnJvciA9IHBhcmFtcy5nZXQoJ2Vycm9yJyk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgT0F1dGggZXJyb3I6ICR7ZXJyb3J9YCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm8gYXV0aG9yaXphdGlvbiBjb2RlIHJlY2VpdmVkJyB9O1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgZXhjaGFuZ2VDb2RlKGNvZGUpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdFeGNoYW5nZSBmYWlsZWQnIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TG9naW5VcmwsXG4gICAgICAgIG9wZW5Mb2dpbixcbiAgICAgICAgb3BlbkRhc2hib2FyZCxcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICBleGNoYW5nZUNvZGUsXG4gICAgICAgIGhhbmRsZUF1dGhDYWxsYmFjayxcbiAgICAgICAgLy8gRW1haWwgZmxvdyBjb21wYXRpYmlsaXR5XG4gICAgICAgIHJlcXVlc3RNYWdpY0xpbms6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlIE9BdXRoIGZsb3cgaW5zdGVhZCcpO1xuICAgICAgICB9LFxuICAgICAgICB2ZXJpZnlDb2RlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZSBPQXV0aCBmbG93IGluc3RlYWQnKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVW5pZmllZCBBdXRoIEZsb3cgRmFjdG9yeVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUF1dGhGbG93KG9wdGlvbnMpIHtcbiAgICBjb25zdCBmbG93ID0gb3B0aW9ucy5mbG93IHx8ICdlbWFpbCc7XG4gICAgaWYgKGZsb3cgPT09ICdlbWFpbCcpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVtYWlsQXV0aEZsb3cob3B0aW9ucyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY3JlYXRlT0F1dGhBdXRoRmxvdyhvcHRpb25zKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSldUKHRva2VuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgaWYgKCFiYXNlNjRVcmwpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgICAgIGNvbnN0IGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoYmFzZTY0KVxuICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tKV1RdIEZhaWxlZCB0byBkZWNvZGUgdG9rZW46JywgZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Rva2VuRXhwaXJlZCh0b2tlbikge1xuICAgIGNvbnN0IHBheWxvYWQgPSBkZWNvZGVKV1QodG9rZW4pO1xuICAgIGlmICghcGF5bG9hZD8uZXhwKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSA+PSBwYXlsb2FkLmV4cCAqIDEwMDA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckZyb21Ub2tlbih0b2tlbikge1xuICAgIGNvbnN0IHBheWxvYWQgPSBkZWNvZGVKV1QodG9rZW4pO1xuICAgIGlmICghcGF5bG9hZClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHBheWxvYWQuc3ViLFxuICAgICAgICBuYW1lOiBwYXlsb2FkLm5hbWUsXG4gICAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsLFxuICAgICAgICBwaWN0dXJlOiBwYXlsb2FkLnBpY3R1cmUsXG4gICAgfTtcbn1cbi8vIFJlLWV4cG9ydCBzdGFuZGFsb25lIGNhbGxiYWNrIGhhbmRsZXJcbmV4cG9ydCB7IGluaXRBdXRoQ2FsbGJhY2sgfSBmcm9tICcuL2NhbGxiYWNrLmpzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vICNyZWdpb24gc25pcHBldFxuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBnbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWU/LmlkXG4gID8gZ2xvYmFsVGhpcy5icm93c2VyXG4gIDogZ2xvYmFsVGhpcy5jaHJvbWU7XG4vLyAjZW5kcmVnaW9uIHNuaXBwZXRcbiIsImNvbnN0IEVfVElNRU9VVCA9IG5ldyBFcnJvcigndGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBtdXRleCB0byBiZWNvbWUgYXZhaWxhYmxlJyk7XG5jb25zdCBFX0FMUkVBRFlfTE9DS0VEID0gbmV3IEVycm9yKCdtdXRleCBhbHJlYWR5IGxvY2tlZCcpO1xuY29uc3QgRV9DQU5DRUxFRCA9IG5ldyBFcnJvcigncmVxdWVzdCBmb3IgbG9jayBjYW5jZWxlZCcpO1xuXG52YXIgX19hd2FpdGVyJDIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNsYXNzIFNlbWFwaG9yZSB7XG4gICAgY29uc3RydWN0b3IoX3ZhbHVlLCBfY2FuY2VsRXJyb3IgPSBFX0NBTkNFTEVEKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gX3ZhbHVlO1xuICAgICAgICB0aGlzLl9jYW5jZWxFcnJvciA9IF9jYW5jZWxFcnJvcjtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzID0gW107XG4gICAgfVxuICAgIGFjcXVpcmUod2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0geyByZXNvbHZlLCByZWplY3QsIHdlaWdodCwgcHJpb3JpdHkgfTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBmaW5kSW5kZXhGcm9tRW5kKHRoaXMuX3F1ZXVlLCAob3RoZXIpID0+IHByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSAmJiB3ZWlnaHQgPD0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBOZWVkcyBpbW1lZGlhdGUgZGlzcGF0Y2gsIHNraXAgdGhlIHF1ZXVlXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hJdGVtKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcXVldWUuc3BsaWNlKGkgKyAxLCAwLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFja18xKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChjYWxsYmFjaywgd2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBbdmFsdWUsIHJlbGVhc2VdID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvdWxkTG9ja0ltbWVkaWF0ZWx5KHdlaWdodCwgcHJpb3JpdHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdID0gW107XG4gICAgICAgICAgICAgICAgaW5zZXJ0U29ydGVkKHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSwgeyByZXNvbHZlLCBwcmlvcml0eSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzTG9ja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgPD0gMDtcbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hRdWV1ZSgpO1xuICAgIH1cbiAgICByZWxlYXNlKHdlaWdodCA9IDEpIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgKz0gd2VpZ2h0O1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5fcXVldWUuZm9yRWFjaCgoZW50cnkpID0+IGVudHJ5LnJlamVjdCh0aGlzLl9jYW5jZWxFcnJvcikpO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hRdWV1ZSgpIHtcbiAgICAgICAgdGhpcy5fZHJhaW5VbmxvY2tXYWl0ZXJzKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX3F1ZXVlWzBdLndlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hJdGVtKHRoaXMuX3F1ZXVlLnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5VbmxvY2tXYWl0ZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Rpc3BhdGNoSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgLT0gaXRlbS53ZWlnaHQ7XG4gICAgICAgIGl0ZW0ucmVzb2x2ZShbcHJldmlvdXNWYWx1ZSwgdGhpcy5fbmV3UmVsZWFzZXIoaXRlbS53ZWlnaHQpXSk7XG4gICAgfVxuICAgIF9uZXdSZWxlYXNlcih3ZWlnaHQpIHtcbiAgICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIF9kcmFpblVubG9ja1dhaXRlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IHdlaWdodCA9IHRoaXMuX3ZhbHVlOyB3ZWlnaHQgPiAwOyB3ZWlnaHQtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRlcnMgPSB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKCF3YWl0ZXJzKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB3YWl0ZXJzLmZvckVhY2goKHdhaXRlcikgPT4gd2FpdGVyLnJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBxdWV1ZWRQcmlvcml0eSA9IHRoaXMuX3F1ZXVlWzBdLnByaW9yaXR5O1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB3YWl0ZXJzLmZpbmRJbmRleCgod2FpdGVyKSA9PiB3YWl0ZXIucHJpb3JpdHkgPD0gcXVldWVkUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIChpID09PSAtMSA/IHdhaXRlcnMgOiB3YWl0ZXJzLnNwbGljZSgwLCBpKSlcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHdhaXRlciA9PiB3YWl0ZXIucmVzb2x2ZSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvdWxkTG9ja0ltbWVkaWF0ZWx5KHdlaWdodCwgcHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5fcXVldWVbMF0ucHJpb3JpdHkgPCBwcmlvcml0eSkgJiZcbiAgICAgICAgICAgIHdlaWdodCA8PSB0aGlzLl92YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnNlcnRTb3J0ZWQoYSwgdikge1xuICAgIGNvbnN0IGkgPSBmaW5kSW5kZXhGcm9tRW5kKGEsIChvdGhlcikgPT4gdi5wcmlvcml0eSA8PSBvdGhlci5wcmlvcml0eSk7XG4gICAgYS5zcGxpY2UoaSArIDEsIDAsIHYpO1xufVxuZnVuY3Rpb24gZmluZEluZGV4RnJvbUVuZChhLCBwcmVkaWNhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbnZhciBfX2F3YWl0ZXIkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgTXV0ZXgge1xuICAgIGNvbnN0cnVjdG9yKGNhbmNlbEVycm9yKSB7XG4gICAgICAgIHRoaXMuX3NlbWFwaG9yZSA9IG5ldyBTZW1hcGhvcmUoMSwgY2FuY2VsRXJyb3IpO1xuICAgIH1cbiAgICBhY3F1aXJlKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyJDEodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAocHJpb3JpdHkgPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBbLCByZWxlYXNlcl0gPSB5aWVsZCB0aGlzLl9zZW1hcGhvcmUuYWNxdWlyZSgxLCBwcmlvcml0eSk7XG4gICAgICAgICAgICByZXR1cm4gcmVsZWFzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHByaW9yaXR5ID0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLnJ1bkV4Y2x1c2l2ZSgoKSA9PiBjYWxsYmFjaygpLCAxLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIGlzTG9ja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmlzTG9ja2VkKCk7XG4gICAgfVxuICAgIHdhaXRGb3JVbmxvY2socHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUud2FpdEZvclVubG9jaygxLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKSlcbiAgICAgICAgICAgIHRoaXMuX3NlbWFwaG9yZS5yZWxlYXNlKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5jYW5jZWwoKTtcbiAgICB9XG59XG5cbnZhciBfX2F3YWl0ZXIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHdpdGhUaW1lb3V0KHN5bmMsIHRpbWVvdXQsIHRpbWVvdXRFcnJvciA9IEVfVElNRU9VVCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjcXVpcmU6ICh3ZWlnaHRPclByaW9yaXR5LCBwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgbGV0IHdlaWdodDtcbiAgICAgICAgICAgIGlmIChpc1NlbWFwaG9yZShzeW5jKSkge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlaWdodCAhPT0gdW5kZWZpbmVkICYmIHdlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzVGltZW91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpc1RpbWVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGltZW91dEVycm9yKTtcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCAoaXNTZW1hcGhvcmUoc3luYylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3luYy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN5bmMuYWNxdWlyZShwcmlvcml0eSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxlYXNlID0gQXJyYXkuaXNBcnJheSh0aWNrZXQpID8gdGlja2V0WzFdIDogdGlja2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRpY2tldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHdlaWdodCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlbGVhc2UgPSAoKSA9PiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2V0ID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aWNrZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlID0gdGlja2V0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKHRpY2tldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlID0gdGlja2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsZWFzZSh3ZWlnaHQpIHtcbiAgICAgICAgICAgIHN5bmMucmVsZWFzZSh3ZWlnaHQpO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3luYy5jYW5jZWwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2FpdEZvclVubG9jazogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdCh0aW1lb3V0RXJyb3IpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAoaXNTZW1hcGhvcmUoc3luYylcbiAgICAgICAgICAgICAgICAgICAgPyBzeW5jLndhaXRGb3JVbmxvY2sod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgOiBzeW5jLndhaXRGb3JVbmxvY2socHJpb3JpdHkpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBpc0xvY2tlZDogKCkgPT4gc3luYy5pc0xvY2tlZCgpLFxuICAgICAgICBnZXRWYWx1ZTogKCkgPT4gc3luYy5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRWYWx1ZTogKHZhbHVlKSA9PiBzeW5jLnNldFZhbHVlKHZhbHVlKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNTZW1hcGhvcmUoc3luYykge1xuICAgIHJldHVybiBzeW5jLmdldFZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGlzbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZnVuY3Rpb24gdHJ5QWNxdWlyZShzeW5jLCBhbHJlYWR5QWNxdWlyZWRFcnJvciA9IEVfQUxSRUFEWV9MT0NLRUQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiB3aXRoVGltZW91dChzeW5jLCAwLCBhbHJlYWR5QWNxdWlyZWRFcnJvcik7XG59XG5cbmV4cG9ydCB7IEVfQUxSRUFEWV9MT0NLRUQsIEVfQ0FOQ0VMRUQsIEVfVElNRU9VVCwgTXV0ZXgsIFNlbWFwaG9yZSwgdHJ5QWNxdWlyZSwgd2l0aFRpbWVvdXQgfTtcbiIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5leHBvcnQgZnVuY3Rpb24gZGVxdWFsKGZvbywgYmFyKSB7XG5cdHZhciBjdG9yLCBsZW47XG5cdGlmIChmb28gPT09IGJhcikgcmV0dXJuIHRydWU7XG5cblx0aWYgKGZvbyAmJiBiYXIgJiYgKGN0b3I9Zm9vLmNvbnN0cnVjdG9yKSA9PT0gYmFyLmNvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKGN0b3IgPT09IERhdGUpIHJldHVybiBmb28uZ2V0VGltZSgpID09PSBiYXIuZ2V0VGltZSgpO1xuXHRcdGlmIChjdG9yID09PSBSZWdFeHApIHJldHVybiBmb28udG9TdHJpbmcoKSA9PT0gYmFyLnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdGlmICgobGVuPWZvby5sZW5ndGgpID09PSBiYXIubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBkZXF1YWwoZm9vW2xlbl0sIGJhcltsZW5dKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoIWN0b3IgfHwgdHlwZW9mIGZvbyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGxlbiA9IDA7XG5cdFx0XHRmb3IgKGN0b3IgaW4gZm9vKSB7XG5cdFx0XHRcdGlmIChoYXMuY2FsbChmb28sIGN0b3IpICYmICsrbGVuICYmICFoYXMuY2FsbChiYXIsIGN0b3IpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlmICghKGN0b3IgaW4gYmFyKSB8fCAhZGVxdWFsKGZvb1tjdG9yXSwgYmFyW2N0b3JdKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGJhcikubGVuZ3RoID09PSBsZW47XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZvbyAhPT0gZm9vICYmIGJhciAhPT0gYmFyO1xufVxuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJAd3h0LWRldi9icm93c2VyXCI7XG5pbXBvcnQgeyBNdXRleCB9IGZyb20gXCJhc3luYy1tdXRleFwiO1xuaW1wb3J0IHsgZGVxdWFsIH0gZnJvbSBcImRlcXVhbC9saXRlXCI7XG5cbi8vI3JlZ2lvbiBzcmMvaW5kZXgudHNcbi8qKlxuKiBTaW1wbGlmaWVkIHN0b3JhZ2UgQVBJcyB3aXRoIHN1cHBvcnQgZm9yIHZlcnNpb25lZCBmaWVsZHMsIHNuYXBzaG90cywgbWV0YWRhdGEsIGFuZCBpdGVtIGRlZmluaXRpb25zLlxuKlxuKiBTZWUgW3RoZSBndWlkZV0oaHR0cHM6Ly93eHQuZGV2L3N0b3JhZ2UuaHRtbCkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4qIEBtb2R1bGUgQHd4dC1kZXYvc3RvcmFnZVxuKi9cbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVTdG9yYWdlKCk7XG5mdW5jdGlvbiBjcmVhdGVTdG9yYWdlKCkge1xuXHRjb25zdCBkcml2ZXJzID0ge1xuXHRcdGxvY2FsOiBjcmVhdGVEcml2ZXIoXCJsb2NhbFwiKSxcblx0XHRzZXNzaW9uOiBjcmVhdGVEcml2ZXIoXCJzZXNzaW9uXCIpLFxuXHRcdHN5bmM6IGNyZWF0ZURyaXZlcihcInN5bmNcIiksXG5cdFx0bWFuYWdlZDogY3JlYXRlRHJpdmVyKFwibWFuYWdlZFwiKVxuXHR9O1xuXHRjb25zdCBnZXREcml2ZXIgPSAoYXJlYSkgPT4ge1xuXHRcdGNvbnN0IGRyaXZlciA9IGRyaXZlcnNbYXJlYV07XG5cdFx0aWYgKGRyaXZlciA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBhcmVhTmFtZXMgPSBPYmplY3Qua2V5cyhkcml2ZXJzKS5qb2luKFwiLCBcIik7XG5cdFx0XHR0aHJvdyBFcnJvcihgSW52YWxpZCBhcmVhIFwiJHthcmVhfVwiLiBPcHRpb25zOiAke2FyZWFOYW1lc31gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRyaXZlcjtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZUtleSA9IChrZXkpID0+IHtcblx0XHRjb25zdCBkZWxpbWluYXRvckluZGV4ID0ga2V5LmluZGV4T2YoXCI6XCIpO1xuXHRcdGNvbnN0IGRyaXZlckFyZWEgPSBrZXkuc3Vic3RyaW5nKDAsIGRlbGltaW5hdG9ySW5kZXgpO1xuXHRcdGNvbnN0IGRyaXZlcktleSA9IGtleS5zdWJzdHJpbmcoZGVsaW1pbmF0b3JJbmRleCArIDEpO1xuXHRcdGlmIChkcml2ZXJLZXkgPT0gbnVsbCkgdGhyb3cgRXJyb3IoYFN0b3JhZ2Uga2V5IHNob3VsZCBiZSBpbiB0aGUgZm9ybSBvZiBcImFyZWE6a2V5XCIsIGJ1dCByZWNlaXZlZCBcIiR7a2V5fVwiYCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRyaXZlckFyZWEsXG5cdFx0XHRkcml2ZXJLZXksXG5cdFx0XHRkcml2ZXI6IGdldERyaXZlcihkcml2ZXJBcmVhKVxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGdldE1ldGFLZXkgPSAoa2V5KSA9PiBrZXkgKyBcIiRcIjtcblx0Y29uc3QgbWVyZ2VNZXRhID0gKG9sZE1ldGEsIG5ld01ldGEpID0+IHtcblx0XHRjb25zdCBuZXdGaWVsZHMgPSB7IC4uLm9sZE1ldGEgfTtcblx0XHRPYmplY3QuZW50cmllcyhuZXdNZXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblx0XHRcdGlmICh2YWx1ZSA9PSBudWxsKSBkZWxldGUgbmV3RmllbGRzW2tleV07XG5cdFx0XHRlbHNlIG5ld0ZpZWxkc1trZXldID0gdmFsdWU7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIG5ld0ZpZWxkcztcblx0fTtcblx0Y29uc3QgZ2V0VmFsdWVPckZhbGxiYWNrID0gKHZhbHVlLCBmYWxsYmFjaykgPT4gdmFsdWUgPz8gZmFsbGJhY2sgPz8gbnVsbDtcblx0Y29uc3QgZ2V0TWV0YVZhbHVlID0gKHByb3BlcnRpZXMpID0+IHR5cGVvZiBwcm9wZXJ0aWVzID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IHt9O1xuXHRjb25zdCBnZXRJdGVtID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKSA9PiB7XG5cdFx0cmV0dXJuIGdldFZhbHVlT3JGYWxsYmFjayhhd2FpdCBkcml2ZXIuZ2V0SXRlbShkcml2ZXJLZXkpLCBvcHRzPy5mYWxsYmFjayA/PyBvcHRzPy5kZWZhdWx0VmFsdWUpO1xuXHR9O1xuXHRjb25zdCBnZXRNZXRhID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5KSA9PiB7XG5cdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoZHJpdmVyS2V5KTtcblx0XHRyZXR1cm4gZ2V0TWV0YVZhbHVlKGF3YWl0IGRyaXZlci5nZXRJdGVtKG1ldGFLZXkpKTtcblx0fTtcblx0Y29uc3Qgc2V0SXRlbSA9IGFzeW5jIChkcml2ZXIsIGRyaXZlcktleSwgdmFsdWUpID0+IHtcblx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbShkcml2ZXJLZXksIHZhbHVlID8/IG51bGwpO1xuXHR9O1xuXHRjb25zdCBzZXRNZXRhID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoZHJpdmVyS2V5KTtcblx0XHRjb25zdCBleGlzdGluZ0ZpZWxkcyA9IGdldE1ldGFWYWx1ZShhd2FpdCBkcml2ZXIuZ2V0SXRlbShtZXRhS2V5KSk7XG5cdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW0obWV0YUtleSwgbWVyZ2VNZXRhKGV4aXN0aW5nRmllbGRzLCBwcm9wZXJ0aWVzKSk7XG5cdH07XG5cdGNvbnN0IHJlbW92ZUl0ZW0gPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpID0+IHtcblx0XHRhd2FpdCBkcml2ZXIucmVtb3ZlSXRlbShkcml2ZXJLZXkpO1xuXHRcdGlmIChvcHRzPy5yZW1vdmVNZXRhKSB7XG5cdFx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdFx0YXdhaXQgZHJpdmVyLnJlbW92ZUl0ZW0obWV0YUtleSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZW1vdmVNZXRhID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoZHJpdmVyS2V5KTtcblx0XHRpZiAocHJvcGVydGllcyA9PSBudWxsKSBhd2FpdCBkcml2ZXIucmVtb3ZlSXRlbShtZXRhS2V5KTtcblx0XHRlbHNlIHtcblx0XHRcdGNvbnN0IG5ld0ZpZWxkcyA9IGdldE1ldGFWYWx1ZShhd2FpdCBkcml2ZXIuZ2V0SXRlbShtZXRhS2V5KSk7XG5cdFx0XHRbcHJvcGVydGllc10uZmxhdCgpLmZvckVhY2goKGZpZWxkKSA9PiBkZWxldGUgbmV3RmllbGRzW2ZpZWxkXSk7XG5cdFx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbShtZXRhS2V5LCBuZXdGaWVsZHMpO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgd2F0Y2ggPSAoZHJpdmVyLCBkcml2ZXJLZXksIGNiKSA9PiBkcml2ZXIud2F0Y2goZHJpdmVyS2V5LCBjYik7XG5cdHJldHVybiB7XG5cdFx0Z2V0SXRlbTogYXN5bmMgKGtleSwgb3B0cykgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0cmV0dXJuIGF3YWl0IGdldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpO1xuXHRcdH0sXG5cdFx0Z2V0SXRlbXM6IGFzeW5jIChrZXlzKSA9PiB7XG5cdFx0XHRjb25zdCBhcmVhVG9LZXlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0Y29uc3Qga2V5VG9PcHRzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdGNvbnN0IG9yZGVyZWRLZXlzID0gW107XG5cdFx0XHRrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRsZXQga2V5U3RyO1xuXHRcdFx0XHRsZXQgb3B0cztcblx0XHRcdFx0aWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIGtleVN0ciA9IGtleTtcblx0XHRcdFx0ZWxzZSBpZiAoXCJnZXRWYWx1ZVwiIGluIGtleSkge1xuXHRcdFx0XHRcdGtleVN0ciA9IGtleS5rZXk7XG5cdFx0XHRcdFx0b3B0cyA9IHsgZmFsbGJhY2s6IGtleS5mYWxsYmFjayB9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGtleVN0ciA9IGtleS5rZXk7XG5cdFx0XHRcdFx0b3B0cyA9IGtleS5vcHRpb25zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9yZGVyZWRLZXlzLnB1c2goa2V5U3RyKTtcblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5U3RyKTtcblx0XHRcdFx0Y29uc3QgYXJlYUtleXMgPSBhcmVhVG9LZXlNYXAuZ2V0KGRyaXZlckFyZWEpID8/IFtdO1xuXHRcdFx0XHRhcmVhVG9LZXlNYXAuc2V0KGRyaXZlckFyZWEsIGFyZWFLZXlzLmNvbmNhdChkcml2ZXJLZXkpKTtcblx0XHRcdFx0a2V5VG9PcHRzTWFwLnNldChrZXlTdHIsIG9wdHMpO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCByZXN1bHRzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oYXJlYVRvS2V5TWFwLmVudHJpZXMoKSkubWFwKGFzeW5jIChbZHJpdmVyQXJlYSwga2V5c10pID0+IHtcblx0XHRcdFx0KGF3YWl0IGRyaXZlcnNbZHJpdmVyQXJlYV0uZ2V0SXRlbXMoa2V5cykpLmZvckVhY2goKGRyaXZlclJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGAke2RyaXZlckFyZWF9OiR7ZHJpdmVyUmVzdWx0LmtleX1gO1xuXHRcdFx0XHRcdGNvbnN0IG9wdHMgPSBrZXlUb09wdHNNYXAuZ2V0KGtleSk7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRWYWx1ZU9yRmFsbGJhY2soZHJpdmVyUmVzdWx0LnZhbHVlLCBvcHRzPy5mYWxsYmFjayA/PyBvcHRzPy5kZWZhdWx0VmFsdWUpO1xuXHRcdFx0XHRcdHJlc3VsdHNNYXAuc2V0KGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pKTtcblx0XHRcdHJldHVybiBvcmRlcmVkS2V5cy5tYXAoKGtleSkgPT4gKHtcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZTogcmVzdWx0c01hcC5nZXQoa2V5KVxuXHRcdFx0fSkpO1xuXHRcdH0sXG5cdFx0Z2V0TWV0YTogYXN5bmMgKGtleSkgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0cmV0dXJuIGF3YWl0IGdldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXkpO1xuXHRcdH0sXG5cdFx0Z2V0TWV0YXM6IGFzeW5jIChhcmdzKSA9PiB7XG5cdFx0XHRjb25zdCBrZXlzID0gYXJncy5tYXAoKGFyZykgPT4ge1xuXHRcdFx0XHRjb25zdCBrZXkgPSB0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiID8gYXJnIDogYXJnLmtleTtcblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0ZHJpdmVyQXJlYSxcblx0XHRcdFx0XHRkcml2ZXJLZXksXG5cdFx0XHRcdFx0ZHJpdmVyTWV0YUtleTogZ2V0TWV0YUtleShkcml2ZXJLZXkpXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGFyZWFUb0RyaXZlck1ldGFLZXlzTWFwID0ga2V5cy5yZWR1Y2UoKG1hcCwga2V5KSA9PiB7XG5cdFx0XHRcdG1hcFtrZXkuZHJpdmVyQXJlYV0gPz89IFtdO1xuXHRcdFx0XHRtYXBba2V5LmRyaXZlckFyZWFdLnB1c2goa2V5KTtcblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH0sIHt9KTtcblx0XHRcdGNvbnN0IHJlc3VsdHNNYXAgPSB7fTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5lbnRyaWVzKGFyZWFUb0RyaXZlck1ldGFLZXlzTWFwKS5tYXAoYXN5bmMgKFthcmVhLCBrZXlzXSkgPT4ge1xuXHRcdFx0XHRjb25zdCBhcmVhUmVzID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldChrZXlzLm1hcCgoa2V5KSA9PiBrZXkuZHJpdmVyTWV0YUtleSkpO1xuXHRcdFx0XHRrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdHNNYXBba2V5LmtleV0gPSBhcmVhUmVzW2tleS5kcml2ZXJNZXRhS2V5XSA/PyB7fTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KSk7XG5cdFx0XHRyZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4gKHtcblx0XHRcdFx0a2V5OiBrZXkua2V5LFxuXHRcdFx0XHRtZXRhOiByZXN1bHRzTWFwW2tleS5rZXldXG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRzZXRJdGVtOiBhc3luYyAoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0YXdhaXQgc2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgdmFsdWUpO1xuXHRcdH0sXG5cdFx0c2V0SXRlbXM6IGFzeW5jIChpdGVtcykgPT4ge1xuXHRcdFx0Y29uc3QgYXJlYVRvS2V5VmFsdWVNYXAgPSB7fTtcblx0XHRcdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoXCJrZXlcIiBpbiBpdGVtID8gaXRlbS5rZXkgOiBpdGVtLml0ZW0ua2V5KTtcblx0XHRcdFx0YXJlYVRvS2V5VmFsdWVNYXBbZHJpdmVyQXJlYV0gPz89IFtdO1xuXHRcdFx0XHRhcmVhVG9LZXlWYWx1ZU1hcFtkcml2ZXJBcmVhXS5wdXNoKHtcblx0XHRcdFx0XHRrZXk6IGRyaXZlcktleSxcblx0XHRcdFx0XHR2YWx1ZTogaXRlbS52YWx1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmVudHJpZXMoYXJlYVRvS2V5VmFsdWVNYXApLm1hcChhc3luYyAoW2RyaXZlckFyZWEsIHZhbHVlc10pID0+IHtcblx0XHRcdFx0YXdhaXQgZ2V0RHJpdmVyKGRyaXZlckFyZWEpLnNldEl0ZW1zKHZhbHVlcyk7XG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRzZXRNZXRhOiBhc3luYyAoa2V5LCBwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRhd2FpdCBzZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKTtcblx0XHR9LFxuXHRcdHNldE1ldGFzOiBhc3luYyAoaXRlbXMpID0+IHtcblx0XHRcdGNvbnN0IGFyZWFUb01ldGFVcGRhdGVzTWFwID0ge307XG5cdFx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgZHJpdmVyQXJlYSwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KFwia2V5XCIgaW4gaXRlbSA/IGl0ZW0ua2V5IDogaXRlbS5pdGVtLmtleSk7XG5cdFx0XHRcdGFyZWFUb01ldGFVcGRhdGVzTWFwW2RyaXZlckFyZWFdID8/PSBbXTtcblx0XHRcdFx0YXJlYVRvTWV0YVVwZGF0ZXNNYXBbZHJpdmVyQXJlYV0ucHVzaCh7XG5cdFx0XHRcdFx0a2V5OiBkcml2ZXJLZXksXG5cdFx0XHRcdFx0cHJvcGVydGllczogaXRlbS5tZXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChPYmplY3QuZW50cmllcyhhcmVhVG9NZXRhVXBkYXRlc01hcCkubWFwKGFzeW5jIChbc3RvcmFnZUFyZWEsIHVwZGF0ZXNdKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRyaXZlciA9IGdldERyaXZlcihzdG9yYWdlQXJlYSk7XG5cdFx0XHRcdGNvbnN0IG1ldGFLZXlzID0gdXBkYXRlcy5tYXAoKHsga2V5IH0pID0+IGdldE1ldGFLZXkoa2V5KSk7XG5cdFx0XHRcdGNvbnN0IGV4aXN0aW5nTWV0YXMgPSBhd2FpdCBkcml2ZXIuZ2V0SXRlbXMobWV0YUtleXMpO1xuXHRcdFx0XHRjb25zdCBleGlzdGluZ01ldGFNYXAgPSBPYmplY3QuZnJvbUVudHJpZXMoZXhpc3RpbmdNZXRhcy5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBba2V5LCBnZXRNZXRhVmFsdWUodmFsdWUpXSkpO1xuXHRcdFx0XHRjb25zdCBtZXRhVXBkYXRlcyA9IHVwZGF0ZXMubWFwKCh7IGtleSwgcHJvcGVydGllcyB9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoa2V5KTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0a2V5OiBtZXRhS2V5LFxuXHRcdFx0XHRcdFx0dmFsdWU6IG1lcmdlTWV0YShleGlzdGluZ01ldGFNYXBbbWV0YUtleV0gPz8ge30sIHByb3BlcnRpZXMpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtcyhtZXRhVXBkYXRlcyk7XG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRyZW1vdmVJdGVtOiBhc3luYyAoa2V5LCBvcHRzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRhd2FpdCByZW1vdmVJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKTtcblx0XHR9LFxuXHRcdHJlbW92ZUl0ZW1zOiBhc3luYyAoa2V5cykgPT4ge1xuXHRcdFx0Y29uc3QgYXJlYVRvS2V5c01hcCA9IHt9O1xuXHRcdFx0a2V5cy5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdFx0bGV0IGtleVN0cjtcblx0XHRcdFx0bGV0IG9wdHM7XG5cdFx0XHRcdGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSBrZXlTdHIgPSBrZXk7XG5cdFx0XHRcdGVsc2UgaWYgKFwiZ2V0VmFsdWVcIiBpbiBrZXkpIGtleVN0ciA9IGtleS5rZXk7XG5cdFx0XHRcdGVsc2UgaWYgKFwiaXRlbVwiIGluIGtleSkge1xuXHRcdFx0XHRcdGtleVN0ciA9IGtleS5pdGVtLmtleTtcblx0XHRcdFx0XHRvcHRzID0ga2V5Lm9wdGlvbnM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0a2V5U3RyID0ga2V5LmtleTtcblx0XHRcdFx0XHRvcHRzID0ga2V5Lm9wdGlvbnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5U3RyKTtcblx0XHRcdFx0YXJlYVRvS2V5c01hcFtkcml2ZXJBcmVhXSA/Pz0gW107XG5cdFx0XHRcdGFyZWFUb0tleXNNYXBbZHJpdmVyQXJlYV0ucHVzaChkcml2ZXJLZXkpO1xuXHRcdFx0XHRpZiAob3B0cz8ucmVtb3ZlTWV0YSkgYXJlYVRvS2V5c01hcFtkcml2ZXJBcmVhXS5wdXNoKGdldE1ldGFLZXkoZHJpdmVyS2V5KSk7XG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5lbnRyaWVzKGFyZWFUb0tleXNNYXApLm1hcChhc3luYyAoW2RyaXZlckFyZWEsIGtleXNdKSA9PiB7XG5cdFx0XHRcdGF3YWl0IGdldERyaXZlcihkcml2ZXJBcmVhKS5yZW1vdmVJdGVtcyhrZXlzKTtcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdGNsZWFyOiBhc3luYyAoYmFzZSkgPT4ge1xuXHRcdFx0YXdhaXQgZ2V0RHJpdmVyKGJhc2UpLmNsZWFyKCk7XG5cdFx0fSxcblx0XHRyZW1vdmVNZXRhOiBhc3luYyAoa2V5LCBwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRhd2FpdCByZW1vdmVNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKTtcblx0XHR9LFxuXHRcdHNuYXBzaG90OiBhc3luYyAoYmFzZSwgb3B0cykgPT4ge1xuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldERyaXZlcihiYXNlKS5zbmFwc2hvdCgpO1xuXHRcdFx0b3B0cz8uZXhjbHVkZUtleXM/LmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRkZWxldGUgZGF0YVtrZXldO1xuXHRcdFx0XHRkZWxldGUgZGF0YVtnZXRNZXRhS2V5KGtleSldO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9LFxuXHRcdHJlc3RvcmVTbmFwc2hvdDogYXN5bmMgKGJhc2UsIGRhdGEpID0+IHtcblx0XHRcdGF3YWl0IGdldERyaXZlcihiYXNlKS5yZXN0b3JlU25hcHNob3QoZGF0YSk7XG5cdFx0fSxcblx0XHR3YXRjaDogKGtleSwgY2IpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdHJldHVybiB3YXRjaChkcml2ZXIsIGRyaXZlcktleSwgY2IpO1xuXHRcdH0sXG5cdFx0dW53YXRjaCgpIHtcblx0XHRcdE9iamVjdC52YWx1ZXMoZHJpdmVycykuZm9yRWFjaCgoZHJpdmVyKSA9PiB7XG5cdFx0XHRcdGRyaXZlci51bndhdGNoKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGRlZmluZUl0ZW06IChrZXksIG9wdHMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGNvbnN0IHsgdmVyc2lvbjogdGFyZ2V0VmVyc2lvbiA9IDEsIG1pZ3JhdGlvbnMgPSB7fSwgb25NaWdyYXRpb25Db21wbGV0ZSwgZGVidWcgPSBmYWxzZSB9ID0gb3B0cyA/PyB7fTtcblx0XHRcdGlmICh0YXJnZXRWZXJzaW9uIDwgMSkgdGhyb3cgRXJyb3IoXCJTdG9yYWdlIGl0ZW0gdmVyc2lvbiBjYW5ub3QgYmUgbGVzcyB0aGFuIDEuIEluaXRpYWwgdmVyc2lvbnMgc2hvdWxkIGJlIHNldCB0byAxLCBub3QgMC5cIik7XG5cdFx0XHRsZXQgbmVlZHNWZXJzaW9uU2V0ID0gZmFsc2U7XG5cdFx0XHRjb25zdCBtaWdyYXRlID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBkcml2ZXJNZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdFx0XHRjb25zdCBbeyB2YWx1ZSB9LCB7IHZhbHVlOiBtZXRhIH1dID0gYXdhaXQgZHJpdmVyLmdldEl0ZW1zKFtkcml2ZXJLZXksIGRyaXZlck1ldGFLZXldKTtcblx0XHRcdFx0bmVlZHNWZXJzaW9uU2V0ID0gdmFsdWUgPT0gbnVsbCAmJiBtZXRhPy52ID09IG51bGwgJiYgISF0YXJnZXRWZXJzaW9uO1xuXHRcdFx0XHRpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VmVyc2lvbiA9IG1ldGE/LnYgPz8gMTtcblx0XHRcdFx0aWYgKGN1cnJlbnRWZXJzaW9uID4gdGFyZ2V0VmVyc2lvbikgdGhyb3cgRXJyb3IoYFZlcnNpb24gZG93bmdyYWRlIGRldGVjdGVkICh2JHtjdXJyZW50VmVyc2lvbn0gLT4gdiR7dGFyZ2V0VmVyc2lvbn0pIGZvciBcIiR7a2V5fVwiYCk7XG5cdFx0XHRcdGlmIChjdXJyZW50VmVyc2lvbiA9PT0gdGFyZ2V0VmVyc2lvbikgcmV0dXJuO1xuXHRcdFx0XHRpZiAoZGVidWcpIGNvbnNvbGUuZGVidWcoYFtAd3h0LWRldi9zdG9yYWdlXSBSdW5uaW5nIHN0b3JhZ2UgbWlncmF0aW9uIGZvciAke2tleX06IHYke2N1cnJlbnRWZXJzaW9ufSAtPiB2JHt0YXJnZXRWZXJzaW9ufWApO1xuXHRcdFx0XHRjb25zdCBtaWdyYXRpb25zVG9SdW4gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0YXJnZXRWZXJzaW9uIC0gY3VycmVudFZlcnNpb24gfSwgKF8sIGkpID0+IGN1cnJlbnRWZXJzaW9uICsgaSArIDEpO1xuXHRcdFx0XHRsZXQgbWlncmF0ZWRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1pZ3JhdGVUb1ZlcnNpb24gb2YgbWlncmF0aW9uc1RvUnVuKSB0cnkge1xuXHRcdFx0XHRcdG1pZ3JhdGVkVmFsdWUgPSBhd2FpdCBtaWdyYXRpb25zPy5bbWlncmF0ZVRvVmVyc2lvbl0/LihtaWdyYXRlZFZhbHVlKSA/PyBtaWdyYXRlZFZhbHVlO1xuXHRcdFx0XHRcdGlmIChkZWJ1ZykgY29uc29sZS5kZWJ1ZyhgW0B3eHQtZGV2L3N0b3JhZ2VdIFN0b3JhZ2UgbWlncmF0aW9uIHByb2Nlc3NlZCBmb3IgdmVyc2lvbjogdiR7bWlncmF0ZVRvVmVyc2lvbn1gKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE1pZ3JhdGlvbkVycm9yKGtleSwgbWlncmF0ZVRvVmVyc2lvbiwgeyBjYXVzZTogZXJyIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtcyhbe1xuXHRcdFx0XHRcdGtleTogZHJpdmVyS2V5LFxuXHRcdFx0XHRcdHZhbHVlOiBtaWdyYXRlZFZhbHVlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRrZXk6IGRyaXZlck1ldGFLZXksXG5cdFx0XHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0XHRcdC4uLm1ldGEsXG5cdFx0XHRcdFx0XHR2OiB0YXJnZXRWZXJzaW9uXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XSk7XG5cdFx0XHRcdGlmIChkZWJ1ZykgY29uc29sZS5kZWJ1ZyhgW0B3eHQtZGV2L3N0b3JhZ2VdIFN0b3JhZ2UgbWlncmF0aW9uIGNvbXBsZXRlZCBmb3IgJHtrZXl9IHYke3RhcmdldFZlcnNpb259YCwgeyBtaWdyYXRlZFZhbHVlIH0pO1xuXHRcdFx0XHRvbk1pZ3JhdGlvbkNvbXBsZXRlPy4obWlncmF0ZWRWYWx1ZSwgdGFyZ2V0VmVyc2lvbik7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbWlncmF0aW9uc0RvbmUgPSBvcHRzPy5taWdyYXRpb25zID09IG51bGwgPyBQcm9taXNlLnJlc29sdmUoKSA6IG1pZ3JhdGUoKS5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtAd3h0LWRldi9zdG9yYWdlXSBNaWdyYXRpb24gZmFpbGVkIGZvciAke2tleX1gLCBlcnIpO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBpbml0TXV0ZXggPSBuZXcgTXV0ZXgoKTtcblx0XHRcdGNvbnN0IGdldEZhbGxiYWNrID0gKCkgPT4gb3B0cz8uZmFsbGJhY2sgPz8gb3B0cz8uZGVmYXVsdFZhbHVlID8/IG51bGw7XG5cdFx0XHRjb25zdCBnZXRPckluaXRWYWx1ZSA9ICgpID0+IGluaXRNdXRleC5ydW5FeGNsdXNpdmUoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF3YWl0IGRyaXZlci5nZXRJdGVtKGRyaXZlcktleSk7XG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsIHx8IG9wdHM/LmluaXQgPT0gbnVsbCkgcmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRjb25zdCBuZXdWYWx1ZSA9IGF3YWl0IG9wdHMuaW5pdCgpO1xuXHRcdFx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbShkcml2ZXJLZXksIG5ld1ZhbHVlKTtcblx0XHRcdFx0aWYgKHZhbHVlID09IG51bGwgJiYgdGFyZ2V0VmVyc2lvbiA+IDEpIGF3YWl0IHNldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHsgdjogdGFyZ2V0VmVyc2lvbiB9KTtcblx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0XHRtaWdyYXRpb25zRG9uZS50aGVuKGdldE9ySW5pdFZhbHVlKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGtleSxcblx0XHRcdFx0Z2V0IGRlZmF1bHRWYWx1ZSgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZ2V0RmFsbGJhY2soKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0IGZhbGxiYWNrKCkge1xuXHRcdFx0XHRcdHJldHVybiBnZXRGYWxsYmFjaygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRWYWx1ZTogYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdGlmIChvcHRzPy5pbml0KSByZXR1cm4gYXdhaXQgZ2V0T3JJbml0VmFsdWUoKTtcblx0XHRcdFx0XHRlbHNlIHJldHVybiBhd2FpdCBnZXRJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0TWV0YTogYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdHJldHVybiBhd2FpdCBnZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0VmFsdWU6IGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdGlmIChuZWVkc1ZlcnNpb25TZXQpIHtcblx0XHRcdFx0XHRcdG5lZWRzVmVyc2lvblNldCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW3NldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIHZhbHVlKSwgc2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSwgeyB2OiB0YXJnZXRWZXJzaW9uIH0pXSk7XG5cdFx0XHRcdFx0fSBlbHNlIGF3YWl0IHNldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIHZhbHVlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0TWV0YTogYXN5bmMgKHByb3BlcnRpZXMpID0+IHtcblx0XHRcdFx0XHRhd2FpdCBtaWdyYXRpb25zRG9uZTtcblx0XHRcdFx0XHRyZXR1cm4gYXdhaXQgc2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSwgcHJvcGVydGllcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZVZhbHVlOiBhc3luYyAob3B0cykgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdHJldHVybiBhd2FpdCByZW1vdmVJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVtb3ZlTWV0YTogYXN5bmMgKHByb3BlcnRpZXMpID0+IHtcblx0XHRcdFx0XHRhd2FpdCBtaWdyYXRpb25zRG9uZTtcblx0XHRcdFx0XHRyZXR1cm4gYXdhaXQgcmVtb3ZlTWV0YShkcml2ZXIsIGRyaXZlcktleSwgcHJvcGVydGllcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdhdGNoOiAoY2IpID0+IHdhdGNoKGRyaXZlciwgZHJpdmVyS2V5LCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBjYihuZXdWYWx1ZSA/PyBnZXRGYWxsYmFjaygpLCBvbGRWYWx1ZSA/PyBnZXRGYWxsYmFjaygpKSksXG5cdFx0XHRcdG1pZ3JhdGVcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuZnVuY3Rpb24gY3JlYXRlRHJpdmVyKHN0b3JhZ2VBcmVhKSB7XG5cdGNvbnN0IGdldFN0b3JhZ2VBcmVhID0gKCkgPT4ge1xuXHRcdGlmIChicm93c2VyLnJ1bnRpbWUgPT0gbnVsbCkgdGhyb3cgRXJyb3IoYCd3eHQvc3RvcmFnZScgbXVzdCBiZSBsb2FkZWQgaW4gYSB3ZWIgZXh0ZW5zaW9uIGVudmlyb25tZW50XG5cbiAtIElmIHRocm93biBkdXJpbmcgYSBidWlsZCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93eHQtZGV2L3d4dC9pc3N1ZXMvMzcxXG4gLSBJZiB0aHJvd24gZHVyaW5nIHRlc3RzLCBtb2NrICd3eHQvYnJvd3NlcicgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93eHQuZGV2L2d1aWRlL2dvLWZ1cnRoZXIvdGVzdGluZy5odG1sXG5gKTtcblx0XHRpZiAoYnJvd3Nlci5zdG9yYWdlID09IG51bGwpIHRocm93IEVycm9yKFwiWW91IG11c3QgYWRkIHRoZSAnc3RvcmFnZScgcGVybWlzc2lvbiB0byB5b3VyIG1hbmlmZXN0IHRvIHVzZSAnd3h0L3N0b3JhZ2UnXCIpO1xuXHRcdGNvbnN0IGFyZWEgPSBicm93c2VyLnN0b3JhZ2Vbc3RvcmFnZUFyZWFdO1xuXHRcdGlmIChhcmVhID09IG51bGwpIHRocm93IEVycm9yKGBcImJyb3dzZXIuc3RvcmFnZS4ke3N0b3JhZ2VBcmVhfVwiIGlzIHVuZGVmaW5lZGApO1xuXHRcdHJldHVybiBhcmVhO1xuXHR9O1xuXHRjb25zdCB3YXRjaExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdHJldHVybiB7XG5cdFx0Z2V0SXRlbTogYXN5bmMgKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIChhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLmdldChrZXkpKVtrZXldO1xuXHRcdH0sXG5cdFx0Z2V0SXRlbXM6IGFzeW5jIChrZXlzKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLmdldChrZXlzKTtcblx0XHRcdHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiAoe1xuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlOiByZXN1bHRba2V5XSA/PyBudWxsXG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRzZXRJdGVtOiBhc3luYyAoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpIGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkucmVtb3ZlKGtleSk7XG5cdFx0XHRlbHNlIGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuc2V0KHsgW2tleV06IHZhbHVlIH0pO1xuXHRcdH0sXG5cdFx0c2V0SXRlbXM6IGFzeW5jICh2YWx1ZXMpID0+IHtcblx0XHRcdGNvbnN0IG1hcCA9IHZhbHVlcy5yZWR1Y2UoKG1hcCwgeyBrZXksIHZhbHVlIH0pID0+IHtcblx0XHRcdFx0bWFwW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH0sIHt9KTtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuc2V0KG1hcCk7XG5cdFx0fSxcblx0XHRyZW1vdmVJdGVtOiBhc3luYyAoa2V5KSA9PiB7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnJlbW92ZShrZXkpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSXRlbXM6IGFzeW5jIChrZXlzKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnJlbW92ZShrZXlzKTtcblx0XHR9LFxuXHRcdGNsZWFyOiBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLmNsZWFyKCk7XG5cdFx0fSxcblx0XHRzbmFwc2hvdDogYXN5bmMgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuZ2V0KCk7XG5cdFx0fSxcblx0XHRyZXN0b3JlU25hcHNob3Q6IGFzeW5jIChkYXRhKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnNldChkYXRhKTtcblx0XHR9LFxuXHRcdHdhdGNoKGtleSwgY2IpIHtcblx0XHRcdGNvbnN0IGxpc3RlbmVyID0gKGNoYW5nZXMpID0+IHtcblx0XHRcdFx0Y29uc3QgY2hhbmdlID0gY2hhbmdlc1trZXldO1xuXHRcdFx0XHRpZiAoY2hhbmdlID09IG51bGwgfHwgZGVxdWFsKGNoYW5nZS5uZXdWYWx1ZSwgY2hhbmdlLm9sZFZhbHVlKSkgcmV0dXJuO1xuXHRcdFx0XHRjYihjaGFuZ2UubmV3VmFsdWUgPz8gbnVsbCwgY2hhbmdlLm9sZFZhbHVlID8/IG51bGwpO1xuXHRcdFx0fTtcblx0XHRcdGdldFN0b3JhZ2VBcmVhKCkub25DaGFuZ2VkLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdHdhdGNoTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRnZXRTdG9yYWdlQXJlYSgpLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG5cdFx0XHRcdHdhdGNoTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0dW53YXRjaCgpIHtcblx0XHRcdHdhdGNoTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRcdGdldFN0b3JhZ2VBcmVhKCkub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdH0pO1xuXHRcdFx0d2F0Y2hMaXN0ZW5lcnMuY2xlYXIoKTtcblx0XHR9XG5cdH07XG59XG52YXIgTWlncmF0aW9uRXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3Ioa2V5LCB2ZXJzaW9uLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIoYHYke3ZlcnNpb259IG1pZ3JhdGlvbiBmYWlsZWQgZm9yIFwiJHtrZXl9XCJgLCBvcHRpb25zKTtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IE1pZ3JhdGlvbkVycm9yLCBzdG9yYWdlIH07IiwiLyoqXG4gKiBTdG9yYWdlIFF1b3RhIE1hbmFnZXJcbiAqXG4gKiBNYW5hZ2VzIHN5bmMgc3RvcmFnZSB0byBzdGF5IHdpdGhpbiBGaXJlZm94J3MgfjEwMEtCIGxpbWl0LlxuICogQ2hyb21lL0VkZ2UgaGF2ZSBtdWNoIGhpZ2hlciBsaW1pdHMgKH4xTUIvaXRlbSwgMTBNQiB0b3RhbCkgc28gbm8gdHJpbW1pbmcgbmVlZGVkLlxuICogVHJpbXMgZGF0YSBhdXRvbWF0aWNhbGx5IGJlZm9yZSBxdW90YSBpcyBleGNlZWRlZCBvbiBGaXJlZm94IG9ubHkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBjaGVja1N0b3JlUXVvdGEgfSBmcm9tICdAZHJhY29uL3d4dC1zaGFyZWQvc3RvcmFnZSc7XG4gKlxuICogLy8gQmVmb3JlIHNldHRpbmcgZGF0YVxuICogY29uc3QgeyBuZWVkc1RyaW0sIGRhdGEgfSA9IGF3YWl0IGNoZWNrU3RvcmVRdW90YSgndGFza3MnLCBjdXJyZW50VGFza3MsIG5ld1Rhc2tzKTtcbiAqIGlmIChuZWVkc1RyaW0pIHtcbiAqICAgY29uc29sZS5sb2coJ0RhdGEgd2FzIHRyaW1tZWQgZm9yIEZpcmVmb3ggcXVvdGEnKTtcbiAqIH1cbiAqIGF3YWl0IHN5bmNTdG9yZS5zZXRWYWx1ZShkYXRhKTtcbiAqIGBgYFxuICovXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuLy8gRmlyZWZveCBzeW5jIGxpbWl0cyAoQ2hyb21lL0VkZ2UgaGF2ZSB+MU1CL2l0ZW0sIH4xME1CIHRvdGFsKVxuZXhwb3J0IGNvbnN0IEZJUkVGT1hfU1lOQ19RVU9UQV9CWVRFUyA9IDEwMCAqIDEwMjQ7IC8vIH4xMDBLQlxuZXhwb3J0IGNvbnN0IEZJUkVGT1hfSVRFTV9RVU9UQV9CWVRFUyA9IDggKiAxMDI0OyAvLyB+OEtCIHBlciBpdGVtXG5jb25zdCBUQVJHRVRfVVNBR0VfUkFUSU8gPSAwLjg7IC8vIFRyaW0gd2hlbiBhdCA4MCUgY2FwYWNpdHlcbmxldCBicm93c2VyS2luZCA9ICd1bmtub3duJztcbi8qKlxuICogRGV0ZWN0IGJyb3dzZXIgdHlwZSAtIGNhY2hlZCBmb3IgcGVyZm9ybWFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJLaW5kKCkge1xuICAgIGlmIChicm93c2VyS2luZCAhPT0gJ3Vua25vd24nKVxuICAgICAgICByZXR1cm4gYnJvd3NlcktpbmQ7XG4gICAgLy8gQ2hyb21pdW0gYnJvd3NlcnMgaW5jbHVkZTogQ2hyb21lLCBFZGdlLCBCcmF2ZSwgT3BlcmEsIGV0Yy5cbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodWEuaW5jbHVkZXMoJ2ZpcmVmb3gnKSkge1xuICAgICAgICBicm93c2VyS2luZCA9ICdmaXJlZm94JztcbiAgICB9XG4gICAgZWxzZSBpZiAodWEuaW5jbHVkZXMoJ2Nocm9tZScpIHx8IHVhLmluY2x1ZGVzKCdlZGcnKSkge1xuICAgICAgICBicm93c2VyS2luZCA9ICdjaHJvbWl1bSc7XG4gICAgfVxuICAgIHJldHVybiBicm93c2VyS2luZDtcbn1cbi8qKlxuICogQ2hlY2sgaWYgY3VycmVudCBicm93c2VyIGhhcyBzdHJpY3Qgc3luYyBsaW1pdHMgKEZpcmVmb3ggb25seSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1N0cmljdFF1b3RhKCkge1xuICAgIHJldHVybiBnZXRCcm93c2VyS2luZCgpID09PSAnZmlyZWZveCc7XG59XG4vKipcbiAqIEdldCBzeW5jIHN0b3JhZ2UgcXVvdGEgc3RhdHVzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRRdW90YVN0YXR1cygpIHtcbiAgICAvLyBPbiBDaHJvbWl1bSwgbm8gcXVvdGEgbWFuYWdlbWVudCBuZWVkZWRcbiAgICBpZiAoIWhhc1N0cmljdFF1b3RhKCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZWQ6IDAsXG4gICAgICAgICAgICBsaW1pdDogSW5maW5pdHksXG4gICAgICAgICAgICBwZXJjZW50VXNlZDogMCxcbiAgICAgICAgICAgIGlzTmVhckxpbWl0OiBmYWxzZSxcbiAgICAgICAgICAgIGJyb3dzZXI6IGdldEJyb3dzZXJLaW5kKCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbCA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldEJ5dGVzSW5Vc2UoKTtcbiAgICAgICAgY29uc3QgbGltaXQgPSBGSVJFRk9YX1NZTkNfUVVPVEFfQllURVM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VkOiBhbGwsXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIHBlcmNlbnRVc2VkOiAoYWxsIC8gbGltaXQpICogMTAwLFxuICAgICAgICAgICAgaXNOZWFyTGltaXQ6IGFsbCA+IGxpbWl0ICogVEFSR0VUX1VTQUdFX1JBVElPLFxuICAgICAgICAgICAgYnJvd3NlcjogJ2ZpcmVmb3gnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VkOiAwLFxuICAgICAgICAgICAgbGltaXQ6IEZJUkVGT1hfU1lOQ19RVU9UQV9CWVRFUyxcbiAgICAgICAgICAgIHBlcmNlbnRVc2VkOiAwLFxuICAgICAgICAgICAgaXNOZWFyTGltaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYnJvd3NlcjogJ2ZpcmVmb3gnLFxuICAgICAgICB9O1xuICAgIH1cbn1cbi8qKlxuICogRXN0aW1hdGUgdGhlIHNpemUgb2YgYW4gb2JqZWN0IGluIEpTT04gYnl0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlU2l6ZShvYmopIHtcbiAgICByZXR1cm4gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKEpTT04uc3RyaW5naWZ5KG9iaikpLmxlbmd0aDtcbn1cbi8qKlxuICogVHJpbSBhbiBhcnJheSB0byBmaXQgd2l0aGluIEZpcmVmb3ggcXVvdGEgbGltaXRzXG4gKlxuICogQHBhcmFtIGFyciAtIEFycmF5IHRvIHRyaW1cbiAqIEBwYXJhbSBtYXhJdGVtcyAtIE1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIGtlZXBcbiAqIEBwYXJhbSBpdGVtTWF4Qnl0ZXMgLSBNYXhpbXVtIGJ5dGVzIHBlciBpdGVtIChkZWZhdWx0OiA4S0IgZm9yIEZpcmVmb3gpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltQXJyYXlUb1NpemUoYXJyLCBtYXhJdGVtcywgaXRlbU1heEJ5dGVzID0gRklSRUZPWF9JVEVNX1FVT1RBX0JZVEVTKSB7XG4gICAgbGV0IHRyaW1tZWQgPSBhcnIuc2xpY2UoMCwgbWF4SXRlbXMpO1xuICAgIC8vIElmIHN0aWxsIHRvbyBiaWcsIHRydW5jYXRlIGVhY2ggaXRlbVxuICAgIGNvbnN0IGN1cnJlbnRTaXplID0gZXN0aW1hdGVTaXplKHRyaW1tZWQpO1xuICAgIGNvbnN0IHRhcmdldFNpemUgPSBpdGVtTWF4Qnl0ZXMgKiB0cmltbWVkLmxlbmd0aDtcbiAgICBpZiAoY3VycmVudFNpemUgPiB0YXJnZXRTaXplKSB7XG4gICAgICAgIHRyaW1tZWQgPSB0cmltbWVkLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1TdHIgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICAgICAgICAgIGlmIChpdGVtU3RyLmxlbmd0aCA+IGl0ZW1NYXhCeXRlcykge1xuICAgICAgICAgICAgICAgIC8vIFRydW5jYXRlIHN0cmluZyBmaWVsZHNcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGl0ZW1TdHIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJzZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlZFtrZXldID09PSAnc3RyaW5nJyAmJiBwYXJzZWRba2V5XS5sZW5ndGggPiBpdGVtTWF4Qnl0ZXMgLyAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0uc3Vic3RyaW5nKDAsIE1hdGguZmxvb3IoaXRlbU1heEJ5dGVzIC8gMTApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHBhcnNpbmcgZmFpbHMsIGp1c3QgdHJ1bmNhdGUgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVN0ci5zdWJzdHJpbmcoMCwgaXRlbU1heEJ5dGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cmltbWVkO1xufVxuLyoqXG4gKiBDaGVjayBpZiBhIHN0b3JlIG5lZWRzIHRyaW1taW5nIGJlZm9yZSB3cml0aW5nXG4gKiBPbiBDaHJvbWUvRWRnZSwgdGhpcyBpcyBhIG5vLW9wIC0gcmV0dXJucyBkYXRhIHVuY2hhbmdlZFxuICogT24gRmlyZWZveCwgdHJpbXMgaWYgYXBwcm9hY2hpbmcgcXVvdGEgbGltaXRzXG4gKlxuICogQHBhcmFtIHN0b3JlTmFtZSAtIE5hbWUgb2YgdGhlIHN0b3JlIChmb3IgbG9nZ2luZylcbiAqIEBwYXJhbSBjdXJyZW50RGF0YSAtIEN1cnJlbnQgc3RvcmVkIGRhdGFcbiAqIEBwYXJhbSBuZXdEYXRhIC0gTmV3IGRhdGEgdG8gd3JpdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gUXVvdGEgb3B0aW9uc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tTdG9yZVF1b3RhKHN0b3JlTmFtZSwgY3VycmVudERhdGEsIG5ld0RhdGEsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGdldFF1b3RhU3RhdHVzKCk7XG4gICAgLy8gT24gQ2hyb21pdW0sIG5vIHF1b3RhIG1hbmFnZW1lbnQgbmVlZGVkIC0gcmV0dXJuIGRhdGEgdW5jaGFuZ2VkXG4gICAgaWYgKHN0YXR1cy5icm93c2VyICE9PSAnZmlyZWZveCcpIHtcbiAgICAgICAgcmV0dXJuIHsgbmVlZHNUcmltOiBmYWxzZSwgZGF0YTogbmV3RGF0YSwgc3RhdHVzIH07XG4gICAgfVxuICAgIC8vIElmIHdlJ3JlIG5vdCBuZWFyIHRoZSBsaW1pdCwgbm8gdHJpbW1pbmcgbmVlZGVkXG4gICAgaWYgKCFzdGF0dXMuaXNOZWFyTGltaXQpIHtcbiAgICAgICAgcmV0dXJuIHsgbmVlZHNUcmltOiBmYWxzZSwgZGF0YTogbmV3RGF0YSwgc3RhdHVzIH07XG4gICAgfVxuICAgIGNvbnN0IHsgbWF4SXRlbXMgPSA1MCwgbWF4SXRlbVNpemVCeXRlcyA9IEZJUkVGT1hfSVRFTV9RVU9UQV9CWVRFUyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBuZXdTaXplID0gZXN0aW1hdGVTaXplKG5ld0RhdGEpO1xuICAgIC8vIElmIGFkZGluZyBuZXcgZGF0YSB3b3VsZCBleGNlZWQgcXVvdGEsIHRyaW0gcHJvYWN0aXZlbHlcbiAgICBpZiAoc3RhdHVzLnVzZWQgKyBuZXdTaXplID4gRklSRUZPWF9TWU5DX1FVT1RBX0JZVEVTICogVEFSR0VUX1VTQUdFX1JBVElPKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbUXVvdGFNYW5hZ2VyXSBQcm9hY3RpdmUgdHJpbSBmb3IgJHtzdG9yZU5hbWV9OiBjdXJyZW50PSR7c3RhdHVzLnVzZWR9QiwgYWRkaW5nPSR7bmV3U2l6ZX1CYCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0RhdGEpKSB7XG4gICAgICAgICAgICBjb25zdCB0cmltbWVkID0gdHJpbUFycmF5VG9TaXplKG5ld0RhdGEsIG1heEl0ZW1zLCBtYXhJdGVtU2l6ZUJ5dGVzKTtcbiAgICAgICAgICAgIHJldHVybiB7IG5lZWRzVHJpbTogdHJ1ZSwgZGF0YTogdHJpbW1lZCwgc3RhdHVzIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgbmVlZHNUcmltOiBmYWxzZSwgZGF0YTogbmV3RGF0YSwgc3RhdHVzIH07XG59XG4vKipcbiAqIEVuc3VyZSBhIHN5bmMgc3RvcmUgc3RheXMgd2l0aGluIEZpcmVmb3ggcXVvdGFcbiAqIE9uIENocm9tZS9FZGdlLCB0aGlzIGlzIGEgbm8tb3BcbiAqXG4gKiBAcGFyYW0gc3RvcmVOYW1lIC0gTmFtZSBvZiB0aGUgc3RvcmUgKGZvciBsb2dnaW5nKVxuICogQHBhcmFtIHN0b3JlIC0gV1hUIHN0b3JhZ2Ugc3RvcmUgd2l0aCBnZXRWYWx1ZS9zZXRWYWx1ZSBtZXRob2RzXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFF1b3RhIG9wdGlvbnNcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGltcG9ydCB7IGVuc3VyZVN5bmNRdW90YSB9IGZyb20gJ0BkcmFjb24vd3h0LXNoYXJlZC9zdG9yYWdlJztcbiAqIGltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICd3eHQvdXRpbHMvc3RvcmFnZSc7XG4gKlxuICogY29uc3QgbXlTeW5jU3RvcmUgPSBzdG9yYWdlLmRlZmluZUl0ZW08TXlEYXRhPignc3luYzpteURhdGEnLCB7IGZhbGxiYWNrOiBbXSB9KTtcbiAqXG4gKiAvLyBBZnRlciBhZGRpbmcgaXRlbXNcbiAqIGF3YWl0IGVuc3VyZVN5bmNRdW90YSgnc3luYzpteURhdGEnLCBteVN5bmNTdG9yZSwgeyBtYXhJdGVtczogMTAwIH0pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVTeW5jUXVvdGEoc3RvcmVOYW1lLCBzdG9yZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgZ2V0UXVvdGFTdGF0dXMoKTtcbiAgICAvLyBPbiBDaHJvbWl1bSwgbm8gcXVvdGEgbWFuYWdlbWVudCBuZWVkZWRcbiAgICBpZiAoc3RhdHVzLmJyb3dzZXIgIT09ICdmaXJlZm94Jykge1xuICAgICAgICByZXR1cm4geyB3YXNUcmltbWVkOiBmYWxzZSwgc3RhdHVzIH07XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzdG9yZS5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IHsgbmVlZHNUcmltLCBkYXRhOiB0cmltbWVkRGF0YSB9ID0gYXdhaXQgY2hlY2tTdG9yZVF1b3RhKHN0b3JlTmFtZSwgZGF0YSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgaWYgKG5lZWRzVHJpbSAmJiB0cmltbWVkRGF0YSAhPT0gZGF0YSkge1xuICAgICAgICBhd2FpdCBzdG9yZS5zZXRWYWx1ZSh0cmltbWVkRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbUXVvdGFNYW5hZ2VyXSBUcmltbWVkICR7c3RvcmVOYW1lfSB0byBmaXQgRmlyZWZveCBzeW5jIHF1b3RhYCk7XG4gICAgICAgIHJldHVybiB7IHdhc1RyaW1tZWQ6IHRydWUsIHN0YXR1cyB9O1xuICAgIH1cbiAgICByZXR1cm4geyB3YXNUcmltbWVkOiBmYWxzZSwgc3RhdHVzIH07XG59XG4vKipcbiAqIFRyaW0gb2xkIGl0ZW1zIGZyb20gYSB0YXNrL2FjdGl2aXR5IGxpc3QgdG8gc3RheSB3aXRoaW4gRmlyZWZveCBxdW90YVxuICogS2VlcHMgbW9zdCByZWNlbnQgaXRlbXMsIHJlbW92ZXMgb2xkZXN0IG9uZXNcbiAqXG4gKiBAcGFyYW0gaXRlbXMgLSBBcnJheSBvZiBpdGVtcyB3aXRoIGEgdGltZXN0YW1wIG9yIHNpbWlsYXIgb3JkZXJpbmcgZmllbGRcbiAqIEBwYXJhbSBtYXhJdGVtcyAtIE1heGltdW0gaXRlbXMgdG8ga2VlcFxuICogQHBhcmFtIHRpbWVzdGFtcEZpZWxkIC0gRmllbGQgbmFtZSB0byB1c2UgZm9yIHNvcnRpbmcgKGRlZmF1bHQ6ICd0aW1lc3RhbXAnKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbU9sZEl0ZW1zKGl0ZW1zLCBtYXhJdGVtcywgdGltZXN0YW1wRmllbGQgPSAndGltZXN0YW1wJykge1xuICAgIC8vIFNvcnQgYnkgdGltZXN0YW1wIGRlc2NlbmRpbmcgKG5ld2VzdCBmaXJzdCksIHRoZW4gc2xpY2VcbiAgICByZXR1cm4gWy4uLml0ZW1zXVxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBhVmFsID0gYVt0aW1lc3RhbXBGaWVsZF07XG4gICAgICAgIGNvbnN0IGJWYWwgPSBiW3RpbWVzdGFtcEZpZWxkXTtcbiAgICAgICAgaWYgKHR5cGVvZiBhVmFsID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYlZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBiVmFsIC0gYVZhbDsgLy8gRGVzY2VuZGluZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pXG4gICAgICAgIC5zbGljZSgwLCBtYXhJdGVtcyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdW90YS5qcy5tYXAiLCIvKipcbiAqIEV4dGVuc2lvbiB1dGlsaXRpZXMgYW5kIGZhY3RvcnlcbiAqXG4gKiBQcm92aWRlczpcbiAqIC0gY3JlYXRlRXh0ZW5zaW9uKCkgLSBDb21wbGV0ZSBzZXR1cCBpbiBvbmUgY2FsbFxuICogLSBDb250ZXh0IGRldGVjdGlvbiBoZWxwZXJzXG4gKiAtIFRhYiBtYW5hZ2VtZW50XG4gKiAtIE1lc3NhZ2UgcGFzc2luZyB1dGlsaXRpZXNcbiAqL1xuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IGNyZWF0ZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pbmRleC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVBcGlDbGllbnQsIH0gZnJvbSAnLi4vYXBpL2luZGV4LmpzJztcbmltcG9ydCB7IGNyZWF0ZUF1dGhGbG93IH0gZnJvbSAnLi4vYXV0aC9pbmRleC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0QXV0aFN0b3JlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmRleC5qcyc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnd3h0L3V0aWxzL3N0b3JhZ2UnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV4dGVuc2lvbihvcHRpb25zKSB7XG4gICAgY29uc3QgeyBhcHBOYW1lLCBhcHBJZCwgZW52LCBkZWJ1Zywgc3RvcmFnZUtleSA9ICdzeW5jOmF1dGgnIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7IGFwcE5hbWUsIGVudiwgZGVidWcgfSk7XG4gICAgY29uc3QgYXV0aFN0b3JlID0gc3RvcmFnZS5kZWZpbmVJdGVtKHN0b3JhZ2VLZXksIHtcbiAgICAgICAgZmFsbGJhY2s6IGRlZmF1bHRBdXRoU3RvcmUsXG4gICAgfSk7XG4gICAgY29uc3QgYXBpQ2xpZW50ID0gY3JlYXRlQXBpQ2xpZW50KHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBnZXRBdXRoOiAoKSA9PiBhdXRoU3RvcmUuZ2V0VmFsdWUoKSxcbiAgICAgICAgc2V0QXV0aDogKGF1dGgpID0+IGF1dGhTdG9yZS5zZXRWYWx1ZShhdXRoKSxcbiAgICAgICAgb25BdXRoRXJyb3I6ICgpID0+IGF1dGhGbG93Lm9wZW5Mb2dpbigpLFxuICAgIH0pO1xuICAgIGNvbnN0IGF1dGhGbG93ID0gY3JlYXRlQXV0aEZsb3coe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGFwcElkLFxuICAgICAgICBmbG93OiAnZW1haWwnLCAvLyBEZWZhdWx0IHRvIGVtYWlsIG1hZ2ljIGxpbmtcbiAgICAgICAgZ2V0QXV0aDogKCkgPT4gYXV0aFN0b3JlLmdldFZhbHVlKCksXG4gICAgICAgIHNldEF1dGg6IChhdXRoKSA9PiBhdXRoU3RvcmUuc2V0VmFsdWUoYXV0aCksXG4gICAgICAgIHJlc2V0QXV0aDogKCkgPT4gYXV0aFN0b3JlLnNldFZhbHVlKGRlZmF1bHRBdXRoU3RvcmUpLFxuICAgIH0pO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGF3YWl0IGF1dGhTdG9yZS5nZXRWYWx1ZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIWF1dGguYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICB1c2VyOiBhdXRoLnVzZXJcbiAgICAgICAgICAgICAgICA/IHsgZW1haWw6IGF1dGgudXNlci5lbWFpbCwgbmFtZTogYXV0aC51c2VyLm5hbWUgfHwgJ1VzZXInLCBwaWN0dXJlOiBhdXRoLnVzZXIucGljdHVyZSB9XG4gICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgdG9rZW46IGF1dGguYWNjZXNzVG9rZW4gfHwgbnVsbCxcbiAgICAgICAgICAgIHF1b3RhOiBudWxsLCAvLyBGZXRjaGVkIHNlcGFyYXRlbHkgdmlhIGdldFF1b3RhKClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGdldEF1dGhTdGF0ZSgpKS5pc0F1dGhlbnRpY2F0ZWQ7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgYXBpQ2xpZW50LFxuICAgICAgICBhdXRoRmxvdyxcbiAgICAgICAgYXV0aFN0b3JlLFxuICAgICAgICBhcHBOYW1lLFxuICAgICAgICBhcHBJZCxcbiAgICAgICAgZ2V0QXV0aFN0YXRlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgICAgIG9wZW5Mb2dpbjogYXV0aEZsb3cub3BlbkxvZ2luLFxuICAgICAgICBvcGVuRGFzaGJvYXJkOiBhdXRoRmxvdy5vcGVuRGFzaGJvYXJkLFxuICAgICAgICBsb2dvdXQ6IGF1dGhGbG93LmxvZ291dCxcbiAgICAgICAgZ2V0VXNlcjogKCkgPT4gYXBpQ2xpZW50LmdldFVzZXIoKSxcbiAgICAgICAgYWRkUXVvdGE6IChhbW91bnQpID0+IGFwaUNsaWVudC5hZGRRdW90YShhbW91bnQgPz8gMTAwKSxcbiAgICAgICAgZ2V0UXVvdGE6ICgpID0+IGFwaUNsaWVudC5nZXRRdW90YSgpLFxuICAgICAgICBzdWJzY3JpYmU6IChhbW91bnQpID0+IGFwaUNsaWVudC5hZGRRdW90YShhbW91bnQgPz8gMTAwKSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhc2ljRXh0ZW5zaW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhcHBOYW1lOiBvcHRpb25zLmFwcE5hbWUsXG4gICAgICAgIGFwcElkOiBvcHRpb25zLmFwcElkLFxuICAgICAgICBnZXRFeHRlbnNpb25PcmlnaW4sXG4gICAgICAgIGdldEV4dGVuc2lvblVybCxcbiAgICAgICAgb3BlbkluTmV3VGFiLFxuICAgICAgICBnZXRBY3RpdmVUYWIsXG4gICAgICAgIHNlbmRUb0JhY2tncm91bmQsXG4gICAgICAgIGhhc1Blcm1pc3Npb24sXG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9uLFxuICAgIH07XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250ZXh0IERldGVjdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29udGVudFNjcmlwdCgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwOicgfHwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JykpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0ZW5zaW9uQ29udGV4dCgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2Nocm9tZS1leHRlbnNpb246Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNCYWNrZ3JvdW5kU2NyaXB0KCkge1xuICAgIHJldHVybiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgKHR5cGVvZiBnbG9iYWxUaGlzLlNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHNlbGYgaW5zdGFuY2VvZiBnbG9iYWxUaGlzLlNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSkpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRXh0ZW5zaW9uIFVSTCBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uT3JpZ2luKCkge1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCcnKS5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVuc2lvblVybChwYXRoKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5nZXRVUkwocGF0aCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBdXRoQ2FsbGJhY2tVcmwodXJsKSB7XG4gICAgcmV0dXJuIHVybC5pbmNsdWRlcyhicm93c2VyLnJ1bnRpbWUuaWQpICYmIHVybC5pbmNsdWRlcygnYXV0aC1jYWxsYmFjaycpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVGFiIE1hbmFnZW1lbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuSW5OZXdUYWIodXJsKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmwgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWN0aXZlVGFiKCkge1xuICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICAgIHJldHVybiB0YWI7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VUb0FjdGl2ZVRhYihtZXNzYWdlKSB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgZ2V0QWN0aXZlVGFiKCk7XG4gICAgaWYgKHRhYj8uaWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUluQWN0aXZlVGFiKGZ1bmMpIHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCBnZXRBY3RpdmVUYWIoKTtcbiAgICBpZiAoIXRhYj8uaWQpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGJyb3dzZXIuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICAgICAgICAgIGZ1bmMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0c1swXT8ucmVzdWx0O1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGVudCBTY3JpcHQgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRUb0JhY2tncm91bmQobWVzc2FnZSkge1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQZXJtaXNzaW9uIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zID0gW10pIHtcbiAgICByZXR1cm4gYnJvd3Nlci5wZXJtaXNzaW9ucy5jb250YWlucyh7IHBlcm1pc3Npb25zIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb25zID0gW10pIHtcbiAgICByZXR1cm4gYnJvd3Nlci5wZXJtaXNzaW9ucy5yZXF1ZXN0KHsgcGVybWlzc2lvbnMgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgdmFyIHV0aWw7XG4oZnVuY3Rpb24gKHV0aWwpIHtcbiAgICB1dGlsLmFzc2VydEVxdWFsID0gKF8pID0+IHsgfTtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWwpICYmIE1hdGguZmxvb3IodmFsKSA9PT0gdmFsO1xuICAgIGZ1bmN0aW9uIGpvaW5WYWx1ZXMoYXJyYXksIHNlcGFyYXRvciA9IFwiIHwgXCIpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcCgodmFsKSA9PiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IGAnJHt2YWx9J2AgOiB2YWwpKS5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbmV4cG9ydCB2YXIgb2JqZWN0VXRpbDtcbihmdW5jdGlvbiAob2JqZWN0VXRpbCkge1xuICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXMgPSAoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZmlyc3QsXG4gICAgICAgICAgICAuLi5zZWNvbmQsIC8vIHNlY29uZCBvdmVyd3JpdGVzIGZpcnN0XG4gICAgICAgIH07XG4gICAgfTtcbn0pKG9iamVjdFV0aWwgfHwgKG9iamVjdFV0aWwgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmV4cG9ydCBjb25zdCBnZXRQYXJzZWRUeXBlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIGRhdGE7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZDtcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3RyaW5nO1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKGRhdGEpID8gWm9kUGFyc2VkVHlwZS5uYW4gOiBab2RQYXJzZWRUeXBlLm51bWJlcjtcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJvb2xlYW47XG4gICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZnVuY3Rpb247XG4gICAgICAgIGNhc2UgXCJiaWdpbnRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJpZ2ludDtcbiAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3ltYm9sO1xuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5udWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudGhlbiAmJiB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiYgZGF0YS5jYXRjaCAmJiB0eXBlb2YgZGF0YS5jYXRjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUucHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5tYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIFNldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBEYXRlICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm9iamVjdDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVua25vd247XG4gICAgfVxufTtcbiIsImltcG9ydCB7IHV0aWwgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWwuanNcIjtcbmV4cG9ydCBjb25zdCBab2RJc3N1ZUNvZGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcImludmFsaWRfdHlwZVwiLFxuICAgIFwiaW52YWxpZF9saXRlcmFsXCIsXG4gICAgXCJjdXN0b21cIixcbiAgICBcImludmFsaWRfdW5pb25cIixcbiAgICBcImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvclwiLFxuICAgIFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIsXG4gICAgXCJ1bnJlY29nbml6ZWRfa2V5c1wiLFxuICAgIFwiaW52YWxpZF9hcmd1bWVudHNcIixcbiAgICBcImludmFsaWRfcmV0dXJuX3R5cGVcIixcbiAgICBcImludmFsaWRfZGF0ZVwiLFxuICAgIFwiaW52YWxpZF9zdHJpbmdcIixcbiAgICBcInRvb19zbWFsbFwiLFxuICAgIFwidG9vX2JpZ1wiLFxuICAgIFwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXNcIixcbiAgICBcIm5vdF9tdWx0aXBsZV9vZlwiLFxuICAgIFwibm90X2Zpbml0ZVwiLFxuXSk7XG5leHBvcnQgY29uc3QgcXVvdGVsZXNzSnNvbiA9IChvYmopID0+IHtcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAyKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC9cIihbXlwiXSspXCI6L2csIFwiJDE6XCIpO1xufTtcbmV4cG9ydCBjbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBnZXQgZXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXM7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGlzc3Vlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZElzc3VlID0gKHN1YikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIHN1Yl07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkSXNzdWVzID0gKHN1YnMgPSBbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIC4uLnN1YnNdO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhY3R1YWxQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIGFjdHVhbFByb3RvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19wcm90b19fID0gYWN0dWFsUHJvdG87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gXCJab2RFcnJvclwiO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IGlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHN0YXRpYyBhc3NlcnQodmFsdWUpIHtcbiAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBab2RFcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGEgWm9kRXJyb3I6ICR7dmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5pc3N1ZXMsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyLCAyKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3Vlcy5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGZsYXR0ZW4obWFwcGVyID0gKGlzc3VlKSA9PiBpc3N1ZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge307XG4gICAgICAgIGNvbnN0IGZvcm1FcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5pc3N1ZXMpIHtcbiAgICAgICAgICAgIGlmIChzdWIucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RFbCA9IHN1Yi5wYXRoWzBdO1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW2ZpcnN0RWxdID0gZmllbGRFcnJvcnNbZmlyc3RFbF0gfHwgW107XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbZmlyc3RFbF0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcbiIsImltcG9ydCB7IFpvZElzc3VlQ29kZSB9IGZyb20gXCIuLi9ab2RFcnJvci5qc1wiO1xuaW1wb3J0IHsgdXRpbCwgWm9kUGFyc2VkVHlwZSB9IGZyb20gXCIuLi9oZWxwZXJzL3V0aWwuanNcIjtcbmNvbnN0IGVycm9yTWFwID0gKGlzc3VlLCBfY3R4KSA9PiB7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgc3dpdGNoIChpc3N1ZS5jb2RlKSB7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZTpcbiAgICAgICAgICAgIGlmIChpc3N1ZS5yZWNlaXZlZCA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJSZXF1aXJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBFeHBlY3RlZCAke2lzc3VlLmV4cGVjdGVkfSwgcmVjZWl2ZWQgJHtpc3N1ZS5yZWNlaXZlZH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfbGl0ZXJhbDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBsaXRlcmFsIHZhbHVlLCBleHBlY3RlZCAke0pTT04uc3RyaW5naWZ5KGlzc3VlLmV4cGVjdGVkLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlcil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVW5yZWNvZ25pemVkIGtleShzKSBpbiBvYmplY3Q6ICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLmtleXMsIFwiLCBcIil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3I6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZW51bSB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9LCByZWNlaXZlZCAnJHtpc3N1ZS5yZWNlaXZlZH0nYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiBhcmd1bWVudHNgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfcmV0dXJuX3R5cGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZnVuY3Rpb24gcmV0dXJuIHR5cGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkYXRlYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChcImluY2x1ZGVzXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgaW5jbHVkZSBcIiR7aXNzdWUudmFsaWRhdGlvbi5pbmNsdWRlc31cImA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbi5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGAke21lc3NhZ2V9IGF0IG9uZSBvciBtb3JlIHBvc2l0aW9ucyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHtpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9ufWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJzdGFydHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3Qgc3RhcnQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5zdGFydHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJlbmRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IGVuZCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmVuZHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUudmFsaWRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudmFsaWRhdGlvbiAhPT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkICR7aXNzdWUudmFsaWRhdGlvbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19zbWFsbDpcbiAgICAgICAgICAgIGlmIChpc3N1ZS50eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBBcnJheSBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBtb3JlIHRoYW5gfSAke2lzc3VlLm1pbmltdW19IGVsZW1lbnQocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFN0cmluZyBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBvdmVyYH0gJHtpc3N1ZS5taW5pbXVtfSBjaGFyYWN0ZXIocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5IGVxdWFsIHRvIGAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGAgOiBgZ3JlYXRlciB0aGFuIGB9JHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWluaW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBsZXNzIHRoYW4gb3IgZXF1YWwgdG9gIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEJpZ0ludCBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvYCA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKE51bWJlcihpc3N1ZS5tYXhpbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuY3VzdG9tOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlczpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW50ZXJzZWN0aW9uIHJlc3VsdHMgY291bGQgbm90IGJlIG1lcmdlZGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7aXNzdWUubXVsdGlwbGVPZn1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9maW5pdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJOdW1iZXIgbXVzdCBiZSBmaW5pdGVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IF9jdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZSk7XG4gICAgfVxuICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBlcnJvck1hcDtcbiIsImltcG9ydCBkZWZhdWx0RXJyb3JNYXAgZnJvbSBcIi4vbG9jYWxlcy9lbi5qc1wiO1xubGV0IG92ZXJyaWRlRXJyb3JNYXAgPSBkZWZhdWx0RXJyb3JNYXA7XG5leHBvcnQgeyBkZWZhdWx0RXJyb3JNYXAgfTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRFcnJvck1hcChtYXApIHtcbiAgICBvdmVycmlkZUVycm9yTWFwID0gbWFwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yTWFwKCkge1xuICAgIHJldHVybiBvdmVycmlkZUVycm9yTWFwO1xufVxuIiwiaW1wb3J0IHsgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgZGVmYXVsdEVycm9yTWFwIGZyb20gXCIuLi9sb2NhbGVzL2VuLmpzXCI7XG5leHBvcnQgY29uc3QgbWFrZUlzc3VlID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgcGF0aCwgZXJyb3JNYXBzLCBpc3N1ZURhdGEgfSA9IHBhcmFtcztcbiAgICBjb25zdCBmdWxsUGF0aCA9IFsuLi5wYXRoLCAuLi4oaXNzdWVEYXRhLnBhdGggfHwgW10pXTtcbiAgICBjb25zdCBmdWxsSXNzdWUgPSB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgfTtcbiAgICBpZiAoaXNzdWVEYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3QgbWFwcyA9IGVycm9yTWFwc1xuICAgICAgICAuZmlsdGVyKChtKSA9PiAhIW0pXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBtYXAgb2YgbWFwcykge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBtYXAoZnVsbElzc3VlLCB7IGRhdGEsIGRlZmF1bHRFcnJvcjogZXJyb3JNZXNzYWdlIH0pLm1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBFTVBUWV9QQVRIID0gW107XG5leHBvcnQgZnVuY3Rpb24gYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBpc3N1ZURhdGEpIHtcbiAgICBjb25zdCBvdmVycmlkZU1hcCA9IGdldEVycm9yTWFwKCk7XG4gICAgY29uc3QgaXNzdWUgPSBtYWtlSXNzdWUoe1xuICAgICAgICBpc3N1ZURhdGE6IGlzc3VlRGF0YSxcbiAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCAvLyBjb250ZXh0dWFsIGVycm9yIG1hcCBpcyBmaXJzdCBwcmlvcml0eVxuICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLCAvLyB0aGVuIHNjaGVtYS1ib3VuZCBtYXAgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBvdmVycmlkZU1hcCwgLy8gdGhlbiBnbG9iYWwgb3ZlcnJpZGUgbWFwXG4gICAgICAgICAgICBvdmVycmlkZU1hcCA9PT0gZGVmYXVsdEVycm9yTWFwID8gdW5kZWZpbmVkIDogZGVmYXVsdEVycm9yTWFwLCAvLyB0aGVuIGdsb2JhbCBkZWZhdWx0IG1hcFxuICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICB9KTtcbiAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKGlzc3VlKTtcbn1cbmV4cG9ydCBjbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBwYWlyO1xuICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKGtleS52YWx1ZSAhPT0gXCJfX3Byb3RvX19cIiAmJiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSkge1xuICAgICAgICAgICAgICAgIGZpbmFsT2JqZWN0W2tleS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsT2JqZWN0IH07XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IElOVkFMSUQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBzdGF0dXM6IFwiYWJvcnRlZFwiLFxufSk7XG5leHBvcnQgY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmV4cG9ydCBjb25zdCBPSyA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlIH0pO1xuZXhwb3J0IGNvbnN0IGlzQWJvcnRlZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCI7XG5leHBvcnQgY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuZXhwb3J0IGNvbnN0IGlzVmFsaWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwidmFsaWRcIjtcbmV4cG9ydCBjb25zdCBpc0FzeW5jID0gKHgpID0+IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuIiwiZXhwb3J0IHZhciBlcnJvclV0aWw7XG4oZnVuY3Rpb24gKGVycm9yVXRpbCkge1xuICAgIGVycm9yVXRpbC5lcnJUb09iaiA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZSB9IDogbWVzc2FnZSB8fCB7fTtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludDpcbiAgICBlcnJvclV0aWwudG9TdHJpbmcgPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyBtZXNzYWdlIDogbWVzc2FnZT8ubWVzc2FnZTtcbn0pKGVycm9yVXRpbCB8fCAoZXJyb3JVdGlsID0ge30pKTtcbiIsImltcG9ydCB7IFpvZEVycm9yLCBab2RJc3N1ZUNvZGUsIH0gZnJvbSBcIi4vWm9kRXJyb3IuanNcIjtcbmltcG9ydCB7IGRlZmF1bHRFcnJvck1hcCwgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCB7IGVycm9yVXRpbCB9IGZyb20gXCIuL2hlbHBlcnMvZXJyb3JVdGlsLmpzXCI7XG5pbXBvcnQgeyBESVJUWSwgSU5WQUxJRCwgT0ssIFBhcnNlU3RhdHVzLCBhZGRJc3N1ZVRvQ29udGV4dCwgaXNBYm9ydGVkLCBpc0FzeW5jLCBpc0RpcnR5LCBpc1ZhbGlkLCBtYWtlSXNzdWUsIH0gZnJvbSBcIi4vaGVscGVycy9wYXJzZVV0aWwuanNcIjtcbmltcG9ydCB7IHV0aWwsIFpvZFBhcnNlZFR5cGUsIGdldFBhcnNlZFR5cGUgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWwuanNcIjtcbmNsYXNzIFBhcnNlSW5wdXRMYXp5UGF0aCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB2YWx1ZSwgcGF0aCwga2V5KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlZFBhdGggPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgIH1cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZWRQYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZFBhdGgucHVzaCguLi50aGlzLl9wYXRoLCAuLi50aGlzLl9rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIHRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhdGg7XG4gICAgfVxufVxuY29uc3QgaGFuZGxlUmVzdWx0ID0gKGN0eCwgcmVzdWx0KSA9PiB7XG4gICAgaWYgKGlzVmFsaWQocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQudmFsdWUgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIGZhaWxlZCBidXQgbm8gaXNzdWVzIGRldGVjdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuZnVuY3Rpb24gcHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIGNvbnN0IHsgZXJyb3JNYXAsIGludmFsaWRfdHlwZV9lcnJvciwgcmVxdWlyZWRfZXJyb3IsIGRlc2NyaXB0aW9uIH0gPSBwYXJhbXM7XG4gICAgaWYgKGVycm9yTWFwICYmIChpbnZhbGlkX3R5cGVfZXJyb3IgfHwgcmVxdWlyZWRfZXJyb3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgdXNlIFwiaW52YWxpZF90eXBlX2Vycm9yXCIgb3IgXCJyZXF1aXJlZF9lcnJvclwiIGluIGNvbmp1bmN0aW9uIHdpdGggY3VzdG9tIGVycm9yIG1hcC5gKTtcbiAgICB9XG4gICAgaWYgKGVycm9yTWFwKVxuICAgICAgICByZXR1cm4geyBlcnJvck1hcDogZXJyb3JNYXAsIGRlc2NyaXB0aW9uIH07XG4gICAgY29uc3QgY3VzdG9tTWFwID0gKGlzcywgY3R4KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gcGFyYW1zO1xuICAgICAgICBpZiAoaXNzLmNvZGUgPT09IFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gcmVxdWlyZWRfZXJyb3IgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc3MuY29kZSAhPT0gXCJpbnZhbGlkX3R5cGVcIilcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyBpbnZhbGlkX3R5cGVfZXJyb3IgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgIH07XG4gICAgcmV0dXJuIHsgZXJyb3JNYXA6IGN1c3RvbU1hcCwgZGVzY3JpcHRpb24gfTtcbn1cbmV4cG9ydCBjbGFzcyBab2RUeXBlIHtcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIF9nZXRUeXBlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBfZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCkge1xuICAgICAgICByZXR1cm4gKGN0eCB8fCB7XG4gICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IG5ldyBQYXJzZVN0YXR1cygpLFxuICAgICAgICAgICAgY3R4OiB7XG4gICAgICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcGFyc2VTeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3luY2hyb25vdXMgcGFyc2UgZW5jb3VudGVyZWQgcHJvbWlzZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX3BhcnNlQXN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfVxuICAgIHBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNhZmVQYXJzZShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgc2FmZVBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBwYXJhbXM/LmFzeW5jID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zPy5lcnJvck1hcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBwYXJhbXM/LnBhdGggfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIFwifnZhbGlkYXRlXCIoZGF0YSkge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAhIXRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZVN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnI/Lm1lc3NhZ2U/LnRvTG93ZXJDYXNlKCk/LmluY2x1ZGVzKFwiZW5jb3VudGVyZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jb21tb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSkudGhlbigocmVzdWx0KSA9PiBpc1ZhbGlkKHJlc3VsdClcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zPy5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBwYXJhbXM/LnBhdGggfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdCkgPyBtYXliZUFzeW5jUmVzdWx0IDogUHJvbWlzZS5yZXNvbHZlKG1heWJlQXN5bmNSZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIHJlZmluZShjaGVjaywgbWVzc2FnZSkge1xuICAgICAgICBjb25zdCBnZXRJc3N1ZVByb3BlcnRpZXMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudCgodmFsLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrKHZhbCk7XG4gICAgICAgICAgICBjb25zdCBzZXRFcnJvciA9ICgpID0+IGN0eC5hZGRJc3N1ZSh7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmN1c3RvbSxcbiAgICAgICAgICAgICAgICAuLi5nZXRJc3N1ZVByb3BlcnRpZXModmFsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZmluZW1lbnQoY2hlY2ssIHJlZmluZW1lbnREYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayh2YWwpKSB7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHR5cGVvZiByZWZpbmVtZW50RGF0YSA9PT0gXCJmdW5jdGlvblwiID8gcmVmaW5lbWVudERhdGEodmFsLCBjdHgpIDogcmVmaW5lbWVudERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlZmluZW1lbnQocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicmVmaW5lbWVudFwiLCByZWZpbmVtZW50IH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdXBlclJlZmluZShyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KHJlZmluZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihkZWYpIHtcbiAgICAgICAgLyoqIEFsaWFzIG9mIHNhZmVQYXJzZUFzeW5jICovXG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zYWZlUGFyc2VBc3luYztcbiAgICAgICAgdGhpcy5fZGVmID0gZGVmO1xuICAgICAgICB0aGlzLnBhcnNlID0gdGhpcy5wYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZSA9IHRoaXMuc2FmZVBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFyc2VBc3luYyA9IHRoaXMucGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZUFzeW5jID0gdGhpcy5zYWZlUGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc3BhLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lID0gdGhpcy5yZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmVtZW50ID0gdGhpcy5yZWZpbmVtZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VwZXJSZWZpbmUgPSB0aGlzLnN1cGVyUmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSB0aGlzLm9wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGFibGUgPSB0aGlzLm51bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGlzaCA9IHRoaXMubnVsbGlzaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLnByb21pc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vciA9IHRoaXMub3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmQgPSB0aGlzLmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJhbmQgPSB0aGlzLmJyYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IHRoaXMuZGVmYXVsdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhdGNoID0gdGhpcy5jYXRjaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlID0gdGhpcy5kZXNjcmliZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBpcGUgPSB0aGlzLnBpcGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IHRoaXMucmVhZG9ubHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc051bGxhYmxlID0gdGhpcy5pc051bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNPcHRpb25hbCA9IHRoaXMuaXNPcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdID0ge1xuICAgICAgICAgICAgdmVyc2lvbjogMSxcbiAgICAgICAgICAgIHZlbmRvcjogXCJ6b2RcIixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoZGF0YSkgPT4gdGhpc1tcIn52YWxpZGF0ZVwiXShkYXRhKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVsbGFibGUoKS5vcHRpb25hbCgpO1xuICAgIH1cbiAgICBhcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZEFycmF5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFByb21pc2UuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG9yKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gWm9kVW5pb24uY3JlYXRlKFt0aGlzLCBvcHRpb25dLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBhbmQoaW5jb21pbmcpIHtcbiAgICAgICAgcmV0dXJuIFpvZEludGVyc2VjdGlvbi5jcmVhdGUodGhpcywgaW5jb21pbmcsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQoZGVmKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicmFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCcmFuZGVkKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChkZWYpIHtcbiAgICAgICAgY29uc3QgY2F0Y2hWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgaW5uZXJUeXBlOiB0aGlzLFxuICAgICAgICAgICAgY2F0Y2hWYWx1ZTogY2F0Y2hWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzY3JpYmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgVGhpcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgVGhpcyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpcGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBab2RQaXBlbGluZS5jcmVhdGUodGhpcywgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmVhZG9ubHkoKSB7XG4gICAgICAgIHJldHVybiBab2RSZWFkb25seS5jcmVhdGUodGhpcyk7XG4gICAgfVxuICAgIGlzT3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZSh1bmRlZmluZWQpLnN1Y2Nlc3M7XG4gICAgfVxuICAgIGlzTnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZShudWxsKS5zdWNjZXNzO1xuICAgIH1cbn1cbmNvbnN0IGN1aWRSZWdleCA9IC9eY1teXFxzLV17OCx9JC9pO1xuY29uc3QgY3VpZDJSZWdleCA9IC9eWzAtOWEtel0rJC87XG5jb25zdCB1bGlkUmVnZXggPSAvXlswLTlBLUhKS01OUC1UVi1aXXsyNn0kL2k7XG4vLyBjb25zdCB1dWlkUmVnZXggPVxuLy8gICAvXihbYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bMS01XVthLWYwLTldezN9LVthLWYwLTldezR9LVthLWYwLTldezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuY29uc3QgdXVpZFJlZ2V4ID0gL15bMC05YS1mQS1GXXs4fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXsxMn0kL2k7XG5jb25zdCBuYW5vaWRSZWdleCA9IC9eW2EtejAtOV8tXXsyMX0kL2k7XG5jb25zdCBqd3RSZWdleCA9IC9eW0EtWmEtejAtOS1fXStcXC5bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10qJC87XG5jb25zdCBkdXJhdGlvblJlZ2V4ID0gL15bLStdP1AoPyEkKSg/Oig/OlstK10/XFxkK1kpfCg/OlstK10/XFxkK1suLF1cXGQrWSQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86KD86Wy0rXT9cXGQrVyl8KD86Wy0rXT9cXGQrWy4sXVxcZCtXJCkpPyg/Oig/OlstK10/XFxkK0QpfCg/OlstK10/XFxkK1suLF1cXGQrRCQpKT8oPzpUKD89W1xcZCstXSkoPzooPzpbLStdP1xcZCtIKXwoPzpbLStdP1xcZCtbLixdXFxkK0gkKSk/KD86KD86Wy0rXT9cXGQrTSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtNJCkpPyg/OlstK10/XFxkKyg/OlsuLF1cXGQrKT9TKT8pPz8kLztcbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2MTgxLzE1NTAxNTVcbi8vIG9sZCB2ZXJzaW9uOiB0b28gc2xvdywgZGlkbid0IHN1cHBvcnQgdW5pY29kZVxuLy8gY29uc3QgZW1haWxSZWdleCA9IC9eKCgoW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKyhcXC4oW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKykqKXwoKFxceDIyKSgoKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KChbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3Zl18XFx4MjF8W1xceDIzLVxceDViXXxbXFx4NWQtXFx4N2VdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoXFxcXChbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpKSooKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KFxceDIyKSkpQCgoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSQvaTtcbi8vb2xkIGVtYWlsIHJlZ2V4XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF0uLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXS4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKCg/IS0pKFtePD4oKVtcXF0uLDs6XFxzQFwiXStcXC4pK1tePD4oKVtcXF0uLDs6XFxzQFwiXXsxLH0pW14tPD4oKVtcXF0uLDs6XFxzQFwiXSQvaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcWygoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcXSl8KFxcW0lQdjY6KChbYS1mMC05XXsxLDR9Oil7N318OjooW2EtZjAtOV17MSw0fTopezAsNn18KFthLWYwLTldezEsNH06KXsxfTooW2EtZjAtOV17MSw0fTopezAsNX18KFthLWYwLTldezEsNH06KXsyfTooW2EtZjAtOV17MSw0fTopezAsNH18KFthLWYwLTldezEsNH06KXszfTooW2EtZjAtOV17MSw0fTopezAsM318KFthLWYwLTldezEsNH06KXs0fTooW2EtZjAtOV17MSw0fTopezAsMn18KFthLWYwLTldezEsNH06KXs1fTooW2EtZjAtOV17MSw0fTopezAsMX0pKFthLWYwLTldezEsNH18KCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpKVxcXSl8KFtBLVphLXowLTldKFtBLVphLXowLTktXSpbQS1aYS16MC05XSkqKFxcLltBLVphLXpdezIsfSkrKSkkLztcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXpBLVowLTlcXC5cXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC9cXD1cXD9cXF5cXF9cXGBcXHtcXHxcXH1cXH5cXC1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkkL2k7XG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oPyFcXC4pKD8hLipcXC5cXC4pKFtBLVowLTlfJytcXC1cXC5dKilbQS1aMC05XystXUAoW0EtWjAtOV1bQS1aMC05XFwtXSpcXC4pK1tBLVpdezIsfSQvaTtcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtejAtOS1dKyg/OlxcLlthLXowLTlcXC1dKykqJC9pO1xuLy8gZnJvbSBodHRwczovL3RoZWtldmluc2NvdHQuY29tL2Vtb2ppcy1pbi1qYXZhc2NyaXB0LyN3cml0aW5nLWEtcmVndWxhci1leHByZXNzaW9uXG5jb25zdCBfZW1vamlSZWdleCA9IGBeKFxcXFxwe0V4dGVuZGVkX1BpY3RvZ3JhcGhpY318XFxcXHB7RW1vamlfQ29tcG9uZW50fSkrJGA7XG5sZXQgZW1vamlSZWdleDtcbi8vIGZhc3Rlciwgc2ltcGxlciwgc2FmZXJcbmNvbnN0IGlwdjRSZWdleCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pJC87XG5jb25zdCBpcHY0Q2lkclJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC8oM1swLTJdfFsxMl0/WzAtOV0pJC87XG4vLyBjb25zdCBpcHY2UmVnZXggPVxuLy8gL14oKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpJC87XG5jb25zdCBpcHY2UmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSkkLztcbmNvbnN0IGlwdjZDaWRyUmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSlcXC8oMTJbMC04XXwxWzAxXVswLTldfFsxLTldP1swLTldKSQvO1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzg2MDM5Mi9kZXRlcm1pbmUtaWYtc3RyaW5nLWlzLWluLWJhc2U2NC11c2luZy1qYXZhc2NyaXB0XG5jb25zdCBiYXNlNjRSZWdleCA9IC9eKFswLTlhLXpBLVorL117NH0pKigoWzAtOWEtekEtWisvXXsyfT09KXwoWzAtOWEtekEtWisvXXszfT0pKT8kLztcbi8vIGh0dHBzOi8vYmFzZTY0Lmd1cnUvc3RhbmRhcmRzL2Jhc2U2NHVybFxuY29uc3QgYmFzZTY0dXJsUmVnZXggPSAvXihbMC05YS16QS1aLV9dezR9KSooKFswLTlhLXpBLVotX117Mn0oPT0pPyl8KFswLTlhLXpBLVotX117M30oPSk/KSk/JC87XG4vLyBzaW1wbGVcbi8vIGNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGBcXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfWA7XG4vLyBubyBsZWFwIHllYXIgdmFsaWRhdGlvblxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LSgoMFsxMzU3OF18MTB8MTIpLTMxfCgwWzEzLTldfDFbMC0yXSktMzB8KDBbMS05XXwxWzAtMl0pLSgwWzEtOV18MVxcXFxkfDJcXFxcZCkpYDtcbi8vIHdpdGggbGVhcCB5ZWFyIHZhbGlkYXRpb25cbmNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGAoKFxcXFxkXFxcXGRbMjQ2OF1bMDQ4XXxcXFxcZFxcXFxkWzEzNTc5XVsyNl18XFxcXGRcXFxcZDBbNDhdfFswMjQ2OF1bMDQ4XTAwfFsxMzU3OV1bMjZdMDApLTAyLTI5fFxcXFxkezR9LSgoMFsxMzU3OF18MVswMl0pLSgwWzEtOV18WzEyXVxcXFxkfDNbMDFdKXwoMFs0NjldfDExKS0oMFsxLTldfFsxMl1cXFxcZHwzMCl8KDAyKS0oMFsxLTldfDFcXFxcZHwyWzAtOF0pKSlgO1xuY29uc3QgZGF0ZVJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7ZGF0ZVJlZ2V4U291cmNlfSRgKTtcbmZ1bmN0aW9uIHRpbWVSZWdleFNvdXJjZShhcmdzKSB7XG4gICAgbGV0IHNlY29uZHNSZWdleFNvdXJjZSA9IGBbMC01XVxcXFxkYDtcbiAgICBpZiAoYXJncy5wcmVjaXNpb24pIHtcbiAgICAgICAgc2Vjb25kc1JlZ2V4U291cmNlID0gYCR7c2Vjb25kc1JlZ2V4U291cmNlfVxcXFwuXFxcXGR7JHthcmdzLnByZWNpc2lvbn19YDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5wcmVjaXNpb24gPT0gbnVsbCkge1xuICAgICAgICBzZWNvbmRzUmVnZXhTb3VyY2UgPSBgJHtzZWNvbmRzUmVnZXhTb3VyY2V9KFxcXFwuXFxcXGQrKT9gO1xuICAgIH1cbiAgICBjb25zdCBzZWNvbmRzUXVhbnRpZmllciA9IGFyZ3MucHJlY2lzaW9uID8gXCIrXCIgOiBcIj9cIjsgLy8gcmVxdWlyZSBzZWNvbmRzIGlmIHByZWNpc2lvbiBpcyBub256ZXJvXG4gICAgcmV0dXJuIGAoWzAxXVxcXFxkfDJbMC0zXSk6WzAtNV1cXFxcZCg6JHtzZWNvbmRzUmVnZXhTb3VyY2V9KSR7c2Vjb25kc1F1YW50aWZpZXJ9YDtcbn1cbmZ1bmN0aW9uIHRpbWVSZWdleChhcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3RpbWVSZWdleFNvdXJjZShhcmdzKX0kYCk7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmV4cG9ydCBmdW5jdGlvbiBkYXRldGltZVJlZ2V4KGFyZ3MpIHtcbiAgICBsZXQgcmVnZXggPSBgJHtkYXRlUmVnZXhTb3VyY2V9VCR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfWA7XG4gICAgY29uc3Qgb3B0cyA9IFtdO1xuICAgIG9wdHMucHVzaChhcmdzLmxvY2FsID8gYFo/YCA6IGBaYCk7XG4gICAgaWYgKGFyZ3Mub2Zmc2V0KVxuICAgICAgICBvcHRzLnB1c2goYChbKy1dXFxcXGR7Mn06P1xcXFxkezJ9KWApO1xuICAgIHJlZ2V4ID0gYCR7cmVnZXh9KCR7b3B0cy5qb2luKFwifFwiKX0pYDtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApO1xufVxuZnVuY3Rpb24gaXNWYWxpZElQKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY2XCIgfHwgIXZlcnNpb24pICYmIGlwdjZSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNWYWxpZEpXVChqd3QsIGFsZykge1xuICAgIGlmICghand0UmVnZXgudGVzdChqd3QpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW2hlYWRlcl0gPSBqd3Quc3BsaXQoXCIuXCIpO1xuICAgICAgICBpZiAoIWhlYWRlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gQ29udmVydCBiYXNlNjR1cmwgdG8gYmFzZTY0XG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IGhlYWRlclxuICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgXCIrXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIilcbiAgICAgICAgICAgIC5wYWRFbmQoaGVhZGVyLmxlbmd0aCArICgoNCAtIChoZWFkZXIubGVuZ3RoICUgNCkpICUgNCksIFwiPVwiKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IEpTT04ucGFyc2UoYXRvYihiYXNlNjQpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWNvZGVkICE9PSBcIm9iamVjdFwiIHx8IGRlY29kZWQgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChcInR5cFwiIGluIGRlY29kZWQgJiYgZGVjb2RlZD8udHlwICE9PSBcIkpXVFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIWRlY29kZWQuYWxnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYWxnICYmIGRlY29kZWQuYWxnICE9PSBhbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1ZhbGlkQ2lkcihpcCwgdmVyc2lvbikge1xuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NFwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY0Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NkNpZHJSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGNsYXNzIFpvZFN0cmluZyBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IFN0cmluZyhpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmxlbmd0aCA+IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBpbnB1dC5kYXRhLmxlbmd0aCA+IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gaW5wdXQuZGF0YS5sZW5ndGggPCBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnIHx8IHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1haWxcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVtb2ppXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZW1vamlSZWdleCA9IG5ldyBSZWdFeHAoX2Vtb2ppUmVnZXgsIFwidVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlbW9qaVJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbW9qaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXVpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInV1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm5hbm9pZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuYW5vaWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwibmFub2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY3VpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY3VpZDJcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZDJSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY3VpZDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVsaWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdWxpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1bGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1cmxcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBVUkwoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBjaGVjay5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXN1bHQgPSBjaGVjay5yZWdleC50ZXN0KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICghdGVzdFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0cmltXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImluY2x1ZGVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuaW5jbHVkZXMoY2hlY2sudmFsdWUsIGNoZWNrLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGluY2x1ZGVzOiBjaGVjay52YWx1ZSwgcG9zaXRpb246IGNoZWNrLnBvc2l0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0b0xvd2VyQ2FzZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidG9VcHBlckNhc2VcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInN0YXJ0c1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5zdGFydHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IHN0YXJ0c1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbmRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmVuZHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGVuZHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZXRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImRhdGVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZVJlZ2V4O1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkdXJhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkdXJhdGlvblJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkdXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiaXBcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZElQKGlucHV0LmRhdGEsIGNoZWNrLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImp3dFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkSldUKGlucHV0LmRhdGEsIGNoZWNrLmFsZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJqd3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImNpZHJcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZENpZHIoaW5wdXQuZGF0YSwgY2hlY2sudmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjaWRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJiYXNlNjRcIikge1xuICAgICAgICAgICAgICAgIGlmICghYmFzZTY0UmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImJhc2U2NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NHVybFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJiYXNlNjR1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX3JlZ2V4KHJlZ2V4LCB2YWxpZGF0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZmluZW1lbnQoKGRhdGEpID0+IHJlZ2V4LnRlc3QoZGF0YSksIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24sXG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1haWwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtYWlsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1cmxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBlbW9qaShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZW1vamlcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1dWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1dWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgbmFub2lkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJuYW5vaWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjdWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZDIobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWQyXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdWxpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidWxpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGJhc2U2NChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiYmFzZTY0XCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgYmFzZTY0dXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gYmFzZTY0dXJsIGVuY29kaW5nIGlzIGEgbW9kaWZpY2F0aW9uIG9mIGJhc2U2NCB0aGF0IGNhbiBzYWZlbHkgYmUgdXNlZCBpbiBVUkxzIGFuZCBmaWxlbmFtZXNcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiYmFzZTY0dXJsXCIsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBqd3Qob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImp3dFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGlwKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJpcFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGNpZHIob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImNpZHJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBkYXRldGltZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgICAgICBraW5kOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIG9mZnNldDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9jYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2Ygb3B0aW9ucz8ucHJlY2lzaW9uID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnM/LnByZWNpc2lvbixcbiAgICAgICAgICAgIG9mZnNldDogb3B0aW9ucz8ub2Zmc2V0ID8/IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWw6IG9wdGlvbnM/LmxvY2FsID8/IGZhbHNlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGF0ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZGF0ZVwiLCBtZXNzYWdlIH0pO1xuICAgIH1cbiAgICB0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwidGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwidGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2Ygb3B0aW9ucz8ucHJlY2lzaW9uID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnM/LnByZWNpc2lvbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zPy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGR1cmF0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkdXJhdGlvblwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHJlZ2V4KHJlZ2V4LCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbmNsdWRlcyh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbmNsdWRlc1wiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgcG9zaXRpb246IG9wdGlvbnM/LnBvc2l0aW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJzdGFydHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbmRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJlbmRzV2l0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5MZW5ndGgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heExlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibGVuZ3RoXCIsXG4gICAgICAgICAgICB2YWx1ZTogbGVuLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXF1aXZhbGVudCB0byBgLm1pbigxKWBcbiAgICAgKi9cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkpO1xuICAgIH1cbiAgICB0cmltKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidHJpbVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9Mb3dlckNhc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0b0xvd2VyQ2FzZVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9VcHBlckNhc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0b1VwcGVyQ2FzZVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZXRpbWUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZXRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0RhdGUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ0aW1lXCIpO1xuICAgIH1cbiAgICBnZXQgaXNEdXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkdXJhdGlvblwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1haWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1haWxcIik7XG4gICAgfVxuICAgIGdldCBpc1VSTCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1cmxcIik7XG4gICAgfVxuICAgIGdldCBpc0Vtb2ppKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImVtb2ppXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVVUlEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInV1aWRcIik7XG4gICAgfVxuICAgIGdldCBpc05BTk9JRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJuYW5vaWRcIik7XG4gICAgfVxuICAgIGdldCBpc0NVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRDIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZDJcIik7XG4gICAgfVxuICAgIGdldCBpc1VMSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidWxpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzSVAoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaXBcIik7XG4gICAgfVxuICAgIGdldCBpc0NJRFIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY2lkclwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQmFzZTY0KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImJhc2U2NFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQmFzZTY0dXJsKCkge1xuICAgICAgICAvLyBiYXNlNjR1cmwgZW5jb2RpbmcgaXMgYSBtb2RpZmljYXRpb24gb2YgYmFzZTY0IHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGluIFVSTHMgYW5kIGZpbGVuYW1lc1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImJhc2U2NHVybFwiKTtcbiAgICB9XG4gICAgZ2V0IG1pbkxlbmd0aCgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4TGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxufVxuWm9kU3RyaW5nLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3RyaW5nLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlID8/IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2NjQ4NC93aHktZG9lcy1tb2R1bHVzLW9wZXJhdG9yLXJldHVybi1mcmFjdGlvbmFsLW51bWJlci1pbi1qYXZhc2NyaXB0LzMxNzExMDM0IzMxNzExMDM0XG5mdW5jdGlvbiBmbG9hdFNhZmVSZW1haW5kZXIodmFsLCBzdGVwKSB7XG4gICAgY29uc3QgdmFsRGVjQ291bnQgPSAodmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBzdGVwRGVjQ291bnQgPSAoc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3QgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICAgIGNvbnN0IHZhbEludCA9IE51bWJlci5wYXJzZUludCh2YWwudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIGNvbnN0IHN0ZXBJbnQgPSBOdW1iZXIucGFyc2VJbnQoc3RlcC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgcmV0dXJuICh2YWxJbnQgJSBzdGVwSW50KSAvIDEwICoqIGRlY0NvdW50O1xufVxuZXhwb3J0IGNsYXNzIFpvZE51bWJlciBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1pbiA9IHRoaXMuZ3RlO1xuICAgICAgICB0aGlzLm1heCA9IHRoaXMubHRlO1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLm11bHRpcGxlT2Y7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IE51bWJlcihpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udW1iZXIsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJpbnRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdXRpbC5pc0ludGVnZXIoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBcImludGVnZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA8IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA8PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhID4gY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhID49IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIGlmIChmbG9hdFNhZmVSZW1haW5kZXIoaW5wdXQuZGF0YSwgY2hlY2sudmFsdWUpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImZpbml0ZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9maW5pdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGd0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZ3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2V0TGltaXQoa2luZCwgdmFsdWUsIGluY2x1c2l2ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuY2hlY2tzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImludFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25uZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtdWx0aXBsZU9mKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbml0ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImZpbml0ZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2FmZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KS5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgZ2V0IGlzSW50KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImludFwiIHx8IChjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIiAmJiB1dGlsLmlzSW50ZWdlcihjaC52YWx1ZSkpKTtcbiAgICB9XG4gICAgZ2V0IGlzRmluaXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwiZmluaXRlXCIgfHwgY2gua2luZCA9PT0gXCJpbnRcIiB8fCBjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobWluKSAmJiBOdW1iZXIuaXNGaW5pdGUobWF4KTtcbiAgICB9XG59XG5ab2ROdW1iZXIuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdW1iZXIsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQmlnSW50IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gQmlnSW50KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYmlnaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW52YWxpZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA8IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA8PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhID4gY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhID49IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJpZ2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhICUgY2hlY2sudmFsdWUgIT09IEJpZ0ludCgwKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVPZjogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIF9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5iaWdpbnQsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ucG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25uZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxufVxuWm9kQmlnSW50LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQmlnSW50LFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlID8/IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEJvb2xlYW4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCb29sZWFuKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYm9vbGVhbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5ib29sZWFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEJvb2xlYW4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQm9vbGVhbih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQm9vbGVhbixcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2REYXRlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gbmV3IERhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5kYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmRhdGUsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGlucHV0LmRhdGEuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPCBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEuZ2V0VGltZSgpID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShpbnB1dC5kYXRhLmdldFRpbWUoKSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZERhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkRhdGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogbWluRGF0ZS5nZXRUaW1lKCksXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4RGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBtYXhEYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5EYXRlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW4gIT0gbnVsbCA/IG5ldyBEYXRlKG1pbikgOiBudWxsO1xuICAgIH1cbiAgICBnZXQgbWF4RGF0ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4ICE9IG51bGwgPyBuZXcgRGF0ZShtYXgpIDogbnVsbDtcbiAgICB9XG59XG5ab2REYXRlLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERhdGUoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlIHx8IGZhbHNlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERhdGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kU3ltYm9sIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3ltYm9sKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RTeW1ib2wuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU3ltYm9sKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTeW1ib2wsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5kZWZpbmVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmRlZmluZWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5kZWZpbmVkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmRlZmluZWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTnVsbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVsbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2ROdWxsLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGwoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQW55IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHRvIHByZXZlbnQgaW5zdGFuY2VzIG9mIG90aGVyIGNsYXNzZXMgZnJvbSBleHRlbmRpbmcgWm9kQW55LiB0aGlzIGNhdXNlcyBpc3N1ZXMgd2l0aCBjYXRjaGFsbCBpbiBab2RPYmplY3QuXG4gICAgICAgIHRoaXMuX2FueSA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQW55LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEFueSh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQW55LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFVua25vd24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gcmVxdWlyZWRcbiAgICAgICAgdGhpcy5fdW5rbm93biA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5rbm93bi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmtub3duKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmtub3duLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE5ldmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmV2ZXIsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG59XG5ab2ROZXZlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROZXZlcih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmV2ZXIsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVm9pZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS52b2lkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFZvaWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVm9pZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVm9pZCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RBcnJheSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCwgc3RhdHVzIH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYuZXhhY3RMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY3R4LmRhdGEubGVuZ3RoIDwgZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRvb0JpZyB8fCB0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiB0b29CaWcgPyBab2RJc3N1ZUNvZGUudG9vX2JpZyA6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06ICh0b29TbWFsbCA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06ICh0b29CaWcgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5leGFjdExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWluTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgZGVmLm1pbkxlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluTGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluTGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPiBkZWYubWF4TGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4TGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VBc3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgICAgIH0pKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZVN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IG1pbkxlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiBtYXhMZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGV4YWN0TGVuZ3RoOiB7IHZhbHVlOiBsZW4sIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kQXJyYXkuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgbWluTGVuZ3RoOiBudWxsLFxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgICAgIGV4YWN0TGVuZ3RoOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFycmF5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnNjaGVtYS5fZGVmLFxuICAgICAgICAgICAgdHlwZTogZGVlcFBhcnRpYWxpZnkoc2NoZW1hLmVsZW1lbnQpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kVHVwbGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZFR1cGxlLmNyZWF0ZShzY2hlbWEuaXRlbXMubWFwKChpdGVtKSA9PiBkZWVwUGFydGlhbGlmeShpdGVtKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kT2JqZWN0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBJbiBtb3N0IGNhc2VzLCB0aGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgLSB1bmtub3duIHByb3BlcnRpZXMgYXJlIG5vdyBzaWxlbnRseSBzdHJpcHBlZC5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gcGFzcyB0aHJvdWdoIHVua25vd24gcHJvcGVydGllcywgdXNlIGAucGFzc3Rocm91Z2goKWAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uc3RyaWN0ID0gdGhpcy5wYXNzdGhyb3VnaDtcbiAgICAgICAgLy8gZXh0ZW5kPFxuICAgICAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlLFxuICAgICAgICAvLyAgIE5ld091dHB1dCBleHRlbmRzIHV0aWwuZmxhdHRlbjx7XG4gICAgICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBPdXRwdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX291dHB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAgICAgLy8gICAgICAgPyBPdXRwdXRba11cbiAgICAgICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAgICAgLy8gICB9PixcbiAgICAgICAgLy8gICBOZXdJbnB1dCBleHRlbmRzIHV0aWwuZmxhdHRlbjx7XG4gICAgICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBJbnB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfaW5wdXRcIl1cbiAgICAgICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAgICAgLy8gICAgICAgPyBJbnB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+XG4gICAgICAgIC8vID4oXG4gICAgICAgIC8vICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gKTogWm9kT2JqZWN0PFxuICAgICAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIEF1Z21lbnRhdGlvbj4sXG4gICAgICAgIC8vICAgVW5rbm93bktleXMsXG4gICAgICAgIC8vICAgQ2F0Y2hhbGwsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0LFxuICAgICAgICAvLyAgIE5ld0lucHV0XG4gICAgICAgIC8vID4ge1xuICAgICAgICAvLyAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgLy8gICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgLy8gICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAvLyAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgLy8gICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgfSkgYXMgYW55O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYC5leHRlbmRgIGluc3RlYWRcbiAgICAgICAgICogICovXG4gICAgICAgIHRoaXMuYXVnbWVudCA9IHRoaXMuZXh0ZW5kO1xuICAgIH1cbiAgICBfZ2V0Q2FjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVkICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IHV0aWwub2JqZWN0S2V5cyhzaGFwZSk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IHsgc2hhcGUsIGtleXMgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGtleXM6IHNoYXBlS2V5cyB9ID0gdGhpcy5fZ2V0Q2FjaGVkKCk7XG4gICAgICAgIGNvbnN0IGV4dHJhS2V5cyA9IFtdO1xuICAgICAgICBpZiAoISh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlciAmJiB0aGlzLl9kZWYudW5rbm93bktleXMgPT09IFwic3RyaXBcIikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGFwZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFwZUtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbGlkYXRvciA9IHNoYXBlW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICB2YWx1ZToga2V5VmFsaWRhdG9yLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlcikge1xuICAgICAgICAgICAgY29uc3QgdW5rbm93bktleXMgPSB0aGlzLl9kZWYudW5rbm93bktleXM7XG4gICAgICAgICAgICBpZiAodW5rbm93bktleXMgPT09IFwicGFzc3Rocm91Z2hcIikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBjdHguZGF0YVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmljdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogZXh0cmFLZXlzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaXBcIikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBab2RPYmplY3QgZXJyb3I6IGludmFsaWQgdW5rbm93bktleXMgdmFsdWUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBydW4gY2F0Y2hhbGwgdmFsaWRhdGlvblxuICAgICAgICAgICAgY29uc3QgY2F0Y2hhbGwgPSB0aGlzLl9kZWYuY2F0Y2hhbGw7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0Y2hhbGwuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkgLy8sIGN0eC5jaGlsZChrZXkpLCB2YWx1ZSwgZ2V0UGFyc2VkVHlwZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IHBhaXIuYWx3YXlzU2V0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bmNQYWlycztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHN5bmNQYWlycykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzaGFwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgIH1cbiAgICBzdHJpY3QobWVzc2FnZSkge1xuICAgICAgICBlcnJvclV0aWwuZXJyVG9PYmo7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICAgICAgLi4uKG1lc3NhZ2UgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcDogKGlzc3VlLCBjdHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRFcnJvciA9IHRoaXMuX2RlZi5lcnJvck1hcD8uKGlzc3VlLCBjdHgpLm1lc3NhZ2UgPz8gY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcInVucmVjb2duaXplZF9rZXlzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLm1lc3NhZ2UgPz8gZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge30pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RyaXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwYXNzdGhyb3VnaCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwicGFzc3Rocm91Z2hcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNvbnN0IEF1Z21lbnRGYWN0b3J5ID1cbiAgICAvLyAgIDxEZWYgZXh0ZW5kcyBab2RPYmplY3REZWY+KGRlZjogRGVmKSA9PlxuICAgIC8vICAgPEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlPihcbiAgICAvLyAgICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAvLyAgICk6IFpvZE9iamVjdDxcbiAgICAvLyAgICAgZXh0ZW5kU2hhcGU8UmV0dXJuVHlwZTxEZWZbXCJzaGFwZVwiXT4sIEF1Z21lbnRhdGlvbj4sXG4gICAgLy8gICAgIERlZltcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgICBEZWZbXCJjYXRjaGFsbFwiXVxuICAgIC8vICAgPiA9PiB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgICAuLi5kZWYsXG4gICAgLy8gICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgLy8gICAgICAgICAuLi5kZWYuc2hhcGUoKSxcbiAgICAvLyAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAvLyAgICAgICB9KSxcbiAgICAvLyAgICAgfSkgYXMgYW55O1xuICAgIC8vICAgfTtcbiAgICBleHRlbmQoYXVnbWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJpb3IgdG8gem9kQDEuMC4xMiB0aGVyZSB3YXMgYSBidWcgaW4gdGhlXG4gICAgICogaW5mZXJyZWQgdHlwZSBvZiBtZXJnZWQgb2JqZWN0cy4gUGxlYXNlXG4gICAgICogdXBncmFkZSBpZiB5b3UgYXJlIGV4cGVyaWVuY2luZyBpc3N1ZXMuXG4gICAgICovXG4gICAgbWVyZ2UobWVyZ2luZykge1xuICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgICAgICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4ubWVyZ2luZy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9XG4gICAgLy8gbWVyZ2U8XG4gICAgLy8gICBJbmNvbWluZyBleHRlbmRzIEFueVpvZE9iamVjdCxcbiAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIEluY29taW5nW1wic2hhcGVcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9vdXRwdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgLy8gICB9LFxuICAgIC8vICAgTmV3SW5wdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX2lucHV0XCJdXG4gICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH1cbiAgICAvLyA+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdLFxuICAgIC8vICAgTmV3T3V0cHV0LFxuICAgIC8vICAgTmV3SW5wdXRcbiAgICAvLyA+IHtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBzZXRLZXkoa2V5LCBzY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVnbWVudCh7IFtrZXldOiBzY2hlbWEgfSk7XG4gICAgfVxuICAgIC8vIG1lcmdlPEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0PihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogLy9ab2RPYmplY3Q8VCAmIEluY29taW5nW1wiX3NoYXBlXCJdLCBVbmtub3duS2V5cywgQ2F0Y2hhbGw+ID0gKG1lcmdpbmcpID0+IHtcbiAgICAvLyBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdXG4gICAgLy8gPiB7XG4gICAgLy8gICAvLyBjb25zdCBtZXJnZWRTaGFwZSA9IG9iamVjdFV0aWwubWVyZ2VTaGFwZXMoXG4gICAgLy8gICAvLyAgIHRoaXMuX2RlZi5zaGFwZSgpLFxuICAgIC8vICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgIC8vICAgLy8gKTtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBjYXRjaGFsbChpbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjYXRjaGFsbDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaWNrKG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKG1hc2spKSB7XG4gICAgICAgICAgICBpZiAobWFza1trZXldICYmIHRoaXMuc2hhcGVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb21pdChtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgaWYgKCFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZGVlcFBhcnRpYWwoKSB7XG4gICAgICAgIHJldHVybiBkZWVwUGFydGlhbGlmeSh0aGlzKTtcbiAgICB9XG4gICAgcGFydGlhbChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICBpZiAobWFzayAmJiAhbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IGZpZWxkU2NoZW1hLm9wdGlvbmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWlyZWQobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpIHtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld0ZpZWxkID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld0ZpZWxkIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGQgPSBuZXdGaWVsZC5fZGVmLmlubmVyVHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IG5ld0ZpZWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGtleW9mKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlWm9kRW51bSh1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpO1xuICAgIH1cbn1cblpvZE9iamVjdC5jcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LnN0cmljdENyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LmxhenljcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9kZWYub3B0aW9ucztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgaXNzdWUtZnJlZSB2YWxpZGF0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXNzdWVzIGZyb20gZGlydHkgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4ucmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIGludmFsaWRcbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gbmV3IFpvZEVycm9yKHJlc3VsdC5jdHguY29tbW9uLmlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy5tYXAoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpLnRoZW4oaGFuZGxlUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGlydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIiAmJiAhZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB7IHJlc3VsdCwgY3R4OiBjaGlsZEN0eCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzLnB1c2goY2hpbGRDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5kaXJ0eS5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5LnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gaXNzdWVzLm1hcCgoaXNzdWVzKSA9PiBuZXcgWm9kRXJyb3IoaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG59XG5ab2RVbmlvbi5jcmVhdGUgPSAodHlwZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5pb24oe1xuICAgICAgICBvcHRpb25zOiB0eXBlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2REaXNjcmltaW5hdGVkVW5pb24gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBnZXREaXNjcmltaW5hdG9yID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExhenkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5zY2hlbWEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRWZmZWN0cykge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLmlubmVyVHlwZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIFt0eXBlLnZhbHVlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGUub3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE5hdGl2ZUVudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0VmFsdWVzKHR5cGUuZW51bSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2REZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kVW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBbbnVsbCwgLi4uZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RCcmFuZGVkKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kUmVhZG9ubHkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RDYXRjaCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLl9kZWYuaW5uZXJUeXBlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59O1xuZXhwb3J0IGNsYXNzIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yID0gdGhpcy5kaXNjcmltaW5hdG9yO1xuICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yVmFsdWUgPSBjdHguZGF0YVtkaXNjcmltaW5hdG9yXTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5vcHRpb25zTWFwLmdldChkaXNjcmltaW5hdG9yVmFsdWUpO1xuICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBBcnJheS5mcm9tKHRoaXMub3B0aW9uc01hcC5rZXlzKCkpLFxuICAgICAgICAgICAgICAgIHBhdGg6IFtkaXNjcmltaW5hdG9yXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGRpc2NyaW1pbmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGlzY3JpbWluYXRvcjtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnNNYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9uc01hcDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBkaXNjcmltaW5hdGVkIHVuaW9uIHNjaGVtYS4gSXRzIGJlaGF2aW91ciBpcyB2ZXJ5IHNpbWlsYXIgdG8gdGhhdCBvZiB0aGUgbm9ybWFsIHoudW5pb24oKSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBIb3dldmVyLCBpdCBvbmx5IGFsbG93cyBhIHVuaW9uIG9mIG9iamVjdHMsIGFsbCBvZiB3aGljaCBuZWVkIHRvIHNoYXJlIGEgZGlzY3JpbWluYXRvciBwcm9wZXJ0eS4gVGhpcyBwcm9wZXJ0eSBtdXN0XG4gICAgICogaGF2ZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgZWFjaCBvYmplY3QgaW4gdGhlIHVuaW9uLlxuICAgICAqIEBwYXJhbSBkaXNjcmltaW5hdG9yIHRoZSBuYW1lIG9mIHRoZSBkaXNjcmltaW5hdG9yIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHR5cGVzIGFuIGFycmF5IG9mIG9iamVjdCBzY2hlbWFzXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUoZGlzY3JpbWluYXRvciwgb3B0aW9ucywgcGFyYW1zKSB7XG4gICAgICAgIC8vIEdldCBhbGwgdGhlIHZhbGlkIGRpc2NyaW1pbmF0b3IgdmFsdWVzXG4gICAgICAgIGNvbnN0IG9wdGlvbnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yVmFsdWVzID0gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNoYXBlW2Rpc2NyaW1pbmF0b3JdKTtcbiAgICAgICAgICAgIGlmICghZGlzY3JpbWluYXRvclZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZGlzY3JpbWluYXRvciB2YWx1ZSBmb3Iga2V5IFxcYCR7ZGlzY3JpbWluYXRvcn1cXGAgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIGFsbCBzY2hlbWEgb3B0aW9uc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkaXNjcmltaW5hdG9yVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpc2NyaW1pbmF0b3IgcHJvcGVydHkgJHtTdHJpbmcoZGlzY3JpbWluYXRvcil9IGhhcyBkdXBsaWNhdGUgdmFsdWUgJHtTdHJpbmcodmFsdWUpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zTWFwLnNldCh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2REaXNjcmltaW5hdGVkVW5pb24oe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnNNYXAsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1lcmdlVmFsdWVzKGEsIGIpIHtcbiAgICBjb25zdCBhVHlwZSA9IGdldFBhcnNlZFR5cGUoYSk7XG4gICAgY29uc3QgYlR5cGUgPSBnZXRQYXJzZWRUeXBlKGIpO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgY29uc3QgYktleXMgPSB1dGlsLm9iamVjdEtleXMoYik7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSB1dGlsLm9iamVjdEtleXMoYSkuZmlsdGVyKChrZXkpID0+IGJLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEpO1xuICAgICAgICBjb25zdCBuZXdPYmogPSB7IC4uLmEsIC4uLmIgfTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcmVkS2V5cykge1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFsdWUgPSBtZXJnZVZhbHVlcyhhW2tleV0sIGJba2V5XSk7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IHNoYXJlZFZhbHVlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld09iaiB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5hcnJheSAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BID0gYVtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBpdGVtQiA9IGJbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFsdWUgPSBtZXJnZVZhbHVlcyhpdGVtQSwgaXRlbUIpO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzaGFyZWRWYWx1ZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3QXJyYXkgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmICthID09PSArYikge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogYSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZEludGVyc2VjdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBoYW5kbGVQYXJzZWQgPSAocGFyc2VkTGVmdCwgcGFyc2VkUmlnaHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fib3J0ZWQocGFyc2VkTGVmdCkgfHwgaXNBYm9ydGVkKHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VWYWx1ZXMocGFyc2VkTGVmdC52YWx1ZSwgcGFyc2VkUmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFtZXJnZWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlydHkocGFyc2VkTGVmdCkgfHwgaXNEaXJ0eShwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogbWVyZ2VkLmRhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLmxlZnQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKS50aGVuKChbbGVmdCwgcmlnaHRdKSA9PiBoYW5kbGVQYXJzZWQobGVmdCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQYXJzZWQodGhpcy5fZGVmLmxlZnQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSwgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSA9IChsZWZ0LCByaWdodCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RJbnRlcnNlY3Rpb24oe1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kSW50ZXJzZWN0aW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gdHlwZSBab2RUdXBsZUl0ZW1zID0gW1pvZFR5cGVBbnksIC4uLlpvZFR5cGVBbnlbXV07XG5leHBvcnQgY2xhc3MgWm9kVHVwbGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgbWluaW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdCA9IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICBpZiAoIXJlc3QgJiYgY3R4LmRhdGEubGVuZ3RoID4gdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbLi4uY3R4LmRhdGFdXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuX2RlZi5pdGVtc1tpdGVtSW5kZXhdIHx8IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gc2NoZW1hLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGl0ZW1JbmRleCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4gISF4KTsgLy8gZmlsdGVyIG51bGxzXG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoaXRlbXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIGl0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaXRlbXM7XG4gICAgfVxuICAgIHJlc3QocmVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJlc3QsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblpvZFR1cGxlLmNyZWF0ZSA9IChzY2hlbWFzLCBwYXJhbXMpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NoZW1hcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSBvZiBzY2hlbWFzIHRvIHoudHVwbGUoWyAuLi4gXSlcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICBpdGVtczogc2NoZW1hcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RUdXBsZSxcbiAgICAgICAgcmVzdDogbnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RSZWNvcmQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBjdHguZGF0YVtrZXldLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuICAgICAgICBpZiAoc2Vjb25kIGluc3RhbmNlb2YgWm9kVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAgICAgIGtleVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogc2Vjb25kLFxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcmQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAga2V5VHlwZTogWm9kU3RyaW5nLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhzZWNvbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kTWFwIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IGtleVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgIH1cbiAgICBnZXQgdmFsdWVTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm1hcCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5tYXAsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGNvbnN0IHBhaXJzID0gWy4uLmN0eC5kYXRhLmVudHJpZXMoKV0ubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIFtpbmRleCwgXCJrZXlcIl0pKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBbaW5kZXgsIFwidmFsdWVcIl0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZE1hcC5jcmVhdGUgPSAoa2V5VHlwZSwgdmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE1hcCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAga2V5VHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RNYXAsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kU2V0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zZXQpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc2V0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoZGVmLm1pblNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplIDwgZGVmLm1pblNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pblNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluU2l6ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4U2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPiBkZWYubWF4U2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heFNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4U2l6ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGZ1bmN0aW9uIGZpbmFsaXplU2V0KGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgcGFyc2VkU2V0LmFkZChlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcGFyc2VkU2V0IH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbLi4uY3R4LmRhdGEudmFsdWVzKCldLm1hcCgoaXRlbSwgaSkgPT4gdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZWxlbWVudHMpLnRoZW4oKGVsZW1lbnRzKSA9PiBmaW5hbGl6ZVNldChlbGVtZW50cykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsaXplU2V0KGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtaW4obWluU2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5TaXplOiB7IHZhbHVlOiBtaW5TaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhTaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1heFNpemU6IHsgdmFsdWU6IG1heFNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2l6ZShzaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbihzaXplLCBtZXNzYWdlKS5tYXgoc2l6ZSwgbWVzc2FnZSk7XG4gICAgfVxuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblpvZFNldC5jcmVhdGUgPSAodmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAgbWluU2l6ZTogbnVsbCxcbiAgICAgICAgbWF4U2l6ZTogbnVsbCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTZXQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRnVuY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRoaXMuaW1wbGVtZW50O1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5mdW5jdGlvbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBcmdzSXNzdWUoYXJncywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIGN0eC5zY2hlbWFFcnJvck1hcCwgZ2V0RXJyb3JNYXAoKSwgZGVmYXVsdEVycm9yTWFwXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlUmV0dXJuc0lzc3VlKHJldHVybnMsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXR1cm5zLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW2N0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCBjdHguc2NoZW1hRXJyb3JNYXAsIGdldEVycm9yTWFwKCksIGRlZmF1bHRFcnJvck1hcF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVHlwZUVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAgfTtcbiAgICAgICAgY29uc3QgZm4gPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5yZXR1cm5zIGluc3RhbmNlb2YgWm9kUHJvbWlzZSkge1xuICAgICAgICAgICAgLy8gV291bGQgbG92ZSBhIHdheSB0byBhdm9pZCBkaXNhYmxpbmcgdGhpcyBydWxlLCBidXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gYW4gYWxpYXMgKHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHdhcyB3aGF0IGNhdXNlZCAyNjUxKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9LKGFzeW5jIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBhd2FpdCBtZS5fZGVmLmFyZ3MucGFyc2VBc3luYyhhcmdzLCBwYXJhbXMpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VBcmdzSXNzdWUoYXJncywgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBwYXJzZWRBcmdzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gYXdhaXQgbWUuX2RlZi5yZXR1cm5zLl9kZWYudHlwZVxuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhyZXN1bHQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gbWUuX2RlZi5hcmdzLnNhZmVQYXJzZShhcmdzLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkQXJncy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBab2RFcnJvcihbbWFrZUFyZ3NJc3N1ZShhcmdzLCBwYXJzZWRBcmdzLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBwYXJzZWRBcmdzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJldHVybnMgPSBtZS5fZGVmLnJldHVybnMuc2FmZVBhcnNlKHJlc3VsdCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFJldHVybnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBwYXJzZWRSZXR1cm5zLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucy5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1ldGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5hcmdzO1xuICAgIH1cbiAgICByZXR1cm5UeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnJldHVybnM7XG4gICAgfVxuICAgIGFyZ3MoLi4uaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBhcmdzOiBab2RUdXBsZS5jcmVhdGUoaXRlbXMpLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm5zKHJldHVyblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5UeXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdHJpY3RJbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYXJncywgcmV0dXJucywgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgYXJnczogKGFyZ3MgPyBhcmdzIDogWm9kVHVwbGUuY3JlYXRlKFtdKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpKSxcbiAgICAgICAgICAgIHJldHVybnM6IHJldHVybnMgfHwgWm9kVW5rbm93bi5jcmVhdGUoKSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRnVuY3Rpb24sXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RMYXp5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBsYXp5U2NoZW1hID0gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgICAgICByZXR1cm4gbGF6eVNjaGVtYS5fcGFyc2UoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgIH1cbn1cblpvZExhenkuY3JlYXRlID0gKGdldHRlciwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMYXp5KHtcbiAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGF6eSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RMaXRlcmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5kYXRhICE9PSB0aGlzLl9kZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB0aGlzLl9kZWYudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWU7XG4gICAgfVxufVxuWm9kTGl0ZXJhbC5jcmVhdGUgPSAodmFsdWUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGl0ZXJhbCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMaXRlcmFsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gY3JlYXRlWm9kRW51bSh2YWx1ZXMsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kRW51bSh7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5leHBvcnQgY2xhc3MgWm9kRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LmRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZSA9IG5ldyBTZXQodGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgVmFsdWVzKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZ2V0IEVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBleHRyYWN0KHZhbHVlcywgbmV3RGVmID0gdGhpcy5fZGVmKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh2YWx1ZXMsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIC4uLm5ld0RlZixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGV4Y2x1ZGUodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdCkgPT4gIXZhbHVlcy5pbmNsdWRlcyhvcHQpKSwge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RFbnVtLmNyZWF0ZSA9IGNyZWF0ZVpvZEVudW07XG5leHBvcnQgY2xhc3MgWm9kTmF0aXZlRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbnVtVmFsdWVzID0gdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZyAmJiBjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBuZXcgU2V0KHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzKHRoaXMuX2RlZi52YWx1ZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlLmhhcyhpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBlbnVtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG59XG5ab2ROYXRpdmVFbnVtLmNyZWF0ZSA9ICh2YWx1ZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmF0aXZlRW51bSh7XG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hdGl2ZUVudW0sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kUHJvbWlzZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmIGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNpZmllZCA9IGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnByb21pc2UgPyBjdHguZGF0YSA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEVmZmVjdHMgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBpbm5lclR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hO1xuICAgIH1cbiAgICBzb3VyY2VUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYS5fZGVmLnR5cGVOYW1lID09PSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0c1xuICAgICAgICAgICAgPyB0aGlzLl9kZWYuc2NoZW1hLnNvdXJjZVR5cGUoKVxuICAgICAgICAgICAgOiB0aGlzLl9kZWYuc2NoZW1hO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gdGhpcy5fZGVmLmVmZmVjdCB8fCBudWxsO1xuICAgICAgICBjb25zdCBjaGVja0N0eCA9IHtcbiAgICAgICAgICAgIGFkZElzc3VlOiAoYXJnKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBhcmcpO1xuICAgICAgICAgICAgICAgIGlmIChhcmcuZmF0YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eC5wYXRoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tDdHguYWRkSXNzdWUgPSBjaGVja0N0eC5hZGRJc3N1ZS5iaW5kKGNoZWNrQ3R4KTtcbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInByZXByb2Nlc3NcIikge1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gZWZmZWN0LnRyYW5zZm9ybShjdHguZGF0YSwgY2hlY2tDdHgpO1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3NlZCkudGhlbihhc3luYyAocHJvY2Vzc2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJyZWZpbmVtZW50XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGVSZWZpbmVtZW50ID0gKGFjYykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVmZmVjdC5yZWZpbmVtZW50KGFjYywgY2hlY2tDdHgpO1xuICAgICAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXN5bmMgcmVmaW5lbWVudCBlbmNvdW50ZXJlZCBkdXJpbmcgc3luY2hyb25vdXMgcGFyc2Ugb3BlcmF0aW9uLiBVc2UgLnBhcnNlQXN5bmMgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB2YWx1ZSBpcyBpZ25vcmVkXG4gICAgICAgICAgICAgICAgZXhlY3V0ZVJlZmluZW1lbnQoaW5uZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXN5bmNocm9ub3VzIHRyYW5zZm9ybSBlbmNvdW50ZXJlZCBkdXJpbmcgc3luY2hyb25vdXMgcGFyc2Ugb3BlcmF0aW9uLiBVc2UgLnBhcnNlQXN5bmMgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiByZXN1bHQgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChiYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpKS50aGVuKChyZXN1bHQpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGVmZmVjdCk7XG4gICAgfVxufVxuWm9kRWZmZWN0cy5jcmVhdGUgPSAoc2NoZW1hLCBlZmZlY3QsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICBlZmZlY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzID0gKHByZXByb2Nlc3MsIHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJwcmVwcm9jZXNzXCIsIHRyYW5zZm9ybTogcHJlcHJvY2VzcyB9LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgeyBab2RFZmZlY3RzIGFzIFpvZFRyYW5zZm9ybWVyIH07XG5leHBvcnQgY2xhc3MgWm9kT3B0aW9uYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kT3B0aW9uYWwuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT3B0aW9uYWwoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT3B0aW9uYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTnVsbGFibGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5udWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gT0sobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2ROdWxsYWJsZS5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdWxsYWJsZSh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdWxsYWJsZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2REZWZhdWx0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBsZXQgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fZGVmLmRlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZURlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZERlZmF1bHQuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHR5cGVvZiBwYXJhbXMuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zLmRlZmF1bHQgOiAoKSA9PiBwYXJhbXMuZGVmYXVsdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RDYXRjaCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgLy8gbmV3Q3R4IGlzIHVzZWQgdG8gbm90IGNvbGxlY3QgaXNzdWVzIGZyb20gaW5uZXIgdHlwZXMgaW4gY3R4XG4gICAgICAgIGNvbnN0IG5ld0N0eCA9IHtcbiAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGE6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgcGF0aDogbmV3Q3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IHtcbiAgICAgICAgICAgICAgICAuLi5uZXdDdHgsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwidmFsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGVmLmNhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RFcnJvcihuZXdDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RFcnJvcihuZXdDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2F0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZENhdGNoLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZENhdGNoKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICBjYXRjaFZhbHVlOiB0eXBlb2YgcGFyYW1zLmNhdGNoID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMuY2F0Y2ggOiAoKSA9PiBwYXJhbXMuY2F0Y2gsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTmFOIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubmFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5hbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbn1cblpvZE5hTi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYU4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hTixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBCUkFORCA9IFN5bWJvbChcInpvZF9icmFuZFwiKTtcbmV4cG9ydCBjbGFzcyBab2RCcmFuZGVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kUGlwZWxpbmUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLmluLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkoaW5SZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IHRoaXMuX2RlZi5pbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZGlydHlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RQaXBlbGluZSh7XG4gICAgICAgICAgICBpbjogYSxcbiAgICAgICAgICAgIG91dDogYixcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUGlwZWxpbmUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RSZWFkb25seSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGNvbnN0IGZyZWV6ZSA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBPYmplY3QuZnJlZXplKGRhdGEudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBpc0FzeW5jKHJlc3VsdCkgPyByZXN1bHQudGhlbigoZGF0YSkgPT4gZnJlZXplKGRhdGEpKSA6IGZyZWV6ZShyZXN1bHQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZFJlYWRvbmx5LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFJlYWRvbmx5KHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlYWRvbmx5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIHouY3VzdG9tICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gY2xlYW5QYXJhbXMocGFyYW1zLCBkYXRhKSB7XG4gICAgY29uc3QgcCA9IHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcyhkYXRhKSA6IHR5cGVvZiBwYXJhbXMgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHBhcmFtcyB9IDogcGFyYW1zO1xuICAgIGNvbnN0IHAyID0gdHlwZW9mIHAgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHAgfSA6IHA7XG4gICAgcmV0dXJuIHAyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbShjaGVjaywgX3BhcmFtcyA9IHt9LCBcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqXG4gKiBQYXNzIGBmYXRhbGAgaW50byB0aGUgcGFyYW1zIG9iamVjdCBpbnN0ZWFkOlxuICpcbiAqIGBgYHRzXG4gKiB6LnN0cmluZygpLmN1c3RvbSgodmFsKSA9PiB2YWwubGVuZ3RoID4gNSwgeyBmYXRhbDogZmFsc2UgfSlcbiAqIGBgYFxuICpcbiAqL1xuZmF0YWwpIHtcbiAgICBpZiAoY2hlY2spXG4gICAgICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCkuc3VwZXJSZWZpbmUoKGRhdGEsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgciA9IGNoZWNrKGRhdGEpO1xuICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gcGFyYW1zLmZhdGFsID8/IGZhdGFsID8/IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wYXJhbXMsIGZhdGFsOiBfZmF0YWwgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IF9mYXRhbCA9IHBhcmFtcy5mYXRhbCA/PyBmYXRhbCA/PyB0cnVlO1xuICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKTtcbn1cbmV4cG9ydCB7IFpvZFR5cGUgYXMgU2NoZW1hLCBab2RUeXBlIGFzIFpvZFNjaGVtYSB9O1xuZXhwb3J0IGNvbnN0IGxhdGUgPSB7XG4gICAgb2JqZWN0OiBab2RPYmplY3QubGF6eWNyZWF0ZSxcbn07XG5leHBvcnQgdmFyIFpvZEZpcnN0UGFydHlUeXBlS2luZDtcbihmdW5jdGlvbiAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kKSB7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3RyaW5nXCJdID0gXCJab2RTdHJpbmdcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdW1iZXJcIl0gPSBcIlpvZE51bWJlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hTlwiXSA9IFwiWm9kTmFOXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQmlnSW50XCJdID0gXCJab2RCaWdJbnRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCb29sZWFuXCJdID0gXCJab2RCb29sZWFuXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGF0ZVwiXSA9IFwiWm9kRGF0ZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN5bWJvbFwiXSA9IFwiWm9kU3ltYm9sXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5kZWZpbmVkXCJdID0gXCJab2RVbmRlZmluZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsXCJdID0gXCJab2ROdWxsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQW55XCJdID0gXCJab2RBbnlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmtub3duXCJdID0gXCJab2RVbmtub3duXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmV2ZXJcIl0gPSBcIlpvZE5ldmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVm9pZFwiXSA9IFwiWm9kVm9pZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFycmF5XCJdID0gXCJab2RBcnJheVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9iamVjdFwiXSA9IFwiWm9kT2JqZWN0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5pb25cIl0gPSBcIlpvZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCJdID0gXCJab2REaXNjcmltaW5hdGVkVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RJbnRlcnNlY3Rpb25cIl0gPSBcIlpvZEludGVyc2VjdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFR1cGxlXCJdID0gXCJab2RUdXBsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFJlY29yZFwiXSA9IFwiWm9kUmVjb3JkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTWFwXCJdID0gXCJab2RNYXBcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTZXRcIl0gPSBcIlpvZFNldFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEZ1bmN0aW9uXCJdID0gXCJab2RGdW5jdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExhenlcIl0gPSBcIlpvZExhenlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMaXRlcmFsXCJdID0gXCJab2RMaXRlcmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRW51bVwiXSA9IFwiWm9kRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVmZmVjdHNcIl0gPSBcIlpvZEVmZmVjdHNcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYXRpdmVFbnVtXCJdID0gXCJab2ROYXRpdmVFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT3B0aW9uYWxcIl0gPSBcIlpvZE9wdGlvbmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbGFibGVcIl0gPSBcIlpvZE51bGxhYmxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGVmYXVsdFwiXSA9IFwiWm9kRGVmYXVsdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZENhdGNoXCJdID0gXCJab2RDYXRjaFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFByb21pc2VcIl0gPSBcIlpvZFByb21pc2VcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCcmFuZGVkXCJdID0gXCJab2RCcmFuZGVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUGlwZWxpbmVcIl0gPSBcIlpvZFBpcGVsaW5lXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVhZG9ubHlcIl0gPSBcIlpvZFJlYWRvbmx5XCI7XG59KShab2RGaXJzdFBhcnR5VHlwZUtpbmQgfHwgKFpvZEZpcnN0UGFydHlUeXBlS2luZCA9IHt9KSk7XG4vLyByZXF1aXJlcyBUUyA0LjQrXG5jbGFzcyBDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoLi4uXykgeyB9XG59XG5jb25zdCBpbnN0YW5jZU9mVHlwZSA9IChcbi8vIGNvbnN0IGluc3RhbmNlT2ZUeXBlID0gPFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuY2xzLCBwYXJhbXMgPSB7XG4gICAgbWVzc2FnZTogYElucHV0IG5vdCBpbnN0YW5jZSBvZiAke2Nscy5uYW1lfWAsXG59KSA9PiBjdXN0b20oKGRhdGEpID0+IGRhdGEgaW5zdGFuY2VvZiBjbHMsIHBhcmFtcyk7XG5jb25zdCBzdHJpbmdUeXBlID0gWm9kU3RyaW5nLmNyZWF0ZTtcbmNvbnN0IG51bWJlclR5cGUgPSBab2ROdW1iZXIuY3JlYXRlO1xuY29uc3QgbmFuVHlwZSA9IFpvZE5hTi5jcmVhdGU7XG5jb25zdCBiaWdJbnRUeXBlID0gWm9kQmlnSW50LmNyZWF0ZTtcbmNvbnN0IGJvb2xlYW5UeXBlID0gWm9kQm9vbGVhbi5jcmVhdGU7XG5jb25zdCBkYXRlVHlwZSA9IFpvZERhdGUuY3JlYXRlO1xuY29uc3Qgc3ltYm9sVHlwZSA9IFpvZFN5bWJvbC5jcmVhdGU7XG5jb25zdCB1bmRlZmluZWRUeXBlID0gWm9kVW5kZWZpbmVkLmNyZWF0ZTtcbmNvbnN0IG51bGxUeXBlID0gWm9kTnVsbC5jcmVhdGU7XG5jb25zdCBhbnlUeXBlID0gWm9kQW55LmNyZWF0ZTtcbmNvbnN0IHVua25vd25UeXBlID0gWm9kVW5rbm93bi5jcmVhdGU7XG5jb25zdCBuZXZlclR5cGUgPSBab2ROZXZlci5jcmVhdGU7XG5jb25zdCB2b2lkVHlwZSA9IFpvZFZvaWQuY3JlYXRlO1xuY29uc3QgYXJyYXlUeXBlID0gWm9kQXJyYXkuY3JlYXRlO1xuY29uc3Qgb2JqZWN0VHlwZSA9IFpvZE9iamVjdC5jcmVhdGU7XG5jb25zdCBzdHJpY3RPYmplY3RUeXBlID0gWm9kT2JqZWN0LnN0cmljdENyZWF0ZTtcbmNvbnN0IHVuaW9uVHlwZSA9IFpvZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgPSBab2REaXNjcmltaW5hdGVkVW5pb24uY3JlYXRlO1xuY29uc3QgaW50ZXJzZWN0aW9uVHlwZSA9IFpvZEludGVyc2VjdGlvbi5jcmVhdGU7XG5jb25zdCB0dXBsZVR5cGUgPSBab2RUdXBsZS5jcmVhdGU7XG5jb25zdCByZWNvcmRUeXBlID0gWm9kUmVjb3JkLmNyZWF0ZTtcbmNvbnN0IG1hcFR5cGUgPSBab2RNYXAuY3JlYXRlO1xuY29uc3Qgc2V0VHlwZSA9IFpvZFNldC5jcmVhdGU7XG5jb25zdCBmdW5jdGlvblR5cGUgPSBab2RGdW5jdGlvbi5jcmVhdGU7XG5jb25zdCBsYXp5VHlwZSA9IFpvZExhenkuY3JlYXRlO1xuY29uc3QgbGl0ZXJhbFR5cGUgPSBab2RMaXRlcmFsLmNyZWF0ZTtcbmNvbnN0IGVudW1UeXBlID0gWm9kRW51bS5jcmVhdGU7XG5jb25zdCBuYXRpdmVFbnVtVHlwZSA9IFpvZE5hdGl2ZUVudW0uY3JlYXRlO1xuY29uc3QgcHJvbWlzZVR5cGUgPSBab2RQcm9taXNlLmNyZWF0ZTtcbmNvbnN0IGVmZmVjdHNUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGU7XG5jb25zdCBvcHRpb25hbFR5cGUgPSBab2RPcHRpb25hbC5jcmVhdGU7XG5jb25zdCBudWxsYWJsZVR5cGUgPSBab2ROdWxsYWJsZS5jcmVhdGU7XG5jb25zdCBwcmVwcm9jZXNzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3M7XG5jb25zdCBwaXBlbGluZVR5cGUgPSBab2RQaXBlbGluZS5jcmVhdGU7XG5jb25zdCBvc3RyaW5nID0gKCkgPT4gc3RyaW5nVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvbnVtYmVyID0gKCkgPT4gbnVtYmVyVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvYm9vbGVhbiA9ICgpID0+IGJvb2xlYW5UeXBlKCkub3B0aW9uYWwoKTtcbmV4cG9ydCBjb25zdCBjb2VyY2UgPSB7XG4gICAgc3RyaW5nOiAoKGFyZykgPT4gWm9kU3RyaW5nLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBudW1iZXI6ICgoYXJnKSA9PiBab2ROdW1iZXIuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGJvb2xlYW46ICgoYXJnKSA9PiBab2RCb29sZWFuLmNyZWF0ZSh7XG4gICAgICAgIC4uLmFyZyxcbiAgICAgICAgY29lcmNlOiB0cnVlLFxuICAgIH0pKSxcbiAgICBiaWdpbnQ6ICgoYXJnKSA9PiBab2RCaWdJbnQuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGRhdGU6ICgoYXJnKSA9PiBab2REYXRlLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbn07XG5leHBvcnQgeyBhbnlUeXBlIGFzIGFueSwgYXJyYXlUeXBlIGFzIGFycmF5LCBiaWdJbnRUeXBlIGFzIGJpZ2ludCwgYm9vbGVhblR5cGUgYXMgYm9vbGVhbiwgZGF0ZVR5cGUgYXMgZGF0ZSwgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSBhcyBkaXNjcmltaW5hdGVkVW5pb24sIGVmZmVjdHNUeXBlIGFzIGVmZmVjdCwgZW51bVR5cGUgYXMgZW51bSwgZnVuY3Rpb25UeXBlIGFzIGZ1bmN0aW9uLCBpbnN0YW5jZU9mVHlwZSBhcyBpbnN0YW5jZW9mLCBpbnRlcnNlY3Rpb25UeXBlIGFzIGludGVyc2VjdGlvbiwgbGF6eVR5cGUgYXMgbGF6eSwgbGl0ZXJhbFR5cGUgYXMgbGl0ZXJhbCwgbWFwVHlwZSBhcyBtYXAsIG5hblR5cGUgYXMgbmFuLCBuYXRpdmVFbnVtVHlwZSBhcyBuYXRpdmVFbnVtLCBuZXZlclR5cGUgYXMgbmV2ZXIsIG51bGxUeXBlIGFzIG51bGwsIG51bGxhYmxlVHlwZSBhcyBudWxsYWJsZSwgbnVtYmVyVHlwZSBhcyBudW1iZXIsIG9iamVjdFR5cGUgYXMgb2JqZWN0LCBvYm9vbGVhbiwgb251bWJlciwgb3B0aW9uYWxUeXBlIGFzIG9wdGlvbmFsLCBvc3RyaW5nLCBwaXBlbGluZVR5cGUgYXMgcGlwZWxpbmUsIHByZXByb2Nlc3NUeXBlIGFzIHByZXByb2Nlc3MsIHByb21pc2VUeXBlIGFzIHByb21pc2UsIHJlY29yZFR5cGUgYXMgcmVjb3JkLCBzZXRUeXBlIGFzIHNldCwgc3RyaWN0T2JqZWN0VHlwZSBhcyBzdHJpY3RPYmplY3QsIHN0cmluZ1R5cGUgYXMgc3RyaW5nLCBzeW1ib2xUeXBlIGFzIHN5bWJvbCwgZWZmZWN0c1R5cGUgYXMgdHJhbnNmb3JtZXIsIHR1cGxlVHlwZSBhcyB0dXBsZSwgdW5kZWZpbmVkVHlwZSBhcyB1bmRlZmluZWQsIHVuaW9uVHlwZSBhcyB1bmlvbiwgdW5rbm93blR5cGUgYXMgdW5rbm93biwgdm9pZFR5cGUgYXMgdm9pZCwgfTtcbmV4cG9ydCBjb25zdCBORVZFUiA9IElOVkFMSUQ7XG4iLCIvKipcbiAqIENhbG1XZWIgU2hhcmVkIFR5cGVzIGFuZCBTY2hlbWFzXG4gKlxuICogQ29yZSBpbnRlcmZhY2VzIGFuZCBab2QgdmFsaWRhdGlvbiBmb3IgdGhlIENhbG1XZWIgY29udGVudCBmaXJld2FsbCBleHRlbnNpb24uXG4gKi9cbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUHJvY2Vzc2luZyAmIEFjdGlvbiBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdNb2RlU2NoZW1hID0gei5lbnVtKFsnbG9jYWxfcnVsZXMnLCAnYnlva19sbG0nLCAnaG9zdGVkX2xsbSddKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX09QRU5ST1VURVJfTU9ERUwgPSAnb3BlbnJvdXRlci9mcmVlJztcbmV4cG9ydCBjb25zdCBPUEVOUk9VVEVSX0VORFBPSU5UID0gJ2h0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvdjEvY2hhdC9jb21wbGV0aW9ucyc7XG5leHBvcnQgY29uc3QgQUlfTU9ERUxTID0gW1xuICAgIHsgaWQ6ICdvcGVucm91dGVyL2ZyZWUnLCBsYWJlbDogJ0ZyZWUgUm91dGVyIChBdXRvKScsIGZyZWU6IHRydWUsIHJlY29tbWVuZGVkOiB0cnVlIH0sXG5dO1xuZXhwb3J0IGNvbnN0IEFjdGlvbkRlY2lzaW9uU2NoZW1hID0gei5lbnVtKFsnc2hvdycsICdibHVyJywgJ2hpZGUnLCAnbmV1dHJhbGl6ZScsICdjb2xsYXBzZScsICdyZWJ1aWxkJ10pO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGVudCBVbml0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgQ29udGVudFVuaXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCksXG4gICAgc2l0ZTogei5zdHJpbmcoKSxcbiAgICBmaW5nZXJwcmludDogei5zdHJpbmcoKSxcbiAgICBzb3VyY2VOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgdGl0bGU6IHouc3RyaW5nKCksXG4gICAgbWV0YWRhdGE6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gICAgaXNOZXc6IHouYm9vbGVhbigpLFxuICAgIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLFxufSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGFzc2lmaWNhdGlvbiBSZXN1bHRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBDbGFzc2lmaWNhdGlvblJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBkZWNpc2lvbjogQWN0aW9uRGVjaXNpb25TY2hlbWEsXG4gICAgY29uZmlkZW5jZTogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLFxuICAgIHJlYXNvbjogei5zdHJpbmcoKSxcbiAgICBuZXV0cmFsaXplZFRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVXNlciBSdWxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IFByZXNldFNlbGVjdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBwb2xpdGljczogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gICAgcmFnZWJhaXQ6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICAgIHNwb2lsZXJzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgICBjbGlja2JhaXQ6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxufSk7XG5leHBvcnQgY29uc3QgVXNlclJ1bGVzU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGJsb2NrbGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGJsb2NrbGlzdEtleXdvcmRzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGFsbG93bGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGFsbG93bGlzdEtleXdvcmRzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIHByZXNldHM6IFByZXNldFNlbGVjdGlvblNjaGVtYS5kZWZhdWx0KHtcbiAgICAgICAgcG9saXRpY3M6IGZhbHNlLFxuICAgICAgICByYWdlYmFpdDogZmFsc2UsXG4gICAgICAgIHNwb2lsZXJzOiBmYWxzZSxcbiAgICAgICAgY2xpY2tiYWl0OiBmYWxzZSxcbiAgICB9KSxcbn0pO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTmV1dHJhbGl6YXRpb24gU2V0dGluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBOZXV0cmFsaXphdGlvbk1vZGVTY2hlbWEgPSB6LmVudW0oWydsaWdodCcsICdtZWRpdW0nLCAnc3RyaWN0J10pO1xuZXhwb3J0IGNvbnN0IE5ldXRyYWxpemF0aW9uU2V0dGluZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgZW5hYmxlZDogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBtb2RlOiBOZXV0cmFsaXphdGlvbk1vZGVTY2hlbWEuZGVmYXVsdCgnbWVkaXVtJyksXG4gICAgc2hvd0luZGljYXRvcjogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBzaG93RGlmZk9uSG92ZXI6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgZXhjbHVkZURvbWFpbnM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG59KTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TmV1dHJhbGl6YXRpb25TZXR0aW5ncyA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIG1vZGU6ICdtZWRpdW0nLFxuICAgIHNob3dJbmRpY2F0b3I6IHRydWUsXG4gICAgc2hvd0RpZmZPbkhvdmVyOiB0cnVlLFxuICAgIGV4Y2x1ZGVEb21haW5zOiBbXSxcbn07XG5leHBvcnQgY29uc3QgUmVhZGVyU2V0dGluZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgZW5hYmxlZDogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBkZWZhdWx0TGF5b3V0OiB6LnN0cmluZygpLmRlZmF1bHQoJ2F1dG8nKSxcbiAgICBkZWZhdWx0VGhlbWU6IHouc3RyaW5nKCkuZGVmYXVsdCgnZGVmYXVsdCcpLFxuICAgIGF1dG9PcGVuOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHRleHRPbmx5OiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGZvbnQ6IHouc3RyaW5nKCkuZGVmYXVsdCgnSW50ZXInKSxcbiAgICBmb250U2l6ZTogei5zdHJpbmcoKS5kZWZhdWx0KCcxN3B4JyksXG4gICAgc2hvd0luQ29udGV4dE1lbnU6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgYXBpRW5kcG9pbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBhcGlLZXk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRSZWFkZXJTZXR0aW5ncyA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGRlZmF1bHRMYXlvdXQ6ICdhdXRvJyxcbiAgICBkZWZhdWx0VGhlbWU6ICdkZWZhdWx0JyxcbiAgICBhdXRvT3BlbjogdHJ1ZSxcbiAgICB0ZXh0T25seTogdHJ1ZSxcbiAgICBmb250OiAnSW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgc2hvd0luQ29udGV4dE1lbnU6IHRydWUsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVkaWEgRmlsdGVyIFNldHRpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgTWVkaWFGaWx0ZXJNb2RlU2NoZW1hID0gei5lbnVtKFsnb2ZmJywgJ2JsdXInLCAnaGlkZSddKTtcbmV4cG9ydCBjb25zdCBNZWRpYUZpbHRlclNldHRpbmdzU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgbW9kZTogTWVkaWFGaWx0ZXJNb2RlU2NoZW1hLmRlZmF1bHQoJ2JsdXInKSxcbiAgICBibHVyVGhyZXNob2xkOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSkuZGVmYXVsdCgwLjUpLFxuICAgIGhpZGVUaHJlc2hvbGQ6IHoubnVtYmVyKCkubWluKDApLm1heCgxKS5kZWZhdWx0KDAuOCksXG4gICAgYW5hbHl6ZUFsdFRleHQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgYW5hbHl6ZVRodW1ibmFpbHM6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgc2hvd1RvZ2dsZTogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICByZXZlYWxPbkhvdmVyOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdE1lZGlhRmlsdGVyU2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBtb2RlOiAnYmx1cicsXG4gICAgYmx1clRocmVzaG9sZDogMC41LFxuICAgIGhpZGVUaHJlc2hvbGQ6IDAuOCxcbiAgICBhbmFseXplQWx0VGV4dDogdHJ1ZSxcbiAgICBhbmFseXplVGh1bWJuYWlsczogdHJ1ZSxcbiAgICBzaG93VG9nZ2xlOiB0cnVlLFxuICAgIHJldmVhbE9uSG92ZXI6IHRydWUsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2l0ZSBGaWx0ZXIgU2V0dGluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBTaXRlQ2F0ZWdvcnlTY2hlbWEgPSB6LmVudW0oW1xuICAgICdzb2NpYWxfbWVkaWEnLFxuICAgICdjb250ZW50X2Zhcm1zJyxcbiAgICAnZ2FtYmxpbmcnLFxuICAgICdhZHVsdCcsXG4gICAgJ3BpcmFjeScsXG4gICAgJ21hbHdhcmUnLFxuICAgICdzcGFtJyxcbiAgICAnZmFrZV9uZXdzJyxcbiAgICAncHJvZHVjdGl2aXR5JyxcbiAgICAnc2hvcHBpbmcnLFxuICAgICdnYW1pbmcnLFxuICAgICdzdHJlYW1pbmcnLFxuICAgICduZXdzJyxcbiAgICAnY3VzdG9tJyxcbl0pO1xuZXhwb3J0IGNvbnN0IFNpdGVGaWx0ZXJTZXR0aW5nc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBlbmFibGVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGJsb2NrQmxvY2tlZFNpdGVzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHNlYXJjaEZpbHRlckVuYWJsZWQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgaGlkZUJsb2NrZWRSZXN1bHRzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHNob3dDYXRlZ29yeUJhZGdlOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgICBibG9ja2VkQ2F0ZWdvcmllczogei5hcnJheShTaXRlQ2F0ZWdvcnlTY2hlbWEpLmRlZmF1bHQoW10pLFxuICAgIGN1c3RvbUJsb2NrbGlzdDogei5hcnJheSh6LnN0cmluZygpKS5kZWZhdWx0KFtdKSxcbiAgICBjdXN0b21BbGxvd2xpc3Q6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgdXNlRXh0ZXJuYWxCbG9ja2xpc3RzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHJlZGlyZWN0VG9EREc6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG59KTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2l0ZUZpbHRlclNldHRpbmdzID0ge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgYmxvY2tCbG9ja2VkU2l0ZXM6IHRydWUsXG4gICAgc2VhcmNoRmlsdGVyRW5hYmxlZDogdHJ1ZSxcbiAgICBoaWRlQmxvY2tlZFJlc3VsdHM6IHRydWUsXG4gICAgc2hvd0NhdGVnb3J5QmFkZ2U6IGZhbHNlLFxuICAgIGJsb2NrZWRDYXRlZ29yaWVzOiBbJ2dhbWJsaW5nJywgJ21hbHdhcmUnLCAnc3BhbScsICdmYWtlX25ld3MnXSxcbiAgICBjdXN0b21CbG9ja2xpc3Q6IFtdLFxuICAgIGN1c3RvbUFsbG93bGlzdDogW10sXG4gICAgdXNlRXh0ZXJuYWxCbG9ja2xpc3RzOiB0cnVlLFxuICAgIHJlZGlyZWN0VG9EREc6IHRydWUsXG59O1xuZXhwb3J0IGNvbnN0IFJFQURFUl9GT05UUyA9IFtcbiAgICB7IGlkOiAnSW50ZXInLCBsYWJlbDogJ0ludGVyJywgZmFtaWx5OiAnSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYnLCBzdHlsZTogJ01vZGVybicgfSxcbiAgICB7IGlkOiAnU3BhY2UgR3JvdGVzaycsIGxhYmVsOiAnU3BhY2UgR3JvdGVzaycsIGZhbWlseTogJ1wiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmJywgc3R5bGU6ICdGdXR1cmlzdGljJyB9LFxuICAgIHsgaWQ6ICdJQk0gUGxleCBTYW5zJywgbGFiZWw6ICdJQk0gUGxleCcsIGZhbWlseTogJ1wiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmJywgc3R5bGU6ICdUZWNobmljYWwnIH0sXG4gICAgeyBpZDogJ0pldEJyYWlucyBNb25vJywgbGFiZWw6ICdKZXRCcmFpbnMgTW9ubycsIGZhbWlseTogJ1wiSmV0QnJhaW5zIE1vbm9cIiwgbW9ub3NwYWNlJywgc3R5bGU6ICdDb2RlJyB9LFxuICAgIHsgaWQ6ICdHZW9yZ2lhJywgbGFiZWw6ICdHZW9yZ2lhJywgZmFtaWx5OiAnR2VvcmdpYSwgc2VyaWYnLCBzdHlsZTogJ0NsYXNzaWMnIH0sXG4gICAgeyBpZDogJ0F0a2luc29uIEh5cGVybGVnaWJsZScsIGxhYmVsOiAnQXRraW5zb24nLCBmYW1pbHk6ICdcIkF0a2luc29uIEh5cGVybGVnaWJsZVwiLCBzYW5zLXNlcmlmJywgc3R5bGU6ICdBY2Nlc3NpYmxlJyB9LFxuXTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVzZXIgU2V0dGluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBVc2VyU2V0dGluZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgZW5hYmxlZDogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBwcm9jZXNzaW5nTW9kZTogUHJvY2Vzc2luZ01vZGVTY2hlbWEuZGVmYXVsdCgnbG9jYWxfcnVsZXMnKSxcbiAgICBzdHJpY3RuZXNzOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMTAwKS5kZWZhdWx0KDgwKSxcbiAgICBydWxlczogVXNlclJ1bGVzU2NoZW1hLmRlZmF1bHQoe1xuICAgICAgICBibG9ja2xpc3RDaGFubmVsczogW10sXG4gICAgICAgIGJsb2NrbGlzdEtleXdvcmRzOiBbXSxcbiAgICAgICAgYWxsb3dsaXN0Q2hhbm5lbHM6IFtdLFxuICAgICAgICBhbGxvd2xpc3RLZXl3b3JkczogW10sXG4gICAgICAgIHByZXNldHM6IHsgcG9saXRpY3M6IGZhbHNlLCByYWdlYmFpdDogdHJ1ZSwgc3BvaWxlcnM6IGZhbHNlLCBjbGlja2JhaXQ6IHRydWUgfSxcbiAgICB9KSxcbiAgICBieW9rS2V5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgYWlNb2RlbDogei5zdHJpbmcoKS5kZWZhdWx0KERFRkFVTFRfT1BFTlJPVVRFUl9NT0RFTCksXG4gICAgY3VzdG9tRW5kcG9pbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBuZXV0cmFsaXphdGlvbjogTmV1dHJhbGl6YXRpb25TZXR0aW5nc1NjaGVtYS5kZWZhdWx0KGRlZmF1bHROZXV0cmFsaXphdGlvblNldHRpbmdzKSxcbiAgICByZWFkZXI6IFJlYWRlclNldHRpbmdzU2NoZW1hLmRlZmF1bHQoZGVmYXVsdFJlYWRlclNldHRpbmdzKSxcbiAgICBtZWRpYUZpbHRlcjogTWVkaWFGaWx0ZXJTZXR0aW5nc1NjaGVtYS5kZWZhdWx0KGRlZmF1bHRNZWRpYUZpbHRlclNldHRpbmdzKSxcbiAgICBzaXRlRmlsdGVyOiBTaXRlRmlsdGVyU2V0dGluZ3NTY2hlbWEuZGVmYXVsdChkZWZhdWx0U2l0ZUZpbHRlclNldHRpbmdzKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRVc2VyU2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwcm9jZXNzaW5nTW9kZTogJ2xvY2FsX3J1bGVzJyxcbiAgICBzdHJpY3RuZXNzOiA4MCxcbiAgICBydWxlczoge1xuICAgICAgICBibG9ja2xpc3RDaGFubmVsczogW10sXG4gICAgICAgIGJsb2NrbGlzdEtleXdvcmRzOiBbXSxcbiAgICAgICAgYWxsb3dsaXN0Q2hhbm5lbHM6IFtdLFxuICAgICAgICBhbGxvd2xpc3RLZXl3b3JkczogW10sXG4gICAgICAgIC8vIE9waW5pb25hdGVkIGRlZmF1bHRzIC0gZW5hYmxlIGtleSBmaWx0ZXJzXG4gICAgICAgIHByZXNldHM6IHsgcG9saXRpY3M6IGZhbHNlLCByYWdlYmFpdDogdHJ1ZSwgc3BvaWxlcnM6IGZhbHNlLCBjbGlja2JhaXQ6IHRydWUgfSxcbiAgICB9LFxuICAgIGJ5b2tLZXk6IHVuZGVmaW5lZCxcbiAgICBhaU1vZGVsOiBERUZBVUxUX09QRU5ST1VURVJfTU9ERUwsXG4gICAgY3VzdG9tRW5kcG9pbnQ6IHVuZGVmaW5lZCxcbiAgICBuZXV0cmFsaXphdGlvbjogZGVmYXVsdE5ldXRyYWxpemF0aW9uU2V0dGluZ3MsXG4gICAgcmVhZGVyOiBkZWZhdWx0UmVhZGVyU2V0dGluZ3MsXG4gICAgbWVkaWFGaWx0ZXI6IGRlZmF1bHRNZWRpYUZpbHRlclNldHRpbmdzLFxuICAgIHNpdGVGaWx0ZXI6IGRlZmF1bHRTaXRlRmlsdGVyU2V0dGluZ3MsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRmluZ2VycHJpbnRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogU2ltcGxlIHN0cmluZyBoYXNoIGFsZ29yaXRobSBmb3IgZmluZ2VycHJpbnRpbmcgY29udGVudC5cbiAqIE5vdCBjcnl0b2dyYXBoaWNhbGx5IHNlY3VyZSwgYnV0IGZhc3QgYW5kIHN1ZmZpY2llbnQgZm9yIGNhY2hpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVIYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gICAgfVxuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKDM2KTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBzdGFibGUgZmluZ2VycHJpbnQgZm9yIGEgQ29udGVudFVuaXQuXG4gKiBDb21iaW5lcyB0aXRsZSBhbmQgc291cmNlTmFtZSwgaWdub3JlcyB2YXJpYWJsZSBmaWVsZHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUZpbmdlcnByaW50KHVuaXQpIHtcbiAgICBjb25zdCBzZWVkID0gYCR7dW5pdC50aXRsZX18JHt1bml0LnNvdXJjZU5hbWUgfHwgJyd9fCR7dW5pdC5zaXRlfWA7XG4gICAgcmV0dXJuIHNpbXBsZUhhc2goc2VlZCk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdG9yYWdlIEtleXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBTVE9SQUdFX0tFWVMgPSB7XG4gICAgU0VUVElOR1M6ICdsb2NhbDpzZXR0aW5ncycsXG4gICAgREVDSVNJT05fQ0FDSEU6ICdsb2NhbDpkZWNpc2lvbkNhY2hlJyxcbiAgICBCWU9LX0tFWVM6ICdsb2NhbDpieW9rS2V5cycsXG4gICAgU1RBVFM6ICdsb2NhbDpzdGF0cycsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVzc2FnZSBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gICAgQ0xBU1NJRllfVU5JVDogJ2NsYXNzaWZ5VW5pdCcsXG4gICAgR0VUX1NFVFRJTkdTOiAnZ2V0U2V0dGluZ3MnLFxuICAgIFVQREFURV9TRVRUSU5HUzogJ3VwZGF0ZVNldHRpbmdzJyxcbiAgICBDTEVBUl9DQUNIRTogJ2NsZWFyQ2FjaGUnLFxuICAgIEdFVF9TVEFUUzogJ2dldFN0YXRzJyxcbiAgICBJTkNSRU1FTlRfU1RBVDogJ2luY3JlbWVudFN0YXQnLFxufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZhbGlkYXRpb24gSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBWYWxpZGF0ZSBhIENvbnRlbnRVbml0IG9iamVjdCBhZ2FpbnN0IHRoZSBzY2hlbWEuXG4gKiBUaHJvd3MgWm9kRXJyb3IgaWYgaW52YWxpZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29udGVudFVuaXQodW5pdCkge1xuICAgIHJldHVybiBDb250ZW50VW5pdFNjaGVtYS5wYXJzZSh1bml0KTtcbn1cbi8qKlxuICogVmFsaWRhdGUgYSBDbGFzc2lmaWNhdGlvblJlc3VsdCBvYmplY3QgYWdhaW5zdCB0aGUgc2NoZW1hLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDbGFzc2lmaWNhdGlvblJlc3VsdChyZXN1bHQpIHtcbiAgICByZXR1cm4gQ2xhc3NpZmljYXRpb25SZXN1bHRTY2hlbWEucGFyc2UocmVzdWx0KTtcbn1cbi8qKlxuICogVmFsaWRhdGUgVXNlclNldHRpbmdzIGFnYWluc3QgdGhlIHNjaGVtYS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXNlclNldHRpbmdzKHNldHRpbmdzKSB7XG4gICAgcmV0dXJuIFVzZXJTZXR0aW5nc1NjaGVtYS5wYXJzZShzZXR0aW5ncyk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbmhhbmNlZCBTdGF0aXN0aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgRW5oYW5jZWRTdGF0c1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB0b3RhbEZpbHRlcmVkOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgYnlBY3Rpb246IHoub2JqZWN0KHtcbiAgICAgICAgaGlkZTogei5udW1iZXIoKS5kZWZhdWx0KDApLFxuICAgICAgICBibHVyOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIG5ldXRyYWxpemU6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgY29sbGFwc2U6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICB9KS5kZWZhdWx0KHsgaGlkZTogMCwgYmx1cjogMCwgbmV1dHJhbGl6ZTogMCwgY29sbGFwc2U6IDAgfSksXG4gICAgYnlQcmVzZXQ6IHoub2JqZWN0KHtcbiAgICAgICAgcG9saXRpY3M6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgcmFnZWJhaXQ6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgc3BvaWxlcnM6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgY2xpY2tiYWl0OiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgfSkuZGVmYXVsdCh7IHBvbGl0aWNzOiAwLCByYWdlYmFpdDogMCwgc3BvaWxlcnM6IDAsIGNsaWNrYmFpdDogMCB9KSxcbiAgICB0aW1lU2F2ZWQ6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICB0b3BGaWx0ZXJlZFNvdXJjZXM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgZGFpbHlIaXN0b3J5OiB6LmFycmF5KHoub2JqZWN0KHtcbiAgICAgICAgZGF0ZTogei5zdHJpbmcoKSxcbiAgICAgICAgY291bnQ6IHoubnVtYmVyKCksXG4gICAgfSkpLmRlZmF1bHQoW10pLFxuICAgIGxhc3RSZXNldDogei5udW1iZXIoKS5kZWZhdWx0KERhdGUubm93KCkpLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdEVuaGFuY2VkU3RhdHMgPSB7XG4gICAgdG90YWxGaWx0ZXJlZDogMCxcbiAgICBieUFjdGlvbjogeyBoaWRlOiAwLCBibHVyOiAwLCBuZXV0cmFsaXplOiAwLCBjb2xsYXBzZTogMCB9LFxuICAgIGJ5UHJlc2V0OiB7IHBvbGl0aWNzOiAwLCByYWdlYmFpdDogMCwgc3BvaWxlcnM6IDAsIGNsaWNrYmFpdDogMCB9LFxuICAgIHRpbWVTYXZlZDogMCxcbiAgICB0b3BGaWx0ZXJlZFNvdXJjZXM6IFtdLFxuICAgIGRhaWx5SGlzdG9yeTogW10sXG4gICAgbGFzdFJlc2V0OiBEYXRlLm5vdygpLFxufTtcbiIsIi8qKlxuICogQ29sbGFwc2UgUmVuZGVyZXIgZm9yIENhbG1XZWJcbiAqIFxuICogQ3JlYXRlcyBhIG1pbmltYWwgcGxhY2Vob2xkZXIgZm9yIGZpbHRlcmVkIGNvbnRlbnQgdGhhdCBjYW4gYmUgZXhwYW5kZWQuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBDbGFzc2lmaWNhdGlvblJlc3VsdCB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGFwc2VPcHRpb25zIHtcbiAgcmVhc29uOiBzdHJpbmc7XG4gIG9yaWdpbmFsRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlc3VsdDogQ2xhc3NpZmljYXRpb25SZXN1bHQ7XG4gIG9uRXhwYW5kPzogKCkgPT4gdm9pZDtcbiAgc2l0ZUlkPzogc3RyaW5nO1xufVxuXG5jb25zdCBSRUFTT05fTEFCRUxTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBwcmVzZXRfcG9saXRpY3M6ICdQb2xpdGljcyBmaWx0ZXJlZCcsXG4gIHByZXNldF9yYWdlYmFpdDogJ1JhZ2ViYWl0IGJsb2NrZWQnLFxuICBwcmVzZXRfc3BvaWxlcnM6ICdTcG9pbGVyIHNoaWVsZCcsXG4gIHByZXNldF9jbGlja2JhaXQ6ICdDbGlja2JhaXQgcmVtb3ZlZCcsXG4gIGJsb2NrbGlzdF9jaGFubmVsOiAnQmxvY2tlZCBzb3VyY2UnLFxuICBibG9ja2xpc3Rfa2V5d29yZDogJ0ZpbHRlcmVkIGtleXdvcmQnLFxuICBsbG1fY2xhc3NpZmljYXRpb246ICdBSSBmaWx0ZXJlZCcsXG4gIGhvc3RlZDogJ0NvbnRlbnQgZmlsdGVyZWQnLFxufTtcblxuZnVuY3Rpb24gZ2V0UmVhc29uTGFiZWwocmVhc29uOiBzdHJpbmcpOiBzdHJpbmcge1xuICBmb3IgKGNvbnN0IFtrZXksIGxhYmVsXSBvZiBPYmplY3QuZW50cmllcyhSRUFTT05fTEFCRUxTKSkge1xuICAgIGlmIChyZWFzb24uaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJ0NvbnRlbnQgZmlsdGVyZWQnO1xufVxuXG5mdW5jdGlvbiBnZXRSZWFzb25JY29uKHJlYXNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHJlYXNvbi5pbmNsdWRlcygncG9saXRpY3MnKSkgcmV0dXJuICfwn4+b77iPJztcbiAgaWYgKHJlYXNvbi5pbmNsdWRlcygncmFnZWJhaXQnKSkgcmV0dXJuICfwn5igJztcbiAgaWYgKHJlYXNvbi5pbmNsdWRlcygnc3BvaWxlcnMnKSkgcmV0dXJuICfwn6SQJztcbiAgaWYgKHJlYXNvbi5pbmNsdWRlcygnY2xpY2tiYWl0JykpIHJldHVybiAn8J+Oryc7XG4gIGlmIChyZWFzb24uaW5jbHVkZXMoJ2NoYW5uZWwnKSB8fCByZWFzb24uaW5jbHVkZXMoJ2tleXdvcmQnKSkgcmV0dXJuICfwn5qrJztcbiAgcmV0dXJuICfwn5uh77iPJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbGxhcHNlUGxhY2Vob2xkZXIob3B0aW9uczogQ29sbGFwc2VPcHRpb25zKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCB7IHJlYXNvbiwgb3JpZ2luYWxFbGVtZW50LCByZXN1bHQ6IF9yZXN1bHQsIG9uRXhwYW5kLCBzaXRlSWQgfSA9IG9wdGlvbnM7XG4gIF9yZXN1bHQ7XG4gIFxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjYWxtd2ViLWNvbGxhcHNlLWNvbnRhaW5lcic7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1jb2xsYXBzZScsICd0cnVlJyk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1yZWFzb24nLCByZWFzb24pO1xuICBcbiAgY29uc3QgbGFiZWwgPSBnZXRSZWFzb25MYWJlbChyZWFzb24pO1xuICBjb25zdCBpY29uID0gZ2V0UmVhc29uSWNvbihyZWFzb24pO1xuICBcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1jb2xsYXBzZS1iYWRnZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjYWxtd2ViLWNvbGxhcHNlLWljb25cIj4ke2ljb259PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjYWxtd2ViLWNvbGxhcHNlLWxhYmVsXCI+JHtsYWJlbH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhbG13ZWItY29sbGFwc2UtZXhwYW5kXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgPHNwYW4+U2hvdyBhbnl3YXk8L3NwYW4+XG4gICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xOSA5bC03IDctNy03XCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG4gIGA7XG4gIFxuICBjb25zdCBleHBhbmRCdG4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhbG13ZWItY29sbGFwc2UtZXhwYW5kJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIFxuICBleHBhbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXhwYW5kQ29sbGFwc2VkQ29udGVudChjb250YWluZXIsIG9yaWdpbmFsRWxlbWVudCk7XG4gICAgaWYgKG9uRXhwYW5kKSB7XG4gICAgICBvbkV4cGFuZCgpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItb3JpZ2luYWwtaGVpZ2h0JywgU3RyaW5nKG9yaWdpbmFsRWxlbWVudC5vZmZzZXRIZWlnaHQpKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXNpdGUnLCBzaXRlSWQgfHwgJ3Vua25vd24nKTtcbiAgXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZENvbGxhcHNlZENvbnRlbnQocGxhY2Vob2xkZXI6IEhUTUxFbGVtZW50LCBvcmlnaW5hbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2NhbG13ZWItY29sbGFwc2UtZXhwYW5kaW5nJyk7XG4gIFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIG9yaWdpbmFsRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0JztcbiAgICBcbiAgICBwbGFjZWhvbGRlci5yZXBsYWNlV2l0aChvcmlnaW5hbEVsZW1lbnQpO1xuICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgfSwgMjAwKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbGxhcHNlZChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1jb2xsYXBzZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sbGFwc2VJbmZvKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogeyByZWFzb246IHN0cmluZzsgc2l0ZTogc3RyaW5nIH0gfCBudWxsIHtcbiAgaWYgKCFpc0NvbGxhcHNlZChlbGVtZW50KSkgcmV0dXJuIG51bGw7XG4gIFxuICByZXR1cm4ge1xuICAgIHJlYXNvbjogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1yZWFzb24nKSB8fCAndW5rbm93bicsXG4gICAgc2l0ZTogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1zaXRlJykgfHwgJ3Vua25vd24nLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sbGFwc2VTdHlsZXMoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBcbi5jYWxtd2ViLWNvbGxhcHNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjA4KSAwJSwgcmdiYSgxNDcsIDUxLCAyMzQsIDAuMDUpIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBtaW4taGVpZ2h0OiAzMnB4O1xufVxuXG4uY2FsbXdlYi1jb2xsYXBzZS1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xMikgMCUsIHJnYmEoMTQ3LCA1MSwgMjM0LCAwLjA4KSAxMDAlKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4zKTtcbn1cblxuLmNhbG13ZWItY29sbGFwc2UtYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbn1cblxuLmNhbG13ZWItY29sbGFwc2UtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5jYWxtd2ViLWNvbGxhcHNlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuOSk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG59XG5cbi5jYWxtd2ViLWNvbGxhcHNlLWV4cGFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjg1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cblxuLmNhbG13ZWItY29sbGFwc2UtZXhwYW5kOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNCk7XG4gIGNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMSk7XG59XG5cbi5jYWxtd2ViLWNvbGxhcHNlLWV4cGFuZDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xufVxuXG4uY2FsbXdlYi1jb2xsYXBzZS1leHBhbmQgc3ZnIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuXG4uY2FsbXdlYi1jb2xsYXBzZS1leHBhbmQ6aG92ZXIgc3ZnIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5jYWxtd2ViLWNvbGxhcHNlLWV4cGFuZGluZyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLmNhbG13ZWItY29sbGFwc2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xNSkgMCUsIHJnYmEoMTQ3LCA1MSwgMjM0LCAwLjEpIDEwMCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMjUpO1xuICB9XG4gIFxuICAuY2FsbXdlYi1jb2xsYXBzZS1sYWJlbCB7XG4gICAgY29sb3I6IHJnYmEoOTYsIDE2NSwgMjUwLCAxKTtcbiAgfVxuICBcbiAgLmNhbG13ZWItY29sbGFwc2UtZXhwYW5kIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xNSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4zKTtcbiAgICBjb2xvcjogcmdiYSg5NiwgMTY1LCAyNTAsIDEpO1xuICB9XG59XG5gO1xufSIsIi8qKlxuICogUmVkZGl0IFNpdGUgQWRhcHRlciBmb3IgQ2FsbVdlYlxuICpcbiAqIEhhbmRsZXMgUmVkZGl0IHBvc3QgY2FyZHMgb24gYm90aCBuZXcgUmVkZGl0IChyZWRkaXQuY29tKSBhbmQgb2xkIGZvcm1hdC5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFNpdGVBZGFwdGVyLCBDb250ZW50VW5pdCwgQ2xhc3NpZmljYXRpb25SZXN1bHQgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuaW1wb3J0IHsgZ2VuZXJhdGVGaW5nZXJwcmludCB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5pbXBvcnQgeyBjcmVhdGVDb2xsYXBzZVBsYWNlaG9sZGVyIH0gZnJvbSAnQC9zcmMvcmVuZGVyZXIvY29sbGFwc2UnO1xuXG4vLyBOZXcgUmVkZGl0IHNlbGVjdG9yc1xuY29uc3QgTkVXX1JFRERJVCA9IHtcbiAgcG9zdENhcmQ6ICdbZGF0YS10ZXN0aWQ9XCJwb3N0LWNvbnRhaW5lclwiXSwgZGl2W2RhdGEtY2xpY2staWQ9XCJib2R5XCJdJyxcbiAgdGl0bGU6ICdbZGF0YS10ZXN0aWQ9XCJwb3N0LXRpdGxlXCJdLCBoMycsXG4gIHN1YnJlZGRpdDogJ1tkYXRhLXRlc3RpZD1cInN1YnJlZGRpdC1uYW1lXCJdIGEsIGFbaHJlZio9XCIvci9cIl0nLFxuICBtZXRhZGF0YTogJ1tkYXRhLXRlc3RpZD1cInBvc3Qtb3B0aW9ucy1tZW51XCJdIHNwYW4sIC50ZXh0LW5ldXRyYWwtY29udGVudCcsXG59IGFzIGNvbnN0O1xuXG4vLyBPbGQgUmVkZGl0IHNlbGVjdG9ycyAoZmFsbGJhY2spXG5jb25zdCBPTERfUkVERElUID0ge1xuICBwb3N0Q2FyZDogJy50aGluZy50aGluZy10eXBlLXNlbGYsIC50aGluZy50aGluZy10eXBlLWxpbmsnLFxuICB0aXRsZTogJy50aXRsZSBhJyxcbiAgc3VicmVkZGl0OiAnLnN1YnJlZGRpdCBhJyxcbiAgbWV0YWRhdGE6ICcudGFnbGluZSBzcGFuJyxcbn0gYXMgY29uc3Q7XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UncmUgb24gbmV3IFJlZGRpdFxuICovXG5mdW5jdGlvbiBpc05ld1JlZGRpdCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ3d3dy5yZWRkaXQuY29tJyB8fFxuICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAncmVkZGl0LmNvbSc7XG59XG5cbi8qKlxuICogRGlzY292ZXIgYWxsIHBvc3QgY2FyZCBlbGVtZW50cyB3aXRoaW4gYSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3ZlclVuaXRzKHJvb3Q6IERvY3VtZW50IHwgSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdIHtcbiAgY29uc3Qgc2VsZWN0b3JzID0gaXNOZXdSZWRkaXQoKVxuICAgID8gTkVXX1JFRERJVC5wb3N0Q2FyZFxuICAgIDogYCR7TkVXX1JFRERJVC5wb3N0Q2FyZH0sICR7T0xEX1JFRERJVC5wb3N0Q2FyZH1gO1xuXG4gIGNvbnN0IG5vZGVzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycyk7XG4gIHJldHVybiBBcnJheS5mcm9tKG5vZGVzKSBhcyBIVE1MRWxlbWVudFtdO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgZGF0YSBmcm9tIGEgUmVkZGl0IHBvc3QgY2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERhdGEoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBDb250ZW50VW5pdCB7XG4gIGNvbnN0IG5ld1JlZGRpdCA9IGlzTmV3UmVkZGl0KCk7XG4gIGNvbnN0IHRpdGxlRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IobmV3UmVkZGl0ID8gTkVXX1JFRERJVC50aXRsZSA6IE9MRF9SRURESVQudGl0bGUpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgdGl0bGUgPSAodGl0bGVFbD8uaW5uZXJUZXh0IHx8IHRpdGxlRWw/LnRleHRDb250ZW50IHx8ICcnKS50cmltKCkgfHwgJ1VudGl0bGVkJztcblxuICBjb25zdCBzdWJyZWRkaXRFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihuZXdSZWRkaXQgPyBORVdfUkVERElULnN1YnJlZGRpdCA6IE9MRF9SRURESVQuc3VicmVkZGl0KSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gIGxldCBzb3VyY2VOYW1lID0gKHN1YnJlZGRpdEVsPy5pbm5lclRleHQgfHwgc3VicmVkZGl0RWw/LnRleHRDb250ZW50IHx8ICcnKS50cmltKCkgfHwgdW5kZWZpbmVkO1xuICBpZiAoIXNvdXJjZU5hbWUgJiYgc3VicmVkZGl0RWwpIHtcbiAgICAvLyBUcnkgdG8gZXh0cmFjdCBmcm9tIGhyZWYgaWYgaXQncyBhbiBhbmNob3JcbiAgICBjb25zdCBhbmNob3IgPSBzdWJyZWRkaXRFbCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBpZiAoYW5jaG9yLmdldEF0dHJpYnV0ZT8uKCdocmVmJykpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG4gICAgICBjb25zdCBtYXRjaCA9IGhyZWYubWF0Y2goL1xcL3JcXC8oW15cXC9dKykvKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBzb3VyY2VOYW1lID0gYHIvJHttYXRjaFsxXX1gO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGFkYXRhRWxzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKG5ld1JlZGRpdCA/IE5FV19SRURESVQubWV0YWRhdGEgOiBPTERfUkVERElULm1ldGFkYXRhKTtcbiAgY29uc3QgbWV0YWRhdGEgPSBBcnJheS5mcm9tKG1ldGFkYXRhRWxzKVxuICAgIC5tYXAoZWwgPT4gKChlbCBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0IHx8IGVsLnRleHRDb250ZW50IHx8ICcnKS50cmltKCkpXG4gICAgLmZpbHRlcihCb29sZWFuKTtcblxuICBjb25zdCBmaW5nZXJwcmludCA9IGdlbmVyYXRlRmluZ2VycHJpbnQoeyB0aXRsZSwgc291cmNlTmFtZSwgc2l0ZTogJ3JlZGRpdCcsIG1ldGFkYXRhIH0pO1xuICBjb25zdCBpZCA9IGVsZW1lbnQuaWQgfHwgYHJlZGRpdC0ke2ZpbmdlcnByaW50fWA7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBzaXRlOiAncmVkZGl0JyxcbiAgICBmaW5nZXJwcmludCxcbiAgICBzb3VyY2VOYW1lLFxuICAgIHRpdGxlLFxuICAgIG1ldGFkYXRhLFxuICAgIGlzTmV3OiBmYWxzZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBseSBjbGFzc2lmaWNhdGlvbiBkZWNpc2lvbiB0byBhIFJlZGRpdCBwb3N0IGNhcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RGVjaXNpb24oZWxlbWVudDogSFRNTEVsZW1lbnQsIHJlc3VsdDogQ2xhc3NpZmljYXRpb25SZXN1bHQpOiB2b2lkIHtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnKTtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJyc7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2FsbXdlYi1ibHVycmVkJywgJ2NhbG13ZWItaGlkZGVuJywgJ2NhbG13ZWItbmV1dHJhbGl6ZWQnKTtcblxuICBpZiAocmVzdWx0LmRlY2lzaW9uID09PSAnaGlkZScpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnaGlkZGVuJyk7XG4gICAgY29uc3QgbmV3UmVkZGl0ID0gaXNOZXdSZWRkaXQoKTtcbiAgICBjb25zdCB0aXRsZUVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKG5ld1JlZGRpdCA/IE5FV19SRURESVQudGl0bGUgOiBPTERfUkVERElULnRpdGxlKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUVsPy5pbm5lclRleHQgfHwgdGl0bGVFbD8udGV4dENvbnRlbnQgfHwgJ0NvbnRlbnQnO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FsbXdlYjpuZXV0cmFsaXplZCcsIHtcbiAgICAgIGRldGFpbDogeyBiZWZvcmU6IHRpdGxlLCBhZnRlcjogJ1tIaWRkZW5dJyB9XG4gICAgfSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdjb2xsYXBzZScpIHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGNyZWF0ZUNvbGxhcHNlUGxhY2Vob2xkZXIoe1xuICAgICAgcmVhc29uOiByZXN1bHQucmVhc29uLFxuICAgICAgb3JpZ2luYWxFbGVtZW50OiBlbGVtZW50LFxuICAgICAgcmVzdWx0LFxuICAgICAgc2l0ZUlkOiAncmVkZGl0JyxcbiAgICB9KTtcbiAgICBjb25zdCBuZXdSZWRkaXQgPSBpc05ld1JlZGRpdCgpO1xuICAgIGNvbnN0IHRpdGxlRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IobmV3UmVkZGl0ID8gTkVXX1JFRERJVC50aXRsZSA6IE9MRF9SRURESVQudGl0bGUpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRWw/LmlubmVyVGV4dCB8fCB0aXRsZUVsPy50ZXh0Q29udGVudCB8fCAnQ29udGVudCc7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHBsYWNlaG9sZGVyKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICdjb2xsYXBzZWQnKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NhbG13ZWI6bmV1dHJhbGl6ZWQnLCB7XG4gICAgICBkZXRhaWw6IHsgYmVmb3JlOiB0aXRsZSwgYWZ0ZXI6ICdbQ29sbGFwc2VkXScgfVxuICAgIH0pKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmVzdWx0LmRlY2lzaW9uID09PSAnYmx1cicpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhbG13ZWItYmx1cnJlZCcpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJywgJ2JsdXInKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmVzdWx0LmRlY2lzaW9uID09PSAnbmV1dHJhbGl6ZScgJiYgcmVzdWx0Lm5ldXRyYWxpemVkVGl0bGUpIHtcbiAgICBjb25zdCBuZXdSZWRkaXQgPSBpc05ld1JlZGRpdCgpO1xuICAgIGNvbnN0IHRpdGxlRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IobmV3UmVkZGl0ID8gTkVXX1JFRERJVC50aXRsZSA6IE9MRF9SRURESVQudGl0bGUpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBjb25zdCBvcmlnaW5hbFRpdGxlID0gdGl0bGVFbD8uaW5uZXJUZXh0IHx8ICcnO1xuICAgIGlmICh0aXRsZUVsKSB7XG4gICAgICB0aXRsZUVsLmlubmVyVGV4dCA9IHJlc3VsdC5uZXV0cmFsaXplZFRpdGxlO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhbG13ZWItbmV1dHJhbGl6ZWQnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICduZXV0cmFsaXplZCcpO1xuICAgIFxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FsbXdlYjpuZXV0cmFsaXplZCcsIHtcbiAgICAgIGRldGFpbDogeyBiZWZvcmU6IG9yaWdpbmFsVGl0bGUsIGFmdGVyOiByZXN1bHQubmV1dHJhbGl6ZWRUaXRsZSB9XG4gICAgfSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdyZWJ1aWxkJykge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICdyZWJ1aWxkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnc2hvdycpO1xufVxuXG4vKipcbiAqIFJlZGRpdCBTaXRlIEFkYXB0ZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZGRpdEFkYXB0ZXI6IFNpdGVBZGFwdGVyID0ge1xuICBzaXRlSWQ6ICdyZWRkaXQnLFxuICBtYXRjaGVzOiBbXG4gICAgL15odHRwcz86XFwvXFwvKHd3d1xcLik/cmVkZGl0XFwuY29tXFwvLiovLFxuICAgIC9eaHR0cHM/OlxcL1xcL29sZFxcLnJlZGRpdFxcLmNvbVxcLy4qLyxcbiAgXSxcbiAgZGlzY292ZXJVbml0cyxcbiAgZXh0cmFjdERhdGEsXG4gIGFwcGx5RGVjaXNpb24sXG59O1xuIiwiLyoqXG4gKiBNZXNzYWdpbmcgcHJvdG9jb2wgZm9yIENhbG1XZWJcbiAqXG4gKiBEZWZpbmVzIG1lc3NhZ2UgdHlwZXMgYW5kIHBheWxvYWRzIGZvciBjb21tdW5pY2F0aW9uIGJldHdlZW5cbiAqIGNvbnRlbnQgc2NyaXB0cywgYmFja2dyb3VuZCB3b3JrZXIsIHBvcHVwLCBhbmQgb3B0aW9ucyBwYWdlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQ29udGVudFVuaXQsIENsYXNzaWZpY2F0aW9uUmVzdWx0LCBVc2VyU2V0dGluZ3MsIFN0YXRzIH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVzc2FnZSBUeXBlIENvbnN0YW50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgTUVTU0FHRV9UWVBFUyA9IHtcbiAgLy8gQ2xhc3NpZmljYXRpb25cbiAgQ0xBU1NJRllfVU5JVDogJ2NhbG13ZWI6Y2xhc3NpZnlVbml0JyxcbiAgLy8gU2V0dGluZ3MgbWFuYWdlbWVudFxuICBHRVRfU0VUVElOR1M6ICdjYWxtd2ViOmdldFNldHRpbmdzJyxcbiAgVVBEQVRFX1NFVFRJTkdTOiAnY2FsbXdlYjp1cGRhdGVTZXR0aW5ncycsXG4gIC8vIENhY2hlIG1hbmFnZW1lbnRcbiAgQ0xFQVJfQ0FDSEU6ICdjYWxtd2ViOmNsZWFyQ2FjaGUnLFxuICAvLyBTdGF0aXN0aWNzXG4gIEdFVF9TVEFUUzogJ2NhbG13ZWI6Z2V0U3RhdHMnLFxuICBJTkNSRU1FTlRfU1RBVDogJ2NhbG13ZWI6aW5jcmVtZW50U3RhdCcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlVHlwZSA9IHR5cGVvZiBNRVNTQUdFX1RZUEVTW2tleW9mIHR5cGVvZiBNRVNTQUdFX1RZUEVTXTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVzc2FnZSBQYXlsb2FkIFR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NpZnlVbml0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkNMQVNTSUZZX1VOSVQ7XG4gIHVuaXQ6IENvbnRlbnRVbml0O1xufVxuXG5leHBvcnQgdHlwZSBDbGFzc2lmeVVuaXRSZXNwb25zZSA9IENsYXNzaWZpY2F0aW9uUmVzdWx0IHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U2V0dGluZ3NNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuR0VUX1NFVFRJTkdTO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNldHRpbmdzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLlVQREFURV9TRVRUSU5HUztcbiAgc2V0dGluZ3M6IFBhcnRpYWw8VXNlclNldHRpbmdzPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXR0aW5nc1Jlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckNhY2hlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkNMRUFSX0NBQ0hFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFyQ2FjaGVSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U3RhdHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuR0VUX1NUQVRTO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluY3JlbWVudFN0YXRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuSU5DUkVNRU5UX1NUQVQ7XG4gIGtleTogJ3RvdGFsRmlsdGVyZWQnO1xuICBhbW91bnQ/OiBudW1iZXI7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVuaW9uIFR5cGUgZm9yIEFsbCBNZXNzYWdlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDYWxtV2ViTWVzc2FnZSA9IFxuICB8IENsYXNzaWZ5VW5pdE1lc3NhZ2VcbiAgfCBHZXRTZXR0aW5nc01lc3NhZ2VcbiAgfCBVcGRhdGVTZXR0aW5nc01lc3NhZ2VcbiAgfCBDbGVhckNhY2hlTWVzc2FnZVxuICB8IEdldFN0YXRzTWVzc2FnZVxuICB8IEluY3JlbWVudFN0YXRNZXNzYWdlO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXNwb25zZSBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBHZXRTZXR0aW5nc1Jlc3BvbnNlID0gVXNlclNldHRpbmdzO1xuZXhwb3J0IHR5cGUgR2V0U3RhdHNSZXNwb25zZSA9IFN0YXRzO1xuZXhwb3J0IHR5cGUgSW5jcmVtZW50U3RhdFJlc3BvbnNlID0gU3RhdHM7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgVmFsaWRhdGlvbiAocnVudGltZSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbmNvbnN0IENsYXNzaWZ5VW5pdE1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkNMQVNTSUZZX1VOSVQpLFxuICB1bml0OiB6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCksXG4gICAgc2l0ZTogei5zdHJpbmcoKSxcbiAgICBmaW5nZXJwcmludDogei5zdHJpbmcoKSxcbiAgICBzb3VyY2VOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgdGl0bGU6IHouc3RyaW5nKCksXG4gICAgbWV0YWRhdGE6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gICAgaXNOZXc6IHouYm9vbGVhbigpLFxuICAgIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLFxuICB9KSxcbn0pO1xuXG5jb25zdCBHZXRTZXR0aW5nc01lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkdFVF9TRVRUSU5HUyksXG59KTtcblxuY29uc3QgVXBkYXRlU2V0dGluZ3NNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5VUERBVEVfU0VUVElOR1MpLFxuICBzZXR0aW5nczogei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcnVsZXM6IHoub2JqZWN0KHtcbiAgICAgIGJsb2NrbGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBibG9ja2xpc3RLZXl3b3Jkczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgYWxsb3dsaXN0Q2hhbm5lbHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICAgIGFsbG93bGlzdEtleXdvcmRzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBwcmVzZXRzOiB6Lm9iamVjdCh7XG4gICAgICAgIHBvbGl0aWNzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICByYWdlYmFpdDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgICAgc3BvaWxlcnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICAgIGNsaWNrYmFpdDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgIH0pLm9wdGlvbmFsKCksXG4gICAgfSkub3B0aW9uYWwoKSxcbiAgfSksXG59KTtcblxuY29uc3QgQ2xlYXJDYWNoZU1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkNMRUFSX0NBQ0hFKSxcbn0pO1xuXG5jb25zdCBHZXRTdGF0c01lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkdFVF9TVEFUUyksXG59KTtcblxuY29uc3QgSW5jcmVtZW50U3RhdE1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLklOQ1JFTUVOVF9TVEFUKSxcbiAga2V5OiB6LmxpdGVyYWwoJ3RvdGFsRmlsdGVyZWQnKSxcbiAgYW1vdW50OiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VTY2hlbWEgPSB6LmRpc2NyaW1pbmF0ZWRVbmlvbigndHlwZScsIFtcbiAgQ2xhc3NpZnlVbml0TWVzc2FnZVNjaGVtYSxcbiAgR2V0U2V0dGluZ3NNZXNzYWdlU2NoZW1hLFxuICBVcGRhdGVTZXR0aW5nc01lc3NhZ2VTY2hlbWEsXG4gIENsZWFyQ2FjaGVNZXNzYWdlU2NoZW1hLFxuICBHZXRTdGF0c01lc3NhZ2VTY2hlbWEsXG4gIEluY3JlbWVudFN0YXRNZXNzYWdlU2NoZW1hLFxuXSk7XG5cbi8qKlxuICogVmFsaWRhdGUgYSBtZXNzYWdlIHBheWxvYWQgYWdhaW5zdCB0aGUgc2NoZW1hLlxuICogVGhyb3dzIGlmIGludmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2UobWVzc2FnZTogdW5rbm93bik6IENhbG1XZWJNZXNzYWdlIHtcbiAgcmV0dXJuIG1lc3NhZ2UgYXMgQ2FsbVdlYk1lc3NhZ2U7XG59XG4iLCIvKipcbiAqIENTUy1vbmx5IENsZWFudXAgTW9kdWxlIGZvciBDYWxtV2ViXG4gKlxuICogSW5qZWN0cyBhIDxzdHlsZT4gdGFnIHRvIGhpZGUgYW5ub3lpbmcgZWxlbWVudHMgb24gYW55IHBhZ2UuXG4gKiBObyBET00gbWFuaXB1bGF0aW9uLCBubyBzY29yaW5nIGhldXJpc3RpYywgbm8gZXh0cmFjdGlvbi5cbiAqIEJyb3dzZXIgaGFuZGxlcyBldmVyeXRoaW5nIC0gZXh0cmVtZWx5IHJlbGlhYmxlLlxuICovXG5cbmNvbnN0IENMRUFOVVBfU1RZTEVfSUQgPSAnY2FsbXdlYi1jbGVhbnVwLWNzcyc7XG5cbi8vIENTUyBydWxlcyB0aGF0IGhpZGUgY29tbW9uIGFubm95YW5jZXNcbmNvbnN0IENMRUFOVVBfQ1NTID0gYFxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogQWRzICYgU3BvbnNvcmVkIENvbnRlbnRcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyogR2VuZXJpYyBhZCBjb250YWluZXJzICovXG4gIFtjbGFzcyo9XCJhZC1jb250YWluZXJcIl0sXG4gIFtjbGFzcyo9XCJhZF93cmFwcGVyXCJdLFxuICBbY2xhc3MqPVwiYWRXcmFwcGVyXCJdLFxuICBbY2xhc3MqPVwiYWQtc2xvdFwiXSxcbiAgW2NsYXNzKj1cImFkU2xvdFwiXSxcbiAgW2NsYXNzKj1cImFkLWJhbm5lclwiXSxcbiAgW2NsYXNzKj1cImFkQmFubmVyXCJdLFxuICBbY2xhc3MqPVwiYWQtdW5pdFwiXSxcbiAgW2NsYXNzKj1cImFkVW5pdFwiXSxcbiAgW2NsYXNzKj1cImFkLXBsYWNlbWVudFwiXSxcbiAgW2NsYXNzKj1cImFkUGxhY2VtZW50XCJdLFxuICBbY2xhc3MqPVwiYWR2ZXJ0XCJdLFxuICBbY2xhc3MqPVwiYWR2ZXJ0aXNlbWVudFwiXSxcbiAgW2NsYXNzKj1cImFkdmVydGlzbWVudFwiXSxcbiAgW2NsYXNzKj1cImFkLXNpZGViYXJcIl0sXG4gIFtjbGFzcyo9XCJhZC1sZWFkZXJib2FyZFwiXSxcbiAgW2NsYXNzKj1cImFkLWlubGluZVwiXSxcbiAgW2NsYXNzKj1cImFkLW92ZXJsYXlcIl0sXG4gIFtjbGFzcyo9XCJhZC1wb3B1cFwiXSxcbiAgLmFkLCAuYWRzLCAuYWRzYnlnb29nbGUsIC5hZC16b25lLCAuYWQtYm94LFxuICAuYWQtYmxvY2ssIC5hZC1wYW5lbCwgLmFkLXNlY3Rpb24sIC5hZC1sYWJlbCxcbiAgLmFkLXBsYWNlaG9sZGVyLCAuYWQtbW9iaWxlLCAuYWQtZGVza3RvcCxcbiAgLmFkLXRvcCwgLmFkLWJvdHRvbSwgLmFkLWhlYWRlciwgLmFkLWZvb3RlcixcbiAgLmFkLWNvbnRlbnQsIC5hZC1yaWdodCwgLmFkLWxlZnQsIC5hZC1jZW50ZXIsXG4gIC5hZHZlcnQsIC5hZHZlcnRpc2VtZW50LCAuYWR2ZXJ0aXNpbmcsIC5hZHZlcnRvcmlhbCxcbiAgLnNwb25zb3JlZCwgLnNwb25zb3IsIC5zcG9uc29yZWQtY29udGVudCwgLnNwb25zb3JlZC1wb3N0LFxuICAucHJvbW90ZWQsIC5wcm9tb3Rpb24sIC5wcm9tbyxcblxuICAvKiBBZCBhdHRyaWJ1dGVzICovXG4gIFtkYXRhLWFkXSxcbiAgW2RhdGEtYWQtc2xvdF0sXG4gIFtkYXRhLWFkLWNsaWVudF0sXG4gIFtkYXRhLWFkLWZvcm1hdF0sXG4gIFtkYXRhLWFkdW5pdF0sXG4gIFthcmlhLWxhYmVsPVwiYWR2ZXJ0aXNlbWVudFwiXSxcbiAgW2FyaWEtbGFiZWw9XCJBZFwiXSxcbiAgW2FyaWEtbGFiZWw9XCJTcG9uc29yZWRcIl0sXG5cbiAgLyogR29vZ2xlIEFkcyAqL1xuICAuZ29vZ2xlLWFkLCAuZ29vZ2xlYWRzLCAuYWRzZW5zZSxcbiAgaW5zLmFkc2J5Z29vZ2xlLFxuXG4gIC8qIEFkIG5ldHdvcmsgaWZyYW1lcyAqL1xuICBpZnJhbWVbc3JjKj1cImRvdWJsZWNsaWNrLm5ldFwiXSxcbiAgaWZyYW1lW3NyYyo9XCJnb29nbGVzeW5kaWNhdGlvbi5jb21cIl0sXG4gIGlmcmFtZVtzcmMqPVwiZ29vZ2xlYWRzZXJ2aWNlcy5jb21cIl0sXG4gIGlmcmFtZVtzcmMqPVwiYWRueHMuY29tXCJdLFxuICBpZnJhbWVbc3JjKj1cImFtYXpvbi1hZHN5c3RlbS5jb21cIl0sXG4gIGlmcmFtZVtzcmMqPVwiYWRzcnZyLm9yZ1wiXSxcbiAgaWZyYW1lW3NyYyo9XCJhZGZvcm0ubmV0XCJdLFxuICBpZnJhbWVbc3JjKj1cIm1vYXRhZHMuY29tXCJdLFxuICBpZnJhbWVbc3JjKj1cIm91dGJyYWluLmNvbVwiXSxcbiAgaWZyYW1lW3NyYyo9XCJ0YWJvb2xhLmNvbVwiXSxcbiAgaWZyYW1lW3NyYyo9XCJjcml0ZW8uY29tXCJdLFxuICBpZnJhbWVbc3JjKj1cImNyaXRlby5uZXRcIl0sXG4gIGlmcmFtZVtpZCo9XCJnb29nbGVfYWRzXCJdLFxuXG4gIC8qIFNvY2lhbCBwcm9tb3RlZCBjb250ZW50ICovXG4gIFtkYXRhLXRlc3RpZCo9XCJwcm9tb3RlZFwiXSxcbiAgW2RhdGEtcHJvbW90ZWQ9XCJ0cnVlXCJdLFxuICBbY2xhc3MqPVwicHJvbW90ZWQtdHdlZXRcIl0sXG4gIFtjbGFzcyo9XCJzcG9uc29yZWQtbGFiZWxcIl0sXG4gIFtjbGFzcyo9XCJhZC1iYWRnZVwiXSxcblxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogUG9wdXBzICYgTW9kYWxzIChjb29raWUsIG5ld3NsZXR0ZXIsIGV0Yy4pXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIC8qIENvb2tpZS9jb25zZW50IGJhbm5lcnMgKi9cbiAgW2NsYXNzKj1cImNvb2tpZS1iYW5uZXJcIl0sXG4gIFtjbGFzcyo9XCJjb29raWUtYmFubmVyLW92ZXJsYXlcIl0sXG4gIFtjbGFzcyo9XCJjb29raWUtbm90aWNlXCJdLFxuICBbY2xhc3MqPVwiY29va2llLWNvbnNlbnRcIl0sXG4gIFtjbGFzcyo9XCJjb29raWUtcG9wdXBcIl0sXG4gIFtjbGFzcyo9XCJjb29raWUtYWxlcnRcIl0sXG4gIFtjbGFzcyo9XCJjb29raWUtbGF3XCJdLFxuICBbY2xhc3MqPVwiY29uc2VudC1iYW5uZXJcIl0sXG4gIFtjbGFzcyo9XCJjb25zZW50LXBvcHVwXCJdLFxuICBbY2xhc3MqPVwiY29uc2VudC1tb2RhbFwiXSxcbiAgW2NsYXNzKj1cImNvbnNlbnQtb3ZlcmxheVwiXSxcbiAgW2NsYXNzKj1cImdkcHItYmFubmVyXCJdLFxuICBbY2xhc3MqPVwiZ2Rwci1wb3B1cFwiXSxcbiAgW2NsYXNzKj1cImdkcHItY29uc2VudFwiXSxcbiAgW2NsYXNzKj1cImdkcHItb3ZlcmxheVwiXSxcbiAgW2NsYXNzKj1cImV1LWNvb2tpZVwiXSxcbiAgLmNvb2tpZS1iYW5uZXIsIC5jb29raWUtbm90aWNlLCAuY29va2llLWNvbnNlbnQsXG4gIC5nZHByLWJhbm5lciwgLmdkcHItcG9wdXAsXG5cbiAgLyogTmV3c2xldHRlci9zdWJzY3JpcHRpb24gcG9wdXBzICovXG4gIFtjbGFzcyo9XCJuZXdzbGV0dGVyLXBvcHVwXCJdLFxuICBbY2xhc3MqPVwibmV3c2xldHRlci1vdmVybGF5XCJdLFxuICBbY2xhc3MqPVwibmV3c2xldHRlci1tb2RhbFwiXSxcbiAgW2NsYXNzKj1cInN1YnNjcmliZS1wb3B1cFwiXSxcbiAgW2NsYXNzKj1cInN1YnNjcmliZS1vdmVybGF5XCJdLFxuICBbY2xhc3MqPVwic3Vic2NyaWJlLW1vZGFsXCJdLFxuICBbY2xhc3MqPVwic2lnbnVwLXBvcHVwXCJdLFxuICBbY2xhc3MqPVwic2lnbnVwLW92ZXJsYXlcIl0sXG4gIFtjbGFzcyo9XCJzaWdudXAtbW9kYWxcIl0sXG4gIFtjbGFzcyo9XCJlbWFpbC1zaWdudXBcIl0sXG4gIFtjbGFzcyo9XCJtYWlsLXNpZ251cFwiXSxcbiAgW2NsYXNzKj1cImVtYWlsLXBvcHVwXCJdLFxuICBbY2xhc3MqPVwibWFpbC1wb3B1cFwiXSxcblxuICAvKiBHZW5lcmljIG1vZGFscy9wb3B1cHMvb3ZlcmxheXMgKi9cbiAgW2NsYXNzKj1cInBvcHVwLW92ZXJsYXlcIl0sXG4gIFtjbGFzcyo9XCJtb2RhbC1vdmVybGF5XCJdLFxuICBbY2xhc3MqPVwibGlnaHRib3gtb3ZlcmxheVwiXSxcbiAgW2NsYXNzKj1cImRpYWxvZy1vdmVybGF5XCJdLFxuICBbY2xhc3MqPVwiYmFja2Ryb3Atb3ZlcmxheVwiXSxcbiAgW2NsYXNzKj1cIm1hc2stb3ZlcmxheVwiXSxcblxuICAvKiBBcHAgaW5zdGFsbCBiYW5uZXJzICovXG4gIFtjbGFzcyo9XCJhcHAtYmFubmVyXCJdLFxuICBbY2xhc3MqPVwiaW5zdGFsbC1wcm9tcHRcIl0sXG4gIFtjbGFzcyo9XCJkb3dubG9hZC1hcHBcIl0sXG4gIFtjbGFzcyo9XCJtb2JpbGUtYXBwLWJhbm5lclwiXSxcbiAgW2NsYXNzKj1cImFwcC1pbnN0YWxsLWJhbm5lclwiXSxcblxuICAvKiBBZ2UgdmVyaWZpY2F0aW9uICovXG4gIFtjbGFzcyo9XCJhZ2UtZ2F0ZVwiXSxcbiAgW2NsYXNzKj1cImFnZS12ZXJpZmljYXRpb25cIl0sXG4gIFtjbGFzcyo9XCJhZ2UtY2hlY2tcIl0sXG4gIFtjbGFzcyo9XCJhZ2UtcG9wdXBcIl0sXG5cbiAgLyogU3VydmV5cyAmIGZlZWRiYWNrICovXG4gIFtjbGFzcyo9XCJzdXJ2ZXktcG9wdXBcIl0sXG4gIFtjbGFzcyo9XCJmZWVkYmFjay1wb3B1cFwiXSxcbiAgW2NsYXNzKj1cInBvbGwtcG9wdXBcIl0sXG4gIFtjbGFzcyo9XCJyYXRpbmctcG9wdXBcIl0sXG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqIFNpZGViYXIgJiBTdXBwbGVtZW50YXJ5IENvbnRlbnRcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyogU2lkZWJhcnMgKi9cbiAgW2NsYXNzKj1cInNpZGViYXItcmlnaHRcIl0sXG4gIFtjbGFzcyo9XCJzaWRlYmFyLWxlZnRcIl0sXG4gIFtjbGFzcyo9XCJzaWRlYmFyLXdpZGdldFwiXSxcbiAgLnNpZGViYXIsIC5zaWRlLWJhciwgLmFzaWRlLWJhcixcblxuICAvKiBSZWxhdGVkL3JlY29tbWVuZGVkICovXG4gIFtjbGFzcyo9XCJyZWxhdGVkLWFydGljbGVzXCJdLFxuICBbY2xhc3MqPVwicmVsYXRlZC1wb3N0c1wiXSxcbiAgW2NsYXNzKj1cInJlY29tbWVuZGVkXCJdLFxuICBbY2xhc3MqPVwic3VnZ2VzdGVkLWFydGljbGVzXCJdLFxuICBbY2xhc3MqPVwic3VnZ2VzdGVkLXBvc3RzXCJdLFxuICBbY2xhc3MqPVwibW9yZS1zdG9yaWVzXCJdLFxuICBbY2xhc3MqPVwibW9yZS1hcnRpY2xlc1wiXSxcbiAgW2NsYXNzKj1cInRyZW5kaW5nLW5vd1wiXSxcbiAgW2NsYXNzKj1cInRyZW5kaW5nLXN0b3JpZXNcIl0sXG4gIC5yZWxhdGVkLCAucmVjb21tZW5kZWQsIC5zdWdnZXN0aW9ucywgLm1vcmUtc3RvcmllcyxcbiAgLnRyZW5kaW5nLFxuXG4gIC8qIFNvY2lhbCBzaGFyZSBiYXJzICovXG4gIFtjbGFzcyo9XCJzb2NpYWwtc2hhcmVcIl0sXG4gIFtjbGFzcyo9XCJzaGFyZS1idXR0b25zXCJdLFxuICBbY2xhc3MqPVwic29jaWFsLWxpbmtzXCJdLFxuICBbY2xhc3MqPVwic29jaWFsLWJhclwiXSxcbiAgW2NsYXNzKj1cInNoYXJlLWJhclwiXSxcbiAgW2NsYXNzKj1cInNvY2lhbC1pY29uc1wiXSxcbiAgW2NsYXNzKj1cInNvY2lhbC1tZWRpYVwiXSxcbiAgLnNvY2lhbC1zaGFyZSwgLnNoYXJlLWJ1dHRvbnMsIC5zb2NpYWwtbGlua3MsXG4gIC5zb2NpYWwtYmFyLCAuc2hhcmUtYmFyLCAuc29jaWFsLW1lZGlhLFxuXG4gIC8qIENvbW1lbnRzICovXG4gIFtjbGFzcyo9XCJjb21tZW50LXNlY3Rpb25cIl0sXG4gIFtjbGFzcyo9XCJjb21tZW50cy1zZWN0aW9uXCJdLFxuICBbY2xhc3MqPVwiY29tbWVudC1jb250YWluZXJcIl0sXG4gIFtjbGFzcyo9XCJyZXNwb25zZXMtc2VjdGlvblwiXSxcbiAgLmNvbW1lbnRzLCAjY29tbWVudHMsIC5jb21tZW50LXNlY3Rpb24sXG4gIC5yZXNwb25zZXMsIC5kaXNxdXMsXG5cbiAgLyogQXV0aG9yIGJpb3MgKi9cbiAgW2NsYXNzKj1cImF1dGhvci1iaW9cIl0sXG4gIFtjbGFzcyo9XCJhdXRob3ItaW5mb1wiXSxcbiAgW2NsYXNzKj1cImFib3V0LWF1dGhvclwiXSxcbiAgLmF1dGhvci1iaW8sIC5hdXRob3ItaW5mbywgLmFib3V0LWF1dGhvcixcblxuICAvKiBUYWdzICYgY2F0ZWdvcmllcyAqL1xuICBbY2xhc3MqPVwidGFnLWxpc3RcIl0sXG4gIFtjbGFzcyo9XCJ0YWctY2xvdWRcIl0sXG4gIFtjbGFzcyo9XCJ0b3BpYy10YWdzXCJdLFxuICBbY2xhc3MqPVwiY2F0ZWdvcnktbGlzdFwiXSxcbiAgLnRhZ3MsIC50YWctbGlzdCwgLmNhdGVnb3JpZXMsIC50b3BpYy10YWdzLFxuXG4gIC8qIEJyZWFkY3J1bWJzICovXG4gIFtjbGFzcyo9XCJicmVhZGNydW1iXCJdLFxuICAuYnJlYWRjcnVtYiwgLmJyZWFkY3J1bWJzLCAuY3J1bWJzLFxuXG4gIC8qIFBhZ2luYXRpb24gKi9cbiAgW2NsYXNzKj1cInBhZ2luYXRpb25cIl0sXG4gIC5wYWdpbmF0aW9uLCAucGFnZXIsIC5wYWdlLW5hdixcblxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogQ2hhdCBXaWRnZXRzICYgVHJhY2tpbmdcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyogQ2hhdCB3aWRnZXRzICovXG4gIFtjbGFzcyo9XCJpbnRlcmNvbVwiXSxcbiAgW2NsYXNzKj1cImRyaWZ0XCJdLFxuICBbY2xhc3MqPVwiemVuZGVza1wiXSxcbiAgW2NsYXNzKj1cImNyaXNwXCJdLFxuICBbY2xhc3MqPVwibGl2ZWNoYXRcIl0sXG4gIFtjbGFzcyo9XCJjaGF0LXdpZGdldFwiXSxcbiAgW2NsYXNzKj1cImNoYXQtYm94XCJdLFxuICBbY2xhc3MqPVwic3VwcG9ydC13aWRnZXRcIl0sXG4gICNpbnRlcmNvbS1jb250YWluZXIsIC5pbnRlcmNvbS1sYXVuY2hlci1mcmFtZSxcbiAgLmRyaWZ0LWZyYW1lLCAuemVuZGVzay1mcmFtZSxcblxuICAvKiBQYXl3YWxscyAqL1xuICBbY2xhc3MqPVwicGF5d2FsbFwiXSxcbiAgW2NsYXNzKj1cInBheS13YWxsXCJdLFxuICBbY2xhc3MqPVwibWV0ZXJlZFwiXSxcbiAgW2NsYXNzKj1cInByZW1pdW0tb25seVwiXSxcbiAgW2NsYXNzKj1cInN1YnNjcmliZXItb25seVwiXSxcbiAgW2NsYXNzKj1cIm1lbWJlcnMtb25seVwiXSxcblxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogV29yZFByZXNzICYgQ01TIFNwZWNpZmljXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gICN3cGFkbWluYmFyLFxuICAud3AtYmxvY2stbmF2aWdhdGlvbixcbiAgLmFtcC1zaWRlYmFyLCAuYW1wLW1lbnUsXG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqIFN0aWNreS9GaXhlZCBlbGVtZW50cyAoYW5ub3lpbmcpXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIC8qIExldCdzIG5vdCBoaWRlIGFsbCBmaXhlZCBlbGVtZW50cyAtIHNvbWUgYXJlIG5hdmlnYXRpb25cbiAgICAgV2UnbGwgYmUgc2VsZWN0aXZlIHdpdGggY29tbW9uIGZpeGVkIGFubm95YW5jZXMgKi9cbiAgW2NsYXNzKj1cInN0aWNreS1hZFwiXSxcbiAgW2NsYXNzKj1cImZpeGVkLWFkXCJdLFxuICBbY2xhc3MqPVwic3RpY2t5LWJhbm5lclwiXSxcbiAgW2NsYXNzKj1cImZpeGVkLWJhbm5lclwiXSxcbiAgW2NsYXNzKj1cInN0aWNreS1mb290ZXJcIl0sXG4gIFtjbGFzcyo9XCJmaXhlZC1mb290ZXJcIl0sXG4gIFtjbGFzcyo9XCJzdGlja3ktaGVhZGVyXCJdLFxuICBbY2xhc3MqPVwiZml4ZWQtaGVhZGVyXCJdLFxuXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBQcm9tbyAmIE1hcmtldGluZyBCYW5uZXJzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIFtjbGFzcyo9XCJwcm9tby1iYW5uZXJcIl0sXG4gIFtjbGFzcyo9XCJwcm9tby1iYXJcIl0sXG4gIFtjbGFzcyo9XCJwcm9tby1wb3B1cFwiXSxcbiAgW2NsYXNzKj1cInByb21vLWNvZGVcIl0sXG4gIFtjbGFzcyo9XCJwcm9tby1vdmVybGF5XCJdLFxuICBbY2xhc3MqPVwibWFya2V0aW5nLWJhbm5lclwiXSxcbiAgW2NsYXNzKj1cIm1hcmtldGluZy1wb3B1cFwiXSxcbiAgW2NsYXNzKj1cImFubm91bmNlbWVudC1iYXJcIl0sXG4gIFtjbGFzcyo9XCJhbm5vdW5jZW1lbnQtYmFubmVyXCJdLFxuICAucHJvbW8tYmFubmVyLCAucHJvbW8tYmFyLCAucHJvbW8tcG9wdXAsXG4gIC5hbm5vdW5jZW1lbnQtYmFyLCAuYW5ub3VuY2VtZW50LWJhbm5lcixcblxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogRGFyayBSZWFkaW5nIE1vZGUgKG9wdGlvbmFsIHRoZW1pbmcpXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIC8qIFdoZW4gQ2FsbVdlYiBkYXJrIHJlYWRpbmcgbW9kZSBpcyBlbmFibGVkICovXG4gIC5jYWxtd2ViLWRhcmstbW9kZSBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTFhICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNlMGUwZTAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIEFsbG93IGltYWdlcyB0byBzdGlsbCBiZSB2aXNpYmxlICovXG4gIC5jYWxtd2ViLWRhcmstbW9kZSBpbWcge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpIGNvbnRyYXN0KDEuMSk7XG4gIH1cblxuICAvKiBFbnN1cmUgdGV4dCBpcyByZWFkYWJsZSAqL1xuICAuY2FsbXdlYi1kYXJrLW1vZGUgcCxcbiAgLmNhbG13ZWItZGFyay1tb2RlIGgxLFxuICAuY2FsbXdlYi1kYXJrLW1vZGUgaDIsXG4gIC5jYWxtd2ViLWRhcmstbW9kZSBoMyxcbiAgLmNhbG13ZWItZGFyay1tb2RlIGg0LFxuICAuY2FsbXdlYi1kYXJrLW1vZGUgaDUsXG4gIC5jYWxtd2ViLWRhcmstbW9kZSBoNixcbiAgLmNhbG13ZWItZGFyay1tb2RlIGxpLFxuICAuY2FsbXdlYi1kYXJrLW1vZGUgYmxvY2txdW90ZSxcbiAgLmNhbG13ZWItZGFyay1tb2RlIHByZSxcbiAgLmNhbG13ZWItZGFyay1tb2RlIGNvZGUge1xuICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbi8qKlxuICogSW5qZWN0IHRoZSBDU1MgY2xlYW51cCBzdHlsZXMgaW50byB0aGUgcGFnZS5cbiAqIFJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0Q2xlYW51cENzcygpOiAoKSA9PiB2b2lkIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENMRUFOVVBfU1RZTEVfSUQpKSB7XG4gICAgcmV0dXJuICgpID0+IHt9OyAvLyBBbHJlYWR5IGluamVjdGVkXG4gIH1cblxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLmlkID0gQ0xFQU5VUF9TVFlMRV9JRDtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSBDTEVBTlVQX0NTUztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBleGlzdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENMRUFOVVBfU1RZTEVfSUQpO1xuICAgIGlmIChleGlzdGluZykge1xuICAgICAgZXhpc3RpbmcucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGNsZWFudXAgQ1NTIGlzIGN1cnJlbnRseSBpbmplY3RlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDbGVhbnVwQ3NzSW5qZWN0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENMRUFOVVBfU1RZTEVfSUQpO1xufVxuXG4vKipcbiAqIFRvZ2dsZSB0aGUgY2xlYW51cCBDU1Mgb24vb2ZmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGVhbnVwQ3NzKCk6IGJvb2xlYW4ge1xuICBpZiAoaXNDbGVhbnVwQ3NzSW5qZWN0ZWQoKSkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ0xFQU5VUF9TVFlMRV9JRCk7XG4gICAgaWYgKGVsKSBlbC5yZW1vdmUoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaW5qZWN0Q2xlYW51cENzcygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlIGRhcmsgcmVhZGluZyBtb2RlIG9uIHRoZSBwYWdlLlxuICogTm90ZTogVGhpcyBpcyBleHBlcmltZW50YWwgYW5kIG1heSBjb25mbGljdCB3aXRoIHNpdGUtc3BlY2lmaWMgc3R5bGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZURhcmtNb2RlKCk6IHZvaWQge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FsbXdlYi1kYXJrLW1vZGUnKTtcbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRhcmsgcmVhZGluZyBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRGFya01vZGUoKTogdm9pZCB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYWxtd2ViLWRhcmstbW9kZScpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGRhcmsgbW9kZSBpcyBlbmFibGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhcmtNb2RlRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbG13ZWItZGFyay1tb2RlJyk7XG59XG5cbi8qKlxuICogVG9nZ2xlIGRhcmsgbW9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRGFya01vZGUoKTogYm9vbGVhbiB7XG4gIGlmIChpc0RhcmtNb2RlRW5hYmxlZCgpKSB7XG4gICAgZGlzYWJsZURhcmtNb2RlKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGVuYWJsZURhcmtNb2RlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNvdW50IG9mIHNlbGVjdG9ycyBpbiB0aGUgY2xlYW51cCBDU1MgKGZvciBzdGF0cylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENsZWFudXBTZWxlY3RvckNvdW50KCk6IG51bWJlciB7XG4gIHJldHVybiBDTEVBTlVQX0NTUy5zcGxpdCgnLCcpLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBUZXN0IGlmIGEgc2VsZWN0b3IgZXhpc3RzIGluIHRoZSBjbGVhbnVwIENTU1xuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2xlYW51cFNlbGVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIENMRUFOVVBfQ1NTLmluY2x1ZGVzKHNlbGVjdG9yKTtcbn1cbiIsIi8qKlxuICogQWN0aXZpdHkgT3ZlcmxheVxuICpcbiAqIEZsb2F0aW5nIHBhbmVsIHRoYXQgc2hvd3MgcmVhbC10aW1lIGZpbHRlcmluZyBhY3Rpdml0eTpcbiAqIC0gTmV1dHJhbGl6ZWQgaGVhZGxpbmVzIChiZWZvcmUg4oaSIGFmdGVyKVxuICogLSBCbG9ja2VkIHNpdGVzXG4gKiAtIEZpbHRlcmVkIG1lZGlhXG4gKiAtIFNlYXJjaCByZXN1bHRzIGhpZGRlblxuICovXG5cbmltcG9ydCB7IHNlbmRUb0JhY2tncm91bmQgfSBmcm9tICdAZHJhY29uL3d4dC1zaGFyZWQvZXh0ZW5zaW9uJztcbmltcG9ydCB7IE1FU1NBR0VfVFlQRVMgfSBmcm9tICdAL3NyYy9tZXNzYWdpbmcnO1xuaW1wb3J0IHR5cGUgeyBVc2VyU2V0dGluZ3MgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuXG5jb25zdCBPVkVSTEFZX0lEID0gJ2NhbG13ZWItYWN0aXZpdHktb3ZlcmxheSc7XG5jb25zdCBTVFlMRVNfSUQgPSAnY2FsbXdlYi1hY3Rpdml0eS1zdHlsZXMnO1xuXG5pbnRlcmZhY2UgQWN0aXZpdHlJdGVtIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogJ25ldXRyYWxpemVkJyB8ICdibG9ja2VkJyB8ICdtZWRpYScgfCAnc2VhcmNoJztcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIGJlZm9yZTogc3RyaW5nO1xuICBhZnRlcj86IHN0cmluZztcbiAgcmVhc29uPzogc3RyaW5nO1xufVxuXG5sZXQgYWN0aXZpdGllczogQWN0aXZpdHlJdGVtW10gPSBbXTtcbmxldCBtYXhBY3Rpdml0aWVzID0gMjA7XG5sZXQgb3ZlcmxheTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbmxldCBpc0V4cGFuZGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluamVjdFN0eWxlcygpOiB2b2lkIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNUWUxFU19JRCkpIHJldHVybjtcblxuICBjb25zdCBzdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZXMuaWQgPSBTVFlMRVNfSUQ7XG4gIHN0eWxlcy50ZXh0Q29udGVudCA9IGBcbiAgICAjJHtPVkVSTEFZX0lEfSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDIwcHg7XG4gICAgICBsZWZ0OiAyMHB4O1xuICAgICAgei1pbmRleDogMjE0NzQ4MzY0NztcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWExYTJlIDAlLCAjMTYyMTNlIDEwMCUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaGVhZGVyOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWljb24ge1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjOGI1Y2Y2IDEwMCUpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1jb3VudCB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogIzIyYzU1ZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1iYWRnZS5lbXB0eSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNmI3MjgwO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LXBhbmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBhbmltYXRpb246IHNsaWRlVXAgMC4ycyBlYXNlO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LXBhbmVsLnZpc2libGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS10YWJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktdGFiIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktdGFiOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktdGFiLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzYzNjZmMTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2MzY2ZjE7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktbGlzdCB7XG4gICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLm5ldXRyYWxpemVkIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzhiNWNmNjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLmJsb2NrZWQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWY0NDQ0O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW0ubWVkaWEge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjM2I4MmY2O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW0uc2VhcmNoIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y1OWUwYjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaXRlbS5uZXV0cmFsaXplZCAuY2FsbXdlYi1hY3Rpdml0eS1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWRlOWZlO1xuICAgICAgY29sb3I6ICM3YzNhZWQ7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaXRlbS5ibG9ja2VkIC5jYWxtd2ViLWFjdGl2aXR5LWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gICAgICBjb2xvcjogI2RjMjYyNjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLm1lZGlhIC5jYWxtd2ViLWFjdGl2aXR5LWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkYmVhZmU7XG4gICAgICBjb2xvcjogIzI1NjNlYjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLnNlYXJjaCAuY2FsbXdlYi1hY3Rpdml0eS1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICAgICAgY29sb3I6ICNkOTc3MDY7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktYmVmb3JlIHtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWFmdGVyIHtcbiAgICAgIGNvbG9yOiAjMTExODI3O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktYXJyb3cge1xuICAgICAgY29sb3I6ICM5Y2EzYWY7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWVtcHR5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBjb2xvcjogIzljYTNhZjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1lbXB0eS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS10aW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGNvbG9yOiAjOWNhM2FmO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbiAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZXMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pZCA9IE9WRVJMQVlfSUQ7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWljb25cIj7wn5uh77iPPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRpdGxlXCI+Q2FsbVdlYjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1jb3VudFwiPjAgaXRlbXMgZmlsdGVyZWQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktYmFkZ2UgZW1wdHlcIj4wPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktcGFuZWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRhYnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGFiIGFjdGl2ZVwiIGRhdGEtdGFiPVwiYWxsXCI+QWxsPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRhYlwiIGRhdGEtdGFiPVwibmV1dHJhbGl6ZWRcIj5UZXh0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRhYlwiIGRhdGEtdGFiPVwiYmxvY2tlZFwiPlNpdGVzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRhYlwiIGRhdGEtdGFiPVwibWVkaWFcIj5NZWRpYTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1saXN0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgY29uc3QgaGVhZGVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLWFjdGl2aXR5LWhlYWRlcicpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBwYW5lbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi1hY3Rpdml0eS1wYW5lbCcpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCB0YWJzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxtd2ViLWFjdGl2aXR5LXRhYicpO1xuXG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpc0V4cGFuZGVkID0gIWlzRXhwYW5kZWQ7XG4gICAgcGFuZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScsIGlzRXhwYW5kZWQpO1xuICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICByZW5kZXJMaXN0KCdhbGwnKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICByZW5kZXJMaXN0KCh0YWIgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQudGFiIHx8ICdhbGwnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFkZ2UoKTogdm9pZCB7XG4gIGlmICghb3ZlcmxheSkgcmV0dXJuO1xuXG4gIGNvbnN0IGNvdW50ID0gYWN0aXZpdGllcy5sZW5ndGg7XG4gIGNvbnN0IGJhZGdlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi1hY3Rpdml0eS1iYWRnZScpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBjb3VudFRleHQgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLWFjdGl2aXR5LWNvdW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgYmFkZ2UudGV4dENvbnRlbnQgPSBjb3VudC50b1N0cmluZygpO1xuICBiYWRnZS5jbGFzc0xpc3QudG9nZ2xlKCdlbXB0eScsIGNvdW50ID09PSAwKTtcbiAgY291bnRUZXh0LnRleHRDb250ZW50ID0gYCR7Y291bnR9IGl0ZW0ke2NvdW50ICE9PSAxID8gJ3MnIDogJyd9IGZpbHRlcmVkYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdChmaWx0ZXI6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIW92ZXJsYXkpIHJldHVybjtcblxuICBjb25zdCBsaXN0ID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi1hY3Rpdml0eS1saXN0JykgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyID09PSAnYWxsJyBcbiAgICA/IGFjdGl2aXRpZXMgXG4gICAgOiBhY3Rpdml0aWVzLmZpbHRlcihhID0+IGEudHlwZSA9PT0gZmlsdGVyKTtcblxuICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgbGlzdC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1lbXB0eVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1lbXB0eS1pY29uXCI+4pyoPC9kaXY+XG4gICAgICAgIDxkaXY+Tm8gcmVjZW50IGFjdGl2aXR5PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxpc3QuaW5uZXJIVE1MID0gZmlsdGVyZWQubWFwKGl0ZW0gPT4ge1xuICAgIGNvbnN0IHRpbWVBZ28gPSBnZXRUaW1lQWdvKGl0ZW0udGltZXN0YW1wKTtcbiAgICBjb25zdCB0eXBlTGFiZWwgPSB7XG4gICAgICBuZXV0cmFsaXplZDogJ05ldXRyYWxpemVkJyxcbiAgICAgIGJsb2NrZWQ6ICdCbG9ja2VkJyxcbiAgICAgIG1lZGlhOiAnTWVkaWEnLFxuICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICB9W2l0ZW0udHlwZV07XG5cbiAgICBpZiAoaXRlbS50eXBlID09PSAnbmV1dHJhbGl6ZWQnICYmIGl0ZW0uYWZ0ZXIpIHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWl0ZW0gJHtpdGVtLnR5cGV9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktbGFiZWxcIj4ke3R5cGVMYWJlbH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1iZWZvcmVcIj4ke2VzY2FwZUh0bWwoaXRlbS5iZWZvcmUpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWFycm93XCI+4oaTPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktYWZ0ZXJcIj4ke2VzY2FwZUh0bWwoaXRlbS5hZnRlcil9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGltZVwiPiR7dGltZUFnb308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1pdGVtICR7aXRlbS50eXBlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1sYWJlbFwiPiR7dHlwZUxhYmVsfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1hZnRlclwiPiR7ZXNjYXBlSHRtbChpdGVtLmJlZm9yZSl9PC9kaXY+XG4gICAgICAgICR7aXRlbS5yZWFzb24gPyBgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGltZVwiPiR7aXRlbS5yZWFzb259PC9kaXY+YCA6ICcnfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS10aW1lXCI+JHt0aW1lQWdvfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBkaXYuaW5uZXJIVE1MO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lQWdvKHRpbWVzdGFtcDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aW1lc3RhbXApIC8gMTAwMCk7XG4gIGlmIChzZWNvbmRzIDwgNjApIHJldHVybiAnSnVzdCBub3cnO1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICBpZiAobWludXRlcyA8IDYwKSByZXR1cm4gYCR7bWludXRlc31tIGFnb2A7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICByZXR1cm4gYCR7aG91cnN9aCBhZ29gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWN0aXZpdHkoaXRlbTogT21pdDxBY3Rpdml0eUl0ZW0sICdpZCcgfCAndGltZXN0YW1wJz4pOiB2b2lkIHtcbiAgYWN0aXZpdGllcy51bnNoaWZ0KHtcbiAgICAuLi5pdGVtLFxuICAgIGlkOiBgJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpfWAsXG4gICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICB9KTtcblxuICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPiBtYXhBY3Rpdml0aWVzKSB7XG4gICAgYWN0aXZpdGllcyA9IGFjdGl2aXRpZXMuc2xpY2UoMCwgbWF4QWN0aXZpdGllcyk7XG4gIH1cblxuICB1cGRhdGVCYWRnZSgpO1xuXG4gIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgY29uc3QgYWN0aXZlVGFiID0gb3ZlcmxheT8ucXVlcnlTZWxlY3RvcignLmNhbG13ZWItYWN0aXZpdHktdGFiLmFjdGl2ZScpIGFzIEhUTUxFbGVtZW50O1xuICAgIHJlbmRlckxpc3QoYWN0aXZlVGFiPy5kYXRhc2V0LnRhYiB8fCAnYWxsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ05ldXRyYWxpemVkKGJlZm9yZTogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogdm9pZCB7XG4gIGFkZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnbmV1dHJhbGl6ZWQnLFxuICAgIGJlZm9yZSxcbiAgICBhZnRlcixcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dCbG9ja2VkKGRvbWFpbjogc3RyaW5nLCByZWFzb246IHN0cmluZyk6IHZvaWQge1xuICBhZGRBY3Rpdml0eSh7XG4gICAgdHlwZTogJ2Jsb2NrZWQnLFxuICAgIGJlZm9yZTogZG9tYWluLFxuICAgIHJlYXNvbixcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dNZWRpYShhbHRUZXh0OiBzdHJpbmcsIGFjdGlvbjogJ2JsdXJyZWQnIHwgJ2hpZGRlbicpOiB2b2lkIHtcbiAgYWRkQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdtZWRpYScsXG4gICAgYmVmb3JlOiBhbHRUZXh0IHx8ICdJbWFnZScsXG4gICAgYWZ0ZXI6IGFjdGlvbiA9PT0gJ2JsdXJyZWQnID8gJ0JsdXJyZWQnIDogJ0hpZGRlbicsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nU2VhcmNoKGRvbWFpbjogc3RyaW5nKTogdm9pZCB7XG4gIGFkZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnc2VhcmNoJyxcbiAgICBiZWZvcmU6IGRvbWFpbixcbiAgICByZWFzb246ICdIaWRkZW4gZnJvbSByZXN1bHRzJyxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0QWN0aXZpdHlPdmVybGF5KCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCkpIHtcbiAgICBjb25zb2xlLmxvZygnW0FjdGl2aXR5T3ZlcmxheV0gQWxyZWFkeSBpbml0aWFsaXplZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBTdGFydGluZyBpbml0aWFsaXphdGlvbi4uLicpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kPFVzZXJTZXR0aW5ncz4oeyBcbiAgICAgIHR5cGU6IE1FU1NBR0VfVFlQRVMuR0VUX1NFVFRJTkdTIFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ1tBY3Rpdml0eU92ZXJsYXldIFNldHRpbmdzIHJlY2VpdmVkOicsIHNldHRpbmdzKTtcblxuICAgIC8vIFNob3cgb3ZlcmxheSBpZiBhbnkgZmlsdGVyaW5nIGlzIGVuYWJsZWRcbiAgICBjb25zdCBzaG91bGRTaG93ID0gc2V0dGluZ3M/LmVuYWJsZWQgJiYgKFxuICAgICAgc2V0dGluZ3MubmV1dHJhbGl6YXRpb24/LmVuYWJsZWQgfHxcbiAgICAgIHNldHRpbmdzLm1lZGlhRmlsdGVyPy5lbmFibGVkIHx8XG4gICAgICBzZXR0aW5ncy5zaXRlRmlsdGVyPy5lbmFibGVkXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBzaG91bGRTaG93OicsIHNob3VsZFNob3csICdlbmFibGVkOicsIHNldHRpbmdzPy5lbmFibGVkLCAnbmV1dHJhbGl6YXRpb246Jywgc2V0dGluZ3M/Lm5ldXRyYWxpemF0aW9uPy5lbmFibGVkLCAnbWVkaWFGaWx0ZXI6Jywgc2V0dGluZ3M/Lm1lZGlhRmlsdGVyPy5lbmFibGVkLCAnc2l0ZUZpbHRlcjonLCBzZXR0aW5ncz8uc2l0ZUZpbHRlcj8uZW5hYmxlZCk7XG5cbiAgICBpZiAoIXNob3VsZFNob3cpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBOb3Qgc2hvd2luZyBvdmVybGF5IC0gZmlsdGVyaW5nIGRpc2FibGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5qZWN0U3R5bGVzKCk7XG4gICAgb3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBPdmVybGF5IGFkZGVkIHRvIHBhZ2UnKTtcblxuICAgIC8vIExpc3RlbiBmb3IgZXZlbnRzIGZyb20gY29udGVudCBzY3JpcHRzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbG13ZWI6bmV1dHJhbGl6ZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBsb2dOZXV0cmFsaXplZChlLmRldGFpbC5iZWZvcmUsIGUuZGV0YWlsLmFmdGVyKTtcbiAgICB9KSBhcyBFdmVudExpc3RlbmVyKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjYWxtd2ViOmJsb2NrZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBsb2dCbG9ja2VkKGUuZGV0YWlsLmRvbWFpbiwgZS5kZXRhaWwucmVhc29uKTtcbiAgICB9KSBhcyBFdmVudExpc3RlbmVyKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjYWxtd2ViOm1lZGlhRmlsdGVyZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBsb2dNZWRpYShlLmRldGFpbC5hbHRUZXh0LCBlLmRldGFpbC5hY3Rpb24pO1xuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbG13ZWI6c2VhcmNoRmlsdGVyZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBsb2dTZWFyY2goZS5kZXRhaWwuZG9tYWluKTtcbiAgICB9KSBhcyBFdmVudExpc3RlbmVyKTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tBY3Rpdml0eU92ZXJsYXldIEZhaWxlZCB0byBpbml0aWFsaXplOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZpdHlDb3VudCgpOiBudW1iZXIge1xuICByZXR1cm4gYWN0aXZpdGllcy5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFjdGl2aXRpZXMoKTogdm9pZCB7XG4gIGFjdGl2aXRpZXMgPSBbXTtcbiAgdXBkYXRlQmFkZ2UoKTtcbiAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICByZW5kZXJMaXN0KCdhbGwnKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb250ZW50IFNjcmlwdCBmb3IgUmVkZGl0XG4gKlxuICogT2JzZXJ2ZXMgUmVkZGl0IHBvc3QgY2FyZHMsIGNsYXNzaWZpZXMgdGhlbSwgYW5kIGFwcGxpZXMgZGVjaXNpb25zLlxuICovXG5cbmltcG9ydCB7IGRlZmluZUNvbnRlbnRTY3JpcHQgfSBmcm9tICd3eHQvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0JztcbmltcG9ydCB7IHNlbmRUb0JhY2tncm91bmQgfSBmcm9tICdAZHJhY29uL3d4dC1zaGFyZWQvZXh0ZW5zaW9uJztcbmltcG9ydCB7IHJlZGRpdEFkYXB0ZXIgfSBmcm9tICdAL3NyYy9hZGFwdGVycy9yZWRkaXQnO1xuaW1wb3J0IHsgTUVTU0FHRV9UWVBFUyB9IGZyb20gJ0Avc3JjL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBpbmplY3RDbGVhbnVwQ3NzIH0gZnJvbSAnQC9zcmMvYWRmaWx0ZXIvY3NzLW9ubHknO1xuaW1wb3J0IHsgaW5pdEFjdGl2aXR5T3ZlcmxheSB9IGZyb20gJ0Avc3JjL3VpL2FjdGl2aXR5LW92ZXJsYXknO1xuaW1wb3J0IHR5cGUgeyBDbGFzc2lmaWNhdGlvblJlc3VsdCwgQ29udGVudFVuaXQgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb250ZW50U2NyaXB0KHtcbiAgbWF0Y2hlczogWycqOi8vKi5yZWRkaXQuY29tLyonXSxcbiAgcnVuQXQ6ICdkb2N1bWVudF9pZGxlJyxcbiAgbWFpbigpIHtcbiAgICBjb25zb2xlLmxvZygnW0NvbnRlbnRdIFJlZGRpdCBzY3JpcHQgbG9hZGVkJyk7XG5cbiAgICBpbml0QWN0aXZpdHlPdmVybGF5KCk7XG5cbiAgICAvLyBJbmplY3QgQ1NTIGNsZWFudXAgcnVsZXMgKGFkcywgcG9wdXBzLCBjb29raWUgYmFubmVycywgZXRjLilcbiAgICBpbmplY3RDbGVhbnVwQ3NzKCk7XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaWQgPSAnY2FsbXdlYi1zdHlsZXMnO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgW2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQ9XCJibHVyXCJdIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDEwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2UgIWltcG9ydGFudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB9XG4gICAgICBbZGF0YS1jYWxtd2ViLXByb2Nlc3NlZD1cImJsdXJcIl06aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFtkYXRhLWNhbG13ZWItcHJvY2Vzc2VkPVwiaGlkZGVuXCJdLFxuICAgICAgW2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQ9XCJyZWJ1aWxkXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgW2RhdGEtY2FsbXdlYi1wcm9jZXNzaW5nXSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgfVxuICAgIGA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICBjb25zdCBwcm9jZXNzVW5pdHMgPSBhc3luYyAodW5pdHM6IEhUTUxFbGVtZW50W10sIGlzTmV3OiBib29sZWFuID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICh1bml0cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgY29uc3QgdW5pdERhdGFMaXN0OiBDb250ZW50VW5pdFtdID0gdW5pdHMubWFwKGVsID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlZGRpdEFkYXB0ZXIuZXh0cmFjdERhdGEoZWwpO1xuICAgICAgICBkYXRhLmlzTmV3ID0gaXNOZXc7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdHM6IChDbGFzc2lmaWNhdGlvblJlc3VsdCB8IHsgZXJyb3I6IHN0cmluZyB9KVtdID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHVuaXREYXRhTGlzdC5tYXAodW5pdCA9PlxuICAgICAgICAgIHNlbmRUb0JhY2tncm91bmQ8Q2xhc3NpZmljYXRpb25SZXN1bHQ+KHtcbiAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfVFlQRVMuQ0xBU1NJRllfVU5JVCxcbiAgICAgICAgICAgIHVuaXQsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgdW5pdHMuZm9yRWFjaCgoZWwsIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2lkeF07XG4gICAgICAgIGlmIChyZXN1bHQgJiYgISgnZXJyb3InIGluIHJlc3VsdCkpIHtcbiAgICAgICAgICByZWRkaXRBZGFwdGVyLmFwcGx5RGVjaXNpb24oZWwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2luZycpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEluaXRpYWwgcGFzc1xuICAgIGNvbnN0IGluaXRpYWxQb3N0cyA9IHJlZGRpdEFkYXB0ZXIuZGlzY292ZXJVbml0cyhkb2N1bWVudCk7XG4gICAgaW5pdGlhbFBvc3RzLmZvckVhY2goZWwgPT4gZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2luZycsICcnKSk7XG4gICAgcHJvY2Vzc1VuaXRzKGluaXRpYWxQb3N0cywgZmFsc2UpO1xuXG4gICAgLy8gTXV0YXRpb25PYnNlcnZlclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgY29uc3QgbmV3UG9zdHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYWRkZWQgPSBtdXRhdGlvbi5hZGRlZE5vZGVzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGFkZGVkW2ldO1xuICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIFJlZGRpdCBwb3N0IGNhcmQgc2VsZWN0b3JzOiBjaGVjayBpZiBub2RlIGl0c2VsZiBpcyBhIHBvc3QgY2FyZFxuICAgICAgICAgICAgaWYgKG5vZGUubWF0Y2hlcyAmJiBub2RlLm1hdGNoZXMoJ1tkYXRhLXRlc3RpZD1cInBvc3QtY29udGFpbmVyXCJdLCBkaXZbZGF0YS1jbGljay1pZD1cImJvZHlcIl0sIC50aGluZy50aGluZy10eXBlLXNlbGYsIC50aGluZy50aGluZy10eXBlLWxpbmsnKSkge1xuICAgICAgICAgICAgICBuZXdQb3N0cy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVzY2VuZGFudHMgPSByZWRkaXRBZGFwdGVyLmRpc2NvdmVyVW5pdHMobm9kZSk7XG4gICAgICAgICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkID0gZGVzY2VuZGFudHMuZmlsdGVyKGVsID0+ICFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzaW5nJykpO1xuICAgICAgICAgICAgICBuZXdQb3N0cy5wdXNoKC4uLnVucHJvY2Vzc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1Bvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbmV3UG9zdHMuZm9yRWFjaChlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzaW5nJywgJycpKTtcbiAgICAgICAgcHJvY2Vzc1VuaXRzKG5ld1Bvc3RzLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGFsbFBvc3RzID0gcmVkZGl0QWRhcHRlci5kaXNjb3ZlclVuaXRzKGRvY3VtZW50KTtcbiAgICAgIGNvbnN0IHVucHJvY2Vzc2VkID0gYWxsUG9zdHMuZmlsdGVyKGVsID0+ICFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzaW5nJykpO1xuICAgICAgaWYgKHVucHJvY2Vzc2VkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdW5wcm9jZXNzZWQuZm9yRWFjaChlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzaW5nJywgJycpKTtcbiAgICAgICAgcHJvY2Vzc1VuaXRzKHVucHJvY2Vzc2VkLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9LCA1MDAwKTtcbiAgfSxcbn0pO1xuIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsNCw1LDYsNywxMCwxMSwxMiwxMywxNCwxNSwxNl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0EsU0FBUyxvQkFBb0IsWUFBWTtBQUN4QyxTQUFPOzs7OztBQ0ZS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