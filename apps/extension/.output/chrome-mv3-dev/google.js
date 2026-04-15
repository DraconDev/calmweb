var google = (function() {
	//#region ../../node_modules/.pnpm/wxt@0.20.20_@types+node@25.5.0_jiti@2.6.1/node_modules/wxt/dist/utils/define-content-script.mjs
	function defineContentScript(definition) {
		return definition;
	}
	//#endregion
	//#region entrypoints/google.ts
	/**
	* Google Search Content Script for CalmWeb
	*
	* Note: Redirect to DDG is now controlled by siteFilter.redirectToDDG setting.
	* This script is kept for potential future Google-specific functionality.
	*/
	var google_default = defineContentScript({
		matches: [
			"*://*.google.com/*",
			"*://*.google.co.uk/*",
			"*://*.google.ca/*",
			"*://*.google.de/*",
			"*://*.google.fr/*",
			"*://*.google.com.au/*"
		],
		runAt: "document_idle",
		main() {}
	});
	//#endregion
	//#region \0virtual:wxt-unlisted-script-entrypoint?/home/dracon/Dev/extensions/calmweb/apps/extension/entrypoints/google.ts
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
			result = google_default.main();
			if (result instanceof Promise) result = result.catch((err) => {
				logger.error(`The unlisted script "google" crashed on startup!`, err);
				throw err;
			});
		} catch (err) {
			logger.error(`The unlisted script "google" crashed on startup!`, err);
			throw err;
		}
		return result;
	})();
})();

google;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLmpzIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4yMC4yMF9AdHlwZXMrbm9kZUAyNS41LjBfaml0aUAyLjYuMS9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uL2VudHJ5cG9pbnRzL2dvb2dsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gc3JjL3V0aWxzL2RlZmluZS1jb250ZW50LXNjcmlwdC50c1xuZnVuY3Rpb24gZGVmaW5lQ29udGVudFNjcmlwdChkZWZpbml0aW9uKSB7XG5cdHJldHVybiBkZWZpbml0aW9uO1xufVxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBkZWZpbmVDb250ZW50U2NyaXB0IH07XG4iLCIvKipcbiAqIEdvb2dsZSBTZWFyY2ggQ29udGVudCBTY3JpcHQgZm9yIENhbG1XZWJcbiAqXG4gKiBOb3RlOiBSZWRpcmVjdCB0byBEREcgaXMgbm93IGNvbnRyb2xsZWQgYnkgc2l0ZUZpbHRlci5yZWRpcmVjdFRvRERHIHNldHRpbmcuXG4gKiBUaGlzIHNjcmlwdCBpcyBrZXB0IGZvciBwb3RlbnRpYWwgZnV0dXJlIEdvb2dsZS1zcGVjaWZpYyBmdW5jdGlvbmFsaXR5LlxuICovXG5cbmltcG9ydCB7IGRlZmluZUNvbnRlbnRTY3JpcHQgfSBmcm9tICd3eHQvdXRpbHMvZGVmaW5lLWNvbnRlbnQtc2NyaXB0JztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29udGVudFNjcmlwdCh7XG4gIG1hdGNoZXM6IFsnKjovLyouZ29vZ2xlLmNvbS8qJywgJyo6Ly8qLmdvb2dsZS5jby51ay8qJywgJyo6Ly8qLmdvb2dsZS5jYS8qJywgJyo6Ly8qLmdvb2dsZS5kZS8qJywgJyo6Ly8qLmdvb2dsZS5mci8qJywgJyo6Ly8qLmdvb2dsZS5jb20uYXUvKiddLFxuICBydW5BdDogJ2RvY3VtZW50X2lkbGUnLFxuXG4gIG1haW4oKSB7XG4gICAgLy8gUmVkaXJlY3QgaXMgaGFuZGxlZCBieSBzZWFyY2gtZmlsdGVyLnRzIGJhc2VkIG9uIHNldHRpbmdzXG4gICAgLy8gVGhpcyBzY3JpcHQgY2FuIGJlIHVzZWQgZm9yIEdvb2dsZS1zcGVjaWZpYyBmZWF0dXJlcyBpbiB0aGUgZnV0dXJlXG4gIH0sXG59KTtcbiJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF0sIm1hcHBpbmdzIjoiOztDQUNBLFNBQVMsb0JBQW9CLFlBQVk7QUFDeEMsU0FBTzs7Ozs7Ozs7OztDQ09SLElBQUEsaUJBQWUsb0JBQW9CO0VBQ2pDLFNBQVM7R0FBQztHQUFzQjtHQUF3QjtHQUFxQjtHQUFxQjtHQUFxQjtHQUF3QjtFQUMvSSxPQUFPO0VBRVAsT0FBTztFQUlSLENBQUMifQ==