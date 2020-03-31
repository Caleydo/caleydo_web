/*! phovea_core - v3.1.1-20200218-080405 - 2020
* https://phovea.caleydo.org
* Copyright (c) 2020 The Caleydo Team; Licensed BSD-3-Clause*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory();
	else
		root["phovea"] = root["phovea"] || {}, root["phovea"]["core"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 144);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (immutable) */ __webpack_exports__["b"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["c"] = __generator;
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Range1D__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CompositeRange1D__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Range1DGroup__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Range__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parser__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return __WEBPACK_IMPORTED_MODULE_3__Range__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return __WEBPACK_IMPORTED_MODULE_3__Range__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "none", function() { return __WEBPACK_IMPORTED_MODULE_3__Range__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Range1D", function() { return __WEBPACK_IMPORTED_MODULE_0__Range1D__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeRange1D", function() { return __WEBPACK_IMPORTED_MODULE_1__CompositeRange1D__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Range1DGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__Range1DGroup__["a"]; });
/* harmony export (immutable) */ __webpack_exports__["parse"] = parse;
/* harmony export (immutable) */ __webpack_exports__["range"] = range;
/* harmony export (immutable) */ __webpack_exports__["list"] = list;
/* harmony export (immutable) */ __webpack_exports__["join"] = join;
/* harmony export (immutable) */ __webpack_exports__["asUngrouped"] = asUngrouped;
/* harmony export (immutable) */ __webpack_exports__["composite"] = composite;
/* harmony export (immutable) */ __webpack_exports__["is"] = is;
/* harmony export (immutable) */ __webpack_exports__["cell"] = cell;
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */









/**
 * Interprets the parameter options and returns an appropriate range
 *
 * If it is null, returns a new range with all elements.
 * If the RangeLike is a range, then the range is returned unchanged.
 * If it is an array, the numbers in the array are treated as indices for a range.
 * If it is a string, the range is parsed according to the grammar defined in parser.ts
 *
 * @param arange something like a range
 * @returns {Range}
 */
function parse(arange) {
    if (arange === void 0) { arange = null; }
    if (arange === null) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Range__["b" /* all */])();
    }
    if (arange instanceof __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */]) {
        return arange;
    }
    if (Array.isArray(arange)) {
        if (Array.isArray(arange[0])) {
            return list.apply(void 0, arange);
        }
        return list(arange);
    }
    //join given array as string combined with ,
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parser__["a" /* default */])(Array.from(arguments).map(String).join(','));
}
/**
 * Creates a new range that includes all elements in the data structure
 * @returns {any}
 */
function range() {
    if (arguments.length === 0) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Range__["b" /* all */])();
    }
    var r = new __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */]();
    if (Array.isArray(arguments[0])) { //array mode
        Array.from(arguments).forEach(function (arr, i) {
            if (arr.length === 0) {
                return;
            }
            r.dim(i).setSlice(arr[0], arr[1], arr[2]);
        });
    }
    else if (Object.prototype.toString.call(arguments[0]) === '[object Object]') {
        // slice object mode
        Array.from(arguments).forEach(function (slice, i) {
            r.dim(i).setSlice(slice.from, slice.to, slice.step);
        });
    }
    else if (typeof arguments[0] === 'number') { //single slice mode
        r.dim(0).setSlice(arguments[0], arguments[1], arguments[2]);
    }
    return r;
}
function list() {
    if (arguments.length === 0) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Range__["b" /* all */])();
    }
    if (Array.isArray(arguments[0]) && arguments[0][0] instanceof __WEBPACK_IMPORTED_MODULE_0__Range1D__["a" /* default */]) {
        return new __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */](arguments[0]);
    }
    else if (Array.isArray(arguments[0])) { //array mode
        var r_1 = new __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */]();
        Array.from(arguments).forEach(function (arr, i) {
            if (arr instanceof __WEBPACK_IMPORTED_MODULE_0__Range1D__["a" /* default */]) {
                r_1.dims[i] = arr;
            }
            else {
                r_1.dim(i).setList(arr);
            }
        });
        return r_1;
    }
    else if (typeof arguments[0] === 'number') { //single slice mode
        var r = new __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */]();
        r.dim(0).setList(Array.from(arguments));
        return r;
    }
    else if (arguments[0] instanceof __WEBPACK_IMPORTED_MODULE_0__Range1D__["a" /* default */]) {
        return new __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */](Array.from(arguments));
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Range__["c" /* none */])();
}
function join() {
    if (arguments.length === 0) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Range__["b" /* all */])();
    }
    var ranges = arguments[0];
    if (!Array.isArray(ranges)) { //array mode
        ranges = Array.from(arguments);
    }
    return new __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */](ranges.map(function (r) { return r.dim(0); }));
}
/**
 * TODO document
 * @param range
 * @return {Range1DGroup}
 */
function asUngrouped(range) {
    return new __WEBPACK_IMPORTED_MODULE_2__Range1DGroup__["a" /* default */]('unnamed', 'gray', range);
}
/**
 * TODO document
 * @param name
 * @param groups
 * @return {CompositeRange1D}
 */
function composite(name, groups) {
    return new __WEBPACK_IMPORTED_MODULE_1__CompositeRange1D__["a" /* default */](name, groups);
}
/**
 * Tests if the given object is a range
 */
function is(obj) {
    return obj instanceof __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */];
}
/**
 * TODO document
 * @param dimIndices
 * @return {any}
 */
function cell() {
    var dimIndices = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dimIndices[_i] = arguments[_i];
    }
    return new __WEBPACK_IMPORTED_MODULE_3__Range__["a" /* default */](dimIndices.map(__WEBPACK_IMPORTED_MODULE_0__Range1D__["a" /* default */].single));
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_array__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "argFilter", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_array__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "argList", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_array__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "argSort", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_array__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_array__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_array__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dnd__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "copyDnD", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_dnd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hasDnDType", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_dnd__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "updateDropEffect", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_dnd__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dragAble", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_dnd__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropAble", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_dnd__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_unique__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flagId", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_unique__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_unique__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueString", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_unique__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_IdPool__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IdPool", function() { return __WEBPACK_IMPORTED_MODULE_3__internal_IdPool__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_promise__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "resolveImmediately", function() { return __WEBPACK_IMPORTED_MODULE_4__internal_promise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_HashProperties__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashProperties", function() { return __WEBPACK_IMPORTED_MODULE_5__internal_HashProperties__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal_PropertyHandler__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyHandler", function() { return __WEBPACK_IMPORTED_MODULE_6__internal_PropertyHandler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__internal_RemoveNodeObserver__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tslib__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offline", function() { return offline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server_url", function() { return server_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server_json_suffix", function() { return server_json_suffix; });
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony export (immutable) */ __webpack_exports__["mixin"] = mixin;
/* harmony export (immutable) */ __webpack_exports__["isUndefined"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["mod"] = mod;
/* harmony export (immutable) */ __webpack_exports__["bind"] = bind;
/* harmony export (immutable) */ __webpack_exports__["getter"] = getter;
/* harmony export (immutable) */ __webpack_exports__["isFunction"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["noop"] = noop;
/* harmony export (immutable) */ __webpack_exports__["constant"] = constant;
/* harmony export (immutable) */ __webpack_exports__["constantTrue"] = constantTrue;
/* harmony export (immutable) */ __webpack_exports__["constantFalse"] = constantFalse;
/* harmony export (immutable) */ __webpack_exports__["callable"] = callable;
/* harmony export (immutable) */ __webpack_exports__["randomId"] = randomId;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random_id", function() { return random_id; });
/* harmony export (immutable) */ __webpack_exports__["fixId"] = fixId;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_id", function() { return fix_id; });
/* harmony export (immutable) */ __webpack_exports__["onDOMNodeRemoved"] = onDOMNodeRemoved;
/* harmony export (immutable) */ __webpack_exports__["extendClass"] = extendClass;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "param", function() { return param; });
/* harmony export (immutable) */ __webpack_exports__["debounce"] = debounce;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayedCall", function() { return delayedCall; });
/* harmony export (immutable) */ __webpack_exports__["offset"] = offset;
/* harmony export (immutable) */ __webpack_exports__["bounds"] = bounds;
/* harmony export (immutable) */ __webpack_exports__["resolveIn"] = resolveIn;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */











var version = "3.1.1-20200218-080405";
/**
 * whether the standard api calls should be prevented
 * @type {boolean}
 */
var offline = false;
/* tslint:disable:variable-name */
/**
 * server prefix ofr api calls
 * @type {string}
 */
var server_url = ("/" || '/') + 'api';
/**
 * server suffix for api calls
 * @type {string}
 */
var server_json_suffix = '';
/* tslint:enable:variable-name */
/**
 * initializes certain properties of the core
 * @param config
 */
function init(config) {
    if (config === void 0) { config = {}; }
    config = mixin({
        offline: offline,
        server_url: server_url,
        server_json_suffix: server_json_suffix
    }, config);
    offline = config.offline;
    server_url = config.server_url;
    server_json_suffix = config.server_json_suffix;
}
/**
 * initializes itself based on script data attributes
 * @private
 */
function _init() {
    function find(name, camelCaseName) {
        if (camelCaseName === void 0) { camelCaseName = name.slice(0, 1).toUpperCase() + name.slice(1); }
        var node = document.currentScript || document.querySelector("script[data-phovea-" + name + "]");
        if (!node) {
            return undefined;
        }
        return node.dataset['phovea' + camelCaseName];
    }
    var config = {};
    if ('true' === find('offline')) {
        config.offline = true;
    }
    var v;
    if ((v = find('server-url', 'ServerUrl')) !== undefined) {
        config.server_url = v;
    }
    if ((v = find('server-json-suffix', 'ServerJsonSuffix')) !== undefined) {
        config.server_json_suffix = v;
    }
    //init myself
    init(config);
}
_init();
/**
 * integrate b into a and override all duplicates
 * @param {Object} a
 * @param {Object} bs
 * @returns {Object} a with extended b
 */
function mixin(a, b) {
    var bs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        bs[_i - 2] = arguments[_i];
    }
    bs.unshift(b);
    function extend(r, b) {
        Object.keys(b).forEach(function (key) {
            var v = b[key];
            if (Object.prototype.toString.call(v) === '[object Object]') {
                r[key] = (r[key] != null) ? extend(r[key], v) : v;
            }
            else {
                r[key] = v;
            }
        });
        return r;
    }
    bs.forEach(function (b) {
        if (b) {
            a = extend(a, b);
        }
    });
    return a;
}
/**
 * @deprecated use obj === undefined directly
 * @param obj
 * @return {boolean}
 */
function isUndefined(obj) {
    return typeof obj === 'undefined';
}
//fixes a javascript bug on using "%" with negative numbers
function mod(n, m) {
    return ((n % m) + m) % m;
}
/**
 * binds the given function to the given context / this arg
 * @deprecated use Function.prototype.bind directly
 * @param f
 * @param thisArg
 * @returns {function(): any}
 */
function bind(f, thisArg) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return f.bind.apply(f, [thisArg].concat(args));
}
/**
 * getter generator by name or index
 * @deprecated too simple to write
 */
function getter() {
    var attr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        attr[_i] = arguments[_i];
    }
    if (attr.length === 1) {
        return function (obj) { return obj[attr[0]]; };
    }
    return function (obj) { return attr.map(function (a) { return obj[a]; }); };
}
/**
 * @deprecated use `typeof(f) === 'function`
 * @param f
 * @return {boolean}
 */
function isFunction(f) {
    return typeof (f) === 'function';
}
/**
 * @deprecated use `(d) => d`
 * identity function
 */
function identity(d) {
    return d;
}
/**
 * a dummy function, which does exactly nothing, i.e. used as default
 * @deprecated use `()=>undefined`
 */
function noop() {
    //no op
}
/**
 * just returns the argument in any case
 * @deprecated use `() => x`
 * @param r - the value to return
 * @returns {*}
 */
function constant(r) {
    if (typeof r === 'boolean' && r === true) {
        return constantTrue;
    }
    if (typeof r === 'boolean' && r === false) {
        return constantFalse;
    }
    return function () { return r; };
}
/**
 * special constant function which returns always true, i.e., as a default for a filter function
 * @deprecated use ()=>true
 * @returns {boolean}
 */
function constantTrue() {
    return true;
}
/**
 * special constant function which returns always false, i.e., as a default for a filter function
 * @deprecated use ()=>false
 * @returns {boolean}
 */
function constantFalse() {
    return false;
}
/**
 * copies a plain object into a function and call a specific method onto direct call
 * @param obj - the
 * @param f
 * @deprecated
 */
function callable(obj, f) {
    //assert this.isPlainObject(obj);
    function CallAbleFactory() {
        var that;
        function CallAble() {
            that[f].apply(that, Array.from(arguments));
        }
        that = CallAble;
        mixin(CallAble, obj);
        return CallAble;
    }
    return CallAbleFactory;
}
/**
 * generates a random id of the given length
 * @param length length of the id
 * @returns {string}
 */
function randomId(length) {
    if (length === void 0) { length = 8; }
    var id = '';
    while (id.length < length) {
        id += Math.random().toString(36).slice(-8);
    }
    return id.substr(0, length);
}
/* tslint:disable:variable-name */
/**
 * @deprecated
 */
var random_id = randomId;
/* tslint:enable:variable-name */
/**
 * fixes a given name by converting it to plain camelcase
 * @param name
 * @return {string}
 */
function fixId(name) {
    var clean = name.replace(/[\s!#$%&'()*+,.\/:;<=>?@\[\\\]\^`{|}~_-]/g, ' ');
    var words = clean.trim().split(/\s+/); //remove heading and trailing spaces and combine multiple one during split
    return words.map(function (w, i) { return (i === 0 ? w[0].toLowerCase() : w[0].toUpperCase()) + w.slice(1); }).join('');
}
/* tslint:disable:variable-name */
/**
 * @deprecated
 */
var fix_id = fixId;
/* tslint:enable:variable-name */
var removeNodeObserver = new __WEBPACK_IMPORTED_MODULE_7__internal_RemoveNodeObserver__["a" /* default */]();
/**
 * utility function to get notified, when the given dom element is removed from its parent
 * @param node
 * @param callback
 */
function onDOMNodeRemoved(node, callback, thisArg) {
    if (Array.isArray(node)) {
        node.forEach(function (nodeid) { return removeNodeObserver.observe(nodeid, callback, thisArg); });
    }
    else {
        removeNodeObserver.observe(node, callback, thisArg);
    }
}
/**
 * extends class copied from TypeScript compiler
 * @param subClass
 * @param baseClass
 */
function extendClass(subClass, baseClass) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_tslib__["a" /* __extends */])(subClass, baseClass);
}
/**
 * access to hash parameters and set them, too
 * @type {HashProperties}
 */
var hash = new __WEBPACK_IMPORTED_MODULE_5__internal_HashProperties__["a" /* default */]();
/**
 * access to get parameters
 * @type {PropertyHandler}
 */
var param = new __WEBPACK_IMPORTED_MODULE_6__internal_PropertyHandler__["a" /* default */](location.search);
/**
 * create a debounce call, can be called multiple times but only the last one at most delayed by timeToDelay will be executed
 * @param callback
 * @param timeToDelay
 * @return {function(...[any]): undefined}
 */
function debounce(callback, timeToDelay) {
    if (timeToDelay === void 0) { timeToDelay = 100; }
    var tm = -1;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (tm >= 0) {
            clearTimeout(tm);
            tm = -1;
        }
        args.unshift(this);
        tm = setTimeout(callback.bind.apply(callback, args), timeToDelay);
    };
}
/**
 * @deprecated use debounce instead
 */
var delayedCall = debounce;
/**
 * computes the absolute offset of the given element
 * @param element
 * @return {{left: number, top: number, width: number, height: number}}
 */
function offset(element) {
    if (!element) {
        return { left: 0, top: 0, width: 0, height: 0 };
    }
    var obj = element.getBoundingClientRect();
    var w = element.ownerDocument.defaultView;
    return {
        left: obj.left + w.pageXOffset,
        top: obj.top + w.pageYOffset,
        width: obj.width,
        height: obj.height
    };
}
/**
 * returns the bounding box of a given element similar to offset
 * @param element
 * @returns {{x: number, y: number, w: number, h: number}}
 */
function bounds(element) {
    if (!element) {
        return { x: 0, y: 0, w: 0, h: 0 };
    }
    var obj = element.getBoundingClientRect();
    return {
        x: obj.left,
        y: obj.top,
        w: obj.width,
        h: obj.height
    };
}
/**
 * returns a promise that resolves in the given number of milliseconds
 * @param milliseconds the number of milliseconds to resolve
 */
function resolveIn(milliseconds) {
    if (milliseconds <= 0) {
        return Promise.resolve(null);
    }
    return new Promise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__security__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_TYPE_CATEGORICAL", function() { return VALUE_TYPE_CATEGORICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_TYPE_STRING", function() { return VALUE_TYPE_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_TYPE_REAL", function() { return VALUE_TYPE_REAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_TYPE_INT", function() { return VALUE_TYPE_INT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADataType", function() { return ADataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyDataType", function() { return DummyDataType; });
/* harmony export (immutable) */ __webpack_exports__["isDataType"] = isDataType;
/* harmony export (immutable) */ __webpack_exports__["assignData"] = assignData;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["mask"] = mask;
/* harmony export (immutable) */ __webpack_exports__["categorical2partitioning"] = categorical2partitioning;
/* harmony export (immutable) */ __webpack_exports__["defineDataType"] = defineDataType;
/* harmony export (immutable) */ __webpack_exports__["guessValueTypeDesc"] = guessValueTypeDesc;
/* harmony export (immutable) */ __webpack_exports__["createDefaultDataDesc"] = createDefaultDataDesc;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 *
 * This file defines interfaces for various data types and their metadata.
 */






var VALUE_TYPE_CATEGORICAL = 'categorical';
var VALUE_TYPE_STRING = 'string';
var VALUE_TYPE_REAL = 'real';
var VALUE_TYPE_INT = 'int';
/**
 * dummy data type just holding the description
 */
var ADataType = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ADataType, _super);
    function ADataType(desc) {
        var _this = _super.call(this) || this;
        _this.desc = desc;
        return _this;
    }
    Object.defineProperty(ADataType.prototype, "dim", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    ADataType.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["all"])(); }
        return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["none"])());
    };
    ADataType.prototype.idView = function (idRange) {
        return Promise.resolve(this);
    };
    Object.defineProperty(ADataType.prototype, "idtypes", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    ADataType.prototype.persist = function () {
        return this.desc.id;
    };
    ADataType.prototype.restore = function (persisted) {
        return this;
    };
    ADataType.prototype.toString = function () {
        return this.persist();
    };
    return ADataType;
}(__WEBPACK_IMPORTED_MODULE_2__idtype__["SelectAble"]));

var DummyDataType = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](DummyDataType, _super);
    function DummyDataType(desc) {
        return _super.call(this, desc) || this;
    }
    return DummyDataType;
}(ADataType));

/**
 * since there is no instanceOf for interfaces
 * @param v
 * @return {any}
 */
function isDataType(v) {
    if (v === null || v === undefined) {
        return false;
    }
    if (v instanceof ADataType) {
        return true;
    }
    //sounds good
    return (typeof (v.idView) === 'function' && typeof (v.persist) === 'function' && typeof (v.restore) === 'function' && v instanceof __WEBPACK_IMPORTED_MODULE_2__idtype__["SelectAble"] && ('desc' in v) && ('dim' in v));
}
/**
 * utility to assign a dataset to an html element, similar to d3
 * @param node
 * @param data
 */
function assignData(node, data) {
    node.__data__ = data;
}
/**
 * transpose the given matrix
 * @param m
 * @returns {*}
 */
function transpose(m) {
    if (m.length === 0 || m[0].length === 0) {
        return [];
    }
    var r = m[0].map(function (i) { return [i]; });
    for (var i = 1; i < m.length; ++i) {
        m[i].forEach(function (v, i) { return r[i].push(v); });
    }
    return r;
}
function maskImpl(arr, missing) {
    if (Array.isArray(arr)) {
        var vs = arr;
        if (vs.indexOf(missing) >= 0) {
            return vs.map(function (v) { return v === missing ? NaN : v; });
        }
    }
    return arr === missing ? NaN : arr;
}
function mask(arr, desc) {
    if (desc.type === VALUE_TYPE_INT && 'missing' in desc) {
        return maskImpl(arr, desc.missing);
    }
    if (desc.type === VALUE_TYPE_INT || desc.type === VALUE_TYPE_REAL) {
        // replace null values with Number.NaN
        return maskImpl(arr, null);
    }
    return arr;
}
/**
 * converts the given categorical data to a grouped range
 * @param data
 * @param categories
 * @param options
 * @return {CompositeRange1D}
 */
function categorical2partitioning(data, categories, options) {
    if (options === void 0) { options = {}; }
    var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({
        skipEmptyCategories: true,
        colors: ['gray'],
        labels: null,
        name: 'Partitioning'
    }, options);
    var groups = categories.map(function (d, i) {
        return {
            name: m.labels ? m.labels[i] : d.toString(),
            color: m.colors[Math.min(i, m.colors.length - 1)],
            indices: []
        };
    });
    data.forEach(function (d, j) {
        var i = categories.indexOf(d);
        if (i >= 0) {
            groups[i].indices.push(j);
        }
    });
    if (m.skipEmptyCategories) {
        groups = groups.filter(function (g) { return g.indices.length > 0; });
    }
    var granges = groups.map(function (g) {
        return new __WEBPACK_IMPORTED_MODULE_4__range__["Range1DGroup"](g.name, g.color, __WEBPACK_IMPORTED_MODULE_4__range__["Range1D"].from(g.indices));
    });
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["composite"])(m.name, granges);
}
/**
 * utility function to create a datatype, designed for JavaScript usage
 * @param name
 * @param functions the functions to add
 * @return {function(IDataDescription): undefined}
 */
function defineDataType(name, functions) {
    function DataType(desc) {
        ADataType.call(this, desc);
        if (typeof (this.init) === 'function') {
            this.init.apply(this, Array.from(arguments));
        }
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["extendClass"])(DataType, ADataType);
    DataType.prototype.toString = function () { return name; };
    DataType.prototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(DataType.prototype, functions);
    return DataType;
}
function isNumeric(obj) {
    return (obj - parseFloat(obj) + 1) >= 0;
}
/**
 * guesses the type of the given value array returning its description
 * @param arr
 * @return {any}
 */
function guessValueTypeDesc(arr) {
    if (arr.length === 0) {
        return { type: 'string' }; //doesn't matter
    }
    var test = arr[0];
    if (typeof test === 'number' || isNumeric(test)) {
        return { type: VALUE_TYPE_REAL, range: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["extent"])(arr.map(parseFloat)) };
    }
    var values = new Set(arr);
    if (values.size < arr.length * 0.2 || values.size < 8) {
        //guess as categorical
        return { type: 'categorical', categories: Array.from(values.values()) };
    }
    return { type: 'string' };
}
/**
 * creates a default data description
 * @return {{type: string, id: string, name: string, fqname: string, description: string, creator: string, ts: number}}
 */
function createDefaultDataDesc(namespace) {
    if (namespace === void 0) { namespace = 'localData'; }
    var id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["uniqueString"])(namespace);
    return {
        type: 'default',
        id: id,
        name: id,
        fqname: id,
        description: '',
        creator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__security__["currentUserNameOrAnonymous"])(),
        ts: Date.now()
    };
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manager__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clearSelection", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_REGISTER_IDTYPE", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "listAll", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "persist", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "restore", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "resolveProduct", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isInternalIDType", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ASelectAble__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAble", function() { return __WEBPACK_IMPORTED_MODULE_1__ASelectAble__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IIDType__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asSelectOperation", function() { return __WEBPACK_IMPORTED_MODULE_2__IIDType__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSelectionType", function() { return __WEBPACK_IMPORTED_MODULE_2__IIDType__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hoverSelectionType", function() { return __WEBPACK_IMPORTED_MODULE_2__IIDType__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOperation", function() { return __WEBPACK_IMPORTED_MODULE_2__IIDType__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toSelectOperation", function() { return __WEBPACK_IMPORTED_MODULE_2__IIDType__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "integrateSelection", function() { return __WEBPACK_IMPORTED_MODULE_2__IIDType__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IDType__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IDType", function() { return __WEBPACK_IMPORTED_MODULE_3__IDType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AProductSelectAble__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AProductSelectAble", function() { return __WEBPACK_IMPORTED_MODULE_4__AProductSelectAble__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProductIDType__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProductIDType", function() { return __WEBPACK_IMPORTED_MODULE_5__ProductIDType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ObjectManager__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectManager", function() { return __WEBPACK_IMPORTED_MODULE_6__ObjectManager__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isId", function() { return __WEBPACK_IMPORTED_MODULE_6__ObjectManager__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toId", function() { return __WEBPACK_IMPORTED_MODULE_6__ObjectManager__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LocalIDAssigner__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalIDAssigner", function() { return __WEBPACK_IMPORTED_MODULE_7__LocalIDAssigner__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createLocalAssigner", function() { return __WEBPACK_IMPORTED_MODULE_7__LocalIDAssigner__["b"]; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */










/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
/* harmony export (immutable) */ __webpack_exports__["on"] = on;
/* harmony export (immutable) */ __webpack_exports__["off"] = off;
/* harmony export (immutable) */ __webpack_exports__["fire"] = fire;
/* harmony export (immutable) */ __webpack_exports__["getRegisteredHandlerCount"] = getRegisteredHandlerCount;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var Event = /** @class */ (function () {
    function Event(type, args, target, delegateTarget) {
        this.type = type;
        this.args = args;
        this.target = target;
        this.delegateTarget = delegateTarget;
        this.timeStamp = new Date();
        this.stopped = false;
        this.stopedPropagation = false;
    }
    Object.defineProperty(Event.prototype, "currentTarget", {
        get: function () {
            return this.target;
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.isImmediatePropagationStopped = function () {
        return this.stopped;
    };
    Event.prototype.stopImmediatePropagation = function () {
        this.stopped = true;
    };
    Event.prototype.isPropagationStopped = function () {
        return this.stopedPropagation;
    };
    Event.prototype.stopPropagation = function () {
        this.stopedPropagation = true;
    };
    return Event;
}());
var SingleEventHandler = /** @class */ (function () {
    function SingleEventHandler(type) {
        this.type = type;
        this.listeners = [];
        //nothing else to do
    }
    SingleEventHandler.prototype.push = function (listener) {
        this.listeners.push(listener);
    };
    SingleEventHandler.prototype.remove = function (listener) {
        var i = this.listeners.indexOf(listener);
        if (i >= 0) {
            this.listeners.splice(i, 1);
            return true;
        }
        return false;
    };
    SingleEventHandler.prototype.fire = function (event) {
        if (this.listeners.length === 0) {
            return false;
        }
        var largs = [event].concat(event.args);
        if (this.listeners.length === 1) {
            this.listeners[0].apply(event, largs);
        }
        else {
            //work on a copy in case the number changes
            var l = this.listeners.slice(), ll = l.length;
            for (var i = 0; i < ll && !event.isImmediatePropagationStopped(); ++i) {
                l[i].apply(event, largs);
            }
        }
        return true;
    };
    Object.defineProperty(SingleEventHandler.prototype, "length", {
        get: function () {
            return this.listeners.length;
        },
        enumerable: true,
        configurable: true
    });
    return SingleEventHandler;
}());
function createEvent(event, args, target) {
    return new Event(event, args, target, target);
}
function propagateEvent(event, target) {
    return new Event(event.type, event.args, target, event.target);
}
/**
 * EventHandler base class
 */
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        var _this = this;
        this.handlers = new Map();
        this.propagationHandler = function (event) {
            if (!event.isPropagationStopped()) {
                _this.fireEvent(propagateEvent(event, _this));
            }
        };
    }
    /**
     * register a global event handler
     * @param events either one event string (multiple are supported using , as separator) or a map of event handlers
     * @param handler the handler in case of a given string
     */
    EventHandler.prototype.on = function (events, handler) {
        var _this = this;
        if (typeof events === 'string') {
            events.split(EventHandler.MULTI_EVENT_SEPARATOR).forEach(function (event) {
                if (!_this.handlers.has(event)) {
                    _this.handlers.set(event, new SingleEventHandler(event));
                }
                _this.handlers.get(event).push(handler);
            });
        }
        else {
            Object.keys(events).forEach(function (event) {
                var h = events[event];
                _this.on(event, h);
            });
        }
        return this;
    };
    /**
     * unregister a global event handler
     * @param events
     * @param handler
     */
    EventHandler.prototype.off = function (events, handler) {
        var _this = this;
        if (typeof events === 'string') {
            events.split(EventHandler.MULTI_EVENT_SEPARATOR).forEach(function (event) {
                if (_this.handlers.has(event)) {
                    var h = _this.handlers.get(event);
                    h.remove(handler);
                    if (h.length === 0) {
                        _this.handlers.delete(event);
                    }
                }
            });
        }
        else {
            Object.keys(events).forEach(function (event) {
                var h = events[event];
                _this.off(event, h);
            });
        }
        return this;
    };
    /**
     * list for each registered event the number of listeners
     */
    EventHandler.prototype.getRegisteredHandlerCount = function () {
        var r = {};
        this.handlers.forEach(function (handler, type) {
            r[type] = handler.length;
        });
        return r;
    };
    /**
     * fires an event
     * @param events name(s) of the event
     * @param args additional arguments
     */
    EventHandler.prototype.fire = function (events) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        events.split(EventHandler.MULTI_EVENT_SEPARATOR).forEach(function (event) {
            _this.fireEvent(createEvent(event, args, _this));
        });
        return this;
    };
    EventHandler.prototype.fireEvent = function (event) {
        if (this.handlers.has(event.type)) {
            var h = this.handlers.get(event.type);
            return h.fire(event);
        }
        return false;
    };
    /**
     * registers on the given event handler and propagates the given events to itself
     * @param progatee
     * @param events
     */
    EventHandler.prototype.propagate = function (progatee) {
        var events = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            events[_i - 1] = arguments[_i];
        }
        progatee.on(events.join(EventHandler.MULTI_EVENT_SEPARATOR), this.propagationHandler);
    };
    EventHandler.prototype.stopPropagation = function (progatee) {
        var events = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            events[_i - 1] = arguments[_i];
        }
        progatee.off(events.join(EventHandler.MULTI_EVENT_SEPARATOR), this.propagationHandler);
    };
    EventHandler.MULTI_EVENT_SEPARATOR = ',';
    return EventHandler;
}());

var globalHandler = new EventHandler();
/**
 * register a global event handler
 * @param events
 * @param handler
 */
function on(events, handler) {
    return globalHandler.on(events, handler);
}
/**
 * unregister a global event handler
 * @param events
 * @param handler
 */
function off(events, handler) {
    return globalHandler.off(events, handler);
}
/**
 * fires an event
 * @param event
 * @param extraArguments
 */
function fire(events) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return globalHandler.fire.apply(globalHandler, [events].concat(args));
}
/**
 * list all events
 */
function getRegisteredHandlerCount() {
    return globalHandler.getRegisteredHandlerCount();
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DIM_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return IDTYPE_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DIM_EDGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IDTYPE_EDGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return AttributeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GraphNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphEdge; });
/* harmony export (immutable) */ __webpack_exports__["d"] = isType;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AGraph; });

/**
 * Created by sam on 12.02.2015.
 */
/**
 * Created by Samuel Gratzl on 22.10.2014.
 */




var DIM_NODES = 0;
var IDTYPE_NODES = '_nodes';
var DIM_EDGES = 1;
var IDTYPE_EDGES = '_edges';
var AttributeContainer = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AttributeContainer, _super);
    function AttributeContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attrMap = new Map();
        return _this;
    }
    AttributeContainer.prototype.persist = function () {
        if (this.attrMap.size > 0) {
            var attrs_1 = {};
            this.attrMap.forEach(function (v, k) { return attrs_1[k] = v; });
            return { attrs: attrs_1 };
        }
        return {};
    };
    AttributeContainer.prototype.setAttr = function (attr, value) {
        var bak = this.attrMap.get(attr);
        if (bak === value && !Array.isArray(bak)) {
            return;
        }
        this.attrMap.set(attr, value);
        this.fire('attr-' + attr, value, bak);
        this.fire('setAttr', attr, value, bak);
    };
    AttributeContainer.prototype.hasAttr = function (attr) {
        return this.attrMap.has(attr);
    };
    AttributeContainer.prototype.getAttr = function (attr, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (this.attrMap.has(attr)) {
            return this.attrMap.get(attr);
        }
        return defaultValue;
    };
    Object.defineProperty(AttributeContainer.prototype, "attrs", {
        get: function () {
            return Array.from(this.attrMap.keys());
        },
        enumerable: true,
        configurable: true
    });
    AttributeContainer.prototype.restore = function (persisted) {
        var _this = this;
        if (persisted.attrs) {
            Object.keys(persisted.attrs).forEach(function (k) { return _this.attrMap.set(k, persisted.attrs[k]); });
        }
        return this;
    };
    return AttributeContainer;
}(__WEBPACK_IMPORTED_MODULE_4__event__["EventHandler"]));

/**
 * a simple graph none
 */
var GraphNode = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GraphNode, _super);
    function GraphNode(type, id) {
        if (type === void 0) { type = 'node'; }
        if (id === void 0) { id = NaN; }
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.outgoing = [];
        _this.incoming = [];
        _this._id = NaN;
        _this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["flagId"])('graph_node', id);
        return _this;
    }
    Object.defineProperty(GraphNode.prototype, "id", {
        get: function () {
            if (isNaN(this._id)) {
                this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["uniqueId"])('graph_node');
            }
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    GraphNode.prototype.persist = function () {
        var r = _super.prototype.persist.call(this);
        r.type = this.type;
        r.id = this.id;
        return r;
    };
    GraphNode.prototype.restore = function (persisted) {
        _super.prototype.restore.call(this, persisted);
        this.type = persisted.type;
        this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["flagId"])('graph_node', persisted.id);
        return this;
    };
    return GraphNode;
}(AttributeContainer));

var GraphEdge = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GraphEdge, _super);
    function GraphEdge(type, source, target, id) {
        if (type === void 0) { type = 'edge'; }
        if (source === void 0) { source = null; }
        if (target === void 0) { target = null; }
        if (id === void 0) { id = NaN; }
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.source = source;
        _this.target = target;
        _this._id = NaN;
        _this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["flagId"])('graph_edge', id);
        if (source && target) {
            _this.init();
        }
        return _this;
    }
    Object.defineProperty(GraphEdge.prototype, "id", {
        get: function () {
            if (isNaN(this._id)) {
                this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["uniqueId"])('graph_edge');
            }
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    GraphEdge.prototype.init = function () {
        this.source.outgoing.push(this);
        this.target.incoming.push(this);
    };
    GraphEdge.prototype.takeDown = function () {
        if (this.source) {
            this.source.outgoing.splice(this.source.outgoing.indexOf(this), 1);
        }
        if (this.target) {
            this.target.incoming.splice(this.target.incoming.indexOf(this), 1);
        }
    };
    GraphEdge.prototype.toString = function () {
        return this.source + " " + this.type + " " + this.target;
    };
    GraphEdge.prototype.persist = function () {
        var r = _super.prototype.persist.call(this);
        r.type = this.type;
        r.id = this.id;
        r.source = this.source.id;
        r.target = this.target.id;
        return r;
    };
    GraphEdge.prototype.restore = function (p, nodes) {
        _super.prototype.restore.call(this, p);
        this.type = p.type;
        this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["flagId"])('graph_edge', p.id);
        this.source = nodes(p.source);
        this.target = nodes(p.target);
        this.init();
        return this;
    };
    return GraphEdge;
}(AttributeContainer));

function isType(type) {
    return function (edge) { return type instanceof RegExp ? type.test(edge.type) : edge.type === type; };
}
var AGraph = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AGraph, _super);
    function AGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AGraph.prototype, "nnodes", {
        get: function () {
            return this.nodes.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AGraph.prototype, "nedges", {
        get: function () {
            return this.edges.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AGraph.prototype, "dim", {
        get: function () {
            return [this.nodes.length, this.edges.length];
        },
        enumerable: true,
        configurable: true
    });
    AGraph.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var ids = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(this.nodes.map(function (n) { return n.id; }), this.edges.map(function (n) { return n.id; })));
        return Promise.resolve(ids.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range)));
    };
    AGraph.prototype.idView = function (idRange) {
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        throw Error('not implemented');
    };
    AGraph.prototype.selectNode = function (node, op) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_1__idtype__["SelectOperation"].SET; }
        this.select(DIM_NODES, [this.nodes.indexOf(node)], op);
    };
    AGraph.prototype.selectedNodes = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            var r, nodes;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selections()];
                    case 1:
                        r = _a.sent();
                        nodes = [];
                        r.dim(DIM_NODES).forEach(function (index) { return nodes.push(_this.nodes[index]); });
                        return [2 /*return*/, nodes];
                }
            });
        });
    };
    AGraph.prototype.selectEdge = function (edge, op) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_1__idtype__["SelectOperation"].SET; }
        this.select(DIM_EDGES, [this.edges.indexOf(edge)], op);
    };
    AGraph.prototype.selectedEdges = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            var r, edges;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selections()];
                    case 1:
                        r = _a.sent();
                        edges = [];
                        r.dim(DIM_EDGES).forEach(function (index) { return edges.push(_this.edges[index]); });
                        return [2 /*return*/, edges];
                }
            });
        });
    };
    Object.defineProperty(AGraph.prototype, "idtypes", {
        get: function () {
            return [IDTYPE_NODES, IDTYPE_EDGES].map(__WEBPACK_IMPORTED_MODULE_1__idtype__["resolve"]);
        },
        enumerable: true,
        configurable: true
    });
    return AGraph;
}(__WEBPACK_IMPORTED_MODULE_1__idtype__["SelectAble"]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["getFactoryMethod"] = getFactoryMethod;
/* harmony export (immutable) */ __webpack_exports__["register"] = register;
/* harmony export (immutable) */ __webpack_exports__["list"] = list;
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["load"] = load;
/* harmony export (immutable) */ __webpack_exports__["asResource"] = asResource;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */


/**
 * determines the factory method to use in case of the 'new ' syntax wrap the class constructor using a factory method
 */
function getFactoryMethod(instance, factory) {
    var f = factory.trim();
    if (f === 'new') {
        //instantiate the default class
        f = 'new default';
    }
    if (f === 'create') { //default value
        if (typeof instance.create === 'function') {
            //default exists
            return instance.create;
        }
        // try another default
        if (typeof instance.default === 'function') {
            //we have a default export
            if (instance.default.prototype !== undefined) { // it has a prototype so guess it is a class
                f = 'new default';
            }
            else {
                f = 'default';
            }
        }
        else {
            console.error("neighter a default export nor the 'create' method exists in the module:", instance);
        }
    }
    if (f.startsWith('new ')) {
        var className_1 = f.substring('new '.length);
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = instance[className_1]).bind.apply(_a, [void 0].concat(args)))();
            var _a;
        };
    }
    return instance[f];
}
var registry = [];
function push(type, idOrLoader, descOrLoader, desc) {
    var _this = this;
    var id = typeof idOrLoader === 'string' ? idOrLoader : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["uniqueString"])(type);
    var loader = typeof idOrLoader === 'string' ? descOrLoader : descOrLoader;
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({
        type: type,
        id: id,
        name: id,
        factory: 'create',
        description: '',
        version: '1.0.0',
        load: function () { return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](_this, void 0, void 0, function () {
            var instance;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(loader())];
                    case 1:
                        instance = _a.sent();
                        return [2 /*return*/, { desc: p, factory: getFactoryMethod(instance, p.factory) }];
                }
            });
        }); }
    }, typeof descOrLoader === 'function' ? desc : descOrLoader);
    registry.push(p);
}
var knownPlugins = new Set();
function register(plugin, generator) {
    if (typeof generator !== 'function') {
        //wrong type - not a function, maybe a dummy inline
        return;
    }
    if (knownPlugins.has(plugin)) {
        return; // don't call it twice
    }
    knownPlugins.add(plugin);
    generator({ push: push, flags: {} });
}
/**
 * returns a list of matching plugin descs
 * @param filter
 * @returns {IPluginDesc[]}
 */
function list(filter) {
    if (filter === void 0) { filter = function () { return true; }; }
    if (typeof filter === 'string') {
        var v_1 = filter;
        filter = function (desc) { return desc.type === v_1; };
    }
    return registry.filter(filter);
}
/**
 * returns an extension identified by type and id
 * @param type
 * @param id
 * @returns {IPluginDesc}
 */
function get(type, id) {
    return registry.find(function (d) { return d.type === type && d.id === id; });
}
function load(desc) {
    return Promise.all(desc.map(function (d) { return d.load(); }));
}
/**
 * Helper function to simplify importing of  resource files (e.g., JSON).
 * The imported resource file is returned as it is.
 *
 * @param data Imported JSON file
 */
function asResource(data) {
    return {
        create: function () { return data; }
    };
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveImmediately;
var ResolveNow = /** @class */ (function () {
    function ResolveNow(v) {
        this.v = v;
    }
    // When using Typescript v2.7+ the typing can be further specified as `then<TResult1 = T, TResult2 = never>(...`
    ResolveNow.prototype.then = function (onfulfilled, onrejected) {
        return resolveImmediately(onfulfilled(this.v));
    };
    return ResolveNow;
}());
/**
 * similar to Promise.resolve but executes the result immediately without an intermediate tick
 * @param {PromiseLike<T> | T} result
 * @returns {PromiseLike<T>}
 */
function resolveImmediately(result) {
    if (result instanceof Promise || (result && typeof result.then === 'function')) {
        return result;
    }
    return new ResolveNow(result);
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_EVENT_AJAX_PRE_SEND", function() { return GLOBAL_EVENT_AJAX_PRE_SEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_EVENT_AJAX_POST_SEND", function() { return GLOBAL_EVENT_AJAX_POST_SEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_URL_LENGTH", function() { return MAX_URL_LENGTH; });
/* harmony export (immutable) */ __webpack_exports__["send"] = send;
/* harmony export (immutable) */ __webpack_exports__["getJSON"] = getJSON;
/* harmony export (immutable) */ __webpack_exports__["getData"] = getData;
/* harmony export (immutable) */ __webpack_exports__["api2absURL"] = api2absURL;
/* harmony export (immutable) */ __webpack_exports__["encodeParams"] = encodeParams;
/* harmony export (immutable) */ __webpack_exports__["setDefaultOfflineGenerator"] = setDefaultOfflineGenerator;
/* harmony export (immutable) */ __webpack_exports__["sendAPI"] = sendAPI;
/* harmony export (immutable) */ __webpack_exports__["getAPIJSON"] = getAPIJSON;
/* harmony export (immutable) */ __webpack_exports__["getAPIData"] = getAPIData;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
// to resolve the window extensions
/// <reference types="whatwg-fetch" />

/**
 * Created by Samuel Gratzl on 04.08.2014.
 */


var GLOBAL_EVENT_AJAX_PRE_SEND = 'ajaxPreSend';
var GLOBAL_EVENT_AJAX_POST_SEND = 'ajaxPostSend';
/**
 * Maximum number of characters of a valid URL
 */
var MAX_URL_LENGTH = 4096;
var AjaxError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AjaxError, _super);
    function AjaxError(response, message) {
        var _this = _super.call(this, message ? message : response.statusText) || this;
        _this.response = response;
        // Set the prototype explicitly. needed for Typescript 2.1
        Object.setPrototypeOf(_this, AjaxError.prototype);
        return _this;
    }
    return AjaxError;
}(Error));
function checkStatus(response) {
    if (response.ok) {
        return response;
    }
    else {
        throw new AjaxError(response);
    }
}
function parseType(expectedDataType, response) {
    switch (expectedDataType.trim().toLowerCase()) {
        case 'json':
        case 'application/json':
            return response.json();
        case 'text':
        case 'text/plain':
            return response.text();
        case 'blob':
            return response.blob();
        case 'arraybuffer':
            return response.arrayBuffer();
        default:
            throw new AjaxError(response, "unknown expected data type: \"" + expectedDataType + "\"");
    }
}
/**
 * sends an XML http request to the server
 * @param url url
 * @param data arguments
 * @param method the http method
 * @param expectedDataType expected data type to return, in case of JSON it will be parsed using JSON.parse
 * @param requestBody body mime type, default auto derive
 * @returns {Promise<any>}
 */
function send(url, data, method, expectedDataType, requestBody) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'GET'; }
    if (expectedDataType === void 0) { expectedDataType = 'json'; }
    if (requestBody === void 0) { requestBody = 'formdata'; }
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var options, mimetype, r, _a, output;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
            switch (_b.label) {
                case 0:
                    // for compatibility
                    method = method.toUpperCase();
                    // need to encode the body in the url in case of GET and HEAD
                    if (method === 'GET' || method === 'HEAD') {
                        data = encodeParams(data); //encode in url
                        if (data) {
                            url += (/\?/.test(url) ? '&' : '?') + data;
                            data = null;
                        }
                    }
                    options = {
                        credentials: 'same-origin',
                        method: method,
                        headers: {
                            'Accept': 'application/json'
                        },
                    };
                    if (data) {
                        mimetype = '';
                        switch (requestBody.trim().toLowerCase()) {
                            case 'json':
                            case 'application/json':
                                mimetype = 'application/json';
                                options.body = typeof data === 'string' ? data : JSON.stringify(data);
                                break;
                            case 'text':
                            case 'text/plain':
                                mimetype = 'text/plain';
                                options.body = String(data);
                                break;
                            case 'blob':
                            case 'arraybuffer':
                                mimetype = 'application/octet-stream';
                                options.body = data;
                                break;
                            default:
                                if (data instanceof FormData) {
                                    options.body = data;
                                }
                                else {
                                    mimetype = 'application/x-www-form-urlencoded';
                                    options.body = encodeParams(data);
                                }
                        }
                        if (mimetype) {
                            options.headers['Content-Type'] = mimetype;
                        }
                    }
                    // there are no typings for fetch so far
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__event__["fire"])(GLOBAL_EVENT_AJAX_PRE_SEND, url, options);
                    _a = checkStatus;
                    return [4 /*yield*/, self.fetch(url, options)];
                case 1:
                    r = _a.apply(void 0, [_b.sent()]);
                    output = parseType(expectedDataType, r);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__event__["fire"])(GLOBAL_EVENT_AJAX_POST_SEND, url, options, r, output);
                    return [2 /*return*/, output];
            }
        });
    });
}
/**
 * to get some ajax json file
 * @param url
 * @param data
 * @returns {any}
 */
function getJSON(url, data) {
    if (data === void 0) { data = {}; }
    return send(url, data);
}
/**
 * get some generic data via ajax
 * @param url
 * @param data
 * @param expectedDataType
 * @returns {any}
 */
function getData(url, data, expectedDataType) {
    if (data === void 0) { data = {}; }
    if (expectedDataType === void 0) { expectedDataType = 'json'; }
    return send(url, data, 'GET', expectedDataType);
}
/**
 * converts the given api url to an absolute with optional get parameters
 * @param url
 * @param data
 * @returns {string}
 */
function api2absURL(url, data) {
    if (data === void 0) { data = null; }
    url = "" + __WEBPACK_IMPORTED_MODULE_1____["server_url"] + url + __WEBPACK_IMPORTED_MODULE_1____["server_json_suffix"];
    data = encodeParams(data);
    if (data) {
        url += (/\?/.test(url) ? '&' : '?') + data;
    }
    return url;
}
/**
 * convert a given object to url data similar to JQuery
 * @param data
 * @returns {any}
 */
function encodeParams(data) {
    if (data === void 0) { data = null; }
    if (data === null) {
        return null;
    }
    if (typeof data === 'string') {
        return encodeURIComponent(data);
    }
    var keys = Object.keys(data);
    if (keys.length === 0) {
        return null;
    }
    var s = [];
    function add(prefix, key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (v, i) {
                if (typeof v === 'object') {
                    add(prefix, key + "[" + i + "]", v);
                }
                else {
                    //primitive values uses the same key
                    add(prefix, key + "[]", v);
                }
            });
        }
        else if (value == null) {
            // skip
        }
        else if (typeof value === 'object') {
            Object.keys(value).forEach(function (v) {
                add(prefix, key + "[" + v + "]", value[v]);
            });
        }
        else {
            s.push(encodeURIComponent(prefix + key) + '=' + encodeURIComponent(value));
        }
    }
    keys.forEach(function (key) {
        add('', key, data[key]);
    });
    // Return the resulting serialization
    return s.join('&').replace(/%20/g, '+');
}
var defaultGenerator = function () { return Promise.reject('offline'); };
function setDefaultOfflineGenerator(generator) {
    defaultGenerator = generator || (function () { return Promise.reject('offline'); });
}
/**
 * handler in case phovea is set to be in offline mode
 * @param generator
 * @param data
 * @param url
 * @returns {Promise<OfflineGenerator>}
 */
function offline(generator, url, data) {
    return Promise.resolve(typeof generator === 'function' ? generator(data, url) : generator);
}
/**
 * api version of send
 * @param url api relative url
 * @param data arguments
 * @param method http method
 * @param expectedDataType expected data type to return, in case of JSON it will be parsed using JSON.parse
 * @param offlineGenerator in case phovea is set to be offline
 * @returns {Promise<any>}
 */
function sendAPI(url, data, method, expectedDataType, offlineGenerator) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'GET'; }
    if (expectedDataType === void 0) { expectedDataType = 'json'; }
    if (offlineGenerator === void 0) { offlineGenerator = defaultGenerator; }
    if (__WEBPACK_IMPORTED_MODULE_1____["offline"]) {
        return offline(offlineGenerator, url, data);
    }
    return send(api2absURL(url), data, method, expectedDataType);
}
/**
 * api version of getJSON
 * @param url api relative url
 * @param data arguments
 * @param offlineGenerator in case of offline flag is set what should be returned
 * @returns {Promise<any>}
 */
function getAPIJSON(url, data, offlineGenerator) {
    if (data === void 0) { data = {}; }
    if (offlineGenerator === void 0) { offlineGenerator = defaultGenerator; }
    if (__WEBPACK_IMPORTED_MODULE_1____["offline"]) {
        return offline(offlineGenerator, url, data);
    }
    return getJSON(api2absURL(url), data);
}
/**
 * api version of getData
 * @param url api relative url
 * @param data arguments
 * @param expectedDataType expected data type to return, in case of JSON it will be parsed using JSON.parse
 * @param offlineGenerator in case of offline flag is set what should be returned
 * @returns {Promise<any>}
 */
function getAPIData(url, data, expectedDataType, offlineGenerator) {
    if (data === void 0) { data = {}; }
    if (expectedDataType === void 0) { expectedDataType = 'json'; }
    if (offlineGenerator === void 0) { offlineGenerator = function () { return defaultGenerator; }; }
    if (__WEBPACK_IMPORTED_MODULE_1____["offline"]) {
        return offline(offlineGenerator, url, data);
    }
    return getData(api2absURL(url), data, expectedDataType);
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intersection", function() { return Intersection; });
/* harmony export (immutable) */ __webpack_exports__["vec"] = vec;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2D", function() { return Vector2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

function param(name, params) {
    return { name: name, params: params };
}
var Intersection = /** @class */ (function () {
    /**
     *  'Outside',
     *  'Inside',
     *  'Tangent'
     *  'Coincident'
     *  'Parallel'
     *  'Intersection'
     *  'No Intersection'
     */
    function Intersection(status) {
        if (status === void 0) { status = 'No Intersection'; }
        this.status = status;
        this.points = [];
    }
    Object.defineProperty(Intersection.prototype, "intersects", {
        get: function () {
            return this.status === 'Intersection';
        },
        enumerable: true,
        configurable: true
    });
    Intersection.prototype.appendPoint = function (point) {
        this.status = 'Intersection';
        this.points.push(point);
    };
    Intersection.prototype.appendPoints = function (points) {
        if (points.length > 0) {
            this.status = 'Intersection';
        }
        (_a = this.points).push.apply(_a, points);
        var _a;
    };
    Object.defineProperty(Intersection.prototype, "length", {
        get: function () {
            return this.points.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    Intersection.prototype.forEach = function (callbackfn, thisArg) {
        this.points.forEach(callbackfn, thisArg);
    };
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    Intersection.prototype.map = function (callbackfn, thisArg) {
        return this.points.map(callbackfn, thisArg);
    };
    Intersection.intersectShapes = function (shape1, shape2) {
        var ip1 = shape1.asIntersectionParams();
        var ip2 = shape2.asIntersectionParams();
        var result;
        if (ip1 != null && ip2 != null) {
            if (shape1 instanceof Path) {
                result = Intersection.intersectPathShape(shape1, shape2);
            }
            else if (shape2 instanceof Path) {
                result = Intersection.intersectPathShape(shape2, shape1);
            }
            else {
                var method = void 0;
                var params = void 0;
                if (ip1.name < ip2.name) {
                    method = 'intersect' + ip1.name + ip2.name;
                    params = ip1.params.concat(ip2.params);
                }
                else {
                    method = 'intersect' + ip2.name + ip1.name;
                    params = ip2.params.concat(ip1.params);
                }
                var intersectionAny = Intersection;
                if (typeof intersectionAny[method] !== 'function') {
                    throw new Error('Intersection not available: ' + method);
                }
                result = intersectionAny[method].apply(null, params);
            }
        }
        else {
            result = new Intersection();
        }
        return result;
    };
    Intersection.intersectPathShape = function (path, shape) {
        return path.intersectShape(shape);
    };
    Intersection.intersectBezier2Bezier2 = function (a1, a2, a3, b1, b2, b3) {
        var TOLERANCE = 1e-4;
        var result = new Intersection();
        var a = a2.multiply(-2);
        var c12 = a1.add(a.add(a3));
        a = a1.multiply(-2);
        var b = a2.multiply(2);
        var c11 = a.add(b);
        var c10 = new Vector2D(a1.x, a1.y);
        a = b2.multiply(-2);
        var c22 = b1.add(a.add(b3));
        a = b1.multiply(-2);
        b = b2.multiply(2);
        var c21 = a.add(b);
        var c20 = new Vector2D(b1.x, b1.y);
        var af = c12.x * c11.y - c11.x * c12.y;
        var bf = c22.x * c11.y - c11.x * c22.y;
        var c = c21.x * c11.y - c11.x * c21.y;
        var d = c11.x * (c10.y - c20.y) + c11.y * (-c10.x + c20.x);
        var e = c22.x * c12.y - c12.x * c22.y;
        var f = c21.x * c12.y - c12.x * c21.y;
        var g = c12.x * (c10.y - c20.y) + c12.y * (-c10.x + c20.x);
        var poly = new Polynomial(-e * e, -2 * e * f, af * bf - f * f - 2 * e * g, af * c - 2 * f * g, af * d - g * g);
        var roots = poly.getRoots();
        for (var _i = 0, roots_1 = roots; _i < roots_1.length; _i++) {
            var s = roots_1[_i];
            if (0 <= s && s <= 1) {
                var xRoots = new Polynomial(-c12.x, -c11.x, -c10.x + c20.x + s * c21.x + s * s * c22.x).getRoots();
                var yRoots = new Polynomial(-c12.y, -c11.y, -c10.y + c20.y + s * c21.y + s * s * c22.y).getRoots();
                if (xRoots.length > 0 && yRoots.length > 0) {
                    checkRoots: for (var _a = 0, xRoots_1 = xRoots; _a < xRoots_1.length; _a++) {
                        var xRoot = xRoots_1[_a];
                        if (0 <= xRoot && xRoot <= 1) {
                            for (var _b = 0, yRoots_1 = yRoots; _b < yRoots_1.length; _b++) {
                                var yRoot = yRoots_1[_b];
                                if (Math.abs(xRoot - yRoot) < TOLERANCE) {
                                    result.points.push(c22.multiply(s * s).add(c21.multiply(s).add(c20)));
                                    break checkRoots;
                                }
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    Intersection.intersectBezier2Bezier3 = function (a1, a2, a3, b1, b2, b3, b4) {
        var a, b, c, d;
        var c12, c11, c10;
        var c23, c22, c21, c20;
        var result = new Intersection();
        a = a2.multiply(-2);
        c12 = a1.add(a.add(a3));
        a = a1.multiply(-2);
        b = a2.multiply(2);
        c11 = a.add(b);
        c10 = new Vector2D(a1.x, a1.y);
        a = b1.multiply(-1);
        b = b2.multiply(3);
        c = b3.multiply(-3);
        d = a.add(b.add(c.add(b4)));
        c23 = new Vector2D(d.x, d.y);
        a = b1.multiply(3);
        b = b2.multiply(-6);
        c = b3.multiply(3);
        d = a.add(b.add(c));
        c22 = new Vector2D(d.x, d.y);
        a = b1.multiply(-3);
        b = b2.multiply(3);
        c = a.add(b);
        c21 = new Vector2D(c.x, c.y);
        c20 = new Vector2D(b1.x, b1.y);
        var c10x2 = c10.x * c10.x;
        var c10y2 = c10.y * c10.y;
        var c11x2 = c11.x * c11.x;
        var c11y2 = c11.y * c11.y;
        var c12x2 = c12.x * c12.x;
        var c12y2 = c12.y * c12.y;
        var c20x2 = c20.x * c20.x;
        var c20y2 = c20.y * c20.y;
        var c21x2 = c21.x * c21.x;
        var c21y2 = c21.y * c21.y;
        var c22x2 = c22.x * c22.x;
        var c22y2 = c22.y * c22.y;
        var c23x2 = c23.x * c23.x;
        var c23y2 = c23.y * c23.y;
        var poly = new Polynomial(-2 * c12.x * c12.y * c23.x * c23.y + c12x2 * c23y2 + c12y2 * c23x2, -2 * c12.x * c12.y * c22.x * c23.y - 2 * c12.x * c12.y * c22.y * c23.x + 2 * c12y2 * c22.x * c23.x + 2 * c12x2 * c22.y * c23.y, -2 * c12.x * c21.x * c12.y * c23.y - 2 * c12.x * c12.y * c21.y * c23.x - 2 * c12.x * c12.y * c22.x * c22.y + 2 * c21.x * c12y2 * c23.x + c12y2 * c22x2 + c12x2 * (2 * c21.y * c23.y + c22y2), 2 * c10.x * c12.x * c12.y * c23.y + 2 * c10.y * c12.x * c12.y * c23.x + c11.x * c11.y * c12.x * c23.y + c11.x * c11.y * c12.y * c23.x - 2 * c20.x * c12.x * c12.y * c23.y - 2 * c12.x * c20.y * c12.y * c23.x - 2 * c12.x * c21.x * c12.y * c22.y - 2 * c12.x * c12.y * c21.y * c22.x - 2 * c10.x * c12y2 * c23.x - 2 * c10.y * c12x2 * c23.y + 2 * c20.x * c12y2 * c23.x + 2 * c21.x * c12y2 * c22.x - c11y2 * c12.x * c23.x - c11x2 * c12.y * c23.y + c12x2 * (2 * c20.y * c23.y + 2 * c21.y * c22.y), 2 * c10.x * c12.x * c12.y * c22.y + 2 * c10.y * c12.x * c12.y * c22.x + c11.x * c11.y * c12.x * c22.y + c11.x * c11.y * c12.y * c22.x - 2 * c20.x * c12.x * c12.y * c22.y - 2 * c12.x * c20.y * c12.y * c22.x - 2 * c12.x * c21.x * c12.y * c21.y - 2 * c10.x * c12y2 * c22.x - 2 * c10.y * c12x2 * c22.y + 2 * c20.x * c12y2 * c22.x - c11y2 * c12.x * c22.x - c11x2 * c12.y * c22.y + c21x2 * c12y2 + c12x2 * (2 * c20.y * c22.y + c21y2), 2 * c10.x * c12.x * c12.y * c21.y + 2 * c10.y * c12.x * c21.x * c12.y + c11.x * c11.y * c12.x * c21.y + c11.x * c11.y * c21.x * c12.y - 2 * c20.x * c12.x * c12.y * c21.y - 2 * c12.x * c20.y * c21.x * c12.y - 2 * c10.x * c21.x * c12y2 - 2 * c10.y * c12x2 * c21.y + 2 * c20.x * c21.x * c12y2 - c11y2 * c12.x * c21.x - c11x2 * c12.y * c21.y + 2 * c12x2 * c20.y * c21.y, -2 * c10.x * c10.y * c12.x * c12.y - c10.x * c11.x * c11.y * c12.y - c10.y * c11.x * c11.y * c12.x + 2 * c10.x * c12.x * c20.y * c12.y + 2 * c10.y * c20.x * c12.x * c12.y + c11.x * c20.x * c11.y * c12.y + c11.x * c11.y * c12.x * c20.y - 2 * c20.x * c12.x * c20.y * c12.y - 2 * c10.x * c20.x * c12y2 + c10.x * c11y2 * c12.x + c10.y * c11x2 * c12.y - 2 * c10.y * c12x2 * c20.y - c20.x * c11y2 * c12.x - c11x2 * c20.y * c12.y + c10x2 * c12y2 + c10y2 * c12x2 + c20x2 * c12y2 + c12x2 * c20y2);
        var roots = poly.getRootsInInterval(0, 1);
        for (var _i = 0, roots_2 = roots; _i < roots_2.length; _i++) {
            var s = roots_2[_i];
            var xRoots = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
            var yRoots = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();
            if (xRoots.length > 0 && yRoots.length > 0) {
                var TOLERANCE = 1e-4;
                checkRoots: for (var _a = 0, xRoots_2 = xRoots; _a < xRoots_2.length; _a++) {
                    var xRoot = xRoots_2[_a];
                    if (0 <= xRoot && xRoot <= 1) {
                        for (var _b = 0, yRoots_2 = yRoots; _b < yRoots_2.length; _b++) {
                            var yRoot = yRoots_2[_b];
                            if (Math.abs(xRoot - yRoot) < TOLERANCE) {
                                result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                                break checkRoots;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    Intersection.intersectBezier2Circle = function (p1, p2, p3, c, r) {
        return Intersection.intersectBezier2Ellipse(p1, p2, p3, c, r, r);
    };
    Intersection.intersectBezier2Ellipse = function (p1, p2, p3, ec, rx, ry) {
        var a, b;
        var c2, c1, c0;
        var result = new Intersection();
        a = p2.multiply(-2);
        c2 = p1.add(a.add(p3));
        a = p1.multiply(-2);
        b = p2.multiply(2);
        c1 = a.add(b);
        c0 = new Vector2D(p1.x, p1.y);
        var rxrx = rx * rx;
        var ryry = ry * ry;
        var roots = new Polynomial(ryry * c2.x * c2.x + rxrx * c2.y * c2.y, 2 * (ryry * c2.x * c1.x + rxrx * c2.y * c1.y), ryry * (2 * c2.x * c0.x + c1.x * c1.x) + rxrx * (2 * c2.y * c0.y + c1.y * c1.y) - 2 * (ryry * ec.x * c2.x + rxrx * ec.y * c2.y), 2 * (ryry * c1.x * (c0.x - ec.x) + rxrx * c1.y * (c0.y - ec.y)), ryry * (c0.x * c0.x + ec.x * ec.x) + rxrx * (c0.y * c0.y + ec.y * ec.y) - 2 * (ryry * ec.x * c0.x + rxrx * ec.y * c0.y) - rxrx * ryry).getRoots();
        for (var _i = 0, roots_3 = roots; _i < roots_3.length; _i++) {
            var t = roots_3[_i];
            if (0 <= t && t <= 1) {
                result.points.push(c2.multiply(t * t).add(c1.multiply(t).add(c0)));
            }
        }
        return result;
    };
    Intersection.intersectBezier2Line = function (p1, p2, p3, a1, a2) {
        var a, b;
        var c2, c1, c0;
        var cl;
        var n;
        var min = a1.min(a2);
        var max = a1.max(a2);
        var result = new Intersection();
        a = p2.multiply(-2);
        c2 = p1.add(a.add(p3));
        a = p1.multiply(-2);
        b = p2.multiply(2);
        c1 = a.add(b);
        c0 = new Vector2D(p1.x, p1.y);
        n = new Vector2D(a1.y - a2.y, a2.x - a1.x);
        cl = a1.x * a2.y - a2.x * a1.y;
        var roots = new Polynomial(n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots();
        for (var _i = 0, roots_4 = roots; _i < roots_4.length; _i++) {
            var t = roots_4[_i];
            if (0 <= t && t <= 1) {
                var p4 = p1.lerp(p2, t);
                var p5 = p2.lerp(p3, t);
                var p6 = p4.lerp(p5, t);
                if (a1.x === a2.x) {
                    if (min.y <= p6.y && p6.y <= max.y) {
                        result.appendPoint(p6);
                    }
                }
                else if (a1.y === a2.y) {
                    if (min.x <= p6.x && p6.x <= max.x) {
                        result.appendPoint(p6);
                    }
                }
                else if (p6.gte(min) && p6.lte(max)) {
                    result.appendPoint(p6);
                }
            }
        }
        return result;
    };
    Intersection.prototype.intersectBezier2Polygon = function (p1, p2, p3, points) {
        var result = new Intersection();
        var length = points.length;
        for (var i = 0; i < length; i++) {
            var a1 = points[i];
            var a2 = points[(i + 1) % length];
            var inter = Intersection.intersectBezier2Line(p1, p2, p3, a1, a2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectBezier2Rectangle = function (p1, p2, p3, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectBezier2Line(p1, p2, p3, min, topRight);
        var inter2 = Intersection.intersectBezier2Line(p1, p2, p3, topRight, max);
        var inter3 = Intersection.intersectBezier2Line(p1, p2, p3, max, bottomLeft);
        var inter4 = Intersection.intersectBezier2Line(p1, p2, p3, bottomLeft, min);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectBezier3Bezier3 = function (a1, a2, a3, a4, b1, b2, b3, b4) {
        var a, b, c, d;
        var c13, c12, c11, c10;
        var c23, c22, c21, c20;
        var result = new Intersection();
        a = a1.multiply(-1);
        b = a2.multiply(3);
        c = a3.multiply(-3);
        d = a.add(b.add(c.add(a4)));
        c13 = new Vector2D(d.x, d.y);
        a = a1.multiply(3);
        b = a2.multiply(-6);
        c = a3.multiply(3);
        d = a.add(b.add(c));
        c12 = new Vector2D(d.x, d.y);
        a = a1.multiply(-3);
        b = a2.multiply(3);
        c = a.add(b);
        c11 = new Vector2D(c.x, c.y);
        c10 = new Vector2D(a1.x, a1.y);
        a = b1.multiply(-1);
        b = b2.multiply(3);
        c = b3.multiply(-3);
        d = a.add(b.add(c.add(b4)));
        c23 = new Vector2D(d.x, d.y);
        a = b1.multiply(3);
        b = b2.multiply(-6);
        c = b3.multiply(3);
        d = a.add(b.add(c));
        c22 = new Vector2D(d.x, d.y);
        a = b1.multiply(-3);
        b = b2.multiply(3);
        c = a.add(b);
        c21 = new Vector2D(c.x, c.y);
        c20 = new Vector2D(b1.x, b1.y);
        var c10x2 = c10.x * c10.x;
        var c10x3 = c10.x * c10.x * c10.x;
        var c10y2 = c10.y * c10.y;
        var c10y3 = c10.y * c10.y * c10.y;
        var c11x2 = c11.x * c11.x;
        var c11x3 = c11.x * c11.x * c11.x;
        var c11y2 = c11.y * c11.y;
        var c11y3 = c11.y * c11.y * c11.y;
        var c12x2 = c12.x * c12.x;
        var c12x3 = c12.x * c12.x * c12.x;
        var c12y2 = c12.y * c12.y;
        var c12y3 = c12.y * c12.y * c12.y;
        var c13x2 = c13.x * c13.x;
        var c13x3 = c13.x * c13.x * c13.x;
        var c13y2 = c13.y * c13.y;
        var c13y3 = c13.y * c13.y * c13.y;
        var c20x2 = c20.x * c20.x;
        var c20x3 = c20.x * c20.x * c20.x;
        var c20y2 = c20.y * c20.y;
        var c20y3 = c20.y * c20.y * c20.y;
        var c21x2 = c21.x * c21.x;
        var c21x3 = c21.x * c21.x * c21.x;
        var c21y2 = c21.y * c21.y;
        var c22x2 = c22.x * c22.x;
        var c22x3 = c22.x * c22.x * c22.x;
        var c22y2 = c22.y * c22.y;
        var c23x2 = c23.x * c23.x;
        var c23x3 = c23.x * c23.x * c23.x;
        var c23y2 = c23.y * c23.y;
        var c23y3 = c23.y * c23.y * c23.y;
        var poly = new Polynomial(-c13x3 * c23y3 + c13y3 * c23x3 - 3 * c13.x * c13y2 * c23x2 * c23.y + 3 * c13x2 * c13.y * c23.x * c23y2, -6 * c13.x * c22.x * c13y2 * c23.x * c23.y + 6 * c13x2 * c13.y * c22.y * c23.x * c23.y + 3 * c22.x * c13y3 * c23x2 - 3 * c13x3 * c22.y * c23y2 - 3 * c13.x * c13y2 * c22.y * c23x2 + 3 * c13x2 * c22.x * c13.y * c23y2, -6 * c21.x * c13.x * c13y2 * c23.x * c23.y - 6 * c13.x * c22.x * c13y2 * c22.y * c23.x + 6 * c13x2 * c22.x * c13.y * c22.y * c23.y + 3 * c21.x * c13y3 * c23x2 + 3 * c22x2 * c13y3 * c23.x + 3 * c21.x * c13x2 * c13.y * c23y2 - 3 * c13.x * c21.y * c13y2 * c23x2 - 3 * c13.x * c22x2 * c13y2 * c23.y + c13x2 * c13.y * c23.x * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-c21.y * c23y2 - 2 * c22y2 * c23.y - c23.y * (2 * c21.y * c23.y + c22y2)), c11.x * c12.y * c13.x * c13.y * c23.x * c23.y - c11.y * c12.x * c13.x * c13.y * c23.x * c23.y + 6 * c21.x * c22.x * c13y3 * c23.x + 3 * c11.x * c12.x * c13.x * c13.y * c23y2 + 6 * c10.x * c13.x * c13y2 * c23.x * c23.y - 3 * c11.x * c12.x * c13y2 * c23.x * c23.y - 3 * c11.y * c12.y * c13.x * c13.y * c23x2 - 6 * c10.y * c13x2 * c13.y * c23.x * c23.y - 6 * c20.x * c13.x * c13y2 * c23.x * c23.y + 3 * c11.y * c12.y * c13x2 * c23.x * c23.y - 2 * c12.x * c12y2 * c13.x * c23.x * c23.y - 6 * c21.x * c13.x * c22.x * c13y2 * c23.y - 6 * c21.x * c13.x * c13y2 * c22.y * c23.x - 6 * c13.x * c21.y * c22.x * c13y2 * c23.x + 6 * c21.x * c13x2 * c13.y * c22.y * c23.y + 2 * c12x2 * c12.y * c13.y * c23.x * c23.y + c22x3 * c13y3 - 3 * c10.x * c13y3 * c23x2 + 3 * c10.y * c13x3 * c23y2 + 3 * c20.x * c13y3 * c23x2 + c12y3 * c13.x * c23x2 - c12x3 * c13.y * c23y2 - 3 * c10.x * c13x2 * c13.y * c23y2 + 3 * c10.y * c13.x * c13y2 * c23x2 - 2 * c11.x * c12.y * c13x2 * c23y2 + c11.x * c12.y * c13y2 * c23x2 - c11.y * c12.x * c13x2 * c23y2 + 2 * c11.y * c12.x * c13y2 * c23x2 + 3 * c20.x * c13x2 * c13.y * c23y2 - c12.x * c12y2 * c13.y * c23x2 - 3 * c20.y * c13.x * c13y2 * c23x2 + c12x2 * c12.y * c13.x * c23y2 - 3 * c13.x * c22x2 * c13y2 * c22.y + c13x2 * c13.y * c23.x * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c13x2 * c22.x * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c21.y * c22.y * c23.y - c20.y * c23y2 - c22.y * (2 * c21.y * c23.y + c22y2) - c23.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), 6 * c11.x * c12.x * c13.x * c13.y * c22.y * c23.y + c11.x * c12.y * c13.x * c22.x * c13.y * c23.y + c11.x * c12.y * c13.x * c13.y * c22.y * c23.x - c11.y * c12.x * c13.x * c22.x * c13.y * c23.y - c11.y * c12.x * c13.x * c13.y * c22.y * c23.x - 6 * c11.y * c12.y * c13.x * c22.x * c13.y * c23.x - 6 * c10.x * c22.x * c13y3 * c23.x + 6 * c20.x * c22.x * c13y3 * c23.x + 6 * c10.y * c13x3 * c22.y * c23.y + 2 * c12y3 * c13.x * c22.x * c23.x - 2 * c12x3 * c13.y * c22.y * c23.y + 6 * c10.x * c13.x * c22.x * c13y2 * c23.y + 6 * c10.x * c13.x * c13y2 * c22.y * c23.x + 6 * c10.y * c13.x * c22.x * c13y2 * c23.x - 3 * c11.x * c12.x * c22.x * c13y2 * c23.y - 3 * c11.x * c12.x * c13y2 * c22.y * c23.x + 2 * c11.x * c12.y * c22.x * c13y2 * c23.x + 4 * c11.y * c12.x * c22.x * c13y2 * c23.x - 6 * c10.x * c13x2 * c13.y * c22.y * c23.y - 6 * c10.y * c13x2 * c22.x * c13.y * c23.y - 6 * c10.y * c13x2 * c13.y * c22.y * c23.x - 4 * c11.x * c12.y * c13x2 * c22.y * c23.y - 6 * c20.x * c13.x * c22.x * c13y2 * c23.y - 6 * c20.x * c13.x * c13y2 * c22.y * c23.x - 2 * c11.y * c12.x * c13x2 * c22.y * c23.y + 3 * c11.y * c12.y * c13x2 * c22.x * c23.y + 3 * c11.y * c12.y * c13x2 * c22.y * c23.x - 2 * c12.x * c12y2 * c13.x * c22.x * c23.y - 2 * c12.x * c12y2 * c13.x * c22.y * c23.x - 2 * c12.x * c12y2 * c22.x * c13.y * c23.x - 6 * c20.y * c13.x * c22.x * c13y2 * c23.x - 6 * c21.x * c13.x * c21.y * c13y2 * c23.x - 6 * c21.x * c13.x * c22.x * c13y2 * c22.y + 6 * c20.x * c13x2 * c13.y * c22.y * c23.y + 2 * c12x2 * c12.y * c13.x * c22.y * c23.y + 2 * c12x2 * c12.y * c22.x * c13.y * c23.y + 2 * c12x2 * c12.y * c13.y * c22.y * c23.x + 3 * c21.x * c22x2 * c13y3 + 3 * c21x2 * c13y3 * c23.x - 3 * c13.x * c21.y * c22x2 * c13y2 - 3 * c21x2 * c13.x * c13y2 * c23.y + c13x2 * c22.x * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c13x2 * c13.y * c23.x * (6 * c20.y * c22.y + 3 * c21y2) + c21.x * c13x2 * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c20.y * c22.y * c23.y - c23.y * (2 * c20.y * c22.y + c21y2) - c21.y * (2 * c21.y * c23.y + c22y2) - c22.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), c11.x * c21.x * c12.y * c13.x * c13.y * c23.y + c11.x * c12.y * c13.x * c21.y * c13.y * c23.x + c11.x * c12.y * c13.x * c22.x * c13.y * c22.y - c11.y * c12.x * c21.x * c13.x * c13.y * c23.y - c11.y * c12.x * c13.x * c21.y * c13.y * c23.x - c11.y * c12.x * c13.x * c22.x * c13.y * c22.y - 6 * c11.y * c21.x * c12.y * c13.x * c13.y * c23.x - 6 * c10.x * c21.x * c13y3 * c23.x + 6 * c20.x * c21.x * c13y3 * c23.x + 2 * c21.x * c12y3 * c13.x * c23.x + 6 * c10.x * c21.x * c13.x * c13y2 * c23.y + 6 * c10.x * c13.x * c21.y * c13y2 * c23.x + 6 * c10.x * c13.x * c22.x * c13y2 * c22.y + 6 * c10.y * c21.x * c13.x * c13y2 * c23.x - 3 * c11.x * c12.x * c21.x * c13y2 * c23.y - 3 * c11.x * c12.x * c21.y * c13y2 * c23.x - 3 * c11.x * c12.x * c22.x * c13y2 * c22.y + 2 * c11.x * c21.x * c12.y * c13y2 * c23.x + 4 * c11.y * c12.x * c21.x * c13y2 * c23.x - 6 * c10.y * c21.x * c13x2 * c13.y * c23.y - 6 * c10.y * c13x2 * c21.y * c13.y * c23.x - 6 * c10.y * c13x2 * c22.x * c13.y * c22.y - 6 * c20.x * c21.x * c13.x * c13y2 * c23.y - 6 * c20.x * c13.x * c21.y * c13y2 * c23.x - 6 * c20.x * c13.x * c22.x * c13y2 * c22.y + 3 * c11.y * c21.x * c12.y * c13x2 * c23.y - 3 * c11.y * c12.y * c13.x * c22x2 * c13.y + 3 * c11.y * c12.y * c13x2 * c21.y * c23.x + 3 * c11.y * c12.y * c13x2 * c22.x * c22.y - 2 * c12.x * c21.x * c12y2 * c13.x * c23.y - 2 * c12.x * c21.x * c12y2 * c13.y * c23.x - 2 * c12.x * c12y2 * c13.x * c21.y * c23.x - 2 * c12.x * c12y2 * c13.x * c22.x * c22.y - 6 * c20.y * c21.x * c13.x * c13y2 * c23.x - 6 * c21.x * c13.x * c21.y * c22.x * c13y2 + 6 * c20.y * c13x2 * c21.y * c13.y * c23.x + 2 * c12x2 * c21.x * c12.y * c13.y * c23.y + 2 * c12x2 * c12.y * c21.y * c13.y * c23.x + 2 * c12x2 * c12.y * c22.x * c13.y * c22.y - 3 * c10.x * c22x2 * c13y3 + 3 * c20.x * c22x2 * c13y3 + 3 * c21x2 * c22.x * c13y3 + c12y3 * c13.x * c22x2 + 3 * c10.y * c13.x * c22x2 * c13y2 + c11.x * c12.y * c22x2 * c13y2 + 2 * c11.y * c12.x * c22x2 * c13y2 - c12.x * c12y2 * c22x2 * c13.y - 3 * c20.y * c13.x * c22x2 * c13y2 - 3 * c21x2 * c13.x * c13y2 * c22.y + c12x2 * c12.y * c13.x * (2 * c21.y * c23.y + c22y2) + c11.x * c12.x * c13.x * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c21.x * c13x2 * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c12x3 * c13.y * (-2 * c21.y * c23.y - c22y2) + c10.y * c13x3 * (6 * c21.y * c23.y + 3 * c22y2) + c11.y * c12.x * c13x2 * (-2 * c21.y * c23.y - c22y2) + c11.x * c12.y * c13x2 * (-4 * c21.y * c23.y - 2 * c22y2) + c10.x * c13x2 * c13.y * (-6 * c21.y * c23.y - 3 * c22y2) + c13x2 * c22.x * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c20.x * c13x2 * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c20.y * c21.y * c23.y - c22.y * (2 * c20.y * c22.y + c21y2) - c20.y * (2 * c21.y * c23.y + c22y2) - c21.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), -c10.x * c11.x * c12.y * c13.x * c13.y * c23.y + c10.x * c11.y * c12.x * c13.x * c13.y * c23.y + 6 * c10.x * c11.y * c12.y * c13.x * c13.y * c23.x - 6 * c10.y * c11.x * c12.x * c13.x * c13.y * c23.y - c10.y * c11.x * c12.y * c13.x * c13.y * c23.x + c10.y * c11.y * c12.x * c13.x * c13.y * c23.x + c11.x * c11.y * c12.x * c12.y * c13.x * c23.y - c11.x * c11.y * c12.x * c12.y * c13.y * c23.x + c11.x * c20.x * c12.y * c13.x * c13.y * c23.y + c11.x * c20.y * c12.y * c13.x * c13.y * c23.x + c11.x * c21.x * c12.y * c13.x * c13.y * c22.y + c11.x * c12.y * c13.x * c21.y * c22.x * c13.y - c20.x * c11.y * c12.x * c13.x * c13.y * c23.y - 6 * c20.x * c11.y * c12.y * c13.x * c13.y * c23.x - c11.y * c12.x * c20.y * c13.x * c13.y * c23.x - c11.y * c12.x * c21.x * c13.x * c13.y * c22.y - c11.y * c12.x * c13.x * c21.y * c22.x * c13.y - 6 * c11.y * c21.x * c12.y * c13.x * c22.x * c13.y - 6 * c10.x * c20.x * c13y3 * c23.x - 6 * c10.x * c21.x * c22.x * c13y3 - 2 * c10.x * c12y3 * c13.x * c23.x + 6 * c20.x * c21.x * c22.x * c13y3 + 2 * c20.x * c12y3 * c13.x * c23.x + 2 * c21.x * c12y3 * c13.x * c22.x + 2 * c10.y * c12x3 * c13.y * c23.y - 6 * c10.x * c10.y * c13.x * c13y2 * c23.x + 3 * c10.x * c11.x * c12.x * c13y2 * c23.y - 2 * c10.x * c11.x * c12.y * c13y2 * c23.x - 4 * c10.x * c11.y * c12.x * c13y2 * c23.x + 3 * c10.y * c11.x * c12.x * c13y2 * c23.x + 6 * c10.x * c10.y * c13x2 * c13.y * c23.y + 6 * c10.x * c20.x * c13.x * c13y2 * c23.y - 3 * c10.x * c11.y * c12.y * c13x2 * c23.y + 2 * c10.x * c12.x * c12y2 * c13.x * c23.y + 2 * c10.x * c12.x * c12y2 * c13.y * c23.x + 6 * c10.x * c20.y * c13.x * c13y2 * c23.x + 6 * c10.x * c21.x * c13.x * c13y2 * c22.y + 6 * c10.x * c13.x * c21.y * c22.x * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c23.y + 6 * c10.y * c20.x * c13.x * c13y2 * c23.x + 2 * c10.y * c11.y * c12.x * c13x2 * c23.y - 3 * c10.y * c11.y * c12.y * c13x2 * c23.x + 2 * c10.y * c12.x * c12y2 * c13.x * c23.x + 6 * c10.y * c21.x * c13.x * c22.x * c13y2 - 3 * c11.x * c20.x * c12.x * c13y2 * c23.y + 2 * c11.x * c20.x * c12.y * c13y2 * c23.x + c11.x * c11.y * c12y2 * c13.x * c23.x - 3 * c11.x * c12.x * c20.y * c13y2 * c23.x - 3 * c11.x * c12.x * c21.x * c13y2 * c22.y - 3 * c11.x * c12.x * c21.y * c22.x * c13y2 + 2 * c11.x * c21.x * c12.y * c22.x * c13y2 + 4 * c20.x * c11.y * c12.x * c13y2 * c23.x + 4 * c11.y * c12.x * c21.x * c22.x * c13y2 - 2 * c10.x * c12x2 * c12.y * c13.y * c23.y - 6 * c10.y * c20.x * c13x2 * c13.y * c23.y - 6 * c10.y * c20.y * c13x2 * c13.y * c23.x - 6 * c10.y * c21.x * c13x2 * c13.y * c22.y - 2 * c10.y * c12x2 * c12.y * c13.x * c23.y - 2 * c10.y * c12x2 * c12.y * c13.y * c23.x - 6 * c10.y * c13x2 * c21.y * c22.x * c13.y - c11.x * c11.y * c12x2 * c13.y * c23.y - 2 * c11.x * c11y2 * c13.x * c13.y * c23.x + 3 * c20.x * c11.y * c12.y * c13x2 * c23.y - 2 * c20.x * c12.x * c12y2 * c13.x * c23.y - 2 * c20.x * c12.x * c12y2 * c13.y * c23.x - 6 * c20.x * c20.y * c13.x * c13y2 * c23.x - 6 * c20.x * c21.x * c13.x * c13y2 * c22.y - 6 * c20.x * c13.x * c21.y * c22.x * c13y2 + 3 * c11.y * c20.y * c12.y * c13x2 * c23.x + 3 * c11.y * c21.x * c12.y * c13x2 * c22.y + 3 * c11.y * c12.y * c13x2 * c21.y * c22.x - 2 * c12.x * c20.y * c12y2 * c13.x * c23.x - 2 * c12.x * c21.x * c12y2 * c13.x * c22.y - 2 * c12.x * c21.x * c12y2 * c22.x * c13.y - 2 * c12.x * c12y2 * c13.x * c21.y * c22.x - 6 * c20.y * c21.x * c13.x * c22.x * c13y2 - c11y2 * c12.x * c12.y * c13.x * c23.x + 2 * c20.x * c12x2 * c12.y * c13.y * c23.y + 6 * c20.y * c13x2 * c21.y * c22.x * c13.y + 2 * c11x2 * c11.y * c13.x * c13.y * c23.y + c11x2 * c12.x * c12.y * c13.y * c23.y + 2 * c12x2 * c20.y * c12.y * c13.y * c23.x + 2 * c12x2 * c21.x * c12.y * c13.y * c22.y + 2 * c12x2 * c12.y * c21.y * c22.x * c13.y + c21x3 * c13y3 + 3 * c10x2 * c13y3 * c23.x - 3 * c10y2 * c13x3 * c23.y + 3 * c20x2 * c13y3 * c23.x + c11y3 * c13x2 * c23.x - c11x3 * c13y2 * c23.y - c11.x * c11y2 * c13x2 * c23.y + c11x2 * c11.y * c13y2 * c23.x - 3 * c10x2 * c13.x * c13y2 * c23.y + 3 * c10y2 * c13x2 * c13.y * c23.x - c11x2 * c12y2 * c13.x * c23.y + c11y2 * c12x2 * c13.y * c23.x - 3 * c21x2 * c13.x * c21.y * c13y2 - 3 * c20x2 * c13.x * c13y2 * c23.y + 3 * c20y2 * c13x2 * c13.y * c23.x + c11.x * c12.x * c13.x * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c12x3 * c13.y * (-2 * c20.y * c23.y - 2 * c21.y * c22.y) + c10.y * c13x3 * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c11.y * c12.x * c13x2 * (-2 * c20.y * c23.y - 2 * c21.y * c22.y) + c12x2 * c12.y * c13.x * (2 * c20.y * c23.y + 2 * c21.y * c22.y) + c11.x * c12.y * c13x2 * (-4 * c20.y * c23.y - 4 * c21.y * c22.y) + c10.x * c13x2 * c13.y * (-6 * c20.y * c23.y - 6 * c21.y * c22.y) + c20.x * c13x2 * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c21.x * c13x2 * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c13x3 * (-2 * c20.y * c21.y * c22.y - c20y2 * c23.y - c21.y * (2 * c20.y * c22.y + c21y2) - c20.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), -c10.x * c11.x * c12.y * c13.x * c13.y * c22.y + c10.x * c11.y * c12.x * c13.x * c13.y * c22.y + 6 * c10.x * c11.y * c12.y * c13.x * c22.x * c13.y - 6 * c10.y * c11.x * c12.x * c13.x * c13.y * c22.y - c10.y * c11.x * c12.y * c13.x * c22.x * c13.y + c10.y * c11.y * c12.x * c13.x * c22.x * c13.y + c11.x * c11.y * c12.x * c12.y * c13.x * c22.y - c11.x * c11.y * c12.x * c12.y * c22.x * c13.y + c11.x * c20.x * c12.y * c13.x * c13.y * c22.y + c11.x * c20.y * c12.y * c13.x * c22.x * c13.y + c11.x * c21.x * c12.y * c13.x * c21.y * c13.y - c20.x * c11.y * c12.x * c13.x * c13.y * c22.y - 6 * c20.x * c11.y * c12.y * c13.x * c22.x * c13.y - c11.y * c12.x * c20.y * c13.x * c22.x * c13.y - c11.y * c12.x * c21.x * c13.x * c21.y * c13.y - 6 * c10.x * c20.x * c22.x * c13y3 - 2 * c10.x * c12y3 * c13.x * c22.x + 2 * c20.x * c12y3 * c13.x * c22.x + 2 * c10.y * c12x3 * c13.y * c22.y - 6 * c10.x * c10.y * c13.x * c22.x * c13y2 + 3 * c10.x * c11.x * c12.x * c13y2 * c22.y - 2 * c10.x * c11.x * c12.y * c22.x * c13y2 - 4 * c10.x * c11.y * c12.x * c22.x * c13y2 + 3 * c10.y * c11.x * c12.x * c22.x * c13y2 + 6 * c10.x * c10.y * c13x2 * c13.y * c22.y + 6 * c10.x * c20.x * c13.x * c13y2 * c22.y - 3 * c10.x * c11.y * c12.y * c13x2 * c22.y + 2 * c10.x * c12.x * c12y2 * c13.x * c22.y + 2 * c10.x * c12.x * c12y2 * c22.x * c13.y + 6 * c10.x * c20.y * c13.x * c22.x * c13y2 + 6 * c10.x * c21.x * c13.x * c21.y * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c22.y + 6 * c10.y * c20.x * c13.x * c22.x * c13y2 + 2 * c10.y * c11.y * c12.x * c13x2 * c22.y - 3 * c10.y * c11.y * c12.y * c13x2 * c22.x + 2 * c10.y * c12.x * c12y2 * c13.x * c22.x - 3 * c11.x * c20.x * c12.x * c13y2 * c22.y + 2 * c11.x * c20.x * c12.y * c22.x * c13y2 + c11.x * c11.y * c12y2 * c13.x * c22.x - 3 * c11.x * c12.x * c20.y * c22.x * c13y2 - 3 * c11.x * c12.x * c21.x * c21.y * c13y2 + 4 * c20.x * c11.y * c12.x * c22.x * c13y2 - 2 * c10.x * c12x2 * c12.y * c13.y * c22.y - 6 * c10.y * c20.x * c13x2 * c13.y * c22.y - 6 * c10.y * c20.y * c13x2 * c22.x * c13.y - 6 * c10.y * c21.x * c13x2 * c21.y * c13.y - 2 * c10.y * c12x2 * c12.y * c13.x * c22.y - 2 * c10.y * c12x2 * c12.y * c22.x * c13.y - c11.x * c11.y * c12x2 * c13.y * c22.y - 2 * c11.x * c11y2 * c13.x * c22.x * c13.y + 3 * c20.x * c11.y * c12.y * c13x2 * c22.y - 2 * c20.x * c12.x * c12y2 * c13.x * c22.y - 2 * c20.x * c12.x * c12y2 * c22.x * c13.y - 6 * c20.x * c20.y * c13.x * c22.x * c13y2 - 6 * c20.x * c21.x * c13.x * c21.y * c13y2 + 3 * c11.y * c20.y * c12.y * c13x2 * c22.x + 3 * c11.y * c21.x * c12.y * c13x2 * c21.y - 2 * c12.x * c20.y * c12y2 * c13.x * c22.x - 2 * c12.x * c21.x * c12y2 * c13.x * c21.y - c11y2 * c12.x * c12.y * c13.x * c22.x + 2 * c20.x * c12x2 * c12.y * c13.y * c22.y - 3 * c11.y * c21x2 * c12.y * c13.x * c13.y + 6 * c20.y * c21.x * c13x2 * c21.y * c13.y + 2 * c11x2 * c11.y * c13.x * c13.y * c22.y + c11x2 * c12.x * c12.y * c13.y * c22.y + 2 * c12x2 * c20.y * c12.y * c22.x * c13.y + 2 * c12x2 * c21.x * c12.y * c21.y * c13.y - 3 * c10.x * c21x2 * c13y3 + 3 * c20.x * c21x2 * c13y3 + 3 * c10x2 * c22.x * c13y3 - 3 * c10y2 * c13x3 * c22.y + 3 * c20x2 * c22.x * c13y3 + c21x2 * c12y3 * c13.x + c11y3 * c13x2 * c22.x - c11x3 * c13y2 * c22.y + 3 * c10.y * c21x2 * c13.x * c13y2 - c11.x * c11y2 * c13x2 * c22.y + c11.x * c21x2 * c12.y * c13y2 + 2 * c11.y * c12.x * c21x2 * c13y2 + c11x2 * c11.y * c22.x * c13y2 - c12.x * c21x2 * c12y2 * c13.y - 3 * c20.y * c21x2 * c13.x * c13y2 - 3 * c10x2 * c13.x * c13y2 * c22.y + 3 * c10y2 * c13x2 * c22.x * c13.y - c11x2 * c12y2 * c13.x * c22.y + c11y2 * c12x2 * c22.x * c13.y - 3 * c20x2 * c13.x * c13y2 * c22.y + 3 * c20y2 * c13x2 * c22.x * c13.y + c12x2 * c12.y * c13.x * (2 * c20.y * c22.y + c21y2) + c11.x * c12.x * c13.x * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c12x3 * c13.y * (-2 * c20.y * c22.y - c21y2) + c10.y * c13x3 * (6 * c20.y * c22.y + 3 * c21y2) + c11.y * c12.x * c13x2 * (-2 * c20.y * c22.y - c21y2) + c11.x * c12.y * c13x2 * (-4 * c20.y * c22.y - 2 * c21y2) + c10.x * c13x2 * c13.y * (-6 * c20.y * c22.y - 3 * c21y2) + c20.x * c13x2 * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c13x3 * (-2 * c20.y * c21y2 - c20y2 * c22.y - c20.y * (2 * c20.y * c22.y + c21y2)), -c10.x * c11.x * c12.y * c13.x * c21.y * c13.y + c10.x * c11.y * c12.x * c13.x * c21.y * c13.y + 6 * c10.x * c11.y * c21.x * c12.y * c13.x * c13.y - 6 * c10.y * c11.x * c12.x * c13.x * c21.y * c13.y - c10.y * c11.x * c21.x * c12.y * c13.x * c13.y + c10.y * c11.y * c12.x * c21.x * c13.x * c13.y - c11.x * c11.y * c12.x * c21.x * c12.y * c13.y + c11.x * c11.y * c12.x * c12.y * c13.x * c21.y + c11.x * c20.x * c12.y * c13.x * c21.y * c13.y + 6 * c11.x * c12.x * c20.y * c13.x * c21.y * c13.y + c11.x * c20.y * c21.x * c12.y * c13.x * c13.y - c20.x * c11.y * c12.x * c13.x * c21.y * c13.y - 6 * c20.x * c11.y * c21.x * c12.y * c13.x * c13.y - c11.y * c12.x * c20.y * c21.x * c13.x * c13.y - 6 * c10.x * c20.x * c21.x * c13y3 - 2 * c10.x * c21.x * c12y3 * c13.x + 6 * c10.y * c20.y * c13x3 * c21.y + 2 * c20.x * c21.x * c12y3 * c13.x + 2 * c10.y * c12x3 * c21.y * c13.y - 2 * c12x3 * c20.y * c21.y * c13.y - 6 * c10.x * c10.y * c21.x * c13.x * c13y2 + 3 * c10.x * c11.x * c12.x * c21.y * c13y2 - 2 * c10.x * c11.x * c21.x * c12.y * c13y2 - 4 * c10.x * c11.y * c12.x * c21.x * c13y2 + 3 * c10.y * c11.x * c12.x * c21.x * c13y2 + 6 * c10.x * c10.y * c13x2 * c21.y * c13.y + 6 * c10.x * c20.x * c13.x * c21.y * c13y2 - 3 * c10.x * c11.y * c12.y * c13x2 * c21.y + 2 * c10.x * c12.x * c21.x * c12y2 * c13.y + 2 * c10.x * c12.x * c12y2 * c13.x * c21.y + 6 * c10.x * c20.y * c21.x * c13.x * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c21.y + 6 * c10.y * c20.x * c21.x * c13.x * c13y2 + 2 * c10.y * c11.y * c12.x * c13x2 * c21.y - 3 * c10.y * c11.y * c21.x * c12.y * c13x2 + 2 * c10.y * c12.x * c21.x * c12y2 * c13.x - 3 * c11.x * c20.x * c12.x * c21.y * c13y2 + 2 * c11.x * c20.x * c21.x * c12.y * c13y2 + c11.x * c11.y * c21.x * c12y2 * c13.x - 3 * c11.x * c12.x * c20.y * c21.x * c13y2 + 4 * c20.x * c11.y * c12.x * c21.x * c13y2 - 6 * c10.x * c20.y * c13x2 * c21.y * c13.y - 2 * c10.x * c12x2 * c12.y * c21.y * c13.y - 6 * c10.y * c20.x * c13x2 * c21.y * c13.y - 6 * c10.y * c20.y * c21.x * c13x2 * c13.y - 2 * c10.y * c12x2 * c21.x * c12.y * c13.y - 2 * c10.y * c12x2 * c12.y * c13.x * c21.y - c11.x * c11.y * c12x2 * c21.y * c13.y - 4 * c11.x * c20.y * c12.y * c13x2 * c21.y - 2 * c11.x * c11y2 * c21.x * c13.x * c13.y + 3 * c20.x * c11.y * c12.y * c13x2 * c21.y - 2 * c20.x * c12.x * c21.x * c12y2 * c13.y - 2 * c20.x * c12.x * c12y2 * c13.x * c21.y - 6 * c20.x * c20.y * c21.x * c13.x * c13y2 - 2 * c11.y * c12.x * c20.y * c13x2 * c21.y + 3 * c11.y * c20.y * c21.x * c12.y * c13x2 - 2 * c12.x * c20.y * c21.x * c12y2 * c13.x - c11y2 * c12.x * c21.x * c12.y * c13.x + 6 * c20.x * c20.y * c13x2 * c21.y * c13.y + 2 * c20.x * c12x2 * c12.y * c21.y * c13.y + 2 * c11x2 * c11.y * c13.x * c21.y * c13.y + c11x2 * c12.x * c12.y * c21.y * c13.y + 2 * c12x2 * c20.y * c21.x * c12.y * c13.y + 2 * c12x2 * c20.y * c12.y * c13.x * c21.y + 3 * c10x2 * c21.x * c13y3 - 3 * c10y2 * c13x3 * c21.y + 3 * c20x2 * c21.x * c13y3 + c11y3 * c21.x * c13x2 - c11x3 * c21.y * c13y2 - 3 * c20y2 * c13x3 * c21.y - c11.x * c11y2 * c13x2 * c21.y + c11x2 * c11.y * c21.x * c13y2 - 3 * c10x2 * c13.x * c21.y * c13y2 + 3 * c10y2 * c21.x * c13x2 * c13.y - c11x2 * c12y2 * c13.x * c21.y + c11y2 * c12x2 * c21.x * c13.y - 3 * c20x2 * c13.x * c21.y * c13y2 + 3 * c20y2 * c21.x * c13x2 * c13.y, c10.x * c10.y * c11.x * c12.y * c13.x * c13.y - c10.x * c10.y * c11.y * c12.x * c13.x * c13.y + c10.x * c11.x * c11.y * c12.x * c12.y * c13.y - c10.y * c11.x * c11.y * c12.x * c12.y * c13.x - c10.x * c11.x * c20.y * c12.y * c13.x * c13.y + 6 * c10.x * c20.x * c11.y * c12.y * c13.x * c13.y + c10.x * c11.y * c12.x * c20.y * c13.x * c13.y - c10.y * c11.x * c20.x * c12.y * c13.x * c13.y - 6 * c10.y * c11.x * c12.x * c20.y * c13.x * c13.y + c10.y * c20.x * c11.y * c12.x * c13.x * c13.y - c11.x * c20.x * c11.y * c12.x * c12.y * c13.y + c11.x * c11.y * c12.x * c20.y * c12.y * c13.x + c11.x * c20.x * c20.y * c12.y * c13.x * c13.y - c20.x * c11.y * c12.x * c20.y * c13.x * c13.y - 2 * c10.x * c20.x * c12y3 * c13.x + 2 * c10.y * c12x3 * c20.y * c13.y - 3 * c10.x * c10.y * c11.x * c12.x * c13y2 - 6 * c10.x * c10.y * c20.x * c13.x * c13y2 + 3 * c10.x * c10.y * c11.y * c12.y * c13x2 - 2 * c10.x * c10.y * c12.x * c12y2 * c13.x - 2 * c10.x * c11.x * c20.x * c12.y * c13y2 - c10.x * c11.x * c11.y * c12y2 * c13.x + 3 * c10.x * c11.x * c12.x * c20.y * c13y2 - 4 * c10.x * c20.x * c11.y * c12.x * c13y2 + 3 * c10.y * c11.x * c20.x * c12.x * c13y2 + 6 * c10.x * c10.y * c20.y * c13x2 * c13.y + 2 * c10.x * c10.y * c12x2 * c12.y * c13.y + 2 * c10.x * c11.x * c11y2 * c13.x * c13.y + 2 * c10.x * c20.x * c12.x * c12y2 * c13.y + 6 * c10.x * c20.x * c20.y * c13.x * c13y2 - 3 * c10.x * c11.y * c20.y * c12.y * c13x2 + 2 * c10.x * c12.x * c20.y * c12y2 * c13.x + c10.x * c11y2 * c12.x * c12.y * c13.x + c10.y * c11.x * c11.y * c12x2 * c13.y + 4 * c10.y * c11.x * c20.y * c12.y * c13x2 - 3 * c10.y * c20.x * c11.y * c12.y * c13x2 + 2 * c10.y * c20.x * c12.x * c12y2 * c13.x + 2 * c10.y * c11.y * c12.x * c20.y * c13x2 + c11.x * c20.x * c11.y * c12y2 * c13.x - 3 * c11.x * c20.x * c12.x * c20.y * c13y2 - 2 * c10.x * c12x2 * c20.y * c12.y * c13.y - 6 * c10.y * c20.x * c20.y * c13x2 * c13.y - 2 * c10.y * c20.x * c12x2 * c12.y * c13.y - 2 * c10.y * c11x2 * c11.y * c13.x * c13.y - c10.y * c11x2 * c12.x * c12.y * c13.y - 2 * c10.y * c12x2 * c20.y * c12.y * c13.x - 2 * c11.x * c20.x * c11y2 * c13.x * c13.y - c11.x * c11.y * c12x2 * c20.y * c13.y + 3 * c20.x * c11.y * c20.y * c12.y * c13x2 - 2 * c20.x * c12.x * c20.y * c12y2 * c13.x - c20.x * c11y2 * c12.x * c12.y * c13.x + 3 * c10y2 * c11.x * c12.x * c13.x * c13.y + 3 * c11.x * c12.x * c20y2 * c13.x * c13.y + 2 * c20.x * c12x2 * c20.y * c12.y * c13.y - 3 * c10x2 * c11.y * c12.y * c13.x * c13.y + 2 * c11x2 * c11.y * c20.y * c13.x * c13.y + c11x2 * c12.x * c20.y * c12.y * c13.y - 3 * c20x2 * c11.y * c12.y * c13.x * c13.y - c10x3 * c13y3 + c10y3 * c13x3 + c20x3 * c13y3 - c20y3 * c13x3 - 3 * c10.x * c20x2 * c13y3 - c10.x * c11y3 * c13x2 + 3 * c10x2 * c20.x * c13y3 + c10.y * c11x3 * c13y2 + 3 * c10.y * c20y2 * c13x3 + c20.x * c11y3 * c13x2 + c10x2 * c12y3 * c13.x - 3 * c10y2 * c20.y * c13x3 - c10y2 * c12x3 * c13.y + c20x2 * c12y3 * c13.x - c11x3 * c20.y * c13y2 - c12x3 * c20y2 * c13.y - c10.x * c11x2 * c11.y * c13y2 + c10.y * c11.x * c11y2 * c13x2 - 3 * c10.x * c10y2 * c13x2 * c13.y - c10.x * c11y2 * c12x2 * c13.y + c10.y * c11x2 * c12y2 * c13.x - c11.x * c11y2 * c20.y * c13x2 + 3 * c10x2 * c10.y * c13.x * c13y2 + c10x2 * c11.x * c12.y * c13y2 + 2 * c10x2 * c11.y * c12.x * c13y2 - 2 * c10y2 * c11.x * c12.y * c13x2 - c10y2 * c11.y * c12.x * c13x2 + c11x2 * c20.x * c11.y * c13y2 - 3 * c10.x * c20y2 * c13x2 * c13.y + 3 * c10.y * c20x2 * c13.x * c13y2 + c11.x * c20x2 * c12.y * c13y2 - 2 * c11.x * c20y2 * c12.y * c13x2 + c20.x * c11y2 * c12x2 * c13.y - c11.y * c12.x * c20y2 * c13x2 - c10x2 * c12.x * c12y2 * c13.y - 3 * c10x2 * c20.y * c13.x * c13y2 + 3 * c10y2 * c20.x * c13x2 * c13.y + c10y2 * c12x2 * c12.y * c13.x - c11x2 * c20.y * c12y2 * c13.x + 2 * c20x2 * c11.y * c12.x * c13y2 + 3 * c20.x * c20y2 * c13x2 * c13.y - c20x2 * c12.x * c12y2 * c13.y - 3 * c20x2 * c20.y * c13.x * c13y2 + c12x2 * c20y2 * c12.y * c13.x);
        var roots = poly.getRootsInInterval(0, 1);
        for (var _i = 0, roots_5 = roots; _i < roots_5.length; _i++) {
            var s = roots_5[_i];
            var xRoots = new Polynomial(c13.x, c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
            var yRoots = new Polynomial(c13.y, c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();
            if (xRoots.length > 0 && yRoots.length > 0) {
                var TOLERANCE = 1e-4;
                checkRoots: for (var _a = 0, xRoots_3 = xRoots; _a < xRoots_3.length; _a++) {
                    var xRoot = xRoots_3[_a];
                    if (0 <= xRoot && xRoot <= 1) {
                        for (var _b = 0, yRoots_3 = yRoots; _b < yRoots_3.length; _b++) {
                            var yRoot = yRoots_3[_b];
                            if (Math.abs(xRoot - yRoot) < TOLERANCE) {
                                result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                                break checkRoots;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    Intersection.intersectBezier3Circle = function (p1, p2, p3, p4, c, r) {
        return Intersection.intersectBezier3Ellipse(p1, p2, p3, p4, c, r, r);
    };
    Intersection.intersectBezier3Ellipse = function (p1, p2, p3, p4, ec, rx, ry) {
        var a, b, c, d;
        var c3, c2, c1, c0;
        var result = new Intersection();
        a = p1.multiply(-1);
        b = p2.multiply(3);
        c = p3.multiply(-3);
        d = a.add(b.add(c.add(p4)));
        c3 = new Vector2D(d.x, d.y);
        a = p1.multiply(3);
        b = p2.multiply(-6);
        c = p3.multiply(3);
        d = a.add(b.add(c));
        c2 = new Vector2D(d.x, d.y);
        a = p1.multiply(-3);
        b = p2.multiply(3);
        c = a.add(b);
        c1 = new Vector2D(c.x, c.y);
        c0 = new Vector2D(p1.x, p1.y);
        var rxrx = rx * rx;
        var ryry = ry * ry;
        var poly = new Polynomial(c3.x * c3.x * ryry + c3.y * c3.y * rxrx, 2 * (c3.x * c2.x * ryry + c3.y * c2.y * rxrx), 2 * (c3.x * c1.x * ryry + c3.y * c1.y * rxrx) + c2.x * c2.x * ryry + c2.y * c2.y * rxrx, 2 * c3.x * ryry * (c0.x - ec.x) + 2 * c3.y * rxrx * (c0.y - ec.y) + 2 * (c2.x * c1.x * ryry + c2.y * c1.y * rxrx), 2 * c2.x * ryry * (c0.x - ec.x) + 2 * c2.y * rxrx * (c0.y - ec.y) + c1.x * c1.x * ryry + c1.y * c1.y * rxrx, 2 * c1.x * ryry * (c0.x - ec.x) + 2 * c1.y * rxrx * (c0.y - ec.y), c0.x * c0.x * ryry - 2 * c0.y * ec.y * rxrx - 2 * c0.x * ec.x * ryry + c0.y * c0.y * rxrx + ec.x * ec.x * ryry + ec.y * ec.y * rxrx - rxrx * ryry);
        var roots = poly.getRootsInInterval(0, 1);
        for (var _i = 0, roots_6 = roots; _i < roots_6.length; _i++) {
            var t = roots_6[_i];
            result.points.push(c3.multiply(t * t * t).add(c2.multiply(t * t).add(c1.multiply(t).add(c0))));
        }
        return result;
    };
    Intersection.intersectBezier3Line = function (p1, p2, p3, p4, a1, a2) {
        var a, b, c, d;
        var c3, c2, c1, c0;
        var cl;
        var n;
        var min = a1.min(a2);
        var max = a1.max(a2);
        var result = new Intersection();
        a = p1.multiply(-1);
        b = p2.multiply(3);
        c = p3.multiply(-3);
        d = a.add(b.add(c.add(p4)));
        c3 = new Vector2D(d.x, d.y);
        a = p1.multiply(3);
        b = p2.multiply(-6);
        c = p3.multiply(3);
        d = a.add(b.add(c));
        c2 = new Vector2D(d.x, d.y);
        a = p1.multiply(-3);
        b = p2.multiply(3);
        c = a.add(b);
        c1 = new Vector2D(c.x, c.y);
        c0 = new Vector2D(p1.x, p1.y);
        n = new Vector2D(a1.y - a2.y, a2.x - a1.x);
        cl = a1.x * a2.y - a2.x * a1.y;
        var roots = new Polynomial(n.dot(c3), n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots();
        for (var _i = 0, roots_7 = roots; _i < roots_7.length; _i++) {
            var t = roots_7[_i];
            if (0 <= t && t <= 1) {
                var p5 = p1.lerp(p2, t);
                var p6 = p2.lerp(p3, t);
                var p7 = p3.lerp(p4, t);
                var p8 = p5.lerp(p6, t);
                var p9 = p6.lerp(p7, t);
                var p10 = p8.lerp(p9, t);
                if (a1.x === a2.x) {
                    if (min.y <= p10.y && p10.y <= max.y) {
                        result.appendPoint(p10);
                    }
                }
                else if (a1.y === a2.y) {
                    if (min.x <= p10.x && p10.x <= max.x) {
                        result.appendPoint(p10);
                    }
                }
                else if (p10.gte(min) && p10.lte(max)) {
                    result.appendPoint(p10);
                }
            }
        }
        return result;
    };
    Intersection.intersectBezier3Polygon = function (p1, p2, p3, p4, points) {
        var result = new Intersection();
        var length = points.length;
        for (var i = 0; i < length; i++) {
            var a1 = points[i];
            var a2 = points[(i + 1) % length];
            var inter = Intersection.intersectBezier3Line(p1, p2, p3, p4, a1, a2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectBezier3Rectangle = function (p1, p2, p3, p4, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectBezier3Line(p1, p2, p3, p4, min, topRight);
        var inter2 = Intersection.intersectBezier3Line(p1, p2, p3, p4, topRight, max);
        var inter3 = Intersection.intersectBezier3Line(p1, p2, p3, p4, max, bottomLeft);
        var inter4 = Intersection.intersectBezier3Line(p1, p2, p3, p4, bottomLeft, min);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectCircleCircle = function (c1, r1, c2, r2) {
        var result;
        var rMax = r1 + r2;
        var rMin = Math.abs(r1 - r2);
        var cDist = c1.distanceFrom(c2);
        if (cDist > rMax) {
            result = new Intersection('Outside');
        }
        else if (cDist < rMin) {
            result = new Intersection('Inside');
        }
        else {
            result = new Intersection('Intersection');
            var a = (r1 * r1 - r2 * r2 + cDist * cDist) / (2 * cDist);
            var h = Math.sqrt(r1 * r1 - a * a);
            var p = c1.lerp(c2, a / cDist);
            var b = h / cDist;
            result.points.push(new Vector2D(p.x - b * (c2.y - c1.y), p.y + b * (c2.x - c1.x)));
            result.points.push(new Vector2D(p.x + b * (c2.y - c1.y), p.y - b * (c2.x - c1.x)));
        }
        return result;
    };
    Intersection.intersectCircleEllipse = function (cc, r, ec, rx, ry) {
        return Intersection.intersectEllipseEllipse(cc, r, r, ec, rx, ry);
    };
    Intersection.intersectCircleLine = function (c, r, a1, a2) {
        var result;
        var a = (a2.x - a1.x) * (a2.x - a1.x) + (a2.y - a1.y) * (a2.y - a1.y);
        var b = 2 * ((a2.x - a1.x) * (a1.x - c.x) + (a2.y - a1.y) * (a1.y - c.y));
        var cc = c.x * c.x + c.y * c.y + a1.x * a1.x + a1.y * a1.y - 2 * (c.x * a1.x + c.y * a1.y) - r * r;
        var deter = b * b - 4 * a * cc;
        if (deter < 0) {
            result = new Intersection('Outside');
        }
        else if (deter === 0) {
            result = new Intersection('Tangent');
        }
        else {
            var e = Math.sqrt(deter);
            var u1 = (-b + e) / (2 * a);
            var u2 = (-b - e) / (2 * a);
            if ((u1 < 0 || u1 > 1) && (u2 < 0 || u2 > 1)) {
                if ((u1 < 0 && u2 < 0) || (u1 > 1 && u2 > 1)) {
                    result = new Intersection('Outside');
                }
                else {
                    result = new Intersection('Inside');
                }
            }
            else {
                result = new Intersection('Intersection');
                if (0 <= u1 && u1 <= 1) {
                    result.points.push(a1.lerp(a2, u1));
                }
                if (0 <= u2 && u2 <= 1) {
                    result.points.push(a1.lerp(a2, u2));
                }
            }
        }
        return result;
    };
    Intersection.intersectCirclePolygon = function (c, r, points) {
        var result = new Intersection();
        var length = points.length;
        var inter;
        for (var i = 0; i < length; i++) {
            var a1 = points[i];
            var a2 = points[(i + 1) % length];
            inter = Intersection.intersectCircleLine(c, r, a1, a2);
            result.appendPoints(inter.points);
        }
        if (result.points.length > 0) {
            result.status = 'Intersection';
        }
        else {
            result.status = inter.status;
        }
        return result;
    };
    Intersection.intersectCircleRectangle = function (c, r, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectCircleLine(c, r, min, topRight);
        var inter2 = Intersection.intersectCircleLine(c, r, topRight, max);
        var inter3 = Intersection.intersectCircleLine(c, r, max, bottomLeft);
        var inter4 = Intersection.intersectCircleLine(c, r, bottomLeft, min);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        if (result.points.length > 0) {
            result.status = 'Intersection';
        }
        else {
            result.status = inter1.status;
        }
        return result;
    };
    Intersection.intersectEllipseEllipse = function (c1, rx1, ry1, c2, rx2, ry2) {
        var a = [ry1 * ry1, 0, rx1 * rx1, -2 * ry1 * ry1 * c1.x, -2 * rx1 * rx1 * c1.y, ry1 * ry1 * c1.x * c1.x + rx1 * rx1 * c1.y * c1.y - rx1 * rx1 * ry1 * ry1];
        var b = [ry2 * ry2, 0, rx2 * rx2, -2 * ry2 * ry2 * c2.x, -2 * rx2 * rx2 * c2.y, ry2 * ry2 * c2.x * c2.x + rx2 * rx2 * c2.y * c2.y - rx2 * rx2 * ry2 * ry2];
        var yPoly = Intersection.bezout(a, b);
        var yRoots = yPoly.getRoots();
        var epsilon = 1e-3;
        var norm0 = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * epsilon;
        var norm1 = (b[0] * b[0] + 2 * b[1] * b[1] + b[2] * b[2]) * epsilon;
        var result = new Intersection();
        for (var _i = 0, yRoots_4 = yRoots; _i < yRoots_4.length; _i++) {
            var yRoot = yRoots_4[_i];
            var xPoly = new Polynomial(a[0], a[3] + yRoot * a[1], a[5] + yRoot * (a[4] + yRoot * a[2]));
            var xRoots = xPoly.getRoots();
            for (var _a = 0, xRoots_4 = xRoots; _a < xRoots_4.length; _a++) {
                var xRoot = xRoots_4[_a];
                var test = (a[0] * xRoot + a[1] * yRoot + a[3]) * xRoot + (a[2] * yRoot + a[4]) * yRoot + a[5];
                if (Math.abs(test) < norm0) {
                    test = (b[0] * xRoot + b[1] * yRoot + b[3]) * xRoot + (b[2] * yRoot + b[4]) * yRoot + b[5];
                    if (Math.abs(test) < norm1) {
                        result.appendPoint(new Vector2D(xRoot, yRoot));
                    }
                }
            }
        }
        return result;
    };
    Intersection.intersectEllipseLine = function (c, rx, ry, a1, a2) {
        var result;
        var origin = new Vector2D(a1.x, a1.y);
        var dir = Vector2D.fromPoints(a1, a2);
        var center = new Vector2D(c.x, c.y);
        var diff = origin.subtract(center);
        var mDir = new Vector2D(dir.x / (rx * rx), dir.y / (ry * ry));
        var mDiff = new Vector2D(diff.x / (rx * rx), diff.y / (ry * ry));
        var a = dir.dot(mDir);
        var b = dir.dot(mDiff);
        var cdot = diff.dot(mDiff) - 1.0;
        var d = b * b - a * cdot;
        if (d < 0) {
            result = new Intersection('Outside');
        }
        else if (d > 0) {
            var root = Math.sqrt(d);
            var tA = (-b - root) / a;
            var tB = (-b + root) / a;
            if ((tA < 0 || 1 < tA) && (tB < 0 || 1 < tB)) {
                if ((tA < 0 && tB < 0) || (tA > 1 && tB > 1)) {
                    result = new Intersection('Outside');
                }
                else {
                    result = new Intersection('Inside');
                }
            }
            else {
                result = new Intersection('Intersection');
                if (0 <= tA && tA <= 1) {
                    result.appendPoint(a1.lerp(a2, tA));
                }
                if (0 <= tB && tB <= 1) {
                    result.appendPoint(a1.lerp(a2, tB));
                }
            }
        }
        else {
            var t = -b / a;
            if (0 <= t && t <= 1) {
                result = new Intersection('Intersection');
                result.appendPoint(a1.lerp(a2, t));
            }
            else {
                result = new Intersection('Outside');
            }
        }
        return result;
    };
    Intersection.intersectEllipsePolygon = function (c, rx, ry, points) {
        var result = new Intersection();
        var length = points.length;
        for (var i = 0; i < length; i++) {
            var b1 = points[i];
            var b2 = points[(i + 1) % length];
            var inter = Intersection.intersectEllipseLine(c, rx, ry, b1, b2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectEllipseRectangle = function (c, rx, ry, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectEllipseLine(c, rx, ry, min, topRight);
        var inter2 = Intersection.intersectEllipseLine(c, rx, ry, topRight, max);
        var inter3 = Intersection.intersectEllipseLine(c, rx, ry, max, bottomLeft);
        var inter4 = Intersection.intersectEllipseLine(c, rx, ry, bottomLeft, min);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectLineLine = function (a1, a2, b1, b2) {
        var result;
        var uaT = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ubT = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var uB = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (uB !== 0) {
            var ua = uaT / uB;
            var ub = ubT / uB;
            if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                result = new Intersection('Intersection');
                result.points.push(new Vector2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
            }
            else {
                result = new Intersection();
            }
        }
        else {
            if (uaT === 0 || ubT === 0) {
                result = new Intersection('Coincident');
            }
            else {
                result = new Intersection('Parallel');
            }
        }
        return result;
    };
    Intersection.intersectLinePolygon = function (a1, a2, points) {
        var result = new Intersection();
        var length = points.length;
        for (var i = 0; i < length; i++) {
            var b1 = points[i];
            var b2 = points[(i + 1) % length];
            var inter = Intersection.intersectLineLine(a1, a2, b1, b2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectLineRectangle = function (a1, a2, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectLineLine(min, topRight, a1, a2);
        var inter2 = Intersection.intersectLineLine(topRight, max, a1, a2);
        var inter3 = Intersection.intersectLineLine(max, bottomLeft, a1, a2);
        var inter4 = Intersection.intersectLineLine(bottomLeft, min, a1, a2);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectPolygonPolygon = function (points1, points2) {
        var result = new Intersection();
        var length = points1.length;
        for (var i = 0; i < length; i++) {
            var a1 = points1[i];
            var a2 = points1[(i + 1) % length];
            var inter = Intersection.intersectLinePolygon(a1, a2, points2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectPolygonRectangle = function (points, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectLinePolygon(min, topRight, points);
        var inter2 = Intersection.intersectLinePolygon(topRight, max, points);
        var inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points);
        var inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectRayRay = function (a1, a2, b1, b2) {
        var result;
        var uaT = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ubT = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var uB = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (uB !== 0) {
            var ua = uaT / uB;
            result = new Intersection('Intersection');
            result.points.push(new Vector2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
        }
        else {
            if (uaT === 0 || ubT === 0) {
                result = new Intersection('Coincident');
            }
            else {
                result = new Intersection('Parallel');
            }
        }
        return result;
    };
    Intersection.intersectRectangleRectangle = function (a1, a2, b1, b2) {
        var min = a1.min(a2);
        var max = a1.max(a2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectLineRectangle(min, topRight, b1, b2);
        var inter2 = Intersection.intersectLineRectangle(topRight, max, b1, b2);
        var inter3 = Intersection.intersectLineRectangle(max, bottomLeft, b1, b2);
        var inter4 = Intersection.intersectLineRectangle(bottomLeft, min, b1, b2);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.bezout = function (e1, e2) {
        var AB = e1[0] * e2[1] - e2[0] * e1[1];
        var AC = e1[0] * e2[2] - e2[0] * e1[2];
        var AD = e1[0] * e2[3] - e2[0] * e1[3];
        var AE = e1[0] * e2[4] - e2[0] * e1[4];
        var AF = e1[0] * e2[5] - e2[0] * e1[5];
        var BC = e1[1] * e2[2] - e2[1] * e1[2];
        var BE = e1[1] * e2[4] - e2[1] * e1[4];
        var BF = e1[1] * e2[5] - e2[1] * e1[5];
        var CD = e1[2] * e2[3] - e2[2] * e1[3];
        var DE = e1[3] * e2[4] - e2[3] * e1[4];
        var DF = e1[3] * e2[5] - e2[3] * e1[5];
        var BFPLUSDE = BF + DE;
        var BEMINUSCD = BE - CD;
        return new Polynomial(AB * BC - AC * AC, AB * BEMINUSCD + AD * BC - 2 * AC * AE, AB * BFPLUSDE + AD * BEMINUSCD - AE * AE - 2 * AC * AF, AB * DF + AD * BFPLUSDE - 2 * AE * AF, AD * DF - AF * AF);
    };
    return Intersection;
}());

function vec(x, y) {
    if (y === void 0) { y = Number.NaN; }
    if (typeof x === 'number') {
        return new Vector2D(x, y);
    }
    else {
        return new Vector2D(x.x, x.y);
    }
}
var Vector2D = /** @class */ (function () {
    function Vector2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector2D.prototype.add = function (that) {
        return new Vector2D(this.x + that.x, this.y + that.y);
    };
    Vector2D.prototype.addEquals = function (that) {
        this.x += that.x;
        this.y += that.y;
        return this;
    };
    Vector2D.prototype.scalarAdd = function (scalar) {
        return new Vector2D(this.x + scalar, this.y + scalar);
    };
    Vector2D.prototype.scalarAddEquals = function (scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    };
    Vector2D.prototype.subtract = function (that) {
        return new Vector2D(this.x - that.x, this.y - that.y);
    };
    Vector2D.prototype.subtractEquals = function (that) {
        this.x -= that.x;
        this.y -= that.y;
        return this;
    };
    Vector2D.prototype.scalarSubtract = function (scalar) {
        return new Vector2D(this.x - scalar, this.y - scalar);
    };
    Vector2D.prototype.scalarSubtractEquals = function (scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    };
    Vector2D.prototype.multiply = function (scalar) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    };
    Vector2D.prototype.multiplyEquals = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };
    Vector2D.prototype.divide = function (scalar) {
        return new Vector2D(this.x / scalar, this.y / scalar);
    };
    Vector2D.prototype.divideEquals = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    };
    Vector2D.prototype.eq = function (that) {
        return (this.x === that.x && this.y === that.y);
    };
    Vector2D.prototype.lt = function (that) {
        return (this.x < that.x && this.y < that.y);
    };
    Vector2D.prototype.lte = function (that) {
        return (this.x <= that.x && this.y <= that.y);
    };
    Vector2D.prototype.gt = function (that) {
        return (this.x > that.x && this.y > that.y);
    };
    Vector2D.prototype.gte = function (that) {
        return (this.x >= that.x && this.y >= that.y);
    };
    Vector2D.prototype.lerp = function (that, t) {
        return new Vector2D(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
    };
    Vector2D.prototype.distanceFrom = function (that) {
        var dx = this.x - that.x;
        var dy = this.y - that.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Vector2D.prototype.min = function (that) {
        return new Vector2D(Math.min(this.x, that.x), Math.min(this.y, that.y));
    };
    Vector2D.prototype.max = function (that) {
        return new Vector2D(Math.max(this.x, that.x), Math.max(this.y, that.y));
    };
    Vector2D.prototype.toString = function () {
        return this.x + ',' + this.y;
    };
    Vector2D.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Vector2D.prototype.setFromPoint = function (that) {
        this.x = that.x;
        this.y = that.y;
    };
    Vector2D.prototype.swap = function (that) {
        var x = this.x;
        var y = this.y;
        this.x = that.x;
        this.y = that.y;
        that.x = x;
        that.y = y;
    };
    Vector2D.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2D.prototype.dot = function (that) {
        return this.x * that.x + this.y * that.y;
    };
    Vector2D.prototype.cross = function (that) {
        return this.x * that.y - this.y * that.x;
    };
    Vector2D.prototype.unit = function () {
        return this.divide(this.length());
    };
    Vector2D.prototype.unitEquals = function () {
        this.divideEquals(this.length());
        return this;
    };
    Vector2D.prototype.perp = function () {
        return new Vector2D(-this.y, this.x);
    };
    Vector2D.fromPoints = function (p1, p2) {
        return new Vector2D(p2.x - p1.x, p2.y - p1.y);
    };
    return Vector2D;
}());

var Polynomial = /** @class */ (function () {
    function Polynomial() {
        var coefs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            coefs[_i] = arguments[_i];
        }
        this.coefs = [];
        for (var i = coefs.length - 1; i >= 0; i--) {
            this.coefs.push(coefs[i]);
        }
    }
    Polynomial.prototype.eval = function (x) {
        var result = 0;
        for (var i = this.coefs.length - 1; i >= 0; i--) {
            result = result * x + this.coefs[i];
        }
        return result;
    };
    Polynomial.prototype.multiply = function (that) {
        var result = new Polynomial();
        var i;
        for (i = 0; i <= this.getDegree() + that.getDegree(); i++) {
            result.coefs.push(0);
        }
        for (i = 0; i <= this.getDegree(); i++) {
            for (var j = 0; j <= that.getDegree(); j++) {
                result.coefs[i + j] += this.coefs[i] * that.coefs[j];
            }
        }
        return result;
    };
    Polynomial.prototype.divide_scalar = function (scalar) {
        for (var i = 0; i < this.coefs.length; i++) {
            this.coefs[i] /= scalar;
        }
    };
    Polynomial.prototype.simplify = function () {
        for (var i = this.getDegree(); i >= 0; i--) {
            if (Math.abs(this.coefs[i]) <= Polynomial.TOLERANCE) {
                this.coefs.pop();
            }
            else {
                break;
            }
        }
    };
    Polynomial.prototype.bisection = function (min, max) {
        var minValue = this.eval(min);
        var maxValue = this.eval(max);
        var result;
        if (Math.abs(minValue) <= Polynomial.TOLERANCE) {
            result = min;
        }
        else if (Math.abs(maxValue) <= Polynomial.TOLERANCE) {
            result = max;
        }
        else if (minValue * maxValue <= 0) {
            var tmp1 = Math.log(max - min);
            var tmp2 = Math.log(10) * Polynomial.ACCURACY;
            var iters = Math.ceil((tmp1 + tmp2) / Math.log(2));
            for (var i = 0; i < iters; i++) {
                result = 0.5 * (min + max);
                var value = this.eval(result);
                if (Math.abs(value) <= Polynomial.TOLERANCE) {
                    break;
                }
                if (value * minValue < 0) {
                    max = result;
                    maxValue = value;
                }
                else {
                    min = result;
                    minValue = value;
                }
            }
        }
        return result;
    };
    Polynomial.prototype.toString = function () {
        var coefs = [];
        var signs = [];
        var i;
        for (i = this.coefs.length - 1; i >= 0; i--) {
            var value = this.coefs[i];
            if (value !== 0) {
                var sign = (value < 0) ? ' - ' : ' + ';
                value = Math.abs(value);
                if (i > 0 && value === 1) {
                    value = 'x';
                }
                else {
                    value += 'x';
                }
                if (i > 1) {
                    value += '^' + i;
                }
                signs.push(sign);
                coefs.push(value);
            }
        }
        signs[0] = (signs[0] === ' + ') ? '' : '-';
        var result = '';
        for (i = 0; i < coefs.length; i++) {
            result += signs[i] + coefs[i];
        }
        return result;
    };
    Polynomial.prototype.getDegree = function () {
        return this.coefs.length - 1;
    };
    Polynomial.prototype.getDerivative = function () {
        var derivative = new Polynomial();
        for (var i = 1; i < this.coefs.length; i++) {
            derivative.coefs.push(i * this.coefs[i]);
        }
        return derivative;
    };
    Polynomial.prototype.getRoots = function () {
        var result;
        this.simplify();
        switch (this.getDegree()) {
            case 0:
                result = [];
                break;
            case 1:
                result = this.getLinearRoot();
                break;
            case 2:
                result = this.getQuadraticRoots();
                break;
            case 3:
                result = this.getCubicRoots();
                break;
            case 4:
                result = this.getQuarticRoots();
                break;
            default:
                result = [];
        }
        return result;
    };
    Polynomial.prototype.getRootsInInterval = function (min, max) {
        var roots = [];
        var i;
        var root;
        if (this.getDegree() === 1) {
            root = this.bisection(min, max);
            if (root != null) {
                roots.push(root);
            }
        }
        else {
            var deriv = this.getDerivative();
            var droots = deriv.getRootsInInterval(min, max);
            if (droots.length > 0) {
                root = this.bisection(min, droots[0]);
                if (root != null) {
                    roots.push(root);
                }
                for (i = 0; i <= droots.length - 2; i++) {
                    root = this.bisection(droots[i], droots[i + 1]);
                    if (root != null) {
                        roots.push(root);
                    }
                }
                root = this.bisection(droots[droots.length - 1], max);
                if (root != null) {
                    roots.push(root);
                }
            }
            else {
                root = this.bisection(min, max);
                if (root != null) {
                    roots.push(root);
                }
            }
        }
        return roots;
    };
    Polynomial.prototype.getLinearRoot = function () {
        var result = [];
        var a = this.coefs[1];
        if (a !== 0) {
            result.push(-this.coefs[0] / a);
        }
        return result;
    };
    Polynomial.prototype.getQuadraticRoots = function () {
        var results = [];
        if (this.getDegree() === 2) {
            var a = this.coefs[2];
            var b = this.coefs[1] / a;
            var c = this.coefs[0] / a;
            var d = b * b - 4 * c;
            if (d > 0) {
                var e = Math.sqrt(d);
                results.push(0.5 * (-b + e));
                results.push(0.5 * (-b - e));
            }
            else if (d === 0) {
                results.push(0.5 * -b);
            }
        }
        return results;
    };
    Polynomial.prototype.getCubicRoots = function () {
        var results = [];
        var disrim;
        if (this.getDegree() === 3) {
            var c3 = this.coefs[3];
            var c2 = this.coefs[2] / c3;
            var c1 = this.coefs[1] / c3;
            var c0 = this.coefs[0] / c3;
            var a = (3 * c1 - c2 * c2) / 3;
            var b = (2 * c2 * c2 * c2 - 9 * c1 * c2 + 27 * c0) / 27;
            var offset = c2 / 3;
            var discrim = b * b / 4 + a * a * a / 27;
            var halfB = b / 2;
            if (Math.abs(discrim) <= Polynomial.TOLERANCE) {
                disrim = 0;
            }
            var tmp = void 0;
            if (discrim > 0) {
                var e = Math.sqrt(discrim);
                var root = void 0;
                tmp = -halfB + e;
                if (tmp >= 0) {
                    root = Math.pow(tmp, 1 / 3);
                }
                else {
                    root = -Math.pow(-tmp, 1 / 3);
                }
                tmp = -halfB - e;
                if (tmp >= 0) {
                    root += Math.pow(tmp, 1 / 3);
                }
                else {
                    root -= Math.pow(-tmp, 1 / 3);
                }
                results.push(root - offset);
            }
            else if (discrim < 0) {
                var distance = Math.sqrt(-a / 3);
                var angle = Math.atan2(Math.sqrt(-discrim), -halfB) / 3;
                var cos = Math.cos(angle);
                var sin = Math.sin(angle);
                var sqrt3 = Math.sqrt(3);
                results.push(2 * distance * cos - offset);
                results.push(-distance * (cos + sqrt3 * sin) - offset);
                results.push(-distance * (cos - sqrt3 * sin) - offset);
            }
            else {
                if (halfB >= 0) {
                    tmp = -Math.pow(halfB, 1 / 3);
                }
                else {
                    tmp = Math.pow(-halfB, 1 / 3);
                }
                results.push(2 * tmp - offset);
                results.push(-tmp - offset);
            }
        }
        return results;
    };
    Polynomial.prototype.getQuarticRoots = function () {
        var results = [];
        if (this.getDegree() === 4) {
            var c4 = this.coefs[4];
            var c3 = this.coefs[3] / c4;
            var c2 = this.coefs[2] / c4;
            var c1 = this.coefs[1] / c4;
            var c0 = this.coefs[0] / c4;
            var resolveRoots = new Polynomial(1, -c2, c3 * c1 - 4 * c0, -c3 * c3 * c0 + 4 * c2 * c0 - c1 * c1).getCubicRoots();
            var y = resolveRoots[0];
            var discrim = c3 * c3 / 4 - c2 + y;
            if (Math.abs(discrim) <= Polynomial.TOLERANCE) {
                discrim = 0;
            }
            var t2 = void 0;
            var d = void 0;
            if (discrim > 0) {
                var e = Math.sqrt(discrim);
                var t1 = 3 * c3 * c3 / 4 - e * e - 2 * c2;
                t2 = (4 * c3 * c2 - 8 * c1 - c3 * c3 * c3) / (4 * e);
                var plus = t1 + t2;
                var minus = t1 - t2;
                var f = void 0;
                if (Math.abs(plus) <= Polynomial.TOLERANCE) {
                    plus = 0;
                }
                if (Math.abs(minus) <= Polynomial.TOLERANCE) {
                    minus = 0;
                }
                if (plus >= 0) {
                    f = Math.sqrt(plus);
                    results.push(-c3 / 4 + (e + f) / 2);
                    results.push(-c3 / 4 + (e - f) / 2);
                }
                if (minus >= 0) {
                    f = Math.sqrt(minus);
                    results.push(-c3 / 4 + (f - e) / 2);
                    results.push(-c3 / 4 - (f + e) / 2);
                }
            }
            else if (discrim >= 0) {
                t2 = y * y - 4 * c0;
                if (t2 >= -Polynomial.TOLERANCE) {
                    if (t2 < 0) {
                        t2 = 0;
                    }
                    t2 = 2 * Math.sqrt(t2);
                    var t1 = 3 * c3 * c3 / 4 - 2 * c2;
                    if (t1 + t2 >= Polynomial.TOLERANCE) {
                        d = Math.sqrt(t1 + t2);
                        results.push(-c3 / 4 + d / 2);
                        results.push(-c3 / 4 - d / 2);
                    }
                    if (t1 - t2 >= Polynomial.TOLERANCE) {
                        d = Math.sqrt(t1 - t2);
                        results.push(-c3 / 4 + d / 2);
                        results.push(-c3 / 4 - d / 2);
                    }
                }
            }
        }
        return results;
    };
    Polynomial.TOLERANCE = 1e-6;
    Polynomial.ACCURACY = 6;
    return Polynomial;
}());
var Token = /** @class */ (function () {
    function Token(type, text) {
        this.type = type;
        this.text = text;
    }
    Token.prototype.typeis = function (t) {
        return this.type === t;
    };
    return Token;
}());
var Path = /** @class */ (function () {
    function Path(path) {
        this.segments = null;
        this.parseData(path);
    }
    Path.prototype.appendPathSegment = function (segment) {
        segment.previous = this.segments[this.segments.length - 1];
        this.segments.push(segment);
    };
    Path.prototype.parseData = function (d) {
        var tokens = this.tokenize(d);
        var index = 0;
        var token = tokens[index];
        var mode = 'BOD';
        this.segments = [];
        while (!token.typeis(Path.EOD)) {
            var paramLength = void 0;
            var params = [];
            if (mode === 'BOD') {
                if (token.text === 'M' || token.text === 'm') {
                    index++;
                    paramLength = Path.PARAMS[token.text].length;
                    mode = token.text;
                }
                else {
                    throw new Error('Path data must begin with a moveto command');
                }
            }
            else {
                if (token.typeis(Path.NUMBER)) {
                    paramLength = Path.PARAMS[mode].length;
                }
                else {
                    index++;
                    paramLength = Path.PARAMS[token.text].length;
                    mode = token.text;
                }
            }
            if ((index + paramLength) < tokens.length) {
                for (var i = index; i < index + paramLength; i++) {
                    var n = tokens[i];
                    if (n.typeis(Path.NUMBER)) {
                        params[params.length] = n.text;
                    }
                    else {
                        throw new Error('Parameter type is not a number: ' + mode + ',' + n.text);
                    }
                }
                var segment = void 0;
                var length_1 = this.segments.length;
                var previous = (length_1 === 0) ? null : this.segments[length_1 - 1];
                switch (mode) {
                    case 'A':
                        segment = new AbsoluteArcPath(params, this, previous);
                        break;
                    case 'C':
                        segment = new AbsoluteCurveto3(params, this, previous);
                        break;
                    case 'c':
                        segment = new RelativeCurveto3(params, this, previous);
                        break;
                    case 'H':
                        segment = new AbsoluteHLineto(params, this, previous);
                        break;
                    case 'L':
                        segment = new AbsoluteLineto(params, this, previous);
                        break;
                    case 'l':
                        segment = new RelativeLineto(params, this, previous);
                        break;
                    case 'M':
                        segment = new AbsoluteMoveto(params, this, previous);
                        break;
                    case 'm':
                        segment = new RelativeMoveto(params, this, previous);
                        break;
                    case 'Q':
                        segment = new AbsoluteCurveto2(params, this, previous);
                        break;
                    case 'q':
                        segment = new RelativeCurveto2(params, this, previous);
                        break;
                    case 'S':
                        segment = new AbsoluteSmoothCurveto3(params, this, previous);
                        break;
                    case 's':
                        segment = new RelativeSmoothCurveto3(params, this, previous);
                        break;
                    case 'T':
                        segment = new AbsoluteSmoothCurveto2(params, this, previous);
                        break;
                    case 't':
                        segment = new RelativeSmoothCurveto2(params, this, previous);
                        break;
                    case 'Z':
                        segment = new RelativeClosePath(params, this, previous);
                        break;
                    case 'z':
                        segment = new RelativeClosePath(params, this, previous);
                        break;
                    default:
                        throw new Error('Unsupported segment type: ' + mode);
                }
                this.segments.push(segment);
                index += paramLength;
                token = tokens[index];
                if (mode === 'M') {
                    mode = 'L';
                }
                if (mode === 'm') {
                    mode = 'l';
                }
            }
            else {
                throw new Error('Path data ended before all parameters were found');
            }
        }
    };
    Path.prototype.tokenize = function (d) {
        var tokens = [];
        while (d !== '') {
            if (d.match(/^([ \t\r\n,]+)/)) {
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
                tokens[tokens.length] = new Token(Path.COMMAND, RegExp.$1);
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
                tokens[tokens.length] = new Token(Path.NUMBER, parseFloat(RegExp.$1));
                d = d.substr(RegExp.$1.length);
            }
            else {
                throw new Error('Unrecognized segment command: ' + d);
            }
        }
        tokens[tokens.length] = new Token(Path.EOD, null);
        return tokens;
    };
    Path.prototype.intersectShape = function (shape) {
        var result = new Intersection();
        for (var _i = 0, _a = this.segments; _i < _a.length; _i++) {
            var segment = _a[_i];
            var inter = Intersection.intersectShapes(segment, shape);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Path.prototype.asIntersectionParams = function () {
        return param('Path', []);
    };
    Path.COMMAND = 0;
    Path.NUMBER = 1;
    Path.EOD = 2;
    Path.PARAMS = {
        A: ['rx', 'ry', 'x-axis-rotation', 'large-arc-flag', 'sweep-flag', 'x', 'y'],
        a: ['rx', 'ry', 'x-axis-rotation', 'large-arc-flag', 'sweep-flag', 'x', 'y'],
        C: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
        c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
        H: ['x'],
        h: ['x'],
        L: ['x', 'y'],
        l: ['x', 'y'],
        M: ['x', 'y'],
        m: ['x', 'y'],
        Q: ['x1', 'y1', 'x', 'y'],
        q: ['x1', 'y1', 'x', 'y'],
        S: ['x2', 'y2', 'x', 'y'],
        s: ['x2', 'y2', 'x', 'y'],
        T: ['x', 'y'],
        t: ['x', 'y'],
        V: ['y'],
        v: ['y'],
        Z: [],
        z: []
    };
    return Path;
}());

var AbsolutePathSegment = /** @class */ (function () {
    function AbsolutePathSegment(command, params, owner, previous) {
        this.command = command;
        this.owner = owner;
        this.previous = previous;
        this.points = [];
        var index = 0;
        while (index < params.length) {
            this.points.push(new Vector2D(parseFloat(params[index]), parseFloat(params[index + 1])));
            index += 2;
        }
    }
    AbsolutePathSegment.prototype.toString = function () {
        var points = this.points.map(function (v) { return v.toString(); });
        var command = '';
        if (this.previous.command !== this.command) {
            command = this.command;
        }
        return command + points.join(' ');
    };
    Object.defineProperty(AbsolutePathSegment.prototype, "lastPoint", {
        get: function () {
            return this.points[this.points.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    AbsolutePathSegment.prototype.asIntersectionParams = function () {
        return null;
    };
    return AbsolutePathSegment;
}());
var AbsoluteArcPath = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbsoluteArcPath, _super);
    function AbsoluteArcPath(params, owner, previous) {
        var _this = _super.call(this, 'A', params.slice(params.length - 2), owner, previous) || this;
        _this.rx = parseFloat(params.shift());
        _this.ry = parseFloat(params.shift());
        _this.angle = parseFloat(params.shift());
        _this.arcFlag = parseFloat(params.shift());
        _this.sweepFlag = parseFloat(params.shift());
        return _this;
    }
    AbsoluteArcPath.prototype.toString = function () {
        var command = '';
        if (this.previous.command !== this.command) {
            command = this.command;
        }
        return command + [this.rx, this.ry, this.angle, this.arcFlag, this.sweepFlag, this.points[0].toString()].join(',');
    };
    AbsoluteArcPath.prototype.asIntersectionParams = function () {
        return param('Ellipse', [this.center, this.rx, this.ry]);
    };
    Object.defineProperty(AbsoluteArcPath.prototype, "center", {
        get: function () {
            var startPoint = this.previous.lastPoint;
            var endPoint = this.points[0];
            var rx = this.rx;
            var ry = this.ry;
            var angle = this.angle * Math.PI / 180;
            var c = Math.cos(angle);
            var s = Math.sin(angle);
            var TOLERANCE = 1e-6;
            var halfDiff = startPoint.subtract(endPoint).divide(2);
            var x1p = halfDiff.x * c + halfDiff.y * s;
            var y1p = halfDiff.x * -s + halfDiff.y * c;
            var x1px1p = x1p * x1p;
            var y1py1p = y1p * y1p;
            var lambda = (x1px1p / (rx * rx)) + (y1py1p / (ry * ry));
            var factor;
            if (lambda > 1) {
                factor = Math.sqrt(lambda);
                rx *= factor;
                ry *= factor;
            }
            var rxrx = rx * rx;
            var ryry = ry * ry;
            var rxy1 = rxrx * y1py1p;
            var ryx1 = ryry * x1px1p;
            factor = (rxrx * ryry - rxy1 - ryx1) / (rxy1 + ryx1);
            if (Math.abs(factor) < TOLERANCE) {
                factor = 0;
            }
            var sq = Math.sqrt(factor);
            if (this.arcFlag === this.sweepFlag) {
                sq = -sq;
            }
            var mid = startPoint.add(endPoint).divide(2);
            var cxp = sq * rx * y1p / ry;
            var cyp = sq * -ry * x1p / rx;
            return new Vector2D(cxp * c - cyp * s + mid.x, cxp * s + cyp * c + mid.y);
        },
        enumerable: true,
        configurable: true
    });
    return AbsoluteArcPath;
}(AbsolutePathSegment));
var AbsoluteCurveto2 = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbsoluteCurveto2, _super);
    function AbsoluteCurveto2(params, owner, previous) {
        return _super.call(this, 'Q', params, owner, previous) || this;
    }
    Object.defineProperty(AbsoluteCurveto2.prototype, "controlPoint", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    AbsoluteCurveto2.prototype.asIntersectionParams = function () {
        return param('Bezier2', [this.previous.lastPoint, this.points[0], this.points[1]]);
    };
    return AbsoluteCurveto2;
}(AbsolutePathSegment));
var AbsoluteCurveto3 = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbsoluteCurveto3, _super);
    function AbsoluteCurveto3(params, owner, previous) {
        return _super.call(this, 'C', params, owner, previous) || this;
    }
    Object.defineProperty(AbsoluteCurveto3.prototype, "lastControlPoint", {
        get: function () {
            return this.points[1];
        },
        enumerable: true,
        configurable: true
    });
    AbsoluteCurveto3.prototype.asIntersectionParams = function () {
        return param('Bezier3', [this.previous.lastPoint, this.points[0], this.points[1], this.points[2]]);
    };
    return AbsoluteCurveto3;
}(AbsolutePathSegment));
var AbsoluteHLineto = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbsoluteHLineto, _super);
    function AbsoluteHLineto(params, owner, previous) {
        return _super.call(this, 'H', [params.pop(), String(previous.lastPoint.y)], owner, previous) || this;
    }
    AbsoluteHLineto.prototype.toString = function () {
        var command = '';
        if (this.previous.command !== this.command) {
            command = this.command;
        }
        return command + this.points[0].x;
    };
    return AbsoluteHLineto;
}(AbsolutePathSegment));
var AbsoluteLineto = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbsoluteLineto, _super);
    function AbsoluteLineto(params, owner, previous) {
        return _super.call(this, 'L', params, owner, previous) || this;
    }
    AbsoluteLineto.prototype.toString = function () {
        var command = '';
        if (this.previous.command !== this.command && this.previous.command !== 'M') {
            command = this.command;
        }
        return command + this.points[0].toString();
    };
    AbsoluteLineto.prototype.asIntersectionParams = function () {
        return param('Line', [this.previous.lastPoint, this.points[0]]);
    };
    return AbsoluteLineto;
}(AbsolutePathSegment));
var AbsoluteMoveto = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbsoluteMoveto, _super);
    function AbsoluteMoveto(params, owner, previous) {
        return _super.call(this, 'M', params, owner, previous) || this;
    }
    AbsoluteMoveto.prototype.toString = function () {
        return 'M' + this.points[0].toString();
    };
    return AbsoluteMoveto;
}(AbsolutePathSegment));
var AbsoluteSmoothCurveto2 = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbsoluteSmoothCurveto2, _super);
    function AbsoluteSmoothCurveto2(params, owner, previous) {
        return _super.call(this, 'T', params, owner, previous) || this;
    }
    Object.defineProperty(AbsoluteSmoothCurveto2.prototype, "controlPoint", {
        get: function () {
            var lastPoint = this.previous.lastPoint;
            var point;
            if (this.previous.command.match(/^[QqTt]$/)) {
                var ctrlPoint = this.previous.controlPoint;
                var diff = ctrlPoint.subtract(lastPoint);
                point = lastPoint.subtract(diff);
            }
            else {
                point = lastPoint;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    AbsoluteSmoothCurveto2.prototype.asIntersectionParams = function () {
        return param('Bezier2', [this.previous.lastPoint, this.controlPoint, this.points[0]]);
    };
    return AbsoluteSmoothCurveto2;
}(AbsolutePathSegment));
var AbsoluteSmoothCurveto3 = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbsoluteSmoothCurveto3, _super);
    function AbsoluteSmoothCurveto3(params, owner, previous) {
        return _super.call(this, 'S', params, owner, previous) || this;
    }
    Object.defineProperty(AbsoluteSmoothCurveto3.prototype, "firstControlPoint", {
        get: function () {
            var lastPoint = this.previous.lastPoint;
            var point;
            if (this.previous.command.match(/^[SsCc]$/)) {
                var lastControl = this.previous.lastControlPoint;
                var diff = lastControl.subtract(lastPoint);
                point = lastPoint.subtract(diff);
            }
            else {
                point = lastPoint;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbsoluteSmoothCurveto3.prototype, "lastControlPoint", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    AbsoluteSmoothCurveto3.prototype.asIntersectionParams = function () {
        return param('Bezier3', [this.previous.lastPoint, this.firstControlPoint, this.points[0], this.points[1]]);
    };
    return AbsoluteSmoothCurveto3;
}(AbsolutePathSegment));
var RelativePathSegment = /** @class */ (function () {
    function RelativePathSegment(command, params, owner, previous) {
        this.command = command;
        this.owner = owner;
        this.previous = previous;
        this.points = [];
        var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
        var index = 0;
        while (index < params.length) {
            var handle = new Vector2D(lastPoint.x + parseFloat(params[index]), lastPoint.y + parseFloat(params[index + 1]));
            this.points.push(handle);
            index += 2;
        }
    }
    RelativePathSegment.prototype.toString = function () {
        var points = [];
        var command = '';
        var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
        if (this.previous == null || this.previous.command !== this.command) {
            command = this.command;
        }
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            var diff = point.subtract(lastPoint);
            points.push(diff.toString());
        }
        return command + points.join(' ');
    };
    Object.defineProperty(RelativePathSegment.prototype, "lastPoint", {
        get: function () {
            return this.points[this.points.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    RelativePathSegment.prototype.asIntersectionParams = function () {
        return null;
    };
    return RelativePathSegment;
}());
var RelativeClosePath = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RelativeClosePath, _super);
    function RelativeClosePath(params, owner, previous) {
        return _super.call(this, 'z', params, owner, previous) || this;
    }
    Object.defineProperty(RelativeClosePath.prototype, "lastPoint", {
        get: function () {
            var current = this.previous;
            var point;
            while (current) {
                if (current.command.match(/^[mMzZ]$/)) {
                    point = current.lastPoint;
                    break;
                }
                current = current.previous;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    RelativeClosePath.prototype.asIntersectionParams = function () {
        return param('Line', [this.previous.lastPoint, this.lastPoint]);
    };
    return RelativeClosePath;
}(RelativePathSegment));
var RelativeCurveto2 = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RelativeCurveto2, _super);
    function RelativeCurveto2(params, owner, previous) {
        return _super.call(this, 'q', params, owner, previous) || this;
    }
    Object.defineProperty(RelativeCurveto2.prototype, "controlPoint", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    RelativeCurveto2.prototype.asIntersectionParams = function () {
        return param('Bezier2', [this.previous.lastPoint, this.points[0], this.points[1]]);
    };
    return RelativeCurveto2;
}(RelativePathSegment));
var RelativeCurveto3 = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RelativeCurveto3, _super);
    function RelativeCurveto3(params, owner, previous) {
        return _super.call(this, 'c', params, owner, previous) || this;
    }
    Object.defineProperty(RelativeCurveto3.prototype, "lastControlPoint", {
        get: function () {
            return this.points[1];
        },
        enumerable: true,
        configurable: true
    });
    RelativeCurveto3.prototype.asIntersectionParams = function () {
        return param('Bezier3', [this.previous.lastPoint, this.points[0], this.points[1], this.points[2]]);
    };
    return RelativeCurveto3;
}(RelativePathSegment));
var RelativeLineto = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RelativeLineto, _super);
    function RelativeLineto(params, owner, previous) {
        return _super.call(this, 'l', params, owner, previous) || this;
    }
    RelativeLineto.prototype.toString = function () {
        var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
        var point = this.points[0].subtract(lastPoint);
        var command = '';
        if (this.previous.command !== this.command && this.previous.command !== 'm') {
            command = this.command;
        }
        return command + point.toString();
    };
    RelativeLineto.prototype.asIntersectionParams = function () {
        return param('Line', [this.previous.lastPoint, this.points[0]]);
    };
    return RelativeLineto;
}(RelativePathSegment));
var RelativeMoveto = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RelativeMoveto, _super);
    function RelativeMoveto(params, owner, previous) {
        return _super.call(this, 'm', params, owner, previous) || this;
    }
    RelativeMoveto.prototype.toString = function () {
        return 'm' + this.points[0].toString();
    };
    return RelativeMoveto;
}(RelativePathSegment));
var RelativeSmoothCurveto2 = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RelativeSmoothCurveto2, _super);
    function RelativeSmoothCurveto2(params, owner, previous) {
        return _super.call(this, 't', params, owner, previous) || this;
    }
    Object.defineProperty(RelativeSmoothCurveto2.prototype, "controlPoint", {
        get: function () {
            var lastPoint = this.previous.lastPoint;
            var point;
            if (this.previous.command.match(/^[QqTt]$/)) {
                var ctrlPoint = this.previous.controlPoint;
                var diff = ctrlPoint.subtract(lastPoint);
                point = lastPoint.subtract(diff);
            }
            else {
                point = lastPoint;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    RelativeSmoothCurveto2.prototype.asIntersectionParams = function () {
        return param('Bezier2', [this.previous.lastPoint, this.controlPoint, this.points[0]]);
    };
    return RelativeSmoothCurveto2;
}(RelativePathSegment));
var RelativeSmoothCurveto3 = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RelativeSmoothCurveto3, _super);
    function RelativeSmoothCurveto3(params, owner, previous) {
        return _super.call(this, 's', params, owner, previous) || this;
    }
    Object.defineProperty(RelativeSmoothCurveto3.prototype, "firstControlPoint", {
        get: function () {
            var lastPoint = this.previous.lastPoint;
            var point;
            if (this.previous.command.match(/^[SsCc]$/)) {
                var lastControl = this.previous.lastControlPoint;
                var diff = lastControl.subtract(lastPoint);
                point = lastPoint.subtract(diff);
            }
            else {
                point = lastPoint;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeSmoothCurveto3.prototype, "lastControlPoint", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    RelativeSmoothCurveto3.prototype.asIntersectionParams = function () {
        return param('Bezier3', [this.previous.lastPoint, this.firstControlPoint, this.points[0], this.points[1]]);
    };
    return RelativeSmoothCurveto3;
}(RelativePathSegment));


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["computeStats"] = computeStats;
/* harmony export (immutable) */ __webpack_exports__["computeAdvancedStats"] = computeAdvancedStats;
/* harmony export (immutable) */ __webpack_exports__["hist"] = hist;
/* harmony export (immutable) */ __webpack_exports__["categoricalHist"] = categoricalHist;
/* harmony export (immutable) */ __webpack_exports__["rangeHist"] = rangeHist;
/* harmony export (immutable) */ __webpack_exports__["wrapHist"] = wrapHist;
/* harmony export (immutable) */ __webpack_exports__["extent"] = extent;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 29.08.2014.
 */


var Statistics = /** @class */ (function () {
    function Statistics() {
        this.min = NaN;
        this.max = NaN;
        this.sum = 0;
        this.mean = 0;
        this._var = 0;
        this.n = 0;
        this.nans = 0;
        this.moment2 = NaN;
        this.moment3 = NaN;
        this.moment4 = NaN;
    }
    Object.defineProperty(Statistics.prototype, "var", {
        get: function () {
            return this.n > 1 ? this._var / (this.n - 1) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Statistics.prototype, "sd", {
        /** Returns the standard deviation */
        get: function () {
            return Math.sqrt(this.var);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Statistics.prototype, "kurtosis", {
        get: function () {
            if (this.n === 0) {
                return 0;
            }
            return (this.n * this.moment4) / (this.moment2 * this.moment2) - 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Statistics.prototype, "skewness", {
        get: function () {
            if (this.n === 0) {
                return 0;
            }
            return Math.sqrt(this.n) * this.moment3 / (Math.pow(this.moment2, 3. / 2.));
        },
        enumerable: true,
        configurable: true
    });
    Statistics.prototype.push = function (x) {
        if (typeof x !== 'number') {
            x = Number.NaN;
        }
        if (isNaN(x)) {
            this.nans++;
            return;
        }
        this.n++;
        this.sum += x;
        if (x < this.min || isNaN(this.min)) {
            this.min = x;
        }
        if (this.max < x || isNaN(this.max)) {
            this.max = x;
        }
        // http://www.johndcook.com/standard_deviation.html
        // See Knuth TAOCP vol 2, 3rd edition, page 232
        // http://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Higher-order_statistics
        if (this.n === 1) {
            this.mean = x;
            this._var = 0;
            this.moment2 = this.moment3 = this.moment4 = 0;
        }
        else {
            var meanMinus1 = this.mean;
            this.mean = meanMinus1 + (x - meanMinus1) / this.n;
            this._var = this._var + (x - meanMinus1) * (x - this.mean);
            var delta = x - meanMinus1;
            var deltaN = delta / this.n;
            var deltaNSquare = deltaN * deltaN;
            var term1 = delta * deltaN * (this.n - 1);
            this.moment4 += term1 * deltaNSquare * (this.n * this.n - 3 * this.n + 3) + 6 * deltaNSquare * this.moment2 - 4 * deltaN * this.moment3;
            this.moment3 += term1 * deltaN * (this.n - 2) - 3 * deltaN * this.moment2;
            this.moment2 += term1;
        }
    };
    return Statistics;
}());
var AdvancedStatistics = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AdvancedStatistics, _super);
    function AdvancedStatistics(median, q1, q3) {
        var _this = _super.call(this) || this;
        _this.median = median;
        _this.q1 = q1;
        _this.q3 = q3;
        return _this;
    }
    return AdvancedStatistics;
}(Statistics));
function computeStats() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var r = new Statistics();
    arr.forEach(function (a) { return a.forEach(r.push, r); });
    return r;
}
function quantile(arr, percentile) {
    var n = arr.length;
    if (n === 0) {
        return NaN;
    }
    if (n < 2 || percentile <= 0) {
        return arr[0];
    }
    if (percentile >= 1) {
        return arr[n - 1];
    }
    var target = percentile * (n - 1);
    var targetIndex = Math.floor(target);
    var a = arr[targetIndex], b = arr[targetIndex + 1];
    return a + (b - a) * (target - targetIndex);
}
function computeAdvancedStats(arr) {
    arr = arr.slice().sort(function (a, b) { return a - b; });
    var r = new AdvancedStatistics(quantile(arr, 0.5), quantile(arr, 0.25), quantile(arr, 0.75));
    arr.forEach(function (a) { return r.push(a); });
    return r;
}
var AHistogram = /** @class */ (function () {
    function AHistogram(bins, hist) {
        this._missing = 0;
        this._missingRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["none"])();
        this._bins = [];
        for (var i = 0; i < bins; ++i) {
            this._bins.push(hist && hist.length > i ? hist[i] : 0);
        }
    }
    Object.defineProperty(AHistogram.prototype, "largestFrequency", {
        get: function () {
            return Math.max(Math.max.apply(Math, this._bins), this._missing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "largestBin", {
        get: function () {
            return Math.max.apply(Math, this._bins);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "count", {
        get: function () {
            return this.validCount + this._missing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "validCount", {
        get: function () {
            return this._bins.reduce(function (p, s) { return p + s; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "bins", {
        get: function () {
            return this._bins.length;
        },
        enumerable: true,
        configurable: true
    });
    AHistogram.prototype.binOf = function (value) {
        return -1;
    };
    AHistogram.prototype.frequency = function (bin) {
        return this._bins[bin];
    };
    AHistogram.prototype.range = function (bin) {
        return this._ranges ? this._ranges[bin] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["none"])();
    };
    Object.defineProperty(AHistogram.prototype, "missing", {
        get: function () {
            return this._missing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "missingRange", {
        get: function () {
            return this._missingRange;
        },
        enumerable: true,
        configurable: true
    });
    AHistogram.prototype.pushAll = function (arr, indices, size) {
        var _this = this;
        var binindex = [], missingindex = [];
        for (var i = this.bins - 1; i >= 0; --i) {
            binindex.push([]);
        }
        if (indices) {
            var it_1 = indices.iter(size);
            arr.forEach(function (x) {
                var index = it_1.next();
                var bin = _this.binOf(x);
                if (bin < 0) {
                    _this._missing++;
                    missingindex.push(index);
                }
                else {
                    _this._bins[bin]++;
                    binindex[bin].push(index);
                }
            });
            //build range and remove duplicates
            this._ranges = binindex.map(function (d) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(d.sort().filter(function (di, i, a) { return di !== a[i - 1]; })); });
            this._missingRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(missingindex.sort().filter(function (di, i, a) { return di !== a[i - 1]; }));
        }
        else {
            arr.forEach(function (x) {
                var bin = _this.binOf(x);
                if (bin < 0) {
                    _this._missing++;
                }
                else {
                    _this._bins[bin]++;
                }
            });
            this._ranges = null;
            this._missingRange = null;
        }
    };
    AHistogram.prototype.forEach = function (callbackfn, thisArg) {
        return this._bins.forEach(callbackfn, thisArg);
    };
    return AHistogram;
}());
var Histogram = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Histogram, _super);
    function Histogram(bins, valueRange, hist) {
        var _this = _super.call(this, bins, hist) || this;
        _this.valueRange = valueRange;
        return _this;
    }
    Histogram.prototype.binOf = function (value) {
        if (typeof value === 'number') {
            return this.binOfImpl(value);
        }
        return -1;
    };
    Histogram.prototype.binOfImpl = function (value) {
        if (isNaN(value)) {
            return -1;
        }
        var n = (value - this.valueRange[0]) / (this.valueRange[1] - this.valueRange[0]);
        var bin = Math.round(n * (this.bins - 1));
        if (bin < 0) {
            bin = 0;
        }
        if (bin >= this.bins) {
            bin = this.bins - 1;
        }
        return isNaN(bin) ? -1 : bin;
    };
    return Histogram;
}(AHistogram));
var CatHistogram = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](CatHistogram, _super);
    function CatHistogram(values, categories, colors) {
        var _this = _super.call(this, values.length) || this;
        _this.values = values;
        _this.categories = categories;
        _this.colors = colors;
        return _this;
    }
    CatHistogram.prototype.binOf = function (value) {
        return this.values.indexOf(value);
    };
    return CatHistogram;
}(AHistogram));
var RangeHistogram = /** @class */ (function () {
    function RangeHistogram(_range) {
        this._range = _range;
    }
    Object.defineProperty(RangeHistogram.prototype, "categories", {
        get: function () {
            return this._range.groups.map(function (g) { return g.name; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "colors", {
        get: function () {
            return this._range.groups.map(function (g) { return g.color; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "largestFrequency", {
        get: function () {
            return Math.max.apply(Math, this._range.groups.map(function (g) { return g.length; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "largestBin", {
        get: function () {
            return this.largestFrequency;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "count", {
        get: function () {
            return this._range.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "validCount", {
        get: function () {
            return this.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "bins", {
        get: function () {
            return this._range.groups.length;
        },
        enumerable: true,
        configurable: true
    });
    RangeHistogram.prototype.binOf = function (value) {
        return this._range.groups.findIndex(function (g) { return g.name === value; });
    };
    RangeHistogram.prototype.frequency = function (bin) {
        return this._range.groups[bin].length;
    };
    RangeHistogram.prototype.range = function (bin) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(this._range.groups[bin]);
    };
    Object.defineProperty(RangeHistogram.prototype, "missing", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "missingRange", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["none"])();
        },
        enumerable: true,
        configurable: true
    });
    RangeHistogram.prototype.forEach = function (callbackfn, thisArg) {
        return this._range.groups.forEach(function (g, i) { return callbackfn.call(thisArg, g.length, i); });
    };
    return RangeHistogram;
}());
function hist(arr, indices, size, bins, range) {
    var r = new Histogram(bins, range);
    r.pushAll(arr, indices, size);
    return r;
}
function categoricalHist(arr, indices, size, categories, labels, colors) {
    var r = new CatHistogram(categories, labels, colors);
    r.pushAll(arr, indices, size);
    return r;
}
function rangeHist(range) {
    return new RangeHistogram(range);
}
function wrapHist(hist, valueRange) {
    return new Histogram(hist.length, valueRange, hist);
}
/**
 * computes the extent [min, max] for the given array, in case of empty array [NaN, NaN] is returned
 * @param arr the array
 * @return {[number,number]} [min, max]
 */
function extent(arr) {
    var min = NaN, max = NaN;
    arr.forEach(function (v) {
        if (isNaN(v)) {
            return;
        }
        if (isNaN(min) || min > v) {
            min = v;
        }
        if (isNaN(max) || min < v) {
            max = v;
        }
    });
    return [min, max];
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal_StratificationVector__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__internal_ProjectedAtom__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AVector; });
/* unused harmony export VectorView */
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */








/**
 * base class for different Vector implementations, views, transposed,...
 * @internal
 */
var AVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AVector, _super);
    function AVector(root) {
        var _this = _super.call(this) || this;
        _this.root = root;
        return _this;
    }
    Object.defineProperty(AVector.prototype, "dim", {
        get: function () {
            return [this.length];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AVector.prototype, "length", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    AVector.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        // tslint:disable:no-use-before-declare
        // Disabled the rule, because the classes below reference each other in a way that it is impossible to find a successful order.
        return new VectorView(this.root, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
    };
    AVector.prototype.idView = function (idRange) {
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var ids;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ids()];
                    case 1:
                        ids = _a.sent();
                        return [2 /*return*/, this.view(ids.indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(idRange)))];
                }
            });
        });
    };
    AVector.prototype.stats = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.root.valuetype.type !== __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_INT"] && this.root.valuetype.type !== __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_REAL"]) {
                            return [2 /*return*/, Promise.reject('invalid value type: ' + this.root.valuetype.type)];
                        }
                        _a = __WEBPACK_IMPORTED_MODULE_5__math__["computeStats"];
                        return [4 /*yield*/, this.data(range)];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    AVector.prototype.statsAdvanced = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.root.valuetype.type !== __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_INT"] && this.root.valuetype.type !== __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_REAL"]) {
                            return [2 /*return*/, Promise.reject('invalid value type: ' + this.root.valuetype.type)];
                        }
                        _a = __WEBPACK_IMPORTED_MODULE_5__math__["computeAdvancedStats"];
                        return [4 /*yield*/, this.data(range)];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    Object.defineProperty(AVector.prototype, "indices", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["range"])(0, this.length);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * return the range of this vector as a grouped range, depending on the type this might be a single group or multiple ones
     */
    AVector.prototype.groups = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var v, vc, d, options, vcc;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        v = this.root.valuetype;
                        if (!(v.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_CATEGORICAL"])) return [3 /*break*/, 2];
                        vc = v;
                        return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        options = {
                            name: this.root.desc.id
                        };
                        if (typeof vc.categories[0] !== 'string') {
                            vcc = vc.categories;
                            if (vcc[0].color) {
                                options.colors = vcc.map(function (d) { return d.color; });
                            }
                            if (vcc[0].label) {
                                options.labels = vcc.map(function (d) { return d.label; });
                            }
                        }
                        return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["categorical2partitioning"])(d, vc.categories.map(function (d) { return typeof d === 'string' ? d : d.name; }), options)];
                    case 2: return [2 /*return*/, Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["composite"])(this.root.desc.id, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["asUngrouped"])(this.indices.dim(0))]))];
                }
            });
        });
    };
    AVector.prototype.stratification = function () {
        return this.asStratification();
    };
    AVector.prototype.asStratification = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a, _b;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = __WEBPACK_IMPORTED_MODULE_6__internal_StratificationVector__["a" /* default */].bind;
                        _b = [void 0, this.root];
                        return [4 /*yield*/, this.groups()];
                    case 1: return [2 /*return*/, new (_a.apply(__WEBPACK_IMPORTED_MODULE_6__internal_StratificationVector__["a" /* default */], _b.concat([_c.sent()])))()];
                }
            });
        });
    };
    AVector.prototype.hist = function (bins, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var v, d, vc, vn;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        v = this.root.valuetype;
                        return [4 /*yield*/, this.data(range)];
                    case 1:
                        d = _a.sent();
                        switch (v.type) {
                            case __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_CATEGORICAL"]:
                                vc = v;
                                return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["categoricalHist"])(d, this.indices.dim(0), d.length, vc.categories.map(function (d) { return typeof d === 'string' ? d : d.name; }), vc.categories.map(function (d) { return typeof d === 'string' ? d : d.label || d.name; }), vc.categories.map(function (d) { return typeof d === 'string' ? 'gray' : d.color || 'gray'; }))];
                            case __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_REAL"]:
                            case __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_INT"]:
                                vn = v;
                                return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["hist"])(d, this.indices.dim(0), d.length, bins ? bins : Math.round(Math.sqrt(this.length)), vn.range)];
                            default:
                                return [2 /*return*/, null]; //cant create hist for unique objects or other ones
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AVector.prototype.every = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1: return [2 /*return*/, (_a.sent()).every(callbackfn, thisArg)];
                }
            });
        });
    };
    AVector.prototype.some = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1: return [2 /*return*/, (_a.sent()).some(callbackfn, thisArg)];
                }
            });
        });
    };
    AVector.prototype.forEach = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        (_a.sent()).forEach(callbackfn, thisArg);
                        return [2 /*return*/];
                }
            });
        });
    };
    AVector.prototype.reduce = function (callbackfn, initialValue, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            function helper() {
                return callbackfn.apply(thisArg, Array.from(arguments));
            }
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1: return [2 /*return*/, (_a.sent()).reduce(helper, initialValue)];
                }
            });
        });
    };
    AVector.prototype.reduceRight = function (callbackfn, initialValue, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            function helper() {
                return callbackfn.apply(thisArg, Array.from(arguments));
            }
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1: return [2 /*return*/, (_a.sent()).reduceRight(helper, initialValue)];
                }
            });
        });
    };
    AVector.prototype.reduceAtom = function (f, thisArgument, valuetype, idtype) {
        var r = this;
        return new __WEBPACK_IMPORTED_MODULE_7__internal_ProjectedAtom__["a" /* default */](r, f, thisArgument, valuetype, idtype);
    };
    AVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.f) {
            /* tslint:disable:no-eval */
            return this.reduceAtom(eval(persisted.f), this, persisted.valuetype, persisted.idtype ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(persisted.idtype) : undefined);
            /* tslint:enable:no-eval */
        }
        else if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(persisted.range));
        }
        return r;
    };
    return AVector;
}(__WEBPACK_IMPORTED_MODULE_3__idtype__["SelectAble"]));

/* harmony default export */ __webpack_exports__["b"] = (AVector);
/**
 * view on the vector restricted by a range
 * @internal
 */
var VectorView = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VectorView, _super);
    /**
     * @param root underlying matrix
     * @param range range selection
     */
    function VectorView(root, range) {
        var _this = _super.call(this, root) || this;
        _this.range = range;
        return _this;
    }
    Object.defineProperty(VectorView.prototype, "desc", {
        get: function () {
            return this.root.desc;
        },
        enumerable: true,
        configurable: true
    });
    VectorView.prototype.persist = function () {
        return {
            root: this.root.persist(),
            range: this.range.toString()
        };
    };
    VectorView.prototype.size = function () {
        return this.range.size(this.root.dim)[0];
    };
    VectorView.prototype.at = function (i) {
        var inverted = this.range.invert([i], this.root.dim);
        return this.root.at(inverted[0]);
    };
    VectorView.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.data(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    VectorView.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.names(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    VectorView.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.ids(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    VectorView.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range);
        if (r.isAll) {
            return this;
        }
        return new VectorView(this.root, this.range.preMultiply(r, this.dim));
    };
    Object.defineProperty(VectorView.prototype, "valuetype", {
        get: function () {
            return this.root.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorView.prototype, "idtype", {
        get: function () {
            return this.root.idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorView.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    /*get indices() {
     return this.range;
     }*/
    VectorView.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(indices))];
                }
            });
        });
    };
    VectorView.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(indices))];
                }
            });
        });
    };
    return VectorView;
}(AVector));



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__2D__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CORNER; });
/* unused harmony export AShape */
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */

var CORNER = [];
CORNER.N = CORNER[0] = 'n';
CORNER.NE = CORNER[1] = 'ne';
CORNER.E = CORNER[2] = 'e';
CORNER.SE = CORNER[3] = 'se';
CORNER.S = CORNER[4] = 's';
CORNER.SW = CORNER[5] = 'sw';
CORNER.W = CORNER[6] = 'w';
CORNER.NW = CORNER[7] = 'nw';
/**
 * a simple basic shape
 */
var AShape = /** @class */ (function () {
    function AShape() {
    }
    AShape.prototype.shift = function () {
        if (typeof arguments[0] === 'number') {
            this.shiftImpl(arguments[0], arguments[1]);
        }
        else if (Array.isArray(arguments[0])) {
            this.shiftImpl(arguments[0][0], arguments[0][1]);
        }
        else {
            this.shiftImpl(arguments[0].x, arguments[0].y);
        }
        return this;
    };
    Object.defineProperty(AShape.prototype, "center", {
        /**
         * center of this shape
         * @returns {Circle}
         */
        get: function () {
            return this.bs().xy;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * a specific corner of th axis aligned bounding box
     * @param corner
     * @returns {Vector2D}
     */
    AShape.prototype.corner = function (corner) {
        var r = this.aabb();
        switch (corner) {
            case CORNER.N:
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__2D__["vec"])(r.cx, r.y);
            case CORNER.S:
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__2D__["vec"])(r.cx, r.y2);
            case CORNER.W:
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__2D__["vec"])(r.x, r.cy);
            case CORNER.E:
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__2D__["vec"])(r.x2, r.cy);
            case CORNER.NE:
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__2D__["vec"])(r.x2, r.y);
            case CORNER.NW:
                return r.xy;
            case CORNER.SE:
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__2D__["vec"])(r.x2, r.y2);
            case CORNER.SW:
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__2D__["vec"])(r.x, r.y2);
        }
        return this.center;
    };
    AShape.prototype.intersects = function (other) {
        return __WEBPACK_IMPORTED_MODULE_0__2D__["Intersection"].intersectShapes(this, other);
    };
    return AShape;
}());

/* harmony default export */ __webpack_exports__["a"] = (AShape);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultSelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hoverSelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SelectOperation; });
/* harmony export (immutable) */ __webpack_exports__["f"] = toSelectOperation;
/* harmony export (immutable) */ __webpack_exports__["b"] = asSelectOperation;
/* harmony export (immutable) */ __webpack_exports__["d"] = fillWithNone;
/* harmony export (immutable) */ __webpack_exports__["g"] = integrateSelection;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */

var defaultSelectionType = 'selected';
var hoverSelectionType = 'hovered';
var SelectOperation;
(function (SelectOperation) {
    SelectOperation[SelectOperation["SET"] = 0] = "SET";
    SelectOperation[SelectOperation["ADD"] = 1] = "ADD";
    SelectOperation[SelectOperation["REMOVE"] = 2] = "REMOVE";
})(SelectOperation || (SelectOperation = {}));
function toSelectOperation(event) {
    var ctryKeyDown, shiftDown, altDown, metaDown;
    if (typeof event === 'boolean') {
        ctryKeyDown = event;
        altDown = arguments[1] || false;
        shiftDown = arguments[2] || false;
        metaDown = arguments[3] || false;
    }
    else {
        ctryKeyDown = event.ctrlKey || false;
        altDown = event.altKey || false;
        shiftDown = event.shiftKey || false;
        metaDown = event.metaKey || false;
    }
    if (ctryKeyDown || shiftDown) {
        return SelectOperation.ADD;
    }
    else if (altDown || metaDown) {
        return SelectOperation.REMOVE;
    }
    return SelectOperation.SET;
}
function asSelectOperation(v) {
    if (!v) {
        return SelectOperation.SET;
    }
    if (typeof v === 'string') {
        switch (v.toLowerCase()) {
            case 'add':
                return SelectOperation.ADD;
            case 'remove':
                return SelectOperation.REMOVE;
            default:
                return SelectOperation.SET;
        }
    }
    return +v;
}
function fillWithNone(r, ndim) {
    while (r.ndim < ndim) {
        r.dims[r.ndim] = __WEBPACK_IMPORTED_MODULE_0__range__["Range1D"].none();
    }
    return r;
}
function integrateSelection(current, additional, operation) {
    if (operation === void 0) { operation = SelectOperation.SET; }
    var next = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["parse"])(additional);
    switch (operation) {
        case SelectOperation.ADD:
            return current.union(next);
        case SelectOperation.REMOVE:
            return current.without(next);
        default:
            return next;
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2D__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AShape__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Rect__ = __webpack_require__(16);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */




var Circle = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Circle, _super);
    function Circle(x, y, radius) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (radius === void 0) { radius = 0; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "xy", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.toString = function () {
        return "Circle(x=" + this.x + ",y=" + this.y + ",radius=" + this.radius + ")";
    };
    Circle.prototype.shiftImpl = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Circle.prototype.aabb = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__Rect__["a" /* default */](this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    };
    Circle.prototype.bs = function () {
        return this;
    };
    Circle.prototype.transform = function (scale, rotate) {
        return new Circle(this.x * scale[0], this.y * scale[1], this.radius * (scale[0] + scale[1]) / 2);
    };
    Circle.prototype.asIntersectionParams = function () {
        return {
            name: 'Circle',
            params: [this.xy, this.radius]
        };
    };
    return Circle;
}(__WEBPACK_IMPORTED_MODULE_2__AShape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2D__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AShape__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Circle__ = __webpack_require__(15);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */




/**
 * a simple bounding rect
 */
var Rect = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Rect, _super);
    function Rect(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    Rect.prototype.eq = function (that) {
        return this.x === that.x && this.y === that.y && this.w === that.w && this.h === that.h;
    };
    Rect.prototype.toString = function () {
        return "Rect(x=" + this.x + ",y=" + this.y + ",w=" + this.w + ",h=" + this.h + ")";
    };
    Object.defineProperty(Rect.prototype, "xy", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "x2y2", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](this.x2, this.y2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "size", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](this.w, this.h);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "cx", {
        get: function () {
            return this.x + this.w / 2;
        },
        set: function (val) {
            this.x = val - this.w / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "cy", {
        get: function () {
            return this.y + this.h / 2;
        },
        set: function (val) {
            this.y = val - this.y / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "x2", {
        get: function () {
            return this.x + this.w;
        },
        set: function (val) {
            this.w = val - this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "y2", {
        get: function () {
            return this.y + this.h;
        },
        set: function (val) {
            this.h = val - this.y;
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.shiftImpl = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Rect.prototype.aabb = function () {
        return this;
    };
    Rect.prototype.bs = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__Circle__["a" /* default */](this.cx, this.cy, Math.sqrt(this.w * 2 + this.h * 2) / 2);
    };
    Rect.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return new Rect(this.x * scale[0], this.y * scale[1], this.w * scale[0], this.h * scale[1]);
    };
    Rect.prototype.asIntersectionParams = function () {
        return {
            name: 'Rectangle',
            params: [this.xy, this.x2y2]
        };
    };
    return Rect;
}(__WEBPACK_IMPORTED_MODULE_2__AShape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Rect);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IIDType__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manager__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal_promise__ = __webpack_require__(8);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */







/**
 * An IDType is a semantic aggregation of an entity type, like Patient and Gene.
 *
 * An entity is tracked by a unique identifier (integer) within the system,
 * which is mapped to a common, external identifier or name (string) as well.
 */
var IDType = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](IDType, _super);
    /**
     * @param id the system identifier of this IDType
     * @param name the name of this IDType for external presentation
     * @param names the plural form of above name
     * @param internal whether this is an internal type or not
     */
    function IDType(id, name, names, internal) {
        if (internal === void 0) { internal = false; }
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.names = names;
        _this.internal = internal;
        /**
         * the current selections
         */
        _this.sel = new Map();
        // TODO: is this cache ever emptied, or do we assume a reasonable upper bound on the entities in IDType?
        _this.name2idCache = new Map();
        _this.id2nameCache = new Map();
        _this.canBeMappedTo = null;
        return _this;
    }
    IDType.prototype.persist = function () {
        var s = {};
        this.sel.forEach(function (v, k) { return s[k] = v.toString(); });
        return {
            sel: s,
            name: this.name,
            names: this.names
        };
    };
    IDType.prototype.restore = function (persisted) {
        var _this = this;
        this.name = persisted.name;
        this.names = persisted.names;
        Object.keys(persisted.sel).forEach(function (type) { return _this.sel.set(type, persisted.sel[type]); });
        return this;
    };
    IDType.prototype.toString = function () {
        return this.name;
    };
    IDType.prototype.selectionTypes = function () {
        return Array.from(this.sel.keys());
    };
    /**
     * return the current selections of the given type
     * @param type optional the selection type
     * @returns {Range}
     */
    IDType.prototype.selections = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_4__IIDType__["a" /* defaultSelectionType */]; }
        if (this.sel.has(type)) {
            return this.sel.get(type);
        }
        var v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])();
        this.sel.set(type, v);
        return v;
    };
    IDType.prototype.select = function () {
        var a = Array.from(arguments);
        var type = (typeof a[0] === 'string') ? a.shift() : __WEBPACK_IMPORTED_MODULE_4__IIDType__["a" /* defaultSelectionType */], range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(a[0]), op = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__IIDType__["b" /* asSelectOperation */])(a[1]);
        return this.selectImpl(range, op, type);
    };
    IDType.prototype.selectImpl = function (range, op, type) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_4__IIDType__["c" /* SelectOperation */].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_4__IIDType__["a" /* defaultSelectionType */]; }
        var b = this.selections(type);
        var newValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])();
        switch (op) {
            case __WEBPACK_IMPORTED_MODULE_4__IIDType__["c" /* SelectOperation */].SET:
                newValue = range;
                break;
            case __WEBPACK_IMPORTED_MODULE_4__IIDType__["c" /* SelectOperation */].ADD:
                newValue = b.union(range);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__IIDType__["c" /* SelectOperation */].REMOVE:
                newValue = b.without(range);
                break;
        }
        if (b.eq(newValue)) {
            return b;
        }
        this.sel.set(type, newValue);
        var added = op !== __WEBPACK_IMPORTED_MODULE_4__IIDType__["c" /* SelectOperation */].REMOVE ? range : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])();
        var removed = (op === __WEBPACK_IMPORTED_MODULE_4__IIDType__["c" /* SelectOperation */].ADD ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])() : (op === __WEBPACK_IMPORTED_MODULE_4__IIDType__["c" /* SelectOperation */].SET ? b : range));
        this.fire(IDType.EVENT_SELECT, type, newValue, added, removed, b);
        this.fire(IDType.EVENT_SELECT + "-" + type, newValue, added, removed, b);
        return b;
    };
    IDType.prototype.clear = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_4__IIDType__["a" /* defaultSelectionType */]; }
        return this.selectImpl(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])(), __WEBPACK_IMPORTED_MODULE_4__IIDType__["c" /* SelectOperation */].SET, type);
    };
    /**
     * Cache identifier <-> name mapping in bulk.
     * @param ids the entity identifiers to cache
     * @param names the matching entity names to cache
     */
    IDType.prototype.fillMapCache = function (ids, names) {
        var _this = this;
        ids.forEach(function (id, i) {
            var name = String(names[i]);
            _this.name2idCache.set(name, id);
            _this.id2nameCache.set(id, name);
        });
    };
    /**
     * returns the list of idtypes that this type can be mapped to
     * @returns {Promise<IDType[]>}
     */
    IDType.prototype.getCanBeMappedTo = function () {
        if (this.canBeMappedTo === null) {
            this.canBeMappedTo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/").then(function (list) { return list.map(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */]); });
        }
        return this.canBeMappedTo;
    };
    IDType.prototype.mapToFirstName = function (ids, toIDType) {
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDType);
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(ids);
        return chooseRequestMethod("/idtype/" + this.id + "/" + target.id, { ids: r.toString(), mode: 'first' });
    };
    IDType.prototype.mapNameToFirstName = function (names, toIDtype) {
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDtype);
        return chooseRequestMethod("/idtype/" + this.id + "/" + target.id, { q: names, mode: 'first' });
    };
    IDType.prototype.mapToName = function (ids, toIDType) {
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDType);
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(ids);
        return chooseRequestMethod("/idtype/" + this.id + "/" + target.id, { ids: r.toString() });
    };
    IDType.prototype.mapNameToName = function (names, toIDtype) {
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDtype);
        return chooseRequestMethod("/idtype/" + this.id + "/" + target.id, { q: names });
    };
    IDType.prototype.mapToFirstID = function (ids, toIDType) {
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDType);
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(ids);
        return chooseRequestMethod("/idtype/" + this.id + "/" + target.id + "/map", { ids: r.toString(), mode: 'first' });
    };
    IDType.prototype.mapToID = function (ids, toIDType) {
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDType);
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(ids);
        return chooseRequestMethod("/idtype/" + this.id + "/" + target.id + "/map", { ids: r.toString() });
    };
    IDType.prototype.mapNameToFirstID = function (names, toIDType) {
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDType);
        return chooseRequestMethod("/idtype/" + this.id + "/" + target.id + "/map", { q: names, mode: 'first' });
    };
    IDType.prototype.mapNameToID = function (names, toIDType) {
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDType);
        return chooseRequestMethod("/idtype/" + this.id + "/" + target.id + "/map", { q: names });
    };
    /**
     * Request the system identifiers for the given entity names.
     * @param names the entity names to resolve
     * @returns a promise of system identifiers that match the input names
     */
    IDType.prototype.map = function (names) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            var toResolve, ids;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        names = names.map(function (s) { return String(s); }); // ensure strings
                        toResolve = names.filter(function (name) { return !_this.name2idCache.has(name); });
                        if (toResolve.length === 0) {
                            return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_promise__["a" /* resolveImmediately */])(names.map(function (name) { return _this.name2idCache.get(name); }))];
                        }
                        return [4 /*yield*/, chooseRequestMethod("/idtype/" + this.id + "/map", { ids: toResolve })];
                    case 1:
                        ids = _a.sent();
                        toResolve.forEach(function (name, i) {
                            _this.name2idCache.set(name, ids[i]);
                            _this.id2nameCache.set(ids[i], name);
                        });
                        return [2 /*return*/, names.map(function (name) { return _this.name2idCache.get(name); })];
                }
            });
        });
    };
    /**
     * Request the names for the given entity system identifiers.
     * @param ids the entity names to resolve
     * @returns a promise of system identifiers that match the input names
     */
    IDType.prototype.unmap = function (ids) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            var r, toResolve, result_1, result, out;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(ids);
                        toResolve = [];
                        r.dim(0).forEach(function (name) { return !(_this.id2nameCache.has(name)) ? toResolve.push(name) : null; });
                        if (toResolve.length === 0) {
                            result_1 = [];
                            r.dim(0).forEach(function (name) { return result_1.push(_this.id2nameCache.get(name)); });
                            return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_promise__["a" /* resolveImmediately */])(result_1)];
                        }
                        return [4 /*yield*/, chooseRequestMethod("/idtype/" + this.id + "/unmap", { ids: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(toResolve).toString() })];
                    case 1:
                        result = _a.sent();
                        toResolve.forEach(function (id, i) {
                            var r = String(result[i]);
                            _this.id2nameCache.set(id, r);
                            _this.name2idCache.set(r, id);
                        });
                        out = [];
                        r.dim(0).forEach(function (name) { return out.push(_this.id2nameCache.get(name)); });
                        return [2 /*return*/, out];
                }
            });
        });
    };
    /**
     * search for all matching ids for a given pattern
     * @param pattern
     * @param limit maximal number of results
     * @return {Promise<void>}
     */
    IDType.prototype.search = function (pattern, limit) {
        if (limit === void 0) { limit = 10; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/search", { q: pattern, limit: limit })];
                    case 1:
                        result = _a.sent();
                        // cache results
                        result.forEach(function (pair) {
                            var r = String(pair.name);
                            _this.id2nameCache.set(pair.id, r);
                            _this.name2idCache.set(r, pair.id);
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * search for all matching ids for a given pattern
     * @param pattern
     * @param limit maximal number of results
     * @return {Promise<void>}
     */
    IDType.prototype.searchMapping = function (pattern, toIDType, limit) {
        if (limit === void 0) { limit = 10; }
        var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* resolve */])(toIDType);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/" + target.id + "/search", { q: pattern, limit: limit });
    };
    IDType.EVENT_SELECT = 'select';
    return IDType;
}(__WEBPACK_IMPORTED_MODULE_2__event__["EventHandler"]));
/* harmony default export */ __webpack_exports__["a"] = (IDType);
/**
 * chooses whether a GET or POST request based on the expected url length
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
function chooseRequestMethod(url, data) {
    if (data === void 0) { data = {}; }
    var dataLengthGuess = JSON.stringify(data);
    var lengthGuess = url.length + dataLengthGuess.length;
    var method = lengthGuess < 2000 ? 'GET' : 'POST';
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])(url, data, method);
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterator__ = __webpack_require__(26);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */


function sortNumeric(a, b) {
    return a - b;
}
var Range1D = /** @class */ (function () {
    function Range1D(arg) {
        if (arg instanceof Range1D) {
            this.arr = arg.arr;
        }
        else if (Array.isArray(arg)) {
            this.arr = arg;
        }
        else {
            this.arr = [];
        }
    }
    Object.defineProperty(Range1D.prototype, "length", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    Range1D.all = function () {
        return new Range1D([__WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].all()]);
    };
    Range1D.single = function (item) {
        return new Range1D([__WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].single(item)]);
    };
    Range1D.none = function () {
        return new Range1D();
    };
    Range1D.from = function (indices) {
        return new Range1D(Range1D.compress(indices));
    };
    Range1D.compress = function (indices) {
        if (indices.length === 0) {
            return [];
        }
        else if (indices.length === 1) {
            return [__WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].single(indices[0])];
        }
        //return indices.map(RangeElem.single);
        var r = [], deltas = indices.slice(1).map(function (e, i) { return e - indices[i]; });
        var start = 0, act = 1, i = 0;
        while (act < indices.length) {
            while (deltas[start] === deltas[act - 1] && act < indices.length) { //while the same delta
                act++;
            }
            if (act === start + 1) { //just a single item used
                r.push(__WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].single(indices[start]));
            }
            else {
                //+1 since end is excluded
                //fix while just +1 is allowed and -1 is not allowed
                if (deltas[start] === 1) {
                    r.push(__WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].range(indices[start], indices[act - 1] + deltas[start], deltas[start]));
                }
                else {
                    for (i = start; i < act; i++) {
                        r.push(__WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].single(indices[i]));
                    }
                }
            }
            start = act;
            act += 1;
        }
        while (start < indices.length) { //corner case by adding act+1, it might happen that the last one isnt considered
            r.push(__WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].single(indices[start++]));
        }
        return r;
    };
    Object.defineProperty(Range1D.prototype, "isAll", {
        get: function () {
            return this.arr.length === 1 && this.at(0).isAll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range1D.prototype, "isNone", {
        get: function () {
            return this.arr.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range1D.prototype, "isUnbound", {
        get: function () {
            return this.arr.some(function (d) { return d.isUnbound; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range1D.prototype, "isList", {
        get: function () {
            return this.arr.every(function (d) { return d.isSingle; });
        },
        enumerable: true,
        configurable: true
    });
    Range1D.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        function p(item) {
            if (typeof item === 'string') {
                return __WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].parse(item.toString());
            }
            else if (typeof item === 'number') {
                return __WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].single(item);
            }
            else if (Array.isArray(item)) {
                return new __WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */](item[0], item[1], item[2]);
            }
            return item;
        }
        return (_a = this.arr).push.apply(_a, items.map(p));
        var _a;
    };
    Range1D.prototype.pushSlice = function (from, to, step) {
        if (to === void 0) { to = -1; }
        if (step === void 0) { step = 1; }
        this.arr.push(new __WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */](from, to, step));
    };
    Range1D.prototype.pushList = function (indices) {
        (_a = this.arr).push.apply(_a, Range1D.compress(indices));
        var _a;
    };
    Range1D.prototype.setSlice = function (from, to, step) {
        if (to === void 0) { to = -1; }
        if (step === void 0) { step = 1; }
        this.arr.length = 0;
        this.pushSlice(from, to, step);
    };
    Range1D.prototype.setList = function (indices) {
        this.arr.length = 0;
        this.pushList(indices);
    };
    Range1D.prototype.at = function (index) {
        if (index < 0) {
            index += this.length;
        }
        if (index < 0 || index >= this.arr.length) {
            return __WEBPACK_IMPORTED_MODULE_0__internal_RangeElem__["a" /* default */].none();
        }
        return this.arr[index];
    };
    Range1D.prototype.size = function (size) {
        var t = this.arr.map(function (d) { return d.size(size); });
        return t.reduce(function (a, b) { return a + b; }, 0);
    };
    Object.defineProperty(Range1D.prototype, "isIdentityRange", {
        /**
         * whether this range is the identity, i.e. the first natural numbers starting with 0
         * @return {boolean}
         */
        get: function () {
            return this.arr.length === 1 && this.arr[0].from === 0 && this.arr[0].step === 1;
        },
        enumerable: true,
        configurable: true
    });
    Range1D.prototype.repeat = function (ntimes) {
        if (ntimes === void 0) { ntimes = 1; }
        if (ntimes === 1) {
            return this;
        }
        var r = this.arr.slice();
        //push n times
        for (var i = 1; i < ntimes; ++i) {
            r.push.apply(r, this.arr);
        }
        return new Range1D(r);
    };
    /**
     * combines this range with another and returns a new one
     * this = (1,3,5,7), sub = (1,2) -> (1,2)(1,3,5,7) = (3,5)
     * @returns {Range1D}
     */
    Range1D.prototype.preMultiply = function (sub, size) {
        if (this.isAll) {
            return sub.clone();
        }
        if (sub.isAll) {
            return this.clone();
        }
        if (sub.isNone || this.isNone) {
            return Range1D.none();
        }
        if (this.isIdentityRange) { //identity lookup
            return sub.clone();
        }
        //TODO optimize
        var l = this.iter(size).asList();
        var mapImpl = function (sub) {
            var s = sub.iter(l.length);
            var r = [];
            s.forEach(function (i) {
                if (i >= 0 && i < l.length) { //check for out of range
                    r.push(l[i]);
                }
            });
            return sub.fromLike(r);
        };
        if (typeof sub.fromLikeComposite === 'function') {
            var csub = sub;
            return csub.fromLikeComposite(csub.groups.map(mapImpl));
        }
        else {
            return mapImpl(sub);
        }
    };
    /**
     * logical union between two ranges
     * @param other
     * @returns {Range1D}
     */
    Range1D.prototype.union = function (other, size) {
        if (this.isAll || other.isNone) {
            return this.clone();
        }
        if (other.isAll || this.isNone) {
            return other.clone();
        }
        var r = this.iter(size).asList();
        var it2 = other.iter(size);
        it2.forEach(function (i) {
            if (r.indexOf(i) < 0) {
                r.push(i);
            }
        });
        return other.fromLike(r.sort(sortNumeric));
    };
    /**
     * logical intersection between two ranges
     * @param other
     * @param size
     * @returns {Range1D}
     */
    Range1D.prototype.intersect = function (other, size) {
        if (this.isNone || other.isNone) {
            return Range1D.none();
        }
        if (this.isAll) {
            return other.clone();
        }
        if (other.isAll) {
            return this.clone();
        }
        var it1 = this.iter(size).asList();
        var it2 = other.iter(size);
        var r = [];
        it2.forEach(function (i) {
            if (it1.indexOf(i) >= 0) {
                r.push(i);
            }
        });
        return other.fromLike(r.sort(sortNumeric));
    };
    Range1D.prototype.toSet = function (size) {
        return this.removeDuplicates(size);
    };
    /**
     * logical difference between two ranges
     * @param without
     * @param size
     * @returns {Range1D}
     */
    Range1D.prototype.without = function (without, size) {
        if (this.isNone || without.isNone) {
            return this.clone();
        }
        if (without.isAll) {
            return Range1D.none();
        }
        var it1 = this.iter(size);
        var it2 = without.iter(size).asList();
        var r = [];
        it1.forEach(function (i) {
            if (it2.indexOf(i) < 0) {
                r.push(i);
            }
        });
        return Range1D.from(r.sort(sortNumeric));
    };
    /**
     * clones this range
     * @returns {Range1D}
     */
    Range1D.prototype.clone = function () {
        return new Range1D(this.arr.map(function (d) { return d.clone(); }));
    };
    /**
     * inverts the given index to the original range
     * @param index
     * @param size the underlying size for negative indices
     * @returns {number}
     */
    Range1D.prototype.invert = function (index, size) {
        if (this.isAll) {
            return index;
        }
        if (this.isNone) {
            return -1; //not mapped
        }
        // find the range element that contain the index-th element
        var s = this.arr[0].size(size);
        var act = 0, total = s;
        var nElems = this.arr.length - 1;
        while (total < index && act < nElems) {
            act++;
            s = this.arr[act].size(size);
            total += s;
        }
        if (act >= this.arr.length) {
            return -1; //not mapped
        }
        return this.arr[act].invert(index - total + s, size);
    };
    /**
     * returns the index(ices) of the given elements
     * @return {*}
     */
    Range1D.prototype.indexOf = function () {
        if (arguments[0] instanceof Range) {
            return this.indexRangeOf(arguments[0], arguments[1]);
        }
        var arr;
        var base = this.iter().asList();
        if (arguments.length === 1) {
            if (typeof arguments[0] === 'number') {
                return base.indexOf(arguments[0]);
            }
            arr = arguments[0];
        }
        else {
            arr = Array.from(arguments);
        }
        if (arr.length === 0) {
            return [];
        }
        return arr.map(function (index, i) { return base.indexOf(index); });
    };
    /**
     * returns the range representing the indices of the given range within the current data
     * @param r
     * @param size
     * @return {Range1D}
     */
    Range1D.prototype.indexRangeOf = function (r, size) {
        if (r.isNone || this.isNone) {
            return r.fromLike([]);
        }
        if (r.isAll) { //index of all is still all
            return Range1D.all();
        }
        //
        var mapImpl;
        if (this.isIdentityRange) {
            var end_1 = this.arr[0].to;
            mapImpl = function (d, result) {
                if (d >= 0 && d < end_1) {
                    result.push(d);
                }
            };
        }
        else {
            var arr_1 = this.iter().asList();
            mapImpl = function (d, result) {
                var i = arr_1.indexOf(d);
                if (i >= 0) {
                    result.push(i);
                }
            };
        }
        if (typeof r.fromLikeComposite === 'function') {
            var csub = r;
            return csub.fromLikeComposite(csub.groups.map(function (g) {
                var result = [];
                g.forEach(function (d) { return mapImpl(d, result); });
                return g.fromLike(result);
            }));
        }
        else {
            var result_1 = [];
            r.forEach(function (d) { return mapImpl(d, result_1); });
            return r.fromLike(result_1);
        }
    };
    /**
     * filters the given data according to this range
     * @param data
     * @param size the total size for resolving negative indices
     * @returns {*}
     */
    Range1D.prototype.filter = function (data, size, transform) {
        if (transform === void 0) { transform = function (d) { return d; }; }
        if (this.isAll) {
            return data.map(transform);
        }
        var it = this.iter(size);
        //optimization
        if (it.byOne && it instanceof __WEBPACK_IMPORTED_MODULE_1__iterator__["Iterator"]) {
            return data.slice(it.from, it.to).map(transform);
            //} else if (it.byMinusOne) {
            //  var d = data.slice();
            //  d.reverse();
            //  return d;
        }
        else {
            var r = [];
            while (it.hasNext()) {
                r.push(transform(data[it.next()]));
            }
            return r;
        }
    };
    /**
     * creates an iterator of this range
     * @param size the underlying size for negative indices
     */
    Range1D.prototype.iter = function (size) {
        if (this.isList) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterator__["forList"])(this.arr.map(function (d) { return d.from; }));
        }
        var its = this.arr.map(function (d) { return d.iter(size); });
        return __WEBPACK_IMPORTED_MODULE_1__iterator__["concat"].apply(null, its);
    };
    Object.defineProperty(Range1D.prototype, "__iterator__", {
        get: function () {
            return this.iter();
        },
        enumerable: true,
        configurable: true
    });
    Range1D.prototype.asList = function (size) {
        return this.iter(size).asList();
    };
    Object.defineProperty(Range1D.prototype, "first", {
        get: function () {
            if (this.isNone) {
                return null;
            }
            return this.arr[0].from;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range1D.prototype, "last", {
        get: function () {
            if (this.isNone) {
                return null;
            }
            return this.arr[this.arr.length - 1].from;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * for each element
     * @param callbackfn
     * @param thisArg
     */
    Range1D.prototype.forEach = function (callbackfn, thisArg) {
        return this.iter().forEach(callbackfn, thisArg);
    };
    Range1D.prototype.contains = function (value, size) {
        return this.arr.some(function (elem) { return elem.contains(value, size); });
    };
    /**
     * sort
     * @param cmp
     * @return {Range1D}
     */
    Range1D.prototype.sort = function (cmp) {
        if (cmp === void 0) { cmp = sortNumeric; }
        var arr = this.iter().asList();
        var r = arr.sort(cmp);
        return this.fromLike(r);
    };
    Range1D.prototype.removeDuplicates = function (size) {
        var arr = this.iter().asList();
        arr = arr.sort(sortNumeric);
        arr = arr.filter(function (di, i) { return di !== arr[i - 1]; }); //same value as before, remove
        return Range1D.from(arr);
    };
    /**
     * reverts the order of this range
     */
    Range1D.prototype.reverse = function () {
        var a = this.arr.map(function (r) { return r.reverse(); });
        a.reverse();
        return new Range1D(a);
    };
    Range1D.prototype.toString = function () {
        if (this.isAll) {
            return '';
        }
        if (this.length === 1) {
            return this.arr[0].toString();
        }
        return '(' + this.arr.join(',') + ')';
    };
    Range1D.prototype.eq = function (other) {
        if (this === other || (this.isAll && other.isAll) || (this.isNone && other.isNone)) {
            return true;
        }
        //TODO more performant comparison
        return this.toString() === other.toString();
    };
    Range1D.prototype.fromLike = function (indices) {
        return Range1D.from(indices);
    };
    return Range1D;
}());
/* harmony default export */ __webpack_exports__["a"] = (Range1D);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajax__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "random_id", function() { return __WEBPACK_IMPORTED_MODULE_1__index__["random_id"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fixId", function() { return __WEBPACK_IMPORTED_MODULE_1__index__["fixId"]; });
/* harmony export (immutable) */ __webpack_exports__["clearCache"] = clearCache;
/* harmony export (immutable) */ __webpack_exports__["list"] = list;
/* harmony export (immutable) */ __webpack_exports__["convertToTree"] = convertToTree;
/* harmony export (immutable) */ __webpack_exports__["tree"] = tree;
/* harmony export (immutable) */ __webpack_exports__["getFirst"] = getFirst;
/* harmony export (immutable) */ __webpack_exports__["getFirstByName"] = getFirstByName;
/* harmony export (immutable) */ __webpack_exports__["getFirstByFQName"] = getFirstByFQName;
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["upload"] = upload;
/* harmony export (immutable) */ __webpack_exports__["update"] = update;
/* harmony export (immutable) */ __webpack_exports__["modify"] = modify;
/* harmony export (immutable) */ __webpack_exports__["remove"] = remove;

/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 *
 * This module provides access functions for dataset stored on a server, including functions to list all datasets,
 * to retrieve datasets by names, id types, ids, etc.
 *
 * See IDataDescriptionMetaData in datatype.ts for various legal parameters
 */





//export {convertTableToVectors, convertToTable, listAsTable} from './internal/data_utils';
//find all datatype plugins
var available = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__plugin__["list"])('datatype');
var cacheById = new Map();
var cacheByName = new Map();
var cacheByFQName = new Map();
function clearCache(dataset) {
    if (dataset) {
        var desc = dataset.desc || dataset;
        cacheById.delete(desc.id);
        cacheByName.delete(desc.name);
        cacheByFQName.delete(desc.fqname);
    }
    else {
        cacheById.clear();
        cacheByName.clear();
        cacheByFQName.clear();
    }
}
function getCachedEntries() {
    return Promise.all(Array.from(cacheById.values()));
}
function cached(desc, result) {
    cacheById.set(desc.id, result);
    cacheByFQName.set(desc.fqname, result);
    cacheByName.set(desc.name, result);
    return result;
}
/**
 * create an object out of a description
 * @param desc
 * @returns {*}
 */
function transformEntry(desc) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var plugin;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            if (desc === undefined) {
                return [2 /*return*/, null];
            }
            desc.id = desc.id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["fixId"])(desc.name + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["randomId"])(5));
            desc.fqname = desc.fqname || desc.name;
            desc.description = desc.description || '';
            desc.creator = desc.creator || 'Anonymous';
            desc.ts = desc.ts || 0;
            if (cacheById.has(desc.id)) {
                return [2 /*return*/, cacheById.get(desc.id)];
            }
            plugin = available.filter(function (p) { return p.id === desc.type; });
            //no type there create a dummy one
            if (plugin.length === 0) {
                return [2 /*return*/, cached(desc, Promise.resolve(new __WEBPACK_IMPORTED_MODULE_4__datatype__["DummyDataType"](desc)))];
            }
            //take the first matching one
            return [2 /*return*/, cached(desc, plugin[0].load().then(function (d) { return d.factory(desc); }))];
        });
    });
}
/**
 * returns a promise for getting a map of all available data
 * @param filter optional filter either a function or a server side interpretable filter object
 * @returns {Promise<IDataType[]>}
 */
function list(filter) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var f, q, r;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            f = (typeof filter === 'function') ? filter : null;
            q = (typeof filter !== 'undefined' && typeof filter !== 'function') ? filter : {};
            if (__WEBPACK_IMPORTED_MODULE_1__index__["offline"]) {
                r = getCachedEntries();
            }
            else {
                //load descriptions and create data out of them
                r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ajax__["getAPIJSON"])('/dataset/', q).then(function (r) { return Promise.all(r.map(transformEntry)); });
            }
            if (f !== null) {
                r = r.then(function (d) { return d.filter(f); });
            }
            return [2 /*return*/, r];
        });
    });
}
/**
 * converts a given list of datasets to a tree
 * @param list
 * @returns {{children: Array, name: string, data: null}}
 */
function convertToTree(list) {
    //create a tree out of the list by the fqname
    var root = { children: [], name: '/', data: null };
    list.forEach(function (entry) {
        var path = entry.desc.fqname.split('/');
        var act = root;
        path.forEach(function (node) {
            var next = act.children.find(function (d) { return d.name === node; });
            if (!next) {
                next = { children: [], name: node, data: null };
                act.children.push(next);
            }
            act = next;
        });
        act.data = entry;
    });
    return root;
}
/**
 * returns a tree of all available datasets
 */
function tree(filter) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var _a;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = convertToTree;
                    return [4 /*yield*/, list(filter)];
                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
            }
        });
    });
}
/**
 * Returns the first dataset matching the given query
 * @param query
 * @returns {any}
 */
function getFirst(query) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var q, result;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof query === 'string' || query instanceof RegExp) {
                        return [2 /*return*/, getFirstByName(query)];
                    }
                    q = query;
                    q.limit = 1;
                    return [4 /*yield*/, list(q)];
                case 1:
                    result = _a.sent();
                    if (result.length === 0) {
                        return [2 /*return*/, Promise.reject({ error: 'nothing found, matching', args: q })];
                    }
                    return [2 /*return*/, Promise.resolve(result[0])];
            }
        });
    });
}
/*function escapeRegExp(string){
 return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
 }*/
function getFirstByName(name) {
    return getFirstWithCache(name, cacheByName, 'name');
}
function getFirstByFQName(name) {
    return getFirstWithCache(name, cacheByFQName, 'fqname');
}
function getFirstWithCache(name, cache, attr) {
    var r = typeof name === 'string' ? new RegExp(name) : name;
    for (var _i = 0, _a = Array.from(cache.entries()); _i < _a.length; _i++) {
        var _b = _a[_i], k = _b[0], v = _b[1];
        if (r.test(k)) {
            return v;
        }
    }
    return getFirst((_c = {},
        _c[attr] = typeof name === 'string' ? name : name.source,
        _c));
    var _c;
}
/**
 * Returns a promise for getting dataset based on a specific ID.
 * @param id the ID, as defined in IDataDescriptionData#id
 * @returns {Promise<any>}
 */
function getById(id) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var _a;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (cacheById.has(id)) {
                        return [2 /*return*/, cacheById.get(id)];
                    }
                    _a = transformEntry;
                    return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ajax__["getAPIJSON"])("/dataset/" + id + "/desc")];
                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
            }
        });
    });
}
/**
 * Returns a promise for getting a specific dataset
 * @param a persisted id or persisted object containing the id
 * @returns {Promise<IDataType>}
 */
function get(persisted) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var parent_1;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof persisted === 'string') {
                        return [2 /*return*/, getById(persisted)];
                    }
                    if (!persisted.root) return [3 /*break*/, 2];
                    return [4 /*yield*/, get(persisted.root)];
                case 1:
                    parent_1 = _a.sent();
                    return [2 /*return*/, parent_1 ? parent_1.restore(persisted) : null];
                case 2: 
                //can't restore non root and non data id
                return [2 /*return*/, Promise.reject('cannot restore non root and non data id')];
            }
        });
    });
}
/**
 * creates a new dataset for the given description
 * @param desc
 * @returns {Promise<IDataType>}
 */
function create(desc) {
    return transformEntry(desc);
}
function prepareData(desc, file) {
    var data = new FormData();
    data.append('desc', JSON.stringify(desc));
    if (file) {
        data.append('file', file);
    }
    return data;
}
/**
 * uploads a given dataset description with optional file attachment ot the server
 * @param data
 * @param file
 * @returns {Promise<*>}
 */
function upload(data, file) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var _a;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
            switch (_b.label) {
                case 0:
                    data = prepareData(data, file);
                    _a = transformEntry;
                    return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ajax__["sendAPI"])('/dataset/', data, 'POST')];
                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
            }
        });
    });
}
/**
 * updates an existing dataset with a new description and optional file
 * @returns {Promise<*>} returns the update dataset
 */
function update(entry, data, file) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var desc;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = prepareData(data, file);
                    return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ajax__["sendAPI"])("/dataset/" + entry.desc.id, data, 'PUT')];
                case 1:
                    desc = _a.sent();
                    // clear existing cache
                    clearCache(entry);
                    //update with current one
                    return [2 /*return*/, transformEntry(desc)];
            }
        });
    });
}
/**
 * modifies an existing dataset with a new description and optional file, the difference to update is that this should be used for partial changes
 * @returns {Promise<*>} returns the update dataset
 */
function modify(entry, data, file) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var desc;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = prepareData(data, file);
                    return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ajax__["sendAPI"])("/dataset/" + entry.desc.id, data, 'POST')];
                case 1:
                    desc = _a.sent();
                    clearCache(entry);
                    return [2 /*return*/, transformEntry(desc)];
            }
        });
    });
}
/**
 * removes a given dataset
 * @param entry
 * @returns {Promise<boolean>}
 */
function remove(entry) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var desc;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0:
                    desc = entry.desc || entry;
                    return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ajax__["sendAPI"])("/dataset/" + desc.id, {}, 'DELETE')];
                case 1:
                    _a.sent();
                    clearCache(desc);
                    return [2 /*return*/, true];
            }
        });
    });
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graph__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultGraphFactory; });

/**
 * Created by sam on 12.02.2015.
 */
/**
 * Created by Samuel Gratzl on 22.10.2014.
 */

var defaultGraphFactory = {
    makeNode: function (p) { return ((new __WEBPACK_IMPORTED_MODULE_1__graph__["b" /* GraphNode */]()).restore(p)); },
    makeEdge: function (p, lookup) { return ((new __WEBPACK_IMPORTED_MODULE_1__graph__["a" /* GraphEdge */]()).restore(p, lookup)); }
};
var GraphBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GraphBase, _super);
    function GraphBase(desc, nodes, edges) {
        if (nodes === void 0) { nodes = []; }
        if (edges === void 0) { edges = []; }
        var _this = _super.call(this) || this;
        _this.desc = desc;
        _this._nodes = nodes;
        _this._edges = edges;
        return _this;
    }
    Object.defineProperty(GraphBase.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphBase.prototype, "edges", {
        get: function () {
            return this._edges;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * migrate one graph to another cleaning this graph returning node references
     * @returns {{nodes: GraphNode[]; edges: GraphEdge[]}}
     */
    GraphBase.prototype.migrate = function () {
        return {
            nodes: this.nodes,
            edges: this.edges
        };
    };
    GraphBase.prototype.addNode = function (n) {
        this.nodes.push(n);
        this.fire('add_node', n);
        return this;
    };
    GraphBase.prototype.updateNode = function (n) {
        //since we store a reference we don't need to do anything
        this.fire('update_node', n);
        return this;
    };
    GraphBase.prototype.removeNode = function (n) {
        var i = this.nodes.indexOf(n);
        if (i < 0) {
            return null;
        }
        this.nodes.splice(i, 1);
        this.fire('remove_node', n);
        return this;
    };
    GraphBase.prototype.addEdge = function (edgeOrSource, type, t) {
        if (edgeOrSource instanceof __WEBPACK_IMPORTED_MODULE_1__graph__["a" /* GraphEdge */]) {
            var e = edgeOrSource;
            this.edges.push(e);
            this.fire('add_edge', e, e.type, e.source, e.target);
            return this;
        }
        return this.addEdge(new __WEBPACK_IMPORTED_MODULE_1__graph__["a" /* GraphEdge */](type, edgeOrSource, t));
    };
    GraphBase.prototype.updateEdge = function (e) {
        //since we store a reference we don't need to do anything
        this.fire('update_edge', e);
        return this;
    };
    GraphBase.prototype.removeEdge = function (e) {
        var i = this.edges.indexOf(e);
        if (i < 0) {
            return null;
        }
        e.takeDown();
        this.edges.splice(i, 1);
        this.fire('remove_edge', e);
        return this;
    };
    GraphBase.prototype.clear = function () {
        this.nodes.splice(0, this.nodes.length);
        this.edges.splice(0, this.edges.length);
        return Promise.resolve(this);
    };
    GraphBase.prototype.persist = function () {
        var r = {
            root: this.desc.id
        };
        r.nodes = this.nodes.map(function (s) { return s.persist(); });
        r.edges = this.edges.map(function (l) { return l.persist(); });
        return r;
    };
    GraphBase.prototype.restore = function (dump) {
        return this;
    };
    return GraphBase;
}(__WEBPACK_IMPORTED_MODULE_1__graph__["c" /* AGraph */]));
/* harmony default export */ __webpack_exports__["b"] = (GraphBase);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ObjectNode__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__StateNode__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ActionNode__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SlideNode__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graph_graph__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__internal_promise__ = __webpack_require__(8);
/* harmony export (immutable) */ __webpack_exports__["b"] = compress;
/* harmony export (immutable) */ __webpack_exports__["d"] = provenanceGraphFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProvenanceGraphDim; });
/* harmony export (immutable) */ __webpack_exports__["e"] = toSlidePath;

/**
 * Created by sam on 12.02.2015.
 */











function removeNoops(path) {
    return path.filter(function (a) { return a.f_id !== 'noop'; });
}
function compositeCompressor(cs) {
    return function (path) {
        path = removeNoops(path);
        var before;
        do {
            before = path.length;
            cs.forEach(function (c) { return path = c(path); });
        } while (before > path.length);
        return path;
    };
}
function createCompressor(path) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var toload, _a;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
            switch (_b.label) {
                case 0:
                    toload = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__plugin__["list"])('actionCompressor').filter(function (plugin) {
                        return path.some(function (action) { return action.f_id.match(plugin.matches) != null; });
                    });
                    _a = compositeCompressor;
                    return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__plugin__["load"])(toload)];
                case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).map(function (l) { return l.factory; })])];
            }
        });
    });
}
/**
 * returns a compressed version of the paths where just the last selection operation remains
 * @param path
 */
function compress(path) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var compressor, before;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (path.length <= 1) {
                        return [2 /*return*/, path]; //can't compress single one
                    }
                    return [4 /*yield*/, createCompressor(path)];
                case 1:
                    compressor = _a.sent();
                    do {
                        before = path.length;
                        path = compressor(path);
                    } while (before > path.length);
                    //console.log('after', path.map((path) => path.toString()));
                    return [2 /*return*/, path];
            }
        });
    });
}
/**
 * find common element in the list of two elements returning the indices of the first same item
 * @param a
 * @param b
 * @returns {any}
 */
function findCommon(a, b) {
    var c = 0;
    while (c < a.length && c < b.length && a[c] === b[c]) { //go to next till a difference
        c++;
    }
    if (c === 0) { //not even the root common
        return null;
    }
    return {
        i: c - 1,
        j: c - 1
    };
}
function asFunction(i) {
    if (typeof (i) !== 'function') { //make a function
        return function () { return i; };
    }
    return i;
}
function noop(inputs, parameter) {
    return {
        inverse: createNoop()
    };
}
function createNoop() {
    return {
        meta: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ActionNode__["d" /* meta */])('noop', __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["b" /* cat */].custom),
        id: 'noop',
        f: noop,
        inputs: [],
        parameter: {}
    };
}
function createLazyCmdFunctionFactory() {
    var facts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__plugin__["list"])('actionFactory');
    var singles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__plugin__["list"])('actionFunction');
    function resolveFun(id) {
        if (id === 'noop') {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__internal_promise__["a" /* resolveImmediately */])(noop);
        }
        var single = singles.find(function (f) { return f.id === id; });
        if (single) {
            return single.load().then(function (f) { return f.factory; });
        }
        var factory = facts.find(function (f) { return id.match(f.creates) != null; });
        if (factory) {
            return factory.load().then(function (f) { return f.factory(id); });
        }
        return Promise.reject('no factory found for ' + id);
    }
    var lazyFunction = function (id) {
        var _resolved = null;
        return function (inputs, parameters) {
            var that = this, args = Array.from(arguments);
            if (_resolved == null) {
                _resolved = resolveFun(id);
            }
            return _resolved.then(function (f) { return f.apply(that, args); });
        };
    };
    return function (id) { return lazyFunction(id); };
}
function provenanceGraphFactory() {
    var factory = createLazyCmdFunctionFactory();
    var types = {
        action: __WEBPACK_IMPORTED_MODULE_8__ActionNode__["a" /* default */],
        state: __WEBPACK_IMPORTED_MODULE_7__StateNode__["a" /* default */],
        object: __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */],
        story: __WEBPACK_IMPORTED_MODULE_9__SlideNode__["a" /* default */]
    };
    return {
        makeNode: function (n) { return types[n.type].restore(n, factory); },
        makeEdge: function (n, lookup) { return ((new __WEBPACK_IMPORTED_MODULE_10__graph_graph__["a" /* GraphEdge */]()).restore(n, lookup)); }
    };
}
var ProvenanceGraphDim;
(function (ProvenanceGraphDim) {
    ProvenanceGraphDim[ProvenanceGraphDim["Action"] = 0] = "Action";
    ProvenanceGraphDim[ProvenanceGraphDim["Object"] = 1] = "Object";
    ProvenanceGraphDim[ProvenanceGraphDim["State"] = 2] = "State";
    ProvenanceGraphDim[ProvenanceGraphDim["Slide"] = 3] = "Slide";
})(ProvenanceGraphDim || (ProvenanceGraphDim = {}));
function toSlidePath(s) {
    var r = [];
    while (s) {
        if (r.indexOf(s) >= 0) {
            return r;
        }
        r.push(s);
        s = s.next;
    }
    return r;
}
function findMetaObject(find) {
    return function (obj) { return find === obj || ((obj.value === null || obj.value === find.value) && (find.hash === obj.hash)); };
}
var ProvenanceGraph = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ProvenanceGraph, _super);
    function ProvenanceGraph(desc, backend) {
        var _this = _super.call(this, desc) || this;
        _this.backend = backend;
        _this._actions = [];
        _this._objects = [];
        _this._states = [];
        _this._slides = [];
        _this.act = null;
        _this.lastAction = null;
        //currently executing promise
        _this.currentlyRunning = false;
        _this.executeCurrentActionWithin = -1;
        _this.nextQueue = [];
        _this.propagate.apply(_this, [_this.backend].concat(ProvenanceGraph.PROPAGATED_EVENTS));
        if (_this.backend.nnodes === 0) {
            _this.act = new __WEBPACK_IMPORTED_MODULE_7__StateNode__["a" /* default */]('Start');
            _this._states.push(_this.act);
            _this.backend.addNode(_this.act);
        }
        else {
            var act = desc.act;
            _this._actions = _this.backend.nodes.filter(function (n) { return (n instanceof __WEBPACK_IMPORTED_MODULE_8__ActionNode__["a" /* default */]); });
            _this._objects = _this.backend.nodes.filter(function (n) { return (n instanceof __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */]); });
            _this._states = _this.backend.nodes.filter(function (n) { return (n instanceof __WEBPACK_IMPORTED_MODULE_7__StateNode__["a" /* default */]); });
            _this._slides = _this.backend.nodes.filter(function (n) { return (n instanceof __WEBPACK_IMPORTED_MODULE_9__SlideNode__["a" /* default */]); });
            _this.act = (act >= 0 ? _this.getStateById(act) : _this._states[0]);
        }
        return _this;
    }
    ProvenanceGraph.prototype.migrateBackend = function (backend) {
        //asserts that the old backend and the new one have the same nodes inside of them
        this.stopPropagation.apply(this, [this.backend].concat(ProvenanceGraph.PROPAGATED_EVENTS));
        this.backend = backend;
        this.propagate.apply(this, [this.backend].concat(ProvenanceGraph.PROPAGATED_EVENTS));
        //hack to update the description object
        this.desc = backend.desc;
    };
    Object.defineProperty(ProvenanceGraph.prototype, "isEmpty", {
        get: function () {
            return this._states.length <= 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvenanceGraph.prototype, "dim", {
        get: function () {
            return [this._actions.length, this._objects.length, this._states.length, this._slides.length];
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["all"])(); }
        var toID = function (a) { return a.id; };
        var actions = __WEBPACK_IMPORTED_MODULE_3__range__["Range1D"].from(this._actions.map(toID));
        var objects = __WEBPACK_IMPORTED_MODULE_3__range__["Range1D"].from(this._objects.map(toID));
        var states = __WEBPACK_IMPORTED_MODULE_3__range__["Range1D"].from(this._states.map(toID));
        var stories = __WEBPACK_IMPORTED_MODULE_3__range__["Range1D"].from(this._slides.map(toID));
        return Promise.resolve(range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(actions, objects, states, stories)));
    };
    ProvenanceGraph.prototype.selectState = function (state, op, type, extras) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_2__idtype__["SelectOperation"].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_2__idtype__["defaultSelectionType"]; }
        if (extras === void 0) { extras = {}; }
        this.fire('select_state,select_state_' + type, state, type, op, extras);
        this.select(ProvenanceGraphDim.State, type, state ? [this._states.indexOf(state)] : [], op);
    };
    ProvenanceGraph.prototype.selectSlide = function (state, op, type, extras) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_2__idtype__["SelectOperation"].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_2__idtype__["defaultSelectionType"]; }
        if (extras === void 0) { extras = {}; }
        this.fire('select_slide,select_slide_' + type, state, type, op, extras);
        this.select(ProvenanceGraphDim.Slide, type, state ? [this._slides.indexOf(state)] : [], op);
    };
    ProvenanceGraph.prototype.selectAction = function (action, op, type) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_2__idtype__["SelectOperation"].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_2__idtype__["defaultSelectionType"]; }
        this.fire('select_action,select_action_' + type, action, type, op);
        this.select(ProvenanceGraphDim.Action, type, action ? [this._actions.indexOf(action)] : [], op);
    };
    ProvenanceGraph.prototype.selectedStates = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_2__idtype__["defaultSelectionType"]; }
        var sel = this.idtypes[ProvenanceGraphDim.State].selections(type);
        if (sel.isNone) {
            return [];
        }
        var lookup = new Map();
        this._states.forEach(function (s) { return lookup.set(s.id, s); });
        var nodes = [];
        sel.dim(0).forEach(function (id) {
            var n = lookup.get(id);
            if (n) {
                nodes.push(n);
            }
        });
        return nodes;
    };
    ProvenanceGraph.prototype.selectedSlides = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_2__idtype__["defaultSelectionType"]; }
        var sel = this.idtypes[ProvenanceGraphDim.Slide].selections(type);
        if (sel.isNone) {
            return [];
        }
        var lookup = new Map();
        this._slides.forEach(function (s) { return lookup.set(s.id, s); });
        var nodes = [];
        sel.dim(0).forEach(function (id) {
            var n = lookup.get(id);
            if (n) {
                nodes.push(n);
            }
        });
        return nodes;
    };
    Object.defineProperty(ProvenanceGraph.prototype, "idtypes", {
        get: function () {
            return ['_provenance_actions', '_provenance_objects', '_provenance_states', '_provenance_stories'].map(__WEBPACK_IMPORTED_MODULE_2__idtype__["resolve"]);
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.clear = function () {
        var r = this.backend.clear();
        this._states = [];
        this._actions = [];
        this._objects = [];
        this._slides = [];
        this.act = null;
        this.lastAction = null;
        this.act = new __WEBPACK_IMPORTED_MODULE_7__StateNode__["a" /* default */]('start');
        this._states.push(this.act);
        this.backend.addNode(this.act);
        this.fire('clear');
        return Promise.resolve(r);
    };
    Object.defineProperty(ProvenanceGraph.prototype, "states", {
        get: function () {
            return this._states;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.getStateById = function (id) {
        return this._states.find(function (s) { return s.id === id; });
    };
    Object.defineProperty(ProvenanceGraph.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.getActionById = function (id) {
        return this._actions.find(function (s) { return s.id === id; });
    };
    Object.defineProperty(ProvenanceGraph.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.getObjectById = function (id) {
        return this._objects.find(function (s) { return s.id === id; });
    };
    Object.defineProperty(ProvenanceGraph.prototype, "stories", {
        get: function () {
            return this._slides;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.getSlideById = function (id) {
        return this._slides.find(function (s) { return s.id === id; });
    };
    ProvenanceGraph.prototype.getSlideChains = function () {
        return this.stories.filter(function (n) { return n.isStart; });
    };
    ProvenanceGraph.prototype.getSlides = function () {
        return this.getSlideChains().map(toSlidePath);
    };
    Object.defineProperty(ProvenanceGraph.prototype, "edges", {
        get: function () {
            return this.backend.edges;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.addEdge = function (s, type, t, attrs) {
        if (attrs === void 0) { attrs = {}; }
        var l = new __WEBPACK_IMPORTED_MODULE_10__graph_graph__["a" /* GraphEdge */](type, s, t);
        Object.keys(attrs).forEach(function (attr) { return l.setAttr(attr, attrs[attr]); });
        this.backend.addEdge(l);
        return l;
    };
    ProvenanceGraph.prototype.createAction = function (meta, functionId, f, inputs, parameter) {
        if (inputs === void 0) { inputs = []; }
        if (parameter === void 0) { parameter = {}; }
        var r = new __WEBPACK_IMPORTED_MODULE_8__ActionNode__["a" /* default */](meta, functionId, f, parameter);
        return this.initAction(r, inputs);
    };
    ProvenanceGraph.prototype.initAction = function (r, inputs) {
        var _this = this;
        if (inputs === void 0) { inputs = []; }
        var inobjects = inputs.map(function (i) { return ProvenanceGraph.findInArray(_this._objects, i); });
        this._actions.push(r);
        this.backend.addNode(r);
        this.fire('add_action', r);
        inobjects.forEach(function (obj, i) {
            _this.addEdge(r, 'requires', obj, { index: i });
        });
        return r;
    };
    ProvenanceGraph.prototype.createInverse = function (action, inverter) {
        var _this = this;
        var creates = action.creates, removes = action.removes;
        var i = inverter.call(action, action.requires, creates, removes);
        var inverted = this.createAction(i.meta, i.id, i.f, i.inputs, i.parameter);
        inverted.onceExecuted = true;
        this.addEdge(inverted, 'inverses', action);
        //the inverted action should create the removed ones and removes the crated ones
        removes.forEach(function (c, i) {
            _this.addEdge(inverted, 'creates', c, { index: i });
        });
        creates.forEach(function (c) {
            _this.addEdge(inverted, 'removes', c);
        });
        //create the loop in the states
        this.addEdge(action.resultsIn, 'next', inverted);
        this.addEdge(inverted, 'resultsIn', action.previous);
        return inverted;
    };
    ProvenanceGraph.prototype.push = function (arg, functionId, f, inputs, parameter) {
        var _this = this;
        if (functionId === void 0) { functionId = ''; }
        if (f === void 0) { f = null; }
        if (inputs === void 0) { inputs = []; }
        if (parameter === void 0) { parameter = {}; }
        return this.inOrder(function () {
            if (arg instanceof __WEBPACK_IMPORTED_MODULE_8__ActionNode__["c" /* ActionMetaData */]) {
                return _this.run(_this.createAction(arg, functionId, f, inputs, parameter), null);
            }
            else {
                var a = arg;
                return _this.run(_this.createAction(a.meta, a.id, a.f, a.inputs || [], a.parameter || {}), null);
            }
        });
    };
    ProvenanceGraph.prototype.pushWithResult = function (action, result) {
        var _this = this;
        return this.inOrder(function () {
            var a = _this.createAction(action.meta, action.id, action.f, action.inputs || [], action.parameter || {});
            return _this.run(a, result);
        });
    };
    ProvenanceGraph.prototype.findObject = function (value) {
        var r = this._objects.find(function (obj) { return obj.value === value; });
        if (r) {
            return r;
        }
        return null;
    };
    ProvenanceGraph.prototype.addObject = function (value, name, category, hash) {
        if (name === void 0) { name = value ? value.toString() : 'Null'; }
        if (category === void 0) { category = __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["b" /* cat */].data; }
        if (hash === void 0) { hash = name + '_' + category; }
        return this.addObjectImpl(value, name, category, hash, true);
    };
    ProvenanceGraph.prototype.addJustObject = function (value, name, category, hash) {
        if (name === void 0) { name = value ? value.toString() : 'Null'; }
        if (category === void 0) { category = __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["b" /* cat */].data; }
        if (hash === void 0) { hash = name + '_' + category; }
        return this.addObjectImpl(value, name, category, hash, false);
    };
    ProvenanceGraph.prototype.addObjectImpl = function (value, name, category, hash, createEdge) {
        if (name === void 0) { name = value ? value.toString() : 'Null'; }
        if (category === void 0) { category = __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["b" /* cat */].data; }
        if (hash === void 0) { hash = name + '_' + category; }
        if (createEdge === void 0) { createEdge = false; }
        var r = new __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */](value, name, category, hash);
        this._objects.push(r);
        this.backend.addNode(r);
        if (createEdge) {
            this.addEdge(this.act, 'consistsOf', r);
        }
        this.fire('add_object', r);
        return r;
    };
    ProvenanceGraph.prototype.resolve = function (arr) {
        var _this = this;
        return arr.map(function (r) {
            if (r instanceof __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */]) {
                return r;
            }
            if (r._resolvesTo instanceof __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */]) {
                return r._resolvesTo;
            }
            //else create a new instance
            var result = _this.addJustObject(r.value, r.name, r.category, r.hash);
            r._resolvesTo = result;
            return result;
        });
    };
    ProvenanceGraph.findInArray = function (arr, r) {
        if (r instanceof __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */]) {
            return r;
        }
        if (r._resolvesTo instanceof __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */]) {
            return r._resolvesTo;
        }
        //else create a new instance
        var result = arr.find(findMetaObject(r));
        r._resolvesTo = result;
        return result;
    };
    ProvenanceGraph.prototype.findOrAddObject = function (i, name, type) {
        return this.findOrAddObjectImpl(i, name, type, true);
    };
    ProvenanceGraph.prototype.findOrAddJustObject = function (i, name, type) {
        return this.findOrAddObjectImpl(i, name, type, false);
    };
    ProvenanceGraph.prototype.findOrAddObjectImpl = function (i, name, type, createEdge) {
        if (createEdge === void 0) { createEdge = false; }
        var r;
        var j = i;
        if (i instanceof __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */]) {
            return i;
        }
        if (j._resolvesTo instanceof __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["a" /* default */]) {
            return j._resolvesTo;
        }
        if (j.hasOwnProperty('value') && j.hasOwnProperty('name')) { //sounds like an proxy
            j.category = j.category || __WEBPACK_IMPORTED_MODULE_6__ObjectNode__["b" /* cat */].data;
            r = this._objects.find(findMetaObject(j));
            if (r) {
                if (r.value === null) { //restore instance
                    r.value = j.value;
                }
                //cache result
                j._resolvesTo = r;
                return r;
            }
            return this.addObjectImpl(j.value, j.name, j.category, j.hash, createEdge);
        }
        else { //raw value
            r = this._objects.find(function (obj) { return (obj.value === null || obj.value === i) && (name === null || obj.name === name) && (type === null || type === obj.category); });
            if (r) {
                if (r.value === null) { //restore instance
                    r.value = i;
                }
                return r;
            }
            return this.addObjectImpl(i, name, type, name + '_' + type, createEdge);
        }
    };
    ProvenanceGraph.prototype.inOrder = function (f) {
        var _this = this;
        if (this.currentlyRunning) {
            var helper_1;
            var r = new Promise(function (resolve) {
                helper_1 = resolve.bind(_this);
            });
            this.nextQueue.push(helper_1);
            return r.then(f);
        }
        else {
            return f();
        }
    };
    ProvenanceGraph.prototype.executedAction = function (action, newState, result) {
        var _this = this;
        var current = this.act;
        var next = action.resultsIn;
        result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({ created: [], removed: [], inverse: null, consumed: 0 }, result);
        this.fire('executed', action, result);
        var firstTime = !action.onceExecuted;
        action.onceExecuted = true;
        var created;
        var removed;
        if (firstTime) {
            //create an link outputs
            //
            created = this.resolve(result.created);
            created.forEach(function (c, i) {
                _this.addEdge(action, 'creates', c, { index: i });
            });
            // a removed one should be part of the inputs
            var requires_1 = action.requires;
            removed = result.removed.map(function (r) { return ProvenanceGraph.findInArray(requires_1, r); });
            removed.forEach(function (c) {
                c.value = null; //free reference
                _this.addEdge(action, 'removes', c);
            });
            //update new state
            if (newState) {
                var objs_1 = current.consistsOf;
                objs_1.push.apply(objs_1, created);
                removed.forEach(function (r) {
                    var i = objs_1.indexOf(r);
                    objs_1.splice(i, 1);
                });
                objs_1.forEach(function (obj) { return _this.addEdge(next, 'consistsOf', obj); });
            }
            this.fire('executed_first', action, next);
        }
        else {
            created = action.creates;
            //update creates reference values
            created.forEach(function (c, i) {
                c.value = result.created[i].value;
            });
            removed = action.removes;
            removed.forEach(function (c) { return c.value = null; });
        }
        result.inverse = asFunction(result.inverse);
        action.updateInverse(this, result.inverse);
        this.switchToImpl(action, next);
        return {
            action: action,
            state: next,
            created: created,
            removed: removed,
            consumed: result.consumed
        };
    };
    ProvenanceGraph.prototype.run = function (action, result, withinMilliseconds) {
        var _this = this;
        if (withinMilliseconds === void 0) { withinMilliseconds = -1; }
        var next = action.resultsIn, newState = false;
        if (!next) { //create a new state
            newState = true;
            this.addEdge(this.act, 'next', action);
            next = this.makeState(action.meta.name);
            this.addEdge(action, 'resultsIn', next);
        }
        this.fire('execute', action);
        if (__WEBPACK_IMPORTED_MODULE_1__index__["hash"].has('debug')) {
            console.log('execute ' + action.meta + ' ' + action.f_id);
        }
        this.currentlyRunning = true;
        if (typeof (withinMilliseconds) === 'function') {
            withinMilliseconds = withinMilliseconds();
        }
        this.executeCurrentActionWithin = withinMilliseconds;
        var runningAction = (result ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__internal_promise__["a" /* resolveImmediately */])(result) : action.execute(this, this.executeCurrentActionWithin)).then(this.executedAction.bind(this, action, newState));
        runningAction.then(function (result) {
            var q = _this.nextQueue.shift();
            if (q) {
                q();
            }
            else {
                _this.currentlyRunning = false;
            }
        });
        return runningAction;
    };
    ProvenanceGraph.prototype.switchToImpl = function (action, state) {
        var bak = this.act;
        this.act = state;
        this.fire('switch_state', state, bak);
        bak = this.lastAction;
        this.lastAction = action;
        this.fire('switch_action', action, bak);
    };
    /**
     * execute a bunch of already executed actions
     * @param actions
     */
    ProvenanceGraph.prototype.runChain = function (actions, withinMilliseconds) {
        if (withinMilliseconds === void 0) { withinMilliseconds = -1; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            function guessTime(index) {
                var left = torun.length - index;
                return function () { return remaining < 0 ? -1 : remaining / left; }; //uniformly distribute
            }
            function updateTime(consumed) {
                remaining -= consumed;
            }
            var last, torun, remaining, results, i, action, result;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (actions.length === 0) {
                            if (withinMilliseconds > 0) {
                                return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["resolveIn"])(withinMilliseconds).then(function () { return []; })];
                            }
                            return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__internal_promise__["a" /* resolveImmediately */])([])];
                        }
                        last = actions[actions.length - 1];
                        return [4 /*yield*/, compress(actions)];
                    case 1:
                        torun = _a.sent();
                        remaining = withinMilliseconds;
                        this.fire('run_chain', torun);
                        results = [];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < torun.length)) return [3 /*break*/, 5];
                        action = torun[i];
                        return [4 /*yield*/, this.run(action, null, withinMilliseconds < 0 ? -1 : guessTime(i))];
                    case 3:
                        result = _a.sent();
                        results.push(result);
                        updateTime(result.consumed);
                        _a.label = 4;
                    case 4:
                        ++i;
                        return [3 /*break*/, 2];
                    case 5:
                        if (this.act !== last.resultsIn) {
                            this.switchToImpl(last, last.resultsIn);
                        }
                        this.fire('ran_chain', this.act, torun);
                        return [2 /*return*/, results];
                }
            });
        });
    };
    ProvenanceGraph.prototype.undo = function () {
        var _this = this;
        if (!this.lastAction) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__internal_promise__["a" /* resolveImmediately */])(null);
        }
        //create and store the inverse
        if (this.lastAction.inverses != null) {
            //undo and undoing should still go one up
            return this.jumpTo(this.act.previousState);
        }
        else {
            return this.inOrder(function () { return _this.run(_this.lastAction.getOrCreateInverse(_this), null); });
        }
    };
    ProvenanceGraph.prototype.jumpTo = function (state, withinMilliseconds) {
        var _this = this;
        if (withinMilliseconds === void 0) { withinMilliseconds = -1; }
        return this.inOrder(function () {
            var actions = [];
            var act = _this.act;
            if (act === state) { //jump to myself
                return withinMilliseconds >= 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["resolveIn"])(withinMilliseconds).then(function () { return []; }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__internal_promise__["a" /* resolveImmediately */])([]);
            }
            //lets look at the simple past
            var actPath = act.path, targetPath = state.path;
            var common = findCommon(actPath, targetPath);
            if (common) {
                var toRevert = actPath.slice(common.i + 1).reverse(), toForward = targetPath.slice(common.j + 1);
                actions = actions.concat(toRevert.map(function (r) { return r.resultsFrom[0].getOrCreateInverse(_this); }));
                actions = actions.concat(toForward.map(function (r) { return r.resultsFrom[0]; }));
            }
            //no in the direct branches maybe in different loop instances?
            //TODO
            return _this.runChain(actions, withinMilliseconds);
        });
    };
    /**
     *
     * @param action the action to fork and attach to target
     * @param target the state to attach the given action and all of the rest
     * @param objectReplacements mappings of object replacements
     * @returns {boolean}
     */
    ProvenanceGraph.prototype.fork = function (action, target, objectReplacements) {
        var _this = this;
        if (objectReplacements === void 0) { objectReplacements = []; }
        //sanity check if target is a child of target ... bad
        //collect all states
        var all = [];
        var queue = [action.resultsIn];
        while (queue.length > 0) {
            var next = queue.shift();
            if (all.indexOf(next) >= 0) {
                continue;
            }
            all.push(next);
            queue.push.apply(queue, next.nextStates);
        }
        if (all.indexOf(target) >= 0) {
            return false; //target is a child of state
        }
        var targetObjects = target.consistsOf;
        var sourceObjects = action.previous.consistsOf;
        //function isSame(a: any[], b : any[]) {
        //  return a.length === b.length && a.every((ai, i) => ai === b[i]);
        //}
        //if (isSame(targetObjects, sourceObjects)) {
        //no state change ~ similar state, just create a link
        //we can copy the action and point to the same target
        //  const clone = this.initAction(action.clone(), action.requires);
        //  this.addEdge(target, 'next', clone);
        //  this.addEdge(clone, 'resultsIn', action.resultsIn);
        //} else {
        var removedObjects = sourceObjects.filter(function (o) { return targetObjects.indexOf(o) < 0; });
        var replacements = {};
        objectReplacements.forEach(function (d) { return replacements[_this.findOrAddObject(d.from).id] = d.to; });
        //need to copy all the states and actions
        this.copyBranch(action, target, removedObjects, replacements);
        //}
        this.fire('forked_branch', action, target);
        return true;
    };
    ProvenanceGraph.prototype.copyAction = function (action, appendTo, objectReplacements) {
        var clone = this.initAction(action.clone(), action.requires.map(function (a) { return objectReplacements[String(a.id)] || a; }));
        this.addEdge(appendTo, 'next', clone);
        var s = this.makeState(action.resultsIn.name, action.resultsIn.description);
        this.addEdge(clone, 'resultsIn', s);
        return s;
    };
    ProvenanceGraph.prototype.copyBranch = function (action, target, removedObject, objectReplacements) {
        var queue = [{ a: action, b: target }];
        var _loop_1 = function () {
            var next = queue.shift();
            var b = next.b;
            var a = next.a;
            var someRemovedObjectRequired = a.requires.some(function (ai) { return removedObject.indexOf(ai) >= 0 && !(String(ai.id) in objectReplacements); });
            if (!someRemovedObjectRequired) {
                //copy it and create a new pair to execute
                b = this_1.copyAction(a, next.b, objectReplacements);
            }
            queue.push.apply(queue, a.resultsIn.next.map(function (aa) { return ({ a: aa, b: b }); }));
        };
        var this_1 = this;
        while (queue.length > 0) {
            _loop_1();
        }
    };
    ProvenanceGraph.prototype.makeState = function (name, description) {
        if (description === void 0) { description = ''; }
        var s = new __WEBPACK_IMPORTED_MODULE_7__StateNode__["a" /* default */](name, description);
        this._states.push(s);
        this.backend.addNode(s);
        this.fire('add_state', s);
        return s;
    };
    ProvenanceGraph.prototype.persist = function () {
        var r = this.backend.persist();
        r.act = this.act ? this.act.id : null;
        r.lastAction = this.lastAction ? this.lastAction.id : null;
        return r;
    };
    /*
     restore(persisted: any) {
     const lookup = {},
     lookupFun = (id) => lookup[id];
     const types = {
     action: ActionNode,
     state: StateNode,
     object: ObjectNode
     };
     this.clear();
     persisted.nodes.forEach((p) => {
     var n = types[p.type].restore(p, factory);
     lookup[n.id] = n;
     if (n instanceof ActionNode) {
     this._actions.push(n);
     } else if (n instanceof StateNode) {
     this._states.push(n);
     } else if (n instanceof ObjectNode) {
     this._objects.push(n);
     }
     this.backend.addNode(n);
     });
     if (persisted.act) {
     this.act = lookup[persisted.id];
     }
     if (persisted.lastAction) {
     this.lastAction = lookup[persisted.lastAction];
     }
  
     persisted.edges.forEach((p) => {
     var n = (new graph.GraphEdge()).restore(p, lookupFun);
     this.backend.addEdge(n);
     });
     return this;
     }*/
    ProvenanceGraph.prototype.wrapAsSlide = function (state) {
        var node = new __WEBPACK_IMPORTED_MODULE_9__SlideNode__["a" /* default */]();
        node.name = state.name;
        this.addEdge(node, 'jumpTo', state);
        this._slides.push(node);
        this.backend.addNode(node);
        this.fire('add_slide', node);
        return node;
    };
    ProvenanceGraph.prototype.cloneSingleSlideNode = function (state) {
        var clone = state.state != null ? this.wrapAsSlide(state.state) : this.makeTextSlide();
        state.attrs.forEach(function (attr) {
            if (attr !== 'annotations') {
                clone.setAttr(attr, state.getAttr(attr, null));
            }
        });
        clone.setAttr('annotations', state.annotations.map(function (a) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({}, a); }));
        return clone;
    };
    /**
     * creates a new slide of the given StateNode by jumping to them
     * @param states
     */
    ProvenanceGraph.prototype.extractSlide = function (states, addStartEnd) {
        var _this = this;
        if (addStartEnd === void 0) { addStartEnd = true; }
        var addSlide = function (node) {
            _this._slides.push(node);
            _this.backend.addNode(node);
            _this.fire('add_slide', node);
            return node;
        };
        var slide = addStartEnd ? addSlide(__WEBPACK_IMPORTED_MODULE_9__SlideNode__["a" /* default */].makeText('Unnamed Story')) : null, prev = slide;
        states.forEach(function (s, i) {
            var node = addSlide(new __WEBPACK_IMPORTED_MODULE_9__SlideNode__["a" /* default */]());
            node.name = s.name;
            _this.addEdge(node, 'jumpTo', s);
            if (prev) {
                _this.addEdge(prev, 'next', node);
            }
            else {
                slide = node;
            }
            prev = node;
        });
        if (addStartEnd) {
            var last = __WEBPACK_IMPORTED_MODULE_9__SlideNode__["a" /* default */].makeText('Thanks');
            addSlide(last);
            this.addEdge(prev, 'next', last);
        }
        this.fire('extract_slide', slide);
        this.selectSlide(slide);
        return slide;
    };
    ProvenanceGraph.prototype.startNewSlide = function (title, states) {
        if (states === void 0) { states = []; }
        var s = this.makeTextSlide(title);
        if (states.length > 0) {
            var s2 = this.extractSlide(states, false);
            this.addEdge(s, 'next', s2);
        }
        this.fire('start_slide', s);
        return s;
    };
    ProvenanceGraph.prototype.makeTextSlide = function (title) {
        var s = __WEBPACK_IMPORTED_MODULE_9__SlideNode__["a" /* default */].makeText(title);
        this._slides.push(s);
        this.backend.addNode(s);
        this.fire('add_slide', s);
        return s;
    };
    ProvenanceGraph.prototype.insertIntoSlide = function (toInsert, slide, beforeIt) {
        if (beforeIt === void 0) { beforeIt = false; }
        this.moveSlide(toInsert, slide, beforeIt);
    };
    ProvenanceGraph.prototype.appendToSlide = function (slide, elem) {
        var s = toSlidePath(slide);
        return this.moveSlide(elem, s[s.length - 1], false);
    };
    ProvenanceGraph.prototype.moveSlide = function (node, to, beforeIt) {
        var _this = this;
        if (beforeIt === void 0) { beforeIt = false; }
        if ((beforeIt && node.next === to) || (!beforeIt && node.previous === to)) {
            return; //already matches
        }
        //1. extract the node
        //create other links
        var prev = node.previous;
        if (prev) {
            node.nexts.forEach(function (n) {
                _this.addEdge(prev, 'next', n);
            });
        }
        //remove links
        this.edges.filter(function (e) { return (e.source === node || e.target === node) && e.type === 'next'; }).forEach(function (e) {
            _this.backend.removeEdge(e);
        });
        //insert into the new place
        if (beforeIt) {
            var tprev = to.previous;
            if (tprev) {
                this.edges.filter(function (e) { return (e.target === to) && e.type === 'next'; }).forEach(function (e) {
                    _this.backend.removeEdge(e);
                });
                this.addEdge(tprev, 'next', node);
                this.addEdge(node, 'next', to);
            }
            this.addEdge(node, 'next', to);
        }
        else {
            var tnexts = to.nexts;
            if (tnexts.length > 0) {
                this.edges.filter(function (e) { return (e.source === to) && e.type === 'next'; }).forEach(function (e) {
                    _this.backend.removeEdge(e);
                });
                tnexts.forEach(function (next) {
                    _this.addEdge(node, 'next', next);
                });
            }
            this.addEdge(to, 'next', node);
        }
        this.fire('move_slide', node, to, beforeIt);
    };
    ProvenanceGraph.prototype.removeSlideNode = function (node) {
        var _this = this;
        var prev = node.previous;
        if (prev) {
            node.nexts.forEach(function (n) {
                _this.addEdge(prev, 'next', n);
            });
        }
        this.edges.filter(function (e) { return e.source === node || e.target === node; }).forEach(function (e) {
            _this.backend.removeEdge(e);
        });
        this._slides.splice(this._slides.indexOf(node), 1);
        this.backend.removeNode(node);
        this.fire('remove_slide', node);
    };
    ProvenanceGraph.prototype.removeFullSlide = function (node) {
        //go to the beginning
        while (node.previous) {
            node = node.previous;
        }
        var bak = node;
        while (node) {
            var next = node.next;
            this.removeSlideNode(node);
            node = next;
        }
        this.fire('destroy_slide', bak);
    };
    ProvenanceGraph.prototype.setSlideJumpToTarget = function (node, state) {
        var old = node.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__graph_graph__["d" /* isType */])('jumpTo'))[0];
        if (old) {
            this.backend.removeEdge(old);
        }
        if (state) {
            this.addEdge(node, 'jumpTo', state);
        }
        this.fire('set_jump_target', node, old ? old.target : null, state);
    };
    ProvenanceGraph.PROPAGATED_EVENTS = ['sync', 'add_edge', 'add_node', 'sync_node', 'sync_edge', 'sync_start'];
    return ProvenanceGraph;
}(__WEBPACK_IMPORTED_MODULE_4__datatype__["ADataType"]));
/* harmony default export */ __webpack_exports__["a"] = (ProvenanceGraph);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extensions__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_EVENT_USER_LOGGED_IN", function() { return GLOBAL_EVENT_USER_LOGGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_EVENT_USER_LOGGED_OUT", function() { return GLOBAL_EVENT_USER_LOGGED_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANONYMOUS_USER", function() { return ANONYMOUS_USER; });
/* harmony export (immutable) */ __webpack_exports__["reset"] = reset;
/* harmony export (immutable) */ __webpack_exports__["isLoggedIn"] = isLoggedIn;
/* harmony export (immutable) */ __webpack_exports__["login"] = login;
/* harmony export (immutable) */ __webpack_exports__["logout"] = logout;
/* harmony export (immutable) */ __webpack_exports__["currentUser"] = currentUser;
/* harmony export (immutable) */ __webpack_exports__["currentUserNameOrAnonymous"] = currentUserNameOrAnonymous;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPermission", function() { return EPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEntity", function() { return EEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_READ_READ", function() { return ALL_READ_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_NONE_NONE", function() { return ALL_NONE_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_READ_NONE", function() { return ALL_READ_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PERMISSION", function() { return DEFAULT_PERMISSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ALL_READ_READ", function() { return ALL_ALL_READ_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ALL_NONE_NONE", function() { return ALL_ALL_NONE_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ALL_READ_NONE", function() { return ALL_ALL_READ_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
/* harmony export (immutable) */ __webpack_exports__["encode"] = encode;
/* harmony export (immutable) */ __webpack_exports__["decode"] = decode;
/* harmony export (immutable) */ __webpack_exports__["canRead"] = canRead;
/* harmony export (immutable) */ __webpack_exports__["canWrite"] = canWrite;
/* harmony export (immutable) */ __webpack_exports__["canExecute"] = canExecute;
/* harmony export (immutable) */ __webpack_exports__["hasPermission"] = hasPermission;
/**
 * Created by sam on 27.02.2017.
 */




var GLOBAL_EVENT_USER_LOGGED_IN = 'USER_LOGGED_IN';
var GLOBAL_EVENT_USER_LOGGED_OUT = 'USER_LOGGED_OUT';
var ANONYMOUS_USER = { name: 'anonymous', roles: ['anonymous'] };
/**
 * resets the stored session data that will be automatically filled during login
 */
function reset() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__session__["remove"])('logged_in');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__session__["remove"])('username');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__session__["remove"])('user');
}
/**
 * whether the user is logged in
 * @returns {boolean}
 */
function isLoggedIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__session__["retrieve"])('logged_in') === true;
}
/**
 * stores the given user information
 * @param user
 */
function login(user) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__session__["store"])('logged_in', true);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__session__["store"])('username', user.name);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__session__["store"])('user', user);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__plugin__["list"])(__WEBPACK_IMPORTED_MODULE_3__extensions__["EP_PHOVEA_CORE_LOGIN"]).map(function (desc) {
        desc.load().then(function (plugin) { return plugin.factory(user); });
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__event__["fire"])(GLOBAL_EVENT_USER_LOGGED_IN, user);
}
/**
 * logs the current user out
 */
function logout() {
    var wasLoggedIn = isLoggedIn();
    reset();
    if (wasLoggedIn) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__plugin__["list"])(__WEBPACK_IMPORTED_MODULE_3__extensions__["EP_PHOVEA_CORE_LOGOUT"]).map(function (desc) {
            desc.load().then(function (plugin) { return plugin.factory(); });
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__event__["fire"])(GLOBAL_EVENT_USER_LOGGED_OUT);
    }
}
/**
 * returns the current user or null
 * @returns {any}
 */
function currentUser() {
    if (!isLoggedIn()) {
        return null;
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__session__["retrieve"])('user', ANONYMOUS_USER);
}
/**
 * returns the current user name else an anonymous user name
 */
function currentUserNameOrAnonymous() {
    var u = currentUser();
    return u ? u.name : ANONYMOUS_USER.name;
}
var EPermission;
(function (EPermission) {
    EPermission[EPermission["READ"] = 4] = "READ";
    EPermission[EPermission["WRITE"] = 2] = "WRITE";
    EPermission[EPermission["EXECUTE"] = 1] = "EXECUTE";
})(EPermission || (EPermission = {}));
var EEntity;
(function (EEntity) {
    EEntity[EEntity["USER"] = 0] = "USER";
    EEntity[EEntity["GROUP"] = 1] = "GROUP";
    EEntity[EEntity["OTHERS"] = 2] = "OTHERS";
    EEntity[EEntity["BUDDIES"] = 3] = "BUDDIES";
})(EEntity || (EEntity = {}));
function toNumber(p) {
    return (p.has(EPermission.READ) ? 4 : 0) + (p.has(EPermission.WRITE) ? 2 : 0) + (p.has(EPermission.EXECUTE) ? 1 : 0);
}
function toString(p) {
    return (p.has(EPermission.READ) ? 'r' : '-') + (p.has(EPermission.WRITE) ? 'w' : '-') + (p.has(EPermission.EXECUTE) ? 'x' : '-');
}
function fromNumber(p) {
    var r = new Set();
    if (p >= 4) {
        r.add(EPermission.READ);
        p -= 4;
    }
    if (p >= 2) {
        r.add(EPermission.WRITE);
        p -= 2;
    }
    if (p >= 1) {
        r.add(EPermission.EXECUTE);
    }
    return r;
}
/**
 * by default only the creator has all permissions
 * @type {number}
 */
var ALL_READ_READ = 744;
var ALL_NONE_NONE = 700;
var ALL_READ_NONE = 740;
var DEFAULT_PERMISSION = ALL_READ_READ;
/**
 * buddy variants: buddy, creator, group, others
 * buddies first for backward compatibility
 */
var ALL_ALL_READ_READ = 7744;
var ALL_ALL_NONE_NONE = 7700;
var ALL_ALL_READ_NONE = 7740;
var Permission = /** @class */ (function () {
    function Permission(user, group, others, buddies) {
        if (buddies === void 0) { buddies = new Set(); }
        this.user = user;
        this.group = group;
        this.others = others;
        this.buddies = buddies;
    }
    Permission.prototype.encode = function () {
        return encode(this.user, this.group, this.others);
    };
    Permission.prototype.toString = function () {
        var userEncoded = toString(this.user);
        var groupEncoded = toString(this.group);
        var othersEncoded = toString(this.others);
        return userEncoded + groupEncoded + othersEncoded;
    };
    Permission.prototype.getPermissions = function (entity) {
        switch (entity) {
            case EEntity.USER: return this.user;
            case EEntity.GROUP: return this.group;
            case EEntity.OTHERS: return this.others;
        }
    };
    Permission.prototype.hasPermission = function (entity, permission) {
        var permissions = this.getPermissions(entity);
        return permissions.has(permission);
    };
    return Permission;
}());

function encode(user, group, others, buddies) {
    if (buddies === void 0) { buddies = new Set(); }
    var userEncoded = toNumber(user);
    var groupEncoded = toNumber(group);
    var othersEncoded = toNumber(others);
    var buddiesEncoded = toNumber(buddies);
    return buddiesEncoded * 1000 + userEncoded * 100 + groupEncoded * 10 + othersEncoded;
}
function decode(permission) {
    if (permission === void 0) { permission = DEFAULT_PERMISSION; }
    if (typeof permission !== 'number') {
        permission = DEFAULT_PERMISSION;
    }
    var others = fromNumber(permission % 10);
    var group = fromNumber(Math.floor(permission / 10) % 10);
    var user = fromNumber(Math.floor(permission / 100) % 10);
    var buddies = fromNumber(Math.floor(permission / 1000) % 10);
    return new Permission(user, group, others, buddies);
}
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a === null || b === null) {
        return false;
    }
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a.localeCompare(b) === 0;
}
function includes(items, item) {
    if (!item) {
        return false;
    }
    return items.some(function (r) { return isEqual(item, r); });
}
function can(item, permission, user) {
    if (user === void 0) { user = currentUser(); }
    if (!user) {
        user = ANONYMOUS_USER;
    }
    var permissions = decode(item.permissions);
    // I'm the creator and have the right
    if (isEqual(user.name, item.creator) && permissions.user.has(permission)) {
        return true;
    }
    // check if I'm in the group and have the right
    if (item.group && includes(user.roles, item.group) && permissions.group.has(permission)) {
        return true;
    }
    // check if I'm a buddy having the right
    if (item.buddies && Array.isArray(item.buddies) && includes(item.buddies, user.name) && permissions.buddies.has(permission)) {
        return true;
    }
    // check others
    return permissions.others.has(permission);
}
/**
 * check whether the given user can read the given item
 * @param item the item to check
 * @param user the user by default the current user
 * @returns {boolean}
 */
function canRead(item, user) {
    if (user === void 0) { user = currentUser(); }
    return can(item, EPermission.READ, user);
}
/**
 * check whether the given user can write the given item
 * @param item the item to check
 * @param user the user by default the current user
 * @returns {boolean}
 */
function canWrite(item, user) {
    if (user === void 0) { user = currentUser(); }
    return can(item, EPermission.WRITE, user);
}
/**
 * check whether the given user can execute the given item
 * @param item the item to check
 * @param user the user by default the current user
 * @returns {boolean}
 */
function canExecute(item, user) {
    if (user === void 0) { user = currentUser(); }
    return can(item, EPermission.EXECUTE, user);
}
function hasPermission(item, entity, permission) {
    if (entity === void 0) { entity = EEntity.USER; }
    if (permission === void 0) { permission = EPermission.READ; }
    var permissions = decode(item.permissions);
    return permissions.hasPermission(entity, permission);
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AVector__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(2);
/* unused harmony export ANameVector */

/**
 * Created by Samuel Gratzl on 16.03.2017.
 */



var ANameVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ANameVector, _super);
    function ANameVector(base) {
        var _this = _super.call(this, null) || this;
        _this.base = base;
        _this.desc = {
            type: 'vector',
            name: base.desc.name,
            fqname: base.desc.fqname,
            description: base.desc.description,
            id: base.desc.id + '_names',
            value: {
                type: 'string'
            },
            idtype: _this.idtype.id,
            size: _this.length,
            ts: base.desc.ts,
            creator: base.desc.creator,
            group: base.desc.group,
            permissions: base.desc.permissions
        };
        return _this;
    }
    Object.defineProperty(ANameVector.prototype, "valuetype", {
        get: function () {
            return this.desc.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANameVector.prototype, "idtype", {
        // TODO This method should be abstract. However, it results in a compile error with Typescript v2.7.2:
        // `TS2715: Abstract property 'idtype' in class 'ANameVector' cannot be accessed in the constructor.`
        /*abstract*/ get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANameVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    ANameVector.prototype.persist = function () {
        return {
            root: this.base.persist(),
            names: true
        };
    };
    ANameVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    ANameVector.prototype.at = function (i) {
        return this.data(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(i)).then(function (names) { return names[0]; });
    };
    ANameVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.names(range);
    };
    ANameVector.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3____["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    ANameVector.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3____["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    return ANameVector;
}(__WEBPACK_IMPORTED_MODULE_1__AVector__["a" /* AVector */]));

/* harmony default export */ __webpack_exports__["a"] = (ANameVector);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EP_PHOVEA_CORE_LOGIN", function() { return EP_PHOVEA_CORE_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EP_PHOVEA_CORE_LOGOUT", function() { return EP_PHOVEA_CORE_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EP_PHOVEA_CORE_LOCALE", function() { return EP_PHOVEA_CORE_LOCALE; });
/**
 * Triggered when a user was logged in
 */
var EP_PHOVEA_CORE_LOGIN = 'epPhoveaCoreLogin';
/**
 * Triggered when a user was logged out. Does not provide any further information.
 */
var EP_PHOVEA_CORE_LOGOUT = 'epPhoveaCoreLogout';
/**
 * Load locale JSON files with translations
 */
var EP_PHOVEA_CORE_LOCALE = 'epPhoveaCoreLocale';


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__2D__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Circle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Polygon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Line__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Ellipse__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AShape__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return __WEBPACK_IMPORTED_MODULE_1__Rect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return __WEBPACK_IMPORTED_MODULE_2__Circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return __WEBPACK_IMPORTED_MODULE_3__Polygon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return __WEBPACK_IMPORTED_MODULE_4__Line__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return __WEBPACK_IMPORTED_MODULE_5__Ellipse__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AShape", function() { return __WEBPACK_IMPORTED_MODULE_6__AShape__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CORNER", function() { return __WEBPACK_IMPORTED_MODULE_6__AShape__["b"]; });
/* harmony export (immutable) */ __webpack_exports__["vec2"] = vec2;
/* harmony export (immutable) */ __webpack_exports__["rect"] = rect;
/* harmony export (immutable) */ __webpack_exports__["circle"] = circle;
/* harmony export (immutable) */ __webpack_exports__["ellipse"] = ellipse;
/* harmony export (immutable) */ __webpack_exports__["line"] = line;
/* harmony export (immutable) */ __webpack_exports__["polygon"] = polygon;
/* harmony export (immutable) */ __webpack_exports__["wrap"] = wrap;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 08.10.2014.
 */













function vec2(x, y) {
    return new __WEBPACK_IMPORTED_MODULE_0__2D__["Vector2D"](x, y);
}
function rect(x, y, w, h) {
    return new __WEBPACK_IMPORTED_MODULE_1__Rect__["a" /* default */](x, y, w, h);
}
function circle(x, y, radius) {
    return new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](x, y, radius);
}
function ellipse(x, y, radiusX, radiusY) {
    return new __WEBPACK_IMPORTED_MODULE_5__Ellipse__["a" /* default */](x, y, radiusX, radiusY);
}
function line(x1, y1, x2, y2) {
    return new __WEBPACK_IMPORTED_MODULE_4__Line__["a" /* default */](x1, y1, x2, y2);
}
function polygon() {
    if (Array.isArray(arguments[0])) {
        return new __WEBPACK_IMPORTED_MODULE_3__Polygon__["a" /* default */](arguments[0]);
    }
    return new __WEBPACK_IMPORTED_MODULE_3__Polygon__["a" /* default */](Array.from(arguments));
}
function wrap(obj) {
    if (!obj) {
        return obj;
    }
    if (obj instanceof __WEBPACK_IMPORTED_MODULE_6__AShape__["a" /* default */]) {
        return obj;
    }
    if (obj.hasOwnProperty('x') && obj.hasOwnProperty('y')) {
        if (obj.hasOwnProperty('radius') || obj.hasOwnProperty('r')) {
            return circle(obj.x, obj.y, obj.hasOwnProperty('radius') ? obj.radius : obj.r);
        }
        if ((obj.hasOwnProperty('radiusX') || obj.hasOwnProperty('rx')) && (obj.hasOwnProperty('radiusY') || obj.hasOwnProperty('ry'))) {
            return ellipse(obj.x, obj.y, obj.hasOwnProperty('radiusX') ? obj.radiusX : obj.rx, obj.hasOwnProperty('radiusY') ? obj.radiusY : obj.ry);
        }
        if (obj.hasOwnProperty('w') && obj.hasOwnProperty('h')) {
            return rect(obj.x, obj.y, obj.w, obj.h);
        }
        if (obj.hasOwnProperty('width') && obj.hasOwnProperty('height')) {
            return rect(obj.x, obj.y, obj.width, obj.height);
        }
    }
    if (obj.hasOwnProperty('x1') && obj.hasOwnProperty('y1') && obj.hasOwnProperty('x2') && obj.hasOwnProperty('y2')) {
        return line(obj.x1, obj.y1, obj.x2, obj.y2);
    }
    if (Array.isArray(obj) && obj.length > 0 && obj[0].hasOwnProperty('x') && obj[0].hasOwnProperty('y')) {
        return polygon(obj);
    }
    // TODO throw error?
    return obj; //can't derive it, yet
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIterator", function() { return AIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterator", function() { return Iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIterator", function() { return ListIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleIterator", function() { return SingleIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcatIterator", function() { return ConcatIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyIterator", function() { return EmptyIterator; });
/* harmony export (immutable) */ __webpack_exports__["empty"] = empty;
/* harmony export (immutable) */ __webpack_exports__["concat"] = concat;
/* harmony export (immutable) */ __webpack_exports__["range"] = range;
/* harmony export (immutable) */ __webpack_exports__["single"] = single;
/* harmony export (immutable) */ __webpack_exports__["forList"] = forList;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */

var AIterator = /** @class */ (function () {
    function AIterator() {
    }
    AIterator.prototype.hasNext = function () {
        return false;
    };
    AIterator.prototype.next = function () {
        return null;
    };
    AIterator.prototype.forEach = function (callbackfn, thisArg) {
        var i = 0;
        while (this.hasNext()) {
            callbackfn.call(thisArg, this.next(), i++);
        }
    };
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    AIterator.prototype.map = function (callbackfn, thisArg) {
        // tslint:disable:no-use-before-declare
        // Disabled the rule, because the classes below reference each other in a way that it is impossible to find a successful order.
        return new TransformIterator(this, callbackfn, thisArg);
    };
    /**
     * converts the remaining of this iterator to a list
     * @returns {Array}
     */
    AIterator.prototype.asList = function () {
        var r = [];
        while (this.hasNext()) {
            r.push(this.next());
        }
        return r;
    };
    Object.defineProperty(AIterator.prototype, "isIncreasing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AIterator.prototype, "isDecreasing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AIterator.prototype, "byOne", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AIterator.prototype, "byMinusOne", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return AIterator;
}());

/**
 * iterator for a given range
 */
var Iterator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Iterator, _super);
    function Iterator(from, to, step) {
        var _this = _super.call(this) || this;
        _this.from = from;
        _this.to = to;
        _this.step = step;
        _this.act = _this.from;
        return _this;
    }
    /**
     * whether more items are available
     */
    Iterator.prototype.hasNext = function () {
        return this.act !== this.to && ((this.step > 0 && this.act < this.to) || (this.step < 0 && this.act > this.to));
    };
    /**
     * returns the next item
     */
    Iterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        var r = this.act;
        this.act += this.step;
        if (this.step < 0 && this.act < this.to) {
            this.act = this.to;
        }
        else if (this.step > 0 && this.act > this.to) {
            this.act = this.to;
        }
        return r;
    };
    Object.defineProperty(Iterator.prototype, "isIncreasing", {
        get: function () {
            return this.step > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterator.prototype, "isDecreasing", {
        get: function () {
            return this.step < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterator.prototype, "byOne", {
        get: function () {
            return this.step === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterator.prototype, "byMinusOne", {
        get: function () {
            return this.step === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterator.prototype, "size", {
        get: function () {
            if (this.byOne) {
                return Math.max(this.to - this.from, 0);
            }
            else if (this.byMinusOne) {
                return Math.max(this.from - this.to, 0);
            }
            var d = this.isIncreasing ? (this.to - this.from + 1) : (this.from - this.to + 1);
            var s = Math.abs(this.step);
            if (d <= 0) { //no range
                return 0;
            }
            return Math.floor(d / s);
        },
        enumerable: true,
        configurable: true
    });
    return Iterator;
}(AIterator));

var ListIterator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ListIterator, _super);
    function ListIterator(arr) {
        var _this = _super.call(this) || this;
        _this.arr = arr;
        _this.it = new Iterator(0, arr.length, 1);
        return _this;
    }
    /**
     * whether more items are available
     */
    ListIterator.prototype.hasNext = function () {
        return this.it.hasNext();
    };
    /**
     * returns the next item
     */
    ListIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        return this.arr[this.it.next()];
    };
    ListIterator.prototype.asList = function () {
        return this.arr.slice();
    };
    return ListIterator;
}(AIterator));

var SingleIterator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SingleIterator, _super);
    function SingleIterator(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.delivered = false;
        return _this;
    }
    SingleIterator.prototype.hasNext = function () {
        return !this.delivered;
    };
    SingleIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        this.delivered = true;
        return this.value;
    };
    SingleIterator.prototype.asList = function () {
        return [this.value];
    };
    Object.defineProperty(SingleIterator.prototype, "isIncreasing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleIterator.prototype, "isDecreasing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleIterator.prototype, "byOne", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleIterator.prototype, "byMinusOne", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return SingleIterator;
}(AIterator));

var ConcatIterator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ConcatIterator, _super);
    function ConcatIterator(its) {
        var _this = _super.call(this) || this;
        _this.its = its;
        _this.act = its.shift();
        return _this;
    }
    /**
     * whether more items are available
     */
    ConcatIterator.prototype.hasNext = function () {
        //based on http://grepcode.com/file/repo1.maven.org/maven2/com.google.guava/guava/r08/com/google/common/collect/Iterators.java#Iterators.concat%28java.util.Iterator%29
        var currentHasNext = false;
        while (!(currentHasNext = this.act.hasNext()) && this.its.length > 0) {
            this.act = this.its.shift();
        }
        return currentHasNext;
    };
    /**
     * returns the next item
     */
    ConcatIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        return this.act.next();
    };
    /**
     * converts the remaining of this iterator to a list
     * @returns {Array}
     */
    ConcatIterator.prototype.asList = function () {
        var r = [];
        while (this.hasNext()) {
            r.push(this.next());
        }
        return r;
    };
    Object.defineProperty(ConcatIterator.prototype, "isIncreasing", {
        get: function () {
            return this.its.every(function (it) { return it.isIncreasing; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcatIterator.prototype, "isDecreasing", {
        get: function () {
            return this.its.every(function (it) { return it.isDecreasing; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcatIterator.prototype, "byOne", {
        get: function () {
            return this.its.every(function (it) { return it.byOne; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcatIterator.prototype, "byMinusOne", {
        get: function () {
            return this.its.every(function (it) { return it.byMinusOne; });
        },
        enumerable: true,
        configurable: true
    });
    return ConcatIterator;
}(AIterator));

var EmptyIterator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](EmptyIterator, _super);
    function EmptyIterator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isIncreasing = false;
        _this.isDecreasing = false;
        _this.byOne = false;
        _this.byMinusOne = false;
        return _this;
    }
    /**
     * whether more items are available
     */
    EmptyIterator.prototype.hasNext = function () {
        return false;
    };
    /**
     * returns the next item
     */
    EmptyIterator.prototype.next = function () {
        throw new RangeError('end of iterator');
    };
    /**
     * converts the remaining of this iterator to a list
     * @returns {Array}
     */
    EmptyIterator.prototype.asList = function () {
        return [];
    };
    return EmptyIterator;
}(AIterator));

var TransformIterator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](TransformIterator, _super);
    function TransformIterator(it, f, thisArg) {
        var _this = _super.call(this) || this;
        _this.it = it;
        _this.f = f;
        _this.thisArg = thisArg;
        return _this;
    }
    /**
     * whether more items are available
     */
    TransformIterator.prototype.hasNext = function () {
        return this.it.hasNext();
    };
    /**
     * returns the next item
     */
    TransformIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        return this.f.call(this.thisArg, this.it.next());
    };
    Object.defineProperty(TransformIterator.prototype, "isIncreasing", {
        get: function () {
            return this.it.isIncreasing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransformIterator.prototype, "isDecreasing", {
        get: function () {
            return this.it.isDecreasing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransformIterator.prototype, "byOne", {
        get: function () {
            return this.it.byOne;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransformIterator.prototype, "byMinusOne", {
        get: function () {
            return this.it.byMinusOne;
        },
        enumerable: true,
        configurable: true
    });
    return TransformIterator;
}(AIterator));
function empty() {
    return new EmptyIterator();
}
function concat() {
    var its = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        its[_i] = arguments[_i];
    }
    if (its.length === 0) {
        return empty();
    }
    else if (its.length === 1) {
        return its[0];
    }
    return new ConcatIterator(its);
}
/**
 * creates a new iterator for the given range
 * @param from
 * @param to
 * @param step
 * @returns {Iterator}
 */
function range(from, to, step) {
    return new Iterator(from, to, step);
}
function single(value) {
    return new SingleIterator(value);
}
/**
 * creates a new iterator for the given list
 * @param arr
 * @returns {ListIterator}
 */
function forList(arr) {
    return new ListIterator(arr);
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProxyMetaData; });
/* harmony export (immutable) */ __webpack_exports__["c"] = selectVis;
/* harmony export (immutable) */ __webpack_exports__["d"] = clearNode;
/* harmony export (immutable) */ __webpack_exports__["a"] = createNode;
/**
 * Created by sam on 26.12.2016.
 */
/**
 * @internal
 */
var ProxyMetaData = /** @class */ (function () {
    function ProxyMetaData(proxy) {
        this.proxy = proxy;
    }
    Object.defineProperty(ProxyMetaData.prototype, "scaling", {
        get: function () {
            var p = this.proxy();
            return p ? p.scaling : 'free';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyMetaData.prototype, "rotation", {
        get: function () {
            var p = this.proxy();
            return p ? p.rotation : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyMetaData.prototype, "sizeDependsOnDataDimension", {
        get: function () {
            var p = this.proxy();
            return p ? p.sizeDependsOnDataDimension : [false, false];
        },
        enumerable: true,
        configurable: true
    });
    return ProxyMetaData;
}());

/**
 * @internal
 */
function selectVis(initial, visses) {
    switch (typeof initial) {
        case 'number':
            return visses[Math.max(0, Math.min(initial, visses.length - 1))];
        case 'string':
            return visses[Math.max(0, visses.findIndex(function (v) { return v.id === initial; }))];
        default:
            return visses[Math.max(0, visses.indexOf(initial))];
    }
}
/**
 * @internal
 */
function clearNode(parent) {
    var node = parent.firstChild;
    while ((node = parent.firstChild) != null) {
        parent.removeChild(node);
    }
}
/**
 * @internal
 */
function createNode(parent, type, clazz) {
    if (type === void 0) { type = 'div'; }
    var node = parent.ownerDocument.createElement(type);
    if (clazz) {
        clazz.split(' ').forEach(function (c) { return node.classList.add(c); });
    }
    parent.appendChild(node);
    return node;
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["assignVis"] = assignVis;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVisInstance", function() { return AVisInstance; });
/* harmony export (immutable) */ __webpack_exports__["list"] = list;

/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 05.08.2014.
 */



function assignVis(node, vis) {
    node.__vis__ = vis;
}
/**
 * base class for an visualization
 */
var AVisInstance = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AVisInstance, _super);
    function AVisInstance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["uniqueId"])('vis');
        _this._built = false;
        return _this;
    }
    AVisInstance.prototype.option = function (name, value) {
        //dummy
        //if (value) {
        //  this.fire('option', name, value, null);
        //}
        return null;
    };
    AVisInstance.prototype.persist = function () {
        return null;
    };
    Object.defineProperty(AVisInstance.prototype, "isBuilt", {
        get: function () {
            return this._built;
        },
        enumerable: true,
        configurable: true
    });
    AVisInstance.prototype.markReady = function (built) {
        if (built === void 0) { built = true; }
        this._built = built;
        if (built) {
            this.fire('ready');
        }
    };
    AVisInstance.prototype.locate = function () {
        var range = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            range[_i] = arguments[_i];
        }
        if (range.length === 1) {
            return this.locateImpl(range[0]);
        }
        return Promise.all(range.map(this.locateImpl, this));
    };
    AVisInstance.prototype.locateById = function () {
        var range = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            range[_i] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            var ids;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.ids()];
                    case 1:
                        ids = _a.sent();
                        if (range.length === 1) {
                            return [2 /*return*/, this.locateImpl(ids.indexOf(range[0]))];
                        }
                        return [2 /*return*/, Promise.all(range.map(function (r) { return _this.locateImpl(ids.indexOf(r)); }))];
                }
            });
        });
    };
    AVisInstance.prototype.locateImpl = function (range) {
        //no resolution by default
        return Promise.resolve(null);
    };
    AVisInstance.prototype.restore = function (persisted) {
        return Promise.resolve(this);
    };
    AVisInstance.prototype.update = function () {
        //do nothing
    };
    AVisInstance.prototype.destroy = function () {
        // nothing to destroy
        var n = this.node;
        var w = n ? n.ownerDocument.defaultView : null;
        if (n && n.parentNode && !(w && w.event && w.event.type === 'DOMNodeRemoved' && w.event.target === n)) {
            n.parentNode.removeChild(n);
        }
        this.fire('destroyed');
    };
    AVisInstance.prototype.transform = function () {
        return {
            scale: [1, 1],
            rotate: 0
        };
    };
    Object.defineProperty(AVisInstance.prototype, "rawSize", {
        get: function () {
            return [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AVisInstance.prototype, "size", {
        get: function () {
            var t = this.transform();
            var r = this.rawSize;
            //TODO rotation
            return [r[0] * t.scale[0], r[1] * t.scale[1]];
        },
        enumerable: true,
        configurable: true
    });
    return AVisInstance;
}(__WEBPACK_IMPORTED_MODULE_3__event__["EventHandler"]));

function extrapolateFilter(r) {
    var v = r.filter;
    if (typeof v === 'undefined') {
        r.filter = function () { return true; };
    }
    else if (typeof v === 'string') {
        r.filter = function (data) { return data && data.desc.type && data.desc.type.match(v) != null; };
    }
    else if (Array.isArray(v)) {
        r.filter = function (data) { return data && data && (data.desc.type && data.desc.type.match(v[0])) && (data.desc.value === undefined || data.desc.value.type.match(v[1])); };
    }
}
function extrapolateIconify(r) {
    if (typeof r.iconify === 'function') {
        return;
    }
    r.iconify = function iconfiy(node) {
        node.title = this.name;
        var anyThis = this;
        if (anyThis.iconcss) {
            node.classList.add('phovea-vis-icon');
            node.classList.add(anyThis.iconcss);
        }
        else if (anyThis.icon) {
            node.classList.add('phovea-vis-icon');
            node.style.width = '1em';
            node.style.display = 'inline-block';
            node.style.textAlign = 'center';
            node.style.backgroundSize = '100%';
            node.style.backgroundRepeat = 'no-repeat';
            //lazy load icon
            anyThis.icon().then(function (iconData) {
                node.style.backgroundImage = "url(" + iconData + ")";
            });
            node.innerHTML = '&nbsp';
        }
        else {
            node.innerText = this.name.substr(0, 1).toUpperCase();
        }
        return node;
    };
}
function extrapolateSize(r) {
    r.scaling = r.scaling || 'free';
    if (Array.isArray(r.sizeDependsOnDataDimension) && typeof r.sizeDependsOnDataDimension[0] === 'boolean') {
        // ok
    }
    else if (typeof r.sizeDependsOnDataDimension === 'boolean') {
        r.sizeDependsOnDataDimension = [r.sizeDependsOnDataDimension, r.sizeDependsOnDataDimension];
    }
    else {
        r.sizeDependsOnDataDimension = [false, false];
    }
}
function extrapolateRotation(r) {
    var m = {
        free: NaN,
        no: 0,
        transpose: 90,
        swap: 180
    };
    if (typeof r.rotation === 'string' && r.rotation in m) {
        r.rotation = m[r.rotation];
    }
    else if (typeof r.rotation === 'number') {
        r.rotation = +r.rotation;
    }
    else if (r.rotation === null) {
        r.rotation = NaN;
    }
    else {
        r.rotation = 0;
    }
}
function toVisPlugin(plugin) {
    var r = plugin;
    extrapolateFilter(r);
    extrapolateIconify(r);
    extrapolateSize(r);
    extrapolateRotation(r);
    return r;
}
/**
 * list a vis plugins and check in addition whether the match the given data type
 * @param data the data type to visualize
 * @returns {IPluginDesc[]}
 */
function list(data) {
    //filter additionally with the filter attribute, which can be a function or the expected data type
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__plugin__["list"])('vis').map(toVisPlugin).filter(function (desc) { return desc.filter(data); });
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GraphBase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_promise__ = __webpack_require__(8);




var LocalStorageGraph = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](LocalStorageGraph, _super);
    function LocalStorageGraph(desc, nodes, edges, storage) {
        if (nodes === void 0) { nodes = []; }
        if (edges === void 0) { edges = []; }
        if (storage === void 0) { storage = sessionStorage; }
        var _this = _super.call(this, desc, nodes, edges) || this;
        _this.storage = storage;
        _this.updateHandler = function (event) {
            var s = event.target;
            if (s instanceof __WEBPACK_IMPORTED_MODULE_2__graph__["b" /* GraphNode */]) {
                _this.updateNode(s);
            }
            if (s instanceof __WEBPACK_IMPORTED_MODULE_2__graph__["a" /* GraphEdge */]) {
                _this.updateEdge(s);
            }
        };
        var uid = _this.uid;
        if (nodes.length > 0 || edges.length > 0) {
            _this.storage.setItem(uid + ".nodes", JSON.stringify(nodes.map(function (d) { return d.id; })));
            nodes.forEach(function (n) {
                _this.storage.setItem(uid + '.node.' + n.id, JSON.stringify(n.persist()));
                n.on('setAttr', _this.updateHandler);
            });
            _this.storage.setItem(uid + ".edges", JSON.stringify(edges.map(function (d) { return d.id; })));
            edges.forEach(function (e) {
                _this.storage.setItem(uid + ".edge." + e.id, JSON.stringify(e.persist()));
                e.on('setAttr', _this.updateHandler);
            });
        }
        return _this;
    }
    LocalStorageGraph.migrate = function (graph, storage) {
        if (storage === void 0) { storage = sessionStorage; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_promise__["a" /* resolveImmediately */])(graph.migrate()).then(function (_a) {
            var nodes = _a.nodes, edges = _a.edges;
            return new LocalStorageGraph(graph.desc, nodes, edges, storage);
        });
    };
    LocalStorageGraph.prototype.migrate = function () {
        var _this = this;
        this.nodes.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        this.edges.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        return _super.prototype.migrate.call(this);
    };
    LocalStorageGraph.load = function (desc, factory, storage, reset) {
        if (storage === void 0) { storage = sessionStorage; }
        if (reset === void 0) { reset = false; }
        var r = new LocalStorageGraph(desc, [], [], storage);
        if (!reset) {
            r.load(factory);
        }
        return r;
    };
    LocalStorageGraph.clone = function (graph, factory, storage) {
        if (storage === void 0) { storage = sessionStorage; }
        var r = new LocalStorageGraph(graph.desc, [], [], storage);
        r.restoreDump(graph.persist(), factory);
        return r;
    };
    Object.defineProperty(LocalStorageGraph.prototype, "uid", {
        get: function () {
            return "graph" + this.desc.id;
        },
        enumerable: true,
        configurable: true
    });
    LocalStorageGraph.prototype.load = function (factory) {
        var _this = this;
        var uid = this.uid;
        if (this.storage.getItem(uid + ".nodes") == null) {
            return;
        }
        var nodeIds = JSON.parse(this.storage.getItem(uid + ".nodes"));
        var lookup = new Map();
        nodeIds.forEach(function (id) {
            var n = JSON.parse(_this.storage.getItem(uid + ".node." + id));
            var nn = factory.makeNode(n);
            lookup.set(nn.id, nn);
            nn.on('setAttr', _this.updateHandler);
            _super.prototype.addNode.call(_this, nn);
        });
        var edgeIds = JSON.parse(this.storage.getItem(uid + ".edges"));
        edgeIds.forEach(function (id) {
            var n = JSON.parse(_this.storage.getItem(uid + ".edge." + id));
            var nn = factory.makeEdge(n, lookup.get.bind(lookup));
            nn.on('setAttr', _this.updateHandler);
            _super.prototype.addEdge.call(_this, nn);
        });
        this.fire('loaded');
    };
    LocalStorageGraph.delete = function (desc, storage) {
        if (storage === void 0) { storage = sessionStorage; }
        var uid = "graph" + desc.id;
        JSON.parse(storage.getItem(uid + ".nodes") || '[]').forEach(function (id) {
            storage.removeItem(uid + ".node." + id);
        });
        storage.removeItem(uid + ".nodes");
        JSON.parse(storage.getItem(uid + ".edges") || '[]').forEach(function (id) {
            storage.removeItem(uid + ".edge." + id);
        });
        storage.removeItem(uid + ".edges");
        return true;
    };
    LocalStorageGraph.update = function (desc, storage) {
        if (storage === void 0) { storage = sessionStorage; }
        var uid = "graph" + desc.id;
    };
    LocalStorageGraph.prototype.restoreDump = function (persisted, factory) {
        var _this = this;
        var lookup = new Map();
        persisted.nodes.forEach(function (p) {
            var n = factory.makeNode(p);
            lookup.set(n.id, n);
            _this.addNode(n);
        });
        persisted.edges.forEach(function (p) {
            var n = factory.makeEdge(p, lookup.get.bind(lookup));
            _this.addEdge(n);
        });
        return this;
    };
    LocalStorageGraph.prototype.addNode = function (n) {
        _super.prototype.addNode.call(this, n);
        var uid = this.uid;
        this.storage.setItem(uid + '.node.' + n.id, JSON.stringify(n.persist()));
        this.storage.setItem(uid + ".nodes", JSON.stringify(this.nodes.map(function (d) { return d.id; })));
        n.on('setAttr', this.updateHandler);
        return this;
    };
    LocalStorageGraph.prototype.updateNode = function (n) {
        _super.prototype.updateNode.call(this, n);
        var uid = this.uid;
        this.storage.setItem(uid + '.node.' + n.id, JSON.stringify(n.persist()));
        return this;
    };
    LocalStorageGraph.prototype.removeNode = function (n) {
        if (!_super.prototype.removeNode.call(this, n)) {
            return null;
        }
        var uid = this.uid;
        this.storage.setItem(uid + ".nodes", JSON.stringify(this.nodes.map(function (d) { return d.id; })));
        this.storage.removeItem(uid + ".node." + n.id);
        n.off('setAttr', this.updateHandler);
        return this;
    };
    LocalStorageGraph.prototype.addEdge = function (edgeOrSource, type, t) {
        if (edgeOrSource instanceof __WEBPACK_IMPORTED_MODULE_2__graph__["a" /* GraphEdge */]) {
            _super.prototype.addEdge.call(this, edgeOrSource);
            var e = edgeOrSource;
            var uid = this.uid;
            this.storage.setItem(uid + ".edges", JSON.stringify(this.edges.map(function (d) { return d.id; })));
            this.storage.setItem(uid + ".edge." + e.id, JSON.stringify(e.persist()));
            e.on('setAttr', this.updateHandler);
            return this;
        }
        return _super.prototype.addEdge.call(this, edgeOrSource, type, t);
    };
    LocalStorageGraph.prototype.removeEdge = function (e) {
        if (!_super.prototype.removeEdge.call(this, e)) {
            return null;
        }
        //need to shift all
        var uid = this.uid;
        this.storage.setItem(uid + ".edges", JSON.stringify(this.edges.map(function (d) { return d.id; })));
        this.storage.removeItem(uid + ".edge." + e.id);
        e.off('setAttr', this.updateHandler);
        return this;
    };
    LocalStorageGraph.prototype.updateEdge = function (e) {
        _super.prototype.updateEdge.call(this, e);
        var uid = this.uid;
        this.storage.setItem(uid + ".edge." + e.id, JSON.stringify(e.persist()));
        return this;
    };
    LocalStorageGraph.prototype.clear = function () {
        var _this = this;
        var nnodes = this.nnodes, nedges = this.nedges;
        if (nnodes === 0 && nedges === 0) {
            return Promise.resolve(this);
        }
        this.nodes.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        this.edges.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        _super.prototype.clear.call(this);
        var uid = this.uid;
        JSON.parse(this.storage.getItem(uid + '.nodes')).forEach(function (id) {
            _this.storage.removeItem(uid + ".node." + id);
        });
        this.storage.removeItem(uid + ".nodes");
        JSON.parse(this.storage.getItem(uid + '.edges')).forEach(function (id) {
            _this.storage.removeItem(uid + ".edge." + id);
        });
        this.storage.removeItem(uid + ".edges");
        return Promise.resolve(this);
    };
    LocalStorageGraph.prototype.persist = function () {
        var r = {
            root: this.desc.id
        };
        r.nodes = this.nodes.map(function (s) { return s.persist(); });
        r.edges = this.edges.map(function (l) { return l.persist(); });
        return r;
    };
    return LocalStorageGraph;
}(__WEBPACK_IMPORTED_MODULE_1__GraphBase__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (LocalStorageGraph);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GraphBase__ = __webpack_require__(20);


var MemoryGraph = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MemoryGraph, _super);
    function MemoryGraph(desc, nodes, edges, factory) {
        if (nodes === void 0) { nodes = []; }
        if (edges === void 0) { edges = []; }
        if (factory === void 0) { factory = __WEBPACK_IMPORTED_MODULE_1__GraphBase__["a" /* defaultGraphFactory */]; }
        var _this = _super.call(this, desc, nodes, edges) || this;
        _this.factory = factory;
        return _this;
    }
    MemoryGraph.prototype.restore = function (persisted) {
        var _this = this;
        var lookup = new Map();
        persisted.nodes.forEach(function (p) {
            var n = _this.factory.makeNode(p);
            lookup.set(n.id, n);
            _this.addNode(n);
        });
        persisted.edges.forEach(function (p) {
            var n = _this.factory.makeEdge(p, lookup.get.bind(lookup));
            _this.addEdge(n);
        });
        return this;
    };
    return MemoryGraph;
}(__WEBPACK_IMPORTED_MODULE_1__GraphBase__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (MemoryGraph);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IIDType__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IDType__ = __webpack_require__(17);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */





//function indicesCompare(a: number[], b: number[]) {
//  //assert a.length = b.length
//  for(let i = 0; i < a.length; ++i) {
//    if (a[i] !== b[i]) {
//      return a[i] - b[i];
//    }
//  }
//  return 0;
//}
//
//function compressPairs(pairs: number[][]): Range[] {
//  return pairs.map((a) => rlist(...a));
//}
function overlaps(r, withRange, ndim) {
    if (withRange.ndim === 0) {
        return true; //catch all
    }
    var _loop_1 = function (i) {
        var ri = r.dim(i);
        var wi = withRange.dim(i);
        if (wi.isAll || ri.isAll) {
            return { value: true };
        }
        if (!ri.isUnbound && ri.asList().every(function (rii) { return !wi.contains(rii); })) {
            return { value: false };
        }
        //TODO
    };
    for (var i = 0; i < Math.min(r.ndim, ndim); ++i) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return false;
}
function removeCells(b, without, ndim) {
    if (without.length === 0) {
        return b;
    }
    var r = [];
    b.forEach(function (bi) {
        if (without.some(function (w) { return w.eq(bi); })) {
            //skip
        }
        else if (without.some(function (w) { return overlaps(bi, w, ndim); })) {
            //TODO
        }
        else {
            r.push(bi);
        }
    });
    return r;
}
/**
 * a product idtype is a product of multiple underlying ones, e.g. patient x gene.
 */
var ProductIDType = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ProductIDType, _super);
    function ProductIDType(elems, internal) {
        if (internal === void 0) { internal = false; }
        var _this = _super.call(this) || this;
        _this.elems = elems;
        _this.internal = internal;
        _this.sel = new Map();
        _this.isOn = false;
        _this.selectionListener = function (event, type, act, added, removed) {
            _this.fire(ProductIDType.EVENT_SELECT_DIM + "," + ProductIDType.EVENT_SELECT_PRODUCT, _this.elems.indexOf(event.currentTarget), type, act, added, removed);
            _this.fire(ProductIDType.EVENT_SELECT_DIM + "-" + type + "," + ProductIDType.EVENT_SELECT_PRODUCT + "-" + type, _this.elems.indexOf(event.currentTarget), act, added, removed);
        };
        return _this;
    }
    ProductIDType.prototype.on = function (events, listener) {
        if (!this.isOn) {
            this.enable();
            this.isOn = true;
        }
        return _super.prototype.on.call(this, events, listener);
    };
    Object.defineProperty(ProductIDType.prototype, "id", {
        get: function () {
            return this.elems.map(function (e) { return e.id; }).join('X');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductIDType.prototype, "name", {
        get: function () {
            return this.elems.map(function (e) { return e.name; }).join(' x ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductIDType.prototype, "names", {
        get: function () {
            return this.elems.map(function (e) { return e.names; }).join(' x ');
        },
        enumerable: true,
        configurable: true
    });
    ProductIDType.prototype.enable = function () {
        var _this = this;
        this.elems.forEach(function (elem) { return elem.on(__WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */].EVENT_SELECT, _this.selectionListener); });
    };
    ProductIDType.prototype.disable = function () {
        var _this = this;
        this.elems.forEach(function (elem) { return elem.off(__WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */].EVENT_SELECT, _this.selectionListener); });
    };
    ProductIDType.prototype.persist = function () {
        var s = {};
        this.sel.forEach(function (v, type) { return s[type] = v.map(function (r) { return r.toString(); }); });
        return {
            sel: s
        };
    };
    ProductIDType.prototype.restore = function (persisted) {
        var _this = this;
        Object.keys(persisted.sel).forEach(function (type) { return _this.sel.set(type, persisted.sel[type].map(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])); });
        return this;
    };
    ProductIDType.prototype.toString = function () {
        return this.name;
    };
    ProductIDType.prototype.selectionTypes = function () {
        return Array.from(this.sel.keys());
    };
    /**
     * return the current selections of the given type
     * @param type optional the selection type
     * @returns {Range[]}
     */
    ProductIDType.prototype.selections = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */]; }
        if (this.sel.has(type)) {
            return this.sel.get(type).slice();
        }
        this.sel.set(type, []);
        return [];
    };
    ProductIDType.prototype.productSelections = function (type /*, wildcardLookup: (idtype: IDType) => Promise<number> */) {
        var _this = this;
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */]; }
        var cells = this.selections(type);
        var usedCells = this.toPerDim(cells);
        this.elems.forEach(function (e, i) {
            var s = e.selections(type);
            //remove all already used rows / columns as part of the cells
            var wildcard = s.without(usedCells[i]);
            if (!wildcard.isNone) {
                //create wildcard cells, e.g., the remaining ones are row/column selections
                cells.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(_this.elems.map(function (e2) { return e === e2 ? wildcard.dim(0) : __WEBPACK_IMPORTED_MODULE_2__range__["Range1D"].all(); })));
            }
        });
        return cells;
        /* TODO no duplicates
         if (cells.every((c) => !c.isUnbound)) {
         //all cells are bound, just cells
         return Promise.resolve(cells);
         }
         //we need to resolve some wildcards
         return Promise.all(this.elems.map((elem, i) => {
         if (cells.some((c) => c.dim(i).isUnbound)) {
         return wildcardLookup(elem);
         } else {
         return Promise.resolve(0);
         }
         })).then((size: number[]) => {
         const fullCells : any = {};
         cells.forEach((cell) => {
         cell.product((indices: number[]) => {
         const id = indices.join('_');
         fullCells[id] = indices;
         });
         }, size);
         //fullCells contains all cells that we have to take care of
         const pairs = Object.keys(fullCells).map((k) => fullCells[k]).sort(indicesCompare);
         return compressPairs(pairs);
         });
         */
    };
    ProductIDType.prototype.select = function () {
        var a = Array.from(arguments);
        var type = (typeof a[0] === 'string') ? a.shift() : __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */], range = a[0].map(__WEBPACK_IMPORTED_MODULE_2__range__["parse"]), op = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__IIDType__["b" /* asSelectOperation */])(a[1]);
        return this.selectImpl(range, op, type);
    };
    ProductIDType.prototype.selectImpl = function (cells, op, type) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */]; }
        var rcells = cells.map(__WEBPACK_IMPORTED_MODULE_2__range__["parse"]);
        var b = this.selections(type);
        var newRange = [];
        switch (op) {
            case __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].SET:
                newRange = rcells;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].ADD:
                newRange = b.concat(rcells);
                break;
            case __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].REMOVE:
                newRange = removeCells(b, rcells, this.elems.length);
                break;
        }
        //if (b.eq(new_)) {
        //  return b;
        //}
        this.sel.set(type, newRange);
        //individual selection per dimension
        var perDimSelections = this.toPerDim(newRange);
        this.disable();
        this.elems.forEach(function (e, i) { return e.select(type, perDimSelections[i]); });
        this.enable();
        var added = op !== __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].REMOVE ? rcells : [];
        var removed = (op === __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].ADD ? [] : (op === __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].SET ? b : rcells));
        this.fire(__WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */].EVENT_SELECT, type, newRange, added, removed, b);
        this.fire(ProductIDType.EVENT_SELECT_PRODUCT, -1, type, newRange, added, removed, b);
        this.fire(__WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */].EVENT_SELECT + "-" + type, newRange, added, removed, b);
        this.fire(ProductIDType.EVENT_SELECT_PRODUCT + "-" + type, -1, newRange, added, removed, b);
        return b;
    };
    ProductIDType.prototype.toPerDim = function (sel) {
        return this.elems.map(function (elem, i) {
            if (sel.length === 0) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["none"])();
            }
            var dimselections = sel.map(function (r) { return r.dim(i); });
            var selection = dimselections.reduce(function (p, a) { return p ? p.union(a) : a; }, null);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(selection);
        });
    };
    ProductIDType.prototype.clear = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */]; }
        return this.selectImpl([], __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].SET, type);
    };
    ProductIDType.EVENT_SELECT_DIM = 'selectDim';
    ProductIDType.EVENT_SELECT_PRODUCT = 'selectProduct';
    return ProductIDType;
}(__WEBPACK_IMPORTED_MODULE_1__event__["EventHandler"]));
/* harmony default export */ __webpack_exports__["a"] = (ProductIDType);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(5);

/**
 * Created by Samuel Gratzl on 27.12.2016.
 */

var PropertyHandler = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](PropertyHandler, _super);
    function PropertyHandler(code) {
        var _this = _super.call(this) || this;
        _this.map = new Map();
        if (code) {
            _this.parse(code);
        }
        return _this;
    }
    /**
     * returns the contained keys of this property handler
     * @returns {string[]}
     */
    PropertyHandler.prototype.keys = function () {
        return Array.from(this.map.keys());
    };
    /**
     * iterate over each entry in the map
     * @param f
     */
    PropertyHandler.prototype.forEach = function (f) {
        this.map.forEach(function (v, k) { return f(k, v); });
    };
    /**
     * whether the given name is defined i.e., not null
     * @deprecated use has(name)
     * @param name
     * @returns {boolean}
     */
    PropertyHandler.prototype.is = function (name) {
        return this.has(name);
    };
    PropertyHandler.prototype.has = function (name) {
        return this.getProp(name, null) != null;
    };
    /**
     * returns the given value with optional default value
     * @param name
     * @param defaultValue
     * @returns {any}
     */
    PropertyHandler.prototype.getProp = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (this.map.has(name)) {
            var v = this.map.get(name);
            return v === null ? null : v.toString();
        }
        return defaultValue;
    };
    /**
     * returns the given integer value with optional default, the value itself might be encoded to safe space
     * @param name
     * @param defaultValue
     * @returns {number}
     */
    PropertyHandler.prototype.getInt = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = NaN; }
        var l = this.getProp(name, null);
        if (l === null) {
            return defaultValue;
        }
        return parseInt(l, 10);
    };
    /**
     * removes the property from the map
     * @param name
     * @returns {boolean}
     */
    PropertyHandler.prototype.removeProp = function (name) {
        if (this.map.has(name)) {
            this.fire(PropertyHandler.EVENT_ENTRY_CHANGED + PropertyHandler.MULTI_EVENT_SEPARATOR + PropertyHandler.EVENT_CHANGED, name, this.map.get(name), null);
            this.map.delete(name);
            return true;
        }
        return false;
    };
    PropertyHandler.prototype.toString = function () {
        var r = [];
        this.map.forEach(function (v, key) {
            r.push(encodeURIComponent(key) + '=' + encodeURIComponent(v));
        });
        return r.join('&');
    };
    PropertyHandler.prototype.parse = function (code) {
        var _this = this;
        if (code === void 0) { code = ''; }
        //if available use https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        var oldLength = this.map.size;
        this.map.clear();
        if (code.length <= 1) { //just the starting character ? or #
            if (oldLength !== 0) {
                this.fire(PropertyHandler.EVENT_CHANGED);
            }
            return;
        }
        //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/21152762#21152762
        code.substr(1).split('&').forEach(function (item) {
            var s = item.split('='), k = decodeURIComponent(s[0]), v = s[1] && decodeURIComponent(s[1]);
            if (_this.map.has(k)) {
                var old = _this.map.get(k);
                if (!Array.isArray(old)) {
                    _this.map.set(k, [old, v]);
                }
                else {
                    _this.map.get(k).push(v);
                }
            }
            else {
                _this.map.set(k, v);
            }
        });
        this.fire(PropertyHandler.EVENT_CHANGED);
    };
    PropertyHandler.EVENT_CHANGED = 'changed';
    PropertyHandler.EVENT_ENTRY_CHANGED = 'entryChanged';
    return PropertyHandler;
}(__WEBPACK_IMPORTED_MODULE_1__event__["EventHandler"]));
/* harmony default export */ __webpack_exports__["a"] = (PropertyHandler);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal__ = __webpack_require__(27);
/* harmony export (immutable) */ __webpack_exports__["a"] = addIconVisChooser;
/* harmony export (immutable) */ __webpack_exports__["b"] = addSelectVisChooser;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 27.08.2014.
 */

/**
 * computes the selectable vis techniques for a given set of multi form objects
 * @param forms
 * @return {*}
 */
function toAvailableVisses(forms) {
    if (forms.length === 0) {
        return [];
    }
    if (forms.length === 1) {
        return forms[0].visses;
    }
    //intersection of all
    return forms[0].visses.filter(function (vis) { return forms.every(function (f) { return f.visses.indexOf(vis) >= 0; }); });
}
function addIconVisChooser(toolbar) {
    var forms = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        forms[_i - 1] = arguments[_i];
    }
    var s = toolbar.ownerDocument.createElement('div');
    toolbar.insertBefore(s, toolbar.firstChild);
    var visses = toAvailableVisses(forms);
    visses.forEach(function (v) {
        var child = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal__["a" /* createNode */])(s, 'i');
        v.iconify(child);
        child.onclick = function () { return forms.forEach(function (f) { return f.switchTo(v); }); };
    });
}
function addSelectVisChooser(toolbar) {
    var forms = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        forms[_i - 1] = arguments[_i];
    }
    var s = toolbar.ownerDocument.createElement('select');
    toolbar.insertBefore(s, toolbar.firstChild);
    var visses = toAvailableVisses(forms);
    visses.forEach(function (v, i) {
        var child = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal__["a" /* createNode */])(s, 'option');
        child.setAttribute('value', String(i));
        child.textContent = v.name;
    });
    // use only the current selection of the first form
    if (forms[0]) {
        s.selectedIndex = visses.indexOf(forms[0].act);
    }
    s.onchange = function () { return forms.forEach(function (f) { return f.switchTo(visses[s.selectedIndex]); }); };
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graph_graph__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_promise__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return op; });
/* harmony export (immutable) */ __webpack_exports__["d"] = ref;

/**
 * Created by sam on 12.02.2015.
 */




/**
 * list of categories for actions and objects
 */
var cat = {
    data: 'data',
    selection: 'selection',
    visual: 'visual',
    layout: 'layout',
    logic: 'logic',
    custom: 'custom',
    annotation: 'annotation'
};
/**
 * list of operations
 */
var op = {
    create: 'create',
    update: 'update',
    remove: 'remove'
};
/**
 * creates an object reference to the given object
 * @param v
 * @param name
 * @param category
 * @param hash
 * @returns {{v: T, name: string, category: string}}
 */
function ref(v, name, category, hash) {
    if (category === void 0) { category = cat.data; }
    if (hash === void 0) { hash = name + '_' + category; }
    return {
        v: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_promise__["a" /* resolveImmediately */])(v),
        value: v,
        name: name,
        category: category,
        hash: hash
    };
}
/**
 * tries to persist an object value supporting datatypes and DOM elements having an id
 * @param v
 * @returns {any}
 */
function persistData(v) {
    if (v === undefined || v === null) {
        return null;
    }
    if (v instanceof Element) {
        var e = v, id = e.getAttribute('id');
        return { type: 'element', id: id };
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["isDataType"])(v)) {
        var e = v;
        return { type: 'dataset', id: e.desc.id, persist: e.persist() };
    }
    if (typeof v === 'string' || typeof v === 'number') {
        return { type: 'primitive', v: v };
    }
    return null;
}
function restoreData(v) {
    if (!v) {
        return null;
    }
    switch (v.type) {
        case 'element':
            if (v.id) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_promise__["a" /* resolveImmediately */])(document.getElementById(v.id));
            }
            return null;
        case 'dataset':
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data__["get"])(v.persist);
        case 'primitive':
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_promise__["a" /* resolveImmediately */])(v.v);
    }
    return null;
}
/**
 * a graph node of type object
 */
var ObjectNode = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ObjectNode, _super);
    function ObjectNode(_v, name, category, hash, description) {
        if (category === void 0) { category = cat.data; }
        if (hash === void 0) { hash = name + '_' + category; }
        if (description === void 0) { description = ''; }
        var _this = _super.call(this, 'object') || this;
        _this._v = _v;
        _this._persisted = null;
        if (_v != null) { //if the value is given, auto generate a promise for it
            _this._promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_promise__["a" /* resolveImmediately */])(_v);
        }
        _super.prototype.setAttr.call(_this, 'name', name);
        _super.prototype.setAttr.call(_this, 'category', category);
        _super.prototype.setAttr.call(_this, 'hash', hash);
        _super.prototype.setAttr.call(_this, 'description', description);
        return _this;
    }
    Object.defineProperty(ObjectNode.prototype, "value", {
        get: function () {
            this.checkPersisted();
            return this._v;
        },
        set: function (v) {
            this._v = v;
            this._promise = v == null ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_promise__["a" /* resolveImmediately */])(v);
            this._persisted = null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * checks whether the persisted value was already restored
     */
    ObjectNode.prototype.checkPersisted = function () {
        var _this = this;
        if (this._persisted != null) {
            this._promise = restoreData(this._persisted);
            if (this._promise) {
                this._promise.then(function (v) {
                    _this._v = v;
                });
            }
            this._persisted = null;
        }
    };
    Object.defineProperty(ObjectNode.prototype, "v", {
        get: function () {
            this.checkPersisted();
            return this._promise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "name", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'name', '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "category", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'category', '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "hash", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'hash', '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "description", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'description', '');
        },
        enumerable: true,
        configurable: true
    });
    ObjectNode.prototype.persist = function () {
        var r = _super.prototype.persist.call(this);
        if (!r.attrs) {
            r.attrs = {};
        }
        r.attrs.v = this._persisted ? this._persisted : persistData(this.value);
        return r;
    };
    ObjectNode.prototype.restore = function (p) {
        this._persisted = p.attrs.v;
        delete p.attrs.v;
        _super.prototype.restore.call(this, p);
        return this;
    };
    ObjectNode.restore = function (p) {
        var r = new ObjectNode(null, p.attrs.name, p.attrs.category, p.attrs.hash || p.attrs.name + '_' + p.attrs.category);
        return r.restore(p);
    };
    Object.defineProperty(ObjectNode.prototype, "createdBy", {
        get: function () {
            var r = this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__graph_graph__["d" /* isType */])('creates'))[0];
            return r ? r.source : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "removedBy", {
        get: function () {
            var r = this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__graph_graph__["d" /* isType */])('removes'))[0];
            return r ? r.source : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "requiredBy", {
        get: function () {
            return this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__graph_graph__["d" /* isType */])('requires')).map(function (e) { return e.source; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "partOf", {
        get: function () {
            return this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__graph_graph__["d" /* isType */])('consistsOf')).map(function (e) { return e.source; });
        },
        enumerable: true,
        configurable: true
    });
    ObjectNode.prototype.toString = function () {
        return this.name;
    };
    return ObjectNode;
}(__WEBPACK_IMPORTED_MODULE_3__graph_graph__["b" /* GraphNode */]));
/* harmony default export */ __webpack_exports__["a"] = (ObjectNode);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Range1D__ = __webpack_require__(18);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */


function toBase(groups) {
    if (groups.length === 1) {
        return groups[0];
    }
    var r = groups[0].iter().asList();
    groups.slice(1).forEach(function (g) {
        g.iter().forEach(function (i) {
            if (r.indexOf(i) < 0) {
                r.push(i);
            }
        });
    });
    return __WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */].from(r);
}
var CompositeRange1D = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](CompositeRange1D, _super);
    function CompositeRange1D(name, groups, base) {
        var _this = _super.call(this, base ? base : toBase(groups)) || this;
        _this.name = name;
        _this.groups = groups;
        return _this;
    }
    CompositeRange1D.prototype.preMultiply = function (sub, size) {
        var r = this.groups.length > 1 ? _super.prototype.preMultiply.call(this, sub, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.preMultiply(sub, size); }), r);
    };
    CompositeRange1D.prototype.union = function (other, size) {
        var r = this.groups.length > 1 ? _super.prototype.union.call(this, other, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.union(other, size); }), r);
    };
    CompositeRange1D.prototype.intersect = function (other, size) {
        var r = this.groups.length > 1 ? _super.prototype.intersect.call(this, other, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.intersect(other, size); }), r);
    };
    CompositeRange1D.prototype.without = function (without, size) {
        var r = this.groups.length > 1 ? _super.prototype.without.call(this, without, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.without(without, size); }), r);
    };
    CompositeRange1D.prototype.clone = function () {
        var r = this.groups.length > 1 ? _super.prototype.clone.call(this) : undefined;
        return new CompositeRange1D(name, this.groups.map(function (g) { return g.clone(); }), r);
    };
    CompositeRange1D.prototype.sort = function (cmp) {
        var r = this.groups.length > 1 ? _super.prototype.sort.call(this, cmp) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.sort(cmp); }), r);
    };
    CompositeRange1D.prototype.toSet = function (size) {
        var r = this.groups.length > 1 ? _super.prototype.toSet.call(this, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.toSet(size); }), r);
    };
    CompositeRange1D.prototype.toString = function () {
        return '"' + this.name + '"{' + this.groups.join(',') + '}';
    };
    CompositeRange1D.prototype.fromLikeComposite = function (groups) {
        return new CompositeRange1D(this.name, groups);
    };
    return CompositeRange1D;
}(__WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (CompositeRange1D);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Range1D__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["b"] = all;
/* harmony export (immutable) */ __webpack_exports__["c"] = none;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */

/**
 * multi dimensional version of a RangeDim
 */
var Range = /** @class */ (function () {
    function Range(dims) {
        if (dims === void 0) { dims = []; }
        this.dims = dims;
    }
    Object.defineProperty(Range.prototype, "isAll", {
        /**
         * checks if this range is all
         * @returns {boolean}
         */
        get: function () {
            return this.dims.every(function (dim) { return dim.isAll; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "isNone", {
        get: function () {
            return this.dims.every(function (dim) { return dim.isNone; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "isUnbound", {
        /**
         * checks whether there are any wildcards
         */
        get: function () {
            return this.dims.some(function (dim) { return dim.isUnbound; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "first", {
        get: function () {
            return this.dim(0).first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "last", {
        get: function () {
            return this.dim(0).last;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "ndim", {
        /**
         * number of defined dimensions
         * @returns {number}
         */
        get: function () {
            return this.dims.length;
        },
        enumerable: true,
        configurable: true
    });
    Range.prototype.eq = function (other) {
        if (this === other || (this.isAll && other.isAll) || (this.isNone && other.isNone)) {
            return true;
        }
        //TODO more performant comparison
        return this.toString() === other.toString();
    };
    /**
     * combines this range with another and returns a new one
     * this = (1,3,5,7), other = (1,2) -> (1,2)(1,3,5,7) = (3,5)
     * @param other
     * @returns {*}
     */
    Range.prototype.preMultiply = function (other, size) {
        if (this.isAll) {
            return other.clone();
        }
        if (other.isAll) {
            return this.clone();
        }
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.preMultiply(other.dim(i), size ? size[i] : undefined);
        });
        return r;
    };
    Range.prototype.union = function (other, size) {
        if (this.isAll || other.isNone) {
            return this.clone();
        }
        if (other.isAll || this.isNone) {
            return other.clone();
        }
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.union(other.dim(i), size ? size[i] : undefined);
        });
        return r;
    };
    /**
     * logical intersection between two ranges
     * @param other
     * @returns {RangeDim}
     */
    Range.prototype.intersect = function (other, size) {
        if (this.isNone || other.isNone) {
            return none();
        }
        if (this.isAll) {
            return other.clone();
        }
        if (other.isAll) {
            return this.clone();
        }
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.intersect(other.dim(i), size ? size[i] : undefined);
        });
        return r;
    };
    Range.prototype.without = function (without, size) {
        if (this.isNone || without.isNone) {
            return this.clone();
        }
        if (without.isAll) {
            return none();
        }
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.without(without.dim(i), size ? size[i] : undefined);
        });
        return r;
    };
    /**
     * clones this range
     * @returns {*}
     */
    Range.prototype.clone = function () {
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.clone();
        });
        return r;
    };
    /**
     * create a new range and reverse the dimensions
     */
    Range.prototype.swap = function () {
        return new Range(this.dims.map(function (d) { return d.clone(); }).reverse());
    };
    /**
     * filter the given multi dimensional data according to the current range
     * @param data
     * @param size the underlying size for negative indices
     * @returns {*}
     */
    Range.prototype.filter = function (data, size) {
        if (this.isAll) {
            return data;
        }
        var ndim = this.ndim;
        var that = this;
        //recursive variant for just filtering the needed rows
        var filterDim = function (i) {
            if (i >= ndim) { //out of range no filtering anymore
                return function (d) { return d; };
            }
            var d = that.dim(i);
            var next = filterDim(i + 1); //compute next transform
            var s = size ? size[i] : undefined;
            return function (elem) {
                return Array.isArray(elem) ? d.filter(elem, s, next) : elem;
            };
        };
        var f = filterDim(0);
        return f(data);
    };
    /**
     * return a specific dimension
     * @param dimension
     * @returns {r}
     */
    Range.prototype.dim = function (dimension) {
        var r = this.dims[dimension];
        if (r) {
            return r;
        }
        //not yet existing create one
        this.dims[dimension] = __WEBPACK_IMPORTED_MODULE_0__Range1D__["a" /* default */].all();
        return this.dims[dimension];
    };
    /**
     * transforms the given multi dimensional indices to their parent notation
     * @param indices
     * @param size the underlying size for negative indices
     */
    Range.prototype.invert = function (indices, size) {
        var _this = this;
        if (this.isAll) {
            return indices;
        }
        return indices.map(function (index, i) {
            return _this.dim(i).invert(index, size ? size[i] : undefined);
        });
    };
    Range.prototype.indexRangeOf = function (r, size) {
        if (r.isNone || this.isNone) {
            return none();
        }
        if (this.isNone || r.isAll) {
            return this.clone();
        }
        return new Range(this.dims.map(function (d, i) { return d.indexRangeOf(r.dim(i), size ? size[i] : undefined); }));
    };
    Range.prototype.indexOf = function () {
        var _this = this;
        if (arguments[0] instanceof Range) {
            return this.indexRangeOf(arguments[0], arguments[1]);
        }
        var arr;
        if (arguments.length === 1) {
            if (typeof arguments[0] === 'number') {
                return this.dim(0).indexOf(arguments[0]);
            }
            arr = arguments[0];
        }
        else {
            arr = Array.from(arguments);
        }
        if (arr.length === 0) {
            return [];
        }
        return arr.map(function (index, i) { return _this.dim(i).indexOf(index); });
    };
    /**
     * returns the range size
     * @param size the underlying size for negative indices
     * @returns {*}
     */
    Range.prototype.size = function (size) {
        if (this.isAll) {
            return size;
        }
        return this.dims.map(function (r, i) {
            return r.size(size ? size[i] : undefined);
        });
    };
    Range.prototype.split = function () {
        return this.dims.map(function (dim) {
            return new Range([dim]);
        });
    };
    /**
     * iterates over the product of this range, e.g. (0,1,2),(3) => (0,3),(1,3),(2,3)
     * @param callback
     * @param size
     */
    Range.prototype.product = function (callback, size) {
        var _this = this;
        var ndim = this.ndim;
        var iter = function (ids) {
            var act = ids.length;
            if (act < ndim) {
                var dim = _this.dims[act];
                dim.iter(size ? size[act] : null).forEach(function (id) {
                    ids.push(id);
                    iter(ids);
                    ids.pop();
                });
            }
            else {
                callback(ids.slice());
            }
        };
        iter([]);
    };
    /**
     * encoded the given range in a string
     */
    Range.prototype.toString = function () {
        return this.dims.map(function (d) {
            return d.toString();
        }).join(',');
    };
    return Range;
}());
/* harmony default export */ __webpack_exports__["a"] = (Range);
/**
 * creates a new range including everything
 * @returns {Range}
 */
function all() {
    return new Range();
}
function none() {
    //ensure two dimensions
    return new Range([__WEBPACK_IMPORTED_MODULE_0__Range1D__["a" /* default */].none(), __WEBPACK_IMPORTED_MODULE_0__Range1D__["a" /* default */].none()]);
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Range1D__ = __webpack_require__(18);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */


var Range1DGroup = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Range1DGroup, _super);
    function Range1DGroup(name, color, base) {
        var _this = _super.call(this, base) || this;
        _this.name = name;
        _this.color = color;
        return _this;
    }
    Range1DGroup.prototype.preMultiply = function (sub, size) {
        var r = _super.prototype.preMultiply.call(this, sub, size);
        return new Range1DGroup(this.name, this.color, r);
    };
    Range1DGroup.prototype.union = function (other, size) {
        var r = _super.prototype.union.call(this, other, size);
        return new Range1DGroup(this.name, this.color, r);
    };
    Range1DGroup.prototype.intersect = function (other, size) {
        var r = _super.prototype.intersect.call(this, other, size);
        return new Range1DGroup(this.name, this.color, r);
    };
    Range1DGroup.prototype.without = function (without, size) {
        var r = _super.prototype.without.call(this, without, size);
        return new Range1DGroup(this.name, this.color, r);
    };
    Range1DGroup.prototype.clone = function () {
        return new Range1DGroup(this.name, this.color, _super.prototype.clone.call(this));
    };
    Range1DGroup.prototype.toString = function () {
        return '"' + this.name + '""' + this.color + '"' + _super.prototype.toString.call(this);
    };
    Range1DGroup.prototype.toSet = function (size) {
        return new Range1DGroup(this.name, this.color, _super.prototype.toSet.call(this, size));
    };
    Range1DGroup.prototype.fromLike = function (indices) {
        return new Range1DGroup(this.name, this.color, _super.prototype.fromLike.call(this, indices));
    };
    return Range1DGroup;
}(__WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Range1DGroup);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _typeof;
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IAtom__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AAtom__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__range__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atom", function() { return Atom; });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["asAtom"] = asAtom;
/**
 * Created by Samuel Gratzl on 14.02.2017.
 */







var Atom = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Atom, _super);
    function Atom(desc, loaded) {
        var _this = _super.call(this, desc) || this;
        _this.loaded = loaded;
        return _this;
    }
    Atom.prototype.id = function () {
        return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__range__["list"])(this.loaded.id));
    };
    Atom.prototype.name = function () {
        return Promise.resolve(this.loaded.name);
    };
    Atom.prototype.data = function () {
        return Promise.resolve(this.loaded.value);
    };
    return Atom;
}(__WEBPACK_IMPORTED_MODULE_5__AAtom__["a" /* default */]));

var noValue = {
    id: -1,
    name: '',
    value: null
};
function create(desc) {
    if (typeof (desc.data) !== undefined) {
        return new Atom(desc, desc.data);
    }
    return new Atom(desc, noValue);
}
function asAtom(name, value, options) {
    if (options === void 0) { options = {}; }
    var desc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1____["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__IAtom__["a" /* createDefaultAtomDesc */])(), {
        value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["guessValueTypeDesc"])([value])
    }, options);
    var rowAssigner = options.rowassigner || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__idtype__["createLocalAssigner"])();
    var atom = {
        name: name,
        value: value,
        id: rowAssigner([name]).first
    };
    return new Atom(desc, atom);
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2D__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AShape__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Circle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Rect__ = __webpack_require__(16);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */





var Ellipse = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Ellipse, _super);
    function Ellipse(x, y, radiusX, radiusY) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (radiusX === void 0) { radiusX = 0; }
        if (radiusY === void 0) { radiusY = 0; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.radiusX = radiusX;
        _this.radiusY = radiusY;
        return _this;
    }
    Object.defineProperty(Ellipse.prototype, "xy", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Ellipse.prototype.toString = function () {
        return "Ellipse(x=" + this.x + ",y=" + this.y + ",radiusX=" + this.radiusX + ",radiusY=" + this.radiusY + ")";
    };
    Ellipse.prototype.shiftImpl = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Ellipse.prototype.aabb = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__Rect__["a" /* default */](this.x - this.radiusX, this.y - this.radiusY, this.radiusX * 2, this.radiusY * 2);
    };
    Ellipse.prototype.bs = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__Circle__["a" /* default */](this.x, this.y, Math.max(this.radiusX, this.radiusY));
    };
    Ellipse.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return new Ellipse(this.x * scale[0], this.y * scale[1], this.radiusX * scale[0], this.radiusY * scale[1]);
    };
    Ellipse.prototype.asIntersectionParams = function () {
        return {
            name: 'Ellipse',
            params: [this.xy, this.radiusX, this.radiusY]
        };
    };
    return Ellipse;
}(__WEBPACK_IMPORTED_MODULE_2__AShape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Ellipse);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2D__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AShape__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Circle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Rect__ = __webpack_require__(16);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */





var Line = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Line, _super);
    function Line(x1, y1, x2, y2) {
        if (x1 === void 0) { x1 = 0; }
        if (y1 === void 0) { y1 = 0; }
        if (x2 === void 0) { x2 = 0; }
        if (y2 === void 0) { y2 = 0; }
        var _this = _super.call(this) || this;
        _this.x1 = x1;
        _this.y1 = y1;
        _this.x2 = x2;
        _this.y2 = y2;
        return _this;
    }
    Object.defineProperty(Line.prototype, "xy", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](this.x1, this.y1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "x1y1", {
        get: function () {
            return this.xy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "x2y2", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](this.x2, this.y2);
        },
        enumerable: true,
        configurable: true
    });
    Line.prototype.toString = function () {
        return "Line(x1=" + this.x1 + ",y1=" + this.y1 + ",x2=" + this.x2 + ",y2=" + this.y2 + ")";
    };
    Line.prototype.shiftImpl = function (x, y) {
        this.x1 += x;
        this.y1 += y;
        this.x2 += x;
        this.y2 += y;
    };
    Line.prototype.aabb = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__Rect__["a" /* default */](Math.min(this.x1, this.x2), Math.min(this.y1, this.y2), Math.abs(this.x1 - this.x2), Math.abs(this.y1 - this.y2));
    };
    Line.prototype.bs = function () {
        var x = 0.5 * (this.x1 + this.x2);
        var y = 0.5 * (this.y1 + this.y2);
        var dx = (this.x1 - this.x2);
        var dy = (this.y1 - this.y2);
        return new __WEBPACK_IMPORTED_MODULE_3__Circle__["a" /* default */](x, y, Math.sqrt(dx * dx + dy * dy) / 2);
    };
    Line.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return new Line(this.x1 * scale[0], this.y1 * scale[1], this.x2 * scale[0], this.y2 * scale[1]);
    };
    Line.prototype.asIntersectionParams = function () {
        return {
            name: 'Line',
            params: [this.xy, this.x2y2]
        };
    };
    return Line;
}(__WEBPACK_IMPORTED_MODULE_2__AShape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Line);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2D__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AShape__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Circle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Rect__ = __webpack_require__(16);

/**
 * Created by Samuel Gratzl on 27.12.2016.
 */




var Polygon = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Polygon, _super);
    function Polygon(points) {
        if (points === void 0) { points = []; }
        var _this = _super.call(this) || this;
        _this.points = points;
        return _this;
    }
    Polygon.prototype.push = function () {
        if (arguments.length === 2 && typeof arguments[0] === 'number') {
            this.points.push(new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](arguments[0], arguments[1]));
        }
        else {
            (_a = this.points).push.apply(_a, Array.from(arguments));
        }
        var _a;
    };
    Polygon.prototype.toString = function () {
        return "Polygon(" + this.points.join(',') + ")";
    };
    Polygon.prototype.shiftImpl = function (x, y) {
        this.points.forEach(function (p) {
            p.x += x;
            p.y += y;
        });
    };
    Object.defineProperty(Polygon.prototype, "length", {
        get: function () {
            return this.points.length;
        },
        enumerable: true,
        configurable: true
    });
    Polygon.prototype.aabb = function () {
        var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
        this.points.forEach(function (p) {
            if (p.x < minX) {
                minX = p.x;
            }
            if (p.y < minY) {
                minY = p.y;
            }
            if (p.x > maxX) {
                maxX = p.x;
            }
            if (p.y > maxY) {
                maxY = p.y;
            }
        });
        return new __WEBPACK_IMPORTED_MODULE_4__Rect__["a" /* default */](minX, minY, maxX - minX, maxY - minY);
    };
    Polygon.prototype.bs = function () {
        var centroid = this.centroid;
        var radius2 = 0;
        this.points.forEach(function (p) {
            var dx = p.x - centroid.x;
            var dy = p.y - centroid.x;
            var d = dx * dx + dy * dy;
            if (d > radius2) {
                radius2 = d;
            }
        });
        return new __WEBPACK_IMPORTED_MODULE_3__Circle__["a" /* default */](centroid.x, centroid.y, Math.sqrt(radius2));
    };
    Polygon.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return new Polygon(this.points.map(function (p) { return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](p.x * scale[0], p.y * scale[1]); }));
    };
    Polygon.prototype.pointInPolygon = function (point) {
        var length = this.points.length;
        var counter = 0;
        var p1 = this.points[0];
        for (var i = 1; i <= length; i++) {
            var p2 = this.points[i % length];
            if (point.y > Math.min(p1.y, p2.y) && point.y <= Math.max(p1.y, p2.y) && point.x <= Math.max(p1.x, p2.x) && p1.y !== p2.y) {
                var xInter = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
                if (p1.x === p2.x || point.x <= xInter) {
                    counter++;
                }
            }
            p1 = p2;
        }
        return (counter % 2 === 1);
    };
    Object.defineProperty(Polygon.prototype, "area", {
        get: function () {
            var area = 0;
            var length = this.points.length;
            for (var i = 0; i < length; i++) {
                var h1 = this.points[i];
                var h2 = this.points[(i + 1) % length];
                area += (h1.x * h2.y - h2.x * h1.y);
            }
            return area / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "centroid", {
        get: function () {
            var length = this.points.length;
            var area6x = 6 * this.area;
            var xSum = 0;
            var ySum = 0;
            for (var i = 0; i < length; i++) {
                var p1 = this.points[i];
                var p2 = this.points[(i + 1) % length];
                var cross = (p1.x * p2.y - p2.x * p1.y);
                xSum += (p1.x + p2.x) * cross;
                ySum += (p1.y + p2.y) * cross;
            }
            return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](xSum / area6x, ySum / area6x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "isClockwise", {
        get: function () {
            return this.area < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "isCounterClockwise", {
        get: function () {
            return this.area > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "isConcave", {
        get: function () {
            var positive = 0;
            var negative = 0;
            var length = this.points.length;
            for (var i = 0; i < length; i++) {
                var p0 = this.points[i];
                var p1 = this.points[(i + 1) % length];
                var p2 = this.points[(i + 2) % length];
                var v0 = __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"].fromPoints(p0, p1);
                var v1 = __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"].fromPoints(p1, p2);
                var cross = v0.cross(v1);
                if (cross < 0) {
                    negative++;
                }
                else {
                    positive++;
                }
            }
            return (negative !== 0 && positive !== 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "isConvex", {
        get: function () {
            return !this.isConcave;
        },
        enumerable: true,
        configurable: true
    });
    Polygon.prototype.asIntersectionParams = function () {
        return {
            name: 'Polygon',
            params: [this.points.slice()]
        };
    };
    return Polygon;
}(__WEBPACK_IMPORTED_MODULE_2__AShape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Polygon);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graph__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GraphBase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RemoteStorageGraph__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MemoryGraph__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__LocalStorageGraph__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__internal_promise__ = __webpack_require__(8);
/* harmony export (immutable) */ __webpack_exports__["create"] = create;

/**
 * Created by sam on 12.02.2015.
 */









var GraphProxy = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GraphProxy, _super);
    function GraphProxy(desc) {
        var _this = _super.call(this, desc) || this;
        _this.cache = null;
        _this.loaded = null;
        return _this;
    }
    Object.defineProperty(GraphProxy.prototype, "nnodes", {
        get: function () {
            if (this.loaded) {
                return this.loaded.nnodes;
            }
            var size = this.desc.size;
            return size[__WEBPACK_IMPORTED_MODULE_4__graph__["e" /* DIM_NODES */]] || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphProxy.prototype, "nedges", {
        get: function () {
            if (this.loaded) {
                return this.loaded.nedges;
            }
            var size = this.desc.size;
            return size[__WEBPACK_IMPORTED_MODULE_4__graph__["f" /* DIM_EDGES */]] || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphProxy.prototype, "dim", {
        get: function () {
            return [this.nnodes, this.nedges];
        },
        enumerable: true,
        configurable: true
    });
    GraphProxy.prototype.impl = function (factory) {
        var _this = this;
        if (factory === void 0) { factory = __WEBPACK_IMPORTED_MODULE_5__GraphBase__["a" /* defaultGraphFactory */]; }
        if (this.cache) {
            return this.cache;
        }
        var type = this.desc.storage || 'remote';
        if (type === 'memory') {
            //memory only
            this.loaded = new __WEBPACK_IMPORTED_MODULE_7__MemoryGraph__["a" /* default */](this.desc, [], [], factory);
            this.cache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__internal_promise__["a" /* resolveImmediately */])(this.loaded);
        }
        else if (type === 'local') {
            this.loaded = __WEBPACK_IMPORTED_MODULE_8__LocalStorageGraph__["a" /* default */].load(this.desc, factory, localStorage);
            this.cache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__internal_promise__["a" /* resolveImmediately */])(this.loaded);
        }
        else if (type === 'session') {
            this.loaded = __WEBPACK_IMPORTED_MODULE_8__LocalStorageGraph__["a" /* default */].load(this.desc, factory, sessionStorage);
            this.cache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__internal_promise__["a" /* resolveImmediately */])(this.loaded);
        }
        else if (type === 'given' && this.desc.graph instanceof __WEBPACK_IMPORTED_MODULE_4__graph__["c" /* AGraph */]) {
            this.loaded = this.desc.graph;
            this.cache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__internal_promise__["a" /* resolveImmediately */])(this.loaded);
        }
        else {
            this.cache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__internal_promise__["a" /* resolveImmediately */])(__WEBPACK_IMPORTED_MODULE_6__RemoteStorageGraph__["a" /* default */].load(this.desc, factory)).then(function (graph) { return _this.loaded = graph; });
        }
        return this.cache;
    };
    GraphProxy.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["all"])(); }
        if (this.cache) {
            return Promise.resolve(this.cache.then(function (i) { return i.ids(range); })); // TODO avoid <any> type cast
        }
        return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])());
    };
    Object.defineProperty(GraphProxy.prototype, "idtypes", {
        get: function () {
            return [__WEBPACK_IMPORTED_MODULE_4__graph__["g" /* IDTYPE_NODES */], __WEBPACK_IMPORTED_MODULE_4__graph__["h" /* IDTYPE_EDGES */]].map(__WEBPACK_IMPORTED_MODULE_1__idtype__["resolve"]);
        },
        enumerable: true,
        configurable: true
    });
    return GraphProxy;
}(__WEBPACK_IMPORTED_MODULE_2__datatype__["ADataType"]));
/* harmony default export */ __webpack_exports__["default"] = (GraphProxy);
/**
 * module entry point for creating a datatype
 * @param desc
 * @returns {IMatrix}
 */
function create(desc) {
    return new GraphProxy(desc);
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GraphBase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graph__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_promise__ = __webpack_require__(8);

/**
 * Created by Samuel Gratzl on 22.10.2014.
 */




var RemoteStoreGraph = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RemoteStoreGraph, _super);
    function RemoteStoreGraph(desc) {
        var _this = _super.call(this, desc) || this;
        _this.updateHandler = function (event) {
            var s = event.target;
            if (s instanceof __WEBPACK_IMPORTED_MODULE_3__graph__["b" /* GraphNode */]) {
                _this.updateNode(s);
            }
            if (s instanceof __WEBPACK_IMPORTED_MODULE_3__graph__["a" /* GraphEdge */]) {
                _this.updateEdge(s);
            }
        };
        _this.waitForSynced = 0;
        _this.queue = [];
        _this.flushTimeout = -1;
        _this.batchSize = desc.attrs.batchSize || RemoteStoreGraph.DEFAULT_BATCH_SIZE;
        return _this;
    }
    RemoteStoreGraph.prototype.migrate = function () {
        var _this = this;
        this.nodes.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        this.edges.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        //TODO delete old
        return _super.prototype.migrate.call(this);
    };
    RemoteStoreGraph.load = function (desc, factory) {
        var r = new RemoteStoreGraph(desc);
        return r.load(factory);
    };
    RemoteStoreGraph.prototype.load = function (factory) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var r;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fire('sync_load_start,sync_start', ++this.waitForSynced);
                        return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])("/dataset/graph/" + this.desc.id + "/data")];
                    case 1:
                        r = _a.sent();
                        this.loadImpl(r.nodes, r.edges, factory);
                        this.fire('sync_load,sync', --this.waitForSynced);
                        return [2 /*return*/, this];
                }
            });
        });
    };
    RemoteStoreGraph.prototype.loadImpl = function (nodes, edges, factory) {
        var _this = this;
        var lookup = new Map(), lookupFun = lookup.get.bind(lookup);
        nodes.forEach(function (n) {
            var nn = factory.makeNode(n);
            lookup.set(nn.id, nn);
            nn.on('setAttr', _this.updateHandler);
            _super.prototype.addNode.call(_this, nn);
        });
        edges.forEach(function (n) {
            var nn = factory.makeEdge(n, lookupFun);
            nn.on('setAttr', _this.updateHandler);
            _super.prototype.addEdge.call(_this, nn);
        });
        this.fire('loaded');
    };
    Object.defineProperty(RemoteStoreGraph.prototype, "activeSyncOperations", {
        get: function () {
            return this.waitForSynced;
        },
        enumerable: true,
        configurable: true
    });
    RemoteStoreGraph.prototype.send = function (type, op, elem) {
        if (this.batchSize <= 1) {
            return this.sendNow(type, op, elem);
        }
        else {
            var item = { type: type, op: op, id: elem.id, desc: elem.persist() };
            return this.enqueue(item);
        }
    };
    RemoteStoreGraph.prototype.enqueue = function (item) {
        var _this = this;
        if (this.flushTimeout >= 0) {
            clearTimeout(this.flushTimeout);
            this.flushTimeout = -1;
        }
        this.queue.push(item);
        if (this.queue.length >= this.batchSize * 2) { //really full
            return this.sendQueued();
        }
        var wait = this.queue.length >= this.batchSize ? RemoteStoreGraph.DEFAULT_WAIT_TIME_BEFORE_FULL_FLUSH : RemoteStoreGraph.DEFAULT_WAIT_TIME_BEFORE_EARLY_FLUSH;
        //send it at most timeout ms if there is no update in between
        this.flushTimeout = setTimeout(function () {
            _this.sendQueued();
        }, wait);
    };
    RemoteStoreGraph.prototype.sendNow = function (type, op, elem) {
        var _this = this;
        this.fire("sync_start_" + type + ",sync_start", ++this.waitForSynced, op + "_{type}", elem);
        var data = {
            desc: JSON.stringify(elem.persist())
        };
        var create = function () {
            switch (op) {
                case 'add':
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])("/dataset/graph/" + _this.desc.id + "/" + type, data, 'POST');
                case 'update':
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])("/dataset/graph/" + _this.desc.id + "/" + type + "/" + elem.id, data, 'PUT');
                case 'remove':
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])("/dataset/graph/" + _this.desc.id + "/" + type + "/" + elem.id, {}, 'DELETE');
            }
        };
        return create().then(function () {
            _this.fire("sync_" + type + ",sync", --_this.waitForSynced, elem);
        });
    };
    RemoteStoreGraph.prototype.sendQueued = function () {
        var _this = this;
        if (this.queue.length === 0) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_promise__["a" /* resolveImmediately */])(null);
        }
        var param = JSON.stringify({ operation: 'batch', items: this.queue.slice() });
        // clear
        this.queue.splice(0, this.queue.length);
        this.fire("sync_start", ++this.waitForSynced, 'batch');
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])("/dataset/" + this.desc.id, { desc: param }, 'POST').then(function () {
            _this.fire("sync", --_this.waitForSynced, 'batch');
            return _this;
        });
    };
    RemoteStoreGraph.prototype.flush = function () {
        if (this.batchSize <= 1 || this.queue.length === 0) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_promise__["a" /* resolveImmediately */])('nothing queued');
        }
        return this.sendQueued();
    };
    RemoteStoreGraph.prototype.addAll = function (nodes, edges) {
        var _this = this;
        //add all and and to queue
        nodes.forEach(function (n) {
            _super.prototype.addNode.call(_this, n);
            n.on('setAttr', _this.updateHandler);
            _this.queue.push({ type: 'node', op: 'add', id: n.id, desc: n.persist() });
        });
        edges.forEach(function (e) {
            _super.prototype.addEdge.call(_this, e);
            e.on('setAttr', _this.updateHandler);
            _this.queue.push({ type: 'edge', op: 'add', id: e.id, desc: e.persist() });
        });
        return this.sendQueued();
    };
    RemoteStoreGraph.prototype.addNode = function (n) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.addNode.call(this, n);
                        n.on('setAttr', this.updateHandler);
                        return [4 /*yield*/, this.send('node', 'add', n)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    RemoteStoreGraph.prototype.updateNode = function (n) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.updateNode.call(this, n);
                        return [4 /*yield*/, this.send('node', 'update', n)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    RemoteStoreGraph.prototype.removeNode = function (n) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_super.prototype.removeNode.call(this, n)) {
                            return [2 /*return*/, Promise.reject('invalid node')];
                        }
                        n.off('setAttr', this.updateHandler);
                        return [4 /*yield*/, this.send('node', 'remove', n)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    RemoteStoreGraph.prototype.addEdge = function (edgeOrSource, type, t) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var e;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(edgeOrSource instanceof __WEBPACK_IMPORTED_MODULE_3__graph__["a" /* GraphEdge */])) return [3 /*break*/, 2];
                        _super.prototype.addEdge.call(this, edgeOrSource);
                        e = edgeOrSource;
                        e.on('setAttr', this.updateHandler);
                        return [4 /*yield*/, this.send('edge', 'add', e)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                    case 2: return [2 /*return*/, _super.prototype.addEdge.call(this, edgeOrSource, type, t)];
                }
            });
        });
    };
    RemoteStoreGraph.prototype.removeEdge = function (e) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_super.prototype.removeEdge.call(this, e)) {
                            return [2 /*return*/, Promise.reject('invalid edge')];
                        }
                        e.off('setAttr', this.updateHandler);
                        return [4 /*yield*/, this.send('edge', 'remove', e)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    RemoteStoreGraph.prototype.updateEdge = function (e) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.updateEdge.call(this, e);
                        return [4 /*yield*/, this.send('edge', 'update', e)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    RemoteStoreGraph.prototype.clear = function () {
        var _this = this;
        if (this.nnodes === 0 && this.nedges === 0) {
            return Promise.resolve(this);
        }
        this.nodes.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        this.edges.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        _super.prototype.clear.call(this);
        this.flush().then(function () {
            _this.fire('sync_start', ++_this.waitForSynced, 'clear');
            //clear all nodes
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])("/dataset/graph/" + _this.desc.id + "/node", {}, 'DELETE');
        }).then(function () {
            _this.fire('sync');
            return _this;
        });
    };
    RemoteStoreGraph.DEFAULT_BATCH_SIZE = 10;
    RemoteStoreGraph.DEFAULT_WAIT_TIME_BEFORE_EARLY_FLUSH = 1000; //ms
    RemoteStoreGraph.DEFAULT_WAIT_TIME_BEFORE_FULL_FLUSH = 100; //ms
    return RemoteStoreGraph;
}(__WEBPACK_IMPORTED_MODULE_2__GraphBase__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (RemoteStoreGraph);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeContainer", function() { return __WEBPACK_IMPORTED_MODULE_0__graph__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphNode", function() { return __WEBPACK_IMPORTED_MODULE_0__graph__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphEdge", function() { return __WEBPACK_IMPORTED_MODULE_0__graph__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return __WEBPACK_IMPORTED_MODULE_0__graph__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AGraph", function() { return __WEBPACK_IMPORTED_MODULE_0__graph__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GraphProxy__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphProxy", function() { return __WEBPACK_IMPORTED_MODULE_1__GraphProxy__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_1__GraphProxy__["create"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GraphBase__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphBase", function() { return __WEBPACK_IMPORTED_MODULE_2__GraphBase__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryGraph__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryGraph", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryGraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RemoteStorageGraph__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteStoreGraph", function() { return __WEBPACK_IMPORTED_MODULE_4__RemoteStorageGraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LocalStorageGraph__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageGraph", function() { return __WEBPACK_IMPORTED_MODULE_5__LocalStorageGraph__["a"]; });
/**
 * Created by sam on 12.02.2015.
 */
/**
 * Created by Samuel Gratzl on 22.10.2014.
 */








/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IIDType__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ASelectAble__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProductIDType__ = __webpack_require__(31);
/* unused harmony export AProductSelectAble */
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */





var AProductSelectAble = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AProductSelectAble, _super);
    function AProductSelectAble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numProductSelectListeners = 0;
        _this.productSelectionListener = function (event, index, type) {
            var cells = _this.producttype.productSelections(type);
            if (cells.length === 0) {
                _this.fire(__WEBPACK_IMPORTED_MODULE_4__ProductIDType__["a" /* default */].EVENT_SELECT_PRODUCT, type, []);
                _this.fire(__WEBPACK_IMPORTED_MODULE_4__ProductIDType__["a" /* default */].EVENT_SELECT_PRODUCT + "-" + type, []);
                return;
            }
            _this.ids().then(function (ids) {
                var act = cells.map(function (c) { return ids.indexOf(c); }).filter(function (c) { return !c.isNone; });
                if (act.length === 0) {
                    return;
                }
                //ensure the right number of dimensions
                act.forEach(function (a) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__IIDType__["d" /* fillWithNone */])(a, ids.ndim); });
                _this.fire(__WEBPACK_IMPORTED_MODULE_4__ProductIDType__["a" /* default */].EVENT_SELECT_PRODUCT, type, act);
                _this.fire(__WEBPACK_IMPORTED_MODULE_4__ProductIDType__["a" /* default */].EVENT_SELECT_PRODUCT + "-" + type, act);
            });
        };
        return _this;
    }
    AProductSelectAble.prototype.on = function (events, handler) {
        if (typeof events === 'string' && (events === 'select' || events === 'selectProduct' || events.slice(0, 'select-'.length) === 'select-')) {
            this.numProductSelectListeners++;
            if (this.numProductSelectListeners === 1) {
                this.producttype.on('selectProduct', this.productSelectionListener);
            }
        }
        return _super.prototype.on.call(this, events, handler);
    };
    AProductSelectAble.prototype.off = function (events, handler) {
        if (typeof events === 'string' && (events === 'select' || events === 'selectProduct' || events.slice(0, 'select-'.length) === 'select-')) {
            this.numProductSelectListeners--;
            if (this.numProductSelectListeners === 0) {
                this.producttype.off('selectProduct', this.productSelectionListener);
            }
        }
        return _super.prototype.off.call(this, events, handler);
    };
    AProductSelectAble.prototype.productSelections = function (type) {
        var _this = this;
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_2__IIDType__["a" /* defaultSelectionType */]; }
        return this.ids().then(function (ids) {
            var cells = _this.producttype.productSelections(type);
            var act = cells.map(function (c) { return ids.indexRangeOf(c); }).filter(function (c) { return !c.isNone; });
            //ensure the right number of dimensions
            act.forEach(function (a) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__IIDType__["d" /* fillWithNone */])(a, ids.ndim); });
            return act;
        });
    };
    AProductSelectAble.prototype.selectProduct = function () {
        var a = Array.from(arguments);
        var type = (typeof a[0] === 'string') ? a.shift() : __WEBPACK_IMPORTED_MODULE_2__IIDType__["a" /* defaultSelectionType */], range = a[0].map(__WEBPACK_IMPORTED_MODULE_1__range__["parse"]), op = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__IIDType__["b" /* asSelectOperation */])(a[1]);
        return this.selectProductImpl(range, op, type);
    };
    AProductSelectAble.prototype.selectProductImpl = function (cells, op, type) {
        var _this = this;
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_2__IIDType__["c" /* SelectOperation */].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_2__IIDType__["a" /* defaultSelectionType */]; }
        return this.ids().then(function (ids) {
            cells = cells.map(function (c) { return ids.preMultiply(c); });
            return _this.producttype.select(type, cells, op);
        });
    };
    AProductSelectAble.prototype.clear = function () {
        var a = Array.from(arguments);
        if (typeof a[0] === 'number') {
            a.shift();
        }
        var type = (typeof a[0] === 'string') ? a[0] : __WEBPACK_IMPORTED_MODULE_2__IIDType__["a" /* defaultSelectionType */];
        return this.selectProductImpl([], __WEBPACK_IMPORTED_MODULE_2__IIDType__["c" /* SelectOperation */].SET, type || __WEBPACK_IMPORTED_MODULE_2__IIDType__["a" /* defaultSelectionType */]);
    };
    return AProductSelectAble;
}(__WEBPACK_IMPORTED_MODULE_3__ASelectAble__["a" /* default */]));

/* harmony default export */ __webpack_exports__["a"] = (AProductSelectAble);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IIDType__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IDType__ = __webpack_require__(17);
/* unused harmony export ASelectAble */
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */





var ASelectAble = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ASelectAble, _super);
    function ASelectAble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numSelectListeners = 0;
        _this.selectionListeners = [];
        _this.singleSelectionListener = function (event, type, act, added, removed) { return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](_this, void 0, void 0, function () {
            var ids;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ids()];
                    case 1:
                        ids = _a.sent();
                        //filter to the right ids and convert to indices format
                        //given all ids convert the selected ids to the indices in the data type
                        act = ids.indexOf(act);
                        added = ids.indexOf(added);
                        removed = ids.indexOf(removed);
                        if (act.isNone && added.isNone && removed.isNone) {
                            return [2 /*return*/];
                        }
                        //ensure the right number of dimensions
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__IIDType__["d" /* fillWithNone */])(act, ids.ndim);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__IIDType__["d" /* fillWithNone */])(added, ids.ndim);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__IIDType__["d" /* fillWithNone */])(removed, ids.ndim);
                        this.fire(ASelectAble.EVENT_SELECT, type, act, added, removed);
                        this.fire(ASelectAble.EVENT_SELECT + "-" + type, act, added, removed);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.selectionCache = [];
        _this.accumulateEvents = -1;
        return _this;
    }
    ASelectAble.prototype.fromIdRange = function (idRange) {
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ids()];
                    case 1: return [2 /*return*/, (_a.sent()).indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(idRange))];
                }
            });
        });
    };
    Object.defineProperty(ASelectAble.prototype, "idtypes", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    ASelectAble.prototype.selectionListener = function (idtype, index, total) {
        var _this = this;
        return function (event, type, act, added, removed) {
            _this.selectionCache[index] = { act: act, added: added, removed: removed };
            if (_this.accumulateEvents < 0 || (++_this.accumulateEvents) === total) {
                _this.fillAndSend(type, index);
            }
        };
    };
    ASelectAble.prototype.fillAndSend = function (type, trigger) {
        var _this = this;
        var ids = this.idtypes;
        var full = ids.map(function (id, i) {
            var entry = _this.selectionCache[i];
            if (entry) {
                return entry;
            }
            return {
                act: id.selections(type),
                added: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["none"])(),
                removed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["none"])()
            };
        });
        var act = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["join"])(full.map(function (entry) { return entry.act; }));
        var added = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["join"])(full.map(function (entry) { return entry.added; }));
        var removed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["join"])(full.map(function (entry) { return entry.removed; }));
        this.selectionCache = [];
        this.accumulateEvents = -1; //reset
        this.singleSelectionListener(null, type, act, added, removed);
    };
    ASelectAble.prototype.on = function (events, handler) {
        var _this = this;
        if (typeof events === 'string' && (events === ASelectAble.EVENT_SELECT || events.slice(0, 'select-'.length) === 'select-')) {
            this.numSelectListeners++;
            if (this.numSelectListeners === 1) {
                var idt_1 = this.idtypes;
                if (idt_1.length === 1) {
                    this.selectionListeners.push(this.singleSelectionListener);
                    idt_1[0].on(ASelectAble.EVENT_SELECT, this.singleSelectionListener);
                }
                else {
                    idt_1.forEach(function (idtype, i) {
                        var s = _this.selectionListener(idtype, i, idt_1.length);
                        _this.selectionListeners.push(s);
                        idtype.on(ASelectAble.EVENT_SELECT, s);
                    });
                }
            }
        }
        return _super.prototype.on.call(this, events, handler);
    };
    ASelectAble.prototype.off = function (events, handler) {
        var _this = this;
        if (typeof events === 'string' && (events === ASelectAble.EVENT_SELECT || events.slice(0, 'select-'.length) === 'select-')) {
            this.numSelectListeners--;
            if (this.numSelectListeners === 0) {
                this.idtypes.forEach(function (idtype, i) { return idtype.off(ASelectAble.EVENT_SELECT, _this.selectionListeners[i]); });
                this.selectionListeners = [];
            }
        }
        return _super.prototype.off.call(this, events, handler);
    };
    ASelectAble.prototype.selections = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */]; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var ids, r;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ids()];
                    case 1:
                        ids = _a.sent();
                        r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["join"])(this.idtypes.map(function (idtype) { return idtype.selections(type); }));
                        return [2 /*return*/, ids.indexRangeOf(r)];
                }
            });
        });
    };
    ASelectAble.prototype.select = function () {
        var a = Array.from(arguments);
        var dim = (typeof a[0] === 'number') ? +a.shift() : -1, type = (typeof a[0] === 'string') ? a.shift() : __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */], range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(a[0]), op = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__IIDType__["b" /* asSelectOperation */])(a[1]);
        return this.selectImpl(range, op, type, dim);
    };
    ASelectAble.prototype.selectImpl = function (range, op, type, dim) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */]; }
        if (dim === void 0) { dim = -1; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var types, ids, r;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        types = this.idtypes;
                        return [4 /*yield*/, this.ids()];
                    case 1:
                        ids = _a.sent();
                        if (dim === -1) {
                            range = ids.preMultiply(range);
                            this.accumulateEvents = 0;
                            r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["join"])(range.split().map(function (r, i) { return types[i].select(type, r, op); }));
                            if (this.accumulateEvents > 0) { //one event has not been fires, so do it manually
                                this.fillAndSend(type, -1);
                            }
                            while (r.ndim < types.length) {
                                r.dim(r.ndim); //create intermediate ones
                            }
                            return [2 /*return*/, ids.indexRangeOf(r)];
                        }
                        else {
                            //just a single dimension
                            ids = ids.split()[dim];
                            range = ids.preMultiply(range);
                            types[dim].select(type, range, op);
                            return [2 /*return*/, ids.indexRangeOf(range)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ASelectAble.prototype.clear = function () {
        var a = Array.from(arguments);
        var dim = (typeof a[0] === 'number') ? +a.shift() : -1;
        var type = (typeof a[0] === 'string') ? a[0] : __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */];
        return this.selectImpl(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["none"])(), __WEBPACK_IMPORTED_MODULE_3__IIDType__["c" /* SelectOperation */].SET, type, dim);
    };
    ASelectAble.EVENT_SELECT = __WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */].EVENT_SELECT;
    return ASelectAble;
}(__WEBPACK_IMPORTED_MODULE_1__event__["EventHandler"]));

/* harmony default export */ __webpack_exports__["a"] = (ASelectAble);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IIDType__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IDType__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProductIDType__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugin__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EVENT_REGISTER_IDTYPE; });
/* harmony export (immutable) */ __webpack_exports__["a"] = resolve;
/* harmony export (immutable) */ __webpack_exports__["i"] = resolveProduct;
/* harmony export (immutable) */ __webpack_exports__["d"] = list;
/* harmony export (immutable) */ __webpack_exports__["e"] = listAll;
/* harmony export (immutable) */ __webpack_exports__["g"] = register;
/* harmony export (immutable) */ __webpack_exports__["f"] = persist;
/* harmony export (immutable) */ __webpack_exports__["h"] = restore;
/* harmony export (immutable) */ __webpack_exports__["b"] = clearSelection;
/* harmony export (immutable) */ __webpack_exports__["j"] = isInternalIDType;
/**
 * Created by sam on 26.12.2016.
 */







var cache = new Map();
var filledUp = false;
var EVENT_REGISTER_IDTYPE = 'register.idtype';
function fillUpData(entries) {
    entries.forEach(function (row) {
        var entry = cache.get(row.id);
        var newOne = false;
        if (entry) {
            if (entry instanceof __WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */]) {
                entry.name = row.name;
                entry.names = row.names;
            }
        }
        else {
            entry = new __WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */](row.id, row.name, row.names);
            newOne = true;
        }
        cache.set(row.id, entry);
        if (newOne) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__event__["fire"])(EVENT_REGISTER_IDTYPE, entry);
        }
    });
}
function toPlural(name) {
    if (name[name.length - 1] === 'y') {
        return name.slice(0, name.length - 1) + 'ies';
    }
    return name + 's';
}
function resolve(id) {
    if (id instanceof __WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */]) {
        return id;
    }
    else {
        var sid = id;
        return register(sid, new __WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */](sid, sid, toPlural(sid)));
    }
}
function resolveProduct() {
    var idtypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        idtypes[_i] = arguments[_i];
    }
    var p = new __WEBPACK_IMPORTED_MODULE_5__ProductIDType__["a" /* default */](idtypes);
    return register(p.id, p);
}
/**
 * list currently resolved idtypes
 * @returns {Array<IDType|ProductIDType>}
 */
function list() {
    return Array.from(cache.values());
}
/**
 * Get a list of all IIDTypes available on both the server and the client.
 * @returns {any}
 */
function listAll() {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var c;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (filledUp) {
                        return [2 /*return*/, Promise.resolve(list())];
                    }
                    return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/idtype/', {}, [])];
                case 1:
                    c = _a.sent();
                    filledUp = true;
                    fillUpData(c);
                    return [2 /*return*/, list()];
            }
        });
    });
}
function register(id, idtype) {
    if (cache.has(id)) {
        return cache.get(id);
    }
    cache.set(id, idtype);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__event__["fire"])('register.idtype', idtype);
    return idtype;
}
function persist() {
    var r = {};
    cache.forEach(function (v, id) {
        r[id] = v.persist();
    });
    return r;
}
function restore(persisted) {
    Object.keys(persisted).forEach(function (id) {
        resolve(id).restore(persisted[id]);
    });
}
function clearSelection(type) {
    if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__IIDType__["a" /* defaultSelectionType */]; }
    cache.forEach(function (v) { return v.clear(type); });
}
/**
 * whether the given idtype is an internal one or not, i.e. the internal flag is set or it starts with an underscore
 * @param idtype
 * @return {boolean}
 */
function isInternalIDType(idtype) {
    return idtype.internal || idtype.id.startsWith('_');
}
{
    var EXTENSION_POINT_IDTYPE = 'idType';
    //register known idtypes via registry
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__plugin__["list"])(EXTENSION_POINT_IDTYPE).forEach(function (plugin) {
        var id = plugin.id;
        var name = plugin.name;
        var names = plugin.names || toPlural(name);
        var internal = Boolean(plugin.internal);
        register(id, new __WEBPACK_IMPORTED_MODULE_4__IDType__["a" /* default */](id, name, names, internal));
    });
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PropertyHandler__ = __webpack_require__(32);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */


/**
 * manages the hash location property helper
 */
var HashProperties = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HashProperties, _super);
    function HashProperties() {
        var _this = _super.call(this) || this;
        _this.updated = function () {
            _this.parse(location.hash);
            _this.fire(HashProperties.EVENT_HASH_CHANGED);
        };
        _this.debounceTimer = -1;
        var bak = history.state;
        if (bak) {
            Object.keys(bak).forEach(function (k) { return _this.map.set(k, bak[k]); });
        }
        else {
            _this.parse(location.hash);
        }
        window.addEventListener('hashchange', _this.updated, false);
        return _this;
    }
    HashProperties.prototype.setInt = function (name, value, update) {
        if (update === void 0) { update = true; }
        this.setProp(name, String(value), update);
    };
    HashProperties.prototype.setProp = function (name, value, update) {
        if (update === void 0) { update = true; }
        if (this.map.get(name) === value) {
            return;
        }
        this.map.set(name, value);
        if (update !== false) {
            this.update(typeof update === 'number' ? update : 0);
        }
    };
    HashProperties.prototype.removeProp = function (name, update) {
        if (update === void 0) { update = true; }
        if (this.map.has(name)) {
            this.map.delete(name);
            if (update !== false) {
                this.update(typeof update === 'number' ? update : 0);
            }
            return true;
        }
        return false;
    };
    HashProperties.prototype.toObject = function () {
        var r = {};
        this.map.forEach(function (v, k) { return r[k] = v; });
        return r;
    };
    HashProperties.prototype.update = function (updateInMs) {
        var _this = this;
        if (updateInMs === void 0) { updateInMs = 0; }
        if (updateInMs <= 0) {
            return this.updateImpl();
        }
        if (this.debounceTimer >= 0) {
            self.clearTimeout(this.debounceTimer);
            this.debounceTimer = -1;
        }
        this.debounceTimer = self.setTimeout(function () { return _this.updateImpl(); }, updateInMs);
    };
    HashProperties.prototype.updateImpl = function () {
        var _this = this;
        if (this.debounceTimer >= 0) {
            self.clearTimeout(this.debounceTimer);
            this.debounceTimer = -1;
        }
        // check if same state
        if (history.state) {
            var current_1 = history.state;
            var keys = Object.keys(current_1);
            if (keys.length === this.map.size && keys.every(function (k) { return _this.map.get(k) === current_1[k]; })) {
                return;
            }
        }
        window.removeEventListener('hashchange', this.updated, false);
        history.pushState(this.toObject(), 'State ' + Date.now(), '#' + this.toString());
        window.addEventListener('hashchange', this.updated, false);
        this.fire(HashProperties.EVENT_STATE_PUSHED, 'State ' + Date.now(), '#' + this.toString());
    };
    HashProperties.EVENT_STATE_PUSHED = 'pushedState';
    HashProperties.EVENT_HASH_CHANGED = 'hashChanged';
    return HashProperties;
}(__WEBPACK_IMPORTED_MODULE_1__PropertyHandler__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (HashProperties);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = uniqueId;
/* harmony export (immutable) */ __webpack_exports__["a"] = flagId;
/* harmony export (immutable) */ __webpack_exports__["c"] = uniqueString;
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */
/**
 * unique id container
 * @type {{}}
 */
var idCounter = new Map();
/**
 * returns a unique id for the given domain
 * @param domain
 * @return {number}
 */
function uniqueId(domain) {
    if (domain === void 0) { domain = '_default'; }
    if (!idCounter.has(domain)) {
        idCounter.set(domain, 0);
    }
    var v = idCounter.get(domain);
    idCounter.set(domain, v + 1);
    return v;
}
function flagId(domain, id) {
    if (isNaN(id) || id < 0) {
        return id;
    }
    if (!idCounter.has(domain)) {
        idCounter.set(domain, id + 1);
    }
    else {
        idCounter.set(domain, Math.max(idCounter.get(domain), id + 1)); //use the next one afterwards
    }
    return id;
}
/**
 * returns a string, which is a unique id for the given domain
 * @param domain
 * @return {string}
 */
function uniqueString(domain) {
    if (domain === void 0) { domain = '_default'; }
    return domain + uniqueId(domain);
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype_AProductSelectAble__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal_SliceColVector__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__internal_ProjectedVector__ = __webpack_require__(107);
/* unused harmony export AMatrix */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatrixView; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */








function flatten(arr, indices, select) {
    if (select === void 0) { select = 0; }
    var r = [];
    var dim = [arr.length, arr[0].length];
    if (select === 0) {
        r = r.concat.apply(r, arr);
    }
    else {
        var _loop_1 = function (i) {
            arr.forEach(function (ai) {
                r.push(ai[i]);
            });
        };
        //stupid slicing
        for (var i = 0; i < dim[1]; ++i) {
            _loop_1(i);
        }
    }
    return {
        data: r,
        indices: indices.dim(select).repeat(dim[1 - select])
    };
}
/**
 * base class for different Matrix implementations, views, transposed,...
 */
var AMatrix = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AMatrix, _super);
    function AMatrix(root) {
        var _this = _super.call(this) || this;
        _this.root = root;
        return _this;
    }
    Object.defineProperty(AMatrix.prototype, "dim", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AMatrix.prototype, "length", {
        get: function () {
            return this.nrow * this.ncol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AMatrix.prototype, "nrow", {
        get: function () {
            return this.dim[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AMatrix.prototype, "ncol", {
        get: function () {
            return this.dim[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AMatrix.prototype, "indices", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["range"])([0, this.nrow], [0, this.ncol]);
        },
        enumerable: true,
        configurable: true
    });
    AMatrix.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range);
        if (r.isAll) {
            return this.root;
        }
        // tslint:disable:no-use-before-declare
        // Disabled the rule, because the classes below reference each other in a way that it is impossible to find a successful order.
        return new MatrixView(this.root, r);
    };
    AMatrix.prototype.slice = function (col) {
        return new __WEBPACK_IMPORTED_MODULE_6__internal_SliceColVector__["a" /* default */](this.root, col);
    };
    AMatrix.prototype.stats = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var v, _a, _b, _c;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        v = this.root.valuetype;
                        if (!(v.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_INT"] || v.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_REAL"])) return [3 /*break*/, 2];
                        _b = (_a = __WEBPACK_IMPORTED_MODULE_5__math__["computeStats"]).apply;
                        _c = [void 0];
                        return [4 /*yield*/, this.data(range)];
                    case 1: return [2 /*return*/, _b.apply(_a, _c.concat([_d.sent()]))];
                    case 2: return [2 /*return*/, Promise.reject('invalid value type: ' + v.type)];
                }
            });
        });
    };
    AMatrix.prototype.statsAdvanced = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var v, _a, _b, _c, _d;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        v = this.root.valuetype;
                        if (!(v.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_INT"] || v.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_REAL"])) return [3 /*break*/, 2];
                        _a = __WEBPACK_IMPORTED_MODULE_5__math__["computeAdvancedStats"];
                        _c = (_b = [].concat).apply;
                        _d = [[]];
                        return [4 /*yield*/, this.data(range)];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_c.apply(_b, _d.concat([_e.sent()]))])];
                    case 2: return [2 /*return*/, Promise.reject('invalid value type: ' + v.type)];
                }
            });
        });
    };
    AMatrix.prototype.hist = function (bins, range, containedIds) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (containedIds === void 0) { containedIds = 0; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var v, d, flat, vc, vn;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        v = this.root.valuetype;
                        return [4 /*yield*/, this.data(range)];
                    case 1:
                        d = _a.sent();
                        flat = flatten(d, this.indices, containedIds);
                        switch (v.type) {
                            case __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_CATEGORICAL"]:
                                vc = v;
                                return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["categoricalHist"])(flat.data, flat.indices, flat.data.length, vc.categories.map(function (d) { return typeof d === 'string' ? d : d.name; }), vc.categories.map(function (d) { return typeof d === 'string' ? d : d.label || d.name; }), vc.categories.map(function (d) { return typeof d === 'string' ? 'gray' : d.color || 'gray'; }))];
                            case __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_INT"]:
                            case __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_REAL"]:
                                vn = v;
                                return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["hist"])(flat.data, flat.indices, flat.data.length, bins ? bins : Math.round(Math.sqrt(this.length)), vn.range)];
                            default:
                                return [2 /*return*/, Promise.reject('invalid value type: ' + v.type)]; //cant create hist for unique objects or other ones
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AMatrix.prototype.idView = function (idRange) {
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var r, ids;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(idRange);
                        if (r.isAll) {
                            return [2 /*return*/, Promise.resolve(this.root)];
                        }
                        return [4 /*yield*/, this.ids()];
                    case 1:
                        ids = _a.sent();
                        return [2 /*return*/, this.view(ids.indexOf(r))];
                }
            });
        });
    };
    AMatrix.prototype.reduce = function (f, thisArgument, valuetype, idtype) {
        return new __WEBPACK_IMPORTED_MODULE_7__internal_ProjectedVector__["a" /* default */](this.root, f, thisArgument, valuetype, idtype);
    };
    AMatrix.prototype.restore = function (persisted) {
        if (persisted && persisted.f) {
            /* tslint:disable:no-eval */
            return this.reduce(eval(persisted.f), this, persisted.valuetype, persisted.idtype ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__idtype__["resolve"])(persisted.idtype) : undefined);
            /* tslint:enable:no-eval */
        }
        else if (persisted && persisted.range) { //some view onto it
            return this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(persisted.range));
        }
        else if (persisted && persisted.transposed) {
            return this.t;
        }
        else if (persisted && persisted.col) {
            return this.slice(+persisted.col);
        }
        else if (persisted && persisted.row) {
            return this.t.slice(+persisted.row);
        }
        else {
            return this;
        }
    };
    return AMatrix;
}(__WEBPACK_IMPORTED_MODULE_3__idtype_AProductSelectAble__["a" /* default */]));

/* harmony default export */ __webpack_exports__["a"] = (AMatrix);
// circular dependency thus not extractable
/**
 * view on the matrix restricted by a range
 * @param root underlying matrix
 * @param range range selection
 * @param t optional its transposed version
 * @constructor
 */
var MatrixView = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixView, _super);
    function MatrixView(root, range, t) {
        if (t === void 0) { t = null; }
        var _this = _super.call(this, root) || this;
        _this.range = range;
        _this.t = t;
        _this.range = range;
        //ensure that there are two dimensions
        range.dim(0);
        range.dim(1);
        if (!t) {
            _this.t = new MatrixView(root.t, range.swap(), _this);
        }
        return _this;
    }
    Object.defineProperty(MatrixView.prototype, "desc", {
        get: function () {
            return this.root.desc;
        },
        enumerable: true,
        configurable: true
    });
    MatrixView.prototype.persist = function () {
        return {
            root: this.root.persist(),
            range: this.range.toString()
        };
    };
    MatrixView.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.ids(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    MatrixView.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.cols(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    MatrixView.prototype.colIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.colIds(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    MatrixView.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.rows(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    MatrixView.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.rowIds(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    MatrixView.prototype.size = function () {
        return this.range.size(this.root.dim);
    };
    MatrixView.prototype.at = function (i, j) {
        var inverted = this.range.invert([i, j], this.root.dim);
        return this.root.at(inverted[0], inverted[1]);
    };
    MatrixView.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.data(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    MatrixView.prototype.hist = function (bins, range, containedIds) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (containedIds === void 0) { containedIds = 0; }
        return this.root.hist(bins, this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim), containedIds);
    };
    MatrixView.prototype.stats = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.stats(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    MatrixView.prototype.statsAdvanced = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.statsAdvanced(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    MatrixView.prototype.heatmapUrl = function (range, options) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (options === void 0) { options = {}; }
        return this.root.heatmapUrl(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim), options);
    };
    MatrixView.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range);
        if (r.isAll) {
            return this;
        }
        return new MatrixView(this.root, this.range.preMultiply(r, this.dim));
    };
    Object.defineProperty(MatrixView.prototype, "valuetype", {
        get: function () {
            return this.root.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixView.prototype, "rowtype", {
        get: function () {
            return this.root.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixView.prototype, "coltype", {
        get: function () {
            return this.root.coltype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixView.prototype, "producttype", {
        get: function () {
            return this.root.producttype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixView.prototype, "idtypes", {
        get: function () {
            return this.root.idtypes;
        },
        enumerable: true,
        configurable: true
    });
    return MatrixView;
}(AMatrix));



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IDTYPE_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IDTYPE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IDTYPE_CELL; });
/* unused harmony export DIM_ROW */
/* unused harmony export DIM_COL */
/* harmony export (immutable) */ __webpack_exports__["a"] = createDefaultMatrixDesc;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */


var IDTYPE_ROW = 0;
var IDTYPE_COLUMN = 1;
var IDTYPE_CELL = 2;
var DIM_ROW = 0;
var DIM_COL = 1;
function createDefaultMatrixDesc() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__datatype__["createDefaultDataDesc"])(), {
        type: 'matrix',
        rowtype: '_rows',
        coltype: '_cols',
        size: [0, 0]
    });
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IMatrix__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AMatrix__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__internal_TransposedMatrix__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loader__ = __webpack_require__(111);
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["asMatrix"] = asMatrix;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */









/**
 * Base matrix implementation holding the data
 */
var Matrix = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Matrix, _super);
    function Matrix(desc, loader) {
        var _this = _super.call(this, null) || this;
        _this.desc = desc;
        _this.loader = loader;
        _this.root = _this;
        _this.valuetype = desc.value;
        _this.rowtype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__idtype__["resolve"])(desc.rowtype);
        _this.coltype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__idtype__["resolve"])(desc.coltype);
        _this._producttype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__idtype__["resolveProduct"])(_this.rowtype, _this.coltype);
        _this.t = new __WEBPACK_IMPORTED_MODULE_7__internal_TransposedMatrix__["a" /* default */](_this);
        return _this;
    }
    Object.defineProperty(Matrix.prototype, "producttype", {
        get: function () {
            return this._producttype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "idtypes", {
        get: function () {
            return [this.rowtype, this.coltype];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * access at a specific position
     * @param i
     * @param j
     * @returns {*}
     */
    Matrix.prototype.at = function (i, j) {
        return this.loader.at(this.desc, i, j);
    };
    Matrix.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.loader.data(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
    };
    Matrix.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.loader.ids(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
    };
    /**
     * return the column ids of the matrix
     * @returns {*}
     */
    Matrix.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.loader.cols(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
    };
    Matrix.prototype.colIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.loader.colIds(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
    };
    /**
     * return the row ids of the matrix
     * @returns {*}
     */
    Matrix.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.loader.rows(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
    };
    Matrix.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.loader.rowIds(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
    };
    Matrix.prototype.hist = function (bins, range, containedIds) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (containedIds === void 0) { containedIds = 0; }
        if (this.loader.numericalHist && (this.valuetype.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_REAL"] || this.valuetype.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_INT"])) { // use loader for hist
            return this.loader.numericalHist(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), bins);
        }
        // compute
        return _super.prototype.hist.call(this, bins, range, containedIds);
    };
    Matrix.prototype.stats = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (this.loader.numericalStats && (this.valuetype.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_REAL"] || this.valuetype.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_INT"])) { // use loader for hist
            return this.loader.numericalStats(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
        }
        // compute
        return _super.prototype.stats.call(this, range);
    };
    Matrix.prototype.statsAdvanced = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (this.loader.numericalStats && (this.valuetype.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_REAL"] || this.valuetype.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_INT"])) { // use loader for hist
            return this.loader.numericalStats(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
        }
        // compute
        return _super.prototype.statsAdvanced.call(this, range);
    };
    Matrix.prototype.size = function () {
        return this.desc.size;
    };
    Matrix.prototype.persist = function () {
        return this.desc.id;
    };
    Matrix.prototype.heatmapUrl = function (range, options) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (options === void 0) { options = {}; }
        if (this.loader.heatmapUrl) {
            return this.loader.heatmapUrl(this.desc, range, options);
        }
        return null;
    };
    return Matrix;
}(__WEBPACK_IMPORTED_MODULE_6__AMatrix__["a" /* default */]));
/* harmony default export */ __webpack_exports__["default"] = (Matrix);
/**
 * module entry point for creating a datatype
 * @param desc
 * @param loader
 * @returns {IMatrix}
 */
function create(desc, loader) {
    if (typeof loader === 'function') {
        return new Matrix(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loader__["a" /* adapterOne2Two */])(loader));
    }
    return new Matrix(desc, loader ? loader : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loader__["b" /* viaAPI2Loader */])());
}
/**
 * parses a given dataset and convert is to a matrix
 * @param data the data array
 * @param rowsIdsOrOptions see options or the row ids of this matrix
 * @param colIds the optional column ids
 * @param options options for defining the dataset description
 * @returns {IMatrix}
 */
function asMatrix(data, rowsIdsOrOptions, colIds, options) {
    if (options === void 0) { options = {}; }
    // first column if not defined, excluding 0,0
    var rows = Array.isArray(rowsIdsOrOptions) ? rowsIdsOrOptions : data.map(function (r) { return r[0]; }).slice(1);
    // first row if not defined, excluding 0,0
    var cols = colIds ? colIds : data[0].slice(1);
    if (typeof rowsIdsOrOptions === 'object') {
        options = rowsIdsOrOptions;
    }
    options = options || {};
    var realData = Array.isArray(rowsIdsOrOptions) ? data : data.slice(1).map(function (r) { return r.slice(1); });
    var valueType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["guessValueTypeDesc"])([].concat.apply([], realData));
    if (valueType.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_REAL"]) {
        realData = realData.map(function (row) { return row.map(parseFloat); });
    }
    else if (valueType.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_REAL"]) {
        realData = realData.map(function (row) { return row.map(parseInt); });
    }
    var desc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__IMatrix__["a" /* createDefaultMatrixDesc */])(), {
        size: [rows.length, cols.length],
        value: valueType
    }, options);
    var rowAssigner = options.rowassigner || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__idtype__["createLocalAssigner"])();
    var colAssigner = options.rowassigner || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__idtype__["createLocalAssigner"])();
    var loader = {
        rowIds: function (desc, range) { return Promise.resolve(rowAssigner(range.filter(rows))); },
        colIds: function (desc, range) { return Promise.resolve(colAssigner(range.filter(cols))); },
        ids: function (desc, range) {
            var rc = rowAssigner(range.dim(0).filter(rows));
            var cc = colAssigner(range.dim(1).filter(cols));
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["join"])(rc, cc));
        },
        at: function (desc, i, j) { return Promise.resolve(realData[i][j]); },
        rows: function (desc, range) { return Promise.resolve(range.filter(rows)); },
        cols: function (desc, range) { return Promise.resolve(range.filter(cols)); },
        data: function (desc, range) { return Promise.resolve(range.filter(realData)); }
    };
    return new Matrix(desc, loader);
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["default"] = (function (registry) {
    //registry.push('extension-type', 'extension-id', function() { return System.import('./extension_impl'); }, {});
    /// #if include('datatype', 'matrix')
    registry.push('datatype', 'matrix', function () { return Promise.resolve().then(__webpack_require__.bind(null, 54)); }, {});
    /// #endif
    /// #if include('datatype', 'table')
    registry.push('datatype', 'table', function () { return Promise.resolve().then(__webpack_require__.bind(null, 69)); }, {});
    /// #endif
    /// #if include('datatype', 'vector')
    registry.push('datatype', 'vector', function () { return Promise.resolve().then(__webpack_require__.bind(null, 70)); }, {});
    /// #endif
    /// #if include('datatype', 'stratification')
    registry.push('datatype', 'stratification', function () { return Promise.resolve().then(__webpack_require__.bind(null, 65)); }, {});
    /// #endif
    /// #if include('datatype', 'graph')
    registry.push('datatype', 'graph', function () { return Promise.resolve().then(__webpack_require__.bind(null, 44)); }, {});
    /// #endif
    /// #if include('datatype', 'atom')
    registry.push('datatype', 'atom', function () { return Promise.resolve().then(__webpack_require__.bind(null, 40)); }, {});
    /// #endif
    /// #if include('tabSyncer', 'selection')
    registry.push('tabSyncer', 'selection', function () { return Promise.resolve().then(__webpack_require__.bind(null, 124)); }, {});
    /// #endif
    registry.push(__WEBPACK_IMPORTED_MODULE_1__extensions__["EP_PHOVEA_CORE_LOCALE"], 'phoveaCoreLocaleEN', function () {
        return Promise.resolve().then(__webpack_require__.bind(null, 142)).then(__WEBPACK_IMPORTED_MODULE_0__plugin__["asResource"]);
    }, {
        ns: 'phovea',
    });
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graph_graph__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ObjectNode__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__security__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_promise__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ActionMetaData; });
/* harmony export (immutable) */ __webpack_exports__["d"] = meta;
/* harmony export (immutable) */ __webpack_exports__["b"] = action;
/**
 * Created by sam on 12.02.2015.
 */





/**
 * additional data about a performed action
 */
var ActionMetaData = /** @class */ (function () {
    function ActionMetaData(category, operation, name, timestamp, user) {
        if (timestamp === void 0) { timestamp = Date.now(); }
        if (user === void 0) { user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__security__["currentUserNameOrAnonymous"])(); }
        this.category = category;
        this.operation = operation;
        this.name = name;
        this.timestamp = timestamp;
        this.user = user;
    }
    ActionMetaData.restore = function (p) {
        return new ActionMetaData(p.category, p.operation, p.name, p.timestamp, p.user);
    };
    ActionMetaData.prototype.eq = function (that) {
        return this.category === that.category && this.operation === that.operation && this.name === that.name;
    };
    /**
     * checks whether this metadata are the inverse of the given one in terms of category and operation
     * @param that
     * @returns {boolean}
     */
    ActionMetaData.prototype.inv = function (that) {
        if (this.category !== that.category) {
            return false;
        }
        if (this.operation === __WEBPACK_IMPORTED_MODULE_2__ObjectNode__["c" /* op */].update) {
            return that.operation === __WEBPACK_IMPORTED_MODULE_2__ObjectNode__["c" /* op */].update;
        }
        return this.operation === __WEBPACK_IMPORTED_MODULE_2__ObjectNode__["c" /* op */].create ? that.operation === __WEBPACK_IMPORTED_MODULE_2__ObjectNode__["c" /* op */].remove : that.operation === __WEBPACK_IMPORTED_MODULE_2__ObjectNode__["c" /* op */].create;
    };
    ActionMetaData.prototype.toString = function () {
        return this.category + ":" + this.operation + " " + this.name;
    };
    return ActionMetaData;
}());

function meta(name, category, operation, timestamp, user) {
    if (category === void 0) { category = __WEBPACK_IMPORTED_MODULE_2__ObjectNode__["b" /* cat */].data; }
    if (operation === void 0) { operation = __WEBPACK_IMPORTED_MODULE_2__ObjectNode__["c" /* op */].update; }
    if (timestamp === void 0) { timestamp = Date.now(); }
    if (user === void 0) { user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__security__["currentUserNameOrAnonymous"])(); }
    return new ActionMetaData(category, operation, name, timestamp, user);
}
/**
 * creates an action given the data
 * @param meta
 * @param id
 * @param f
 * @param inputs
 * @param parameter
 * @returns {{meta: ActionMetaData, id: string, f: (function(IObjectRef<any>[], any, ProvenanceGraph): ICmdResult), inputs: IObjectRef<any>[], parameter: any}}
 */
function action(meta, id, f, inputs, parameter) {
    if (inputs === void 0) { inputs = []; }
    if (parameter === void 0) { parameter = {}; }
    return {
        meta: meta,
        id: id,
        f: f,
        inputs: inputs,
        parameter: parameter
    };
}
/**
 * comparator by index
 * @param a
 * @param b
 * @returns {number}
 */
function byIndex(a, b) {
    var ai = +a.getAttr('index', 0);
    var bi = +b.getAttr('index', 0);
    return ai - bi;
}
var ActionNode = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ActionNode, _super);
    function ActionNode(meta, functionId, f, parameter) {
        if (parameter === void 0) { parameter = {}; }
        var _this = _super.call(this, 'action') || this;
        _this.f = f;
        _super.prototype.setAttr.call(_this, 'meta', meta);
        _super.prototype.setAttr.call(_this, 'f_id', functionId);
        _super.prototype.setAttr.call(_this, 'parameter', parameter);
        return _this;
    }
    ActionNode.prototype.clone = function () {
        return new ActionNode(this.meta, this.f_id, this.f, this.parameter);
    };
    Object.defineProperty(ActionNode.prototype, "name", {
        get: function () {
            return this.meta.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "meta", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'meta');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "f_id", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'f_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "parameter", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'parameter');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'parameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "onceExecuted", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'onceExecuted', false);
        },
        set: function (value) {
            if (this.onceExecuted !== value) {
                _super.prototype.setAttr.call(this, 'onceExecuted', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ActionNode.restore = function (r, factory) {
        var a = new ActionNode(ActionMetaData.restore(r.attrs.meta), r.attrs.f_id, factory(r.attrs.f_id), r.attrs.parameter);
        return a.restore(r);
    };
    ActionNode.prototype.toString = function () {
        return this.meta.name;
    };
    Object.defineProperty(ActionNode.prototype, "inversedBy", {
        get: function () {
            var r = this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('inverses'))[0];
            return r ? r.source : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "inverses", {
        /**
         * inverses another action
         * @returns {ActionNode}
         */
        get: function () {
            var r = this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('inverses'))[0];
            return r ? r.target : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "isInverse", {
        get: function () {
            return this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('inverses'))[0] != null;
        },
        enumerable: true,
        configurable: true
    });
    ActionNode.prototype.getOrCreateInverse = function (graph) {
        var i = this.inversedBy;
        if (i) {
            return i;
        }
        if (this.inverter) {
            return graph.createInverse(this, this.inverter);
        }
        this.inverter = null; //not needed anymore
        return null;
    };
    ActionNode.prototype.updateInverse = function (graph, inverter) {
        var i = this.inversedBy;
        if (i) { //update with the actual values / parameter only
            var c = inverter.call(this, this.requires, this.creates, this.removes);
            i.parameter = c.parameter;
            this.inverter = null;
        }
        else if (!this.isInverse) {
            //create inverse action immediatelly
            graph.createInverse(this, inverter);
            this.inverter = null;
        }
        else {
            this.inverter = inverter;
        }
    };
    ActionNode.prototype.execute = function (graph, withinMilliseconds) {
        var r = this.f.call(this, this.requires, this.parameter, graph, withinMilliseconds);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_promise__["a" /* resolveImmediately */])(r);
    };
    ActionNode.prototype.equals = function (that) {
        if (!(this.meta.category === that.meta.category && that.meta.operation === that.meta.operation)) {
            return false;
        }
        if (this.f_id !== that.f_id) {
            return false;
        }
        //TODO check parameters if they are the same
        return true;
    };
    Object.defineProperty(ActionNode.prototype, "uses", {
        get: function () {
            return this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])(/(creates|removes|requires)/)).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "creates", {
        get: function () {
            return this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('creates')).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "removes", {
        get: function () {
            return this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('removes')).sort(byIndex).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "requires", {
        get: function () {
            return this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('requires')).sort(byIndex).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "resultsIn", {
        get: function () {
            var r = this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('resultsIn'))[0];
            return r ? r.target : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "previous", {
        get: function () {
            var r = this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('next'))[0];
            return r ? r.source : null;
        },
        enumerable: true,
        configurable: true
    });
    return ActionNode;
}(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["b" /* GraphNode */]));
/* harmony default export */ __webpack_exports__["a"] = (ActionNode);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graph_LocalStorageGraph__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graph_MemoryGraph__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal_promise__ = __webpack_require__(8);

/**
 * Created by sam on 12.02.2015.
 */






var LocalStorageProvenanceGraphManager = /** @class */ (function () {
    function LocalStorageProvenanceGraphManager(options) {
        if (options === void 0) { options = {}; }
        this.options = {
            storage: localStorage,
            prefix: 'clue',
            application: 'unknown'
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(this.options, options);
    }
    LocalStorageProvenanceGraphManager.prototype.loadFromLocalStorage = function (suffix, defaultValue) {
        try {
            var item = this.options.storage.getItem(this.options.prefix + suffix);
            if (item === undefined || item === null) {
                return defaultValue;
            }
            return JSON.parse(item);
        }
        catch (e) {
            console.error(e);
            return defaultValue;
        }
    };
    LocalStorageProvenanceGraphManager.prototype.listSync = function () {
        var _this = this;
        var lists = this.loadFromLocalStorage('_provenance_graphs', []);
        return lists
            .map(function (id) { return _this.loadFromLocalStorage('_provenance_graph.' + id, {}); })
            // filter to right application
            .filter(function (d) { return d.attrs && d.attrs.of === _this.options.application; });
    };
    LocalStorageProvenanceGraphManager.prototype.list = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_promise__["a" /* resolveImmediately */])(this.listSync());
    };
    LocalStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_promise__["a" /* resolveImmediately */])(__WEBPACK_IMPORTED_MODULE_3__graph_LocalStorageGraph__["a" /* default */].load(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["d" /* provenanceGraphFactory */])(), this.options.storage));
    };
    LocalStorageProvenanceGraphManager.prototype.get = function (desc) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a, _b;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = __WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["a" /* default */].bind;
                        _b = [void 0, desc];
                        return [4 /*yield*/, this.getGraph(desc)];
                    case 1: return [2 /*return*/, new (_a.apply(__WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["a" /* default */], _b.concat([_c.sent()])))()];
                }
            });
        });
    };
    LocalStorageProvenanceGraphManager.prototype.clone = function (graph, desc) {
        if (desc === void 0) { desc = {}; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var description, pdesc, newGraph;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        description = "Cloned from " + graph.desc.name + " created by " + graph.desc.creator + "\n" + (graph.desc.description || '');
                        pdesc = this.createDesc(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({ name: graph.desc.name, description: description }, desc));
                        return [4 /*yield*/, this.getGraph(pdesc)];
                    case 1:
                        newGraph = _a.sent();
                        newGraph.restoreDump(graph.persist(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["d" /* provenanceGraphFactory */])());
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["a" /* default */](pdesc, newGraph)];
                }
            });
        });
    };
    LocalStorageProvenanceGraphManager.prototype.import = function (json, desc) {
        if (desc === void 0) { desc = {}; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var pdesc, newGraph;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pdesc = this.createDesc(desc);
                        return [4 /*yield*/, this.getGraph(pdesc)];
                    case 1:
                        newGraph = _a.sent();
                        newGraph.restoreDump(json, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["d" /* provenanceGraphFactory */])());
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["a" /* default */](pdesc, newGraph)];
                }
            });
        });
    };
    LocalStorageProvenanceGraphManager.prototype.delete = function (desc) {
        var lists = JSON.parse(this.options.storage.getItem(this.options.prefix + '_provenance_graphs') || '[]');
        lists.splice(lists.indexOf(desc.id), 1);
        __WEBPACK_IMPORTED_MODULE_3__graph_LocalStorageGraph__["a" /* default */].delete(desc, this.options.storage);
        //just remove from the list
        this.options.storage.removeItem(this.options.prefix + '_provenance_graph.' + desc.id);
        this.options.storage.setItem(this.options.prefix + '_provenance_graphs', JSON.stringify(lists));
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_promise__["a" /* resolveImmediately */])(true);
    };
    LocalStorageProvenanceGraphManager.prototype.edit = function (graph, desc) {
        if (desc === void 0) { desc = {}; }
        var base = graph instanceof __WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["a" /* default */] ? graph.desc : graph;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(base, desc);
        this.options.storage.setItem(this.options.prefix + '_provenance_graph.' + base.id, JSON.stringify(base));
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_promise__["a" /* resolveImmediately */])(base);
    };
    LocalStorageProvenanceGraphManager.prototype.createDesc = function (overrides) {
        var _this = this;
        if (overrides === void 0) { overrides = {}; }
        var lists = JSON.parse(this.options.storage.getItem(this.options.prefix + '_provenance_graphs') || '[]');
        var uid = (lists.length > 0 ? String(1 + Math.max.apply(Math, lists.map(function (d) { return parseInt(d.slice(_this.options.prefix.length), 10); }))) : '0');
        var id = this.options.prefix + uid;
        var desc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({
            type: 'provenance_graph',
            name: 'Temporary Session ' + uid,
            fqname: this.options.prefix + 'Temporary Session ' + uid,
            id: id,
            local: true,
            size: [0, 0],
            attrs: {
                graphtype: 'provenance_graph',
                of: this.options.application
            },
            creator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__security__["currentUserNameOrAnonymous"])(),
            permissions: __WEBPACK_IMPORTED_MODULE_4__security__["ALL_READ_NONE"],
            ts: Date.now(),
            description: ''
        }, overrides);
        lists.push(id);
        this.options.storage.setItem(this.options.prefix + '_provenance_graphs', JSON.stringify(lists));
        this.options.storage.setItem(this.options.prefix + '_provenance_graph.' + id, JSON.stringify(desc));
        return desc;
    };
    LocalStorageProvenanceGraphManager.prototype.create = function (desc) {
        if (desc === void 0) { desc = {}; }
        var pdesc = this.createDesc(desc);
        return this.get(pdesc);
    };
    LocalStorageProvenanceGraphManager.prototype.createInMemoryDesc = function (base) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({
            type: 'provenance_graph',
            name: 'In Memory Session',
            fqname: 'In Memory Session',
            id: 'memory',
            local: true,
            size: [0, 0],
            attrs: {
                graphtype: 'provenance_graph',
                of: this.options.application
            },
            creator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__security__["currentUserNameOrAnonymous"])(),
            permissions: __WEBPACK_IMPORTED_MODULE_4__security__["ALL_READ_NONE"],
            ts: Date.now(),
            description: ''
        }, base ? base : {}, {
            id: 'memory',
            local: true
        });
    };
    LocalStorageProvenanceGraphManager.prototype.createInMemory = function () {
        var desc = this.createInMemoryDesc();
        return new __WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["a" /* default */](desc, new __WEBPACK_IMPORTED_MODULE_5__graph_MemoryGraph__["a" /* default */](desc, [], [], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["d" /* provenanceGraphFactory */])()));
    };
    LocalStorageProvenanceGraphManager.prototype.cloneInMemory = function (graph) {
        var desc = this.createInMemoryDesc(graph.desc);
        var m = new __WEBPACK_IMPORTED_MODULE_5__graph_MemoryGraph__["a" /* default */](desc, [], [], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["d" /* provenanceGraphFactory */])());
        m.restore(graph.persist());
        return new __WEBPACK_IMPORTED_MODULE_2__ProvenanceGraph__["a" /* default */](desc, m);
    };
    return LocalStorageProvenanceGraphManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (LocalStorageProvenanceGraphManager);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_promise__ = __webpack_require__(8);

/**
 * Created by sam on 12.02.2015.
 */





var RemoteStorageProvenanceGraphManager = /** @class */ (function () {
    function RemoteStorageProvenanceGraphManager(options) {
        if (options === void 0) { options = {}; }
        this.options = {
            application: 'unknown'
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(this.options, options);
    }
    RemoteStorageProvenanceGraphManager.prototype.list = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data__["list"])(function (d) { return d.desc.type === 'graph' && d.desc.attrs.graphtype === 'provenance_graph' && d.desc.attrs.of === _this.options.application; })];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (di) { return di.desc; })];
                }
            });
        });
    };
    RemoteStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data__["get"])(desc.id)];
                    case 1: return [2 /*return*/, (_a.sent()).impl(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__["d" /* provenanceGraphFactory */])())];
                }
            });
        });
    };
    RemoteStorageProvenanceGraphManager.prototype.get = function (desc) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a, _b;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = __WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__["a" /* default */].bind;
                        _b = [void 0, desc];
                        return [4 /*yield*/, this.getGraph(desc)];
                    case 1: return [2 /*return*/, new (_a.apply(__WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__["a" /* default */], _b.concat([_c.sent()])))()];
                }
            });
        });
    };
    RemoteStorageProvenanceGraphManager.prototype.delete = function (desc) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data__["remove"])(desc);
    };
    RemoteStorageProvenanceGraphManager.prototype.clone = function (graph, desc) {
        if (desc === void 0) { desc = {}; }
        return this.import(graph.persist(), desc);
    };
    RemoteStorageProvenanceGraphManager.prototype.importImpl = function (json, desc) {
        if (desc === void 0) { desc = {}; }
        var pdesc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({
            type: 'graph',
            attrs: {
                graphtype: 'provenance_graph',
                of: this.options.application
            },
            name: 'Persistent WS',
            creator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__security__["currentUserNameOrAnonymous"])(),
            ts: Date.now(),
            description: '',
            nodes: json.nodes,
            edges: json.edges
        }, desc);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data__["upload"])(pdesc).then(function (base) {
            return base.impl(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__["d" /* provenanceGraphFactory */])());
        });
    };
    RemoteStorageProvenanceGraphManager.prototype.import = function (json, desc) {
        if (desc === void 0) { desc = {}; }
        return this.importImpl(json, desc).then(function (impl) {
            return new __WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__["a" /* default */](impl.desc, impl);
        });
    };
    RemoteStorageProvenanceGraphManager.prototype.migrate = function (graph, desc) {
        if (desc === void 0) { desc = {}; }
        return this.importImpl({ nodes: [], edges: [] }, desc).then(function (backend) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__internal_promise__["a" /* resolveImmediately */])(graph.backend.migrate())
                .then(function (_a) {
                var nodes = _a.nodes, edges = _a.edges;
                return backend.addAll(nodes, edges);
            }).then(function () {
                graph.migrateBackend(backend);
                return graph;
            });
        });
    };
    RemoteStorageProvenanceGraphManager.prototype.edit = function (graph, desc) {
        if (desc === void 0) { desc = {}; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var base, graphProxy;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base = graph instanceof __WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__["a" /* default */] ? graph.desc : graph;
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(base, desc);
                        return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data__["get"])(base.id)];
                    case 1:
                        graphProxy = _a.sent();
                        return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data__["modify"])(graphProxy, desc)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, base];
                }
            });
        });
    };
    RemoteStorageProvenanceGraphManager.prototype.create = function (desc) {
        if (desc === void 0) { desc = {}; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var pdesc, impl;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pdesc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({
                            id: undefined,
                            type: 'graph',
                            attrs: {
                                graphtype: 'provenance_graph',
                                of: this.options.application
                            },
                            name: "Persistent WS",
                            fqname: "provenance_graphs/Persistent WS",
                            creator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__security__["currentUserNameOrAnonymous"])(),
                            size: [0, 0],
                            ts: Date.now(),
                            description: ''
                        }, desc);
                        return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data__["upload"])(pdesc)];
                    case 1:
                        impl = (_a.sent()).impl(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__["d" /* provenanceGraphFactory */])());
                        return [2 /*return*/, impl.then(function (i) { return new __WEBPACK_IMPORTED_MODULE_3__ProvenanceGraph__["a" /* default */](i.desc, i); })];
                }
            });
        });
    };
    return RemoteStorageProvenanceGraphManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (RemoteStorageProvenanceGraphManager);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graph_graph__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_TRANSITION; });

/**
 * Created by sam on 12.02.2015.
 */

var DEFAULT_DURATION = 1500; //ms
var DEFAULT_TRANSITION = 0; //ms
var SlideNode = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SlideNode, _super);
    function SlideNode() {
        return _super.call(this, 'story') || this;
    }
    Object.defineProperty(SlideNode.prototype, "name", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'name', '');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "description", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'description', '');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'description', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "isTextOnly", {
        get: function () {
            return !this.outgoing.some(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('jumpTo'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "state", {
        get: function () {
            var edge = this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('jumpTo'))[0];
            return edge ? edge.target : null;
        },
        enumerable: true,
        configurable: true
    });
    SlideNode.restore = function (dump) {
        return new SlideNode().restore(dump);
    };
    Object.defineProperty(SlideNode.prototype, "next", {
        get: function () {
            var n = this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('next'))[0];
            return n ? n.target : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "nexts", {
        get: function () {
            return this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('next')).map(function (n) { return n.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "previous", {
        get: function () {
            var n = this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('next'))[0];
            return n ? n.source : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "slideIndex", {
        get: function () {
            var p = this.previous;
            return 1 + (p ? p.slideIndex : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "duration", {
        get: function () {
            return this.getAttr('duration', DEFAULT_DURATION);
        },
        set: function (value) {
            this.setAttr('duration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "transition", {
        /**
         * the number of milliseconds for the transitions
         * @returns {number}
         */
        get: function () {
            return this.getAttr('transition', DEFAULT_TRANSITION);
        },
        set: function (value) {
            this.setAttr('transition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "annotations", {
        get: function () {
            return this.getAttr('annotations', []);
        },
        enumerable: true,
        configurable: true
    });
    SlideNode.prototype.setAnnotation = function (index, ann) {
        var old = this.annotations;
        old[index] = ann;
        this.setAttr('annotations', old);
    };
    SlideNode.prototype.updateAnnotation = function (ann) {
        //since it is a reference just updated
        this.setAttr('annotations', this.annotations);
    };
    SlideNode.prototype.removeAnnotation = function (index) {
        var old = this.annotations;
        old.splice(index, 1);
        this.setAttr('annotations', old);
    };
    SlideNode.prototype.removeAnnotationElem = function (elem) {
        var old = this.annotations;
        old.splice(old.indexOf(elem), 1);
        this.setAttr('annotations', old);
    };
    SlideNode.prototype.pushAnnotation = function (ann) {
        var old = this.annotations;
        old.push(ann);
        this.setAttr('annotations', old);
        this.fire('push-annotations', ann, old);
    };
    Object.defineProperty(SlideNode.prototype, "isStart", {
        get: function () {
            return this.previous == null;
        },
        enumerable: true,
        configurable: true
    });
    SlideNode.makeText = function (title) {
        var s = new SlideNode();
        if (title) {
            s.pushAnnotation({
                type: 'text',
                pos: [25, 25],
                text: '# ${name}'
            });
            s.name = title;
        }
        return s;
    };
    return SlideNode;
}(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["b" /* GraphNode */]));
/* harmony default export */ __webpack_exports__["a"] = (SlideNode);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graph_graph__ = __webpack_require__(6);

/**
 * Created by sam on 12.02.2015.
 */

/**
 * a state node is one state in the visual exploration consisting of an action creating it and one or more following ones.
 * In addition, a state is characterized by the set of active object nodes
 */
var StateNode = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](StateNode, _super);
    function StateNode(name, description) {
        if (description === void 0) { description = ''; }
        var _this = _super.call(this, 'state') || this;
        _super.prototype.setAttr.call(_this, 'name', name);
        _super.prototype.setAttr.call(_this, 'description', description);
        return _this;
    }
    Object.defineProperty(StateNode.prototype, "name", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'name');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "description", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'description', '');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'description', value);
        },
        enumerable: true,
        configurable: true
    });
    StateNode.restore = function (p) {
        var r = new StateNode(p.attrs.name);
        return r.restore(p);
    };
    Object.defineProperty(StateNode.prototype, "consistsOf", {
        /**
         * this state consists of the following objects
         * @returns {ObjectNode<any>[]}
         */
        get: function () {
            return this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('consistsOf')).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "resultsFrom", {
        /**
         * returns the actions leading to this state
         * @returns {ActionNode[]}
         */
        get: function () {
            return this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('resultsIn')).map(function (e) { return e.source; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "creator", {
        /**
         *
         * @returns {any}
         */
        get: function () {
            //results and not a inversed actions
            var from = this.incoming.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('resultsIn')).map(function (e) { return e.source; }).filter(function (s) { return !s.isInverse; });
            if (from.length === 0) {
                return null;
            }
            return from[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "next", {
        get: function () {
            return this.outgoing.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["d" /* isType */])('next')).map(function (e) { return e.target; }).filter(function (s) { return !s.isInverse; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "previousState", {
        get: function () {
            var a = this.creator;
            if (a) {
                return a.previous;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "previousStates", {
        get: function () {
            return this.resultsFrom.map(function (n) { return n.previous; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "nextStates", {
        get: function () {
            return this.next.map(function (n) { return n.resultsIn; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "nextState", {
        get: function () {
            var r = this.next[0];
            return r ? r.resultsIn : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "path", {
        get: function () {
            var p = this.previousState, r = [];
            r.unshift(this);
            if (p) {
                p.pathImpl(r);
            }
            return r;
        },
        enumerable: true,
        configurable: true
    });
    StateNode.prototype.pathImpl = function (r) {
        var p = this.previousState;
        r.unshift(this);
        if (p && r.indexOf(p) < 0) { //no loop
            //console.log(p.toString() + ' path '+ r.join(','));
            p.pathImpl(r);
        }
    };
    StateNode.prototype.toString = function () {
        return this.name;
    };
    return StateNode;
}(__WEBPACK_IMPORTED_MODULE_1__graph_graph__["b" /* GraphNode */]));
/* harmony default export */ __webpack_exports__["a"] = (StateNode);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SingleRangeElem__ = __webpack_require__(118);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */



var RangeElem = /** @class */ (function () {
    function RangeElem(from, to, step) {
        if (to === void 0) { to = -1; }
        if (step === void 0) { step = 1; }
        this.from = from;
        this.to = to;
        this.step = step;
        if (step === 0) {
            throw new Error('invalid step size: ' + step);
        }
    }
    Object.defineProperty(RangeElem.prototype, "isAll", {
        get: function () {
            return this.from === 0 && this.to === -1 && this.step === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeElem.prototype, "isSingle", {
        get: function () {
            return (this.from + this.step) === this.to;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeElem.prototype, "isUnbound", {
        get: function () {
            return this.from < 0 || this.to < 0;
        },
        enumerable: true,
        configurable: true
    });
    RangeElem.all = function () {
        return new RangeElem(0, -1, 1);
    };
    RangeElem.none = function () {
        return new RangeElem(0, 0, 1);
    };
    RangeElem.single = function (val) {
        return new __WEBPACK_IMPORTED_MODULE_2__SingleRangeElem__["a" /* default */](val);
    };
    RangeElem.range = function (from, to, step) {
        if (to === void 0) { to = -1; }
        if (step === void 0) { step = 1; }
        if ((from + step) === to) {
            return RangeElem.single(from);
        }
        return new RangeElem(from, to, step);
    };
    RangeElem.prototype.size = function (size) {
        var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.to, size), f = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.from, size);
        if (this.step === 1) {
            return Math.max(t - f, 0);
        }
        else if (this.step === -1) {
            if (this.to === -1) {
                return Math.max(f - -1, 0);
            }
            return Math.max(f - t, 0);
        }
        var d = this.step > 0 ? (t - f + 1) : (f - t + 1);
        var s = Math.abs(this.step);
        if (d <= 0) { //no range
            return 0;
        }
        return Math.floor(d / s);
    };
    RangeElem.prototype.clone = function () {
        return new RangeElem(this.from, this.to, this.step);
    };
    RangeElem.prototype.reverse = function () {
        if (this.step > 0) {
            var t = this.from - 1;
            var f = this.to - 1;
            return new RangeElem(f, t, -this.step);
        }
        else { //step <0
            var t = this.from - 1;
            var f = this.to - 1;
            return new RangeElem(f, t, -this.step);
        }
    };
    RangeElem.prototype.invert = function (index, size) {
        if (this.isAll) {
            return index;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.from, size) + index * this.step;
    };
    /**
     * creates an iterator of this range
     * @param size the underlying size for negative indices
     */
    RangeElem.prototype.iter = function (size) {
        if (this.step < 0 && this.to === -1) {
            // keep negative to have 0 included
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterator__["range"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.from, size), -1, this.step);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterator__["range"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.from, size), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.to, size), this.step);
    };
    Object.defineProperty(RangeElem.prototype, "__iterator__", {
        get: function () {
            return this.iter();
        },
        enumerable: true,
        configurable: true
    });
    RangeElem.prototype.contains = function (value, size) {
        if (this.isAll) {
            return true;
        }
        var f = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.from, size);
        var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.to, size);
        if (this.step === -1) {
            if (this.to === -1) {
                return (value <= f && value >= 0);
            }
            return (value <= f) && (value > t);
        }
        else if (this.step === +1) { //+1
            return (value >= f) && (value < t);
        }
        else {
            return this.iter(size).asList().indexOf(value) >= 0;
        }
    };
    RangeElem.prototype.toString = function () {
        if (this.isAll) {
            return '';
        }
        if (this.isSingle) {
            return this.from.toString();
        }
        var r = this.from + ':' + this.to;
        if (this.step !== 1) {
            r += ':' + this.step;
        }
        return r;
    };
    RangeElem.parse = function (code) {
        if (code.length === 0) {
            return RangeElem.all();
        }
        var parseElem = function (v, defaultValue) {
            if (defaultValue === void 0) { defaultValue = NaN; }
            v = v.trim();
            if (v === '' && !isNaN(defaultValue)) {
                return defaultValue;
            }
            var n = parseInt(v, 10);
            if (isNaN(n)) {
                throw Error("parse error: \"" + v + "\" is not a valid integer");
            }
            return n;
        };
        var parts = code.split(':');
        switch (parts.length) {
            case 1:
                return RangeElem.single(parseElem(parts[0]));
            case 2:
                return new RangeElem(parseElem(parts[0], 0), parseElem(parts[1], -1));
            case 3:
                return new RangeElem(parseElem(parts[0], 0), parseElem(parts[1], -1), parseElem(parts[2], 1));
            default:
                throw new Error("parse error: \"" + code + "\" is not a valid range specifier");
        }
    };
    return RangeElem;
}());
/* harmony default export */ __webpack_exports__["a"] = (RangeElem);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fix;
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */
function fix(v, size) {
    return v < 0 ? (size + 1 + v) : v;
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["store"] = store;
/* harmony export (immutable) */ __webpack_exports__["remove"] = remove;
/* harmony export (immutable) */ __webpack_exports__["has"] = has;
/* harmony export (immutable) */ __webpack_exports__["retrieve"] = retrieve;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by sam on 10.02.2015.
 */
/**
 * Use the browser's sessionStorage
 * @type {Storage}
 */
var context = sessionStorage;
/**
 * Store any value for a given key and returns the previous stored value.
 * Returns `null` if no previous value was found.
 * @param key
 * @param value
 * @returns {any}
 */
function store(key, value) {
    var bak = context.getItem(key);
    context.setItem(key, JSON.stringify(value));
    return bak;
}
/**
 * Removes the key-value pair from the session
 * @param key
 */
function remove(key) {
    context.removeItem(key);
}
/**
 * Returns true if the key exists in the session. Otherwise returns false.
 * @param key
 * @returns {boolean}
 */
function has(key) {
    return (context.getItem(key) !== null);
}
/**
 * Returns the value for the given key if it exists in the session.
 * Otherwise returns the `default_` parameter, which is by default `null`.
 * @param key
 * @param defaultValue
 * @returns {T}
 */
function retrieve(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return has(key) ? JSON.parse(context.getItem(key)) : defaultValue;
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datatype__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = guessColor;
/* harmony export (immutable) */ __webpack_exports__["b"] = createDefaultStratificationDesc;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */


function guessColor(stratification, group) {
    switch (group.toLowerCase()) {
        case 'male':
            return 'blue';
        case 'female':
            return 'red';
        case 'deceased':
            return '#e41a1b';
        case 'living':
            return '#377eb8';
    }
    return 'gray';
}
function createDefaultStratificationDesc() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__datatype__["createDefaultDataDesc"])(), {
        type: 'stratification',
        idtype: '_rows',
        size: 0,
        groups: [],
        ngroups: 0
    });
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__IStratification__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__StratificationGroup__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loader__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__StratificationVector__ = __webpack_require__(120);
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["wrap"] = wrap;
/* harmony export (immutable) */ __webpack_exports__["asStratification"] = asStratification;
/* harmony export (immutable) */ __webpack_exports__["wrapCategoricalVector"] = wrapCategoricalVector;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */











/**
 * root matrix implementation holding the data
 * @internal
 */
var Stratification = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Stratification, _super);
    function Stratification(desc, loader) {
        var _this = _super.call(this, desc) || this;
        _this.loader = loader;
        return _this;
    }
    Object.defineProperty(Stratification.prototype, "idtype", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(this.desc.idtype);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stratification.prototype, "groups", {
        get: function () {
            return this.desc.groups;
        },
        enumerable: true,
        configurable: true
    });
    Stratification.prototype.group = function (group) {
        return new __WEBPACK_IMPORTED_MODULE_8__StratificationGroup__["a" /* default */](this, group, this.groups[group]);
    };
    Stratification.prototype.hist = function (bins, range) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __WEBPACK_IMPORTED_MODULE_6__math__["rangeHist"];
                        return [4 /*yield*/, this.range()];
                    case 1: 
                    //TODO
                    return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    Stratification.prototype.vector = function () {
        return this.asVector();
    };
    Stratification.prototype.asVector = function () {
        var _this = this;
        if (!this._v) {
            this._v = this.loader(this.desc).then(function (data) { return new __WEBPACK_IMPORTED_MODULE_10__StratificationVector__["a" /* default */](_this, data.range); });
        }
        return this._v;
    };
    Stratification.prototype.origin = function () {
        if ('origin' in this.desc) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__data__["getFirstByFQName"])(this.desc.origin);
        }
        return Promise.reject('no origin specified');
    };
    Stratification.prototype.range = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader(this.desc)];
                    case 1: return [2 /*return*/, (_a.sent()).range];
                }
            });
        });
    };
    Stratification.prototype.idRange = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var data, ids, range;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader(this.desc)];
                    case 1:
                        data = _a.sent();
                        ids = data.rowIds.dim(0);
                        range = data.range;
                        return [2 /*return*/, ids.preMultiply(range, this.dim[0])];
                }
            });
        });
    };
    Stratification.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a, _b;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range)).filter;
                        return [4 /*yield*/, this.loader(this.desc)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.sent()).rows, this.dim])];
                }
            });
        });
    };
    Stratification.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader(this.desc)];
                    case 1: return [2 /*return*/, (_a.sent()).rowIds.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range), this.dim)];
                }
            });
        });
    };
    Object.defineProperty(Stratification.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    Stratification.prototype.size = function () {
        return this.desc.size;
    };
    Object.defineProperty(Stratification.prototype, "length", {
        get: function () {
            return this.dim[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stratification.prototype, "ngroups", {
        get: function () {
            return this.desc.ngroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stratification.prototype, "dim", {
        get: function () {
            return [this.size()];
        },
        enumerable: true,
        configurable: true
    });
    Stratification.prototype.persist = function () {
        return this.desc.id;
    };
    return Stratification;
}(__WEBPACK_IMPORTED_MODULE_4__datatype__["ADataType"]));
/* harmony default export */ __webpack_exports__["default"] = (Stratification);
/**
 * module entry point for creating a datatype
 * @param desc
 * @returns {IVector}
 */
function create(desc) {
    return new Stratification(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__loader__["a" /* viaAPILoader */])());
}
function wrap(desc, rows, rowIds, range) {
    return new Stratification(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__loader__["b" /* viaDataLoader */])(rows, rowIds, range));
}
function asStratification(rows, range, options) {
    if (options === void 0) { options = {}; }
    var desc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__IStratification__["b" /* createDefaultStratificationDesc */])(), {
        size: 0,
        groups: range.groups.map(function (r) { return ({ name: r.name, color: r.color, size: r.length }); }),
        ngroups: range.groups.length
    }, options);
    var rowAssigner = options.rowassigner || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["createLocalAssigner"])();
    return new Stratification(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__loader__["b" /* viaDataLoader */])(rows, rowAssigner(rows), range));
}
function wrapCategoricalVector(v) {
    if (v.valuetype.type !== __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_CATEGORICAL"]) {
        throw new Error('invalid vector value type: ' + v.valuetype.type);
    }
    var toGroup = function (g) {
        if (typeof g === 'string') {
            return { name: g, color: 'gray', size: NaN };
        }
        var cat = g;
        return { name: cat.name, color: cat.color || 'gray', size: NaN };
    };
    var cats = v.desc.value.categories.map(toGroup);
    var desc = {
        id: v.desc.id + '-s',
        type: 'stratification',
        name: v.desc.name + '-s',
        fqname: v.desc.fqname + '-s',
        description: v.desc.description,
        idtype: v.idtype.id,
        ngroups: cats.length,
        groups: cats,
        size: v.length,
        creator: v.desc.creator,
        ts: v.desc.ts
    };
    function loader() {
        return Promise.all([v.groups(), v.ids(), v.names()]).then(function (args) {
            var range = args[0];
            range.groups.forEach(function (g, i) { return cats[i].size = g.length; });
            return {
                range: args[0],
                rowIds: args[1],
                rows: args[2]
            };
        });
    }
    return new Stratification(desc, loader);
}


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(11);
/**
 * Created by sam on 26.12.2016.
 */




/**
 * root matrix implementation holding the data
 * @internal
 */
var StratificationGroup = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](StratificationGroup, _super);
    function StratificationGroup(root, groupIndex, groupDesc) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.groupIndex = groupIndex;
        _this.groupDesc = groupDesc;
        return _this;
    }
    Object.defineProperty(StratificationGroup.prototype, "desc", {
        get: function () {
            return this.root.desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationGroup.prototype, "groups", {
        get: function () {
            return [this.groupDesc];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationGroup.prototype, "ngroups", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    StratificationGroup.prototype.group = function (groupIndex) {
        if (groupIndex === 0) {
            return this;
        }
        return null; //can't sub a single group
    };
    Object.defineProperty(StratificationGroup.prototype, "idtype", {
        get: function () {
            return this.root.idtype;
        },
        enumerable: true,
        configurable: true
    });
    StratificationGroup.prototype.hist = function (bins, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __WEBPACK_IMPORTED_MODULE_3__math__["rangeHist"];
                        return [4 /*yield*/, this.range()];
                    case 1: 
                    //FIXME
                    return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    StratificationGroup.prototype.vector = function () {
        return this.asVector();
    };
    StratificationGroup.prototype.asVector = function () {
        return Promise.all([this.root.asVector(), this.rangeGroup()]).then(function (arr) { return arr[0].view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(arr[1])); });
    };
    StratificationGroup.prototype.origin = function () {
        return this.root.origin();
    };
    StratificationGroup.prototype.range = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var g;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rangeGroup()];
                    case 1:
                        g = _a.sent();
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_1__range__["CompositeRange1D"](g.name, [g])];
                }
            });
        });
    };
    StratificationGroup.prototype.idRange = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var r, g;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.root.idRange()];
                    case 1:
                        r = _a.sent();
                        g = r.groups[this.groupIndex];
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_1__range__["CompositeRange1D"](g.name, [g])];
                }
            });
        });
    };
    StratificationGroup.prototype.rangeGroup = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var r;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.root.range()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.groups[this.groupIndex]];
                }
            });
        });
    };
    StratificationGroup.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var g, r;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rangeGroup()];
                    case 1:
                        g = _a.sent();
                        r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(g).preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
                        return [2 /*return*/, this.root.names(r)];
                }
            });
        });
    };
    StratificationGroup.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var g, r;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rangeGroup()];
                    case 1:
                        g = _a.sent();
                        r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(g).preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
                        return [2 /*return*/, this.root.ids(r)];
                }
            });
        });
    };
    StratificationGroup.prototype.idView = function (idRange) {
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return Promise.reject('not implemented');
    };
    StratificationGroup.prototype.toString = function () {
        return this.persist();
    };
    Object.defineProperty(StratificationGroup.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    StratificationGroup.prototype.size = function () {
        return [this.length];
    };
    Object.defineProperty(StratificationGroup.prototype, "length", {
        get: function () {
            return this.groupDesc.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationGroup.prototype, "dim", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    StratificationGroup.prototype.persist = function () {
        return {
            root: this.root.persist(),
            group: this.groupIndex
        };
    };
    StratificationGroup.prototype.restore = function (persisted) {
        return this;
    };
    return StratificationGroup;
}(__WEBPACK_IMPORTED_MODULE_2__idtype__["SelectAble"]));
/* harmony default export */ __webpack_exports__["a"] = (StratificationGroup);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Store__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin__ = __webpack_require__(7);
/* unused harmony export SYNCER_EXTENSION_POINT */
/**
 * Created by Samuel Gratzl on 01.12.2016.
 */



var SYNCER_EXTENSION_POINT = 'tabSyncer';
var TabSyncer = /** @class */ (function () {
    function TabSyncer(options) {
        var _this = this;
        this.options = {
            keyPrefix: 'tab-sync-',
            storage: localStorage
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["mixin"])(this.options, options);
        this.store = new __WEBPACK_IMPORTED_MODULE_1__Store__["a" /* default */](this.options.storage, this.options.keyPrefix);
        this.store.on(__WEBPACK_IMPORTED_MODULE_1__Store__["a" /* default */].EVENT_CHANGED, TabSyncer.handleChange.bind(this));
        // instantiate plugins
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__plugin__["load"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__plugin__["list"])(SYNCER_EXTENSION_POINT)).then(function (instances) {
            instances.forEach(function (i) { return _this.push(i.factory); });
        });
        this.registerTab(document.location.href);
        window.addEventListener('beforeunload', function () {
            _this.unregisterTab(document.location.href);
        });
    }
    TabSyncer.prototype.push = function (syncer) {
        syncer(this.store);
    };
    TabSyncer.prototype.registerTab = function (url) {
        var list = this.getTabList();
        list.push(url);
        this.store.setValue(TabSyncer.TAB_LIST, list);
    };
    TabSyncer.handleChange = function (event, key, newValue, oldValue, url) {
        console.log('change in local storage', key, newValue, oldValue, url);
    };
    TabSyncer.prototype.unregisterTab = function (url) {
        var list = this.getTabList();
        var i = list.indexOf(url);
        if (i >= 0) {
            list.splice(i, 1);
            this.store.setValue(TabSyncer.TAB_LIST, list);
        }
    };
    TabSyncer.prototype.getTabList = function () {
        return this.store.getValue(TabSyncer.TAB_LIST, []);
    };
    TabSyncer.TAB_LIST = 'tabList';
    return TabSyncer;
}());
/* harmony default export */ __webpack_exports__["a"] = (TabSyncer);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_MultiTableVector__ = __webpack_require__(129);
/* unused harmony export ATable */
/* unused harmony export TableView */
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */




/**
 * base class for different Table implementations, views, transposed,...
 * @internal
 */
var ATable = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ATable, _super);
    function ATable(root) {
        var _this = _super.call(this) || this;
        _this.root = root;
        return _this;
    }
    Object.defineProperty(ATable.prototype, "dim", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATable.prototype, "nrow", {
        get: function () {
            return this.dim[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATable.prototype, "ncol", {
        get: function () {
            return this.dim[1];
        },
        enumerable: true,
        configurable: true
    });
    ATable.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        // tslint:disable:no-use-before-declare
        // Disabled the rule, because the classes below reference each other in a way that it is impossible to find a successful order.
        return new TableView(this.root, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range));
    };
    ATable.prototype.idView = function (idRange) {
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.view;
                        return [4 /*yield*/, this.ids()];
                    case 1: return [2 /*return*/, _a.apply(this, [(_b.sent()).indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(idRange))])];
                }
            });
        });
    };
    ATable.prototype.reduce = function (f, thisArgument, valuetype, idtype) {
        return new __WEBPACK_IMPORTED_MODULE_3__internal_MultiTableVector__["a" /* default */](this.root, f, thisArgument, valuetype, idtype);
    };
    ATable.prototype.restore = function (persisted) {
        if (persisted && persisted.f) {
            /* tslint:disable:no-eval */
            return this.reduce(eval(persisted.f), this, persisted.valuetype, persisted.idtype ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__idtype__["resolve"])(persisted.idtype) : undefined);
            /* tslint:enable:no-eval */
        }
        else if (persisted && persisted.range) { //some view onto it
            return this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(persisted.range));
        }
        else {
            return this;
        }
    };
    return ATable;
}(__WEBPACK_IMPORTED_MODULE_2__idtype__["SelectAble"]));

/* harmony default export */ __webpack_exports__["a"] = (ATable);
// circular dependency thus not extractable
/**
 * @internal
 */
var TableView = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](TableView, _super);
    function TableView(root, range) {
        var _this = _super.call(this, root) || this;
        _this.range = range;
        _this.range = range;
        _this.vectors = _this.root.cols(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(range.dim(1))).map(function (v) { return v.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(range.dim(0))); });
        return _this;
    }
    Object.defineProperty(TableView.prototype, "desc", {
        get: function () {
            return this.root.desc;
        },
        enumerable: true,
        configurable: true
    });
    TableView.prototype.persist = function () {
        return {
            root: this.root.persist(),
            range: this.range.toString()
        };
    };
    TableView.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(persisted.range));
        }
        return r;
    };
    TableView.prototype.size = function () {
        return this.range.size(this.root.dim);
    };
    TableView.prototype.at = function (row, col) {
        var inverted = this.range.invert([row, col], this.root.dim);
        return this.root.at(inverted[0], inverted[1]);
    };
    TableView.prototype.col = function (i) {
        return this.vectors[i]; // TODO prevent `<any>` by using `<IVector<any, IValueTypeDesc>>` leads to TS compile errors
    };
    TableView.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).filter(this.vectors, [this.ncol]);
    };
    TableView.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.data(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    TableView.prototype.colData = function (column, range) {
        return this.dataOfColumn(column, range);
    };
    TableView.prototype.dataOfColumn = function (column, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        // since we directly accessing the column by name there is no need for the column part of the range
        var rowRange = this.range.dim(0).preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).dim(0), this.root.dim[0]);
        return this.root.dataOfColumn(column, new __WEBPACK_IMPORTED_MODULE_1__range__["Range"]([rowRange]));
    };
    TableView.prototype.objects = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.objects(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    TableView.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.rows(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    TableView.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.root.rowIds(this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range), this.root.dim));
    };
    TableView.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.rowIds(range);
    };
    TableView.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range);
        if (r.isAll) {
            return this;
        }
        return new TableView(this.root, this.range.preMultiply(r, this.dim));
    };
    Object.defineProperty(TableView.prototype, "idtype", {
        get: function () {
            return this.root.idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableView.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    TableView.prototype.queryView = function (name, args) {
        throw new Error('not implemented');
    };
    return TableView;
}(ATable));



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ITable__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ATable__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__internal_TableVector__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loader__ = __webpack_require__(133);
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["wrapObjects"] = wrapObjects;
/* harmony export (immutable) */ __webpack_exports__["asTableFromArray"] = asTableFromArray;
/* harmony export (immutable) */ __webpack_exports__["asTable"] = asTable;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */









/**
 * root matrix implementation holding the data
 * @internal
 */
var Table = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Table, _super);
    function Table(desc, loader) {
        var _this = _super.call(this, null) || this;
        _this.desc = desc;
        _this.loader = loader;
        // set default column
        desc.columns.forEach(function (col) { return col.column = col.column || col.name; });
        _this.root = _this;
        _this.vectors = desc.columns.map(function (cdesc, i) { return new __WEBPACK_IMPORTED_MODULE_7__internal_TableVector__["a" /* default */](_this, i, cdesc); });
        return _this;
    }
    Object.defineProperty(Table.prototype, "idtype", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(this.desc.idtype || this.desc.rowtype);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.col = function (i) {
        return this.vectors[i]; // TODO prevent `<any>` by using `<TableVector<any, IValueTypeDesc>>` leads to TS compile errors
    };
    Table.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range).filter(this.vectors, [this.ncol]);
    };
    Table.prototype.at = function (row, col) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.colData(this.col(col).column, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(row))];
                    case 1: return [2 /*return*/, (_a.sent())[0]];
                }
            });
        });
    };
    Table.prototype.queryView = function (name, args) {
        return new Table(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loader__["a" /* adapterOne2Two */])(this.loader.view(this.desc, name, args)));
    };
    Table.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.data(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range));
    };
    Table.prototype.colData = function (column, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.dataOfColumn(column, range);
    };
    Table.prototype.dataOfColumn = function (column, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.col(this.desc, column, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range));
    };
    Table.prototype.objects = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.objs(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range));
    };
    Table.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.rows(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range));
    };
    Table.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.rowIds(this.desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range));
    };
    Table.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.rowIds(range);
    };
    Table.prototype.size = function () {
        return this.desc.size;
    };
    Table.prototype.persist = function () {
        return this.desc.id;
    };
    Table.prototype.restore = function (persisted) {
        if (persisted && typeof persisted.col === 'number') {
            return this.col(persisted.col);
        }
        return _super.prototype.restore.call(this, persisted);
    };
    return Table;
}(__WEBPACK_IMPORTED_MODULE_6__ATable__["a" /* default */]));
/* harmony default export */ __webpack_exports__["default"] = (Table);
/**
 * module entry point for creating a datatype
 * @param desc
 * @param loader
 * @returns {ITable}
 */
function create(desc, loader) {
    if (loader) {
        return new Table(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loader__["a" /* adapterOne2Two */])(loader));
    }
    return new Table(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loader__["b" /* viaAPI2Loader */])());
}
function wrapObjects(desc, data, nameProperty) {
    return new Table(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loader__["a" /* adapterOne2Two */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loader__["c" /* viaDataLoader */])(data, nameProperty)));
}
function toObjects(data, cols) {
    return data.map(function (row) {
        var r = {};
        cols.forEach(function (col, i) { return r[col] = row[i]; });
        return r;
    });
}
function toList(objs, cols) {
    return objs.map(function (obj) { return cols.map(function (c) { return obj[c]; }); });
}
function asTableImpl(columns, rows, objs, data, options) {
    if (options === void 0) { options = {}; }
    var desc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ITable__["a" /* createDefaultTableDesc */])(), {
        columns: columns,
        size: [rows.length, columns.length]
    }, options);
    var rowAssigner = options.rowassigner || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["createLocalAssigner"])();
    var loader = function () {
        var r = {
            rowIds: rowAssigner(rows),
            rows: rows,
            objs: objs,
            data: data
        };
        return Promise.resolve(r);
    };
    return new Table(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loader__["a" /* adapterOne2Two */])(loader));
}
function asTableFromArray(data, options) {
    if (options === void 0) { options = {}; }
    var rows = data.map(function (r) { return r[0]; });
    var cols = data[0].slice(1);
    var tableData = data.slice(1).map(function (r) { return r.slice(1); });
    var columns = cols.map(function (col, i) {
        return {
            name: col,
            column: col,
            value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["guessValueTypeDesc"])(tableData.map(function (row) { return row[i]; }))
        };
    });
    var realData = tableData.map(function (row) { return columns.map(function (col, i) { return (col.value.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_REAL"] || col.value.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_INT"]) ? parseFloat(row[i]) : row[i]; }); });
    var objs = toObjects(realData, cols);
    return asTableImpl(columns, rows, objs, realData, options);
}
/**
 * Creates a new table from an array of arrays of data and an optional options data structure.
 * TODO: explain the relationship of this function and the "magic" JSON file.
 * @param data
 * @param options TODO - explain what these options are
 * @returns {Table}
 */
function asTable(data, options) {
    if (options === void 0) { options = {}; }
    var keyProperty = options.keyProperty || '_id';
    var rows = data.map(function (r, i) { return String(r[keyProperty] || i); });
    var cols = Object.keys(data[0]);
    var objs = data;
    var realData = toList(objs, cols);
    var columns = cols.map(function (col, i) {
        return {
            name: col,
            column: col,
            value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["guessValueTypeDesc"])(realData.map(function (row) { return row[i]; }))
        };
    });
    return asTableImpl(columns, rows, objs, realData, options);
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IVector__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AVector__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loader__ = __webpack_require__(139);
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["wrap"] = wrap;
/* harmony export (immutable) */ __webpack_exports__["asVector"] = asVector;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */









/**
 * Base vector implementation holding the data.
 * @internal
 */
var Vector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Vector, _super);
    function Vector(desc, loader) {
        var _this = _super.call(this, null) || this;
        _this.desc = desc;
        _this.loader = loader;
        _this.root = _this;
        return _this;
    }
    Object.defineProperty(Vector.prototype, "valuetype", {
        get: function () {
            return this.desc.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "idtype", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(this.desc.idtype);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * loads all the underlying data in json format
     * TODO: load just needed data and not everything given by the requested range
     * @returns {*}
     */
    Vector.prototype.load = function () {
        return this.loader(this.desc);
    };
    /**
     * access at a specific position
     * @param i
     * @returns {*}
     */
    Vector.prototype.at = function (i) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1: return [2 /*return*/, (_a.sent()).data[i]];
                }
            });
        });
    };
    Vector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var data, d;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        data = _a.sent();
                        d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range).filter(data.data, this.dim);
                        if ((this.valuetype.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_REAL"] || this.valuetype.type === __WEBPACK_IMPORTED_MODULE_4__datatype__["VALUE_TYPE_INT"])) {
                            return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["mask"])(d, this.valuetype)];
                        }
                        return [2 /*return*/, d];
                }
            });
        });
    };
    Vector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var data;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range).filter(data.rows, this.dim)];
                }
            });
        });
    };
    Vector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var data;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.rowIds.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range), this.dim)];
                }
            });
        });
    };
    Object.defineProperty(Vector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.size = function () {
        return this.desc.size;
    };
    Vector.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    Vector.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    Vector.prototype.persist = function () {
        return this.desc.id;
    };
    return Vector;
}(__WEBPACK_IMPORTED_MODULE_6__AVector__["b" /* default */]));
/* harmony default export */ __webpack_exports__["default"] = (Vector);
/**
 * module entry point for creating a datatype
 * @internal
 * @param desc
 * @returns {IVector}
 */
function create(desc) {
    if (typeof (desc.loader) === 'function') {
        return new Vector(desc, desc.loader);
    }
    return new Vector(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__loader__["a" /* viaAPILoader */])());
}
function wrap(desc, rows, rowIds, data) {
    return new Vector(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__loader__["b" /* viaDataLoader */])(rows, rowIds, data));
}
function asVector(rows, data, options) {
    if (options === void 0) { options = {}; }
    var desc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__IVector__["a" /* createDefaultVectorDesc */])(), {
        size: data.length,
        value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["guessValueTypeDesc"])(data)
    }, options);
    var rowAssigner = options.rowassigner || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["createLocalAssigner"])();
    return new Vector(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__loader__["b" /* viaDataLoader */])(rows, rowAssigner(rows), data));
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

/**
 * generates and object that contain all modules in the src folder accessible as properties
 */

/**
 * magic file name for the pseudo root file
 * @type {string}
 */
var INDEX_FILE = './index.ts';
/**
 * sorts the given filename by name ensuring INDEX is the first one
 * @param a
 * @param b
 * @returns {number}
 */
function byName(a, b) {
  if (a === INDEX_FILE) {
    return a === b ? 0 : -1;
  }
  if (b === INDEX_FILE) {
    return 1;
  }
  return a.toLowerCase().localeCompare(b.toLowerCase());
}
// list all modules in the src folder excluding the one starting with _
var req = __webpack_require__(143);

var files = req.keys().sort(byName);

// root file exists? else use anonymous root object
if (files[0] === INDEX_FILE) {
  module.exports = req(files.shift());
} else {
  module.exports = {};
}

// generate getter for all modules
files.forEach(function (f) {
  Object.defineProperty(module.exports, f.substring(2, f.lastIndexOf('/index.') > 0 ? f.lastIndexOf('/index.') : f.lastIndexOf('.')), {
    get: function () {
      return req(f);
    },
    enumerable: true
  });
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "buildInfo.json";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "phoveaMetaData.json";

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_phovea__ = __webpack_require__(55);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */



/**
 * build a registry by registering all phovea modules
 */
//other modules

//self
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_plugin__["register"])('phovea_core',__WEBPACK_IMPORTED_MODULE_1__src_phovea__["default"]);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayWithHoles;
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayWithoutHoles;
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _classCallCheck;
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _createClass;
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _defineProperty;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _getPrototypeOf;
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setPrototypeOf__ = __webpack_require__(88);
/* harmony export (immutable) */ __webpack_exports__["a"] = _inherits;

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__setPrototypeOf__["a" /* default */])(subClass, superClass);
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _iterableToArray;
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _iterableToArrayLimit;
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _nonIterableRest;
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _nonIterableSpread;
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty__ = __webpack_require__(79);
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectSpread;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defineProperty__["a" /* default */])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_esm_typeof__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assertThisInitialized__ = __webpack_require__(38);
/* harmony export (immutable) */ __webpack_exports__["a"] = _possibleConstructorReturn;


function _possibleConstructorReturn(self, call) {
  if (call && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_esm_typeof__["a" /* default */])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assertThisInitialized__["a" /* default */])(self);
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _setPrototypeOf;
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayWithHoles__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterableToArrayLimit__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nonIterableRest__ = __webpack_require__(84);
/* harmony export (immutable) */ __webpack_exports__["a"] = _slicedToArray;



function _slicedToArray(arr, i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayWithHoles__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterableToArrayLimit__["a" /* default */])(arr, i) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nonIterableRest__["a" /* default */])();
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayWithoutHoles__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterableToArray__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nonIterableSpread__ = __webpack_require__(85);
/* harmony export (immutable) */ __webpack_exports__["a"] = _toConsumableArray;



function _toConsumableArray(arr) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayWithoutHoles__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterableToArray__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nonIterableSpread__["a" /* default */])();
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(4);
/* unused harmony export AAtom */
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */



/**
 * base class for different Atom implementations
 * @internal
 */
var AAtom = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AAtom, _super);
    function AAtom(desc) {
        var _this = _super.call(this) || this;
        _this.desc = desc;
        return _this;
    }
    Object.defineProperty(AAtom.prototype, "dim", {
        get: function () {
            return [1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AAtom.prototype, "valuetype", {
        get: function () {
            return this.desc.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AAtom.prototype, "idtype", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__idtype__["resolve"])(this.desc.idtype);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AAtom.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    AAtom.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range);
        if (range.isNone) {
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["none"])());
        }
        return this.id();
    };
    AAtom.prototype.idView = function (idRange) {
        return Promise.resolve(this);
    };
    AAtom.prototype.persist = function () {
        return this.desc.id;
    };
    AAtom.prototype.restore = function (persisted) {
        return this;
    };
    return AAtom;
}(__WEBPACK_IMPORTED_MODULE_2__idtype__["SelectAble"]));

/* harmony default export */ __webpack_exports__["a"] = (AAtom);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datatype__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = createDefaultAtomDesc;
/**
 * Created by Samuel Gratzl on 14.02.2017.
 */


function createDefaultAtomDesc() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__datatype__["createDefaultDataDesc"])(), {
        type: 'atom',
        idtype: '_rows',
        value: {
            type: 'string'
        }
    });
}


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Atom__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asAtom", function() { return __WEBPACK_IMPORTED_MODULE_0__Atom__["asAtom"]; });
/**
 * Created by Samuel Gratzl on 14.02.2017.
 */



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomLogic", function() { return ZoomLogic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomBehavior", function() { return ZoomBehavior; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 16.12.2014.
 */


/**
 * utility logic for zooming a vis instance
 */
var ZoomLogic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ZoomLogic, _super);
    function ZoomLogic(v, meta) {
        var _this = _super.call(this) || this;
        _this.v = v;
        _this.meta = meta;
        return _this;
    }
    ZoomLogic.prototype.zoomIn = function () {
        return this.zoom(1, 1);
    };
    ZoomLogic.prototype.zoomOut = function () {
        return this.zoom(-1, -1);
    };
    /**
     * zooms in/out, -1 = zoom out, +1 zoom in, 0 no zoom operation
     * @param zoomX
     * @param zoomY
     * @returns {any}
     */
    ZoomLogic.prototype.zoom = function (zoomX, zoomY) {
        if (!this.v) {
            return null;
        }
        function toDelta(x) {
            return x > 0 ? 0.2 : (x < 0 ? -0.2 : 0);
        }
        var old = this.v.transform();
        var deltaX = toDelta(zoomX);
        var deltaY = toDelta(zoomY);
        return this.zoomSet(old.scale[0] + deltaX, old.scale[1] + deltaY);
    };
    Object.defineProperty(ZoomLogic.prototype, "isWidthFixed", {
        get: function () {
            return (this.meta && this.meta.scaling === 'height-only');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomLogic.prototype, "isHeightFixed", {
        get: function () {
            return (this.meta && this.meta.scaling === 'width-only');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomLogic.prototype, "isFixedAspectRatio", {
        get: function () {
            return (this.meta && this.meta.scaling === 'aspect');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * set specific zoom factors
     * @param zoomX
     * @param zoomY
     * @returns {any}
     */
    ZoomLogic.prototype.zoomSet = function (zoomX, zoomY) {
        if (!this.v) {
            return null;
        }
        var old = this.v.transform();
        var s = [zoomX, zoomY];
        switch ((this.meta ? this.meta.scaling : 'free')) {
            case 'width-only':
                s[1] = old.scale[1];
                break;
            case 'height-only':
                s[0] = old.scale[0];
                break;
        }
        if (s[0] <= 0) {
            s[0] = 0.001;
        }
        if (s[1] <= 0) {
            s[1] = 0.001;
        }
        if ((this.meta && this.meta.scaling === 'aspect')) { //same aspect ratio use min scale
            s[0] = s[1] = Math.min.apply(Math, s);
        }
        this.fire('zoom', {
            scale: s,
            rotate: old.rotate
        }, old);
        return this.v.transform(s, old.rotate);
    };
    /**
     * zooms to a given width and height based on the rawSize of the visualization
     * @param w
     * @param h
     * @returns {any}
     */
    ZoomLogic.prototype.zoomTo = function (w, h) {
        if (!this.v) {
            return null;
        }
        var ori = this.v.rawSize;
        return this.zoomSet(w / ori[0], h / ori[1]);
    };
    return ZoomLogic;
}(__WEBPACK_IMPORTED_MODULE_1__event__["EventHandler"]));

/**
 * addition to ZoomLogic taking care of mouse wheel operations on the vis instance
 */
var ZoomBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ZoomBehavior, _super);
    function ZoomBehavior(node, v, meta) {
        var _this = _super.call(this, v, meta) || this;
        node.addEventListener('mousewheel', function (event) {
            if (!_this.v) {
                return;
            }
            var ctrlKey = event.ctrlKey; //both
            var shiftKey = event.shiftKey; //y
            var altKey = event.altKey; //x
            var m = event.wheelDelta;
            _this.zoom(m * (ctrlKey || altKey ? 1 : 0), m * (ctrlKey || shiftKey ? 1 : 0));
            if (ctrlKey || shiftKey || altKey) {
                event.preventDefault();
            }
        });
        return _this;
    }
    return ZoomBehavior;
}(ZoomLogic));



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_i18next__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extensions__ = __webpack_require__(24);
/* harmony export (immutable) */ __webpack_exports__["initI18n"] = initI18n;




var DEFAULT_LANGUAGE = 'en';
var DEFAULT_NAMESPACE = 'default_namespace';
/**
 * Create a unique i18next instance
 * Thus allowing the existence of multiple i18next instances with different configurations
 * without one overwriting the other
 */
var i18n = __WEBPACK_IMPORTED_MODULE_1_i18next__["a" /* default */].createInstance();
/**
 *  Awaits the translation files registered at the EP_PHOVEA_CORE_LOCALE extension point
 *  Initialize I18next with the translation files
 */
function initI18n() {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
        var plugins;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__plugin__["list"])(__WEBPACK_IMPORTED_MODULE_3__extensions__["EP_PHOVEA_CORE_LOCALE"]).map(function (pluginDesc) {
                        return pluginDesc.load().then(function (locale) {
                            return {
                                lng: pluginDesc.lng || DEFAULT_LANGUAGE,
                                ns: pluginDesc.ns || DEFAULT_NAMESPACE,
                                resources: locale.factory(),
                                order: pluginDesc.order || 0
                            };
                        });
                    }))];
                case 1:
                    plugins = _a.sent();
                    return [2 /*return*/, i18n
                            .use({
                            type: 'postProcessor',
                            name: 'showKeyDebugger',
                            process: function (value, key, option, translator) { return translator.options.debug ? key : value; }
                        })
                            .init({
                            debug: false,
                            appendNamespaceToCIMode: true,
                            interpolation: {
                                escapeValue: true,
                                format: function (value, format) {
                                    if (format === 'uppercase') {
                                        return value.toUpperCase();
                                    }
                                    if (format === 'lowercase') {
                                        return value.toLowerCase();
                                    }
                                    return value;
                                }
                            },
                            ns: DEFAULT_NAMESPACE,
                            defaultNS: DEFAULT_NAMESPACE,
                            lng: DEFAULT_LANGUAGE,
                            fallbackLng: DEFAULT_LANGUAGE,
                            postProcess: ['showKeyDebugger']
                        })
                            .then(function () {
                            /* For each plugin add the resources to the i18next configuration
                               If plugins have same language and namespace the  one with greater order
                               overwrites the others
                            */
                            plugins.sort(function (pluginA, pluginB) { return pluginA.order - pluginB.order; }).forEach(function (plugin) {
                                i18n.addResourceBundle(plugin.lng, plugin.ns, plugin.resources, true, true);
                            });
                        })];
            }
        });
    });
}
/* harmony default export */ __webpack_exports__["default"] = (i18n);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["b"] = createLocalAssigner;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */


var LocalIDAssigner = /** @class */ (function () {
    function LocalIDAssigner() {
        this.pool = new __WEBPACK_IMPORTED_MODULE_0__index__["IdPool"]();
        this.lookup = new Map();
    }
    LocalIDAssigner.prototype.unmapOne = function (id) {
        return this.unmap([id])[0];
    };
    LocalIDAssigner.prototype.unmap = function (ids) {
        var _this = this;
        var keys = Object.keys(this.lookup);
        return ids.map(function (id) {
            for (var k in keys) {
                if (_this.lookup.get(k) === id) {
                    return k;
                }
            }
            return null;
        });
    };
    LocalIDAssigner.prototype.mapOne = function (id) {
        if (this.lookup.has(id)) {
            return this.lookup.get(id);
        }
        this.lookup.set(id, this.pool.checkOut());
        return this.lookup.get(id);
    };
    LocalIDAssigner.prototype.map = function (ids) {
        var _this = this;
        var numbers = ids.map(function (d) { return _this.mapOne(d); });
        return __WEBPACK_IMPORTED_MODULE_1__range__["list"].apply(void 0, numbers);
    };
    return LocalIDAssigner;
}());
/* harmony default export */ __webpack_exports__["a"] = (LocalIDAssigner);
function createLocalAssigner() {
    var r = new LocalIDAssigner();
    return r.map.bind(r);
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IIDType__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IDType__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["c"] = toId;
/* harmony export (immutable) */ __webpack_exports__["b"] = isId;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */




function toId(elem) {
    return elem.id;
}
function isId(id) {
    return function (elem) { return elem && elem.id === id; };
}
/**
 * IDType with an actual collection of entities.
 * Supports selections.
 */
var ObjectManager = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ObjectManager, _super);
    function ObjectManager(id, name) {
        var _this = _super.call(this, id, name, name + 's', true) || this;
        _this.instances = [];
        _this.pool = new __WEBPACK_IMPORTED_MODULE_1__index__["IdPool"]();
        return _this;
    }
    ObjectManager.prototype.nextId = function (item) {
        var n = this.pool.checkOut();
        if (item) {
            item.id = n;
            this.instances[n] = item;
            this.fire('add', n, item);
        }
        return n;
    };
    ObjectManager.prototype.push = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        items.forEach(function (item) {
            _this.instances[item.id] = item;
            _this.fire('add', item.id, item);
        });
    };
    ObjectManager.prototype.byId = function (id) {
        return this.instances[id];
    };
    ObjectManager.prototype.forEach = function (callbackfn, thisArg) {
        var _this = this;
        this.instances.forEach(function (item, i) { return _this.pool.isCheckedOut(i) ? callbackfn.call(thisArg, item) : null; });
    };
    Object.defineProperty(ObjectManager.prototype, "entries", {
        get: function () {
            var _this = this;
            return this.instances.filter(function (item, i) { return _this.pool.isCheckedOut(i); });
        },
        enumerable: true,
        configurable: true
    });
    ObjectManager.prototype.remove = function (item) {
        var _this = this;
        var old = null;
        if (typeof item.id === 'number') {
            item = item.id;
        }
        if (typeof item === 'number') {
            old = this.instances[item];
            delete this.instances[item];
            this.fire('remove', item, old);
        }
        //clear from selections
        this.selectionTypes().forEach(function (type) {
            _this.select(type, [item], __WEBPACK_IMPORTED_MODULE_2__IIDType__["c" /* SelectOperation */].REMOVE);
        });
        this.pool.checkIn(item);
        return old;
    };
    ObjectManager.prototype.selectedObjects = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_2__IIDType__["a" /* defaultSelectionType */]; }
        var s = this.selections(type);
        return s.filter(this.instances);
    };
    return ObjectManager;
}(__WEBPACK_IMPORTED_MODULE_3__IDType__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (ObjectManager);


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */
/**
 * utility class for handling a bunch of reuseable ids
 */
var IdPool = /** @class */ (function () {
    function IdPool() {
        this.counter = 0;
        this.free = [];
    }
    /**
     * check out a new id
     * @return {*}
     */
    IdPool.prototype.checkOut = function () {
        if (this.free.length === 0) { //no more cached
            return this.counter++;
        }
        else {
            return this.free.shift();
        }
    };
    /**
     * returns an id again
     * @param id
     */
    IdPool.prototype.checkIn = function (id) {
        //returned the last one, can decrease the counter
        if (id === this.counter - 1) {
            this.counter--;
        }
        else {
            this.free.push(id);
        }
    };
    /**
     * whether the given id is used
     * @param id
     * @return {boolean}
     */
    IdPool.prototype.isCheckedOut = function (id) {
        //smaller than counter and not a free one
        return id < this.counter && this.free.indexOf(id) < 0;
    };
    Object.defineProperty(IdPool.prototype, "size", {
        /**
         * return the number of checked out ids
         * @return {number}
         */
        get: function () {
            return this.counter - this.free.length;
        },
        enumerable: true,
        configurable: true
    });
    return IdPool;
}());
/* harmony default export */ __webpack_exports__["a"] = (IdPool);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Samuel Gratzl on 20.06.2017.
 */
var RemoveParentObserver = /** @class */ (function () {
    function RemoveParentObserver(parent) {
        var _this = this;
        this.parent = parent;
        this.observer = new MutationObserver(function (events) { return _this.onChange(events); });
        this.observed = new Map();
        this.enabled = false;
    }
    RemoveParentObserver.prototype.enable = function () {
        this.enabled = true;
        this.observer.observe(this.parent, { childList: true, subtree: true });
    };
    RemoveParentObserver.prototype.disable = function () {
        this.enabled = false;
        this.observer.disconnect();
    };
    RemoveParentObserver.prototype.onChange = function (mutations) {
        var _this = this;
        //just remove events
        var events = mutations.filter(function (mutation) { return mutation.type === 'childList' && mutation.removedNodes.length > 0; });
        if (events.length === 0 || this.observed.size === 0) {
            return;
        }
        //build cache - create the list of parents all the time new to consider moving nodes?
        var toCheck = Array.from(this.observed.entries()).map(function (_a) {
            var node = _a[0], callback = _a[1];
            return { node: node, callback: callback, parents: parentList(node) };
        });
        var cleanUp = function (found) {
            if (toCheck.length === found.length) {
                //did we disable all? then we can stop early
                _this.observed.clear();
                _this.disable();
                return true;
            }
            // delete found ones and remove from toCheck list for the remaining events
            found.forEach(function (fi) {
                var entry = toCheck.splice(fi, 1)[0];
                _this.observed.delete(entry.node);
            });
            return false;
        };
        //optimization if the parents of any child doesn't contain the parent anymore it was already removed
        {
            //mark already found entries
            var found_1 = [];
            toCheck.forEach(function (_a, i) {
                var node = _a.node, parents = _a.parents, callback = _a.callback;
                if (parents.indexOf(_this.parent) < 0) {
                    //doesn't contain my parent anymore -> will never be found -> deleted
                    callback(node);
                    found_1.unshift(i); //mark for removal - reverse order for simpler splicing
                }
            });
            if (cleanUp(found_1)) {
                return;
            }
        }
        var _loop_1 = function (mutation) {
            var target = mutation.target;
            var removed = new Set(Array.from(mutation.removedNodes));
            //mark already found entries
            var found = [];
            toCheck.forEach(function (_a, i) {
                var node = _a.node, callback = _a.callback, parents = _a.parents;
                var index = parents.indexOf(target);
                if (index < 0) { //none of my parents were changed
                    return;
                }
                // child to watch for removing
                var child = parents[index + 1];
                if (removed.has(child)) {
                    //me or one of my parents were removed
                    callback(node);
                    found.unshift(i); //mark for removal - reverse order for simpler splicing
                }
            });
            if (cleanUp(found)) {
                return { value: void 0 };
            }
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var mutation = events_1[_i];
            var state_1 = _loop_1(mutation);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    RemoveParentObserver.prototype.observe = function (node, callback, thisArg) {
        this.observed.set(node, callback.bind(thisArg));
        if (!this.enabled) {
            this.enable();
        }
    };
    return RemoveParentObserver;
}());
/**
 * the parents of the given node (including itself) from root to leaf
 * @param node
 * @return {Node[]}
 */
function parentList(node) {
    var result = [];
    var parent = node;
    while (parent) {
        result.push(parent);
        parent = parent.parentNode;
    }
    // from top to bottom
    return result.reverse();
}
var RemoveNodeObserver = /** @class */ (function () {
    function RemoveNodeObserver() {
        //weak since if the root is gone anyhow, we don't care about its listener
        this.documents = new WeakMap();
    }
    RemoveNodeObserver.prototype.observe = function (node, callback, thisArg) {
        //use body as root element
        var document = node.ownerDocument.body;
        var observer = this.documents.get(document);
        if (!observer) {
            observer = new RemoveParentObserver(document);
            this.documents.set(document, observer);
        }
        observer.observe(node, callback, thisArg);
    };
    return RemoveNodeObserver;
}());
/* harmony default export */ __webpack_exports__["a"] = (RemoveNodeObserver);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = search;
/* harmony export (immutable) */ __webpack_exports__["d"] = indexOf;
/* harmony export (immutable) */ __webpack_exports__["b"] = argList;
/* harmony export (immutable) */ __webpack_exports__["c"] = argSort;
/* harmony export (immutable) */ __webpack_exports__["a"] = argFilter;
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */
/**
 * search item in array by function
 * @param arr
 * @param f
 * @deprecated use Array.prototype.find
 * @return {T}
 */
function search(arr, f) {
    var r = undefined;
    arr.some(function (v) {
        if (f(v)) {
            r = v;
            return true;
        }
        return false;
    });
    return r;
}
/**
 *
 * @deprecated use Array.prototype.findIndex
 * @param arr
 * @param f
 * @return {number}
 */
function indexOf(arr, f) {
    var r = -1;
    arr.some(function (v, i) {
        if (f(v)) {
            r = i;
            return true;
        }
        return false;
    });
    return r;
}
/**
 * converts the given arguments object into an array
 * @param args
 * @deprecated use Array.from(arguments) instead
 * @internal
 * @returns {*|Array}
 */
function argList(args) {
    if (arguments.length > 1) {
        return Array.prototype.slice.call(arguments);
    }
    else {
        return Array.prototype.slice.call(args);
    }
}
/**
 * array with indices of 0...n-1
 * @param n
 * @returns {any[]}
 */
function indexRange(n) {
    //http://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
    return Array.apply(null, { length: n }).map(Number.call, Number);
}
/**
 * returns the sorted indices of this array, when sorting by the given function
 * @param arr
 * @param compareFn
 * @param thisArg
 */
function argSort(arr, compareFn, thisArg) {
    var indices = indexRange(arr.length);
    return indices.sort(function (a, b) {
        return compareFn.call(thisArg, arr[a], arr[b]);
    });
}
/**
 * returns the indices, which remain when filtering the given array
 * @param arr
 * @param callbackfn
 * @param thisArg
 */
function argFilter(arr, callbackfn, thisArg) {
    var indices = indexRange(arr.length);
    return indices.filter(function (value, index) {
        return callbackfn.call(thisArg, arr[value], index);
    });
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unique__ = __webpack_require__(51);
/* harmony export (immutable) */ __webpack_exports__["b"] = hasDnDType;
/* harmony export (immutable) */ __webpack_exports__["a"] = copyDnD;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateDropEffect;
/* harmony export (immutable) */ __webpack_exports__["d"] = dragAble;
/* harmony export (immutable) */ __webpack_exports__["e"] = dropAble;
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */

/**
 * utility for drag-n-drop support
 * @param e
 * @param typesToCheck
 * @returns {any}
 */
function hasDnDType(e) {
    var typesToCheck = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        typesToCheck[_i - 1] = arguments[_i];
    }
    var available = e.dataTransfer.types;
    /*
     * In Chrome datatransfer.types is an Array,
     * while in Firefox it is a DOMStringList
     * that only implements a contains-method!
     */
    if (typeof available.indexOf === 'function') {
        return typesToCheck.some(function (type) { return available.indexOf(type) >= 0; });
    }
    if (typeof available.includes === 'function') {
        return typesToCheck.some(function (type) { return available.includes(type); });
    }
    if (typeof available.contains === 'function') {
        return typesToCheck.some(function (type) { return available.contains(type); });
    }
    return false;
}
/**
 * helper storage for dnd in edge since edge doesn't support custom mime-types
 * @type {Map<number, {[p: string]: string}>}
 */
var dndTransferStorage = new Map();
function isEdgeDnD(e) {
    return dndTransferStorage.size > 0 && hasDnDType(e, 'text/plain');
}
/**
 * checks whether it is a copy operation
 * @param e
 * @returns {boolean|RegExpMatchArray}
 */
function copyDnD(e) {
    var dT = e.dataTransfer;
    return Boolean((e.ctrlKey && dT.effectAllowed.match(/copy/gi)) || (!dT.effectAllowed.match(/move/gi)));
}
/**
 * updates the drop effect accoriding to the current copyDnD state
 * @param e
 */
function updateDropEffect(e) {
    var dT = e.dataTransfer;
    if (copyDnD(e)) {
        dT.dropEffect = 'copy';
    }
    else {
        dT.dropEffect = 'move';
    }
}
/**
 * add drag support for the given element
 * @param {HTMLElement} node
 * @param {() => IDragStartResult} onDragStart callback to compute the payload an object of mime types
 * @param {boolean} stopPropagation whether to stop propagation in case of success
 */
function dragAble(node, onDragStart, stopPropagation) {
    if (stopPropagation === void 0) { stopPropagation = false; }
    var id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__unique__["b" /* uniqueId */])('edgeDragHelper');
    node.draggable = true;
    node.addEventListener('dragstart', function (e) {
        node.classList.add('phovea-dragging');
        var payload = onDragStart();
        e.dataTransfer.effectAllowed = payload.effectAllowed;
        if (stopPropagation) {
            e.stopPropagation();
        }
        var keys = Object.keys(payload.data);
        var allSucceded = keys.every(function (k) {
            try {
                e.dataTransfer.setData(k, payload.data[k]);
                return true;
            }
            catch (e) {
                return false;
            }
        });
        if (allSucceded) {
            return;
        }
        //compatibility mode for edge
        var text = payload.data['text/plain'] || '';
        e.dataTransfer.setData('text/plain', "" + id + (text ? ": " + text : ''));
        dndTransferStorage.set(id, payload.data);
    });
    node.addEventListener('dragend', function (e) {
        node.classList.remove('phovea-dragging');
        if (stopPropagation) {
            e.stopPropagation();
        }
        if (dndTransferStorage.size > 0) {
            //clear the id
            dndTransferStorage.delete(id);
        }
    });
    node.addEventListener('dragexit', function (e) {
        node.classList.remove('phovea-dragging');
        if (stopPropagation) {
            e.stopPropagation();
        }
    });
}
/**
 * add dropable support for the given node
 * @param {HTMLElement} node
 * @param {string[]} mimeTypes mimeTypes to look for
 * @param {(result: IDropResult, e: DragEvent) => boolean} onDrop callback when dropped, returns true if the drop was successful
 * @param {(e: DragEvent) => void} onDragOver optional drag over handler, e.g. for special effects
 * @param {boolean} stopPropagation flag if the event propagation should be stopped in case of success
 */
function dropAble(node, mimeTypes, onDrop, onDragOver, stopPropagation) {
    if (onDragOver === void 0) { onDragOver = null; }
    if (stopPropagation === void 0) { stopPropagation = false; }
    node.addEventListener('dragenter', function (e) {
        //var xy = mouse($node.node());
        if (hasDnDType.apply(void 0, [e].concat(mimeTypes)) || isEdgeDnD(e)) {
            node.classList.add('phovea-dragover');
            if (stopPropagation) {
                e.stopPropagation();
            }
            //sounds good
            return false;
        }
        //not a valid mime type
        node.classList.remove('phovea-dragover');
        return;
    });
    node.addEventListener('dragover', function (e) {
        if (hasDnDType.apply(void 0, [e].concat(mimeTypes)) || isEdgeDnD(e)) {
            e.preventDefault();
            updateDropEffect(e);
            node.classList.add('phovea-dragover');
            if (stopPropagation) {
                e.stopPropagation();
            }
            if (onDragOver) {
                onDragOver(e);
            }
            //sound good
            return false;
        }
        return;
    });
    node.addEventListener('dragleave', function (evt) {
        evt.target.classList.remove('phovea-dragover');
    });
    node.addEventListener('drop', function (e) {
        e.preventDefault();
        if (stopPropagation) {
            e.stopPropagation();
        }
        var effect = e.dataTransfer.effectAllowed;
        node.classList.remove('phovea-dragover');
        {
            var cleanup = node.ownerDocument.querySelector('.phovea-dragging');
            if (cleanup) {
                cleanup.classList.remove('phovea-dragging');
            }
        }
        if (isEdgeDnD(e)) {
            var base = e.dataTransfer.getData('text/plain');
            var id = parseInt(base.indexOf(':') >= 0 ? base.substring(0, base.indexOf(':')) : base, 10);
            if (dndTransferStorage.has(id)) {
                var data = dndTransferStorage.get(id);
                dndTransferStorage.delete(id);
                return !onDrop({ effect: effect, data: data }, e);
            }
            return;
        }
        if (hasDnDType.apply(void 0, [e].concat(mimeTypes))) {
            var data_1 = {};
            //selects the data contained in the data transfer
            mimeTypes.forEach(function (mime) {
                var value = e.dataTransfer.getData(mime);
                if (value !== '') {
                    data_1[mime] = value;
                }
            });
            return !onDrop({ effect: effect, data: data_1 }, e);
        }
        return;
    });
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geom__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALayoutElem", function() { return ALayoutElem; });
/* harmony export (immutable) */ __webpack_exports__["wrapDOM"] = wrapDOM;
/* harmony export (immutable) */ __webpack_exports__["padding"] = padding;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noPadding", function() { return noPadding; });
/* harmony export (immutable) */ __webpack_exports__["layers"] = layers;
/* harmony export (immutable) */ __webpack_exports__["flowLayout"] = flowLayout;
/* harmony export (immutable) */ __webpack_exports__["distributeLayout"] = distributeLayout;
/* harmony export (immutable) */ __webpack_exports__["borderLayout"] = borderLayout;

/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 15.12.2014.
 */

var ALayoutElem = /** @class */ (function () {
    function ALayoutElem(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
    }
    ALayoutElem.prototype.getBounds = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__geom__["rect"])(0, 0, 0, 0);
    };
    ALayoutElem.prototype.getLocation = function () {
        return this.getBounds().xy;
    };
    ALayoutElem.prototype.getSize = function () {
        return this.getBounds().size;
    };
    ALayoutElem.prototype.layoutOption = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (this.options.hasOwnProperty(name)) {
            return this.options[name];
        }
        return defaultValue;
    };
    return ALayoutElem;
}());

var HTMLLayoutElem = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HTMLLayoutElem, _super);
    function HTMLLayoutElem(node, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.node = node;
        return _this;
    }
    HTMLLayoutElem.prototype.setBounds = function (x, y, w, h) {
        var unit = this.layoutOption('unit', 'px'), style = this.node.style;
        style.left = x + unit;
        style.top = y + unit;
        style.width = w + unit;
        style.height = h + unit;
        return null;
    };
    HTMLLayoutElem.prototype.getBounds = function () {
        var unit = this.layoutOption('unit', 'px'), style = this.node.style;
        function v(f) {
            if (f.length >= unit.length && f.substring(f.length - unit.length) === unit) {
                f = f.substring(0, f.length - unit.length);
                return parseFloat(f);
            }
            return 0;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__geom__["rect"])(v(style.left), v(style.top), v(style.width), v(style.height));
    };
    return HTMLLayoutElem;
}(ALayoutElem));
function wrapDOM(node, options) {
    if (options === void 0) { options = {}; }
    return new HTMLLayoutElem(node, options);
}
function padding(v) {
    return { top: v, left: v, right: v, bottom: v };
}
var noPadding = padding(0);
function isDefault(v) {
    return v < 0 || isNaN(v);
}
function grab(definition, v) {
    return isDefault(definition) ? v : definition;
}
function waitFor(promises, redo) {
    if (redo === void 0) { redo = false; }
    promises = promises.filter(function (p) { return p != null; });
    if (promises.length === 0) {
        return Promise.resolve(redo);
    }
    else if (promises.length === 1) {
        return promises[0].then(function () { return redo; });
    }
    return Promise.all(promises).then(function () { return redo; });
}
function layers(elems, w, h, parent) {
    return waitFor(elems.map(function (elem) {
        var x = grab(elem.layoutOption('prefX', Number.NaN), 0);
        var y = grab(elem.layoutOption('prefY', Number.NaN), 0);
        return elem.setBounds(x, y, w - x, h - y);
    }));
}
function flowLayout(horizontal, gap, padding) {
    if (padding === void 0) { padding = { top: 0, left: 0, right: 0, bottom: 0 }; }
    function getSize(w, h, child, value) {
        if (horizontal) {
            return [value, grab(child.layoutOption('prefHeight', Number.NaN), h)];
        }
        else {
            return [grab(child.layoutOption('prefWidth', Number.NaN), w), value];
        }
    }
    function FlowLayout(elems, w, h, parent) {
        w -= padding.left + padding.right;
        h -= padding.top + padding.bottom;
        var freeSpace = (horizontal ? w : h) - gap * (elems.length - 1);
        var unbound = 0, fixUsed = 0, ratioSum = 0;
        // count statistics
        elems.forEach(function (elem) {
            var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
            var ratio = elem.layoutOption('ratio', Number.NaN);
            if (isDefault(fix) && isDefault(ratio)) {
                unbound++;
            }
            else if (fix >= 0) {
                fixUsed += fix;
            }
            else {
                ratioSum += ratio;
            }
        });
        var ratioMax = (ratioSum < 1) ? 1 : ratioSum;
        var unboundedSpace = (freeSpace - fixUsed - freeSpace * ratioSum / ratioMax) / unbound;
        // set all sizes
        var sizes = elems.map(function (elem) {
            var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
            var ratio = elem.layoutOption('ratio', Number.NaN);
            if (isDefault(fix) && isDefault(ratio)) {
                return getSize(w, h, elem, unboundedSpace);
            }
            else if (fix >= 0) {
                return getSize(w, h, elem, fix);
            }
            else { // (ratio > 0)
                var value = (ratio / ratioMax) * freeSpace;
                return getSize(w, h, elem, value);
            }
        });
        // set all locations
        var xAccumulator = padding.left;
        var yAccumulator = padding.top;
        var promises = [];
        elems.forEach(function (elem, i) {
            var s = sizes[i];
            promises.push(elem.setBounds(xAccumulator, yAccumulator, s[0], s[1]));
            if (horizontal) {
                xAccumulator += s[0] + gap;
            }
            else {
                yAccumulator += s[1] + gap;
            }
        });
        return waitFor(promises);
    }
    return FlowLayout;
}
function distributeLayout(horizontal, defaultValue, padding) {
    if (padding === void 0) { padding = noPadding; }
    function setBounds(x, y, w, h, child, value) {
        if (horizontal) {
            return child.setBounds(x, y, value, grab(child.layoutOption('prefHeight', Number.NaN), h));
        }
        else {
            return child.setBounds(x, y, grab(child.layoutOption('prefWidth', Number.NaN), w), value);
        }
    }
    function DistributeLayout(elems, w, h, parent) {
        w -= padding.left + padding.right;
        h -= padding.top + padding.bottom;
        var freeSpace = (horizontal ? w : h);
        var fixUsed = 0;
        // count statistics
        elems.forEach(function (elem) {
            var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
            if (isDefault(fix)) {
                fix = defaultValue;
            }
            fixUsed += fix;
        });
        var gap = (freeSpace - fixUsed) / (elems.length - 1);
        var xAccumulator = padding.left;
        var yAccumulator = padding.top;
        if (elems.length === 1) { //center the single one
            if (horizontal) {
                xAccumulator += (freeSpace - fixUsed) / 2;
            }
            else {
                yAccumulator += (freeSpace - fixUsed) / 2;
            }
        }
        var promises = [];
        elems.forEach(function (elem) {
            var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
            if (isDefault(fix)) {
                fix = defaultValue;
            }
            promises.push(setBounds(xAccumulator, yAccumulator, w, h, elem, fix));
            if (horizontal) {
                xAccumulator += fix + gap;
            }
            else {
                yAccumulator += fix + gap;
            }
        });
        return waitFor(promises);
    }
    return DistributeLayout;
}
//     top
//------------
// l |      | r
// e |      | i
// f |center| g
// t |      | h
//   |      | t
//-------------
//   bottom
function borderLayout(horizontal, gap, percentages, padding) {
    if (percentages === void 0) { percentages = {
        top: 0.2,
        left: 0.2,
        right: 0.2,
        bottom: 0.2
    }; }
    if (padding === void 0) { padding = noPadding; }
    function BorderLayout(elems, w, h, parent) {
        w -= padding.left + padding.right;
        h -= padding.top + padding.bottom;
        var x = padding.top, y = padding.left, wc = w, hc = h;
        var pos = new Map();
        pos.set('top', []);
        pos.set('center', []);
        pos.set('left', []);
        pos.set('right', []);
        pos.set('bottom', []);
        elems.forEach(function (elem) {
            var border = elem.layoutOption('border', 'center');
            if (!pos.has(border)) {
                border = 'center'; //invalid one
            }
            pos.get(border).push(elem);
        });
        var promises = [];
        if (pos.get('top').length > 0) {
            y += h * percentages.top;
            hc -= h * percentages.top;
            promises.push(flowLayout(true, gap)(pos.get('top'), w, h * percentages.top, parent));
        }
        if (pos.get('bottom').length > 0) {
            hc -= h * percentages.bottom;
            promises.push(flowLayout(true, gap)(pos.get('bottom'), w, h * percentages.bottom, parent));
        }
        if (pos.get('left').length > 0) {
            x += w * percentages.left;
            wc -= w * percentages.left;
            promises.push(flowLayout(false, gap)(pos.get('left'), w * percentages.left, hc, parent));
        }
        if (pos.get('right').length > 0) {
            wc -= w * percentages.right;
            promises.push(flowLayout(false, gap)(pos.get('right'), w * percentages.right, hc, parent));
        }
        if (pos.get('center').length > 0) {
            promises.push(flowLayout(true, gap)(pos.get('center'), wc, hc, parent));
        }
        return waitFor(promises);
    }
    return BorderLayout;
}


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AView", function() { return AView; });
/* harmony export (immutable) */ __webpack_exports__["list"] = list;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by sam on 25.02.2015.
 */



var AView = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AView, _super);
    function AView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._layoutOptions = {};
        return _this;
    }
    Object.defineProperty(AView.prototype, "data", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AView.prototype, "idtypes", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    AView.prototype.setLayoutOption = function (name, value) {
        this._layoutOptions[name] = value;
    };
    AView.prototype.layoutOption = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (this._layoutOptions.hasOwnProperty(name)) {
            return this._layoutOptions[name];
        }
        return defaultValue;
    };
    return AView;
}(__WEBPACK_IMPORTED_MODULE_2__event__["EventHandler"]));

function convertDesc(desc) {
    var d = desc;
    d.type = d.type || 'main';
    d.location = d.location || 'center';
    return d;
}
function list() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__plugin__["list"])('view').map(convertDesc);
}


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IMatrix__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IDTYPE_CELL", function() { return __WEBPACK_IMPORTED_MODULE_0__IMatrix__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IDTYPE_COLUMN", function() { return __WEBPACK_IMPORTED_MODULE_0__IMatrix__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IDTYPE_ROW", function() { return __WEBPACK_IMPORTED_MODULE_0__IMatrix__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Matrix__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asMatrix", function() { return __WEBPACK_IMPORTED_MODULE_1__Matrix__["asMatrix"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_MatrixColumnNameVector__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asColumnNameVector", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_MatrixColumnNameVector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_MatrixRowNameVector__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asRowNameVector", function() { return __WEBPACK_IMPORTED_MODULE_3__internal_MatrixRowNameVector__["a"]; });
/**
 * Created by sam on 26.12.2016.
 */






/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector_internal_ANameVector__ = __webpack_require__(23);
/* harmony export (immutable) */ __webpack_exports__["a"] = asNameVector;



var MatrixColumnNameVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixColumnNameVector, _super);
    function MatrixColumnNameVector(matrix) {
        var _this = _super.call(this, matrix) || this;
        _this.root = _this;
        return _this;
    }
    Object.defineProperty(MatrixColumnNameVector.prototype, "idtype", {
        get: function () {
            return this.base.coltype;
        },
        enumerable: true,
        configurable: true
    });
    MatrixColumnNameVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.cols(range);
    };
    MatrixColumnNameVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.colIds(range);
    };
    MatrixColumnNameVector.prototype.size = function () {
        return this.base.ncol;
    };
    MatrixColumnNameVector.prototype.persist = function () {
        return {
            root: this.base.persist(),
            names: 'column'
        };
    };
    return MatrixColumnNameVector;
}(__WEBPACK_IMPORTED_MODULE_2__vector_internal_ANameVector__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (MatrixColumnNameVector);
/**
 * converts the cols of the given matrix as a string vector
 * @param matrix
 * @return {IStringVector}
 */
function asNameVector(matrix) {
    return new MatrixColumnNameVector(matrix);
}


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector_internal_ANameVector__ = __webpack_require__(23);
/* harmony export (immutable) */ __webpack_exports__["a"] = asNameVector;



var MatrixRowNameVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixRowNameVector, _super);
    function MatrixRowNameVector(matrix) {
        var _this = _super.call(this, matrix) || this;
        _this.root = _this;
        return _this;
    }
    Object.defineProperty(MatrixRowNameVector.prototype, "idtype", {
        get: function () {
            return this.base.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    MatrixRowNameVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.rows(range);
    };
    MatrixRowNameVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.rowIds(range);
    };
    MatrixRowNameVector.prototype.size = function () {
        return this.base.nrow;
    };
    MatrixRowNameVector.prototype.persist = function () {
        return {
            root: this.base.persist(),
            names: 'row'
        };
    };
    return MatrixRowNameVector;
}(__WEBPACK_IMPORTED_MODULE_2__vector_internal_ANameVector__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (MatrixRowNameVector);
/**
 * converts the rows of the given matrix as a string vector
 * @param matrix
 * @return {IStringVector}
 */
function asNameVector(matrix) {
    return new MatrixRowNameVector(matrix);
}


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector_AVector__ = __webpack_require__(12);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */




/**
 * a simple projection of a matrix columns to a vector
 */
var ProjectedVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ProjectedVector, _super);
    function ProjectedVector(m, f, thisArgument, valuetype, _idtype) {
        if (thisArgument === void 0) { thisArgument = m; }
        if (valuetype === void 0) { valuetype = m.valuetype; }
        if (_idtype === void 0) { _idtype = m.rowtype; }
        var _this = _super.call(this, null) || this;
        _this.m = m;
        _this.f = f;
        _this.thisArgument = thisArgument;
        _this.valuetype = valuetype;
        _this._idtype = _idtype;
        _this.desc = {
            name: m.desc.name + '-p',
            fqname: m.desc.fqname + '-p',
            type: 'vector',
            id: m.desc.id + '-p',
            size: _this.dim[0],
            idtype: m.rowtype,
            value: _this.valuetype,
            description: m.desc.description,
            creator: m.desc.creator,
            ts: m.desc.ts
        };
        _this.root = _this;
        return _this;
    }
    ProjectedVector.prototype.persist = function () {
        return {
            root: this.m.persist(),
            f: this.f.toString(),
            valuetype: this.valuetype === this.m.valuetype ? undefined : this.valuetype,
            idtype: this.idtype === this.m.rowtype ? undefined : this.idtype.name
        };
    };
    ProjectedVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    Object.defineProperty(ProjectedVector.prototype, "idtype", {
        get: function () {
            return this._idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectedVector.prototype, "idtypes", {
        get: function () {
            return [this._idtype];
        },
        enumerable: true,
        configurable: true
    });
    ProjectedVector.prototype.size = function () {
        return this.m.nrow;
    };
    /**
     * return the associated ids of this vector
     */
    ProjectedVector.prototype.names = function (range) {
        return this.m.rows(range);
    };
    ProjectedVector.prototype.ids = function (range) {
        return this.m.rowIds(range);
    };
    /**
     * returns a promise for getting one cell
     * @param i
     */
    ProjectedVector.prototype.at = function (i) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.m.data(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(i))];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, this.f.call(this.thisArgument, d[0])];
                }
            });
        });
    };
    /**
     * returns a promise for getting the data as two dimensional array
     * @param range
     */
    ProjectedVector.prototype.data = function (range) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.m.data(range)];
                    case 1: return [2 /*return*/, (_a.sent()).map(this.f, this.thisArgument)];
                }
            });
        });
    };
    ProjectedVector.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    ProjectedVector.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    return ProjectedVector;
}(__WEBPACK_IMPORTED_MODULE_3__vector_AVector__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (ProjectedVector);


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector_AVector__ = __webpack_require__(12);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */




/**
 * a simple projection of a matrix columns to a vector
 */
var SliceColVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SliceColVector, _super);
    function SliceColVector(m, col) {
        var _this = _super.call(this, null) || this;
        _this.m = m;
        _this.col = col;
        _this.colRange = __WEBPACK_IMPORTED_MODULE_2__range__["Range1D"].from([_this.col]);
        _this.desc = {
            name: m.desc.name + '-c' + col,
            fqname: m.desc.fqname + '-c' + col,
            id: m.desc.id + '-c' + col,
            type: 'vector',
            idtype: m.rowtype,
            size: m.nrow,
            value: m.valuetype,
            description: m.desc.description,
            creator: m.desc.creator,
            ts: m.desc.ts
        };
        _this.root = _this;
        return _this;
    }
    SliceColVector.prototype.persist = function () {
        return {
            root: this.m.persist(),
            col: this.col
        };
    };
    SliceColVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    Object.defineProperty(SliceColVector.prototype, "valuetype", {
        get: function () {
            return this.m.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceColVector.prototype, "idtype", {
        get: function () {
            return this.m.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceColVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    SliceColVector.prototype.size = function () {
        return this.m.nrow;
    };
    /**
     * return the associated ids of this vector
     */
    SliceColVector.prototype.names = function (range) {
        return this.m.rows(range);
    };
    SliceColVector.prototype.ids = function (range) {
        return this.m.rowIds(range);
    };
    /**
     * returns a promise for getting one cell
     * @param i
     */
    SliceColVector.prototype.at = function (i) {
        return this.m.at(i, this.col);
    };
    /**
     * returns a promise for getting the data as two dimensional array
     * @param range
     */
    SliceColVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var rr, r, d;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range);
                        r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(rr.dim(0), this.colRange);
                        return [4 /*yield*/, this.m.data(r)];
                    case 1:
                        d = _a.sent();
                        if (d.length === 0) {
                            return [2 /*return*/, []];
                        }
                        if (Array.isArray(d[0])) {
                            return [2 /*return*/, d.map(function (di) { return di[0]; })];
                        }
                        return [2 /*return*/, d];
                }
            });
        });
    };
    SliceColVector.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    SliceColVector.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    return SliceColVector;
}(__WEBPACK_IMPORTED_MODULE_3__vector_AVector__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SliceColVector);


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector_AVector__ = __webpack_require__(12);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */




/**
 * a simple projection of a matrix columns to a vector
 */
var SliceRowVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SliceRowVector, _super);
    function SliceRowVector(m, row) {
        var _this = _super.call(this, null) || this;
        _this.m = m;
        _this.row = row;
        _this.rowRange = __WEBPACK_IMPORTED_MODULE_2__range__["Range1D"].from([_this.row]);
        _this.desc = {
            name: m.desc.name + '-r' + row,
            fqname: m.desc.fqname + '-r' + row,
            id: m.desc.id + '-r' + row,
            type: 'vector',
            idtype: m.coltype,
            size: m.ncol,
            value: m.valuetype,
            description: m.desc.description,
            creator: m.desc.creator,
            ts: m.desc.ts
        };
        _this.root = _this;
        return _this;
    }
    SliceRowVector.prototype.persist = function () {
        return {
            root: this.m.persist(),
            row: this.row
        };
    };
    SliceRowVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    Object.defineProperty(SliceRowVector.prototype, "valuetype", {
        get: function () {
            return this.m.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceRowVector.prototype, "idtype", {
        get: function () {
            return this.m.coltype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceRowVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    SliceRowVector.prototype.size = function () {
        return this.m.ncol;
    };
    /**
     * return the associated ids of this vector
     */
    SliceRowVector.prototype.names = function (range) {
        return this.m.cols(range);
    };
    SliceRowVector.prototype.ids = function (range) {
        return this.m.colIds(range);
    };
    /**
     * returns a promise for getting one cell
     * @param i
     */
    SliceRowVector.prototype.at = function (i) {
        return this.m.at(this.row, i);
    };
    /**
     * returns a promise for getting the data as two dimensional array
     * @param range
     */
    SliceRowVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var rr, r, d;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range);
                        r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(this.rowRange, rr.dim(0));
                        return [4 /*yield*/, this.m.data(r)];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, d[0]];
                }
            });
        });
    };
    SliceRowVector.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    SliceRowVector.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    return SliceRowVector;
}(__WEBPACK_IMPORTED_MODULE_3__vector_AVector__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SliceRowVector);


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AMatrix__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SliceRowVector__ = __webpack_require__(109);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */





/**
 * view on the underlying matrix as transposed version
 * @param base
 * @constructor
 */
var TransposedMatrix = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](TransposedMatrix, _super);
    function TransposedMatrix(base) {
        var _this = _super.call(this, base) || this;
        _this.t = base;
        return _this;
    }
    Object.defineProperty(TransposedMatrix.prototype, "desc", {
        get: function () {
            return this.root.desc;
        },
        enumerable: true,
        configurable: true
    });
    TransposedMatrix.prototype.persist = function () {
        return {
            root: this.root.persist(),
            transposed: true
        };
    };
    Object.defineProperty(TransposedMatrix.prototype, "valuetype", {
        get: function () {
            return this.root.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransposedMatrix.prototype, "rowtype", {
        get: function () {
            return this.root.coltype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransposedMatrix.prototype, "coltype", {
        get: function () {
            return this.root.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransposedMatrix.prototype, "producttype", {
        get: function () {
            return this.root.producttype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransposedMatrix.prototype, "idtypes", {
        get: function () {
            return [this.rowtype, this.coltype];
        },
        enumerable: true,
        configurable: true
    });
    TransposedMatrix.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var ids;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.t.ids(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined)];
                    case 1:
                        ids = _a.sent();
                        return [2 /*return*/, ids.swap()];
                }
            });
        });
    };
    TransposedMatrix.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.t.rows(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined);
    };
    TransposedMatrix.prototype.colIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.t.rowIds(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined);
    };
    TransposedMatrix.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.t.cols(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined);
    };
    TransposedMatrix.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.t.colIds(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined);
    };
    TransposedMatrix.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range);
        if (r.isAll) {
            return this;
        }
        return new __WEBPACK_IMPORTED_MODULE_3__AMatrix__["b" /* MatrixView */](this.root, r.swap()).t;
    };
    TransposedMatrix.prototype.slice = function (col) {
        return new __WEBPACK_IMPORTED_MODULE_4__SliceRowVector__["a" /* default */](this.root, col);
    };
    TransposedMatrix.prototype.size = function () {
        var s = this.t.dim;
        return [s[1], s[0]]; //swap dimension
    };
    TransposedMatrix.prototype.at = function (i, j) {
        return this.t.at(j, i);
    };
    TransposedMatrix.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __WEBPACK_IMPORTED_MODULE_2__datatype__["transpose"];
                        return [4 /*yield*/, this.t.data(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined)];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    TransposedMatrix.prototype.hist = function (bins, range, containedIds) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (containedIds === void 0) { containedIds = 0; }
        return this.t.hist(bins, range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined, 1 - containedIds);
    };
    TransposedMatrix.prototype.stats = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.t.stats(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined);
    };
    TransposedMatrix.prototype.statsAdvanced = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.t.statsAdvanced(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined);
    };
    TransposedMatrix.prototype.heatmapUrl = function (range, options) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        if (options === void 0) { options = {}; }
        options.transpose = options.transpose !== true;
        return this.t.heatmapUrl(range ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).swap() : undefined, options);
    };
    return TransposedMatrix;
}(__WEBPACK_IMPORTED_MODULE_3__AMatrix__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TransposedMatrix);


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__idtype__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = adapterOne2Two;
/* harmony export (immutable) */ __webpack_exports__["b"] = viaAPI2Loader;
/* unused harmony export prepareHeatmapUrlParameter */
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */





function adapterOne2Two(loader) {
    return {
        rowIds: function (desc, range) { return loader(desc).then(function (d) { return range.preMultiply(d.rowIds, desc.size); }); },
        rows: function (desc, range) { return loader(desc).then(function (d) { return range.dim(0).filter(d.rows, desc.size[0]); }); },
        colIds: function (desc, range) { return loader(desc).then(function (d) { return range.preMultiply(d.colIds, desc.size); }); },
        cols: function (desc, range) { return loader(desc).then(function (d) { return range.dim(1).filter(d.cols, desc.size[1]); }); },
        ids: function (desc, range) { return loader(desc).then(function (d) { return range.preMultiply(d.ids, desc.size); }); },
        at: function (desc, i, j) { return loader(desc).then(function (d) { return d.data[i][j]; }); },
        data: function (desc, range) { return loader(desc).then(function (d) { return range.filter(d.data, desc.size); }); }
    };
}
function maskIt(desc) {
    if (desc.value.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_INT"] || desc.value.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_REAL"]) {
        return function (v) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["mask"])(v, desc.value); };
    }
    return function (v) { return v; };
}
function viaAPI2Loader() {
    var rowIds = null, rows = null, colIds = null, cols = null, data = null, hist = null, stats = null;
    function fillRowIds(desc) {
        if (rowIds !== null && rows !== null) {
            Promise.all([rowIds, rows]).then(function (_a) {
                var rowIdValues = _a[0], rowValues = _a[1];
                var idType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__idtype__["resolve"])(desc.rowtype);
                var rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(rowIdValues);
                idType.fillMapCache(rowIds.dim(0).asList(rowValues.length), rowValues);
            });
        }
    }
    function fillColumnIds(desc) {
        if (colIds !== null && cols !== null) {
            Promise.all([colIds, cols]).then(function (_a) {
                var colIdValues = _a[0], colValues = _a[1];
                var idType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__idtype__["resolve"])(desc.coltype);
                var colIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(colIdValues);
                idType.fillMapCache(colIds.dim(0).asList(colValues.length), colValues);
            });
        }
    }
    var r = {
        rowIds: function (desc, range) {
            if (rowIds == null) {
                rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/rowIds").then(__WEBPACK_IMPORTED_MODULE_1__range__["parse"]);
                fillRowIds(desc);
            }
            return rowIds.then(function (d) { return d.preMultiply(range, desc.size); });
        },
        rows: function (desc, range) {
            if (rows == null) {
                rows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/rows");
                fillRowIds(desc);
            }
            return rows.then(function (d) { return range.dim(0).filter(d, desc.size[0]); });
        },
        colIds: function (desc, range) {
            if (colIds == null) {
                colIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/colIds").then(__WEBPACK_IMPORTED_MODULE_1__range__["parse"]);
                fillColumnIds(desc);
            }
            return colIds.then(function (d) { return d.preMultiply(range, desc.size); });
        },
        cols: function (desc, range) {
            if (cols == null) {
                cols = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/cols");
                fillColumnIds(desc);
            }
            return cols.then(function (d) { return range.dim(1).filter(d, desc.size[1]); });
        },
        ids: function (desc, range) {
            if (range.ndim === 1) {
                return r.rowIds(desc, range);
            }
            range.dim(0); //ensure two dim
            range.dim(1); //ensure two dim
            var split = range.split();
            return Promise.all([r.rowIds(desc, split[0] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])()), r.colIds(desc, split[1] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])())]).then(__WEBPACK_IMPORTED_MODULE_1__range__["join"]);
        },
        numericalStats: function (desc, range) {
            if (range.isAll) {
                if (stats == null) {
                    stats = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/stats");
                }
                return stats;
            }
            var args = {
                range: range.toString()
            };
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/stats", args);
        },
        numericalHist: function (desc, range, bins) {
            if (bins === void 0) { bins = NaN; }
            var valueRange = desc.value.range;
            if (range.isAll) {
                if (hist == null) {
                    hist = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/hist").then(function (hist) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["wrapHist"])(hist, valueRange); });
                }
                return hist;
            }
            var args = {
                range: range.toString()
            };
            if (!isNaN(bins)) {
                args.bins = bins;
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/hist", args).then(function (hist) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["wrapHist"])(hist, valueRange); });
        },
        at: function (desc, i, j) { return r.data(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])([i], [j])).then(function (data) { return maskIt(desc)(data[0][0]); }); },
        data: function (desc, range) {
            if (range.isAll) {
                if (data == null) {
                    data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/raw").then(maskIt(desc)); // TODO avoid <any> type cast
                }
                return data;
            }
            if (data != null) { //already loading all
                return data.then(function (d) { return range.filter(d, desc.size); });
            }
            var size = desc.size;
            if (size[0] * size[1] < 1000 || desc.loadAtOnce) { // small file load all
                data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/matrix/" + desc.id + "/raw").then(maskIt(desc)); // TODO avoid <any> type cast
                return data.then(function (d) { return range.filter(d, desc.size); });
            }
            //server side slicing
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIData"])("/dataset/matrix/" + desc.id + "/raw", { range: range.toString() }).then(maskIt(desc));
        },
        heatmapUrl: function (desc, range, options) {
            var params = prepareHeatmapUrlParameter(range, options);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["api2absURL"])("/dataset/matrix/" + desc.id + "/data", params);
        }
    };
    return r;
}
/**
 * Prepare the URL Parameters to load the Heatmap with the given range and options
 * @param range range for the subset of the matrix
 * @param options options for the URL configuration
 */
function prepareHeatmapUrlParameter(range, options) {
    var args = {
        format: options.format || 'png',
        range: range.toString()
    };
    if (options.transpose === true) {
        args.format_transpose = true;
    }
    if (options.range) {
        args.format_min = options.range[0];
        args.format_max = options.range[1];
    }
    if (options.palette) {
        args.format_palette = options.palette.toString();
    }
    if (options.missing) {
        args.format_missing = options.missing;
    }
    return args;
}


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vis__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IMultiForm__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal__ = __webpack_require__(27);
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 27.08.2014.
 */






/**
 * a simple multi form class using a select to switch
 */
var MultiForm = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MultiForm, _super);
    function MultiForm(data, parent, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.options = options;
        _this._metaData = new __WEBPACK_IMPORTED_MODULE_5__internal__["b" /* ProxyMetaData */](function () { return _this.actDesc; });
        _this.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({
            initialVis: 0,
            all: { //options to all visses
            },
            filter: function () { return true; }
        }, options);
        _this.node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__internal__["a" /* createNode */])(parent, 'div', 'multiform');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["assignData"])(parent, data);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__vis__["assignVis"])(_this.node, _this);
        //find all suitable plugins
        _this.visses = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__vis__["list"])(data).filter(_this.options.filter);
        _this.build();
        return _this;
    }
    Object.defineProperty(MultiForm.prototype, "asMetaData", {
        /**
         * converts this multiform to a vis metadata
         * @return {IVisMetaData}
         */
        get: function () {
            return this._metaData;
        },
        enumerable: true,
        configurable: true
    });
    MultiForm.prototype.build = function () {
        //create select option field
        //create content
        this.content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__internal__["a" /* createNode */])(this.node, 'div', 'content');
        //switch to first
        this.switchTo(this.options.initialVis);
    };
    MultiForm.prototype.destroy = function () {
        if (this.actVis && typeof (this.actVis.destroy) === 'function') {
            this.actVis.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    MultiForm.prototype.persist = function () {
        return {
            id: this.actDesc ? this.actDesc.id : null,
            content: this.actVis && typeof (this.actVis.persist) === 'function' ? this.actVis.persist() : null
        };
    };
    MultiForm.prototype.restore = function (persisted) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var that, selected, vis;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        if (!persisted.id) return [3 /*break*/, 4];
                        selected = this.visses.find(function (e) { return e.id === persisted.id; });
                        if (!selected) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.switchTo(selected)];
                    case 1:
                        vis = _a.sent();
                        if (!(vis && persisted.content && typeof (vis.restore) === 'function')) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.resolve(vis.restore(persisted.content))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, that];
                    case 4: return [2 /*return*/, Promise.resolve(that)];
                }
            });
        });
    };
    MultiForm.prototype.locate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var p = this.actVisPromise || Promise.resolve(null);
        return p.then(function () {
            var aa = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                aa[_i] = arguments[_i];
            }
            var vis = aa.length > 0 ? aa[0] : undefined;
            if (vis && typeof (vis.locate) === 'function') {
                return vis.locate.apply(vis, args);
            }
            else {
                return Promise.resolve((aa.length === 1 ? undefined : new Array(args.length)));
            }
        });
    };
    MultiForm.prototype.locateById = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var p = this.actVisPromise || Promise.resolve(null);
        return p.then(function () {
            var aa = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                aa[_i] = arguments[_i];
            }
            var vis = aa.length > 0 ? aa[0] : undefined;
            if (vis && typeof (vis.locateById) === 'function') {
                return vis.locateById.apply(vis, args);
            }
            else {
                return Promise.resolve((aa.length === 1 ? undefined : new Array(args.length)));
            }
        });
    };
    MultiForm.prototype.transform = function (scale, rotate) {
        var _this = this;
        if (this.actVis) {
            if (arguments.length === 0) {
                return this.actVis.transform();
            }
            else {
                var t = function (event, newValue, old) {
                    _this.fire('transform', newValue, old);
                };
                this.actVis.on('transform', t);
                var r = this.actVis.transform(scale, rotate);
                this.actVis.off('transform', t);
                return r;
            }
        }
        if (this.actVisPromise && arguments.length > 0) {
            //2nd try
            this.actVisPromise.then(function (v) { return _this.transform(scale, rotate); });
        }
        return {
            scale: [1, 1],
            rotate: 0
        };
    };
    Object.defineProperty(MultiForm.prototype, "act", {
        /**
         * returns the current selected vis technique description
         * @returns {plugins.IPluginDesc}
         */
        get: function () {
            return this.actDesc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiForm.prototype, "actLoader", {
        get: function () {
            return this.actVisPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiForm.prototype, "size", {
        get: function () {
            if (this.actVis) {
                return this.actVis.size;
            }
            return [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiForm.prototype, "rawSize", {
        get: function () {
            if (this.actVis) {
                return this.actVis.rawSize;
            }
            return [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * switch to the desired vis technique given by index
     * @param param
     */
    MultiForm.prototype.switchTo = function (param) {
        var _this = this;
        var vis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__internal__["c" /* selectVis */])(param, this.visses);
        if (vis === this.actDesc) {
            return this.actVisPromise; //already selected
        }
        //gracefully destroy
        if (this.actVis) {
            this.actVis.destroy();
            this.actVis = null;
            this.actVisPromise = null;
        }
        //remove content dom side
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__internal__["d" /* clearNode */])(this.content);
        //switch and trigger event
        var bak = this.actDesc;
        this.actDesc = vis;
        this.markReady(false);
        this.fire('change', vis, bak);
        this.actVis = null;
        this.actVisPromise = null;
        if (vis) {
            //load the plugin and create the instance
            return this.actVisPromise = vis.load().then(function (plugin) {
                if (_this.actDesc !== vis) { //changed in the meanwhile
                    return null;
                }
                _this.actVis = plugin.factory(_this.data, _this.content, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({}, _this.options.all, _this.options[vis.id] || {}));
                if (_this.actVis.isBuilt) {
                    _this.markReady();
                }
                else {
                    _this.actVis.on('ready', function () {
                        _this.markReady();
                    });
                }
                _this.fire('changed', vis, bak);
                return _this.actVis;
            });
        }
        else {
            return Promise.resolve(null);
        }
    };
    MultiForm.prototype.addIconVisChooser = function (toolbar) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__IMultiForm__["a" /* addIconVisChooser */])(toolbar, this);
    };
    MultiForm.prototype.addSelectVisChooser = function (toolbar) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__IMultiForm__["b" /* addSelectVisChooser */])(toolbar);
    };
    return MultiForm;
}(__WEBPACK_IMPORTED_MODULE_3__vis__["AVisInstance"]));
/* harmony default export */ __webpack_exports__["a"] = (MultiForm);
function create(data, parent, options) {
    return new MultiForm(data, parent, options);
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vis__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IMultiForm__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__internal_GridElem__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__range__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/******************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 *****************************************************************************/
/**
 * Created by Samuel Gratzl on 27.08.2014.
 */









function sum(arr) {
    return arr.reduce(function (v, x) { return v + x; }, 0);
}
function max(arr, acc) {
    if (arr.length === 0) {
        return NaN;
    }
    return arr.reduce(function (p, act) { return Math.max(p, acc(act)); }, -Infinity);
}
/**
 * a simple multi form class using a select to switch
 */
var MultiFormGrid = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MultiFormGrid, _super);
    function MultiFormGrid(data, range, parent, viewFactory, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.range = range;
        _this.options = options;
        _this._metaData = new __WEBPACK_IMPORTED_MODULE_6__internal__["b" /* ProxyMetaData */](function () { return _this.actDesc; });
        _this.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({
            initialVis: 0,
            singleRowOptimization: true,
            filter: function () { return true; }
        }, options);
        _this.node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal__["a" /* createNode */])(parent, 'div', 'multiformgrid');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["assignData"])(parent, data);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__vis__["assignVis"])(_this.node, _this);
        //find all suitable plugins
        _this.visses = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__vis__["list"])(data).filter(_this.options.filter);
        //compute the dimensions and build the grid
        var dims = _this.dims = range.dims.map(function (dim) {
            if (dim instanceof __WEBPACK_IMPORTED_MODULE_8__range__["CompositeRange1D"]) {
                return dim.groups;
            }
            else if (dim instanceof __WEBPACK_IMPORTED_MODULE_8__range__["Range1DGroup"]) {
                return [dim];
            }
            else {
                return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__range__["asUngrouped"])(dim)];
            }
        });
        var grid = _this.grid = [];
        function product(level, range, pos) {
            if (level === dims.length) {
                var r = range.length === 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__range__["all"])() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__range__["list"])(range.slice()); //work on a copy for safety reason
                grid.push(new __WEBPACK_IMPORTED_MODULE_7__internal_GridElem__["a" /* default */](r, pos.slice(), viewFactory(data, r, pos.slice())));
            }
            else {
                dims[level].forEach(function (group, i) {
                    range.push(group);
                    pos.push(i);
                    product(level + 1, range, pos);
                    range.pop();
                    pos.pop();
                });
            }
        }
        product(0, [], []);
        _this.build();
        return _this;
    }
    Object.defineProperty(MultiFormGrid.prototype, "dimSizes", {
        get: function () {
            return this.dims.map(function (d) { return d.length; });
        },
        enumerable: true,
        configurable: true
    });
    MultiFormGrid.prototype.toElem = function (pos) {
        var s = this.dimSizes;
        if (s.length === 1) {
            return this.grid[pos[0]];
        }
        return this.grid[pos[0] * s[1] + (pos[1] || 0)];
    };
    MultiFormGrid.prototype.getRange = function () {
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        var elem = this.toElem(indices);
        return elem.range;
    };
    MultiFormGrid.prototype.getData = function () {
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        var elem = this.toElem(indices);
        return elem.data;
    };
    MultiFormGrid.prototype.getBounds = function () {
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        var elem = this.toElem(indices);
        var absloc = elem.location;
        var size = elem.size;
        var parentLoc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["offset"])(this.content);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__geom__["rect"])(absloc.x - parentLoc.left, absloc.y - parentLoc.top, size[0], size[1]);
    };
    Object.defineProperty(MultiFormGrid.prototype, "asMetaData", {
        /**
         * converts this multiform to a vis metadata
         * @return {IVisMetaData}
         */
        get: function () {
            return this._metaData;
        },
        enumerable: true,
        configurable: true
    });
    MultiFormGrid.prototype.build = function () {
        //create select option field
        var _this = this;
        //create content
        this.content = this.node;
        var wrap = this.options.wrap || (function (d) { return d; });
        //create groups for all grid elems
        //TODO how to layout as a grid
        if (this.dims.length === 1) {
            if (this.options.singleRowOptimization) {
                this.grid.forEach(function (elem) { return elem.setContent(wrap(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal__["a" /* createNode */])(_this.node, 'div', 'content gridrow'), elem.data, elem.range, elem.pos)); });
            }
            else {
                this.grid.forEach(function (elem) {
                    var n = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal__["a" /* createNode */])(_this.node, 'div', 'gridrow');
                    var nn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal__["a" /* createNode */])(n, 'div', 'content');
                    nn.style.display = 'inline-block';
                    elem.setContent(wrap(nn, elem.data, elem.range, elem.pos));
                });
            }
        }
        else {
            var ndim = this.dimSizes;
            for (var i = 0; i < ndim[0]; ++i) {
                var row = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal__["a" /* createNode */])(this.node, 'div', 'gridrow');
                for (var j = 0; j < ndim[1]; ++j) {
                    var elem = this.grid[i * ndim[1] + j];
                    var nn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal__["a" /* createNode */])(row, 'div', 'content');
                    nn.style.display = 'inline-block';
                    elem.setContent(wrap(nn, elem.data, elem.range, elem.pos));
                }
            }
        }
        //switch to first
        this.switchTo(this.options.initialVis);
    };
    MultiFormGrid.prototype.destroy = function () {
        this.grid.forEach(function (elem) { return elem.destroy(); });
        _super.prototype.destroy.call(this);
    };
    MultiFormGrid.prototype.transform = function (scale, rotate) {
        if (this.grid[0].hasOne) {
            var bak = this.grid[0].transform();
            if (arguments.length > 0) {
                this.grid.forEach(function (g) { return g.transform(scale, rotate); });
                this.fire('transform', {
                    scale: scale,
                    rotate: rotate
                }, bak);
            }
            return bak;
        }
        return {
            scale: [1, 1],
            rotate: 0
        };
    };
    MultiFormGrid.prototype.persist = function () {
        return {
            id: this.actDesc ? this.actDesc.id : null,
            contents: this.grid.map(function (elem) { return elem.persist(); })
        };
    };
    MultiFormGrid.prototype.restore = function (persisted) {
        var that = this;
        if (persisted.id) {
            var selected = this.visses.find(function (e) { return e.id === persisted.id; });
            if (selected) {
                return this.switchTo(selected).then(function (vis) {
                    //FIXME
                    if (vis && persisted.content && typeof (vis.restore) === 'function') {
                        return Promise.resolve(vis.restore(persisted.content)).then(function () { return that; });
                    }
                    return Promise.resolve(that);
                });
            }
        }
        return Promise.resolve(that);
    };
    MultiFormGrid.prototype.locateGroup = function (range) {
        var _this = this;
        if (range.isAll || range.isNone) {
            var s = this.size;
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__geom__["rect"])(0, 0, s[0], s[1]));
        }
        var parentLoc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["offset"])(this.content);
        function relativePos(pos) {
            return {
                x: pos.x - parentLoc.left,
                y: pos.y - parentLoc.top
            };
        }
        var filterTo = function () {
            var inElems = [];
            for (var _i = 0, _a = _this.grid; _i < _a.length; _i++) {
                var g = _a[_i];
                var matched = g.subrange(range);
                if (!matched.isNone) { //direct group hit
                    inElems.push({
                        g: g,
                        pos: relativePos(g.location),
                        r: matched
                    });
                }
            }
            return inElems;
        };
        var inElems = filterTo();
        if (inElems.length === 1) {
            return inElems[0].g.actVis.locate(inElems[0].r).then(function (loc) {
                return loc ? loc.shift(inElems[0].pos) : loc;
            });
        }
        return Promise.all(inElems.map(function (elem) { return elem.g.actVis.locate(elem.r); })).then(function (locations) {
            //shift the locations according to grid position
            locations = locations.map(function (loc, i) { return loc ? loc.shift(inElems[i].pos) : loc; }).filter(function (loc) { return loc != null; });
            //merge into a single one
            var base = locations[0].aabb();
            var x = base.x, y = base.y, x2 = base.x2, y2 = base.y2;
            locations.forEach(function (loc) {
                var aab = loc.aabb();
                x = Math.min(x, aab.x);
                y = Math.min(y, aab.y);
                x2 = Math.min(x2, aab.x2);
                y2 = Math.min(y2, aab.y2);
            });
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__geom__["rect"])(x, y, x2 - x, y2 - y));
        });
    };
    MultiFormGrid.prototype.locateGroupById = function (range) {
        var _this = this;
        return this.data.ids().then(function (ids) {
            return _this.locateGroup(ids.indexOf(range));
        });
    };
    MultiFormGrid.prototype.locate = function () {
        var _this = this;
        var range = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            range[_i] = arguments[_i];
        }
        var p = this.actVisPromise || Promise.resolve(null);
        return p.then(function (visses) {
            if (!visses) {
                return Promise.resolve((range.length === 1 ? undefined : new Array(range.length)));
            }
            if (visses.length === 1) {
                return visses[0].locate.apply(visses[0], range);
            }
            else {
                //multiple groups
                if (range.length === 1) {
                    return _this.locateGroup(range[0]);
                }
                else {
                    return Promise.all(range.map(function (arg) { return _this.locateGroup(arg); }));
                }
            }
        });
    };
    MultiFormGrid.prototype.locateById = function () {
        var _this = this;
        var range = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            range[_i] = arguments[_i];
        }
        var p = this.actVisPromise || Promise.resolve(null);
        return p.then(function (visses) {
            if (!visses) {
                return Promise.resolve((range.length === 1 ? undefined : new Array(range.length)));
            }
            if (visses.length === 1) {
                return visses[0].locateById.apply(visses[0], range);
            }
            else {
                //multiple groups
                if (range.length === 1) {
                    return _this.locateGroupById(range[0]);
                }
                else {
                    return Promise.all(range.map(function (arg) { return _this.locateGroupById(arg); }));
                }
            }
        });
    };
    Object.defineProperty(MultiFormGrid.prototype, "act", {
        /**
         * returns the current selected vis technique description
         * @returns {plugins.IPluginDesc}
         */
        get: function () {
            return this.actDesc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiFormGrid.prototype, "actLoader", {
        get: function () {
            return this.actVisPromise;
        },
        enumerable: true,
        configurable: true
    });
    MultiFormGrid.prototype.gridSize = function (raw) {
        if (raw === void 0) { raw = false; }
        var sizes = this.grid.map(raw ? function (elem) { return elem.rawSize; } : function (elem) { return elem.size; });
        if (this.dims.length === 1) {
            //vertically groups only
            return {
                cols: [max(sizes, function (s) { return s[0]; })],
                rows: sizes.map(function (s) { return s[1]; }),
                grid: sizes.map(function (s) { return [s]; })
            };
        }
        else { //if (this.dims.length === 2)
            var cols_1 = this.dims[1].length;
            var grid_1 = this.dims[0].map(function (row, i) { return sizes.slice(i * cols_1, (i + 1) * cols_1); });
            return {
                cols: this.dims[1].map(function (d, i) { return max(grid_1, function (row) { return row[i][0]; }); }),
                rows: grid_1.map(function (row) { return max(row, function (s) { return s[1]; }); }),
                grid: grid_1
            };
        }
    };
    Object.defineProperty(MultiFormGrid.prototype, "size", {
        get: function () {
            var gridSize = this.gridSize();
            return [sum(gridSize.cols), sum(gridSize.rows)];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiFormGrid.prototype, "rawSize", {
        get: function () {
            var gridSize = this.gridSize(true);
            return [sum(gridSize.cols), sum(gridSize.rows)];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * switch to the desired vis technique given by index
     * @param param
     */
    MultiFormGrid.prototype.switchTo = function (param) {
        var _this = this;
        var vis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal__["c" /* selectVis */])(param, this.visses);
        if (vis === this.actDesc) {
            return this.actVisPromise; //already selected
        }
        //gracefully destroy
        this.grid.forEach(function (elem) { return elem.switchDestroy(); });
        //switch and trigger event
        var bak = this.actDesc;
        this.actDesc = vis;
        this.markReady(false);
        this.fire('change', vis, bak);
        this.actVisPromise = null;
        if (vis) {
            //load the plugin and create the instance
            return this.actVisPromise = vis.load().then(function (plugin) {
                if (_this.actDesc !== vis) { //changed in the meanwhile
                    return null;
                }
                var options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["mixin"])({}, _this.options.all, _this.options[vis.id] || {});
                var r = _this.grid.map(function (elem) { return elem.build(plugin, options); });
                var c = r.length;
                r.forEach(function (ri) {
                    ri.on('ready', function () {
                        c--;
                        if (c === 0) { //all built
                            _this.markReady();
                        }
                    });
                });
                _this.fire('changed', vis, bak);
                return r;
            });
        }
        else {
            return Promise.resolve([]);
        }
    };
    MultiFormGrid.prototype.addIconVisChooser = function (toolbar) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__IMultiForm__["a" /* addIconVisChooser */])(toolbar, this);
    };
    MultiFormGrid.prototype.addSelectVisChooser = function (toolbar) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__IMultiForm__["b" /* addSelectVisChooser */])(toolbar);
    };
    return MultiFormGrid;
}(__WEBPACK_IMPORTED_MODULE_4__vis__["AVisInstance"]));
/* harmony default export */ __webpack_exports__["a"] = (MultiFormGrid);
function create(data, range, parent, viewFactory, options) {
    return new MultiFormGrid(data, range, parent, viewFactory, options);
}


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MultiForm__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MultiForm", function() { return __WEBPACK_IMPORTED_MODULE_0__MultiForm__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_0__MultiForm__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MultiFormGrid__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFormGrid", function() { return __WEBPACK_IMPORTED_MODULE_1__MultiFormGrid__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createGrid", function() { return __WEBPACK_IMPORTED_MODULE_1__MultiFormGrid__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IMultiForm__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addIconVisChooser", function() { return __WEBPACK_IMPORTED_MODULE_2__IMultiForm__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addSelectVisChooser", function() { return __WEBPACK_IMPORTED_MODULE_2__IMultiForm__["b"]; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 27.08.2014.
 */





/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vis__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(27);
/**
 * Created by sam on 26.12.2016.
 */




/**
 * @internal
 */
var GridElem = /** @class */ (function () {
    function GridElem(range, pos, data) {
        this.range = range;
        this.pos = pos;
        this.data = data;
    }
    GridElem.prototype.setContent = function (c) {
        this.content = c;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__datatype__["assignData"])(this.content, this.data);
    };
    GridElem.prototype.subrange = function (r) {
        var ri = this.range.intersect(r);
        return this.range.indexOf(ri);
    };
    Object.defineProperty(GridElem.prototype, "hasOne", {
        get: function () {
            return this.actVis != null;
        },
        enumerable: true,
        configurable: true
    });
    GridElem.prototype.destroy = function () {
        if (this.actVis && typeof (this.actVis.destroy) === 'function') {
            this.actVis.destroy();
        }
    };
    Object.defineProperty(GridElem.prototype, "size", {
        get: function () {
            return this.actVis ? this.actVis.size : [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridElem.prototype, "rawSize", {
        get: function () {
            return this.actVis ? this.actVis.rawSize : [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    GridElem.prototype.persist = function () {
        return {
            range: this.range.toString(),
            content: this.actVis && typeof (this.actVis.persist) === 'function' ? this.actVis.persist() : null
        };
    };
    GridElem.prototype.restore = function (persisted) {
        //FIXME
        /*if (persisted.id) {
         var selected = search(this.visses, (e) => e.id === persisted.id);
         if (selected) {
         this.switchTo(selected).then((vis) => {
         if (vis && persisted.content && isFunction(restore)) {
         restore(persisted.content);
         }
         });
         }
         }*/
        return null;
    };
    GridElem.prototype.switchDestroy = function () {
        //remove content dom side
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["d" /* clearNode */])(this.content);
        if (this.actVis && typeof (this.actVis.destroy) === 'function') {
            this.actVis.destroy();
        }
        this.actVis = null;
    };
    GridElem.prototype.build = function (plugin, options) {
        this.actVis = plugin.factory(this.data, this.content, options);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__vis__["assignVis"])(this.content, this.actVis);
        return this.actVis;
    };
    Object.defineProperty(GridElem.prototype, "location", {
        get: function () {
            var o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["offset"])(this.content);
            return {
                x: o.left,
                y: o.top
            };
        },
        enumerable: true,
        configurable: true
    });
    GridElem.prototype.transform = function (scale, rotate) {
        if (this.actVis) {
            if (arguments.length > 0) {
                return this.actVis.transform(scale, rotate);
            }
            else {
                return this.actVis.transform();
            }
        }
        return {
            scale: [1, 1],
            rotate: 0
        };
    };
    return GridElem;
}());
/* harmony default export */ __webpack_exports__["a"] = (GridElem);


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocalStorageProvenanceGraphManager__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RemoteStorageProvenanceGraphManager__ = __webpack_require__(58);

/**
 * Created by sam on 12.02.2015.
 */



var MixedStorageProvenanceGraphManager = /** @class */ (function () {
    function MixedStorageProvenanceGraphManager(options) {
        if (options === void 0) { options = {}; }
        this.remote = new __WEBPACK_IMPORTED_MODULE_3__RemoteStorageProvenanceGraphManager__["a" /* default */](options);
        this.local = new __WEBPACK_IMPORTED_MODULE_2__LocalStorageProvenanceGraphManager__["a" /* default */](options);
    }
    MixedStorageProvenanceGraphManager.prototype.listRemote = function () {
        return this.remote.list();
    };
    MixedStorageProvenanceGraphManager.prototype.listLocal = function () {
        return this.local.list();
    };
    MixedStorageProvenanceGraphManager.prototype.listLocalSync = function () {
        return this.local.listSync();
    };
    MixedStorageProvenanceGraphManager.prototype.list = function () {
        return Promise.all([this.listLocal(), this.listRemote()]).then(function (arr) { return arr[0].concat(arr[1]); });
    };
    MixedStorageProvenanceGraphManager.prototype.delete = function (desc) {
        if (desc.local) {
            return this.local.delete(desc);
        }
        else {
            return this.remote.delete(desc);
        }
    };
    MixedStorageProvenanceGraphManager.prototype.get = function (desc) {
        if (desc.local) {
            return this.local.get(desc);
        }
        else {
            return this.remote.get(desc);
        }
    };
    MixedStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
        if (desc.local) {
            return this.local.getGraph(desc);
        }
        else {
            return this.remote.getGraph(desc);
        }
    };
    MixedStorageProvenanceGraphManager.prototype.edit = function (graph, desc) {
        var base = graph instanceof __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__["a" /* default */] ? graph.desc : graph;
        if (base.local) {
            return this.local.edit(base, desc);
        }
        else {
            return this.remote.edit(base, desc);
        }
    };
    MixedStorageProvenanceGraphManager.prototype.cloneLocal = function (desc, extras) {
        if (extras === void 0) { extras = {}; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a, _b;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.local).clone;
                        return [4 /*yield*/, this.getGraph(desc)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), extras])];
                }
            });
        });
    };
    MixedStorageProvenanceGraphManager.prototype.cloneRemote = function (desc, extras) {
        if (extras === void 0) { extras = {}; }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a, _b;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.remote).clone;
                        return [4 /*yield*/, this.getGraph(desc)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), extras])];
                }
            });
        });
    };
    MixedStorageProvenanceGraphManager.prototype.migrateRemote = function (graph, extras) {
        if (extras === void 0) { extras = {}; }
        return this.remote.migrate(graph, extras);
    };
    MixedStorageProvenanceGraphManager.prototype.importLocal = function (json, desc) {
        if (desc === void 0) { desc = {}; }
        return this.local.import(json, desc);
    };
    MixedStorageProvenanceGraphManager.prototype.importRemote = function (json, desc) {
        if (desc === void 0) { desc = {}; }
        return this.remote.import(json, desc);
    };
    MixedStorageProvenanceGraphManager.prototype.import = function (json, desc) {
        if (desc === void 0) { desc = {}; }
        return this.importLocal(json, desc);
    };
    MixedStorageProvenanceGraphManager.prototype.createLocal = function (desc) {
        if (desc === void 0) { desc = {}; }
        return this.local.create(desc);
    };
    MixedStorageProvenanceGraphManager.prototype.createRemote = function (desc) {
        if (desc === void 0) { desc = {}; }
        return this.remote.create(desc);
    };
    MixedStorageProvenanceGraphManager.prototype.create = function (desc) {
        if (desc === void 0) { desc = {}; }
        return this.createLocal(desc);
    };
    MixedStorageProvenanceGraphManager.prototype.createInMemory = function () {
        return this.local.createInMemory();
    };
    MixedStorageProvenanceGraphManager.prototype.cloneInMemory = function (desc) {
        var _this = this;
        return this.getGraph(desc).then(function (graph) { return _this.local.cloneInMemory(graph); });
    };
    return MixedStorageProvenanceGraphManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (MixedStorageProvenanceGraphManager);


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActionNode__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActionNode", function() { return __WEBPACK_IMPORTED_MODULE_2__ActionNode__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return __WEBPACK_IMPORTED_MODULE_2__ActionNode__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMetaData", function() { return __WEBPACK_IMPORTED_MODULE_2__ActionNode__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return __WEBPACK_IMPORTED_MODULE_2__ActionNode__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ObjectNode__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectNode", function() { return __WEBPACK_IMPORTED_MODULE_3__ObjectNode__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cat", function() { return __WEBPACK_IMPORTED_MODULE_3__ObjectNode__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "op", function() { return __WEBPACK_IMPORTED_MODULE_3__ObjectNode__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return __WEBPACK_IMPORTED_MODULE_3__ObjectNode__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SlideNode__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SlideNode", function() { return __WEBPACK_IMPORTED_MODULE_4__SlideNode__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DURATION", function() { return __WEBPACK_IMPORTED_MODULE_4__SlideNode__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRANSITION", function() { return __WEBPACK_IMPORTED_MODULE_4__SlideNode__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StateNode__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StateNode", function() { return __WEBPACK_IMPORTED_MODULE_5__StateNode__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProvenanceGraph", function() { return __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compress", function() { return __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProvenanceGraphDim", function() { return __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "provenanceGraphFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toSlidePath", function() { return __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LocalStorageProvenanceGraphManager__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageProvenanceGraphManager", function() { return __WEBPACK_IMPORTED_MODULE_6__LocalStorageProvenanceGraphManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RemoteStorageProvenanceGraphManager__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteStorageProvenanceGraphManager", function() { return __WEBPACK_IMPORTED_MODULE_7__RemoteStorageProvenanceGraphManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MixedStorageProvenanceGraphManager__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MixedStorageProvenanceGraphManager", function() { return __WEBPACK_IMPORTED_MODULE_8__MixedStorageProvenanceGraphManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graph_graph__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphEdge", function() { return __WEBPACK_IMPORTED_MODULE_9__graph_graph__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphModule", function() { return graphModule; });
/* harmony export (immutable) */ __webpack_exports__["findLatestPath"] = findLatestPath;
/* harmony export (immutable) */ __webpack_exports__["createDummy"] = createDummy;
/**
 * Created by sam on 12.02.2015.
 */











var graphModule = __WEBPACK_IMPORTED_MODULE_0__graph__;
function findLatestPath(state) {
    var path = state.path.slice();
    //compute the first path to the end
    while ((state = state.nextState) != null && (path.indexOf(state) < 0)) {
        path.push(state);
    }
    return path;
}
function createDummy() {
    var desc = {
        type: 'provenance_graph',
        id: 'dummy',
        name: 'dummy',
        fqname: 'dummy',
        description: '',
        creator: 'Anonymous',
        ts: Date.now(),
        size: [0, 0],
        attrs: {
            graphtype: 'provenance_graph',
            of: 'dummy'
        }
    };
    return new __WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__["a" /* default */](desc, new __WEBPACK_IMPORTED_MODULE_0__graph__["MemoryGraph"](desc, [], [], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ProvenanceGraph__["d" /* provenanceGraphFactory */])()));
}


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterator__ = __webpack_require__(26);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */


var SingleRangeElem = /** @class */ (function () {
    function SingleRangeElem(from) {
        this.from = from;
    }
    Object.defineProperty(SingleRangeElem.prototype, "step", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleRangeElem.prototype, "to", {
        get: function () {
            return this.from + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleRangeElem.prototype, "isAll", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleRangeElem.prototype, "isSingle", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleRangeElem.prototype, "isUnbound", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    SingleRangeElem.prototype.size = function (size) {
        return 1;
    };
    SingleRangeElem.prototype.clone = function () {
        return new SingleRangeElem(this.from);
    };
    SingleRangeElem.prototype.contains = function (value, size) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.from, size) === value;
    };
    SingleRangeElem.prototype.reverse = function () {
        return this.clone();
    };
    SingleRangeElem.prototype.invert = function (index, size) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.from, size) + index;
    };
    SingleRangeElem.prototype.iter = function (size) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterator__["single"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* fix */])(this.from, size));
    };
    Object.defineProperty(SingleRangeElem.prototype, "__iterator__", {
        get: function () {
            return this.iter();
        },
        enumerable: true,
        configurable: true
    });
    SingleRangeElem.prototype.toString = function () {
        return this.from.toString();
    };
    return SingleRangeElem;
}());
/* harmony default export */ __webpack_exports__["a"] = (SingleRangeElem);


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Range__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Range1D__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Range1DGroup__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_RangeElem__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CompositeRange1D__ = __webpack_require__(35);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseRange;
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */





/**
 * parse the give code created toString
 * @param code
 * @returns {Range}
 */
function parseRange(code) {
    var dims = [];
    var act = 0, c, t;
    code = code.trim();
    while (act < code.length) {
        c = code.charAt(act);
        switch (c) {
            case '"':
                t = parseNamedRange1D(code, act);
                act = t.act + 1; //skip ,
                dims.push(t.dim);
                break;
            case ',':
                act++;
                dims.push(__WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */].all());
                break;
            default:
                if (c.match(/\s/)) {
                    act++;
                }
                else {
                    t = parseRange1D(code, act);
                    act = t.act + 1; //skip ,
                    dims.push(t.dim);
                }
                break;
        }
    }
    if (code.charAt(code.length - 1) === ',') { //last is an empty one
        dims.push(__WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */].all());
    }
    return new __WEBPACK_IMPORTED_MODULE_0__Range__["a" /* default */](dims);
}
function parseNamedRange1D(code, act) {
    act += 1; //skip "
    var end = code.indexOf('"', act);
    var name = code.slice(act, end);
    var r;
    act = end + 1;
    switch (code.charAt(act)) {
        case '"':
            end = code.indexOf('"', act + 1);
            r = parseRange1D(code, end + 1);
            return {
                dim: new __WEBPACK_IMPORTED_MODULE_2__Range1DGroup__["a" /* default */](name, code.slice(act + 1, end), r.dim),
                act: r.act
            };
        case '{':
            var groups = [];
            while (code.charAt(act) !== '}') {
                r = parseNamedRange1D(code, act + 1);
                groups.push(r.dim);
                act = r.act;
            }
            return {
                dim: new __WEBPACK_IMPORTED_MODULE_4__CompositeRange1D__["a" /* default */](name, groups),
                act: r.act + 1
            };
        default: //ERROR
            return {
                dim: __WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */].all(),
                act: act
            };
    }
}
function parseRange1D(code, act) {
    var next, r;
    switch (code.charAt(act)) {
        case ',':
        case '}':
            next = act;
            r = __WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */].all();
            break;
        case '(':
            r = new __WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */]();
            next = code.indexOf(')', act);
            if (next > act + 1) { //not ()
                r.push.apply(r, code.slice(act + 1, next).split(',').map(__WEBPACK_IMPORTED_MODULE_3__internal_RangeElem__["a" /* default */].parse));
            }
            next += 1; //skip )
            break;
        default:
            next = code.indexOf('}', act);
            var n2 = code.indexOf(',', act);
            if (next >= 0 && n2 >= 0) {
                next = Math.min(next, n2);
            }
            else if (next < 0) {
                next = n2;
            }
            if (next < 0) {
                next = code.length;
            }
            r = new __WEBPACK_IMPORTED_MODULE_1__Range1D__["a" /* default */]([__WEBPACK_IMPORTED_MODULE_3__internal_RangeElem__["a" /* default */].parse(code.slice(act, next))]);
            break;
    }
    return {
        act: next,
        dim: r
    };
}


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vector_AVector__ = __webpack_require__(12);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */





/**
 * root matrix implementation holding the data
 * @internal
 */
var StratificationVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](StratificationVector, _super);
    function StratificationVector(strat, range) {
        var _this = _super.call(this, null) || this;
        _this.strat = strat;
        _this.range = range;
        _this._cache = null;
        _this.root = _this;
        _this.valuetype = {
            type: __WEBPACK_IMPORTED_MODULE_3__datatype__["VALUE_TYPE_CATEGORICAL"],
            categories: range.groups.map(function (g) { return ({ name: g.name, label: g.name, color: g.color }); })
        };
        var d = strat.desc;
        _this.desc = {
            name: d.name,
            fqname: d.fqname,
            description: d.description,
            id: d.id + '-v',
            type: 'vector',
            size: d.size,
            idtype: d.idtype,
            value: _this.valuetype,
            creator: d.creator,
            ts: d.ts
        };
        return _this;
    }
    Object.defineProperty(StratificationVector.prototype, "idtype", {
        get: function () {
            return this.strat.idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    StratificationVector.prototype.persist = function () {
        return {
            root: this.strat.persist()
        };
    };
    StratificationVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    StratificationVector.prototype.load = function () {
        if (!this._cache) {
            var r_1 = [];
            this.range.groups.forEach(function (g) {
                g.forEach(function () { return r_1.push(g.name); });
            });
            this._cache = r_1;
        }
        return this._cache;
    };
    /**
     * access at a specific position
     * @param i
     * @returns {*}
     */
    StratificationVector.prototype.at = function (i) {
        return Promise.resolve(this.load()[i]);
    };
    StratificationVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var data = this.load();
        return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(range).filter(data, this.dim));
    };
    StratificationVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.strat.names(range);
    };
    StratificationVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.strat.ids(range);
    };
    StratificationVector.prototype.size = function () {
        return this.strat.size();
    };
    StratificationVector.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    StratificationVector.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    return StratificationVector;
}(__WEBPACK_IMPORTED_MODULE_4__vector_AVector__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (StratificationVector);


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IStratification__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "guessColor", function() { return __WEBPACK_IMPORTED_MODULE_0__IStratification__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Stratification__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asStratification", function() { return __WEBPACK_IMPORTED_MODULE_1__Stratification__["asStratification"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_StratificationNameVector__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asNameVector", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_StratificationNameVector__["a"]; });
/**
 * Created by sam on 26.12.2016.
 */





/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector_internal_ANameVector__ = __webpack_require__(23);
/* harmony export (immutable) */ __webpack_exports__["a"] = asNameVector;



var StratificationNameVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](StratificationNameVector, _super);
    function StratificationNameVector(strat) {
        var _this = _super.call(this, strat) || this;
        _this.root = _this;
        return _this;
    }
    Object.defineProperty(StratificationNameVector.prototype, "idtype", {
        get: function () {
            return this.base.idtype;
        },
        enumerable: true,
        configurable: true
    });
    StratificationNameVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.names(range);
    };
    StratificationNameVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.ids(range);
    };
    StratificationNameVector.prototype.size = function () {
        return this.base.length;
    };
    return StratificationNameVector;
}(__WEBPACK_IMPORTED_MODULE_2__vector_internal_ANameVector__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (StratificationNameVector);
/**
 * converts the rows of the given stratification as a string vector
 * @param stratification
 * @return {IStringVector}
 */
function asNameVector(stratification) {
    return new StratificationNameVector(stratification);
}


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = viaAPILoader;
/* harmony export (immutable) */ __webpack_exports__["b"] = viaDataLoader;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */



function createRangeFromGroups(name, groups) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["composite"])(name, groups.map(function (g) {
        return new __WEBPACK_IMPORTED_MODULE_1__range__["Range1DGroup"](g.name, g.color || 'gray', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(g.range).dim(0));
    }));
}
function viaAPILoader() {
    var _data = undefined;
    return function (desc) {
        if (!_data) { //in the cache
            _data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])('/dataset/' + desc.id).then(function (data) {
                var idType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__idtype__["resolve"])(desc.idtype);
                var rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(data.rowIds);
                idType.fillMapCache(rowIds.dim(0).asList(data.rows.length), data.rows);
                return {
                    rowIds: rowIds,
                    rows: data.rows,
                    range: createRangeFromGroups(desc.name, data.groups)
                };
            });
        }
        return _data;
    };
}
function viaDataLoader(rows, rowIds, range) {
    var _data = undefined;
    return function () {
        if (!_data) { //in the cache
            _data = Promise.resolve({
                rowIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(rowIds),
                rows: rows,
                range: range
            });
        }
        return _data;
    };
}


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype_IDType__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/**
 * Created by Samuel Gratzl on 01.12.2016.
 */




var PREFIX = 'selection-idtype-';
function syncIDType(store, idType, options) {
    options.selectionTypes.forEach(function (type) {
        var key = "" + PREFIX + idType.id + "-" + type;
        var disable = false;
        idType.on('select-' + type, function (event, type, selection) {
            if (disable) {
                return;
            }
            // sync just the latest state
            store.setValue(key, selection.toString());
        });
        store.on(key, function (event, newValue) {
            disable = true; //don't track on changes
            idType.select(type, newValue);
            disable = false;
        });
    });
}
function create(store, options) {
    options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["mixin"])({
        filter: function () { return true; },
        selectionTypes: [__WEBPACK_IMPORTED_MODULE_1__idtype__["defaultSelectionType"]] // by default just selections
    }, options);
    // store existing
    var toSync = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__idtype__["list"])().filter(function (idType) { return (idType instanceof __WEBPACK_IMPORTED_MODULE_2__idtype_IDType__["a" /* default */] && options.filter(idType)); });
    toSync.forEach(function (idType) { return syncIDType(store, idType, options); });
    // watch new ones
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__event__["on"])('register.idtype', function (event, idType) {
        if (options.filter(idType)) {
            syncIDType(store, idType, options);
        }
    });
    return null;
}


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(5);
/**
 * Created by Samuel Gratzl on 01.12.2016.
 */


function parse(v) {
    return v === null ? null : JSON.parse(v);
}
function stringify(v) {
    return JSON.stringify(v);
}
var Store = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Store, _super);
    function Store(storage, prefix) {
        var _this = _super.call(this) || this;
        _this.storage = storage;
        _this.prefix = prefix;
        window.addEventListener('storage', function (event) {
            if (event.storageArea === storage && event.key.startsWith(prefix)) {
                var key = event.key.substring(prefix.length);
                // send specific and generic event
                var newValue = parse(event.newValue);
                var oldValue = parse(event.oldValue);
                _this.fire(key, newValue, oldValue, event.url);
                _this.fire(Store.EVENT_CHANGED, key, newValue, oldValue, event.url);
            }
        });
        return _this;
    }
    Store.prototype.toFullKey = function (key) {
        return this.prefix + key;
    };
    Store.prototype.setValue = function (key, value) {
        key = this.toFullKey(key);
        var bak = this.storage.getItem(key);
        this.storage.setItem(key, stringify(value));
        return bak;
    };
    Store.prototype.deleteValue = function (key) {
        key = this.toFullKey(key);
        this.storage.removeItem(key);
    };
    Store.prototype.includes = function (key) {
        key = this.toFullKey(key);
        return (this.storage.getItem(key) !== null);
    };
    Store.prototype.getValue = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        key = this.toFullKey(key);
        var v = this.storage.getItem(key);
        return v !== null ? parse(v) : defaultValue;
    };
    Store.EVENT_CHANGED = '_change';
    return Store;
}(__WEBPACK_IMPORTED_MODULE_1__event__["EventHandler"]));
/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TabSyncer__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabSyncer", function() { return __WEBPACK_IMPORTED_MODULE_0__TabSyncer__["a"]; });
/**
 * Created by Samuel Gratzl on 01.12.2016.
 */


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__TabSyncer__["a" /* default */]);


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datatype__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = createDefaultTableDesc;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */


function createDefaultTableDesc() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__datatype__["createDefaultDataDesc"])(), {
        type: 'table',
        idtype: '_rows',
        columns: [],
        size: [0, 0]
    });
}


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_VectorTable__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Table__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asTable", function() { return __WEBPACK_IMPORTED_MODULE_1__Table__["asTable"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asTableFromArray", function() { return __WEBPACK_IMPORTED_MODULE_1__Table__["asTableFromArray"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_TableNameVector__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asNameVector", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_TableNameVector__["a"]; });
/* harmony export (immutable) */ __webpack_exports__["fromVectors"] = fromVectors;
/**
 * Created by sam on 26.12.2016.
 */



function fromVectors(desc, vecs) {
    return new __WEBPACK_IMPORTED_MODULE_0__internal_VectorTable__["a" /* default */](desc, vecs);
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector_AVector__ = __webpack_require__(12);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */




/**
 * @internal
 */
var MultiTableVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MultiTableVector, _super);
    function MultiTableVector(table, f, thisArgument, valuetype, _idtype) {
        if (thisArgument === void 0) { thisArgument = table; }
        if (valuetype === void 0) { valuetype = null; }
        if (_idtype === void 0) { _idtype = table.idtype; }
        var _this = _super.call(this, null) || this;
        _this.table = table;
        _this.f = f;
        _this.thisArgument = thisArgument;
        _this.valuetype = valuetype;
        _this._idtype = _idtype;
        _this.desc = {
            name: table.desc.name + '-p',
            fqname: table.desc.fqname + '-p',
            description: f.toString(),
            type: 'vector',
            id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["fixId"])(table.desc.id + '-p' + f.toString()),
            idtype: table.desc.idtype,
            size: table.nrow,
            value: valuetype,
            creator: table.desc.creator,
            ts: Date.now()
        };
        _this.root = _this;
        return _this;
    }
    Object.defineProperty(MultiTableVector.prototype, "idtype", {
        get: function () {
            return this._idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiTableVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    MultiTableVector.prototype.persist = function () {
        return {
            root: this.table.persist(),
            f: this.f.toString(),
            valuetype: this.valuetype ? this.valuetype : undefined,
            idtype: this.idtype === this.table.idtype ? undefined : this.idtype.name
        };
    };
    MultiTableVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    MultiTableVector.prototype.size = function () {
        return this.table.nrow;
    };
    /**
     * return the associated ids of this vector
     */
    MultiTableVector.prototype.names = function (range) {
        return this.table.rows(range);
    };
    MultiTableVector.prototype.ids = function (range) {
        return this.table.rowIds(range);
    };
    /**
     * returns a promise for getting one cell
     * @param i
     */
    MultiTableVector.prototype.at = function (i) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a, _b, _c;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.f).call;
                        _c = [this.thisArgument];
                        return [4 /*yield*/, this.table.data(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(i))];
                    case 1: return [2 /*return*/, _b.apply(_a, _c.concat([(_d.sent())[0]]))];
                }
            });
        });
    };
    /**
     * returns a promise for getting the data as two dimensional array
     * @param range
     */
    MultiTableVector.prototype.data = function (range) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.table.data(range)];
                    case 1: return [2 /*return*/, (_a.sent()).map(this.f, this.thisArgument)];
                }
            });
        });
    };
    MultiTableVector.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    MultiTableVector.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    return MultiTableVector;
}(__WEBPACK_IMPORTED_MODULE_3__vector_AVector__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (MultiTableVector);


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector_internal_ANameVector__ = __webpack_require__(23);
/* harmony export (immutable) */ __webpack_exports__["a"] = asNameVector;



var TableNameVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](TableNameVector, _super);
    function TableNameVector(table) {
        var _this = _super.call(this, table) || this;
        _this.root = _this;
        return _this;
    }
    Object.defineProperty(TableNameVector.prototype, "idtype", {
        get: function () {
            return this.base.idtype;
        },
        enumerable: true,
        configurable: true
    });
    TableNameVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.rows(range);
    };
    TableNameVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.rowIds(range);
    };
    TableNameVector.prototype.size = function () {
        return this.base.nrow;
    };
    return TableNameVector;
}(__WEBPACK_IMPORTED_MODULE_2__vector_internal_ANameVector__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (TableNameVector);
/**
 * converts the rows of the given table as a string vector
 * @param table
 * @return {IStringVector}
 */
function asNameVector(table) {
    return new TableNameVector(table);
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector_AVector__ = __webpack_require__(12);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */




/**
 * root matrix implementation holding the data
 * @internal
 */
var TableVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](TableVector, _super);
    function TableVector(table, index, desc) {
        var _this = _super.call(this, null) || this;
        _this.table = table;
        _this.index = index;
        _this.column = desc.column;
        _this.root = _this;
        _this.desc = {
            type: 'vector',
            id: table.desc.id + '_' + desc.name,
            name: desc.name,
            description: desc.description || '',
            fqname: table.desc.fqname + '/' + desc.name,
            idtype: table.idtype.id,
            size: table.nrow,
            value: desc.value,
            creator: table.desc.creator,
            ts: table.desc.ts
        };
        return _this;
    }
    Object.defineProperty(TableVector.prototype, "valuetype", {
        get: function () {
            return this.desc.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableVector.prototype, "idtype", {
        get: function () {
            return this.table.idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    TableVector.prototype.persist = function () {
        return {
            root: this.table.persist(),
            col: this.index
        };
    };
    TableVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) { //some view onto it
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    /**
     * access at a specific position
     * @param i
     * @returns {*}
     */
    TableVector.prototype.at = function (i) {
        return this.table.at(i, this.index);
    };
    TableVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.table.colData(this.column, range);
    };
    TableVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.table.rows(range);
    };
    TableVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.table.rowIds(range);
    };
    TableVector.prototype.size = function () {
        return this.table.nrow;
    };
    TableVector.prototype.sort = function (compareFn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argSort"])(d, compareFn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    TableVector.prototype.filter = function (callbackfn, thisArg) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d, indices;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data()];
                    case 1:
                        d = _a.sent();
                        indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["argFilter"])(d, callbackfn, thisArg);
                        return [2 /*return*/, this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices))];
                }
            });
        });
    };
    return TableVector;
}(__WEBPACK_IMPORTED_MODULE_3__vector_AVector__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TableVector);


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ATable__ = __webpack_require__(68);
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */



/**
 * @internal
 */
var VectorTable = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VectorTable, _super);
    function VectorTable(desc, vectors) {
        var _this = _super.call(this, null) || this;
        _this.vectors = vectors;
        _this.root = _this;
        var ref = vectors[0].desc;
        // generate the description extras
        var d = desc;
        d.idtype = ref.idtype;
        d.size = [vectors[0].length, vectors.length];
        d.columns = vectors.map(function (v) {
            v.desc.column = v.desc.column || v.desc.name;
            return v.desc;
        });
        _this.desc = d;
        _this.idtype = vectors[0].idtype;
        return _this;
    }
    Object.defineProperty(VectorTable.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    VectorTable.prototype.col = function (i) {
        return this.vectors[i]; // TODO prevent `<any>` by using `<TableVector<any, IValueTypeDesc>>` leads to TS compile errors
    };
    VectorTable.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range).filter(this.vectors, [this.ncol]);
    };
    VectorTable.prototype.at = function (i, j) {
        return this.col(i).at(j);
    };
    VectorTable.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return Promise.all(this.vectors.map(function (v) { return v.data(range); })).then(function (arr) {
            var r = arr[0].map(function (i) { return ([i]); });
            arr.slice(1).forEach(function (ai) { return ai.forEach(function (d, i) { return r[i].push(d); }); });
            return r;
        });
    };
    VectorTable.prototype.colData = function (column, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.dataOfColumn(column, range);
    };
    VectorTable.prototype.dataOfColumn = function (column, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.vectors.find(function (d) { return d.desc.name === column; }).data(range);
    };
    VectorTable.prototype.objects = function (range) {
        var _this = this;
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return Promise.all(this.vectors.map(function (v) { return v.data(range); })).then(function (arr) {
            var names = _this.vectors.map(function (d) { return d.desc.name; });
            var r = arr[0].map(function (i) {
                return (_a = {}, _a[names[0]] = i, _a);
                var _a;
            });
            arr.slice(1).forEach(function (ai, j) {
                var name = names[j + 1];
                ai.forEach(function (d, i) { return r[i][name] = d; });
            });
            return r;
        });
    };
    /**
     * return the row ids of the matrix
     * @returns {*}
     */
    VectorTable.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.col(0).names(range);
    };
    VectorTable.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.col(0).ids(range);
    };
    VectorTable.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.rowIds(range);
    };
    VectorTable.prototype.size = function () {
        return [this.col(0).length, this.vectors.length];
    };
    VectorTable.prototype.persist = function () {
        return this.desc.id;
    };
    VectorTable.prototype.restore = function (persisted) {
        if (persisted && typeof persisted.col === 'number') {
            return this.col(persisted.col);
        }
        return _super.prototype.restore.call(this, persisted);
    };
    VectorTable.prototype.queryView = function (name, args) {
        throw Error('not implemented');
    };
    return VectorTable;
}(__WEBPACK_IMPORTED_MODULE_2__ATable__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (VectorTable);


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = adapterOne2Two;
/* unused harmony export viaAPIViewLoader */
/* harmony export (immutable) */ __webpack_exports__["b"] = viaAPI2Loader;
/* harmony export (immutable) */ __webpack_exports__["c"] = viaDataLoader;
/**
 * Created by Samuel Gratzl on 27.12.2016.
 */




function filterObjects(objs, range, desc) {
    if (range.isAll) {
        return objs;
    }
    objs = range.dim(0).filter(objs, desc.size[0]);
    if (range.ndim > 1 && !range.dim(1).isAll) {
        // filter the columns by index
        var toKeep = range.dim(1).filter(desc.columns, desc.columns.length);
        var toKeepNames_1 = toKeep.map(function (col) { return col.column || col.name; });
        return objs.map(function (obj) {
            var r = {};
            toKeepNames_1.forEach(function (key) { return r[key] = obj[key]; });
            return r;
        });
    }
    return objs;
}
/**
 * @internal
 */
function adapterOne2Two(loader) {
    return {
        rowIds: function (desc, range) { return loader(desc).then(function (d) { return range.preMultiply(d.rowIds, desc.size); }); },
        rows: function (desc, range) { return loader(desc).then(function (d) { return range.dim(0).filter(d.rows, desc.size[0]); }); },
        col: function (desc, column, range) { return loader(desc).then(function (d) { return range.filter(d.objs.map(function (d) { return d[column]; }), desc.size); }); },
        objs: function (desc, range) { return loader(desc).then(function (d) { return filterObjects(d.objs, range, desc); }); },
        data: function (desc, range) { return loader(desc).then(function (d) { return range.filter(toFlat(d.objs, desc.columns), desc.size); }); },
        view: function (desc, name, args) {
            throw new Error('not implemented');
        }
    };
}
/**
 * @internal
 */
function viaAPIViewLoader(name, args) {
    var _loader = undefined;
    return function (desc) {
        if (!_loader) { //in the cache
            _loader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/table/" + desc.id + "/view/" + name, args).then(function (data) {
                data.rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(data.rowIds);
                data.objs = maskObjects(data.data, desc);
                //mask the data
                return data;
            });
        }
        return _loader;
    };
}
function maskCol(arr, col) {
    //mask data
    if (col.value && (col.value.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_INT"] || col.value.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_REAL"])) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["mask"])(arr, col.value);
    }
    return arr;
}
function maskObjects(arr, desc) {
    //mask data
    var maskAble = desc.columns.filter(function (col) { return col.value && (col.value.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_INT"] || col.value.type === __WEBPACK_IMPORTED_MODULE_2__datatype__["VALUE_TYPE_REAL"]); });
    if (maskAble.length > 0) {
        arr.forEach(function (row) {
            maskAble.forEach(function (col) { return row[col.name] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["mask"])(row[col.name], col.value); });
        });
    }
    return arr;
}
/**
 * @internal
 */
function viaAPI2Loader() {
    var cols = {};
    var rowIds = null, rows = null, objs = null, data = null;
    function fillIds(desc) {
        if (rowIds !== null && rows !== null) {
            Promise.all([rowIds, rows]).then(function (_a) {
                var rowIdValues = _a[0], rowValues = _a[1];
                var idType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(desc.idtype);
                var rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(rowIdValues);
                idType.fillMapCache(rowIds.dim(0).asList(rowValues.length), rowValues);
            });
        }
    }
    var r = {
        rowIds: function (desc, range) {
            if (rowIds == null) {
                rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/table/" + desc.id + "/rowIds").then(__WEBPACK_IMPORTED_MODULE_1__range__["parse"]);
                fillIds(desc);
            }
            return rowIds.then(function (d) { return d.preMultiply(range, desc.size); });
        },
        rows: function (desc, range) {
            if (rows == null) {
                rows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/table/" + desc.id + "/rows");
                fillIds(desc);
            }
            return rows.then(function (d) { return range.dim(0).filter(d, desc.size[0]); });
        },
        objs: function (desc, range) {
            if (objs == null && (range.isAll || desc.loadAtOnce)) {
                objs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/table/" + desc.id + "/raw").then(function (data) { return maskObjects(data, desc); });
            }
            if (range.isAll) {
                return objs;
            }
            if (objs != null) { //already loading all
                return objs.then(function (d) { return range.filter(d, desc.size); });
            }
            //server side slicing
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIData"])("/dataset/table/" + desc.id + "/raw", { range: range.toString() }).then(function (data) { return maskObjects(data, desc); });
        },
        data: function (desc, range) {
            if (data == null && (range.isAll || desc.loadAtOnce)) {
                data = r.objs(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])()).then(function (objs) { return toFlat(objs, desc.columns); });
            }
            if (range.isAll) {
                return data;
            }
            if (data != null) { //already loading all
                return data.then(function (d) { return range.filter(d, desc.size); });
            }
            //server side slicing
            return r.objs(desc, range).then(function (objs) { return toFlat(objs, desc.columns); });
        },
        col: function (desc, column, range) {
            var colDesc = desc.columns.find(function (c) { return c.column === column || c.name === column; });
            if (cols[column] == null && (range.isAll || desc.loadAtOnce)) {
                if (objs === null) {
                    if (desc.loadAtOnce) {
                        objs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/table/" + desc.id + "/raw").then(function (data) { return maskObjects(data, desc); });
                        cols[column] = objs.then(function (objs) { return objs.map(function (row) { return row[column]; }); });
                    }
                    else {
                        cols[column] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])("/dataset/table/" + desc.id + "/col/" + column).then(function (data) { return maskCol(data, colDesc); });
                    }
                }
                else {
                    cols[column] = objs.then(function (objs) { return objs.map(function (row) { return row[column]; }); });
                }
            }
            if (range.isAll) {
                return cols[column];
            }
            if (cols[column] != null) { //already loading all
                return cols[column].then(function (d) { return filterObjects(d, range, desc); });
            }
            //server side slicing
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIData"])("/dataset/table/" + desc.id + "/col/" + column, { range: range.toString() }).then(function (data) { return maskCol(data, colDesc); });
        },
        view: function (desc, name, args) { return viaAPIViewLoader(name, args); }
    };
    return r;
}
function toFlat(data, vecs) {
    return data.map(function (row) { return vecs.map(function (col) { return row[col.column]; }); });
}
/**
 * @internal
 */
function viaDataLoader(data, nameProperty) {
    var _data = undefined;
    return function (desc) {
        if (_data) { //in the cache
            return Promise.resolve(_data);
        }
        var name = typeof (nameProperty) === 'function' ? nameProperty : function (d) { return d[nameProperty.toString()]; };
        function toGetter(col) {
            if (col.getter) {
                return col.getter;
            }
            return function (d) { return d[col.column]; };
        }
        var getters = desc.columns.map(toGetter);
        var objs = data.map(function (row) {
            var r = { _: row };
            desc.columns.forEach(function (col, i) {
                r[col.column] = getters[i](row);
            });
            return r;
        });
        var rows = data.map(name);
        _data = {
            rowIds: desc.rowassigner ? desc.rowassigner.map(rows) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["range"])(0, data.length),
            rows: rows,
            objs: objs,
            data: getters.map(function (getter) { return data.map(getter); })
        };
        return Promise.resolve(_data);
    };
}


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datatype__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = createDefaultVectorDesc;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */


function createDefaultVectorDesc() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__datatype__["createDefaultDataDesc"])(), {
        type: 'vector',
        idtype: '_rows',
        size: 0,
        value: {
            type: 'string'
        }
    });
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asVector", function() { return __WEBPACK_IMPORTED_MODULE_0__Vector__["asVector"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_VectorNameVector__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asNameVector", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_VectorNameVector__["a"]; });
/**
 * Created by sam on 26.12.2016.
 */




/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(4);
/**
 * Created by Samuel Gratzl on 14.02.2017.
 */



var ProjectedAtom = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ProjectedAtom, _super);
    function ProjectedAtom(v, f, thisArgument, valuetype, _idtype) {
        if (thisArgument === void 0) { thisArgument = v; }
        if (valuetype === void 0) { valuetype = v.valuetype; }
        if (_idtype === void 0) { _idtype = v.idtype; }
        var _this = _super.call(this) || this;
        _this.v = v;
        _this.f = f;
        _this.thisArgument = thisArgument;
        _this.valuetype = valuetype;
        _this._idtype = _idtype;
        _this.cache = null;
        _this.desc = {
            name: v.desc.name + '-p',
            fqname: v.desc.fqname + '-p',
            type: 'atom',
            id: v.desc.id + '-p',
            idtype: v.idtype,
            value: _this.valuetype,
            description: v.desc.description,
            creator: v.desc.creator,
            ts: v.desc.ts
        };
        return _this;
    }
    ProjectedAtom.prototype.load = function () {
        var _this = this;
        if (this.cache === null) {
            this.cache = Promise.all([this.v.data(), this.v.ids(), this.v.names()]).then(function (arr) {
                return _this.f.apply(_this.thisArgument, arr);
            });
        }
        return this.cache;
    };
    ProjectedAtom.prototype.id = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(d.id)];
                }
            });
        });
    };
    ProjectedAtom.prototype.name = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, d.name];
                }
            });
        });
    };
    ProjectedAtom.prototype.data = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var d;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, d.value];
                }
            });
        });
    };
    Object.defineProperty(ProjectedAtom.prototype, "dim", {
        get: function () {
            return [1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectedAtom.prototype, "idtype", {
        get: function () {
            return this._idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectedAtom.prototype, "idtypes", {
        get: function () {
            return [this._idtype];
        },
        enumerable: true,
        configurable: true
    });
    ProjectedAtom.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(range);
        if (range.isNone) {
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["none"])());
        }
        return this.id();
    };
    ProjectedAtom.prototype.idView = function (idRange) {
        return Promise.resolve(this);
    };
    ProjectedAtom.prototype.persist = function () {
        return {
            root: this.v.persist(),
            f: this.f.toString(),
            valuetype: this.valuetype === this.v.valuetype ? undefined : this.valuetype,
            idtype: this.idtype === this.v.idtype ? undefined : this.idtype.name
        };
    };
    ProjectedAtom.prototype.restore = function (persisted) {
        return this;
    };
    return ProjectedAtom;
}(__WEBPACK_IMPORTED_MODULE_2__idtype__["SelectAble"]));
/* harmony default export */ __webpack_exports__["a"] = (ProjectedAtom);


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stratification_StratificationGroup__ = __webpack_require__(66);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */





/**
 * root matrix implementation holding the data
 * @internal
 */
var StratificationVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](StratificationVector, _super);
    function StratificationVector(v, r) {
        var _this = _super.call(this, {
            id: v.desc.id + '-s',
            name: v.desc.name,
            description: v.desc.description,
            creator: v.desc.creator,
            ts: v.desc.ts,
            fqname: v.desc.fqname,
            type: 'stratification',
            idtype: v.idtype.id,
            size: v.length,
            ngroups: r.groups.length,
            groups: r.groups.map(function (ri) { return ({ name: ri.name, color: ri.color, size: ri.length }); })
        }) || this;
        _this.v = v;
        _this.r = r;
        return _this;
    }
    Object.defineProperty(StratificationVector.prototype, "idtype", {
        get: function () {
            return this.v.idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationVector.prototype, "groups", {
        get: function () {
            return this.desc.groups;
        },
        enumerable: true,
        configurable: true
    });
    StratificationVector.prototype.group = function (group) {
        return new __WEBPACK_IMPORTED_MODULE_4__stratification_StratificationGroup__["a" /* default */](this, group, this.groups[group]);
    };
    StratificationVector.prototype.hist = function (bins, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __WEBPACK_IMPORTED_MODULE_3__math__["rangeHist"];
                        return [4 /*yield*/, this.range()];
                    case 1: 
                    // FIXME unused parameter
                    return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    StratificationVector.prototype.vector = function () {
        return this.asVector();
    };
    StratificationVector.prototype.asVector = function () {
        return Promise.resolve(this.v);
    };
    StratificationVector.prototype.origin = function () {
        return this.asVector();
    };
    StratificationVector.prototype.range = function () {
        return Promise.resolve(this.r);
    };
    StratificationVector.prototype.idRange = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var ids;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ids()];
                    case 1:
                        ids = _a.sent();
                        return [2 /*return*/, ids.dim(0).preMultiply(this.r, this.dim[0])];
                }
            });
        });
    };
    StratificationVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.v.names(range);
    };
    StratificationVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.v.ids(range);
    };
    Object.defineProperty(StratificationVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    StratificationVector.prototype.size = function () {
        return this.desc.size;
    };
    Object.defineProperty(StratificationVector.prototype, "length", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationVector.prototype, "ngroups", {
        get: function () {
            return this.groups.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationVector.prototype, "dim", {
        get: function () {
            return [this.size()];
        },
        enumerable: true,
        configurable: true
    });
    StratificationVector.prototype.persist = function () {
        return {
            root: this.v.persist(),
            asstrat: true
        };
    };
    return StratificationVector;
}(__WEBPACK_IMPORTED_MODULE_2__datatype__["ADataType"]));
/* harmony default export */ __webpack_exports__["a"] = (StratificationVector);


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ANameVector__ = __webpack_require__(23);
/* harmony export (immutable) */ __webpack_exports__["a"] = asNameVector;



var VectorNameVector = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VectorNameVector, _super);
    function VectorNameVector(vector) {
        var _this = _super.call(this, vector) || this;
        _this.root = _this;
        return _this;
    }
    Object.defineProperty(VectorNameVector.prototype, "idtype", {
        get: function () {
            return this.base.idtype;
        },
        enumerable: true,
        configurable: true
    });
    VectorNameVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.names(range);
    };
    VectorNameVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])(); }
        return this.base.ids(range);
    };
    VectorNameVector.prototype.size = function () {
        return this.base.length;
    };
    return VectorNameVector;
}(__WEBPACK_IMPORTED_MODULE_2__ANameVector__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (VectorNameVector);
/**
 * converts the name of the given vector as a string vector
 * @param vector
 * @return {IStringVector}
 */
function asNameVector(vector) {
    return new VectorNameVector(vector);
}


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatype__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = viaAPILoader;
/* harmony export (immutable) */ __webpack_exports__["b"] = viaDataLoader;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */




/**
 * @internal
 */
function viaAPILoader() {
    var _loader = undefined;
    return function (desc) {
        if (_loader) { //in the cache
            return _loader;
        }
        return _loader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax__["getAPIJSON"])('/dataset/' + desc.id).then(function (data) {
            var range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(data.rowIds);
            data.rowIds = range;
            data.data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__datatype__["mask"])(data.data, desc.value);
            var idType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(desc.idtype);
            idType.fillMapCache(range.dim(0).asList(data.rows.length), data.rows);
            return data;
        });
    };
}
/**
 * @internal
 */
function viaDataLoader(rows, rowIds, data) {
    var _data = undefined;
    return function () {
        if (_data) { //in the cache
            return Promise.resolve(_data);
        }
        _data = {
            rowIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["parse"])(rowIds),
            rows: rows,
            data: data
        };
        return Promise.resolve(_data);
    };
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ranges", function() { return ranges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idtypes", function() { return idtypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geom", function() { return geom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 29.12.2014.
 * @deprecated use direct imports
 */






var C = __WEBPACK_IMPORTED_MODULE_0__index__;
var data = __WEBPACK_IMPORTED_MODULE_1__data__;
var ranges = __WEBPACK_IMPORTED_MODULE_2__range__;
var idtypes = __WEBPACK_IMPORTED_MODULE_3__idtype__;
var geom = __WEBPACK_IMPORTED_MODULE_5__geom__;
var events = __WEBPACK_IMPORTED_MODULE_4__event__;


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_esm_toConsumableArray__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_esm_slicedToArray__ = __webpack_require__(89);











var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    var _console;

    /* eslint no-console: 0 */
    if (console && console[type]) (_console = console)[type].apply(_console, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(args));
  }
};

var Logger =
/*#__PURE__*/
function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Logger);

    this.init(concreteLogger, options);
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, EventEmitter);

    this.observers = {};
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

// http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/
function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  /* eslint prefer-template: 0 */

  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  } // Fallback to default values


  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  /* eslint no-restricted-syntax: 0 */
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }

  return target;
}
function regexEscape(str) {
  /* eslint no-useless-escape: 0 */
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
/* eslint-disable */

var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
/* eslint-enable */

function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}

var ResourceStore =
/*#__PURE__*/
function (_EventEmitter) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__["a" /* default */])(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, ResourceStore);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(ResourceStore).call(this));
    EventEmitter.call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      return getPath(this.data, path);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      /* eslint no-restricted-syntax: 0 */
      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS; // COMPATIBILITY: remove extend in v2.1.0

      if (this.options.compatibilityAPI === 'v1') return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var Translator =
/*#__PURE__*/
function (_EventEmitter) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__["a" /* default */])(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Translator);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Translator).call(this));
    EventEmitter.call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)); // <=IE10 fix (unable to call parent constructor)

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator || this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options) {
      var _this2 = this;

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        /* eslint prefer-rest-params: 0 */
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {}; // non valid keys handling

      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)]; // separators

      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator; // get namespace(s)

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1]; // return key on CIMode

      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      } // resolve from store


      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays; // object

      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        } // if we got a separator we loop over children - else we just return object as is
        // as having it set to false means no hierarchy so no lookup for nested values


        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy$$1 = resTypeIsArray ? [] : {}; // apply child translation on a copy

          /* eslint no-restricted-syntax: 0 */

          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy$$1[m] = this.translate(deepKey, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy$$1[m] === deepKey) copy$$1[m] = res[m]; // if nothing found use orginal value as fallback
            }
          }

          res = copy$$1;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        // array special treatment
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options);
      } else {
        // string, empty or null
        var usedDefault = false;
        var usedKey = false; // fallback value

        if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
          usedDefault = true;

          if (options.count !== undefined) {
            var suffix = this.pluralResolver.getSuffix(lng, options.count);
            res = options["defaultValue".concat(suffix)];
          }

          if (!res) res = options.defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        } // save missing


        var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (l) {
                var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

                plurals.forEach(function (p) {
                  return send([l], p);
                });
              });
            } else {
              send(lngs, key);
            }
          }
        } // extend


        res = this.extendTranslation(res, keys, options, resolved); // append namespace if still key

        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key); // parseMissingKeyHandler

        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      } // return


      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        // i18next.parsing
        if (options.interpolation) this.interpolator.init(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, {
          interpolation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, this.options.interpolation, options.interpolation)
        })); // interpolate

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options); // nesting

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          return _this3.translate.apply(_this3, arguments);
        }, options);
        if (options.interpolation) this.interpolator.reset();
      } // post process


      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey; // plain key

      var exactUsedKey; // key with context / plural

      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys]; // forEach possible key

      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (_this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            _this4.logger.warn("key \"".concat(usedKey, "\" for namespace \"").concat(usedNS, "\" won't get resolved as namespace was not yet loaded"), 'This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count); // fallback for plural if context not found

              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix); // get key for context if needed

              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context)); // get key for plural if needed

              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            } // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only


            var possibleKey;
            /* eslint no-cond-assign: 0 */

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil =
/*#__PURE__*/
function () {
  function LanguageUtil(options) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.whitelist || false;
    this.logger = baseLogger.create('languageUtils');
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      // http://www.iana.org/assignments/language-tags/language-tags.xhtml
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase(); // if lenght 2 guess it's a country

          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || []; // asume we have an object defining fallbacks

      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this.isWhitelisted(c)) {
          codes.push(c);
        } else {
          _this.logger.warn("rejecting non-whitelisted language code: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

/* eslint-disable */

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n === 1 ? 0 : n === 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
/* eslint-enable */

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver =
/*#__PURE__*/
function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var _this = this;

      var ret = [];
      var rule = this.getRule(code);
      if (!rule) return ret;
      rule.numbers.forEach(function (n) {
        var suffix = _this.getSuffix(code, n);

        ret.push("".concat(key).concat(suffix));
      });
      return ret;
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        // if (rule.numbers.length === 1) return ''; // only singular
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx]; // special treatment for lngs only having singular and plural

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        }; // COMPATIBILITY JSON
        // v1


        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (
        /* v2 */
        this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (
        /* v3 - gettext index */
        this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var Interpolator =
/*#__PURE__*/
function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }
  /* eslint no-param-reassign: 0 */


  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000; // the regexp

      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      // the regexp
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          return getPathWithDefaults(data, defaultData, key);
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng);
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      replaces = 0; // unescape if has unescapePrefix/Suffix

      /* eslint no-cond-assign: 0 */

      while (match = this.regexpUnescape.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === 'string' ? temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        str = str.replace(match[0], regexSafe(value));
        this.regexpUnescape.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      replaces = 0; // regular escape on demand

      while (match = this.regexp.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var _temp = missingInterpolationHandler(str, match, options);

            value = typeof _temp === 'string' ? _temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options);

      clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

      delete clonedOptions.defaultValue; // assert we do not get a endless loop on interpolating defaultValue again and again
      // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"

      function handleHasOptions(key, inheritedOptions) {
        if (key.indexOf(',') < 0) return key;
        var p = key.split(',');
        key = p.shift();
        var optionsString = p.join(',');
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.error("failed parsing options string in nesting for key ".concat(key), e);
        } // assert we do not get a endless loop on interpolating defaultValue again and again


        delete clonedOptions.defaultValue;
        return key;
      } // regular escape on demand


      while (match = this.nestingRegexp.exec(str)) {
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions); // is only the nesting key (key1 = '$(key2)') return the value without stringify

        if (value && match[0] === str && typeof value !== 'string') return value; // no string to include or empty

        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        } // Nested keys should not be escaped by default #854
        // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);


        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector =
/*#__PURE__*/
function (_EventEmitter) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__["a" /* default */])(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Connector);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Connector).call(this));
    EventEmitter.call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      // find what needs to be loaded
      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2; // loaded
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1; // pending

            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var _name$split = name.split('|'),
          _name$split2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_name$split, 2),
          lng = _name$split2[0],
          ns = _name$split2[1];

      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      } // set loaded


      this.state[name] = err ? -1 : 2; // consolidated loading done in this run - only emit once for a loaded namespace

      var loaded = {}; // callback if ready

      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          // only do once per loaded -> this.emit('loaded', q.loaded);
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          /* eslint no-param-reassign: 0 */

          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      }); // emit consolidated loaded event

      this.emit('loaded', loaded); // remove done load requests

      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {}); // noting to load

      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data
        /* = retryFlag */
        && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now

        return null; // pendings will trigger callback
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _name$split3 = name.split('|'),
          _name$split4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_name$split3, 2),
          lng = _name$split4[0],
          ns = _name$split4[1];

      this.read(lng, ns, 'read', null, null, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" for namespace \"").concat(namespace, "\" as the namespace was not yet loaded"), 'This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null
        /* unused callback */
        , __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, {
          isUpdate: isUpdate
        }));
      } // write to store to avoid resending


      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    // string or array of namespaces
    whitelist: false,
    // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all',
    // | currentOnly | languageOnly
    preload: false,
    // array with preload languages
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    // allow bundling certain languages that are not remotely fetched
    saveMissing: false,
    // enable to send missing values
    updateMissing: false,
    // enable to update default values if different from translated value (only useful on initial development, or when keeping code as source of truth)
    saveMissingTo: 'fallback',
    // 'current' || 'all'
    saveMissingPlurals: true,
    // will save all forms not only singular key
    missingKeyHandler: false,
    // function(lng, ns, key, fallbackValue) -> override if prefer on handling
    missingInterpolationHandler: false,
    // function(str, match)
    postProcess: false,
    // string or array of postProcessor names
    postProcessPassResolved: false,
    // pass resolved object into 'options.i18nResolved' for postprocessor
    returnNull: true,
    // allows null value as valid translation
    returnEmptyString: true,
    // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false,
    // or string to join array
    returnedObjectHandler: false,
    // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false,
    // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(args[2]) === 'object' || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      // defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
      maxReplaces: 1000 // max replaces to prevent endless loop

    }
  };
}
/* eslint no-param-reassign: 0 */

function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS]; // extend whitelist with cimode

  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
    options.whitelist = options.whitelist.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n =
/*#__PURE__*/
function (_EventEmitter) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__["a" /* default */])(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, I18n);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(I18n).call(this));
    EventEmitter.call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      // https://github.com/i18next/i18next/issues/879
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(_this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      } // init services


      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options); // pipe events from backendConnector

        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options); // pipe events from translator

        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      } // append api


      var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var deferred = defer();

      var load = function load() {
        _this2.changeLanguage(_this2.options.lng, function (err, t) {
          _this2.isInitialized = true;

          _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t); // not rejecting on err (as err is only a loading translation failed warning)

          callback(err, t);
        });
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "loadResources",
    value: function loadResources() {
      var _this3 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (this.language && this.language.toLowerCase() === 'cimode') return callback(); // avoid loading resources for cimode

        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!this.language) {
          // at least load fallbacks in this case
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(this.language);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, callback);
      } else {
        callback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve(); // not rejecting on err (as err is only a loading translation failed warning)

        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        _this4.translator.changeLanguage(l);

        if (l) {
          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1]; // we're in cimode so this shall pass

      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      }; // loaded -> SUCCESS


      if (this.hasResourceBundle(lng, ns)) return true; // were not loading at all -> SEMI SUCCESS

      if (!this.services.backendConnector.backend) return true; // failed loading ns - but at least fallback is not pending -> SEMI SUCCESS

      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      }); // Exit early if all given languages are already preloaded

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
    /* eslint class-methods-use-this: 0 */

  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options; // sync options

      return clone;
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

/* harmony default export */ __webpack_exports__["a"] = (i18next);


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = {
	"core": {}
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2D.ts": 10,
	"./ajax.ts": 9,
	"./atom/index.ts": 93,
	"./behavior.ts": 94,
	"./data.ts": 19,
	"./datatype.ts": 3,
	"./event.ts": 5,
	"./extensions.ts": 24,
	"./geom/index.ts": 25,
	"./graph/index.ts": 46,
	"./i18n/index.ts": 95,
	"./idtype/index.ts": 4,
	"./index.ts": 2,
	"./iterator.ts": 26,
	"./layout.ts": 102,
	"./layout_view.ts": 103,
	"./math.ts": 11,
	"./matrix/index.ts": 104,
	"./multiform/index.ts": 114,
	"./phovea.ts": 55,
	"./plugin.ts": 7,
	"./provenance/index.ts": 117,
	"./range/index.ts": 1,
	"./security.ts": 22,
	"./session.ts": 63,
	"./stratification/index.ts": 121,
	"./sync/index.ts": 126,
	"./table/index.ts": 128,
	"./vector/index.ts": 135,
	"./vis.ts": 28,
	"./wrapper.ts": 140
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 143;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(72);
__webpack_require__(73);
module.exports = __webpack_require__(71);


/***/ })
/******/ ]);
});