var searchFilter = (function() {
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
	ZodEnum.create;
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
	//#region src/filter/categories.ts
	var SITE_CATEGORIES = [
		{
			id: "content_farms",
			name: "Content Farms",
			description: "Algorithmic feeds, ads mixed with content, engagement traps, streaming ads",
			icon: "🚫",
			domains: [
				"google.com",
				"www.google.com",
				"news.google.com",
				"maps.google.com",
				"bing.com",
				"www.bing.com",
				"yahoo.com",
				"search.yahoo.com",
				"baidu.com",
				"sogou.com",
				"yandex.com",
				"youtube.com",
				"youtu.be",
				"twitch.tv",
				"open.spotify.com",
				"spotify.com",
				"soundcloud.com",
				"reddit.com",
				"old.reddit.com",
				"new.reddit.com",
				"bbc.com",
				"bbc.co.uk",
				"news.bbc.co.uk",
				"cnn.com",
				"edition.cnn.com",
				"foxnews.com",
				"dailymail.co.uk",
				"mailonline.co.uk",
				"thesun.co.uk",
				"metro.co.uk",
				"express.co.uk",
				"washingtonpost.com",
				"nytimes.com",
				"wsj.com",
				"theguardian.com",
				"facebook.com",
				"instagram.com",
				"twitter.com",
				"x.com",
				"tiktok.com",
				"snapchat.com",
				"threads.net",
				"bsky.app",
				"play.google.com",
				"apps.apple.com",
				"apps.apple.com",
				"buzzfeed.com",
				"upworthy.com",
				"viralnova.com",
				"diply.com",
				"clickhole.com",
				"quora.com",
				"medium.com",
				"substack.com"
			]
		},
		{
			id: "social_media",
			name: "Social Media",
			description: "Facebook, Twitter, Instagram, TikTok, etc.",
			icon: "👥",
			domains: [
				"facebook.com",
				"instagram.com",
				"twitter.com",
				"x.com",
				"tiktok.com",
				"snapchat.com",
				"pinterest.com",
				"reddit.com",
				"linkedin.com",
				"tumblr.com",
				"mastodon.social",
				"threads.net",
				"bsky.app",
				"discord.com",
				"discord.gg"
			]
		},
		{
			id: "gambling",
			name: "Gambling",
			description: "Online casinos, betting, lottery sites",
			icon: "🎰",
			domains: [
				"pokerstars.com",
				"888.com",
				"bet365.com",
				"betway.com",
				"unibet.com",
				"casino.com",
				"slotomania.com",
				"zynga.com",
				"draftkings.com",
				"fanduel.com",
				"betmgm.com",
				"caesars.com"
			]
		},
		{
			id: "adult",
			name: "Adult Content",
			description: "Pornography and adult material",
			icon: "🔞",
			domains: [
				"pornhub.com",
				"xvideos.com",
				"xnxx.com",
				"xhamster.com",
				"redtube.com",
				"youporn.com",
				"onlyfans.com",
				"chaturbate.com"
			]
		},
		{
			id: "piracy",
			name: "Piracy",
			description: "Torrent, streaming, download sites",
			icon: "🏴‍☠️",
			domains: [
				"thepiratebay.org",
				"1337x.to",
				"rarbg.to",
				"yts.mx",
				"fmovies.to",
				"123movies.com",
				"putlocker.to",
				"soap2day.to",
				"kisscartoon.li",
				"gogoanime.io",
				"9anime.to"
			]
		},
		{
			id: "malware",
			name: "Malware",
			description: "Known malicious and phishing sites",
			icon: "🦠",
			domains: []
		},
		{
			id: "spam",
			name: "Spam & Clickbait",
			description: "Low-quality, spammy content farms",
			icon: "📧",
			domains: [
				"buzzfeed.com",
				"dailymail.co.uk",
				"thesun.co.uk",
				"metro.co.uk",
				"express.co.uk",
				"washingtonexaminer.com",
				"breitbart.com",
				"naturalnews.com",
				"infowars.com",
				"beforeitsnews.com"
			]
		},
		{
			id: "fake_news",
			name: "Fake News",
			description: "Known disinformation sources",
			icon: "📰",
			domains: [
				"naturalnews.com",
				"infowars.com",
				"beforeitsnews.com",
				"worldtruth.tv",
				"yournewswire.com",
				"prntly.com"
			]
		},
		{
			id: "productivity",
			name: "Productivity Blockers",
			description: "Distractions during work hours",
			icon: "⏰",
			domains: [
				"youtube.com",
				"netflix.com",
				"twitch.tv",
				"hulu.com",
				"disneyplus.com",
				"hbo.com",
				"primevideo.com",
				"crunchyroll.com"
			]
		},
		{
			id: "shopping",
			name: "Shopping",
			description: "E-commerce sites",
			icon: "🛒",
			domains: [
				"amazon.com",
				"ebay.com",
				"aliexpress.com",
				"wish.com",
				"etsy.com",
				"walmart.com",
				"target.com",
				"bestbuy.com",
				"etsy.com",
				"mercari.com",
				"poshmark.com"
			]
		},
		{
			id: "gaming",
			name: "Gaming",
			description: "Gaming sites and platforms",
			icon: "🎮",
			domains: [
				"steam.com",
				"epicgames.com",
				"gog.com",
				"origin.com",
				"battlenet.com",
				"roblox.com",
				"minecraft.net",
				"riotgames.com"
			]
		},
		{
			id: "streaming",
			name: "Streaming",
			description: "Video and music streaming",
			icon: "📺",
			domains: [
				"netflix.com",
				"youtube.com",
				"twitch.tv",
				"spotify.com",
				"soundcloud.com",
				"vimeo.com",
				"dailymotion.com"
			]
		},
		{
			id: "news",
			name: "News Sites",
			description: "General news outlets",
			icon: "📰",
			domains: [
				"cnn.com",
				"foxnews.com",
				"msnbc.com",
				"bbc.com",
				"nytimes.com",
				"washingtonpost.com",
				"theguardian.com",
				"wsj.com",
				"reuters.com",
				"apnews.com",
				"npr.org",
				"bloomberg.com",
				"forbes.com"
			]
		}
	];
	var DOMAIN_TO_CATEGORY = new Map(SITE_CATEGORIES.flatMap((cat) => cat.domains.map((domain) => [domain, cat.id])));
	function getCategoryForDomain(domain) {
		if (DOMAIN_TO_CATEGORY.has(domain)) return DOMAIN_TO_CATEGORY.get(domain) || null;
		const parts = domain.split(".");
		for (let i = 1; i < parts.length; i++) {
			const parentDomain = parts.slice(i).join(".");
			if (DOMAIN_TO_CATEGORY.has(parentDomain)) return DOMAIN_TO_CATEGORY.get(parentDomain) || null;
		}
		return null;
	}
	//#endregion
	//#region src/filter/blocklist-fetcher.ts
	var BLOCKLIST_SOURCES = [
		{
			id: "calmweb-content-farms",
			name: "CalmWeb Content Farms",
			category: "content_farms",
			url: "https://raw.githubusercontent.com/anomalyco/calmweb/main/blocklists/content-farms.json",
			format: "json",
			enabled: true
		},
		{
			id: "calmweb-user-favoring",
			name: "CalmWeb User-Favoring Sites",
			category: "user_favoring",
			url: "https://raw.githubusercontent.com/anomalyco/calmweb/main/blocklists/user-favoring.json",
			format: "json",
			enabled: true
		},
		{
			id: "stevenblack-unified",
			name: "Steven Black Unified",
			category: "malware",
			url: "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
			format: "hosts",
			enabled: true
		},
		{
			id: "stevenblack-fakenews",
			name: "Fake News Blocklist",
			category: "fake_news",
			url: "https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews/hosts",
			format: "hosts",
			enabled: true
		},
		{
			id: "stevenblack-gambling",
			name: "Gambling Blocklist",
			category: "gambling",
			url: "https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/gambling/hosts",
			format: "hosts",
			enabled: true
		},
		{
			id: "stevenblack-social",
			name: "Social Media Blocklist",
			category: "social_media",
			url: "https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/social/hosts",
			format: "hosts",
			enabled: false
		},
		{
			id: "stevenblack-adult",
			name: "Adult Content Blocklist",
			category: "adult",
			url: "https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/porn/hosts",
			format: "hosts",
			enabled: false
		},
		{
			id: "oisd-full",
			name: "OISD Blocklist",
			category: "malware",
			url: "https://big.oisd.nl/",
			format: "hosts",
			enabled: true
		},
		{
			id: "blocklist-site-spam",
			name: "Spam Blocklist",
			category: "spam",
			url: "https://blocklist.site/app/dl/spam",
			format: "plain",
			enabled: true
		}
	];
	var CACHE_KEY = "calmweb-blocklist-cache";
	var CACHE_DURATION = 1440 * 60 * 1e3;
	var cachedBlocklist = /* @__PURE__ */ new Set();
	var cachedUserFavoring = /* @__PURE__ */ new Set();
	var cacheInitialized = false;
	var DEFAULT_BLOCKLISTS = {
		"calmweb-content-farms": [
			"reddit.com",
			"www.reddit.com",
			"old.reddit.com",
			"new.reddit.com",
			"facebook.com",
			"www.facebook.com",
			"instagram.com",
			"www.instagram.com",
			"twitter.com",
			"x.com",
			"www.x.com",
			"tiktok.com",
			"www.tiktok.com",
			"snapchat.com",
			"www.snapchat.com",
			"youtube.com",
			"youtu.be",
			"www.youtube.com",
			"vimeo.com",
			"www.vimeo.com",
			"dailymotion.com",
			"www.dailymotion.com",
			"twitch.tv",
			"www.twitch.tv",
			"ext-twitch.tv",
			"spotify.com",
			"open.spotify.com",
			"www.spotify.com",
			"byspotify.com",
			"tospotify.com",
			"soundcloud.com",
			"www.soundcloud.com",
			"netflix.com",
			"www.netflix.com",
			"netflix.net",
			"hulu.com",
			"www.hulu.com",
			"disneyplus.com",
			"www.disneyplus.com",
			"hbomax.com",
			"www.hbomax.com",
			"primevideo.com",
			"www.primevideo.com",
			"cnn.com",
			"www.cnn.com",
			"edition.cnn.com",
			"bbc.com",
			"bbc.co.uk",
			"www.bbc.com",
			"nytimes.com",
			"www.nytimes.com",
			"washingtonpost.com",
			"www.washingtonpost.com",
			"wsj.com",
			"www.wsj.com",
			"theguardian.com",
			"www.theguardian.com",
			"forbes.com",
			"www.forbes.com",
			"reuters.com",
			"www.reuters.com",
			"apnews.com",
			"www.apnews.com",
			"amazon.com",
			"www.amazon.com",
			"ebay.com",
			"www.ebay.com",
			"aliexpress.com",
			"www.aliexpress.com",
			"wish.com",
			"www.wish.com",
			"etsy.com",
			"www.etsy.com",
			"walmart.com",
			"www.walmart.com",
			"target.com",
			"www.target.com",
			"bestbuy.com",
			"www.bestbuy.com",
			"shopee.com",
			"www.shopee.com",
			"shopify.com",
			"www.shopify.com",
			"quora.com",
			"www.quora.com",
			"medium.com",
			"www.medium.com",
			"substack.com",
			"www.substack.com",
			"google.com",
			"www.google.com",
			"bing.com",
			"www.bing.com",
			"yahoo.com",
			"search.yahoo.com",
			"baidu.com",
			"sogou.com",
			"yandex.com",
			"linkedin.com",
			"www.linkedin.com",
			"pinterest.com",
			"www.pinterest.com",
			"tumblr.com",
			"www.tumblr.com"
		],
		"calmweb-user-favoring": [
			"wikipedia.org",
			"www.wikipedia.org",
			"wikimedia.org",
			"www.wikimedia.org",
			"github.com",
			"www.github.com",
			"githubusercontent.com",
			"gitlab.com",
			"www.gitlab.com",
			"stackoverflow.com",
			"www.stackoverflow.com",
			"stackexchange.com",
			"www.stackexchange.com",
			"npmjs.com",
			"www.npmjsjs.com",
			"pypi.org",
			"www.pypi.org",
			"docker.com",
			"www.docker.com",
			"arxiv.org",
			"www.arxiv.org",
			"springer.com",
			"nature.com",
			"science.org",
			"mit.edu",
			"harvard.edu",
			"stanford.edu",
			"berkeley.edu",
			"nasa.gov",
			"www.nasa.gov",
			"noaa.gov",
			"epa.gov",
			"irs.gov",
			"ssa.gov",
			"cdc.gov",
			"nih.gov",
			"paypal.com",
			"www.paypal.com",
			"duckduckgo.com",
			"www.duckduckgo.com",
			"startpage.com",
			"www.startpage.com"
		]
	};
	function initBlocklistCache() {
		if (cacheInitialized) return;
		cacheInitialized = true;
		cachedBlocklist = new Set(DEFAULT_BLOCKLISTS["calmweb-content-farms"] || []);
		cachedUserFavoring = new Set(DEFAULT_BLOCKLISTS["calmweb-user-favoring"] || []);
		console.log(`[Blocklist] Loaded defaults: ${cachedBlocklist.size} blocklist, ${cachedUserFavoring.size} user-favoring`);
		updateAllBlocklists().then((cache) => {
			cachedBlocklist = /* @__PURE__ */ new Set();
			cachedUserFavoring = /* @__PURE__ */ new Set();
			for (const [sourceId, domains] of cache.entries()) if (BLOCKLIST_SOURCES.find((s) => s.id === sourceId)?.category === "user_favoring") domains.forEach((d) => cachedUserFavoring.add(d));
			else domains.forEach((d) => cachedBlocklist.add(d));
			console.log(`[Blocklist] Updated cache: ${cachedBlocklist.size} blocklist, ${cachedUserFavoring.size} user-favoring`);
		}).catch((err) => {
			console.warn("[Blocklist] Remote fetch failed, using defaults:", err);
		});
		getCachedBlocklists().then((cache) => {
			if (cachedBlocklist.size === 0 && cache.size > 0) {
				cachedBlocklist = /* @__PURE__ */ new Set();
				cachedUserFavoring = /* @__PURE__ */ new Set();
				for (const [sourceId, domains] of cache.entries()) if (BLOCKLIST_SOURCES.find((s) => s.id === sourceId)?.category === "user_favoring") domains.forEach((d) => cachedUserFavoring.add(d));
				else domains.forEach((d) => cachedBlocklist.add(d));
			}
		}).catch(() => {});
	}
	function isDomainBlockedSync(domain) {
		const normalized = domain.toLowerCase().replace(/^www\./, "");
		if (cachedUserFavoring.size > 0) {
			if (cachedUserFavoring.has(normalized)) return false;
			const parts = normalized.split(".");
			for (let i = 1; i < parts.length; i++) {
				const parent = parts.slice(i).join(".");
				if (cachedUserFavoring.has(parent)) return false;
			}
		}
		if (cachedBlocklist.has(normalized)) return true;
		const parts = normalized.split(".");
		for (let i = 1; i < parts.length; i++) {
			const parent = parts.slice(i).join(".");
			if (cachedBlocklist.has(parent)) return true;
		}
		return false;
	}
	async function fetchBlocklist(source) {
		try {
			const response = await fetch(source.url, { headers: { "Accept": "text/plain, application/json" } });
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const domains = parseBlocklist(await response.text(), source.format);
			console.log(`[Blocklist] Fetched ${source.name}: ${domains.length} domains`);
			return domains;
		} catch (error) {
			console.warn(`[Blocklist] Failed to fetch ${source.name}, trying local fallback:`, error);
			return fetchLocalBlocklist(source);
		}
	}
	async function fetchLocalBlocklist(source) {
		const localPath = {
			"calmweb-content-farms": "/blocklists/content-farms.json",
			"calmweb-user-favoring": "/blocklists/user-favoring.json"
		}[source.id];
		if (!localPath) return [];
		try {
			const url = typeof chrome !== "undefined" && chrome.runtime?.getURL ? chrome.runtime.getURL(localPath) : localPath;
			const response = await fetch(url);
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const domains = parseBlocklist(await response.text(), source.format);
			console.log(`[Blocklist] Loaded local ${source.name}: ${domains.length} domains`);
			return domains;
		} catch (error) {
			console.error(`[Blocklist] Failed to load local ${source.name}:`, error);
			return [];
		}
	}
	function parseBlocklist(content, format) {
		const domains = [];
		const lines = content.split("\n");
		for (const line of lines) {
			const trimmed = line.trim();
			if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("!") || trimmed.startsWith("[")) continue;
			let domain = null;
			if (format === "hosts") {
				const parts = trimmed.split(/\s+/);
				if (parts.length >= 2) domain = parts[1];
			} else if (format === "plain") domain = trimmed;
			else if (format === "json") try {
				const parsed = JSON.parse(content);
				if (Array.isArray(parsed)) return parsed.filter((d) => typeof d === "string");
				else if (parsed.categories && Array.isArray(parsed.categories)) return parsed.categories.flatMap((cat) => cat.domains || []).filter((d) => typeof d === "string");
				else if (parsed.domains && Array.isArray(parsed.domains)) return parsed.domains.filter((d) => typeof d === "string");
			} catch {}
			if (domain && isValidDomain(domain)) domains.push(domain.toLowerCase());
		}
		return [...new Set(domains)];
	}
	function isValidDomain(domain) {
		if (domain === "localhost" || domain === "localhost.localdomain" || domain === "broadcasthost" || domain === "ip6-localhost" || domain.startsWith("::1") || /^\d+\.\d+\.\d+\.\d+$/.test(domain)) return false;
		return /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i.test(domain);
	}
	async function updateAllBlocklists() {
		const results = /* @__PURE__ */ new Map();
		const enabledSources = BLOCKLIST_SOURCES.filter((s) => s.enabled);
		await Promise.all(enabledSources.map(async (source) => {
			const domains = await fetchBlocklist(source);
			if (domains.length > 0) results.set(source.id, domains);
		}));
		const cache = [];
		for (const [sourceId, domains] of results) cache.push({
			sourceId,
			domains,
			lastUpdated: Date.now(),
			domainCount: domains.length
		});
		await saveCache(cache);
		return results;
	}
	async function getCachedBlocklists() {
		try {
			const cache = (await chrome.storage.local.get(CACHE_KEY))[CACHE_KEY] || [];
			const results = /* @__PURE__ */ new Map();
			const now = Date.now();
			for (const item of cache) if (now - item.lastUpdated < CACHE_DURATION) results.set(item.sourceId, item.domains);
			return results;
		} catch {
			return /* @__PURE__ */ new Map();
		}
	}
	async function saveCache(cache) {
		await chrome.storage.local.set({ [CACHE_KEY]: cache });
	}
	//#endregion
	//#region src/filter/search-filter.ts
	initBlocklistCache();
	var SEARCH_SELECTORS = {
		google: {
			results: "[data-sokoban-container] .g, #search .g, #rso .g, .MjjYud",
			link: "a[href*=\"url?\"], a[href^=\"http\"]:not([href*=\"google.com\"])",
			title: "h3, [role=\"heading\"]",
			container: ".g, .MjjYud, [data-sokoban-container]"
		},
		bing: {
			results: "#b_results .b_algo",
			link: "h2 a, .b_title a",
			title: "h2, .b_title",
			container: ".b_algo"
		},
		duckduckgo: {
			results: "article, .result.results_links, li[data-testid=\"result\"]",
			link: "a[href^=\"http\"]:not([href*=\"duckduckgo.com\"])",
			title: "h2, h3",
			container: "article, .result, li"
		},
		yahoo: {
			results: "#web .dd, .search-Result",
			link: "h3 a, .algo-title a",
			title: "h3, .algo-title",
			container: ".dd, .algo"
		}
	};
	function detectSearchEngine(url = window.location.href) {
		try {
			const parsed = new URL(url, window.location.href);
			const host = parsed.hostname;
			const path = parsed.pathname;
			if (host.includes("google.com") && (path.includes("/search") || path.includes("/webhp"))) return "google";
			if (host.includes("bing.com") && path.includes("/search")) return "bing";
			if (host.includes("duckduckgo.com")) return "duckduckgo";
			if (host.includes("yahoo.com") && path.includes("/search")) return "yahoo";
			if (host.includes("search.brave.com")) return "brave";
			if (host.includes("yandex.com")) return "yandex";
			return null;
		} catch {
			return null;
		}
	}
	function normalizeSearchResultUrl(url) {
		try {
			const urlObj = new URL(url, window.location.href);
			if (urlObj.hostname.includes("duckduckgo.com") || urlObj.pathname.startsWith("/l")) {
				const ddgTarget = urlObj.searchParams.get("uddg") || urlObj.searchParams.get("u") || urlObj.searchParams.get("rdrurl");
				if (ddgTarget) try {
					return decodeURIComponent(ddgTarget);
				} catch {
					return ddgTarget;
				}
			}
			if (urlObj.pathname === "/url") {
				const googleTarget = urlObj.searchParams.get("q") || urlObj.searchParams.get("url");
				if (googleTarget) try {
					return decodeURIComponent(googleTarget);
				} catch {
					return googleTarget;
				}
			}
			return urlObj.toString();
		} catch {
			return url;
		}
	}
	function extractDomainFromUrl(url) {
		try {
			const resolvedUrl = normalizeSearchResultUrl(url);
			return new URL(resolvedUrl, window.location.href).hostname.replace(/^www\./, "");
		} catch {
			return null;
		}
	}
	function shouldFilterResultSync(domain, settings) {
		if (settings.customAllowlist.some((allowed) => domain === allowed || domain.endsWith("." + allowed))) return {
			filter: false,
			reason: "allowlist"
		};
		const category = getCategoryForDomain(domain);
		if (category && settings.blockedCategories.includes(category)) return {
			filter: true,
			category,
			reason: "category"
		};
		if (settings.customBlocklist.some((blocked) => domain === blocked || domain.endsWith("." + blocked))) return {
			filter: true,
			reason: "custom"
		};
		if (settings.useExternalBlocklists) {
			if (isDomainBlockedSync(domain)) return {
				filter: true,
				reason: "external_blocklist"
			};
		}
		return {
			filter: false,
			reason: "none"
		};
	}
	function createCategoryBadge(category) {
		const info = SITE_CATEGORIES.find((c) => c.id === category);
		const badge = document.createElement("span");
		badge.className = "calmweb-category-badge";
		badge.style.cssText = `
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    background: rgba(99, 102, 241, 0.1);
    color: #6366f1;
    margin-left: 8px;
    vertical-align: middle;
  `;
		badge.textContent = `${info?.icon || "🚫"} ${info?.name || category}`;
		badge.setAttribute("data-calmweb-badge", category);
		return badge;
	}
	function filterSearchResults(settings, engineOverride) {
		if (!settings.enabled) {
			console.log("[SearchFilter] Filtering disabled");
			return {
				total: 0,
				filtered: 0,
				byCategory: {}
			};
		}
		const engine = engineOverride ?? detectSearchEngine();
		if (!engine) {
			console.log("[SearchFilter] No search engine detected");
			return {
				total: 0,
				filtered: 0,
				byCategory: {}
			};
		}
		const selectors = SEARCH_SELECTORS[engine];
		if (!selectors) {
			console.log("[SearchFilter] No selectors for engine:", engine);
			return {
				total: 0,
				filtered: 0,
				byCategory: {}
			};
		}
		const results = document.querySelectorAll(selectors.results);
		let total = 0;
		let filtered = 0;
		const byCategory = {};
		results.forEach((result) => {
			const link = result.querySelector(selectors.link);
			if (!link) return;
			const href = link.href;
			if (!href || href.includes("duckduckgo.com") || href.includes("javascript:")) return;
			const domain = extractDomainFromUrl(href);
			if (!domain) return;
			total++;
			const filterResult = shouldFilterResultSync(domain, settings);
			if (filterResult.filter) {
				filtered++;
				if (filterResult.category) byCategory[filterResult.category] = (byCategory[filterResult.category] || 0) + 1;
				if (settings.hideBlocked) {
					result.style.display = "none";
					result.setAttribute("data-calmweb-filtered", "true");
					result.setAttribute("data-calmweb-reason", filterResult.reason);
					if (filterResult.category) result.setAttribute("data-calmweb-category", filterResult.category);
					window.dispatchEvent(new CustomEvent("calmweb:searchFiltered", { detail: {
						domain,
						reason: filterResult.reason,
						category: filterResult.category
					} }));
				} else {
					const title = result.querySelector(selectors.title);
					if (title && !title.querySelector(".calmweb-category-badge")) title.appendChild(createCategoryBadge(filterResult.category || "custom"));
					result.setAttribute("data-calmweb-flagged", "true");
				}
			}
		});
		return {
			total,
			filtered,
			byCategory
		};
	}
	function unfilterSearchResults() {
		document.querySelectorAll("[data-calmweb-filtered], [data-calmweb-flagged]").forEach((el) => {
			el.style.display = "";
			el.removeAttribute("data-calmweb-filtered");
			el.removeAttribute("data-calmweb-flagged");
			el.removeAttribute("data-calmweb-reason");
			el.removeAttribute("data-calmweb-category");
		});
		document.querySelectorAll(".calmweb-category-badge").forEach((badge) => badge.remove());
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
	//#region entrypoints/search-filter.ts
	/**
	* Search Filter Content Script
	*
	* Filters search results on Google, Bing, DuckDuckGo to hide blocked sites.
	* Also supports redirecting all search to DuckDuckGo.
	*/
	var observer = null;
	var debounceTimer = null;
	function processResults() {
		const settings = getCurrentSettings();
		if (!settings) {
			console.log("[SearchFilter] No settings available");
			return;
		}
		const engine = detectSearchEngine();
		console.log("[SearchFilter] processResults - engine:", engine, "redirectToDDG:", settings.siteFilter?.redirectToDDG);
		if (settings?.siteFilter?.searchFilterEnabled) {
			console.log("[SearchFilter] Processing results with settings:", {
				hideBlocked: settings.siteFilter.hideBlockedResults,
				useExternalBlocklists: settings.siteFilter.useExternalBlocklists,
				blockedCategories: settings.siteFilter.blockedCategories?.length || 0
			});
			const result = filterSearchResults({
				enabled: true,
				hideBlocked: settings.siteFilter.hideBlockedResults ?? true,
				showCategoryBadge: settings.siteFilter.showCategoryBadge ?? true,
				blockedCategories: settings.siteFilter.blockedCategories ?? [],
				customBlocklist: settings.siteFilter.customBlocklist ?? [],
				customAllowlist: settings.siteFilter.customAllowlist ?? [],
				useExternalBlocklists: settings.siteFilter.useExternalBlocklists ?? true
			});
			if (result.filtered > 0) console.log(`[SearchFilter] Filtered ${result.filtered}/${result.total} results`, result.byCategory);
			else if (result.total > 0) console.log(`[SearchFilter] Found ${result.total} results, filtered ${result.filtered}`);
			else console.log("[SearchFilter] No results found with current selectors");
		} else console.log("[SearchFilter] Search filter not enabled in settings");
	}
	function debouncedProcess() {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(processResults, 200);
	}
	function startObserver() {
		if (observer) return;
		observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) if (mutation.type === "childList") {
				for (const node of Array.from(mutation.addedNodes)) if (node instanceof HTMLElement) {
					if (node.querySelector("#search, #b_results, #links, [data-sokoban-container], .results, .searchResults, ol.react-results--main, #react-layout") || node.id === "react-layout" || node.classList.contains("results") || node.closest("#react-layout, .results, #links")) {
						console.log("[SearchFilter] Detected search results container");
						debouncedProcess();
						return;
					}
				}
			}
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	}
	var currentSettings = null;
	function getCurrentSettings() {
		return currentSettings;
	}
	async function init() {
		const engine = detectSearchEngine();
		if (!engine) {
			console.log("[SearchFilter] No search engine detected on:", window.location.hostname);
			return;
		}
		console.log(`[SearchFilter] Detected ${engine}, initializing...`);
		try {
			const stored = await chrome.storage.local.get("calmweb-settings");
			const settings = stored["calmweb-settings"];
			console.log("[SearchFilter] Redirect check - settings:", settings?.siteFilter?.redirectToDDG, "stored:", stored);
		} catch (e) {
			console.log("[SearchFilter] Could not read redirect setting:", e);
		}
		initActivityOverlay();
		try {
			const fullSettings = await sendToBackground({ type: MESSAGE_TYPES.GET_SETTINGS });
			if (!fullSettings) {
				console.error("[SearchFilter] Failed to get settings");
				return;
			}
			currentSettings = fullSettings;
			setTimeout(processResults, 300);
			if (detectSearchEngine() === "duckduckgo") {
				setTimeout(processResults, 800);
				setTimeout(processResults, 1500);
				setTimeout(processResults, 3e3);
			}
			startObserver();
			let lastUrl = location.href;
			new MutationObserver(() => {
				if (location.href !== lastUrl) {
					console.log("[SearchFilter] URL changed, re-processing...");
					lastUrl = location.href;
					setTimeout(processResults, 500);
				}
			}).observe(document.body, {
				childList: true,
				subtree: true
			});
			window.addEventListener("calmweb:siteFilterChanged", ((e) => {
				currentSettings = {
					...currentSettings,
					siteFilter: e.detail
				};
				unfilterSearchResults();
				processResults();
			}));
		} catch (error) {
			console.error("[SearchFilter] Failed to initialize:", error);
		}
	}
	var search_filter_default = defineContentScript({
		matches: [
			"*://*.google.com/search*",
			"*://*.google.com/webhp*",
			"*://*.google.*/search*",
			"*://www.bing.com/search*",
			"*://duckduckgo.com/*",
			"*://www.duckduckgo.com/*",
			"*://html.duckduckgo.com/*",
			"*://lite.duckduckgo.com/*",
			"*://search.yahoo.com/*",
			"*://search.brave.com/*"
		],
		runAt: "document_start",
		main: init
	});
	//#endregion
	//#region \0virtual:wxt-unlisted-script-entrypoint?/home/dracon/Dev/extensions/calmweb/apps/extension/entrypoints/search-filter.ts
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
			result = search_filter_default.main();
			if (result instanceof Promise) result = result.catch((err) => {
				logger.error(`The unlisted script "search-filter" crashed on startup!`, err);
				throw err;
			});
		} catch (err) {
			logger.error(`The unlisted script "search-filter" crashed on startup!`, err);
			throw err;
		}
		return result;
	})();
})();

searchFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlci5qcyIsIm5hbWVzIjpbImJyb3dzZXIiLCJicm93c2VyIiwiYnJvd3NlciIsImRlZmF1bHRFcnJvck1hcCIsImRlZmF1bHRFcnJvck1hcCIsImRlZmF1bHRFcnJvck1hcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4yMC4yMF9AdHlwZXMrbm9kZUAyNS41LjBfaml0aUAyLjYuMS9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uLy4uLy4uLy4uL3d4dC1zaGFyZWQvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL2Rpc3QvYXBpL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9kaXN0L2F1dGgvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9Ad3h0LWRldi9icm93c2VyL3NyYy9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9hc3luYy1tdXRleC9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9kZXF1YWwvbGl0ZS9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9Ad3h0LWRldi9zdG9yYWdlL2Rpc3QvaW5kZXgubWpzIiwiLi4vLi4vLi4vLi4vLi4vd3h0LXNoYXJlZC9kaXN0L3N0b3JhZ2UvcXVvdGEuanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL2Rpc3QvZXh0ZW5zaW9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL1pvZEVycm9yLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9sb2NhbGVzL2VuLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9lcnJvcnMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvcGFyc2VVdGlsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL2Vycm9yVXRpbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy96b2QvdjMvdHlwZXMuanMiLCIuLi8uLi9zcmMvbWVzc2FnaW5nL2luZGV4LnRzIiwiLi4vLi4vc3JjL2ZpbHRlci9jYXRlZ29yaWVzLnRzIiwiLi4vLi4vc3JjL2ZpbHRlci9ibG9ja2xpc3QtZmV0Y2hlci50cyIsIi4uLy4uL3NyYy9maWx0ZXIvc2VhcmNoLWZpbHRlci50cyIsIi4uLy4uL3NyYy91aS9hY3Rpdml0eS1vdmVybGF5LnRzIiwiLi4vLi4vZW50cnlwb2ludHMvc2VhcmNoLWZpbHRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gc3JjL3V0aWxzL2RlZmluZS1jb250ZW50LXNjcmlwdC50c1xuZnVuY3Rpb24gZGVmaW5lQ29udGVudFNjcmlwdChkZWZpbml0aW9uKSB7XG5cdHJldHVybiBkZWZpbml0aW9uO1xufVxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBkZWZpbmVDb250ZW50U2NyaXB0IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEyLjAgLSBUdWUgTWF5IDE0IDIwMjQgMTg6MDE6MjkgKi9cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuICAvKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCEoZ2xvYmFsVGhpcy5jaHJvbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lLmlkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbiAgfVxuICBpZiAoIShnbG9iYWxUaGlzLmJyb3dzZXIgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUuaWQpKSB7XG4gICAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG5cbiAgICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgICAgLy8gSlNPTiBmaWxlLlxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHwgY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IHByb21pc2UgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe1xuICAgICAgICByZWplY3QsXG4gICAgICAgIHJlc29sdmVcbiAgICAgIH0sIHJlcGx5KSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7XG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsIi8qKlxuICogQVBJIGNsaWVudCBmb3IgdGhlIERyYWNvbiBwbGF0Zm9ybSBBUEkuXG4gKlxuICogUHJvdmlkZXMgc3RhbmRhcmRpemVkIEFQSSBhY2Nlc3Mgd2l0aDpcbiAqIC0gQXV0b21hdGljIGF1dGhlbnRpY2F0aW9uIGhhbmRsaW5nIHZpYSBCZWFyZXIgdG9rZW5cbiAqIC0gVG9rZW4gcmVmcmVzaCB1c2luZyBgL2FwaS92MS9hdXRoL3JlZnJlc2hgXG4gKiAtIENvbnRlbnQgc2NyaXB0IHByb3h5aW5nIHRocm91Z2ggdGhlIGJhY2tncm91bmQgc2NyaXB0XG4gKiAtIFRlbXBvcmFyeSBsZWdhY3kgcHJvZHVjdC1yb3V0ZSBoZWxwZXJzIGZvciBtaWdyYXRpb25cbiAqL1xuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmNvbnN0IHdhcm5lZERlcHJlY2F0aW9ucyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHdhcm5EZXByZWNhdGVkUHJvZHVjdFJvdXRlKG1ldGhvZE5hbWUsIHJvdXRlKSB7XG4gICAgY29uc3Qga2V5ID0gYCR7bWV0aG9kTmFtZX06JHtyb3V0ZX1gO1xuICAgIGlmICh3YXJuZWREZXByZWNhdGlvbnMuaGFzKGtleSkpXG4gICAgICAgIHJldHVybjtcbiAgICB3YXJuZWREZXByZWNhdGlvbnMuYWRkKGtleSk7XG4gICAgY29uc29sZS53YXJuKGBbd3h0LXNoYXJlZF0gJHttZXRob2ROYW1lfSgpIGlzIGRlcHJlY2F0ZWQuICR7cm91dGV9IGlzIGEgbGVnYWN5IG1pZ3JhdGlvbiByb3V0ZS4gYCArXG4gICAgICAgICdQcmVmZXIgdGhlIGNhbm9uaWNhbCBwbGF0Zm9ybSBlbmRwb2ludHMgdW5kZXIgL2FwaS92MS9hdXRoLCAvYXBpL3YxL2JpbGxpbmcsIGFuZCAvYXBpL3YxL2NoYXQvY29tcGxldGlvbnMuJyk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBUEkgQ2xpZW50IEZhY3Rvcnlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcGlDbGllbnQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgY29uZmlnLCBnZXRBdXRoLCBzZXRBdXRoLCBvbkF1dGhFcnJvciB9ID0gb3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgYXV0aCBzdGF0ZVxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGF3YWl0IGdldEF1dGgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogISFhdXRoLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgdXNlcjogYXV0aC51c2VyLFxuICAgICAgICAgICAgdG9rZW46IGF1dGguYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb246IGF1dGguc3Vic2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgZ2V0QXV0aFN0YXRlKCk7XG4gICAgICAgIHJldHVybiBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZnJlc2ggYWNjZXNzIHRva2VuIHVzaW5nIHRoZSBwbGF0Zm9ybSByZWZyZXNoIGVuZHBvaW50LlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hUb2tlbnMoKSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoKCk7XG4gICAgICAgIGlmICghYXV0aC5yZWZyZXNoVG9rZW4pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L2FwaS92MS9hdXRoL3JlZnJlc2hgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJywgLy8gSW5jbHVkZSByZWZyZXNoX3Rva2VuIGNvb2tpZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmcmVzaCBmYWlsZWQnKTtcbiAgICAgICAgICAgIC8vIFRoZSBwbGF0Zm9ybSByZXR1cm5zIG5ldyB0b2tlbnMgaW4gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgYXdhaXQgc2V0QXV0aCh7XG4gICAgICAgICAgICAgICAgLi4uYXV0aCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogZGF0YS5zZXNzaW9uX3Rva2VuIHx8IGRhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogZGF0YS5yZWZyZXNoX3Rva2VuIHx8IGF1dGgucmVmcmVzaFRva2VuLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0FQSV0gVG9rZW4gcmVmcmVzaCBmYWlsZWQ6JywgZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBkaXJlY3QgSFRUUCByZXF1ZXN0IHdpdGggYXV0aFxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHBlcmZvcm1SZXF1ZXN0KGVuZHBvaW50LCBvcHRzID0ge30sIGlzUmV0cnkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCB7IG1ldGhvZCA9ICdHRVQnLCBib2R5LCBoZWFkZXJzOiBjdXN0b21IZWFkZXJzLCBza2lwQXV0aCB9ID0gb3B0cztcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAuLi5jdXN0b21IZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXNraXBBdXRoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHRva2VuLCBpc0F1dGhlbnRpY2F0ZWQ6IGF1dGhlZCB9ID0gYXdhaXQgZ2V0QXV0aFN0YXRlKCk7XG4gICAgICAgICAgICBpZiAoIWF1dGhlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXV0aGVudGljYXRpb24gcmVxdWlyZWQuIFBsZWFzZSBsb2cgaW4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaW5hbEJvZHkgPSBtZXRob2QgIT09ICdHRVQnICYmIGJvZHkgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHVybCA9IGVuZHBvaW50LnN0YXJ0c1dpdGgoJ2h0dHAnKVxuICAgICAgICAgICAgPyBlbmRwb2ludFxuICAgICAgICAgICAgOiBgJHtjb25maWcuYXBpVXJsfSR7ZW5kcG9pbnR9YDtcbiAgICAgICAgLy8gTm9ybWFsaXplIFVSTDogcmVtb3ZlIGRvdWJsZSBzbGFzaGVzIGV4Y2VwdCBhZnRlciBwcm90b2NvbFxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvKFteOl0pXFwvXFwvKy9nLCAnJDEvJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogZmluYWxCb2R5LFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEhhbmRsZSBhdXRoIGVycm9yc1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGF3YWl0IGdldEF1dGhTdGF0ZSgpO1xuICAgICAgICAgICAgLy8gU2tpcCByZWZyZXNoIGZvciBkZW1vIHRva2VucyBvciBpZiBhbHJlYWR5IHJldHJ5aW5nXG4gICAgICAgICAgICBpZiAodG9rZW4/LnN0YXJ0c1dpdGgoJ2RlbS0nKSB8fCBpc1JldHJ5KSB7XG4gICAgICAgICAgICAgICAgb25BdXRoRXJyb3I/LigpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXV0aGVudGljYXRpb24gZmFpbGVkICgke3Jlc3BvbnNlLnN0YXR1c30pLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaGVkID0gYXdhaXQgcmVmcmVzaFRva2VucygpO1xuICAgICAgICAgICAgaWYgKHJlZnJlc2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJmb3JtUmVxdWVzdChlbmRwb2ludCwgb3B0cywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkF1dGhFcnJvcj8uKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlc3Npb24gZXhwaXJlZC4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAvLyBIYW5kbGUgSFRNTCBlcnJvciByZXNwb25zZXMgKGxpa2UgNDA0IFNpZ25hbCBMb3N0KVxuICAgICAgICAgICAgaWYgKGVycm9yVGV4dC5pbmNsdWRlcygnPCFET0NUWVBFIGh0bWw+JykgfHwgZXJyb3JUZXh0LmluY2x1ZGVzKCc8aHRtbCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0FQSV0gUmVjZWl2ZWQgSFRNTCBlcnJvciBmcm9tICR7dXJsfS4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENsb3VkIGNvbm5lY3Rpb24gaW50ZXJydXB0ZWQgKFN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c30pLiBQbGVhc2UgY2hlY2sgeW91ciBBUEkgVVJMLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yVGV4dCB8fCBgQVBJIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWluIEFQSSByZXF1ZXN0IGhhbmRsZXJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IHByb3hpZXMgcmVxdWVzdHMgdGhyb3VnaCBiYWNrZ3JvdW5kIHNjcmlwdCBpZiBydW5uaW5nIGluIGNvbnRlbnQgc2NyaXB0XG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdChlbmRwb2ludCwgb3B0cyA9IHt9KSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgaW4gY29udGVudCBzY3JpcHRcbiAgICAgICAgY29uc3QgaXNDb250ZW50U2NyaXB0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwOicgfHwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6Jyk7XG4gICAgICAgIGlmIChpc0NvbnRlbnRTY3JpcHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FwaVByb3h5UmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlID09PSAnb2JqZWN0JyAmJiAnZXJyb3InIGluIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBUEldIFByb3h5IHJlcXVlc3QgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBEaXJlY3QgcmVxdWVzdCAoUG9wdXAsIEJhY2tncm91bmQsIE9wdGlvbnMpXG4gICAgICAgIHJldHVybiBwZXJmb3JtUmVxdWVzdChlbmRwb2ludCwgb3B0cyk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBIVFRQIE1ldGhvZCBTaG9ydGN1dHNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0KGVuZHBvaW50LCBoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50LCB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHBvc3QoZW5kcG9pbnQsIGJvZHksIGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHksIGhlYWRlcnMgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHB1dChlbmRwb2ludCwgYm9keSwgaGVhZGVycykge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCwgeyBtZXRob2Q6ICdQVVQnLCBib2R5LCBoZWFkZXJzIH0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBkZWwoZW5kcG9pbnQsIGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQsIHsgbWV0aG9kOiAnREVMRVRFJywgaGVhZGVycyB9KTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFBsYXRmb3JtIEFQSSBvcGVyYXRpb25zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHVzZXIgaW5mbyBmcm9tIHRoZSBwbGF0Zm9ybS5cbiAgICAgKiBSZXR1cm5zIHVzZXIgZGF0YSBpbmNsdWRpbmcgc3Vic2NyaXB0aW9uIHN0YXR1cy5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdCgnL2FwaS92MS91c2VyJywgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdXJjaGFzZSBxdW90YSB2aWEgUGFkZGxlIGNoZWNrb3V0LlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFF1b3RhKGFtb3VudCkge1xuICAgICAgICByZXR1cm4gcG9zdCgnL2FwaS92MS9iaWxsaW5nL2NoZWNrb3V0JywgeyBxdW90YTogYW1vdW50IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBxdW90YSBiYWxhbmNlLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFF1b3RhKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdCgnL2FwaS92MS9iaWxsaW5nL3F1b3RhJywgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYW5vbmljYWwgQUkgY2hhdC1jb21wbGV0aW9ucyBBUEkuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hhdENvbXBsZXRpb25zKHBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIHBvc3QoJy9hcGkvdjEvY2hhdC9jb21wbGV0aW9ucycsIHBheWxvYWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBQcmVmZXIgYGNoYXRDb21wbGV0aW9ucygpYC5cbiAgICAgKiBQcm9kdWN0LXNwZWNpZmljIGNoYXQgcm91dGVzIGFyZSBhIGxlZ2FjeSBtaWdyYXRpb24gc3VyZmFjZS5cbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBwcm9kdWN0Q2hhdENvbXBsZXRpb25zKHByb2R1Y3RTbHVnLCBwYXlsb2FkKSB7XG4gICAgICAgIHdhcm5EZXByZWNhdGVkUHJvZHVjdFJvdXRlKCdwcm9kdWN0Q2hhdENvbXBsZXRpb25zJywgYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vY2hhdC9jb21wbGV0aW9uc2ApO1xuICAgICAgICByZXR1cm4gcG9zdChgL2FwaS92MS9wcm9kdWN0cy8ke3Byb2R1Y3RTbHVnfS9jaGF0L2NvbXBsZXRpb25zYCwgcGF5bG9hZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFByZWZlciBgc3Vic2NyaWJlKClgLlxuICAgICAqIFByb2R1Y3Qtc3BlY2lmaWMgc3Vic2NyaWJlIHJvdXRlcyBhcmUgYSBsZWdhY3kgbWlncmF0aW9uIHN1cmZhY2UuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gcHJvZHVjdFN1YnNjcmliZShwcm9kdWN0U2x1ZywgcHJpY2VJZCkge1xuICAgICAgICB3YXJuRGVwcmVjYXRlZFByb2R1Y3RSb3V0ZSgncHJvZHVjdFN1YnNjcmliZScsIGAvYXBpL3YxL3Byb2R1Y3RzLyR7cHJvZHVjdFNsdWd9L3N1YnNjcmliZWApO1xuICAgICAgICByZXR1cm4gcG9zdChgL2FwaS92MS9wcm9kdWN0cy8ke3Byb2R1Y3RTbHVnfS9zdWJzY3JpYmVgLCB7IHByaWNlX2lkOiBwcmljZUlkIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBQcmVmZXIgYGdldFVzZXIoKWAuXG4gICAgICogUHJvZHVjdC1zcGVjaWZpYyB1c2VyIHJvdXRlcyBhcmUgYSBsZWdhY3kgbWlncmF0aW9uIHN1cmZhY2UuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdFVzZXIocHJvZHVjdFNsdWcpIHtcbiAgICAgICAgd2FybkRlcHJlY2F0ZWRQcm9kdWN0Um91dGUoJ2dldFByb2R1Y3RVc2VyJywgYC9hcGkvdjEvcHJvZHVjdHMvJHtwcm9kdWN0U2x1Z30vdXNlcmApO1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL2FwaS92MS9wcm9kdWN0cy8ke3Byb2R1Y3RTbHVnfS91c2VyYCwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBDb3JlXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIHBlcmZvcm1SZXF1ZXN0LCAvLyBEaXJlY3QgcmVxdWVzdCB3aXRob3V0IHByb3h5XG4gICAgICAgIGdldEF1dGhTdGF0ZSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICByZWZyZXNoVG9rZW5zLFxuICAgICAgICAvLyBIVFRQIG1ldGhvZHNcbiAgICAgICAgZ2V0LFxuICAgICAgICBwb3N0LFxuICAgICAgICBwdXQsXG4gICAgICAgIGRlbCxcbiAgICAgICAgLy8gQ2Fub25pY2FsIHBsYXRmb3JtIG9wZXJhdGlvbnNcbiAgICAgICAgZ2V0VXNlcixcbiAgICAgICAgYWRkUXVvdGEsXG4gICAgICAgIGdldFF1b3RhLFxuICAgICAgICBjaGF0Q29tcGxldGlvbnMsXG4gICAgICAgIHByb2R1Y3RDaGF0Q29tcGxldGlvbnMsXG4gICAgICAgIHByb2R1Y3RTdWJzY3JpYmUsXG4gICAgICAgIGdldFByb2R1Y3RVc2VyLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEF1dGhlbnRpY2F0aW9uIHV0aWxpdGllcyBmb3IgV1hUIGV4dGVuc2lvbnMgdGFsa2luZyB0byB0aGUgRHJhY29uIHBsYXRmb3JtLlxuICpcbiAqIFN1cHBvcnRzIHR3byBhdXRoIGZsb3dzOlxuICogMS4gRW1haWwgTWFnaWMgTGluayAoZGVmYXVsdCkgLSBEaXJlY3QgZW1haWwvY29kZSB2ZXJpZmljYXRpb25cbiAqIDIuIE9BdXRoIChsZWdhY3kpIC0gUmVkaXJlY3QtYmFzZWQgZmxvdyB3aXRoIGNvZGUgZXhjaGFuZ2VcbiAqL1xuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsIE1hZ2ljIExpbmsgRmxvd1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtYWlsQXV0aEZsb3cob3B0aW9ucykge1xuICAgIGNvbnN0IHsgY29uZmlnLCBzZXRBdXRoLCByZXNldEF1dGgsIGFwcElkLCBkYXNoYm9hcmRQYXRoID0gJy9kYXNoYm9hcmQvbGF1bmNoJywgfSA9IG9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIG1hZ2ljIGxpbmsgY29kZSBmb3IgdGhlIGdpdmVuIGVtYWlsLlxuICAgICAqIFNlbmRzIGEgNi1kaWdpdCBjb2RlIHRvIHRoZSB1c2VyJ3MgZW1haWwuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdE1hZ2ljTGluayhlbWFpbCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L2FwaS92MS9hdXRoL3JlcXVlc3QtbWFnaWMtbGlua2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RfdG86IGRhc2hib2FyZFBhdGgsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNYWdpYyBsaW5rIHJlcXVlc3QgZmFpbGVkOiAke2Vycm9yfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFZlcmlmeSB0aGUgNi1kaWdpdCBjb2RlIHJlY2VpdmVkIHZpYSBlbWFpbC5cbiAgICAgKiBSZXR1cm5zIGFjY2VzcyB0b2tlbiBkaXJlY3RseSAobm8gcmVkaXJlY3QpLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUNvZGUoZW1haWwsIGNvZGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBpL3YxL2F1dGgvdmVyaWZ5LWNvZGVgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgY29kZSB9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29kZSB2ZXJpZmljYXRpb24gZmFpbGVkOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIC8vIEZldGNoIHVzZXIgaW5mb1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoVXNlckluZm8oZGF0YS5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgYXdhaXQgc2V0QXV0aCh7XG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGRhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogJycsIC8vIEVtYWlsIGZsb3cgZG9lc24ndCB1c2UgcmVmcmVzaCB0b2tlbnNcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2VyIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiBudWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBdXRoXSBDb2RlIHZlcmlmaWNhdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZldGNoIHVzZXIgaW5mbyB1c2luZyB0aGUgYWNjZXNzIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VySW5mbyh0b2tlbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9hcGkvdjEvYXV0aC9zZXNzaW9uYCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXJEYXRhLmVtYWlsIHx8ICcnLFxuICAgICAgICAgICAgICAgIG5hbWU6IHVzZXJEYXRhLnByb2ZpbGVfbmFtZSB8fCB1c2VyRGF0YS5uYW1lIHx8ICdVc2VyJyxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB1c2VyRGF0YS5hdmF0YXJfdXJsIHx8IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0F1dGhdIEZhaWxlZCB0byBmZXRjaCB1c2VyIGluZm86JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgcGxhdGZvcm0gZGFzaGJvYXJkXG4gICAgICovXG4gICAgZnVuY3Rpb24gb3BlbkRhc2hib2FyZCgpIHtcbiAgICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogYCR7Y29uZmlnLmRyYWNvblVybH0ke2Rhc2hib2FyZFBhdGh9YCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9nb3V0IC0gY2xlYXIgc3RvcmVkIGF1dGhcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICAgIGF3YWl0IHJlc2V0QXV0aCgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0TWFnaWNMaW5rLFxuICAgICAgICB2ZXJpZnlDb2RlLFxuICAgICAgICBvcGVuRGFzaGJvYXJkLFxuICAgICAgICBsb2dvdXQsXG4gICAgICAgIC8vIExlZ2FjeSBjb21wYXRpYmlsaXR5XG4gICAgICAgIG9wZW5Mb2dpbjogKCkgPT4gb3BlbkRhc2hib2FyZCgpLFxuICAgICAgICBleGNoYW5nZUNvZGU6IGFzeW5jICgpID0+IGZhbHNlLFxuICAgICAgICBoYW5kbGVBdXRoQ2FsbGJhY2s6IGFzeW5jICgpID0+ICh7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiAnVXNlIGVtYWlsIG1hZ2ljIGxpbmsgZmxvdyBpbnN0ZWFkJ1xuICAgICAgICB9KSxcbiAgICB9O1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT0F1dGggRmxvdyAoTGVnYWN5KVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9BdXRoQXV0aEZsb3cob3B0aW9ucykge1xuICAgIGNvbnN0IHsgY29uZmlnLCBzZXRBdXRoLCByZXNldEF1dGgsIGFwcElkLCBwcm92aWRlciA9ICdnb29nbGUnLCBjYWxsYmFja1BhdGggPSAnYXV0aC1jYWxsYmFjay5odG1sJywgZGFzaGJvYXJkUGF0aCA9ICcvZGFzaGJvYXJkL2xhdW5jaCcsIH0gPSBvcHRpb25zO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbG9naW4gVVJMIGZvciBPQXV0aFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldExvZ2luVXJsKCkge1xuICAgICAgICBjb25zdCByZWRpcmVjdFVybCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoY2FsbGJhY2tQYXRoKTtcbiAgICAgICAgcmV0dXJuIGAke2NvbmZpZy5kcmFjb25Vcmx9L2FwaS92MS9hdXRoL2xvZ2luLyR7cHJvdmlkZXJ9P3JlZGlyZWN0X3VyaT0ke2VuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVybCl9JmFwcD0ke2FwcElkfWA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIGxvZ2luIHBhZ2UgaW4gYSBuZXcgdGFiXG4gICAgICovXG4gICAgZnVuY3Rpb24gb3BlbkxvZ2luKCkge1xuICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiBnZXRMb2dpblVybCgpIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBwbGF0Zm9ybSBkYXNoYm9hcmRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvcGVuRGFzaGJvYXJkKCkge1xuICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiBgJHtjb25maWcuZHJhY29uVXJsfSR7ZGFzaGJvYXJkUGF0aH1gIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2dvdXQgLSBjbGVhciBzdG9yZWQgYXV0aFxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgYXdhaXQgcmVzZXRBdXRoKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4Y2hhbmdlIGF1dGhvcml6YXRpb24gY29kZSBmb3IgdG9rZW5zXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gZXhjaGFuZ2VDb2RlKGNvZGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBpL3YxL2F1dGgvZXhjaGFuZ2VgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb2RlIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUb2tlbiBleGNoYW5nZSBmYWlsZWQ6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoVXNlckluZm8oZGF0YS5zZXNzaW9uX3Rva2VuKTtcbiAgICAgICAgICAgIGF3YWl0IHNldEF1dGgoe1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBkYXRhLnNlc3Npb25fdG9rZW4sXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBkYXRhLnJlZnJlc2hfdG9rZW4sXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlciB8fCBudWxsLFxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQXV0aF0gVG9rZW4gZXhjaGFuZ2UgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJJbmZvKHRva2VuKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L2FwaS92MS91c2VyYCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyRGF0YS5lbWFpbCB8fCAnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiB1c2VyRGF0YS5uYW1lIHx8ICdVc2VyJyxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB1c2VyRGF0YS5hdmF0YXJfdXJsIHx8IHVzZXJEYXRhLnBpY3R1cmUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0F1dGhdIEZhaWxlZCB0byBmZXRjaCB1c2VyIGluZm86JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBhdXRoIGNhbGxiYWNrIGZyb20gT0F1dGhcbiAgICAgKi9cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBdXRoQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhoYXNoLnN1YnN0cmluZygxKSk7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBwYXJhbXMuZ2V0KCdjb2RlJyk7XG4gICAgICAgIGNvbnN0IGVycm9yID0gcGFyYW1zLmdldCgnZXJyb3InKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBPQXV0aCBlcnJvcjogJHtlcnJvcn1gIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdObyBhdXRob3JpemF0aW9uIGNvZGUgcmVjZWl2ZWQnIH07XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBleGNoYW5nZUNvZGUoY29kZSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0V4Y2hhbmdlIGZhaWxlZCcgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMb2dpblVybCxcbiAgICAgICAgb3BlbkxvZ2luLFxuICAgICAgICBvcGVuRGFzaGJvYXJkLFxuICAgICAgICBsb2dvdXQsXG4gICAgICAgIGV4Y2hhbmdlQ29kZSxcbiAgICAgICAgaGFuZGxlQXV0aENhbGxiYWNrLFxuICAgICAgICAvLyBFbWFpbCBmbG93IGNvbXBhdGliaWxpdHlcbiAgICAgICAgcmVxdWVzdE1hZ2ljTGluazogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2UgT0F1dGggZmxvdyBpbnN0ZWFkJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHZlcmlmeUNvZGU6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlIE9BdXRoIGZsb3cgaW5zdGVhZCcpO1xuICAgICAgICB9LFxuICAgIH07XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVbmlmaWVkIEF1dGggRmxvdyBGYWN0b3J5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXV0aEZsb3cob3B0aW9ucykge1xuICAgIGNvbnN0IGZsb3cgPSBvcHRpb25zLmZsb3cgfHwgJ2VtYWlsJztcbiAgICBpZiAoZmxvdyA9PT0gJ2VtYWlsJykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRW1haWxBdXRoRmxvdyhvcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVPQXV0aEF1dGhGbG93KG9wdGlvbnMpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVKV1QodG9rZW4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgICAgICBpZiAoIWJhc2U2NFVybClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAgICAgY29uc3QganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQoYXRvYihiYXNlNjQpXG4gICAgICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignJykpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW0pXVF0gRmFpbGVkIHRvIGRlY29kZSB0b2tlbjonLCBlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9rZW5FeHBpcmVkKHRva2VuKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGRlY29kZUpXVCh0b2tlbik7XG4gICAgaWYgKCFwYXlsb2FkPy5leHApXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBEYXRlLm5vdygpID49IHBheWxvYWQuZXhwICogMTAwMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRnJvbVRva2VuKHRva2VuKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGRlY29kZUpXVCh0b2tlbik7XG4gICAgaWYgKCFwYXlsb2FkKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogcGF5bG9hZC5zdWIsXG4gICAgICAgIG5hbWU6IHBheWxvYWQubmFtZSxcbiAgICAgICAgZW1haWw6IHBheWxvYWQuZW1haWwsXG4gICAgICAgIHBpY3R1cmU6IHBheWxvYWQucGljdHVyZSxcbiAgICB9O1xufVxuLy8gUmUtZXhwb3J0IHN0YW5kYWxvbmUgY2FsbGJhY2sgaGFuZGxlclxuZXhwb3J0IHsgaW5pdEF1dGhDYWxsYmFjayB9IGZyb20gJy4vY2FsbGJhY2suanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gI3JlZ2lvbiBzbmlwcGV0XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZT8uaWRcbiAgPyBnbG9iYWxUaGlzLmJyb3dzZXJcbiAgOiBnbG9iYWxUaGlzLmNocm9tZTtcbi8vICNlbmRyZWdpb24gc25pcHBldFxuIiwiY29uc3QgRV9USU1FT1VUID0gbmV3IEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIG11dGV4IHRvIGJlY29tZSBhdmFpbGFibGUnKTtcbmNvbnN0IEVfQUxSRUFEWV9MT0NLRUQgPSBuZXcgRXJyb3IoJ211dGV4IGFscmVhZHkgbG9ja2VkJyk7XG5jb25zdCBFX0NBTkNFTEVEID0gbmV3IEVycm9yKCdyZXF1ZXN0IGZvciBsb2NrIGNhbmNlbGVkJyk7XG5cbnZhciBfX2F3YWl0ZXIkMiA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgU2VtYXBob3JlIHtcbiAgICBjb25zdHJ1Y3RvcihfdmFsdWUsIF9jYW5jZWxFcnJvciA9IEVfQ0FOQ0VMRUQpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgIHRoaXMuX2NhbmNlbEVycm9yID0gX2NhbmNlbEVycm9yO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnMgPSBbXTtcbiAgICB9XG4gICAgYWNxdWlyZSh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB7IHJlc29sdmUsIHJlamVjdCwgd2VpZ2h0LCBwcmlvcml0eSB9O1xuICAgICAgICAgICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQodGhpcy5fcXVldWUsIChvdGhlcikgPT4gcHJpb3JpdHkgPD0gb3RoZXIucHJpb3JpdHkpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xICYmIHdlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWRzIGltbWVkaWF0ZSBkaXNwYXRjaCwgc2tpcCB0aGUgcXVldWVcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrXzEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlciQyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKGNhbGxiYWNrLCB3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgcmVsZWFzZV0gPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB3YWl0Rm9yVW5sb2NrKHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICBpZiAodGhpcy5fY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgICAgICBpbnNlcnRTb3J0ZWQodGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdLCB7IHJlc29sdmUsIHByaW9yaXR5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSA8PSAwO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIHJlbGVhc2Uod2VpZ2h0ID0gMSkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICB0aGlzLl92YWx1ZSArPSB3ZWlnaHQ7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoUXVldWUoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKChlbnRyeSkgPT4gZW50cnkucmVqZWN0KHRoaXMuX2NhbmNlbEVycm9yKSk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuICAgIF9kaXNwYXRjaFF1ZXVlKCkge1xuICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDAgJiYgdGhpcy5fcXVldWVbMF0ud2VpZ2h0IDw9IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZGlzcGF0Y2hJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLl92YWx1ZSAtPSBpdGVtLndlaWdodDtcbiAgICAgICAgaXRlbS5yZXNvbHZlKFtwcmV2aW91c1ZhbHVlLCB0aGlzLl9uZXdSZWxlYXNlcihpdGVtLndlaWdodCldKTtcbiAgICB9XG4gICAgX25ld1JlbGVhc2VyKHdlaWdodCkge1xuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2Uod2VpZ2h0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2RyYWluVW5sb2NrV2FpdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHdhaXRlcnMuZm9yRWFjaCgod2FpdGVyKSA9PiB3YWl0ZXIucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlZFByaW9yaXR5ID0gdGhpcy5fcXVldWVbMF0ucHJpb3JpdHk7XG4gICAgICAgICAgICBmb3IgKGxldCB3ZWlnaHQgPSB0aGlzLl92YWx1ZTsgd2VpZ2h0ID4gMDsgd2VpZ2h0LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0ZXJzID0gdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICghd2FpdGVycylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHdhaXRlcnMuZmluZEluZGV4KCh3YWl0ZXIpID0+IHdhaXRlci5wcmlvcml0eSA8PSBxdWV1ZWRQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgKGkgPT09IC0xID8gd2FpdGVycyA6IHdhaXRlcnMuc3BsaWNlKDAsIGkpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgod2FpdGVyID0+IHdhaXRlci5yZXNvbHZlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9xdWV1ZVswXS5wcmlvcml0eSA8IHByaW9yaXR5KSAmJlxuICAgICAgICAgICAgd2VpZ2h0IDw9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydFNvcnRlZChhLCB2KSB7XG4gICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQoYSwgKG90aGVyKSA9PiB2LnByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICBhLnNwbGljZShpICsgMSwgMCwgdik7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXhGcm9tRW5kKGEsIHByZWRpY2F0ZSkge1xuICAgIGZvciAobGV0IGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYVtpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxudmFyIF9fYXdhaXRlciQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBNdXRleCB7XG4gICAgY29uc3RydWN0b3IoY2FuY2VsRXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2VtYXBob3JlID0gbmV3IFNlbWFwaG9yZSgxLCBjYW5jZWxFcnJvcik7XG4gICAgfVxuICAgIGFjcXVpcmUoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMSh0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFssIHJlbGVhc2VyXSA9IHlpZWxkIHRoaXMuX3NlbWFwaG9yZS5hY3F1aXJlKDEsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUucnVuRXhjbHVzaXZlKCgpID0+IGNhbGxiYWNrKCksIDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayhwcmlvcml0eSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS53YWl0Rm9yVW5sb2NrKDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpKVxuICAgICAgICAgICAgdGhpcy5fc2VtYXBob3JlLnJlbGVhc2UoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmNhbmNlbCgpO1xuICAgIH1cbn1cblxudmFyIF9fYXdhaXRlciA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gd2l0aFRpbWVvdXQoc3luYywgdGltZW91dCwgdGltZW91dEVycm9yID0gRV9USU1FT1VUKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNxdWlyZTogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXNUaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGltZW91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IHlpZWxkIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzeW5jLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3luYy5hY3F1aXJlKHByaW9yaXR5KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGVhc2UgPSBBcnJheS5pc0FycmF5KHRpY2tldCkgPyB0aWNrZXRbMV0gOiB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGlja2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgd2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVsZWFzZSA9ICgpID0+IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRpY2tldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodGlja2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZWxlYXNlKHdlaWdodCkge1xuICAgICAgICAgICAgc3luYy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW5jLmNhbmNlbCgpO1xuICAgICAgICB9LFxuICAgICAgICB3YWl0Rm9yVW5sb2NrOiAod2VpZ2h0T3JQcmlvcml0eSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGxldCB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNTZW1hcGhvcmUoc3luYykpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWlnaHQgIT09IHVuZGVmaW5lZCAmJiB3ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KHRpbWVvdXRFcnJvciksIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICA/IHN5bmMud2FpdEZvclVubG9jayh3ZWlnaHQsIHByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICA6IHN5bmMud2FpdEZvclVubG9jayhwcmlvcml0eSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTG9ja2VkOiAoKSA9PiBzeW5jLmlzTG9ja2VkKCksXG4gICAgICAgIGdldFZhbHVlOiAoKSA9PiBzeW5jLmdldFZhbHVlKCksXG4gICAgICAgIHNldFZhbHVlOiAodmFsdWUpID0+IHN5bmMuc2V0VmFsdWUodmFsdWUpLFxuICAgIH07XG59XG5mdW5jdGlvbiBpc1NlbWFwaG9yZShzeW5jKSB7XG4gICAgcmV0dXJuIHN5bmMuZ2V0VmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saXNuZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5mdW5jdGlvbiB0cnlBY3F1aXJlKHN5bmMsIGFscmVhZHlBY3F1aXJlZEVycm9yID0gRV9BTFJFQURZX0xPQ0tFRCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIHdpdGhUaW1lb3V0KHN5bmMsIDAsIGFscmVhZHlBY3F1aXJlZEVycm9yKTtcbn1cblxuZXhwb3J0IHsgRV9BTFJFQURZX0xPQ0tFRCwgRV9DQU5DRUxFRCwgRV9USU1FT1VULCBNdXRleCwgU2VtYXBob3JlLCB0cnlBY3F1aXJlLCB3aXRoVGltZW91dCB9O1xuIiwidmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXF1YWwoZm9vLCBiYXIpIHtcblx0dmFyIGN0b3IsIGxlbjtcblx0aWYgKGZvbyA9PT0gYmFyKSByZXR1cm4gdHJ1ZTtcblxuXHRpZiAoZm9vICYmIGJhciAmJiAoY3Rvcj1mb28uY29uc3RydWN0b3IpID09PSBiYXIuY29uc3RydWN0b3IpIHtcblx0XHRpZiAoY3RvciA9PT0gRGF0ZSkgcmV0dXJuIGZvby5nZXRUaW1lKCkgPT09IGJhci5nZXRUaW1lKCk7XG5cdFx0aWYgKGN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGZvby50b1N0cmluZygpID09PSBiYXIudG9TdHJpbmcoKTtcblxuXHRcdGlmIChjdG9yID09PSBBcnJheSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmxlbmd0aCkgPT09IGJhci5sZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGRlcXVhbChmb29bbGVuXSwgYmFyW2xlbl0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iLCJpbXBvcnQgeyBicm93c2VyIH0gZnJvbSBcIkB3eHQtZGV2L2Jyb3dzZXJcIjtcbmltcG9ydCB7IE11dGV4IH0gZnJvbSBcImFzeW5jLW11dGV4XCI7XG5pbXBvcnQgeyBkZXF1YWwgfSBmcm9tIFwiZGVxdWFsL2xpdGVcIjtcblxuLy8jcmVnaW9uIHNyYy9pbmRleC50c1xuLyoqXG4qIFNpbXBsaWZpZWQgc3RvcmFnZSBBUElzIHdpdGggc3VwcG9ydCBmb3IgdmVyc2lvbmVkIGZpZWxkcywgc25hcHNob3RzLCBtZXRhZGF0YSwgYW5kIGl0ZW0gZGVmaW5pdGlvbnMuXG4qXG4qIFNlZSBbdGhlIGd1aWRlXShodHRwczovL3d4dC5kZXYvc3RvcmFnZS5odG1sKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiogQG1vZHVsZSBAd3h0LWRldi9zdG9yYWdlXG4qL1xuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZVN0b3JhZ2UoKTtcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2UoKSB7XG5cdGNvbnN0IGRyaXZlcnMgPSB7XG5cdFx0bG9jYWw6IGNyZWF0ZURyaXZlcihcImxvY2FsXCIpLFxuXHRcdHNlc3Npb246IGNyZWF0ZURyaXZlcihcInNlc3Npb25cIiksXG5cdFx0c3luYzogY3JlYXRlRHJpdmVyKFwic3luY1wiKSxcblx0XHRtYW5hZ2VkOiBjcmVhdGVEcml2ZXIoXCJtYW5hZ2VkXCIpXG5cdH07XG5cdGNvbnN0IGdldERyaXZlciA9IChhcmVhKSA9PiB7XG5cdFx0Y29uc3QgZHJpdmVyID0gZHJpdmVyc1thcmVhXTtcblx0XHRpZiAoZHJpdmVyID09IG51bGwpIHtcblx0XHRcdGNvbnN0IGFyZWFOYW1lcyA9IE9iamVjdC5rZXlzKGRyaXZlcnMpLmpvaW4oXCIsIFwiKTtcblx0XHRcdHRocm93IEVycm9yKGBJbnZhbGlkIGFyZWEgXCIke2FyZWF9XCIuIE9wdGlvbnM6ICR7YXJlYU5hbWVzfWApO1xuXHRcdH1cblx0XHRyZXR1cm4gZHJpdmVyO1xuXHR9O1xuXHRjb25zdCByZXNvbHZlS2V5ID0gKGtleSkgPT4ge1xuXHRcdGNvbnN0IGRlbGltaW5hdG9ySW5kZXggPSBrZXkuaW5kZXhPZihcIjpcIik7XG5cdFx0Y29uc3QgZHJpdmVyQXJlYSA9IGtleS5zdWJzdHJpbmcoMCwgZGVsaW1pbmF0b3JJbmRleCk7XG5cdFx0Y29uc3QgZHJpdmVyS2V5ID0ga2V5LnN1YnN0cmluZyhkZWxpbWluYXRvckluZGV4ICsgMSk7XG5cdFx0aWYgKGRyaXZlcktleSA9PSBudWxsKSB0aHJvdyBFcnJvcihgU3RvcmFnZSBrZXkgc2hvdWxkIGJlIGluIHRoZSBmb3JtIG9mIFwiYXJlYTprZXlcIiwgYnV0IHJlY2VpdmVkIFwiJHtrZXl9XCJgKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZHJpdmVyQXJlYSxcblx0XHRcdGRyaXZlcktleSxcblx0XHRcdGRyaXZlcjogZ2V0RHJpdmVyKGRyaXZlckFyZWEpXG5cdFx0fTtcblx0fTtcblx0Y29uc3QgZ2V0TWV0YUtleSA9IChrZXkpID0+IGtleSArIFwiJFwiO1xuXHRjb25zdCBtZXJnZU1ldGEgPSAob2xkTWV0YSwgbmV3TWV0YSkgPT4ge1xuXHRcdGNvbnN0IG5ld0ZpZWxkcyA9IHsgLi4ub2xkTWV0YSB9O1xuXHRcdE9iamVjdC5lbnRyaWVzKG5ld01ldGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpIGRlbGV0ZSBuZXdGaWVsZHNba2V5XTtcblx0XHRcdGVsc2UgbmV3RmllbGRzW2tleV0gPSB2YWx1ZTtcblx0XHR9KTtcblx0XHRyZXR1cm4gbmV3RmllbGRzO1xuXHR9O1xuXHRjb25zdCBnZXRWYWx1ZU9yRmFsbGJhY2sgPSAodmFsdWUsIGZhbGxiYWNrKSA9PiB2YWx1ZSA/PyBmYWxsYmFjayA/PyBudWxsO1xuXHRjb25zdCBnZXRNZXRhVmFsdWUgPSAocHJvcGVydGllcykgPT4gdHlwZW9mIHByb3BlcnRpZXMgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkocHJvcGVydGllcykgPyBwcm9wZXJ0aWVzIDoge307XG5cdGNvbnN0IGdldEl0ZW0gPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpID0+IHtcblx0XHRyZXR1cm4gZ2V0VmFsdWVPckZhbGxiYWNrKGF3YWl0IGRyaXZlci5nZXRJdGVtKGRyaXZlcktleSksIG9wdHM/LmZhbGxiYWNrID8/IG9wdHM/LmRlZmF1bHRWYWx1ZSk7XG5cdH07XG5cdGNvbnN0IGdldE1ldGEgPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXkpID0+IHtcblx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdHJldHVybiBnZXRNZXRhVmFsdWUoYXdhaXQgZHJpdmVyLmdldEl0ZW0obWV0YUtleSkpO1xuXHR9O1xuXHRjb25zdCBzZXRJdGVtID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCB2YWx1ZSkgPT4ge1xuXHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtKGRyaXZlcktleSwgdmFsdWUgPz8gbnVsbCk7XG5cdH07XG5cdGNvbnN0IHNldE1ldGEgPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpID0+IHtcblx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdGNvbnN0IGV4aXN0aW5nRmllbGRzID0gZ2V0TWV0YVZhbHVlKGF3YWl0IGRyaXZlci5nZXRJdGVtKG1ldGFLZXkpKTtcblx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbShtZXRhS2V5LCBtZXJnZU1ldGEoZXhpc3RpbmdGaWVsZHMsIHByb3BlcnRpZXMpKTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChkcml2ZXIsIGRyaXZlcktleSwgb3B0cykgPT4ge1xuXHRcdGF3YWl0IGRyaXZlci5yZW1vdmVJdGVtKGRyaXZlcktleSk7XG5cdFx0aWYgKG9wdHM/LnJlbW92ZU1ldGEpIHtcblx0XHRcdGNvbnN0IG1ldGFLZXkgPSBnZXRNZXRhS2V5KGRyaXZlcktleSk7XG5cdFx0XHRhd2FpdCBkcml2ZXIucmVtb3ZlSXRlbShtZXRhS2V5KTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlbW92ZU1ldGEgPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpID0+IHtcblx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdGlmIChwcm9wZXJ0aWVzID09IG51bGwpIGF3YWl0IGRyaXZlci5yZW1vdmVJdGVtKG1ldGFLZXkpO1xuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc3QgbmV3RmllbGRzID0gZ2V0TWV0YVZhbHVlKGF3YWl0IGRyaXZlci5nZXRJdGVtKG1ldGFLZXkpKTtcblx0XHRcdFtwcm9wZXJ0aWVzXS5mbGF0KCkuZm9yRWFjaCgoZmllbGQpID0+IGRlbGV0ZSBuZXdGaWVsZHNbZmllbGRdKTtcblx0XHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtKG1ldGFLZXksIG5ld0ZpZWxkcyk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCB3YXRjaCA9IChkcml2ZXIsIGRyaXZlcktleSwgY2IpID0+IGRyaXZlci53YXRjaChkcml2ZXJLZXksIGNiKTtcblx0cmV0dXJuIHtcblx0XHRnZXRJdGVtOiBhc3luYyAoa2V5LCBvcHRzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRyZXR1cm4gYXdhaXQgZ2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgb3B0cyk7XG5cdFx0fSxcblx0XHRnZXRJdGVtczogYXN5bmMgKGtleXMpID0+IHtcblx0XHRcdGNvbnN0IGFyZWFUb0tleU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRjb25zdCBrZXlUb09wdHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0Y29uc3Qgb3JkZXJlZEtleXMgPSBbXTtcblx0XHRcdGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdGxldCBrZXlTdHI7XG5cdFx0XHRcdGxldCBvcHRzO1xuXHRcdFx0XHRpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikga2V5U3RyID0ga2V5O1xuXHRcdFx0XHRlbHNlIGlmIChcImdldFZhbHVlXCIgaW4ga2V5KSB7XG5cdFx0XHRcdFx0a2V5U3RyID0ga2V5LmtleTtcblx0XHRcdFx0XHRvcHRzID0geyBmYWxsYmFjazoga2V5LmZhbGxiYWNrIH07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0a2V5U3RyID0ga2V5LmtleTtcblx0XHRcdFx0XHRvcHRzID0ga2V5Lm9wdGlvbnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3JkZXJlZEtleXMucHVzaChrZXlTdHIpO1xuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXlTdHIpO1xuXHRcdFx0XHRjb25zdCBhcmVhS2V5cyA9IGFyZWFUb0tleU1hcC5nZXQoZHJpdmVyQXJlYSkgPz8gW107XG5cdFx0XHRcdGFyZWFUb0tleU1hcC5zZXQoZHJpdmVyQXJlYSwgYXJlYUtleXMuY29uY2F0KGRyaXZlcktleSkpO1xuXHRcdFx0XHRrZXlUb09wdHNNYXAuc2V0KGtleVN0ciwgb3B0cyk7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJlc3VsdHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShhcmVhVG9LZXlNYXAuZW50cmllcygpKS5tYXAoYXN5bmMgKFtkcml2ZXJBcmVhLCBrZXlzXSkgPT4ge1xuXHRcdFx0XHQoYXdhaXQgZHJpdmVyc1tkcml2ZXJBcmVhXS5nZXRJdGVtcyhrZXlzKSkuZm9yRWFjaCgoZHJpdmVyUmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gYCR7ZHJpdmVyQXJlYX06JHtkcml2ZXJSZXN1bHQua2V5fWA7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0cyA9IGtleVRvT3B0c01hcC5nZXQoa2V5KTtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGdldFZhbHVlT3JGYWxsYmFjayhkcml2ZXJSZXN1bHQudmFsdWUsIG9wdHM/LmZhbGxiYWNrID8/IG9wdHM/LmRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRcdFx0cmVzdWx0c01hcC5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSkpO1xuXHRcdFx0cmV0dXJuIG9yZGVyZWRLZXlzLm1hcCgoa2V5KSA9PiAoe1xuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlOiByZXN1bHRzTWFwLmdldChrZXkpXG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRnZXRNZXRhOiBhc3luYyAoa2V5KSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRyZXR1cm4gYXdhaXQgZ2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSk7XG5cdFx0fSxcblx0XHRnZXRNZXRhczogYXN5bmMgKGFyZ3MpID0+IHtcblx0XHRcdGNvbnN0IGtleXMgPSBhcmdzLm1hcCgoYXJnKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIgPyBhcmcgOiBhcmcua2V5O1xuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRkcml2ZXJBcmVhLFxuXHRcdFx0XHRcdGRyaXZlcktleSxcblx0XHRcdFx0XHRkcml2ZXJNZXRhS2V5OiBnZXRNZXRhS2V5KGRyaXZlcktleSlcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgYXJlYVRvRHJpdmVyTWV0YUtleXNNYXAgPSBrZXlzLnJlZHVjZSgobWFwLCBrZXkpID0+IHtcblx0XHRcdFx0bWFwW2tleS5kcml2ZXJBcmVhXSA/Pz0gW107XG5cdFx0XHRcdG1hcFtrZXkuZHJpdmVyQXJlYV0ucHVzaChrZXkpO1xuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fSwge30pO1xuXHRcdFx0Y29uc3QgcmVzdWx0c01hcCA9IHt9O1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmVudHJpZXMoYXJlYVRvRHJpdmVyTWV0YUtleXNNYXApLm1hcChhc3luYyAoW2FyZWEsIGtleXNdKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGFyZWFSZXMgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KGtleXMubWFwKChrZXkpID0+IGtleS5kcml2ZXJNZXRhS2V5KSk7XG5cdFx0XHRcdGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0cmVzdWx0c01hcFtrZXkua2V5XSA9IGFyZWFSZXNba2V5LmRyaXZlck1ldGFLZXldID8/IHt9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pKTtcblx0XHRcdHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiAoe1xuXHRcdFx0XHRrZXk6IGtleS5rZXksXG5cdFx0XHRcdG1ldGE6IHJlc3VsdHNNYXBba2V5LmtleV1cblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdHNldEl0ZW06IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRhd2FpdCBzZXRJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCB2YWx1ZSk7XG5cdFx0fSxcblx0XHRzZXRJdGVtczogYXN5bmMgKGl0ZW1zKSA9PiB7XG5cdFx0XHRjb25zdCBhcmVhVG9LZXlWYWx1ZU1hcCA9IHt9O1xuXHRcdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShcImtleVwiIGluIGl0ZW0gPyBpdGVtLmtleSA6IGl0ZW0uaXRlbS5rZXkpO1xuXHRcdFx0XHRhcmVhVG9LZXlWYWx1ZU1hcFtkcml2ZXJBcmVhXSA/Pz0gW107XG5cdFx0XHRcdGFyZWFUb0tleVZhbHVlTWFwW2RyaXZlckFyZWFdLnB1c2goe1xuXHRcdFx0XHRcdGtleTogZHJpdmVyS2V5LFxuXHRcdFx0XHRcdHZhbHVlOiBpdGVtLnZhbHVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChPYmplY3QuZW50cmllcyhhcmVhVG9LZXlWYWx1ZU1hcCkubWFwKGFzeW5jIChbZHJpdmVyQXJlYSwgdmFsdWVzXSkgPT4ge1xuXHRcdFx0XHRhd2FpdCBnZXREcml2ZXIoZHJpdmVyQXJlYSkuc2V0SXRlbXModmFsdWVzKTtcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdHNldE1ldGE6IGFzeW5jIChrZXksIHByb3BlcnRpZXMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGF3YWl0IHNldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpO1xuXHRcdH0sXG5cdFx0c2V0TWV0YXM6IGFzeW5jIChpdGVtcykgPT4ge1xuXHRcdFx0Y29uc3QgYXJlYVRvTWV0YVVwZGF0ZXNNYXAgPSB7fTtcblx0XHRcdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoXCJrZXlcIiBpbiBpdGVtID8gaXRlbS5rZXkgOiBpdGVtLml0ZW0ua2V5KTtcblx0XHRcdFx0YXJlYVRvTWV0YVVwZGF0ZXNNYXBbZHJpdmVyQXJlYV0gPz89IFtdO1xuXHRcdFx0XHRhcmVhVG9NZXRhVXBkYXRlc01hcFtkcml2ZXJBcmVhXS5wdXNoKHtcblx0XHRcdFx0XHRrZXk6IGRyaXZlcktleSxcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOiBpdGVtLm1ldGFcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5lbnRyaWVzKGFyZWFUb01ldGFVcGRhdGVzTWFwKS5tYXAoYXN5bmMgKFtzdG9yYWdlQXJlYSwgdXBkYXRlc10pID0+IHtcblx0XHRcdFx0Y29uc3QgZHJpdmVyID0gZ2V0RHJpdmVyKHN0b3JhZ2VBcmVhKTtcblx0XHRcdFx0Y29uc3QgbWV0YUtleXMgPSB1cGRhdGVzLm1hcCgoeyBrZXkgfSkgPT4gZ2V0TWV0YUtleShrZXkpKTtcblx0XHRcdFx0Y29uc3QgZXhpc3RpbmdNZXRhcyA9IGF3YWl0IGRyaXZlci5nZXRJdGVtcyhtZXRhS2V5cyk7XG5cdFx0XHRcdGNvbnN0IGV4aXN0aW5nTWV0YU1hcCA9IE9iamVjdC5mcm9tRW50cmllcyhleGlzdGluZ01ldGFzLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IFtrZXksIGdldE1ldGFWYWx1ZSh2YWx1ZSldKSk7XG5cdFx0XHRcdGNvbnN0IG1ldGFVcGRhdGVzID0gdXBkYXRlcy5tYXAoKHsga2V5LCBwcm9wZXJ0aWVzIH0pID0+IHtcblx0XHRcdFx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShrZXkpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRrZXk6IG1ldGFLZXksXG5cdFx0XHRcdFx0XHR2YWx1ZTogbWVyZ2VNZXRhKGV4aXN0aW5nTWV0YU1hcFttZXRhS2V5XSA/PyB7fSwgcHJvcGVydGllcylcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW1zKG1ldGFVcGRhdGVzKTtcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdHJlbW92ZUl0ZW06IGFzeW5jIChrZXksIG9wdHMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGF3YWl0IHJlbW92ZUl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSXRlbXM6IGFzeW5jIChrZXlzKSA9PiB7XG5cdFx0XHRjb25zdCBhcmVhVG9LZXlzTWFwID0ge307XG5cdFx0XHRrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRsZXQga2V5U3RyO1xuXHRcdFx0XHRsZXQgb3B0cztcblx0XHRcdFx0aWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIGtleVN0ciA9IGtleTtcblx0XHRcdFx0ZWxzZSBpZiAoXCJnZXRWYWx1ZVwiIGluIGtleSkga2V5U3RyID0ga2V5LmtleTtcblx0XHRcdFx0ZWxzZSBpZiAoXCJpdGVtXCIgaW4ga2V5KSB7XG5cdFx0XHRcdFx0a2V5U3RyID0ga2V5Lml0ZW0ua2V5O1xuXHRcdFx0XHRcdG9wdHMgPSBrZXkub3B0aW9ucztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRrZXlTdHIgPSBrZXkua2V5O1xuXHRcdFx0XHRcdG9wdHMgPSBrZXkub3B0aW9ucztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXlTdHIpO1xuXHRcdFx0XHRhcmVhVG9LZXlzTWFwW2RyaXZlckFyZWFdID8/PSBbXTtcblx0XHRcdFx0YXJlYVRvS2V5c01hcFtkcml2ZXJBcmVhXS5wdXNoKGRyaXZlcktleSk7XG5cdFx0XHRcdGlmIChvcHRzPy5yZW1vdmVNZXRhKSBhcmVhVG9LZXlzTWFwW2RyaXZlckFyZWFdLnB1c2goZ2V0TWV0YUtleShkcml2ZXJLZXkpKTtcblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmVudHJpZXMoYXJlYVRvS2V5c01hcCkubWFwKGFzeW5jIChbZHJpdmVyQXJlYSwga2V5c10pID0+IHtcblx0XHRcdFx0YXdhaXQgZ2V0RHJpdmVyKGRyaXZlckFyZWEpLnJlbW92ZUl0ZW1zKGtleXMpO1xuXHRcdFx0fSkpO1xuXHRcdH0sXG5cdFx0Y2xlYXI6IGFzeW5jIChiYXNlKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXREcml2ZXIoYmFzZSkuY2xlYXIoKTtcblx0XHR9LFxuXHRcdHJlbW92ZU1ldGE6IGFzeW5jIChrZXksIHByb3BlcnRpZXMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGF3YWl0IHJlbW92ZU1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpO1xuXHRcdH0sXG5cdFx0c25hcHNob3Q6IGFzeW5jIChiYXNlLCBvcHRzKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgZ2V0RHJpdmVyKGJhc2UpLnNuYXBzaG90KCk7XG5cdFx0XHRvcHRzPy5leGNsdWRlS2V5cz8uZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2tleV07XG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2dldE1ldGFLZXkoa2V5KV07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH0sXG5cdFx0cmVzdG9yZVNuYXBzaG90OiBhc3luYyAoYmFzZSwgZGF0YSkgPT4ge1xuXHRcdFx0YXdhaXQgZ2V0RHJpdmVyKGJhc2UpLnJlc3RvcmVTbmFwc2hvdChkYXRhKTtcblx0XHR9LFxuXHRcdHdhdGNoOiAoa2V5LCBjYikgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0cmV0dXJuIHdhdGNoKGRyaXZlciwgZHJpdmVyS2V5LCBjYik7XG5cdFx0fSxcblx0XHR1bndhdGNoKCkge1xuXHRcdFx0T2JqZWN0LnZhbHVlcyhkcml2ZXJzKS5mb3JFYWNoKChkcml2ZXIpID0+IHtcblx0XHRcdFx0ZHJpdmVyLnVud2F0Y2goKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0ZGVmaW5lSXRlbTogKGtleSwgb3B0cykgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0Y29uc3QgeyB2ZXJzaW9uOiB0YXJnZXRWZXJzaW9uID0gMSwgbWlncmF0aW9ucyA9IHt9LCBvbk1pZ3JhdGlvbkNvbXBsZXRlLCBkZWJ1ZyA9IGZhbHNlIH0gPSBvcHRzID8/IHt9O1xuXHRcdFx0aWYgKHRhcmdldFZlcnNpb24gPCAxKSB0aHJvdyBFcnJvcihcIlN0b3JhZ2UgaXRlbSB2ZXJzaW9uIGNhbm5vdCBiZSBsZXNzIHRoYW4gMS4gSW5pdGlhbCB2ZXJzaW9ucyBzaG91bGQgYmUgc2V0IHRvIDEsIG5vdCAwLlwiKTtcblx0XHRcdGxldCBuZWVkc1ZlcnNpb25TZXQgPSBmYWxzZTtcblx0XHRcdGNvbnN0IG1pZ3JhdGUgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRyaXZlck1ldGFLZXkgPSBnZXRNZXRhS2V5KGRyaXZlcktleSk7XG5cdFx0XHRcdGNvbnN0IFt7IHZhbHVlIH0sIHsgdmFsdWU6IG1ldGEgfV0gPSBhd2FpdCBkcml2ZXIuZ2V0SXRlbXMoW2RyaXZlcktleSwgZHJpdmVyTWV0YUtleV0pO1xuXHRcdFx0XHRuZWVkc1ZlcnNpb25TZXQgPSB2YWx1ZSA9PSBudWxsICYmIG1ldGE/LnYgPT0gbnVsbCAmJiAhIXRhcmdldFZlcnNpb247XG5cdFx0XHRcdGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gbWV0YT8udiA/PyAxO1xuXHRcdFx0XHRpZiAoY3VycmVudFZlcnNpb24gPiB0YXJnZXRWZXJzaW9uKSB0aHJvdyBFcnJvcihgVmVyc2lvbiBkb3duZ3JhZGUgZGV0ZWN0ZWQgKHYke2N1cnJlbnRWZXJzaW9ufSAtPiB2JHt0YXJnZXRWZXJzaW9ufSkgZm9yIFwiJHtrZXl9XCJgKTtcblx0XHRcdFx0aWYgKGN1cnJlbnRWZXJzaW9uID09PSB0YXJnZXRWZXJzaW9uKSByZXR1cm47XG5cdFx0XHRcdGlmIChkZWJ1ZykgY29uc29sZS5kZWJ1ZyhgW0B3eHQtZGV2L3N0b3JhZ2VdIFJ1bm5pbmcgc3RvcmFnZSBtaWdyYXRpb24gZm9yICR7a2V5fTogdiR7Y3VycmVudFZlcnNpb259IC0+IHYke3RhcmdldFZlcnNpb259YCk7XG5cdFx0XHRcdGNvbnN0IG1pZ3JhdGlvbnNUb1J1biA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRhcmdldFZlcnNpb24gLSBjdXJyZW50VmVyc2lvbiB9LCAoXywgaSkgPT4gY3VycmVudFZlcnNpb24gKyBpICsgMSk7XG5cdFx0XHRcdGxldCBtaWdyYXRlZFZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdGZvciAoY29uc3QgbWlncmF0ZVRvVmVyc2lvbiBvZiBtaWdyYXRpb25zVG9SdW4pIHRyeSB7XG5cdFx0XHRcdFx0bWlncmF0ZWRWYWx1ZSA9IGF3YWl0IG1pZ3JhdGlvbnM/LlttaWdyYXRlVG9WZXJzaW9uXT8uKG1pZ3JhdGVkVmFsdWUpID8/IG1pZ3JhdGVkVmFsdWU7XG5cdFx0XHRcdFx0aWYgKGRlYnVnKSBjb25zb2xlLmRlYnVnKGBbQHd4dC1kZXYvc3RvcmFnZV0gU3RvcmFnZSBtaWdyYXRpb24gcHJvY2Vzc2VkIGZvciB2ZXJzaW9uOiB2JHttaWdyYXRlVG9WZXJzaW9ufWApO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgTWlncmF0aW9uRXJyb3Ioa2V5LCBtaWdyYXRlVG9WZXJzaW9uLCB7IGNhdXNlOiBlcnIgfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW1zKFt7XG5cdFx0XHRcdFx0a2V5OiBkcml2ZXJLZXksXG5cdFx0XHRcdFx0dmFsdWU6IG1pZ3JhdGVkVmFsdWVcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGtleTogZHJpdmVyTWV0YUtleSxcblx0XHRcdFx0XHR2YWx1ZToge1xuXHRcdFx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0XHRcdHY6IHRhcmdldFZlcnNpb25cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1dKTtcblx0XHRcdFx0aWYgKGRlYnVnKSBjb25zb2xlLmRlYnVnKGBbQHd4dC1kZXYvc3RvcmFnZV0gU3RvcmFnZSBtaWdyYXRpb24gY29tcGxldGVkIGZvciAke2tleX0gdiR7dGFyZ2V0VmVyc2lvbn1gLCB7IG1pZ3JhdGVkVmFsdWUgfSk7XG5cdFx0XHRcdG9uTWlncmF0aW9uQ29tcGxldGU/LihtaWdyYXRlZFZhbHVlLCB0YXJnZXRWZXJzaW9uKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBtaWdyYXRpb25zRG9uZSA9IG9wdHM/Lm1pZ3JhdGlvbnMgPT0gbnVsbCA/IFByb21pc2UucmVzb2x2ZSgpIDogbWlncmF0ZSgpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgW0B3eHQtZGV2L3N0b3JhZ2VdIE1pZ3JhdGlvbiBmYWlsZWQgZm9yICR7a2V5fWAsIGVycik7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGluaXRNdXRleCA9IG5ldyBNdXRleCgpO1xuXHRcdFx0Y29uc3QgZ2V0RmFsbGJhY2sgPSAoKSA9PiBvcHRzPy5mYWxsYmFjayA/PyBvcHRzPy5kZWZhdWx0VmFsdWUgPz8gbnVsbDtcblx0XHRcdGNvbnN0IGdldE9ySW5pdFZhbHVlID0gKCkgPT4gaW5pdE11dGV4LnJ1bkV4Y2x1c2l2ZShhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gYXdhaXQgZHJpdmVyLmdldEl0ZW0oZHJpdmVyS2V5KTtcblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwgfHwgb3B0cz8uaW5pdCA9PSBudWxsKSByZXR1cm4gdmFsdWU7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gYXdhaXQgb3B0cy5pbml0KCk7XG5cdFx0XHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtKGRyaXZlcktleSwgbmV3VmFsdWUpO1xuXHRcdFx0XHRpZiAodmFsdWUgPT0gbnVsbCAmJiB0YXJnZXRWZXJzaW9uID4gMSkgYXdhaXQgc2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSwgeyB2OiB0YXJnZXRWZXJzaW9uIH0pO1xuXHRcdFx0XHRyZXR1cm4gbmV3VmFsdWU7XG5cdFx0XHR9KTtcblx0XHRcdG1pZ3JhdGlvbnNEb25lLnRoZW4oZ2V0T3JJbml0VmFsdWUpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRnZXQgZGVmYXVsdFZhbHVlKCkge1xuXHRcdFx0XHRcdHJldHVybiBnZXRGYWxsYmFjaygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXQgZmFsbGJhY2soKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGdldEZhbGxiYWNrKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldFZhbHVlOiBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0aWYgKG9wdHM/LmluaXQpIHJldHVybiBhd2FpdCBnZXRPckluaXRWYWx1ZSgpO1xuXHRcdFx0XHRcdGVsc2UgcmV0dXJuIGF3YWl0IGdldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRNZXRhOiBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0cmV0dXJuIGF3YWl0IGdldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXkpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXRWYWx1ZTogYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0aWYgKG5lZWRzVmVyc2lvblNldCkge1xuXHRcdFx0XHRcdFx0bmVlZHNWZXJzaW9uU2V0ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRhd2FpdCBQcm9taXNlLmFsbChbc2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgdmFsdWUpLCBzZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCB7IHY6IHRhcmdldFZlcnNpb24gfSldKTtcblx0XHRcdFx0XHR9IGVsc2UgYXdhaXQgc2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgdmFsdWUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXRNZXRhOiBhc3luYyAocHJvcGVydGllcykgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdHJldHVybiBhd2FpdCBzZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVtb3ZlVmFsdWU6IGFzeW5jIChvcHRzKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0cmV0dXJuIGF3YWl0IHJlbW92ZUl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVNZXRhOiBhc3luYyAocHJvcGVydGllcykgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdHJldHVybiBhd2FpdCByZW1vdmVNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0d2F0Y2g6IChjYikgPT4gd2F0Y2goZHJpdmVyLCBkcml2ZXJLZXksIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IGNiKG5ld1ZhbHVlID8/IGdldEZhbGxiYWNrKCksIG9sZFZhbHVlID8/IGdldEZhbGxiYWNrKCkpKSxcblx0XHRcdFx0bWlncmF0ZVxuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5mdW5jdGlvbiBjcmVhdGVEcml2ZXIoc3RvcmFnZUFyZWEpIHtcblx0Y29uc3QgZ2V0U3RvcmFnZUFyZWEgPSAoKSA9PiB7XG5cdFx0aWYgKGJyb3dzZXIucnVudGltZSA9PSBudWxsKSB0aHJvdyBFcnJvcihgJ3d4dC9zdG9yYWdlJyBtdXN0IGJlIGxvYWRlZCBpbiBhIHdlYiBleHRlbnNpb24gZW52aXJvbm1lbnRcblxuIC0gSWYgdGhyb3duIGR1cmluZyBhIGJ1aWxkLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3d4dC1kZXYvd3h0L2lzc3Vlcy8zNzFcbiAtIElmIHRocm93biBkdXJpbmcgdGVzdHMsIG1vY2sgJ3d4dC9icm93c2VyJyBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d4dC5kZXYvZ3VpZGUvZ28tZnVydGhlci90ZXN0aW5nLmh0bWxcbmApO1xuXHRcdGlmIChicm93c2VyLnN0b3JhZ2UgPT0gbnVsbCkgdGhyb3cgRXJyb3IoXCJZb3UgbXVzdCBhZGQgdGhlICdzdG9yYWdlJyBwZXJtaXNzaW9uIHRvIHlvdXIgbWFuaWZlc3QgdG8gdXNlICd3eHQvc3RvcmFnZSdcIik7XG5cdFx0Y29uc3QgYXJlYSA9IGJyb3dzZXIuc3RvcmFnZVtzdG9yYWdlQXJlYV07XG5cdFx0aWYgKGFyZWEgPT0gbnVsbCkgdGhyb3cgRXJyb3IoYFwiYnJvd3Nlci5zdG9yYWdlLiR7c3RvcmFnZUFyZWF9XCIgaXMgdW5kZWZpbmVkYCk7XG5cdFx0cmV0dXJuIGFyZWE7XG5cdH07XG5cdGNvbnN0IHdhdGNoTGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0cmV0dXJuIHtcblx0XHRnZXRJdGVtOiBhc3luYyAoa2V5KSA9PiB7XG5cdFx0XHRyZXR1cm4gKGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuZ2V0KGtleSkpW2tleV07XG5cdFx0fSxcblx0XHRnZXRJdGVtczogYXN5bmMgKGtleXMpID0+IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuZ2V0KGtleXMpO1xuXHRcdFx0cmV0dXJuIGtleXMubWFwKChrZXkpID0+ICh7XG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWU6IHJlc3VsdFtrZXldID8/IG51bGxcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdHNldEl0ZW06IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbCkgYXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5yZW1vdmUoa2V5KTtcblx0XHRcdGVsc2UgYXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5zZXQoeyBba2V5XTogdmFsdWUgfSk7XG5cdFx0fSxcblx0XHRzZXRJdGVtczogYXN5bmMgKHZhbHVlcykgPT4ge1xuXHRcdFx0Y29uc3QgbWFwID0gdmFsdWVzLnJlZHVjZSgobWFwLCB7IGtleSwgdmFsdWUgfSkgPT4ge1xuXHRcdFx0XHRtYXBba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fSwge30pO1xuXHRcdFx0YXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5zZXQobWFwKTtcblx0XHR9LFxuXHRcdHJlbW92ZUl0ZW06IGFzeW5jIChrZXkpID0+IHtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkucmVtb3ZlKGtleSk7XG5cdFx0fSxcblx0XHRyZW1vdmVJdGVtczogYXN5bmMgKGtleXMpID0+IHtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkucmVtb3ZlKGtleXMpO1xuXHRcdH0sXG5cdFx0Y2xlYXI6IGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuY2xlYXIoKTtcblx0XHR9LFxuXHRcdHNuYXBzaG90OiBhc3luYyAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5nZXQoKTtcblx0XHR9LFxuXHRcdHJlc3RvcmVTbmFwc2hvdDogYXN5bmMgKGRhdGEpID0+IHtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuc2V0KGRhdGEpO1xuXHRcdH0sXG5cdFx0d2F0Y2goa2V5LCBjYikge1xuXHRcdFx0Y29uc3QgbGlzdGVuZXIgPSAoY2hhbmdlcykgPT4ge1xuXHRcdFx0XHRjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzW2tleV07XG5cdFx0XHRcdGlmIChjaGFuZ2UgPT0gbnVsbCB8fCBkZXF1YWwoY2hhbmdlLm5ld1ZhbHVlLCBjaGFuZ2Uub2xkVmFsdWUpKSByZXR1cm47XG5cdFx0XHRcdGNiKGNoYW5nZS5uZXdWYWx1ZSA/PyBudWxsLCBjaGFuZ2Uub2xkVmFsdWUgPz8gbnVsbCk7XG5cdFx0XHR9O1xuXHRcdFx0Z2V0U3RvcmFnZUFyZWEoKS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0d2F0Y2hMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdGdldFN0b3JhZ2VBcmVhKCkub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdFx0d2F0Y2hMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHRcdH07XG5cdFx0fSxcblx0XHR1bndhdGNoKCkge1xuXHRcdFx0d2F0Y2hMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcblx0XHRcdFx0Z2V0U3RvcmFnZUFyZWEoKS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0fSk7XG5cdFx0XHR3YXRjaExpc3RlbmVycy5jbGVhcigpO1xuXHRcdH1cblx0fTtcbn1cbnZhciBNaWdyYXRpb25FcnJvciA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihrZXksIHZlcnNpb24sIG9wdGlvbnMpIHtcblx0XHRzdXBlcihgdiR7dmVyc2lvbn0gbWlncmF0aW9uIGZhaWxlZCBmb3IgXCIke2tleX1cImAsIG9wdGlvbnMpO1xuXHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgTWlncmF0aW9uRXJyb3IsIHN0b3JhZ2UgfTsiLCIvKipcbiAqIFN0b3JhZ2UgUXVvdGEgTWFuYWdlclxuICpcbiAqIE1hbmFnZXMgc3luYyBzdG9yYWdlIHRvIHN0YXkgd2l0aGluIEZpcmVmb3gncyB+MTAwS0IgbGltaXQuXG4gKiBDaHJvbWUvRWRnZSBoYXZlIG11Y2ggaGlnaGVyIGxpbWl0cyAofjFNQi9pdGVtLCAxME1CIHRvdGFsKSBzbyBubyB0cmltbWluZyBuZWVkZWQuXG4gKiBUcmltcyBkYXRhIGF1dG9tYXRpY2FsbHkgYmVmb3JlIHF1b3RhIGlzIGV4Y2VlZGVkIG9uIEZpcmVmb3ggb25seS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGltcG9ydCB7IGNoZWNrU3RvcmVRdW90YSB9IGZyb20gJ0BkcmFjb24vd3h0LXNoYXJlZC9zdG9yYWdlJztcbiAqXG4gKiAvLyBCZWZvcmUgc2V0dGluZyBkYXRhXG4gKiBjb25zdCB7IG5lZWRzVHJpbSwgZGF0YSB9ID0gYXdhaXQgY2hlY2tTdG9yZVF1b3RhKCd0YXNrcycsIGN1cnJlbnRUYXNrcywgbmV3VGFza3MpO1xuICogaWYgKG5lZWRzVHJpbSkge1xuICogICBjb25zb2xlLmxvZygnRGF0YSB3YXMgdHJpbW1lZCBmb3IgRmlyZWZveCBxdW90YScpO1xuICogfVxuICogYXdhaXQgc3luY1N0b3JlLnNldFZhbHVlKGRhdGEpO1xuICogYGBgXG4gKi9cbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG4vLyBGaXJlZm94IHN5bmMgbGltaXRzIChDaHJvbWUvRWRnZSBoYXZlIH4xTUIvaXRlbSwgfjEwTUIgdG90YWwpXG5leHBvcnQgY29uc3QgRklSRUZPWF9TWU5DX1FVT1RBX0JZVEVTID0gMTAwICogMTAyNDsgLy8gfjEwMEtCXG5leHBvcnQgY29uc3QgRklSRUZPWF9JVEVNX1FVT1RBX0JZVEVTID0gOCAqIDEwMjQ7IC8vIH44S0IgcGVyIGl0ZW1cbmNvbnN0IFRBUkdFVF9VU0FHRV9SQVRJTyA9IDAuODsgLy8gVHJpbSB3aGVuIGF0IDgwJSBjYXBhY2l0eVxubGV0IGJyb3dzZXJLaW5kID0gJ3Vua25vd24nO1xuLyoqXG4gKiBEZXRlY3QgYnJvd3NlciB0eXBlIC0gY2FjaGVkIGZvciBwZXJmb3JtYW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlcktpbmQoKSB7XG4gICAgaWYgKGJyb3dzZXJLaW5kICE9PSAndW5rbm93bicpXG4gICAgICAgIHJldHVybiBicm93c2VyS2luZDtcbiAgICAvLyBDaHJvbWl1bSBicm93c2VycyBpbmNsdWRlOiBDaHJvbWUsIEVkZ2UsIEJyYXZlLCBPcGVyYSwgZXRjLlxuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh1YS5pbmNsdWRlcygnZmlyZWZveCcpKSB7XG4gICAgICAgIGJyb3dzZXJLaW5kID0gJ2ZpcmVmb3gnO1xuICAgIH1cbiAgICBlbHNlIGlmICh1YS5pbmNsdWRlcygnY2hyb21lJykgfHwgdWEuaW5jbHVkZXMoJ2VkZycpKSB7XG4gICAgICAgIGJyb3dzZXJLaW5kID0gJ2Nocm9taXVtJztcbiAgICB9XG4gICAgcmV0dXJuIGJyb3dzZXJLaW5kO1xufVxuLyoqXG4gKiBDaGVjayBpZiBjdXJyZW50IGJyb3dzZXIgaGFzIHN0cmljdCBzeW5jIGxpbWl0cyAoRmlyZWZveCBvbmx5KVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzU3RyaWN0UXVvdGEoKSB7XG4gICAgcmV0dXJuIGdldEJyb3dzZXJLaW5kKCkgPT09ICdmaXJlZm94Jztcbn1cbi8qKlxuICogR2V0IHN5bmMgc3RvcmFnZSBxdW90YSBzdGF0dXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1b3RhU3RhdHVzKCkge1xuICAgIC8vIE9uIENocm9taXVtLCBubyBxdW90YSBtYW5hZ2VtZW50IG5lZWRlZFxuICAgIGlmICghaGFzU3RyaWN0UXVvdGEoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlZDogMCxcbiAgICAgICAgICAgIGxpbWl0OiBJbmZpbml0eSxcbiAgICAgICAgICAgIHBlcmNlbnRVc2VkOiAwLFxuICAgICAgICAgICAgaXNOZWFyTGltaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYnJvd3NlcjogZ2V0QnJvd3NlcktpbmQoKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0Qnl0ZXNJblVzZSgpO1xuICAgICAgICBjb25zdCBsaW1pdCA9IEZJUkVGT1hfU1lOQ19RVU9UQV9CWVRFUztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZWQ6IGFsbCxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgcGVyY2VudFVzZWQ6IChhbGwgLyBsaW1pdCkgKiAxMDAsXG4gICAgICAgICAgICBpc05lYXJMaW1pdDogYWxsID4gbGltaXQgKiBUQVJHRVRfVVNBR0VfUkFUSU8sXG4gICAgICAgICAgICBicm93c2VyOiAnZmlyZWZveCcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZWQ6IDAsXG4gICAgICAgICAgICBsaW1pdDogRklSRUZPWF9TWU5DX1FVT1RBX0JZVEVTLFxuICAgICAgICAgICAgcGVyY2VudFVzZWQ6IDAsXG4gICAgICAgICAgICBpc05lYXJMaW1pdDogZmFsc2UsXG4gICAgICAgICAgICBicm93c2VyOiAnZmlyZWZveCcsXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqXG4gKiBFc3RpbWF0ZSB0aGUgc2l6ZSBvZiBhbiBvYmplY3QgaW4gSlNPTiBieXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVTaXplKG9iaikge1xuICAgIHJldHVybiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoSlNPTi5zdHJpbmdpZnkob2JqKSkubGVuZ3RoO1xufVxuLyoqXG4gKiBUcmltIGFuIGFycmF5IHRvIGZpdCB3aXRoaW4gRmlyZWZveCBxdW90YSBsaW1pdHNcbiAqXG4gKiBAcGFyYW0gYXJyIC0gQXJyYXkgdG8gdHJpbVxuICogQHBhcmFtIG1heEl0ZW1zIC0gTWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdG8ga2VlcFxuICogQHBhcmFtIGl0ZW1NYXhCeXRlcyAtIE1heGltdW0gYnl0ZXMgcGVyIGl0ZW0gKGRlZmF1bHQ6IDhLQiBmb3IgRmlyZWZveClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW1BcnJheVRvU2l6ZShhcnIsIG1heEl0ZW1zLCBpdGVtTWF4Qnl0ZXMgPSBGSVJFRk9YX0lURU1fUVVPVEFfQllURVMpIHtcbiAgICBsZXQgdHJpbW1lZCA9IGFyci5zbGljZSgwLCBtYXhJdGVtcyk7XG4gICAgLy8gSWYgc3RpbGwgdG9vIGJpZywgdHJ1bmNhdGUgZWFjaCBpdGVtXG4gICAgY29uc3QgY3VycmVudFNpemUgPSBlc3RpbWF0ZVNpemUodHJpbW1lZCk7XG4gICAgY29uc3QgdGFyZ2V0U2l6ZSA9IGl0ZW1NYXhCeXRlcyAqIHRyaW1tZWQubGVuZ3RoO1xuICAgIGlmIChjdXJyZW50U2l6ZSA+IHRhcmdldFNpemUpIHtcbiAgICAgICAgdHJpbW1lZCA9IHRyaW1tZWQubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVN0ciA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGl0ZW1TdHIubGVuZ3RoID4gaXRlbU1heEJ5dGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gVHJ1bmNhdGUgc3RyaW5nIGZpZWxkc1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoaXRlbVN0cik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcnNlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyc2VkW2tleV0gPT09ICdzdHJpbmcnICYmIHBhcnNlZFtrZXldLmxlbmd0aCA+IGl0ZW1NYXhCeXRlcyAvIDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XS5zdWJzdHJpbmcoMCwgTWF0aC5mbG9vcihpdGVtTWF4Qnl0ZXMgLyAxMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcGFyc2luZyBmYWlscywganVzdCB0cnVuY2F0ZSB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtU3RyLnN1YnN0cmluZygwLCBpdGVtTWF4Qnl0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyaW1tZWQ7XG59XG4vKipcbiAqIENoZWNrIGlmIGEgc3RvcmUgbmVlZHMgdHJpbW1pbmcgYmVmb3JlIHdyaXRpbmdcbiAqIE9uIENocm9tZS9FZGdlLCB0aGlzIGlzIGEgbm8tb3AgLSByZXR1cm5zIGRhdGEgdW5jaGFuZ2VkXG4gKiBPbiBGaXJlZm94LCB0cmltcyBpZiBhcHByb2FjaGluZyBxdW90YSBsaW1pdHNcbiAqXG4gKiBAcGFyYW0gc3RvcmVOYW1lIC0gTmFtZSBvZiB0aGUgc3RvcmUgKGZvciBsb2dnaW5nKVxuICogQHBhcmFtIGN1cnJlbnREYXRhIC0gQ3VycmVudCBzdG9yZWQgZGF0YVxuICogQHBhcmFtIG5ld0RhdGEgLSBOZXcgZGF0YSB0byB3cml0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBRdW90YSBvcHRpb25zXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1N0b3JlUXVvdGEoc3RvcmVOYW1lLCBjdXJyZW50RGF0YSwgbmV3RGF0YSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgZ2V0UXVvdGFTdGF0dXMoKTtcbiAgICAvLyBPbiBDaHJvbWl1bSwgbm8gcXVvdGEgbWFuYWdlbWVudCBuZWVkZWQgLSByZXR1cm4gZGF0YSB1bmNoYW5nZWRcbiAgICBpZiAoc3RhdHVzLmJyb3dzZXIgIT09ICdmaXJlZm94Jykge1xuICAgICAgICByZXR1cm4geyBuZWVkc1RyaW06IGZhbHNlLCBkYXRhOiBuZXdEYXRhLCBzdGF0dXMgfTtcbiAgICB9XG4gICAgLy8gSWYgd2UncmUgbm90IG5lYXIgdGhlIGxpbWl0LCBubyB0cmltbWluZyBuZWVkZWRcbiAgICBpZiAoIXN0YXR1cy5pc05lYXJMaW1pdCkge1xuICAgICAgICByZXR1cm4geyBuZWVkc1RyaW06IGZhbHNlLCBkYXRhOiBuZXdEYXRhLCBzdGF0dXMgfTtcbiAgICB9XG4gICAgY29uc3QgeyBtYXhJdGVtcyA9IDUwLCBtYXhJdGVtU2l6ZUJ5dGVzID0gRklSRUZPWF9JVEVNX1FVT1RBX0JZVEVTIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG5ld1NpemUgPSBlc3RpbWF0ZVNpemUobmV3RGF0YSk7XG4gICAgLy8gSWYgYWRkaW5nIG5ldyBkYXRhIHdvdWxkIGV4Y2VlZCBxdW90YSwgdHJpbSBwcm9hY3RpdmVseVxuICAgIGlmIChzdGF0dXMudXNlZCArIG5ld1NpemUgPiBGSVJFRk9YX1NZTkNfUVVPVEFfQllURVMgKiBUQVJHRVRfVVNBR0VfUkFUSU8pIHtcbiAgICAgICAgY29uc29sZS5sb2coYFtRdW90YU1hbmFnZXJdIFByb2FjdGl2ZSB0cmltIGZvciAke3N0b3JlTmFtZX06IGN1cnJlbnQ9JHtzdGF0dXMudXNlZH1CLCBhZGRpbmc9JHtuZXdTaXplfUJgKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3RGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWQgPSB0cmltQXJyYXlUb1NpemUobmV3RGF0YSwgbWF4SXRlbXMsIG1heEl0ZW1TaXplQnl0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHsgbmVlZHNUcmltOiB0cnVlLCBkYXRhOiB0cmltbWVkLCBzdGF0dXMgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBuZWVkc1RyaW06IGZhbHNlLCBkYXRhOiBuZXdEYXRhLCBzdGF0dXMgfTtcbn1cbi8qKlxuICogRW5zdXJlIGEgc3luYyBzdG9yZSBzdGF5cyB3aXRoaW4gRmlyZWZveCBxdW90YVxuICogT24gQ2hyb21lL0VkZ2UsIHRoaXMgaXMgYSBuby1vcFxuICpcbiAqIEBwYXJhbSBzdG9yZU5hbWUgLSBOYW1lIG9mIHRoZSBzdG9yZSAoZm9yIGxvZ2dpbmcpXG4gKiBAcGFyYW0gc3RvcmUgLSBXWFQgc3RvcmFnZSBzdG9yZSB3aXRoIGdldFZhbHVlL3NldFZhbHVlIG1ldGhvZHNcbiAqIEBwYXJhbSBvcHRpb25zIC0gUXVvdGEgb3B0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZW5zdXJlU3luY1F1b3RhIH0gZnJvbSAnQGRyYWNvbi93eHQtc2hhcmVkL3N0b3JhZ2UnO1xuICogaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJ3d4dC91dGlscy9zdG9yYWdlJztcbiAqXG4gKiBjb25zdCBteVN5bmNTdG9yZSA9IHN0b3JhZ2UuZGVmaW5lSXRlbTxNeURhdGE+KCdzeW5jOm15RGF0YScsIHsgZmFsbGJhY2s6IFtdIH0pO1xuICpcbiAqIC8vIEFmdGVyIGFkZGluZyBpdGVtc1xuICogYXdhaXQgZW5zdXJlU3luY1F1b3RhKCdzeW5jOm15RGF0YScsIG15U3luY1N0b3JlLCB7IG1heEl0ZW1zOiAxMDAgfSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZVN5bmNRdW90YShzdG9yZU5hbWUsIHN0b3JlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBnZXRRdW90YVN0YXR1cygpO1xuICAgIC8vIE9uIENocm9taXVtLCBubyBxdW90YSBtYW5hZ2VtZW50IG5lZWRlZFxuICAgIGlmIChzdGF0dXMuYnJvd3NlciAhPT0gJ2ZpcmVmb3gnKSB7XG4gICAgICAgIHJldHVybiB7IHdhc1RyaW1tZWQ6IGZhbHNlLCBzdGF0dXMgfTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN0b3JlLmdldFZhbHVlKCk7XG4gICAgY29uc3QgeyBuZWVkc1RyaW0sIGRhdGE6IHRyaW1tZWREYXRhIH0gPSBhd2FpdCBjaGVja1N0b3JlUXVvdGEoc3RvcmVOYW1lLCBkYXRhLCBkYXRhLCBvcHRpb25zKTtcbiAgICBpZiAobmVlZHNUcmltICYmIHRyaW1tZWREYXRhICE9PSBkYXRhKSB7XG4gICAgICAgIGF3YWl0IHN0b3JlLnNldFZhbHVlKHRyaW1tZWREYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coYFtRdW90YU1hbmFnZXJdIFRyaW1tZWQgJHtzdG9yZU5hbWV9IHRvIGZpdCBGaXJlZm94IHN5bmMgcXVvdGFgKTtcbiAgICAgICAgcmV0dXJuIHsgd2FzVHJpbW1lZDogdHJ1ZSwgc3RhdHVzIH07XG4gICAgfVxuICAgIHJldHVybiB7IHdhc1RyaW1tZWQ6IGZhbHNlLCBzdGF0dXMgfTtcbn1cbi8qKlxuICogVHJpbSBvbGQgaXRlbXMgZnJvbSBhIHRhc2svYWN0aXZpdHkgbGlzdCB0byBzdGF5IHdpdGhpbiBGaXJlZm94IHF1b3RhXG4gKiBLZWVwcyBtb3N0IHJlY2VudCBpdGVtcywgcmVtb3ZlcyBvbGRlc3Qgb25lc1xuICpcbiAqIEBwYXJhbSBpdGVtcyAtIEFycmF5IG9mIGl0ZW1zIHdpdGggYSB0aW1lc3RhbXAgb3Igc2ltaWxhciBvcmRlcmluZyBmaWVsZFxuICogQHBhcmFtIG1heEl0ZW1zIC0gTWF4aW11bSBpdGVtcyB0byBrZWVwXG4gKiBAcGFyYW0gdGltZXN0YW1wRmllbGQgLSBGaWVsZCBuYW1lIHRvIHVzZSBmb3Igc29ydGluZyAoZGVmYXVsdDogJ3RpbWVzdGFtcCcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltT2xkSXRlbXMoaXRlbXMsIG1heEl0ZW1zLCB0aW1lc3RhbXBGaWVsZCA9ICd0aW1lc3RhbXAnKSB7XG4gICAgLy8gU29ydCBieSB0aW1lc3RhbXAgZGVzY2VuZGluZyAobmV3ZXN0IGZpcnN0KSwgdGhlbiBzbGljZVxuICAgIHJldHVybiBbLi4uaXRlbXNdXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFWYWwgPSBhW3RpbWVzdGFtcEZpZWxkXTtcbiAgICAgICAgY29uc3QgYlZhbCA9IGJbdGltZXN0YW1wRmllbGRdO1xuICAgICAgICBpZiAodHlwZW9mIGFWYWwgPT09ICdudW1iZXInICYmIHR5cGVvZiBiVmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGJWYWwgLSBhVmFsOyAvLyBEZXNjZW5kaW5nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbiAgICAgICAgLnNsaWNlKDAsIG1heEl0ZW1zKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1b3RhLmpzLm1hcCIsIi8qKlxuICogRXh0ZW5zaW9uIHV0aWxpdGllcyBhbmQgZmFjdG9yeVxuICpcbiAqIFByb3ZpZGVzOlxuICogLSBjcmVhdGVFeHRlbnNpb24oKSAtIENvbXBsZXRlIHNldHVwIGluIG9uZSBjYWxsXG4gKiAtIENvbnRleHQgZGV0ZWN0aW9uIGhlbHBlcnNcbiAqIC0gVGFiIG1hbmFnZW1lbnRcbiAqIC0gTWVzc2FnZSBwYXNzaW5nIHV0aWxpdGllc1xuICovXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgY3JlYXRlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4LmpzJztcbmltcG9ydCB7IGNyZWF0ZUFwaUNsaWVudCwgfSBmcm9tICcuLi9hcGkvaW5kZXguanMnO1xuaW1wb3J0IHsgY3JlYXRlQXV0aEZsb3cgfSBmcm9tICcuLi9hdXRoL2luZGV4LmpzJztcbmltcG9ydCB7IGRlZmF1bHRBdXRoU3RvcmUgfSBmcm9tICcuLi9zdG9yYWdlL2luZGV4LmpzJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICd3eHQvdXRpbHMvc3RvcmFnZSc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXh0ZW5zaW9uKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGFwcE5hbWUsIGFwcElkLCBlbnYsIGRlYnVnLCBzdG9yYWdlS2V5ID0gJ3N5bmM6YXV0aCcgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKHsgYXBwTmFtZSwgZW52LCBkZWJ1ZyB9KTtcbiAgICBjb25zdCBhdXRoU3RvcmUgPSBzdG9yYWdlLmRlZmluZUl0ZW0oc3RvcmFnZUtleSwge1xuICAgICAgICBmYWxsYmFjazogZGVmYXVsdEF1dGhTdG9yZSxcbiAgICB9KTtcbiAgICBjb25zdCBhcGlDbGllbnQgPSBjcmVhdGVBcGlDbGllbnQoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGdldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRBdXRoOiAoYXV0aCkgPT4gYXV0aFN0b3JlLnNldFZhbHVlKGF1dGgpLFxuICAgICAgICBvbkF1dGhFcnJvcjogKCkgPT4gYXV0aEZsb3cub3BlbkxvZ2luKCksXG4gICAgfSk7XG4gICAgY29uc3QgYXV0aEZsb3cgPSBjcmVhdGVBdXRoRmxvdyh7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgYXBwSWQsXG4gICAgICAgIGZsb3c6ICdlbWFpbCcsIC8vIERlZmF1bHQgdG8gZW1haWwgbWFnaWMgbGlua1xuICAgICAgICBnZXRBdXRoOiAoKSA9PiBhdXRoU3RvcmUuZ2V0VmFsdWUoKSxcbiAgICAgICAgc2V0QXV0aDogKGF1dGgpID0+IGF1dGhTdG9yZS5zZXRWYWx1ZShhdXRoKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBhdXRoU3RvcmUuc2V0VmFsdWUoZGVmYXVsdEF1dGhTdG9yZSksXG4gICAgfSk7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QXV0aFN0YXRlKCkge1xuICAgICAgICBjb25zdCBhdXRoID0gYXdhaXQgYXV0aFN0b3JlLmdldFZhbHVlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhYXV0aC5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIHVzZXI6IGF1dGgudXNlclxuICAgICAgICAgICAgICAgID8geyBlbWFpbDogYXV0aC51c2VyLmVtYWlsLCBuYW1lOiBhdXRoLnVzZXIubmFtZSB8fCAnVXNlcicsIHBpY3R1cmU6IGF1dGgudXNlci5waWN0dXJlIH1cbiAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICB0b2tlbjogYXV0aC5hY2Nlc3NUb2tlbiB8fCBudWxsLFxuICAgICAgICAgICAgcXVvdGE6IG51bGwsIC8vIEZldGNoZWQgc2VwYXJhdGVseSB2aWEgZ2V0UXVvdGEoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgZ2V0QXV0aFN0YXRlKCkpLmlzQXV0aGVudGljYXRlZDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBhcGlDbGllbnQsXG4gICAgICAgIGF1dGhGbG93LFxuICAgICAgICBhdXRoU3RvcmUsXG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIGFwcElkLFxuICAgICAgICBnZXRBdXRoU3RhdGUsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCxcbiAgICAgICAgb3BlbkxvZ2luOiBhdXRoRmxvdy5vcGVuTG9naW4sXG4gICAgICAgIG9wZW5EYXNoYm9hcmQ6IGF1dGhGbG93Lm9wZW5EYXNoYm9hcmQsXG4gICAgICAgIGxvZ291dDogYXV0aEZsb3cubG9nb3V0LFxuICAgICAgICBnZXRVc2VyOiAoKSA9PiBhcGlDbGllbnQuZ2V0VXNlcigpLFxuICAgICAgICBhZGRRdW90YTogKGFtb3VudCkgPT4gYXBpQ2xpZW50LmFkZFF1b3RhKGFtb3VudCA/PyAxMDApLFxuICAgICAgICBnZXRRdW90YTogKCkgPT4gYXBpQ2xpZW50LmdldFF1b3RhKCksXG4gICAgICAgIHN1YnNjcmliZTogKGFtb3VudCkgPT4gYXBpQ2xpZW50LmFkZFF1b3RhKGFtb3VudCA/PyAxMDApLFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFzaWNFeHRlbnNpb24ob3B0aW9ucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFwcE5hbWU6IG9wdGlvbnMuYXBwTmFtZSxcbiAgICAgICAgYXBwSWQ6IG9wdGlvbnMuYXBwSWQsXG4gICAgICAgIGdldEV4dGVuc2lvbk9yaWdpbixcbiAgICAgICAgZ2V0RXh0ZW5zaW9uVXJsLFxuICAgICAgICBvcGVuSW5OZXdUYWIsXG4gICAgICAgIGdldEFjdGl2ZVRhYixcbiAgICAgICAgc2VuZFRvQmFja2dyb3VuZCxcbiAgICAgICAgaGFzUGVybWlzc2lvbixcbiAgICAgICAgcmVxdWVzdFBlcm1pc3Npb24sXG4gICAgfTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRleHQgRGV0ZWN0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gaXNDb250ZW50U2NyaXB0KCkge1xuICAgIHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyB8fCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFeHRlbnNpb25Db250ZXh0KCkge1xuICAgIHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbjonKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0JhY2tncm91bmRTY3JpcHQoKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAodHlwZW9mIGdsb2JhbFRoaXMuU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgc2VsZiBpbnN0YW5jZW9mIGdsb2JhbFRoaXMuU2VydmljZVdvcmtlckdsb2JhbFNjb3BlKSk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbnNpb24gVVJMIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlbnNpb25PcmlnaW4oKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5nZXRVUkwoJycpLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uVXJsKHBhdGgpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLmdldFVSTChwYXRoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0F1dGhDYWxsYmFja1VybCh1cmwpIHtcbiAgICByZXR1cm4gdXJsLmluY2x1ZGVzKGJyb3dzZXIucnVudGltZS5pZCkgJiYgdXJsLmluY2x1ZGVzKCdhdXRoLWNhbGxiYWNrJyk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUYWIgTWFuYWdlbWVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5Jbk5ld1RhYih1cmwpIHtcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybCB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVUYWIoKSB7XG4gICAgY29uc3QgW3RhYl0gPSBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG4gICAgcmV0dXJuIHRhYjtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZVRvQWN0aXZlVGFiKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCBnZXRBY3RpdmVUYWIoKTtcbiAgICBpZiAodGFiPy5pZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlSW5BY3RpdmVUYWIoZnVuYykge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEFjdGl2ZVRhYigpO1xuICAgIGlmICghdGFiPy5pZClcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYnJvd3Nlci5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYi5pZCB9LFxuICAgICAgICAgICAgZnVuYyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdPy5yZXN1bHQ7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250ZW50IFNjcmlwdCBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFRvQmFja2dyb3VuZChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBlcm1pc3Npb24gSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMgPSBbXSkge1xuICAgIHJldHVybiBicm93c2VyLnBlcm1pc3Npb25zLmNvbnRhaW5zKHsgcGVybWlzc2lvbnMgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFBlcm1pc3Npb24ocGVybWlzc2lvbnMgPSBbXSkge1xuICAgIHJldHVybiBicm93c2VyLnBlcm1pc3Npb25zLnJlcXVlc3QoeyBwZXJtaXNzaW9ucyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCB2YXIgdXRpbDtcbihmdW5jdGlvbiAodXRpbCkge1xuICAgIHV0aWwuYXNzZXJ0RXF1YWwgPSAoXykgPT4geyB9O1xuICAgIGZ1bmN0aW9uIGFzc2VydElzKF9hcmcpIHsgfVxuICAgIHV0aWwuYXNzZXJ0SXMgPSBhc3NlcnRJcztcbiAgICBmdW5jdGlvbiBhc3NlcnROZXZlcihfeCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgdXRpbC5hc3NlcnROZXZlciA9IGFzc2VydE5ldmVyO1xuICAgIHV0aWwuYXJyYXlUb0VudW0gPSAoaXRlbXMpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgb2JqW2l0ZW1dID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXMgPSAob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhvYmopLmZpbHRlcigoaykgPT4gdHlwZW9mIG9ialtvYmpba11dICE9PSBcIm51bWJlclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIHZhbGlkS2V5cykge1xuICAgICAgICAgICAgZmlsdGVyZWRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0VmFsdWVzKGZpbHRlcmVkKTtcbiAgICB9O1xuICAgIHV0aWwub2JqZWN0VmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RLZXlzKG9iaikubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2VdO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHV0aWwub2JqZWN0S2V5cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gXCJmdW5jdGlvblwiIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA/IChvYmopID0+IE9iamVjdC5rZXlzKG9iaikgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYW4vYmFuXG4gICAgICAgIDogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH07XG4gICAgdXRpbC5maW5kID0gKGFyciwgY2hlY2tlcikgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tlcihpdGVtKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgdXRpbC5pc0ludGVnZXIgPSB0eXBlb2YgTnVtYmVyLmlzSW50ZWdlciA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gKHZhbCkgPT4gTnVtYmVyLmlzSW50ZWdlcih2YWwpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXkubWFwKCh2YWwpID0+ICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gYCcke3ZhbH0nYCA6IHZhbCkpLmpvaW4oc2VwYXJhdG9yKTtcbiAgICB9XG4gICAgdXRpbC5qb2luVmFsdWVzID0gam9pblZhbHVlcztcbiAgICB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciA9IChfLCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbn0pKHV0aWwgfHwgKHV0aWwgPSB7fSkpO1xuZXhwb3J0IHZhciBvYmplY3RVdGlsO1xuKGZ1bmN0aW9uIChvYmplY3RVdGlsKSB7XG4gICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5maXJzdCxcbiAgICAgICAgICAgIC4uLnNlY29uZCwgLy8gc2Vjb25kIG92ZXJ3cml0ZXMgZmlyc3RcbiAgICAgICAgfTtcbiAgICB9O1xufSkob2JqZWN0VXRpbCB8fCAob2JqZWN0VXRpbCA9IHt9KSk7XG5leHBvcnQgY29uc3QgWm9kUGFyc2VkVHlwZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwic3RyaW5nXCIsXG4gICAgXCJuYW5cIixcbiAgICBcIm51bWJlclwiLFxuICAgIFwiaW50ZWdlclwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICBcImRhdGVcIixcbiAgICBcImJpZ2ludFwiLFxuICAgIFwic3ltYm9sXCIsXG4gICAgXCJmdW5jdGlvblwiLFxuICAgIFwidW5kZWZpbmVkXCIsXG4gICAgXCJudWxsXCIsXG4gICAgXCJhcnJheVwiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJ1bmtub3duXCIsXG4gICAgXCJwcm9taXNlXCIsXG4gICAgXCJ2b2lkXCIsXG4gICAgXCJuZXZlclwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJzZXRcIixcbl0pO1xuZXhwb3J0IGNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zdHJpbmc7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4oZGF0YSkgPyBab2RQYXJzZWRUeXBlLm5hbiA6IFpvZFBhcnNlZFR5cGUubnVtYmVyO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYm9vbGVhbjtcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbjtcbiAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYmlnaW50O1xuICAgICAgICBjYXNlIFwic3ltYm9sXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zeW1ib2w7XG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50aGVuICYmIHR5cGVvZiBkYXRhLnRoZW4gPT09IFwiZnVuY3Rpb25cIiAmJiBkYXRhLmNhdGNoICYmIHR5cGVvZiBkYXRhLmNhdGNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5wcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm1hcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgU2V0ICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIERhdGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5kYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUub2JqZWN0O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5rbm93bjtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgdXRpbCB9IGZyb20gXCIuL2hlbHBlcnMvdXRpbC5qc1wiO1xuZXhwb3J0IGNvbnN0IFpvZElzc3VlQ29kZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwiaW52YWxpZF90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2xpdGVyYWxcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiaW52YWxpZF91bmlvblwiLFxuICAgIFwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yXCIsXG4gICAgXCJpbnZhbGlkX2VudW1fdmFsdWVcIixcbiAgICBcInVucmVjb2duaXplZF9rZXlzXCIsXG4gICAgXCJpbnZhbGlkX2FyZ3VtZW50c1wiLFxuICAgIFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiLFxuICAgIFwiaW52YWxpZF9kYXRlXCIsXG4gICAgXCJpbnZhbGlkX3N0cmluZ1wiLFxuICAgIFwidG9vX3NtYWxsXCIsXG4gICAgXCJ0b29fYmlnXCIsXG4gICAgXCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlc1wiLFxuICAgIFwibm90X211bHRpcGxlX29mXCIsXG4gICAgXCJub3RfZmluaXRlXCIsXG5dKTtcbmV4cG9ydCBjb25zdCBxdW90ZWxlc3NKc29uID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmosIG51bGwsIDIpO1xuICAgIHJldHVybiBqc29uLnJlcGxhY2UoL1wiKFteXCJdKylcIjovZywgXCIkMTpcIik7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGdldCBlcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3VlcztcbiAgICB9XG4gICAgY29uc3RydWN0b3IoaXNzdWVzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNzdWVzID0gW107XG4gICAgICAgIHRoaXMuYWRkSXNzdWUgPSAoc3ViKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzc3VlcyA9IFsuLi50aGlzLmlzc3Vlcywgc3ViXTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZXMgPSAoc3VicyA9IFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzc3VlcyA9IFsuLi50aGlzLmlzc3VlcywgLi4uc3Vic107XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGFjdHVhbFByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiYW4vYmFuXG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgYWN0dWFsUHJvdG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fX3Byb3RvX18gPSBhY3R1YWxQcm90bztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBcIlpvZEVycm9yXCI7XG4gICAgICAgIHRoaXMuaXNzdWVzID0gaXNzdWVzO1xuICAgIH1cbiAgICBmb3JtYXQoX21hcHBlcikge1xuICAgICAgICBjb25zdCBtYXBwZXIgPSBfbWFwcGVyIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoaXNzdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNzdWUubWVzc2FnZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0geyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICBjb25zdCBwcm9jZXNzRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXNzdWUgb2YgZXJyb3IuaXNzdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF91bmlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlLnVuaW9uRXJyb3JzLm1hcChwcm9jZXNzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfcmV0dXJuX3R5cGVcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUucmV0dXJuVHlwZUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX2FyZ3VtZW50c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcihpc3N1ZS5hcmd1bWVudHNFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyID0gZmllbGRFcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBpc3N1ZS5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBpc3N1ZS5wYXRoW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVybWluYWwgPSBpID09PSBpc3N1ZS5wYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRlcm1pbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmICh0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IGVycm9yQXJyYXk6IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZXJyb3JBcnJheS5fZXJyb3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IGVycm9yQXJyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0uX2Vycm9ycy5wdXNoKG1hcHBlcihpc3N1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyciA9IGN1cnJbZWxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcm9jZXNzRXJyb3IodGhpcyk7XG4gICAgICAgIHJldHVybiBmaWVsZEVycm9ycztcbiAgICB9XG4gICAgc3RhdGljIGFzc2VydCh2YWx1ZSkge1xuICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFpvZEVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgYSBab2RFcnJvcjogJHt2YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgICB9XG4gICAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmlzc3VlcywgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIsIDIpO1xuICAgIH1cbiAgICBnZXQgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVzLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgZmxhdHRlbihtYXBwZXIgPSAoaXNzdWUpID0+IGlzc3VlLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7fTtcbiAgICAgICAgY29uc3QgZm9ybUVycm9ycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLmlzc3Vlcykge1xuICAgICAgICAgICAgaWYgKHN1Yi5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEVsID0gc3ViLnBhdGhbMF07XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbZmlyc3RFbF0gPSBmaWVsZEVycm9yc1tmaXJzdEVsXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tmaXJzdEVsXS5wdXNoKG1hcHBlcihzdWIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1FcnJvcnMucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZm9ybUVycm9ycywgZmllbGRFcnJvcnMgfTtcbiAgICB9XG4gICAgZ2V0IGZvcm1FcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXR0ZW4oKTtcbiAgICB9XG59XG5ab2RFcnJvci5jcmVhdGUgPSAoaXNzdWVzKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoaXNzdWVzKTtcbiAgICByZXR1cm4gZXJyb3I7XG59O1xuIiwiaW1wb3J0IHsgWm9kSXNzdWVDb2RlIH0gZnJvbSBcIi4uL1pvZEVycm9yLmpzXCI7XG5pbXBvcnQgeyB1dGlsLCBab2RQYXJzZWRUeXBlIH0gZnJvbSBcIi4uL2hlbHBlcnMvdXRpbC5qc1wiO1xuY29uc3QgZXJyb3JNYXAgPSAoaXNzdWUsIF9jdHgpID0+IHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBzd2l0Y2ggKGlzc3VlLmNvZGUpIHtcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnJlY2VpdmVkID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEV4cGVjdGVkICR7aXNzdWUuZXhwZWN0ZWR9LCByZWNlaXZlZCAke2lzc3VlLnJlY2VpdmVkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGxpdGVyYWwgdmFsdWUsIGV4cGVjdGVkICR7SlNPTi5zdHJpbmdpZnkoaXNzdWUuZXhwZWN0ZWQsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBVbnJlY29nbml6ZWQga2V5KHMpIGluIG9iamVjdDogJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUua2V5cywgXCIsIFwiKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb246XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBlbnVtIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX0sIHJlY2VpdmVkICcke2lzc3VlLnJlY2VpdmVkfSdgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIGFyZ3VtZW50c2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiByZXR1cm4gdHlwZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRhdGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiaW5jbHVkZXNcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBpbmNsdWRlIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmluY2x1ZGVzfVwiYDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYCR7bWVzc2FnZX0gYXQgb25lIG9yIG1vcmUgcG9zaXRpb25zIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAke2lzc3VlLnZhbGlkYXRpb24ucG9zaXRpb259YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcInN0YXJ0c1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBzdGFydCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLnN0YXJ0c1dpdGh9XCJgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcImVuZHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgZW5kIHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uZW5kc1dpdGh9XCJgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZS52YWxpZGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS52YWxpZGF0aW9uICE9PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgJHtpc3N1ZS52YWxpZGF0aW9ufWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudG9vX3NtYWxsOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnR5cGUgPT09IFwiYXJyYXlcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEFycmF5IG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gXCJleGFjdGx5XCIgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbGVhc3RgIDogYG1vcmUgdGhhbmB9ICR7aXNzdWUubWluaW11bX0gZWxlbWVudChzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgU3RyaW5nIG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gXCJleGFjdGx5XCIgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbGVhc3RgIDogYG92ZXJgfSAke2lzc3VlLm1pbmltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5IGVxdWFsIHRvIGAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGAgOiBgZ3JlYXRlciB0aGFuIGB9JHtpc3N1ZS5taW5pbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImJpZ2ludFwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5IGVxdWFsIHRvIGAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGAgOiBgZ3JlYXRlciB0aGFuIGB9JHtpc3N1ZS5taW5pbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHkgZXF1YWwgdG8gYCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYCA6IGBncmVhdGVyIHRoYW4gYH0ke25ldyBEYXRlKE51bWJlcihpc3N1ZS5taW5pbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudG9vX2JpZzpcbiAgICAgICAgICAgIGlmIChpc3N1ZS50eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBBcnJheSBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBtb3N0YCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19IGVsZW1lbnQocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFN0cmluZyBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBtb3N0YCA6IGB1bmRlcmB9ICR7aXNzdWUubWF4aW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGxlc3MgdGhhbiBvciBlcXVhbCB0b2AgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImJpZ2ludFwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmlnSW50IG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBsZXNzIHRoYW4gb3IgZXF1YWwgdG9gIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG9gIDogYHNtYWxsZXIgdGhhbmB9ICR7bmV3IERhdGUoTnVtYmVyKGlzc3VlLm1heGltdW0pKX1gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5jdXN0b206XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnRlcnNlY3Rpb24gcmVzdWx0cyBjb3VsZCBub3QgYmUgbWVyZ2VkYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2Y6XG4gICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtpc3N1ZS5tdWx0aXBsZU9mfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk51bWJlciBtdXN0IGJlIGZpbml0ZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBtZXNzYWdlID0gX2N0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbWVzc2FnZSB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGVycm9yTWFwO1xuIiwiaW1wb3J0IGRlZmF1bHRFcnJvck1hcCBmcm9tIFwiLi9sb2NhbGVzL2VuLmpzXCI7XG5sZXQgb3ZlcnJpZGVFcnJvck1hcCA9IGRlZmF1bHRFcnJvck1hcDtcbmV4cG9ydCB7IGRlZmF1bHRFcnJvck1hcCB9O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVycm9yTWFwKG1hcCkge1xuICAgIG92ZXJyaWRlRXJyb3JNYXAgPSBtYXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JNYXAoKSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlRXJyb3JNYXA7XG59XG4iLCJpbXBvcnQgeyBnZXRFcnJvck1hcCB9IGZyb20gXCIuLi9lcnJvcnMuanNcIjtcbmltcG9ydCBkZWZhdWx0RXJyb3JNYXAgZnJvbSBcIi4uL2xvY2FsZXMvZW4uanNcIjtcbmV4cG9ydCBjb25zdCBtYWtlSXNzdWUgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBwYXRoLCBlcnJvck1hcHMsIGlzc3VlRGF0YSB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gWy4uLnBhdGgsIC4uLihpc3N1ZURhdGEucGF0aCB8fCBbXSldO1xuICAgIGNvbnN0IGZ1bGxJc3N1ZSA9IHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICB9O1xuICAgIGlmIChpc3N1ZURhdGEubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGlzc3VlRGF0YS5tZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJcIjtcbiAgICBjb25zdCBtYXBzID0gZXJyb3JNYXBzXG4gICAgICAgIC5maWx0ZXIoKG0pID0+ICEhbSlcbiAgICAgICAgLnNsaWNlKClcbiAgICAgICAgLnJldmVyc2UoKTtcbiAgICBmb3IgKGNvbnN0IG1hcCBvZiBtYXBzKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IG1hcChmdWxsSXNzdWUsIHsgZGF0YSwgZGVmYXVsdEVycm9yOiBlcnJvck1lc3NhZ2UgfSkubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IEVNUFRZX1BBVEggPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGlzc3VlRGF0YSkge1xuICAgIGNvbnN0IG92ZXJyaWRlTWFwID0gZ2V0RXJyb3JNYXAoKTtcbiAgICBjb25zdCBpc3N1ZSA9IG1ha2VJc3N1ZSh7XG4gICAgICAgIGlzc3VlRGF0YTogaXNzdWVEYXRhLFxuICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIC8vIGNvbnRleHR1YWwgZXJyb3IgbWFwIGlzIGZpcnN0IHByaW9yaXR5XG4gICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsIC8vIHRoZW4gc2NoZW1hLWJvdW5kIG1hcCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIG92ZXJyaWRlTWFwLCAvLyB0aGVuIGdsb2JhbCBvdmVycmlkZSBtYXBcbiAgICAgICAgICAgIG92ZXJyaWRlTWFwID09PSBkZWZhdWx0RXJyb3JNYXAgPyB1bmRlZmluZWQgOiBkZWZhdWx0RXJyb3JNYXAsIC8vIHRoZW4gZ2xvYmFsIGRlZmF1bHQgbWFwXG4gICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgIH0pO1xuICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goaXNzdWUpO1xufVxuZXhwb3J0IGNsYXNzIFBhcnNlU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwidmFsaWRcIjtcbiAgICB9XG4gICAgZGlydHkoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBcInZhbGlkXCIpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gXCJkaXJ0eVwiO1xuICAgIH1cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiYWJvcnRlZFwiO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpIHtcbiAgICAgICAgY29uc3QgYXJyYXlWYWx1ZSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHMgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgYXJyYXlWYWx1ZS5wdXNoKHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogYXJyYXlWYWx1ZSB9O1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IHN5bmNQYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHBhaXI7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAoa2V5LnZhbHVlICE9PSBcIl9fcHJvdG9fX1wiICYmICh0eXBlb2YgdmFsdWUudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgfHwgcGFpci5hbHdheXNTZXQpKSB7XG4gICAgICAgICAgICAgICAgZmluYWxPYmplY3Rba2V5LnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxPYmplY3QgfTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgSU5WQUxJRCA9IE9iamVjdC5mcmVlemUoe1xuICAgIHN0YXR1czogXCJhYm9ydGVkXCIsXG59KTtcbmV4cG9ydCBjb25zdCBESVJUWSA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlIH0pO1xuZXhwb3J0IGNvbnN0IE9LID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWUgfSk7XG5leHBvcnQgY29uc3QgaXNBYm9ydGVkID0gKHgpID0+IHguc3RhdHVzID09PSBcImFib3J0ZWRcIjtcbmV4cG9ydCBjb25zdCBpc0RpcnR5ID0gKHgpID0+IHguc3RhdHVzID09PSBcImRpcnR5XCI7XG5leHBvcnQgY29uc3QgaXNWYWxpZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJ2YWxpZFwiO1xuZXhwb3J0IGNvbnN0IGlzQXN5bmMgPSAoeCkgPT4gdHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgeCBpbnN0YW5jZW9mIFByb21pc2U7XG4iLCJleHBvcnQgdmFyIGVycm9yVXRpbDtcbihmdW5jdGlvbiAoZXJyb3JVdGlsKSB7XG4gICAgZXJyb3JVdGlsLmVyclRvT2JqID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlIH0gOiBtZXNzYWdlIHx8IHt9O1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50OlxuICAgIGVycm9yVXRpbC50b1N0cmluZyA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IG1lc3NhZ2UgOiBtZXNzYWdlPy5tZXNzYWdlO1xufSkoZXJyb3JVdGlsIHx8IChlcnJvclV0aWwgPSB7fSkpO1xuIiwiaW1wb3J0IHsgWm9kRXJyb3IsIFpvZElzc3VlQ29kZSwgfSBmcm9tIFwiLi9ab2RFcnJvci5qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEVycm9yTWFwLCBnZXRFcnJvck1hcCB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IHsgZXJyb3JVdGlsIH0gZnJvbSBcIi4vaGVscGVycy9lcnJvclV0aWwuanNcIjtcbmltcG9ydCB7IERJUlRZLCBJTlZBTElELCBPSywgUGFyc2VTdGF0dXMsIGFkZElzc3VlVG9Db250ZXh0LCBpc0Fib3J0ZWQsIGlzQXN5bmMsIGlzRGlydHksIGlzVmFsaWQsIG1ha2VJc3N1ZSwgfSBmcm9tIFwiLi9oZWxwZXJzL3BhcnNlVXRpbC5qc1wiO1xuaW1wb3J0IHsgdXRpbCwgWm9kUGFyc2VkVHlwZSwgZ2V0UGFyc2VkVHlwZSB9IGZyb20gXCIuL2hlbHBlcnMvdXRpbC5qc1wiO1xuY2xhc3MgUGFyc2VJbnB1dExhenlQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHZhbHVlLCBwYXRoLCBrZXkpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVkUGF0aCA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgfVxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlZFBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIC4uLnRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRQYXRoLnB1c2goLi4udGhpcy5fcGF0aCwgdGhpcy5fa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGF0aDtcbiAgICB9XG59XG5jb25zdCBoYW5kbGVSZXN1bHQgPSAoY3R4LCByZXN1bHQpID0+IHtcbiAgICBpZiAoaXNWYWxpZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdC52YWx1ZSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gZmFpbGVkIGJ1dCBubyBpc3N1ZXMgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihjdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbn07XG5mdW5jdGlvbiBwcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgeyBlcnJvck1hcCwgaW52YWxpZF90eXBlX2Vycm9yLCByZXF1aXJlZF9lcnJvciwgZGVzY3JpcHRpb24gfSA9IHBhcmFtcztcbiAgICBpZiAoZXJyb3JNYXAgJiYgKGludmFsaWRfdHlwZV9lcnJvciB8fCByZXF1aXJlZF9lcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCB1c2UgXCJpbnZhbGlkX3R5cGVfZXJyb3JcIiBvciBcInJlcXVpcmVkX2Vycm9yXCIgaW4gY29uanVuY3Rpb24gd2l0aCBjdXN0b20gZXJyb3IgbWFwLmApO1xuICAgIH1cbiAgICBpZiAoZXJyb3JNYXApXG4gICAgICAgIHJldHVybiB7IGVycm9yTWFwOiBlcnJvck1hcCwgZGVzY3JpcHRpb24gfTtcbiAgICBjb25zdCBjdXN0b21NYXAgPSAoaXNzLCBjdHgpID0+IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBwYXJhbXM7XG4gICAgICAgIGlmIChpc3MuY29kZSA9PT0gXCJpbnZhbGlkX2VudW1fdmFsdWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjdHguZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyByZXF1aXJlZF9lcnJvciA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzcy5jb2RlICE9PSBcImludmFsaWRfdHlwZVwiKVxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBtZXNzYWdlID8/IGludmFsaWRfdHlwZV9lcnJvciA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBlcnJvck1hcDogY3VzdG9tTWFwLCBkZXNjcmlwdGlvbiB9O1xufVxuZXhwb3J0IGNsYXNzIFpvZFR5cGUge1xuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgX2dldFR5cGUoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIF9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KSB7XG4gICAgICAgIHJldHVybiAoY3R4IHx8IHtcbiAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogbmV3IFBhcnNlU3RhdHVzKCksXG4gICAgICAgICAgICBjdHg6IHtcbiAgICAgICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9wYXJzZVN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW5jaHJvbm91cyBwYXJzZSBlbmNvdW50ZXJlZCBwcm9taXNlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBfcGFyc2VBc3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG4gICAgcGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2FmZVBhcnNlKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcylcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgIH1cbiAgICBzYWZlUGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6IHBhcmFtcz8uYXN5bmMgPz8gZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXM/LmVycm9yTWFwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IHBhcmFtcz8ucGF0aCB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2VTeW5jKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgXCJ+dmFsaWRhdGVcIihkYXRhKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6ICEhdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycj8ubWVzc2FnZT8udG9Mb3dlckNhc2UoKT8uaW5jbHVkZXMoXCJlbmNvdW50ZXJlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VBc3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChyZXN1bHQpID0+IGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgcGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zYWZlUGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgYXN5bmMgc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXM/LmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IHBhcmFtcz8ucGF0aCB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWF5YmVBc3luY1Jlc3VsdCA9IHRoaXMuX3BhcnNlKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoaXNBc3luYyhtYXliZUFzeW5jUmVzdWx0KSA/IG1heWJlQXN5bmNSZXN1bHQgOiBQcm9taXNlLnJlc29sdmUobWF5YmVBc3luY1Jlc3VsdCkpO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmVmaW5lKGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGdldElzc3VlUHJvcGVydGllcyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2sodmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEVycm9yID0gKCkgPT4gY3R4LmFkZElzc3VlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgICAgICAgICAgIC4uLmdldElzc3VlUHJvcGVydGllcyh2YWwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmaW5lbWVudChjaGVjaywgcmVmaW5lbWVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUodHlwZW9mIHJlZmluZW1lbnREYXRhID09PSBcImZ1bmN0aW9uXCIgPyByZWZpbmVtZW50RGF0YSh2YWwsIGN0eCkgOiByZWZpbmVtZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVmaW5lbWVudChyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJyZWZpbmVtZW50XCIsIHJlZmluZW1lbnQgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1cGVyUmVmaW5lKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQocmVmaW5lbWVudCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGRlZikge1xuICAgICAgICAvKiogQWxpYXMgb2Ygc2FmZVBhcnNlQXN5bmMgKi9cbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNhZmVQYXJzZUFzeW5jO1xuICAgICAgICB0aGlzLl9kZWYgPSBkZWY7XG4gICAgICAgIHRoaXMucGFyc2UgPSB0aGlzLnBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlID0gdGhpcy5zYWZlUGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJzZUFzeW5jID0gdGhpcy5wYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlQXN5bmMgPSB0aGlzLnNhZmVQYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zcGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmUgPSB0aGlzLnJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZW1lbnQgPSB0aGlzLnJlZmluZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdXBlclJlZmluZSA9IHRoaXMuc3VwZXJSZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRoaXMub3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsYWJsZSA9IHRoaXMubnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsaXNoID0gdGhpcy5udWxsaXNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLmFycmF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9yID0gdGhpcy5vci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuZCA9IHRoaXMuYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0gdGhpcy5kZWZhdWx0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2F0Y2ggPSB0aGlzLmNhdGNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUgPSB0aGlzLmRlc2NyaWJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGlwZSA9IHRoaXMucGlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdGhpcy5yZWFkb25seS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzTnVsbGFibGUgPSB0aGlzLmlzTnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09wdGlvbmFsID0gdGhpcy5pc09wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXNbXCJ+c3RhbmRhcmRcIl0gPSB7XG4gICAgICAgICAgICB2ZXJzaW9uOiAxLFxuICAgICAgICAgICAgdmVuZG9yOiBcInpvZFwiLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChkYXRhKSA9PiB0aGlzW1wifnZhbGlkYXRlXCJdKGRhdGEpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBvcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsaXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udWxsYWJsZSgpLm9wdGlvbmFsKCk7XG4gICAgfVxuICAgIGFycmF5KCkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gWm9kUHJvbWlzZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgb3Iob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBab2RVbmlvbi5jcmVhdGUoW3RoaXMsIG9wdGlvbl0sIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIGFuZChpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSh0aGlzLCBpbmNvbWluZywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVmYXVsdChkZWYpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIGlubmVyVHlwZTogdGhpcyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJyYW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJyYW5kZWQoe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCcmFuZGVkLFxuICAgICAgICAgICAgdHlwZTogdGhpcyxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoKGRlZikge1xuICAgICAgICBjb25zdCBjYXRjaFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBjYXRjaFZhbHVlOiBjYXRjaFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZXNjcmliZShkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBUaGlzID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBUaGlzKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGlwZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIFpvZFBpcGVsaW5lLmNyZWF0ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZWFkb25seSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFJlYWRvbmx5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgaXNPcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKHVuZGVmaW5lZCkuc3VjY2VzcztcbiAgICB9XG4gICAgaXNOdWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKG51bGwpLnN1Y2Nlc3M7XG4gICAgfVxufVxuY29uc3QgY3VpZFJlZ2V4ID0gL15jW15cXHMtXXs4LH0kL2k7XG5jb25zdCBjdWlkMlJlZ2V4ID0gL15bMC05YS16XSskLztcbmNvbnN0IHVsaWRSZWdleCA9IC9eWzAtOUEtSEpLTU5QLVRWLVpdezI2fSQvaTtcbi8vIGNvbnN0IHV1aWRSZWdleCA9XG4vLyAgIC9eKFthLWYwLTldezh9LVthLWYwLTldezR9LVsxLTVdW2EtZjAtOV17M30tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5jb25zdCB1dWlkUmVnZXggPSAvXlswLTlhLWZBLUZdezh9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezEyfSQvaTtcbmNvbnN0IG5hbm9pZFJlZ2V4ID0gL15bYS16MC05Xy1dezIxfSQvaTtcbmNvbnN0IGp3dFJlZ2V4ID0gL15bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fXSokLztcbmNvbnN0IGR1cmF0aW9uUmVnZXggPSAvXlstK10/UCg/ISQpKD86KD86Wy0rXT9cXGQrWSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtZJCkpPyg/Oig/OlstK10/XFxkK00pfCg/OlstK10/XFxkK1suLF1cXGQrTSQpKT8oPzooPzpbLStdP1xcZCtXKXwoPzpbLStdP1xcZCtbLixdXFxkK1ckKSk/KD86KD86Wy0rXT9cXGQrRCl8KD86Wy0rXT9cXGQrWy4sXVxcZCtEJCkpPyg/OlQoPz1bXFxkKy1dKSg/Oig/OlstK10/XFxkK0gpfCg/OlstK10/XFxkK1suLF1cXGQrSCQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86Wy0rXT9cXGQrKD86Wy4sXVxcZCspP1MpPyk/PyQvO1xuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYxODEvMTU1MDE1NVxuLy8gb2xkIHZlcnNpb246IHRvbyBzbG93LCBkaWRuJ3Qgc3VwcG9ydCB1bmljb2RlXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuLy9vbGQgZW1haWwgcmVnZXhcbi8vIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpW1xcXS4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKD8hLSkoW148PigpW1xcXS4sOzpcXHNAXCJdK1xcLikrW148PigpW1xcXS4sOzpcXHNAXCJdezEsfSlbXi08PigpW1xcXS4sOzpcXHNAXCJdJC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbKCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFxdKXwoXFxbSVB2NjooKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpXFxdKXwoW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dKltBLVphLXowLTldKSooXFwuW0EtWmEtel17Mix9KSspKSQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtekEtWjAtOVxcLlxcIVxcI1xcJFxcJVxcJlxcJ1xcKlxcK1xcL1xcPVxcP1xcXlxcX1xcYFxce1xcfFxcfVxcflxcLV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvaTtcbmNvbnN0IGVtYWlsUmVnZXggPSAvXig/IVxcLikoPyEuKlxcLlxcLikoW0EtWjAtOV8nK1xcLVxcLl0qKVtBLVowLTlfKy1dQChbQS1aMC05XVtBLVowLTlcXC1dKlxcLikrW0EtWl17Mix9JC9pO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtejAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16MC05LV0rKD86XFwuW2EtejAtOVxcLV0rKSokL2k7XG4vLyBmcm9tIGh0dHBzOi8vdGhla2V2aW5zY290dC5jb20vZW1vamlzLWluLWphdmFzY3JpcHQvI3dyaXRpbmctYS1yZWd1bGFyLWV4cHJlc3Npb25cbmNvbnN0IF9lbW9qaVJlZ2V4ID0gYF4oXFxcXHB7RXh0ZW5kZWRfUGljdG9ncmFwaGljfXxcXFxccHtFbW9qaV9Db21wb25lbnR9KSskYDtcbmxldCBlbW9qaVJlZ2V4O1xuLy8gZmFzdGVyLCBzaW1wbGVyLCBzYWZlclxuY29uc3QgaXB2NFJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkkLztcbmNvbnN0IGlwdjRDaWRyUmVnZXggPSAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLygzWzAtMl18WzEyXT9bMC05XSkkLztcbi8vIGNvbnN0IGlwdjZSZWdleCA9XG4vLyAvXigoW2EtZjAtOV17MSw0fTopezd9fDo6KFthLWYwLTldezEsNH06KXswLDZ9fChbYS1mMC05XXsxLDR9Oil7MX06KFthLWYwLTldezEsNH06KXswLDV9fChbYS1mMC05XXsxLDR9Oil7Mn06KFthLWYwLTldezEsNH06KXswLDR9fChbYS1mMC05XXsxLDR9Oil7M306KFthLWYwLTldezEsNH06KXswLDN9fChbYS1mMC05XXsxLDR9Oil7NH06KFthLWYwLTldezEsNH06KXswLDJ9fChbYS1mMC05XXsxLDR9Oil7NX06KFthLWYwLTldezEsNH06KXswLDF9KShbYS1mMC05XXsxLDR9fCgoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKSkkLztcbmNvbnN0IGlwdjZSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKSQvO1xuY29uc3QgaXB2NkNpZHJSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKVxcLygxMlswLThdfDFbMDFdWzAtOV18WzEtOV0/WzAtOV0pJC87XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83ODYwMzkyL2RldGVybWluZS1pZi1zdHJpbmctaXMtaW4tYmFzZTY0LXVzaW5nLWphdmFzY3JpcHRcbmNvbnN0IGJhc2U2NFJlZ2V4ID0gL14oWzAtOWEtekEtWisvXXs0fSkqKChbMC05YS16QS1aKy9dezJ9PT0pfChbMC05YS16QS1aKy9dezN9PSkpPyQvO1xuLy8gaHR0cHM6Ly9iYXNlNjQuZ3VydS9zdGFuZGFyZHMvYmFzZTY0dXJsXG5jb25zdCBiYXNlNjR1cmxSZWdleCA9IC9eKFswLTlhLXpBLVotX117NH0pKigoWzAtOWEtekEtWi1fXXsyfSg9PSk/KXwoWzAtOWEtekEtWi1fXXszfSg9KT8pKT8kLztcbi8vIHNpbXBsZVxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9YDtcbi8vIG5vIGxlYXAgeWVhciB2YWxpZGF0aW9uXG4vLyBjb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgXFxcXGR7NH0tKCgwWzEzNTc4XXwxMHwxMiktMzF8KDBbMTMtOV18MVswLTJdKS0zMHwoMFsxLTldfDFbMC0yXSktKDBbMS05XXwxXFxcXGR8MlxcXFxkKSlgO1xuLy8gd2l0aCBsZWFwIHllYXIgdmFsaWRhdGlvblxuY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYCgoXFxcXGRcXFxcZFsyNDY4XVswNDhdfFxcXFxkXFxcXGRbMTM1NzldWzI2XXxcXFxcZFxcXFxkMFs0OF18WzAyNDY4XVswNDhdMDB8WzEzNTc5XVsyNl0wMCktMDItMjl8XFxcXGR7NH0tKCgwWzEzNTc4XXwxWzAyXSktKDBbMS05XXxbMTJdXFxcXGR8M1swMV0pfCgwWzQ2OV18MTEpLSgwWzEtOV18WzEyXVxcXFxkfDMwKXwoMDIpLSgwWzEtOV18MVxcXFxkfDJbMC04XSkpKWA7XG5jb25zdCBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKGBeJHtkYXRlUmVnZXhTb3VyY2V9JGApO1xuZnVuY3Rpb24gdGltZVJlZ2V4U291cmNlKGFyZ3MpIHtcbiAgICBsZXQgc2Vjb25kc1JlZ2V4U291cmNlID0gYFswLTVdXFxcXGRgO1xuICAgIGlmIChhcmdzLnByZWNpc2lvbikge1xuICAgICAgICBzZWNvbmRzUmVnZXhTb3VyY2UgPSBgJHtzZWNvbmRzUmVnZXhTb3VyY2V9XFxcXC5cXFxcZHske2FyZ3MucHJlY2lzaW9ufX1gO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcmdzLnByZWNpc2lvbiA9PSBudWxsKSB7XG4gICAgICAgIHNlY29uZHNSZWdleFNvdXJjZSA9IGAke3NlY29uZHNSZWdleFNvdXJjZX0oXFxcXC5cXFxcZCspP2A7XG4gICAgfVxuICAgIGNvbnN0IHNlY29uZHNRdWFudGlmaWVyID0gYXJncy5wcmVjaXNpb24gPyBcIitcIiA6IFwiP1wiOyAvLyByZXF1aXJlIHNlY29uZHMgaWYgcHJlY2lzaW9uIGlzIG5vbnplcm9cbiAgICByZXR1cm4gYChbMDFdXFxcXGR8MlswLTNdKTpbMC01XVxcXFxkKDoke3NlY29uZHNSZWdleFNvdXJjZX0pJHtzZWNvbmRzUXVhbnRpZmllcn1gO1xufVxuZnVuY3Rpb24gdGltZVJlZ2V4KGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfSRgKTtcbn1cbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzE0MzIzMVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGV0aW1lUmVnZXgoYXJncykge1xuICAgIGxldCByZWdleCA9IGAke2RhdGVSZWdleFNvdXJjZX1UJHt0aW1lUmVnZXhTb3VyY2UoYXJncyl9YDtcbiAgICBjb25zdCBvcHRzID0gW107XG4gICAgb3B0cy5wdXNoKGFyZ3MubG9jYWwgPyBgWj9gIDogYFpgKTtcbiAgICBpZiAoYXJncy5vZmZzZXQpXG4gICAgICAgIG9wdHMucHVzaChgKFsrLV1cXFxcZHsyfTo/XFxcXGR7Mn0pYCk7XG4gICAgcmVnZXggPSBgJHtyZWdleH0oJHtvcHRzLmpvaW4oXCJ8XCIpfSlgO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSVAoaXAsIHZlcnNpb24pIHtcbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjRcIiB8fCAhdmVyc2lvbikgJiYgaXB2NFJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NlJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSldUKGp3dCwgYWxnKSB7XG4gICAgaWYgKCFqd3RSZWdleC50ZXN0KGp3dCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBbaGVhZGVyXSA9IGp3dC5zcGxpdChcIi5cIik7XG4gICAgICAgIGlmICghaGVhZGVyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NHVybCB0byBiYXNlNjRcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gaGVhZGVyXG4gICAgICAgICAgICAucmVwbGFjZSgvLS9nLCBcIitcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csIFwiL1wiKVxuICAgICAgICAgICAgLnBhZEVuZChoZWFkZXIubGVuZ3RoICsgKCg0IC0gKGhlYWRlci5sZW5ndGggJSA0KSkgJSA0KSwgXCI9XCIpO1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gSlNPTi5wYXJzZShhdG9iKGJhc2U2NCkpO1xuICAgICAgICBpZiAodHlwZW9mIGRlY29kZWQgIT09IFwib2JqZWN0XCIgfHwgZGVjb2RlZCA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKFwidHlwXCIgaW4gZGVjb2RlZCAmJiBkZWNvZGVkPy50eXAgIT09IFwiSldUXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghZGVjb2RlZC5hbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChhbGcgJiYgZGVjb2RlZC5hbGcgIT09IGFsZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzVmFsaWRDaWRyKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRDaWRyUmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NlwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY2Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgY2xhc3MgWm9kU3RyaW5nIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1vamlcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1vamlSZWdleCkge1xuICAgICAgICAgICAgICAgICAgICBlbW9qaVJlZ2V4ID0gbmV3IFJlZ0V4cChfZW1vamlSZWdleCwgXCJ1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1dWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibmFub2lkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5hbm9pZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJuYW5vaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkMlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkMlJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bGlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVybFwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVSTChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIGNoZWNrLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IGNoZWNrLnJlZ2V4LnRlc3QoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwicmVnZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRyaW1cIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiaW5jbHVkZXNcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5pbmNsdWRlcyhjaGVjay52YWx1ZSwgY2hlY2sucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgaW5jbHVkZXM6IGNoZWNrLnZhbHVlLCBwb3NpdGlvbjogY2hlY2sucG9zaXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRvTG93ZXJDYXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0b1VwcGVyQ2FzZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwic3RhcnRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLnN0YXJ0c1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgc3RhcnRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVuZHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuZW5kc1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgZW5kc1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRldGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRlUmVnZXg7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSB0aW1lUmVnZXgoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImR1cmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWR1cmF0aW9uUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImR1cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJpcFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkSVAoaW5wdXQuZGF0YSwgY2hlY2sudmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiand0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRKV1QoaW5wdXQuZGF0YSwgY2hlY2suYWxnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImp3dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY2lkclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ2lkcihpbnB1dC5kYXRhLCBjaGVjay52ZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImNpZHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiYmFzZTY0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJiYXNlNjR1cmxcIikge1xuICAgICAgICAgICAgICAgIGlmICghYmFzZTY0dXJsUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImJhc2U2NHVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfcmVnZXgocmVnZXgsIHZhbGlkYXRpb24sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lbWVudCgoZGF0YSkgPT4gcmVnZXgudGVzdChkYXRhKSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbixcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWFpbChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZW1haWxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1cmwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInVybFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGVtb2ppKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbW9qaVwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHV1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInV1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBuYW5vaWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcIm5hbm9pZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkMihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZDJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1bGlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1bGlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgYmFzZTY0KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJiYXNlNjRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBiYXNlNjR1cmwobWVzc2FnZSkge1xuICAgICAgICAvLyBiYXNlNjR1cmwgZW5jb2RpbmcgaXMgYSBtb2RpZmljYXRpb24gb2YgYmFzZTY0IHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGluIFVSTHMgYW5kIGZpbGVuYW1lc1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJiYXNlNjR1cmxcIixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGp3dChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiand0XCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgaXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImlwXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgY2lkcihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY2lkclwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGRhdGV0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBwcmVjaXNpb246IHR5cGVvZiBvcHRpb25zPy5wcmVjaXNpb24gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogb3B0aW9ucz8ucHJlY2lzaW9uLFxuICAgICAgICAgICAgb2Zmc2V0OiBvcHRpb25zPy5vZmZzZXQgPz8gZmFsc2UsXG4gICAgICAgICAgICBsb2NhbDogb3B0aW9ucz8ubG9jYWwgPz8gZmFsc2UsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucz8ubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkYXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkYXRlXCIsIG1lc3NhZ2UgfSk7XG4gICAgfVxuICAgIHRpbWUob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJ0aW1lXCIsXG4gICAgICAgICAgICBwcmVjaXNpb246IHR5cGVvZiBvcHRpb25zPy5wcmVjaXNpb24gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogb3B0aW9ucz8ucHJlY2lzaW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHVyYXRpb24obWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImR1cmF0aW9uXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgcmVnZXgocmVnZXgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwicmVnZXhcIixcbiAgICAgICAgICAgIHJlZ2V4OiByZWdleCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluY2x1ZGVzKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImluY2x1ZGVzXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogb3B0aW9ucz8ucG9zaXRpb24sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucz8ubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInN0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImVuZHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkxlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJsZW5ndGhcIixcbiAgICAgICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFcXVpdmFsZW50IHRvIGAubWluKDEpYFxuICAgICAqL1xuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSk7XG4gICAgfVxuICAgIHRyaW0oKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0cmltXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b0xvd2VyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvTG93ZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b1VwcGVyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvVXBwZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNEYXRldGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRldGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRlXCIpO1xuICAgIH1cbiAgICBnZXQgaXNUaW1lKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0R1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImR1cmF0aW9uXCIpO1xuICAgIH1cbiAgICBnZXQgaXNFbWFpbCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJlbWFpbFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVVJMKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInVybFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1vamkoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1vamlcIik7XG4gICAgfVxuICAgIGdldCBpc1VVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXVpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzTkFOT0lEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcIm5hbm9pZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDVUlEMigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkMlwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVUxJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1bGlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNJUCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpcFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ0lEUigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjaWRyXCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0XCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjR1cmwoKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpO1xuICAgIH1cbiAgICBnZXQgbWluTGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RTdHJpbmcuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTdHJpbmcsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgPz8gZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTY2NDg0L3doeS1kb2VzLW1vZHVsdXMtb3BlcmF0b3ItcmV0dXJuLWZyYWN0aW9uYWwtbnVtYmVyLWluLWphdmFzY3JpcHQvMzE3MTEwMzQjMzE3MTEwMzRcbmZ1bmN0aW9uIGZsb2F0U2FmZVJlbWFpbmRlcih2YWwsIHN0ZXApIHtcbiAgICBjb25zdCB2YWxEZWNDb3VudCA9ICh2YWwudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IHN0ZXBEZWNDb3VudCA9IChzdGVwLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBkZWNDb3VudCA9IHZhbERlY0NvdW50ID4gc3RlcERlY0NvdW50ID8gdmFsRGVjQ291bnQgOiBzdGVwRGVjQ291bnQ7XG4gICAgY29uc3QgdmFsSW50ID0gTnVtYmVyLnBhcnNlSW50KHZhbC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgY29uc3Qgc3RlcEludCA9IE51bWJlci5wYXJzZUludChzdGVwLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICByZXR1cm4gKHZhbEludCAlIHN0ZXBJbnQpIC8gMTAgKiogZGVjQ291bnQ7XG59XG5leHBvcnQgY2xhc3MgWm9kTnVtYmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMubXVsdGlwbGVPZjtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gTnVtYmVyKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcImludFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsb2F0U2FmZVJlbWFpbmRlcihpbnB1dC5kYXRhLCBjaGVjay52YWx1ZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZmluaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW50KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluaXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZmluaXRlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzYWZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pblZhbHVlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICBnZXQgaXNJbnQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaW50XCIgfHwgKGNoLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiICYmIHV0aWwuaXNJbnRlZ2VyKGNoLnZhbHVlKSkpO1xuICAgIH1cbiAgICBnZXQgaXNGaW5pdGUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJmaW5pdGVcIiB8fCBjaC5raW5kID09PSBcImludFwiIHx8IGNoLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShtaW4pICYmIE51bWJlci5pc0Zpbml0ZShtYXgpO1xuICAgIH1cbn1cblpvZE51bWJlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bWJlcixcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RCaWdJbnQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW4gPSB0aGlzLmd0ZTtcbiAgICAgICAgdGhpcy5tYXggPSB0aGlzLmx0ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCaWdJbnQoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludmFsaWRJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5iaWdpbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaWdpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEgJSBjaGVjay52YWx1ZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX2dldEludmFsaWRJbnB1dChpbnB1dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJpZ2ludCxcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RCaWdJbnQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCaWdJbnQsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgPz8gZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQm9vbGVhbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJvb2xlYW4oaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5ib29sZWFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJvb2xlYW4sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQm9vbGVhbi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RCb29sZWFuKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCb29sZWFuLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlIHx8IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZERhdGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBuZXcgRGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZGF0ZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oaW5wdXQuZGF0YS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGlucHV0LmRhdGEuZ2V0VGltZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluRGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5EYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhEYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pbkRhdGUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiAhPSBudWxsID8gbmV3IERhdGUobWluKSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBtYXhEYXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXggIT0gbnVsbCA/IG5ldyBEYXRlKG1heCkgOiBudWxsO1xuICAgIH1cbn1cblpvZERhdGUuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgfHwgZmFsc2UsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGF0ZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RTeW1ib2wgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFN5bWJvbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTeW1ib2woe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN5bWJvbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RVbmRlZmluZWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVuZGVmaW5lZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmRlZmluZWQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuZGVmaW5lZCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROdWxsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udWxsLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZE51bGwuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RBbnkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gdG8gcHJldmVudCBpbnN0YW5jZXMgb2Ygb3RoZXIgY2xhc3NlcyBmcm9tIGV4dGVuZGluZyBab2RBbnkuIHRoaXMgY2F1c2VzIGlzc3VlcyB3aXRoIGNhdGNoYWxsIGluIFpvZE9iamVjdC5cbiAgICAgICAgdGhpcy5fYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RBbnkuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQW55KHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5rbm93biBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyByZXF1aXJlZFxuICAgICAgICB0aGlzLl91bmtub3duID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmtub3duLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVua25vd24oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVua25vd24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTmV2ZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5uZXZlcixcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbn1cblpvZE5ldmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5ldmVyKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROZXZlcixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RWb2lkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnZvaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVm9pZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RWb2lkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RWb2lkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEFycmF5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4LCBzdGF0dXMgfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5leGFjdExlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY3R4LmRhdGEubGVuZ3RoID4gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjdHguZGF0YS5sZW5ndGggPCBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBpZiAodG9vQmlnIHx8IHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHRvb0JpZyA/IFpvZElzc3VlQ29kZS50b29fYmlnIDogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogKHRvb1NtYWxsID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogKHRvb0JpZyA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLmV4YWN0TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5taW5MZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPCBkZWYubWluTGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5MZW5ndGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5MZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heExlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5tYXhMZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhMZW5ndGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFsuLi5jdHguZGF0YV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZUFzeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFsuLi5jdHguZGF0YV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGVmLnR5cGUuX3BhcnNlU3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogbWluTGVuZ3RoLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHsgdmFsdWU6IG1heExlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZW5ndGgobGVuLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgZXhhY3RMZW5ndGg6IHsgdmFsdWU6IGxlbiwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RBcnJheS5jcmVhdGUgPSAoc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgdHlwZTogc2NoZW1hLFxuICAgICAgICBtaW5MZW5ndGg6IG51bGwsXG4gICAgICAgIG1heExlbmd0aDogbnVsbCxcbiAgICAgICAgZXhhY3RMZW5ndGg6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQXJyYXksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBkZWVwUGFydGlhbGlmeShzY2hlbWEpIHtcbiAgICBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjaGVtYS5zaGFwZSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSBzY2hlbWEuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoZmllbGRTY2hlbWEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi5zY2hlbWEuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZEFycmF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICB0eXBlOiBkZWVwUGFydGlhbGlmeShzY2hlbWEuZWxlbWVudCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS51bndyYXAoKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2ROdWxsYWJsZSkge1xuICAgICAgICByZXR1cm4gWm9kTnVsbGFibGUuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS51bndyYXAoKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RUdXBsZSkge1xuICAgICAgICByZXR1cm4gWm9kVHVwbGUuY3JlYXRlKHNjaGVtYS5pdGVtcy5tYXAoKGl0ZW0pID0+IGRlZXBQYXJ0aWFsaWZ5KGl0ZW0pKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RPYmplY3QgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIEluIG1vc3QgY2FzZXMsIHRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIHVua25vd24gcHJvcGVydGllcyBhcmUgbm93IHNpbGVudGx5IHN0cmlwcGVkLlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBwYXNzIHRocm91Z2ggdW5rbm93biBwcm9wZXJ0aWVzLCB1c2UgYC5wYXNzdGhyb3VnaCgpYCBpbnN0ZWFkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ub25zdHJpY3QgPSB0aGlzLnBhc3N0aHJvdWdoO1xuICAgICAgICAvLyBleHRlbmQ8XG4gICAgICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGUsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfb3V0cHV0XCJdXG4gICAgICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgICAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+LFxuICAgICAgICAvLyAgIE5ld0lucHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgICAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9pbnB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgICAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgICAgIC8vICAgfT5cbiAgICAgICAgLy8gPihcbiAgICAgICAgLy8gICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgICAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgQXVnbWVudGF0aW9uPixcbiAgICAgICAgLy8gICBVbmtub3duS2V5cyxcbiAgICAgICAgLy8gICBDYXRjaGFsbCxcbiAgICAgICAgLy8gICBOZXdPdXRwdXQsXG4gICAgICAgIC8vICAgTmV3SW5wdXRcbiAgICAgICAgLy8gPiB7XG4gICAgICAgIC8vICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAvLyAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAvLyAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgIC8vICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAvLyAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICB9KSBhcyBhbnk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIFVzZSBgLmV4dGVuZGAgaW5zdGVhZFxuICAgICAgICAgKiAgKi9cbiAgICAgICAgdGhpcy5hdWdtZW50ID0gdGhpcy5leHRlbmQ7XG4gICAgfVxuICAgIF9nZXRDYWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZWQgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgICAgICBjb25zdCBrZXlzID0gdXRpbC5vYmplY3RLZXlzKHNoYXBlKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkID0geyBzaGFwZSwga2V5cyB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwga2V5czogc2hhcGVLZXlzIH0gPSB0aGlzLl9nZXRDYWNoZWQoKTtcbiAgICAgICAgY29uc3QgZXh0cmFLZXlzID0gW107XG4gICAgICAgIGlmICghKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyICYmIHRoaXMuX2RlZi51bmtub3duS2V5cyA9PT0gXCJzdHJpcFwiKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNoYXBlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXBlS2V5cykge1xuICAgICAgICAgICAgY29uc3Qga2V5VmFsaWRhdG9yID0gc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3R4LmRhdGFba2V5XTtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXlWYWxpZGF0b3IuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyKSB7XG4gICAgICAgICAgICBjb25zdCB1bmtub3duS2V5cyA9IHRoaXMuX2RlZi51bmtub3duS2V5cztcbiAgICAgICAgICAgIGlmICh1bmtub3duS2V5cyA9PT0gXCJwYXNzdGhyb3VnaFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGN0eC5kYXRhW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudW5yZWNvZ25pemVkX2tleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBleHRyYUtleXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpcFwiKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIFpvZE9iamVjdCBlcnJvcjogaW52YWxpZCB1bmtub3duS2V5cyB2YWx1ZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJ1biBjYXRjaGFsbCB2YWxpZGF0aW9uXG4gICAgICAgICAgICBjb25zdCBjYXRjaGFsbCA9IHRoaXMuX2RlZi5jYXRjaGFsbDtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3R4LmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRjaGFsbC5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSAvLywgY3R4LmNoaWxkKGtleSksIHZhbHVlLCBnZXRQYXJzZWRUeXBlKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bmNQYWlycyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDogcGFpci5hbHdheXNTZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1BhaXJzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoc3luY1BhaXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNoYXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgfVxuICAgIHN0cmljdChtZXNzYWdlKSB7XG4gICAgICAgIGVycm9yVXRpbC5lcnJUb09iajtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgICAgICAuLi4obWVzc2FnZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwOiAoaXNzdWUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEVycm9yID0gdGhpcy5fZGVmLmVycm9yTWFwPy4oaXNzdWUsIGN0eCkubWVzc2FnZSA/PyBjdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlLmNvZGUgPT09IFwidW5yZWNvZ25pemVkX2tleXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkubWVzc2FnZSA/PyBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBhc3N0aHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJwYXNzdGhyb3VnaFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gY29uc3QgQXVnbWVudEZhY3RvcnkgPVxuICAgIC8vICAgPERlZiBleHRlbmRzIFpvZE9iamVjdERlZj4oZGVmOiBEZWYpID0+XG4gICAgLy8gICA8QXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGU+KFxuICAgIC8vICAgICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgIC8vICAgKTogWm9kT2JqZWN0PFxuICAgIC8vICAgICBleHRlbmRTaGFwZTxSZXR1cm5UeXBlPERlZltcInNoYXBlXCJdPiwgQXVnbWVudGF0aW9uPixcbiAgICAvLyAgICAgRGVmW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICAgIERlZltcImNhdGNoYWxsXCJdXG4gICAgLy8gICA+ID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICAgIC4uLmRlZixcbiAgICAvLyAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAvLyAgICAgICAgIC4uLmRlZi5zaGFwZSgpLFxuICAgIC8vICAgICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgIC8vICAgICAgIH0pLFxuICAgIC8vICAgICB9KSBhcyBhbnk7XG4gICAgLy8gICB9O1xuICAgIGV4dGVuZChhdWdtZW50YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmlvciB0byB6b2RAMS4wLjEyIHRoZXJlIHdhcyBhIGJ1ZyBpbiB0aGVcbiAgICAgKiBpbmZlcnJlZCB0eXBlIG9mIG1lcmdlZCBvYmplY3RzLiBQbGVhc2VcbiAgICAgKiB1cGdyYWRlIGlmIHlvdSBhcmUgZXhwZXJpZW5jaW5nIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBtZXJnZShtZXJnaW5nKSB7XG4gICAgICAgIGNvbnN0IG1lcmdlZCA9IG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAgICAgICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgICAgICAuLi5tZXJnaW5nLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cbiAgICAvLyBtZXJnZTxcbiAgICAvLyAgIEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0LFxuICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgSW5jb21pbmdbXCJzaGFwZVwiXSxcbiAgICAvLyAgIE5ld091dHB1dCBleHRlbmRzIHtcbiAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgT3V0cHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX291dHB1dFwiXVxuICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgIC8vICAgICAgID8gT3V0cHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBOZXdJbnB1dCBleHRlbmRzIHtcbiAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgSW5wdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfaW5wdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgIC8vICAgICAgID8gSW5wdXRba11cbiAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgIC8vICAgfVxuICAgIC8vID4oXG4gICAgLy8gICBtZXJnaW5nOiBJbmNvbWluZ1xuICAgIC8vICk6IFpvZE9iamVjdDxcbiAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIFJldHVyblR5cGU8SW5jb21pbmdbXCJfZGVmXCJdW1wic2hhcGVcIl0+PixcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1wiY2F0Y2hhbGxcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQsXG4gICAgLy8gICBOZXdJbnB1dFxuICAgIC8vID4ge1xuICAgIC8vICAgY29uc3QgbWVyZ2VkOiBhbnkgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAvLyAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAvLyAgICAgc2hhcGU6ICgpID0+XG4gICAgLy8gICAgICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgIC8vICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAvLyAgIHJldHVybiBtZXJnZWQ7XG4gICAgLy8gfVxuICAgIHNldEtleShrZXksIHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdWdtZW50KHsgW2tleV06IHNjaGVtYSB9KTtcbiAgICB9XG4gICAgLy8gbWVyZ2U8SW5jb21pbmcgZXh0ZW5kcyBBbnlab2RPYmplY3Q+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiAvL1pvZE9iamVjdDxUICYgSW5jb21pbmdbXCJfc2hhcGVcIl0sIFVua25vd25LZXlzLCBDYXRjaGFsbD4gPSAobWVyZ2luZykgPT4ge1xuICAgIC8vIFpvZE9iamVjdDxcbiAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIFJldHVyblR5cGU8SW5jb21pbmdbXCJfZGVmXCJdW1wic2hhcGVcIl0+PixcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1wiY2F0Y2hhbGxcIl1cbiAgICAvLyA+IHtcbiAgICAvLyAgIC8vIGNvbnN0IG1lcmdlZFNoYXBlID0gb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyhcbiAgICAvLyAgIC8vICAgdGhpcy5fZGVmLnNoYXBlKCksXG4gICAgLy8gICAvLyAgIG1lcmdpbmcuX2RlZi5zaGFwZSgpXG4gICAgLy8gICAvLyApO1xuICAgIC8vICAgY29uc3QgbWVyZ2VkOiBhbnkgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAvLyAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAvLyAgICAgc2hhcGU6ICgpID0+XG4gICAgLy8gICAgICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgIC8vICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAvLyAgIHJldHVybiBtZXJnZWQ7XG4gICAgLy8gfVxuICAgIGNhdGNoYWxsKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNhdGNoYWxsOiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpY2sobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXMobWFzaykpIHtcbiAgICAgICAgICAgIGlmIChtYXNrW2tleV0gJiYgdGhpcy5zaGFwZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbWl0KG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKSB7XG4gICAgICAgICAgICBpZiAoIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBkZWVwUGFydGlhbCgpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBQYXJ0aWFsaWZ5KHRoaXMpO1xuICAgIH1cbiAgICBwYXJ0aWFsKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWEub3B0aW9uYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1aXJlZChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3RmllbGQgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWVsZCA9IG5ld0ZpZWxkLl9kZWYuaW5uZXJUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gbmV3RmllbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAga2V5b2YoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVab2RFbnVtKHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSk7XG4gICAgfVxufVxuWm9kT2JqZWN0LmNyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RPYmplY3Quc3RyaWN0Q3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RPYmplY3QubGF6eWNyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2RlZi5vcHRpb25zO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXN1bHRzKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBmaXJzdCBpc3N1ZS1mcmVlIHZhbGlkYXRpb24gaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpc3N1ZXMgZnJvbSBkaXJ0eSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5yZXN1bHQuY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXR1cm4gaW52YWxpZFxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiBuZXcgWm9kRXJyb3IocmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvcHRpb25zLm1hcChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBhd2FpdCBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjdHg6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSkudGhlbihoYW5kbGVSZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IGlzc3VlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiICYmICFkaXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJ0eSA9IHsgcmVzdWx0LCBjdHg6IGNoaWxkQ3R4IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEN0eC5jb21tb24uaXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZXMucHVzaChjaGlsZEN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgICAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKC4uLmRpcnR5LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlydHkucmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSBpc3N1ZXMubWFwKChpc3N1ZXMpID0+IG5ldyBab2RFcnJvcihpc3N1ZXMpKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uLFxuICAgICAgICAgICAgICAgIHVuaW9uRXJyb3JzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbn1cblpvZFVuaW9uLmNyZWF0ZSA9ICh0eXBlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmlvbih7XG4gICAgICAgIG9wdGlvbnM6IHR5cGVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuaW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IGdldERpc2NyaW1pbmF0b3IgPSAodHlwZSkgPT4ge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGF6eSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNjaGVtYSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RFZmZlY3RzKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuaW5uZXJUeXBlKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gW3R5cGUudmFsdWVdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRW51bSkge1xuICAgICAgICByZXR1cm4gdHlwZS5vcHRpb25zO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTmF0aXZlRW51bSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RWYWx1ZXModHlwZS5lbnVtKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZERlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5fZGVmLmlubmVyVHlwZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RVbmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWRdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbCkge1xuICAgICAgICByZXR1cm4gW251bGxdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIC4uLmdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSldO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEJyYW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RSZWFkb25seSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZENhdGNoKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn07XG5leHBvcnQgY2xhc3MgWm9kRGlzY3JpbWluYXRlZFVuaW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3IgPSB0aGlzLmRpc2NyaW1pbmF0b3I7XG4gICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3JWYWx1ZSA9IGN0eC5kYXRhW2Rpc2NyaW1pbmF0b3JdO1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm9wdGlvbnNNYXAuZ2V0KGRpc2NyaW1pbmF0b3JWYWx1ZSk7XG4gICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IEFycmF5LmZyb20odGhpcy5vcHRpb25zTWFwLmtleXMoKSksXG4gICAgICAgICAgICAgICAgcGF0aDogW2Rpc2NyaW1pbmF0b3JdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZGlzY3JpbWluYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kaXNjcmltaW5hdG9yO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbiAgICBnZXQgb3B0aW9uc01hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zTWFwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3Igb2YgdGhlIGRpc2NyaW1pbmF0ZWQgdW5pb24gc2NoZW1hLiBJdHMgYmVoYXZpb3VyIGlzIHZlcnkgc2ltaWxhciB0byB0aGF0IG9mIHRoZSBub3JtYWwgei51bmlvbigpIGNvbnN0cnVjdG9yLlxuICAgICAqIEhvd2V2ZXIsIGl0IG9ubHkgYWxsb3dzIGEgdW5pb24gb2Ygb2JqZWN0cywgYWxsIG9mIHdoaWNoIG5lZWQgdG8gc2hhcmUgYSBkaXNjcmltaW5hdG9yIHByb3BlcnR5LiBUaGlzIHByb3BlcnR5IG11c3RcbiAgICAgKiBoYXZlIGEgZGlmZmVyZW50IHZhbHVlIGZvciBlYWNoIG9iamVjdCBpbiB0aGUgdW5pb24uXG4gICAgICogQHBhcmFtIGRpc2NyaW1pbmF0b3IgdGhlIG5hbWUgb2YgdGhlIGRpc2NyaW1pbmF0b3IgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gdHlwZXMgYW4gYXJyYXkgb2Ygb2JqZWN0IHNjaGVtYXNcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZShkaXNjcmltaW5hdG9yLCBvcHRpb25zLCBwYXJhbXMpIHtcbiAgICAgICAgLy8gR2V0IGFsbCB0aGUgdmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZXNcbiAgICAgICAgY29uc3Qgb3B0aW9uc01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3JWYWx1ZXMgPSBnZXREaXNjcmltaW5hdG9yKHR5cGUuc2hhcGVbZGlzY3JpbWluYXRvcl0pO1xuICAgICAgICAgICAgaWYgKCFkaXNjcmltaW5hdG9yVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBkaXNjcmltaW5hdG9yIHZhbHVlIGZvciBrZXkgXFxgJHtkaXNjcmltaW5hdG9yfVxcYCBjb3VsZCBub3QgYmUgZXh0cmFjdGVkIGZyb20gYWxsIHNjaGVtYSBvcHRpb25zYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRpc2NyaW1pbmF0b3JWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc01hcC5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlzY3JpbWluYXRvciBwcm9wZXJ0eSAke1N0cmluZyhkaXNjcmltaW5hdG9yKX0gaGFzIGR1cGxpY2F0ZSB2YWx1ZSAke1N0cmluZyh2YWx1ZSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnNNYXAuc2V0KHZhbHVlLCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZERpc2NyaW1pbmF0ZWRVbmlvbih7XG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERpc2NyaW1pbmF0ZWRVbmlvbixcbiAgICAgICAgICAgIGRpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9uc01hcCxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWVyZ2VWYWx1ZXMoYSwgYikge1xuICAgIGNvbnN0IGFUeXBlID0gZ2V0UGFyc2VkVHlwZShhKTtcbiAgICBjb25zdCBiVHlwZSA9IGdldFBhcnNlZFR5cGUoYik7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUub2JqZWN0ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICBjb25zdCBiS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhiKTtcbiAgICAgICAgY29uc3Qgc2hhcmVkS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhhKS5maWx0ZXIoKGtleSkgPT4gYktleXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgICAgIGNvbnN0IG5ld09iaiA9IHsgLi4uYSwgLi4uYiB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFyZWRLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld09ialtrZXldID0gc2hhcmVkVmFsdWUuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3T2JqIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbUEgPSBhW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1CID0gYltpbmRleF07XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGl0ZW1BLCBpdGVtQik7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNoYXJlZFZhbHVlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdBcnJheSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiYgK2EgPT09ICtiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kSW50ZXJzZWN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGhhbmRsZVBhcnNlZCA9IChwYXJzZWRMZWZ0LCBwYXJzZWRSaWdodCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQWJvcnRlZChwYXJzZWRMZWZ0KSB8fCBpc0Fib3J0ZWQocGFyc2VkUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZVZhbHVlcyhwYXJzZWRMZWZ0LnZhbHVlLCBwYXJzZWRSaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIW1lcmdlZC52YWxpZCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEaXJ0eShwYXJzZWRMZWZ0KSB8fCBpc0RpcnR5KHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBtZXJnZWQuZGF0YSB9O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWYubGVmdC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLnRoZW4oKFtsZWZ0LCByaWdodF0pID0+IGhhbmRsZVBhcnNlZChsZWZ0LCByaWdodCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVBhcnNlZCh0aGlzLl9kZWYubGVmdC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pLCB0aGlzLl9kZWYucmlnaHQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5ab2RJbnRlcnNlY3Rpb24uY3JlYXRlID0gKGxlZnQsIHJpZ2h0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEludGVyc2VjdGlvbih7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RJbnRlcnNlY3Rpb24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLyB0eXBlIFpvZFR1cGxlSXRlbXMgPSBbWm9kVHlwZUFueSwgLi4uWm9kVHlwZUFueVtdXTtcbmV4cG9ydCBjbGFzcyBab2RUdXBsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN0ID0gdGhpcy5fZGVmLnJlc3Q7XG4gICAgICAgIGlmICghcmVzdCAmJiBjdHguZGF0YS5sZW5ndGggPiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFsuLi5jdHguZGF0YV1cbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5fZGVmLml0ZW1zW2l0ZW1JbmRleF0gfHwgdGhpcy5fZGVmLnJlc3Q7XG4gICAgICAgICAgICBpZiAoIXNjaGVtYSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBzY2hlbWEuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaXRlbUluZGV4KSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKCh4KSA9PiAhIXgpOyAvLyBmaWx0ZXIgbnVsbHNcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChpdGVtcykudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pdGVtcztcbiAgICB9XG4gICAgcmVzdChyZXN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmVzdCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuWm9kVHVwbGUuY3JlYXRlID0gKHNjaGVtYXMsIHBhcmFtcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzY2hlbWFzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IG9mIHNjaGVtYXMgdG8gei50dXBsZShbIC4uLiBdKVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgIGl0ZW1zOiBzY2hlbWFzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFR1cGxlLFxuICAgICAgICByZXN0OiBudWxsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFJlY29yZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGN0eC5kYXRhW2tleV0sIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGZpcnN0LCBzZWNvbmQsIHRoaXJkKSB7XG4gICAgICAgIGlmIChzZWNvbmQgaW5zdGFuY2VvZiBab2RUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICAgICAga2V5VHlwZTogZmlyc3QsXG4gICAgICAgICAgICAgICAgdmFsdWVUeXBlOiBzZWNvbmQsXG4gICAgICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlyZCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICBrZXlUeXBlOiBab2RTdHJpbmcuY3JlYXRlKCksXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHNlY29uZCksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RNYXAgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubWFwKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm1hcCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgY29uc3QgcGFpcnMgPSBbLi4uY3R4LmRhdGEuZW50cmllcygpXS5tYXAoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwgW2luZGV4LCBcImtleVwiXSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIFtpbmRleCwgXCJ2YWx1ZVwiXSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kTWFwLmNyZWF0ZSA9IChrZXlUeXBlLCB2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTWFwKHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBrZXlUeXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE1hcCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RTZXQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnNldCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zZXQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChkZWYubWluU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPCBkZWYubWluU2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluU2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5TaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA+IGRlZi5tYXhTaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4U2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhTaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVTZXQoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRTZXQuYWRkKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBwYXJzZWRTZXQgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFsuLi5jdHguZGF0YS52YWx1ZXMoKV0ubWFwKChpdGVtLCBpKSA9PiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpKTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChlbGVtZW50cykudGhlbigoZWxlbWVudHMpID0+IGZpbmFsaXplU2V0KGVsZW1lbnRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxpemVTZXQoZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1pbihtaW5TaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pblNpemU6IHsgdmFsdWU6IG1pblNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heFNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4U2l6ZTogeyB2YWx1ZTogbWF4U2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaXplKHNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKHNpemUsIG1lc3NhZ2UpLm1heChzaXplLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kU2V0LmNyZWF0ZSA9ICh2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtaW5TaXplOiBudWxsLFxuICAgICAgICBtYXhTaXplOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFNldCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RGdW5jdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlID0gdGhpcy5pbXBsZW1lbnQ7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZUFyZ3NJc3N1ZShhcmdzLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCwgY3R4LnNjaGVtYUVycm9yTWFwLCBnZXRFcnJvck1hcCgpLCBkZWZhdWx0RXJyb3JNYXBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VSZXR1cm5zSXNzdWUocmV0dXJucywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJldHVybnMsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIGN0eC5zY2hlbWFFcnJvck1hcCwgZ2V0RXJyb3JNYXAoKSwgZGVmYXVsdEVycm9yTWFwXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlLFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UeXBlRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCB9O1xuICAgICAgICBjb25zdCBmbiA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAodGhpcy5fZGVmLnJldHVybnMgaW5zdGFuY2VvZiBab2RQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soYXN5bmMgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihbXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IGF3YWl0IG1lLl9kZWYuYXJncy5wYXJzZUFzeW5jKGFyZ3MsIHBhcmFtcykuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZUFyZ3NJc3N1ZShhcmdzLCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFJlZmxlY3QuYXBwbHkoZm4sIHRoaXMsIHBhcnNlZEFyZ3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJldHVybnMgPSBhd2FpdCBtZS5fZGVmLnJldHVybnMuX2RlZi50eXBlXG4gICAgICAgICAgICAgICAgICAgIC5wYXJzZUFzeW5jKHJlc3VsdCwgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdvdWxkIGxvdmUgYSB3YXkgdG8gYXZvaWQgZGlzYWJsaW5nIHRoaXMgcnVsZSwgYnV0IHdlIG5lZWRcbiAgICAgICAgICAgIC8vIGFuIGFsaWFzICh1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB3YXMgd2hhdCBjYXVzZWQgMjY1MSkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBPSyhmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBtZS5fZGVmLmFyZ3Muc2FmZVBhcnNlKGFyZ3MsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRBcmdzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlQXJnc0lzc3VlKGFyZ3MsIHBhcnNlZEFyZ3MuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuYXBwbHkoZm4sIHRoaXMsIHBhcnNlZEFyZ3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IG1lLl9kZWYucmV0dXJucy5zYWZlUGFyc2UocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkUmV0dXJucy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBab2RFcnJvcihbbWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIHBhcnNlZFJldHVybnMuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zLmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJhbWV0ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmFyZ3M7XG4gICAgfVxuICAgIHJldHVyblR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYucmV0dXJucztcbiAgICB9XG4gICAgYXJncyguLi5pdGVtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGFyZ3M6IFpvZFR1cGxlLmNyZWF0ZShpdGVtcykucmVzdChab2RVbmtub3duLmNyZWF0ZSgpKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybnMocmV0dXJuVHlwZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJldHVybnM6IHJldHVyblR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0cmljdEltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShhcmdzLCByZXR1cm5zLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICBhcmdzOiAoYXJncyA/IGFyZ3MgOiBab2RUdXBsZS5jcmVhdGUoW10pLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSkpLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJucyB8fCBab2RVbmtub3duLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbixcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZExhenkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQgc2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGxhenlTY2hlbWEgPSB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgICAgIHJldHVybiBsYXp5U2NoZW1hLl9wYXJzZSh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgfVxufVxuWm9kTGF6eS5jcmVhdGUgPSAoZ2V0dGVyLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZExhenkoe1xuICAgICAgICBnZXR0ZXI6IGdldHRlcixcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMYXp5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZExpdGVyYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LmRhdGEgIT09IHRoaXMuX2RlZi52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWwsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHRoaXMuX2RlZi52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZTtcbiAgICB9XG59XG5ab2RMaXRlcmFsLmNyZWF0ZSA9ICh2YWx1ZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMaXRlcmFsKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExpdGVyYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVab2RFbnVtKHZhbHVlcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RFbnVtKHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVudW0sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBab2RFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQuZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlID0gbmV3IFNldCh0aGlzLl9kZWYudmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlLmhhcyhpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgRW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGV4dHJhY3QodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHZhbHVlcywge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZXhjbHVkZSh2YWx1ZXMsIG5ld0RlZiA9IHRoaXMuX2RlZikge1xuICAgICAgICByZXR1cm4gWm9kRW51bS5jcmVhdGUodGhpcy5vcHRpb25zLmZpbHRlcigob3B0KSA9PiAhdmFsdWVzLmluY2x1ZGVzKG9wdCkpLCB7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICAuLi5uZXdEZWYsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblpvZEVudW0uY3JlYXRlID0gY3JlYXRlWm9kRW51bTtcbmV4cG9ydCBjbGFzcyBab2ROYXRpdmVFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVudW1WYWx1ZXMgPSB1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nICYmIGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZSA9IG5ldyBTZXQodXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUuaGFzKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbn1cblpvZE5hdGl2ZUVudW0uY3JlYXRlID0gKHZhbHVlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYXRpdmVFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmF0aXZlRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RQcm9taXNlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnByb21pc2UgJiYgY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUucHJvbWlzZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2lmaWVkID0gY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUucHJvbWlzZSA/IGN0eC5kYXRhIDogUHJvbWlzZS5yZXNvbHZlKGN0eC5kYXRhKTtcbiAgICAgICAgcmV0dXJuIE9LKHByb21pc2lmaWVkLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5wYXJzZUFzeW5jKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblpvZFByb21pc2UuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RQcm9taXNlKHtcbiAgICAgICAgdHlwZTogc2NoZW1hLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFByb21pc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicHJlcHJvY2Vzc1wiKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBlZmZlY3QudHJhbnNmb3JtKGN0eC5kYXRhLCBjaGVja0N0eCk7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJvY2Vzc2VkKS50aGVuKGFzeW5jIChwcm9jZXNzZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInJlZmluZW1lbnRcIikge1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZVJlZmluZW1lbnQgPSAoYWNjKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnJlZmluZW1lbnQoYWNjLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3luYyByZWZpbmVtZW50IGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHZhbHVlIGlzIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pLnRoZW4oKGlubmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVJlZmluZW1lbnQoaW5uZXIudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3luY2hyb25vdXMgdHJhbnNmb3JtIGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pLnRoZW4oKGJhc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGJhc2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCkpLnRoZW4oKHJlc3VsdCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoZWZmZWN0KTtcbiAgICB9XG59XG5ab2RFZmZlY3RzLmNyZWF0ZSA9IChzY2hlbWEsIGVmZmVjdCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIGVmZmVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3MgPSAocHJlcHJvY2Vzcywgc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInByZXByb2Nlc3NcIiwgdHJhbnNmb3JtOiBwcmVwcm9jZXNzIH0sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCB7IFpvZEVmZmVjdHMgYXMgWm9kVHJhbnNmb3JtZXIgfTtcbmV4cG9ydCBjbGFzcyBab2RPcHRpb25hbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RPcHRpb25hbC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPcHRpb25hbCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPcHRpb25hbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROdWxsYWJsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE51bGxhYmxlLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGxhYmxlKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGxhYmxlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZERlZmF1bHQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGxldCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9kZWYuZGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kRGVmYXVsdC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdHlwZW9mIHBhcmFtcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMuZGVmYXVsdCA6ICgpID0+IHBhcmFtcy5kZWZhdWx0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZENhdGNoIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICAvLyBuZXdDdHggaXMgdXNlZCB0byBub3QgY29sbGVjdCBpc3N1ZXMgZnJvbSBpbm5lciB0eXBlcyBpbiBjdHhcbiAgICAgICAgY29uc3QgbmV3Q3R4ID0ge1xuICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YTogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICBwYXRoOiBuZXdDdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDoge1xuICAgICAgICAgICAgICAgIC4uLm5ld0N0eCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvZEVycm9yKG5ld0N0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvZEVycm9yKG5ld0N0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kQ2F0Y2guY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIGNhdGNoVmFsdWU6IHR5cGVvZiBwYXJhbXMuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcy5jYXRjaCA6ICgpID0+IHBhcmFtcy5jYXRjaCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROYU4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5uYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxufVxuWm9kTmFOLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hTih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmFOLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEJSQU5EID0gU3ltYm9sKFwiem9kX2JyYW5kXCIpO1xuZXhwb3J0IGNsYXNzIFpvZEJyYW5kZWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RQaXBlbGluZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuaW4uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShpblJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gdGhpcy5fZGVmLmluLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkaXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFBpcGVsaW5lKHtcbiAgICAgICAgICAgIGluOiBhLFxuICAgICAgICAgICAgb3V0OiBiLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQaXBlbGluZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZFJlYWRvbmx5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgY29uc3QgZnJlZXplID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IE9iamVjdC5mcmVlemUoZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGlzQXN5bmMocmVzdWx0KSA/IHJlc3VsdC50aGVuKChkYXRhKSA9PiBmcmVlemUoZGF0YSkpIDogZnJlZXplKHJlc3VsdCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kUmVhZG9ubHkuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUmVhZG9ubHkoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVhZG9ubHksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgei5jdXN0b20gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiBjbGVhblBhcmFtcyhwYXJhbXMsIGRhdGEpIHtcbiAgICBjb25zdCBwID0gdHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zKGRhdGEpIDogdHlwZW9mIHBhcmFtcyA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcGFyYW1zIH0gOiBwYXJhbXM7XG4gICAgY29uc3QgcDIgPSB0eXBlb2YgcCA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcCB9IDogcDtcbiAgICByZXR1cm4gcDI7XG59XG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tKGNoZWNrLCBfcGFyYW1zID0ge30sIFxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqIFBhc3MgYGZhdGFsYCBpbnRvIHRoZSBwYXJhbXMgb2JqZWN0IGluc3RlYWQ6XG4gKlxuICogYGBgdHNcbiAqIHouc3RyaW5nKCkuY3VzdG9tKCh2YWwpID0+IHZhbC5sZW5ndGggPiA1LCB7IGZhdGFsOiBmYWxzZSB9KVxuICogYGBgXG4gKlxuICovXG5mYXRhbCkge1xuICAgIGlmIChjaGVjaylcbiAgICAgICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKS5zdXBlclJlZmluZSgoZGF0YSwgY3R4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByID0gY2hlY2soZGF0YSk7XG4gICAgICAgICAgICBpZiAociBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZmF0YWwgPSBwYXJhbXMuZmF0YWwgPz8gZmF0YWwgPz8gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gcGFyYW1zLmZhdGFsID8/IGZhdGFsID8/IHRydWU7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHsgY29kZTogXCJjdXN0b21cIiwgLi4ucGFyYW1zLCBmYXRhbDogX2ZhdGFsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpO1xufVxuZXhwb3J0IHsgWm9kVHlwZSBhcyBTY2hlbWEsIFpvZFR5cGUgYXMgWm9kU2NoZW1hIH07XG5leHBvcnQgY29uc3QgbGF0ZSA9IHtcbiAgICBvYmplY3Q6IFpvZE9iamVjdC5sYXp5Y3JlYXRlLFxufTtcbmV4cG9ydCB2YXIgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kO1xuKGZ1bmN0aW9uIChab2RGaXJzdFBhcnR5VHlwZUtpbmQpIHtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTdHJpbmdcIl0gPSBcIlpvZFN0cmluZ1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bWJlclwiXSA9IFwiWm9kTnVtYmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmFOXCJdID0gXCJab2ROYU5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCaWdJbnRcIl0gPSBcIlpvZEJpZ0ludFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJvb2xlYW5cIl0gPSBcIlpvZEJvb2xlYW5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REYXRlXCJdID0gXCJab2REYXRlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3ltYm9sXCJdID0gXCJab2RTeW1ib2xcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmRlZmluZWRcIl0gPSBcIlpvZFVuZGVmaW5lZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxcIl0gPSBcIlpvZE51bGxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBbnlcIl0gPSBcIlpvZEFueVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVua25vd25cIl0gPSBcIlpvZFVua25vd25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROZXZlclwiXSA9IFwiWm9kTmV2ZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RWb2lkXCJdID0gXCJab2RWb2lkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQXJyYXlcIl0gPSBcIlpvZEFycmF5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT2JqZWN0XCJdID0gXCJab2RPYmplY3RcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmlvblwiXSA9IFwiWm9kVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REaXNjcmltaW5hdGVkVW5pb25cIl0gPSBcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEludGVyc2VjdGlvblwiXSA9IFwiWm9kSW50ZXJzZWN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVHVwbGVcIl0gPSBcIlpvZFR1cGxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVjb3JkXCJdID0gXCJab2RSZWNvcmRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RNYXBcIl0gPSBcIlpvZE1hcFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFNldFwiXSA9IFwiWm9kU2V0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRnVuY3Rpb25cIl0gPSBcIlpvZEZ1bmN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGF6eVwiXSA9IFwiWm9kTGF6eVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExpdGVyYWxcIl0gPSBcIlpvZExpdGVyYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFbnVtXCJdID0gXCJab2RFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRWZmZWN0c1wiXSA9IFwiWm9kRWZmZWN0c1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hdGl2ZUVudW1cIl0gPSBcIlpvZE5hdGl2ZUVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPcHRpb25hbFwiXSA9IFwiWm9kT3B0aW9uYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsYWJsZVwiXSA9IFwiWm9kTnVsbGFibGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REZWZhdWx0XCJdID0gXCJab2REZWZhdWx0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQ2F0Y2hcIl0gPSBcIlpvZENhdGNoXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUHJvbWlzZVwiXSA9IFwiWm9kUHJvbWlzZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJyYW5kZWRcIl0gPSBcIlpvZEJyYW5kZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQaXBlbGluZVwiXSA9IFwiWm9kUGlwZWxpbmVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWFkb25seVwiXSA9IFwiWm9kUmVhZG9ubHlcIjtcbn0pKFpvZEZpcnN0UGFydHlUeXBlS2luZCB8fCAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kID0ge30pKTtcbi8vIHJlcXVpcmVzIFRTIDQuNCtcbmNsYXNzIENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvciguLi5fKSB7IH1cbn1cbmNvbnN0IGluc3RhbmNlT2ZUeXBlID0gKFxuLy8gY29uc3QgaW5zdGFuY2VPZlR5cGUgPSA8VCBleHRlbmRzIG5ldyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG5jbHMsIHBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBgSW5wdXQgbm90IGluc3RhbmNlIG9mICR7Y2xzLm5hbWV9YCxcbn0pID0+IGN1c3RvbSgoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIGNscywgcGFyYW1zKTtcbmNvbnN0IHN0cmluZ1R5cGUgPSBab2RTdHJpbmcuY3JlYXRlO1xuY29uc3QgbnVtYmVyVHlwZSA9IFpvZE51bWJlci5jcmVhdGU7XG5jb25zdCBuYW5UeXBlID0gWm9kTmFOLmNyZWF0ZTtcbmNvbnN0IGJpZ0ludFR5cGUgPSBab2RCaWdJbnQuY3JlYXRlO1xuY29uc3QgYm9vbGVhblR5cGUgPSBab2RCb29sZWFuLmNyZWF0ZTtcbmNvbnN0IGRhdGVUeXBlID0gWm9kRGF0ZS5jcmVhdGU7XG5jb25zdCBzeW1ib2xUeXBlID0gWm9kU3ltYm9sLmNyZWF0ZTtcbmNvbnN0IHVuZGVmaW5lZFR5cGUgPSBab2RVbmRlZmluZWQuY3JlYXRlO1xuY29uc3QgbnVsbFR5cGUgPSBab2ROdWxsLmNyZWF0ZTtcbmNvbnN0IGFueVR5cGUgPSBab2RBbnkuY3JlYXRlO1xuY29uc3QgdW5rbm93blR5cGUgPSBab2RVbmtub3duLmNyZWF0ZTtcbmNvbnN0IG5ldmVyVHlwZSA9IFpvZE5ldmVyLmNyZWF0ZTtcbmNvbnN0IHZvaWRUeXBlID0gWm9kVm9pZC5jcmVhdGU7XG5jb25zdCBhcnJheVR5cGUgPSBab2RBcnJheS5jcmVhdGU7XG5jb25zdCBvYmplY3RUeXBlID0gWm9kT2JqZWN0LmNyZWF0ZTtcbmNvbnN0IHN0cmljdE9iamVjdFR5cGUgPSBab2RPYmplY3Quc3RyaWN0Q3JlYXRlO1xuY29uc3QgdW5pb25UeXBlID0gWm9kVW5pb24uY3JlYXRlO1xuY29uc3QgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSA9IFpvZERpc2NyaW1pbmF0ZWRVbmlvbi5jcmVhdGU7XG5jb25zdCBpbnRlcnNlY3Rpb25UeXBlID0gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZTtcbmNvbnN0IHR1cGxlVHlwZSA9IFpvZFR1cGxlLmNyZWF0ZTtcbmNvbnN0IHJlY29yZFR5cGUgPSBab2RSZWNvcmQuY3JlYXRlO1xuY29uc3QgbWFwVHlwZSA9IFpvZE1hcC5jcmVhdGU7XG5jb25zdCBzZXRUeXBlID0gWm9kU2V0LmNyZWF0ZTtcbmNvbnN0IGZ1bmN0aW9uVHlwZSA9IFpvZEZ1bmN0aW9uLmNyZWF0ZTtcbmNvbnN0IGxhenlUeXBlID0gWm9kTGF6eS5jcmVhdGU7XG5jb25zdCBsaXRlcmFsVHlwZSA9IFpvZExpdGVyYWwuY3JlYXRlO1xuY29uc3QgZW51bVR5cGUgPSBab2RFbnVtLmNyZWF0ZTtcbmNvbnN0IG5hdGl2ZUVudW1UeXBlID0gWm9kTmF0aXZlRW51bS5jcmVhdGU7XG5jb25zdCBwcm9taXNlVHlwZSA9IFpvZFByb21pc2UuY3JlYXRlO1xuY29uc3QgZWZmZWN0c1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZTtcbmNvbnN0IG9wdGlvbmFsVHlwZSA9IFpvZE9wdGlvbmFsLmNyZWF0ZTtcbmNvbnN0IG51bGxhYmxlVHlwZSA9IFpvZE51bGxhYmxlLmNyZWF0ZTtcbmNvbnN0IHByZXByb2Nlc3NUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcztcbmNvbnN0IHBpcGVsaW5lVHlwZSA9IFpvZFBpcGVsaW5lLmNyZWF0ZTtcbmNvbnN0IG9zdHJpbmcgPSAoKSA9PiBzdHJpbmdUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9udW1iZXIgPSAoKSA9PiBudW1iZXJUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9ib29sZWFuID0gKCkgPT4gYm9vbGVhblR5cGUoKS5vcHRpb25hbCgpO1xuZXhwb3J0IGNvbnN0IGNvZXJjZSA9IHtcbiAgICBzdHJpbmc6ICgoYXJnKSA9PiBab2RTdHJpbmcuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIG51bWJlcjogKChhcmcpID0+IFpvZE51bWJlci5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgYm9vbGVhbjogKChhcmcpID0+IFpvZEJvb2xlYW4uY3JlYXRlKHtcbiAgICAgICAgLi4uYXJnLFxuICAgICAgICBjb2VyY2U6IHRydWUsXG4gICAgfSkpLFxuICAgIGJpZ2ludDogKChhcmcpID0+IFpvZEJpZ0ludC5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgZGF0ZTogKChhcmcpID0+IFpvZERhdGUuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxufTtcbmV4cG9ydCB7IGFueVR5cGUgYXMgYW55LCBhcnJheVR5cGUgYXMgYXJyYXksIGJpZ0ludFR5cGUgYXMgYmlnaW50LCBib29sZWFuVHlwZSBhcyBib29sZWFuLCBkYXRlVHlwZSBhcyBkYXRlLCBkaXNjcmltaW5hdGVkVW5pb25UeXBlIGFzIGRpc2NyaW1pbmF0ZWRVbmlvbiwgZWZmZWN0c1R5cGUgYXMgZWZmZWN0LCBlbnVtVHlwZSBhcyBlbnVtLCBmdW5jdGlvblR5cGUgYXMgZnVuY3Rpb24sIGluc3RhbmNlT2ZUeXBlIGFzIGluc3RhbmNlb2YsIGludGVyc2VjdGlvblR5cGUgYXMgaW50ZXJzZWN0aW9uLCBsYXp5VHlwZSBhcyBsYXp5LCBsaXRlcmFsVHlwZSBhcyBsaXRlcmFsLCBtYXBUeXBlIGFzIG1hcCwgbmFuVHlwZSBhcyBuYW4sIG5hdGl2ZUVudW1UeXBlIGFzIG5hdGl2ZUVudW0sIG5ldmVyVHlwZSBhcyBuZXZlciwgbnVsbFR5cGUgYXMgbnVsbCwgbnVsbGFibGVUeXBlIGFzIG51bGxhYmxlLCBudW1iZXJUeXBlIGFzIG51bWJlciwgb2JqZWN0VHlwZSBhcyBvYmplY3QsIG9ib29sZWFuLCBvbnVtYmVyLCBvcHRpb25hbFR5cGUgYXMgb3B0aW9uYWwsIG9zdHJpbmcsIHBpcGVsaW5lVHlwZSBhcyBwaXBlbGluZSwgcHJlcHJvY2Vzc1R5cGUgYXMgcHJlcHJvY2VzcywgcHJvbWlzZVR5cGUgYXMgcHJvbWlzZSwgcmVjb3JkVHlwZSBhcyByZWNvcmQsIHNldFR5cGUgYXMgc2V0LCBzdHJpY3RPYmplY3RUeXBlIGFzIHN0cmljdE9iamVjdCwgc3RyaW5nVHlwZSBhcyBzdHJpbmcsIHN5bWJvbFR5cGUgYXMgc3ltYm9sLCBlZmZlY3RzVHlwZSBhcyB0cmFuc2Zvcm1lciwgdHVwbGVUeXBlIGFzIHR1cGxlLCB1bmRlZmluZWRUeXBlIGFzIHVuZGVmaW5lZCwgdW5pb25UeXBlIGFzIHVuaW9uLCB1bmtub3duVHlwZSBhcyB1bmtub3duLCB2b2lkVHlwZSBhcyB2b2lkLCB9O1xuZXhwb3J0IGNvbnN0IE5FVkVSID0gSU5WQUxJRDtcbiIsIi8qKlxuICogTWVzc2FnaW5nIHByb3RvY29sIGZvciBDYWxtV2ViXG4gKlxuICogRGVmaW5lcyBtZXNzYWdlIHR5cGVzIGFuZCBwYXlsb2FkcyBmb3IgY29tbXVuaWNhdGlvbiBiZXR3ZWVuXG4gKiBjb250ZW50IHNjcmlwdHMsIGJhY2tncm91bmQgd29ya2VyLCBwb3B1cCwgYW5kIG9wdGlvbnMgcGFnZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IENvbnRlbnRVbml0LCBDbGFzc2lmaWNhdGlvblJlc3VsdCwgVXNlclNldHRpbmdzLCBTdGF0cyB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgVHlwZSBDb25zdGFudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gIC8vIENsYXNzaWZpY2F0aW9uXG4gIENMQVNTSUZZX1VOSVQ6ICdjYWxtd2ViOmNsYXNzaWZ5VW5pdCcsXG4gIC8vIFNldHRpbmdzIG1hbmFnZW1lbnRcbiAgR0VUX1NFVFRJTkdTOiAnY2FsbXdlYjpnZXRTZXR0aW5ncycsXG4gIFVQREFURV9TRVRUSU5HUzogJ2NhbG13ZWI6dXBkYXRlU2V0dGluZ3MnLFxuICAvLyBDYWNoZSBtYW5hZ2VtZW50XG4gIENMRUFSX0NBQ0hFOiAnY2FsbXdlYjpjbGVhckNhY2hlJyxcbiAgLy8gU3RhdGlzdGljc1xuICBHRVRfU1RBVFM6ICdjYWxtd2ViOmdldFN0YXRzJyxcbiAgSU5DUkVNRU5UX1NUQVQ6ICdjYWxtd2ViOmluY3JlbWVudFN0YXQnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTWVzc2FnZVR5cGUgPSB0eXBlb2YgTUVTU0FHRV9UWVBFU1trZXlvZiB0eXBlb2YgTUVTU0FHRV9UWVBFU107XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgUGF5bG9hZCBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIENsYXNzaWZ5VW5pdE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUVTU0FHRV9UWVBFUy5DTEFTU0lGWV9VTklUO1xuICB1bml0OiBDb250ZW50VW5pdDtcbn1cblxuZXhwb3J0IHR5cGUgQ2xhc3NpZnlVbml0UmVzcG9uc2UgPSBDbGFzc2lmaWNhdGlvblJlc3VsdCB8IHsgZXJyb3I6IHN0cmluZyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdldFNldHRpbmdzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkdFVF9TRVRUSU5HUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXR0aW5nc01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUVTU0FHRV9UWVBFUy5VUERBVEVfU0VUVElOR1M7XG4gIHNldHRpbmdzOiBQYXJ0aWFsPFVzZXJTZXR0aW5ncz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlU2V0dGluZ3NSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJDYWNoZU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUVTU0FHRV9UWVBFUy5DTEVBUl9DQUNIRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckNhY2hlUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFN0YXRzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkdFVF9TVEFUUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmNyZW1lbnRTdGF0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLklOQ1JFTUVOVF9TVEFUO1xuICBrZXk6ICd0b3RhbEZpbHRlcmVkJztcbiAgYW1vdW50PzogbnVtYmVyO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVbmlvbiBUeXBlIGZvciBBbGwgTWVzc2FnZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgQ2FsbVdlYk1lc3NhZ2UgPSBcbiAgfCBDbGFzc2lmeVVuaXRNZXNzYWdlXG4gIHwgR2V0U2V0dGluZ3NNZXNzYWdlXG4gIHwgVXBkYXRlU2V0dGluZ3NNZXNzYWdlXG4gIHwgQ2xlYXJDYWNoZU1lc3NhZ2VcbiAgfCBHZXRTdGF0c01lc3NhZ2VcbiAgfCBJbmNyZW1lbnRTdGF0TWVzc2FnZTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVzcG9uc2UgVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgR2V0U2V0dGluZ3NSZXNwb25zZSA9IFVzZXJTZXR0aW5ncztcbmV4cG9ydCB0eXBlIEdldFN0YXRzUmVzcG9uc2UgPSBTdGF0cztcbmV4cG9ydCB0eXBlIEluY3JlbWVudFN0YXRSZXNwb25zZSA9IFN0YXRzO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFZhbGlkYXRpb24gKHJ1bnRpbWUpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5jb25zdCBDbGFzc2lmeVVuaXRNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5DTEFTU0lGWV9VTklUKSxcbiAgdW5pdDogei5vYmplY3Qoe1xuICAgIGlkOiB6LnN0cmluZygpLFxuICAgIHNpdGU6IHouc3RyaW5nKCksXG4gICAgZmluZ2VycHJpbnQ6IHouc3RyaW5nKCksXG4gICAgc291cmNlTmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIHRpdGxlOiB6LnN0cmluZygpLFxuICAgIG1ldGFkYXRhOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICAgIGlzTmV3OiB6LmJvb2xlYW4oKSxcbiAgICB1cmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKSxcbiAgfSksXG59KTtcblxuY29uc3QgR2V0U2V0dGluZ3NNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5HRVRfU0VUVElOR1MpLFxufSk7XG5cbmNvbnN0IFVwZGF0ZVNldHRpbmdzTWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5saXRlcmFsKE1FU1NBR0VfVFlQRVMuVVBEQVRFX1NFVFRJTkdTKSxcbiAgc2V0dGluZ3M6IHoub2JqZWN0KHtcbiAgICBlbmFibGVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJ1bGVzOiB6Lm9iamVjdCh7XG4gICAgICBibG9ja2xpc3RDaGFubmVsczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgYmxvY2tsaXN0S2V5d29yZHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICAgIGFsbG93bGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBhbGxvd2xpc3RLZXl3b3Jkczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgcHJlc2V0czogei5vYmplY3Qoe1xuICAgICAgICBwb2xpdGljczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgICAgcmFnZWJhaXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICAgIHNwb2lsZXJzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICBjbGlja2JhaXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICB9KS5vcHRpb25hbCgpLFxuICAgIH0pLm9wdGlvbmFsKCksXG4gIH0pLFxufSk7XG5cbmNvbnN0IENsZWFyQ2FjaGVNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5DTEVBUl9DQUNIRSksXG59KTtcblxuY29uc3QgR2V0U3RhdHNNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5HRVRfU1RBVFMpLFxufSk7XG5cbmNvbnN0IEluY3JlbWVudFN0YXRNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5JTkNSRU1FTlRfU1RBVCksXG4gIGtleTogei5saXRlcmFsKCd0b3RhbEZpbHRlcmVkJyksXG4gIGFtb3VudDogei5udW1iZXIoKS5vcHRpb25hbCgpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlU2NoZW1hID0gei5kaXNjcmltaW5hdGVkVW5pb24oJ3R5cGUnLCBbXG4gIENsYXNzaWZ5VW5pdE1lc3NhZ2VTY2hlbWEsXG4gIEdldFNldHRpbmdzTWVzc2FnZVNjaGVtYSxcbiAgVXBkYXRlU2V0dGluZ3NNZXNzYWdlU2NoZW1hLFxuICBDbGVhckNhY2hlTWVzc2FnZVNjaGVtYSxcbiAgR2V0U3RhdHNNZXNzYWdlU2NoZW1hLFxuICBJbmNyZW1lbnRTdGF0TWVzc2FnZVNjaGVtYSxcbl0pO1xuXG4vKipcbiAqIFZhbGlkYXRlIGEgbWVzc2FnZSBwYXlsb2FkIGFnYWluc3QgdGhlIHNjaGVtYS5cbiAqIFRocm93cyBpZiBpbnZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKG1lc3NhZ2U6IHVua25vd24pOiBDYWxtV2ViTWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlIGFzIENhbG1XZWJNZXNzYWdlO1xufVxuIiwiLyoqXG4gKiBTaXRlIENhdGVnb3JpZXMgYW5kIEJsb2NrbGlzdHNcbiAqXG4gKiBQcmUtYnVpbHQgbGlzdHMgZm9yIGNvbW1vbiBmaWx0ZXJpbmcgbmVlZHMuXG4gKiBVc2VycyBjYW4gZW5hYmxlL2Rpc2FibGUgY2F0ZWdvcmllcyBvciBhZGQgY3VzdG9tIHJ1bGVzLlxuICovXG5cbmV4cG9ydCB0eXBlIFNpdGVDYXRlZ29yeSA9IFxuICB8ICdzb2NpYWxfbWVkaWEnXG4gIHwgJ2NvbnRlbnRfZmFybXMnXG4gIHwgJ2dhbWJsaW5nJ1xuICB8ICdhZHVsdCdcbiAgfCAncGlyYWN5J1xuICB8ICdtYWx3YXJlJ1xuICB8ICdzcGFtJ1xuICB8ICdmYWtlX25ld3MnXG4gIHwgJ3Byb2R1Y3Rpdml0eSdcbiAgfCAnc2hvcHBpbmcnXG4gIHwgJ2dhbWluZydcbiAgfCAnc3RyZWFtaW5nJ1xuICB8ICduZXdzJ1xuICB8ICdjdXN0b20nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5SW5mbyB7XG4gIGlkOiBTaXRlQ2F0ZWdvcnk7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBkb21haW5zOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFNJVEVfQ0FURUdPUklFUzogQ2F0ZWdvcnlJbmZvW10gPSBbXG4gIHtcbiAgICBpZDogJ2NvbnRlbnRfZmFybXMnLFxuICAgIG5hbWU6ICdDb250ZW50IEZhcm1zJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FsZ29yaXRobWljIGZlZWRzLCBhZHMgbWl4ZWQgd2l0aCBjb250ZW50LCBlbmdhZ2VtZW50IHRyYXBzLCBzdHJlYW1pbmcgYWRzJyxcbiAgICBpY29uOiAn8J+aqycsXG4gICAgZG9tYWluczogW1xuICAgICAgLy8gU2VhcmNoIGVuZ2luZXMgKGJpYXNlZCwgc2hvdyB3aGF0IGJlbmVmaXRzIHRoZW0pXG4gICAgICAnZ29vZ2xlLmNvbScsICd3d3cuZ29vZ2xlLmNvbScsICduZXdzLmdvb2dsZS5jb20nLCAnbWFwcy5nb29nbGUuY29tJyxcbiAgICAgICdiaW5nLmNvbScsICd3d3cuYmluZy5jb20nLFxuICAgICAgJ3lhaG9vLmNvbScsICdzZWFyY2gueWFob28uY29tJyxcbiAgICAgICdiYWlkdS5jb20nLCAnc29nb3UuY29tJywgJ3lhbmRleC5jb20nLFxuICAgICAgLy8gVmlkZW8gcGxhdGZvcm1zIHdpdGggYWxnb3JpdGhtaWMgcmVjb21tZW5kYXRpb25zXG4gICAgICAneW91dHViZS5jb20nLCAneW91dHUuYmUnLFxuICAgICAgLy8gU3RyZWFtaW5nIHdpdGggQkFLRUQtSU4gYWRzIChjYW4ndCBza2lwLCBleHRyYSBtYW5pcHVsYXRpdmUpXG4gICAgICAndHdpdGNoLnR2JywgJ29wZW4uc3BvdGlmeS5jb20nLCAnc3BvdGlmeS5jb20nLFxuICAgICAgJ3NvdW5kY2xvdWQuY29tJyxcbiAgICAgIC8vIFNvY2lhbCBuZXdzL2ZlZWRzIHdpdGggYWRzXG4gICAgICAncmVkZGl0LmNvbScsICdvbGQucmVkZGl0LmNvbScsICduZXcucmVkZGl0LmNvbScsXG4gICAgICAvLyBOZXdzIHNpdGVzIHdpdGggZW5nYWdlbWVudCBtZXRyaWNzXG4gICAgICAnYmJjLmNvbScsICdiYmMuY28udWsnLCAnbmV3cy5iYmMuY28udWsnLFxuICAgICAgJ2Nubi5jb20nLCAnZWRpdGlvbi5jbm4uY29tJyxcbiAgICAgICdmb3huZXdzLmNvbScsXG4gICAgICAnZGFpbHltYWlsLmNvLnVrJywgJ21haWxvbmxpbmUuY28udWsnLFxuICAgICAgJ3RoZXN1bi5jby51aycsICdtZXRyby5jby51aycsXG4gICAgICAnZXhwcmVzcy5jby51aycsXG4gICAgICAnd2FzaGluZ3RvbnBvc3QuY29tJywgJ255dGltZXMuY29tJywgJ3dzai5jb20nLFxuICAgICAgJ3RoZWd1YXJkaWFuLmNvbScsXG4gICAgICAvLyBTb2NpYWwgcGxhdGZvcm1zXG4gICAgICAnZmFjZWJvb2suY29tJywgJ2luc3RhZ3JhbS5jb20nLCAndHdpdHRlci5jb20nLCAneC5jb20nLFxuICAgICAgJ3Rpa3Rvay5jb20nLCAnc25hcGNoYXQuY29tJyxcbiAgICAgICd0aHJlYWRzLm5ldCcsICdic2t5LmFwcCcsXG4gICAgICAvLyBBcHAgc3RvcmVzIChjdXJhdGVkLCBwbGF0Zm9ybS1jb250cm9sbGVkKVxuICAgICAgJ3BsYXkuZ29vZ2xlLmNvbScsICdhcHBzLmFwcGxlLmNvbScsICdhcHBzLmFwcGxlLmNvbScsXG4gICAgICAvLyBDbGlja2JhaXQgc2l0ZXNcbiAgICAgICdidXp6ZmVlZC5jb20nLCAndXB3b3J0aHkuY29tJywgJ3ZpcmFsbm92YS5jb20nLCAnZGlwbHkuY29tJyxcbiAgICAgICdjbGlja2hvbGUuY29tJyxcbiAgICAgIC8vIEVuZ2FnZW1lbnQgYmFpdFxuICAgICAgJ3F1b3JhLmNvbScsICdtZWRpdW0uY29tJywgJ3N1YnN0YWNrLmNvbScsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc29jaWFsX21lZGlhJyxcbiAgICBuYW1lOiAnU29jaWFsIE1lZGlhJyxcbiAgICBkZXNjcmlwdGlvbjogJ0ZhY2Vib29rLCBUd2l0dGVyLCBJbnN0YWdyYW0sIFRpa1RvaywgZXRjLicsXG4gICAgaWNvbjogJ/CfkaUnLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgICdmYWNlYm9vay5jb20nLCAnaW5zdGFncmFtLmNvbScsICd0d2l0dGVyLmNvbScsICd4LmNvbScsXG4gICAgICAndGlrdG9rLmNvbScsICdzbmFwY2hhdC5jb20nLCAncGludGVyZXN0LmNvbScsICdyZWRkaXQuY29tJyxcbiAgICAgICdsaW5rZWRpbi5jb20nLCAndHVtYmxyLmNvbScsICdtYXN0b2Rvbi5zb2NpYWwnLCAndGhyZWFkcy5uZXQnLFxuICAgICAgJ2Jza3kuYXBwJywgJ2Rpc2NvcmQuY29tJywgJ2Rpc2NvcmQuZ2cnLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2dhbWJsaW5nJyxcbiAgICBuYW1lOiAnR2FtYmxpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnT25saW5lIGNhc2lub3MsIGJldHRpbmcsIGxvdHRlcnkgc2l0ZXMnLFxuICAgIGljb246ICfwn46wJyxcbiAgICBkb21haW5zOiBbXG4gICAgICAncG9rZXJzdGFycy5jb20nLCAnODg4LmNvbScsICdiZXQzNjUuY29tJywgJ2JldHdheS5jb20nLFxuICAgICAgJ3VuaWJldC5jb20nLCAnY2FzaW5vLmNvbScsICdzbG90b21hbmlhLmNvbScsICd6eW5nYS5jb20nLFxuICAgICAgJ2RyYWZ0a2luZ3MuY29tJywgJ2ZhbmR1ZWwuY29tJywgJ2JldG1nbS5jb20nLCAnY2Flc2Fycy5jb20nLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FkdWx0JyxcbiAgICBuYW1lOiAnQWR1bHQgQ29udGVudCcsXG4gICAgZGVzY3JpcHRpb246ICdQb3Jub2dyYXBoeSBhbmQgYWR1bHQgbWF0ZXJpYWwnLFxuICAgIGljb246ICfwn5SeJyxcbiAgICBkb21haW5zOiBbXG4gICAgICAncG9ybmh1Yi5jb20nLCAneHZpZGVvcy5jb20nLCAneG54eC5jb20nLCAneGhhbXN0ZXIuY29tJyxcbiAgICAgICdyZWR0dWJlLmNvbScsICd5b3Vwb3JuLmNvbScsICdvbmx5ZmFucy5jb20nLCAnY2hhdHVyYmF0ZS5jb20nLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3BpcmFjeScsXG4gICAgbmFtZTogJ1BpcmFjeScsXG4gICAgZGVzY3JpcHRpb246ICdUb3JyZW50LCBzdHJlYW1pbmcsIGRvd25sb2FkIHNpdGVzJyxcbiAgICBpY29uOiAn8J+PtOKAjeKYoO+4jycsXG4gICAgZG9tYWluczogW1xuICAgICAgJ3RoZXBpcmF0ZWJheS5vcmcnLCAnMTMzN3gudG8nLCAncmFyYmcudG8nLCAneXRzLm14JyxcbiAgICAgICdmbW92aWVzLnRvJywgJzEyM21vdmllcy5jb20nLCAncHV0bG9ja2VyLnRvJywgJ3NvYXAyZGF5LnRvJyxcbiAgICAgICdraXNzY2FydG9vbi5saScsICdnb2dvYW5pbWUuaW8nLCAnOWFuaW1lLnRvJyxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6ICdtYWx3YXJlJyxcbiAgICBuYW1lOiAnTWFsd2FyZScsXG4gICAgZGVzY3JpcHRpb246ICdLbm93biBtYWxpY2lvdXMgYW5kIHBoaXNoaW5nIHNpdGVzJyxcbiAgICBpY29uOiAn8J+moCcsXG4gICAgZG9tYWluczogW1xuICAgICAgLy8gVGhlc2UgYXJlIGV4YW1wbGVzIC0gcmVhbCBtYWx3YXJlIGxpc3RzIGFyZSBtYWludGFpbmVkIGJ5IHNlY3VyaXR5IHZlbmRvcnNcbiAgICAgIC8vIFdlJ2QgaW50ZWdyYXRlIHdpdGggVVJMcyBsaWtlOiBodHRwczovL21hbHdhcmUtZmlsdGVyLmdpdGxhYi5pby9tYWx3YXJlLWZpbHRlci9cbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6ICdzcGFtJyxcbiAgICBuYW1lOiAnU3BhbSAmIENsaWNrYmFpdCcsXG4gICAgZGVzY3JpcHRpb246ICdMb3ctcXVhbGl0eSwgc3BhbW15IGNvbnRlbnQgZmFybXMnLFxuICAgIGljb246ICfwn5OnJyxcbiAgICBkb21haW5zOiBbXG4gICAgICAnYnV6emZlZWQuY29tJywgJ2RhaWx5bWFpbC5jby51aycsICd0aGVzdW4uY28udWsnLCAnbWV0cm8uY28udWsnLFxuICAgICAgJ2V4cHJlc3MuY28udWsnLCAnd2FzaGluZ3RvbmV4YW1pbmVyLmNvbScsICdicmVpdGJhcnQuY29tJyxcbiAgICAgICduYXR1cmFsbmV3cy5jb20nLCAnaW5mb3dhcnMuY29tJywgJ2JlZm9yZWl0c25ld3MuY29tJyxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6ICdmYWtlX25ld3MnLFxuICAgIG5hbWU6ICdGYWtlIE5ld3MnLFxuICAgIGRlc2NyaXB0aW9uOiAnS25vd24gZGlzaW5mb3JtYXRpb24gc291cmNlcycsXG4gICAgaWNvbjogJ/Cfk7AnLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgICduYXR1cmFsbmV3cy5jb20nLCAnaW5mb3dhcnMuY29tJywgJ2JlZm9yZWl0c25ld3MuY29tJyxcbiAgICAgICd3b3JsZHRydXRoLnR2JywgJ3lvdXJuZXdzd2lyZS5jb20nLCAncHJudGx5LmNvbScsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAncHJvZHVjdGl2aXR5JyxcbiAgICBuYW1lOiAnUHJvZHVjdGl2aXR5IEJsb2NrZXJzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rpc3RyYWN0aW9ucyBkdXJpbmcgd29yayBob3VycycsXG4gICAgaWNvbjogJ+KPsCcsXG4gICAgZG9tYWluczogW1xuICAgICAgJ3lvdXR1YmUuY29tJywgJ25ldGZsaXguY29tJywgJ3R3aXRjaC50dicsICdodWx1LmNvbScsXG4gICAgICAnZGlzbmV5cGx1cy5jb20nLCAnaGJvLmNvbScsICdwcmltZXZpZGVvLmNvbScsICdjcnVuY2h5cm9sbC5jb20nLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Nob3BwaW5nJyxcbiAgICBuYW1lOiAnU2hvcHBpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnRS1jb21tZXJjZSBzaXRlcycsXG4gICAgaWNvbjogJ/Cfm5InLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgICdhbWF6b24uY29tJywgJ2ViYXkuY29tJywgJ2FsaWV4cHJlc3MuY29tJywgJ3dpc2guY29tJyxcbiAgICAgICdldHN5LmNvbScsICd3YWxtYXJ0LmNvbScsICd0YXJnZXQuY29tJywgJ2Jlc3RidXkuY29tJyxcbiAgICAgICdldHN5LmNvbScsICdtZXJjYXJpLmNvbScsICdwb3NobWFyay5jb20nLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2dhbWluZycsXG4gICAgbmFtZTogJ0dhbWluZycsXG4gICAgZGVzY3JpcHRpb246ICdHYW1pbmcgc2l0ZXMgYW5kIHBsYXRmb3JtcycsXG4gICAgaWNvbjogJ/Cfjq4nLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgICdzdGVhbS5jb20nLCAnZXBpY2dhbWVzLmNvbScsICdnb2cuY29tJywgJ29yaWdpbi5jb20nLFxuICAgICAgJ2JhdHRsZW5ldC5jb20nLCAncm9ibG94LmNvbScsICdtaW5lY3JhZnQubmV0JywgJ3Jpb3RnYW1lcy5jb20nLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3N0cmVhbWluZycsXG4gICAgbmFtZTogJ1N0cmVhbWluZycsXG4gICAgZGVzY3JpcHRpb246ICdWaWRlbyBhbmQgbXVzaWMgc3RyZWFtaW5nJyxcbiAgICBpY29uOiAn8J+TuicsXG4gICAgZG9tYWluczogW1xuICAgICAgJ25ldGZsaXguY29tJywgJ3lvdXR1YmUuY29tJywgJ3R3aXRjaC50dicsICdzcG90aWZ5LmNvbScsXG4gICAgICAnc291bmRjbG91ZC5jb20nLCAndmltZW8uY29tJywgJ2RhaWx5bW90aW9uLmNvbScsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAnbmV3cycsXG4gICAgbmFtZTogJ05ld3MgU2l0ZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnR2VuZXJhbCBuZXdzIG91dGxldHMnLFxuICAgIGljb246ICfwn5OwJyxcbiAgICBkb21haW5zOiBbXG4gICAgICAnY25uLmNvbScsICdmb3huZXdzLmNvbScsICdtc25iYy5jb20nLCAnYmJjLmNvbScsICdueXRpbWVzLmNvbScsXG4gICAgICAnd2FzaGluZ3RvbnBvc3QuY29tJywgJ3RoZWd1YXJkaWFuLmNvbScsICd3c2ouY29tJywgJ3JldXRlcnMuY29tJyxcbiAgICAgICdhcG5ld3MuY29tJywgJ25wci5vcmcnLCAnYmxvb21iZXJnLmNvbScsICdmb3JiZXMuY29tJyxcbiAgICBdLFxuICB9LFxuXTtcblxuLy8gUXVpY2sgbG9va3VwIG1hcFxuZXhwb3J0IGNvbnN0IERPTUFJTl9UT19DQVRFR09SWTogTWFwPHN0cmluZywgU2l0ZUNhdGVnb3J5PiA9IG5ldyBNYXAoXG4gIFNJVEVfQ0FURUdPUklFUy5mbGF0TWFwKGNhdCA9PiBcbiAgICBjYXQuZG9tYWlucy5tYXAoZG9tYWluID0+IFtkb21haW4sIGNhdC5pZF0gYXMgW3N0cmluZywgU2l0ZUNhdGVnb3J5XSlcbiAgKVxuKTtcblxuLy8gR2V0IGNhdGVnb3J5IGZvciBhIGRvbWFpbiAoc3VwcG9ydHMgc3ViZG9tYWlucylcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXRlZ29yeUZvckRvbWFpbihkb21haW46IHN0cmluZyk6IFNpdGVDYXRlZ29yeSB8IG51bGwge1xuICAvLyBFeGFjdCBtYXRjaFxuICBpZiAoRE9NQUlOX1RPX0NBVEVHT1JZLmhhcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIERPTUFJTl9UT19DQVRFR09SWS5nZXQoZG9tYWluKSB8fCBudWxsO1xuICB9XG4gIFxuICAvLyBTdWJkb21haW4gbWF0Y2ggKGUuZy4sIHd3dy5mYWNlYm9vay5jb20gLT4gZmFjZWJvb2suY29tKVxuICBjb25zdCBwYXJ0cyA9IGRvbWFpbi5zcGxpdCgnLicpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGFyZW50RG9tYWluID0gcGFydHMuc2xpY2UoaSkuam9pbignLicpO1xuICAgIGlmIChET01BSU5fVE9fQ0FURUdPUlkuaGFzKHBhcmVudERvbWFpbikpIHtcbiAgICAgIHJldHVybiBET01BSU5fVE9fQ0FURUdPUlkuZ2V0KHBhcmVudERvbWFpbikgfHwgbnVsbDtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBDaGVjayBpZiBkb21haW4gbWF0Y2hlcyBhbnkgY2F0ZWdvcnkgaW4gYSBsaXN0XG5leHBvcnQgZnVuY3Rpb24gaXNEb21haW5JbkNhdGVnb3JpZXMoZG9tYWluOiBzdHJpbmcsIGNhdGVnb3JpZXM6IFNpdGVDYXRlZ29yeVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gZ2V0Q2F0ZWdvcnlGb3JEb21haW4oZG9tYWluKTtcbiAgcmV0dXJuIGNhdGVnb3J5ICE9PSBudWxsICYmIGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpO1xufVxuIiwiLyoqXG4gKiBFeHRlcm5hbCBCbG9ja2xpc3QgRmV0Y2hlclxuICpcbiAqIEZldGNoZXMgYW5kIGNhY2hlcyBkb21haW4gYmxvY2tsaXN0cyBmcm9tIHBvcHVsYXIgc291cmNlcy5cbiAqIFRoZXNlIGxpc3RzIGNvbnRhaW4gdGhvdXNhbmRzIG9mIGRvbWFpbnMgbWFpbnRhaW5lZCBieSB0aGUgY29tbXVuaXR5LlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tsaXN0U291cmNlIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgZm9ybWF0OiAnaG9zdHMnIHwgJ3BsYWluJyB8ICdqc29uJztcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgbGFzdFVwZGF0ZWQ/OiBudW1iZXI7XG4gIGRvbWFpbkNvdW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgQkxPQ0tMSVNUX1NPVVJDRVM6IEJsb2NrbGlzdFNvdXJjZVtdID0gW1xuICAvLyBDYWxtV2ViIENvbnRlbnQgRmFybXMgLSBjdXJhdGVkIGJsb2NrbGlzdFxuICB7XG4gICAgaWQ6ICdjYWxtd2ViLWNvbnRlbnQtZmFybXMnLFxuICAgIG5hbWU6ICdDYWxtV2ViIENvbnRlbnQgRmFybXMnLFxuICAgIGNhdGVnb3J5OiAnY29udGVudF9mYXJtcycsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fub21hbHljby9jYWxtd2ViL21haW4vYmxvY2tsaXN0cy9jb250ZW50LWZhcm1zLmpzb24nLFxuICAgIGZvcm1hdDogJ2pzb24nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIC8vIENhbG1XZWIgVXNlci1GYXZvcmluZyAtIHNpdGVzIHRoYXQgYXJlIHVzZXItc2VydmluZywgbmV2ZXIgYmxvY2sgdGhlc2VcbiAge1xuICAgIGlkOiAnY2FsbXdlYi11c2VyLWZhdm9yaW5nJyxcbiAgICBuYW1lOiAnQ2FsbVdlYiBVc2VyLUZhdm9yaW5nIFNpdGVzJyxcbiAgICBjYXRlZ29yeTogJ3VzZXJfZmF2b3JpbmcnLFxuICAgIHVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hbm9tYWx5Y28vY2FsbXdlYi9tYWluL2Jsb2NrbGlzdHMvdXNlci1mYXZvcmluZy5qc29uJyxcbiAgICBmb3JtYXQ6ICdqc29uJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9LFxuICAvLyBTdGV2ZW4gQmxhY2sncyB1bmlmaWVkIGhvc3RzIC0gbWFsd2FyZSwgYWRzLCB0cmFja2luZ1xuICB7XG4gICAgaWQ6ICdzdGV2ZW5ibGFjay11bmlmaWVkJyxcbiAgICBuYW1lOiAnU3RldmVuIEJsYWNrIFVuaWZpZWQnLFxuICAgIGNhdGVnb3J5OiAnbWFsd2FyZScsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1N0ZXZlbkJsYWNrL2hvc3RzL21hc3Rlci9ob3N0cycsXG4gICAgZm9ybWF0OiAnaG9zdHMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3N0ZXZlbmJsYWNrLWZha2VuZXdzJyxcbiAgICBuYW1lOiAnRmFrZSBOZXdzIEJsb2NrbGlzdCcsXG4gICAgY2F0ZWdvcnk6ICdmYWtlX25ld3MnLFxuICAgIHVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9TdGV2ZW5CbGFjay9ob3N0cy9tYXN0ZXIvYWx0ZXJuYXRlcy9mYWtlbmV3cy9ob3N0cycsXG4gICAgZm9ybWF0OiAnaG9zdHMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3N0ZXZlbmJsYWNrLWdhbWJsaW5nJyxcbiAgICBuYW1lOiAnR2FtYmxpbmcgQmxvY2tsaXN0JyxcbiAgICBjYXRlZ29yeTogJ2dhbWJsaW5nJyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vU3RldmVuQmxhY2svaG9zdHMvbWFzdGVyL2FsdGVybmF0ZXMvZ2FtYmxpbmcvaG9zdHMnLFxuICAgIGZvcm1hdDogJ2hvc3RzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdzdGV2ZW5ibGFjay1zb2NpYWwnLFxuICAgIG5hbWU6ICdTb2NpYWwgTWVkaWEgQmxvY2tsaXN0JyxcbiAgICBjYXRlZ29yeTogJ3NvY2lhbF9tZWRpYScsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1N0ZXZlbkJsYWNrL2hvc3RzL21hc3Rlci9hbHRlcm5hdGVzL3NvY2lhbC9ob3N0cycsXG4gICAgZm9ybWF0OiAnaG9zdHMnLFxuICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBPZmYgYnkgZGVmYXVsdFxuICB9LFxuICB7XG4gICAgaWQ6ICdzdGV2ZW5ibGFjay1hZHVsdCcsXG4gICAgbmFtZTogJ0FkdWx0IENvbnRlbnQgQmxvY2tsaXN0JyxcbiAgICBjYXRlZ29yeTogJ2FkdWx0JyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vU3RldmVuQmxhY2svaG9zdHMvbWFzdGVyL2FsdGVybmF0ZXMvcG9ybi9ob3N0cycsXG4gICAgZm9ybWF0OiAnaG9zdHMnLFxuICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBPZmYgYnkgZGVmYXVsdFxuICB9LFxuICAvLyBBZGRpdGlvbmFsIHNvdXJjZXNcbiAge1xuICAgIGlkOiAnb2lzZC1mdWxsJyxcbiAgICBuYW1lOiAnT0lTRCBCbG9ja2xpc3QnLFxuICAgIGNhdGVnb3J5OiAnbWFsd2FyZScsXG4gICAgdXJsOiAnaHR0cHM6Ly9iaWcub2lzZC5ubC8nLFxuICAgIGZvcm1hdDogJ2hvc3RzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdibG9ja2xpc3Qtc2l0ZS1zcGFtJyxcbiAgICBuYW1lOiAnU3BhbSBCbG9ja2xpc3QnLFxuICAgIGNhdGVnb3J5OiAnc3BhbScsXG4gICAgdXJsOiAnaHR0cHM6Ly9ibG9ja2xpc3Quc2l0ZS9hcHAvZGwvc3BhbScsXG4gICAgZm9ybWF0OiAncGxhaW4nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG5dO1xuXG5pbnRlcmZhY2UgQ2FjaGVkQmxvY2tsaXN0IHtcbiAgc291cmNlSWQ6IHN0cmluZztcbiAgZG9tYWluczogc3RyaW5nW107XG4gIGxhc3RVcGRhdGVkOiBudW1iZXI7XG4gIGRvbWFpbkNvdW50OiBudW1iZXI7XG59XG5cbmNvbnN0IENBQ0hFX0tFWSA9ICdjYWxtd2ViLWJsb2NrbGlzdC1jYWNoZSc7XG5jb25zdCBDQUNIRV9EVVJBVElPTiA9IDI0ICogNjAgKiA2MCAqIDEwMDA7IC8vIDI0IGhvdXJzXG5cbi8vIE1vZHVsZS1sZXZlbCBjYWNoZSBmb3Igc3luYyBhY2Nlc3NcbmxldCBjYWNoZWRCbG9ja2xpc3Q6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xubGV0IGNhY2hlZFVzZXJGYXZvcmluZzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5sZXQgY2FjaGVJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4vLyBEZWZhdWx0IGJsb2NrbGlzdHMgZW1iZWRkZWQgZm9yIGltbWVkaWF0ZSB1c2UgKGZhbGxiYWNrKVxuY29uc3QgREVGQVVMVF9CTE9DS0xJU1RTID0ge1xuICAnY2FsbXdlYi1jb250ZW50LWZhcm1zJzogW1xuICAgICdyZWRkaXQuY29tJywgJ3d3dy5yZWRkaXQuY29tJywgJ29sZC5yZWRkaXQuY29tJywgJ25ldy5yZWRkaXQuY29tJyxcbiAgICAnZmFjZWJvb2suY29tJywgJ3d3dy5mYWNlYm9vay5jb20nLCAnaW5zdGFncmFtLmNvbScsICd3d3cuaW5zdGFncmFtLmNvbScsXG4gICAgJ3R3aXR0ZXIuY29tJywgJ3guY29tJywgJ3d3dy54LmNvbScsXG4gICAgJ3Rpa3Rvay5jb20nLCAnd3d3LnRpa3Rvay5jb20nLCAnc25hcGNoYXQuY29tJywgJ3d3dy5zbmFwY2hhdC5jb20nLFxuICAgICd5b3V0dWJlLmNvbScsICd5b3V0dS5iZScsICd3d3cueW91dHViZS5jb20nLFxuICAgICd2aW1lby5jb20nLCAnd3d3LnZpbWVvLmNvbScsICdkYWlseW1vdGlvbi5jb20nLCAnd3d3LmRhaWx5bW90aW9uLmNvbScsXG4gICAgJ3R3aXRjaC50dicsICd3d3cudHdpdGNoLnR2JywgJ2V4dC10d2l0Y2gudHYnLFxuICAgICdzcG90aWZ5LmNvbScsICdvcGVuLnNwb3RpZnkuY29tJywgJ3d3dy5zcG90aWZ5LmNvbScsXG4gICAgJ2J5c3BvdGlmeS5jb20nLCAndG9zcG90aWZ5LmNvbScsXG4gICAgJ3NvdW5kY2xvdWQuY29tJywgJ3d3dy5zb3VuZGNsb3VkLmNvbScsXG4gICAgJ25ldGZsaXguY29tJywgJ3d3dy5uZXRmbGl4LmNvbScsICduZXRmbGl4Lm5ldCcsXG4gICAgJ2h1bHUuY29tJywgJ3d3dy5odWx1LmNvbScsXG4gICAgJ2Rpc25leXBsdXMuY29tJywgJ3d3dy5kaXNuZXlwbHVzLmNvbScsXG4gICAgJ2hib21heC5jb20nLCAnd3d3Lmhib21heC5jb20nLFxuICAgICdwcmltZXZpZGVvLmNvbScsICd3d3cucHJpbWV2aWRlby5jb20nLFxuICAgICdjbm4uY29tJywgJ3d3dy5jbm4uY29tJywgJ2VkaXRpb24uY25uLmNvbScsXG4gICAgJ2JiYy5jb20nLCAnYmJjLmNvLnVrJywgJ3d3dy5iYmMuY29tJyxcbiAgICAnbnl0aW1lcy5jb20nLCAnd3d3Lm55dGltZXMuY29tJyxcbiAgICAnd2FzaGluZ3RvbnBvc3QuY29tJywgJ3d3dy53YXNoaW5ndG9ucG9zdC5jb20nLFxuICAgICd3c2ouY29tJywgJ3d3dy53c2ouY29tJyxcbiAgICAndGhlZ3VhcmRpYW4uY29tJywgJ3d3dy50aGVndWFyZGlhbi5jb20nLFxuICAgICdmb3JiZXMuY29tJywgJ3d3dy5mb3JiZXMuY29tJyxcbiAgICAncmV1dGVycy5jb20nLCAnd3d3LnJldXRlcnMuY29tJyxcbiAgICAnYXBuZXdzLmNvbScsICd3d3cuYXBuZXdzLmNvbScsXG4gICAgJ2FtYXpvbi5jb20nLCAnd3d3LmFtYXpvbi5jb20nLFxuICAgICdlYmF5LmNvbScsICd3d3cuZWJheS5jb20nLFxuICAgICdhbGlleHByZXNzLmNvbScsICd3d3cuYWxpZXhwcmVzcy5jb20nLFxuICAgICd3aXNoLmNvbScsICd3d3cud2lzaC5jb20nLFxuICAgICdldHN5LmNvbScsICd3d3cuZXRzeS5jb20nLFxuICAgICd3YWxtYXJ0LmNvbScsICd3d3cud2FsbWFydC5jb20nLFxuICAgICd0YXJnZXQuY29tJywgJ3d3dy50YXJnZXQuY29tJyxcbiAgICAnYmVzdGJ1eS5jb20nLCAnd3d3LmJlc3RidXkuY29tJyxcbiAgICAnc2hvcGVlLmNvbScsICd3d3cuc2hvcGVlLmNvbScsXG4gICAgJ3Nob3BpZnkuY29tJywgJ3d3dy5zaG9waWZ5LmNvbScsXG4gICAgJ3F1b3JhLmNvbScsICd3d3cucXVvcmEuY29tJyxcbiAgICAnbWVkaXVtLmNvbScsICd3d3cubWVkaXVtLmNvbScsXG4gICAgJ3N1YnN0YWNrLmNvbScsICd3d3cuc3Vic3RhY2suY29tJyxcbiAgICAnZ29vZ2xlLmNvbScsICd3d3cuZ29vZ2xlLmNvbScsICdiaW5nLmNvbScsICd3d3cuYmluZy5jb20nLFxuICAgICd5YWhvby5jb20nLCAnc2VhcmNoLnlhaG9vLmNvbScsXG4gICAgJ2JhaWR1LmNvbScsICdzb2dvdS5jb20nLCAneWFuZGV4LmNvbScsXG4gICAgJ2xpbmtlZGluLmNvbScsICd3d3cubGlua2VkaW4uY29tJyxcbiAgICAncGludGVyZXN0LmNvbScsICd3d3cucGludGVyZXN0LmNvbScsXG4gICAgJ3R1bWJsci5jb20nLCAnd3d3LnR1bWJsci5jb20nLFxuICBdLFxuICAnY2FsbXdlYi11c2VyLWZhdm9yaW5nJzogW1xuICAgICd3aWtpcGVkaWEub3JnJywgJ3d3dy53aWtpcGVkaWEub3JnJyxcbiAgICAnd2lraW1lZGlhLm9yZycsICd3d3cud2lraW1lZGlhLm9yZycsXG4gICAgJ2dpdGh1Yi5jb20nLCAnd3d3LmdpdGh1Yi5jb20nLCAnZ2l0aHVidXNlcmNvbnRlbnQuY29tJyxcbiAgICAnZ2l0bGFiLmNvbScsICd3d3cuZ2l0bGFiLmNvbScsXG4gICAgJ3N0YWNrb3ZlcmZsb3cuY29tJywgJ3d3dy5zdGFja292ZXJmbG93LmNvbScsXG4gICAgJ3N0YWNrZXhjaGFuZ2UuY29tJywgJ3d3dy5zdGFja2V4Y2hhbmdlLmNvbScsXG4gICAgJ25wbWpzLmNvbScsICd3d3cubnBtanNqcy5jb20nLFxuICAgICdweXBpLm9yZycsICd3d3cucHlwaS5vcmcnLFxuICAgICdkb2NrZXIuY29tJywgJ3d3dy5kb2NrZXIuY29tJyxcbiAgICAnYXJ4aXYub3JnJywgJ3d3dy5hcnhpdi5vcmcnLFxuICAgICdzcHJpbmdlci5jb20nLCAnbmF0dXJlLmNvbScsICdzY2llbmNlLm9yZycsXG4gICAgJ21pdC5lZHUnLCAnaGFydmFyZC5lZHUnLCAnc3RhbmZvcmQuZWR1JywgJ2JlcmtlbGV5LmVkdScsXG4gICAgJ25hc2EuZ292JywgJ3d3dy5uYXNhLmdvdicsICdub2FhLmdvdicsICdlcGEuZ292JyxcbiAgICAnaXJzLmdvdicsICdzc2EuZ292JywgJ2NkYy5nb3YnLCAnbmloLmdvdicsXG4gICAgJ3BheXBhbC5jb20nLCAnd3d3LnBheXBhbC5jb20nLFxuICAgICdkdWNrZHVja2dvLmNvbScsICd3d3cuZHVja2R1Y2tnby5jb20nLFxuICAgICdzdGFydHBhZ2UuY29tJywgJ3d3dy5zdGFydHBhZ2UuY29tJyxcbiAgXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCbG9ja2xpc3RDYWNoZSgpOiB2b2lkIHtcbiAgaWYgKGNhY2hlSW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgY2FjaGVJbml0aWFsaXplZCA9IHRydWU7XG4gIFxuICAvLyBMb2FkIGRlZmF1bHRzIGltbWVkaWF0ZWx5IGludG8gY2FjaGVcbiAgY2FjaGVkQmxvY2tsaXN0ID0gbmV3IFNldChERUZBVUxUX0JMT0NLTElTVFNbJ2NhbG13ZWItY29udGVudC1mYXJtcyddIHx8IFtdKTtcbiAgY2FjaGVkVXNlckZhdm9yaW5nID0gbmV3IFNldChERUZBVUxUX0JMT0NLTElTVFNbJ2NhbG13ZWItdXNlci1mYXZvcmluZyddIHx8IFtdKTtcbiAgXG4gIGNvbnNvbGUubG9nKGBbQmxvY2tsaXN0XSBMb2FkZWQgZGVmYXVsdHM6ICR7Y2FjaGVkQmxvY2tsaXN0LnNpemV9IGJsb2NrbGlzdCwgJHtjYWNoZWRVc2VyRmF2b3Jpbmcuc2l6ZX0gdXNlci1mYXZvcmluZ2ApO1xuICBcbiAgLy8gVGhlbiB0cmlnZ2VyIGFzeW5jIHJlZnJlc2ggaW4gYmFja2dyb3VuZFxuICB1cGRhdGVBbGxCbG9ja2xpc3RzKCkudGhlbihjYWNoZSA9PiB7XG4gICAgY2FjaGVkQmxvY2tsaXN0ID0gbmV3IFNldCgpO1xuICAgIGNhY2hlZFVzZXJGYXZvcmluZyA9IG5ldyBTZXQoKTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IFtzb3VyY2VJZCwgZG9tYWluc10gb2YgY2FjaGUuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBCTE9DS0xJU1RfU09VUkNFUy5maW5kKHMgPT4gcy5pZCA9PT0gc291cmNlSWQpO1xuICAgICAgaWYgKHNvdXJjZT8uY2F0ZWdvcnkgPT09ICd1c2VyX2Zhdm9yaW5nJykge1xuICAgICAgICBkb21haW5zLmZvckVhY2goZCA9PiBjYWNoZWRVc2VyRmF2b3JpbmcuYWRkKGQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbWFpbnMuZm9yRWFjaChkID0+IGNhY2hlZEJsb2NrbGlzdC5hZGQoZCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgW0Jsb2NrbGlzdF0gVXBkYXRlZCBjYWNoZTogJHtjYWNoZWRCbG9ja2xpc3Quc2l6ZX0gYmxvY2tsaXN0LCAke2NhY2hlZFVzZXJGYXZvcmluZy5zaXplfSB1c2VyLWZhdm9yaW5nYCk7XG4gIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS53YXJuKCdbQmxvY2tsaXN0XSBSZW1vdGUgZmV0Y2ggZmFpbGVkLCB1c2luZyBkZWZhdWx0czonLCBlcnIpO1xuICB9KTtcbiAgXG4gIC8vIEFsc28gdHJ5IHRvIGxvYWQgZnJvbSBzdG9yYWdlIGFzIGZhbGxiYWNrXG4gIGdldENhY2hlZEJsb2NrbGlzdHMoKS50aGVuKGNhY2hlID0+IHtcbiAgICBpZiAoY2FjaGVkQmxvY2tsaXN0LnNpemUgPT09IDAgJiYgY2FjaGUuc2l6ZSA+IDApIHtcbiAgICAgIGNhY2hlZEJsb2NrbGlzdCA9IG5ldyBTZXQoKTtcbiAgICAgIGNhY2hlZFVzZXJGYXZvcmluZyA9IG5ldyBTZXQoKTtcbiAgICAgIGZvciAoY29uc3QgW3NvdXJjZUlkLCBkb21haW5zXSBvZiBjYWNoZS5lbnRyaWVzKCkpIHtcbiAgICAgICAgY29uc3Qgc291cmNlID0gQkxPQ0tMSVNUX1NPVVJDRVMuZmluZChzID0+IHMuaWQgPT09IHNvdXJjZUlkKTtcbiAgICAgICAgaWYgKHNvdXJjZT8uY2F0ZWdvcnkgPT09ICd1c2VyX2Zhdm9yaW5nJykge1xuICAgICAgICAgIGRvbWFpbnMuZm9yRWFjaChkID0+IGNhY2hlZFVzZXJGYXZvcmluZy5hZGQoZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbWFpbnMuZm9yRWFjaChkID0+IGNhY2hlZEJsb2NrbGlzdC5hZGQoZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KS5jYXRjaCgoKSA9PiB7fSk7XG59XG5cbi8vIFN5bmMgdmVyc2lvbiBvZiBpc0RvbWFpbkJsb2NrZWQgLSB1c2VzIGNhY2hlZCBibG9ja2xpc3RcbmV4cG9ydCBmdW5jdGlvbiBpc0RvbWFpbkJsb2NrZWRTeW5jKGRvbWFpbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBkb21haW4udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9ed3d3XFwuLywgJycpO1xuICBcbiAgLy8gRmlyc3QgY2hlY2sgaWYgaXQncyBhIHVzZXItZmF2b3JpbmcgZG9tYWluIChuZXZlciBibG9jayB0aGVzZSlcbiAgaWYgKGNhY2hlZFVzZXJGYXZvcmluZy5zaXplID4gMCkge1xuICAgIGlmIChjYWNoZWRVc2VyRmF2b3JpbmcuaGFzKG5vcm1hbGl6ZWQpKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gQ2hlY2sgcGFyZW50IGRvbWFpbnMgdG9vXG4gICAgY29uc3QgcGFydHMgPSBub3JtYWxpemVkLnNwbGl0KCcuJyk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFyZW50ID0gcGFydHMuc2xpY2UoaSkuam9pbignLicpO1xuICAgICAgaWYgKGNhY2hlZFVzZXJGYXZvcmluZy5oYXMocGFyZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gQ2hlY2sgYmxvY2tsaXN0XG4gIGlmIChjYWNoZWRCbG9ja2xpc3QuaGFzKG5vcm1hbGl6ZWQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8vIFBhcmVudCBkb21haW4gbWF0Y2hcbiAgY29uc3QgcGFydHMgPSBub3JtYWxpemVkLnNwbGl0KCcuJyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXJlbnQgPSBwYXJ0cy5zbGljZShpKS5qb2luKCcuJyk7XG4gICAgaWYgKGNhY2hlZEJsb2NrbGlzdC5oYXMocGFyZW50KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEJsb2NrbGlzdChzb3VyY2U6IEJsb2NrbGlzdFNvdXJjZSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgLy8gVHJ5IHJlbW90ZSBmZXRjaCBmaXJzdFxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlLnVybCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ3RleHQvcGxhaW4sIGFwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGRvbWFpbnMgPSBwYXJzZUJsb2NrbGlzdCh0ZXh0LCBzb3VyY2UuZm9ybWF0KTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhgW0Jsb2NrbGlzdF0gRmV0Y2hlZCAke3NvdXJjZS5uYW1lfTogJHtkb21haW5zLmxlbmd0aH0gZG9tYWluc2ApO1xuICAgIHJldHVybiBkb21haW5zO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUud2FybihgW0Jsb2NrbGlzdF0gRmFpbGVkIHRvIGZldGNoICR7c291cmNlLm5hbWV9LCB0cnlpbmcgbG9jYWwgZmFsbGJhY2s6YCwgZXJyb3IpO1xuICAgIFxuICAgIC8vIEZhbGxiYWNrIHRvIGxvY2FsIGJ1bmRsZWQgZmlsZVxuICAgIHJldHVybiBmZXRjaExvY2FsQmxvY2tsaXN0KHNvdXJjZSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hMb2NhbEJsb2NrbGlzdChzb3VyY2U6IEJsb2NrbGlzdFNvdXJjZSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgLy8gTWFwIHNvdXJjZSBJRHMgdG8gbG9jYWwgZmlsZSBwYXRoc1xuICBjb25zdCBsb2NhbFBhdGhzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICdjYWxtd2ViLWNvbnRlbnQtZmFybXMnOiAnL2Jsb2NrbGlzdHMvY29udGVudC1mYXJtcy5qc29uJyxcbiAgICAnY2FsbXdlYi11c2VyLWZhdm9yaW5nJzogJy9ibG9ja2xpc3RzL3VzZXItZmF2b3JpbmcuanNvbicsXG4gIH07XG4gIFxuICBjb25zdCBsb2NhbFBhdGggPSBsb2NhbFBhdGhzW3NvdXJjZS5pZF07XG4gIGlmICghbG9jYWxQYXRoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICB0cnkge1xuICAgIC8vIEluIGV4dGVuc2lvbiBjb250ZXh0LCB1c2UgY2hyb21lLnJ1bnRpbWUuZ2V0VVJMXG4gICAgY29uc3QgdXJsID0gdHlwZW9mIGNocm9tZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY2hyb21lLnJ1bnRpbWU/LmdldFVSTFxuICAgICAgPyBjaHJvbWUucnVudGltZS5nZXRVUkwobG9jYWxQYXRoKVxuICAgICAgOiBsb2NhbFBhdGg7XG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBkb21haW5zID0gcGFyc2VCbG9ja2xpc3QodGV4dCwgc291cmNlLmZvcm1hdCk7XG4gICAgXG4gICAgY29uc29sZS5sb2coYFtCbG9ja2xpc3RdIExvYWRlZCBsb2NhbCAke3NvdXJjZS5uYW1lfTogJHtkb21haW5zLmxlbmd0aH0gZG9tYWluc2ApO1xuICAgIHJldHVybiBkb21haW5zO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtCbG9ja2xpc3RdIEZhaWxlZCB0byBsb2FkIGxvY2FsICR7c291cmNlLm5hbWV9OmAsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2tsaXN0KGNvbnRlbnQ6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGRvbWFpbnM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG5cbiAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICAgIFxuICAgIC8vIFNraXAgY29tbWVudHMgYW5kIGVtcHR5IGxpbmVzXG4gICAgaWYgKCF0cmltbWVkIHx8IHRyaW1tZWQuc3RhcnRzV2l0aCgnIycpIHx8IHRyaW1tZWQuc3RhcnRzV2l0aCgnIScpIHx8IHRyaW1tZWQuc3RhcnRzV2l0aCgnWycpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgZG9tYWluOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAgIGlmIChmb3JtYXQgPT09ICdob3N0cycpIHtcbiAgICAgIC8vIEhvc3RzIGZvcm1hdDogXCIwLjAuMC4wIGV4YW1wbGUuY29tXCIgb3IgXCIxMjcuMC4wLjEgZXhhbXBsZS5jb21cIlxuICAgICAgY29uc3QgcGFydHMgPSB0cmltbWVkLnNwbGl0KC9cXHMrLyk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgZG9tYWluID0gcGFydHNbMV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdwbGFpbicpIHtcbiAgICAgIC8vIFBsYWluIGRvbWFpbiBsaXN0XG4gICAgICBkb21haW4gPSB0cmltbWVkO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnanNvbicpIHtcbiAgICAgIC8vIEpTT04gZm9ybWF0IC0gZWl0aGVyIGFycmF5IG9yIENhbG1XZWIgZm9ybWF0IHdpdGggY2F0ZWdvcmllc1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShjb250ZW50KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyc2VkKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZWQuZmlsdGVyKGQgPT4gdHlwZW9mIGQgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZWQuY2F0ZWdvcmllcyAmJiBBcnJheS5pc0FycmF5KHBhcnNlZC5jYXRlZ29yaWVzKSkge1xuICAgICAgICAgIC8vIENhbG1XZWIgZm9ybWF0OiB7IGNhdGVnb3JpZXM6IFt7IGRvbWFpbnM6IFsuLi5dIH0sIC4uLl0gfVxuICAgICAgICAgIHJldHVybiBwYXJzZWQuY2F0ZWdvcmllcy5mbGF0TWFwKChjYXQ6IHsgZG9tYWlucz86IHN0cmluZ1tdIH0pID0+IFxuICAgICAgICAgICAgY2F0LmRvbWFpbnMgfHwgW11cbiAgICAgICAgICApLmZpbHRlcigoZDogdW5rbm93bikgPT4gdHlwZW9mIGQgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZWQuZG9tYWlucyAmJiBBcnJheS5pc0FycmF5KHBhcnNlZC5kb21haW5zKSkge1xuICAgICAgICAgIC8vIFNpbXBsZSBmb3JtYXQ6IHsgZG9tYWluczogWy4uLl0gfVxuICAgICAgICAgIHJldHVybiBwYXJzZWQuZG9tYWlucy5maWx0ZXIoKGQ6IHVua25vd24pID0+IHR5cGVvZiBkID09PSAnc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge31cbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBkb21haW5cbiAgICBpZiAoZG9tYWluICYmIGlzVmFsaWREb21haW4oZG9tYWluKSkge1xuICAgICAgZG9tYWlucy5wdXNoKGRvbWFpbi50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gWy4uLm5ldyBTZXQoZG9tYWlucyldOyAvLyBEZWR1cGVcbn1cblxuZnVuY3Rpb24gaXNWYWxpZERvbWFpbihkb21haW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBTa2lwIGxvY2FsaG9zdCwgSVAgYWRkcmVzc2VzLCBhbmQgaW52YWxpZCBlbnRyaWVzXG4gIGlmIChkb21haW4gPT09ICdsb2NhbGhvc3QnIHx8IFxuICAgICAgZG9tYWluID09PSAnbG9jYWxob3N0LmxvY2FsZG9tYWluJyB8fFxuICAgICAgZG9tYWluID09PSAnYnJvYWRjYXN0aG9zdCcgfHxcbiAgICAgIGRvbWFpbiA9PT0gJ2lwNi1sb2NhbGhvc3QnIHx8XG4gICAgICBkb21haW4uc3RhcnRzV2l0aCgnOjoxJykgfHxcbiAgICAgIC9eXFxkK1xcLlxcZCtcXC5cXGQrXFwuXFxkKyQvLnRlc3QoZG9tYWluKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLy8gQmFzaWMgZG9tYWluIHZhbGlkYXRpb25cbiAgcmV0dXJuIC9eW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKyQvaS50ZXN0KGRvbWFpbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBbGxCbG9ja2xpc3RzKCk6IFByb21pc2U8TWFwPHN0cmluZywgc3RyaW5nW10+PiB7XG4gIGNvbnN0IHJlc3VsdHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gIFxuICBjb25zdCBlbmFibGVkU291cmNlcyA9IEJMT0NLTElTVF9TT1VSQ0VTLmZpbHRlcihzID0+IHMuZW5hYmxlZCk7XG4gIFxuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBlbmFibGVkU291cmNlcy5tYXAoYXN5bmMgKHNvdXJjZSkgPT4ge1xuICAgICAgY29uc3QgZG9tYWlucyA9IGF3YWl0IGZldGNoQmxvY2tsaXN0KHNvdXJjZSk7XG4gICAgICBpZiAoZG9tYWlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdHMuc2V0KHNvdXJjZS5pZCwgZG9tYWlucyk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcblxuICAvLyBDYWNoZSByZXN1bHRzXG4gIGNvbnN0IGNhY2hlOiBDYWNoZWRCbG9ja2xpc3RbXSA9IFtdO1xuICBmb3IgKGNvbnN0IFtzb3VyY2VJZCwgZG9tYWluc10gb2YgcmVzdWx0cykge1xuICAgIGNhY2hlLnB1c2goe1xuICAgICAgc291cmNlSWQsXG4gICAgICBkb21haW5zLFxuICAgICAgbGFzdFVwZGF0ZWQ6IERhdGUubm93KCksXG4gICAgICBkb21haW5Db3VudDogZG9tYWlucy5sZW5ndGgsXG4gICAgfSk7XG4gIH1cbiAgXG4gIGF3YWl0IHNhdmVDYWNoZShjYWNoZSk7XG4gIFxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhY2hlZEJsb2NrbGlzdHMoKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBzdHJpbmdbXT4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdG9yZWQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoQ0FDSEVfS0VZKTtcbiAgICBjb25zdCBjYWNoZTogQ2FjaGVkQmxvY2tsaXN0W10gPSBzdG9yZWRbQ0FDSEVfS0VZXSB8fCBbXTtcbiAgICBcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNhY2hlKSB7XG4gICAgICBpZiAobm93IC0gaXRlbS5sYXN0VXBkYXRlZCA8IENBQ0hFX0RVUkFUSU9OKSB7XG4gICAgICAgIHJlc3VsdHMuc2V0KGl0ZW0uc291cmNlSWQsIGl0ZW0uZG9tYWlucyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZXN1bHRzO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbmV3IE1hcCgpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVDYWNoZShjYWNoZTogQ2FjaGVkQmxvY2tsaXN0W10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW0NBQ0hFX0tFWV06IGNhY2hlIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVyZ2VkQmxvY2tsaXN0KCk6IFByb21pc2U8U2V0PHN0cmluZz4+IHtcbiAgY29uc3QgY2FjaGVkID0gYXdhaXQgZ2V0Q2FjaGVkQmxvY2tsaXN0cygpO1xuICBcbiAgLy8gSWYgbm8gY2FjaGUgb3IgZW1wdHksIGZldGNoIGZyZXNoXG4gIGlmIChjYWNoZWQuc2l6ZSA9PT0gMCkge1xuICAgIGNvbnN0IGZyZXNoID0gYXdhaXQgdXBkYXRlQWxsQmxvY2tsaXN0cygpO1xuICAgIGNvbnN0IG1lcmdlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgW3NvdXJjZUlkLCBkb21haW5zXSBvZiBmcmVzaC5lbnRyaWVzKCkpIHtcbiAgICAgIC8vIFNraXAgdXNlcl9mYXZvcmluZyBkb21haW5zIGluIHRoZSBibG9ja2xpc3RcbiAgICAgIGNvbnN0IHNvdXJjZSA9IEJMT0NLTElTVF9TT1VSQ0VTLmZpbmQocyA9PiBzLmlkID09PSBzb3VyY2VJZCk7XG4gICAgICBpZiAoc291cmNlPy5jYXRlZ29yeSA9PT0gJ3VzZXJfZmF2b3JpbmcnKSBjb250aW51ZTtcbiAgICAgIGRvbWFpbnMuZm9yRWFjaChkID0+IG1lcmdlZC5hZGQoZCkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9XG4gIFxuICBjb25zdCBtZXJnZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBbc291cmNlSWQsIGRvbWFpbnNdIG9mIGNhY2hlZC5lbnRyaWVzKCkpIHtcbiAgICAvLyBTa2lwIHVzZXJfZmF2b3JpbmcgZG9tYWlucyBpbiB0aGUgYmxvY2tsaXN0XG4gICAgY29uc3Qgc291cmNlID0gQkxPQ0tMSVNUX1NPVVJDRVMuZmluZChzID0+IHMuaWQgPT09IHNvdXJjZUlkKTtcbiAgICBpZiAoc291cmNlPy5jYXRlZ29yeSA9PT0gJ3VzZXJfZmF2b3JpbmcnKSBjb250aW51ZTtcbiAgICBkb21haW5zLmZvckVhY2goZCA9PiBtZXJnZWQuYWRkKGQpKTtcbiAgfVxuICBcbiAgcmV0dXJuIG1lcmdlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJGYXZvcmluZ0RvbWFpbnMoKTogUHJvbWlzZTxTZXQ8c3RyaW5nPj4ge1xuICBjb25zdCBjYWNoZWQgPSBhd2FpdCBnZXRDYWNoZWRCbG9ja2xpc3RzKCk7XG4gIGNvbnN0IHVzZXJGYXZvcmluZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBcbiAgZm9yIChjb25zdCBbc291cmNlSWQsIGRvbWFpbnNdIG9mIGNhY2hlZC5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBzb3VyY2UgPSBCTE9DS0xJU1RfU09VUkNFUy5maW5kKHMgPT4gcy5pZCA9PT0gc291cmNlSWQpO1xuICAgIGlmIChzb3VyY2U/LmNhdGVnb3J5ID09PSAndXNlcl9mYXZvcmluZycpIHtcbiAgICAgIGRvbWFpbnMuZm9yRWFjaChkID0+IHVzZXJGYXZvcmluZy5hZGQoZCkpO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHVzZXJGYXZvcmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzRG9tYWluQmxvY2tlZChkb21haW46IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBub3JtYWxpemVkID0gZG9tYWluLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXnd3d1xcLi8sICcnKTtcbiAgXG4gIC8vIEZpcnN0IGNoZWNrIGlmIGl0J3MgYSB1c2VyLWZhdm9yaW5nIGRvbWFpbiAobmV2ZXIgYmxvY2sgdGhlc2UpXG4gIGNvbnN0IHVzZXJGYXZvcmluZyA9IGF3YWl0IGdldFVzZXJGYXZvcmluZ0RvbWFpbnMoKTtcbiAgaWYgKHVzZXJGYXZvcmluZy5zaXplID4gMCkge1xuICAgIGlmICh1c2VyRmF2b3JpbmcuaGFzKG5vcm1hbGl6ZWQpKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gQ2hlY2sgcGFyZW50IGRvbWFpbnMgdG9vXG4gICAgY29uc3QgcGFydHMgPSBub3JtYWxpemVkLnNwbGl0KCcuJyk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFyZW50ID0gcGFydHMuc2xpY2UoaSkuam9pbignLicpO1xuICAgICAgaWYgKHVzZXJGYXZvcmluZy5oYXMocGFyZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gVGhlbiBjaGVjayBibG9ja2xpc3RcbiAgY29uc3QgYmxvY2tsaXN0ID0gYXdhaXQgZ2V0TWVyZ2VkQmxvY2tsaXN0KCk7XG4gIFxuICAvLyBEaXJlY3QgbWF0Y2hcbiAgaWYgKGJsb2NrbGlzdC5oYXMobm9ybWFsaXplZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgLy8gUGFyZW50IGRvbWFpbiBtYXRjaCAoZS5nLiwgd3d3LmFkcy5leGFtcGxlLmNvbSAtPiBhZHMuZXhhbXBsZS5jb20gLT4gZXhhbXBsZS5jb20pXG4gIGNvbnN0IHBhcnRzID0gbm9ybWFsaXplZC5zcGxpdCgnLicpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGFyZW50ID0gcGFydHMuc2xpY2UoaSkuam9pbignLicpO1xuICAgIGlmIChibG9ja2xpc3QuaGFzKHBhcmVudCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvY2tsaXN0U3RhdHMoKTogUHJvbWlzZTx7XG4gIHRvdGFsRG9tYWluczogbnVtYmVyO1xuICBieVNvdXJjZTogeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfVtdO1xuICBsYXN0VXBkYXRlZDogbnVtYmVyIHwgbnVsbDtcbn0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdG9yZWQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoQ0FDSEVfS0VZKTtcbiAgICBjb25zdCBjYWNoZTogQ2FjaGVkQmxvY2tsaXN0W10gPSBzdG9yZWRbQ0FDSEVfS0VZXSB8fCBbXTtcbiAgICBcbiAgICBsZXQgdG90YWxEb21haW5zID0gMDtcbiAgICBjb25zdCBieVNvdXJjZTogeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfVtdID0gW107XG4gICAgbGV0IGxhc3RVcGRhdGVkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2FjaGUpIHtcbiAgICAgIHRvdGFsRG9tYWlucyArPSBpdGVtLmRvbWFpbkNvdW50O1xuICAgICAgY29uc3Qgc291cmNlID0gQkxPQ0tMSVNUX1NPVVJDRVMuZmluZChzID0+IHMuaWQgPT09IGl0ZW0uc291cmNlSWQpO1xuICAgICAgYnlTb3VyY2UucHVzaCh7XG4gICAgICAgIGlkOiBpdGVtLnNvdXJjZUlkLFxuICAgICAgICBuYW1lOiBzb3VyY2U/Lm5hbWUgfHwgaXRlbS5zb3VyY2VJZCxcbiAgICAgICAgY291bnQ6IGl0ZW0uZG9tYWluQ291bnQsXG4gICAgICB9KTtcbiAgICAgIGlmIChpdGVtLmxhc3RVcGRhdGVkID4gKGxhc3RVcGRhdGVkIHx8IDApKSB7XG4gICAgICAgIGxhc3RVcGRhdGVkID0gaXRlbS5sYXN0VXBkYXRlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdG90YWxEb21haW5zLCBieVNvdXJjZSwgbGFzdFVwZGF0ZWQgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHsgdG90YWxEb21haW5zOiAwLCBieVNvdXJjZTogW10sIGxhc3RVcGRhdGVkOiBudWxsIH07XG4gIH1cbn1cbiIsIi8qKlxuICogU2VhcmNoIFJlc3VsdCBGaWx0ZXJcbiAqXG4gKiBGaWx0ZXJzIHNlYXJjaCByZXN1bHRzIG9uIEdvb2dsZSwgQmluZywgRHVja0R1Y2tHbyB0byBoaWRlIGJsb2NrZWQgc2l0ZXMuXG4gKiBVc2VzIGJvdGggYnVpbHQtaW4gY2F0ZWdvcmllcyBhbmQgZXh0ZXJuYWwgYmxvY2tsaXN0cy5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFNpdGVDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcmllcyc7XG5pbXBvcnQgeyBnZXRDYXRlZ29yeUZvckRvbWFpbiwgU0lURV9DQVRFR09SSUVTIH0gZnJvbSAnLi9jYXRlZ29yaWVzJztcbmltcG9ydCB7IGlzRG9tYWluQmxvY2tlZCwgaXNEb21haW5CbG9ja2VkU3luYywgaW5pdEJsb2NrbGlzdENhY2hlIH0gZnJvbSAnLi9ibG9ja2xpc3QtZmV0Y2hlcic7XG5cbi8vIEluaXRpYWxpemUgYmxvY2tsaXN0IGNhY2hlIG9uIG1vZHVsZSBsb2FkXG5pbml0QmxvY2tsaXN0Q2FjaGUoKTtcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hSZXN1bHRGaWx0ZXJTZXR0aW5ncyB7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIGhpZGVCbG9ja2VkOiBib29sZWFuO1xuICBzaG93Q2F0ZWdvcnlCYWRnZTogYm9vbGVhbjtcbiAgYmxvY2tlZENhdGVnb3JpZXM6IFNpdGVDYXRlZ29yeVtdO1xuICBjdXN0b21CbG9ja2xpc3Q6IHN0cmluZ1tdO1xuICBjdXN0b21BbGxvd2xpc3Q6IHN0cmluZ1tdO1xuICB1c2VFeHRlcm5hbEJsb2NrbGlzdHM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U2VhcmNoRmlsdGVyU2V0dGluZ3M6IFNlYXJjaFJlc3VsdEZpbHRlclNldHRpbmdzID0ge1xuICBlbmFibGVkOiB0cnVlLFxuICBoaWRlQmxvY2tlZDogdHJ1ZSxcbiAgc2hvd0NhdGVnb3J5QmFkZ2U6IGZhbHNlLFxuICBibG9ja2VkQ2F0ZWdvcmllczogW10sXG4gIGN1c3RvbUJsb2NrbGlzdDogW10sXG4gIGN1c3RvbUFsbG93bGlzdDogW10sXG4gIHVzZUV4dGVybmFsQmxvY2tsaXN0czogdHJ1ZSxcbn07XG5cbi8vIFNlYXJjaCBlbmdpbmUgc2VsZWN0b3JzIC0gdXBkYXRlZCBmb3IgbW9kZXJuIGxheW91dHNcbmNvbnN0IFNFQVJDSF9TRUxFQ1RPUlMgPSB7XG4gIGdvb2dsZToge1xuICAgIHJlc3VsdHM6ICdbZGF0YS1zb2tvYmFuLWNvbnRhaW5lcl0gLmcsICNzZWFyY2ggLmcsICNyc28gLmcsIC5NampZdWQnLFxuICAgIGxpbms6ICdhW2hyZWYqPVwidXJsP1wiXSwgYVtocmVmXj1cImh0dHBcIl06bm90KFtocmVmKj1cImdvb2dsZS5jb21cIl0pJyxcbiAgICB0aXRsZTogJ2gzLCBbcm9sZT1cImhlYWRpbmdcIl0nLFxuICAgIGNvbnRhaW5lcjogJy5nLCAuTWpqWXVkLCBbZGF0YS1zb2tvYmFuLWNvbnRhaW5lcl0nLFxuICB9LFxuICBiaW5nOiB7XG4gICAgcmVzdWx0czogJyNiX3Jlc3VsdHMgLmJfYWxnbycsXG4gICAgbGluazogJ2gyIGEsIC5iX3RpdGxlIGEnLFxuICAgIHRpdGxlOiAnaDIsIC5iX3RpdGxlJyxcbiAgICBjb250YWluZXI6ICcuYl9hbGdvJyxcbiAgfSxcbiAgZHVja2R1Y2tnbzoge1xuICAgIC8vIERERyByZXN1bHRzIGFyZSBpbjogb2wucmVhY3QtcmVzdWx0cy0tbWFpbiA+IGxpID4gYXJ0aWNsZVxuICAgIC8vIE9yIEhUTUwgdmVyc2lvbjogLnJlc3VsdC5yZXN1bHRzX2xpbmtzXG4gICAgcmVzdWx0czogJ2FydGljbGUsIC5yZXN1bHQucmVzdWx0c19saW5rcywgbGlbZGF0YS10ZXN0aWQ9XCJyZXN1bHRcIl0nLFxuICAgIGxpbms6ICdhW2hyZWZePVwiaHR0cFwiXTpub3QoW2hyZWYqPVwiZHVja2R1Y2tnby5jb21cIl0pJyxcbiAgICB0aXRsZTogJ2gyLCBoMycsXG4gICAgY29udGFpbmVyOiAnYXJ0aWNsZSwgLnJlc3VsdCwgbGknLFxuICB9LFxuICB5YWhvbzoge1xuICAgIHJlc3VsdHM6ICcjd2ViIC5kZCwgLnNlYXJjaC1SZXN1bHQnLFxuICAgIGxpbms6ICdoMyBhLCAuYWxnby10aXRsZSBhJyxcbiAgICB0aXRsZTogJ2gzLCAuYWxnby10aXRsZScsXG4gICAgY29udGFpbmVyOiAnLmRkLCAuYWxnbycsXG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0U2VhcmNoRW5naW5lKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpOiBzdHJpbmcgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgVVJMKHVybCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIGNvbnN0IGhvc3QgPSBwYXJzZWQuaG9zdG5hbWU7XG4gICAgY29uc3QgcGF0aCA9IHBhcnNlZC5wYXRobmFtZTtcbiAgXG4gICAgLy8gQ2hlY2sgZm9yIHNlYXJjaCBwYWdlcyBzcGVjaWZpY2FsbHlcbiAgICBpZiAoaG9zdC5pbmNsdWRlcygnZ29vZ2xlLmNvbScpICYmIChwYXRoLmluY2x1ZGVzKCcvc2VhcmNoJykgfHwgcGF0aC5pbmNsdWRlcygnL3dlYmhwJykpKSByZXR1cm4gJ2dvb2dsZSc7XG4gICAgaWYgKGhvc3QuaW5jbHVkZXMoJ2JpbmcuY29tJykgJiYgcGF0aC5pbmNsdWRlcygnL3NlYXJjaCcpKSByZXR1cm4gJ2JpbmcnO1xuICAgIGlmIChob3N0LmluY2x1ZGVzKCdkdWNrZHVja2dvLmNvbScpKSByZXR1cm4gJ2R1Y2tkdWNrZ28nO1xuICAgIGlmIChob3N0LmluY2x1ZGVzKCd5YWhvby5jb20nKSAmJiBwYXRoLmluY2x1ZGVzKCcvc2VhcmNoJykpIHJldHVybiAneWFob28nO1xuICAgIGlmIChob3N0LmluY2x1ZGVzKCdzZWFyY2guYnJhdmUuY29tJykpIHJldHVybiAnYnJhdmUnO1xuICAgIGlmIChob3N0LmluY2x1ZGVzKCd5YW5kZXguY29tJykpIHJldHVybiAneWFuZGV4JztcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRXh0cmFjdCBzZWFyY2ggcXVlcnkgZnJvbSBVUkxcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U2VhcmNoUXVlcnkoKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBcbiAgLy8gR29vZ2xlXG4gIGNvbnN0IGdvb2dsZVEgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncScpO1xuICBpZiAoZ29vZ2xlUSkgcmV0dXJuIGdvb2dsZVE7XG4gIFxuICAvLyBCaW5nXG4gIGNvbnN0IGJpbmdRID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKTtcbiAgaWYgKGJpbmdRKSByZXR1cm4gYmluZ1E7XG4gIFxuICAvLyBEdWNrRHVja0dvXG4gIGNvbnN0IGRkZ1EgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncScpO1xuICBpZiAoZGRnUSkgcmV0dXJuIGRkZ1E7XG4gIFxuICAvLyBZYWhvb1xuICBjb25zdCB5YWhvb1EgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncCcpO1xuICBpZiAoeWFob29RKSByZXR1cm4geWFob29RO1xuICBcbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIFJlZGlyZWN0IHRvIER1Y2tEdWNrR29cbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvRHVja0R1Y2tHbygpOiB2b2lkIHtcbiAgY29uc3QgcXVlcnkgPSBleHRyYWN0U2VhcmNoUXVlcnkoKTtcbiAgaWYgKCFxdWVyeSkge1xuICAgIGNvbnNvbGUubG9nKCdbU2VhcmNoRmlsdGVyXSBObyBxdWVyeSBmb3VuZCB0byByZWRpcmVjdCcpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgY29uc3QgZGRnVXJsID0gYGh0dHBzOi8vZHVja2R1Y2tnby5jb20vP3E9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfWA7XG4gIGNvbnNvbGUubG9nKGBbU2VhcmNoRmlsdGVyXSBSZWRpcmVjdGluZyB0byBEdWNrRHVja0dvOiAke2RkZ1VybH1gKTtcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZGdVcmw7XG59XG5cbi8vIENoZWNrIGlmIHNob3VsZCByZWRpcmVjdCB0byBEREdcbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRSZWRpcmVjdFRvRERHKHNldHRpbmdzOiB7IHJlZGlyZWN0VG9EREc/OiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgcmV0dXJuIHNldHRpbmdzLnJlZGlyZWN0VG9EREcgPT09IHRydWU7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNlYXJjaFJlc3VsdFVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8vIER1Y2tEdWNrR28gcmVzdWx0IGxpbmtzIGFyZSB3cmFwcGVkIHRocm91Z2ggL2wvP3VkZGc9Li4uXG4gICAgLy8gRXhhbXBsZXM6XG4gICAgLy8gICAvL2R1Y2tkdWNrZ28uY29tL2wvP3VkZGc9aHR0cHMlM0ElMkYlMkZleGFtcGxlLmNvbSZydXQ9Li4uXG4gICAgLy8gICBodHRwczovL2R1Y2tkdWNrZ28uY29tL2wvP3VkZGc9aHR0cHMlM0ElMkYlMkZleGFtcGxlLmNvbVxuICAgIGlmICh1cmxPYmouaG9zdG5hbWUuaW5jbHVkZXMoJ2R1Y2tkdWNrZ28uY29tJykgfHwgdXJsT2JqLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9sJykpIHtcbiAgICAgIGNvbnN0IGRkZ1RhcmdldCA9XG4gICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KCd1ZGRnJykgfHxcbiAgICAgICAgdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoJ3UnKSB8fFxuICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLmdldCgncmRydXJsJyk7XG5cbiAgICAgIGlmIChkZGdUYXJnZXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGRkZ1RhcmdldCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHJldHVybiBkZGdUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHb29nbGUgcmVzdWx0IGxpbmtzIGNhbiBhbHNvIGJlIHdyYXBwZWQuXG4gICAgaWYgKHVybE9iai5wYXRobmFtZSA9PT0gJy91cmwnKSB7XG4gICAgICBjb25zdCBnb29nbGVUYXJnZXQgPSB1cmxPYmouc2VhcmNoUGFyYW1zLmdldCgncScpIHx8IHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KCd1cmwnKTtcbiAgICAgIGlmIChnb29nbGVUYXJnZXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGdvb2dsZVRhcmdldCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHJldHVybiBnb29nbGVUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXJsT2JqLnRvU3RyaW5nKCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REb21haW5Gcm9tVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzb2x2ZWRVcmwgPSBub3JtYWxpemVTZWFyY2hSZXN1bHRVcmwodXJsKTtcbiAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHJlc29sdmVkVXJsLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgcmV0dXJuIHVybE9iai5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgJycpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBTeW5jIHZlcnNpb24gZm9yIGJ1aWx0LWluIGNhdGVnb3JpZXMgYW5kIGN1c3RvbSBsaXN0c1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEZpbHRlclJlc3VsdFN5bmMoXG4gIGRvbWFpbjogc3RyaW5nLFxuICBzZXR0aW5nczogU2VhcmNoUmVzdWx0RmlsdGVyU2V0dGluZ3Ncbik6IHsgZmlsdGVyOiBib29sZWFuOyBjYXRlZ29yeT86IFNpdGVDYXRlZ29yeTsgcmVhc29uOiBzdHJpbmcgfSB7XG4gIC8vIENoZWNrIGFsbG93bGlzdFxuICBpZiAoc2V0dGluZ3MuY3VzdG9tQWxsb3dsaXN0LnNvbWUoYWxsb3dlZCA9PiBcbiAgICBkb21haW4gPT09IGFsbG93ZWQgfHwgZG9tYWluLmVuZHNXaXRoKCcuJyArIGFsbG93ZWQpXG4gICkpIHtcbiAgICByZXR1cm4geyBmaWx0ZXI6IGZhbHNlLCByZWFzb246ICdhbGxvd2xpc3QnIH07XG4gIH1cblxuICAvLyBDaGVjayBjYXRlZ29yeVxuICBjb25zdCBjYXRlZ29yeSA9IGdldENhdGVnb3J5Rm9yRG9tYWluKGRvbWFpbik7XG4gIGlmIChjYXRlZ29yeSAmJiBzZXR0aW5ncy5ibG9ja2VkQ2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICByZXR1cm4geyBmaWx0ZXI6IHRydWUsIGNhdGVnb3J5LCByZWFzb246ICdjYXRlZ29yeScgfTtcbiAgfVxuXG4gIC8vIENoZWNrIGN1c3RvbSBibG9ja2xpc3RcbiAgaWYgKHNldHRpbmdzLmN1c3RvbUJsb2NrbGlzdC5zb21lKGJsb2NrZWQgPT5cbiAgICBkb21haW4gPT09IGJsb2NrZWQgfHwgZG9tYWluLmVuZHNXaXRoKCcuJyArIGJsb2NrZWQpXG4gICkpIHtcbiAgICByZXR1cm4geyBmaWx0ZXI6IHRydWUsIHJlYXNvbjogJ2N1c3RvbScgfTtcbiAgfVxuXG4gIC8vIENoZWNrIGV4dGVybmFsIGJsb2NrbGlzdHMgKHN5bmMgdmVyc2lvbiB1c2VzIGNhY2hlZCBkYXRhKVxuICBpZiAoc2V0dGluZ3MudXNlRXh0ZXJuYWxCbG9ja2xpc3RzKSB7XG4gICAgaWYgKGlzRG9tYWluQmxvY2tlZFN5bmMoZG9tYWluKSkge1xuICAgICAgcmV0dXJuIHsgZmlsdGVyOiB0cnVlLCByZWFzb246ICdleHRlcm5hbF9ibG9ja2xpc3QnIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZmlsdGVyOiBmYWxzZSwgcmVhc29uOiAnbm9uZScgfTtcbn1cblxuLy8gQXN5bmMgdmVyc2lvbiB0aGF0IGFsc28gY2hlY2tzIGV4dGVybmFsIGJsb2NrbGlzdHNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG91bGRGaWx0ZXJSZXN1bHQoXG4gIGRvbWFpbjogc3RyaW5nLFxuICBzZXR0aW5nczogU2VhcmNoUmVzdWx0RmlsdGVyU2V0dGluZ3Ncbik6IFByb21pc2U8eyBmaWx0ZXI6IGJvb2xlYW47IGNhdGVnb3J5PzogU2l0ZUNhdGVnb3J5OyByZWFzb246IHN0cmluZyB9PiB7XG4gIC8vIENoZWNrIHN5bmMgY29uZGl0aW9ucyBmaXJzdFxuICBjb25zdCBzeW5jUmVzdWx0ID0gc2hvdWxkRmlsdGVyUmVzdWx0U3luYyhkb21haW4sIHNldHRpbmdzKTtcbiAgaWYgKHN5bmNSZXN1bHQuZmlsdGVyIHx8IHN5bmNSZXN1bHQucmVhc29uID09PSAnYWxsb3dsaXN0Jykge1xuICAgIHJldHVybiBzeW5jUmVzdWx0O1xuICB9XG5cbiAgLy8gQ2hlY2sgZXh0ZXJuYWwgYmxvY2tsaXN0cyBpZiBlbmFibGVkXG4gIGlmIChzZXR0aW5ncy51c2VFeHRlcm5hbEJsb2NrbGlzdHMpIHtcbiAgICBjb25zdCBibG9ja2VkID0gYXdhaXQgaXNEb21haW5CbG9ja2VkKGRvbWFpbik7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgIHJldHVybiB7IGZpbHRlcjogdHJ1ZSwgcmVhc29uOiAnZXh0ZXJuYWxfYmxvY2tsaXN0JyB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGZpbHRlcjogZmFsc2UsIHJlYXNvbjogJ25vbmUnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeUJhZGdlKGNhdGVnb3J5OiBTaXRlQ2F0ZWdvcnkpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGluZm8gPSBTSVRFX0NBVEVHT1JJRVMuZmluZChjID0+IGMuaWQgPT09IGNhdGVnb3J5KTtcbiAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJhZGdlLmNsYXNzTmFtZSA9ICdjYWxtd2ViLWNhdGVnb3J5LWJhZGdlJztcbiAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAwLjEpO1xuICAgIGNvbG9yOiAjNjM2NmYxO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYDtcbiAgYmFkZ2UudGV4dENvbnRlbnQgPSBgJHtpbmZvPy5pY29uIHx8ICfwn5qrJ30gJHtpbmZvPy5uYW1lIHx8IGNhdGVnb3J5fWA7XG4gIGJhZGdlLnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLWJhZGdlJywgY2F0ZWdvcnkpO1xuICByZXR1cm4gYmFkZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJTZWFyY2hSZXN1bHRzKFxuICBzZXR0aW5nczogU2VhcmNoUmVzdWx0RmlsdGVyU2V0dGluZ3MsXG4gIGVuZ2luZU92ZXJyaWRlPzogc3RyaW5nIHwgbnVsbFxuKTogeyB0b3RhbDogbnVtYmVyOyBmaWx0ZXJlZDogbnVtYmVyOyBieUNhdGVnb3J5OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+IH0ge1xuICBpZiAoIXNldHRpbmdzLmVuYWJsZWQpIHtcbiAgICBjb25zb2xlLmxvZygnW1NlYXJjaEZpbHRlcl0gRmlsdGVyaW5nIGRpc2FibGVkJyk7XG4gICAgcmV0dXJuIHsgdG90YWw6IDAsIGZpbHRlcmVkOiAwLCBieUNhdGVnb3J5OiB7fSB9O1xuICB9XG5cbiAgY29uc3QgZW5naW5lID0gZW5naW5lT3ZlcnJpZGUgPz8gZGV0ZWN0U2VhcmNoRW5naW5lKCk7XG4gIGlmICghZW5naW5lKSB7XG4gICAgY29uc29sZS5sb2coJ1tTZWFyY2hGaWx0ZXJdIE5vIHNlYXJjaCBlbmdpbmUgZGV0ZWN0ZWQnKTtcbiAgICByZXR1cm4geyB0b3RhbDogMCwgZmlsdGVyZWQ6IDAsIGJ5Q2F0ZWdvcnk6IHt9IH07XG4gIH1cblxuICBjb25zdCBzZWxlY3RvcnMgPSBTRUFSQ0hfU0VMRUNUT1JTW2VuZ2luZSBhcyBrZXlvZiB0eXBlb2YgU0VBUkNIX1NFTEVDVE9SU107XG4gIGlmICghc2VsZWN0b3JzKSB7XG4gICAgY29uc29sZS5sb2coJ1tTZWFyY2hGaWx0ZXJdIE5vIHNlbGVjdG9ycyBmb3IgZW5naW5lOicsIGVuZ2luZSk7XG4gICAgcmV0dXJuIHsgdG90YWw6IDAsIGZpbHRlcmVkOiAwLCBieUNhdGVnb3J5OiB7fSB9O1xuICB9XG5cbiAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLnJlc3VsdHMpO1xuXG4gIGxldCB0b3RhbCA9IDA7XG4gIGxldCBmaWx0ZXJlZCA9IDA7XG4gIGNvbnN0IGJ5Q2F0ZWdvcnk6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcblxuICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICBjb25zdCBsaW5rID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmxpbmspIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgIGlmICghbGluaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhyZWYgPSBsaW5rLmhyZWY7XG4gICAgaWYgKCFocmVmIHx8IGhyZWYuaW5jbHVkZXMoJ2R1Y2tkdWNrZ28uY29tJykgfHwgaHJlZi5pbmNsdWRlcygnamF2YXNjcmlwdDonKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRvbWFpbiA9IGV4dHJhY3REb21haW5Gcm9tVXJsKGhyZWYpO1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG90YWwrKztcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHQgPSBzaG91bGRGaWx0ZXJSZXN1bHRTeW5jKGRvbWFpbiwgc2V0dGluZ3MpO1xuXG4gICAgaWYgKGZpbHRlclJlc3VsdC5maWx0ZXIpIHtcbiAgICAgIGZpbHRlcmVkKys7XG5cbiAgICAgIGlmIChmaWx0ZXJSZXN1bHQuY2F0ZWdvcnkpIHtcbiAgICAgICAgYnlDYXRlZ29yeVtmaWx0ZXJSZXN1bHQuY2F0ZWdvcnldID0gKGJ5Q2F0ZWdvcnlbZmlsdGVyUmVzdWx0LmNhdGVnb3J5XSB8fCAwKSArIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5oaWRlQmxvY2tlZCkge1xuICAgICAgICAocmVzdWx0IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItZmlsdGVyZWQnLCAndHJ1ZScpO1xuICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcmVhc29uJywgZmlsdGVyUmVzdWx0LnJlYXNvbik7XG4gICAgICAgIGlmIChmaWx0ZXJSZXN1bHQuY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItY2F0ZWdvcnknLCBmaWx0ZXJSZXN1bHQuY2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FsbXdlYjpzZWFyY2hGaWx0ZXJlZCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHsgZG9tYWluLCByZWFzb246IGZpbHRlclJlc3VsdC5yZWFzb24sIGNhdGVnb3J5OiBmaWx0ZXJSZXN1bHQuY2F0ZWdvcnkgfVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy50aXRsZSk7XG4gICAgICAgIGlmICh0aXRsZSAmJiAhdGl0bGUucXVlcnlTZWxlY3RvcignLmNhbG13ZWItY2F0ZWdvcnktYmFkZ2UnKSkge1xuICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZUNhdGVnb3J5QmFkZ2UoZmlsdGVyUmVzdWx0LmNhdGVnb3J5IHx8ICdjdXN0b20nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLWZsYWdnZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbnJldHVybiB7IHRvdGFsLCBmaWx0ZXJlZCwgYnlDYXRlZ29yeSB9O1xufVxuXG4vLyBBc3luYyB2ZXJzaW9uIHRoYXQgaW5jbHVkZXMgZXh0ZXJuYWwgYmxvY2tsaXN0c1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbHRlclNlYXJjaFJlc3VsdHNBc3luYyhcbiAgc2V0dGluZ3M6IFNlYXJjaFJlc3VsdEZpbHRlclNldHRpbmdzLFxuICBlbmdpbmVPdmVycmlkZT86IHN0cmluZyB8IG51bGxcbik6IFByb21pc2U8eyB0b3RhbDogbnVtYmVyOyBmaWx0ZXJlZDogbnVtYmVyOyBieUNhdGVnb3J5OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+IH0+IHtcbiAgaWYgKCFzZXR0aW5ncy5lbmFibGVkKSB7XG4gICAgcmV0dXJuIHsgdG90YWw6IDAsIGZpbHRlcmVkOiAwLCBieUNhdGVnb3J5OiB7fSB9O1xuICB9XG5cbiAgY29uc3QgZW5naW5lID0gZW5naW5lT3ZlcnJpZGUgPz8gZGV0ZWN0U2VhcmNoRW5naW5lKCk7XG4gIGlmICghZW5naW5lKSB7XG4gICAgcmV0dXJuIHsgdG90YWw6IDAsIGZpbHRlcmVkOiAwLCBieUNhdGVnb3J5OiB7fSB9O1xuICB9XG5cbiAgY29uc3Qgc2VsZWN0b3JzID0gU0VBUkNIX1NFTEVDVE9SU1tlbmdpbmUgYXMga2V5b2YgdHlwZW9mIFNFQVJDSF9TRUxFQ1RPUlNdO1xuICBpZiAoIXNlbGVjdG9ycykge1xuICAgIHJldHVybiB7IHRvdGFsOiAwLCBmaWx0ZXJlZDogMCwgYnlDYXRlZ29yeToge30gfTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5yZXN1bHRzKTtcbiAgbGV0IHRvdGFsID0gMDtcbiAgbGV0IGZpbHRlcmVkID0gMDtcbiAgY29uc3QgYnlDYXRlZ29yeTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuXG4gIGZvciAoY29uc3QgcmVzdWx0IG9mIEFycmF5LmZyb20ocmVzdWx0cykpIHtcbiAgICBjb25zdCBsaW5rID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmxpbmspIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgIGlmICghbGluaykgY29udGludWU7XG5cbiAgICBjb25zdCBocmVmID0gbGluay5ocmVmO1xuICAgIGNvbnN0IGRvbWFpbiA9IGV4dHJhY3REb21haW5Gcm9tVXJsKGhyZWYpO1xuICAgIGlmICghZG9tYWluKSBjb250aW51ZTtcblxuICAgIHRvdGFsKys7XG4gICAgY29uc3QgZmlsdGVyUmVzdWx0ID0gYXdhaXQgc2hvdWxkRmlsdGVyUmVzdWx0KGRvbWFpbiwgc2V0dGluZ3MpO1xuXG4gICAgaWYgKGZpbHRlclJlc3VsdC5maWx0ZXIpIHtcbiAgICAgIGZpbHRlcmVkKys7XG4gICAgICBcbiAgICAgIGlmIChmaWx0ZXJSZXN1bHQuY2F0ZWdvcnkpIHtcbiAgICAgICAgYnlDYXRlZ29yeVtmaWx0ZXJSZXN1bHQuY2F0ZWdvcnldID0gKGJ5Q2F0ZWdvcnlbZmlsdGVyUmVzdWx0LmNhdGVnb3J5XSB8fCAwKSArIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5oaWRlQmxvY2tlZCkge1xuICAgICAgICAocmVzdWx0IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItZmlsdGVyZWQnLCAndHJ1ZScpO1xuICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcmVhc29uJywgZmlsdGVyUmVzdWx0LnJlYXNvbik7XG4gICAgICAgIGlmIChmaWx0ZXJSZXN1bHQuY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItY2F0ZWdvcnknLCBmaWx0ZXJSZXN1bHQuY2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FsbXdlYjpzZWFyY2hGaWx0ZXJlZCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHsgZG9tYWluLCByZWFzb246IGZpbHRlclJlc3VsdC5yZWFzb24sIGNhdGVnb3J5OiBmaWx0ZXJSZXN1bHQuY2F0ZWdvcnkgfVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy50aXRsZSk7XG4gICAgICAgIGlmICh0aXRsZSAmJiAhdGl0bGUucXVlcnlTZWxlY3RvcignLmNhbG13ZWItY2F0ZWdvcnktYmFkZ2UnKSkge1xuICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZUNhdGVnb3J5QmFkZ2UoZmlsdGVyUmVzdWx0LmNhdGVnb3J5IHx8ICdjdXN0b20nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLWZsYWdnZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2V0dGluZ3Muc2hvd0NhdGVnb3J5QmFkZ2UpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZ2V0Q2F0ZWdvcnlGb3JEb21haW4oZG9tYWluKTtcbiAgICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy50aXRsZSk7XG4gICAgICAgIGlmICh0aXRsZSAmJiAhdGl0bGUucXVlcnlTZWxlY3RvcignLmNhbG13ZWItY2F0ZWdvcnktYmFkZ2UnKSkge1xuICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZUNhdGVnb3J5QmFkZ2UoY2F0ZWdvcnkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHRvdGFsLCBmaWx0ZXJlZCwgYnlDYXRlZ29yeSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5maWx0ZXJTZWFyY2hSZXN1bHRzKCk6IHZvaWQge1xuICBjb25zdCBmaWx0ZXJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNhbG13ZWItZmlsdGVyZWRdLCBbZGF0YS1jYWxtd2ViLWZsYWdnZWRdJyk7XG4gIGZpbHRlcmVkLmZvckVhY2goZWwgPT4ge1xuICAgIChlbCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLWZpbHRlcmVkJyk7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNhbG13ZWItZmxhZ2dlZCcpO1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXJlYXNvbicpO1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLWNhdGVnb3J5Jyk7XG4gIH0pO1xuXG4gIGNvbnN0IGJhZGdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxtd2ViLWNhdGVnb3J5LWJhZGdlJyk7XG4gIGJhZGdlcy5mb3JFYWNoKGJhZGdlID0+IGJhZGdlLnJlbW92ZSgpKTtcbn1cbiIsIi8qKlxuICogQWN0aXZpdHkgT3ZlcmxheVxuICpcbiAqIEZsb2F0aW5nIHBhbmVsIHRoYXQgc2hvd3MgcmVhbC10aW1lIGZpbHRlcmluZyBhY3Rpdml0eTpcbiAqIC0gTmV1dHJhbGl6ZWQgaGVhZGxpbmVzIChiZWZvcmUg4oaSIGFmdGVyKVxuICogLSBCbG9ja2VkIHNpdGVzXG4gKiAtIEZpbHRlcmVkIG1lZGlhXG4gKiAtIFNlYXJjaCByZXN1bHRzIGhpZGRlblxuICovXG5cbmltcG9ydCB7IHNlbmRUb0JhY2tncm91bmQgfSBmcm9tICdAZHJhY29uL3d4dC1zaGFyZWQvZXh0ZW5zaW9uJztcbmltcG9ydCB7IE1FU1NBR0VfVFlQRVMgfSBmcm9tICdAL3NyYy9tZXNzYWdpbmcnO1xuaW1wb3J0IHR5cGUgeyBVc2VyU2V0dGluZ3MgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuXG5jb25zdCBPVkVSTEFZX0lEID0gJ2NhbG13ZWItYWN0aXZpdHktb3ZlcmxheSc7XG5jb25zdCBTVFlMRVNfSUQgPSAnY2FsbXdlYi1hY3Rpdml0eS1zdHlsZXMnO1xuXG5pbnRlcmZhY2UgQWN0aXZpdHlJdGVtIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogJ25ldXRyYWxpemVkJyB8ICdibG9ja2VkJyB8ICdtZWRpYScgfCAnc2VhcmNoJztcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIGJlZm9yZTogc3RyaW5nO1xuICBhZnRlcj86IHN0cmluZztcbiAgcmVhc29uPzogc3RyaW5nO1xufVxuXG5sZXQgYWN0aXZpdGllczogQWN0aXZpdHlJdGVtW10gPSBbXTtcbmxldCBtYXhBY3Rpdml0aWVzID0gMjA7XG5sZXQgb3ZlcmxheTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbmxldCBpc0V4cGFuZGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluamVjdFN0eWxlcygpOiB2b2lkIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNUWUxFU19JRCkpIHJldHVybjtcblxuICBjb25zdCBzdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZXMuaWQgPSBTVFlMRVNfSUQ7XG4gIHN0eWxlcy50ZXh0Q29udGVudCA9IGBcbiAgICAjJHtPVkVSTEFZX0lEfSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDIwcHg7XG4gICAgICBsZWZ0OiAyMHB4O1xuICAgICAgei1pbmRleDogMjE0NzQ4MzY0NztcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWExYTJlIDAlLCAjMTYyMTNlIDEwMCUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaGVhZGVyOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWljb24ge1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjOGI1Y2Y2IDEwMCUpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1jb3VudCB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogIzIyYzU1ZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1iYWRnZS5lbXB0eSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNmI3MjgwO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LXBhbmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBhbmltYXRpb246IHNsaWRlVXAgMC4ycyBlYXNlO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LXBhbmVsLnZpc2libGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS10YWJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktdGFiIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktdGFiOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktdGFiLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzYzNjZmMTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2MzY2ZjE7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktbGlzdCB7XG4gICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLm5ldXRyYWxpemVkIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzhiNWNmNjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLmJsb2NrZWQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWY0NDQ0O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW0ubWVkaWEge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjM2I4MmY2O1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWl0ZW0uc2VhcmNoIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y1OWUwYjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaXRlbS5uZXV0cmFsaXplZCAuY2FsbXdlYi1hY3Rpdml0eS1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWRlOWZlO1xuICAgICAgY29sb3I6ICM3YzNhZWQ7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktaXRlbS5ibG9ja2VkIC5jYWxtd2ViLWFjdGl2aXR5LWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gICAgICBjb2xvcjogI2RjMjYyNjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLm1lZGlhIC5jYWxtd2ViLWFjdGl2aXR5LWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkYmVhZmU7XG4gICAgICBjb2xvcjogIzI1NjNlYjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1pdGVtLnNlYXJjaCAuY2FsbXdlYi1hY3Rpdml0eS1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICAgICAgY29sb3I6ICNkOTc3MDY7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktYmVmb3JlIHtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWFmdGVyIHtcbiAgICAgIGNvbG9yOiAjMTExODI3O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLmNhbG13ZWItYWN0aXZpdHktYXJyb3cge1xuICAgICAgY29sb3I6ICM5Y2EzYWY7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgIH1cblxuICAgIC5jYWxtd2ViLWFjdGl2aXR5LWVtcHR5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBjb2xvcjogIzljYTNhZjtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS1lbXB0eS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuY2FsbXdlYi1hY3Rpdml0eS10aW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGNvbG9yOiAjOWNhM2FmO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbiAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZXMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pZCA9IE9WRVJMQVlfSUQ7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWljb25cIj7wn5uh77iPPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRpdGxlXCI+Q2FsbVdlYjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1jb3VudFwiPjAgaXRlbXMgZmlsdGVyZWQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktYmFkZ2UgZW1wdHlcIj4wPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktcGFuZWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRhYnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGFiIGFjdGl2ZVwiIGRhdGEtdGFiPVwiYWxsXCI+QWxsPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRhYlwiIGRhdGEtdGFiPVwibmV1dHJhbGl6ZWRcIj5UZXh0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRhYlwiIGRhdGEtdGFiPVwiYmxvY2tlZFwiPlNpdGVzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LXRhYlwiIGRhdGEtdGFiPVwibWVkaWFcIj5NZWRpYTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1saXN0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgY29uc3QgaGVhZGVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLWFjdGl2aXR5LWhlYWRlcicpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBwYW5lbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi1hY3Rpdml0eS1wYW5lbCcpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCB0YWJzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxtd2ViLWFjdGl2aXR5LXRhYicpO1xuXG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpc0V4cGFuZGVkID0gIWlzRXhwYW5kZWQ7XG4gICAgcGFuZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScsIGlzRXhwYW5kZWQpO1xuICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICByZW5kZXJMaXN0KCdhbGwnKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICByZW5kZXJMaXN0KCh0YWIgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQudGFiIHx8ICdhbGwnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFkZ2UoKTogdm9pZCB7XG4gIGlmICghb3ZlcmxheSkgcmV0dXJuO1xuXG4gIGNvbnN0IGNvdW50ID0gYWN0aXZpdGllcy5sZW5ndGg7XG4gIGNvbnN0IGJhZGdlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi1hY3Rpdml0eS1iYWRnZScpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBjb3VudFRleHQgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLWFjdGl2aXR5LWNvdW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgYmFkZ2UudGV4dENvbnRlbnQgPSBjb3VudC50b1N0cmluZygpO1xuICBiYWRnZS5jbGFzc0xpc3QudG9nZ2xlKCdlbXB0eScsIGNvdW50ID09PSAwKTtcbiAgY291bnRUZXh0LnRleHRDb250ZW50ID0gYCR7Y291bnR9IGl0ZW0ke2NvdW50ICE9PSAxID8gJ3MnIDogJyd9IGZpbHRlcmVkYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdChmaWx0ZXI6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIW92ZXJsYXkpIHJldHVybjtcblxuICBjb25zdCBsaXN0ID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuY2FsbXdlYi1hY3Rpdml0eS1saXN0JykgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyID09PSAnYWxsJyBcbiAgICA/IGFjdGl2aXRpZXMgXG4gICAgOiBhY3Rpdml0aWVzLmZpbHRlcihhID0+IGEudHlwZSA9PT0gZmlsdGVyKTtcblxuICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgbGlzdC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1lbXB0eVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1lbXB0eS1pY29uXCI+4pyoPC9kaXY+XG4gICAgICAgIDxkaXY+Tm8gcmVjZW50IGFjdGl2aXR5PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxpc3QuaW5uZXJIVE1MID0gZmlsdGVyZWQubWFwKGl0ZW0gPT4ge1xuICAgIGNvbnN0IHRpbWVBZ28gPSBnZXRUaW1lQWdvKGl0ZW0udGltZXN0YW1wKTtcbiAgICBjb25zdCB0eXBlTGFiZWwgPSB7XG4gICAgICBuZXV0cmFsaXplZDogJ05ldXRyYWxpemVkJyxcbiAgICAgIGJsb2NrZWQ6ICdCbG9ja2VkJyxcbiAgICAgIG1lZGlhOiAnTWVkaWEnLFxuICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICB9W2l0ZW0udHlwZV07XG5cbiAgICBpZiAoaXRlbS50eXBlID09PSAnbmV1dHJhbGl6ZWQnICYmIGl0ZW0uYWZ0ZXIpIHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWl0ZW0gJHtpdGVtLnR5cGV9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktbGFiZWxcIj4ke3R5cGVMYWJlbH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1iZWZvcmVcIj4ke2VzY2FwZUh0bWwoaXRlbS5iZWZvcmUpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxtd2ViLWFjdGl2aXR5LWFycm93XCI+4oaTPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktYWZ0ZXJcIj4ke2VzY2FwZUh0bWwoaXRlbS5hZnRlcil9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGltZVwiPiR7dGltZUFnb308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1pdGVtICR7aXRlbS50eXBlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1sYWJlbFwiPiR7dHlwZUxhYmVsfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS1hZnRlclwiPiR7ZXNjYXBlSHRtbChpdGVtLmJlZm9yZSl9PC9kaXY+XG4gICAgICAgICR7aXRlbS5yZWFzb24gPyBgPGRpdiBjbGFzcz1cImNhbG13ZWItYWN0aXZpdHktdGltZVwiPiR7aXRlbS5yZWFzb259PC9kaXY+YCA6ICcnfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbXdlYi1hY3Rpdml0eS10aW1lXCI+JHt0aW1lQWdvfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBkaXYuaW5uZXJIVE1MO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lQWdvKHRpbWVzdGFtcDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aW1lc3RhbXApIC8gMTAwMCk7XG4gIGlmIChzZWNvbmRzIDwgNjApIHJldHVybiAnSnVzdCBub3cnO1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICBpZiAobWludXRlcyA8IDYwKSByZXR1cm4gYCR7bWludXRlc31tIGFnb2A7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICByZXR1cm4gYCR7aG91cnN9aCBhZ29gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWN0aXZpdHkoaXRlbTogT21pdDxBY3Rpdml0eUl0ZW0sICdpZCcgfCAndGltZXN0YW1wJz4pOiB2b2lkIHtcbiAgYWN0aXZpdGllcy51bnNoaWZ0KHtcbiAgICAuLi5pdGVtLFxuICAgIGlkOiBgJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpfWAsXG4gICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICB9KTtcblxuICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPiBtYXhBY3Rpdml0aWVzKSB7XG4gICAgYWN0aXZpdGllcyA9IGFjdGl2aXRpZXMuc2xpY2UoMCwgbWF4QWN0aXZpdGllcyk7XG4gIH1cblxuICB1cGRhdGVCYWRnZSgpO1xuXG4gIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgY29uc3QgYWN0aXZlVGFiID0gb3ZlcmxheT8ucXVlcnlTZWxlY3RvcignLmNhbG13ZWItYWN0aXZpdHktdGFiLmFjdGl2ZScpIGFzIEhUTUxFbGVtZW50O1xuICAgIHJlbmRlckxpc3QoYWN0aXZlVGFiPy5kYXRhc2V0LnRhYiB8fCAnYWxsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ05ldXRyYWxpemVkKGJlZm9yZTogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogdm9pZCB7XG4gIGFkZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnbmV1dHJhbGl6ZWQnLFxuICAgIGJlZm9yZSxcbiAgICBhZnRlcixcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dCbG9ja2VkKGRvbWFpbjogc3RyaW5nLCByZWFzb246IHN0cmluZyk6IHZvaWQge1xuICBhZGRBY3Rpdml0eSh7XG4gICAgdHlwZTogJ2Jsb2NrZWQnLFxuICAgIGJlZm9yZTogZG9tYWluLFxuICAgIHJlYXNvbixcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dNZWRpYShhbHRUZXh0OiBzdHJpbmcsIGFjdGlvbjogJ2JsdXJyZWQnIHwgJ2hpZGRlbicpOiB2b2lkIHtcbiAgYWRkQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdtZWRpYScsXG4gICAgYmVmb3JlOiBhbHRUZXh0IHx8ICdJbWFnZScsXG4gICAgYWZ0ZXI6IGFjdGlvbiA9PT0gJ2JsdXJyZWQnID8gJ0JsdXJyZWQnIDogJ0hpZGRlbicsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nU2VhcmNoKGRvbWFpbjogc3RyaW5nKTogdm9pZCB7XG4gIGFkZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnc2VhcmNoJyxcbiAgICBiZWZvcmU6IGRvbWFpbixcbiAgICByZWFzb246ICdIaWRkZW4gZnJvbSByZXN1bHRzJyxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0QWN0aXZpdHlPdmVybGF5KCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCkpIHtcbiAgICBjb25zb2xlLmxvZygnW0FjdGl2aXR5T3ZlcmxheV0gQWxyZWFkeSBpbml0aWFsaXplZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBTdGFydGluZyBpbml0aWFsaXphdGlvbi4uLicpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kPFVzZXJTZXR0aW5ncz4oeyBcbiAgICAgIHR5cGU6IE1FU1NBR0VfVFlQRVMuR0VUX1NFVFRJTkdTIFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ1tBY3Rpdml0eU92ZXJsYXldIFNldHRpbmdzIHJlY2VpdmVkOicsIHNldHRpbmdzKTtcblxuICAgIC8vIFNob3cgb3ZlcmxheSBpZiBhbnkgZmlsdGVyaW5nIGlzIGVuYWJsZWRcbiAgICBjb25zdCBzaG91bGRTaG93ID0gc2V0dGluZ3M/LmVuYWJsZWQgJiYgKFxuICAgICAgc2V0dGluZ3MubmV1dHJhbGl6YXRpb24/LmVuYWJsZWQgfHxcbiAgICAgIHNldHRpbmdzLm1lZGlhRmlsdGVyPy5lbmFibGVkIHx8XG4gICAgICBzZXR0aW5ncy5zaXRlRmlsdGVyPy5lbmFibGVkXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBzaG91bGRTaG93OicsIHNob3VsZFNob3csICdlbmFibGVkOicsIHNldHRpbmdzPy5lbmFibGVkLCAnbmV1dHJhbGl6YXRpb246Jywgc2V0dGluZ3M/Lm5ldXRyYWxpemF0aW9uPy5lbmFibGVkLCAnbWVkaWFGaWx0ZXI6Jywgc2V0dGluZ3M/Lm1lZGlhRmlsdGVyPy5lbmFibGVkLCAnc2l0ZUZpbHRlcjonLCBzZXR0aW5ncz8uc2l0ZUZpbHRlcj8uZW5hYmxlZCk7XG5cbiAgICBpZiAoIXNob3VsZFNob3cpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBOb3Qgc2hvd2luZyBvdmVybGF5IC0gZmlsdGVyaW5nIGRpc2FibGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5qZWN0U3R5bGVzKCk7XG4gICAgb3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIGNvbnNvbGUubG9nKCdbQWN0aXZpdHlPdmVybGF5XSBPdmVybGF5IGFkZGVkIHRvIHBhZ2UnKTtcblxuICAgIC8vIExpc3RlbiBmb3IgZXZlbnRzIGZyb20gY29udGVudCBzY3JpcHRzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbG13ZWI6bmV1dHJhbGl6ZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBsb2dOZXV0cmFsaXplZChlLmRldGFpbC5iZWZvcmUsIGUuZGV0YWlsLmFmdGVyKTtcbiAgICB9KSBhcyBFdmVudExpc3RlbmVyKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjYWxtd2ViOmJsb2NrZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBsb2dCbG9ja2VkKGUuZGV0YWlsLmRvbWFpbiwgZS5kZXRhaWwucmVhc29uKTtcbiAgICB9KSBhcyBFdmVudExpc3RlbmVyKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjYWxtd2ViOm1lZGlhRmlsdGVyZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBsb2dNZWRpYShlLmRldGFpbC5hbHRUZXh0LCBlLmRldGFpbC5hY3Rpb24pO1xuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbG13ZWI6c2VhcmNoRmlsdGVyZWQnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBsb2dTZWFyY2goZS5kZXRhaWwuZG9tYWluKTtcbiAgICB9KSBhcyBFdmVudExpc3RlbmVyKTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tBY3Rpdml0eU92ZXJsYXldIEZhaWxlZCB0byBpbml0aWFsaXplOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZpdHlDb3VudCgpOiBudW1iZXIge1xuICByZXR1cm4gYWN0aXZpdGllcy5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFjdGl2aXRpZXMoKTogdm9pZCB7XG4gIGFjdGl2aXRpZXMgPSBbXTtcbiAgdXBkYXRlQmFkZ2UoKTtcbiAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICByZW5kZXJMaXN0KCdhbGwnKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBTZWFyY2ggRmlsdGVyIENvbnRlbnQgU2NyaXB0XG4gKlxuICogRmlsdGVycyBzZWFyY2ggcmVzdWx0cyBvbiBHb29nbGUsIEJpbmcsIER1Y2tEdWNrR28gdG8gaGlkZSBibG9ja2VkIHNpdGVzLlxuICogQWxzbyBzdXBwb3J0cyByZWRpcmVjdGluZyBhbGwgc2VhcmNoIHRvIER1Y2tEdWNrR28uXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lQ29udGVudFNjcmlwdCB9IGZyb20gJ3d4dC91dGlscy9kZWZpbmUtY29udGVudC1zY3JpcHQnO1xuaW1wb3J0IHsgc2VuZFRvQmFja2dyb3VuZCB9IGZyb20gJ0BkcmFjb24vd3h0LXNoYXJlZC9leHRlbnNpb24nO1xuaW1wb3J0IHsgTUVTU0FHRV9UWVBFUyB9IGZyb20gJ0Avc3JjL21lc3NhZ2luZyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJTZXR0aW5ncyB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5pbXBvcnQgeyBcbiAgZmlsdGVyU2VhcmNoUmVzdWx0cywgXG4gIHVuZmlsdGVyU2VhcmNoUmVzdWx0cyxcbiAgZGV0ZWN0U2VhcmNoRW5naW5lLFxuICByZWRpcmVjdFRvRHVja0R1Y2tHb1xufSBmcm9tICdAL3NyYy9maWx0ZXIvc2VhcmNoLWZpbHRlcic7XG5pbXBvcnQgeyBpbml0QWN0aXZpdHlPdmVybGF5IH0gZnJvbSAnQC9zcmMvdWkvYWN0aXZpdHktb3ZlcmxheSc7XG5cbmxldCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsO1xubGV0IGRlYm91bmNlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZXN1bHRzKCk6IHZvaWQge1xuICBjb25zdCBzZXR0aW5ncyA9IGdldEN1cnJlbnRTZXR0aW5ncygpO1xuICBpZiAoIXNldHRpbmdzKSB7XG4gICAgY29uc29sZS5sb2coJ1tTZWFyY2hGaWx0ZXJdIE5vIHNldHRpbmdzIGF2YWlsYWJsZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGVuZ2luZSA9IGRldGVjdFNlYXJjaEVuZ2luZSgpO1xuICBjb25zb2xlLmxvZygnW1NlYXJjaEZpbHRlcl0gcHJvY2Vzc1Jlc3VsdHMgLSBlbmdpbmU6JywgZW5naW5lLCAncmVkaXJlY3RUb0RERzonLCAoc2V0dGluZ3Muc2l0ZUZpbHRlciBhcyBhbnkpPy5yZWRpcmVjdFRvRERHKTtcblxuICAvLyBSZWRpcmVjdCBpcyBkaXNhYmxlZCAtIHVzZXJzIGNhbiBzZXQgRERHIGFzIHRoZWlyIGJyb3dzZXIgZGVmYXVsdCBpZiBkZXNpcmVkXG4gIC8vIGNvbnN0IHNmID0gc2V0dGluZ3Muc2l0ZUZpbHRlciBhcyBhbnk7XG4gIC8vIGlmIChzZj8ucmVkaXJlY3RUb0RERyAmJiBlbmdpbmUgIT09ICdkdWNrZHVja2dvJykge1xuICAvLyAgIGNvbnNvbGUubG9nKCdbU2VhcmNoRmlsdGVyXSBSZWRpcmVjdCB0byBEREcgZW5hYmxlZCwgcmVkaXJlY3RpbmcuLi4nKTtcbiAgLy8gICByZWRpcmVjdFRvRHVja0R1Y2tHbygpO1xuICAvLyAgIHJldHVybjtcbiAgLy8gfVxuXG4gIGlmIChzZXR0aW5ncz8uc2l0ZUZpbHRlcj8uc2VhcmNoRmlsdGVyRW5hYmxlZCkge1xuICAgIGNvbnNvbGUubG9nKCdbU2VhcmNoRmlsdGVyXSBQcm9jZXNzaW5nIHJlc3VsdHMgd2l0aCBzZXR0aW5nczonLCB7XG4gICAgICBoaWRlQmxvY2tlZDogc2V0dGluZ3Muc2l0ZUZpbHRlci5oaWRlQmxvY2tlZFJlc3VsdHMsXG4gICAgICB1c2VFeHRlcm5hbEJsb2NrbGlzdHM6IHNldHRpbmdzLnNpdGVGaWx0ZXIudXNlRXh0ZXJuYWxCbG9ja2xpc3RzLFxuICAgICAgYmxvY2tlZENhdGVnb3JpZXM6IHNldHRpbmdzLnNpdGVGaWx0ZXIuYmxvY2tlZENhdGVnb3JpZXM/Lmxlbmd0aCB8fCAwXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyU2VhcmNoUmVzdWx0cyh7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgaGlkZUJsb2NrZWQ6IHNldHRpbmdzLnNpdGVGaWx0ZXIuaGlkZUJsb2NrZWRSZXN1bHRzID8/IHRydWUsXG4gICAgICBzaG93Q2F0ZWdvcnlCYWRnZTogc2V0dGluZ3Muc2l0ZUZpbHRlci5zaG93Q2F0ZWdvcnlCYWRnZSA/PyB0cnVlLFxuICAgICAgYmxvY2tlZENhdGVnb3JpZXM6IHNldHRpbmdzLnNpdGVGaWx0ZXIuYmxvY2tlZENhdGVnb3JpZXMgPz8gW10sXG4gICAgICBjdXN0b21CbG9ja2xpc3Q6IHNldHRpbmdzLnNpdGVGaWx0ZXIuY3VzdG9tQmxvY2tsaXN0ID8/IFtdLFxuICAgICAgY3VzdG9tQWxsb3dsaXN0OiBzZXR0aW5ncy5zaXRlRmlsdGVyLmN1c3RvbUFsbG93bGlzdCA/PyBbXSxcbiAgICAgIHVzZUV4dGVybmFsQmxvY2tsaXN0czogc2V0dGluZ3Muc2l0ZUZpbHRlci51c2VFeHRlcm5hbEJsb2NrbGlzdHMgPz8gdHJ1ZSxcbiAgICB9KTtcbiAgICBcbiAgICBpZiAocmVzdWx0LmZpbHRlcmVkID4gMCkge1xuICAgICAgY29uc29sZS5sb2coYFtTZWFyY2hGaWx0ZXJdIEZpbHRlcmVkICR7cmVzdWx0LmZpbHRlcmVkfS8ke3Jlc3VsdC50b3RhbH0gcmVzdWx0c2AsIHJlc3VsdC5ieUNhdGVnb3J5KTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC50b3RhbCA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbU2VhcmNoRmlsdGVyXSBGb3VuZCAke3Jlc3VsdC50b3RhbH0gcmVzdWx0cywgZmlsdGVyZWQgJHtyZXN1bHQuZmlsdGVyZWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbU2VhcmNoRmlsdGVyXSBObyByZXN1bHRzIGZvdW5kIHdpdGggY3VycmVudCBzZWxlY3RvcnMnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ1tTZWFyY2hGaWx0ZXJdIFNlYXJjaCBmaWx0ZXIgbm90IGVuYWJsZWQgaW4gc2V0dGluZ3MnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZWRQcm9jZXNzKCk6IHZvaWQge1xuICBpZiAoZGVib3VuY2VUaW1lcikgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dChwcm9jZXNzUmVzdWx0cywgMjAwKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRPYnNlcnZlcigpOiB2b2lkIHtcbiAgaWYgKG9ic2VydmVyKSByZXR1cm47XG5cbiAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSkge1xuICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciB2YXJpb3VzIHNlYXJjaCBlbmdpbmUgcmVzdWx0IGNvbnRhaW5lcnNcbiAgICAgICAgICAgIC8vIERERzogI3JlYWN0LWxheW91dCwgLnJlc3VsdHMsICNsaW5rc1xuICAgICAgICAgICAgLy8gR29vZ2xlOiAjc2VhcmNoLCBbZGF0YS1zb2tvYmFuLWNvbnRhaW5lcl1cbiAgICAgICAgICAgIC8vIEJpbmc6ICNiX3Jlc3VsdHNcbiAgICAgICAgICAgIGNvbnN0IGlzUmVzdWx0c0NvbnRhaW5lciA9IFxuICAgICAgICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gsICNiX3Jlc3VsdHMsICNsaW5rcywgW2RhdGEtc29rb2Jhbi1jb250YWluZXJdLCAucmVzdWx0cywgLnNlYXJjaFJlc3VsdHMsIG9sLnJlYWN0LXJlc3VsdHMtLW1haW4sICNyZWFjdC1sYXlvdXQnKSB8fFxuICAgICAgICAgICAgICBub2RlLmlkID09PSAncmVhY3QtbGF5b3V0JyB8fFxuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucygncmVzdWx0cycpIHx8XG4gICAgICAgICAgICAgIG5vZGUuY2xvc2VzdCgnI3JlYWN0LWxheW91dCwgLnJlc3VsdHMsICNsaW5rcycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXNSZXN1bHRzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU2VhcmNoRmlsdGVyXSBEZXRlY3RlZCBzZWFyY2ggcmVzdWx0cyBjb250YWluZXInKTtcbiAgICAgICAgICAgICAgZGVib3VuY2VkUHJvY2VzcygpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgfSk7XG59XG5cbmxldCBjdXJyZW50U2V0dGluZ3M6IFVzZXJTZXR0aW5ncyB8IG51bGwgPSBudWxsO1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNldHRpbmdzKCk6IFVzZXJTZXR0aW5ncyB8IG51bGwge1xuICByZXR1cm4gY3VycmVudFNldHRpbmdzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBlbmdpbmUgPSBkZXRlY3RTZWFyY2hFbmdpbmUoKTtcbiAgaWYgKCFlbmdpbmUpIHtcbiAgICBjb25zb2xlLmxvZygnW1NlYXJjaEZpbHRlcl0gTm8gc2VhcmNoIGVuZ2luZSBkZXRlY3RlZCBvbjonLCB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGBbU2VhcmNoRmlsdGVyXSBEZXRlY3RlZCAke2VuZ2luZX0sIGluaXRpYWxpemluZy4uLmApO1xuXG4gIC8vIENoZWNrIHJlZGlyZWN0IHNldHRpbmcgaW1tZWRpYXRlbHkgYW5kIHJlZGlyZWN0IGJlZm9yZSBhbnl0aGluZyBlbHNlXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RvcmVkID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjYWxtd2ViLXNldHRpbmdzJyk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBzdG9yZWRbJ2NhbG13ZWItc2V0dGluZ3MnXTtcbiAgICBjb25zb2xlLmxvZygnW1NlYXJjaEZpbHRlcl0gUmVkaXJlY3QgY2hlY2sgLSBzZXR0aW5nczonLCBzZXR0aW5ncz8uc2l0ZUZpbHRlcj8ucmVkaXJlY3RUb0RERywgJ3N0b3JlZDonLCBzdG9yZWQpO1xuICAgIFxuICAgIC8vIEZPUkNFIGRpc2FibGUgcmVkaXJlY3QgLSB0aGlzIHNldHRpbmcgc2hvdWxkIGFsd2F5cyBiZSBmYWxzZVxuICAgIC8vIFVzZXJzIHdobyB3YW50IERERyBjYW4gc2V0IGl0IGFzIHRoZWlyIGJyb3dzZXIgZGVmYXVsdCBzZWFyY2ggZW5naW5lXG4gICAgY29uc3Qgc2hvdWxkUmVkaXJlY3QgPSBmYWxzZTtcblxuICAgIGlmIChzaG91bGRSZWRpcmVjdCAmJiBlbmdpbmUgIT09ICdkdWNrZHVja2dvJykge1xuICAgICAgY29uc29sZS5sb2coJ1tTZWFyY2hGaWx0ZXJdIFJlZGlyZWN0IHRvIERERyBlbmFibGVkLCByZWRpcmVjdGluZyBpbW1lZGlhdGVseS4uLicpO1xuICAgICAgcmVkaXJlY3RUb0R1Y2tEdWNrR28oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnW1NlYXJjaEZpbHRlcl0gQ291bGQgbm90IHJlYWQgcmVkaXJlY3Qgc2V0dGluZzonLCBlKTtcbiAgfVxuXG4gIGluaXRBY3Rpdml0eU92ZXJsYXkoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGZ1bGxTZXR0aW5ncyA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQ8VXNlclNldHRpbmdzPih7IFxuICAgICAgdHlwZTogTUVTU0FHRV9UWVBFUy5HRVRfU0VUVElOR1MgXG4gICAgfSk7XG5cbiAgICBpZiAoIWZ1bGxTZXR0aW5ncykge1xuICAgICAgY29uc29sZS5lcnJvcignW1NlYXJjaEZpbHRlcl0gRmFpbGVkIHRvIGdldCBzZXR0aW5ncycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgY3VycmVudFNldHRpbmdzID0gZnVsbFNldHRpbmdzO1xuXG4gIC8vIEluaXRpYWwgZmlsdGVyIC0gc2xpZ2h0IGRlbGF5IHRvIGFsbG93IFJlYWN0IHRvIHJlbmRlclxuICBzZXRUaW1lb3V0KHByb2Nlc3NSZXN1bHRzLCAzMDApO1xuICBcbiAgLy8gRm9yIERERyBSZWFjdCB2ZXJzaW9uLCByZXN1bHRzIG1heSB0YWtlIGxvbmdlciAtIHBvbGwgYSBmZXcgdGltZXNcbiAgaWYgKGRldGVjdFNlYXJjaEVuZ2luZSgpID09PSAnZHVja2R1Y2tnbycpIHtcbiAgICBzZXRUaW1lb3V0KHByb2Nlc3NSZXN1bHRzLCA4MDApO1xuICAgIHNldFRpbWVvdXQocHJvY2Vzc1Jlc3VsdHMsIDE1MDApO1xuICAgIHNldFRpbWVvdXQocHJvY2Vzc1Jlc3VsdHMsIDMwMDApO1xuICB9XG4gIFxuICBzdGFydE9ic2VydmVyKCk7XG5cbiAgICAvLyBSZS1wcm9jZXNzIG9uIFVSTCBjaGFuZ2UgKGZvciBpbnN0YW50IHNlYXJjaClcbiAgICBsZXQgbGFzdFVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgdXJsT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICBpZiAobG9jYXRpb24uaHJlZiAhPT0gbGFzdFVybCkge1xuICAgICAgICBjb25zb2xlLmxvZygnW1NlYXJjaEZpbHRlcl0gVVJMIGNoYW5nZWQsIHJlLXByb2Nlc3NpbmcuLi4nKTtcbiAgICAgICAgbGFzdFVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHNldFRpbWVvdXQocHJvY2Vzc1Jlc3VsdHMsIDUwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdXJsT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblxuICAgIC8vIExpc3RlbiBmb3Igc2V0dGluZ3MgY2hhbmdlc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjYWxtd2ViOnNpdGVGaWx0ZXJDaGFuZ2VkJywgKChlOiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgY3VycmVudFNldHRpbmdzID0geyAuLi5jdXJyZW50U2V0dGluZ3MsIHNpdGVGaWx0ZXI6IGUuZGV0YWlsIH0gYXMgVXNlclNldHRpbmdzO1xuICAgICAgdW5maWx0ZXJTZWFyY2hSZXN1bHRzKCk7XG4gICAgICBwcm9jZXNzUmVzdWx0cygpO1xuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW1NlYXJjaEZpbHRlcl0gRmFpbGVkIHRvIGluaXRpYWxpemU6JywgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbnRlbnRTY3JpcHQoe1xuICBtYXRjaGVzOiBbXG4gICAgJyo6Ly8qLmdvb2dsZS5jb20vc2VhcmNoKicsXG4gICAgJyo6Ly8qLmdvb2dsZS5jb20vd2ViaHAqJyxcbiAgICAnKjovLyouZ29vZ2xlLiovc2VhcmNoKicsXG4gICAgJyo6Ly93d3cuYmluZy5jb20vc2VhcmNoKicsXG4gICAgJyo6Ly9kdWNrZHVja2dvLmNvbS8qJyxcbiAgICAnKjovL3d3dy5kdWNrZHVja2dvLmNvbS8qJyxcbiAgICAnKjovL2h0bWwuZHVja2R1Y2tnby5jb20vKicsXG4gICAgJyo6Ly9saXRlLmR1Y2tkdWNrZ28uY29tLyonLFxuICAgICcqOi8vc2VhcmNoLnlhaG9vLmNvbS8qJyxcbiAgICAnKjovL3NlYXJjaC5icmF2ZS5jb20vKicsXG4gIF0sXG4gIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnLCAvLyBSdW4gZWFybGllciB0byByZWRpcmVjdCBiZWZvcmUgcGFnZSBsb2Fkc1xuICBtYWluOiBpbml0LFxufSk7XG4iXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSw0LDUsNiw3LDEwLDExLDEyLDEzLDE0LDE1LDE2XSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQSxTQUFTLG9CQUFvQixZQUFZO0FBQ3hDLFNBQU87Ozs7O0FDRlIsR0FBQyxTQUFVLFFBQVEsU0FBUztBQUMxQixPQUFJLE9BQU8sV0FBVyxjQUFjLE9BQU8sSUFDekMsUUFBTyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsUUFBUTtZQUMzQyxPQUFPLFlBQVksWUFDNUIsU0FBUSxPQUFPO1FBQ1Y7SUFDTCxJQUFJLE1BQU0sRUFDUixTQUFTLEVBQUUsRUFDWjtBQUNELFlBQVEsSUFBSTtBQUNaLFdBQU8sVUFBVSxJQUFJOztLQUV0QixPQUFPLGVBQWUsY0FBYyxhQUFhLE9BQU8sU0FBUyxjQUFjLE9BQUEsU0FBYSxTQUFVLFVBQVE7QUFPL0c7QUFFQSxPQUFJLEVBQUUsV0FBVyxVQUFVLFdBQVcsT0FBTyxXQUFXLFdBQVcsT0FBTyxRQUFRLElBQ2hGLE9BQU0sSUFBSSxNQUFNLDREQUE0RDtBQUU5RSxPQUFJLEVBQUUsV0FBVyxXQUFXLFdBQVcsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUs7SUFDeEYsTUFBTSxtREFBbUQ7SUFPekQsTUFBTSxZQUFXLGtCQUFpQjtLQUloQyxNQUFNLGNBQWM7TUFDbEIsVUFBVTtPQUNSLFNBQVM7UUFDUCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxPQUFPO1FBQ0wsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxhQUFhO09BQ1gsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxPQUFPO1FBQ0wsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGVBQWU7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxjQUFjO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFdBQVc7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsUUFBUTtRQUNOLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGNBQWM7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsaUJBQWlCO09BQ2YsV0FBVztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0QsMkJBQTJCO1FBQ3pCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxnQkFBZ0I7UUFDZCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGFBQWE7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsMkJBQTJCO1FBQ3pCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0QsZ0JBQWdCO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWCx3QkFBd0I7UUFDekI7T0FDRCxXQUFXO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFlBQVk7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNYLHdCQUF3QjtRQUN6QjtPQUNELFlBQVk7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNYLHdCQUF3QjtRQUN6QjtPQUNGO01BQ0QsZ0JBQWdCO09BQ2QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxlQUFlO1FBQ2IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGlCQUFpQjtRQUNmLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxtQkFBbUI7UUFDakIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGtCQUFrQjtRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsaUJBQWlCO1FBQ2YsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELHNCQUFzQjtRQUNwQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsbUJBQW1CO1FBQ2pCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxvQkFBb0I7UUFDbEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFlBQVk7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxZQUFZLEVBQ1YsVUFBVTtPQUNSLFdBQVc7T0FDWCxXQUFXO09BQ1osRUFDRjtNQUNELGdCQUFnQjtPQUNkLFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsV0FBVztPQUNULE9BQU87UUFDTCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxzQkFBc0I7UUFDcEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsT0FBTztRQUNMLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNELFlBQVk7T0FDVixtQkFBbUIsRUFDakIsUUFBUTtRQUNOLFdBQVc7UUFDWCxXQUFXO1FBQ1gscUJBQXFCO1FBQ3RCLEVBQ0Y7T0FDRCxVQUFVO1FBQ1IsVUFBVTtTQUNSLFdBQVc7U0FDWCxXQUFXO1NBQ1gscUJBQXFCO1NBQ3RCO1FBQ0QsWUFBWSxFQUNWLHFCQUFxQjtTQUNuQixXQUFXO1NBQ1gsV0FBVztTQUNaLEVBQ0Y7UUFDRjtPQUNGO01BQ0QsYUFBYTtPQUNYLFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxTQUFTO1FBQ1AsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGVBQWU7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsUUFBUTtRQUNOLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0QsU0FBUztRQUNQLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxjQUFjO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxRQUFRO1FBQ04sV0FBVztRQUNYLFdBQVc7UUFDWCx3QkFBd0I7UUFDekI7T0FDRjtNQUNELGFBQWE7T0FDWCw2QkFBNkI7UUFDM0IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELDRCQUE0QjtRQUMxQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxXQUFXO09BQ1QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxhQUFhO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGVBQWU7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxhQUFhO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxRQUFRO09BQ04sa0JBQWtCO1FBQ2hCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxzQkFBc0I7UUFDcEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsWUFBWSxFQUNWLHFCQUFxQjtPQUNuQixXQUFXO09BQ1gsV0FBVztPQUNaLEVBQ0Y7TUFDRCxRQUFRLEVBQ04sY0FBYztPQUNaLFdBQVc7T0FDWCxXQUFXO09BQ1osRUFDRjtNQUNELGNBQWM7T0FDWixPQUFPO1FBQ0wsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsV0FBVztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxjQUFjO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGlCQUFpQjtRQUNmLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNELGlCQUFpQjtPQUNmLFNBQVM7UUFDUCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELHNCQUFzQjtRQUNwQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNELGNBQWM7T0FDWixZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFlBQVk7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsUUFBUTtRQUNOLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0QsV0FBVztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWCx3QkFBd0I7UUFDekI7T0FDRCxZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWCx3QkFBd0I7UUFDekI7T0FDRCxRQUFRO1FBQ04sV0FBVztRQUNYLFdBQVc7UUFDWCx3QkFBd0I7UUFDekI7T0FDRjtNQUNELGVBQWU7T0FDYixZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxXQUFXO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsV0FBVztPQUNULHFCQUFxQjtRQUNuQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsbUJBQW1CO1FBQ2pCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxtQkFBbUI7UUFDakIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELHNCQUFzQjtRQUNwQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsZUFBZTtRQUNiLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxxQkFBcUI7UUFDbkIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELG1CQUFtQjtRQUNqQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxZQUFZO09BQ1YsY0FBYztRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxxQkFBcUI7UUFDbkIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFdBQVc7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxXQUFXO09BQ1QsU0FBUztRQUNQLFNBQVM7U0FDUCxXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsT0FBTztTQUNMLFdBQVc7U0FDWCxXQUFXO1NBQ1o7UUFDRCxpQkFBaUI7U0FDZixXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsVUFBVTtTQUNSLFdBQVc7U0FDWCxXQUFXO1NBQ1o7UUFDRCxPQUFPO1NBQ0wsV0FBVztTQUNYLFdBQVc7U0FDWjtRQUNGO09BQ0QsV0FBVztRQUNULE9BQU87U0FDTCxXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsaUJBQWlCO1NBQ2YsV0FBVztTQUNYLFdBQVc7U0FDWjtRQUNGO09BQ0QsUUFBUTtRQUNOLFNBQVM7U0FDUCxXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsT0FBTztTQUNMLFdBQVc7U0FDWCxXQUFXO1NBQ1o7UUFDRCxpQkFBaUI7U0FDZixXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsVUFBVTtTQUNSLFdBQVc7U0FDWCxXQUFXO1NBQ1o7UUFDRCxPQUFPO1NBQ0wsV0FBVztTQUNYLFdBQVc7U0FDWjtRQUNGO09BQ0Y7TUFDRCxRQUFRO09BQ04scUJBQXFCO1FBQ25CLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGtCQUFrQjtRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsV0FBVztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxhQUFhO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGlCQUFpQjtRQUNmLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxPQUFPO1FBQ0wsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGNBQWM7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsV0FBVztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxtQkFBbUI7UUFDakIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxhQUFhO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGFBQWE7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsUUFBUTtRQUNOLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxTQUFTO1FBQ1AsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxhQUFhO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGVBQWU7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsV0FBVztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxtQkFBbUI7UUFDakIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxZQUFZLEVBQ1YsT0FBTztPQUNMLFdBQVc7T0FDWCxXQUFXO09BQ1osRUFDRjtNQUNELGlCQUFpQjtPQUNmLGdCQUFnQjtRQUNkLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsY0FBYyxFQUNaLDBCQUEwQjtPQUN4QixXQUFXO09BQ1gsV0FBVztPQUNaLEVBQ0Y7TUFDRCxXQUFXO09BQ1QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxPQUFPO1FBQ0wsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsY0FBYztRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxrQkFBa0I7UUFDaEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNGO0FBQ0QsU0FBSSxPQUFPLEtBQUssWUFBWSxDQUFDLFdBQVcsRUFDdEMsT0FBTSxJQUFJLE1BQU0sOERBQThEOzs7Ozs7Ozs7OztLQWFoRixNQUFNLHVCQUF1QixRQUFRO01BQ25DLFlBQVksWUFBWSxRQUFRLEtBQUEsR0FBVztBQUN6QyxhQUFNLE1BQU07QUFDWixZQUFLLGFBQWE7O01BRXBCLElBQUksS0FBSztBQUNQLFdBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUNoQixNQUFLLElBQUksS0FBSyxLQUFLLFdBQVcsSUFBSSxDQUFDO0FBRXJDLGNBQU8sTUFBTSxJQUFJLElBQUk7Ozs7Ozs7Ozs7S0FXekIsTUFBTSxjQUFhLFVBQVM7QUFDMUIsYUFBTyxTQUFTLE9BQU8sVUFBVSxZQUFZLE9BQU8sTUFBTSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrQ3JFLE1BQU0sZ0JBQWdCLFNBQVMsYUFBYTtBQUMxQyxjQUFRLEdBQUcsaUJBQWlCO0FBQzFCLFdBQUksY0FBYyxRQUFRLFVBQ3hCLFNBQVEsT0FBTyxJQUFJLE1BQU0sY0FBYyxRQUFRLFVBQVUsUUFBUSxDQUFDO2dCQUN6RCxTQUFTLHFCQUFxQixhQUFhLFVBQVUsS0FBSyxTQUFTLHNCQUFzQixNQUNsRyxTQUFRLFFBQVEsYUFBYSxHQUFHO1dBRWhDLFNBQVEsUUFBUSxhQUFhOzs7S0FJbkMsTUFBTSxzQkFBcUIsWUFBVyxXQUFXLElBQUksYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJsRSxNQUFNLHFCQUFxQixNQUFNLGFBQWE7QUFDNUMsYUFBTyxTQUFTLHFCQUFxQixRQUFRLEdBQUcsTUFBTTtBQUNwRCxXQUFJLEtBQUssU0FBUyxTQUFTLFFBQ3pCLE9BQU0sSUFBSSxNQUFNLHFCQUFxQixTQUFTLFFBQVEsR0FBRyxtQkFBbUIsU0FBUyxRQUFRLENBQUMsT0FBTyxLQUFLLFVBQVUsS0FBSyxTQUFTO0FBRXBJLFdBQUksS0FBSyxTQUFTLFNBQVMsUUFDekIsT0FBTSxJQUFJLE1BQU0sb0JBQW9CLFNBQVMsUUFBUSxHQUFHLG1CQUFtQixTQUFTLFFBQVEsQ0FBQyxPQUFPLEtBQUssVUFBVSxLQUFLLFNBQVM7QUFFbkksY0FBTyxJQUFJLFNBQVMsU0FBUyxXQUFXO0FBQ3RDLFlBQUksU0FBUyxxQkFJWCxLQUFJO0FBQ0YsZ0JBQU8sTUFBTSxHQUFHLE1BQU0sYUFBYTtVQUNqQztVQUNBO1VBQ0QsRUFBRSxTQUFTLENBQUM7aUJBQ04sU0FBUztBQUNoQixpQkFBUSxLQUFLLEdBQUcsS0FBSywyR0FBZ0gsUUFBUTtBQUM3SSxnQkFBTyxNQUFNLEdBQUcsS0FBSztBQUlyQixrQkFBUyx1QkFBdUI7QUFDaEMsa0JBQVMsYUFBYTtBQUN0QixrQkFBUzs7aUJBRUYsU0FBUyxZQUFZO0FBQzlCLGdCQUFPLE1BQU0sR0FBRyxLQUFLO0FBQ3JCLGtCQUFTO2NBRVQsUUFBTyxNQUFNLEdBQUcsTUFBTSxhQUFhO1NBQ2pDO1NBQ0E7U0FDRCxFQUFFLFNBQVMsQ0FBQztTQUVmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdUJOLE1BQU0sY0FBYyxRQUFRLFFBQVEsWUFBWTtBQUM5QyxhQUFPLElBQUksTUFBTSxRQUFRLEVBQ3ZCLE1BQU0sY0FBYyxTQUFTLE1BQU07QUFDakMsY0FBTyxRQUFRLEtBQUssU0FBUyxRQUFRLEdBQUcsS0FBSztTQUVoRCxDQUFDOztLQUVKLElBQUksaUJBQWlCLFNBQVMsS0FBSyxLQUFLLE9BQU8sVUFBVSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5QnhFLE1BQU0sY0FBYyxRQUFRLFdBQVcsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLO01BQzNELElBQUksUUFBUSxPQUFPLE9BQU8sS0FBSztBQW1GL0IsYUFBTyxJQUFJLE1BRE8sT0FBTyxPQUFPLE9BQU8sRUFqRnhCO09BQ2IsSUFBSSxhQUFhLE1BQU07QUFDckIsZUFBTyxRQUFRLFVBQVUsUUFBUTs7T0FFbkMsSUFBSSxhQUFhLE1BQU0sVUFBVTtBQUMvQixZQUFJLFFBQVEsTUFDVixRQUFPLE1BQU07QUFFZixZQUFJLEVBQUUsUUFBUSxRQUNaO1FBRUYsSUFBSSxRQUFRLE9BQU87QUFDbkIsWUFBSSxPQUFPLFVBQVUsV0FJbkIsS0FBSSxPQUFPLFNBQVMsVUFBVSxXQUU1QixTQUFRLFdBQVcsUUFBUSxPQUFPLE9BQU8sU0FBUyxNQUFNO2lCQUMvQyxlQUFlLFVBQVUsS0FBSyxFQUFFO1NBR3pDLElBQUksVUFBVSxrQkFBa0IsTUFBTSxTQUFTLE1BQU07QUFDckQsaUJBQVEsV0FBVyxRQUFRLE9BQU8sT0FBTyxRQUFRO2NBSWpELFNBQVEsTUFBTSxLQUFLLE9BQU87aUJBRW5CLE9BQU8sVUFBVSxZQUFZLFVBQVUsU0FBUyxlQUFlLFVBQVUsS0FBSyxJQUFJLGVBQWUsVUFBVSxLQUFLLEVBSXpILFNBQVEsV0FBVyxPQUFPLFNBQVMsT0FBTyxTQUFTLE1BQU07aUJBQ2hELGVBQWUsVUFBVSxJQUFJLENBRXRDLFNBQVEsV0FBVyxPQUFPLFNBQVMsT0FBTyxTQUFTLEtBQUs7YUFDbkQ7QUFHTCxnQkFBTyxlQUFlLE9BQU8sTUFBTTtVQUNqQyxjQUFjO1VBQ2QsWUFBWTtVQUNaLE1BQU07QUFDSixrQkFBTyxPQUFPOztVQUVoQixJQUFJLE9BQU87QUFDVCxrQkFBTyxRQUFROztVQUVsQixDQUFDO0FBQ0YsZ0JBQU87O0FBRVQsY0FBTSxRQUFRO0FBQ2QsZUFBTzs7T0FFVCxJQUFJLGFBQWEsTUFBTSxPQUFPLFVBQVU7QUFDdEMsWUFBSSxRQUFRLE1BQ1YsT0FBTSxRQUFRO1lBRWQsUUFBTyxRQUFRO0FBRWpCLGVBQU87O09BRVQsZUFBZSxhQUFhLE1BQU0sTUFBTTtBQUN0QyxlQUFPLFFBQVEsZUFBZSxPQUFPLE1BQU0sS0FBSzs7T0FFbEQsZUFBZSxhQUFhLE1BQU07QUFDaEMsZUFBTyxRQUFRLGVBQWUsT0FBTyxLQUFLOztPQUU3QyxDQWFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUJ6QyxNQUFNLGFBQVksZ0JBQWU7TUFDL0IsWUFBWSxRQUFRLFVBQVUsR0FBRyxNQUFNO0FBQ3JDLGNBQU8sWUFBWSxXQUFXLElBQUksU0FBUyxFQUFFLEdBQUcsS0FBSzs7TUFFdkQsWUFBWSxRQUFRLFVBQVU7QUFDNUIsY0FBTyxPQUFPLFlBQVksV0FBVyxJQUFJLFNBQVMsQ0FBQzs7TUFFckQsZUFBZSxRQUFRLFVBQVU7QUFDL0IsY0FBTyxlQUFlLFdBQVcsSUFBSSxTQUFTLENBQUM7O01BRWxEO0tBQ0QsTUFBTSw0QkFBNEIsSUFBSSxnQkFBZSxhQUFZO0FBQy9ELFVBQUksT0FBTyxhQUFhLFdBQ3RCLFFBQU87Ozs7Ozs7OztBQVdULGFBQU8sU0FBUyxrQkFBa0IsS0FBSztBQU9yQyxnQkFObUIsV0FBVyxLQUFLLEVBQUUsRUFBaUIsRUFDcEQsWUFBWTtRQUNWLFNBQVM7UUFDVCxTQUFTO1FBQ1YsRUFDRixDQUFDLENBQ2tCOztPQUV0QjtLQUNGLE1BQU0sb0JBQW9CLElBQUksZ0JBQWUsYUFBWTtBQUN2RCxVQUFJLE9BQU8sYUFBYSxXQUN0QixRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQlQsYUFBTyxTQUFTLFVBQVUsU0FBUyxRQUFRLGNBQWM7T0FDdkQsSUFBSSxzQkFBc0I7T0FDMUIsSUFBSTtPQUNKLElBQUksc0JBQXNCLElBQUksU0FBUSxZQUFXO0FBQy9DLDhCQUFzQixTQUFVLFVBQVU7QUFDeEMsK0JBQXNCO0FBQ3RCLGlCQUFRLFNBQVM7O1NBRW5CO09BQ0YsSUFBSTtBQUNKLFdBQUk7QUFDRixpQkFBUyxTQUFTLFNBQVMsUUFBUSxvQkFBb0I7Z0JBQ2hELEtBQUs7QUFDWixpQkFBUyxRQUFRLE9BQU8sSUFBSTs7T0FFOUIsTUFBTSxtQkFBbUIsV0FBVyxRQUFRLFdBQVcsT0FBTztBQUs5RCxXQUFJLFdBQVcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLG9CQUMzQyxRQUFPO09BT1QsTUFBTSxzQkFBcUIsWUFBVztBQUNwQyxnQkFBUSxNQUFLLFFBQU87QUFFbEIsc0JBQWEsSUFBSTtZQUNoQixVQUFTO1NBR1YsSUFBSTtBQUNKLGFBQUksVUFBVSxpQkFBaUIsU0FBUyxPQUFPLE1BQU0sWUFBWSxVQUMvRCxXQUFVLE1BQU07YUFFaEIsV0FBVTtBQUVaLHNCQUFhO1VBQ1gsbUNBQW1DO1VBQ25DO1VBQ0QsQ0FBQztVQUNGLENBQUMsT0FBTSxRQUFPO0FBRWQsaUJBQVEsTUFBTSwyQ0FBMkMsSUFBSTtVQUM3RDs7QUFNSixXQUFJLGlCQUNGLG9CQUFtQixPQUFPO1dBRTFCLG9CQUFtQixvQkFBb0I7QUFJekMsY0FBTzs7T0FFVDtLQUNGLE1BQU0sOEJBQThCLEVBQ2xDLFFBQ0EsV0FDQyxVQUFVO0FBQ1gsVUFBSSxjQUFjLFFBQVEsVUFJeEIsS0FBSSxjQUFjLFFBQVEsVUFBVSxZQUFZLGlEQUM5QyxVQUFTO1VBRVQsUUFBTyxJQUFJLE1BQU0sY0FBYyxRQUFRLFVBQVUsUUFBUSxDQUFDO2VBRW5ELFNBQVMsTUFBTSxrQ0FHeEIsUUFBTyxJQUFJLE1BQU0sTUFBTSxRQUFRLENBQUM7VUFFaEMsU0FBUSxNQUFNOztLQUdsQixNQUFNLHNCQUFzQixNQUFNLFVBQVUsaUJBQWlCLEdBQUcsU0FBUztBQUN2RSxVQUFJLEtBQUssU0FBUyxTQUFTLFFBQ3pCLE9BQU0sSUFBSSxNQUFNLHFCQUFxQixTQUFTLFFBQVEsR0FBRyxtQkFBbUIsU0FBUyxRQUFRLENBQUMsT0FBTyxLQUFLLFVBQVUsS0FBSyxTQUFTO0FBRXBJLFVBQUksS0FBSyxTQUFTLFNBQVMsUUFDekIsT0FBTSxJQUFJLE1BQU0sb0JBQW9CLFNBQVMsUUFBUSxHQUFHLG1CQUFtQixTQUFTLFFBQVEsQ0FBQyxPQUFPLEtBQUssVUFBVSxLQUFLLFNBQVM7QUFFbkksYUFBTyxJQUFJLFNBQVMsU0FBUyxXQUFXO09BQ3RDLE1BQU0sWUFBWSwyQkFBMkIsS0FBSyxNQUFNO1FBQ3REO1FBQ0E7UUFDRCxDQUFDO0FBQ0YsWUFBSyxLQUFLLFVBQVU7QUFDcEIsdUJBQWdCLFlBQVksR0FBRyxLQUFLO1FBQ3BDOztLQUVKLE1BQU0saUJBQWlCO01BQ3JCLFVBQVUsRUFDUixTQUFTLEVBQ1AsbUJBQW1CLFVBQVUsMEJBQTBCLEVBQ3hELEVBQ0Y7TUFDRCxTQUFTO09BQ1AsV0FBVyxVQUFVLGtCQUFrQjtPQUN2QyxtQkFBbUIsVUFBVSxrQkFBa0I7T0FDL0MsYUFBYSxtQkFBbUIsS0FBSyxNQUFNLGVBQWU7UUFDeEQsU0FBUztRQUNULFNBQVM7UUFDVixDQUFDO09BQ0g7TUFDRCxNQUFNLEVBQ0osYUFBYSxtQkFBbUIsS0FBSyxNQUFNLGVBQWU7T0FDeEQsU0FBUztPQUNULFNBQVM7T0FDVixDQUFDLEVBQ0g7TUFDRjtLQUNELE1BQU0sa0JBQWtCO01BQ3RCLE9BQU87T0FDTCxTQUFTO09BQ1QsU0FBUztPQUNWO01BQ0QsS0FBSztPQUNILFNBQVM7T0FDVCxTQUFTO09BQ1Y7TUFDRCxLQUFLO09BQ0gsU0FBUztPQUNULFNBQVM7T0FDVjtNQUNGO0FBQ0QsaUJBQVksVUFBVTtNQUNwQixTQUFTLEVBQ1AsS0FBSyxpQkFDTjtNQUNELFVBQVUsRUFDUixLQUFLLGlCQUNOO01BQ0QsVUFBVSxFQUNSLEtBQUssaUJBQ047TUFDRjtBQUNELFlBQU8sV0FBVyxlQUFlLGdCQUFnQixZQUFZOztBQUsvRCxhQUFPLFVBQVUsU0FBUyxPQUFPO1NBRWpDLFVBQU8sVUFBVSxXQUFXO0lBRTlCOzs7Ozs7Ozs7Ozs7O0NHdHNDRixJQUFhQSxZQUFVLFdBQVcsU0FBUyxTQUFTLEtBQ2hELFdBQVcsVUFDWCxXQUFXOzs7Q0NEZixJQUFNLDZCQUFhLElBQUksTUFBTSw0QkFBNEI7Q0FFekQsSUFBSSxjQUFvRCxTQUFVLFNBQVMsWUFBWSxHQUFHLFdBQVc7RUFDakcsU0FBUyxNQUFNLE9BQU87QUFBRSxVQUFPLGlCQUFpQixJQUFJLFFBQVEsSUFBSSxFQUFFLFNBQVUsU0FBUztBQUFFLFlBQVEsTUFBTTtLQUFJOztBQUN6RyxTQUFPLEtBQUssTUFBTSxJQUFJLFVBQVUsU0FBVSxTQUFTLFFBQVE7R0FDdkQsU0FBUyxVQUFVLE9BQU87QUFBRSxRQUFJO0FBQUUsVUFBSyxVQUFVLEtBQUssTUFBTSxDQUFDO2FBQVcsR0FBRztBQUFFLFlBQU8sRUFBRTs7O0dBQ3RGLFNBQVMsU0FBUyxPQUFPO0FBQUUsUUFBSTtBQUFFLFVBQUssVUFBVSxTQUFTLE1BQU0sQ0FBQzthQUFXLEdBQUc7QUFBRSxZQUFPLEVBQUU7OztHQUN6RixTQUFTLEtBQUssUUFBUTtBQUFFLFdBQU8sT0FBTyxRQUFRLE9BQU8sTUFBTSxHQUFHLE1BQU0sT0FBTyxNQUFNLENBQUMsS0FBSyxXQUFXLFNBQVM7O0FBQzNHLFNBQU0sWUFBWSxVQUFVLE1BQU0sU0FBUyxjQUFjLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztJQUN2RTs7Q0FFTixJQUFNLFlBQU4sTUFBZ0I7RUFDWixZQUFZLFFBQVEsZUFBZSxZQUFZO0FBQzNDLFFBQUssU0FBUztBQUNkLFFBQUssZUFBZTtBQUNwQixRQUFLLFNBQVMsRUFBRTtBQUNoQixRQUFLLG1CQUFtQixFQUFFOztFQUU5QixRQUFRLFNBQVMsR0FBRyxXQUFXLEdBQUc7QUFDOUIsT0FBSSxVQUFVLEVBQ1YsT0FBTSxJQUFJLE1BQU0sa0JBQWtCLE9BQU8sb0JBQW9CO0FBQ2pFLFVBQU8sSUFBSSxTQUFTLFNBQVMsV0FBVztJQUNwQyxNQUFNLE9BQU87S0FBRTtLQUFTO0tBQVE7S0FBUTtLQUFVO0lBQ2xELE1BQU0sSUFBSSxpQkFBaUIsS0FBSyxTQUFTLFVBQVUsWUFBWSxNQUFNLFNBQVM7QUFDOUUsUUFBSSxNQUFNLE1BQU0sVUFBVSxLQUFLLE9BRTNCLE1BQUssY0FBYyxLQUFLO1FBR3hCLE1BQUssT0FBTyxPQUFPLElBQUksR0FBRyxHQUFHLEtBQUs7S0FFeEM7O0VBRU4sYUFBYSxZQUFZO0FBQ3JCLFVBQU8sWUFBWSxNQUFNLFdBQVcsS0FBSyxHQUFHLFdBQVcsVUFBVSxTQUFTLEdBQUcsV0FBVyxHQUFHO0lBQ3ZGLE1BQU0sQ0FBQyxPQUFPLFdBQVcsTUFBTSxLQUFLLFFBQVEsUUFBUSxTQUFTO0FBQzdELFFBQUk7QUFDQSxZQUFPLE1BQU0sU0FBUyxNQUFNO2NBRXhCO0FBQ0osY0FBUzs7S0FFZjs7RUFFTixjQUFjLFNBQVMsR0FBRyxXQUFXLEdBQUc7QUFDcEMsT0FBSSxVQUFVLEVBQ1YsT0FBTSxJQUFJLE1BQU0sa0JBQWtCLE9BQU8sb0JBQW9CO0FBQ2pFLE9BQUksS0FBSyxzQkFBc0IsUUFBUSxTQUFTLENBQzVDLFFBQU8sUUFBUSxTQUFTO09BR3hCLFFBQU8sSUFBSSxTQUFTLFlBQVk7QUFDNUIsUUFBSSxDQUFDLEtBQUssaUJBQWlCLFNBQVMsR0FDaEMsTUFBSyxpQkFBaUIsU0FBUyxLQUFLLEVBQUU7QUFDMUMsaUJBQWEsS0FBSyxpQkFBaUIsU0FBUyxJQUFJO0tBQUU7S0FBUztLQUFVLENBQUM7S0FDeEU7O0VBR1YsV0FBVztBQUNQLFVBQU8sS0FBSyxVQUFVOztFQUUxQixXQUFXO0FBQ1AsVUFBTyxLQUFLOztFQUVoQixTQUFTLE9BQU87QUFDWixRQUFLLFNBQVM7QUFDZCxRQUFLLGdCQUFnQjs7RUFFekIsUUFBUSxTQUFTLEdBQUc7QUFDaEIsT0FBSSxVQUFVLEVBQ1YsT0FBTSxJQUFJLE1BQU0sa0JBQWtCLE9BQU8sb0JBQW9CO0FBQ2pFLFFBQUssVUFBVTtBQUNmLFFBQUssZ0JBQWdCOztFQUV6QixTQUFTO0FBQ0wsUUFBSyxPQUFPLFNBQVMsVUFBVSxNQUFNLE9BQU8sS0FBSyxhQUFhLENBQUM7QUFDL0QsUUFBSyxTQUFTLEVBQUU7O0VBRXBCLGlCQUFpQjtBQUNiLFFBQUsscUJBQXFCO0FBQzFCLFVBQU8sS0FBSyxPQUFPLFNBQVMsS0FBSyxLQUFLLE9BQU8sR0FBRyxVQUFVLEtBQUssUUFBUTtBQUNuRSxTQUFLLGNBQWMsS0FBSyxPQUFPLE9BQU8sQ0FBQztBQUN2QyxTQUFLLHFCQUFxQjs7O0VBR2xDLGNBQWMsTUFBTTtHQUNoQixNQUFNLGdCQUFnQixLQUFLO0FBQzNCLFFBQUssVUFBVSxLQUFLO0FBQ3BCLFFBQUssUUFBUSxDQUFDLGVBQWUsS0FBSyxhQUFhLEtBQUssT0FBTyxDQUFDLENBQUM7O0VBRWpFLGFBQWEsUUFBUTtHQUNqQixJQUFJLFNBQVM7QUFDYixnQkFBYTtBQUNULFFBQUksT0FDQTtBQUNKLGFBQVM7QUFDVCxTQUFLLFFBQVEsT0FBTzs7O0VBRzVCLHNCQUFzQjtBQUNsQixPQUFJLEtBQUssT0FBTyxXQUFXLEVBQ3ZCLE1BQUssSUFBSSxTQUFTLEtBQUssUUFBUSxTQUFTLEdBQUcsVUFBVTtJQUNqRCxNQUFNLFVBQVUsS0FBSyxpQkFBaUIsU0FBUztBQUMvQyxRQUFJLENBQUMsUUFDRDtBQUNKLFlBQVEsU0FBUyxXQUFXLE9BQU8sU0FBUyxDQUFDO0FBQzdDLFNBQUssaUJBQWlCLFNBQVMsS0FBSyxFQUFFOztRQUd6QztJQUNELE1BQU0saUJBQWlCLEtBQUssT0FBTyxHQUFHO0FBQ3RDLFNBQUssSUFBSSxTQUFTLEtBQUssUUFBUSxTQUFTLEdBQUcsVUFBVTtLQUNqRCxNQUFNLFVBQVUsS0FBSyxpQkFBaUIsU0FBUztBQUMvQyxTQUFJLENBQUMsUUFDRDtLQUNKLE1BQU0sSUFBSSxRQUFRLFdBQVcsV0FBVyxPQUFPLFlBQVksZUFBZTtBQUMxRSxNQUFDLE1BQU0sS0FBSyxVQUFVLFFBQVEsT0FBTyxHQUFHLEVBQUUsRUFDckMsVUFBUyxXQUFVLE9BQU8sU0FBUyxFQUFFOzs7O0VBSXRELHNCQUFzQixRQUFRLFVBQVU7QUFDcEMsV0FBUSxLQUFLLE9BQU8sV0FBVyxLQUFLLEtBQUssT0FBTyxHQUFHLFdBQVcsYUFDMUQsVUFBVSxLQUFLOzs7Q0FHM0IsU0FBUyxhQUFhLEdBQUcsR0FBRztFQUN4QixNQUFNLElBQUksaUJBQWlCLElBQUksVUFBVSxFQUFFLFlBQVksTUFBTSxTQUFTO0FBQ3RFLElBQUUsT0FBTyxJQUFJLEdBQUcsR0FBRyxFQUFFOztDQUV6QixTQUFTLGlCQUFpQixHQUFHLFdBQVc7QUFDcEMsT0FBSyxJQUFJLElBQUksRUFBRSxTQUFTLEdBQUcsS0FBSyxHQUFHLElBQy9CLEtBQUksVUFBVSxFQUFFLEdBQUcsQ0FDZixRQUFPO0FBR2YsU0FBTzs7Q0FHWCxJQUFJLGNBQW9ELFNBQVUsU0FBUyxZQUFZLEdBQUcsV0FBVztFQUNqRyxTQUFTLE1BQU0sT0FBTztBQUFFLFVBQU8saUJBQWlCLElBQUksUUFBUSxJQUFJLEVBQUUsU0FBVSxTQUFTO0FBQUUsWUFBUSxNQUFNO0tBQUk7O0FBQ3pHLFNBQU8sS0FBSyxNQUFNLElBQUksVUFBVSxTQUFVLFNBQVMsUUFBUTtHQUN2RCxTQUFTLFVBQVUsT0FBTztBQUFFLFFBQUk7QUFBRSxVQUFLLFVBQVUsS0FBSyxNQUFNLENBQUM7YUFBVyxHQUFHO0FBQUUsWUFBTyxFQUFFOzs7R0FDdEYsU0FBUyxTQUFTLE9BQU87QUFBRSxRQUFJO0FBQUUsVUFBSyxVQUFVLFNBQVMsTUFBTSxDQUFDO2FBQVcsR0FBRztBQUFFLFlBQU8sRUFBRTs7O0dBQ3pGLFNBQVMsS0FBSyxRQUFRO0FBQUUsV0FBTyxPQUFPLFFBQVEsT0FBTyxNQUFNLEdBQUcsTUFBTSxPQUFPLE1BQU0sQ0FBQyxLQUFLLFdBQVcsU0FBUzs7QUFDM0csU0FBTSxZQUFZLFVBQVUsTUFBTSxTQUFTLGNBQWMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDO0lBQ3ZFOztDQUVOLElBQU0sUUFBTixNQUFZO0VBQ1IsWUFBWSxhQUFhO0FBQ3JCLFFBQUssYUFBYSxJQUFJLFVBQVUsR0FBRyxZQUFZOztFQUVuRCxVQUFVO0FBQ04sVUFBTyxZQUFZLE1BQU0sV0FBVyxLQUFLLEdBQUcsV0FBVyxXQUFXLEdBQUc7SUFDakUsTUFBTSxHQUFHLFlBQVksTUFBTSxLQUFLLFdBQVcsUUFBUSxHQUFHLFNBQVM7QUFDL0QsV0FBTztLQUNUOztFQUVOLGFBQWEsVUFBVSxXQUFXLEdBQUc7QUFDakMsVUFBTyxLQUFLLFdBQVcsbUJBQW1CLFVBQVUsRUFBRSxHQUFHLFNBQVM7O0VBRXRFLFdBQVc7QUFDUCxVQUFPLEtBQUssV0FBVyxVQUFVOztFQUVyQyxjQUFjLFdBQVcsR0FBRztBQUN4QixVQUFPLEtBQUssV0FBVyxjQUFjLEdBQUcsU0FBUzs7RUFFckQsVUFBVTtBQUNOLE9BQUksS0FBSyxXQUFXLFVBQVUsQ0FDMUIsTUFBSyxXQUFXLFNBQVM7O0VBRWpDLFNBQVM7QUFDTCxVQUFPLEtBQUssV0FBVyxRQUFROzs7OztDQzlLdkMsSUFBSSxNQUFNLE9BQU8sVUFBVTtDQUUzQixTQUFnQixPQUFPLEtBQUssS0FBSztFQUNoQyxJQUFJLE1BQU07QUFDVixNQUFJLFFBQVEsSUFBSyxRQUFPO0FBRXhCLE1BQUksT0FBTyxRQUFRLE9BQUssSUFBSSxpQkFBaUIsSUFBSSxhQUFhO0FBQzdELE9BQUksU0FBUyxLQUFNLFFBQU8sSUFBSSxTQUFTLEtBQUssSUFBSSxTQUFTO0FBQ3pELE9BQUksU0FBUyxPQUFRLFFBQU8sSUFBSSxVQUFVLEtBQUssSUFBSSxVQUFVO0FBRTdELE9BQUksU0FBUyxPQUFPO0FBQ25CLFNBQUssTUFBSSxJQUFJLFlBQVksSUFBSSxPQUM1QixRQUFPLFNBQVMsT0FBTyxJQUFJLE1BQU0sSUFBSSxLQUFLO0FBRTNDLFdBQU8sUUFBUTs7QUFHaEIsT0FBSSxDQUFDLFFBQVEsT0FBTyxRQUFRLFVBQVU7QUFDckMsVUFBTTtBQUNOLFNBQUssUUFBUSxLQUFLO0FBQ2pCLFNBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBRSxRQUFPO0FBQ2pFLFNBQUksRUFBRSxRQUFRLFFBQVEsQ0FBQyxPQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBRSxRQUFPOztBQUU3RCxXQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsV0FBVzs7O0FBSXJDLFNBQU8sUUFBUSxPQUFPLFFBQVE7O0FDaEJmLGdCQUFlO0NBQy9CLFNBQVMsZ0JBQWdCO0VBQ3hCLE1BQU0sVUFBVTtHQUNmLE9BQU8sYUFBYSxRQUFRO0dBQzVCLFNBQVMsYUFBYSxVQUFVO0dBQ2hDLE1BQU0sYUFBYSxPQUFPO0dBQzFCLFNBQVMsYUFBYSxVQUFVO0dBQ2hDO0VBQ0QsTUFBTSxhQUFhLFNBQVM7R0FDM0IsTUFBTSxTQUFTLFFBQVE7QUFDdkIsT0FBSSxVQUFVLE1BQU07SUFDbkIsTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxLQUFLO0FBQ2pELFVBQU0sTUFBTSxpQkFBaUIsS0FBSyxjQUFjLFlBQVk7O0FBRTdELFVBQU87O0VBRVIsTUFBTSxjQUFjLFFBQVE7R0FDM0IsTUFBTSxtQkFBbUIsSUFBSSxRQUFRLElBQUk7R0FDekMsTUFBTSxhQUFhLElBQUksVUFBVSxHQUFHLGlCQUFpQjtHQUNyRCxNQUFNLFlBQVksSUFBSSxVQUFVLG1CQUFtQixFQUFFO0FBQ3JELE9BQUksYUFBYSxLQUFNLE9BQU0sTUFBTSxrRUFBa0UsSUFBSSxHQUFHO0FBQzVHLFVBQU87SUFDTjtJQUNBO0lBQ0EsUUFBUSxVQUFVLFdBQVc7SUFDN0I7O0VBRUYsTUFBTSxjQUFjLFFBQVEsTUFBTTtFQUNsQyxNQUFNLGFBQWEsU0FBUyxZQUFZO0dBQ3ZDLE1BQU0sWUFBWSxFQUFFLEdBQUcsU0FBUztBQUNoQyxVQUFPLFFBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFdBQVc7QUFDakQsUUFBSSxTQUFTLEtBQU0sUUFBTyxVQUFVO1FBQy9CLFdBQVUsT0FBTztLQUNyQjtBQUNGLFVBQU87O0VBRVIsTUFBTSxzQkFBc0IsT0FBTyxhQUFhLFNBQVMsWUFBWTtFQUNyRSxNQUFNLGdCQUFnQixlQUFlLE9BQU8sZUFBZSxZQUFZLENBQUMsTUFBTSxRQUFRLFdBQVcsR0FBRyxhQUFhLEVBQUU7RUFDbkgsTUFBTSxVQUFVLE9BQU8sUUFBUSxXQUFXLFNBQVM7QUFDbEQsVUFBTyxtQkFBbUIsTUFBTSxPQUFPLFFBQVEsVUFBVSxFQUFFLE1BQU0sWUFBWSxNQUFNLGFBQWE7O0VBRWpHLE1BQU0sVUFBVSxPQUFPLFFBQVEsY0FBYztHQUM1QyxNQUFNLFVBQVUsV0FBVyxVQUFVO0FBQ3JDLFVBQU8sYUFBYSxNQUFNLE9BQU8sUUFBUSxRQUFRLENBQUM7O0VBRW5ELE1BQU0sVUFBVSxPQUFPLFFBQVEsV0FBVyxVQUFVO0FBQ25ELFNBQU0sT0FBTyxRQUFRLFdBQVcsU0FBUyxLQUFLOztFQUUvQyxNQUFNLFVBQVUsT0FBTyxRQUFRLFdBQVcsZUFBZTtHQUN4RCxNQUFNLFVBQVUsV0FBVyxVQUFVO0dBQ3JDLE1BQU0saUJBQWlCLGFBQWEsTUFBTSxPQUFPLFFBQVEsUUFBUSxDQUFDO0FBQ2xFLFNBQU0sT0FBTyxRQUFRLFNBQVMsVUFBVSxnQkFBZ0IsV0FBVyxDQUFDOztFQUVyRSxNQUFNLGFBQWEsT0FBTyxRQUFRLFdBQVcsU0FBUztBQUNyRCxTQUFNLE9BQU8sV0FBVyxVQUFVO0FBQ2xDLE9BQUksTUFBTSxZQUFZO0lBQ3JCLE1BQU0sVUFBVSxXQUFXLFVBQVU7QUFDckMsVUFBTSxPQUFPLFdBQVcsUUFBUTs7O0VBR2xDLE1BQU0sYUFBYSxPQUFPLFFBQVEsV0FBVyxlQUFlO0dBQzNELE1BQU0sVUFBVSxXQUFXLFVBQVU7QUFDckMsT0FBSSxjQUFjLEtBQU0sT0FBTSxPQUFPLFdBQVcsUUFBUTtRQUNuRDtJQUNKLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxRQUFRLFFBQVEsQ0FBQztBQUM3RCxLQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxVQUFVLE9BQU8sVUFBVSxPQUFPO0FBQy9ELFVBQU0sT0FBTyxRQUFRLFNBQVMsVUFBVTs7O0VBRzFDLE1BQU0sU0FBUyxRQUFRLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxHQUFHO0FBQ3BFLFNBQU87R0FDTixTQUFTLE9BQU8sS0FBSyxTQUFTO0lBQzdCLE1BQU0sRUFBRSxRQUFRLGNBQWMsV0FBVyxJQUFJO0FBQzdDLFdBQU8sTUFBTSxRQUFRLFFBQVEsV0FBVyxLQUFLOztHQUU5QyxVQUFVLE9BQU8sU0FBUztJQUN6QixNQUFNLCtCQUErQixJQUFJLEtBQUs7SUFDOUMsTUFBTSwrQkFBK0IsSUFBSSxLQUFLO0lBQzlDLE1BQU0sY0FBYyxFQUFFO0FBQ3RCLFNBQUssU0FBUyxRQUFRO0tBQ3JCLElBQUk7S0FDSixJQUFJO0FBQ0osU0FBSSxPQUFPLFFBQVEsU0FBVSxVQUFTO2NBQzdCLGNBQWMsS0FBSztBQUMzQixlQUFTLElBQUk7QUFDYixhQUFPLEVBQUUsVUFBVSxJQUFJLFVBQVU7WUFDM0I7QUFDTixlQUFTLElBQUk7QUFDYixhQUFPLElBQUk7O0FBRVosaUJBQVksS0FBSyxPQUFPO0tBQ3hCLE1BQU0sRUFBRSxZQUFZLGNBQWMsV0FBVyxPQUFPO0tBQ3BELE1BQU0sV0FBVyxhQUFhLElBQUksV0FBVyxJQUFJLEVBQUU7QUFDbkQsa0JBQWEsSUFBSSxZQUFZLFNBQVMsT0FBTyxVQUFVLENBQUM7QUFDeEQsa0JBQWEsSUFBSSxRQUFRLEtBQUs7TUFDN0I7SUFDRixNQUFNLDZCQUE2QixJQUFJLEtBQUs7QUFDNUMsVUFBTSxRQUFRLElBQUksTUFBTSxLQUFLLGFBQWEsU0FBUyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsWUFBWSxVQUFVO0FBQ3RGLE1BQUMsTUFBTSxRQUFRLFlBQVksU0FBUyxLQUFLLEVBQUUsU0FBUyxpQkFBaUI7TUFDcEUsTUFBTSxNQUFNLEdBQUcsV0FBVyxHQUFHLGFBQWE7TUFDMUMsTUFBTSxPQUFPLGFBQWEsSUFBSSxJQUFJO01BQ2xDLE1BQU0sUUFBUSxtQkFBbUIsYUFBYSxPQUFPLE1BQU0sWUFBWSxNQUFNLGFBQWE7QUFDMUYsaUJBQVcsSUFBSSxLQUFLLE1BQU07T0FDekI7TUFDRCxDQUFDO0FBQ0gsV0FBTyxZQUFZLEtBQUssU0FBUztLQUNoQztLQUNBLE9BQU8sV0FBVyxJQUFJLElBQUk7S0FDMUIsRUFBRTs7R0FFSixTQUFTLE9BQU8sUUFBUTtJQUN2QixNQUFNLEVBQUUsUUFBUSxjQUFjLFdBQVcsSUFBSTtBQUM3QyxXQUFPLE1BQU0sUUFBUSxRQUFRLFVBQVU7O0dBRXhDLFVBQVUsT0FBTyxTQUFTO0lBQ3pCLE1BQU0sT0FBTyxLQUFLLEtBQUssUUFBUTtLQUM5QixNQUFNLE1BQU0sT0FBTyxRQUFRLFdBQVcsTUFBTSxJQUFJO0tBQ2hELE1BQU0sRUFBRSxZQUFZLGNBQWMsV0FBVyxJQUFJO0FBQ2pELFlBQU87TUFDTjtNQUNBO01BQ0E7TUFDQSxlQUFlLFdBQVcsVUFBVTtNQUNwQztNQUNBO0lBQ0YsTUFBTSwwQkFBMEIsS0FBSyxRQUFRLEtBQUssUUFBUTtBQUN6RCxTQUFJLElBQUksZ0JBQWdCLEVBQUU7QUFDMUIsU0FBSSxJQUFJLFlBQVksS0FBSyxJQUFJO0FBQzdCLFlBQU87T0FDTCxFQUFFLENBQUM7SUFDTixNQUFNLGFBQWEsRUFBRTtBQUNyQixVQUFNLFFBQVEsSUFBSSxPQUFPLFFBQVEsd0JBQXdCLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxVQUFVO0tBQ3JGLE1BQU0sVUFBVSxNQUFNQyxVQUFRLFFBQVEsTUFBTSxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksY0FBYyxDQUFDO0FBQ3JGLFVBQUssU0FBUyxRQUFRO0FBQ3JCLGlCQUFXLElBQUksT0FBTyxRQUFRLElBQUksa0JBQWtCLEVBQUU7T0FDckQ7TUFDRCxDQUFDO0FBQ0gsV0FBTyxLQUFLLEtBQUssU0FBUztLQUN6QixLQUFLLElBQUk7S0FDVCxNQUFNLFdBQVcsSUFBSTtLQUNyQixFQUFFOztHQUVKLFNBQVMsT0FBTyxLQUFLLFVBQVU7SUFDOUIsTUFBTSxFQUFFLFFBQVEsY0FBYyxXQUFXLElBQUk7QUFDN0MsVUFBTSxRQUFRLFFBQVEsV0FBVyxNQUFNOztHQUV4QyxVQUFVLE9BQU8sVUFBVTtJQUMxQixNQUFNLG9CQUFvQixFQUFFO0FBQzVCLFVBQU0sU0FBUyxTQUFTO0tBQ3ZCLE1BQU0sRUFBRSxZQUFZLGNBQWMsV0FBVyxTQUFTLE9BQU8sS0FBSyxNQUFNLEtBQUssS0FBSyxJQUFJO0FBQ3RGLHVCQUFrQixnQkFBZ0IsRUFBRTtBQUNwQyx1QkFBa0IsWUFBWSxLQUFLO01BQ2xDLEtBQUs7TUFDTCxPQUFPLEtBQUs7TUFDWixDQUFDO01BQ0Q7QUFDRixVQUFNLFFBQVEsSUFBSSxPQUFPLFFBQVEsa0JBQWtCLENBQUMsSUFBSSxPQUFPLENBQUMsWUFBWSxZQUFZO0FBQ3ZGLFdBQU0sVUFBVSxXQUFXLENBQUMsU0FBUyxPQUFPO01BQzNDLENBQUM7O0dBRUosU0FBUyxPQUFPLEtBQUssZUFBZTtJQUNuQyxNQUFNLEVBQUUsUUFBUSxjQUFjLFdBQVcsSUFBSTtBQUM3QyxVQUFNLFFBQVEsUUFBUSxXQUFXLFdBQVc7O0dBRTdDLFVBQVUsT0FBTyxVQUFVO0lBQzFCLE1BQU0sdUJBQXVCLEVBQUU7QUFDL0IsVUFBTSxTQUFTLFNBQVM7S0FDdkIsTUFBTSxFQUFFLFlBQVksY0FBYyxXQUFXLFNBQVMsT0FBTyxLQUFLLE1BQU0sS0FBSyxLQUFLLElBQUk7QUFDdEYsMEJBQXFCLGdCQUFnQixFQUFFO0FBQ3ZDLDBCQUFxQixZQUFZLEtBQUs7TUFDckMsS0FBSztNQUNMLFlBQVksS0FBSztNQUNqQixDQUFDO01BQ0Q7QUFDRixVQUFNLFFBQVEsSUFBSSxPQUFPLFFBQVEscUJBQXFCLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxhQUFhO0tBQzVGLE1BQU0sU0FBUyxVQUFVLFlBQVk7S0FDckMsTUFBTSxXQUFXLFFBQVEsS0FBSyxFQUFFLFVBQVUsV0FBVyxJQUFJLENBQUM7S0FDMUQsTUFBTSxnQkFBZ0IsTUFBTSxPQUFPLFNBQVMsU0FBUztLQUNyRCxNQUFNLGtCQUFrQixPQUFPLFlBQVksY0FBYyxLQUFLLEVBQUUsS0FBSyxZQUFZLENBQUMsS0FBSyxhQUFhLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDN0csTUFBTSxjQUFjLFFBQVEsS0FBSyxFQUFFLEtBQUssaUJBQWlCO01BQ3hELE1BQU0sVUFBVSxXQUFXLElBQUk7QUFDL0IsYUFBTztPQUNOLEtBQUs7T0FDTCxPQUFPLFVBQVUsZ0JBQWdCLFlBQVksRUFBRSxFQUFFLFdBQVc7T0FDNUQ7T0FDQTtBQUNGLFdBQU0sT0FBTyxTQUFTLFlBQVk7TUFDakMsQ0FBQzs7R0FFSixZQUFZLE9BQU8sS0FBSyxTQUFTO0lBQ2hDLE1BQU0sRUFBRSxRQUFRLGNBQWMsV0FBVyxJQUFJO0FBQzdDLFVBQU0sV0FBVyxRQUFRLFdBQVcsS0FBSzs7R0FFMUMsYUFBYSxPQUFPLFNBQVM7SUFDNUIsTUFBTSxnQkFBZ0IsRUFBRTtBQUN4QixTQUFLLFNBQVMsUUFBUTtLQUNyQixJQUFJO0tBQ0osSUFBSTtBQUNKLFNBQUksT0FBTyxRQUFRLFNBQVUsVUFBUztjQUM3QixjQUFjLElBQUssVUFBUyxJQUFJO2NBQ2hDLFVBQVUsS0FBSztBQUN2QixlQUFTLElBQUksS0FBSztBQUNsQixhQUFPLElBQUk7WUFDTDtBQUNOLGVBQVMsSUFBSTtBQUNiLGFBQU8sSUFBSTs7S0FFWixNQUFNLEVBQUUsWUFBWSxjQUFjLFdBQVcsT0FBTztBQUNwRCxtQkFBYyxnQkFBZ0IsRUFBRTtBQUNoQyxtQkFBYyxZQUFZLEtBQUssVUFBVTtBQUN6QyxTQUFJLE1BQU0sV0FBWSxlQUFjLFlBQVksS0FBSyxXQUFXLFVBQVUsQ0FBQztNQUMxRTtBQUNGLFVBQU0sUUFBUSxJQUFJLE9BQU8sUUFBUSxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsWUFBWSxVQUFVO0FBQ2pGLFdBQU0sVUFBVSxXQUFXLENBQUMsWUFBWSxLQUFLO01BQzVDLENBQUM7O0dBRUosT0FBTyxPQUFPLFNBQVM7QUFDdEIsVUFBTSxVQUFVLEtBQUssQ0FBQyxPQUFPOztHQUU5QixZQUFZLE9BQU8sS0FBSyxlQUFlO0lBQ3RDLE1BQU0sRUFBRSxRQUFRLGNBQWMsV0FBVyxJQUFJO0FBQzdDLFVBQU0sV0FBVyxRQUFRLFdBQVcsV0FBVzs7R0FFaEQsVUFBVSxPQUFPLE1BQU0sU0FBUztJQUMvQixNQUFNLE9BQU8sTUFBTSxVQUFVLEtBQUssQ0FBQyxVQUFVO0FBQzdDLFVBQU0sYUFBYSxTQUFTLFFBQVE7QUFDbkMsWUFBTyxLQUFLO0FBQ1osWUFBTyxLQUFLLFdBQVcsSUFBSTtNQUMxQjtBQUNGLFdBQU87O0dBRVIsaUJBQWlCLE9BQU8sTUFBTSxTQUFTO0FBQ3RDLFVBQU0sVUFBVSxLQUFLLENBQUMsZ0JBQWdCLEtBQUs7O0dBRTVDLFFBQVEsS0FBSyxPQUFPO0lBQ25CLE1BQU0sRUFBRSxRQUFRLGNBQWMsV0FBVyxJQUFJO0FBQzdDLFdBQU8sTUFBTSxRQUFRLFdBQVcsR0FBRzs7R0FFcEMsVUFBVTtBQUNULFdBQU8sT0FBTyxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQzFDLFlBQU8sU0FBUztNQUNmOztHQUVILGFBQWEsS0FBSyxTQUFTO0lBQzFCLE1BQU0sRUFBRSxRQUFRLGNBQWMsV0FBVyxJQUFJO0lBQzdDLE1BQU0sRUFBRSxTQUFTLGdCQUFnQixHQUFHLGFBQWEsRUFBRSxFQUFFLHFCQUFxQixRQUFRLFVBQVUsUUFBUSxFQUFFO0FBQ3RHLFFBQUksZ0JBQWdCLEVBQUcsT0FBTSxNQUFNLDBGQUEwRjtJQUM3SCxJQUFJLGtCQUFrQjtJQUN0QixNQUFNLFVBQVUsWUFBWTtLQUMzQixNQUFNLGdCQUFnQixXQUFXLFVBQVU7S0FDM0MsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sVUFBVSxNQUFNLE9BQU8sU0FBUyxDQUFDLFdBQVcsY0FBYyxDQUFDO0FBQ3RGLHVCQUFrQixTQUFTLFFBQVEsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELFNBQUksU0FBUyxLQUFNO0tBQ25CLE1BQU0saUJBQWlCLE1BQU0sS0FBSztBQUNsQyxTQUFJLGlCQUFpQixjQUFlLE9BQU0sTUFBTSxnQ0FBZ0MsZUFBZSxPQUFPLGNBQWMsU0FBUyxJQUFJLEdBQUc7QUFDcEksU0FBSSxtQkFBbUIsY0FBZTtBQUN0QyxTQUFJLE1BQU8sU0FBUSxNQUFNLG9EQUFvRCxJQUFJLEtBQUssZUFBZSxPQUFPLGdCQUFnQjtLQUM1SCxNQUFNLGtCQUFrQixNQUFNLEtBQUssRUFBRSxRQUFRLGdCQUFnQixnQkFBZ0IsR0FBRyxHQUFHLE1BQU0saUJBQWlCLElBQUksRUFBRTtLQUNoSCxJQUFJLGdCQUFnQjtBQUNwQixVQUFLLE1BQU0sb0JBQW9CLGdCQUFpQixLQUFJO0FBQ25ELHNCQUFnQixNQUFNLGFBQWEsb0JBQW9CLGNBQWMsSUFBSTtBQUN6RSxVQUFJLE1BQU8sU0FBUSxNQUFNLGdFQUFnRSxtQkFBbUI7Y0FDcEcsS0FBSztBQUNiLFlBQU0sSUFBSSxlQUFlLEtBQUssa0JBQWtCLEVBQUUsT0FBTyxLQUFLLENBQUM7O0FBRWhFLFdBQU0sT0FBTyxTQUFTLENBQUM7TUFDdEIsS0FBSztNQUNMLE9BQU87TUFDUCxFQUFFO01BQ0YsS0FBSztNQUNMLE9BQU87T0FDTixHQUFHO09BQ0gsR0FBRztPQUNIO01BQ0QsQ0FBQyxDQUFDO0FBQ0gsU0FBSSxNQUFPLFNBQVEsTUFBTSxzREFBc0QsSUFBSSxJQUFJLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztBQUMxSCwyQkFBc0IsZUFBZSxjQUFjOztJQUVwRCxNQUFNLGlCQUFpQixNQUFNLGNBQWMsT0FBTyxRQUFRLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxRQUFRO0FBQzlGLGFBQVEsTUFBTSwyQ0FBMkMsT0FBTyxJQUFJO01BQ25FO0lBQ0YsTUFBTSxZQUFZLElBQUksT0FBTztJQUM3QixNQUFNLG9CQUFvQixNQUFNLFlBQVksTUFBTSxnQkFBZ0I7SUFDbEUsTUFBTSx1QkFBdUIsVUFBVSxhQUFhLFlBQVk7S0FDL0QsTUFBTSxRQUFRLE1BQU0sT0FBTyxRQUFRLFVBQVU7QUFDN0MsU0FBSSxTQUFTLFFBQVEsTUFBTSxRQUFRLEtBQU0sUUFBTztLQUNoRCxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU07QUFDbEMsV0FBTSxPQUFPLFFBQVEsV0FBVyxTQUFTO0FBQ3pDLFNBQUksU0FBUyxRQUFRLGdCQUFnQixFQUFHLE9BQU0sUUFBUSxRQUFRLFdBQVcsRUFBRSxHQUFHLGVBQWUsQ0FBQztBQUM5RixZQUFPO01BQ047QUFDRixtQkFBZSxLQUFLLGVBQWU7QUFDbkMsV0FBTztLQUNOO0tBQ0EsSUFBSSxlQUFlO0FBQ2xCLGFBQU8sYUFBYTs7S0FFckIsSUFBSSxXQUFXO0FBQ2QsYUFBTyxhQUFhOztLQUVyQixVQUFVLFlBQVk7QUFDckIsWUFBTTtBQUNOLFVBQUksTUFBTSxLQUFNLFFBQU8sTUFBTSxnQkFBZ0I7VUFDeEMsUUFBTyxNQUFNLFFBQVEsUUFBUSxXQUFXLEtBQUs7O0tBRW5ELFNBQVMsWUFBWTtBQUNwQixZQUFNO0FBQ04sYUFBTyxNQUFNLFFBQVEsUUFBUSxVQUFVOztLQUV4QyxVQUFVLE9BQU8sVUFBVTtBQUMxQixZQUFNO0FBQ04sVUFBSSxpQkFBaUI7QUFDcEIseUJBQWtCO0FBQ2xCLGFBQU0sUUFBUSxJQUFJLENBQUMsUUFBUSxRQUFRLFdBQVcsTUFBTSxFQUFFLFFBQVEsUUFBUSxXQUFXLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2xHLE9BQU0sUUFBUSxRQUFRLFdBQVcsTUFBTTs7S0FFL0MsU0FBUyxPQUFPLGVBQWU7QUFDOUIsWUFBTTtBQUNOLGFBQU8sTUFBTSxRQUFRLFFBQVEsV0FBVyxXQUFXOztLQUVwRCxhQUFhLE9BQU8sU0FBUztBQUM1QixZQUFNO0FBQ04sYUFBTyxNQUFNLFdBQVcsUUFBUSxXQUFXLEtBQUs7O0tBRWpELFlBQVksT0FBTyxlQUFlO0FBQ2pDLFlBQU07QUFDTixhQUFPLE1BQU0sV0FBVyxRQUFRLFdBQVcsV0FBVzs7S0FFdkQsUUFBUSxPQUFPLE1BQU0sUUFBUSxZQUFZLFVBQVUsYUFBYSxHQUFHLFlBQVksYUFBYSxFQUFFLFlBQVksYUFBYSxDQUFDLENBQUM7S0FDekg7S0FDQTs7R0FFRjs7Q0FFRixTQUFTLGFBQWEsYUFBYTtFQUNsQyxNQUFNLHVCQUF1QjtBQUM1QixPQUFJQSxVQUFRLFdBQVcsS0FBTSxPQUFNLE1BQU07Ozs7RUFJekM7QUFDQSxPQUFJQSxVQUFRLFdBQVcsS0FBTSxPQUFNLE1BQU0sOEVBQThFO0dBQ3ZILE1BQU0sT0FBT0EsVUFBUSxRQUFRO0FBQzdCLE9BQUksUUFBUSxLQUFNLE9BQU0sTUFBTSxvQkFBb0IsWUFBWSxnQkFBZ0I7QUFDOUUsVUFBTzs7RUFFUixNQUFNLGlDQUFpQyxJQUFJLEtBQUs7QUFDaEQsU0FBTztHQUNOLFNBQVMsT0FBTyxRQUFRO0FBQ3ZCLFlBQVEsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksRUFBRTs7R0FFMUMsVUFBVSxPQUFPLFNBQVM7SUFDekIsTUFBTSxTQUFTLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxLQUFLO0FBQy9DLFdBQU8sS0FBSyxLQUFLLFNBQVM7S0FDekI7S0FDQSxPQUFPLE9BQU8sUUFBUTtLQUN0QixFQUFFOztHQUVKLFNBQVMsT0FBTyxLQUFLLFVBQVU7QUFDOUIsUUFBSSxTQUFTLEtBQU0sT0FBTSxnQkFBZ0IsQ0FBQyxPQUFPLElBQUk7UUFDaEQsT0FBTSxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUM7O0dBRWxELFVBQVUsT0FBTyxXQUFXO0lBQzNCLE1BQU0sTUFBTSxPQUFPLFFBQVEsS0FBSyxFQUFFLEtBQUssWUFBWTtBQUNsRCxTQUFJLE9BQU87QUFDWCxZQUFPO09BQ0wsRUFBRSxDQUFDO0FBQ04sVUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLElBQUk7O0dBRWhDLFlBQVksT0FBTyxRQUFRO0FBQzFCLFVBQU0sZ0JBQWdCLENBQUMsT0FBTyxJQUFJOztHQUVuQyxhQUFhLE9BQU8sU0FBUztBQUM1QixVQUFNLGdCQUFnQixDQUFDLE9BQU8sS0FBSzs7R0FFcEMsT0FBTyxZQUFZO0FBQ2xCLFVBQU0sZ0JBQWdCLENBQUMsT0FBTzs7R0FFL0IsVUFBVSxZQUFZO0FBQ3JCLFdBQU8sTUFBTSxnQkFBZ0IsQ0FBQyxLQUFLOztHQUVwQyxpQkFBaUIsT0FBTyxTQUFTO0FBQ2hDLFVBQU0sZ0JBQWdCLENBQUMsSUFBSSxLQUFLOztHQUVqQyxNQUFNLEtBQUssSUFBSTtJQUNkLE1BQU0sWUFBWSxZQUFZO0tBQzdCLE1BQU0sU0FBUyxRQUFRO0FBQ3ZCLFNBQUksVUFBVSxRQUFRLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxDQUFFO0FBQ2hFLFFBQUcsT0FBTyxZQUFZLE1BQU0sT0FBTyxZQUFZLEtBQUs7O0FBRXJELG9CQUFnQixDQUFDLFVBQVUsWUFBWSxTQUFTO0FBQ2hELG1CQUFlLElBQUksU0FBUztBQUM1QixpQkFBYTtBQUNaLHFCQUFnQixDQUFDLFVBQVUsZUFBZSxTQUFTO0FBQ25ELG9CQUFlLE9BQU8sU0FBUzs7O0dBR2pDLFVBQVU7QUFDVCxtQkFBZSxTQUFTLGFBQWE7QUFDcEMscUJBQWdCLENBQUMsVUFBVSxlQUFlLFNBQVM7TUFDbEQ7QUFDRixtQkFBZSxPQUFPOztHQUV2Qjs7Q0FFRixJQUFJLGlCQUFpQixjQUFjLE1BQU07RUFDeEMsWUFBWSxLQUFLLFNBQVMsU0FBUztBQUNsQyxTQUFNLElBQUksUUFBUSx5QkFBeUIsSUFBSSxJQUFJLFFBQVE7QUFDM0QsUUFBSyxNQUFNO0FBQ1gsUUFBSyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRWhSakIsZUFBc0IsaUJBQWlCLFNBQVM7QUFDNUMsU0FBT0Msd0JBQUFBLFFBQVEsUUFBUSxZQUFZLFFBQVE7Ozs7Q0NySi9DLElBQVc7QUFDWCxFQUFDLFNBQVUsTUFBTTtBQUNiLE9BQUssZUFBZSxNQUFNO0VBQzFCLFNBQVMsU0FBUyxNQUFNO0FBQ3hCLE9BQUssV0FBVztFQUNoQixTQUFTLFlBQVksSUFBSTtBQUNyQixTQUFNLElBQUksT0FBTzs7QUFFckIsT0FBSyxjQUFjO0FBQ25CLE9BQUssZUFBZSxVQUFVO0dBQzFCLE1BQU0sTUFBTSxFQUFFO0FBQ2QsUUFBSyxNQUFNLFFBQVEsTUFDZixLQUFJLFFBQVE7QUFFaEIsVUFBTzs7QUFFWCxPQUFLLHNCQUFzQixRQUFRO0dBQy9CLE1BQU0sWUFBWSxLQUFLLFdBQVcsSUFBSSxDQUFDLFFBQVEsTUFBTSxPQUFPLElBQUksSUFBSSxRQUFRLFNBQVM7R0FDckYsTUFBTSxXQUFXLEVBQUU7QUFDbkIsUUFBSyxNQUFNLEtBQUssVUFDWixVQUFTLEtBQUssSUFBSTtBQUV0QixVQUFPLEtBQUssYUFBYSxTQUFTOztBQUV0QyxPQUFLLGdCQUFnQixRQUFRO0FBQ3pCLFVBQU8sS0FBSyxXQUFXLElBQUksQ0FBQyxJQUFJLFNBQVUsR0FBRztBQUN6QyxXQUFPLElBQUk7S0FDYjs7QUFFTixPQUFLLGFBQWEsT0FBTyxPQUFPLFNBQVMsY0FDbEMsUUFBUSxPQUFPLEtBQUssSUFBSSxJQUN4QixXQUFXO0dBQ1YsTUFBTSxPQUFPLEVBQUU7QUFDZixRQUFLLE1BQU0sT0FBTyxPQUNkLEtBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxRQUFRLElBQUksQ0FDakQsTUFBSyxLQUFLLElBQUk7QUFHdEIsVUFBTzs7QUFFZixPQUFLLFFBQVEsS0FBSyxZQUFZO0FBQzFCLFFBQUssTUFBTSxRQUFRLElBQ2YsS0FBSSxRQUFRLEtBQUssQ0FDYixRQUFPOztBQUluQixPQUFLLFlBQVksT0FBTyxPQUFPLGNBQWMsY0FDdEMsUUFBUSxPQUFPLFVBQVUsSUFBSSxJQUM3QixRQUFRLE9BQU8sUUFBUSxZQUFZLE9BQU8sU0FBUyxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksS0FBSztFQUN0RixTQUFTLFdBQVcsT0FBTyxZQUFZLE9BQU87QUFDMUMsVUFBTyxNQUFNLEtBQUssUUFBUyxPQUFPLFFBQVEsV0FBVyxJQUFJLElBQUksS0FBSyxJQUFLLENBQUMsS0FBSyxVQUFVOztBQUUzRixPQUFLLGFBQWE7QUFDbEIsT0FBSyx5QkFBeUIsR0FBRyxVQUFVO0FBQ3ZDLE9BQUksT0FBTyxVQUFVLFNBQ2pCLFFBQU8sTUFBTSxVQUFVO0FBRTNCLFVBQU87O0lBRVosU0FBUyxPQUFPLEVBQUUsRUFBRTtDQUN2QixJQUFXO0FBQ1gsRUFBQyxTQUFVLFlBQVk7QUFDbkIsYUFBVyxlQUFlLE9BQU8sV0FBVztBQUN4QyxVQUFPO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDTjs7SUFFTixlQUFlLGFBQWEsRUFBRSxFQUFFO0NBQ25DLElBQWEsZ0JBQWdCLEtBQUssWUFBWTtFQUMxQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0gsQ0FBQztDQUNGLElBQWEsaUJBQWlCLFNBQVM7QUFFbkMsVUFEVSxPQUFPLE1BQ2pCO0dBQ0ksS0FBSyxZQUNELFFBQU8sY0FBYztHQUN6QixLQUFLLFNBQ0QsUUFBTyxjQUFjO0dBQ3pCLEtBQUssU0FDRCxRQUFPLE9BQU8sTUFBTSxLQUFLLEdBQUcsY0FBYyxNQUFNLGNBQWM7R0FDbEUsS0FBSyxVQUNELFFBQU8sY0FBYztHQUN6QixLQUFLLFdBQ0QsUUFBTyxjQUFjO0dBQ3pCLEtBQUssU0FDRCxRQUFPLGNBQWM7R0FDekIsS0FBSyxTQUNELFFBQU8sY0FBYztHQUN6QixLQUFLO0FBQ0QsUUFBSSxNQUFNLFFBQVEsS0FBSyxDQUNuQixRQUFPLGNBQWM7QUFFekIsUUFBSSxTQUFTLEtBQ1QsUUFBTyxjQUFjO0FBRXpCLFFBQUksS0FBSyxRQUFRLE9BQU8sS0FBSyxTQUFTLGNBQWMsS0FBSyxTQUFTLE9BQU8sS0FBSyxVQUFVLFdBQ3BGLFFBQU8sY0FBYztBQUV6QixRQUFJLE9BQU8sUUFBUSxlQUFlLGdCQUFnQixJQUM5QyxRQUFPLGNBQWM7QUFFekIsUUFBSSxPQUFPLFFBQVEsZUFBZSxnQkFBZ0IsSUFDOUMsUUFBTyxjQUFjO0FBRXpCLFFBQUksT0FBTyxTQUFTLGVBQWUsZ0JBQWdCLEtBQy9DLFFBQU8sY0FBYztBQUV6QixXQUFPLGNBQWM7R0FDekIsUUFDSSxRQUFPLGNBQWM7Ozs7O0NDaklqQyxJQUFhLGVBQWUsS0FBSyxZQUFZO0VBQ3pDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0gsQ0FBQztDQUtGLElBQWEsV0FBYixNQUFhLGlCQUFpQixNQUFNO0VBQ2hDLElBQUksU0FBUztBQUNULFVBQU8sS0FBSzs7RUFFaEIsWUFBWSxRQUFRO0FBQ2hCLFVBQU87QUFDUCxRQUFLLFNBQVMsRUFBRTtBQUNoQixRQUFLLFlBQVksUUFBUTtBQUNyQixTQUFLLFNBQVMsQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJOztBQUV2QyxRQUFLLGFBQWEsT0FBTyxFQUFFLEtBQUs7QUFDNUIsU0FBSyxTQUFTLENBQUMsR0FBRyxLQUFLLFFBQVEsR0FBRyxLQUFLOztHQUUzQyxNQUFNLGNBQWMsSUFBSSxPQUFPO0FBQy9CLE9BQUksT0FBTyxlQUVQLFFBQU8sZUFBZSxNQUFNLFlBQVk7T0FHeEMsTUFBSyxZQUFZO0FBRXJCLFFBQUssT0FBTztBQUNaLFFBQUssU0FBUzs7RUFFbEIsT0FBTyxTQUFTO0dBQ1osTUFBTSxTQUFTLFdBQ1gsU0FBVSxPQUFPO0FBQ2IsV0FBTyxNQUFNOztHQUVyQixNQUFNLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRTtHQUNuQyxNQUFNLGdCQUFnQixVQUFVO0FBQzVCLFNBQUssTUFBTSxTQUFTLE1BQU0sT0FDdEIsS0FBSSxNQUFNLFNBQVMsZ0JBQ2YsT0FBTSxZQUFZLElBQUksYUFBYTthQUU5QixNQUFNLFNBQVMsc0JBQ3BCLGNBQWEsTUFBTSxnQkFBZ0I7YUFFOUIsTUFBTSxTQUFTLG9CQUNwQixjQUFhLE1BQU0sZUFBZTthQUU3QixNQUFNLEtBQUssV0FBVyxFQUMzQixhQUFZLFFBQVEsS0FBSyxPQUFPLE1BQU0sQ0FBQztTQUV0QztLQUNELElBQUksT0FBTztLQUNYLElBQUksSUFBSTtBQUNSLFlBQU8sSUFBSSxNQUFNLEtBQUssUUFBUTtNQUMxQixNQUFNLEtBQUssTUFBTSxLQUFLO0FBRXRCLFVBQUksRUFEYSxNQUFNLE1BQU0sS0FBSyxTQUFTLEdBRXZDLE1BQUssTUFBTSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRTtXQVNyQztBQUNELFlBQUssTUFBTSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRTtBQUN0QyxZQUFLLElBQUksUUFBUSxLQUFLLE9BQU8sTUFBTSxDQUFDOztBQUV4QyxhQUFPLEtBQUs7QUFDWjs7OztBQUtoQixnQkFBYSxLQUFLO0FBQ2xCLFVBQU87O0VBRVgsT0FBTyxPQUFPLE9BQU87QUFDakIsT0FBSSxFQUFFLGlCQUFpQixVQUNuQixPQUFNLElBQUksTUFBTSxtQkFBbUIsUUFBUTs7RUFHbkQsV0FBVztBQUNQLFVBQU8sS0FBSzs7RUFFaEIsSUFBSSxVQUFVO0FBQ1YsVUFBTyxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssdUJBQXVCLEVBQUU7O0VBRXJFLElBQUksVUFBVTtBQUNWLFVBQU8sS0FBSyxPQUFPLFdBQVc7O0VBRWxDLFFBQVEsVUFBVSxVQUFVLE1BQU0sU0FBUztHQUN2QyxNQUFNLGNBQWMsRUFBRTtHQUN0QixNQUFNLGFBQWEsRUFBRTtBQUNyQixRQUFLLE1BQU0sT0FBTyxLQUFLLE9BQ25CLEtBQUksSUFBSSxLQUFLLFNBQVMsR0FBRztJQUNyQixNQUFNLFVBQVUsSUFBSSxLQUFLO0FBQ3pCLGdCQUFZLFdBQVcsWUFBWSxZQUFZLEVBQUU7QUFDakQsZ0JBQVksU0FBUyxLQUFLLE9BQU8sSUFBSSxDQUFDO1NBR3RDLFlBQVcsS0FBSyxPQUFPLElBQUksQ0FBQztBQUdwQyxVQUFPO0lBQUU7SUFBWTtJQUFhOztFQUV0QyxJQUFJLGFBQWE7QUFDYixVQUFPLEtBQUssU0FBUzs7O0FBRzdCLFVBQVMsVUFBVSxXQUFXO0FBRTFCLFNBRGMsSUFBSSxTQUFTLE9BQU87Ozs7Q0NoSXRDLElBQU0sWUFBWSxPQUFPLFNBQVM7RUFDOUIsSUFBSTtBQUNKLFVBQVEsTUFBTSxNQUFkO0dBQ0ksS0FBSyxhQUFhO0FBQ2QsUUFBSSxNQUFNLGFBQWEsY0FBYyxVQUNqQyxXQUFVO1FBR1YsV0FBVSxZQUFZLE1BQU0sU0FBUyxhQUFhLE1BQU07QUFFNUQ7R0FDSixLQUFLLGFBQWE7QUFDZCxjQUFVLG1DQUFtQyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssc0JBQXNCO0FBQ3ZHO0dBQ0osS0FBSyxhQUFhO0FBQ2QsY0FBVSxrQ0FBa0MsS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLO0FBQzdFO0dBQ0osS0FBSyxhQUFhO0FBQ2QsY0FBVTtBQUNWO0dBQ0osS0FBSyxhQUFhO0FBQ2QsY0FBVSx5Q0FBeUMsS0FBSyxXQUFXLE1BQU0sUUFBUTtBQUNqRjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVUsZ0NBQWdDLEtBQUssV0FBVyxNQUFNLFFBQVEsQ0FBQyxjQUFjLE1BQU0sU0FBUztBQUN0RztHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLFFBQUksT0FBTyxNQUFNLGVBQWUsU0FDNUIsS0FBSSxjQUFjLE1BQU0sWUFBWTtBQUNoQyxlQUFVLGdDQUFnQyxNQUFNLFdBQVcsU0FBUztBQUNwRSxTQUFJLE9BQU8sTUFBTSxXQUFXLGFBQWEsU0FDckMsV0FBVSxHQUFHLFFBQVEscURBQXFELE1BQU0sV0FBVztlQUcxRixnQkFBZ0IsTUFBTSxXQUMzQixXQUFVLG1DQUFtQyxNQUFNLFdBQVcsV0FBVzthQUVwRSxjQUFjLE1BQU0sV0FDekIsV0FBVSxpQ0FBaUMsTUFBTSxXQUFXLFNBQVM7UUFHckUsTUFBSyxZQUFZLE1BQU0sV0FBVzthQUdqQyxNQUFNLGVBQWUsUUFDMUIsV0FBVSxXQUFXLE1BQU07UUFHM0IsV0FBVTtBQUVkO0dBQ0osS0FBSyxhQUFhO0FBQ2QsUUFBSSxNQUFNLFNBQVMsUUFDZixXQUFVLHNCQUFzQixNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxZQUFZLEdBQUcsTUFBTSxRQUFRO2FBQ2pILE1BQU0sU0FBUyxTQUNwQixXQUFVLHVCQUF1QixNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEdBQUcsTUFBTSxRQUFRO2FBQzdHLE1BQU0sU0FBUyxTQUNwQixXQUFVLGtCQUFrQixNQUFNLFFBQVEsc0JBQXNCLE1BQU0sWUFBWSw4QkFBOEIsa0JBQWtCLE1BQU07YUFDbkksTUFBTSxTQUFTLFNBQ3BCLFdBQVUsa0JBQWtCLE1BQU0sUUFBUSxzQkFBc0IsTUFBTSxZQUFZLDhCQUE4QixrQkFBa0IsTUFBTTthQUNuSSxNQUFNLFNBQVMsT0FDcEIsV0FBVSxnQkFBZ0IsTUFBTSxRQUFRLHNCQUFzQixNQUFNLFlBQVksOEJBQThCLGtCQUFrQixJQUFJLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztRQUUvSixXQUFVO0FBQ2Q7R0FDSixLQUFLLGFBQWE7QUFDZCxRQUFJLE1BQU0sU0FBUyxRQUNmLFdBQVUsc0JBQXNCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxZQUFZLFlBQVksR0FBRyxNQUFNLFFBQVE7YUFDaEgsTUFBTSxTQUFTLFNBQ3BCLFdBQVUsdUJBQXVCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxZQUFZLFFBQVEsR0FBRyxNQUFNLFFBQVE7YUFDN0csTUFBTSxTQUFTLFNBQ3BCLFdBQVUsa0JBQWtCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSwwQkFBMEIsWUFBWSxHQUFHLE1BQU07YUFDbEgsTUFBTSxTQUFTLFNBQ3BCLFdBQVUsa0JBQWtCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSwwQkFBMEIsWUFBWSxHQUFHLE1BQU07YUFDbEgsTUFBTSxTQUFTLE9BQ3BCLFdBQVUsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSw2QkFBNkIsZUFBZSxHQUFHLElBQUksS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO1FBRXBKLFdBQVU7QUFDZDtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVUsZ0NBQWdDLE1BQU07QUFDaEQ7R0FDSixLQUFLLGFBQWE7QUFDZCxjQUFVO0FBQ1Y7R0FDSjtBQUNJLGNBQVUsS0FBSztBQUNmLFNBQUssWUFBWSxNQUFNOztBQUUvQixTQUFPLEVBQUUsU0FBUzs7OztDQ3pHdEIsSUFBSSxtQkFBbUJDO0NBS3ZCLFNBQWdCLGNBQWM7QUFDMUIsU0FBTzs7OztDQ0xYLElBQWEsYUFBYSxXQUFXO0VBQ2pDLE1BQU0sRUFBRSxNQUFNLE1BQU0sV0FBVyxjQUFjO0VBQzdDLE1BQU0sV0FBVyxDQUFDLEdBQUcsTUFBTSxHQUFJLFVBQVUsUUFBUSxFQUFFLENBQUU7RUFDckQsTUFBTSxZQUFZO0dBQ2QsR0FBRztHQUNILE1BQU07R0FDVDtBQUNELE1BQUksVUFBVSxZQUFZLEtBQUEsRUFDdEIsUUFBTztHQUNILEdBQUc7R0FDSCxNQUFNO0dBQ04sU0FBUyxVQUFVO0dBQ3RCO0VBRUwsSUFBSSxlQUFlO0VBQ25CLE1BQU0sT0FBTyxVQUNSLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUNsQixPQUFPLENBQ1AsU0FBUztBQUNkLE9BQUssTUFBTSxPQUFPLEtBQ2QsZ0JBQWUsSUFBSSxXQUFXO0dBQUU7R0FBTSxjQUFjO0dBQWMsQ0FBQyxDQUFDO0FBRXhFLFNBQU87R0FDSCxHQUFHO0dBQ0gsTUFBTTtHQUNOLFNBQVM7R0FDWjs7Q0FHTCxTQUFnQixrQkFBa0IsS0FBSyxXQUFXO0VBQzlDLE1BQU0sY0FBYyxhQUFhO0VBQ2pDLE1BQU0sUUFBUSxVQUFVO0dBQ1Q7R0FDWCxNQUFNLElBQUk7R0FDVixNQUFNLElBQUk7R0FDVixXQUFXO0lBQ1AsSUFBSSxPQUFPO0lBQ1gsSUFBSTtJQUNKO0lBQ0EsZ0JBQWdCQyxXQUFrQixLQUFBLElBQVlBO0lBQ2pELENBQUMsUUFBUSxNQUFNLENBQUMsQ0FBQyxFQUFFO0dBQ3ZCLENBQUM7QUFDRixNQUFJLE9BQU8sT0FBTyxLQUFLLE1BQU07O0NBRWpDLElBQWEsY0FBYixNQUFhLFlBQVk7RUFDckIsY0FBYztBQUNWLFFBQUssUUFBUTs7RUFFakIsUUFBUTtBQUNKLE9BQUksS0FBSyxVQUFVLFFBQ2YsTUFBSyxRQUFROztFQUVyQixRQUFRO0FBQ0osT0FBSSxLQUFLLFVBQVUsVUFDZixNQUFLLFFBQVE7O0VBRXJCLE9BQU8sV0FBVyxRQUFRLFNBQVM7R0FDL0IsTUFBTSxhQUFhLEVBQUU7QUFDckIsUUFBSyxNQUFNLEtBQUssU0FBUztBQUNyQixRQUFJLEVBQUUsV0FBVyxVQUNiLFFBQU87QUFDWCxRQUFJLEVBQUUsV0FBVyxRQUNiLFFBQU8sT0FBTztBQUNsQixlQUFXLEtBQUssRUFBRSxNQUFNOztBQUU1QixVQUFPO0lBQUUsUUFBUSxPQUFPO0lBQU8sT0FBTztJQUFZOztFQUV0RCxhQUFhLGlCQUFpQixRQUFRLE9BQU87R0FDekMsTUFBTSxZQUFZLEVBQUU7QUFDcEIsUUFBSyxNQUFNLFFBQVEsT0FBTztJQUN0QixNQUFNLE1BQU0sTUFBTSxLQUFLO0lBQ3ZCLE1BQU0sUUFBUSxNQUFNLEtBQUs7QUFDekIsY0FBVSxLQUFLO0tBQ1g7S0FDQTtLQUNILENBQUM7O0FBRU4sVUFBTyxZQUFZLGdCQUFnQixRQUFRLFVBQVU7O0VBRXpELE9BQU8sZ0JBQWdCLFFBQVEsT0FBTztHQUNsQyxNQUFNLGNBQWMsRUFBRTtBQUN0QixRQUFLLE1BQU0sUUFBUSxPQUFPO0lBQ3RCLE1BQU0sRUFBRSxLQUFLLFVBQVU7QUFDdkIsUUFBSSxJQUFJLFdBQVcsVUFDZixRQUFPO0FBQ1gsUUFBSSxNQUFNLFdBQVcsVUFDakIsUUFBTztBQUNYLFFBQUksSUFBSSxXQUFXLFFBQ2YsUUFBTyxPQUFPO0FBQ2xCLFFBQUksTUFBTSxXQUFXLFFBQ2pCLFFBQU8sT0FBTztBQUNsQixRQUFJLElBQUksVUFBVSxnQkFBZ0IsT0FBTyxNQUFNLFVBQVUsZUFBZSxLQUFLLFdBQ3pFLGFBQVksSUFBSSxTQUFTLE1BQU07O0FBR3ZDLFVBQU87SUFBRSxRQUFRLE9BQU87SUFBTyxPQUFPO0lBQWE7OztDQUczRCxJQUFhLFVBQVUsT0FBTyxPQUFPLEVBQ2pDLFFBQVEsV0FDWCxDQUFDO0NBQ0YsSUFBYSxTQUFTLFdBQVc7RUFBRSxRQUFRO0VBQVM7RUFBTztDQUMzRCxJQUFhLE1BQU0sV0FBVztFQUFFLFFBQVE7RUFBUztFQUFPO0NBQ3hELElBQWEsYUFBYSxNQUFNLEVBQUUsV0FBVztDQUM3QyxJQUFhLFdBQVcsTUFBTSxFQUFFLFdBQVc7Q0FDM0MsSUFBYSxXQUFXLE1BQU0sRUFBRSxXQUFXO0NBQzNDLElBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxlQUFlLGFBQWE7OztDQzVHN0UsSUFBVztBQUNYLEVBQUMsU0FBVSxXQUFXO0FBQ2xCLFlBQVUsWUFBWSxZQUFZLE9BQU8sWUFBWSxXQUFXLEVBQUUsU0FBUyxHQUFHLFdBQVcsRUFBRTtBQUUzRixZQUFVLFlBQVksWUFBWSxPQUFPLFlBQVksV0FBVyxVQUFVLFNBQVM7SUFDcEYsY0FBYyxZQUFZLEVBQUUsRUFBRTs7O0NDQWpDLElBQU0scUJBQU4sTUFBeUI7RUFDckIsWUFBWSxRQUFRLE9BQU8sTUFBTSxLQUFLO0FBQ2xDLFFBQUssY0FBYyxFQUFFO0FBQ3JCLFFBQUssU0FBUztBQUNkLFFBQUssT0FBTztBQUNaLFFBQUssUUFBUTtBQUNiLFFBQUssT0FBTzs7RUFFaEIsSUFBSSxPQUFPO0FBQ1AsT0FBSSxDQUFDLEtBQUssWUFBWSxPQUNsQixLQUFJLE1BQU0sUUFBUSxLQUFLLEtBQUssQ0FDeEIsTUFBSyxZQUFZLEtBQUssR0FBRyxLQUFLLE9BQU8sR0FBRyxLQUFLLEtBQUs7T0FHbEQsTUFBSyxZQUFZLEtBQUssR0FBRyxLQUFLLE9BQU8sS0FBSyxLQUFLO0FBR3ZELFVBQU8sS0FBSzs7O0NBR3BCLElBQU0sZ0JBQWdCLEtBQUssV0FBVztBQUNsQyxNQUFJLFFBQVEsT0FBTyxDQUNmLFFBQU87R0FBRSxTQUFTO0dBQU0sTUFBTSxPQUFPO0dBQU87T0FFM0M7QUFDRCxPQUFJLENBQUMsSUFBSSxPQUFPLE9BQU8sT0FDbkIsT0FBTSxJQUFJLE1BQU0sNENBQTRDO0FBRWhFLFVBQU87SUFDSCxTQUFTO0lBQ1QsSUFBSSxRQUFRO0FBQ1IsU0FBSSxLQUFLLE9BQ0wsUUFBTyxLQUFLO0FBRWhCLFVBQUssU0FEUyxJQUFJLFNBQVMsSUFBSSxPQUFPLE9BQU87QUFFN0MsWUFBTyxLQUFLOztJQUVuQjs7O0NBR1QsU0FBUyxvQkFBb0IsUUFBUTtBQUNqQyxNQUFJLENBQUMsT0FDRCxRQUFPLEVBQUU7RUFDYixNQUFNLEVBQUUsVUFBVSxvQkFBb0IsZ0JBQWdCLGdCQUFnQjtBQUN0RSxNQUFJLGFBQWEsc0JBQXNCLGdCQUNuQyxPQUFNLElBQUksTUFBTSwyRkFBMkY7QUFFL0csTUFBSSxTQUNBLFFBQU87R0FBWTtHQUFVO0dBQWE7RUFDOUMsTUFBTSxhQUFhLEtBQUssUUFBUTtHQUM1QixNQUFNLEVBQUUsWUFBWTtBQUNwQixPQUFJLElBQUksU0FBUyxxQkFDYixRQUFPLEVBQUUsU0FBUyxXQUFXLElBQUksY0FBYztBQUVuRCxPQUFJLE9BQU8sSUFBSSxTQUFTLFlBQ3BCLFFBQU8sRUFBRSxTQUFTLFdBQVcsa0JBQWtCLElBQUksY0FBYztBQUVyRSxPQUFJLElBQUksU0FBUyxlQUNiLFFBQU8sRUFBRSxTQUFTLElBQUksY0FBYztBQUN4QyxVQUFPLEVBQUUsU0FBUyxXQUFXLHNCQUFzQixJQUFJLGNBQWM7O0FBRXpFLFNBQU87R0FBRSxVQUFVO0dBQVc7R0FBYTs7Q0FFL0MsSUFBYSxVQUFiLE1BQXFCO0VBQ2pCLElBQUksY0FBYztBQUNkLFVBQU8sS0FBSyxLQUFLOztFQUVyQixTQUFTLE9BQU87QUFDWixVQUFPLGNBQWMsTUFBTSxLQUFLOztFQUVwQyxnQkFBZ0IsT0FBTyxLQUFLO0FBQ3hCLFVBQVEsT0FBTztJQUNYLFFBQVEsTUFBTSxPQUFPO0lBQ3JCLE1BQU0sTUFBTTtJQUNaLFlBQVksY0FBYyxNQUFNLEtBQUs7SUFDckMsZ0JBQWdCLEtBQUssS0FBSztJQUMxQixNQUFNLE1BQU07SUFDWixRQUFRLE1BQU07SUFDakI7O0VBRUwsb0JBQW9CLE9BQU87QUFDdkIsVUFBTztJQUNILFFBQVEsSUFBSSxhQUFhO0lBQ3pCLEtBQUs7S0FDRCxRQUFRLE1BQU0sT0FBTztLQUNyQixNQUFNLE1BQU07S0FDWixZQUFZLGNBQWMsTUFBTSxLQUFLO0tBQ3JDLGdCQUFnQixLQUFLLEtBQUs7S0FDMUIsTUFBTSxNQUFNO0tBQ1osUUFBUSxNQUFNO0tBQ2pCO0lBQ0o7O0VBRUwsV0FBVyxPQUFPO0dBQ2QsTUFBTSxTQUFTLEtBQUssT0FBTyxNQUFNO0FBQ2pDLE9BQUksUUFBUSxPQUFPLENBQ2YsT0FBTSxJQUFJLE1BQU0seUNBQXlDO0FBRTdELFVBQU87O0VBRVgsWUFBWSxPQUFPO0dBQ2YsTUFBTSxTQUFTLEtBQUssT0FBTyxNQUFNO0FBQ2pDLFVBQU8sUUFBUSxRQUFRLE9BQU87O0VBRWxDLE1BQU0sTUFBTSxRQUFRO0dBQ2hCLE1BQU0sU0FBUyxLQUFLLFVBQVUsTUFBTSxPQUFPO0FBQzNDLE9BQUksT0FBTyxRQUNQLFFBQU8sT0FBTztBQUNsQixTQUFNLE9BQU87O0VBRWpCLFVBQVUsTUFBTSxRQUFRO0dBQ3BCLE1BQU0sTUFBTTtJQUNSLFFBQVE7S0FDSixRQUFRLEVBQUU7S0FDVixPQUFPLFFBQVEsU0FBUztLQUN4QixvQkFBb0IsUUFBUTtLQUMvQjtJQUNELE1BQU0sUUFBUSxRQUFRLEVBQUU7SUFDeEIsZ0JBQWdCLEtBQUssS0FBSztJQUMxQixRQUFRO0lBQ1I7SUFDQSxZQUFZLGNBQWMsS0FBSztJQUNsQztBQUVELFVBQU8sYUFBYSxLQURMLEtBQUssV0FBVztJQUFFO0lBQU0sTUFBTSxJQUFJO0lBQU0sUUFBUTtJQUFLLENBQUMsQ0FDckM7O0VBRXBDLFlBQVksTUFBTTtHQUNkLE1BQU0sTUFBTTtJQUNSLFFBQVE7S0FDSixRQUFRLEVBQUU7S0FDVixPQUFPLENBQUMsQ0FBQyxLQUFLLGFBQWE7S0FDOUI7SUFDRCxNQUFNLEVBQUU7SUFDUixnQkFBZ0IsS0FBSyxLQUFLO0lBQzFCLFFBQVE7SUFDUjtJQUNBLFlBQVksY0FBYyxLQUFLO0lBQ2xDO0FBQ0QsT0FBSSxDQUFDLEtBQUssYUFBYSxNQUNuQixLQUFJO0lBQ0EsTUFBTSxTQUFTLEtBQUssV0FBVztLQUFFO0tBQU0sTUFBTSxFQUFFO0tBQUUsUUFBUTtLQUFLLENBQUM7QUFDL0QsV0FBTyxRQUFRLE9BQU8sR0FDaEIsRUFDRSxPQUFPLE9BQU8sT0FDakIsR0FDQyxFQUNFLFFBQVEsSUFBSSxPQUFPLFFBQ3RCO1lBRUYsS0FBSztBQUNSLFFBQUksS0FBSyxTQUFTLGFBQWEsRUFBRSxTQUFTLGNBQWMsQ0FDcEQsTUFBSyxhQUFhLFFBQVE7QUFFOUIsUUFBSSxTQUFTO0tBQ1QsUUFBUSxFQUFFO0tBQ1YsT0FBTztLQUNWOztBQUdULFVBQU8sS0FBSyxZQUFZO0lBQUU7SUFBTSxNQUFNLEVBQUU7SUFBRSxRQUFRO0lBQUssQ0FBQyxDQUFDLE1BQU0sV0FBVyxRQUFRLE9BQU8sR0FDbkYsRUFDRSxPQUFPLE9BQU8sT0FDakIsR0FDQyxFQUNFLFFBQVEsSUFBSSxPQUFPLFFBQ3RCLENBQUM7O0VBRVYsTUFBTSxXQUFXLE1BQU0sUUFBUTtHQUMzQixNQUFNLFNBQVMsTUFBTSxLQUFLLGVBQWUsTUFBTSxPQUFPO0FBQ3RELE9BQUksT0FBTyxRQUNQLFFBQU8sT0FBTztBQUNsQixTQUFNLE9BQU87O0VBRWpCLE1BQU0sZUFBZSxNQUFNLFFBQVE7R0FDL0IsTUFBTSxNQUFNO0lBQ1IsUUFBUTtLQUNKLFFBQVEsRUFBRTtLQUNWLG9CQUFvQixRQUFRO0tBQzVCLE9BQU87S0FDVjtJQUNELE1BQU0sUUFBUSxRQUFRLEVBQUU7SUFDeEIsZ0JBQWdCLEtBQUssS0FBSztJQUMxQixRQUFRO0lBQ1I7SUFDQSxZQUFZLGNBQWMsS0FBSztJQUNsQztHQUNELE1BQU0sbUJBQW1CLEtBQUssT0FBTztJQUFFO0lBQU0sTUFBTSxJQUFJO0lBQU0sUUFBUTtJQUFLLENBQUM7QUFFM0UsVUFBTyxhQUFhLEtBREwsT0FBTyxRQUFRLGlCQUFpQixHQUFHLG1CQUFtQixRQUFRLFFBQVEsaUJBQWlCLEVBQ3RFOztFQUVwQyxPQUFPLE9BQU8sU0FBUztHQUNuQixNQUFNLHNCQUFzQixRQUFRO0FBQ2hDLFFBQUksT0FBTyxZQUFZLFlBQVksT0FBTyxZQUFZLFlBQ2xELFFBQU8sRUFBRSxTQUFTO2FBRWIsT0FBTyxZQUFZLFdBQ3hCLFFBQU8sUUFBUSxJQUFJO1FBR25CLFFBQU87O0FBR2YsVUFBTyxLQUFLLGFBQWEsS0FBSyxRQUFRO0lBQ2xDLE1BQU0sU0FBUyxNQUFNLElBQUk7SUFDekIsTUFBTSxpQkFBaUIsSUFBSSxTQUFTO0tBQ2hDLE1BQU0sYUFBYTtLQUNuQixHQUFHLG1CQUFtQixJQUFJO0tBQzdCLENBQUM7QUFDRixRQUFJLE9BQU8sWUFBWSxlQUFlLGtCQUFrQixRQUNwRCxRQUFPLE9BQU8sTUFBTSxTQUFTO0FBQ3pCLFNBQUksQ0FBQyxNQUFNO0FBQ1AsZ0JBQVU7QUFDVixhQUFPO1dBR1AsUUFBTztNQUViO0FBRU4sUUFBSSxDQUFDLFFBQVE7QUFDVCxlQUFVO0FBQ1YsWUFBTztVQUdQLFFBQU87S0FFYjs7RUFFTixXQUFXLE9BQU8sZ0JBQWdCO0FBQzlCLFVBQU8sS0FBSyxhQUFhLEtBQUssUUFBUTtBQUNsQyxRQUFJLENBQUMsTUFBTSxJQUFJLEVBQUU7QUFDYixTQUFJLFNBQVMsT0FBTyxtQkFBbUIsYUFBYSxlQUFlLEtBQUssSUFBSSxHQUFHLGVBQWU7QUFDOUYsWUFBTztVQUdQLFFBQU87S0FFYjs7RUFFTixZQUFZLFlBQVk7QUFDcEIsVUFBTyxJQUFJLFdBQVc7SUFDbEIsUUFBUTtJQUNSLFVBQVUsc0JBQXNCO0lBQ2hDLFFBQVE7S0FBRSxNQUFNO0tBQWM7S0FBWTtJQUM3QyxDQUFDOztFQUVOLFlBQVksWUFBWTtBQUNwQixVQUFPLEtBQUssWUFBWSxXQUFXOztFQUV2QyxZQUFZLEtBQUs7O0FBRWIsUUFBSyxNQUFNLEtBQUs7QUFDaEIsUUFBSyxPQUFPO0FBQ1osUUFBSyxRQUFRLEtBQUssTUFBTSxLQUFLLEtBQUs7QUFDbEMsUUFBSyxZQUFZLEtBQUssVUFBVSxLQUFLLEtBQUs7QUFDMUMsUUFBSyxhQUFhLEtBQUssV0FBVyxLQUFLLEtBQUs7QUFDNUMsUUFBSyxpQkFBaUIsS0FBSyxlQUFlLEtBQUssS0FBSztBQUNwRCxRQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSztBQUM5QixRQUFLLFNBQVMsS0FBSyxPQUFPLEtBQUssS0FBSztBQUNwQyxRQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssS0FBSztBQUM1QyxRQUFLLGNBQWMsS0FBSyxZQUFZLEtBQUssS0FBSztBQUM5QyxRQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSztBQUN4QyxRQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSztBQUN4QyxRQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssS0FBSztBQUN0QyxRQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssS0FBSztBQUNsQyxRQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssS0FBSztBQUN0QyxRQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssS0FBSztBQUM1QixRQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSztBQUM5QixRQUFLLFlBQVksS0FBSyxVQUFVLEtBQUssS0FBSztBQUMxQyxRQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssS0FBSztBQUNsQyxRQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssS0FBSztBQUN0QyxRQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssS0FBSztBQUNsQyxRQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSztBQUN4QyxRQUFLLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSztBQUNoQyxRQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSztBQUN4QyxRQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssS0FBSztBQUM1QyxRQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssS0FBSztBQUM1QyxRQUFLLGVBQWU7SUFDaEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXLFNBQVMsS0FBSyxhQUFhLEtBQUs7SUFDOUM7O0VBRUwsV0FBVztBQUNQLFVBQU8sWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLOztFQUU5QyxXQUFXO0FBQ1AsVUFBTyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUs7O0VBRTlDLFVBQVU7QUFDTixVQUFPLEtBQUssVUFBVSxDQUFDLFVBQVU7O0VBRXJDLFFBQVE7QUFDSixVQUFPLFNBQVMsT0FBTyxLQUFLOztFQUVoQyxVQUFVO0FBQ04sVUFBTyxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUs7O0VBRTdDLEdBQUcsUUFBUTtBQUNQLFVBQU8sU0FBUyxPQUFPLENBQUMsTUFBTSxPQUFPLEVBQUUsS0FBSyxLQUFLOztFQUVyRCxJQUFJLFVBQVU7QUFDVixVQUFPLGdCQUFnQixPQUFPLE1BQU0sVUFBVSxLQUFLLEtBQUs7O0VBRTVELFVBQVUsV0FBVztBQUNqQixVQUFPLElBQUksV0FBVztJQUNsQixHQUFHLG9CQUFvQixLQUFLLEtBQUs7SUFDakMsUUFBUTtJQUNSLFVBQVUsc0JBQXNCO0lBQ2hDLFFBQVE7S0FBRSxNQUFNO0tBQWE7S0FBVztJQUMzQyxDQUFDOztFQUVOLFFBQVEsS0FBSztHQUNULE1BQU0sbUJBQW1CLE9BQU8sUUFBUSxhQUFhLFlBQVk7QUFDakUsVUFBTyxJQUFJLFdBQVc7SUFDbEIsR0FBRyxvQkFBb0IsS0FBSyxLQUFLO0lBQ2pDLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVSxzQkFBc0I7SUFDbkMsQ0FBQzs7RUFFTixRQUFRO0FBQ0osVUFBTyxJQUFJLFdBQVc7SUFDbEIsVUFBVSxzQkFBc0I7SUFDaEMsTUFBTTtJQUNOLEdBQUcsb0JBQW9CLEtBQUssS0FBSztJQUNwQyxDQUFDOztFQUVOLE1BQU0sS0FBSztHQUNQLE1BQU0saUJBQWlCLE9BQU8sUUFBUSxhQUFhLFlBQVk7QUFDL0QsVUFBTyxJQUFJLFNBQVM7SUFDaEIsR0FBRyxvQkFBb0IsS0FBSyxLQUFLO0lBQ2pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVSxzQkFBc0I7SUFDbkMsQ0FBQzs7RUFFTixTQUFTLGFBQWE7R0FDbEIsTUFBTSxPQUFPLEtBQUs7QUFDbEIsVUFBTyxJQUFJLEtBQUs7SUFDWixHQUFHLEtBQUs7SUFDUjtJQUNILENBQUM7O0VBRU4sS0FBSyxRQUFRO0FBQ1QsVUFBTyxZQUFZLE9BQU8sTUFBTSxPQUFPOztFQUUzQyxXQUFXO0FBQ1AsVUFBTyxZQUFZLE9BQU8sS0FBSzs7RUFFbkMsYUFBYTtBQUNULFVBQU8sS0FBSyxVQUFVLEtBQUEsRUFBVSxDQUFDOztFQUVyQyxhQUFhO0FBQ1QsVUFBTyxLQUFLLFVBQVUsS0FBSyxDQUFDOzs7Q0FHcEMsSUFBTSxZQUFZO0NBQ2xCLElBQU0sYUFBYTtDQUNuQixJQUFNLFlBQVk7Q0FHbEIsSUFBTSxZQUFZO0NBQ2xCLElBQU0sY0FBYztDQUNwQixJQUFNLFdBQVc7Q0FDakIsSUFBTSxnQkFBZ0I7Q0FhdEIsSUFBTSxhQUFhO0NBSW5CLElBQU0sY0FBYztDQUNwQixJQUFJO0NBRUosSUFBTSxZQUFZO0NBQ2xCLElBQU0sZ0JBQWdCO0NBR3RCLElBQU0sWUFBWTtDQUNsQixJQUFNLGdCQUFnQjtDQUV0QixJQUFNLGNBQWM7Q0FFcEIsSUFBTSxpQkFBaUI7Q0FNdkIsSUFBTSxrQkFBa0I7Q0FDeEIsSUFBTSxZQUFZLElBQUksT0FBTyxJQUFJLGdCQUFnQixHQUFHO0NBQ3BELFNBQVMsZ0JBQWdCLE1BQU07RUFDM0IsSUFBSSxxQkFBcUI7QUFDekIsTUFBSSxLQUFLLFVBQ0wsc0JBQXFCLEdBQUcsbUJBQW1CLFNBQVMsS0FBSyxVQUFVO1dBRTlELEtBQUssYUFBYSxLQUN2QixzQkFBcUIsR0FBRyxtQkFBbUI7RUFFL0MsTUFBTSxvQkFBb0IsS0FBSyxZQUFZLE1BQU07QUFDakQsU0FBTyw4QkFBOEIsbUJBQW1CLEdBQUc7O0NBRS9ELFNBQVMsVUFBVSxNQUFNO0FBQ3JCLFNBQU8sSUFBSSxPQUFPLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxHQUFHOztDQUduRCxTQUFnQixjQUFjLE1BQU07RUFDaEMsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLEtBQUs7RUFDdkQsTUFBTSxPQUFPLEVBQUU7QUFDZixPQUFLLEtBQUssS0FBSyxRQUFRLE9BQU8sSUFBSTtBQUNsQyxNQUFJLEtBQUssT0FDTCxNQUFLLEtBQUssdUJBQXVCO0FBQ3JDLFVBQVEsR0FBRyxNQUFNLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQztBQUNuQyxTQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sR0FBRzs7Q0FFbkMsU0FBUyxVQUFVLElBQUksU0FBUztBQUM1QixPQUFLLFlBQVksUUFBUSxDQUFDLFlBQVksVUFBVSxLQUFLLEdBQUcsQ0FDcEQsUUFBTztBQUVYLE9BQUssWUFBWSxRQUFRLENBQUMsWUFBWSxVQUFVLEtBQUssR0FBRyxDQUNwRCxRQUFPO0FBRVgsU0FBTzs7Q0FFWCxTQUFTLFdBQVcsS0FBSyxLQUFLO0FBQzFCLE1BQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUNuQixRQUFPO0FBQ1gsTUFBSTtHQUNBLE1BQU0sQ0FBQyxVQUFVLElBQUksTUFBTSxJQUFJO0FBQy9CLE9BQUksQ0FBQyxPQUNELFFBQU87R0FFWCxNQUFNLFNBQVMsT0FDVixRQUFRLE1BQU0sSUFBSSxDQUNsQixRQUFRLE1BQU0sSUFBSSxDQUNsQixPQUFPLE9BQU8sVUFBVyxJQUFLLE9BQU8sU0FBUyxLQUFNLEdBQUksSUFBSTtHQUNqRSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssT0FBTyxDQUFDO0FBQ3hDLE9BQUksT0FBTyxZQUFZLFlBQVksWUFBWSxLQUMzQyxRQUFPO0FBQ1gsT0FBSSxTQUFTLFdBQVcsU0FBUyxRQUFRLE1BQ3JDLFFBQU87QUFDWCxPQUFJLENBQUMsUUFBUSxJQUNULFFBQU87QUFDWCxPQUFJLE9BQU8sUUFBUSxRQUFRLElBQ3ZCLFFBQU87QUFDWCxVQUFPO1VBRUw7QUFDRixVQUFPOzs7Q0FHZixTQUFTLFlBQVksSUFBSSxTQUFTO0FBQzlCLE9BQUssWUFBWSxRQUFRLENBQUMsWUFBWSxjQUFjLEtBQUssR0FBRyxDQUN4RCxRQUFPO0FBRVgsT0FBSyxZQUFZLFFBQVEsQ0FBQyxZQUFZLGNBQWMsS0FBSyxHQUFHLENBQ3hELFFBQU87QUFFWCxTQUFPOztDQUVYLElBQWEsWUFBYixNQUFhLGtCQUFrQixRQUFRO0VBQ25DLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsT0FBTSxPQUFPLE9BQU8sTUFBTSxLQUFLO0FBR25DLE9BRG1CLEtBQUssU0FBUyxNQUFNLEtBQ3BCLGNBQWMsUUFBUTtJQUNyQyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxNQUFNLFNBQVMsSUFBSSxhQUFhO0dBQ2hDLElBQUksTUFBTSxLQUFBO0FBQ1YsUUFBSyxNQUFNLFNBQVMsS0FBSyxLQUFLLE9BQzFCLEtBQUksTUFBTSxTQUFTO1FBQ1gsTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPO0FBQ2pDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDZixNQUFNO01BQ04sV0FBVztNQUNYLE9BQU87TUFDUCxTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPO0FBQ2pDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDZixNQUFNO01BQ04sV0FBVztNQUNYLE9BQU87TUFDUCxTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVMsVUFBVTtJQUM5QixNQUFNLFNBQVMsTUFBTSxLQUFLLFNBQVMsTUFBTTtJQUN6QyxNQUFNLFdBQVcsTUFBTSxLQUFLLFNBQVMsTUFBTTtBQUMzQyxRQUFJLFVBQVUsVUFBVTtBQUNwQixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0QyxTQUFJLE9BQ0EsbUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFNBQVMsTUFBTTtNQUNmLE1BQU07TUFDTixXQUFXO01BQ1gsT0FBTztNQUNQLFNBQVMsTUFBTTtNQUNsQixDQUFDO2NBRUcsU0FDTCxtQkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2YsTUFBTTtNQUNOLFdBQVc7TUFDWCxPQUFPO01BQ1AsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFFTixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsV0FBVyxLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQzlCLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTLFNBQVM7QUFDN0IsUUFBSSxDQUFDLFdBQ0QsY0FBYSxJQUFJLE9BQU8sYUFBYSxJQUFJO0FBRTdDLFFBQUksQ0FBQyxXQUFXLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDOUIsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxVQUFVLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDN0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxZQUFZLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDL0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxVQUFVLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDN0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxXQUFXLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDOUIsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxVQUFVLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDN0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVMsTUFDcEIsS0FBSTtBQUNBLFFBQUksSUFBSSxNQUFNLEtBQUs7V0FFakI7QUFDRixVQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0QyxzQkFBa0IsS0FBSztLQUNuQixZQUFZO0tBQ1osTUFBTSxhQUFhO0tBQ25CLFNBQVMsTUFBTTtLQUNsQixDQUFDO0FBQ0YsV0FBTyxPQUFPOztZQUdiLE1BQU0sU0FBUyxTQUFTO0FBQzdCLFVBQU0sTUFBTSxZQUFZO0FBRXhCLFFBQUksQ0FEZSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssRUFDOUI7QUFDYixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixZQUFZO01BQ1osTUFBTSxhQUFhO01BQ25CLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUyxPQUNwQixPQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU07WUFFekIsTUFBTSxTQUFTO1FBQ2hCLENBQUMsTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPLE1BQU0sU0FBUyxFQUFFO0FBQ25ELFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixZQUFZO09BQUUsVUFBVSxNQUFNO09BQU8sVUFBVSxNQUFNO09BQVU7TUFDL0QsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTLGNBQ3BCLE9BQU0sT0FBTyxNQUFNLEtBQUssYUFBYTtZQUVoQyxNQUFNLFNBQVMsY0FDcEIsT0FBTSxPQUFPLE1BQU0sS0FBSyxhQUFhO1lBRWhDLE1BQU0sU0FBUztRQUNoQixDQUFDLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxFQUFFO0FBQ3JDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixZQUFZLEVBQUUsWUFBWSxNQUFNLE9BQU87TUFDdkMsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsTUFBTSxLQUFLLFNBQVMsTUFBTSxNQUFNLEVBQUU7QUFDbkMsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFlBQVksRUFBRSxVQUFVLE1BQU0sT0FBTztNQUNyQyxTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFFaEIsQ0FEVSxjQUFjLE1BQU0sQ0FDdkIsS0FBSyxNQUFNLEtBQUssRUFBRTtBQUN6QixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsWUFBWTtNQUNaLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUztRQUVoQixDQURVLFVBQ0gsS0FBSyxNQUFNLEtBQUssRUFBRTtBQUN6QixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsWUFBWTtNQUNaLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUztRQUVoQixDQURVLFVBQVUsTUFBTSxDQUNuQixLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQ3pCLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixZQUFZO01BQ1osU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsY0FBYyxLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQ2pDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsVUFBVSxNQUFNLE1BQU0sTUFBTSxRQUFRLEVBQUU7QUFDdkMsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxXQUFXLE1BQU0sTUFBTSxNQUFNLElBQUksRUFBRTtBQUNwQyxXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixZQUFZO01BQ1osTUFBTSxhQUFhO01BQ25CLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUztRQUNoQixDQUFDLFlBQVksTUFBTSxNQUFNLE1BQU0sUUFBUSxFQUFFO0FBQ3pDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsWUFBWSxLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQy9CLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsZUFBZSxLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQ2xDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O1NBSWxCLE1BQUssWUFBWSxNQUFNO0FBRy9CLFVBQU87SUFBRSxRQUFRLE9BQU87SUFBTyxPQUFPLE1BQU07SUFBTTs7RUFFdEQsT0FBTyxPQUFPLFlBQVksU0FBUztBQUMvQixVQUFPLEtBQUssWUFBWSxTQUFTLE1BQU0sS0FBSyxLQUFLLEVBQUU7SUFDL0M7SUFDQSxNQUFNLGFBQWE7SUFDbkIsR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUNqQyxDQUFDOztFQUVOLFVBQVUsT0FBTztBQUNiLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLE1BQU07SUFDdkMsQ0FBQzs7RUFFTixNQUFNLFNBQVM7QUFDWCxVQUFPLEtBQUssVUFBVTtJQUFFLE1BQU07SUFBUyxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQUUsQ0FBQzs7RUFFNUUsSUFBSSxTQUFTO0FBQ1QsVUFBTyxLQUFLLFVBQVU7SUFBRSxNQUFNO0lBQU8sR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUFFLENBQUM7O0VBRTFFLE1BQU0sU0FBUztBQUNYLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFTLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUU1RSxLQUFLLFNBQVM7QUFDVixVQUFPLEtBQUssVUFBVTtJQUFFLE1BQU07SUFBUSxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQUUsQ0FBQzs7RUFFM0UsT0FBTyxTQUFTO0FBQ1osVUFBTyxLQUFLLFVBQVU7SUFBRSxNQUFNO0lBQVUsR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUFFLENBQUM7O0VBRTdFLEtBQUssU0FBUztBQUNWLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFRLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUUzRSxNQUFNLFNBQVM7QUFDWCxVQUFPLEtBQUssVUFBVTtJQUFFLE1BQU07SUFBUyxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQUUsQ0FBQzs7RUFFNUUsS0FBSyxTQUFTO0FBQ1YsVUFBTyxLQUFLLFVBQVU7SUFBRSxNQUFNO0lBQVEsR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUFFLENBQUM7O0VBRTNFLE9BQU8sU0FBUztBQUNaLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFVLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUU3RSxVQUFVLFNBQVM7QUFFZixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUNqQyxDQUFDOztFQUVOLElBQUksU0FBUztBQUNULFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFPLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUUxRSxHQUFHLFNBQVM7QUFDUixVQUFPLEtBQUssVUFBVTtJQUFFLE1BQU07SUFBTSxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQUUsQ0FBQzs7RUFFekUsS0FBSyxTQUFTO0FBQ1YsVUFBTyxLQUFLLFVBQVU7SUFBRSxNQUFNO0lBQVEsR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUFFLENBQUM7O0VBRTNFLFNBQVMsU0FBUztBQUNkLE9BQUksT0FBTyxZQUFZLFNBQ25CLFFBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1osQ0FBQztBQUVOLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixXQUFXLE9BQU8sU0FBUyxjQUFjLGNBQWMsT0FBTyxTQUFTO0lBQ3ZFLFFBQVEsU0FBUyxVQUFVO0lBQzNCLE9BQU8sU0FBUyxTQUFTO0lBQ3pCLEdBQUcsVUFBVSxTQUFTLFNBQVMsUUFBUTtJQUMxQyxDQUFDOztFQUVOLEtBQUssU0FBUztBQUNWLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFRO0lBQVMsQ0FBQzs7RUFFcEQsS0FBSyxTQUFTO0FBQ1YsT0FBSSxPQUFPLFlBQVksU0FDbkIsUUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxTQUFTO0lBQ1osQ0FBQztBQUVOLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixXQUFXLE9BQU8sU0FBUyxjQUFjLGNBQWMsT0FBTyxTQUFTO0lBQ3ZFLEdBQUcsVUFBVSxTQUFTLFNBQVMsUUFBUTtJQUMxQyxDQUFDOztFQUVOLFNBQVMsU0FBUztBQUNkLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFZLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUUvRSxNQUFNLE9BQU8sU0FBUztBQUNsQixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ0M7SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7O0VBRU4sU0FBUyxPQUFPLFNBQVM7QUFDckIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNDO0lBQ1AsVUFBVSxTQUFTO0lBQ25CLEdBQUcsVUFBVSxTQUFTLFNBQVMsUUFBUTtJQUMxQyxDQUFDOztFQUVOLFdBQVcsT0FBTyxTQUFTO0FBQ3ZCLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDQztJQUNQLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFDakMsQ0FBQzs7RUFFTixTQUFTLE9BQU8sU0FBUztBQUNyQixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ0M7SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7O0VBRU4sSUFBSSxXQUFXLFNBQVM7QUFDcEIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7O0VBRU4sSUFBSSxXQUFXLFNBQVM7QUFDcEIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7O0VBRU4sT0FBTyxLQUFLLFNBQVM7QUFDakIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7Ozs7O0VBS04sU0FBUyxTQUFTO0FBQ2QsVUFBTyxLQUFLLElBQUksR0FBRyxVQUFVLFNBQVMsUUFBUSxDQUFDOztFQUVuRCxPQUFPO0FBQ0gsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxLQUFLO0lBQ1IsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsRUFBRSxNQUFNLFFBQVEsQ0FBQztJQUNsRCxDQUFDOztFQUVOLGNBQWM7QUFDVixVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixRQUFRLENBQUMsR0FBRyxLQUFLLEtBQUssUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0lBQ3pELENBQUM7O0VBRU4sY0FBYztBQUNWLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7SUFDekQsQ0FBQzs7RUFFTixJQUFJLGFBQWE7QUFDYixVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLFdBQVc7O0VBRWxFLElBQUksU0FBUztBQUNULFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsT0FBTzs7RUFFOUQsSUFBSSxTQUFTO0FBQ1QsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxPQUFPOztFQUU5RCxJQUFJLGFBQWE7QUFDYixVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLFdBQVc7O0VBRWxFLElBQUksVUFBVTtBQUNWLFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsUUFBUTs7RUFFL0QsSUFBSSxRQUFRO0FBQ1IsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxNQUFNOztFQUU3RCxJQUFJLFVBQVU7QUFDVixVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLFFBQVE7O0VBRS9ELElBQUksU0FBUztBQUNULFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsT0FBTzs7RUFFOUQsSUFBSSxXQUFXO0FBQ1gsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxTQUFTOztFQUVoRSxJQUFJLFNBQVM7QUFDVCxVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLE9BQU87O0VBRTlELElBQUksVUFBVTtBQUNWLFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsUUFBUTs7RUFFL0QsSUFBSSxTQUFTO0FBQ1QsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxPQUFPOztFQUU5RCxJQUFJLE9BQU87QUFDUCxVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLEtBQUs7O0VBRTVELElBQUksU0FBUztBQUNULFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsT0FBTzs7RUFFOUQsSUFBSSxXQUFXO0FBQ1gsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxTQUFTOztFQUVoRSxJQUFJLGNBQWM7QUFFZCxVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLFlBQVk7O0VBRW5FLElBQUksWUFBWTtHQUNaLElBQUksTUFBTTtBQUNWLFFBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxPQUN2QixLQUFJLEdBQUcsU0FBUztRQUNSLFFBQVEsUUFBUSxHQUFHLFFBQVEsSUFDM0IsT0FBTSxHQUFHOztBQUdyQixVQUFPOztFQUVYLElBQUksWUFBWTtHQUNaLElBQUksTUFBTTtBQUNWLFFBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxPQUN2QixLQUFJLEdBQUcsU0FBUztRQUNSLFFBQVEsUUFBUSxHQUFHLFFBQVEsSUFDM0IsT0FBTSxHQUFHOztBQUdyQixVQUFPOzs7QUFHZixXQUFVLFVBQVUsV0FBVztBQUMzQixTQUFPLElBQUksVUFBVTtHQUNqQixRQUFRLEVBQUU7R0FDVixVQUFVLHNCQUFzQjtHQUNoQyxRQUFRLFFBQVEsVUFBVTtHQUMxQixHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBR04sU0FBUyxtQkFBbUIsS0FBSyxNQUFNO0VBQ25DLE1BQU0sZUFBZSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLElBQUk7RUFDekQsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxJQUFJO0VBQzNELE1BQU0sV0FBVyxjQUFjLGVBQWUsY0FBYztBQUc1RCxTQUZlLE9BQU8sU0FBUyxJQUFJLFFBQVEsU0FBUyxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsR0FDdEQsT0FBTyxTQUFTLEtBQUssUUFBUSxTQUFTLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxHQUM1QyxNQUFNOztDQUV0QyxJQUFhLFlBQWIsTUFBYSxrQkFBa0IsUUFBUTtFQUNuQyxjQUFjO0FBQ1YsU0FBTSxHQUFHLFVBQVU7QUFDbkIsUUFBSyxNQUFNLEtBQUs7QUFDaEIsUUFBSyxNQUFNLEtBQUs7QUFDaEIsUUFBSyxPQUFPLEtBQUs7O0VBRXJCLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsT0FBTSxPQUFPLE9BQU8sTUFBTSxLQUFLO0FBR25DLE9BRG1CLEtBQUssU0FBUyxNQUFNLEtBQ3BCLGNBQWMsUUFBUTtJQUNyQyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxJQUFJLE1BQU0sS0FBQTtHQUNWLE1BQU0sU0FBUyxJQUFJLGFBQWE7QUFDaEMsUUFBSyxNQUFNLFNBQVMsS0FBSyxLQUFLLE9BQzFCLEtBQUksTUFBTSxTQUFTO1FBQ1gsQ0FBQyxLQUFLLFVBQVUsTUFBTSxLQUFLLEVBQUU7QUFDN0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFVBQVU7TUFDVixVQUFVO01BQ1YsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ0gsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sT0FDcEU7QUFDVixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2YsTUFBTTtNQUNOLFdBQVcsTUFBTTtNQUNqQixPQUFPO01BQ1AsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ0wsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sT0FDcEU7QUFDUixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2YsTUFBTTtNQUNOLFdBQVcsTUFBTTtNQUNqQixPQUFPO01BQ1AsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLG1CQUFtQixNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssR0FBRztBQUNuRCxXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsWUFBWSxNQUFNO01BQ2xCLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUztRQUNoQixDQUFDLE9BQU8sU0FBUyxNQUFNLEtBQUssRUFBRTtBQUM5QixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O1NBSWxCLE1BQUssWUFBWSxNQUFNO0FBRy9CLFVBQU87SUFBRSxRQUFRLE9BQU87SUFBTyxPQUFPLE1BQU07SUFBTTs7RUFFdEQsSUFBSSxPQUFPLFNBQVM7QUFDaEIsVUFBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLE1BQU0sVUFBVSxTQUFTLFFBQVEsQ0FBQzs7RUFFekUsR0FBRyxPQUFPLFNBQVM7QUFDZixVQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sT0FBTyxVQUFVLFNBQVMsUUFBUSxDQUFDOztFQUUxRSxJQUFJLE9BQU8sU0FBUztBQUNoQixVQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sTUFBTSxVQUFVLFNBQVMsUUFBUSxDQUFDOztFQUV6RSxHQUFHLE9BQU8sU0FBUztBQUNmLFVBQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxPQUFPLFVBQVUsU0FBUyxRQUFRLENBQUM7O0VBRTFFLFNBQVMsTUFBTSxPQUFPLFdBQVcsU0FBUztBQUN0QyxVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixRQUFRLENBQ0osR0FBRyxLQUFLLEtBQUssUUFDYjtLQUNJO0tBQ0E7S0FDQTtLQUNBLFNBQVMsVUFBVSxTQUFTLFFBQVE7S0FDdkMsQ0FDSjtJQUNKLENBQUM7O0VBRU4sVUFBVSxPQUFPO0FBQ2IsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxLQUFLO0lBQ1IsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsTUFBTTtJQUN2QyxDQUFDOztFQUVOLElBQUksU0FBUztBQUNULFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sU0FBUyxTQUFTO0FBQ2QsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLFNBQVMsU0FBUztBQUNkLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFNBQVMsVUFBVSxTQUFTLFFBQVE7SUFDdkMsQ0FBQzs7RUFFTixZQUFZLFNBQVM7QUFDakIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLFlBQVksU0FBUztBQUNqQixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sV0FBVyxPQUFPLFNBQVM7QUFDdkIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNDO0lBQ1AsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLE9BQU8sU0FBUztBQUNaLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sS0FBSyxTQUFTO0FBQ1YsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxPQUFPLE9BQU87SUFDZCxTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUMsQ0FBQyxVQUFVO0lBQ1QsTUFBTTtJQUNOLFdBQVc7SUFDWCxPQUFPLE9BQU87SUFDZCxTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sSUFBSSxXQUFXO0dBQ1gsSUFBSSxNQUFNO0FBQ1YsUUFBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQ3ZCLEtBQUksR0FBRyxTQUFTO1FBQ1IsUUFBUSxRQUFRLEdBQUcsUUFBUSxJQUMzQixPQUFNLEdBQUc7O0FBR3JCLFVBQU87O0VBRVgsSUFBSSxXQUFXO0dBQ1gsSUFBSSxNQUFNO0FBQ1YsUUFBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQ3ZCLEtBQUksR0FBRyxTQUFTO1FBQ1IsUUFBUSxRQUFRLEdBQUcsUUFBUSxJQUMzQixPQUFNLEdBQUc7O0FBR3JCLFVBQU87O0VBRVgsSUFBSSxRQUFRO0FBQ1IsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxTQUFVLEdBQUcsU0FBUyxnQkFBZ0IsS0FBSyxVQUFVLEdBQUcsTUFBTSxDQUFFOztFQUV2SCxJQUFJLFdBQVc7R0FDWCxJQUFJLE1BQU07R0FDVixJQUFJLE1BQU07QUFDVixRQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssT0FDdkIsS0FBSSxHQUFHLFNBQVMsWUFBWSxHQUFHLFNBQVMsU0FBUyxHQUFHLFNBQVMsYUFDekQsUUFBTztZQUVGLEdBQUcsU0FBUztRQUNiLFFBQVEsUUFBUSxHQUFHLFFBQVEsSUFDM0IsT0FBTSxHQUFHO2NBRVIsR0FBRyxTQUFTO1FBQ2IsUUFBUSxRQUFRLEdBQUcsUUFBUSxJQUMzQixPQUFNLEdBQUc7O0FBR3JCLFVBQU8sT0FBTyxTQUFTLElBQUksSUFBSSxPQUFPLFNBQVMsSUFBSTs7O0FBRzNELFdBQVUsVUFBVSxXQUFXO0FBQzNCLFNBQU8sSUFBSSxVQUFVO0dBQ2pCLFFBQVEsRUFBRTtHQUNWLFVBQVUsc0JBQXNCO0dBQ2hDLFFBQVEsUUFBUSxVQUFVO0dBQzFCLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFlBQWIsTUFBYSxrQkFBa0IsUUFBUTtFQUNuQyxjQUFjO0FBQ1YsU0FBTSxHQUFHLFVBQVU7QUFDbkIsUUFBSyxNQUFNLEtBQUs7QUFDaEIsUUFBSyxNQUFNLEtBQUs7O0VBRXBCLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsS0FBSTtBQUNBLFVBQU0sT0FBTyxPQUFPLE1BQU0sS0FBSztXQUU3QjtBQUNGLFdBQU8sS0FBSyxpQkFBaUIsTUFBTTs7QUFJM0MsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxPQUM3QixRQUFPLEtBQUssaUJBQWlCLE1BQU07R0FFdkMsSUFBSSxNQUFNLEtBQUE7R0FDVixNQUFNLFNBQVMsSUFBSSxhQUFhO0FBQ2hDLFFBQUssTUFBTSxTQUFTLEtBQUssS0FBSyxPQUMxQixLQUFJLE1BQU0sU0FBUztRQUNFLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxRQUFRLE1BQU0sUUFBUSxNQUFNLE9BQ3BFO0FBQ1YsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLE1BQU07TUFDTixTQUFTLE1BQU07TUFDZixXQUFXLE1BQU07TUFDakIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ0wsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sT0FDcEU7QUFDUixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsTUFBTTtNQUNOLFNBQVMsTUFBTTtNQUNmLFdBQVcsTUFBTTtNQUNqQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsTUFBTSxPQUFPLE1BQU0sVUFBVSxPQUFPLEVBQUUsRUFBRTtBQUN4QyxXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsWUFBWSxNQUFNO01BQ2xCLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztTQUlsQixNQUFLLFlBQVksTUFBTTtBQUcvQixVQUFPO0lBQUUsUUFBUSxPQUFPO0lBQU8sT0FBTyxNQUFNO0lBQU07O0VBRXRELGlCQUFpQixPQUFPO0dBQ3BCLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHFCQUFrQixLQUFLO0lBQ25CLE1BQU0sYUFBYTtJQUNuQixVQUFVLGNBQWM7SUFDeEIsVUFBVSxJQUFJO0lBQ2pCLENBQUM7QUFDRixVQUFPOztFQUVYLElBQUksT0FBTyxTQUFTO0FBQ2hCLFVBQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxNQUFNLFVBQVUsU0FBUyxRQUFRLENBQUM7O0VBRXpFLEdBQUcsT0FBTyxTQUFTO0FBQ2YsVUFBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLE9BQU8sVUFBVSxTQUFTLFFBQVEsQ0FBQzs7RUFFMUUsSUFBSSxPQUFPLFNBQVM7QUFDaEIsVUFBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLE1BQU0sVUFBVSxTQUFTLFFBQVEsQ0FBQzs7RUFFekUsR0FBRyxPQUFPLFNBQVM7QUFDZixVQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sT0FBTyxVQUFVLFNBQVMsUUFBUSxDQUFDOztFQUUxRSxTQUFTLE1BQU0sT0FBTyxXQUFXLFNBQVM7QUFDdEMsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxLQUFLO0lBQ1IsUUFBUSxDQUNKLEdBQUcsS0FBSyxLQUFLLFFBQ2I7S0FDSTtLQUNBO0tBQ0E7S0FDQSxTQUFTLFVBQVUsU0FBUyxRQUFRO0tBQ3ZDLENBQ0o7SUFDSixDQUFDOztFQUVOLFVBQVUsT0FBTztBQUNiLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLE1BQU07SUFDdkMsQ0FBQzs7RUFFTixTQUFTLFNBQVM7QUFDZCxVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sT0FBTyxPQUFPLEVBQUU7SUFDaEIsV0FBVztJQUNYLFNBQVMsVUFBVSxTQUFTLFFBQVE7SUFDdkMsQ0FBQzs7RUFFTixTQUFTLFNBQVM7QUFDZCxVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sT0FBTyxPQUFPLEVBQUU7SUFDaEIsV0FBVztJQUNYLFNBQVMsVUFBVSxTQUFTLFFBQVE7SUFDdkMsQ0FBQzs7RUFFTixZQUFZLFNBQVM7QUFDakIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU8sT0FBTyxFQUFFO0lBQ2hCLFdBQVc7SUFDWCxTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sWUFBWSxTQUFTO0FBQ2pCLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixPQUFPLE9BQU8sRUFBRTtJQUNoQixXQUFXO0lBQ1gsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLFdBQVcsT0FBTyxTQUFTO0FBQ3ZCLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTjtJQUNBLFNBQVMsVUFBVSxTQUFTLFFBQVE7SUFDdkMsQ0FBQzs7RUFFTixJQUFJLFdBQVc7R0FDWCxJQUFJLE1BQU07QUFDVixRQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssT0FDdkIsS0FBSSxHQUFHLFNBQVM7UUFDUixRQUFRLFFBQVEsR0FBRyxRQUFRLElBQzNCLE9BQU0sR0FBRzs7QUFHckIsVUFBTzs7RUFFWCxJQUFJLFdBQVc7R0FDWCxJQUFJLE1BQU07QUFDVixRQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssT0FDdkIsS0FBSSxHQUFHLFNBQVM7UUFDUixRQUFRLFFBQVEsR0FBRyxRQUFRLElBQzNCLE9BQU0sR0FBRzs7QUFHckIsVUFBTzs7O0FBR2YsV0FBVSxVQUFVLFdBQVc7QUFDM0IsU0FBTyxJQUFJLFVBQVU7R0FDakIsUUFBUSxFQUFFO0dBQ1YsVUFBVSxzQkFBc0I7R0FDaEMsUUFBUSxRQUFRLFVBQVU7R0FDMUIsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsYUFBYixjQUFnQyxRQUFRO0VBQ3BDLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsT0FBTSxPQUFPLFFBQVEsTUFBTSxLQUFLO0FBR3BDLE9BRG1CLEtBQUssU0FBUyxNQUFNLEtBQ3BCLGNBQWMsU0FBUztJQUN0QyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxVQUFPLEdBQUcsTUFBTSxLQUFLOzs7QUFHN0IsWUFBVyxVQUFVLFdBQVc7QUFDNUIsU0FBTyxJQUFJLFdBQVc7R0FDbEIsVUFBVSxzQkFBc0I7R0FDaEMsUUFBUSxRQUFRLFVBQVU7R0FDMUIsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsVUFBYixNQUFhLGdCQUFnQixRQUFRO0VBQ2pDLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsT0FBTSxPQUFPLElBQUksS0FBSyxNQUFNLEtBQUs7QUFHckMsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxNQUFNO0lBQ25DLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztBQUVYLE9BQUksT0FBTyxNQUFNLE1BQU0sS0FBSyxTQUFTLENBQUMsRUFBRTtBQUVwQyxzQkFEWSxLQUFLLGdCQUFnQixNQUFNLEVBQ2hCLEVBQ25CLE1BQU0sYUFBYSxjQUN0QixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxNQUFNLFNBQVMsSUFBSSxhQUFhO0dBQ2hDLElBQUksTUFBTSxLQUFBO0FBQ1YsUUFBSyxNQUFNLFNBQVMsS0FBSyxLQUFLLE9BQzFCLEtBQUksTUFBTSxTQUFTO1FBQ1gsTUFBTSxLQUFLLFNBQVMsR0FBRyxNQUFNLE9BQU87QUFDcEMsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFNBQVMsTUFBTTtNQUNmLFdBQVc7TUFDWCxPQUFPO01BQ1AsU0FBUyxNQUFNO01BQ2YsTUFBTTtNQUNULENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLE1BQU0sS0FBSyxTQUFTLEdBQUcsTUFBTSxPQUFPO0FBQ3BDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDZixXQUFXO01BQ1gsT0FBTztNQUNQLFNBQVMsTUFBTTtNQUNmLE1BQU07TUFDVCxDQUFDO0FBQ0YsWUFBTyxPQUFPOztTQUlsQixNQUFLLFlBQVksTUFBTTtBQUcvQixVQUFPO0lBQ0gsUUFBUSxPQUFPO0lBQ2YsT0FBTyxJQUFJLEtBQUssTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUN4Qzs7RUFFTCxVQUFVLE9BQU87QUFDYixVQUFPLElBQUksUUFBUTtJQUNmLEdBQUcsS0FBSztJQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLE1BQU07SUFDdkMsQ0FBQzs7RUFFTixJQUFJLFNBQVMsU0FBUztBQUNsQixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sT0FBTyxRQUFRLFNBQVM7SUFDeEIsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLElBQUksU0FBUyxTQUFTO0FBQ2xCLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixPQUFPLFFBQVEsU0FBUztJQUN4QixTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sSUFBSSxVQUFVO0dBQ1YsSUFBSSxNQUFNO0FBQ1YsUUFBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQ3ZCLEtBQUksR0FBRyxTQUFTO1FBQ1IsUUFBUSxRQUFRLEdBQUcsUUFBUSxJQUMzQixPQUFNLEdBQUc7O0FBR3JCLFVBQU8sT0FBTyxPQUFPLElBQUksS0FBSyxJQUFJLEdBQUc7O0VBRXpDLElBQUksVUFBVTtHQUNWLElBQUksTUFBTTtBQUNWLFFBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxPQUN2QixLQUFJLEdBQUcsU0FBUztRQUNSLFFBQVEsUUFBUSxHQUFHLFFBQVEsSUFDM0IsT0FBTSxHQUFHOztBQUdyQixVQUFPLE9BQU8sT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHOzs7QUFHN0MsU0FBUSxVQUFVLFdBQVc7QUFDekIsU0FBTyxJQUFJLFFBQVE7R0FDZixRQUFRLEVBQUU7R0FDVixRQUFRLFFBQVEsVUFBVTtHQUMxQixVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxZQUFiLGNBQStCLFFBQVE7RUFDbkMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxRQUFRO0lBQ3JDLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztBQUVYLFVBQU8sR0FBRyxNQUFNLEtBQUs7OztBQUc3QixXQUFVLFVBQVUsV0FBVztBQUMzQixTQUFPLElBQUksVUFBVTtHQUNqQixVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxlQUFiLGNBQWtDLFFBQVE7RUFDdEMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxXQUFXO0lBQ3hDLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztBQUVYLFVBQU8sR0FBRyxNQUFNLEtBQUs7OztBQUc3QixjQUFhLFVBQVUsV0FBVztBQUM5QixTQUFPLElBQUksYUFBYTtHQUNwQixVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxVQUFiLGNBQTZCLFFBQVE7RUFDakMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxNQUFNO0lBQ25DLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztBQUVYLFVBQU8sR0FBRyxNQUFNLEtBQUs7OztBQUc3QixTQUFRLFVBQVUsV0FBVztBQUN6QixTQUFPLElBQUksUUFBUTtHQUNmLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFNBQWIsY0FBNEIsUUFBUTtFQUNoQyxjQUFjO0FBQ1YsU0FBTSxHQUFHLFVBQVU7QUFFbkIsUUFBSyxPQUFPOztFQUVoQixPQUFPLE9BQU87QUFDVixVQUFPLEdBQUcsTUFBTSxLQUFLOzs7QUFHN0IsUUFBTyxVQUFVLFdBQVc7QUFDeEIsU0FBTyxJQUFJLE9BQU87R0FDZCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxhQUFiLGNBQWdDLFFBQVE7RUFDcEMsY0FBYztBQUNWLFNBQU0sR0FBRyxVQUFVO0FBRW5CLFFBQUssV0FBVzs7RUFFcEIsT0FBTyxPQUFPO0FBQ1YsVUFBTyxHQUFHLE1BQU0sS0FBSzs7O0FBRzdCLFlBQVcsVUFBVSxXQUFXO0FBQzVCLFNBQU8sSUFBSSxXQUFXO0dBQ2xCLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFdBQWIsY0FBOEIsUUFBUTtFQUNsQyxPQUFPLE9BQU87R0FDVixNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxxQkFBa0IsS0FBSztJQUNuQixNQUFNLGFBQWE7SUFDbkIsVUFBVSxjQUFjO0lBQ3hCLFVBQVUsSUFBSTtJQUNqQixDQUFDO0FBQ0YsVUFBTzs7O0FBR2YsVUFBUyxVQUFVLFdBQVc7QUFDMUIsU0FBTyxJQUFJLFNBQVM7R0FDaEIsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsVUFBYixjQUE2QixRQUFRO0VBQ2pDLE9BQU8sT0FBTztBQUVWLE9BRG1CLEtBQUssU0FBUyxNQUFNLEtBQ3BCLGNBQWMsV0FBVztJQUN4QyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxVQUFPLEdBQUcsTUFBTSxLQUFLOzs7QUFHN0IsU0FBUSxVQUFVLFdBQVc7QUFDekIsU0FBTyxJQUFJLFFBQVE7R0FDZixVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxXQUFiLE1BQWEsaUJBQWlCLFFBQVE7RUFDbEMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLEtBQUssV0FBVyxLQUFLLG9CQUFvQixNQUFNO0dBQ3ZELE1BQU0sTUFBTSxLQUFLO0FBQ2pCLE9BQUksSUFBSSxlQUFlLGNBQWMsT0FBTztBQUN4QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxPQUFJLElBQUksZ0JBQWdCLE1BQU07SUFDMUIsTUFBTSxTQUFTLElBQUksS0FBSyxTQUFTLElBQUksWUFBWTtJQUNqRCxNQUFNLFdBQVcsSUFBSSxLQUFLLFNBQVMsSUFBSSxZQUFZO0FBQ25ELFFBQUksVUFBVSxVQUFVO0FBQ3BCLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sU0FBUyxhQUFhLFVBQVUsYUFBYTtNQUNuRCxTQUFVLFdBQVcsSUFBSSxZQUFZLFFBQVEsS0FBQTtNQUM3QyxTQUFVLFNBQVMsSUFBSSxZQUFZLFFBQVEsS0FBQTtNQUMzQyxNQUFNO01BQ04sV0FBVztNQUNYLE9BQU87TUFDUCxTQUFTLElBQUksWUFBWTtNQUM1QixDQUFDO0FBQ0YsWUFBTyxPQUFPOzs7QUFHdEIsT0FBSSxJQUFJLGNBQWM7UUFDZCxJQUFJLEtBQUssU0FBUyxJQUFJLFVBQVUsT0FBTztBQUN2Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxJQUFJLFVBQVU7TUFDdkIsTUFBTTtNQUNOLFdBQVc7TUFDWCxPQUFPO01BQ1AsU0FBUyxJQUFJLFVBQVU7TUFDMUIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7O0FBR3RCLE9BQUksSUFBSSxjQUFjO1FBQ2QsSUFBSSxLQUFLLFNBQVMsSUFBSSxVQUFVLE9BQU87QUFDdkMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFNBQVMsSUFBSSxVQUFVO01BQ3ZCLE1BQU07TUFDTixXQUFXO01BQ1gsT0FBTztNQUNQLFNBQVMsSUFBSSxVQUFVO01BQzFCLENBQUM7QUFDRixZQUFPLE9BQU87OztBQUd0QixPQUFJLElBQUksT0FBTyxNQUNYLFFBQU8sUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLE1BQU0sTUFBTTtBQUM5QyxXQUFPLElBQUksS0FBSyxZQUFZLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO0tBQzdFLENBQUMsQ0FBQyxNQUFNLFdBQVc7QUFDakIsV0FBTyxZQUFZLFdBQVcsUUFBUSxPQUFPO0tBQy9DO0dBRU4sTUFBTSxTQUFTLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLE1BQU0sTUFBTTtBQUMxQyxXQUFPLElBQUksS0FBSyxXQUFXLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO0tBQzVFO0FBQ0YsVUFBTyxZQUFZLFdBQVcsUUFBUSxPQUFPOztFQUVqRCxJQUFJLFVBQVU7QUFDVixVQUFPLEtBQUssS0FBSzs7RUFFckIsSUFBSSxXQUFXLFNBQVM7QUFDcEIsVUFBTyxJQUFJLFNBQVM7SUFDaEIsR0FBRyxLQUFLO0lBQ1IsV0FBVztLQUFFLE9BQU87S0FBVyxTQUFTLFVBQVUsU0FBUyxRQUFRO0tBQUU7SUFDeEUsQ0FBQzs7RUFFTixJQUFJLFdBQVcsU0FBUztBQUNwQixVQUFPLElBQUksU0FBUztJQUNoQixHQUFHLEtBQUs7SUFDUixXQUFXO0tBQUUsT0FBTztLQUFXLFNBQVMsVUFBVSxTQUFTLFFBQVE7S0FBRTtJQUN4RSxDQUFDOztFQUVOLE9BQU8sS0FBSyxTQUFTO0FBQ2pCLFVBQU8sSUFBSSxTQUFTO0lBQ2hCLEdBQUcsS0FBSztJQUNSLGFBQWE7S0FBRSxPQUFPO0tBQUssU0FBUyxVQUFVLFNBQVMsUUFBUTtLQUFFO0lBQ3BFLENBQUM7O0VBRU4sU0FBUyxTQUFTO0FBQ2QsVUFBTyxLQUFLLElBQUksR0FBRyxRQUFROzs7QUFHbkMsVUFBUyxVQUFVLFFBQVEsV0FBVztBQUNsQyxTQUFPLElBQUksU0FBUztHQUNoQixNQUFNO0dBQ04sV0FBVztHQUNYLFdBQVc7R0FDWCxhQUFhO0dBQ2IsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLFNBQVMsZUFBZSxRQUFRO0FBQzVCLE1BQUksa0JBQWtCLFdBQVc7R0FDN0IsTUFBTSxXQUFXLEVBQUU7QUFDbkIsUUFBSyxNQUFNLE9BQU8sT0FBTyxPQUFPO0lBQzVCLE1BQU0sY0FBYyxPQUFPLE1BQU07QUFDakMsYUFBUyxPQUFPLFlBQVksT0FBTyxlQUFlLFlBQVksQ0FBQzs7QUFFbkUsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxPQUFPO0lBQ1YsYUFBYTtJQUNoQixDQUFDO2FBRUcsa0JBQWtCLFNBQ3ZCLFFBQU8sSUFBSSxTQUFTO0dBQ2hCLEdBQUcsT0FBTztHQUNWLE1BQU0sZUFBZSxPQUFPLFFBQVE7R0FDdkMsQ0FBQztXQUVHLGtCQUFrQixZQUN2QixRQUFPLFlBQVksT0FBTyxlQUFlLE9BQU8sUUFBUSxDQUFDLENBQUM7V0FFckQsa0JBQWtCLFlBQ3ZCLFFBQU8sWUFBWSxPQUFPLGVBQWUsT0FBTyxRQUFRLENBQUMsQ0FBQztXQUVyRCxrQkFBa0IsU0FDdkIsUUFBTyxTQUFTLE9BQU8sT0FBTyxNQUFNLEtBQUssU0FBUyxlQUFlLEtBQUssQ0FBQyxDQUFDO01BR3hFLFFBQU87O0NBR2YsSUFBYSxZQUFiLE1BQWEsa0JBQWtCLFFBQVE7RUFDbkMsY0FBYztBQUNWLFNBQU0sR0FBRyxVQUFVO0FBQ25CLFFBQUssVUFBVTs7Ozs7QUFLZixRQUFLLFlBQVksS0FBSzs7OztBQXFDdEIsUUFBSyxVQUFVLEtBQUs7O0VBRXhCLGFBQWE7QUFDVCxPQUFJLEtBQUssWUFBWSxLQUNqQixRQUFPLEtBQUs7R0FDaEIsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPO0FBRS9CLFFBQUssVUFBVTtJQUFFO0lBQU8sTUFEWCxLQUFLLFdBQVcsTUFBTTtJQUNMO0FBQzlCLFVBQU8sS0FBSzs7RUFFaEIsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxRQUFRO0lBQ3JDLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztHQUVYLE1BQU0sRUFBRSxRQUFRLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtHQUN2RCxNQUFNLEVBQUUsT0FBTyxNQUFNLGNBQWMsS0FBSyxZQUFZO0dBQ3BELE1BQU0sWUFBWSxFQUFFO0FBQ3BCLE9BQUksRUFBRSxLQUFLLEtBQUssb0JBQW9CLFlBQVksS0FBSyxLQUFLLGdCQUFnQjtTQUNqRSxNQUFNLE9BQU8sSUFBSSxLQUNsQixLQUFJLENBQUMsVUFBVSxTQUFTLElBQUksQ0FDeEIsV0FBVSxLQUFLLElBQUk7O0dBSS9CLE1BQU0sUUFBUSxFQUFFO0FBQ2hCLFFBQUssTUFBTSxPQUFPLFdBQVc7SUFDekIsTUFBTSxlQUFlLE1BQU07SUFDM0IsTUFBTSxRQUFRLElBQUksS0FBSztBQUN2QixVQUFNLEtBQUs7S0FDUCxLQUFLO01BQUUsUUFBUTtNQUFTLE9BQU87TUFBSztLQUNwQyxPQUFPLGFBQWEsT0FBTyxJQUFJLG1CQUFtQixLQUFLLE9BQU8sSUFBSSxNQUFNLElBQUksQ0FBQztLQUM3RSxXQUFXLE9BQU8sSUFBSTtLQUN6QixDQUFDOztBQUVOLE9BQUksS0FBSyxLQUFLLG9CQUFvQixVQUFVO0lBQ3hDLE1BQU0sY0FBYyxLQUFLLEtBQUs7QUFDOUIsUUFBSSxnQkFBZ0IsY0FDaEIsTUFBSyxNQUFNLE9BQU8sVUFDZCxPQUFNLEtBQUs7S0FDUCxLQUFLO01BQUUsUUFBUTtNQUFTLE9BQU87TUFBSztLQUNwQyxPQUFPO01BQUUsUUFBUTtNQUFTLE9BQU8sSUFBSSxLQUFLO01BQU07S0FDbkQsQ0FBQzthQUdELGdCQUFnQjtTQUNqQixVQUFVLFNBQVMsR0FBRztBQUN0Qix3QkFBa0IsS0FBSztPQUNuQixNQUFNLGFBQWE7T0FDbkIsTUFBTTtPQUNULENBQUM7QUFDRixhQUFPLE9BQU87O2VBR2IsZ0JBQWdCLFNBQVMsT0FHOUIsT0FBTSxJQUFJLE1BQU0sdURBQXVEO1VBRzFFO0lBRUQsTUFBTSxXQUFXLEtBQUssS0FBSztBQUMzQixTQUFLLE1BQU0sT0FBTyxXQUFXO0tBQ3pCLE1BQU0sUUFBUSxJQUFJLEtBQUs7QUFDdkIsV0FBTSxLQUFLO01BQ1AsS0FBSztPQUFFLFFBQVE7T0FBUyxPQUFPO09BQUs7TUFDcEMsT0FBTyxTQUFTLE9BQU8sSUFBSSxtQkFBbUIsS0FBSyxPQUFPLElBQUksTUFBTSxJQUFJLENBQ3ZFO01BQ0QsV0FBVyxPQUFPLElBQUk7TUFDekIsQ0FBQzs7O0FBR1YsT0FBSSxJQUFJLE9BQU8sTUFDWCxRQUFPLFFBQVEsU0FBUyxDQUNuQixLQUFLLFlBQVk7SUFDbEIsTUFBTSxZQUFZLEVBQUU7QUFDcEIsU0FBSyxNQUFNLFFBQVEsT0FBTztLQUN0QixNQUFNLE1BQU0sTUFBTSxLQUFLO0tBQ3ZCLE1BQU0sUUFBUSxNQUFNLEtBQUs7QUFDekIsZUFBVSxLQUFLO01BQ1g7TUFDQTtNQUNBLFdBQVcsS0FBSztNQUNuQixDQUFDOztBQUVOLFdBQU87S0FDVCxDQUNHLE1BQU0sY0FBYztBQUNyQixXQUFPLFlBQVksZ0JBQWdCLFFBQVEsVUFBVTtLQUN2RDtPQUdGLFFBQU8sWUFBWSxnQkFBZ0IsUUFBUSxNQUFNOztFQUd6RCxJQUFJLFFBQVE7QUFDUixVQUFPLEtBQUssS0FBSyxPQUFPOztFQUU1QixPQUFPLFNBQVM7QUFDWixhQUFVO0FBQ1YsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxLQUFLO0lBQ1IsYUFBYTtJQUNiLEdBQUksWUFBWSxLQUFBLElBQ1YsRUFDRSxXQUFXLE9BQU8sUUFBUTtLQUN0QixNQUFNLGVBQWUsS0FBSyxLQUFLLFdBQVcsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJO0FBQ3JFLFNBQUksTUFBTSxTQUFTLG9CQUNmLFFBQU8sRUFDSCxTQUFTLFVBQVUsU0FBUyxRQUFRLENBQUMsV0FBVyxjQUNuRDtBQUNMLFlBQU8sRUFDSCxTQUFTLGNBQ1o7T0FFUixHQUNDLEVBQUU7SUFDWCxDQUFDOztFQUVOLFFBQVE7QUFDSixVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixhQUFhO0lBQ2hCLENBQUM7O0VBRU4sY0FBYztBQUNWLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLGFBQWE7SUFDaEIsQ0FBQzs7RUFtQk4sT0FBTyxjQUFjO0FBQ2pCLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLGNBQWM7S0FDVixHQUFHLEtBQUssS0FBSyxPQUFPO0tBQ3BCLEdBQUc7S0FDTjtJQUNKLENBQUM7Ozs7Ozs7RUFPTixNQUFNLFNBQVM7QUFVWCxVQVRlLElBQUksVUFBVTtJQUN6QixhQUFhLFFBQVEsS0FBSztJQUMxQixVQUFVLFFBQVEsS0FBSztJQUN2QixjQUFjO0tBQ1YsR0FBRyxLQUFLLEtBQUssT0FBTztLQUNwQixHQUFHLFFBQVEsS0FBSyxPQUFPO0tBQzFCO0lBQ0QsVUFBVSxzQkFBc0I7SUFDbkMsQ0FBQzs7RUFzQ04sT0FBTyxLQUFLLFFBQVE7QUFDaEIsVUFBTyxLQUFLLFFBQVEsR0FBRyxNQUFNLFFBQVEsQ0FBQzs7RUF1QjFDLFNBQVMsT0FBTztBQUNaLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLFVBQVU7SUFDYixDQUFDOztFQUVOLEtBQUssTUFBTTtHQUNQLE1BQU0sUUFBUSxFQUFFO0FBQ2hCLFFBQUssTUFBTSxPQUFPLEtBQUssV0FBVyxLQUFLLENBQ25DLEtBQUksS0FBSyxRQUFRLEtBQUssTUFBTSxLQUN4QixPQUFNLE9BQU8sS0FBSyxNQUFNO0FBR2hDLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLGFBQWE7SUFDaEIsQ0FBQzs7RUFFTixLQUFLLE1BQU07R0FDUCxNQUFNLFFBQVEsRUFBRTtBQUNoQixRQUFLLE1BQU0sT0FBTyxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQ3pDLEtBQUksQ0FBQyxLQUFLLEtBQ04sT0FBTSxPQUFPLEtBQUssTUFBTTtBQUdoQyxVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixhQUFhO0lBQ2hCLENBQUM7Ozs7O0VBS04sY0FBYztBQUNWLFVBQU8sZUFBZSxLQUFLOztFQUUvQixRQUFRLE1BQU07R0FDVixNQUFNLFdBQVcsRUFBRTtBQUNuQixRQUFLLE1BQU0sT0FBTyxLQUFLLFdBQVcsS0FBSyxNQUFNLEVBQUU7SUFDM0MsTUFBTSxjQUFjLEtBQUssTUFBTTtBQUMvQixRQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQ2QsVUFBUyxPQUFPO1FBR2hCLFVBQVMsT0FBTyxZQUFZLFVBQVU7O0FBRzlDLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLGFBQWE7SUFDaEIsQ0FBQzs7RUFFTixTQUFTLE1BQU07R0FDWCxNQUFNLFdBQVcsRUFBRTtBQUNuQixRQUFLLE1BQU0sT0FBTyxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQ3pDLEtBQUksUUFBUSxDQUFDLEtBQUssS0FDZCxVQUFTLE9BQU8sS0FBSyxNQUFNO1FBRTFCO0lBRUQsSUFBSSxXQURnQixLQUFLLE1BQU07QUFFL0IsV0FBTyxvQkFBb0IsWUFDdkIsWUFBVyxTQUFTLEtBQUs7QUFFN0IsYUFBUyxPQUFPOztBQUd4QixVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixhQUFhO0lBQ2hCLENBQUM7O0VBRU4sUUFBUTtBQUNKLFVBQU8sY0FBYyxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQUM7OztBQUd6RCxXQUFVLFVBQVUsT0FBTyxXQUFXO0FBQ2xDLFNBQU8sSUFBSSxVQUFVO0dBQ2pCLGFBQWE7R0FDYixhQUFhO0dBQ2IsVUFBVSxTQUFTLFFBQVE7R0FDM0IsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztBQUVOLFdBQVUsZ0JBQWdCLE9BQU8sV0FBVztBQUN4QyxTQUFPLElBQUksVUFBVTtHQUNqQixhQUFhO0dBQ2IsYUFBYTtHQUNiLFVBQVUsU0FBUyxRQUFRO0dBQzNCLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7QUFFTixXQUFVLGNBQWMsT0FBTyxXQUFXO0FBQ3RDLFNBQU8sSUFBSSxVQUFVO0dBQ2pCO0dBQ0EsYUFBYTtHQUNiLFVBQVUsU0FBUyxRQUFRO0dBQzNCLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFdBQWIsY0FBOEIsUUFBUTtFQUNsQyxPQUFPLE9BQU87R0FDVixNQUFNLEVBQUUsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0dBQy9DLE1BQU0sVUFBVSxLQUFLLEtBQUs7R0FDMUIsU0FBUyxjQUFjLFNBQVM7QUFFNUIsU0FBSyxNQUFNLFVBQVUsUUFDakIsS0FBSSxPQUFPLE9BQU8sV0FBVyxRQUN6QixRQUFPLE9BQU87QUFHdEIsU0FBSyxNQUFNLFVBQVUsUUFDakIsS0FBSSxPQUFPLE9BQU8sV0FBVyxTQUFTO0FBRWxDLFNBQUksT0FBTyxPQUFPLEtBQUssR0FBRyxPQUFPLElBQUksT0FBTyxPQUFPO0FBQ25ELFlBQU8sT0FBTzs7SUFJdEIsTUFBTSxjQUFjLFFBQVEsS0FBSyxXQUFXLElBQUksU0FBUyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUM7QUFDbkYsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CO0tBQ0gsQ0FBQztBQUNGLFdBQU87O0FBRVgsT0FBSSxJQUFJLE9BQU8sTUFDWCxRQUFPLFFBQVEsSUFBSSxRQUFRLElBQUksT0FBTyxXQUFXO0lBQzdDLE1BQU0sV0FBVztLQUNiLEdBQUc7S0FDSCxRQUFRO01BQ0osR0FBRyxJQUFJO01BQ1AsUUFBUSxFQUFFO01BQ2I7S0FDRCxRQUFRO0tBQ1g7QUFDRCxXQUFPO0tBQ0gsUUFBUSxNQUFNLE9BQU8sWUFBWTtNQUM3QixNQUFNLElBQUk7TUFDVixNQUFNLElBQUk7TUFDVixRQUFRO01BQ1gsQ0FBQztLQUNGLEtBQUs7S0FDUjtLQUNILENBQUMsQ0FBQyxLQUFLLGNBQWM7UUFFdEI7SUFDRCxJQUFJLFFBQVEsS0FBQTtJQUNaLE1BQU0sU0FBUyxFQUFFO0FBQ2pCLFNBQUssTUFBTSxVQUFVLFNBQVM7S0FDMUIsTUFBTSxXQUFXO01BQ2IsR0FBRztNQUNILFFBQVE7T0FDSixHQUFHLElBQUk7T0FDUCxRQUFRLEVBQUU7T0FDYjtNQUNELFFBQVE7TUFDWDtLQUNELE1BQU0sU0FBUyxPQUFPLFdBQVc7TUFDN0IsTUFBTSxJQUFJO01BQ1YsTUFBTSxJQUFJO01BQ1YsUUFBUTtNQUNYLENBQUM7QUFDRixTQUFJLE9BQU8sV0FBVyxRQUNsQixRQUFPO2NBRUYsT0FBTyxXQUFXLFdBQVcsQ0FBQyxNQUNuQyxTQUFRO01BQUU7TUFBUSxLQUFLO01BQVU7QUFFckMsU0FBSSxTQUFTLE9BQU8sT0FBTyxPQUN2QixRQUFPLEtBQUssU0FBUyxPQUFPLE9BQU87O0FBRzNDLFFBQUksT0FBTztBQUNQLFNBQUksT0FBTyxPQUFPLEtBQUssR0FBRyxNQUFNLElBQUksT0FBTyxPQUFPO0FBQ2xELFlBQU8sTUFBTTs7SUFFakIsTUFBTSxjQUFjLE9BQU8sS0FBSyxXQUFXLElBQUksU0FBUyxPQUFPLENBQUM7QUFDaEUsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CO0tBQ0gsQ0FBQztBQUNGLFdBQU87OztFQUdmLElBQUksVUFBVTtBQUNWLFVBQU8sS0FBSyxLQUFLOzs7QUFHekIsVUFBUyxVQUFVLE9BQU8sV0FBVztBQUNqQyxTQUFPLElBQUksU0FBUztHQUNoQixTQUFTO0dBQ1QsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQVNOLElBQU0sb0JBQW9CLFNBQVM7QUFDL0IsTUFBSSxnQkFBZ0IsUUFDaEIsUUFBTyxpQkFBaUIsS0FBSyxPQUFPO1dBRS9CLGdCQUFnQixXQUNyQixRQUFPLGlCQUFpQixLQUFLLFdBQVcsQ0FBQztXQUVwQyxnQkFBZ0IsV0FDckIsUUFBTyxDQUFDLEtBQUssTUFBTTtXQUVkLGdCQUFnQixRQUNyQixRQUFPLEtBQUs7V0FFUCxnQkFBZ0IsY0FFckIsUUFBTyxLQUFLLGFBQWEsS0FBSyxLQUFLO1dBRTlCLGdCQUFnQixXQUNyQixRQUFPLGlCQUFpQixLQUFLLEtBQUssVUFBVTtXQUV2QyxnQkFBZ0IsYUFDckIsUUFBTyxDQUFDLEtBQUEsRUFBVTtXQUViLGdCQUFnQixRQUNyQixRQUFPLENBQUMsS0FBSztXQUVSLGdCQUFnQixZQUNyQixRQUFPLENBQUMsS0FBQSxHQUFXLEdBQUcsaUJBQWlCLEtBQUssUUFBUSxDQUFDLENBQUM7V0FFakQsZ0JBQWdCLFlBQ3JCLFFBQU8sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEtBQUssUUFBUSxDQUFDLENBQUM7V0FFNUMsZ0JBQWdCLFdBQ3JCLFFBQU8saUJBQWlCLEtBQUssUUFBUSxDQUFDO1dBRWpDLGdCQUFnQixZQUNyQixRQUFPLGlCQUFpQixLQUFLLFFBQVEsQ0FBQztXQUVqQyxnQkFBZ0IsU0FDckIsUUFBTyxpQkFBaUIsS0FBSyxLQUFLLFVBQVU7TUFHNUMsUUFBTyxFQUFFOztDQUdqQixJQUFhLHdCQUFiLE1BQWEsOEJBQThCLFFBQVE7RUFDL0MsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtBQUMvQyxPQUFJLElBQUksZUFBZSxjQUFjLFFBQVE7QUFDekMsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CLFVBQVUsY0FBYztLQUN4QixVQUFVLElBQUk7S0FDakIsQ0FBQztBQUNGLFdBQU87O0dBRVgsTUFBTSxnQkFBZ0IsS0FBSztHQUMzQixNQUFNLHFCQUFxQixJQUFJLEtBQUs7R0FDcEMsTUFBTSxTQUFTLEtBQUssV0FBVyxJQUFJLG1CQUFtQjtBQUN0RCxPQUFJLENBQUMsUUFBUTtBQUNULHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixTQUFTLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxDQUFDO0tBQzNDLE1BQU0sQ0FBQyxjQUFjO0tBQ3hCLENBQUM7QUFDRixXQUFPOztBQUVYLE9BQUksSUFBSSxPQUFPLE1BQ1gsUUFBTyxPQUFPLFlBQVk7SUFDdEIsTUFBTSxJQUFJO0lBQ1YsTUFBTSxJQUFJO0lBQ1YsUUFBUTtJQUNYLENBQUM7T0FHRixRQUFPLE9BQU8sV0FBVztJQUNyQixNQUFNLElBQUk7SUFDVixNQUFNLElBQUk7SUFDVixRQUFRO0lBQ1gsQ0FBQzs7RUFHVixJQUFJLGdCQUFnQjtBQUNoQixVQUFPLEtBQUssS0FBSzs7RUFFckIsSUFBSSxVQUFVO0FBQ1YsVUFBTyxLQUFLLEtBQUs7O0VBRXJCLElBQUksYUFBYTtBQUNiLFVBQU8sS0FBSyxLQUFLOzs7Ozs7Ozs7O0VBVXJCLE9BQU8sT0FBTyxlQUFlLFNBQVMsUUFBUTtHQUUxQyxNQUFNLDZCQUFhLElBQUksS0FBSztBQUU1QixRQUFLLE1BQU0sUUFBUSxTQUFTO0lBQ3hCLE1BQU0sc0JBQXNCLGlCQUFpQixLQUFLLE1BQU0sZUFBZTtBQUN2RSxRQUFJLENBQUMsb0JBQW9CLE9BQ3JCLE9BQU0sSUFBSSxNQUFNLG1DQUFtQyxjQUFjLG1EQUFtRDtBQUV4SCxTQUFLLE1BQU0sU0FBUyxxQkFBcUI7QUFDckMsU0FBSSxXQUFXLElBQUksTUFBTSxDQUNyQixPQUFNLElBQUksTUFBTSwwQkFBMEIsT0FBTyxjQUFjLENBQUMsdUJBQXVCLE9BQU8sTUFBTSxHQUFHO0FBRTNHLGdCQUFXLElBQUksT0FBTyxLQUFLOzs7QUFHbkMsVUFBTyxJQUFJLHNCQUFzQjtJQUM3QixVQUFVLHNCQUFzQjtJQUNoQztJQUNBO0lBQ0E7SUFDQSxHQUFHLG9CQUFvQixPQUFPO0lBQ2pDLENBQUM7OztDQUdWLFNBQVMsWUFBWSxHQUFHLEdBQUc7RUFDdkIsTUFBTSxRQUFRLGNBQWMsRUFBRTtFQUM5QixNQUFNLFFBQVEsY0FBYyxFQUFFO0FBQzlCLE1BQUksTUFBTSxFQUNOLFFBQU87R0FBRSxPQUFPO0dBQU0sTUFBTTtHQUFHO1dBRTFCLFVBQVUsY0FBYyxVQUFVLFVBQVUsY0FBYyxRQUFRO0dBQ3ZFLE1BQU0sUUFBUSxLQUFLLFdBQVcsRUFBRTtHQUNoQyxNQUFNLGFBQWEsS0FBSyxXQUFXLEVBQUUsQ0FBQyxRQUFRLFFBQVEsTUFBTSxRQUFRLElBQUksS0FBSyxHQUFHO0dBQ2hGLE1BQU0sU0FBUztJQUFFLEdBQUc7SUFBRyxHQUFHO0lBQUc7QUFDN0IsUUFBSyxNQUFNLE9BQU8sWUFBWTtJQUMxQixNQUFNLGNBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLO0FBQy9DLFFBQUksQ0FBQyxZQUFZLE1BQ2IsUUFBTyxFQUFFLE9BQU8sT0FBTztBQUUzQixXQUFPLE9BQU8sWUFBWTs7QUFFOUIsVUFBTztJQUFFLE9BQU87SUFBTSxNQUFNO0lBQVE7YUFFL0IsVUFBVSxjQUFjLFNBQVMsVUFBVSxjQUFjLE9BQU87QUFDckUsT0FBSSxFQUFFLFdBQVcsRUFBRSxPQUNmLFFBQU8sRUFBRSxPQUFPLE9BQU87R0FFM0IsTUFBTSxXQUFXLEVBQUU7QUFDbkIsUUFBSyxJQUFJLFFBQVEsR0FBRyxRQUFRLEVBQUUsUUFBUSxTQUFTO0lBQzNDLE1BQU0sUUFBUSxFQUFFO0lBQ2hCLE1BQU0sUUFBUSxFQUFFO0lBQ2hCLE1BQU0sY0FBYyxZQUFZLE9BQU8sTUFBTTtBQUM3QyxRQUFJLENBQUMsWUFBWSxNQUNiLFFBQU8sRUFBRSxPQUFPLE9BQU87QUFFM0IsYUFBUyxLQUFLLFlBQVksS0FBSzs7QUFFbkMsVUFBTztJQUFFLE9BQU87SUFBTSxNQUFNO0lBQVU7YUFFakMsVUFBVSxjQUFjLFFBQVEsVUFBVSxjQUFjLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDN0UsUUFBTztHQUFFLE9BQU87R0FBTSxNQUFNO0dBQUc7TUFHL0IsUUFBTyxFQUFFLE9BQU8sT0FBTzs7Q0FHL0IsSUFBYSxrQkFBYixjQUFxQyxRQUFRO0VBQ3pDLE9BQU8sT0FBTztHQUNWLE1BQU0sRUFBRSxRQUFRLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtHQUN2RCxNQUFNLGdCQUFnQixZQUFZLGdCQUFnQjtBQUM5QyxRQUFJLFVBQVUsV0FBVyxJQUFJLFVBQVUsWUFBWSxDQUMvQyxRQUFPO0lBRVgsTUFBTSxTQUFTLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTTtBQUMvRCxRQUFJLENBQUMsT0FBTyxPQUFPO0FBQ2YsdUJBQWtCLEtBQUssRUFDbkIsTUFBTSxhQUFhLDRCQUN0QixDQUFDO0FBQ0YsWUFBTzs7QUFFWCxRQUFJLFFBQVEsV0FBVyxJQUFJLFFBQVEsWUFBWSxDQUMzQyxRQUFPLE9BQU87QUFFbEIsV0FBTztLQUFFLFFBQVEsT0FBTztLQUFPLE9BQU8sT0FBTztLQUFNOztBQUV2RCxPQUFJLElBQUksT0FBTyxNQUNYLFFBQU8sUUFBUSxJQUFJLENBQ2YsS0FBSyxLQUFLLEtBQUssWUFBWTtJQUN2QixNQUFNLElBQUk7SUFDVixNQUFNLElBQUk7SUFDVixRQUFRO0lBQ1gsQ0FBQyxFQUNGLEtBQUssS0FBSyxNQUFNLFlBQVk7SUFDeEIsTUFBTSxJQUFJO0lBQ1YsTUFBTSxJQUFJO0lBQ1YsUUFBUTtJQUNYLENBQUMsQ0FDTCxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sV0FBVyxhQUFhLE1BQU0sTUFBTSxDQUFDO09BR3JELFFBQU8sYUFBYSxLQUFLLEtBQUssS0FBSyxXQUFXO0lBQzFDLE1BQU0sSUFBSTtJQUNWLE1BQU0sSUFBSTtJQUNWLFFBQVE7SUFDWCxDQUFDLEVBQUUsS0FBSyxLQUFLLE1BQU0sV0FBVztJQUMzQixNQUFNLElBQUk7SUFDVixNQUFNLElBQUk7SUFDVixRQUFRO0lBQ1gsQ0FBQyxDQUFDOzs7QUFJZixpQkFBZ0IsVUFBVSxNQUFNLE9BQU8sV0FBVztBQUM5QyxTQUFPLElBQUksZ0JBQWdCO0dBQ2pCO0dBQ0M7R0FDUCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBR04sSUFBYSxXQUFiLE1BQWEsaUJBQWlCLFFBQVE7RUFDbEMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQ3ZELE9BQUksSUFBSSxlQUFlLGNBQWMsT0FBTztBQUN4QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxPQUFJLElBQUksS0FBSyxTQUFTLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFDMUMsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CLFNBQVMsS0FBSyxLQUFLLE1BQU07S0FDekIsV0FBVztLQUNYLE9BQU87S0FDUCxNQUFNO0tBQ1QsQ0FBQztBQUNGLFdBQU87O0FBR1gsT0FBSSxDQURTLEtBQUssS0FBSyxRQUNWLElBQUksS0FBSyxTQUFTLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFDbkQsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CLFNBQVMsS0FBSyxLQUFLLE1BQU07S0FDekIsV0FBVztLQUNYLE9BQU87S0FDUCxNQUFNO0tBQ1QsQ0FBQztBQUNGLFdBQU8sT0FBTzs7R0FFbEIsTUFBTSxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FDdEIsS0FBSyxNQUFNLGNBQWM7SUFDMUIsTUFBTSxTQUFTLEtBQUssS0FBSyxNQUFNLGNBQWMsS0FBSyxLQUFLO0FBQ3ZELFFBQUksQ0FBQyxPQUNELFFBQU87QUFDWCxXQUFPLE9BQU8sT0FBTyxJQUFJLG1CQUFtQixLQUFLLE1BQU0sSUFBSSxNQUFNLFVBQVUsQ0FBQztLQUM5RSxDQUNHLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUN2QixPQUFJLElBQUksT0FBTyxNQUNYLFFBQU8sUUFBUSxJQUFJLE1BQU0sQ0FBQyxNQUFNLFlBQVk7QUFDeEMsV0FBTyxZQUFZLFdBQVcsUUFBUSxRQUFRO0tBQ2hEO09BR0YsUUFBTyxZQUFZLFdBQVcsUUFBUSxNQUFNOztFQUdwRCxJQUFJLFFBQVE7QUFDUixVQUFPLEtBQUssS0FBSzs7RUFFckIsS0FBSyxNQUFNO0FBQ1AsVUFBTyxJQUFJLFNBQVM7SUFDaEIsR0FBRyxLQUFLO0lBQ1I7SUFDSCxDQUFDOzs7QUFHVixVQUFTLFVBQVUsU0FBUyxXQUFXO0FBQ25DLE1BQUksQ0FBQyxNQUFNLFFBQVEsUUFBUSxDQUN2QixPQUFNLElBQUksTUFBTSx3REFBd0Q7QUFFNUUsU0FBTyxJQUFJLFNBQVM7R0FDaEIsT0FBTztHQUNQLFVBQVUsc0JBQXNCO0dBQ2hDLE1BQU07R0FDTixHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxZQUFiLE1BQWEsa0JBQWtCLFFBQVE7RUFDbkMsSUFBSSxZQUFZO0FBQ1osVUFBTyxLQUFLLEtBQUs7O0VBRXJCLElBQUksY0FBYztBQUNkLFVBQU8sS0FBSyxLQUFLOztFQUVyQixPQUFPLE9BQU87R0FDVixNQUFNLEVBQUUsUUFBUSxRQUFRLEtBQUssb0JBQW9CLE1BQU07QUFDdkQsT0FBSSxJQUFJLGVBQWUsY0FBYyxRQUFRO0FBQ3pDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztHQUVYLE1BQU0sUUFBUSxFQUFFO0dBQ2hCLE1BQU0sVUFBVSxLQUFLLEtBQUs7R0FDMUIsTUFBTSxZQUFZLEtBQUssS0FBSztBQUM1QixRQUFLLE1BQU0sT0FBTyxJQUFJLEtBQ2xCLE9BQU0sS0FBSztJQUNQLEtBQUssUUFBUSxPQUFPLElBQUksbUJBQW1CLEtBQUssS0FBSyxJQUFJLE1BQU0sSUFBSSxDQUFDO0lBQ3BFLE9BQU8sVUFBVSxPQUFPLElBQUksbUJBQW1CLEtBQUssSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLElBQUksQ0FBQztJQUNsRixXQUFXLE9BQU8sSUFBSTtJQUN6QixDQUFDO0FBRU4sT0FBSSxJQUFJLE9BQU8sTUFDWCxRQUFPLFlBQVksaUJBQWlCLFFBQVEsTUFBTTtPQUdsRCxRQUFPLFlBQVksZ0JBQWdCLFFBQVEsTUFBTTs7RUFHekQsSUFBSSxVQUFVO0FBQ1YsVUFBTyxLQUFLLEtBQUs7O0VBRXJCLE9BQU8sT0FBTyxPQUFPLFFBQVEsT0FBTztBQUNoQyxPQUFJLGtCQUFrQixRQUNsQixRQUFPLElBQUksVUFBVTtJQUNqQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVUsc0JBQXNCO0lBQ2hDLEdBQUcsb0JBQW9CLE1BQU07SUFDaEMsQ0FBQztBQUVOLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLFNBQVMsVUFBVSxRQUFRO0lBQzNCLFdBQVc7SUFDWCxVQUFVLHNCQUFzQjtJQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2pDLENBQUM7OztDQUdWLElBQWEsU0FBYixjQUE0QixRQUFRO0VBQ2hDLElBQUksWUFBWTtBQUNaLFVBQU8sS0FBSyxLQUFLOztFQUVyQixJQUFJLGNBQWM7QUFDZCxVQUFPLEtBQUssS0FBSzs7RUFFckIsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQ3ZELE9BQUksSUFBSSxlQUFlLGNBQWMsS0FBSztBQUN0QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxNQUFNLFVBQVUsS0FBSyxLQUFLO0dBQzFCLE1BQU0sWUFBWSxLQUFLLEtBQUs7R0FDNUIsTUFBTSxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxVQUFVO0FBQy9ELFdBQU87S0FDSCxLQUFLLFFBQVEsT0FBTyxJQUFJLG1CQUFtQixLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FBQztLQUMvRSxPQUFPLFVBQVUsT0FBTyxJQUFJLG1CQUFtQixLQUFLLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxRQUFRLENBQUMsQ0FBQztLQUMxRjtLQUNIO0FBQ0YsT0FBSSxJQUFJLE9BQU8sT0FBTztJQUNsQixNQUFNLDJCQUFXLElBQUksS0FBSztBQUMxQixXQUFPLFFBQVEsU0FBUyxDQUFDLEtBQUssWUFBWTtBQUN0QyxVQUFLLE1BQU0sUUFBUSxPQUFPO01BQ3RCLE1BQU0sTUFBTSxNQUFNLEtBQUs7TUFDdkIsTUFBTSxRQUFRLE1BQU0sS0FBSztBQUN6QixVQUFJLElBQUksV0FBVyxhQUFhLE1BQU0sV0FBVyxVQUM3QyxRQUFPO0FBRVgsVUFBSSxJQUFJLFdBQVcsV0FBVyxNQUFNLFdBQVcsUUFDM0MsUUFBTyxPQUFPO0FBRWxCLGVBQVMsSUFBSSxJQUFJLE9BQU8sTUFBTSxNQUFNOztBQUV4QyxZQUFPO01BQUUsUUFBUSxPQUFPO01BQU8sT0FBTztNQUFVO01BQ2xEO1VBRUQ7SUFDRCxNQUFNLDJCQUFXLElBQUksS0FBSztBQUMxQixTQUFLLE1BQU0sUUFBUSxPQUFPO0tBQ3RCLE1BQU0sTUFBTSxLQUFLO0tBQ2pCLE1BQU0sUUFBUSxLQUFLO0FBQ25CLFNBQUksSUFBSSxXQUFXLGFBQWEsTUFBTSxXQUFXLFVBQzdDLFFBQU87QUFFWCxTQUFJLElBQUksV0FBVyxXQUFXLE1BQU0sV0FBVyxRQUMzQyxRQUFPLE9BQU87QUFFbEIsY0FBUyxJQUFJLElBQUksT0FBTyxNQUFNLE1BQU07O0FBRXhDLFdBQU87S0FBRSxRQUFRLE9BQU87S0FBTyxPQUFPO0tBQVU7Ozs7QUFJNUQsUUFBTyxVQUFVLFNBQVMsV0FBVyxXQUFXO0FBQzVDLFNBQU8sSUFBSSxPQUFPO0dBQ2Q7R0FDQTtHQUNBLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFNBQWIsTUFBYSxlQUFlLFFBQVE7RUFDaEMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQ3ZELE9BQUksSUFBSSxlQUFlLGNBQWMsS0FBSztBQUN0QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxNQUFNLE1BQU0sS0FBSztBQUNqQixPQUFJLElBQUksWUFBWTtRQUNaLElBQUksS0FBSyxPQUFPLElBQUksUUFBUSxPQUFPO0FBQ25DLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixTQUFTLElBQUksUUFBUTtNQUNyQixNQUFNO01BQ04sV0FBVztNQUNYLE9BQU87TUFDUCxTQUFTLElBQUksUUFBUTtNQUN4QixDQUFDO0FBQ0YsWUFBTyxPQUFPOzs7QUFHdEIsT0FBSSxJQUFJLFlBQVk7UUFDWixJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsT0FBTztBQUNuQyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxJQUFJLFFBQVE7TUFDckIsTUFBTTtNQUNOLFdBQVc7TUFDWCxPQUFPO01BQ1AsU0FBUyxJQUFJLFFBQVE7TUFDeEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7O0dBR3RCLE1BQU0sWUFBWSxLQUFLLEtBQUs7R0FDNUIsU0FBUyxZQUFZLFVBQVU7SUFDM0IsTUFBTSw0QkFBWSxJQUFJLEtBQUs7QUFDM0IsU0FBSyxNQUFNLFdBQVcsVUFBVTtBQUM1QixTQUFJLFFBQVEsV0FBVyxVQUNuQixRQUFPO0FBQ1gsU0FBSSxRQUFRLFdBQVcsUUFDbkIsUUFBTyxPQUFPO0FBQ2xCLGVBQVUsSUFBSSxRQUFRLE1BQU07O0FBRWhDLFdBQU87S0FBRSxRQUFRLE9BQU87S0FBTyxPQUFPO0tBQVc7O0dBRXJELE1BQU0sV0FBVyxDQUFDLEdBQUcsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLEtBQUssTUFBTSxNQUFNLFVBQVUsT0FBTyxJQUFJLG1CQUFtQixLQUFLLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzFILE9BQUksSUFBSSxPQUFPLE1BQ1gsUUFBTyxRQUFRLElBQUksU0FBUyxDQUFDLE1BQU0sYUFBYSxZQUFZLFNBQVMsQ0FBQztPQUd0RSxRQUFPLFlBQVksU0FBUzs7RUFHcEMsSUFBSSxTQUFTLFNBQVM7QUFDbEIsVUFBTyxJQUFJLE9BQU87SUFDZCxHQUFHLEtBQUs7SUFDUixTQUFTO0tBQUUsT0FBTztLQUFTLFNBQVMsVUFBVSxTQUFTLFFBQVE7S0FBRTtJQUNwRSxDQUFDOztFQUVOLElBQUksU0FBUyxTQUFTO0FBQ2xCLFVBQU8sSUFBSSxPQUFPO0lBQ2QsR0FBRyxLQUFLO0lBQ1IsU0FBUztLQUFFLE9BQU87S0FBUyxTQUFTLFVBQVUsU0FBUyxRQUFRO0tBQUU7SUFDcEUsQ0FBQzs7RUFFTixLQUFLLE1BQU0sU0FBUztBQUNoQixVQUFPLEtBQUssSUFBSSxNQUFNLFFBQVEsQ0FBQyxJQUFJLE1BQU0sUUFBUTs7RUFFckQsU0FBUyxTQUFTO0FBQ2QsVUFBTyxLQUFLLElBQUksR0FBRyxRQUFROzs7QUFHbkMsUUFBTyxVQUFVLFdBQVcsV0FBVztBQUNuQyxTQUFPLElBQUksT0FBTztHQUNkO0dBQ0EsU0FBUztHQUNULFNBQVM7R0FDVCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxjQUFiLE1BQWEsb0JBQW9CLFFBQVE7RUFDckMsY0FBYztBQUNWLFNBQU0sR0FBRyxVQUFVO0FBQ25CLFFBQUssV0FBVyxLQUFLOztFQUV6QixPQUFPLE9BQU87R0FDVixNQUFNLEVBQUUsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQy9DLE9BQUksSUFBSSxlQUFlLGNBQWMsVUFBVTtBQUMzQyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxTQUFTLGNBQWMsTUFBTSxPQUFPO0FBQ2hDLFdBQU8sVUFBVTtLQUNiLE1BQU07S0FDTixNQUFNLElBQUk7S0FDVixXQUFXO01BQUMsSUFBSSxPQUFPO01BQW9CLElBQUk7TUFBZ0IsYUFBYTtNQUFFQztNQUFnQixDQUFDLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRTtLQUNqSCxXQUFXO01BQ1AsTUFBTSxhQUFhO01BQ25CLGdCQUFnQjtNQUNuQjtLQUNKLENBQUM7O0dBRU4sU0FBUyxpQkFBaUIsU0FBUyxPQUFPO0FBQ3RDLFdBQU8sVUFBVTtLQUNiLE1BQU07S0FDTixNQUFNLElBQUk7S0FDVixXQUFXO01BQUMsSUFBSSxPQUFPO01BQW9CLElBQUk7TUFBZ0IsYUFBYTtNQUFFQTtNQUFnQixDQUFDLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRTtLQUNqSCxXQUFXO01BQ1AsTUFBTSxhQUFhO01BQ25CLGlCQUFpQjtNQUNwQjtLQUNKLENBQUM7O0dBRU4sTUFBTSxTQUFTLEVBQUUsVUFBVSxJQUFJLE9BQU8sb0JBQW9CO0dBQzFELE1BQU0sS0FBSyxJQUFJO0FBQ2YsT0FBSSxLQUFLLEtBQUssbUJBQW1CLFlBQVk7SUFJekMsTUFBTSxLQUFLO0FBQ1gsV0FBTyxHQUFHLGVBQWdCLEdBQUcsTUFBTTtLQUMvQixNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQztLQUM5QixNQUFNLGFBQWEsTUFBTSxHQUFHLEtBQUssS0FBSyxXQUFXLE1BQU0sT0FBTyxDQUFDLE9BQU8sTUFBTTtBQUN4RSxZQUFNLFNBQVMsY0FBYyxNQUFNLEVBQUUsQ0FBQztBQUN0QyxZQUFNO09BQ1I7S0FDRixNQUFNLFNBQVMsTUFBTSxRQUFRLE1BQU0sSUFBSSxNQUFNLFdBQVc7QUFPeEQsWUFOc0IsTUFBTSxHQUFHLEtBQUssUUFBUSxLQUFLLEtBQzVDLFdBQVcsUUFBUSxPQUFPLENBQzFCLE9BQU8sTUFBTTtBQUNkLFlBQU0sU0FBUyxpQkFBaUIsUUFBUSxFQUFFLENBQUM7QUFDM0MsWUFBTTtPQUNSO01BRUo7VUFFRDtJQUlELE1BQU0sS0FBSztBQUNYLFdBQU8sR0FBRyxTQUFVLEdBQUcsTUFBTTtLQUN6QixNQUFNLGFBQWEsR0FBRyxLQUFLLEtBQUssVUFBVSxNQUFNLE9BQU87QUFDdkQsU0FBSSxDQUFDLFdBQVcsUUFDWixPQUFNLElBQUksU0FBUyxDQUFDLGNBQWMsTUFBTSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0tBRS9ELE1BQU0sU0FBUyxRQUFRLE1BQU0sSUFBSSxNQUFNLFdBQVcsS0FBSztLQUN2RCxNQUFNLGdCQUFnQixHQUFHLEtBQUssUUFBUSxVQUFVLFFBQVEsT0FBTztBQUMvRCxTQUFJLENBQUMsY0FBYyxRQUNmLE9BQU0sSUFBSSxTQUFTLENBQUMsaUJBQWlCLFFBQVEsY0FBYyxNQUFNLENBQUMsQ0FBQztBQUV2RSxZQUFPLGNBQWM7TUFDdkI7OztFQUdWLGFBQWE7QUFDVCxVQUFPLEtBQUssS0FBSzs7RUFFckIsYUFBYTtBQUNULFVBQU8sS0FBSyxLQUFLOztFQUVyQixLQUFLLEdBQUcsT0FBTztBQUNYLFVBQU8sSUFBSSxZQUFZO0lBQ25CLEdBQUcsS0FBSztJQUNSLE1BQU0sU0FBUyxPQUFPLE1BQU0sQ0FBQyxLQUFLLFdBQVcsUUFBUSxDQUFDO0lBQ3pELENBQUM7O0VBRU4sUUFBUSxZQUFZO0FBQ2hCLFVBQU8sSUFBSSxZQUFZO0lBQ25CLEdBQUcsS0FBSztJQUNSLFNBQVM7SUFDWixDQUFDOztFQUVOLFVBQVUsTUFBTTtBQUVaLFVBRHNCLEtBQUssTUFBTSxLQUFLOztFQUcxQyxnQkFBZ0IsTUFBTTtBQUVsQixVQURzQixLQUFLLE1BQU0sS0FBSzs7RUFHMUMsT0FBTyxPQUFPLE1BQU0sU0FBUyxRQUFRO0FBQ2pDLFVBQU8sSUFBSSxZQUFZO0lBQ25CLE1BQU8sT0FBTyxPQUFPLFNBQVMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLFdBQVcsUUFBUSxDQUFDO0lBQ2xFLFNBQVMsV0FBVyxXQUFXLFFBQVE7SUFDdkMsVUFBVSxzQkFBc0I7SUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNqQyxDQUFDOzs7Q0FHVixJQUFhLFVBQWIsY0FBNkIsUUFBUTtFQUNqQyxJQUFJLFNBQVM7QUFDVCxVQUFPLEtBQUssS0FBSyxRQUFROztFQUU3QixPQUFPLE9BQU87R0FDVixNQUFNLEVBQUUsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBRS9DLFVBRG1CLEtBQUssS0FBSyxRQUFRLENBQ25CLE9BQU87SUFBRSxNQUFNLElBQUk7SUFBTSxNQUFNLElBQUk7SUFBTSxRQUFRO0lBQUssQ0FBQzs7O0FBR2pGLFNBQVEsVUFBVSxRQUFRLFdBQVc7QUFDakMsU0FBTyxJQUFJLFFBQVE7R0FDUDtHQUNSLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLGFBQWIsY0FBZ0MsUUFBUTtFQUNwQyxPQUFPLE9BQU87QUFDVixPQUFJLE1BQU0sU0FBUyxLQUFLLEtBQUssT0FBTztJQUNoQyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixVQUFVLElBQUk7S0FDZCxNQUFNLGFBQWE7S0FDbkIsVUFBVSxLQUFLLEtBQUs7S0FDdkIsQ0FBQztBQUNGLFdBQU87O0FBRVgsVUFBTztJQUFFLFFBQVE7SUFBUyxPQUFPLE1BQU07SUFBTTs7RUFFakQsSUFBSSxRQUFRO0FBQ1IsVUFBTyxLQUFLLEtBQUs7OztBQUd6QixZQUFXLFVBQVUsT0FBTyxXQUFXO0FBQ25DLFNBQU8sSUFBSSxXQUFXO0dBQ1g7R0FDUCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sU0FBUyxjQUFjLFFBQVEsUUFBUTtBQUNuQyxTQUFPLElBQUksUUFBUTtHQUNmO0dBQ0EsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsVUFBYixNQUFhLGdCQUFnQixRQUFRO0VBQ2pDLE9BQU8sT0FBTztBQUNWLE9BQUksT0FBTyxNQUFNLFNBQVMsVUFBVTtJQUNoQyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtJQUN2QyxNQUFNLGlCQUFpQixLQUFLLEtBQUs7QUFDakMsc0JBQWtCLEtBQUs7S0FDbkIsVUFBVSxLQUFLLFdBQVcsZUFBZTtLQUN6QyxVQUFVLElBQUk7S0FDZCxNQUFNLGFBQWE7S0FDdEIsQ0FBQztBQUNGLFdBQU87O0FBRVgsT0FBSSxDQUFDLEtBQUssT0FDTixNQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssS0FBSyxPQUFPO0FBRTNDLE9BQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxNQUFNLEtBQUssRUFBRTtJQUM5QixNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtJQUN2QyxNQUFNLGlCQUFpQixLQUFLLEtBQUs7QUFDakMsc0JBQWtCLEtBQUs7S0FDbkIsVUFBVSxJQUFJO0tBQ2QsTUFBTSxhQUFhO0tBQ25CLFNBQVM7S0FDWixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxVQUFPLEdBQUcsTUFBTSxLQUFLOztFQUV6QixJQUFJLFVBQVU7QUFDVixVQUFPLEtBQUssS0FBSzs7RUFFckIsSUFBSSxPQUFPO0dBQ1AsTUFBTSxhQUFhLEVBQUU7QUFDckIsUUFBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE9BQ3hCLFlBQVcsT0FBTztBQUV0QixVQUFPOztFQUVYLElBQUksU0FBUztHQUNULE1BQU0sYUFBYSxFQUFFO0FBQ3JCLFFBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxPQUN4QixZQUFXLE9BQU87QUFFdEIsVUFBTzs7RUFFWCxJQUFJLE9BQU87R0FDUCxNQUFNLGFBQWEsRUFBRTtBQUNyQixRQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FDeEIsWUFBVyxPQUFPO0FBRXRCLFVBQU87O0VBRVgsUUFBUSxRQUFRLFNBQVMsS0FBSyxNQUFNO0FBQ2hDLFVBQU8sUUFBUSxPQUFPLFFBQVE7SUFDMUIsR0FBRyxLQUFLO0lBQ1IsR0FBRztJQUNOLENBQUM7O0VBRU4sUUFBUSxRQUFRLFNBQVMsS0FBSyxNQUFNO0FBQ2hDLFVBQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxRQUFRLFFBQVEsQ0FBQyxPQUFPLFNBQVMsSUFBSSxDQUFDLEVBQUU7SUFDdkUsR0FBRyxLQUFLO0lBQ1IsR0FBRztJQUNOLENBQUM7OztBQUdWLFNBQVEsU0FBUztDQUNqQixJQUFhLGdCQUFiLGNBQW1DLFFBQVE7RUFDdkMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxtQkFBbUIsS0FBSyxtQkFBbUIsS0FBSyxLQUFLLE9BQU87R0FDbEUsTUFBTSxNQUFNLEtBQUssZ0JBQWdCLE1BQU07QUFDdkMsT0FBSSxJQUFJLGVBQWUsY0FBYyxVQUFVLElBQUksZUFBZSxjQUFjLFFBQVE7SUFDcEYsTUFBTSxpQkFBaUIsS0FBSyxhQUFhLGlCQUFpQjtBQUMxRCxzQkFBa0IsS0FBSztLQUNuQixVQUFVLEtBQUssV0FBVyxlQUFlO0tBQ3pDLFVBQVUsSUFBSTtLQUNkLE1BQU0sYUFBYTtLQUN0QixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxPQUFJLENBQUMsS0FBSyxPQUNOLE1BQUssU0FBUyxJQUFJLElBQUksS0FBSyxtQkFBbUIsS0FBSyxLQUFLLE9BQU8sQ0FBQztBQUVwRSxPQUFJLENBQUMsS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLEVBQUU7SUFDOUIsTUFBTSxpQkFBaUIsS0FBSyxhQUFhLGlCQUFpQjtBQUMxRCxzQkFBa0IsS0FBSztLQUNuQixVQUFVLElBQUk7S0FDZCxNQUFNLGFBQWE7S0FDbkIsU0FBUztLQUNaLENBQUM7QUFDRixXQUFPOztBQUVYLFVBQU8sR0FBRyxNQUFNLEtBQUs7O0VBRXpCLElBQUksT0FBTztBQUNQLFVBQU8sS0FBSyxLQUFLOzs7QUFHekIsZUFBYyxVQUFVLFFBQVEsV0FBVztBQUN2QyxTQUFPLElBQUksY0FBYztHQUNiO0dBQ1IsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsYUFBYixjQUFnQyxRQUFRO0VBQ3BDLFNBQVM7QUFDTCxVQUFPLEtBQUssS0FBSzs7RUFFckIsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtBQUMvQyxPQUFJLElBQUksZUFBZSxjQUFjLFdBQVcsSUFBSSxPQUFPLFVBQVUsT0FBTztBQUN4RSxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFHWCxVQUFPLElBRGEsSUFBSSxlQUFlLGNBQWMsVUFBVSxJQUFJLE9BQU8sUUFBUSxRQUFRLElBQUksS0FBSyxFQUM3RSxNQUFNLFNBQVM7QUFDakMsV0FBTyxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU07S0FDbkMsTUFBTSxJQUFJO0tBQ1YsVUFBVSxJQUFJLE9BQU87S0FDeEIsQ0FBQztLQUNKLENBQUM7OztBQUdYLFlBQVcsVUFBVSxRQUFRLFdBQVc7QUFDcEMsU0FBTyxJQUFJLFdBQVc7R0FDbEIsTUFBTTtHQUNOLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLGFBQWIsY0FBZ0MsUUFBUTtFQUNwQyxZQUFZO0FBQ1IsVUFBTyxLQUFLLEtBQUs7O0VBRXJCLGFBQWE7QUFDVCxVQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssYUFBYSxzQkFBc0IsYUFDMUQsS0FBSyxLQUFLLE9BQU8sWUFBWSxHQUM3QixLQUFLLEtBQUs7O0VBRXBCLE9BQU8sT0FBTztHQUNWLE1BQU0sRUFBRSxRQUFRLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtHQUN2RCxNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVU7R0FDbkMsTUFBTSxXQUFXO0lBQ2IsV0FBVyxRQUFRO0FBQ2YsdUJBQWtCLEtBQUssSUFBSTtBQUMzQixTQUFJLElBQUksTUFDSixRQUFPLE9BQU87U0FHZCxRQUFPLE9BQU87O0lBR3RCLElBQUksT0FBTztBQUNQLFlBQU8sSUFBSTs7SUFFbEI7QUFDRCxZQUFTLFdBQVcsU0FBUyxTQUFTLEtBQUssU0FBUztBQUNwRCxPQUFJLE9BQU8sU0FBUyxjQUFjO0lBQzlCLE1BQU0sWUFBWSxPQUFPLFVBQVUsSUFBSSxNQUFNLFNBQVM7QUFDdEQsUUFBSSxJQUFJLE9BQU8sTUFDWCxRQUFPLFFBQVEsUUFBUSxVQUFVLENBQUMsS0FBSyxPQUFPLGNBQWM7QUFDeEQsU0FBSSxPQUFPLFVBQVUsVUFDakIsUUFBTztLQUNYLE1BQU0sU0FBUyxNQUFNLEtBQUssS0FBSyxPQUFPLFlBQVk7TUFDOUMsTUFBTTtNQUNOLE1BQU0sSUFBSTtNQUNWLFFBQVE7TUFDWCxDQUFDO0FBQ0YsU0FBSSxPQUFPLFdBQVcsVUFDbEIsUUFBTztBQUNYLFNBQUksT0FBTyxXQUFXLFFBQ2xCLFFBQU8sTUFBTSxPQUFPLE1BQU07QUFDOUIsU0FBSSxPQUFPLFVBQVUsUUFDakIsUUFBTyxNQUFNLE9BQU8sTUFBTTtBQUM5QixZQUFPO01BQ1Q7U0FFRDtBQUNELFNBQUksT0FBTyxVQUFVLFVBQ2pCLFFBQU87S0FDWCxNQUFNLFNBQVMsS0FBSyxLQUFLLE9BQU8sV0FBVztNQUN2QyxNQUFNO01BQ04sTUFBTSxJQUFJO01BQ1YsUUFBUTtNQUNYLENBQUM7QUFDRixTQUFJLE9BQU8sV0FBVyxVQUNsQixRQUFPO0FBQ1gsU0FBSSxPQUFPLFdBQVcsUUFDbEIsUUFBTyxNQUFNLE9BQU8sTUFBTTtBQUM5QixTQUFJLE9BQU8sVUFBVSxRQUNqQixRQUFPLE1BQU0sT0FBTyxNQUFNO0FBQzlCLFlBQU87OztBQUdmLE9BQUksT0FBTyxTQUFTLGNBQWM7SUFDOUIsTUFBTSxxQkFBcUIsUUFBUTtLQUMvQixNQUFNLFNBQVMsT0FBTyxXQUFXLEtBQUssU0FBUztBQUMvQyxTQUFJLElBQUksT0FBTyxNQUNYLFFBQU8sUUFBUSxRQUFRLE9BQU87QUFFbEMsU0FBSSxrQkFBa0IsUUFDbEIsT0FBTSxJQUFJLE1BQU0sNEZBQTRGO0FBRWhILFlBQU87O0FBRVgsUUFBSSxJQUFJLE9BQU8sVUFBVSxPQUFPO0tBQzVCLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxXQUFXO01BQ3RDLE1BQU0sSUFBSTtNQUNWLE1BQU0sSUFBSTtNQUNWLFFBQVE7TUFDWCxDQUFDO0FBQ0YsU0FBSSxNQUFNLFdBQVcsVUFDakIsUUFBTztBQUNYLFNBQUksTUFBTSxXQUFXLFFBQ2pCLFFBQU8sT0FBTztBQUVsQix1QkFBa0IsTUFBTSxNQUFNO0FBQzlCLFlBQU87TUFBRSxRQUFRLE9BQU87TUFBTyxPQUFPLE1BQU07TUFBTztVQUduRCxRQUFPLEtBQUssS0FBSyxPQUFPLFlBQVk7S0FBRSxNQUFNLElBQUk7S0FBTSxNQUFNLElBQUk7S0FBTSxRQUFRO0tBQUssQ0FBQyxDQUFDLE1BQU0sVUFBVTtBQUNqRyxTQUFJLE1BQU0sV0FBVyxVQUNqQixRQUFPO0FBQ1gsU0FBSSxNQUFNLFdBQVcsUUFDakIsUUFBTyxPQUFPO0FBQ2xCLFlBQU8sa0JBQWtCLE1BQU0sTUFBTSxDQUFDLFdBQVc7QUFDN0MsYUFBTztPQUFFLFFBQVEsT0FBTztPQUFPLE9BQU8sTUFBTTtPQUFPO09BQ3JEO01BQ0o7O0FBR1YsT0FBSSxPQUFPLFNBQVMsWUFDaEIsS0FBSSxJQUFJLE9BQU8sVUFBVSxPQUFPO0lBQzVCLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXO0tBQ3JDLE1BQU0sSUFBSTtLQUNWLE1BQU0sSUFBSTtLQUNWLFFBQVE7S0FDWCxDQUFDO0FBQ0YsUUFBSSxDQUFDLFFBQVEsS0FBSyxDQUNkLFFBQU87SUFDWCxNQUFNLFNBQVMsT0FBTyxVQUFVLEtBQUssT0FBTyxTQUFTO0FBQ3JELFFBQUksa0JBQWtCLFFBQ2xCLE9BQU0sSUFBSSxNQUFNLGtHQUFrRztBQUV0SCxXQUFPO0tBQUUsUUFBUSxPQUFPO0tBQU8sT0FBTztLQUFRO1NBRzlDLFFBQU8sS0FBSyxLQUFLLE9BQU8sWUFBWTtJQUFFLE1BQU0sSUFBSTtJQUFNLE1BQU0sSUFBSTtJQUFNLFFBQVE7SUFBSyxDQUFDLENBQUMsTUFBTSxTQUFTO0FBQ2hHLFFBQUksQ0FBQyxRQUFRLEtBQUssQ0FDZCxRQUFPO0FBQ1gsV0FBTyxRQUFRLFFBQVEsT0FBTyxVQUFVLEtBQUssT0FBTyxTQUFTLENBQUMsQ0FBQyxNQUFNLFlBQVk7S0FDN0UsUUFBUSxPQUFPO0tBQ2YsT0FBTztLQUNWLEVBQUU7S0FDTDtBQUdWLFFBQUssWUFBWSxPQUFPOzs7QUFHaEMsWUFBVyxVQUFVLFFBQVEsUUFBUSxXQUFXO0FBQzVDLFNBQU8sSUFBSSxXQUFXO0dBQ2xCO0dBQ0EsVUFBVSxzQkFBc0I7R0FDaEM7R0FDQSxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0FBRU4sWUFBVyx3QkFBd0IsWUFBWSxRQUFRLFdBQVc7QUFDOUQsU0FBTyxJQUFJLFdBQVc7R0FDbEI7R0FDQSxRQUFRO0lBQUUsTUFBTTtJQUFjLFdBQVc7SUFBWTtHQUNyRCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBR04sSUFBYSxjQUFiLGNBQWlDLFFBQVE7RUFDckMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxVQUM3QixRQUFPLEdBQUcsS0FBQSxFQUFVO0FBRXhCLFVBQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNOztFQUU1QyxTQUFTO0FBQ0wsVUFBTyxLQUFLLEtBQUs7OztBQUd6QixhQUFZLFVBQVUsTUFBTSxXQUFXO0FBQ25DLFNBQU8sSUFBSSxZQUFZO0dBQ25CLFdBQVc7R0FDWCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxjQUFiLGNBQWlDLFFBQVE7RUFDckMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxLQUM3QixRQUFPLEdBQUcsS0FBSztBQUVuQixVQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sTUFBTTs7RUFFNUMsU0FBUztBQUNMLFVBQU8sS0FBSyxLQUFLOzs7QUFHekIsYUFBWSxVQUFVLE1BQU0sV0FBVztBQUNuQyxTQUFPLElBQUksWUFBWTtHQUNuQixXQUFXO0dBQ1gsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsYUFBYixjQUFnQyxRQUFRO0VBQ3BDLE9BQU8sT0FBTztHQUNWLE1BQU0sRUFBRSxRQUFRLEtBQUssb0JBQW9CLE1BQU07R0FDL0MsSUFBSSxPQUFPLElBQUk7QUFDZixPQUFJLElBQUksZUFBZSxjQUFjLFVBQ2pDLFFBQU8sS0FBSyxLQUFLLGNBQWM7QUFFbkMsVUFBTyxLQUFLLEtBQUssVUFBVSxPQUFPO0lBQzlCO0lBQ0EsTUFBTSxJQUFJO0lBQ1YsUUFBUTtJQUNYLENBQUM7O0VBRU4sZ0JBQWdCO0FBQ1osVUFBTyxLQUFLLEtBQUs7OztBQUd6QixZQUFXLFVBQVUsTUFBTSxXQUFXO0FBQ2xDLFNBQU8sSUFBSSxXQUFXO0dBQ2xCLFdBQVc7R0FDWCxVQUFVLHNCQUFzQjtHQUNoQyxjQUFjLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxnQkFBZ0IsT0FBTztHQUNuRixHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxXQUFiLGNBQThCLFFBQVE7RUFDbEMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtHQUUvQyxNQUFNLFNBQVM7SUFDWCxHQUFHO0lBQ0gsUUFBUTtLQUNKLEdBQUcsSUFBSTtLQUNQLFFBQVEsRUFBRTtLQUNiO0lBQ0o7R0FDRCxNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVUsT0FBTztJQUN0QyxNQUFNLE9BQU87SUFDYixNQUFNLE9BQU87SUFDYixRQUFRLEVBQ0osR0FBRyxRQUNOO0lBQ0osQ0FBQztBQUNGLE9BQUksUUFBUSxPQUFPLENBQ2YsUUFBTyxPQUFPLE1BQU0sV0FBVztBQUMzQixXQUFPO0tBQ0gsUUFBUTtLQUNSLE9BQU8sT0FBTyxXQUFXLFVBQ25CLE9BQU8sUUFDUCxLQUFLLEtBQUssV0FBVztNQUNuQixJQUFJLFFBQVE7QUFDUixjQUFPLElBQUksU0FBUyxPQUFPLE9BQU8sT0FBTzs7TUFFN0MsT0FBTyxPQUFPO01BQ2pCLENBQUM7S0FDVDtLQUNIO09BR0YsUUFBTztJQUNILFFBQVE7SUFDUixPQUFPLE9BQU8sV0FBVyxVQUNuQixPQUFPLFFBQ1AsS0FBSyxLQUFLLFdBQVc7S0FDbkIsSUFBSSxRQUFRO0FBQ1IsYUFBTyxJQUFJLFNBQVMsT0FBTyxPQUFPLE9BQU87O0tBRTdDLE9BQU8sT0FBTztLQUNqQixDQUFDO0lBQ1Q7O0VBR1QsY0FBYztBQUNWLFVBQU8sS0FBSyxLQUFLOzs7QUFHekIsVUFBUyxVQUFVLE1BQU0sV0FBVztBQUNoQyxTQUFPLElBQUksU0FBUztHQUNoQixXQUFXO0dBQ1gsVUFBVSxzQkFBc0I7R0FDaEMsWUFBWSxPQUFPLE9BQU8sVUFBVSxhQUFhLE9BQU8sY0FBYyxPQUFPO0dBQzdFLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFNBQWIsY0FBNEIsUUFBUTtFQUNoQyxPQUFPLE9BQU87QUFFVixPQURtQixLQUFLLFNBQVMsTUFBTSxLQUNwQixjQUFjLEtBQUs7SUFDbEMsTUFBTSxNQUFNLEtBQUssZ0JBQWdCLE1BQU07QUFDdkMsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CLFVBQVUsY0FBYztLQUN4QixVQUFVLElBQUk7S0FDakIsQ0FBQztBQUNGLFdBQU87O0FBRVgsVUFBTztJQUFFLFFBQVE7SUFBUyxPQUFPLE1BQU07SUFBTTs7O0FBR3JELFFBQU8sVUFBVSxXQUFXO0FBQ3hCLFNBQU8sSUFBSSxPQUFPO0dBQ2QsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUdOLElBQWEsYUFBYixjQUFnQyxRQUFRO0VBQ3BDLE9BQU8sT0FBTztHQUNWLE1BQU0sRUFBRSxRQUFRLEtBQUssb0JBQW9CLE1BQU07R0FDL0MsTUFBTSxPQUFPLElBQUk7QUFDakIsVUFBTyxLQUFLLEtBQUssS0FBSyxPQUFPO0lBQ3pCO0lBQ0EsTUFBTSxJQUFJO0lBQ1YsUUFBUTtJQUNYLENBQUM7O0VBRU4sU0FBUztBQUNMLFVBQU8sS0FBSyxLQUFLOzs7Q0FHekIsSUFBYSxjQUFiLE1BQWEsb0JBQW9CLFFBQVE7RUFDckMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQ3ZELE9BQUksSUFBSSxPQUFPLE9BQU87SUFDbEIsTUFBTSxjQUFjLFlBQVk7S0FDNUIsTUFBTSxXQUFXLE1BQU0sS0FBSyxLQUFLLEdBQUcsWUFBWTtNQUM1QyxNQUFNLElBQUk7TUFDVixNQUFNLElBQUk7TUFDVixRQUFRO01BQ1gsQ0FBQztBQUNGLFNBQUksU0FBUyxXQUFXLFVBQ3BCLFFBQU87QUFDWCxTQUFJLFNBQVMsV0FBVyxTQUFTO0FBQzdCLGFBQU8sT0FBTztBQUNkLGFBQU8sTUFBTSxTQUFTLE1BQU07V0FHNUIsUUFBTyxLQUFLLEtBQUssSUFBSSxZQUFZO01BQzdCLE1BQU0sU0FBUztNQUNmLE1BQU0sSUFBSTtNQUNWLFFBQVE7TUFDWCxDQUFDOztBQUdWLFdBQU8sYUFBYTtVQUVuQjtJQUNELE1BQU0sV0FBVyxLQUFLLEtBQUssR0FBRyxXQUFXO0tBQ3JDLE1BQU0sSUFBSTtLQUNWLE1BQU0sSUFBSTtLQUNWLFFBQVE7S0FDWCxDQUFDO0FBQ0YsUUFBSSxTQUFTLFdBQVcsVUFDcEIsUUFBTztBQUNYLFFBQUksU0FBUyxXQUFXLFNBQVM7QUFDN0IsWUFBTyxPQUFPO0FBQ2QsWUFBTztNQUNILFFBQVE7TUFDUixPQUFPLFNBQVM7TUFDbkI7VUFHRCxRQUFPLEtBQUssS0FBSyxJQUFJLFdBQVc7S0FDNUIsTUFBTSxTQUFTO0tBQ2YsTUFBTSxJQUFJO0tBQ1YsUUFBUTtLQUNYLENBQUM7OztFQUlkLE9BQU8sT0FBTyxHQUFHLEdBQUc7QUFDaEIsVUFBTyxJQUFJLFlBQVk7SUFDbkIsSUFBSTtJQUNKLEtBQUs7SUFDTCxVQUFVLHNCQUFzQjtJQUNuQyxDQUFDOzs7Q0FHVixJQUFhLGNBQWIsY0FBaUMsUUFBUTtFQUNyQyxPQUFPLE9BQU87R0FDVixNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNO0dBQ2hELE1BQU0sVUFBVSxTQUFTO0FBQ3JCLFFBQUksUUFBUSxLQUFLLENBQ2IsTUFBSyxRQUFRLE9BQU8sT0FBTyxLQUFLLE1BQU07QUFFMUMsV0FBTzs7QUFFWCxVQUFPLFFBQVEsT0FBTyxHQUFHLE9BQU8sTUFBTSxTQUFTLE9BQU8sS0FBSyxDQUFDLEdBQUcsT0FBTyxPQUFPOztFQUVqRixTQUFTO0FBQ0wsVUFBTyxLQUFLLEtBQUs7OztBQUd6QixhQUFZLFVBQVUsTUFBTSxXQUFXO0FBQ25DLFNBQU8sSUFBSSxZQUFZO0dBQ25CLFdBQVc7R0FDWCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0FBZ0RjLENBQ1IsVUFBVTtDQUV0QixJQUFXO0FBQ1gsRUFBQyxTQUFVLHVCQUF1QjtBQUM5Qix3QkFBc0IsZUFBZTtBQUNyQyx3QkFBc0IsZUFBZTtBQUNyQyx3QkFBc0IsWUFBWTtBQUNsQyx3QkFBc0IsZUFBZTtBQUNyQyx3QkFBc0IsZ0JBQWdCO0FBQ3RDLHdCQUFzQixhQUFhO0FBQ25DLHdCQUFzQixlQUFlO0FBQ3JDLHdCQUFzQixrQkFBa0I7QUFDeEMsd0JBQXNCLGFBQWE7QUFDbkMsd0JBQXNCLFlBQVk7QUFDbEMsd0JBQXNCLGdCQUFnQjtBQUN0Qyx3QkFBc0IsY0FBYztBQUNwQyx3QkFBc0IsYUFBYTtBQUNuQyx3QkFBc0IsY0FBYztBQUNwQyx3QkFBc0IsZUFBZTtBQUNyQyx3QkFBc0IsY0FBYztBQUNwQyx3QkFBc0IsMkJBQTJCO0FBQ2pELHdCQUFzQixxQkFBcUI7QUFDM0Msd0JBQXNCLGNBQWM7QUFDcEMsd0JBQXNCLGVBQWU7QUFDckMsd0JBQXNCLFlBQVk7QUFDbEMsd0JBQXNCLFlBQVk7QUFDbEMsd0JBQXNCLGlCQUFpQjtBQUN2Qyx3QkFBc0IsYUFBYTtBQUNuQyx3QkFBc0IsZ0JBQWdCO0FBQ3RDLHdCQUFzQixhQUFhO0FBQ25DLHdCQUFzQixnQkFBZ0I7QUFDdEMsd0JBQXNCLG1CQUFtQjtBQUN6Qyx3QkFBc0IsaUJBQWlCO0FBQ3ZDLHdCQUFzQixpQkFBaUI7QUFDdkMsd0JBQXNCLGdCQUFnQjtBQUN0Qyx3QkFBc0IsY0FBYztBQUNwQyx3QkFBc0IsZ0JBQWdCO0FBQ3RDLHdCQUFzQixnQkFBZ0I7QUFDdEMsd0JBQXNCLGlCQUFpQjtBQUN2Qyx3QkFBc0IsaUJBQWlCO0lBQ3hDLDBCQUEwQix3QkFBd0IsRUFBRSxFQUFFO0NBVXpELElBQU0sYUFBYSxVQUFVO0NBQzdCLElBQU0sYUFBYSxVQUFVO0FBQ2IsUUFBTztBQUNKLFdBQVU7Q0FDN0IsSUFBTSxjQUFjLFdBQVc7QUFDZCxTQUFRO0FBQ04sV0FBVTtBQUNQLGNBQWE7QUFDbEIsU0FBUTtBQUNULFFBQU87QUFDSCxZQUFXO0FBQ2IsVUFBUztBQUNWLFNBQVE7Q0FDekIsSUFBTSxZQUFZLFNBQVM7Q0FDM0IsSUFBTSxhQUFhLFVBQVU7QUFDSixXQUFVO0FBQ2pCLFVBQVM7Q0FDM0IsSUFBTSx5QkFBeUIsc0JBQXNCO0FBQzVCLGlCQUFnQjtBQUN2QixVQUFTO0FBQ1IsV0FBVTtBQUNiLFFBQU87QUFDUCxRQUFPO0FBQ0YsYUFBWTtBQUNoQixTQUFRO0NBQ3pCLElBQU0sY0FBYyxXQUFXO0FBQ2QsU0FBUTtBQUNGLGVBQWM7QUFDakIsWUFBVztBQUNYLFlBQVc7QUFDVixhQUFZO0FBQ1osYUFBWTtBQUNWLFlBQVc7QUFDYixhQUFZOzs7Q0NobEhqQyxJQUFhLGdCQUFnQjtFQUUzQixlQUFlO0VBRWYsY0FBYztFQUNkLGlCQUFpQjtFQUVqQixhQUFhO0VBRWIsV0FBVztFQUNYLGdCQUFnQjtFQUNqQjtBQTJINEIsd0JBQXFCLFFBQVE7RUFuRHhCLFdBQVM7R0FDekMsTUFBTSxZQUFVLGNBQWMsY0FBYztHQUM1QyxNQUFNLFdBQVM7SUFDYixJQUFJLFlBQVU7SUFDZCxNQUFNLFlBQVU7SUFDaEIsYUFBYSxZQUFVO0lBQ3ZCLFlBQVksWUFBVSxDQUFDLFVBQVU7SUFDakMsT0FBTyxZQUFVO0lBQ2pCLFVBQVUsVUFBUSxZQUFVLENBQUM7SUFDN0IsT0FBTyxhQUFXO0lBQ2xCLEtBQUssWUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVO0lBQ2pDLENBQUM7R0FDSCxDQUFDO0VBRStCLFdBQVMsRUFDeEMsTUFBTSxZQUFVLGNBQWMsYUFBYSxFQUM1QyxDQUFDO0VBRWtDLFdBQVM7R0FDM0MsTUFBTSxZQUFVLGNBQWMsZ0JBQWdCO0dBQzlDLFVBQVUsV0FBUztJQUNqQixTQUFTLGFBQVcsQ0FBQyxVQUFVO0lBQy9CLE9BQU8sV0FBUztLQUNkLG1CQUFtQixVQUFRLFlBQVUsQ0FBQyxDQUFDLFVBQVU7S0FDakQsbUJBQW1CLFVBQVEsWUFBVSxDQUFDLENBQUMsVUFBVTtLQUNqRCxtQkFBbUIsVUFBUSxZQUFVLENBQUMsQ0FBQyxVQUFVO0tBQ2pELG1CQUFtQixVQUFRLFlBQVUsQ0FBQyxDQUFDLFVBQVU7S0FDakQsU0FBUyxXQUFTO01BQ2hCLFVBQVUsYUFBVyxDQUFDLFVBQVU7TUFDaEMsVUFBVSxhQUFXLENBQUMsVUFBVTtNQUNoQyxVQUFVLGFBQVcsQ0FBQyxVQUFVO01BQ2hDLFdBQVcsYUFBVyxDQUFDLFVBQVU7TUFDbEMsQ0FBQyxDQUFDLFVBQVU7S0FDZCxDQUFDLENBQUMsVUFBVTtJQUNkLENBQUM7R0FDSCxDQUFDO0VBRThCLFdBQVMsRUFDdkMsTUFBTSxZQUFVLGNBQWMsWUFBWSxFQUMzQyxDQUFDO0VBRTRCLFdBQVMsRUFDckMsTUFBTSxZQUFVLGNBQWMsVUFBVSxFQUN6QyxDQUFDO0VBRWlDLFdBQVM7R0FDMUMsTUFBTSxZQUFVLGNBQWMsZUFBZTtHQUM3QyxLQUFLLFlBQVUsZ0JBQWdCO0dBQy9CLFFBQVEsWUFBVSxDQUFDLFVBQVU7R0FDOUIsQ0FBQztFQVNELENBQUM7OztDQzNIRixJQUFhLGtCQUFrQztFQUM3QztHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sYUFBYTtHQUNiLE1BQU07R0FDTixTQUFTO0lBRVA7SUFBYztJQUFrQjtJQUFtQjtJQUNuRDtJQUFZO0lBQ1o7SUFBYTtJQUNiO0lBQWE7SUFBYTtJQUUxQjtJQUFlO0lBRWY7SUFBYTtJQUFvQjtJQUNqQztJQUVBO0lBQWM7SUFBa0I7SUFFaEM7SUFBVztJQUFhO0lBQ3hCO0lBQVc7SUFDWDtJQUNBO0lBQW1CO0lBQ25CO0lBQWdCO0lBQ2hCO0lBQ0E7SUFBc0I7SUFBZTtJQUNyQztJQUVBO0lBQWdCO0lBQWlCO0lBQWU7SUFDaEQ7SUFBYztJQUNkO0lBQWU7SUFFZjtJQUFtQjtJQUFrQjtJQUVyQztJQUFnQjtJQUFnQjtJQUFpQjtJQUNqRDtJQUVBO0lBQWE7SUFBYztJQUM1QjtHQUNGO0VBQ0Q7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLGFBQWE7R0FDYixNQUFNO0dBQ04sU0FBUztJQUNQO0lBQWdCO0lBQWlCO0lBQWU7SUFDaEQ7SUFBYztJQUFnQjtJQUFpQjtJQUMvQztJQUFnQjtJQUFjO0lBQW1CO0lBQ2pEO0lBQVk7SUFBZTtJQUM1QjtHQUNGO0VBQ0Q7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLGFBQWE7R0FDYixNQUFNO0dBQ04sU0FBUztJQUNQO0lBQWtCO0lBQVc7SUFBYztJQUMzQztJQUFjO0lBQWM7SUFBa0I7SUFDOUM7SUFBa0I7SUFBZTtJQUFjO0lBQ2hEO0dBQ0Y7RUFDRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sYUFBYTtHQUNiLE1BQU07R0FDTixTQUFTO0lBQ1A7SUFBZTtJQUFlO0lBQVk7SUFDMUM7SUFBZTtJQUFlO0lBQWdCO0lBQy9DO0dBQ0Y7RUFDRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sYUFBYTtHQUNiLE1BQU07R0FDTixTQUFTO0lBQ1A7SUFBb0I7SUFBWTtJQUFZO0lBQzVDO0lBQWM7SUFBaUI7SUFBZ0I7SUFDL0M7SUFBa0I7SUFBZ0I7SUFDbkM7R0FDRjtFQUNEO0dBQ0UsSUFBSTtHQUNKLE1BQU07R0FDTixhQUFhO0dBQ2IsTUFBTTtHQUNOLFNBQVMsRUFHUjtHQUNGO0VBQ0Q7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLGFBQWE7R0FDYixNQUFNO0dBQ04sU0FBUztJQUNQO0lBQWdCO0lBQW1CO0lBQWdCO0lBQ25EO0lBQWlCO0lBQTBCO0lBQzNDO0lBQW1CO0lBQWdCO0lBQ3BDO0dBQ0Y7RUFDRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sYUFBYTtHQUNiLE1BQU07R0FDTixTQUFTO0lBQ1A7SUFBbUI7SUFBZ0I7SUFDbkM7SUFBaUI7SUFBb0I7SUFDdEM7R0FDRjtFQUNEO0dBQ0UsSUFBSTtHQUNKLE1BQU07R0FDTixhQUFhO0dBQ2IsTUFBTTtHQUNOLFNBQVM7SUFDUDtJQUFlO0lBQWU7SUFBYTtJQUMzQztJQUFrQjtJQUFXO0lBQWtCO0lBQ2hEO0dBQ0Y7RUFDRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sYUFBYTtHQUNiLE1BQU07R0FDTixTQUFTO0lBQ1A7SUFBYztJQUFZO0lBQWtCO0lBQzVDO0lBQVk7SUFBZTtJQUFjO0lBQ3pDO0lBQVk7SUFBZTtJQUM1QjtHQUNGO0VBQ0Q7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLGFBQWE7R0FDYixNQUFNO0dBQ04sU0FBUztJQUNQO0lBQWE7SUFBaUI7SUFBVztJQUN6QztJQUFpQjtJQUFjO0lBQWlCO0lBQ2pEO0dBQ0Y7RUFDRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sYUFBYTtHQUNiLE1BQU07R0FDTixTQUFTO0lBQ1A7SUFBZTtJQUFlO0lBQWE7SUFDM0M7SUFBa0I7SUFBYTtJQUNoQztHQUNGO0VBQ0Q7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLGFBQWE7R0FDYixNQUFNO0dBQ04sU0FBUztJQUNQO0lBQVc7SUFBZTtJQUFhO0lBQVc7SUFDbEQ7SUFBc0I7SUFBbUI7SUFBVztJQUNwRDtJQUFjO0lBQVc7SUFBaUI7SUFDM0M7R0FDRjtFQUNGO0NBR0QsSUFBYSxxQkFBZ0QsSUFBSSxJQUMvRCxnQkFBZ0IsU0FBUSxRQUN0QixJQUFJLFFBQVEsS0FBSSxXQUFVLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBMkIsQ0FDdEUsQ0FDRjtDQUdELFNBQWdCLHFCQUFxQixRQUFxQztBQUV4RSxNQUFJLG1CQUFtQixJQUFJLE9BQU8sQ0FDaEMsUUFBTyxtQkFBbUIsSUFBSSxPQUFPLElBQUk7RUFJM0MsTUFBTSxRQUFRLE9BQU8sTUFBTSxJQUFJO0FBQy9CLE9BQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztHQUNyQyxNQUFNLGVBQWUsTUFBTSxNQUFNLEVBQUUsQ0FBQyxLQUFLLElBQUk7QUFDN0MsT0FBSSxtQkFBbUIsSUFBSSxhQUFhLENBQ3RDLFFBQU8sbUJBQW1CLElBQUksYUFBYSxJQUFJOztBQUluRCxTQUFPOzs7O0NDOU1ULElBQWEsb0JBQXVDO0VBRWxEO0dBQ0UsSUFBSTtHQUNKLE1BQU07R0FDTixVQUFVO0dBQ1YsS0FBSztHQUNMLFFBQVE7R0FDUixTQUFTO0dBQ1Y7RUFFRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sVUFBVTtHQUNWLEtBQUs7R0FDTCxRQUFRO0dBQ1IsU0FBUztHQUNWO0VBRUQ7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLFVBQVU7R0FDVixLQUFLO0dBQ0wsUUFBUTtHQUNSLFNBQVM7R0FDVjtFQUNEO0dBQ0UsSUFBSTtHQUNKLE1BQU07R0FDTixVQUFVO0dBQ1YsS0FBSztHQUNMLFFBQVE7R0FDUixTQUFTO0dBQ1Y7RUFDRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sVUFBVTtHQUNWLEtBQUs7R0FDTCxRQUFRO0dBQ1IsU0FBUztHQUNWO0VBQ0Q7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLFVBQVU7R0FDVixLQUFLO0dBQ0wsUUFBUTtHQUNSLFNBQVM7R0FDVjtFQUNEO0dBQ0UsSUFBSTtHQUNKLE1BQU07R0FDTixVQUFVO0dBQ1YsS0FBSztHQUNMLFFBQVE7R0FDUixTQUFTO0dBQ1Y7RUFFRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sVUFBVTtHQUNWLEtBQUs7R0FDTCxRQUFRO0dBQ1IsU0FBUztHQUNWO0VBQ0Q7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLFVBQVU7R0FDVixLQUFLO0dBQ0wsUUFBUTtHQUNSLFNBQVM7R0FDVjtFQUNGO0NBU0QsSUFBTSxZQUFZO0NBQ2xCLElBQU0saUJBQWlCLE9BQVUsS0FBSztDQUd0QyxJQUFJLGtDQUErQixJQUFJLEtBQUs7Q0FDNUMsSUFBSSxxQ0FBa0MsSUFBSSxLQUFLO0NBQy9DLElBQUksbUJBQW1CO0NBR3ZCLElBQU0scUJBQXFCO0VBQ3pCLHlCQUF5QjtHQUN2QjtHQUFjO0dBQWtCO0dBQWtCO0dBQ2xEO0dBQWdCO0dBQW9CO0dBQWlCO0dBQ3JEO0dBQWU7R0FBUztHQUN4QjtHQUFjO0dBQWtCO0dBQWdCO0dBQ2hEO0dBQWU7R0FBWTtHQUMzQjtHQUFhO0dBQWlCO0dBQW1CO0dBQ2pEO0dBQWE7R0FBaUI7R0FDOUI7R0FBZTtHQUFvQjtHQUNuQztHQUFpQjtHQUNqQjtHQUFrQjtHQUNsQjtHQUFlO0dBQW1CO0dBQ2xDO0dBQVk7R0FDWjtHQUFrQjtHQUNsQjtHQUFjO0dBQ2Q7R0FBa0I7R0FDbEI7R0FBVztHQUFlO0dBQzFCO0dBQVc7R0FBYTtHQUN4QjtHQUFlO0dBQ2Y7R0FBc0I7R0FDdEI7R0FBVztHQUNYO0dBQW1CO0dBQ25CO0dBQWM7R0FDZDtHQUFlO0dBQ2Y7R0FBYztHQUNkO0dBQWM7R0FDZDtHQUFZO0dBQ1o7R0FBa0I7R0FDbEI7R0FBWTtHQUNaO0dBQVk7R0FDWjtHQUFlO0dBQ2Y7R0FBYztHQUNkO0dBQWU7R0FDZjtHQUFjO0dBQ2Q7R0FBZTtHQUNmO0dBQWE7R0FDYjtHQUFjO0dBQ2Q7R0FBZ0I7R0FDaEI7R0FBYztHQUFrQjtHQUFZO0dBQzVDO0dBQWE7R0FDYjtHQUFhO0dBQWE7R0FDMUI7R0FBZ0I7R0FDaEI7R0FBaUI7R0FDakI7R0FBYztHQUNmO0VBQ0QseUJBQXlCO0dBQ3ZCO0dBQWlCO0dBQ2pCO0dBQWlCO0dBQ2pCO0dBQWM7R0FBa0I7R0FDaEM7R0FBYztHQUNkO0dBQXFCO0dBQ3JCO0dBQXFCO0dBQ3JCO0dBQWE7R0FDYjtHQUFZO0dBQ1o7R0FBYztHQUNkO0dBQWE7R0FDYjtHQUFnQjtHQUFjO0dBQzlCO0dBQVc7R0FBZTtHQUFnQjtHQUMxQztHQUFZO0dBQWdCO0dBQVk7R0FDeEM7R0FBVztHQUFXO0dBQVc7R0FDakM7R0FBYztHQUNkO0dBQWtCO0dBQ2xCO0dBQWlCO0dBQ2xCO0VBQ0Y7Q0FFRCxTQUFnQixxQkFBMkI7QUFDekMsTUFBSSxpQkFBa0I7QUFDdEIscUJBQW1CO0FBR25CLG9CQUFrQixJQUFJLElBQUksbUJBQW1CLDRCQUE0QixFQUFFLENBQUM7QUFDNUUsdUJBQXFCLElBQUksSUFBSSxtQkFBbUIsNEJBQTRCLEVBQUUsQ0FBQztBQUUvRSxVQUFRLElBQUksZ0NBQWdDLGdCQUFnQixLQUFLLGNBQWMsbUJBQW1CLEtBQUssZ0JBQWdCO0FBR3ZILHVCQUFxQixDQUFDLE1BQUssVUFBUztBQUNsQyxxQ0FBa0IsSUFBSSxLQUFLO0FBQzNCLHdDQUFxQixJQUFJLEtBQUs7QUFFOUIsUUFBSyxNQUFNLENBQUMsVUFBVSxZQUFZLE1BQU0sU0FBUyxDQUUvQyxLQURlLGtCQUFrQixNQUFLLE1BQUssRUFBRSxPQUFPLFNBQVMsRUFDakQsYUFBYSxnQkFDdkIsU0FBUSxTQUFRLE1BQUssbUJBQW1CLElBQUksRUFBRSxDQUFDO09BRS9DLFNBQVEsU0FBUSxNQUFLLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztBQUdoRCxXQUFRLElBQUksOEJBQThCLGdCQUFnQixLQUFLLGNBQWMsbUJBQW1CLEtBQUssZ0JBQWdCO0lBQ3JILENBQUMsT0FBTSxRQUFPO0FBQ2QsV0FBUSxLQUFLLG9EQUFvRCxJQUFJO0lBQ3JFO0FBR0YsdUJBQXFCLENBQUMsTUFBSyxVQUFTO0FBQ2xDLE9BQUksZ0JBQWdCLFNBQVMsS0FBSyxNQUFNLE9BQU8sR0FBRztBQUNoRCxzQ0FBa0IsSUFBSSxLQUFLO0FBQzNCLHlDQUFxQixJQUFJLEtBQUs7QUFDOUIsU0FBSyxNQUFNLENBQUMsVUFBVSxZQUFZLE1BQU0sU0FBUyxDQUUvQyxLQURlLGtCQUFrQixNQUFLLE1BQUssRUFBRSxPQUFPLFNBQVMsRUFDakQsYUFBYSxnQkFDdkIsU0FBUSxTQUFRLE1BQUssbUJBQW1CLElBQUksRUFBRSxDQUFDO1FBRS9DLFNBQVEsU0FBUSxNQUFLLGdCQUFnQixJQUFJLEVBQUUsQ0FBQzs7SUFJbEQsQ0FBQyxZQUFZLEdBQUc7O0NBSXBCLFNBQWdCLG9CQUFvQixRQUF5QjtFQUMzRCxNQUFNLGFBQWEsT0FBTyxhQUFhLENBQUMsUUFBUSxVQUFVLEdBQUc7QUFHN0QsTUFBSSxtQkFBbUIsT0FBTyxHQUFHO0FBQy9CLE9BQUksbUJBQW1CLElBQUksV0FBVyxDQUFFLFFBQU87R0FFL0MsTUFBTSxRQUFRLFdBQVcsTUFBTSxJQUFJO0FBQ25DLFFBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztJQUNyQyxNQUFNLFNBQVMsTUFBTSxNQUFNLEVBQUUsQ0FBQyxLQUFLLElBQUk7QUFDdkMsUUFBSSxtQkFBbUIsSUFBSSxPQUFPLENBQUUsUUFBTzs7O0FBSy9DLE1BQUksZ0JBQWdCLElBQUksV0FBVyxDQUNqQyxRQUFPO0VBSVQsTUFBTSxRQUFRLFdBQVcsTUFBTSxJQUFJO0FBQ25DLE9BQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztHQUNyQyxNQUFNLFNBQVMsTUFBTSxNQUFNLEVBQUUsQ0FBQyxLQUFLLElBQUk7QUFDdkMsT0FBSSxnQkFBZ0IsSUFBSSxPQUFPLENBQzdCLFFBQU87O0FBSVgsU0FBTzs7Q0FHVCxlQUFzQixlQUFlLFFBQTRDO0FBRS9FLE1BQUk7R0FDRixNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sS0FBSyxFQUN2QyxTQUFTLEVBQ1AsVUFBVSxnQ0FDWCxFQUNGLENBQUM7QUFFRixPQUFJLENBQUMsU0FBUyxHQUNaLE9BQU0sSUFBSSxNQUFNLFFBQVEsU0FBUyxTQUFTO0dBSTVDLE1BQU0sVUFBVSxlQURILE1BQU0sU0FBUyxNQUFNLEVBQ0csT0FBTyxPQUFPO0FBRW5ELFdBQVEsSUFBSSx1QkFBdUIsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFVBQVU7QUFDNUUsVUFBTztXQUNBLE9BQU87QUFDZCxXQUFRLEtBQUssK0JBQStCLE9BQU8sS0FBSywyQkFBMkIsTUFBTTtBQUd6RixVQUFPLG9CQUFvQixPQUFPOzs7Q0FJdEMsZUFBZSxvQkFBb0IsUUFBNEM7RUFPN0UsTUFBTSxZQUxxQztHQUN6Qyx5QkFBeUI7R0FDekIseUJBQXlCO0dBQzFCLENBRTRCLE9BQU87QUFDcEMsTUFBSSxDQUFDLFVBQ0gsUUFBTyxFQUFFO0FBR1gsTUFBSTtHQUVGLE1BQU0sTUFBTSxPQUFPLFdBQVcsZUFBZSxPQUFPLFNBQVMsU0FDekQsT0FBTyxRQUFRLE9BQU8sVUFBVSxHQUNoQztHQUVKLE1BQU0sV0FBVyxNQUFNLE1BQU0sSUFBSTtBQUNqQyxPQUFJLENBQUMsU0FBUyxHQUNaLE9BQU0sSUFBSSxNQUFNLFFBQVEsU0FBUyxTQUFTO0dBSTVDLE1BQU0sVUFBVSxlQURILE1BQU0sU0FBUyxNQUFNLEVBQ0csT0FBTyxPQUFPO0FBRW5ELFdBQVEsSUFBSSw0QkFBNEIsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFVBQVU7QUFDakYsVUFBTztXQUNBLE9BQU87QUFDZCxXQUFRLE1BQU0sb0NBQW9DLE9BQU8sS0FBSyxJQUFJLE1BQU07QUFDeEUsVUFBTyxFQUFFOzs7Q0FJYixTQUFnQixlQUFlLFNBQWlCLFFBQTBCO0VBQ3hFLE1BQU0sVUFBb0IsRUFBRTtFQUM1QixNQUFNLFFBQVEsUUFBUSxNQUFNLEtBQUs7QUFFakMsT0FBSyxNQUFNLFFBQVEsT0FBTztHQUN4QixNQUFNLFVBQVUsS0FBSyxNQUFNO0FBRzNCLE9BQUksQ0FBQyxXQUFXLFFBQVEsV0FBVyxJQUFJLElBQUksUUFBUSxXQUFXLElBQUksSUFBSSxRQUFRLFdBQVcsSUFBSSxDQUMzRjtHQUdGLElBQUksU0FBd0I7QUFFNUIsT0FBSSxXQUFXLFNBQVM7SUFFdEIsTUFBTSxRQUFRLFFBQVEsTUFBTSxNQUFNO0FBQ2xDLFFBQUksTUFBTSxVQUFVLEVBQ2xCLFVBQVMsTUFBTTtjQUVSLFdBQVcsUUFFcEIsVUFBUztZQUNBLFdBQVcsT0FFcEIsS0FBSTtJQUNGLE1BQU0sU0FBUyxLQUFLLE1BQU0sUUFBUTtBQUNsQyxRQUFJLE1BQU0sUUFBUSxPQUFPLENBQ3ZCLFFBQU8sT0FBTyxRQUFPLE1BQUssT0FBTyxNQUFNLFNBQVM7YUFDdkMsT0FBTyxjQUFjLE1BQU0sUUFBUSxPQUFPLFdBQVcsQ0FFOUQsUUFBTyxPQUFPLFdBQVcsU0FBUyxRQUNoQyxJQUFJLFdBQVcsRUFBRSxDQUNsQixDQUFDLFFBQVEsTUFBZSxPQUFPLE1BQU0sU0FBUzthQUN0QyxPQUFPLFdBQVcsTUFBTSxRQUFRLE9BQU8sUUFBUSxDQUV4RCxRQUFPLE9BQU8sUUFBUSxRQUFRLE1BQWUsT0FBTyxNQUFNLFNBQVM7V0FFL0Q7QUFJVixPQUFJLFVBQVUsY0FBYyxPQUFPLENBQ2pDLFNBQVEsS0FBSyxPQUFPLGFBQWEsQ0FBQzs7QUFJdEMsU0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLFFBQVEsQ0FBQzs7Q0FHOUIsU0FBUyxjQUFjLFFBQXlCO0FBRTlDLE1BQUksV0FBVyxlQUNYLFdBQVcsMkJBQ1gsV0FBVyxtQkFDWCxXQUFXLG1CQUNYLE9BQU8sV0FBVyxNQUFNLElBQ3hCLHVCQUF1QixLQUFLLE9BQU8sQ0FDckMsUUFBTztBQUlULFNBQU8scUVBQXFFLEtBQUssT0FBTzs7Q0FHMUYsZUFBc0Isc0JBQXNEO0VBQzFFLE1BQU0sMEJBQVUsSUFBSSxLQUF1QjtFQUUzQyxNQUFNLGlCQUFpQixrQkFBa0IsUUFBTyxNQUFLLEVBQUUsUUFBUTtBQUUvRCxRQUFNLFFBQVEsSUFDWixlQUFlLElBQUksT0FBTyxXQUFXO0dBQ25DLE1BQU0sVUFBVSxNQUFNLGVBQWUsT0FBTztBQUM1QyxPQUFJLFFBQVEsU0FBUyxFQUNuQixTQUFRLElBQUksT0FBTyxJQUFJLFFBQVE7SUFFakMsQ0FDSDtFQUdELE1BQU0sUUFBMkIsRUFBRTtBQUNuQyxPQUFLLE1BQU0sQ0FBQyxVQUFVLFlBQVksUUFDaEMsT0FBTSxLQUFLO0dBQ1Q7R0FDQTtHQUNBLGFBQWEsS0FBSyxLQUFLO0dBQ3ZCLGFBQWEsUUFBUTtHQUN0QixDQUFDO0FBR0osUUFBTSxVQUFVLE1BQU07QUFFdEIsU0FBTzs7Q0FHVCxlQUFzQixzQkFBc0Q7QUFDMUUsTUFBSTtHQUVGLE1BQU0sU0FEUyxNQUFNLE9BQU8sUUFBUSxNQUFNLElBQUksVUFBVSxFQUNoQixjQUFjLEVBQUU7R0FFeEQsTUFBTSwwQkFBVSxJQUFJLEtBQXVCO0dBQzNDLE1BQU0sTUFBTSxLQUFLLEtBQUs7QUFFdEIsUUFBSyxNQUFNLFFBQVEsTUFDakIsS0FBSSxNQUFNLEtBQUssY0FBYyxlQUMzQixTQUFRLElBQUksS0FBSyxVQUFVLEtBQUssUUFBUTtBQUk1QyxVQUFPO1VBQ0Q7QUFDTiwwQkFBTyxJQUFJLEtBQUs7OztDQUlwQixlQUFlLFVBQVUsT0FBeUM7QUFDaEUsUUFBTSxPQUFPLFFBQVEsTUFBTSxJQUFJLEdBQUcsWUFBWSxPQUFPLENBQUM7Ozs7QUNyYXhELHFCQUFvQjtDQXVCcEIsSUFBTSxtQkFBbUI7RUFDdkIsUUFBUTtHQUNOLFNBQVM7R0FDVCxNQUFNO0dBQ04sT0FBTztHQUNQLFdBQVc7R0FDWjtFQUNELE1BQU07R0FDSixTQUFTO0dBQ1QsTUFBTTtHQUNOLE9BQU87R0FDUCxXQUFXO0dBQ1o7RUFDRCxZQUFZO0dBR1YsU0FBUztHQUNULE1BQU07R0FDTixPQUFPO0dBQ1AsV0FBVztHQUNaO0VBQ0QsT0FBTztHQUNMLFNBQVM7R0FDVCxNQUFNO0dBQ04sT0FBTztHQUNQLFdBQVc7R0FDWjtFQUNGO0NBRUQsU0FBZ0IsbUJBQW1CLE1BQWMsT0FBTyxTQUFTLE1BQXFCO0FBQ3BGLE1BQUk7R0FDRixNQUFNLFNBQVMsSUFBSSxJQUFJLEtBQUssT0FBTyxTQUFTLEtBQUs7R0FDakQsTUFBTSxPQUFPLE9BQU87R0FDcEIsTUFBTSxPQUFPLE9BQU87QUFHcEIsT0FBSSxLQUFLLFNBQVMsYUFBYSxLQUFLLEtBQUssU0FBUyxVQUFVLElBQUksS0FBSyxTQUFTLFNBQVMsRUFBRyxRQUFPO0FBQ2pHLE9BQUksS0FBSyxTQUFTLFdBQVcsSUFBSSxLQUFLLFNBQVMsVUFBVSxDQUFFLFFBQU87QUFDbEUsT0FBSSxLQUFLLFNBQVMsaUJBQWlCLENBQUUsUUFBTztBQUM1QyxPQUFJLEtBQUssU0FBUyxZQUFZLElBQUksS0FBSyxTQUFTLFVBQVUsQ0FBRSxRQUFPO0FBQ25FLE9BQUksS0FBSyxTQUFTLG1CQUFtQixDQUFFLFFBQU87QUFDOUMsT0FBSSxLQUFLLFNBQVMsYUFBYSxDQUFFLFFBQU87QUFDeEMsVUFBTztVQUNEO0FBQ04sVUFBTzs7O0NBNkNYLFNBQVMseUJBQXlCLEtBQXFCO0FBQ3JELE1BQUk7R0FDRixNQUFNLFNBQVMsSUFBSSxJQUFJLEtBQUssT0FBTyxTQUFTLEtBQUs7QUFNakQsT0FBSSxPQUFPLFNBQVMsU0FBUyxpQkFBaUIsSUFBSSxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUU7SUFDbEYsTUFBTSxZQUNKLE9BQU8sYUFBYSxJQUFJLE9BQU8sSUFDL0IsT0FBTyxhQUFhLElBQUksSUFBSSxJQUM1QixPQUFPLGFBQWEsSUFBSSxTQUFTO0FBRW5DLFFBQUksVUFDRixLQUFJO0FBQ0YsWUFBTyxtQkFBbUIsVUFBVTtZQUM5QjtBQUNOLFlBQU87OztBQU1iLE9BQUksT0FBTyxhQUFhLFFBQVE7SUFDOUIsTUFBTSxlQUFlLE9BQU8sYUFBYSxJQUFJLElBQUksSUFBSSxPQUFPLGFBQWEsSUFBSSxNQUFNO0FBQ25GLFFBQUksYUFDRixLQUFJO0FBQ0YsWUFBTyxtQkFBbUIsYUFBYTtZQUNqQztBQUNOLFlBQU87OztBQUtiLFVBQU8sT0FBTyxVQUFVO1VBQ2xCO0FBQ04sVUFBTzs7O0NBSVgsU0FBZ0IscUJBQXFCLEtBQTRCO0FBQy9ELE1BQUk7R0FDRixNQUFNLGNBQWMseUJBQXlCLElBQUk7QUFFakQsVUFEZSxJQUFJLElBQUksYUFBYSxPQUFPLFNBQVMsS0FBSyxDQUMzQyxTQUFTLFFBQVEsVUFBVSxHQUFHO1VBQ3RDO0FBQ04sVUFBTzs7O0NBS1gsU0FBZ0IsdUJBQ2QsUUFDQSxVQUM4RDtBQUU5RCxNQUFJLFNBQVMsZ0JBQWdCLE1BQUssWUFDaEMsV0FBVyxXQUFXLE9BQU8sU0FBUyxNQUFNLFFBQVEsQ0FDckQsQ0FDQyxRQUFPO0dBQUUsUUFBUTtHQUFPLFFBQVE7R0FBYTtFQUkvQyxNQUFNLFdBQVcscUJBQXFCLE9BQU87QUFDN0MsTUFBSSxZQUFZLFNBQVMsa0JBQWtCLFNBQVMsU0FBUyxDQUMzRCxRQUFPO0dBQUUsUUFBUTtHQUFNO0dBQVUsUUFBUTtHQUFZO0FBSXZELE1BQUksU0FBUyxnQkFBZ0IsTUFBSyxZQUNoQyxXQUFXLFdBQVcsT0FBTyxTQUFTLE1BQU0sUUFBUSxDQUNyRCxDQUNDLFFBQU87R0FBRSxRQUFRO0dBQU0sUUFBUTtHQUFVO0FBSTNDLE1BQUksU0FBUztPQUNQLG9CQUFvQixPQUFPLENBQzdCLFFBQU87SUFBRSxRQUFRO0lBQU0sUUFBUTtJQUFzQjs7QUFJekQsU0FBTztHQUFFLFFBQVE7R0FBTyxRQUFRO0dBQVE7O0NBeUIxQyxTQUFnQixvQkFBb0IsVUFBcUM7RUFDdkUsTUFBTSxPQUFPLGdCQUFnQixNQUFLLE1BQUssRUFBRSxPQUFPLFNBQVM7RUFDekQsTUFBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLFFBQU0sWUFBWTtBQUNsQixRQUFNLE1BQU0sVUFBVTs7Ozs7Ozs7Ozs7OztBQWF0QixRQUFNLGNBQWMsR0FBRyxNQUFNLFFBQVEsS0FBSyxHQUFHLE1BQU0sUUFBUTtBQUMzRCxRQUFNLGFBQWEsc0JBQXNCLFNBQVM7QUFDbEQsU0FBTzs7Q0FHVCxTQUFnQixvQkFDZCxVQUNBLGdCQUN5RTtBQUN6RSxNQUFJLENBQUMsU0FBUyxTQUFTO0FBQ3JCLFdBQVEsSUFBSSxvQ0FBb0M7QUFDaEQsVUFBTztJQUFFLE9BQU87SUFBRyxVQUFVO0lBQUcsWUFBWSxFQUFFO0lBQUU7O0VBR2xELE1BQU0sU0FBUyxrQkFBa0Isb0JBQW9CO0FBQ3JELE1BQUksQ0FBQyxRQUFRO0FBQ1gsV0FBUSxJQUFJLDJDQUEyQztBQUN2RCxVQUFPO0lBQUUsT0FBTztJQUFHLFVBQVU7SUFBRyxZQUFZLEVBQUU7SUFBRTs7RUFHbEQsTUFBTSxZQUFZLGlCQUFpQjtBQUNuQyxNQUFJLENBQUMsV0FBVztBQUNkLFdBQVEsSUFBSSwyQ0FBMkMsT0FBTztBQUM5RCxVQUFPO0lBQUUsT0FBTztJQUFHLFVBQVU7SUFBRyxZQUFZLEVBQUU7SUFBRTs7RUFHbEQsTUFBTSxVQUFVLFNBQVMsaUJBQWlCLFVBQVUsUUFBUTtFQUU1RCxJQUFJLFFBQVE7RUFDWixJQUFJLFdBQVc7RUFDZixNQUFNLGFBQXFDLEVBQUU7QUFFN0MsVUFBUSxTQUFRLFdBQVU7R0FDeEIsTUFBTSxPQUFPLE9BQU8sY0FBYyxVQUFVLEtBQUs7QUFDakQsT0FBSSxDQUFDLEtBQ0g7R0FHRixNQUFNLE9BQU8sS0FBSztBQUNsQixPQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsaUJBQWlCLElBQUksS0FBSyxTQUFTLGNBQWMsQ0FDMUU7R0FHRixNQUFNLFNBQVMscUJBQXFCLEtBQUs7QUFDekMsT0FBSSxDQUFDLE9BQ0g7QUFHRjtHQUNBLE1BQU0sZUFBZSx1QkFBdUIsUUFBUSxTQUFTO0FBRTdELE9BQUksYUFBYSxRQUFRO0FBQ3ZCO0FBRUEsUUFBSSxhQUFhLFNBQ2YsWUFBVyxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsS0FBSztBQUdqRixRQUFJLFNBQVMsYUFBYTtBQUN2QixZQUF1QixNQUFNLFVBQVU7QUFDeEMsWUFBTyxhQUFhLHlCQUF5QixPQUFPO0FBQ3BELFlBQU8sYUFBYSx1QkFBdUIsYUFBYSxPQUFPO0FBQy9ELFNBQUksYUFBYSxTQUNmLFFBQU8sYUFBYSx5QkFBeUIsYUFBYSxTQUFTO0FBRXJFLFlBQU8sY0FBYyxJQUFJLFlBQVksMEJBQTBCLEVBQzdELFFBQVE7TUFBRTtNQUFRLFFBQVEsYUFBYTtNQUFRLFVBQVUsYUFBYTtNQUFVLEVBQ2pGLENBQUMsQ0FBQztXQUNFO0tBQ0wsTUFBTSxRQUFRLE9BQU8sY0FBYyxVQUFVLE1BQU07QUFDbkQsU0FBSSxTQUFTLENBQUMsTUFBTSxjQUFjLDBCQUEwQixDQUMxRCxPQUFNLFlBQVksb0JBQW9CLGFBQWEsWUFBWSxTQUFTLENBQUM7QUFFM0UsWUFBTyxhQUFhLHdCQUF3QixPQUFPOzs7SUFHdkQ7QUFFSixTQUFPO0dBQUU7R0FBTztHQUFVO0dBQVk7O0NBNEV0QyxTQUFnQix3QkFBOEI7QUFDM0IsV0FBUyxpQkFBaUIsa0RBQWtELENBQ3BGLFNBQVEsT0FBTTtBQUNwQixNQUFtQixNQUFNLFVBQVU7QUFDcEMsTUFBRyxnQkFBZ0Isd0JBQXdCO0FBQzNDLE1BQUcsZ0JBQWdCLHVCQUF1QjtBQUMxQyxNQUFHLGdCQUFnQixzQkFBc0I7QUFDekMsTUFBRyxnQkFBZ0Isd0JBQXdCO0lBQzNDO0FBRWEsV0FBUyxpQkFBaUIsMEJBQTBCLENBQzVELFNBQVEsVUFBUyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7OztDQ2haekMsSUFBTSxhQUFhO0NBQ25CLElBQU0sWUFBWTtDQVdsQixJQUFJLGFBQTZCLEVBQUU7Q0FDbkMsSUFBSSxnQkFBZ0I7Q0FDcEIsSUFBSSxVQUE4QjtDQUNsQyxJQUFJLGFBQWE7Q0FFakIsU0FBUyxlQUFxQjtBQUM1QixNQUFJLFNBQVMsZUFBZSxVQUFVLENBQUU7RUFFeEMsTUFBTSxTQUFTLFNBQVMsY0FBYyxRQUFRO0FBQzlDLFNBQU8sS0FBSztBQUNaLFNBQU8sY0FBYztPQUNoQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBOaEIsV0FBUyxLQUFLLFlBQVksT0FBTzs7Q0FHbkMsU0FBUyxnQkFBNkI7RUFDcEMsTUFBTSxZQUFZLFNBQVMsY0FBYyxNQUFNO0FBQy9DLFlBQVUsS0FBSztBQUVmLFlBQVUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CdEIsTUFBTSxTQUFTLFVBQVUsY0FBYywyQkFBMkI7RUFDbEUsTUFBTSxRQUFRLFVBQVUsY0FBYywwQkFBMEI7RUFDaEUsTUFBTSxPQUFPLFVBQVUsaUJBQWlCLHdCQUF3QjtBQUVoRSxTQUFPLGlCQUFpQixlQUFlO0FBQ3JDLGdCQUFhLENBQUM7QUFDZCxTQUFNLFVBQVUsT0FBTyxXQUFXLFdBQVc7QUFDN0MsT0FBSSxXQUNGLFlBQVcsTUFBTTtJQUVuQjtBQUVGLE9BQUssU0FBUSxRQUFPO0FBQ2xCLE9BQUksaUJBQWlCLFVBQVUsTUFBTTtBQUNuQyxNQUFFLGlCQUFpQjtBQUNuQixTQUFLLFNBQVEsTUFBSyxFQUFFLFVBQVUsT0FBTyxTQUFTLENBQUM7QUFDL0MsUUFBSSxVQUFVLElBQUksU0FBUztBQUMzQixlQUFZLElBQW9CLFFBQVEsT0FBTyxNQUFNO0tBQ3JEO0lBQ0Y7QUFFRixTQUFPOztDQUdULFNBQVMsY0FBb0I7QUFDM0IsTUFBSSxDQUFDLFFBQVM7RUFFZCxNQUFNLFFBQVEsV0FBVztFQUN6QixNQUFNLFFBQVEsUUFBUSxjQUFjLDBCQUEwQjtFQUM5RCxNQUFNLFlBQVksUUFBUSxjQUFjLDBCQUEwQjtBQUVsRSxRQUFNLGNBQWMsTUFBTSxVQUFVO0FBQ3BDLFFBQU0sVUFBVSxPQUFPLFNBQVMsVUFBVSxFQUFFO0FBQzVDLFlBQVUsY0FBYyxHQUFHLE1BQU0sT0FBTyxVQUFVLElBQUksTUFBTSxHQUFHOztDQUdqRSxTQUFTLFdBQVcsUUFBc0I7QUFDeEMsTUFBSSxDQUFDLFFBQVM7RUFFZCxNQUFNLE9BQU8sUUFBUSxjQUFjLHlCQUF5QjtFQUM1RCxNQUFNLFdBQVcsV0FBVyxRQUN4QixhQUNBLFdBQVcsUUFBTyxNQUFLLEVBQUUsU0FBUyxPQUFPO0FBRTdDLE1BQUksU0FBUyxXQUFXLEdBQUc7QUFDekIsUUFBSyxZQUFZOzs7Ozs7QUFNakI7O0FBR0YsT0FBSyxZQUFZLFNBQVMsS0FBSSxTQUFRO0dBQ3BDLE1BQU0sVUFBVSxXQUFXLEtBQUssVUFBVTtHQUMxQyxNQUFNLFlBQVk7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNULENBQUMsS0FBSztBQUVQLE9BQUksS0FBSyxTQUFTLGlCQUFpQixLQUFLLE1BQ3RDLFFBQU87NENBQytCLEtBQUssS0FBSztnREFDTixVQUFVO2lEQUNULFdBQVcsS0FBSyxPQUFPLENBQUM7O2dEQUV6QixXQUFXLEtBQUssTUFBTSxDQUFDOytDQUN4QixRQUFROzs7QUFLbkQsVUFBTzswQ0FDK0IsS0FBSyxLQUFLOzhDQUNOLFVBQVU7OENBQ1YsV0FBVyxLQUFLLE9BQU8sQ0FBQztVQUM1RCxLQUFLLFNBQVMsc0NBQXNDLEtBQUssT0FBTyxVQUFVLEdBQUc7NkNBQzFDLFFBQVE7OztJQUdqRCxDQUFDLEtBQUssR0FBRzs7Q0FHYixTQUFTLFdBQVcsTUFBc0I7RUFDeEMsTUFBTSxNQUFNLFNBQVMsY0FBYyxNQUFNO0FBQ3pDLE1BQUksY0FBYztBQUNsQixTQUFPLElBQUk7O0NBR2IsU0FBUyxXQUFXLFdBQTJCO0VBQzdDLE1BQU0sVUFBVSxLQUFLLE9BQU8sS0FBSyxLQUFLLEdBQUcsYUFBYSxJQUFLO0FBQzNELE1BQUksVUFBVSxHQUFJLFFBQU87RUFDekIsTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLEdBQUc7QUFDeEMsTUFBSSxVQUFVLEdBQUksUUFBTyxHQUFHLFFBQVE7QUFFcEMsU0FBTyxHQURPLEtBQUssTUFBTSxVQUFVLEdBQUcsQ0FDdEI7O0NBR2xCLFNBQWdCLFlBQVksTUFBb0Q7QUFDOUUsYUFBVyxRQUFRO0dBQ2pCLEdBQUc7R0FDSCxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUU7R0FDeEQsV0FBVyxLQUFLLEtBQUs7R0FDdEIsQ0FBQztBQUVGLE1BQUksV0FBVyxTQUFTLGNBQ3RCLGNBQWEsV0FBVyxNQUFNLEdBQUcsY0FBYztBQUdqRCxlQUFhO0FBRWIsTUFBSSxZQUFZO0dBQ2QsTUFBTSxZQUFZLFNBQVMsY0FBYywrQkFBK0I7QUFDeEUsY0FBVyxXQUFXLFFBQVEsT0FBTyxNQUFNOzs7Q0FJL0MsU0FBZ0IsZUFBZSxRQUFnQixPQUFxQjtBQUNsRSxjQUFZO0dBQ1YsTUFBTTtHQUNOO0dBQ0E7R0FDRCxDQUFDOztDQUdKLFNBQWdCLFdBQVcsUUFBZ0IsUUFBc0I7QUFDL0QsY0FBWTtHQUNWLE1BQU07R0FDTixRQUFRO0dBQ1I7R0FDRCxDQUFDOztDQUdKLFNBQWdCLFNBQVMsU0FBaUIsUUFBb0M7QUFDNUUsY0FBWTtHQUNWLE1BQU07R0FDTixRQUFRLFdBQVc7R0FDbkIsT0FBTyxXQUFXLFlBQVksWUFBWTtHQUMzQyxDQUFDOztDQUdKLFNBQWdCLFVBQVUsUUFBc0I7QUFDOUMsY0FBWTtHQUNWLE1BQU07R0FDTixRQUFRO0dBQ1IsUUFBUTtHQUNULENBQUM7O0NBR0osZUFBc0Isc0JBQXFDO0FBQ3pELE1BQUksU0FBUyxlQUFlLFdBQVcsRUFBRTtBQUN2QyxXQUFRLElBQUksd0NBQXdDO0FBQ3BEOztBQUdGLFVBQVEsSUFBSSwrQ0FBK0M7QUFFM0QsTUFBSTtHQUNGLE1BQU0sV0FBVyxNQUFNLGlCQUErQixFQUNwRCxNQUFNLGNBQWMsY0FDckIsQ0FBQztBQUVGLFdBQVEsSUFBSSx3Q0FBd0MsU0FBUztHQUc3RCxNQUFNLGFBQWEsVUFBVSxZQUMzQixTQUFTLGdCQUFnQixXQUN6QixTQUFTLGFBQWEsV0FDdEIsU0FBUyxZQUFZO0FBR3ZCLFdBQVEsSUFBSSxpQ0FBaUMsWUFBWSxZQUFZLFVBQVUsU0FBUyxtQkFBbUIsVUFBVSxnQkFBZ0IsU0FBUyxnQkFBZ0IsVUFBVSxhQUFhLFNBQVMsZUFBZSxVQUFVLFlBQVksUUFBUTtBQUUzTyxPQUFJLENBQUMsWUFBWTtBQUNmLFlBQVEsSUFBSSw2REFBNkQ7QUFDekU7O0FBR0YsaUJBQWM7QUFDZCxhQUFVLGVBQWU7QUFDekIsWUFBUyxLQUFLLFlBQVksUUFBUTtBQUNsQyxXQUFRLElBQUksMENBQTBDO0FBR3RELFVBQU8saUJBQWlCLHlCQUF5QixNQUFtQjtBQUNsRSxtQkFBZSxFQUFFLE9BQU8sUUFBUSxFQUFFLE9BQU8sTUFBTTtNQUM3QjtBQUVwQixVQUFPLGlCQUFpQixxQkFBcUIsTUFBbUI7QUFDOUQsZUFBVyxFQUFFLE9BQU8sUUFBUSxFQUFFLE9BQU8sT0FBTztNQUMxQjtBQUVwQixVQUFPLGlCQUFpQiwyQkFBMkIsTUFBbUI7QUFDcEUsYUFBUyxFQUFFLE9BQU8sU0FBUyxFQUFFLE9BQU8sT0FBTztNQUN6QjtBQUVwQixVQUFPLGlCQUFpQiw0QkFBNEIsTUFBbUI7QUFDckUsY0FBVSxFQUFFLE9BQU8sT0FBTztNQUNSO1dBRWIsT0FBTztBQUNkLFdBQVEsTUFBTSwyQ0FBMkMsTUFBTTs7Ozs7Ozs7Ozs7Q0NuZG5FLElBQUksV0FBb0M7Q0FDeEMsSUFBSSxnQkFBc0Q7Q0FFMUQsU0FBUyxpQkFBdUI7RUFDOUIsTUFBTSxXQUFXLG9CQUFvQjtBQUNyQyxNQUFJLENBQUMsVUFBVTtBQUNiLFdBQVEsSUFBSSx1Q0FBdUM7QUFDbkQ7O0VBR0YsTUFBTSxTQUFTLG9CQUFvQjtBQUNuQyxVQUFRLElBQUksMkNBQTJDLFFBQVEsa0JBQW1CLFNBQVMsWUFBb0IsY0FBYztBQVU3SCxNQUFJLFVBQVUsWUFBWSxxQkFBcUI7QUFDN0MsV0FBUSxJQUFJLG9EQUFvRDtJQUM5RCxhQUFhLFNBQVMsV0FBVztJQUNqQyx1QkFBdUIsU0FBUyxXQUFXO0lBQzNDLG1CQUFtQixTQUFTLFdBQVcsbUJBQW1CLFVBQVU7SUFDckUsQ0FBQztHQUVGLE1BQU0sU0FBUyxvQkFBb0I7SUFDakMsU0FBUztJQUNULGFBQWEsU0FBUyxXQUFXLHNCQUFzQjtJQUN2RCxtQkFBbUIsU0FBUyxXQUFXLHFCQUFxQjtJQUM1RCxtQkFBbUIsU0FBUyxXQUFXLHFCQUFxQixFQUFFO0lBQzlELGlCQUFpQixTQUFTLFdBQVcsbUJBQW1CLEVBQUU7SUFDMUQsaUJBQWlCLFNBQVMsV0FBVyxtQkFBbUIsRUFBRTtJQUMxRCx1QkFBdUIsU0FBUyxXQUFXLHlCQUF5QjtJQUNyRSxDQUFDO0FBRUYsT0FBSSxPQUFPLFdBQVcsRUFDcEIsU0FBUSxJQUFJLDJCQUEyQixPQUFPLFNBQVMsR0FBRyxPQUFPLE1BQU0sV0FBVyxPQUFPLFdBQVc7WUFDM0YsT0FBTyxRQUFRLEVBQ3hCLFNBQVEsSUFBSSx3QkFBd0IsT0FBTyxNQUFNLHFCQUFxQixPQUFPLFdBQVc7T0FFeEYsU0FBUSxJQUFJLHlEQUF5RDtRQUd2RSxTQUFRLElBQUksdURBQXVEOztDQUl2RSxTQUFTLG1CQUF5QjtBQUNoQyxNQUFJLGNBQWUsY0FBYSxjQUFjO0FBQzlDLGtCQUFnQixXQUFXLGdCQUFnQixJQUFJOztDQUdqRCxTQUFTLGdCQUFzQjtBQUM3QixNQUFJLFNBQVU7QUFFZCxhQUFXLElBQUksa0JBQWtCLGNBQWM7QUFDN0MsUUFBSyxNQUFNLFlBQVksVUFDckIsS0FBSSxTQUFTLFNBQVM7U0FDZixNQUFNLFFBQVEsTUFBTSxLQUFLLFNBQVMsV0FBVyxDQUNoRCxLQUFJLGdCQUFnQjtTQU1oQixLQUFLLGNBQWMseUhBQXlILElBQzVJLEtBQUssT0FBTyxrQkFDWixLQUFLLFVBQVUsU0FBUyxVQUFVLElBQ2xDLEtBQUssUUFBUSxrQ0FBa0MsRUFFekI7QUFDdEIsY0FBUSxJQUFJLG1EQUFtRDtBQUMvRCx3QkFBa0I7QUFDbEI7Ozs7SUFNVjtBQUVGLFdBQVMsUUFBUSxTQUFTLE1BQU07R0FDOUIsV0FBVztHQUNYLFNBQVM7R0FDVixDQUFDOztDQUdKLElBQUksa0JBQXVDO0NBQzNDLFNBQVMscUJBQTBDO0FBQ2pELFNBQU87O0NBR1QsZUFBZSxPQUFzQjtFQUNuQyxNQUFNLFNBQVMsb0JBQW9CO0FBQ25DLE1BQUksQ0FBQyxRQUFRO0FBQ1gsV0FBUSxJQUFJLGdEQUFnRCxPQUFPLFNBQVMsU0FBUztBQUNyRjs7QUFHRixVQUFRLElBQUksMkJBQTJCLE9BQU8sbUJBQW1CO0FBR2pFLE1BQUk7R0FDRixNQUFNLFNBQVMsTUFBTSxPQUFPLFFBQVEsTUFBTSxJQUFJLG1CQUFtQjtHQUNqRSxNQUFNLFdBQVcsT0FBTztBQUN4QixXQUFRLElBQUksNkNBQTZDLFVBQVUsWUFBWSxlQUFlLFdBQVcsT0FBTztXQVd6RyxHQUFHO0FBQ1YsV0FBUSxJQUFJLG1EQUFtRCxFQUFFOztBQUduRSx1QkFBcUI7QUFFckIsTUFBSTtHQUNGLE1BQU0sZUFBZSxNQUFNLGlCQUErQixFQUN4RCxNQUFNLGNBQWMsY0FDckIsQ0FBQztBQUVGLE9BQUksQ0FBQyxjQUFjO0FBQ2pCLFlBQVEsTUFBTSx3Q0FBd0M7QUFDdEQ7O0FBR0oscUJBQWtCO0FBR2xCLGNBQVcsZ0JBQWdCLElBQUk7QUFHL0IsT0FBSSxvQkFBb0IsS0FBSyxjQUFjO0FBQ3pDLGVBQVcsZ0JBQWdCLElBQUk7QUFDL0IsZUFBVyxnQkFBZ0IsS0FBSztBQUNoQyxlQUFXLGdCQUFnQixJQUFLOztBQUdsQyxrQkFBZTtHQUdiLElBQUksVUFBVSxTQUFTO0FBQ0gsT0FBSSx1QkFBdUI7QUFDN0MsUUFBSSxTQUFTLFNBQVMsU0FBUztBQUM3QixhQUFRLElBQUksK0NBQStDO0FBQzNELGVBQVUsU0FBUztBQUNuQixnQkFBVyxnQkFBZ0IsSUFBSTs7S0FFakMsQ0FDVSxRQUFRLFNBQVMsTUFBTTtJQUFFLFdBQVc7SUFBTSxTQUFTO0lBQU0sQ0FBQztBQUd0RSxVQUFPLGlCQUFpQiwrQkFBK0IsTUFBbUI7QUFDeEUsc0JBQWtCO0tBQUUsR0FBRztLQUFpQixZQUFZLEVBQUU7S0FBUTtBQUM5RCwyQkFBdUI7QUFDdkIsb0JBQWdCO01BQ0U7V0FFYixPQUFPO0FBQ2QsV0FBUSxNQUFNLHdDQUF3QyxNQUFNOzs7Q0FJaEUsSUFBQSx3QkFBZSxvQkFBb0I7RUFDakMsU0FBUztHQUNQO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0Q7RUFDRCxPQUFPO0VBQ1AsTUFBTTtFQUNQLENBQUMifQ==