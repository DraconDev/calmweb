var background = (function() {
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
	//#region ../../node_modules/.pnpm/wxt@0.20.20_@types+node@25.5.0_jiti@2.6.1/node_modules/wxt/dist/utils/define-background.mjs
	function defineBackground(arg) {
		if (arg == null || typeof arg === "function") return { main: arg };
		return arg;
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
	//#region src/presets/index.ts
	var PRESETS = {
		politics: {
			id: "politics",
			name: "Politics Shield",
			description: "Hide election, partisan debates, and political commentary",
			version: "1.0.0",
			updated: "2024-01-15",
			author: "CalmWeb",
			patterns: {
				keywords: [
					"election",
					"vote",
					"voting",
					"ballot",
					"campaign",
					"candidate",
					"poll",
					"polling",
					"democrat",
					"democratic",
					"republican",
					"gop",
					"liberal",
					"conservative",
					"progressive",
					"socialist",
					"marxist",
					"libertarian",
					"biden",
					"trump",
					"obama",
					"clinton",
					"sanders",
					"pelosi",
					"mcconnell",
					"congress",
					"senate",
					"house",
					"white house",
					"president",
					"presidential",
					"parliament",
					"prime minister",
					"mp ",
					"legislature",
					"legislative",
					"political",
					"politics",
					"partisan",
					"bipartisan",
					"left-wing",
					"right-wing",
					"far-left",
					"far-right",
					"cnn",
					"fox news",
					"msnbc",
					"breitbart",
					"huffpost",
					"politico",
					"the hill",
					"voter",
					"constituent",
					"constituency",
					"dem",
					"repub",
					"lib",
					"con"
				],
				channels: [
					"cnn",
					"fox news",
					"msnbc",
					"bbc news",
					"abc news",
					"nbc news",
					"cbs news",
					"politico",
					"the hill",
					"breitbart",
					"huffpost",
					"vox",
					"slate",
					"salon",
					"daily wire",
					"the blaze",
					"infowars",
					"the young turks",
					"new york times",
					"washington post",
					"wall street journal",
					"guardian",
					"telegraph",
					"independent",
					"the economist",
					"foreign policy",
					"foreign affairs",
					"joe rogan",
					"ben shapiro",
					"tucker carlson",
					"rachel maddow",
					"sean hannity",
					"laura ingraham",
					"chris hayes"
				],
				regex: [
					"\\b(20\\d{2}\\s+(election|presidential))\\b",
					"\\b(vote\\s+(for|against|blue|red|dem|rep))\\b",
					"\\b(democrat(ic)?\\s+(party|candidate|platform))\\b",
					"\\b(republican\\s+(party|candidate|platform))\\b",
					"\\b(midterm\\s+elections?)\\b",
					"\\b(primary\\s+(election|season|day))\\b"
				]
			},
			actions: {
				default: "collapse",
				confidence: .85
			}
		},
		ragebait: {
			id: "ragebait",
			name: "Ragebait Shield",
			description: "Silence content designed specifically to trigger anger",
			version: "1.0.0",
			updated: "2024-01-15",
			author: "CalmWeb",
			patterns: {
				keywords: [
					"outrage",
					"outraged",
					"outraging",
					"disgusting",
					"horrific",
					"terrible",
					"makes you mad",
					"make you angry",
					"will make you furious",
					"this will enrage",
					"angry",
					"furious",
					"fume",
					"fuming",
					"rage",
					"enraged",
					"infuriating",
					"despicable",
					"disgraceful",
					"shameful",
					"appalling",
					"abhorrent",
					"rant",
					"destroyed",
					"demolished",
					"annihilated",
					"wrecked",
					"hate",
					"hatred",
					"hateful",
					"loathe",
					"despise",
					"scandal",
					"scandalous",
					"controversy",
					"controversial",
					"exposed",
					"caught",
					"busted",
					"blasted",
					"slammed",
					"everyone is talking about",
					"trending",
					"viral",
					"backlash",
					"uproar",
					"firestorm",
					"fury",
					"karen",
					"entitled",
					"bridezilla",
					"choosing beggar",
					"faith in humanity",
					"lost faith",
					"lose faith",
					"instant karma",
					"justice served",
					"petty revenge",
					"audacity",
					"the nerve",
					"unacceptable",
					"blood boil",
					"blood boiling",
					"makes my blood",
					"lose your mind",
					"losing my mind",
					"lost my mind"
				],
				channels: [],
				regex: [
					"\\b(this\\s+will\\s+make\\s+you\\s+(mad|angry|furious|rage))\\b",
					"\\b(you\\s+won't\\s+believe\\s+what)\\b",
					"\\b(outrage\\s+(over|at|after))\\b",
					"\\b(backlash\\s+(after|over|erupts))\\b",
					"\\b(everyone\\s+is\\s+(mad|angry|furious|outraged))\\b"
				]
			},
			actions: {
				default: "collapse",
				confidence: .8
			}
		},
		spoilers: {
			id: "spoilers",
			name: "Spoiler Shield",
			description: "Protect your experience from plot leaks and endings",
			version: "1.0.0",
			updated: "2024-01-15",
			author: "CalmWeb",
			patterns: {
				keywords: [
					"spoiler",
					"spoilers",
					"spoil",
					"spoiled",
					"ending",
					"ending explained",
					"ending revealed",
					"the ending",
					"twist",
					"plot twist",
					"surprise ending",
					"shocking ending",
					"dies",
					"death",
					"killed",
					"murdered",
					"murder",
					"killer",
					"plot leak",
					"leaked",
					"leaks",
					"revealed",
					"revelation",
					"reveal",
					"finale",
					"season finale",
					"series finale",
					"final episode",
					"who did it",
					"whodunit",
					"the killer is",
					"the culprit",
					"secret ending",
					"alternate ending",
					"post-credits",
					"after credits",
					"mid-credits",
					"easter egg",
					"explained",
					"breakdown",
					"analysis",
					"character death",
					"main character dies"
				],
				channels: [],
				regex: [
					"\\b(spoiler\\s*(alert|warning|below)?)\\b",
					"\\b(ending\\s+(explained|revealed|breakdown))\\b",
					"\\b(.*\\s+dies\\s+in\\s+.*)\\b",
					"\\b(who\\s+(dies|is\\s+the\\s+killer))\\b",
					"\\b(plot\\s+(twist|leak|hole))\\b",
					"\\b([a-z]+\\s+is\\s+the\\s+killer)\\b"
				]
			},
			actions: {
				default: "blur",
				confidence: .75
			}
		},
		clickbait: {
			id: "clickbait",
			name: "Clickbait Filter",
			description: "Clean up sensationalist and misleading headlines",
			version: "1.0.0",
			updated: "2024-01-15",
			author: "CalmWeb",
			patterns: {
				keywords: [
					"you need to see",
					"you have to see",
					"must watch",
					"must read",
					"mind blowing",
					"mind-blowing",
					"mindblowing",
					"will shock you",
					"shocking",
					"shocked",
					"shock",
					"secret",
					"secrets",
					"they don't want you to know",
					"don't want you to know",
					"doctors hate him",
					"hate him",
					"hate her",
					"one weird trick",
					"weird trick",
					"simple trick",
					"this simple",
					"this one simple",
					"just one",
					"miracle",
					"miraculous",
					"amazing",
					"incredible",
					"unbelievable",
					"you'll never guess",
					"never guess",
					"guess what",
					"jaw-dropping",
					"jaw dropping",
					"dropped my jaw",
					"life changing",
					"life-changing",
					"changed my life",
					"hack",
					"hacks",
					"life hack",
					"lifehacks",
					"cheat",
					"cheats",
					"cheat code",
					"shortcut",
					"this is why",
					"here's why",
					"the reason why",
					"what happened next",
					"happened next",
					"then this happened",
					"you won't believe",
					"won't believe",
					"never believe",
					"cannot believe",
					"can't believe",
					"will go 100x",
					"will go 10x",
					"don't miss out",
					"don't miss",
					"number [0-9]+ will",
					"number [0-9]+ is",
					"only [0-9]+ people know",
					"nobody tells you",
					"no one tells you",
					"nobody told you",
					"things you need to know",
					"things you should know",
					"reasons why",
					"reasons you",
					"ways to",
					"tips for",
					"secrets to",
					"tricks for",
					"will leave you",
					"will make you",
					"need to know",
					"should know",
					"have to know",
					"things that will",
					"ways that will",
					"number one",
					"number 1",
					"top 10",
					"top ten",
					"best kept secret",
					"well kept secret",
					"what happens when",
					"see what happens",
					"try this",
					"do this"
				],
				channels: [
					"buzzfeed",
					"buzfeed",
					"buzz feed",
					"clickhole",
					"click hole",
					"upworthy",
					"up worthy",
					"viralnova",
					"viral nova",
					"diply",
					"thatscoop",
					"interesting thingss"
				],
				regex: [
					"\\b(you\\s+won't\\s+believe)\\b",
					"\\b(doctors\\s+hate\\s+him)\\b",
					"\\b(one\\s+weird\\s+trick)\\b",
					"\\b(mind\\s*-?\\s*blowing)\\b",
					"\\b(jaw\\s*-?\\s*dropping)\\b",
					"\\b(life\\s*-?\\s*changing)\\b",
					"\\b(what\\s+happened\\s+next\\s+will)\\b",
					"\\b(number\\s+\\d+\\s+(will|is|shock))\\b",
					"\\b(only\\s+\\d+\\s+(people|percent)\\s+know)\\b"
				]
			},
			actions: {
				default: "collapse",
				confidence: .8
			}
		}
	};
	function getPreset(id) {
		return PRESETS[id];
	}
	function matchPresetKeywords(title, presetId) {
		const preset = PRESETS[presetId];
		if (!preset) return false;
		const titleLower = title.toLowerCase();
		if (preset.patterns.keywords) {
			for (const kw of preset.patterns.keywords) if (titleLower.includes(kw.toLowerCase())) return true;
		}
		if (preset.patterns.regex) for (const pattern of preset.patterns.regex) try {
			if (new RegExp(pattern, "i").test(title)) return true;
		} catch {
			console.warn(`[Presets] Invalid regex in ${presetId}: ${pattern}`);
		}
		return false;
	}
	function matchPresetChannel(sourceName, presetId) {
		const preset = PRESETS[presetId];
		if (!preset || !sourceName || !preset.patterns.channels) return false;
		const sourceLower = sourceName.toLowerCase();
		for (const chan of preset.patterns.channels) if (sourceLower.includes(chan.toLowerCase())) return true;
		return false;
	}
	//#endregion
	//#region utils/classifier.ts
	/**
	* Apply local rules to classify content.
	* Returns a classification if any rule matches, otherwise null.
	*/
	function applyLocalRules(unit, rules) {
		const titleLower = unit.title.toLowerCase();
		const presets = rules.presets;
		for (const presetId of [
			"spoilers",
			"clickbait",
			"politics",
			"ragebait"
		]) if (presets[presetId]) {
			if (matchPresetKeywords(unit.title, presetId)) {
				const preset = getPreset(presetId);
				return {
					decision: preset?.actions.default || "collapse",
					confidence: preset?.actions.confidence || .85,
					reason: `preset_${presetId}`
				};
			}
			if (matchPresetChannel(unit.sourceName, presetId)) {
				const preset = getPreset(presetId);
				return {
					decision: preset?.actions.default || "collapse",
					confidence: (preset?.actions.confidence || .85) + .1,
					reason: `preset_${presetId}_channel`
				};
			}
		}
		if (unit.sourceName && rules.blocklistChannels.length > 0) {
			const sourceLower = unit.sourceName.toLowerCase();
			if (rules.blocklistChannels.some((chan) => sourceLower.includes(chan.toLowerCase()))) return {
				decision: "collapse",
				confidence: 1,
				reason: "blocklist_channel"
			};
		}
		if (rules.blocklistKeywords.length > 0) {
			if (rules.blocklistKeywords.some((keyword) => titleLower.includes(keyword.toLowerCase()))) return {
				decision: "collapse",
				confidence: .9,
				reason: "blocklist_keyword"
			};
		}
		if (unit.sourceName && rules.allowlistChannels.length > 0) {
			const sourceLower = unit.sourceName.toLowerCase();
			if (rules.allowlistChannels.some((chan) => sourceLower.includes(chan.toLowerCase()))) return {
				decision: "show",
				confidence: 1,
				reason: "allowlist_channel"
			};
		}
		if (rules.allowlistKeywords.length > 0) {
			if (rules.allowlistKeywords.some((keyword) => titleLower.includes(keyword.toLowerCase()))) return {
				decision: "show",
				confidence: 1,
				reason: "allowlist_keyword"
			};
		}
		return null;
	}
	/**
	* Classify a ContentUnit using local rules only.
	* No API calls - instant results.
	*/
	async function classifyContent(unit, settings) {
		const rulesResult = applyLocalRules(unit, settings.rules);
		if (rulesResult) return rulesResult;
		return {
			decision: "show",
			confidence: 1,
			reason: "no_match"
		};
	}
	//#endregion
	//#region ../../node_modules/.pnpm/@wxt-dev+browser@0.1.38/node_modules/@wxt-dev/browser/src/index.mjs
	var browser$2 = globalThis.browser?.runtime?.id ? globalThis.browser : globalThis.chrome;
	//#endregion
	//#region ../../node_modules/.pnpm/async-mutex@0.5.0/node_modules/async-mutex/index.mjs
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
	//#region ../../node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs
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
	//#endregion
	//#region ../../node_modules/.pnpm/@wxt-dev+storage@1.2.8/node_modules/@wxt-dev/storage/dist/index.mjs
	/**
	* Simplified storage APIs with support for versioned fields, snapshots, metadata, and item definitions.
	*
	* See [the guide](https://wxt.dev/storage.html) for more information.
	* @module @wxt-dev/storage
	*/
	var storage = createStorage();
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
	var defaultSiteFilterSettings = {
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
	};
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
		siteFilter: SiteFilterSettingsSchema.default(defaultSiteFilterSettings)
	});
	var defaultUserSettings = {
		enabled: true,
		processingMode: "local_rules",
		strictness: 80,
		rules: {
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
		},
		byokKey: void 0,
		aiModel: DEFAULT_OPENROUTER_MODEL,
		customEndpoint: void 0,
		neutralization: defaultNeutralizationSettings,
		reader: defaultReaderSettings,
		mediaFilter: defaultMediaFilterSettings,
		siteFilter: defaultSiteFilterSettings
	};
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
	//#region utils/storage.ts
	/**
	* Storage utilities for CalmWeb extension
	*
	* Uses WXT's native storage API with appropriate storage areas:
	* - sync: for user settings (sync across devices)
	* - local: for cache, BYOK keys, stats (device-specific)
	*/
	var STORAGE_KEYS = {
		SETTINGS: "sync:calmweb-settings",
		DECISION_CACHE: "local:calmweb-cache",
		BYOK_KEYS: "local:calmweb-byok",
		STATS: "local:calmweb-stats"
	};
	var defaultDecisionCache = {};
	var defaultBYOKKeys = {};
	var defaultStats = {
		totalFiltered: 0,
		lastReset: Date.now()
	};
	/**
	* User settings store (sync across devices)
	*/
	var settingsStore = storage.defineItem(STORAGE_KEYS.SETTINGS, { fallback: defaultUserSettings });
	/**
	* Decision cache store (local with LRU eviction)
	* This is a simple object record for serialization; we implement LRU logic in helpers.
	*/
	var decisionCache = storage.defineItem(STORAGE_KEYS.DECISION_CACHE, { fallback: defaultDecisionCache });
	/**
	* BYOK API keys store (local only)
	*/
	var byokKeysStore = storage.defineItem(STORAGE_KEYS.BYOK_KEYS, { fallback: defaultBYOKKeys });
	/**
	* Statistics store (local only)
	*/
	var statsStore = storage.defineItem(STORAGE_KEYS.STATS, { fallback: defaultStats });
	var LRU_MAX_SIZE = 1e3;
	/**
	* Get a cached classification result by fingerprint, with LRU eviction logic.
	*/
	async function getCachedResult(fingerprint) {
		const entry = (await decisionCache.getValue())[fingerprint];
		if (!entry) return void 0;
		return entry;
	}
	/**
	* Set a cached classification result with LRU eviction.
	*/
	async function setCachedResult(fingerprint, result) {
		const cache = await decisionCache.getValue();
		const keys = Object.keys(cache);
		if (!cache[fingerprint] && keys.length >= LRU_MAX_SIZE) {
			const keyToRemove = keys[0];
			delete cache[keyToRemove];
		}
		cache[fingerprint] = result;
		await decisionCache.setValue(cache);
	}
	/**
	* Clear the decision cache entirely.
	*/
	async function clearDecisionCache() {
		await decisionCache.setValue({ ...defaultDecisionCache });
	}
	/**
	* Increment the total filtered count
	*/
	async function incrementFilteredCount(amount = 1) {
		const stats = await statsStore.getValue();
		stats.totalFiltered += amount;
		stats.lastReset = Date.now();
		await statsStore.setValue(stats);
	}
	/**
	* Ensure all stores have default values on first run.
	* Useful for explicitly priming storage.
	*/
	async function initializeStores() {
		await Promise.all([
			settingsStore.getValue(),
			decisionCache.getValue(),
			byokKeysStore.getValue(),
			statsStore.getValue()
		]);
	}
	//#endregion
	//#region ../../node_modules/webextension-polyfill/dist/browser-polyfill.js
	var require_browser_polyfill = /* @__PURE__ */ __commonJSMin(((exports, module) => {
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
	}));
	//#endregion
	//#region src/filterlist/fetcher.ts
	var DEFAULT_FILTER_LISTS = [
		{
			id: "easylist",
			name: "EasyList (Ad Blocking)",
			url: "https://easylist.to/easylist/easylist.txt",
			refreshIntervalMs: 1440 * 60 * 1e3,
			enabled: true
		},
		{
			id: "easyprivacy",
			name: "EasyPrivacy (Tracker Blocking)",
			url: "https://easylist.to/easylist/easyprivacy.txt",
			refreshIntervalMs: 1440 * 60 * 1e3,
			enabled: true
		},
		{
			id: "fanboy-annoyances",
			name: "Fanboy Annoyances (Cookie/Social/Newsletter)",
			url: "https://secure.fanboy.co.nz/fanboy-annoyance.txt",
			refreshIntervalMs: 1440 * 60 * 1e3,
			enabled: true
		},
		{
			id: "fanboy-social",
			name: "Fanboy Social",
			url: "https://easylist.to/easylist/fanboy-social.txt",
			refreshIntervalMs: 1440 * 60 * 1e3,
			enabled: true
		}
	];
	var STORAGE_PREFIX = "filterlist:";
	var LAST_REFRESH_KEY = "filterlist:lastRefresh";
	/**
	* Fetch a single filter list with conditional request headers
	*/
	async function fetchFilterList(config) {
		try {
			const cached = await getCachedList(config.id);
			const headers = {};
			if (cached?.etag) headers["If-None-Match"] = cached.etag;
			if (cached?.lastModified) headers["If-Modified-Since"] = cached.lastModified;
			const response = await fetch(config.url, {
				headers,
				signal: AbortSignal.timeout(3e4)
			});
			if (response.status === 304 && cached) return cached;
			if (!response.ok) {
				console.warn(`[FilterList] Failed to fetch ${config.id}: ${response.status}`);
				return cached;
			}
			const content = await response.text();
			const etag = response.headers.get("ETag") || void 0;
			const lastModified = response.headers.get("Last-Modified") || void 0;
			const result = {
				id: config.id,
				content,
				fetchedAt: Date.now(),
				etag,
				lastModified
			};
			await cacheList(config.id, result);
			console.log(`[FilterList] Updated ${config.id} (${formatBytes(content.length)})`);
			return result;
		} catch (error) {
			console.warn(`[FilterList] Error fetching ${config.id}:`, error);
			return await getCachedList(config.id);
		}
	}
	/**
	* Get a cached filter list from storage
	*/
	async function getCachedList(id) {
		try {
			return (await chrome.storage.local.get(STORAGE_PREFIX + id))[STORAGE_PREFIX + id] || null;
		} catch {
			return null;
		}
	}
	/**
	* Cache a filter list to storage
	*/
	async function cacheList(id, list) {
		try {
			await chrome.storage.local.set({ [STORAGE_PREFIX + id]: list });
		} catch (error) {
			console.warn(`[FilterList] Failed to cache ${id}:`, error);
		}
	}
	/**
	* Fetch all enabled filter lists
	*/
	async function fetchAllLists(configs = DEFAULT_FILTER_LISTS) {
		const results = /* @__PURE__ */ new Map();
		const fetches = configs.filter((c) => c.enabled).map(async (config) => {
			const list = await fetchFilterList(config);
			if (list) results.set(config.id, list);
		});
		await Promise.all(fetches);
		await chrome.storage.local.set({ [LAST_REFRESH_KEY]: Date.now() });
		return results;
	}
	/**
	* Check if any lists need refreshing
	*/
	async function needsRefresh(configs = DEFAULT_FILTER_LISTS) {
		try {
			const lastRefresh = (await chrome.storage.local.get(LAST_REFRESH_KEY))[LAST_REFRESH_KEY] || 0;
			for (const config of configs) {
				if (!config.enabled) continue;
				if (Date.now() - lastRefresh > config.refreshIntervalMs) return true;
			}
			return false;
		} catch {
			return true;
		}
	}
	/**
	* Get all cached lists without fetching
	*/
	async function getCachedLists(configs = DEFAULT_FILTER_LISTS) {
		const results = /* @__PURE__ */ new Map();
		for (const config of configs) {
			if (!config.enabled) continue;
			const list = await getCachedList(config.id);
			if (list) results.set(config.id, list);
		}
		return results;
	}
	function formatBytes(bytes) {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	}
	//#endregion
	//#region src/filterlist/parser.ts
	/**
	* Parse one or more filter list contents into CSS selectors and URL patterns
	*/
	function parseFilterLists(contents) {
		const start = performance.now();
		const cssSelectors = /* @__PURE__ */ new Set();
		const urlPatterns = /* @__PURE__ */ new Set();
		let totalRules = 0;
		let skippedRules = 0;
		for (const content of contents) {
			const lines = content.split("\n");
			for (const line of lines) {
				const trimmed = line.trim();
				if (!trimmed || trimmed.startsWith("!") || trimmed.startsWith("[")) continue;
				totalRules++;
				if (trimmed.startsWith("@@")) {
					skippedRules++;
					continue;
				}
				if (trimmed.includes("##")) {
					const selector = parseCssHidingRule(trimmed);
					if (selector) cssSelectors.add(selector);
					else skippedRules++;
					continue;
				}
				if (trimmed.includes("#?#") || trimmed.includes("#@#")) {
					skippedRules++;
					continue;
				}
				const urlPattern = parseUrlBlockingRule(trimmed);
				if (urlPattern) urlPatterns.add(urlPattern);
				else skippedRules++;
			}
		}
		const parseTimeMs = performance.now() - start;
		return {
			cssSelectors: Array.from(cssSelectors),
			urlPatterns: Array.from(urlPatterns),
			stats: {
				totalRules,
				cssRules: cssSelectors.size,
				urlRules: urlPatterns.size,
				skippedRules,
				parseTimeMs
			}
		};
	}
	/**
	* Parse a CSS hiding rule (e.g., ##.ad-container or example.com##div.ad)
	*/
	function parseCssHidingRule(line) {
		const separatorIndex = line.indexOf("##");
		if (separatorIndex === -1) return null;
		let selector = line.substring(separatorIndex + 2);
		if (!selector || selector.trim().length === 0) return null;
		selector = selector.trim();
		if (!selector.match(/^[.#\[\]:a-zA-Z_-]/)) {}
		if (selector.includes(":has(") || selector.includes(":not(")) {}
		if (selector.includes("||") || selector.includes("^")) return null;
		return selector;
	}
	/**
	* Parse a URL blocking rule into a regex-compatible pattern
	*/
	function parseUrlBlockingRule(line) {
		if (line.includes("##") || line.includes("#?#") || line.includes("#@#")) return null;
		if (line.length > 500) return null;
		if (line.startsWith("*")) return null;
		let pattern = line;
		if (pattern.startsWith("||")) {
			pattern = pattern.substring(2);
			const domain = pattern.split("/")[0].split("^")[0].split("*")[0];
			if (domain && domain.includes(".")) return domain;
		}
		if (pattern.startsWith("|")) pattern = pattern.substring(1);
		if (pattern.endsWith("|")) pattern = pattern.substring(0, pattern.length - 1);
		pattern = pattern.replace(/\^/g, "*");
		if (pattern.length < 4) return null;
		if (!pattern.startsWith("*") && pattern.includes(".")) {
			const domainPart = pattern.split("/")[0].split("*")[0];
			if (domainPart && domainPart.includes(".")) return domainPart;
		}
		return null;
	}
	/**
	* Parse filter lists from cached filter list objects
	*/
	function parseCachedLists(lists) {
		return parseFilterLists(Array.from(lists.values()).map((l) => l.content));
	}
	//#endregion
	//#region src/filterlist/applier.ts
	/**
	* Create declarativeNetRequest rules from URL patterns
	*/
	function createNetworkRules(urlPatterns, startId = 1e3) {
		const rules = [];
		let ruleId = startId;
		for (const pattern of urlPatterns) {
			if (pattern.length < 4) continue;
			try {
				const regexPattern = `^https?://([^/]*\\.)?${pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`;
				rules.push({
					id: ruleId++,
					priority: 1,
					action: { type: "block" },
					condition: {
						regexFilter: regexPattern,
						resourceTypes: [
							"script",
							"image",
							"xmlhttprequest",
							"sub_frame",
							"media",
							"font"
						]
					}
				});
				if (ruleId > startId + 5e3) break;
			} catch {}
		}
		return rules;
	}
	/**
	* Apply declarativeNetRequest rules (must be called from background)
	*/
	async function applyNetworkRules(rules) {
		try {
			const existingIds = (await chrome.declarativeNetRequest.getDynamicRules()).map((r) => r.id);
			if (existingIds.length > 0) await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: existingIds });
			const chunkSize = 5e3;
			for (let i = 0; i < rules.length; i += chunkSize) {
				const chunk = rules.slice(i, i + chunkSize);
				await chrome.declarativeNetRequest.updateDynamicRules({ addRules: chunk });
			}
			console.log(`[FilterList] Applied ${rules.length} network blocking rules`);
		} catch (error) {
			console.error("[FilterList] Failed to apply network rules:", error);
		}
	}
	//#endregion
	//#region src/filter/blocklist-fetcher.ts
	var import_browser_polyfill = /* @__PURE__ */ __toESM(require_browser_polyfill(), 1);
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
	async function saveCache(cache) {
		await chrome.storage.local.set({ [CACHE_KEY]: cache });
	}
	async function getBlocklistStats() {
		try {
			const cache = (await chrome.storage.local.get(CACHE_KEY))[CACHE_KEY] || [];
			let totalDomains = 0;
			const bySource = [];
			let lastUpdated = null;
			for (const item of cache) {
				totalDomains += item.domainCount;
				const source = BLOCKLIST_SOURCES.find((s) => s.id === item.sourceId);
				bySource.push({
					id: item.sourceId,
					name: source?.name || item.sourceId,
					count: item.domainCount
				});
				if (item.lastUpdated > (lastUpdated || 0)) lastUpdated = item.lastUpdated;
			}
			return {
				totalDomains,
				bySource,
				lastUpdated
			};
		} catch {
			return {
				totalDomains: 0,
				bySource: [],
				lastUpdated: null
			};
		}
	}
	//#endregion
	//#region entrypoints/background.ts
	/**
	* Background Service Worker for CalmWeb
	*
	* Handles:
	* - Message routing from content scripts and popup
	* - Content classification (local rules only)
	* - Settings and cache management
	* - Statistics tracking
	* - Context menu integration
	* - Filter list management (EasyList, EasyPrivacy, etc.)
	*/
	/**
	* Initialize filter lists - fetch if needed, apply network rules
	*/
	async function initializeFilterLists() {
		try {
			const shouldRefresh = await needsRefresh();
			let lists;
			if (shouldRefresh) {
				console.log("[Background] Fetching filter lists...");
				lists = await fetchAllLists();
			} else {
				console.log("[Background] Using cached filter lists");
				lists = await getCachedLists();
			}
			if (lists.size === 0) {
				console.log("[Background] No filter lists available");
				return;
			}
			const parsed = parseCachedLists(lists);
			console.log(`[Background] Parsed ${parsed.stats.cssRules} CSS rules, ${parsed.stats.urlRules} URL rules`);
			if (parsed.urlPatterns.length > 0) {
				const networkRules = createNetworkRules(parsed.urlPatterns);
				await applyNetworkRules(networkRules);
				console.log(`[Background] Applied ${networkRules.length} network blocking rules`);
			}
		} catch (error) {
			console.error("[Background] Failed to initialize filter lists:", error);
		}
	}
	/**
	* Schedule periodic filter list refresh
	*/
	function scheduleRefresh() {
		import_browser_polyfill.default.alarms.create("filterlist-refresh", { periodInMinutes: 60 });
		import_browser_polyfill.default.alarms.create("blocklist-refresh", { periodInMinutes: 360 });
		import_browser_polyfill.default.alarms.onAlarm.addListener(async (alarm) => {
			if (alarm.name === "filterlist-refresh") {
				if (await needsRefresh()) {
					console.log("[Background] Periodic filter list refresh");
					await initializeFilterLists();
				}
			}
			if (alarm.name === "blocklist-refresh") {
				console.log("[Background] Periodic blocklist refresh");
				await initializeBlocklists();
			}
		});
	}
	async function initializeBlocklists() {
		try {
			console.log("[Background] Fetching external blocklists...");
			await updateAllBlocklists();
			const stats = await getBlocklistStats();
			console.log(`[Background] Blocklist stats: ${stats.totalDomains.toLocaleString()} domains from ${stats.bySource.length} sources`);
		} catch (error) {
			console.error("[Background] Failed to initialize blocklists:", error);
		}
	}
	async function setupContextMenu() {
		try {
			await import_browser_polyfill.default.contextMenus.removeAll();
		} catch {}
		import_browser_polyfill.default.contextMenus.create({
			id: "calmweb-toggle-extension",
			title: "Toggle CalmWeb",
			contexts: ["action"]
		});
		import_browser_polyfill.default.contextMenus.create({
			id: "calmweb-neutralize-selection",
			title: "Neutralize Selected Text",
			contexts: ["selection"]
		});
		import_browser_polyfill.default.contextMenus.create({
			id: "separator-1",
			type: "separator",
			contexts: ["page", "selection"]
		});
		import_browser_polyfill.default.contextMenus.create({
			id: "calmweb-open-settings",
			title: "Open Settings",
			contexts: ["action"]
		});
		import_browser_polyfill.default.contextMenus.create({
			id: "calmweb-view-stats",
			title: "View Statistics",
			contexts: ["action"]
		});
		import_browser_polyfill.default.contextMenus.onClicked.addListener(async (info, tab) => {
			switch (info.menuItemId) {
				case "calmweb-toggle-extension": {
					const settings = await settingsStore.getValue();
					await settingsStore.setValue({
						...settings,
						enabled: !settings.enabled
					});
					break;
				}
				case "calmweb-neutralize-selection":
					if (tab?.id && info.selectionText) import_browser_polyfill.default.tabs.sendMessage(tab.id, {
						type: "NEUTRALIZE_SELECTION",
						text: info.selectionText
					});
					break;
				case "calmweb-open-settings":
					import_browser_polyfill.default.runtime.openOptionsPage();
					break;
				case "calmweb-view-stats":
					import_browser_polyfill.default.tabs.create({ url: import_browser_polyfill.default.runtime.getURL("/options.html") });
					break;
			}
		});
	}
	var handlers = {
		[MESSAGE_TYPES.CLASSIFY_UNIT]: async (message, sender) => {
			const unit = message.unit;
			try {
				const cached = await getCachedResult(unit.fingerprint);
				if (cached) return cached;
				const settings = await settingsStore.getValue();
				if (!settings.enabled) return {
					decision: "show",
					confidence: 1,
					reason: "disabled"
				};
				const result = await classifyContent(unit, { rules: settings.rules });
				await setCachedResult(unit.fingerprint, result);
				if (result.decision !== "show") await incrementFilteredCount(1);
				return result;
			} catch (error) {
				console.error("[Background] Classification error:", error);
				return {
					decision: "show",
					confidence: 0,
					reason: "error",
					error: error instanceof Error ? error.message : String(error)
				};
			}
		},
		[MESSAGE_TYPES.GET_SETTINGS]: async (message, sender) => {
			return await settingsStore.getValue();
		},
		[MESSAGE_TYPES.UPDATE_SETTINGS]: async (message, sender) => {
			const updates = message.settings;
			const current = await settingsStore.getValue();
			if (current) {
				const updated = {
					...current,
					...updates
				};
				if (updates.rules) updated.rules = {
					...current.rules,
					...updates.rules
				};
				await settingsStore.setValue(updated);
				if (updates.rules) await clearDecisionCache();
				return { success: true };
			}
			return { success: false };
		},
		[MESSAGE_TYPES.CLEAR_CACHE]: async (message, sender) => {
			await clearDecisionCache();
			return { success: true };
		},
		[MESSAGE_TYPES.GET_STATS]: async (message, sender) => {
			return await statsStore.getValue();
		},
		[MESSAGE_TYPES.INCREMENT_STAT]: async (message, sender) => {
			if (message.key === "totalFiltered") await incrementFilteredCount(message.amount);
			return await statsStore.getValue();
		},
		"calmweb:getBlocklistStats": async (message, sender) => {
			return await getBlocklistStats();
		},
		"calmweb:refreshBlocklists": async (message, sender) => {
			await updateAllBlocklists();
			return await getBlocklistStats();
		}
	};
	var background_default = defineBackground(() => {
		console.log("[Background] CalmWeb service worker started");
		import_browser_polyfill.default.runtime.onInstalled.addListener(async () => {
			console.log("[Background] CalmWeb installed");
			await initializeStores();
			await setupContextMenu();
			await initializeFilterLists();
			await initializeBlocklists();
			scheduleRefresh();
			import_browser_polyfill.default.tabs.create({ url: import_browser_polyfill.default.runtime.getURL("/options.html") });
		});
		import_browser_polyfill.default.action.onClicked.addListener(() => {
			import_browser_polyfill.default.tabs.create({ url: import_browser_polyfill.default.runtime.getURL("/options.html") });
		});
		import_browser_polyfill.default.runtime.onMessage.addListener(((message, sender, sendResponse) => {
			const handler = handlers[message.type];
			if (!handler) {
				console.warn("[Background] Unhandled message type:", message.type);
				return;
			}
			handler(message, sender).then((response) => {
				if (response !== void 0) sendResponse(response);
			}).catch((err) => {
				console.error("[Background] Handler error:", err);
				sendResponse({ error: err.message });
			});
			return true;
		}));
	});
	//#endregion
	//#region ../../node_modules/.pnpm/wxt@0.20.20_@types+node@25.5.0_jiti@2.6.1/node_modules/wxt/dist/browser.mjs
	/**
	* Contains the `browser` export which you should use to access the extension
	* APIs in your project:
	*
	* ```ts
	* import { browser } from 'wxt/browser';
	*
	* browser.runtime.onInstalled.addListener(() => {
	*   // ...
	* });
	* ```
	*
	* @module wxt/browser
	*/
	var browser = browser$2;
	//#endregion
	//#region ../../node_modules/.pnpm/@webext-core+match-patterns@1.0.3/node_modules/@webext-core/match-patterns/lib/index.js
	var _MatchPattern = class {
		constructor(matchPattern) {
			if (matchPattern === "<all_urls>") {
				this.isAllUrls = true;
				this.protocolMatches = [..._MatchPattern.PROTOCOLS];
				this.hostnameMatch = "*";
				this.pathnameMatch = "*";
			} else {
				const groups = /(.*):\/\/(.*?)(\/.*)/.exec(matchPattern);
				if (groups == null) throw new InvalidMatchPattern(matchPattern, "Incorrect format");
				const [_, protocol, hostname, pathname] = groups;
				validateProtocol(matchPattern, protocol);
				validateHostname(matchPattern, hostname);
				validatePathname(matchPattern, pathname);
				this.protocolMatches = protocol === "*" ? ["http", "https"] : [protocol];
				this.hostnameMatch = hostname;
				this.pathnameMatch = pathname;
			}
		}
		includes(url) {
			if (this.isAllUrls) return true;
			const u = typeof url === "string" ? new URL(url) : url instanceof Location ? new URL(url.href) : url;
			return !!this.protocolMatches.find((protocol) => {
				if (protocol === "http") return this.isHttpMatch(u);
				if (protocol === "https") return this.isHttpsMatch(u);
				if (protocol === "file") return this.isFileMatch(u);
				if (protocol === "ftp") return this.isFtpMatch(u);
				if (protocol === "urn") return this.isUrnMatch(u);
			});
		}
		isHttpMatch(url) {
			return url.protocol === "http:" && this.isHostPathMatch(url);
		}
		isHttpsMatch(url) {
			return url.protocol === "https:" && this.isHostPathMatch(url);
		}
		isHostPathMatch(url) {
			if (!this.hostnameMatch || !this.pathnameMatch) return false;
			const hostnameMatchRegexs = [this.convertPatternToRegex(this.hostnameMatch), this.convertPatternToRegex(this.hostnameMatch.replace(/^\*\./, ""))];
			const pathnameMatchRegex = this.convertPatternToRegex(this.pathnameMatch);
			return !!hostnameMatchRegexs.find((regex) => regex.test(url.hostname)) && pathnameMatchRegex.test(url.pathname);
		}
		isFileMatch(url) {
			throw Error("Not implemented: file:// pattern matching. Open a PR to add support");
		}
		isFtpMatch(url) {
			throw Error("Not implemented: ftp:// pattern matching. Open a PR to add support");
		}
		isUrnMatch(url) {
			throw Error("Not implemented: urn:// pattern matching. Open a PR to add support");
		}
		convertPatternToRegex(pattern) {
			const starsReplaced = this.escapeForRegex(pattern).replace(/\\\*/g, ".*");
			return RegExp(`^${starsReplaced}$`);
		}
		escapeForRegex(string) {
			return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
	};
	var MatchPattern = _MatchPattern;
	MatchPattern.PROTOCOLS = [
		"http",
		"https",
		"file",
		"ftp",
		"urn"
	];
	var InvalidMatchPattern = class extends Error {
		constructor(matchPattern, reason) {
			super(`Invalid match pattern "${matchPattern}": ${reason}`);
		}
	};
	function validateProtocol(matchPattern, protocol) {
		if (!MatchPattern.PROTOCOLS.includes(protocol) && protocol !== "*") throw new InvalidMatchPattern(matchPattern, `${protocol} not a valid protocol (${MatchPattern.PROTOCOLS.join(", ")})`);
	}
	function validateHostname(matchPattern, hostname) {
		if (hostname.includes(":")) throw new InvalidMatchPattern(matchPattern, `Hostname cannot include a port`);
		if (hostname.includes("*") && hostname.length > 1 && !hostname.startsWith("*.")) throw new InvalidMatchPattern(matchPattern, `If using a wildcard (*), it must go at the start of the hostname`);
	}
	function validatePathname(matchPattern, pathname) {}
	//#endregion
	//#region \0virtual:wxt-background-entrypoint?/home/dracon/Dev/extensions/calmweb/apps/extension/entrypoints/background.ts
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
	var ws;
	/** Connect to the websocket and listen for messages. */
	function getDevServerWebSocket() {
		if (ws == null) {
			const serverUrl = "ws://localhost:3000";
			logger.debug("Connecting to dev server @", serverUrl);
			ws = new WebSocket(serverUrl, "vite-hmr");
			ws.addWxtEventListener = ws.addEventListener.bind(ws);
			ws.sendCustom = (event, payload) => ws?.send(JSON.stringify({
				type: "custom",
				event,
				payload
			}));
			ws.addEventListener("open", () => {
				logger.debug("Connected to dev server");
			});
			ws.addEventListener("close", () => {
				logger.debug("Disconnected from dev server");
			});
			ws.addEventListener("error", (event) => {
				logger.error("Failed to connect to dev server", event);
			});
			ws.addEventListener("message", (e) => {
				try {
					const message = JSON.parse(e.data);
					if (message.type === "custom") ws?.dispatchEvent(new CustomEvent(message.event, { detail: message.data }));
				} catch (err) {
					logger.error("Failed to handle message", err);
				}
			});
		}
		return ws;
	}
	/** https://developer.chrome.com/blog/longer-esw-lifetimes/ */
	function keepServiceWorkerAlive() {
		setInterval(async () => {
			await browser.runtime.getPlatformInfo();
		}, 5e3);
	}
	function reloadContentScript(payload) {
		if (browser.runtime.getManifest().manifest_version == 2) reloadContentScriptMv2(payload);
		else reloadContentScriptMv3(payload);
	}
	async function reloadContentScriptMv3({ registration, contentScript }) {
		if (registration === "runtime") await reloadRuntimeContentScriptMv3(contentScript);
		else await reloadManifestContentScriptMv3(contentScript);
	}
	async function reloadManifestContentScriptMv3(contentScript) {
		const id = `wxt:${contentScript.js[0]}`;
		logger.log("Reloading content script:", contentScript);
		const registered = await browser.scripting.getRegisteredContentScripts();
		logger.debug("Existing scripts:", registered);
		const existing = registered.find((cs) => cs.id === id);
		if (existing) {
			logger.debug("Updating content script", existing);
			await browser.scripting.updateContentScripts([{
				...contentScript,
				id,
				css: contentScript.css ?? []
			}]);
		} else {
			logger.debug("Registering new content script...");
			await browser.scripting.registerContentScripts([{
				...contentScript,
				id,
				css: contentScript.css ?? []
			}]);
		}
		await reloadTabsForContentScript(contentScript);
	}
	async function reloadRuntimeContentScriptMv3(contentScript) {
		logger.log("Reloading content script:", contentScript);
		const registered = await browser.scripting.getRegisteredContentScripts();
		logger.debug("Existing scripts:", registered);
		const matches = registered.filter((cs) => {
			const hasJs = contentScript.js?.find((js) => cs.js?.includes(js));
			const hasCss = contentScript.css?.find((css) => cs.css?.includes(css));
			return hasJs || hasCss;
		});
		if (matches.length === 0) {
			logger.log("Content script is not registered yet, nothing to reload", contentScript);
			return;
		}
		await browser.scripting.updateContentScripts(matches);
		await reloadTabsForContentScript(contentScript);
	}
	async function reloadTabsForContentScript(contentScript) {
		const allTabs = await browser.tabs.query({});
		const matchPatterns = contentScript.matches.map((match) => new MatchPattern(match));
		const matchingTabs = allTabs.filter((tab) => {
			const url = tab.url;
			if (!url) return false;
			return !!matchPatterns.find((pattern) => pattern.includes(url));
		});
		await Promise.all(matchingTabs.map(async (tab) => {
			try {
				await browser.tabs.reload(tab.id);
			} catch (err) {
				logger.warn("Failed to reload tab:", err);
			}
		}));
	}
	async function reloadContentScriptMv2(_payload) {
		throw Error("TODO: reloadContentScriptMv2");
	}
	try {
		const ws = getDevServerWebSocket();
		ws.addWxtEventListener("wxt:reload-extension", () => {
			browser.runtime.reload();
		});
		ws.addWxtEventListener("wxt:reload-content-script", (event) => {
			reloadContentScript(event.detail);
		});
		ws.addEventListener("open", () => ws.sendCustom("wxt:background-initialized"));
		keepServiceWorkerAlive();
	} catch (err) {
		logger.error("Failed to setup web socket connection with dev server", err);
	}
	browser.commands.onCommand.addListener((command) => {
		if (command === "wxt:reload-extension") browser.runtime.reload();
	});
	var result;
	try {
		result = background_default.main();
		if (result instanceof Promise) console.warn("The background's main() function return a promise, but it must be synchronous");
	} catch (err) {
		logger.error("The background crashed on startup!");
		throw err;
	}
	//#endregion
	return result;
})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm5hbWVzIjpbImRlZmF1bHRFcnJvck1hcCIsImRlZmF1bHRFcnJvck1hcCIsImRlZmF1bHRFcnJvck1hcCIsImJyb3dzZXIiLCJicm93c2VyIiwiei5lbnVtIiwiei5vYmplY3QiLCJ6LnN0cmluZyIsInouYXJyYXkiLCJ6LmJvb2xlYW4iLCJ6Lm51bWJlciIsImJyb3dzZXIkMSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4yMC4yMF9AdHlwZXMrbm9kZUAyNS41LjBfaml0aUAyLjYuMS9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWJhY2tncm91bmQubWpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL1pvZEVycm9yLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9sb2NhbGVzL2VuLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9lcnJvcnMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvcGFyc2VVdGlsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL2Vycm9yVXRpbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy96b2QvdjMvdHlwZXMuanMiLCIuLi8uLi9zcmMvbWVzc2FnaW5nL2luZGV4LnRzIiwiLi4vLi4vc3JjL3ByZXNldHMvcG9saXRpY3MudHMiLCIuLi8uLi9zcmMvcHJlc2V0cy9yYWdlYmFpdC50cyIsIi4uLy4uL3NyYy9wcmVzZXRzL3Nwb2lsZXJzLnRzIiwiLi4vLi4vc3JjL3ByZXNldHMvY2xpY2tiYWl0LnRzIiwiLi4vLi4vc3JjL3ByZXNldHMvaW5kZXgudHMiLCIuLi8uLi91dGlscy9jbGFzc2lmaWVyLnRzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3eHQtZGV2K2Jyb3dzZXJAMC4xLjM4L25vZGVfbW9kdWxlcy9Ad3h0LWRldi9icm93c2VyL3NyYy9pbmRleC5tanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXN5bmMtbXV0ZXhAMC41LjAvbm9kZV9tb2R1bGVzL2FzeW5jLW11dGV4L2luZGV4Lm1qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZXF1YWxAMi4wLjMvbm9kZV9tb2R1bGVzL2RlcXVhbC9saXRlL2luZGV4Lm1qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad3h0LWRlditzdG9yYWdlQDEuMi44L25vZGVfbW9kdWxlcy9Ad3h0LWRldi9zdG9yYWdlL2Rpc3QvaW5kZXgubWpzIiwiLi4vLi4vLi4vLi4vcGFja2FnZXMvc2hhcmVkL2Rpc3QvaW5kZXguanMiLCIuLi8uLi91dGlscy9zdG9yYWdlLnRzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi9zcmMvZmlsdGVybGlzdC9mZXRjaGVyLnRzIiwiLi4vLi4vc3JjL2ZpbHRlcmxpc3QvcGFyc2VyLnRzIiwiLi4vLi4vc3JjL2ZpbHRlcmxpc3QvYXBwbGllci50cyIsIi4uLy4uL3NyYy9maWx0ZXIvYmxvY2tsaXN0LWZldGNoZXIudHMiLCIuLi8uLi9lbnRyeXBvaW50cy9iYWNrZ3JvdW5kLnRzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjIwLjIwX0B0eXBlcytub2RlQDI1LjUuMF9qaXRpQDIuNi4xL25vZGVfbW9kdWxlcy93eHQvZGlzdC9icm93c2VyLm1qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2ViZXh0LWNvcmUrbWF0Y2gtcGF0dGVybnNAMS4wLjMvbm9kZV9tb2R1bGVzL0B3ZWJleHQtY29yZS9tYXRjaC1wYXR0ZXJucy9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIHNyYy91dGlscy9kZWZpbmUtYmFja2dyb3VuZC50c1xuZnVuY3Rpb24gZGVmaW5lQmFja2dyb3VuZChhcmcpIHtcblx0aWYgKGFyZyA9PSBudWxsIHx8IHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHsgbWFpbjogYXJnIH07XG5cdHJldHVybiBhcmc7XG59XG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IGRlZmluZUJhY2tncm91bmQgfTtcbiIsImV4cG9ydCB2YXIgdXRpbDtcbihmdW5jdGlvbiAodXRpbCkge1xuICAgIHV0aWwuYXNzZXJ0RXF1YWwgPSAoXykgPT4geyB9O1xuICAgIGZ1bmN0aW9uIGFzc2VydElzKF9hcmcpIHsgfVxuICAgIHV0aWwuYXNzZXJ0SXMgPSBhc3NlcnRJcztcbiAgICBmdW5jdGlvbiBhc3NlcnROZXZlcihfeCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgdXRpbC5hc3NlcnROZXZlciA9IGFzc2VydE5ldmVyO1xuICAgIHV0aWwuYXJyYXlUb0VudW0gPSAoaXRlbXMpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgb2JqW2l0ZW1dID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXMgPSAob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhvYmopLmZpbHRlcigoaykgPT4gdHlwZW9mIG9ialtvYmpba11dICE9PSBcIm51bWJlclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIHZhbGlkS2V5cykge1xuICAgICAgICAgICAgZmlsdGVyZWRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0VmFsdWVzKGZpbHRlcmVkKTtcbiAgICB9O1xuICAgIHV0aWwub2JqZWN0VmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RLZXlzKG9iaikubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2VdO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHV0aWwub2JqZWN0S2V5cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gXCJmdW5jdGlvblwiIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA/IChvYmopID0+IE9iamVjdC5rZXlzKG9iaikgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYW4vYmFuXG4gICAgICAgIDogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH07XG4gICAgdXRpbC5maW5kID0gKGFyciwgY2hlY2tlcikgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tlcihpdGVtKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgdXRpbC5pc0ludGVnZXIgPSB0eXBlb2YgTnVtYmVyLmlzSW50ZWdlciA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gKHZhbCkgPT4gTnVtYmVyLmlzSW50ZWdlcih2YWwpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXkubWFwKCh2YWwpID0+ICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gYCcke3ZhbH0nYCA6IHZhbCkpLmpvaW4oc2VwYXJhdG9yKTtcbiAgICB9XG4gICAgdXRpbC5qb2luVmFsdWVzID0gam9pblZhbHVlcztcbiAgICB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciA9IChfLCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbn0pKHV0aWwgfHwgKHV0aWwgPSB7fSkpO1xuZXhwb3J0IHZhciBvYmplY3RVdGlsO1xuKGZ1bmN0aW9uIChvYmplY3RVdGlsKSB7XG4gICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5maXJzdCxcbiAgICAgICAgICAgIC4uLnNlY29uZCwgLy8gc2Vjb25kIG92ZXJ3cml0ZXMgZmlyc3RcbiAgICAgICAgfTtcbiAgICB9O1xufSkob2JqZWN0VXRpbCB8fCAob2JqZWN0VXRpbCA9IHt9KSk7XG5leHBvcnQgY29uc3QgWm9kUGFyc2VkVHlwZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwic3RyaW5nXCIsXG4gICAgXCJuYW5cIixcbiAgICBcIm51bWJlclwiLFxuICAgIFwiaW50ZWdlclwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICBcImRhdGVcIixcbiAgICBcImJpZ2ludFwiLFxuICAgIFwic3ltYm9sXCIsXG4gICAgXCJmdW5jdGlvblwiLFxuICAgIFwidW5kZWZpbmVkXCIsXG4gICAgXCJudWxsXCIsXG4gICAgXCJhcnJheVwiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJ1bmtub3duXCIsXG4gICAgXCJwcm9taXNlXCIsXG4gICAgXCJ2b2lkXCIsXG4gICAgXCJuZXZlclwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJzZXRcIixcbl0pO1xuZXhwb3J0IGNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zdHJpbmc7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4oZGF0YSkgPyBab2RQYXJzZWRUeXBlLm5hbiA6IFpvZFBhcnNlZFR5cGUubnVtYmVyO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYm9vbGVhbjtcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbjtcbiAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYmlnaW50O1xuICAgICAgICBjYXNlIFwic3ltYm9sXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zeW1ib2w7XG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50aGVuICYmIHR5cGVvZiBkYXRhLnRoZW4gPT09IFwiZnVuY3Rpb25cIiAmJiBkYXRhLmNhdGNoICYmIHR5cGVvZiBkYXRhLmNhdGNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5wcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm1hcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgU2V0ICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIERhdGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5kYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUub2JqZWN0O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5rbm93bjtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgdXRpbCB9IGZyb20gXCIuL2hlbHBlcnMvdXRpbC5qc1wiO1xuZXhwb3J0IGNvbnN0IFpvZElzc3VlQ29kZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwiaW52YWxpZF90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2xpdGVyYWxcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiaW52YWxpZF91bmlvblwiLFxuICAgIFwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yXCIsXG4gICAgXCJpbnZhbGlkX2VudW1fdmFsdWVcIixcbiAgICBcInVucmVjb2duaXplZF9rZXlzXCIsXG4gICAgXCJpbnZhbGlkX2FyZ3VtZW50c1wiLFxuICAgIFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiLFxuICAgIFwiaW52YWxpZF9kYXRlXCIsXG4gICAgXCJpbnZhbGlkX3N0cmluZ1wiLFxuICAgIFwidG9vX3NtYWxsXCIsXG4gICAgXCJ0b29fYmlnXCIsXG4gICAgXCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlc1wiLFxuICAgIFwibm90X211bHRpcGxlX29mXCIsXG4gICAgXCJub3RfZmluaXRlXCIsXG5dKTtcbmV4cG9ydCBjb25zdCBxdW90ZWxlc3NKc29uID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmosIG51bGwsIDIpO1xuICAgIHJldHVybiBqc29uLnJlcGxhY2UoL1wiKFteXCJdKylcIjovZywgXCIkMTpcIik7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGdldCBlcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3VlcztcbiAgICB9XG4gICAgY29uc3RydWN0b3IoaXNzdWVzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNzdWVzID0gW107XG4gICAgICAgIHRoaXMuYWRkSXNzdWUgPSAoc3ViKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzc3VlcyA9IFsuLi50aGlzLmlzc3Vlcywgc3ViXTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZXMgPSAoc3VicyA9IFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzc3VlcyA9IFsuLi50aGlzLmlzc3VlcywgLi4uc3Vic107XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGFjdHVhbFByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiYW4vYmFuXG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgYWN0dWFsUHJvdG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fX3Byb3RvX18gPSBhY3R1YWxQcm90bztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBcIlpvZEVycm9yXCI7XG4gICAgICAgIHRoaXMuaXNzdWVzID0gaXNzdWVzO1xuICAgIH1cbiAgICBmb3JtYXQoX21hcHBlcikge1xuICAgICAgICBjb25zdCBtYXBwZXIgPSBfbWFwcGVyIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoaXNzdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNzdWUubWVzc2FnZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0geyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICBjb25zdCBwcm9jZXNzRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXNzdWUgb2YgZXJyb3IuaXNzdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF91bmlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlLnVuaW9uRXJyb3JzLm1hcChwcm9jZXNzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfcmV0dXJuX3R5cGVcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUucmV0dXJuVHlwZUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX2FyZ3VtZW50c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcihpc3N1ZS5hcmd1bWVudHNFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyID0gZmllbGRFcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBpc3N1ZS5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBpc3N1ZS5wYXRoW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVybWluYWwgPSBpID09PSBpc3N1ZS5wYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRlcm1pbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmICh0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IGVycm9yQXJyYXk6IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZXJyb3JBcnJheS5fZXJyb3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IGVycm9yQXJyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0uX2Vycm9ycy5wdXNoKG1hcHBlcihpc3N1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyciA9IGN1cnJbZWxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcm9jZXNzRXJyb3IodGhpcyk7XG4gICAgICAgIHJldHVybiBmaWVsZEVycm9ycztcbiAgICB9XG4gICAgc3RhdGljIGFzc2VydCh2YWx1ZSkge1xuICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFpvZEVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgYSBab2RFcnJvcjogJHt2YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgICB9XG4gICAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmlzc3VlcywgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIsIDIpO1xuICAgIH1cbiAgICBnZXQgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVzLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgZmxhdHRlbihtYXBwZXIgPSAoaXNzdWUpID0+IGlzc3VlLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7fTtcbiAgICAgICAgY29uc3QgZm9ybUVycm9ycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLmlzc3Vlcykge1xuICAgICAgICAgICAgaWYgKHN1Yi5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEVsID0gc3ViLnBhdGhbMF07XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbZmlyc3RFbF0gPSBmaWVsZEVycm9yc1tmaXJzdEVsXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tmaXJzdEVsXS5wdXNoKG1hcHBlcihzdWIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1FcnJvcnMucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZm9ybUVycm9ycywgZmllbGRFcnJvcnMgfTtcbiAgICB9XG4gICAgZ2V0IGZvcm1FcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXR0ZW4oKTtcbiAgICB9XG59XG5ab2RFcnJvci5jcmVhdGUgPSAoaXNzdWVzKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoaXNzdWVzKTtcbiAgICByZXR1cm4gZXJyb3I7XG59O1xuIiwiaW1wb3J0IHsgWm9kSXNzdWVDb2RlIH0gZnJvbSBcIi4uL1pvZEVycm9yLmpzXCI7XG5pbXBvcnQgeyB1dGlsLCBab2RQYXJzZWRUeXBlIH0gZnJvbSBcIi4uL2hlbHBlcnMvdXRpbC5qc1wiO1xuY29uc3QgZXJyb3JNYXAgPSAoaXNzdWUsIF9jdHgpID0+IHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBzd2l0Y2ggKGlzc3VlLmNvZGUpIHtcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnJlY2VpdmVkID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEV4cGVjdGVkICR7aXNzdWUuZXhwZWN0ZWR9LCByZWNlaXZlZCAke2lzc3VlLnJlY2VpdmVkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGxpdGVyYWwgdmFsdWUsIGV4cGVjdGVkICR7SlNPTi5zdHJpbmdpZnkoaXNzdWUuZXhwZWN0ZWQsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBVbnJlY29nbml6ZWQga2V5KHMpIGluIG9iamVjdDogJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUua2V5cywgXCIsIFwiKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb246XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBlbnVtIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX0sIHJlY2VpdmVkICcke2lzc3VlLnJlY2VpdmVkfSdgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIGFyZ3VtZW50c2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiByZXR1cm4gdHlwZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRhdGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiaW5jbHVkZXNcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBpbmNsdWRlIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmluY2x1ZGVzfVwiYDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYCR7bWVzc2FnZX0gYXQgb25lIG9yIG1vcmUgcG9zaXRpb25zIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAke2lzc3VlLnZhbGlkYXRpb24ucG9zaXRpb259YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcInN0YXJ0c1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBzdGFydCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLnN0YXJ0c1dpdGh9XCJgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcImVuZHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgZW5kIHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uZW5kc1dpdGh9XCJgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZS52YWxpZGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS52YWxpZGF0aW9uICE9PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgJHtpc3N1ZS52YWxpZGF0aW9ufWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudG9vX3NtYWxsOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnR5cGUgPT09IFwiYXJyYXlcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEFycmF5IG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gXCJleGFjdGx5XCIgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbGVhc3RgIDogYG1vcmUgdGhhbmB9ICR7aXNzdWUubWluaW11bX0gZWxlbWVudChzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgU3RyaW5nIG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gXCJleGFjdGx5XCIgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbGVhc3RgIDogYG92ZXJgfSAke2lzc3VlLm1pbmltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5IGVxdWFsIHRvIGAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGAgOiBgZ3JlYXRlciB0aGFuIGB9JHtpc3N1ZS5taW5pbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImJpZ2ludFwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5IGVxdWFsIHRvIGAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGAgOiBgZ3JlYXRlciB0aGFuIGB9JHtpc3N1ZS5taW5pbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHkgZXF1YWwgdG8gYCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYCA6IGBncmVhdGVyIHRoYW4gYH0ke25ldyBEYXRlKE51bWJlcihpc3N1ZS5taW5pbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudG9vX2JpZzpcbiAgICAgICAgICAgIGlmIChpc3N1ZS50eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBBcnJheSBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBtb3N0YCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19IGVsZW1lbnQocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFN0cmluZyBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBtb3N0YCA6IGB1bmRlcmB9ICR7aXNzdWUubWF4aW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGxlc3MgdGhhbiBvciBlcXVhbCB0b2AgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImJpZ2ludFwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmlnSW50IG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBsZXNzIHRoYW4gb3IgZXF1YWwgdG9gIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG9gIDogYHNtYWxsZXIgdGhhbmB9ICR7bmV3IERhdGUoTnVtYmVyKGlzc3VlLm1heGltdW0pKX1gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5jdXN0b206XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnRlcnNlY3Rpb24gcmVzdWx0cyBjb3VsZCBub3QgYmUgbWVyZ2VkYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2Y6XG4gICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtpc3N1ZS5tdWx0aXBsZU9mfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk51bWJlciBtdXN0IGJlIGZpbml0ZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBtZXNzYWdlID0gX2N0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbWVzc2FnZSB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGVycm9yTWFwO1xuIiwiaW1wb3J0IGRlZmF1bHRFcnJvck1hcCBmcm9tIFwiLi9sb2NhbGVzL2VuLmpzXCI7XG5sZXQgb3ZlcnJpZGVFcnJvck1hcCA9IGRlZmF1bHRFcnJvck1hcDtcbmV4cG9ydCB7IGRlZmF1bHRFcnJvck1hcCB9O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVycm9yTWFwKG1hcCkge1xuICAgIG92ZXJyaWRlRXJyb3JNYXAgPSBtYXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JNYXAoKSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlRXJyb3JNYXA7XG59XG4iLCJpbXBvcnQgeyBnZXRFcnJvck1hcCB9IGZyb20gXCIuLi9lcnJvcnMuanNcIjtcbmltcG9ydCBkZWZhdWx0RXJyb3JNYXAgZnJvbSBcIi4uL2xvY2FsZXMvZW4uanNcIjtcbmV4cG9ydCBjb25zdCBtYWtlSXNzdWUgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBwYXRoLCBlcnJvck1hcHMsIGlzc3VlRGF0YSB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gWy4uLnBhdGgsIC4uLihpc3N1ZURhdGEucGF0aCB8fCBbXSldO1xuICAgIGNvbnN0IGZ1bGxJc3N1ZSA9IHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICB9O1xuICAgIGlmIChpc3N1ZURhdGEubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGlzc3VlRGF0YS5tZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJcIjtcbiAgICBjb25zdCBtYXBzID0gZXJyb3JNYXBzXG4gICAgICAgIC5maWx0ZXIoKG0pID0+ICEhbSlcbiAgICAgICAgLnNsaWNlKClcbiAgICAgICAgLnJldmVyc2UoKTtcbiAgICBmb3IgKGNvbnN0IG1hcCBvZiBtYXBzKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IG1hcChmdWxsSXNzdWUsIHsgZGF0YSwgZGVmYXVsdEVycm9yOiBlcnJvck1lc3NhZ2UgfSkubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IEVNUFRZX1BBVEggPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGlzc3VlRGF0YSkge1xuICAgIGNvbnN0IG92ZXJyaWRlTWFwID0gZ2V0RXJyb3JNYXAoKTtcbiAgICBjb25zdCBpc3N1ZSA9IG1ha2VJc3N1ZSh7XG4gICAgICAgIGlzc3VlRGF0YTogaXNzdWVEYXRhLFxuICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIC8vIGNvbnRleHR1YWwgZXJyb3IgbWFwIGlzIGZpcnN0IHByaW9yaXR5XG4gICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsIC8vIHRoZW4gc2NoZW1hLWJvdW5kIG1hcCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIG92ZXJyaWRlTWFwLCAvLyB0aGVuIGdsb2JhbCBvdmVycmlkZSBtYXBcbiAgICAgICAgICAgIG92ZXJyaWRlTWFwID09PSBkZWZhdWx0RXJyb3JNYXAgPyB1bmRlZmluZWQgOiBkZWZhdWx0RXJyb3JNYXAsIC8vIHRoZW4gZ2xvYmFsIGRlZmF1bHQgbWFwXG4gICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgIH0pO1xuICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goaXNzdWUpO1xufVxuZXhwb3J0IGNsYXNzIFBhcnNlU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwidmFsaWRcIjtcbiAgICB9XG4gICAgZGlydHkoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBcInZhbGlkXCIpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gXCJkaXJ0eVwiO1xuICAgIH1cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiYWJvcnRlZFwiO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpIHtcbiAgICAgICAgY29uc3QgYXJyYXlWYWx1ZSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHMgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgYXJyYXlWYWx1ZS5wdXNoKHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogYXJyYXlWYWx1ZSB9O1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IHN5bmNQYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHBhaXI7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAoa2V5LnZhbHVlICE9PSBcIl9fcHJvdG9fX1wiICYmICh0eXBlb2YgdmFsdWUudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgfHwgcGFpci5hbHdheXNTZXQpKSB7XG4gICAgICAgICAgICAgICAgZmluYWxPYmplY3Rba2V5LnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxPYmplY3QgfTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgSU5WQUxJRCA9IE9iamVjdC5mcmVlemUoe1xuICAgIHN0YXR1czogXCJhYm9ydGVkXCIsXG59KTtcbmV4cG9ydCBjb25zdCBESVJUWSA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlIH0pO1xuZXhwb3J0IGNvbnN0IE9LID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWUgfSk7XG5leHBvcnQgY29uc3QgaXNBYm9ydGVkID0gKHgpID0+IHguc3RhdHVzID09PSBcImFib3J0ZWRcIjtcbmV4cG9ydCBjb25zdCBpc0RpcnR5ID0gKHgpID0+IHguc3RhdHVzID09PSBcImRpcnR5XCI7XG5leHBvcnQgY29uc3QgaXNWYWxpZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJ2YWxpZFwiO1xuZXhwb3J0IGNvbnN0IGlzQXN5bmMgPSAoeCkgPT4gdHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgeCBpbnN0YW5jZW9mIFByb21pc2U7XG4iLCJleHBvcnQgdmFyIGVycm9yVXRpbDtcbihmdW5jdGlvbiAoZXJyb3JVdGlsKSB7XG4gICAgZXJyb3JVdGlsLmVyclRvT2JqID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlIH0gOiBtZXNzYWdlIHx8IHt9O1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50OlxuICAgIGVycm9yVXRpbC50b1N0cmluZyA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IG1lc3NhZ2UgOiBtZXNzYWdlPy5tZXNzYWdlO1xufSkoZXJyb3JVdGlsIHx8IChlcnJvclV0aWwgPSB7fSkpO1xuIiwiaW1wb3J0IHsgWm9kRXJyb3IsIFpvZElzc3VlQ29kZSwgfSBmcm9tIFwiLi9ab2RFcnJvci5qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEVycm9yTWFwLCBnZXRFcnJvck1hcCB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IHsgZXJyb3JVdGlsIH0gZnJvbSBcIi4vaGVscGVycy9lcnJvclV0aWwuanNcIjtcbmltcG9ydCB7IERJUlRZLCBJTlZBTElELCBPSywgUGFyc2VTdGF0dXMsIGFkZElzc3VlVG9Db250ZXh0LCBpc0Fib3J0ZWQsIGlzQXN5bmMsIGlzRGlydHksIGlzVmFsaWQsIG1ha2VJc3N1ZSwgfSBmcm9tIFwiLi9oZWxwZXJzL3BhcnNlVXRpbC5qc1wiO1xuaW1wb3J0IHsgdXRpbCwgWm9kUGFyc2VkVHlwZSwgZ2V0UGFyc2VkVHlwZSB9IGZyb20gXCIuL2hlbHBlcnMvdXRpbC5qc1wiO1xuY2xhc3MgUGFyc2VJbnB1dExhenlQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHZhbHVlLCBwYXRoLCBrZXkpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVkUGF0aCA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgfVxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlZFBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIC4uLnRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRQYXRoLnB1c2goLi4udGhpcy5fcGF0aCwgdGhpcy5fa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGF0aDtcbiAgICB9XG59XG5jb25zdCBoYW5kbGVSZXN1bHQgPSAoY3R4LCByZXN1bHQpID0+IHtcbiAgICBpZiAoaXNWYWxpZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdC52YWx1ZSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gZmFpbGVkIGJ1dCBubyBpc3N1ZXMgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihjdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbn07XG5mdW5jdGlvbiBwcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgeyBlcnJvck1hcCwgaW52YWxpZF90eXBlX2Vycm9yLCByZXF1aXJlZF9lcnJvciwgZGVzY3JpcHRpb24gfSA9IHBhcmFtcztcbiAgICBpZiAoZXJyb3JNYXAgJiYgKGludmFsaWRfdHlwZV9lcnJvciB8fCByZXF1aXJlZF9lcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCB1c2UgXCJpbnZhbGlkX3R5cGVfZXJyb3JcIiBvciBcInJlcXVpcmVkX2Vycm9yXCIgaW4gY29uanVuY3Rpb24gd2l0aCBjdXN0b20gZXJyb3IgbWFwLmApO1xuICAgIH1cbiAgICBpZiAoZXJyb3JNYXApXG4gICAgICAgIHJldHVybiB7IGVycm9yTWFwOiBlcnJvck1hcCwgZGVzY3JpcHRpb24gfTtcbiAgICBjb25zdCBjdXN0b21NYXAgPSAoaXNzLCBjdHgpID0+IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBwYXJhbXM7XG4gICAgICAgIGlmIChpc3MuY29kZSA9PT0gXCJpbnZhbGlkX2VudW1fdmFsdWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjdHguZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyByZXF1aXJlZF9lcnJvciA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzcy5jb2RlICE9PSBcImludmFsaWRfdHlwZVwiKVxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBtZXNzYWdlID8/IGludmFsaWRfdHlwZV9lcnJvciA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBlcnJvck1hcDogY3VzdG9tTWFwLCBkZXNjcmlwdGlvbiB9O1xufVxuZXhwb3J0IGNsYXNzIFpvZFR5cGUge1xuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgX2dldFR5cGUoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIF9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KSB7XG4gICAgICAgIHJldHVybiAoY3R4IHx8IHtcbiAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogbmV3IFBhcnNlU3RhdHVzKCksXG4gICAgICAgICAgICBjdHg6IHtcbiAgICAgICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9wYXJzZVN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW5jaHJvbm91cyBwYXJzZSBlbmNvdW50ZXJlZCBwcm9taXNlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBfcGFyc2VBc3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG4gICAgcGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2FmZVBhcnNlKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcylcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgIH1cbiAgICBzYWZlUGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6IHBhcmFtcz8uYXN5bmMgPz8gZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXM/LmVycm9yTWFwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IHBhcmFtcz8ucGF0aCB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2VTeW5jKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgXCJ+dmFsaWRhdGVcIihkYXRhKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6ICEhdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycj8ubWVzc2FnZT8udG9Mb3dlckNhc2UoKT8uaW5jbHVkZXMoXCJlbmNvdW50ZXJlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VBc3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChyZXN1bHQpID0+IGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgcGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zYWZlUGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgYXN5bmMgc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXM/LmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IHBhcmFtcz8ucGF0aCB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWF5YmVBc3luY1Jlc3VsdCA9IHRoaXMuX3BhcnNlKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoaXNBc3luYyhtYXliZUFzeW5jUmVzdWx0KSA/IG1heWJlQXN5bmNSZXN1bHQgOiBQcm9taXNlLnJlc29sdmUobWF5YmVBc3luY1Jlc3VsdCkpO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmVmaW5lKGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGdldElzc3VlUHJvcGVydGllcyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2sodmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEVycm9yID0gKCkgPT4gY3R4LmFkZElzc3VlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgICAgICAgICAgIC4uLmdldElzc3VlUHJvcGVydGllcyh2YWwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmaW5lbWVudChjaGVjaywgcmVmaW5lbWVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUodHlwZW9mIHJlZmluZW1lbnREYXRhID09PSBcImZ1bmN0aW9uXCIgPyByZWZpbmVtZW50RGF0YSh2YWwsIGN0eCkgOiByZWZpbmVtZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVmaW5lbWVudChyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJyZWZpbmVtZW50XCIsIHJlZmluZW1lbnQgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1cGVyUmVmaW5lKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQocmVmaW5lbWVudCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGRlZikge1xuICAgICAgICAvKiogQWxpYXMgb2Ygc2FmZVBhcnNlQXN5bmMgKi9cbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNhZmVQYXJzZUFzeW5jO1xuICAgICAgICB0aGlzLl9kZWYgPSBkZWY7XG4gICAgICAgIHRoaXMucGFyc2UgPSB0aGlzLnBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlID0gdGhpcy5zYWZlUGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJzZUFzeW5jID0gdGhpcy5wYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlQXN5bmMgPSB0aGlzLnNhZmVQYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zcGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmUgPSB0aGlzLnJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZW1lbnQgPSB0aGlzLnJlZmluZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdXBlclJlZmluZSA9IHRoaXMuc3VwZXJSZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRoaXMub3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsYWJsZSA9IHRoaXMubnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsaXNoID0gdGhpcy5udWxsaXNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLmFycmF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9yID0gdGhpcy5vci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuZCA9IHRoaXMuYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0gdGhpcy5kZWZhdWx0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2F0Y2ggPSB0aGlzLmNhdGNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUgPSB0aGlzLmRlc2NyaWJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGlwZSA9IHRoaXMucGlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdGhpcy5yZWFkb25seS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzTnVsbGFibGUgPSB0aGlzLmlzTnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09wdGlvbmFsID0gdGhpcy5pc09wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXNbXCJ+c3RhbmRhcmRcIl0gPSB7XG4gICAgICAgICAgICB2ZXJzaW9uOiAxLFxuICAgICAgICAgICAgdmVuZG9yOiBcInpvZFwiLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChkYXRhKSA9PiB0aGlzW1wifnZhbGlkYXRlXCJdKGRhdGEpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBvcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsaXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udWxsYWJsZSgpLm9wdGlvbmFsKCk7XG4gICAgfVxuICAgIGFycmF5KCkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gWm9kUHJvbWlzZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgb3Iob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBab2RVbmlvbi5jcmVhdGUoW3RoaXMsIG9wdGlvbl0sIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIGFuZChpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSh0aGlzLCBpbmNvbWluZywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVmYXVsdChkZWYpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIGlubmVyVHlwZTogdGhpcyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJyYW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJyYW5kZWQoe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCcmFuZGVkLFxuICAgICAgICAgICAgdHlwZTogdGhpcyxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoKGRlZikge1xuICAgICAgICBjb25zdCBjYXRjaFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBjYXRjaFZhbHVlOiBjYXRjaFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZXNjcmliZShkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBUaGlzID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBUaGlzKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGlwZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIFpvZFBpcGVsaW5lLmNyZWF0ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZWFkb25seSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFJlYWRvbmx5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgaXNPcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKHVuZGVmaW5lZCkuc3VjY2VzcztcbiAgICB9XG4gICAgaXNOdWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKG51bGwpLnN1Y2Nlc3M7XG4gICAgfVxufVxuY29uc3QgY3VpZFJlZ2V4ID0gL15jW15cXHMtXXs4LH0kL2k7XG5jb25zdCBjdWlkMlJlZ2V4ID0gL15bMC05YS16XSskLztcbmNvbnN0IHVsaWRSZWdleCA9IC9eWzAtOUEtSEpLTU5QLVRWLVpdezI2fSQvaTtcbi8vIGNvbnN0IHV1aWRSZWdleCA9XG4vLyAgIC9eKFthLWYwLTldezh9LVthLWYwLTldezR9LVsxLTVdW2EtZjAtOV17M30tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5jb25zdCB1dWlkUmVnZXggPSAvXlswLTlhLWZBLUZdezh9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezEyfSQvaTtcbmNvbnN0IG5hbm9pZFJlZ2V4ID0gL15bYS16MC05Xy1dezIxfSQvaTtcbmNvbnN0IGp3dFJlZ2V4ID0gL15bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fXSokLztcbmNvbnN0IGR1cmF0aW9uUmVnZXggPSAvXlstK10/UCg/ISQpKD86KD86Wy0rXT9cXGQrWSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtZJCkpPyg/Oig/OlstK10/XFxkK00pfCg/OlstK10/XFxkK1suLF1cXGQrTSQpKT8oPzooPzpbLStdP1xcZCtXKXwoPzpbLStdP1xcZCtbLixdXFxkK1ckKSk/KD86KD86Wy0rXT9cXGQrRCl8KD86Wy0rXT9cXGQrWy4sXVxcZCtEJCkpPyg/OlQoPz1bXFxkKy1dKSg/Oig/OlstK10/XFxkK0gpfCg/OlstK10/XFxkK1suLF1cXGQrSCQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86Wy0rXT9cXGQrKD86Wy4sXVxcZCspP1MpPyk/PyQvO1xuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYxODEvMTU1MDE1NVxuLy8gb2xkIHZlcnNpb246IHRvbyBzbG93LCBkaWRuJ3Qgc3VwcG9ydCB1bmljb2RlXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuLy9vbGQgZW1haWwgcmVnZXhcbi8vIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpW1xcXS4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKD8hLSkoW148PigpW1xcXS4sOzpcXHNAXCJdK1xcLikrW148PigpW1xcXS4sOzpcXHNAXCJdezEsfSlbXi08PigpW1xcXS4sOzpcXHNAXCJdJC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbKCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFxdKXwoXFxbSVB2NjooKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpXFxdKXwoW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dKltBLVphLXowLTldKSooXFwuW0EtWmEtel17Mix9KSspKSQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtekEtWjAtOVxcLlxcIVxcI1xcJFxcJVxcJlxcJ1xcKlxcK1xcL1xcPVxcP1xcXlxcX1xcYFxce1xcfFxcfVxcflxcLV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvaTtcbmNvbnN0IGVtYWlsUmVnZXggPSAvXig/IVxcLikoPyEuKlxcLlxcLikoW0EtWjAtOV8nK1xcLVxcLl0qKVtBLVowLTlfKy1dQChbQS1aMC05XVtBLVowLTlcXC1dKlxcLikrW0EtWl17Mix9JC9pO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtejAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16MC05LV0rKD86XFwuW2EtejAtOVxcLV0rKSokL2k7XG4vLyBmcm9tIGh0dHBzOi8vdGhla2V2aW5zY290dC5jb20vZW1vamlzLWluLWphdmFzY3JpcHQvI3dyaXRpbmctYS1yZWd1bGFyLWV4cHJlc3Npb25cbmNvbnN0IF9lbW9qaVJlZ2V4ID0gYF4oXFxcXHB7RXh0ZW5kZWRfUGljdG9ncmFwaGljfXxcXFxccHtFbW9qaV9Db21wb25lbnR9KSskYDtcbmxldCBlbW9qaVJlZ2V4O1xuLy8gZmFzdGVyLCBzaW1wbGVyLCBzYWZlclxuY29uc3QgaXB2NFJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkkLztcbmNvbnN0IGlwdjRDaWRyUmVnZXggPSAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLygzWzAtMl18WzEyXT9bMC05XSkkLztcbi8vIGNvbnN0IGlwdjZSZWdleCA9XG4vLyAvXigoW2EtZjAtOV17MSw0fTopezd9fDo6KFthLWYwLTldezEsNH06KXswLDZ9fChbYS1mMC05XXsxLDR9Oil7MX06KFthLWYwLTldezEsNH06KXswLDV9fChbYS1mMC05XXsxLDR9Oil7Mn06KFthLWYwLTldezEsNH06KXswLDR9fChbYS1mMC05XXsxLDR9Oil7M306KFthLWYwLTldezEsNH06KXswLDN9fChbYS1mMC05XXsxLDR9Oil7NH06KFthLWYwLTldezEsNH06KXswLDJ9fChbYS1mMC05XXsxLDR9Oil7NX06KFthLWYwLTldezEsNH06KXswLDF9KShbYS1mMC05XXsxLDR9fCgoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKSkkLztcbmNvbnN0IGlwdjZSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKSQvO1xuY29uc3QgaXB2NkNpZHJSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKVxcLygxMlswLThdfDFbMDFdWzAtOV18WzEtOV0/WzAtOV0pJC87XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83ODYwMzkyL2RldGVybWluZS1pZi1zdHJpbmctaXMtaW4tYmFzZTY0LXVzaW5nLWphdmFzY3JpcHRcbmNvbnN0IGJhc2U2NFJlZ2V4ID0gL14oWzAtOWEtekEtWisvXXs0fSkqKChbMC05YS16QS1aKy9dezJ9PT0pfChbMC05YS16QS1aKy9dezN9PSkpPyQvO1xuLy8gaHR0cHM6Ly9iYXNlNjQuZ3VydS9zdGFuZGFyZHMvYmFzZTY0dXJsXG5jb25zdCBiYXNlNjR1cmxSZWdleCA9IC9eKFswLTlhLXpBLVotX117NH0pKigoWzAtOWEtekEtWi1fXXsyfSg9PSk/KXwoWzAtOWEtekEtWi1fXXszfSg9KT8pKT8kLztcbi8vIHNpbXBsZVxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9YDtcbi8vIG5vIGxlYXAgeWVhciB2YWxpZGF0aW9uXG4vLyBjb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgXFxcXGR7NH0tKCgwWzEzNTc4XXwxMHwxMiktMzF8KDBbMTMtOV18MVswLTJdKS0zMHwoMFsxLTldfDFbMC0yXSktKDBbMS05XXwxXFxcXGR8MlxcXFxkKSlgO1xuLy8gd2l0aCBsZWFwIHllYXIgdmFsaWRhdGlvblxuY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYCgoXFxcXGRcXFxcZFsyNDY4XVswNDhdfFxcXFxkXFxcXGRbMTM1NzldWzI2XXxcXFxcZFxcXFxkMFs0OF18WzAyNDY4XVswNDhdMDB8WzEzNTc5XVsyNl0wMCktMDItMjl8XFxcXGR7NH0tKCgwWzEzNTc4XXwxWzAyXSktKDBbMS05XXxbMTJdXFxcXGR8M1swMV0pfCgwWzQ2OV18MTEpLSgwWzEtOV18WzEyXVxcXFxkfDMwKXwoMDIpLSgwWzEtOV18MVxcXFxkfDJbMC04XSkpKWA7XG5jb25zdCBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKGBeJHtkYXRlUmVnZXhTb3VyY2V9JGApO1xuZnVuY3Rpb24gdGltZVJlZ2V4U291cmNlKGFyZ3MpIHtcbiAgICBsZXQgc2Vjb25kc1JlZ2V4U291cmNlID0gYFswLTVdXFxcXGRgO1xuICAgIGlmIChhcmdzLnByZWNpc2lvbikge1xuICAgICAgICBzZWNvbmRzUmVnZXhTb3VyY2UgPSBgJHtzZWNvbmRzUmVnZXhTb3VyY2V9XFxcXC5cXFxcZHske2FyZ3MucHJlY2lzaW9ufX1gO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcmdzLnByZWNpc2lvbiA9PSBudWxsKSB7XG4gICAgICAgIHNlY29uZHNSZWdleFNvdXJjZSA9IGAke3NlY29uZHNSZWdleFNvdXJjZX0oXFxcXC5cXFxcZCspP2A7XG4gICAgfVxuICAgIGNvbnN0IHNlY29uZHNRdWFudGlmaWVyID0gYXJncy5wcmVjaXNpb24gPyBcIitcIiA6IFwiP1wiOyAvLyByZXF1aXJlIHNlY29uZHMgaWYgcHJlY2lzaW9uIGlzIG5vbnplcm9cbiAgICByZXR1cm4gYChbMDFdXFxcXGR8MlswLTNdKTpbMC01XVxcXFxkKDoke3NlY29uZHNSZWdleFNvdXJjZX0pJHtzZWNvbmRzUXVhbnRpZmllcn1gO1xufVxuZnVuY3Rpb24gdGltZVJlZ2V4KGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfSRgKTtcbn1cbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzE0MzIzMVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGV0aW1lUmVnZXgoYXJncykge1xuICAgIGxldCByZWdleCA9IGAke2RhdGVSZWdleFNvdXJjZX1UJHt0aW1lUmVnZXhTb3VyY2UoYXJncyl9YDtcbiAgICBjb25zdCBvcHRzID0gW107XG4gICAgb3B0cy5wdXNoKGFyZ3MubG9jYWwgPyBgWj9gIDogYFpgKTtcbiAgICBpZiAoYXJncy5vZmZzZXQpXG4gICAgICAgIG9wdHMucHVzaChgKFsrLV1cXFxcZHsyfTo/XFxcXGR7Mn0pYCk7XG4gICAgcmVnZXggPSBgJHtyZWdleH0oJHtvcHRzLmpvaW4oXCJ8XCIpfSlgO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSVAoaXAsIHZlcnNpb24pIHtcbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjRcIiB8fCAhdmVyc2lvbikgJiYgaXB2NFJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NlJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSldUKGp3dCwgYWxnKSB7XG4gICAgaWYgKCFqd3RSZWdleC50ZXN0KGp3dCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBbaGVhZGVyXSA9IGp3dC5zcGxpdChcIi5cIik7XG4gICAgICAgIGlmICghaGVhZGVyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NHVybCB0byBiYXNlNjRcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gaGVhZGVyXG4gICAgICAgICAgICAucmVwbGFjZSgvLS9nLCBcIitcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csIFwiL1wiKVxuICAgICAgICAgICAgLnBhZEVuZChoZWFkZXIubGVuZ3RoICsgKCg0IC0gKGhlYWRlci5sZW5ndGggJSA0KSkgJSA0KSwgXCI9XCIpO1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gSlNPTi5wYXJzZShhdG9iKGJhc2U2NCkpO1xuICAgICAgICBpZiAodHlwZW9mIGRlY29kZWQgIT09IFwib2JqZWN0XCIgfHwgZGVjb2RlZCA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKFwidHlwXCIgaW4gZGVjb2RlZCAmJiBkZWNvZGVkPy50eXAgIT09IFwiSldUXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghZGVjb2RlZC5hbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChhbGcgJiYgZGVjb2RlZC5hbGcgIT09IGFsZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzVmFsaWRDaWRyKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRDaWRyUmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NlwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY2Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgY2xhc3MgWm9kU3RyaW5nIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1vamlcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1vamlSZWdleCkge1xuICAgICAgICAgICAgICAgICAgICBlbW9qaVJlZ2V4ID0gbmV3IFJlZ0V4cChfZW1vamlSZWdleCwgXCJ1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1dWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibmFub2lkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5hbm9pZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJuYW5vaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkMlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkMlJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bGlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVybFwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVSTChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIGNoZWNrLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IGNoZWNrLnJlZ2V4LnRlc3QoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwicmVnZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRyaW1cIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiaW5jbHVkZXNcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5pbmNsdWRlcyhjaGVjay52YWx1ZSwgY2hlY2sucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgaW5jbHVkZXM6IGNoZWNrLnZhbHVlLCBwb3NpdGlvbjogY2hlY2sucG9zaXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRvTG93ZXJDYXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0b1VwcGVyQ2FzZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwic3RhcnRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLnN0YXJ0c1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgc3RhcnRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVuZHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuZW5kc1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgZW5kc1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRldGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRlUmVnZXg7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSB0aW1lUmVnZXgoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImR1cmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWR1cmF0aW9uUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImR1cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJpcFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkSVAoaW5wdXQuZGF0YSwgY2hlY2sudmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiand0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRKV1QoaW5wdXQuZGF0YSwgY2hlY2suYWxnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImp3dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY2lkclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ2lkcihpbnB1dC5kYXRhLCBjaGVjay52ZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImNpZHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiYmFzZTY0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJiYXNlNjR1cmxcIikge1xuICAgICAgICAgICAgICAgIGlmICghYmFzZTY0dXJsUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImJhc2U2NHVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfcmVnZXgocmVnZXgsIHZhbGlkYXRpb24sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lbWVudCgoZGF0YSkgPT4gcmVnZXgudGVzdChkYXRhKSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbixcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWFpbChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZW1haWxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1cmwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInVybFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGVtb2ppKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbW9qaVwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHV1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInV1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBuYW5vaWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcIm5hbm9pZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkMihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZDJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1bGlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1bGlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgYmFzZTY0KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJiYXNlNjRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBiYXNlNjR1cmwobWVzc2FnZSkge1xuICAgICAgICAvLyBiYXNlNjR1cmwgZW5jb2RpbmcgaXMgYSBtb2RpZmljYXRpb24gb2YgYmFzZTY0IHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGluIFVSTHMgYW5kIGZpbGVuYW1lc1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJiYXNlNjR1cmxcIixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGp3dChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiand0XCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgaXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImlwXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgY2lkcihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY2lkclwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGRhdGV0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBwcmVjaXNpb246IHR5cGVvZiBvcHRpb25zPy5wcmVjaXNpb24gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogb3B0aW9ucz8ucHJlY2lzaW9uLFxuICAgICAgICAgICAgb2Zmc2V0OiBvcHRpb25zPy5vZmZzZXQgPz8gZmFsc2UsXG4gICAgICAgICAgICBsb2NhbDogb3B0aW9ucz8ubG9jYWwgPz8gZmFsc2UsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucz8ubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkYXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkYXRlXCIsIG1lc3NhZ2UgfSk7XG4gICAgfVxuICAgIHRpbWUob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJ0aW1lXCIsXG4gICAgICAgICAgICBwcmVjaXNpb246IHR5cGVvZiBvcHRpb25zPy5wcmVjaXNpb24gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogb3B0aW9ucz8ucHJlY2lzaW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHVyYXRpb24obWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImR1cmF0aW9uXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgcmVnZXgocmVnZXgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwicmVnZXhcIixcbiAgICAgICAgICAgIHJlZ2V4OiByZWdleCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluY2x1ZGVzKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImluY2x1ZGVzXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogb3B0aW9ucz8ucG9zaXRpb24sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucz8ubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInN0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImVuZHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkxlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJsZW5ndGhcIixcbiAgICAgICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFcXVpdmFsZW50IHRvIGAubWluKDEpYFxuICAgICAqL1xuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSk7XG4gICAgfVxuICAgIHRyaW0oKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0cmltXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b0xvd2VyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvTG93ZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b1VwcGVyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvVXBwZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNEYXRldGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRldGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRlXCIpO1xuICAgIH1cbiAgICBnZXQgaXNUaW1lKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0R1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImR1cmF0aW9uXCIpO1xuICAgIH1cbiAgICBnZXQgaXNFbWFpbCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJlbWFpbFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVVJMKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInVybFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1vamkoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1vamlcIik7XG4gICAgfVxuICAgIGdldCBpc1VVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXVpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzTkFOT0lEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcIm5hbm9pZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDVUlEMigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkMlwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVUxJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1bGlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNJUCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpcFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ0lEUigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjaWRyXCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0XCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjR1cmwoKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpO1xuICAgIH1cbiAgICBnZXQgbWluTGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RTdHJpbmcuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTdHJpbmcsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgPz8gZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTY2NDg0L3doeS1kb2VzLW1vZHVsdXMtb3BlcmF0b3ItcmV0dXJuLWZyYWN0aW9uYWwtbnVtYmVyLWluLWphdmFzY3JpcHQvMzE3MTEwMzQjMzE3MTEwMzRcbmZ1bmN0aW9uIGZsb2F0U2FmZVJlbWFpbmRlcih2YWwsIHN0ZXApIHtcbiAgICBjb25zdCB2YWxEZWNDb3VudCA9ICh2YWwudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IHN0ZXBEZWNDb3VudCA9IChzdGVwLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBkZWNDb3VudCA9IHZhbERlY0NvdW50ID4gc3RlcERlY0NvdW50ID8gdmFsRGVjQ291bnQgOiBzdGVwRGVjQ291bnQ7XG4gICAgY29uc3QgdmFsSW50ID0gTnVtYmVyLnBhcnNlSW50KHZhbC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgY29uc3Qgc3RlcEludCA9IE51bWJlci5wYXJzZUludChzdGVwLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICByZXR1cm4gKHZhbEludCAlIHN0ZXBJbnQpIC8gMTAgKiogZGVjQ291bnQ7XG59XG5leHBvcnQgY2xhc3MgWm9kTnVtYmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMubXVsdGlwbGVPZjtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gTnVtYmVyKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcImludFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsb2F0U2FmZVJlbWFpbmRlcihpbnB1dC5kYXRhLCBjaGVjay52YWx1ZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZmluaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW50KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluaXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZmluaXRlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzYWZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pblZhbHVlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICBnZXQgaXNJbnQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaW50XCIgfHwgKGNoLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiICYmIHV0aWwuaXNJbnRlZ2VyKGNoLnZhbHVlKSkpO1xuICAgIH1cbiAgICBnZXQgaXNGaW5pdGUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJmaW5pdGVcIiB8fCBjaC5raW5kID09PSBcImludFwiIHx8IGNoLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShtaW4pICYmIE51bWJlci5pc0Zpbml0ZShtYXgpO1xuICAgIH1cbn1cblpvZE51bWJlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bWJlcixcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RCaWdJbnQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW4gPSB0aGlzLmd0ZTtcbiAgICAgICAgdGhpcy5tYXggPSB0aGlzLmx0ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCaWdJbnQoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludmFsaWRJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5iaWdpbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaWdpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEgJSBjaGVjay52YWx1ZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX2dldEludmFsaWRJbnB1dChpbnB1dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJpZ2ludCxcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RCaWdJbnQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCaWdJbnQsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgPz8gZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQm9vbGVhbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJvb2xlYW4oaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5ib29sZWFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJvb2xlYW4sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQm9vbGVhbi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RCb29sZWFuKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCb29sZWFuLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlIHx8IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZERhdGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBuZXcgRGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZGF0ZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oaW5wdXQuZGF0YS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGlucHV0LmRhdGEuZ2V0VGltZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluRGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5EYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhEYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pbkRhdGUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiAhPSBudWxsID8gbmV3IERhdGUobWluKSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBtYXhEYXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXggIT0gbnVsbCA/IG5ldyBEYXRlKG1heCkgOiBudWxsO1xuICAgIH1cbn1cblpvZERhdGUuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgfHwgZmFsc2UsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGF0ZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RTeW1ib2wgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFN5bWJvbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTeW1ib2woe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN5bWJvbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RVbmRlZmluZWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVuZGVmaW5lZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmRlZmluZWQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuZGVmaW5lZCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROdWxsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udWxsLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZE51bGwuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RBbnkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gdG8gcHJldmVudCBpbnN0YW5jZXMgb2Ygb3RoZXIgY2xhc3NlcyBmcm9tIGV4dGVuZGluZyBab2RBbnkuIHRoaXMgY2F1c2VzIGlzc3VlcyB3aXRoIGNhdGNoYWxsIGluIFpvZE9iamVjdC5cbiAgICAgICAgdGhpcy5fYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RBbnkuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQW55KHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5rbm93biBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyByZXF1aXJlZFxuICAgICAgICB0aGlzLl91bmtub3duID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmtub3duLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVua25vd24oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVua25vd24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTmV2ZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5uZXZlcixcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbn1cblpvZE5ldmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5ldmVyKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROZXZlcixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RWb2lkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnZvaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVm9pZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RWb2lkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RWb2lkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEFycmF5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4LCBzdGF0dXMgfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5leGFjdExlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY3R4LmRhdGEubGVuZ3RoID4gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjdHguZGF0YS5sZW5ndGggPCBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBpZiAodG9vQmlnIHx8IHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHRvb0JpZyA/IFpvZElzc3VlQ29kZS50b29fYmlnIDogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogKHRvb1NtYWxsID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogKHRvb0JpZyA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLmV4YWN0TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5taW5MZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPCBkZWYubWluTGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5MZW5ndGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5MZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heExlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5tYXhMZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhMZW5ndGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFsuLi5jdHguZGF0YV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZUFzeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFsuLi5jdHguZGF0YV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGVmLnR5cGUuX3BhcnNlU3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogbWluTGVuZ3RoLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHsgdmFsdWU6IG1heExlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZW5ndGgobGVuLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgZXhhY3RMZW5ndGg6IHsgdmFsdWU6IGxlbiwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RBcnJheS5jcmVhdGUgPSAoc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgdHlwZTogc2NoZW1hLFxuICAgICAgICBtaW5MZW5ndGg6IG51bGwsXG4gICAgICAgIG1heExlbmd0aDogbnVsbCxcbiAgICAgICAgZXhhY3RMZW5ndGg6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQXJyYXksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBkZWVwUGFydGlhbGlmeShzY2hlbWEpIHtcbiAgICBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjaGVtYS5zaGFwZSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSBzY2hlbWEuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoZmllbGRTY2hlbWEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi5zY2hlbWEuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZEFycmF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICB0eXBlOiBkZWVwUGFydGlhbGlmeShzY2hlbWEuZWxlbWVudCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS51bndyYXAoKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2ROdWxsYWJsZSkge1xuICAgICAgICByZXR1cm4gWm9kTnVsbGFibGUuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS51bndyYXAoKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RUdXBsZSkge1xuICAgICAgICByZXR1cm4gWm9kVHVwbGUuY3JlYXRlKHNjaGVtYS5pdGVtcy5tYXAoKGl0ZW0pID0+IGRlZXBQYXJ0aWFsaWZ5KGl0ZW0pKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RPYmplY3QgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIEluIG1vc3QgY2FzZXMsIHRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIHVua25vd24gcHJvcGVydGllcyBhcmUgbm93IHNpbGVudGx5IHN0cmlwcGVkLlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBwYXNzIHRocm91Z2ggdW5rbm93biBwcm9wZXJ0aWVzLCB1c2UgYC5wYXNzdGhyb3VnaCgpYCBpbnN0ZWFkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ub25zdHJpY3QgPSB0aGlzLnBhc3N0aHJvdWdoO1xuICAgICAgICAvLyBleHRlbmQ8XG4gICAgICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGUsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfb3V0cHV0XCJdXG4gICAgICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgICAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+LFxuICAgICAgICAvLyAgIE5ld0lucHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgICAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9pbnB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgICAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgICAgIC8vICAgfT5cbiAgICAgICAgLy8gPihcbiAgICAgICAgLy8gICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgICAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgQXVnbWVudGF0aW9uPixcbiAgICAgICAgLy8gICBVbmtub3duS2V5cyxcbiAgICAgICAgLy8gICBDYXRjaGFsbCxcbiAgICAgICAgLy8gICBOZXdPdXRwdXQsXG4gICAgICAgIC8vICAgTmV3SW5wdXRcbiAgICAgICAgLy8gPiB7XG4gICAgICAgIC8vICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAvLyAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAvLyAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgIC8vICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAvLyAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICB9KSBhcyBhbnk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIFVzZSBgLmV4dGVuZGAgaW5zdGVhZFxuICAgICAgICAgKiAgKi9cbiAgICAgICAgdGhpcy5hdWdtZW50ID0gdGhpcy5leHRlbmQ7XG4gICAgfVxuICAgIF9nZXRDYWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZWQgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgICAgICBjb25zdCBrZXlzID0gdXRpbC5vYmplY3RLZXlzKHNoYXBlKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkID0geyBzaGFwZSwga2V5cyB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwga2V5czogc2hhcGVLZXlzIH0gPSB0aGlzLl9nZXRDYWNoZWQoKTtcbiAgICAgICAgY29uc3QgZXh0cmFLZXlzID0gW107XG4gICAgICAgIGlmICghKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyICYmIHRoaXMuX2RlZi51bmtub3duS2V5cyA9PT0gXCJzdHJpcFwiKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNoYXBlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXBlS2V5cykge1xuICAgICAgICAgICAgY29uc3Qga2V5VmFsaWRhdG9yID0gc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3R4LmRhdGFba2V5XTtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXlWYWxpZGF0b3IuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyKSB7XG4gICAgICAgICAgICBjb25zdCB1bmtub3duS2V5cyA9IHRoaXMuX2RlZi51bmtub3duS2V5cztcbiAgICAgICAgICAgIGlmICh1bmtub3duS2V5cyA9PT0gXCJwYXNzdGhyb3VnaFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGN0eC5kYXRhW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudW5yZWNvZ25pemVkX2tleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBleHRyYUtleXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpcFwiKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIFpvZE9iamVjdCBlcnJvcjogaW52YWxpZCB1bmtub3duS2V5cyB2YWx1ZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJ1biBjYXRjaGFsbCB2YWxpZGF0aW9uXG4gICAgICAgICAgICBjb25zdCBjYXRjaGFsbCA9IHRoaXMuX2RlZi5jYXRjaGFsbDtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3R4LmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRjaGFsbC5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSAvLywgY3R4LmNoaWxkKGtleSksIHZhbHVlLCBnZXRQYXJzZWRUeXBlKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bmNQYWlycyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDogcGFpci5hbHdheXNTZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1BhaXJzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoc3luY1BhaXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNoYXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgfVxuICAgIHN0cmljdChtZXNzYWdlKSB7XG4gICAgICAgIGVycm9yVXRpbC5lcnJUb09iajtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgICAgICAuLi4obWVzc2FnZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwOiAoaXNzdWUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEVycm9yID0gdGhpcy5fZGVmLmVycm9yTWFwPy4oaXNzdWUsIGN0eCkubWVzc2FnZSA/PyBjdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlLmNvZGUgPT09IFwidW5yZWNvZ25pemVkX2tleXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkubWVzc2FnZSA/PyBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBhc3N0aHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJwYXNzdGhyb3VnaFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gY29uc3QgQXVnbWVudEZhY3RvcnkgPVxuICAgIC8vICAgPERlZiBleHRlbmRzIFpvZE9iamVjdERlZj4oZGVmOiBEZWYpID0+XG4gICAgLy8gICA8QXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGU+KFxuICAgIC8vICAgICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgIC8vICAgKTogWm9kT2JqZWN0PFxuICAgIC8vICAgICBleHRlbmRTaGFwZTxSZXR1cm5UeXBlPERlZltcInNoYXBlXCJdPiwgQXVnbWVudGF0aW9uPixcbiAgICAvLyAgICAgRGVmW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICAgIERlZltcImNhdGNoYWxsXCJdXG4gICAgLy8gICA+ID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICAgIC4uLmRlZixcbiAgICAvLyAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAvLyAgICAgICAgIC4uLmRlZi5zaGFwZSgpLFxuICAgIC8vICAgICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgIC8vICAgICAgIH0pLFxuICAgIC8vICAgICB9KSBhcyBhbnk7XG4gICAgLy8gICB9O1xuICAgIGV4dGVuZChhdWdtZW50YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmlvciB0byB6b2RAMS4wLjEyIHRoZXJlIHdhcyBhIGJ1ZyBpbiB0aGVcbiAgICAgKiBpbmZlcnJlZCB0eXBlIG9mIG1lcmdlZCBvYmplY3RzLiBQbGVhc2VcbiAgICAgKiB1cGdyYWRlIGlmIHlvdSBhcmUgZXhwZXJpZW5jaW5nIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBtZXJnZShtZXJnaW5nKSB7XG4gICAgICAgIGNvbnN0IG1lcmdlZCA9IG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAgICAgICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgICAgICAuLi5tZXJnaW5nLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cbiAgICAvLyBtZXJnZTxcbiAgICAvLyAgIEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0LFxuICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgSW5jb21pbmdbXCJzaGFwZVwiXSxcbiAgICAvLyAgIE5ld091dHB1dCBleHRlbmRzIHtcbiAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgT3V0cHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX291dHB1dFwiXVxuICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgIC8vICAgICAgID8gT3V0cHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBOZXdJbnB1dCBleHRlbmRzIHtcbiAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgSW5wdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfaW5wdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgIC8vICAgICAgID8gSW5wdXRba11cbiAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgIC8vICAgfVxuICAgIC8vID4oXG4gICAgLy8gICBtZXJnaW5nOiBJbmNvbWluZ1xuICAgIC8vICk6IFpvZE9iamVjdDxcbiAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIFJldHVyblR5cGU8SW5jb21pbmdbXCJfZGVmXCJdW1wic2hhcGVcIl0+PixcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1wiY2F0Y2hhbGxcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQsXG4gICAgLy8gICBOZXdJbnB1dFxuICAgIC8vID4ge1xuICAgIC8vICAgY29uc3QgbWVyZ2VkOiBhbnkgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAvLyAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAvLyAgICAgc2hhcGU6ICgpID0+XG4gICAgLy8gICAgICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgIC8vICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAvLyAgIHJldHVybiBtZXJnZWQ7XG4gICAgLy8gfVxuICAgIHNldEtleShrZXksIHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdWdtZW50KHsgW2tleV06IHNjaGVtYSB9KTtcbiAgICB9XG4gICAgLy8gbWVyZ2U8SW5jb21pbmcgZXh0ZW5kcyBBbnlab2RPYmplY3Q+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiAvL1pvZE9iamVjdDxUICYgSW5jb21pbmdbXCJfc2hhcGVcIl0sIFVua25vd25LZXlzLCBDYXRjaGFsbD4gPSAobWVyZ2luZykgPT4ge1xuICAgIC8vIFpvZE9iamVjdDxcbiAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIFJldHVyblR5cGU8SW5jb21pbmdbXCJfZGVmXCJdW1wic2hhcGVcIl0+PixcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1wiY2F0Y2hhbGxcIl1cbiAgICAvLyA+IHtcbiAgICAvLyAgIC8vIGNvbnN0IG1lcmdlZFNoYXBlID0gb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyhcbiAgICAvLyAgIC8vICAgdGhpcy5fZGVmLnNoYXBlKCksXG4gICAgLy8gICAvLyAgIG1lcmdpbmcuX2RlZi5zaGFwZSgpXG4gICAgLy8gICAvLyApO1xuICAgIC8vICAgY29uc3QgbWVyZ2VkOiBhbnkgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAvLyAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAvLyAgICAgc2hhcGU6ICgpID0+XG4gICAgLy8gICAgICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgIC8vICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAvLyAgIHJldHVybiBtZXJnZWQ7XG4gICAgLy8gfVxuICAgIGNhdGNoYWxsKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNhdGNoYWxsOiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpY2sobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXMobWFzaykpIHtcbiAgICAgICAgICAgIGlmIChtYXNrW2tleV0gJiYgdGhpcy5zaGFwZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbWl0KG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKSB7XG4gICAgICAgICAgICBpZiAoIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBkZWVwUGFydGlhbCgpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBQYXJ0aWFsaWZ5KHRoaXMpO1xuICAgIH1cbiAgICBwYXJ0aWFsKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWEub3B0aW9uYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1aXJlZChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3RmllbGQgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWVsZCA9IG5ld0ZpZWxkLl9kZWYuaW5uZXJUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gbmV3RmllbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAga2V5b2YoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVab2RFbnVtKHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSk7XG4gICAgfVxufVxuWm9kT2JqZWN0LmNyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RPYmplY3Quc3RyaWN0Q3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RPYmplY3QubGF6eWNyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2RlZi5vcHRpb25zO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXN1bHRzKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBmaXJzdCBpc3N1ZS1mcmVlIHZhbGlkYXRpb24gaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpc3N1ZXMgZnJvbSBkaXJ0eSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5yZXN1bHQuY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXR1cm4gaW52YWxpZFxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiBuZXcgWm9kRXJyb3IocmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvcHRpb25zLm1hcChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBhd2FpdCBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjdHg6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSkudGhlbihoYW5kbGVSZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IGlzc3VlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiICYmICFkaXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJ0eSA9IHsgcmVzdWx0LCBjdHg6IGNoaWxkQ3R4IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEN0eC5jb21tb24uaXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZXMucHVzaChjaGlsZEN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgICAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKC4uLmRpcnR5LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlydHkucmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSBpc3N1ZXMubWFwKChpc3N1ZXMpID0+IG5ldyBab2RFcnJvcihpc3N1ZXMpKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uLFxuICAgICAgICAgICAgICAgIHVuaW9uRXJyb3JzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbn1cblpvZFVuaW9uLmNyZWF0ZSA9ICh0eXBlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmlvbih7XG4gICAgICAgIG9wdGlvbnM6IHR5cGVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuaW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IGdldERpc2NyaW1pbmF0b3IgPSAodHlwZSkgPT4ge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGF6eSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNjaGVtYSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RFZmZlY3RzKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuaW5uZXJUeXBlKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gW3R5cGUudmFsdWVdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRW51bSkge1xuICAgICAgICByZXR1cm4gdHlwZS5vcHRpb25zO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTmF0aXZlRW51bSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RWYWx1ZXModHlwZS5lbnVtKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZERlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5fZGVmLmlubmVyVHlwZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RVbmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWRdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbCkge1xuICAgICAgICByZXR1cm4gW251bGxdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIC4uLmdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSldO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEJyYW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RSZWFkb25seSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZENhdGNoKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn07XG5leHBvcnQgY2xhc3MgWm9kRGlzY3JpbWluYXRlZFVuaW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3IgPSB0aGlzLmRpc2NyaW1pbmF0b3I7XG4gICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3JWYWx1ZSA9IGN0eC5kYXRhW2Rpc2NyaW1pbmF0b3JdO1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm9wdGlvbnNNYXAuZ2V0KGRpc2NyaW1pbmF0b3JWYWx1ZSk7XG4gICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IEFycmF5LmZyb20odGhpcy5vcHRpb25zTWFwLmtleXMoKSksXG4gICAgICAgICAgICAgICAgcGF0aDogW2Rpc2NyaW1pbmF0b3JdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZGlzY3JpbWluYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kaXNjcmltaW5hdG9yO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbiAgICBnZXQgb3B0aW9uc01hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zTWFwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3Igb2YgdGhlIGRpc2NyaW1pbmF0ZWQgdW5pb24gc2NoZW1hLiBJdHMgYmVoYXZpb3VyIGlzIHZlcnkgc2ltaWxhciB0byB0aGF0IG9mIHRoZSBub3JtYWwgei51bmlvbigpIGNvbnN0cnVjdG9yLlxuICAgICAqIEhvd2V2ZXIsIGl0IG9ubHkgYWxsb3dzIGEgdW5pb24gb2Ygb2JqZWN0cywgYWxsIG9mIHdoaWNoIG5lZWQgdG8gc2hhcmUgYSBkaXNjcmltaW5hdG9yIHByb3BlcnR5LiBUaGlzIHByb3BlcnR5IG11c3RcbiAgICAgKiBoYXZlIGEgZGlmZmVyZW50IHZhbHVlIGZvciBlYWNoIG9iamVjdCBpbiB0aGUgdW5pb24uXG4gICAgICogQHBhcmFtIGRpc2NyaW1pbmF0b3IgdGhlIG5hbWUgb2YgdGhlIGRpc2NyaW1pbmF0b3IgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gdHlwZXMgYW4gYXJyYXkgb2Ygb2JqZWN0IHNjaGVtYXNcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZShkaXNjcmltaW5hdG9yLCBvcHRpb25zLCBwYXJhbXMpIHtcbiAgICAgICAgLy8gR2V0IGFsbCB0aGUgdmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZXNcbiAgICAgICAgY29uc3Qgb3B0aW9uc01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3JWYWx1ZXMgPSBnZXREaXNjcmltaW5hdG9yKHR5cGUuc2hhcGVbZGlzY3JpbWluYXRvcl0pO1xuICAgICAgICAgICAgaWYgKCFkaXNjcmltaW5hdG9yVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBkaXNjcmltaW5hdG9yIHZhbHVlIGZvciBrZXkgXFxgJHtkaXNjcmltaW5hdG9yfVxcYCBjb3VsZCBub3QgYmUgZXh0cmFjdGVkIGZyb20gYWxsIHNjaGVtYSBvcHRpb25zYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRpc2NyaW1pbmF0b3JWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc01hcC5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlzY3JpbWluYXRvciBwcm9wZXJ0eSAke1N0cmluZyhkaXNjcmltaW5hdG9yKX0gaGFzIGR1cGxpY2F0ZSB2YWx1ZSAke1N0cmluZyh2YWx1ZSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnNNYXAuc2V0KHZhbHVlLCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZERpc2NyaW1pbmF0ZWRVbmlvbih7XG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERpc2NyaW1pbmF0ZWRVbmlvbixcbiAgICAgICAgICAgIGRpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9uc01hcCxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWVyZ2VWYWx1ZXMoYSwgYikge1xuICAgIGNvbnN0IGFUeXBlID0gZ2V0UGFyc2VkVHlwZShhKTtcbiAgICBjb25zdCBiVHlwZSA9IGdldFBhcnNlZFR5cGUoYik7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUub2JqZWN0ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICBjb25zdCBiS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhiKTtcbiAgICAgICAgY29uc3Qgc2hhcmVkS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhhKS5maWx0ZXIoKGtleSkgPT4gYktleXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgICAgIGNvbnN0IG5ld09iaiA9IHsgLi4uYSwgLi4uYiB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFyZWRLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld09ialtrZXldID0gc2hhcmVkVmFsdWUuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3T2JqIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbUEgPSBhW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1CID0gYltpbmRleF07XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGl0ZW1BLCBpdGVtQik7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNoYXJlZFZhbHVlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdBcnJheSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiYgK2EgPT09ICtiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kSW50ZXJzZWN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGhhbmRsZVBhcnNlZCA9IChwYXJzZWRMZWZ0LCBwYXJzZWRSaWdodCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQWJvcnRlZChwYXJzZWRMZWZ0KSB8fCBpc0Fib3J0ZWQocGFyc2VkUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZVZhbHVlcyhwYXJzZWRMZWZ0LnZhbHVlLCBwYXJzZWRSaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIW1lcmdlZC52YWxpZCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEaXJ0eShwYXJzZWRMZWZ0KSB8fCBpc0RpcnR5KHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBtZXJnZWQuZGF0YSB9O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWYubGVmdC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLnRoZW4oKFtsZWZ0LCByaWdodF0pID0+IGhhbmRsZVBhcnNlZChsZWZ0LCByaWdodCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVBhcnNlZCh0aGlzLl9kZWYubGVmdC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pLCB0aGlzLl9kZWYucmlnaHQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5ab2RJbnRlcnNlY3Rpb24uY3JlYXRlID0gKGxlZnQsIHJpZ2h0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEludGVyc2VjdGlvbih7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RJbnRlcnNlY3Rpb24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLyB0eXBlIFpvZFR1cGxlSXRlbXMgPSBbWm9kVHlwZUFueSwgLi4uWm9kVHlwZUFueVtdXTtcbmV4cG9ydCBjbGFzcyBab2RUdXBsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN0ID0gdGhpcy5fZGVmLnJlc3Q7XG4gICAgICAgIGlmICghcmVzdCAmJiBjdHguZGF0YS5sZW5ndGggPiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFsuLi5jdHguZGF0YV1cbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5fZGVmLml0ZW1zW2l0ZW1JbmRleF0gfHwgdGhpcy5fZGVmLnJlc3Q7XG4gICAgICAgICAgICBpZiAoIXNjaGVtYSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBzY2hlbWEuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaXRlbUluZGV4KSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKCh4KSA9PiAhIXgpOyAvLyBmaWx0ZXIgbnVsbHNcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChpdGVtcykudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pdGVtcztcbiAgICB9XG4gICAgcmVzdChyZXN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmVzdCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuWm9kVHVwbGUuY3JlYXRlID0gKHNjaGVtYXMsIHBhcmFtcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzY2hlbWFzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IG9mIHNjaGVtYXMgdG8gei50dXBsZShbIC4uLiBdKVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgIGl0ZW1zOiBzY2hlbWFzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFR1cGxlLFxuICAgICAgICByZXN0OiBudWxsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFJlY29yZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGN0eC5kYXRhW2tleV0sIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGZpcnN0LCBzZWNvbmQsIHRoaXJkKSB7XG4gICAgICAgIGlmIChzZWNvbmQgaW5zdGFuY2VvZiBab2RUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICAgICAga2V5VHlwZTogZmlyc3QsXG4gICAgICAgICAgICAgICAgdmFsdWVUeXBlOiBzZWNvbmQsXG4gICAgICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlyZCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICBrZXlUeXBlOiBab2RTdHJpbmcuY3JlYXRlKCksXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHNlY29uZCksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RNYXAgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubWFwKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm1hcCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgY29uc3QgcGFpcnMgPSBbLi4uY3R4LmRhdGEuZW50cmllcygpXS5tYXAoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwgW2luZGV4LCBcImtleVwiXSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIFtpbmRleCwgXCJ2YWx1ZVwiXSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kTWFwLmNyZWF0ZSA9IChrZXlUeXBlLCB2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTWFwKHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBrZXlUeXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE1hcCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RTZXQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnNldCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zZXQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChkZWYubWluU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPCBkZWYubWluU2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluU2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5TaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA+IGRlZi5tYXhTaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4U2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhTaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVTZXQoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRTZXQuYWRkKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBwYXJzZWRTZXQgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFsuLi5jdHguZGF0YS52YWx1ZXMoKV0ubWFwKChpdGVtLCBpKSA9PiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpKTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChlbGVtZW50cykudGhlbigoZWxlbWVudHMpID0+IGZpbmFsaXplU2V0KGVsZW1lbnRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxpemVTZXQoZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1pbihtaW5TaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pblNpemU6IHsgdmFsdWU6IG1pblNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heFNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4U2l6ZTogeyB2YWx1ZTogbWF4U2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaXplKHNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKHNpemUsIG1lc3NhZ2UpLm1heChzaXplLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kU2V0LmNyZWF0ZSA9ICh2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtaW5TaXplOiBudWxsLFxuICAgICAgICBtYXhTaXplOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFNldCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RGdW5jdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlID0gdGhpcy5pbXBsZW1lbnQ7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZUFyZ3NJc3N1ZShhcmdzLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCwgY3R4LnNjaGVtYUVycm9yTWFwLCBnZXRFcnJvck1hcCgpLCBkZWZhdWx0RXJyb3JNYXBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VSZXR1cm5zSXNzdWUocmV0dXJucywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJldHVybnMsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIGN0eC5zY2hlbWFFcnJvck1hcCwgZ2V0RXJyb3JNYXAoKSwgZGVmYXVsdEVycm9yTWFwXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlLFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UeXBlRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCB9O1xuICAgICAgICBjb25zdCBmbiA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAodGhpcy5fZGVmLnJldHVybnMgaW5zdGFuY2VvZiBab2RQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soYXN5bmMgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihbXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IGF3YWl0IG1lLl9kZWYuYXJncy5wYXJzZUFzeW5jKGFyZ3MsIHBhcmFtcykuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZUFyZ3NJc3N1ZShhcmdzLCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFJlZmxlY3QuYXBwbHkoZm4sIHRoaXMsIHBhcnNlZEFyZ3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJldHVybnMgPSBhd2FpdCBtZS5fZGVmLnJldHVybnMuX2RlZi50eXBlXG4gICAgICAgICAgICAgICAgICAgIC5wYXJzZUFzeW5jKHJlc3VsdCwgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdvdWxkIGxvdmUgYSB3YXkgdG8gYXZvaWQgZGlzYWJsaW5nIHRoaXMgcnVsZSwgYnV0IHdlIG5lZWRcbiAgICAgICAgICAgIC8vIGFuIGFsaWFzICh1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB3YXMgd2hhdCBjYXVzZWQgMjY1MSkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBPSyhmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBtZS5fZGVmLmFyZ3Muc2FmZVBhcnNlKGFyZ3MsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRBcmdzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlQXJnc0lzc3VlKGFyZ3MsIHBhcnNlZEFyZ3MuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuYXBwbHkoZm4sIHRoaXMsIHBhcnNlZEFyZ3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IG1lLl9kZWYucmV0dXJucy5zYWZlUGFyc2UocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkUmV0dXJucy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBab2RFcnJvcihbbWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIHBhcnNlZFJldHVybnMuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zLmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJhbWV0ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmFyZ3M7XG4gICAgfVxuICAgIHJldHVyblR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYucmV0dXJucztcbiAgICB9XG4gICAgYXJncyguLi5pdGVtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGFyZ3M6IFpvZFR1cGxlLmNyZWF0ZShpdGVtcykucmVzdChab2RVbmtub3duLmNyZWF0ZSgpKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybnMocmV0dXJuVHlwZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJldHVybnM6IHJldHVyblR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0cmljdEltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShhcmdzLCByZXR1cm5zLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICBhcmdzOiAoYXJncyA/IGFyZ3MgOiBab2RUdXBsZS5jcmVhdGUoW10pLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSkpLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJucyB8fCBab2RVbmtub3duLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbixcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZExhenkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQgc2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGxhenlTY2hlbWEgPSB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgICAgIHJldHVybiBsYXp5U2NoZW1hLl9wYXJzZSh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgfVxufVxuWm9kTGF6eS5jcmVhdGUgPSAoZ2V0dGVyLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZExhenkoe1xuICAgICAgICBnZXR0ZXI6IGdldHRlcixcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMYXp5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZExpdGVyYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LmRhdGEgIT09IHRoaXMuX2RlZi52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWwsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHRoaXMuX2RlZi52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZTtcbiAgICB9XG59XG5ab2RMaXRlcmFsLmNyZWF0ZSA9ICh2YWx1ZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMaXRlcmFsKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExpdGVyYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVab2RFbnVtKHZhbHVlcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RFbnVtKHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVudW0sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBab2RFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQuZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlID0gbmV3IFNldCh0aGlzLl9kZWYudmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlLmhhcyhpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgRW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGV4dHJhY3QodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHZhbHVlcywge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZXhjbHVkZSh2YWx1ZXMsIG5ld0RlZiA9IHRoaXMuX2RlZikge1xuICAgICAgICByZXR1cm4gWm9kRW51bS5jcmVhdGUodGhpcy5vcHRpb25zLmZpbHRlcigob3B0KSA9PiAhdmFsdWVzLmluY2x1ZGVzKG9wdCkpLCB7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICAuLi5uZXdEZWYsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblpvZEVudW0uY3JlYXRlID0gY3JlYXRlWm9kRW51bTtcbmV4cG9ydCBjbGFzcyBab2ROYXRpdmVFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVudW1WYWx1ZXMgPSB1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nICYmIGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZSA9IG5ldyBTZXQodXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUuaGFzKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbn1cblpvZE5hdGl2ZUVudW0uY3JlYXRlID0gKHZhbHVlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYXRpdmVFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmF0aXZlRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RQcm9taXNlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnByb21pc2UgJiYgY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUucHJvbWlzZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2lmaWVkID0gY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUucHJvbWlzZSA/IGN0eC5kYXRhIDogUHJvbWlzZS5yZXNvbHZlKGN0eC5kYXRhKTtcbiAgICAgICAgcmV0dXJuIE9LKHByb21pc2lmaWVkLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5wYXJzZUFzeW5jKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblpvZFByb21pc2UuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RQcm9taXNlKHtcbiAgICAgICAgdHlwZTogc2NoZW1hLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFByb21pc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicHJlcHJvY2Vzc1wiKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBlZmZlY3QudHJhbnNmb3JtKGN0eC5kYXRhLCBjaGVja0N0eCk7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJvY2Vzc2VkKS50aGVuKGFzeW5jIChwcm9jZXNzZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInJlZmluZW1lbnRcIikge1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZVJlZmluZW1lbnQgPSAoYWNjKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnJlZmluZW1lbnQoYWNjLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3luYyByZWZpbmVtZW50IGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHZhbHVlIGlzIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pLnRoZW4oKGlubmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVJlZmluZW1lbnQoaW5uZXIudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3luY2hyb25vdXMgdHJhbnNmb3JtIGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pLnRoZW4oKGJhc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGJhc2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCkpLnRoZW4oKHJlc3VsdCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoZWZmZWN0KTtcbiAgICB9XG59XG5ab2RFZmZlY3RzLmNyZWF0ZSA9IChzY2hlbWEsIGVmZmVjdCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIGVmZmVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3MgPSAocHJlcHJvY2Vzcywgc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInByZXByb2Nlc3NcIiwgdHJhbnNmb3JtOiBwcmVwcm9jZXNzIH0sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCB7IFpvZEVmZmVjdHMgYXMgWm9kVHJhbnNmb3JtZXIgfTtcbmV4cG9ydCBjbGFzcyBab2RPcHRpb25hbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RPcHRpb25hbC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPcHRpb25hbCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPcHRpb25hbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROdWxsYWJsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE51bGxhYmxlLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGxhYmxlKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGxhYmxlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZERlZmF1bHQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGxldCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9kZWYuZGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kRGVmYXVsdC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdHlwZW9mIHBhcmFtcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMuZGVmYXVsdCA6ICgpID0+IHBhcmFtcy5kZWZhdWx0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZENhdGNoIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICAvLyBuZXdDdHggaXMgdXNlZCB0byBub3QgY29sbGVjdCBpc3N1ZXMgZnJvbSBpbm5lciB0eXBlcyBpbiBjdHhcbiAgICAgICAgY29uc3QgbmV3Q3R4ID0ge1xuICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YTogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICBwYXRoOiBuZXdDdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDoge1xuICAgICAgICAgICAgICAgIC4uLm5ld0N0eCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvZEVycm9yKG5ld0N0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvZEVycm9yKG5ld0N0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kQ2F0Y2guY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIGNhdGNoVmFsdWU6IHR5cGVvZiBwYXJhbXMuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcy5jYXRjaCA6ICgpID0+IHBhcmFtcy5jYXRjaCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROYU4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5uYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxufVxuWm9kTmFOLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hTih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmFOLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEJSQU5EID0gU3ltYm9sKFwiem9kX2JyYW5kXCIpO1xuZXhwb3J0IGNsYXNzIFpvZEJyYW5kZWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RQaXBlbGluZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuaW4uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShpblJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gdGhpcy5fZGVmLmluLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkaXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFBpcGVsaW5lKHtcbiAgICAgICAgICAgIGluOiBhLFxuICAgICAgICAgICAgb3V0OiBiLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQaXBlbGluZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZFJlYWRvbmx5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgY29uc3QgZnJlZXplID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IE9iamVjdC5mcmVlemUoZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGlzQXN5bmMocmVzdWx0KSA/IHJlc3VsdC50aGVuKChkYXRhKSA9PiBmcmVlemUoZGF0YSkpIDogZnJlZXplKHJlc3VsdCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kUmVhZG9ubHkuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUmVhZG9ubHkoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVhZG9ubHksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgei5jdXN0b20gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiBjbGVhblBhcmFtcyhwYXJhbXMsIGRhdGEpIHtcbiAgICBjb25zdCBwID0gdHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zKGRhdGEpIDogdHlwZW9mIHBhcmFtcyA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcGFyYW1zIH0gOiBwYXJhbXM7XG4gICAgY29uc3QgcDIgPSB0eXBlb2YgcCA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcCB9IDogcDtcbiAgICByZXR1cm4gcDI7XG59XG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tKGNoZWNrLCBfcGFyYW1zID0ge30sIFxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqIFBhc3MgYGZhdGFsYCBpbnRvIHRoZSBwYXJhbXMgb2JqZWN0IGluc3RlYWQ6XG4gKlxuICogYGBgdHNcbiAqIHouc3RyaW5nKCkuY3VzdG9tKCh2YWwpID0+IHZhbC5sZW5ndGggPiA1LCB7IGZhdGFsOiBmYWxzZSB9KVxuICogYGBgXG4gKlxuICovXG5mYXRhbCkge1xuICAgIGlmIChjaGVjaylcbiAgICAgICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKS5zdXBlclJlZmluZSgoZGF0YSwgY3R4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByID0gY2hlY2soZGF0YSk7XG4gICAgICAgICAgICBpZiAociBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZmF0YWwgPSBwYXJhbXMuZmF0YWwgPz8gZmF0YWwgPz8gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gcGFyYW1zLmZhdGFsID8/IGZhdGFsID8/IHRydWU7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHsgY29kZTogXCJjdXN0b21cIiwgLi4ucGFyYW1zLCBmYXRhbDogX2ZhdGFsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpO1xufVxuZXhwb3J0IHsgWm9kVHlwZSBhcyBTY2hlbWEsIFpvZFR5cGUgYXMgWm9kU2NoZW1hIH07XG5leHBvcnQgY29uc3QgbGF0ZSA9IHtcbiAgICBvYmplY3Q6IFpvZE9iamVjdC5sYXp5Y3JlYXRlLFxufTtcbmV4cG9ydCB2YXIgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kO1xuKGZ1bmN0aW9uIChab2RGaXJzdFBhcnR5VHlwZUtpbmQpIHtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTdHJpbmdcIl0gPSBcIlpvZFN0cmluZ1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bWJlclwiXSA9IFwiWm9kTnVtYmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmFOXCJdID0gXCJab2ROYU5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCaWdJbnRcIl0gPSBcIlpvZEJpZ0ludFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJvb2xlYW5cIl0gPSBcIlpvZEJvb2xlYW5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REYXRlXCJdID0gXCJab2REYXRlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3ltYm9sXCJdID0gXCJab2RTeW1ib2xcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmRlZmluZWRcIl0gPSBcIlpvZFVuZGVmaW5lZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxcIl0gPSBcIlpvZE51bGxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBbnlcIl0gPSBcIlpvZEFueVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVua25vd25cIl0gPSBcIlpvZFVua25vd25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROZXZlclwiXSA9IFwiWm9kTmV2ZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RWb2lkXCJdID0gXCJab2RWb2lkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQXJyYXlcIl0gPSBcIlpvZEFycmF5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT2JqZWN0XCJdID0gXCJab2RPYmplY3RcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmlvblwiXSA9IFwiWm9kVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REaXNjcmltaW5hdGVkVW5pb25cIl0gPSBcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEludGVyc2VjdGlvblwiXSA9IFwiWm9kSW50ZXJzZWN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVHVwbGVcIl0gPSBcIlpvZFR1cGxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVjb3JkXCJdID0gXCJab2RSZWNvcmRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RNYXBcIl0gPSBcIlpvZE1hcFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFNldFwiXSA9IFwiWm9kU2V0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRnVuY3Rpb25cIl0gPSBcIlpvZEZ1bmN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGF6eVwiXSA9IFwiWm9kTGF6eVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExpdGVyYWxcIl0gPSBcIlpvZExpdGVyYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFbnVtXCJdID0gXCJab2RFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRWZmZWN0c1wiXSA9IFwiWm9kRWZmZWN0c1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hdGl2ZUVudW1cIl0gPSBcIlpvZE5hdGl2ZUVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPcHRpb25hbFwiXSA9IFwiWm9kT3B0aW9uYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsYWJsZVwiXSA9IFwiWm9kTnVsbGFibGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REZWZhdWx0XCJdID0gXCJab2REZWZhdWx0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQ2F0Y2hcIl0gPSBcIlpvZENhdGNoXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUHJvbWlzZVwiXSA9IFwiWm9kUHJvbWlzZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJyYW5kZWRcIl0gPSBcIlpvZEJyYW5kZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQaXBlbGluZVwiXSA9IFwiWm9kUGlwZWxpbmVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWFkb25seVwiXSA9IFwiWm9kUmVhZG9ubHlcIjtcbn0pKFpvZEZpcnN0UGFydHlUeXBlS2luZCB8fCAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kID0ge30pKTtcbi8vIHJlcXVpcmVzIFRTIDQuNCtcbmNsYXNzIENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvciguLi5fKSB7IH1cbn1cbmNvbnN0IGluc3RhbmNlT2ZUeXBlID0gKFxuLy8gY29uc3QgaW5zdGFuY2VPZlR5cGUgPSA8VCBleHRlbmRzIG5ldyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG5jbHMsIHBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBgSW5wdXQgbm90IGluc3RhbmNlIG9mICR7Y2xzLm5hbWV9YCxcbn0pID0+IGN1c3RvbSgoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIGNscywgcGFyYW1zKTtcbmNvbnN0IHN0cmluZ1R5cGUgPSBab2RTdHJpbmcuY3JlYXRlO1xuY29uc3QgbnVtYmVyVHlwZSA9IFpvZE51bWJlci5jcmVhdGU7XG5jb25zdCBuYW5UeXBlID0gWm9kTmFOLmNyZWF0ZTtcbmNvbnN0IGJpZ0ludFR5cGUgPSBab2RCaWdJbnQuY3JlYXRlO1xuY29uc3QgYm9vbGVhblR5cGUgPSBab2RCb29sZWFuLmNyZWF0ZTtcbmNvbnN0IGRhdGVUeXBlID0gWm9kRGF0ZS5jcmVhdGU7XG5jb25zdCBzeW1ib2xUeXBlID0gWm9kU3ltYm9sLmNyZWF0ZTtcbmNvbnN0IHVuZGVmaW5lZFR5cGUgPSBab2RVbmRlZmluZWQuY3JlYXRlO1xuY29uc3QgbnVsbFR5cGUgPSBab2ROdWxsLmNyZWF0ZTtcbmNvbnN0IGFueVR5cGUgPSBab2RBbnkuY3JlYXRlO1xuY29uc3QgdW5rbm93blR5cGUgPSBab2RVbmtub3duLmNyZWF0ZTtcbmNvbnN0IG5ldmVyVHlwZSA9IFpvZE5ldmVyLmNyZWF0ZTtcbmNvbnN0IHZvaWRUeXBlID0gWm9kVm9pZC5jcmVhdGU7XG5jb25zdCBhcnJheVR5cGUgPSBab2RBcnJheS5jcmVhdGU7XG5jb25zdCBvYmplY3RUeXBlID0gWm9kT2JqZWN0LmNyZWF0ZTtcbmNvbnN0IHN0cmljdE9iamVjdFR5cGUgPSBab2RPYmplY3Quc3RyaWN0Q3JlYXRlO1xuY29uc3QgdW5pb25UeXBlID0gWm9kVW5pb24uY3JlYXRlO1xuY29uc3QgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSA9IFpvZERpc2NyaW1pbmF0ZWRVbmlvbi5jcmVhdGU7XG5jb25zdCBpbnRlcnNlY3Rpb25UeXBlID0gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZTtcbmNvbnN0IHR1cGxlVHlwZSA9IFpvZFR1cGxlLmNyZWF0ZTtcbmNvbnN0IHJlY29yZFR5cGUgPSBab2RSZWNvcmQuY3JlYXRlO1xuY29uc3QgbWFwVHlwZSA9IFpvZE1hcC5jcmVhdGU7XG5jb25zdCBzZXRUeXBlID0gWm9kU2V0LmNyZWF0ZTtcbmNvbnN0IGZ1bmN0aW9uVHlwZSA9IFpvZEZ1bmN0aW9uLmNyZWF0ZTtcbmNvbnN0IGxhenlUeXBlID0gWm9kTGF6eS5jcmVhdGU7XG5jb25zdCBsaXRlcmFsVHlwZSA9IFpvZExpdGVyYWwuY3JlYXRlO1xuY29uc3QgZW51bVR5cGUgPSBab2RFbnVtLmNyZWF0ZTtcbmNvbnN0IG5hdGl2ZUVudW1UeXBlID0gWm9kTmF0aXZlRW51bS5jcmVhdGU7XG5jb25zdCBwcm9taXNlVHlwZSA9IFpvZFByb21pc2UuY3JlYXRlO1xuY29uc3QgZWZmZWN0c1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZTtcbmNvbnN0IG9wdGlvbmFsVHlwZSA9IFpvZE9wdGlvbmFsLmNyZWF0ZTtcbmNvbnN0IG51bGxhYmxlVHlwZSA9IFpvZE51bGxhYmxlLmNyZWF0ZTtcbmNvbnN0IHByZXByb2Nlc3NUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcztcbmNvbnN0IHBpcGVsaW5lVHlwZSA9IFpvZFBpcGVsaW5lLmNyZWF0ZTtcbmNvbnN0IG9zdHJpbmcgPSAoKSA9PiBzdHJpbmdUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9udW1iZXIgPSAoKSA9PiBudW1iZXJUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9ib29sZWFuID0gKCkgPT4gYm9vbGVhblR5cGUoKS5vcHRpb25hbCgpO1xuZXhwb3J0IGNvbnN0IGNvZXJjZSA9IHtcbiAgICBzdHJpbmc6ICgoYXJnKSA9PiBab2RTdHJpbmcuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIG51bWJlcjogKChhcmcpID0+IFpvZE51bWJlci5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgYm9vbGVhbjogKChhcmcpID0+IFpvZEJvb2xlYW4uY3JlYXRlKHtcbiAgICAgICAgLi4uYXJnLFxuICAgICAgICBjb2VyY2U6IHRydWUsXG4gICAgfSkpLFxuICAgIGJpZ2ludDogKChhcmcpID0+IFpvZEJpZ0ludC5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgZGF0ZTogKChhcmcpID0+IFpvZERhdGUuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxufTtcbmV4cG9ydCB7IGFueVR5cGUgYXMgYW55LCBhcnJheVR5cGUgYXMgYXJyYXksIGJpZ0ludFR5cGUgYXMgYmlnaW50LCBib29sZWFuVHlwZSBhcyBib29sZWFuLCBkYXRlVHlwZSBhcyBkYXRlLCBkaXNjcmltaW5hdGVkVW5pb25UeXBlIGFzIGRpc2NyaW1pbmF0ZWRVbmlvbiwgZWZmZWN0c1R5cGUgYXMgZWZmZWN0LCBlbnVtVHlwZSBhcyBlbnVtLCBmdW5jdGlvblR5cGUgYXMgZnVuY3Rpb24sIGluc3RhbmNlT2ZUeXBlIGFzIGluc3RhbmNlb2YsIGludGVyc2VjdGlvblR5cGUgYXMgaW50ZXJzZWN0aW9uLCBsYXp5VHlwZSBhcyBsYXp5LCBsaXRlcmFsVHlwZSBhcyBsaXRlcmFsLCBtYXBUeXBlIGFzIG1hcCwgbmFuVHlwZSBhcyBuYW4sIG5hdGl2ZUVudW1UeXBlIGFzIG5hdGl2ZUVudW0sIG5ldmVyVHlwZSBhcyBuZXZlciwgbnVsbFR5cGUgYXMgbnVsbCwgbnVsbGFibGVUeXBlIGFzIG51bGxhYmxlLCBudW1iZXJUeXBlIGFzIG51bWJlciwgb2JqZWN0VHlwZSBhcyBvYmplY3QsIG9ib29sZWFuLCBvbnVtYmVyLCBvcHRpb25hbFR5cGUgYXMgb3B0aW9uYWwsIG9zdHJpbmcsIHBpcGVsaW5lVHlwZSBhcyBwaXBlbGluZSwgcHJlcHJvY2Vzc1R5cGUgYXMgcHJlcHJvY2VzcywgcHJvbWlzZVR5cGUgYXMgcHJvbWlzZSwgcmVjb3JkVHlwZSBhcyByZWNvcmQsIHNldFR5cGUgYXMgc2V0LCBzdHJpY3RPYmplY3RUeXBlIGFzIHN0cmljdE9iamVjdCwgc3RyaW5nVHlwZSBhcyBzdHJpbmcsIHN5bWJvbFR5cGUgYXMgc3ltYm9sLCBlZmZlY3RzVHlwZSBhcyB0cmFuc2Zvcm1lciwgdHVwbGVUeXBlIGFzIHR1cGxlLCB1bmRlZmluZWRUeXBlIGFzIHVuZGVmaW5lZCwgdW5pb25UeXBlIGFzIHVuaW9uLCB1bmtub3duVHlwZSBhcyB1bmtub3duLCB2b2lkVHlwZSBhcyB2b2lkLCB9O1xuZXhwb3J0IGNvbnN0IE5FVkVSID0gSU5WQUxJRDtcbiIsIi8qKlxuICogTWVzc2FnaW5nIHByb3RvY29sIGZvciBDYWxtV2ViXG4gKlxuICogRGVmaW5lcyBtZXNzYWdlIHR5cGVzIGFuZCBwYXlsb2FkcyBmb3IgY29tbXVuaWNhdGlvbiBiZXR3ZWVuXG4gKiBjb250ZW50IHNjcmlwdHMsIGJhY2tncm91bmQgd29ya2VyLCBwb3B1cCwgYW5kIG9wdGlvbnMgcGFnZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IENvbnRlbnRVbml0LCBDbGFzc2lmaWNhdGlvblJlc3VsdCwgVXNlclNldHRpbmdzLCBTdGF0cyB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgVHlwZSBDb25zdGFudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gIC8vIENsYXNzaWZpY2F0aW9uXG4gIENMQVNTSUZZX1VOSVQ6ICdjYWxtd2ViOmNsYXNzaWZ5VW5pdCcsXG4gIC8vIFNldHRpbmdzIG1hbmFnZW1lbnRcbiAgR0VUX1NFVFRJTkdTOiAnY2FsbXdlYjpnZXRTZXR0aW5ncycsXG4gIFVQREFURV9TRVRUSU5HUzogJ2NhbG13ZWI6dXBkYXRlU2V0dGluZ3MnLFxuICAvLyBDYWNoZSBtYW5hZ2VtZW50XG4gIENMRUFSX0NBQ0hFOiAnY2FsbXdlYjpjbGVhckNhY2hlJyxcbiAgLy8gU3RhdGlzdGljc1xuICBHRVRfU1RBVFM6ICdjYWxtd2ViOmdldFN0YXRzJyxcbiAgSU5DUkVNRU5UX1NUQVQ6ICdjYWxtd2ViOmluY3JlbWVudFN0YXQnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTWVzc2FnZVR5cGUgPSB0eXBlb2YgTUVTU0FHRV9UWVBFU1trZXlvZiB0eXBlb2YgTUVTU0FHRV9UWVBFU107XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lc3NhZ2UgUGF5bG9hZCBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIENsYXNzaWZ5VW5pdE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUVTU0FHRV9UWVBFUy5DTEFTU0lGWV9VTklUO1xuICB1bml0OiBDb250ZW50VW5pdDtcbn1cblxuZXhwb3J0IHR5cGUgQ2xhc3NpZnlVbml0UmVzcG9uc2UgPSBDbGFzc2lmaWNhdGlvblJlc3VsdCB8IHsgZXJyb3I6IHN0cmluZyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEdldFNldHRpbmdzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkdFVF9TRVRUSU5HUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXR0aW5nc01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUVTU0FHRV9UWVBFUy5VUERBVEVfU0VUVElOR1M7XG4gIHNldHRpbmdzOiBQYXJ0aWFsPFVzZXJTZXR0aW5ncz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlU2V0dGluZ3NSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJDYWNoZU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUVTU0FHRV9UWVBFUy5DTEVBUl9DQUNIRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckNhY2hlUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFN0YXRzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLkdFVF9TVEFUUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmNyZW1lbnRTdGF0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNRVNTQUdFX1RZUEVTLklOQ1JFTUVOVF9TVEFUO1xuICBrZXk6ICd0b3RhbEZpbHRlcmVkJztcbiAgYW1vdW50PzogbnVtYmVyO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVbmlvbiBUeXBlIGZvciBBbGwgTWVzc2FnZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgQ2FsbVdlYk1lc3NhZ2UgPSBcbiAgfCBDbGFzc2lmeVVuaXRNZXNzYWdlXG4gIHwgR2V0U2V0dGluZ3NNZXNzYWdlXG4gIHwgVXBkYXRlU2V0dGluZ3NNZXNzYWdlXG4gIHwgQ2xlYXJDYWNoZU1lc3NhZ2VcbiAgfCBHZXRTdGF0c01lc3NhZ2VcbiAgfCBJbmNyZW1lbnRTdGF0TWVzc2FnZTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVzcG9uc2UgVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgR2V0U2V0dGluZ3NSZXNwb25zZSA9IFVzZXJTZXR0aW5ncztcbmV4cG9ydCB0eXBlIEdldFN0YXRzUmVzcG9uc2UgPSBTdGF0cztcbmV4cG9ydCB0eXBlIEluY3JlbWVudFN0YXRSZXNwb25zZSA9IFN0YXRzO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIFZhbGlkYXRpb24gKHJ1bnRpbWUpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5jb25zdCBDbGFzc2lmeVVuaXRNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5DTEFTU0lGWV9VTklUKSxcbiAgdW5pdDogei5vYmplY3Qoe1xuICAgIGlkOiB6LnN0cmluZygpLFxuICAgIHNpdGU6IHouc3RyaW5nKCksXG4gICAgZmluZ2VycHJpbnQ6IHouc3RyaW5nKCksXG4gICAgc291cmNlTmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIHRpdGxlOiB6LnN0cmluZygpLFxuICAgIG1ldGFkYXRhOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICAgIGlzTmV3OiB6LmJvb2xlYW4oKSxcbiAgICB1cmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKSxcbiAgfSksXG59KTtcblxuY29uc3QgR2V0U2V0dGluZ3NNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5HRVRfU0VUVElOR1MpLFxufSk7XG5cbmNvbnN0IFVwZGF0ZVNldHRpbmdzTWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHlwZTogei5saXRlcmFsKE1FU1NBR0VfVFlQRVMuVVBEQVRFX1NFVFRJTkdTKSxcbiAgc2V0dGluZ3M6IHoub2JqZWN0KHtcbiAgICBlbmFibGVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJ1bGVzOiB6Lm9iamVjdCh7XG4gICAgICBibG9ja2xpc3RDaGFubmVsczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgYmxvY2tsaXN0S2V5d29yZHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICAgIGFsbG93bGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBhbGxvd2xpc3RLZXl3b3Jkczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgcHJlc2V0czogei5vYmplY3Qoe1xuICAgICAgICBwb2xpdGljczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgICAgcmFnZWJhaXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICAgIHNwb2lsZXJzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgICAgICBjbGlja2JhaXQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICB9KS5vcHRpb25hbCgpLFxuICAgIH0pLm9wdGlvbmFsKCksXG4gIH0pLFxufSk7XG5cbmNvbnN0IENsZWFyQ2FjaGVNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5DTEVBUl9DQUNIRSksXG59KTtcblxuY29uc3QgR2V0U3RhdHNNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5HRVRfU1RBVFMpLFxufSk7XG5cbmNvbnN0IEluY3JlbWVudFN0YXRNZXNzYWdlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0eXBlOiB6LmxpdGVyYWwoTUVTU0FHRV9UWVBFUy5JTkNSRU1FTlRfU1RBVCksXG4gIGtleTogei5saXRlcmFsKCd0b3RhbEZpbHRlcmVkJyksXG4gIGFtb3VudDogei5udW1iZXIoKS5vcHRpb25hbCgpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlU2NoZW1hID0gei5kaXNjcmltaW5hdGVkVW5pb24oJ3R5cGUnLCBbXG4gIENsYXNzaWZ5VW5pdE1lc3NhZ2VTY2hlbWEsXG4gIEdldFNldHRpbmdzTWVzc2FnZVNjaGVtYSxcbiAgVXBkYXRlU2V0dGluZ3NNZXNzYWdlU2NoZW1hLFxuICBDbGVhckNhY2hlTWVzc2FnZVNjaGVtYSxcbiAgR2V0U3RhdHNNZXNzYWdlU2NoZW1hLFxuICBJbmNyZW1lbnRTdGF0TWVzc2FnZVNjaGVtYSxcbl0pO1xuXG4vKipcbiAqIFZhbGlkYXRlIGEgbWVzc2FnZSBwYXlsb2FkIGFnYWluc3QgdGhlIHNjaGVtYS5cbiAqIFRocm93cyBpZiBpbnZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKG1lc3NhZ2U6IHVua25vd24pOiBDYWxtV2ViTWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlIGFzIENhbG1XZWJNZXNzYWdlO1xufVxuIiwiLyoqXG4gKiBQb2xpdGljcyBQcmVzZXQgZm9yIENhbG1XZWJcbiAqIFxuICogRmlsdGVycyBwb2xpdGljYWwgY29udGVudCBpbmNsdWRpbmcgZWxlY3Rpb24gY292ZXJhZ2UsIHBhcnRpc2FuIGRlYmF0ZXMsXG4gKiBhbmQgcG9saXRpY2FsIGNvbW1lbnRhcnkuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBGaWx0ZXJQcmVzZXQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHBvbGl0aWNzUHJlc2V0OiBGaWx0ZXJQcmVzZXQgPSB7XG4gIGlkOiAncG9saXRpY3MnLFxuICBuYW1lOiAnUG9saXRpY3MgU2hpZWxkJyxcbiAgZGVzY3JpcHRpb246ICdIaWRlIGVsZWN0aW9uLCBwYXJ0aXNhbiBkZWJhdGVzLCBhbmQgcG9saXRpY2FsIGNvbW1lbnRhcnknLFxuICB2ZXJzaW9uOiAnMS4wLjAnLFxuICB1cGRhdGVkOiAnMjAyNC0wMS0xNScsXG4gIGF1dGhvcjogJ0NhbG1XZWInLFxuICBcbiAgcGF0dGVybnM6IHtcbiAgICBrZXl3b3JkczogW1xuICAgICAgJ2VsZWN0aW9uJywgJ3ZvdGUnLCAndm90aW5nJywgJ2JhbGxvdCcsICdjYW1wYWlnbicsICdjYW5kaWRhdGUnLCAncG9sbCcsICdwb2xsaW5nJyxcbiAgICAgICdkZW1vY3JhdCcsICdkZW1vY3JhdGljJywgJ3JlcHVibGljYW4nLCAnZ29wJywgJ2xpYmVyYWwnLCAnY29uc2VydmF0aXZlJyxcbiAgICAgICdwcm9ncmVzc2l2ZScsICdzb2NpYWxpc3QnLCAnbWFyeGlzdCcsICdsaWJlcnRhcmlhbicsXG4gICAgICAnYmlkZW4nLCAndHJ1bXAnLCAnb2JhbWEnLCAnY2xpbnRvbicsICdzYW5kZXJzJywgJ3BlbG9zaScsICdtY2Nvbm5lbGwnLFxuICAgICAgJ2NvbmdyZXNzJywgJ3NlbmF0ZScsICdob3VzZScsICd3aGl0ZSBob3VzZScsICdwcmVzaWRlbnQnLCAncHJlc2lkZW50aWFsJyxcbiAgICAgICdwYXJsaWFtZW50JywgJ3ByaW1lIG1pbmlzdGVyJywgJ21wICcsICdsZWdpc2xhdHVyZScsICdsZWdpc2xhdGl2ZScsXG4gICAgICAncG9saXRpY2FsJywgJ3BvbGl0aWNzJywgJ3BhcnRpc2FuJywgJ2JpcGFydGlzYW4nLFxuICAgICAgJ2xlZnQtd2luZycsICdyaWdodC13aW5nJywgJ2Zhci1sZWZ0JywgJ2Zhci1yaWdodCcsXG4gICAgICAnY25uJywgJ2ZveCBuZXdzJywgJ21zbmJjJywgJ2JyZWl0YmFydCcsICdodWZmcG9zdCcsICdwb2xpdGljbycsICd0aGUgaGlsbCcsXG4gICAgICAndm90ZXInLCAnY29uc3RpdHVlbnQnLCAnY29uc3RpdHVlbmN5JyxcbiAgICAgICdkZW0nLCAncmVwdWInLCAnbGliJywgJ2NvbicsXG4gICAgXSxcbiAgICBjaGFubmVsczogW1xuICAgICAgJ2NubicsICdmb3ggbmV3cycsICdtc25iYycsICdiYmMgbmV3cycsICdhYmMgbmV3cycsICduYmMgbmV3cycsICdjYnMgbmV3cycsXG4gICAgICAncG9saXRpY28nLCAndGhlIGhpbGwnLCAnYnJlaXRiYXJ0JywgJ2h1ZmZwb3N0JywgJ3ZveCcsICdzbGF0ZScsICdzYWxvbicsXG4gICAgICAnZGFpbHkgd2lyZScsICd0aGUgYmxhemUnLCAnaW5mb3dhcnMnLCAndGhlIHlvdW5nIHR1cmtzJyxcbiAgICAgICduZXcgeW9yayB0aW1lcycsICd3YXNoaW5ndG9uIHBvc3QnLCAnd2FsbCBzdHJlZXQgam91cm5hbCcsXG4gICAgICAnZ3VhcmRpYW4nLCAndGVsZWdyYXBoJywgJ2luZGVwZW5kZW50JyxcbiAgICAgICd0aGUgZWNvbm9taXN0JywgJ2ZvcmVpZ24gcG9saWN5JywgJ2ZvcmVpZ24gYWZmYWlycycsXG4gICAgICAnam9lIHJvZ2FuJywgJ2JlbiBzaGFwaXJvJywgJ3R1Y2tlciBjYXJsc29uJywgJ3JhY2hlbCBtYWRkb3cnLFxuICAgICAgJ3NlYW4gaGFubml0eScsICdsYXVyYSBpbmdyYWhhbScsICdjaHJpcyBoYXllcycsXG4gICAgXSxcbiAgICByZWdleDogW1xuICAgICAgJ1xcXFxiKDIwXFxcXGR7Mn1cXFxccysoZWxlY3Rpb258cHJlc2lkZW50aWFsKSlcXFxcYicsXG4gICAgICAnXFxcXGIodm90ZVxcXFxzKyhmb3J8YWdhaW5zdHxibHVlfHJlZHxkZW18cmVwKSlcXFxcYicsXG4gICAgICAnXFxcXGIoZGVtb2NyYXQoaWMpP1xcXFxzKyhwYXJ0eXxjYW5kaWRhdGV8cGxhdGZvcm0pKVxcXFxiJyxcbiAgICAgICdcXFxcYihyZXB1YmxpY2FuXFxcXHMrKHBhcnR5fGNhbmRpZGF0ZXxwbGF0Zm9ybSkpXFxcXGInLFxuICAgICAgJ1xcXFxiKG1pZHRlcm1cXFxccytlbGVjdGlvbnM/KVxcXFxiJyxcbiAgICAgICdcXFxcYihwcmltYXJ5XFxcXHMrKGVsZWN0aW9ufHNlYXNvbnxkYXkpKVxcXFxiJyxcbiAgICBdLFxuICB9LFxuICBcbiAgYWN0aW9uczoge1xuICAgIGRlZmF1bHQ6ICdjb2xsYXBzZScsXG4gICAgY29uZmlkZW5jZTogMC44NSxcbiAgfSxcbn07IiwiLyoqXG4gKiBSYWdlYmFpdCBQcmVzZXQgZm9yIENhbG1XZWJcbiAqIFxuICogRmlsdGVycyBjb250ZW50IGRlc2lnbmVkIHRvIHRyaWdnZXIgYW5nZXIsIG91dHJhZ2UsIG9yIGVtb3Rpb25hbCByZXNwb25zZXMuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBGaWx0ZXJQcmVzZXQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHJhZ2ViYWl0UHJlc2V0OiBGaWx0ZXJQcmVzZXQgPSB7XG4gIGlkOiAncmFnZWJhaXQnLFxuICBuYW1lOiAnUmFnZWJhaXQgU2hpZWxkJyxcbiAgZGVzY3JpcHRpb246ICdTaWxlbmNlIGNvbnRlbnQgZGVzaWduZWQgc3BlY2lmaWNhbGx5IHRvIHRyaWdnZXIgYW5nZXInLFxuICB2ZXJzaW9uOiAnMS4wLjAnLFxuICB1cGRhdGVkOiAnMjAyNC0wMS0xNScsXG4gIGF1dGhvcjogJ0NhbG1XZWInLFxuICBcbiAgcGF0dGVybnM6IHtcbiAgICBrZXl3b3JkczogW1xuICAgICAgJ291dHJhZ2UnLCAnb3V0cmFnZWQnLCAnb3V0cmFnaW5nJywgJ2Rpc2d1c3RpbmcnLCAnaG9ycmlmaWMnLCAndGVycmlibGUnLFxuICAgICAgJ21ha2VzIHlvdSBtYWQnLCAnbWFrZSB5b3UgYW5ncnknLCAnd2lsbCBtYWtlIHlvdSBmdXJpb3VzJywgJ3RoaXMgd2lsbCBlbnJhZ2UnLFxuICAgICAgJ2FuZ3J5JywgJ2Z1cmlvdXMnLCAnZnVtZScsICdmdW1pbmcnLCAncmFnZScsICdlbnJhZ2VkJywgJ2luZnVyaWF0aW5nJyxcbiAgICAgICdkZXNwaWNhYmxlJywgJ2Rpc2dyYWNlZnVsJywgJ3NoYW1lZnVsJywgJ2FwcGFsbGluZycsICdhYmhvcnJlbnQnLFxuICAgICAgJ3JhbnQnLCAnZGVzdHJveWVkJywgJ2RlbW9saXNoZWQnLCAnYW5uaWhpbGF0ZWQnLCAnd3JlY2tlZCcsXG4gICAgICAnaGF0ZScsICdoYXRyZWQnLCAnaGF0ZWZ1bCcsICdsb2F0aGUnLCAnZGVzcGlzZScsXG4gICAgICAnc2NhbmRhbCcsICdzY2FuZGFsb3VzJywgJ2NvbnRyb3ZlcnN5JywgJ2NvbnRyb3ZlcnNpYWwnLFxuICAgICAgJ2V4cG9zZWQnLCAnY2F1Z2h0JywgJ2J1c3RlZCcsICdibGFzdGVkJywgJ3NsYW1tZWQnLFxuICAgICAgJ2V2ZXJ5b25lIGlzIHRhbGtpbmcgYWJvdXQnLCAndHJlbmRpbmcnLCAndmlyYWwnLFxuICAgICAgJ2JhY2tsYXNoJywgJ3Vwcm9hcicsICdmaXJlc3Rvcm0nLCAnZnVyeScsXG4gICAgICAna2FyZW4nLCAnZW50aXRsZWQnLCAnYnJpZGV6aWxsYScsICdjaG9vc2luZyBiZWdnYXInLFxuICAgICAgJ2ZhaXRoIGluIGh1bWFuaXR5JywgJ2xvc3QgZmFpdGgnLCAnbG9zZSBmYWl0aCcsXG4gICAgICAnaW5zdGFudCBrYXJtYScsICdqdXN0aWNlIHNlcnZlZCcsICdwZXR0eSByZXZlbmdlJyxcbiAgICAgICdhdWRhY2l0eScsICd0aGUgbmVydmUnLCAndW5hY2NlcHRhYmxlJyxcbiAgICAgICdibG9vZCBib2lsJywgJ2Jsb29kIGJvaWxpbmcnLCAnbWFrZXMgbXkgYmxvb2QnLFxuICAgICAgJ2xvc2UgeW91ciBtaW5kJywgJ2xvc2luZyBteSBtaW5kJywgJ2xvc3QgbXkgbWluZCcsXG4gICAgXSxcbiAgICBjaGFubmVsczogW10sXG4gICAgcmVnZXg6IFtcbiAgICAgICdcXFxcYih0aGlzXFxcXHMrd2lsbFxcXFxzK21ha2VcXFxccyt5b3VcXFxccysobWFkfGFuZ3J5fGZ1cmlvdXN8cmFnZSkpXFxcXGInLFxuICAgICAgJ1xcXFxiKHlvdVxcXFxzK3dvblxcJ3RcXFxccytiZWxpZXZlXFxcXHMrd2hhdClcXFxcYicsXG4gICAgICAnXFxcXGIob3V0cmFnZVxcXFxzKyhvdmVyfGF0fGFmdGVyKSlcXFxcYicsXG4gICAgICAnXFxcXGIoYmFja2xhc2hcXFxccysoYWZ0ZXJ8b3ZlcnxlcnVwdHMpKVxcXFxiJyxcbiAgICAgICdcXFxcYihldmVyeW9uZVxcXFxzK2lzXFxcXHMrKG1hZHxhbmdyeXxmdXJpb3VzfG91dHJhZ2VkKSlcXFxcYicsXG4gICAgXSxcbiAgfSxcbiAgXG4gIGFjdGlvbnM6IHtcbiAgICBkZWZhdWx0OiAnY29sbGFwc2UnLFxuICAgIGNvbmZpZGVuY2U6IDAuOCxcbiAgfSxcbn07IiwiLyoqXG4gKiBTcG9pbGVycyBQcmVzZXQgZm9yIENhbG1XZWJcbiAqIFxuICogUHJvdGVjdHMgYWdhaW5zdCBwbG90IGxlYWtzLCBlbmRpbmdzLCBhbmQgc3BvaWxlcnMgZm9yIG1lZGlhIGNvbnRlbnQuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBGaWx0ZXJQcmVzZXQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHNwb2lsZXJzUHJlc2V0OiBGaWx0ZXJQcmVzZXQgPSB7XG4gIGlkOiAnc3BvaWxlcnMnLFxuICBuYW1lOiAnU3BvaWxlciBTaGllbGQnLFxuICBkZXNjcmlwdGlvbjogJ1Byb3RlY3QgeW91ciBleHBlcmllbmNlIGZyb20gcGxvdCBsZWFrcyBhbmQgZW5kaW5ncycsXG4gIHZlcnNpb246ICcxLjAuMCcsXG4gIHVwZGF0ZWQ6ICcyMDI0LTAxLTE1JyxcbiAgYXV0aG9yOiAnQ2FsbVdlYicsXG4gIFxuICBwYXR0ZXJuczoge1xuICAgIGtleXdvcmRzOiBbXG4gICAgICAnc3BvaWxlcicsICdzcG9pbGVycycsICdzcG9pbCcsICdzcG9pbGVkJyxcbiAgICAgICdlbmRpbmcnLCAnZW5kaW5nIGV4cGxhaW5lZCcsICdlbmRpbmcgcmV2ZWFsZWQnLCAndGhlIGVuZGluZycsXG4gICAgICAndHdpc3QnLCAncGxvdCB0d2lzdCcsICdzdXJwcmlzZSBlbmRpbmcnLCAnc2hvY2tpbmcgZW5kaW5nJyxcbiAgICAgICdkaWVzJywgJ2RlYXRoJywgJ2tpbGxlZCcsICdtdXJkZXJlZCcsICdtdXJkZXInLCAna2lsbGVyJyxcbiAgICAgICdwbG90IGxlYWsnLCAnbGVha2VkJywgJ2xlYWtzJyxcbiAgICAgICdyZXZlYWxlZCcsICdyZXZlbGF0aW9uJywgJ3JldmVhbCcsXG4gICAgICAnZmluYWxlJywgJ3NlYXNvbiBmaW5hbGUnLCAnc2VyaWVzIGZpbmFsZScsICdmaW5hbCBlcGlzb2RlJyxcbiAgICAgICd3aG8gZGlkIGl0JywgJ3dob2R1bml0JywgJ3RoZSBraWxsZXIgaXMnLCAndGhlIGN1bHByaXQnLFxuICAgICAgJ3NlY3JldCBlbmRpbmcnLCAnYWx0ZXJuYXRlIGVuZGluZycsICdwb3N0LWNyZWRpdHMnLFxuICAgICAgJ2FmdGVyIGNyZWRpdHMnLCAnbWlkLWNyZWRpdHMnLCAnZWFzdGVyIGVnZycsXG4gICAgICAnZXhwbGFpbmVkJywgJ2JyZWFrZG93bicsICdhbmFseXNpcycsXG4gICAgICAnY2hhcmFjdGVyIGRlYXRoJywgJ21haW4gY2hhcmFjdGVyIGRpZXMnLFxuICAgIF0sXG4gICAgY2hhbm5lbHM6IFtdLFxuICAgIHJlZ2V4OiBbXG4gICAgICAnXFxcXGIoc3BvaWxlclxcXFxzKihhbGVydHx3YXJuaW5nfGJlbG93KT8pXFxcXGInLFxuICAgICAgJ1xcXFxiKGVuZGluZ1xcXFxzKyhleHBsYWluZWR8cmV2ZWFsZWR8YnJlYWtkb3duKSlcXFxcYicsXG4gICAgICAnXFxcXGIoLipcXFxccytkaWVzXFxcXHMraW5cXFxccysuKilcXFxcYicsXG4gICAgICAnXFxcXGIod2hvXFxcXHMrKGRpZXN8aXNcXFxccyt0aGVcXFxccytraWxsZXIpKVxcXFxiJyxcbiAgICAgICdcXFxcYihwbG90XFxcXHMrKHR3aXN0fGxlYWt8aG9sZSkpXFxcXGInLFxuICAgICAgJ1xcXFxiKFthLXpdK1xcXFxzK2lzXFxcXHMrdGhlXFxcXHMra2lsbGVyKVxcXFxiJyxcbiAgICBdLFxuICB9LFxuICBcbiAgYWN0aW9uczoge1xuICAgIGRlZmF1bHQ6ICdibHVyJyxcbiAgICBjb25maWRlbmNlOiAwLjc1LFxuICB9LFxufTsiLCIvKipcbiAqIENsaWNrYmFpdCBQcmVzZXQgZm9yIENhbG1XZWJcbiAqIFxuICogRmlsdGVycyBzZW5zYXRpb25hbGlzdCwgbWlzbGVhZGluZywgYW5kIGNsaWNrYmFpdCBoZWFkbGluZXMuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBGaWx0ZXJQcmVzZXQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNsaWNrYmFpdFByZXNldDogRmlsdGVyUHJlc2V0ID0ge1xuICBpZDogJ2NsaWNrYmFpdCcsXG4gIG5hbWU6ICdDbGlja2JhaXQgRmlsdGVyJyxcbiAgZGVzY3JpcHRpb246ICdDbGVhbiB1cCBzZW5zYXRpb25hbGlzdCBhbmQgbWlzbGVhZGluZyBoZWFkbGluZXMnLFxuICB2ZXJzaW9uOiAnMS4wLjAnLFxuICB1cGRhdGVkOiAnMjAyNC0wMS0xNScsXG4gIGF1dGhvcjogJ0NhbG1XZWInLFxuICBcbiAgcGF0dGVybnM6IHtcbiAgICBrZXl3b3JkczogW1xuICAgICAgJ3lvdSBuZWVkIHRvIHNlZScsICd5b3UgaGF2ZSB0byBzZWUnLCAnbXVzdCB3YXRjaCcsICdtdXN0IHJlYWQnLFxuICAgICAgJ21pbmQgYmxvd2luZycsICdtaW5kLWJsb3dpbmcnLCAnbWluZGJsb3dpbmcnLFxuICAgICAgJ3dpbGwgc2hvY2sgeW91JywgJ3Nob2NraW5nJywgJ3Nob2NrZWQnLCAnc2hvY2snLFxuICAgICAgJ3NlY3JldCcsICdzZWNyZXRzJywgJ3RoZXkgZG9uXFwndCB3YW50IHlvdSB0byBrbm93JywgJ2RvblxcJ3Qgd2FudCB5b3UgdG8ga25vdycsXG4gICAgICAnZG9jdG9ycyBoYXRlIGhpbScsICdoYXRlIGhpbScsICdoYXRlIGhlcicsXG4gICAgICAnb25lIHdlaXJkIHRyaWNrJywgJ3dlaXJkIHRyaWNrJywgJ3NpbXBsZSB0cmljaycsXG4gICAgICAndGhpcyBzaW1wbGUnLCAndGhpcyBvbmUgc2ltcGxlJywgJ2p1c3Qgb25lJyxcbiAgICAgICdtaXJhY2xlJywgJ21pcmFjdWxvdXMnLCAnYW1hemluZycsICdpbmNyZWRpYmxlJywgJ3VuYmVsaWV2YWJsZScsXG4gICAgICAneW91XFwnbGwgbmV2ZXIgZ3Vlc3MnLCAnbmV2ZXIgZ3Vlc3MnLCAnZ3Vlc3Mgd2hhdCcsXG4gICAgICAnamF3LWRyb3BwaW5nJywgJ2phdyBkcm9wcGluZycsICdkcm9wcGVkIG15IGphdycsXG4gICAgICAnbGlmZSBjaGFuZ2luZycsICdsaWZlLWNoYW5naW5nJywgJ2NoYW5nZWQgbXkgbGlmZScsXG4gICAgICAnaGFjaycsICdoYWNrcycsICdsaWZlIGhhY2snLCAnbGlmZWhhY2tzJyxcbiAgICAgICdjaGVhdCcsICdjaGVhdHMnLCAnY2hlYXQgY29kZScsICdzaG9ydGN1dCcsXG4gICAgICAndGhpcyBpcyB3aHknLCAnaGVyZVxcJ3Mgd2h5JywgJ3RoZSByZWFzb24gd2h5JyxcbiAgICAgICd3aGF0IGhhcHBlbmVkIG5leHQnLCAnaGFwcGVuZWQgbmV4dCcsICd0aGVuIHRoaXMgaGFwcGVuZWQnLFxuICAgICAgJ3lvdSB3b25cXCd0IGJlbGlldmUnLCAnd29uXFwndCBiZWxpZXZlJywgJ25ldmVyIGJlbGlldmUnLCAnY2Fubm90IGJlbGlldmUnLCAnY2FuXFwndCBiZWxpZXZlJyxcbiAgICAgICd3aWxsIGdvIDEwMHgnLCAnd2lsbCBnbyAxMHgnLCAnZG9uXFwndCBtaXNzIG91dCcsICdkb25cXCd0IG1pc3MnLFxuICAgICAgJ251bWJlciBbMC05XSsgd2lsbCcsICdudW1iZXIgWzAtOV0rIGlzJyxcbiAgICAgICdvbmx5IFswLTldKyBwZW9wbGUga25vdycsXG4gICAgICAnbm9ib2R5IHRlbGxzIHlvdScsICdubyBvbmUgdGVsbHMgeW91JywgJ25vYm9keSB0b2xkIHlvdScsXG4gICAgICAndGhpbmdzIHlvdSBuZWVkIHRvIGtub3cnLCAndGhpbmdzIHlvdSBzaG91bGQga25vdycsXG4gICAgICAncmVhc29ucyB3aHknLCAncmVhc29ucyB5b3UnLCAnd2F5cyB0bycsXG4gICAgICAndGlwcyBmb3InLCAnc2VjcmV0cyB0bycsICd0cmlja3MgZm9yJyxcbiAgICAgICd3aWxsIGxlYXZlIHlvdScsICd3aWxsIG1ha2UgeW91JyxcbiAgICAgICduZWVkIHRvIGtub3cnLCAnc2hvdWxkIGtub3cnLCAnaGF2ZSB0byBrbm93JyxcbiAgICAgICd0aGluZ3MgdGhhdCB3aWxsJywgJ3dheXMgdGhhdCB3aWxsJyxcbiAgICAgICdudW1iZXIgb25lJywgJ251bWJlciAxJywgJ3RvcCAxMCcsICd0b3AgdGVuJyxcbiAgICAgICdiZXN0IGtlcHQgc2VjcmV0JywgJ3dlbGwga2VwdCBzZWNyZXQnLFxuICAgICAgJ3doYXQgaGFwcGVucyB3aGVuJywgJ3NlZSB3aGF0IGhhcHBlbnMnLFxuICAgICAgJ3RyeSB0aGlzJywgJ2RvIHRoaXMnLFxuICAgIF0sXG4gICAgY2hhbm5lbHM6IFtcbiAgICAgICdidXp6ZmVlZCcsICdidXpmZWVkJywgJ2J1enogZmVlZCcsXG4gICAgICAnY2xpY2tob2xlJywgJ2NsaWNrIGhvbGUnLFxuICAgICAgJ3Vwd29ydGh5JywgJ3VwIHdvcnRoeScsXG4gICAgICAndmlyYWxub3ZhJywgJ3ZpcmFsIG5vdmEnLFxuICAgICAgJ2RpcGx5JywgJ3RoYXRzY29vcCcsXG4gICAgICAnaW50ZXJlc3RpbmcgdGhpbmdzcycsXG4gICAgXSxcbiAgICByZWdleDogW1xuICAgICAgJ1xcXFxiKHlvdVxcXFxzK3dvblxcJ3RcXFxccytiZWxpZXZlKVxcXFxiJyxcbiAgICAgICdcXFxcYihkb2N0b3JzXFxcXHMraGF0ZVxcXFxzK2hpbSlcXFxcYicsXG4gICAgICAnXFxcXGIob25lXFxcXHMrd2VpcmRcXFxccyt0cmljaylcXFxcYicsXG4gICAgICAnXFxcXGIobWluZFxcXFxzKi0/XFxcXHMqYmxvd2luZylcXFxcYicsXG4gICAgICAnXFxcXGIoamF3XFxcXHMqLT9cXFxccypkcm9wcGluZylcXFxcYicsXG4gICAgICAnXFxcXGIobGlmZVxcXFxzKi0/XFxcXHMqY2hhbmdpbmcpXFxcXGInLFxuICAgICAgJ1xcXFxiKHdoYXRcXFxccytoYXBwZW5lZFxcXFxzK25leHRcXFxccyt3aWxsKVxcXFxiJyxcbiAgICAgICdcXFxcYihudW1iZXJcXFxccytcXFxcZCtcXFxccysod2lsbHxpc3xzaG9jaykpXFxcXGInLFxuICAgICAgJ1xcXFxiKG9ubHlcXFxccytcXFxcZCtcXFxccysocGVvcGxlfHBlcmNlbnQpXFxcXHMra25vdylcXFxcYicsXG4gICAgXSxcbiAgfSxcbiAgXG4gIGFjdGlvbnM6IHtcbiAgICBkZWZhdWx0OiAnY29sbGFwc2UnLFxuICAgIGNvbmZpZGVuY2U6IDAuOCxcbiAgfSxcbn07IiwiLyoqXG4gKiBQcmVzZXQgTGlicmFyaWVzIGZvciBDYWxtV2ViXG4gKiBcbiAqIEN1cmF0ZWQgZmlsdGVyIHByZXNldHMgZm9yIGNvbW1vbiBjb250ZW50IGNhdGVnb3JpZXMuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBGaWx0ZXJQcmVzZXQsIFNtYXJ0UHJlc2V0IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTTUFSVF9QUkVTRVRTIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB7IHR5cGUgRmlsdGVyUHJlc2V0LCB0eXBlIFNtYXJ0UHJlc2V0LCB0eXBlIEZpbHRlclBhdHRlcm4sIFNNQVJUX1BSRVNFVFMgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7IHBvbGl0aWNzUHJlc2V0IH0gZnJvbSAnLi9wb2xpdGljcyc7XG5leHBvcnQgeyByYWdlYmFpdFByZXNldCB9IGZyb20gJy4vcmFnZWJhaXQnO1xuZXhwb3J0IHsgc3BvaWxlcnNQcmVzZXQgfSBmcm9tICcuL3Nwb2lsZXJzJztcbmV4cG9ydCB7IGNsaWNrYmFpdFByZXNldCB9IGZyb20gJy4vY2xpY2tiYWl0JztcblxuaW1wb3J0IHsgcG9saXRpY3NQcmVzZXQgfSBmcm9tICcuL3BvbGl0aWNzJztcbmltcG9ydCB7IHJhZ2ViYWl0UHJlc2V0IH0gZnJvbSAnLi9yYWdlYmFpdCc7XG5pbXBvcnQgeyBzcG9pbGVyc1ByZXNldCB9IGZyb20gJy4vc3BvaWxlcnMnO1xuaW1wb3J0IHsgY2xpY2tiYWl0UHJlc2V0IH0gZnJvbSAnLi9jbGlja2JhaXQnO1xuXG5leHBvcnQgY29uc3QgUFJFU0VUUzogUmVjb3JkPHN0cmluZywgRmlsdGVyUHJlc2V0PiA9IHtcbiAgcG9saXRpY3M6IHBvbGl0aWNzUHJlc2V0LFxuICByYWdlYmFpdDogcmFnZWJhaXRQcmVzZXQsXG4gIHNwb2lsZXJzOiBzcG9pbGVyc1ByZXNldCxcbiAgY2xpY2tiYWl0OiBjbGlja2JhaXRQcmVzZXQsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlc2V0KGlkOiBzdHJpbmcpOiBGaWx0ZXJQcmVzZXQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gUFJFU0VUU1tpZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcmVzZXRzKCk6IEZpbHRlclByZXNldFtdIHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoUFJFU0VUUyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTbWFydFByZXNldChpZDogc3RyaW5nKTogU21hcnRQcmVzZXQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gU01BUlRfUFJFU0VUUy5maW5kKHAgPT4gcC5pZCA9PT0gaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U21hcnRQcmVzZXRzKCk6IFNtYXJ0UHJlc2V0W10ge1xuICByZXR1cm4gU01BUlRfUFJFU0VUUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVTbWFydFByZXNldChzbWFydDogU21hcnRQcmVzZXQpOiBGaWx0ZXJQcmVzZXRbXSB7XG4gIGNvbnN0IHJlc29sdmVkOiBGaWx0ZXJQcmVzZXRbXSA9IFtdO1xuICBcbiAgZm9yIChjb25zdCBwcmVzZXRJZCBvZiBzbWFydC5jb21iaW5lcykge1xuICAgIGNvbnN0IGJhc2UgPSBQUkVTRVRTW3ByZXNldElkXTtcbiAgICBpZiAoYmFzZSkge1xuICAgICAgY29uc3Qgb3ZlcnJpZGUgPSBzbWFydC5vdmVycmlkZXM/LltwcmVzZXRJZF07XG4gICAgICBpZiAob3ZlcnJpZGUpIHtcbiAgICAgICAgcmVzb2x2ZWQucHVzaCh7XG4gICAgICAgICAgLi4uYmFzZSxcbiAgICAgICAgICBhY3Rpb25zOiB7IC4uLmJhc2UuYWN0aW9ucywgLi4ub3ZlcnJpZGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlZC5wdXNoKGJhc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQcmVzZXRLZXl3b3Jkcyh0aXRsZTogc3RyaW5nLCBwcmVzZXRJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHByZXNldCA9IFBSRVNFVFNbcHJlc2V0SWRdO1xuICBpZiAoIXByZXNldCkgcmV0dXJuIGZhbHNlO1xuICBcbiAgY29uc3QgdGl0bGVMb3dlciA9IHRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gIFxuICBpZiAocHJlc2V0LnBhdHRlcm5zLmtleXdvcmRzKSB7XG4gICAgZm9yIChjb25zdCBrdyBvZiBwcmVzZXQucGF0dGVybnMua2V5d29yZHMpIHtcbiAgICAgIGlmICh0aXRsZUxvd2VyLmluY2x1ZGVzKGt3LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaWYgKHByZXNldC5wYXR0ZXJucy5yZWdleCkge1xuICAgIGZvciAoY29uc3QgcGF0dGVybiBvZiBwcmVzZXQucGF0dGVybnMucmVnZXgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnaScpO1xuICAgICAgICBpZiAocmVnZXgudGVzdCh0aXRsZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbnNvbGUud2FybihgW1ByZXNldHNdIEludmFsaWQgcmVnZXggaW4gJHtwcmVzZXRJZH06ICR7cGF0dGVybn1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUHJlc2V0Q2hhbm5lbChzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsIHByZXNldElkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgcHJlc2V0ID0gUFJFU0VUU1twcmVzZXRJZF07XG4gIGlmICghcHJlc2V0IHx8ICFzb3VyY2VOYW1lIHx8ICFwcmVzZXQucGF0dGVybnMuY2hhbm5lbHMpIHJldHVybiBmYWxzZTtcbiAgXG4gIGNvbnN0IHNvdXJjZUxvd2VyID0gc291cmNlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBcbiAgZm9yIChjb25zdCBjaGFuIG9mIHByZXNldC5wYXR0ZXJucy5jaGFubmVscykge1xuICAgIGlmIChzb3VyY2VMb3dlci5pbmNsdWRlcyhjaGFuLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmYWxzZTtcbn0iLCIvKipcbiAqIENsYXNzaWZpZXIgdXRpbGl0eSBmb3IgQ2FsbVdlYlxuICpcbiAqIFByb3ZpZGVzIGNvbnRlbnQgY2xhc3NpZmljYXRpb24gdmlhIGxvY2FsIHJ1bGVzIG9ubHk6XG4gKiAtIEtleXdvcmQvcHJlc2V0IG1hdGNoaW5nXG4gKiAtIENoYW5uZWwgYmxvY2tpbmdcbiAqIC0gVXNlciBibG9ja2xpc3RzL2FsbG93bGlzdHNcbiAqL1xuXG5pbXBvcnQgdHlwZSB7IENvbnRlbnRVbml0LCBDbGFzc2lmaWNhdGlvblJlc3VsdCwgVXNlclJ1bGVzIH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcbmltcG9ydCB7IG1hdGNoUHJlc2V0S2V5d29yZHMsIG1hdGNoUHJlc2V0Q2hhbm5lbCwgZ2V0UHJlc2V0IH0gZnJvbSAnQC9zcmMvcHJlc2V0cyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJ1bGVzIEVuZ2luZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEFwcGx5IGxvY2FsIHJ1bGVzIHRvIGNsYXNzaWZ5IGNvbnRlbnQuXG4gKiBSZXR1cm5zIGEgY2xhc3NpZmljYXRpb24gaWYgYW55IHJ1bGUgbWF0Y2hlcywgb3RoZXJ3aXNlIG51bGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxvY2FsUnVsZXModW5pdDogQ29udGVudFVuaXQsIHJ1bGVzOiBVc2VyUnVsZXMpOiBDbGFzc2lmaWNhdGlvblJlc3VsdCB8IG51bGwge1xuICBjb25zdCB0aXRsZUxvd2VyID0gdW5pdC50aXRsZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBwcmVzZXRzID0gcnVsZXMucHJlc2V0cztcblxuICAvLyAxLiBDaGVjayBhY3RpdmUgcHJlc2V0cyAtIG1vc3Qgc3BlY2lmaWMgZmlyc3RcbiAgY29uc3QgcHJlc2V0SWRzID0gWydzcG9pbGVycycsICdjbGlja2JhaXQnLCAncG9saXRpY3MnLCAncmFnZWJhaXQnXSBhcyBjb25zdDtcbiAgXG4gIGZvciAoY29uc3QgcHJlc2V0SWQgb2YgcHJlc2V0SWRzKSB7XG4gICAgaWYgKHByZXNldHNbcHJlc2V0SWRdKSB7XG4gICAgICAvLyBDaGVjayBrZXl3b3Jkc1xuICAgICAgaWYgKG1hdGNoUHJlc2V0S2V5d29yZHModW5pdC50aXRsZSwgcHJlc2V0SWQpKSB7XG4gICAgICAgIGNvbnN0IHByZXNldCA9IGdldFByZXNldChwcmVzZXRJZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGVjaXNpb246IHByZXNldD8uYWN0aW9ucy5kZWZhdWx0IHx8ICdjb2xsYXBzZScsXG4gICAgICAgICAgY29uZmlkZW5jZTogcHJlc2V0Py5hY3Rpb25zLmNvbmZpZGVuY2UgfHwgMC44NSxcbiAgICAgICAgICByZWFzb246IGBwcmVzZXRfJHtwcmVzZXRJZH1gLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDaGVjayBjaGFubmVsc1xuICAgICAgaWYgKG1hdGNoUHJlc2V0Q2hhbm5lbCh1bml0LnNvdXJjZU5hbWUsIHByZXNldElkKSkge1xuICAgICAgICBjb25zdCBwcmVzZXQgPSBnZXRQcmVzZXQocHJlc2V0SWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRlY2lzaW9uOiBwcmVzZXQ/LmFjdGlvbnMuZGVmYXVsdCB8fCAnY29sbGFwc2UnLFxuICAgICAgICAgIGNvbmZpZGVuY2U6IChwcmVzZXQ/LmFjdGlvbnMuY29uZmlkZW5jZSB8fCAwLjg1KSArIDAuMSxcbiAgICAgICAgICByZWFzb246IGBwcmVzZXRfJHtwcmVzZXRJZH1fY2hhbm5lbGAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gMi4gQ2hlY2sgdXNlci1kZWZpbmVkIGJsb2NrbGlzdCBjaGFubmVsc1xuICBpZiAodW5pdC5zb3VyY2VOYW1lICYmIHJ1bGVzLmJsb2NrbGlzdENoYW5uZWxzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzb3VyY2VMb3dlciA9IHVuaXQuc291cmNlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChydWxlcy5ibG9ja2xpc3RDaGFubmVscy5zb21lKGNoYW4gPT4gc291cmNlTG93ZXIuaW5jbHVkZXMoY2hhbi50b0xvd2VyQ2FzZSgpKSkpIHtcbiAgICAgIHJldHVybiB7IGRlY2lzaW9uOiAnY29sbGFwc2UnLCBjb25maWRlbmNlOiAxLjAsIHJlYXNvbjogJ2Jsb2NrbGlzdF9jaGFubmVsJyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIDMuIENoZWNrIHVzZXItZGVmaW5lZCBibG9ja2xpc3Qga2V5d29yZHNcbiAgaWYgKHJ1bGVzLmJsb2NrbGlzdEtleXdvcmRzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAocnVsZXMuYmxvY2tsaXN0S2V5d29yZHMuc29tZShrZXl3b3JkID0+IHRpdGxlTG93ZXIuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkpIHtcbiAgICAgIHJldHVybiB7IGRlY2lzaW9uOiAnY29sbGFwc2UnLCBjb25maWRlbmNlOiAwLjksIHJlYXNvbjogJ2Jsb2NrbGlzdF9rZXl3b3JkJyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIDQuIEFsbG93bGlzdCBvdmVycmlkZXMgKHNob3cgZXZlbiBpZiBvdGhlciBydWxlcyB3b3VsZCBoaWRlKVxuICBpZiAodW5pdC5zb3VyY2VOYW1lICYmIHJ1bGVzLmFsbG93bGlzdENoYW5uZWxzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzb3VyY2VMb3dlciA9IHVuaXQuc291cmNlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChydWxlcy5hbGxvd2xpc3RDaGFubmVscy5zb21lKGNoYW4gPT4gc291cmNlTG93ZXIuaW5jbHVkZXMoY2hhbi50b0xvd2VyQ2FzZSgpKSkpIHtcbiAgICAgIHJldHVybiB7IGRlY2lzaW9uOiAnc2hvdycsIGNvbmZpZGVuY2U6IDEuMCwgcmVhc29uOiAnYWxsb3dsaXN0X2NoYW5uZWwnIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGVzLmFsbG93bGlzdEtleXdvcmRzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAocnVsZXMuYWxsb3dsaXN0S2V5d29yZHMuc29tZShrZXl3b3JkID0+IHRpdGxlTG93ZXIuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkpIHtcbiAgICAgIHJldHVybiB7IGRlY2lzaW9uOiAnc2hvdycsIGNvbmZpZGVuY2U6IDEuMCwgcmVhc29uOiAnYWxsb3dsaXN0X2tleXdvcmQnIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1haW4gQ2xhc3NpZmllciBFbnRyeSBQb2ludFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIENsYXNzaWZ5IGEgQ29udGVudFVuaXQgdXNpbmcgbG9jYWwgcnVsZXMgb25seS5cbiAqIE5vIEFQSSBjYWxscyAtIGluc3RhbnQgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsYXNzaWZ5Q29udGVudChcbiAgdW5pdDogQ29udGVudFVuaXQsXG4gIHNldHRpbmdzOiB7XG4gICAgcnVsZXM6IFVzZXJSdWxlcztcbiAgfVxuKTogUHJvbWlzZTxDbGFzc2lmaWNhdGlvblJlc3VsdD4ge1xuICAvLyBUcnkgbG9jYWwgcnVsZXMgKGZhc3QpXG4gIGNvbnN0IHJ1bGVzUmVzdWx0ID0gYXBwbHlMb2NhbFJ1bGVzKHVuaXQsIHNldHRpbmdzLnJ1bGVzKTtcbiAgaWYgKHJ1bGVzUmVzdWx0KSB7XG4gICAgcmV0dXJuIHJ1bGVzUmVzdWx0O1xuICB9XG5cbiAgLy8gTm8gcnVsZSBtYXRjaGVkLCBzaG93IGNvbnRlbnRcbiAgcmV0dXJuIHtcbiAgICBkZWNpc2lvbjogJ3Nob3cnLFxuICAgIGNvbmZpZGVuY2U6IDEsXG4gICAgcmVhc29uOiAnbm9fbWF0Y2gnLFxuICB9O1xufVxuIiwiLy8gI3JlZ2lvbiBzbmlwcGV0XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZT8uaWRcbiAgPyBnbG9iYWxUaGlzLmJyb3dzZXJcbiAgOiBnbG9iYWxUaGlzLmNocm9tZTtcbi8vICNlbmRyZWdpb24gc25pcHBldFxuIiwiY29uc3QgRV9USU1FT1VUID0gbmV3IEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIG11dGV4IHRvIGJlY29tZSBhdmFpbGFibGUnKTtcbmNvbnN0IEVfQUxSRUFEWV9MT0NLRUQgPSBuZXcgRXJyb3IoJ211dGV4IGFscmVhZHkgbG9ja2VkJyk7XG5jb25zdCBFX0NBTkNFTEVEID0gbmV3IEVycm9yKCdyZXF1ZXN0IGZvciBsb2NrIGNhbmNlbGVkJyk7XG5cbnZhciBfX2F3YWl0ZXIkMiA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgU2VtYXBob3JlIHtcbiAgICBjb25zdHJ1Y3RvcihfdmFsdWUsIF9jYW5jZWxFcnJvciA9IEVfQ0FOQ0VMRUQpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgIHRoaXMuX2NhbmNlbEVycm9yID0gX2NhbmNlbEVycm9yO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnMgPSBbXTtcbiAgICB9XG4gICAgYWNxdWlyZSh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB7IHJlc29sdmUsIHJlamVjdCwgd2VpZ2h0LCBwcmlvcml0eSB9O1xuICAgICAgICAgICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQodGhpcy5fcXVldWUsIChvdGhlcikgPT4gcHJpb3JpdHkgPD0gb3RoZXIucHJpb3JpdHkpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xICYmIHdlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWRzIGltbWVkaWF0ZSBkaXNwYXRjaCwgc2tpcCB0aGUgcXVldWVcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrXzEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlciQyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKGNhbGxiYWNrLCB3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgcmVsZWFzZV0gPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB3YWl0Rm9yVW5sb2NrKHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICBpZiAodGhpcy5fY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgICAgICBpbnNlcnRTb3J0ZWQodGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdLCB7IHJlc29sdmUsIHByaW9yaXR5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSA8PSAwO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIHJlbGVhc2Uod2VpZ2h0ID0gMSkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICB0aGlzLl92YWx1ZSArPSB3ZWlnaHQ7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoUXVldWUoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKChlbnRyeSkgPT4gZW50cnkucmVqZWN0KHRoaXMuX2NhbmNlbEVycm9yKSk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuICAgIF9kaXNwYXRjaFF1ZXVlKCkge1xuICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDAgJiYgdGhpcy5fcXVldWVbMF0ud2VpZ2h0IDw9IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZGlzcGF0Y2hJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLl92YWx1ZSAtPSBpdGVtLndlaWdodDtcbiAgICAgICAgaXRlbS5yZXNvbHZlKFtwcmV2aW91c1ZhbHVlLCB0aGlzLl9uZXdSZWxlYXNlcihpdGVtLndlaWdodCldKTtcbiAgICB9XG4gICAgX25ld1JlbGVhc2VyKHdlaWdodCkge1xuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2Uod2VpZ2h0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2RyYWluVW5sb2NrV2FpdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHdhaXRlcnMuZm9yRWFjaCgod2FpdGVyKSA9PiB3YWl0ZXIucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlZFByaW9yaXR5ID0gdGhpcy5fcXVldWVbMF0ucHJpb3JpdHk7XG4gICAgICAgICAgICBmb3IgKGxldCB3ZWlnaHQgPSB0aGlzLl92YWx1ZTsgd2VpZ2h0ID4gMDsgd2VpZ2h0LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0ZXJzID0gdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICghd2FpdGVycylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHdhaXRlcnMuZmluZEluZGV4KCh3YWl0ZXIpID0+IHdhaXRlci5wcmlvcml0eSA8PSBxdWV1ZWRQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgKGkgPT09IC0xID8gd2FpdGVycyA6IHdhaXRlcnMuc3BsaWNlKDAsIGkpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgod2FpdGVyID0+IHdhaXRlci5yZXNvbHZlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9xdWV1ZVswXS5wcmlvcml0eSA8IHByaW9yaXR5KSAmJlxuICAgICAgICAgICAgd2VpZ2h0IDw9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydFNvcnRlZChhLCB2KSB7XG4gICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQoYSwgKG90aGVyKSA9PiB2LnByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICBhLnNwbGljZShpICsgMSwgMCwgdik7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXhGcm9tRW5kKGEsIHByZWRpY2F0ZSkge1xuICAgIGZvciAobGV0IGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYVtpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxudmFyIF9fYXdhaXRlciQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBNdXRleCB7XG4gICAgY29uc3RydWN0b3IoY2FuY2VsRXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2VtYXBob3JlID0gbmV3IFNlbWFwaG9yZSgxLCBjYW5jZWxFcnJvcik7XG4gICAgfVxuICAgIGFjcXVpcmUoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMSh0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFssIHJlbGVhc2VyXSA9IHlpZWxkIHRoaXMuX3NlbWFwaG9yZS5hY3F1aXJlKDEsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUucnVuRXhjbHVzaXZlKCgpID0+IGNhbGxiYWNrKCksIDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayhwcmlvcml0eSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS53YWl0Rm9yVW5sb2NrKDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpKVxuICAgICAgICAgICAgdGhpcy5fc2VtYXBob3JlLnJlbGVhc2UoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmNhbmNlbCgpO1xuICAgIH1cbn1cblxudmFyIF9fYXdhaXRlciA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gd2l0aFRpbWVvdXQoc3luYywgdGltZW91dCwgdGltZW91dEVycm9yID0gRV9USU1FT1VUKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNxdWlyZTogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXNUaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGltZW91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IHlpZWxkIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzeW5jLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3luYy5hY3F1aXJlKHByaW9yaXR5KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGVhc2UgPSBBcnJheS5pc0FycmF5KHRpY2tldCkgPyB0aWNrZXRbMV0gOiB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGlja2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgd2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVsZWFzZSA9ICgpID0+IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRpY2tldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodGlja2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZWxlYXNlKHdlaWdodCkge1xuICAgICAgICAgICAgc3luYy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW5jLmNhbmNlbCgpO1xuICAgICAgICB9LFxuICAgICAgICB3YWl0Rm9yVW5sb2NrOiAod2VpZ2h0T3JQcmlvcml0eSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGxldCB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNTZW1hcGhvcmUoc3luYykpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWlnaHQgIT09IHVuZGVmaW5lZCAmJiB3ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KHRpbWVvdXRFcnJvciksIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICA/IHN5bmMud2FpdEZvclVubG9jayh3ZWlnaHQsIHByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICA6IHN5bmMud2FpdEZvclVubG9jayhwcmlvcml0eSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTG9ja2VkOiAoKSA9PiBzeW5jLmlzTG9ja2VkKCksXG4gICAgICAgIGdldFZhbHVlOiAoKSA9PiBzeW5jLmdldFZhbHVlKCksXG4gICAgICAgIHNldFZhbHVlOiAodmFsdWUpID0+IHN5bmMuc2V0VmFsdWUodmFsdWUpLFxuICAgIH07XG59XG5mdW5jdGlvbiBpc1NlbWFwaG9yZShzeW5jKSB7XG4gICAgcmV0dXJuIHN5bmMuZ2V0VmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saXNuZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5mdW5jdGlvbiB0cnlBY3F1aXJlKHN5bmMsIGFscmVhZHlBY3F1aXJlZEVycm9yID0gRV9BTFJFQURZX0xPQ0tFRCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIHdpdGhUaW1lb3V0KHN5bmMsIDAsIGFscmVhZHlBY3F1aXJlZEVycm9yKTtcbn1cblxuZXhwb3J0IHsgRV9BTFJFQURZX0xPQ0tFRCwgRV9DQU5DRUxFRCwgRV9USU1FT1VULCBNdXRleCwgU2VtYXBob3JlLCB0cnlBY3F1aXJlLCB3aXRoVGltZW91dCB9O1xuIiwidmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXF1YWwoZm9vLCBiYXIpIHtcblx0dmFyIGN0b3IsIGxlbjtcblx0aWYgKGZvbyA9PT0gYmFyKSByZXR1cm4gdHJ1ZTtcblxuXHRpZiAoZm9vICYmIGJhciAmJiAoY3Rvcj1mb28uY29uc3RydWN0b3IpID09PSBiYXIuY29uc3RydWN0b3IpIHtcblx0XHRpZiAoY3RvciA9PT0gRGF0ZSkgcmV0dXJuIGZvby5nZXRUaW1lKCkgPT09IGJhci5nZXRUaW1lKCk7XG5cdFx0aWYgKGN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGZvby50b1N0cmluZygpID09PSBiYXIudG9TdHJpbmcoKTtcblxuXHRcdGlmIChjdG9yID09PSBBcnJheSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmxlbmd0aCkgPT09IGJhci5sZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGRlcXVhbChmb29bbGVuXSwgYmFyW2xlbl0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iLCJpbXBvcnQgeyBicm93c2VyIH0gZnJvbSBcIkB3eHQtZGV2L2Jyb3dzZXJcIjtcbmltcG9ydCB7IE11dGV4IH0gZnJvbSBcImFzeW5jLW11dGV4XCI7XG5pbXBvcnQgeyBkZXF1YWwgfSBmcm9tIFwiZGVxdWFsL2xpdGVcIjtcblxuLy8jcmVnaW9uIHNyYy9pbmRleC50c1xuLyoqXG4qIFNpbXBsaWZpZWQgc3RvcmFnZSBBUElzIHdpdGggc3VwcG9ydCBmb3IgdmVyc2lvbmVkIGZpZWxkcywgc25hcHNob3RzLCBtZXRhZGF0YSwgYW5kIGl0ZW0gZGVmaW5pdGlvbnMuXG4qXG4qIFNlZSBbdGhlIGd1aWRlXShodHRwczovL3d4dC5kZXYvc3RvcmFnZS5odG1sKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiogQG1vZHVsZSBAd3h0LWRldi9zdG9yYWdlXG4qL1xuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZVN0b3JhZ2UoKTtcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2UoKSB7XG5cdGNvbnN0IGRyaXZlcnMgPSB7XG5cdFx0bG9jYWw6IGNyZWF0ZURyaXZlcihcImxvY2FsXCIpLFxuXHRcdHNlc3Npb246IGNyZWF0ZURyaXZlcihcInNlc3Npb25cIiksXG5cdFx0c3luYzogY3JlYXRlRHJpdmVyKFwic3luY1wiKSxcblx0XHRtYW5hZ2VkOiBjcmVhdGVEcml2ZXIoXCJtYW5hZ2VkXCIpXG5cdH07XG5cdGNvbnN0IGdldERyaXZlciA9IChhcmVhKSA9PiB7XG5cdFx0Y29uc3QgZHJpdmVyID0gZHJpdmVyc1thcmVhXTtcblx0XHRpZiAoZHJpdmVyID09IG51bGwpIHtcblx0XHRcdGNvbnN0IGFyZWFOYW1lcyA9IE9iamVjdC5rZXlzKGRyaXZlcnMpLmpvaW4oXCIsIFwiKTtcblx0XHRcdHRocm93IEVycm9yKGBJbnZhbGlkIGFyZWEgXCIke2FyZWF9XCIuIE9wdGlvbnM6ICR7YXJlYU5hbWVzfWApO1xuXHRcdH1cblx0XHRyZXR1cm4gZHJpdmVyO1xuXHR9O1xuXHRjb25zdCByZXNvbHZlS2V5ID0gKGtleSkgPT4ge1xuXHRcdGNvbnN0IGRlbGltaW5hdG9ySW5kZXggPSBrZXkuaW5kZXhPZihcIjpcIik7XG5cdFx0Y29uc3QgZHJpdmVyQXJlYSA9IGtleS5zdWJzdHJpbmcoMCwgZGVsaW1pbmF0b3JJbmRleCk7XG5cdFx0Y29uc3QgZHJpdmVyS2V5ID0ga2V5LnN1YnN0cmluZyhkZWxpbWluYXRvckluZGV4ICsgMSk7XG5cdFx0aWYgKGRyaXZlcktleSA9PSBudWxsKSB0aHJvdyBFcnJvcihgU3RvcmFnZSBrZXkgc2hvdWxkIGJlIGluIHRoZSBmb3JtIG9mIFwiYXJlYTprZXlcIiwgYnV0IHJlY2VpdmVkIFwiJHtrZXl9XCJgKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZHJpdmVyQXJlYSxcblx0XHRcdGRyaXZlcktleSxcblx0XHRcdGRyaXZlcjogZ2V0RHJpdmVyKGRyaXZlckFyZWEpXG5cdFx0fTtcblx0fTtcblx0Y29uc3QgZ2V0TWV0YUtleSA9IChrZXkpID0+IGtleSArIFwiJFwiO1xuXHRjb25zdCBtZXJnZU1ldGEgPSAob2xkTWV0YSwgbmV3TWV0YSkgPT4ge1xuXHRcdGNvbnN0IG5ld0ZpZWxkcyA9IHsgLi4ub2xkTWV0YSB9O1xuXHRcdE9iamVjdC5lbnRyaWVzKG5ld01ldGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpIGRlbGV0ZSBuZXdGaWVsZHNba2V5XTtcblx0XHRcdGVsc2UgbmV3RmllbGRzW2tleV0gPSB2YWx1ZTtcblx0XHR9KTtcblx0XHRyZXR1cm4gbmV3RmllbGRzO1xuXHR9O1xuXHRjb25zdCBnZXRWYWx1ZU9yRmFsbGJhY2sgPSAodmFsdWUsIGZhbGxiYWNrKSA9PiB2YWx1ZSA/PyBmYWxsYmFjayA/PyBudWxsO1xuXHRjb25zdCBnZXRNZXRhVmFsdWUgPSAocHJvcGVydGllcykgPT4gdHlwZW9mIHByb3BlcnRpZXMgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkocHJvcGVydGllcykgPyBwcm9wZXJ0aWVzIDoge307XG5cdGNvbnN0IGdldEl0ZW0gPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpID0+IHtcblx0XHRyZXR1cm4gZ2V0VmFsdWVPckZhbGxiYWNrKGF3YWl0IGRyaXZlci5nZXRJdGVtKGRyaXZlcktleSksIG9wdHM/LmZhbGxiYWNrID8/IG9wdHM/LmRlZmF1bHRWYWx1ZSk7XG5cdH07XG5cdGNvbnN0IGdldE1ldGEgPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXkpID0+IHtcblx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdHJldHVybiBnZXRNZXRhVmFsdWUoYXdhaXQgZHJpdmVyLmdldEl0ZW0obWV0YUtleSkpO1xuXHR9O1xuXHRjb25zdCBzZXRJdGVtID0gYXN5bmMgKGRyaXZlciwgZHJpdmVyS2V5LCB2YWx1ZSkgPT4ge1xuXHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtKGRyaXZlcktleSwgdmFsdWUgPz8gbnVsbCk7XG5cdH07XG5cdGNvbnN0IHNldE1ldGEgPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpID0+IHtcblx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdGNvbnN0IGV4aXN0aW5nRmllbGRzID0gZ2V0TWV0YVZhbHVlKGF3YWl0IGRyaXZlci5nZXRJdGVtKG1ldGFLZXkpKTtcblx0XHRhd2FpdCBkcml2ZXIuc2V0SXRlbShtZXRhS2V5LCBtZXJnZU1ldGEoZXhpc3RpbmdGaWVsZHMsIHByb3BlcnRpZXMpKTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChkcml2ZXIsIGRyaXZlcktleSwgb3B0cykgPT4ge1xuXHRcdGF3YWl0IGRyaXZlci5yZW1vdmVJdGVtKGRyaXZlcktleSk7XG5cdFx0aWYgKG9wdHM/LnJlbW92ZU1ldGEpIHtcblx0XHRcdGNvbnN0IG1ldGFLZXkgPSBnZXRNZXRhS2V5KGRyaXZlcktleSk7XG5cdFx0XHRhd2FpdCBkcml2ZXIucmVtb3ZlSXRlbShtZXRhS2V5KTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlbW92ZU1ldGEgPSBhc3luYyAoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpID0+IHtcblx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShkcml2ZXJLZXkpO1xuXHRcdGlmIChwcm9wZXJ0aWVzID09IG51bGwpIGF3YWl0IGRyaXZlci5yZW1vdmVJdGVtKG1ldGFLZXkpO1xuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc3QgbmV3RmllbGRzID0gZ2V0TWV0YVZhbHVlKGF3YWl0IGRyaXZlci5nZXRJdGVtKG1ldGFLZXkpKTtcblx0XHRcdFtwcm9wZXJ0aWVzXS5mbGF0KCkuZm9yRWFjaCgoZmllbGQpID0+IGRlbGV0ZSBuZXdGaWVsZHNbZmllbGRdKTtcblx0XHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtKG1ldGFLZXksIG5ld0ZpZWxkcyk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCB3YXRjaCA9IChkcml2ZXIsIGRyaXZlcktleSwgY2IpID0+IGRyaXZlci53YXRjaChkcml2ZXJLZXksIGNiKTtcblx0cmV0dXJuIHtcblx0XHRnZXRJdGVtOiBhc3luYyAoa2V5LCBvcHRzKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRyZXR1cm4gYXdhaXQgZ2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgb3B0cyk7XG5cdFx0fSxcblx0XHRnZXRJdGVtczogYXN5bmMgKGtleXMpID0+IHtcblx0XHRcdGNvbnN0IGFyZWFUb0tleU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRjb25zdCBrZXlUb09wdHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0Y29uc3Qgb3JkZXJlZEtleXMgPSBbXTtcblx0XHRcdGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdGxldCBrZXlTdHI7XG5cdFx0XHRcdGxldCBvcHRzO1xuXHRcdFx0XHRpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikga2V5U3RyID0ga2V5O1xuXHRcdFx0XHRlbHNlIGlmIChcImdldFZhbHVlXCIgaW4ga2V5KSB7XG5cdFx0XHRcdFx0a2V5U3RyID0ga2V5LmtleTtcblx0XHRcdFx0XHRvcHRzID0geyBmYWxsYmFjazoga2V5LmZhbGxiYWNrIH07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0a2V5U3RyID0ga2V5LmtleTtcblx0XHRcdFx0XHRvcHRzID0ga2V5Lm9wdGlvbnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3JkZXJlZEtleXMucHVzaChrZXlTdHIpO1xuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXlTdHIpO1xuXHRcdFx0XHRjb25zdCBhcmVhS2V5cyA9IGFyZWFUb0tleU1hcC5nZXQoZHJpdmVyQXJlYSkgPz8gW107XG5cdFx0XHRcdGFyZWFUb0tleU1hcC5zZXQoZHJpdmVyQXJlYSwgYXJlYUtleXMuY29uY2F0KGRyaXZlcktleSkpO1xuXHRcdFx0XHRrZXlUb09wdHNNYXAuc2V0KGtleVN0ciwgb3B0cyk7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJlc3VsdHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShhcmVhVG9LZXlNYXAuZW50cmllcygpKS5tYXAoYXN5bmMgKFtkcml2ZXJBcmVhLCBrZXlzXSkgPT4ge1xuXHRcdFx0XHQoYXdhaXQgZHJpdmVyc1tkcml2ZXJBcmVhXS5nZXRJdGVtcyhrZXlzKSkuZm9yRWFjaCgoZHJpdmVyUmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gYCR7ZHJpdmVyQXJlYX06JHtkcml2ZXJSZXN1bHQua2V5fWA7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0cyA9IGtleVRvT3B0c01hcC5nZXQoa2V5KTtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGdldFZhbHVlT3JGYWxsYmFjayhkcml2ZXJSZXN1bHQudmFsdWUsIG9wdHM/LmZhbGxiYWNrID8/IG9wdHM/LmRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRcdFx0cmVzdWx0c01hcC5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSkpO1xuXHRcdFx0cmV0dXJuIG9yZGVyZWRLZXlzLm1hcCgoa2V5KSA9PiAoe1xuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlOiByZXN1bHRzTWFwLmdldChrZXkpXG5cdFx0XHR9KSk7XG5cdFx0fSxcblx0XHRnZXRNZXRhOiBhc3luYyAoa2V5KSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRyZXR1cm4gYXdhaXQgZ2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSk7XG5cdFx0fSxcblx0XHRnZXRNZXRhczogYXN5bmMgKGFyZ3MpID0+IHtcblx0XHRcdGNvbnN0IGtleXMgPSBhcmdzLm1hcCgoYXJnKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIgPyBhcmcgOiBhcmcua2V5O1xuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRkcml2ZXJBcmVhLFxuXHRcdFx0XHRcdGRyaXZlcktleSxcblx0XHRcdFx0XHRkcml2ZXJNZXRhS2V5OiBnZXRNZXRhS2V5KGRyaXZlcktleSlcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgYXJlYVRvRHJpdmVyTWV0YUtleXNNYXAgPSBrZXlzLnJlZHVjZSgobWFwLCBrZXkpID0+IHtcblx0XHRcdFx0bWFwW2tleS5kcml2ZXJBcmVhXSA/Pz0gW107XG5cdFx0XHRcdG1hcFtrZXkuZHJpdmVyQXJlYV0ucHVzaChrZXkpO1xuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fSwge30pO1xuXHRcdFx0Y29uc3QgcmVzdWx0c01hcCA9IHt9O1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmVudHJpZXMoYXJlYVRvRHJpdmVyTWV0YUtleXNNYXApLm1hcChhc3luYyAoW2FyZWEsIGtleXNdKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGFyZWFSZXMgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KGtleXMubWFwKChrZXkpID0+IGtleS5kcml2ZXJNZXRhS2V5KSk7XG5cdFx0XHRcdGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0cmVzdWx0c01hcFtrZXkua2V5XSA9IGFyZWFSZXNba2V5LmRyaXZlck1ldGFLZXldID8/IHt9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pKTtcblx0XHRcdHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiAoe1xuXHRcdFx0XHRrZXk6IGtleS5rZXksXG5cdFx0XHRcdG1ldGE6IHJlc3VsdHNNYXBba2V5LmtleV1cblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdHNldEl0ZW06IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRjb25zdCB7IGRyaXZlciwgZHJpdmVyS2V5IH0gPSByZXNvbHZlS2V5KGtleSk7XG5cdFx0XHRhd2FpdCBzZXRJdGVtKGRyaXZlciwgZHJpdmVyS2V5LCB2YWx1ZSk7XG5cdFx0fSxcblx0XHRzZXRJdGVtczogYXN5bmMgKGl0ZW1zKSA9PiB7XG5cdFx0XHRjb25zdCBhcmVhVG9LZXlWYWx1ZU1hcCA9IHt9O1xuXHRcdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShcImtleVwiIGluIGl0ZW0gPyBpdGVtLmtleSA6IGl0ZW0uaXRlbS5rZXkpO1xuXHRcdFx0XHRhcmVhVG9LZXlWYWx1ZU1hcFtkcml2ZXJBcmVhXSA/Pz0gW107XG5cdFx0XHRcdGFyZWFUb0tleVZhbHVlTWFwW2RyaXZlckFyZWFdLnB1c2goe1xuXHRcdFx0XHRcdGtleTogZHJpdmVyS2V5LFxuXHRcdFx0XHRcdHZhbHVlOiBpdGVtLnZhbHVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChPYmplY3QuZW50cmllcyhhcmVhVG9LZXlWYWx1ZU1hcCkubWFwKGFzeW5jIChbZHJpdmVyQXJlYSwgdmFsdWVzXSkgPT4ge1xuXHRcdFx0XHRhd2FpdCBnZXREcml2ZXIoZHJpdmVyQXJlYSkuc2V0SXRlbXModmFsdWVzKTtcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdHNldE1ldGE6IGFzeW5jIChrZXksIHByb3BlcnRpZXMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGF3YWl0IHNldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpO1xuXHRcdH0sXG5cdFx0c2V0TWV0YXM6IGFzeW5jIChpdGVtcykgPT4ge1xuXHRcdFx0Y29uc3QgYXJlYVRvTWV0YVVwZGF0ZXNNYXAgPSB7fTtcblx0XHRcdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgeyBkcml2ZXJBcmVhLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoXCJrZXlcIiBpbiBpdGVtID8gaXRlbS5rZXkgOiBpdGVtLml0ZW0ua2V5KTtcblx0XHRcdFx0YXJlYVRvTWV0YVVwZGF0ZXNNYXBbZHJpdmVyQXJlYV0gPz89IFtdO1xuXHRcdFx0XHRhcmVhVG9NZXRhVXBkYXRlc01hcFtkcml2ZXJBcmVhXS5wdXNoKHtcblx0XHRcdFx0XHRrZXk6IGRyaXZlcktleSxcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOiBpdGVtLm1ldGFcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5lbnRyaWVzKGFyZWFUb01ldGFVcGRhdGVzTWFwKS5tYXAoYXN5bmMgKFtzdG9yYWdlQXJlYSwgdXBkYXRlc10pID0+IHtcblx0XHRcdFx0Y29uc3QgZHJpdmVyID0gZ2V0RHJpdmVyKHN0b3JhZ2VBcmVhKTtcblx0XHRcdFx0Y29uc3QgbWV0YUtleXMgPSB1cGRhdGVzLm1hcCgoeyBrZXkgfSkgPT4gZ2V0TWV0YUtleShrZXkpKTtcblx0XHRcdFx0Y29uc3QgZXhpc3RpbmdNZXRhcyA9IGF3YWl0IGRyaXZlci5nZXRJdGVtcyhtZXRhS2V5cyk7XG5cdFx0XHRcdGNvbnN0IGV4aXN0aW5nTWV0YU1hcCA9IE9iamVjdC5mcm9tRW50cmllcyhleGlzdGluZ01ldGFzLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IFtrZXksIGdldE1ldGFWYWx1ZSh2YWx1ZSldKSk7XG5cdFx0XHRcdGNvbnN0IG1ldGFVcGRhdGVzID0gdXBkYXRlcy5tYXAoKHsga2V5LCBwcm9wZXJ0aWVzIH0pID0+IHtcblx0XHRcdFx0XHRjb25zdCBtZXRhS2V5ID0gZ2V0TWV0YUtleShrZXkpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRrZXk6IG1ldGFLZXksXG5cdFx0XHRcdFx0XHR2YWx1ZTogbWVyZ2VNZXRhKGV4aXN0aW5nTWV0YU1hcFttZXRhS2V5XSA/PyB7fSwgcHJvcGVydGllcylcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW1zKG1ldGFVcGRhdGVzKTtcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdHJlbW92ZUl0ZW06IGFzeW5jIChrZXksIG9wdHMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGF3YWl0IHJlbW92ZUl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSXRlbXM6IGFzeW5jIChrZXlzKSA9PiB7XG5cdFx0XHRjb25zdCBhcmVhVG9LZXlzTWFwID0ge307XG5cdFx0XHRrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRsZXQga2V5U3RyO1xuXHRcdFx0XHRsZXQgb3B0cztcblx0XHRcdFx0aWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIGtleVN0ciA9IGtleTtcblx0XHRcdFx0ZWxzZSBpZiAoXCJnZXRWYWx1ZVwiIGluIGtleSkga2V5U3RyID0ga2V5LmtleTtcblx0XHRcdFx0ZWxzZSBpZiAoXCJpdGVtXCIgaW4ga2V5KSB7XG5cdFx0XHRcdFx0a2V5U3RyID0ga2V5Lml0ZW0ua2V5O1xuXHRcdFx0XHRcdG9wdHMgPSBrZXkub3B0aW9ucztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRrZXlTdHIgPSBrZXkua2V5O1xuXHRcdFx0XHRcdG9wdHMgPSBrZXkub3B0aW9ucztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB7IGRyaXZlckFyZWEsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXlTdHIpO1xuXHRcdFx0XHRhcmVhVG9LZXlzTWFwW2RyaXZlckFyZWFdID8/PSBbXTtcblx0XHRcdFx0YXJlYVRvS2V5c01hcFtkcml2ZXJBcmVhXS5wdXNoKGRyaXZlcktleSk7XG5cdFx0XHRcdGlmIChvcHRzPy5yZW1vdmVNZXRhKSBhcmVhVG9LZXlzTWFwW2RyaXZlckFyZWFdLnB1c2goZ2V0TWV0YUtleShkcml2ZXJLZXkpKTtcblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmVudHJpZXMoYXJlYVRvS2V5c01hcCkubWFwKGFzeW5jIChbZHJpdmVyQXJlYSwga2V5c10pID0+IHtcblx0XHRcdFx0YXdhaXQgZ2V0RHJpdmVyKGRyaXZlckFyZWEpLnJlbW92ZUl0ZW1zKGtleXMpO1xuXHRcdFx0fSkpO1xuXHRcdH0sXG5cdFx0Y2xlYXI6IGFzeW5jIChiYXNlKSA9PiB7XG5cdFx0XHRhd2FpdCBnZXREcml2ZXIoYmFzZSkuY2xlYXIoKTtcblx0XHR9LFxuXHRcdHJlbW92ZU1ldGE6IGFzeW5jIChrZXksIHByb3BlcnRpZXMpID0+IHtcblx0XHRcdGNvbnN0IHsgZHJpdmVyLCBkcml2ZXJLZXkgfSA9IHJlc29sdmVLZXkoa2V5KTtcblx0XHRcdGF3YWl0IHJlbW92ZU1ldGEoZHJpdmVyLCBkcml2ZXJLZXksIHByb3BlcnRpZXMpO1xuXHRcdH0sXG5cdFx0c25hcHNob3Q6IGFzeW5jIChiYXNlLCBvcHRzKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgZ2V0RHJpdmVyKGJhc2UpLnNuYXBzaG90KCk7XG5cdFx0XHRvcHRzPy5leGNsdWRlS2V5cz8uZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2tleV07XG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2dldE1ldGFLZXkoa2V5KV07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH0sXG5cdFx0cmVzdG9yZVNuYXBzaG90OiBhc3luYyAoYmFzZSwgZGF0YSkgPT4ge1xuXHRcdFx0YXdhaXQgZ2V0RHJpdmVyKGJhc2UpLnJlc3RvcmVTbmFwc2hvdChkYXRhKTtcblx0XHR9LFxuXHRcdHdhdGNoOiAoa2V5LCBjYikgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0cmV0dXJuIHdhdGNoKGRyaXZlciwgZHJpdmVyS2V5LCBjYik7XG5cdFx0fSxcblx0XHR1bndhdGNoKCkge1xuXHRcdFx0T2JqZWN0LnZhbHVlcyhkcml2ZXJzKS5mb3JFYWNoKChkcml2ZXIpID0+IHtcblx0XHRcdFx0ZHJpdmVyLnVud2F0Y2goKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0ZGVmaW5lSXRlbTogKGtleSwgb3B0cykgPT4ge1xuXHRcdFx0Y29uc3QgeyBkcml2ZXIsIGRyaXZlcktleSB9ID0gcmVzb2x2ZUtleShrZXkpO1xuXHRcdFx0Y29uc3QgeyB2ZXJzaW9uOiB0YXJnZXRWZXJzaW9uID0gMSwgbWlncmF0aW9ucyA9IHt9LCBvbk1pZ3JhdGlvbkNvbXBsZXRlLCBkZWJ1ZyA9IGZhbHNlIH0gPSBvcHRzID8/IHt9O1xuXHRcdFx0aWYgKHRhcmdldFZlcnNpb24gPCAxKSB0aHJvdyBFcnJvcihcIlN0b3JhZ2UgaXRlbSB2ZXJzaW9uIGNhbm5vdCBiZSBsZXNzIHRoYW4gMS4gSW5pdGlhbCB2ZXJzaW9ucyBzaG91bGQgYmUgc2V0IHRvIDEsIG5vdCAwLlwiKTtcblx0XHRcdGxldCBuZWVkc1ZlcnNpb25TZXQgPSBmYWxzZTtcblx0XHRcdGNvbnN0IG1pZ3JhdGUgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRyaXZlck1ldGFLZXkgPSBnZXRNZXRhS2V5KGRyaXZlcktleSk7XG5cdFx0XHRcdGNvbnN0IFt7IHZhbHVlIH0sIHsgdmFsdWU6IG1ldGEgfV0gPSBhd2FpdCBkcml2ZXIuZ2V0SXRlbXMoW2RyaXZlcktleSwgZHJpdmVyTWV0YUtleV0pO1xuXHRcdFx0XHRuZWVkc1ZlcnNpb25TZXQgPSB2YWx1ZSA9PSBudWxsICYmIG1ldGE/LnYgPT0gbnVsbCAmJiAhIXRhcmdldFZlcnNpb247XG5cdFx0XHRcdGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gbWV0YT8udiA/PyAxO1xuXHRcdFx0XHRpZiAoY3VycmVudFZlcnNpb24gPiB0YXJnZXRWZXJzaW9uKSB0aHJvdyBFcnJvcihgVmVyc2lvbiBkb3duZ3JhZGUgZGV0ZWN0ZWQgKHYke2N1cnJlbnRWZXJzaW9ufSAtPiB2JHt0YXJnZXRWZXJzaW9ufSkgZm9yIFwiJHtrZXl9XCJgKTtcblx0XHRcdFx0aWYgKGN1cnJlbnRWZXJzaW9uID09PSB0YXJnZXRWZXJzaW9uKSByZXR1cm47XG5cdFx0XHRcdGlmIChkZWJ1ZykgY29uc29sZS5kZWJ1ZyhgW0B3eHQtZGV2L3N0b3JhZ2VdIFJ1bm5pbmcgc3RvcmFnZSBtaWdyYXRpb24gZm9yICR7a2V5fTogdiR7Y3VycmVudFZlcnNpb259IC0+IHYke3RhcmdldFZlcnNpb259YCk7XG5cdFx0XHRcdGNvbnN0IG1pZ3JhdGlvbnNUb1J1biA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRhcmdldFZlcnNpb24gLSBjdXJyZW50VmVyc2lvbiB9LCAoXywgaSkgPT4gY3VycmVudFZlcnNpb24gKyBpICsgMSk7XG5cdFx0XHRcdGxldCBtaWdyYXRlZFZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdGZvciAoY29uc3QgbWlncmF0ZVRvVmVyc2lvbiBvZiBtaWdyYXRpb25zVG9SdW4pIHRyeSB7XG5cdFx0XHRcdFx0bWlncmF0ZWRWYWx1ZSA9IGF3YWl0IG1pZ3JhdGlvbnM/LlttaWdyYXRlVG9WZXJzaW9uXT8uKG1pZ3JhdGVkVmFsdWUpID8/IG1pZ3JhdGVkVmFsdWU7XG5cdFx0XHRcdFx0aWYgKGRlYnVnKSBjb25zb2xlLmRlYnVnKGBbQHd4dC1kZXYvc3RvcmFnZV0gU3RvcmFnZSBtaWdyYXRpb24gcHJvY2Vzc2VkIGZvciB2ZXJzaW9uOiB2JHttaWdyYXRlVG9WZXJzaW9ufWApO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgTWlncmF0aW9uRXJyb3Ioa2V5LCBtaWdyYXRlVG9WZXJzaW9uLCB7IGNhdXNlOiBlcnIgfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgZHJpdmVyLnNldEl0ZW1zKFt7XG5cdFx0XHRcdFx0a2V5OiBkcml2ZXJLZXksXG5cdFx0XHRcdFx0dmFsdWU6IG1pZ3JhdGVkVmFsdWVcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGtleTogZHJpdmVyTWV0YUtleSxcblx0XHRcdFx0XHR2YWx1ZToge1xuXHRcdFx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0XHRcdHY6IHRhcmdldFZlcnNpb25cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1dKTtcblx0XHRcdFx0aWYgKGRlYnVnKSBjb25zb2xlLmRlYnVnKGBbQHd4dC1kZXYvc3RvcmFnZV0gU3RvcmFnZSBtaWdyYXRpb24gY29tcGxldGVkIGZvciAke2tleX0gdiR7dGFyZ2V0VmVyc2lvbn1gLCB7IG1pZ3JhdGVkVmFsdWUgfSk7XG5cdFx0XHRcdG9uTWlncmF0aW9uQ29tcGxldGU/LihtaWdyYXRlZFZhbHVlLCB0YXJnZXRWZXJzaW9uKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBtaWdyYXRpb25zRG9uZSA9IG9wdHM/Lm1pZ3JhdGlvbnMgPT0gbnVsbCA/IFByb21pc2UucmVzb2x2ZSgpIDogbWlncmF0ZSgpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgW0B3eHQtZGV2L3N0b3JhZ2VdIE1pZ3JhdGlvbiBmYWlsZWQgZm9yICR7a2V5fWAsIGVycik7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGluaXRNdXRleCA9IG5ldyBNdXRleCgpO1xuXHRcdFx0Y29uc3QgZ2V0RmFsbGJhY2sgPSAoKSA9PiBvcHRzPy5mYWxsYmFjayA/PyBvcHRzPy5kZWZhdWx0VmFsdWUgPz8gbnVsbDtcblx0XHRcdGNvbnN0IGdldE9ySW5pdFZhbHVlID0gKCkgPT4gaW5pdE11dGV4LnJ1bkV4Y2x1c2l2ZShhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gYXdhaXQgZHJpdmVyLmdldEl0ZW0oZHJpdmVyS2V5KTtcblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwgfHwgb3B0cz8uaW5pdCA9PSBudWxsKSByZXR1cm4gdmFsdWU7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gYXdhaXQgb3B0cy5pbml0KCk7XG5cdFx0XHRcdGF3YWl0IGRyaXZlci5zZXRJdGVtKGRyaXZlcktleSwgbmV3VmFsdWUpO1xuXHRcdFx0XHRpZiAodmFsdWUgPT0gbnVsbCAmJiB0YXJnZXRWZXJzaW9uID4gMSkgYXdhaXQgc2V0TWV0YShkcml2ZXIsIGRyaXZlcktleSwgeyB2OiB0YXJnZXRWZXJzaW9uIH0pO1xuXHRcdFx0XHRyZXR1cm4gbmV3VmFsdWU7XG5cdFx0XHR9KTtcblx0XHRcdG1pZ3JhdGlvbnNEb25lLnRoZW4oZ2V0T3JJbml0VmFsdWUpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRnZXQgZGVmYXVsdFZhbHVlKCkge1xuXHRcdFx0XHRcdHJldHVybiBnZXRGYWxsYmFjaygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXQgZmFsbGJhY2soKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGdldEZhbGxiYWNrKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldFZhbHVlOiBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0aWYgKG9wdHM/LmluaXQpIHJldHVybiBhd2FpdCBnZXRPckluaXRWYWx1ZSgpO1xuXHRcdFx0XHRcdGVsc2UgcmV0dXJuIGF3YWl0IGdldEl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRNZXRhOiBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0cmV0dXJuIGF3YWl0IGdldE1ldGEoZHJpdmVyLCBkcml2ZXJLZXkpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXRWYWx1ZTogYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0aWYgKG5lZWRzVmVyc2lvblNldCkge1xuXHRcdFx0XHRcdFx0bmVlZHNWZXJzaW9uU2V0ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRhd2FpdCBQcm9taXNlLmFsbChbc2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgdmFsdWUpLCBzZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCB7IHY6IHRhcmdldFZlcnNpb24gfSldKTtcblx0XHRcdFx0XHR9IGVsc2UgYXdhaXQgc2V0SXRlbShkcml2ZXIsIGRyaXZlcktleSwgdmFsdWUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXRNZXRhOiBhc3luYyAocHJvcGVydGllcykgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdHJldHVybiBhd2FpdCBzZXRNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVtb3ZlVmFsdWU6IGFzeW5jIChvcHRzKSA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgbWlncmF0aW9uc0RvbmU7XG5cdFx0XHRcdFx0cmV0dXJuIGF3YWl0IHJlbW92ZUl0ZW0oZHJpdmVyLCBkcml2ZXJLZXksIG9wdHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVNZXRhOiBhc3luYyAocHJvcGVydGllcykgPT4ge1xuXHRcdFx0XHRcdGF3YWl0IG1pZ3JhdGlvbnNEb25lO1xuXHRcdFx0XHRcdHJldHVybiBhd2FpdCByZW1vdmVNZXRhKGRyaXZlciwgZHJpdmVyS2V5LCBwcm9wZXJ0aWVzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0d2F0Y2g6IChjYikgPT4gd2F0Y2goZHJpdmVyLCBkcml2ZXJLZXksIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IGNiKG5ld1ZhbHVlID8/IGdldEZhbGxiYWNrKCksIG9sZFZhbHVlID8/IGdldEZhbGxiYWNrKCkpKSxcblx0XHRcdFx0bWlncmF0ZVxuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5mdW5jdGlvbiBjcmVhdGVEcml2ZXIoc3RvcmFnZUFyZWEpIHtcblx0Y29uc3QgZ2V0U3RvcmFnZUFyZWEgPSAoKSA9PiB7XG5cdFx0aWYgKGJyb3dzZXIucnVudGltZSA9PSBudWxsKSB0aHJvdyBFcnJvcihgJ3d4dC9zdG9yYWdlJyBtdXN0IGJlIGxvYWRlZCBpbiBhIHdlYiBleHRlbnNpb24gZW52aXJvbm1lbnRcblxuIC0gSWYgdGhyb3duIGR1cmluZyBhIGJ1aWxkLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3d4dC1kZXYvd3h0L2lzc3Vlcy8zNzFcbiAtIElmIHRocm93biBkdXJpbmcgdGVzdHMsIG1vY2sgJ3d4dC9icm93c2VyJyBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d4dC5kZXYvZ3VpZGUvZ28tZnVydGhlci90ZXN0aW5nLmh0bWxcbmApO1xuXHRcdGlmIChicm93c2VyLnN0b3JhZ2UgPT0gbnVsbCkgdGhyb3cgRXJyb3IoXCJZb3UgbXVzdCBhZGQgdGhlICdzdG9yYWdlJyBwZXJtaXNzaW9uIHRvIHlvdXIgbWFuaWZlc3QgdG8gdXNlICd3eHQvc3RvcmFnZSdcIik7XG5cdFx0Y29uc3QgYXJlYSA9IGJyb3dzZXIuc3RvcmFnZVtzdG9yYWdlQXJlYV07XG5cdFx0aWYgKGFyZWEgPT0gbnVsbCkgdGhyb3cgRXJyb3IoYFwiYnJvd3Nlci5zdG9yYWdlLiR7c3RvcmFnZUFyZWF9XCIgaXMgdW5kZWZpbmVkYCk7XG5cdFx0cmV0dXJuIGFyZWE7XG5cdH07XG5cdGNvbnN0IHdhdGNoTGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0cmV0dXJuIHtcblx0XHRnZXRJdGVtOiBhc3luYyAoa2V5KSA9PiB7XG5cdFx0XHRyZXR1cm4gKGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuZ2V0KGtleSkpW2tleV07XG5cdFx0fSxcblx0XHRnZXRJdGVtczogYXN5bmMgKGtleXMpID0+IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuZ2V0KGtleXMpO1xuXHRcdFx0cmV0dXJuIGtleXMubWFwKChrZXkpID0+ICh7XG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWU6IHJlc3VsdFtrZXldID8/IG51bGxcblx0XHRcdH0pKTtcblx0XHR9LFxuXHRcdHNldEl0ZW06IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbCkgYXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5yZW1vdmUoa2V5KTtcblx0XHRcdGVsc2UgYXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5zZXQoeyBba2V5XTogdmFsdWUgfSk7XG5cdFx0fSxcblx0XHRzZXRJdGVtczogYXN5bmMgKHZhbHVlcykgPT4ge1xuXHRcdFx0Y29uc3QgbWFwID0gdmFsdWVzLnJlZHVjZSgobWFwLCB7IGtleSwgdmFsdWUgfSkgPT4ge1xuXHRcdFx0XHRtYXBba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fSwge30pO1xuXHRcdFx0YXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5zZXQobWFwKTtcblx0XHR9LFxuXHRcdHJlbW92ZUl0ZW06IGFzeW5jIChrZXkpID0+IHtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkucmVtb3ZlKGtleSk7XG5cdFx0fSxcblx0XHRyZW1vdmVJdGVtczogYXN5bmMgKGtleXMpID0+IHtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkucmVtb3ZlKGtleXMpO1xuXHRcdH0sXG5cdFx0Y2xlYXI6IGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuY2xlYXIoKTtcblx0XHR9LFxuXHRcdHNuYXBzaG90OiBhc3luYyAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXdhaXQgZ2V0U3RvcmFnZUFyZWEoKS5nZXQoKTtcblx0XHR9LFxuXHRcdHJlc3RvcmVTbmFwc2hvdDogYXN5bmMgKGRhdGEpID0+IHtcblx0XHRcdGF3YWl0IGdldFN0b3JhZ2VBcmVhKCkuc2V0KGRhdGEpO1xuXHRcdH0sXG5cdFx0d2F0Y2goa2V5LCBjYikge1xuXHRcdFx0Y29uc3QgbGlzdGVuZXIgPSAoY2hhbmdlcykgPT4ge1xuXHRcdFx0XHRjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzW2tleV07XG5cdFx0XHRcdGlmIChjaGFuZ2UgPT0gbnVsbCB8fCBkZXF1YWwoY2hhbmdlLm5ld1ZhbHVlLCBjaGFuZ2Uub2xkVmFsdWUpKSByZXR1cm47XG5cdFx0XHRcdGNiKGNoYW5nZS5uZXdWYWx1ZSA/PyBudWxsLCBjaGFuZ2Uub2xkVmFsdWUgPz8gbnVsbCk7XG5cdFx0XHR9O1xuXHRcdFx0Z2V0U3RvcmFnZUFyZWEoKS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0d2F0Y2hMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdGdldFN0b3JhZ2VBcmVhKCkub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdFx0d2F0Y2hMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHRcdH07XG5cdFx0fSxcblx0XHR1bndhdGNoKCkge1xuXHRcdFx0d2F0Y2hMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcblx0XHRcdFx0Z2V0U3RvcmFnZUFyZWEoKS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0fSk7XG5cdFx0XHR3YXRjaExpc3RlbmVycy5jbGVhcigpO1xuXHRcdH1cblx0fTtcbn1cbnZhciBNaWdyYXRpb25FcnJvciA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihrZXksIHZlcnNpb24sIG9wdGlvbnMpIHtcblx0XHRzdXBlcihgdiR7dmVyc2lvbn0gbWlncmF0aW9uIGZhaWxlZCBmb3IgXCIke2tleX1cImAsIG9wdGlvbnMpO1xuXHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgTWlncmF0aW9uRXJyb3IsIHN0b3JhZ2UgfTsiLCIvKipcbiAqIENhbG1XZWIgU2hhcmVkIFR5cGVzIGFuZCBTY2hlbWFzXG4gKlxuICogQ29yZSBpbnRlcmZhY2VzIGFuZCBab2QgdmFsaWRhdGlvbiBmb3IgdGhlIENhbG1XZWIgY29udGVudCBmaXJld2FsbCBleHRlbnNpb24uXG4gKi9cbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUHJvY2Vzc2luZyAmIEFjdGlvbiBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdNb2RlU2NoZW1hID0gei5lbnVtKFsnbG9jYWxfcnVsZXMnLCAnYnlva19sbG0nLCAnaG9zdGVkX2xsbSddKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX09QRU5ST1VURVJfTU9ERUwgPSAnb3BlbnJvdXRlci9mcmVlJztcbmV4cG9ydCBjb25zdCBPUEVOUk9VVEVSX0VORFBPSU5UID0gJ2h0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvdjEvY2hhdC9jb21wbGV0aW9ucyc7XG5leHBvcnQgY29uc3QgQUlfTU9ERUxTID0gW1xuICAgIHsgaWQ6ICdvcGVucm91dGVyL2ZyZWUnLCBsYWJlbDogJ0ZyZWUgUm91dGVyIChBdXRvKScsIGZyZWU6IHRydWUsIHJlY29tbWVuZGVkOiB0cnVlIH0sXG5dO1xuZXhwb3J0IGNvbnN0IEFjdGlvbkRlY2lzaW9uU2NoZW1hID0gei5lbnVtKFsnc2hvdycsICdibHVyJywgJ2hpZGUnLCAnbmV1dHJhbGl6ZScsICdjb2xsYXBzZScsICdyZWJ1aWxkJ10pO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGVudCBVbml0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgQ29udGVudFVuaXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCksXG4gICAgc2l0ZTogei5zdHJpbmcoKSxcbiAgICBmaW5nZXJwcmludDogei5zdHJpbmcoKSxcbiAgICBzb3VyY2VOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgdGl0bGU6IHouc3RyaW5nKCksXG4gICAgbWV0YWRhdGE6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gICAgaXNOZXc6IHouYm9vbGVhbigpLFxuICAgIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLFxufSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGFzc2lmaWNhdGlvbiBSZXN1bHRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBDbGFzc2lmaWNhdGlvblJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBkZWNpc2lvbjogQWN0aW9uRGVjaXNpb25TY2hlbWEsXG4gICAgY29uZmlkZW5jZTogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLFxuICAgIHJlYXNvbjogei5zdHJpbmcoKSxcbiAgICBuZXV0cmFsaXplZFRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVXNlciBSdWxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IFByZXNldFNlbGVjdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBwb2xpdGljczogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gICAgcmFnZWJhaXQ6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICAgIHNwb2lsZXJzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgICBjbGlja2JhaXQ6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxufSk7XG5leHBvcnQgY29uc3QgVXNlclJ1bGVzU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGJsb2NrbGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGJsb2NrbGlzdEtleXdvcmRzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGFsbG93bGlzdENoYW5uZWxzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGFsbG93bGlzdEtleXdvcmRzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIHByZXNldHM6IFByZXNldFNlbGVjdGlvblNjaGVtYS5kZWZhdWx0KHtcbiAgICAgICAgcG9saXRpY3M6IGZhbHNlLFxuICAgICAgICByYWdlYmFpdDogZmFsc2UsXG4gICAgICAgIHNwb2lsZXJzOiBmYWxzZSxcbiAgICAgICAgY2xpY2tiYWl0OiBmYWxzZSxcbiAgICB9KSxcbn0pO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTmV1dHJhbGl6YXRpb24gU2V0dGluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBOZXV0cmFsaXphdGlvbk1vZGVTY2hlbWEgPSB6LmVudW0oWydsaWdodCcsICdtZWRpdW0nLCAnc3RyaWN0J10pO1xuZXhwb3J0IGNvbnN0IE5ldXRyYWxpemF0aW9uU2V0dGluZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgZW5hYmxlZDogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBtb2RlOiBOZXV0cmFsaXphdGlvbk1vZGVTY2hlbWEuZGVmYXVsdCgnbWVkaXVtJyksXG4gICAgc2hvd0luZGljYXRvcjogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBzaG93RGlmZk9uSG92ZXI6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgZXhjbHVkZURvbWFpbnM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG59KTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TmV1dHJhbGl6YXRpb25TZXR0aW5ncyA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIG1vZGU6ICdtZWRpdW0nLFxuICAgIHNob3dJbmRpY2F0b3I6IHRydWUsXG4gICAgc2hvd0RpZmZPbkhvdmVyOiB0cnVlLFxuICAgIGV4Y2x1ZGVEb21haW5zOiBbXSxcbn07XG5leHBvcnQgY29uc3QgUmVhZGVyU2V0dGluZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgZW5hYmxlZDogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBkZWZhdWx0TGF5b3V0OiB6LnN0cmluZygpLmRlZmF1bHQoJ2F1dG8nKSxcbiAgICBkZWZhdWx0VGhlbWU6IHouc3RyaW5nKCkuZGVmYXVsdCgnZGVmYXVsdCcpLFxuICAgIGF1dG9PcGVuOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHRleHRPbmx5OiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGZvbnQ6IHouc3RyaW5nKCkuZGVmYXVsdCgnSW50ZXInKSxcbiAgICBmb250U2l6ZTogei5zdHJpbmcoKS5kZWZhdWx0KCcxN3B4JyksXG4gICAgc2hvd0luQ29udGV4dE1lbnU6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgYXBpRW5kcG9pbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBhcGlLZXk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRSZWFkZXJTZXR0aW5ncyA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGRlZmF1bHRMYXlvdXQ6ICdhdXRvJyxcbiAgICBkZWZhdWx0VGhlbWU6ICdkZWZhdWx0JyxcbiAgICBhdXRvT3BlbjogdHJ1ZSxcbiAgICB0ZXh0T25seTogdHJ1ZSxcbiAgICBmb250OiAnSW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgc2hvd0luQ29udGV4dE1lbnU6IHRydWUsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVkaWEgRmlsdGVyIFNldHRpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgTWVkaWFGaWx0ZXJNb2RlU2NoZW1hID0gei5lbnVtKFsnb2ZmJywgJ2JsdXInLCAnaGlkZSddKTtcbmV4cG9ydCBjb25zdCBNZWRpYUZpbHRlclNldHRpbmdzU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgbW9kZTogTWVkaWFGaWx0ZXJNb2RlU2NoZW1hLmRlZmF1bHQoJ2JsdXInKSxcbiAgICBibHVyVGhyZXNob2xkOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSkuZGVmYXVsdCgwLjUpLFxuICAgIGhpZGVUaHJlc2hvbGQ6IHoubnVtYmVyKCkubWluKDApLm1heCgxKS5kZWZhdWx0KDAuOCksXG4gICAgYW5hbHl6ZUFsdFRleHQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgYW5hbHl6ZVRodW1ibmFpbHM6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgc2hvd1RvZ2dsZTogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICByZXZlYWxPbkhvdmVyOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdE1lZGlhRmlsdGVyU2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBtb2RlOiAnYmx1cicsXG4gICAgYmx1clRocmVzaG9sZDogMC41LFxuICAgIGhpZGVUaHJlc2hvbGQ6IDAuOCxcbiAgICBhbmFseXplQWx0VGV4dDogdHJ1ZSxcbiAgICBhbmFseXplVGh1bWJuYWlsczogdHJ1ZSxcbiAgICBzaG93VG9nZ2xlOiB0cnVlLFxuICAgIHJldmVhbE9uSG92ZXI6IHRydWUsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2l0ZSBGaWx0ZXIgU2V0dGluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBTaXRlQ2F0ZWdvcnlTY2hlbWEgPSB6LmVudW0oW1xuICAgICdzb2NpYWxfbWVkaWEnLFxuICAgICdjb250ZW50X2Zhcm1zJyxcbiAgICAnZ2FtYmxpbmcnLFxuICAgICdhZHVsdCcsXG4gICAgJ3BpcmFjeScsXG4gICAgJ21hbHdhcmUnLFxuICAgICdzcGFtJyxcbiAgICAnZmFrZV9uZXdzJyxcbiAgICAncHJvZHVjdGl2aXR5JyxcbiAgICAnc2hvcHBpbmcnLFxuICAgICdnYW1pbmcnLFxuICAgICdzdHJlYW1pbmcnLFxuICAgICduZXdzJyxcbiAgICAnY3VzdG9tJyxcbl0pO1xuZXhwb3J0IGNvbnN0IFNpdGVGaWx0ZXJTZXR0aW5nc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBlbmFibGVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGJsb2NrQmxvY2tlZFNpdGVzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHNlYXJjaEZpbHRlckVuYWJsZWQ6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG4gICAgaGlkZUJsb2NrZWRSZXN1bHRzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHNob3dDYXRlZ29yeUJhZGdlOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgICBibG9ja2VkQ2F0ZWdvcmllczogei5hcnJheShTaXRlQ2F0ZWdvcnlTY2hlbWEpLmRlZmF1bHQoW10pLFxuICAgIGN1c3RvbUJsb2NrbGlzdDogei5hcnJheSh6LnN0cmluZygpKS5kZWZhdWx0KFtdKSxcbiAgICBjdXN0b21BbGxvd2xpc3Q6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgdXNlRXh0ZXJuYWxCbG9ja2xpc3RzOiB6LmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIHJlZGlyZWN0VG9EREc6IHouYm9vbGVhbigpLmRlZmF1bHQodHJ1ZSksXG59KTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2l0ZUZpbHRlclNldHRpbmdzID0ge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgYmxvY2tCbG9ja2VkU2l0ZXM6IHRydWUsXG4gICAgc2VhcmNoRmlsdGVyRW5hYmxlZDogdHJ1ZSxcbiAgICBoaWRlQmxvY2tlZFJlc3VsdHM6IHRydWUsXG4gICAgc2hvd0NhdGVnb3J5QmFkZ2U6IGZhbHNlLFxuICAgIGJsb2NrZWRDYXRlZ29yaWVzOiBbJ2dhbWJsaW5nJywgJ21hbHdhcmUnLCAnc3BhbScsICdmYWtlX25ld3MnXSxcbiAgICBjdXN0b21CbG9ja2xpc3Q6IFtdLFxuICAgIGN1c3RvbUFsbG93bGlzdDogW10sXG4gICAgdXNlRXh0ZXJuYWxCbG9ja2xpc3RzOiB0cnVlLFxuICAgIHJlZGlyZWN0VG9EREc6IHRydWUsXG59O1xuZXhwb3J0IGNvbnN0IFJFQURFUl9GT05UUyA9IFtcbiAgICB7IGlkOiAnSW50ZXInLCBsYWJlbDogJ0ludGVyJywgZmFtaWx5OiAnSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYnLCBzdHlsZTogJ01vZGVybicgfSxcbiAgICB7IGlkOiAnU3BhY2UgR3JvdGVzaycsIGxhYmVsOiAnU3BhY2UgR3JvdGVzaycsIGZhbWlseTogJ1wiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmJywgc3R5bGU6ICdGdXR1cmlzdGljJyB9LFxuICAgIHsgaWQ6ICdJQk0gUGxleCBTYW5zJywgbGFiZWw6ICdJQk0gUGxleCcsIGZhbWlseTogJ1wiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmJywgc3R5bGU6ICdUZWNobmljYWwnIH0sXG4gICAgeyBpZDogJ0pldEJyYWlucyBNb25vJywgbGFiZWw6ICdKZXRCcmFpbnMgTW9ubycsIGZhbWlseTogJ1wiSmV0QnJhaW5zIE1vbm9cIiwgbW9ub3NwYWNlJywgc3R5bGU6ICdDb2RlJyB9LFxuICAgIHsgaWQ6ICdHZW9yZ2lhJywgbGFiZWw6ICdHZW9yZ2lhJywgZmFtaWx5OiAnR2VvcmdpYSwgc2VyaWYnLCBzdHlsZTogJ0NsYXNzaWMnIH0sXG4gICAgeyBpZDogJ0F0a2luc29uIEh5cGVybGVnaWJsZScsIGxhYmVsOiAnQXRraW5zb24nLCBmYW1pbHk6ICdcIkF0a2luc29uIEh5cGVybGVnaWJsZVwiLCBzYW5zLXNlcmlmJywgc3R5bGU6ICdBY2Nlc3NpYmxlJyB9LFxuXTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVzZXIgU2V0dGluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBVc2VyU2V0dGluZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgZW5hYmxlZDogei5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgICBwcm9jZXNzaW5nTW9kZTogUHJvY2Vzc2luZ01vZGVTY2hlbWEuZGVmYXVsdCgnbG9jYWxfcnVsZXMnKSxcbiAgICBzdHJpY3RuZXNzOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMTAwKS5kZWZhdWx0KDgwKSxcbiAgICBydWxlczogVXNlclJ1bGVzU2NoZW1hLmRlZmF1bHQoe1xuICAgICAgICBibG9ja2xpc3RDaGFubmVsczogW10sXG4gICAgICAgIGJsb2NrbGlzdEtleXdvcmRzOiBbXSxcbiAgICAgICAgYWxsb3dsaXN0Q2hhbm5lbHM6IFtdLFxuICAgICAgICBhbGxvd2xpc3RLZXl3b3JkczogW10sXG4gICAgICAgIHByZXNldHM6IHsgcG9saXRpY3M6IGZhbHNlLCByYWdlYmFpdDogdHJ1ZSwgc3BvaWxlcnM6IGZhbHNlLCBjbGlja2JhaXQ6IHRydWUgfSxcbiAgICB9KSxcbiAgICBieW9rS2V5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgYWlNb2RlbDogei5zdHJpbmcoKS5kZWZhdWx0KERFRkFVTFRfT1BFTlJPVVRFUl9NT0RFTCksXG4gICAgY3VzdG9tRW5kcG9pbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBuZXV0cmFsaXphdGlvbjogTmV1dHJhbGl6YXRpb25TZXR0aW5nc1NjaGVtYS5kZWZhdWx0KGRlZmF1bHROZXV0cmFsaXphdGlvblNldHRpbmdzKSxcbiAgICByZWFkZXI6IFJlYWRlclNldHRpbmdzU2NoZW1hLmRlZmF1bHQoZGVmYXVsdFJlYWRlclNldHRpbmdzKSxcbiAgICBtZWRpYUZpbHRlcjogTWVkaWFGaWx0ZXJTZXR0aW5nc1NjaGVtYS5kZWZhdWx0KGRlZmF1bHRNZWRpYUZpbHRlclNldHRpbmdzKSxcbiAgICBzaXRlRmlsdGVyOiBTaXRlRmlsdGVyU2V0dGluZ3NTY2hlbWEuZGVmYXVsdChkZWZhdWx0U2l0ZUZpbHRlclNldHRpbmdzKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRVc2VyU2V0dGluZ3MgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwcm9jZXNzaW5nTW9kZTogJ2xvY2FsX3J1bGVzJyxcbiAgICBzdHJpY3RuZXNzOiA4MCxcbiAgICBydWxlczoge1xuICAgICAgICBibG9ja2xpc3RDaGFubmVsczogW10sXG4gICAgICAgIGJsb2NrbGlzdEtleXdvcmRzOiBbXSxcbiAgICAgICAgYWxsb3dsaXN0Q2hhbm5lbHM6IFtdLFxuICAgICAgICBhbGxvd2xpc3RLZXl3b3JkczogW10sXG4gICAgICAgIC8vIE9waW5pb25hdGVkIGRlZmF1bHRzIC0gZW5hYmxlIGtleSBmaWx0ZXJzXG4gICAgICAgIHByZXNldHM6IHsgcG9saXRpY3M6IGZhbHNlLCByYWdlYmFpdDogdHJ1ZSwgc3BvaWxlcnM6IGZhbHNlLCBjbGlja2JhaXQ6IHRydWUgfSxcbiAgICB9LFxuICAgIGJ5b2tLZXk6IHVuZGVmaW5lZCxcbiAgICBhaU1vZGVsOiBERUZBVUxUX09QRU5ST1VURVJfTU9ERUwsXG4gICAgY3VzdG9tRW5kcG9pbnQ6IHVuZGVmaW5lZCxcbiAgICBuZXV0cmFsaXphdGlvbjogZGVmYXVsdE5ldXRyYWxpemF0aW9uU2V0dGluZ3MsXG4gICAgcmVhZGVyOiBkZWZhdWx0UmVhZGVyU2V0dGluZ3MsXG4gICAgbWVkaWFGaWx0ZXI6IGRlZmF1bHRNZWRpYUZpbHRlclNldHRpbmdzLFxuICAgIHNpdGVGaWx0ZXI6IGRlZmF1bHRTaXRlRmlsdGVyU2V0dGluZ3MsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRmluZ2VycHJpbnRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogU2ltcGxlIHN0cmluZyBoYXNoIGFsZ29yaXRobSBmb3IgZmluZ2VycHJpbnRpbmcgY29udGVudC5cbiAqIE5vdCBjcnl0b2dyYXBoaWNhbGx5IHNlY3VyZSwgYnV0IGZhc3QgYW5kIHN1ZmZpY2llbnQgZm9yIGNhY2hpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVIYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gICAgfVxuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKDM2KTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBzdGFibGUgZmluZ2VycHJpbnQgZm9yIGEgQ29udGVudFVuaXQuXG4gKiBDb21iaW5lcyB0aXRsZSBhbmQgc291cmNlTmFtZSwgaWdub3JlcyB2YXJpYWJsZSBmaWVsZHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUZpbmdlcnByaW50KHVuaXQpIHtcbiAgICBjb25zdCBzZWVkID0gYCR7dW5pdC50aXRsZX18JHt1bml0LnNvdXJjZU5hbWUgfHwgJyd9fCR7dW5pdC5zaXRlfWA7XG4gICAgcmV0dXJuIHNpbXBsZUhhc2goc2VlZCk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdG9yYWdlIEtleXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBTVE9SQUdFX0tFWVMgPSB7XG4gICAgU0VUVElOR1M6ICdsb2NhbDpzZXR0aW5ncycsXG4gICAgREVDSVNJT05fQ0FDSEU6ICdsb2NhbDpkZWNpc2lvbkNhY2hlJyxcbiAgICBCWU9LX0tFWVM6ICdsb2NhbDpieW9rS2V5cycsXG4gICAgU1RBVFM6ICdsb2NhbDpzdGF0cycsXG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVzc2FnZSBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gICAgQ0xBU1NJRllfVU5JVDogJ2NsYXNzaWZ5VW5pdCcsXG4gICAgR0VUX1NFVFRJTkdTOiAnZ2V0U2V0dGluZ3MnLFxuICAgIFVQREFURV9TRVRUSU5HUzogJ3VwZGF0ZVNldHRpbmdzJyxcbiAgICBDTEVBUl9DQUNIRTogJ2NsZWFyQ2FjaGUnLFxuICAgIEdFVF9TVEFUUzogJ2dldFN0YXRzJyxcbiAgICBJTkNSRU1FTlRfU1RBVDogJ2luY3JlbWVudFN0YXQnLFxufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZhbGlkYXRpb24gSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBWYWxpZGF0ZSBhIENvbnRlbnRVbml0IG9iamVjdCBhZ2FpbnN0IHRoZSBzY2hlbWEuXG4gKiBUaHJvd3MgWm9kRXJyb3IgaWYgaW52YWxpZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29udGVudFVuaXQodW5pdCkge1xuICAgIHJldHVybiBDb250ZW50VW5pdFNjaGVtYS5wYXJzZSh1bml0KTtcbn1cbi8qKlxuICogVmFsaWRhdGUgYSBDbGFzc2lmaWNhdGlvblJlc3VsdCBvYmplY3QgYWdhaW5zdCB0aGUgc2NoZW1hLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDbGFzc2lmaWNhdGlvblJlc3VsdChyZXN1bHQpIHtcbiAgICByZXR1cm4gQ2xhc3NpZmljYXRpb25SZXN1bHRTY2hlbWEucGFyc2UocmVzdWx0KTtcbn1cbi8qKlxuICogVmFsaWRhdGUgVXNlclNldHRpbmdzIGFnYWluc3QgdGhlIHNjaGVtYS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXNlclNldHRpbmdzKHNldHRpbmdzKSB7XG4gICAgcmV0dXJuIFVzZXJTZXR0aW5nc1NjaGVtYS5wYXJzZShzZXR0aW5ncyk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbmhhbmNlZCBTdGF0aXN0aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgRW5oYW5jZWRTdGF0c1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB0b3RhbEZpbHRlcmVkOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgYnlBY3Rpb246IHoub2JqZWN0KHtcbiAgICAgICAgaGlkZTogei5udW1iZXIoKS5kZWZhdWx0KDApLFxuICAgICAgICBibHVyOiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgICAgIG5ldXRyYWxpemU6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgY29sbGFwc2U6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICB9KS5kZWZhdWx0KHsgaGlkZTogMCwgYmx1cjogMCwgbmV1dHJhbGl6ZTogMCwgY29sbGFwc2U6IDAgfSksXG4gICAgYnlQcmVzZXQ6IHoub2JqZWN0KHtcbiAgICAgICAgcG9saXRpY3M6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgcmFnZWJhaXQ6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgc3BvaWxlcnM6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICAgICAgY2xpY2tiYWl0OiB6Lm51bWJlcigpLmRlZmF1bHQoMCksXG4gICAgfSkuZGVmYXVsdCh7IHBvbGl0aWNzOiAwLCByYWdlYmFpdDogMCwgc3BvaWxlcnM6IDAsIGNsaWNrYmFpdDogMCB9KSxcbiAgICB0aW1lU2F2ZWQ6IHoubnVtYmVyKCkuZGVmYXVsdCgwKSxcbiAgICB0b3BGaWx0ZXJlZFNvdXJjZXM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVmYXVsdChbXSksXG4gICAgZGFpbHlIaXN0b3J5OiB6LmFycmF5KHoub2JqZWN0KHtcbiAgICAgICAgZGF0ZTogei5zdHJpbmcoKSxcbiAgICAgICAgY291bnQ6IHoubnVtYmVyKCksXG4gICAgfSkpLmRlZmF1bHQoW10pLFxuICAgIGxhc3RSZXNldDogei5udW1iZXIoKS5kZWZhdWx0KERhdGUubm93KCkpLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdEVuaGFuY2VkU3RhdHMgPSB7XG4gICAgdG90YWxGaWx0ZXJlZDogMCxcbiAgICBieUFjdGlvbjogeyBoaWRlOiAwLCBibHVyOiAwLCBuZXV0cmFsaXplOiAwLCBjb2xsYXBzZTogMCB9LFxuICAgIGJ5UHJlc2V0OiB7IHBvbGl0aWNzOiAwLCByYWdlYmFpdDogMCwgc3BvaWxlcnM6IDAsIGNsaWNrYmFpdDogMCB9LFxuICAgIHRpbWVTYXZlZDogMCxcbiAgICB0b3BGaWx0ZXJlZFNvdXJjZXM6IFtdLFxuICAgIGRhaWx5SGlzdG9yeTogW10sXG4gICAgbGFzdFJlc2V0OiBEYXRlLm5vdygpLFxufTtcbiIsIi8qKlxuICogU3RvcmFnZSB1dGlsaXRpZXMgZm9yIENhbG1XZWIgZXh0ZW5zaW9uXG4gKlxuICogVXNlcyBXWFQncyBuYXRpdmUgc3RvcmFnZSBBUEkgd2l0aCBhcHByb3ByaWF0ZSBzdG9yYWdlIGFyZWFzOlxuICogLSBzeW5jOiBmb3IgdXNlciBzZXR0aW5ncyAoc3luYyBhY3Jvc3MgZGV2aWNlcylcbiAqIC0gbG9jYWw6IGZvciBjYWNoZSwgQllPSyBrZXlzLCBzdGF0cyAoZGV2aWNlLXNwZWNpZmljKVxuICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICd3eHQvdXRpbHMvc3RvcmFnZSc7XG5pbXBvcnQgdHlwZSB7IFVzZXJTZXR0aW5ncywgQ2xhc3NpZmljYXRpb25SZXN1bHQgfSBmcm9tICdAY2FsbXdlYi9zaGFyZWQnO1xuaW1wb3J0IHsgZGVmYXVsdFVzZXJTZXR0aW5ncyB9IGZyb20gJ0BjYWxtd2ViL3NoYXJlZCc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0b3JhZ2UgS2V5cyAodXNpbmcgYXBwcm9wcmlhdGUgcHJlZml4ZXMpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBTVE9SQUdFX0tFWVMgPSB7XG4gIFNFVFRJTkdTOiAnc3luYzpjYWxtd2ViLXNldHRpbmdzJyBhcyBjb25zdCxcbiAgREVDSVNJT05fQ0FDSEU6ICdsb2NhbDpjYWxtd2ViLWNhY2hlJyBhcyBjb25zdCxcbiAgQllPS19LRVlTOiAnbG9jYWw6Y2FsbXdlYi1ieW9rJyBhcyBjb25zdCxcbiAgU1RBVFM6ICdsb2NhbDpjYWxtd2ViLXN0YXRzJyBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERlZmF1bHQgVmFsdWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGRlZmF1bHREZWNpc2lvbkNhY2hlOiBSZWNvcmQ8c3RyaW5nLCBDbGFzc2lmaWNhdGlvblJlc3VsdD4gPSB7fTtcbmNvbnN0IGRlZmF1bHRCWU9LS2V5czogeyBvcGVuYWk/OiBzdHJpbmc7IGFudGhyb3BpYz86IHN0cmluZyB9ID0ge307XG5jb25zdCBkZWZhdWx0U3RhdHM6IHsgdG90YWxGaWx0ZXJlZDogbnVtYmVyOyBsYXN0UmVzZXQ6IG51bWJlciB9ID0ge1xuICB0b3RhbEZpbHRlcmVkOiAwLFxuICBsYXN0UmVzZXQ6IERhdGUubm93KCksXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUeXBlZCBTdG9yYWdlIEl0ZW1zICh1c2luZyBXWFQgc3RvcmFnZSBkaXJlY3RseSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBVc2VyIHNldHRpbmdzIHN0b3JlIChzeW5jIGFjcm9zcyBkZXZpY2VzKVxuICovXG5leHBvcnQgY29uc3Qgc2V0dGluZ3NTdG9yZSA9IHN0b3JhZ2UuZGVmaW5lSXRlbTxVc2VyU2V0dGluZ3M+KFNUT1JBR0VfS0VZUy5TRVRUSU5HUywge1xuICBmYWxsYmFjazogZGVmYXVsdFVzZXJTZXR0aW5ncyxcbn0pO1xuXG4vKipcbiAqIERlY2lzaW9uIGNhY2hlIHN0b3JlIChsb2NhbCB3aXRoIExSVSBldmljdGlvbilcbiAqIFRoaXMgaXMgYSBzaW1wbGUgb2JqZWN0IHJlY29yZCBmb3Igc2VyaWFsaXphdGlvbjsgd2UgaW1wbGVtZW50IExSVSBsb2dpYyBpbiBoZWxwZXJzLlxuICovXG5leHBvcnQgY29uc3QgZGVjaXNpb25DYWNoZSA9IHN0b3JhZ2UuZGVmaW5lSXRlbTxSZWNvcmQ8c3RyaW5nLCBDbGFzc2lmaWNhdGlvblJlc3VsdD4+KFxuICBTVE9SQUdFX0tFWVMuREVDSVNJT05fQ0FDSEUsXG4gIHsgZmFsbGJhY2s6IGRlZmF1bHREZWNpc2lvbkNhY2hlIH1cbik7XG5cbi8qKlxuICogQllPSyBBUEkga2V5cyBzdG9yZSAobG9jYWwgb25seSlcbiAqL1xuZXhwb3J0IGNvbnN0IGJ5b2tLZXlzU3RvcmUgPSBzdG9yYWdlLmRlZmluZUl0ZW08eyBvcGVuYWk/OiBzdHJpbmc7IGFudGhyb3BpYz86IHN0cmluZyB9PihcbiAgU1RPUkFHRV9LRVlTLkJZT0tfS0VZUyxcbiAgeyBmYWxsYmFjazogZGVmYXVsdEJZT0tLZXlzIH1cbik7XG5cbi8qKlxuICogU3RhdGlzdGljcyBzdG9yZSAobG9jYWwgb25seSlcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXRzU3RvcmUgPSBzdG9yYWdlLmRlZmluZUl0ZW08eyB0b3RhbEZpbHRlcmVkOiBudW1iZXI7IGxhc3RSZXNldDogbnVtYmVyIH0+KFxuICBTVE9SQUdFX0tFWVMuU1RBVFMsXG4gIHsgZmFsbGJhY2s6IGRlZmF1bHRTdGF0cyB9XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMUlUgQ2FjaGUgV3JhcHBlclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBMUlVfTUFYX1NJWkUgPSAxMDAwO1xuXG4vKipcbiAqIEdldCBhIGNhY2hlZCBjbGFzc2lmaWNhdGlvbiByZXN1bHQgYnkgZmluZ2VycHJpbnQsIHdpdGggTFJVIGV2aWN0aW9uIGxvZ2ljLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FjaGVkUmVzdWx0KGZpbmdlcnByaW50OiBzdHJpbmcpOiBQcm9taXNlPENsYXNzaWZpY2F0aW9uUmVzdWx0IHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGNhY2hlID0gYXdhaXQgZGVjaXNpb25DYWNoZS5nZXRWYWx1ZSgpO1xuICBjb25zdCBlbnRyeSA9IGNhY2hlW2ZpbmdlcnByaW50XTtcbiAgaWYgKCFlbnRyeSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAvLyBTaW1wbGUgTFJVOiBtb3ZlIHRvIGVuZCAod2UnbGwgaW1wbGVtZW50IGZ1bGwgTFJVIHdpdGggdGltZXN0YW1wIG9uIHNldClcbiAgLy8gRm9yIG5vdywganVzdCByZXR1cm4gdGhlIGVudHJ5OyB3ZSdsbCBwcnVuZSBvbiBzZXQuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuLyoqXG4gKiBTZXQgYSBjYWNoZWQgY2xhc3NpZmljYXRpb24gcmVzdWx0IHdpdGggTFJVIGV2aWN0aW9uLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0Q2FjaGVkUmVzdWx0KGZpbmdlcnByaW50OiBzdHJpbmcsIHJlc3VsdDogQ2xhc3NpZmljYXRpb25SZXN1bHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgY2FjaGUgPSBhd2FpdCBkZWNpc2lvbkNhY2hlLmdldFZhbHVlKCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjYWNoZSk7XG5cbiAgLy8gSWYgYWRkaW5nIGEgbmV3IGtleSBhbmQgZXhjZWVkaW5nIG1heCBzaXplLCByZW1vdmUgbGVhc3QgcmVjZW50bHkgdXNlZFxuICAvLyAoV2UnbGwgdXNlIHNpbXBsZSBhcHByb2FjaDogaWYgc2l6ZSA+PSBtYXgsIHJlbW92ZSBmaXJzdCBrZXkpXG4gIGlmICghY2FjaGVbZmluZ2VycHJpbnRdICYmIGtleXMubGVuZ3RoID49IExSVV9NQVhfU0laRSkge1xuICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgZW50cnkgKG9sZGVzdCwgYXBwcm94aW1hdGluZyBMUlUpXG4gICAgY29uc3Qga2V5VG9SZW1vdmUgPSBrZXlzWzBdO1xuICAgIGRlbGV0ZSBjYWNoZVtrZXlUb1JlbW92ZV07XG4gIH1cblxuICBjYWNoZVtmaW5nZXJwcmludF0gPSByZXN1bHQ7XG4gIGF3YWl0IGRlY2lzaW9uQ2FjaGUuc2V0VmFsdWUoY2FjaGUpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBkZWNpc2lvbiBjYWNoZSBlbnRpcmVseS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyRGVjaXNpb25DYWNoZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgZGVjaXNpb25DYWNoZS5zZXRWYWx1ZSh7IC4uLmRlZmF1bHREZWNpc2lvbkNhY2hlIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdGF0aXN0aWNzIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBJbmNyZW1lbnQgdGhlIHRvdGFsIGZpbHRlcmVkIGNvdW50XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmNyZW1lbnRGaWx0ZXJlZENvdW50KGFtb3VudDogbnVtYmVyID0gMSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBzdGF0cyA9IGF3YWl0IHN0YXRzU3RvcmUuZ2V0VmFsdWUoKTtcbiAgc3RhdHMudG90YWxGaWx0ZXJlZCArPSBhbW91bnQ7XG4gIHN0YXRzLmxhc3RSZXNldCA9IERhdGUubm93KCk7XG4gIGF3YWl0IHN0YXRzU3RvcmUuc2V0VmFsdWUoc3RhdHMpO1xufVxuXG4vKipcbiAqIFJlc2V0IHN0YXRpc3RpY3MgdG8gemVyb1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRTdGF0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgc3RhdHNTdG9yZS5zZXRWYWx1ZSh7IC4uLmRlZmF1bHRTdGF0cyB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW5pdGlhbGl6YXRpb24gKG9wdGlvbmFsKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgc3RvcmVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMgb24gZmlyc3QgcnVuLlxuICogVXNlZnVsIGZvciBleHBsaWNpdGx5IHByaW1pbmcgc3RvcmFnZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTdG9yZXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFRoZXNlIHdpbGwgdXNlIGZhbGxiYWNrIHZhbHVlcyBhdXRvbWF0aWNhbGx5LCBidXQgd2UgY2FuIGNhbGwgdGhlbSB0byBlbnN1cmVcbiAgLy8gc3RvcmFnZSBpcyByZWFkeSAoZS5nLiwgZHVyaW5nIGV4dGVuc2lvbiBpbnN0YWxsKVxuICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgc2V0dGluZ3NTdG9yZS5nZXRWYWx1ZSgpLFxuICAgIGRlY2lzaW9uQ2FjaGUuZ2V0VmFsdWUoKSxcbiAgICBieW9rS2V5c1N0b3JlLmdldFZhbHVlKCksXG4gICAgc3RhdHNTdG9yZS5nZXRWYWx1ZSgpLFxuICBdKTtcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTIuMCAtIFR1ZSBNYXkgMTQgMjAyNCAxODowMToyOSAqL1xuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG4gIGlmICghKGdsb2JhbFRoaXMuYnJvd3NlciAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZSAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZS5pZCkpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAgIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICAgIG1heEFyZ3M6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBkZXZ0b29sczoge1xuICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycylcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiLyoqXG4gKiBGaWx0ZXIgTGlzdCBGZXRjaGVyIGZvciBDYWxtV2ViXG4gKlxuICogRG93bmxvYWRzIGFuZCBjYWNoZXMgY29tbXVuaXR5IGZpbHRlciBsaXN0cyAoRWFzeUxpc3QsIEVhc3lQcml2YWN5LCBldGMuKVxuICogTGlzdHMgYXJlIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlIGFuZCByZWZyZXNoZWQgcGVyaW9kaWNhbGx5LlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyTGlzdENvbmZpZyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHJlZnJlc2hJbnRlcnZhbE1zOiBudW1iZXI7IC8vIEhvdyBvZnRlbiB0byByZWZyZXNoXG4gIGVuYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVkRmlsdGVyTGlzdCB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZmV0Y2hlZEF0OiBudW1iZXI7XG4gIGV0YWc/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZD86IHN0cmluZztcbn1cblxuLy8gRGVmYXVsdCBmaWx0ZXIgbGlzdHMgdG8gcHVsbFxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRklMVEVSX0xJU1RTOiBGaWx0ZXJMaXN0Q29uZmlnW10gPSBbXG4gIHtcbiAgICBpZDogJ2Vhc3lsaXN0JyxcbiAgICBuYW1lOiAnRWFzeUxpc3QgKEFkIEJsb2NraW5nKScsXG4gICAgdXJsOiAnaHR0cHM6Ly9lYXN5bGlzdC50by9lYXN5bGlzdC9lYXN5bGlzdC50eHQnLFxuICAgIHJlZnJlc2hJbnRlcnZhbE1zOiAyNCAqIDYwICogNjAgKiAxMDAwLCAvLyAyNCBob3Vyc1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2Vhc3lwcml2YWN5JyxcbiAgICBuYW1lOiAnRWFzeVByaXZhY3kgKFRyYWNrZXIgQmxvY2tpbmcpJyxcbiAgICB1cmw6ICdodHRwczovL2Vhc3lsaXN0LnRvL2Vhc3lsaXN0L2Vhc3lwcml2YWN5LnR4dCcsXG4gICAgcmVmcmVzaEludGVydmFsTXM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZmFuYm95LWFubm95YW5jZXMnLFxuICAgIG5hbWU6ICdGYW5ib3kgQW5ub3lhbmNlcyAoQ29va2llL1NvY2lhbC9OZXdzbGV0dGVyKScsXG4gICAgdXJsOiAnaHR0cHM6Ly9zZWN1cmUuZmFuYm95LmNvLm56L2ZhbmJveS1hbm5veWFuY2UudHh0JyxcbiAgICByZWZyZXNoSW50ZXJ2YWxNczogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdmYW5ib3ktc29jaWFsJyxcbiAgICBuYW1lOiAnRmFuYm95IFNvY2lhbCcsXG4gICAgdXJsOiAnaHR0cHM6Ly9lYXN5bGlzdC50by9lYXN5bGlzdC9mYW5ib3ktc29jaWFsLnR4dCcsXG4gICAgcmVmcmVzaEludGVydmFsTXM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmNvbnN0IFNUT1JBR0VfUFJFRklYID0gJ2ZpbHRlcmxpc3Q6JztcbmNvbnN0IExBU1RfUkVGUkVTSF9LRVkgPSAnZmlsdGVybGlzdDpsYXN0UmVmcmVzaCc7XG5cbi8qKlxuICogRmV0Y2ggYSBzaW5nbGUgZmlsdGVyIGxpc3Qgd2l0aCBjb25kaXRpb25hbCByZXF1ZXN0IGhlYWRlcnNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hGaWx0ZXJMaXN0KGNvbmZpZzogRmlsdGVyTGlzdENvbmZpZyk6IFByb21pc2U8Q2FjaGVkRmlsdGVyTGlzdCB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYWNoZWQgPSBhd2FpdCBnZXRDYWNoZWRMaXN0KGNvbmZpZy5pZCk7XG4gICAgY29uc3QgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gICAgLy8gVXNlIEVUYWcvTGFzdC1Nb2RpZmllZCBmb3IgY29uZGl0aW9uYWwgcmVxdWVzdHNcbiAgICBpZiAoY2FjaGVkPy5ldGFnKSB7XG4gICAgICBoZWFkZXJzWydJZi1Ob25lLU1hdGNoJ10gPSBjYWNoZWQuZXRhZztcbiAgICB9XG4gICAgaWYgKGNhY2hlZD8ubGFzdE1vZGlmaWVkKSB7XG4gICAgICBoZWFkZXJzWydJZi1Nb2RpZmllZC1TaW5jZSddID0gY2FjaGVkLmxhc3RNb2RpZmllZDtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbmZpZy51cmwsIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICBzaWduYWw6IEFib3J0U2lnbmFsLnRpbWVvdXQoMzAwMDApLCAvLyAzMHMgdGltZW91dFxuICAgIH0pO1xuXG4gICAgLy8gMzA0IE5vdCBNb2RpZmllZCAtIHVzZSBjYWNoZWQgdmVyc2lvblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDMwNCAmJiBjYWNoZWQpIHtcbiAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS53YXJuKGBbRmlsdGVyTGlzdF0gRmFpbGVkIHRvIGZldGNoICR7Y29uZmlnLmlkfTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICByZXR1cm4gY2FjaGVkOyAvLyBGYWxsIGJhY2sgdG8gY2FjaGVkIHZlcnNpb25cbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGV0YWcgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnRVRhZycpIHx8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBsYXN0TW9kaWZpZWQgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnTGFzdC1Nb2RpZmllZCcpIHx8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHJlc3VsdDogQ2FjaGVkRmlsdGVyTGlzdCA9IHtcbiAgICAgIGlkOiBjb25maWcuaWQsXG4gICAgICBjb250ZW50LFxuICAgICAgZmV0Y2hlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgZXRhZyxcbiAgICAgIGxhc3RNb2RpZmllZCxcbiAgICB9O1xuXG4gICAgLy8gQ2FjaGUgdGhlIHJlc3VsdFxuICAgIGF3YWl0IGNhY2hlTGlzdChjb25maWcuaWQsIHJlc3VsdCk7XG4gICAgY29uc29sZS5sb2coYFtGaWx0ZXJMaXN0XSBVcGRhdGVkICR7Y29uZmlnLmlkfSAoJHtmb3JtYXRCeXRlcyhjb250ZW50Lmxlbmd0aCl9KWApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oYFtGaWx0ZXJMaXN0XSBFcnJvciBmZXRjaGluZyAke2NvbmZpZy5pZH06YCwgZXJyb3IpO1xuICAgIHJldHVybiBhd2FpdCBnZXRDYWNoZWRMaXN0KGNvbmZpZy5pZCk7IC8vIEZhbGwgYmFjayB0byBjYWNoZVxuICB9XG59XG5cbi8qKlxuICogR2V0IGEgY2FjaGVkIGZpbHRlciBsaXN0IGZyb20gc3RvcmFnZVxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRDYWNoZWRMaXN0KGlkOiBzdHJpbmcpOiBQcm9taXNlPENhY2hlZEZpbHRlckxpc3QgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFNUT1JBR0VfUFJFRklYICsgaWQpO1xuICAgIHJldHVybiByZXN1bHRbU1RPUkFHRV9QUkVGSVggKyBpZF0gfHwgbnVsbDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDYWNoZSBhIGZpbHRlciBsaXN0IHRvIHN0b3JhZ2VcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2FjaGVMaXN0KGlkOiBzdHJpbmcsIGxpc3Q6IENhY2hlZEZpbHRlckxpc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbU1RPUkFHRV9QUkVGSVggKyBpZF06IGxpc3QgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKGBbRmlsdGVyTGlzdF0gRmFpbGVkIHRvIGNhY2hlICR7aWR9OmAsIGVycm9yKTtcbiAgfVxufVxuXG4vKipcbiAqIEZldGNoIGFsbCBlbmFibGVkIGZpbHRlciBsaXN0c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxMaXN0cyhcbiAgY29uZmlnczogRmlsdGVyTGlzdENvbmZpZ1tdID0gREVGQVVMVF9GSUxURVJfTElTVFNcbik6IFByb21pc2U8TWFwPHN0cmluZywgQ2FjaGVkRmlsdGVyTGlzdD4+IHtcbiAgY29uc3QgcmVzdWx0cyA9IG5ldyBNYXA8c3RyaW5nLCBDYWNoZWRGaWx0ZXJMaXN0PigpO1xuICBjb25zdCBlbmFibGVkID0gY29uZmlncy5maWx0ZXIoYyA9PiBjLmVuYWJsZWQpO1xuXG4gIC8vIEZldGNoIGluIHBhcmFsbGVsXG4gIGNvbnN0IGZldGNoZXMgPSBlbmFibGVkLm1hcChhc3luYyAoY29uZmlnKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoRmlsdGVyTGlzdChjb25maWcpO1xuICAgIGlmIChsaXN0KSB7XG4gICAgICByZXN1bHRzLnNldChjb25maWcuaWQsIGxpc3QpO1xuICAgIH1cbiAgfSk7XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwoZmV0Y2hlcyk7XG5cbiAgLy8gVXBkYXRlIGxhc3QgcmVmcmVzaCB0aW1lc3RhbXBcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW0xBU1RfUkVGUkVTSF9LRVldOiBEYXRlLm5vdygpIH0pO1xuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFueSBsaXN0cyBuZWVkIHJlZnJlc2hpbmdcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5lZWRzUmVmcmVzaChjb25maWdzOiBGaWx0ZXJMaXN0Q29uZmlnW10gPSBERUZBVUxUX0ZJTFRFUl9MSVNUUyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChMQVNUX1JFRlJFU0hfS0VZKTtcbiAgICBjb25zdCBsYXN0UmVmcmVzaCA9IHJlc3VsdFtMQVNUX1JFRlJFU0hfS0VZXSB8fCAwO1xuXG4gICAgZm9yIChjb25zdCBjb25maWcgb2YgY29uZmlncykge1xuICAgICAgaWYgKCFjb25maWcuZW5hYmxlZCkgY29udGludWU7XG4gICAgICBjb25zdCBhZ2UgPSBEYXRlLm5vdygpIC0gbGFzdFJlZnJlc2g7XG4gICAgICBpZiAoYWdlID4gY29uZmlnLnJlZnJlc2hJbnRlcnZhbE1zKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHRydWU7IC8vIFJlZnJlc2ggb24gZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIEdldCBhbGwgY2FjaGVkIGxpc3RzIHdpdGhvdXQgZmV0Y2hpbmdcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhY2hlZExpc3RzKFxuICBjb25maWdzOiBGaWx0ZXJMaXN0Q29uZmlnW10gPSBERUZBVUxUX0ZJTFRFUl9MSVNUU1xuKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBDYWNoZWRGaWx0ZXJMaXN0Pj4ge1xuICBjb25zdCByZXN1bHRzID0gbmV3IE1hcDxzdHJpbmcsIENhY2hlZEZpbHRlckxpc3Q+KCk7XG5cbiAgZm9yIChjb25zdCBjb25maWcgb2YgY29uZmlncykge1xuICAgIGlmICghY29uZmlnLmVuYWJsZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBnZXRDYWNoZWRMaXN0KGNvbmZpZy5pZCk7XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIHJlc3VsdHMuc2V0KGNvbmZpZy5pZCwgbGlzdCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogQ2xlYXIgYWxsIGNhY2hlZCBmaWx0ZXIgbGlzdHNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyQ2FjaGVkTGlzdHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGtleXMgPSBERUZBVUxUX0ZJTFRFUl9MSVNUUy5tYXAoYyA9PiBTVE9SQUdFX1BSRUZJWCArIGMuaWQpO1xuICBrZXlzLnB1c2goTEFTVF9SRUZSRVNIX0tFWSk7XG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXlzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Qnl0ZXMoYnl0ZXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChieXRlcyA8IDEwMjQpIHJldHVybiBgJHtieXRlc30gQmA7XG4gIGlmIChieXRlcyA8IDEwMjQgKiAxMDI0KSByZXR1cm4gYCR7KGJ5dGVzIC8gMTAyNCkudG9GaXhlZCgxKX0gS0JgO1xuICByZXR1cm4gYCR7KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKX0gTUJgO1xufVxuIiwiLyoqXG4gKiBBQlAgRmlsdGVyIExpc3QgUGFyc2VyIGZvciBDYWxtV2ViXG4gKlxuICogUGFyc2VzIEFkYmxvY2sgUGx1cyBmb3JtYXQgZmlsdGVyIGxpc3RzIGludG8gQ1NTIHNlbGVjdG9ycyBhbmQgVVJMIHBhdHRlcm5zLlxuICogU3VwcG9ydHMgRWFzeUxpc3QsIEVhc3lQcml2YWN5LCBGYW5ib3ksIGFuZCBvdGhlciBBQlAtY29tcGF0aWJsZSBsaXN0cy5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZEZpbHRlckxpc3RzIHtcbiAgY3NzU2VsZWN0b3JzOiBzdHJpbmdbXTtcbiAgdXJsUGF0dGVybnM6IHN0cmluZ1tdO1xuICBzdGF0czoge1xuICAgIHRvdGFsUnVsZXM6IG51bWJlcjtcbiAgICBjc3NSdWxlczogbnVtYmVyO1xuICAgIHVybFJ1bGVzOiBudW1iZXI7XG4gICAgc2tpcHBlZFJ1bGVzOiBudW1iZXI7XG4gICAgcGFyc2VUaW1lTXM6IG51bWJlcjtcbiAgfTtcbn1cblxuLyoqXG4gKiBQYXJzZSBvbmUgb3IgbW9yZSBmaWx0ZXIgbGlzdCBjb250ZW50cyBpbnRvIENTUyBzZWxlY3RvcnMgYW5kIFVSTCBwYXR0ZXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWx0ZXJMaXN0cyhjb250ZW50czogc3RyaW5nW10pOiBQYXJzZWRGaWx0ZXJMaXN0cyB7XG4gIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGNvbnN0IGNzc1NlbGVjdG9ycyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCB1cmxQYXR0ZXJucyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBsZXQgdG90YWxSdWxlcyA9IDA7XG4gIGxldCBza2lwcGVkUnVsZXMgPSAwO1xuXG4gIGZvciAoY29uc3QgY29udGVudCBvZiBjb250ZW50cykge1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG5cbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcblxuICAgICAgLy8gU2tpcCBlbXB0eSBsaW5lcywgY29tbWVudHMsIG1ldGFkYXRhXG4gICAgICBpZiAoIXRyaW1tZWQgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCchJykgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCdbJykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRvdGFsUnVsZXMrKztcblxuICAgICAgLy8gU2tpcCBleGNlcHRpb24gcnVsZXMgKHdoaXRlbGlzdGVkKVxuICAgICAgaWYgKHRyaW1tZWQuc3RhcnRzV2l0aCgnQEAnKSkge1xuICAgICAgICBza2lwcGVkUnVsZXMrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIENTUyBoaWRpbmcgcnVsZSAoY29udGFpbnMgIyMpXG4gICAgICBpZiAodHJpbW1lZC5pbmNsdWRlcygnIyMnKSkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHBhcnNlQ3NzSGlkaW5nUnVsZSh0cmltbWVkKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgY3NzU2VsZWN0b3JzLmFkZChzZWxlY3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2tpcHBlZFJ1bGVzKys7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dGVuZGVkIENTUyBoaWRpbmcgcnVsZSAoY29udGFpbnMgIz8jIG9yICNAIylcbiAgICAgIGlmICh0cmltbWVkLmluY2x1ZGVzKCcjPyMnKSB8fCB0cmltbWVkLmluY2x1ZGVzKCcjQCMnKSkge1xuICAgICAgICAvLyBUaGVzZSBhcmUgbW9yZSBjb21wbGV4IHJ1bGVzLCBza2lwIGZvciBzaW1wbGljaXR5XG4gICAgICAgIHNraXBwZWRSdWxlcysrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gVVJMIGJsb2NraW5nIHJ1bGVcbiAgICAgIGNvbnN0IHVybFBhdHRlcm4gPSBwYXJzZVVybEJsb2NraW5nUnVsZSh0cmltbWVkKTtcbiAgICAgIGlmICh1cmxQYXR0ZXJuKSB7XG4gICAgICAgIHVybFBhdHRlcm5zLmFkZCh1cmxQYXR0ZXJuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNraXBwZWRSdWxlcysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnNlVGltZU1zID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydDtcblxuICByZXR1cm4ge1xuICAgIGNzc1NlbGVjdG9yczogQXJyYXkuZnJvbShjc3NTZWxlY3RvcnMpLFxuICAgIHVybFBhdHRlcm5zOiBBcnJheS5mcm9tKHVybFBhdHRlcm5zKSxcbiAgICBzdGF0czoge1xuICAgICAgdG90YWxSdWxlcyxcbiAgICAgIGNzc1J1bGVzOiBjc3NTZWxlY3RvcnMuc2l6ZSxcbiAgICAgIHVybFJ1bGVzOiB1cmxQYXR0ZXJucy5zaXplLFxuICAgICAgc2tpcHBlZFJ1bGVzLFxuICAgICAgcGFyc2VUaW1lTXMsXG4gICAgfSxcbiAgfTtcbn1cblxuLyoqXG4gKiBQYXJzZSBhIENTUyBoaWRpbmcgcnVsZSAoZS5nLiwgIyMuYWQtY29udGFpbmVyIG9yIGV4YW1wbGUuY29tIyNkaXYuYWQpXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQ3NzSGlkaW5nUnVsZShsaW5lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgLy8gRmluZCB0aGUgIyMgc2VwYXJhdG9yXG4gIGNvbnN0IHNlcGFyYXRvckluZGV4ID0gbGluZS5pbmRleE9mKCcjIycpO1xuICBpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSByZXR1cm4gbnVsbDtcblxuICAvLyBFdmVyeXRoaW5nIGFmdGVyICMjIGlzIHRoZSBDU1Mgc2VsZWN0b3JcbiAgbGV0IHNlbGVjdG9yID0gbGluZS5zdWJzdHJpbmcoc2VwYXJhdG9ySW5kZXggKyAyKTtcblxuICAvLyBTa2lwIGlmIHNlbGVjdG9yIGlzIGVtcHR5XG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IudHJpbSgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgLy8gQ2xlYW4gdXAgdGhlIHNlbGVjdG9yIC0gcmVtb3ZlIGFueSB0cmFpbGluZyB3aGl0ZXNwYWNlXG4gIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpO1xuXG4gIC8vIFZhbGlkYXRlIGl0IGxvb2tzIGxpa2UgYSBDU1Mgc2VsZWN0b3IgKGJhc2ljIGNoZWNrKVxuICBpZiAoIXNlbGVjdG9yLm1hdGNoKC9eWy4jXFxbXFxdOmEtekEtWl8tXS8pKSB7XG4gICAgLy8gTWlnaHQgYmUgYW4gZWxlbWVudC1zcGVjaWZpYyBydWxlIGxpa2UgXCJleGFtcGxlLmNvbSMjLmFkXCJcbiAgICAvLyBXZSdsbCB1c2UgaXQgYXMtaXMgc2luY2UgdGhlIHNlbGVjdG9yIHBhcnQgYWZ0ZXIgIyMgaXMgd2hhdCBtYXR0ZXJzXG4gIH1cblxuICAvLyBTa2lwIGNvbXBsZXggc2VsZWN0b3JzIHRoYXQgbWlnaHQgYnJlYWsgQ1NTXG4gIGlmIChzZWxlY3Rvci5pbmNsdWRlcygnOmhhcygnKSB8fCBzZWxlY3Rvci5pbmNsdWRlcygnOm5vdCgnKSkge1xuICAgIC8vIFRoZXNlIGFyZSB2YWxpZCBDU1MgYnV0IG1pZ2h0IGJlIHNsb3csIGluY2x1ZGUgdGhlbSBhbnl3YXlcbiAgfVxuXG4gIC8vIFNraXAgc2VsZWN0b3JzIHdpdGggaW52YWxpZCBjaGFyYWN0ZXJzXG4gIGlmIChzZWxlY3Rvci5pbmNsdWRlcygnfHwnKSB8fCBzZWxlY3Rvci5pbmNsdWRlcygnXicpKSB7XG4gICAgcmV0dXJuIG51bGw7IC8vIFRoZXNlIGFyZSBVUkwgcGF0dGVybnMsIG5vdCBDU1Mgc2VsZWN0b3JzXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3I7XG59XG5cbi8qKlxuICogUGFyc2UgYSBVUkwgYmxvY2tpbmcgcnVsZSBpbnRvIGEgcmVnZXgtY29tcGF0aWJsZSBwYXR0ZXJuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlVXJsQmxvY2tpbmdSdWxlKGxpbmU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAvLyBTa2lwIHJ1bGVzIHRoYXQgYXJlIGNsZWFybHkgQ1NTIGhpZGluZyBydWxlc1xuICBpZiAobGluZS5pbmNsdWRlcygnIyMnKSB8fCBsaW5lLmluY2x1ZGVzKCcjPyMnKSB8fCBsaW5lLmluY2x1ZGVzKCcjQCMnKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gU2tpcCBvdmVybHkgY29tcGxleCBydWxlc1xuICBpZiAobGluZS5sZW5ndGggPiA1MDApIHJldHVybiBudWxsO1xuXG4gIC8vIFNraXAgcnVsZXMgd2l0aCB3aWxkY2FyZHMgYXQgdGhlIHN0YXJ0ICh0b28gYnJvYWQpXG4gIGlmIChsaW5lLnN0YXJ0c1dpdGgoJyonKSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IHBhdHRlcm4gPSBsaW5lO1xuXG4gIC8vIEhhbmRsZSBhbmNob3JzXG4gIC8vIHx8ZG9tYWluLmNvbV4gLSBtYXRjaGVzIGRvbWFpbiBhbmQgc3ViZG9tYWluc1xuICBpZiAocGF0dGVybi5zdGFydHNXaXRoKCd8fCcpKSB7XG4gICAgcGF0dGVybiA9IHBhdHRlcm4uc3Vic3RyaW5nKDIpO1xuICAgIC8vIENvbnZlcnQgdG8gZG9tYWluIHBhdHRlcm5cbiAgICBjb25zdCBkb21haW4gPSBwYXR0ZXJuLnNwbGl0KCcvJylbMF0uc3BsaXQoJ14nKVswXS5zcGxpdCgnKicpWzBdO1xuICAgIGlmIChkb21haW4gJiYgZG9tYWluLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIHJldHVybiBkb21haW47XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIGxlYWRpbmcvdHJhaWxpbmcgYW5jaG9yc1xuICBpZiAocGF0dGVybi5zdGFydHNXaXRoKCd8JykpIHtcbiAgICBwYXR0ZXJuID0gcGF0dGVybi5zdWJzdHJpbmcoMSk7XG4gIH1cbiAgaWYgKHBhdHRlcm4uZW5kc1dpdGgoJ3wnKSkge1xuICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnN1YnN0cmluZygwLCBwYXR0ZXJuLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgLy8gQ29udmVydCBzZXBhcmF0b3IgKF4pIHRvIHdpbGRjYXJkXG4gIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoL1xcXi9nLCAnKicpO1xuXG4gIC8vIFNraXAgaWYgdG9vIHNob3J0IChwcm9iYWJseSBub3QgYSB2YWxpZCBkb21haW4pXG4gIGlmIChwYXR0ZXJuLmxlbmd0aCA8IDQpIHJldHVybiBudWxsO1xuXG4gIC8vIEV4dHJhY3QgZG9tYWluLWxpa2UgcGF0dGVybnNcbiAgLy8gU2ltcGxlIGhldXJpc3RpYzogbG9vayBmb3IgcGF0dGVybnMgdGhhdCBjb250YWluIGEgZG90IGFuZCBkb24ndCBzdGFydCB3aXRoICpcbiAgaWYgKCFwYXR0ZXJuLnN0YXJ0c1dpdGgoJyonKSAmJiBwYXR0ZXJuLmluY2x1ZGVzKCcuJykpIHtcbiAgICAvLyBUaGlzIGxvb2tzIGxpa2UgYSBkb21haW5cbiAgICBjb25zdCBkb21haW5QYXJ0ID0gcGF0dGVybi5zcGxpdCgnLycpWzBdLnNwbGl0KCcqJylbMF07XG4gICAgaWYgKGRvbWFpblBhcnQgJiYgZG9tYWluUGFydC5pbmNsdWRlcygnLicpKSB7XG4gICAgICByZXR1cm4gZG9tYWluUGFydDtcbiAgICB9XG4gIH1cblxuICAvLyBGb3Igb3RoZXIgcGF0dGVybnMsIHJldHVybiBudWxsICh0b28gY29tcGxleCBvciBub3QgdXNlZnVsIGZvciBkb21haW4gYmxvY2tpbmcpXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFBhcnNlIGZpbHRlciBsaXN0cyBmcm9tIGNhY2hlZCBmaWx0ZXIgbGlzdCBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNhY2hlZExpc3RzKFxuICBsaXN0czogTWFwPHN0cmluZywgeyBjb250ZW50OiBzdHJpbmcgfT5cbik6IFBhcnNlZEZpbHRlckxpc3RzIHtcbiAgY29uc3QgY29udGVudHMgPSBBcnJheS5mcm9tKGxpc3RzLnZhbHVlcygpKS5tYXAobCA9PiBsLmNvbnRlbnQpO1xuICByZXR1cm4gcGFyc2VGaWx0ZXJMaXN0cyhjb250ZW50cyk7XG59XG5cbi8qKlxuICogR2V0IHN0YXRpc3RpY3MgYWJvdXQgcGFyc2VkIGZpbHRlciBsaXN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyTGlzdFN0YXRzKHBhcnNlZDogUGFyc2VkRmlsdGVyTGlzdHMpOiBzdHJpbmcge1xuICByZXR1cm4gW1xuICAgIGBUb3RhbCBydWxlczogJHtwYXJzZWQuc3RhdHMudG90YWxSdWxlcy50b0xvY2FsZVN0cmluZygpfWAsXG4gICAgYENTUyBydWxlczogJHtwYXJzZWQuc3RhdHMuY3NzUnVsZXMudG9Mb2NhbGVTdHJpbmcoKX1gLFxuICAgIGBVUkwgcnVsZXM6ICR7cGFyc2VkLnN0YXRzLnVybFJ1bGVzLnRvTG9jYWxlU3RyaW5nKCl9YCxcbiAgICBgU2tpcHBlZDogJHtwYXJzZWQuc3RhdHMuc2tpcHBlZFJ1bGVzLnRvTG9jYWxlU3RyaW5nKCl9YCxcbiAgICBgUGFyc2UgdGltZTogJHtwYXJzZWQuc3RhdHMucGFyc2VUaW1lTXMudG9GaXhlZCgxKX1tc2AsXG4gIF0uam9pbignXFxuJyk7XG59XG4iLCIvKipcbiAqIEZpbHRlciBMaXN0IEFwcGxpZXIgZm9yIENhbG1XZWJcbiAqXG4gKiBUYWtlcyBwYXJzZWQgZmlsdGVyIGxpc3RzIGFuZCBhcHBsaWVzIHRoZW0gYXM6XG4gKiAxLiBDU1MgaW5qZWN0aW9uIChoaWRlcyBlbGVtZW50cyBtYXRjaGluZyBzZWxlY3RvcnMpXG4gKiAyLiBVUkwgYmxvY2tpbmcgKHZpYSBkZWNsYXJhdGl2ZU5ldFJlcXVlc3QpXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBQYXJzZWRGaWx0ZXJMaXN0cyB9IGZyb20gJy4vcGFyc2VyJztcblxuY29uc3QgRklMVEVSTElTVF9DU1NfSUQgPSAnY2FsbXdlYi1maWx0ZXJsaXN0LWNzcyc7XG5cbi8qKlxuICogR2VuZXJhdGUgQ1NTIHJ1bGVzIGZyb20gcGFyc2VkIGZpbHRlciBsaXN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGaWx0ZXJMaXN0Q3NzKHBhcnNlZDogUGFyc2VkRmlsdGVyTGlzdHMpOiBzdHJpbmcge1xuICBpZiAocGFyc2VkLmNzc1NlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBKb2luIGFsbCBzZWxlY3RvcnMgd2l0aCBjb21tYSBhbmQgaGlkZSB0aGVtXG4gIGNvbnN0IHNlbGVjdG9yR3JvdXBzID0gY2h1bmtTZWxlY3RvcnMocGFyc2VkLmNzc1NlbGVjdG9ycywgNTAwKTtcblxuICBjb25zdCBydWxlczogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChjb25zdCBncm91cCBvZiBzZWxlY3Rvckdyb3Vwcykge1xuICAgIHJ1bGVzLnB1c2goYCR7Z3JvdXAuam9pbignLFxcbicpfSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufWApO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzLmpvaW4oJ1xcblxcbicpO1xufVxuXG4vKipcbiAqIENodW5rIHNlbGVjdG9ycyBpbnRvIGdyb3VwcyB0byBhdm9pZCBDU1MgcnVsZSBzaXplIGxpbWl0c1xuICovXG5mdW5jdGlvbiBjaHVua1NlbGVjdG9ycyhzZWxlY3RvcnM6IHN0cmluZ1tdLCBjaHVua1NpemU6IG51bWJlcik6IHN0cmluZ1tdW10ge1xuICBjb25zdCBjaHVua3M6IHN0cmluZ1tdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyBpICs9IGNodW5rU2l6ZSkge1xuICAgIGNodW5rcy5wdXNoKHNlbGVjdG9ycy5zbGljZShpLCBpICsgY2h1bmtTaXplKSk7XG4gIH1cbiAgcmV0dXJuIGNodW5rcztcbn1cblxuLyoqXG4gKiBJbmplY3QgZmlsdGVyIGxpc3QgQ1NTIGludG8gYSBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RGaWx0ZXJMaXN0Q3NzKGNzczogc3RyaW5nKTogKCkgPT4gdm9pZCB7XG4gIGlmICghY3NzKSByZXR1cm4gKCkgPT4ge307XG5cbiAgLy8gUmVtb3ZlIGV4aXN0aW5nIGZpbHRlciBsaXN0IENTU1xuICBjb25zdCBleGlzdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEZJTFRFUkxJU1RfQ1NTX0lEKTtcbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgZXhpc3RpbmcucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLmlkID0gRklMVEVSTElTVF9DU1NfSUQ7XG4gIHN0eWxlLnRleHRDb250ZW50ID0gY3NzO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRklMVEVSTElTVF9DU1NfSUQpO1xuICAgIGlmIChlbCkgZWwucmVtb3ZlKCk7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZmlsdGVyIGxpc3QgQ1NTIGlzIGluamVjdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpbHRlckxpc3RDc3NJbmplY3RlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRklMVEVSTElTVF9DU1NfSUQpO1xufVxuXG4vKipcbiAqIFJlbW92ZSBmaWx0ZXIgbGlzdCBDU1NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZpbHRlckxpc3RDc3MoKTogdm9pZCB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRklMVEVSTElTVF9DU1NfSUQpO1xuICBpZiAoZWwpIGVsLnJlbW92ZSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBkZWNsYXJhdGl2ZU5ldFJlcXVlc3QgcnVsZXMgZnJvbSBVUkwgcGF0dGVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ldHdvcmtSdWxlcyhcbiAgdXJsUGF0dGVybnM6IHN0cmluZ1tdLFxuICBzdGFydElkOiBudW1iZXIgPSAxMDAwXG4pOiBhbnlbXSB7XG4gIGNvbnN0IHJ1bGVzOiBhbnlbXSA9IFtdO1xuICBsZXQgcnVsZUlkID0gc3RhcnRJZDtcblxuICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgdXJsUGF0dGVybnMpIHtcbiAgICAvLyBTa2lwIGlmIHBhdHRlcm4gaXMgdG9vIHNob3J0IG9yIGludmFsaWRcbiAgICBpZiAocGF0dGVybi5sZW5ndGggPCA0KSBjb250aW51ZTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDcmVhdGUgYSByZWdleCBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBVUkxzIGNvbnRhaW5pbmcgdGhpcyBkb21haW5cbiAgICAgIGNvbnN0IGVzY2FwZWRQYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuICAgICAgY29uc3QgcmVnZXhQYXR0ZXJuID0gYF5odHRwcz86Ly8oW14vXSpcXFxcLik/JHtlc2NhcGVkUGF0dGVybn1gO1xuXG4gICAgICBydWxlcy5wdXNoKHtcbiAgICAgICAgaWQ6IHJ1bGVJZCsrLFxuICAgICAgICBwcmlvcml0eTogMSxcbiAgICAgICAgYWN0aW9uOiB7IHR5cGU6ICdibG9jaycgfSxcbiAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgcmVnZXhGaWx0ZXI6IHJlZ2V4UGF0dGVybixcbiAgICAgICAgICByZXNvdXJjZVR5cGVzOiBbJ3NjcmlwdCcsICdpbWFnZScsICd4bWxodHRwcmVxdWVzdCcsICdzdWJfZnJhbWUnLCAnbWVkaWEnLCAnZm9udCddLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIExpbWl0IHRvIGF2b2lkIGhpdHRpbmcgQ2hyb21lJ3MgcnVsZSBsaW1pdHNcbiAgICAgIGlmIChydWxlSWQgPiBzdGFydElkICsgNTAwMCkgYnJlYWs7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBTa2lwIGludmFsaWQgcGF0dGVybnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnVsZXM7XG59XG5cbi8qKlxuICogQXBwbHkgZGVjbGFyYXRpdmVOZXRSZXF1ZXN0IHJ1bGVzIChtdXN0IGJlIGNhbGxlZCBmcm9tIGJhY2tncm91bmQpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseU5ldHdvcmtSdWxlcyhcbiAgcnVsZXM6IGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUnVsZVtdXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgZHluYW1pYyBydWxlc1xuICAgIGNvbnN0IGV4aXN0aW5nUnVsZXMgPSBhd2FpdCBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LmdldER5bmFtaWNSdWxlcygpO1xuICAgIGNvbnN0IGV4aXN0aW5nSWRzID0gZXhpc3RpbmdSdWxlcy5tYXAociA9PiByLmlkKTtcblxuICAgIC8vIFJlbW92ZSBvbGQgcnVsZXNcbiAgICBpZiAoZXhpc3RpbmdJZHMubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC51cGRhdGVEeW5hbWljUnVsZXMoe1xuICAgICAgICByZW1vdmVSdWxlSWRzOiBleGlzdGluZ0lkcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCBuZXcgcnVsZXMgKGNodW5rZWQgdG8gYXZvaWQgbGltaXRzKVxuICAgIGNvbnN0IGNodW5rU2l6ZSA9IDUwMDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkgKz0gY2h1bmtTaXplKSB7XG4gICAgICBjb25zdCBjaHVuayA9IHJ1bGVzLnNsaWNlKGksIGkgKyBjaHVua1NpemUpO1xuICAgICAgYXdhaXQgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC51cGRhdGVEeW5hbWljUnVsZXMoe1xuICAgICAgICBhZGRSdWxlczogY2h1bmssXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgW0ZpbHRlckxpc3RdIEFwcGxpZWQgJHtydWxlcy5sZW5ndGh9IG5ldHdvcmsgYmxvY2tpbmcgcnVsZXNgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbRmlsdGVyTGlzdF0gRmFpbGVkIHRvIGFwcGx5IG5ldHdvcmsgcnVsZXM6JywgZXJyb3IpO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBkeW5hbWljIG5ldHdvcmsgcnVsZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyTmV0d29ya1J1bGVzKCk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0aW5nUnVsZXMgPSBhd2FpdCBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LmdldER5bmFtaWNSdWxlcygpO1xuICAgIGNvbnN0IGV4aXN0aW5nSWRzID0gZXhpc3RpbmdSdWxlcy5tYXAociA9PiByLmlkKTtcbiAgICBpZiAoZXhpc3RpbmdJZHMubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC51cGRhdGVEeW5hbWljUnVsZXMoe1xuICAgICAgICByZW1vdmVSdWxlSWRzOiBleGlzdGluZ0lkcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbRmlsdGVyTGlzdF0gRmFpbGVkIHRvIGNsZWFyIG5ldHdvcmsgcnVsZXM6JywgZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIEV4dGVybmFsIEJsb2NrbGlzdCBGZXRjaGVyXG4gKlxuICogRmV0Y2hlcyBhbmQgY2FjaGVzIGRvbWFpbiBibG9ja2xpc3RzIGZyb20gcG9wdWxhciBzb3VyY2VzLlxuICogVGhlc2UgbGlzdHMgY29udGFpbiB0aG91c2FuZHMgb2YgZG9tYWlucyBtYWludGFpbmVkIGJ5IHRoZSBjb21tdW5pdHkuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja2xpc3RTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBmb3JtYXQ6ICdob3N0cycgfCAncGxhaW4nIHwgJ2pzb24nO1xuICBlbmFibGVkOiBib29sZWFuO1xuICBsYXN0VXBkYXRlZD86IG51bWJlcjtcbiAgZG9tYWluQ291bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBCTE9DS0xJU1RfU09VUkNFUzogQmxvY2tsaXN0U291cmNlW10gPSBbXG4gIC8vIENhbG1XZWIgQ29udGVudCBGYXJtcyAtIGN1cmF0ZWQgYmxvY2tsaXN0XG4gIHtcbiAgICBpZDogJ2NhbG13ZWItY29udGVudC1mYXJtcycsXG4gICAgbmFtZTogJ0NhbG1XZWIgQ29udGVudCBGYXJtcycsXG4gICAgY2F0ZWdvcnk6ICdjb250ZW50X2Zhcm1zJyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYW5vbWFseWNvL2NhbG13ZWIvbWFpbi9ibG9ja2xpc3RzL2NvbnRlbnQtZmFybXMuanNvbicsXG4gICAgZm9ybWF0OiAnanNvbicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbiAgLy8gQ2FsbVdlYiBVc2VyLUZhdm9yaW5nIC0gc2l0ZXMgdGhhdCBhcmUgdXNlci1zZXJ2aW5nLCBuZXZlciBibG9jayB0aGVzZVxuICB7XG4gICAgaWQ6ICdjYWxtd2ViLXVzZXItZmF2b3JpbmcnLFxuICAgIG5hbWU6ICdDYWxtV2ViIFVzZXItRmF2b3JpbmcgU2l0ZXMnLFxuICAgIGNhdGVnb3J5OiAndXNlcl9mYXZvcmluZycsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fub21hbHljby9jYWxtd2ViL21haW4vYmxvY2tsaXN0cy91c2VyLWZhdm9yaW5nLmpzb24nLFxuICAgIGZvcm1hdDogJ2pzb24nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIC8vIFN0ZXZlbiBCbGFjaydzIHVuaWZpZWQgaG9zdHMgLSBtYWx3YXJlLCBhZHMsIHRyYWNraW5nXG4gIHtcbiAgICBpZDogJ3N0ZXZlbmJsYWNrLXVuaWZpZWQnLFxuICAgIG5hbWU6ICdTdGV2ZW4gQmxhY2sgVW5pZmllZCcsXG4gICAgY2F0ZWdvcnk6ICdtYWx3YXJlJyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vU3RldmVuQmxhY2svaG9zdHMvbWFzdGVyL2hvc3RzJyxcbiAgICBmb3JtYXQ6ICdob3N0cycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc3RldmVuYmxhY2stZmFrZW5ld3MnLFxuICAgIG5hbWU6ICdGYWtlIE5ld3MgQmxvY2tsaXN0JyxcbiAgICBjYXRlZ29yeTogJ2Zha2VfbmV3cycsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1N0ZXZlbkJsYWNrL2hvc3RzL21hc3Rlci9hbHRlcm5hdGVzL2Zha2VuZXdzL2hvc3RzJyxcbiAgICBmb3JtYXQ6ICdob3N0cycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc3RldmVuYmxhY2stZ2FtYmxpbmcnLFxuICAgIG5hbWU6ICdHYW1ibGluZyBCbG9ja2xpc3QnLFxuICAgIGNhdGVnb3J5OiAnZ2FtYmxpbmcnLFxuICAgIHVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9TdGV2ZW5CbGFjay9ob3N0cy9tYXN0ZXIvYWx0ZXJuYXRlcy9nYW1ibGluZy9ob3N0cycsXG4gICAgZm9ybWF0OiAnaG9zdHMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3N0ZXZlbmJsYWNrLXNvY2lhbCcsXG4gICAgbmFtZTogJ1NvY2lhbCBNZWRpYSBCbG9ja2xpc3QnLFxuICAgIGNhdGVnb3J5OiAnc29jaWFsX21lZGlhJyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vU3RldmVuQmxhY2svaG9zdHMvbWFzdGVyL2FsdGVybmF0ZXMvc29jaWFsL2hvc3RzJyxcbiAgICBmb3JtYXQ6ICdob3N0cycsXG4gICAgZW5hYmxlZDogZmFsc2UsIC8vIE9mZiBieSBkZWZhdWx0XG4gIH0sXG4gIHtcbiAgICBpZDogJ3N0ZXZlbmJsYWNrLWFkdWx0JyxcbiAgICBuYW1lOiAnQWR1bHQgQ29udGVudCBCbG9ja2xpc3QnLFxuICAgIGNhdGVnb3J5OiAnYWR1bHQnLFxuICAgIHVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9TdGV2ZW5CbGFjay9ob3N0cy9tYXN0ZXIvYWx0ZXJuYXRlcy9wb3JuL2hvc3RzJyxcbiAgICBmb3JtYXQ6ICdob3N0cycsXG4gICAgZW5hYmxlZDogZmFsc2UsIC8vIE9mZiBieSBkZWZhdWx0XG4gIH0sXG4gIC8vIEFkZGl0aW9uYWwgc291cmNlc1xuICB7XG4gICAgaWQ6ICdvaXNkLWZ1bGwnLFxuICAgIG5hbWU6ICdPSVNEIEJsb2NrbGlzdCcsXG4gICAgY2F0ZWdvcnk6ICdtYWx3YXJlJyxcbiAgICB1cmw6ICdodHRwczovL2JpZy5vaXNkLm5sLycsXG4gICAgZm9ybWF0OiAnaG9zdHMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2Jsb2NrbGlzdC1zaXRlLXNwYW0nLFxuICAgIG5hbWU6ICdTcGFtIEJsb2NrbGlzdCcsXG4gICAgY2F0ZWdvcnk6ICdzcGFtJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2NrbGlzdC5zaXRlL2FwcC9kbC9zcGFtJyxcbiAgICBmb3JtYXQ6ICdwbGFpbicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmludGVyZmFjZSBDYWNoZWRCbG9ja2xpc3Qge1xuICBzb3VyY2VJZDogc3RyaW5nO1xuICBkb21haW5zOiBzdHJpbmdbXTtcbiAgbGFzdFVwZGF0ZWQ6IG51bWJlcjtcbiAgZG9tYWluQ291bnQ6IG51bWJlcjtcbn1cblxuY29uc3QgQ0FDSEVfS0VZID0gJ2NhbG13ZWItYmxvY2tsaXN0LWNhY2hlJztcbmNvbnN0IENBQ0hFX0RVUkFUSU9OID0gMjQgKiA2MCAqIDYwICogMTAwMDsgLy8gMjQgaG91cnNcblxuLy8gTW9kdWxlLWxldmVsIGNhY2hlIGZvciBzeW5jIGFjY2Vzc1xubGV0IGNhY2hlZEJsb2NrbGlzdDogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5sZXQgY2FjaGVkVXNlckZhdm9yaW5nOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbmxldCBjYWNoZUluaXRpYWxpemVkID0gZmFsc2U7XG5cbi8vIERlZmF1bHQgYmxvY2tsaXN0cyBlbWJlZGRlZCBmb3IgaW1tZWRpYXRlIHVzZSAoZmFsbGJhY2spXG5jb25zdCBERUZBVUxUX0JMT0NLTElTVFMgPSB7XG4gICdjYWxtd2ViLWNvbnRlbnQtZmFybXMnOiBbXG4gICAgJ3JlZGRpdC5jb20nLCAnd3d3LnJlZGRpdC5jb20nLCAnb2xkLnJlZGRpdC5jb20nLCAnbmV3LnJlZGRpdC5jb20nLFxuICAgICdmYWNlYm9vay5jb20nLCAnd3d3LmZhY2Vib29rLmNvbScsICdpbnN0YWdyYW0uY29tJywgJ3d3dy5pbnN0YWdyYW0uY29tJyxcbiAgICAndHdpdHRlci5jb20nLCAneC5jb20nLCAnd3d3LnguY29tJyxcbiAgICAndGlrdG9rLmNvbScsICd3d3cudGlrdG9rLmNvbScsICdzbmFwY2hhdC5jb20nLCAnd3d3LnNuYXBjaGF0LmNvbScsXG4gICAgJ3lvdXR1YmUuY29tJywgJ3lvdXR1LmJlJywgJ3d3dy55b3V0dWJlLmNvbScsXG4gICAgJ3ZpbWVvLmNvbScsICd3d3cudmltZW8uY29tJywgJ2RhaWx5bW90aW9uLmNvbScsICd3d3cuZGFpbHltb3Rpb24uY29tJyxcbiAgICAndHdpdGNoLnR2JywgJ3d3dy50d2l0Y2gudHYnLCAnZXh0LXR3aXRjaC50dicsXG4gICAgJ3Nwb3RpZnkuY29tJywgJ29wZW4uc3BvdGlmeS5jb20nLCAnd3d3LnNwb3RpZnkuY29tJyxcbiAgICAnYnlzcG90aWZ5LmNvbScsICd0b3Nwb3RpZnkuY29tJyxcbiAgICAnc291bmRjbG91ZC5jb20nLCAnd3d3LnNvdW5kY2xvdWQuY29tJyxcbiAgICAnbmV0ZmxpeC5jb20nLCAnd3d3Lm5ldGZsaXguY29tJywgJ25ldGZsaXgubmV0JyxcbiAgICAnaHVsdS5jb20nLCAnd3d3Lmh1bHUuY29tJyxcbiAgICAnZGlzbmV5cGx1cy5jb20nLCAnd3d3LmRpc25leXBsdXMuY29tJyxcbiAgICAnaGJvbWF4LmNvbScsICd3d3cuaGJvbWF4LmNvbScsXG4gICAgJ3ByaW1ldmlkZW8uY29tJywgJ3d3dy5wcmltZXZpZGVvLmNvbScsXG4gICAgJ2Nubi5jb20nLCAnd3d3LmNubi5jb20nLCAnZWRpdGlvbi5jbm4uY29tJyxcbiAgICAnYmJjLmNvbScsICdiYmMuY28udWsnLCAnd3d3LmJiYy5jb20nLFxuICAgICdueXRpbWVzLmNvbScsICd3d3cubnl0aW1lcy5jb20nLFxuICAgICd3YXNoaW5ndG9ucG9zdC5jb20nLCAnd3d3Lndhc2hpbmd0b25wb3N0LmNvbScsXG4gICAgJ3dzai5jb20nLCAnd3d3Lndzai5jb20nLFxuICAgICd0aGVndWFyZGlhbi5jb20nLCAnd3d3LnRoZWd1YXJkaWFuLmNvbScsXG4gICAgJ2ZvcmJlcy5jb20nLCAnd3d3LmZvcmJlcy5jb20nLFxuICAgICdyZXV0ZXJzLmNvbScsICd3d3cucmV1dGVycy5jb20nLFxuICAgICdhcG5ld3MuY29tJywgJ3d3dy5hcG5ld3MuY29tJyxcbiAgICAnYW1hem9uLmNvbScsICd3d3cuYW1hem9uLmNvbScsXG4gICAgJ2ViYXkuY29tJywgJ3d3dy5lYmF5LmNvbScsXG4gICAgJ2FsaWV4cHJlc3MuY29tJywgJ3d3dy5hbGlleHByZXNzLmNvbScsXG4gICAgJ3dpc2guY29tJywgJ3d3dy53aXNoLmNvbScsXG4gICAgJ2V0c3kuY29tJywgJ3d3dy5ldHN5LmNvbScsXG4gICAgJ3dhbG1hcnQuY29tJywgJ3d3dy53YWxtYXJ0LmNvbScsXG4gICAgJ3RhcmdldC5jb20nLCAnd3d3LnRhcmdldC5jb20nLFxuICAgICdiZXN0YnV5LmNvbScsICd3d3cuYmVzdGJ1eS5jb20nLFxuICAgICdzaG9wZWUuY29tJywgJ3d3dy5zaG9wZWUuY29tJyxcbiAgICAnc2hvcGlmeS5jb20nLCAnd3d3LnNob3BpZnkuY29tJyxcbiAgICAncXVvcmEuY29tJywgJ3d3dy5xdW9yYS5jb20nLFxuICAgICdtZWRpdW0uY29tJywgJ3d3dy5tZWRpdW0uY29tJyxcbiAgICAnc3Vic3RhY2suY29tJywgJ3d3dy5zdWJzdGFjay5jb20nLFxuICAgICdnb29nbGUuY29tJywgJ3d3dy5nb29nbGUuY29tJywgJ2JpbmcuY29tJywgJ3d3dy5iaW5nLmNvbScsXG4gICAgJ3lhaG9vLmNvbScsICdzZWFyY2gueWFob28uY29tJyxcbiAgICAnYmFpZHUuY29tJywgJ3NvZ291LmNvbScsICd5YW5kZXguY29tJyxcbiAgICAnbGlua2VkaW4uY29tJywgJ3d3dy5saW5rZWRpbi5jb20nLFxuICAgICdwaW50ZXJlc3QuY29tJywgJ3d3dy5waW50ZXJlc3QuY29tJyxcbiAgICAndHVtYmxyLmNvbScsICd3d3cudHVtYmxyLmNvbScsXG4gIF0sXG4gICdjYWxtd2ViLXVzZXItZmF2b3JpbmcnOiBbXG4gICAgJ3dpa2lwZWRpYS5vcmcnLCAnd3d3Lndpa2lwZWRpYS5vcmcnLFxuICAgICd3aWtpbWVkaWEub3JnJywgJ3d3dy53aWtpbWVkaWEub3JnJyxcbiAgICAnZ2l0aHViLmNvbScsICd3d3cuZ2l0aHViLmNvbScsICdnaXRodWJ1c2VyY29udGVudC5jb20nLFxuICAgICdnaXRsYWIuY29tJywgJ3d3dy5naXRsYWIuY29tJyxcbiAgICAnc3RhY2tvdmVyZmxvdy5jb20nLCAnd3d3LnN0YWNrb3ZlcmZsb3cuY29tJyxcbiAgICAnc3RhY2tleGNoYW5nZS5jb20nLCAnd3d3LnN0YWNrZXhjaGFuZ2UuY29tJyxcbiAgICAnbnBtanMuY29tJywgJ3d3dy5ucG1qc2pzLmNvbScsXG4gICAgJ3B5cGkub3JnJywgJ3d3dy5weXBpLm9yZycsXG4gICAgJ2RvY2tlci5jb20nLCAnd3d3LmRvY2tlci5jb20nLFxuICAgICdhcnhpdi5vcmcnLCAnd3d3LmFyeGl2Lm9yZycsXG4gICAgJ3NwcmluZ2VyLmNvbScsICduYXR1cmUuY29tJywgJ3NjaWVuY2Uub3JnJyxcbiAgICAnbWl0LmVkdScsICdoYXJ2YXJkLmVkdScsICdzdGFuZm9yZC5lZHUnLCAnYmVya2VsZXkuZWR1JyxcbiAgICAnbmFzYS5nb3YnLCAnd3d3Lm5hc2EuZ292JywgJ25vYWEuZ292JywgJ2VwYS5nb3YnLFxuICAgICdpcnMuZ292JywgJ3NzYS5nb3YnLCAnY2RjLmdvdicsICduaWguZ292JyxcbiAgICAncGF5cGFsLmNvbScsICd3d3cucGF5cGFsLmNvbScsXG4gICAgJ2R1Y2tkdWNrZ28uY29tJywgJ3d3dy5kdWNrZHVja2dvLmNvbScsXG4gICAgJ3N0YXJ0cGFnZS5jb20nLCAnd3d3LnN0YXJ0cGFnZS5jb20nLFxuICBdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJsb2NrbGlzdENhY2hlKCk6IHZvaWQge1xuICBpZiAoY2FjaGVJbml0aWFsaXplZCkgcmV0dXJuO1xuICBjYWNoZUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgXG4gIC8vIExvYWQgZGVmYXVsdHMgaW1tZWRpYXRlbHkgaW50byBjYWNoZVxuICBjYWNoZWRCbG9ja2xpc3QgPSBuZXcgU2V0KERFRkFVTFRfQkxPQ0tMSVNUU1snY2FsbXdlYi1jb250ZW50LWZhcm1zJ10gfHwgW10pO1xuICBjYWNoZWRVc2VyRmF2b3JpbmcgPSBuZXcgU2V0KERFRkFVTFRfQkxPQ0tMSVNUU1snY2FsbXdlYi11c2VyLWZhdm9yaW5nJ10gfHwgW10pO1xuICBcbiAgY29uc29sZS5sb2coYFtCbG9ja2xpc3RdIExvYWRlZCBkZWZhdWx0czogJHtjYWNoZWRCbG9ja2xpc3Quc2l6ZX0gYmxvY2tsaXN0LCAke2NhY2hlZFVzZXJGYXZvcmluZy5zaXplfSB1c2VyLWZhdm9yaW5nYCk7XG4gIFxuICAvLyBUaGVuIHRyaWdnZXIgYXN5bmMgcmVmcmVzaCBpbiBiYWNrZ3JvdW5kXG4gIHVwZGF0ZUFsbEJsb2NrbGlzdHMoKS50aGVuKGNhY2hlID0+IHtcbiAgICBjYWNoZWRCbG9ja2xpc3QgPSBuZXcgU2V0KCk7XG4gICAgY2FjaGVkVXNlckZhdm9yaW5nID0gbmV3IFNldCgpO1xuICAgIFxuICAgIGZvciAoY29uc3QgW3NvdXJjZUlkLCBkb21haW5zXSBvZiBjYWNoZS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IEJMT0NLTElTVF9TT1VSQ0VTLmZpbmQocyA9PiBzLmlkID09PSBzb3VyY2VJZCk7XG4gICAgICBpZiAoc291cmNlPy5jYXRlZ29yeSA9PT0gJ3VzZXJfZmF2b3JpbmcnKSB7XG4gICAgICAgIGRvbWFpbnMuZm9yRWFjaChkID0+IGNhY2hlZFVzZXJGYXZvcmluZy5hZGQoZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9tYWlucy5mb3JFYWNoKGQgPT4gY2FjaGVkQmxvY2tsaXN0LmFkZChkKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBbQmxvY2tsaXN0XSBVcGRhdGVkIGNhY2hlOiAke2NhY2hlZEJsb2NrbGlzdC5zaXplfSBibG9ja2xpc3QsICR7Y2FjaGVkVXNlckZhdm9yaW5nLnNpemV9IHVzZXItZmF2b3JpbmdgKTtcbiAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tCbG9ja2xpc3RdIFJlbW90ZSBmZXRjaCBmYWlsZWQsIHVzaW5nIGRlZmF1bHRzOicsIGVycik7XG4gIH0pO1xuICBcbiAgLy8gQWxzbyB0cnkgdG8gbG9hZCBmcm9tIHN0b3JhZ2UgYXMgZmFsbGJhY2tcbiAgZ2V0Q2FjaGVkQmxvY2tsaXN0cygpLnRoZW4oY2FjaGUgPT4ge1xuICAgIGlmIChjYWNoZWRCbG9ja2xpc3Quc2l6ZSA9PT0gMCAmJiBjYWNoZS5zaXplID4gMCkge1xuICAgICAgY2FjaGVkQmxvY2tsaXN0ID0gbmV3IFNldCgpO1xuICAgICAgY2FjaGVkVXNlckZhdm9yaW5nID0gbmV3IFNldCgpO1xuICAgICAgZm9yIChjb25zdCBbc291cmNlSWQsIGRvbWFpbnNdIG9mIGNhY2hlLmVudHJpZXMoKSkge1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBCTE9DS0xJU1RfU09VUkNFUy5maW5kKHMgPT4gcy5pZCA9PT0gc291cmNlSWQpO1xuICAgICAgICBpZiAoc291cmNlPy5jYXRlZ29yeSA9PT0gJ3VzZXJfZmF2b3JpbmcnKSB7XG4gICAgICAgICAgZG9tYWlucy5mb3JFYWNoKGQgPT4gY2FjaGVkVXNlckZhdm9yaW5nLmFkZChkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9tYWlucy5mb3JFYWNoKGQgPT4gY2FjaGVkQmxvY2tsaXN0LmFkZChkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLmNhdGNoKCgpID0+IHt9KTtcbn1cblxuLy8gU3luYyB2ZXJzaW9uIG9mIGlzRG9tYWluQmxvY2tlZCAtIHVzZXMgY2FjaGVkIGJsb2NrbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIGlzRG9tYWluQmxvY2tlZFN5bmMoZG9tYWluOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IGRvbWFpbi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL153d3dcXC4vLCAnJyk7XG4gIFxuICAvLyBGaXJzdCBjaGVjayBpZiBpdCdzIGEgdXNlci1mYXZvcmluZyBkb21haW4gKG5ldmVyIGJsb2NrIHRoZXNlKVxuICBpZiAoY2FjaGVkVXNlckZhdm9yaW5nLnNpemUgPiAwKSB7XG4gICAgaWYgKGNhY2hlZFVzZXJGYXZvcmluZy5oYXMobm9ybWFsaXplZCkpIHJldHVybiBmYWxzZTtcbiAgICAvLyBDaGVjayBwYXJlbnQgZG9tYWlucyB0b29cbiAgICBjb25zdCBwYXJ0cyA9IG5vcm1hbGl6ZWQuc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBwYXJ0cy5zbGljZShpKS5qb2luKCcuJyk7XG4gICAgICBpZiAoY2FjaGVkVXNlckZhdm9yaW5nLmhhcyhwYXJlbnQpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxuICAvLyBDaGVjayBibG9ja2xpc3RcbiAgaWYgKGNhY2hlZEJsb2NrbGlzdC5oYXMobm9ybWFsaXplZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgLy8gUGFyZW50IGRvbWFpbiBtYXRjaFxuICBjb25zdCBwYXJ0cyA9IG5vcm1hbGl6ZWQuc3BsaXQoJy4nKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBhcmVudCA9IHBhcnRzLnNsaWNlKGkpLmpvaW4oJy4nKTtcbiAgICBpZiAoY2FjaGVkQmxvY2tsaXN0LmhhcyhwYXJlbnQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQmxvY2tsaXN0KHNvdXJjZTogQmxvY2tsaXN0U291cmNlKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAvLyBUcnkgcmVtb3RlIGZldGNoIGZpcnN0XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb3VyY2UudXJsLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAndGV4dC9wbGFpbiwgYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgZG9tYWlucyA9IHBhcnNlQmxvY2tsaXN0KHRleHQsIHNvdXJjZS5mb3JtYXQpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGBbQmxvY2tsaXN0XSBGZXRjaGVkICR7c291cmNlLm5hbWV9OiAke2RvbWFpbnMubGVuZ3RofSBkb21haW5zYCk7XG4gICAgcmV0dXJuIGRvbWFpbnM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKGBbQmxvY2tsaXN0XSBGYWlsZWQgdG8gZmV0Y2ggJHtzb3VyY2UubmFtZX0sIHRyeWluZyBsb2NhbCBmYWxsYmFjazpgLCBlcnJvcik7XG4gICAgXG4gICAgLy8gRmFsbGJhY2sgdG8gbG9jYWwgYnVuZGxlZCBmaWxlXG4gICAgcmV0dXJuIGZldGNoTG9jYWxCbG9ja2xpc3Qoc291cmNlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaExvY2FsQmxvY2tsaXN0KHNvdXJjZTogQmxvY2tsaXN0U291cmNlKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAvLyBNYXAgc291cmNlIElEcyB0byBsb2NhbCBmaWxlIHBhdGhzXG4gIGNvbnN0IGxvY2FsUGF0aHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgJ2NhbG13ZWItY29udGVudC1mYXJtcyc6ICcvYmxvY2tsaXN0cy9jb250ZW50LWZhcm1zLmpzb24nLFxuICAgICdjYWxtd2ViLXVzZXItZmF2b3JpbmcnOiAnL2Jsb2NrbGlzdHMvdXNlci1mYXZvcmluZy5qc29uJyxcbiAgfTtcbiAgXG4gIGNvbnN0IGxvY2FsUGF0aCA9IGxvY2FsUGF0aHNbc291cmNlLmlkXTtcbiAgaWYgKCFsb2NhbFBhdGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgLy8gSW4gZXh0ZW5zaW9uIGNvbnRleHQsIHVzZSBjaHJvbWUucnVudGltZS5nZXRVUkxcbiAgICBjb25zdCB1cmwgPSB0eXBlb2YgY2hyb21lICE9PSAndW5kZWZpbmVkJyAmJiBjaHJvbWUucnVudGltZT8uZ2V0VVJMXG4gICAgICA/IGNocm9tZS5ydW50aW1lLmdldFVSTChsb2NhbFBhdGgpXG4gICAgICA6IGxvY2FsUGF0aDtcbiAgICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGRvbWFpbnMgPSBwYXJzZUJsb2NrbGlzdCh0ZXh0LCBzb3VyY2UuZm9ybWF0KTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhgW0Jsb2NrbGlzdF0gTG9hZGVkIGxvY2FsICR7c291cmNlLm5hbWV9OiAke2RvbWFpbnMubGVuZ3RofSBkb21haW5zYCk7XG4gICAgcmV0dXJuIGRvbWFpbnM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW0Jsb2NrbGlzdF0gRmFpbGVkIHRvIGxvYWQgbG9jYWwgJHtzb3VyY2UubmFtZX06YCwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9ja2xpc3QoY29udGVudDogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc3QgZG9tYWluczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KCdcXG4nKTtcblxuICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICBjb25zdCB0cmltbWVkID0gbGluZS50cmltKCk7XG4gICAgXG4gICAgLy8gU2tpcCBjb21tZW50cyBhbmQgZW1wdHkgbGluZXNcbiAgICBpZiAoIXRyaW1tZWQgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCcjJykgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCchJykgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCdbJykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCBkb21haW46IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ2hvc3RzJykge1xuICAgICAgLy8gSG9zdHMgZm9ybWF0OiBcIjAuMC4wLjAgZXhhbXBsZS5jb21cIiBvciBcIjEyNy4wLjAuMSBleGFtcGxlLmNvbVwiXG4gICAgICBjb25zdCBwYXJ0cyA9IHRyaW1tZWQuc3BsaXQoL1xccysvKTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPj0gMikge1xuICAgICAgICBkb21haW4gPSBwYXJ0c1sxXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ3BsYWluJykge1xuICAgICAgLy8gUGxhaW4gZG9tYWluIGxpc3RcbiAgICAgIGRvbWFpbiA9IHRyaW1tZWQ7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdqc29uJykge1xuICAgICAgLy8gSlNPTiBmb3JtYXQgLSBlaXRoZXIgYXJyYXkgb3IgQ2FsbVdlYiBmb3JtYXQgd2l0aCBjYXRlZ29yaWVzXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZWQpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlZC5maWx0ZXIoZCA9PiB0eXBlb2YgZCA9PT0gJ3N0cmluZycpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlZC5jYXRlZ29yaWVzICYmIEFycmF5LmlzQXJyYXkocGFyc2VkLmNhdGVnb3JpZXMpKSB7XG4gICAgICAgICAgLy8gQ2FsbVdlYiBmb3JtYXQ6IHsgY2F0ZWdvcmllczogW3sgZG9tYWluczogWy4uLl0gfSwgLi4uXSB9XG4gICAgICAgICAgcmV0dXJuIHBhcnNlZC5jYXRlZ29yaWVzLmZsYXRNYXAoKGNhdDogeyBkb21haW5zPzogc3RyaW5nW10gfSkgPT4gXG4gICAgICAgICAgICBjYXQuZG9tYWlucyB8fCBbXVxuICAgICAgICAgICkuZmlsdGVyKChkOiB1bmtub3duKSA9PiB0eXBlb2YgZCA9PT0gJ3N0cmluZycpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlZC5kb21haW5zICYmIEFycmF5LmlzQXJyYXkocGFyc2VkLmRvbWFpbnMpKSB7XG4gICAgICAgICAgLy8gU2ltcGxlIGZvcm1hdDogeyBkb21haW5zOiBbLi4uXSB9XG4gICAgICAgICAgcmV0dXJuIHBhcnNlZC5kb21haW5zLmZpbHRlcigoZDogdW5rbm93bikgPT4gdHlwZW9mIGQgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7fVxuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGRvbWFpblxuICAgIGlmIChkb21haW4gJiYgaXNWYWxpZERvbWFpbihkb21haW4pKSB7XG4gICAgICBkb21haW5zLnB1c2goZG9tYWluLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbLi4ubmV3IFNldChkb21haW5zKV07IC8vIERlZHVwZVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRG9tYWluKGRvbWFpbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIFNraXAgbG9jYWxob3N0LCBJUCBhZGRyZXNzZXMsIGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgaWYgKGRvbWFpbiA9PT0gJ2xvY2FsaG9zdCcgfHwgXG4gICAgICBkb21haW4gPT09ICdsb2NhbGhvc3QubG9jYWxkb21haW4nIHx8XG4gICAgICBkb21haW4gPT09ICdicm9hZGNhc3Rob3N0JyB8fFxuICAgICAgZG9tYWluID09PSAnaXA2LWxvY2FsaG9zdCcgfHxcbiAgICAgIGRvbWFpbi5zdGFydHNXaXRoKCc6OjEnKSB8fFxuICAgICAgL15cXGQrXFwuXFxkK1xcLlxcZCtcXC5cXGQrJC8udGVzdChkb21haW4pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvLyBCYXNpYyBkb21haW4gdmFsaWRhdGlvblxuICByZXR1cm4gL15bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykrJC9pLnRlc3QoZG9tYWluKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFsbEJsb2NrbGlzdHMoKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBzdHJpbmdbXT4+IHtcbiAgY29uc3QgcmVzdWx0cyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcbiAgXG4gIGNvbnN0IGVuYWJsZWRTb3VyY2VzID0gQkxPQ0tMSVNUX1NPVVJDRVMuZmlsdGVyKHMgPT4gcy5lbmFibGVkKTtcbiAgXG4gIGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGVuYWJsZWRTb3VyY2VzLm1hcChhc3luYyAoc291cmNlKSA9PiB7XG4gICAgICBjb25zdCBkb21haW5zID0gYXdhaXQgZmV0Y2hCbG9ja2xpc3Qoc291cmNlKTtcbiAgICAgIGlmIChkb21haW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0cy5zZXQoc291cmNlLmlkLCBkb21haW5zKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIC8vIENhY2hlIHJlc3VsdHNcbiAgY29uc3QgY2FjaGU6IENhY2hlZEJsb2NrbGlzdFtdID0gW107XG4gIGZvciAoY29uc3QgW3NvdXJjZUlkLCBkb21haW5zXSBvZiByZXN1bHRzKSB7XG4gICAgY2FjaGUucHVzaCh7XG4gICAgICBzb3VyY2VJZCxcbiAgICAgIGRvbWFpbnMsXG4gICAgICBsYXN0VXBkYXRlZDogRGF0ZS5ub3coKSxcbiAgICAgIGRvbWFpbkNvdW50OiBkb21haW5zLmxlbmd0aCxcbiAgICB9KTtcbiAgfVxuICBcbiAgYXdhaXQgc2F2ZUNhY2hlKGNhY2hlKTtcbiAgXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FjaGVkQmxvY2tsaXN0cygpOiBQcm9taXNlPE1hcDxzdHJpbmcsIHN0cmluZ1tdPj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0b3JlZCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChDQUNIRV9LRVkpO1xuICAgIGNvbnN0IGNhY2hlOiBDYWNoZWRCbG9ja2xpc3RbXSA9IHN0b3JlZFtDQUNIRV9LRVldIHx8IFtdO1xuICAgIFxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2FjaGUpIHtcbiAgICAgIGlmIChub3cgLSBpdGVtLmxhc3RVcGRhdGVkIDwgQ0FDSEVfRFVSQVRJT04pIHtcbiAgICAgICAgcmVzdWx0cy5zZXQoaXRlbS5zb3VyY2VJZCwgaXRlbS5kb21haW5zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBuZXcgTWFwKCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZUNhY2hlKGNhY2hlOiBDYWNoZWRCbG9ja2xpc3RbXSk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbQ0FDSEVfS0VZXTogY2FjaGUgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZXJnZWRCbG9ja2xpc3QoKTogUHJvbWlzZTxTZXQ8c3RyaW5nPj4ge1xuICBjb25zdCBjYWNoZWQgPSBhd2FpdCBnZXRDYWNoZWRCbG9ja2xpc3RzKCk7XG4gIFxuICAvLyBJZiBubyBjYWNoZSBvciBlbXB0eSwgZmV0Y2ggZnJlc2hcbiAgaWYgKGNhY2hlZC5zaXplID09PSAwKSB7XG4gICAgY29uc3QgZnJlc2ggPSBhd2FpdCB1cGRhdGVBbGxCbG9ja2xpc3RzKCk7XG4gICAgY29uc3QgbWVyZ2VkID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBbc291cmNlSWQsIGRvbWFpbnNdIG9mIGZyZXNoLmVudHJpZXMoKSkge1xuICAgICAgLy8gU2tpcCB1c2VyX2Zhdm9yaW5nIGRvbWFpbnMgaW4gdGhlIGJsb2NrbGlzdFxuICAgICAgY29uc3Qgc291cmNlID0gQkxPQ0tMSVNUX1NPVVJDRVMuZmluZChzID0+IHMuaWQgPT09IHNvdXJjZUlkKTtcbiAgICAgIGlmIChzb3VyY2U/LmNhdGVnb3J5ID09PSAndXNlcl9mYXZvcmluZycpIGNvbnRpbnVlO1xuICAgICAgZG9tYWlucy5mb3JFYWNoKGQgPT4gbWVyZ2VkLmFkZChkKSk7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZWQ7XG4gIH1cbiAgXG4gIGNvbnN0IG1lcmdlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBmb3IgKGNvbnN0IFtzb3VyY2VJZCwgZG9tYWluc10gb2YgY2FjaGVkLmVudHJpZXMoKSkge1xuICAgIC8vIFNraXAgdXNlcl9mYXZvcmluZyBkb21haW5zIGluIHRoZSBibG9ja2xpc3RcbiAgICBjb25zdCBzb3VyY2UgPSBCTE9DS0xJU1RfU09VUkNFUy5maW5kKHMgPT4gcy5pZCA9PT0gc291cmNlSWQpO1xuICAgIGlmIChzb3VyY2U/LmNhdGVnb3J5ID09PSAndXNlcl9mYXZvcmluZycpIGNvbnRpbnVlO1xuICAgIGRvbWFpbnMuZm9yRWFjaChkID0+IG1lcmdlZC5hZGQoZCkpO1xuICB9XG4gIFxuICByZXR1cm4gbWVyZ2VkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckZhdm9yaW5nRG9tYWlucygpOiBQcm9taXNlPFNldDxzdHJpbmc+PiB7XG4gIGNvbnN0IGNhY2hlZCA9IGF3YWl0IGdldENhY2hlZEJsb2NrbGlzdHMoKTtcbiAgY29uc3QgdXNlckZhdm9yaW5nID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIFxuICBmb3IgKGNvbnN0IFtzb3VyY2VJZCwgZG9tYWluc10gb2YgY2FjaGVkLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IHNvdXJjZSA9IEJMT0NLTElTVF9TT1VSQ0VTLmZpbmQocyA9PiBzLmlkID09PSBzb3VyY2VJZCk7XG4gICAgaWYgKHNvdXJjZT8uY2F0ZWdvcnkgPT09ICd1c2VyX2Zhdm9yaW5nJykge1xuICAgICAgZG9tYWlucy5mb3JFYWNoKGQgPT4gdXNlckZhdm9yaW5nLmFkZChkKSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gdXNlckZhdm9yaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNEb21haW5CbG9ja2VkKGRvbWFpbjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBkb21haW4udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9ed3d3XFwuLywgJycpO1xuICBcbiAgLy8gRmlyc3QgY2hlY2sgaWYgaXQncyBhIHVzZXItZmF2b3JpbmcgZG9tYWluIChuZXZlciBibG9jayB0aGVzZSlcbiAgY29uc3QgdXNlckZhdm9yaW5nID0gYXdhaXQgZ2V0VXNlckZhdm9yaW5nRG9tYWlucygpO1xuICBpZiAodXNlckZhdm9yaW5nLnNpemUgPiAwKSB7XG4gICAgaWYgKHVzZXJGYXZvcmluZy5oYXMobm9ybWFsaXplZCkpIHJldHVybiBmYWxzZTtcbiAgICAvLyBDaGVjayBwYXJlbnQgZG9tYWlucyB0b29cbiAgICBjb25zdCBwYXJ0cyA9IG5vcm1hbGl6ZWQuc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBwYXJ0cy5zbGljZShpKS5qb2luKCcuJyk7XG4gICAgICBpZiAodXNlckZhdm9yaW5nLmhhcyhwYXJlbnQpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxuICAvLyBUaGVuIGNoZWNrIGJsb2NrbGlzdFxuICBjb25zdCBibG9ja2xpc3QgPSBhd2FpdCBnZXRNZXJnZWRCbG9ja2xpc3QoKTtcbiAgXG4gIC8vIERpcmVjdCBtYXRjaFxuICBpZiAoYmxvY2tsaXN0Lmhhcyhub3JtYWxpemVkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICAvLyBQYXJlbnQgZG9tYWluIG1hdGNoIChlLmcuLCB3d3cuYWRzLmV4YW1wbGUuY29tIC0+IGFkcy5leGFtcGxlLmNvbSAtPiBleGFtcGxlLmNvbSlcbiAgY29uc3QgcGFydHMgPSBub3JtYWxpemVkLnNwbGl0KCcuJyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXJlbnQgPSBwYXJ0cy5zbGljZShpKS5qb2luKCcuJyk7XG4gICAgaWYgKGJsb2NrbGlzdC5oYXMocGFyZW50KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCbG9ja2xpc3RTdGF0cygpOiBQcm9taXNlPHtcbiAgdG90YWxEb21haW5zOiBudW1iZXI7XG4gIGJ5U291cmNlOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W107XG4gIGxhc3RVcGRhdGVkOiBudW1iZXIgfCBudWxsO1xufT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0b3JlZCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChDQUNIRV9LRVkpO1xuICAgIGNvbnN0IGNhY2hlOiBDYWNoZWRCbG9ja2xpc3RbXSA9IHN0b3JlZFtDQUNIRV9LRVldIHx8IFtdO1xuICAgIFxuICAgIGxldCB0b3RhbERvbWFpbnMgPSAwO1xuICAgIGNvbnN0IGJ5U291cmNlOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W10gPSBbXTtcbiAgICBsZXQgbGFzdFVwZGF0ZWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIFxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjYWNoZSkge1xuICAgICAgdG90YWxEb21haW5zICs9IGl0ZW0uZG9tYWluQ291bnQ7XG4gICAgICBjb25zdCBzb3VyY2UgPSBCTE9DS0xJU1RfU09VUkNFUy5maW5kKHMgPT4gcy5pZCA9PT0gaXRlbS5zb3VyY2VJZCk7XG4gICAgICBieVNvdXJjZS5wdXNoKHtcbiAgICAgICAgaWQ6IGl0ZW0uc291cmNlSWQsXG4gICAgICAgIG5hbWU6IHNvdXJjZT8ubmFtZSB8fCBpdGVtLnNvdXJjZUlkLFxuICAgICAgICBjb3VudDogaXRlbS5kb21haW5Db3VudCxcbiAgICAgIH0pO1xuICAgICAgaWYgKGl0ZW0ubGFzdFVwZGF0ZWQgPiAobGFzdFVwZGF0ZWQgfHwgMCkpIHtcbiAgICAgICAgbGFzdFVwZGF0ZWQgPSBpdGVtLmxhc3RVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyB0b3RhbERvbWFpbnMsIGJ5U291cmNlLCBsYXN0VXBkYXRlZCB9O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4geyB0b3RhbERvbWFpbnM6IDAsIGJ5U291cmNlOiBbXSwgbGFzdFVwZGF0ZWQ6IG51bGwgfTtcbiAgfVxufVxuIiwiLyoqXG4gKiBCYWNrZ3JvdW5kIFNlcnZpY2UgV29ya2VyIGZvciBDYWxtV2ViXG4gKlxuICogSGFuZGxlczpcbiAqIC0gTWVzc2FnZSByb3V0aW5nIGZyb20gY29udGVudCBzY3JpcHRzIGFuZCBwb3B1cFxuICogLSBDb250ZW50IGNsYXNzaWZpY2F0aW9uIChsb2NhbCBydWxlcyBvbmx5KVxuICogLSBTZXR0aW5ncyBhbmQgY2FjaGUgbWFuYWdlbWVudFxuICogLSBTdGF0aXN0aWNzIHRyYWNraW5nXG4gKiAtIENvbnRleHQgbWVudSBpbnRlZ3JhdGlvblxuICogLSBGaWx0ZXIgbGlzdCBtYW5hZ2VtZW50IChFYXN5TGlzdCwgRWFzeVByaXZhY3ksIGV0Yy4pXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lQmFja2dyb3VuZCB9IGZyb20gJ3d4dC91dGlscy9kZWZpbmUtYmFja2dyb3VuZCc7XG5pbXBvcnQgeyBNRVNTQUdFX1RZUEVTIH0gZnJvbSAnQC9zcmMvbWVzc2FnaW5nJztcbmltcG9ydCB7IGNsYXNzaWZ5Q29udGVudCB9IGZyb20gJ0AvdXRpbHMvY2xhc3NpZmllcic7XG5pbXBvcnQge1xuICBzZXR0aW5nc1N0b3JlLFxuICBzdGF0c1N0b3JlLFxuICBnZXRDYWNoZWRSZXN1bHQsXG4gIHNldENhY2hlZFJlc3VsdCxcbiAgaW5jcmVtZW50RmlsdGVyZWRDb3VudCxcbiAgY2xlYXJEZWNpc2lvbkNhY2hlLFxuICBpbml0aWFsaXplU3RvcmVzLFxufSBmcm9tICdAL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IHR5cGUgeyBDb250ZW50VW5pdCwgVXNlclNldHRpbmdzIH0gZnJvbSAnQGNhbG13ZWIvc2hhcmVkJztcbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQge1xuICBmZXRjaEFsbExpc3RzLFxuICBnZXRDYWNoZWRMaXN0cyxcbiAgbmVlZHNSZWZyZXNoLFxuICBwYXJzZUNhY2hlZExpc3RzLFxuICBjcmVhdGVOZXR3b3JrUnVsZXMsXG4gIGFwcGx5TmV0d29ya1J1bGVzLFxufSBmcm9tICdAL3NyYy9maWx0ZXJsaXN0JztcbmltcG9ydCB7IHVwZGF0ZUFsbEJsb2NrbGlzdHMsIGdldEJsb2NrbGlzdFN0YXRzIH0gZnJvbSAnQC9zcmMvZmlsdGVyL2Jsb2NrbGlzdC1mZXRjaGVyJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRmlsdGVyIExpc3QgTWFuYWdlbWVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEluaXRpYWxpemUgZmlsdGVyIGxpc3RzIC0gZmV0Y2ggaWYgbmVlZGVkLCBhcHBseSBuZXR3b3JrIHJ1bGVzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVGaWx0ZXJMaXN0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHJlZnJlc2hcbiAgICBjb25zdCBzaG91bGRSZWZyZXNoID0gYXdhaXQgbmVlZHNSZWZyZXNoKCk7XG5cbiAgICBsZXQgbGlzdHM7XG4gICAgaWYgKHNob3VsZFJlZnJlc2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gRmV0Y2hpbmcgZmlsdGVyIGxpc3RzLi4uJyk7XG4gICAgICBsaXN0cyA9IGF3YWl0IGZldGNoQWxsTGlzdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBVc2luZyBjYWNoZWQgZmlsdGVyIGxpc3RzJyk7XG4gICAgICBsaXN0cyA9IGF3YWl0IGdldENhY2hlZExpc3RzKCk7XG4gICAgfVxuXG4gICAgaWYgKGxpc3RzLnNpemUgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gTm8gZmlsdGVyIGxpc3RzIGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIGZpbHRlciBsaXN0c1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlQ2FjaGVkTGlzdHMobGlzdHMpO1xuICAgIGNvbnNvbGUubG9nKGBbQmFja2dyb3VuZF0gUGFyc2VkICR7cGFyc2VkLnN0YXRzLmNzc1J1bGVzfSBDU1MgcnVsZXMsICR7cGFyc2VkLnN0YXRzLnVybFJ1bGVzfSBVUkwgcnVsZXNgKTtcblxuICAgIC8vIEFwcGx5IG5ldHdvcmsgYmxvY2tpbmcgcnVsZXNcbiAgICBpZiAocGFyc2VkLnVybFBhdHRlcm5zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5ldHdvcmtSdWxlcyA9IGNyZWF0ZU5ldHdvcmtSdWxlcyhwYXJzZWQudXJsUGF0dGVybnMpO1xuICAgICAgYXdhaXQgYXBwbHlOZXR3b3JrUnVsZXMobmV0d29ya1J1bGVzKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbQmFja2dyb3VuZF0gQXBwbGllZCAke25ldHdvcmtSdWxlcy5sZW5ndGh9IG5ldHdvcmsgYmxvY2tpbmcgcnVsZXNgKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEZhaWxlZCB0byBpbml0aWFsaXplIGZpbHRlciBsaXN0czonLCBlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBTY2hlZHVsZSBwZXJpb2RpYyBmaWx0ZXIgbGlzdCByZWZyZXNoXG4gKi9cbmZ1bmN0aW9uIHNjaGVkdWxlUmVmcmVzaCgpOiB2b2lkIHtcbiAgLy8gRmlsdGVyIGxpc3RzOiBDaGVjayBldmVyeSBob3VyXG4gIGJyb3dzZXIuYWxhcm1zLmNyZWF0ZSgnZmlsdGVybGlzdC1yZWZyZXNoJywgeyBwZXJpb2RJbk1pbnV0ZXM6IDYwIH0pO1xuICBcbiAgLy8gQmxvY2tsaXN0czogQ2hlY2sgZXZlcnkgNiBob3VycyAobWFsd2FyZSBzaXRlcyBjaGFuZ2UgZnJlcXVlbnRseSlcbiAgYnJvd3Nlci5hbGFybXMuY3JlYXRlKCdibG9ja2xpc3QtcmVmcmVzaCcsIHsgcGVyaW9kSW5NaW51dGVzOiAzNjAgfSk7XG5cbiAgYnJvd3Nlci5hbGFybXMub25BbGFybS5hZGRMaXN0ZW5lcihhc3luYyAoYWxhcm0pID0+IHtcbiAgICBpZiAoYWxhcm0ubmFtZSA9PT0gJ2ZpbHRlcmxpc3QtcmVmcmVzaCcpIHtcbiAgICAgIGlmIChhd2FpdCBuZWVkc1JlZnJlc2goKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFBlcmlvZGljIGZpbHRlciBsaXN0IHJlZnJlc2gnKTtcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZUZpbHRlckxpc3RzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChhbGFybS5uYW1lID09PSAnYmxvY2tsaXN0LXJlZnJlc2gnKSB7XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFBlcmlvZGljIGJsb2NrbGlzdCByZWZyZXNoJyk7XG4gICAgICBhd2FpdCBpbml0aWFsaXplQmxvY2tsaXN0cygpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJsb2NrbGlzdCBNYW5hZ2VtZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVCbG9ja2xpc3RzKCk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gRmV0Y2hpbmcgZXh0ZXJuYWwgYmxvY2tsaXN0cy4uLicpO1xuICAgIGF3YWl0IHVwZGF0ZUFsbEJsb2NrbGlzdHMoKTtcbiAgICBjb25zdCBzdGF0cyA9IGF3YWl0IGdldEJsb2NrbGlzdFN0YXRzKCk7XG4gICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBCbG9ja2xpc3Qgc3RhdHM6ICR7c3RhdHMudG90YWxEb21haW5zLnRvTG9jYWxlU3RyaW5nKCl9IGRvbWFpbnMgZnJvbSAke3N0YXRzLmJ5U291cmNlLmxlbmd0aH0gc291cmNlc2ApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBGYWlsZWQgdG8gaW5pdGlhbGl6ZSBibG9ja2xpc3RzOicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250ZXh0IE1lbnUgU2V0dXBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gc2V0dXBDb250ZXh0TWVudSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBicm93c2VyLmNvbnRleHRNZW51cy5yZW1vdmVBbGwoKTtcbiAgfSBjYXRjaCB7XG4gICAgLy8gSWdub3JlIGlmIG5vIG1lbnVzIGV4aXN0XG4gIH1cblxuICBicm93c2VyLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgIGlkOiAnY2FsbXdlYi10b2dnbGUtZXh0ZW5zaW9uJyxcbiAgICB0aXRsZTogJ1RvZ2dsZSBDYWxtV2ViJyxcbiAgICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgfSk7XG5cbiAgYnJvd3Nlci5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICBpZDogJ2NhbG13ZWItbmV1dHJhbGl6ZS1zZWxlY3Rpb24nLFxuICAgIHRpdGxlOiAnTmV1dHJhbGl6ZSBTZWxlY3RlZCBUZXh0JyxcbiAgICBjb250ZXh0czogWydzZWxlY3Rpb24nXSxcbiAgfSk7XG5cbiAgYnJvd3Nlci5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICBpZDogJ3NlcGFyYXRvci0xJyxcbiAgICB0eXBlOiAnc2VwYXJhdG9yJyxcbiAgICBjb250ZXh0czogWydwYWdlJywgJ3NlbGVjdGlvbiddLFxuICB9KTtcblxuICBicm93c2VyLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgIGlkOiAnY2FsbXdlYi1vcGVuLXNldHRpbmdzJyxcbiAgICB0aXRsZTogJ09wZW4gU2V0dGluZ3MnLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICB9KTtcblxuICBicm93c2VyLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgIGlkOiAnY2FsbXdlYi12aWV3LXN0YXRzJyxcbiAgICB0aXRsZTogJ1ZpZXcgU3RhdGlzdGljcycsXG4gICAgY29udGV4dHM6IFsnYWN0aW9uJ10sXG4gIH0pO1xuXG4gIGJyb3dzZXIuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYyAoaW5mbywgdGFiKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW1JZCA9IGluZm8ubWVudUl0ZW1JZCBhcyBzdHJpbmc7XG5cbiAgICBzd2l0Y2ggKG1lbnVJdGVtSWQpIHtcbiAgICAgIGNhc2UgJ2NhbG13ZWItdG9nZ2xlLWV4dGVuc2lvbic6IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBzZXR0aW5nc1N0b3JlLmdldFZhbHVlKCk7XG4gICAgICAgIGF3YWl0IHNldHRpbmdzU3RvcmUuc2V0VmFsdWUoeyAuLi5zZXR0aW5ncywgZW5hYmxlZDogIXNldHRpbmdzLmVuYWJsZWQgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdjYWxtd2ViLW5ldXRyYWxpemUtc2VsZWN0aW9uJzoge1xuICAgICAgICBpZiAodGFiPy5pZCAmJiBpbmZvLnNlbGVjdGlvblRleHQpIHtcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgICAgICB0eXBlOiAnTkVVVFJBTElaRV9TRUxFQ1RJT04nLFxuICAgICAgICAgICAgdGV4dDogaW5mby5zZWxlY3Rpb25UZXh0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdjYWxtd2ViLW9wZW4tc2V0dGluZ3MnOiB7XG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vcGVuT3B0aW9uc1BhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2NhbG13ZWItdmlldy1zdGF0cyc6IHtcbiAgICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL29wdGlvbnMuaHRtbCcpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZXNzYWdlIEhhbmRsZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgTWVzc2FnZUhhbmRsZXIgPSAobWVzc2FnZTogYW55LCBzZW5kZXI6IGFueSkgPT4gUHJvbWlzZTxhbnk+O1xuXG5jb25zdCBoYW5kbGVyczogUmVjb3JkPHN0cmluZywgTWVzc2FnZUhhbmRsZXI+ID0ge1xuICAvLyBDbGFzc2lmeSBhIHNpbmdsZSBjb250ZW50IHVuaXQgdXNpbmcgbG9jYWwgcnVsZXMgb25seVxuICBbTUVTU0FHRV9UWVBFUy5DTEFTU0lGWV9VTklUXTogYXN5bmMgKG1lc3NhZ2U6IGFueSwgc2VuZGVyOiBhbnkpID0+IHtcbiAgICBzZW5kZXI7IC8vIHNpbGVuY2UgdW51c2VkIHdhcm5pbmdcbiAgICBjb25zdCB1bml0OiBDb250ZW50VW5pdCA9IG1lc3NhZ2UudW5pdDtcblxuICAgIHRyeSB7XG4gICAgICAvLyAxLiBDaGVjayBjYWNoZSBmaXJzdFxuICAgICAgY29uc3QgY2FjaGVkID0gYXdhaXQgZ2V0Q2FjaGVkUmVzdWx0KHVuaXQuZmluZ2VycHJpbnQpO1xuICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICByZXR1cm4gY2FjaGVkO1xuICAgICAgfVxuXG4gICAgICAvLyAyLiBHZXQgY3VycmVudCBzZXR0aW5nc1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBzZXR0aW5nc1N0b3JlLmdldFZhbHVlKCk7XG5cbiAgICAgIC8vIElmIGV4dGVuc2lvbiBpcyBnbG9iYWxseSBkaXNhYmxlZCwgc2hvdyBldmVyeXRoaW5nXG4gICAgICBpZiAoIXNldHRpbmdzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHsgZGVjaXNpb246ICdzaG93JywgY29uZmlkZW5jZTogMSwgcmVhc29uOiAnZGlzYWJsZWQnIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDMuIENsYXNzaWZ5IHVzaW5nIGxvY2FsIHJ1bGVzIG9ubHlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsYXNzaWZ5Q29udGVudCh1bml0LCB7XG4gICAgICAgIHJ1bGVzOiBzZXR0aW5ncy5ydWxlcyxcbiAgICAgIH0pO1xuXG4gICAgICAvLyA0LiBDYWNoZSB0aGUgcmVzdWx0XG4gICAgICBhd2FpdCBzZXRDYWNoZWRSZXN1bHQodW5pdC5maW5nZXJwcmludCwgcmVzdWx0KTtcblxuICAgICAgLy8gNS4gVXBkYXRlIHN0YXRzIGlmIG5vdCAnc2hvdydcbiAgICAgIGlmIChyZXN1bHQuZGVjaXNpb24gIT09ICdzaG93Jykge1xuICAgICAgICBhd2FpdCBpbmNyZW1lbnRGaWx0ZXJlZENvdW50KDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gQ2xhc3NpZmljYXRpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVjaXNpb246ICdzaG93JyxcbiAgICAgICAgY29uZmlkZW5jZTogMCxcbiAgICAgICAgcmVhc29uOiAnZXJyb3InLFxuICAgICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpXG4gICAgICB9O1xuICAgIH1cbiAgfSxcblxuICAvLyBHZXQgY3VycmVudCB1c2VyIHNldHRpbmdzXG4gIFtNRVNTQUdFX1RZUEVTLkdFVF9TRVRUSU5HU106IGFzeW5jIChtZXNzYWdlOiBhbnksIHNlbmRlcjogYW55KSA9PiB7XG4gICAgbWVzc2FnZTsgc2VuZGVyO1xuICAgIHJldHVybiBhd2FpdCBzZXR0aW5nc1N0b3JlLmdldFZhbHVlKCk7XG4gIH0sXG5cbiAgLy8gVXBkYXRlIHVzZXIgc2V0dGluZ3MgKHBhcnRpYWwgdXBkYXRlKVxuICBbTUVTU0FHRV9UWVBFUy5VUERBVEVfU0VUVElOR1NdOiBhc3luYyAobWVzc2FnZTogYW55LCBzZW5kZXI6IGFueSkgPT4ge1xuICAgIHNlbmRlcjtcbiAgICBjb25zdCB1cGRhdGVzID0gbWVzc2FnZS5zZXR0aW5ncyBhcyBQYXJ0aWFsPFVzZXJTZXR0aW5ncz47XG4gICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHNldHRpbmdzU3RvcmUuZ2V0VmFsdWUoKTtcbiAgICBpZiAoY3VycmVudCkge1xuICAgICAgY29uc3QgdXBkYXRlZCA9IHsgLi4uY3VycmVudCwgLi4udXBkYXRlcyB9O1xuICAgICAgaWYgKHVwZGF0ZXMucnVsZXMpIHtcbiAgICAgICAgdXBkYXRlZC5ydWxlcyA9IHsgLi4uY3VycmVudC5ydWxlcywgLi4udXBkYXRlcy5ydWxlcyB9O1xuICAgICAgfVxuICAgICAgYXdhaXQgc2V0dGluZ3NTdG9yZS5zZXRWYWx1ZSh1cGRhdGVkKTtcbiAgICAgIGlmICh1cGRhdGVzLnJ1bGVzKSB7XG4gICAgICAgIGF3YWl0IGNsZWFyRGVjaXNpb25DYWNoZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICB9LFxuXG4gIC8vIENsZWFyIGRlY2lzaW9uIGNhY2hlXG4gIFtNRVNTQUdFX1RZUEVTLkNMRUFSX0NBQ0hFXTogYXN5bmMgKG1lc3NhZ2U6IGFueSwgc2VuZGVyOiBhbnkpID0+IHtcbiAgICBtZXNzYWdlOyBzZW5kZXI7XG4gICAgYXdhaXQgY2xlYXJEZWNpc2lvbkNhY2hlKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9LFxuXG4gIC8vIEdldCBzdGF0aXN0aWNzXG4gIFtNRVNTQUdFX1RZUEVTLkdFVF9TVEFUU106IGFzeW5jIChtZXNzYWdlOiBhbnksIHNlbmRlcjogYW55KSA9PiB7XG4gICAgbWVzc2FnZTsgc2VuZGVyO1xuICAgIHJldHVybiBhd2FpdCBzdGF0c1N0b3JlLmdldFZhbHVlKCk7XG4gIH0sXG5cbiAgLy8gSW5jcmVtZW50IGEgc3RhdCAoZS5nLiwgdG90YWxGaWx0ZXJlZClcbiAgW01FU1NBR0VfVFlQRVMuSU5DUkVNRU5UX1NUQVRdOiBhc3luYyAobWVzc2FnZTogYW55LCBzZW5kZXI6IGFueSkgPT4ge1xuICAgIHNlbmRlcjtcbiAgICBpZiAobWVzc2FnZS5rZXkgPT09ICd0b3RhbEZpbHRlcmVkJykge1xuICAgICAgYXdhaXQgaW5jcmVtZW50RmlsdGVyZWRDb3VudChtZXNzYWdlLmFtb3VudCk7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBzdGF0c1N0b3JlLmdldFZhbHVlKCk7XG4gIH0sXG5cbiAgLy8gR2V0IGJsb2NrbGlzdCBzdGF0aXN0aWNzXG4gICdjYWxtd2ViOmdldEJsb2NrbGlzdFN0YXRzJzogYXN5bmMgKG1lc3NhZ2U6IGFueSwgc2VuZGVyOiBhbnkpID0+IHtcbiAgICBtZXNzYWdlOyBzZW5kZXI7XG4gICAgcmV0dXJuIGF3YWl0IGdldEJsb2NrbGlzdFN0YXRzKCk7XG4gIH0sXG5cbiAgLy8gRm9yY2UgcmVmcmVzaCBibG9ja2xpc3RzXG4gICdjYWxtd2ViOnJlZnJlc2hCbG9ja2xpc3RzJzogYXN5bmMgKG1lc3NhZ2U6IGFueSwgc2VuZGVyOiBhbnkpID0+IHtcbiAgICBtZXNzYWdlOyBzZW5kZXI7XG4gICAgYXdhaXQgdXBkYXRlQWxsQmxvY2tsaXN0cygpO1xuICAgIHJldHVybiBhd2FpdCBnZXRCbG9ja2xpc3RTdGF0cygpO1xuICB9LFxufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQmFja2dyb3VuZCBTZXJ2aWNlIFdvcmtlciBEZWZpbml0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUJhY2tncm91bmQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIENhbG1XZWIgc2VydmljZSB3b3JrZXIgc3RhcnRlZCcpO1xuXG4gIC8vIExpZmVjeWNsZSBjYWxsYmFja3NcbiAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIENhbG1XZWIgaW5zdGFsbGVkJyk7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZVN0b3JlcygpO1xuICAgIGF3YWl0IHNldHVwQ29udGV4dE1lbnUoKTtcblxuICAgIC8vIEluaXRpYWxpemUgZmlsdGVyIGxpc3RzIChmZXRjaCBhbmQgYXBwbHkgbmV0d29yayBydWxlcylcbiAgICBhd2FpdCBpbml0aWFsaXplRmlsdGVyTGlzdHMoKTtcblxuICAgIC8vIEluaXRpYWxpemUgZXh0ZXJuYWwgYmxvY2tsaXN0cyAoU3RldmVuIEJsYWNrLCBldGMuKVxuICAgIGF3YWl0IGluaXRpYWxpemVCbG9ja2xpc3RzKCk7XG5cbiAgICAvLyBTY2hlZHVsZSBwZXJpb2RpYyByZWZyZXNoXG4gICAgc2NoZWR1bGVSZWZyZXNoKCk7XG5cbiAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCcvb3B0aW9ucy5odG1sJykgfSk7XG4gIH0pO1xuXG4gIC8vIENsaWNraW5nIGV4dGVuc2lvbiBpY29uIG9wZW5zIHRoZSBkYXNoYm9hcmRcbiAgYnJvd3Nlci5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCcvb3B0aW9ucy5odG1sJykgfSk7XG4gIH0pO1xuXG4gIC8vIE1lc3NhZ2UgbGlzdGVuZXJcbiAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKG1lc3NhZ2U6IGFueSwgc2VuZGVyOiBhbnksIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNbbWVzc2FnZS50eXBlXTtcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybignW0JhY2tncm91bmRdIFVuaGFuZGxlZCBtZXNzYWdlIHR5cGU6JywgbWVzc2FnZS50eXBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVyKG1lc3NhZ2UsIHNlbmRlcilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNlbmRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gSGFuZGxlciBlcnJvcjonLCBlcnIpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICB9KTtcblxuICAgIHJldHVybiB0cnVlOyAvLyBBc3luYyByZXNwb25zZVxuICB9KSBhcyBhbnkpO1xufSk7XG4iLCJpbXBvcnQgeyBicm93c2VyIGFzIGJyb3dzZXIkMSB9IGZyb20gXCJAd3h0LWRldi9icm93c2VyXCI7XG4vLyNyZWdpb24gc3JjL2Jyb3dzZXIudHNcbi8qKlxuKiBDb250YWlucyB0aGUgYGJyb3dzZXJgIGV4cG9ydCB3aGljaCB5b3Ugc2hvdWxkIHVzZSB0byBhY2Nlc3MgdGhlIGV4dGVuc2lvblxuKiBBUElzIGluIHlvdXIgcHJvamVjdDpcbipcbiogYGBgdHNcbiogaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJ3d4dC9icm93c2VyJztcbipcbiogYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiogICAvLyAuLi5cbiogfSk7XG4qIGBgYFxuKlxuKiBAbW9kdWxlIHd4dC9icm93c2VyXG4qL1xuY29uc3QgYnJvd3NlciA9IGJyb3dzZXIkMTtcbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgYnJvd3NlciB9O1xuIiwiLy8gc3JjL2luZGV4LnRzXG52YXIgX01hdGNoUGF0dGVybiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IobWF0Y2hQYXR0ZXJuKSB7XG4gICAgaWYgKG1hdGNoUGF0dGVybiA9PT0gXCI8YWxsX3VybHM+XCIpIHtcbiAgICAgIHRoaXMuaXNBbGxVcmxzID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gWy4uLl9NYXRjaFBhdHRlcm4uUFJPVE9DT0xTXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IFwiKlwiO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gXCIqXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IC8oLiopOlxcL1xcLyguKj8pKFxcLy4qKS8uZXhlYyhtYXRjaFBhdHRlcm4pO1xuICAgICAgaWYgKGdyb3VwcyA9PSBudWxsKVxuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIFwiSW5jb3JyZWN0IGZvcm1hdFwiKTtcbiAgICAgIGNvbnN0IFtfLCBwcm90b2NvbCwgaG9zdG5hbWUsIHBhdGhuYW1lXSA9IGdyb3VwcztcbiAgICAgIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCk7XG4gICAgICB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpO1xuICAgICAgdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gcHJvdG9jb2wgPT09IFwiKlwiID8gW1wiaHR0cFwiLCBcImh0dHBzXCJdIDogW3Byb3RvY29sXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IGhvc3RuYW1lO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gcGF0aG5hbWU7XG4gICAgfVxuICB9XG4gIGluY2x1ZGVzKHVybCkge1xuICAgIGlmICh0aGlzLmlzQWxsVXJscylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHUgPSB0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiID8gbmV3IFVSTCh1cmwpIDogdXJsIGluc3RhbmNlb2YgTG9jYXRpb24gPyBuZXcgVVJMKHVybC5ocmVmKSA6IHVybDtcbiAgICByZXR1cm4gISF0aGlzLnByb3RvY29sTWF0Y2hlcy5maW5kKChwcm90b2NvbCkgPT4ge1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHNcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwc01hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImZpbGVcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaWxlTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiZnRwXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzRnRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwidXJuXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzVXJuTWF0Y2godSk7XG4gICAgfSk7XG4gIH1cbiAgaXNIdHRwTWF0Y2godXJsKSB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybCk7XG4gIH1cbiAgaXNIdHRwc01hdGNoKHVybCkge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgJiYgdGhpcy5pc0hvc3RQYXRoTWF0Y2godXJsKTtcbiAgfVxuICBpc0hvc3RQYXRoTWF0Y2godXJsKSB7XG4gICAgaWYgKCF0aGlzLmhvc3RuYW1lTWF0Y2ggfHwgIXRoaXMucGF0aG5hbWVNYXRjaClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBob3N0bmFtZU1hdGNoUmVnZXhzID0gW1xuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoKSxcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaC5yZXBsYWNlKC9eXFwqXFwuLywgXCJcIikpXG4gICAgXTtcbiAgICBjb25zdCBwYXRobmFtZU1hdGNoUmVnZXggPSB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLnBhdGhuYW1lTWF0Y2gpO1xuICAgIHJldHVybiAhIWhvc3RuYW1lTWF0Y2hSZWdleHMuZmluZCgocmVnZXgpID0+IHJlZ2V4LnRlc3QodXJsLmhvc3RuYW1lKSkgJiYgcGF0aG5hbWVNYXRjaFJlZ2V4LnRlc3QodXJsLnBhdGhuYW1lKTtcbiAgfVxuICBpc0ZpbGVNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZmlsZTovLyBwYXR0ZXJuIG1hdGNoaW5nLiBPcGVuIGEgUFIgdG8gYWRkIHN1cHBvcnRcIik7XG4gIH1cbiAgaXNGdHBNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZnRwOi8vIHBhdHRlcm4gbWF0Y2hpbmcuIE9wZW4gYSBQUiB0byBhZGQgc3VwcG9ydFwiKTtcbiAgfVxuICBpc1Vybk1hdGNoKHVybCkge1xuICAgIHRocm93IEVycm9yKFwiTm90IGltcGxlbWVudGVkOiB1cm46Ly8gcGF0dGVybiBtYXRjaGluZy4gT3BlbiBhIFBSIHRvIGFkZCBzdXBwb3J0XCIpO1xuICB9XG4gIGNvbnZlcnRQYXR0ZXJuVG9SZWdleChwYXR0ZXJuKSB7XG4gICAgY29uc3QgZXNjYXBlZCA9IHRoaXMuZXNjYXBlRm9yUmVnZXgocGF0dGVybik7XG4gICAgY29uc3Qgc3RhcnNSZXBsYWNlZCA9IGVzY2FwZWQucmVwbGFjZSgvXFxcXFxcKi9nLCBcIi4qXCIpO1xuICAgIHJldHVybiBSZWdFeHAoYF4ke3N0YXJzUmVwbGFjZWR9JGApO1xuICB9XG4gIGVzY2FwZUZvclJlZ2V4KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xuICB9XG59O1xudmFyIE1hdGNoUGF0dGVybiA9IF9NYXRjaFBhdHRlcm47XG5NYXRjaFBhdHRlcm4uUFJPVE9DT0xTID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiZmlsZVwiLCBcImZ0cFwiLCBcInVyblwiXTtcbnZhciBJbnZhbGlkTWF0Y2hQYXR0ZXJuID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoUGF0dGVybiwgcmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgbWF0Y2ggcGF0dGVybiBcIiR7bWF0Y2hQYXR0ZXJufVwiOiAke3JlYXNvbn1gKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCkge1xuICBpZiAoIU1hdGNoUGF0dGVybi5QUk9UT0NPTFMuaW5jbHVkZXMocHJvdG9jb2wpICYmIHByb3RvY29sICE9PSBcIipcIilcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgIG1hdGNoUGF0dGVybixcbiAgICAgIGAke3Byb3RvY29sfSBub3QgYSB2YWxpZCBwcm90b2NvbCAoJHtNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmpvaW4oXCIsIFwiKX0pYFxuICAgICk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpIHtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiOlwiKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIGBIb3N0bmFtZSBjYW5ub3QgaW5jbHVkZSBhIHBvcnRgKTtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiKlwiKSAmJiBob3N0bmFtZS5sZW5ndGggPiAxICYmICFob3N0bmFtZS5zdGFydHNXaXRoKFwiKi5cIikpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICBtYXRjaFBhdHRlcm4sXG4gICAgICBgSWYgdXNpbmcgYSB3aWxkY2FyZCAoKiksIGl0IG11c3QgZ28gYXQgdGhlIHN0YXJ0IG9mIHRoZSBob3N0bmFtZWBcbiAgICApO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIHJldHVybjtcbn1cbmV4cG9ydCB7XG4gIEludmFsaWRNYXRjaFBhdHRlcm4sXG4gIE1hdGNoUGF0dGVyblxufTtcbiJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDE1LDE2LDE3LDE4LDIxLDI3LDI4XSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQSxTQUFTLGlCQUFpQixLQUFLO0FBQzlCLE1BQUksT0FBTyxRQUFRLE9BQU8sUUFBUSxXQUFZLFFBQU8sRUFBRSxNQUFNLEtBQUs7QUFDbEUsU0FBTzs7OztDQ0hSLElBQVc7QUFDWCxFQUFDLFNBQVUsTUFBTTtBQUNiLE9BQUssZUFBZSxNQUFNO0VBQzFCLFNBQVMsU0FBUyxNQUFNO0FBQ3hCLE9BQUssV0FBVztFQUNoQixTQUFTLFlBQVksSUFBSTtBQUNyQixTQUFNLElBQUksT0FBTzs7QUFFckIsT0FBSyxjQUFjO0FBQ25CLE9BQUssZUFBZSxVQUFVO0dBQzFCLE1BQU0sTUFBTSxFQUFFO0FBQ2QsUUFBSyxNQUFNLFFBQVEsTUFDZixLQUFJLFFBQVE7QUFFaEIsVUFBTzs7QUFFWCxPQUFLLHNCQUFzQixRQUFRO0dBQy9CLE1BQU0sWUFBWSxLQUFLLFdBQVcsSUFBSSxDQUFDLFFBQVEsTUFBTSxPQUFPLElBQUksSUFBSSxRQUFRLFNBQVM7R0FDckYsTUFBTSxXQUFXLEVBQUU7QUFDbkIsUUFBSyxNQUFNLEtBQUssVUFDWixVQUFTLEtBQUssSUFBSTtBQUV0QixVQUFPLEtBQUssYUFBYSxTQUFTOztBQUV0QyxPQUFLLGdCQUFnQixRQUFRO0FBQ3pCLFVBQU8sS0FBSyxXQUFXLElBQUksQ0FBQyxJQUFJLFNBQVUsR0FBRztBQUN6QyxXQUFPLElBQUk7S0FDYjs7QUFFTixPQUFLLGFBQWEsT0FBTyxPQUFPLFNBQVMsY0FDbEMsUUFBUSxPQUFPLEtBQUssSUFBSSxJQUN4QixXQUFXO0dBQ1YsTUFBTSxPQUFPLEVBQUU7QUFDZixRQUFLLE1BQU0sT0FBTyxPQUNkLEtBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxRQUFRLElBQUksQ0FDakQsTUFBSyxLQUFLLElBQUk7QUFHdEIsVUFBTzs7QUFFZixPQUFLLFFBQVEsS0FBSyxZQUFZO0FBQzFCLFFBQUssTUFBTSxRQUFRLElBQ2YsS0FBSSxRQUFRLEtBQUssQ0FDYixRQUFPOztBQUluQixPQUFLLFlBQVksT0FBTyxPQUFPLGNBQWMsY0FDdEMsUUFBUSxPQUFPLFVBQVUsSUFBSSxJQUM3QixRQUFRLE9BQU8sUUFBUSxZQUFZLE9BQU8sU0FBUyxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksS0FBSztFQUN0RixTQUFTLFdBQVcsT0FBTyxZQUFZLE9BQU87QUFDMUMsVUFBTyxNQUFNLEtBQUssUUFBUyxPQUFPLFFBQVEsV0FBVyxJQUFJLElBQUksS0FBSyxJQUFLLENBQUMsS0FBSyxVQUFVOztBQUUzRixPQUFLLGFBQWE7QUFDbEIsT0FBSyx5QkFBeUIsR0FBRyxVQUFVO0FBQ3ZDLE9BQUksT0FBTyxVQUFVLFNBQ2pCLFFBQU8sTUFBTSxVQUFVO0FBRTNCLFVBQU87O0lBRVosU0FBUyxPQUFPLEVBQUUsRUFBRTtDQUN2QixJQUFXO0FBQ1gsRUFBQyxTQUFVLFlBQVk7QUFDbkIsYUFBVyxlQUFlLE9BQU8sV0FBVztBQUN4QyxVQUFPO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDTjs7SUFFTixlQUFlLGFBQWEsRUFBRSxFQUFFO0NBQ25DLElBQWEsZ0JBQWdCLEtBQUssWUFBWTtFQUMxQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0gsQ0FBQztDQUNGLElBQWEsaUJBQWlCLFNBQVM7QUFFbkMsVUFEVSxPQUFPLE1BQ2pCO0dBQ0ksS0FBSyxZQUNELFFBQU8sY0FBYztHQUN6QixLQUFLLFNBQ0QsUUFBTyxjQUFjO0dBQ3pCLEtBQUssU0FDRCxRQUFPLE9BQU8sTUFBTSxLQUFLLEdBQUcsY0FBYyxNQUFNLGNBQWM7R0FDbEUsS0FBSyxVQUNELFFBQU8sY0FBYztHQUN6QixLQUFLLFdBQ0QsUUFBTyxjQUFjO0dBQ3pCLEtBQUssU0FDRCxRQUFPLGNBQWM7R0FDekIsS0FBSyxTQUNELFFBQU8sY0FBYztHQUN6QixLQUFLO0FBQ0QsUUFBSSxNQUFNLFFBQVEsS0FBSyxDQUNuQixRQUFPLGNBQWM7QUFFekIsUUFBSSxTQUFTLEtBQ1QsUUFBTyxjQUFjO0FBRXpCLFFBQUksS0FBSyxRQUFRLE9BQU8sS0FBSyxTQUFTLGNBQWMsS0FBSyxTQUFTLE9BQU8sS0FBSyxVQUFVLFdBQ3BGLFFBQU8sY0FBYztBQUV6QixRQUFJLE9BQU8sUUFBUSxlQUFlLGdCQUFnQixJQUM5QyxRQUFPLGNBQWM7QUFFekIsUUFBSSxPQUFPLFFBQVEsZUFBZSxnQkFBZ0IsSUFDOUMsUUFBTyxjQUFjO0FBRXpCLFFBQUksT0FBTyxTQUFTLGVBQWUsZ0JBQWdCLEtBQy9DLFFBQU8sY0FBYztBQUV6QixXQUFPLGNBQWM7R0FDekIsUUFDSSxRQUFPLGNBQWM7Ozs7O0NDaklqQyxJQUFhLGVBQWUsS0FBSyxZQUFZO0VBQ3pDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0gsQ0FBQztDQUtGLElBQWEsV0FBYixNQUFhLGlCQUFpQixNQUFNO0VBQ2hDLElBQUksU0FBUztBQUNULFVBQU8sS0FBSzs7RUFFaEIsWUFBWSxRQUFRO0FBQ2hCLFVBQU87QUFDUCxRQUFLLFNBQVMsRUFBRTtBQUNoQixRQUFLLFlBQVksUUFBUTtBQUNyQixTQUFLLFNBQVMsQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJOztBQUV2QyxRQUFLLGFBQWEsT0FBTyxFQUFFLEtBQUs7QUFDNUIsU0FBSyxTQUFTLENBQUMsR0FBRyxLQUFLLFFBQVEsR0FBRyxLQUFLOztHQUUzQyxNQUFNLGNBQWMsSUFBSSxPQUFPO0FBQy9CLE9BQUksT0FBTyxlQUVQLFFBQU8sZUFBZSxNQUFNLFlBQVk7T0FHeEMsTUFBSyxZQUFZO0FBRXJCLFFBQUssT0FBTztBQUNaLFFBQUssU0FBUzs7RUFFbEIsT0FBTyxTQUFTO0dBQ1osTUFBTSxTQUFTLFdBQ1gsU0FBVSxPQUFPO0FBQ2IsV0FBTyxNQUFNOztHQUVyQixNQUFNLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRTtHQUNuQyxNQUFNLGdCQUFnQixVQUFVO0FBQzVCLFNBQUssTUFBTSxTQUFTLE1BQU0sT0FDdEIsS0FBSSxNQUFNLFNBQVMsZ0JBQ2YsT0FBTSxZQUFZLElBQUksYUFBYTthQUU5QixNQUFNLFNBQVMsc0JBQ3BCLGNBQWEsTUFBTSxnQkFBZ0I7YUFFOUIsTUFBTSxTQUFTLG9CQUNwQixjQUFhLE1BQU0sZUFBZTthQUU3QixNQUFNLEtBQUssV0FBVyxFQUMzQixhQUFZLFFBQVEsS0FBSyxPQUFPLE1BQU0sQ0FBQztTQUV0QztLQUNELElBQUksT0FBTztLQUNYLElBQUksSUFBSTtBQUNSLFlBQU8sSUFBSSxNQUFNLEtBQUssUUFBUTtNQUMxQixNQUFNLEtBQUssTUFBTSxLQUFLO0FBRXRCLFVBQUksRUFEYSxNQUFNLE1BQU0sS0FBSyxTQUFTLEdBRXZDLE1BQUssTUFBTSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRTtXQVNyQztBQUNELFlBQUssTUFBTSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRTtBQUN0QyxZQUFLLElBQUksUUFBUSxLQUFLLE9BQU8sTUFBTSxDQUFDOztBQUV4QyxhQUFPLEtBQUs7QUFDWjs7OztBQUtoQixnQkFBYSxLQUFLO0FBQ2xCLFVBQU87O0VBRVgsT0FBTyxPQUFPLE9BQU87QUFDakIsT0FBSSxFQUFFLGlCQUFpQixVQUNuQixPQUFNLElBQUksTUFBTSxtQkFBbUIsUUFBUTs7RUFHbkQsV0FBVztBQUNQLFVBQU8sS0FBSzs7RUFFaEIsSUFBSSxVQUFVO0FBQ1YsVUFBTyxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssdUJBQXVCLEVBQUU7O0VBRXJFLElBQUksVUFBVTtBQUNWLFVBQU8sS0FBSyxPQUFPLFdBQVc7O0VBRWxDLFFBQVEsVUFBVSxVQUFVLE1BQU0sU0FBUztHQUN2QyxNQUFNLGNBQWMsRUFBRTtHQUN0QixNQUFNLGFBQWEsRUFBRTtBQUNyQixRQUFLLE1BQU0sT0FBTyxLQUFLLE9BQ25CLEtBQUksSUFBSSxLQUFLLFNBQVMsR0FBRztJQUNyQixNQUFNLFVBQVUsSUFBSSxLQUFLO0FBQ3pCLGdCQUFZLFdBQVcsWUFBWSxZQUFZLEVBQUU7QUFDakQsZ0JBQVksU0FBUyxLQUFLLE9BQU8sSUFBSSxDQUFDO1NBR3RDLFlBQVcsS0FBSyxPQUFPLElBQUksQ0FBQztBQUdwQyxVQUFPO0lBQUU7SUFBWTtJQUFhOztFQUV0QyxJQUFJLGFBQWE7QUFDYixVQUFPLEtBQUssU0FBUzs7O0FBRzdCLFVBQVMsVUFBVSxXQUFXO0FBRTFCLFNBRGMsSUFBSSxTQUFTLE9BQU87Ozs7Q0NoSXRDLElBQU0sWUFBWSxPQUFPLFNBQVM7RUFDOUIsSUFBSTtBQUNKLFVBQVEsTUFBTSxNQUFkO0dBQ0ksS0FBSyxhQUFhO0FBQ2QsUUFBSSxNQUFNLGFBQWEsY0FBYyxVQUNqQyxXQUFVO1FBR1YsV0FBVSxZQUFZLE1BQU0sU0FBUyxhQUFhLE1BQU07QUFFNUQ7R0FDSixLQUFLLGFBQWE7QUFDZCxjQUFVLG1DQUFtQyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssc0JBQXNCO0FBQ3ZHO0dBQ0osS0FBSyxhQUFhO0FBQ2QsY0FBVSxrQ0FBa0MsS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLO0FBQzdFO0dBQ0osS0FBSyxhQUFhO0FBQ2QsY0FBVTtBQUNWO0dBQ0osS0FBSyxhQUFhO0FBQ2QsY0FBVSx5Q0FBeUMsS0FBSyxXQUFXLE1BQU0sUUFBUTtBQUNqRjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVUsZ0NBQWdDLEtBQUssV0FBVyxNQUFNLFFBQVEsQ0FBQyxjQUFjLE1BQU0sU0FBUztBQUN0RztHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLFFBQUksT0FBTyxNQUFNLGVBQWUsU0FDNUIsS0FBSSxjQUFjLE1BQU0sWUFBWTtBQUNoQyxlQUFVLGdDQUFnQyxNQUFNLFdBQVcsU0FBUztBQUNwRSxTQUFJLE9BQU8sTUFBTSxXQUFXLGFBQWEsU0FDckMsV0FBVSxHQUFHLFFBQVEscURBQXFELE1BQU0sV0FBVztlQUcxRixnQkFBZ0IsTUFBTSxXQUMzQixXQUFVLG1DQUFtQyxNQUFNLFdBQVcsV0FBVzthQUVwRSxjQUFjLE1BQU0sV0FDekIsV0FBVSxpQ0FBaUMsTUFBTSxXQUFXLFNBQVM7UUFHckUsTUFBSyxZQUFZLE1BQU0sV0FBVzthQUdqQyxNQUFNLGVBQWUsUUFDMUIsV0FBVSxXQUFXLE1BQU07UUFHM0IsV0FBVTtBQUVkO0dBQ0osS0FBSyxhQUFhO0FBQ2QsUUFBSSxNQUFNLFNBQVMsUUFDZixXQUFVLHNCQUFzQixNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxZQUFZLEdBQUcsTUFBTSxRQUFRO2FBQ2pILE1BQU0sU0FBUyxTQUNwQixXQUFVLHVCQUF1QixNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEdBQUcsTUFBTSxRQUFRO2FBQzdHLE1BQU0sU0FBUyxTQUNwQixXQUFVLGtCQUFrQixNQUFNLFFBQVEsc0JBQXNCLE1BQU0sWUFBWSw4QkFBOEIsa0JBQWtCLE1BQU07YUFDbkksTUFBTSxTQUFTLFNBQ3BCLFdBQVUsa0JBQWtCLE1BQU0sUUFBUSxzQkFBc0IsTUFBTSxZQUFZLDhCQUE4QixrQkFBa0IsTUFBTTthQUNuSSxNQUFNLFNBQVMsT0FDcEIsV0FBVSxnQkFBZ0IsTUFBTSxRQUFRLHNCQUFzQixNQUFNLFlBQVksOEJBQThCLGtCQUFrQixJQUFJLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztRQUUvSixXQUFVO0FBQ2Q7R0FDSixLQUFLLGFBQWE7QUFDZCxRQUFJLE1BQU0sU0FBUyxRQUNmLFdBQVUsc0JBQXNCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxZQUFZLFlBQVksR0FBRyxNQUFNLFFBQVE7YUFDaEgsTUFBTSxTQUFTLFNBQ3BCLFdBQVUsdUJBQXVCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxZQUFZLFFBQVEsR0FBRyxNQUFNLFFBQVE7YUFDN0csTUFBTSxTQUFTLFNBQ3BCLFdBQVUsa0JBQWtCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSwwQkFBMEIsWUFBWSxHQUFHLE1BQU07YUFDbEgsTUFBTSxTQUFTLFNBQ3BCLFdBQVUsa0JBQWtCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSwwQkFBMEIsWUFBWSxHQUFHLE1BQU07YUFDbEgsTUFBTSxTQUFTLE9BQ3BCLFdBQVUsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSw2QkFBNkIsZUFBZSxHQUFHLElBQUksS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO1FBRXBKLFdBQVU7QUFDZDtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVU7QUFDVjtHQUNKLEtBQUssYUFBYTtBQUNkLGNBQVUsZ0NBQWdDLE1BQU07QUFDaEQ7R0FDSixLQUFLLGFBQWE7QUFDZCxjQUFVO0FBQ1Y7R0FDSjtBQUNJLGNBQVUsS0FBSztBQUNmLFNBQUssWUFBWSxNQUFNOztBQUUvQixTQUFPLEVBQUUsU0FBUzs7OztDQ3pHdEIsSUFBSSxtQkFBbUJBO0NBS3ZCLFNBQWdCLGNBQWM7QUFDMUIsU0FBTzs7OztDQ0xYLElBQWEsYUFBYSxXQUFXO0VBQ2pDLE1BQU0sRUFBRSxNQUFNLE1BQU0sV0FBVyxjQUFjO0VBQzdDLE1BQU0sV0FBVyxDQUFDLEdBQUcsTUFBTSxHQUFJLFVBQVUsUUFBUSxFQUFFLENBQUU7RUFDckQsTUFBTSxZQUFZO0dBQ2QsR0FBRztHQUNILE1BQU07R0FDVDtBQUNELE1BQUksVUFBVSxZQUFZLEtBQUEsRUFDdEIsUUFBTztHQUNILEdBQUc7R0FDSCxNQUFNO0dBQ04sU0FBUyxVQUFVO0dBQ3RCO0VBRUwsSUFBSSxlQUFlO0VBQ25CLE1BQU0sT0FBTyxVQUNSLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUNsQixPQUFPLENBQ1AsU0FBUztBQUNkLE9BQUssTUFBTSxPQUFPLEtBQ2QsZ0JBQWUsSUFBSSxXQUFXO0dBQUU7R0FBTSxjQUFjO0dBQWMsQ0FBQyxDQUFDO0FBRXhFLFNBQU87R0FDSCxHQUFHO0dBQ0gsTUFBTTtHQUNOLFNBQVM7R0FDWjs7Q0FHTCxTQUFnQixrQkFBa0IsS0FBSyxXQUFXO0VBQzlDLE1BQU0sY0FBYyxhQUFhO0VBQ2pDLE1BQU0sUUFBUSxVQUFVO0dBQ1Q7R0FDWCxNQUFNLElBQUk7R0FDVixNQUFNLElBQUk7R0FDVixXQUFXO0lBQ1AsSUFBSSxPQUFPO0lBQ1gsSUFBSTtJQUNKO0lBQ0EsZ0JBQWdCQyxXQUFrQixLQUFBLElBQVlBO0lBQ2pELENBQUMsUUFBUSxNQUFNLENBQUMsQ0FBQyxFQUFFO0dBQ3ZCLENBQUM7QUFDRixNQUFJLE9BQU8sT0FBTyxLQUFLLE1BQU07O0NBRWpDLElBQWEsY0FBYixNQUFhLFlBQVk7RUFDckIsY0FBYztBQUNWLFFBQUssUUFBUTs7RUFFakIsUUFBUTtBQUNKLE9BQUksS0FBSyxVQUFVLFFBQ2YsTUFBSyxRQUFROztFQUVyQixRQUFRO0FBQ0osT0FBSSxLQUFLLFVBQVUsVUFDZixNQUFLLFFBQVE7O0VBRXJCLE9BQU8sV0FBVyxRQUFRLFNBQVM7R0FDL0IsTUFBTSxhQUFhLEVBQUU7QUFDckIsUUFBSyxNQUFNLEtBQUssU0FBUztBQUNyQixRQUFJLEVBQUUsV0FBVyxVQUNiLFFBQU87QUFDWCxRQUFJLEVBQUUsV0FBVyxRQUNiLFFBQU8sT0FBTztBQUNsQixlQUFXLEtBQUssRUFBRSxNQUFNOztBQUU1QixVQUFPO0lBQUUsUUFBUSxPQUFPO0lBQU8sT0FBTztJQUFZOztFQUV0RCxhQUFhLGlCQUFpQixRQUFRLE9BQU87R0FDekMsTUFBTSxZQUFZLEVBQUU7QUFDcEIsUUFBSyxNQUFNLFFBQVEsT0FBTztJQUN0QixNQUFNLE1BQU0sTUFBTSxLQUFLO0lBQ3ZCLE1BQU0sUUFBUSxNQUFNLEtBQUs7QUFDekIsY0FBVSxLQUFLO0tBQ1g7S0FDQTtLQUNILENBQUM7O0FBRU4sVUFBTyxZQUFZLGdCQUFnQixRQUFRLFVBQVU7O0VBRXpELE9BQU8sZ0JBQWdCLFFBQVEsT0FBTztHQUNsQyxNQUFNLGNBQWMsRUFBRTtBQUN0QixRQUFLLE1BQU0sUUFBUSxPQUFPO0lBQ3RCLE1BQU0sRUFBRSxLQUFLLFVBQVU7QUFDdkIsUUFBSSxJQUFJLFdBQVcsVUFDZixRQUFPO0FBQ1gsUUFBSSxNQUFNLFdBQVcsVUFDakIsUUFBTztBQUNYLFFBQUksSUFBSSxXQUFXLFFBQ2YsUUFBTyxPQUFPO0FBQ2xCLFFBQUksTUFBTSxXQUFXLFFBQ2pCLFFBQU8sT0FBTztBQUNsQixRQUFJLElBQUksVUFBVSxnQkFBZ0IsT0FBTyxNQUFNLFVBQVUsZUFBZSxLQUFLLFdBQ3pFLGFBQVksSUFBSSxTQUFTLE1BQU07O0FBR3ZDLFVBQU87SUFBRSxRQUFRLE9BQU87SUFBTyxPQUFPO0lBQWE7OztDQUczRCxJQUFhLFVBQVUsT0FBTyxPQUFPLEVBQ2pDLFFBQVEsV0FDWCxDQUFDO0NBQ0YsSUFBYSxTQUFTLFdBQVc7RUFBRSxRQUFRO0VBQVM7RUFBTztDQUMzRCxJQUFhLE1BQU0sV0FBVztFQUFFLFFBQVE7RUFBUztFQUFPO0NBQ3hELElBQWEsYUFBYSxNQUFNLEVBQUUsV0FBVztDQUM3QyxJQUFhLFdBQVcsTUFBTSxFQUFFLFdBQVc7Q0FDM0MsSUFBYSxXQUFXLE1BQU0sRUFBRSxXQUFXO0NBQzNDLElBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxlQUFlLGFBQWE7OztDQzVHN0UsSUFBVztBQUNYLEVBQUMsU0FBVSxXQUFXO0FBQ2xCLFlBQVUsWUFBWSxZQUFZLE9BQU8sWUFBWSxXQUFXLEVBQUUsU0FBUyxHQUFHLFdBQVcsRUFBRTtBQUUzRixZQUFVLFlBQVksWUFBWSxPQUFPLFlBQVksV0FBVyxVQUFVLFNBQVM7SUFDcEYsY0FBYyxZQUFZLEVBQUUsRUFBRTs7O0NDQWpDLElBQU0scUJBQU4sTUFBeUI7RUFDckIsWUFBWSxRQUFRLE9BQU8sTUFBTSxLQUFLO0FBQ2xDLFFBQUssY0FBYyxFQUFFO0FBQ3JCLFFBQUssU0FBUztBQUNkLFFBQUssT0FBTztBQUNaLFFBQUssUUFBUTtBQUNiLFFBQUssT0FBTzs7RUFFaEIsSUFBSSxPQUFPO0FBQ1AsT0FBSSxDQUFDLEtBQUssWUFBWSxPQUNsQixLQUFJLE1BQU0sUUFBUSxLQUFLLEtBQUssQ0FDeEIsTUFBSyxZQUFZLEtBQUssR0FBRyxLQUFLLE9BQU8sR0FBRyxLQUFLLEtBQUs7T0FHbEQsTUFBSyxZQUFZLEtBQUssR0FBRyxLQUFLLE9BQU8sS0FBSyxLQUFLO0FBR3ZELFVBQU8sS0FBSzs7O0NBR3BCLElBQU0sZ0JBQWdCLEtBQUssV0FBVztBQUNsQyxNQUFJLFFBQVEsT0FBTyxDQUNmLFFBQU87R0FBRSxTQUFTO0dBQU0sTUFBTSxPQUFPO0dBQU87T0FFM0M7QUFDRCxPQUFJLENBQUMsSUFBSSxPQUFPLE9BQU8sT0FDbkIsT0FBTSxJQUFJLE1BQU0sNENBQTRDO0FBRWhFLFVBQU87SUFDSCxTQUFTO0lBQ1QsSUFBSSxRQUFRO0FBQ1IsU0FBSSxLQUFLLE9BQ0wsUUFBTyxLQUFLO0FBRWhCLFVBQUssU0FEUyxJQUFJLFNBQVMsSUFBSSxPQUFPLE9BQU87QUFFN0MsWUFBTyxLQUFLOztJQUVuQjs7O0NBR1QsU0FBUyxvQkFBb0IsUUFBUTtBQUNqQyxNQUFJLENBQUMsT0FDRCxRQUFPLEVBQUU7RUFDYixNQUFNLEVBQUUsVUFBVSxvQkFBb0IsZ0JBQWdCLGdCQUFnQjtBQUN0RSxNQUFJLGFBQWEsc0JBQXNCLGdCQUNuQyxPQUFNLElBQUksTUFBTSwyRkFBMkY7QUFFL0csTUFBSSxTQUNBLFFBQU87R0FBWTtHQUFVO0dBQWE7RUFDOUMsTUFBTSxhQUFhLEtBQUssUUFBUTtHQUM1QixNQUFNLEVBQUUsWUFBWTtBQUNwQixPQUFJLElBQUksU0FBUyxxQkFDYixRQUFPLEVBQUUsU0FBUyxXQUFXLElBQUksY0FBYztBQUVuRCxPQUFJLE9BQU8sSUFBSSxTQUFTLFlBQ3BCLFFBQU8sRUFBRSxTQUFTLFdBQVcsa0JBQWtCLElBQUksY0FBYztBQUVyRSxPQUFJLElBQUksU0FBUyxlQUNiLFFBQU8sRUFBRSxTQUFTLElBQUksY0FBYztBQUN4QyxVQUFPLEVBQUUsU0FBUyxXQUFXLHNCQUFzQixJQUFJLGNBQWM7O0FBRXpFLFNBQU87R0FBRSxVQUFVO0dBQVc7R0FBYTs7Q0FFL0MsSUFBYSxVQUFiLE1BQXFCO0VBQ2pCLElBQUksY0FBYztBQUNkLFVBQU8sS0FBSyxLQUFLOztFQUVyQixTQUFTLE9BQU87QUFDWixVQUFPLGNBQWMsTUFBTSxLQUFLOztFQUVwQyxnQkFBZ0IsT0FBTyxLQUFLO0FBQ3hCLFVBQVEsT0FBTztJQUNYLFFBQVEsTUFBTSxPQUFPO0lBQ3JCLE1BQU0sTUFBTTtJQUNaLFlBQVksY0FBYyxNQUFNLEtBQUs7SUFDckMsZ0JBQWdCLEtBQUssS0FBSztJQUMxQixNQUFNLE1BQU07SUFDWixRQUFRLE1BQU07SUFDakI7O0VBRUwsb0JBQW9CLE9BQU87QUFDdkIsVUFBTztJQUNILFFBQVEsSUFBSSxhQUFhO0lBQ3pCLEtBQUs7S0FDRCxRQUFRLE1BQU0sT0FBTztLQUNyQixNQUFNLE1BQU07S0FDWixZQUFZLGNBQWMsTUFBTSxLQUFLO0tBQ3JDLGdCQUFnQixLQUFLLEtBQUs7S0FDMUIsTUFBTSxNQUFNO0tBQ1osUUFBUSxNQUFNO0tBQ2pCO0lBQ0o7O0VBRUwsV0FBVyxPQUFPO0dBQ2QsTUFBTSxTQUFTLEtBQUssT0FBTyxNQUFNO0FBQ2pDLE9BQUksUUFBUSxPQUFPLENBQ2YsT0FBTSxJQUFJLE1BQU0seUNBQXlDO0FBRTdELFVBQU87O0VBRVgsWUFBWSxPQUFPO0dBQ2YsTUFBTSxTQUFTLEtBQUssT0FBTyxNQUFNO0FBQ2pDLFVBQU8sUUFBUSxRQUFRLE9BQU87O0VBRWxDLE1BQU0sTUFBTSxRQUFRO0dBQ2hCLE1BQU0sU0FBUyxLQUFLLFVBQVUsTUFBTSxPQUFPO0FBQzNDLE9BQUksT0FBTyxRQUNQLFFBQU8sT0FBTztBQUNsQixTQUFNLE9BQU87O0VBRWpCLFVBQVUsTUFBTSxRQUFRO0dBQ3BCLE1BQU0sTUFBTTtJQUNSLFFBQVE7S0FDSixRQUFRLEVBQUU7S0FDVixPQUFPLFFBQVEsU0FBUztLQUN4QixvQkFBb0IsUUFBUTtLQUMvQjtJQUNELE1BQU0sUUFBUSxRQUFRLEVBQUU7SUFDeEIsZ0JBQWdCLEtBQUssS0FBSztJQUMxQixRQUFRO0lBQ1I7SUFDQSxZQUFZLGNBQWMsS0FBSztJQUNsQztBQUVELFVBQU8sYUFBYSxLQURMLEtBQUssV0FBVztJQUFFO0lBQU0sTUFBTSxJQUFJO0lBQU0sUUFBUTtJQUFLLENBQUMsQ0FDckM7O0VBRXBDLFlBQVksTUFBTTtHQUNkLE1BQU0sTUFBTTtJQUNSLFFBQVE7S0FDSixRQUFRLEVBQUU7S0FDVixPQUFPLENBQUMsQ0FBQyxLQUFLLGFBQWE7S0FDOUI7SUFDRCxNQUFNLEVBQUU7SUFDUixnQkFBZ0IsS0FBSyxLQUFLO0lBQzFCLFFBQVE7SUFDUjtJQUNBLFlBQVksY0FBYyxLQUFLO0lBQ2xDO0FBQ0QsT0FBSSxDQUFDLEtBQUssYUFBYSxNQUNuQixLQUFJO0lBQ0EsTUFBTSxTQUFTLEtBQUssV0FBVztLQUFFO0tBQU0sTUFBTSxFQUFFO0tBQUUsUUFBUTtLQUFLLENBQUM7QUFDL0QsV0FBTyxRQUFRLE9BQU8sR0FDaEIsRUFDRSxPQUFPLE9BQU8sT0FDakIsR0FDQyxFQUNFLFFBQVEsSUFBSSxPQUFPLFFBQ3RCO1lBRUYsS0FBSztBQUNSLFFBQUksS0FBSyxTQUFTLGFBQWEsRUFBRSxTQUFTLGNBQWMsQ0FDcEQsTUFBSyxhQUFhLFFBQVE7QUFFOUIsUUFBSSxTQUFTO0tBQ1QsUUFBUSxFQUFFO0tBQ1YsT0FBTztLQUNWOztBQUdULFVBQU8sS0FBSyxZQUFZO0lBQUU7SUFBTSxNQUFNLEVBQUU7SUFBRSxRQUFRO0lBQUssQ0FBQyxDQUFDLE1BQU0sV0FBVyxRQUFRLE9BQU8sR0FDbkYsRUFDRSxPQUFPLE9BQU8sT0FDakIsR0FDQyxFQUNFLFFBQVEsSUFBSSxPQUFPLFFBQ3RCLENBQUM7O0VBRVYsTUFBTSxXQUFXLE1BQU0sUUFBUTtHQUMzQixNQUFNLFNBQVMsTUFBTSxLQUFLLGVBQWUsTUFBTSxPQUFPO0FBQ3RELE9BQUksT0FBTyxRQUNQLFFBQU8sT0FBTztBQUNsQixTQUFNLE9BQU87O0VBRWpCLE1BQU0sZUFBZSxNQUFNLFFBQVE7R0FDL0IsTUFBTSxNQUFNO0lBQ1IsUUFBUTtLQUNKLFFBQVEsRUFBRTtLQUNWLG9CQUFvQixRQUFRO0tBQzVCLE9BQU87S0FDVjtJQUNELE1BQU0sUUFBUSxRQUFRLEVBQUU7SUFDeEIsZ0JBQWdCLEtBQUssS0FBSztJQUMxQixRQUFRO0lBQ1I7SUFDQSxZQUFZLGNBQWMsS0FBSztJQUNsQztHQUNELE1BQU0sbUJBQW1CLEtBQUssT0FBTztJQUFFO0lBQU0sTUFBTSxJQUFJO0lBQU0sUUFBUTtJQUFLLENBQUM7QUFFM0UsVUFBTyxhQUFhLEtBREwsT0FBTyxRQUFRLGlCQUFpQixHQUFHLG1CQUFtQixRQUFRLFFBQVEsaUJBQWlCLEVBQ3RFOztFQUVwQyxPQUFPLE9BQU8sU0FBUztHQUNuQixNQUFNLHNCQUFzQixRQUFRO0FBQ2hDLFFBQUksT0FBTyxZQUFZLFlBQVksT0FBTyxZQUFZLFlBQ2xELFFBQU8sRUFBRSxTQUFTO2FBRWIsT0FBTyxZQUFZLFdBQ3hCLFFBQU8sUUFBUSxJQUFJO1FBR25CLFFBQU87O0FBR2YsVUFBTyxLQUFLLGFBQWEsS0FBSyxRQUFRO0lBQ2xDLE1BQU0sU0FBUyxNQUFNLElBQUk7SUFDekIsTUFBTSxpQkFBaUIsSUFBSSxTQUFTO0tBQ2hDLE1BQU0sYUFBYTtLQUNuQixHQUFHLG1CQUFtQixJQUFJO0tBQzdCLENBQUM7QUFDRixRQUFJLE9BQU8sWUFBWSxlQUFlLGtCQUFrQixRQUNwRCxRQUFPLE9BQU8sTUFBTSxTQUFTO0FBQ3pCLFNBQUksQ0FBQyxNQUFNO0FBQ1AsZ0JBQVU7QUFDVixhQUFPO1dBR1AsUUFBTztNQUViO0FBRU4sUUFBSSxDQUFDLFFBQVE7QUFDVCxlQUFVO0FBQ1YsWUFBTztVQUdQLFFBQU87S0FFYjs7RUFFTixXQUFXLE9BQU8sZ0JBQWdCO0FBQzlCLFVBQU8sS0FBSyxhQUFhLEtBQUssUUFBUTtBQUNsQyxRQUFJLENBQUMsTUFBTSxJQUFJLEVBQUU7QUFDYixTQUFJLFNBQVMsT0FBTyxtQkFBbUIsYUFBYSxlQUFlLEtBQUssSUFBSSxHQUFHLGVBQWU7QUFDOUYsWUFBTztVQUdQLFFBQU87S0FFYjs7RUFFTixZQUFZLFlBQVk7QUFDcEIsVUFBTyxJQUFJLFdBQVc7SUFDbEIsUUFBUTtJQUNSLFVBQVUsc0JBQXNCO0lBQ2hDLFFBQVE7S0FBRSxNQUFNO0tBQWM7S0FBWTtJQUM3QyxDQUFDOztFQUVOLFlBQVksWUFBWTtBQUNwQixVQUFPLEtBQUssWUFBWSxXQUFXOztFQUV2QyxZQUFZLEtBQUs7O0FBRWIsUUFBSyxNQUFNLEtBQUs7QUFDaEIsUUFBSyxPQUFPO0FBQ1osUUFBSyxRQUFRLEtBQUssTUFBTSxLQUFLLEtBQUs7QUFDbEMsUUFBSyxZQUFZLEtBQUssVUFBVSxLQUFLLEtBQUs7QUFDMUMsUUFBSyxhQUFhLEtBQUssV0FBVyxLQUFLLEtBQUs7QUFDNUMsUUFBSyxpQkFBaUIsS0FBSyxlQUFlLEtBQUssS0FBSztBQUNwRCxRQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSztBQUM5QixRQUFLLFNBQVMsS0FBSyxPQUFPLEtBQUssS0FBSztBQUNwQyxRQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssS0FBSztBQUM1QyxRQUFLLGNBQWMsS0FBSyxZQUFZLEtBQUssS0FBSztBQUM5QyxRQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSztBQUN4QyxRQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSztBQUN4QyxRQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssS0FBSztBQUN0QyxRQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssS0FBSztBQUNsQyxRQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssS0FBSztBQUN0QyxRQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssS0FBSztBQUM1QixRQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSztBQUM5QixRQUFLLFlBQVksS0FBSyxVQUFVLEtBQUssS0FBSztBQUMxQyxRQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssS0FBSztBQUNsQyxRQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssS0FBSztBQUN0QyxRQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssS0FBSztBQUNsQyxRQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSztBQUN4QyxRQUFLLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSztBQUNoQyxRQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSztBQUN4QyxRQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssS0FBSztBQUM1QyxRQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssS0FBSztBQUM1QyxRQUFLLGVBQWU7SUFDaEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXLFNBQVMsS0FBSyxhQUFhLEtBQUs7SUFDOUM7O0VBRUwsV0FBVztBQUNQLFVBQU8sWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLOztFQUU5QyxXQUFXO0FBQ1AsVUFBTyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUs7O0VBRTlDLFVBQVU7QUFDTixVQUFPLEtBQUssVUFBVSxDQUFDLFVBQVU7O0VBRXJDLFFBQVE7QUFDSixVQUFPLFNBQVMsT0FBTyxLQUFLOztFQUVoQyxVQUFVO0FBQ04sVUFBTyxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUs7O0VBRTdDLEdBQUcsUUFBUTtBQUNQLFVBQU8sU0FBUyxPQUFPLENBQUMsTUFBTSxPQUFPLEVBQUUsS0FBSyxLQUFLOztFQUVyRCxJQUFJLFVBQVU7QUFDVixVQUFPLGdCQUFnQixPQUFPLE1BQU0sVUFBVSxLQUFLLEtBQUs7O0VBRTVELFVBQVUsV0FBVztBQUNqQixVQUFPLElBQUksV0FBVztJQUNsQixHQUFHLG9CQUFvQixLQUFLLEtBQUs7SUFDakMsUUFBUTtJQUNSLFVBQVUsc0JBQXNCO0lBQ2hDLFFBQVE7S0FBRSxNQUFNO0tBQWE7S0FBVztJQUMzQyxDQUFDOztFQUVOLFFBQVEsS0FBSztHQUNULE1BQU0sbUJBQW1CLE9BQU8sUUFBUSxhQUFhLFlBQVk7QUFDakUsVUFBTyxJQUFJLFdBQVc7SUFDbEIsR0FBRyxvQkFBb0IsS0FBSyxLQUFLO0lBQ2pDLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVSxzQkFBc0I7SUFDbkMsQ0FBQzs7RUFFTixRQUFRO0FBQ0osVUFBTyxJQUFJLFdBQVc7SUFDbEIsVUFBVSxzQkFBc0I7SUFDaEMsTUFBTTtJQUNOLEdBQUcsb0JBQW9CLEtBQUssS0FBSztJQUNwQyxDQUFDOztFQUVOLE1BQU0sS0FBSztHQUNQLE1BQU0saUJBQWlCLE9BQU8sUUFBUSxhQUFhLFlBQVk7QUFDL0QsVUFBTyxJQUFJLFNBQVM7SUFDaEIsR0FBRyxvQkFBb0IsS0FBSyxLQUFLO0lBQ2pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVSxzQkFBc0I7SUFDbkMsQ0FBQzs7RUFFTixTQUFTLGFBQWE7R0FDbEIsTUFBTSxPQUFPLEtBQUs7QUFDbEIsVUFBTyxJQUFJLEtBQUs7SUFDWixHQUFHLEtBQUs7SUFDUjtJQUNILENBQUM7O0VBRU4sS0FBSyxRQUFRO0FBQ1QsVUFBTyxZQUFZLE9BQU8sTUFBTSxPQUFPOztFQUUzQyxXQUFXO0FBQ1AsVUFBTyxZQUFZLE9BQU8sS0FBSzs7RUFFbkMsYUFBYTtBQUNULFVBQU8sS0FBSyxVQUFVLEtBQUEsRUFBVSxDQUFDOztFQUVyQyxhQUFhO0FBQ1QsVUFBTyxLQUFLLFVBQVUsS0FBSyxDQUFDOzs7Q0FHcEMsSUFBTSxZQUFZO0NBQ2xCLElBQU0sYUFBYTtDQUNuQixJQUFNLFlBQVk7Q0FHbEIsSUFBTSxZQUFZO0NBQ2xCLElBQU0sY0FBYztDQUNwQixJQUFNLFdBQVc7Q0FDakIsSUFBTSxnQkFBZ0I7Q0FhdEIsSUFBTSxhQUFhO0NBSW5CLElBQU0sY0FBYztDQUNwQixJQUFJO0NBRUosSUFBTSxZQUFZO0NBQ2xCLElBQU0sZ0JBQWdCO0NBR3RCLElBQU0sWUFBWTtDQUNsQixJQUFNLGdCQUFnQjtDQUV0QixJQUFNLGNBQWM7Q0FFcEIsSUFBTSxpQkFBaUI7Q0FNdkIsSUFBTSxrQkFBa0I7Q0FDeEIsSUFBTSxZQUFZLElBQUksT0FBTyxJQUFJLGdCQUFnQixHQUFHO0NBQ3BELFNBQVMsZ0JBQWdCLE1BQU07RUFDM0IsSUFBSSxxQkFBcUI7QUFDekIsTUFBSSxLQUFLLFVBQ0wsc0JBQXFCLEdBQUcsbUJBQW1CLFNBQVMsS0FBSyxVQUFVO1dBRTlELEtBQUssYUFBYSxLQUN2QixzQkFBcUIsR0FBRyxtQkFBbUI7RUFFL0MsTUFBTSxvQkFBb0IsS0FBSyxZQUFZLE1BQU07QUFDakQsU0FBTyw4QkFBOEIsbUJBQW1CLEdBQUc7O0NBRS9ELFNBQVMsVUFBVSxNQUFNO0FBQ3JCLFNBQU8sSUFBSSxPQUFPLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxHQUFHOztDQUduRCxTQUFnQixjQUFjLE1BQU07RUFDaEMsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLEtBQUs7RUFDdkQsTUFBTSxPQUFPLEVBQUU7QUFDZixPQUFLLEtBQUssS0FBSyxRQUFRLE9BQU8sSUFBSTtBQUNsQyxNQUFJLEtBQUssT0FDTCxNQUFLLEtBQUssdUJBQXVCO0FBQ3JDLFVBQVEsR0FBRyxNQUFNLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQztBQUNuQyxTQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sR0FBRzs7Q0FFbkMsU0FBUyxVQUFVLElBQUksU0FBUztBQUM1QixPQUFLLFlBQVksUUFBUSxDQUFDLFlBQVksVUFBVSxLQUFLLEdBQUcsQ0FDcEQsUUFBTztBQUVYLE9BQUssWUFBWSxRQUFRLENBQUMsWUFBWSxVQUFVLEtBQUssR0FBRyxDQUNwRCxRQUFPO0FBRVgsU0FBTzs7Q0FFWCxTQUFTLFdBQVcsS0FBSyxLQUFLO0FBQzFCLE1BQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUNuQixRQUFPO0FBQ1gsTUFBSTtHQUNBLE1BQU0sQ0FBQyxVQUFVLElBQUksTUFBTSxJQUFJO0FBQy9CLE9BQUksQ0FBQyxPQUNELFFBQU87R0FFWCxNQUFNLFNBQVMsT0FDVixRQUFRLE1BQU0sSUFBSSxDQUNsQixRQUFRLE1BQU0sSUFBSSxDQUNsQixPQUFPLE9BQU8sVUFBVyxJQUFLLE9BQU8sU0FBUyxLQUFNLEdBQUksSUFBSTtHQUNqRSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssT0FBTyxDQUFDO0FBQ3hDLE9BQUksT0FBTyxZQUFZLFlBQVksWUFBWSxLQUMzQyxRQUFPO0FBQ1gsT0FBSSxTQUFTLFdBQVcsU0FBUyxRQUFRLE1BQ3JDLFFBQU87QUFDWCxPQUFJLENBQUMsUUFBUSxJQUNULFFBQU87QUFDWCxPQUFJLE9BQU8sUUFBUSxRQUFRLElBQ3ZCLFFBQU87QUFDWCxVQUFPO1VBRUw7QUFDRixVQUFPOzs7Q0FHZixTQUFTLFlBQVksSUFBSSxTQUFTO0FBQzlCLE9BQUssWUFBWSxRQUFRLENBQUMsWUFBWSxjQUFjLEtBQUssR0FBRyxDQUN4RCxRQUFPO0FBRVgsT0FBSyxZQUFZLFFBQVEsQ0FBQyxZQUFZLGNBQWMsS0FBSyxHQUFHLENBQ3hELFFBQU87QUFFWCxTQUFPOztDQUVYLElBQWEsWUFBYixNQUFhLGtCQUFrQixRQUFRO0VBQ25DLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsT0FBTSxPQUFPLE9BQU8sTUFBTSxLQUFLO0FBR25DLE9BRG1CLEtBQUssU0FBUyxNQUFNLEtBQ3BCLGNBQWMsUUFBUTtJQUNyQyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxNQUFNLFNBQVMsSUFBSSxhQUFhO0dBQ2hDLElBQUksTUFBTSxLQUFBO0FBQ1YsUUFBSyxNQUFNLFNBQVMsS0FBSyxLQUFLLE9BQzFCLEtBQUksTUFBTSxTQUFTO1FBQ1gsTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPO0FBQ2pDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDZixNQUFNO01BQ04sV0FBVztNQUNYLE9BQU87TUFDUCxTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPO0FBQ2pDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDZixNQUFNO01BQ04sV0FBVztNQUNYLE9BQU87TUFDUCxTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVMsVUFBVTtJQUM5QixNQUFNLFNBQVMsTUFBTSxLQUFLLFNBQVMsTUFBTTtJQUN6QyxNQUFNLFdBQVcsTUFBTSxLQUFLLFNBQVMsTUFBTTtBQUMzQyxRQUFJLFVBQVUsVUFBVTtBQUNwQixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0QyxTQUFJLE9BQ0EsbUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFNBQVMsTUFBTTtNQUNmLE1BQU07TUFDTixXQUFXO01BQ1gsT0FBTztNQUNQLFNBQVMsTUFBTTtNQUNsQixDQUFDO2NBRUcsU0FDTCxtQkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2YsTUFBTTtNQUNOLFdBQVc7TUFDWCxPQUFPO01BQ1AsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFFTixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsV0FBVyxLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQzlCLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTLFNBQVM7QUFDN0IsUUFBSSxDQUFDLFdBQ0QsY0FBYSxJQUFJLE9BQU8sYUFBYSxJQUFJO0FBRTdDLFFBQUksQ0FBQyxXQUFXLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDOUIsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxVQUFVLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDN0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxZQUFZLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDL0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxVQUFVLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDN0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxXQUFXLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDOUIsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxVQUFVLEtBQUssTUFBTSxLQUFLLEVBQUU7QUFDN0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVMsTUFDcEIsS0FBSTtBQUNBLFFBQUksSUFBSSxNQUFNLEtBQUs7V0FFakI7QUFDRixVQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0QyxzQkFBa0IsS0FBSztLQUNuQixZQUFZO0tBQ1osTUFBTSxhQUFhO0tBQ25CLFNBQVMsTUFBTTtLQUNsQixDQUFDO0FBQ0YsV0FBTyxPQUFPOztZQUdiLE1BQU0sU0FBUyxTQUFTO0FBQzdCLFVBQU0sTUFBTSxZQUFZO0FBRXhCLFFBQUksQ0FEZSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssRUFDOUI7QUFDYixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixZQUFZO01BQ1osTUFBTSxhQUFhO01BQ25CLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUyxPQUNwQixPQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU07WUFFekIsTUFBTSxTQUFTO1FBQ2hCLENBQUMsTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPLE1BQU0sU0FBUyxFQUFFO0FBQ25ELFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixZQUFZO09BQUUsVUFBVSxNQUFNO09BQU8sVUFBVSxNQUFNO09BQVU7TUFDL0QsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTLGNBQ3BCLE9BQU0sT0FBTyxNQUFNLEtBQUssYUFBYTtZQUVoQyxNQUFNLFNBQVMsY0FDcEIsT0FBTSxPQUFPLE1BQU0sS0FBSyxhQUFhO1lBRWhDLE1BQU0sU0FBUztRQUNoQixDQUFDLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxFQUFFO0FBQ3JDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixZQUFZLEVBQUUsWUFBWSxNQUFNLE9BQU87TUFDdkMsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsTUFBTSxLQUFLLFNBQVMsTUFBTSxNQUFNLEVBQUU7QUFDbkMsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFlBQVksRUFBRSxVQUFVLE1BQU0sT0FBTztNQUNyQyxTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFFaEIsQ0FEVSxjQUFjLE1BQU0sQ0FDdkIsS0FBSyxNQUFNLEtBQUssRUFBRTtBQUN6QixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsWUFBWTtNQUNaLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUztRQUVoQixDQURVLFVBQ0gsS0FBSyxNQUFNLEtBQUssRUFBRTtBQUN6QixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsWUFBWTtNQUNaLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUztRQUVoQixDQURVLFVBQVUsTUFBTSxDQUNuQixLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQ3pCLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixZQUFZO01BQ1osU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsY0FBYyxLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQ2pDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsVUFBVSxNQUFNLE1BQU0sTUFBTSxRQUFRLEVBQUU7QUFDdkMsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsWUFBWTtNQUNaLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsQ0FBQyxXQUFXLE1BQU0sTUFBTSxNQUFNLElBQUksRUFBRTtBQUNwQyxXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixZQUFZO01BQ1osTUFBTSxhQUFhO01BQ25CLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUztRQUNoQixDQUFDLFlBQVksTUFBTSxNQUFNLE1BQU0sUUFBUSxFQUFFO0FBQ3pDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsWUFBWSxLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQy9CLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLENBQUMsZUFBZSxLQUFLLE1BQU0sS0FBSyxFQUFFO0FBQ2xDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLFlBQVk7TUFDWixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O1NBSWxCLE1BQUssWUFBWSxNQUFNO0FBRy9CLFVBQU87SUFBRSxRQUFRLE9BQU87SUFBTyxPQUFPLE1BQU07SUFBTTs7RUFFdEQsT0FBTyxPQUFPLFlBQVksU0FBUztBQUMvQixVQUFPLEtBQUssWUFBWSxTQUFTLE1BQU0sS0FBSyxLQUFLLEVBQUU7SUFDL0M7SUFDQSxNQUFNLGFBQWE7SUFDbkIsR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUNqQyxDQUFDOztFQUVOLFVBQVUsT0FBTztBQUNiLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLE1BQU07SUFDdkMsQ0FBQzs7RUFFTixNQUFNLFNBQVM7QUFDWCxVQUFPLEtBQUssVUFBVTtJQUFFLE1BQU07SUFBUyxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQUUsQ0FBQzs7RUFFNUUsSUFBSSxTQUFTO0FBQ1QsVUFBTyxLQUFLLFVBQVU7SUFBRSxNQUFNO0lBQU8sR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUFFLENBQUM7O0VBRTFFLE1BQU0sU0FBUztBQUNYLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFTLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUU1RSxLQUFLLFNBQVM7QUFDVixVQUFPLEtBQUssVUFBVTtJQUFFLE1BQU07SUFBUSxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQUUsQ0FBQzs7RUFFM0UsT0FBTyxTQUFTO0FBQ1osVUFBTyxLQUFLLFVBQVU7SUFBRSxNQUFNO0lBQVUsR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUFFLENBQUM7O0VBRTdFLEtBQUssU0FBUztBQUNWLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFRLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUUzRSxNQUFNLFNBQVM7QUFDWCxVQUFPLEtBQUssVUFBVTtJQUFFLE1BQU07SUFBUyxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQUUsQ0FBQzs7RUFFNUUsS0FBSyxTQUFTO0FBQ1YsVUFBTyxLQUFLLFVBQVU7SUFBRSxNQUFNO0lBQVEsR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUFFLENBQUM7O0VBRTNFLE9BQU8sU0FBUztBQUNaLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFVLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUU3RSxVQUFVLFNBQVM7QUFFZixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUNqQyxDQUFDOztFQUVOLElBQUksU0FBUztBQUNULFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFPLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUUxRSxHQUFHLFNBQVM7QUFDUixVQUFPLEtBQUssVUFBVTtJQUFFLE1BQU07SUFBTSxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQUUsQ0FBQzs7RUFFekUsS0FBSyxTQUFTO0FBQ1YsVUFBTyxLQUFLLFVBQVU7SUFBRSxNQUFNO0lBQVEsR0FBRyxVQUFVLFNBQVMsUUFBUTtJQUFFLENBQUM7O0VBRTNFLFNBQVMsU0FBUztBQUNkLE9BQUksT0FBTyxZQUFZLFNBQ25CLFFBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1osQ0FBQztBQUVOLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixXQUFXLE9BQU8sU0FBUyxjQUFjLGNBQWMsT0FBTyxTQUFTO0lBQ3ZFLFFBQVEsU0FBUyxVQUFVO0lBQzNCLE9BQU8sU0FBUyxTQUFTO0lBQ3pCLEdBQUcsVUFBVSxTQUFTLFNBQVMsUUFBUTtJQUMxQyxDQUFDOztFQUVOLEtBQUssU0FBUztBQUNWLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFRO0lBQVMsQ0FBQzs7RUFFcEQsS0FBSyxTQUFTO0FBQ1YsT0FBSSxPQUFPLFlBQVksU0FDbkIsUUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxTQUFTO0lBQ1osQ0FBQztBQUVOLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixXQUFXLE9BQU8sU0FBUyxjQUFjLGNBQWMsT0FBTyxTQUFTO0lBQ3ZFLEdBQUcsVUFBVSxTQUFTLFNBQVMsUUFBUTtJQUMxQyxDQUFDOztFQUVOLFNBQVMsU0FBUztBQUNkLFVBQU8sS0FBSyxVQUFVO0lBQUUsTUFBTTtJQUFZLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFBRSxDQUFDOztFQUUvRSxNQUFNLE9BQU8sU0FBUztBQUNsQixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ0M7SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7O0VBRU4sU0FBUyxPQUFPLFNBQVM7QUFDckIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNDO0lBQ1AsVUFBVSxTQUFTO0lBQ25CLEdBQUcsVUFBVSxTQUFTLFNBQVMsUUFBUTtJQUMxQyxDQUFDOztFQUVOLFdBQVcsT0FBTyxTQUFTO0FBQ3ZCLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDQztJQUNQLEdBQUcsVUFBVSxTQUFTLFFBQVE7SUFDakMsQ0FBQzs7RUFFTixTQUFTLE9BQU8sU0FBUztBQUNyQixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ0M7SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7O0VBRU4sSUFBSSxXQUFXLFNBQVM7QUFDcEIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7O0VBRU4sSUFBSSxXQUFXLFNBQVM7QUFDcEIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7O0VBRU4sT0FBTyxLQUFLLFNBQVM7QUFDakIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxHQUFHLFVBQVUsU0FBUyxRQUFRO0lBQ2pDLENBQUM7Ozs7O0VBS04sU0FBUyxTQUFTO0FBQ2QsVUFBTyxLQUFLLElBQUksR0FBRyxVQUFVLFNBQVMsUUFBUSxDQUFDOztFQUVuRCxPQUFPO0FBQ0gsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxLQUFLO0lBQ1IsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsRUFBRSxNQUFNLFFBQVEsQ0FBQztJQUNsRCxDQUFDOztFQUVOLGNBQWM7QUFDVixVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixRQUFRLENBQUMsR0FBRyxLQUFLLEtBQUssUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0lBQ3pELENBQUM7O0VBRU4sY0FBYztBQUNWLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7SUFDekQsQ0FBQzs7RUFFTixJQUFJLGFBQWE7QUFDYixVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLFdBQVc7O0VBRWxFLElBQUksU0FBUztBQUNULFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsT0FBTzs7RUFFOUQsSUFBSSxTQUFTO0FBQ1QsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxPQUFPOztFQUU5RCxJQUFJLGFBQWE7QUFDYixVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLFdBQVc7O0VBRWxFLElBQUksVUFBVTtBQUNWLFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsUUFBUTs7RUFFL0QsSUFBSSxRQUFRO0FBQ1IsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxNQUFNOztFQUU3RCxJQUFJLFVBQVU7QUFDVixVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLFFBQVE7O0VBRS9ELElBQUksU0FBUztBQUNULFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsT0FBTzs7RUFFOUQsSUFBSSxXQUFXO0FBQ1gsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxTQUFTOztFQUVoRSxJQUFJLFNBQVM7QUFDVCxVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLE9BQU87O0VBRTlELElBQUksVUFBVTtBQUNWLFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsUUFBUTs7RUFFL0QsSUFBSSxTQUFTO0FBQ1QsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxPQUFPOztFQUU5RCxJQUFJLE9BQU87QUFDUCxVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLEtBQUs7O0VBRTVELElBQUksU0FBUztBQUNULFVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxHQUFHLFNBQVMsT0FBTzs7RUFFOUQsSUFBSSxXQUFXO0FBQ1gsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxTQUFTOztFQUVoRSxJQUFJLGNBQWM7QUFFZCxVQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxTQUFTLFlBQVk7O0VBRW5FLElBQUksWUFBWTtHQUNaLElBQUksTUFBTTtBQUNWLFFBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxPQUN2QixLQUFJLEdBQUcsU0FBUztRQUNSLFFBQVEsUUFBUSxHQUFHLFFBQVEsSUFDM0IsT0FBTSxHQUFHOztBQUdyQixVQUFPOztFQUVYLElBQUksWUFBWTtHQUNaLElBQUksTUFBTTtBQUNWLFFBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxPQUN2QixLQUFJLEdBQUcsU0FBUztRQUNSLFFBQVEsUUFBUSxHQUFHLFFBQVEsSUFDM0IsT0FBTSxHQUFHOztBQUdyQixVQUFPOzs7QUFHZixXQUFVLFVBQVUsV0FBVztBQUMzQixTQUFPLElBQUksVUFBVTtHQUNqQixRQUFRLEVBQUU7R0FDVixVQUFVLHNCQUFzQjtHQUNoQyxRQUFRLFFBQVEsVUFBVTtHQUMxQixHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBR04sU0FBUyxtQkFBbUIsS0FBSyxNQUFNO0VBQ25DLE1BQU0sZUFBZSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLElBQUk7RUFDekQsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxJQUFJO0VBQzNELE1BQU0sV0FBVyxjQUFjLGVBQWUsY0FBYztBQUc1RCxTQUZlLE9BQU8sU0FBUyxJQUFJLFFBQVEsU0FBUyxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsR0FDdEQsT0FBTyxTQUFTLEtBQUssUUFBUSxTQUFTLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxHQUM1QyxNQUFNOztDQUV0QyxJQUFhLFlBQWIsTUFBYSxrQkFBa0IsUUFBUTtFQUNuQyxjQUFjO0FBQ1YsU0FBTSxHQUFHLFVBQVU7QUFDbkIsUUFBSyxNQUFNLEtBQUs7QUFDaEIsUUFBSyxNQUFNLEtBQUs7QUFDaEIsUUFBSyxPQUFPLEtBQUs7O0VBRXJCLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsT0FBTSxPQUFPLE9BQU8sTUFBTSxLQUFLO0FBR25DLE9BRG1CLEtBQUssU0FBUyxNQUFNLEtBQ3BCLGNBQWMsUUFBUTtJQUNyQyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxJQUFJLE1BQU0sS0FBQTtHQUNWLE1BQU0sU0FBUyxJQUFJLGFBQWE7QUFDaEMsUUFBSyxNQUFNLFNBQVMsS0FBSyxLQUFLLE9BQzFCLEtBQUksTUFBTSxTQUFTO1FBQ1gsQ0FBQyxLQUFLLFVBQVUsTUFBTSxLQUFLLEVBQUU7QUFDN0IsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFVBQVU7TUFDVixVQUFVO01BQ1YsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ0gsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sT0FDcEU7QUFDVixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2YsTUFBTTtNQUNOLFdBQVcsTUFBTTtNQUNqQixPQUFPO01BQ1AsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ0wsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sT0FDcEU7QUFDUixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2YsTUFBTTtNQUNOLFdBQVcsTUFBTTtNQUNqQixPQUFPO01BQ1AsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLG1CQUFtQixNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssR0FBRztBQUNuRCxXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsWUFBWSxNQUFNO01BQ2xCLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztjQUdiLE1BQU0sU0FBUztRQUNoQixDQUFDLE9BQU8sU0FBUyxNQUFNLEtBQUssRUFBRTtBQUM5QixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O1NBSWxCLE1BQUssWUFBWSxNQUFNO0FBRy9CLFVBQU87SUFBRSxRQUFRLE9BQU87SUFBTyxPQUFPLE1BQU07SUFBTTs7RUFFdEQsSUFBSSxPQUFPLFNBQVM7QUFDaEIsVUFBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLE1BQU0sVUFBVSxTQUFTLFFBQVEsQ0FBQzs7RUFFekUsR0FBRyxPQUFPLFNBQVM7QUFDZixVQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sT0FBTyxVQUFVLFNBQVMsUUFBUSxDQUFDOztFQUUxRSxJQUFJLE9BQU8sU0FBUztBQUNoQixVQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sTUFBTSxVQUFVLFNBQVMsUUFBUSxDQUFDOztFQUV6RSxHQUFHLE9BQU8sU0FBUztBQUNmLFVBQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxPQUFPLFVBQVUsU0FBUyxRQUFRLENBQUM7O0VBRTFFLFNBQVMsTUFBTSxPQUFPLFdBQVcsU0FBUztBQUN0QyxVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixRQUFRLENBQ0osR0FBRyxLQUFLLEtBQUssUUFDYjtLQUNJO0tBQ0E7S0FDQTtLQUNBLFNBQVMsVUFBVSxTQUFTLFFBQVE7S0FDdkMsQ0FDSjtJQUNKLENBQUM7O0VBRU4sVUFBVSxPQUFPO0FBQ2IsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxLQUFLO0lBQ1IsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsTUFBTTtJQUN2QyxDQUFDOztFQUVOLElBQUksU0FBUztBQUNULFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sU0FBUyxTQUFTO0FBQ2QsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLFNBQVMsU0FBUztBQUNkLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFNBQVMsVUFBVSxTQUFTLFFBQVE7SUFDdkMsQ0FBQzs7RUFFTixZQUFZLFNBQVM7QUFDakIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLFlBQVksU0FBUztBQUNqQixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sV0FBVyxPQUFPLFNBQVM7QUFDdkIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNDO0lBQ1AsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLE9BQU8sU0FBUztBQUNaLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sS0FBSyxTQUFTO0FBQ1YsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxPQUFPLE9BQU87SUFDZCxTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUMsQ0FBQyxVQUFVO0lBQ1QsTUFBTTtJQUNOLFdBQVc7SUFDWCxPQUFPLE9BQU87SUFDZCxTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sSUFBSSxXQUFXO0dBQ1gsSUFBSSxNQUFNO0FBQ1YsUUFBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQ3ZCLEtBQUksR0FBRyxTQUFTO1FBQ1IsUUFBUSxRQUFRLEdBQUcsUUFBUSxJQUMzQixPQUFNLEdBQUc7O0FBR3JCLFVBQU87O0VBRVgsSUFBSSxXQUFXO0dBQ1gsSUFBSSxNQUFNO0FBQ1YsUUFBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQ3ZCLEtBQUksR0FBRyxTQUFTO1FBQ1IsUUFBUSxRQUFRLEdBQUcsUUFBUSxJQUMzQixPQUFNLEdBQUc7O0FBR3JCLFVBQU87O0VBRVgsSUFBSSxRQUFRO0FBQ1IsVUFBTyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLEdBQUcsU0FBUyxTQUFVLEdBQUcsU0FBUyxnQkFBZ0IsS0FBSyxVQUFVLEdBQUcsTUFBTSxDQUFFOztFQUV2SCxJQUFJLFdBQVc7R0FDWCxJQUFJLE1BQU07R0FDVixJQUFJLE1BQU07QUFDVixRQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssT0FDdkIsS0FBSSxHQUFHLFNBQVMsWUFBWSxHQUFHLFNBQVMsU0FBUyxHQUFHLFNBQVMsYUFDekQsUUFBTztZQUVGLEdBQUcsU0FBUztRQUNiLFFBQVEsUUFBUSxHQUFHLFFBQVEsSUFDM0IsT0FBTSxHQUFHO2NBRVIsR0FBRyxTQUFTO1FBQ2IsUUFBUSxRQUFRLEdBQUcsUUFBUSxJQUMzQixPQUFNLEdBQUc7O0FBR3JCLFVBQU8sT0FBTyxTQUFTLElBQUksSUFBSSxPQUFPLFNBQVMsSUFBSTs7O0FBRzNELFdBQVUsVUFBVSxXQUFXO0FBQzNCLFNBQU8sSUFBSSxVQUFVO0dBQ2pCLFFBQVEsRUFBRTtHQUNWLFVBQVUsc0JBQXNCO0dBQ2hDLFFBQVEsUUFBUSxVQUFVO0dBQzFCLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFlBQWIsTUFBYSxrQkFBa0IsUUFBUTtFQUNuQyxjQUFjO0FBQ1YsU0FBTSxHQUFHLFVBQVU7QUFDbkIsUUFBSyxNQUFNLEtBQUs7QUFDaEIsUUFBSyxNQUFNLEtBQUs7O0VBRXBCLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsS0FBSTtBQUNBLFVBQU0sT0FBTyxPQUFPLE1BQU0sS0FBSztXQUU3QjtBQUNGLFdBQU8sS0FBSyxpQkFBaUIsTUFBTTs7QUFJM0MsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxPQUM3QixRQUFPLEtBQUssaUJBQWlCLE1BQU07R0FFdkMsSUFBSSxNQUFNLEtBQUE7R0FDVixNQUFNLFNBQVMsSUFBSSxhQUFhO0FBQ2hDLFFBQUssTUFBTSxTQUFTLEtBQUssS0FBSyxPQUMxQixLQUFJLE1BQU0sU0FBUztRQUNFLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxRQUFRLE1BQU0sUUFBUSxNQUFNLE9BQ3BFO0FBQ1YsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLE1BQU07TUFDTixTQUFTLE1BQU07TUFDZixXQUFXLE1BQU07TUFDakIsU0FBUyxNQUFNO01BQ2xCLENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ0wsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sT0FDcEU7QUFDUixXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsTUFBTTtNQUNOLFNBQVMsTUFBTTtNQUNmLFdBQVcsTUFBTTtNQUNqQixTQUFTLE1BQU07TUFDbEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7Y0FHYixNQUFNLFNBQVM7UUFDaEIsTUFBTSxPQUFPLE1BQU0sVUFBVSxPQUFPLEVBQUUsRUFBRTtBQUN4QyxXQUFNLEtBQUssZ0JBQWdCLE9BQU8sSUFBSTtBQUN0Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsWUFBWSxNQUFNO01BQ2xCLFNBQVMsTUFBTTtNQUNsQixDQUFDO0FBQ0YsWUFBTyxPQUFPOztTQUlsQixNQUFLLFlBQVksTUFBTTtBQUcvQixVQUFPO0lBQUUsUUFBUSxPQUFPO0lBQU8sT0FBTyxNQUFNO0lBQU07O0VBRXRELGlCQUFpQixPQUFPO0dBQ3BCLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHFCQUFrQixLQUFLO0lBQ25CLE1BQU0sYUFBYTtJQUNuQixVQUFVLGNBQWM7SUFDeEIsVUFBVSxJQUFJO0lBQ2pCLENBQUM7QUFDRixVQUFPOztFQUVYLElBQUksT0FBTyxTQUFTO0FBQ2hCLFVBQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxNQUFNLFVBQVUsU0FBUyxRQUFRLENBQUM7O0VBRXpFLEdBQUcsT0FBTyxTQUFTO0FBQ2YsVUFBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLE9BQU8sVUFBVSxTQUFTLFFBQVEsQ0FBQzs7RUFFMUUsSUFBSSxPQUFPLFNBQVM7QUFDaEIsVUFBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLE1BQU0sVUFBVSxTQUFTLFFBQVEsQ0FBQzs7RUFFekUsR0FBRyxPQUFPLFNBQVM7QUFDZixVQUFPLEtBQUssU0FBUyxPQUFPLE9BQU8sT0FBTyxVQUFVLFNBQVMsUUFBUSxDQUFDOztFQUUxRSxTQUFTLE1BQU0sT0FBTyxXQUFXLFNBQVM7QUFDdEMsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxLQUFLO0lBQ1IsUUFBUSxDQUNKLEdBQUcsS0FBSyxLQUFLLFFBQ2I7S0FDSTtLQUNBO0tBQ0E7S0FDQSxTQUFTLFVBQVUsU0FBUyxRQUFRO0tBQ3ZDLENBQ0o7SUFDSixDQUFDOztFQUVOLFVBQVUsT0FBTztBQUNiLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLE1BQU07SUFDdkMsQ0FBQzs7RUFFTixTQUFTLFNBQVM7QUFDZCxVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sT0FBTyxPQUFPLEVBQUU7SUFDaEIsV0FBVztJQUNYLFNBQVMsVUFBVSxTQUFTLFFBQVE7SUFDdkMsQ0FBQzs7RUFFTixTQUFTLFNBQVM7QUFDZCxVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sT0FBTyxPQUFPLEVBQUU7SUFDaEIsV0FBVztJQUNYLFNBQVMsVUFBVSxTQUFTLFFBQVE7SUFDdkMsQ0FBQzs7RUFFTixZQUFZLFNBQVM7QUFDakIsVUFBTyxLQUFLLFVBQVU7SUFDbEIsTUFBTTtJQUNOLE9BQU8sT0FBTyxFQUFFO0lBQ2hCLFdBQVc7SUFDWCxTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sWUFBWSxTQUFTO0FBQ2pCLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixPQUFPLE9BQU8sRUFBRTtJQUNoQixXQUFXO0lBQ1gsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLFdBQVcsT0FBTyxTQUFTO0FBQ3ZCLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTjtJQUNBLFNBQVMsVUFBVSxTQUFTLFFBQVE7SUFDdkMsQ0FBQzs7RUFFTixJQUFJLFdBQVc7R0FDWCxJQUFJLE1BQU07QUFDVixRQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssT0FDdkIsS0FBSSxHQUFHLFNBQVM7UUFDUixRQUFRLFFBQVEsR0FBRyxRQUFRLElBQzNCLE9BQU0sR0FBRzs7QUFHckIsVUFBTzs7RUFFWCxJQUFJLFdBQVc7R0FDWCxJQUFJLE1BQU07QUFDVixRQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssT0FDdkIsS0FBSSxHQUFHLFNBQVM7UUFDUixRQUFRLFFBQVEsR0FBRyxRQUFRLElBQzNCLE9BQU0sR0FBRzs7QUFHckIsVUFBTzs7O0FBR2YsV0FBVSxVQUFVLFdBQVc7QUFDM0IsU0FBTyxJQUFJLFVBQVU7R0FDakIsUUFBUSxFQUFFO0dBQ1YsVUFBVSxzQkFBc0I7R0FDaEMsUUFBUSxRQUFRLFVBQVU7R0FDMUIsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsYUFBYixjQUFnQyxRQUFRO0VBQ3BDLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsT0FBTSxPQUFPLFFBQVEsTUFBTSxLQUFLO0FBR3BDLE9BRG1CLEtBQUssU0FBUyxNQUFNLEtBQ3BCLGNBQWMsU0FBUztJQUN0QyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxVQUFPLEdBQUcsTUFBTSxLQUFLOzs7QUFHN0IsWUFBVyxVQUFVLFdBQVc7QUFDNUIsU0FBTyxJQUFJLFdBQVc7R0FDbEIsVUFBVSxzQkFBc0I7R0FDaEMsUUFBUSxRQUFRLFVBQVU7R0FDMUIsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsVUFBYixNQUFhLGdCQUFnQixRQUFRO0VBQ2pDLE9BQU8sT0FBTztBQUNWLE9BQUksS0FBSyxLQUFLLE9BQ1YsT0FBTSxPQUFPLElBQUksS0FBSyxNQUFNLEtBQUs7QUFHckMsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxNQUFNO0lBQ25DLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztBQUVYLE9BQUksT0FBTyxNQUFNLE1BQU0sS0FBSyxTQUFTLENBQUMsRUFBRTtBQUVwQyxzQkFEWSxLQUFLLGdCQUFnQixNQUFNLEVBQ2hCLEVBQ25CLE1BQU0sYUFBYSxjQUN0QixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxNQUFNLFNBQVMsSUFBSSxhQUFhO0dBQ2hDLElBQUksTUFBTSxLQUFBO0FBQ1YsUUFBSyxNQUFNLFNBQVMsS0FBSyxLQUFLLE9BQzFCLEtBQUksTUFBTSxTQUFTO1FBQ1gsTUFBTSxLQUFLLFNBQVMsR0FBRyxNQUFNLE9BQU87QUFDcEMsV0FBTSxLQUFLLGdCQUFnQixPQUFPLElBQUk7QUFDdEMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFNBQVMsTUFBTTtNQUNmLFdBQVc7TUFDWCxPQUFPO01BQ1AsU0FBUyxNQUFNO01BQ2YsTUFBTTtNQUNULENBQUM7QUFDRixZQUFPLE9BQU87O2NBR2IsTUFBTSxTQUFTO1FBQ2hCLE1BQU0sS0FBSyxTQUFTLEdBQUcsTUFBTSxPQUFPO0FBQ3BDLFdBQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJO0FBQ3RDLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixTQUFTLE1BQU07TUFDZixXQUFXO01BQ1gsT0FBTztNQUNQLFNBQVMsTUFBTTtNQUNmLE1BQU07TUFDVCxDQUFDO0FBQ0YsWUFBTyxPQUFPOztTQUlsQixNQUFLLFlBQVksTUFBTTtBQUcvQixVQUFPO0lBQ0gsUUFBUSxPQUFPO0lBQ2YsT0FBTyxJQUFJLEtBQUssTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUN4Qzs7RUFFTCxVQUFVLE9BQU87QUFDYixVQUFPLElBQUksUUFBUTtJQUNmLEdBQUcsS0FBSztJQUNSLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxRQUFRLE1BQU07SUFDdkMsQ0FBQzs7RUFFTixJQUFJLFNBQVMsU0FBUztBQUNsQixVQUFPLEtBQUssVUFBVTtJQUNsQixNQUFNO0lBQ04sT0FBTyxRQUFRLFNBQVM7SUFDeEIsU0FBUyxVQUFVLFNBQVMsUUFBUTtJQUN2QyxDQUFDOztFQUVOLElBQUksU0FBUyxTQUFTO0FBQ2xCLFVBQU8sS0FBSyxVQUFVO0lBQ2xCLE1BQU07SUFDTixPQUFPLFFBQVEsU0FBUztJQUN4QixTQUFTLFVBQVUsU0FBUyxRQUFRO0lBQ3ZDLENBQUM7O0VBRU4sSUFBSSxVQUFVO0dBQ1YsSUFBSSxNQUFNO0FBQ1YsUUFBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQ3ZCLEtBQUksR0FBRyxTQUFTO1FBQ1IsUUFBUSxRQUFRLEdBQUcsUUFBUSxJQUMzQixPQUFNLEdBQUc7O0FBR3JCLFVBQU8sT0FBTyxPQUFPLElBQUksS0FBSyxJQUFJLEdBQUc7O0VBRXpDLElBQUksVUFBVTtHQUNWLElBQUksTUFBTTtBQUNWLFFBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxPQUN2QixLQUFJLEdBQUcsU0FBUztRQUNSLFFBQVEsUUFBUSxHQUFHLFFBQVEsSUFDM0IsT0FBTSxHQUFHOztBQUdyQixVQUFPLE9BQU8sT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHOzs7QUFHN0MsU0FBUSxVQUFVLFdBQVc7QUFDekIsU0FBTyxJQUFJLFFBQVE7R0FDZixRQUFRLEVBQUU7R0FDVixRQUFRLFFBQVEsVUFBVTtHQUMxQixVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxZQUFiLGNBQStCLFFBQVE7RUFDbkMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxRQUFRO0lBQ3JDLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztBQUVYLFVBQU8sR0FBRyxNQUFNLEtBQUs7OztBQUc3QixXQUFVLFVBQVUsV0FBVztBQUMzQixTQUFPLElBQUksVUFBVTtHQUNqQixVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxlQUFiLGNBQWtDLFFBQVE7RUFDdEMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxXQUFXO0lBQ3hDLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztBQUVYLFVBQU8sR0FBRyxNQUFNLEtBQUs7OztBQUc3QixjQUFhLFVBQVUsV0FBVztBQUM5QixTQUFPLElBQUksYUFBYTtHQUNwQixVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxVQUFiLGNBQTZCLFFBQVE7RUFDakMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxNQUFNO0lBQ25DLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztBQUVYLFVBQU8sR0FBRyxNQUFNLEtBQUs7OztBQUc3QixTQUFRLFVBQVUsV0FBVztBQUN6QixTQUFPLElBQUksUUFBUTtHQUNmLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFNBQWIsY0FBNEIsUUFBUTtFQUNoQyxjQUFjO0FBQ1YsU0FBTSxHQUFHLFVBQVU7QUFFbkIsUUFBSyxPQUFPOztFQUVoQixPQUFPLE9BQU87QUFDVixVQUFPLEdBQUcsTUFBTSxLQUFLOzs7QUFHN0IsUUFBTyxVQUFVLFdBQVc7QUFDeEIsU0FBTyxJQUFJLE9BQU87R0FDZCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxhQUFiLGNBQWdDLFFBQVE7RUFDcEMsY0FBYztBQUNWLFNBQU0sR0FBRyxVQUFVO0FBRW5CLFFBQUssV0FBVzs7RUFFcEIsT0FBTyxPQUFPO0FBQ1YsVUFBTyxHQUFHLE1BQU0sS0FBSzs7O0FBRzdCLFlBQVcsVUFBVSxXQUFXO0FBQzVCLFNBQU8sSUFBSSxXQUFXO0dBQ2xCLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFdBQWIsY0FBOEIsUUFBUTtFQUNsQyxPQUFPLE9BQU87R0FDVixNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxxQkFBa0IsS0FBSztJQUNuQixNQUFNLGFBQWE7SUFDbkIsVUFBVSxjQUFjO0lBQ3hCLFVBQVUsSUFBSTtJQUNqQixDQUFDO0FBQ0YsVUFBTzs7O0FBR2YsVUFBUyxVQUFVLFdBQVc7QUFDMUIsU0FBTyxJQUFJLFNBQVM7R0FDaEIsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsVUFBYixjQUE2QixRQUFRO0VBQ2pDLE9BQU8sT0FBTztBQUVWLE9BRG1CLEtBQUssU0FBUyxNQUFNLEtBQ3BCLGNBQWMsV0FBVztJQUN4QyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxVQUFPLEdBQUcsTUFBTSxLQUFLOzs7QUFHN0IsU0FBUSxVQUFVLFdBQVc7QUFDekIsU0FBTyxJQUFJLFFBQVE7R0FDZixVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxXQUFiLE1BQWEsaUJBQWlCLFFBQVE7RUFDbEMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLEtBQUssV0FBVyxLQUFLLG9CQUFvQixNQUFNO0dBQ3ZELE1BQU0sTUFBTSxLQUFLO0FBQ2pCLE9BQUksSUFBSSxlQUFlLGNBQWMsT0FBTztBQUN4QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxPQUFJLElBQUksZ0JBQWdCLE1BQU07SUFDMUIsTUFBTSxTQUFTLElBQUksS0FBSyxTQUFTLElBQUksWUFBWTtJQUNqRCxNQUFNLFdBQVcsSUFBSSxLQUFLLFNBQVMsSUFBSSxZQUFZO0FBQ25ELFFBQUksVUFBVSxVQUFVO0FBQ3BCLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sU0FBUyxhQUFhLFVBQVUsYUFBYTtNQUNuRCxTQUFVLFdBQVcsSUFBSSxZQUFZLFFBQVEsS0FBQTtNQUM3QyxTQUFVLFNBQVMsSUFBSSxZQUFZLFFBQVEsS0FBQTtNQUMzQyxNQUFNO01BQ04sV0FBVztNQUNYLE9BQU87TUFDUCxTQUFTLElBQUksWUFBWTtNQUM1QixDQUFDO0FBQ0YsWUFBTyxPQUFPOzs7QUFHdEIsT0FBSSxJQUFJLGNBQWM7UUFDZCxJQUFJLEtBQUssU0FBUyxJQUFJLFVBQVUsT0FBTztBQUN2Qyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxJQUFJLFVBQVU7TUFDdkIsTUFBTTtNQUNOLFdBQVc7TUFDWCxPQUFPO01BQ1AsU0FBUyxJQUFJLFVBQVU7TUFDMUIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7O0FBR3RCLE9BQUksSUFBSSxjQUFjO1FBQ2QsSUFBSSxLQUFLLFNBQVMsSUFBSSxVQUFVLE9BQU87QUFDdkMsdUJBQWtCLEtBQUs7TUFDbkIsTUFBTSxhQUFhO01BQ25CLFNBQVMsSUFBSSxVQUFVO01BQ3ZCLE1BQU07TUFDTixXQUFXO01BQ1gsT0FBTztNQUNQLFNBQVMsSUFBSSxVQUFVO01BQzFCLENBQUM7QUFDRixZQUFPLE9BQU87OztBQUd0QixPQUFJLElBQUksT0FBTyxNQUNYLFFBQU8sUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLE1BQU0sTUFBTTtBQUM5QyxXQUFPLElBQUksS0FBSyxZQUFZLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO0tBQzdFLENBQUMsQ0FBQyxNQUFNLFdBQVc7QUFDakIsV0FBTyxZQUFZLFdBQVcsUUFBUSxPQUFPO0tBQy9DO0dBRU4sTUFBTSxTQUFTLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLE1BQU0sTUFBTTtBQUMxQyxXQUFPLElBQUksS0FBSyxXQUFXLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO0tBQzVFO0FBQ0YsVUFBTyxZQUFZLFdBQVcsUUFBUSxPQUFPOztFQUVqRCxJQUFJLFVBQVU7QUFDVixVQUFPLEtBQUssS0FBSzs7RUFFckIsSUFBSSxXQUFXLFNBQVM7QUFDcEIsVUFBTyxJQUFJLFNBQVM7SUFDaEIsR0FBRyxLQUFLO0lBQ1IsV0FBVztLQUFFLE9BQU87S0FBVyxTQUFTLFVBQVUsU0FBUyxRQUFRO0tBQUU7SUFDeEUsQ0FBQzs7RUFFTixJQUFJLFdBQVcsU0FBUztBQUNwQixVQUFPLElBQUksU0FBUztJQUNoQixHQUFHLEtBQUs7SUFDUixXQUFXO0tBQUUsT0FBTztLQUFXLFNBQVMsVUFBVSxTQUFTLFFBQVE7S0FBRTtJQUN4RSxDQUFDOztFQUVOLE9BQU8sS0FBSyxTQUFTO0FBQ2pCLFVBQU8sSUFBSSxTQUFTO0lBQ2hCLEdBQUcsS0FBSztJQUNSLGFBQWE7S0FBRSxPQUFPO0tBQUssU0FBUyxVQUFVLFNBQVMsUUFBUTtLQUFFO0lBQ3BFLENBQUM7O0VBRU4sU0FBUyxTQUFTO0FBQ2QsVUFBTyxLQUFLLElBQUksR0FBRyxRQUFROzs7QUFHbkMsVUFBUyxVQUFVLFFBQVEsV0FBVztBQUNsQyxTQUFPLElBQUksU0FBUztHQUNoQixNQUFNO0dBQ04sV0FBVztHQUNYLFdBQVc7R0FDWCxhQUFhO0dBQ2IsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLFNBQVMsZUFBZSxRQUFRO0FBQzVCLE1BQUksa0JBQWtCLFdBQVc7R0FDN0IsTUFBTSxXQUFXLEVBQUU7QUFDbkIsUUFBSyxNQUFNLE9BQU8sT0FBTyxPQUFPO0lBQzVCLE1BQU0sY0FBYyxPQUFPLE1BQU07QUFDakMsYUFBUyxPQUFPLFlBQVksT0FBTyxlQUFlLFlBQVksQ0FBQzs7QUFFbkUsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxPQUFPO0lBQ1YsYUFBYTtJQUNoQixDQUFDO2FBRUcsa0JBQWtCLFNBQ3ZCLFFBQU8sSUFBSSxTQUFTO0dBQ2hCLEdBQUcsT0FBTztHQUNWLE1BQU0sZUFBZSxPQUFPLFFBQVE7R0FDdkMsQ0FBQztXQUVHLGtCQUFrQixZQUN2QixRQUFPLFlBQVksT0FBTyxlQUFlLE9BQU8sUUFBUSxDQUFDLENBQUM7V0FFckQsa0JBQWtCLFlBQ3ZCLFFBQU8sWUFBWSxPQUFPLGVBQWUsT0FBTyxRQUFRLENBQUMsQ0FBQztXQUVyRCxrQkFBa0IsU0FDdkIsUUFBTyxTQUFTLE9BQU8sT0FBTyxNQUFNLEtBQUssU0FBUyxlQUFlLEtBQUssQ0FBQyxDQUFDO01BR3hFLFFBQU87O0NBR2YsSUFBYSxZQUFiLE1BQWEsa0JBQWtCLFFBQVE7RUFDbkMsY0FBYztBQUNWLFNBQU0sR0FBRyxVQUFVO0FBQ25CLFFBQUssVUFBVTs7Ozs7QUFLZixRQUFLLFlBQVksS0FBSzs7OztBQXFDdEIsUUFBSyxVQUFVLEtBQUs7O0VBRXhCLGFBQWE7QUFDVCxPQUFJLEtBQUssWUFBWSxLQUNqQixRQUFPLEtBQUs7R0FDaEIsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPO0FBRS9CLFFBQUssVUFBVTtJQUFFO0lBQU8sTUFEWCxLQUFLLFdBQVcsTUFBTTtJQUNMO0FBQzlCLFVBQU8sS0FBSzs7RUFFaEIsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxRQUFRO0lBQ3JDLE1BQU0sTUFBTSxLQUFLLGdCQUFnQixNQUFNO0FBQ3ZDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztHQUVYLE1BQU0sRUFBRSxRQUFRLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtHQUN2RCxNQUFNLEVBQUUsT0FBTyxNQUFNLGNBQWMsS0FBSyxZQUFZO0dBQ3BELE1BQU0sWUFBWSxFQUFFO0FBQ3BCLE9BQUksRUFBRSxLQUFLLEtBQUssb0JBQW9CLFlBQVksS0FBSyxLQUFLLGdCQUFnQjtTQUNqRSxNQUFNLE9BQU8sSUFBSSxLQUNsQixLQUFJLENBQUMsVUFBVSxTQUFTLElBQUksQ0FDeEIsV0FBVSxLQUFLLElBQUk7O0dBSS9CLE1BQU0sUUFBUSxFQUFFO0FBQ2hCLFFBQUssTUFBTSxPQUFPLFdBQVc7SUFDekIsTUFBTSxlQUFlLE1BQU07SUFDM0IsTUFBTSxRQUFRLElBQUksS0FBSztBQUN2QixVQUFNLEtBQUs7S0FDUCxLQUFLO01BQUUsUUFBUTtNQUFTLE9BQU87TUFBSztLQUNwQyxPQUFPLGFBQWEsT0FBTyxJQUFJLG1CQUFtQixLQUFLLE9BQU8sSUFBSSxNQUFNLElBQUksQ0FBQztLQUM3RSxXQUFXLE9BQU8sSUFBSTtLQUN6QixDQUFDOztBQUVOLE9BQUksS0FBSyxLQUFLLG9CQUFvQixVQUFVO0lBQ3hDLE1BQU0sY0FBYyxLQUFLLEtBQUs7QUFDOUIsUUFBSSxnQkFBZ0IsY0FDaEIsTUFBSyxNQUFNLE9BQU8sVUFDZCxPQUFNLEtBQUs7S0FDUCxLQUFLO01BQUUsUUFBUTtNQUFTLE9BQU87TUFBSztLQUNwQyxPQUFPO01BQUUsUUFBUTtNQUFTLE9BQU8sSUFBSSxLQUFLO01BQU07S0FDbkQsQ0FBQzthQUdELGdCQUFnQjtTQUNqQixVQUFVLFNBQVMsR0FBRztBQUN0Qix3QkFBa0IsS0FBSztPQUNuQixNQUFNLGFBQWE7T0FDbkIsTUFBTTtPQUNULENBQUM7QUFDRixhQUFPLE9BQU87O2VBR2IsZ0JBQWdCLFNBQVMsT0FHOUIsT0FBTSxJQUFJLE1BQU0sdURBQXVEO1VBRzFFO0lBRUQsTUFBTSxXQUFXLEtBQUssS0FBSztBQUMzQixTQUFLLE1BQU0sT0FBTyxXQUFXO0tBQ3pCLE1BQU0sUUFBUSxJQUFJLEtBQUs7QUFDdkIsV0FBTSxLQUFLO01BQ1AsS0FBSztPQUFFLFFBQVE7T0FBUyxPQUFPO09BQUs7TUFDcEMsT0FBTyxTQUFTLE9BQU8sSUFBSSxtQkFBbUIsS0FBSyxPQUFPLElBQUksTUFBTSxJQUFJLENBQ3ZFO01BQ0QsV0FBVyxPQUFPLElBQUk7TUFDekIsQ0FBQzs7O0FBR1YsT0FBSSxJQUFJLE9BQU8sTUFDWCxRQUFPLFFBQVEsU0FBUyxDQUNuQixLQUFLLFlBQVk7SUFDbEIsTUFBTSxZQUFZLEVBQUU7QUFDcEIsU0FBSyxNQUFNLFFBQVEsT0FBTztLQUN0QixNQUFNLE1BQU0sTUFBTSxLQUFLO0tBQ3ZCLE1BQU0sUUFBUSxNQUFNLEtBQUs7QUFDekIsZUFBVSxLQUFLO01BQ1g7TUFDQTtNQUNBLFdBQVcsS0FBSztNQUNuQixDQUFDOztBQUVOLFdBQU87S0FDVCxDQUNHLE1BQU0sY0FBYztBQUNyQixXQUFPLFlBQVksZ0JBQWdCLFFBQVEsVUFBVTtLQUN2RDtPQUdGLFFBQU8sWUFBWSxnQkFBZ0IsUUFBUSxNQUFNOztFQUd6RCxJQUFJLFFBQVE7QUFDUixVQUFPLEtBQUssS0FBSyxPQUFPOztFQUU1QixPQUFPLFNBQVM7QUFDWixhQUFVO0FBQ1YsVUFBTyxJQUFJLFVBQVU7SUFDakIsR0FBRyxLQUFLO0lBQ1IsYUFBYTtJQUNiLEdBQUksWUFBWSxLQUFBLElBQ1YsRUFDRSxXQUFXLE9BQU8sUUFBUTtLQUN0QixNQUFNLGVBQWUsS0FBSyxLQUFLLFdBQVcsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJO0FBQ3JFLFNBQUksTUFBTSxTQUFTLG9CQUNmLFFBQU8sRUFDSCxTQUFTLFVBQVUsU0FBUyxRQUFRLENBQUMsV0FBVyxjQUNuRDtBQUNMLFlBQU8sRUFDSCxTQUFTLGNBQ1o7T0FFUixHQUNDLEVBQUU7SUFDWCxDQUFDOztFQUVOLFFBQVE7QUFDSixVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixhQUFhO0lBQ2hCLENBQUM7O0VBRU4sY0FBYztBQUNWLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLGFBQWE7SUFDaEIsQ0FBQzs7RUFtQk4sT0FBTyxjQUFjO0FBQ2pCLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLGNBQWM7S0FDVixHQUFHLEtBQUssS0FBSyxPQUFPO0tBQ3BCLEdBQUc7S0FDTjtJQUNKLENBQUM7Ozs7Ozs7RUFPTixNQUFNLFNBQVM7QUFVWCxVQVRlLElBQUksVUFBVTtJQUN6QixhQUFhLFFBQVEsS0FBSztJQUMxQixVQUFVLFFBQVEsS0FBSztJQUN2QixjQUFjO0tBQ1YsR0FBRyxLQUFLLEtBQUssT0FBTztLQUNwQixHQUFHLFFBQVEsS0FBSyxPQUFPO0tBQzFCO0lBQ0QsVUFBVSxzQkFBc0I7SUFDbkMsQ0FBQzs7RUFzQ04sT0FBTyxLQUFLLFFBQVE7QUFDaEIsVUFBTyxLQUFLLFFBQVEsR0FBRyxNQUFNLFFBQVEsQ0FBQzs7RUF1QjFDLFNBQVMsT0FBTztBQUNaLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLFVBQVU7SUFDYixDQUFDOztFQUVOLEtBQUssTUFBTTtHQUNQLE1BQU0sUUFBUSxFQUFFO0FBQ2hCLFFBQUssTUFBTSxPQUFPLEtBQUssV0FBVyxLQUFLLENBQ25DLEtBQUksS0FBSyxRQUFRLEtBQUssTUFBTSxLQUN4QixPQUFNLE9BQU8sS0FBSyxNQUFNO0FBR2hDLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLGFBQWE7SUFDaEIsQ0FBQzs7RUFFTixLQUFLLE1BQU07R0FDUCxNQUFNLFFBQVEsRUFBRTtBQUNoQixRQUFLLE1BQU0sT0FBTyxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQ3pDLEtBQUksQ0FBQyxLQUFLLEtBQ04sT0FBTSxPQUFPLEtBQUssTUFBTTtBQUdoQyxVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixhQUFhO0lBQ2hCLENBQUM7Ozs7O0VBS04sY0FBYztBQUNWLFVBQU8sZUFBZSxLQUFLOztFQUUvQixRQUFRLE1BQU07R0FDVixNQUFNLFdBQVcsRUFBRTtBQUNuQixRQUFLLE1BQU0sT0FBTyxLQUFLLFdBQVcsS0FBSyxNQUFNLEVBQUU7SUFDM0MsTUFBTSxjQUFjLEtBQUssTUFBTTtBQUMvQixRQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQ2QsVUFBUyxPQUFPO1FBR2hCLFVBQVMsT0FBTyxZQUFZLFVBQVU7O0FBRzlDLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLEdBQUcsS0FBSztJQUNSLGFBQWE7SUFDaEIsQ0FBQzs7RUFFTixTQUFTLE1BQU07R0FDWCxNQUFNLFdBQVcsRUFBRTtBQUNuQixRQUFLLE1BQU0sT0FBTyxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQ3pDLEtBQUksUUFBUSxDQUFDLEtBQUssS0FDZCxVQUFTLE9BQU8sS0FBSyxNQUFNO1FBRTFCO0lBRUQsSUFBSSxXQURnQixLQUFLLE1BQU07QUFFL0IsV0FBTyxvQkFBb0IsWUFDdkIsWUFBVyxTQUFTLEtBQUs7QUFFN0IsYUFBUyxPQUFPOztBQUd4QixVQUFPLElBQUksVUFBVTtJQUNqQixHQUFHLEtBQUs7SUFDUixhQUFhO0lBQ2hCLENBQUM7O0VBRU4sUUFBUTtBQUNKLFVBQU8sY0FBYyxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQUM7OztBQUd6RCxXQUFVLFVBQVUsT0FBTyxXQUFXO0FBQ2xDLFNBQU8sSUFBSSxVQUFVO0dBQ2pCLGFBQWE7R0FDYixhQUFhO0dBQ2IsVUFBVSxTQUFTLFFBQVE7R0FDM0IsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztBQUVOLFdBQVUsZ0JBQWdCLE9BQU8sV0FBVztBQUN4QyxTQUFPLElBQUksVUFBVTtHQUNqQixhQUFhO0dBQ2IsYUFBYTtHQUNiLFVBQVUsU0FBUyxRQUFRO0dBQzNCLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7QUFFTixXQUFVLGNBQWMsT0FBTyxXQUFXO0FBQ3RDLFNBQU8sSUFBSSxVQUFVO0dBQ2pCO0dBQ0EsYUFBYTtHQUNiLFVBQVUsU0FBUyxRQUFRO0dBQzNCLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFdBQWIsY0FBOEIsUUFBUTtFQUNsQyxPQUFPLE9BQU87R0FDVixNQUFNLEVBQUUsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0dBQy9DLE1BQU0sVUFBVSxLQUFLLEtBQUs7R0FDMUIsU0FBUyxjQUFjLFNBQVM7QUFFNUIsU0FBSyxNQUFNLFVBQVUsUUFDakIsS0FBSSxPQUFPLE9BQU8sV0FBVyxRQUN6QixRQUFPLE9BQU87QUFHdEIsU0FBSyxNQUFNLFVBQVUsUUFDakIsS0FBSSxPQUFPLE9BQU8sV0FBVyxTQUFTO0FBRWxDLFNBQUksT0FBTyxPQUFPLEtBQUssR0FBRyxPQUFPLElBQUksT0FBTyxPQUFPO0FBQ25ELFlBQU8sT0FBTzs7SUFJdEIsTUFBTSxjQUFjLFFBQVEsS0FBSyxXQUFXLElBQUksU0FBUyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUM7QUFDbkYsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CO0tBQ0gsQ0FBQztBQUNGLFdBQU87O0FBRVgsT0FBSSxJQUFJLE9BQU8sTUFDWCxRQUFPLFFBQVEsSUFBSSxRQUFRLElBQUksT0FBTyxXQUFXO0lBQzdDLE1BQU0sV0FBVztLQUNiLEdBQUc7S0FDSCxRQUFRO01BQ0osR0FBRyxJQUFJO01BQ1AsUUFBUSxFQUFFO01BQ2I7S0FDRCxRQUFRO0tBQ1g7QUFDRCxXQUFPO0tBQ0gsUUFBUSxNQUFNLE9BQU8sWUFBWTtNQUM3QixNQUFNLElBQUk7TUFDVixNQUFNLElBQUk7TUFDVixRQUFRO01BQ1gsQ0FBQztLQUNGLEtBQUs7S0FDUjtLQUNILENBQUMsQ0FBQyxLQUFLLGNBQWM7UUFFdEI7SUFDRCxJQUFJLFFBQVEsS0FBQTtJQUNaLE1BQU0sU0FBUyxFQUFFO0FBQ2pCLFNBQUssTUFBTSxVQUFVLFNBQVM7S0FDMUIsTUFBTSxXQUFXO01BQ2IsR0FBRztNQUNILFFBQVE7T0FDSixHQUFHLElBQUk7T0FDUCxRQUFRLEVBQUU7T0FDYjtNQUNELFFBQVE7TUFDWDtLQUNELE1BQU0sU0FBUyxPQUFPLFdBQVc7TUFDN0IsTUFBTSxJQUFJO01BQ1YsTUFBTSxJQUFJO01BQ1YsUUFBUTtNQUNYLENBQUM7QUFDRixTQUFJLE9BQU8sV0FBVyxRQUNsQixRQUFPO2NBRUYsT0FBTyxXQUFXLFdBQVcsQ0FBQyxNQUNuQyxTQUFRO01BQUU7TUFBUSxLQUFLO01BQVU7QUFFckMsU0FBSSxTQUFTLE9BQU8sT0FBTyxPQUN2QixRQUFPLEtBQUssU0FBUyxPQUFPLE9BQU87O0FBRzNDLFFBQUksT0FBTztBQUNQLFNBQUksT0FBTyxPQUFPLEtBQUssR0FBRyxNQUFNLElBQUksT0FBTyxPQUFPO0FBQ2xELFlBQU8sTUFBTTs7SUFFakIsTUFBTSxjQUFjLE9BQU8sS0FBSyxXQUFXLElBQUksU0FBUyxPQUFPLENBQUM7QUFDaEUsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CO0tBQ0gsQ0FBQztBQUNGLFdBQU87OztFQUdmLElBQUksVUFBVTtBQUNWLFVBQU8sS0FBSyxLQUFLOzs7QUFHekIsVUFBUyxVQUFVLE9BQU8sV0FBVztBQUNqQyxTQUFPLElBQUksU0FBUztHQUNoQixTQUFTO0dBQ1QsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQVNOLElBQU0sb0JBQW9CLFNBQVM7QUFDL0IsTUFBSSxnQkFBZ0IsUUFDaEIsUUFBTyxpQkFBaUIsS0FBSyxPQUFPO1dBRS9CLGdCQUFnQixXQUNyQixRQUFPLGlCQUFpQixLQUFLLFdBQVcsQ0FBQztXQUVwQyxnQkFBZ0IsV0FDckIsUUFBTyxDQUFDLEtBQUssTUFBTTtXQUVkLGdCQUFnQixRQUNyQixRQUFPLEtBQUs7V0FFUCxnQkFBZ0IsY0FFckIsUUFBTyxLQUFLLGFBQWEsS0FBSyxLQUFLO1dBRTlCLGdCQUFnQixXQUNyQixRQUFPLGlCQUFpQixLQUFLLEtBQUssVUFBVTtXQUV2QyxnQkFBZ0IsYUFDckIsUUFBTyxDQUFDLEtBQUEsRUFBVTtXQUViLGdCQUFnQixRQUNyQixRQUFPLENBQUMsS0FBSztXQUVSLGdCQUFnQixZQUNyQixRQUFPLENBQUMsS0FBQSxHQUFXLEdBQUcsaUJBQWlCLEtBQUssUUFBUSxDQUFDLENBQUM7V0FFakQsZ0JBQWdCLFlBQ3JCLFFBQU8sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEtBQUssUUFBUSxDQUFDLENBQUM7V0FFNUMsZ0JBQWdCLFdBQ3JCLFFBQU8saUJBQWlCLEtBQUssUUFBUSxDQUFDO1dBRWpDLGdCQUFnQixZQUNyQixRQUFPLGlCQUFpQixLQUFLLFFBQVEsQ0FBQztXQUVqQyxnQkFBZ0IsU0FDckIsUUFBTyxpQkFBaUIsS0FBSyxLQUFLLFVBQVU7TUFHNUMsUUFBTyxFQUFFOztDQUdqQixJQUFhLHdCQUFiLE1BQWEsOEJBQThCLFFBQVE7RUFDL0MsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtBQUMvQyxPQUFJLElBQUksZUFBZSxjQUFjLFFBQVE7QUFDekMsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CLFVBQVUsY0FBYztLQUN4QixVQUFVLElBQUk7S0FDakIsQ0FBQztBQUNGLFdBQU87O0dBRVgsTUFBTSxnQkFBZ0IsS0FBSztHQUMzQixNQUFNLHFCQUFxQixJQUFJLEtBQUs7R0FDcEMsTUFBTSxTQUFTLEtBQUssV0FBVyxJQUFJLG1CQUFtQjtBQUN0RCxPQUFJLENBQUMsUUFBUTtBQUNULHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixTQUFTLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxDQUFDO0tBQzNDLE1BQU0sQ0FBQyxjQUFjO0tBQ3hCLENBQUM7QUFDRixXQUFPOztBQUVYLE9BQUksSUFBSSxPQUFPLE1BQ1gsUUFBTyxPQUFPLFlBQVk7SUFDdEIsTUFBTSxJQUFJO0lBQ1YsTUFBTSxJQUFJO0lBQ1YsUUFBUTtJQUNYLENBQUM7T0FHRixRQUFPLE9BQU8sV0FBVztJQUNyQixNQUFNLElBQUk7SUFDVixNQUFNLElBQUk7SUFDVixRQUFRO0lBQ1gsQ0FBQzs7RUFHVixJQUFJLGdCQUFnQjtBQUNoQixVQUFPLEtBQUssS0FBSzs7RUFFckIsSUFBSSxVQUFVO0FBQ1YsVUFBTyxLQUFLLEtBQUs7O0VBRXJCLElBQUksYUFBYTtBQUNiLFVBQU8sS0FBSyxLQUFLOzs7Ozs7Ozs7O0VBVXJCLE9BQU8sT0FBTyxlQUFlLFNBQVMsUUFBUTtHQUUxQyxNQUFNLDZCQUFhLElBQUksS0FBSztBQUU1QixRQUFLLE1BQU0sUUFBUSxTQUFTO0lBQ3hCLE1BQU0sc0JBQXNCLGlCQUFpQixLQUFLLE1BQU0sZUFBZTtBQUN2RSxRQUFJLENBQUMsb0JBQW9CLE9BQ3JCLE9BQU0sSUFBSSxNQUFNLG1DQUFtQyxjQUFjLG1EQUFtRDtBQUV4SCxTQUFLLE1BQU0sU0FBUyxxQkFBcUI7QUFDckMsU0FBSSxXQUFXLElBQUksTUFBTSxDQUNyQixPQUFNLElBQUksTUFBTSwwQkFBMEIsT0FBTyxjQUFjLENBQUMsdUJBQXVCLE9BQU8sTUFBTSxHQUFHO0FBRTNHLGdCQUFXLElBQUksT0FBTyxLQUFLOzs7QUFHbkMsVUFBTyxJQUFJLHNCQUFzQjtJQUM3QixVQUFVLHNCQUFzQjtJQUNoQztJQUNBO0lBQ0E7SUFDQSxHQUFHLG9CQUFvQixPQUFPO0lBQ2pDLENBQUM7OztDQUdWLFNBQVMsWUFBWSxHQUFHLEdBQUc7RUFDdkIsTUFBTSxRQUFRLGNBQWMsRUFBRTtFQUM5QixNQUFNLFFBQVEsY0FBYyxFQUFFO0FBQzlCLE1BQUksTUFBTSxFQUNOLFFBQU87R0FBRSxPQUFPO0dBQU0sTUFBTTtHQUFHO1dBRTFCLFVBQVUsY0FBYyxVQUFVLFVBQVUsY0FBYyxRQUFRO0dBQ3ZFLE1BQU0sUUFBUSxLQUFLLFdBQVcsRUFBRTtHQUNoQyxNQUFNLGFBQWEsS0FBSyxXQUFXLEVBQUUsQ0FBQyxRQUFRLFFBQVEsTUFBTSxRQUFRLElBQUksS0FBSyxHQUFHO0dBQ2hGLE1BQU0sU0FBUztJQUFFLEdBQUc7SUFBRyxHQUFHO0lBQUc7QUFDN0IsUUFBSyxNQUFNLE9BQU8sWUFBWTtJQUMxQixNQUFNLGNBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLO0FBQy9DLFFBQUksQ0FBQyxZQUFZLE1BQ2IsUUFBTyxFQUFFLE9BQU8sT0FBTztBQUUzQixXQUFPLE9BQU8sWUFBWTs7QUFFOUIsVUFBTztJQUFFLE9BQU87SUFBTSxNQUFNO0lBQVE7YUFFL0IsVUFBVSxjQUFjLFNBQVMsVUFBVSxjQUFjLE9BQU87QUFDckUsT0FBSSxFQUFFLFdBQVcsRUFBRSxPQUNmLFFBQU8sRUFBRSxPQUFPLE9BQU87R0FFM0IsTUFBTSxXQUFXLEVBQUU7QUFDbkIsUUFBSyxJQUFJLFFBQVEsR0FBRyxRQUFRLEVBQUUsUUFBUSxTQUFTO0lBQzNDLE1BQU0sUUFBUSxFQUFFO0lBQ2hCLE1BQU0sUUFBUSxFQUFFO0lBQ2hCLE1BQU0sY0FBYyxZQUFZLE9BQU8sTUFBTTtBQUM3QyxRQUFJLENBQUMsWUFBWSxNQUNiLFFBQU8sRUFBRSxPQUFPLE9BQU87QUFFM0IsYUFBUyxLQUFLLFlBQVksS0FBSzs7QUFFbkMsVUFBTztJQUFFLE9BQU87SUFBTSxNQUFNO0lBQVU7YUFFakMsVUFBVSxjQUFjLFFBQVEsVUFBVSxjQUFjLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDN0UsUUFBTztHQUFFLE9BQU87R0FBTSxNQUFNO0dBQUc7TUFHL0IsUUFBTyxFQUFFLE9BQU8sT0FBTzs7Q0FHL0IsSUFBYSxrQkFBYixjQUFxQyxRQUFRO0VBQ3pDLE9BQU8sT0FBTztHQUNWLE1BQU0sRUFBRSxRQUFRLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtHQUN2RCxNQUFNLGdCQUFnQixZQUFZLGdCQUFnQjtBQUM5QyxRQUFJLFVBQVUsV0FBVyxJQUFJLFVBQVUsWUFBWSxDQUMvQyxRQUFPO0lBRVgsTUFBTSxTQUFTLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTTtBQUMvRCxRQUFJLENBQUMsT0FBTyxPQUFPO0FBQ2YsdUJBQWtCLEtBQUssRUFDbkIsTUFBTSxhQUFhLDRCQUN0QixDQUFDO0FBQ0YsWUFBTzs7QUFFWCxRQUFJLFFBQVEsV0FBVyxJQUFJLFFBQVEsWUFBWSxDQUMzQyxRQUFPLE9BQU87QUFFbEIsV0FBTztLQUFFLFFBQVEsT0FBTztLQUFPLE9BQU8sT0FBTztLQUFNOztBQUV2RCxPQUFJLElBQUksT0FBTyxNQUNYLFFBQU8sUUFBUSxJQUFJLENBQ2YsS0FBSyxLQUFLLEtBQUssWUFBWTtJQUN2QixNQUFNLElBQUk7SUFDVixNQUFNLElBQUk7SUFDVixRQUFRO0lBQ1gsQ0FBQyxFQUNGLEtBQUssS0FBSyxNQUFNLFlBQVk7SUFDeEIsTUFBTSxJQUFJO0lBQ1YsTUFBTSxJQUFJO0lBQ1YsUUFBUTtJQUNYLENBQUMsQ0FDTCxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sV0FBVyxhQUFhLE1BQU0sTUFBTSxDQUFDO09BR3JELFFBQU8sYUFBYSxLQUFLLEtBQUssS0FBSyxXQUFXO0lBQzFDLE1BQU0sSUFBSTtJQUNWLE1BQU0sSUFBSTtJQUNWLFFBQVE7SUFDWCxDQUFDLEVBQUUsS0FBSyxLQUFLLE1BQU0sV0FBVztJQUMzQixNQUFNLElBQUk7SUFDVixNQUFNLElBQUk7SUFDVixRQUFRO0lBQ1gsQ0FBQyxDQUFDOzs7QUFJZixpQkFBZ0IsVUFBVSxNQUFNLE9BQU8sV0FBVztBQUM5QyxTQUFPLElBQUksZ0JBQWdCO0dBQ2pCO0dBQ0M7R0FDUCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBR04sSUFBYSxXQUFiLE1BQWEsaUJBQWlCLFFBQVE7RUFDbEMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQ3ZELE9BQUksSUFBSSxlQUFlLGNBQWMsT0FBTztBQUN4QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxPQUFJLElBQUksS0FBSyxTQUFTLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFDMUMsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CLFNBQVMsS0FBSyxLQUFLLE1BQU07S0FDekIsV0FBVztLQUNYLE9BQU87S0FDUCxNQUFNO0tBQ1QsQ0FBQztBQUNGLFdBQU87O0FBR1gsT0FBSSxDQURTLEtBQUssS0FBSyxRQUNWLElBQUksS0FBSyxTQUFTLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFDbkQsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CLFNBQVMsS0FBSyxLQUFLLE1BQU07S0FDekIsV0FBVztLQUNYLE9BQU87S0FDUCxNQUFNO0tBQ1QsQ0FBQztBQUNGLFdBQU8sT0FBTzs7R0FFbEIsTUFBTSxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FDdEIsS0FBSyxNQUFNLGNBQWM7SUFDMUIsTUFBTSxTQUFTLEtBQUssS0FBSyxNQUFNLGNBQWMsS0FBSyxLQUFLO0FBQ3ZELFFBQUksQ0FBQyxPQUNELFFBQU87QUFDWCxXQUFPLE9BQU8sT0FBTyxJQUFJLG1CQUFtQixLQUFLLE1BQU0sSUFBSSxNQUFNLFVBQVUsQ0FBQztLQUM5RSxDQUNHLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUN2QixPQUFJLElBQUksT0FBTyxNQUNYLFFBQU8sUUFBUSxJQUFJLE1BQU0sQ0FBQyxNQUFNLFlBQVk7QUFDeEMsV0FBTyxZQUFZLFdBQVcsUUFBUSxRQUFRO0tBQ2hEO09BR0YsUUFBTyxZQUFZLFdBQVcsUUFBUSxNQUFNOztFQUdwRCxJQUFJLFFBQVE7QUFDUixVQUFPLEtBQUssS0FBSzs7RUFFckIsS0FBSyxNQUFNO0FBQ1AsVUFBTyxJQUFJLFNBQVM7SUFDaEIsR0FBRyxLQUFLO0lBQ1I7SUFDSCxDQUFDOzs7QUFHVixVQUFTLFVBQVUsU0FBUyxXQUFXO0FBQ25DLE1BQUksQ0FBQyxNQUFNLFFBQVEsUUFBUSxDQUN2QixPQUFNLElBQUksTUFBTSx3REFBd0Q7QUFFNUUsU0FBTyxJQUFJLFNBQVM7R0FDaEIsT0FBTztHQUNQLFVBQVUsc0JBQXNCO0dBQ2hDLE1BQU07R0FDTixHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxZQUFiLE1BQWEsa0JBQWtCLFFBQVE7RUFDbkMsSUFBSSxZQUFZO0FBQ1osVUFBTyxLQUFLLEtBQUs7O0VBRXJCLElBQUksY0FBYztBQUNkLFVBQU8sS0FBSyxLQUFLOztFQUVyQixPQUFPLE9BQU87R0FDVixNQUFNLEVBQUUsUUFBUSxRQUFRLEtBQUssb0JBQW9CLE1BQU07QUFDdkQsT0FBSSxJQUFJLGVBQWUsY0FBYyxRQUFRO0FBQ3pDLHNCQUFrQixLQUFLO0tBQ25CLE1BQU0sYUFBYTtLQUNuQixVQUFVLGNBQWM7S0FDeEIsVUFBVSxJQUFJO0tBQ2pCLENBQUM7QUFDRixXQUFPOztHQUVYLE1BQU0sUUFBUSxFQUFFO0dBQ2hCLE1BQU0sVUFBVSxLQUFLLEtBQUs7R0FDMUIsTUFBTSxZQUFZLEtBQUssS0FBSztBQUM1QixRQUFLLE1BQU0sT0FBTyxJQUFJLEtBQ2xCLE9BQU0sS0FBSztJQUNQLEtBQUssUUFBUSxPQUFPLElBQUksbUJBQW1CLEtBQUssS0FBSyxJQUFJLE1BQU0sSUFBSSxDQUFDO0lBQ3BFLE9BQU8sVUFBVSxPQUFPLElBQUksbUJBQW1CLEtBQUssSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLElBQUksQ0FBQztJQUNsRixXQUFXLE9BQU8sSUFBSTtJQUN6QixDQUFDO0FBRU4sT0FBSSxJQUFJLE9BQU8sTUFDWCxRQUFPLFlBQVksaUJBQWlCLFFBQVEsTUFBTTtPQUdsRCxRQUFPLFlBQVksZ0JBQWdCLFFBQVEsTUFBTTs7RUFHekQsSUFBSSxVQUFVO0FBQ1YsVUFBTyxLQUFLLEtBQUs7O0VBRXJCLE9BQU8sT0FBTyxPQUFPLFFBQVEsT0FBTztBQUNoQyxPQUFJLGtCQUFrQixRQUNsQixRQUFPLElBQUksVUFBVTtJQUNqQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVUsc0JBQXNCO0lBQ2hDLEdBQUcsb0JBQW9CLE1BQU07SUFDaEMsQ0FBQztBQUVOLFVBQU8sSUFBSSxVQUFVO0lBQ2pCLFNBQVMsVUFBVSxRQUFRO0lBQzNCLFdBQVc7SUFDWCxVQUFVLHNCQUFzQjtJQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2pDLENBQUM7OztDQUdWLElBQWEsU0FBYixjQUE0QixRQUFRO0VBQ2hDLElBQUksWUFBWTtBQUNaLFVBQU8sS0FBSyxLQUFLOztFQUVyQixJQUFJLGNBQWM7QUFDZCxVQUFPLEtBQUssS0FBSzs7RUFFckIsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQ3ZELE9BQUksSUFBSSxlQUFlLGNBQWMsS0FBSztBQUN0QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxNQUFNLFVBQVUsS0FBSyxLQUFLO0dBQzFCLE1BQU0sWUFBWSxLQUFLLEtBQUs7R0FDNUIsTUFBTSxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxVQUFVO0FBQy9ELFdBQU87S0FDSCxLQUFLLFFBQVEsT0FBTyxJQUFJLG1CQUFtQixLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FBQztLQUMvRSxPQUFPLFVBQVUsT0FBTyxJQUFJLG1CQUFtQixLQUFLLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxRQUFRLENBQUMsQ0FBQztLQUMxRjtLQUNIO0FBQ0YsT0FBSSxJQUFJLE9BQU8sT0FBTztJQUNsQixNQUFNLDJCQUFXLElBQUksS0FBSztBQUMxQixXQUFPLFFBQVEsU0FBUyxDQUFDLEtBQUssWUFBWTtBQUN0QyxVQUFLLE1BQU0sUUFBUSxPQUFPO01BQ3RCLE1BQU0sTUFBTSxNQUFNLEtBQUs7TUFDdkIsTUFBTSxRQUFRLE1BQU0sS0FBSztBQUN6QixVQUFJLElBQUksV0FBVyxhQUFhLE1BQU0sV0FBVyxVQUM3QyxRQUFPO0FBRVgsVUFBSSxJQUFJLFdBQVcsV0FBVyxNQUFNLFdBQVcsUUFDM0MsUUFBTyxPQUFPO0FBRWxCLGVBQVMsSUFBSSxJQUFJLE9BQU8sTUFBTSxNQUFNOztBQUV4QyxZQUFPO01BQUUsUUFBUSxPQUFPO01BQU8sT0FBTztNQUFVO01BQ2xEO1VBRUQ7SUFDRCxNQUFNLDJCQUFXLElBQUksS0FBSztBQUMxQixTQUFLLE1BQU0sUUFBUSxPQUFPO0tBQ3RCLE1BQU0sTUFBTSxLQUFLO0tBQ2pCLE1BQU0sUUFBUSxLQUFLO0FBQ25CLFNBQUksSUFBSSxXQUFXLGFBQWEsTUFBTSxXQUFXLFVBQzdDLFFBQU87QUFFWCxTQUFJLElBQUksV0FBVyxXQUFXLE1BQU0sV0FBVyxRQUMzQyxRQUFPLE9BQU87QUFFbEIsY0FBUyxJQUFJLElBQUksT0FBTyxNQUFNLE1BQU07O0FBRXhDLFdBQU87S0FBRSxRQUFRLE9BQU87S0FBTyxPQUFPO0tBQVU7Ozs7QUFJNUQsUUFBTyxVQUFVLFNBQVMsV0FBVyxXQUFXO0FBQzVDLFNBQU8sSUFBSSxPQUFPO0dBQ2Q7R0FDQTtHQUNBLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFNBQWIsTUFBYSxlQUFlLFFBQVE7RUFDaEMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQ3ZELE9BQUksSUFBSSxlQUFlLGNBQWMsS0FBSztBQUN0QyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxNQUFNLE1BQU0sS0FBSztBQUNqQixPQUFJLElBQUksWUFBWTtRQUNaLElBQUksS0FBSyxPQUFPLElBQUksUUFBUSxPQUFPO0FBQ25DLHVCQUFrQixLQUFLO01BQ25CLE1BQU0sYUFBYTtNQUNuQixTQUFTLElBQUksUUFBUTtNQUNyQixNQUFNO01BQ04sV0FBVztNQUNYLE9BQU87TUFDUCxTQUFTLElBQUksUUFBUTtNQUN4QixDQUFDO0FBQ0YsWUFBTyxPQUFPOzs7QUFHdEIsT0FBSSxJQUFJLFlBQVk7UUFDWixJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsT0FBTztBQUNuQyx1QkFBa0IsS0FBSztNQUNuQixNQUFNLGFBQWE7TUFDbkIsU0FBUyxJQUFJLFFBQVE7TUFDckIsTUFBTTtNQUNOLFdBQVc7TUFDWCxPQUFPO01BQ1AsU0FBUyxJQUFJLFFBQVE7TUFDeEIsQ0FBQztBQUNGLFlBQU8sT0FBTzs7O0dBR3RCLE1BQU0sWUFBWSxLQUFLLEtBQUs7R0FDNUIsU0FBUyxZQUFZLFVBQVU7SUFDM0IsTUFBTSw0QkFBWSxJQUFJLEtBQUs7QUFDM0IsU0FBSyxNQUFNLFdBQVcsVUFBVTtBQUM1QixTQUFJLFFBQVEsV0FBVyxVQUNuQixRQUFPO0FBQ1gsU0FBSSxRQUFRLFdBQVcsUUFDbkIsUUFBTyxPQUFPO0FBQ2xCLGVBQVUsSUFBSSxRQUFRLE1BQU07O0FBRWhDLFdBQU87S0FBRSxRQUFRLE9BQU87S0FBTyxPQUFPO0tBQVc7O0dBRXJELE1BQU0sV0FBVyxDQUFDLEdBQUcsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLEtBQUssTUFBTSxNQUFNLFVBQVUsT0FBTyxJQUFJLG1CQUFtQixLQUFLLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzFILE9BQUksSUFBSSxPQUFPLE1BQ1gsUUFBTyxRQUFRLElBQUksU0FBUyxDQUFDLE1BQU0sYUFBYSxZQUFZLFNBQVMsQ0FBQztPQUd0RSxRQUFPLFlBQVksU0FBUzs7RUFHcEMsSUFBSSxTQUFTLFNBQVM7QUFDbEIsVUFBTyxJQUFJLE9BQU87SUFDZCxHQUFHLEtBQUs7SUFDUixTQUFTO0tBQUUsT0FBTztLQUFTLFNBQVMsVUFBVSxTQUFTLFFBQVE7S0FBRTtJQUNwRSxDQUFDOztFQUVOLElBQUksU0FBUyxTQUFTO0FBQ2xCLFVBQU8sSUFBSSxPQUFPO0lBQ2QsR0FBRyxLQUFLO0lBQ1IsU0FBUztLQUFFLE9BQU87S0FBUyxTQUFTLFVBQVUsU0FBUyxRQUFRO0tBQUU7SUFDcEUsQ0FBQzs7RUFFTixLQUFLLE1BQU0sU0FBUztBQUNoQixVQUFPLEtBQUssSUFBSSxNQUFNLFFBQVEsQ0FBQyxJQUFJLE1BQU0sUUFBUTs7RUFFckQsU0FBUyxTQUFTO0FBQ2QsVUFBTyxLQUFLLElBQUksR0FBRyxRQUFROzs7QUFHbkMsUUFBTyxVQUFVLFdBQVcsV0FBVztBQUNuQyxTQUFPLElBQUksT0FBTztHQUNkO0dBQ0EsU0FBUztHQUNULFNBQVM7R0FDVCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxjQUFiLE1BQWEsb0JBQW9CLFFBQVE7RUFDckMsY0FBYztBQUNWLFNBQU0sR0FBRyxVQUFVO0FBQ25CLFFBQUssV0FBVyxLQUFLOztFQUV6QixPQUFPLE9BQU87R0FDVixNQUFNLEVBQUUsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQy9DLE9BQUksSUFBSSxlQUFlLGNBQWMsVUFBVTtBQUMzQyxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7R0FFWCxTQUFTLGNBQWMsTUFBTSxPQUFPO0FBQ2hDLFdBQU8sVUFBVTtLQUNiLE1BQU07S0FDTixNQUFNLElBQUk7S0FDVixXQUFXO01BQUMsSUFBSSxPQUFPO01BQW9CLElBQUk7TUFBZ0IsYUFBYTtNQUFFQztNQUFnQixDQUFDLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRTtLQUNqSCxXQUFXO01BQ1AsTUFBTSxhQUFhO01BQ25CLGdCQUFnQjtNQUNuQjtLQUNKLENBQUM7O0dBRU4sU0FBUyxpQkFBaUIsU0FBUyxPQUFPO0FBQ3RDLFdBQU8sVUFBVTtLQUNiLE1BQU07S0FDTixNQUFNLElBQUk7S0FDVixXQUFXO01BQUMsSUFBSSxPQUFPO01BQW9CLElBQUk7TUFBZ0IsYUFBYTtNQUFFQTtNQUFnQixDQUFDLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRTtLQUNqSCxXQUFXO01BQ1AsTUFBTSxhQUFhO01BQ25CLGlCQUFpQjtNQUNwQjtLQUNKLENBQUM7O0dBRU4sTUFBTSxTQUFTLEVBQUUsVUFBVSxJQUFJLE9BQU8sb0JBQW9CO0dBQzFELE1BQU0sS0FBSyxJQUFJO0FBQ2YsT0FBSSxLQUFLLEtBQUssbUJBQW1CLFlBQVk7SUFJekMsTUFBTSxLQUFLO0FBQ1gsV0FBTyxHQUFHLGVBQWdCLEdBQUcsTUFBTTtLQUMvQixNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQztLQUM5QixNQUFNLGFBQWEsTUFBTSxHQUFHLEtBQUssS0FBSyxXQUFXLE1BQU0sT0FBTyxDQUFDLE9BQU8sTUFBTTtBQUN4RSxZQUFNLFNBQVMsY0FBYyxNQUFNLEVBQUUsQ0FBQztBQUN0QyxZQUFNO09BQ1I7S0FDRixNQUFNLFNBQVMsTUFBTSxRQUFRLE1BQU0sSUFBSSxNQUFNLFdBQVc7QUFPeEQsWUFOc0IsTUFBTSxHQUFHLEtBQUssUUFBUSxLQUFLLEtBQzVDLFdBQVcsUUFBUSxPQUFPLENBQzFCLE9BQU8sTUFBTTtBQUNkLFlBQU0sU0FBUyxpQkFBaUIsUUFBUSxFQUFFLENBQUM7QUFDM0MsWUFBTTtPQUNSO01BRUo7VUFFRDtJQUlELE1BQU0sS0FBSztBQUNYLFdBQU8sR0FBRyxTQUFVLEdBQUcsTUFBTTtLQUN6QixNQUFNLGFBQWEsR0FBRyxLQUFLLEtBQUssVUFBVSxNQUFNLE9BQU87QUFDdkQsU0FBSSxDQUFDLFdBQVcsUUFDWixPQUFNLElBQUksU0FBUyxDQUFDLGNBQWMsTUFBTSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0tBRS9ELE1BQU0sU0FBUyxRQUFRLE1BQU0sSUFBSSxNQUFNLFdBQVcsS0FBSztLQUN2RCxNQUFNLGdCQUFnQixHQUFHLEtBQUssUUFBUSxVQUFVLFFBQVEsT0FBTztBQUMvRCxTQUFJLENBQUMsY0FBYyxRQUNmLE9BQU0sSUFBSSxTQUFTLENBQUMsaUJBQWlCLFFBQVEsY0FBYyxNQUFNLENBQUMsQ0FBQztBQUV2RSxZQUFPLGNBQWM7TUFDdkI7OztFQUdWLGFBQWE7QUFDVCxVQUFPLEtBQUssS0FBSzs7RUFFckIsYUFBYTtBQUNULFVBQU8sS0FBSyxLQUFLOztFQUVyQixLQUFLLEdBQUcsT0FBTztBQUNYLFVBQU8sSUFBSSxZQUFZO0lBQ25CLEdBQUcsS0FBSztJQUNSLE1BQU0sU0FBUyxPQUFPLE1BQU0sQ0FBQyxLQUFLLFdBQVcsUUFBUSxDQUFDO0lBQ3pELENBQUM7O0VBRU4sUUFBUSxZQUFZO0FBQ2hCLFVBQU8sSUFBSSxZQUFZO0lBQ25CLEdBQUcsS0FBSztJQUNSLFNBQVM7SUFDWixDQUFDOztFQUVOLFVBQVUsTUFBTTtBQUVaLFVBRHNCLEtBQUssTUFBTSxLQUFLOztFQUcxQyxnQkFBZ0IsTUFBTTtBQUVsQixVQURzQixLQUFLLE1BQU0sS0FBSzs7RUFHMUMsT0FBTyxPQUFPLE1BQU0sU0FBUyxRQUFRO0FBQ2pDLFVBQU8sSUFBSSxZQUFZO0lBQ25CLE1BQU8sT0FBTyxPQUFPLFNBQVMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLFdBQVcsUUFBUSxDQUFDO0lBQ2xFLFNBQVMsV0FBVyxXQUFXLFFBQVE7SUFDdkMsVUFBVSxzQkFBc0I7SUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNqQyxDQUFDOzs7Q0FHVixJQUFhLFVBQWIsY0FBNkIsUUFBUTtFQUNqQyxJQUFJLFNBQVM7QUFDVCxVQUFPLEtBQUssS0FBSyxRQUFROztFQUU3QixPQUFPLE9BQU87R0FDVixNQUFNLEVBQUUsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBRS9DLFVBRG1CLEtBQUssS0FBSyxRQUFRLENBQ25CLE9BQU87SUFBRSxNQUFNLElBQUk7SUFBTSxNQUFNLElBQUk7SUFBTSxRQUFRO0lBQUssQ0FBQzs7O0FBR2pGLFNBQVEsVUFBVSxRQUFRLFdBQVc7QUFDakMsU0FBTyxJQUFJLFFBQVE7R0FDUDtHQUNSLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLGFBQWIsY0FBZ0MsUUFBUTtFQUNwQyxPQUFPLE9BQU87QUFDVixPQUFJLE1BQU0sU0FBUyxLQUFLLEtBQUssT0FBTztJQUNoQyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtBQUN2QyxzQkFBa0IsS0FBSztLQUNuQixVQUFVLElBQUk7S0FDZCxNQUFNLGFBQWE7S0FDbkIsVUFBVSxLQUFLLEtBQUs7S0FDdkIsQ0FBQztBQUNGLFdBQU87O0FBRVgsVUFBTztJQUFFLFFBQVE7SUFBUyxPQUFPLE1BQU07SUFBTTs7RUFFakQsSUFBSSxRQUFRO0FBQ1IsVUFBTyxLQUFLLEtBQUs7OztBQUd6QixZQUFXLFVBQVUsT0FBTyxXQUFXO0FBQ25DLFNBQU8sSUFBSSxXQUFXO0dBQ1g7R0FDUCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sU0FBUyxjQUFjLFFBQVEsUUFBUTtBQUNuQyxTQUFPLElBQUksUUFBUTtHQUNmO0dBQ0EsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsVUFBYixNQUFhLGdCQUFnQixRQUFRO0VBQ2pDLE9BQU8sT0FBTztBQUNWLE9BQUksT0FBTyxNQUFNLFNBQVMsVUFBVTtJQUNoQyxNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtJQUN2QyxNQUFNLGlCQUFpQixLQUFLLEtBQUs7QUFDakMsc0JBQWtCLEtBQUs7S0FDbkIsVUFBVSxLQUFLLFdBQVcsZUFBZTtLQUN6QyxVQUFVLElBQUk7S0FDZCxNQUFNLGFBQWE7S0FDdEIsQ0FBQztBQUNGLFdBQU87O0FBRVgsT0FBSSxDQUFDLEtBQUssT0FDTixNQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssS0FBSyxPQUFPO0FBRTNDLE9BQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxNQUFNLEtBQUssRUFBRTtJQUM5QixNQUFNLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTTtJQUN2QyxNQUFNLGlCQUFpQixLQUFLLEtBQUs7QUFDakMsc0JBQWtCLEtBQUs7S0FDbkIsVUFBVSxJQUFJO0tBQ2QsTUFBTSxhQUFhO0tBQ25CLFNBQVM7S0FDWixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxVQUFPLEdBQUcsTUFBTSxLQUFLOztFQUV6QixJQUFJLFVBQVU7QUFDVixVQUFPLEtBQUssS0FBSzs7RUFFckIsSUFBSSxPQUFPO0dBQ1AsTUFBTSxhQUFhLEVBQUU7QUFDckIsUUFBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE9BQ3hCLFlBQVcsT0FBTztBQUV0QixVQUFPOztFQUVYLElBQUksU0FBUztHQUNULE1BQU0sYUFBYSxFQUFFO0FBQ3JCLFFBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxPQUN4QixZQUFXLE9BQU87QUFFdEIsVUFBTzs7RUFFWCxJQUFJLE9BQU87R0FDUCxNQUFNLGFBQWEsRUFBRTtBQUNyQixRQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FDeEIsWUFBVyxPQUFPO0FBRXRCLFVBQU87O0VBRVgsUUFBUSxRQUFRLFNBQVMsS0FBSyxNQUFNO0FBQ2hDLFVBQU8sUUFBUSxPQUFPLFFBQVE7SUFDMUIsR0FBRyxLQUFLO0lBQ1IsR0FBRztJQUNOLENBQUM7O0VBRU4sUUFBUSxRQUFRLFNBQVMsS0FBSyxNQUFNO0FBQ2hDLFVBQU8sUUFBUSxPQUFPLEtBQUssUUFBUSxRQUFRLFFBQVEsQ0FBQyxPQUFPLFNBQVMsSUFBSSxDQUFDLEVBQUU7SUFDdkUsR0FBRyxLQUFLO0lBQ1IsR0FBRztJQUNOLENBQUM7OztBQUdWLFNBQVEsU0FBUztDQUNqQixJQUFhLGdCQUFiLGNBQW1DLFFBQVE7RUFDdkMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxtQkFBbUIsS0FBSyxtQkFBbUIsS0FBSyxLQUFLLE9BQU87R0FDbEUsTUFBTSxNQUFNLEtBQUssZ0JBQWdCLE1BQU07QUFDdkMsT0FBSSxJQUFJLGVBQWUsY0FBYyxVQUFVLElBQUksZUFBZSxjQUFjLFFBQVE7SUFDcEYsTUFBTSxpQkFBaUIsS0FBSyxhQUFhLGlCQUFpQjtBQUMxRCxzQkFBa0IsS0FBSztLQUNuQixVQUFVLEtBQUssV0FBVyxlQUFlO0tBQ3pDLFVBQVUsSUFBSTtLQUNkLE1BQU0sYUFBYTtLQUN0QixDQUFDO0FBQ0YsV0FBTzs7QUFFWCxPQUFJLENBQUMsS0FBSyxPQUNOLE1BQUssU0FBUyxJQUFJLElBQUksS0FBSyxtQkFBbUIsS0FBSyxLQUFLLE9BQU8sQ0FBQztBQUVwRSxPQUFJLENBQUMsS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLEVBQUU7SUFDOUIsTUFBTSxpQkFBaUIsS0FBSyxhQUFhLGlCQUFpQjtBQUMxRCxzQkFBa0IsS0FBSztLQUNuQixVQUFVLElBQUk7S0FDZCxNQUFNLGFBQWE7S0FDbkIsU0FBUztLQUNaLENBQUM7QUFDRixXQUFPOztBQUVYLFVBQU8sR0FBRyxNQUFNLEtBQUs7O0VBRXpCLElBQUksT0FBTztBQUNQLFVBQU8sS0FBSyxLQUFLOzs7QUFHekIsZUFBYyxVQUFVLFFBQVEsV0FBVztBQUN2QyxTQUFPLElBQUksY0FBYztHQUNiO0dBQ1IsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsYUFBYixjQUFnQyxRQUFRO0VBQ3BDLFNBQVM7QUFDTCxVQUFPLEtBQUssS0FBSzs7RUFFckIsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtBQUMvQyxPQUFJLElBQUksZUFBZSxjQUFjLFdBQVcsSUFBSSxPQUFPLFVBQVUsT0FBTztBQUN4RSxzQkFBa0IsS0FBSztLQUNuQixNQUFNLGFBQWE7S0FDbkIsVUFBVSxjQUFjO0tBQ3hCLFVBQVUsSUFBSTtLQUNqQixDQUFDO0FBQ0YsV0FBTzs7QUFHWCxVQUFPLElBRGEsSUFBSSxlQUFlLGNBQWMsVUFBVSxJQUFJLE9BQU8sUUFBUSxRQUFRLElBQUksS0FBSyxFQUM3RSxNQUFNLFNBQVM7QUFDakMsV0FBTyxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU07S0FDbkMsTUFBTSxJQUFJO0tBQ1YsVUFBVSxJQUFJLE9BQU87S0FDeEIsQ0FBQztLQUNKLENBQUM7OztBQUdYLFlBQVcsVUFBVSxRQUFRLFdBQVc7QUFDcEMsU0FBTyxJQUFJLFdBQVc7R0FDbEIsTUFBTTtHQUNOLFVBQVUsc0JBQXNCO0dBQ2hDLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLGFBQWIsY0FBZ0MsUUFBUTtFQUNwQyxZQUFZO0FBQ1IsVUFBTyxLQUFLLEtBQUs7O0VBRXJCLGFBQWE7QUFDVCxVQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssYUFBYSxzQkFBc0IsYUFDMUQsS0FBSyxLQUFLLE9BQU8sWUFBWSxHQUM3QixLQUFLLEtBQUs7O0VBRXBCLE9BQU8sT0FBTztHQUNWLE1BQU0sRUFBRSxRQUFRLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtHQUN2RCxNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVU7R0FDbkMsTUFBTSxXQUFXO0lBQ2IsV0FBVyxRQUFRO0FBQ2YsdUJBQWtCLEtBQUssSUFBSTtBQUMzQixTQUFJLElBQUksTUFDSixRQUFPLE9BQU87U0FHZCxRQUFPLE9BQU87O0lBR3RCLElBQUksT0FBTztBQUNQLFlBQU8sSUFBSTs7SUFFbEI7QUFDRCxZQUFTLFdBQVcsU0FBUyxTQUFTLEtBQUssU0FBUztBQUNwRCxPQUFJLE9BQU8sU0FBUyxjQUFjO0lBQzlCLE1BQU0sWUFBWSxPQUFPLFVBQVUsSUFBSSxNQUFNLFNBQVM7QUFDdEQsUUFBSSxJQUFJLE9BQU8sTUFDWCxRQUFPLFFBQVEsUUFBUSxVQUFVLENBQUMsS0FBSyxPQUFPLGNBQWM7QUFDeEQsU0FBSSxPQUFPLFVBQVUsVUFDakIsUUFBTztLQUNYLE1BQU0sU0FBUyxNQUFNLEtBQUssS0FBSyxPQUFPLFlBQVk7TUFDOUMsTUFBTTtNQUNOLE1BQU0sSUFBSTtNQUNWLFFBQVE7TUFDWCxDQUFDO0FBQ0YsU0FBSSxPQUFPLFdBQVcsVUFDbEIsUUFBTztBQUNYLFNBQUksT0FBTyxXQUFXLFFBQ2xCLFFBQU8sTUFBTSxPQUFPLE1BQU07QUFDOUIsU0FBSSxPQUFPLFVBQVUsUUFDakIsUUFBTyxNQUFNLE9BQU8sTUFBTTtBQUM5QixZQUFPO01BQ1Q7U0FFRDtBQUNELFNBQUksT0FBTyxVQUFVLFVBQ2pCLFFBQU87S0FDWCxNQUFNLFNBQVMsS0FBSyxLQUFLLE9BQU8sV0FBVztNQUN2QyxNQUFNO01BQ04sTUFBTSxJQUFJO01BQ1YsUUFBUTtNQUNYLENBQUM7QUFDRixTQUFJLE9BQU8sV0FBVyxVQUNsQixRQUFPO0FBQ1gsU0FBSSxPQUFPLFdBQVcsUUFDbEIsUUFBTyxNQUFNLE9BQU8sTUFBTTtBQUM5QixTQUFJLE9BQU8sVUFBVSxRQUNqQixRQUFPLE1BQU0sT0FBTyxNQUFNO0FBQzlCLFlBQU87OztBQUdmLE9BQUksT0FBTyxTQUFTLGNBQWM7SUFDOUIsTUFBTSxxQkFBcUIsUUFBUTtLQUMvQixNQUFNLFNBQVMsT0FBTyxXQUFXLEtBQUssU0FBUztBQUMvQyxTQUFJLElBQUksT0FBTyxNQUNYLFFBQU8sUUFBUSxRQUFRLE9BQU87QUFFbEMsU0FBSSxrQkFBa0IsUUFDbEIsT0FBTSxJQUFJLE1BQU0sNEZBQTRGO0FBRWhILFlBQU87O0FBRVgsUUFBSSxJQUFJLE9BQU8sVUFBVSxPQUFPO0tBQzVCLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxXQUFXO01BQ3RDLE1BQU0sSUFBSTtNQUNWLE1BQU0sSUFBSTtNQUNWLFFBQVE7TUFDWCxDQUFDO0FBQ0YsU0FBSSxNQUFNLFdBQVcsVUFDakIsUUFBTztBQUNYLFNBQUksTUFBTSxXQUFXLFFBQ2pCLFFBQU8sT0FBTztBQUVsQix1QkFBa0IsTUFBTSxNQUFNO0FBQzlCLFlBQU87TUFBRSxRQUFRLE9BQU87TUFBTyxPQUFPLE1BQU07TUFBTztVQUduRCxRQUFPLEtBQUssS0FBSyxPQUFPLFlBQVk7S0FBRSxNQUFNLElBQUk7S0FBTSxNQUFNLElBQUk7S0FBTSxRQUFRO0tBQUssQ0FBQyxDQUFDLE1BQU0sVUFBVTtBQUNqRyxTQUFJLE1BQU0sV0FBVyxVQUNqQixRQUFPO0FBQ1gsU0FBSSxNQUFNLFdBQVcsUUFDakIsUUFBTyxPQUFPO0FBQ2xCLFlBQU8sa0JBQWtCLE1BQU0sTUFBTSxDQUFDLFdBQVc7QUFDN0MsYUFBTztPQUFFLFFBQVEsT0FBTztPQUFPLE9BQU8sTUFBTTtPQUFPO09BQ3JEO01BQ0o7O0FBR1YsT0FBSSxPQUFPLFNBQVMsWUFDaEIsS0FBSSxJQUFJLE9BQU8sVUFBVSxPQUFPO0lBQzVCLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXO0tBQ3JDLE1BQU0sSUFBSTtLQUNWLE1BQU0sSUFBSTtLQUNWLFFBQVE7S0FDWCxDQUFDO0FBQ0YsUUFBSSxDQUFDLFFBQVEsS0FBSyxDQUNkLFFBQU87SUFDWCxNQUFNLFNBQVMsT0FBTyxVQUFVLEtBQUssT0FBTyxTQUFTO0FBQ3JELFFBQUksa0JBQWtCLFFBQ2xCLE9BQU0sSUFBSSxNQUFNLGtHQUFrRztBQUV0SCxXQUFPO0tBQUUsUUFBUSxPQUFPO0tBQU8sT0FBTztLQUFRO1NBRzlDLFFBQU8sS0FBSyxLQUFLLE9BQU8sWUFBWTtJQUFFLE1BQU0sSUFBSTtJQUFNLE1BQU0sSUFBSTtJQUFNLFFBQVE7SUFBSyxDQUFDLENBQUMsTUFBTSxTQUFTO0FBQ2hHLFFBQUksQ0FBQyxRQUFRLEtBQUssQ0FDZCxRQUFPO0FBQ1gsV0FBTyxRQUFRLFFBQVEsT0FBTyxVQUFVLEtBQUssT0FBTyxTQUFTLENBQUMsQ0FBQyxNQUFNLFlBQVk7S0FDN0UsUUFBUSxPQUFPO0tBQ2YsT0FBTztLQUNWLEVBQUU7S0FDTDtBQUdWLFFBQUssWUFBWSxPQUFPOzs7QUFHaEMsWUFBVyxVQUFVLFFBQVEsUUFBUSxXQUFXO0FBQzVDLFNBQU8sSUFBSSxXQUFXO0dBQ2xCO0dBQ0EsVUFBVSxzQkFBc0I7R0FDaEM7R0FDQSxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0FBRU4sWUFBVyx3QkFBd0IsWUFBWSxRQUFRLFdBQVc7QUFDOUQsU0FBTyxJQUFJLFdBQVc7R0FDbEI7R0FDQSxRQUFRO0lBQUUsTUFBTTtJQUFjLFdBQVc7SUFBWTtHQUNyRCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBR04sSUFBYSxjQUFiLGNBQWlDLFFBQVE7RUFDckMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxVQUM3QixRQUFPLEdBQUcsS0FBQSxFQUFVO0FBRXhCLFVBQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNOztFQUU1QyxTQUFTO0FBQ0wsVUFBTyxLQUFLLEtBQUs7OztBQUd6QixhQUFZLFVBQVUsTUFBTSxXQUFXO0FBQ25DLFNBQU8sSUFBSSxZQUFZO0dBQ25CLFdBQVc7R0FDWCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxjQUFiLGNBQWlDLFFBQVE7RUFDckMsT0FBTyxPQUFPO0FBRVYsT0FEbUIsS0FBSyxTQUFTLE1BQU0sS0FDcEIsY0FBYyxLQUM3QixRQUFPLEdBQUcsS0FBSztBQUVuQixVQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sTUFBTTs7RUFFNUMsU0FBUztBQUNMLFVBQU8sS0FBSyxLQUFLOzs7QUFHekIsYUFBWSxVQUFVLE1BQU0sV0FBVztBQUNuQyxTQUFPLElBQUksWUFBWTtHQUNuQixXQUFXO0dBQ1gsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUVOLElBQWEsYUFBYixjQUFnQyxRQUFRO0VBQ3BDLE9BQU8sT0FBTztHQUNWLE1BQU0sRUFBRSxRQUFRLEtBQUssb0JBQW9CLE1BQU07R0FDL0MsSUFBSSxPQUFPLElBQUk7QUFDZixPQUFJLElBQUksZUFBZSxjQUFjLFVBQ2pDLFFBQU8sS0FBSyxLQUFLLGNBQWM7QUFFbkMsVUFBTyxLQUFLLEtBQUssVUFBVSxPQUFPO0lBQzlCO0lBQ0EsTUFBTSxJQUFJO0lBQ1YsUUFBUTtJQUNYLENBQUM7O0VBRU4sZ0JBQWdCO0FBQ1osVUFBTyxLQUFLLEtBQUs7OztBQUd6QixZQUFXLFVBQVUsTUFBTSxXQUFXO0FBQ2xDLFNBQU8sSUFBSSxXQUFXO0dBQ2xCLFdBQVc7R0FDWCxVQUFVLHNCQUFzQjtHQUNoQyxjQUFjLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxnQkFBZ0IsT0FBTztHQUNuRixHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0NBRU4sSUFBYSxXQUFiLGNBQThCLFFBQVE7RUFDbEMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsS0FBSyxvQkFBb0IsTUFBTTtHQUUvQyxNQUFNLFNBQVM7SUFDWCxHQUFHO0lBQ0gsUUFBUTtLQUNKLEdBQUcsSUFBSTtLQUNQLFFBQVEsRUFBRTtLQUNiO0lBQ0o7R0FDRCxNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVUsT0FBTztJQUN0QyxNQUFNLE9BQU87SUFDYixNQUFNLE9BQU87SUFDYixRQUFRLEVBQ0osR0FBRyxRQUNOO0lBQ0osQ0FBQztBQUNGLE9BQUksUUFBUSxPQUFPLENBQ2YsUUFBTyxPQUFPLE1BQU0sV0FBVztBQUMzQixXQUFPO0tBQ0gsUUFBUTtLQUNSLE9BQU8sT0FBTyxXQUFXLFVBQ25CLE9BQU8sUUFDUCxLQUFLLEtBQUssV0FBVztNQUNuQixJQUFJLFFBQVE7QUFDUixjQUFPLElBQUksU0FBUyxPQUFPLE9BQU8sT0FBTzs7TUFFN0MsT0FBTyxPQUFPO01BQ2pCLENBQUM7S0FDVDtLQUNIO09BR0YsUUFBTztJQUNILFFBQVE7SUFDUixPQUFPLE9BQU8sV0FBVyxVQUNuQixPQUFPLFFBQ1AsS0FBSyxLQUFLLFdBQVc7S0FDbkIsSUFBSSxRQUFRO0FBQ1IsYUFBTyxJQUFJLFNBQVMsT0FBTyxPQUFPLE9BQU87O0tBRTdDLE9BQU8sT0FBTztLQUNqQixDQUFDO0lBQ1Q7O0VBR1QsY0FBYztBQUNWLFVBQU8sS0FBSyxLQUFLOzs7QUFHekIsVUFBUyxVQUFVLE1BQU0sV0FBVztBQUNoQyxTQUFPLElBQUksU0FBUztHQUNoQixXQUFXO0dBQ1gsVUFBVSxzQkFBc0I7R0FDaEMsWUFBWSxPQUFPLE9BQU8sVUFBVSxhQUFhLE9BQU8sY0FBYyxPQUFPO0dBQzdFLEdBQUcsb0JBQW9CLE9BQU87R0FDakMsQ0FBQzs7Q0FFTixJQUFhLFNBQWIsY0FBNEIsUUFBUTtFQUNoQyxPQUFPLE9BQU87QUFFVixPQURtQixLQUFLLFNBQVMsTUFBTSxLQUNwQixjQUFjLEtBQUs7SUFDbEMsTUFBTSxNQUFNLEtBQUssZ0JBQWdCLE1BQU07QUFDdkMsc0JBQWtCLEtBQUs7S0FDbkIsTUFBTSxhQUFhO0tBQ25CLFVBQVUsY0FBYztLQUN4QixVQUFVLElBQUk7S0FDakIsQ0FBQztBQUNGLFdBQU87O0FBRVgsVUFBTztJQUFFLFFBQVE7SUFBUyxPQUFPLE1BQU07SUFBTTs7O0FBR3JELFFBQU8sVUFBVSxXQUFXO0FBQ3hCLFNBQU8sSUFBSSxPQUFPO0dBQ2QsVUFBVSxzQkFBc0I7R0FDaEMsR0FBRyxvQkFBb0IsT0FBTztHQUNqQyxDQUFDOztDQUdOLElBQWEsYUFBYixjQUFnQyxRQUFRO0VBQ3BDLE9BQU8sT0FBTztHQUNWLE1BQU0sRUFBRSxRQUFRLEtBQUssb0JBQW9CLE1BQU07R0FDL0MsTUFBTSxPQUFPLElBQUk7QUFDakIsVUFBTyxLQUFLLEtBQUssS0FBSyxPQUFPO0lBQ3pCO0lBQ0EsTUFBTSxJQUFJO0lBQ1YsUUFBUTtJQUNYLENBQUM7O0VBRU4sU0FBUztBQUNMLFVBQU8sS0FBSyxLQUFLOzs7Q0FHekIsSUFBYSxjQUFiLE1BQWEsb0JBQW9CLFFBQVE7RUFDckMsT0FBTyxPQUFPO0dBQ1YsTUFBTSxFQUFFLFFBQVEsUUFBUSxLQUFLLG9CQUFvQixNQUFNO0FBQ3ZELE9BQUksSUFBSSxPQUFPLE9BQU87SUFDbEIsTUFBTSxjQUFjLFlBQVk7S0FDNUIsTUFBTSxXQUFXLE1BQU0sS0FBSyxLQUFLLEdBQUcsWUFBWTtNQUM1QyxNQUFNLElBQUk7TUFDVixNQUFNLElBQUk7TUFDVixRQUFRO01BQ1gsQ0FBQztBQUNGLFNBQUksU0FBUyxXQUFXLFVBQ3BCLFFBQU87QUFDWCxTQUFJLFNBQVMsV0FBVyxTQUFTO0FBQzdCLGFBQU8sT0FBTztBQUNkLGFBQU8sTUFBTSxTQUFTLE1BQU07V0FHNUIsUUFBTyxLQUFLLEtBQUssSUFBSSxZQUFZO01BQzdCLE1BQU0sU0FBUztNQUNmLE1BQU0sSUFBSTtNQUNWLFFBQVE7TUFDWCxDQUFDOztBQUdWLFdBQU8sYUFBYTtVQUVuQjtJQUNELE1BQU0sV0FBVyxLQUFLLEtBQUssR0FBRyxXQUFXO0tBQ3JDLE1BQU0sSUFBSTtLQUNWLE1BQU0sSUFBSTtLQUNWLFFBQVE7S0FDWCxDQUFDO0FBQ0YsUUFBSSxTQUFTLFdBQVcsVUFDcEIsUUFBTztBQUNYLFFBQUksU0FBUyxXQUFXLFNBQVM7QUFDN0IsWUFBTyxPQUFPO0FBQ2QsWUFBTztNQUNILFFBQVE7TUFDUixPQUFPLFNBQVM7TUFDbkI7VUFHRCxRQUFPLEtBQUssS0FBSyxJQUFJLFdBQVc7S0FDNUIsTUFBTSxTQUFTO0tBQ2YsTUFBTSxJQUFJO0tBQ1YsUUFBUTtLQUNYLENBQUM7OztFQUlkLE9BQU8sT0FBTyxHQUFHLEdBQUc7QUFDaEIsVUFBTyxJQUFJLFlBQVk7SUFDbkIsSUFBSTtJQUNKLEtBQUs7SUFDTCxVQUFVLHNCQUFzQjtJQUNuQyxDQUFDOzs7Q0FHVixJQUFhLGNBQWIsY0FBaUMsUUFBUTtFQUNyQyxPQUFPLE9BQU87R0FDVixNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNO0dBQ2hELE1BQU0sVUFBVSxTQUFTO0FBQ3JCLFFBQUksUUFBUSxLQUFLLENBQ2IsTUFBSyxRQUFRLE9BQU8sT0FBTyxLQUFLLE1BQU07QUFFMUMsV0FBTzs7QUFFWCxVQUFPLFFBQVEsT0FBTyxHQUFHLE9BQU8sTUFBTSxTQUFTLE9BQU8sS0FBSyxDQUFDLEdBQUcsT0FBTyxPQUFPOztFQUVqRixTQUFTO0FBQ0wsVUFBTyxLQUFLLEtBQUs7OztBQUd6QixhQUFZLFVBQVUsTUFBTSxXQUFXO0FBQ25DLFNBQU8sSUFBSSxZQUFZO0dBQ25CLFdBQVc7R0FDWCxVQUFVLHNCQUFzQjtHQUNoQyxHQUFHLG9CQUFvQixPQUFPO0dBQ2pDLENBQUM7O0FBZ0RjLENBQ1IsVUFBVTtDQUV0QixJQUFXO0FBQ1gsRUFBQyxTQUFVLHVCQUF1QjtBQUM5Qix3QkFBc0IsZUFBZTtBQUNyQyx3QkFBc0IsZUFBZTtBQUNyQyx3QkFBc0IsWUFBWTtBQUNsQyx3QkFBc0IsZUFBZTtBQUNyQyx3QkFBc0IsZ0JBQWdCO0FBQ3RDLHdCQUFzQixhQUFhO0FBQ25DLHdCQUFzQixlQUFlO0FBQ3JDLHdCQUFzQixrQkFBa0I7QUFDeEMsd0JBQXNCLGFBQWE7QUFDbkMsd0JBQXNCLFlBQVk7QUFDbEMsd0JBQXNCLGdCQUFnQjtBQUN0Qyx3QkFBc0IsY0FBYztBQUNwQyx3QkFBc0IsYUFBYTtBQUNuQyx3QkFBc0IsY0FBYztBQUNwQyx3QkFBc0IsZUFBZTtBQUNyQyx3QkFBc0IsY0FBYztBQUNwQyx3QkFBc0IsMkJBQTJCO0FBQ2pELHdCQUFzQixxQkFBcUI7QUFDM0Msd0JBQXNCLGNBQWM7QUFDcEMsd0JBQXNCLGVBQWU7QUFDckMsd0JBQXNCLFlBQVk7QUFDbEMsd0JBQXNCLFlBQVk7QUFDbEMsd0JBQXNCLGlCQUFpQjtBQUN2Qyx3QkFBc0IsYUFBYTtBQUNuQyx3QkFBc0IsZ0JBQWdCO0FBQ3RDLHdCQUFzQixhQUFhO0FBQ25DLHdCQUFzQixnQkFBZ0I7QUFDdEMsd0JBQXNCLG1CQUFtQjtBQUN6Qyx3QkFBc0IsaUJBQWlCO0FBQ3ZDLHdCQUFzQixpQkFBaUI7QUFDdkMsd0JBQXNCLGdCQUFnQjtBQUN0Qyx3QkFBc0IsY0FBYztBQUNwQyx3QkFBc0IsZ0JBQWdCO0FBQ3RDLHdCQUFzQixnQkFBZ0I7QUFDdEMsd0JBQXNCLGlCQUFpQjtBQUN2Qyx3QkFBc0IsaUJBQWlCO0lBQ3hDLDBCQUEwQix3QkFBd0IsRUFBRSxFQUFFO0NBVXpELElBQU0sYUFBYSxVQUFVO0NBQzdCLElBQU0sYUFBYSxVQUFVO0FBQ2IsUUFBTztBQUNKLFdBQVU7Q0FDN0IsSUFBTSxjQUFjLFdBQVc7QUFDZCxTQUFRO0FBQ04sV0FBVTtBQUNQLGNBQWE7QUFDbEIsU0FBUTtBQUNULFFBQU87QUFDSCxZQUFXO0FBQ2IsVUFBUztBQUNWLFNBQVE7Q0FDekIsSUFBTSxZQUFZLFNBQVM7Q0FDM0IsSUFBTSxhQUFhLFVBQVU7QUFDSixXQUFVO0FBQ2pCLFVBQVM7Q0FDM0IsSUFBTSx5QkFBeUIsc0JBQXNCO0FBQzVCLGlCQUFnQjtBQUN2QixVQUFTO0FBQ1IsV0FBVTtBQUNiLFFBQU87QUFDUCxRQUFPO0FBQ0YsYUFBWTtBQUNoQixTQUFRO0NBQ3pCLElBQU0sY0FBYyxXQUFXO0NBQy9CLElBQU0sV0FBVyxRQUFRO0FBQ0YsZUFBYztBQUNqQixZQUFXO0FBQ1gsWUFBVztBQUNWLGFBQVk7QUFDWixhQUFZO0FBQ1YsWUFBVztBQUNiLGFBQVk7OztDQ2hsSGpDLElBQWEsZ0JBQWdCO0VBRTNCLGVBQWU7RUFFZixjQUFjO0VBQ2QsaUJBQWlCO0VBRWpCLGFBQWE7RUFFYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2pCO0FBMkg0Qix3QkFBcUIsUUFBUTtFQW5EeEIsV0FBUztHQUN6QyxNQUFNLFlBQVUsY0FBYyxjQUFjO0dBQzVDLE1BQU0sV0FBUztJQUNiLElBQUksWUFBVTtJQUNkLE1BQU0sWUFBVTtJQUNoQixhQUFhLFlBQVU7SUFDdkIsWUFBWSxZQUFVLENBQUMsVUFBVTtJQUNqQyxPQUFPLFlBQVU7SUFDakIsVUFBVSxVQUFRLFlBQVUsQ0FBQztJQUM3QixPQUFPLGFBQVc7SUFDbEIsS0FBSyxZQUFVLENBQUMsS0FBSyxDQUFDLFVBQVU7SUFDakMsQ0FBQztHQUNILENBQUM7RUFFK0IsV0FBUyxFQUN4QyxNQUFNLFlBQVUsY0FBYyxhQUFhLEVBQzVDLENBQUM7RUFFa0MsV0FBUztHQUMzQyxNQUFNLFlBQVUsY0FBYyxnQkFBZ0I7R0FDOUMsVUFBVSxXQUFTO0lBQ2pCLFNBQVMsYUFBVyxDQUFDLFVBQVU7SUFDL0IsT0FBTyxXQUFTO0tBQ2QsbUJBQW1CLFVBQVEsWUFBVSxDQUFDLENBQUMsVUFBVTtLQUNqRCxtQkFBbUIsVUFBUSxZQUFVLENBQUMsQ0FBQyxVQUFVO0tBQ2pELG1CQUFtQixVQUFRLFlBQVUsQ0FBQyxDQUFDLFVBQVU7S0FDakQsbUJBQW1CLFVBQVEsWUFBVSxDQUFDLENBQUMsVUFBVTtLQUNqRCxTQUFTLFdBQVM7TUFDaEIsVUFBVSxhQUFXLENBQUMsVUFBVTtNQUNoQyxVQUFVLGFBQVcsQ0FBQyxVQUFVO01BQ2hDLFVBQVUsYUFBVyxDQUFDLFVBQVU7TUFDaEMsV0FBVyxhQUFXLENBQUMsVUFBVTtNQUNsQyxDQUFDLENBQUMsVUFBVTtLQUNkLENBQUMsQ0FBQyxVQUFVO0lBQ2QsQ0FBQztHQUNILENBQUM7RUFFOEIsV0FBUyxFQUN2QyxNQUFNLFlBQVUsY0FBYyxZQUFZLEVBQzNDLENBQUM7RUFFNEIsV0FBUyxFQUNyQyxNQUFNLFlBQVUsY0FBYyxVQUFVLEVBQ3pDLENBQUM7RUFFaUMsV0FBUztHQUMxQyxNQUFNLFlBQVUsY0FBYyxlQUFlO0dBQzdDLEtBQUssWUFBVSxnQkFBZ0I7R0FDL0IsUUFBUSxZQUFVLENBQUMsVUFBVTtHQUM5QixDQUFDO0VBU0QsQ0FBQzs7O0NLdElGLElBQWEsVUFBd0M7RUFDbkQsVUpaMEM7R0FDMUMsSUFBSTtHQUNKLE1BQU07R0FDTixhQUFhO0dBQ2IsU0FBUztHQUNULFNBQVM7R0FDVCxRQUFRO0dBRVIsVUFBVTtJQUNSLFVBQVU7S0FDUjtLQUFZO0tBQVE7S0FBVTtLQUFVO0tBQVk7S0FBYTtLQUFRO0tBQ3pFO0tBQVk7S0FBYztLQUFjO0tBQU87S0FBVztLQUMxRDtLQUFlO0tBQWE7S0FBVztLQUN2QztLQUFTO0tBQVM7S0FBUztLQUFXO0tBQVc7S0FBVTtLQUMzRDtLQUFZO0tBQVU7S0FBUztLQUFlO0tBQWE7S0FDM0Q7S0FBYztLQUFrQjtLQUFPO0tBQWU7S0FDdEQ7S0FBYTtLQUFZO0tBQVk7S0FDckM7S0FBYTtLQUFjO0tBQVk7S0FDdkM7S0FBTztLQUFZO0tBQVM7S0FBYTtLQUFZO0tBQVk7S0FDakU7S0FBUztLQUFlO0tBQ3hCO0tBQU87S0FBUztLQUFPO0tBQ3hCO0lBQ0QsVUFBVTtLQUNSO0tBQU87S0FBWTtLQUFTO0tBQVk7S0FBWTtLQUFZO0tBQ2hFO0tBQVk7S0FBWTtLQUFhO0tBQVk7S0FBTztLQUFTO0tBQ2pFO0tBQWM7S0FBYTtLQUFZO0tBQ3ZDO0tBQWtCO0tBQW1CO0tBQ3JDO0tBQVk7S0FBYTtLQUN6QjtLQUFpQjtLQUFrQjtLQUNuQztLQUFhO0tBQWU7S0FBa0I7S0FDOUM7S0FBZ0I7S0FBa0I7S0FDbkM7SUFDRCxPQUFPO0tBQ0w7S0FDQTtLQUNBO0tBQ0E7S0FDQTtLQUNBO0tBQ0Q7SUFDRjtHQUVELFNBQVM7SUFDUCxTQUFTO0lBQ1QsWUFBWTtJQUNiO0dBQ0Y7RUlqQ0MsVUhkMEM7R0FDMUMsSUFBSTtHQUNKLE1BQU07R0FDTixhQUFhO0dBQ2IsU0FBUztHQUNULFNBQVM7R0FDVCxRQUFRO0dBRVIsVUFBVTtJQUNSLFVBQVU7S0FDUjtLQUFXO0tBQVk7S0FBYTtLQUFjO0tBQVk7S0FDOUQ7S0FBaUI7S0FBa0I7S0FBeUI7S0FDNUQ7S0FBUztLQUFXO0tBQVE7S0FBVTtLQUFRO0tBQVc7S0FDekQ7S0FBYztLQUFlO0tBQVk7S0FBYTtLQUN0RDtLQUFRO0tBQWE7S0FBYztLQUFlO0tBQ2xEO0tBQVE7S0FBVTtLQUFXO0tBQVU7S0FDdkM7S0FBVztLQUFjO0tBQWU7S0FDeEM7S0FBVztLQUFVO0tBQVU7S0FBVztLQUMxQztLQUE2QjtLQUFZO0tBQ3pDO0tBQVk7S0FBVTtLQUFhO0tBQ25DO0tBQVM7S0FBWTtLQUFjO0tBQ25DO0tBQXFCO0tBQWM7S0FDbkM7S0FBaUI7S0FBa0I7S0FDbkM7S0FBWTtLQUFhO0tBQ3pCO0tBQWM7S0FBaUI7S0FDL0I7S0FBa0I7S0FBa0I7S0FDckM7SUFDRCxVQUFVLEVBQUU7SUFDWixPQUFPO0tBQ0w7S0FDQTtLQUNBO0tBQ0E7S0FDQTtLQUNEO0lBQ0Y7R0FFRCxTQUFTO0lBQ1AsU0FBUztJQUNULFlBQVk7SUFDYjtHQUNGO0VHMUJDLFVGZjBDO0dBQzFDLElBQUk7R0FDSixNQUFNO0dBQ04sYUFBYTtHQUNiLFNBQVM7R0FDVCxTQUFTO0dBQ1QsUUFBUTtHQUVSLFVBQVU7SUFDUixVQUFVO0tBQ1I7S0FBVztLQUFZO0tBQVM7S0FDaEM7S0FBVTtLQUFvQjtLQUFtQjtLQUNqRDtLQUFTO0tBQWM7S0FBbUI7S0FDMUM7S0FBUTtLQUFTO0tBQVU7S0FBWTtLQUFVO0tBQ2pEO0tBQWE7S0FBVTtLQUN2QjtLQUFZO0tBQWM7S0FDMUI7S0FBVTtLQUFpQjtLQUFpQjtLQUM1QztLQUFjO0tBQVk7S0FBaUI7S0FDM0M7S0FBaUI7S0FBb0I7S0FDckM7S0FBaUI7S0FBZTtLQUNoQztLQUFhO0tBQWE7S0FDMUI7S0FBbUI7S0FDcEI7SUFDRCxVQUFVLEVBQUU7SUFDWixPQUFPO0tBQ0w7S0FDQTtLQUNBO0tBQ0E7S0FDQTtLQUNBO0tBQ0Q7SUFDRjtHQUVELFNBQVM7SUFDUCxTQUFTO0lBQ1QsWUFBWTtJQUNiO0dBQ0Y7RUV0QkMsV0RoQjJDO0dBQzNDLElBQUk7R0FDSixNQUFNO0dBQ04sYUFBYTtHQUNiLFNBQVM7R0FDVCxTQUFTO0dBQ1QsUUFBUTtHQUVSLFVBQVU7SUFDUixVQUFVO0tBQ1I7S0FBbUI7S0FBbUI7S0FBYztLQUNwRDtLQUFnQjtLQUFnQjtLQUNoQztLQUFrQjtLQUFZO0tBQVc7S0FDekM7S0FBVTtLQUFXO0tBQWdDO0tBQ3JEO0tBQW9CO0tBQVk7S0FDaEM7S0FBbUI7S0FBZTtLQUNsQztLQUFlO0tBQW1CO0tBQ2xDO0tBQVc7S0FBYztLQUFXO0tBQWM7S0FDbEQ7S0FBdUI7S0FBZTtLQUN0QztLQUFnQjtLQUFnQjtLQUNoQztLQUFpQjtLQUFpQjtLQUNsQztLQUFRO0tBQVM7S0FBYTtLQUM5QjtLQUFTO0tBQVU7S0FBYztLQUNqQztLQUFlO0tBQWU7S0FDOUI7S0FBc0I7S0FBaUI7S0FDdkM7S0FBc0I7S0FBa0I7S0FBaUI7S0FBa0I7S0FDM0U7S0FBZ0I7S0FBZTtLQUFtQjtLQUNsRDtLQUFzQjtLQUN0QjtLQUNBO0tBQW9CO0tBQW9CO0tBQ3hDO0tBQTJCO0tBQzNCO0tBQWU7S0FBZTtLQUM5QjtLQUFZO0tBQWM7S0FDMUI7S0FBa0I7S0FDbEI7S0FBZ0I7S0FBZTtLQUMvQjtLQUFvQjtLQUNwQjtLQUFjO0tBQVk7S0FBVTtLQUNwQztLQUFvQjtLQUNwQjtLQUFxQjtLQUNyQjtLQUFZO0tBQ2I7SUFDRCxVQUFVO0tBQ1I7S0FBWTtLQUFXO0tBQ3ZCO0tBQWE7S0FDYjtLQUFZO0tBQ1o7S0FBYTtLQUNiO0tBQVM7S0FDVDtLQUNEO0lBQ0QsT0FBTztLQUNMO0tBQ0E7S0FDQTtLQUNBO0tBQ0E7S0FDQTtLQUNBO0tBQ0E7S0FDQTtLQUNEO0lBQ0Y7R0FFRCxTQUFTO0lBQ1AsU0FBUztJQUNULFlBQVk7SUFDYjtHQUNGO0VDakRBO0NBRUQsU0FBZ0IsVUFBVSxJQUFzQztBQUM5RCxTQUFPLFFBQVE7O0NBb0NqQixTQUFnQixvQkFBb0IsT0FBZSxVQUEyQjtFQUM1RSxNQUFNLFNBQVMsUUFBUTtBQUN2QixNQUFJLENBQUMsT0FBUSxRQUFPO0VBRXBCLE1BQU0sYUFBYSxNQUFNLGFBQWE7QUFFdEMsTUFBSSxPQUFPLFNBQVM7UUFDYixNQUFNLE1BQU0sT0FBTyxTQUFTLFNBQy9CLEtBQUksV0FBVyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQ3ZDLFFBQU87O0FBS2IsTUFBSSxPQUFPLFNBQVMsTUFDbEIsTUFBSyxNQUFNLFdBQVcsT0FBTyxTQUFTLE1BQ3BDLEtBQUk7QUFFRixPQURjLElBQUksT0FBTyxTQUFTLElBQUksQ0FDNUIsS0FBSyxNQUFNLENBQ25CLFFBQU87VUFFSDtBQUNOLFdBQVEsS0FBSyw4QkFBOEIsU0FBUyxJQUFJLFVBQVU7O0FBS3hFLFNBQU87O0NBR1QsU0FBZ0IsbUJBQW1CLFlBQWdDLFVBQTJCO0VBQzVGLE1BQU0sU0FBUyxRQUFRO0FBQ3ZCLE1BQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sU0FBUyxTQUFVLFFBQU87RUFFaEUsTUFBTSxjQUFjLFdBQVcsYUFBYTtBQUU1QyxPQUFLLE1BQU0sUUFBUSxPQUFPLFNBQVMsU0FDakMsS0FBSSxZQUFZLFNBQVMsS0FBSyxhQUFhLENBQUMsQ0FDMUMsUUFBTztBQUlYLFNBQU87Ozs7Ozs7O0NDdEZULFNBQWdCLGdCQUFnQixNQUFtQixPQUErQztFQUNoRyxNQUFNLGFBQWEsS0FBSyxNQUFNLGFBQWE7RUFDM0MsTUFBTSxVQUFVLE1BQU07QUFLdEIsT0FBSyxNQUFNLFlBRk87R0FBQztHQUFZO0dBQWE7R0FBWTtHQUFXLENBR2pFLEtBQUksUUFBUSxXQUFXO0FBRXJCLE9BQUksb0JBQW9CLEtBQUssT0FBTyxTQUFTLEVBQUU7SUFDN0MsTUFBTSxTQUFTLFVBQVUsU0FBUztBQUNsQyxXQUFPO0tBQ0wsVUFBVSxRQUFRLFFBQVEsV0FBVztLQUNyQyxZQUFZLFFBQVEsUUFBUSxjQUFjO0tBQzFDLFFBQVEsVUFBVTtLQUNuQjs7QUFJSCxPQUFJLG1CQUFtQixLQUFLLFlBQVksU0FBUyxFQUFFO0lBQ2pELE1BQU0sU0FBUyxVQUFVLFNBQVM7QUFDbEMsV0FBTztLQUNMLFVBQVUsUUFBUSxRQUFRLFdBQVc7S0FDckMsYUFBYSxRQUFRLFFBQVEsY0FBYyxPQUFRO0tBQ25ELFFBQVEsVUFBVSxTQUFTO0tBQzVCOzs7QUFNUCxNQUFJLEtBQUssY0FBYyxNQUFNLGtCQUFrQixTQUFTLEdBQUc7R0FDekQsTUFBTSxjQUFjLEtBQUssV0FBVyxhQUFhO0FBQ2pELE9BQUksTUFBTSxrQkFBa0IsTUFBSyxTQUFRLFlBQVksU0FBUyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQ2hGLFFBQU87SUFBRSxVQUFVO0lBQVksWUFBWTtJQUFLLFFBQVE7SUFBcUI7O0FBS2pGLE1BQUksTUFBTSxrQkFBa0IsU0FBUztPQUMvQixNQUFNLGtCQUFrQixNQUFLLFlBQVcsV0FBVyxTQUFTLFFBQVEsYUFBYSxDQUFDLENBQUMsQ0FDckYsUUFBTztJQUFFLFVBQVU7SUFBWSxZQUFZO0lBQUssUUFBUTtJQUFxQjs7QUFLakYsTUFBSSxLQUFLLGNBQWMsTUFBTSxrQkFBa0IsU0FBUyxHQUFHO0dBQ3pELE1BQU0sY0FBYyxLQUFLLFdBQVcsYUFBYTtBQUNqRCxPQUFJLE1BQU0sa0JBQWtCLE1BQUssU0FBUSxZQUFZLFNBQVMsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUNoRixRQUFPO0lBQUUsVUFBVTtJQUFRLFlBQVk7SUFBSyxRQUFRO0lBQXFCOztBQUk3RSxNQUFJLE1BQU0sa0JBQWtCLFNBQVM7T0FDL0IsTUFBTSxrQkFBa0IsTUFBSyxZQUFXLFdBQVcsU0FBUyxRQUFRLGFBQWEsQ0FBQyxDQUFDLENBQ3JGLFFBQU87SUFBRSxVQUFVO0lBQVEsWUFBWTtJQUFLLFFBQVE7SUFBcUI7O0FBSTdFLFNBQU87Ozs7OztDQVdULGVBQXNCLGdCQUNwQixNQUNBLFVBRytCO0VBRS9CLE1BQU0sY0FBYyxnQkFBZ0IsTUFBTSxTQUFTLE1BQU07QUFDekQsTUFBSSxZQUNGLFFBQU87QUFJVCxTQUFPO0dBQ0wsVUFBVTtHQUNWLFlBQVk7R0FDWixRQUFRO0dBQ1Q7Ozs7Q0MzR0gsSUFBYUMsWUFBVSxXQUFXLFNBQVMsU0FBUyxLQUNoRCxXQUFXLFVBQ1gsV0FBVzs7O0NDRGYsSUFBTSw2QkFBYSxJQUFJLE1BQU0sNEJBQTRCO0NBRXpELElBQUksY0FBb0QsU0FBVSxTQUFTLFlBQVksR0FBRyxXQUFXO0VBQ2pHLFNBQVMsTUFBTSxPQUFPO0FBQUUsVUFBTyxpQkFBaUIsSUFBSSxRQUFRLElBQUksRUFBRSxTQUFVLFNBQVM7QUFBRSxZQUFRLE1BQU07S0FBSTs7QUFDekcsU0FBTyxLQUFLLE1BQU0sSUFBSSxVQUFVLFNBQVUsU0FBUyxRQUFRO0dBQ3ZELFNBQVMsVUFBVSxPQUFPO0FBQUUsUUFBSTtBQUFFLFVBQUssVUFBVSxLQUFLLE1BQU0sQ0FBQzthQUFXLEdBQUc7QUFBRSxZQUFPLEVBQUU7OztHQUN0RixTQUFTLFNBQVMsT0FBTztBQUFFLFFBQUk7QUFBRSxVQUFLLFVBQVUsU0FBUyxNQUFNLENBQUM7YUFBVyxHQUFHO0FBQUUsWUFBTyxFQUFFOzs7R0FDekYsU0FBUyxLQUFLLFFBQVE7QUFBRSxXQUFPLE9BQU8sUUFBUSxPQUFPLE1BQU0sR0FBRyxNQUFNLE9BQU8sTUFBTSxDQUFDLEtBQUssV0FBVyxTQUFTOztBQUMzRyxTQUFNLFlBQVksVUFBVSxNQUFNLFNBQVMsY0FBYyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7SUFDdkU7O0NBRU4sSUFBTSxZQUFOLE1BQWdCO0VBQ1osWUFBWSxRQUFRLGVBQWUsWUFBWTtBQUMzQyxRQUFLLFNBQVM7QUFDZCxRQUFLLGVBQWU7QUFDcEIsUUFBSyxTQUFTLEVBQUU7QUFDaEIsUUFBSyxtQkFBbUIsRUFBRTs7RUFFOUIsUUFBUSxTQUFTLEdBQUcsV0FBVyxHQUFHO0FBQzlCLE9BQUksVUFBVSxFQUNWLE9BQU0sSUFBSSxNQUFNLGtCQUFrQixPQUFPLG9CQUFvQjtBQUNqRSxVQUFPLElBQUksU0FBUyxTQUFTLFdBQVc7SUFDcEMsTUFBTSxPQUFPO0tBQUU7S0FBUztLQUFRO0tBQVE7S0FBVTtJQUNsRCxNQUFNLElBQUksaUJBQWlCLEtBQUssU0FBUyxVQUFVLFlBQVksTUFBTSxTQUFTO0FBQzlFLFFBQUksTUFBTSxNQUFNLFVBQVUsS0FBSyxPQUUzQixNQUFLLGNBQWMsS0FBSztRQUd4QixNQUFLLE9BQU8sT0FBTyxJQUFJLEdBQUcsR0FBRyxLQUFLO0tBRXhDOztFQUVOLGFBQWEsWUFBWTtBQUNyQixVQUFPLFlBQVksTUFBTSxXQUFXLEtBQUssR0FBRyxXQUFXLFVBQVUsU0FBUyxHQUFHLFdBQVcsR0FBRztJQUN2RixNQUFNLENBQUMsT0FBTyxXQUFXLE1BQU0sS0FBSyxRQUFRLFFBQVEsU0FBUztBQUM3RCxRQUFJO0FBQ0EsWUFBTyxNQUFNLFNBQVMsTUFBTTtjQUV4QjtBQUNKLGNBQVM7O0tBRWY7O0VBRU4sY0FBYyxTQUFTLEdBQUcsV0FBVyxHQUFHO0FBQ3BDLE9BQUksVUFBVSxFQUNWLE9BQU0sSUFBSSxNQUFNLGtCQUFrQixPQUFPLG9CQUFvQjtBQUNqRSxPQUFJLEtBQUssc0JBQXNCLFFBQVEsU0FBUyxDQUM1QyxRQUFPLFFBQVEsU0FBUztPQUd4QixRQUFPLElBQUksU0FBUyxZQUFZO0FBQzVCLFFBQUksQ0FBQyxLQUFLLGlCQUFpQixTQUFTLEdBQ2hDLE1BQUssaUJBQWlCLFNBQVMsS0FBSyxFQUFFO0FBQzFDLGlCQUFhLEtBQUssaUJBQWlCLFNBQVMsSUFBSTtLQUFFO0tBQVM7S0FBVSxDQUFDO0tBQ3hFOztFQUdWLFdBQVc7QUFDUCxVQUFPLEtBQUssVUFBVTs7RUFFMUIsV0FBVztBQUNQLFVBQU8sS0FBSzs7RUFFaEIsU0FBUyxPQUFPO0FBQ1osUUFBSyxTQUFTO0FBQ2QsUUFBSyxnQkFBZ0I7O0VBRXpCLFFBQVEsU0FBUyxHQUFHO0FBQ2hCLE9BQUksVUFBVSxFQUNWLE9BQU0sSUFBSSxNQUFNLGtCQUFrQixPQUFPLG9CQUFvQjtBQUNqRSxRQUFLLFVBQVU7QUFDZixRQUFLLGdCQUFnQjs7RUFFekIsU0FBUztBQUNMLFFBQUssT0FBTyxTQUFTLFVBQVUsTUFBTSxPQUFPLEtBQUssYUFBYSxDQUFDO0FBQy9ELFFBQUssU0FBUyxFQUFFOztFQUVwQixpQkFBaUI7QUFDYixRQUFLLHFCQUFxQjtBQUMxQixVQUFPLEtBQUssT0FBTyxTQUFTLEtBQUssS0FBSyxPQUFPLEdBQUcsVUFBVSxLQUFLLFFBQVE7QUFDbkUsU0FBSyxjQUFjLEtBQUssT0FBTyxPQUFPLENBQUM7QUFDdkMsU0FBSyxxQkFBcUI7OztFQUdsQyxjQUFjLE1BQU07R0FDaEIsTUFBTSxnQkFBZ0IsS0FBSztBQUMzQixRQUFLLFVBQVUsS0FBSztBQUNwQixRQUFLLFFBQVEsQ0FBQyxlQUFlLEtBQUssYUFBYSxLQUFLLE9BQU8sQ0FBQyxDQUFDOztFQUVqRSxhQUFhLFFBQVE7R0FDakIsSUFBSSxTQUFTO0FBQ2IsZ0JBQWE7QUFDVCxRQUFJLE9BQ0E7QUFDSixhQUFTO0FBQ1QsU0FBSyxRQUFRLE9BQU87OztFQUc1QixzQkFBc0I7QUFDbEIsT0FBSSxLQUFLLE9BQU8sV0FBVyxFQUN2QixNQUFLLElBQUksU0FBUyxLQUFLLFFBQVEsU0FBUyxHQUFHLFVBQVU7SUFDakQsTUFBTSxVQUFVLEtBQUssaUJBQWlCLFNBQVM7QUFDL0MsUUFBSSxDQUFDLFFBQ0Q7QUFDSixZQUFRLFNBQVMsV0FBVyxPQUFPLFNBQVMsQ0FBQztBQUM3QyxTQUFLLGlCQUFpQixTQUFTLEtBQUssRUFBRTs7UUFHekM7SUFDRCxNQUFNLGlCQUFpQixLQUFLLE9BQU8sR0FBRztBQUN0QyxTQUFLLElBQUksU0FBUyxLQUFLLFFBQVEsU0FBUyxHQUFHLFVBQVU7S0FDakQsTUFBTSxVQUFVLEtBQUssaUJBQWlCLFNBQVM7QUFDL0MsU0FBSSxDQUFDLFFBQ0Q7S0FDSixNQUFNLElBQUksUUFBUSxXQUFXLFdBQVcsT0FBTyxZQUFZLGVBQWU7QUFDMUUsTUFBQyxNQUFNLEtBQUssVUFBVSxRQUFRLE9BQU8sR0FBRyxFQUFFLEVBQ3JDLFVBQVMsV0FBVSxPQUFPLFNBQVMsRUFBRTs7OztFQUl0RCxzQkFBc0IsUUFBUSxVQUFVO0FBQ3BDLFdBQVEsS0FBSyxPQUFPLFdBQVcsS0FBSyxLQUFLLE9BQU8sR0FBRyxXQUFXLGFBQzFELFVBQVUsS0FBSzs7O0NBRzNCLFNBQVMsYUFBYSxHQUFHLEdBQUc7RUFDeEIsTUFBTSxJQUFJLGlCQUFpQixJQUFJLFVBQVUsRUFBRSxZQUFZLE1BQU0sU0FBUztBQUN0RSxJQUFFLE9BQU8sSUFBSSxHQUFHLEdBQUcsRUFBRTs7Q0FFekIsU0FBUyxpQkFBaUIsR0FBRyxXQUFXO0FBQ3BDLE9BQUssSUFBSSxJQUFJLEVBQUUsU0FBUyxHQUFHLEtBQUssR0FBRyxJQUMvQixLQUFJLFVBQVUsRUFBRSxHQUFHLENBQ2YsUUFBTztBQUdmLFNBQU87O0NBR1gsSUFBSSxjQUFvRCxTQUFVLFNBQVMsWUFBWSxHQUFHLFdBQVc7RUFDakcsU0FBUyxNQUFNLE9BQU87QUFBRSxVQUFPLGlCQUFpQixJQUFJLFFBQVEsSUFBSSxFQUFFLFNBQVUsU0FBUztBQUFFLFlBQVEsTUFBTTtLQUFJOztBQUN6RyxTQUFPLEtBQUssTUFBTSxJQUFJLFVBQVUsU0FBVSxTQUFTLFFBQVE7R0FDdkQsU0FBUyxVQUFVLE9BQU87QUFBRSxRQUFJO0FBQUUsVUFBSyxVQUFVLEtBQUssTUFBTSxDQUFDO2FBQVcsR0FBRztBQUFFLFlBQU8sRUFBRTs7O0dBQ3RGLFNBQVMsU0FBUyxPQUFPO0FBQUUsUUFBSTtBQUFFLFVBQUssVUFBVSxTQUFTLE1BQU0sQ0FBQzthQUFXLEdBQUc7QUFBRSxZQUFPLEVBQUU7OztHQUN6RixTQUFTLEtBQUssUUFBUTtBQUFFLFdBQU8sT0FBTyxRQUFRLE9BQU8sTUFBTSxHQUFHLE1BQU0sT0FBTyxNQUFNLENBQUMsS0FBSyxXQUFXLFNBQVM7O0FBQzNHLFNBQU0sWUFBWSxVQUFVLE1BQU0sU0FBUyxjQUFjLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztJQUN2RTs7Q0FFTixJQUFNLFFBQU4sTUFBWTtFQUNSLFlBQVksYUFBYTtBQUNyQixRQUFLLGFBQWEsSUFBSSxVQUFVLEdBQUcsWUFBWTs7RUFFbkQsVUFBVTtBQUNOLFVBQU8sWUFBWSxNQUFNLFdBQVcsS0FBSyxHQUFHLFdBQVcsV0FBVyxHQUFHO0lBQ2pFLE1BQU0sR0FBRyxZQUFZLE1BQU0sS0FBSyxXQUFXLFFBQVEsR0FBRyxTQUFTO0FBQy9ELFdBQU87S0FDVDs7RUFFTixhQUFhLFVBQVUsV0FBVyxHQUFHO0FBQ2pDLFVBQU8sS0FBSyxXQUFXLG1CQUFtQixVQUFVLEVBQUUsR0FBRyxTQUFTOztFQUV0RSxXQUFXO0FBQ1AsVUFBTyxLQUFLLFdBQVcsVUFBVTs7RUFFckMsY0FBYyxXQUFXLEdBQUc7QUFDeEIsVUFBTyxLQUFLLFdBQVcsY0FBYyxHQUFHLFNBQVM7O0VBRXJELFVBQVU7QUFDTixPQUFJLEtBQUssV0FBVyxVQUFVLENBQzFCLE1BQUssV0FBVyxTQUFTOztFQUVqQyxTQUFTO0FBQ0wsVUFBTyxLQUFLLFdBQVcsUUFBUTs7Ozs7Q0M5S3ZDLElBQUksTUFBTSxPQUFPLFVBQVU7Q0FFM0IsU0FBZ0IsT0FBTyxLQUFLLEtBQUs7RUFDaEMsSUFBSSxNQUFNO0FBQ1YsTUFBSSxRQUFRLElBQUssUUFBTztBQUV4QixNQUFJLE9BQU8sUUFBUSxPQUFLLElBQUksaUJBQWlCLElBQUksYUFBYTtBQUM3RCxPQUFJLFNBQVMsS0FBTSxRQUFPLElBQUksU0FBUyxLQUFLLElBQUksU0FBUztBQUN6RCxPQUFJLFNBQVMsT0FBUSxRQUFPLElBQUksVUFBVSxLQUFLLElBQUksVUFBVTtBQUU3RCxPQUFJLFNBQVMsT0FBTztBQUNuQixTQUFLLE1BQUksSUFBSSxZQUFZLElBQUksT0FDNUIsUUFBTyxTQUFTLE9BQU8sSUFBSSxNQUFNLElBQUksS0FBSztBQUUzQyxXQUFPLFFBQVE7O0FBR2hCLE9BQUksQ0FBQyxRQUFRLE9BQU8sUUFBUSxVQUFVO0FBQ3JDLFVBQU07QUFDTixTQUFLLFFBQVEsS0FBSztBQUNqQixTQUFJLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUUsUUFBTztBQUNqRSxTQUFJLEVBQUUsUUFBUSxRQUFRLENBQUMsT0FBTyxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUUsUUFBTzs7QUFFN0QsV0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFdBQVc7OztBQUlyQyxTQUFPLFFBQVEsT0FBTyxRQUFROzs7Ozs7Ozs7O0NDaEIvQixJQUFNLFVBQVUsZUFBZTtDQUMvQixTQUFTLGdCQUFnQjtFQUN4QixNQUFNLFVBQVU7R0FDZixPQUFPLGFBQWEsUUFBUTtHQUM1QixTQUFTLGFBQWEsVUFBVTtHQUNoQyxNQUFNLGFBQWEsT0FBTztHQUMxQixTQUFTLGFBQWEsVUFBVTtHQUNoQztFQUNELE1BQU0sYUFBYSxTQUFTO0dBQzNCLE1BQU0sU0FBUyxRQUFRO0FBQ3ZCLE9BQUksVUFBVSxNQUFNO0lBQ25CLE1BQU0sWUFBWSxPQUFPLEtBQUssUUFBUSxDQUFDLEtBQUssS0FBSztBQUNqRCxVQUFNLE1BQU0saUJBQWlCLEtBQUssY0FBYyxZQUFZOztBQUU3RCxVQUFPOztFQUVSLE1BQU0sY0FBYyxRQUFRO0dBQzNCLE1BQU0sbUJBQW1CLElBQUksUUFBUSxJQUFJO0dBQ3pDLE1BQU0sYUFBYSxJQUFJLFVBQVUsR0FBRyxpQkFBaUI7R0FDckQsTUFBTSxZQUFZLElBQUksVUFBVSxtQkFBbUIsRUFBRTtBQUNyRCxPQUFJLGFBQWEsS0FBTSxPQUFNLE1BQU0sa0VBQWtFLElBQUksR0FBRztBQUM1RyxVQUFPO0lBQ047SUFDQTtJQUNBLFFBQVEsVUFBVSxXQUFXO0lBQzdCOztFQUVGLE1BQU0sY0FBYyxRQUFRLE1BQU07RUFDbEMsTUFBTSxhQUFhLFNBQVMsWUFBWTtHQUN2QyxNQUFNLFlBQVksRUFBRSxHQUFHLFNBQVM7QUFDaEMsVUFBTyxRQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxXQUFXO0FBQ2pELFFBQUksU0FBUyxLQUFNLFFBQU8sVUFBVTtRQUMvQixXQUFVLE9BQU87S0FDckI7QUFDRixVQUFPOztFQUVSLE1BQU0sc0JBQXNCLE9BQU8sYUFBYSxTQUFTLFlBQVk7RUFDckUsTUFBTSxnQkFBZ0IsZUFBZSxPQUFPLGVBQWUsWUFBWSxDQUFDLE1BQU0sUUFBUSxXQUFXLEdBQUcsYUFBYSxFQUFFO0VBQ25ILE1BQU0sVUFBVSxPQUFPLFFBQVEsV0FBVyxTQUFTO0FBQ2xELFVBQU8sbUJBQW1CLE1BQU0sT0FBTyxRQUFRLFVBQVUsRUFBRSxNQUFNLFlBQVksTUFBTSxhQUFhOztFQUVqRyxNQUFNLFVBQVUsT0FBTyxRQUFRLGNBQWM7R0FDNUMsTUFBTSxVQUFVLFdBQVcsVUFBVTtBQUNyQyxVQUFPLGFBQWEsTUFBTSxPQUFPLFFBQVEsUUFBUSxDQUFDOztFQUVuRCxNQUFNLFVBQVUsT0FBTyxRQUFRLFdBQVcsVUFBVTtBQUNuRCxTQUFNLE9BQU8sUUFBUSxXQUFXLFNBQVMsS0FBSzs7RUFFL0MsTUFBTSxVQUFVLE9BQU8sUUFBUSxXQUFXLGVBQWU7R0FDeEQsTUFBTSxVQUFVLFdBQVcsVUFBVTtHQUNyQyxNQUFNLGlCQUFpQixhQUFhLE1BQU0sT0FBTyxRQUFRLFFBQVEsQ0FBQztBQUNsRSxTQUFNLE9BQU8sUUFBUSxTQUFTLFVBQVUsZ0JBQWdCLFdBQVcsQ0FBQzs7RUFFckUsTUFBTSxhQUFhLE9BQU8sUUFBUSxXQUFXLFNBQVM7QUFDckQsU0FBTSxPQUFPLFdBQVcsVUFBVTtBQUNsQyxPQUFJLE1BQU0sWUFBWTtJQUNyQixNQUFNLFVBQVUsV0FBVyxVQUFVO0FBQ3JDLFVBQU0sT0FBTyxXQUFXLFFBQVE7OztFQUdsQyxNQUFNLGFBQWEsT0FBTyxRQUFRLFdBQVcsZUFBZTtHQUMzRCxNQUFNLFVBQVUsV0FBVyxVQUFVO0FBQ3JDLE9BQUksY0FBYyxLQUFNLE9BQU0sT0FBTyxXQUFXLFFBQVE7UUFDbkQ7SUFDSixNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sUUFBUSxRQUFRLENBQUM7QUFDN0QsS0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsVUFBVSxPQUFPLFVBQVUsT0FBTztBQUMvRCxVQUFNLE9BQU8sUUFBUSxTQUFTLFVBQVU7OztFQUcxQyxNQUFNLFNBQVMsUUFBUSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsR0FBRztBQUNwRSxTQUFPO0dBQ04sU0FBUyxPQUFPLEtBQUssU0FBUztJQUM3QixNQUFNLEVBQUUsUUFBUSxjQUFjLFdBQVcsSUFBSTtBQUM3QyxXQUFPLE1BQU0sUUFBUSxRQUFRLFdBQVcsS0FBSzs7R0FFOUMsVUFBVSxPQUFPLFNBQVM7SUFDekIsTUFBTSwrQkFBK0IsSUFBSSxLQUFLO0lBQzlDLE1BQU0sK0JBQStCLElBQUksS0FBSztJQUM5QyxNQUFNLGNBQWMsRUFBRTtBQUN0QixTQUFLLFNBQVMsUUFBUTtLQUNyQixJQUFJO0tBQ0osSUFBSTtBQUNKLFNBQUksT0FBTyxRQUFRLFNBQVUsVUFBUztjQUM3QixjQUFjLEtBQUs7QUFDM0IsZUFBUyxJQUFJO0FBQ2IsYUFBTyxFQUFFLFVBQVUsSUFBSSxVQUFVO1lBQzNCO0FBQ04sZUFBUyxJQUFJO0FBQ2IsYUFBTyxJQUFJOztBQUVaLGlCQUFZLEtBQUssT0FBTztLQUN4QixNQUFNLEVBQUUsWUFBWSxjQUFjLFdBQVcsT0FBTztLQUNwRCxNQUFNLFdBQVcsYUFBYSxJQUFJLFdBQVcsSUFBSSxFQUFFO0FBQ25ELGtCQUFhLElBQUksWUFBWSxTQUFTLE9BQU8sVUFBVSxDQUFDO0FBQ3hELGtCQUFhLElBQUksUUFBUSxLQUFLO01BQzdCO0lBQ0YsTUFBTSw2QkFBNkIsSUFBSSxLQUFLO0FBQzVDLFVBQU0sUUFBUSxJQUFJLE1BQU0sS0FBSyxhQUFhLFNBQVMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLFlBQVksVUFBVTtBQUN0RixNQUFDLE1BQU0sUUFBUSxZQUFZLFNBQVMsS0FBSyxFQUFFLFNBQVMsaUJBQWlCO01BQ3BFLE1BQU0sTUFBTSxHQUFHLFdBQVcsR0FBRyxhQUFhO01BQzFDLE1BQU0sT0FBTyxhQUFhLElBQUksSUFBSTtNQUNsQyxNQUFNLFFBQVEsbUJBQW1CLGFBQWEsT0FBTyxNQUFNLFlBQVksTUFBTSxhQUFhO0FBQzFGLGlCQUFXLElBQUksS0FBSyxNQUFNO09BQ3pCO01BQ0QsQ0FBQztBQUNILFdBQU8sWUFBWSxLQUFLLFNBQVM7S0FDaEM7S0FDQSxPQUFPLFdBQVcsSUFBSSxJQUFJO0tBQzFCLEVBQUU7O0dBRUosU0FBUyxPQUFPLFFBQVE7SUFDdkIsTUFBTSxFQUFFLFFBQVEsY0FBYyxXQUFXLElBQUk7QUFDN0MsV0FBTyxNQUFNLFFBQVEsUUFBUSxVQUFVOztHQUV4QyxVQUFVLE9BQU8sU0FBUztJQUN6QixNQUFNLE9BQU8sS0FBSyxLQUFLLFFBQVE7S0FDOUIsTUFBTSxNQUFNLE9BQU8sUUFBUSxXQUFXLE1BQU0sSUFBSTtLQUNoRCxNQUFNLEVBQUUsWUFBWSxjQUFjLFdBQVcsSUFBSTtBQUNqRCxZQUFPO01BQ047TUFDQTtNQUNBO01BQ0EsZUFBZSxXQUFXLFVBQVU7TUFDcEM7TUFDQTtJQUNGLE1BQU0sMEJBQTBCLEtBQUssUUFBUSxLQUFLLFFBQVE7QUFDekQsU0FBSSxJQUFJLGdCQUFnQixFQUFFO0FBQzFCLFNBQUksSUFBSSxZQUFZLEtBQUssSUFBSTtBQUM3QixZQUFPO09BQ0wsRUFBRSxDQUFDO0lBQ04sTUFBTSxhQUFhLEVBQUU7QUFDckIsVUFBTSxRQUFRLElBQUksT0FBTyxRQUFRLHdCQUF3QixDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sVUFBVTtLQUNyRixNQUFNLFVBQVUsTUFBTUMsVUFBUSxRQUFRLE1BQU0sSUFBSSxLQUFLLEtBQUssUUFBUSxJQUFJLGNBQWMsQ0FBQztBQUNyRixVQUFLLFNBQVMsUUFBUTtBQUNyQixpQkFBVyxJQUFJLE9BQU8sUUFBUSxJQUFJLGtCQUFrQixFQUFFO09BQ3JEO01BQ0QsQ0FBQztBQUNILFdBQU8sS0FBSyxLQUFLLFNBQVM7S0FDekIsS0FBSyxJQUFJO0tBQ1QsTUFBTSxXQUFXLElBQUk7S0FDckIsRUFBRTs7R0FFSixTQUFTLE9BQU8sS0FBSyxVQUFVO0lBQzlCLE1BQU0sRUFBRSxRQUFRLGNBQWMsV0FBVyxJQUFJO0FBQzdDLFVBQU0sUUFBUSxRQUFRLFdBQVcsTUFBTTs7R0FFeEMsVUFBVSxPQUFPLFVBQVU7SUFDMUIsTUFBTSxvQkFBb0IsRUFBRTtBQUM1QixVQUFNLFNBQVMsU0FBUztLQUN2QixNQUFNLEVBQUUsWUFBWSxjQUFjLFdBQVcsU0FBUyxPQUFPLEtBQUssTUFBTSxLQUFLLEtBQUssSUFBSTtBQUN0Rix1QkFBa0IsZ0JBQWdCLEVBQUU7QUFDcEMsdUJBQWtCLFlBQVksS0FBSztNQUNsQyxLQUFLO01BQ0wsT0FBTyxLQUFLO01BQ1osQ0FBQztNQUNEO0FBQ0YsVUFBTSxRQUFRLElBQUksT0FBTyxRQUFRLGtCQUFrQixDQUFDLElBQUksT0FBTyxDQUFDLFlBQVksWUFBWTtBQUN2RixXQUFNLFVBQVUsV0FBVyxDQUFDLFNBQVMsT0FBTztNQUMzQyxDQUFDOztHQUVKLFNBQVMsT0FBTyxLQUFLLGVBQWU7SUFDbkMsTUFBTSxFQUFFLFFBQVEsY0FBYyxXQUFXLElBQUk7QUFDN0MsVUFBTSxRQUFRLFFBQVEsV0FBVyxXQUFXOztHQUU3QyxVQUFVLE9BQU8sVUFBVTtJQUMxQixNQUFNLHVCQUF1QixFQUFFO0FBQy9CLFVBQU0sU0FBUyxTQUFTO0tBQ3ZCLE1BQU0sRUFBRSxZQUFZLGNBQWMsV0FBVyxTQUFTLE9BQU8sS0FBSyxNQUFNLEtBQUssS0FBSyxJQUFJO0FBQ3RGLDBCQUFxQixnQkFBZ0IsRUFBRTtBQUN2QywwQkFBcUIsWUFBWSxLQUFLO01BQ3JDLEtBQUs7TUFDTCxZQUFZLEtBQUs7TUFDakIsQ0FBQztNQUNEO0FBQ0YsVUFBTSxRQUFRLElBQUksT0FBTyxRQUFRLHFCQUFxQixDQUFDLElBQUksT0FBTyxDQUFDLGFBQWEsYUFBYTtLQUM1RixNQUFNLFNBQVMsVUFBVSxZQUFZO0tBQ3JDLE1BQU0sV0FBVyxRQUFRLEtBQUssRUFBRSxVQUFVLFdBQVcsSUFBSSxDQUFDO0tBQzFELE1BQU0sZ0JBQWdCLE1BQU0sT0FBTyxTQUFTLFNBQVM7S0FDckQsTUFBTSxrQkFBa0IsT0FBTyxZQUFZLGNBQWMsS0FBSyxFQUFFLEtBQUssWUFBWSxDQUFDLEtBQUssYUFBYSxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzdHLE1BQU0sY0FBYyxRQUFRLEtBQUssRUFBRSxLQUFLLGlCQUFpQjtNQUN4RCxNQUFNLFVBQVUsV0FBVyxJQUFJO0FBQy9CLGFBQU87T0FDTixLQUFLO09BQ0wsT0FBTyxVQUFVLGdCQUFnQixZQUFZLEVBQUUsRUFBRSxXQUFXO09BQzVEO09BQ0E7QUFDRixXQUFNLE9BQU8sU0FBUyxZQUFZO01BQ2pDLENBQUM7O0dBRUosWUFBWSxPQUFPLEtBQUssU0FBUztJQUNoQyxNQUFNLEVBQUUsUUFBUSxjQUFjLFdBQVcsSUFBSTtBQUM3QyxVQUFNLFdBQVcsUUFBUSxXQUFXLEtBQUs7O0dBRTFDLGFBQWEsT0FBTyxTQUFTO0lBQzVCLE1BQU0sZ0JBQWdCLEVBQUU7QUFDeEIsU0FBSyxTQUFTLFFBQVE7S0FDckIsSUFBSTtLQUNKLElBQUk7QUFDSixTQUFJLE9BQU8sUUFBUSxTQUFVLFVBQVM7Y0FDN0IsY0FBYyxJQUFLLFVBQVMsSUFBSTtjQUNoQyxVQUFVLEtBQUs7QUFDdkIsZUFBUyxJQUFJLEtBQUs7QUFDbEIsYUFBTyxJQUFJO1lBQ0w7QUFDTixlQUFTLElBQUk7QUFDYixhQUFPLElBQUk7O0tBRVosTUFBTSxFQUFFLFlBQVksY0FBYyxXQUFXLE9BQU87QUFDcEQsbUJBQWMsZ0JBQWdCLEVBQUU7QUFDaEMsbUJBQWMsWUFBWSxLQUFLLFVBQVU7QUFDekMsU0FBSSxNQUFNLFdBQVksZUFBYyxZQUFZLEtBQUssV0FBVyxVQUFVLENBQUM7TUFDMUU7QUFDRixVQUFNLFFBQVEsSUFBSSxPQUFPLFFBQVEsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLFlBQVksVUFBVTtBQUNqRixXQUFNLFVBQVUsV0FBVyxDQUFDLFlBQVksS0FBSztNQUM1QyxDQUFDOztHQUVKLE9BQU8sT0FBTyxTQUFTO0FBQ3RCLFVBQU0sVUFBVSxLQUFLLENBQUMsT0FBTzs7R0FFOUIsWUFBWSxPQUFPLEtBQUssZUFBZTtJQUN0QyxNQUFNLEVBQUUsUUFBUSxjQUFjLFdBQVcsSUFBSTtBQUM3QyxVQUFNLFdBQVcsUUFBUSxXQUFXLFdBQVc7O0dBRWhELFVBQVUsT0FBTyxNQUFNLFNBQVM7SUFDL0IsTUFBTSxPQUFPLE1BQU0sVUFBVSxLQUFLLENBQUMsVUFBVTtBQUM3QyxVQUFNLGFBQWEsU0FBUyxRQUFRO0FBQ25DLFlBQU8sS0FBSztBQUNaLFlBQU8sS0FBSyxXQUFXLElBQUk7TUFDMUI7QUFDRixXQUFPOztHQUVSLGlCQUFpQixPQUFPLE1BQU0sU0FBUztBQUN0QyxVQUFNLFVBQVUsS0FBSyxDQUFDLGdCQUFnQixLQUFLOztHQUU1QyxRQUFRLEtBQUssT0FBTztJQUNuQixNQUFNLEVBQUUsUUFBUSxjQUFjLFdBQVcsSUFBSTtBQUM3QyxXQUFPLE1BQU0sUUFBUSxXQUFXLEdBQUc7O0dBRXBDLFVBQVU7QUFDVCxXQUFPLE9BQU8sUUFBUSxDQUFDLFNBQVMsV0FBVztBQUMxQyxZQUFPLFNBQVM7TUFDZjs7R0FFSCxhQUFhLEtBQUssU0FBUztJQUMxQixNQUFNLEVBQUUsUUFBUSxjQUFjLFdBQVcsSUFBSTtJQUM3QyxNQUFNLEVBQUUsU0FBUyxnQkFBZ0IsR0FBRyxhQUFhLEVBQUUsRUFBRSxxQkFBcUIsUUFBUSxVQUFVLFFBQVEsRUFBRTtBQUN0RyxRQUFJLGdCQUFnQixFQUFHLE9BQU0sTUFBTSwwRkFBMEY7SUFDN0gsSUFBSSxrQkFBa0I7SUFDdEIsTUFBTSxVQUFVLFlBQVk7S0FDM0IsTUFBTSxnQkFBZ0IsV0FBVyxVQUFVO0tBQzNDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLFVBQVUsTUFBTSxPQUFPLFNBQVMsQ0FBQyxXQUFXLGNBQWMsQ0FBQztBQUN0Rix1QkFBa0IsU0FBUyxRQUFRLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQztBQUN4RCxTQUFJLFNBQVMsS0FBTTtLQUNuQixNQUFNLGlCQUFpQixNQUFNLEtBQUs7QUFDbEMsU0FBSSxpQkFBaUIsY0FBZSxPQUFNLE1BQU0sZ0NBQWdDLGVBQWUsT0FBTyxjQUFjLFNBQVMsSUFBSSxHQUFHO0FBQ3BJLFNBQUksbUJBQW1CLGNBQWU7QUFDdEMsU0FBSSxNQUFPLFNBQVEsTUFBTSxvREFBb0QsSUFBSSxLQUFLLGVBQWUsT0FBTyxnQkFBZ0I7S0FDNUgsTUFBTSxrQkFBa0IsTUFBTSxLQUFLLEVBQUUsUUFBUSxnQkFBZ0IsZ0JBQWdCLEdBQUcsR0FBRyxNQUFNLGlCQUFpQixJQUFJLEVBQUU7S0FDaEgsSUFBSSxnQkFBZ0I7QUFDcEIsVUFBSyxNQUFNLG9CQUFvQixnQkFBaUIsS0FBSTtBQUNuRCxzQkFBZ0IsTUFBTSxhQUFhLG9CQUFvQixjQUFjLElBQUk7QUFDekUsVUFBSSxNQUFPLFNBQVEsTUFBTSxnRUFBZ0UsbUJBQW1CO2NBQ3BHLEtBQUs7QUFDYixZQUFNLElBQUksZUFBZSxLQUFLLGtCQUFrQixFQUFFLE9BQU8sS0FBSyxDQUFDOztBQUVoRSxXQUFNLE9BQU8sU0FBUyxDQUFDO01BQ3RCLEtBQUs7TUFDTCxPQUFPO01BQ1AsRUFBRTtNQUNGLEtBQUs7TUFDTCxPQUFPO09BQ04sR0FBRztPQUNILEdBQUc7T0FDSDtNQUNELENBQUMsQ0FBQztBQUNILFNBQUksTUFBTyxTQUFRLE1BQU0sc0RBQXNELElBQUksSUFBSSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7QUFDMUgsMkJBQXNCLGVBQWUsY0FBYzs7SUFFcEQsTUFBTSxpQkFBaUIsTUFBTSxjQUFjLE9BQU8sUUFBUSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sUUFBUTtBQUM5RixhQUFRLE1BQU0sMkNBQTJDLE9BQU8sSUFBSTtNQUNuRTtJQUNGLE1BQU0sWUFBWSxJQUFJLE9BQU87SUFDN0IsTUFBTSxvQkFBb0IsTUFBTSxZQUFZLE1BQU0sZ0JBQWdCO0lBQ2xFLE1BQU0sdUJBQXVCLFVBQVUsYUFBYSxZQUFZO0tBQy9ELE1BQU0sUUFBUSxNQUFNLE9BQU8sUUFBUSxVQUFVO0FBQzdDLFNBQUksU0FBUyxRQUFRLE1BQU0sUUFBUSxLQUFNLFFBQU87S0FDaEQsTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNO0FBQ2xDLFdBQU0sT0FBTyxRQUFRLFdBQVcsU0FBUztBQUN6QyxTQUFJLFNBQVMsUUFBUSxnQkFBZ0IsRUFBRyxPQUFNLFFBQVEsUUFBUSxXQUFXLEVBQUUsR0FBRyxlQUFlLENBQUM7QUFDOUYsWUFBTztNQUNOO0FBQ0YsbUJBQWUsS0FBSyxlQUFlO0FBQ25DLFdBQU87S0FDTjtLQUNBLElBQUksZUFBZTtBQUNsQixhQUFPLGFBQWE7O0tBRXJCLElBQUksV0FBVztBQUNkLGFBQU8sYUFBYTs7S0FFckIsVUFBVSxZQUFZO0FBQ3JCLFlBQU07QUFDTixVQUFJLE1BQU0sS0FBTSxRQUFPLE1BQU0sZ0JBQWdCO1VBQ3hDLFFBQU8sTUFBTSxRQUFRLFFBQVEsV0FBVyxLQUFLOztLQUVuRCxTQUFTLFlBQVk7QUFDcEIsWUFBTTtBQUNOLGFBQU8sTUFBTSxRQUFRLFFBQVEsVUFBVTs7S0FFeEMsVUFBVSxPQUFPLFVBQVU7QUFDMUIsWUFBTTtBQUNOLFVBQUksaUJBQWlCO0FBQ3BCLHlCQUFrQjtBQUNsQixhQUFNLFFBQVEsSUFBSSxDQUFDLFFBQVEsUUFBUSxXQUFXLE1BQU0sRUFBRSxRQUFRLFFBQVEsV0FBVyxFQUFFLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNsRyxPQUFNLFFBQVEsUUFBUSxXQUFXLE1BQU07O0tBRS9DLFNBQVMsT0FBTyxlQUFlO0FBQzlCLFlBQU07QUFDTixhQUFPLE1BQU0sUUFBUSxRQUFRLFdBQVcsV0FBVzs7S0FFcEQsYUFBYSxPQUFPLFNBQVM7QUFDNUIsWUFBTTtBQUNOLGFBQU8sTUFBTSxXQUFXLFFBQVEsV0FBVyxLQUFLOztLQUVqRCxZQUFZLE9BQU8sZUFBZTtBQUNqQyxZQUFNO0FBQ04sYUFBTyxNQUFNLFdBQVcsUUFBUSxXQUFXLFdBQVc7O0tBRXZELFFBQVEsT0FBTyxNQUFNLFFBQVEsWUFBWSxVQUFVLGFBQWEsR0FBRyxZQUFZLGFBQWEsRUFBRSxZQUFZLGFBQWEsQ0FBQyxDQUFDO0tBQ3pIO0tBQ0E7O0dBRUY7O0NBRUYsU0FBUyxhQUFhLGFBQWE7RUFDbEMsTUFBTSx1QkFBdUI7QUFDNUIsT0FBSUEsVUFBUSxXQUFXLEtBQU0sT0FBTSxNQUFNOzs7O0VBSXpDO0FBQ0EsT0FBSUEsVUFBUSxXQUFXLEtBQU0sT0FBTSxNQUFNLDhFQUE4RTtHQUN2SCxNQUFNLE9BQU9BLFVBQVEsUUFBUTtBQUM3QixPQUFJLFFBQVEsS0FBTSxPQUFNLE1BQU0sb0JBQW9CLFlBQVksZ0JBQWdCO0FBQzlFLFVBQU87O0VBRVIsTUFBTSxpQ0FBaUMsSUFBSSxLQUFLO0FBQ2hELFNBQU87R0FDTixTQUFTLE9BQU8sUUFBUTtBQUN2QixZQUFRLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxJQUFJLEVBQUU7O0dBRTFDLFVBQVUsT0FBTyxTQUFTO0lBQ3pCLE1BQU0sU0FBUyxNQUFNLGdCQUFnQixDQUFDLElBQUksS0FBSztBQUMvQyxXQUFPLEtBQUssS0FBSyxTQUFTO0tBQ3pCO0tBQ0EsT0FBTyxPQUFPLFFBQVE7S0FDdEIsRUFBRTs7R0FFSixTQUFTLE9BQU8sS0FBSyxVQUFVO0FBQzlCLFFBQUksU0FBUyxLQUFNLE9BQU0sZ0JBQWdCLENBQUMsT0FBTyxJQUFJO1FBQ2hELE9BQU0sZ0JBQWdCLENBQUMsSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDOztHQUVsRCxVQUFVLE9BQU8sV0FBVztJQUMzQixNQUFNLE1BQU0sT0FBTyxRQUFRLEtBQUssRUFBRSxLQUFLLFlBQVk7QUFDbEQsU0FBSSxPQUFPO0FBQ1gsWUFBTztPQUNMLEVBQUUsQ0FBQztBQUNOLFVBQU0sZ0JBQWdCLENBQUMsSUFBSSxJQUFJOztHQUVoQyxZQUFZLE9BQU8sUUFBUTtBQUMxQixVQUFNLGdCQUFnQixDQUFDLE9BQU8sSUFBSTs7R0FFbkMsYUFBYSxPQUFPLFNBQVM7QUFDNUIsVUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLEtBQUs7O0dBRXBDLE9BQU8sWUFBWTtBQUNsQixVQUFNLGdCQUFnQixDQUFDLE9BQU87O0dBRS9CLFVBQVUsWUFBWTtBQUNyQixXQUFPLE1BQU0sZ0JBQWdCLENBQUMsS0FBSzs7R0FFcEMsaUJBQWlCLE9BQU8sU0FBUztBQUNoQyxVQUFNLGdCQUFnQixDQUFDLElBQUksS0FBSzs7R0FFakMsTUFBTSxLQUFLLElBQUk7SUFDZCxNQUFNLFlBQVksWUFBWTtLQUM3QixNQUFNLFNBQVMsUUFBUTtBQUN2QixTQUFJLFVBQVUsUUFBUSxPQUFPLE9BQU8sVUFBVSxPQUFPLFNBQVMsQ0FBRTtBQUNoRSxRQUFHLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxLQUFLOztBQUVyRCxvQkFBZ0IsQ0FBQyxVQUFVLFlBQVksU0FBUztBQUNoRCxtQkFBZSxJQUFJLFNBQVM7QUFDNUIsaUJBQWE7QUFDWixxQkFBZ0IsQ0FBQyxVQUFVLGVBQWUsU0FBUztBQUNuRCxvQkFBZSxPQUFPLFNBQVM7OztHQUdqQyxVQUFVO0FBQ1QsbUJBQWUsU0FBUyxhQUFhO0FBQ3BDLHFCQUFnQixDQUFDLFVBQVUsZUFBZSxTQUFTO01BQ2xEO0FBQ0YsbUJBQWUsT0FBTzs7R0FFdkI7O0NBRUYsSUFBSSxpQkFBaUIsY0FBYyxNQUFNO0VBQ3hDLFlBQVksS0FBSyxTQUFTLFNBQVM7QUFDbEMsU0FBTSxJQUFJLFFBQVEseUJBQXlCLElBQUksSUFBSSxRQUFRO0FBQzNELFFBQUssTUFBTTtBQUNYLFFBQUssVUFBVTs7Ozs7Ozs7OztDQzNaakIsSUFBYSx1QkFBdUJDLFNBQU87RUFBQztFQUFlO0VBQVk7RUFBYSxDQUFDO0NBQ3JGLElBQWEsMkJBQTJCO0NBS3hDLElBQWEsdUJBQXVCQSxTQUFPO0VBQUM7RUFBUTtFQUFRO0VBQVE7RUFBYztFQUFZO0VBQVUsQ0FBQztBQUl4RUMsWUFBUztFQUN0QyxJQUFJQyxZQUFVO0VBQ2QsTUFBTUEsWUFBVTtFQUNoQixhQUFhQSxZQUFVO0VBQ3ZCLFlBQVlBLFlBQVUsQ0FBQyxVQUFVO0VBQ2pDLE9BQU9BLFlBQVU7RUFDakIsVUFBVUMsVUFBUUQsWUFBVSxDQUFDO0VBQzdCLE9BQU9FLGFBQVc7RUFDbEIsS0FBS0YsWUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVO0VBQ25DLENBQUM7QUFJd0NELFlBQVM7RUFDL0MsVUFBVTtFQUNWLFlBQVlJLFlBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7RUFDcEMsUUFBUUgsWUFBVTtFQUNsQixrQkFBa0JBLFlBQVUsQ0FBQyxVQUFVO0VBQ3ZDLE9BQU9BLFlBQVUsQ0FBQyxVQUFVO0VBQy9CLENBQUM7Q0FJRixJQUFhLHdCQUF3QkQsV0FBUztFQUMxQyxVQUFVRyxhQUFXLENBQUMsUUFBUSxNQUFNO0VBQ3BDLFVBQVVBLGFBQVcsQ0FBQyxRQUFRLE1BQU07RUFDcEMsVUFBVUEsYUFBVyxDQUFDLFFBQVEsTUFBTTtFQUNwQyxXQUFXQSxhQUFXLENBQUMsUUFBUSxNQUFNO0VBQ3hDLENBQUM7Q0FDRixJQUFhLGtCQUFrQkgsV0FBUztFQUNwQyxtQkFBbUJFLFVBQVFELFlBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0VBQ2xELG1CQUFtQkMsVUFBUUQsWUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7RUFDbEQsbUJBQW1CQyxVQUFRRCxZQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztFQUNsRCxtQkFBbUJDLFVBQVFELFlBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0VBQ2xELFNBQVMsc0JBQXNCLFFBQVE7R0FDbkMsVUFBVTtHQUNWLFVBQVU7R0FDVixVQUFVO0dBQ1YsV0FBVztHQUNkLENBQUM7RUFDTCxDQUFDO0NBSUYsSUFBYSwyQkFBMkJGLFNBQU87RUFBQztFQUFTO0VBQVU7RUFBUyxDQUFDO0NBQzdFLElBQWEsK0JBQStCQyxXQUFTO0VBQ2pELFNBQVNHLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDbEMsTUFBTSx5QkFBeUIsUUFBUSxTQUFTO0VBQ2hELGVBQWVBLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDeEMsaUJBQWlCQSxhQUFXLENBQUMsUUFBUSxLQUFLO0VBQzFDLGdCQUFnQkQsVUFBUUQsWUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7RUFDbEQsQ0FBQztDQUNGLElBQWEsZ0NBQWdDO0VBQ3pDLFNBQVM7RUFDVCxNQUFNO0VBQ04sZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBRTtFQUNyQjtDQUNELElBQWEsdUJBQXVCRCxXQUFTO0VBQ3pDLFNBQVNHLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDbEMsZUFBZUYsWUFBVSxDQUFDLFFBQVEsT0FBTztFQUN6QyxjQUFjQSxZQUFVLENBQUMsUUFBUSxVQUFVO0VBQzNDLFVBQVVFLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDbkMsVUFBVUEsYUFBVyxDQUFDLFFBQVEsS0FBSztFQUNuQyxNQUFNRixZQUFVLENBQUMsUUFBUSxRQUFRO0VBQ2pDLFVBQVVBLFlBQVUsQ0FBQyxRQUFRLE9BQU87RUFDcEMsbUJBQW1CRSxhQUFXLENBQUMsUUFBUSxLQUFLO0VBQzVDLGFBQWFGLFlBQVUsQ0FBQyxVQUFVO0VBQ2xDLFFBQVFBLFlBQVUsQ0FBQyxVQUFVO0VBQ2hDLENBQUM7Q0FDRixJQUFhLHdCQUF3QjtFQUNqQyxTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7RUFDZCxVQUFVO0VBQ1YsVUFBVTtFQUNWLE1BQU07RUFDTixVQUFVO0VBQ1YsbUJBQW1CO0VBQ3RCO0NBSUQsSUFBYSx3QkFBd0JGLFNBQU87RUFBQztFQUFPO0VBQVE7RUFBTyxDQUFDO0NBQ3BFLElBQWEsNEJBQTRCQyxXQUFTO0VBQzlDLFNBQVNHLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDbEMsTUFBTSxzQkFBc0IsUUFBUSxPQUFPO0VBQzNDLGVBQWVDLFlBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEdBQUk7RUFDcEQsZUFBZUEsWUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsR0FBSTtFQUNwRCxnQkFBZ0JELGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDekMsbUJBQW1CQSxhQUFXLENBQUMsUUFBUSxLQUFLO0VBQzVDLFlBQVlBLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDckMsZUFBZUEsYUFBVyxDQUFDLFFBQVEsS0FBSztFQUMzQyxDQUFDO0NBQ0YsSUFBYSw2QkFBNkI7RUFDdEMsU0FBUztFQUNULE1BQU07RUFDTixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDbEI7Q0FJRCxJQUFhLHFCQUFxQkosU0FBTztFQUNyQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0gsQ0FBQztDQUNGLElBQWEsMkJBQTJCQyxXQUFTO0VBQzdDLFNBQVNHLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDbEMsbUJBQW1CQSxhQUFXLENBQUMsUUFBUSxLQUFLO0VBQzVDLHFCQUFxQkEsYUFBVyxDQUFDLFFBQVEsS0FBSztFQUM5QyxvQkFBb0JBLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDN0MsbUJBQW1CQSxhQUFXLENBQUMsUUFBUSxNQUFNO0VBQzdDLG1CQUFtQkQsVUFBUSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztFQUMxRCxpQkFBaUJBLFVBQVFELFlBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0VBQ2hELGlCQUFpQkMsVUFBUUQsWUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7RUFDaEQsdUJBQXVCRSxhQUFXLENBQUMsUUFBUSxLQUFLO0VBQ2hELGVBQWVBLGFBQVcsQ0FBQyxRQUFRLEtBQUs7RUFDM0MsQ0FBQztDQUNGLElBQWEsNEJBQTRCO0VBQ3JDLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0dBQUM7R0FBWTtHQUFXO0dBQVE7R0FBWTtFQUMvRCxpQkFBaUIsRUFBRTtFQUNuQixpQkFBaUIsRUFBRTtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNsQjtBQVlpQ0gsWUFBUztFQUN2QyxTQUFTRyxhQUFXLENBQUMsUUFBUSxLQUFLO0VBQ2xDLGdCQUFnQixxQkFBcUIsUUFBUSxjQUFjO0VBQzNELFlBQVlDLFlBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUc7RUFDbEQsT0FBTyxnQkFBZ0IsUUFBUTtHQUMzQixtQkFBbUIsRUFBRTtHQUNyQixtQkFBbUIsRUFBRTtHQUNyQixtQkFBbUIsRUFBRTtHQUNyQixtQkFBbUIsRUFBRTtHQUNyQixTQUFTO0lBQUUsVUFBVTtJQUFPLFVBQVU7SUFBTSxVQUFVO0lBQU8sV0FBVztJQUFNO0dBQ2pGLENBQUM7RUFDRixTQUFTSCxZQUFVLENBQUMsVUFBVTtFQUM5QixTQUFTQSxZQUFVLENBQUMsUUFBUSx5QkFBeUI7RUFDckQsZ0JBQWdCQSxZQUFVLENBQUMsVUFBVTtFQUNyQyxnQkFBZ0IsNkJBQTZCLFFBQVEsOEJBQThCO0VBQ25GLFFBQVEscUJBQXFCLFFBQVEsc0JBQXNCO0VBQzNELGFBQWEsMEJBQTBCLFFBQVEsMkJBQTJCO0VBQzFFLFlBQVkseUJBQXlCLFFBQVEsMEJBQTBCO0VBQzFFLENBQUM7Q0FDRixJQUFhLHNCQUFzQjtFQUMvQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixPQUFPO0dBQ0gsbUJBQW1CLEVBQUU7R0FDckIsbUJBQW1CLEVBQUU7R0FDckIsbUJBQW1CLEVBQUU7R0FDckIsbUJBQW1CLEVBQUU7R0FFckIsU0FBUztJQUFFLFVBQVU7SUFBTyxVQUFVO0lBQU0sVUFBVTtJQUFPLFdBQVc7SUFBTTtHQUNqRjtFQUNELFNBQVMsS0FBQTtFQUNULFNBQVM7RUFDVCxnQkFBZ0IsS0FBQTtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0VBQ2Y7QUFzRWtDRCxZQUFTO0VBQ3hDLGVBQWVJLFlBQVUsQ0FBQyxRQUFRLEVBQUU7RUFDcEMsVUFBVUosV0FBUztHQUNmLE1BQU1JLFlBQVUsQ0FBQyxRQUFRLEVBQUU7R0FDM0IsTUFBTUEsWUFBVSxDQUFDLFFBQVEsRUFBRTtHQUMzQixZQUFZQSxZQUFVLENBQUMsUUFBUSxFQUFFO0dBQ2pDLFVBQVVBLFlBQVUsQ0FBQyxRQUFRLEVBQUU7R0FDbEMsQ0FBQyxDQUFDLFFBQVE7R0FBRSxNQUFNO0dBQUcsTUFBTTtHQUFHLFlBQVk7R0FBRyxVQUFVO0dBQUcsQ0FBQztFQUM1RCxVQUFVSixXQUFTO0dBQ2YsVUFBVUksWUFBVSxDQUFDLFFBQVEsRUFBRTtHQUMvQixVQUFVQSxZQUFVLENBQUMsUUFBUSxFQUFFO0dBQy9CLFVBQVVBLFlBQVUsQ0FBQyxRQUFRLEVBQUU7R0FDL0IsV0FBV0EsWUFBVSxDQUFDLFFBQVEsRUFBRTtHQUNuQyxDQUFDLENBQUMsUUFBUTtHQUFFLFVBQVU7R0FBRyxVQUFVO0dBQUcsVUFBVTtHQUFHLFdBQVc7R0FBRyxDQUFDO0VBQ25FLFdBQVdBLFlBQVUsQ0FBQyxRQUFRLEVBQUU7RUFDaEMsb0JBQW9CRixVQUFRRCxZQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztFQUNuRCxjQUFjQyxVQUFRRixXQUFTO0dBQzNCLE1BQU1DLFlBQVU7R0FDaEIsT0FBT0csWUFBVTtHQUNwQixDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztFQUNmLFdBQVdBLFlBQVUsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDO0VBQzVDLENBQUM7Ozs7Ozs7Ozs7Q0NuU0YsSUFBYSxlQUFlO0VBQzFCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLE9BQU87RUFDUjtDQU1ELElBQU0sdUJBQTZELEVBQUU7Q0FDckUsSUFBTSxrQkFBMkQsRUFBRTtDQUNuRSxJQUFNLGVBQTZEO0VBQ2pFLGVBQWU7RUFDZixXQUFXLEtBQUssS0FBSztFQUN0Qjs7OztDQVNELElBQWEsZ0JBQWdCLFFBQVEsV0FBeUIsYUFBYSxVQUFVLEVBQ25GLFVBQVUscUJBQ1gsQ0FBQzs7Ozs7Q0FNRixJQUFhLGdCQUFnQixRQUFRLFdBQ25DLGFBQWEsZ0JBQ2IsRUFBRSxVQUFVLHNCQUFzQixDQUNuQzs7OztDQUtELElBQWEsZ0JBQWdCLFFBQVEsV0FDbkMsYUFBYSxXQUNiLEVBQUUsVUFBVSxpQkFBaUIsQ0FDOUI7Ozs7Q0FLRCxJQUFhLGFBQWEsUUFBUSxXQUNoQyxhQUFhLE9BQ2IsRUFBRSxVQUFVLGNBQWMsQ0FDM0I7Q0FNRCxJQUFNLGVBQWU7Ozs7Q0FLckIsZUFBc0IsZ0JBQWdCLGFBQWdFO0VBRXBHLE1BQU0sU0FEUSxNQUFNLGNBQWMsVUFBVSxFQUN4QjtBQUNwQixNQUFJLENBQUMsTUFBTyxRQUFPLEtBQUE7QUFJbkIsU0FBTzs7Ozs7Q0FNVCxlQUFzQixnQkFBZ0IsYUFBcUIsUUFBNkM7RUFDdEcsTUFBTSxRQUFRLE1BQU0sY0FBYyxVQUFVO0VBQzVDLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTTtBQUkvQixNQUFJLENBQUMsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLGNBQWM7R0FFdEQsTUFBTSxjQUFjLEtBQUs7QUFDekIsVUFBTyxNQUFNOztBQUdmLFFBQU0sZUFBZTtBQUNyQixRQUFNLGNBQWMsU0FBUyxNQUFNOzs7OztDQU1yQyxlQUFzQixxQkFBb0M7QUFDeEQsUUFBTSxjQUFjLFNBQVMsRUFBRSxHQUFHLHNCQUFzQixDQUFDOzs7OztDQVUzRCxlQUFzQix1QkFBdUIsU0FBaUIsR0FBa0I7RUFDOUUsTUFBTSxRQUFRLE1BQU0sV0FBVyxVQUFVO0FBQ3pDLFFBQU0saUJBQWlCO0FBQ3ZCLFFBQU0sWUFBWSxLQUFLLEtBQUs7QUFDNUIsUUFBTSxXQUFXLFNBQVMsTUFBTTs7Ozs7O0NBa0JsQyxlQUFzQixtQkFBa0M7QUFHdEQsUUFBTSxRQUFRLElBQUk7R0FDaEIsY0FBYyxVQUFVO0dBQ3hCLGNBQWMsVUFBVTtHQUN4QixjQUFjLFVBQVU7R0FDeEIsV0FBVyxVQUFVO0dBQ3RCLENBQUM7Ozs7O0FDeEpKLEdBQUMsU0FBVSxRQUFRLFNBQVM7QUFDMUIsT0FBSSxPQUFPLFdBQVcsY0FBYyxPQUFPLElBQ3pDLFFBQU8seUJBQXlCLENBQUMsU0FBUyxFQUFFLFFBQVE7WUFDM0MsT0FBTyxZQUFZLFlBQzVCLFNBQVEsT0FBTztRQUNWO0lBQ0wsSUFBSSxNQUFNLEVBQ1IsU0FBUyxFQUFFLEVBQ1o7QUFDRCxZQUFRLElBQUk7QUFDWixXQUFPLFVBQVUsSUFBSTs7S0FFdEIsT0FBTyxlQUFlLGNBQWMsYUFBYSxPQUFPLFNBQVMsY0FBYyxPQUFBLFNBQWEsU0FBVSxVQUFRO0FBTy9HO0FBRUEsT0FBSSxFQUFFLFdBQVcsVUFBVSxXQUFXLE9BQU8sV0FBVyxXQUFXLE9BQU8sUUFBUSxJQUNoRixPQUFNLElBQUksTUFBTSw0REFBNEQ7QUFFOUUsT0FBSSxFQUFFLFdBQVcsV0FBVyxXQUFXLFFBQVEsV0FBVyxXQUFXLFFBQVEsUUFBUSxLQUFLO0lBQ3hGLE1BQU0sbURBQW1EO0lBT3pELE1BQU0sWUFBVyxrQkFBaUI7S0FJaEMsTUFBTSxjQUFjO01BQ2xCLFVBQVU7T0FDUixTQUFTO1FBQ1AsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFlBQVk7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsT0FBTztRQUNMLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsYUFBYTtPQUNYLFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsT0FBTztRQUNMLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxlQUFlO1FBQ2IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGFBQWE7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsY0FBYztRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxXQUFXO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFFBQVE7UUFDTixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxjQUFjO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNELGlCQUFpQjtPQUNmLFdBQVc7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNYLHdCQUF3QjtRQUN6QjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNYLHdCQUF3QjtRQUN6QjtPQUNELDJCQUEyQjtRQUN6QixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsZ0JBQWdCO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFlBQVk7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxhQUFhO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELDJCQUEyQjtRQUN6QixXQUFXO1FBQ1gsV0FBVztRQUNYLHdCQUF3QjtRQUN6QjtPQUNELGdCQUFnQjtRQUNkLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0QsV0FBVztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWCx3QkFBd0I7UUFDekI7T0FDRCxZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWCx3QkFBd0I7UUFDekI7T0FDRjtNQUNELGdCQUFnQjtPQUNkLFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsZUFBZTtRQUNiLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxpQkFBaUI7UUFDZixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsbUJBQW1CO1FBQ2pCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxrQkFBa0I7UUFDaEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGlCQUFpQjtRQUNmLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxzQkFBc0I7UUFDcEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELG1CQUFtQjtRQUNqQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Qsb0JBQW9CO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsWUFBWSxFQUNWLFVBQVU7T0FDUixXQUFXO09BQ1gsV0FBVztPQUNaLEVBQ0Y7TUFDRCxnQkFBZ0I7T0FDZCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGFBQWE7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNELFdBQVc7T0FDVCxPQUFPO1FBQ0wsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Qsc0JBQXNCO1FBQ3BCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELE9BQU87UUFDTCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxZQUFZO09BQ1YsbUJBQW1CLEVBQ2pCLFFBQVE7UUFDTixXQUFXO1FBQ1gsV0FBVztRQUNYLHFCQUFxQjtRQUN0QixFQUNGO09BQ0QsVUFBVTtRQUNSLFVBQVU7U0FDUixXQUFXO1NBQ1gsV0FBVztTQUNYLHFCQUFxQjtTQUN0QjtRQUNELFlBQVksRUFDVixxQkFBcUI7U0FDbkIsV0FBVztTQUNYLFdBQVc7U0FDWixFQUNGO1FBQ0Y7T0FDRjtNQUNELGFBQWE7T0FDWCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFlBQVk7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsU0FBUztRQUNQLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxlQUFlO1FBQ2IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFFBQVE7UUFDTixXQUFXO1FBQ1gsV0FBVztRQUNYLHdCQUF3QjtRQUN6QjtPQUNELFNBQVM7UUFDUCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsY0FBYztRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsUUFBUTtRQUNOLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0Y7TUFDRCxhQUFhO09BQ1gsNkJBQTZCO1FBQzNCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCw0QkFBNEI7UUFDMUIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsV0FBVztPQUNULFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxlQUFlO1FBQ2IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGFBQWE7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsUUFBUTtPQUNOLGtCQUFrQjtRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Qsc0JBQXNCO1FBQ3BCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNELFlBQVksRUFDVixxQkFBcUI7T0FDbkIsV0FBVztPQUNYLFdBQVc7T0FDWixFQUNGO01BQ0QsUUFBUSxFQUNOLGNBQWM7T0FDWixXQUFXO09BQ1gsV0FBVztPQUNaLEVBQ0Y7TUFDRCxjQUFjO09BQ1osT0FBTztRQUNMLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFdBQVc7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsY0FBYztRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxpQkFBaUI7UUFDZixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxpQkFBaUI7T0FDZixTQUFTO1FBQ1AsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxzQkFBc0I7UUFDcEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRCxjQUFjO09BQ1osWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxZQUFZO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFFBQVE7UUFDTixXQUFXO1FBQ1gsV0FBVztRQUNYLHdCQUF3QjtRQUN6QjtPQUNELFdBQVc7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0QsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0QsUUFBUTtRQUNOLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3pCO09BQ0Y7TUFDRCxlQUFlO09BQ2IsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsV0FBVztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNELFdBQVc7T0FDVCxxQkFBcUI7UUFDbkIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELG1CQUFtQjtRQUNqQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsbUJBQW1CO1FBQ2pCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxzQkFBc0I7UUFDcEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGVBQWU7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QscUJBQXFCO1FBQ25CLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxtQkFBbUI7UUFDakIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsWUFBWTtPQUNWLGNBQWM7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QscUJBQXFCO1FBQ25CLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxXQUFXO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsV0FBVztPQUNULFNBQVM7UUFDUCxTQUFTO1NBQ1AsV0FBVztTQUNYLFdBQVc7U0FDWjtRQUNELE9BQU87U0FDTCxXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsaUJBQWlCO1NBQ2YsV0FBVztTQUNYLFdBQVc7U0FDWjtRQUNELFVBQVU7U0FDUixXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsT0FBTztTQUNMLFdBQVc7U0FDWCxXQUFXO1NBQ1o7UUFDRjtPQUNELFdBQVc7UUFDVCxPQUFPO1NBQ0wsV0FBVztTQUNYLFdBQVc7U0FDWjtRQUNELGlCQUFpQjtTQUNmLFdBQVc7U0FDWCxXQUFXO1NBQ1o7UUFDRjtPQUNELFFBQVE7UUFDTixTQUFTO1NBQ1AsV0FBVztTQUNYLFdBQVc7U0FDWjtRQUNELE9BQU87U0FDTCxXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsaUJBQWlCO1NBQ2YsV0FBVztTQUNYLFdBQVc7U0FDWjtRQUNELFVBQVU7U0FDUixXQUFXO1NBQ1gsV0FBVztTQUNaO1FBQ0QsT0FBTztTQUNMLFdBQVc7U0FDWCxXQUFXO1NBQ1o7UUFDRjtPQUNGO01BQ0QsUUFBUTtPQUNOLHFCQUFxQjtRQUNuQixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsVUFBVTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxrQkFBa0I7UUFDaEIsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFdBQVc7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxpQkFBaUI7UUFDZixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsT0FBTztRQUNMLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxjQUFjO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFdBQVc7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsbUJBQW1CO1FBQ2pCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGFBQWE7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxhQUFhO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFFBQVE7UUFDTixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsU0FBUztRQUNQLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsYUFBYTtRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxlQUFlO1FBQ2IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFdBQVc7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsbUJBQW1CO1FBQ2pCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNGO01BQ0QsWUFBWSxFQUNWLE9BQU87T0FDTCxXQUFXO09BQ1gsV0FBVztPQUNaLEVBQ0Y7TUFDRCxpQkFBaUI7T0FDZixnQkFBZ0I7UUFDZCxXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsWUFBWTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRjtNQUNELGNBQWMsRUFDWiwwQkFBMEI7T0FDeEIsV0FBVztPQUNYLFdBQVc7T0FDWixFQUNGO01BQ0QsV0FBVztPQUNULFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0QsT0FBTztRQUNMLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELGNBQWM7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Qsa0JBQWtCO1FBQ2hCLFdBQVc7UUFDWCxXQUFXO1FBQ1o7T0FDRCxVQUFVO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWjtPQUNELFVBQVU7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNaO09BQ0Y7TUFDRjtBQUNELFNBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxXQUFXLEVBQ3RDLE9BQU0sSUFBSSxNQUFNLDhEQUE4RDs7Ozs7Ozs7Ozs7S0FhaEYsTUFBTSx1QkFBdUIsUUFBUTtNQUNuQyxZQUFZLFlBQVksUUFBUSxLQUFBLEdBQVc7QUFDekMsYUFBTSxNQUFNO0FBQ1osWUFBSyxhQUFhOztNQUVwQixJQUFJLEtBQUs7QUFDUCxXQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FDaEIsTUFBSyxJQUFJLEtBQUssS0FBSyxXQUFXLElBQUksQ0FBQztBQUVyQyxjQUFPLE1BQU0sSUFBSSxJQUFJOzs7Ozs7Ozs7O0tBV3pCLE1BQU0sY0FBYSxVQUFTO0FBQzFCLGFBQU8sU0FBUyxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0NyRSxNQUFNLGdCQUFnQixTQUFTLGFBQWE7QUFDMUMsY0FBUSxHQUFHLGlCQUFpQjtBQUMxQixXQUFJLGNBQWMsUUFBUSxVQUN4QixTQUFRLE9BQU8sSUFBSSxNQUFNLGNBQWMsUUFBUSxVQUFVLFFBQVEsQ0FBQztnQkFDekQsU0FBUyxxQkFBcUIsYUFBYSxVQUFVLEtBQUssU0FBUyxzQkFBc0IsTUFDbEcsU0FBUSxRQUFRLGFBQWEsR0FBRztXQUVoQyxTQUFRLFFBQVEsYUFBYTs7O0tBSW5DLE1BQU0sc0JBQXFCLFlBQVcsV0FBVyxJQUFJLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTRCbEUsTUFBTSxxQkFBcUIsTUFBTSxhQUFhO0FBQzVDLGFBQU8sU0FBUyxxQkFBcUIsUUFBUSxHQUFHLE1BQU07QUFDcEQsV0FBSSxLQUFLLFNBQVMsU0FBUyxRQUN6QixPQUFNLElBQUksTUFBTSxxQkFBcUIsU0FBUyxRQUFRLEdBQUcsbUJBQW1CLFNBQVMsUUFBUSxDQUFDLE9BQU8sS0FBSyxVQUFVLEtBQUssU0FBUztBQUVwSSxXQUFJLEtBQUssU0FBUyxTQUFTLFFBQ3pCLE9BQU0sSUFBSSxNQUFNLG9CQUFvQixTQUFTLFFBQVEsR0FBRyxtQkFBbUIsU0FBUyxRQUFRLENBQUMsT0FBTyxLQUFLLFVBQVUsS0FBSyxTQUFTO0FBRW5JLGNBQU8sSUFBSSxTQUFTLFNBQVMsV0FBVztBQUN0QyxZQUFJLFNBQVMscUJBSVgsS0FBSTtBQUNGLGdCQUFPLE1BQU0sR0FBRyxNQUFNLGFBQWE7VUFDakM7VUFDQTtVQUNELEVBQUUsU0FBUyxDQUFDO2lCQUNOLFNBQVM7QUFDaEIsaUJBQVEsS0FBSyxHQUFHLEtBQUssMkdBQWdILFFBQVE7QUFDN0ksZ0JBQU8sTUFBTSxHQUFHLEtBQUs7QUFJckIsa0JBQVMsdUJBQXVCO0FBQ2hDLGtCQUFTLGFBQWE7QUFDdEIsa0JBQVM7O2lCQUVGLFNBQVMsWUFBWTtBQUM5QixnQkFBTyxNQUFNLEdBQUcsS0FBSztBQUNyQixrQkFBUztjQUVULFFBQU8sTUFBTSxHQUFHLE1BQU0sYUFBYTtTQUNqQztTQUNBO1NBQ0QsRUFBRSxTQUFTLENBQUM7U0FFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVCTixNQUFNLGNBQWMsUUFBUSxRQUFRLFlBQVk7QUFDOUMsYUFBTyxJQUFJLE1BQU0sUUFBUSxFQUN2QixNQUFNLGNBQWMsU0FBUyxNQUFNO0FBQ2pDLGNBQU8sUUFBUSxLQUFLLFNBQVMsUUFBUSxHQUFHLEtBQUs7U0FFaEQsQ0FBQzs7S0FFSixJQUFJLGlCQUFpQixTQUFTLEtBQUssS0FBSyxPQUFPLFVBQVUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeUJ4RSxNQUFNLGNBQWMsUUFBUSxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSztNQUMzRCxJQUFJLFFBQVEsT0FBTyxPQUFPLEtBQUs7QUFtRi9CLGFBQU8sSUFBSSxNQURPLE9BQU8sT0FBTyxPQUFPLEVBakZ4QjtPQUNiLElBQUksYUFBYSxNQUFNO0FBQ3JCLGVBQU8sUUFBUSxVQUFVLFFBQVE7O09BRW5DLElBQUksYUFBYSxNQUFNLFVBQVU7QUFDL0IsWUFBSSxRQUFRLE1BQ1YsUUFBTyxNQUFNO0FBRWYsWUFBSSxFQUFFLFFBQVEsUUFDWjtRQUVGLElBQUksUUFBUSxPQUFPO0FBQ25CLFlBQUksT0FBTyxVQUFVLFdBSW5CLEtBQUksT0FBTyxTQUFTLFVBQVUsV0FFNUIsU0FBUSxXQUFXLFFBQVEsT0FBTyxPQUFPLFNBQVMsTUFBTTtpQkFDL0MsZUFBZSxVQUFVLEtBQUssRUFBRTtTQUd6QyxJQUFJLFVBQVUsa0JBQWtCLE1BQU0sU0FBUyxNQUFNO0FBQ3JELGlCQUFRLFdBQVcsUUFBUSxPQUFPLE9BQU8sUUFBUTtjQUlqRCxTQUFRLE1BQU0sS0FBSyxPQUFPO2lCQUVuQixPQUFPLFVBQVUsWUFBWSxVQUFVLFNBQVMsZUFBZSxVQUFVLEtBQUssSUFBSSxlQUFlLFVBQVUsS0FBSyxFQUl6SCxTQUFRLFdBQVcsT0FBTyxTQUFTLE9BQU8sU0FBUyxNQUFNO2lCQUNoRCxlQUFlLFVBQVUsSUFBSSxDQUV0QyxTQUFRLFdBQVcsT0FBTyxTQUFTLE9BQU8sU0FBUyxLQUFLO2FBQ25EO0FBR0wsZ0JBQU8sZUFBZSxPQUFPLE1BQU07VUFDakMsY0FBYztVQUNkLFlBQVk7VUFDWixNQUFNO0FBQ0osa0JBQU8sT0FBTzs7VUFFaEIsSUFBSSxPQUFPO0FBQ1Qsa0JBQU8sUUFBUTs7VUFFbEIsQ0FBQztBQUNGLGdCQUFPOztBQUVULGNBQU0sUUFBUTtBQUNkLGVBQU87O09BRVQsSUFBSSxhQUFhLE1BQU0sT0FBTyxVQUFVO0FBQ3RDLFlBQUksUUFBUSxNQUNWLE9BQU0sUUFBUTtZQUVkLFFBQU8sUUFBUTtBQUVqQixlQUFPOztPQUVULGVBQWUsYUFBYSxNQUFNLE1BQU07QUFDdEMsZUFBTyxRQUFRLGVBQWUsT0FBTyxNQUFNLEtBQUs7O09BRWxELGVBQWUsYUFBYSxNQUFNO0FBQ2hDLGVBQU8sUUFBUSxlQUFlLE9BQU8sS0FBSzs7T0FFN0MsQ0Fhc0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CekMsTUFBTSxhQUFZLGdCQUFlO01BQy9CLFlBQVksUUFBUSxVQUFVLEdBQUcsTUFBTTtBQUNyQyxjQUFPLFlBQVksV0FBVyxJQUFJLFNBQVMsRUFBRSxHQUFHLEtBQUs7O01BRXZELFlBQVksUUFBUSxVQUFVO0FBQzVCLGNBQU8sT0FBTyxZQUFZLFdBQVcsSUFBSSxTQUFTLENBQUM7O01BRXJELGVBQWUsUUFBUSxVQUFVO0FBQy9CLGNBQU8sZUFBZSxXQUFXLElBQUksU0FBUyxDQUFDOztNQUVsRDtLQUNELE1BQU0sNEJBQTRCLElBQUksZ0JBQWUsYUFBWTtBQUMvRCxVQUFJLE9BQU8sYUFBYSxXQUN0QixRQUFPOzs7Ozs7Ozs7QUFXVCxhQUFPLFNBQVMsa0JBQWtCLEtBQUs7QUFPckMsZ0JBTm1CLFdBQVcsS0FBSyxFQUFFLEVBQWlCLEVBQ3BELFlBQVk7UUFDVixTQUFTO1FBQ1QsU0FBUztRQUNWLEVBQ0YsQ0FBQyxDQUNrQjs7T0FFdEI7S0FDRixNQUFNLG9CQUFvQixJQUFJLGdCQUFlLGFBQVk7QUFDdkQsVUFBSSxPQUFPLGFBQWEsV0FDdEIsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JULGFBQU8sU0FBUyxVQUFVLFNBQVMsUUFBUSxjQUFjO09BQ3ZELElBQUksc0JBQXNCO09BQzFCLElBQUk7T0FDSixJQUFJLHNCQUFzQixJQUFJLFNBQVEsWUFBVztBQUMvQyw4QkFBc0IsU0FBVSxVQUFVO0FBQ3hDLCtCQUFzQjtBQUN0QixpQkFBUSxTQUFTOztTQUVuQjtPQUNGLElBQUk7QUFDSixXQUFJO0FBQ0YsaUJBQVMsU0FBUyxTQUFTLFFBQVEsb0JBQW9CO2dCQUNoRCxLQUFLO0FBQ1osaUJBQVMsUUFBUSxPQUFPLElBQUk7O09BRTlCLE1BQU0sbUJBQW1CLFdBQVcsUUFBUSxXQUFXLE9BQU87QUFLOUQsV0FBSSxXQUFXLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFDM0MsUUFBTztPQU9ULE1BQU0sc0JBQXFCLFlBQVc7QUFDcEMsZ0JBQVEsTUFBSyxRQUFPO0FBRWxCLHNCQUFhLElBQUk7WUFDaEIsVUFBUztTQUdWLElBQUk7QUFDSixhQUFJLFVBQVUsaUJBQWlCLFNBQVMsT0FBTyxNQUFNLFlBQVksVUFDL0QsV0FBVSxNQUFNO2FBRWhCLFdBQVU7QUFFWixzQkFBYTtVQUNYLG1DQUFtQztVQUNuQztVQUNELENBQUM7VUFDRixDQUFDLE9BQU0sUUFBTztBQUVkLGlCQUFRLE1BQU0sMkNBQTJDLElBQUk7VUFDN0Q7O0FBTUosV0FBSSxpQkFDRixvQkFBbUIsT0FBTztXQUUxQixvQkFBbUIsb0JBQW9CO0FBSXpDLGNBQU87O09BRVQ7S0FDRixNQUFNLDhCQUE4QixFQUNsQyxRQUNBLFdBQ0MsVUFBVTtBQUNYLFVBQUksY0FBYyxRQUFRLFVBSXhCLEtBQUksY0FBYyxRQUFRLFVBQVUsWUFBWSxpREFDOUMsVUFBUztVQUVULFFBQU8sSUFBSSxNQUFNLGNBQWMsUUFBUSxVQUFVLFFBQVEsQ0FBQztlQUVuRCxTQUFTLE1BQU0sa0NBR3hCLFFBQU8sSUFBSSxNQUFNLE1BQU0sUUFBUSxDQUFDO1VBRWhDLFNBQVEsTUFBTTs7S0FHbEIsTUFBTSxzQkFBc0IsTUFBTSxVQUFVLGlCQUFpQixHQUFHLFNBQVM7QUFDdkUsVUFBSSxLQUFLLFNBQVMsU0FBUyxRQUN6QixPQUFNLElBQUksTUFBTSxxQkFBcUIsU0FBUyxRQUFRLEdBQUcsbUJBQW1CLFNBQVMsUUFBUSxDQUFDLE9BQU8sS0FBSyxVQUFVLEtBQUssU0FBUztBQUVwSSxVQUFJLEtBQUssU0FBUyxTQUFTLFFBQ3pCLE9BQU0sSUFBSSxNQUFNLG9CQUFvQixTQUFTLFFBQVEsR0FBRyxtQkFBbUIsU0FBUyxRQUFRLENBQUMsT0FBTyxLQUFLLFVBQVUsS0FBSyxTQUFTO0FBRW5JLGFBQU8sSUFBSSxTQUFTLFNBQVMsV0FBVztPQUN0QyxNQUFNLFlBQVksMkJBQTJCLEtBQUssTUFBTTtRQUN0RDtRQUNBO1FBQ0QsQ0FBQztBQUNGLFlBQUssS0FBSyxVQUFVO0FBQ3BCLHVCQUFnQixZQUFZLEdBQUcsS0FBSztRQUNwQzs7S0FFSixNQUFNLGlCQUFpQjtNQUNyQixVQUFVLEVBQ1IsU0FBUyxFQUNQLG1CQUFtQixVQUFVLDBCQUEwQixFQUN4RCxFQUNGO01BQ0QsU0FBUztPQUNQLFdBQVcsVUFBVSxrQkFBa0I7T0FDdkMsbUJBQW1CLFVBQVUsa0JBQWtCO09BQy9DLGFBQWEsbUJBQW1CLEtBQUssTUFBTSxlQUFlO1FBQ3hELFNBQVM7UUFDVCxTQUFTO1FBQ1YsQ0FBQztPQUNIO01BQ0QsTUFBTSxFQUNKLGFBQWEsbUJBQW1CLEtBQUssTUFBTSxlQUFlO09BQ3hELFNBQVM7T0FDVCxTQUFTO09BQ1YsQ0FBQyxFQUNIO01BQ0Y7S0FDRCxNQUFNLGtCQUFrQjtNQUN0QixPQUFPO09BQ0wsU0FBUztPQUNULFNBQVM7T0FDVjtNQUNELEtBQUs7T0FDSCxTQUFTO09BQ1QsU0FBUztPQUNWO01BQ0QsS0FBSztPQUNILFNBQVM7T0FDVCxTQUFTO09BQ1Y7TUFDRjtBQUNELGlCQUFZLFVBQVU7TUFDcEIsU0FBUyxFQUNQLEtBQUssaUJBQ047TUFDRCxVQUFVLEVBQ1IsS0FBSyxpQkFDTjtNQUNELFVBQVUsRUFDUixLQUFLLGlCQUNOO01BQ0Y7QUFDRCxZQUFPLFdBQVcsZUFBZSxnQkFBZ0IsWUFBWTs7QUFLL0QsYUFBTyxVQUFVLFNBQVMsT0FBTztTQUVqQyxVQUFPLFVBQVUsV0FBVztJQUU5Qjs7OztDQy9xQ0YsSUFBYSx1QkFBMkM7RUFDdEQ7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLEtBQUs7R0FDTCxtQkFBbUIsT0FBVSxLQUFLO0dBQ2xDLFNBQVM7R0FDVjtFQUNEO0dBQ0UsSUFBSTtHQUNKLE1BQU07R0FDTixLQUFLO0dBQ0wsbUJBQW1CLE9BQVUsS0FBSztHQUNsQyxTQUFTO0dBQ1Y7RUFDRDtHQUNFLElBQUk7R0FDSixNQUFNO0dBQ04sS0FBSztHQUNMLG1CQUFtQixPQUFVLEtBQUs7R0FDbEMsU0FBUztHQUNWO0VBQ0Q7R0FDRSxJQUFJO0dBQ0osTUFBTTtHQUNOLEtBQUs7R0FDTCxtQkFBbUIsT0FBVSxLQUFLO0dBQ2xDLFNBQVM7R0FDVjtFQUNGO0NBRUQsSUFBTSxpQkFBaUI7Q0FDdkIsSUFBTSxtQkFBbUI7Ozs7Q0FLekIsZUFBZSxnQkFBZ0IsUUFBNEQ7QUFDekYsTUFBSTtHQUNGLE1BQU0sU0FBUyxNQUFNLGNBQWMsT0FBTyxHQUFHO0dBQzdDLE1BQU0sVUFBa0MsRUFBRTtBQUcxQyxPQUFJLFFBQVEsS0FDVixTQUFRLG1CQUFtQixPQUFPO0FBRXBDLE9BQUksUUFBUSxhQUNWLFNBQVEsdUJBQXVCLE9BQU87R0FHeEMsTUFBTSxXQUFXLE1BQU0sTUFBTSxPQUFPLEtBQUs7SUFDdkM7SUFDQSxRQUFRLFlBQVksUUFBUSxJQUFNO0lBQ25DLENBQUM7QUFHRixPQUFJLFNBQVMsV0FBVyxPQUFPLE9BQzdCLFFBQU87QUFHVCxPQUFJLENBQUMsU0FBUyxJQUFJO0FBQ2hCLFlBQVEsS0FBSyxnQ0FBZ0MsT0FBTyxHQUFHLElBQUksU0FBUyxTQUFTO0FBQzdFLFdBQU87O0dBR1QsTUFBTSxVQUFVLE1BQU0sU0FBUyxNQUFNO0dBQ3JDLE1BQU0sT0FBTyxTQUFTLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBQTtHQUM3QyxNQUFNLGVBQWUsU0FBUyxRQUFRLElBQUksZ0JBQWdCLElBQUksS0FBQTtHQUU5RCxNQUFNLFNBQTJCO0lBQy9CLElBQUksT0FBTztJQUNYO0lBQ0EsV0FBVyxLQUFLLEtBQUs7SUFDckI7SUFDQTtJQUNEO0FBR0QsU0FBTSxVQUFVLE9BQU8sSUFBSSxPQUFPO0FBQ2xDLFdBQVEsSUFBSSx3QkFBd0IsT0FBTyxHQUFHLElBQUksWUFBWSxRQUFRLE9BQU8sQ0FBQyxHQUFHO0FBRWpGLFVBQU87V0FDQSxPQUFPO0FBQ2QsV0FBUSxLQUFLLCtCQUErQixPQUFPLEdBQUcsSUFBSSxNQUFNO0FBQ2hFLFVBQU8sTUFBTSxjQUFjLE9BQU8sR0FBRzs7Ozs7O0NBT3pDLGVBQWUsY0FBYyxJQUE4QztBQUN6RSxNQUFJO0FBRUYsV0FEZSxNQUFNLE9BQU8sUUFBUSxNQUFNLElBQUksaUJBQWlCLEdBQUcsRUFDcEQsaUJBQWlCLE9BQU87VUFDaEM7QUFDTixVQUFPOzs7Ozs7Q0FPWCxlQUFlLFVBQVUsSUFBWSxNQUF1QztBQUMxRSxNQUFJO0FBQ0YsU0FBTSxPQUFPLFFBQVEsTUFBTSxJQUFJLEdBQUcsaUJBQWlCLEtBQUssTUFBTSxDQUFDO1dBQ3hELE9BQU87QUFDZCxXQUFRLEtBQUssZ0NBQWdDLEdBQUcsSUFBSSxNQUFNOzs7Ozs7Q0FPOUQsZUFBc0IsY0FDcEIsVUFBOEIsc0JBQ1U7RUFDeEMsTUFBTSwwQkFBVSxJQUFJLEtBQStCO0VBSW5ELE1BQU0sVUFIVSxRQUFRLFFBQU8sTUFBSyxFQUFFLFFBQVEsQ0FHdEIsSUFBSSxPQUFPLFdBQVc7R0FDNUMsTUFBTSxPQUFPLE1BQU0sZ0JBQWdCLE9BQU87QUFDMUMsT0FBSSxLQUNGLFNBQVEsSUFBSSxPQUFPLElBQUksS0FBSztJQUU5QjtBQUVGLFFBQU0sUUFBUSxJQUFJLFFBQVE7QUFHMUIsUUFBTSxPQUFPLFFBQVEsTUFBTSxJQUFJLEdBQUcsbUJBQW1CLEtBQUssS0FBSyxFQUFFLENBQUM7QUFFbEUsU0FBTzs7Ozs7Q0FNVCxlQUFzQixhQUFhLFVBQThCLHNCQUF3QztBQUN2RyxNQUFJO0dBRUYsTUFBTSxlQURTLE1BQU0sT0FBTyxRQUFRLE1BQU0sSUFBSSxpQkFBaUIsRUFDcEMscUJBQXFCO0FBRWhELFFBQUssTUFBTSxVQUFVLFNBQVM7QUFDNUIsUUFBSSxDQUFDLE9BQU8sUUFBUztBQUVyQixRQURZLEtBQUssS0FBSyxHQUFHLGNBQ2YsT0FBTyxrQkFDZixRQUFPOztBQUlYLFVBQU87VUFDRDtBQUNOLFVBQU87Ozs7OztDQU9YLGVBQXNCLGVBQ3BCLFVBQThCLHNCQUNVO0VBQ3hDLE1BQU0sMEJBQVUsSUFBSSxLQUErQjtBQUVuRCxPQUFLLE1BQU0sVUFBVSxTQUFTO0FBQzVCLE9BQUksQ0FBQyxPQUFPLFFBQVM7R0FDckIsTUFBTSxPQUFPLE1BQU0sY0FBYyxPQUFPLEdBQUc7QUFDM0MsT0FBSSxLQUNGLFNBQVEsSUFBSSxPQUFPLElBQUksS0FBSzs7QUFJaEMsU0FBTzs7Q0FZVCxTQUFTLFlBQVksT0FBdUI7QUFDMUMsTUFBSSxRQUFRLEtBQU0sUUFBTyxHQUFHLE1BQU07QUFDbEMsTUFBSSxRQUFRLE9BQU8sS0FBTSxRQUFPLElBQUksUUFBUSxNQUFNLFFBQVEsRUFBRSxDQUFDO0FBQzdELFNBQU8sSUFBSSxTQUFTLE9BQU8sT0FBTyxRQUFRLEVBQUUsQ0FBQzs7Ozs7OztDQy9ML0MsU0FBZ0IsaUJBQWlCLFVBQXVDO0VBQ3RFLE1BQU0sUUFBUSxZQUFZLEtBQUs7RUFDL0IsTUFBTSwrQkFBZSxJQUFJLEtBQWE7RUFDdEMsTUFBTSw4QkFBYyxJQUFJLEtBQWE7RUFDckMsSUFBSSxhQUFhO0VBQ2pCLElBQUksZUFBZTtBQUVuQixPQUFLLE1BQU0sV0FBVyxVQUFVO0dBQzlCLE1BQU0sUUFBUSxRQUFRLE1BQU0sS0FBSztBQUVqQyxRQUFLLE1BQU0sUUFBUSxPQUFPO0lBQ3hCLE1BQU0sVUFBVSxLQUFLLE1BQU07QUFHM0IsUUFBSSxDQUFDLFdBQVcsUUFBUSxXQUFXLElBQUksSUFBSSxRQUFRLFdBQVcsSUFBSSxDQUNoRTtBQUdGO0FBR0EsUUFBSSxRQUFRLFdBQVcsS0FBSyxFQUFFO0FBQzVCO0FBQ0E7O0FBSUYsUUFBSSxRQUFRLFNBQVMsS0FBSyxFQUFFO0tBQzFCLE1BQU0sV0FBVyxtQkFBbUIsUUFBUTtBQUM1QyxTQUFJLFNBQ0YsY0FBYSxJQUFJLFNBQVM7U0FFMUI7QUFFRjs7QUFJRixRQUFJLFFBQVEsU0FBUyxNQUFNLElBQUksUUFBUSxTQUFTLE1BQU0sRUFBRTtBQUV0RDtBQUNBOztJQUlGLE1BQU0sYUFBYSxxQkFBcUIsUUFBUTtBQUNoRCxRQUFJLFdBQ0YsYUFBWSxJQUFJLFdBQVc7UUFFM0I7OztFQUtOLE1BQU0sY0FBYyxZQUFZLEtBQUssR0FBRztBQUV4QyxTQUFPO0dBQ0wsY0FBYyxNQUFNLEtBQUssYUFBYTtHQUN0QyxhQUFhLE1BQU0sS0FBSyxZQUFZO0dBQ3BDLE9BQU87SUFDTDtJQUNBLFVBQVUsYUFBYTtJQUN2QixVQUFVLFlBQVk7SUFDdEI7SUFDQTtJQUNEO0dBQ0Y7Ozs7O0NBTUgsU0FBUyxtQkFBbUIsTUFBNkI7RUFFdkQsTUFBTSxpQkFBaUIsS0FBSyxRQUFRLEtBQUs7QUFDekMsTUFBSSxtQkFBbUIsR0FBSSxRQUFPO0VBR2xDLElBQUksV0FBVyxLQUFLLFVBQVUsaUJBQWlCLEVBQUU7QUFHakQsTUFBSSxDQUFDLFlBQVksU0FBUyxNQUFNLENBQUMsV0FBVyxFQUFHLFFBQU87QUFHdEQsYUFBVyxTQUFTLE1BQU07QUFHMUIsTUFBSSxDQUFDLFNBQVMsTUFBTSxxQkFBcUIsRUFBRTtBQU0zQyxNQUFJLFNBQVMsU0FBUyxRQUFRLElBQUksU0FBUyxTQUFTLFFBQVEsRUFBRTtBQUs5RCxNQUFJLFNBQVMsU0FBUyxLQUFLLElBQUksU0FBUyxTQUFTLElBQUksQ0FDbkQsUUFBTztBQUdULFNBQU87Ozs7O0NBTVQsU0FBUyxxQkFBcUIsTUFBNkI7QUFFekQsTUFBSSxLQUFLLFNBQVMsS0FBSyxJQUFJLEtBQUssU0FBUyxNQUFNLElBQUksS0FBSyxTQUFTLE1BQU0sQ0FDckUsUUFBTztBQUlULE1BQUksS0FBSyxTQUFTLElBQUssUUFBTztBQUc5QixNQUFJLEtBQUssV0FBVyxJQUFJLENBQUUsUUFBTztFQUVqQyxJQUFJLFVBQVU7QUFJZCxNQUFJLFFBQVEsV0FBVyxLQUFLLEVBQUU7QUFDNUIsYUFBVSxRQUFRLFVBQVUsRUFBRTtHQUU5QixNQUFNLFNBQVMsUUFBUSxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUM7QUFDOUQsT0FBSSxVQUFVLE9BQU8sU0FBUyxJQUFJLENBQ2hDLFFBQU87O0FBS1gsTUFBSSxRQUFRLFdBQVcsSUFBSSxDQUN6QixXQUFVLFFBQVEsVUFBVSxFQUFFO0FBRWhDLE1BQUksUUFBUSxTQUFTLElBQUksQ0FDdkIsV0FBVSxRQUFRLFVBQVUsR0FBRyxRQUFRLFNBQVMsRUFBRTtBQUlwRCxZQUFVLFFBQVEsUUFBUSxPQUFPLElBQUk7QUFHckMsTUFBSSxRQUFRLFNBQVMsRUFBRyxRQUFPO0FBSS9CLE1BQUksQ0FBQyxRQUFRLFdBQVcsSUFBSSxJQUFJLFFBQVEsU0FBUyxJQUFJLEVBQUU7R0FFckQsTUFBTSxhQUFhLFFBQVEsTUFBTSxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQztBQUNwRCxPQUFJLGNBQWMsV0FBVyxTQUFTLElBQUksQ0FDeEMsUUFBTzs7QUFLWCxTQUFPOzs7OztDQU1ULFNBQWdCLGlCQUNkLE9BQ21CO0FBRW5CLFNBQU8saUJBRFUsTUFBTSxLQUFLLE1BQU0sUUFBUSxDQUFDLENBQUMsS0FBSSxNQUFLLEVBQUUsUUFBUSxDQUM5Qjs7Ozs7OztDQzNHbkMsU0FBZ0IsbUJBQ2QsYUFDQSxVQUFrQixLQUNYO0VBQ1AsTUFBTSxRQUFlLEVBQUU7RUFDdkIsSUFBSSxTQUFTO0FBRWIsT0FBSyxNQUFNLFdBQVcsYUFBYTtBQUVqQyxPQUFJLFFBQVEsU0FBUyxFQUFHO0FBRXhCLE9BQUk7SUFHRixNQUFNLGVBQWUsd0JBREUsUUFBUSxRQUFRLHVCQUF1QixPQUFPO0FBR3JFLFVBQU0sS0FBSztLQUNULElBQUk7S0FDSixVQUFVO0tBQ1YsUUFBUSxFQUFFLE1BQU0sU0FBUztLQUN6QixXQUFXO01BQ1QsYUFBYTtNQUNiLGVBQWU7T0FBQztPQUFVO09BQVM7T0FBa0I7T0FBYTtPQUFTO09BQU87TUFDbkY7S0FDRixDQUFDO0FBR0YsUUFBSSxTQUFTLFVBQVUsSUFBTTtXQUN2Qjs7QUFLVixTQUFPOzs7OztDQU1ULGVBQXNCLGtCQUNwQixPQUNlO0FBQ2YsTUFBSTtHQUdGLE1BQU0sZUFEZ0IsTUFBTSxPQUFPLHNCQUFzQixpQkFBaUIsRUFDeEMsS0FBSSxNQUFLLEVBQUUsR0FBRztBQUdoRCxPQUFJLFlBQVksU0FBUyxFQUN2QixPQUFNLE9BQU8sc0JBQXNCLG1CQUFtQixFQUNwRCxlQUFlLGFBQ2hCLENBQUM7R0FJSixNQUFNLFlBQVk7QUFDbEIsUUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLFdBQVc7SUFDaEQsTUFBTSxRQUFRLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVTtBQUMzQyxVQUFNLE9BQU8sc0JBQXNCLG1CQUFtQixFQUNwRCxVQUFVLE9BQ1gsQ0FBQzs7QUFHSixXQUFRLElBQUksd0JBQXdCLE1BQU0sT0FBTyx5QkFBeUI7V0FDbkUsT0FBTztBQUNkLFdBQVEsTUFBTSwrQ0FBK0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytHckUsTUFBQTs7QUFPRSxPQUFBLENBQUEsU0FBQSxHQUFBLE9BQUEsSUFBQSxNQUFBLFFBQUEsU0FBQSxTQUFBOztBQU9BLFdBQUEsSUFBQSx1QkFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLE9BQUEsVUFBQTtBQUNBLFVBQUE7O0FBRUEsV0FBQSxLQUFBLCtCQUFBLE9BQUEsS0FBQSwyQkFBQSxNQUFBO0FBR0EsVUFBQSxvQkFBQSxPQUFBOzs7Ozs7OztBQVlGLE1BQUEsQ0FBQSxVQUFBLFFBQUEsRUFBQTtBQUlBLE1BQUE7OztBQU9FLE9BQUEsQ0FBQSxTQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsUUFBQSxTQUFBLFNBQUE7O0FBT0EsV0FBQSxJQUFBLDRCQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsT0FBQSxVQUFBO0FBQ0EsVUFBQTs7QUFFQSxXQUFBLE1BQUEsb0NBQUEsT0FBQSxLQUFBLElBQUEsTUFBQTtBQUNBLFVBQUEsRUFBQTs7Ozs7O0FBUUYsT0FBQSxNQUFBLFFBQUEsT0FBQTs7QUFJRSxPQUFBLENBQUEsV0FBQSxRQUFBLFdBQUEsSUFBQSxJQUFBLFFBQUEsV0FBQSxJQUFBLElBQUEsUUFBQSxXQUFBLElBQUEsQ0FBQTs7QUFNQSxPQUFBLFdBQUEsU0FBQTs7QUFHRSxRQUFBLE1BQUEsVUFBQSxFQUFBLFVBQUEsTUFBQTs7OztBQVVFLFFBQUEsTUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLE9BQUEsUUFBQSxNQUFBLE9BQUEsTUFBQSxTQUFBOzs7O0FBZUosT0FBQSxVQUFBLGNBQUEsT0FBQSxDQUFBLFNBQUEsS0FBQSxPQUFBLGFBQUEsQ0FBQTs7QUFLRixTQUFBLENBQUEsR0FBQSxJQUFBLElBQUEsUUFBQSxDQUFBOzs7QUFLQSxNQUFBLFdBQUEsZUFBQSxXQUFBLDJCQUFBLFdBQUEsbUJBQUEsV0FBQSxtQkFBQSxPQUFBLFdBQUEsTUFBQSxJQUFBLHVCQUFBLEtBQUEsT0FBQSxDQUFBLFFBQUE7QUFVQSxTQUFB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