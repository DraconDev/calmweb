var mediaFilter = (function() {
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
	//#region src/neutralizer/local-rules.ts
	var NEUTRALIZATION_RULES = [
		{
			pattern: /\b(shocking|jaw-dropping|mind-blowing|earth-shattering|game-changing)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(you won't believe)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(you won't BELIEVE)\b/g,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(this will make you (angry|furious|mad|rage))\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(can't believe)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(will make your blood boil)\b/gi,
			replacement: "may concern you",
			strength: "medium"
		},
		{
			pattern: /\b(blood boil)\b/gi,
			replacement: "concern",
			strength: "medium"
		},
		{
			pattern: /\boutrage\b/gi,
			replacement: "discussion",
			strength: "medium"
		},
		{
			pattern: /\boutraged\b/gi,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\bfurious\b/gi,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\b(furiously|fury)\b/gi,
			replacement: "strongly",
			strength: "medium"
		},
		{
			pattern: /\b(people are (angry|furious|outraged))\b/gi,
			replacement: "people are discussing",
			strength: "medium"
		},
		{
			pattern: /\b(backlash( erupts| grows| over)?)\b/gi,
			replacement: "response",
			strength: "medium"
		},
		{
			pattern: /\b(sparks? outrage)\b/gi,
			replacement: "prompts discussion",
			strength: "medium"
		},
		{
			pattern: /\b(terrifying( new| truth| reality)?)\b/gi,
			replacement: "concerning",
			strength: "medium"
		},
		{
			pattern: /\b(TERRIFYING)\b/g,
			replacement: "Concerning",
			strength: "medium"
		},
		{
			pattern: /\b(terrified)\b/gi,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\b(disaster|catastrophe)\b/gi,
			replacement: "situation",
			strength: "strict"
		},
		{
			pattern: /\b(democrat|republican)\b/gi,
			replacement: "politician",
			strength: "strict"
		},
		{
			pattern: /\b(democrats|republicans)\b/gi,
			replacement: "politicians",
			strength: "strict"
		},
		{
			pattern: /\b(the (real|hidden|secret) truth)\b/gi,
			replacement: "the facts",
			strength: "medium"
		},
		{
			pattern: /\b(what (they|the media|experts) (won't|don't) tell you)\b/gi,
			replacement: "what may not be widely known",
			strength: "medium"
		},
		{
			pattern: /\b(breaking:)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(BREAKING:)\b/g,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(breaking news[:\s]*)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(explosive|bombshell|stunning)\b/gi,
			replacement: "significant",
			strength: "light"
		},
		{
			pattern: /\b(one weird trick)\b/gi,
			replacement: "a method",
			strength: "light"
		},
		{
			pattern: /\b(doctors (hate|don't want you to know))\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(EXCLUSIVE[:\s]+(report|news|video|story|interview|photos|images))/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(leaked[:\s])/gi,
			replacement: "reported:",
			strength: "medium"
		},
		{
			pattern: /\b(they don't want you to know)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b([A-Z]+[\s]+DESTROY(ED|S|ING)?)\b/g,
			replacement: "affects",
			strength: "medium"
		},
		{
			pattern: /\b(GETS?\s+DESTROY(ED)?)\b/gi,
			replacement: "is affected",
			strength: "medium"
		},
		{
			pattern: /\b(DESTROY(ED|S)?\s+BY)\b/gi,
			replacement: "affected by",
			strength: "medium"
		},
		{
			pattern: /\b(destroy\s+(everything|everyone|all|completely|totally))\b/gi,
			replacement: "affect",
			strength: "medium"
		},
		{
			pattern: /\b(ABSOLUTE(LY)? (DISASTER|GARBAGE|TRASH|NIGHTMARE))\b/gi,
			replacement: "significant issue",
			strength: "medium"
		},
		{
			pattern: /\b(disgusting)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(DISGUSTING)\b/g,
			replacement: "Problematic",
			strength: "medium"
		},
		{
			pattern: /\b(infuriating)\b/gi,
			replacement: "frustrating",
			strength: "medium"
		},
		{
			pattern: /\b(INFURIATING)\b/g,
			replacement: "Frustrating",
			strength: "medium"
		},
		{
			pattern: /\b(outrageous)\b/gi,
			replacement: "questionable",
			strength: "medium"
		},
		{
			pattern: /\b(SHOCK(ing|ed|s)?)\b/g,
			replacement: "Surprise",
			strength: "light"
		},
		{
			pattern: /\b(shock(ing|ed|s)?)\b/gi,
			replacement: "surprise",
			strength: "light"
		},
		{
			pattern: /\b(BELIEVE)\b/g,
			replacement: "consider",
			strength: "light"
		},
		{
			pattern: /\b(UNACCEPTABLE)\b/g,
			replacement: "Problematic",
			strength: "medium"
		},
		{
			pattern: /\b(unacceptable)\b/g,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(MORON(S)?)\b/g,
			replacement: "people",
			strength: "medium"
		},
		{
			pattern: /\b(moron(s)?)\b/gi,
			replacement: "people",
			strength: "medium"
		},
		{
			pattern: /\b(IDIOT(S)?)\b/g,
			replacement: "people",
			strength: "medium"
		},
		{
			pattern: /\b(idiot(s)?)\b/gi,
			replacement: "people",
			strength: "medium"
		},
		{
			pattern: /\b(STUPID)\b/g,
			replacement: "unwise",
			strength: "medium"
		},
		{
			pattern: /\b(stupid)\b/gi,
			replacement: "unwise",
			strength: "medium"
		},
		{
			pattern: /\b(BRAIN[- ]DEAD)\b/gi,
			replacement: "uninformed",
			strength: "medium"
		},
		{
			pattern: /\b(brain[- ]dead)\b/gi,
			replacement: "uninformed",
			strength: "medium"
		},
		{
			pattern: /\b(TRASH)\b/g,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(trash)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(GARBAGE)\b/g,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(garbage)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(INSANE)\b/g,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(insane)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(SPEECHLESS)\b/g,
			replacement: "surprised",
			strength: "medium"
		},
		{
			pattern: /\b(speechless)\b/gi,
			replacement: "surprised",
			strength: "medium"
		},
		{
			pattern: /\b(FURIOUS)\b/g,
			replacement: "Concerned",
			strength: "medium"
		},
		{
			pattern: /\b(FURIOUSLY)\b/g,
			replacement: "Strongly",
			strength: "medium"
		},
		{
			pattern: /\b(OUTRAGED)\b/g,
			replacement: "Concerned",
			strength: "medium"
		},
		{
			pattern: /\b(OUTRAGEOUS)\b/g,
			replacement: "Questionable",
			strength: "medium"
		},
		{
			pattern: /\b(RAGE)\b/g,
			replacement: "concern",
			strength: "medium"
		},
		{
			pattern: /\b(RAGING)\b/g,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\b(HORRIBLE)\b/g,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(horrible)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(DISASTER)\b/g,
			replacement: "Issue",
			strength: "medium"
		},
		{
			pattern: /\b(ABSOLUTE)\b/g,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(absolute)\b/g,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(CORRUPT)\b/g,
			replacement: "controversial",
			strength: "medium"
		},
		{
			pattern: /\b(corrupt)\b/gi,
			replacement: "controversial",
			strength: "medium"
		},
		{
			pattern: /\b(SECRET)\b/g,
			replacement: "undisclosed",
			strength: "light"
		},
		{
			pattern: /\b(HIDING)\b/g,
			replacement: "withholding",
			strength: "light"
		},
		{
			pattern: /\b(hiding)\b/gi,
			replacement: "withholding",
			strength: "light"
		},
		{
			pattern: /\b(SILENT)\b/g,
			replacement: "quiet",
			strength: "light"
		},
		{
			pattern: /\b(SILENCE)\b/g,
			replacement: "quiet",
			strength: "light"
		},
		{
			pattern: /\b(EXPOSED)\b/g,
			replacement: "revealed",
			strength: "light"
		},
		{
			pattern: /\b(exposed)\b/gi,
			replacement: "revealed",
			strength: "light"
		},
		{
			pattern: /\b(EVERYTHING)\b/g,
			replacement: "a lot",
			strength: "light"
		},
		{
			pattern: /\b(INCREDIBLE)\b/g,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(incredible)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(AMAZING)\b/g,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(amazing)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(MUST (SEE|READ|WATCH))\b/g,
			replacement: "may want to see",
			strength: "light"
		},
		{
			pattern: /\b(NEED TO (SEE|READ|KNOW))\b/gi,
			replacement: "may want to",
			strength: "light"
		},
		{
			pattern: /\b(NEED TO)\b/g,
			replacement: "may want to",
			strength: "light"
		},
		{
			pattern: /\b(URGENT:?)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(act now)\b/gi,
			replacement: "consider",
			strength: "medium"
		},
		{
			pattern: /\b(before it's too late)\b/gi,
			replacement: "",
			strength: "medium"
		},
		{
			pattern: /\b(will leave you (speechless|furious|angry|outraged))\b/gi,
			replacement: "may interest you",
			strength: "medium"
		},
		{
			pattern: /\b(make you (lose faith|sick|angry|furious))\b/gi,
			replacement: "may concern you",
			strength: "medium"
		},
		{
			pattern: /\b(ROASTING)\b/g,
			replacement: "criticizing",
			strength: "medium"
		},
		{
			pattern: /\b(CANCELED)\b/g,
			replacement: "criticized",
			strength: "medium"
		},
		{
			pattern: /\b(CANCELLING)\b/g,
			replacement: "criticizing",
			strength: "medium"
		},
		{
			pattern: /\b(DESERVE)\b/g,
			replacement: "may face",
			strength: "medium"
		},
		{
			pattern: /\b(DESPICABLE)\b/g,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(ATROCIOUS)\b/g,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(UNBELIEVABLE)\b/g,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(unbelievable)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(AUDACITY)\b/g,
			replacement: "action",
			strength: "medium"
		},
		{
			pattern: /\b(audacity)\b/gi,
			replacement: "action",
			strength: "medium"
		},
		{
			pattern: /\b(MIND-BOGGLING)\b/g,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(SICK)\b/g,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\b(SHAKING)\b/g,
			replacement: "affected",
			strength: "medium"
		},
		{
			pattern: /\b(TRAVESTY)\b/g,
			replacement: "situation",
			strength: "medium"
		},
		{
			pattern: /\b(travesty)\b/gi,
			replacement: "situation",
			strength: "medium"
		},
		{
			pattern: /\b(FAITH IN HUMANITY)\b/gi,
			replacement: "confidence",
			strength: "medium"
		},
		{
			pattern: /\b(ASHAMED)\b/g,
			replacement: "should reconsider",
			strength: "medium"
		},
		{
			pattern: /\b(should be ashamed)\b/gi,
			replacement: "should reconsider",
			strength: "medium"
		},
		{
			pattern: /\b(LOSE ALL FAITH)\b/gi,
			replacement: "be concerned",
			strength: "medium"
		},
		{
			pattern: /\b(LOSE FAITH)\b/gi,
			replacement: "be concerned",
			strength: "medium"
		},
		{
			pattern: /\b(RADICAL)\b/g,
			replacement: "active",
			strength: "medium"
		},
		{
			pattern: /\b(radical)\b/gi,
			replacement: "active",
			strength: "medium"
		},
		{
			pattern: /\b(END OF)\b/g,
			replacement: "change in",
			strength: "medium"
		},
		{
			pattern: /\b(DANGER)\b/g,
			replacement: "issue",
			strength: "medium"
		},
		{
			pattern: /\b(danger)\b/gi,
			replacement: "issue",
			strength: "medium"
		},
		{
			pattern: /\b(DANGEROUS)\b/g,
			replacement: "risky",
			strength: "medium"
		},
		{
			pattern: /\b(dangerous)\b/gi,
			replacement: "risky",
			strength: "medium"
		},
		{
			pattern: /^(WARNING:)\s*/gi,
			replacement: "Note:",
			strength: "medium"
		},
		{
			pattern: /\bWARNING:\s*/gi,
			replacement: "Note: ",
			strength: "medium"
		},
		{
			pattern: /\b(ALARMING)\b/g,
			replacement: "Notable",
			strength: "medium"
		},
		{
			pattern: /\b(alarming)\b/gi,
			replacement: "notable",
			strength: "medium"
		},
		{
			pattern: /\b(NIGHTMARE)\b/g,
			replacement: "difficult situation",
			strength: "medium"
		},
		{
			pattern: /\b(nightmare)\b/gi,
			replacement: "difficult situation",
			strength: "medium"
		},
		{
			pattern: /\b(TERROR)\b/g,
			replacement: "concern",
			strength: "medium"
		},
		{
			pattern: /\b(terror)\b/gi,
			replacement: "concern",
			strength: "medium"
		},
		{
			pattern: /\b(WORST)\b/g,
			replacement: "challenging",
			strength: "medium"
		},
		{
			pattern: /\b(worst)\b/gi,
			replacement: "challenging",
			strength: "medium"
		},
		{
			pattern: /\b(KAREN)\b/gi,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(ENTITLED)\b/g,
			replacement: "assertive",
			strength: "medium"
		},
		{
			pattern: /\b(entitled)\b/gi,
			replacement: "assertive",
			strength: "medium"
		},
		{
			pattern: /\b(ENTITLEMENT)\b/g,
			replacement: "behavior",
			strength: "medium"
		},
		{
			pattern: /\b(entitlement)\b/gi,
			replacement: "behavior",
			strength: "medium"
		},
		{
			pattern: /\b(THIS IS THE END)\b/gi,
			replacement: "This represents a change",
			strength: "medium"
		},
		{
			pattern: /\b(THIS IS)\s+(THE|ABSOLUTE|MOST)\b/gi,
			replacement: "This is",
			strength: "medium"
		},
		{
			pattern: /\b(THEY (HATE|DON'T WANT))\b/gi,
			replacement: "They may not prefer",
			strength: "light"
		},
		{
			pattern: /\b(HATE)\b/g,
			replacement: "dislike",
			strength: "medium"
		},
		{
			pattern: /\b(hate)\b/gi,
			replacement: "dislike",
			strength: "medium"
		},
		{
			pattern: /\b(HATERS)\b/g,
			replacement: "critics",
			strength: "medium"
		},
		{
			pattern: /\b(TRUTH (THEY|THEY'RE|THAT))\b/gi,
			replacement: "information that",
			strength: "medium"
		},
		{
			pattern: /\b(THE TRUTH)\b/g,
			replacement: "The information",
			strength: "medium"
		},
		{
			pattern: /\b(WHAT'S REALLY)\b/gi,
			replacement: "what",
			strength: "light"
		},
		{
			pattern: /\b(REALLY HAPPENING)\b/gi,
			replacement: "occurring",
			strength: "light"
		},
		{
			pattern: /\b(CHANGES EVERYTHING)\b/gi,
			replacement: "is significant",
			strength: "light"
		},
		{
			pattern: /\b(GUARANTEED)\b/g,
			replacement: "possibly",
			strength: "light"
		},
		{
			pattern: /\b(guaranteed)\b/gi,
			replacement: "possibly",
			strength: "light"
		},
		{
			pattern: /\b(YOU'LL (BE|WANT TO|HATE|LOVE))\b/gi,
			replacement: "You may",
			strength: "light"
		},
		{
			pattern: /\b(YOU WILL)\b/gi,
			replacement: "You may",
			strength: "light"
		},
		{
			pattern: /\b(WILL MAKE YOU)\b/gi,
			replacement: "may",
			strength: "light"
		},
		{
			pattern: /\b(DON'T MISS)\b/gi,
			replacement: "Consider",
			strength: "light"
		},
		{
			pattern: /\b(HAVE TO SEE)\b/gi,
			replacement: "may want to see",
			strength: "light"
		},
		{
			pattern: /\b(HAS TO)\b/gi,
			replacement: "should",
			strength: "light"
		},
		{
			pattern: /\b(YOU NEED)\b/gi,
			replacement: "You may want",
			strength: "light"
		},
		{
			pattern: /\b(MUST SEE)\b/gi,
			replacement: "worth seeing",
			strength: "light"
		},
		{
			pattern: /\b(SECRET AGENDA)\b/gi,
			replacement: "private plans",
			strength: "medium"
		},
		{
			pattern: /\b(AGENDA)\b/g,
			replacement: "plans",
			strength: "light"
		},
		{
			pattern: /\b(EXPOSE)\b/g,
			replacement: "reveal",
			strength: "light"
		},
		{
			pattern: /\b(expose)\b/gi,
			replacement: "reveal",
			strength: "light"
		},
		{
			pattern: /\b(LIAR)\b/g,
			replacement: "incorrect",
			strength: "medium"
		},
		{
			pattern: /\b(liar)\b/gi,
			replacement: "incorrect",
			strength: "medium"
		},
		{
			pattern: /\b(LYING)\b/g,
			replacement: "incorrect",
			strength: "medium"
		},
		{
			pattern: /\b(lying)\b/gi,
			replacement: "incorrect",
			strength: "medium"
		},
		{
			pattern: /\b(LIES)\b/g,
			replacement: "inaccuracies",
			strength: "medium"
		},
		{
			pattern: /\b(lies)\b/gi,
			replacement: "inaccuracies",
			strength: "medium"
		},
		{
			pattern: /\b(FRAUD)\b/g,
			replacement: "irregularity",
			strength: "medium"
		},
		{
			pattern: /\b(fraud)\b/gi,
			replacement: "irregularity",
			strength: "medium"
		},
		{
			pattern: /\b(SCAM)\b/g,
			replacement: "questionable practice",
			strength: "medium"
		},
		{
			pattern: /\b(scam)\b/gi,
			replacement: "questionable practice",
			strength: "medium"
		},
		{
			pattern: /\b(RIGGED)\b/g,
			replacement: "biased",
			strength: "medium"
		},
		{
			pattern: /\b(rigged)\b/gi,
			replacement: "biased",
			strength: "medium"
		},
		{
			pattern: /\b(FAKE)\b/g,
			replacement: "questionable",
			strength: "medium"
		},
		{
			pattern: /\b(fake)\b/gi,
			replacement: "questionable",
			strength: "medium"
		},
		{
			pattern: /\b(HOAX)\b/g,
			replacement: "disputed claim",
			strength: "medium"
		},
		{
			pattern: /\b(hoax)\b/gi,
			replacement: "disputed claim",
			strength: "medium"
		},
		{
			pattern: /\b(SHILL)\b/g,
			replacement: "supporter",
			strength: "medium"
		},
		{
			pattern: /\b(shill)\b/gi,
			replacement: "supporter",
			strength: "medium"
		},
		{
			pattern: /\b(PROPAGANDA)\b/g,
			replacement: "content",
			strength: "medium"
		},
		{
			pattern: /\b(propaganda)\b/gi,
			replacement: "content",
			strength: "medium"
		},
		{
			pattern: /\b(BRAINWASH(ING|ED)?)\b/gi,
			replacement: "influencing",
			strength: "medium"
		},
		{
			pattern: /\b(MANIPULAT(ING|ED|ION)?)\b/gi,
			replacement: "influencing",
			strength: "medium"
		},
		{
			pattern: /\b(GASLIGHT(ING)?)\b/gi,
			replacement: "confusing",
			strength: "medium"
		},
		{
			pattern: /\b(WOKE)\b/g,
			replacement: "progressive",
			strength: "strict"
		},
		{
			pattern: /\b(ANTI[- ]?WAKE)\b/gi,
			replacement: "traditional",
			strength: "strict"
		},
		{
			pattern: /\b(SJW)\b/g,
			replacement: "activist",
			strength: "strict"
		},
		{
			pattern: /\b(SNOWFLAKE)\b/g,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(BOOMER)\b/g,
			replacement: "older person",
			strength: "medium"
		},
		{
			pattern: /\b(ZOOMER)\b/g,
			replacement: "younger person",
			strength: "medium"
		},
		{
			pattern: /\b(OK BOOMER)\b/gi,
			replacement: "I disagree",
			strength: "medium"
		},
		{
			pattern: /\b(TRIGGERED)\b/g,
			replacement: "upset",
			strength: "medium"
		},
		{
			pattern: /\b(triggered)\b/gi,
			replacement: "upset",
			strength: "medium"
		},
		{
			pattern: /\b(CUCK)\b/gi,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(SIMP)\b/gi,
			replacement: "supporter",
			strength: "medium"
		},
		{
			pattern: /\b(INCEL)\b/gi,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(NORMIE)\b/gi,
			replacement: "average person",
			strength: "medium"
		},
		{
			pattern: /\b(NPC)\b/g,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(CHAD)\b/g,
			replacement: "confident person",
			strength: "medium"
		},
		{
			pattern: /\b(BASED)\b/g,
			replacement: "principled",
			strength: "medium"
		},
		{
			pattern: /\b(CRINGE)\b/g,
			replacement: "awkward",
			strength: "medium"
		},
		{
			pattern: /\b(cringe)\b/gi,
			replacement: "awkward",
			strength: "medium"
		},
		{
			pattern: /\b(CRINGEY)\b/g,
			replacement: "awkward",
			strength: "medium"
		},
		{
			pattern: /\b(CRINGY)\b/g,
			replacement: "awkward",
			strength: "medium"
		},
		{
			pattern: /\b(YIKES)\b/g,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(OOF)\b/g,
			replacement: "unfortunate",
			strength: "light"
		},
		{
			pattern: /\b(YEET)\b/g,
			replacement: "discard",
			strength: "light"
		},
		{
			pattern: /\b(NO CAP)\b/gi,
			replacement: "honestly",
			strength: "light"
		},
		{
			pattern: /\b(CAP)\b/g,
			replacement: "exaggeration",
			strength: "light"
		},
		{
			pattern: /\b(BET)\b/g,
			replacement: "agreed",
			strength: "light"
		},
		{
			pattern: /\b(SLAY)\b/g,
			replacement: "succeed",
			strength: "light"
		},
		{
			pattern: /\b(ICONIC)\b/g,
			replacement: "memorable",
			strength: "light"
		},
		{
			pattern: /\b(LEGENDARY)\b/g,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(GOAT)\b/g,
			replacement: "greatest",
			strength: "light"
		},
		{
			pattern: /\b(FIRE)\b/g,
			replacement: "good",
			strength: "light"
		},
		{
			pattern: /\b(LIT)\b/g,
			replacement: "exciting",
			strength: "light"
		},
		{
			pattern: /\b(DOPE)\b/g,
			replacement: "good",
			strength: "light"
		},
		{
			pattern: /\b(SICK!)\b/g,
			replacement: "impressive",
			strength: "light"
		},
		{
			pattern: /\b(WILD)\b/g,
			replacement: "unusual",
			strength: "light"
		},
		{
			pattern: /\b(THROW YOUR PHONE)\b/gi,
			replacement: "be frustrated",
			strength: "medium"
		},
		{
			pattern: /\b(THROW (MY|YOUR|HIS|HER) PHONE)\b/gi,
			replacement: "be frustrated",
			strength: "medium"
		},
		{
			pattern: /\b(WANT TO THROW)\b/gi,
			replacement: "be frustrated by",
			strength: "medium"
		},
		{
			pattern: /\b(PUNCH (MY|THE|A) SCREEN)\b/gi,
			replacement: "be frustrated",
			strength: "medium"
		},
		{
			pattern: /\b(SCREAM(ING)? AT (MY|THE) SCREEN)\b/gi,
			replacement: "frustrated",
			strength: "medium"
		},
		{
			pattern: /\b(RAGE QUIT)\b/gi,
			replacement: "stop",
			strength: "medium"
		},
		{
			pattern: /\b(UNSUBSCRIBE)\b/g,
			replacement: "disagree",
			strength: "light"
		},
		{
			pattern: /\b(DISLIKE)\b/g,
			replacement: "disagree",
			strength: "light"
		},
		{
			pattern: /\b(RATIO)\b/g,
			replacement: "response",
			strength: "light"
		},
		{
			pattern: /\b(L)\b/g,
			replacement: "loss",
			strength: "light"
		},
		{
			pattern: /\b(W)\b/g,
			replacement: "success",
			strength: "light"
		},
		{
			pattern: /\b(F IN CHAT)\b/gi,
			replacement: "acknowledgment",
			strength: "light"
		},
		{
			pattern: /\b(RIP)\b/g,
			replacement: "unfortunate",
			strength: "light"
		},
		{
			pattern: /\b(DEAD)\b/g,
			replacement: "amused",
			strength: "light"
		},
		{
			pattern: /\b(I'M DEAD)\b/gi,
			replacement: "amused",
			strength: "light"
		},
		{
			pattern: /\b(DYING)\b/g,
			replacement: "very amused",
			strength: "light"
		},
		{
			pattern: /\b(I CAN'T)\b/g,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(I CAN'T EVEN)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(SAME)\b/g,
			replacement: "I agree",
			strength: "light"
		},
		{
			pattern: /\b(MOOD)\b/g,
			replacement: "feeling",
			strength: "light"
		},
		{
			pattern: /\b(BIG MOOD)\b/gi,
			replacement: "strong feeling",
			strength: "light"
		},
		{
			pattern: /\b(REAL)\b/g,
			replacement: "accurate",
			strength: "light"
		},
		{
			pattern: /\b(FR)\b/g,
			replacement: "honestly",
			strength: "light"
		},
		{
			pattern: /\b(LOWKEY)\b/g,
			replacement: "somewhat",
			strength: "light"
		},
		{
			pattern: /\b(HIGHKEY)\b/g,
			replacement: "definitely",
			strength: "light"
		},
		{
			pattern: /\b(LOW KEY)\b/gi,
			replacement: "somewhat",
			strength: "light"
		},
		{
			pattern: /\b(HIGH KEY)\b/gi,
			replacement: "definitely",
			strength: "light"
		},
		{
			pattern: /\b(LEGIT)\b/g,
			replacement: "genuinely",
			strength: "light"
		},
		{
			pattern: /\b(LEGITIMATELY)\b/g,
			replacement: "genuinely",
			strength: "light"
		},
		{
			pattern: /\b(FOR REAL)\b/gi,
			replacement: "genuinely",
			strength: "light"
		},
		{
			pattern: /\b(NO LIE)\b/gi,
			replacement: "honestly",
			strength: "light"
		},
		{
			pattern: /\b(FR FR)\b/gi,
			replacement: "honestly",
			strength: "light"
		},
		{
			pattern: /\b(PERIODT?)\b/gi,
			replacement: "definitively",
			strength: "light"
		},
		{
			pattern: /\b(PERIODT)\b/gi,
			replacement: "definitively",
			strength: "light"
		},
		{
			pattern: /\b(AND I MEAN IT)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(SAY IT LOUDER)\b/gi,
			replacement: "I agree",
			strength: "light"
		},
		{
			pattern: /\b(SAY IT WITH ME)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(CAN WE TALK ABOUT)\b/gi,
			replacement: "Consider",
			strength: "light"
		},
		{
			pattern: /\b(LET'S TALK ABOUT)\b/gi,
			replacement: "Consider",
			strength: "light"
		},
		{
			pattern: /\b(WE NEED TO TALK ABOUT)\b/gi,
			replacement: "Consider",
			strength: "light"
		},
		{
			pattern: /\b(I HAVE THOUGHTS)\b/gi,
			replacement: "I have opinions",
			strength: "light"
		},
		{
			pattern: /\b(THOUGHTS\?)\b/g,
			replacement: "Opinions?",
			strength: "light"
		},
		{
			pattern: /\b(HOT TAKE)\b/gi,
			replacement: "opinion",
			strength: "light"
		},
		{
			pattern: /\b(UNPOPULAR OPINION)\b/gi,
			replacement: "opinion",
			strength: "light"
		},
		{
			pattern: /\b(POPULAR OPINION)\b/gi,
			replacement: "common view",
			strength: "light"
		},
		{
			pattern: /\b(SPOILER ALERT)\b/gi,
			replacement: "note",
			strength: "light"
		},
		{
			pattern: /\b(MAJOR SPOILER)\b/gi,
			replacement: "note",
			strength: "light"
		},
		{
			pattern: /\b(SPOILER)\b/g,
			replacement: "detail",
			strength: "light"
		},
		{
			pattern: /\b(PLOT TWIST)\b/gi,
			replacement: "development",
			strength: "light"
		},
		{
			pattern: /\b(REVEAL)\b/g,
			replacement: "detail",
			strength: "light"
		},
		{
			pattern: /\b(CLIFFHANGER)\b/g,
			replacement: "suspenseful ending",
			strength: "light"
		},
		{
			pattern: /\b(TWIST ENDING)\b/gi,
			replacement: "unexpected ending",
			strength: "light"
		},
		{
			pattern: /\b(TWIST)\b/g,
			replacement: "development",
			strength: "light"
		},
		{
			pattern: /\b(JAW[- ]?DROP(PING)?)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(GENIUS(ES)?)\b/gi,
			replacement: "smart person",
			strength: "light"
		},
		{
			pattern: /\b(BRIDEZILLA)\b/gi,
			replacement: "stressed bride",
			strength: "medium"
		},
		{
			pattern: /\b(PRICELESS)\b/g,
			replacement: "Notable",
			strength: "light"
		},
		{
			pattern: /\b(priceless)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(IN TEARS)\b/gi,
			replacement: "emotional",
			strength: "light"
		},
		{
			pattern: /\b(DELUSIONAL)\b/g,
			replacement: "mistaken",
			strength: "medium"
		},
		{
			pattern: /\b(delusional)\b/gi,
			replacement: "mistaken",
			strength: "medium"
		},
		{
			pattern: /\b(PATHETIC)\b/g,
			replacement: "Unfortunate",
			strength: "medium"
		},
		{
			pattern: /\b(pathetic)\b/gi,
			replacement: "unfortunate",
			strength: "medium"
		},
		{
			pattern: /\b(CONTEMPT)\b/g,
			replacement: "disagreement",
			strength: "medium"
		},
		{
			pattern: /\b(contempt)\b/gi,
			replacement: "disagreement",
			strength: "medium"
		},
		{
			pattern: /\b(CRIMINAL)\b/g,
			replacement: "Questionable",
			strength: "medium"
		},
		{
			pattern: /\b(criminal)\b/gi,
			replacement: "questionable",
			strength: "medium"
		},
		{
			pattern: /\b(LOCKED UP)\b/gi,
			replacement: "held accountable",
			strength: "medium"
		},
		{
			pattern: /\b(WASTES? OF OXYGEN)\b/gi,
			replacement: "people",
			strength: "medium"
		},
		{
			pattern: /\b(WASTE OF SPACE)\b/gi,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(WORST PERSON)\b/gi,
			replacement: "challenging person",
			strength: "medium"
		},
		{
			pattern: /\b(THE WORST)\b/g,
			replacement: "challenging",
			strength: "medium"
		},
		{
			pattern: /\b(TERRIBLY)\b/g,
			replacement: "Poorly",
			strength: "light"
		},
		{
			pattern: /\b(terribly)\b/gi,
			replacement: "poorly",
			strength: "light"
		},
		{
			pattern: /\b(LITERALLY DYING)\b/gi,
			replacement: "very amused",
			strength: "light"
		},
		{
			pattern: /\b(LITERALLY)\b/g,
			replacement: "Seriously",
			strength: "light"
		},
		{
			pattern: /\b(CAN'T EVEN)\b/gi,
			replacement: "am affected",
			strength: "light"
		},
		{
			pattern: /\b(I CAN'T)\b/g,
			replacement: "Notable",
			strength: "light"
		},
		{
			pattern: /\b(IMMEDIATELY)\b/g,
			replacement: "Soon",
			strength: "light"
		},
		{
			pattern: /\b(immediately)\b/gi,
			replacement: "soon",
			strength: "light"
		},
		{
			pattern: /\b(RIGHT NOW)\b/g,
			replacement: "now",
			strength: "light"
		},
		{
			pattern: /\b(right now)\b/gi,
			replacement: "now",
			strength: "light"
		},
		{
			pattern: /\b(THIS VERY MOMENT)\b/gi,
			replacement: "now",
			strength: "light"
		},
		{
			pattern: /\b(BEFORE IT'S TOO LATE)\b/gi,
			replacement: "soon",
			strength: "medium"
		},
		{
			pattern: /\b(TOO LATE)\b/g,
			replacement: "delayed",
			strength: "medium"
		},
		{
			pattern: /\b(INSANE)\b/g,
			replacement: "Unusual",
			strength: "medium"
		},
		{
			pattern: /\b(ABSOLUTELY)\b/g,
			replacement: "Very",
			strength: "light"
		},
		{
			pattern: /\b(absolutely)\b/gi,
			replacement: "very",
			strength: "light"
		},
		{
			pattern: /\b(COMPLETELY)\b/g,
			replacement: "Very",
			strength: "light"
		},
		{
			pattern: /\b(completely)\b/gi,
			replacement: "very",
			strength: "light"
		},
		{
			pattern: /\b(TOTALLY)\b/g,
			replacement: "Very",
			strength: "light"
		},
		{
			pattern: /\b(totally)\b/gi,
			replacement: "very",
			strength: "light"
		},
		{
			pattern: /\b(UTTERLY)\b/g,
			replacement: "Very",
			strength: "light"
		},
		{
			pattern: /\b(utterly)\b/gi,
			replacement: "very",
			strength: "light"
		},
		{
			pattern: /\b(DEVESTATED)\b/gi,
			replacement: "affected",
			strength: "medium"
		},
		{
			pattern: /\b(DEVASTATING)\b/g,
			replacement: "Significant",
			strength: "medium"
		},
		{
			pattern: /\b(devastating)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(HEARTBROKEN)\b/gi,
			replacement: "disappointed",
			strength: "medium"
		},
		{
			pattern: /\b(HEARTBREAKING)\b/gi,
			replacement: "sad",
			strength: "medium"
		},
		{
			pattern: /\b(EMBARRASSING)\b/g,
			replacement: "Unusual",
			strength: "medium"
		},
		{
			pattern: /\b(embarrassing)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(EMBARRASSED)\b/gi,
			replacement: "uncomfortable",
			strength: "medium"
		},
		{
			pattern: /\b(HUMILIATED)\b/gi,
			replacement: "uncomfortable",
			strength: "medium"
		},
		{
			pattern: /\b(HUMILIATES?)\b/gi,
			replacement: "affects",
			strength: "medium"
		},
		{
			pattern: /\b(HUMILIATING)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(DISGRACE(FUL)?)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(SHAME(FUL)?)\b/gi,
			replacement: "unfortunate",
			strength: "medium"
		},
		{
			pattern: /\b(SHAME ON)\b/gi,
			replacement: "consider",
			strength: "medium"
		},
		{
			pattern: /\b(UNTHINKABLE)\b/g,
			replacement: "Unusual",
			strength: "medium"
		},
		{
			pattern: /\b(unthinkable)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(INDESCRIBABLE)\b/g,
			replacement: "Notable",
			strength: "light"
		},
		{
			pattern: /\b(indescribable)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(BEYOND WORDS)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(NO WORDS)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(FORGET)\b/g,
			replacement: "Note",
			strength: "light"
		},
		{
			pattern: /\b(FORGET TO)\b/gi,
			replacement: "remember to",
			strength: "light"
		},
		{
			pattern: /\b(WON'T FORGET)\b/gi,
			replacement: "will remember",
			strength: "light"
		},
		{
			pattern: /\b(NEVER FORGET)\b/gi,
			replacement: "remember",
			strength: "light"
		},
		{
			pattern: /\b(WILL BE REMEMBERED)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(FOREVER)\b/g,
			replacement: "For a long time",
			strength: "light"
		},
		{
			pattern: /\b(forever)\b/gi,
			replacement: "for a long time",
			strength: "light"
		},
		{
			pattern: /\b(ETERNITY)\b/gi,
			replacement: "a long time",
			strength: "light"
		},
		{
			pattern: /\b(CHANGE YOUR LIFE)\b/gi,
			replacement: "affect you",
			strength: "light"
		},
		{
			pattern: /\b(CHANGED MY LIFE)\b/gi,
			replacement: "affected me",
			strength: "light"
		},
		{
			pattern: /\b(LIFE-CHANGING)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(LIFE ALTERING)\b/gi,
			replacement: "significant",
			strength: "light"
		},
		{
			pattern: /\b(PROVE THEM WRONG)\b/gi,
			replacement: "demonstrate",
			strength: "medium"
		},
		{
			pattern: /\b(PROVED THEM WRONG)\b/gi,
			replacement: "demonstrated",
			strength: "medium"
		},
		{
			pattern: /\b(PROVE EVERYONE WRONG)\b/gi,
			replacement: "demonstrate",
			strength: "medium"
		},
		{
			pattern: /\b(EXPOSED)\b/g,
			replacement: "Revealed",
			strength: "light"
		},
		{
			pattern: /\b(EXPOSES?)\b/gi,
			replacement: "reveals",
			strength: "light"
		},
		{
			pattern: /\b(GETS EXPOSED)\b/gi,
			replacement: "is revealed",
			strength: "light"
		},
		{
			pattern: /\b(BANNED)\b/g,
			replacement: "Restricted",
			strength: "light"
		},
		{
			pattern: /\b(banned)\b/gi,
			replacement: "restricted",
			strength: "light"
		},
		{
			pattern: /\b(CENSORED)\b/gi,
			replacement: "filtered",
			strength: "medium"
		},
		{
			pattern: /\b(CENSORSHIP)\b/gi,
			replacement: "filtering",
			strength: "medium"
		},
		{
			pattern: /\b(WENT VIRAL)\b/gi,
			replacement: "became popular",
			strength: "light"
		},
		{
			pattern: /\b(VIRAL)\b/g,
			replacement: "Popular",
			strength: "light"
		},
		{
			pattern: /\b(viral)\b/gi,
			replacement: "popular",
			strength: "light"
		},
		{
			pattern: /\b(BREAK THE INTERNET)\b/gi,
			replacement: "become popular",
			strength: "light"
		},
		{
			pattern: /\b(TRENDING)\b/g,
			replacement: "Popular",
			strength: "light"
		},
		{
			pattern: /\b(trending)\b/gi,
			replacement: "popular",
			strength: "light"
		},
		{
			pattern: /\b(MELTDOWN)\b/g,
			replacement: "Reaction",
			strength: "medium"
		},
		{
			pattern: /\b(meltdown)\b/gi,
			replacement: "reaction",
			strength: "medium"
		},
		{
			pattern: /\b(IN FREEFALL)\b/gi,
			replacement: "declining",
			strength: "medium"
		},
		{
			pattern: /\b(PLUMMET(ING)?)\b/gi,
			replacement: "declining",
			strength: "medium"
		},
		{
			pattern: /\b(THROUGH THE ROOF)\b/gi,
			replacement: "increasing",
			strength: "light"
		},
		{
			pattern: /\b(OFF THE CHARTS)\b/gi,
			replacement: "high",
			strength: "light"
		},
		{
			pattern: /\b(OFF THE RAILS)\b/gi,
			replacement: "chaotic",
			strength: "medium"
		},
		{
			pattern: /\b(OUT OF CONTROL)\b/gi,
			replacement: "unmanaged",
			strength: "medium"
		},
		{
			pattern: /\b(RUNNING SCARED)\b/gi,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\b(RUNNING FOR COVER)\b/gi,
			replacement: "responding",
			strength: "medium"
		},
		{
			pattern: /\b(SCRAMBLING)\b/gi,
			replacement: "working",
			strength: "medium"
		},
		{
			pattern: /\b(PANICKING)\b/gi,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\b(PANIC)\b/g,
			replacement: "Concern",
			strength: "medium"
		},
		{
			pattern: /\b(panic)\b/gi,
			replacement: "concern",
			strength: "medium"
		},
		{
			pattern: /\b(HYSTERIA)\b/gi,
			replacement: "reaction",
			strength: "medium"
		},
		{
			pattern: /\b(HYSTERICAL)\b/gi,
			replacement: "emotional",
			strength: "medium"
		},
		{
			pattern: /\b(FREAK(ING|S|ED)? OUT)\b/gi,
			replacement: "reacting",
			strength: "medium"
		},
		{
			pattern: /\b(FREAK)\b/g,
			replacement: "Person",
			strength: "medium"
		},
		{
			pattern: /\b(RANT)\b/g,
			replacement: "Commentary",
			strength: "medium"
		},
		{
			pattern: /\b(rant)\b/gi,
			replacement: "commentary",
			strength: "medium"
		},
		{
			pattern: /\b(RAGING)\b/g,
			replacement: "Concerned",
			strength: "medium"
		},
		{
			pattern: /\b(FUMING)\b/g,
			replacement: "Frustrated",
			strength: "medium"
		},
		{
			pattern: /\b(fuming)\b/gi,
			replacement: "frustrated",
			strength: "medium"
		},
		{
			pattern: /\b(STEAM(ING)?)\b/gi,
			replacement: "frustrated",
			strength: "medium"
		},
		{
			pattern: /\b(BLOW(ING)? UP)\b/gi,
			replacement: "expanding",
			strength: "medium"
		},
		{
			pattern: /\b(BLEW UP)\b/gi,
			replacement: "expanded",
			strength: "medium"
		},
		{
			pattern: /\b(ERUPT(ED|ING|S)?)\b/gi,
			replacement: "developed",
			strength: "medium"
		},
		{
			pattern: /\b(EXPLODE(S|D|ING)?)\b/gi,
			replacement: "expand",
			strength: "medium"
		},
		{
			pattern: /\b(IMPLODE(S|D|ING)?)\b/gi,
			replacement: "collapse",
			strength: "medium"
		},
		{
			pattern: /\b(COLLAPSE(S|D|ING)?)\b/gi,
			replacement: "fail",
			strength: "medium"
		},
		{
			pattern: /\b(CRUMBLE(S|D|ING)?)\b/gi,
			replacement: "fail",
			strength: "medium"
		},
		{
			pattern: /\b(CRASH(ING|ES|ED)?)\b/gi,
			replacement: "fail",
			strength: "medium"
		},
		{
			pattern: /\b(PLUNGE(S|D)?)\b/gi,
			replacement: "drop",
			strength: "medium"
		},
		{
			pattern: /\b(SOAR(ING|S|ED)?)\b/gi,
			replacement: "rise",
			strength: "medium"
		},
		{
			pattern: /\b(SURGE(S|D)?)\b/gi,
			replacement: "increase",
			strength: "medium"
		},
		{
			pattern: /\b(SKYROCKET(ING|S|ED)?)\b/gi,
			replacement: "increase",
			strength: "medium"
		},
		{
			pattern: /\b(SPIKE(S|D)?)\b/gi,
			replacement: "increase",
			strength: "medium"
		},
		{
			pattern: /\b(WENT TOO FAR)\b/gi,
			replacement: "was excessive",
			strength: "medium"
		},
		{
			pattern: /\b(CROSSED THE LINE)\b/gi,
			replacement: "was excessive",
			strength: "medium"
		},
		{
			pattern: /\b(OVER THE TOP)\b/gi,
			replacement: "excessive",
			strength: "medium"
		},
		{
			pattern: /\b(TOO FAR)\b/g,
			replacement: "Excessive",
			strength: "medium"
		},
		{
			pattern: /\b(ATROCITY)\b/gi,
			replacement: "problematic event",
			strength: "medium"
		},
		{
			pattern: /\b(ATROCIOUS)\b/g,
			replacement: "Problematic",
			strength: "medium"
		},
		{
			pattern: /\b(DEPRAVITY)\b/gi,
			replacement: "problematic behavior",
			strength: "medium"
		},
		{
			pattern: /\b(DEPRAVED)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(NAUSEATING)\b/gi,
			replacement: "unpleasant",
			strength: "medium"
		},
		{
			pattern: /\b(REPULSIVE)\b/gi,
			replacement: "unpleasant",
			strength: "medium"
		},
		{
			pattern: /\b(REVOLTING)\b/gi,
			replacement: "unpleasant",
			strength: "medium"
		},
		{
			pattern: /\b(VILE)\b/g,
			replacement: "Problematic",
			strength: "medium"
		},
		{
			pattern: /\b(vile)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(FILTH)\b/gi,
			replacement: "problematic content",
			strength: "medium"
		},
		{
			pattern: /\b(FILTHY)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(SCUM)\b/gi,
			replacement: "people",
			strength: "medium"
		},
		{
			pattern: /\b(VERMIN)\b/gi,
			replacement: "people",
			strength: "medium"
		},
		{
			pattern: /\b(DEGENERATE)\b/gi,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(LOWLIFE)\b/gi,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(PIECE OF WORK)\b/gi,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(WASTE OF TIME)\b/gi,
			replacement: "not useful",
			strength: "light"
		},
		{
			pattern: /\b(WASTE OF MONEY)\b/gi,
			replacement: "not valuable",
			strength: "light"
		},
		{
			pattern: /\b(TOTAL WASTE)\b/gi,
			replacement: "not useful",
			strength: "light"
		},
		{
			pattern: /\b(RIP-OFF)\b/gi,
			replacement: "overpriced",
			strength: "medium"
		},
		{
			pattern: /\b(SCAMMED)\b/gi,
			replacement: "deceived",
			strength: "medium"
		},
		{
			pattern: /\b(RIPPED OFF)\b/gi,
			replacement: "deceived",
			strength: "medium"
		},
		{
			pattern: /\b(PLAYED)\b/g,
			replacement: "Deceived",
			strength: "medium"
		},
		{
			pattern: /\b(GOT PLAYED)\b/gi,
			replacement: "was deceived",
			strength: "medium"
		},
		{
			pattern: /\b(TAKEN FOR A RIDE)\b/gi,
			replacement: "deceived",
			strength: "medium"
		},
		{
			pattern: /\b(TOOK ADVANTAGE)\b/gi,
			replacement: "used",
			strength: "medium"
		},
		{
			pattern: /\b(EXPLOITED)\b/gi,
			replacement: "used",
			strength: "medium"
		},
		{
			pattern: /\b(VICTIM)\b/g,
			replacement: "Person",
			strength: "medium"
		},
		{
			pattern: /\b(VICTIMIZED)\b/gi,
			replacement: "affected",
			strength: "medium"
		},
		{
			pattern: /\b(PREY(ED|ING)? ON)\b/gi,
			replacement: "target",
			strength: "medium"
		},
		{
			pattern: /\b(TARGET(ED|ING|S)?)\b/g,
			replacement: "Targeted",
			strength: "medium"
		},
		{
			pattern: /\b(TARGETED)\b/gi,
			replacement: "targeted",
			strength: "medium"
		},
		{
			pattern: /\b(SINGLED OUT)\b/gi,
			replacement: "selected",
			strength: "medium"
		},
		{
			pattern: /\b(PICKED ON)\b/gi,
			replacement: "criticized",
			strength: "medium"
		},
		{
			pattern: /\b(BULLIED)\b/gi,
			replacement: "harassed",
			strength: "medium"
		},
		{
			pattern: /\b(HARASS(ED|ING|MENT)?)\b/gi,
			replacement: "bother",
			strength: "medium"
		},
		{
			pattern: /\b(TORMENT(ED|ING)?)\b/gi,
			replacement: "bother",
			strength: "medium"
		},
		{
			pattern: /\b(TORTURE(D|D)?)\b/gi,
			replacement: "troubled",
			strength: "medium"
		},
		{
			pattern: /\b(TORMENT)\b/g,
			replacement: "Distress",
			strength: "medium"
		},
		{
			pattern: /\b(HELL)\b/g,
			replacement: "difficulty",
			strength: "medium"
		},
		{
			pattern: /\b(HELLISH)\b/gi,
			replacement: "difficult",
			strength: "medium"
		},
		{
			pattern: /\b(LIVING HELL)\b/gi,
			replacement: "very difficult",
			strength: "medium"
		},
		{
			pattern: /\b(NIGHTMARE)\b/g,
			replacement: "Difficult situation",
			strength: "medium"
		},
		{
			pattern: /\b(ABSOLUTE HELL)\b/gi,
			replacement: "very difficult",
			strength: "medium"
		},
		{
			pattern: /\b(PURE HELL)\b/gi,
			replacement: "very difficult",
			strength: "medium"
		},
		{
			pattern: /\b(WAR ZONE)\b/gi,
			replacement: "conflict area",
			strength: "medium"
		},
		{
			pattern: /\b(BATTLEFIELD)\b/gi,
			replacement: "conflict",
			strength: "medium"
		},
		{
			pattern: /\b(BLOODSHED)\b/gi,
			replacement: "violence",
			strength: "medium"
		},
		{
			pattern: /\b(CARNAGE)\b/gi,
			replacement: "destruction",
			strength: "medium"
		},
		{
			pattern: /\b(SLAUGHTER)\b/gi,
			replacement: "defeat",
			strength: "medium"
		},
		{
			pattern: /\b(MASSACRE)\b/gi,
			replacement: "defeat",
			strength: "medium"
		},
		{
			pattern: /\b(ANNIHILATE(D|D)?)\b/gi,
			replacement: "defeat",
			strength: "medium"
		},
		{
			pattern: /\b(DECIMATE(D|D)?)\b/gi,
			replacement: "reduce",
			strength: "medium"
		},
		{
			pattern: /\b(OBLITERATE(D|D)?)\b/gi,
			replacement: "remove",
			strength: "medium"
		},
		{
			pattern: /\b(ERASED)\b/gi,
			replacement: "removed",
			strength: "medium"
		},
		{
			pattern: /\b(WIPED OUT)\b/gi,
			replacement: "removed",
			strength: "medium"
		},
		{
			pattern: /\b(WIPED FROM)\b/gi,
			replacement: "removed from",
			strength: "medium"
		},
		{
			pattern: /\b(WIPED OFF)\b/gi,
			replacement: "removed from",
			strength: "medium"
		},
		{
			pattern: /\b(VANISHED)\b/gi,
			replacement: "disappeared",
			strength: "light"
		},
		{
			pattern: /\b(DISAPPEARED)\b/gi,
			replacement: "gone",
			strength: "light"
		},
		{
			pattern: /\b(GONE MISSING)\b/gi,
			replacement: "absent",
			strength: "light"
		},
		{
			pattern: /\b(NO TRACE)\b/gi,
			replacement: "not found",
			strength: "light"
		},
		{
			pattern: /\b(WHEREABOUTS UNKNOWN)\b/gi,
			replacement: "location unknown",
			strength: "light"
		},
		{
			pattern: /\b(NEVER SEEN AGAIN)\b/gi,
			replacement: "not found",
			strength: "light"
		},
		{
			pattern: /\b(NEVER TO BE SEEN)\b/gi,
			replacement: "absent",
			strength: "light"
		},
		{
			pattern: /\b(FATE UNKNOWN)\b/gi,
			replacement: "status unknown",
			strength: "light"
		},
		{
			pattern: /\b(UNACCOUNTED FOR)\b/gi,
			replacement: "not found",
			strength: "light"
		},
		{
			pattern: /\b(DATA BREACH)\b/gi,
			replacement: "security incident",
			strength: "medium"
		},
		{
			pattern: /\b(HACKED)\b/gi,
			replacement: "accessed",
			strength: "medium"
		},
		{
			pattern: /\b(HACKER)\b/gi,
			replacement: "attacker",
			strength: "medium"
		},
		{
			pattern: /\b(CYBERATTACK)\b/gi,
			replacement: "online incident",
			strength: "medium"
		},
		{
			pattern: /\b(RANSOMWARE)\b/gi,
			replacement: "malicious software",
			strength: "medium"
		},
		{
			pattern: /\b(MALWARE)\b/gi,
			replacement: "unwanted software",
			strength: "medium"
		},
		{
			pattern: /\b(VIRUS)\b/g,
			replacement: "Program",
			strength: "medium"
		},
		{
			pattern: /\b(SPYING)\b/gi,
			replacement: "monitoring",
			strength: "medium"
		},
		{
			pattern: /\b(SPY)\b/g,
			replacement: "Monitor",
			strength: "medium"
		},
		{
			pattern: /\b(SPIED)\b/gi,
			replacement: "monitored",
			strength: "medium"
		},
		{
			pattern: /\b(STOLE)\b/gi,
			replacement: "took",
			strength: "medium"
		},
		{
			pattern: /\b(STOLEN)\b/gi,
			replacement: "taken",
			strength: "medium"
		},
		{
			pattern: /\b(STEAL)\b/g,
			replacement: "Take",
			strength: "medium"
		},
		{
			pattern: /\b(STEALING)\b/gi,
			replacement: "taking",
			strength: "medium"
		},
		{
			pattern: /\b(THIEF)\b/gi,
			replacement: "person",
			strength: "medium"
		},
		{
			pattern: /\b(THEFT)\b/g,
			replacement: "Taking",
			strength: "medium"
		},
		{
			pattern: /\b(ROBBERY)\b/gi,
			replacement: "theft",
			strength: "medium"
		},
		{
			pattern: /\b(ROBBED)\b/gi,
			replacement: "taken from",
			strength: "medium"
		},
		{
			pattern: /\b(BREACH)\b/g,
			replacement: "Incident",
			strength: "medium"
		},
		{
			pattern: /\b(LEAK)\b/g,
			replacement: "Release",
			strength: "medium"
		},
		{
			pattern: /\b(LEAKED)\b/gi,
			replacement: "released",
			strength: "medium"
		},
		{
			pattern: /\b(LEAKING)\b/gi,
			replacement: "releasing",
			strength: "medium"
		},
		{
			pattern: /\b(EXPOSE)\b/g,
			replacement: "Reveal",
			strength: "medium"
		},
		{
			pattern: /\b(VULNERABILITY)\b/gi,
			replacement: "issue",
			strength: "medium"
		},
		{
			pattern: /\b(VULNERABLE)\b/gi,
			replacement: "at risk",
			strength: "medium"
		},
		{
			pattern: /\b(EXPLOIT)\b/g,
			replacement: "Use",
			strength: "medium"
		},
		{
			pattern: /\b(EXPLOITED)\b/gi,
			replacement: "used",
			strength: "medium"
		},
		{
			pattern: /\b(FLAW)\b/g,
			replacement: "Issue",
			strength: "medium"
		},
		{
			pattern: /\b(BUG)\b/g,
			replacement: "Issue",
			strength: "light"
		},
		{
			pattern: /\b(GLITCH)\b/gi,
			replacement: "error",
			strength: "light"
		},
		{
			pattern: /\b(CRASH)\b/g,
			replacement: "Fail",
			strength: "medium"
		},
		{
			pattern: /\b(CRASHED)\b/gi,
			replacement: "failed",
			strength: "medium"
		},
		{
			pattern: /\b(OUTAGE)\b/g,
			replacement: "Interruption",
			strength: "medium"
		},
		{
			pattern: /\b(DOWN)\b/g,
			replacement: "Unavailable",
			strength: "light"
		},
		{
			pattern: /\b(BROKE)\b/g,
			replacement: "Failed",
			strength: "medium"
		},
		{
			pattern: /\b(BROKEN)\b/gi,
			replacement: "not working",
			strength: "medium"
		},
		{
			pattern: /\b(FIX)\b/g,
			replacement: "Update",
			strength: "light"
		},
		{
			pattern: /\b(FIXED)\b/gi,
			replacement: "updated",
			strength: "light"
		},
		{
			pattern: /\b(URGENT FIX)\b/gi,
			replacement: "update",
			strength: "medium"
		},
		{
			pattern: /\b(CRITICAL UPDATE)\b/gi,
			replacement: "update",
			strength: "medium"
		},
		{
			pattern: /\b(SECURITY FLAW)\b/gi,
			replacement: "security issue",
			strength: "medium"
		},
		{
			pattern: /\b(CRITICAL FLAW)\b/gi,
			replacement: "issue",
			strength: "medium"
		},
		{
			pattern: /\b(MAJOR BUG)\b/gi,
			replacement: "issue",
			strength: "medium"
		},
		{
			pattern: /\b(SERIOUS ISSUE)\b/gi,
			replacement: "issue",
			strength: "medium"
		},
		{
			pattern: /\b(DRAINING)\b/g,
			replacement: "Using",
			strength: "medium"
		},
		{
			pattern: /\b(DRAINED)\b/gi,
			replacement: "used",
			strength: "medium"
		},
		{
			pattern: /\b(DRAIN)\b/g,
			replacement: "Use",
			strength: "medium"
		},
		{
			pattern: /\b(SUCKING)\b/gi,
			replacement: "using",
			strength: "medium"
		},
		{
			pattern: /\b(EATING UP)\b/gi,
			replacement: "using",
			strength: "medium"
		},
		{
			pattern: /\b(GOBBLING)\b/gi,
			replacement: "using",
			strength: "medium"
		},
		{
			pattern: /\b(DESTROYING YOUR)\b/gi,
			replacement: "affecting your",
			strength: "medium"
		},
		{
			pattern: /\b(KILLING YOUR)\b/gi,
			replacement: "affecting your",
			strength: "medium"
		},
		{
			pattern: /\b(RUINING)\b/gi,
			replacement: "affecting",
			strength: "medium"
		},
		{
			pattern: /\b(WRECKING)\b/gi,
			replacement: "affecting",
			strength: "medium"
		},
		{
			pattern: /\b(TRACK)\b/g,
			replacement: "Monitor",
			strength: "medium"
		},
		{
			pattern: /\b(TRACKING)\b/gi,
			replacement: "monitoring",
			strength: "medium"
		},
		{
			pattern: /\b(TRACKED)\b/gi,
			replacement: "monitored",
			strength: "medium"
		},
		{
			pattern: /\b(MONITOR)\b/g,
			replacement: "Observe",
			strength: "light"
		},
		{
			pattern: /\b(SURVEILLANCE)\b/gi,
			replacement: "monitoring",
			strength: "medium"
		},
		{
			pattern: /\b(WATCHING)\b/g,
			replacement: "Observing",
			strength: "medium"
		},
		{
			pattern: /\b(WATCHED)\b/gi,
			replacement: "observed",
			strength: "medium"
		},
		{
			pattern: /\b(RECORDED)\b/gi,
			replacement: "saved",
			strength: "medium"
		},
		{
			pattern: /\b(RECORDING)\b/g,
			replacement: "Saving",
			strength: "medium"
		},
		{
			pattern: /\b(COLLECTING)\b/gi,
			replacement: "saving",
			strength: "medium"
		},
		{
			pattern: /\b(COLLECTED)\b/gi,
			replacement: "saved",
			strength: "medium"
		},
		{
			pattern: /\b(GATHERING)\b/g,
			replacement: "Collecting",
			strength: "light"
		},
		{
			pattern: /\b(HARVESTING)\b/gi,
			replacement: "collecting",
			strength: "medium"
		},
		{
			pattern: /\b(SELLING YOUR)\b/gi,
			replacement: "sharing your",
			strength: "medium"
		},
		{
			pattern: /\b(SELLS YOUR)\b/gi,
			replacement: "shares your",
			strength: "medium"
		},
		{
			pattern: /\b(SOLD YOUR)\b/gi,
			replacement: "shared your",
			strength: "medium"
		},
		{
			pattern: /\b(COMPRIMISED)\b/gi,
			replacement: "accessed",
			strength: "medium"
		},
		{
			pattern: /\b(COMPRIMISE)\b/gi,
			replacement: "affect",
			strength: "medium"
		},
		{
			pattern: /\b(AFFECTED)\b/g,
			replacement: "Impacted",
			strength: "light"
		},
		{
			pattern: /\b(IMMINENT)\b/g,
			replacement: "Possible",
			strength: "medium"
		},
		{
			pattern: /\b(INEVITABLE)\b/gi,
			replacement: "likely",
			strength: "medium"
		},
		{
			pattern: /\b(UNAVOIDABLE)\b/gi,
			replacement: "likely",
			strength: "medium"
		},
		{
			pattern: /\b(CERTAIN)\b/g,
			replacement: "Likely",
			strength: "light"
		},
		{
			pattern: /\b(GUARANTEED TO)\b/gi,
			replacement: "likely to",
			strength: "light"
		},
		{
			pattern: /\b(WILL DEFINITELY)\b/gi,
			replacement: "will likely",
			strength: "light"
		},
		{
			pattern: /\b(WILL SURELY)\b/gi,
			replacement: "will likely",
			strength: "light"
		},
		{
			pattern: /\b(WILL WITHOUT DOUBT)\b/gi,
			replacement: "will likely",
			strength: "light"
		},
		{
			pattern: /\b(WITHOUT A DOUBT)\b/gi,
			replacement: "likely",
			strength: "light"
		},
		{
			pattern: /\b(NO DOUBT)\b/gi,
			replacement: "likely",
			strength: "light"
		},
		{
			pattern: /\b(ABSOLUTELY WILL)\b/gi,
			replacement: "will likely",
			strength: "light"
		},
		{
			pattern: /\b(COULD WIPE OUT)\b/gi,
			replacement: "could affect",
			strength: "medium"
		},
		{
			pattern: /\b(WIPE OUT)\b/gi,
			replacement: "affect",
			strength: "medium"
		},
		{
			pattern: /\b(WIPED OUT)\b/gi,
			replacement: "affected",
			strength: "medium"
		},
		{
			pattern: /\b(EXTINCTION)\b/gi,
			replacement: "reduction",
			strength: "medium"
		},
		{
			pattern: /\b(EXTINCT)\b/gi,
			replacement: "gone",
			strength: "medium"
		},
		{
			pattern: /\b(WIPE US OUT)\b/gi,
			replacement: "affect us",
			strength: "medium"
		},
		{
			pattern: /\b(END OF DAYS)\b/gi,
			replacement: "significant change",
			strength: "medium"
		},
		{
			pattern: /\b(END TIMES)\b/gi,
			replacement: "significant change",
			strength: "medium"
		},
		{
			pattern: /\b(APOCALYPSE)\b/gi,
			replacement: "major change",
			strength: "medium"
		},
		{
			pattern: /\b(APOCALYPTIC)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(ARMAGEDDON)\b/gi,
			replacement: "significant event",
			strength: "medium"
		},
		{
			pattern: /\b(DOOMSDAY)\b/gi,
			replacement: "significant day",
			strength: "medium"
		},
		{
			pattern: /\b(DOOM)\b/g,
			replacement: "Concern",
			strength: "medium"
		},
		{
			pattern: /\b(DOOMED)\b/gi,
			replacement: "in trouble",
			strength: "medium"
		},
		{
			pattern: /\b(DOOMING)\b/gi,
			replacement: "affecting",
			strength: "medium"
		},
		{
			pattern: /\b(WORTHLESS)\b/gi,
			replacement: "less valuable",
			strength: "medium"
		},
		{
			pattern: /\b(USELESS)\b/gi,
			replacement: "not useful",
			strength: "medium"
		},
		{
			pattern: /\b(POINTLESS)\b/gi,
			replacement: "not useful",
			strength: "medium"
		},
		{
			pattern: /\b(FUTILE)\b/gi,
			replacement: "unlikely to succeed",
			strength: "medium"
		},
		{
			pattern: /\b(HOPELESS)\b/gi,
			replacement: "difficult",
			strength: "medium"
		},
		{
			pattern: /\b(NO HOPE)\b/gi,
			replacement: "difficult",
			strength: "medium"
		},
		{
			pattern: /\b(ALL HOPE LOST)\b/gi,
			replacement: "challenging",
			strength: "medium"
		},
		{
			pattern: /\b(LOST HOPE)\b/gi,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\b(GIVE UP)\b/gi,
			replacement: "stop",
			strength: "medium"
		},
		{
			pattern: /\b(SURRENDER)\b/gi,
			replacement: "stop",
			strength: "medium"
		},
		{
			pattern: /\b(NO CHANCE)\b/gi,
			replacement: "unlikely",
			strength: "medium"
		},
		{
			pattern: /\b(NO WAY)\b/gi,
			replacement: "unlikely",
			strength: "medium"
		},
		{
			pattern: /\b(IMPOSSIBLE)\b/gi,
			replacement: "very difficult",
			strength: "medium"
		},
		{
			pattern: /\b(UNSTOPPABLE)\b/gi,
			replacement: "persistent",
			strength: "medium"
		},
		{
			pattern: /\b(UNTHINKABLE)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(UNIMAGINABLE)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(INCONCEIVABLE)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(CRIPPLING)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(CRIPPLED)\b/gi,
			replacement: "affected",
			strength: "medium"
		},
		{
			pattern: /\b(PARALYZED)\b/gi,
			replacement: "stopped",
			strength: "medium"
		},
		{
			pattern: /\b(DEBILITATING)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(DEVESTATING)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(CATASTROPHIC)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(CATASTROPHE)\b/gi,
			replacement: "significant event",
			strength: "medium"
		},
		{
			pattern: /\b(CRITICAL)\b/g,
			replacement: "Important",
			strength: "medium"
		},
		{
			pattern: /\b(critical)\b/gi,
			replacement: "important",
			strength: "medium"
		},
		{
			pattern: /\b(GRIPPING)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(HORRIFYING)\b/gi,
			replacement: "concerning",
			strength: "medium"
		},
		{
			pattern: /\b(HORRIFIC)\b/gi,
			replacement: "concerning",
			strength: "medium"
		},
		{
			pattern: /\b(PETRIFIED)\b/gi,
			replacement: "concerned",
			strength: "medium"
		},
		{
			pattern: /\b(PETRIFYING)\b/gi,
			replacement: "concerning",
			strength: "medium"
		},
		{
			pattern: /\b(TREMENDOUS)\b/g,
			replacement: "Significant",
			strength: "light"
		},
		{
			pattern: /\b(tremendous)\b/gi,
			replacement: "significant",
			strength: "light"
		},
		{
			pattern: /\b(COLOSSAL)\b/gi,
			replacement: "large",
			strength: "light"
		},
		{
			pattern: /\b(GIGANTIC)\b/gi,
			replacement: "large",
			strength: "light"
		},
		{
			pattern: /\b(MASSIVE)\b/g,
			replacement: "Large",
			strength: "light"
		},
		{
			pattern: /\b(massive)\b/gi,
			replacement: "large",
			strength: "light"
		},
		{
			pattern: /\b(HUGE)\b/g,
			replacement: "Large",
			strength: "light"
		},
		{
			pattern: /\b(huge)\b/gi,
			replacement: "large",
			strength: "light"
		},
		{
			pattern: /\b(ENORMOUS)\b/gi,
			replacement: "large",
			strength: "light"
		},
		{
			pattern: /\b(EPIC)\b/g,
			replacement: "Notable",
			strength: "light"
		},
		{
			pattern: /\b(epic)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(LEGENDARY)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(MONUMENTAL)\b/gi,
			replacement: "significant",
			strength: "light"
		},
		{
			pattern: /\b(GROUNDBREAKING)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(REVOLUTIONARY)\b/gi,
			replacement: "new",
			strength: "light"
		},
		{
			pattern: /\b(PARADIGM SHIFT)\b/gi,
			replacement: "change",
			strength: "light"
		},
		{
			pattern: /\b(GAME-CHANGING)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(TURNING POINT)\b/gi,
			replacement: "key moment",
			strength: "light"
		},
		{
			pattern: /\b(WATERSHED)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(TIPPING POINT)\b/gi,
			replacement: "critical point",
			strength: "medium"
		},
		{
			pattern: /\b(POINT OF NO RETURN)\b/gi,
			replacement: "critical point",
			strength: "medium"
		},
		{
			pattern: /\b(NO TURNING BACK)\b/gi,
			replacement: "continuing",
			strength: "medium"
		},
		{
			pattern: /\b(COUNTDOWN)\b/g,
			replacement: "Timeline",
			strength: "medium"
		},
		{
			pattern: /\b(countdown)\b/gi,
			replacement: "timeline",
			strength: "medium"
		},
		{
			pattern: /\b(TICKING CLOCK)\b/gi,
			replacement: "timeline",
			strength: "medium"
		},
		{
			pattern: /\b(RUNNING OUT OF TIME)\b/gi,
			replacement: "limited time",
			strength: "medium"
		},
		{
			pattern: /\b(TIME IS RUNNING OUT)\b/gi,
			replacement: "limited time",
			strength: "medium"
		},
		{
			pattern: /\b(FINAL WARNING)\b/gi,
			replacement: "notification",
			strength: "medium"
		},
		{
			pattern: /\b(LAST CHANCE)\b/gi,
			replacement: "opportunity",
			strength: "medium"
		},
		{
			pattern: /\b(ONLY CHANCE)\b/gi,
			replacement: "opportunity",
			strength: "medium"
		},
		{
			pattern: /\b(DEADLINE)\b/g,
			replacement: "Date",
			strength: "light"
		},
		{
			pattern: /\b(deadline)\b/gi,
			replacement: "date",
			strength: "light"
		},
		{
			pattern: /\b(EXPIRE(S|D)?)\b/gi,
			replacement: "end",
			strength: "light"
		},
		{
			pattern: /\b(EXPIRATION)\b/gi,
			replacement: "end date",
			strength: "light"
		},
		{
			pattern: /\b(ACT NOW)\b/gi,
			replacement: "consider",
			strength: "medium"
		},
		{
			pattern: /\b(ACT FAST)\b/gi,
			replacement: "consider",
			strength: "medium"
		},
		{
			pattern: /\b(HURRY)\b/g,
			replacement: "Consider",
			strength: "medium"
		},
		{
			pattern: /\b(HURRY UP)\b/gi,
			replacement: "consider",
			strength: "medium"
		},
		{
			pattern: /\b(RUSH)\b/g,
			replacement: "Move",
			strength: "medium"
		},
		{
			pattern: /\b(RUSHING)\b/gi,
			replacement: "moving",
			strength: "medium"
		},
		{
			pattern: /\b(DON'T WAIT)\b/gi,
			replacement: "consider",
			strength: "medium"
		},
		{
			pattern: /\b(NO TIME TO LOSE)\b/gi,
			replacement: "consider soon",
			strength: "medium"
		},
		{
			pattern: /\b(NOT A MOMENT TO SPARE)\b/gi,
			replacement: "consider",
			strength: "medium"
		},
		{
			pattern: /\b(EVERY SECOND COUNTS)\b/gi,
			replacement: "time matters",
			strength: "medium"
		},
		{
			pattern: /\b(RACE AGAINST TIME)\b/gi,
			replacement: "timeline",
			strength: "medium"
		},
		{
			pattern: /\b(BATTLE)\b/g,
			replacement: "Conflict",
			strength: "medium"
		},
		{
			pattern: /\b(battle)\b/gi,
			replacement: "conflict",
			strength: "medium"
		},
		{
			pattern: /\b(WAR)\b/g,
			replacement: "Conflict",
			strength: "medium"
		},
		{
			pattern: /\b(war)\b/gi,
			replacement: "conflict",
			strength: "medium"
		},
		{
			pattern: /\b(FIGHT)\b/g,
			replacement: "Disagree",
			strength: "medium"
		},
		{
			pattern: /\b(fight)\b/gi,
			replacement: "disagree",
			strength: "medium"
		},
		{
			pattern: /\b(FIGHTING)\b/gi,
			replacement: "conflict",
			strength: "medium"
		},
		{
			pattern: /\b(CLASH)\b/g,
			replacement: "Disagreement",
			strength: "medium"
		},
		{
			pattern: /\b(clash)\b/gi,
			replacement: "disagreement",
			strength: "medium"
		},
		{
			pattern: /\b(CONFRONTATION)\b/gi,
			replacement: "disagreement",
			strength: "medium"
		},
		{
			pattern: /\b(DISPUTE)\b/g,
			replacement: "Disagreement",
			strength: "light"
		},
		{
			pattern: /\b(dispute)\b/gi,
			replacement: "disagreement",
			strength: "light"
		},
		{
			pattern: /\b(STANDOFF)\b/gi,
			replacement: "disagreement",
			strength: "medium"
		},
		{
			pattern: /\b(SHOWDOWN)\b/gi,
			replacement: "meeting",
			strength: "medium"
		},
		{
			pattern: /\b(FACE-OFF)\b/gi,
			replacement: "meeting",
			strength: "medium"
		},
		{
			pattern: /\b(SHOWDOWN)\b/gi,
			replacement: "encounter",
			strength: "medium"
		},
		{
			pattern: /\b(FIASCO)\b/gi,
			replacement: "problem",
			strength: "medium"
		},
		{
			pattern: /\b(DEBACLE)\b/gi,
			replacement: "problem",
			strength: "medium"
		},
		{
			pattern: /\b(FOWL-UP)\b/gi,
			replacement: "error",
			strength: "medium"
		},
		{
			pattern: /\b(FAILURE)\b/g,
			replacement: "Problem",
			strength: "medium"
		},
		{
			pattern: /\b(failure)\b/gi,
			replacement: "problem",
			strength: "medium"
		},
		{
			pattern: /\b(FAILED)\b/gi,
			replacement: "unsuccessful",
			strength: "medium"
		},
		{
			pattern: /\b(FAIL)\b/g,
			replacement: "Not succeed",
			strength: "medium"
		},
		{
			pattern: /\b(FAILING)\b/gi,
			replacement: "struggling",
			strength: "medium"
		},
		{
			pattern: /\b(BLUNDER)\b/gi,
			replacement: "error",
			strength: "medium"
		},
		{
			pattern: /\b(MISTAKE)\b/g,
			replacement: "Error",
			strength: "light"
		},
		{
			pattern: /\b(mistake)\b/gi,
			replacement: "error",
			strength: "light"
		},
		{
			pattern: /\b(ERROR)\b/g,
			replacement: "Issue",
			strength: "light"
		},
		{
			pattern: /\b(MISHAP)\b/gi,
			replacement: "error",
			strength: "light"
		},
		{
			pattern: /\b(SCREW-UP)\b/gi,
			replacement: "error",
			strength: "medium"
		},
		{
			pattern: /\b(MESS)\b/g,
			replacement: "Problem",
			strength: "medium"
		},
		{
			pattern: /\b(mess)\b/gi,
			replacement: "problem",
			strength: "medium"
		},
		{
			pattern: /\b(MESSY)\b/gi,
			replacement: "problematic",
			strength: "medium"
		},
		{
			pattern: /\b(CHAOS)\b/g,
			replacement: "Disorder",
			strength: "medium"
		},
		{
			pattern: /\b(chaos)\b/gi,
			replacement: "disorder",
			strength: "medium"
		},
		{
			pattern: /\b(CHAOTIC)\b/gi,
			replacement: "disordered",
			strength: "medium"
		},
		{
			pattern: /\b(MAYHEM)\b/gi,
			replacement: "disorder",
			strength: "medium"
		},
		{
			pattern: /\b(TURMOIL)\b/gi,
			replacement: "confusion",
			strength: "medium"
		},
		{
			pattern: /\b(UPHEAVAL)\b/gi,
			replacement: "change",
			strength: "medium"
		},
		{
			pattern: /\b(TUMULT)\b/gi,
			replacement: "confusion",
			strength: "medium"
		},
		{
			pattern: /\b(UNREST)\b/gi,
			replacement: "tension",
			strength: "medium"
		},
		{
			pattern: /\b(VIOLENCE)\b/gi,
			replacement: "conflict",
			strength: "medium"
		},
		{
			pattern: /\b(VIOLENT)\b/gi,
			replacement: "aggressive",
			strength: "medium"
		},
		{
			pattern: /\b(BLOOD)\b/g,
			replacement: "Injury",
			strength: "medium"
		},
		{
			pattern: /\b(BLOODY)\b/gi,
			replacement: "injury-related",
			strength: "medium"
		},
		{
			pattern: /\b(GORE)\b/gi,
			replacement: "injury",
			strength: "medium"
		},
		{
			pattern: /\b(GRAPHIC)\b/g,
			replacement: "Detailed",
			strength: "medium"
		},
		{
			pattern: /\b(graphic)\b/gi,
			replacement: "detailed",
			strength: "medium"
		},
		{
			pattern: /\b(DISTURBING)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(UNSETTLING)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(TROUBLING)\b/gi,
			replacement: "concerning",
			strength: "medium"
		},
		{
			pattern: /\b(ALARMING)\b/g,
			replacement: "Notable",
			strength: "medium"
		},
		{
			pattern: /\b(alarming)\b/gi,
			replacement: "notable",
			strength: "medium"
		},
		{
			pattern: /\b(CHILLING)\b/gi,
			replacement: "notable",
			strength: "medium"
		},
		{
			pattern: /\b(SPOOKY)\b/gi,
			replacement: "unusual",
			strength: "light"
		},
		{
			pattern: /\b(EERIE)\b/gi,
			replacement: "unusual",
			strength: "light"
		},
		{
			pattern: /\b(CREEPY)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(SINISTER)\b/gi,
			replacement: "unusual",
			strength: "medium"
		},
		{
			pattern: /\b(MENACING)\b/gi,
			replacement: "threatening",
			strength: "medium"
		},
		{
			pattern: /\b(THREAT)\b/g,
			replacement: "Concern",
			strength: "medium"
		},
		{
			pattern: /\b(threat)\b/gi,
			replacement: "concern",
			strength: "medium"
		},
		{
			pattern: /\b(THREATENING)\b/gi,
			replacement: "concerning",
			strength: "medium"
		},
		{
			pattern: /\b(MENACE)\b/g,
			replacement: "Concern",
			strength: "medium"
		},
		{
			pattern: /\b(menace)\b/gi,
			replacement: "concern",
			strength: "medium"
		},
		{
			pattern: /\b(PERIL)\b/gi,
			replacement: "risk",
			strength: "medium"
		},
		{
			pattern: /\b(PERILOUS)\b/gi,
			replacement: "risky",
			strength: "medium"
		},
		{
			pattern: /\b(DIRE)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(DIRE STRAITS)\b/gi,
			replacement: "difficulty",
			strength: "medium"
		},
		{
			pattern: /\b(GRIM)\b/gi,
			replacement: "concerning",
			strength: "medium"
		},
		{
			pattern: /\b(BLEAK)\b/gi,
			replacement: "challenging",
			strength: "medium"
		},
		{
			pattern: /\b(DIRE)\b/g,
			replacement: "Significant",
			strength: "medium"
		},
		{
			pattern: /\b(dire)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(SOLEMN)\b/gi,
			replacement: "serious",
			strength: "light"
		},
		{
			pattern: /\b(SOMBER)\b/gi,
			replacement: "serious",
			strength: "light"
		},
		{
			pattern: /\b(GRAVE)\b/g,
			replacement: "Serious",
			strength: "medium"
		},
		{
			pattern: /\b(grave)\b/gi,
			replacement: "serious",
			strength: "medium"
		},
		{
			pattern: /\b(GRAVELY)\b/gi,
			replacement: "seriously",
			strength: "medium"
		},
		{
			pattern: /\b(SERIOUS)\b/g,
			replacement: "Significant",
			strength: "light"
		},
		{
			pattern: /\b(serious)\b/gi,
			replacement: "significant",
			strength: "light"
		},
		{
			pattern: /\b(SEVERE)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(HARSH)\b/gi,
			replacement: "strong",
			strength: "medium"
		},
		{
			pattern: /\b(BRUTAL)\b/gi,
			replacement: "strong",
			strength: "medium"
		},
		{
			pattern: /\b(SAVAGE)\b/gi,
			replacement: "strong",
			strength: "medium"
		},
		{
			pattern: /\b(VICIOUS)\b/gi,
			replacement: "aggressive",
			strength: "medium"
		},
		{
			pattern: /\b(RUTHLESS)\b/gi,
			replacement: "determined",
			strength: "medium"
		},
		{
			pattern: /\b(MERCILESS)\b/gi,
			replacement: "determined",
			strength: "medium"
		},
		{
			pattern: /\b(RELENTLESS)\b/gi,
			replacement: "persistent",
			strength: "medium"
		},
		{
			pattern: /\b(UNFORGIVING)\b/gi,
			replacement: "strict",
			strength: "medium"
		},
		{
			pattern: /\b(the real reason (why|for))\b/gi,
			replacement: "the reason",
			strength: "light"
		},
		{
			pattern: /\b(only \d+%? (of )?people (can|know|understand|pass|solve))\b/gi,
			replacement: "few people",
			strength: "light"
		},
		{
			pattern: /\b(i quit my job after (learning|finding|discovering))\b/gi,
			replacement: "I changed jobs after learning",
			strength: "light"
		},
		{
			pattern: /\b(literally (tried|attempted|deleted|destroyed))\b/gi,
			replacement: "attempted to",
			strength: "medium"
		},
		{
			pattern: /\b(got caught)\b/gi,
			replacement: "was discovered",
			strength: "medium"
		},
		{
			pattern: /\b(losing their minds)\b/gi,
			replacement: "are upset",
			strength: "medium"
		},
		{
			pattern: /\b(lost their minds)\b/gi,
			replacement: "were upset",
			strength: "medium"
		},
		{
			pattern: /\b(government (doesn't|does not) want you to know)\b/gi,
			replacement: "government has not widely publicized",
			strength: "medium"
		},
		{
			pattern: /\b(they (don't|do not) want you to know)\b/gi,
			replacement: "may not be widely known",
			strength: "medium"
		},
		{
			pattern: /\b(everyone is (switching|moving|changing|abandoning))\b/gi,
			replacement: "some people are changing",
			strength: "light"
		},
		{
			pattern: /\b(nobody is talking about)\b/gi,
			replacement: "few are discussing",
			strength: "light"
		},
		{
			pattern: /\b(this changes everything)\b/gi,
			replacement: "this is significant",
			strength: "light"
		},
		{
			pattern: /\b(EXPOSED|REVEALED|CONFIRMED):?\s*/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(BREAKING NEWS|BREAKING STORY):?\s*/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(u won'?t believe)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(yo won'?t believe)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(yu won'?t believe)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(you wont believe)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(you won'?t beli?e?ve)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(hard to believe)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(will blow your mind)\b/gi,
			replacement: "may interest you",
			strength: "light"
		},
		{
			pattern: /\b(blow your mind)\b/gi,
			replacement: "interest you",
			strength: "light"
		},
		{
			pattern: /\b(will leave you shaking)\b/gi,
			replacement: "may affect you",
			strength: "medium"
		},
		{
			pattern: /\b(will restore your faith)\b/gi,
			replacement: "may encourage you",
			strength: "light"
		},
		{
			pattern: /\b(restore.*faith)\b/gi,
			replacement: "encourage",
			strength: "light"
		},
		{
			pattern: /\b(will break your heart)\b/gi,
			replacement: "may concern you",
			strength: "medium"
		},
		{
			pattern: /\b(break your heart)\b/gi,
			replacement: "concern you",
			strength: "medium"
		},
		{
			pattern: /\b(will shock you)\b/gi,
			replacement: "may surprise you",
			strength: "light"
		},
		{
			pattern: /\b(will make you (cry|laugh|smile))\b/gi,
			replacement: "may affect you",
			strength: "light"
		},
		{
			pattern: /\b(before they delete (this|it))\b/gi,
			replacement: "",
			strength: "medium"
		},
		{
			pattern: /\b(watch before deleted)\b/gi,
			replacement: "consider watching",
			strength: "medium"
		},
		{
			pattern: /\b(must read)\b/gi,
			replacement: "worth reading",
			strength: "light"
		},
		{
			pattern: /\b(limited time)\b/gi,
			replacement: "available",
			strength: "light"
		},
		{
			pattern: /\b(what happens next)\b/gi,
			replacement: "the outcome",
			strength: "light"
		},
		{
			pattern: /\b(the reason why)\b/gi,
			replacement: "the reason",
			strength: "light"
		},
		{
			pattern: /\b(here'?s why)\b/gi,
			replacement: "the reason",
			strength: "light"
		},
		{
			pattern: /\b(this is why)\b/gi,
			replacement: "the reason",
			strength: "light"
		},
		{
			pattern: /\b(what (they|nobody) (don'?t|doesn'?t) tell you)\b/gi,
			replacement: "what may not be widely known",
			strength: "medium"
		},
		{
			pattern: /\b(the secret to)\b/gi,
			replacement: "a method for",
			strength: "light"
		},
		{
			pattern: /\b(what happens when)\b/gi,
			replacement: "what occurs when",
			strength: "light"
		},
		{
			pattern: /\b(top \d+ (things|reasons|secrets|tips|tricks|facts|ways))\b/gi,
			replacement: "notable points",
			strength: "light"
		},
		{
			pattern: /\b(\d+ (things|reasons|secrets|tips|tricks) you)\b/gi,
			replacement: "points you",
			strength: "light"
		},
		{
			pattern: /\b(only \d+%? (of )?people)\b/gi,
			replacement: "few people",
			strength: "light"
		},
		{
			pattern: /\b(\d+%? of people (can|know|understand|pass|solve))\b/gi,
			replacement: "some people can",
			strength: "light"
		},
		{
			pattern: /\b(top \d+)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(\d+ things)\b/gi,
			replacement: "several things",
			strength: "light"
		},
		{
			pattern: /\b(\d+ reasons)\b/gi,
			replacement: "several reasons",
			strength: "light"
		},
		{
			pattern: /\b(\d+ secrets)\b/gi,
			replacement: "several points",
			strength: "light"
		},
		{
			pattern: /\b(\d+ signs)\b/gi,
			replacement: "several signs",
			strength: "light"
		},
		{
			pattern: /\b(number one)\b/gi,
			replacement: "primary",
			strength: "light"
		},
		{
			pattern: /\b(scientists discovered)\b/gi,
			replacement: "researchers found",
			strength: "light"
		},
		{
			pattern: /\b(experts reveal)\b/gi,
			replacement: "experts note",
			strength: "light"
		},
		{
			pattern: /\b(studies show)\b/gi,
			replacement: "studies suggest",
			strength: "light"
		},
		{
			pattern: /\b(research proves)\b/gi,
			replacement: "research indicates",
			strength: "light"
		},
		{
			pattern: /\b(what big pharma)\b/gi,
			replacement: "what pharmaceutical companies",
			strength: "medium"
		},
		{
			pattern: /\b(what the media)\b/gi,
			replacement: "what news outlets",
			strength: "medium"
		},
		{
			pattern: /\b(instant karma)\b/gi,
			replacement: "consequences",
			strength: "medium"
		},
		{
			pattern: /\b(karma)\b/gi,
			replacement: "result",
			strength: "medium"
		},
		{
			pattern: /\b(entitled (customer|person|people))\b/gi,
			replacement: "assertive person",
			strength: "medium"
		},
		{
			pattern: /\b(jaw-dropping)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(earth-shattering)\b/gi,
			replacement: "significant",
			strength: "light"
		},
		{
			pattern: /\b(mind-blowing)\b/gi,
			replacement: "interesting",
			strength: "light"
		},
		{
			pattern: /\b(heartbreaking)\b/gi,
			replacement: "concerning",
			strength: "medium"
		},
		{
			pattern: /\b(devastating)\b/gi,
			replacement: "significant",
			strength: "medium"
		},
		{
			pattern: /\b(life-changing)\b/gi,
			replacement: "notable",
			strength: "light"
		},
		{
			pattern: /\b(something (exclusive|secret|hidden|classified))\b/gi,
			replacement: "something special",
			strength: "light"
		},
		{
			pattern: /\b(exclusive (access|offer|deal|content|report|story|video))\b/gi,
			replacement: "special",
			strength: "light"
		},
		{
			pattern: /\b(exclusive[:\s]+(report|news|video|story|content))\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(for (a )?limited time( only)?)\b/gi,
			replacement: "temporarily",
			strength: "light"
		},
		{
			pattern: /\b(limited (time|edition|availability) (offer|deal|access|content)?)\b/gi,
			replacement: "available",
			strength: "light"
		},
		{
			pattern: /\b(rare (opportunity|chance|find|footage))\b/gi,
			replacement: "special",
			strength: "light"
		},
		{
			pattern: /\b(a rare (opportunity|chance|find))\b/gi,
			replacement: "an opportunity",
			strength: "light"
		},
		{
			pattern: /\b(classified (documents|files|information|footage|leaks?))\b/gi,
			replacement: "restricted",
			strength: "medium"
		},
		{
			pattern: /\b(insiders? (only|access|information|report))\b/gi,
			replacement: "exclusive",
			strength: "light"
		},
		{
			pattern: /\b(members? (only|access|exclusive))\b/gi,
			replacement: "subscriber",
			strength: "light"
		},
		{
			pattern: /\b(not (for )?public (release|viewing|access))\b/gi,
			replacement: "restricted",
			strength: "medium"
		},
		{
			pattern: /\b(watch (this|before) (it (gets|is) )?(deleted|removed|banned))\b/gi,
			replacement: "consider watching",
			strength: "medium"
		},
		{
			pattern: /\b(before it (gets|is) (deleted|removed|banned))\b/gi,
			replacement: "",
			strength: "medium"
		},
		{
			pattern: /\b(disaster strikes[:\s]*)\b/gi,
			replacement: "",
			strength: "medium"
		},
		{
			pattern: /\b(scandal (erupts|grows|widens))\b/gi,
			replacement: "situation develops",
			strength: "medium"
		},
		{
			pattern: /\b(literally (sick|shaking|crying|screaming|dying|fuming))\b/gi,
			replacement: "very",
			strength: "medium"
		},
		{
			pattern: /\b(in (a )?secret (move|deal|agreement))\b/gi,
			replacement: "in a private",
			strength: "medium"
		},
		{
			pattern: /\b(everyone (is |are )(talking about|discussing))\b/gi,
			replacement: "people are discussing",
			strength: "light"
		},
		{
			pattern: /\b(everyone'?s talking about)\b/gi,
			replacement: "people are discussing",
			strength: "light"
		},
		{
			pattern: /\b(everyone knows?)\b/gi,
			replacement: "it is known",
			strength: "light"
		},
		{
			pattern: /\b(everyone (needs?|should|must) (to )?(know|see|watch|read))\b/gi,
			replacement: "you may want to",
			strength: "light"
		},
		{
			pattern: /\b(just in:)\b/gi,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(JUST IN:)\b/g,
			replacement: "",
			strength: "light"
		},
		{
			pattern: /\b(the only (way|method|solution|answer|option) (to|for))\b/gi,
			replacement: "a way to",
			strength: "light"
		},
		{
			pattern: /\b(going viral)\b/gi,
			replacement: "becoming popular",
			strength: "light"
		},
		{
			pattern: /\b(what (they're|they are|they) hiding)\b/gi,
			replacement: "undisclosed information",
			strength: "medium"
		},
		{
			pattern: /\b(the truth (they|the government|they) hide)\b/gi,
			replacement: "the information not shared",
			strength: "medium"
		},
		{
			pattern: /\b(mainstream media won'?t tell)\b/gi,
			replacement: "news outlets may not share",
			strength: "medium"
		},
		{
			pattern: /\b(big pharma (doesn'?t|does not) want)\b/gi,
			replacement: "pharmaceutical companies may not share",
			strength: "medium"
		},
		{
			pattern: /\b(what('?s| is) really going on)\b/gi,
			replacement: "what is happening",
			strength: "medium"
		},
		{
			pattern: /\b(wake up(!?| sheeple!?))\b/gi,
			replacement: "consider",
			strength: "medium"
		},
		{
			pattern: /\b(sheeple)\b/gi,
			replacement: "people",
			strength: "medium"
		},
		{
			pattern: /\b(do your own research)\b/gi,
			replacement: "research further",
			strength: "light"
		},
		{
			pattern: /\b(follow the money)\b/gi,
			replacement: "consider the financial aspects",
			strength: "light"
		}
	];
	var STRENGTH_PRIORITY = {
		light: ["light"],
		medium: ["light", "medium"],
		strict: [
			"light",
			"medium",
			"strict"
		]
	};
	function cleanText(text) {
		return text.replace(/\s+/g, " ").replace(/\s+([.,!?;:])/g, "$1").replace(/([.,!?;:])\s+/g, "$1 ").trim();
	}
	function preserveCase(original, replacement) {
		if (!original || !replacement) return replacement;
		if (original[0] === original[0].toUpperCase()) return replacement.charAt(0).toUpperCase() + replacement.slice(1);
		return replacement.toLowerCase();
	}
	function rewriteWithLocalRules(text, options) {
		let rewritten = text;
		const changes = [];
		const allowedStrengths = STRENGTH_PRIORITY[options.mode];
		for (const rule of NEUTRALIZATION_RULES) {
			if (!allowedStrengths.includes(rule.strength)) continue;
			const matches = text.match(rule.pattern);
			if (matches) for (const originalMatch of matches) {
				const replacement = rule.preserveCapitalization !== false ? preserveCase(originalMatch, rule.replacement) : rule.replacement;
				rewritten = rewritten.replace(originalMatch, replacement);
				if (originalMatch !== replacement) changes.push({
					original: originalMatch,
					replacement,
					reason: `neutralization_rule:${rule.strength}`
				});
			}
		}
		rewritten = cleanText(rewritten);
		const confidence = changes.length > 0 ? Math.min(1, .5 + changes.length * .1) : 1;
		return {
			original: text,
			rewritten,
			changes,
			confidence,
			mode: options.mode
		};
	}
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
	//#region src/media/alt-text-filter.ts
	/**
	* Alt-Text Media Filter
	*
	* Analyzes image/video alt text for clickbait/ragebait patterns
	* and optionally blurs/hides matching media.
	*/
	var MEDIA_SELECTORS = [
		"img[alt]",
		"video[aria-label]",
		"[role=\"img\"][aria-label]",
		"picture img[alt]",
		"figure img[alt]"
	];
	var THUMBNAIL_SELECTORS = {
		youtube: [
			"ytd-thumbnail img",
			"ytd-video-preview img",
			"#thumbnail img"
		],
		reddit: ["[data-testid=\"post-container\"] img", ".thumbnail img"],
		x: ["[data-testid=\"tweet\"] img", "[data-testid=\"previewInterstitialImage\"]"]
	};
	var currentSettings = defaultMediaFilterSettings;
	var filteredCount = 0;
	function setMediaFilterSettings(settings) {
		currentSettings = settings;
	}
	function discoverMedia(root = document) {
		const elements = [];
		for (const selector of MEDIA_SELECTORS) {
			const nodes = root.querySelectorAll(selector);
			elements.push(...Array.from(nodes));
		}
		return elements;
	}
	function analyzeAltText(altText) {
		if (!altText || altText.length < 3) return {
			shouldFilter: false,
			confidence: 0
		};
		const result = rewriteWithLocalRules(altText, { mode: "medium" });
		if (result.changes.length === 0) return {
			shouldFilter: false,
			confidence: 0
		};
		const reason = result.changes.map((c) => `"${c.original}" → "${c.replacement}"`).join(", ");
		const confidence = Math.min(1, result.changes.length * .25);
		return {
			shouldFilter: confidence >= currentSettings.blurThreshold,
			reason,
			confidence
		};
	}
	function filterMedia(root = document, options = {}) {
		if (!currentSettings.enabled || currentSettings.mode === "off") return [];
		const { siteId } = options;
		const results = [];
		let media = discoverMedia(root);
		if (siteId && THUMBNAIL_SELECTORS[siteId]) {
			const siteSpecific = THUMBNAIL_SELECTORS[siteId].flatMap((s) => Array.from(root.querySelectorAll(s)));
			if (siteSpecific.length > 0) media = siteSpecific;
		}
		for (const element of media) {
			if (element.hasAttribute("data-calmweb-media-hidden") || element.hasAttribute("data-calmweb-media-blurred")) continue;
			const altText = element.getAttribute("alt") || element.getAttribute("aria-label") || "";
			const analysis = analyzeAltText(altText);
			const result = {
				element,
				shouldFilter: analysis.shouldFilter,
				reason: analysis.reason,
				altText,
				confidence: analysis.confidence
			};
			if (analysis.confidence >= currentSettings.hideThreshold && currentSettings.mode === "hide") {
				element.style.setProperty("display", "none", "important");
				element.setAttribute("data-calmweb-media-hidden", "true");
				element.setAttribute("data-calmweb-reason", analysis.reason || "");
				filteredCount++;
				window.dispatchEvent(new CustomEvent("calmweb:mediaFiltered", { detail: {
					altText,
					reason: analysis.reason,
					action: "hide",
					confidence: analysis.confidence
				} }));
			} else if (analysis.confidence >= currentSettings.blurThreshold && currentSettings.mode === "blur") {
				element.style.filter = "blur(20px)";
				element.style.transition = "filter 0.2s";
				element.setAttribute("data-calmweb-media-blurred", "true");
				element.setAttribute("data-calmweb-reason", analysis.reason || "");
				filteredCount++;
				window.dispatchEvent(new CustomEvent("calmweb:mediaFiltered", { detail: {
					altText,
					reason: analysis.reason,
					action: "blur",
					confidence: analysis.confidence
				} }));
				if (currentSettings.revealOnHover) {
					element.addEventListener("mouseenter", () => {
						element.style.filter = "none";
					});
					element.addEventListener("mouseleave", () => {
						element.style.filter = "blur(20px)";
					});
				}
			}
			results.push(result);
		}
		return results;
	}
	function unfilterAllMedia() {
		const hidden = document.querySelectorAll("[data-calmweb-media-hidden]");
		const blurred = document.querySelectorAll("[data-calmweb-media-blurred]");
		hidden.forEach((el) => {
			el.style.display = "";
			el.removeAttribute("data-calmweb-media-hidden");
			el.removeAttribute("data-calmweb-reason");
		});
		blurred.forEach((el) => {
			el.style.filter = "";
			el.style.transition = "";
			el.removeAttribute("data-calmweb-media-blurred");
			el.removeAttribute("data-calmweb-reason");
		});
		filteredCount = 0;
	}
	function getFilteredCount() {
		return filteredCount;
	}
	//#endregion
	//#region src/media/toggle.ts
	/**
	* Media Filter Toggle UI
	*
	* Floating toggle button to enable/disable media filtering on the current page.
	*/
	var TOGGLE_ID = "calmweb-media-toggle";
	var STYLES_ID$1 = "calmweb-media-toggle-styles";
	function injectStyles$1() {
		if (document.getElementById(STYLES_ID$1)) return;
		const styles = document.createElement("style");
		styles.id = STYLES_ID$1;
		styles.textContent = `
    #${TOGGLE_ID} {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 2147483647;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
      background: #6366f1;
      color: white;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    #${TOGGLE_ID} .calmweb-toggle-btn.active {
      background: #22c55e;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn.inactive {
      background: #6b7280;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn svg {
      width: 24px;
      height: 24px;
    }

    #${TOGGLE_ID} .calmweb-tooltip {
      position: absolute;
      right: 56px;
      top: 50%;
      transform: translateY(-50%);
      background: #1f2937;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 13px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
    }

    #${TOGGLE_ID} .calmweb-toggle-btn:hover + .calmweb-tooltip {
      opacity: 1;
    }

    #${TOGGLE_ID} .calmweb-panel {
      position: absolute;
      bottom: 56px;
      right: 0;
      width: 220px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      padding: 12px;
      display: none;
      flex-direction: column;
      gap: 8px;
    }

    #${TOGGLE_ID} .calmweb-panel.visible {
      display: flex;
    }

    #${TOGGLE_ID} .calmweb-panel-title {
      font-weight: 600;
      font-size: 14px;
      color: #1f2937;
      margin-bottom: 4px;
    }

    #${TOGGLE_ID} .calmweb-panel-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }

    #${TOGGLE_ID} .calmweb-panel-option:last-child {
      border-bottom: none;
    }

    #${TOGGLE_ID} .calmweb-panel-label {
      font-size: 13px;
      color: #4b5563;
    }

    #${TOGGLE_ID} .calmweb-panel-toggle {
      width: 36px;
      height: 20px;
      border-radius: 10px;
      background: #d1d5db;
      position: relative;
      cursor: pointer;
      transition: background 0.2s;
    }

    #${TOGGLE_ID} .calmweb-panel-toggle.active {
      background: #22c55e;
    }

    #${TOGGLE_ID} .calmweb-panel-toggle::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: white;
      top: 2px;
      left: 2px;
      transition: transform 0.2s;
    }

    #${TOGGLE_ID} .calmweb-panel-toggle.active::after {
      transform: translateX(16px);
    }

    #${TOGGLE_ID} .calmweb-stats {
      font-size: 12px;
      color: #6b7280;
      padding: 8px;
      background: #f3f4f6;
      border-radius: 6px;
      margin-top: 4px;
    }
  `;
		document.head.appendChild(styles);
	}
	function createToggleButton(settings) {
		const container = document.createElement("div");
		container.id = TOGGLE_ID;
		const isActive = settings.enabled && settings.mode !== "off";
		container.innerHTML = `
    <button class="calmweb-toggle-btn ${isActive ? "active" : "inactive"}" title="CalmWeb Media Filter">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    </button>
    <span class="calmweb-tooltip">CalmWeb: ${isActive ? "Media filtering ON" : "Media filtering OFF"}</span>
    <div class="calmweb-panel">
      <div class="calmweb-panel-title">Media Filter</div>
      <div class="calmweb-panel-option">
        <span class="calmweb-panel-label">Filter Media</span>
        <div class="calmweb-panel-toggle ${settings.enabled ? "active" : ""}" data-setting="enabled"></div>
      </div>
      <div class="calmweb-panel-option">
        <span class="calmweb-panel-label">Blur Mode</span>
        <div class="calmweb-panel-toggle ${settings.mode === "blur" ? "active" : ""}" data-setting="blurMode"></div>
      </div>
      <div class="calmweb-panel-option">
        <span class="calmweb-panel-label">Hide Mode</span>
        <div class="calmweb-panel-toggle ${settings.mode === "hide" ? "active" : ""}" data-setting="hideMode"></div>
      </div>
      <div class="calmweb-panel-option">
        <span class="calmweb-panel-label">Reveal on Hover</span>
        <div class="calmweb-panel-toggle ${settings.revealOnHover ? "active" : ""}" data-setting="revealOnHover"></div>
      </div>
      <div class="calmweb-stats">
        <span class="calmweb-filtered-count">0</span> images filtered
      </div>
    </div>
  `;
		const btn = container.querySelector(".calmweb-toggle-btn");
		const panel = container.querySelector(".calmweb-panel");
		btn.addEventListener("click", async (e) => {
			e.stopPropagation();
			panel.classList.toggle("visible");
		});
		container.querySelectorAll(".calmweb-panel-toggle").forEach((toggle) => {
			toggle.addEventListener("click", async (e) => {
				e.stopPropagation();
				const setting = toggle.dataset.setting;
				let newSettings = { ...settings };
				if (setting === "enabled") newSettings.enabled = !newSettings.enabled;
				else if (setting === "blurMode") newSettings.mode = newSettings.mode === "blur" ? "off" : "blur";
				else if (setting === "hideMode") newSettings.mode = newSettings.mode === "hide" ? "off" : "hide";
				else if (setting === "revealOnHover") newSettings.revealOnHover = !newSettings.revealOnHover;
				await saveMediaSettings(newSettings);
				Object.assign(settings, newSettings);
				updateToggleUI(container, settings);
				window.dispatchEvent(new CustomEvent("calmweb:mediaFilterChanged", { detail: newSettings }));
			});
		});
		document.addEventListener("click", (e) => {
			if (!container.contains(e.target)) panel.classList.remove("visible");
		});
		return container;
	}
	function updateToggleUI(container, settings) {
		const btn = container.querySelector(".calmweb-toggle-btn");
		const tooltip = container.querySelector(".calmweb-tooltip");
		const isActive = settings.enabled && settings.mode !== "off";
		btn.className = `calmweb-toggle-btn ${isActive ? "active" : "inactive"}`;
		tooltip.textContent = `CalmWeb: ${isActive ? "Media filtering ON" : "Media filtering OFF"}`;
		const enabledToggle = container.querySelector("[data-setting=\"enabled\"]");
		const blurToggle = container.querySelector("[data-setting=\"blurMode\"]");
		const hideToggle = container.querySelector("[data-setting=\"hideMode\"]");
		const hoverToggle = container.querySelector("[data-setting=\"revealOnHover\"]");
		if (enabledToggle) enabledToggle.className = `calmweb-panel-toggle ${settings.enabled ? "active" : ""}`;
		if (blurToggle) blurToggle.className = `calmweb-panel-toggle ${settings.mode === "blur" ? "active" : ""}`;
		if (hideToggle) hideToggle.className = `calmweb-panel-toggle ${settings.mode === "hide" ? "active" : ""}`;
		if (hoverToggle) hoverToggle.className = `calmweb-panel-toggle ${settings.revealOnHover ? "active" : ""}`;
	}
	async function saveMediaSettings(settings) {
		try {
			await sendToBackground({
				type: MESSAGE_TYPES.UPDATE_SETTINGS,
				settings: { mediaFilter: settings }
			});
		} catch (error) {
			console.error("[MediaToggle] Failed to save settings:", error);
		}
	}
	async function initMediaToggle() {
		if (document.getElementById(TOGGLE_ID)) return;
		try {
			const settings = await sendToBackground({ type: MESSAGE_TYPES.GET_SETTINGS });
			if (!settings?.mediaFilter?.showToggle) return;
			injectStyles$1();
			const toggle = createToggleButton(settings.mediaFilter);
			document.body.appendChild(toggle);
		} catch (error) {
			console.error("[MediaToggle] Failed to initialize:", error);
		}
	}
	function updateFilteredCount(count) {
		const countEl = document.querySelector(".calmweb-filtered-count");
		if (countEl) countEl.textContent = count.toString();
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
	//#region entrypoints/media-filter.ts
	/**
	* Media Filter Content Script
	*
	* Injected on all pages to filter media based on alt text analysis.
	* Handles dynamically loaded content via MutationObserver.
	*/
	var observer = null;
	var debounceTimer = null;
	var periodicTimer = null;
	var isProcessing = false;
	function detectSiteId() {
		const host = window.location.hostname;
		if (host.includes("youtube.com") || host.includes("youtu.be")) return "youtube";
		if (host.includes("reddit.com")) return "reddit";
		if (host.includes("x.com") || host.includes("twitter.com")) return "x";
		return null;
	}
	function processMedia() {
		if (isProcessing) return;
		isProcessing = true;
		try {
			const siteId = detectSiteId() || void 0;
			filterMedia(document, { siteId });
			updateFilteredCount(getFilteredCount());
		} finally {
			isProcessing = false;
		}
	}
	function debouncedProcess() {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(processMedia, 150);
	}
	function startObserver() {
		if (observer) return;
		const processMutations = (mutations) => {
			let shouldProcess = false;
			for (const mutation of mutations) {
				if (mutation.type === "childList") {
					for (const node of Array.from(mutation.addedNodes)) if (node instanceof HTMLElement) {
						if (node.tagName === "IMG" || node.tagName === "VIDEO" || node.querySelector("img[alt], video[aria-label], [role=\"img\"]")) {
							shouldProcess = true;
							break;
						}
					}
				} else if (mutation.type === "attributes") {
					if (mutation.attributeName === "alt" || mutation.attributeName === "aria-label" || mutation.attributeName === "src") shouldProcess = true;
				}
				if (shouldProcess) break;
			}
			if (shouldProcess) debouncedProcess();
		};
		observer = new MutationObserver(processMutations);
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: [
				"alt",
				"aria-label",
				"src"
			]
		});
		periodicTimer = setInterval(() => {
			if (document.querySelectorAll("img[alt]:not([data-calmweb-media-blurred]):not([data-calmweb-media-hidden])").length > 0) processMedia();
		}, 3e3);
	}
	function stopObserver() {
		if (observer) {
			observer.disconnect();
			observer = null;
		}
		if (periodicTimer) {
			clearInterval(periodicTimer);
			periodicTimer = null;
		}
	}
	async function init() {
		initActivityOverlay();
		try {
			const settings = await sendToBackground({ type: MESSAGE_TYPES.GET_SETTINGS });
			if (!settings) return;
			if (settings.mediaFilter) setMediaFilterSettings(settings.mediaFilter);
			if (settings.mediaFilter?.showToggle) await initMediaToggle();
			if (settings.mediaFilter?.enabled && settings.mediaFilter.mode !== "off") {
				processMedia();
				startObserver();
			}
			window.addEventListener("calmweb:mediaFilterChanged", ((e) => {
				const newSettings = e.detail;
				setMediaFilterSettings(newSettings);
				if (newSettings.enabled && newSettings.mode !== "off") {
					processMedia();
					startObserver();
				} else {
					unfilterAllMedia();
					stopObserver();
				}
			}));
			let scrollTimer = null;
			window.addEventListener("scroll", () => {
				if (scrollTimer) clearTimeout(scrollTimer);
				scrollTimer = setTimeout(() => {
					if (settings.mediaFilter?.enabled && settings.mediaFilter.mode !== "off") processMedia();
				}, 500);
			}, { passive: true });
			let lastUrl = location.href;
			new MutationObserver(() => {
				if (location.href !== lastUrl) {
					lastUrl = location.href;
					if (settings.mediaFilter?.enabled && settings.mediaFilter.mode !== "off") setTimeout(processMedia, 500);
				}
			}).observe(document.body, {
				childList: true,
				subtree: true
			});
		} catch (error) {
			console.error("[MediaFilter] Failed to initialize:", error);
		}
	}
	var media_filter_default = defineContentScript({
		matches: ["<all_urls>"],
		runAt: "document_idle",
		main: init
	});
	//#endregion
	//#region \0virtual:wxt-unlisted-script-entrypoint?/home/dracon/Dev/extensions/calmweb/apps/extension/entrypoints/media-filter.ts
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
			result = media_filter_default.main();
			if (result instanceof Promise) result = result.catch((err) => {
				logger.error(`The unlisted script "media-filter" crashed on startup!`, err);
				throw err;
			});
		} catch (err) {
			logger.error(`The unlisted script "media-filter" crashed on startup!`, err);
			throw err;
		}
		return result;
	})();
})();

mediaFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtZmlsdGVyLmpzIiwibmFtZXMiOlsiYnJvd3NlciIsImJyb3dzZXIiLCJicm93c2VyIiwiZGVmYXVsdEVycm9yTWFwIiwiZGVmYXVsdEVycm9yTWFwIiwiZGVmYXVsdEVycm9yTWFwIiwiei5lbnVtIiwiei5vYmplY3QiLCJ6LnN0cmluZyIsInouYXJyYXkiLCJ6LmJvb2xlYW4iLCJ6Lm51bWJlciJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4yMC4yMF9AdHlwZXMrbm9kZUAyNS41LjBfaml0aUAyLjYuMS9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uLy4uLy4uLy4uL3d4dC1zaGFyZWQvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL2Rpc3QvYXBpL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9kaXN0L2F1dGgvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9Ad3h0LWRldi9icm93c2VyL3NyYy9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9hc3luYy1tdXRleC9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9kZXF1YWwvbGl0ZS9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9Ad3h0LWRldi9zdG9yYWdlL2Rpc3QvaW5kZXgubWpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9kaXN0L3N0b3JhZ2UvcXVvdGEuanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL2Rpc3QvZXh0ZW5zaW9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL1pvZEVycm9yLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9sb2NhbGVzL2VuLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9lcnJvcnMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvcGFyc2VVdGlsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL2Vycm9yVXRpbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy96b2QvdjMvdHlwZXMuanMiLCIuLi8uLi9zcmMvbWVzc2FnaW5nL2luZGV4LnRzIiwiLi4vLi4vc3JjL25ldXRyYWxpemVyL2xvY2FsLXJ1bGVzLnRzIiwiLi4vLi4vLi4vLi4vcGFja2FnZXMvc2hhcmVkL2Rpc3QvaW5kZXguanMiLCIuLi8uLi9zcmMvbWVkaWEvYWx0LXRleHQtZmlsdGVyLnRzIiwiLi4vLi4vc3JjL21lZGlhL3RvZ2dsZS50cyIsIi4uLy4uL3NyYy91aS9hY3Rpdml0eS1vdmVybGF5LnRzIiwiLi4vLi4vZW50cnlwb2ludHMvbWVkaWEtZmlsdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vI3JlZ2lvbiBzcmMvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0LnRzXG5mdW5jdGlvbiBkZWZpbmVDb250ZW50U2NyaXB0KGRlZmluaXRpb24pIHtcblx0cmV0dXJuIGRlZmluaXRpb247XG59XG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IGRlZmluZUNvbnRlbnRTY3JpcHQgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTIuMCAtIFR1ZSBNYXkgMTQgMjAyNCAxODowMToyOSAqL1xuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG4gIGlmICghKGdsb2JhbFRoaXMuYnJvd3NlciAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZSAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZS5pZCkpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAgIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICAgIG1heEFyZ3M6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBkZXZ0b29sczoge1xuICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycylcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiLyoqXG4gKiBBUEkgY2xpZW50IGZvciB0aGUgRHJhY29uIHBsYXRmb3JtIEFQSS5cbiAqXG4gKiBQcm92aWRlcyBzdGFuZGFyZGl6ZWQgQVBJIGFjY2VzcyB3aXRoOlxuICogLSBBdXRvbWF0aWMgYXV0aGVudGljYXRpb24gaGFuZGxpbmcgdmlhIEJlYXJlciB0b2tlblxuICogLSBUb2tlbiByZWZyZXNoIHVzaW5nIGAvYXBpL3YxL2F1dGgvcmVmcmVzaGBcbiAqIC0gQ29udGVudCBzY3JpcHQgcHJveHlpbmcgdGhyb3VnaCB0aGUgYmFja2dyb3VuZCBzY3JpcHRcbiAqIC0gVGVtcG9yYXJ5IGxlZ2FjeSBwcm9kdWN0LXJvdXRlIGhlbHBlcnMgZm9yIG1pZ3JhdGlvblxuICovXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuY29uc3Qgd2FybmVkRGVwcmVjYXRpb25zID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gd2FybkRlcHJlY2F0ZWRQcm9kdWN0Um91dGUobWV0aG9kTmFtZSwgcm91dGUpIHtcbiAgICBjb25zdCBrZXkgPSBgJHttZXRob2ROYW1lfToke3JvdXRlfWA7XG4gICAgaWYgKHdhcm5lZERlcHJlY2F0aW9ucy5oYXMoa2V5KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHdhcm5lZERlcHJlY2F0aW9ucy5hZGQoa2V5KTtcbiAgICBjb25zb2xlLndhcm4oYFt3eHQtc2hhcmVkXSAke21ldGhvZE5hbWV9KCkgaXMgZGVwcmVjYXRlZC4gJHtyb3V0ZX0gaXMgYSBsZWdhY3kgbWlncmF0aW9uIHJvdXRlLiBgICtcbiAgICAgICAgJ1ByZWZlciB0aGUgY2Fub25pY2FsIHBsYXRmb3JtIGVuZHBvaW50cyB1bmRlciAvYXBpL3YxL2F1dGgsIC9hcGkvdjEvYmlsbGluZywgYW5kIC9hcGkvdjEvY2hhdC9jb21wbGV0aW9ucy4nKTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFQSSBDbGllbnQgRmFjdG9yeVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwaUNsaWVudChvcHRpb25zKSB7XG4gICAgY29uc3QgeyBjb25maWcsIGdldEF1dGgsIHNldEF1dGgsIG9uQXV0aEVycm9yIH0gPSBvcHRpb25zO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBhdXRoIHN0YXRlXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QXV0aFN0YXRlKCkge1xuICAgICAgICBjb25zdCBhdXRoID0gYXdhaXQgZ2V0QXV0aCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIWF1dGguYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICB1c2VyOiBhdXRoLnVzZXIsXG4gICAgICAgICAgICB0b2tlbjogYXV0aC5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbjogYXV0aC5zdWJzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBnZXRBdXRoU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmlzQXV0aGVudGljYXRlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVmcmVzaCBhY2Nlc3MgdG9rZW4gdXNpbmcgdGhlIHBsYXRmb3JtIHJlZnJlc2ggZW5kcG9pbnQuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFRva2VucygpIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGF3YWl0IGdldEF1dGgoKTtcbiAgICAgICAgaWYgKCFhdXRoLnJlZnJlc2hUb2tlbilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBpL3YxL2F1dGgvcmVmcmVzaGAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLCAvLyBJbmNsdWRlIHJlZnJlc2hfdG9rZW4gY29va2llXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWZyZXNoIGZhaWxlZCcpO1xuICAgICAgICAgICAgLy8gVGhlIHBsYXRmb3JtIHJldHVybnMgbmV3IHRva2VucyBpbiB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBhd2FpdCBzZXRBdXRoKHtcbiAgICAgICAgICAgICAgICAuLi5hdXRoLFxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBkYXRhLnNlc3Npb25fdG9rZW4gfHwgZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBkYXRhLnJlZnJlc2hfdG9rZW4gfHwgYXV0aC5yZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQVBJXSBUb2tlbiByZWZyZXNoIGZhaWxlZDonLCBlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGRpcmVjdCBIVFRQIHJlcXVlc3Qgd2l0aCBhdXRoXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gcGVyZm9ybVJlcXVlc3QoZW5kcG9pbnQsIG9wdHMgPSB7fSwgaXNSZXRyeSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHsgbWV0aG9kID0gJ0dFVCcsIGJvZHksIGhlYWRlcnM6IGN1c3RvbUhlYWRlcnMsIHNraXBBdXRoIH0gPSBvcHRzO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIC4uLmN1c3RvbUhlYWRlcnMsXG4gICAgICAgIH07XG4gICAgICAgIGlmICghc2tpcEF1dGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG9rZW4sIGlzQXV0aGVudGljYXRlZDogYXV0aGVkIH0gPSBhd2FpdCBnZXRBdXRoU3RhdGUoKTtcbiAgICAgICAgICAgIGlmICghYXV0aGVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdXRoZW50aWNhdGlvbiByZXF1aXJlZC4gUGxlYXNlIGxvZyBpbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsQm9keSA9IG1ldGhvZCAhPT0gJ0dFVCcgJiYgYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdXJsID0gZW5kcG9pbnQuc3RhcnRzV2l0aCgnaHR0cCcpXG4gICAgICAgICAgICA/IGVuZHBvaW50XG4gICAgICAgICAgICA6IGAke2NvbmZpZy5hcGlVcmx9JHtlbmRwb2ludH1gO1xuICAgICAgICAvLyBOb3JtYWxpemUgVVJMOiByZW1vdmUgZG91YmxlIHNsYXNoZXMgZXhjZXB0IGFmdGVyIHByb3RvY29sXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8oW146XSlcXC9cXC8rL2csICckMS8nKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBmaW5hbEJvZHksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gSGFuZGxlIGF1dGggZXJyb3JzXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gYXdhaXQgZ2V0QXV0aFN0YXRlKCk7XG4gICAgICAgICAgICAvLyBTa2lwIHJlZnJlc2ggZm9yIGRlbW8gdG9rZW5zIG9yIGlmIGFscmVhZHkgcmV0cnlpbmdcbiAgICAgICAgICAgIGlmICh0b2tlbj8uc3RhcnRzV2l0aCgnZGVtLScpIHx8IGlzUmV0cnkpIHtcbiAgICAgICAgICAgICAgICBvbkF1dGhFcnJvcj8uKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdXRoZW50aWNhdGlvbiBmYWlsZWQgKCR7cmVzcG9uc2Uuc3RhdHVzfSkuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZyZXNoZWQgPSBhd2FpdCByZWZyZXNoVG9rZW5zKCk7XG4gICAgICAgICAgICBpZiAocmVmcmVzaGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcmZvcm1SZXF1ZXN0KGVuZHBvaW50LCBvcHRzLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQXV0aEVycm9yPy4oKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2Vzc2lvbiBleHBpcmVkLiBQbGVhc2UgbG9nIGluIGFnYWluLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBIVE1MIGVycm9yIHJlc3BvbnNlcyAobGlrZSA0MDQgU2lnbmFsIExvc3QpXG4gICAgICAgICAgICBpZiAoZXJyb3JUZXh0LmluY2x1ZGVzKCc8IURPQ1RZUEUgaHRtbD4nKSB8fCBlcnJvclRleHQuaW5jbHVkZXMoJzxodG1sJykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbQVBJXSBSZWNlaXZlZCBIVE1MIGVycm9yIGZyb20gJHt1cmx9LiBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2xvdWQgY29ubmVjdGlvbiBpbnRlcnJ1cHRlZCAoU3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfSkuIFBsZWFzZSBjaGVjayB5b3VyIEFQSSBVUkwuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JUZXh0IHx8IGBBUEkgZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1haW4gQVBJIHJlcXVlc3QgaGFuZGxlclxuICAgICAqIEF1dG9tYXRpY2FsbHkgcHJveGllcyByZXF1ZXN0cyB0aHJvdWdoIGJhY2tncm91bmQgc2NyaXB0IGlmIHJ1bm5pbmcgaW4gY29udGVudCBzY3JpcHRcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0KGVuZHBvaW50LCBvcHRzID0ge30pIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgcnVubmluZyBpbiBjb250ZW50IHNjcmlwdFxuICAgICAgICBjb25zdCBpc0NvbnRlbnRTY3JpcHQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyB8fCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKTtcbiAgICAgICAgaWYgKGlzQ29udGVudFNjcmlwdCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXBpUHJveHlSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiB0eXBlb2YgcmVzcG9uc2UgPT09ICdvYmplY3QnICYmICdlcnJvcicgaW4gcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0FQSV0gUHJveHkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERpcmVjdCByZXF1ZXN0IChQb3B1cCwgQmFja2dyb3VuZCwgT3B0aW9ucylcbiAgICAgICAgcmV0dXJuIHBlcmZvcm1SZXF1ZXN0KGVuZHBvaW50LCBvcHRzKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEhUVFAgTWV0aG9kIFNob3J0Y3V0c1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBhc3luYyBmdW5jdGlvbiBnZXQoZW5kcG9pbnQsIGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQsIHsgbWV0aG9kOiAnR0VUJywgaGVhZGVycyB9KTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gcG9zdChlbmRwb2ludCwgYm9keSwgaGVhZGVycykge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keSwgaGVhZGVycyB9KTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gcHV0KGVuZHBvaW50LCBib2R5LCBoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50LCB7IG1ldGhvZDogJ1BVVCcsIGJvZHksIGhlYWRlcnMgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbChlbmRwb2ludCwgaGVhZGVycykge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCwgeyBtZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzIH0pO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gUGxhdGZvcm0gQVBJIG9wZXJhdGlvbnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgdXNlciBpbmZvIGZyb20gdGhlIHBsYXRmb3JtLlxuICAgICAqIFJldHVybnMgdXNlciBkYXRhIGluY2x1ZGluZyBzdWJzY3JpcHRpb24gc3RhdHVzLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvYXBpL3YxL3VzZXInLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1cmNoYXNlIHF1b3RhIHZpYSBQYWRkbGUgY2hlY2tvdXQuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkUXVvdGEoYW1vdW50KSB7XG4gICAgICAgIHJldHVybiBwb3N0KCcvYXBpL3YxL2JpbGxpbmcvY2hlY2tvdXQnLCB7IHF1b3RhOiBhbW91bnQgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHF1b3RhIGJhbGFuY2UuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UXVvdGEoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvYXBpL3YxL2JpbGxpbmcvcXVvdGEnLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbm9uaWNhbCBBSSBjaGF0LWNvbXBsZXRpb25zIEFQSS5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBjaGF0Q29tcGxldGlvbnMocGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gcG9zdCgnL2FwaS92MS9jaGF0L2NvbXBsZXRpb25zJywgcGF5bG9hZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFByZWZlciBgY2hhdENvbXBsZXRpb25zKClgLlxuICAgICAqIFByb2R1Y3Qtc3BlY2lmaWMgY2hhdCByb3V0ZXMgYXJlIGEgbGVnYWN5IG1pZ3JhdGlvbiBzdXJmYWNlLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHByb2R1Y3RDaGF0Q29tcGxldGlvbnMocHJvZHVjdFNsdWcsIHBheWxvYWQpIHtcbiAgICAgICAgd2FybkRlcHJlY2F0ZWRQcm9kdWN0Um91dGUoJ3Byb2R1Y3RDaGF0Q29tcGxldGlvbnMnLCBgL2FwaS92MS9wcm9kdWN0cy8ke3Byb2R1Y3RTbHVnfS9jaGF0L2NvbXBsZXRpb25zYCk7XG4gICAgICAgIHJldHVybiBwb3N0KGAvYXBpL3YxL3Byb2R1Y3RzLyR7cHJvZHVjdFNsdWd9L2NoYXQvY29tcGxldGlvbnNgLCBwYXlsb2FkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgUHJlZmVyIGBzdWJzY3JpYmUoKWAuXG4gICAgICogUHJvZHVjdC1zcGVjaWZpYyBzdWJzY3JpYmUgcm91dGVzIGFyZSBhIGxlZ2FjeSBtaWdyYXRpb24gc3VyZmFjZS5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBwcm9kdWN0U3Vic2NyaWJlKHByb2R1Y3RTbHVnLCBwcmljZUlkKSB7XG4gICAgICAgIHdhcm5EZXByZWNhdGVkUHJvZHVjdFJvdXRlKCdwcm9kdWN0U3Vic2NyaWJlJywgYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vc3Vic2NyaWJlYCk7XG4gICAgICAgIHJldHVybiBwb3N0KGAvYXBpL3YxL3Byb2R1Y3RzLyR7cHJvZHVjdFNsdWd9L3N1YnNjcmliZWAsIHsgcHJpY2VfaWQ6IHByaWNlSWQgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFByZWZlciBgZ2V0VXNlcigpYC5cbiAgICAgKiBQcm9kdWN0LXNwZWNpZmljIHVzZXIgcm91dGVzIGFyZSBhIGxlZ2FjeSBtaWdyYXRpb24gc3VyZmFjZS5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0VXNlcihwcm9kdWN0U2x1Zykge1xuICAgICAgICB3YXJuRGVwcmVjYXRlZFByb2R1Y3RSb3V0ZSgnZ2V0UHJvZHVjdFVzZXInLCBgL2FwaS92MS9wcm9kdWN0cy8ke3Byb2R1Y3RTbHVnfS91c2VyYCk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvYXBpL3YxL3Byb2R1Y3RzLyR7cHJvZHVjdFNsdWd9L3VzZXJgLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIENvcmVcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgcGVyZm9ybVJlcXVlc3QsIC8vIERpcmVjdCByZXF1ZXN0IHdpdGhvdXQgcHJveHlcbiAgICAgICAgZ2V0QXV0aFN0YXRlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgICAgIHJlZnJlc2hUb2tlbnMsXG4gICAgICAgIC8vIEhUVFAgbWV0aG9kc1xuICAgICAgICBnZXQsXG4gICAgICAgIHBvc3QsXG4gICAgICAgIHB1dCxcbiAgICAgICAgZGVsLFxuICAgICAgICAvLyBDYW5vbmljYWwgcGxhdGZvcm0gb3BlcmF0aW9uc1xuICAgICAgICBnZXRVc2VyLFxuICAgICAgICBhZGRRdW90YSxcbiAgICAgICAgZ2V0UXVvdGEsXG4gICAgICAgIGNoYXRDb21wbGV0aW9ucyxcbiAgICAgICAgcHJvZHVjdENoYXRDb21wbGV0aW9ucyxcbiAgICAgICAgcHJvZHVjdFN1YnNjcmliZSxcbiAgICAgICAgZ2V0UHJvZHVjdFVzZXIsXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQXV0aGVudGljYXRpb24gdXRpbGl0aWVzIGZvciBXWFQgZXh0ZW5zaW9ucyB0YWxraW5nIHRvIHRoZSBEcmFjb24gcGxhdGZvcm0uXG4gKlxuICogU3VwcG9ydHMgdHdvIGF1dGggZmxvd3M6XG4gKiAxLiBFbWFpbCBNYWdpYyBMaW5rIChkZWZhdWx0KSAtIERpcmVjdCBlbWFpbC9jb2RlIHZlcmlmaWNhdGlvblxuICogMi4gT0F1dGggKGxlZ2FjeSkgLSBSZWRpcmVjdC1iYXNlZCBmbG93IHdpdGggY29kZSBleGNoYW5nZVxuICovXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWwgTWFnaWMgTGluayBGbG93XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1haWxBdXRoRmxvdyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNldEF1dGgsIHJlc2V0QXV0aCwgYXBwSWQsIGRhc2hib2FyZFBhdGggPSAnL2Rhc2hib2FyZC9sYXVuY2gnLCB9ID0gb3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGEgbWFnaWMgbGluayBjb2RlIGZvciB0aGUgZ2l2ZW4gZW1haWwuXG4gICAgICogU2VuZHMgYSA2LWRpZ2l0IGNvZGUgdG8gdGhlIHVzZXIncyBlbWFpbC5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0TWFnaWNMaW5rKGVtYWlsKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBpL3YxL2F1dGgvcmVxdWVzdC1tYWdpYy1saW5rYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICByZWRpcmVjdF90bzogZGFzaGJvYXJkUGF0aCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1hZ2ljIGxpbmsgcmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3J9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVmVyaWZ5IHRoZSA2LWRpZ2l0IGNvZGUgcmVjZWl2ZWQgdmlhIGVtYWlsLlxuICAgICAqIFJldHVybnMgYWNjZXNzIHRva2VuIGRpcmVjdGx5IChubyByZWRpcmVjdCkuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Q29kZShlbWFpbCwgY29kZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9hcGkvdjEvYXV0aC92ZXJpZnktY29kZWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBjb2RlIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb2RlIHZlcmlmaWNhdGlvbiBmYWlsZWQ6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgLy8gRmV0Y2ggdXNlciBpbmZvXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hVc2VySW5mbyhkYXRhLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICBhd2FpdCBzZXRBdXRoKHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiAnJywgLy8gRW1haWwgZmxvdyBkb2Vzbid0IHVzZSByZWZyZXNoIHRva2Vuc1xuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb246IG51bGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0F1dGhdIENvZGUgdmVyaWZpY2F0aW9uIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRmV0Y2ggdXNlciBpbmZvIHVzaW5nIHRoZSBhY2Nlc3MgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJJbmZvKHRva2VuKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L2FwaS92MS9hdXRoL3Nlc3Npb25gLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlckRhdGEuZW1haWwgfHwgJycsXG4gICAgICAgICAgICAgICAgbmFtZTogdXNlckRhdGEucHJvZmlsZV9uYW1lIHx8IHVzZXJEYXRhLm5hbWUgfHwgJ1VzZXInLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHVzZXJEYXRhLmF2YXRhcl91cmwgfHwgbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQXV0aF0gRmFpbGVkIHRvIGZldGNoIHVzZXIgaW5mbzonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBwbGF0Zm9ybSBkYXNoYm9hcmRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvcGVuRGFzaGJvYXJkKCkge1xuICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiBgJHtjb25maWcuZHJhY29uVXJsfSR7ZGFzaGJvYXJkUGF0aH1gIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2dvdXQgLSBjbGVhciBzdG9yZWQgYXV0aFxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgYXdhaXQgcmVzZXRBdXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVlc3RNYWdpY0xpbmssXG4gICAgICAgIHZlcmlmeUNvZGUsXG4gICAgICAgIG9wZW5EYXNoYm9hcmQsXG4gICAgICAgIGxvZ291dCxcbiAgICAgICAgLy8gTGVnYWN5IGNvbXBhdGliaWxpdHlcbiAgICAgICAgb3BlbkxvZ2luOiAoKSA9PiBvcGVuRGFzaGJvYXJkKCksXG4gICAgICAgIGV4Y2hhbmdlQ29kZTogYXN5bmMgKCkgPT4gZmFsc2UsXG4gICAgICAgIGhhbmRsZUF1dGhDYWxsYmFjazogYXN5bmMgKCkgPT4gKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6ICdVc2UgZW1haWwgbWFnaWMgbGluayBmbG93IGluc3RlYWQnXG4gICAgICAgIH0pLFxuICAgIH07XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPQXV0aCBGbG93IChMZWdhY3kpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT0F1dGhBdXRoRmxvdyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNldEF1dGgsIHJlc2V0QXV0aCwgYXBwSWQsIHByb3ZpZGVyID0gJ2dvb2dsZScsIGNhbGxiYWNrUGF0aCA9ICdhdXRoLWNhbGxiYWNrLmh0bWwnLCBkYXNoYm9hcmRQYXRoID0gJy9kYXNoYm9hcmQvbGF1bmNoJywgfSA9IG9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2dpbiBVUkwgZm9yIE9BdXRoXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TG9naW5VcmwoKSB7XG4gICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTChjYWxsYmFja1BhdGgpO1xuICAgICAgICByZXR1cm4gYCR7Y29uZmlnLmRyYWNvblVybH0vYXBpL3YxL2F1dGgvbG9naW4vJHtwcm92aWRlcn0/cmVkaXJlY3RfdXJpPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0VXJsKX0mYXBwPSR7YXBwSWR9YDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgbG9naW4gcGFnZSBpbiBhIG5ldyB0YWJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvcGVuTG9naW4oKSB7XG4gICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IGdldExvZ2luVXJsKCkgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIHBsYXRmb3JtIGRhc2hib2FyZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9wZW5EYXNoYm9hcmQoKSB7XG4gICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IGAke2NvbmZpZy5kcmFjb25Vcmx9JHtkYXNoYm9hcmRQYXRofWAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvZ291dCAtIGNsZWFyIHN0b3JlZCBhdXRoXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICBhd2FpdCByZXNldEF1dGgoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhjaGFuZ2UgYXV0aG9yaXphdGlvbiBjb2RlIGZvciB0b2tlbnNcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBleGNoYW5nZUNvZGUoY29kZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9hcGkvdjEvYXV0aC9leGNoYW5nZWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvZGUgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRva2VuIGV4Y2hhbmdlIGZhaWxlZDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hVc2VySW5mbyhkYXRhLnNlc3Npb25fdG9rZW4pO1xuICAgICAgICAgICAgYXdhaXQgc2V0QXV0aCh7XG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGRhdGEuc2Vzc2lvbl90b2tlbixcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IGRhdGEucmVmcmVzaF90b2tlbixcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2VyIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiBudWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBdXRoXSBUb2tlbiBleGNoYW5nZSBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckluZm8odG9rZW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBpL3YxL3VzZXJgLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXJEYXRhLmVtYWlsIHx8ICcnLFxuICAgICAgICAgICAgICAgIG5hbWU6IHVzZXJEYXRhLm5hbWUgfHwgJ1VzZXInLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHVzZXJEYXRhLmF2YXRhcl91cmwgfHwgdXNlckRhdGEucGljdHVyZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQXV0aF0gRmFpbGVkIHRvIGZldGNoIHVzZXIgaW5mbzonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGF1dGggY2FsbGJhY2sgZnJvbSBPQXV0aFxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUF1dGhDYWxsYmFjaygpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGhhc2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgY29uc3QgY29kZSA9IHBhcmFtcy5nZXQoJ2NvZGUnKTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBwYXJhbXMuZ2V0KCdlcnJvcicpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYE9BdXRoIGVycm9yOiAke2Vycm9yfWAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vIGF1dGhvcml6YXRpb24gY29kZSByZWNlaXZlZCcgfTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGV4Y2hhbmdlQ29kZShjb2RlKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3MgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnRXhjaGFuZ2UgZmFpbGVkJyB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldExvZ2luVXJsLFxuICAgICAgICBvcGVuTG9naW4sXG4gICAgICAgIG9wZW5EYXNoYm9hcmQsXG4gICAgICAgIGxvZ291dCxcbiAgICAgICAgZXhjaGFuZ2VDb2RlLFxuICAgICAgICBoYW5kbGVBdXRoQ2FsbGJhY2ssXG4gICAgICAgIC8vIEVtYWlsIGZsb3cgY29tcGF0aWJpbGl0eVxuICAgICAgICByZXF1ZXN0TWFnaWNMaW5rOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZSBPQXV0aCBmbG93IGluc3RlYWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdmVyaWZ5Q29kZTogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2UgT0F1dGggZmxvdyBpbnN0ZWFkJyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVuaWZpZWQgQXV0aCBGbG93IEZhY3Rvcnlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdXRoRmxvdyhvcHRpb25zKSB7XG4gICAgY29uc3QgZmxvdyA9IG9wdGlvbnMuZmxvdyB8fCAnZW1haWwnO1xuICAgIGlmIChmbG93ID09PSAnZW1haWwnKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbWFpbEF1dGhGbG93KG9wdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU9BdXRoQXV0aEZsb3cob3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUpXVCh0b2tlbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgICAgIGlmICghYmFzZTY0VXJsKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgICAgICBjb25zdCBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGJhc2U2NClcbiAgICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKSk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25QYXlsb2FkKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbSldUXSBGYWlsZWQgdG8gZGVjb2RlIHRva2VuOicsIGUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUb2tlbkV4cGlyZWQodG9rZW4pIHtcbiAgICBjb25zdCBwYXlsb2FkID0gZGVjb2RlSldUKHRva2VuKTtcbiAgICBpZiAoIXBheWxvYWQ/LmV4cClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIERhdGUubm93KCkgPj0gcGF5bG9hZC5leHAgKiAxMDAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJGcm9tVG9rZW4odG9rZW4pIHtcbiAgICBjb25zdCBwYXlsb2FkID0gZGVjb2RlSldUKHRva2VuKTtcbiAgICBpZiAoIXBheWxvYWQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwYXlsb2FkLnN1YixcbiAgICAgICAgbmFtZTogcGF5bG9hZC5uYW1lLFxuICAgICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbCxcbiAgICAgICAgcGljdHVyZTogcGF5bG9hZC5waWN0dXJlLFxuICAgIH07XG59XG4vLyBSZS1leHBvcnQgc3RhbmRhbG9uZSBjYWxsYmFjayBoYW5kbGVyXG5leHBvcnQgeyBpbml0QXV0aENhbGxiYWNrIH0gZnJvbSAnLi9jYWxsYmFjay5qcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyAjcmVnaW9uIHNuaXBwZXRcbmV4cG9ydCBjb25zdCBicm93c2VyID0gZ2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lPy5pZFxuICA/IGdsb2JhbFRoaXMuYnJvd3NlclxuICA6IGdsb2JhbFRoaXMuY2hyb21lO1xuLy8gI2VuZHJlZ2lvbiBzbmlwcGV0XG4iLCJjb25zdCBFX1RJTUVPVVQgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgbXV0ZXggdG8gYmVjb21lIGF2YWlsYWJsZScpO1xuY29uc3QgRV9BTFJFQURZX0xPQ0tFRCA9IG5ldyBFcnJvcignbXV0ZXggYWxyZWFkeSBsb2NrZWQnKTtcbmNvbnN0IEVfQ0FOQ0VMRUQgPSBuZXcgRXJyb3IoJ3JlcXVlc3QgZm9yIGxvY2sgY2FuY2VsZWQnKTtcblxudmFyIF9fYXdhaXRlciQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBTZW1hcGhvcmUge1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZSwgX2NhbmNlbEVycm9yID0gRV9DQU5DRUxFRCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgdGhpcy5fY2FuY2VsRXJyb3IgPSBfY2FuY2VsRXJyb3I7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVycyA9IFtdO1xuICAgIH1cbiAgICBhY3F1aXJlKHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHsgcmVzb2x2ZSwgcmVqZWN0LCB3ZWlnaHQsIHByaW9yaXR5IH07XG4gICAgICAgICAgICBjb25zdCBpID0gZmluZEluZGV4RnJvbUVuZCh0aGlzLl9xdWV1ZSwgKG90aGVyKSA9PiBwcmlvcml0eSA8PSBvdGhlci5wcmlvcml0eSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEgJiYgd2VpZ2h0IDw9IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZHMgaW1tZWRpYXRlIGRpc3BhdGNoLCBza2lwIHRoZSBxdWV1ZVxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoSXRlbSh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXVlLnNwbGljZShpICsgMSwgMCwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2tfMSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyJDIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAoY2FsbGJhY2ssIHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCByZWxlYXNlXSA9IHlpZWxkIHRoaXMuYWNxdWlyZSh3ZWlnaHQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHJlbGVhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHdhaXRGb3JVbmxvY2sod2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgIGlmICh0aGlzLl9jb3VsZExvY2tJbW1lZGlhdGVseSh3ZWlnaHQsIHByaW9yaXR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSA9IFtdO1xuICAgICAgICAgICAgICAgIGluc2VydFNvcnRlZCh0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0sIHsgcmVzb2x2ZSwgcHJpb3JpdHkgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0xvY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlIDw9IDA7XG4gICAgfVxuICAgIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoUXVldWUoKTtcbiAgICB9XG4gICAgcmVsZWFzZSh3ZWlnaHQgPSAxKSB7XG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlICs9IHdlaWdodDtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hRdWV1ZSgpO1xuICAgIH1cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlLmZvckVhY2goKGVudHJ5KSA9PiBlbnRyeS5yZWplY3QodGhpcy5fY2FuY2VsRXJyb3IpKTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB9XG4gICAgX2Rpc3BhdGNoUXVldWUoKSB7XG4gICAgICAgIHRoaXMuX2RyYWluVW5sb2NrV2FpdGVycygpO1xuICAgICAgICB3aGlsZSAodGhpcy5fcXVldWUubGVuZ3RoID4gMCAmJiB0aGlzLl9xdWV1ZVswXS53ZWlnaHQgPD0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoSXRlbSh0aGlzLl9xdWV1ZS5zaGlmdCgpKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWluVW5sb2NrV2FpdGVycygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9kaXNwYXRjaEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlIC09IGl0ZW0ud2VpZ2h0O1xuICAgICAgICBpdGVtLnJlc29sdmUoW3ByZXZpb3VzVmFsdWUsIHRoaXMuX25ld1JlbGVhc2VyKGl0ZW0ud2VpZ2h0KV0pO1xuICAgIH1cbiAgICBfbmV3UmVsZWFzZXIod2VpZ2h0KSB7XG4gICAgICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSh3ZWlnaHQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBfZHJhaW5VbmxvY2tXYWl0ZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB3ZWlnaHQgPSB0aGlzLl92YWx1ZTsgd2VpZ2h0ID4gMDsgd2VpZ2h0LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0ZXJzID0gdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICghd2FpdGVycylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgd2FpdGVycy5mb3JFYWNoKCh3YWl0ZXIpID0+IHdhaXRlci5yZXNvbHZlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcXVldWVkUHJpb3JpdHkgPSB0aGlzLl9xdWV1ZVswXS5wcmlvcml0eTtcbiAgICAgICAgICAgIGZvciAobGV0IHdlaWdodCA9IHRoaXMuX3ZhbHVlOyB3ZWlnaHQgPiAwOyB3ZWlnaHQtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRlcnMgPSB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKCF3YWl0ZXJzKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gd2FpdGVycy5maW5kSW5kZXgoKHdhaXRlcikgPT4gd2FpdGVyLnByaW9yaXR5IDw9IHF1ZXVlZFByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAoaSA9PT0gLTEgPyB3YWl0ZXJzIDogd2FpdGVycy5zcGxpY2UoMCwgaSkpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh3YWl0ZXIgPT4gd2FpdGVyLnJlc29sdmUoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jb3VsZExvY2tJbW1lZGlhdGVseSh3ZWlnaHQsIHByaW9yaXR5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fcXVldWUubGVuZ3RoID09PSAwIHx8IHRoaXMuX3F1ZXVlWzBdLnByaW9yaXR5IDwgcHJpb3JpdHkpICYmXG4gICAgICAgICAgICB3ZWlnaHQgPD0gdGhpcy5fdmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0U29ydGVkKGEsIHYpIHtcbiAgICBjb25zdCBpID0gZmluZEluZGV4RnJvbUVuZChhLCAob3RoZXIpID0+IHYucHJpb3JpdHkgPD0gb3RoZXIucHJpb3JpdHkpO1xuICAgIGEuc3BsaWNlKGkgKyAxLCAwLCB2KTtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleEZyb21FbmQoYSwgcHJlZGljYXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG52YXIgX19hd2FpdGVyJDEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNsYXNzIE11dGV4IHtcbiAgICBjb25zdHJ1Y3RvcihjYW5jZWxFcnJvcikge1xuICAgICAgICB0aGlzLl9zZW1hcGhvcmUgPSBuZXcgU2VtYXBob3JlKDEsIGNhbmNlbEVycm9yKTtcbiAgICB9XG4gICAgYWNxdWlyZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlciQxKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKHByaW9yaXR5ID0gMCkge1xuICAgICAgICAgICAgY29uc3QgWywgcmVsZWFzZXJdID0geWllbGQgdGhpcy5fc2VtYXBob3JlLmFjcXVpcmUoMSwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbGVhc2VyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5ydW5FeGNsdXNpdmUoKCkgPT4gY2FsbGJhY2soKSwgMSwgcHJpb3JpdHkpO1xuICAgIH1cbiAgICBpc0xvY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpO1xuICAgIH1cbiAgICB3YWl0Rm9yVW5sb2NrKHByaW9yaXR5ID0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLndhaXRGb3JVbmxvY2soMSwgcHJpb3JpdHkpO1xuICAgIH1cbiAgICByZWxlYXNlKCkge1xuICAgICAgICBpZiAodGhpcy5fc2VtYXBob3JlLmlzTG9ja2VkKCkpXG4gICAgICAgICAgICB0aGlzLl9zZW1hcGhvcmUucmVsZWFzZSgpO1xuICAgIH1cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUuY2FuY2VsKCk7XG4gICAgfVxufVxuXG52YXIgX19hd2FpdGVyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5mdW5jdGlvbiB3aXRoVGltZW91dChzeW5jLCB0aW1lb3V0LCB0aW1lb3V0RXJyb3IgPSBFX1RJTUVPVVQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY3F1aXJlOiAod2VpZ2h0T3JQcmlvcml0eSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGxldCB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNTZW1hcGhvcmUoc3luYykpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWlnaHQgIT09IHVuZGVmaW5lZCAmJiB3ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGxldCBpc1RpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXNUaW1lb3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRpbWVvdXRFcnJvcik7XG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2V0ID0geWllbGQgKGlzU2VtYXBob3JlKHN5bmMpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN5bmMuYWNxdWlyZSh3ZWlnaHQsIHByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzeW5jLmFjcXVpcmUocHJpb3JpdHkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsZWFzZSA9IEFycmF5LmlzQXJyYXkodGlja2V0KSA/IHRpY2tldFsxXSA6IHRpY2tldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aWNrZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrLCB3ZWlnaHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGxldCByZWxlYXNlID0gKCkgPT4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IHlpZWxkIHRoaXMuYWNxdWlyZSh3ZWlnaHQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGlja2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSA9IHRpY2tldFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjayh0aWNrZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSA9IHRpY2tldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbGVhc2Uod2VpZ2h0KSB7XG4gICAgICAgICAgICBzeW5jLnJlbGVhc2Uod2VpZ2h0KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bmMuY2FuY2VsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhaXRGb3JVbmxvY2s6ICh3ZWlnaHRPclByaW9yaXR5LCBwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgbGV0IHdlaWdodDtcbiAgICAgICAgICAgIGlmIChpc1NlbWFwaG9yZShzeW5jKSkge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlaWdodCAhPT0gdW5kZWZpbmVkICYmIHdlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiByZWplY3QodGltZW91dEVycm9yKSwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgKGlzU2VtYXBob3JlKHN5bmMpXG4gICAgICAgICAgICAgICAgICAgID8gc3luYy53YWl0Rm9yVW5sb2NrKHdlaWdodCwgcHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgICAgIDogc3luYy53YWl0Rm9yVW5sb2NrKHByaW9yaXR5KSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNMb2NrZWQ6ICgpID0+IHN5bmMuaXNMb2NrZWQoKSxcbiAgICAgICAgZ2V0VmFsdWU6ICgpID0+IHN5bmMuZ2V0VmFsdWUoKSxcbiAgICAgICAgc2V0VmFsdWU6ICh2YWx1ZSkgPT4gc3luYy5zZXRWYWx1ZSh2YWx1ZSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzU2VtYXBob3JlKHN5bmMpIHtcbiAgICByZXR1cm4gc3luYy5nZXRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpc25lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmZ1bmN0aW9uIHRyeUFjcXVpcmUoc3luYywgYWxyZWFkeUFjcXVpcmVkRXJyb3IgPSBFX0FMUkVBRFlfTE9DS0VEKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICByZXR1cm4gd2l0aFRpbWVvdXQoc3luYywgMCwgYWxyZWFkeUFjcXVpcmVkRXJyb3IpO1xufVxuXG5leHBvcnQgeyBFX0FMUkVBRFlfTE9DS0VELCBFX0NBTkNFTEVELCBFX1RJTUVPVVQsIE11dGV4LCBTZW1hcGhvcmUsIHRyeUFjcXVpcmUsIHdpdGhUaW1lb3V0IH07XG4iLCJ2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuO1xuXHRpZiAoZm9vID09PSBiYXIpIHJldHVybiB0cnVlO1xuXG5cdGlmIChmb28gJiYgYmFyICYmIChjdG9yPWZvby5jb25zdHJ1Y3RvcikgPT09IGJhci5jb25zdHJ1Y3Rvcikge1xuXHRcdGlmIChjdG9yID09PSBEYXRlKSByZXR1cm4gZm9vLmdldFRpbWUoKSA9PT0gYmFyLmdldFRpbWUoKTtcblx0XHRpZiAoY3RvciA9PT0gUmVnRXhwKSByZXR1cm4gZm9vLnRvU3RyaW5nKCkgPT09IGJhci50b1N0cmluZygpO1xuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28ubGVuZ3RoKSA9PT0gYmFyLmxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZGVxdWFsKGZvb1tsZW5dLCBiYXJbbGVuXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdG9yIHx8IHR5cGVvZiBmb28gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRsZW4gPSAwO1xuXHRcdFx0Zm9yIChjdG9yIGluIGZvbykge1xuXHRcdFx0XHRpZiAoaGFzLmNhbGwoZm9vLCBjdG9yKSAmJiArK2xlbiAmJiAhaGFzLmNhbGwoYmFyLCBjdG9yKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZiAoIShjdG9yIGluIGJhcikgfHwgIWRlcXVhbChmb29bY3Rvcl0sIGJhcltjdG9yXSkpIHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhiYXIpLmxlbmd0aCA9PT0gbGVuO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmb28gIT09IGZvbyAmJiBiYXIgIT09IGJhcjtcbn1cbiIsImltcG9ydCB7IGJyb3dzZXIgfSBmcm9tIFwiQHd4dC1kZXYvYnJvd3NlclwiO1xuaW1wb3J0IHsgTXV0ZXggfSBmcm9tIFwiYXN5bmMtbXV0ZXhcIjtcbmltcG9ydCB7IGRlcXVhbCB9IGZyb20gXCJkZXF1YWwvbGl0ZVwiO1xuXG4vLyNyZWdpb24gc3JjL2luZGV4LnRzXG4vKipcbiogU2ltcGxpZmllZCBzdG9yYWdlIEFQSXMgd2l0aCBzdXBwb3J0IGZvciB2ZXJzaW9uZWQgZmllbGRzLCBzbmFwc2hvdHMsIG1ldGFkYXRhLCBhbmQgaXRlbSBkZWZpbml0aW9ucy5cbipcbiogU2VlIFt0aGUgZ3VpZGVdKGh0dHBzOi8vd3h0LmRldi9zdG9yYWdlLmh0bWwpIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuKiBAbW9kdWxlIEB3eHQtZGV2L3N0b3JhZ2VcbiovXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlU3RvcmFnZSgpO1xuZnVuY3Rpb24gY3JlYXRlU3RvcmFnZSgpIHtcblx0Y29uc3QgZHJpdmVycyA9IHtcblx0XHRsb2NhbDogY3JlYXRlRHJpdmVyKFwibG9jYWxcIiksXG5cdFx0c2Vzc2lvbjogY3JlYXRlRHJpdmVyKFwic2Vzc2lvblwiKSxcblx0XHRzeW5jOiBjcmVhdGVEcml2ZXIoXCJzeW5jXCIpLFxuXHRcdG1hbmFnZWQ6IGNyZWF0ZURyaXZlcihcIm1hbmFnZWRcIilcblx0fTtcblx0Y29uc3QgZ2V0RHJpdmVyID0gKGFyZWEpID0+IHtcblx0XHRjb25zdCBkcml2ZXIgPSBkcml2ZXJzW2FyZWFdO1xuXHRcdGlmIChkcml2ZXIgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgYXJlYU5hbWVzID0gT2JqZWN0LmtleXMoZHJpdmVycykuam9pbihcIiwgXCIpO1xuXHRcdFx0dGhyb3cgRXJyb3IoYEludmFsaWQgYXJlYSBcIiR7YXJlYX1cIi4gT3B0aW9uczogJHthcmVhTmFtZXN9YCk7XG5cdFx0fVxuXHRcdHJldHVybiBkcml2ZXI7XG5cdH07XG5cdGNvbnN0IHJlc29sdmVLZXkgPSAoa2V5KSA9PiB7XG5cdFx0Y29uc3QgZGVsaW1pbmF0b3JJbmRleCA9IGtleS5pbmRleE9mKFwiOlwiKTtcblx0XHRjb25zdCBkcml2ZXJBcmVhID0ga2V5LnN1YnN0cmluZygwLCBkZWxpbWluYXRvckluZGV4KTtcblx0XHRjb25zdCBkcml2ZXJLZXkgPSBrZXkuc3Vic3RyaW5nKGRlbGltaW5hdG9ySW5kZXggKyAxKTtcblx0XHRpZiAoZHJpdmVyS2V5ID09IG51bGwpIHRocm93IEVycm9yKGBTdG9yYWdlIGtleSBzaG91bGQgYmUgaW4gdGhlIGZvcm0gb2YgXCJhcmVhOmtleVwiLCBidXQgcmVjZWl2ZWQgXCIke2tleX1cImApO1xuXHRcdHJldHVybiB7XG5cdFx0XHRkcml2ZXJBcmVhLFxuXHRcdFx0ZHJpdmVyS2V5LFxuXHRcdFx0ZHJpdmVyOiBnZXREcml2ZXIoZHJpdmVyQXJlYSlcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBnZXRNZXRhS2V5ID0gKGtleSkgPT4ga2V5ICsgXCIkXCI7XG5cdGNvbnN0IG1lcmdlTWV0YSA9IChvbGRNZXRhLCBuZXdNZXRhKSA9PiB7XG5cdFx0Y29uc3QgbmV3RmllbGRzID0geyAuLi5vbGRNZXRhIH07XG5cdFx0T2JqZWN0LmVudHJpZXMobmV3TWV0YSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZGVsZXRlIG5ld0ZpZWxkc1trZXldO1xuXHRcdFx0ZWxzZSBuZXdGaWVsZHNba2V5XSA9IHZhbHVlO1xuXHRcdH0pO1xuXHRcdHJldHVybiBuZXdGaWVsZHM7XG5cdH07XG5cdGNvbnN0IGdldFZhbHVlT3JGYWxsYmFjayA9ICh2YWx1ZSwgZmFsbGJhY2spID0+IHZhbHVlID8/IGZhbGxiYWNrID8/IG51bGw7XG5cdGNvbnN0IGdldE1ldGFWYWx1ZSA9IChwcm9wZXJ0aWVzKSA9PiB0eXBlb2YgcHJvcGVydGllcyA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiB7fTtcblx0Y29uc3QgZ2V0SXRlbSA9IGFzeW5jIChkcml2ZXIsIGRyaXZlcktleSwgb3B0cykgPT4ge1xuXHRcdHJldHVybiBnZXRWYWx1ZU9yRmFsbGJhY2soYXdhaXQgZHJpdmVyLmdldEl0ZW0oZHJpdmVyS2V5KSwgb3B0cz8uZmFsbGJhY2sgPz8gb3B0cz8uZGVmYXVsdFZhbHVlKTtcblx0fTtcblx0Y29uc3QgZ2V0TWV0YSA9IGFzeW5jIChkcml2ZXIsIGRyaXZlcktleSkgPT4ge1xuXHRcdGNvbnN0IG1ldGFLZXkgPSBnZXRNZXRhS2V5KGRyaXZlcktleSk7XG5cdFx0cmV0dXJuIGdldE1ldGFWYWx1ZShhd2FpdCBkcml2ZXIuZ2V0SXRlbShtZXRhS2V5KSk7XG5cdH07XG5cdGNvbnN0IHNldEl0ZW0gPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIHZhbHVlKSA9PiB7XG5cdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW0oZHJpdmVyS2V5LCB2YWx1ZSA/PyBudWxsKTtcblx0fTtcblx0Y29uc3Qgc2V0TWV0YSA9IGFzeW5jIChkcml2ZXIsIGRyaXZlcktleSwgcHJvcGVydGllcykgPT4ge1xuXHRcdGNvbnN0IG1ldGFLZXkgPSBnZXRNZXRhS2V5KGRyaXZlcktleSk7XG5cdFx0Y29uc3QgZXhpc3RpbmdGaWVsZHMgPSBnZXRNZXRhVmFsdWUoYXdhaXQgZHJpdmVyLmdldEl0ZW0obWV0YUtleSkpO1xuXHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtKG1ldGFLZXksIG1lcmdlTWV0YShleGlzdGluZ0ZpZWxkcywgcHJvcGVydGllcykpO1xuXHR9O1xuXHRjb25zdCByZW1vdmVJdGVtID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKSA9PiB7XG5cdFx0YXdhaXQgZHJpdmVyLnJlbW92ZUl0ZW0oZHJpdmVyS2V5KTtcblx0XHRpZiAob3B0cz8ucmVtb3ZlTWV0YSkge1xuXHRcdFx0Y29uc3QgbWV0YUtleSA9IGdldE1ldGFLZXkoZHJpdmVyS2V5KTtcblx0XHRcdGF3YWl0IGRyaXZlci5yZW1vdmVJdGVtKG1ldGFLZXkpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVtb3ZlTWV0YSA9IGFzeW5jIChkcml2ZXIsIGRyaXZlcktleSwgcHJvcGVydGllcykgPT4ge1xuXHRcdGNvbnN0IG1ldGFLZXkgPSBnZXRNZXRhS2V5KGRyaXZlcktleSk7XG5cdFx0aWYgKHByb3BlcnRpZXMgPT0gbnVsbCkgYXdhaXQgZHJpdmVyLnJlbW92ZUl0ZW0obWV0YUtleSk7XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zdCBuZXdGaWVsZHMgPSBnZXRNZXRhVmFsdWUoYXdhaXQgZHJpdmVyLmdldEl0ZW0obWV0YUtleSkpO1xuXHRcdFx0W3Byb3BlcnRpZXNdLmZsYXQoKS5mb3JFYWNoKChmaWVsZCkgPT4gZGVsZXRlIG5ld0ZpZWxkc1tmaWVsZF0pO1xuXHRcdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW0obWV0YUtleSwgbmV3RmllbGRzKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHdhdGNoID0gKGRyaXZlciwgZHJpdmVyS2V5LCBjYikgPT4gZHJpdmVyLndhdGNoKGRyaXZlcktleSwgY2IpO1xuXHRyZXR1cm4ge1xuXHRcdGdldEl0ZW06IGFzeW5jIChrZXksIG9wdHMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdHJldHVybiBhd2FpdCBnZXRJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCBvcHRzKTtcblx0XHR9LFxuXHRcdGdldEl0ZW1zOiBhc3luYyAoa2V5cykgPT4ge1xuXHRcdFx0Y29uc3QgYXJlYVRvS2V5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdGNvbnN0IGtleVRvT3B0c01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRjb25zdCBvcmRlcmVkS2V5cyA9IFtdO1xuXHRcdFx0a2V5cy5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdFx0bGV0IGtleVN0cjtcblx0XHRcdFx0bGV0IG9wdHM7XG5cdFx0XHRcdGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSBrZXlTdHIgPSBrZXk7XG5cdFx0XHRcdGVsc2UgaWYgKFwiZ2V0VmFsdWVcIiBpbiBrZXkpIHtcblx0XHRcdFx0XHRrZXlTdHIgPSBrZXkua2V5O1xuXHRcdFx0XHRcdG9wdHMgPSB7IGZhbGxiYWNrOiBrZXkuZmFsbGJhY2sgfTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRrZXlTdHIgPSBrZXkua2V5O1xuXHRcdFx0XHRcdG9wdHMgPSBrZXkub3B0aW9ucztcblx0XHRcdFx0fVxuXHRcdFx0XHRvcmRlcmVkS2V5cy5wdXNoKGtleVN0cik7XG5cdFx0XHRcdGNvbnN0IHsgZHJpdmVyQXJlYSwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleVN0cik7XG5cdFx0XHRcdGNvbnN0IGFyZWFLZXlzID0gYXJlYVRvS2V5TWFwLmdldChkcml2ZXJBcmVhKSA/PyBbXTtcblx0XHRcdFx0YXJlYVRvS2V5TWFwLnNldChkcml2ZXJBcmVhLCBhcmVhS2V5cy5jb25jYXQoZHJpdmVyS2V5KSk7XG5cdFx0XHRcdGtleVRvT3B0c01hcC5zZXQoa2V5U3RyLCBvcHRzKTtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgcmVzdWx0c01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGFyZWFUb0tleU1hcC5lbnRyaWVzKCkpLm1hcChhc3luYyAoW2RyaXZlckFyZWEsIGtleXNdKSA9PiB7XG5cdFx0XHRcdChhd2FpdCBkcml2ZXJzW2RyaXZlckFyZWFdLmdldEl0ZW1zKGtleXMpKS5mb3JFYWNoKChkcml2ZXJSZXN1bHQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBgJHtkcml2ZXJBcmVhfToke2RyaXZlclJlc3VsdC5rZXl9YDtcblx0XHRcdFx0XHRjb25zdCBvcHRzID0ga2V5VG9PcHRzTWFwLmdldChrZXkpO1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0VmFsdWVPckZhbGxiYWNrKGRyaXZlclJlc3VsdC52YWx1ZSwgb3B0cz8uZmFsbGJhY2sgPz8gb3B0cz8uZGVmYXVsdFZhbHVlKTtcblx0XHRcdFx0XHRyZXN1bHRzTWFwLnNldChrZXksIHZhbHVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KSk7XG5cdFx0XHRyZXR1cm4gb3JkZXJlZEtleXMubWFwKChrZXkpID0+ICh7XG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWU6IHJlc3VsdHNNYXAuZ2V0KGtleSlcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdGdldE1ldGE6IGFzeW5jIChrZXkpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdHJldHVybiBhd2FpdCBnZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5KTtcblx0XHR9LFxuXHRcdGdldE1ldGFzOiBhc3luYyAoYXJncykgPT4ge1xuXHRcdFx0Y29uc3Qga2V5cyA9IGFyZ3MubWFwKChhcmcpID0+IHtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIiA/IGFyZyA6IGFyZy5rZXk7XG5cdFx0XHRcdGNvbnN0IHsgZHJpdmVyQXJlYSwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdGRyaXZlckFyZWEsXG5cdFx0XHRcdFx0ZHJpdmVyS2V5LFxuXHRcdFx0XHRcdGRyaXZlck1ldGFLZXk6IGdldE1ldGFLZXkoZHJpdmVyS2V5KVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBhcmVhVG9Ecml2ZXJNZXRhS2V5c01hcCA9IGtleXMucmVkdWNlKChtYXAsIGtleSkgPT4ge1xuXHRcdFx0XHRtYXBba2V5LmRyaXZlckFyZWFdID8/PSBbXTtcblx0XHRcdFx0bWFwW2tleS5kcml2ZXJBcmVhXS5wdXNoKGtleSk7XG5cdFx0XHRcdHJldHVybiBtYXA7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XHRjb25zdCByZXN1bHRzTWFwID0ge307XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChPYmplY3QuZW50cmllcyhhcmVhVG9Ecml2ZXJNZXRhS2V5c01hcCkubWFwKGFzeW5jIChbYXJlYSwga2V5c10pID0+IHtcblx0XHRcdFx0Y29uc3QgYXJlYVJlcyA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoa2V5cy5tYXAoKGtleSkgPT4ga2V5LmRyaXZlck1ldGFLZXkpKTtcblx0XHRcdFx0a2V5cy5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdFx0XHRyZXN1bHRzTWFwW2tleS5rZXldID0gYXJlYVJlc1trZXkuZHJpdmVyTWV0YUtleV0gPz8ge307XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSkpO1xuXHRcdFx0cmV0dXJuIGtleXMubWFwKChrZXkpID0+ICh7XG5cdFx0XHRcdGtleToga2V5LmtleSxcblx0XHRcdFx0bWV0YTogcmVzdWx0c01hcFtrZXkua2V5XVxuXHRcdFx0fSkpO1xuXHRcdH0sXG5cdFx0c2V0SXRlbTogYXN5bmMgKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGF3YWl0IHNldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIHZhbHVlKTtcblx0XHR9LFxuXHRcdHNldEl0ZW1zOiBhc3luYyAoaXRlbXMpID0+IHtcblx0XHRcdGNvbnN0IGFyZWFUb0tleVZhbHVlTWFwID0ge307XG5cdFx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgZHJpdmVyQXJlYSwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KFwia2V5XCIgaW4gaXRlbSA/IGl0ZW0ua2V5IDogaXRlbS5pdGVtLmtleSk7XG5cdFx0XHRcdGFyZWFUb0tleVZhbHVlTWFwW2RyaXZlckFyZWFdID8/PSBbXTtcblx0XHRcdFx0YXJlYVRvS2V5VmFsdWVNYXBbZHJpdmVyQXJlYV0ucHVzaCh7XG5cdFx0XHRcdFx0a2V5OiBkcml2ZXJLZXksXG5cdFx0XHRcdFx0dmFsdWU6IGl0ZW0udmFsdWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5lbnRyaWVzKGFyZWFUb0tleVZhbHVlTWFwKS5tYXAoYXN5bmMgKFtkcml2ZXJBcmVhLCB2YWx1ZXNdKSA9PiB7XG5cdFx0XHRcdGF3YWl0IGdldERyaXZlcihkcml2ZXJBcmVhKS5zZXRJdGVtcyh2YWx1ZXMpO1xuXHRcdFx0fSkpO1xuXHRcdH0sXG5cdFx0c2V0TWV0YTogYXN5bmMgKGtleSwgcHJvcGVydGllcykgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0YXdhaXQgc2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSwgcHJvcGVydGllcyk7XG5cdFx0fSxcblx0XHRzZXRNZXRhczogYXN5bmMgKGl0ZW1zKSA9PiB7XG5cdFx0XHRjb25zdCBhcmVhVG9NZXRhVXBkYXRlc01hcCA9IHt9O1xuXHRcdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShcImtleVwiIGluIGl0ZW0gPyBpdGVtLmtleSA6IGl0ZW0uaXRlbS5rZXkpO1xuXHRcdFx0XHRhcmVhVG9NZXRhVXBkYXRlc01hcFtkcml2ZXJBcmVhXSA/Pz0gW107XG5cdFx0XHRcdGFyZWFUb01ldGFVcGRhdGVzTWFwW2RyaXZlckFyZWFdLnB1c2goe1xuXHRcdFx0XHRcdGtleTogZHJpdmVyS2V5LFxuXHRcdFx0XHRcdHByb3BlcnRpZXM6IGl0ZW0ubWV0YVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmVudHJpZXMoYXJlYVRvTWV0YVVwZGF0ZXNNYXApLm1hcChhc3luYyAoW3N0b3JhZ2VBcmVhLCB1cGRhdGVzXSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkcml2ZXIgPSBnZXREcml2ZXIoc3RvcmFnZUFyZWEpO1xuXHRcdFx0XHRjb25zdCBtZXRhS2V5cyA9IHVwZGF0ZXMubWFwKCh7IGtleSB9KSA9PiBnZXRNZXRhS2V5KGtleSkpO1xuXHRcdFx0XHRjb25zdCBleGlzdGluZ01ldGFzID0gYXdhaXQgZHJpdmVyLmdldEl0ZW1zKG1ldGFLZXlzKTtcblx0XHRcdFx0Y29uc3QgZXhpc3RpbmdNZXRhTWFwID0gT2JqZWN0LmZyb21FbnRyaWVzKGV4aXN0aW5nTWV0YXMubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gW2tleSwgZ2V0TWV0YVZhbHVlKHZhbHVlKV0pKTtcblx0XHRcdFx0Y29uc3QgbWV0YVVwZGF0ZXMgPSB1cGRhdGVzLm1hcCgoeyBrZXksIHByb3BlcnRpZXMgfSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG1ldGFLZXkgPSBnZXRNZXRhS2V5KGtleSk7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGtleTogbWV0YUtleSxcblx0XHRcdFx0XHRcdHZhbHVlOiBtZXJnZU1ldGEoZXhpc3RpbmdNZXRhTWFwW21ldGFLZXldID8/IHt9LCBwcm9wZXJ0aWVzKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbXMobWV0YVVwZGF0ZXMpO1xuXHRcdFx0fSkpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSXRlbTogYXN5bmMgKGtleSwgb3B0cykgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0YXdhaXQgcmVtb3ZlSXRlbShkcml2ZXIsIGRyaXZlcktleSwgb3B0cyk7XG5cdFx0fSxcblx0XHRyZW1vdmVJdGVtczogYXN5bmMgKGtleXMpID0+IHtcblx0XHRcdGNvbnN0IGFyZWFUb0tleXNNYXAgPSB7fTtcblx0XHRcdGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdGxldCBrZXlTdHI7XG5cdFx0XHRcdGxldCBvcHRzO1xuXHRcdFx0XHRpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikga2V5U3RyID0ga2V5O1xuXHRcdFx0XHRlbHNlIGlmIChcImdldFZhbHVlXCIgaW4ga2V5KSBrZXlTdHIgPSBrZXkua2V5O1xuXHRcdFx0XHRlbHNlIGlmIChcIml0ZW1cIiBpbiBrZXkpIHtcblx0XHRcdFx0XHRrZXlTdHIgPSBrZXkuaXRlbS5rZXk7XG5cdFx0XHRcdFx0b3B0cyA9IGtleS5vcHRpb25zO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGtleVN0ciA9IGtleS5rZXk7XG5cdFx0XHRcdFx0b3B0cyA9IGtleS5vcHRpb25zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHsgZHJpdmVyQXJlYSwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleVN0cik7XG5cdFx0XHRcdGFyZWFUb0tleXNNYXBbZHJpdmVyQXJlYV0gPz89IFtdO1xuXHRcdFx0XHRhcmVhVG9LZXlzTWFwW2RyaXZlckFyZWFdLnB1c2goZHJpdmVyS2V5KTtcblx0XHRcdFx0aWYgKG9wdHM/LnJlbW92ZU1ldGEpIGFyZWFUb0tleXNNYXBbZHJpdmVyQXJlYV0ucHVzaChnZXRNZXRhS2V5KGRyaXZlcktleSkpO1xuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChPYmplY3QuZW50cmllcyhhcmVhVG9LZXlzTWFwKS5tYXAoYXN5bmMgKFtkcml2ZXJBcmVhLCBrZXlzXSkgPT4ge1xuXHRcdFx0XHRhd2FpdCBnZXREcml2ZXIoZHJpdmVyQXJlYSkucmVtb3ZlSXRlbXMoa2V5cyk7XG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRjbGVhcjogYXN5bmMgKGJhc2UpID0+IHtcblx0XHRcdGF3YWl0IGdldERyaXZlcihiYXNlKS5jbGVhcigpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlTWV0YTogYXN5bmMgKGtleSwgcHJvcGVydGllcykgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0YXdhaXQgcmVtb3ZlTWV0YShkcml2ZXIsIGRyaXZlcktleSwgcHJvcGVydGllcyk7XG5cdFx0fSxcblx0XHRzbmFwc2hvdDogYXN5bmMgKGJhc2UsIG9wdHMpID0+IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREcml2ZXIoYmFzZSkuc25hcHNob3QoKTtcblx0XHRcdG9wdHM/LmV4Y2x1ZGVLZXlzPy5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdFx0ZGVsZXRlIGRhdGFba2V5XTtcblx0XHRcdFx0ZGVsZXRlIGRhdGFbZ2V0TWV0YUtleShrZXkpXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSxcblx0XHRyZXN0b3JlU25hcHNob3Q6IGFzeW5jIChiYXNlLCBkYXRhKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXREcml2ZXIoYmFzZSkucmVzdG9yZVNuYXBzaG90KGRhdGEpO1xuXHRcdH0sXG5cdFx0d2F0Y2g6IChrZXksIGNiKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRyZXR1cm4gd2F0Y2goZHJpdmVyLCBkcml2ZXJLZXksIGNiKTtcblx0XHR9LFxuXHRcdHVud2F0Y2goKSB7XG5cdFx0XHRPYmplY3QudmFsdWVzKGRyaXZlcnMpLmZvckVhY2goKGRyaXZlcikgPT4ge1xuXHRcdFx0XHRkcml2ZXIudW53YXRjaCgpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRkZWZpbmVJdGVtOiAoa2V5LCBvcHRzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRjb25zdCB7IHZlcnNpb246IHRhcmdldFZlcnNpb24gPSAxLCBtaWdyYXRpb25zID0ge30sIG9uTWlncmF0aW9uQ29tcGxldGUsIGRlYnVnID0gZmFsc2UgfSA9IG9wdHMgPz8ge307XG5cdFx0XHRpZiAodGFyZ2V0VmVyc2lvbiA8IDEpIHRocm93IEVycm9yKFwiU3RvcmFnZSBpdGVtIHZlcnNpb24gY2Fubm90IGJlIGxlc3MgdGhhbiAxLiBJbml0aWFsIHZlcnNpb25zIHNob3VsZCBiZSBzZXQgdG8gMSwgbm90IDAuXCIpO1xuXHRcdFx0bGV0IG5lZWRzVmVyc2lvblNldCA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgbWlncmF0ZSA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgZHJpdmVyTWV0YUtleSA9IGdldE1ldGFLZXkoZHJpdmVyS2V5KTtcblx0XHRcdFx0Y29uc3QgW3sgdmFsdWUgfSwgeyB2YWx1ZTogbWV0YSB9XSA9IGF3YWl0IGRyaXZlci5nZXRJdGVtcyhbZHJpdmVyS2V5LCBkcml2ZXJNZXRhS2V5XSk7XG5cdFx0XHRcdG5lZWRzVmVyc2lvblNldCA9IHZhbHVlID09IG51bGwgJiYgbWV0YT8udiA9PSBudWxsICYmICEhdGFyZ2V0VmVyc2lvbjtcblx0XHRcdFx0aWYgKHZhbHVlID09IG51bGwpIHJldHVybjtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZlcnNpb24gPSBtZXRhPy52ID8/IDE7XG5cdFx0XHRcdGlmIChjdXJyZW50VmVyc2lvbiA+IHRhcmdldFZlcnNpb24pIHRocm93IEVycm9yKGBWZXJzaW9uIGRvd25ncmFkZSBkZXRlY3RlZCAodiR7Y3VycmVudFZlcnNpb259IC0+IHYke3RhcmdldFZlcnNpb259KSBmb3IgXCIke2tleX1cImApO1xuXHRcdFx0XHRpZiAoY3VycmVudFZlcnNpb24gPT09IHRhcmdldFZlcnNpb24pIHJldHVybjtcblx0XHRcdFx0aWYgKGRlYnVnKSBjb25zb2xlLmRlYnVnKGBbQHd4dC1kZXYvc3RvcmFnZV0gUnVubmluZyBzdG9yYWdlIG1pZ3JhdGlvbiBmb3IgJHtrZXl9OiB2JHtjdXJyZW50VmVyc2lvbn0gLT4gdiR7dGFyZ2V0VmVyc2lvbn1gKTtcblx0XHRcdFx0Y29uc3QgbWlncmF0aW9uc1RvUnVuID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGFyZ2V0VmVyc2lvbiAtIGN1cnJlbnRWZXJzaW9uIH0sIChfLCBpKSA9PiBjdXJyZW50VmVyc2lvbiArIGkgKyAxKTtcblx0XHRcdFx0bGV0IG1pZ3JhdGVkVmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0Zm9yIChjb25zdCBtaWdyYXRlVG9WZXJzaW9uIG9mIG1pZ3JhdGlvbnNUb1J1bikgdHJ5IHtcblx0XHRcdFx0XHRtaWdyYXRlZFZhbHVlID0gYXdhaXQgbWlncmF0aW9ucz8uW21pZ3JhdGVUb1ZlcnNpb25dPy4obWlncmF0ZWRWYWx1ZSkgPz8gbWlncmF0ZWRWYWx1ZTtcblx0XHRcdFx0XHRpZiAoZGVidWcpIGNvbnNvbGUuZGVidWcoYFtAd3h0LWRldi9zdG9yYWdlXSBTdG9yYWdlIG1pZ3JhdGlvbiBwcm9jZXNzZWQgZm9yIHZlcnNpb246IHYke21pZ3JhdGVUb1ZlcnNpb259YCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdHRocm93IG5ldyBNaWdyYXRpb25FcnJvcihrZXksIG1pZ3JhdGVUb1ZlcnNpb24sIHsgY2F1c2U6IGVyciB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbXMoW3tcblx0XHRcdFx0XHRrZXk6IGRyaXZlcktleSxcblx0XHRcdFx0XHR2YWx1ZTogbWlncmF0ZWRWYWx1ZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0a2V5OiBkcml2ZXJNZXRhS2V5LFxuXHRcdFx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdFx0XHQuLi5tZXRhLFxuXHRcdFx0XHRcdFx0djogdGFyZ2V0VmVyc2lvblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fV0pO1xuXHRcdFx0XHRpZiAoZGVidWcpIGNvbnNvbGUuZGVidWcoYFtAd3h0LWRldi9zdG9yYWdlXSBTdG9yYWdlIG1pZ3JhdGlvbiBjb21wbGV0ZWQgZm9yICR7a2V5fSB2JHt0YXJnZXRWZXJzaW9ufWAsIHsgbWlncmF0ZWRWYWx1ZSB9KTtcblx0XHRcdFx0b25NaWdyYXRpb25Db21wbGV0ZT8uKG1pZ3JhdGVkVmFsdWUsIHRhcmdldFZlcnNpb24pO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IG1pZ3JhdGlvbnNEb25lID0gb3B0cz8ubWlncmF0aW9ucyA9PSBudWxsID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBtaWdyYXRlKCkuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBbQHd4dC1kZXYvc3RvcmFnZV0gTWlncmF0aW9uIGZhaWxlZCBmb3IgJHtrZXl9YCwgZXJyKTtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgaW5pdE11dGV4ID0gbmV3IE11dGV4KCk7XG5cdFx0XHRjb25zdCBnZXRGYWxsYmFjayA9ICgpID0+IG9wdHM/LmZhbGxiYWNrID8/IG9wdHM/LmRlZmF1bHRWYWx1ZSA/PyBudWxsO1xuXHRcdFx0Y29uc3QgZ2V0T3JJbml0VmFsdWUgPSAoKSA9PiBpbml0TXV0ZXgucnVuRXhjbHVzaXZlKGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBhd2FpdCBkcml2ZXIuZ2V0SXRlbShkcml2ZXJLZXkpO1xuXHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCB8fCBvcHRzPy5pbml0ID09IG51bGwpIHJldHVybiB2YWx1ZTtcblx0XHRcdFx0Y29uc3QgbmV3VmFsdWUgPSBhd2FpdCBvcHRzLmluaXQoKTtcblx0XHRcdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW0oZHJpdmVyS2V5LCBuZXdWYWx1ZSk7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PSBudWxsICYmIHRhcmdldFZlcnNpb24gPiAxKSBhd2FpdCBzZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCB7IHY6IHRhcmdldFZlcnNpb24gfSk7XG5cdFx0XHRcdHJldHVybiBuZXdWYWx1ZTtcblx0XHRcdH0pO1xuXHRcdFx0bWlncmF0aW9uc0RvbmUudGhlbihnZXRPckluaXRWYWx1ZSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRrZXksXG5cdFx0XHRcdGdldCBkZWZhdWx0VmFsdWUoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGdldEZhbGxiYWNrKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldCBmYWxsYmFjaygpIHtcblx0XHRcdFx0XHRyZXR1cm4gZ2V0RmFsbGJhY2soKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0VmFsdWU6IGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRhd2FpdCBtaWdyYXRpb25zRG9uZTtcblx0XHRcdFx0XHRpZiAob3B0cz8uaW5pdCkgcmV0dXJuIGF3YWl0IGdldE9ySW5pdFZhbHVlKCk7XG5cdFx0XHRcdFx0ZWxzZSByZXR1cm4gYXdhaXQgZ2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgb3B0cyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldE1ldGE6IGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRhd2FpdCBtaWdyYXRpb25zRG9uZTtcblx0XHRcdFx0XHRyZXR1cm4gYXdhaXQgZ2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldFZhbHVlOiBhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRhd2FpdCBtaWdyYXRpb25zRG9uZTtcblx0XHRcdFx0XHRpZiAobmVlZHNWZXJzaW9uU2V0KSB7XG5cdFx0XHRcdFx0XHRuZWVkc1ZlcnNpb25TZXQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFtzZXRJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCB2YWx1ZSksIHNldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHsgdjogdGFyZ2V0VmVyc2lvbiB9KV0pO1xuXHRcdFx0XHRcdH0gZWxzZSBhd2FpdCBzZXRJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldE1ldGE6IGFzeW5jIChwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0cmV0dXJuIGF3YWl0IHNldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVWYWx1ZTogYXN5bmMgKG9wdHMpID0+IHtcblx0XHRcdFx0XHRhd2FpdCBtaWdyYXRpb25zRG9uZTtcblx0XHRcdFx0XHRyZXR1cm4gYXdhaXQgcmVtb3ZlSXRlbShkcml2ZXIsIGRyaXZlcktleSwgb3B0cyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZU1ldGE6IGFzeW5jIChwcm9wZXJ0aWVzKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0cmV0dXJuIGF3YWl0IHJlbW92ZU1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR3YXRjaDogKGNiKSA9PiB3YXRjaChkcml2ZXIsIGRyaXZlcktleSwgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gY2IobmV3VmFsdWUgPz8gZ2V0RmFsbGJhY2soKSwgb2xkVmFsdWUgPz8gZ2V0RmFsbGJhY2soKSkpLFxuXHRcdFx0XHRtaWdyYXRlXG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURyaXZlcihzdG9yYWdlQXJlYSkge1xuXHRjb25zdCBnZXRTdG9yYWdlQXJlYSA9ICgpID0+IHtcblx0XHRpZiAoYnJvd3Nlci5ydW50aW1lID09IG51bGwpIHRocm93IEVycm9yKGAnd3h0L3N0b3JhZ2UnIG11c3QgYmUgbG9hZGVkIGluIGEgd2ViIGV4dGVuc2lvbiBlbnZpcm9ubWVudFxuXG4gLSBJZiB0aHJvd24gZHVyaW5nIGEgYnVpbGQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd3h0LWRldi93eHQvaXNzdWVzLzM3MVxuIC0gSWYgdGhyb3duIGR1cmluZyB0ZXN0cywgbW9jayAnd3h0L2Jyb3dzZXInIGNvcnJlY3RseS4gU2VlIGh0dHBzOi8vd3h0LmRldi9ndWlkZS9nby1mdXJ0aGVyL3Rlc3RpbmcuaHRtbFxuYCk7XG5cdFx0aWYgKGJyb3dzZXIuc3RvcmFnZSA9PSBudWxsKSB0aHJvdyBFcnJvcihcIllvdSBtdXN0IGFkZCB0aGUgJ3N0b3JhZ2UnIHBlcm1pc3Npb24gdG8geW91ciBtYW5pZmVzdCB0byB1c2UgJ3d4dC9zdG9yYWdlJ1wiKTtcblx0XHRjb25zdCBhcmVhID0gYnJvd3Nlci5zdG9yYWdlW3N0b3JhZ2VBcmVhXTtcblx0XHRpZiAoYXJlYSA9PSBudWxsKSB0aHJvdyBFcnJvcihgXCJicm93c2VyLnN0b3JhZ2UuJHtzdG9yYWdlQXJlYX1cIiBpcyB1bmRlZmluZWRgKTtcblx0XHRyZXR1cm4gYXJlYTtcblx0fTtcblx0Y29uc3Qgd2F0Y2hMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRyZXR1cm4ge1xuXHRcdGdldEl0ZW06IGFzeW5jIChrZXkpID0+IHtcblx0XHRcdHJldHVybiAoYXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5nZXQoa2V5KSlba2V5XTtcblx0XHR9LFxuXHRcdGdldEl0ZW1zOiBhc3luYyAoa2V5cykgPT4ge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5nZXQoa2V5cyk7XG5cdFx0XHRyZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4gKHtcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZTogcmVzdWx0W2tleV0gPz8gbnVsbFxuXHRcdFx0fSkpO1xuXHRcdH0sXG5cdFx0c2V0SXRlbTogYXN5bmMgKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdGlmICh2YWx1ZSA9PSBudWxsKSBhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnJlbW92ZShrZXkpO1xuXHRcdFx0ZWxzZSBhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnNldCh7IFtrZXldOiB2YWx1ZSB9KTtcblx0XHR9LFxuXHRcdHNldEl0ZW1zOiBhc3luYyAodmFsdWVzKSA9PiB7XG5cdFx0XHRjb25zdCBtYXAgPSB2YWx1ZXMucmVkdWNlKChtYXAsIHsga2V5LCB2YWx1ZSB9KSA9PiB7XG5cdFx0XHRcdG1hcFtrZXldID0gdmFsdWU7XG5cdFx0XHRcdHJldHVybiBtYXA7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XHRhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLnNldChtYXApO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSXRlbTogYXN5bmMgKGtleSkgPT4ge1xuXHRcdFx0YXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5yZW1vdmUoa2V5KTtcblx0XHR9LFxuXHRcdHJlbW92ZUl0ZW1zOiBhc3luYyAoa2V5cykgPT4ge1xuXHRcdFx0YXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5yZW1vdmUoa2V5cyk7XG5cdFx0fSxcblx0XHRjbGVhcjogYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5jbGVhcigpO1xuXHRcdH0sXG5cdFx0c25hcHNob3Q6IGFzeW5jICgpID0+IHtcblx0XHRcdHJldHVybiBhd2FpdCBnZXRTdG9yYWdlQXJlYSgpLmdldCgpO1xuXHRcdH0sXG5cdFx0cmVzdG9yZVNuYXBzaG90OiBhc3luYyAoZGF0YSkgPT4ge1xuXHRcdFx0YXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5zZXQoZGF0YSk7XG5cdFx0fSxcblx0XHR3YXRjaChrZXksIGNiKSB7XG5cdFx0XHRjb25zdCBsaXN0ZW5lciA9IChjaGFuZ2VzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGNoYW5nZSA9IGNoYW5nZXNba2V5XTtcblx0XHRcdFx0aWYgKGNoYW5nZSA9PSBudWxsIHx8IGRlcXVhbChjaGFuZ2UubmV3VmFsdWUsIGNoYW5nZS5vbGRWYWx1ZSkpIHJldHVybjtcblx0XHRcdFx0Y2IoY2hhbmdlLm5ld1ZhbHVlID8/IG51bGwsIGNoYW5nZS5vbGRWYWx1ZSA/PyBudWxsKTtcblx0XHRcdH07XG5cdFx0XHRnZXRTdG9yYWdlQXJlYSgpLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG5cdFx0XHR3YXRjaExpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0Z2V0U3RvcmFnZUFyZWEoKS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0XHR3YXRjaExpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdHVud2F0Y2goKSB7XG5cdFx0XHR3YXRjaExpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0XHRnZXRTdG9yYWdlQXJlYSgpLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG5cdFx0XHR9KTtcblx0XHRcdHdhdGNoTGlzdGVuZXJzLmNsZWFyKCk7XG5cdFx0fVxuXHR9O1xufVxudmFyIE1pZ3JhdGlvbkVycm9yID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKGtleSwgdmVyc2lvbiwgb3B0aW9ucykge1xuXHRcdHN1cGVyKGB2JHt2ZXJzaW9ufSBtaWdyYXRpb24gZmFpbGVkIGZvciBcIiR7a2V5fVwiYCwgb3B0aW9ucyk7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBNaWdyYXRpb25FcnJvciwgc3RvcmFnZSB9OyIsIi8qKlxuICogU3RvcmFnZSBRdW90YSBNYW5hZ2VyXG4gKlxuICogTWFuYWdlcyBzeW5jIHN0b3JhZ2UgdG8gc3RheSB3aXRoaW4gRmlyZWZveCdzIH4xMDBLQiBsaW1pdC5cbiAqIENocm9tZS9FZGdlIGhhdmUgbXVjaCBoaWdoZXIgbGltaXRzICh+MU1CL2l0ZW0sIDEwTUIgdG90YWwpIHNvIG5vIHRyaW1taW5nIG5lZWRlZC5cbiAqIFRyaW1zIGRhdGEgYXV0b21hdGljYWxseSBiZWZvcmUgcXVvdGEgaXMgZXhjZWVkZWQgb24gRmlyZWZveCBvbmx5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgY2hlY2tTdG9yZVF1b3RhIH0gZnJvbSAnQGRyYWNvbi93eHQtc2hhcmVkL3N0b3JhZ2UnO1xuICpcbiAqIC8vIEJlZm9yZSBzZXR0aW5nIGRhdGFcbiAqIGNvbnN0IHsgbmVlZHNUcmltLCBkYXRhIH0gPSBhd2FpdCBjaGVja1N0b3JlUXVvdGEoJ3Rhc2tzJywgY3VycmVudFRhc2tzLCBuZXdUYXNrcyk7XG4gKiBpZiAobmVlZHNUcmltKSB7XG4gKiAgIGNvbnNvbGUubG9nKCdEYXRhIHdhcyB0cmltbWVkIGZvciBGaXJlZm94IHF1b3RhJyk7XG4gKiB9XG4gKiBhd2FpdCBzeW5jU3RvcmUuc2V0VmFsdWUoZGF0YSk7XG4gKiBgYGBcbiAqL1xuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbi8vIEZpcmVmb3ggc3luYyBsaW1pdHMgKENocm9tZS9FZGdlIGhhdmUgfjFNQi9pdGVtLCB+MTBNQiB0b3RhbClcbmV4cG9ydCBjb25zdCBGSVJFRk9YX1NZTkNfUVVPVEFfQllURVMgPSAxMDAgKiAxMDI0OyAvLyB+MTAwS0JcbmV4cG9ydCBjb25zdCBGSVJFRk9YX0lURU1fUVVPVEFfQllURVMgPSA4ICogMTAyNDsgLy8gfjhLQiBwZXIgaXRlbVxuY29uc3QgVEFSR0VUX1VTQUdFX1JBVElPID0gMC44OyAvLyBUcmltIHdoZW4gYXQgODAlIGNhcGFjaXR5XG5sZXQgYnJvd3NlcktpbmQgPSAndW5rbm93bic7XG4vKipcbiAqIERldGVjdCBicm93c2VyIHR5cGUgLSBjYWNoZWQgZm9yIHBlcmZvcm1hbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyS2luZCgpIHtcbiAgICBpZiAoYnJvd3NlcktpbmQgIT09ICd1bmtub3duJylcbiAgICAgICAgcmV0dXJuIGJyb3dzZXJLaW5kO1xuICAgIC8vIENocm9taXVtIGJyb3dzZXJzIGluY2x1ZGU6IENocm9tZSwgRWRnZSwgQnJhdmUsIE9wZXJhLCBldGMuXG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHVhLmluY2x1ZGVzKCdmaXJlZm94JykpIHtcbiAgICAgICAgYnJvd3NlcktpbmQgPSAnZmlyZWZveCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVhLmluY2x1ZGVzKCdjaHJvbWUnKSB8fCB1YS5pbmNsdWRlcygnZWRnJykpIHtcbiAgICAgICAgYnJvd3NlcktpbmQgPSAnY2hyb21pdW0nO1xuICAgIH1cbiAgICByZXR1cm4gYnJvd3NlcktpbmQ7XG59XG4vKipcbiAqIENoZWNrIGlmIGN1cnJlbnQgYnJvd3NlciBoYXMgc3RyaWN0IHN5bmMgbGltaXRzIChGaXJlZm94IG9ubHkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNTdHJpY3RRdW90YSgpIHtcbiAgICByZXR1cm4gZ2V0QnJvd3NlcktpbmQoKSA9PT0gJ2ZpcmVmb3gnO1xufVxuLyoqXG4gKiBHZXQgc3luYyBzdG9yYWdlIHF1b3RhIHN0YXR1c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVvdGFTdGF0dXMoKSB7XG4gICAgLy8gT24gQ2hyb21pdW0sIG5vIHF1b3RhIG1hbmFnZW1lbnQgbmVlZGVkXG4gICAgaWYgKCFoYXNTdHJpY3RRdW90YSgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VkOiAwLFxuICAgICAgICAgICAgbGltaXQ6IEluZmluaXR5LFxuICAgICAgICAgICAgcGVyY2VudFVzZWQ6IDAsXG4gICAgICAgICAgICBpc05lYXJMaW1pdDogZmFsc2UsXG4gICAgICAgICAgICBicm93c2VyOiBnZXRCcm93c2VyS2luZCgpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGwgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXRCeXRlc0luVXNlKCk7XG4gICAgICAgIGNvbnN0IGxpbWl0ID0gRklSRUZPWF9TWU5DX1FVT1RBX0JZVEVTO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlZDogYWxsLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBwZXJjZW50VXNlZDogKGFsbCAvIGxpbWl0KSAqIDEwMCxcbiAgICAgICAgICAgIGlzTmVhckxpbWl0OiBhbGwgPiBsaW1pdCAqIFRBUkdFVF9VU0FHRV9SQVRJTyxcbiAgICAgICAgICAgIGJyb3dzZXI6ICdmaXJlZm94JyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlZDogMCxcbiAgICAgICAgICAgIGxpbWl0OiBGSVJFRk9YX1NZTkNfUVVPVEFfQllURVMsXG4gICAgICAgICAgICBwZXJjZW50VXNlZDogMCxcbiAgICAgICAgICAgIGlzTmVhckxpbWl0OiBmYWxzZSxcbiAgICAgICAgICAgIGJyb3dzZXI6ICdmaXJlZm94JyxcbiAgICAgICAgfTtcbiAgICB9XG59XG4vKipcbiAqIEVzdGltYXRlIHRoZSBzaXplIG9mIGFuIG9iamVjdCBpbiBKU09OIGJ5dGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNpemUob2JqKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShKU09OLnN0cmluZ2lmeShvYmopKS5sZW5ndGg7XG59XG4vKipcbiAqIFRyaW0gYW4gYXJyYXkgdG8gZml0IHdpdGhpbiBGaXJlZm94IHF1b3RhIGxpbWl0c1xuICpcbiAqIEBwYXJhbSBhcnIgLSBBcnJheSB0byB0cmltXG4gKiBAcGFyYW0gbWF4SXRlbXMgLSBNYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0byBrZWVwXG4gKiBAcGFyYW0gaXRlbU1heEJ5dGVzIC0gTWF4aW11bSBieXRlcyBwZXIgaXRlbSAoZGVmYXVsdDogOEtCIGZvciBGaXJlZm94KVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbUFycmF5VG9TaXplKGFyciwgbWF4SXRlbXMsIGl0ZW1NYXhCeXRlcyA9IEZJUkVGT1hfSVRFTV9RVU9UQV9CWVRFUykge1xuICAgIGxldCB0cmltbWVkID0gYXJyLnNsaWNlKDAsIG1heEl0ZW1zKTtcbiAgICAvLyBJZiBzdGlsbCB0b28gYmlnLCB0cnVuY2F0ZSBlYWNoIGl0ZW1cbiAgICBjb25zdCBjdXJyZW50U2l6ZSA9IGVzdGltYXRlU2l6ZSh0cmltbWVkKTtcbiAgICBjb25zdCB0YXJnZXRTaXplID0gaXRlbU1heEJ5dGVzICogdHJpbW1lZC5sZW5ndGg7XG4gICAgaWYgKGN1cnJlbnRTaXplID4gdGFyZ2V0U2l6ZSkge1xuICAgICAgICB0cmltbWVkID0gdHJpbW1lZC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtU3RyID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgICAgICAgICBpZiAoaXRlbVN0ci5sZW5ndGggPiBpdGVtTWF4Qnl0ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBUcnVuY2F0ZSBzdHJpbmcgZmllbGRzXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShpdGVtU3RyKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyc2VkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRba2V5XSA9PT0gJ3N0cmluZycgJiYgcGFyc2VkW2tleV0ubGVuZ3RoID4gaXRlbU1heEJ5dGVzIC8gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldLnN1YnN0cmluZygwLCBNYXRoLmZsb29yKGl0ZW1NYXhCeXRlcyAvIDEwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBwYXJzaW5nIGZhaWxzLCBqdXN0IHRydW5jYXRlIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1TdHIuc3Vic3RyaW5nKDAsIGl0ZW1NYXhCeXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJpbW1lZDtcbn1cbi8qKlxuICogQ2hlY2sgaWYgYSBzdG9yZSBuZWVkcyB0cmltbWluZyBiZWZvcmUgd3JpdGluZ1xuICogT24gQ2hyb21lL0VkZ2UsIHRoaXMgaXMgYSBuby1vcCAtIHJldHVybnMgZGF0YSB1bmNoYW5nZWRcbiAqIE9uIEZpcmVmb3gsIHRyaW1zIGlmIGFwcHJvYWNoaW5nIHF1b3RhIGxpbWl0c1xuICpcbiAqIEBwYXJhbSBzdG9yZU5hbWUgLSBOYW1lIG9mIHRoZSBzdG9yZSAoZm9yIGxvZ2dpbmcpXG4gKiBAcGFyYW0gY3VycmVudERhdGEgLSBDdXJyZW50IHN0b3JlZCBkYXRhXG4gKiBAcGFyYW0gbmV3RGF0YSAtIE5ldyBkYXRhIHRvIHdyaXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFF1b3RhIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrU3RvcmVRdW90YShzdG9yZU5hbWUsIGN1cnJlbnREYXRhLCBuZXdEYXRhLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBnZXRRdW90YVN0YXR1cygpO1xuICAgIC8vIE9uIENocm9taXVtLCBubyBxdW90YSBtYW5hZ2VtZW50IG5lZWRlZCAtIHJldHVybiBkYXRhIHVuY2hhbmdlZFxuICAgIGlmIChzdGF0dXMuYnJvd3NlciAhPT0gJ2ZpcmVmb3gnKSB7XG4gICAgICAgIHJldHVybiB7IG5lZWRzVHJpbTogZmFsc2UsIGRhdGE6IG5ld0RhdGEsIHN0YXR1cyB9O1xuICAgIH1cbiAgICAvLyBJZiB3ZSdyZSBub3QgbmVhciB0aGUgbGltaXQsIG5vIHRyaW1taW5nIG5lZWRlZFxuICAgIGlmICghc3RhdHVzLmlzTmVhckxpbWl0KSB7XG4gICAgICAgIHJldHVybiB7IG5lZWRzVHJpbTogZmFsc2UsIGRhdGE6IG5ld0RhdGEsIHN0YXR1cyB9O1xuICAgIH1cbiAgICBjb25zdCB7IG1heEl0ZW1zID0gNTAsIG1heEl0ZW1TaXplQnl0ZXMgPSBGSVJFRk9YX0lURU1fUVVPVEFfQllURVMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbmV3U2l6ZSA9IGVzdGltYXRlU2l6ZShuZXdEYXRhKTtcbiAgICAvLyBJZiBhZGRpbmcgbmV3IGRhdGEgd291bGQgZXhjZWVkIHF1b3RhLCB0cmltIHByb2FjdGl2ZWx5XG4gICAgaWYgKHN0YXR1cy51c2VkICsgbmV3U2l6ZSA+IEZJUkVGT1hfU1lOQ19RVU9UQV9CWVRFUyAqIFRBUkdFVF9VU0FHRV9SQVRJTykge1xuICAgICAgICBjb25zb2xlLmxvZyhgW1F1b3RhTWFuYWdlcl0gUHJvYWN0aXZlIHRyaW0gZm9yICR7c3RvcmVOYW1lfTogY3VycmVudD0ke3N0YXR1cy51c2VkfUIsIGFkZGluZz0ke25ld1NpemV9QmApO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdEYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgdHJpbW1lZCA9IHRyaW1BcnJheVRvU2l6ZShuZXdEYXRhLCBtYXhJdGVtcywgbWF4SXRlbVNpemVCeXRlcyk7XG4gICAgICAgICAgICByZXR1cm4geyBuZWVkc1RyaW06IHRydWUsIGRhdGE6IHRyaW1tZWQsIHN0YXR1cyB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IG5lZWRzVHJpbTogZmFsc2UsIGRhdGE6IG5ld0RhdGEsIHN0YXR1cyB9O1xufVxuLyoqXG4gKiBFbnN1cmUgYSBzeW5jIHN0b3JlIHN0YXlzIHdpdGhpbiBGaXJlZm94IHF1b3RhXG4gKiBPbiBDaHJvbWUvRWRnZSwgdGhpcyBpcyBhIG5vLW9wXG4gKlxuICogQHBhcmFtIHN0b3JlTmFtZSAtIE5hbWUgb2YgdGhlIHN0b3JlIChmb3IgbG9nZ2luZylcbiAqIEBwYXJhbSBzdG9yZSAtIFdYVCBzdG9yYWdlIHN0b3JlIHdpdGggZ2V0VmFsdWUvc2V0VmFsdWUgbWV0aG9kc1xuICogQHBhcmFtIG9wdGlvbnMgLSBRdW90YSBvcHRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBlbnN1cmVTeW5jUXVvdGEgfSBmcm9tICdAZHJhY29uL3d4dC1zaGFyZWQvc3RvcmFnZSc7XG4gKiBpbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnd3h0L3V0aWxzL3N0b3JhZ2UnO1xuICpcbiAqIGNvbnN0IG15U3luY1N0b3JlID0gc3RvcmFnZS5kZWZpbmVJdGVtPE15RGF0YT4oJ3N5bmM6bXlEYXRhJywgeyBmYWxsYmFjazogW10gfSk7XG4gKlxuICogLy8gQWZ0ZXIgYWRkaW5nIGl0ZW1zXG4gKiBhd2FpdCBlbnN1cmVTeW5jUXVvdGEoJ3N5bmM6bXlEYXRhJywgbXlTeW5jU3RvcmUsIHsgbWF4SXRlbXM6IDEwMCB9KTtcbiAqIGBgYFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlU3luY1F1b3RhKHN0b3JlTmFtZSwgc3RvcmUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGdldFF1b3RhU3RhdHVzKCk7XG4gICAgLy8gT24gQ2hyb21pdW0sIG5vIHF1b3RhIG1hbmFnZW1lbnQgbmVlZGVkXG4gICAgaWYgKHN0YXR1cy5icm93c2VyICE9PSAnZmlyZWZveCcpIHtcbiAgICAgICAgcmV0dXJuIHsgd2FzVHJpbW1lZDogZmFsc2UsIHN0YXR1cyB9O1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc3RvcmUuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCB7IG5lZWRzVHJpbSwgZGF0YTogdHJpbW1lZERhdGEgfSA9IGF3YWl0IGNoZWNrU3RvcmVRdW90YShzdG9yZU5hbWUsIGRhdGEsIGRhdGEsIG9wdGlvbnMpO1xuICAgIGlmIChuZWVkc1RyaW0gJiYgdHJpbW1lZERhdGEgIT09IGRhdGEpIHtcbiAgICAgICAgYXdhaXQgc3RvcmUuc2V0VmFsdWUodHJpbW1lZERhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhgW1F1b3RhTWFuYWdlcl0gVHJpbW1lZCAke3N0b3JlTmFtZX0gdG8gZml0IEZpcmVmb3ggc3luYyBxdW90YWApO1xuICAgICAgICByZXR1cm4geyB3YXNUcmltbWVkOiB0cnVlLCBzdGF0dXMgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgd2FzVHJpbW1lZDogZmFsc2UsIHN0YXR1cyB9O1xufVxuLyoqXG4gKiBUcmltIG9sZCBpdGVtcyBmcm9tIGEgdGFzay9hY3Rpdml0eSBsaXN0IHRvIHN0YXkgd2l0aGluIEZpcmVmb3ggcXVvdGFcbiAqIEtlZXBzIG1vc3QgcmVjZW50IGl0ZW1zLCByZW1vdmVzIG9sZGVzdCBvbmVzXG4gKlxuICogQHBhcmFtIGl0ZW1zIC0gQXJyYXkgb2YgaXRlbXMgd2l0aCBhIHRpbWVzdGFtcCBvciBzaW1pbGFyIG9yZGVyaW5nIGZpZWxkXG4gKiBAcGFyYW0gbWF4SXRlbXMgLSBNYXhpbXVtIGl0ZW1zIHRvIGtlZXBcbiAqIEBwYXJhbSB0aW1lc3RhbXBGaWVsZCAtIEZpZWxkIG5hbWUgdG8gdXNlIGZvciBzb3J0aW5nIChkZWZhdWx0OiAndGltZXN0YW1wJylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW1PbGRJdGVtcyhpdGVtcywgbWF4SXRlbXMsIHRpbWVzdGFtcEZpZWxkID0gJ3RpbWVzdGFtcCcpIHtcbiAgICAvLyBTb3J0IGJ5IHRpbWVzdGFtcCBkZXNjZW5kaW5nIChuZXdlc3QgZmlyc3QpLCB0aGVuIHNsaWNlXG4gICAgcmV0dXJuIFsuLi5pdGVtc11cbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYVZhbCA9IGFbdGltZXN0YW1wRmllbGRdO1xuICAgICAgICBjb25zdCBiVmFsID0gYlt0aW1lc3RhbXBGaWVsZF07XG4gICAgICAgIGlmICh0eXBlb2YgYVZhbCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGJWYWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gYlZhbCAtIGFWYWw7IC8vIERlc2NlbmRpbmdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KVxuICAgICAgICAuc2xpY2UoMCwgbWF4SXRlbXMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVvdGEuanMubWFwIiwiLyoqXG4gKiBFeHRlbnNpb24gdXRpbGl0aWVzIGFuZCBmYWN0b3J5XG4gKlxuICogUHJvdmlkZXM6XG4gKiAtIGNyZWF0ZUV4dGVuc2lvbigpIC0gQ29tcGxldGUgc2V0dXAgaW4gb25lIGNhbGxcbiAqIC0gQ29udGV4dCBkZXRlY3Rpb24gaGVscGVyc1xuICogLSBUYWIgbWFuYWdlbWVudFxuICogLSBNZXNzYWdlIHBhc3NpbmcgdXRpbGl0aWVzXG4gKi9cbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBjcmVhdGVDb25maWcgfSBmcm9tICcuLi9jb25maWcvaW5kZXguanMnO1xuaW1wb3J0IHsgY3JlYXRlQXBpQ2xpZW50LCB9IGZyb20gJy4uL2FwaS9pbmRleC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVBdXRoRmxvdyB9IGZyb20gJy4uL2F1dGgvaW5kZXguanMnO1xuaW1wb3J0IHsgZGVmYXVsdEF1dGhTdG9yZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5kZXguanMnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJ3d4dC91dGlscy9zdG9yYWdlJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFeHRlbnNpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IHsgYXBwTmFtZSwgYXBwSWQsIGVudiwgZGVidWcsIHN0b3JhZ2VLZXkgPSAnc3luYzphdXRoJyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBjb25maWcgPSBjcmVhdGVDb25maWcoeyBhcHBOYW1lLCBlbnYsIGRlYnVnIH0pO1xuICAgIGNvbnN0IGF1dGhTdG9yZSA9IHN0b3JhZ2UuZGVmaW5lSXRlbShzdG9yYWdlS2V5LCB7XG4gICAgICAgIGZhbGxiYWNrOiBkZWZhdWx0QXV0aFN0b3JlLFxuICAgIH0pO1xuICAgIGNvbnN0IGFwaUNsaWVudCA9IGNyZWF0ZUFwaUNsaWVudCh7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZ2V0QXV0aDogKCkgPT4gYXV0aFN0b3JlLmdldFZhbHVlKCksXG4gICAgICAgIHNldEF1dGg6IChhdXRoKSA9PiBhdXRoU3RvcmUuc2V0VmFsdWUoYXV0aCksXG4gICAgICAgIG9uQXV0aEVycm9yOiAoKSA9PiBhdXRoRmxvdy5vcGVuTG9naW4oKSxcbiAgICB9KTtcbiAgICBjb25zdCBhdXRoRmxvdyA9IGNyZWF0ZUF1dGhGbG93KHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBhcHBJZCxcbiAgICAgICAgZmxvdzogJ2VtYWlsJywgLy8gRGVmYXVsdCB0byBlbWFpbCBtYWdpYyBsaW5rXG4gICAgICAgIGdldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRBdXRoOiAoYXV0aCkgPT4gYXV0aFN0b3JlLnNldFZhbHVlKGF1dGgpLFxuICAgICAgICByZXNldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5zZXRWYWx1ZShkZWZhdWx0QXV0aFN0b3JlKSxcbiAgICB9KTtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBdXRoU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBhd2FpdCBhdXRoU3RvcmUuZ2V0VmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogISFhdXRoLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgdXNlcjogYXV0aC51c2VyXG4gICAgICAgICAgICAgICAgPyB7IGVtYWlsOiBhdXRoLnVzZXIuZW1haWwsIG5hbWU6IGF1dGgudXNlci5uYW1lIHx8ICdVc2VyJywgcGljdHVyZTogYXV0aC51c2VyLnBpY3R1cmUgfVxuICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIHRva2VuOiBhdXRoLmFjY2Vzc1Rva2VuIHx8IG51bGwsXG4gICAgICAgICAgICBxdW90YTogbnVsbCwgLy8gRmV0Y2hlZCBzZXBhcmF0ZWx5IHZpYSBnZXRRdW90YSgpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBnZXRBdXRoU3RhdGUoKSkuaXNBdXRoZW50aWNhdGVkO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGFwaUNsaWVudCxcbiAgICAgICAgYXV0aEZsb3csXG4gICAgICAgIGF1dGhTdG9yZSxcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgYXBwSWQsXG4gICAgICAgIGdldEF1dGhTdGF0ZSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICBvcGVuTG9naW46IGF1dGhGbG93Lm9wZW5Mb2dpbixcbiAgICAgICAgb3BlbkRhc2hib2FyZDogYXV0aEZsb3cub3BlbkRhc2hib2FyZCxcbiAgICAgICAgbG9nb3V0OiBhdXRoRmxvdy5sb2dvdXQsXG4gICAgICAgIGdldFVzZXI6ICgpID0+IGFwaUNsaWVudC5nZXRVc2VyKCksXG4gICAgICAgIGFkZFF1b3RhOiAoYW1vdW50KSA9PiBhcGlDbGllbnQuYWRkUXVvdGEoYW1vdW50ID8/IDEwMCksXG4gICAgICAgIGdldFF1b3RhOiAoKSA9PiBhcGlDbGllbnQuZ2V0UXVvdGEoKSxcbiAgICAgICAgc3Vic2NyaWJlOiAoYW1vdW50KSA9PiBhcGlDbGllbnQuYWRkUXVvdGEoYW1vdW50ID8/IDEwMCksXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYXNpY0V4dGVuc2lvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogb3B0aW9ucy5hcHBOYW1lLFxuICAgICAgICBhcHBJZDogb3B0aW9ucy5hcHBJZCxcbiAgICAgICAgZ2V0RXh0ZW5zaW9uT3JpZ2luLFxuICAgICAgICBnZXRFeHRlbnNpb25VcmwsXG4gICAgICAgIG9wZW5Jbk5ld1RhYixcbiAgICAgICAgZ2V0QWN0aXZlVGFiLFxuICAgICAgICBzZW5kVG9CYWNrZ3JvdW5kLFxuICAgICAgICBoYXNQZXJtaXNzaW9uLFxuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbixcbiAgICB9O1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGV4dCBEZXRlY3Rpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbnRlbnRTY3JpcHQoKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonIHx8IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0V4dGVuc2lvbkNvbnRleHQoKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdjaHJvbWUtZXh0ZW5zaW9uOicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQmFja2dyb3VuZFNjcmlwdCgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICh0eXBlb2YgZ2xvYmFsVGhpcy5TZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBzZWxmIGluc3RhbmNlb2YgZ2xvYmFsVGhpcy5TZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpKTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuc2lvbiBVUkwgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVuc2lvbk9yaWdpbigpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnJykucmVwbGFjZSgvXFwvJC8sICcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlbnNpb25VcmwocGF0aCkge1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKHBhdGgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXV0aENhbGxiYWNrVXJsKHVybCkge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXMoYnJvd3Nlci5ydW50aW1lLmlkKSAmJiB1cmwuaW5jbHVkZXMoJ2F1dGgtY2FsbGJhY2snKTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRhYiBNYW5hZ2VtZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3BlbkluTmV3VGFiKHVybCkge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVRhYigpIHtcbiAgICBjb25zdCBbdGFiXSA9IGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICByZXR1cm4gdGFiO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9BY3RpdmVUYWIobWVzc2FnZSkge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEFjdGl2ZVRhYigpO1xuICAgIGlmICh0YWI/LmlkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVJbkFjdGl2ZVRhYihmdW5jKSB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgZ2V0QWN0aXZlVGFiKCk7XG4gICAgaWYgKCF0YWI/LmlkKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBicm93c2VyLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiLmlkIH0sXG4gICAgICAgICAgICBmdW5jLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF0/LnJlc3VsdDtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRlbnQgU2NyaXB0IEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kVG9CYWNrZ3JvdW5kKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUGVybWlzc2lvbiBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9ucyA9IFtdKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIucGVybWlzc2lvbnMuY29udGFpbnMoeyBwZXJtaXNzaW9ucyB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9ucyA9IFtdKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIucGVybWlzc2lvbnMucmVxdWVzdCh7IHBlcm1pc3Npb25zIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IHZhciB1dGlsO1xuKGZ1bmN0aW9uICh1dGlsKSB7XG4gICAgdXRpbC5hc3NlcnRFcXVhbCA9IChfKSA9PiB7IH07XG4gICAgZnVuY3Rpb24gYXNzZXJ0SXMoX2FyZykgeyB9XG4gICAgdXRpbC5hc3NlcnRJcyA9IGFzc2VydElzO1xuICAgIGZ1bmN0aW9uIGFzc2VydE5ldmVyKF94KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICB1dGlsLmFzc2VydE5ldmVyID0gYXNzZXJ0TmV2ZXI7XG4gICAgdXRpbC5hcnJheVRvRW51bSA9IChpdGVtcykgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICBvYmpbaXRlbV0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICB1dGlsLmdldFZhbGlkRW51bVZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRLZXlzID0gdXRpbC5vYmplY3RLZXlzKG9iaikuZmlsdGVyKChrKSA9PiB0eXBlb2Ygb2JqW29ialtrXV0gIT09IFwibnVtYmVyXCIpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGsgb2YgdmFsaWRLZXlzKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RWYWx1ZXMoZmlsdGVyZWQpO1xuICAgIH07XG4gICAgdXRpbC5vYmplY3RWYWx1ZXMgPSAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdEtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpbZV07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdXRpbC5vYmplY3RLZXlzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSBcImZ1bmN0aW9uXCIgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYW4vYmFuXG4gICAgICAgID8gKG9iaikgPT4gT2JqZWN0LmtleXMob2JqKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgfTtcbiAgICB1dGlsLmZpbmQgPSAoYXJyLCBjaGVja2VyKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2VyKGl0ZW0pKVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICB1dGlsLmlzSW50ZWdlciA9IHR5cGVvZiBOdW1iZXIuaXNJbnRlZ2VyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyAodmFsKSA9PiBOdW1iZXIuaXNJbnRlZ2VyKHZhbCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYW4vYmFuXG4gICAgICAgIDogKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsKSAmJiBNYXRoLmZsb29yKHZhbCkgPT09IHZhbDtcbiAgICBmdW5jdGlvbiBqb2luVmFsdWVzKGFycmF5LCBzZXBhcmF0b3IgPSBcIiB8IFwiKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoKHZhbCkgPT4gKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyBgJyR7dmFsfSdgIDogdmFsKSkuam9pbihzZXBhcmF0b3IpO1xuICAgIH1cbiAgICB1dGlsLmpvaW5WYWx1ZXMgPSBqb2luVmFsdWVzO1xuICAgIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyID0gKF8sIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xufSkodXRpbCB8fCAodXRpbCA9IHt9KSk7XG5leHBvcnQgdmFyIG9iamVjdFV0aWw7XG4oZnVuY3Rpb24gKG9iamVjdFV0aWwpIHtcbiAgICBvYmplY3RVdGlsLm1lcmdlU2hhcGVzID0gKGZpcnN0LCBzZWNvbmQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmZpcnN0LFxuICAgICAgICAgICAgLi4uc2Vjb25kLCAvLyBzZWNvbmQgb3ZlcndyaXRlcyBmaXJzdFxuICAgICAgICB9O1xuICAgIH07XG59KShvYmplY3RVdGlsIHx8IChvYmplY3RVdGlsID0ge30pKTtcbmV4cG9ydCBjb25zdCBab2RQYXJzZWRUeXBlID0gdXRpbC5hcnJheVRvRW51bShbXG4gICAgXCJzdHJpbmdcIixcbiAgICBcIm5hblwiLFxuICAgIFwibnVtYmVyXCIsXG4gICAgXCJpbnRlZ2VyXCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwiYmlnaW50XCIsXG4gICAgXCJzeW1ib2xcIixcbiAgICBcImZ1bmN0aW9uXCIsXG4gICAgXCJ1bmRlZmluZWRcIixcbiAgICBcIm51bGxcIixcbiAgICBcImFycmF5XCIsXG4gICAgXCJvYmplY3RcIixcbiAgICBcInVua25vd25cIixcbiAgICBcInByb21pc2VcIixcbiAgICBcInZvaWRcIixcbiAgICBcIm5ldmVyXCIsXG4gICAgXCJtYXBcIixcbiAgICBcInNldFwiLFxuXSk7XG5leHBvcnQgY29uc3QgZ2V0UGFyc2VkVHlwZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgdCA9IHR5cGVvZiBkYXRhO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQ7XG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnN0cmluZztcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5pc05hTihkYXRhKSA/IFpvZFBhcnNlZFR5cGUubmFuIDogWm9kUGFyc2VkVHlwZS5udW1iZXI7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5ib29sZWFuO1xuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uO1xuICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5iaWdpbnQ7XG4gICAgICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnN5bWJvbDtcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5hcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnRoZW4gJiYgdHlwZW9mIGRhdGEudGhlbiA9PT0gXCJmdW5jdGlvblwiICYmIGRhdGEuY2F0Y2ggJiYgdHlwZW9mIGRhdGEuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgRGF0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5vYmplY3Q7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS51bmtub3duO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyB1dGlsIH0gZnJvbSBcIi4vaGVscGVycy91dGlsLmpzXCI7XG5leHBvcnQgY29uc3QgWm9kSXNzdWVDb2RlID0gdXRpbC5hcnJheVRvRW51bShbXG4gICAgXCJpbnZhbGlkX3R5cGVcIixcbiAgICBcImludmFsaWRfbGl0ZXJhbFwiLFxuICAgIFwiY3VzdG9tXCIsXG4gICAgXCJpbnZhbGlkX3VuaW9uXCIsXG4gICAgXCJpbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3JcIixcbiAgICBcImludmFsaWRfZW51bV92YWx1ZVwiLFxuICAgIFwidW5yZWNvZ25pemVkX2tleXNcIixcbiAgICBcImludmFsaWRfYXJndW1lbnRzXCIsXG4gICAgXCJpbnZhbGlkX3JldHVybl90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2RhdGVcIixcbiAgICBcImludmFsaWRfc3RyaW5nXCIsXG4gICAgXCJ0b29fc21hbGxcIixcbiAgICBcInRvb19iaWdcIixcbiAgICBcImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzXCIsXG4gICAgXCJub3RfbXVsdGlwbGVfb2ZcIixcbiAgICBcIm5vdF9maW5pdGVcIixcbl0pO1xuZXhwb3J0IGNvbnN0IHF1b3RlbGVzc0pzb24gPSAob2JqKSA9PiB7XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMik7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvXCIoW15cIl0rKVwiOi9nLCBcIiQxOlwiKTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZ2V0IGVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVzO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZSA9IChzdWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCBzdWJdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZElzc3VlcyA9IChzdWJzID0gW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCAuLi5zdWJzXTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBhY3R1YWxQcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IGFjdHVhbFByb3RvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWm9kRXJyb3JcIjtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBpc3N1ZXM7XG4gICAgfVxuICAgIGZvcm1hdChfbWFwcGVyKSB7XG4gICAgICAgIGNvbnN0IG1hcHBlciA9IF9tYXBwZXIgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpc3N1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc3N1ZS5tZXNzYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgIGNvbnN0IHByb2Nlc3NFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpc3N1ZSBvZiBlcnJvci5pc3N1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3VuaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWUudW5pb25FcnJvcnMubWFwKHByb2Nlc3NFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcihpc3N1ZS5yZXR1cm5UeXBlRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfYXJndW1lbnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLmFyZ3VtZW50c0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRFcnJvcnMuX2Vycm9ycy5wdXNoKG1hcHBlcihpc3N1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnIgPSBmaWVsZEVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IGlzc3VlLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGlzc3VlLnBhdGhbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtaW5hbCA9IGkgPT09IGlzc3VlLnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGVybWluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgZXJyb3JBcnJheTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBlcnJvckFycmF5Ll9lcnJvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgZXJyb3JBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXS5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyID0gY3VycltlbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByb2Nlc3NFcnJvcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkRXJyb3JzO1xuICAgIH1cbiAgICBzdGF0aWMgYXNzZXJ0KHZhbHVlKSB7XG4gICAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgWm9kRXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBhIFpvZEVycm9yOiAke3ZhbHVlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNzdWVzLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmbGF0dGVuKG1hcHBlciA9IChpc3N1ZSkgPT4gaXNzdWUubWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHt9O1xuICAgICAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuaXNzdWVzKSB7XG4gICAgICAgICAgICBpZiAoc3ViLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0RWwgPSBzdWIucGF0aFswXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tmaXJzdEVsXSA9IGZpZWxkRXJyb3JzW2ZpcnN0RWxdIHx8IFtdO1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW2ZpcnN0RWxdLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybUVycm9ycy5wdXNoKG1hcHBlcihzdWIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBmb3JtRXJyb3JzLCBmaWVsZEVycm9ycyB9O1xuICAgIH1cbiAgICBnZXQgZm9ybUVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhdHRlbigpO1xuICAgIH1cbn1cblpvZEVycm9yLmNyZWF0ZSA9IChpc3N1ZXMpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihpc3N1ZXMpO1xuICAgIHJldHVybiBlcnJvcjtcbn07XG4iLCJpbXBvcnQgeyBab2RJc3N1ZUNvZGUgfSBmcm9tIFwiLi4vWm9kRXJyb3IuanNcIjtcbmltcG9ydCB7IHV0aWwsIFpvZFBhcnNlZFR5cGUgfSBmcm9tIFwiLi4vaGVscGVycy91dGlsLmpzXCI7XG5jb25zdCBlcnJvck1hcCA9IChpc3N1ZSwgX2N0eCkgPT4ge1xuICAgIGxldCBtZXNzYWdlO1xuICAgIHN3aXRjaCAoaXNzdWUuY29kZSkge1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGU6XG4gICAgICAgICAgICBpZiAoaXNzdWUucmVjZWl2ZWQgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiUmVxdWlyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRXhwZWN0ZWQgJHtpc3N1ZS5leHBlY3RlZH0sIHJlY2VpdmVkICR7aXNzdWUucmVjZWl2ZWR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWw6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgbGl0ZXJhbCB2YWx1ZSwgZXhwZWN0ZWQgJHtKU09OLnN0cmluZ2lmeShpc3N1ZS5leHBlY3RlZCwgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudW5yZWNvZ25pemVkX2tleXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYFVucmVjb2duaXplZCBrZXkocykgaW4gb2JqZWN0OiAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5rZXlzLCBcIiwgXCIpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRpc2NyaW1pbmF0b3IgdmFsdWUuIEV4cGVjdGVkICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLm9wdGlvbnMpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGVudW0gdmFsdWUuIEV4cGVjdGVkICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLm9wdGlvbnMpfSwgcmVjZWl2ZWQgJyR7aXNzdWUucmVjZWl2ZWR9J2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9hcmd1bWVudHM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZnVuY3Rpb24gYXJndW1lbnRzYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIHJldHVybiB0eXBlYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2RhdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZGF0ZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlzc3VlLnZhbGlkYXRpb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJpbmNsdWRlc1wiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IGluY2x1ZGUgXCIke2lzc3VlLnZhbGlkYXRpb24uaW5jbHVkZXN9XCJgO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlzc3VlLnZhbGlkYXRpb24ucG9zaXRpb24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgJHttZXNzYWdlfSBhdCBvbmUgb3IgbW9yZSBwb3NpdGlvbnMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICR7aXNzdWUudmFsaWRhdGlvbi5wb3NpdGlvbn1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwic3RhcnRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IHN0YXJ0IHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uc3RhcnRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwiZW5kc1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBlbmQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5lbmRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlLnZhbGlkYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnZhbGlkYXRpb24gIT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCAke2lzc3VlLnZhbGlkYXRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fc21hbGw6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgbW9yZSB0aGFuYH0gJHtpc3N1ZS5taW5pbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgb3ZlcmB9ICR7aXNzdWUubWluaW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHkgZXF1YWwgdG8gYCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYCA6IGBncmVhdGVyIHRoYW4gYH0ke2lzc3VlLm1pbmltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiYmlnaW50XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHkgZXF1YWwgdG8gYCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYCA6IGBncmVhdGVyIHRoYW4gYH0ke2lzc3VlLm1pbmltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7bmV3IERhdGUoTnVtYmVyKGlzc3VlLm1pbmltdW0pKX1gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fYmlnOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnR5cGUgPT09IFwiYXJyYXlcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEFycmF5IG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IG1vc3RgIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX0gZWxlbWVudChzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgU3RyaW5nIG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IG1vc3RgIDogYHVuZGVyYH0gJHtpc3N1ZS5tYXhpbXVtfSBjaGFyYWN0ZXIocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiYmlnaW50XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBCaWdJbnQgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGxlc3MgdGhhbiBvciBlcXVhbCB0b2AgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0b2AgOiBgc21hbGxlciB0aGFuYH0gJHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWF4aW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmN1c3RvbTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludGVyc2VjdGlvbiByZXN1bHRzIGNvdWxkIG5vdCBiZSBtZXJnZWRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke2lzc3VlLm11bHRpcGxlT2Z9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfZmluaXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTnVtYmVyIG11c3QgYmUgZmluaXRlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBfY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUpO1xuICAgIH1cbiAgICByZXR1cm4geyBtZXNzYWdlIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZXJyb3JNYXA7XG4iLCJpbXBvcnQgZGVmYXVsdEVycm9yTWFwIGZyb20gXCIuL2xvY2FsZXMvZW4uanNcIjtcbmxldCBvdmVycmlkZUVycm9yTWFwID0gZGVmYXVsdEVycm9yTWFwO1xuZXhwb3J0IHsgZGVmYXVsdEVycm9yTWFwIH07XG5leHBvcnQgZnVuY3Rpb24gc2V0RXJyb3JNYXAobWFwKSB7XG4gICAgb3ZlcnJpZGVFcnJvck1hcCA9IG1hcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvck1hcCgpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVFcnJvck1hcDtcbn1cbiIsImltcG9ydCB7IGdldEVycm9yTWFwIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuaW1wb3J0IGRlZmF1bHRFcnJvck1hcCBmcm9tIFwiLi4vbG9jYWxlcy9lbi5qc1wiO1xuZXhwb3J0IGNvbnN0IG1ha2VJc3N1ZSA9IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIHBhdGgsIGVycm9yTWFwcywgaXNzdWVEYXRhIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgZnVsbFBhdGggPSBbLi4ucGF0aCwgLi4uKGlzc3VlRGF0YS5wYXRoIHx8IFtdKV07XG4gICAgY29uc3QgZnVsbElzc3VlID0ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgIH07XG4gICAgaWYgKGlzc3VlRGF0YS5tZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgbWVzc2FnZTogaXNzdWVEYXRhLm1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgIGNvbnN0IG1hcHMgPSBlcnJvck1hcHNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gISFtKVxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgIGZvciAoY29uc3QgbWFwIG9mIG1hcHMpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gbWFwKGZ1bGxJc3N1ZSwgeyBkYXRhLCBkZWZhdWx0RXJyb3I6IGVycm9yTWVzc2FnZSB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgRU1QVFlfUEFUSCA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZElzc3VlVG9Db250ZXh0KGN0eCwgaXNzdWVEYXRhKSB7XG4gICAgY29uc3Qgb3ZlcnJpZGVNYXAgPSBnZXRFcnJvck1hcCgpO1xuICAgIGNvbnN0IGlzc3VlID0gbWFrZUlzc3VlKHtcbiAgICAgICAgaXNzdWVEYXRhOiBpc3N1ZURhdGEsXG4gICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCwgLy8gY29udGV4dHVhbCBlcnJvciBtYXAgaXMgZmlyc3QgcHJpb3JpdHlcbiAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCwgLy8gdGhlbiBzY2hlbWEtYm91bmQgbWFwIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgb3ZlcnJpZGVNYXAsIC8vIHRoZW4gZ2xvYmFsIG92ZXJyaWRlIG1hcFxuICAgICAgICAgICAgb3ZlcnJpZGVNYXAgPT09IGRlZmF1bHRFcnJvck1hcCA/IHVuZGVmaW5lZCA6IGRlZmF1bHRFcnJvck1hcCwgLy8gdGhlbiBnbG9iYWwgZGVmYXVsdCBtYXBcbiAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgfSk7XG4gICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaChpc3N1ZSk7XG59XG5leHBvcnQgY2xhc3MgUGFyc2VTdGF0dXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gXCJ2YWxpZFwiO1xuICAgIH1cbiAgICBkaXJ0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IFwidmFsaWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImRpcnR5XCI7XG4gICAgfVxuICAgIGFib3J0KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gXCJhYm9ydGVkXCI7XG4gICAgfVxuICAgIHN0YXRpYyBtZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0cykge1xuICAgICAgICBjb25zdCBhcnJheVZhbHVlID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcyBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBhcnJheVZhbHVlLnB1c2gocy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBhcnJheVZhbHVlIH07XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBtZXJnZU9iamVjdEFzeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3Qgc3luY1BhaXJzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgfVxuICAgIHN0YXRpYyBtZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBmaW5hbE9iamVjdCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gcGFpcjtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGlmIChrZXkudmFsdWUgIT09IFwiX19wcm90b19fXCIgJiYgKHR5cGVvZiB2YWx1ZS52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCBwYWlyLmFsd2F5c1NldCkpIHtcbiAgICAgICAgICAgICAgICBmaW5hbE9iamVjdFtrZXkudmFsdWVdID0gdmFsdWUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE9iamVjdCB9O1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBJTlZBTElEID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgc3RhdHVzOiBcImFib3J0ZWRcIixcbn0pO1xuZXhwb3J0IGNvbnN0IERJUlRZID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwiZGlydHlcIiwgdmFsdWUgfSk7XG5leHBvcnQgY29uc3QgT0sgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZSB9KTtcbmV4cG9ydCBjb25zdCBpc0Fib3J0ZWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiO1xuZXhwb3J0IGNvbnN0IGlzRGlydHkgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwiZGlydHlcIjtcbmV4cG9ydCBjb25zdCBpc1ZhbGlkID0gKHgpID0+IHguc3RhdHVzID09PSBcInZhbGlkXCI7XG5leHBvcnQgY29uc3QgaXNBc3luYyA9ICh4KSA9PiB0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB4IGluc3RhbmNlb2YgUHJvbWlzZTtcbiIsImV4cG9ydCB2YXIgZXJyb3JVdGlsO1xuKGZ1bmN0aW9uIChlcnJvclV0aWwpIHtcbiAgICBlcnJvclV0aWwuZXJyVG9PYmogPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2UgfSA6IG1lc3NhZ2UgfHwge307XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQ6XG4gICAgZXJyb3JVdGlsLnRvU3RyaW5nID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IG1lc3NhZ2U/Lm1lc3NhZ2U7XG59KShlcnJvclV0aWwgfHwgKGVycm9yVXRpbCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBab2RFcnJvciwgWm9kSXNzdWVDb2RlLCB9IGZyb20gXCIuL1pvZEVycm9yLmpzXCI7XG5pbXBvcnQgeyBkZWZhdWx0RXJyb3JNYXAsIGdldEVycm9yTWFwIH0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgeyBlcnJvclV0aWwgfSBmcm9tIFwiLi9oZWxwZXJzL2Vycm9yVXRpbC5qc1wiO1xuaW1wb3J0IHsgRElSVFksIElOVkFMSUQsIE9LLCBQYXJzZVN0YXR1cywgYWRkSXNzdWVUb0NvbnRleHQsIGlzQWJvcnRlZCwgaXNBc3luYywgaXNEaXJ0eSwgaXNWYWxpZCwgbWFrZUlzc3VlLCB9IGZyb20gXCIuL2hlbHBlcnMvcGFyc2VVdGlsLmpzXCI7XG5pbXBvcnQgeyB1dGlsLCBab2RQYXJzZWRUeXBlLCBnZXRQYXJzZWRUeXBlIH0gZnJvbSBcIi4vaGVscGVycy91dGlsLmpzXCI7XG5jbGFzcyBQYXJzZUlucHV0TGF6eVBhdGgge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdmFsdWUsIHBhdGgsIGtleSkge1xuICAgICAgICB0aGlzLl9jYWNoZWRQYXRoID0gW107XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuX2tleSA9IGtleTtcbiAgICB9XG4gICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGVkUGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuX2tleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRQYXRoLnB1c2goLi4udGhpcy5fcGF0aCwgLi4udGhpcy5fa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZFBhdGgucHVzaCguLi50aGlzLl9wYXRoLCB0aGlzLl9rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWRQYXRoO1xuICAgIH1cbn1cbmNvbnN0IGhhbmRsZVJlc3VsdCA9IChjdHgsIHJlc3VsdCkgPT4ge1xuICAgIGlmIChpc1ZhbGlkKHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LnZhbHVlIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWN0eC5jb21tb24uaXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsaWRhdGlvbiBmYWlsZWQgYnV0IG5vIGlzc3VlcyBkZXRlY3RlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufTtcbmZ1bmN0aW9uIHByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCB7IGVycm9yTWFwLCBpbnZhbGlkX3R5cGVfZXJyb3IsIHJlcXVpcmVkX2Vycm9yLCBkZXNjcmlwdGlvbiB9ID0gcGFyYW1zO1xuICAgIGlmIChlcnJvck1hcCAmJiAoaW52YWxpZF90eXBlX2Vycm9yIHx8IHJlcXVpcmVkX2Vycm9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHVzZSBcImludmFsaWRfdHlwZV9lcnJvclwiIG9yIFwicmVxdWlyZWRfZXJyb3JcIiBpbiBjb25qdW5jdGlvbiB3aXRoIGN1c3RvbSBlcnJvciBtYXAuYCk7XG4gICAgfVxuICAgIGlmIChlcnJvck1hcClcbiAgICAgICAgcmV0dXJuIHsgZXJyb3JNYXA6IGVycm9yTWFwLCBkZXNjcmlwdGlvbiB9O1xuICAgIGNvbnN0IGN1c3RvbU1hcCA9IChpc3MsIGN0eCkgPT4ge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHBhcmFtcztcbiAgICAgICAgaWYgKGlzcy5jb2RlID09PSBcImludmFsaWRfZW51bV92YWx1ZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBtZXNzYWdlID8/IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGN0eC5kYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBtZXNzYWdlID8/IHJlcXVpcmVkX2Vycm9yID8/IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNzLmNvZGUgIT09IFwiaW52YWxpZF90eXBlXCIpXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gaW52YWxpZF90eXBlX2Vycm9yID8/IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICB9O1xuICAgIHJldHVybiB7IGVycm9yTWFwOiBjdXN0b21NYXAsIGRlc2NyaXB0aW9uIH07XG59XG5leHBvcnQgY2xhc3MgWm9kVHlwZSB7XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBfZ2V0VHlwZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIChjdHggfHwge1xuICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBuZXcgUGFyc2VTdGF0dXMoKSxcbiAgICAgICAgICAgIGN0eDoge1xuICAgICAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3BhcnNlU3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bmNocm9ub3VzIHBhcnNlIGVuY291bnRlcmVkIHByb21pc2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9wYXJzZUFzeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH1cbiAgICBwYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zYWZlUGFyc2UoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIHNhZmVQYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICBhc3luYzogcGFyYW1zPy5hc3luYyA/PyBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZXh0dWFsRXJyb3JNYXA6IHBhcmFtcz8uZXJyb3JNYXAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogcGFyYW1zPy5wYXRoIHx8IFtdLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGRhdGEpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZVN5bmMoeyBkYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgIHJldHVybiBoYW5kbGVSZXN1bHQoY3R4LCByZXN1bHQpO1xuICAgIH1cbiAgICBcIn52YWxpZGF0ZVwiKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICBhc3luYzogISF0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IFtdLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGRhdGEpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2VTeW5jKHsgZGF0YSwgcGF0aDogW10sIHBhcmVudDogY3R4IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBjdHguY29tbW9uLmlzc3VlcyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyPy5tZXNzYWdlPy50b0xvd2VyQ2FzZSgpPy5pbmNsdWRlcyhcImVuY291bnRlcmVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguY29tbW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZUFzeW5jKHsgZGF0YSwgcGF0aDogW10sIHBhcmVudDogY3R4IH0pLnRoZW4oKHJlc3VsdCkgPT4gaXNWYWxpZChyZXN1bHQpXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBjdHguY29tbW9uLmlzc3VlcyxcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBwYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcylcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgIH1cbiAgICBhc3luYyBzYWZlUGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICBjb250ZXh0dWFsRXJyb3JNYXA6IHBhcmFtcz8uZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogcGFyYW1zPy5wYXRoIHx8IFtdLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGRhdGEpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXliZUFzeW5jUmVzdWx0ID0gdGhpcy5fcGFyc2UoeyBkYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IChpc0FzeW5jKG1heWJlQXN5bmNSZXN1bHQpID8gbWF5YmVBc3luY1Jlc3VsdCA6IFByb21pc2UucmVzb2x2ZShtYXliZUFzeW5jUmVzdWx0KSk7XG4gICAgICAgIHJldHVybiBoYW5kbGVSZXN1bHQoY3R4LCByZXN1bHQpO1xuICAgIH1cbiAgICByZWZpbmUoY2hlY2ssIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZ2V0SXNzdWVQcm9wZXJ0aWVzID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBtZXNzYWdlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjaGVjayh2YWwpO1xuICAgICAgICAgICAgY29uc3Qgc2V0RXJyb3IgPSAoKSA9PiBjdHguYWRkSXNzdWUoe1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5jdXN0b20sXG4gICAgICAgICAgICAgICAgLi4uZ2V0SXNzdWVQcm9wZXJ0aWVzKHZhbCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiByZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZpbmVtZW50KGNoZWNrLCByZWZpbmVtZW50RGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudCgodmFsLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hlY2sodmFsKSkge1xuICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh0eXBlb2YgcmVmaW5lbWVudERhdGEgPT09IFwiZnVuY3Rpb25cIiA/IHJlZmluZW1lbnREYXRhKHZhbCwgY3R4KSA6IHJlZmluZW1lbnREYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZWZpbmVtZW50KHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInJlZmluZW1lbnRcIiwgcmVmaW5lbWVudCB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3VwZXJSZWZpbmUocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudChyZWZpbmVtZW50KTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoZGVmKSB7XG4gICAgICAgIC8qKiBBbGlhcyBvZiBzYWZlUGFyc2VBc3luYyAqL1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc2FmZVBhcnNlQXN5bmM7XG4gICAgICAgIHRoaXMuX2RlZiA9IGRlZjtcbiAgICAgICAgdGhpcy5wYXJzZSA9IHRoaXMucGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2UgPSB0aGlzLnNhZmVQYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcnNlQXN5bmMgPSB0aGlzLnBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2VBc3luYyA9IHRoaXMuc2FmZVBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNwYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZSA9IHRoaXMucmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lbWVudCA9IHRoaXMucmVmaW5lbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1cGVyUmVmaW5lID0gdGhpcy5zdXBlclJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbmFsID0gdGhpcy5vcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxhYmxlID0gdGhpcy5udWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxpc2ggPSB0aGlzLm51bGxpc2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3IgPSB0aGlzLm9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5kID0gdGhpcy5hbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJyYW5kID0gdGhpcy5icmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzLmRlZmF1bHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYXRjaCA9IHRoaXMuY2F0Y2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IHRoaXMuZGVzY3JpYmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5waXBlID0gdGhpcy5waXBlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNOdWxsYWJsZSA9IHRoaXMuaXNOdWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSB0aGlzLmlzT3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpc1tcIn5zdGFuZGFyZFwiXSA9IHtcbiAgICAgICAgICAgIHZlcnNpb246IDEsXG4gICAgICAgICAgICB2ZW5kb3I6IFwiem9kXCIsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGRhdGEpID0+IHRoaXNbXCJ+dmFsaWRhdGVcIl0oZGF0YSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIG9wdGlvbmFsKCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG51bGxhYmxlKCkge1xuICAgICAgICByZXR1cm4gWm9kTnVsbGFibGUuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG51bGxpc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bGxhYmxlKCkub3B0aW9uYWwoKTtcbiAgICB9XG4gICAgYXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBab2RBcnJheS5jcmVhdGUodGhpcyk7XG4gICAgfVxuICAgIHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiBab2RQcm9taXNlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBvcihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvZFVuaW9uLmNyZWF0ZShbdGhpcywgb3B0aW9uXSwgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgYW5kKGluY29taW5nKSB7XG4gICAgICAgIHJldHVybiBab2RJbnRlcnNlY3Rpb24uY3JlYXRlKHRoaXMsIGluY29taW5nLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJ0cmFuc2Zvcm1cIiwgdHJhbnNmb3JtIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWZhdWx0KGRlZikge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVGdW5jID0gdHlwZW9mIGRlZiA9PT0gXCJmdW5jdGlvblwiID8gZGVmIDogKCkgPT4gZGVmO1xuICAgICAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgaW5uZXJUeXBlOiB0aGlzLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWVGdW5jLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYnJhbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQnJhbmRlZCh7XG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJyYW5kZWQsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2goZGVmKSB7XG4gICAgICAgIGNvbnN0IGNhdGNoVmFsdWVGdW5jID0gdHlwZW9mIGRlZiA9PT0gXCJmdW5jdGlvblwiID8gZGVmIDogKCkgPT4gZGVmO1xuICAgICAgICByZXR1cm4gbmV3IFpvZENhdGNoKHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIGlubmVyVHlwZTogdGhpcyxcbiAgICAgICAgICAgIGNhdGNoVmFsdWU6IGNhdGNoVmFsdWVGdW5jLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RDYXRjaCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlc2NyaWJlKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IFRoaXMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gbmV3IFRoaXMoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaXBlKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gWm9kUGlwZWxpbmUuY3JlYXRlKHRoaXMsIHRhcmdldCk7XG4gICAgfVxuICAgIHJlYWRvbmx5KCkge1xuICAgICAgICByZXR1cm4gWm9kUmVhZG9ubHkuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBpc09wdGlvbmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlUGFyc2UodW5kZWZpbmVkKS5zdWNjZXNzO1xuICAgIH1cbiAgICBpc051bGxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlUGFyc2UobnVsbCkuc3VjY2VzcztcbiAgICB9XG59XG5jb25zdCBjdWlkUmVnZXggPSAvXmNbXlxccy1dezgsfSQvaTtcbmNvbnN0IGN1aWQyUmVnZXggPSAvXlswLTlhLXpdKyQvO1xuY29uc3QgdWxpZFJlZ2V4ID0gL15bMC05QS1ISktNTlAtVFYtWl17MjZ9JC9pO1xuLy8gY29uc3QgdXVpZFJlZ2V4ID1cbi8vICAgL14oW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tWzEtNV1bYS1mMC05XXszfS1bYS1mMC05XXs0fS1bYS1mMC05XXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTtcbmNvbnN0IHV1aWRSZWdleCA9IC9eWzAtOWEtZkEtRl17OH1cXGItWzAtOWEtZkEtRl17NH1cXGItWzAtOWEtZkEtRl17NH1cXGItWzAtOWEtZkEtRl17NH1cXGItWzAtOWEtZkEtRl17MTJ9JC9pO1xuY29uc3QgbmFub2lkUmVnZXggPSAvXlthLXowLTlfLV17MjF9JC9pO1xuY29uc3Qgand0UmVnZXggPSAvXltBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fXStcXC5bQS1aYS16MC05LV9dKiQvO1xuY29uc3QgZHVyYXRpb25SZWdleCA9IC9eWy0rXT9QKD8hJCkoPzooPzpbLStdP1xcZCtZKXwoPzpbLStdP1xcZCtbLixdXFxkK1kkKSk/KD86KD86Wy0rXT9cXGQrTSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtNJCkpPyg/Oig/OlstK10/XFxkK1cpfCg/OlstK10/XFxkK1suLF1cXGQrVyQpKT8oPzooPzpbLStdP1xcZCtEKXwoPzpbLStdP1xcZCtbLixdXFxkK0QkKSk/KD86VCg/PVtcXGQrLV0pKD86KD86Wy0rXT9cXGQrSCl8KD86Wy0rXT9cXGQrWy4sXVxcZCtIJCkpPyg/Oig/OlstK10/XFxkK00pfCg/OlstK10/XFxkK1suLF1cXGQrTSQpKT8oPzpbLStdP1xcZCsoPzpbLixdXFxkKyk/Uyk/KT8/JC87XG4vLyBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjE4MS8xNTUwMTU1XG4vLyBvbGQgdmVyc2lvbjogdG9vIHNsb3csIGRpZG4ndCBzdXBwb3J0IHVuaWNvZGVcbi8vIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoKFthLXpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSsoXFwuKFthLXpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSspKil8KChcXHgyMikoKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPygoW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZdfFxceDIxfFtcXHgyMy1cXHg1Yl18W1xceDVkLVxceDdlXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KFxcXFwoW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSkqKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPyhcXHgyMikpKUAoKChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuKSsoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkkL2k7XG4vL29sZCBlbWFpbCByZWdleFxuLy8gY29uc3QgZW1haWxSZWdleCA9IC9eKChbXjw+KClbXFxdLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF0uLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoPyEtKShbXjw+KClbXFxdLiw7Olxcc0BcIl0rXFwuKStbXjw+KClbXFxdLiw7Olxcc0BcIl17MSx9KVteLTw+KClbXFxdLiw7Olxcc0BcIl0kL2k7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFsoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXF0pfChcXFtJUHY2OigoW2EtZjAtOV17MSw0fTopezd9fDo6KFthLWYwLTldezEsNH06KXswLDZ9fChbYS1mMC05XXsxLDR9Oil7MX06KFthLWYwLTldezEsNH06KXswLDV9fChbYS1mMC05XXsxLDR9Oil7Mn06KFthLWYwLTldezEsNH06KXswLDR9fChbYS1mMC05XXsxLDR9Oil7M306KFthLWYwLTldezEsNH06KXswLDN9fChbYS1mMC05XXsxLDR9Oil7NH06KFthLWYwLTldezEsNH06KXswLDJ9fChbYS1mMC05XXsxLDR9Oil7NX06KFthLWYwLTldezEsNH06KXswLDF9KShbYS1mMC05XXsxLDR9fCgoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKSlcXF0pfChbQS1aYS16MC05XShbQS1aYS16MC05LV0qW0EtWmEtejAtOV0pKihcXC5bQS1aYS16XXsyLH0pKykpJC87XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL15bYS16QS1aMC05XFwuXFwhXFwjXFwkXFwlXFwmXFwnXFwqXFwrXFwvXFw9XFw/XFxeXFxfXFxgXFx7XFx8XFx9XFx+XFwtXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLztcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXig/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pJC9pO1xuY29uc3QgZW1haWxSZWdleCA9IC9eKD8hXFwuKSg/IS4qXFwuXFwuKShbQS1aMC05XycrXFwtXFwuXSopW0EtWjAtOV8rLV1AKFtBLVowLTldW0EtWjAtOVxcLV0qXFwuKStbQS1aXXsyLH0kL2k7XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL15bYS16MC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXowLTktXSsoPzpcXC5bYS16MC05XFwtXSspKiQvaTtcbi8vIGZyb20gaHR0cHM6Ly90aGVrZXZpbnNjb3R0LmNvbS9lbW9qaXMtaW4tamF2YXNjcmlwdC8jd3JpdGluZy1hLXJlZ3VsYXItZXhwcmVzc2lvblxuY29uc3QgX2Vtb2ppUmVnZXggPSBgXihcXFxccHtFeHRlbmRlZF9QaWN0b2dyYXBoaWN9fFxcXFxwe0Vtb2ppX0NvbXBvbmVudH0pKyRgO1xubGV0IGVtb2ppUmVnZXg7XG4vLyBmYXN0ZXIsIHNpbXBsZXIsIHNhZmVyXG5jb25zdCBpcHY0UmVnZXggPSAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKSQvO1xuY29uc3QgaXB2NENpZHJSZWdleCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwvKDNbMC0yXXxbMTJdP1swLTldKSQvO1xuLy8gY29uc3QgaXB2NlJlZ2V4ID1cbi8vIC9eKChbYS1mMC05XXsxLDR9Oil7N318OjooW2EtZjAtOV17MSw0fTopezAsNn18KFthLWYwLTldezEsNH06KXsxfTooW2EtZjAtOV17MSw0fTopezAsNX18KFthLWYwLTldezEsNH06KXsyfTooW2EtZjAtOV17MSw0fTopezAsNH18KFthLWYwLTldezEsNH06KXszfTooW2EtZjAtOV17MSw0fTopezAsM318KFthLWYwLTldezEsNH06KXs0fTooW2EtZjAtOV17MSw0fTopezAsMn18KFthLWYwLTldezEsNH06KXs1fTooW2EtZjAtOV17MSw0fTopezAsMX0pKFthLWYwLTldezEsNH18KCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpKSQvO1xuY29uc3QgaXB2NlJlZ2V4ID0gL14oKFswLTlhLWZBLUZdezEsNH06KXs3LDd9WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsN306fChbMC05YS1mQS1GXXsxLDR9Oil7MSw2fTpbMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw1fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwyfXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH0oOlswLTlhLWZBLUZdezEsNH0pezEsM318KFswLTlhLWZBLUZdezEsNH06KXsxLDN9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwyfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw1fXxbMC05YS1mQS1GXXsxLDR9OigoOlswLTlhLWZBLUZdezEsNH0pezEsNn0pfDooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDd9fDopfGZlODA6KDpbMC05YS1mQS1GXXswLDR9KXswLDR9JVswLTlhLXpBLVpdezEsfXw6OihmZmZmKDowezEsNH0pezAsMX06KXswLDF9KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pfChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fTooKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSkpJC87XG5jb25zdCBpcHY2Q2lkclJlZ2V4ID0gL14oKFswLTlhLWZBLUZdezEsNH06KXs3LDd9WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsN306fChbMC05YS1mQS1GXXsxLDR9Oil7MSw2fTpbMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw1fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwyfXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH0oOlswLTlhLWZBLUZdezEsNH0pezEsM318KFswLTlhLWZBLUZdezEsNH06KXsxLDN9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwyfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw1fXxbMC05YS1mQS1GXXsxLDR9OigoOlswLTlhLWZBLUZdezEsNH0pezEsNn0pfDooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDd9fDopfGZlODA6KDpbMC05YS1mQS1GXXswLDR9KXswLDR9JVswLTlhLXpBLVpdezEsfXw6OihmZmZmKDowezEsNH0pezAsMX06KXswLDF9KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pfChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fTooKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSkpXFwvKDEyWzAtOF18MVswMV1bMC05XXxbMS05XT9bMC05XSkkLztcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc4NjAzOTIvZGV0ZXJtaW5lLWlmLXN0cmluZy1pcy1pbi1iYXNlNjQtdXNpbmctamF2YXNjcmlwdFxuY29uc3QgYmFzZTY0UmVnZXggPSAvXihbMC05YS16QS1aKy9dezR9KSooKFswLTlhLXpBLVorL117Mn09PSl8KFswLTlhLXpBLVorL117M309KSk/JC87XG4vLyBodHRwczovL2Jhc2U2NC5ndXJ1L3N0YW5kYXJkcy9iYXNlNjR1cmxcbmNvbnN0IGJhc2U2NHVybFJlZ2V4ID0gL14oWzAtOWEtekEtWi1fXXs0fSkqKChbMC05YS16QS1aLV9dezJ9KD09KT8pfChbMC05YS16QS1aLV9dezN9KD0pPykpPyQvO1xuLy8gc2ltcGxlXG4vLyBjb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1gO1xuLy8gbm8gbGVhcCB5ZWFyIHZhbGlkYXRpb25cbi8vIGNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGBcXFxcZHs0fS0oKDBbMTM1NzhdfDEwfDEyKS0zMXwoMFsxMy05XXwxWzAtMl0pLTMwfCgwWzEtOV18MVswLTJdKS0oMFsxLTldfDFcXFxcZHwyXFxcXGQpKWA7XG4vLyB3aXRoIGxlYXAgeWVhciB2YWxpZGF0aW9uXG5jb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgKChcXFxcZFxcXFxkWzI0NjhdWzA0OF18XFxcXGRcXFxcZFsxMzU3OV1bMjZdfFxcXFxkXFxcXGQwWzQ4XXxbMDI0NjhdWzA0OF0wMHxbMTM1NzldWzI2XTAwKS0wMi0yOXxcXFxcZHs0fS0oKDBbMTM1NzhdfDFbMDJdKS0oMFsxLTldfFsxMl1cXFxcZHwzWzAxXSl8KDBbNDY5XXwxMSktKDBbMS05XXxbMTJdXFxcXGR8MzApfCgwMiktKDBbMS05XXwxXFxcXGR8MlswLThdKSkpYDtcbmNvbnN0IGRhdGVSZWdleCA9IG5ldyBSZWdFeHAoYF4ke2RhdGVSZWdleFNvdXJjZX0kYCk7XG5mdW5jdGlvbiB0aW1lUmVnZXhTb3VyY2UoYXJncykge1xuICAgIGxldCBzZWNvbmRzUmVnZXhTb3VyY2UgPSBgWzAtNV1cXFxcZGA7XG4gICAgaWYgKGFyZ3MucHJlY2lzaW9uKSB7XG4gICAgICAgIHNlY29uZHNSZWdleFNvdXJjZSA9IGAke3NlY29uZHNSZWdleFNvdXJjZX1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZ3MucHJlY2lzaW9uID09IG51bGwpIHtcbiAgICAgICAgc2Vjb25kc1JlZ2V4U291cmNlID0gYCR7c2Vjb25kc1JlZ2V4U291cmNlfShcXFxcLlxcXFxkKyk/YDtcbiAgICB9XG4gICAgY29uc3Qgc2Vjb25kc1F1YW50aWZpZXIgPSBhcmdzLnByZWNpc2lvbiA/IFwiK1wiIDogXCI/XCI7IC8vIHJlcXVpcmUgc2Vjb25kcyBpZiBwcmVjaXNpb24gaXMgbm9uemVyb1xuICAgIHJldHVybiBgKFswMV1cXFxcZHwyWzAtM10pOlswLTVdXFxcXGQoOiR7c2Vjb25kc1JlZ2V4U291cmNlfSkke3NlY29uZHNRdWFudGlmaWVyfWA7XG59XG5mdW5jdGlvbiB0aW1lUmVnZXgoYXJncykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHt0aW1lUmVnZXhTb3VyY2UoYXJncyl9JGApO1xufVxuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMTQzMjMxXG5leHBvcnQgZnVuY3Rpb24gZGF0ZXRpbWVSZWdleChhcmdzKSB7XG4gICAgbGV0IHJlZ2V4ID0gYCR7ZGF0ZVJlZ2V4U291cmNlfVQke3RpbWVSZWdleFNvdXJjZShhcmdzKX1gO1xuICAgIGNvbnN0IG9wdHMgPSBbXTtcbiAgICBvcHRzLnB1c2goYXJncy5sb2NhbCA/IGBaP2AgOiBgWmApO1xuICAgIGlmIChhcmdzLm9mZnNldClcbiAgICAgICAgb3B0cy5wdXNoKGAoWystXVxcXFxkezJ9Oj9cXFxcZHsyfSlgKTtcbiAgICByZWdleCA9IGAke3JlZ2V4fSgke29wdHMuam9pbihcInxcIil9KWA7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3JlZ2V4fSRgKTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRJUChpcCwgdmVyc2lvbikge1xuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NFwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY0UmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NlwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY2UmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRKV1Qoand0LCBhbGcpIHtcbiAgICBpZiAoIWp3dFJlZ2V4LnRlc3Qoand0KSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFtoZWFkZXJdID0gand0LnNwbGl0KFwiLlwiKTtcbiAgICAgICAgaWYgKCFoZWFkZXIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIENvbnZlcnQgYmFzZTY0dXJsIHRvIGJhc2U2NFxuICAgICAgICBjb25zdCBiYXNlNjQgPSBoZWFkZXJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csIFwiK1wiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgXCIvXCIpXG4gICAgICAgICAgICAucGFkRW5kKGhlYWRlci5sZW5ndGggKyAoKDQgLSAoaGVhZGVyLmxlbmd0aCAlIDQpKSAlIDQpLCBcIj1cIik7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBKU09OLnBhcnNlKGF0b2IoYmFzZTY0KSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGVjb2RlZCAhPT0gXCJvYmplY3RcIiB8fCBkZWNvZGVkID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoXCJ0eXBcIiBpbiBkZWNvZGVkICYmIGRlY29kZWQ/LnR5cCAhPT0gXCJKV1RcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCFkZWNvZGVkLmFsZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGFsZyAmJiBkZWNvZGVkLmFsZyAhPT0gYWxnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNWYWxpZENpZHIoaXAsIHZlcnNpb24pIHtcbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjRcIiB8fCAhdmVyc2lvbikgJiYgaXB2NENpZHJSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY2XCIgfHwgIXZlcnNpb24pICYmIGlwdjZDaWRyUmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBjbGFzcyBab2RTdHJpbmcgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBTdHJpbmcoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5sZW5ndGggPCBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5sZW5ndGggPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImxlbmd0aFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gaW5wdXQuZGF0YS5sZW5ndGggPiBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZyB8fCB0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVtYWlsXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbW9qaVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbW9qaVJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVtb2ppUmVnZXggPSBuZXcgUmVnRXhwKF9lbW9qaVJlZ2V4LCBcInVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZW1vamlSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZW1vamlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInV1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdXVpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1dWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJuYW5vaWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghbmFub2lkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcIm5hbm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY3VpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImN1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWQyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1aWQyUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImN1aWQyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1bGlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVsaWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXJsXCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgVVJMKGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0UmVzdWx0ID0gY2hlY2sucmVnZXgudGVzdChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJyZWdleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidHJpbVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJpbmNsdWRlc1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmluY2x1ZGVzKGNoZWNrLnZhbHVlLCBjaGVjay5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBpbmNsdWRlczogY2hlY2sudmFsdWUsIHBvc2l0aW9uOiBjaGVjay5wb3NpdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidG9Mb3dlckNhc2VcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRvVXBwZXJDYXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJzdGFydHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuc3RhcnRzV2l0aChjaGVjay52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBzdGFydHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW5kc1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5lbmRzV2l0aChjaGVjay52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBlbmRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImRhdGV0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGRhdGV0aW1lUmVnZXgoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGRhdGVSZWdleDtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZHVyYXRpb25cIikge1xuICAgICAgICAgICAgICAgIGlmICghZHVyYXRpb25SZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImlwXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRJUChpbnB1dC5kYXRhLCBjaGVjay52ZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJqd3RcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEpXVChpbnB1dC5kYXRhLCBjaGVjay5hbGcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiand0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjaWRyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRDaWRyKGlucHV0LmRhdGEsIGNoZWNrLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY2lkclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiYmFzZTY0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJiYXNlNjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImJhc2U2NHVybFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjR1cmxSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiYmFzZTY0dXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIF9yZWdleChyZWdleCwgdmFsaWRhdGlvbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmVtZW50KChkYXRhKSA9PiByZWdleC50ZXN0KGRhdGEpLCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uLFxuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtYWlsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbWFpbFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVybChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXJsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgZW1vamkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtb2ppXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXVpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXVpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIG5hbm9pZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwibmFub2lkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQyKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjdWlkMlwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVsaWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInVsaWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBiYXNlNjQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImJhc2U2NFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGJhc2U2NHVybChtZXNzYWdlKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImJhc2U2NHVybFwiLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgand0KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJqd3RcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBpcChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiaXBcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBjaWRyKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjaWRyXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgZGF0ZXRpbWUob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIG9wdGlvbnM/LnByZWNpc2lvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zPy5wcmVjaXNpb24sXG4gICAgICAgICAgICBvZmZzZXQ6IG9wdGlvbnM/Lm9mZnNldCA/PyBmYWxzZSxcbiAgICAgICAgICAgIGxvY2FsOiBvcHRpb25zPy5sb2NhbCA/PyBmYWxzZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zPy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRhdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImRhdGVcIiwgbWVzc2FnZSB9KTtcbiAgICB9XG4gICAgdGltZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgICAgICBraW5kOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIG9wdGlvbnM/LnByZWNpc2lvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zPy5wcmVjaXNpb24sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucz8ubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkdXJhdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZHVyYXRpb25cIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICByZWdleChyZWdleCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJyZWdleFwiLFxuICAgICAgICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5jbHVkZXModmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW5jbHVkZXNcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBvcHRpb25zPy5wb3NpdGlvbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zPy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXJ0c1dpdGgodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwic3RhcnRzV2l0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW5kc1dpdGgodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZW5kc1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogbWluTGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heExlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBtYXhMZW5ndGgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZW5ndGgobGVuLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImxlbmd0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IGxlbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVxdWl2YWxlbnQgdG8gYC5taW4oMSlgXG4gICAgICovXG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgdHJpbSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRyaW1cIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvTG93ZXJDYXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidG9Mb3dlckNhc2VcIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvVXBwZXJDYXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidG9VcHBlckNhc2VcIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBpc0RhdGV0aW1lKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImRhdGV0aW1lXCIpO1xuICAgIH1cbiAgICBnZXQgaXNEYXRlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImRhdGVcIik7XG4gICAgfVxuICAgIGdldCBpc1RpbWUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZHVyYXRpb25cIik7XG4gICAgfVxuICAgIGdldCBpc0VtYWlsKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImVtYWlsXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVUkwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXJsXCIpO1xuICAgIH1cbiAgICBnZXQgaXNFbW9qaSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJlbW9qaVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVVVJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1dWlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNOQU5PSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwibmFub2lkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDVUlEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImN1aWRcIik7XG4gICAgfVxuICAgIGdldCBpc0NVSUQyKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImN1aWQyXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVTElEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInVsaWRcIik7XG4gICAgfVxuICAgIGdldCBpc0lQKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImlwXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDSURSKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImNpZHJcIik7XG4gICAgfVxuICAgIGdldCBpc0Jhc2U2NCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJiYXNlNjRcIik7XG4gICAgfVxuICAgIGdldCBpc0Jhc2U2NHVybCgpIHtcbiAgICAgICAgLy8gYmFzZTY0dXJsIGVuY29kaW5nIGlzIGEgbW9kaWZpY2F0aW9uIG9mIGJhc2U2NCB0aGF0IGNhbiBzYWZlbHkgYmUgdXNlZCBpbiBVUkxzIGFuZCBmaWxlbmFtZXNcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJiYXNlNjR1cmxcIik7XG4gICAgfVxuICAgIGdldCBtaW5MZW5ndGgoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heExlbmd0aCgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbn1cblpvZFN0cmluZy5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN0cmluZyxcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSA/PyBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM5NjY0ODQvd2h5LWRvZXMtbW9kdWx1cy1vcGVyYXRvci1yZXR1cm4tZnJhY3Rpb25hbC1udW1iZXItaW4tamF2YXNjcmlwdC8zMTcxMTAzNCMzMTcxMTAzNFxuZnVuY3Rpb24gZmxvYXRTYWZlUmVtYWluZGVyKHZhbCwgc3RlcCkge1xuICAgIGNvbnN0IHZhbERlY0NvdW50ID0gKHZhbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3Qgc3RlcERlY0NvdW50ID0gKHN0ZXAudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IGRlY0NvdW50ID0gdmFsRGVjQ291bnQgPiBzdGVwRGVjQ291bnQgPyB2YWxEZWNDb3VudCA6IHN0ZXBEZWNDb3VudDtcbiAgICBjb25zdCB2YWxJbnQgPSBOdW1iZXIucGFyc2VJbnQodmFsLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICBjb25zdCBzdGVwSW50ID0gTnVtYmVyLnBhcnNlSW50KHN0ZXAudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIHJldHVybiAodmFsSW50ICUgc3RlcEludCkgLyAxMCAqKiBkZWNDb3VudDtcbn1cbmV4cG9ydCBjbGFzcyBab2ROdW1iZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW4gPSB0aGlzLmd0ZTtcbiAgICAgICAgdGhpcy5tYXggPSB0aGlzLmx0ZTtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5tdWx0aXBsZU9mO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBOdW1iZXIoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVtYmVyLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwiaW50XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWwuaXNJbnRlZ2VyKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlZDogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPCBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPD0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA+IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA+PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxvYXRTYWZlUmVtYWluZGVyKGlucHV0LmRhdGEsIGNoZWNrLnZhbHVlKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVPZjogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJmaW5pdGVcIikge1xuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfZmluaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbnRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ucG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ubmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmaW5pdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJmaW5pdGVcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNhZmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSkuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIGdldCBpc0ludCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpbnRcIiB8fCAoY2gua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIgJiYgdXRpbC5pc0ludGVnZXIoY2gudmFsdWUpKSk7XG4gICAgfVxuICAgIGdldCBpc0Zpbml0ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcImZpbml0ZVwiIHx8IGNoLmtpbmQgPT09IFwiaW50XCIgfHwgY2gua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG1pbikgJiYgTnVtYmVyLmlzRmluaXRlKG1heCk7XG4gICAgfVxufVxuWm9kTnVtYmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVtYmVyLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlIHx8IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEJpZ0ludCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1pbiA9IHRoaXMuZ3RlO1xuICAgICAgICB0aGlzLm1heCA9IHRoaXMubHRlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJpZ0ludChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW52YWxpZElucHV0KGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJpZ2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludmFsaWRJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPCBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPD0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJpZ2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA+IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA+PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaWdpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YSAlIGNoZWNrLnZhbHVlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfZ2V0SW52YWxpZElucHV0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYmlnaW50LFxuICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgfVxuICAgIGd0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZ3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2V0TGltaXQoa2luZCwgdmFsdWUsIGluY2x1c2l2ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuY2hlY2tzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ubmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtdWx0aXBsZU9mKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pblZhbHVlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbn1cblpvZEJpZ0ludC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJpZ0ludCxcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSA/PyBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RCb29sZWFuIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gQm9vbGVhbihpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJvb2xlYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYm9vbGVhbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RCb29sZWFuLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEJvb2xlYW4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJvb2xlYW4sXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRGF0ZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IG5ldyBEYXRlKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5kYXRlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihpbnB1dC5kYXRhLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2RhdGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEuZ2V0VGltZSgpIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA+IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoaW5wdXQuZGF0YS5nZXRUaW1lKCkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REYXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1pbihtaW5EYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkRhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heERhdGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4RGF0ZS5nZXRUaW1lKCksXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluRGF0ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluICE9IG51bGwgPyBuZXcgRGF0ZShtaW4pIDogbnVsbDtcbiAgICB9XG4gICAgZ2V0IG1heERhdGUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heCAhPSBudWxsID8gbmV3IERhdGUobWF4KSA6IG51bGw7XG4gICAgfVxufVxuWm9kRGF0ZS5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2REYXRlKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSB8fCBmYWxzZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REYXRlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFN5bWJvbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN5bWJvbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kU3ltYm9sLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFN5bWJvbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3ltYm9sLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFVuZGVmaW5lZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS51bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5kZWZpbmVkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuZGVmaW5lZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5kZWZpbmVkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE51bGwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udWxsKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bGwsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kTnVsbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdWxsKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdWxsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEFueSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyB0byBwcmV2ZW50IGluc3RhbmNlcyBvZiBvdGhlciBjbGFzc2VzIGZyb20gZXh0ZW5kaW5nIFpvZEFueS4gdGhpcyBjYXVzZXMgaXNzdWVzIHdpdGggY2F0Y2hhbGwgaW4gWm9kT2JqZWN0LlxuICAgICAgICB0aGlzLl9hbnkgPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEFueS5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBbnkoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFueSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RVbmtub3duIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHJlcXVpcmVkXG4gICAgICAgIHRoaXMuX3Vua25vd24gPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVua25vd24uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5rbm93bih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5rbm93bixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROZXZlciBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5ldmVyLFxuICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgfVxufVxuWm9kTmV2ZXIuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmV2ZXIoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5ldmVyLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFZvaWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUudm9pZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RWb2lkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFZvaWQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFZvaWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQXJyYXkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHgsIHN0YXR1cyB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLmV4YWN0TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjdHguZGF0YS5sZW5ndGggPiBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogdG9vQmlnID8gWm9kSXNzdWVDb2RlLnRvb19iaWcgOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAodG9vU21hbGwgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiAodG9vQmlnID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYuZXhhY3RMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1pbkxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5taW5MZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pbkxlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pbkxlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoID4gZGVmLm1heExlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heExlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoWy4uLmN0eC5kYXRhXS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmLnR5cGUuX3BhcnNlQXN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgICAgICB9KSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gWy4uLmN0eC5kYXRhXS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VTeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHQpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiBtaW5MZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heExlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1heExlbmd0aDogeyB2YWx1ZTogbWF4TGVuZ3RoLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBleGFjdExlbmd0aDogeyB2YWx1ZTogbGVuLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblpvZEFycmF5LmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICB0eXBlOiBzY2hlbWEsXG4gICAgICAgIG1pbkxlbmd0aDogbnVsbCxcbiAgICAgICAgbWF4TGVuZ3RoOiBudWxsLFxuICAgICAgICBleGFjdExlbmd0aDogbnVsbCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBcnJheSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYSkge1xuICAgIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RPYmplY3QpIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2NoZW1hLnNoYXBlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHNjaGVtYS5zaGFwZVtrZXldO1xuICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IFpvZE9wdGlvbmFsLmNyZWF0ZShkZWVwUGFydGlhbGlmeShmaWVsZFNjaGVtYSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnNjaGVtYS5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi5zY2hlbWEuX2RlZixcbiAgICAgICAgICAgIHR5cGU6IGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS5lbGVtZW50KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZFR1cGxlKSB7XG4gICAgICAgIHJldHVybiBab2RUdXBsZS5jcmVhdGUoc2NoZW1hLml0ZW1zLm1hcCgoaXRlbSkgPT4gZGVlcFBhcnRpYWxpZnkoaXRlbSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZE9iamVjdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9jYWNoZWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgSW4gbW9zdCBjYXNlcywgdGhpcyBpcyBubyBsb25nZXIgbmVlZGVkIC0gdW5rbm93biBwcm9wZXJ0aWVzIGFyZSBub3cgc2lsZW50bHkgc3RyaXBwZWQuXG4gICAgICAgICAqIElmIHlvdSB3YW50IHRvIHBhc3MgdGhyb3VnaCB1bmtub3duIHByb3BlcnRpZXMsIHVzZSBgLnBhc3N0aHJvdWdoKClgIGluc3RlYWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5vbnN0cmljdCA9IHRoaXMucGFzc3Rocm91Z2g7XG4gICAgICAgIC8vIGV4dGVuZDxcbiAgICAgICAgLy8gICBBdWdtZW50YXRpb24gZXh0ZW5kcyBab2RSYXdTaGFwZSxcbiAgICAgICAgLy8gICBOZXdPdXRwdXQgZXh0ZW5kcyB1dGlsLmZsYXR0ZW48e1xuICAgICAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgT3V0cHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgICAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9vdXRwdXRcIl1cbiAgICAgICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgT3V0cHV0XG4gICAgICAgIC8vICAgICAgID8gT3V0cHV0W2tdXG4gICAgICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgICAgIC8vICAgfT4sXG4gICAgICAgIC8vICAgTmV3SW5wdXQgZXh0ZW5kcyB1dGlsLmZsYXR0ZW48e1xuICAgICAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgSW5wdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX2lucHV0XCJdXG4gICAgICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIElucHV0XG4gICAgICAgIC8vICAgICAgID8gSW5wdXRba11cbiAgICAgICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAgICAgLy8gICB9PlxuICAgICAgICAvLyA+KFxuICAgICAgICAvLyAgIGF1Z21lbnRhdGlvbjogQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICk6IFpvZE9iamVjdDxcbiAgICAgICAgLy8gICBleHRlbmRTaGFwZTxULCBBdWdtZW50YXRpb24+LFxuICAgICAgICAvLyAgIFVua25vd25LZXlzLFxuICAgICAgICAvLyAgIENhdGNoYWxsLFxuICAgICAgICAvLyAgIE5ld091dHB1dCxcbiAgICAgICAgLy8gICBOZXdJbnB1dFxuICAgICAgICAvLyA+IHtcbiAgICAgICAgLy8gICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIC8vICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgIC8vICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgLy8gICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgIC8vICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgVXNlIGAuZXh0ZW5kYCBpbnN0ZWFkXG4gICAgICAgICAqICAqL1xuICAgICAgICB0aGlzLmF1Z21lbnQgPSB0aGlzLmV4dGVuZDtcbiAgICB9XG4gICAgX2dldENhY2hlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlZCAhPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgICAgIGNvbnN0IGtleXMgPSB1dGlsLm9iamVjdEtleXMoc2hhcGUpO1xuICAgICAgICB0aGlzLl9jYWNoZWQgPSB7IHNoYXBlLCBrZXlzIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBrZXlzOiBzaGFwZUtleXMgfSA9IHRoaXMuX2dldENhY2hlZCgpO1xuICAgICAgICBjb25zdCBleHRyYUtleXMgPSBbXTtcbiAgICAgICAgaWYgKCEodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIgJiYgdGhpcy5fZGVmLnVua25vd25LZXlzID09PSBcInN0cmlwXCIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghc2hhcGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcGVLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWxpZGF0b3IgPSBzaGFwZVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleVZhbGlkYXRvci5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVua25vd25LZXlzID0gdGhpcy5fZGVmLnVua25vd25LZXlzO1xuICAgICAgICAgICAgaWYgKHVua25vd25LZXlzID09PSBcInBhc3N0aHJvdWdoXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogY3R4LmRhdGFba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChleHRyYUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IGV4dHJhS2V5cyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmlwXCIpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgWm9kT2JqZWN0IGVycm9yOiBpbnZhbGlkIHVua25vd25LZXlzIHZhbHVlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcnVuIGNhdGNoYWxsIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGNhdGNoYWxsID0gdGhpcy5fZGVmLmNhdGNoYWxsO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGNoYWxsLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpIC8vLCBjdHguY2hpbGQoa2V5KSwgdmFsdWUsIGdldFBhcnNlZFR5cGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3luY1BhaXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBwYWlyLmFsd2F5c1NldCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzeW5jUGFpcnM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChzeW5jUGFpcnMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgc2hhcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICB9XG4gICAgc3RyaWN0KG1lc3NhZ2UpIHtcbiAgICAgICAgZXJyb3JVdGlsLmVyclRvT2JqO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgICAgIC4uLihtZXNzYWdlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXA6IChpc3N1ZSwgY3R4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0RXJyb3IgPSB0aGlzLl9kZWYuZXJyb3JNYXA/Lihpc3N1ZSwgY3R4KS5tZXNzYWdlID8/IGN0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJ1bnJlY29nbml6ZWRfa2V5c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKS5tZXNzYWdlID8/IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0cmlwKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFzc3Rocm91Z2goKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInBhc3N0aHJvdWdoXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBjb25zdCBBdWdtZW50RmFjdG9yeSA9XG4gICAgLy8gICA8RGVmIGV4dGVuZHMgWm9kT2JqZWN0RGVmPihkZWY6IERlZikgPT5cbiAgICAvLyAgIDxBdWdtZW50YXRpb24gZXh0ZW5kcyBab2RSYXdTaGFwZT4oXG4gICAgLy8gICAgIGF1Z21lbnRhdGlvbjogQXVnbWVudGF0aW9uXG4gICAgLy8gICApOiBab2RPYmplY3Q8XG4gICAgLy8gICAgIGV4dGVuZFNoYXBlPFJldHVyblR5cGU8RGVmW1wic2hhcGVcIl0+LCBBdWdtZW50YXRpb24+LFxuICAgIC8vICAgICBEZWZbXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgICAgRGVmW1wiY2F0Y2hhbGxcIl1cbiAgICAvLyAgID4gPT4ge1xuICAgIC8vICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgICAgLi4uZGVmLFxuICAgIC8vICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgIC8vICAgICAgICAgLi4uZGVmLnNoYXBlKCksXG4gICAgLy8gICAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgLy8gICAgICAgfSksXG4gICAgLy8gICAgIH0pIGFzIGFueTtcbiAgICAvLyAgIH07XG4gICAgZXh0ZW5kKGF1Z21lbnRhdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByaW9yIHRvIHpvZEAxLjAuMTIgdGhlcmUgd2FzIGEgYnVnIGluIHRoZVxuICAgICAqIGluZmVycmVkIHR5cGUgb2YgbWVyZ2VkIG9iamVjdHMuIFBsZWFzZVxuICAgICAqIHVwZ3JhZGUgaWYgeW91IGFyZSBleHBlcmllbmNpbmcgaXNzdWVzLlxuICAgICAqL1xuICAgIG1lcmdlKG1lcmdpbmcpIHtcbiAgICAgICAgY29uc3QgbWVyZ2VkID0gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgICAgIC4uLm1lcmdpbmcuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfVxuICAgIC8vIG1lcmdlPFxuICAgIC8vICAgSW5jb21pbmcgZXh0ZW5kcyBBbnlab2RPYmplY3QsXG4gICAgLy8gICBBdWdtZW50YXRpb24gZXh0ZW5kcyBJbmNvbWluZ1tcInNoYXBlXCJdLFxuICAgIC8vICAgTmV3T3V0cHV0IGV4dGVuZHMge1xuICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBPdXRwdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfb3V0cHV0XCJdXG4gICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgT3V0cHV0XG4gICAgLy8gICAgICAgPyBPdXRwdXRba11cbiAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIE5ld0lucHV0IGV4dGVuZHMge1xuICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBJbnB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9pbnB1dFwiXVxuICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIElucHV0XG4gICAgLy8gICAgICAgPyBJbnB1dFtrXVxuICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgLy8gICB9XG4gICAgLy8gPihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogWm9kT2JqZWN0PFxuICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgUmV0dXJuVHlwZTxJbmNvbWluZ1tcIl9kZWZcIl1bXCJzaGFwZVwiXT4+LFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJjYXRjaGFsbFwiXSxcbiAgICAvLyAgIE5ld091dHB1dCxcbiAgICAvLyAgIE5ld0lucHV0XG4gICAgLy8gPiB7XG4gICAgLy8gICBjb25zdCBtZXJnZWQ6IGFueSA9IG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgIC8vICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgIC8vICAgICBzaGFwZTogKCkgPT5cbiAgICAvLyAgICAgICBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKHRoaXMuX2RlZi5zaGFwZSgpLCBtZXJnaW5nLl9kZWYuc2hhcGUoKSksXG4gICAgLy8gICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgIC8vICAgfSkgYXMgYW55O1xuICAgIC8vICAgcmV0dXJuIG1lcmdlZDtcbiAgICAvLyB9XG4gICAgc2V0S2V5KGtleSwgc2NoZW1hKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1Z21lbnQoeyBba2V5XTogc2NoZW1hIH0pO1xuICAgIH1cbiAgICAvLyBtZXJnZTxJbmNvbWluZyBleHRlbmRzIEFueVpvZE9iamVjdD4oXG4gICAgLy8gICBtZXJnaW5nOiBJbmNvbWluZ1xuICAgIC8vICk6IC8vWm9kT2JqZWN0PFQgJiBJbmNvbWluZ1tcIl9zaGFwZVwiXSwgVW5rbm93bktleXMsIENhdGNoYWxsPiA9IChtZXJnaW5nKSA9PiB7XG4gICAgLy8gWm9kT2JqZWN0PFxuICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgUmV0dXJuVHlwZTxJbmNvbWluZ1tcIl9kZWZcIl1bXCJzaGFwZVwiXT4+LFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJjYXRjaGFsbFwiXVxuICAgIC8vID4ge1xuICAgIC8vICAgLy8gY29uc3QgbWVyZ2VkU2hhcGUgPSBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKFxuICAgIC8vICAgLy8gICB0aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAvLyAgIC8vICAgbWVyZ2luZy5fZGVmLnNoYXBlKClcbiAgICAvLyAgIC8vICk7XG4gICAgLy8gICBjb25zdCBtZXJnZWQ6IGFueSA9IG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgIC8vICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgIC8vICAgICBzaGFwZTogKCkgPT5cbiAgICAvLyAgICAgICBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKHRoaXMuX2RlZi5zaGFwZSgpLCBtZXJnaW5nLl9kZWYuc2hhcGUoKSksXG4gICAgLy8gICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgIC8vICAgfSkgYXMgYW55O1xuICAgIC8vICAgcmV0dXJuIG1lcmdlZDtcbiAgICAvLyB9XG4gICAgY2F0Y2hhbGwoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGljayhtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyhtYXNrKSkge1xuICAgICAgICAgICAgaWYgKG1hc2tba2V5XSAmJiB0aGlzLnNoYXBlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9taXQobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpIHtcbiAgICAgICAgICAgIGlmICghbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIGRlZXBQYXJ0aWFsKCkge1xuICAgICAgICByZXR1cm4gZGVlcFBhcnRpYWxpZnkodGhpcyk7XG4gICAgfVxuICAgIHBhcnRpYWwobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBmaWVsZFNjaGVtYS5vcHRpb25hbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlcXVpcmVkKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKSB7XG4gICAgICAgICAgICBpZiAobWFzayAmJiAhbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZCA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdGaWVsZCBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBuZXdGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrZXlvZigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVpvZEVudW0odXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKTtcbiAgICB9XG59XG5ab2RPYmplY3QuY3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5zdHJpY3RDcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5sYXp5Y3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFVuaW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3VsdHMocmVzdWx0cykge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZpcnN0IGlzc3VlLWZyZWUgdmFsaWRhdGlvbiBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGlzc3VlcyBmcm9tIGRpcnR5IG9wdGlvblxuICAgICAgICAgICAgICAgICAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKC4uLnJlc3VsdC5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiBpbnZhbGlkXG4gICAgICAgICAgICBjb25zdCB1bmlvbkVycm9ycyA9IHJlc3VsdHMubWFwKChyZXN1bHQpID0+IG5ldyBab2RFcnJvcihyZXN1bHQuY3R4LmNvbW1vbi5pc3N1ZXMpKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uLFxuICAgICAgICAgICAgICAgIHVuaW9uRXJyb3JzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG9wdGlvbnMubWFwKGFzeW5jIChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGF3YWl0IG9wdGlvbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGN0eDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKS50aGVuKGhhbmRsZVJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpcnR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaXNzdWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIgJiYgIWRpcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcnR5ID0geyByZXN1bHQsIGN0eDogY2hpbGRDdHggfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3Vlcy5wdXNoKGNoaWxkQ3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4uZGlydHkuY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXJ0eS5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1bmlvbkVycm9ycyA9IGlzc3Vlcy5tYXAoKGlzc3VlcykgPT4gbmV3IFpvZEVycm9yKGlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxufVxuWm9kVW5pb24uY3JlYXRlID0gKHR5cGVzLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuaW9uKHtcbiAgICAgICAgb3B0aW9uczogdHlwZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5pb24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgWm9kRGlzY3JpbWluYXRlZFVuaW9uICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgZ2V0RGlzY3JpbWluYXRvciA9ICh0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RMYXp5KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuc2NoZW1hKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVmZmVjdHMpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5pbm5lclR5cGUoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RMaXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBbdHlwZS52YWx1ZV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RFbnVtKSB7XG4gICAgICAgIHJldHVybiB0eXBlLm9wdGlvbnM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROYXRpdmVFbnVtKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiYW4vYmFuXG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyh0eXBlLmVudW0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLl9kZWYuaW5uZXJUeXBlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZFVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROdWxsKSB7XG4gICAgICAgIHJldHVybiBbbnVsbF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgLi4uZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROdWxsYWJsZSkge1xuICAgICAgICByZXR1cm4gW251bGwsIC4uLmdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSldO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kQnJhbmRlZCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZFJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kQ2F0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5fZGVmLmlubmVyVHlwZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufTtcbmV4cG9ydCBjbGFzcyBab2REaXNjcmltaW5hdGVkVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvciA9IHRoaXMuZGlzY3JpbWluYXRvcjtcbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlID0gY3R4LmRhdGFbZGlzY3JpbWluYXRvcl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9uc01hcC5nZXQoZGlzY3JpbWluYXRvclZhbHVlKTtcbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNNYXAua2V5cygpKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBbZGlzY3JpbWluYXRvcl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRpc2NyaW1pbmF0b3I7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnNNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZGlzY3JpbWluYXRlZCB1bmlvbiBzY2hlbWEuIEl0cyBiZWhhdmlvdXIgaXMgdmVyeSBzaW1pbGFyIHRvIHRoYXQgb2YgdGhlIG5vcm1hbCB6LnVuaW9uKCkgY29uc3RydWN0b3IuXG4gICAgICogSG93ZXZlciwgaXQgb25seSBhbGxvd3MgYSB1bmlvbiBvZiBvYmplY3RzLCBhbGwgb2Ygd2hpY2ggbmVlZCB0byBzaGFyZSBhIGRpc2NyaW1pbmF0b3IgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgbXVzdFxuICAgICAqIGhhdmUgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSB1bmlvbi5cbiAgICAgKiBAcGFyYW0gZGlzY3JpbWluYXRvciB0aGUgbmFtZSBvZiB0aGUgZGlzY3JpbWluYXRvciBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB0eXBlcyBhbiBhcnJheSBvZiBvYmplY3Qgc2NoZW1hc1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRpc2NyaW1pbmF0b3IsIG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgICAvLyBHZXQgYWxsIHRoZSB2YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlc1xuICAgICAgICBjb25zdCBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlcyA9IGdldERpc2NyaW1pbmF0b3IodHlwZS5zaGFwZVtkaXNjcmltaW5hdG9yXSk7XG4gICAgICAgICAgICBpZiAoIWRpc2NyaW1pbmF0b3JWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIGRpc2NyaW1pbmF0b3IgdmFsdWUgZm9yIGtleSBcXGAke2Rpc2NyaW1pbmF0b3J9XFxgIGNvdWxkIG5vdCBiZSBleHRyYWN0ZWQgZnJvbSBhbGwgc2NoZW1hIG9wdGlvbnNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZGlzY3JpbWluYXRvclZhbHVlcykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zTWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaXNjcmltaW5hdG9yIHByb3BlcnR5ICR7U3RyaW5nKGRpc2NyaW1pbmF0b3IpfSBoYXMgZHVwbGljYXRlIHZhbHVlICR7U3RyaW5nKHZhbHVlKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9uc01hcC5zZXQodmFsdWUsIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGlzY3JpbWluYXRlZFVuaW9uKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGlzY3JpbWluYXRlZFVuaW9uLFxuICAgICAgICAgICAgZGlzY3JpbWluYXRvcixcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zTWFwLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtZXJnZVZhbHVlcyhhLCBiKSB7XG4gICAgY29uc3QgYVR5cGUgPSBnZXRQYXJzZWRUeXBlKGEpO1xuICAgIGNvbnN0IGJUeXBlID0gZ2V0UGFyc2VkVHlwZShiKTtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogYSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGJLZXlzID0gdXRpbC5vYmplY3RLZXlzKGIpO1xuICAgICAgICBjb25zdCBzaGFyZWRLZXlzID0gdXRpbC5vYmplY3RLZXlzKGEpLmZpbHRlcigoa2V5KSA9PiBiS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICAgICAgY29uc3QgbmV3T2JqID0geyAuLi5hLCAuLi5iIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXJlZEtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBzaGFyZWRWYWx1ZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdPYmogfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQSA9IGFbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgaXRlbUIgPSBiW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoaXRlbUEsIGl0ZW1CKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2hhcmVkVmFsdWUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld0FycmF5IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJiArYSA9PT0gK2IpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RJbnRlcnNlY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgaGFuZGxlUGFyc2VkID0gKHBhcnNlZExlZnQsIHBhcnNlZFJpZ2h0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNBYm9ydGVkKHBhcnNlZExlZnQpIHx8IGlzQWJvcnRlZChwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlVmFsdWVzKHBhcnNlZExlZnQudmFsdWUsIHBhcnNlZFJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmICghbWVyZ2VkLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RpcnR5KHBhcnNlZExlZnQpIHx8IGlzRGlydHkocGFyc2VkUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IG1lcmdlZC5kYXRhIH07XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5sZWZ0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWYucmlnaHQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSkudGhlbigoW2xlZnQsIHJpZ2h0XSkgPT4gaGFuZGxlUGFyc2VkKGxlZnQsIHJpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUGFyc2VkKHRoaXMuX2RlZi5sZWZ0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSksIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZEludGVyc2VjdGlvbi5jcmVhdGUgPSAobGVmdCwgcmlnaHQsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEludGVyc2VjdGlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vIHR5cGUgWm9kVHVwbGVJdGVtcyA9IFtab2RUeXBlQW55LCAuLi5ab2RUeXBlQW55W11dO1xuZXhwb3J0IGNsYXNzIFpvZFR1cGxlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPCB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3QgPSB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgaWYgKCFyZXN0ICYmIGN0eC5kYXRhLmxlbmd0aCA+IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgIG1heGltdW06IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gWy4uLmN0eC5kYXRhXVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLl9kZWYuaXRlbXNbaXRlbUluZGV4XSB8fCB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgICAgIGlmICghc2NoZW1hKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpdGVtSW5kZXgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+ICEheCk7IC8vIGZpbHRlciBudWxsc1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCBpdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLml0ZW1zO1xuICAgIH1cbiAgICByZXN0KHJlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXN0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RUdXBsZS5jcmVhdGUgPSAoc2NoZW1hcywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgb2Ygc2NoZW1hcyB0byB6LnR1cGxlKFsgLi4uIF0pXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgaXRlbXM6IHNjaGVtYXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVHVwbGUsXG4gICAgICAgIHJlc3Q6IG51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kUmVjb3JkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IGtleVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgIH1cbiAgICBnZXQgdmFsdWVTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBrZXksIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgY3R4LmRhdGFba2V5XSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdEFzeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoZmlyc3QsIHNlY29uZCwgdGhpcmQpIHtcbiAgICAgICAgaWYgKHNlY29uZCBpbnN0YW5jZW9mIFpvZFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgWm9kUmVjb3JkKHtcbiAgICAgICAgICAgICAgICBrZXlUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgICAgICB2YWx1ZVR5cGU6IHNlY29uZCxcbiAgICAgICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlY29yZCxcbiAgICAgICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXJkKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kUmVjb3JkKHtcbiAgICAgICAgICAgIGtleVR5cGU6IFpvZFN0cmluZy5jcmVhdGUoKSxcbiAgICAgICAgICAgIHZhbHVlVHlwZTogZmlyc3QsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlY29yZCxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMoc2Vjb25kKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZE1hcCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5tYXApIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubWFwLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBjb25zdCBwYWlycyA9IFsuLi5jdHguZGF0YS5lbnRyaWVzKCldLm1hcCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBrZXksIGN0eC5wYXRoLCBbaW5kZXgsIFwia2V5XCJdKSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwgW2luZGV4LCBcInZhbHVlXCJdKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsTWFwIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsTWFwIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5ab2RNYXAuY3JlYXRlID0gKGtleVR5cGUsIHZhbHVlVHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RNYXAoe1xuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIGtleVR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTWFwLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFNldCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc2V0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnNldCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGRlZi5taW5TaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA8IGRlZi5taW5TaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5TaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pblNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heFNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplID4gZGVmLm1heFNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhTaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heFNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmdW5jdGlvbiBmaW5hbGl6ZVNldChlbGVtZW50cykge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHBhcnNlZFNldC5hZGQoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHBhcnNlZFNldCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gWy4uLmN0eC5kYXRhLnZhbHVlcygpXS5tYXAoKGl0ZW0sIGkpID0+IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSkpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGVsZW1lbnRzKS50aGVuKChlbGVtZW50cykgPT4gZmluYWxpemVTZXQoZWxlbWVudHMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbGl6ZVNldChlbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWluKG1pblNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluU2l6ZTogeyB2YWx1ZTogbWluU2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4U2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhTaXplOiB7IHZhbHVlOiBtYXhTaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpemUoc2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oc2l6ZSwgbWVzc2FnZSkubWF4KHNpemUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RTZXQuY3JlYXRlID0gKHZhbHVlVHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIG1pblNpemU6IG51bGwsXG4gICAgICAgIG1heFNpemU6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU2V0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEZ1bmN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLmltcGxlbWVudDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlQXJnc0lzc3VlKGFyZ3MsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW2N0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCBjdHguc2NoZW1hRXJyb3JNYXAsIGdldEVycm9yTWFwKCksIGRlZmF1bHRFcnJvck1hcF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9hcmd1bWVudHMsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c0Vycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZVJldHVybnNJc3N1ZShyZXR1cm5zLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogcmV0dXJucyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCwgY3R4LnNjaGVtYUVycm9yTWFwLCBnZXRFcnJvck1hcCgpLCBkZWZhdWx0RXJyb3JNYXBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfcmV0dXJuX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblR5cGVFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwIH07XG4gICAgICAgIGNvbnN0IGZuID0gY3R4LmRhdGE7XG4gICAgICAgIGlmICh0aGlzLl9kZWYucmV0dXJucyBpbnN0YW5jZW9mIFpvZFByb21pc2UpIHtcbiAgICAgICAgICAgIC8vIFdvdWxkIGxvdmUgYSB3YXkgdG8gYXZvaWQgZGlzYWJsaW5nIHRoaXMgcnVsZSwgYnV0IHdlIG5lZWRcbiAgICAgICAgICAgIC8vIGFuIGFsaWFzICh1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB3YXMgd2hhdCBjYXVzZWQgMjY1MSkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBPSyhhc3luYyBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKFtdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gYXdhaXQgbWUuX2RlZi5hcmdzLnBhcnNlQXN5bmMoYXJncywgcGFyYW1zKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlQXJnc0lzc3VlKGFyZ3MsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUmVmbGVjdC5hcHBseShmbiwgdGhpcywgcGFyc2VkQXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IGF3YWl0IG1lLl9kZWYucmV0dXJucy5fZGVmLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgLnBhcnNlQXN5bmMocmVzdWx0LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gV291bGQgbG92ZSBhIHdheSB0byBhdm9pZCBkaXNhYmxpbmcgdGhpcyBydWxlLCBidXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gYW4gYWxpYXMgKHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHdhcyB3aGF0IGNhdXNlZCAyNjUxKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9LKGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IG1lLl9kZWYuYXJncy5zYWZlUGFyc2UoYXJncywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZEFyZ3Muc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VBcmdzSXNzdWUoYXJncywgcGFyc2VkQXJncy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5hcHBseShmbiwgdGhpcywgcGFyc2VkQXJncy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gbWUuX2RlZi5yZXR1cm5zLnNhZmVQYXJzZShyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSZXR1cm5zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgcGFyc2VkUmV0dXJucy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuYXJncztcbiAgICB9XG4gICAgcmV0dXJuVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5yZXR1cm5zO1xuICAgIH1cbiAgICBhcmdzKC4uLml0ZW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgYXJnczogWm9kVHVwbGUuY3JlYXRlKGl0ZW1zKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJucyhyZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJuVHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RyaWN0SW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGFyZ3MsIHJldHVybnMsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIGFyZ3M6IChhcmdzID8gYXJncyA6IFpvZFR1cGxlLmNyZWF0ZShbXSkucmVzdChab2RVbmtub3duLmNyZWF0ZSgpKSksXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5zIHx8IFpvZFVua25vd24uY3JlYXRlKCksXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEZ1bmN0aW9uLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kTGF6eSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgbGF6eVNjaGVtYSA9IHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICAgICAgcmV0dXJuIGxhenlTY2hlbWEuX3BhcnNlKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICB9XG59XG5ab2RMYXp5LmNyZWF0ZSA9IChnZXR0ZXIsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGF6eSh7XG4gICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExhenksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTGl0ZXJhbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQuZGF0YSAhPT0gdGhpcy5fZGVmLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfbGl0ZXJhbCxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdGhpcy5fZGVmLnZhbHVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlO1xuICAgIH1cbn1cblpvZExpdGVyYWwuY3JlYXRlID0gKHZhbHVlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZExpdGVyYWwoe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGl0ZXJhbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZVpvZEVudW0odmFsdWVzLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZEVudW0oe1xuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuZXhwb3J0IGNsYXNzIFpvZEVudW0gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dC5kYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBuZXcgU2V0KHRoaXMuX2RlZi52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUuaGFzKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleHBlY3RlZFZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgfVxuICAgIGdldCBlbnVtKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZ2V0IFZhbHVlcygpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBFbnVtKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZXh0cmFjdCh2YWx1ZXMsIG5ld0RlZiA9IHRoaXMuX2RlZikge1xuICAgICAgICByZXR1cm4gWm9kRW51bS5jcmVhdGUodmFsdWVzLCB7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICAuLi5uZXdEZWYsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBleGNsdWRlKHZhbHVlcywgbmV3RGVmID0gdGhpcy5fZGVmKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHQpID0+ICF2YWx1ZXMuaW5jbHVkZXMob3B0KSksIHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIC4uLm5ld0RlZixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuWm9kRW51bS5jcmVhdGUgPSBjcmVhdGVab2RFbnVtO1xuZXhwb3J0IGNsYXNzIFpvZE5hdGl2ZUVudW0gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgbmF0aXZlRW51bVZhbHVlcyA9IHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzKHRoaXMuX2RlZi52YWx1ZXMpO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zdHJpbmcgJiYgY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlID0gbmV3IFNldCh1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleHBlY3RlZFZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgfVxufVxuWm9kTmF0aXZlRW51bS5jcmVhdGUgPSAodmFsdWVzLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hdGl2ZUVudW0oe1xuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROYXRpdmVFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFByb21pc2UgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUucHJvbWlzZSAmJiBjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5wcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlID8gY3R4LmRhdGEgOiBQcm9taXNlLnJlc29sdmUoY3R4LmRhdGEpO1xuICAgICAgICByZXR1cm4gT0socHJvbWlzaWZpZWQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlLnBhcnNlQXN5bmMoZGF0YSwge1xuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuWm9kUHJvbWlzZS5jcmVhdGUgPSAoc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFByb21pc2Uoe1xuICAgICAgICB0eXBlOiBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUHJvbWlzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RFZmZlY3RzIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgaW5uZXJUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYTtcbiAgICB9XG4gICAgc291cmNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX2RlZi50eXBlTmFtZSA9PT0gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHNcbiAgICAgICAgICAgID8gdGhpcy5fZGVmLnNjaGVtYS5zb3VyY2VUeXBlKClcbiAgICAgICAgICAgIDogdGhpcy5fZGVmLnNjaGVtYTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IHRoaXMuX2RlZi5lZmZlY3QgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgY2hlY2tDdHggPSB7XG4gICAgICAgICAgICBhZGRJc3N1ZTogKGFyZykgPT4ge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwgYXJnKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJnLmZhdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldCBwYXRoKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHgucGF0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNoZWNrQ3R4LmFkZElzc3VlID0gY2hlY2tDdHguYWRkSXNzdWUuYmluZChjaGVja0N0eCk7XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJwcmVwcm9jZXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGVmZmVjdC50cmFuc2Zvcm0oY3R4LmRhdGEsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9jZXNzZWQpLnRoZW4oYXN5bmMgKHByb2Nlc3NlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicmVmaW5lbWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlUmVmaW5lbWVudCA9IChhY2MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QucmVmaW5lbWVudChhY2MsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzeW5jIHJlZmluZW1lbnQgZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdmFsdWUgaXMgaWdub3JlZFxuICAgICAgICAgICAgICAgIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSkudGhlbigoaW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGJhc2UpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFzeW5jaHJvbm91cyB0cmFuc2Zvcm0gZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcmVzdWx0IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSkudGhlbigoYmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KSkudGhlbigocmVzdWx0KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXRpbC5hc3NlcnROZXZlcihlZmZlY3QpO1xuICAgIH1cbn1cblpvZEVmZmVjdHMuY3JlYXRlID0gKHNjaGVtYSwgZWZmZWN0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgZWZmZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcyA9IChwcmVwcm9jZXNzLCBzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicHJlcHJvY2Vzc1wiLCB0cmFuc2Zvcm06IHByZXByb2Nlc3MgfSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IHsgWm9kRWZmZWN0cyBhcyBab2RUcmFuc2Zvcm1lciB9O1xuZXhwb3J0IGNsYXNzIFpvZE9wdGlvbmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gT0sodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE9wdGlvbmFsLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9wdGlvbmFsKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9wdGlvbmFsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE51bGxhYmxlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kTnVsbGFibGUuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbGFibGUoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbGFibGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRGVmYXVsdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2REZWZhdWx0LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0eXBlb2YgcGFyYW1zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcy5kZWZhdWx0IDogKCkgPT4gcGFyYW1zLmRlZmF1bHQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQ2F0Y2ggZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIC8vIG5ld0N0eCBpcyB1c2VkIHRvIG5vdCBjb2xsZWN0IGlzc3VlcyBmcm9tIGlubmVyIHR5cGVzIGluIGN0eFxuICAgICAgICBjb25zdCBuZXdDdHggPSB7XG4gICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhOiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IG5ld0N0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgICAgICAgLi4ubmV3Q3R4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9kRXJyb3IobmV3Q3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwidmFsaWRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGVmLmNhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9kRXJyb3IobmV3Q3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RDYXRjaC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RDYXRjaCxcbiAgICAgICAgY2F0Y2hWYWx1ZTogdHlwZW9mIHBhcmFtcy5jYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zLmNhdGNoIDogKCkgPT4gcGFyYW1zLmNhdGNoLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE5hTiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm5hbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5uYW4sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG59XG5ab2ROYU4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmFOKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROYU4sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgQlJBTkQgPSBTeW1ib2woXCJ6b2RfYnJhbmRcIik7XG5leHBvcnQgY2xhc3MgWm9kQnJhbmRlZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZFBpcGVsaW5lIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVBc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IGF3YWl0IHRoaXMuX2RlZi5pbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKGluUmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVBc3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSB0aGlzLl9kZWYuaW4uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcImRpcnR5XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kUGlwZWxpbmUoe1xuICAgICAgICAgICAgaW46IGEsXG4gICAgICAgICAgICBvdXQ6IGIsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFBpcGVsaW5lLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kUmVhZG9ubHkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgICAgICBjb25zdCBmcmVlemUgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gT2JqZWN0LmZyZWV6ZShkYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaXNBc3luYyhyZXN1bHQpID8gcmVzdWx0LnRoZW4oKGRhdGEpID0+IGZyZWV6ZShkYXRhKSkgOiBmcmVlemUocmVzdWx0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RSZWFkb25seS5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RSZWFkb25seSh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWFkb25seSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICB6LmN1c3RvbSAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmZ1bmN0aW9uIGNsZWFuUGFyYW1zKHBhcmFtcywgZGF0YSkge1xuICAgIGNvbnN0IHAgPSB0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMoZGF0YSkgOiB0eXBlb2YgcGFyYW1zID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlOiBwYXJhbXMgfSA6IHBhcmFtcztcbiAgICBjb25zdCBwMiA9IHR5cGVvZiBwID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlOiBwIH0gOiBwO1xuICAgIHJldHVybiBwMjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b20oY2hlY2ssIF9wYXJhbXMgPSB7fSwgXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogUGFzcyBgZmF0YWxgIGludG8gdGhlIHBhcmFtcyBvYmplY3QgaW5zdGVhZDpcbiAqXG4gKiBgYGB0c1xuICogei5zdHJpbmcoKS5jdXN0b20oKHZhbCkgPT4gdmFsLmxlbmd0aCA+IDUsIHsgZmF0YWw6IGZhbHNlIH0pXG4gKiBgYGBcbiAqXG4gKi9cbmZhdGFsKSB7XG4gICAgaWYgKGNoZWNrKVxuICAgICAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpLnN1cGVyUmVmaW5lKChkYXRhLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBjaGVjayhkYXRhKTtcbiAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBjbGVhblBhcmFtcyhfcGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9mYXRhbCA9IHBhcmFtcy5mYXRhbCA/PyBmYXRhbCA/PyB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHsgY29kZTogXCJjdXN0b21cIiwgLi4ucGFyYW1zLCBmYXRhbDogX2ZhdGFsIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBjbGVhblBhcmFtcyhfcGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBfZmF0YWwgPSBwYXJhbXMuZmF0YWwgPz8gZmF0YWwgPz8gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wYXJhbXMsIGZhdGFsOiBfZmF0YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCk7XG59XG5leHBvcnQgeyBab2RUeXBlIGFzIFNjaGVtYSwgWm9kVHlwZSBhcyBab2RTY2hlbWEgfTtcbmV4cG9ydCBjb25zdCBsYXRlID0ge1xuICAgIG9iamVjdDogWm9kT2JqZWN0LmxhenljcmVhdGUsXG59O1xuZXhwb3J0IHZhciBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7XG4oZnVuY3Rpb24gKFpvZEZpcnN0UGFydHlUeXBlS2luZCkge1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN0cmluZ1wiXSA9IFwiWm9kU3RyaW5nXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVtYmVyXCJdID0gXCJab2ROdW1iZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYU5cIl0gPSBcIlpvZE5hTlwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJpZ0ludFwiXSA9IFwiWm9kQmlnSW50XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQm9vbGVhblwiXSA9IFwiWm9kQm9vbGVhblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERhdGVcIl0gPSBcIlpvZERhdGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTeW1ib2xcIl0gPSBcIlpvZFN5bWJvbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuZGVmaW5lZFwiXSA9IFwiWm9kVW5kZWZpbmVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbFwiXSA9IFwiWm9kTnVsbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFueVwiXSA9IFwiWm9kQW55XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5rbm93blwiXSA9IFwiWm9kVW5rbm93blwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5ldmVyXCJdID0gXCJab2ROZXZlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFZvaWRcIl0gPSBcIlpvZFZvaWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBcnJheVwiXSA9IFwiWm9kQXJyYXlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPYmplY3RcIl0gPSBcIlpvZE9iamVjdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuaW9uXCJdID0gXCJab2RVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiXSA9IFwiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kSW50ZXJzZWN0aW9uXCJdID0gXCJab2RJbnRlcnNlY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RUdXBsZVwiXSA9IFwiWm9kVHVwbGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWNvcmRcIl0gPSBcIlpvZFJlY29yZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE1hcFwiXSA9IFwiWm9kTWFwXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU2V0XCJdID0gXCJab2RTZXRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RGdW5jdGlvblwiXSA9IFwiWm9kRnVuY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMYXp5XCJdID0gXCJab2RMYXp5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGl0ZXJhbFwiXSA9IFwiWm9kTGl0ZXJhbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVudW1cIl0gPSBcIlpvZEVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFZmZlY3RzXCJdID0gXCJab2RFZmZlY3RzXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmF0aXZlRW51bVwiXSA9IFwiWm9kTmF0aXZlRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9wdGlvbmFsXCJdID0gXCJab2RPcHRpb25hbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxhYmxlXCJdID0gXCJab2ROdWxsYWJsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERlZmF1bHRcIl0gPSBcIlpvZERlZmF1bHRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RDYXRjaFwiXSA9IFwiWm9kQ2F0Y2hcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQcm9taXNlXCJdID0gXCJab2RQcm9taXNlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQnJhbmRlZFwiXSA9IFwiWm9kQnJhbmRlZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFBpcGVsaW5lXCJdID0gXCJab2RQaXBlbGluZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFJlYWRvbmx5XCJdID0gXCJab2RSZWFkb25seVwiO1xufSkoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIHx8IChab2RGaXJzdFBhcnR5VHlwZUtpbmQgPSB7fSkpO1xuLy8gcmVxdWlyZXMgVFMgNC40K1xuY2xhc3MgQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKC4uLl8pIHsgfVxufVxuY29uc3QgaW5zdGFuY2VPZlR5cGUgPSAoXG4vLyBjb25zdCBpbnN0YW5jZU9mVHlwZSA9IDxUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcbmNscywgcGFyYW1zID0ge1xuICAgIG1lc3NhZ2U6IGBJbnB1dCBub3QgaW5zdGFuY2Ugb2YgJHtjbHMubmFtZX1gLFxufSkgPT4gY3VzdG9tKChkYXRhKSA9PiBkYXRhIGluc3RhbmNlb2YgY2xzLCBwYXJhbXMpO1xuY29uc3Qgc3RyaW5nVHlwZSA9IFpvZFN0cmluZy5jcmVhdGU7XG5jb25zdCBudW1iZXJUeXBlID0gWm9kTnVtYmVyLmNyZWF0ZTtcbmNvbnN0IG5hblR5cGUgPSBab2ROYU4uY3JlYXRlO1xuY29uc3QgYmlnSW50VHlwZSA9IFpvZEJpZ0ludC5jcmVhdGU7XG5jb25zdCBib29sZWFuVHlwZSA9IFpvZEJvb2xlYW4uY3JlYXRlO1xuY29uc3QgZGF0ZVR5cGUgPSBab2REYXRlLmNyZWF0ZTtcbmNvbnN0IHN5bWJvbFR5cGUgPSBab2RTeW1ib2wuY3JlYXRlO1xuY29uc3QgdW5kZWZpbmVkVHlwZSA9IFpvZFVuZGVmaW5lZC5jcmVhdGU7XG5jb25zdCBudWxsVHlwZSA9IFpvZE51bGwuY3JlYXRlO1xuY29uc3QgYW55VHlwZSA9IFpvZEFueS5jcmVhdGU7XG5jb25zdCB1bmtub3duVHlwZSA9IFpvZFVua25vd24uY3JlYXRlO1xuY29uc3QgbmV2ZXJUeXBlID0gWm9kTmV2ZXIuY3JlYXRlO1xuY29uc3Qgdm9pZFR5cGUgPSBab2RWb2lkLmNyZWF0ZTtcbmNvbnN0IGFycmF5VHlwZSA9IFpvZEFycmF5LmNyZWF0ZTtcbmNvbnN0IG9iamVjdFR5cGUgPSBab2RPYmplY3QuY3JlYXRlO1xuY29uc3Qgc3RyaWN0T2JqZWN0VHlwZSA9IFpvZE9iamVjdC5zdHJpY3RDcmVhdGU7XG5jb25zdCB1bmlvblR5cGUgPSBab2RVbmlvbi5jcmVhdGU7XG5jb25zdCBkaXNjcmltaW5hdGVkVW5pb25UeXBlID0gWm9kRGlzY3JpbWluYXRlZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGludGVyc2VjdGlvblR5cGUgPSBab2RJbnRlcnNlY3Rpb24uY3JlYXRlO1xuY29uc3QgdHVwbGVUeXBlID0gWm9kVHVwbGUuY3JlYXRlO1xuY29uc3QgcmVjb3JkVHlwZSA9IFpvZFJlY29yZC5jcmVhdGU7XG5jb25zdCBtYXBUeXBlID0gWm9kTWFwLmNyZWF0ZTtcbmNvbnN0IHNldFR5cGUgPSBab2RTZXQuY3JlYXRlO1xuY29uc3QgZnVuY3Rpb25UeXBlID0gWm9kRnVuY3Rpb24uY3JlYXRlO1xuY29uc3QgbGF6eVR5cGUgPSBab2RMYXp5LmNyZWF0ZTtcbmNvbnN0IGxpdGVyYWxUeXBlID0gWm9kTGl0ZXJhbC5jcmVhdGU7XG5jb25zdCBlbnVtVHlwZSA9IFpvZEVudW0uY3JlYXRlO1xuY29uc3QgbmF0aXZlRW51bVR5cGUgPSBab2ROYXRpdmVFbnVtLmNyZWF0ZTtcbmNvbnN0IHByb21pc2VUeXBlID0gWm9kUHJvbWlzZS5jcmVhdGU7XG5jb25zdCBlZmZlY3RzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlO1xuY29uc3Qgb3B0aW9uYWxUeXBlID0gWm9kT3B0aW9uYWwuY3JlYXRlO1xuY29uc3QgbnVsbGFibGVUeXBlID0gWm9kTnVsbGFibGUuY3JlYXRlO1xuY29uc3QgcHJlcHJvY2Vzc1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzO1xuY29uc3QgcGlwZWxpbmVUeXBlID0gWm9kUGlwZWxpbmUuY3JlYXRlO1xuY29uc3Qgb3N0cmluZyA9ICgpID0+IHN0cmluZ1R5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb251bWJlciA9ICgpID0+IG51bWJlclR5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb2Jvb2xlYW4gPSAoKSA9PiBib29sZWFuVHlwZSgpLm9wdGlvbmFsKCk7XG5leHBvcnQgY29uc3QgY29lcmNlID0ge1xuICAgIHN0cmluZzogKChhcmcpID0+IFpvZFN0cmluZy5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgbnVtYmVyOiAoKGFyZykgPT4gWm9kTnVtYmVyLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBib29sZWFuOiAoKGFyZykgPT4gWm9kQm9vbGVhbi5jcmVhdGUoe1xuICAgICAgICAuLi5hcmcsXG4gICAgICAgIGNvZXJjZTogdHJ1ZSxcbiAgICB9KSksXG4gICAgYmlnaW50OiAoKGFyZykgPT4gWm9kQmlnSW50LmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBkYXRlOiAoKGFyZykgPT4gWm9kRGF0ZS5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG59O1xuZXhwb3J0IHsgYW55VHlwZSBhcyBhbnksIGFycmF5VHlwZSBhcyBhcnJheSwgYmlnSW50VHlwZSBhcyBiaWdpbnQsIGJvb2xlYW5UeXBlIGFzIGJvb2xlYW4sIGRhdGVUeXBlIGFzIGRhdGUsIGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgYXMgZGlzY3JpbWluYXRlZFVuaW9uLCBlZmZlY3RzVHlwZSBhcyBlZmZlY3QsIGVudW1UeXBlIGFzIGVudW0sIGZ1bmN0aW9uVHlwZSBhcyBmdW5jdGlvbiwgaW5zdGFuY2VPZlR5cGUgYXMgaW5zdGFuY2VvZiwgaW50ZXJzZWN0aW9uVHlwZSBhcyBpbnRlcnNlY3Rpb24sIGxhenlUeXBlIGFzIGxhenksIGxpdGVyYWxUeXBlIGFzIGxpdGVyYWwsIG1hcFR5cGUgYXMgbWFwLCBuYW5UeXBlIGFzIG5hbiwgbmF0aXZlRW51bVR5cGUgYXMgbmF0aXZlRW51bSwgbmV2ZXJUeXBlIGFzIG5ldmVyLCBudWxsVHlwZSBhcyBudWxsLCBudWxsYWJsZVR5cGUgYXMgbnVsbGFibGUsIG51bWJlclR5cGUgYXMgbnVtYmVyLCBvYmplY3RUeXBlIGFzIG9iamVjdCwgb2Jvb2xlYW4sIG9udW1iZXIsIG9wdGlvbmFsVHlwZSBhcyBvcHRpb25hbCwgb3N0cmluZywgcGlwZWxpbmVUeXBlIGFzIHBpcGVsaW5lLCBwcmVwcm9jZXNzVHlwZSBhcyBwcmVwcm9jZXNzLCBwcm9taXNlVHlwZSBhcyBwcm9taXNlLCByZWNvcmRUeXBlIGFzIHJlY29yZCwgc2V0VHlwZSBhcyBzZXQsIHN0cmljdE9iamVjdFR5cGUgYXMgc3RyaWN0T2JqZWN0LCBzdHJpbmdUeXBlIGFzIHN0cmluZywgc3ltYm9sVHlwZSBhcyBzeW1ib2wsIGVmZmVjdHNUeXBlIGFzIHRyYW5zZm9ybWVyLCB0dXBsZVR5cGUgYXMgdHVwbGUsIHVuZGVmaW5lZFR5cGUgYXMgdW5kZWZpbmVkLCB1bmlvblR5cGUgYXMgdW5pb24sIHVua25vd25UeXBlIGFzIHVua25vd24sIHZvaWRUeXBlIGFzIHZvaWQsIH07XG5leHBvcnQgY29uc3QgTkVWRVIgPSBJTlZBTElEO1xuIiwiLyoqXG4gKiBNZXNzYWdpbmcgcHJvdG9jb2wgZm9yIENhbG1XZWJcbiAqXG4gKiBEZWZpbmVzIG1lc3NhZ2UgdHlwZXMgYW5kIHBheWxvYWRzIGZvciBjb21tdW5pY2F0aW9uIGJldHdlZW5cbiAqIGNvbnRlbnQgc2NyaXB0cywgYmFja2dyb3VuZCB3b3JrZXIsIHBvcHVwLCBhbmQgb3B0aW9ucyBwYWdlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQ29udGVudFVuaXQsIENsYXNzaWZpY2F0aW9uUmVzdWx0LCBVc2VyU2V0dGluZ3MsIFN0YXRzIH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVzc2FnZSBUeXBlIENvbnN0YW50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgTUVTU0FHRV9UWVBFUyA9IHtcbiAgLy8gQ2xhc3NpZmljYXRpb25cbiAgQ0xBU1NJRllfVU5JVDogJ2NhbG13ZWI6Y2xhc3NpZnlVbml0JyxcbiAgLy8gU2V0dGluZ3MgbWFuYWdlbWVudFxuICBHRVRfU0VUVElOR1M6ICdjYWxtd2ViOmdldFNldHRpbmdzJyxcbiAgVVBEQVRFX1NFVFRJTkdTOiAnY2FsbXdlYjp1cGRhdGVTZXR0aW5ncycsXG4gIC8vIENhY2hlIG1hbmFnZW1lbnRcbiAgQ0xFQVJfQ0FDSEU6ICdjYWxtd2ViOmNsZWFyQ2FjaGUnLFxuICAvLyBTdGF0aXN0aWNzXG4gIEdFVF9TVEFUUzogJ2NhbG13ZWI6Z2V0U3RhdHMnLFxuICBJTkNSRU1FTlRfU1RBVDogJ2NhbG13ZWI6aW5jcmVtZW50U3RhdCcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlVHlwZSA9IHR5cGVvZiBNRVNTQUdFX1RZUEVTW2tleW9mIHR5cGVvZiBNRVNTQUdFX1RZUEVTXTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVzc2FnZSBQYXlsb2FkIFR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NpZnlVbml0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkNMQVNTSUZZX1VOSVQ7XG4gIHVuaXQ6IENvbnRlbnRVbml0O1xufVxuXG5leHBvcnQgdHlwZSBDbGFzc2lmeVVuaXRSZXNwb25zZSA9IENsYXNzaWZpY2F0aW9uUmVzdWx0IHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U2V0dGluZ3NNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuR0VUX1NFVFRJTkdTO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNldHRpbmdzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLlVQREFURV9TRVRUSU5HUztcbiAgc2V0dGluZ3M6IFBhcnRpYWw8VXNlclNldHRpbmdzPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXR0aW5nc1Jlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckNhY2hlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkNMRUFSX0NBQ0hFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFyQ2FjaGVSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U3RhdHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuR0VUX1NUQVRTO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluY3JlbWVudFN0YXRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuSU5DUkVNRU5UX1NUQVQ7XG4gIGtleTogJ3RvdGFsRmlsdGVyZWQnO1xuICBhbW91bnQ/OiBudW1iZXI7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVuaW9uIFR5cGUgZm9yIEFsbCBNZXNzYWdlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDYWxtV2ViTWVzc2FnZSA9IFxuICB8IENsYXNzaWZ5VW5pdE1lc3NhZ2VcbiAgfCBHZXRTZXR0aW5nc01lc3NhZ2VcbiAgfCBVcGRhdGVTZXR0aW5nc01lc3NhZ2VcbiAgfCBDbGVhckNhY2hlTWVzc2FnZVxuICB8IEdldFN0YXRzTWVzc2FnZVxuICB8IEluY3JlbWVudFN0YXRNZXNzYWdlO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXNwb25zZSBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBHZXRTZXR0aW5nc1Jlc3BvbnNlID0gVXNlclNldHRpbmdzO1xuZXhwb3J0IHR5cGUgR2V0U3RhdHNSZXNwb25zZSA9IFN0YXRzO1xuZXhwb3J0IHR5cGUgSW5jcmVtZW50U3RhdFJlc3BvbnNlID0gU3RhdHM7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgVmFsaWRhdGlvbiAocnVudGltZSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbmNvbnN0IENsYXNzaWZ5VW5pdE1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkNMQVNTSUZZX1VOSVQpLFxuICB1bml0OiB6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCksXG4gICAgc2l0ZTogei5zdHJpbmcoKSxcbiAgICBmaW5nZXJwcmludDogei5zdHJpbmcoKSxcbiAgICBzb3VyY2VOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgdGl0bGU6IHouc3RyaW5nKCksXG4gICAgbWV0YWRhdGE6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gICAgaXNOZXc6IHouYm9vbGVhbigpLFxuICAgIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLFxuICB9KSxcbn0pO1xuXG5jb25zdCBHZXRTZXR0aW5nc01lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkdFVF9TRVRUSU5HUyksXG59KTtcblxuY29uc3QgVXBkYXRlU2V0dGluZ3NNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5VUERBVEVfU0VUVElOR1MpLFxuICBzZXR0aW5nczogei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcnVsZXM6IHoub2JqZWN0KHtcbiAgICAgIGJsb2NrbGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBibG9ja2xpc3RLZXl3b3Jkczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgYWxsb3dsaXN0Q2hhbm5lbHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICAgIGFsbG93bGlzdEtleXdvcmRzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBwcmVzZXRzOiB6Lm9iamVjdCh7XG4gICAgICAgIHBvbGl0aWNzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICByYWdlYmFpdDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgICAgc3BvaWxlcnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICAgIGNsaWNrYmFpdDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgIH0pLm9wdGlvbmFsKCksXG4gICAgfSkub3B0aW9uYWwoKSxcbiAgfSksXG59KTtcblxuY29uc3QgQ2xlYXJDYWNoZU1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkNMRUFSX0NBQ0hFKSxcbn0pO1xuXG5jb25zdCBHZXRTdGF0c01lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkdFVF9TVEFUUyksXG59KTtcblxuY29uc3QgSW5jcmVtZW50U3RhdE1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLklOQ1JFTUVOVF9TVEFUKSxcbiAga2V5OiB6LmxpdGVyYWwoJ3RvdGFsRmlsdGVyZWQnKSxcbiAgYW1vdW50OiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VTY2hlbWEgPSB6LmRpc2NyaW1pbmF0ZWRVbmlvbigndHlwZScsIFtcbiAgQ2xhc3NpZnlVbml0TWVzc2FnZVNjaGVtYSxcbiAgR2V0U2V0dGluZ3NNZXNzYWdlU2NoZW1hLFxuICBVcGRhdGVTZXR0aW5nc01lc3NhZ2VTY2hlbWEsXG4gIENsZWFyQ2FjaGVNZXNzYWdlU2NoZW1hLFxuICBHZXRTdGF0c01lc3NhZ2VTY2hlbWEsXG4gIEluY3JlbWVudFN0YXRNZXNzYWdlU2NoZW1hLFxuXSk7XG5cbi8qKlxuICogVmFsaWRhdGUgYSBtZXNzYWdlIHBheWxvYWQgYWdhaW5zdCB0aGUgc2NoZW1hLlxuICogVGhyb3dzIGlmIGludmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2UobWVzc2FnZTogdW5rbm93bik6IENhbG1XZWJNZXNzYWdlIHtcbiAgcmV0dXJuIG1lc3NhZ2UgYXMgQ2FsbVdlYk1lc3NhZ2U7XG59XG4iLCJpbXBvcnQgdHlwZSB7IFJld3JpdGVNb2RlLCBSZXdyaXRlUmVzdWx0LCBUZXh0Q2hhbmdlIH0gZnJvbSAnLi9yZXdyaXRlcic7XG5cbmludGVyZmFjZSBOZXV0cmFsaXphdGlvblJ1bGUge1xuICBwYXR0ZXJuOiBSZWdFeHA7XG4gIHJlcGxhY2VtZW50OiBzdHJpbmc7XG4gIHN0cmVuZ3RoOiAnbGlnaHQnIHwgJ21lZGl1bScgfCAnc3RyaWN0JztcbiAgcHJlc2VydmVDYXBpdGFsaXphdGlvbj86IGJvb2xlYW47XG59XG5cbmNvbnN0IE5FVVRSQUxJWkFUSU9OX1JVTEVTOiBOZXV0cmFsaXphdGlvblJ1bGVbXSA9IFtcbiAgeyBwYXR0ZXJuOiAvXFxiKHNob2NraW5nfGphdy1kcm9wcGluZ3xtaW5kLWJsb3dpbmd8ZWFydGgtc2hhdHRlcmluZ3xnYW1lLWNoYW5naW5nKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHlvdSB3b24ndCBiZWxpZXZlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoeW91IHdvbid0IEJFTElFVkUpXFxiL2csIHJlcGxhY2VtZW50OiAnJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHRoaXMgd2lsbCBtYWtlIHlvdSAoYW5ncnl8ZnVyaW91c3xtYWR8cmFnZSkpXFxiL2dpLCByZXBsYWNlbWVudDogJycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihjYW4ndCBiZWxpZXZlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIod2lsbCBtYWtlIHlvdXIgYmxvb2QgYm9pbClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbWF5IGNvbmNlcm4geW91Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihibG9vZCBib2lsKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYm91dHJhZ2VcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlzY3Vzc2lvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGJvdXRyYWdlZFxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiZnVyaW91c1xcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGZ1cmlvdXNseXxmdXJ5KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzdHJvbmdseScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIocGVvcGxlIGFyZSAoYW5ncnl8ZnVyaW91c3xvdXRyYWdlZCkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Blb3BsZSBhcmUgZGlzY3Vzc2luZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoYmFja2xhc2goIGVydXB0c3wgZ3Jvd3N8IG92ZXIpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAncmVzcG9uc2UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHNwYXJrcz8gb3V0cmFnZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJvbXB0cyBkaXNjdXNzaW9uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih0ZXJyaWZ5aW5nKCBuZXd8IHRydXRofCByZWFsaXR5KT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbmNlcm5pbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRFUlJJRllJTkcpXFxiL2csIHJlcGxhY2VtZW50OiAnQ29uY2VybmluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIodGVycmlmaWVkKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGRpc2FzdGVyfGNhdGFzdHJvcGhlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaXR1YXRpb24nLCBzdHJlbmd0aDogJ3N0cmljdCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGRlbW9jcmF0fHJlcHVibGljYW4pXFxiL2dpLCByZXBsYWNlbWVudDogJ3BvbGl0aWNpYW4nLCBzdHJlbmd0aDogJ3N0cmljdCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGRlbW9jcmF0c3xyZXB1YmxpY2FucylcXGIvZ2ksIHJlcGxhY2VtZW50OiAncG9saXRpY2lhbnMnLCBzdHJlbmd0aDogJ3N0cmljdCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHRoZSAocmVhbHxoaWRkZW58c2VjcmV0KSB0cnV0aClcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGhlIGZhY3RzJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih3aGF0ICh0aGV5fHRoZSBtZWRpYXxleHBlcnRzKSAod29uJ3R8ZG9uJ3QpIHRlbGwgeW91KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd3aGF0IG1heSBub3QgYmUgd2lkZWx5IGtub3duJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihicmVha2luZzopXFxiL2dpLCByZXBsYWNlbWVudDogJycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihCUkVBS0lORzopXFxiL2csIHJlcGxhY2VtZW50OiAnJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGJyZWFraW5nIG5ld3NbOlxcc10qKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZXhwbG9zaXZlfGJvbWJzaGVsbHxzdHVubmluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIob25lIHdlaXJkIHRyaWNrKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhIG1ldGhvZCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihkb2N0b3JzIChoYXRlfGRvbid0IHdhbnQgeW91IHRvIGtub3cpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRVhDTFVTSVZFWzpcXHNdKyhyZXBvcnR8bmV3c3x2aWRlb3xzdG9yeXxpbnRlcnZpZXd8cGhvdG9zfGltYWdlcykpL2dpLCByZXBsYWNlbWVudDogJycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihsZWFrZWRbOlxcc10pL2dpLCByZXBsYWNlbWVudDogJ3JlcG9ydGVkOicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIodGhleSBkb24ndCB3YW50IHlvdSB0byBrbm93KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoW0EtWl0rW1xcc10rREVTVFJPWShFRHxTfElORyk/KVxcYi9nLCByZXBsYWNlbWVudDogJ2FmZmVjdHMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEdFVFM/XFxzK0RFU1RST1koRUQpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaXMgYWZmZWN0ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERFU1RST1koRUR8Uyk/XFxzK0JZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhZmZlY3RlZCBieScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZGVzdHJveVxccysoZXZlcnl0aGluZ3xldmVyeW9uZXxhbGx8Y29tcGxldGVseXx0b3RhbGx5KSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWZmZWN0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBQlNPTFVURShMWSk/IChESVNBU1RFUnxHQVJCQUdFfFRSQVNIfE5JR0hUTUFSRSkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50IGlzc3VlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihkaXNndXN0aW5nKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwcm9ibGVtYXRpYycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRElTR1VTVElORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdQcm9ibGVtYXRpYycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoaW5mdXJpYXRpbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2ZydXN0cmF0aW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihJTkZVUklBVElORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdGcnVzdHJhdGluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIob3V0cmFnZW91cylcXGIvZ2ksIHJlcGxhY2VtZW50OiAncXVlc3Rpb25hYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTSE9DSyhpbmd8ZWR8cyk/KVxcYi9nLCByZXBsYWNlbWVudDogJ1N1cnByaXNlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHNob2NrKGluZ3xlZHxzKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ3N1cnByaXNlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJFTElFVkUpXFxiL2csIHJlcGxhY2VtZW50OiAnY29uc2lkZXInLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVU5BQ0NFUFRBQkxFKVxcYi9nLCByZXBsYWNlbWVudDogJ1Byb2JsZW1hdGljJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih1bmFjY2VwdGFibGUpXFxiL2csIHJlcGxhY2VtZW50OiAncHJvYmxlbWF0aWMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE1PUk9OKFMpPylcXGIvZywgcmVwbGFjZW1lbnQ6ICdwZW9wbGUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKG1vcm9uKHMpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAncGVvcGxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihJRElPVChTKT8pXFxiL2csIHJlcGxhY2VtZW50OiAncGVvcGxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihpZGlvdChzKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ3Blb3BsZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU1RVUElEKVxcYi9nLCByZXBsYWNlbWVudDogJ3Vud2lzZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoc3R1cGlkKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bndpc2UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJSQUlOWy0gXURFQUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VuaW5mb3JtZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGJyYWluWy0gXWRlYWQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VuaW5mb3JtZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRSQVNIKVxcYi9nLCByZXBsYWNlbWVudDogJ3Byb2JsZW1hdGljJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih0cmFzaClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJvYmxlbWF0aWMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEdBUkJBR0UpXFxiL2csIHJlcGxhY2VtZW50OiAncHJvYmxlbWF0aWMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGdhcmJhZ2UpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Byb2JsZW1hdGljJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihJTlNBTkUpXFxiL2csIHJlcGxhY2VtZW50OiAndW51c3VhbCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoaW5zYW5lKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bnVzdWFsJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTUEVFQ0hMRVNTKVxcYi9nLCByZXBsYWNlbWVudDogJ3N1cnByaXNlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoc3BlZWNobGVzcylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc3VycHJpc2VkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihGVVJJT1VTKVxcYi9nLCByZXBsYWNlbWVudDogJ0NvbmNlcm5lZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRlVSSU9VU0xZKVxcYi9nLCByZXBsYWNlbWVudDogJ1N0cm9uZ2x5Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihPVVRSQUdFRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdDb25jZXJuZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE9VVFJBR0VPVVMpXFxiL2csIHJlcGxhY2VtZW50OiAnUXVlc3Rpb25hYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihSQUdFKVxcYi9nLCByZXBsYWNlbWVudDogJ2NvbmNlcm4nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJBR0lORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdjb25jZXJuZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEhPUlJJQkxFKVxcYi9nLCByZXBsYWNlbWVudDogJ3Byb2JsZW1hdGljJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihob3JyaWJsZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJvYmxlbWF0aWMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERJU0FTVEVSKVxcYi9nLCByZXBsYWNlbWVudDogJ0lzc3VlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBQlNPTFVURSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdzaWduaWZpY2FudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoYWJzb2x1dGUpXFxiL2csIHJlcGxhY2VtZW50OiAnc2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENPUlJVUFQpXFxiL2csIHJlcGxhY2VtZW50OiAnY29udHJvdmVyc2lhbCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoY29ycnVwdClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29udHJvdmVyc2lhbCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0VDUkVUKVxcYi9nLCByZXBsYWNlbWVudDogJ3VuZGlzY2xvc2VkJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEhJRElORylcXGIvZywgcmVwbGFjZW1lbnQ6ICd3aXRoaG9sZGluZycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihoaWRpbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3dpdGhob2xkaW5nJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNJTEVOVClcXGIvZywgcmVwbGFjZW1lbnQ6ICdxdWlldCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihTSUxFTkNFKVxcYi9nLCByZXBsYWNlbWVudDogJ3F1aWV0Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYUE9TRUQpXFxiL2csIHJlcGxhY2VtZW50OiAncmV2ZWFsZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZXhwb3NlZClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncmV2ZWFsZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRVZFUllUSElORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdhIGxvdCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihJTkNSRURJQkxFKVxcYi9nLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoaW5jcmVkaWJsZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihBTUFaSU5HKVxcYi9nLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoYW1hemluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihNVVNUIChTRUV8UkVBRHxXQVRDSCkpXFxiL2csIHJlcGxhY2VtZW50OiAnbWF5IHdhbnQgdG8gc2VlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE5FRUQgVE8gKFNFRXxSRUFEfEtOT1cpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdtYXkgd2FudCB0bycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihORUVEIFRPKVxcYi9nLCByZXBsYWNlbWVudDogJ21heSB3YW50IHRvJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFVSR0VOVDo/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoYWN0IG5vdylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uc2lkZXInLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGJlZm9yZSBpdCdzIHRvbyBsYXRlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHdpbGwgbGVhdmUgeW91IChzcGVlY2hsZXNzfGZ1cmlvdXN8YW5ncnl8b3V0cmFnZWQpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdtYXkgaW50ZXJlc3QgeW91Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihtYWtlIHlvdSAobG9zZSBmYWl0aHxzaWNrfGFuZ3J5fGZ1cmlvdXMpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdtYXkgY29uY2VybiB5b3UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJPQVNUSU5HKVxcYi9nLCByZXBsYWNlbWVudDogJ2NyaXRpY2l6aW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDQU5DRUxFRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdjcml0aWNpemVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDQU5DRUxMSU5HKVxcYi9nLCByZXBsYWNlbWVudDogJ2NyaXRpY2l6aW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihERVNFUlZFKVxcYi9nLCByZXBsYWNlbWVudDogJ21heSBmYWNlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihERVNQSUNBQkxFKVxcYi9nLCByZXBsYWNlbWVudDogJ3Byb2JsZW1hdGljJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBVFJPQ0lPVVMpXFxiL2csIHJlcGxhY2VtZW50OiAncHJvYmxlbWF0aWMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFVOQkVMSUVWQUJMRSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHVuYmVsaWV2YWJsZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihBVURBQ0lUWSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdhY3Rpb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGF1ZGFjaXR5KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhY3Rpb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE1JTkQtQk9HR0xJTkcpXFxiL2csIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihTSUNLKVxcYi9nLCByZXBsYWNlbWVudDogJ2NvbmNlcm5lZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0hBS0lORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdhZmZlY3RlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVFJBVkVTVFkpXFxiL2csIHJlcGxhY2VtZW50OiAnc2l0dWF0aW9uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih0cmF2ZXN0eSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2l0dWF0aW9uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihGQUlUSCBJTiBIVU1BTklUWSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uZmlkZW5jZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQVNIQU1FRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdzaG91bGQgcmVjb25zaWRlcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoc2hvdWxkIGJlIGFzaGFtZWQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Nob3VsZCByZWNvbnNpZGVyJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihMT1NFIEFMTCBGQUlUSClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYmUgY29uY2VybmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihMT1NFIEZBSVRIKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdiZSBjb25jZXJuZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJBRElDQUwpXFxiL2csIHJlcGxhY2VtZW50OiAnYWN0aXZlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihyYWRpY2FsKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhY3RpdmUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVORCBPRilcXGIvZywgcmVwbGFjZW1lbnQ6ICdjaGFuZ2UgaW4nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERBTkdFUilcXGIvZywgcmVwbGFjZW1lbnQ6ICdpc3N1ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZGFuZ2VyKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdpc3N1ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoREFOR0VST1VTKVxcYi9nLCByZXBsYWNlbWVudDogJ3Jpc2t5Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihkYW5nZXJvdXMpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Jpc2t5Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL14oV0FSTklORzopXFxzKi9naSwgcmVwbGFjZW1lbnQ6ICdOb3RlOicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGJXQVJOSU5HOlxccyovZ2ksIHJlcGxhY2VtZW50OiAnTm90ZTogJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBTEFSTUlORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdOb3RhYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihhbGFybWluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTklHSFRNQVJFKVxcYi9nLCByZXBsYWNlbWVudDogJ2RpZmZpY3VsdCBzaXR1YXRpb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKG5pZ2h0bWFyZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlmZmljdWx0IHNpdHVhdGlvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVEVSUk9SKVxcYi9nLCByZXBsYWNlbWVudDogJ2NvbmNlcm4nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHRlcnJvcilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uY2VybicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV09SU1QpXFxiL2csIHJlcGxhY2VtZW50OiAnY2hhbGxlbmdpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHdvcnN0KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjaGFsbGVuZ2luZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoS0FSRU4pXFxiL2dpLCByZXBsYWNlbWVudDogJ3BlcnNvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRU5USVRMRUQpXFxiL2csIHJlcGxhY2VtZW50OiAnYXNzZXJ0aXZlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihlbnRpdGxlZClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYXNzZXJ0aXZlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihFTlRJVExFTUVOVClcXGIvZywgcmVwbGFjZW1lbnQ6ICdiZWhhdmlvcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZW50aXRsZW1lbnQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2JlaGF2aW9yJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUSElTIElTIFRIRSBFTkQpXFxiL2dpLCByZXBsYWNlbWVudDogJ1RoaXMgcmVwcmVzZW50cyBhIGNoYW5nZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVEhJUyBJUylcXHMrKFRIRXxBQlNPTFVURXxNT1NUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdUaGlzIGlzJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUSEVZIChIQVRFfERPTidUIFdBTlQpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdUaGV5IG1heSBub3QgcHJlZmVyJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEhBVEUpXFxiL2csIHJlcGxhY2VtZW50OiAnZGlzbGlrZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoaGF0ZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlzbGlrZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSEFURVJTKVxcYi9nLCByZXBsYWNlbWVudDogJ2NyaXRpY3MnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRSVVRIIChUSEVZfFRIRVknUkV8VEhBVCkpXFxiL2dpLCByZXBsYWNlbWVudDogJ2luZm9ybWF0aW9uIHRoYXQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRIRSBUUlVUSClcXGIvZywgcmVwbGFjZW1lbnQ6ICdUaGUgaW5mb3JtYXRpb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdIQVQnUyBSRUFMTFkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3doYXQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUkVBTExZIEhBUFBFTklORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnb2NjdXJyaW5nJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENIQU5HRVMgRVZFUllUSElORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaXMgc2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoR1VBUkFOVEVFRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdwb3NzaWJseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihndWFyYW50ZWVkKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwb3NzaWJseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihZT1UnTEwgKEJFfFdBTlQgVE98SEFURXxMT1ZFKSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnWW91IG1heScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihZT1UgV0lMTClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnWW91IG1heScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihXSUxMIE1BS0UgWU9VKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdtYXknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRE9OJ1QgTUlTUylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnQ29uc2lkZXInLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSEFWRSBUTyBTRUUpXFxiL2dpLCByZXBsYWNlbWVudDogJ21heSB3YW50IHRvIHNlZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihIQVMgVE8pXFxiL2dpLCByZXBsYWNlbWVudDogJ3Nob3VsZCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihZT1UgTkVFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnWW91IG1heSB3YW50Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE1VU1QgU0VFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd3b3J0aCBzZWVpbmcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0VDUkVUIEFHRU5EQSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJpdmF0ZSBwbGFucycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQUdFTkRBKVxcYi9nLCByZXBsYWNlbWVudDogJ3BsYW5zJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYUE9TRSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdyZXZlYWwnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZXhwb3NlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZXZlYWwnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTElBUilcXGIvZywgcmVwbGFjZW1lbnQ6ICdpbmNvcnJlY3QnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGxpYXIpXFxiL2dpLCByZXBsYWNlbWVudDogJ2luY29ycmVjdCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTFlJTkcpXFxiL2csIHJlcGxhY2VtZW50OiAnaW5jb3JyZWN0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihseWluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaW5jb3JyZWN0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihMSUVTKVxcYi9nLCByZXBsYWNlbWVudDogJ2luYWNjdXJhY2llcycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIobGllcylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaW5hY2N1cmFjaWVzJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihGUkFVRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdpcnJlZ3VsYXJpdHknLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGZyYXVkKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdpcnJlZ3VsYXJpdHknLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNDQU0pXFxiL2csIHJlcGxhY2VtZW50OiAncXVlc3Rpb25hYmxlIHByYWN0aWNlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihzY2FtKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdxdWVzdGlvbmFibGUgcHJhY3RpY2UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJJR0dFRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdiaWFzZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHJpZ2dlZClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYmlhc2VkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihGQUtFKVxcYi9nLCByZXBsYWNlbWVudDogJ3F1ZXN0aW9uYWJsZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZmFrZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncXVlc3Rpb25hYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihIT0FYKVxcYi9nLCByZXBsYWNlbWVudDogJ2Rpc3B1dGVkIGNsYWltJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihob2F4KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkaXNwdXRlZCBjbGFpbScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0hJTEwpXFxiL2csIHJlcGxhY2VtZW50OiAnc3VwcG9ydGVyJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihzaGlsbClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc3VwcG9ydGVyJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihQUk9QQUdBTkRBKVxcYi9nLCByZXBsYWNlbWVudDogJ2NvbnRlbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHByb3BhZ2FuZGEpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbnRlbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJSQUlOV0FTSChJTkd8RUQpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaW5mbHVlbmNpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE1BTklQVUxBVChJTkd8RUR8SU9OKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ2luZmx1ZW5jaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihHQVNMSUdIVChJTkcpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uZnVzaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihXT0tFKVxcYi9nLCByZXBsYWNlbWVudDogJ3Byb2dyZXNzaXZlJywgc3RyZW5ndGg6ICdzdHJpY3QnIH0sXG4gIHsgcGF0dGVybjogL1xcYihBTlRJWy0gXT9XQUtFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd0cmFkaXRpb25hbCcsIHN0cmVuZ3RoOiAnc3RyaWN0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0pXKVxcYi9nLCByZXBsYWNlbWVudDogJ2FjdGl2aXN0Jywgc3RyZW5ndGg6ICdzdHJpY3QnIH0sXG4gIHsgcGF0dGVybjogL1xcYihTTk9XRkxBS0UpXFxiL2csIHJlcGxhY2VtZW50OiAncGVyc29uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihCT09NRVIpXFxiL2csIHJlcGxhY2VtZW50OiAnb2xkZXIgcGVyc29uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihaT09NRVIpXFxiL2csIHJlcGxhY2VtZW50OiAneW91bmdlciBwZXJzb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE9LIEJPT01FUilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnSSBkaXNhZ3JlZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVFJJR0dFUkVEKVxcYi9nLCByZXBsYWNlbWVudDogJ3Vwc2V0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih0cmlnZ2VyZWQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Vwc2V0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDVUNLKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwZXJzb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNJTVApXFxiL2dpLCByZXBsYWNlbWVudDogJ3N1cHBvcnRlcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSU5DRUwpXFxiL2dpLCByZXBsYWNlbWVudDogJ3BlcnNvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTk9STUlFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhdmVyYWdlIHBlcnNvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTlBDKVxcYi9nLCByZXBsYWNlbWVudDogJ3BlcnNvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ0hBRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdjb25maWRlbnQgcGVyc29uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihCQVNFRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdwcmluY2lwbGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDUklOR0UpXFxiL2csIHJlcGxhY2VtZW50OiAnYXdrd2FyZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoY3JpbmdlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhd2t3YXJkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDUklOR0VZKVxcYi9nLCByZXBsYWNlbWVudDogJ2F3a3dhcmQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENSSU5HWSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdhd2t3YXJkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihZSUtFUylcXGIvZywgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE9PRilcXGIvZywgcmVwbGFjZW1lbnQ6ICd1bmZvcnR1bmF0ZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihZRUVUKVxcYi9nLCByZXBsYWNlbWVudDogJ2Rpc2NhcmQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTk8gQ0FQKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdob25lc3RseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihDQVApXFxiL2csIHJlcGxhY2VtZW50OiAnZXhhZ2dlcmF0aW9uJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJFVClcXGIvZywgcmVwbGFjZW1lbnQ6ICdhZ3JlZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0xBWSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdzdWNjZWVkJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKElDT05JQylcXGIvZywgcmVwbGFjZW1lbnQ6ICdtZW1vcmFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTEVHRU5EQVJZKVxcYi9nLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoR09BVClcXGIvZywgcmVwbGFjZW1lbnQ6ICdncmVhdGVzdCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihGSVJFKVxcYi9nLCByZXBsYWNlbWVudDogJ2dvb2QnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTElUKVxcYi9nLCByZXBsYWNlbWVudDogJ2V4Y2l0aW5nJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERPUEUpXFxiL2csIHJlcGxhY2VtZW50OiAnZ29vZCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihTSUNLISlcXGIvZywgcmVwbGFjZW1lbnQ6ICdpbXByZXNzaXZlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdJTEQpXFxiL2csIHJlcGxhY2VtZW50OiAndW51c3VhbCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihUSFJPVyBZT1VSIFBIT05FKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdiZSBmcnVzdHJhdGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUSFJPVyAoTVl8WU9VUnxISVN8SEVSKSBQSE9ORSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYmUgZnJ1c3RyYXRlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV0FOVCBUTyBUSFJPVylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYmUgZnJ1c3RyYXRlZCBieScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUFVOQ0ggKE1ZfFRIRXxBKSBTQ1JFRU4pXFxiL2dpLCByZXBsYWNlbWVudDogJ2JlIGZydXN0cmF0ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNDUkVBTShJTkcpPyBBVCAoTVl8VEhFKSBTQ1JFRU4pXFxiL2dpLCByZXBsYWNlbWVudDogJ2ZydXN0cmF0ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJBR0UgUVVJVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc3RvcCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVU5TVUJTQ1JJQkUpXFxiL2csIHJlcGxhY2VtZW50OiAnZGlzYWdyZWUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRElTTElLRSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdkaXNhZ3JlZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihSQVRJTylcXGIvZywgcmVwbGFjZW1lbnQ6ICdyZXNwb25zZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihMKVxcYi9nLCByZXBsYWNlbWVudDogJ2xvc3MnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVylcXGIvZywgcmVwbGFjZW1lbnQ6ICdzdWNjZXNzJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEYgSU4gQ0hBVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWNrbm93bGVkZ21lbnQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUklQKVxcYi9nLCByZXBsYWNlbWVudDogJ3VuZm9ydHVuYXRlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERFQUQpXFxiL2csIHJlcGxhY2VtZW50OiAnYW11c2VkJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEknTSBERUFEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhbXVzZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRFlJTkcpXFxiL2csIHJlcGxhY2VtZW50OiAndmVyeSBhbXVzZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSSBDQU4nVClcXGIvZywgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEkgQ0FOJ1QgRVZFTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihTQU1FKVxcYi9nLCByZXBsYWNlbWVudDogJ0kgYWdyZWUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTU9PRClcXGIvZywgcmVwbGFjZW1lbnQ6ICdmZWVsaW5nJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJJRyBNT09EKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzdHJvbmcgZmVlbGluZycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihSRUFMKVxcYi9nLCByZXBsYWNlbWVudDogJ2FjY3VyYXRlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZSKVxcYi9nLCByZXBsYWNlbWVudDogJ2hvbmVzdGx5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKExPV0tFWSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdzb21ld2hhdCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihISUdIS0VZKVxcYi9nLCByZXBsYWNlbWVudDogJ2RlZmluaXRlbHknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTE9XIEtFWSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc29tZXdoYXQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSElHSCBLRVkpXFxiL2dpLCByZXBsYWNlbWVudDogJ2RlZmluaXRlbHknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTEVHSVQpXFxiL2csIHJlcGxhY2VtZW50OiAnZ2VudWluZWx5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKExFR0lUSU1BVEVMWSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdnZW51aW5lbHknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRk9SIFJFQUwpXFxiL2dpLCByZXBsYWNlbWVudDogJ2dlbnVpbmVseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihOTyBMSUUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2hvbmVzdGx5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZSIEZSKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdob25lc3RseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihQRVJJT0RUPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGVmaW5pdGl2ZWx5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFBFUklPRFQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2RlZmluaXRpdmVseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihBTkQgSSBNRUFOIElUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0FZIElUIExPVURFUilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnSSBhZ3JlZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihTQVkgSVQgV0lUSCBNRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENBTiBXRSBUQUxLIEFCT1VUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdDb25zaWRlcicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihMRVQnUyBUQUxLIEFCT1VUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdDb25zaWRlcicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihXRSBORUVEIFRPIFRBTEsgQUJPVVQpXFxiL2dpLCByZXBsYWNlbWVudDogJ0NvbnNpZGVyJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEkgSEFWRSBUSE9VR0hUUylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnSSBoYXZlIG9waW5pb25zJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRIT1VHSFRTXFw/KVxcYi9nLCByZXBsYWNlbWVudDogJ09waW5pb25zPycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihIT1QgVEFLRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnb3BpbmlvbicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihVTlBPUFVMQVIgT1BJTklPTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnb3BpbmlvbicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihQT1BVTEFSIE9QSU5JT04pXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbW1vbiB2aWV3Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNQT0lMRVIgQUxFUlQpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTUFKT1IgU1BPSUxFUilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90ZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihTUE9JTEVSKVxcYi9nLCByZXBsYWNlbWVudDogJ2RldGFpbCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihQTE9UIFRXSVNUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkZXZlbG9wbWVudCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihSRVZFQUwpXFxiL2csIHJlcGxhY2VtZW50OiAnZGV0YWlsJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENMSUZGSEFOR0VSKVxcYi9nLCByZXBsYWNlbWVudDogJ3N1c3BlbnNlZnVsIGVuZGluZycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihUV0lTVCBFTkRJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VuZXhwZWN0ZWQgZW5kaW5nJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRXSVNUKVxcYi9nLCByZXBsYWNlbWVudDogJ2RldmVsb3BtZW50Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEpBV1stIF0/RFJPUChQSU5HKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoR0VOSVVTKEVTKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ3NtYXJ0IHBlcnNvbicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihCUklERVpJTExBKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzdHJlc3NlZCBicmlkZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUFJJQ0VMRVNTKVxcYi9nLCByZXBsYWNlbWVudDogJ05vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIocHJpY2VsZXNzKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKElOIFRFQVJTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdlbW90aW9uYWwnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoREVMVVNJT05BTClcXGIvZywgcmVwbGFjZW1lbnQ6ICdtaXN0YWtlbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZGVsdXNpb25hbClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbWlzdGFrZW4nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFBBVEhFVElDKVxcYi9nLCByZXBsYWNlbWVudDogJ1VuZm9ydHVuYXRlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihwYXRoZXRpYylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW5mb3J0dW5hdGUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENPTlRFTVBUKVxcYi9nLCByZXBsYWNlbWVudDogJ2Rpc2FncmVlbWVudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoY29udGVtcHQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2Rpc2FncmVlbWVudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ1JJTUlOQUwpXFxiL2csIHJlcGxhY2VtZW50OiAnUXVlc3Rpb25hYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihjcmltaW5hbClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncXVlc3Rpb25hYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihMT0NLRUQgVVApXFxiL2dpLCByZXBsYWNlbWVudDogJ2hlbGQgYWNjb3VudGFibGUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdBU1RFUz8gT0YgT1hZR0VOKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwZW9wbGUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdBU1RFIE9GIFNQQUNFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwZXJzb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdPUlNUIFBFUlNPTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY2hhbGxlbmdpbmcgcGVyc29uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUSEUgV09SU1QpXFxiL2csIHJlcGxhY2VtZW50OiAnY2hhbGxlbmdpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRFUlJJQkxZKVxcYi9nLCByZXBsYWNlbWVudDogJ1Bvb3JseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih0ZXJyaWJseSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncG9vcmx5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKExJVEVSQUxMWSBEWUlORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndmVyeSBhbXVzZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTElURVJBTExZKVxcYi9nLCByZXBsYWNlbWVudDogJ1NlcmlvdXNseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihDQU4nVCBFVkVOKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhbSBhZmZlY3RlZCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihJIENBTidUKVxcYi9nLCByZXBsYWNlbWVudDogJ05vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSU1NRURJQVRFTFkpXFxiL2csIHJlcGxhY2VtZW50OiAnU29vbicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihpbW1lZGlhdGVseSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc29vbicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihSSUdIVCBOT1cpXFxiL2csIHJlcGxhY2VtZW50OiAnbm93Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHJpZ2h0IG5vdylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm93Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRISVMgVkVSWSBNT01FTlQpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihCRUZPUkUgSVQnUyBUT08gTEFURSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc29vbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVE9PIExBVEUpXFxiL2csIHJlcGxhY2VtZW50OiAnZGVsYXllZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSU5TQU5FKVxcYi9nLCByZXBsYWNlbWVudDogJ1VudXN1YWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEFCU09MVVRFTFkpXFxiL2csIHJlcGxhY2VtZW50OiAnVmVyeScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihhYnNvbHV0ZWx5KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd2ZXJ5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENPTVBMRVRFTFkpXFxiL2csIHJlcGxhY2VtZW50OiAnVmVyeScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihjb21wbGV0ZWx5KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd2ZXJ5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRPVEFMTFkpXFxiL2csIHJlcGxhY2VtZW50OiAnVmVyeScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih0b3RhbGx5KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd2ZXJ5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFVUVEVSTFkpXFxiL2csIHJlcGxhY2VtZW50OiAnVmVyeScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih1dHRlcmx5KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd2ZXJ5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERFVkVTVEFURUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2FmZmVjdGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihERVZBU1RBVElORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdTaWduaWZpY2FudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZGV2YXN0YXRpbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihIRUFSVEJST0tFTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlzYXBwb2ludGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihIRUFSVEJSRUFLSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzYWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVNQkFSUkFTU0lORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdVbnVzdWFsJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihlbWJhcnJhc3NpbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VudXN1YWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVNQkFSUkFTU0VEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bmNvbWZvcnRhYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihIVU1JTElBVEVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bmNvbWZvcnRhYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihIVU1JTElBVEVTPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWZmZWN0cycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSFVNSUxJQVRJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VudXN1YWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERJU0dSQUNFKEZVTCk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwcm9ibGVtYXRpYycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0hBTUUoRlVMKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ3VuZm9ydHVuYXRlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTSEFNRSBPTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uc2lkZXInLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFVOVEhJTktBQkxFKVxcYi9nLCByZXBsYWNlbWVudDogJ1VudXN1YWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHVudGhpbmthYmxlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bnVzdWFsJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihJTkRFU0NSSUJBQkxFKVxcYi9nLCByZXBsYWNlbWVudDogJ05vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoaW5kZXNjcmliYWJsZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihCRVlPTkQgV09SRFMpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTk8gV09SRFMpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRk9SR0VUKVxcYi9nLCByZXBsYWNlbWVudDogJ05vdGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRk9SR0VUIFRPKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZW1lbWJlciB0bycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihXT04nVCBGT1JHRVQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3dpbGwgcmVtZW1iZXInLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTkVWRVIgRk9SR0VUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZW1lbWJlcicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihXSUxMIEJFIFJFTUVNQkVSRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRk9SRVZFUilcXGIvZywgcmVwbGFjZW1lbnQ6ICdGb3IgYSBsb25nIHRpbWUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZm9yZXZlcilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZm9yIGEgbG9uZyB0aW1lJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVURVJOSVRZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhIGxvbmcgdGltZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihDSEFOR0UgWU9VUiBMSUZFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhZmZlY3QgeW91Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENIQU5HRUQgTVkgTElGRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWZmZWN0ZWQgbWUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTElGRS1DSEFOR0lORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihMSUZFIEFMVEVSSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaWduaWZpY2FudCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihQUk9WRSBUSEVNIFdST05HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkZW1vbnN0cmF0ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUFJPVkVEIFRIRU0gV1JPTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2RlbW9uc3RyYXRlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUFJPVkUgRVZFUllPTkUgV1JPTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2RlbW9uc3RyYXRlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihFWFBPU0VEKVxcYi9nLCByZXBsYWNlbWVudDogJ1JldmVhbGVkJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYUE9TRVM/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZXZlYWxzJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEdFVFMgRVhQT1NFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaXMgcmV2ZWFsZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQkFOTkVEKVxcYi9nLCByZXBsYWNlbWVudDogJ1Jlc3RyaWN0ZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoYmFubmVkKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZXN0cmljdGVkJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENFTlNPUkVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdmaWx0ZXJlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ0VOU09SU0hJUClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZmlsdGVyaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihXRU5UIFZJUkFMKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdiZWNhbWUgcG9wdWxhcicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihWSVJBTClcXGIvZywgcmVwbGFjZW1lbnQ6ICdQb3B1bGFyJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHZpcmFsKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwb3B1bGFyJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJSRUFLIFRIRSBJTlRFUk5FVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYmVjb21lIHBvcHVsYXInLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVFJFTkRJTkcpXFxiL2csIHJlcGxhY2VtZW50OiAnUG9wdWxhcicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih0cmVuZGluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAncG9wdWxhcicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihNRUxURE9XTilcXGIvZywgcmVwbGFjZW1lbnQ6ICdSZWFjdGlvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIobWVsdGRvd24pXFxiL2dpLCByZXBsYWNlbWVudDogJ3JlYWN0aW9uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihJTiBGUkVFRkFMTClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGVjbGluaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihQTFVNTUVUKElORyk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkZWNsaW5pbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRIUk9VR0ggVEhFIFJPT0YpXFxiL2dpLCByZXBsYWNlbWVudDogJ2luY3JlYXNpbmcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoT0ZGIFRIRSBDSEFSVFMpXFxiL2dpLCByZXBsYWNlbWVudDogJ2hpZ2gnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoT0ZGIFRIRSBSQUlMUylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY2hhb3RpYycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoT1VUIE9GIENPTlRST0wpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VubWFuYWdlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUlVOTklORyBTQ0FSRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbmNlcm5lZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUlVOTklORyBGT1IgQ09WRVIpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Jlc3BvbmRpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNDUkFNQkxJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3dvcmtpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFBBTklDS0lORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uY2VybmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihQQU5JQylcXGIvZywgcmVwbGFjZW1lbnQ6ICdDb25jZXJuJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihwYW5pYylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uY2VybicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSFlTVEVSSUEpXFxiL2dpLCByZXBsYWNlbWVudDogJ3JlYWN0aW9uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihIWVNURVJJQ0FMKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdlbW90aW9uYWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZSRUFLKElOR3xTfEVEKT8gT1VUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZWFjdGluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRlJFQUspXFxiL2csIHJlcGxhY2VtZW50OiAnUGVyc29uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihSQU5UKVxcYi9nLCByZXBsYWNlbWVudDogJ0NvbW1lbnRhcnknLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHJhbnQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbW1lbnRhcnknLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJBR0lORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdDb25jZXJuZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZVTUlORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdGcnVzdHJhdGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihmdW1pbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2ZydXN0cmF0ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNURUFNKElORyk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdmcnVzdHJhdGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihCTE9XKElORyk/IFVQKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdleHBhbmRpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJMRVcgVVApXFxiL2dpLCByZXBsYWNlbWVudDogJ2V4cGFuZGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihFUlVQVChFRHxJTkd8Uyk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkZXZlbG9wZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYUExPREUoU3xEfElORyk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdleHBhbmQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKElNUExPREUoU3xEfElORyk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb2xsYXBzZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ09MTEFQU0UoU3xEfElORyk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdmYWlsJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDUlVNQkxFKFN8RHxJTkcpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZmFpbCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ1JBU0goSU5HfEVTfEVEKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ2ZhaWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFBMVU5HRShTfEQpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZHJvcCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU09BUihJTkd8U3xFRCk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyaXNlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTVVJHRShTfEQpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaW5jcmVhc2UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNLWVJPQ0tFVChJTkd8U3xFRCk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdpbmNyZWFzZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU1BJS0UoU3xEKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ2luY3JlYXNlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihXRU5UIFRPTyBGQVIpXFxiL2dpLCByZXBsYWNlbWVudDogJ3dhcyBleGNlc3NpdmUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENST1NTRUQgVEhFIExJTkUpXFxiL2dpLCByZXBsYWNlbWVudDogJ3dhcyBleGNlc3NpdmUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE9WRVIgVEhFIFRPUClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZXhjZXNzaXZlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUT08gRkFSKVxcYi9nLCByZXBsYWNlbWVudDogJ0V4Y2Vzc2l2ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQVRST0NJVFkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Byb2JsZW1hdGljIGV2ZW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBVFJPQ0lPVVMpXFxiL2csIHJlcGxhY2VtZW50OiAnUHJvYmxlbWF0aWMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERFUFJBVklUWSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJvYmxlbWF0aWMgYmVoYXZpb3InLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERFUFJBVkVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwcm9ibGVtYXRpYycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTkFVU0VBVElORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW5wbGVhc2FudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUkVQVUxTSVZFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bnBsZWFzYW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihSRVZPTFRJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VucGxlYXNhbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFZJTEUpXFxiL2csIHJlcGxhY2VtZW50OiAnUHJvYmxlbWF0aWMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHZpbGUpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Byb2JsZW1hdGljJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihGSUxUSClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJvYmxlbWF0aWMgY29udGVudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRklMVEhZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwcm9ibGVtYXRpYycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0NVTSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncGVvcGxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihWRVJNSU4pXFxiL2dpLCByZXBsYWNlbWVudDogJ3Blb3BsZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoREVHRU5FUkFURSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncGVyc29uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihMT1dMSUZFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwZXJzb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFBJRUNFIE9GIFdPUkspXFxiL2dpLCByZXBsYWNlbWVudDogJ3BlcnNvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV0FTVEUgT0YgVElNRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90IHVzZWZ1bCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihXQVNURSBPRiBNT05FWSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90IHZhbHVhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRPVEFMIFdBU1RFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3QgdXNlZnVsJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJJUC1PRkYpXFxiL2dpLCByZXBsYWNlbWVudDogJ292ZXJwcmljZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNDQU1NRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2RlY2VpdmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihSSVBQRUQgT0ZGKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkZWNlaXZlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUExBWUVEKVxcYi9nLCByZXBsYWNlbWVudDogJ0RlY2VpdmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihHT1QgUExBWUVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd3YXMgZGVjZWl2ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRBS0VOIEZPUiBBIFJJREUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2RlY2VpdmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUT09LIEFEVkFOVEFHRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAndXNlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRVhQTE9JVEVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1c2VkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihWSUNUSU0pXFxiL2csIHJlcGxhY2VtZW50OiAnUGVyc29uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihWSUNUSU1JWkVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhZmZlY3RlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUFJFWShFRHxJTkcpPyBPTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGFyZ2V0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUQVJHRVQoRUR8SU5HfFMpPylcXGIvZywgcmVwbGFjZW1lbnQ6ICdUYXJnZXRlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVEFSR0VURUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3RhcmdldGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTSU5HTEVEIE9VVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2VsZWN0ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFBJQ0tFRCBPTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY3JpdGljaXplZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQlVMTElFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaGFyYXNzZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEhBUkFTUyhFRHxJTkd8TUVOVCk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdib3RoZXInLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRPUk1FTlQoRUR8SU5HKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ2JvdGhlcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVE9SVFVSRShEfEQpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndHJvdWJsZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRPUk1FTlQpXFxiL2csIHJlcGxhY2VtZW50OiAnRGlzdHJlc3MnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEhFTEwpXFxiL2csIHJlcGxhY2VtZW50OiAnZGlmZmljdWx0eScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSEVMTElTSClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlmZmljdWx0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihMSVZJTkcgSEVMTClcXGIvZ2ksIHJlcGxhY2VtZW50OiAndmVyeSBkaWZmaWN1bHQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE5JR0hUTUFSRSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdEaWZmaWN1bHQgc2l0dWF0aW9uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBQlNPTFVURSBIRUxMKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd2ZXJ5IGRpZmZpY3VsdCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUFVSRSBIRUxMKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd2ZXJ5IGRpZmZpY3VsdCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV0FSIFpPTkUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbmZsaWN0IGFyZWEnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJBVFRMRUZJRUxEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25mbGljdCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQkxPT0RTSEVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd2aW9sZW5jZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ0FSTkFHRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGVzdHJ1Y3Rpb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNMQVVHSFRFUilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGVmZWF0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihNQVNTQUNSRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGVmZWF0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBTk5JSElMQVRFKER8RCk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkZWZlYXQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERFQ0lNQVRFKER8RCk/KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZWR1Y2UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE9CTElURVJBVEUoRHxEKT8pXFxiL2dpLCByZXBsYWNlbWVudDogJ3JlbW92ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRVJBU0VEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZW1vdmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihXSVBFRCBPVVQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3JlbW92ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdJUEVEIEZST00pXFxiL2dpLCByZXBsYWNlbWVudDogJ3JlbW92ZWQgZnJvbScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV0lQRUQgT0ZGKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZW1vdmVkIGZyb20nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFZBTklTSEVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkaXNhcHBlYXJlZCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihESVNBUFBFQVJFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZ29uZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihHT05FIE1JU1NJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2Fic2VudCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihOTyBUUkFDRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90IGZvdW5kJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdIRVJFQUJPVVRTIFVOS05PV04pXFxiL2dpLCByZXBsYWNlbWVudDogJ2xvY2F0aW9uIHVua25vd24nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTkVWRVIgU0VFTiBBR0FJTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90IGZvdW5kJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE5FVkVSIFRPIEJFIFNFRU4pXFxiL2dpLCByZXBsYWNlbWVudDogJ2Fic2VudCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihGQVRFIFVOS05PV04pXFxiL2dpLCByZXBsYWNlbWVudDogJ3N0YXR1cyB1bmtub3duJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFVOQUNDT1VOVEVEIEZPUilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90IGZvdW5kJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERBVEEgQlJFQUNIKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzZWN1cml0eSBpbmNpZGVudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSEFDS0VEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhY2Nlc3NlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSEFDS0VSKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhdHRhY2tlcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ1lCRVJBVFRBQ0spXFxiL2dpLCByZXBsYWNlbWVudDogJ29ubGluZSBpbmNpZGVudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUkFOU09NV0FSRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbWFsaWNpb3VzIHNvZnR3YXJlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihNQUxXQVJFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bndhbnRlZCBzb2Z0d2FyZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVklSVVMpXFxiL2csIHJlcGxhY2VtZW50OiAnUHJvZ3JhbScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU1BZSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdtb25pdG9yaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTUFkpXFxiL2csIHJlcGxhY2VtZW50OiAnTW9uaXRvcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU1BJRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ21vbml0b3JlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU1RPTEUpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Rvb2snLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNUT0xFTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGFrZW4nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNURUFMKVxcYi9nLCByZXBsYWNlbWVudDogJ1Rha2UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNURUFMSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd0YWtpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRISUVGKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwZXJzb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRIRUZUKVxcYi9nLCByZXBsYWNlbWVudDogJ1Rha2luZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUk9CQkVSWSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGhlZnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJPQkJFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGFrZW4gZnJvbScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQlJFQUNIKVxcYi9nLCByZXBsYWNlbWVudDogJ0luY2lkZW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihMRUFLKVxcYi9nLCByZXBsYWNlbWVudDogJ1JlbGVhc2UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKExFQUtFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncmVsZWFzZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKExFQUtJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3JlbGVhc2luZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRVhQT1NFKVxcYi9nLCByZXBsYWNlbWVudDogJ1JldmVhbCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVlVMTkVSQUJJTElUWSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaXNzdWUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFZVTE5FUkFCTEUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2F0IHJpc2snLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYUExPSVQpXFxiL2csIHJlcGxhY2VtZW50OiAnVXNlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihFWFBMT0lURUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VzZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZMQVcpXFxiL2csIHJlcGxhY2VtZW50OiAnSXNzdWUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJVRylcXGIvZywgcmVwbGFjZW1lbnQ6ICdJc3N1ZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihHTElUQ0gpXFxiL2dpLCByZXBsYWNlbWVudDogJ2Vycm9yJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENSQVNIKVxcYi9nLCByZXBsYWNlbWVudDogJ0ZhaWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENSQVNIRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2ZhaWxlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoT1VUQUdFKVxcYi9nLCByZXBsYWNlbWVudDogJ0ludGVycnVwdGlvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRE9XTilcXGIvZywgcmVwbGFjZW1lbnQ6ICdVbmF2YWlsYWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihCUk9LRSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdGYWlsZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJST0tFTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90IHdvcmtpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZJWClcXGIvZywgcmVwbGFjZW1lbnQ6ICdVcGRhdGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRklYRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VwZGF0ZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVVJHRU5UIEZJWClcXGIvZ2ksIHJlcGxhY2VtZW50OiAndXBkYXRlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDUklUSUNBTCBVUERBVEUpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VwZGF0ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0VDVVJJVFkgRkxBVylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2VjdXJpdHkgaXNzdWUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENSSVRJQ0FMIEZMQVcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2lzc3VlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihNQUpPUiBCVUcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2lzc3VlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTRVJJT1VTIElTU1VFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdpc3N1ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRFJBSU5JTkcpXFxiL2csIHJlcGxhY2VtZW50OiAnVXNpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERSQUlORUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VzZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERSQUlOKVxcYi9nLCByZXBsYWNlbWVudDogJ1VzZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU1VDS0lORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndXNpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVBVElORyBVUClcXGIvZ2ksIHJlcGxhY2VtZW50OiAndXNpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEdPQkJMSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1c2luZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoREVTVFJPWUlORyBZT1VSKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhZmZlY3RpbmcgeW91cicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoS0lMTElORyBZT1VSKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhZmZlY3RpbmcgeW91cicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUlVJTklORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWZmZWN0aW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihXUkVDS0lORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWZmZWN0aW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUUkFDSylcXGIvZywgcmVwbGFjZW1lbnQ6ICdNb25pdG9yJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUUkFDS0lORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbW9uaXRvcmluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVFJBQ0tFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbW9uaXRvcmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihNT05JVE9SKVxcYi9nLCByZXBsYWNlbWVudDogJ09ic2VydmUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU1VSVkVJTExBTkNFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdtb25pdG9yaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihXQVRDSElORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdPYnNlcnZpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdBVENIRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ29ic2VydmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihSRUNPUkRFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2F2ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJFQ09SRElORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdTYXZpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENPTExFQ1RJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NhdmluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ09MTEVDVEVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzYXZlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoR0FUSEVSSU5HKVxcYi9nLCByZXBsYWNlbWVudDogJ0NvbGxlY3RpbmcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSEFSVkVTVElORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29sbGVjdGluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0VMTElORyBZT1VSKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaGFyaW5nIHlvdXInLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNFTExTIFlPVVIpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NoYXJlcyB5b3VyJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTT0xEIFlPVVIpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NoYXJlZCB5b3VyJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDT01QUklNSVNFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWNjZXNzZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENPTVBSSU1JU0UpXFxiL2dpLCByZXBsYWNlbWVudDogJ2FmZmVjdCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQUZGRUNURUQpXFxiL2csIHJlcGxhY2VtZW50OiAnSW1wYWN0ZWQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSU1NSU5FTlQpXFxiL2csIHJlcGxhY2VtZW50OiAnUG9zc2libGUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKElORVZJVEFCTEUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2xpa2VseScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVU5BVk9JREFCTEUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2xpa2VseScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ0VSVEFJTilcXGIvZywgcmVwbGFjZW1lbnQ6ICdMaWtlbHknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoR1VBUkFOVEVFRCBUTylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbGlrZWx5IHRvJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdJTEwgREVGSU5JVEVMWSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnd2lsbCBsaWtlbHknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV0lMTCBTVVJFTFkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3dpbGwgbGlrZWx5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdJTEwgV0lUSE9VVCBET1VCVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnd2lsbCBsaWtlbHknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV0lUSE9VVCBBIERPVUJUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdsaWtlbHknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTk8gRE9VQlQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2xpa2VseScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihBQlNPTFVURUxZIFdJTEwpXFxiL2dpLCByZXBsYWNlbWVudDogJ3dpbGwgbGlrZWx5Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENPVUxEIFdJUEUgT1VUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb3VsZCBhZmZlY3QnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdJUEUgT1VUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhZmZlY3QnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFdJUEVEIE9VVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWZmZWN0ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYVElOQ1RJT04pXFxiL2dpLCByZXBsYWNlbWVudDogJ3JlZHVjdGlvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRVhUSU5DVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZ29uZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV0lQRSBVUyBPVVQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2FmZmVjdCB1cycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRU5EIE9GIERBWVMpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50IGNoYW5nZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRU5EIFRJTUVTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaWduaWZpY2FudCBjaGFuZ2UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEFQT0NBTFlQU0UpXFxiL2dpLCByZXBsYWNlbWVudDogJ21ham9yIGNoYW5nZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQVBPQ0FMWVBUSUMpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBUk1BR0VERE9OKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaWduaWZpY2FudCBldmVudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRE9PTVNEQVkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50IGRheScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRE9PTSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdDb25jZXJuJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihET09NRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2luIHRyb3VibGUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERPT01JTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2FmZmVjdGluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV09SVEhMRVNTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdsZXNzIHZhbHVhYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihVU0VMRVNTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3QgdXNlZnVsJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihQT0lOVExFU1MpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdCB1c2VmdWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZVVElMRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW5saWtlbHkgdG8gc3VjY2VlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSE9QRUxFU1MpXFxiL2dpLCByZXBsYWNlbWVudDogJ2RpZmZpY3VsdCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTk8gSE9QRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlmZmljdWx0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBTEwgSE9QRSBMT1NUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjaGFsbGVuZ2luZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTE9TVCBIT1BFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEdJVkUgVVApXFxiL2dpLCByZXBsYWNlbWVudDogJ3N0b3AnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNVUlJFTkRFUilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc3RvcCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTk8gQ0hBTkNFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bmxpa2VseScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTk8gV0FZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bmxpa2VseScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSU1QT1NTSUJMRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAndmVyeSBkaWZmaWN1bHQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFVOU1RPUFBBQkxFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwZXJzaXN0ZW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihVTlRISU5LQUJMRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW51c3VhbCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVU5JTUFHSU5BQkxFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bnVzdWFsJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihJTkNPTkNFSVZBQkxFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bnVzdWFsJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDUklQUExJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDUklQUExFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYWZmZWN0ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFBBUkFMWVpFRClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc3RvcHBlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoREVCSUxJVEFUSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaWduaWZpY2FudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoREVWRVNUQVRJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDQVRBU1RST1BISUMpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDQVRBU1RST1BIRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2lnbmlmaWNhbnQgZXZlbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgLy8gY3Jpc2lzLCBlbWVyZ2VuY3kgYXJlIHRvbyBicm9hZCAtIHVzZWQgaW4gcHJvZmVzc2lvbmFsIGNvbnRleHRzXG4gIHsgcGF0dGVybjogL1xcYihDUklUSUNBTClcXGIvZywgcmVwbGFjZW1lbnQ6ICdJbXBvcnRhbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGNyaXRpY2FsKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdpbXBvcnRhbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEdSSVBQSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEhPUlJJRllJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbmNlcm5pbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEhPUlJJRklDKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihQRVRSSUZJRUQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbmNlcm5lZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUEVUUklGWUlORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uY2VybmluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVFJFTUVORE9VUylcXGIvZywgcmVwbGFjZW1lbnQ6ICdTaWduaWZpY2FudCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih0cmVtZW5kb3VzKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaWduaWZpY2FudCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihDT0xPU1NBTClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbGFyZ2UnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoR0lHQU5USUMpXFxiL2dpLCByZXBsYWNlbWVudDogJ2xhcmdlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE1BU1NJVkUpXFxiL2csIHJlcGxhY2VtZW50OiAnTGFyZ2UnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIobWFzc2l2ZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbGFyZ2UnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSFVHRSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdMYXJnZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihodWdlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdsYXJnZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihFTk9STU9VUylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbGFyZ2UnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRVBJQylcXGIvZywgcmVwbGFjZW1lbnQ6ICdOb3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGVwaWMpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTEVHRU5EQVJZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE1PTlVNRU5UQUwpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgLy8gaGlzdG9yaWMvaGlzdG9yaWNhbCBhcmUgbm9ybWFsIHdvcmRzLCBub3Qgc2Vuc2F0aW9uYWxpc3QgLSByZW1vdmVkIGZhbHNlIHBvc2l0aXZlIHJ1bGVzXG4gIHsgcGF0dGVybjogL1xcYihHUk9VTkRCUkVBS0lORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihSRVZPTFVUSU9OQVJZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICduZXcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUEFSQURJR00gU0hJRlQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NoYW5nZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihHQU1FLUNIQU5HSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRVUk5JTkcgUE9JTlQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2tleSBtb21lbnQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoV0FURVJTSEVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3RhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRJUFBJTkcgUE9JTlQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NyaXRpY2FsIHBvaW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihQT0lOVCBPRiBOTyBSRVRVUk4pXFxiL2dpLCByZXBsYWNlbWVudDogJ2NyaXRpY2FsIHBvaW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihOTyBUVVJOSU5HIEJBQ0spXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbnRpbnVpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKENPVU5URE9XTilcXGIvZywgcmVwbGFjZW1lbnQ6ICdUaW1lbGluZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoY291bnRkb3duKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd0aW1lbGluZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVElDS0lORyBDTE9DSylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGltZWxpbmUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJVTk5JTkcgT1VUIE9GIFRJTUUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2xpbWl0ZWQgdGltZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVElNRSBJUyBSVU5OSU5HIE9VVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbGltaXRlZCB0aW1lJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihGSU5BTCBXQVJOSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdub3RpZmljYXRpb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKExBU1QgQ0hBTkNFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdvcHBvcnR1bml0eScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoT05MWSBDSEFOQ0UpXFxiL2dpLCByZXBsYWNlbWVudDogJ29wcG9ydHVuaXR5Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihERUFETElORSlcXGIvZywgcmVwbGFjZW1lbnQ6ICdEYXRlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGRlYWRsaW5lKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkYXRlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYUElSRShTfEQpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZW5kJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYUElSQVRJT04pXFxiL2dpLCByZXBsYWNlbWVudDogJ2VuZCBkYXRlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEFDVCBOT1cpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbnNpZGVyJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBQ1QgRkFTVClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uc2lkZXInLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEhVUlJZKVxcYi9nLCByZXBsYWNlbWVudDogJ0NvbnNpZGVyJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihIVVJSWSBVUClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uc2lkZXInLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJVU0gpXFxiL2csIHJlcGxhY2VtZW50OiAnTW92ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUlVTSElORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbW92aW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihET04nVCBXQUlUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25zaWRlcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTk8gVElNRSBUTyBMT1NFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25zaWRlciBzb29uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihOT1QgQSBNT01FTlQgVE8gU1BBUkUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbnNpZGVyJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihFVkVSWSBTRUNPTkQgQ09VTlRTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd0aW1lIG1hdHRlcnMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFJBQ0UgQUdBSU5TVCBUSU1FKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd0aW1lbGluZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQkFUVExFKVxcYi9nLCByZXBsYWNlbWVudDogJ0NvbmZsaWN0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihiYXR0bGUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbmZsaWN0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihXQVIpXFxiL2csIHJlcGxhY2VtZW50OiAnQ29uZmxpY3QnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHdhcilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uZmxpY3QnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZJR0hUKVxcYi9nLCByZXBsYWNlbWVudDogJ0Rpc2FncmVlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihmaWdodClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlzYWdyZWUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZJR0hUSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25mbGljdCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ0xBU0gpXFxiL2csIHJlcGxhY2VtZW50OiAnRGlzYWdyZWVtZW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihjbGFzaClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlzYWdyZWVtZW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihDT05GUk9OVEFUSU9OKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkaXNhZ3JlZW1lbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERJU1BVVEUpXFxiL2csIHJlcGxhY2VtZW50OiAnRGlzYWdyZWVtZW50Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGRpc3B1dGUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2Rpc2FncmVlbWVudCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihTVEFORE9GRilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlzYWdyZWVtZW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTSE9XRE9XTilcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbWVldGluZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRkFDRS1PRkYpXFxiL2dpLCByZXBsYWNlbWVudDogJ21lZXRpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNIT1dET1dOKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdlbmNvdW50ZXInLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZJQVNDTylcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJvYmxlbScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoREVCQUNMRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJvYmxlbScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRk9XTC1VUClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZXJyb3InLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZBSUxVUkUpXFxiL2csIHJlcGxhY2VtZW50OiAnUHJvYmxlbScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZmFpbHVyZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncHJvYmxlbScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRkFJTEVEKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bnN1Y2Nlc3NmdWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZBSUwpXFxiL2csIHJlcGxhY2VtZW50OiAnTm90IHN1Y2NlZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEZBSUxJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3N0cnVnZ2xpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJMVU5ERVIpXFxiL2dpLCByZXBsYWNlbWVudDogJ2Vycm9yJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihNSVNUQUtFKVxcYi9nLCByZXBsYWNlbWVudDogJ0Vycm9yJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKG1pc3Rha2UpXFxiL2dpLCByZXBsYWNlbWVudDogJ2Vycm9yJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEVSUk9SKVxcYi9nLCByZXBsYWNlbWVudDogJ0lzc3VlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE1JU0hBUClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZXJyb3InLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0NSRVctVVApXFxiL2dpLCByZXBsYWNlbWVudDogJ2Vycm9yJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihNRVNTKVxcYi9nLCByZXBsYWNlbWVudDogJ1Byb2JsZW0nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKG1lc3MpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Byb2JsZW0nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKE1FU1NZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwcm9ibGVtYXRpYycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ0hBT1MpXFxiL2csIHJlcGxhY2VtZW50OiAnRGlzb3JkZXInLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGNoYW9zKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkaXNvcmRlcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ0hBT1RJQylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGlzb3JkZXJlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTUFZSEVNKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkaXNvcmRlcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVFVSTU9JTClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uZnVzaW9uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihVUEhFQVZBTClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY2hhbmdlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihUVU1VTFQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbmZ1c2lvbicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVU5SRVNUKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd0ZW5zaW9uJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihWSU9MRU5DRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uZmxpY3QnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFZJT0xFTlQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2FnZ3Jlc3NpdmUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEJMT09EKVxcYi9nLCByZXBsYWNlbWVudDogJ0luanVyeScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQkxPT0RZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdpbmp1cnktcmVsYXRlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoR09SRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaW5qdXJ5Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihHUkFQSElDKVxcYi9nLCByZXBsYWNlbWVudDogJ0RldGFpbGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihncmFwaGljKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkZXRhaWxlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRElTVFVSQklORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW51c3VhbCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVU5TRVRUTElORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW51c3VhbCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoVFJPVUJMSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihBTEFSTUlORylcXGIvZywgcmVwbGFjZW1lbnQ6ICdOb3RhYmxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihhbGFybWluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQ0hJTExJTkcpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNQT09LWSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW51c3VhbCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihFRVJJRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW51c3VhbCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihDUkVFUFkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3VudXN1YWwnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNJTklTVEVSKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd1bnVzdWFsJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihNRU5BQ0lORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGhyZWF0ZW5pbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRIUkVBVClcXGIvZywgcmVwbGFjZW1lbnQ6ICdDb25jZXJuJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih0aHJlYXQpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbmNlcm4nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFRIUkVBVEVOSU5HKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihNRU5BQ0UpXFxiL2csIHJlcGxhY2VtZW50OiAnQ29uY2VybicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIobWVuYWNlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihQRVJJTClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncmlzaycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoUEVSSUxPVVMpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Jpc2t5Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihESVJFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaWduaWZpY2FudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoRElSRSBTVFJBSVRTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkaWZmaWN1bHR5Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihHUklNKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihCTEVBSylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY2hhbGxlbmdpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKERJUkUpXFxiL2csIHJlcGxhY2VtZW50OiAnU2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGRpcmUpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpZ25pZmljYW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihTT0xFTU4pXFxiL2dpLCByZXBsYWNlbWVudDogJ3NlcmlvdXMnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU09NQkVSKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzZXJpb3VzJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKEdSQVZFKVxcYi9nLCByZXBsYWNlbWVudDogJ1NlcmlvdXMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGdyYXZlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzZXJpb3VzJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihHUkFWRUxZKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzZXJpb3VzbHknLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNFUklPVVMpXFxiL2csIHJlcGxhY2VtZW50OiAnU2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoc2VyaW91cylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoU0VWRVJFKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzaWduaWZpY2FudCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoSEFSU0gpXFxiL2dpLCByZXBsYWNlbWVudDogJ3N0cm9uZycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQlJVVEFMKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzdHJvbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKFNBVkFHRSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc3Ryb25nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihWSUNJT1VTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhZ2dyZXNzaXZlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihSVVRITEVTUylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZGV0ZXJtaW5lZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoTUVSQ0lMRVNTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdkZXRlcm1pbmVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihSRUxFTlRMRVNTKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwZXJzaXN0ZW50Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihVTkZPUkdJVklORylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc3RyaWN0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIC8vIC0tLSBHYXAtRmlsbGluZyBSdWxlcyAoZnJvbSBzdHJlc3MgdGVzdHMpIC0tLVxuICAvLyBDbGlja2JhaXQgcGF0dGVybnNcbiAgeyBwYXR0ZXJuOiAvXFxiKHRoZSByZWFsIHJlYXNvbiAod2h5fGZvcikpXFxiL2dpLCByZXBsYWNlbWVudDogJ3RoZSByZWFzb24nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIob25seSBcXGQrJT8gKG9mICk/cGVvcGxlIChjYW58a25vd3x1bmRlcnN0YW5kfHBhc3N8c29sdmUpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdmZXcgcGVvcGxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGkgcXVpdCBteSBqb2IgYWZ0ZXIgKGxlYXJuaW5nfGZpbmRpbmd8ZGlzY292ZXJpbmcpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdJIGNoYW5nZWQgam9icyBhZnRlciBsZWFybmluZycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIC8vIFJhZ2ViYWl0IHBhdHRlcm5zXG4gIHsgcGF0dGVybjogL1xcYihsaXRlcmFsbHkgKHRyaWVkfGF0dGVtcHRlZHxkZWxldGVkfGRlc3Ryb3llZCkpXFxiL2dpLCByZXBsYWNlbWVudDogJ2F0dGVtcHRlZCB0bycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZ290IGNhdWdodClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnd2FzIGRpc2NvdmVyZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGxvc2luZyB0aGVpciBtaW5kcylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYXJlIHVwc2V0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihsb3N0IHRoZWlyIG1pbmRzKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd3ZXJlIHVwc2V0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIC8vIE1hbmlwdWxhdGl2ZSBwYXR0ZXJuc1xuICB7IHBhdHRlcm46IC9cXGIoZ292ZXJubWVudCAoZG9lc24ndHxkb2VzIG5vdCkgd2FudCB5b3UgdG8ga25vdylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZ292ZXJubWVudCBoYXMgbm90IHdpZGVseSBwdWJsaWNpemVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih0aGV5IChkb24ndHxkbyBub3QpIHdhbnQgeW91IHRvIGtub3cpXFxiL2dpLCByZXBsYWNlbWVudDogJ21heSBub3QgYmUgd2lkZWx5IGtub3duJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihldmVyeW9uZSBpcyAoc3dpdGNoaW5nfG1vdmluZ3xjaGFuZ2luZ3xhYmFuZG9uaW5nKSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc29tZSBwZW9wbGUgYXJlIGNoYW5naW5nJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKG5vYm9keSBpcyB0YWxraW5nIGFib3V0KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdmZXcgYXJlIGRpc2N1c3NpbmcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIodGhpcyBjaGFuZ2VzIGV2ZXJ5dGhpbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ3RoaXMgaXMgc2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICAvLyBNb3JlIGFnZ3Jlc3NpdmUgQUxMIENBUFMgcGF0dGVybnNcbiAgeyBwYXR0ZXJuOiAvXFxiKEVYUE9TRUR8UkVWRUFMRUR8Q09ORklSTUVEKTo/XFxzKi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoQlJFQUtJTkcgTkVXU3xCUkVBS0lORyBTVE9SWSk6P1xccyovZ2ksIHJlcGxhY2VtZW50OiAnJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgLy8gLS0tIEFkZGl0aW9uYWwgcGF0dGVybnMgZnJvbSBhZHZlcnNhcmlhbCB0ZXN0aW5nIC0tLVxuICAvLyBUeXBvL3NsYW5nIHZhcmlhdGlvbnMgb2YgXCJ5b3Ugd29uJ3QgYmVsaWV2ZVwiXG4gIHsgcGF0dGVybjogL1xcYih1IHdvbic/dCBiZWxpZXZlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoeW8gd29uJz90IGJlbGlldmUpXFxiL2dpLCByZXBsYWNlbWVudDogJycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih5dSB3b24nP3QgYmVsaWV2ZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHlvdSB3b250IGJlbGlldmUpXFxiL2dpLCByZXBsYWNlbWVudDogJycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih5b3Ugd29uJz90IGJlbGk/ZT92ZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGhhcmQgdG8gYmVsaWV2ZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIC8vIEVtb3Rpb25hbCBob29rc1xuICB7IHBhdHRlcm46IC9cXGIod2lsbCBibG93IHlvdXIgbWluZClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbWF5IGludGVyZXN0IHlvdScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihibG93IHlvdXIgbWluZClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaW50ZXJlc3QgeW91Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHdpbGwgbGVhdmUgeW91IHNoYWtpbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ21heSBhZmZlY3QgeW91Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih3aWxsIHJlc3RvcmUgeW91ciBmYWl0aClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbWF5IGVuY291cmFnZSB5b3UnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIocmVzdG9yZS4qZmFpdGgpXFxiL2dpLCByZXBsYWNlbWVudDogJ2VuY291cmFnZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih3aWxsIGJyZWFrIHlvdXIgaGVhcnQpXFxiL2dpLCByZXBsYWNlbWVudDogJ21heSBjb25jZXJuIHlvdScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoYnJlYWsgeW91ciBoZWFydClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uY2VybiB5b3UnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHdpbGwgc2hvY2sgeW91KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdtYXkgc3VycHJpc2UgeW91Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHdpbGwgbWFrZSB5b3UgKGNyeXxsYXVnaHxzbWlsZSkpXFxiL2dpLCByZXBsYWNlbWVudDogJ21heSBhZmZlY3QgeW91Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgLy8gVXJnZW5jeSBwYXR0ZXJuc1xuICB7IHBhdHRlcm46IC9cXGIoYmVmb3JlIHRoZXkgZGVsZXRlICh0aGlzfGl0KSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih3YXRjaCBiZWZvcmUgZGVsZXRlZClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uc2lkZXIgd2F0Y2hpbmcnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKG11c3QgcmVhZClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnd29ydGggcmVhZGluZycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihsaW1pdGVkIHRpbWUpXFxiL2dpLCByZXBsYWNlbWVudDogJ2F2YWlsYWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIC8vIEN1cmlvc2l0eSBnYXBzXG4gIHsgcGF0dGVybjogL1xcYih3aGF0IGhhcHBlbnMgbmV4dClcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGhlIG91dGNvbWUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIodGhlIHJlYXNvbiB3aHkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3RoZSByZWFzb24nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoaGVyZSc/cyB3aHkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3RoZSByZWFzb24nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIodGhpcyBpcyB3aHkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3RoZSByZWFzb24nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIod2hhdCAodGhleXxub2JvZHkpIChkb24nP3R8ZG9lc24nP3QpIHRlbGwgeW91KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd3aGF0IG1heSBub3QgYmUgd2lkZWx5IGtub3duJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih0aGUgc2VjcmV0IHRvKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhIG1ldGhvZCBmb3InLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIod2hhdCBoYXBwZW5zIHdoZW4pXFxiL2dpLCByZXBsYWNlbWVudDogJ3doYXQgb2NjdXJzIHdoZW4nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICAvLyBOdW1iZXJzIHBhdHRlcm5zXG4gIHsgcGF0dGVybjogL1xcYih0b3AgXFxkKyAodGhpbmdzfHJlYXNvbnN8c2VjcmV0c3x0aXBzfHRyaWNrc3xmYWN0c3x3YXlzKSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZSBwb2ludHMnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoXFxkKyAodGhpbmdzfHJlYXNvbnN8c2VjcmV0c3x0aXBzfHRyaWNrcykgeW91KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwb2ludHMgeW91Jywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKG9ubHkgXFxkKyU/IChvZiApP3Blb3BsZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnZmV3IHBlb3BsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihcXGQrJT8gb2YgcGVvcGxlIChjYW58a25vd3x1bmRlcnN0YW5kfHBhc3N8c29sdmUpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzb21lIHBlb3BsZSBjYW4nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICAvLyBTaW1wbGVyIG51bWJlciBwYXR0ZXJucyBmb3Igc3RhbmRhbG9uZSBwaHJhc2VzXG4gIHsgcGF0dGVybjogL1xcYih0b3AgXFxkKylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbm90YWJsZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihcXGQrIHRoaW5ncylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2V2ZXJhbCB0aGluZ3MnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoXFxkKyByZWFzb25zKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzZXZlcmFsIHJlYXNvbnMnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoXFxkKyBzZWNyZXRzKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzZXZlcmFsIHBvaW50cycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihcXGQrIHNpZ25zKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzZXZlcmFsIHNpZ25zJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKG51bWJlciBvbmUpXFxiL2dpLCByZXBsYWNlbWVudDogJ3ByaW1hcnknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICAvLyBBdXRob3JpdHkgcGF0dGVybnNcbiAgeyBwYXR0ZXJuOiAvXFxiKHNjaWVudGlzdHMgZGlzY292ZXJlZClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncmVzZWFyY2hlcnMgZm91bmQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZXhwZXJ0cyByZXZlYWwpXFxiL2dpLCByZXBsYWNlbWVudDogJ2V4cGVydHMgbm90ZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihzdHVkaWVzIHNob3cpXFxiL2dpLCByZXBsYWNlbWVudDogJ3N0dWRpZXMgc3VnZ2VzdCcsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihyZXNlYXJjaCBwcm92ZXMpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Jlc2VhcmNoIGluZGljYXRlcycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYih3aGF0IGJpZyBwaGFybWEpXFxiL2dpLCByZXBsYWNlbWVudDogJ3doYXQgcGhhcm1hY2V1dGljYWwgY29tcGFuaWVzJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih3aGF0IHRoZSBtZWRpYSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnd2hhdCBuZXdzIG91dGxldHMnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgLy8gTW9yZSByYWdlYmFpdFxuICB7IHBhdHRlcm46IC9cXGIoaW5zdGFudCBrYXJtYSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnY29uc2VxdWVuY2VzJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihrYXJtYSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncmVzdWx0Jywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihlbnRpdGxlZCAoY3VzdG9tZXJ8cGVyc29ufHBlb3BsZSkpXFxiL2dpLCByZXBsYWNlbWVudDogJ2Fzc2VydGl2ZSBwZXJzb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgLy8gU3VwZXJsYXRpdmVzXG4gIHsgcGF0dGVybjogL1xcYihqYXctZHJvcHBpbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZWFydGgtc2hhdHRlcmluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIobWluZC1ibG93aW5nKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdpbnRlcmVzdGluZycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihoZWFydGJyZWFraW5nKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25jZXJuaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihkZXZhc3RhdGluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc2lnbmlmaWNhbnQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGxpZmUtY2hhbmdpbmcpXFxiL2dpLCByZXBsYWNlbWVudDogJ25vdGFibGUnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICAvLyAtLS0gRXhjbHVzaXZpdHkgcGF0dGVybnMgKGNsaWNrYmFpdCBjb250ZXh0KSAtLS1cbiAgeyBwYXR0ZXJuOiAvXFxiKHNvbWV0aGluZyAoZXhjbHVzaXZlfHNlY3JldHxoaWRkZW58Y2xhc3NpZmllZCkpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NvbWV0aGluZyBzcGVjaWFsJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGV4Y2x1c2l2ZSAoYWNjZXNzfG9mZmVyfGRlYWx8Y29udGVudHxyZXBvcnR8c3Rvcnl8dmlkZW8pKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzcGVjaWFsJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGV4Y2x1c2l2ZVs6XFxzXSsocmVwb3J0fG5ld3N8dmlkZW98c3Rvcnl8Y29udGVudCkpXFxiL2dpLCByZXBsYWNlbWVudDogJycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihmb3IgKGEgKT9saW1pdGVkIHRpbWUoIG9ubHkpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndGVtcG9yYXJpbHknLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIobGltaXRlZCAodGltZXxlZGl0aW9ufGF2YWlsYWJpbGl0eSkgKG9mZmVyfGRlYWx8YWNjZXNzfGNvbnRlbnQpPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnYXZhaWxhYmxlJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHJhcmUgKG9wcG9ydHVuaXR5fGNoYW5jZXxmaW5kfGZvb3RhZ2UpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdzcGVjaWFsJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGEgcmFyZSAob3Bwb3J0dW5pdHl8Y2hhbmNlfGZpbmQpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdhbiBvcHBvcnR1bml0eScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihjbGFzc2lmaWVkIChkb2N1bWVudHN8ZmlsZXN8aW5mb3JtYXRpb258Zm9vdGFnZXxsZWFrcz8pKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdyZXN0cmljdGVkJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihpbnNpZGVycz8gKG9ubHl8YWNjZXNzfGluZm9ybWF0aW9ufHJlcG9ydCkpXFxiL2dpLCByZXBsYWNlbWVudDogJ2V4Y2x1c2l2ZScsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihtZW1iZXJzPyAob25seXxhY2Nlc3N8ZXhjbHVzaXZlKSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnc3Vic2NyaWJlcicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihub3QgKGZvciApP3B1YmxpYyAocmVsZWFzZXx2aWV3aW5nfGFjY2VzcykpXFxiL2dpLCByZXBsYWNlbWVudDogJ3Jlc3RyaWN0ZWQnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgLy8gLS0tIFVyZ2VuY3kgcGF0dGVybnMgLS0tXG4gIHsgcGF0dGVybjogL1xcYih3YXRjaCAodGhpc3xiZWZvcmUpIChpdCAoZ2V0c3xpcykgKT8oZGVsZXRlZHxyZW1vdmVkfGJhbm5lZCkpXFxiL2dpLCByZXBsYWNlbWVudDogJ2NvbnNpZGVyIHdhdGNoaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihiZWZvcmUgaXQgKGdldHN8aXMpIChkZWxldGVkfHJlbW92ZWR8YmFubmVkKSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAnJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIC8vIC0tLSBEaXNhc3Rlci9zY2FuZGFsIHBhdHRlcm5zIC0tLVxuICB7IHBhdHRlcm46IC9cXGIoZGlzYXN0ZXIgc3RyaWtlc1s6XFxzXSopXFxiL2dpLCByZXBsYWNlbWVudDogJycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoc2NhbmRhbCAoZXJ1cHRzfGdyb3dzfHdpZGVucykpXFxiL2dpLCByZXBsYWNlbWVudDogJ3NpdHVhdGlvbiBkZXZlbG9wcycsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICAvLyAtLS0gXCJMaXRlcmFsbHlcIiB3aXRoIGVtb3Rpb24gKHJhZ2ViYWl0KSAtLS1cbiAgeyBwYXR0ZXJuOiAvXFxiKGxpdGVyYWxseSAoc2lja3xzaGFraW5nfGNyeWluZ3xzY3JlYW1pbmd8ZHlpbmd8ZnVtaW5nKSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAndmVyeScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICAvLyAtLS0gXCJTZWNyZXQgbW92ZVwiIHBhdHRlcm4gLS0tXG4gIHsgcGF0dGVybjogL1xcYihpbiAoYSApP3NlY3JldCAobW92ZXxkZWFsfGFncmVlbWVudCkpXFxiL2dpLCByZXBsYWNlbWVudDogJ2luIGEgcHJpdmF0ZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICAvLyAtLS0gQmFuZHdhZ29uIHBhdHRlcm5zIC0tLVxuICB7IHBhdHRlcm46IC9cXGIoZXZlcnlvbmUgKGlzIHxhcmUgKSh0YWxraW5nIGFib3V0fGRpc2N1c3NpbmcpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwZW9wbGUgYXJlIGRpc2N1c3NpbmcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZXZlcnlvbmUnP3MgdGFsa2luZyBhYm91dClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncGVvcGxlIGFyZSBkaXNjdXNzaW5nJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGV2ZXJ5b25lIGtub3dzPylcXGIvZ2ksIHJlcGxhY2VtZW50OiAnaXQgaXMga25vd24nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoZXZlcnlvbmUgKG5lZWRzP3xzaG91bGR8bXVzdCkgKHRvICk/KGtub3d8c2VlfHdhdGNofHJlYWQpKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd5b3UgbWF5IHdhbnQgdG8nLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIoanVzdCBpbjopXFxiL2dpLCByZXBsYWNlbWVudDogJycsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihKVVNUIElOOilcXGIvZywgcmVwbGFjZW1lbnQ6ICcnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuICB7IHBhdHRlcm46IC9cXGIodGhlIG9ubHkgKHdheXxtZXRob2R8c29sdXRpb258YW5zd2VyfG9wdGlvbikgKHRvfGZvcikpXFxiL2dpLCByZXBsYWNlbWVudDogJ2Egd2F5IHRvJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGdvaW5nIHZpcmFsKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdiZWNvbWluZyBwb3B1bGFyJywgc3RyZW5ndGg6ICdsaWdodCcgfSxcbiAgLy8gLS0tIENvbnNwaXJhY3kgcGF0dGVybnMgLS0tXG4gIHsgcGF0dGVybjogL1xcYih3aGF0ICh0aGV5J3JlfHRoZXkgYXJlfHRoZXkpIGhpZGluZylcXGIvZ2ksIHJlcGxhY2VtZW50OiAndW5kaXNjbG9zZWQgaW5mb3JtYXRpb24nLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKHRoZSB0cnV0aCAodGhleXx0aGUgZ292ZXJubWVudHx0aGV5KSBoaWRlKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICd0aGUgaW5mb3JtYXRpb24gbm90IHNoYXJlZCcsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIobWFpbnN0cmVhbSBtZWRpYSB3b24nP3QgdGVsbClcXGIvZ2ksIHJlcGxhY2VtZW50OiAnbmV3cyBvdXRsZXRzIG1heSBub3Qgc2hhcmUnLCBzdHJlbmd0aDogJ21lZGl1bScgfSxcbiAgeyBwYXR0ZXJuOiAvXFxiKGJpZyBwaGFybWEgKGRvZXNuJz90fGRvZXMgbm90KSB3YW50KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdwaGFybWFjZXV0aWNhbCBjb21wYW5pZXMgbWF5IG5vdCBzaGFyZScsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIod2hhdCgnP3N8IGlzKSByZWFsbHkgZ29pbmcgb24pXFxiL2dpLCByZXBsYWNlbWVudDogJ3doYXQgaXMgaGFwcGVuaW5nJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYih3YWtlIHVwKCE/fCBzaGVlcGxlIT8pKVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25zaWRlcicsIHN0cmVuZ3RoOiAnbWVkaXVtJyB9LFxuICB7IHBhdHRlcm46IC9cXGIoc2hlZXBsZSlcXGIvZ2ksIHJlcGxhY2VtZW50OiAncGVvcGxlJywgc3RyZW5ndGg6ICdtZWRpdW0nIH0sXG4gIHsgcGF0dGVybjogL1xcYihkbyB5b3VyIG93biByZXNlYXJjaClcXGIvZ2ksIHJlcGxhY2VtZW50OiAncmVzZWFyY2ggZnVydGhlcicsIHN0cmVuZ3RoOiAnbGlnaHQnIH0sXG4gIHsgcGF0dGVybjogL1xcYihmb2xsb3cgdGhlIG1vbmV5KVxcYi9naSwgcmVwbGFjZW1lbnQ6ICdjb25zaWRlciB0aGUgZmluYW5jaWFsIGFzcGVjdHMnLCBzdHJlbmd0aDogJ2xpZ2h0JyB9LFxuXTtcblxuY29uc3QgU1RSRU5HVEhfUFJJT1JJVFk6IFJlY29yZDxSZXdyaXRlTW9kZSwgc3RyaW5nW10+ID0ge1xuICBsaWdodDogWydsaWdodCddLFxuICBtZWRpdW06IFsnbGlnaHQnLCAnbWVkaXVtJ10sXG4gIHN0cmljdDogWydsaWdodCcsICdtZWRpdW0nLCAnc3RyaWN0J10sXG59O1xuXG5mdW5jdGlvbiBjbGVhblRleHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRleHRcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgLnJlcGxhY2UoL1xccysoWy4sIT87Ol0pL2csICckMScpXG4gICAgLnJlcGxhY2UoLyhbLiwhPzs6XSlcXHMrL2csICckMSAnKVxuICAgIC50cmltKCk7XG59XG5cbmZ1bmN0aW9uIHByZXNlcnZlQ2FzZShvcmlnaW5hbDogc3RyaW5nLCByZXBsYWNlbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFvcmlnaW5hbCB8fCAhcmVwbGFjZW1lbnQpIHJldHVybiByZXBsYWNlbWVudDtcbiAgXG4gIGlmIChvcmlnaW5hbFswXSA9PT0gb3JpZ2luYWxbMF0udG9VcHBlckNhc2UoKSkge1xuICAgIHJldHVybiByZXBsYWNlbWVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlcGxhY2VtZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiByZXBsYWNlbWVudC50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV3cml0ZVdpdGhMb2NhbFJ1bGVzKFxuICB0ZXh0OiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgbW9kZTogUmV3cml0ZU1vZGUgfVxuKTogUmV3cml0ZVJlc3VsdCB7XG4gIGxldCByZXdyaXR0ZW4gPSB0ZXh0O1xuICBjb25zdCBjaGFuZ2VzOiBUZXh0Q2hhbmdlW10gPSBbXTtcbiAgY29uc3QgYWxsb3dlZFN0cmVuZ3RocyA9IFNUUkVOR1RIX1BSSU9SSVRZW29wdGlvbnMubW9kZV07XG5cbiAgZm9yIChjb25zdCBydWxlIG9mIE5FVVRSQUxJWkFUSU9OX1JVTEVTKSB7XG4gICAgaWYgKCFhbGxvd2VkU3RyZW5ndGhzLmluY2x1ZGVzKHJ1bGUuc3RyZW5ndGgpKSBjb250aW51ZTtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKHJ1bGUucGF0dGVybik7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3JpZ2luYWxNYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gcnVsZS5wcmVzZXJ2ZUNhcGl0YWxpemF0aW9uICE9PSBmYWxzZVxuICAgICAgICAgID8gcHJlc2VydmVDYXNlKG9yaWdpbmFsTWF0Y2gsIHJ1bGUucmVwbGFjZW1lbnQpXG4gICAgICAgICAgOiBydWxlLnJlcGxhY2VtZW50O1xuXG4gICAgICAgIHJld3JpdHRlbiA9IHJld3JpdHRlbi5yZXBsYWNlKG9yaWdpbmFsTWF0Y2gsIHJlcGxhY2VtZW50KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChvcmlnaW5hbE1hdGNoICE9PSByZXBsYWNlbWVudCkge1xuICAgICAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICBvcmlnaW5hbDogb3JpZ2luYWxNYXRjaCxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiByZXBsYWNlbWVudCxcbiAgICAgICAgICAgIHJlYXNvbjogYG5ldXRyYWxpemF0aW9uX3J1bGU6JHtydWxlLnN0cmVuZ3RofWAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXdyaXR0ZW4gPSBjbGVhblRleHQocmV3cml0dGVuKTtcblxuICBjb25zdCBjb25maWRlbmNlID0gY2hhbmdlcy5sZW5ndGggPiAwIFxuICAgID8gTWF0aC5taW4oMSwgMC41ICsgKGNoYW5nZXMubGVuZ3RoICogMC4xKSlcbiAgICA6IDEuMDtcblxuICByZXR1cm4ge1xuICAgIG9yaWdpbmFsOiB0ZXh0LFxuICAgIHJld3JpdHRlbixcbiAgICBjaGFuZ2VzLFxuICAgIGNvbmZpZGVuY2UsXG4gICAgbW9kZTogb3B0aW9ucy5tb2RlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UnVsZXNGb3JNb2RlKG1vZGU6IFJld3JpdGVNb2RlKTogTmV1dHJhbGl6YXRpb25SdWxlW10ge1xuICBjb25zdCBhbGxvd2VkU3RyZW5ndGhzID0gU1RSRU5HVEhfUFJJT1JJVFlbbW9kZV07XG4gIHJldHVybiBORVVUUkFMSVpBVElPTl9SVUxFUy5maWx0ZXIocnVsZSA9PiBhbGxvd2VkU3RyZW5ndGhzLmluY2x1ZGVzKHJ1bGUuc3RyZW5ndGgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZpZXdDaGFuZ2VzKHRleHQ6IHN0cmluZywgbW9kZTogUmV3cml0ZU1vZGUpOiBUZXh0Q2hhbmdlW10ge1xuICBjb25zdCByZXN1bHQgPSByZXdyaXRlV2l0aExvY2FsUnVsZXModGV4dCwgeyBtb2RlIH0pO1xuICByZXR1cm4gcmVzdWx0LmNoYW5nZXM7XG59IiwiLyoqXG4gKiBDYWxtV2ViIFNoYXJlZCBUeXBlcyBhbmQgU2NoZW1hc1xuICpcbiAqIENvcmUgaW50ZXJmYWNlcyBhbmQgWm9kIHZhbGlkYXRpb24gZm9yIHRoZSBDYWxtV2ViIGNvbnRlbnQgZmlyZXdhbGwgZXh0ZW5zaW9uLlxuICovXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFByb2Nlc3NpbmcgJiBBY3Rpb24gVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBQcm9jZXNzaW5nTW9kZVNjaGVtYSA9IHouZW51bShbJ2xvY2FsX3J1bGVzJywgJ2J5b2tfbGxtJywgJ2hvc3RlZF9sbG0nXSk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9PUEVOUk9VVEVSX01PREVMID0gJ29wZW5yb3V0ZXIvZnJlZSc7XG5leHBvcnQgY29uc3QgT1BFTlJPVVRFUl9FTkRQT0lOVCA9ICdodHRwczovL29wZW5yb3V0ZXIuYWkvYXBpL3YxL2NoYXQvY29tcGxldGlvbnMnO1xuZXhwb3J0IGNvbnN0IEFJX01PREVMUyA9IFtcbiAgICB7IGlkOiAnb3BlbnJvdXRlci9mcmVlJywgbGFiZWw6ICdGcmVlIFJvdXRlciAoQXV0byknLCBmcmVlOiB0cnVlLCByZWNvbW1lbmRlZDogdHJ1ZSB9LFxuXTtcbmV4cG9ydCBjb25zdCBBY3Rpb25EZWNpc2lvblNjaGVtYSA9IHouZW51bShbJ3Nob3cnLCAnYmx1cicsICdoaWRlJywgJ25ldXRyYWxpemUnLCAnY29sbGFwc2UnLCAncmVidWlsZCddKTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRlbnQgVW5pdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IENvbnRlbnRVbml0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGlkOiB6LnN0cmluZygpLFxuICAgIHNpdGU6IHouc3RyaW5nKCksXG4gICAgZmluZ2VycHJpbnQ6IHouc3RyaW5nKCksXG4gICAgc291cmNlTmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIHRpdGxlOiB6LnN0cmluZygpLFxuICAgIG1ldGFkYXRhOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICAgIGlzTmV3OiB6LmJvb2xlYW4oKSxcbiAgICB1cmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKSxcbn0pO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xhc3NpZmljYXRpb24gUmVzdWx0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgQ2xhc3NpZmljYXRpb25SZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgZGVjaXNpb246IEFjdGlvbkRlY2lzaW9uU2NoZW1hLFxuICAgIGNvbmZpZGVuY2U6IHoubnVtYmVyKCkubWluKDApLm1heCgxKSxcbiAgICByZWFzb246IHouc3RyaW5nKCksXG4gICAgbmV1dHJhbGl6ZWRUaXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVzZXIgUnVsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBQcmVzZXRTZWxlY3Rpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgcG9saXRpY3M6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICAgIHJhZ2ViYWl0OiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgICBzcG9pbGVyczogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gICAgY2xpY2tiYWl0OiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbn0pO1xuZXhwb3J0IGNvbnN0IFVzZXJSdWxlc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBibG9ja2xpc3RDaGFubmVsczogei5hcnJheSh6LnN0cmluZygpKS5kZWZhdWx0KFtdKSxcbiAgICBibG9ja2xpc3RLZXl3b3Jkczogei5hcnJheSh6LnN0cmluZygpKS5kZWZhdWx0KFtdKSxcbiAgICBhbGxvd2xpc3RDaGFubmVsczogei5hcnJheSh6LnN0cmluZygpKS5kZWZhdWx0KFtdKSxcbiAgICBhbGxvd2xpc3RLZXl3b3Jkczogei5hcnJheSh6LnN0cmluZygpKS5kZWZhdWx0KFtdKSxcbiAgICBwcmVzZXRzOiBQcmVzZXRTZWxlY3Rpb25TY2hlbWEuZGVmYXVsdCh7XG4gICAgICAgIHBvbGl0aWNzOiBmYWxzZSxcbiAgICAgICAgcmFnZWJhaXQ6IGZhbHNlLFxuICAgICAgICBzcG9pbGVyczogZmFsc2UsXG4gICAgICAgIGNsaWNrYmFpdDogZmFsc2UsXG4gICAgfSksXG59KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE5ldXRyYWxpemF0aW9uIFNldHRpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgTmV1dHJhbGl6YXRpb25Nb2RlU2NoZW1hID0gei5lbnVtKFsnbGlnaHQnLCAnbWVkaXVtJywgJ3N0cmljdCddKTtcbmV4cG9ydCBjb25zdCBOZXV0cmFsaXphdGlvblNldHRpbmdzU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgbW9kZTogTmV1dHJhbGl6YXRpb25Nb2RlU2NoZW1hLmRlZmF1bHQoJ21lZGl1bScpLFxuICAgIHNob3dJbmRpY2F0b3I6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgc2hvd0RpZmZPbkhvdmVyOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGV4Y2x1ZGVEb21haW5zOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdE5ldXRyYWxpemF0aW9uU2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBtb2RlOiAnbWVkaXVtJyxcbiAgICBzaG93SW5kaWNhdG9yOiB0cnVlLFxuICAgIHNob3dEaWZmT25Ib3ZlcjogdHJ1ZSxcbiAgICBleGNsdWRlRG9tYWluczogW10sXG59O1xuZXhwb3J0IGNvbnN0IFJlYWRlclNldHRpbmdzU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgZGVmYXVsdExheW91dDogei5zdHJpbmcoKS5kZWZhdWx0KCdhdXRvJyksXG4gICAgZGVmYXVsdFRoZW1lOiB6LnN0cmluZygpLmRlZmF1bHQoJ2RlZmF1bHQnKSxcbiAgICBhdXRvT3Blbjogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICB0ZXh0T25seTogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBmb250OiB6LnN0cmluZygpLmRlZmF1bHQoJ0ludGVyJyksXG4gICAgZm9udFNpemU6IHouc3RyaW5nKCkuZGVmYXVsdCgnMTdweCcpLFxuICAgIHNob3dJbkNvbnRleHRNZW51OiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGFwaUVuZHBvaW50OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgYXBpS2V5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVhZGVyU2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBkZWZhdWx0TGF5b3V0OiAnYXV0bycsXG4gICAgZGVmYXVsdFRoZW1lOiAnZGVmYXVsdCcsXG4gICAgYXV0b09wZW46IHRydWUsXG4gICAgdGV4dE9ubHk6IHRydWUsXG4gICAgZm9udDogJ0ludGVyJyxcbiAgICBmb250U2l6ZTogJzE3cHgnLFxuICAgIHNob3dJbkNvbnRleHRNZW51OiB0cnVlLFxufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lZGlhIEZpbHRlciBTZXR0aW5nc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IE1lZGlhRmlsdGVyTW9kZVNjaGVtYSA9IHouZW51bShbJ29mZicsICdibHVyJywgJ2hpZGUnXSk7XG5leHBvcnQgY29uc3QgTWVkaWFGaWx0ZXJTZXR0aW5nc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBlbmFibGVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIG1vZGU6IE1lZGlhRmlsdGVyTW9kZVNjaGVtYS5kZWZhdWx0KCdibHVyJyksXG4gICAgYmx1clRocmVzaG9sZDogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLmRlZmF1bHQoMC41KSxcbiAgICBoaWRlVGhyZXNob2xkOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSkuZGVmYXVsdCgwLjgpLFxuICAgIGFuYWx5emVBbHRUZXh0OiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGFuYWx5emVUaHVtYm5haWxzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHNob3dUb2dnbGU6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgcmV2ZWFsT25Ib3Zlcjogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZWRpYUZpbHRlclNldHRpbmdzID0ge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgbW9kZTogJ2JsdXInLFxuICAgIGJsdXJUaHJlc2hvbGQ6IDAuNSxcbiAgICBoaWRlVGhyZXNob2xkOiAwLjgsXG4gICAgYW5hbHl6ZUFsdFRleHQ6IHRydWUsXG4gICAgYW5hbHl6ZVRodW1ibmFpbHM6IHRydWUsXG4gICAgc2hvd1RvZ2dsZTogdHJ1ZSxcbiAgICByZXZlYWxPbkhvdmVyOiB0cnVlLFxufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNpdGUgRmlsdGVyIFNldHRpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgU2l0ZUNhdGVnb3J5U2NoZW1hID0gei5lbnVtKFtcbiAgICAnc29jaWFsX21lZGlhJyxcbiAgICAnY29udGVudF9mYXJtcycsXG4gICAgJ2dhbWJsaW5nJyxcbiAgICAnYWR1bHQnLFxuICAgICdwaXJhY3knLFxuICAgICdtYWx3YXJlJyxcbiAgICAnc3BhbScsXG4gICAgJ2Zha2VfbmV3cycsXG4gICAgJ3Byb2R1Y3Rpdml0eScsXG4gICAgJ3Nob3BwaW5nJyxcbiAgICAnZ2FtaW5nJyxcbiAgICAnc3RyZWFtaW5nJyxcbiAgICAnbmV3cycsXG4gICAgJ2N1c3RvbScsXG5dKTtcbmV4cG9ydCBjb25zdCBTaXRlRmlsdGVyU2V0dGluZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgZW5hYmxlZDogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBibG9ja0Jsb2NrZWRTaXRlczogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBzZWFyY2hGaWx0ZXJFbmFibGVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGhpZGVCbG9ja2VkUmVzdWx0czogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBzaG93Q2F0ZWdvcnlCYWRnZTogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gICAgYmxvY2tlZENhdGVnb3JpZXM6IHouYXJyYXkoU2l0ZUNhdGVnb3J5U2NoZW1hKS5kZWZhdWx0KFtdKSxcbiAgICBjdXN0b21CbG9ja2xpc3Q6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgY3VzdG9tQWxsb3dsaXN0OiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIHVzZUV4dGVybmFsQmxvY2tsaXN0czogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICByZWRpcmVjdFRvRERHOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdFNpdGVGaWx0ZXJTZXR0aW5ncyA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGJsb2NrQmxvY2tlZFNpdGVzOiB0cnVlLFxuICAgIHNlYXJjaEZpbHRlckVuYWJsZWQ6IHRydWUsXG4gICAgaGlkZUJsb2NrZWRSZXN1bHRzOiB0cnVlLFxuICAgIHNob3dDYXRlZ29yeUJhZGdlOiBmYWxzZSxcbiAgICBibG9ja2VkQ2F0ZWdvcmllczogWydnYW1ibGluZycsICdtYWx3YXJlJywgJ3NwYW0nLCAnZmFrZV9uZXdzJ10sXG4gICAgY3VzdG9tQmxvY2tsaXN0OiBbXSxcbiAgICBjdXN0b21BbGxvd2xpc3Q6IFtdLFxuICAgIHVzZUV4dGVybmFsQmxvY2tsaXN0czogdHJ1ZSxcbiAgICByZWRpcmVjdFRvRERHOiB0cnVlLFxufTtcbmV4cG9ydCBjb25zdCBSRUFERVJfRk9OVFMgPSBbXG4gICAgeyBpZDogJ0ludGVyJywgbGFiZWw6ICdJbnRlcicsIGZhbWlseTogJ0ludGVyLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmJywgc3R5bGU6ICdNb2Rlcm4nIH0sXG4gICAgeyBpZDogJ1NwYWNlIEdyb3Rlc2snLCBsYWJlbDogJ1NwYWNlIEdyb3Rlc2snLCBmYW1pbHk6ICdcIlNwYWNlIEdyb3Rlc2tcIiwgc2Fucy1zZXJpZicsIHN0eWxlOiAnRnV0dXJpc3RpYycgfSxcbiAgICB7IGlkOiAnSUJNIFBsZXggU2FucycsIGxhYmVsOiAnSUJNIFBsZXgnLCBmYW1pbHk6ICdcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZicsIHN0eWxlOiAnVGVjaG5pY2FsJyB9LFxuICAgIHsgaWQ6ICdKZXRCcmFpbnMgTW9ubycsIGxhYmVsOiAnSmV0QnJhaW5zIE1vbm8nLCBmYW1pbHk6ICdcIkpldEJyYWlucyBNb25vXCIsIG1vbm9zcGFjZScsIHN0eWxlOiAnQ29kZScgfSxcbiAgICB7IGlkOiAnR2VvcmdpYScsIGxhYmVsOiAnR2VvcmdpYScsIGZhbWlseTogJ0dlb3JnaWEsIHNlcmlmJywgc3R5bGU6ICdDbGFzc2ljJyB9LFxuICAgIHsgaWQ6ICdBdGtpbnNvbiBIeXBlcmxlZ2libGUnLCBsYWJlbDogJ0F0a2luc29uJywgZmFtaWx5OiAnXCJBdGtpbnNvbiBIeXBlcmxlZ2libGVcIiwgc2Fucy1zZXJpZicsIHN0eWxlOiAnQWNjZXNzaWJsZScgfSxcbl07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVc2VyIFNldHRpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgVXNlclNldHRpbmdzU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgcHJvY2Vzc2luZ01vZGU6IFByb2Nlc3NpbmdNb2RlU2NoZW1hLmRlZmF1bHQoJ2xvY2FsX3J1bGVzJyksXG4gICAgc3RyaWN0bmVzczogei5udW1iZXIoKS5taW4oMCkubWF4KDEwMCkuZGVmYXVsdCg4MCksXG4gICAgcnVsZXM6IFVzZXJSdWxlc1NjaGVtYS5kZWZhdWx0KHtcbiAgICAgICAgYmxvY2tsaXN0Q2hhbm5lbHM6IFtdLFxuICAgICAgICBibG9ja2xpc3RLZXl3b3JkczogW10sXG4gICAgICAgIGFsbG93bGlzdENoYW5uZWxzOiBbXSxcbiAgICAgICAgYWxsb3dsaXN0S2V5d29yZHM6IFtdLFxuICAgICAgICBwcmVzZXRzOiB7IHBvbGl0aWNzOiBmYWxzZSwgcmFnZWJhaXQ6IHRydWUsIHNwb2lsZXJzOiBmYWxzZSwgY2xpY2tiYWl0OiB0cnVlIH0sXG4gICAgfSksXG4gICAgYnlva0tleTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIGFpTW9kZWw6IHouc3RyaW5nKCkuZGVmYXVsdChERUZBVUxUX09QRU5ST1VURVJfTU9ERUwpLFxuICAgIGN1c3RvbUVuZHBvaW50OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgbmV1dHJhbGl6YXRpb246IE5ldXRyYWxpemF0aW9uU2V0dGluZ3NTY2hlbWEuZGVmYXVsdChkZWZhdWx0TmV1dHJhbGl6YXRpb25TZXR0aW5ncyksXG4gICAgcmVhZGVyOiBSZWFkZXJTZXR0aW5nc1NjaGVtYS5kZWZhdWx0KGRlZmF1bHRSZWFkZXJTZXR0aW5ncyksXG4gICAgbWVkaWFGaWx0ZXI6IE1lZGlhRmlsdGVyU2V0dGluZ3NTY2hlbWEuZGVmYXVsdChkZWZhdWx0TWVkaWFGaWx0ZXJTZXR0aW5ncyksXG4gICAgc2l0ZUZpbHRlcjogU2l0ZUZpbHRlclNldHRpbmdzU2NoZW1hLmRlZmF1bHQoZGVmYXVsdFNpdGVGaWx0ZXJTZXR0aW5ncyksXG59KTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0VXNlclNldHRpbmdzID0ge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcHJvY2Vzc2luZ01vZGU6ICdsb2NhbF9ydWxlcycsXG4gICAgc3RyaWN0bmVzczogODAsXG4gICAgcnVsZXM6IHtcbiAgICAgICAgYmxvY2tsaXN0Q2hhbm5lbHM6IFtdLFxuICAgICAgICBibG9ja2xpc3RLZXl3b3JkczogW10sXG4gICAgICAgIGFsbG93bGlzdENoYW5uZWxzOiBbXSxcbiAgICAgICAgYWxsb3dsaXN0S2V5d29yZHM6IFtdLFxuICAgICAgICAvLyBPcGluaW9uYXRlZCBkZWZhdWx0cyAtIGVuYWJsZSBrZXkgZmlsdGVyc1xuICAgICAgICBwcmVzZXRzOiB7IHBvbGl0aWNzOiBmYWxzZSwgcmFnZWJhaXQ6IHRydWUsIHNwb2lsZXJzOiBmYWxzZSwgY2xpY2tiYWl0OiB0cnVlIH0sXG4gICAgfSxcbiAgICBieW9rS2V5OiB1bmRlZmluZWQsXG4gICAgYWlNb2RlbDogREVGQVVMVF9PUEVOUk9VVEVSX01PREVMLFxuICAgIGN1c3RvbUVuZHBvaW50OiB1bmRlZmluZWQsXG4gICAgbmV1dHJhbGl6YXRpb246IGRlZmF1bHROZXV0cmFsaXphdGlvblNldHRpbmdzLFxuICAgIHJlYWRlcjogZGVmYXVsdFJlYWRlclNldHRpbmdzLFxuICAgIG1lZGlhRmlsdGVyOiBkZWZhdWx0TWVkaWFGaWx0ZXJTZXR0aW5ncyxcbiAgICBzaXRlRmlsdGVyOiBkZWZhdWx0U2l0ZUZpbHRlclNldHRpbmdzLFxufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZpbmdlcnByaW50aW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIFNpbXBsZSBzdHJpbmcgaGFzaCBhbGdvcml0aG0gZm9yIGZpbmdlcnByaW50aW5nIGNvbnRlbnQuXG4gKiBOb3QgY3J5dG9ncmFwaGljYWxseSBzZWN1cmUsIGJ1dCBmYXN0IGFuZCBzdWZmaWNpZW50IGZvciBjYWNoaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlSGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgICAgICBoYXNoID0gaGFzaCAmIGhhc2g7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgIH1cbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygzNik7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEgc3RhYmxlIGZpbmdlcnByaW50IGZvciBhIENvbnRlbnRVbml0LlxuICogQ29tYmluZXMgdGl0bGUgYW5kIHNvdXJjZU5hbWUsIGlnbm9yZXMgdmFyaWFibGUgZmllbGRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGaW5nZXJwcmludCh1bml0KSB7XG4gICAgY29uc3Qgc2VlZCA9IGAke3VuaXQudGl0bGV9fCR7dW5pdC5zb3VyY2VOYW1lIHx8ICcnfXwke3VuaXQuc2l0ZX1gO1xuICAgIHJldHVybiBzaW1wbGVIYXNoKHNlZWQpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3RvcmFnZSBLZXlzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgU1RPUkFHRV9LRVlTID0ge1xuICAgIFNFVFRJTkdTOiAnbG9jYWw6c2V0dGluZ3MnLFxuICAgIERFQ0lTSU9OX0NBQ0hFOiAnbG9jYWw6ZGVjaXNpb25DYWNoZScsXG4gICAgQllPS19LRVlTOiAnbG9jYWw6Ynlva0tleXMnLFxuICAgIFNUQVRTOiAnbG9jYWw6c3RhdHMnLFxufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEVTID0ge1xuICAgIENMQVNTSUZZX1VOSVQ6ICdjbGFzc2lmeVVuaXQnLFxuICAgIEdFVF9TRVRUSU5HUzogJ2dldFNldHRpbmdzJyxcbiAgICBVUERBVEVfU0VUVElOR1M6ICd1cGRhdGVTZXR0aW5ncycsXG4gICAgQ0xFQVJfQ0FDSEU6ICdjbGVhckNhY2hlJyxcbiAgICBHRVRfU1RBVFM6ICdnZXRTdGF0cycsXG4gICAgSU5DUkVNRU5UX1NUQVQ6ICdpbmNyZW1lbnRTdGF0Jyxcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWYWxpZGF0aW9uIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogVmFsaWRhdGUgYSBDb250ZW50VW5pdCBvYmplY3QgYWdhaW5zdCB0aGUgc2NoZW1hLlxuICogVGhyb3dzIFpvZEVycm9yIGlmIGludmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbnRlbnRVbml0KHVuaXQpIHtcbiAgICByZXR1cm4gQ29udGVudFVuaXRTY2hlbWEucGFyc2UodW5pdCk7XG59XG4vKipcbiAqIFZhbGlkYXRlIGEgQ2xhc3NpZmljYXRpb25SZXN1bHQgb2JqZWN0IGFnYWluc3QgdGhlIHNjaGVtYS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2xhc3NpZmljYXRpb25SZXN1bHQocmVzdWx0KSB7XG4gICAgcmV0dXJuIENsYXNzaWZpY2F0aW9uUmVzdWx0U2NoZW1hLnBhcnNlKHJlc3VsdCk7XG59XG4vKipcbiAqIFZhbGlkYXRlIFVzZXJTZXR0aW5ncyBhZ2FpbnN0IHRoZSBzY2hlbWEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVVzZXJTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIHJldHVybiBVc2VyU2V0dGluZ3NTY2hlbWEucGFyc2Uoc2V0dGluZ3MpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW5oYW5jZWQgU3RhdGlzdGljc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IEVuaGFuY2VkU3RhdHNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgdG90YWxGaWx0ZXJlZDogei5udW1iZXIoKS5kZWZhdWx0KDApLFxuICAgIGJ5QWN0aW9uOiB6Lm9iamVjdCh7XG4gICAgICAgIGhpZGU6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgYmx1cjogei5udW1iZXIoKS5kZWZhdWx0KDApLFxuICAgICAgICBuZXV0cmFsaXplOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIGNvbGxhcHNlOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgfSkuZGVmYXVsdCh7IGhpZGU6IDAsIGJsdXI6IDAsIG5ldXRyYWxpemU6IDAsIGNvbGxhcHNlOiAwIH0pLFxuICAgIGJ5UHJlc2V0OiB6Lm9iamVjdCh7XG4gICAgICAgIHBvbGl0aWNzOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIHJhZ2ViYWl0OiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIHNwb2lsZXJzOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIGNsaWNrYmFpdDogei5udW1iZXIoKS5kZWZhdWx0KDApLFxuICAgIH0pLmRlZmF1bHQoeyBwb2xpdGljczogMCwgcmFnZWJhaXQ6IDAsIHNwb2lsZXJzOiAwLCBjbGlja2JhaXQ6IDAgfSksXG4gICAgdGltZVNhdmVkOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgdG9wRmlsdGVyZWRTb3VyY2VzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGRhaWx5SGlzdG9yeTogei5hcnJheSh6Lm9iamVjdCh7XG4gICAgICAgIGRhdGU6IHouc3RyaW5nKCksXG4gICAgICAgIGNvdW50OiB6Lm51bWJlcigpLFxuICAgIH0pKS5kZWZhdWx0KFtdKSxcbiAgICBsYXN0UmVzZXQ6IHoubnVtYmVyKCkuZGVmYXVsdChEYXRlLm5vdygpKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRFbmhhbmNlZFN0YXRzID0ge1xuICAgIHRvdGFsRmlsdGVyZWQ6IDAsXG4gICAgYnlBY3Rpb246IHsgaGlkZTogMCwgYmx1cjogMCwgbmV1dHJhbGl6ZTogMCwgY29sbGFwc2U6IDAgfSxcbiAgICBieVByZXNldDogeyBwb2xpdGljczogMCwgcmFnZWJhaXQ6IDAsIHNwb2lsZXJzOiAwLCBjbGlja2JhaXQ6IDAgfSxcbiAgICB0aW1lU2F2ZWQ6IDAsXG4gICAgdG9wRmlsdGVyZWRTb3VyY2VzOiBbXSxcbiAgICBkYWlseUhpc3Rvcnk6IFtdLFxuICAgIGxhc3RSZXNldDogRGF0ZS5ub3coKSxcbn07XG4iLCIvKipcbiAqIEFsdC1UZXh0IE1lZGlhIEZpbHRlclxuICpcbiAqIEFuYWx5emVzIGltYWdlL3ZpZGVvIGFsdCB0ZXh0IGZvciBjbGlja2JhaXQvcmFnZWJhaXQgcGF0dGVybnNcbiAqIGFuZCBvcHRpb25hbGx5IGJsdXJzL2hpZGVzIG1hdGNoaW5nIG1lZGlhLlxuICovXG5cbmltcG9ydCB7IHJld3JpdGVXaXRoTG9jYWxSdWxlcyB9IGZyb20gJ0Avc3JjL25ldXRyYWxpemVyL2xvY2FsLXJ1bGVzJztcbmltcG9ydCB0eXBlIHsgTWVkaWFGaWx0ZXJTZXR0aW5ncyB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5pbXBvcnQgeyBkZWZhdWx0TWVkaWFGaWx0ZXJTZXR0aW5ncyB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFGaWx0ZXJSZXN1bHQge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgc2hvdWxkRmlsdGVyOiBib29sZWFuO1xuICByZWFzb24/OiBzdHJpbmc7XG4gIGFsdFRleHQ/OiBzdHJpbmc7XG4gIGNvbmZpZGVuY2U6IG51bWJlcjtcbn1cblxuY29uc3QgTUVESUFfU0VMRUNUT1JTID0gW1xuICAnaW1nW2FsdF0nLFxuICAndmlkZW9bYXJpYS1sYWJlbF0nLFxuICAnW3JvbGU9XCJpbWdcIl1bYXJpYS1sYWJlbF0nLFxuICAncGljdHVyZSBpbWdbYWx0XScsXG4gICdmaWd1cmUgaW1nW2FsdF0nLFxuXTtcblxuY29uc3QgVEhVTUJOQUlMX1NFTEVDVE9SUzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge1xuICB5b3V0dWJlOiBbXG4gICAgJ3l0ZC10aHVtYm5haWwgaW1nJyxcbiAgICAneXRkLXZpZGVvLXByZXZpZXcgaW1nJyxcbiAgICAnI3RodW1ibmFpbCBpbWcnLFxuICBdLFxuICByZWRkaXQ6IFtcbiAgICAnW2RhdGEtdGVzdGlkPVwicG9zdC1jb250YWluZXJcIl0gaW1nJyxcbiAgICAnLnRodW1ibmFpbCBpbWcnLFxuICBdLFxuICB4OiBbXG4gICAgJ1tkYXRhLXRlc3RpZD1cInR3ZWV0XCJdIGltZycsXG4gICAgJ1tkYXRhLXRlc3RpZD1cInByZXZpZXdJbnRlcnN0aXRpYWxJbWFnZVwiXScsXG4gIF0sXG59O1xuXG5sZXQgY3VycmVudFNldHRpbmdzOiBNZWRpYUZpbHRlclNldHRpbmdzID0gZGVmYXVsdE1lZGlhRmlsdGVyU2V0dGluZ3M7XG5sZXQgZmlsdGVyZWRDb3VudCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNZWRpYUZpbHRlclNldHRpbmdzKHNldHRpbmdzOiBNZWRpYUZpbHRlclNldHRpbmdzKTogdm9pZCB7XG4gIGN1cnJlbnRTZXR0aW5ncyA9IHNldHRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVkaWFGaWx0ZXJTZXR0aW5ncygpOiBNZWRpYUZpbHRlclNldHRpbmdzIHtcbiAgcmV0dXJuIGN1cnJlbnRTZXR0aW5ncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyTWVkaWEocm9vdDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCA9IGRvY3VtZW50KTogSFRNTEltYWdlRWxlbWVudFtdIHtcbiAgY29uc3QgZWxlbWVudHM6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xuICBcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBNRURJQV9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCBub2RlcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MSW1hZ2VFbGVtZW50PihzZWxlY3Rvcik7XG4gICAgZWxlbWVudHMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzKSk7XG4gIH1cbiAgXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emVBbHRUZXh0KGFsdFRleHQ6IHN0cmluZyk6IHtcbiAgc2hvdWxkRmlsdGVyOiBib29sZWFuO1xuICByZWFzb24/OiBzdHJpbmc7XG4gIGNvbmZpZGVuY2U6IG51bWJlcjtcbn0ge1xuICBpZiAoIWFsdFRleHQgfHwgYWx0VGV4dC5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIHsgc2hvdWxkRmlsdGVyOiBmYWxzZSwgY29uZmlkZW5jZTogMCB9O1xuICB9XG4gIFxuICBjb25zdCByZXN1bHQgPSByZXdyaXRlV2l0aExvY2FsUnVsZXMoYWx0VGV4dCwgeyBtb2RlOiAnbWVkaXVtJyB9KTtcbiAgXG4gIGlmIChyZXN1bHQuY2hhbmdlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBzaG91bGRGaWx0ZXI6IGZhbHNlLCBjb25maWRlbmNlOiAwIH07XG4gIH1cbiAgXG4gIGNvbnN0IHJlYXNvbiA9IHJlc3VsdC5jaGFuZ2VzXG4gICAgLm1hcChjID0+IGBcIiR7Yy5vcmlnaW5hbH1cIiDihpIgXCIke2MucmVwbGFjZW1lbnR9XCJgKVxuICAgIC5qb2luKCcsICcpO1xuICBcbiAgY29uc3QgY29uZmlkZW5jZSA9IE1hdGgubWluKDEsIHJlc3VsdC5jaGFuZ2VzLmxlbmd0aCAqIDAuMjUpO1xuICBcbiAgcmV0dXJuIHtcbiAgICBzaG91bGRGaWx0ZXI6IGNvbmZpZGVuY2UgPj0gY3VycmVudFNldHRpbmdzLmJsdXJUaHJlc2hvbGQsXG4gICAgcmVhc29uLFxuICAgIGNvbmZpZGVuY2UsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJNZWRpYShcbiAgcm9vdDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCA9IGRvY3VtZW50LFxuICBvcHRpb25zOiB7XG4gICAgc2l0ZUlkPzogc3RyaW5nO1xuICB9ID0ge31cbik6IE1lZGlhRmlsdGVyUmVzdWx0W10ge1xuICBpZiAoIWN1cnJlbnRTZXR0aW5ncy5lbmFibGVkIHx8IGN1cnJlbnRTZXR0aW5ncy5tb2RlID09PSAnb2ZmJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHsgc2l0ZUlkIH0gPSBvcHRpb25zO1xuICBjb25zdCByZXN1bHRzOiBNZWRpYUZpbHRlclJlc3VsdFtdID0gW107XG4gIFxuICBsZXQgbWVkaWEgPSBkaXNjb3Zlck1lZGlhKHJvb3QpO1xuICBcbiAgaWYgKHNpdGVJZCAmJiBUSFVNQk5BSUxfU0VMRUNUT1JTW3NpdGVJZF0pIHtcbiAgICBjb25zdCBzaXRlU3BlY2lmaWMgPSBUSFVNQk5BSUxfU0VMRUNUT1JTW3NpdGVJZF1cbiAgICAgIC5mbGF0TWFwKHMgPT4gQXJyYXkuZnJvbShyb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEltYWdlRWxlbWVudD4ocykpKTtcbiAgICBpZiAoc2l0ZVNwZWNpZmljLmxlbmd0aCA+IDApIHtcbiAgICAgIG1lZGlhID0gc2l0ZVNwZWNpZmljO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIG1lZGlhKSB7XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNhbG13ZWItbWVkaWEtaGlkZGVuJykgfHwgXG4gICAgICAgIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNhbG13ZWItbWVkaWEtYmx1cnJlZCcpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHRUZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FsdCcpIHx8IFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnO1xuICAgIFxuICAgIGNvbnN0IGFuYWx5c2lzID0gYW5hbHl6ZUFsdFRleHQoYWx0VGV4dCk7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0OiBNZWRpYUZpbHRlclJlc3VsdCA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBzaG91bGRGaWx0ZXI6IGFuYWx5c2lzLnNob3VsZEZpbHRlcixcbiAgICAgIHJlYXNvbjogYW5hbHlzaXMucmVhc29uLFxuICAgICAgYWx0VGV4dCxcbiAgICAgIGNvbmZpZGVuY2U6IGFuYWx5c2lzLmNvbmZpZGVuY2UsXG4gICAgfTtcblxuICAgIGlmIChhbmFseXNpcy5jb25maWRlbmNlID49IGN1cnJlbnRTZXR0aW5ncy5oaWRlVGhyZXNob2xkICYmIGN1cnJlbnRTZXR0aW5ncy5tb2RlID09PSAnaGlkZScpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItbWVkaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcmVhc29uJywgYW5hbHlzaXMucmVhc29uIHx8ICcnKTtcbiAgICAgIGZpbHRlcmVkQ291bnQrKztcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FsbXdlYjptZWRpYUZpbHRlcmVkJywge1xuICAgICAgICBkZXRhaWw6IHsgYWx0VGV4dCwgcmVhc29uOiBhbmFseXNpcy5yZWFzb24sIGFjdGlvbjogJ2hpZGUnLCBjb25maWRlbmNlOiBhbmFseXNpcy5jb25maWRlbmNlIH1cbiAgICAgIH0pKTtcbiAgICB9IGVsc2UgaWYgKGFuYWx5c2lzLmNvbmZpZGVuY2UgPj0gY3VycmVudFNldHRpbmdzLmJsdXJUaHJlc2hvbGQgJiYgY3VycmVudFNldHRpbmdzLm1vZGUgPT09ICdibHVyJykge1xuICAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnYmx1cigyMHB4KSc7XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnZmlsdGVyIDAuMnMnO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1tZWRpYS1ibHVycmVkJywgJ3RydWUnKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcmVhc29uJywgYW5hbHlzaXMucmVhc29uIHx8ICcnKTtcbiAgICAgIGZpbHRlcmVkQ291bnQrKztcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FsbXdlYjptZWRpYUZpbHRlcmVkJywge1xuICAgICAgICBkZXRhaWw6IHsgYWx0VGV4dCwgcmVhc29uOiBhbmFseXNpcy5yZWFzb24sIGFjdGlvbjogJ2JsdXInLCBjb25maWRlbmNlOiBhbmFseXNpcy5jb25maWRlbmNlIH1cbiAgICAgIH0pKTtcbiAgICAgIFxuICAgICAgaWYgKGN1cnJlbnRTZXR0aW5ncy5yZXZlYWxPbkhvdmVyKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdibHVyKDIwcHgpJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICB9XG4gIFxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZmlsdGVyQWxsTWVkaWEoKTogdm9pZCB7XG4gIGNvbnN0IGhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNhbG13ZWItbWVkaWEtaGlkZGVuXScpO1xuICBjb25zdCBibHVycmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2FsbXdlYi1tZWRpYS1ibHVycmVkXScpO1xuICBcbiAgaGlkZGVuLmZvckVhY2goZWwgPT4ge1xuICAgIChlbCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLW1lZGlhLWhpZGRlbicpO1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXJlYXNvbicpO1xuICB9KTtcbiAgXG4gIGJsdXJyZWQuZm9yRWFjaChlbCA9PiB7XG4gICAgKGVsIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5maWx0ZXIgPSAnJztcbiAgICAoZWwgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1tZWRpYS1ibHVycmVkJyk7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcmVhc29uJyk7XG4gIH0pO1xuXG4gIGZpbHRlcmVkQ291bnQgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyZWRDb3VudCgpOiBudW1iZXIge1xuICByZXR1cm4gZmlsdGVyZWRDb3VudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lZGlhU3RhdHMoKToge1xuICB0b3RhbDogbnVtYmVyO1xuICBoaWRkZW46IG51bWJlcjtcbiAgYmx1cnJlZDogbnVtYmVyO1xufSB7XG4gIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2FsbXdlYi1tZWRpYS1oaWRkZW5dLCBbZGF0YS1jYWxtd2ViLW1lZGlhLWJsdXJyZWRdJykubGVuZ3RoO1xuICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jYWxtd2ViLW1lZGlhLWhpZGRlbl0nKS5sZW5ndGg7XG4gIGNvbnN0IGJsdXJyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jYWxtd2ViLW1lZGlhLWJsdXJyZWRdJykubGVuZ3RoO1xuICBcbiAgcmV0dXJuIHsgdG90YWwsIGhpZGRlbiwgYmx1cnJlZCB9O1xufVxuIiwiLyoqXG4gKiBNZWRpYSBGaWx0ZXIgVG9nZ2xlIFVJXG4gKlxuICogRmxvYXRpbmcgdG9nZ2xlIGJ1dHRvbiB0byBlbmFibGUvZGlzYWJsZSBtZWRpYSBmaWx0ZXJpbmcgb24gdGhlIGN1cnJlbnQgcGFnZS5cbiAqL1xuXG5pbXBvcnQgeyBzZW5kVG9CYWNrZ3JvdW5kIH0gZnJvbSAnQGRyYWNvbi93eHQtc2hhcmVkL2V4dGVuc2lvbic7XG5pbXBvcnQgeyBNRVNTQUdFX1RZUEVTIH0gZnJvbSAnQC9zcmMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgVXNlclNldHRpbmdzLCBNZWRpYUZpbHRlclNldHRpbmdzIH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcblxuY29uc3QgVE9HR0xFX0lEID0gJ2NhbG13ZWItbWVkaWEtdG9nZ2xlJztcbmNvbnN0IFNUWUxFU19JRCA9ICdjYWxtd2ViLW1lZGlhLXRvZ2dsZS1zdHlsZXMnO1xuXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMoKTogdm9pZCB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTVFlMRVNfSUQpKSByZXR1cm47XG5cbiAgY29uc3Qgc3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGVzLmlkID0gU1RZTEVTX0lEO1xuICBzdHlsZXMudGV4dENvbnRlbnQgPSBgXG4gICAgIyR7VE9HR0xFX0lEfSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDIwcHg7XG4gICAgICByaWdodDogMjBweDtcbiAgICAgIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgICMke1RPR0dMRV9JRH0gLmNhbG13ZWItdG9nZ2xlLWJ0biB7XG4gICAgICB3aWR0aDogNDhweDtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgYmFja2dyb3VuZDogIzYzNjZmMTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAjJHtUT0dHTEVfSUR9IC5jYWxtd2ViLXRvZ2dsZS1idG46aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi10b2dnbGUtYnRuLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjJjNTVlO1xuICAgIH1cblxuICAgICMke1RPR0dMRV9JRH0gLmNhbG13ZWItdG9nZ2xlLWJ0bi5pbmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNmI3MjgwO1xuICAgIH1cblxuICAgICMke1RPR0dMRV9JRH0gLmNhbG13ZWItdG9nZ2xlLWJ0biBzdmcge1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi10b29sdGlwIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA1NnB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWYyOTM3O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgIH1cblxuICAgICMke1RPR0dMRV9JRH0gLmNhbG13ZWItdG9nZ2xlLWJ0bjpob3ZlciArIC5jYWxtd2ViLXRvb2x0aXAge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAjJHtUT0dHTEVfSUR9IC5jYWxtd2ViLXBhbmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogNTZweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi1wYW5lbC52aXNpYmxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi1wYW5lbC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi1wYW5lbC1vcHRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIH1cblxuICAgICMke1RPR0dMRV9JRH0gLmNhbG13ZWItcGFuZWwtb3B0aW9uOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICAjJHtUT0dHTEVfSUR9IC5jYWxtd2ViLXBhbmVsLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiAjNGI1NTYzO1xuICAgIH1cblxuICAgICMke1RPR0dMRV9JRH0gLmNhbG13ZWItcGFuZWwtdG9nZ2xlIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNkMWQ1ZGI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi1wYW5lbC10b2dnbGUuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyMmM1NWU7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi1wYW5lbC10b2dnbGU6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHRvcDogMnB4O1xuICAgICAgbGVmdDogMnB4O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi1wYW5lbC10b2dnbGUuYWN0aXZlOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG4gICAgfVxuXG4gICAgIyR7VE9HR0xFX0lEfSAuY2FsbXdlYi1zdGF0cyB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuICBgO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZ2dsZUJ1dHRvbihzZXR0aW5nczogTWVkaWFGaWx0ZXJTZXR0aW5ncyk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pZCA9IFRPR0dMRV9JRDtcblxuICBjb25zdCBpc0FjdGl2ZSA9IHNldHRpbmdzLmVuYWJsZWQgJiYgc2V0dGluZ3MubW9kZSAhPT0gJ29mZic7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2FsbXdlYi10b2dnbGUtYnRuICR7aXNBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9XCIgdGl0bGU9XCJDYWxtV2ViIE1lZGlhIEZpbHRlclwiPlxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTcuOTQgMTcuOTRBMTAuMDcgMTAuMDcgMCAwIDEgMTIgMjBjLTcgMC0xMS04LTExLThhMTguNDUgMTguNDUgMCAwIDEgNS4wNi01Ljk0TTkuOSA0LjI0QTkuMTIgOS4xMiAwIDAgMSAxMiA0YzcgMCAxMSA4IDExIDhhMTguNSAxOC41IDAgMCAxLTIuMTYgMy4xOW0tNi43Mi0xLjA3YTMgMyAwIDEgMS00LjI0LTQuMjRcIi8+XG4gICAgICAgIDxsaW5lIHgxPVwiMVwiIHkxPVwiMVwiIHgyPVwiMjNcIiB5Mj1cIjIzXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG4gICAgPHNwYW4gY2xhc3M9XCJjYWxtd2ViLXRvb2x0aXBcIj5DYWxtV2ViOiAke2lzQWN0aXZlID8gJ01lZGlhIGZpbHRlcmluZyBPTicgOiAnTWVkaWEgZmlsdGVyaW5nIE9GRid9PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXBhbmVsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1wYW5lbC10aXRsZVwiPk1lZGlhIEZpbHRlcjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcGFuZWwtb3B0aW9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsbXdlYi1wYW5lbC1sYWJlbFwiPkZpbHRlciBNZWRpYTwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcGFuZWwtdG9nZ2xlICR7c2V0dGluZ3MuZW5hYmxlZCA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS1zZXR0aW5nPVwiZW5hYmxlZFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1wYW5lbC1vcHRpb25cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYWxtd2ViLXBhbmVsLWxhYmVsXCI+Qmx1ciBNb2RlPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1wYW5lbC10b2dnbGUgJHtzZXR0aW5ncy5tb2RlID09PSAnYmx1cicgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtc2V0dGluZz1cImJsdXJNb2RlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXBhbmVsLW9wdGlvblwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbG13ZWItcGFuZWwtbGFiZWxcIj5IaWRlIE1vZGU8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLXBhbmVsLXRvZ2dsZSAke3NldHRpbmdzLm1vZGUgPT09ICdoaWRlJyA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS1zZXR0aW5nPVwiaGlkZU1vZGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcGFuZWwtb3B0aW9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsbXdlYi1wYW5lbC1sYWJlbFwiPlJldmVhbCBvbiBIb3Zlcjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItcGFuZWwtdG9nZ2xlICR7c2V0dGluZ3MucmV2ZWFsT25Ib3ZlciA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS1zZXR0aW5nPVwicmV2ZWFsT25Ib3ZlclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1zdGF0c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNhbG13ZWItZmlsdGVyZWQtY291bnRcIj4wPC9zcGFuPiBpbWFnZXMgZmlsdGVyZWRcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIGNvbnN0IGJ0biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi10b2dnbGUtYnRuJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IHBhbmVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLXBhbmVsJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHBhbmVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsbXdlYi1wYW5lbC10b2dnbGUnKTtcbiAgdG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBzZXR0aW5nID0gKHRvZ2dsZSBhcyBIVE1MRWxlbWVudCkuZGF0YXNldC5zZXR0aW5nO1xuICAgICAgbGV0IG5ld1NldHRpbmdzID0geyAuLi5zZXR0aW5ncyB9O1xuXG4gICAgICBpZiAoc2V0dGluZyA9PT0gJ2VuYWJsZWQnKSB7XG4gICAgICAgIG5ld1NldHRpbmdzLmVuYWJsZWQgPSAhbmV3U2V0dGluZ3MuZW5hYmxlZDtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZyA9PT0gJ2JsdXJNb2RlJykge1xuICAgICAgICBuZXdTZXR0aW5ncy5tb2RlID0gbmV3U2V0dGluZ3MubW9kZSA9PT0gJ2JsdXInID8gJ29mZicgOiAnYmx1cic7XG4gICAgICB9IGVsc2UgaWYgKHNldHRpbmcgPT09ICdoaWRlTW9kZScpIHtcbiAgICAgICAgbmV3U2V0dGluZ3MubW9kZSA9IG5ld1NldHRpbmdzLm1vZGUgPT09ICdoaWRlJyA/ICdvZmYnIDogJ2hpZGUnO1xuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nID09PSAncmV2ZWFsT25Ib3ZlcicpIHtcbiAgICAgICAgbmV3U2V0dGluZ3MucmV2ZWFsT25Ib3ZlciA9ICFuZXdTZXR0aW5ncy5yZXZlYWxPbkhvdmVyO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBzYXZlTWVkaWFTZXR0aW5ncyhuZXdTZXR0aW5ncyk7XG4gICAgICBPYmplY3QuYXNzaWduKHNldHRpbmdzLCBuZXdTZXR0aW5ncyk7XG4gICAgICB1cGRhdGVUb2dnbGVVSShjb250YWluZXIsIHNldHRpbmdzKTtcbiAgICAgIFxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYWxtd2ViOm1lZGlhRmlsdGVyQ2hhbmdlZCcsIHsgXG4gICAgICAgIGRldGFpbDogbmV3U2V0dGluZ3MgXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9nZ2xlVUkoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IE1lZGlhRmlsdGVyU2V0dGluZ3MpOiB2b2lkIHtcbiAgY29uc3QgYnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLXRvZ2dsZS1idG4nKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3QgdG9vbHRpcCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi10b29sdGlwJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IGlzQWN0aXZlID0gc2V0dGluZ3MuZW5hYmxlZCAmJiBzZXR0aW5ncy5tb2RlICE9PSAnb2ZmJztcblxuICBidG4uY2xhc3NOYW1lID0gYGNhbG13ZWItdG9nZ2xlLWJ0biAke2lzQWN0aXZlID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfWA7XG4gIHRvb2x0aXAudGV4dENvbnRlbnQgPSBgQ2FsbVdlYjogJHtpc0FjdGl2ZSA/ICdNZWRpYSBmaWx0ZXJpbmcgT04nIDogJ01lZGlhIGZpbHRlcmluZyBPRkYnfWA7XG5cbiAgY29uc3QgZW5hYmxlZFRvZ2dsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZXR0aW5nPVwiZW5hYmxlZFwiXScpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBibHVyVG9nZ2xlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNldHRpbmc9XCJibHVyTW9kZVwiXScpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBoaWRlVG9nZ2xlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNldHRpbmc9XCJoaWRlTW9kZVwiXScpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBob3ZlclRvZ2dsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZXR0aW5nPVwicmV2ZWFsT25Ib3ZlclwiXScpIGFzIEhUTUxFbGVtZW50O1xuXG4gIGlmIChlbmFibGVkVG9nZ2xlKSBlbmFibGVkVG9nZ2xlLmNsYXNzTmFtZSA9IGBjYWxtd2ViLXBhbmVsLXRvZ2dsZSAke3NldHRpbmdzLmVuYWJsZWQgPyAnYWN0aXZlJyA6ICcnfWA7XG4gIGlmIChibHVyVG9nZ2xlKSBibHVyVG9nZ2xlLmNsYXNzTmFtZSA9IGBjYWxtd2ViLXBhbmVsLXRvZ2dsZSAke3NldHRpbmdzLm1vZGUgPT09ICdibHVyJyA/ICdhY3RpdmUnIDogJyd9YDtcbiAgaWYgKGhpZGVUb2dnbGUpIGhpZGVUb2dnbGUuY2xhc3NOYW1lID0gYGNhbG13ZWItcGFuZWwtdG9nZ2xlICR7c2V0dGluZ3MubW9kZSA9PT0gJ2hpZGUnID8gJ2FjdGl2ZScgOiAnJ31gO1xuICBpZiAoaG92ZXJUb2dnbGUpIGhvdmVyVG9nZ2xlLmNsYXNzTmFtZSA9IGBjYWxtd2ViLXBhbmVsLXRvZ2dsZSAke3NldHRpbmdzLnJldmVhbE9uSG92ZXIgPyAnYWN0aXZlJyA6ICcnfWA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVNZWRpYVNldHRpbmdzKHNldHRpbmdzOiBNZWRpYUZpbHRlclNldHRpbmdzKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgc2VuZFRvQmFja2dyb3VuZCh7XG4gICAgICB0eXBlOiBNRVNTQUdFX1RZUEVTLlVQREFURV9TRVRUSU5HUyxcbiAgICAgIHNldHRpbmdzOiB7IG1lZGlhRmlsdGVyOiBzZXR0aW5ncyB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tNZWRpYVRvZ2dsZV0gRmFpbGVkIHRvIHNhdmUgc2V0dGluZ3M6JywgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0TWVkaWFUb2dnbGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUT0dHTEVfSUQpKSByZXR1cm47XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQ8VXNlclNldHRpbmdzPih7IFxuICAgICAgdHlwZTogTUVTU0FHRV9UWVBFUy5HRVRfU0VUVElOR1MgXG4gICAgfSk7XG5cbiAgICBpZiAoIXNldHRpbmdzPy5tZWRpYUZpbHRlcj8uc2hvd1RvZ2dsZSkgcmV0dXJuO1xuXG4gICAgaW5qZWN0U3R5bGVzKCk7XG4gICAgY29uc3QgdG9nZ2xlID0gY3JlYXRlVG9nZ2xlQnV0dG9uKHNldHRpbmdzLm1lZGlhRmlsdGVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW01lZGlhVG9nZ2xlXSBGYWlsZWQgdG8gaW5pdGlhbGl6ZTonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZpbHRlcmVkQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBjb3VudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbG13ZWItZmlsdGVyZWQtY291bnQnKTtcbiAgaWYgKGNvdW50RWwpIHtcbiAgICBjb3VudEVsLnRleHRDb250ZW50ID0gY291bnQudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBBY3Rpdml0eSBPdmVybGF5XG4gKlxuICogRmxvYXRpbmcgcGFuZWwgdGhhdCBzaG93cyByZWFsLXRpbWUgZmlsdGVyaW5nIGFjdGl2aXR5OlxuICogLSBOZXV0cmFsaXplZCBoZWFkbGluZXMgKGJlZm9yZSDihpIgYWZ0ZXIpXG4gKiAtIEJsb2NrZWQgc2l0ZXNcbiAqIC0gRmlsdGVyZWQgbWVkaWFcbiAqIC0gU2VhcmNoIHJlc3VsdHMgaGlkZGVuXG4gKi9cblxuaW1wb3J0IHsgc2VuZFRvQmFja2dyb3VuZCB9IGZyb20gJ0BkcmFjb24vd3h0LXNoYXJlZC9leHRlbnNpb24nO1xuaW1wb3J0IHsgTUVTU0FHRV9UWVBFUyB9IGZyb20gJ0Avc3JjL21lc3NhZ2luZyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJTZXR0aW5ncyB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5cbmNvbnN0IE9WRVJMQVlfSUQgPSAnY2FsbXdlYi1hY3Rpdml0eS1vdmVybGF5JztcbmNvbnN0IFNUWUxFU19JRCA9ICdjYWxtd2ViLWFjdGl2aXR5LXN0eWxlcyc7XG5cbmludGVyZmFjZSBBY3Rpdml0eUl0ZW0ge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiAnbmV1dHJhbGl6ZWQnIHwgJ2Jsb2NrZWQnIHwgJ21lZGlhJyB8ICdzZWFyY2gnO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgYmVmb3JlOiBzdHJpbmc7XG4gIGFmdGVyPzogc3RyaW5nO1xuICByZWFzb24/OiBzdHJpbmc7XG59XG5cbmxldCBhY3Rpdml0aWVzOiBBY3Rpdml0eUl0ZW1bXSA9IFtdO1xubGV0IG1heEFjdGl2aXRpZXMgPSAyMDtcbmxldCBvdmVybGF5OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xubGV0IGlzRXhwYW5kZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzKCk6IHZvaWQge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU1RZTEVTX0lEKSkgcmV0dXJuO1xuXG4gIGNvbnN0IHN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlcy5pZCA9IFNUWUxFU19JRDtcbiAgc3R5bGVzLnRleHRDb250ZW50ID0gYFxuICAgICMke09WRVJMQVlfSUR9IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWF4LXdpZHRoOiAzODBweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTFhMmUgMCUsICMxNjIxM2UgMTAwJSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1oZWFkZXI6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaWNvbiB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEgMCUsICM4YjVjZjYgMTAwJSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWluZm8ge1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWNvdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjJjNTVlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWJhZGdlLmVtcHR5IHtcbiAgICAgIGJhY2tncm91bmQ6ICM2YjcyODA7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktcGFuZWwge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktcGFuZWwudmlzaWJsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlVXAge1xuICAgICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LXRhYnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS10YWIge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS10YWI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS10YWIuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjNjM2NmYxO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYzNjZmMTtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1saXN0IHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW0ubmV1dHJhbGl6ZWQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjOGI1Y2Y2O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW0uYmxvY2tlZCB7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNlZjQ0NDQ7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaXRlbS5tZWRpYSB7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMzYjgyZjY7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaXRlbS5zZWFyY2gge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZjU5ZTBiO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLm5ldXRyYWxpemVkIC5jYWxtd2ViLWFjdGl2aXR5LWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlZGU5ZmU7XG4gICAgICBjb2xvcjogIzdjM2FlZDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLmJsb2NrZWQgLmNhbG13ZWItYWN0aXZpdHktbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgICAgIGNvbG9yOiAjZGMyNjI2O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW0ubWVkaWEgLmNhbG13ZWItYWN0aXZpdHktbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogI2RiZWFmZTtcbiAgICAgIGNvbG9yOiAjMjU2M2ViO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW0uc2VhcmNoIC5jYWxtd2ViLWFjdGl2aXR5LWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWYzYzc7XG4gICAgICBjb2xvcjogI2Q5NzcwNjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1iZWZvcmUge1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktYWZ0ZXIge1xuICAgICAgY29sb3I6ICMxMTE4Mjc7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1hcnJvdyB7XG4gICAgICBjb2xvcjogIzljYTNhZjtcbiAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktZW1wdHkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGNvbG9yOiAjOWNhM2FmO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWVtcHR5LWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LXRpbWUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgY29sb3I6ICM5Y2EzYWY7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuICBgO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlkID0gT1ZFUkxBWV9JRDtcblxuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktaWNvblwiPvCfm6HvuI88L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGl0bGVcIj5DYWxtV2ViPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWNvdW50XCI+MCBpdGVtcyBmaWx0ZXJlZDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1iYWRnZSBlbXB0eVwiPjA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1wYW5lbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGFic1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS10YWIgYWN0aXZlXCIgZGF0YS10YWI9XCJhbGxcIj5BbGw8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGFiXCIgZGF0YS10YWI9XCJuZXV0cmFsaXplZFwiPlRleHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGFiXCIgZGF0YS10YWI9XCJibG9ja2VkXCI+U2l0ZXM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGFiXCIgZGF0YS10YWI9XCJtZWRpYVwiPk1lZGlhPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWxpc3RcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBjb25zdCBoZWFkZXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhbG13ZWItYWN0aXZpdHktaGVhZGVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IHBhbmVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLWFjdGl2aXR5LXBhbmVsJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IHRhYnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhbG13ZWItYWN0aXZpdHktdGFiJyk7XG5cbiAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlzRXhwYW5kZWQgPSAhaXNFeHBhbmRlZDtcbiAgICBwYW5lbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJywgaXNFeHBhbmRlZCk7XG4gICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgIHJlbmRlckxpc3QoJ2FsbCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0YWJzLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHJlbmRlckxpc3QoKHRhYiBhcyBIVE1MRWxlbWVudCkuZGF0YXNldC50YWIgfHwgJ2FsbCcpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVCYWRnZSgpOiB2b2lkIHtcbiAgaWYgKCFvdmVybGF5KSByZXR1cm47XG5cbiAgY29uc3QgY291bnQgPSBhY3Rpdml0aWVzLmxlbmd0aDtcbiAgY29uc3QgYmFkZ2UgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLWFjdGl2aXR5LWJhZGdlJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IGNvdW50VGV4dCA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLmNhbG13ZWItYWN0aXZpdHktY291bnQnKSBhcyBIVE1MRWxlbWVudDtcblxuICBiYWRnZS50ZXh0Q29udGVudCA9IGNvdW50LnRvU3RyaW5nKCk7XG4gIGJhZGdlLmNsYXNzTGlzdC50b2dnbGUoJ2VtcHR5JywgY291bnQgPT09IDApO1xuICBjb3VudFRleHQudGV4dENvbnRlbnQgPSBgJHtjb3VudH0gaXRlbSR7Y291bnQgIT09IDEgPyAncycgOiAnJ30gZmlsdGVyZWRgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0KGZpbHRlcjogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghb3ZlcmxheSkgcmV0dXJuO1xuXG4gIGNvbnN0IGxpc3QgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLWFjdGl2aXR5LWxpc3QnKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3QgZmlsdGVyZWQgPSBmaWx0ZXIgPT09ICdhbGwnIFxuICAgID8gYWN0aXZpdGllcyBcbiAgICA6IGFjdGl2aXRpZXMuZmlsdGVyKGEgPT4gYS50eXBlID09PSBmaWx0ZXIpO1xuXG4gIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHtcbiAgICBsaXN0LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWVtcHR5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWVtcHR5LWljb25cIj7inKg8L2Rpdj5cbiAgICAgICAgPGRpdj5ObyByZWNlbnQgYWN0aXZpdHk8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGlzdC5pbm5lckhUTUwgPSBmaWx0ZXJlZC5tYXAoaXRlbSA9PiB7XG4gICAgY29uc3QgdGltZUFnbyA9IGdldFRpbWVBZ28oaXRlbS50aW1lc3RhbXApO1xuICAgIGNvbnN0IHR5cGVMYWJlbCA9IHtcbiAgICAgIG5ldXRyYWxpemVkOiAnTmV1dHJhbGl6ZWQnLFxuICAgICAgYmxvY2tlZDogJ0Jsb2NrZWQnLFxuICAgICAgbWVkaWE6ICdNZWRpYScsXG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgIH1baXRlbS50eXBlXTtcblxuICAgIGlmIChpdGVtLnR5cGUgPT09ICduZXV0cmFsaXplZCcgJiYgaXRlbS5hZnRlcikge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktaXRlbSAke2l0ZW0udHlwZX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1sYWJlbFwiPiR7dHlwZUxhYmVsfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWJlZm9yZVwiPiR7ZXNjYXBlSHRtbChpdGVtLmJlZm9yZSl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktYXJyb3dcIj7ihpM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1hZnRlclwiPiR7ZXNjYXBlSHRtbChpdGVtLmFmdGVyKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS10aW1lXCI+JHt0aW1lQWdvfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWl0ZW0gJHtpdGVtLnR5cGV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWxhYmVsXCI+JHt0eXBlTGFiZWx9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWFmdGVyXCI+JHtlc2NhcGVIdG1sKGl0ZW0uYmVmb3JlKX08L2Rpdj5cbiAgICAgICAgJHtpdGVtLnJlYXNvbiA/IGA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS10aW1lXCI+JHtpdGVtLnJlYXNvbn08L2Rpdj5gIDogJyd9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRpbWVcIj4ke3RpbWVBZ299PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9KS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGRpdi5pbm5lckhUTUw7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVBZ28odGltZXN0YW1wOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHRpbWVzdGFtcCkgLyAxMDAwKTtcbiAgaWYgKHNlY29uZHMgPCA2MCkgcmV0dXJuICdKdXN0IG5vdyc7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gIGlmIChtaW51dGVzIDwgNjApIHJldHVybiBgJHttaW51dGVzfW0gYWdvYDtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG4gIHJldHVybiBgJHtob3Vyc31oIGFnb2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBY3Rpdml0eShpdGVtOiBPbWl0PEFjdGl2aXR5SXRlbSwgJ2lkJyB8ICd0aW1lc3RhbXAnPik6IHZvaWQge1xuICBhY3Rpdml0aWVzLnVuc2hpZnQoe1xuICAgIC4uLml0ZW0sXG4gICAgaWQ6IGAke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMil9YCxcbiAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gIH0pO1xuXG4gIGlmIChhY3Rpdml0aWVzLmxlbmd0aCA+IG1heEFjdGl2aXRpZXMpIHtcbiAgICBhY3Rpdml0aWVzID0gYWN0aXZpdGllcy5zbGljZSgwLCBtYXhBY3Rpdml0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZUJhZGdlKCk7XG5cbiAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICBjb25zdCBhY3RpdmVUYWIgPSBvdmVybGF5Py5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi1hY3Rpdml0eS10YWIuYWN0aXZlJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgcmVuZGVyTGlzdChhY3RpdmVUYWI/LmRhdGFzZXQudGFiIHx8ICdhbGwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nTmV1dHJhbGl6ZWQoYmVmb3JlOiBzdHJpbmcsIGFmdGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgYWRkQWN0aXZpdHkoe1xuICAgIHR5cGU6ICduZXV0cmFsaXplZCcsXG4gICAgYmVmb3JlLFxuICAgIGFmdGVyLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ0Jsb2NrZWQoZG9tYWluOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG4gIGFkZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnYmxvY2tlZCcsXG4gICAgYmVmb3JlOiBkb21haW4sXG4gICAgcmVhc29uLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ01lZGlhKGFsdFRleHQ6IHN0cmluZywgYWN0aW9uOiAnYmx1cnJlZCcgfCAnaGlkZGVuJyk6IHZvaWQge1xuICBhZGRBY3Rpdml0eSh7XG4gICAgdHlwZTogJ21lZGlhJyxcbiAgICBiZWZvcmU6IGFsdFRleHQgfHwgJ0ltYWdlJyxcbiAgICBhZnRlcjogYWN0aW9uID09PSAnYmx1cnJlZCcgPyAnQmx1cnJlZCcgOiAnSGlkZGVuJyxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dTZWFyY2goZG9tYWluOiBzdHJpbmcpOiB2b2lkIHtcbiAgYWRkQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdzZWFyY2gnLFxuICAgIGJlZm9yZTogZG9tYWluLFxuICAgIHJlYXNvbjogJ0hpZGRlbiBmcm9tIHJlc3VsdHMnLFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRBY3Rpdml0eU92ZXJsYXkoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKSkge1xuICAgIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBBbHJlYWR5IGluaXRpYWxpemVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ1tBY3Rpdml0eU92ZXJsYXldIFN0YXJ0aW5nIGluaXRpYWxpemF0aW9uLi4uJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQ8VXNlclNldHRpbmdzPih7IFxuICAgICAgdHlwZTogTUVTU0FHRV9UWVBFUy5HRVRfU0VUVElOR1MgXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnW0FjdGl2aXR5T3ZlcmxheV0gU2V0dGluZ3MgcmVjZWl2ZWQ6Jywgc2V0dGluZ3MpO1xuXG4gICAgLy8gU2hvdyBvdmVybGF5IGlmIGFueSBmaWx0ZXJpbmcgaXMgZW5hYmxlZFxuICAgIGNvbnN0IHNob3VsZFNob3cgPSBzZXR0aW5ncz8uZW5hYmxlZCAmJiAoXG4gICAgICBzZXR0aW5ncy5uZXV0cmFsaXphdGlvbj8uZW5hYmxlZCB8fFxuICAgICAgc2V0dGluZ3MubWVkaWFGaWx0ZXI/LmVuYWJsZWQgfHxcbiAgICAgIHNldHRpbmdzLnNpdGVGaWx0ZXI/LmVuYWJsZWRcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coJ1tBY3Rpdml0eU92ZXJsYXldIHNob3VsZFNob3c6Jywgc2hvdWxkU2hvdywgJ2VuYWJsZWQ6Jywgc2V0dGluZ3M/LmVuYWJsZWQsICduZXV0cmFsaXphdGlvbjonLCBzZXR0aW5ncz8ubmV1dHJhbGl6YXRpb24/LmVuYWJsZWQsICdtZWRpYUZpbHRlcjonLCBzZXR0aW5ncz8ubWVkaWFGaWx0ZXI/LmVuYWJsZWQsICdzaXRlRmlsdGVyOicsIHNldHRpbmdzPy5zaXRlRmlsdGVyPy5lbmFibGVkKTtcblxuICAgIGlmICghc2hvdWxkU2hvdykge1xuICAgICAgY29uc29sZS5sb2coJ1tBY3Rpdml0eU92ZXJsYXldIE5vdCBzaG93aW5nIG92ZXJsYXkgLSBmaWx0ZXJpbmcgZGlzYWJsZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbmplY3RTdHlsZXMoKTtcbiAgICBvdmVybGF5ID0gY3JlYXRlT3ZlcmxheSgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgY29uc29sZS5sb2coJ1tBY3Rpdml0eU92ZXJsYXldIE92ZXJsYXkgYWRkZWQgdG8gcGFnZScpO1xuXG4gICAgLy8gTGlzdGVuIGZvciBldmVudHMgZnJvbSBjb250ZW50IHNjcmlwdHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2FsbXdlYjpuZXV0cmFsaXplZCcsICgoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGxvZ05ldXRyYWxpemVkKGUuZGV0YWlsLmJlZm9yZSwgZS5kZXRhaWwuYWZ0ZXIpO1xuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbG13ZWI6YmxvY2tlZCcsICgoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGxvZ0Jsb2NrZWQoZS5kZXRhaWwuZG9tYWluLCBlLmRldGFpbC5yZWFzb24pO1xuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbG13ZWI6bWVkaWFGaWx0ZXJlZCcsICgoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGxvZ01lZGlhKGUuZGV0YWlsLmFsdFRleHQsIGUuZGV0YWlsLmFjdGlvbik7XG4gICAgfSkgYXMgRXZlbnRMaXN0ZW5lcik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2FsbXdlYjpzZWFyY2hGaWx0ZXJlZCcsICgoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGxvZ1NlYXJjaChlLmRldGFpbC5kb21haW4pO1xuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW0FjdGl2aXR5T3ZlcmxheV0gRmFpbGVkIHRvIGluaXRpYWxpemU6JywgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpdml0eUNvdW50KCk6IG51bWJlciB7XG4gIHJldHVybiBhY3Rpdml0aWVzLmxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWN0aXZpdGllcygpOiB2b2lkIHtcbiAgYWN0aXZpdGllcyA9IFtdO1xuICB1cGRhdGVCYWRnZSgpO1xuICBpZiAoaXNFeHBhbmRlZCkge1xuICAgIHJlbmRlckxpc3QoJ2FsbCcpO1xuICB9XG59XG4iLCIvKipcbiAqIE1lZGlhIEZpbHRlciBDb250ZW50IFNjcmlwdFxuICpcbiAqIEluamVjdGVkIG9uIGFsbCBwYWdlcyB0byBmaWx0ZXIgbWVkaWEgYmFzZWQgb24gYWx0IHRleHQgYW5hbHlzaXMuXG4gKiBIYW5kbGVzIGR5bmFtaWNhbGx5IGxvYWRlZCBjb250ZW50IHZpYSBNdXRhdGlvbk9ic2VydmVyLlxuICovXG5cbmltcG9ydCB7IGRlZmluZUNvbnRlbnRTY3JpcHQgfSBmcm9tICd3eHQvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0JztcbmltcG9ydCB7IHNlbmRUb0JhY2tncm91bmQgfSBmcm9tICdAZHJhY29uL3d4dC1zaGFyZWQvZXh0ZW5zaW9uJztcbmltcG9ydCB7IE1FU1NBR0VfVFlQRVMgfSBmcm9tICdAL3NyYy9tZXNzYWdpbmcnO1xuaW1wb3J0IHR5cGUgeyBVc2VyU2V0dGluZ3MgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuaW1wb3J0IHsgXG4gIGZpbHRlck1lZGlhLCBcbiAgdW5maWx0ZXJBbGxNZWRpYSwgXG4gIHNldE1lZGlhRmlsdGVyU2V0dGluZ3MsXG4gIGdldEZpbHRlcmVkQ291bnQgXG59IGZyb20gJ0Avc3JjL21lZGlhL2FsdC10ZXh0LWZpbHRlcic7XG5pbXBvcnQgeyBpbml0TWVkaWFUb2dnbGUsIHVwZGF0ZUZpbHRlcmVkQ291bnQgfSBmcm9tICdAL3NyYy9tZWRpYS90b2dnbGUnO1xuaW1wb3J0IHsgaW5pdEFjdGl2aXR5T3ZlcmxheSB9IGZyb20gJ0Avc3JjL3VpL2FjdGl2aXR5LW92ZXJsYXknO1xuXG5sZXQgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsID0gbnVsbDtcbmxldCBkZWJvdW5jZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xubGV0IHBlcmlvZGljVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsO1xubGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkZXRlY3RTaXRlSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gIGlmIChob3N0LmluY2x1ZGVzKCd5b3V0dWJlLmNvbScpIHx8IGhvc3QuaW5jbHVkZXMoJ3lvdXR1LmJlJykpIHJldHVybiAneW91dHViZSc7XG4gIGlmIChob3N0LmluY2x1ZGVzKCdyZWRkaXQuY29tJykpIHJldHVybiAncmVkZGl0JztcbiAgaWYgKGhvc3QuaW5jbHVkZXMoJ3guY29tJykgfHwgaG9zdC5pbmNsdWRlcygndHdpdHRlci5jb20nKSkgcmV0dXJuICd4JztcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NNZWRpYSgpOiB2b2lkIHtcbiAgaWYgKGlzUHJvY2Vzc2luZykgcmV0dXJuO1xuICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBzaXRlSWQgPSBkZXRlY3RTaXRlSWQoKSB8fCB1bmRlZmluZWQ7XG4gICAgZmlsdGVyTWVkaWEoZG9jdW1lbnQsIHsgc2l0ZUlkIH0pO1xuICAgIHVwZGF0ZUZpbHRlcmVkQ291bnQoZ2V0RmlsdGVyZWRDb3VudCgpKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZWRQcm9jZXNzKCk6IHZvaWQge1xuICBpZiAoZGVib3VuY2VUaW1lcikgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dChwcm9jZXNzTWVkaWEsIDE1MCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0T2JzZXJ2ZXIoKTogdm9pZCB7XG4gIGlmIChvYnNlcnZlcikgcmV0dXJuO1xuXG4gIGNvbnN0IHByb2Nlc3NNdXRhdGlvbnMgPSAobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgbGV0IHNob3VsZFByb2Nlc3MgPSBmYWxzZTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XG4gICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lNRycgfHwgXG4gICAgICAgICAgICAgICAgbm9kZS50YWdOYW1lID09PSAnVklERU8nIHx8XG4gICAgICAgICAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWdbYWx0XSwgdmlkZW9bYXJpYS1sYWJlbF0sIFtyb2xlPVwiaW1nXCJdJykpIHtcbiAgICAgICAgICAgICAgc2hvdWxkUHJvY2VzcyA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdhbHQnIHx8IFxuICAgICAgICAgICAgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2FyaWEtbGFiZWwnIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnc3JjJykge1xuICAgICAgICAgIHNob3VsZFByb2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChzaG91bGRQcm9jZXNzKSBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHNob3VsZFByb2Nlc3MpIHtcbiAgICAgIGRlYm91bmNlZFByb2Nlc3MoKTtcbiAgICB9XG4gIH07XG5cbiAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihwcm9jZXNzTXV0YXRpb25zKTtcblxuICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGF0dHJpYnV0ZUZpbHRlcjogWydhbHQnLCAnYXJpYS1sYWJlbCcsICdzcmMnXSxcbiAgfSk7XG5cbiAgLy8gUGVyaW9kaWMgc2NhbiBmb3IgYW55IG1pc3NlZCBjb250ZW50IChoYW5kbGVzIGVkZ2UgY2FzZXMpXG4gIHBlcmlvZGljVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgdW5wcm9jZXNzZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbYWx0XTpub3QoW2RhdGEtY2FsbXdlYi1tZWRpYS1ibHVycmVkXSk6bm90KFtkYXRhLWNhbG13ZWItbWVkaWEtaGlkZGVuXSknKTtcbiAgICBpZiAodW5wcm9jZXNzZWQubGVuZ3RoID4gMCkge1xuICAgICAgcHJvY2Vzc01lZGlhKCk7XG4gICAgfVxuICB9LCAzMDAwKTtcbn1cblxuZnVuY3Rpb24gc3RvcE9ic2VydmVyKCk6IHZvaWQge1xuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgb2JzZXJ2ZXIgPSBudWxsO1xuICB9XG4gIGlmIChwZXJpb2RpY1RpbWVyKSB7XG4gICAgY2xlYXJJbnRlcnZhbChwZXJpb2RpY1RpbWVyKTtcbiAgICBwZXJpb2RpY1RpbWVyID0gbnVsbDtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICBpbml0QWN0aXZpdHlPdmVybGF5KCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQ8VXNlclNldHRpbmdzPih7IFxuICAgICAgdHlwZTogTUVTU0FHRV9UWVBFUy5HRVRfU0VUVElOR1MgXG4gICAgfSk7XG5cbiAgICBpZiAoIXNldHRpbmdzKSByZXR1cm47XG5cbiAgICBpZiAoc2V0dGluZ3MubWVkaWFGaWx0ZXIpIHtcbiAgICAgIHNldE1lZGlhRmlsdGVyU2V0dGluZ3Moc2V0dGluZ3MubWVkaWFGaWx0ZXIpO1xuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncy5tZWRpYUZpbHRlcj8uc2hvd1RvZ2dsZSkge1xuICAgICAgYXdhaXQgaW5pdE1lZGlhVG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzLm1lZGlhRmlsdGVyPy5lbmFibGVkICYmIHNldHRpbmdzLm1lZGlhRmlsdGVyLm1vZGUgIT09ICdvZmYnKSB7XG4gICAgICBwcm9jZXNzTWVkaWEoKTtcbiAgICAgIHN0YXJ0T2JzZXJ2ZXIoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2FsbXdlYjptZWRpYUZpbHRlckNoYW5nZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBuZXdTZXR0aW5ncyA9IGUuZGV0YWlsO1xuICAgICAgc2V0TWVkaWFGaWx0ZXJTZXR0aW5ncyhuZXdTZXR0aW5ncyk7XG4gICAgICBcbiAgICAgIGlmIChuZXdTZXR0aW5ncy5lbmFibGVkICYmIG5ld1NldHRpbmdzLm1vZGUgIT09ICdvZmYnKSB7XG4gICAgICAgIHByb2Nlc3NNZWRpYSgpO1xuICAgICAgICBzdGFydE9ic2VydmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bmZpbHRlckFsbE1lZGlhKCk7XG4gICAgICAgIHN0b3BPYnNlcnZlcigpO1xuICAgICAgfVxuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgLy8gSGFuZGxlIHNjcm9sbCBldmVudHMgZm9yIGxhenktbG9hZGVkIGltYWdlc1xuICAgIGxldCBzY3JvbGxUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFRpbWVyKSBjbGVhclRpbWVvdXQoc2Nyb2xsVGltZXIpO1xuICAgICAgc2Nyb2xsVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHNldHRpbmdzLm1lZGlhRmlsdGVyPy5lbmFibGVkICYmIHNldHRpbmdzLm1lZGlhRmlsdGVyLm1vZGUgIT09ICdvZmYnKSB7XG4gICAgICAgICAgcHJvY2Vzc01lZGlhKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMCk7XG4gICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgLy8gSGFuZGxlIFVSTCBjaGFuZ2VzIChTUEEgbmF2aWdhdGlvbilcbiAgICBsZXQgbGFzdFVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgdXJsT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICBpZiAobG9jYXRpb24uaHJlZiAhPT0gbGFzdFVybCkge1xuICAgICAgICBsYXN0VXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgaWYgKHNldHRpbmdzLm1lZGlhRmlsdGVyPy5lbmFibGVkICYmIHNldHRpbmdzLm1lZGlhRmlsdGVyLm1vZGUgIT09ICdvZmYnKSB7XG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzTWVkaWEsIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB1cmxPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW01lZGlhRmlsdGVyXSBGYWlsZWQgdG8gaW5pdGlhbGl6ZTonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29udGVudFNjcmlwdCh7XG4gIG1hdGNoZXM6IFsnPGFsbF91cmxzPiddLFxuICBydW5BdDogJ2RvY3VtZW50X2lkbGUnLFxuICBtYWluOiBpbml0LFxufSk7XG4iXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSw0LDUsNiw3LDEwLDExLDEyLDEzLDE0LDE1LDE2XSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQSxTQUFTLG9CQUFvQixZQUFZO0FBQ3hDLFNBQU87Ozs7O0FDRlIsR0FBQyxTQUFVLFFBQVEsU0FBUztBQUMxQixPQUFJLE9BQU8sV0FBVyxjQUFjLE9BQU8sSUFDekMsUUFBTyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsUUFBUTtZQUMzQyxPQUFPLFlBQVksWUFDNUIsU0FBUSxPQUFPO1FBQ1Y7SUFDTCxJQUFJLE1BQU0sRUFDUixTQUFTLEVBQUUsRUFDWjtBQUNELFlBQVEsSUFBSTtBQUNaLFdBQU8sVUFBVSxJQUFJOztLQUV0QixPQUFPLGVBQWUsY0FBYyxhQUFhLE9BQU8sU0FBUyxjQUFjLE9BQUEsU0FBYSxTQUFVLFVBQVE7QUFPL0c7QUFFQSxPQUFJLEVBQUUsV0FBVyxVQUFVLFdBQVcsT0FBTyxXQUFXLFdBQVcsT0FBTyxRQUFRLElBQ2hGLE9BQU0sSUFBSSxNQUFNLDREQUE0RDtBQUU5RSxPQUFJLEVBQUUsV0FBVyxXQUFXLFdBQVcsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUs7SUFDeEYsTUFBTSxtREFBbUQ7SUFPekQsTUFBTSxZQUFXLGtCQUFpQjtLQUloQyxNQUFNLGNBQWM7TUFDbEIsVUFBVTtPQUNSLFNBQVM7UUFDUCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxPQUFPO1FBQ0wsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxhQUFhO09BQ1gsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxPQUFPO1FBQ0wsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGVBQWU7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdB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