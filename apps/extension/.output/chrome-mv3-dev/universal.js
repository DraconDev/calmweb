var universal = (function() {
  "use strict";
  function defineContentScript(definition2) {
    return definition2;
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var browserPolyfill$1 = { exports: {} };
  var browserPolyfill = browserPolyfill$1.exports;
  var hasRequiredBrowserPolyfill;
  function requireBrowserPolyfill() {
    if (hasRequiredBrowserPolyfill) return browserPolyfill$1.exports;
    hasRequiredBrowserPolyfill = 1;
    (function(module, exports$1) {
      (function(global, factory) {
        {
          factory(module);
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : browserPolyfill, function(module2) {
        if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
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
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
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
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
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
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
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
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
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
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
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
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
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
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
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
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result2;
                try {
                  result2 = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result2 = Promise.reject(err);
                }
                const isResultThenable = result2 !== true && isThenable(result2);
                if (result2 !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result2);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
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
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
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
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    })(browserPolyfill$1);
    return browserPolyfill$1.exports;
  }
  var browserPolyfillExports = requireBrowserPolyfill();
  const browser = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports);
  globalThis.browser?.runtime?.id ? globalThis.browser : globalThis.chrome;
  async function sendToBackground(message) {
    return browser.runtime.sendMessage(message);
  }
  var util;
  (function(util2) {
    util2.assertEqual = (_) => {
    };
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
      const filtered = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e) {
        return obj[e];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  const ZodParsedType = util.arrayToEnum([
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
  const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  const ZodIssueCode = util.arrayToEnum([
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
  class ZodError extends Error {
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
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error) => {
        for (const issue of error.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i = 0;
            while (i < issue.path.length) {
              const el = issue.path[i];
              const terminal = i === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    static assert(value) {
      if (!(value instanceof ZodError)) {
        throw new Error(`Not a ZodError: ${value}`);
      }
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
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          const firstEl = sub.path[0];
          fieldErrors[firstEl] = fieldErrors[firstEl] || [];
          fieldErrors[firstEl].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
  };
  const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
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
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "bigint")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
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
  let overrideErrorMap = errorMap;
  function getErrorMap() {
    return overrideErrorMap;
  }
  const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    if (issueData.message !== void 0) {
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message
      };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m) => !!m).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
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
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        overrideMap,
        // then global override map
        overrideMap === errorMap ? void 0 : errorMap
        // then global default map
      ].filter((x) => !!x)
    });
    ctx.common.issues.push(issue);
  }
  class ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s of results) {
        if (s.status === "aborted")
          return INVALID;
        if (s.status === "dirty")
          status.dirty();
        arrayValue.push(s.value);
      }
      return { status: status.value, value: arrayValue };
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
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  }
  const INVALID = Object.freeze({
    status: "aborted"
  });
  const DIRTY = (value) => ({ status: "dirty", value });
  const OK = (value) => ({ status: "valid", value });
  const isAborted = (x) => x.status === "aborted";
  const isDirty = (x) => x.status === "dirty";
  const isValid = (x) => x.status === "valid";
  const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
  })(errorUtil || (errorUtil = {}));
  class ParseInputLazyPath {
    constructor(parent, value, path, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (Array.isArray(this._key)) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  }
  const handleResult = (ctx, result2) => {
    if (isValid(result2)) {
      return { success: true, data: result2.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error = new ZodError(ctx.common.issues);
          this._error = error;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      const { message } = params;
      if (iss.code === "invalid_enum_value") {
        return { message: message ?? ctx.defaultError };
      }
      if (typeof ctx.data === "undefined") {
        return { message: message ?? required_error ?? ctx.defaultError };
      }
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      return { message: message ?? invalid_type_error ?? ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  class ZodType {
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
      const result2 = this._parse(input);
      if (isAsync(result2)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result2;
    }
    _parseAsync(input) {
      const result2 = this._parse(input);
      return Promise.resolve(result2);
    }
    parse(data, params) {
      const result2 = this.safeParse(data, params);
      if (result2.success)
        return result2.data;
      throw result2.error;
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
      const result2 = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result2);
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
      if (!this["~standard"].async) {
        try {
          const result2 = this._parseSync({ data, path: [], parent: ctx });
          return isValid(result2) ? {
            value: result2.value
          } : {
            issues: ctx.common.issues
          };
        } catch (err) {
          if (err?.message?.toLowerCase()?.includes("encountered")) {
            this["~standard"].async = true;
          }
          ctx.common = {
            issues: [],
            async: true
          };
        }
      }
      return this._parseAsync({ data, path: [], parent: ctx }).then((result2) => isValid(result2) ? {
        value: result2.value
      } : {
        issues: ctx.common.issues
      });
    }
    async parseAsync(data, params) {
      const result2 = await this.safeParseAsync(data, params);
      if (result2.success)
        return result2.data;
      throw result2.error;
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
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result2 = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result2);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result2 = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result2 instanceof Promise) {
          return result2.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result2) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    constructor(def) {
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
        effect: { type: "transform", transform }
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
  }
  const cuidRegex = /^c[^\s-]{8,}$/i;
  const cuid2Regex = /^[0-9a-z]+$/;
  const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  const nanoidRegex = /^[a-z0-9_-]{21}$/i;
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  let emojiRegex;
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  const dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
      secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
      secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
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
    if (args.offset)
      opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
      return false;
    try {
      const [header] = jwt.split(".");
      if (!header)
        return false;
      const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base64));
      if (typeof decoded !== "object" || decoded === null)
        return false;
      if ("typ" in decoded && decoded?.typ !== "JWT")
        return false;
      if (!decoded.alg)
        return false;
      if (alg && decoded.alg !== alg)
        return false;
      return true;
    } catch {
      return false;
    }
  }
  function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
      return true;
    }
    return false;
  }
  class ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
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
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
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
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
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
        } else if (check.kind === "url") {
          try {
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
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
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
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "date") {
          const regex = dateRegex;
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "date",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "time") {
          const regex = timeRegex(check);
          if (!regex.test(input.data)) {
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
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
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
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
      return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
      return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
      return this._addCheck({
        kind: "base64url",
        ...errorUtil.errToObj(message)
      });
    }
    jwt(options) {
      return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
      return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        offset: options?.offset ?? false,
        local: options?.local ?? false,
        ...errorUtil.errToObj(options?.message)
      });
    }
    date(message) {
      return this._addCheck({ kind: "date", message });
    }
    time(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: options
        });
      }
      return this._addCheck({
        kind: "time",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        ...errorUtil.errToObj(options?.message)
      });
    }
    duration(message) {
      return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
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
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxLength() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  }
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
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
  }
  class ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
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
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
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
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
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
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
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
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
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
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max = null;
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        } else if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return Number.isFinite(min) && Number.isFinite(max);
    }
  }
  ZodNumber.create = (params) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  class ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        try {
          input.data = BigInt(input.data);
        } catch {
          return this._getInvalidInput(input);
        }
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        return this._getInvalidInput(input);
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
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
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
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
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
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
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
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
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  }
  ZodBigInt.create = (params) => {
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
  class ZodBoolean extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
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
  }
  ZodBoolean.create = (params) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  class ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (Number.isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
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
        } else {
          util.assertNever(check);
        }
      }
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
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min != null ? new Date(min) : null;
    }
    get maxDate() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max != null ? new Date(max) : null;
    }
  }
  ZodDate.create = (params) => {
    return new ZodDate({
      checks: [],
      coerce: params?.coerce || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params)
    });
  };
  class ZodSymbol extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
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
  }
  ZodSymbol.create = (params) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params)
    });
  };
  class ZodUndefined extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
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
  }
  ZodUndefined.create = (params) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params)
    });
  };
  class ZodNull extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
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
  }
  ZodNull.create = (params) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params)
    });
  };
  class ZodAny extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodAny.create = (params) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params)
    });
  };
  class ZodUnknown extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodUnknown.create = (params) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params)
    });
  };
  class ZodNever extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  }
  ZodNever.create = (params) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params)
    });
  };
  class ZodVoid extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
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
  }
  ZodVoid.create = (params) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params)
    });
  };
  class ZodArray extends ZodType {
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
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result3) => {
          return ParseStatus.mergeArray(status, result3);
        });
      }
      const result2 = [...ctx.data].map((item, i) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      });
      return ParseStatus.mergeArray(status, result2);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
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
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  class ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      this._cached = { shape, keys };
      return this._cached;
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") ;
        else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
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
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: errorUtil.errToObj(message).message ?? defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
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
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
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
      const merged = new ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
      return new ZodObject({
        ...this._def,
        catchall: index
      });
    }
    pick(mask) {
      const shape = {};
      for (const key of util.objectKeys(mask)) {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      }
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
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  }
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
  class ZodUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result2 of results) {
          if (result2.result.status === "valid") {
            return result2.result;
          }
        }
        for (const result2 of results) {
          if (result2.result.status === "dirty") {
            ctx.common.issues.push(...result2.ctx.common.issues);
            return result2.result;
          }
        }
        const unionErrors = results.map((result2) => new ZodError(result2.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
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
      } else {
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
          const result2 = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result2.status === "valid") {
            return result2;
          } else if (result2.status === "dirty" && !dirty) {
            dirty = { result: result2, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
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
  }
  ZodUnion.create = (types, params) => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params)
    });
  };
  const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return util.objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else if (type instanceof ZodOptional) {
      return [void 0, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodNullable) {
      return [null, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodBranded) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
      return getDiscriminator(type._def.innerType);
    } else {
      return [];
    }
  };
  class ZodDiscriminatedUnion extends ZodType {
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
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
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
        if (!discriminatorValues.length) {
          throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
          }
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
  }
  function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
      return { valid: true, data: a };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b);
      const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a, ...b };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a.length !== b.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
      return { valid: true, data: a };
    } else {
      return { valid: false };
    }
  }
  class ZodIntersection extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  }
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params)
    });
  };
  class ZodTuple extends ZodType {
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
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
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
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x) => !!x);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
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
  }
  ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params)
    });
  };
  class ZodMap extends ZodType {
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
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  }
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params)
    });
  };
  class ZodSet extends ZodType {
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
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size, message) {
      return this.min(size, message).max(size, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodSet.create = (valueType, params) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params)
    });
  };
  class ZodLazy extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  }
  ZodLazy.create = (getter, params) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params)
    });
  };
  class ZodLiteral extends ZodType {
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
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  }
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
  class ZodEnum extends ZodType {
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
      if (!this._cache) {
        this._cache = new Set(this._def.values);
      }
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
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
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
  }
  ZodEnum.create = createZodEnum;
  class ZodNativeEnum extends ZodType {
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
      if (!this._cache) {
        this._cache = new Set(util.getValidEnumValues(this._def.values));
      }
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
  }
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params)
    });
  };
  class ZodPromise extends ZodType {
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
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  }
  ZodPromise.create = (schema, params) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params)
    });
  };
  class ZodEffects extends ZodType {
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
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(processed).then(async (processed2) => {
            if (status.value === "aborted")
              return INVALID;
            const result2 = await this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
            if (result2.status === "aborted")
              return INVALID;
            if (result2.status === "dirty")
              return DIRTY(result2.value);
            if (status.value === "dirty")
              return DIRTY(result2.value);
            return result2;
          });
        } else {
          if (status.value === "aborted")
            return INVALID;
          const result2 = this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
          if (result2.status === "aborted")
            return INVALID;
          if (result2.status === "dirty")
            return DIRTY(result2.value);
          if (status.value === "dirty")
            return DIRTY(result2.value);
          return result2;
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result2 = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result2);
          }
          if (result2 instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return INVALID;
          const result2 = effect.transform(base.value, checkCtx);
          if (result2 instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result2 };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return INVALID;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result2) => ({
              status: status.value,
              value: result2
            }));
          });
        }
      }
      util.assertNever(effect);
    }
  }
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
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params)
    });
  };
  class ZodOptional extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodOptional.create = (type, params) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params)
    });
  };
  class ZodNullable extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodNullable.create = (type, params) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params)
    });
  };
  class ZodDefault extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  ZodDefault.create = (type, params) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
  class ZodCatch extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result2 = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result2)) {
        return result2.then((result3) => {
          return {
            status: "valid",
            value: result3.status === "valid" ? result3.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  ZodCatch.create = (type, params) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
  class ZodNaN extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  }
  ZodNaN.create = (params) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params)
    });
  };
  class ZodBranded extends ZodType {
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
  }
  class ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a, b) {
      return new ZodPipeline({
        in: a,
        out: b,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  }
  class ZodReadonly extends ZodType {
    _parse(input) {
      const result2 = this._def.innerType._parse(input);
      const freeze = (data) => {
        if (isValid(data)) {
          data.value = Object.freeze(data.value);
        }
        return data;
      };
      return isAsync(result2) ? result2.then((data) => freeze(data)) : freeze(result2);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params)
    });
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  const stringType = ZodString.create;
  const numberType = ZodNumber.create;
  const booleanType = ZodBoolean.create;
  ZodNever.create;
  const arrayType = ZodArray.create;
  const objectType = ZodObject.create;
  ZodUnion.create;
  const discriminatedUnionType = ZodDiscriminatedUnion.create;
  ZodIntersection.create;
  ZodTuple.create;
  const literalType = ZodLiteral.create;
  const enumType = ZodEnum.create;
  ZodPromise.create;
  ZodOptional.create;
  ZodNullable.create;
  const ProcessingModeSchema = enumType(["byok_llm", "hosted_llm"]);
  const DEFAULT_OPENROUTER_MODEL = "openrouter/free";
  const ActionDecisionSchema = enumType(["show", "blur", "hide", "neutralize", "collapse", "rebuild"]);
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
  const PresetSelectionSchema = objectType({
    politics: booleanType().default(false),
    ragebait: booleanType().default(false),
    spoilers: booleanType().default(false),
    clickbait: booleanType().default(false)
  });
  const UserRulesSchema = objectType({
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
  const NeutralizationModeSchema = enumType(["light", "medium", "strict"]);
  const NeutralizationSettingsSchema = objectType({
    enabled: booleanType().default(true),
    mode: NeutralizationModeSchema.default("medium"),
    showIndicator: booleanType().default(true),
    showDiffOnHover: booleanType().default(true),
    excludeDomains: arrayType(stringType()).default([])
  });
  const defaultNeutralizationSettings = {
    enabled: true,
    mode: "medium",
    showIndicator: true,
    showDiffOnHover: true,
    excludeDomains: []
  };
  const ReaderSettingsSchema = objectType({
    enabled: booleanType().default(true),
    defaultLayout: stringType().default("auto"),
    defaultTheme: stringType().default("default"),
    autoOpen: booleanType().default(true),
    textOnly: booleanType().default(true),
    showInContextMenu: booleanType().default(true)
  });
  const defaultReaderSettings = {
    enabled: true,
    defaultLayout: "auto",
    defaultTheme: "default",
    autoOpen: true,
    textOnly: true,
    showInContextMenu: true
  };
  objectType({
    enabled: booleanType().default(true),
    processingMode: ProcessingModeSchema.default("byok_llm"),
    strictness: numberType().min(0).max(100).default(80),
    rules: UserRulesSchema.default({
      blocklistChannels: [],
      blocklistKeywords: [],
      allowlistChannels: [],
      allowlistKeywords: [],
      presets: { politics: true, ragebait: true, spoilers: true, clickbait: true }
    }),
    byokKey: stringType().optional(),
    aiModel: stringType().default(DEFAULT_OPENROUTER_MODEL),
    customEndpoint: stringType().optional(),
    neutralization: NeutralizationSettingsSchema.default(defaultNeutralizationSettings),
    reader: ReaderSettingsSchema.default(defaultReaderSettings)
  });
  function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  }
  function generateFingerprint(unit) {
    const seed = `${unit.title}|${unit.sourceName || ""}|${unit.site}`;
    return simpleHash(seed);
  }
  objectType({
    totalFiltered: numberType().default(0),
    byAction: objectType({
      hide: numberType().default(0),
      blur: numberType().default(0),
      neutralize: numberType().default(0),
      collapse: numberType().default(0)
    }).default({ hide: 0, blur: 0, neutralize: 0, collapse: 0 }),
    byPreset: objectType({
      politics: numberType().default(0),
      ragebait: numberType().default(0),
      spoilers: numberType().default(0),
      clickbait: numberType().default(0)
    }).default({ politics: 0, ragebait: 0, spoilers: 0, clickbait: 0 }),
    timeSaved: numberType().default(0),
    topFilteredSources: arrayType(stringType()).default([]),
    dailyHistory: arrayType(objectType({
      date: stringType(),
      count: numberType()
    })).default([]),
    lastReset: numberType().default(Date.now())
  });
  const REASON_LABELS = {
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
    for (const [key, label] of Object.entries(REASON_LABELS)) {
      if (reason.includes(key)) {
        return label;
      }
    }
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
    const icon = getReasonIcon(reason);
    container.innerHTML = `
    <div class="calmweb-collapse-badge">
      <span class="calmweb-collapse-icon">${icon}</span>
      <span class="calmweb-collapse-label">${label}</span>
    </div>
    <button class="calmweb-collapse-expand" type="button">
      <span>Show anyway</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
  `;
    const expandBtn = container.querySelector(".calmweb-collapse-expand");
    expandBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      expandCollapsedContent(container, originalElement);
      if (onExpand) {
        onExpand();
      }
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
  const SELECTOR_PRIORITIES = [
    // High priority: semantic HTML
    "article",
    "main article",
    '[role="article"]',
    "article[itemscope]",
    // Medium-high: common CMS patterns
    ".post",
    ".entry",
    ".content-item",
    ".card",
    ".post-item",
    ".entry-content",
    ".article-content",
    ".news-item",
    ".story",
    ".feed-item",
    // Medium: blog/platform patterns
    'div[class*="post"]',
    'div[class*="article"]',
    'div[class*="item"]',
    'div[class*="card"]',
    'section[class*="post"]',
    // Low: generic containers (only if others fail)
    "section",
    "li.post",
    "li.item",
    "li.article"
  ];
  const TITLE_SELECTORS = [
    "h1",
    "h2",
    "h3",
    "h4",
    ".title",
    ".heading",
    'a[href*="/p/"]',
    '[class*="title"]',
    "header a",
    ".entry-title",
    ".post-title",
    ".article-title"
  ];
  const SOURCE_SELECTORS = [
    ".author",
    ".source",
    ".site-name",
    "cite",
    'span[class*="author"]',
    '[rel="author"]',
    ".byline",
    ".meta-author",
    ".post-author",
    'a[class*="author"]',
    "[data-author]"
  ];
  const MIN_TEXT_LENGTH = 30;
  const MIN_HEIGHT = 50;
  const MIN_WIDTH = 100;
  const MIN_UNITS_THRESHOLD = 3;
  function isValidContentUnit(el) {
    if (el.offsetHeight < MIN_HEIGHT || el.offsetWidth < MIN_WIDTH) {
      return false;
    }
    const text = el.innerText?.trim() || "";
    if (text.length < MIN_TEXT_LENGTH) {
      return false;
    }
    const style = getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
      return false;
    }
    const hasTitle = TITLE_SELECTORS.some((sel) => {
      const titleEl = el.querySelector(sel);
      return titleEl && (titleEl.textContent?.trim().length || 0) > 5;
    });
    if (!hasTitle) {
      return false;
    }
    return true;
  }
  function filterValidUnits(nodes) {
    return Array.from(nodes).filter((el) => isValidContentUnit(el));
  }
  function discoverUnitsPriority(root) {
    for (const selector of SELECTOR_PRIORITIES) {
      try {
        const nodes = root.querySelectorAll(selector);
        const validUnits = filterValidUnits(Array.from(nodes));
        if (validUnits.length >= MIN_UNITS_THRESHOLD) {
          return validUnits;
        }
      } catch {
      }
    }
    return discoverUnitsDynamic(root);
  }
  function discoverUnitsDynamic(root) {
    const candidates = [];
    const allDivs = root.querySelectorAll("div, section, li, article");
    allDivs.forEach((div) => {
      const htmlEl = div;
      const children = htmlEl.children;
      if (children.length < 2) return;
      const hasHeading = htmlEl.querySelector("h1, h2, h3, h4, h5, a[href]");
      if (!hasHeading) return;
      const text = htmlEl.innerText?.trim() || "";
      if (text.length < MIN_TEXT_LENGTH) return;
      const isNested = candidates.some((c) => c.contains(htmlEl) || htmlEl.contains(c));
      if (!isNested && isValidContentUnit(htmlEl)) {
        candidates.push(htmlEl);
      }
    });
    const seen = /* @__PURE__ */ new Set();
    const result2 = [];
    for (const el of candidates) {
      let hasParent = false;
      for (const other of candidates) {
        if (other !== el && other.contains(el)) {
          hasParent = true;
          break;
        }
      }
      if (!hasParent && !seen.has(el)) {
        seen.add(el);
        result2.push(el);
        if (result2.length >= 50) break;
      }
    }
    return result2;
  }
  function extractTitle(element) {
    for (const sel of TITLE_SELECTORS) {
      const titleEl = element.querySelector(sel);
      const text = titleEl?.innerText?.trim() || titleEl?.textContent?.trim();
      if (text && text.length > 5) {
        return text;
      }
    }
    const firstText = Array.from(element.querySelectorAll("*")).map((el) => el.innerText?.trim()).find((text) => text && text.length > 10);
    return firstText || "Content";
  }
  function extractSource(element) {
    for (const sel of SOURCE_SELECTORS) {
      const sourceEl = element.querySelector(sel);
      const text = sourceEl?.innerText?.trim() || sourceEl?.textContent?.trim();
      if (text && text.length > 1) {
        return text;
      }
    }
    return window.location.hostname;
  }
  function extractMetadata(element) {
    const metadata = [];
    const dateEl = element.querySelector("time, .date, .post-date, [datetime]");
    if (dateEl) {
      const date = dateEl.getAttribute("datetime") || dateEl.textContent?.trim();
      if (date) metadata.push(date);
    }
    const tagEls = element.querySelectorAll('.tag, .category, [rel="tag"]');
    tagEls.forEach((el) => {
      const tag = el.textContent?.trim();
      if (tag && tag.length < 30) {
        metadata.push(tag);
      }
    });
    return metadata.slice(0, 5);
  }
  const universalAdapter = {
    siteId: "universal",
    matches: [/.*/],
    discoverUnits: discoverUnitsPriority,
    extractData(element) {
      const title = extractTitle(element);
      const sourceName = extractSource(element);
      const metadata = extractMetadata(element);
      const fingerprint = generateFingerprint({
        title,
        sourceName,
        site: "universal"
      });
      return {
        id: element.id || `uni-${fingerprint}`,
        site: "universal",
        fingerprint,
        sourceName,
        title,
        metadata,
        isNew: false
      };
    },
    applyDecision(element, result2) {
      element.removeAttribute("data-calmweb-processed");
      element.style.filter = "";
      element.style.opacity = "";
      element.classList.remove("calmweb-blurred", "calmweb-hidden");
      if (result2.decision === "hide") {
        element.style.display = "none";
        element.setAttribute("data-calmweb-processed", "hidden");
      } else if (result2.decision === "collapse") {
        const placeholder = createCollapsePlaceholder({
          reason: result2.reason,
          originalElement: element,
          result: result2,
          siteId: "universal"
        });
        element.style.display = "none";
        element.insertAdjacentElement("afterend", placeholder);
        element.setAttribute("data-calmweb-processed", "collapsed");
      } else if (result2.decision === "blur") {
        element.classList.add("calmweb-blurred");
        element.setAttribute("data-calmweb-processed", "blur");
      } else if (result2.decision === "neutralize" && result2.neutralizedTitle) {
        const titleEl = element.querySelector(TITLE_SELECTORS.join(", "));
        if (titleEl) titleEl.innerText = result2.neutralizedTitle;
        element.setAttribute("data-calmweb-processed", "neutralized");
      } else {
        element.setAttribute("data-calmweb-processed", "show");
      }
    }
  };
  const SELECTORS$1 = {
    videoCard: "ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer",
    title: "#video-title, a#video-title-link, #video-title a",
    channel: "#text.ytd-channel-name, #channel-name a, ytd-channel-name",
    metadata: "#metadata-line yt-formatted-string"
  };
  function discoverUnits$2(root) {
    const nodes = root.querySelectorAll(SELECTORS$1.videoCard);
    return Array.from(nodes);
  }
  function extractData$2(element) {
    const titleEl = element.querySelector(SELECTORS$1.title);
    const title = (titleEl?.innerText || titleEl?.textContent || "").trim() || "Untitled";
    const channelEl = element.querySelector(SELECTORS$1.channel);
    const sourceName = (channelEl?.innerText || channelEl?.textContent || "").trim() || void 0;
    const metadataEls = element.querySelectorAll(SELECTORS$1.metadata);
    const metadata = Array.from(metadataEls).map((el) => (el.innerText || el.textContent || "").trim()).filter(Boolean);
    const fingerprint = generateFingerprint({ title, sourceName, site: "youtube" });
    const id = element.id || `yt-${fingerprint}`;
    return {
      id,
      site: "youtube",
      fingerprint,
      sourceName,
      title,
      metadata,
      isNew: false
    };
  }
  function applyDecision$2(element, result2) {
    element.removeAttribute("data-calmweb-processed");
    element.style.display = "";
    element.style.filter = "";
    element.style.opacity = "";
    element.style.transition = "";
    element.classList.remove("calmweb-blurred", "calmweb-hidden", "calmweb-neutralized");
    if (result2.decision === "hide") {
      element.style.display = "none";
      element.setAttribute("data-calmweb-processed", "hidden");
      return;
    }
    if (result2.decision === "collapse") {
      const placeholder = createCollapsePlaceholder({
        reason: result2.reason,
        originalElement: element,
        result: result2,
        siteId: "youtube"
      });
      element.style.display = "none";
      element.insertAdjacentElement("afterend", placeholder);
      element.setAttribute("data-calmweb-processed", "collapsed");
      return;
    }
    if (result2.decision === "blur") {
      element.classList.add("calmweb-blurred");
      element.setAttribute("data-calmweb-processed", "blur");
      return;
    }
    if (result2.decision === "neutralize" && result2.neutralizedTitle) {
      const titleEl = element.querySelector(SELECTORS$1.title);
      if (titleEl) {
        titleEl.innerText = result2.neutralizedTitle;
        titleEl.setAttribute("title", result2.neutralizedTitle);
      }
      element.classList.add("calmweb-neutralized");
      element.setAttribute("data-calmweb-processed", "neutralized");
      return;
    }
    if (result2.decision === "rebuild") {
      element.style.display = "none";
      element.setAttribute("data-calmweb-processed", "rebuild");
      return;
    }
    element.setAttribute("data-calmweb-processed", "show");
  }
  const youtubeAdapter = {
    siteId: "youtube",
    matches: [
      /^https?:\/\/(www\.)?youtube\.com\/.*/,
      /^https?:\/\/youtu\.be\/.*/
    ],
    discoverUnits: discoverUnits$2,
    extractData: extractData$2,
    applyDecision: applyDecision$2
  };
  const NEW_REDDIT = {
    postCard: '[data-testid="post-container"], div[data-click-id="body"]',
    title: '[data-testid="post-title"], h3',
    subreddit: '[data-testid="subreddit-name"] a, a[href*="/r/"]',
    metadata: '[data-testid="post-options-menu"] span, .text-neutral-content'
  };
  const OLD_REDDIT = {
    postCard: ".thing.thing-type-self, .thing.thing-type-link",
    title: ".title a",
    subreddit: ".subreddit a",
    metadata: ".tagline span"
  };
  function isNewReddit() {
    return window.location.hostname === "www.reddit.com" || window.location.hostname === "reddit.com";
  }
  function discoverUnits$1(root) {
    const selectors = isNewReddit() ? NEW_REDDIT.postCard : `${NEW_REDDIT.postCard}, ${OLD_REDDIT.postCard}`;
    const nodes = root.querySelectorAll(selectors);
    return Array.from(nodes);
  }
  function extractData$1(element) {
    const newReddit = isNewReddit();
    const titleEl = element.querySelector(newReddit ? NEW_REDDIT.title : OLD_REDDIT.title);
    const title = (titleEl?.innerText || titleEl?.textContent || "").trim() || "Untitled";
    const subredditEl = element.querySelector(newReddit ? NEW_REDDIT.subreddit : OLD_REDDIT.subreddit);
    let sourceName = (subredditEl?.innerText || subredditEl?.textContent || "").trim() || void 0;
    if (!sourceName && subredditEl) {
      const anchor = subredditEl;
      if (anchor.getAttribute?.("href")) {
        const href = anchor.getAttribute("href") || "";
        const match = href.match(/\/r\/([^\/]+)/);
        if (match) {
          sourceName = `r/${match[1]}`;
        }
      }
    }
    const metadataEls = element.querySelectorAll(newReddit ? NEW_REDDIT.metadata : OLD_REDDIT.metadata);
    const metadata = Array.from(metadataEls).map((el) => (el.innerText || el.textContent || "").trim()).filter(Boolean);
    const fingerprint = generateFingerprint({ title, sourceName, site: "reddit" });
    const id = element.id || `reddit-${fingerprint}`;
    return {
      id,
      site: "reddit",
      fingerprint,
      sourceName,
      title,
      metadata,
      isNew: false
    };
  }
  function applyDecision$1(element, result2) {
    element.removeAttribute("data-calmweb-processed");
    element.style.display = "";
    element.style.filter = "";
    element.classList.remove("calmweb-blurred", "calmweb-hidden", "calmweb-neutralized");
    if (result2.decision === "hide") {
      element.style.display = "none";
      element.setAttribute("data-calmweb-processed", "hidden");
      return;
    }
    if (result2.decision === "collapse") {
      const placeholder = createCollapsePlaceholder({
        reason: result2.reason,
        originalElement: element,
        result: result2,
        siteId: "reddit"
      });
      element.style.display = "none";
      element.insertAdjacentElement("afterend", placeholder);
      element.setAttribute("data-calmweb-processed", "collapsed");
      return;
    }
    if (result2.decision === "blur") {
      element.classList.add("calmweb-blurred");
      element.setAttribute("data-calmweb-processed", "blur");
      return;
    }
    if (result2.decision === "neutralize" && result2.neutralizedTitle) {
      const newReddit = isNewReddit();
      const titleEl = element.querySelector(newReddit ? NEW_REDDIT.title : OLD_REDDIT.title);
      if (titleEl) {
        titleEl.innerText = result2.neutralizedTitle;
      }
      element.classList.add("calmweb-neutralized");
      element.setAttribute("data-calmweb-processed", "neutralized");
      return;
    }
    if (result2.decision === "rebuild") {
      element.style.display = "none";
      element.setAttribute("data-calmweb-processed", "rebuild");
      return;
    }
    element.setAttribute("data-calmweb-processed", "show");
  }
  const redditAdapter = {
    siteId: "reddit",
    matches: [
      /^https?:\/\/(www\.)?reddit\.com\/.*/,
      /^https?:\/\/old\.reddit\.com\/.*/
    ],
    discoverUnits: discoverUnits$1,
    extractData: extractData$1,
    applyDecision: applyDecision$1
  };
  const SELECTORS = {
    tweet: '[data-testid="tweet"], [data-testid="cellInnerDiv"]',
    text: '[data-testid="tweetText"], .x-wi5j6c',
    displayName: '[data-testid="User-Name"] span, .css-901oao span:first-child'
  };
  function discoverUnits(root) {
    const tweets = root.querySelectorAll(SELECTORS.tweet);
    return Array.from(tweets);
  }
  function extractData(element) {
    const textEl = element.querySelector(SELECTORS.text);
    const title = (textEl?.innerText || textEl?.textContent || "").trim() || "No text";
    const displayNameEl = element.querySelector(SELECTORS.displayName);
    const sourceName = (displayNameEl?.innerText || displayNameEl?.textContent || "").trim() || void 0;
    const metaEls = element.querySelectorAll('[data-testid*="engagement"] span, [data-testid="timestamp"]');
    const metadata = Array.from(metaEls).map((el) => (el.innerText || el.textContent || "").trim()).filter(Boolean);
    const fingerprint = generateFingerprint({ title, sourceName, site: "x" });
    const id = element.id || `x-${fingerprint}`;
    return {
      id,
      site: "x",
      fingerprint,
      sourceName,
      title,
      metadata,
      isNew: false
    };
  }
  function applyDecision(element, result2) {
    element.removeAttribute("data-calmweb-processed");
    element.style.display = "";
    element.style.filter = "";
    element.classList.remove("calmweb-blurred", "calmweb-hidden", "calmweb-neutralized");
    if (result2.decision === "hide") {
      element.style.display = "none";
      element.setAttribute("data-calmweb-processed", "hidden");
      return;
    }
    if (result2.decision === "collapse") {
      const placeholder = createCollapsePlaceholder({
        reason: result2.reason,
        originalElement: element,
        result: result2,
        siteId: "x"
      });
      element.style.display = "none";
      element.insertAdjacentElement("afterend", placeholder);
      element.setAttribute("data-calmweb-processed", "collapsed");
      return;
    }
    if (result2.decision === "blur") {
      element.classList.add("calmweb-blurred");
      element.setAttribute("data-calmweb-processed", "blur");
      return;
    }
    if (result2.decision === "neutralize" && result2.neutralizedTitle) {
      const textEl = element.querySelector(SELECTORS.text);
      if (textEl) {
        textEl.innerText = result2.neutralizedTitle;
      }
      element.classList.add("calmweb-neutralized");
      element.setAttribute("data-calmweb-processed", "neutralized");
      return;
    }
    if (result2.decision === "rebuild") {
      element.style.display = "none";
      element.setAttribute("data-calmweb-processed", "rebuild");
      return;
    }
    element.setAttribute("data-calmweb-processed", "show");
  }
  const xAdapter = {
    siteId: "x",
    matches: [
      /^https?:\/\/(www\.)?x\.com\/.*/,
      /^https?:\/\/(www\.)?twitter\.com\/.*/
    ],
    discoverUnits,
    extractData,
    applyDecision
  };
  function isGoogleSearchPage(url = window.location.href) {
    try {
      const parsed = new URL(url);
      return parsed.hostname.includes("google.") && parsed.pathname === "/search" && parsed.searchParams.has("q");
    } catch {
      return false;
    }
  }
  const MESSAGE_TYPES = {
    // Classification
    CLASSIFY_UNIT: "calmweb:classifyUnit",
    // Settings management
    GET_SETTINGS: "calmweb:getSettings",
    UPDATE_SETTINGS: "calmweb:updateSettings",
    // Cache management
    CLEAR_CACHE: "calmweb:clearCache",
    // Statistics
    GET_STATS: "calmweb:getStats",
    INCREMENT_STAT: "calmweb:incrementStat",
    // AI Connection
    TEST_CONNECTION: "calmweb:testConnection"
  };
  const ClassifyUnitMessageSchema = objectType({
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
  });
  const GetSettingsMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.GET_SETTINGS)
  });
  const UpdateSettingsMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.UPDATE_SETTINGS),
    settings: objectType({
      enabled: booleanType().optional(),
      processingMode: enumType(["local_rules", "byok_llm", "hosted_llm"]).optional(),
      strictness: numberType().min(0).max(100).optional(),
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
      }).optional(),
      byokKey: stringType().optional()
    })
  });
  const ClearCacheMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.CLEAR_CACHE)
  });
  const GetStatsMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.GET_STATS)
  });
  const IncrementStatMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.INCREMENT_STAT),
    key: literalType("totalFiltered"),
    amount: numberType().optional()
  });
  const TestConnectionMessageSchema = objectType({
    type: literalType(MESSAGE_TYPES.TEST_CONNECTION),
    apiKey: stringType(),
    model: stringType().optional(),
    endpoint: stringType().optional()
  });
  discriminatedUnionType("type", [
    ClassifyUnitMessageSchema,
    GetSettingsMessageSchema,
    UpdateSettingsMessageSchema,
    ClearCacheMessageSchema,
    GetStatsMessageSchema,
    IncrementStatMessageSchema,
    TestConnectionMessageSchema
  ]);
  const AD_SELECTORS = [
    // Generic ad containers
    '[class*="ad-container"]',
    '[class*="ad_container"]',
    '[class*="adContainer"]',
    '[class*="ad-wrapper"]',
    '[class*="ad_wrapper"]',
    '[class*="adWrapper"]',
    '[class*="ad-slot"]',
    '[class*="ad_slot"]',
    '[class*="adSlot"]',
    '[class*="ad-banner"]',
    '[class*="ad_banner"]',
    '[class*="adBanner"]',
    '[class*="ad-unit"]',
    '[class*="ad_unit"]',
    '[class*="adUnit"]',
    '[class*="ad-placement"]',
    '[class*="ad_placement"]',
    '[class*="adPlacement"]',
    '[class*="ad-wrapper"]',
    '[class*="advert"]',
    '[class*="advertisement"]',
    '[class*="advertisment"]',
    '[id*="ad-container"]',
    '[id*="ad_container"]',
    '[id*="adContainer"]',
    '[id*="ad-slot"]',
    '[id*="ad_slot"]',
    '[id*="adSlot"]',
    '[id*="ad-banner"]',
    '[id*="ad_banner"]',
    '[id*="adBanner"]',
    '[id*="ad-unit"]',
    '[id*="ad_unit"]',
    '[id*="adUnit"]',
    '[id*="advert"]',
    '[id*="advertisement"]',
    // Common ad class names
    ".ad",
    ".ads",
    ".adsbygoogle",
    ".ad-placement",
    ".ad-zone",
    ".ad-box",
    ".ad-block",
    ".ad-panel",
    ".ad-section",
    ".ad-label",
    ".ad-placeholder",
    ".ad-overlay",
    ".ad-leaderboard",
    ".ad-sidebar",
    ".ad-inline",
    ".ad-mobile",
    ".ad-desktop",
    ".ad-top",
    ".ad-bottom",
    ".ad-header",
    ".ad-footer",
    ".ad-content",
    ".ad-right",
    ".ad-left",
    ".ad-center",
    ".advert",
    ".advertisement",
    ".advertising",
    ".advertorial",
    ".sponsored",
    ".sponsor",
    ".sponsored-content",
    ".sponsored-post",
    ".promoted",
    ".promotion",
    ".promo",
    // Ad network specific
    "[data-ad]",
    "[data-ad-slot]",
    "[data-ad-client]",
    "[data-ad-format]",
    "[data-adunit]",
    "[data-adunit-path]",
    "[data-dfp]",
    "[data-google-query-id]",
    '[aria-label="advertisement"]',
    '[aria-label="Ad"]',
    '[aria-label="Sponsored"]',
    // Google Ads
    ".google-ad",
    ".googleads",
    ".adsense",
    "ins.adsbygoogle",
    // Common iframe ad patterns
    'iframe[src*="doubleclick.net"]',
    'iframe[src*="googlesyndication.com"]',
    'iframe[src*="googleadservices.com"]',
    'iframe[src*="adnxs.com"]',
    'iframe[src*="amazon-adsystem.com"]',
    'iframe[src*="adsrvr.org"]',
    'iframe[src*="adform.net"]',
    'iframe[src*="moatads.com"]',
    'iframe[src*="outbrain.com"]',
    'iframe[src*="taboola.com"]',
    'iframe[src*="criteo.com"]',
    'iframe[src*="criteo.net"]',
    'iframe[id*="google_ads"]',
    // Social/promoted content
    '[data-testid*="promoted"]',
    '[data-promoted="true"]',
    '[class*="promoted-tweet"]',
    '[class*="sponsored-label"]',
    '[class*="ad-badge"]',
    // Newsletter popups and subscription overlays
    '[class*="newsletter-popup"]',
    '[class*="newsletter-overlay"]',
    '[class*="subscribe-popup"]',
    '[class*="signup-popup"]',
    '[class*="email-signup"]',
    '[class*="mail-signup"]',
    // Cookie consent ads
    '[class*="cookie-banner-ad"]',
    '[class*="consent-banner-promo"]'
  ];
  const AD_URL_PATTERNS = [
    "doubleclick.net",
    "googlesyndication.com",
    "googleadservices.com",
    "adservice.google",
    "pagead2.googlesyndication.com",
    "securepubads.g.doubleclick.net",
    "adnxs.com",
    "amazon-adsystem.com",
    "adsrvr.org",
    "adform.net",
    "moatads.com",
    "outbrain.com",
    "taboola.com",
    "criteo.com",
    "criteo.net",
    "ads-twitter.com",
    "facebook.com/tr",
    "analytics.tiktok.com",
    "snap.licdn.com",
    "bat.bing.com"
  ];
  function hideAds(root = document) {
    let hidden = 0;
    let removed = 0;
    for (const selector of AD_SELECTORS) {
      try {
        const elements = root.querySelectorAll(selector);
        for (const el of Array.from(elements)) {
          if (el instanceof HTMLElement) {
            el.style.setProperty("display", "none", "important");
            el.setAttribute("data-calmweb-ad-hidden", "true");
            hidden++;
          }
        }
      } catch {
      }
    }
    const iframes = root.querySelectorAll("iframe");
    for (const iframe of Array.from(iframes)) {
      const src = iframe.getAttribute("src") || "";
      if (AD_URL_PATTERNS.some((pattern) => src.includes(pattern))) {
        iframe.style.setProperty("display", "none", "important");
        iframe.setAttribute("data-calmweb-ad-hidden", "true");
        hidden++;
      }
    }
    return { hidden, removed, total: hidden + removed };
  }
  function observeAndHideAds(root = document) {
    hideAds(root);
    const observer = new MutationObserver((mutations) => {
      let hasNewElements = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          hasNewElements = true;
          break;
        }
      }
      if (hasNewElements) {
        hideAds(root);
      }
    });
    observer.observe(root.body || root.documentElement, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }
  const definition = defineContentScript({
    matches: ["<all_urls>"],
    runAt: "document_idle",
    main() {
      if (isGoogleSearchPage()) return;
      const url = window.location.href;
      const specificSite = [youtubeAdapter, redditAdapter, xAdapter].some(
        (adapter) => adapter.matches.some((regex) => regex.test(url))
      );
      if (specificSite) return;
      console.log("[Content] Universal script loaded for", window.location.hostname);
      const style = document.createElement("style");
      style.id = "calmweb-styles-universal";
      style.textContent = `
      [data-calmweb-processed="blur"] {
        filter: blur(10px) !important;
        transition: filter 0.3s ease !important;
        pointer-events: auto;
      }
      [data-calmweb-processed="blur"]:hover {
        filter: none !important;
      }
      [data-calmweb-processed="hidden"] {
        display: none !important;
      }
    `;
      document.head.appendChild(style);
      const processUnits = async (units) => {
        if (units.length === 0) return;
        const unitDataList = units.map((el) => {
          const data = universalAdapter.extractData(el);
          return data;
        });
        const results = await Promise.all(
          unitDataList.map(
            (unit) => sendToBackground({
              type: MESSAGE_TYPES.CLASSIFY_UNIT,
              unit
            })
          )
        );
        units.forEach((el, idx) => {
          const result2 = results[idx];
          if (result2 && !("error" in result2)) {
            universalAdapter.applyDecision(el, result2);
          }
        });
      };
      processUnits(universalAdapter.discoverUnits(document));
      const observer = new MutationObserver(() => {
        processUnits(universalAdapter.discoverUnits(document).filter((el) => !el.hasAttribute("data-calmweb-processed")));
      });
      observer.observe(document.body, { childList: true, subtree: true });
      observeAndHideAds(document);
    }
  });
  function initPlugins() {
  }
  function print(method, ...args) {
    if (typeof args[0] === "string") method(`[wxt] ${args.shift()}`, ...args);
    else method("[wxt]", ...args);
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  const result = (() => {
    try {
      initPlugins();
    } catch (err) {
      logger.error(`Failed to initialize plugins for "${"universal"}"`, err);
      throw err;
    }
    let result2;
    try {
      result2 = definition.main();
      if (result2 instanceof Promise) result2 = result2.catch((err) => {
        logger.error(`The unlisted script "${"universal"}" crashed on startup!`, err);
        throw err;
      });
    } catch (err) {
      logger.error(`The unlisted script "${"universal"}" crashed on startup!`, err);
      throw err;
    }
    return result2;
  })();
  return result;
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdmVyc2FsLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uLy4uLy4uLy4uL3d4dC1zaGFyZWQvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL25vZGVfbW9kdWxlcy9Ad3h0LWRldi9icm93c2VyL3NyYy9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi8uLi93eHQtc2hhcmVkL2Rpc3QvZXh0ZW5zaW9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL1pvZEVycm9yLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9sb2NhbGVzL2VuLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9lcnJvcnMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvcGFyc2VVdGlsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL2Vycm9yVXRpbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy96b2QvdjMvdHlwZXMuanMiLCIuLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQvZGlzdC9pbmRleC5qcyIsIi4uLy4uL3NyYy9yZW5kZXJlci9jb2xsYXBzZS50cyIsIi4uLy4uL3NyYy9hZGFwdGVycy91bml2ZXJzYWwudHMiLCIuLi8uLi9zcmMvYWRhcHRlcnMveW91dHViZS50cyIsIi4uLy4uL3NyYy9hZGFwdGVycy9yZWRkaXQudHMiLCIuLi8uLi9zcmMvYWRhcHRlcnMveC50cyIsIi4uLy4uL3NyYy9hZGFwdGVycy9nb29nbGUudHMiLCIuLi8uLi9zcmMvbWVzc2FnaW5nL2luZGV4LnRzIiwiLi4vLi4vc3JjL2FkZmlsdGVyL2luZGV4LnRzIiwiLi4vLi4vZW50cnlwb2ludHMvdW5pdmVyc2FsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vI3JlZ2lvbiBzcmMvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0LnRzXG5mdW5jdGlvbiBkZWZpbmVDb250ZW50U2NyaXB0KGRlZmluaXRpb24pIHtcblx0cmV0dXJuIGRlZmluaXRpb247XG59XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgZGVmaW5lQ29udGVudFNjcmlwdCB9OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTIuMCAtIFR1ZSBNYXkgMTQgMjAyNCAxODowMToyOSAqL1xuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG4gIGlmICghKGdsb2JhbFRoaXMuYnJvd3NlciAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZSAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZS5pZCkpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAgIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICAgIG1heEFyZ3M6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBkZXZ0b29sczoge1xuICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycylcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiLy8gI3JlZ2lvbiBzbmlwcGV0XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZT8uaWRcbiAgPyBnbG9iYWxUaGlzLmJyb3dzZXJcbiAgOiBnbG9iYWxUaGlzLmNocm9tZTtcbi8vICNlbmRyZWdpb24gc25pcHBldFxuIiwiLyoqXG4gKiBFeHRlbnNpb24gdXRpbGl0aWVzIGFuZCBmYWN0b3J5XG4gKlxuICogUHJvdmlkZXM6XG4gKiAtIGNyZWF0ZUV4dGVuc2lvbigpIC0gQ29tcGxldGUgc2V0dXAgaW4gb25lIGNhbGxcbiAqIC0gQ29udGV4dCBkZXRlY3Rpb24gaGVscGVyc1xuICogLSBUYWIgbWFuYWdlbWVudFxuICogLSBNZXNzYWdlIHBhc3NpbmcgdXRpbGl0aWVzXG4gKi9cbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBjcmVhdGVDb25maWcgfSBmcm9tICcuLi9jb25maWcvaW5kZXguanMnO1xuaW1wb3J0IHsgY3JlYXRlQXBpQ2xpZW50LCB9IGZyb20gJy4uL2FwaS9pbmRleC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVBdXRoRmxvdyB9IGZyb20gJy4uL2F1dGgvaW5kZXguanMnO1xuaW1wb3J0IHsgZGVmYXVsdEF1dGhTdG9yZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5kZXguanMnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJ3d4dC91dGlscy9zdG9yYWdlJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFeHRlbnNpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IHsgYXBwTmFtZSwgYXBwSWQsIGVudiwgZGVidWcsIHN0b3JhZ2VLZXkgPSAnbG9jYWw6YXV0aCcgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKHsgYXBwTmFtZSwgZW52LCBkZWJ1ZyB9KTtcbiAgICBjb25zdCBhdXRoU3RvcmUgPSBzdG9yYWdlLmRlZmluZUl0ZW0oc3RvcmFnZUtleSwge1xuICAgICAgICBmYWxsYmFjazogZGVmYXVsdEF1dGhTdG9yZSxcbiAgICB9KTtcbiAgICBjb25zdCBhcGlDbGllbnQgPSBjcmVhdGVBcGlDbGllbnQoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGdldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRBdXRoOiAoYXV0aCkgPT4gYXV0aFN0b3JlLnNldFZhbHVlKGF1dGgpLFxuICAgICAgICBvbkF1dGhFcnJvcjogKCkgPT4gYXV0aEZsb3cub3BlbkxvZ2luKCksXG4gICAgfSk7XG4gICAgY29uc3QgYXV0aEZsb3cgPSBjcmVhdGVBdXRoRmxvdyh7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgYXBwSWQsXG4gICAgICAgIGdldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRBdXRoOiAoYXV0aCkgPT4gYXV0aFN0b3JlLnNldFZhbHVlKGF1dGgpLFxuICAgICAgICByZXNldEF1dGg6ICgpID0+IGF1dGhTdG9yZS5zZXRWYWx1ZShkZWZhdWx0QXV0aFN0b3JlKSxcbiAgICB9KTtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBdXRoU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBhd2FpdCBhdXRoU3RvcmUuZ2V0VmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogISFhdXRoLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgdXNlcjogYXV0aC51c2VyXG4gICAgICAgICAgICAgICAgPyB7IGVtYWlsOiBhdXRoLnVzZXIuZW1haWwsIG5hbWU6IGF1dGgudXNlci5uYW1lIHx8ICdVc2VyJywgcGljdHVyZTogYXV0aC51c2VyLnBpY3R1cmUgfVxuICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIHRva2VuOiBhdXRoLmFjY2Vzc1Rva2VuIHx8IG51bGwsXG4gICAgICAgICAgICBxdW90YTogbnVsbCwgLy8gRmV0Y2hlZCBzZXBhcmF0ZWx5IHZpYSBnZXRRdW90YSgpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBnZXRBdXRoU3RhdGUoKSkuaXNBdXRoZW50aWNhdGVkO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGFwaUNsaWVudCxcbiAgICAgICAgYXV0aEZsb3csXG4gICAgICAgIGF1dGhTdG9yZSxcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgYXBwSWQsXG4gICAgICAgIGdldEF1dGhTdGF0ZSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICBvcGVuTG9naW46IGF1dGhGbG93Lm9wZW5Mb2dpbixcbiAgICAgICAgb3BlbkRhc2hib2FyZDogYXV0aEZsb3cub3BlbkRhc2hib2FyZCxcbiAgICAgICAgbG9nb3V0OiBhdXRoRmxvdy5sb2dvdXQsXG4gICAgICAgIGdldFVzZXI6ICgpID0+IGFwaUNsaWVudC5nZXRVc2VyKCksXG4gICAgICAgIGFkZFF1b3RhOiAoYW1vdW50KSA9PiBhcGlDbGllbnQuYWRkUXVvdGEoYW1vdW50ID8/IDEwMCksXG4gICAgICAgIGdldFF1b3RhOiAoKSA9PiBhcGlDbGllbnQuZ2V0UXVvdGEoKSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhc2ljRXh0ZW5zaW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhcHBOYW1lOiBvcHRpb25zLmFwcE5hbWUsXG4gICAgICAgIGFwcElkOiBvcHRpb25zLmFwcElkLFxuICAgICAgICBnZXRFeHRlbnNpb25PcmlnaW4sXG4gICAgICAgIGdldEV4dGVuc2lvblVybCxcbiAgICAgICAgb3BlbkluTmV3VGFiLFxuICAgICAgICBnZXRBY3RpdmVUYWIsXG4gICAgICAgIHNlbmRUb0JhY2tncm91bmQsXG4gICAgICAgIGhhc1Blcm1pc3Npb24sXG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9uLFxuICAgIH07XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250ZXh0IERldGVjdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29udGVudFNjcmlwdCgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwOicgfHwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JykpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0ZW5zaW9uQ29udGV4dCgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2Nocm9tZS1leHRlbnNpb246Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNCYWNrZ3JvdW5kU2NyaXB0KCkge1xuICAgIHJldHVybiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgKHR5cGVvZiBnbG9iYWxUaGlzLlNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHNlbGYgaW5zdGFuY2VvZiBnbG9iYWxUaGlzLlNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSkpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRXh0ZW5zaW9uIFVSTCBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uT3JpZ2luKCkge1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCcnKS5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVuc2lvblVybChwYXRoKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5nZXRVUkwocGF0aCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBdXRoQ2FsbGJhY2tVcmwodXJsKSB7XG4gICAgcmV0dXJuIHVybC5pbmNsdWRlcyhicm93c2VyLnJ1bnRpbWUuaWQpICYmIHVybC5pbmNsdWRlcygnYXV0aC1jYWxsYmFjaycpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVGFiIE1hbmFnZW1lbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuSW5OZXdUYWIodXJsKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmwgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWN0aXZlVGFiKCkge1xuICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICAgIHJldHVybiB0YWI7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VUb0FjdGl2ZVRhYihtZXNzYWdlKSB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgZ2V0QWN0aXZlVGFiKCk7XG4gICAgaWYgKHRhYj8uaWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUluQWN0aXZlVGFiKGZ1bmMpIHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCBnZXRBY3RpdmVUYWIoKTtcbiAgICBpZiAoIXRhYj8uaWQpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGJyb3dzZXIuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICAgICAgICAgIGZ1bmMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0c1swXT8ucmVzdWx0O1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGVudCBTY3JpcHQgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRUb0JhY2tncm91bmQobWVzc2FnZSkge1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQZXJtaXNzaW9uIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zID0gW10pIHtcbiAgICByZXR1cm4gYnJvd3Nlci5wZXJtaXNzaW9ucy5jb250YWlucyh7IHBlcm1pc3Npb25zIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb25zID0gW10pIHtcbiAgICByZXR1cm4gYnJvd3Nlci5wZXJtaXNzaW9ucy5yZXF1ZXN0KHsgcGVybWlzc2lvbnMgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgdmFyIHV0aWw7XG4oZnVuY3Rpb24gKHV0aWwpIHtcbiAgICB1dGlsLmFzc2VydEVxdWFsID0gKF8pID0+IHsgfTtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWwpICYmIE1hdGguZmxvb3IodmFsKSA9PT0gdmFsO1xuICAgIGZ1bmN0aW9uIGpvaW5WYWx1ZXMoYXJyYXksIHNlcGFyYXRvciA9IFwiIHwgXCIpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcCgodmFsKSA9PiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IGAnJHt2YWx9J2AgOiB2YWwpKS5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbmV4cG9ydCB2YXIgb2JqZWN0VXRpbDtcbihmdW5jdGlvbiAob2JqZWN0VXRpbCkge1xuICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXMgPSAoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZmlyc3QsXG4gICAgICAgICAgICAuLi5zZWNvbmQsIC8vIHNlY29uZCBvdmVyd3JpdGVzIGZpcnN0XG4gICAgICAgIH07XG4gICAgfTtcbn0pKG9iamVjdFV0aWwgfHwgKG9iamVjdFV0aWwgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmV4cG9ydCBjb25zdCBnZXRQYXJzZWRUeXBlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIGRhdGE7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZDtcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3RyaW5nO1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKGRhdGEpID8gWm9kUGFyc2VkVHlwZS5uYW4gOiBab2RQYXJzZWRUeXBlLm51bWJlcjtcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJvb2xlYW47XG4gICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZnVuY3Rpb247XG4gICAgICAgIGNhc2UgXCJiaWdpbnRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJpZ2ludDtcbiAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3ltYm9sO1xuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5udWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudGhlbiAmJiB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiYgZGF0YS5jYXRjaCAmJiB0eXBlb2YgZGF0YS5jYXRjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUucHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5tYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIFNldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBEYXRlICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm9iamVjdDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVua25vd247XG4gICAgfVxufTtcbiIsImltcG9ydCB7IHV0aWwgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWwuanNcIjtcbmV4cG9ydCBjb25zdCBab2RJc3N1ZUNvZGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcImludmFsaWRfdHlwZVwiLFxuICAgIFwiaW52YWxpZF9saXRlcmFsXCIsXG4gICAgXCJjdXN0b21cIixcbiAgICBcImludmFsaWRfdW5pb25cIixcbiAgICBcImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvclwiLFxuICAgIFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIsXG4gICAgXCJ1bnJlY29nbml6ZWRfa2V5c1wiLFxuICAgIFwiaW52YWxpZF9hcmd1bWVudHNcIixcbiAgICBcImludmFsaWRfcmV0dXJuX3R5cGVcIixcbiAgICBcImludmFsaWRfZGF0ZVwiLFxuICAgIFwiaW52YWxpZF9zdHJpbmdcIixcbiAgICBcInRvb19zbWFsbFwiLFxuICAgIFwidG9vX2JpZ1wiLFxuICAgIFwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXNcIixcbiAgICBcIm5vdF9tdWx0aXBsZV9vZlwiLFxuICAgIFwibm90X2Zpbml0ZVwiLFxuXSk7XG5leHBvcnQgY29uc3QgcXVvdGVsZXNzSnNvbiA9IChvYmopID0+IHtcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAyKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC9cIihbXlwiXSspXCI6L2csIFwiJDE6XCIpO1xufTtcbmV4cG9ydCBjbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBnZXQgZXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXM7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGlzc3Vlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZElzc3VlID0gKHN1YikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIHN1Yl07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkSXNzdWVzID0gKHN1YnMgPSBbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIC4uLnN1YnNdO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhY3R1YWxQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIGFjdHVhbFByb3RvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19wcm90b19fID0gYWN0dWFsUHJvdG87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gXCJab2RFcnJvclwiO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IGlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHN0YXRpYyBhc3NlcnQodmFsdWUpIHtcbiAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBab2RFcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGEgWm9kRXJyb3I6ICR7dmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5pc3N1ZXMsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyLCAyKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3Vlcy5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGZsYXR0ZW4obWFwcGVyID0gKGlzc3VlKSA9PiBpc3N1ZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge307XG4gICAgICAgIGNvbnN0IGZvcm1FcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5pc3N1ZXMpIHtcbiAgICAgICAgICAgIGlmIChzdWIucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RFbCA9IHN1Yi5wYXRoWzBdO1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW2ZpcnN0RWxdID0gZmllbGRFcnJvcnNbZmlyc3RFbF0gfHwgW107XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbZmlyc3RFbF0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcbiIsImltcG9ydCB7IFpvZElzc3VlQ29kZSB9IGZyb20gXCIuLi9ab2RFcnJvci5qc1wiO1xuaW1wb3J0IHsgdXRpbCwgWm9kUGFyc2VkVHlwZSB9IGZyb20gXCIuLi9oZWxwZXJzL3V0aWwuanNcIjtcbmNvbnN0IGVycm9yTWFwID0gKGlzc3VlLCBfY3R4KSA9PiB7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgc3dpdGNoIChpc3N1ZS5jb2RlKSB7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZTpcbiAgICAgICAgICAgIGlmIChpc3N1ZS5yZWNlaXZlZCA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJSZXF1aXJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBFeHBlY3RlZCAke2lzc3VlLmV4cGVjdGVkfSwgcmVjZWl2ZWQgJHtpc3N1ZS5yZWNlaXZlZH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfbGl0ZXJhbDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBsaXRlcmFsIHZhbHVlLCBleHBlY3RlZCAke0pTT04uc3RyaW5naWZ5KGlzc3VlLmV4cGVjdGVkLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlcil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVW5yZWNvZ25pemVkIGtleShzKSBpbiBvYmplY3Q6ICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLmtleXMsIFwiLCBcIil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3I6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZW51bSB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9LCByZWNlaXZlZCAnJHtpc3N1ZS5yZWNlaXZlZH0nYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiBhcmd1bWVudHNgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfcmV0dXJuX3R5cGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZnVuY3Rpb24gcmV0dXJuIHR5cGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkYXRlYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChcImluY2x1ZGVzXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgaW5jbHVkZSBcIiR7aXNzdWUudmFsaWRhdGlvbi5pbmNsdWRlc31cImA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbi5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGAke21lc3NhZ2V9IGF0IG9uZSBvciBtb3JlIHBvc2l0aW9ucyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHtpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9ufWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJzdGFydHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3Qgc3RhcnQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5zdGFydHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJlbmRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IGVuZCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmVuZHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUudmFsaWRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudmFsaWRhdGlvbiAhPT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkICR7aXNzdWUudmFsaWRhdGlvbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19zbWFsbDpcbiAgICAgICAgICAgIGlmIChpc3N1ZS50eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBBcnJheSBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBtb3JlIHRoYW5gfSAke2lzc3VlLm1pbmltdW19IGVsZW1lbnQocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFN0cmluZyBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBvdmVyYH0gJHtpc3N1ZS5taW5pbXVtfSBjaGFyYWN0ZXIocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5IGVxdWFsIHRvIGAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGAgOiBgZ3JlYXRlciB0aGFuIGB9JHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWluaW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBsZXNzIHRoYW4gb3IgZXF1YWwgdG9gIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEJpZ0ludCBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvYCA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKE51bWJlcihpc3N1ZS5tYXhpbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuY3VzdG9tOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlczpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW50ZXJzZWN0aW9uIHJlc3VsdHMgY291bGQgbm90IGJlIG1lcmdlZGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7aXNzdWUubXVsdGlwbGVPZn1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9maW5pdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJOdW1iZXIgbXVzdCBiZSBmaW5pdGVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IF9jdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZSk7XG4gICAgfVxuICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBlcnJvck1hcDtcbiIsImltcG9ydCBkZWZhdWx0RXJyb3JNYXAgZnJvbSBcIi4vbG9jYWxlcy9lbi5qc1wiO1xubGV0IG92ZXJyaWRlRXJyb3JNYXAgPSBkZWZhdWx0RXJyb3JNYXA7XG5leHBvcnQgeyBkZWZhdWx0RXJyb3JNYXAgfTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRFcnJvck1hcChtYXApIHtcbiAgICBvdmVycmlkZUVycm9yTWFwID0gbWFwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yTWFwKCkge1xuICAgIHJldHVybiBvdmVycmlkZUVycm9yTWFwO1xufVxuIiwiaW1wb3J0IHsgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgZGVmYXVsdEVycm9yTWFwIGZyb20gXCIuLi9sb2NhbGVzL2VuLmpzXCI7XG5leHBvcnQgY29uc3QgbWFrZUlzc3VlID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgcGF0aCwgZXJyb3JNYXBzLCBpc3N1ZURhdGEgfSA9IHBhcmFtcztcbiAgICBjb25zdCBmdWxsUGF0aCA9IFsuLi5wYXRoLCAuLi4oaXNzdWVEYXRhLnBhdGggfHwgW10pXTtcbiAgICBjb25zdCBmdWxsSXNzdWUgPSB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgfTtcbiAgICBpZiAoaXNzdWVEYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3QgbWFwcyA9IGVycm9yTWFwc1xuICAgICAgICAuZmlsdGVyKChtKSA9PiAhIW0pXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBtYXAgb2YgbWFwcykge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBtYXAoZnVsbElzc3VlLCB7IGRhdGEsIGRlZmF1bHRFcnJvcjogZXJyb3JNZXNzYWdlIH0pLm1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBFTVBUWV9QQVRIID0gW107XG5leHBvcnQgZnVuY3Rpb24gYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBpc3N1ZURhdGEpIHtcbiAgICBjb25zdCBvdmVycmlkZU1hcCA9IGdldEVycm9yTWFwKCk7XG4gICAgY29uc3QgaXNzdWUgPSBtYWtlSXNzdWUoe1xuICAgICAgICBpc3N1ZURhdGE6IGlzc3VlRGF0YSxcbiAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCAvLyBjb250ZXh0dWFsIGVycm9yIG1hcCBpcyBmaXJzdCBwcmlvcml0eVxuICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLCAvLyB0aGVuIHNjaGVtYS1ib3VuZCBtYXAgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBvdmVycmlkZU1hcCwgLy8gdGhlbiBnbG9iYWwgb3ZlcnJpZGUgbWFwXG4gICAgICAgICAgICBvdmVycmlkZU1hcCA9PT0gZGVmYXVsdEVycm9yTWFwID8gdW5kZWZpbmVkIDogZGVmYXVsdEVycm9yTWFwLCAvLyB0aGVuIGdsb2JhbCBkZWZhdWx0IG1hcFxuICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICB9KTtcbiAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKGlzc3VlKTtcbn1cbmV4cG9ydCBjbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBwYWlyO1xuICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKGtleS52YWx1ZSAhPT0gXCJfX3Byb3RvX19cIiAmJiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSkge1xuICAgICAgICAgICAgICAgIGZpbmFsT2JqZWN0W2tleS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsT2JqZWN0IH07XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IElOVkFMSUQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBzdGF0dXM6IFwiYWJvcnRlZFwiLFxufSk7XG5leHBvcnQgY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmV4cG9ydCBjb25zdCBPSyA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlIH0pO1xuZXhwb3J0IGNvbnN0IGlzQWJvcnRlZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCI7XG5leHBvcnQgY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuZXhwb3J0IGNvbnN0IGlzVmFsaWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwidmFsaWRcIjtcbmV4cG9ydCBjb25zdCBpc0FzeW5jID0gKHgpID0+IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuIiwiZXhwb3J0IHZhciBlcnJvclV0aWw7XG4oZnVuY3Rpb24gKGVycm9yVXRpbCkge1xuICAgIGVycm9yVXRpbC5lcnJUb09iaiA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZSB9IDogbWVzc2FnZSB8fCB7fTtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludDpcbiAgICBlcnJvclV0aWwudG9TdHJpbmcgPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyBtZXNzYWdlIDogbWVzc2FnZT8ubWVzc2FnZTtcbn0pKGVycm9yVXRpbCB8fCAoZXJyb3JVdGlsID0ge30pKTtcbiIsImltcG9ydCB7IFpvZEVycm9yLCBab2RJc3N1ZUNvZGUsIH0gZnJvbSBcIi4vWm9kRXJyb3IuanNcIjtcbmltcG9ydCB7IGRlZmF1bHRFcnJvck1hcCwgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCB7IGVycm9yVXRpbCB9IGZyb20gXCIuL2hlbHBlcnMvZXJyb3JVdGlsLmpzXCI7XG5pbXBvcnQgeyBESVJUWSwgSU5WQUxJRCwgT0ssIFBhcnNlU3RhdHVzLCBhZGRJc3N1ZVRvQ29udGV4dCwgaXNBYm9ydGVkLCBpc0FzeW5jLCBpc0RpcnR5LCBpc1ZhbGlkLCBtYWtlSXNzdWUsIH0gZnJvbSBcIi4vaGVscGVycy9wYXJzZVV0aWwuanNcIjtcbmltcG9ydCB7IHV0aWwsIFpvZFBhcnNlZFR5cGUsIGdldFBhcnNlZFR5cGUgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWwuanNcIjtcbmNsYXNzIFBhcnNlSW5wdXRMYXp5UGF0aCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB2YWx1ZSwgcGF0aCwga2V5KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlZFBhdGggPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgIH1cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZWRQYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZFBhdGgucHVzaCguLi50aGlzLl9wYXRoLCAuLi50aGlzLl9rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIHRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhdGg7XG4gICAgfVxufVxuY29uc3QgaGFuZGxlUmVzdWx0ID0gKGN0eCwgcmVzdWx0KSA9PiB7XG4gICAgaWYgKGlzVmFsaWQocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQudmFsdWUgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIGZhaWxlZCBidXQgbm8gaXNzdWVzIGRldGVjdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuZnVuY3Rpb24gcHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIGNvbnN0IHsgZXJyb3JNYXAsIGludmFsaWRfdHlwZV9lcnJvciwgcmVxdWlyZWRfZXJyb3IsIGRlc2NyaXB0aW9uIH0gPSBwYXJhbXM7XG4gICAgaWYgKGVycm9yTWFwICYmIChpbnZhbGlkX3R5cGVfZXJyb3IgfHwgcmVxdWlyZWRfZXJyb3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgdXNlIFwiaW52YWxpZF90eXBlX2Vycm9yXCIgb3IgXCJyZXF1aXJlZF9lcnJvclwiIGluIGNvbmp1bmN0aW9uIHdpdGggY3VzdG9tIGVycm9yIG1hcC5gKTtcbiAgICB9XG4gICAgaWYgKGVycm9yTWFwKVxuICAgICAgICByZXR1cm4geyBlcnJvck1hcDogZXJyb3JNYXAsIGRlc2NyaXB0aW9uIH07XG4gICAgY29uc3QgY3VzdG9tTWFwID0gKGlzcywgY3R4KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gcGFyYW1zO1xuICAgICAgICBpZiAoaXNzLmNvZGUgPT09IFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gcmVxdWlyZWRfZXJyb3IgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc3MuY29kZSAhPT0gXCJpbnZhbGlkX3R5cGVcIilcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyBpbnZhbGlkX3R5cGVfZXJyb3IgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgIH07XG4gICAgcmV0dXJuIHsgZXJyb3JNYXA6IGN1c3RvbU1hcCwgZGVzY3JpcHRpb24gfTtcbn1cbmV4cG9ydCBjbGFzcyBab2RUeXBlIHtcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIF9nZXRUeXBlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBfZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCkge1xuICAgICAgICByZXR1cm4gKGN0eCB8fCB7XG4gICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IG5ldyBQYXJzZVN0YXR1cygpLFxuICAgICAgICAgICAgY3R4OiB7XG4gICAgICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcGFyc2VTeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3luY2hyb25vdXMgcGFyc2UgZW5jb3VudGVyZWQgcHJvbWlzZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX3BhcnNlQXN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfVxuICAgIHBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNhZmVQYXJzZShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgc2FmZVBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBwYXJhbXM/LmFzeW5jID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zPy5lcnJvck1hcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBwYXJhbXM/LnBhdGggfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIFwifnZhbGlkYXRlXCIoZGF0YSkge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAhIXRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZVN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnI/Lm1lc3NhZ2U/LnRvTG93ZXJDYXNlKCk/LmluY2x1ZGVzKFwiZW5jb3VudGVyZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jb21tb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSkudGhlbigocmVzdWx0KSA9PiBpc1ZhbGlkKHJlc3VsdClcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zPy5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBwYXJhbXM/LnBhdGggfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdCkgPyBtYXliZUFzeW5jUmVzdWx0IDogUHJvbWlzZS5yZXNvbHZlKG1heWJlQXN5bmNSZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIHJlZmluZShjaGVjaywgbWVzc2FnZSkge1xuICAgICAgICBjb25zdCBnZXRJc3N1ZVByb3BlcnRpZXMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudCgodmFsLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrKHZhbCk7XG4gICAgICAgICAgICBjb25zdCBzZXRFcnJvciA9ICgpID0+IGN0eC5hZGRJc3N1ZSh7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmN1c3RvbSxcbiAgICAgICAgICAgICAgICAuLi5nZXRJc3N1ZVByb3BlcnRpZXModmFsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZmluZW1lbnQoY2hlY2ssIHJlZmluZW1lbnREYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayh2YWwpKSB7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHR5cGVvZiByZWZpbmVtZW50RGF0YSA9PT0gXCJmdW5jdGlvblwiID8gcmVmaW5lbWVudERhdGEodmFsLCBjdHgpIDogcmVmaW5lbWVudERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlZmluZW1lbnQocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicmVmaW5lbWVudFwiLCByZWZpbmVtZW50IH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdXBlclJlZmluZShyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KHJlZmluZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihkZWYpIHtcbiAgICAgICAgLyoqIEFsaWFzIG9mIHNhZmVQYXJzZUFzeW5jICovXG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zYWZlUGFyc2VBc3luYztcbiAgICAgICAgdGhpcy5fZGVmID0gZGVmO1xuICAgICAgICB0aGlzLnBhcnNlID0gdGhpcy5wYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZSA9IHRoaXMuc2FmZVBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFyc2VBc3luYyA9IHRoaXMucGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZUFzeW5jID0gdGhpcy5zYWZlUGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc3BhLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lID0gdGhpcy5yZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmVtZW50ID0gdGhpcy5yZWZpbmVtZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VwZXJSZWZpbmUgPSB0aGlzLnN1cGVyUmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSB0aGlzLm9wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGFibGUgPSB0aGlzLm51bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGlzaCA9IHRoaXMubnVsbGlzaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLnByb21pc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vciA9IHRoaXMub3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmQgPSB0aGlzLmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJhbmQgPSB0aGlzLmJyYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IHRoaXMuZGVmYXVsdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhdGNoID0gdGhpcy5jYXRjaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlID0gdGhpcy5kZXNjcmliZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBpcGUgPSB0aGlzLnBpcGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IHRoaXMucmVhZG9ubHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc051bGxhYmxlID0gdGhpcy5pc051bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNPcHRpb25hbCA9IHRoaXMuaXNPcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdID0ge1xuICAgICAgICAgICAgdmVyc2lvbjogMSxcbiAgICAgICAgICAgIHZlbmRvcjogXCJ6b2RcIixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoZGF0YSkgPT4gdGhpc1tcIn52YWxpZGF0ZVwiXShkYXRhKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVsbGFibGUoKS5vcHRpb25hbCgpO1xuICAgIH1cbiAgICBhcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZEFycmF5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFByb21pc2UuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG9yKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gWm9kVW5pb24uY3JlYXRlKFt0aGlzLCBvcHRpb25dLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBhbmQoaW5jb21pbmcpIHtcbiAgICAgICAgcmV0dXJuIFpvZEludGVyc2VjdGlvbi5jcmVhdGUodGhpcywgaW5jb21pbmcsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQoZGVmKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicmFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCcmFuZGVkKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChkZWYpIHtcbiAgICAgICAgY29uc3QgY2F0Y2hWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgaW5uZXJUeXBlOiB0aGlzLFxuICAgICAgICAgICAgY2F0Y2hWYWx1ZTogY2F0Y2hWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzY3JpYmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgVGhpcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgVGhpcyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpcGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBab2RQaXBlbGluZS5jcmVhdGUodGhpcywgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmVhZG9ubHkoKSB7XG4gICAgICAgIHJldHVybiBab2RSZWFkb25seS5jcmVhdGUodGhpcyk7XG4gICAgfVxuICAgIGlzT3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZSh1bmRlZmluZWQpLnN1Y2Nlc3M7XG4gICAgfVxuICAgIGlzTnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZShudWxsKS5zdWNjZXNzO1xuICAgIH1cbn1cbmNvbnN0IGN1aWRSZWdleCA9IC9eY1teXFxzLV17OCx9JC9pO1xuY29uc3QgY3VpZDJSZWdleCA9IC9eWzAtOWEtel0rJC87XG5jb25zdCB1bGlkUmVnZXggPSAvXlswLTlBLUhKS01OUC1UVi1aXXsyNn0kL2k7XG4vLyBjb25zdCB1dWlkUmVnZXggPVxuLy8gICAvXihbYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bMS01XVthLWYwLTldezN9LVthLWYwLTldezR9LVthLWYwLTldezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuY29uc3QgdXVpZFJlZ2V4ID0gL15bMC05YS1mQS1GXXs4fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXsxMn0kL2k7XG5jb25zdCBuYW5vaWRSZWdleCA9IC9eW2EtejAtOV8tXXsyMX0kL2k7XG5jb25zdCBqd3RSZWdleCA9IC9eW0EtWmEtejAtOS1fXStcXC5bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10qJC87XG5jb25zdCBkdXJhdGlvblJlZ2V4ID0gL15bLStdP1AoPyEkKSg/Oig/OlstK10/XFxkK1kpfCg/OlstK10/XFxkK1suLF1cXGQrWSQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86KD86Wy0rXT9cXGQrVyl8KD86Wy0rXT9cXGQrWy4sXVxcZCtXJCkpPyg/Oig/OlstK10/XFxkK0QpfCg/OlstK10/XFxkK1suLF1cXGQrRCQpKT8oPzpUKD89W1xcZCstXSkoPzooPzpbLStdP1xcZCtIKXwoPzpbLStdP1xcZCtbLixdXFxkK0gkKSk/KD86KD86Wy0rXT9cXGQrTSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtNJCkpPyg/OlstK10/XFxkKyg/OlsuLF1cXGQrKT9TKT8pPz8kLztcbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2MTgxLzE1NTAxNTVcbi8vIG9sZCB2ZXJzaW9uOiB0b28gc2xvdywgZGlkbid0IHN1cHBvcnQgdW5pY29kZVxuLy8gY29uc3QgZW1haWxSZWdleCA9IC9eKCgoW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKyhcXC4oW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKykqKXwoKFxceDIyKSgoKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KChbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3Zl18XFx4MjF8W1xceDIzLVxceDViXXxbXFx4NWQtXFx4N2VdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoXFxcXChbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpKSooKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KFxceDIyKSkpQCgoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSQvaTtcbi8vb2xkIGVtYWlsIHJlZ2V4XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF0uLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXS4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKCg/IS0pKFtePD4oKVtcXF0uLDs6XFxzQFwiXStcXC4pK1tePD4oKVtcXF0uLDs6XFxzQFwiXXsxLH0pW14tPD4oKVtcXF0uLDs6XFxzQFwiXSQvaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcWygoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcXSl8KFxcW0lQdjY6KChbYS1mMC05XXsxLDR9Oil7N318OjooW2EtZjAtOV17MSw0fTopezAsNn18KFthLWYwLTldezEsNH06KXsxfTooW2EtZjAtOV17MSw0fTopezAsNX18KFthLWYwLTldezEsNH06KXsyfTooW2EtZjAtOV17MSw0fTopezAsNH18KFthLWYwLTldezEsNH06KXszfTooW2EtZjAtOV17MSw0fTopezAsM318KFthLWYwLTldezEsNH06KXs0fTooW2EtZjAtOV17MSw0fTopezAsMn18KFthLWYwLTldezEsNH06KXs1fTooW2EtZjAtOV17MSw0fTopezAsMX0pKFthLWYwLTldezEsNH18KCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpKVxcXSl8KFtBLVphLXowLTldKFtBLVphLXowLTktXSpbQS1aYS16MC05XSkqKFxcLltBLVphLXpdezIsfSkrKSkkLztcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXpBLVowLTlcXC5cXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC9cXD1cXD9cXF5cXF9cXGBcXHtcXHxcXH1cXH5cXC1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkkL2k7XG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oPyFcXC4pKD8hLipcXC5cXC4pKFtBLVowLTlfJytcXC1cXC5dKilbQS1aMC05XystXUAoW0EtWjAtOV1bQS1aMC05XFwtXSpcXC4pK1tBLVpdezIsfSQvaTtcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtejAtOS1dKyg/OlxcLlthLXowLTlcXC1dKykqJC9pO1xuLy8gZnJvbSBodHRwczovL3RoZWtldmluc2NvdHQuY29tL2Vtb2ppcy1pbi1qYXZhc2NyaXB0LyN3cml0aW5nLWEtcmVndWxhci1leHByZXNzaW9uXG5jb25zdCBfZW1vamlSZWdleCA9IGBeKFxcXFxwe0V4dGVuZGVkX1BpY3RvZ3JhcGhpY318XFxcXHB7RW1vamlfQ29tcG9uZW50fSkrJGA7XG5sZXQgZW1vamlSZWdleDtcbi8vIGZhc3Rlciwgc2ltcGxlciwgc2FmZXJcbmNvbnN0IGlwdjRSZWdleCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pJC87XG5jb25zdCBpcHY0Q2lkclJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC8oM1swLTJdfFsxMl0/WzAtOV0pJC87XG4vLyBjb25zdCBpcHY2UmVnZXggPVxuLy8gL14oKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpJC87XG5jb25zdCBpcHY2UmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSkkLztcbmNvbnN0IGlwdjZDaWRyUmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSlcXC8oMTJbMC04XXwxWzAxXVswLTldfFsxLTldP1swLTldKSQvO1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzg2MDM5Mi9kZXRlcm1pbmUtaWYtc3RyaW5nLWlzLWluLWJhc2U2NC11c2luZy1qYXZhc2NyaXB0XG5jb25zdCBiYXNlNjRSZWdleCA9IC9eKFswLTlhLXpBLVorL117NH0pKigoWzAtOWEtekEtWisvXXsyfT09KXwoWzAtOWEtekEtWisvXXszfT0pKT8kLztcbi8vIGh0dHBzOi8vYmFzZTY0Lmd1cnUvc3RhbmRhcmRzL2Jhc2U2NHVybFxuY29uc3QgYmFzZTY0dXJsUmVnZXggPSAvXihbMC05YS16QS1aLV9dezR9KSooKFswLTlhLXpBLVotX117Mn0oPT0pPyl8KFswLTlhLXpBLVotX117M30oPSk/KSk/JC87XG4vLyBzaW1wbGVcbi8vIGNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGBcXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfWA7XG4vLyBubyBsZWFwIHllYXIgdmFsaWRhdGlvblxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LSgoMFsxMzU3OF18MTB8MTIpLTMxfCgwWzEzLTldfDFbMC0yXSktMzB8KDBbMS05XXwxWzAtMl0pLSgwWzEtOV18MVxcXFxkfDJcXFxcZCkpYDtcbi8vIHdpdGggbGVhcCB5ZWFyIHZhbGlkYXRpb25cbmNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGAoKFxcXFxkXFxcXGRbMjQ2OF1bMDQ4XXxcXFxcZFxcXFxkWzEzNTc5XVsyNl18XFxcXGRcXFxcZDBbNDhdfFswMjQ2OF1bMDQ4XTAwfFsxMzU3OV1bMjZdMDApLTAyLTI5fFxcXFxkezR9LSgoMFsxMzU3OF18MVswMl0pLSgwWzEtOV18WzEyXVxcXFxkfDNbMDFdKXwoMFs0NjldfDExKS0oMFsxLTldfFsxMl1cXFxcZHwzMCl8KDAyKS0oMFsxLTldfDFcXFxcZHwyWzAtOF0pKSlgO1xuY29uc3QgZGF0ZVJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7ZGF0ZVJlZ2V4U291cmNlfSRgKTtcbmZ1bmN0aW9uIHRpbWVSZWdleFNvdXJjZShhcmdzKSB7XG4gICAgbGV0IHNlY29uZHNSZWdleFNvdXJjZSA9IGBbMC01XVxcXFxkYDtcbiAgICBpZiAoYXJncy5wcmVjaXNpb24pIHtcbiAgICAgICAgc2Vjb25kc1JlZ2V4U291cmNlID0gYCR7c2Vjb25kc1JlZ2V4U291cmNlfVxcXFwuXFxcXGR7JHthcmdzLnByZWNpc2lvbn19YDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5wcmVjaXNpb24gPT0gbnVsbCkge1xuICAgICAgICBzZWNvbmRzUmVnZXhTb3VyY2UgPSBgJHtzZWNvbmRzUmVnZXhTb3VyY2V9KFxcXFwuXFxcXGQrKT9gO1xuICAgIH1cbiAgICBjb25zdCBzZWNvbmRzUXVhbnRpZmllciA9IGFyZ3MucHJlY2lzaW9uID8gXCIrXCIgOiBcIj9cIjsgLy8gcmVxdWlyZSBzZWNvbmRzIGlmIHByZWNpc2lvbiBpcyBub256ZXJvXG4gICAgcmV0dXJuIGAoWzAxXVxcXFxkfDJbMC0zXSk6WzAtNV1cXFxcZCg6JHtzZWNvbmRzUmVnZXhTb3VyY2V9KSR7c2Vjb25kc1F1YW50aWZpZXJ9YDtcbn1cbmZ1bmN0aW9uIHRpbWVSZWdleChhcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3RpbWVSZWdleFNvdXJjZShhcmdzKX0kYCk7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmV4cG9ydCBmdW5jdGlvbiBkYXRldGltZVJlZ2V4KGFyZ3MpIHtcbiAgICBsZXQgcmVnZXggPSBgJHtkYXRlUmVnZXhTb3VyY2V9VCR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfWA7XG4gICAgY29uc3Qgb3B0cyA9IFtdO1xuICAgIG9wdHMucHVzaChhcmdzLmxvY2FsID8gYFo/YCA6IGBaYCk7XG4gICAgaWYgKGFyZ3Mub2Zmc2V0KVxuICAgICAgICBvcHRzLnB1c2goYChbKy1dXFxcXGR7Mn06P1xcXFxkezJ9KWApO1xuICAgIHJlZ2V4ID0gYCR7cmVnZXh9KCR7b3B0cy5qb2luKFwifFwiKX0pYDtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApO1xufVxuZnVuY3Rpb24gaXNWYWxpZElQKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY2XCIgfHwgIXZlcnNpb24pICYmIGlwdjZSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNWYWxpZEpXVChqd3QsIGFsZykge1xuICAgIGlmICghand0UmVnZXgudGVzdChqd3QpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW2hlYWRlcl0gPSBqd3Quc3BsaXQoXCIuXCIpO1xuICAgICAgICBpZiAoIWhlYWRlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gQ29udmVydCBiYXNlNjR1cmwgdG8gYmFzZTY0XG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IGhlYWRlclxuICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgXCIrXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIilcbiAgICAgICAgICAgIC5wYWRFbmQoaGVhZGVyLmxlbmd0aCArICgoNCAtIChoZWFkZXIubGVuZ3RoICUgNCkpICUgNCksIFwiPVwiKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IEpTT04ucGFyc2UoYXRvYihiYXNlNjQpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWNvZGVkICE9PSBcIm9iamVjdFwiIHx8IGRlY29kZWQgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChcInR5cFwiIGluIGRlY29kZWQgJiYgZGVjb2RlZD8udHlwICE9PSBcIkpXVFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIWRlY29kZWQuYWxnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYWxnICYmIGRlY29kZWQuYWxnICE9PSBhbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1ZhbGlkQ2lkcihpcCwgdmVyc2lvbikge1xuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NFwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY0Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NkNpZHJSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGNsYXNzIFpvZFN0cmluZyBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IFN0cmluZyhpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmxlbmd0aCA+IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBpbnB1dC5kYXRhLmxlbmd0aCA+IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gaW5wdXQuZGF0YS5sZW5ndGggPCBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnIHx8IHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1haWxcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVtb2ppXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZW1vamlSZWdleCA9IG5ldyBSZWdFeHAoX2Vtb2ppUmVnZXgsIFwidVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlbW9qaVJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbW9qaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXVpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInV1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm5hbm9pZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuYW5vaWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwibmFub2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY3VpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY3VpZDJcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZDJSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY3VpZDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVsaWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdWxpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1bGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1cmxcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBVUkwoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBjaGVjay5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXN1bHQgPSBjaGVjay5yZWdleC50ZXN0KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICghdGVzdFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0cmltXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImluY2x1ZGVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuaW5jbHVkZXMoY2hlY2sudmFsdWUsIGNoZWNrLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGluY2x1ZGVzOiBjaGVjay52YWx1ZSwgcG9zaXRpb246IGNoZWNrLnBvc2l0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0b0xvd2VyQ2FzZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidG9VcHBlckNhc2VcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInN0YXJ0c1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5zdGFydHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IHN0YXJ0c1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbmRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmVuZHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGVuZHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZXRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImRhdGVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZVJlZ2V4O1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkdXJhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkdXJhdGlvblJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkdXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiaXBcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZElQKGlucHV0LmRhdGEsIGNoZWNrLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImp3dFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkSldUKGlucHV0LmRhdGEsIGNoZWNrLmFsZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJqd3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImNpZHJcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZENpZHIoaW5wdXQuZGF0YSwgY2hlY2sudmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjaWRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJiYXNlNjRcIikge1xuICAgICAgICAgICAgICAgIGlmICghYmFzZTY0UmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImJhc2U2NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NHVybFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJiYXNlNjR1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX3JlZ2V4KHJlZ2V4LCB2YWxpZGF0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZmluZW1lbnQoKGRhdGEpID0+IHJlZ2V4LnRlc3QoZGF0YSksIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24sXG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1haWwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtYWlsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1cmxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBlbW9qaShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZW1vamlcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1dWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1dWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgbmFub2lkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJuYW5vaWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjdWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZDIobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWQyXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdWxpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidWxpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGJhc2U2NChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiYmFzZTY0XCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgYmFzZTY0dXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gYmFzZTY0dXJsIGVuY29kaW5nIGlzIGEgbW9kaWZpY2F0aW9uIG9mIGJhc2U2NCB0aGF0IGNhbiBzYWZlbHkgYmUgdXNlZCBpbiBVUkxzIGFuZCBmaWxlbmFtZXNcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiYmFzZTY0dXJsXCIsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBqd3Qob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImp3dFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGlwKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJpcFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGNpZHIob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImNpZHJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBkYXRldGltZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgICAgICBraW5kOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIG9mZnNldDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9jYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2Ygb3B0aW9ucz8ucHJlY2lzaW9uID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnM/LnByZWNpc2lvbixcbiAgICAgICAgICAgIG9mZnNldDogb3B0aW9ucz8ub2Zmc2V0ID8/IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWw6IG9wdGlvbnM/LmxvY2FsID8/IGZhbHNlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGF0ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZGF0ZVwiLCBtZXNzYWdlIH0pO1xuICAgIH1cbiAgICB0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwidGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwidGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2Ygb3B0aW9ucz8ucHJlY2lzaW9uID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnM/LnByZWNpc2lvbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zPy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGR1cmF0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkdXJhdGlvblwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHJlZ2V4KHJlZ2V4LCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbmNsdWRlcyh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbmNsdWRlc1wiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgcG9zaXRpb246IG9wdGlvbnM/LnBvc2l0aW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJzdGFydHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbmRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJlbmRzV2l0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5MZW5ndGgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heExlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibGVuZ3RoXCIsXG4gICAgICAgICAgICB2YWx1ZTogbGVuLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXF1aXZhbGVudCB0byBgLm1pbigxKWBcbiAgICAgKi9cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkpO1xuICAgIH1cbiAgICB0cmltKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidHJpbVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9Mb3dlckNhc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0b0xvd2VyQ2FzZVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9VcHBlckNhc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0b1VwcGVyQ2FzZVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZXRpbWUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZXRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0RhdGUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ0aW1lXCIpO1xuICAgIH1cbiAgICBnZXQgaXNEdXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkdXJhdGlvblwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1haWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1haWxcIik7XG4gICAgfVxuICAgIGdldCBpc1VSTCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1cmxcIik7XG4gICAgfVxuICAgIGdldCBpc0Vtb2ppKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImVtb2ppXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVVUlEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInV1aWRcIik7XG4gICAgfVxuICAgIGdldCBpc05BTk9JRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJuYW5vaWRcIik7XG4gICAgfVxuICAgIGdldCBpc0NVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRDIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZDJcIik7XG4gICAgfVxuICAgIGdldCBpc1VMSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidWxpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzSVAoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaXBcIik7XG4gICAgfVxuICAgIGdldCBpc0NJRFIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY2lkclwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQmFzZTY0KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImJhc2U2NFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQmFzZTY0dXJsKCkge1xuICAgICAgICAvLyBiYXNlNjR1cmwgZW5jb2RpbmcgaXMgYSBtb2RpZmljYXRpb24gb2YgYmFzZTY0IHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGluIFVSTHMgYW5kIGZpbGVuYW1lc1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImJhc2U2NHVybFwiKTtcbiAgICB9XG4gICAgZ2V0IG1pbkxlbmd0aCgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4TGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxufVxuWm9kU3RyaW5nLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3RyaW5nLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlID8/IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2NjQ4NC93aHktZG9lcy1tb2R1bHVzLW9wZXJhdG9yLXJldHVybi1mcmFjdGlvbmFsLW51bWJlci1pbi1qYXZhc2NyaXB0LzMxNzExMDM0IzMxNzExMDM0XG5mdW5jdGlvbiBmbG9hdFNhZmVSZW1haW5kZXIodmFsLCBzdGVwKSB7XG4gICAgY29uc3QgdmFsRGVjQ291bnQgPSAodmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBzdGVwRGVjQ291bnQgPSAoc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3QgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICAgIGNvbnN0IHZhbEludCA9IE51bWJlci5wYXJzZUludCh2YWwudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIGNvbnN0IHN0ZXBJbnQgPSBOdW1iZXIucGFyc2VJbnQoc3RlcC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgcmV0dXJuICh2YWxJbnQgJSBzdGVwSW50KSAvIDEwICoqIGRlY0NvdW50O1xufVxuZXhwb3J0IGNsYXNzIFpvZE51bWJlciBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1pbiA9IHRoaXMuZ3RlO1xuICAgICAgICB0aGlzLm1heCA9IHRoaXMubHRlO1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLm11bHRpcGxlT2Y7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IE51bWJlcihpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udW1iZXIsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJpbnRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdXRpbC5pc0ludGVnZXIoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBcImludGVnZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA8IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA8PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhID4gY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhID49IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIGlmIChmbG9hdFNhZmVSZW1haW5kZXIoaW5wdXQuZGF0YSwgY2hlY2sudmFsdWUpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImZpbml0ZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9maW5pdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGd0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZ3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2V0TGltaXQoa2luZCwgdmFsdWUsIGluY2x1c2l2ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuY2hlY2tzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImludFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25uZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtdWx0aXBsZU9mKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbml0ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImZpbml0ZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2FmZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KS5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgZ2V0IGlzSW50KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImludFwiIHx8IChjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIiAmJiB1dGlsLmlzSW50ZWdlcihjaC52YWx1ZSkpKTtcbiAgICB9XG4gICAgZ2V0IGlzRmluaXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwiZmluaXRlXCIgfHwgY2gua2luZCA9PT0gXCJpbnRcIiB8fCBjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobWluKSAmJiBOdW1iZXIuaXNGaW5pdGUobWF4KTtcbiAgICB9XG59XG5ab2ROdW1iZXIuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdW1iZXIsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQmlnSW50IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gQmlnSW50KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYmlnaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW52YWxpZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA8IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA8PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhID4gY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhID49IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJpZ2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhICUgY2hlY2sudmFsdWUgIT09IEJpZ0ludCgwKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVPZjogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIF9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5iaWdpbnQsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ucG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25uZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxufVxuWm9kQmlnSW50LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQmlnSW50LFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlID8/IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEJvb2xlYW4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCb29sZWFuKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYm9vbGVhbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5ib29sZWFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEJvb2xlYW4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQm9vbGVhbih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQm9vbGVhbixcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2REYXRlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gbmV3IERhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5kYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmRhdGUsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGlucHV0LmRhdGEuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPCBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEuZ2V0VGltZSgpID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShpbnB1dC5kYXRhLmdldFRpbWUoKSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZERhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkRhdGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogbWluRGF0ZS5nZXRUaW1lKCksXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4RGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBtYXhEYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5EYXRlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW4gIT0gbnVsbCA/IG5ldyBEYXRlKG1pbikgOiBudWxsO1xuICAgIH1cbiAgICBnZXQgbWF4RGF0ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4ICE9IG51bGwgPyBuZXcgRGF0ZShtYXgpIDogbnVsbDtcbiAgICB9XG59XG5ab2REYXRlLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERhdGUoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlIHx8IGZhbHNlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERhdGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kU3ltYm9sIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3ltYm9sKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RTeW1ib2wuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU3ltYm9sKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTeW1ib2wsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5kZWZpbmVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmRlZmluZWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5kZWZpbmVkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmRlZmluZWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTnVsbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVsbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2ROdWxsLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGwoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQW55IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHRvIHByZXZlbnQgaW5zdGFuY2VzIG9mIG90aGVyIGNsYXNzZXMgZnJvbSBleHRlbmRpbmcgWm9kQW55LiB0aGlzIGNhdXNlcyBpc3N1ZXMgd2l0aCBjYXRjaGFsbCBpbiBab2RPYmplY3QuXG4gICAgICAgIHRoaXMuX2FueSA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQW55LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEFueSh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQW55LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFVua25vd24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gcmVxdWlyZWRcbiAgICAgICAgdGhpcy5fdW5rbm93biA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5rbm93bi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmtub3duKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmtub3duLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE5ldmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmV2ZXIsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG59XG5ab2ROZXZlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROZXZlcih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmV2ZXIsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVm9pZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS52b2lkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFZvaWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVm9pZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVm9pZCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RBcnJheSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCwgc3RhdHVzIH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYuZXhhY3RMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY3R4LmRhdGEubGVuZ3RoIDwgZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRvb0JpZyB8fCB0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiB0b29CaWcgPyBab2RJc3N1ZUNvZGUudG9vX2JpZyA6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06ICh0b29TbWFsbCA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06ICh0b29CaWcgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5leGFjdExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWluTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgZGVmLm1pbkxlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluTGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluTGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPiBkZWYubWF4TGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4TGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VBc3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgICAgIH0pKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZVN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IG1pbkxlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiBtYXhMZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGV4YWN0TGVuZ3RoOiB7IHZhbHVlOiBsZW4sIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kQXJyYXkuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgbWluTGVuZ3RoOiBudWxsLFxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgICAgIGV4YWN0TGVuZ3RoOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFycmF5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnNjaGVtYS5fZGVmLFxuICAgICAgICAgICAgdHlwZTogZGVlcFBhcnRpYWxpZnkoc2NoZW1hLmVsZW1lbnQpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kVHVwbGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZFR1cGxlLmNyZWF0ZShzY2hlbWEuaXRlbXMubWFwKChpdGVtKSA9PiBkZWVwUGFydGlhbGlmeShpdGVtKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kT2JqZWN0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBJbiBtb3N0IGNhc2VzLCB0aGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgLSB1bmtub3duIHByb3BlcnRpZXMgYXJlIG5vdyBzaWxlbnRseSBzdHJpcHBlZC5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gcGFzcyB0aHJvdWdoIHVua25vd24gcHJvcGVydGllcywgdXNlIGAucGFzc3Rocm91Z2goKWAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uc3RyaWN0ID0gdGhpcy5wYXNzdGhyb3VnaDtcbiAgICAgICAgLy8gZXh0ZW5kPFxuICAgICAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlLFxuICAgICAgICAvLyAgIE5ld091dHB1dCBleHRlbmRzIHV0aWwuZmxhdHRlbjx7XG4gICAgICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBPdXRwdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX291dHB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAgICAgLy8gICAgICAgPyBPdXRwdXRba11cbiAgICAgICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAgICAgLy8gICB9PixcbiAgICAgICAgLy8gICBOZXdJbnB1dCBleHRlbmRzIHV0aWwuZmxhdHRlbjx7XG4gICAgICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBJbnB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfaW5wdXRcIl1cbiAgICAgICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAgICAgLy8gICAgICAgPyBJbnB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+XG4gICAgICAgIC8vID4oXG4gICAgICAgIC8vICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gKTogWm9kT2JqZWN0PFxuICAgICAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIEF1Z21lbnRhdGlvbj4sXG4gICAgICAgIC8vICAgVW5rbm93bktleXMsXG4gICAgICAgIC8vICAgQ2F0Y2hhbGwsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0LFxuICAgICAgICAvLyAgIE5ld0lucHV0XG4gICAgICAgIC8vID4ge1xuICAgICAgICAvLyAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgLy8gICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgLy8gICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAvLyAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgLy8gICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgfSkgYXMgYW55O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYC5leHRlbmRgIGluc3RlYWRcbiAgICAgICAgICogICovXG4gICAgICAgIHRoaXMuYXVnbWVudCA9IHRoaXMuZXh0ZW5kO1xuICAgIH1cbiAgICBfZ2V0Q2FjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVkICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IHV0aWwub2JqZWN0S2V5cyhzaGFwZSk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IHsgc2hhcGUsIGtleXMgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGtleXM6IHNoYXBlS2V5cyB9ID0gdGhpcy5fZ2V0Q2FjaGVkKCk7XG4gICAgICAgIGNvbnN0IGV4dHJhS2V5cyA9IFtdO1xuICAgICAgICBpZiAoISh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlciAmJiB0aGlzLl9kZWYudW5rbm93bktleXMgPT09IFwic3RyaXBcIikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGFwZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFwZUtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbGlkYXRvciA9IHNoYXBlW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICB2YWx1ZToga2V5VmFsaWRhdG9yLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlcikge1xuICAgICAgICAgICAgY29uc3QgdW5rbm93bktleXMgPSB0aGlzLl9kZWYudW5rbm93bktleXM7XG4gICAgICAgICAgICBpZiAodW5rbm93bktleXMgPT09IFwicGFzc3Rocm91Z2hcIikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBjdHguZGF0YVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmljdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogZXh0cmFLZXlzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaXBcIikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBab2RPYmplY3QgZXJyb3I6IGludmFsaWQgdW5rbm93bktleXMgdmFsdWUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBydW4gY2F0Y2hhbGwgdmFsaWRhdGlvblxuICAgICAgICAgICAgY29uc3QgY2F0Y2hhbGwgPSB0aGlzLl9kZWYuY2F0Y2hhbGw7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0Y2hhbGwuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkgLy8sIGN0eC5jaGlsZChrZXkpLCB2YWx1ZSwgZ2V0UGFyc2VkVHlwZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IHBhaXIuYWx3YXlzU2V0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bmNQYWlycztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHN5bmNQYWlycykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzaGFwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgIH1cbiAgICBzdHJpY3QobWVzc2FnZSkge1xuICAgICAgICBlcnJvclV0aWwuZXJyVG9PYmo7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICAgICAgLi4uKG1lc3NhZ2UgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcDogKGlzc3VlLCBjdHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRFcnJvciA9IHRoaXMuX2RlZi5lcnJvck1hcD8uKGlzc3VlLCBjdHgpLm1lc3NhZ2UgPz8gY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcInVucmVjb2duaXplZF9rZXlzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLm1lc3NhZ2UgPz8gZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge30pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RyaXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwYXNzdGhyb3VnaCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwicGFzc3Rocm91Z2hcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNvbnN0IEF1Z21lbnRGYWN0b3J5ID1cbiAgICAvLyAgIDxEZWYgZXh0ZW5kcyBab2RPYmplY3REZWY+KGRlZjogRGVmKSA9PlxuICAgIC8vICAgPEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlPihcbiAgICAvLyAgICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAvLyAgICk6IFpvZE9iamVjdDxcbiAgICAvLyAgICAgZXh0ZW5kU2hhcGU8UmV0dXJuVHlwZTxEZWZbXCJzaGFwZVwiXT4sIEF1Z21lbnRhdGlvbj4sXG4gICAgLy8gICAgIERlZltcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgICBEZWZbXCJjYXRjaGFsbFwiXVxuICAgIC8vICAgPiA9PiB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgICAuLi5kZWYsXG4gICAgLy8gICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgLy8gICAgICAgICAuLi5kZWYuc2hhcGUoKSxcbiAgICAvLyAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAvLyAgICAgICB9KSxcbiAgICAvLyAgICAgfSkgYXMgYW55O1xuICAgIC8vICAgfTtcbiAgICBleHRlbmQoYXVnbWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJpb3IgdG8gem9kQDEuMC4xMiB0aGVyZSB3YXMgYSBidWcgaW4gdGhlXG4gICAgICogaW5mZXJyZWQgdHlwZSBvZiBtZXJnZWQgb2JqZWN0cy4gUGxlYXNlXG4gICAgICogdXBncmFkZSBpZiB5b3UgYXJlIGV4cGVyaWVuY2luZyBpc3N1ZXMuXG4gICAgICovXG4gICAgbWVyZ2UobWVyZ2luZykge1xuICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgICAgICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4ubWVyZ2luZy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9XG4gICAgLy8gbWVyZ2U8XG4gICAgLy8gICBJbmNvbWluZyBleHRlbmRzIEFueVpvZE9iamVjdCxcbiAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIEluY29taW5nW1wic2hhcGVcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9vdXRwdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgLy8gICB9LFxuICAgIC8vICAgTmV3SW5wdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX2lucHV0XCJdXG4gICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH1cbiAgICAvLyA+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdLFxuICAgIC8vICAgTmV3T3V0cHV0LFxuICAgIC8vICAgTmV3SW5wdXRcbiAgICAvLyA+IHtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBzZXRLZXkoa2V5LCBzY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVnbWVudCh7IFtrZXldOiBzY2hlbWEgfSk7XG4gICAgfVxuICAgIC8vIG1lcmdlPEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0PihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogLy9ab2RPYmplY3Q8VCAmIEluY29taW5nW1wiX3NoYXBlXCJdLCBVbmtub3duS2V5cywgQ2F0Y2hhbGw+ID0gKG1lcmdpbmcpID0+IHtcbiAgICAvLyBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdXG4gICAgLy8gPiB7XG4gICAgLy8gICAvLyBjb25zdCBtZXJnZWRTaGFwZSA9IG9iamVjdFV0aWwubWVyZ2VTaGFwZXMoXG4gICAgLy8gICAvLyAgIHRoaXMuX2RlZi5zaGFwZSgpLFxuICAgIC8vICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgIC8vICAgLy8gKTtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBjYXRjaGFsbChpbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjYXRjaGFsbDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaWNrKG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKG1hc2spKSB7XG4gICAgICAgICAgICBpZiAobWFza1trZXldICYmIHRoaXMuc2hhcGVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb21pdChtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgaWYgKCFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZGVlcFBhcnRpYWwoKSB7XG4gICAgICAgIHJldHVybiBkZWVwUGFydGlhbGlmeSh0aGlzKTtcbiAgICB9XG4gICAgcGFydGlhbChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICBpZiAobWFzayAmJiAhbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IGZpZWxkU2NoZW1hLm9wdGlvbmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWlyZWQobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpIHtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld0ZpZWxkID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld0ZpZWxkIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGQgPSBuZXdGaWVsZC5fZGVmLmlubmVyVHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IG5ld0ZpZWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGtleW9mKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlWm9kRW51bSh1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpO1xuICAgIH1cbn1cblpvZE9iamVjdC5jcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LnN0cmljdENyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LmxhenljcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9kZWYub3B0aW9ucztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgaXNzdWUtZnJlZSB2YWxpZGF0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXNzdWVzIGZyb20gZGlydHkgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4ucmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIGludmFsaWRcbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gbmV3IFpvZEVycm9yKHJlc3VsdC5jdHguY29tbW9uLmlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy5tYXAoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpLnRoZW4oaGFuZGxlUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGlydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIiAmJiAhZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB7IHJlc3VsdCwgY3R4OiBjaGlsZEN0eCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzLnB1c2goY2hpbGRDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5kaXJ0eS5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5LnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gaXNzdWVzLm1hcCgoaXNzdWVzKSA9PiBuZXcgWm9kRXJyb3IoaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG59XG5ab2RVbmlvbi5jcmVhdGUgPSAodHlwZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5pb24oe1xuICAgICAgICBvcHRpb25zOiB0eXBlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2REaXNjcmltaW5hdGVkVW5pb24gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBnZXREaXNjcmltaW5hdG9yID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExhenkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5zY2hlbWEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRWZmZWN0cykge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLmlubmVyVHlwZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIFt0eXBlLnZhbHVlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGUub3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE5hdGl2ZUVudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0VmFsdWVzKHR5cGUuZW51bSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2REZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kVW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBbbnVsbCwgLi4uZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RCcmFuZGVkKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kUmVhZG9ubHkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RDYXRjaCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLl9kZWYuaW5uZXJUeXBlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59O1xuZXhwb3J0IGNsYXNzIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yID0gdGhpcy5kaXNjcmltaW5hdG9yO1xuICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yVmFsdWUgPSBjdHguZGF0YVtkaXNjcmltaW5hdG9yXTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5vcHRpb25zTWFwLmdldChkaXNjcmltaW5hdG9yVmFsdWUpO1xuICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBBcnJheS5mcm9tKHRoaXMub3B0aW9uc01hcC5rZXlzKCkpLFxuICAgICAgICAgICAgICAgIHBhdGg6IFtkaXNjcmltaW5hdG9yXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGRpc2NyaW1pbmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGlzY3JpbWluYXRvcjtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnNNYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9uc01hcDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBkaXNjcmltaW5hdGVkIHVuaW9uIHNjaGVtYS4gSXRzIGJlaGF2aW91ciBpcyB2ZXJ5IHNpbWlsYXIgdG8gdGhhdCBvZiB0aGUgbm9ybWFsIHoudW5pb24oKSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBIb3dldmVyLCBpdCBvbmx5IGFsbG93cyBhIHVuaW9uIG9mIG9iamVjdHMsIGFsbCBvZiB3aGljaCBuZWVkIHRvIHNoYXJlIGEgZGlzY3JpbWluYXRvciBwcm9wZXJ0eS4gVGhpcyBwcm9wZXJ0eSBtdXN0XG4gICAgICogaGF2ZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgZWFjaCBvYmplY3QgaW4gdGhlIHVuaW9uLlxuICAgICAqIEBwYXJhbSBkaXNjcmltaW5hdG9yIHRoZSBuYW1lIG9mIHRoZSBkaXNjcmltaW5hdG9yIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHR5cGVzIGFuIGFycmF5IG9mIG9iamVjdCBzY2hlbWFzXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUoZGlzY3JpbWluYXRvciwgb3B0aW9ucywgcGFyYW1zKSB7XG4gICAgICAgIC8vIEdldCBhbGwgdGhlIHZhbGlkIGRpc2NyaW1pbmF0b3IgdmFsdWVzXG4gICAgICAgIGNvbnN0IG9wdGlvbnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yVmFsdWVzID0gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNoYXBlW2Rpc2NyaW1pbmF0b3JdKTtcbiAgICAgICAgICAgIGlmICghZGlzY3JpbWluYXRvclZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZGlzY3JpbWluYXRvciB2YWx1ZSBmb3Iga2V5IFxcYCR7ZGlzY3JpbWluYXRvcn1cXGAgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIGFsbCBzY2hlbWEgb3B0aW9uc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkaXNjcmltaW5hdG9yVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpc2NyaW1pbmF0b3IgcHJvcGVydHkgJHtTdHJpbmcoZGlzY3JpbWluYXRvcil9IGhhcyBkdXBsaWNhdGUgdmFsdWUgJHtTdHJpbmcodmFsdWUpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zTWFwLnNldCh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2REaXNjcmltaW5hdGVkVW5pb24oe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnNNYXAsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1lcmdlVmFsdWVzKGEsIGIpIHtcbiAgICBjb25zdCBhVHlwZSA9IGdldFBhcnNlZFR5cGUoYSk7XG4gICAgY29uc3QgYlR5cGUgPSBnZXRQYXJzZWRUeXBlKGIpO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgY29uc3QgYktleXMgPSB1dGlsLm9iamVjdEtleXMoYik7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSB1dGlsLm9iamVjdEtleXMoYSkuZmlsdGVyKChrZXkpID0+IGJLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEpO1xuICAgICAgICBjb25zdCBuZXdPYmogPSB7IC4uLmEsIC4uLmIgfTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcmVkS2V5cykge1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFsdWUgPSBtZXJnZVZhbHVlcyhhW2tleV0sIGJba2V5XSk7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IHNoYXJlZFZhbHVlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld09iaiB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5hcnJheSAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BID0gYVtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBpdGVtQiA9IGJbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFsdWUgPSBtZXJnZVZhbHVlcyhpdGVtQSwgaXRlbUIpO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzaGFyZWRWYWx1ZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3QXJyYXkgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmICthID09PSArYikge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogYSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZEludGVyc2VjdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBoYW5kbGVQYXJzZWQgPSAocGFyc2VkTGVmdCwgcGFyc2VkUmlnaHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fib3J0ZWQocGFyc2VkTGVmdCkgfHwgaXNBYm9ydGVkKHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VWYWx1ZXMocGFyc2VkTGVmdC52YWx1ZSwgcGFyc2VkUmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFtZXJnZWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlydHkocGFyc2VkTGVmdCkgfHwgaXNEaXJ0eShwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogbWVyZ2VkLmRhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLmxlZnQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKS50aGVuKChbbGVmdCwgcmlnaHRdKSA9PiBoYW5kbGVQYXJzZWQobGVmdCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQYXJzZWQodGhpcy5fZGVmLmxlZnQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSwgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSA9IChsZWZ0LCByaWdodCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RJbnRlcnNlY3Rpb24oe1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kSW50ZXJzZWN0aW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gdHlwZSBab2RUdXBsZUl0ZW1zID0gW1pvZFR5cGVBbnksIC4uLlpvZFR5cGVBbnlbXV07XG5leHBvcnQgY2xhc3MgWm9kVHVwbGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgbWluaW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdCA9IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICBpZiAoIXJlc3QgJiYgY3R4LmRhdGEubGVuZ3RoID4gdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbLi4uY3R4LmRhdGFdXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuX2RlZi5pdGVtc1tpdGVtSW5kZXhdIHx8IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gc2NoZW1hLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGl0ZW1JbmRleCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4gISF4KTsgLy8gZmlsdGVyIG51bGxzXG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoaXRlbXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIGl0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaXRlbXM7XG4gICAgfVxuICAgIHJlc3QocmVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJlc3QsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblpvZFR1cGxlLmNyZWF0ZSA9IChzY2hlbWFzLCBwYXJhbXMpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NoZW1hcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSBvZiBzY2hlbWFzIHRvIHoudHVwbGUoWyAuLi4gXSlcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICBpdGVtczogc2NoZW1hcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RUdXBsZSxcbiAgICAgICAgcmVzdDogbnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RSZWNvcmQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBjdHguZGF0YVtrZXldLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuICAgICAgICBpZiAoc2Vjb25kIGluc3RhbmNlb2YgWm9kVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAgICAgIGtleVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogc2Vjb25kLFxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcmQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAga2V5VHlwZTogWm9kU3RyaW5nLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhzZWNvbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kTWFwIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IGtleVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgIH1cbiAgICBnZXQgdmFsdWVTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm1hcCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5tYXAsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGNvbnN0IHBhaXJzID0gWy4uLmN0eC5kYXRhLmVudHJpZXMoKV0ubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIFtpbmRleCwgXCJrZXlcIl0pKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBbaW5kZXgsIFwidmFsdWVcIl0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZE1hcC5jcmVhdGUgPSAoa2V5VHlwZSwgdmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE1hcCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAga2V5VHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RNYXAsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kU2V0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zZXQpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc2V0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoZGVmLm1pblNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplIDwgZGVmLm1pblNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pblNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluU2l6ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4U2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPiBkZWYubWF4U2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heFNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4U2l6ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGZ1bmN0aW9uIGZpbmFsaXplU2V0KGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgcGFyc2VkU2V0LmFkZChlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcGFyc2VkU2V0IH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbLi4uY3R4LmRhdGEudmFsdWVzKCldLm1hcCgoaXRlbSwgaSkgPT4gdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZWxlbWVudHMpLnRoZW4oKGVsZW1lbnRzKSA9PiBmaW5hbGl6ZVNldChlbGVtZW50cykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsaXplU2V0KGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtaW4obWluU2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5TaXplOiB7IHZhbHVlOiBtaW5TaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhTaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1heFNpemU6IHsgdmFsdWU6IG1heFNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2l6ZShzaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbihzaXplLCBtZXNzYWdlKS5tYXgoc2l6ZSwgbWVzc2FnZSk7XG4gICAgfVxuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblpvZFNldC5jcmVhdGUgPSAodmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAgbWluU2l6ZTogbnVsbCxcbiAgICAgICAgbWF4U2l6ZTogbnVsbCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTZXQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRnVuY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRoaXMuaW1wbGVtZW50O1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5mdW5jdGlvbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBcmdzSXNzdWUoYXJncywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIGN0eC5zY2hlbWFFcnJvck1hcCwgZ2V0RXJyb3JNYXAoKSwgZGVmYXVsdEVycm9yTWFwXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlUmV0dXJuc0lzc3VlKHJldHVybnMsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXR1cm5zLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW2N0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCBjdHguc2NoZW1hRXJyb3JNYXAsIGdldEVycm9yTWFwKCksIGRlZmF1bHRFcnJvck1hcF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVHlwZUVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAgfTtcbiAgICAgICAgY29uc3QgZm4gPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5yZXR1cm5zIGluc3RhbmNlb2YgWm9kUHJvbWlzZSkge1xuICAgICAgICAgICAgLy8gV291bGQgbG92ZSBhIHdheSB0byBhdm9pZCBkaXNhYmxpbmcgdGhpcyBydWxlLCBidXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gYW4gYWxpYXMgKHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHdhcyB3aGF0IGNhdXNlZCAyNjUxKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9LKGFzeW5jIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBhd2FpdCBtZS5fZGVmLmFyZ3MucGFyc2VBc3luYyhhcmdzLCBwYXJhbXMpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VBcmdzSXNzdWUoYXJncywgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBwYXJzZWRBcmdzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gYXdhaXQgbWUuX2RlZi5yZXR1cm5zLl9kZWYudHlwZVxuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhyZXN1bHQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gbWUuX2RlZi5hcmdzLnNhZmVQYXJzZShhcmdzLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkQXJncy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBab2RFcnJvcihbbWFrZUFyZ3NJc3N1ZShhcmdzLCBwYXJzZWRBcmdzLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBwYXJzZWRBcmdzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJldHVybnMgPSBtZS5fZGVmLnJldHVybnMuc2FmZVBhcnNlKHJlc3VsdCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFJldHVybnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBwYXJzZWRSZXR1cm5zLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucy5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1ldGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5hcmdzO1xuICAgIH1cbiAgICByZXR1cm5UeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnJldHVybnM7XG4gICAgfVxuICAgIGFyZ3MoLi4uaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBhcmdzOiBab2RUdXBsZS5jcmVhdGUoaXRlbXMpLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm5zKHJldHVyblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5UeXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdHJpY3RJbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYXJncywgcmV0dXJucywgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgYXJnczogKGFyZ3MgPyBhcmdzIDogWm9kVHVwbGUuY3JlYXRlKFtdKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpKSxcbiAgICAgICAgICAgIHJldHVybnM6IHJldHVybnMgfHwgWm9kVW5rbm93bi5jcmVhdGUoKSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRnVuY3Rpb24sXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RMYXp5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBsYXp5U2NoZW1hID0gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgICAgICByZXR1cm4gbGF6eVNjaGVtYS5fcGFyc2UoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgIH1cbn1cblpvZExhenkuY3JlYXRlID0gKGdldHRlciwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMYXp5KHtcbiAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGF6eSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RMaXRlcmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5kYXRhICE9PSB0aGlzLl9kZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB0aGlzLl9kZWYudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWU7XG4gICAgfVxufVxuWm9kTGl0ZXJhbC5jcmVhdGUgPSAodmFsdWUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGl0ZXJhbCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMaXRlcmFsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gY3JlYXRlWm9kRW51bSh2YWx1ZXMsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kRW51bSh7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5leHBvcnQgY2xhc3MgWm9kRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LmRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZSA9IG5ldyBTZXQodGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgVmFsdWVzKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZ2V0IEVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBleHRyYWN0KHZhbHVlcywgbmV3RGVmID0gdGhpcy5fZGVmKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh2YWx1ZXMsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIC4uLm5ld0RlZixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGV4Y2x1ZGUodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdCkgPT4gIXZhbHVlcy5pbmNsdWRlcyhvcHQpKSwge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RFbnVtLmNyZWF0ZSA9IGNyZWF0ZVpvZEVudW07XG5leHBvcnQgY2xhc3MgWm9kTmF0aXZlRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbnVtVmFsdWVzID0gdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZyAmJiBjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBuZXcgU2V0KHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzKHRoaXMuX2RlZi52YWx1ZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlLmhhcyhpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBlbnVtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG59XG5ab2ROYXRpdmVFbnVtLmNyZWF0ZSA9ICh2YWx1ZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmF0aXZlRW51bSh7XG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hdGl2ZUVudW0sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kUHJvbWlzZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmIGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNpZmllZCA9IGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnByb21pc2UgPyBjdHguZGF0YSA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEVmZmVjdHMgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBpbm5lclR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hO1xuICAgIH1cbiAgICBzb3VyY2VUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYS5fZGVmLnR5cGVOYW1lID09PSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0c1xuICAgICAgICAgICAgPyB0aGlzLl9kZWYuc2NoZW1hLnNvdXJjZVR5cGUoKVxuICAgICAgICAgICAgOiB0aGlzLl9kZWYuc2NoZW1hO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gdGhpcy5fZGVmLmVmZmVjdCB8fCBudWxsO1xuICAgICAgICBjb25zdCBjaGVja0N0eCA9IHtcbiAgICAgICAgICAgIGFkZElzc3VlOiAoYXJnKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBhcmcpO1xuICAgICAgICAgICAgICAgIGlmIChhcmcuZmF0YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eC5wYXRoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tDdHguYWRkSXNzdWUgPSBjaGVja0N0eC5hZGRJc3N1ZS5iaW5kKGNoZWNrQ3R4KTtcbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInByZXByb2Nlc3NcIikge1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gZWZmZWN0LnRyYW5zZm9ybShjdHguZGF0YSwgY2hlY2tDdHgpO1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3NlZCkudGhlbihhc3luYyAocHJvY2Vzc2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJyZWZpbmVtZW50XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGVSZWZpbmVtZW50ID0gKGFjYykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVmZmVjdC5yZWZpbmVtZW50KGFjYywgY2hlY2tDdHgpO1xuICAgICAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXN5bmMgcmVmaW5lbWVudCBlbmNvdW50ZXJlZCBkdXJpbmcgc3luY2hyb25vdXMgcGFyc2Ugb3BlcmF0aW9uLiBVc2UgLnBhcnNlQXN5bmMgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB2YWx1ZSBpcyBpZ25vcmVkXG4gICAgICAgICAgICAgICAgZXhlY3V0ZVJlZmluZW1lbnQoaW5uZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXN5bmNocm9ub3VzIHRyYW5zZm9ybSBlbmNvdW50ZXJlZCBkdXJpbmcgc3luY2hyb25vdXMgcGFyc2Ugb3BlcmF0aW9uLiBVc2UgLnBhcnNlQXN5bmMgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiByZXN1bHQgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChiYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpKS50aGVuKChyZXN1bHQpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGVmZmVjdCk7XG4gICAgfVxufVxuWm9kRWZmZWN0cy5jcmVhdGUgPSAoc2NoZW1hLCBlZmZlY3QsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICBlZmZlY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzID0gKHByZXByb2Nlc3MsIHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJwcmVwcm9jZXNzXCIsIHRyYW5zZm9ybTogcHJlcHJvY2VzcyB9LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgeyBab2RFZmZlY3RzIGFzIFpvZFRyYW5zZm9ybWVyIH07XG5leHBvcnQgY2xhc3MgWm9kT3B0aW9uYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kT3B0aW9uYWwuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT3B0aW9uYWwoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT3B0aW9uYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTnVsbGFibGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5udWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gT0sobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2ROdWxsYWJsZS5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdWxsYWJsZSh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdWxsYWJsZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2REZWZhdWx0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBsZXQgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fZGVmLmRlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZURlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZERlZmF1bHQuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHR5cGVvZiBwYXJhbXMuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zLmRlZmF1bHQgOiAoKSA9PiBwYXJhbXMuZGVmYXVsdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RDYXRjaCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgLy8gbmV3Q3R4IGlzIHVzZWQgdG8gbm90IGNvbGxlY3QgaXNzdWVzIGZyb20gaW5uZXIgdHlwZXMgaW4gY3R4XG4gICAgICAgIGNvbnN0IG5ld0N0eCA9IHtcbiAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGE6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgcGF0aDogbmV3Q3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IHtcbiAgICAgICAgICAgICAgICAuLi5uZXdDdHgsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwidmFsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGVmLmNhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RFcnJvcihuZXdDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RFcnJvcihuZXdDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2F0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZENhdGNoLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZENhdGNoKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICBjYXRjaFZhbHVlOiB0eXBlb2YgcGFyYW1zLmNhdGNoID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMuY2F0Y2ggOiAoKSA9PiBwYXJhbXMuY2F0Y2gsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTmFOIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubmFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5hbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbn1cblpvZE5hTi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYU4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hTixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBCUkFORCA9IFN5bWJvbChcInpvZF9icmFuZFwiKTtcbmV4cG9ydCBjbGFzcyBab2RCcmFuZGVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kUGlwZWxpbmUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLmluLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkoaW5SZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IHRoaXMuX2RlZi5pbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZGlydHlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RQaXBlbGluZSh7XG4gICAgICAgICAgICBpbjogYSxcbiAgICAgICAgICAgIG91dDogYixcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUGlwZWxpbmUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RSZWFkb25seSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGNvbnN0IGZyZWV6ZSA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBPYmplY3QuZnJlZXplKGRhdGEudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBpc0FzeW5jKHJlc3VsdCkgPyByZXN1bHQudGhlbigoZGF0YSkgPT4gZnJlZXplKGRhdGEpKSA6IGZyZWV6ZShyZXN1bHQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZFJlYWRvbmx5LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFJlYWRvbmx5KHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlYWRvbmx5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIHouY3VzdG9tICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gY2xlYW5QYXJhbXMocGFyYW1zLCBkYXRhKSB7XG4gICAgY29uc3QgcCA9IHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcyhkYXRhKSA6IHR5cGVvZiBwYXJhbXMgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHBhcmFtcyB9IDogcGFyYW1zO1xuICAgIGNvbnN0IHAyID0gdHlwZW9mIHAgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHAgfSA6IHA7XG4gICAgcmV0dXJuIHAyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbShjaGVjaywgX3BhcmFtcyA9IHt9LCBcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqXG4gKiBQYXNzIGBmYXRhbGAgaW50byB0aGUgcGFyYW1zIG9iamVjdCBpbnN0ZWFkOlxuICpcbiAqIGBgYHRzXG4gKiB6LnN0cmluZygpLmN1c3RvbSgodmFsKSA9PiB2YWwubGVuZ3RoID4gNSwgeyBmYXRhbDogZmFsc2UgfSlcbiAqIGBgYFxuICpcbiAqL1xuZmF0YWwpIHtcbiAgICBpZiAoY2hlY2spXG4gICAgICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCkuc3VwZXJSZWZpbmUoKGRhdGEsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgciA9IGNoZWNrKGRhdGEpO1xuICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gcGFyYW1zLmZhdGFsID8/IGZhdGFsID8/IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wYXJhbXMsIGZhdGFsOiBfZmF0YWwgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IF9mYXRhbCA9IHBhcmFtcy5mYXRhbCA/PyBmYXRhbCA/PyB0cnVlO1xuICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKTtcbn1cbmV4cG9ydCB7IFpvZFR5cGUgYXMgU2NoZW1hLCBab2RUeXBlIGFzIFpvZFNjaGVtYSB9O1xuZXhwb3J0IGNvbnN0IGxhdGUgPSB7XG4gICAgb2JqZWN0OiBab2RPYmplY3QubGF6eWNyZWF0ZSxcbn07XG5leHBvcnQgdmFyIFpvZEZpcnN0UGFydHlUeXBlS2luZDtcbihmdW5jdGlvbiAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kKSB7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3RyaW5nXCJdID0gXCJab2RTdHJpbmdcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdW1iZXJcIl0gPSBcIlpvZE51bWJlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hTlwiXSA9IFwiWm9kTmFOXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQmlnSW50XCJdID0gXCJab2RCaWdJbnRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCb29sZWFuXCJdID0gXCJab2RCb29sZWFuXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGF0ZVwiXSA9IFwiWm9kRGF0ZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN5bWJvbFwiXSA9IFwiWm9kU3ltYm9sXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5kZWZpbmVkXCJdID0gXCJab2RVbmRlZmluZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsXCJdID0gXCJab2ROdWxsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQW55XCJdID0gXCJab2RBbnlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmtub3duXCJdID0gXCJab2RVbmtub3duXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmV2ZXJcIl0gPSBcIlpvZE5ldmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVm9pZFwiXSA9IFwiWm9kVm9pZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFycmF5XCJdID0gXCJab2RBcnJheVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9iamVjdFwiXSA9IFwiWm9kT2JqZWN0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5pb25cIl0gPSBcIlpvZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCJdID0gXCJab2REaXNjcmltaW5hdGVkVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RJbnRlcnNlY3Rpb25cIl0gPSBcIlpvZEludGVyc2VjdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFR1cGxlXCJdID0gXCJab2RUdXBsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFJlY29yZFwiXSA9IFwiWm9kUmVjb3JkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTWFwXCJdID0gXCJab2RNYXBcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTZXRcIl0gPSBcIlpvZFNldFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEZ1bmN0aW9uXCJdID0gXCJab2RGdW5jdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExhenlcIl0gPSBcIlpvZExhenlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMaXRlcmFsXCJdID0gXCJab2RMaXRlcmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRW51bVwiXSA9IFwiWm9kRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVmZmVjdHNcIl0gPSBcIlpvZEVmZmVjdHNcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYXRpdmVFbnVtXCJdID0gXCJab2ROYXRpdmVFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT3B0aW9uYWxcIl0gPSBcIlpvZE9wdGlvbmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbGFibGVcIl0gPSBcIlpvZE51bGxhYmxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGVmYXVsdFwiXSA9IFwiWm9kRGVmYXVsdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZENhdGNoXCJdID0gXCJab2RDYXRjaFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFByb21pc2VcIl0gPSBcIlpvZFByb21pc2VcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCcmFuZGVkXCJdID0gXCJab2RCcmFuZGVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUGlwZWxpbmVcIl0gPSBcIlpvZFBpcGVsaW5lXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVhZG9ubHlcIl0gPSBcIlpvZFJlYWRvbmx5XCI7XG59KShab2RGaXJzdFBhcnR5VHlwZUtpbmQgfHwgKFpvZEZpcnN0UGFydHlUeXBlS2luZCA9IHt9KSk7XG4vLyByZXF1aXJlcyBUUyA0LjQrXG5jbGFzcyBDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoLi4uXykgeyB9XG59XG5jb25zdCBpbnN0YW5jZU9mVHlwZSA9IChcbi8vIGNvbnN0IGluc3RhbmNlT2ZUeXBlID0gPFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuY2xzLCBwYXJhbXMgPSB7XG4gICAgbWVzc2FnZTogYElucHV0IG5vdCBpbnN0YW5jZSBvZiAke2Nscy5uYW1lfWAsXG59KSA9PiBjdXN0b20oKGRhdGEpID0+IGRhdGEgaW5zdGFuY2VvZiBjbHMsIHBhcmFtcyk7XG5jb25zdCBzdHJpbmdUeXBlID0gWm9kU3RyaW5nLmNyZWF0ZTtcbmNvbnN0IG51bWJlclR5cGUgPSBab2ROdW1iZXIuY3JlYXRlO1xuY29uc3QgbmFuVHlwZSA9IFpvZE5hTi5jcmVhdGU7XG5jb25zdCBiaWdJbnRUeXBlID0gWm9kQmlnSW50LmNyZWF0ZTtcbmNvbnN0IGJvb2xlYW5UeXBlID0gWm9kQm9vbGVhbi5jcmVhdGU7XG5jb25zdCBkYXRlVHlwZSA9IFpvZERhdGUuY3JlYXRlO1xuY29uc3Qgc3ltYm9sVHlwZSA9IFpvZFN5bWJvbC5jcmVhdGU7XG5jb25zdCB1bmRlZmluZWRUeXBlID0gWm9kVW5kZWZpbmVkLmNyZWF0ZTtcbmNvbnN0IG51bGxUeXBlID0gWm9kTnVsbC5jcmVhdGU7XG5jb25zdCBhbnlUeXBlID0gWm9kQW55LmNyZWF0ZTtcbmNvbnN0IHVua25vd25UeXBlID0gWm9kVW5rbm93bi5jcmVhdGU7XG5jb25zdCBuZXZlclR5cGUgPSBab2ROZXZlci5jcmVhdGU7XG5jb25zdCB2b2lkVHlwZSA9IFpvZFZvaWQuY3JlYXRlO1xuY29uc3QgYXJyYXlUeXBlID0gWm9kQXJyYXkuY3JlYXRlO1xuY29uc3Qgb2JqZWN0VHlwZSA9IFpvZE9iamVjdC5jcmVhdGU7XG5jb25zdCBzdHJpY3RPYmplY3RUeXBlID0gWm9kT2JqZWN0LnN0cmljdENyZWF0ZTtcbmNvbnN0IHVuaW9uVHlwZSA9IFpvZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgPSBab2REaXNjcmltaW5hdGVkVW5pb24uY3JlYXRlO1xuY29uc3QgaW50ZXJzZWN0aW9uVHlwZSA9IFpvZEludGVyc2VjdGlvbi5jcmVhdGU7XG5jb25zdCB0dXBsZVR5cGUgPSBab2RUdXBsZS5jcmVhdGU7XG5jb25zdCByZWNvcmRUeXBlID0gWm9kUmVjb3JkLmNyZWF0ZTtcbmNvbnN0IG1hcFR5cGUgPSBab2RNYXAuY3JlYXRlO1xuY29uc3Qgc2V0VHlwZSA9IFpvZFNldC5jcmVhdGU7XG5jb25zdCBmdW5jdGlvblR5cGUgPSBab2RGdW5jdGlvbi5jcmVhdGU7XG5jb25zdCBsYXp5VHlwZSA9IFpvZExhenkuY3JlYXRlO1xuY29uc3QgbGl0ZXJhbFR5cGUgPSBab2RMaXRlcmFsLmNyZWF0ZTtcbmNvbnN0IGVudW1UeXBlID0gWm9kRW51bS5jcmVhdGU7XG5jb25zdCBuYXRpdmVFbnVtVHlwZSA9IFpvZE5hdGl2ZUVudW0uY3JlYXRlO1xuY29uc3QgcHJvbWlzZVR5cGUgPSBab2RQcm9taXNlLmNyZWF0ZTtcbmNvbnN0IGVmZmVjdHNUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGU7XG5jb25zdCBvcHRpb25hbFR5cGUgPSBab2RPcHRpb25hbC5jcmVhdGU7XG5jb25zdCBudWxsYWJsZVR5cGUgPSBab2ROdWxsYWJsZS5jcmVhdGU7XG5jb25zdCBwcmVwcm9jZXNzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3M7XG5jb25zdCBwaXBlbGluZVR5cGUgPSBab2RQaXBlbGluZS5jcmVhdGU7XG5jb25zdCBvc3RyaW5nID0gKCkgPT4gc3RyaW5nVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvbnVtYmVyID0gKCkgPT4gbnVtYmVyVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvYm9vbGVhbiA9ICgpID0+IGJvb2xlYW5UeXBlKCkub3B0aW9uYWwoKTtcbmV4cG9ydCBjb25zdCBjb2VyY2UgPSB7XG4gICAgc3RyaW5nOiAoKGFyZykgPT4gWm9kU3RyaW5nLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBudW1iZXI6ICgoYXJnKSA9PiBab2ROdW1iZXIuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGJvb2xlYW46ICgoYXJnKSA9PiBab2RCb29sZWFuLmNyZWF0ZSh7XG4gICAgICAgIC4uLmFyZyxcbiAgICAgICAgY29lcmNlOiB0cnVlLFxuICAgIH0pKSxcbiAgICBiaWdpbnQ6ICgoYXJnKSA9PiBab2RCaWdJbnQuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGRhdGU6ICgoYXJnKSA9PiBab2REYXRlLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbn07XG5leHBvcnQgeyBhbnlUeXBlIGFzIGFueSwgYXJyYXlUeXBlIGFzIGFycmF5LCBiaWdJbnRUeXBlIGFzIGJpZ2ludCwgYm9vbGVhblR5cGUgYXMgYm9vbGVhbiwgZGF0ZVR5cGUgYXMgZGF0ZSwgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSBhcyBkaXNjcmltaW5hdGVkVW5pb24sIGVmZmVjdHNUeXBlIGFzIGVmZmVjdCwgZW51bVR5cGUgYXMgZW51bSwgZnVuY3Rpb25UeXBlIGFzIGZ1bmN0aW9uLCBpbnN0YW5jZU9mVHlwZSBhcyBpbnN0YW5jZW9mLCBpbnRlcnNlY3Rpb25UeXBlIGFzIGludGVyc2VjdGlvbiwgbGF6eVR5cGUgYXMgbGF6eSwgbGl0ZXJhbFR5cGUgYXMgbGl0ZXJhbCwgbWFwVHlwZSBhcyBtYXAsIG5hblR5cGUgYXMgbmFuLCBuYXRpdmVFbnVtVHlwZSBhcyBuYXRpdmVFbnVtLCBuZXZlclR5cGUgYXMgbmV2ZXIsIG51bGxUeXBlIGFzIG51bGwsIG51bGxhYmxlVHlwZSBhcyBudWxsYWJsZSwgbnVtYmVyVHlwZSBhcyBudW1iZXIsIG9iamVjdFR5cGUgYXMgb2JqZWN0LCBvYm9vbGVhbiwgb251bWJlciwgb3B0aW9uYWxUeXBlIGFzIG9wdGlvbmFsLCBvc3RyaW5nLCBwaXBlbGluZVR5cGUgYXMgcGlwZWxpbmUsIHByZXByb2Nlc3NUeXBlIGFzIHByZXByb2Nlc3MsIHByb21pc2VUeXBlIGFzIHByb21pc2UsIHJlY29yZFR5cGUgYXMgcmVjb3JkLCBzZXRUeXBlIGFzIHNldCwgc3RyaWN0T2JqZWN0VHlwZSBhcyBzdHJpY3RPYmplY3QsIHN0cmluZ1R5cGUgYXMgc3RyaW5nLCBzeW1ib2xUeXBlIGFzIHN5bWJvbCwgZWZmZWN0c1R5cGUgYXMgdHJhbnNmb3JtZXIsIHR1cGxlVHlwZSBhcyB0dXBsZSwgdW5kZWZpbmVkVHlwZSBhcyB1bmRlZmluZWQsIHVuaW9uVHlwZSBhcyB1bmlvbiwgdW5rbm93blR5cGUgYXMgdW5rbm93biwgdm9pZFR5cGUgYXMgdm9pZCwgfTtcbmV4cG9ydCBjb25zdCBORVZFUiA9IElOVkFMSUQ7XG4iLCIvKipcbiAqIENhbG1XZWIgU2hhcmVkIFR5cGVzIGFuZCBTY2hlbWFzXG4gKlxuICogQ29yZSBpbnRlcmZhY2VzIGFuZCBab2QgdmFsaWRhdGlvbiBmb3IgdGhlIENhbG1XZWIgY29udGVudCBmaXJld2FsbCBleHRlbnNpb24uXG4gKi9cbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUHJvY2Vzc2luZyAmIEFjdGlvbiBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdNb2RlU2NoZW1hID0gei5lbnVtKFsnYnlva19sbG0nLCAnaG9zdGVkX2xsbSddKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX09QRU5ST1VURVJfTU9ERUwgPSAnb3BlbnJvdXRlci9mcmVlJztcbmV4cG9ydCBjb25zdCBPUEVOUk9VVEVSX0VORFBPSU5UID0gJ2h0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvdjEvY2hhdC9jb21wbGV0aW9ucyc7XG5leHBvcnQgY29uc3QgQUlfTU9ERUxTID0gW1xuICAgIHsgaWQ6ICdvcGVucm91dGVyL2ZyZWUnLCBsYWJlbDogJ0ZyZWUgUm91dGVyJywgZnJlZTogdHJ1ZSB9LFxuICAgIHsgaWQ6ICdtZXRhLWxsYW1hL2xsYW1hLTMuMS04Yi1pbnN0cnVjdDpmcmVlJywgbGFiZWw6ICdMbGFtYSAzLjEgOEInLCBmcmVlOiB0cnVlIH0sXG4gICAgeyBpZDogJ21pc3RyYWxhaS9taXN0cmFsLTdiLWluc3RydWN0OmZyZWUnLCBsYWJlbDogJ01pc3RyYWwgN0InLCBmcmVlOiB0cnVlIH0sXG4gICAgeyBpZDogJ2dvb2dsZS9nZW1tYS0yLTliLWl0OmZyZWUnLCBsYWJlbDogJ0dlbW1hIDIgOUInLCBmcmVlOiB0cnVlIH0sXG4gICAgeyBpZDogJ21ldGEtbGxhbWEvbGxhbWEtMy4xLTcwYi1pbnN0cnVjdCcsIGxhYmVsOiAnTGxhbWEgMy4xIDcwQicsIGZyZWU6IGZhbHNlIH0sXG4gICAgeyBpZDogJ2FudGhyb3BpYy9jbGF1ZGUtMy41LXNvbm5ldCcsIGxhYmVsOiAnQ2xhdWRlIDMuNSBTb25uZXQnLCBmcmVlOiBmYWxzZSB9LFxuICAgIHsgaWQ6ICdvcGVuYWkvZ3B0LTRvLW1pbmknLCBsYWJlbDogJ0dQVC00byBNaW5pJywgZnJlZTogZmFsc2UgfSxcbl07XG5leHBvcnQgY29uc3QgQWN0aW9uRGVjaXNpb25TY2hlbWEgPSB6LmVudW0oWydzaG93JywgJ2JsdXInLCAnaGlkZScsICduZXV0cmFsaXplJywgJ2NvbGxhcHNlJywgJ3JlYnVpbGQnXSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250ZW50IFVuaXRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBDb250ZW50VW5pdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBpZDogei5zdHJpbmcoKSxcbiAgICBzaXRlOiB6LnN0cmluZygpLFxuICAgIGZpbmdlcnByaW50OiB6LnN0cmluZygpLFxuICAgIHNvdXJjZU5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICB0aXRsZTogei5zdHJpbmcoKSxcbiAgICBtZXRhZGF0YTogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICBpc05ldzogei5ib29sZWFuKCksXG4gICAgdXJsOiB6LnN0cmluZygpLnVybCgpLm9wdGlvbmFsKCksXG59KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsYXNzaWZpY2F0aW9uIFJlc3VsdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IENsYXNzaWZpY2F0aW9uUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGRlY2lzaW9uOiBBY3Rpb25EZWNpc2lvblNjaGVtYSxcbiAgICBjb25maWRlbmNlOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSksXG4gICAgcmVhc29uOiB6LnN0cmluZygpLFxuICAgIG5ldXRyYWxpemVkVGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVc2VyIFJ1bGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgUHJlc2V0U2VsZWN0aW9uU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHBvbGl0aWNzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgICByYWdlYmFpdDogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gICAgc3BvaWxlcnM6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICAgIGNsaWNrYmFpdDogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG59KTtcbmV4cG9ydCBjb25zdCBVc2VyUnVsZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgYmxvY2tsaXN0Q2hhbm5lbHM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgYmxvY2tsaXN0S2V5d29yZHM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgYWxsb3dsaXN0Q2hhbm5lbHM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgYWxsb3dsaXN0S2V5d29yZHM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgcHJlc2V0czogUHJlc2V0U2VsZWN0aW9uU2NoZW1hLmRlZmF1bHQoe1xuICAgICAgICBwb2xpdGljczogZmFsc2UsXG4gICAgICAgIHJhZ2ViYWl0OiBmYWxzZSxcbiAgICAgICAgc3BvaWxlcnM6IGZhbHNlLFxuICAgICAgICBjbGlja2JhaXQ6IGZhbHNlLFxuICAgIH0pLFxufSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOZXV0cmFsaXphdGlvbiBTZXR0aW5nc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IE5ldXRyYWxpemF0aW9uTW9kZVNjaGVtYSA9IHouZW51bShbJ2xpZ2h0JywgJ21lZGl1bScsICdzdHJpY3QnXSk7XG5leHBvcnQgY29uc3QgTmV1dHJhbGl6YXRpb25TZXR0aW5nc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBlbmFibGVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIG1vZGU6IE5ldXRyYWxpemF0aW9uTW9kZVNjaGVtYS5kZWZhdWx0KCdtZWRpdW0nKSxcbiAgICBzaG93SW5kaWNhdG9yOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHNob3dEaWZmT25Ib3Zlcjogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBleGNsdWRlRG9tYWluczogei5hcnJheSh6LnN0cmluZygpKS5kZWZhdWx0KFtdKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHROZXV0cmFsaXphdGlvblNldHRpbmdzID0ge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgbW9kZTogJ21lZGl1bScsXG4gICAgc2hvd0luZGljYXRvcjogdHJ1ZSxcbiAgICBzaG93RGlmZk9uSG92ZXI6IHRydWUsXG4gICAgZXhjbHVkZURvbWFpbnM6IFtdLFxufTtcbmV4cG9ydCBjb25zdCBSZWFkZXJTZXR0aW5nc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBlbmFibGVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGRlZmF1bHRMYXlvdXQ6IHouc3RyaW5nKCkuZGVmYXVsdCgnYXV0bycpLFxuICAgIGRlZmF1bHRUaGVtZTogei5zdHJpbmcoKS5kZWZhdWx0KCdkZWZhdWx0JyksXG4gICAgYXV0b09wZW46IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgdGV4dE9ubHk6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgc2hvd0luQ29udGV4dE1lbnU6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG59KTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVhZGVyU2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBkZWZhdWx0TGF5b3V0OiAnYXV0bycsXG4gICAgZGVmYXVsdFRoZW1lOiAnZGVmYXVsdCcsXG4gICAgYXV0b09wZW46IHRydWUsXG4gICAgdGV4dE9ubHk6IHRydWUsXG4gICAgc2hvd0luQ29udGV4dE1lbnU6IHRydWUsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVXNlciBTZXR0aW5nc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IFVzZXJTZXR0aW5nc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBlbmFibGVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHByb2Nlc3NpbmdNb2RlOiBQcm9jZXNzaW5nTW9kZVNjaGVtYS5kZWZhdWx0KCdieW9rX2xsbScpLFxuICAgIHN0cmljdG5lc3M6IHoubnVtYmVyKCkubWluKDApLm1heCgxMDApLmRlZmF1bHQoODApLFxuICAgIHJ1bGVzOiBVc2VyUnVsZXNTY2hlbWEuZGVmYXVsdCh7XG4gICAgICAgIGJsb2NrbGlzdENoYW5uZWxzOiBbXSxcbiAgICAgICAgYmxvY2tsaXN0S2V5d29yZHM6IFtdLFxuICAgICAgICBhbGxvd2xpc3RDaGFubmVsczogW10sXG4gICAgICAgIGFsbG93bGlzdEtleXdvcmRzOiBbXSxcbiAgICAgICAgcHJlc2V0czogeyBwb2xpdGljczogdHJ1ZSwgcmFnZWJhaXQ6IHRydWUsIHNwb2lsZXJzOiB0cnVlLCBjbGlja2JhaXQ6IHRydWUgfSxcbiAgICB9KSxcbiAgICBieW9rS2V5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgYWlNb2RlbDogei5zdHJpbmcoKS5kZWZhdWx0KERFRkFVTFRfT1BFTlJPVVRFUl9NT0RFTCksXG4gICAgY3VzdG9tRW5kcG9pbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBuZXV0cmFsaXphdGlvbjogTmV1dHJhbGl6YXRpb25TZXR0aW5nc1NjaGVtYS5kZWZhdWx0KGRlZmF1bHROZXV0cmFsaXphdGlvblNldHRpbmdzKSxcbiAgICByZWFkZXI6IFJlYWRlclNldHRpbmdzU2NoZW1hLmRlZmF1bHQoZGVmYXVsdFJlYWRlclNldHRpbmdzKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRVc2VyU2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwcm9jZXNzaW5nTW9kZTogJ2J5b2tfbGxtJyxcbiAgICBzdHJpY3RuZXNzOiA4MCxcbiAgICBydWxlczoge1xuICAgICAgICBibG9ja2xpc3RDaGFubmVsczogW10sXG4gICAgICAgIGJsb2NrbGlzdEtleXdvcmRzOiBbXSxcbiAgICAgICAgYWxsb3dsaXN0Q2hhbm5lbHM6IFtdLFxuICAgICAgICBhbGxvd2xpc3RLZXl3b3JkczogW10sXG4gICAgICAgIHByZXNldHM6IHsgcG9saXRpY3M6IHRydWUsIHJhZ2ViYWl0OiB0cnVlLCBzcG9pbGVyczogdHJ1ZSwgY2xpY2tiYWl0OiB0cnVlIH0sXG4gICAgfSxcbiAgICBieW9rS2V5OiB1bmRlZmluZWQsXG4gICAgYWlNb2RlbDogREVGQVVMVF9PUEVOUk9VVEVSX01PREVMLFxuICAgIGN1c3RvbUVuZHBvaW50OiB1bmRlZmluZWQsXG4gICAgbmV1dHJhbGl6YXRpb246IGRlZmF1bHROZXV0cmFsaXphdGlvblNldHRpbmdzLFxuICAgIHJlYWRlcjogZGVmYXVsdFJlYWRlclNldHRpbmdzLFxufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZpbmdlcnByaW50aW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIFNpbXBsZSBzdHJpbmcgaGFzaCBhbGdvcml0aG0gZm9yIGZpbmdlcnByaW50aW5nIGNvbnRlbnQuXG4gKiBOb3QgY3J5dG9ncmFwaGljYWxseSBzZWN1cmUsIGJ1dCBmYXN0IGFuZCBzdWZmaWNpZW50IGZvciBjYWNoaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlSGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgICAgICBoYXNoID0gaGFzaCAmIGhhc2g7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgIH1cbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygzNik7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEgc3RhYmxlIGZpbmdlcnByaW50IGZvciBhIENvbnRlbnRVbml0LlxuICogQ29tYmluZXMgdGl0bGUgYW5kIHNvdXJjZU5hbWUsIGlnbm9yZXMgdmFyaWFibGUgZmllbGRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGaW5nZXJwcmludCh1bml0KSB7XG4gICAgY29uc3Qgc2VlZCA9IGAke3VuaXQudGl0bGV9fCR7dW5pdC5zb3VyY2VOYW1lIHx8ICcnfXwke3VuaXQuc2l0ZX1gO1xuICAgIHJldHVybiBzaW1wbGVIYXNoKHNlZWQpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3RvcmFnZSBLZXlzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgU1RPUkFHRV9LRVlTID0ge1xuICAgIFNFVFRJTkdTOiAnbG9jYWw6c2V0dGluZ3MnLFxuICAgIERFQ0lTSU9OX0NBQ0hFOiAnbG9jYWw6ZGVjaXNpb25DYWNoZScsXG4gICAgQllPS19LRVlTOiAnbG9jYWw6Ynlva0tleXMnLFxuICAgIFNUQVRTOiAnbG9jYWw6c3RhdHMnLFxufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEVTID0ge1xuICAgIENMQVNTSUZZX1VOSVQ6ICdjbGFzc2lmeVVuaXQnLFxuICAgIEdFVF9TRVRUSU5HUzogJ2dldFNldHRpbmdzJyxcbiAgICBVUERBVEVfU0VUVElOR1M6ICd1cGRhdGVTZXR0aW5ncycsXG4gICAgQ0xFQVJfQ0FDSEU6ICdjbGVhckNhY2hlJyxcbiAgICBHRVRfU1RBVFM6ICdnZXRTdGF0cycsXG4gICAgSU5DUkVNRU5UX1NUQVQ6ICdpbmNyZW1lbnRTdGF0Jyxcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWYWxpZGF0aW9uIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogVmFsaWRhdGUgYSBDb250ZW50VW5pdCBvYmplY3QgYWdhaW5zdCB0aGUgc2NoZW1hLlxuICogVGhyb3dzIFpvZEVycm9yIGlmIGludmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbnRlbnRVbml0KHVuaXQpIHtcbiAgICByZXR1cm4gQ29udGVudFVuaXRTY2hlbWEucGFyc2UodW5pdCk7XG59XG4vKipcbiAqIFZhbGlkYXRlIGEgQ2xhc3NpZmljYXRpb25SZXN1bHQgb2JqZWN0IGFnYWluc3QgdGhlIHNjaGVtYS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2xhc3NpZmljYXRpb25SZXN1bHQocmVzdWx0KSB7XG4gICAgcmV0dXJuIENsYXNzaWZpY2F0aW9uUmVzdWx0U2NoZW1hLnBhcnNlKHJlc3VsdCk7XG59XG4vKipcbiAqIFZhbGlkYXRlIFVzZXJTZXR0aW5ncyBhZ2FpbnN0IHRoZSBzY2hlbWEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVVzZXJTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIHJldHVybiBVc2VyU2V0dGluZ3NTY2hlbWEucGFyc2Uoc2V0dGluZ3MpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW5oYW5jZWQgU3RhdGlzdGljc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IEVuaGFuY2VkU3RhdHNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgdG90YWxGaWx0ZXJlZDogei5udW1iZXIoKS5kZWZhdWx0KDApLFxuICAgIGJ5QWN0aW9uOiB6Lm9iamVjdCh7XG4gICAgICAgIGhpZGU6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgYmx1cjogei5udW1iZXIoKS5kZWZhdWx0KDApLFxuICAgICAgICBuZXV0cmFsaXplOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIGNvbGxhcHNlOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgfSkuZGVmYXVsdCh7IGhpZGU6IDAsIGJsdXI6IDAsIG5ldXRyYWxpemU6IDAsIGNvbGxhcHNlOiAwIH0pLFxuICAgIGJ5UHJlc2V0OiB6Lm9iamVjdCh7XG4gICAgICAgIHBvbGl0aWNzOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIHJhZ2ViYWl0OiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIHNwb2lsZXJzOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIGNsaWNrYmFpdDogei5udW1iZXIoKS5kZWZhdWx0KDApLFxuICAgIH0pLmRlZmF1bHQoeyBwb2xpdGljczogMCwgcmFnZWJhaXQ6IDAsIHNwb2lsZXJzOiAwLCBjbGlja2JhaXQ6IDAgfSksXG4gICAgdGltZVNhdmVkOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgdG9wRmlsdGVyZWRTb3VyY2VzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGRhaWx5SGlzdG9yeTogei5hcnJheSh6Lm9iamVjdCh7XG4gICAgICAgIGRhdGU6IHouc3RyaW5nKCksXG4gICAgICAgIGNvdW50OiB6Lm51bWJlcigpLFxuICAgIH0pKS5kZWZhdWx0KFtdKSxcbiAgICBsYXN0UmVzZXQ6IHoubnVtYmVyKCkuZGVmYXVsdChEYXRlLm5vdygpKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRFbmhhbmNlZFN0YXRzID0ge1xuICAgIHRvdGFsRmlsdGVyZWQ6IDAsXG4gICAgYnlBY3Rpb246IHsgaGlkZTogMCwgYmx1cjogMCwgbmV1dHJhbGl6ZTogMCwgY29sbGFwc2U6IDAgfSxcbiAgICBieVByZXNldDogeyBwb2xpdGljczogMCwgcmFnZWJhaXQ6IDAsIHNwb2lsZXJzOiAwLCBjbGlja2JhaXQ6IDAgfSxcbiAgICB0aW1lU2F2ZWQ6IDAsXG4gICAgdG9wRmlsdGVyZWRTb3VyY2VzOiBbXSxcbiAgICBkYWlseUhpc3Rvcnk6IFtdLFxuICAgIGxhc3RSZXNldDogRGF0ZS5ub3coKSxcbn07XG4iLCIvKipcbiAqIENvbGxhcHNlIFJlbmRlcmVyIGZvciBDYWxtV2ViXG4gKiBcbiAqIENyZWF0ZXMgYSBtaW5pbWFsIHBsYWNlaG9sZGVyIGZvciBmaWx0ZXJlZCBjb250ZW50IHRoYXQgY2FuIGJlIGV4cGFuZGVkLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQ2xhc3NpZmljYXRpb25SZXN1bHQgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbGxhcHNlT3B0aW9ucyB7XG4gIHJlYXNvbjogc3RyaW5nO1xuICBvcmlnaW5hbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZXN1bHQ6IENsYXNzaWZpY2F0aW9uUmVzdWx0O1xuICBvbkV4cGFuZD86ICgpID0+IHZvaWQ7XG4gIHNpdGVJZD86IHN0cmluZztcbn1cblxuY29uc3QgUkVBU09OX0xBQkVMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgcHJlc2V0X3BvbGl0aWNzOiAnUG9saXRpY3MgZmlsdGVyZWQnLFxuICBwcmVzZXRfcmFnZWJhaXQ6ICdSYWdlYmFpdCBibG9ja2VkJyxcbiAgcHJlc2V0X3Nwb2lsZXJzOiAnU3BvaWxlciBzaGllbGQnLFxuICBwcmVzZXRfY2xpY2tiYWl0OiAnQ2xpY2tiYWl0IHJlbW92ZWQnLFxuICBibG9ja2xpc3RfY2hhbm5lbDogJ0Jsb2NrZWQgc291cmNlJyxcbiAgYmxvY2tsaXN0X2tleXdvcmQ6ICdGaWx0ZXJlZCBrZXl3b3JkJyxcbiAgbGxtX2NsYXNzaWZpY2F0aW9uOiAnQUkgZmlsdGVyZWQnLFxuICBob3N0ZWQ6ICdDb250ZW50IGZpbHRlcmVkJyxcbn07XG5cbmZ1bmN0aW9uIGdldFJlYXNvbkxhYmVsKHJlYXNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgZm9yIChjb25zdCBba2V5LCBsYWJlbF0gb2YgT2JqZWN0LmVudHJpZXMoUkVBU09OX0xBQkVMUykpIHtcbiAgICBpZiAocmVhc29uLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICdDb250ZW50IGZpbHRlcmVkJztcbn1cblxuZnVuY3Rpb24gZ2V0UmVhc29uSWNvbihyZWFzb246IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChyZWFzb24uaW5jbHVkZXMoJ3BvbGl0aWNzJykpIHJldHVybiAn8J+Pm++4jyc7XG4gIGlmIChyZWFzb24uaW5jbHVkZXMoJ3JhZ2ViYWl0JykpIHJldHVybiAn8J+YoCc7XG4gIGlmIChyZWFzb24uaW5jbHVkZXMoJ3Nwb2lsZXJzJykpIHJldHVybiAn8J+kkCc7XG4gIGlmIChyZWFzb24uaW5jbHVkZXMoJ2NsaWNrYmFpdCcpKSByZXR1cm4gJ/Cfjq8nO1xuICBpZiAocmVhc29uLmluY2x1ZGVzKCdjaGFubmVsJykgfHwgcmVhc29uLmluY2x1ZGVzKCdrZXl3b3JkJykpIHJldHVybiAn8J+aqyc7XG4gIHJldHVybiAn8J+boe+4jyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xsYXBzZVBsYWNlaG9sZGVyKG9wdGlvbnM6IENvbGxhcHNlT3B0aW9ucyk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgeyByZWFzb24sIG9yaWdpbmFsRWxlbWVudCwgcmVzdWx0OiBfcmVzdWx0LCBvbkV4cGFuZCwgc2l0ZUlkIH0gPSBvcHRpb25zO1xuICBfcmVzdWx0O1xuICBcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2FsbXdlYi1jb2xsYXBzZS1jb250YWluZXInO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItY29sbGFwc2UnLCAndHJ1ZScpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcmVhc29uJywgcmVhc29uKTtcbiAgXG4gIGNvbnN0IGxhYmVsID0gZ2V0UmVhc29uTGFiZWwocmVhc29uKTtcbiAgY29uc3QgaWNvbiA9IGdldFJlYXNvbkljb24ocmVhc29uKTtcbiAgXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNhbG13ZWItY29sbGFwc2UtYmFkZ2VcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FsbXdlYi1jb2xsYXBzZS1pY29uXCI+JHtpY29ufTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FsbXdlYi1jb2xsYXBzZS1sYWJlbFwiPiR7bGFiZWx9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJjYWxtd2ViLWNvbGxhcHNlLWV4cGFuZFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgIDxzcGFuPlNob3cgYW55d2F5PC9zcGFuPlxuICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTkgOWwtNyA3LTctN1wiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICBgO1xuICBcbiAgY29uc3QgZXhwYW5kQnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYWxtd2ViLWNvbGxhcHNlLWV4cGFuZCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBcbiAgZXhwYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV4cGFuZENvbGxhcHNlZENvbnRlbnQoY29udGFpbmVyLCBvcmlnaW5hbEVsZW1lbnQpO1xuICAgIGlmIChvbkV4cGFuZCkge1xuICAgICAgb25FeHBhbmQoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLW9yaWdpbmFsLWhlaWdodCcsIFN0cmluZyhvcmlnaW5hbEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1zaXRlJywgc2l0ZUlkIHx8ICd1bmtub3duJyk7XG4gIFxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBleHBhbmRDb2xsYXBzZWRDb250ZW50KHBsYWNlaG9sZGVyOiBIVE1MRWxlbWVudCwgb3JpZ2luYWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdjYWxtd2ViLWNvbGxhcHNlLWV4cGFuZGluZycpO1xuICBcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIG9yaWdpbmFsRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIG9yaWdpbmFsRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMC4ycyBlYXNlLWluLW91dCc7XG4gICAgXG4gICAgcGxhY2Vob2xkZXIucmVwbGFjZVdpdGgob3JpZ2luYWxFbGVtZW50KTtcbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xsYXBzZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNhbG13ZWItY29sbGFwc2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbGxhcHNlSW5mbyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IHsgcmVhc29uOiBzdHJpbmc7IHNpdGU6IHN0cmluZyB9IHwgbnVsbCB7XG4gIGlmICghaXNDb2xsYXBzZWQoZWxlbWVudCkpIHJldHVybiBudWxsO1xuICBcbiAgcmV0dXJuIHtcbiAgICByZWFzb246IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcmVhc29uJykgfHwgJ3Vua25vd24nLFxuICAgIHNpdGU6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItc2l0ZScpIHx8ICd1bmtub3duJyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbGxhcHNlU3R5bGVzKCk6IHN0cmluZyB7XG4gIHJldHVybiBgXG4uY2FsbXdlYi1jb2xsYXBzZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBtYXJnaW46IDRweCAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4wOCkgMCUsIHJnYmEoMTQ3LCA1MSwgMjM0LCAwLjA1KSAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbWluLWhlaWdodDogMzJweDtcbn1cblxuLmNhbG13ZWItY29sbGFwc2UtY29udGFpbmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTIpIDAlLCByZ2JhKDE0NywgNTEsIDIzNCwgMC4wOCkgMTAwJSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyk7XG59XG5cbi5jYWxtd2ViLWNvbGxhcHNlLWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5jYWxtd2ViLWNvbGxhcHNlLWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uY2FsbXdlYi1jb2xsYXBzZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xufVxuXG4uY2FsbXdlYi1jb2xsYXBzZS1leHBhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC44NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG5cbi5jYWxtd2ViLWNvbGxhcHNlLWV4cGFuZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjQpO1xuICBjb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDEpO1xufVxuXG4uY2FsbXdlYi1jb2xsYXBzZS1leHBhbmQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbn1cblxuLmNhbG13ZWItY29sbGFwc2UtZXhwYW5kIHN2ZyB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cblxuLmNhbG13ZWItY29sbGFwc2UtZXhwYW5kOmhvdmVyIHN2ZyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uY2FsbXdlYi1jb2xsYXBzZS1leHBhbmRpbmcge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC5jYWxtd2ViLWNvbGxhcHNlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTUpIDAlLCByZ2JhKDE0NywgNTEsIDIzNCwgMC4xKSAxMDAlKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjI1KTtcbiAgfVxuICBcbiAgLmNhbG13ZWItY29sbGFwc2UtbGFiZWwge1xuICAgIGNvbG9yOiByZ2JhKDk2LCAxNjUsIDI1MCwgMSk7XG4gIH1cbiAgXG4gIC5jYWxtd2ViLWNvbGxhcHNlLWV4cGFuZCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyk7XG4gICAgY29sb3I6IHJnYmEoOTYsIDE2NSwgMjUwLCAxKTtcbiAgfVxufVxuYDtcbn0iLCIvKipcbiAqIFVuaXZlcnNhbCBTaXRlIEFkYXB0ZXIgZm9yIENhbG1XZWJcbiAqIFxuICogQSBmYWxsYmFjayBhZGFwdGVyIHRoYXQgaGFuZGxlcyBnZW5lcmljIHdlYiBjb250ZW50IG9uIGFueSBzaXRlLlxuICogVXNlcyBwcmlvcml0eS1iYXNlZCBzZWxlY3RvciBkaXNjb3ZlcnkgYW5kIGNvbnRlbnQgdmFsaWRhdGlvbi5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFNpdGVBZGFwdGVyIH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcbmltcG9ydCB7IGdlbmVyYXRlRmluZ2VycHJpbnQgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGFwc2VQbGFjZWhvbGRlciB9IGZyb20gJ0Avc3JjL3JlbmRlcmVyL2NvbGxhcHNlJztcblxuLy8gUHJpb3JpdHktYmFzZWQgc2VsZWN0b3JzIC0gdHJpZWQgaW4gb3JkZXIgdW50aWwgZW5vdWdoIHVuaXRzIGZvdW5kXG5jb25zdCBTRUxFQ1RPUl9QUklPUklUSUVTID0gW1xuICAvLyBIaWdoIHByaW9yaXR5OiBzZW1hbnRpYyBIVE1MXG4gICdhcnRpY2xlJyxcbiAgJ21haW4gYXJ0aWNsZScsXG4gICdbcm9sZT1cImFydGljbGVcIl0nLFxuICAnYXJ0aWNsZVtpdGVtc2NvcGVdJyxcbiAgXG4gIC8vIE1lZGl1bS1oaWdoOiBjb21tb24gQ01TIHBhdHRlcm5zXG4gICcucG9zdCcsXG4gICcuZW50cnknLFxuICAnLmNvbnRlbnQtaXRlbScsXG4gICcuY2FyZCcsXG4gICcucG9zdC1pdGVtJyxcbiAgJy5lbnRyeS1jb250ZW50JyxcbiAgJy5hcnRpY2xlLWNvbnRlbnQnLFxuICAnLm5ld3MtaXRlbScsXG4gICcuc3RvcnknLFxuICAnLmZlZWQtaXRlbScsXG4gIFxuICAvLyBNZWRpdW06IGJsb2cvcGxhdGZvcm0gcGF0dGVybnNcbiAgJ2RpdltjbGFzcyo9XCJwb3N0XCJdJyxcbiAgJ2RpdltjbGFzcyo9XCJhcnRpY2xlXCJdJyxcbiAgJ2RpdltjbGFzcyo9XCJpdGVtXCJdJyxcbiAgJ2RpdltjbGFzcyo9XCJjYXJkXCJdJyxcbiAgJ3NlY3Rpb25bY2xhc3MqPVwicG9zdFwiXScsXG4gIFxuICAvLyBMb3c6IGdlbmVyaWMgY29udGFpbmVycyAob25seSBpZiBvdGhlcnMgZmFpbClcbiAgJ3NlY3Rpb24nLFxuICAnbGkucG9zdCcsXG4gICdsaS5pdGVtJyxcbiAgJ2xpLmFydGljbGUnLFxuXTtcblxuLy8gVGl0bGUgc2VsZWN0b3JzIHdpdGggcHJpb3JpdHlcbmNvbnN0IFRJVExFX1NFTEVDVE9SUyA9IFtcbiAgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JyxcbiAgJy50aXRsZScsICcuaGVhZGluZycsXG4gICdhW2hyZWYqPVwiL3AvXCJdJyxcbiAgJ1tjbGFzcyo9XCJ0aXRsZVwiXScsXG4gICdoZWFkZXIgYScsXG4gICcuZW50cnktdGl0bGUnLFxuICAnLnBvc3QtdGl0bGUnLFxuICAnLmFydGljbGUtdGl0bGUnLFxuXTtcblxuLy8gU291cmNlL2F1dGhvciBzZWxlY3RvcnNcbmNvbnN0IFNPVVJDRV9TRUxFQ1RPUlMgPSBbXG4gICcuYXV0aG9yJywgJy5zb3VyY2UnLCAnLnNpdGUtbmFtZScsICdjaXRlJyxcbiAgJ3NwYW5bY2xhc3MqPVwiYXV0aG9yXCJdJywgJ1tyZWw9XCJhdXRob3JcIl0nLFxuICAnLmJ5bGluZScsICcubWV0YS1hdXRob3InLCAnLnBvc3QtYXV0aG9yJyxcbiAgJ2FbY2xhc3MqPVwiYXV0aG9yXCJdJywgJ1tkYXRhLWF1dGhvcl0nLFxuXTtcblxuLy8gTWluaW11bSB0aHJlc2hvbGRzIGZvciB2YWxpZCBjb250ZW50IHVuaXRzXG5jb25zdCBNSU5fVEVYVF9MRU5HVEggPSAzMDtcbmNvbnN0IE1JTl9IRUlHSFQgPSA1MDtcbmNvbnN0IE1JTl9XSURUSCA9IDEwMDtcbmNvbnN0IE1JTl9VTklUU19USFJFU0hPTEQgPSAzO1xuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgdmlzaWJsZSBhbmQgaGFzIG1lYW5pbmdmdWwgY29udGVudFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQ29udGVudFVuaXQoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIC8vIENoZWNrIGRpbWVuc2lvbnNcbiAgaWYgKGVsLm9mZnNldEhlaWdodCA8IE1JTl9IRUlHSFQgfHwgZWwub2Zmc2V0V2lkdGggPCBNSU5fV0lEVEgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8vIENoZWNrIHRleHQgY29udGVudFxuICBjb25zdCB0ZXh0ID0gZWwuaW5uZXJUZXh0Py50cmltKCkgfHwgJyc7XG4gIGlmICh0ZXh0Lmxlbmd0aCA8IE1JTl9URVhUX0xFTkdUSCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLy8gQ2hlY2sgdmlzaWJpbGl0eVxuICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IHN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nIHx8IHN0eWxlLm9wYWNpdHkgPT09ICcwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLy8gQ2hlY2sgZm9yIHRpdGxlLWxpa2UgZWxlbWVudFxuICBjb25zdCBoYXNUaXRsZSA9IFRJVExFX1NFTEVDVE9SUy5zb21lKHNlbCA9PiB7XG4gICAgY29uc3QgdGl0bGVFbCA9IGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcbiAgICByZXR1cm4gdGl0bGVFbCAmJiAodGl0bGVFbC50ZXh0Q29udGVudD8udHJpbSgpLmxlbmd0aCB8fCAwKSA+IDU7XG4gIH0pO1xuICBcbiAgaWYgKCFoYXNUaXRsZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5IG9mIGVsZW1lbnRzIHRvIHZhbGlkIGNvbnRlbnQgdW5pdHNcbiAqL1xuZnVuY3Rpb24gZmlsdGVyVmFsaWRVbml0cyhub2RlczogRWxlbWVudFtdKTogSFRNTEVsZW1lbnRbXSB7XG4gIHJldHVybiBBcnJheS5mcm9tKG5vZGVzKVxuICAgIC5maWx0ZXIoZWwgPT4gaXNWYWxpZENvbnRlbnRVbml0KGVsIGFzIEhUTUxFbGVtZW50KSkgYXMgSFRNTEVsZW1lbnRbXTtcbn1cblxuLyoqXG4gKiBEaXNjb3ZlciBjb250ZW50IHVuaXRzIHVzaW5nIHByaW9yaXR5LWJhc2VkIHNlbGVjdG9yc1xuICovXG5mdW5jdGlvbiBkaXNjb3ZlclVuaXRzUHJpb3JpdHkocm9vdDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50W10ge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNFTEVDVE9SX1BSSU9SSVRJRVMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgbm9kZXMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgY29uc3QgdmFsaWRVbml0cyA9IGZpbHRlclZhbGlkVW5pdHMoQXJyYXkuZnJvbShub2RlcykpO1xuICAgICAgXG4gICAgICBpZiAodmFsaWRVbml0cy5sZW5ndGggPj0gTUlOX1VOSVRTX1RIUkVTSE9MRCkge1xuICAgICAgICByZXR1cm4gdmFsaWRVbml0cztcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEludmFsaWQgc2VsZWN0b3IsIHNraXBcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEZhbGxiYWNrOiBkeW5hbWljIGRpc2NvdmVyeVxuICByZXR1cm4gZGlzY292ZXJVbml0c0R5bmFtaWMocm9vdCk7XG59XG5cbi8qKlxuICogRHluYW1pYyBmYWxsYmFjayBkaXNjb3ZlcnkgZm9yIGNvbnRlbnQgdW5pdHNcbiAqL1xuZnVuY3Rpb24gZGlzY292ZXJVbml0c0R5bmFtaWMocm9vdDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50W10ge1xuICBjb25zdCBjYW5kaWRhdGVzOiBIVE1MRWxlbWVudFtdID0gW107XG4gIGNvbnN0IGFsbERpdnMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdiwgc2VjdGlvbiwgbGksIGFydGljbGUnKTtcbiAgXG4gIGFsbERpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgIGNvbnN0IGh0bWxFbCA9IGRpdiBhcyBIVE1MRWxlbWVudDtcbiAgICBcbiAgICAvLyBMb29rIGZvciB0aXRsZSArIGNvbnRlbnQgcGF0dGVyblxuICAgIGNvbnN0IGNoaWxkcmVuID0gaHRtbEVsLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPCAyKSByZXR1cm47XG4gICAgXG4gICAgLy8gQ2hlY2sgZm9yIGhlYWRpbmcvbGluayAocG90ZW50aWFsIHRpdGxlKVxuICAgIGNvbnN0IGhhc0hlYWRpbmcgPSBodG1sRWwucXVlcnlTZWxlY3RvcignaDEsIGgyLCBoMywgaDQsIGg1LCBhW2hyZWZdJyk7XG4gICAgaWYgKCFoYXNIZWFkaW5nKSByZXR1cm47XG4gICAgXG4gICAgLy8gQ2hlY2sgZm9yIHRleHQgY29udGVudFxuICAgIGNvbnN0IHRleHQgPSBodG1sRWwuaW5uZXJUZXh0Py50cmltKCkgfHwgJyc7XG4gICAgaWYgKHRleHQubGVuZ3RoIDwgTUlOX1RFWFRfTEVOR1RIKSByZXR1cm47XG4gICAgXG4gICAgLy8gQXZvaWQgbmVzdGVkIGR1cGxpY2F0ZXNcbiAgICBjb25zdCBpc05lc3RlZCA9IGNhbmRpZGF0ZXMuc29tZShjID0+IGMuY29udGFpbnMoaHRtbEVsKSB8fCBodG1sRWwuY29udGFpbnMoYykpO1xuICAgIGlmICghaXNOZXN0ZWQgJiYgaXNWYWxpZENvbnRlbnRVbml0KGh0bWxFbCkpIHtcbiAgICAgIGNhbmRpZGF0ZXMucHVzaChodG1sRWwpO1xuICAgIH1cbiAgfSk7XG4gIFxuICAvLyBEZWR1cGxpY2F0ZSBhbmQgbGltaXRcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG4gIGNvbnN0IHJlc3VsdDogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICBcbiAgZm9yIChjb25zdCBlbCBvZiBjYW5kaWRhdGVzKSB7XG4gICAgbGV0IGhhc1BhcmVudCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qgb3RoZXIgb2YgY2FuZGlkYXRlcykge1xuICAgICAgaWYgKG90aGVyICE9PSBlbCAmJiBvdGhlci5jb250YWlucyhlbCkpIHtcbiAgICAgICAgaGFzUGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghaGFzUGFyZW50ICYmICFzZWVuLmhhcyhlbCkpIHtcbiAgICAgIHNlZW4uYWRkKGVsKTtcbiAgICAgIHJlc3VsdC5wdXNoKGVsKTtcbiAgICAgIFxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPj0gNTApIGJyZWFrOyAvLyBSZWFzb25hYmxlIGxpbWl0XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dHJhY3QgdGl0bGUgZnJvbSBhIGNvbnRlbnQgdW5pdFxuICovXG5mdW5jdGlvbiBleHRyYWN0VGl0bGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICBmb3IgKGNvbnN0IHNlbCBvZiBUSVRMRV9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCB0aXRsZUVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbCkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGNvbnN0IHRleHQgPSB0aXRsZUVsPy5pbm5lclRleHQ/LnRyaW0oKSB8fCB0aXRsZUVsPy50ZXh0Q29udGVudD8udHJpbSgpO1xuICAgIGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gNSkge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9XG4gIFxuICAvLyBGYWxsYmFjazogZmlyc3Qgc2lnbmlmaWNhbnQgdGV4dFxuICBjb25zdCBmaXJzdFRleHQgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuICAgIC5tYXAoZWwgPT4gKGVsIGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQ/LnRyaW0oKSlcbiAgICAuZmluZCh0ZXh0ID0+IHRleHQgJiYgdGV4dC5sZW5ndGggPiAxMCk7XG4gIFxuICByZXR1cm4gZmlyc3RUZXh0IHx8ICdDb250ZW50Jztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHNvdXJjZS9hdXRob3IgZnJvbSBhIGNvbnRlbnQgdW5pdFxuICovXG5mdW5jdGlvbiBleHRyYWN0U291cmNlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgZm9yIChjb25zdCBzZWwgb2YgU09VUkNFX1NFTEVDVE9SUykge1xuICAgIGNvbnN0IHNvdXJjZUVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbCkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGNvbnN0IHRleHQgPSBzb3VyY2VFbD8uaW5uZXJUZXh0Py50cmltKCkgfHwgc291cmNlRWw/LnRleHRDb250ZW50Py50cmltKCk7XG4gICAgaWYgKHRleHQgJiYgdGV4dC5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG59XG5cbi8qKlxuICogRXh0cmFjdCBtZXRhZGF0YSBmcm9tIGEgY29udGVudCB1bml0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RNZXRhZGF0YShlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZ1tdIHtcbiAgY29uc3QgbWV0YWRhdGE6IHN0cmluZ1tdID0gW107XG4gIFxuICAvLyBMb29rIGZvciBkYXRlL3RpbWVcbiAgY29uc3QgZGF0ZUVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0aW1lLCAuZGF0ZSwgLnBvc3QtZGF0ZSwgW2RhdGV0aW1lXScpO1xuICBpZiAoZGF0ZUVsKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGV0aW1lJykgfHwgZGF0ZUVsLnRleHRDb250ZW50Py50cmltKCk7XG4gICAgaWYgKGRhdGUpIG1ldGFkYXRhLnB1c2goZGF0ZSk7XG4gIH1cbiAgXG4gIC8vIExvb2sgZm9yIGNhdGVnb3J5L3RhZ1xuICBjb25zdCB0YWdFbHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWcsIC5jYXRlZ29yeSwgW3JlbD1cInRhZ1wiXScpO1xuICB0YWdFbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgY29uc3QgdGFnID0gKGVsIGFzIEhUTUxFbGVtZW50KS50ZXh0Q29udGVudD8udHJpbSgpO1xuICAgIGlmICh0YWcgJiYgdGFnLmxlbmd0aCA8IDMwKSB7XG4gICAgICBtZXRhZGF0YS5wdXNoKHRhZyk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBtZXRhZGF0YS5zbGljZSgwLCA1KTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXZlcnNhbEFkYXB0ZXI6IFNpdGVBZGFwdGVyID0ge1xuICBzaXRlSWQ6ICd1bml2ZXJzYWwnLFxuICBtYXRjaGVzOiBbLy4qL10sXG4gIFxuICBkaXNjb3ZlclVuaXRzOiBkaXNjb3ZlclVuaXRzUHJpb3JpdHksXG5cbiAgZXh0cmFjdERhdGEoZWxlbWVudCkge1xuICAgIGNvbnN0IHRpdGxlID0gZXh0cmFjdFRpdGxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNvdXJjZU5hbWUgPSBleHRyYWN0U291cmNlKGVsZW1lbnQpO1xuICAgIGNvbnN0IG1ldGFkYXRhID0gZXh0cmFjdE1ldGFkYXRhKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgZmluZ2VycHJpbnQgPSBnZW5lcmF0ZUZpbmdlcnByaW50KHsgXG4gICAgICB0aXRsZSwgXG4gICAgICBzb3VyY2VOYW1lLCBcbiAgICAgIHNpdGU6ICd1bml2ZXJzYWwnLCBcbiAgICAgIG1ldGFkYXRhIFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlbGVtZW50LmlkIHx8IGB1bmktJHtmaW5nZXJwcmludH1gLFxuICAgICAgc2l0ZTogJ3VuaXZlcnNhbCcsXG4gICAgICBmaW5nZXJwcmludCxcbiAgICAgIHNvdXJjZU5hbWUsXG4gICAgICB0aXRsZSxcbiAgICAgIG1ldGFkYXRhLFxuICAgICAgaXNOZXc6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgYXBwbHlEZWNpc2lvbihlbGVtZW50LCByZXN1bHQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcpO1xuICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJyc7XG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYWxtd2ViLWJsdXJyZWQnLCAnY2FsbXdlYi1oaWRkZW4nKTtcblxuICAgIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdoaWRlJykge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnaGlkZGVuJyk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdjb2xsYXBzZScpIHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gY3JlYXRlQ29sbGFwc2VQbGFjZWhvbGRlcih7XG4gICAgICAgIHJlYXNvbjogcmVzdWx0LnJlYXNvbixcbiAgICAgICAgb3JpZ2luYWxFbGVtZW50OiBlbGVtZW50LFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHNpdGVJZDogJ3VuaXZlcnNhbCcsXG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHBsYWNlaG9sZGVyKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJywgJ2NvbGxhcHNlZCcpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmRlY2lzaW9uID09PSAnYmx1cicpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FsbXdlYi1ibHVycmVkJyk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICdibHVyJyk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICduZXV0cmFsaXplJyAmJiByZXN1bHQubmV1dHJhbGl6ZWRUaXRsZSkge1xuICAgICAgY29uc3QgdGl0bGVFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihUSVRMRV9TRUxFQ1RPUlMuam9pbignLCAnKSkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgaWYgKHRpdGxlRWwpIHRpdGxlRWwuaW5uZXJUZXh0ID0gcmVzdWx0Lm5ldXRyYWxpemVkVGl0bGU7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICduZXV0cmFsaXplZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICdzaG93Jyk7XG4gICAgfVxuICB9XG59OyIsIi8qKlxuICogWW91VHViZSBTaXRlIEFkYXB0ZXIgZm9yIENhbG1XZWJcbiAqXG4gKiBIYW5kbGVzIGRpc2NvdmVyeSwgZXh0cmFjdGlvbiwgYW5kIGFwcGxpY2F0aW9uIG9mIGNsYXNzaWZpY2F0aW9uIGRlY2lzaW9uc1xuICogb24gWW91VHViZSB2aWRlbyBjYXJkcyAoeXRkLXJpY2gtaXRlbS1yZW5kZXJlciwgeXRkLXZpZGVvLXJlbmRlcmVyKS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFNpdGVBZGFwdGVyLCBDb250ZW50VW5pdCwgQ2xhc3NpZmljYXRpb25SZXN1bHQgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuaW1wb3J0IHsgZ2VuZXJhdGVGaW5nZXJwcmludCB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5pbXBvcnQgeyBjcmVhdGVDb2xsYXBzZVBsYWNlaG9sZGVyIH0gZnJvbSAnQC9zcmMvcmVuZGVyZXIvY29sbGFwc2UnO1xuXG4vLyBTZWxlY3RvcnMgKFlvdVR1YmUgdXNlcyBQb2x5bWVyL1NoYWRvdyBET00gc29tZXRpbWVzLCBidXQgdGhlc2Ugd29yayBvbiBsaWdodCBET00pXG5jb25zdCBTRUxFQ1RPUlMgPSB7XG4gIHZpZGVvQ2FyZDogJ3l0ZC1yaWNoLWl0ZW0tcmVuZGVyZXIsIHl0ZC12aWRlby1yZW5kZXJlciwgeXRkLWdyaWQtdmlkZW8tcmVuZGVyZXInLFxuICB0aXRsZTogJyN2aWRlby10aXRsZSwgYSN2aWRlby10aXRsZS1saW5rLCAjdmlkZW8tdGl0bGUgYScsXG4gIGNoYW5uZWw6ICcjdGV4dC55dGQtY2hhbm5lbC1uYW1lLCAjY2hhbm5lbC1uYW1lIGEsIHl0ZC1jaGFubmVsLW5hbWUnLFxuICBtZXRhZGF0YTogJyNtZXRhZGF0YS1saW5lIHl0LWZvcm1hdHRlZC1zdHJpbmcnLFxuICAvLyBGb3Igc2hvcnRzXG4gIHNob3J0Q2FyZDogJ3l0ZC1yZWVsLXZpZGVvLXJlbmRlcmVyJyxcbiAgc2hvcnRUaXRsZTogJyNvdmVybGF5ICN0aXRsZScsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIERpc2NvdmVyIGFsbCB2aWRlbyBjYXJkIGVsZW1lbnRzIHdpdGhpbiBhIHJvb3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyVW5pdHMocm9vdDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50W10ge1xuICBjb25zdCBub2RlcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMudmlkZW9DYXJkKTtcbiAgcmV0dXJuIEFycmF5LmZyb20obm9kZXMpIGFzIEhUTUxFbGVtZW50W107XG59XG5cbi8qKlxuICogRXh0cmFjdCBkYXRhIGZyb20gYSB2aWRlbyBjYXJkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REYXRhKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQ29udGVudFVuaXQge1xuICAvLyBGaW5kIHRpdGxlIHdpdGhpbiB0aGUgY2FyZFxuICBjb25zdCB0aXRsZUVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy50aXRsZSkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICBjb25zdCB0aXRsZSA9ICh0aXRsZUVsPy5pbm5lclRleHQgfHwgdGl0bGVFbD8udGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKSB8fCAnVW50aXRsZWQnO1xuXG4gIC8vIEZpbmQgY2hhbm5lbC9zb3VyY2UgbmFtZVxuICBjb25zdCBjaGFubmVsRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNoYW5uZWwpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgY29uc3Qgc291cmNlTmFtZSA9IChjaGFubmVsRWw/LmlubmVyVGV4dCB8fCBjaGFubmVsRWw/LnRleHRDb250ZW50IHx8ICcnKS50cmltKCkgfHwgdW5kZWZpbmVkO1xuXG4gIC8vIEV4dHJhY3QgbWV0YWRhdGEgc3RyaW5nc1xuICBjb25zdCBtZXRhZGF0YUVscyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMubWV0YWRhdGEpO1xuICBjb25zdCBtZXRhZGF0YSA9IEFycmF5LmZyb20obWV0YWRhdGFFbHMpXG4gICAgLm1hcChlbCA9PiAoKGVsIGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQgfHwgZWwudGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG4gIC8vIEdlbmVyYXRlIGZpbmdlcnByaW50ICh0aXRsZSArIHNvdXJjZSlcbiAgY29uc3QgZmluZ2VycHJpbnQgPSBnZW5lcmF0ZUZpbmdlcnByaW50KHsgdGl0bGUsIHNvdXJjZU5hbWUsIHNpdGU6ICd5b3V0dWJlJywgbWV0YWRhdGEgfSk7XG5cbiAgLy8gVXNlIGVsZW1lbnQuaWQgb3IgZ2VuZXJhdGUgYSB1bmlxdWUgSURcbiAgY29uc3QgaWQgPSBlbGVtZW50LmlkIHx8IGB5dC0ke2ZpbmdlcnByaW50fWA7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBzaXRlOiAneW91dHViZScsXG4gICAgZmluZ2VycHJpbnQsXG4gICAgc291cmNlTmFtZSxcbiAgICB0aXRsZSxcbiAgICBtZXRhZGF0YSxcbiAgICBpc05ldzogZmFsc2UsXG4gIH07XG59XG5cbi8qKlxuICogQXBwbHkgYSBjbGFzc2lmaWNhdGlvbiBkZWNpc2lvbiB0byBhIHZpZGVvIGNhcmQgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlEZWNpc2lvbihlbGVtZW50OiBIVE1MRWxlbWVudCwgcmVzdWx0OiBDbGFzc2lmaWNhdGlvblJlc3VsdCk6IHZvaWQge1xuICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcpO1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnJztcbiAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NhbG13ZWItYmx1cnJlZCcsICdjYWxtd2ViLWhpZGRlbicsICdjYWxtd2ViLW5ldXRyYWxpemVkJyk7XG5cbiAgaWYgKHJlc3VsdC5kZWNpc2lvbiA9PT0gJ2hpZGUnKSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJywgJ2hpZGRlbicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdjb2xsYXBzZScpIHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGNyZWF0ZUNvbGxhcHNlUGxhY2Vob2xkZXIoe1xuICAgICAgcmVhc29uOiByZXN1bHQucmVhc29uLFxuICAgICAgb3JpZ2luYWxFbGVtZW50OiBlbGVtZW50LFxuICAgICAgcmVzdWx0LFxuICAgICAgc2l0ZUlkOiAneW91dHViZScsXG4gICAgfSk7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHBsYWNlaG9sZGVyKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICdjb2xsYXBzZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmVzdWx0LmRlY2lzaW9uID09PSAnYmx1cicpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhbG13ZWItYmx1cnJlZCcpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJywgJ2JsdXInKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmVzdWx0LmRlY2lzaW9uID09PSAnbmV1dHJhbGl6ZScgJiYgcmVzdWx0Lm5ldXRyYWxpemVkVGl0bGUpIHtcbiAgICBjb25zdCB0aXRsZUVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy50aXRsZSkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICh0aXRsZUVsKSB7XG4gICAgICB0aXRsZUVsLmlubmVyVGV4dCA9IHJlc3VsdC5uZXV0cmFsaXplZFRpdGxlO1xuICAgICAgdGl0bGVFbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgcmVzdWx0Lm5ldXRyYWxpemVkVGl0bGUpO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhbG13ZWItbmV1dHJhbGl6ZWQnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICduZXV0cmFsaXplZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdyZWJ1aWxkJykge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICdyZWJ1aWxkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnc2hvdycpO1xufVxuXG4vKipcbiAqIFlvdVR1YmUgU2l0ZSBBZGFwdGVyXG4gKi9cbmV4cG9ydCBjb25zdCB5b3V0dWJlQWRhcHRlcjogU2l0ZUFkYXB0ZXIgPSB7XG4gIHNpdGVJZDogJ3lvdXR1YmUnLFxuICBtYXRjaGVzOiBbXG4gICAgL15odHRwcz86XFwvXFwvKHd3d1xcLik/eW91dHViZVxcLmNvbVxcLy4qLyxcbiAgICAvXmh0dHBzPzpcXC9cXC95b3V0dVxcLmJlXFwvLiovLFxuICBdLFxuICBkaXNjb3ZlclVuaXRzLFxuICBleHRyYWN0RGF0YSxcbiAgYXBwbHlEZWNpc2lvbixcbn07XG4iLCIvKipcbiAqIFJlZGRpdCBTaXRlIEFkYXB0ZXIgZm9yIENhbG1XZWJcbiAqXG4gKiBIYW5kbGVzIFJlZGRpdCBwb3N0IGNhcmRzIG9uIGJvdGggbmV3IFJlZGRpdCAocmVkZGl0LmNvbSkgYW5kIG9sZCBmb3JtYXQuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBTaXRlQWRhcHRlciwgQ29udGVudFVuaXQsIENsYXNzaWZpY2F0aW9uUmVzdWx0IH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcbmltcG9ydCB7IGdlbmVyYXRlRmluZ2VycHJpbnQgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGFwc2VQbGFjZWhvbGRlciB9IGZyb20gJ0Avc3JjL3JlbmRlcmVyL2NvbGxhcHNlJztcblxuLy8gTmV3IFJlZGRpdCBzZWxlY3RvcnNcbmNvbnN0IE5FV19SRURESVQgPSB7XG4gIHBvc3RDYXJkOiAnW2RhdGEtdGVzdGlkPVwicG9zdC1jb250YWluZXJcIl0sIGRpdltkYXRhLWNsaWNrLWlkPVwiYm9keVwiXScsXG4gIHRpdGxlOiAnW2RhdGEtdGVzdGlkPVwicG9zdC10aXRsZVwiXSwgaDMnLFxuICBzdWJyZWRkaXQ6ICdbZGF0YS10ZXN0aWQ9XCJzdWJyZWRkaXQtbmFtZVwiXSBhLCBhW2hyZWYqPVwiL3IvXCJdJyxcbiAgbWV0YWRhdGE6ICdbZGF0YS10ZXN0aWQ9XCJwb3N0LW9wdGlvbnMtbWVudVwiXSBzcGFuLCAudGV4dC1uZXV0cmFsLWNvbnRlbnQnLFxufSBhcyBjb25zdDtcblxuLy8gT2xkIFJlZGRpdCBzZWxlY3RvcnMgKGZhbGxiYWNrKVxuY29uc3QgT0xEX1JFRERJVCA9IHtcbiAgcG9zdENhcmQ6ICcudGhpbmcudGhpbmctdHlwZS1zZWxmLCAudGhpbmcudGhpbmctdHlwZS1saW5rJyxcbiAgdGl0bGU6ICcudGl0bGUgYScsXG4gIHN1YnJlZGRpdDogJy5zdWJyZWRkaXQgYScsXG4gIG1ldGFkYXRhOiAnLnRhZ2xpbmUgc3BhbicsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIENoZWNrIGlmIHdlJ3JlIG9uIG5ldyBSZWRkaXRcbiAqL1xuZnVuY3Rpb24gaXNOZXdSZWRkaXQoKTogYm9vbGVhbiB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICd3d3cucmVkZGl0LmNvbScgfHxcbiAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ3JlZGRpdC5jb20nO1xufVxuXG4vKipcbiAqIERpc2NvdmVyIGFsbCBwb3N0IGNhcmQgZWxlbWVudHMgd2l0aGluIGEgcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzY292ZXJVbml0cyhyb290OiBEb2N1bWVudCB8IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSB7XG4gIGNvbnN0IHNlbGVjdG9ycyA9IGlzTmV3UmVkZGl0KClcbiAgICA/IE5FV19SRURESVQucG9zdENhcmRcbiAgICA6IGAke05FV19SRURESVQucG9zdENhcmR9LCAke09MRF9SRURESVQucG9zdENhcmR9YDtcblxuICBjb25zdCBub2RlcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpO1xuICByZXR1cm4gQXJyYXkuZnJvbShub2RlcykgYXMgSFRNTEVsZW1lbnRbXTtcbn1cblxuLyoqXG4gKiBFeHRyYWN0IGRhdGEgZnJvbSBhIFJlZGRpdCBwb3N0IGNhcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REYXRhKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQ29udGVudFVuaXQge1xuICBjb25zdCBuZXdSZWRkaXQgPSBpc05ld1JlZGRpdCgpO1xuICBjb25zdCB0aXRsZUVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKG5ld1JlZGRpdCA/IE5FV19SRURESVQudGl0bGUgOiBPTERfUkVERElULnRpdGxlKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gIGNvbnN0IHRpdGxlID0gKHRpdGxlRWw/LmlubmVyVGV4dCB8fCB0aXRsZUVsPy50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpIHx8ICdVbnRpdGxlZCc7XG5cbiAgY29uc3Qgc3VicmVkZGl0RWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IobmV3UmVkZGl0ID8gTkVXX1JFRERJVC5zdWJyZWRkaXQgOiBPTERfUkVERElULnN1YnJlZGRpdCkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICBsZXQgc291cmNlTmFtZSA9IChzdWJyZWRkaXRFbD8uaW5uZXJUZXh0IHx8IHN1YnJlZGRpdEVsPy50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgaWYgKCFzb3VyY2VOYW1lICYmIHN1YnJlZGRpdEVsKSB7XG4gICAgLy8gVHJ5IHRvIGV4dHJhY3QgZnJvbSBocmVmIGlmIGl0J3MgYW4gYW5jaG9yXG4gICAgY29uc3QgYW5jaG9yID0gc3VicmVkZGl0RWwgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgaWYgKGFuY2hvci5nZXRBdHRyaWJ1dGU/LignaHJlZicpKSB7XG4gICAgICBjb25zdCBocmVmID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgICAgY29uc3QgbWF0Y2ggPSBocmVmLm1hdGNoKC9cXC9yXFwvKFteXFwvXSspLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgc291cmNlTmFtZSA9IGByLyR7bWF0Y2hbMV19YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRhZGF0YUVscyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChuZXdSZWRkaXQgPyBORVdfUkVERElULm1ldGFkYXRhIDogT0xEX1JFRERJVC5tZXRhZGF0YSk7XG4gIGNvbnN0IG1ldGFkYXRhID0gQXJyYXkuZnJvbShtZXRhZGF0YUVscylcbiAgICAubWFwKGVsID0+ICgoZWwgYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dCB8fCBlbC50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpKVxuICAgIC5maWx0ZXIoQm9vbGVhbik7XG5cbiAgY29uc3QgZmluZ2VycHJpbnQgPSBnZW5lcmF0ZUZpbmdlcnByaW50KHsgdGl0bGUsIHNvdXJjZU5hbWUsIHNpdGU6ICdyZWRkaXQnLCBtZXRhZGF0YSB9KTtcbiAgY29uc3QgaWQgPSBlbGVtZW50LmlkIHx8IGByZWRkaXQtJHtmaW5nZXJwcmludH1gO1xuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgc2l0ZTogJ3JlZGRpdCcsXG4gICAgZmluZ2VycHJpbnQsXG4gICAgc291cmNlTmFtZSxcbiAgICB0aXRsZSxcbiAgICBtZXRhZGF0YSxcbiAgICBpc05ldzogZmFsc2UsXG4gIH07XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3NpZmljYXRpb24gZGVjaXNpb24gdG8gYSBSZWRkaXQgcG9zdCBjYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseURlY2lzaW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCByZXN1bHQ6IENsYXNzaWZpY2F0aW9uUmVzdWx0KTogdm9pZCB7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJyk7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICcnO1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NhbG13ZWItYmx1cnJlZCcsICdjYWxtd2ViLWhpZGRlbicsICdjYWxtd2ViLW5ldXRyYWxpemVkJyk7XG5cbiAgaWYgKHJlc3VsdC5kZWNpc2lvbiA9PT0gJ2hpZGUnKSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJywgJ2hpZGRlbicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdjb2xsYXBzZScpIHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGNyZWF0ZUNvbGxhcHNlUGxhY2Vob2xkZXIoe1xuICAgICAgcmVhc29uOiByZXN1bHQucmVhc29uLFxuICAgICAgb3JpZ2luYWxFbGVtZW50OiBlbGVtZW50LFxuICAgICAgcmVzdWx0LFxuICAgICAgc2l0ZUlkOiAncmVkZGl0JyxcbiAgICB9KTtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgcGxhY2Vob2xkZXIpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJywgJ2NvbGxhcHNlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdibHVyJykge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FsbXdlYi1ibHVycmVkJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnYmx1cicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICduZXV0cmFsaXplJyAmJiByZXN1bHQubmV1dHJhbGl6ZWRUaXRsZSkge1xuICAgIGNvbnN0IG5ld1JlZGRpdCA9IGlzTmV3UmVkZGl0KCk7XG4gICAgY29uc3QgdGl0bGVFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihuZXdSZWRkaXQgPyBORVdfUkVERElULnRpdGxlIDogT0xEX1JFRERJVC50aXRsZSkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICh0aXRsZUVsKSB7XG4gICAgICB0aXRsZUVsLmlubmVyVGV4dCA9IHJlc3VsdC5uZXV0cmFsaXplZFRpdGxlO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhbG13ZWItbmV1dHJhbGl6ZWQnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICduZXV0cmFsaXplZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdyZWJ1aWxkJykge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLXByb2Nlc3NlZCcsICdyZWJ1aWxkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnc2hvdycpO1xufVxuXG4vKipcbiAqIFJlZGRpdCBTaXRlIEFkYXB0ZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZGRpdEFkYXB0ZXI6IFNpdGVBZGFwdGVyID0ge1xuICBzaXRlSWQ6ICdyZWRkaXQnLFxuICBtYXRjaGVzOiBbXG4gICAgL15odHRwcz86XFwvXFwvKHd3d1xcLik/cmVkZGl0XFwuY29tXFwvLiovLFxuICAgIC9eaHR0cHM/OlxcL1xcL29sZFxcLnJlZGRpdFxcLmNvbVxcLy4qLyxcbiAgXSxcbiAgZGlzY292ZXJVbml0cyxcbiAgZXh0cmFjdERhdGEsXG4gIGFwcGx5RGVjaXNpb24sXG59O1xuIiwiLyoqXG4gKiBYIChUd2l0dGVyKSBTaXRlIEFkYXB0ZXIgZm9yIENhbG1XZWJcbiAqXG4gKiBIYW5kbGVzIHR3ZWV0IGNhcmRzIGluIHRpbWVsaW5lcywgc2VhcmNoIHJlc3VsdHMsIGFuZCB0aHJlYWRzLlxuICovXG5cbmltcG9ydCB0eXBlIHsgU2l0ZUFkYXB0ZXIsIENvbnRlbnRVbml0LCBDbGFzc2lmaWNhdGlvblJlc3VsdCB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5pbXBvcnQgeyBnZW5lcmF0ZUZpbmdlcnByaW50IH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcbmltcG9ydCB7IGNyZWF0ZUNvbGxhcHNlUGxhY2Vob2xkZXIgfSBmcm9tICdAL3NyYy9yZW5kZXJlci9jb2xsYXBzZSc7XG5cbi8vIFggc2VsZWN0b3JzIChkYXRhLXRlc3RJRHMgYXJlIHJlbGF0aXZlbHkgc3RhYmxlKVxuY29uc3QgU0VMRUNUT1JTID0ge1xuICB0d2VldDogJ1tkYXRhLXRlc3RpZD1cInR3ZWV0XCJdLCBbZGF0YS10ZXN0aWQ9XCJjZWxsSW5uZXJEaXZcIl0nLFxuICB0ZXh0OiAnW2RhdGEtdGVzdGlkPVwidHdlZXRUZXh0XCJdLCAueC13aTVqNmMnLFxuICB1c2VyTmFtZTogJ1tkYXRhLXRlc3RpZD1cIlVzZXItTmFtZVwiXSBbZGF0YS10ZXN0aWQ9XCJVc2VyLU5hbWVcIl0gLCBbZGF0YS10ZXN0aWQ9XCJfdXNlclwiXSAsIC5jc3MtOTAxb2FvIGEnLFxuICBkaXNwbGF5TmFtZTogJ1tkYXRhLXRlc3RpZD1cIlVzZXItTmFtZVwiXSBzcGFuLCAuY3NzLTkwMW9hbyBzcGFuOmZpcnN0LWNoaWxkJyxcbiAgLy8gRm9yIG1lZGlhIGNhcmRzXG4gIG1lZGlhQ2FyZDogJ1tkYXRhLXRlc3RpZD1cInR3ZWV0XCJdIGFydGljbGUnLFxufSBhcyBjb25zdDtcblxuLyoqXG4gKiBEaXNjb3ZlciBhbGwgdHdlZXQgZWxlbWVudHMgd2l0aGluIGEgcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzY292ZXJVbml0cyhyb290OiBEb2N1bWVudCB8IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSB7XG4gIGNvbnN0IHR3ZWV0cyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMudHdlZXQpO1xuICByZXR1cm4gQXJyYXkuZnJvbSh0d2VldHMpIGFzIEhUTUxFbGVtZW50W107XG59XG5cbi8qKlxuICogRXh0cmFjdCBkYXRhIGZyb20gYSB0d2VldCBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RGF0YShlbGVtZW50OiBIVE1MRWxlbWVudCk6IENvbnRlbnRVbml0IHtcbiAgLy8gR2V0IHR3ZWV0IHRleHRcbiAgY29uc3QgdGV4dEVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy50ZXh0KSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gIGNvbnN0IHRpdGxlID0gKHRleHRFbD8uaW5uZXJUZXh0IHx8IHRleHRFbD8udGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKSB8fCAnTm8gdGV4dCc7XG5cbiAgLy8gR2V0IHVzZXIgZGlzcGxheSBuYW1lIGFzIHNvdXJjZU5hbWVcbiAgY29uc3QgZGlzcGxheU5hbWVFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuZGlzcGxheU5hbWUpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgY29uc3Qgc291cmNlTmFtZSA9IChkaXNwbGF5TmFtZUVsPy5pbm5lclRleHQgfHwgZGlzcGxheU5hbWVFbD8udGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKSB8fCB1bmRlZmluZWQ7XG5cbiAgLy8gTWV0YWRhdGEgY291bGQgaW5jbHVkZSB1c2VyIGhhbmRsZSwgdGltZXN0YW1wLCByZXR3ZWV0cywgbGlrZXMsIGV0Yy5cbiAgY29uc3QgbWV0YUVscyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGVzdGlkKj1cImVuZ2FnZW1lbnRcIl0gc3BhbiwgW2RhdGEtdGVzdGlkPVwidGltZXN0YW1wXCJdJyk7XG4gIGNvbnN0IG1ldGFkYXRhID0gQXJyYXkuZnJvbShtZXRhRWxzKVxuICAgIC5tYXAoZWwgPT4gKChlbCBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0IHx8IGVsLnRleHRDb250ZW50IHx8ICcnKS50cmltKCkpXG4gICAgLmZpbHRlcihCb29sZWFuKTtcblxuICBjb25zdCBmaW5nZXJwcmludCA9IGdlbmVyYXRlRmluZ2VycHJpbnQoeyB0aXRsZSwgc291cmNlTmFtZSwgc2l0ZTogJ3gnLCBtZXRhZGF0YSB9KTtcbiAgY29uc3QgaWQgPSBlbGVtZW50LmlkIHx8IGB4LSR7ZmluZ2VycHJpbnR9YDtcblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIHNpdGU6ICd4JyxcbiAgICBmaW5nZXJwcmludCxcbiAgICBzb3VyY2VOYW1lLFxuICAgIHRpdGxlLFxuICAgIG1ldGFkYXRhLFxuICAgIGlzTmV3OiBmYWxzZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBseSBjbGFzc2lmaWNhdGlvbiBkZWNpc2lvbiB0byBhIHR3ZWV0IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RGVjaXNpb24oZWxlbWVudDogSFRNTEVsZW1lbnQsIHJlc3VsdDogQ2xhc3NpZmljYXRpb25SZXN1bHQpOiB2b2lkIHtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnKTtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJyc7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2FsbXdlYi1ibHVycmVkJywgJ2NhbG13ZWItaGlkZGVuJywgJ2NhbG13ZWItbmV1dHJhbGl6ZWQnKTtcblxuICBpZiAocmVzdWx0LmRlY2lzaW9uID09PSAnaGlkZScpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnaGlkZGVuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHJlc3VsdC5kZWNpc2lvbiA9PT0gJ2NvbGxhcHNlJykge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gY3JlYXRlQ29sbGFwc2VQbGFjZWhvbGRlcih7XG4gICAgICByZWFzb246IHJlc3VsdC5yZWFzb24sXG4gICAgICBvcmlnaW5hbEVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICByZXN1bHQsXG4gICAgICBzaXRlSWQ6ICd4JyxcbiAgICB9KTtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgcGxhY2Vob2xkZXIpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJywgJ2NvbGxhcHNlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICdibHVyJykge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FsbXdlYi1ibHVycmVkJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnYmx1cicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQuZGVjaXNpb24gPT09ICduZXV0cmFsaXplJyAmJiByZXN1bHQubmV1dHJhbGl6ZWRUaXRsZSkge1xuICAgIGNvbnN0IHRleHRFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMudGV4dCkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICh0ZXh0RWwpIHtcbiAgICAgIHRleHRFbC5pbm5lclRleHQgPSByZXN1bHQubmV1dHJhbGl6ZWRUaXRsZTtcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYWxtd2ViLW5ldXRyYWxpemVkJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAnbmV1dHJhbGl6ZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmVzdWx0LmRlY2lzaW9uID09PSAncmVidWlsZCcpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnLCAncmVidWlsZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNhbG13ZWItcHJvY2Vzc2VkJywgJ3Nob3cnKTtcbn1cblxuLyoqXG4gKiBYIFNpdGUgQWRhcHRlclxuICovXG5leHBvcnQgY29uc3QgeEFkYXB0ZXI6IFNpdGVBZGFwdGVyID0ge1xuICBzaXRlSWQ6ICd4JyxcbiAgbWF0Y2hlczogW1xuICAgIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP3hcXC5jb21cXC8uKi8sXG4gICAgL15odHRwcz86XFwvXFwvKHd3d1xcLik/dHdpdHRlclxcLmNvbVxcLy4qLyxcbiAgXSxcbiAgZGlzY292ZXJVbml0cyxcbiAgZXh0cmFjdERhdGEsXG4gIGFwcGx5RGVjaXNpb24sXG59O1xuIiwiLyoqXG4gKiBHb29nbGUgU2VhcmNoIEFkYXB0ZXIgZm9yIENhbG1XZWJcbiAqXG4gKiBJbnN0ZWFkIG9mIHRyeWluZyB0byBmaWx0ZXIgR29vZ2xlJ3MgY29tcGxleCBET00gKHdoaWNoIGZyZWV6ZXMpLFxuICogd2UgZXh0cmFjdCBzZWFyY2ggcmVzdWx0cyBhbmQgZGlzcGxheSB0aGVtIGluIGEgY2xlYW4gU3VwZXIgUmVhZGVyIHZpZXcuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVTZWFyY2hSZXN1bHQge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgc25pcHBldDogc3RyaW5nO1xuICBzb3VyY2U6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVTZWFyY2hEYXRhIHtcbiAgcXVlcnk6IHN0cmluZztcbiAgcmVzdWx0czogR29vZ2xlU2VhcmNoUmVzdWx0W107XG4gIHJlc3VsdENvdW50OiBudW1iZXI7XG59XG5cbmNvbnN0IFJFU1VMVF9TRUxFQ1RPUlMgPSBbXG4gIC8vIE1haW4gc2VhcmNoIHJlc3VsdHNcbiAgJyNzZWFyY2ggLmcnLFxuICAnI3JzbyAuZycsXG4gICdbZGF0YS1odmVpZF0gLmcnLFxuICAvLyBBbHRlcm5hdGl2ZSBzZWxlY3RvcnNcbiAgJy50RjJDeGMnLFxuICAnLnl1UlViZicsXG5dO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgYSBHb29nbGUgc2VhcmNoIHJlc3VsdHMgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNHb29nbGVTZWFyY2hQYWdlKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgVVJMKHVybCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHBhcnNlZC5ob3N0bmFtZS5pbmNsdWRlcygnZ29vZ2xlLicpICYmXG4gICAgICBwYXJzZWQucGF0aG5hbWUgPT09ICcvc2VhcmNoJyAmJlxuICAgICAgcGFyc2VkLnNlYXJjaFBhcmFtcy5oYXMoJ3EnKVxuICAgICk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgc2VhcmNoIHF1ZXJ5IGZyb20gdGhlIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoUXVlcnkoKTogc3RyaW5nIHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgcmV0dXJuIHBhcmFtcy5nZXQoJ3EnKSB8fCAnJztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHNlYXJjaCByZXN1bHRzIGZyb20gdGhlIEdvb2dsZSBzZWFyY2ggcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFNlYXJjaFJlc3VsdHMoZG9jOiBEb2N1bWVudCA9IGRvY3VtZW50KTogR29vZ2xlU2VhcmNoUmVzdWx0W10ge1xuICBjb25zdCByZXN1bHRzOiBHb29nbGVTZWFyY2hSZXN1bHRbXSA9IFtdO1xuICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgLy8gVHJ5IGVhY2ggc2VsZWN0b3IgcGF0dGVyblxuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFJFU1VMVF9TRUxFQ1RPUlMpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBodG1sID0gZWwgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIC8vIEV4dHJhY3QgdGl0bGUgYW5kIFVSTFxuICAgICAgY29uc3QgdGl0bGVFbCA9IGh0bWwucXVlcnlTZWxlY3RvcignaDMnKTtcbiAgICAgIGNvbnN0IGxpbmtFbCA9IGh0bWwucXVlcnlTZWxlY3RvcignYVtocmVmXj1cImh0dHBcIl0sIGFbaHJlZl49XCIvdXJsXCJdJyk7XG5cbiAgICAgIGlmICghdGl0bGVFbCB8fCAhbGlua0VsKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbC50ZXh0Q29udGVudD8udHJpbSgpIHx8ICcnO1xuICAgICAgbGV0IHVybCA9IGxpbmtFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcblxuICAgICAgLy8gSGFuZGxlIEdvb2dsZSdzIHJlZGlyZWN0IFVSTHNcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnL3VybD8nKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsLnN1YnN0cmluZyg0KSk7XG4gICAgICAgICAgdXJsID0gcGFyYW1zLmdldCgncScpIHx8IHBhcmFtcy5nZXQoJ3VybCcpIHx8IHVybDtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gS2VlcCBvcmlnaW5hbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNraXAgaWYgbm8gdGl0bGUgb3IgZHVwbGljYXRlIFVSTFxuICAgICAgaWYgKCF0aXRsZSB8fCBzZWVuLmhhcyh1cmwpKSByZXR1cm47XG4gICAgICBzZWVuLmFkZCh1cmwpO1xuXG4gICAgICAvLyBFeHRyYWN0IHNuaXBwZXRcbiAgICAgIGNvbnN0IHNuaXBwZXRTZWxlY3RvcnMgPSBbXG4gICAgICAgICcuVndpQzNiJyxcbiAgICAgICAgJy5Jc1p2ZWMnLFxuICAgICAgICAnW2RhdGEtc25jZl0nLFxuICAgICAgICAnLnMzdjlyZCcsXG4gICAgICAgICcuc3QnLFxuICAgICAgXTtcbiAgICAgIGxldCBzbmlwcGV0ID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IHNlbCBvZiBzbmlwcGV0U2VsZWN0b3JzKSB7XG4gICAgICAgIGNvbnN0IHNuaXBwZXRFbCA9IGh0bWwucXVlcnlTZWxlY3RvcihzZWwpO1xuICAgICAgICBpZiAoc25pcHBldEVsPy50ZXh0Q29udGVudCkge1xuICAgICAgICAgIHNuaXBwZXQgPSBzbmlwcGV0RWwudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dHJhY3Qgc291cmNlIGRvbWFpblxuICAgICAgbGV0IHNvdXJjZSA9ICcnO1xuICAgICAgdHJ5IHtcbiAgICAgICAgc291cmNlID0gbmV3IFVSTCh1cmwpLmhvc3RuYW1lO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNvdXJjZSA9ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyBTa2lwIG5vbi1odHRwIGxpbmtzIChhZHMsIGludGVybmFsIEdvb2dsZSBsaW5rcylcbiAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG4gICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdXJsLFxuICAgICAgICBzbmlwcGV0LFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIHBvc2l0aW9uOiByZXN1bHRzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogRXh0cmFjdCBhbGwgc2VhcmNoIGRhdGEgZnJvbSB0aGUgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFNlYXJjaERhdGEoZG9jOiBEb2N1bWVudCA9IGRvY3VtZW50KTogR29vZ2xlU2VhcmNoRGF0YSB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IGdldFNlYXJjaFF1ZXJ5KCksXG4gICAgcmVzdWx0czogZXh0cmFjdFNlYXJjaFJlc3VsdHMoZG9jKSxcbiAgICByZXN1bHRDb3VudDogZXh0cmFjdFNlYXJjaFJlc3VsdHMoZG9jKS5sZW5ndGgsXG4gIH07XG59XG4iLCIvKipcbiAqIE1lc3NhZ2luZyBwcm90b2NvbCBmb3IgQ2FsbVdlYlxuICpcbiAqIERlZmluZXMgbWVzc2FnZSB0eXBlcyBhbmQgcGF5bG9hZHMgZm9yIGNvbW11bmljYXRpb24gYmV0d2VlblxuICogY29udGVudCBzY3JpcHRzLCBiYWNrZ3JvdW5kIHdvcmtlciwgcG9wdXAsIGFuZCBvcHRpb25zIHBhZ2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBDb250ZW50VW5pdCwgQ2xhc3NpZmljYXRpb25SZXN1bHQsIFVzZXJTZXR0aW5ncywgU3RhdHMgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFR5cGUgQ29uc3RhbnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEVTID0ge1xuICAvLyBDbGFzc2lmaWNhdGlvblxuICBDTEFTU0lGWV9VTklUOiAnY2FsbXdlYjpjbGFzc2lmeVVuaXQnLFxuICAvLyBTZXR0aW5ncyBtYW5hZ2VtZW50XG4gIEdFVF9TRVRUSU5HUzogJ2NhbG13ZWI6Z2V0U2V0dGluZ3MnLFxuICBVUERBVEVfU0VUVElOR1M6ICdjYWxtd2ViOnVwZGF0ZVNldHRpbmdzJyxcbiAgLy8gQ2FjaGUgbWFuYWdlbWVudFxuICBDTEVBUl9DQUNIRTogJ2NhbG13ZWI6Y2xlYXJDYWNoZScsXG4gIC8vIFN0YXRpc3RpY3NcbiAgR0VUX1NUQVRTOiAnY2FsbXdlYjpnZXRTdGF0cycsXG4gIElOQ1JFTUVOVF9TVEFUOiAnY2FsbXdlYjppbmNyZW1lbnRTdGF0JyxcbiAgLy8gUmVhZGVyXG4gIFRPR0dMRV9SRUFERVI6ICdjYWxtd2ViOnRvZ2dsZVJlYWRlcicsXG4gIE9QRU5fUkVBREVSOiAnY2FsbXdlYjpvcGVuUmVhZGVyJyxcbiAgQ0xPU0VfUkVBREVSOiAnY2FsbXdlYjpjbG9zZVJlYWRlcicsXG4gIC8vIEFJIENvbm5lY3Rpb25cbiAgVEVTVF9DT05ORUNUSU9OOiAnY2FsbXdlYjp0ZXN0Q29ubmVjdGlvbicsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlVHlwZSA9IHR5cGVvZiBNRVNTQUdFX1RZUEVTW2tleW9mIHR5cGVvZiBNRVNTQUdFX1RZUEVTXTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVzc2FnZSBQYXlsb2FkIFR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NpZnlVbml0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkNMQVNTSUZZX1VOSVQ7XG4gIHVuaXQ6IENvbnRlbnRVbml0O1xufVxuXG5leHBvcnQgdHlwZSBDbGFzc2lmeVVuaXRSZXNwb25zZSA9IENsYXNzaWZpY2F0aW9uUmVzdWx0IHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U2V0dGluZ3NNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuR0VUX1NFVFRJTkdTO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNldHRpbmdzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLlVQREFURV9TRVRUSU5HUztcbiAgc2V0dGluZ3M6IFBhcnRpYWw8VXNlclNldHRpbmdzPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXR0aW5nc1Jlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckNhY2hlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkNMRUFSX0NBQ0hFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFyQ2FjaGVSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U3RhdHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuR0VUX1NUQVRTO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluY3JlbWVudFN0YXRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuSU5DUkVNRU5UX1NUQVQ7XG4gIGtleTogJ3RvdGFsRmlsdGVyZWQnO1xuICBhbW91bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdENvbm5lY3Rpb25NZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1FU1NBR0VfVFlQRVMuVEVTVF9DT05ORUNUSU9OO1xuICBhcGlLZXk6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIGVuZHBvaW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RDb25uZWN0aW9uUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBtb2RlbD86IHN0cmluZztcbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVuaW9uIFR5cGUgZm9yIEFsbCBNZXNzYWdlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDYWxtV2ViTWVzc2FnZSA9IFxuICB8IENsYXNzaWZ5VW5pdE1lc3NhZ2VcbiAgfCBHZXRTZXR0aW5nc01lc3NhZ2VcbiAgfCBVcGRhdGVTZXR0aW5nc01lc3NhZ2VcbiAgfCBDbGVhckNhY2hlTWVzc2FnZVxuICB8IEdldFN0YXRzTWVzc2FnZVxuICB8IEluY3JlbWVudFN0YXRNZXNzYWdlXG4gIHwgVGVzdENvbm5lY3Rpb25NZXNzYWdlO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXNwb25zZSBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBHZXRTZXR0aW5nc1Jlc3BvbnNlID0gVXNlclNldHRpbmdzO1xuZXhwb3J0IHR5cGUgR2V0U3RhdHNSZXNwb25zZSA9IFN0YXRzO1xuZXhwb3J0IHR5cGUgSW5jcmVtZW50U3RhdFJlc3BvbnNlID0gU3RhdHM7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgVmFsaWRhdGlvbiAocnVudGltZSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbmNvbnN0IENsYXNzaWZ5VW5pdE1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkNMQVNTSUZZX1VOSVQpLFxuICB1bml0OiB6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCksXG4gICAgc2l0ZTogei5zdHJpbmcoKSxcbiAgICBmaW5nZXJwcmludDogei5zdHJpbmcoKSxcbiAgICBzb3VyY2VOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgdGl0bGU6IHouc3RyaW5nKCksXG4gICAgbWV0YWRhdGE6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gICAgaXNOZXc6IHouYm9vbGVhbigpLFxuICAgIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLFxuICB9KSxcbn0pO1xuXG5jb25zdCBHZXRTZXR0aW5nc01lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLkdFVF9TRVRUSU5HUyksXG59KTtcblxuY29uc3QgVXBkYXRlU2V0dGluZ3NNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5VUERBVEVfU0VUVElOR1MpLFxuICBzZXR0aW5nczogei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcHJvY2Vzc2luZ01vZGU6IHouZW51bShbJ2xvY2FsX3J1bGVzJywgJ2J5b2tfbGxtJywgJ2hvc3RlZF9sbG0nXSkub3B0aW9uYWwoKSxcbiAgICBzdHJpY3RuZXNzOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMTAwKS5vcHRpb25hbCgpLFxuICAgIHJ1bGVzOiB6Lm9iamVjdCh7XG4gICAgICBibG9ja2xpc3RDaGFubmVsczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgYmxvY2tsaXN0S2V5d29yZHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICAgIGFsbG93bGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBhbGxvd2xpc3RLZXl3b3Jkczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgcHJlc2V0czogei5vYmplY3Qoe1xuICAgICAgICBwb2xpdGljczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgICAgcmFnZWJhaXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICAgIHNwb2lsZXJzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICBjbGlja2JhaXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICB9KS5vcHRpb25hbCgpLFxuICAgIH0pLm9wdGlvbmFsKCksXG4gICAgYnlva0tleTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB9KSxcbn0pO1xuXG5jb25zdCBDbGVhckNhY2hlTWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5saXRlcmFsKE1FU1NBR0VfVFlQRVMuQ0xFQVJfQ0FDSEUpLFxufSk7XG5cbmNvbnN0IEdldFN0YXRzTWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5saXRlcmFsKE1FU1NBR0VfVFlQRVMuR0VUX1NUQVRTKSxcbn0pO1xuXG5jb25zdCBJbmNyZW1lbnRTdGF0TWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5saXRlcmFsKE1FU1NBR0VfVFlQRVMuSU5DUkVNRU5UX1NUQVQpLFxuICBrZXk6IHoubGl0ZXJhbCgndG90YWxGaWx0ZXJlZCcpLFxuICBhbW91bnQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBUZXN0Q29ubmVjdGlvbk1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNRVNTQUdFX1RZUEVTLlRFU1RfQ09OTkVDVElPTiksXG4gIGFwaUtleTogei5zdHJpbmcoKSxcbiAgbW9kZWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW5kcG9pbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgTWVzc2FnZVNjaGVtYSA9IHouZGlzY3JpbWluYXRlZFVuaW9uKCd0eXBlJywgW1xuICBDbGFzc2lmeVVuaXRNZXNzYWdlU2NoZW1hLFxuICBHZXRTZXR0aW5nc01lc3NhZ2VTY2hlbWEsXG4gIFVwZGF0ZVNldHRpbmdzTWVzc2FnZVNjaGVtYSxcbiAgQ2xlYXJDYWNoZU1lc3NhZ2VTY2hlbWEsXG4gIEdldFN0YXRzTWVzc2FnZVNjaGVtYSxcbiAgSW5jcmVtZW50U3RhdE1lc3NhZ2VTY2hlbWEsXG4gIFRlc3RDb25uZWN0aW9uTWVzc2FnZVNjaGVtYSxcbl0pO1xuXG4vKipcbiAqIFZhbGlkYXRlIGEgbWVzc2FnZSBwYXlsb2FkIGFnYWluc3QgdGhlIHNjaGVtYS5cbiAqIFRocm93cyBpZiBpbnZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKG1lc3NhZ2U6IHVua25vd24pOiBDYWxtV2ViTWVzc2FnZSB7XG4gIC8vIEZvciBub3csIHBlcmZvcm0gcnVudGltZSB0eXBlIGFzc2VydGlvbi4gRnV0dXJlOiB1c2UgTWVzc2FnZVNjaGVtYS5wYXJzZShtZXNzYWdlKVxuICByZXR1cm4gbWVzc2FnZSBhcyBDYWxtV2ViTWVzc2FnZTtcbn1cbiIsIi8qKlxuICogQWQgRmlsdGVyIE1vZHVsZSBmb3IgQ2FsbVdlYlxuICpcbiAqIFByb3ZpZGVzIGJhY2t1cCBhZC1ibG9ja2luZyBieSBoaWRpbmcgY29tbW9uIGFkIGVsZW1lbnRzIG9uIHdlYiBwYWdlcy5cbiAqIFdvcmtzIGFsb25nc2lkZSBjb250ZW50IGZpbHRlcmluZyBhcyBhIGxpZ2h0d2VpZ2h0IGFkIGJsb2NrZXIuXG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29tbW9uIEFkIFNlbGVjdG9yc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBBRF9TRUxFQ1RPUlMgPSBbXG4gIC8vIEdlbmVyaWMgYWQgY29udGFpbmVyc1xuICAnW2NsYXNzKj1cImFkLWNvbnRhaW5lclwiXScsXG4gICdbY2xhc3MqPVwiYWRfY29udGFpbmVyXCJdJyxcbiAgJ1tjbGFzcyo9XCJhZENvbnRhaW5lclwiXScsXG4gICdbY2xhc3MqPVwiYWQtd3JhcHBlclwiXScsXG4gICdbY2xhc3MqPVwiYWRfd3JhcHBlclwiXScsXG4gICdbY2xhc3MqPVwiYWRXcmFwcGVyXCJdJyxcbiAgJ1tjbGFzcyo9XCJhZC1zbG90XCJdJyxcbiAgJ1tjbGFzcyo9XCJhZF9zbG90XCJdJyxcbiAgJ1tjbGFzcyo9XCJhZFNsb3RcIl0nLFxuICAnW2NsYXNzKj1cImFkLWJhbm5lclwiXScsXG4gICdbY2xhc3MqPVwiYWRfYmFubmVyXCJdJyxcbiAgJ1tjbGFzcyo9XCJhZEJhbm5lclwiXScsXG4gICdbY2xhc3MqPVwiYWQtdW5pdFwiXScsXG4gICdbY2xhc3MqPVwiYWRfdW5pdFwiXScsXG4gICdbY2xhc3MqPVwiYWRVbml0XCJdJyxcbiAgJ1tjbGFzcyo9XCJhZC1wbGFjZW1lbnRcIl0nLFxuICAnW2NsYXNzKj1cImFkX3BsYWNlbWVudFwiXScsXG4gICdbY2xhc3MqPVwiYWRQbGFjZW1lbnRcIl0nLFxuICAnW2NsYXNzKj1cImFkLXdyYXBwZXJcIl0nLFxuICAnW2NsYXNzKj1cImFkdmVydFwiXScsXG4gICdbY2xhc3MqPVwiYWR2ZXJ0aXNlbWVudFwiXScsXG4gICdbY2xhc3MqPVwiYWR2ZXJ0aXNtZW50XCJdJyxcbiAgJ1tpZCo9XCJhZC1jb250YWluZXJcIl0nLFxuICAnW2lkKj1cImFkX2NvbnRhaW5lclwiXScsXG4gICdbaWQqPVwiYWRDb250YWluZXJcIl0nLFxuICAnW2lkKj1cImFkLXNsb3RcIl0nLFxuICAnW2lkKj1cImFkX3Nsb3RcIl0nLFxuICAnW2lkKj1cImFkU2xvdFwiXScsXG4gICdbaWQqPVwiYWQtYmFubmVyXCJdJyxcbiAgJ1tpZCo9XCJhZF9iYW5uZXJcIl0nLFxuICAnW2lkKj1cImFkQmFubmVyXCJdJyxcbiAgJ1tpZCo9XCJhZC11bml0XCJdJyxcbiAgJ1tpZCo9XCJhZF91bml0XCJdJyxcbiAgJ1tpZCo9XCJhZFVuaXRcIl0nLFxuICAnW2lkKj1cImFkdmVydFwiXScsXG4gICdbaWQqPVwiYWR2ZXJ0aXNlbWVudFwiXScsXG5cbiAgLy8gQ29tbW9uIGFkIGNsYXNzIG5hbWVzXG4gICcuYWQnLFxuICAnLmFkcycsXG4gICcuYWRzYnlnb29nbGUnLFxuICAnLmFkLXBsYWNlbWVudCcsXG4gICcuYWQtem9uZScsXG4gICcuYWQtYm94JyxcbiAgJy5hZC1ibG9jaycsXG4gICcuYWQtcGFuZWwnLFxuICAnLmFkLXNlY3Rpb24nLFxuICAnLmFkLWxhYmVsJyxcbiAgJy5hZC1wbGFjZWhvbGRlcicsXG4gICcuYWQtb3ZlcmxheScsXG4gICcuYWQtbGVhZGVyYm9hcmQnLFxuICAnLmFkLXNpZGViYXInLFxuICAnLmFkLWlubGluZScsXG4gICcuYWQtbW9iaWxlJyxcbiAgJy5hZC1kZXNrdG9wJyxcbiAgJy5hZC10b3AnLFxuICAnLmFkLWJvdHRvbScsXG4gICcuYWQtaGVhZGVyJyxcbiAgJy5hZC1mb290ZXInLFxuICAnLmFkLWNvbnRlbnQnLFxuICAnLmFkLXJpZ2h0JyxcbiAgJy5hZC1sZWZ0JyxcbiAgJy5hZC1jZW50ZXInLFxuICAnLmFkdmVydCcsXG4gICcuYWR2ZXJ0aXNlbWVudCcsXG4gICcuYWR2ZXJ0aXNpbmcnLFxuICAnLmFkdmVydG9yaWFsJyxcbiAgJy5zcG9uc29yZWQnLFxuICAnLnNwb25zb3InLFxuICAnLnNwb25zb3JlZC1jb250ZW50JyxcbiAgJy5zcG9uc29yZWQtcG9zdCcsXG4gICcucHJvbW90ZWQnLFxuICAnLnByb21vdGlvbicsXG4gICcucHJvbW8nLFxuXG4gIC8vIEFkIG5ldHdvcmsgc3BlY2lmaWNcbiAgJ1tkYXRhLWFkXScsXG4gICdbZGF0YS1hZC1zbG90XScsXG4gICdbZGF0YS1hZC1jbGllbnRdJyxcbiAgJ1tkYXRhLWFkLWZvcm1hdF0nLFxuICAnW2RhdGEtYWR1bml0XScsXG4gICdbZGF0YS1hZHVuaXQtcGF0aF0nLFxuICAnW2RhdGEtZGZwXScsXG4gICdbZGF0YS1nb29nbGUtcXVlcnktaWRdJyxcbiAgJ1thcmlhLWxhYmVsPVwiYWR2ZXJ0aXNlbWVudFwiXScsXG4gICdbYXJpYS1sYWJlbD1cIkFkXCJdJyxcbiAgJ1thcmlhLWxhYmVsPVwiU3BvbnNvcmVkXCJdJyxcblxuICAvLyBHb29nbGUgQWRzXG4gICcuZ29vZ2xlLWFkJyxcbiAgJy5nb29nbGVhZHMnLFxuICAnLmFkc2Vuc2UnLFxuICAnaW5zLmFkc2J5Z29vZ2xlJyxcblxuICAvLyBDb21tb24gaWZyYW1lIGFkIHBhdHRlcm5zXG4gICdpZnJhbWVbc3JjKj1cImRvdWJsZWNsaWNrLm5ldFwiXScsXG4gICdpZnJhbWVbc3JjKj1cImdvb2dsZXN5bmRpY2F0aW9uLmNvbVwiXScsXG4gICdpZnJhbWVbc3JjKj1cImdvb2dsZWFkc2VydmljZXMuY29tXCJdJyxcbiAgJ2lmcmFtZVtzcmMqPVwiYWRueHMuY29tXCJdJyxcbiAgJ2lmcmFtZVtzcmMqPVwiYW1hem9uLWFkc3lzdGVtLmNvbVwiXScsXG4gICdpZnJhbWVbc3JjKj1cImFkc3J2ci5vcmdcIl0nLFxuICAnaWZyYW1lW3NyYyo9XCJhZGZvcm0ubmV0XCJdJyxcbiAgJ2lmcmFtZVtzcmMqPVwibW9hdGFkcy5jb21cIl0nLFxuICAnaWZyYW1lW3NyYyo9XCJvdXRicmFpbi5jb21cIl0nLFxuICAnaWZyYW1lW3NyYyo9XCJ0YWJvb2xhLmNvbVwiXScsXG4gICdpZnJhbWVbc3JjKj1cImNyaXRlby5jb21cIl0nLFxuICAnaWZyYW1lW3NyYyo9XCJjcml0ZW8ubmV0XCJdJyxcbiAgJ2lmcmFtZVtpZCo9XCJnb29nbGVfYWRzXCJdJyxcblxuICAvLyBTb2NpYWwvcHJvbW90ZWQgY29udGVudFxuICAnW2RhdGEtdGVzdGlkKj1cInByb21vdGVkXCJdJyxcbiAgJ1tkYXRhLXByb21vdGVkPVwidHJ1ZVwiXScsXG4gICdbY2xhc3MqPVwicHJvbW90ZWQtdHdlZXRcIl0nLFxuICAnW2NsYXNzKj1cInNwb25zb3JlZC1sYWJlbFwiXScsXG4gICdbY2xhc3MqPVwiYWQtYmFkZ2VcIl0nLFxuXG4gIC8vIE5ld3NsZXR0ZXIgcG9wdXBzIGFuZCBzdWJzY3JpcHRpb24gb3ZlcmxheXNcbiAgJ1tjbGFzcyo9XCJuZXdzbGV0dGVyLXBvcHVwXCJdJyxcbiAgJ1tjbGFzcyo9XCJuZXdzbGV0dGVyLW92ZXJsYXlcIl0nLFxuICAnW2NsYXNzKj1cInN1YnNjcmliZS1wb3B1cFwiXScsXG4gICdbY2xhc3MqPVwic2lnbnVwLXBvcHVwXCJdJyxcbiAgJ1tjbGFzcyo9XCJlbWFpbC1zaWdudXBcIl0nLFxuICAnW2NsYXNzKj1cIm1haWwtc2lnbnVwXCJdJyxcblxuICAvLyBDb29raWUgY29uc2VudCBhZHNcbiAgJ1tjbGFzcyo9XCJjb29raWUtYmFubmVyLWFkXCJdJyxcbiAgJ1tjbGFzcyo9XCJjb25zZW50LWJhbm5lci1wcm9tb1wiXScsXG5dO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVUkwgUGF0dGVybnMgdG8gQmxvY2tcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgQURfVVJMX1BBVFRFUk5TID0gW1xuICAnZG91YmxlY2xpY2submV0JyxcbiAgJ2dvb2dsZXN5bmRpY2F0aW9uLmNvbScsXG4gICdnb29nbGVhZHNlcnZpY2VzLmNvbScsXG4gICdhZHNlcnZpY2UuZ29vZ2xlJyxcbiAgJ3BhZ2VhZDIuZ29vZ2xlc3luZGljYXRpb24uY29tJyxcbiAgJ3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldCcsXG4gICdhZG54cy5jb20nLFxuICAnYW1hem9uLWFkc3lzdGVtLmNvbScsXG4gICdhZHNydnIub3JnJyxcbiAgJ2FkZm9ybS5uZXQnLFxuICAnbW9hdGFkcy5jb20nLFxuICAnb3V0YnJhaW4uY29tJyxcbiAgJ3RhYm9vbGEuY29tJyxcbiAgJ2NyaXRlby5jb20nLFxuICAnY3JpdGVvLm5ldCcsXG4gICdhZHMtdHdpdHRlci5jb20nLFxuICAnZmFjZWJvb2suY29tL3RyJyxcbiAgJ2FuYWx5dGljcy50aWt0b2suY29tJyxcbiAgJ3NuYXAubGljZG4uY29tJyxcbiAgJ2JhdC5iaW5nLmNvbScsXG5dO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb3JlIEZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkRmlsdGVyUmVzdWx0IHtcbiAgaGlkZGVuOiBudW1iZXI7XG4gIHJlbW92ZWQ6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIaWRlIGFkIGVsZW1lbnRzIGJ5IHNldHRpbmcgZGlzcGxheTpub25lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWRzKHJvb3Q6IERvY3VtZW50IHwgSFRNTEVsZW1lbnQgPSBkb2N1bWVudCk6IEFkRmlsdGVyUmVzdWx0IHtcbiAgbGV0IGhpZGRlbiA9IDA7XG4gIGxldCByZW1vdmVkID0gMDtcblxuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIEFEX1NFTEVDVE9SUykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICBmb3IgKGNvbnN0IGVsIG9mIEFycmF5LmZyb20oZWxlbWVudHMpKSB7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1hZC1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgIGhpZGRlbisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBJbnZhbGlkIHNlbGVjdG9yLCBza2lwXG4gICAgfVxuICB9XG5cbiAgLy8gQWxzbyBoYW5kbGUgaWZyYW1lcyB3aXRoIGFkIHNvdXJjZXNcbiAgY29uc3QgaWZyYW1lcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnaWZyYW1lJyk7XG4gIGZvciAoY29uc3QgaWZyYW1lIG9mIEFycmF5LmZyb20oaWZyYW1lcykpIHtcbiAgICBjb25zdCBzcmMgPSBpZnJhbWUuZ2V0QXR0cmlidXRlKCdzcmMnKSB8fCAnJztcbiAgICBpZiAoQURfVVJMX1BBVFRFUk5TLnNvbWUocGF0dGVybiA9PiBzcmMuaW5jbHVkZXMocGF0dGVybikpKSB7XG4gICAgICAoaWZyYW1lIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLWFkLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBoaWRkZW4rKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBoaWRkZW4sIHJlbW92ZWQsIHRvdGFsOiBoaWRkZW4gKyByZW1vdmVkIH07XG59XG5cbi8qKlxuICogUmVzdG9yZSBoaWRkZW4gYWQgZWxlbWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVBZHMocm9vdDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCA9IGRvY3VtZW50KTogbnVtYmVyIHtcbiAgbGV0IHJlc3RvcmVkID0gMDtcbiAgY29uc3QgaGlkZGVuQWRzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jYWxtd2ViLWFkLWhpZGRlbj1cInRydWVcIl0nKTtcbiAgZm9yIChjb25zdCBlbCBvZiBBcnJheS5mcm9tKGhpZGRlbkFkcykpIHtcbiAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jYWxtd2ViLWFkLWhpZGRlbicpO1xuICAgICAgcmVzdG9yZWQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3RvcmVkO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgVVJMIG1hdGNoZXMgYW4gYWQgcGF0dGVyblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBZFVybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gQURfVVJMX1BBVFRFUk5TLnNvbWUocGF0dGVybiA9PiB1cmwuaW5jbHVkZXMocGF0dGVybikpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGlzdCBvZiBhZCBzZWxlY3RvcnMgKGZvciB0ZXN0aW5nL2RlYnVnZ2luZylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFkU2VsZWN0b3JzKCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFsuLi5BRF9TRUxFQ1RPUlNdO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGlzdCBvZiBhZCBVUkwgcGF0dGVybnMgKGZvciB0ZXN0aW5nL2RlYnVnZ2luZylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFkVXJsUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICByZXR1cm4gWy4uLkFEX1VSTF9QQVRURVJOU107XG59XG5cbi8qKlxuICogU2V0IHVwIGEgTXV0YXRpb25PYnNlcnZlciB0byBjb250aW51b3VzbHkgaGlkZSBhZHMgYXMgbmV3IGNvbnRlbnQgbG9hZHMuXG4gKiBSZXR1cm5zIGEgZGlzY29ubmVjdCBmdW5jdGlvbiB0byBzdG9wIG9ic2VydmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVBbmRIaWRlQWRzKHJvb3Q6IERvY3VtZW50ID0gZG9jdW1lbnQpOiAoKSA9PiB2b2lkIHtcbiAgLy8gSW5pdGlhbCBwYXNzXG4gIGhpZGVBZHMocm9vdCk7XG5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgbGV0IGhhc05ld0VsZW1lbnRzID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaGFzTmV3RWxlbWVudHMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc05ld0VsZW1lbnRzKSB7XG4gICAgICBoaWRlQWRzKHJvb3QpO1xuICAgIH1cbiAgfSk7XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShyb290LmJvZHkgfHwgcm9vdC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbn1cbiIsIi8qKlxuICogQ29udGVudCBTY3JpcHQgZm9yIFVuaXZlcnNhbCBTaXRlIFN1cHBvcnRcbiAqXG4gKiBPYnNlcnZlcyBnZW5lcmljIHdlYiB1bml0cywgY2xhc3NpZmllcyB0aGVtIHZpYSBiYWNrZ3JvdW5kLCBhbmQgYXBwbGllcyBkZWNpc2lvbnMuXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lQ29udGVudFNjcmlwdCB9IGZyb20gJ3d4dC91dGlscy9kZWZpbmUtY29udGVudC1zY3JpcHQnO1xuaW1wb3J0IHsgc2VuZFRvQmFja2dyb3VuZCB9IGZyb20gJ0BkcmFjb24vd3h0LXNoYXJlZC9leHRlbnNpb24nO1xuaW1wb3J0IHsgdW5pdmVyc2FsQWRhcHRlciB9IGZyb20gJ0Avc3JjL2FkYXB0ZXJzL3VuaXZlcnNhbCc7XG5pbXBvcnQgeyB5b3V0dWJlQWRhcHRlciwgcmVkZGl0QWRhcHRlciwgeEFkYXB0ZXIsIGlzR29vZ2xlU2VhcmNoUGFnZSB9IGZyb20gJ0Avc3JjL2FkYXB0ZXJzJztcbmltcG9ydCB7IE1FU1NBR0VfVFlQRVMgfSBmcm9tICdAL3NyYy9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgb2JzZXJ2ZUFuZEhpZGVBZHMgfSBmcm9tICdAL3NyYy9hZGZpbHRlcic7XG5pbXBvcnQgdHlwZSB7IENsYXNzaWZpY2F0aW9uUmVzdWx0LCBDb250ZW50VW5pdCB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbnRlbnRTY3JpcHQoe1xuICBtYXRjaGVzOiBbJzxhbGxfdXJscz4nXSxcbiAgcnVuQXQ6ICdkb2N1bWVudF9pZGxlJyxcbiAgbWFpbigpIHtcbiAgICAvLyBTa2lwIG9uIEdvb2dsZSBTZWFyY2ggcGFnZXMgLSBoYW5kbGVkIGJ5IGdvb2dsZS50cyBlbnRyeXBvaW50XG4gICAgaWYgKGlzR29vZ2xlU2VhcmNoUGFnZSgpKSByZXR1cm47XG5cbiAgICAvLyBTa2lwIGlmIGEgc3BlY2lmaWMgYWRhcHRlciBpcyBhbHJlYWR5IGhhbmRsaW5nIHRoZSBwYWdlXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3Qgc3BlY2lmaWNTaXRlID0gW3lvdXR1YmVBZGFwdGVyLCByZWRkaXRBZGFwdGVyLCB4QWRhcHRlcl0uc29tZShhZGFwdGVyID0+IFxuICAgICAgYWRhcHRlci5tYXRjaGVzLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdCh1cmwpKVxuICAgICk7XG4gICAgaWYgKHNwZWNpZmljU2l0ZSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coJ1tDb250ZW50XSBVbml2ZXJzYWwgc2NyaXB0IGxvYWRlZCBmb3InLCB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gJ2NhbG13ZWItc3R5bGVzLXVuaXZlcnNhbCc7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICBbZGF0YS1jYWxtd2ViLXByb2Nlc3NlZD1cImJsdXJcIl0ge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMTBweCkgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZSAhaW1wb3J0YW50O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cbiAgICAgIFtkYXRhLWNhbG13ZWItcHJvY2Vzc2VkPVwiYmx1clwiXTpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgW2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQ9XCJoaWRkZW5cIl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIGNvbnN0IHByb2Nlc3NVbml0cyA9IGFzeW5jICh1bml0czogSFRNTEVsZW1lbnRbXSkgPT4ge1xuICAgICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB1bml0RGF0YUxpc3Q6IENvbnRlbnRVbml0W10gPSB1bml0cy5tYXAoZWwgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gdW5pdmVyc2FsQWRhcHRlci5leHRyYWN0RGF0YShlbCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgdW5pdERhdGFMaXN0Lm1hcCh1bml0ID0+XG4gICAgICAgICAgc2VuZFRvQmFja2dyb3VuZDxDbGFzc2lmaWNhdGlvblJlc3VsdD4oe1xuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9UWVBFUy5DTEFTU0lGWV9VTklULFxuICAgICAgICAgICAgdW5pdCxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB1bml0cy5mb3JFYWNoKChlbCwgaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbaWR4XTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiAhKCdlcnJvcicgaW4gcmVzdWx0KSkge1xuICAgICAgICAgIHVuaXZlcnNhbEFkYXB0ZXIuYXBwbHlEZWNpc2lvbihlbCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEluaXRpYWwgcGFzc1xuICAgIHByb2Nlc3NVbml0cyh1bml2ZXJzYWxBZGFwdGVyLmRpc2NvdmVyVW5pdHMoZG9jdW1lbnQpKTtcblxuICAgIC8vIFNpbXBsZSBvYnNlcnZlclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgcHJvY2Vzc1VuaXRzKHVuaXZlcnNhbEFkYXB0ZXIuZGlzY292ZXJVbml0cyhkb2N1bWVudCkuZmlsdGVyKGVsID0+ICFlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2FsbXdlYi1wcm9jZXNzZWQnKSkpO1xuICAgIH0pO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblxuICAgIC8vIEJhY2t1cCBhZCBmaWx0ZXJcbiAgICBvYnNlcnZlQW5kSGlkZUFkcyhkb2N1bWVudCk7XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbml0aW9uIiwidGhpcyIsIm1vZHVsZSIsInByb3h5VGFyZ2V0IiwidmFsdWUiLCJyZXN1bHQiLCJtZXNzYWdlIiwidXRpbCIsIm9iamVjdFV0aWwiLCJkZWZhdWx0RXJyb3JNYXAiLCJlcnJvclV0aWwiLCJlcnJvck1hcCIsImN0eCIsImlzc3VlcyIsImVsZW1lbnRzIiwicHJvY2Vzc2VkIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIiwiei5lbnVtIiwiei5vYmplY3QiLCJ6LnN0cmluZyIsInouYXJyYXkiLCJ6LmJvb2xlYW4iLCJ6Lm51bWJlciIsIlNFTEVDVE9SUyIsImRpc2NvdmVyVW5pdHMiLCJleHRyYWN0RGF0YSIsImFwcGx5RGVjaXNpb24iLCJ6LmxpdGVyYWwiLCJ6LmRpc2NyaW1pbmF0ZWRVbmlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxXQUFTLG9CQUFvQkEsYUFBWTtBQUN4QyxXQUFPQTtBQUFBLEVBQ1I7Ozs7Ozs7Ozs7O0FDSEEsT0FBQyxTQUFVLFFBQVEsU0FBUztBQUdpQjtBQUN6QyxrQkFBUSxNQUFNO0FBQUEsUUFDbEI7QUFBQSxNQU9BLEdBQUcsT0FBTyxlQUFlLGNBQWMsYUFBYSxPQUFPLFNBQVMsY0FBYyxPQUFPQyxpQkFBTSxTQUFVQyxTQUFRO0FBUy9HLFlBQUksRUFBRSxXQUFXLFVBQVUsV0FBVyxPQUFPLFdBQVcsV0FBVyxPQUFPLFFBQVEsS0FBSztBQUNyRixnQkFBTSxJQUFJLE1BQU0sMkRBQTJEO0FBQUEsUUFDL0U7QUFDRSxZQUFJLEVBQUUsV0FBVyxXQUFXLFdBQVcsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUs7QUFDeEYsZ0JBQU0sbURBQW1EO0FBT3pELGdCQUFNLFdBQVcsbUJBQWlCO0FBSWhDLGtCQUFNLGNBQWM7QUFBQSxjQUNsQixVQUFVO0FBQUEsZ0JBQ1IsU0FBUztBQUFBLGtCQUNQLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxhQUFhO0FBQUEsZ0JBQ1gsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsZUFBZTtBQUFBLGtCQUNiLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsY0FBYztBQUFBLGtCQUNaLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsV0FBVztBQUFBLGtCQUNULFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsUUFBUTtBQUFBLGtCQUNOLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsY0FBYztBQUFBLGtCQUNaLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxpQkFBaUI7QUFBQSxnQkFDZixXQUFXO0FBQUEsa0JBQ1QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQTtnQkFFMUIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsd0JBQXdCO0FBQUE7Z0JBRTFCLDJCQUEyQjtBQUFBLGtCQUN6QixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGdCQUFnQjtBQUFBLGtCQUNkLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsMkJBQTJCO0FBQUEsa0JBQ3pCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsd0JBQXdCO0FBQUE7Z0JBRTFCLGdCQUFnQjtBQUFBLGtCQUNkLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsd0JBQXdCO0FBQUE7Z0JBRTFCLFdBQVc7QUFBQSxrQkFDVCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLHdCQUF3QjtBQUFBO2dCQUUxQixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQSxnQkFDcEM7QUFBQTtjQUVRLGdCQUFnQjtBQUFBLGdCQUNkLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGVBQWU7QUFBQSxrQkFDYixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGlCQUFpQjtBQUFBLGtCQUNmLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsbUJBQW1CO0FBQUEsa0JBQ2pCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsa0JBQWtCO0FBQUEsa0JBQ2hCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsaUJBQWlCO0FBQUEsa0JBQ2YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixzQkFBc0I7QUFBQSxrQkFDcEIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixtQkFBbUI7QUFBQSxrQkFDakIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixvQkFBb0I7QUFBQSxrQkFDbEIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLFlBQVk7QUFBQSxnQkFDVixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLGdCQUFnQjtBQUFBLGdCQUNkLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGFBQWE7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsV0FBVztBQUFBLGdCQUNULE9BQU87QUFBQSxrQkFDTCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLHNCQUFzQjtBQUFBLGtCQUNwQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLE9BQU87QUFBQSxrQkFDTCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsWUFBWTtBQUFBLGdCQUNWLG1CQUFtQjtBQUFBLGtCQUNqQixRQUFRO0FBQUEsb0JBQ04sV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQSxvQkFDWCxxQkFBcUI7QUFBQSxrQkFDbkM7QUFBQTtnQkFFVSxVQUFVO0FBQUEsa0JBQ1IsVUFBVTtBQUFBLG9CQUNSLFdBQVc7QUFBQSxvQkFDWCxXQUFXO0FBQUEsb0JBQ1gscUJBQXFCO0FBQUE7a0JBRXZCLFlBQVk7QUFBQSxvQkFDVixxQkFBcUI7QUFBQSxzQkFDbkIsV0FBVztBQUFBLHNCQUNYLFdBQVc7QUFBQSxvQkFDM0I7QUFBQSxrQkFDQTtBQUFBLGdCQUNBO0FBQUE7Y0FFUSxhQUFhO0FBQUEsZ0JBQ1gsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsU0FBUztBQUFBLGtCQUNQLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsZUFBZTtBQUFBLGtCQUNiLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsUUFBUTtBQUFBLGtCQUNOLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsd0JBQXdCO0FBQUE7Z0JBRTFCLFNBQVM7QUFBQSxrQkFDUCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGNBQWM7QUFBQSxrQkFDWixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFFBQVE7QUFBQSxrQkFDTixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLHdCQUF3QjtBQUFBLGdCQUNwQztBQUFBO2NBRVEsYUFBYTtBQUFBLGdCQUNYLDZCQUE2QjtBQUFBLGtCQUMzQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLDRCQUE0QjtBQUFBLGtCQUMxQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsV0FBVztBQUFBLGdCQUNULFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGFBQWE7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGVBQWU7QUFBQSxrQkFDYixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGFBQWE7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGFBQWE7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsUUFBUTtBQUFBLGdCQUNOLGtCQUFrQjtBQUFBLGtCQUNoQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLHNCQUFzQjtBQUFBLGtCQUNwQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsWUFBWTtBQUFBLGdCQUNWLHFCQUFxQjtBQUFBLGtCQUNuQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsUUFBUTtBQUFBLGdCQUNOLGNBQWM7QUFBQSxrQkFDWixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsY0FBYztBQUFBLGdCQUNaLE9BQU87QUFBQSxrQkFDTCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFdBQVc7QUFBQSxrQkFDVCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGNBQWM7QUFBQSxrQkFDWixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGlCQUFpQjtBQUFBLGtCQUNmLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxpQkFBaUI7QUFBQSxnQkFDZixTQUFTO0FBQUEsa0JBQ1AsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixzQkFBc0I7QUFBQSxrQkFDcEIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLGNBQWM7QUFBQSxnQkFDWixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixRQUFRO0FBQUEsa0JBQ04sV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQTtnQkFFMUIsV0FBVztBQUFBLGtCQUNULFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsd0JBQXdCO0FBQUE7Z0JBRTFCLFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGtCQUNYLHdCQUF3QjtBQUFBO2dCQUUxQixRQUFRO0FBQUEsa0JBQ04sV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCx3QkFBd0I7QUFBQSxnQkFDcEM7QUFBQTtjQUVRLGVBQWU7QUFBQSxnQkFDYixZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixVQUFVO0FBQUEsa0JBQ1IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixXQUFXO0FBQUEsa0JBQ1QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLFdBQVc7QUFBQSxnQkFDVCxxQkFBcUI7QUFBQSxrQkFDbkIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixtQkFBbUI7QUFBQSxrQkFDakIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixtQkFBbUI7QUFBQSxrQkFDakIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixzQkFBc0I7QUFBQSxrQkFDcEIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixlQUFlO0FBQUEsa0JBQ2IsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixxQkFBcUI7QUFBQSxrQkFDbkIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixtQkFBbUI7QUFBQSxrQkFDakIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLFlBQVk7QUFBQSxnQkFDVixjQUFjO0FBQUEsa0JBQ1osV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixxQkFBcUI7QUFBQSxrQkFDbkIsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQTtnQkFFYixXQUFXO0FBQUEsa0JBQ1QsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDdkI7QUFBQTtjQUVRLFdBQVc7QUFBQSxnQkFDVCxTQUFTO0FBQUEsa0JBQ1AsU0FBUztBQUFBLG9CQUNQLFdBQVc7QUFBQSxvQkFDWCxXQUFXO0FBQUE7a0JBRWIsT0FBTztBQUFBLG9CQUNMLFdBQVc7QUFBQSxvQkFDWCxXQUFXO0FBQUE7a0JBRWIsaUJBQWlCO0FBQUEsb0JBQ2YsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixVQUFVO0FBQUEsb0JBQ1IsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixPQUFPO0FBQUEsb0JBQ0wsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQSxrQkFDekI7QUFBQTtnQkFFVSxXQUFXO0FBQUEsa0JBQ1QsT0FBTztBQUFBLG9CQUNMLFdBQVc7QUFBQSxvQkFDWCxXQUFXO0FBQUE7a0JBRWIsaUJBQWlCO0FBQUEsb0JBQ2YsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQSxrQkFDekI7QUFBQTtnQkFFVSxRQUFRO0FBQUEsa0JBQ04sU0FBUztBQUFBLG9CQUNQLFdBQVc7QUFBQSxvQkFDWCxXQUFXO0FBQUE7a0JBRWIsT0FBTztBQUFBLG9CQUNMLFdBQVc7QUFBQSxvQkFDWCxXQUFXO0FBQUE7a0JBRWIsaUJBQWlCO0FBQUEsb0JBQ2YsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixVQUFVO0FBQUEsb0JBQ1IsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQTtrQkFFYixPQUFPO0FBQUEsb0JBQ0wsV0FBVztBQUFBLG9CQUNYLFdBQVc7QUFBQSxrQkFDekI7QUFBQSxnQkFDQTtBQUFBO2NBRVEsUUFBUTtBQUFBLGdCQUNOLHFCQUFxQjtBQUFBLGtCQUNuQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGtCQUFrQjtBQUFBLGtCQUNoQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFdBQVc7QUFBQSxrQkFDVCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGFBQWE7QUFBQSxrQkFDWCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGlCQUFpQjtBQUFBLGtCQUNmLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsY0FBYztBQUFBLGtCQUNaLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsV0FBVztBQUFBLGtCQUNULFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsbUJBQW1CO0FBQUEsa0JBQ2pCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsUUFBUTtBQUFBLGtCQUNOLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsU0FBUztBQUFBLGtCQUNQLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsYUFBYTtBQUFBLGtCQUNYLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsZUFBZTtBQUFBLGtCQUNiLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsV0FBVztBQUFBLGtCQUNULFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsbUJBQW1CO0FBQUEsa0JBQ2pCLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUE7Z0JBRWIsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxZQUFZO0FBQUEsZ0JBQ1YsT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUE7Y0FFUSxpQkFBaUI7QUFBQSxnQkFDZixnQkFBZ0I7QUFBQSxrQkFDZCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsY0FBYztBQUFBLGdCQUNaLDBCQUEwQjtBQUFBLGtCQUN4QixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBO2NBRVEsV0FBVztBQUFBLGdCQUNULFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLE9BQU87QUFBQSxrQkFDTCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGNBQWM7QUFBQSxrQkFDWixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLGtCQUFrQjtBQUFBLGtCQUNoQixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBO2dCQUViLFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBLGNBQ0E7QUFBQTtBQUVNLGdCQUFJLE9BQU8sS0FBSyxXQUFXLEVBQUUsV0FBVyxHQUFHO0FBQ3pDLG9CQUFNLElBQUksTUFBTSw2REFBNkQ7QUFBQSxZQUNyRjtBQUFBLFlBWU0sTUFBTSx1QkFBdUIsUUFBUTtBQUFBLGNBQ25DLFlBQVksWUFBWSxRQUFRLFFBQVc7QUFDekMsc0JBQU0sS0FBSztBQUNYLHFCQUFLLGFBQWE7QUFBQSxjQUM1QjtBQUFBLGNBQ1EsSUFBSSxLQUFLO0FBQ1Asb0JBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxHQUFHO0FBQ2xCLHVCQUFLLElBQUksS0FBSyxLQUFLLFdBQVcsR0FBRyxDQUFDO0FBQUEsZ0JBQzlDO0FBQ1UsdUJBQU8sTUFBTSxJQUFJLEdBQUc7QUFBQSxjQUM5QjtBQUFBLFlBQ0E7QUFTTSxrQkFBTSxhQUFhLFdBQVM7QUFDMUIscUJBQU8sU0FBUyxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sU0FBUztBQUFBLFlBQzNFO0FBaUNNLGtCQUFNLGVBQWUsQ0FBQyxTQUFTLGFBQWE7QUFDMUMscUJBQU8sSUFBSSxpQkFBaUI7QUFDMUIsb0JBQUksY0FBYyxRQUFRLFdBQVc7QUFDbkMsMEJBQVEsT0FBTyxJQUFJLE1BQU0sY0FBYyxRQUFRLFVBQVUsT0FBTyxDQUFDO0FBQUEsZ0JBQzdFLFdBQXFCLFNBQVMscUJBQXFCLGFBQWEsVUFBVSxLQUFLLFNBQVMsc0JBQXNCLE9BQU87QUFDekcsMEJBQVEsUUFBUSxhQUFhLENBQUMsQ0FBQztBQUFBLGdCQUMzQyxPQUFpQjtBQUNMLDBCQUFRLFFBQVEsWUFBWTtBQUFBLGdCQUN4QztBQUFBLGNBQ0E7QUFBQSxZQUNBO0FBQ00sa0JBQU0scUJBQXFCLGFBQVcsV0FBVyxJQUFJLGFBQWE7QUE0QmxFLGtCQUFNLG9CQUFvQixDQUFDLE1BQU0sYUFBYTtBQUM1QyxxQkFBTyxTQUFTLHFCQUFxQixXQUFXLE1BQU07QUFDcEQsb0JBQUksS0FBSyxTQUFTLFNBQVMsU0FBUztBQUNsQyx3QkFBTSxJQUFJLE1BQU0scUJBQXFCLFNBQVMsT0FBTyxJQUFJLG1CQUFtQixTQUFTLE9BQU8sQ0FBQyxRQUFRLElBQUksV0FBVyxLQUFLLE1BQU0sRUFBRTtBQUFBLGdCQUM3STtBQUNVLG9CQUFJLEtBQUssU0FBUyxTQUFTLFNBQVM7QUFDbEMsd0JBQU0sSUFBSSxNQUFNLG9CQUFvQixTQUFTLE9BQU8sSUFBSSxtQkFBbUIsU0FBUyxPQUFPLENBQUMsUUFBUSxJQUFJLFdBQVcsS0FBSyxNQUFNLEVBQUU7QUFBQSxnQkFDNUk7QUFDVSx1QkFBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdEMsc0JBQUksU0FBUyxzQkFBc0I7QUFJakMsd0JBQUk7QUFDRiw2QkFBTyxJQUFJLEVBQUUsR0FBRyxNQUFNLGFBQWE7QUFBQSx3QkFDakM7QUFBQSx3QkFDQTtBQUFBLHlCQUNDLFFBQVEsQ0FBQztBQUFBLG9CQUM1QixTQUF1QixTQUFTO0FBQ2hCLDhCQUFRLEtBQUssR0FBRyxJQUFJLDRHQUFpSCxPQUFPO0FBQzVJLDZCQUFPLElBQUksRUFBRSxHQUFHLElBQUk7QUFJcEIsK0JBQVMsdUJBQXVCO0FBQ2hDLCtCQUFTLGFBQWE7QUFDdEIsOEJBQU87QUFBQSxvQkFDdkI7QUFBQSxrQkFDQSxXQUF1QixTQUFTLFlBQVk7QUFDOUIsMkJBQU8sSUFBSSxFQUFFLEdBQUcsSUFBSTtBQUNwQiw0QkFBTztBQUFBLGtCQUNyQixPQUFtQjtBQUNMLDJCQUFPLElBQUksRUFBRSxHQUFHLE1BQU0sYUFBYTtBQUFBLHNCQUNqQztBQUFBLHNCQUNBO0FBQUEsdUJBQ0MsUUFBUSxDQUFDO0FBQUEsa0JBQzFCO0FBQUEsZ0JBQ0EsQ0FBVztBQUFBLGNBQ1g7QUFBQSxZQUNBO0FBcUJNLGtCQUFNLGFBQWEsQ0FBQyxRQUFRLFFBQVEsWUFBWTtBQUM5QyxxQkFBTyxJQUFJLE1BQU0sUUFBUTtBQUFBLGdCQUN2QixNQUFNLGNBQWMsU0FBUyxNQUFNO0FBQ2pDLHlCQUFPLFFBQVEsS0FBSyxTQUFTLFFBQVEsR0FBRyxJQUFJO0FBQUEsZ0JBQ3hEO0FBQUEsY0FDQSxDQUFTO0FBQUEsWUFDVDtBQUNNLGdCQUFJLGlCQUFpQixTQUFTLEtBQUssS0FBSyxPQUFPLFVBQVUsY0FBYztBQXlCdkUsa0JBQU0sYUFBYSxDQUFDLFFBQVEsV0FBVyxDQUFBLEdBQUksV0FBVyxPQUFPO0FBQzNELGtCQUFJLFFBQVEsdUJBQU8sT0FBTyxJQUFJO0FBQzlCLGtCQUFJLFdBQVc7QUFBQSxnQkFDYixJQUFJQyxjQUFhLE1BQU07QUFDckIseUJBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQSxnQkFDN0M7QUFBQSxnQkFDVSxJQUFJQSxjQUFhLE1BQU0sVUFBVTtBQUMvQixzQkFBSSxRQUFRLE9BQU87QUFDakIsMkJBQU8sTUFBTSxJQUFJO0FBQUEsa0JBQy9CO0FBQ1ksc0JBQUksRUFBRSxRQUFRLFNBQVM7QUFDckIsMkJBQU87QUFBQSxrQkFDckI7QUFDWSxzQkFBSSxRQUFRLE9BQU8sSUFBSTtBQUN2QixzQkFBSSxPQUFPLFVBQVUsWUFBWTtBQUkvQix3QkFBSSxPQUFPLFNBQVMsSUFBSSxNQUFNLFlBQVk7QUFFeEMsOEJBQVEsV0FBVyxRQUFRLE9BQU8sSUFBSSxHQUFHLFNBQVMsSUFBSSxDQUFDO0FBQUEsb0JBQ3ZFLFdBQXlCLGVBQWUsVUFBVSxJQUFJLEdBQUc7QUFHekMsMEJBQUksVUFBVSxrQkFBa0IsTUFBTSxTQUFTLElBQUksQ0FBQztBQUNwRCw4QkFBUSxXQUFXLFFBQVEsT0FBTyxJQUFJLEdBQUcsT0FBTztBQUFBLG9CQUNoRSxPQUFxQjtBQUdMLDhCQUFRLE1BQU0sS0FBSyxNQUFNO0FBQUEsb0JBQ3pDO0FBQUEsa0JBQ0EsV0FBdUIsT0FBTyxVQUFVLFlBQVksVUFBVSxTQUFTLGVBQWUsVUFBVSxJQUFJLEtBQUssZUFBZSxVQUFVLElBQUksSUFBSTtBQUk1SCw0QkFBUSxXQUFXLE9BQU8sU0FBUyxJQUFJLEdBQUcsU0FBUyxJQUFJLENBQUM7QUFBQSxrQkFDdEUsV0FBdUIsZUFBZSxVQUFVLEdBQUcsR0FBRztBQUV4Qyw0QkFBUSxXQUFXLE9BQU8sU0FBUyxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUM7QUFBQSxrQkFDckUsT0FBbUI7QUFHTCwyQkFBTyxlQUFlLE9BQU8sTUFBTTtBQUFBLHNCQUNqQyxjQUFjO0FBQUEsc0JBQ2QsWUFBWTtBQUFBLHNCQUNaLE1BQU07QUFDSiwrQkFBTyxPQUFPLElBQUk7QUFBQSxzQkFDcEM7QUFBQSxzQkFDZ0IsSUFBSUMsUUFBTztBQUNULCtCQUFPLElBQUksSUFBSUE7QUFBQSxzQkFDakM7QUFBQSxvQkFDQSxDQUFlO0FBQ0QsMkJBQU87QUFBQSxrQkFDckI7QUFDWSx3QkFBTSxJQUFJLElBQUk7QUFDZCx5QkFBTztBQUFBLGdCQUNuQjtBQUFBLGdCQUNVLElBQUlELGNBQWEsTUFBTSxPQUFPLFVBQVU7QUFDdEMsc0JBQUksUUFBUSxPQUFPO0FBQ2pCLDBCQUFNLElBQUksSUFBSTtBQUFBLGtCQUM1QixPQUFtQjtBQUNMLDJCQUFPLElBQUksSUFBSTtBQUFBLGtCQUM3QjtBQUNZLHlCQUFPO0FBQUEsZ0JBQ25CO0FBQUEsZ0JBQ1UsZUFBZUEsY0FBYSxNQUFNLE1BQU07QUFDdEMseUJBQU8sUUFBUSxlQUFlLE9BQU8sTUFBTSxJQUFJO0FBQUEsZ0JBQzNEO0FBQUEsZ0JBQ1UsZUFBZUEsY0FBYSxNQUFNO0FBQ2hDLHlCQUFPLFFBQVEsZUFBZSxPQUFPLElBQUk7QUFBQSxnQkFDckQ7QUFBQTtBQWFRLGtCQUFJLGNBQWMsT0FBTyxPQUFPLE1BQU07QUFDdEMscUJBQU8sSUFBSSxNQUFNLGFBQWEsUUFBUTtBQUFBLFlBQzlDO0FBa0JNLGtCQUFNLFlBQVksaUJBQWU7QUFBQSxjQUMvQixZQUFZLFFBQVEsYUFBYSxNQUFNO0FBQ3JDLHVCQUFPLFlBQVksV0FBVyxJQUFJLFFBQVEsR0FBRyxHQUFHLElBQUk7QUFBQSxjQUM5RDtBQUFBLGNBQ1EsWUFBWSxRQUFRLFVBQVU7QUFDNUIsdUJBQU8sT0FBTyxZQUFZLFdBQVcsSUFBSSxRQUFRLENBQUM7QUFBQSxjQUM1RDtBQUFBLGNBQ1EsZUFBZSxRQUFRLFVBQVU7QUFDL0IsdUJBQU8sZUFBZSxXQUFXLElBQUksUUFBUSxDQUFDO0FBQUEsY0FDeEQ7QUFBQSxZQUNBO0FBQ00sa0JBQU0sNEJBQTRCLElBQUksZUFBZSxjQUFZO0FBQy9ELGtCQUFJLE9BQU8sYUFBYSxZQUFZO0FBQ2xDLHVCQUFPO0FBQUEsY0FDakI7QUFVUSxxQkFBTyxTQUFTLGtCQUFrQixLQUFLO0FBQ3JDLHNCQUFNLGFBQWEsV0FBVyxLQUFLLElBQW1CO0FBQUEsa0JBQ3BELFlBQVk7QUFBQSxvQkFDVixTQUFTO0FBQUEsb0JBQ1QsU0FBUztBQUFBLGtCQUN2QjtBQUFBLGdCQUNBLENBQVc7QUFDRCx5QkFBUyxVQUFVO0FBQUEsY0FDN0I7QUFBQSxZQUNBLENBQU87QUFDRCxrQkFBTSxvQkFBb0IsSUFBSSxlQUFlLGNBQVk7QUFDdkQsa0JBQUksT0FBTyxhQUFhLFlBQVk7QUFDbEMsdUJBQU87QUFBQSxjQUNqQjtBQW1CUSxxQkFBTyxTQUFTLFVBQVUsU0FBUyxRQUFRLGNBQWM7QUFDdkQsb0JBQUksc0JBQXNCO0FBQzFCLG9CQUFJO0FBQ0osb0JBQUksc0JBQXNCLElBQUksUUFBUSxhQUFXO0FBQy9DLHdDQUFzQixTQUFVLFVBQVU7QUFDeEMsMENBQXNCO0FBQ3RCLDRCQUFRLFFBQVE7QUFBQSxrQkFDOUI7QUFBQSxnQkFDQSxDQUFXO0FBQ0Qsb0JBQUlFO0FBQ0osb0JBQUk7QUFDRixrQkFBQUEsVUFBUyxTQUFTLFNBQVMsUUFBUSxtQkFBbUI7QUFBQSxnQkFDbEUsU0FBbUIsS0FBSztBQUNaLGtCQUFBQSxVQUFTLFFBQVEsT0FBTyxHQUFHO0FBQUEsZ0JBQ3ZDO0FBQ1Usc0JBQU0sbUJBQW1CQSxZQUFXLFFBQVEsV0FBV0EsT0FBTTtBQUs3RCxvQkFBSUEsWUFBVyxRQUFRLENBQUMsb0JBQW9CLENBQUMscUJBQXFCO0FBQ2hFLHlCQUFPO0FBQUEsZ0JBQ25CO0FBTVUsc0JBQU0scUJBQXFCLGFBQVc7QUFDcEMsMEJBQVEsS0FBSyxTQUFPO0FBRWxCLGlDQUFhLEdBQUc7QUFBQSxrQkFDOUIsR0FBZSxXQUFTO0FBR1Ysd0JBQUlDO0FBQ0osd0JBQUksVUFBVSxpQkFBaUIsU0FBUyxPQUFPLE1BQU0sWUFBWSxXQUFXO0FBQzFFLHNCQUFBQSxXQUFVLE1BQU07QUFBQSxvQkFDaEMsT0FBcUI7QUFDTCxzQkFBQUEsV0FBVTtBQUFBLG9CQUMxQjtBQUNjLGlDQUFhO0FBQUEsc0JBQ1gsbUNBQW1DO0FBQUEsc0JBQ25DLFNBQUFBO0FBQUEsb0JBQ2hCLENBQWU7QUFBQSxrQkFDZixDQUFhLEVBQUUsTUFBTSxTQUFPO0FBRWQsNEJBQVEsTUFBTSwyQ0FBMkMsR0FBRztBQUFBLGtCQUMxRSxDQUFhO0FBQUEsZ0JBQ2I7QUFLVSxvQkFBSSxrQkFBa0I7QUFDcEIscUNBQW1CRCxPQUFNO0FBQUEsZ0JBQ3JDLE9BQWlCO0FBQ0wscUNBQW1CLG1CQUFtQjtBQUFBLGdCQUNsRDtBQUdVLHVCQUFPO0FBQUEsY0FDakI7QUFBQSxZQUNBLENBQU87QUFDRCxrQkFBTSw2QkFBNkIsQ0FBQztBQUFBLGNBQ2xDO0FBQUEsY0FDQTtBQUFBLGVBQ0MsVUFBVTtBQUNYLGtCQUFJLGNBQWMsUUFBUSxXQUFXO0FBSW5DLG9CQUFJLGNBQWMsUUFBUSxVQUFVLFlBQVksa0RBQWtEO0FBQ2hHLDBCQUFPO0FBQUEsZ0JBQ25CLE9BQWlCO0FBQ0wseUJBQU8sSUFBSSxNQUFNLGNBQWMsUUFBUSxVQUFVLE9BQU8sQ0FBQztBQUFBLGdCQUNyRTtBQUFBLGNBQ0EsV0FBbUIsU0FBUyxNQUFNLG1DQUFtQztBQUczRCx1QkFBTyxJQUFJLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxjQUN6QyxPQUFlO0FBQ0wsd0JBQVEsS0FBSztBQUFBLGNBQ3ZCO0FBQUEsWUFDQTtBQUNNLGtCQUFNLHFCQUFxQixDQUFDLE1BQU0sVUFBVSxvQkFBb0IsU0FBUztBQUN2RSxrQkFBSSxLQUFLLFNBQVMsU0FBUyxTQUFTO0FBQ2xDLHNCQUFNLElBQUksTUFBTSxxQkFBcUIsU0FBUyxPQUFPLElBQUksbUJBQW1CLFNBQVMsT0FBTyxDQUFDLFFBQVEsSUFBSSxXQUFXLEtBQUssTUFBTSxFQUFFO0FBQUEsY0FDM0k7QUFDUSxrQkFBSSxLQUFLLFNBQVMsU0FBUyxTQUFTO0FBQ2xDLHNCQUFNLElBQUksTUFBTSxvQkFBb0IsU0FBUyxPQUFPLElBQUksbUJBQW1CLFNBQVMsT0FBTyxDQUFDLFFBQVEsSUFBSSxXQUFXLEtBQUssTUFBTSxFQUFFO0FBQUEsY0FDMUk7QUFDUSxxQkFBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdEMsc0JBQU0sWUFBWSwyQkFBMkIsS0FBSyxNQUFNO0FBQUEsa0JBQ3REO0FBQUEsa0JBQ0E7QUFBQSxnQkFDWixDQUFXO0FBQ0QscUJBQUssS0FBSyxTQUFTO0FBQ25CLGdDQUFnQixZQUFZLEdBQUcsSUFBSTtBQUFBLGNBQzdDLENBQVM7QUFBQSxZQUNUO0FBQ00sa0JBQU0saUJBQWlCO0FBQUEsY0FDckIsVUFBVTtBQUFBLGdCQUNSLFNBQVM7QUFBQSxrQkFDUCxtQkFBbUIsVUFBVSx5QkFBeUI7QUFBQSxnQkFDbEU7QUFBQTtjQUVRLFNBQVM7QUFBQSxnQkFDUCxXQUFXLFVBQVUsaUJBQWlCO0FBQUEsZ0JBQ3RDLG1CQUFtQixVQUFVLGlCQUFpQjtBQUFBLGdCQUM5QyxhQUFhLG1CQUFtQixLQUFLLE1BQU0sZUFBZTtBQUFBLGtCQUN4RCxTQUFTO0FBQUEsa0JBQ1QsU0FBUztBQUFBLGlCQUNWO0FBQUE7Y0FFSCxNQUFNO0FBQUEsZ0JBQ0osYUFBYSxtQkFBbUIsS0FBSyxNQUFNLGVBQWU7QUFBQSxrQkFDeEQsU0FBUztBQUFBLGtCQUNULFNBQVM7QUFBQSxpQkFDVjtBQUFBLGNBQ1g7QUFBQTtBQUVNLGtCQUFNLGtCQUFrQjtBQUFBLGNBQ3RCLE9BQU87QUFBQSxnQkFDTCxTQUFTO0FBQUEsZ0JBQ1QsU0FBUztBQUFBO2NBRVgsS0FBSztBQUFBLGdCQUNILFNBQVM7QUFBQSxnQkFDVCxTQUFTO0FBQUE7Y0FFWCxLQUFLO0FBQUEsZ0JBQ0gsU0FBUztBQUFBLGdCQUNULFNBQVM7QUFBQSxjQUNuQjtBQUFBO0FBRU0sd0JBQVksVUFBVTtBQUFBLGNBQ3BCLFNBQVM7QUFBQSxnQkFDUCxLQUFLO0FBQUE7Y0FFUCxVQUFVO0FBQUEsZ0JBQ1IsS0FBSztBQUFBO2NBRVAsVUFBVTtBQUFBLGdCQUNSLEtBQUs7QUFBQSxjQUNmO0FBQUE7QUFFTSxtQkFBTyxXQUFXLGVBQWUsZ0JBQWdCLFdBQVc7QUFBQSxVQUNsRTtBQUlJLFVBQUFILFFBQU8sVUFBVSxTQUFTLE1BQU07QUFBQSxRQUNwQyxPQUFTO0FBQ0wsVUFBQUEsUUFBTyxVQUFVLFdBQVc7QUFBQSxRQUNoQztBQUFBLE1BQ0EsQ0FBQztBQUFBOzs7OztBQ3RzQ3NCLGFBQVcsU0FBUyxTQUFTLEtBQ2hELFdBQVcsVUFDWCxXQUFXO0FDK0lSLGlCQUFlLGlCQUFpQixTQUFTO0FBQzVDLFdBQU8sUUFBUSxRQUFRLFlBQVksT0FBTztBQUFBLEVBQzlDO0FDcEpPLE1BQUk7QUFDWCxHQUFDLFNBQVVLLE9BQU07QUFDYixJQUFBQSxNQUFLLGNBQWMsQ0FBQyxNQUFNO0FBQUEsSUFBRTtBQUM1QixhQUFTLFNBQVMsTUFBTTtBQUFBLElBQUU7QUFDMUIsSUFBQUEsTUFBSyxXQUFXO0FBQ2hCLGFBQVMsWUFBWSxJQUFJO0FBQ3JCLFlBQU0sSUFBSSxNQUFLO0FBQUEsSUFDbkI7QUFDQSxJQUFBQSxNQUFLLGNBQWM7QUFDbkIsSUFBQUEsTUFBSyxjQUFjLENBQUMsVUFBVTtBQUMxQixZQUFNLE1BQU0sQ0FBQTtBQUNaLGlCQUFXLFFBQVEsT0FBTztBQUN0QixZQUFJLElBQUksSUFBSTtBQUFBLE1BQ2hCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxJQUFBQSxNQUFLLHFCQUFxQixDQUFDLFFBQVE7QUFDL0IsWUFBTSxZQUFZQSxNQUFLLFdBQVcsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLFFBQVE7QUFDcEYsWUFBTSxXQUFXLENBQUE7QUFDakIsaUJBQVcsS0FBSyxXQUFXO0FBQ3ZCLGlCQUFTLENBQUMsSUFBSSxJQUFJLENBQUM7QUFBQSxNQUN2QjtBQUNBLGFBQU9BLE1BQUssYUFBYSxRQUFRO0FBQUEsSUFDckM7QUFDQSxJQUFBQSxNQUFLLGVBQWUsQ0FBQyxRQUFRO0FBQ3pCLGFBQU9BLE1BQUssV0FBVyxHQUFHLEVBQUUsSUFBSSxTQUFVLEdBQUc7QUFDekMsZUFBTyxJQUFJLENBQUM7QUFBQSxNQUNoQixDQUFDO0FBQUEsSUFDTDtBQUNBLElBQUFBLE1BQUssYUFBYSxPQUFPLE9BQU8sU0FBUyxhQUNuQyxDQUFDLFFBQVEsT0FBTyxLQUFLLEdBQUcsSUFDeEIsQ0FBQyxXQUFXO0FBQ1YsWUFBTSxPQUFPLENBQUE7QUFDYixpQkFBVyxPQUFPLFFBQVE7QUFDdEIsWUFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLFFBQVEsR0FBRyxHQUFHO0FBQ25ELGVBQUssS0FBSyxHQUFHO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDSixJQUFBQSxNQUFLLE9BQU8sQ0FBQyxLQUFLLFlBQVk7QUFDMUIsaUJBQVcsUUFBUSxLQUFLO0FBQ3BCLFlBQUksUUFBUSxJQUFJO0FBQ1osaUJBQU87QUFBQSxNQUNmO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxJQUFBQSxNQUFLLFlBQVksT0FBTyxPQUFPLGNBQWMsYUFDdkMsQ0FBQyxRQUFRLE9BQU8sVUFBVSxHQUFHLElBQzdCLENBQUMsUUFBUSxPQUFPLFFBQVEsWUFBWSxPQUFPLFNBQVMsR0FBRyxLQUFLLEtBQUssTUFBTSxHQUFHLE1BQU07QUFDdEYsYUFBUyxXQUFXLE9BQU8sWUFBWSxPQUFPO0FBQzFDLGFBQU8sTUFBTSxJQUFJLENBQUMsUUFBUyxPQUFPLFFBQVEsV0FBVyxJQUFJLEdBQUcsTUFBTSxHQUFJLEVBQUUsS0FBSyxTQUFTO0FBQUEsSUFDMUY7QUFDQSxJQUFBQSxNQUFLLGFBQWE7QUFDbEIsSUFBQUEsTUFBSyx3QkFBd0IsQ0FBQyxHQUFHLFVBQVU7QUFDdkMsVUFBSSxPQUFPLFVBQVUsVUFBVTtBQUMzQixlQUFPLE1BQU0sU0FBUTtBQUFBLE1BQ3pCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKLEdBQUcsU0FBUyxPQUFPLENBQUEsRUFBRztBQUNmLE1BQUk7QUFDWCxHQUFDLFNBQVVDLGFBQVk7QUFDbkIsSUFBQUEsWUFBVyxjQUFjLENBQUMsT0FBTyxXQUFXO0FBQ3hDLGFBQU87QUFBQSxRQUNILEdBQUc7QUFBQSxRQUNILEdBQUc7QUFBQTtBQUFBLE1BQ2Y7QUFBQSxJQUNJO0FBQUEsRUFDSixHQUFHLGVBQWUsYUFBYSxDQUFBLEVBQUc7QUFDM0IsUUFBTSxnQkFBZ0IsS0FBSyxZQUFZO0FBQUEsSUFDMUM7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSixDQUFDO0FBQ00sUUFBTSxnQkFBZ0IsQ0FBQyxTQUFTO0FBQ25DLFVBQU0sSUFBSSxPQUFPO0FBQ2pCLFlBQVEsR0FBQztBQUFBLE1BQ0wsS0FBSztBQUNELGVBQU8sY0FBYztBQUFBLE1BQ3pCLEtBQUs7QUFDRCxlQUFPLGNBQWM7QUFBQSxNQUN6QixLQUFLO0FBQ0QsZUFBTyxPQUFPLE1BQU0sSUFBSSxJQUFJLGNBQWMsTUFBTSxjQUFjO0FBQUEsTUFDbEUsS0FBSztBQUNELGVBQU8sY0FBYztBQUFBLE1BQ3pCLEtBQUs7QUFDRCxlQUFPLGNBQWM7QUFBQSxNQUN6QixLQUFLO0FBQ0QsZUFBTyxjQUFjO0FBQUEsTUFDekIsS0FBSztBQUNELGVBQU8sY0FBYztBQUFBLE1BQ3pCLEtBQUs7QUFDRCxZQUFJLE1BQU0sUUFBUSxJQUFJLEdBQUc7QUFDckIsaUJBQU8sY0FBYztBQUFBLFFBQ3pCO0FBQ0EsWUFBSSxTQUFTLE1BQU07QUFDZixpQkFBTyxjQUFjO0FBQUEsUUFDekI7QUFDQSxZQUFJLEtBQUssUUFBUSxPQUFPLEtBQUssU0FBUyxjQUFjLEtBQUssU0FBUyxPQUFPLEtBQUssVUFBVSxZQUFZO0FBQ2hHLGlCQUFPLGNBQWM7QUFBQSxRQUN6QjtBQUNBLFlBQUksT0FBTyxRQUFRLGVBQWUsZ0JBQWdCLEtBQUs7QUFDbkQsaUJBQU8sY0FBYztBQUFBLFFBQ3pCO0FBQ0EsWUFBSSxPQUFPLFFBQVEsZUFBZSxnQkFBZ0IsS0FBSztBQUNuRCxpQkFBTyxjQUFjO0FBQUEsUUFDekI7QUFDQSxZQUFJLE9BQU8sU0FBUyxlQUFlLGdCQUFnQixNQUFNO0FBQ3JELGlCQUFPLGNBQWM7QUFBQSxRQUN6QjtBQUNBLGVBQU8sY0FBYztBQUFBLE1BQ3pCO0FBQ0ksZUFBTyxjQUFjO0FBQUEsSUFDakM7QUFBQSxFQUNBO0FDbklPLFFBQU0sZUFBZSxLQUFLLFlBQVk7QUFBQSxJQUN6QztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0osQ0FBQztBQUFBLEVBS00sTUFBTSxpQkFBaUIsTUFBTTtBQUFBLElBQ2hDLElBQUksU0FBUztBQUNULGFBQU8sS0FBSztBQUFBLElBQ2hCO0FBQUEsSUFDQSxZQUFZLFFBQVE7QUFDaEIsWUFBSztBQUNMLFdBQUssU0FBUyxDQUFBO0FBQ2QsV0FBSyxXQUFXLENBQUMsUUFBUTtBQUNyQixhQUFLLFNBQVMsQ0FBQyxHQUFHLEtBQUssUUFBUSxHQUFHO0FBQUEsTUFDdEM7QUFDQSxXQUFLLFlBQVksQ0FBQyxPQUFPLE9BQU87QUFDNUIsYUFBSyxTQUFTLENBQUMsR0FBRyxLQUFLLFFBQVEsR0FBRyxJQUFJO0FBQUEsTUFDMUM7QUFDQSxZQUFNLGNBQWMsV0FBVztBQUMvQixVQUFJLE9BQU8sZ0JBQWdCO0FBRXZCLGVBQU8sZUFBZSxNQUFNLFdBQVc7QUFBQSxNQUMzQyxPQUNLO0FBQ0QsYUFBSyxZQUFZO0FBQUEsTUFDckI7QUFDQSxXQUFLLE9BQU87QUFDWixXQUFLLFNBQVM7QUFBQSxJQUNsQjtBQUFBLElBQ0EsT0FBTyxTQUFTO0FBQ1osWUFBTSxTQUFTLFdBQ1gsU0FBVSxPQUFPO0FBQ2IsZUFBTyxNQUFNO0FBQUEsTUFDakI7QUFDSixZQUFNLGNBQWMsRUFBRSxTQUFTLEdBQUU7QUFDakMsWUFBTSxlQUFlLENBQUMsVUFBVTtBQUM1QixtQkFBVyxTQUFTLE1BQU0sUUFBUTtBQUM5QixjQUFJLE1BQU0sU0FBUyxpQkFBaUI7QUFDaEMsa0JBQU0sWUFBWSxJQUFJLFlBQVk7QUFBQSxVQUN0QyxXQUNTLE1BQU0sU0FBUyx1QkFBdUI7QUFDM0MseUJBQWEsTUFBTSxlQUFlO0FBQUEsVUFDdEMsV0FDUyxNQUFNLFNBQVMscUJBQXFCO0FBQ3pDLHlCQUFhLE1BQU0sY0FBYztBQUFBLFVBQ3JDLFdBQ1MsTUFBTSxLQUFLLFdBQVcsR0FBRztBQUM5Qix3QkFBWSxRQUFRLEtBQUssT0FBTyxLQUFLLENBQUM7QUFBQSxVQUMxQyxPQUNLO0FBQ0QsZ0JBQUksT0FBTztBQUNYLGdCQUFJLElBQUk7QUFDUixtQkFBTyxJQUFJLE1BQU0sS0FBSyxRQUFRO0FBQzFCLG9CQUFNLEtBQUssTUFBTSxLQUFLLENBQUM7QUFDdkIsb0JBQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxTQUFTO0FBQzNDLGtCQUFJLENBQUMsVUFBVTtBQUNYLHFCQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRTtBQUFBLGNBUXhDLE9BQ0s7QUFDRCxxQkFBSyxFQUFFLElBQUksS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUU7QUFDcEMscUJBQUssRUFBRSxFQUFFLFFBQVEsS0FBSyxPQUFPLEtBQUssQ0FBQztBQUFBLGNBQ3ZDO0FBQ0EscUJBQU8sS0FBSyxFQUFFO0FBQ2Q7QUFBQSxZQUNKO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQ0EsbUJBQWEsSUFBSTtBQUNqQixhQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0EsT0FBTyxPQUFPLE9BQU87QUFDakIsVUFBSSxFQUFFLGlCQUFpQixXQUFXO0FBQzlCLGNBQU0sSUFBSSxNQUFNLG1CQUFtQixLQUFLLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0o7QUFBQSxJQUNBLFdBQVc7QUFDUCxhQUFPLEtBQUs7QUFBQSxJQUNoQjtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssdUJBQXVCLENBQUM7QUFBQSxJQUNwRTtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxLQUFLLE9BQU8sV0FBVztBQUFBLElBQ2xDO0FBQUEsSUFDQSxRQUFRLFNBQVMsQ0FBQyxVQUFVLE1BQU0sU0FBUztBQUN2QyxZQUFNLGNBQWMsQ0FBQTtBQUNwQixZQUFNLGFBQWEsQ0FBQTtBQUNuQixpQkFBVyxPQUFPLEtBQUssUUFBUTtBQUMzQixZQUFJLElBQUksS0FBSyxTQUFTLEdBQUc7QUFDckIsZ0JBQU0sVUFBVSxJQUFJLEtBQUssQ0FBQztBQUMxQixzQkFBWSxPQUFPLElBQUksWUFBWSxPQUFPLEtBQUssQ0FBQTtBQUMvQyxzQkFBWSxPQUFPLEVBQUUsS0FBSyxPQUFPLEdBQUcsQ0FBQztBQUFBLFFBQ3pDLE9BQ0s7QUFDRCxxQkFBVyxLQUFLLE9BQU8sR0FBRyxDQUFDO0FBQUEsUUFDL0I7QUFBQSxNQUNKO0FBQ0EsYUFBTyxFQUFFLFlBQVksWUFBVztBQUFBLElBQ3BDO0FBQUEsSUFDQSxJQUFJLGFBQWE7QUFDYixhQUFPLEtBQUssUUFBTztBQUFBLElBQ3ZCO0FBQUEsRUFDSjtBQUNBLFdBQVMsU0FBUyxDQUFDLFdBQVc7QUFDMUIsVUFBTSxRQUFRLElBQUksU0FBUyxNQUFNO0FBQ2pDLFdBQU87QUFBQSxFQUNYO0FDbElBLFFBQU0sV0FBVyxDQUFDLE9BQU8sU0FBUztBQUM5QixRQUFJO0FBQ0osWUFBUSxNQUFNLE1BQUk7QUFBQSxNQUNkLEtBQUssYUFBYTtBQUNkLFlBQUksTUFBTSxhQUFhLGNBQWMsV0FBVztBQUM1QyxvQkFBVTtBQUFBLFFBQ2QsT0FDSztBQUNELG9CQUFVLFlBQVksTUFBTSxRQUFRLGNBQWMsTUFBTSxRQUFRO0FBQUEsUUFDcEU7QUFDQTtBQUFBLE1BQ0osS0FBSyxhQUFhO0FBQ2Qsa0JBQVUsbUNBQW1DLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxxQkFBcUIsQ0FBQztBQUN2RztBQUFBLE1BQ0osS0FBSyxhQUFhO0FBQ2Qsa0JBQVUsa0NBQWtDLEtBQUssV0FBVyxNQUFNLE1BQU0sSUFBSSxDQUFDO0FBQzdFO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVTtBQUNWO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVSx5Q0FBeUMsS0FBSyxXQUFXLE1BQU0sT0FBTyxDQUFDO0FBQ2pGO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVSxnQ0FBZ0MsS0FBSyxXQUFXLE1BQU0sT0FBTyxDQUFDLGVBQWUsTUFBTSxRQUFRO0FBQ3JHO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVTtBQUNWO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVTtBQUNWO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxrQkFBVTtBQUNWO0FBQUEsTUFDSixLQUFLLGFBQWE7QUFDZCxZQUFJLE9BQU8sTUFBTSxlQUFlLFVBQVU7QUFDdEMsY0FBSSxjQUFjLE1BQU0sWUFBWTtBQUNoQyxzQkFBVSxnQ0FBZ0MsTUFBTSxXQUFXLFFBQVE7QUFDbkUsZ0JBQUksT0FBTyxNQUFNLFdBQVcsYUFBYSxVQUFVO0FBQy9DLHdCQUFVLEdBQUcsT0FBTyxzREFBc0QsTUFBTSxXQUFXLFFBQVE7QUFBQSxZQUN2RztBQUFBLFVBQ0osV0FDUyxnQkFBZ0IsTUFBTSxZQUFZO0FBQ3ZDLHNCQUFVLG1DQUFtQyxNQUFNLFdBQVcsVUFBVTtBQUFBLFVBQzVFLFdBQ1MsY0FBYyxNQUFNLFlBQVk7QUFDckMsc0JBQVUsaUNBQWlDLE1BQU0sV0FBVyxRQUFRO0FBQUEsVUFDeEUsT0FDSztBQUNELGlCQUFLLFlBQVksTUFBTSxVQUFVO0FBQUEsVUFDckM7QUFBQSxRQUNKLFdBQ1MsTUFBTSxlQUFlLFNBQVM7QUFDbkMsb0JBQVUsV0FBVyxNQUFNLFVBQVU7QUFBQSxRQUN6QyxPQUNLO0FBQ0Qsb0JBQVU7QUFBQSxRQUNkO0FBQ0E7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLFlBQUksTUFBTSxTQUFTO0FBQ2Ysb0JBQVUsc0JBQXNCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsSUFBSSxNQUFNLE9BQU87QUFBQSxpQkFDaEgsTUFBTSxTQUFTO0FBQ3BCLG9CQUFVLHVCQUF1QixNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLElBQUksTUFBTSxPQUFPO0FBQUEsaUJBQzVHLE1BQU0sU0FBUztBQUNwQixvQkFBVSxrQkFBa0IsTUFBTSxRQUFRLHNCQUFzQixNQUFNLFlBQVksOEJBQThCLGVBQWUsR0FBRyxNQUFNLE9BQU87QUFBQSxpQkFDMUksTUFBTSxTQUFTO0FBQ3BCLG9CQUFVLGtCQUFrQixNQUFNLFFBQVEsc0JBQXNCLE1BQU0sWUFBWSw4QkFBOEIsZUFBZSxHQUFHLE1BQU0sT0FBTztBQUFBLGlCQUMxSSxNQUFNLFNBQVM7QUFDcEIsb0JBQVUsZ0JBQWdCLE1BQU0sUUFBUSxzQkFBc0IsTUFBTSxZQUFZLDhCQUE4QixlQUFlLEdBQUcsSUFBSSxLQUFLLE9BQU8sTUFBTSxPQUFPLENBQUMsQ0FBQztBQUFBO0FBRS9KLG9CQUFVO0FBQ2Q7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLFlBQUksTUFBTSxTQUFTO0FBQ2Ysb0JBQVUsc0JBQXNCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxZQUFZLFdBQVcsSUFBSSxNQUFNLE9BQU87QUFBQSxpQkFDL0csTUFBTSxTQUFTO0FBQ3BCLG9CQUFVLHVCQUF1QixNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksWUFBWSxPQUFPLElBQUksTUFBTSxPQUFPO0FBQUEsaUJBQzVHLE1BQU0sU0FBUztBQUNwQixvQkFBVSxrQkFBa0IsTUFBTSxRQUFRLFlBQVksTUFBTSxZQUFZLDBCQUEwQixXQUFXLElBQUksTUFBTSxPQUFPO0FBQUEsaUJBQ3pILE1BQU0sU0FBUztBQUNwQixvQkFBVSxrQkFBa0IsTUFBTSxRQUFRLFlBQVksTUFBTSxZQUFZLDBCQUEwQixXQUFXLElBQUksTUFBTSxPQUFPO0FBQUEsaUJBQ3pILE1BQU0sU0FBUztBQUNwQixvQkFBVSxnQkFBZ0IsTUFBTSxRQUFRLFlBQVksTUFBTSxZQUFZLDZCQUE2QixjQUFjLElBQUksSUFBSSxLQUFLLE9BQU8sTUFBTSxPQUFPLENBQUMsQ0FBQztBQUFBO0FBRXBKLG9CQUFVO0FBQ2Q7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLGtCQUFVO0FBQ1Y7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLGtCQUFVO0FBQ1Y7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLGtCQUFVLGdDQUFnQyxNQUFNLFVBQVU7QUFDMUQ7QUFBQSxNQUNKLEtBQUssYUFBYTtBQUNkLGtCQUFVO0FBQ1Y7QUFBQSxNQUNKO0FBQ0ksa0JBQVUsS0FBSztBQUNmLGFBQUssWUFBWSxLQUFLO0FBQUEsSUFDbEM7QUFDSSxXQUFPLEVBQUUsUUFBTztBQUFBLEVBQ3BCO0FDMUdBLE1BQUksbUJBQW1CQztBQUtoQixXQUFTLGNBQWM7QUFDMUIsV0FBTztBQUFBLEVBQ1g7QUNOTyxRQUFNLFlBQVksQ0FBQyxXQUFXO0FBQ2pDLFVBQU0sRUFBRSxNQUFNLE1BQU0sV0FBVyxVQUFTLElBQUs7QUFDN0MsVUFBTSxXQUFXLENBQUMsR0FBRyxNQUFNLEdBQUksVUFBVSxRQUFRLENBQUEsQ0FBRztBQUNwRCxVQUFNLFlBQVk7QUFBQSxNQUNkLEdBQUc7QUFBQSxNQUNILE1BQU07QUFBQSxJQUNkO0FBQ0ksUUFBSSxVQUFVLFlBQVksUUFBVztBQUNqQyxhQUFPO0FBQUEsUUFDSCxHQUFHO0FBQUEsUUFDSCxNQUFNO0FBQUEsUUFDTixTQUFTLFVBQVU7QUFBQSxNQUMvQjtBQUFBLElBQ0k7QUFDQSxRQUFJLGVBQWU7QUFDbkIsVUFBTSxPQUFPLFVBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDakIsTUFBSyxFQUNMLFFBQU87QUFDWixlQUFXLE9BQU8sTUFBTTtBQUNwQixxQkFBZSxJQUFJLFdBQVcsRUFBRSxNQUFNLGNBQWMsYUFBWSxDQUFFLEVBQUU7QUFBQSxJQUN4RTtBQUNBLFdBQU87QUFBQSxNQUNILEdBQUc7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNqQjtBQUFBLEVBQ0E7QUFFTyxXQUFTLGtCQUFrQixLQUFLLFdBQVc7QUFDOUMsVUFBTSxjQUFjLFlBQVc7QUFDL0IsVUFBTSxRQUFRLFVBQVU7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsTUFBTSxJQUFJO0FBQUEsTUFDVixNQUFNLElBQUk7QUFBQSxNQUNWLFdBQVc7QUFBQSxRQUNQLElBQUksT0FBTztBQUFBO0FBQUEsUUFDWCxJQUFJO0FBQUE7QUFBQSxRQUNKO0FBQUE7QUFBQSxRQUNBLGdCQUFnQkEsV0FBa0IsU0FBWUE7QUFBQUE7QUFBQUEsTUFDMUQsRUFBVSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQzNCLENBQUs7QUFDRCxRQUFJLE9BQU8sT0FBTyxLQUFLLEtBQUs7QUFBQSxFQUNoQztBQUFBLEVBQ08sTUFBTSxZQUFZO0FBQUEsSUFDckIsY0FBYztBQUNWLFdBQUssUUFBUTtBQUFBLElBQ2pCO0FBQUEsSUFDQSxRQUFRO0FBQ0osVUFBSSxLQUFLLFVBQVU7QUFDZixhQUFLLFFBQVE7QUFBQSxJQUNyQjtBQUFBLElBQ0EsUUFBUTtBQUNKLFVBQUksS0FBSyxVQUFVO0FBQ2YsYUFBSyxRQUFRO0FBQUEsSUFDckI7QUFBQSxJQUNBLE9BQU8sV0FBVyxRQUFRLFNBQVM7QUFDL0IsWUFBTSxhQUFhLENBQUE7QUFDbkIsaUJBQVcsS0FBSyxTQUFTO0FBQ3JCLFlBQUksRUFBRSxXQUFXO0FBQ2IsaUJBQU87QUFDWCxZQUFJLEVBQUUsV0FBVztBQUNiLGlCQUFPLE1BQUs7QUFDaEIsbUJBQVcsS0FBSyxFQUFFLEtBQUs7QUFBQSxNQUMzQjtBQUNBLGFBQU8sRUFBRSxRQUFRLE9BQU8sT0FBTyxPQUFPLFdBQVU7QUFBQSxJQUNwRDtBQUFBLElBQ0EsYUFBYSxpQkFBaUIsUUFBUSxPQUFPO0FBQ3pDLFlBQU0sWUFBWSxDQUFBO0FBQ2xCLGlCQUFXLFFBQVEsT0FBTztBQUN0QixjQUFNLE1BQU0sTUFBTSxLQUFLO0FBQ3ZCLGNBQU0sUUFBUSxNQUFNLEtBQUs7QUFDekIsa0JBQVUsS0FBSztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsUUFDaEIsQ0FBYTtBQUFBLE1BQ0w7QUFDQSxhQUFPLFlBQVksZ0JBQWdCLFFBQVEsU0FBUztBQUFBLElBQ3hEO0FBQUEsSUFDQSxPQUFPLGdCQUFnQixRQUFRLE9BQU87QUFDbEMsWUFBTSxjQUFjLENBQUE7QUFDcEIsaUJBQVcsUUFBUSxPQUFPO0FBQ3RCLGNBQU0sRUFBRSxLQUFLLE1BQUssSUFBSztBQUN2QixZQUFJLElBQUksV0FBVztBQUNmLGlCQUFPO0FBQ1gsWUFBSSxNQUFNLFdBQVc7QUFDakIsaUJBQU87QUFDWCxZQUFJLElBQUksV0FBVztBQUNmLGlCQUFPLE1BQUs7QUFDaEIsWUFBSSxNQUFNLFdBQVc7QUFDakIsaUJBQU8sTUFBSztBQUNoQixZQUFJLElBQUksVUFBVSxnQkFBZ0IsT0FBTyxNQUFNLFVBQVUsZUFBZSxLQUFLLFlBQVk7QUFDckYsc0JBQVksSUFBSSxLQUFLLElBQUksTUFBTTtBQUFBLFFBQ25DO0FBQUEsTUFDSjtBQUNBLGFBQU8sRUFBRSxRQUFRLE9BQU8sT0FBTyxPQUFPLFlBQVc7QUFBQSxJQUNyRDtBQUFBLEVBQ0o7QUFDTyxRQUFNLFVBQVUsT0FBTyxPQUFPO0FBQUEsSUFDakMsUUFBUTtBQUFBLEVBQ1osQ0FBQztBQUNNLFFBQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLFNBQVMsTUFBSztBQUNsRCxRQUFNLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxTQUFTLE1BQUs7QUFDL0MsUUFBTSxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDdEMsUUFBTSxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDcEMsUUFBTSxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDcEMsUUFBTSxVQUFVLENBQUMsTUFBTSxPQUFPLFlBQVksZUFBZSxhQUFhO0FDNUd0RSxNQUFJO0FBQ1gsR0FBQyxTQUFVQyxZQUFXO0FBQ2xCLElBQUFBLFdBQVUsV0FBVyxDQUFDLFlBQVksT0FBTyxZQUFZLFdBQVcsRUFBRSxZQUFZLFdBQVcsQ0FBQTtBQUV6RixJQUFBQSxXQUFVLFdBQVcsQ0FBQyxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsU0FBUztBQUFBLEVBQ3ZGLEdBQUcsY0FBYyxZQUFZLENBQUEsRUFBRztBQUFBLEVDQWhDLE1BQU0sbUJBQW1CO0FBQUEsSUFDckIsWUFBWSxRQUFRLE9BQU8sTUFBTSxLQUFLO0FBQ2xDLFdBQUssY0FBYyxDQUFBO0FBQ25CLFdBQUssU0FBUztBQUNkLFdBQUssT0FBTztBQUNaLFdBQUssUUFBUTtBQUNiLFdBQUssT0FBTztBQUFBLElBQ2hCO0FBQUEsSUFDQSxJQUFJLE9BQU87QUFDUCxVQUFJLENBQUMsS0FBSyxZQUFZLFFBQVE7QUFDMUIsWUFBSSxNQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUc7QUFDMUIsZUFBSyxZQUFZLEtBQUssR0FBRyxLQUFLLE9BQU8sR0FBRyxLQUFLLElBQUk7QUFBQSxRQUNyRCxPQUNLO0FBQ0QsZUFBSyxZQUFZLEtBQUssR0FBRyxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBQUEsUUFDbEQ7QUFBQSxNQUNKO0FBQ0EsYUFBTyxLQUFLO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBQ0EsUUFBTSxlQUFlLENBQUMsS0FBS0wsWUFBVztBQUNsQyxRQUFJLFFBQVFBLE9BQU0sR0FBRztBQUNqQixhQUFPLEVBQUUsU0FBUyxNQUFNLE1BQU1BLFFBQU8sTUFBSztBQUFBLElBQzlDLE9BQ0s7QUFDRCxVQUFJLENBQUMsSUFBSSxPQUFPLE9BQU8sUUFBUTtBQUMzQixjQUFNLElBQUksTUFBTSwyQ0FBMkM7QUFBQSxNQUMvRDtBQUNBLGFBQU87QUFBQSxRQUNILFNBQVM7QUFBQSxRQUNULElBQUksUUFBUTtBQUNSLGNBQUksS0FBSztBQUNMLG1CQUFPLEtBQUs7QUFDaEIsZ0JBQU0sUUFBUSxJQUFJLFNBQVMsSUFBSSxPQUFPLE1BQU07QUFDNUMsZUFBSyxTQUFTO0FBQ2QsaUJBQU8sS0FBSztBQUFBLFFBQ2hCO0FBQUEsTUFDWjtBQUFBLElBQ0k7QUFBQSxFQUNKO0FBQ0EsV0FBUyxvQkFBb0IsUUFBUTtBQUNqQyxRQUFJLENBQUM7QUFDRCxhQUFPLENBQUE7QUFDWCxVQUFNLEVBQUUsVUFBQU0sV0FBVSxvQkFBb0IsZ0JBQWdCLFlBQVcsSUFBSztBQUN0RSxRQUFJQSxjQUFhLHNCQUFzQixpQkFBaUI7QUFDcEQsWUFBTSxJQUFJLE1BQU0sMEZBQTBGO0FBQUEsSUFDOUc7QUFDQSxRQUFJQTtBQUNBLGFBQU8sRUFBRSxVQUFVQSxXQUFVLFlBQVc7QUFDNUMsVUFBTSxZQUFZLENBQUMsS0FBSyxRQUFRO0FBQzVCLFlBQU0sRUFBRSxRQUFPLElBQUs7QUFDcEIsVUFBSSxJQUFJLFNBQVMsc0JBQXNCO0FBQ25DLGVBQU8sRUFBRSxTQUFTLFdBQVcsSUFBSSxhQUFZO0FBQUEsTUFDakQ7QUFDQSxVQUFJLE9BQU8sSUFBSSxTQUFTLGFBQWE7QUFDakMsZUFBTyxFQUFFLFNBQVMsV0FBVyxrQkFBa0IsSUFBSSxhQUFZO0FBQUEsTUFDbkU7QUFDQSxVQUFJLElBQUksU0FBUztBQUNiLGVBQU8sRUFBRSxTQUFTLElBQUksYUFBWTtBQUN0QyxhQUFPLEVBQUUsU0FBUyxXQUFXLHNCQUFzQixJQUFJLGFBQVk7QUFBQSxJQUN2RTtBQUNBLFdBQU8sRUFBRSxVQUFVLFdBQVcsWUFBVztBQUFBLEVBQzdDO0FBQUEsRUFDTyxNQUFNLFFBQVE7QUFBQSxJQUNqQixJQUFJLGNBQWM7QUFDZCxhQUFPLEtBQUssS0FBSztBQUFBLElBQ3JCO0FBQUEsSUFDQSxTQUFTLE9BQU87QUFDWixhQUFPLGNBQWMsTUFBTSxJQUFJO0FBQUEsSUFDbkM7QUFBQSxJQUNBLGdCQUFnQixPQUFPLEtBQUs7QUFDeEIsYUFBUSxPQUFPO0FBQUEsUUFDWCxRQUFRLE1BQU0sT0FBTztBQUFBLFFBQ3JCLE1BQU0sTUFBTTtBQUFBLFFBQ1osWUFBWSxjQUFjLE1BQU0sSUFBSTtBQUFBLFFBQ3BDLGdCQUFnQixLQUFLLEtBQUs7QUFBQSxRQUMxQixNQUFNLE1BQU07QUFBQSxRQUNaLFFBQVEsTUFBTTtBQUFBLE1BQzFCO0FBQUEsSUFDSTtBQUFBLElBQ0Esb0JBQW9CLE9BQU87QUFDdkIsYUFBTztBQUFBLFFBQ0gsUUFBUSxJQUFJLFlBQVc7QUFBQSxRQUN2QixLQUFLO0FBQUEsVUFDRCxRQUFRLE1BQU0sT0FBTztBQUFBLFVBQ3JCLE1BQU0sTUFBTTtBQUFBLFVBQ1osWUFBWSxjQUFjLE1BQU0sSUFBSTtBQUFBLFVBQ3BDLGdCQUFnQixLQUFLLEtBQUs7QUFBQSxVQUMxQixNQUFNLE1BQU07QUFBQSxVQUNaLFFBQVEsTUFBTTtBQUFBLFFBQzlCO0FBQUEsTUFDQTtBQUFBLElBQ0k7QUFBQSxJQUNBLFdBQVcsT0FBTztBQUNkLFlBQU1OLFVBQVMsS0FBSyxPQUFPLEtBQUs7QUFDaEMsVUFBSSxRQUFRQSxPQUFNLEdBQUc7QUFDakIsY0FBTSxJQUFJLE1BQU0sd0NBQXdDO0FBQUEsTUFDNUQ7QUFDQSxhQUFPQTtBQUFBLElBQ1g7QUFBQSxJQUNBLFlBQVksT0FBTztBQUNmLFlBQU1BLFVBQVMsS0FBSyxPQUFPLEtBQUs7QUFDaEMsYUFBTyxRQUFRLFFBQVFBLE9BQU07QUFBQSxJQUNqQztBQUFBLElBQ0EsTUFBTSxNQUFNLFFBQVE7QUFDaEIsWUFBTUEsVUFBUyxLQUFLLFVBQVUsTUFBTSxNQUFNO0FBQzFDLFVBQUlBLFFBQU87QUFDUCxlQUFPQSxRQUFPO0FBQ2xCLFlBQU1BLFFBQU87QUFBQSxJQUNqQjtBQUFBLElBQ0EsVUFBVSxNQUFNLFFBQVE7QUFDcEIsWUFBTSxNQUFNO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDSixRQUFRLENBQUE7QUFBQSxVQUNSLE9BQU8sUUFBUSxTQUFTO0FBQUEsVUFDeEIsb0JBQW9CLFFBQVE7QUFBQSxRQUM1QztBQUFBLFFBQ1ksTUFBTSxRQUFRLFFBQVEsQ0FBQTtBQUFBLFFBQ3RCLGdCQUFnQixLQUFLLEtBQUs7QUFBQSxRQUMxQixRQUFRO0FBQUEsUUFDUjtBQUFBLFFBQ0EsWUFBWSxjQUFjLElBQUk7QUFBQSxNQUMxQztBQUNRLFlBQU1BLFVBQVMsS0FBSyxXQUFXLEVBQUUsTUFBTSxNQUFNLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDcEUsYUFBTyxhQUFhLEtBQUtBLE9BQU07QUFBQSxJQUNuQztBQUFBLElBQ0EsWUFBWSxNQUFNO0FBQ2QsWUFBTSxNQUFNO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDSixRQUFRLENBQUE7QUFBQSxVQUNSLE9BQU8sQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO0FBQUEsUUFDM0M7QUFBQSxRQUNZLE1BQU0sQ0FBQTtBQUFBLFFBQ04sZ0JBQWdCLEtBQUssS0FBSztBQUFBLFFBQzFCLFFBQVE7QUFBQSxRQUNSO0FBQUEsUUFDQSxZQUFZLGNBQWMsSUFBSTtBQUFBLE1BQzFDO0FBQ1EsVUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFLE9BQU87QUFDMUIsWUFBSTtBQUNBLGdCQUFNQSxVQUFTLEtBQUssV0FBVyxFQUFFLE1BQU0sTUFBTSxDQUFBLEdBQUksUUFBUSxLQUFLO0FBQzlELGlCQUFPLFFBQVFBLE9BQU0sSUFDZjtBQUFBLFlBQ0UsT0FBT0EsUUFBTztBQUFBLFVBQ3RDLElBQ3NCO0FBQUEsWUFDRSxRQUFRLElBQUksT0FBTztBQUFBLFVBQzNDO0FBQUEsUUFDWSxTQUNPLEtBQUs7QUFDUixjQUFJLEtBQUssU0FBUyxZQUFXLEdBQUksU0FBUyxhQUFhLEdBQUc7QUFDdEQsaUJBQUssV0FBVyxFQUFFLFFBQVE7QUFBQSxVQUM5QjtBQUNBLGNBQUksU0FBUztBQUFBLFlBQ1QsUUFBUSxDQUFBO0FBQUEsWUFDUixPQUFPO0FBQUEsVUFDM0I7QUFBQSxRQUNZO0FBQUEsTUFDSjtBQUNBLGFBQU8sS0FBSyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUEsR0FBSSxRQUFRLElBQUcsQ0FBRSxFQUFFLEtBQUssQ0FBQ0EsWUFBVyxRQUFRQSxPQUFNLElBQ2xGO0FBQUEsUUFDRSxPQUFPQSxRQUFPO0FBQUEsTUFDOUIsSUFDYztBQUFBLFFBQ0UsUUFBUSxJQUFJLE9BQU87QUFBQSxNQUNuQyxDQUFhO0FBQUEsSUFDVDtBQUFBLElBQ0EsTUFBTSxXQUFXLE1BQU0sUUFBUTtBQUMzQixZQUFNQSxVQUFTLE1BQU0sS0FBSyxlQUFlLE1BQU0sTUFBTTtBQUNyRCxVQUFJQSxRQUFPO0FBQ1AsZUFBT0EsUUFBTztBQUNsQixZQUFNQSxRQUFPO0FBQUEsSUFDakI7QUFBQSxJQUNBLE1BQU0sZUFBZSxNQUFNLFFBQVE7QUFDL0IsWUFBTSxNQUFNO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDSixRQUFRLENBQUE7QUFBQSxVQUNSLG9CQUFvQixRQUFRO0FBQUEsVUFDNUIsT0FBTztBQUFBLFFBQ3ZCO0FBQUEsUUFDWSxNQUFNLFFBQVEsUUFBUSxDQUFBO0FBQUEsUUFDdEIsZ0JBQWdCLEtBQUssS0FBSztBQUFBLFFBQzFCLFFBQVE7QUFBQSxRQUNSO0FBQUEsUUFDQSxZQUFZLGNBQWMsSUFBSTtBQUFBLE1BQzFDO0FBQ1EsWUFBTSxtQkFBbUIsS0FBSyxPQUFPLEVBQUUsTUFBTSxNQUFNLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDMUUsWUFBTUEsVUFBUyxPQUFPLFFBQVEsZ0JBQWdCLElBQUksbUJBQW1CLFFBQVEsUUFBUSxnQkFBZ0I7QUFDckcsYUFBTyxhQUFhLEtBQUtBLE9BQU07QUFBQSxJQUNuQztBQUFBLElBQ0EsT0FBTyxPQUFPLFNBQVM7QUFDbkIsWUFBTSxxQkFBcUIsQ0FBQyxRQUFRO0FBQ2hDLFlBQUksT0FBTyxZQUFZLFlBQVksT0FBTyxZQUFZLGFBQWE7QUFDL0QsaUJBQU8sRUFBRSxRQUFPO0FBQUEsUUFDcEIsV0FDUyxPQUFPLFlBQVksWUFBWTtBQUNwQyxpQkFBTyxRQUFRLEdBQUc7QUFBQSxRQUN0QixPQUNLO0FBQ0QsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUNBLGFBQU8sS0FBSyxZQUFZLENBQUMsS0FBSyxRQUFRO0FBQ2xDLGNBQU1BLFVBQVMsTUFBTSxHQUFHO0FBQ3hCLGNBQU0sV0FBVyxNQUFNLElBQUksU0FBUztBQUFBLFVBQ2hDLE1BQU0sYUFBYTtBQUFBLFVBQ25CLEdBQUcsbUJBQW1CLEdBQUc7QUFBQSxRQUN6QyxDQUFhO0FBQ0QsWUFBSSxPQUFPLFlBQVksZUFBZUEsbUJBQWtCLFNBQVM7QUFDN0QsaUJBQU9BLFFBQU8sS0FBSyxDQUFDLFNBQVM7QUFDekIsZ0JBQUksQ0FBQyxNQUFNO0FBQ1AsdUJBQVE7QUFDUixxQkFBTztBQUFBLFlBQ1gsT0FDSztBQUNELHFCQUFPO0FBQUEsWUFDWDtBQUFBLFVBQ0osQ0FBQztBQUFBLFFBQ0w7QUFDQSxZQUFJLENBQUNBLFNBQVE7QUFDVCxtQkFBUTtBQUNSLGlCQUFPO0FBQUEsUUFDWCxPQUNLO0FBQ0QsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUFBLElBQ0EsV0FBVyxPQUFPLGdCQUFnQjtBQUM5QixhQUFPLEtBQUssWUFBWSxDQUFDLEtBQUssUUFBUTtBQUNsQyxZQUFJLENBQUMsTUFBTSxHQUFHLEdBQUc7QUFDYixjQUFJLFNBQVMsT0FBTyxtQkFBbUIsYUFBYSxlQUFlLEtBQUssR0FBRyxJQUFJLGNBQWM7QUFDN0YsaUJBQU87QUFBQSxRQUNYLE9BQ0s7QUFDRCxpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNMO0FBQUEsSUFDQSxZQUFZLFlBQVk7QUFDcEIsYUFBTyxJQUFJLFdBQVc7QUFBQSxRQUNsQixRQUFRO0FBQUEsUUFDUixVQUFVLHNCQUFzQjtBQUFBLFFBQ2hDLFFBQVEsRUFBRSxNQUFNLGNBQWMsV0FBVTtBQUFBLE1BQ3BELENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxZQUFZLFlBQVk7QUFDcEIsYUFBTyxLQUFLLFlBQVksVUFBVTtBQUFBLElBQ3RDO0FBQUEsSUFDQSxZQUFZLEtBQUs7QUFFYixXQUFLLE1BQU0sS0FBSztBQUNoQixXQUFLLE9BQU87QUFDWixXQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSTtBQUNqQyxXQUFLLFlBQVksS0FBSyxVQUFVLEtBQUssSUFBSTtBQUN6QyxXQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssSUFBSTtBQUMzQyxXQUFLLGlCQUFpQixLQUFLLGVBQWUsS0FBSyxJQUFJO0FBQ25ELFdBQUssTUFBTSxLQUFLLElBQUksS0FBSyxJQUFJO0FBQzdCLFdBQUssU0FBUyxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBQ25DLFdBQUssYUFBYSxLQUFLLFdBQVcsS0FBSyxJQUFJO0FBQzNDLFdBQUssY0FBYyxLQUFLLFlBQVksS0FBSyxJQUFJO0FBQzdDLFdBQUssV0FBVyxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3ZDLFdBQUssV0FBVyxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3ZDLFdBQUssVUFBVSxLQUFLLFFBQVEsS0FBSyxJQUFJO0FBQ3JDLFdBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBQ2pDLFdBQUssVUFBVSxLQUFLLFFBQVEsS0FBSyxJQUFJO0FBQ3JDLFdBQUssS0FBSyxLQUFLLEdBQUcsS0FBSyxJQUFJO0FBQzNCLFdBQUssTUFBTSxLQUFLLElBQUksS0FBSyxJQUFJO0FBQzdCLFdBQUssWUFBWSxLQUFLLFVBQVUsS0FBSyxJQUFJO0FBQ3pDLFdBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBQ2pDLFdBQUssVUFBVSxLQUFLLFFBQVEsS0FBSyxJQUFJO0FBQ3JDLFdBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBQ2pDLFdBQUssV0FBVyxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3ZDLFdBQUssT0FBTyxLQUFLLEtBQUssS0FBSyxJQUFJO0FBQy9CLFdBQUssV0FBVyxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3ZDLFdBQUssYUFBYSxLQUFLLFdBQVcsS0FBSyxJQUFJO0FBQzNDLFdBQUssYUFBYSxLQUFLLFdBQVcsS0FBSyxJQUFJO0FBQzNDLFdBQUssV0FBVyxJQUFJO0FBQUEsUUFDaEIsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsVUFBVSxDQUFDLFNBQVMsS0FBSyxXQUFXLEVBQUUsSUFBSTtBQUFBLE1BQ3REO0FBQUEsSUFDSTtBQUFBLElBQ0EsV0FBVztBQUNQLGFBQU8sWUFBWSxPQUFPLE1BQU0sS0FBSyxJQUFJO0FBQUEsSUFDN0M7QUFBQSxJQUNBLFdBQVc7QUFDUCxhQUFPLFlBQVksT0FBTyxNQUFNLEtBQUssSUFBSTtBQUFBLElBQzdDO0FBQUEsSUFDQSxVQUFVO0FBQ04sYUFBTyxLQUFLLFNBQVEsRUFBRyxTQUFRO0FBQUEsSUFDbkM7QUFBQSxJQUNBLFFBQVE7QUFDSixhQUFPLFNBQVMsT0FBTyxJQUFJO0FBQUEsSUFDL0I7QUFBQSxJQUNBLFVBQVU7QUFDTixhQUFPLFdBQVcsT0FBTyxNQUFNLEtBQUssSUFBSTtBQUFBLElBQzVDO0FBQUEsSUFDQSxHQUFHLFFBQVE7QUFDUCxhQUFPLFNBQVMsT0FBTyxDQUFDLE1BQU0sTUFBTSxHQUFHLEtBQUssSUFBSTtBQUFBLElBQ3BEO0FBQUEsSUFDQSxJQUFJLFVBQVU7QUFDVixhQUFPLGdCQUFnQixPQUFPLE1BQU0sVUFBVSxLQUFLLElBQUk7QUFBQSxJQUMzRDtBQUFBLElBQ0EsVUFBVSxXQUFXO0FBQ2pCLGFBQU8sSUFBSSxXQUFXO0FBQUEsUUFDbEIsR0FBRyxvQkFBb0IsS0FBSyxJQUFJO0FBQUEsUUFDaEMsUUFBUTtBQUFBLFFBQ1IsVUFBVSxzQkFBc0I7QUFBQSxRQUNoQyxRQUFRLEVBQUUsTUFBTSxhQUFhLFVBQVM7QUFBQSxNQUNsRCxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsUUFBUSxLQUFLO0FBQ1QsWUFBTSxtQkFBbUIsT0FBTyxRQUFRLGFBQWEsTUFBTSxNQUFNO0FBQ2pFLGFBQU8sSUFBSSxXQUFXO0FBQUEsUUFDbEIsR0FBRyxvQkFBb0IsS0FBSyxJQUFJO0FBQUEsUUFDaEMsV0FBVztBQUFBLFFBQ1gsY0FBYztBQUFBLFFBQ2QsVUFBVSxzQkFBc0I7QUFBQSxNQUM1QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsUUFBUTtBQUNKLGFBQU8sSUFBSSxXQUFXO0FBQUEsUUFDbEIsVUFBVSxzQkFBc0I7QUFBQSxRQUNoQyxNQUFNO0FBQUEsUUFDTixHQUFHLG9CQUFvQixLQUFLLElBQUk7QUFBQSxNQUM1QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsTUFBTSxLQUFLO0FBQ1AsWUFBTSxpQkFBaUIsT0FBTyxRQUFRLGFBQWEsTUFBTSxNQUFNO0FBQy9ELGFBQU8sSUFBSSxTQUFTO0FBQUEsUUFDaEIsR0FBRyxvQkFBb0IsS0FBSyxJQUFJO0FBQUEsUUFDaEMsV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFFBQ1osVUFBVSxzQkFBc0I7QUFBQSxNQUM1QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxhQUFhO0FBQ2xCLFlBQU0sT0FBTyxLQUFLO0FBQ2xCLGFBQU8sSUFBSSxLQUFLO0FBQUEsUUFDWixHQUFHLEtBQUs7QUFBQSxRQUNSO0FBQUEsTUFDWixDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSyxRQUFRO0FBQ1QsYUFBTyxZQUFZLE9BQU8sTUFBTSxNQUFNO0FBQUEsSUFDMUM7QUFBQSxJQUNBLFdBQVc7QUFDUCxhQUFPLFlBQVksT0FBTyxJQUFJO0FBQUEsSUFDbEM7QUFBQSxJQUNBLGFBQWE7QUFDVCxhQUFPLEtBQUssVUFBVSxNQUFTLEVBQUU7QUFBQSxJQUNyQztBQUFBLElBQ0EsYUFBYTtBQUNULGFBQU8sS0FBSyxVQUFVLElBQUksRUFBRTtBQUFBLElBQ2hDO0FBQUEsRUFDSjtBQUNBLFFBQU0sWUFBWTtBQUNsQixRQUFNLGFBQWE7QUFDbkIsUUFBTSxZQUFZO0FBR2xCLFFBQU0sWUFBWTtBQUNsQixRQUFNLGNBQWM7QUFDcEIsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sZ0JBQWdCO0FBYXRCLFFBQU0sYUFBYTtBQUluQixRQUFNLGNBQWM7QUFDcEIsTUFBSTtBQUVKLFFBQU0sWUFBWTtBQUNsQixRQUFNLGdCQUFnQjtBQUd0QixRQUFNLFlBQVk7QUFDbEIsUUFBTSxnQkFBZ0I7QUFFdEIsUUFBTSxjQUFjO0FBRXBCLFFBQU0saUJBQWlCO0FBTXZCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sWUFBWSxJQUFJLE9BQU8sSUFBSSxlQUFlLEdBQUc7QUFDbkQsV0FBUyxnQkFBZ0IsTUFBTTtBQUMzQixRQUFJLHFCQUFxQjtBQUN6QixRQUFJLEtBQUssV0FBVztBQUNoQiwyQkFBcUIsR0FBRyxrQkFBa0IsVUFBVSxLQUFLLFNBQVM7QUFBQSxJQUN0RSxXQUNTLEtBQUssYUFBYSxNQUFNO0FBQzdCLDJCQUFxQixHQUFHLGtCQUFrQjtBQUFBLElBQzlDO0FBQ0EsVUFBTSxvQkFBb0IsS0FBSyxZQUFZLE1BQU07QUFDakQsV0FBTyw4QkFBOEIsa0JBQWtCLElBQUksaUJBQWlCO0FBQUEsRUFDaEY7QUFDQSxXQUFTLFVBQVUsTUFBTTtBQUNyQixXQUFPLElBQUksT0FBTyxJQUFJLGdCQUFnQixJQUFJLENBQUMsR0FBRztBQUFBLEVBQ2xEO0FBRU8sV0FBUyxjQUFjLE1BQU07QUFDaEMsUUFBSSxRQUFRLEdBQUcsZUFBZSxJQUFJLGdCQUFnQixJQUFJLENBQUM7QUFDdkQsVUFBTSxPQUFPLENBQUE7QUFDYixTQUFLLEtBQUssS0FBSyxRQUFRLE9BQU8sR0FBRztBQUNqQyxRQUFJLEtBQUs7QUFDTCxXQUFLLEtBQUssc0JBQXNCO0FBQ3BDLFlBQVEsR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUNsQyxXQUFPLElBQUksT0FBTyxJQUFJLEtBQUssR0FBRztBQUFBLEVBQ2xDO0FBQ0EsV0FBUyxVQUFVLElBQUksU0FBUztBQUM1QixTQUFLLFlBQVksUUFBUSxDQUFDLFlBQVksVUFBVSxLQUFLLEVBQUUsR0FBRztBQUN0RCxhQUFPO0FBQUEsSUFDWDtBQUNBLFNBQUssWUFBWSxRQUFRLENBQUMsWUFBWSxVQUFVLEtBQUssRUFBRSxHQUFHO0FBQ3RELGFBQU87QUFBQSxJQUNYO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFDQSxXQUFTLFdBQVcsS0FBSyxLQUFLO0FBQzFCLFFBQUksQ0FBQyxTQUFTLEtBQUssR0FBRztBQUNsQixhQUFPO0FBQ1gsUUFBSTtBQUNBLFlBQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxNQUFNLEdBQUc7QUFDOUIsVUFBSSxDQUFDO0FBQ0QsZUFBTztBQUVYLFlBQU0sU0FBUyxPQUNWLFFBQVEsTUFBTSxHQUFHLEVBQ2pCLFFBQVEsTUFBTSxHQUFHLEVBQ2pCLE9BQU8sT0FBTyxVQUFXLElBQUssT0FBTyxTQUFTLEtBQU0sR0FBSSxHQUFHO0FBQ2hFLFlBQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxNQUFNLENBQUM7QUFDdkMsVUFBSSxPQUFPLFlBQVksWUFBWSxZQUFZO0FBQzNDLGVBQU87QUFDWCxVQUFJLFNBQVMsV0FBVyxTQUFTLFFBQVE7QUFDckMsZUFBTztBQUNYLFVBQUksQ0FBQyxRQUFRO0FBQ1QsZUFBTztBQUNYLFVBQUksT0FBTyxRQUFRLFFBQVE7QUFDdkIsZUFBTztBQUNYLGFBQU87QUFBQSxJQUNYLFFBQ007QUFDRixhQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0o7QUFDQSxXQUFTLFlBQVksSUFBSSxTQUFTO0FBQzlCLFNBQUssWUFBWSxRQUFRLENBQUMsWUFBWSxjQUFjLEtBQUssRUFBRSxHQUFHO0FBQzFELGFBQU87QUFBQSxJQUNYO0FBQ0EsU0FBSyxZQUFZLFFBQVEsQ0FBQyxZQUFZLGNBQWMsS0FBSyxFQUFFLEdBQUc7QUFDMUQsYUFBTztBQUFBLElBQ1g7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ08sTUFBTSxrQkFBa0IsUUFBUTtBQUFBLElBQ25DLE9BQU8sT0FBTztBQUNWLFVBQUksS0FBSyxLQUFLLFFBQVE7QUFDbEIsY0FBTSxPQUFPLE9BQU8sTUFBTSxJQUFJO0FBQUEsTUFDbEM7QUFDQSxZQUFNLGFBQWEsS0FBSyxTQUFTLEtBQUs7QUFDdEMsVUFBSSxlQUFlLGNBQWMsUUFBUTtBQUNyQyxjQUFNTyxPQUFNLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEMsMEJBQWtCQSxNQUFLO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsVUFBVSxjQUFjO0FBQUEsVUFDeEIsVUFBVUEsS0FBSTtBQUFBLFFBQzlCLENBQWE7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUNBLFlBQU0sU0FBUyxJQUFJLFlBQVc7QUFDOUIsVUFBSSxNQUFNO0FBQ1YsaUJBQVcsU0FBUyxLQUFLLEtBQUssUUFBUTtBQUNsQyxZQUFJLE1BQU0sU0FBUyxPQUFPO0FBQ3RCLGNBQUksTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPO0FBQ2pDLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLGNBQ2YsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLGNBQ1gsT0FBTztBQUFBLGNBQ1AsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLE9BQU87QUFDM0IsY0FBSSxNQUFNLEtBQUssU0FBUyxNQUFNLE9BQU87QUFDakMsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsY0FDZixNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsY0FDUCxTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsVUFBVTtBQUM5QixnQkFBTSxTQUFTLE1BQU0sS0FBSyxTQUFTLE1BQU07QUFDekMsZ0JBQU0sV0FBVyxNQUFNLEtBQUssU0FBUyxNQUFNO0FBQzNDLGNBQUksVUFBVSxVQUFVO0FBQ3BCLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyxnQkFBSSxRQUFRO0FBQ1IsZ0NBQWtCLEtBQUs7QUFBQSxnQkFDbkIsTUFBTSxhQUFhO0FBQUEsZ0JBQ25CLFNBQVMsTUFBTTtBQUFBLGdCQUNmLE1BQU07QUFBQSxnQkFDTixXQUFXO0FBQUEsZ0JBQ1gsT0FBTztBQUFBLGdCQUNQLFNBQVMsTUFBTTtBQUFBLGNBQzNDLENBQXlCO0FBQUEsWUFDTCxXQUNTLFVBQVU7QUFDZixnQ0FBa0IsS0FBSztBQUFBLGdCQUNuQixNQUFNLGFBQWE7QUFBQSxnQkFDbkIsU0FBUyxNQUFNO0FBQUEsZ0JBQ2YsTUFBTTtBQUFBLGdCQUNOLFdBQVc7QUFBQSxnQkFDWCxPQUFPO0FBQUEsZ0JBQ1AsU0FBUyxNQUFNO0FBQUEsY0FDM0MsQ0FBeUI7QUFBQSxZQUNMO0FBQ0EsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxTQUFTO0FBQzdCLGNBQUksQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDOUIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFNBQVM7QUFDN0IsY0FBSSxDQUFDLFlBQVk7QUFDYix5QkFBYSxJQUFJLE9BQU8sYUFBYSxHQUFHO0FBQUEsVUFDNUM7QUFDQSxjQUFJLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQzlCLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLFlBQVk7QUFBQSxjQUNaLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxRQUFRO0FBQzVCLGNBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDN0Isa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFVBQVU7QUFDOUIsY0FBSSxDQUFDLFlBQVksS0FBSyxNQUFNLElBQUksR0FBRztBQUMvQixrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsUUFBUTtBQUM1QixjQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQzdCLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLFlBQVk7QUFBQSxjQUNaLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxTQUFTO0FBQzdCLGNBQUksQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDOUIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsY0FBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLElBQUksR0FBRztBQUM3QixrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsT0FBTztBQUMzQixjQUFJO0FBQ0EsZ0JBQUksSUFBSSxNQUFNLElBQUk7QUFBQSxVQUN0QixRQUNNO0FBQ0Ysa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFNBQVM7QUFDN0IsZ0JBQU0sTUFBTSxZQUFZO0FBQ3hCLGdCQUFNLGFBQWEsTUFBTSxNQUFNLEtBQUssTUFBTSxJQUFJO0FBQzlDLGNBQUksQ0FBQyxZQUFZO0FBQ2Isa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsZ0JBQU0sT0FBTyxNQUFNLEtBQUssS0FBSTtBQUFBLFFBQ2hDLFdBQ1MsTUFBTSxTQUFTLFlBQVk7QUFDaEMsY0FBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLE1BQU0sT0FBTyxNQUFNLFFBQVEsR0FBRztBQUNuRCxrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixNQUFNLGFBQWE7QUFBQSxjQUNuQixZQUFZLEVBQUUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFNBQVE7QUFBQSxjQUM3RCxTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsZUFBZTtBQUNuQyxnQkFBTSxPQUFPLE1BQU0sS0FBSyxZQUFXO0FBQUEsUUFDdkMsV0FDUyxNQUFNLFNBQVMsZUFBZTtBQUNuQyxnQkFBTSxPQUFPLE1BQU0sS0FBSyxZQUFXO0FBQUEsUUFDdkMsV0FDUyxNQUFNLFNBQVMsY0FBYztBQUNsQyxjQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEdBQUc7QUFDckMsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsWUFBWSxFQUFFLFlBQVksTUFBTSxNQUFLO0FBQUEsY0FDckMsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFlBQVk7QUFDaEMsY0FBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLE1BQU0sS0FBSyxHQUFHO0FBQ25DLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFlBQVksRUFBRSxVQUFVLE1BQU0sTUFBSztBQUFBLGNBQ25DLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxZQUFZO0FBQ2hDLGdCQUFNLFFBQVEsY0FBYyxLQUFLO0FBQ2pDLGNBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDekIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsZ0JBQU0sUUFBUTtBQUNkLGNBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDekIsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsTUFBTSxhQUFhO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsZ0JBQU0sUUFBUSxVQUFVLEtBQUs7QUFDN0IsY0FBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksR0FBRztBQUN6QixrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixNQUFNLGFBQWE7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsWUFBWTtBQUNoQyxjQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQ2pDLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLFlBQVk7QUFBQSxjQUNaLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxNQUFNO0FBQzFCLGNBQUksQ0FBQyxVQUFVLE1BQU0sTUFBTSxNQUFNLE9BQU8sR0FBRztBQUN2QyxrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osV0FDUyxNQUFNLFNBQVMsT0FBTztBQUMzQixjQUFJLENBQUMsV0FBVyxNQUFNLE1BQU0sTUFBTSxHQUFHLEdBQUc7QUFDcEMsa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLFFBQVE7QUFDNUIsY0FBSSxDQUFDLFlBQVksTUFBTSxNQUFNLE1BQU0sT0FBTyxHQUFHO0FBQ3pDLGtCQUFNLEtBQUssZ0JBQWdCLE9BQU8sR0FBRztBQUNyQyw4QkFBa0IsS0FBSztBQUFBLGNBQ25CLFlBQVk7QUFBQSxjQUNaLE1BQU0sYUFBYTtBQUFBLGNBQ25CLFNBQVMsTUFBTTtBQUFBLFlBQ3ZDLENBQXFCO0FBQ0QsbUJBQU8sTUFBSztBQUFBLFVBQ2hCO0FBQUEsUUFDSixXQUNTLE1BQU0sU0FBUyxVQUFVO0FBQzlCLGNBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxJQUFJLEdBQUc7QUFDL0Isa0JBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFHO0FBQ3JDLDhCQUFrQixLQUFLO0FBQUEsY0FDbkIsWUFBWTtBQUFBLGNBQ1osTUFBTSxhQUFhO0FBQUEsY0FDbkIsU0FBUyxNQUFNO0FBQUEsWUFDdkMsQ0FBcUI7QUFDRCxtQkFBTyxNQUFLO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFdBQ1MsTUFBTSxTQUFTLGFBQWE7QUFDakMsY0FBSSxDQUFDLGVBQWUsS0FBSyxNQUFNLElBQUksR0FBRztBQUNsQyxrQkFBTSxLQUFLLGdCQUFnQixPQUFPLEdBQUc7QUFDckMsOEJBQWtCLEtBQUs7QUFBQSxjQUNuQixZQUFZO0FBQUEsY0FDWixNQUFNLGFBQWE7QUFBQSxjQUNuQixTQUFTLE1BQU07QUFBQSxZQUN2QyxDQUFxQjtBQUNELG1CQUFPLE1BQUs7QUFBQSxVQUNoQjtBQUFBLFFBQ0osT0FDSztBQUNELGVBQUssWUFBWSxLQUFLO0FBQUEsUUFDMUI7QUFBQSxNQUNKO0FBQ0EsYUFBTyxFQUFFLFFBQVEsT0FBTyxPQUFPLE9BQU8sTUFBTSxLQUFJO0FBQUEsSUFDcEQ7QUFBQSxJQUNBLE9BQU8sT0FBTyxZQUFZLFNBQVM7QUFDL0IsYUFBTyxLQUFLLFdBQVcsQ0FBQyxTQUFTLE1BQU0sS0FBSyxJQUFJLEdBQUc7QUFBQSxRQUMvQztBQUFBLFFBQ0EsTUFBTSxhQUFhO0FBQUEsUUFDbkIsR0FBRyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQ3pDLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxVQUFVLE9BQU87QUFDYixhQUFPLElBQUksVUFBVTtBQUFBLFFBQ2pCLEdBQUcsS0FBSztBQUFBLFFBQ1IsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsS0FBSztBQUFBLE1BQy9DLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxNQUFNLFNBQVM7QUFDWCxhQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sU0FBUyxHQUFHLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUMzRTtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLE9BQU8sR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDekU7QUFBQSxJQUNBLE1BQU0sU0FBUztBQUNYLGFBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxTQUFTLEdBQUcsVUFBVSxTQUFTLE9BQU8sR0FBRztBQUFBLElBQzNFO0FBQUEsSUFDQSxLQUFLLFNBQVM7QUFDVixhQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sUUFBUSxHQUFHLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUMxRTtBQUFBLElBQ0EsT0FBTyxTQUFTO0FBQ1osYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLFVBQVUsR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDNUU7QUFBQSxJQUNBLEtBQUssU0FBUztBQUNWLGFBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxRQUFRLEdBQUcsVUFBVSxTQUFTLE9BQU8sR0FBRztBQUFBLElBQzFFO0FBQUEsSUFDQSxNQUFNLFNBQVM7QUFDWCxhQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sU0FBUyxHQUFHLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUMzRTtBQUFBLElBQ0EsS0FBSyxTQUFTO0FBQ1YsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLFFBQVEsR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDMUU7QUFBQSxJQUNBLE9BQU8sU0FBUztBQUNaLGFBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxVQUFVLEdBQUcsVUFBVSxTQUFTLE9BQU8sR0FBRztBQUFBLElBQzVFO0FBQUEsSUFDQSxVQUFVLFNBQVM7QUFFZixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLEdBQUcsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN6QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLE9BQU8sR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDekU7QUFBQSxJQUNBLEdBQUcsU0FBUztBQUNSLGFBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxNQUFNLEdBQUcsVUFBVSxTQUFTLE9BQU8sR0FBRztBQUFBLElBQ3hFO0FBQUEsSUFDQSxLQUFLLFNBQVM7QUFDVixhQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sUUFBUSxHQUFHLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUMxRTtBQUFBLElBQ0EsU0FBUyxTQUFTO0FBQ2QsVUFBSSxPQUFPLFlBQVksVUFBVTtBQUM3QixlQUFPLEtBQUssVUFBVTtBQUFBLFVBQ2xCLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLFFBQVE7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUN6QixDQUFhO0FBQUEsTUFDTDtBQUNBLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sV0FBVyxPQUFPLFNBQVMsY0FBYyxjQUFjLE9BQU8sU0FBUztBQUFBLFFBQ3ZFLFFBQVEsU0FBUyxVQUFVO0FBQUEsUUFDM0IsT0FBTyxTQUFTLFNBQVM7QUFBQSxRQUN6QixHQUFHLFVBQVUsU0FBUyxTQUFTLE9BQU87QUFBQSxNQUNsRCxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSyxTQUFTO0FBQ1YsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLFFBQVEsUUFBTyxDQUFFO0FBQUEsSUFDbkQ7QUFBQSxJQUNBLEtBQUssU0FBUztBQUNWLFVBQUksT0FBTyxZQUFZLFVBQVU7QUFDN0IsZUFBTyxLQUFLLFVBQVU7QUFBQSxVQUNsQixNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxTQUFTO0FBQUEsUUFDekIsQ0FBYTtBQUFBLE1BQ0w7QUFDQSxhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLFdBQVcsT0FBTyxTQUFTLGNBQWMsY0FBYyxPQUFPLFNBQVM7QUFBQSxRQUN2RSxHQUFHLFVBQVUsU0FBUyxTQUFTLE9BQU87QUFBQSxNQUNsRCxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxTQUFTO0FBQ2QsYUFBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLFlBQVksR0FBRyxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDOUU7QUFBQSxJQUNBLE1BQU0sT0FBTyxTQUFTO0FBQ2xCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBLEdBQUcsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN6QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxPQUFPLFNBQVM7QUFDckIsYUFBTyxLQUFLLFVBQVU7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0EsVUFBVSxTQUFTO0FBQUEsUUFDbkIsR0FBRyxVQUFVLFNBQVMsU0FBUyxPQUFPO0FBQUEsTUFDbEQsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLFdBQVcsT0FBTyxTQUFTO0FBQ3ZCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBLEdBQUcsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN6QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUyxPQUFPLFNBQVM7QUFDckIsYUFBTyxLQUFLLFVBQVU7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0EsR0FBRyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQ3pDLENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxJQUFJLFdBQVcsU0FBUztBQUNwQixhQUFPLEtBQUssVUFBVTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLEdBQUcsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN6QyxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxXQUFXLFNBQVM7QUFDcEIsYUFBTyxLQUFLLFVBQVU7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxHQUFHLFVBQVUsU0FBUyxPQUFPO0FBQUEsTUFDekMsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLE9BQU8sS0FBSyxTQUFTO0FBQ2pCLGFBQU8sS0FBSyxVQUFVO0FBQUEsUUFDbEIsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsR0FBRyxVQUFVLFNBQVMsT0FBTztBQUFBLE1BQ3pDLENBQVM7QUFBQSxJQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJQSxTQUFTLFNBQVM7QUFDZCxhQUFPLEtBQUssSUFBSSxHQUFHLFVBQVUsU0FBUyxPQUFPLENBQUM7QUFBQSxJQUNsRDtBQUFBLElBQ0EsT0FBTztBQUNILGFBQU8sSUFBSSxVQUFVO0FBQUEsUUFDakIsR0FBRyxLQUFLO0FBQUEsUUFDUixRQUFRLENBQUMsR0FBRyxLQUFLLEtBQUssUUFBUSxFQUFFLE1BQU0sUUFBUTtBQUFBLE1BQzFELENBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxjQUFjO0FBQ1YsYUFBTyxJQUFJLFVBQVU7QUFBQSxRQUNqQixHQUFHLEtBQUs7QUFBQSxRQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLEVBQUUsTUFBTSxlQUFlO0FBQUEsTUFDakUsQ0FBUztBQUFBLElBQ0w7QUFBQSxJQUNBLGNBQWM7QUFDVixhQUFPLElBQUksVUFBVTtBQUFBLFFBQ2pCLEdBQUcsS0FBSztBQUFBLFFBQ1IsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsRUFBRSxNQUFNLGVBQWU7QUFBQSxNQUNqRSxDQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxhQUFhO0FBQ2IsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFVBQVU7QUFBQSxJQUNqRTtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxhQUFhO0FBQ2IsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFVBQVU7QUFBQSxJQUNqRTtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE9BQU87QUFBQSxJQUM5RDtBQUFBLElBQ0EsSUFBSSxRQUFRO0FBQ1IsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLEtBQUs7QUFBQSxJQUM1RDtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE9BQU87QUFBQSxJQUM5RDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxXQUFXO0FBQ1gsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUMvRDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQ1YsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE9BQU87QUFBQSxJQUM5RDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxPQUFPO0FBQ1AsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLElBQUk7QUFBQSxJQUMzRDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFBQSxJQUM3RDtBQUFBLElBQ0EsSUFBSSxXQUFXO0FBQ1gsYUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLFFBQVE7QUFB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QUFBQTtBQUFBLElBR0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFHQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBR0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBR0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBR0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUdBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBR0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQU1BLFFBQU0sa0JBQWtCO0FBQUEsSUFDdEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElB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LGNBQ3BCO0FBQUEsWUFBQSxDQUNEO0FBQUEsVUFBQTtBQUFBLFFBQ0g7QUFHRixjQUFNLFFBQVEsQ0FBQyxJQUFJLFFBQVE7QUFDekIsZ0JBQU12QixVQUFTLFFBQVEsR0FBRztBQUMxQixjQUFJQSxXQUFVLEVBQUUsV0FBV0EsVUFBUztBQUNsQyw2QkFBaUIsY0FBYyxJQUFJQSxPQUFNO0FBQUEsVUFDM0M7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBR0EsbUJBQWEsaUJBQWlCLGNBQWMsUUFBUSxDQUFDO0FBR3JELFlBQU0sV0FBVyxJQUFJLGlCQUFpQixNQUFNO0FBQzFDLHFCQUFhLGlCQUFpQixjQUFjLFFBQVEsRUFBRSxPQUFPLENBQUEsT0FBTSxDQUFDLEdBQUcsYUFBYSx3QkFBd0IsQ0FBQyxDQUFDO0FBQUEsTUFDaEgsQ0FBQztBQUVELGVBQVMsUUFBUSxTQUFTLE1BQU0sRUFBRSxXQUFXLE1BQU0sU0FBUyxNQUFNO0FBR2xFLHdCQUFrQixRQUFRO0FBQUEsSUFDNUI7QUFBQSxFQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiw0LDUsNiw3LDgsOSwxMF19
universal;