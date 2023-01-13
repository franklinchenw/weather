/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.dev.ts":
/*!******************************!*\
  !*** ./config/config.dev.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
var config = {
  OpenWeatherApi: {
    apiUrl: "https://api.openweathermap.org/data/2.5",
    apiKey: "d11d34b38d013ce1fc908bcc04a87e6b"
  }
};

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_pages_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/weather */ "./src/components/pages/weather.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
        path: "/",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_pages_weather__WEBPACK_IMPORTED_MODULE_0__.Weather, {})
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/apis/axios.ts":
/*!***************************!*\
  !*** ./src/apis/axios.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeAPICall": () => (/* binding */ makeAPICall)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _config_config_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config.dev */ "./config/config.dev.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Utility function for making the http request
 * @param url
 * @param method
 * @param data
 */
var makeAPICall = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, method, data) {
    var result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
            baseURL: _config_config_dev__WEBPACK_IMPORTED_MODULE_0__.config.OpenWeatherApi.apiUrl
          }).request({
            url: url,
            method: method,
            headers: {
              "Content-Type": "application/json"
            },
            data: data
          });
        case 3:
          result = _context.sent;
          return _context.abrupt("return", {
            data: result.data,
            status: result.status
          });
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.warn("makeAPICall occurs error - ".concat(url, "(").concat(_context.t0, ")"));
          throw _context.t0;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function makeAPICall(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/apis/weather.ts":
/*!*****************************!*\
  !*** ./src/apis/weather.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doGetCurrentWeatherData": () => (/* binding */ doGetCurrentWeatherData)
/* harmony export */ });
/* harmony import */ var _services_OpenWeatherService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/OpenWeatherService */ "./src/services/OpenWeatherService.ts");

var doGetCurrentWeatherData = function doGetCurrentWeatherData(city, unit) {
  return new _services_OpenWeatherService__WEBPACK_IMPORTED_MODULE_0__["default"]().getCurrentWeatherData(city, unit);
};


/***/ }),

/***/ "./src/components/atoms/Card.tsx":
/*!***************************************!*\
  !*** ./src/components/atoms/Card.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var Card = function Card(_ref) {
  var title = _ref.title,
    description = _ref.description;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "card text-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
        className: "card-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "card-text",
        children: description
      })]
    })
  });
};

/***/ }),

/***/ "./src/components/atoms/SwitchToggle.tsx":
/*!***********************************************!*\
  !*** ./src/components/atoms/SwitchToggle.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchToggle": () => (/* binding */ SwitchToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SwitchToggle = function SwitchToggle(_ref) {
  var on = _ref.on,
    off = _ref.off,
    toggleOn = _ref.toggleOn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "can-toggle demo-rebrand-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      id: "e",
      type: "checkbox",
      checked: checked,
      onChange: function onChange() {
        setChecked(!checked);
        toggleOn(!checked);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: "e",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "can-toggle__switch",
        "data-checked": on,
        "data-unchecked": off
      })
    })]
  });
};

/***/ }),

/***/ "./src/components/molecules/FavoriteLocations.tsx":
/*!********************************************************!*\
  !*** ./src/components/molecules/FavoriteLocations.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteLocations": () => (/* binding */ FavoriteLocations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var FavoriteLocations = function FavoriteLocations(_ref) {
  var selectLocation = _ref.selectLocation,
    defaultLocation = _ref.defaultLocation;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    favoriteLocations = _useState2[0],
    setFavoriteLocations = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setDefaultFavoriteLocation();
  }, [defaultLocation]);
  var setDefaultFavoriteLocation = function setDefaultFavoriteLocation() {
    setFavoriteLocations(defaultLocation);
  };
  var chooseLocation = function chooseLocation(index, name) {
    favoriteLocations.map(function (location) {
      return location.selected = false;
    });
    favoriteLocations[index].selected = true;
    setFavoriteLocations(_toConsumableArray(favoriteLocations));
    selectLocation(name);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "card favorite-location-card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "weather-card-title favorite-sub-title",
      children: "Favorite Locations"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "favorite-list",
      children: favoriteLocations.map(function (location, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: location.selected ? "favorite-list-item active" : "favorite-list-item",
          onClick: function onClick() {
            return chooseLocation(index, location.name);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            className: "icon",
            src: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.replaceConditionWithIcon)(location.conditionId),
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: location.name
          })]
        });
      })
    })]
  });
};

/***/ }),

/***/ "./src/components/molecules/HeaderRow.tsx":
/*!************************************************!*\
  !*** ./src/components/molecules/HeaderRow.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderRow": () => (/* binding */ HeaderRow)
/* harmony export */ });
/* harmony import */ var _constants_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.ts");
/* harmony import */ var _atoms_SwitchToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/SwitchToggle */ "./src/components/atoms/SwitchToggle.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var HeaderRow = function HeaderRow(_ref) {
  var title = _ref.title,
    switchOn = _ref.switchOn;
  var toggleOn = function toggleOn(checked) {
    switchOn(checked);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "header",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_SwitchToggle__WEBPACK_IMPORTED_MODULE_1__.SwitchToggle, {
      on: _constants_types__WEBPACK_IMPORTED_MODULE_0__.TEMP_SIGNS.METRIC,
      off: _constants_types__WEBPACK_IMPORTED_MODULE_0__.TEMP_SIGNS.IMPERIAL,
      toggleOn: toggleOn
    })]
  });
};

/***/ }),

/***/ "./src/components/molecules/LocationWeather.tsx":
/*!******************************************************!*\
  !*** ./src/components/molecules/LocationWeather.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationWeather": () => (/* binding */ LocationWeather)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.ts");
/* harmony import */ var _atoms_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Card */ "./src/components/atoms/Card.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var LocationWeather = function LocationWeather(_ref) {
  var _data$weather$;
  var location = _ref.location,
    unit = _ref.unit,
    data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "card weather-details-card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "weather-card-title",
      children: location
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "details-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "weather-highlight-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            className: "highlight-row-icon",
            src: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.replaceConditionWithIcon)((data === null || data === void 0 ? void 0 : (_data$weather$ = data.weather[0]) === null || _data$weather$ === void 0 ? void 0 : _data$weather$.id.toString()) || ""),
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "weather-highlight-row-current-temp",
            children: Math.floor((data === null || data === void 0 ? void 0 : data.main.temp) || 0) + (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getTemperatureSign)(unit)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "weather-highlight-row-current-desc",
            children: data === null || data === void 0 ? void 0 : data.weather[0].description
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "weather-scrollable-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "WIND",
          description: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getWindSpeed)(unit, data === null || data === void 0 ? void 0 : data.wind.speed)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "VISIBILITY",
          description: Math.round(((data === null || data === void 0 ? void 0 : data.visibility) || 1) / 1000).toString() + " km"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "HUMIDITY",
          description: ((data === null || data === void 0 ? void 0 : data.main.humidity) || 0) + " %"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "PRESSURE",
          description: ((data === null || data === void 0 ? void 0 : data.main.pressure) || 0) + " hPa"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "FEELS LIKE",
          description: Math.floor((data === null || data === void 0 ? void 0 : data.main.feels_like) || 0) + (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getTemperatureSign)(unit)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "MAX TEMP",
          description: Math.floor((data === null || data === void 0 ? void 0 : data.main.temp_max) || 0) + (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getTemperatureSign)(unit)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "MIN TEMP",
          description: Math.floor((data === null || data === void 0 ? void 0 : data.main.temp_min) || 0) + (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getTemperatureSign)(unit)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "SUNRISE",
          description: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getDateTime)(data === null || data === void 0 ? void 0 : data.sys.sunrise)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
          title: "SUNSET",
          description: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getDateTime)(data === null || data === void 0 ? void 0 : data.sys.sunset)
        })]
      })]
    })]
  });
};

/***/ }),

/***/ "./src/components/pages/weather.tsx":
/*!******************************************!*\
  !*** ./src/components/pages/weather.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _molecules_HeaderRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../molecules/HeaderRow */ "./src/components/molecules/HeaderRow.tsx");
/* harmony import */ var _molecules_FavoriteLocations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/FavoriteLocations */ "./src/components/molecules/FavoriteLocations.tsx");
/* harmony import */ var _apis_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/weather */ "./src/apis/weather.ts");
/* harmony import */ var _molecules_LocationWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/LocationWeather */ "./src/components/molecules/LocationWeather.tsx");
/* harmony import */ var _constants_weatherCondition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/weatherCondition */ "./src/constants/weatherCondition.ts");
/* harmony import */ var _constants_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Weather = function Weather() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_constants_types__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.METRIC),
    _useState2 = _slicedToArray(_useState, 2),
    unit = _useState2[0],
    setUnit = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_constants_types__WEBPACK_IMPORTED_MODULE_6__.TEMP_SIGNS.METRIC),
    _useState4 = _slicedToArray(_useState3, 2),
    tempSign = _useState4[0],
    setTempSign = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Toronto, Canada"),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedLocation = _useState6[0],
    setSelectedLocation = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_constants_weatherCondition__WEBPACK_IMPORTED_MODULE_5__.mockDefaultLocations),
    _useState8 = _slicedToArray(_useState7, 2),
    defaultLocations = _useState8[0],
    setDefaultLocations = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    weatherData = _useState10[0],
    setWeatherData = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchCurrentWeather();
  }, [selectedLocation, unit]);
  var toggleSwitch = function toggleSwitch(checked) {
    if (checked) {
      setUnit(_constants_types__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.METRIC);
    } else {
      setUnit(_constants_types__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.IMPERIAL);
    }
  };
  var selectLocation = function selectLocation(location) {
    setSelectedLocation(location);
  };
  var updateDefaultLocationIcon = function updateDefaultLocationIcon(data) {
    // update favorite location icon after api call
    // could have done it with calling multiple apis when application runs
    defaultLocations.map(function (location, index) {
      if (location.name.includes(data.name)) {
        var newLocationList = defaultLocations;
        newLocationList[index].conditionId = data.weather[0].id.toString();
        setDefaultLocations(newLocationList);
      }
    });
  };
  var fetchCurrentWeather = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,_apis_weather__WEBPACK_IMPORTED_MODULE_3__.doGetCurrentWeatherData)(selectedLocation, unit);
          case 3:
            data = _context.sent;
            setWeatherData(data.data);
            updateDefaultLocationIcon(data.data);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            throw _context.t0;
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function fetchCurrentWeather() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "weather-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_molecules_HeaderRow__WEBPACK_IMPORTED_MODULE_1__.HeaderRow, {
      title: "Weather",
      switchOn: toggleSwitch
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_molecules_FavoriteLocations__WEBPACK_IMPORTED_MODULE_2__.FavoriteLocations, {
        selectLocation: selectLocation,
        defaultLocation: defaultLocations
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_molecules_LocationWeather__WEBPACK_IMPORTED_MODULE_4__.LocationWeather, {
        location: selectedLocation,
        data: weatherData,
        unit: unit
      })]
    })]
  });
};

/***/ }),

/***/ "./src/constants/types.ts":
/*!********************************!*\
  !*** ./src/constants/types.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEMP_SIGNS": () => (/* binding */ TEMP_SIGNS),
/* harmony export */   "UNIT_TYPES": () => (/* binding */ UNIT_TYPES)
/* harmony export */ });
var UNIT_TYPES = {
  METRIC: "metric",
  IMPERIAL: "imperial"
};
var TEMP_SIGNS = {
  METRIC: "°C",
  IMPERIAL: "°F"
};

/***/ }),

/***/ "./src/constants/weatherCondition.ts":
/*!*******************************************!*\
  !*** ./src/constants/weatherCondition.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WEATHER_CONDITION": () => (/* binding */ WEATHER_CONDITION),
/* harmony export */   "WEATHER_CONDITION_ID": () => (/* binding */ WEATHER_CONDITION_ID),
/* harmony export */   "mockDefaultLocations": () => (/* binding */ mockDefaultLocations)
/* harmony export */ });
// Provided by https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
// should have a list of codes instead of giving regex
var WEATHER_CONDITION_ID = {
  PARTY_CLOUDY: "(80[1-9]|8[1-9]d)$",
  RAINY: "(50[0-9]|5[1-9]d)$",
  SNOWY: "(60[0-9]|6[1-9]d)$",
  SUNNY: "800",
  UNKNOWN: "UNKNOWN"
};
var WEATHER_CONDITION = {
  PARTY_CLOUDY: "801",
  RAINY: "500",
  SNOWY: "600",
  SUNNY: "800",
  UNKNOWN: "0"
};

// mock data
var mockDefaultLocations = [{
  conditionId: WEATHER_CONDITION.RAINY,
  name: "Toronto, Canada",
  selected: true
}, {
  conditionId: WEATHER_CONDITION.PARTY_CLOUDY,
  name: "Ottawa, Canada",
  selected: false
}, {
  conditionId: WEATHER_CONDITION.SNOWY,
  name: "Montreal, Canada",
  selected: false
}, {
  conditionId: WEATHER_CONDITION.SUNNY,
  name: "Vancouver, Canada",
  selected: false
}, {
  conditionId: WEATHER_CONDITION.PARTY_CLOUDY,
  name: "London, Canada",
  selected: false
}, {
  conditionId: WEATHER_CONDITION.SUNNY,
  name: "New York, America",
  selected: false
}, {
  conditionId: WEATHER_CONDITION.PARTY_CLOUDY,
  name: "Los Angeles, America",
  selected: false
}, {
  conditionId: WEATHER_CONDITION.RAINY,
  name: "Chicago, America",
  selected: false
}];

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/base.scss */ "./src/styles/base.scss");
/* harmony import */ var _styles_toggle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/toggle.scss */ "./src/styles/toggle.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}));

/***/ }),

/***/ "./src/services/OpenWeatherService.ts":
/*!********************************************!*\
  !*** ./src/services/OpenWeatherService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenWeatherService)
/* harmony export */ });
/* harmony import */ var _apis_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/axios */ "./src/apis/axios.ts");
/* harmony import */ var _config_config_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config.dev */ "./config/config.dev.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var OpenWeatherService = /*#__PURE__*/function () {
  function OpenWeatherService() {
    _classCallCheck(this, OpenWeatherService);
  }
  _createClass(OpenWeatherService, [{
    key: "getCurrentWeatherData",
    value: //https://api.openweathermap.org/data/2.5/weather?q=London,ca&appid=d11d34b38d013ce1fc908bcc04a87e6b
    function () {
      var _getCurrentWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
        var unit,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              unit = _args.length > 1 && _args[1] !== undefined ? _args[1] : "metric";
              _context.next = 3;
              return (0,_apis_axios__WEBPACK_IMPORTED_MODULE_0__.makeAPICall)("weather?q=".concat(city, "&appid=").concat(_config_config_dev__WEBPACK_IMPORTED_MODULE_1__.config.OpenWeatherApi.apiKey, "&&units=").concat(unit), "GET");
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getCurrentWeatherData(_x) {
        return _getCurrentWeatherData.apply(this, arguments);
      }
      return getCurrentWeatherData;
    }()
  }, {
    key: "hourlyForecast4Days",
    value: function hourlyForecast4Days() {}
  }, {
    key: "dailyForecast16days",
    value: function dailyForecast16days() {}
  }]);
  return OpenWeatherService;
}();


/***/ }),

/***/ "./src/utils/helper.ts":
/*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateTime": () => (/* binding */ getDateTime),
/* harmony export */   "getTemperatureSign": () => (/* binding */ getTemperatureSign),
/* harmony export */   "getWindSpeed": () => (/* binding */ getWindSpeed),
/* harmony export */   "replaceConditionWithIcon": () => (/* binding */ replaceConditionWithIcon)
/* harmony export */ });
/* harmony import */ var _constants_weatherCondition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/weatherCondition */ "./src/constants/weatherCondition.ts");
/* harmony import */ var _assets_Sunny_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Sunny.png */ "./src/assets/Sunny.png");
/* harmony import */ var _assets_Sunny_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_Sunny_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_Partly_Cloudy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Partly_Cloudy.png */ "./src/assets/Partly_Cloudy.png");
/* harmony import */ var _assets_Partly_Cloudy_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_Partly_Cloudy_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_Rainy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Rainy.png */ "./src/assets/Rainy.png");
/* harmony import */ var _assets_Rainy_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_Rainy_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_Snowy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Snowy.png */ "./src/assets/Snowy.png");
/* harmony import */ var _assets_Snowy_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_Snowy_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/types */ "./src/constants/types.ts");






var replaceConditionWithIcon = function replaceConditionWithIcon(conditionId) {
  var _conditionId$match, _conditionId$match2, _conditionId$match3, _conditionId$match4;
  switch (conditionId) {
    case (_conditionId$match = conditionId.match(_constants_weatherCondition__WEBPACK_IMPORTED_MODULE_0__.WEATHER_CONDITION_ID.PARTY_CLOUDY)) === null || _conditionId$match === void 0 ? void 0 : _conditionId$match.input:
      return (_assets_Partly_Cloudy_png__WEBPACK_IMPORTED_MODULE_2___default());
    case (_conditionId$match2 = conditionId.match(_constants_weatherCondition__WEBPACK_IMPORTED_MODULE_0__.WEATHER_CONDITION_ID.RAINY)) === null || _conditionId$match2 === void 0 ? void 0 : _conditionId$match2.input:
      return (_assets_Rainy_png__WEBPACK_IMPORTED_MODULE_3___default());
    case (_conditionId$match3 = conditionId.match(_constants_weatherCondition__WEBPACK_IMPORTED_MODULE_0__.WEATHER_CONDITION_ID.SNOWY)) === null || _conditionId$match3 === void 0 ? void 0 : _conditionId$match3.input:
      return (_assets_Snowy_png__WEBPACK_IMPORTED_MODULE_4___default());
    case (_conditionId$match4 = conditionId.match(_constants_weatherCondition__WEBPACK_IMPORTED_MODULE_0__.WEATHER_CONDITION_ID.SUNNY)) === null || _conditionId$match4 === void 0 ? void 0 : _conditionId$match4.input:
      return (_assets_Sunny_png__WEBPACK_IMPORTED_MODULE_1___default());
    default:
      return (_assets_Sunny_png__WEBPACK_IMPORTED_MODULE_1___default());
  }
};
var getTemperatureSign = function getTemperatureSign(unit) {
  if (unit === _constants_types__WEBPACK_IMPORTED_MODULE_5__.UNIT_TYPES.METRIC) {
    return _constants_types__WEBPACK_IMPORTED_MODULE_5__.TEMP_SIGNS.METRIC;
  } else {
    return _constants_types__WEBPACK_IMPORTED_MODULE_5__.TEMP_SIGNS.IMPERIAL;
  }
};
var getWindSpeed = function getWindSpeed(unit, speed) {
  var km = 0;
  if (unit === _constants_types__WEBPACK_IMPORTED_MODULE_5__.UNIT_TYPES.METRIC) {
    km = Math.round(speed * 3.6);
  } else {
    km = Math.round(speed * 1.60934);
  }
  return km.toString() + " km/h";
};
var formatAMPM = function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};
var getDateTime = function getDateTime(timeStamp) {
  var date = new Date(timeStamp * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/base.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/base.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".weather-container {\n  margin: 20px; }\n\n.header {\n  height: 50px;\n  max-width: 800px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px;\n  border-color: #a9a9a9;\n  font-weight: bold;\n  border: 2px solid #b1b5c4;\n  border-bottom: none;\n  align-items: center;\n  font-size: 20px;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.05); }\n\n.body {\n  display: flex;\n  padding: 20px;\n  background-color: #e6f2f4;\n  max-width: 800px;\n  border-color: #ffffff;\n  border: 2px solid #b1b5c4;\n  border-top: none;\n  min-height: 400px; }\n\n.card {\n  font-size: 16px;\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 4px 0px grey;\n  margin: 3px; }\n\n.card-title, .weather-card-title {\n  margin-bottom: 0px;\n  border-bottom: 1px solid #b1b5c4;\n  font-size: 14px;\n  font-weight: 600;\n  color: #595050;\n  padding: 10px; }\n\n.favorite-location-card {\n  max-height: 375px;\n  margin-right: 10px;\n  min-width: 250px; }\n\n.favorite-list {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  overflow-y: scroll; }\n\n.favorite-list-item {\n  color: #595050;\n  align-items: center;\n  border-bottom: 1px solid #e9ebf1;\n  font-size: 13px;\n  padding: 10px;\n  display: flex; }\n  .favorite-list-item:hover {\n    cursor: pointer;\n    box-shadow: rgba(0, 0, 0, 0.28) 2px 2px 10px; }\n  .favorite-list-item .icon {\n    margin-right: 20px;\n    max-width: 35px; }\n  .favorite-list-item.active {\n    background: rgba(208, 239, 255, 0.992); }\n    .favorite-list-item.active img {\n      mix-blend-mode: multiply; }\n\n.weather-details-card {\n  margin-left: 10px;\n  width: 100%; }\n\n.details-card {\n  padding: 10px; }\n\n.weather-highlight-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.highlight-row-icon {\n  max-width: 100px;\n  margin-right: 30px; }\n\n.weather-highlight-row-current-temp {\n  font-size: 50px;\n  font-weight: 300;\n  color: #908282; }\n\n.weather-highlight-row-current-desc {\n  font-size: 20px;\n  font-weight: 400;\n  color: #908282; }\n\n.card.text-center {\n  min-width: 150px;\n  min-height: 150px; }\n\n.weather-scrollable-row {\n  display: flex;\n  overflow-x: scroll;\n  padding: 5px; }\n\n.card-text {\n  padding: 20px; }\n\n@media only screen and (max-width: 769px) {\n  .weather-container {\n    margin: 0px; }\n  .header {\n    position: fixed;\n    width: 100%;\n    background-color: white;\n    z-index: 1000;\n    border: none; }\n  .body {\n    position: relative;\n    top: 50px;\n    padding: 0px;\n    border: none;\n    flex-direction: column-reverse; }\n  .weather-details-card {\n    margin-left: 0px;\n    box-shadow: none; }\n  .card {\n    border: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px; }\n  .weather-card-title {\n    border: 0px;\n    font-size: 30px;\n    font-weight: 700;\n    color: #908282;\n    text-align: center; }\n  .weather-highlight-row {\n    flex-direction: column; }\n    .weather-highlight-row .highlight-row-icon {\n      margin-right: 0px; }\n  .favorite-sub-title {\n    text-align: left;\n    font-size: 20px;\n    border-bottom: 1px solid #b1b5c4; }\n  .favorite-location-card {\n    margin: 0px;\n    border: none;\n    box-shadow: none; } }\n\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 3px;\n  height: 8px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n", "",{"version":3,"sources":["webpack://./src/styles/base.scss"],"names":[],"mappings":"AAEA;EACE,YAAY,EAAA;;AAEd;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,uGACiC,EAAA;;AAEnC;EACE,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,qBAAqB;EACrB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB,EAAA;;AAEnB;EACE,eAAe;EAIf,uBAAuB;EACvB,kBAAkB;EAClB,gCAAgC;EAChC,WAAW,EAAA;;AAEb;EACE,kBAAkB;EAClB,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,aAAa,EAAA;;AAEf;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB,EAAA;;AAElB;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB,EAAA;;AAEpB;EACE,cAAc;EACd,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,aAAa;EACb,aAAa,EAAA;EANf;IAQI,eAAe;IACf,4CAA4C,EAAA;EAThD;IAYI,kBAAkB;IAClB,eAAe,EAAA;EAbnB;IAgBI,sCAAsC,EAAA;IAhB1C;MAkBM,wBAAwB,EAAA;;AAI9B;EACE,iBAAiB;EACjB,WAAW,EAAA;;AAEb;EACE,aAAa,EAAA;;AAEf;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB,EAAA;;AAEpB;EACE,gBAAgB;EAChB,kBAAkB,EAAA;;AAEpB;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc,EAAA;;AAEhB;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc,EAAA;;AAEhB;EACE,gBAAgB;EAChB,iBAAiB,EAAA;;AAEnB;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY,EAAA;;AAEd;EACE,aAAa,EAAA;;AAGf;EACE;IACE,WAAW,EAAA;EAEb;IACE,eAAe;IACf,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,YAAY,EAAA;EAEd;IACE,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,8BAA8B,EAAA;EAEhC;IACE,gBAAgB;IAChB,gBAAgB,EAAA;EAElB;IACE,WAAW;IACX,eAAe;IACf,kBAAkB,EAAA;EAEpB;IACE,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,kBAAkB,EAAA;EAEpB;IACE,sBAAsB,EAAA;IADxB;MAGI,iBAAiB,EAAA;EAGrB;IACE,gBAAgB;IAChB,eAAe;IACf,gCAAgC,EAAA;EAElC;IACE,WAAW;IACX,YAAY;IACZ,gBAAgB,EAAA,EACjB;;AAIH;EACE,wBAAwB;EACxB,UAAU;EACV,WAAW,EAAA;;AAEb;EACE,kBAAkB;EAClB,oCAAoC;EACpC,4CAA4C,EAAA","sourcesContent":["@import \"./variables.scss\";\n\n.weather-container {\n  margin: 20px;\n}\n.header {\n  height: 50px;\n  max-width: 800px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px;\n  border-color: #a9a9a9;\n  font-weight: bold;\n  border: 2px solid #b1b5c4;\n  border-bottom: none;\n  align-items: center;\n  font-size: 20px;\n  position: relative;\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),\n    0 2px 8px hsla(0, 0%, 0%, 0.05);\n}\n.body {\n  display: flex;\n  padding: 20px;\n  background-color: #e6f2f4;\n  max-width: 800px;\n  border-color: #ffffff;\n  border: 2px solid #b1b5c4;\n  border-top: none;\n  min-height: 400px;\n}\n.card {\n  font-size: 16px;\n  // div {\n  //   padding: 10px;\n  // }\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 4px 0px grey;\n  margin: 3px;\n}\n.card-title,.weather-card-title {\n  margin-bottom: 0px;\n  border-bottom: 1px solid #b1b5c4;\n  font-size: 14px;\n  font-weight: 600;\n  color: #595050;\n  padding: 10px;\n}\n.favorite-location-card {\n  max-height: 375px;\n  margin-right: 10px;\n  min-width: 250px;\n}\n.favorite-list {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  overflow-y: scroll;\n}\n.favorite-list-item {\n  color: #595050;\n  align-items: center;\n  border-bottom: 1px solid #e9ebf1;\n  font-size: 13px;\n  padding: 10px;\n  display: flex;\n  &:hover {\n    cursor: pointer;\n    box-shadow: rgba(0, 0, 0, 0.28) 2px 2px 10px;\n  }\n  .icon {\n    margin-right: 20px;\n    max-width: 35px;\n  }\n  &.active {\n    background: rgba(208, 239, 255, 0.992);\n    img {\n      mix-blend-mode: multiply;\n    }\n  }\n}\n.weather-details-card {\n  margin-left: 10px;\n  width: 100%;\n}\n.details-card {\n  padding: 10px;\n}\n.weather-highlight-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n  text-align: center;\n}\n.highlight-row-icon {\n  max-width: 100px;\n  margin-right: 30px;\n}\n.weather-highlight-row-current-temp {\n  font-size: 50px;\n  font-weight: 300;\n  color: #908282;\n}\n.weather-highlight-row-current-desc {\n  font-size: 20px;\n  font-weight: 400;\n  color: #908282;\n}\n.card.text-center {\n  min-width: 150px;\n  min-height: 150px;\n}\n.weather-scrollable-row {\n  display: flex;\n  overflow-x: scroll;\n  padding: 5px;\n}\n.card-text {\n  padding: 20px;\n}\n\n@media only screen and (max-width: $screen-md-min) {\n  .weather-container {\n    margin: 0px;\n  }\n  .header {\n    position: fixed;\n    width: 100%;\n    background-color: white;\n    z-index: 1000;\n    border: none;\n  }\n  .body {\n    position: relative;\n    top: 50px;\n    padding: 0px;\n    border: none;\n    flex-direction: column-reverse;\n  }\n  .weather-details-card {\n    margin-left: 0px;\n    box-shadow: none;\n  }\n  .card {\n    border: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n  .weather-card-title {\n    border: 0px;\n    font-size: 30px;\n    font-weight: 700;\n    color: #908282;\n    text-align: center;\n  }\n  .weather-highlight-row{\n    flex-direction: column;\n    .highlight-row-icon{\n      margin-right: 0px;\n    }\n  }\n  .favorite-sub-title {\n    text-align: left;\n    font-size: 20px;\n    border-bottom: 1px solid #b1b5c4;\n  }\n  .favorite-location-card {\n    margin: 0px;\n    border: none;\n    box-shadow: none;\n  }\n}\n\n// for iOS macOS\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 3px;\n  height: 8px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace; }\n", "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,8JAEY;EACZ,mCAAmC;EACnC,kCAAkC,EAAA;;AAGpC;EACE,+EACW,EAAA","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/toggle.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/toggle.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".can-toggle {\n  position: relative; }\n  .can-toggle *, .can-toggle *:before, .can-toggle *:after {\n    box-sizing: border-box; }\n  .can-toggle input[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0; }\n    .can-toggle input[type=\"checkbox\"][disabled] ~ label {\n      pointer-events: none; }\n      .can-toggle input[type=\"checkbox\"][disabled] ~ label .can-toggle__switch {\n        opacity: 0.4; }\n    .can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:before {\n      content: attr(data-unchecked);\n      left: 0; }\n    .can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n      content: attr(data-checked); }\n  .can-toggle label {\n    user-select: none;\n    position: relative;\n    display: flex;\n    align-items: center; }\n    .can-toggle label .can-toggle__label-text {\n      flex: 1;\n      padding-left: 32px; }\n    .can-toggle label .can-toggle__switch {\n      position: relative; }\n      .can-toggle label .can-toggle__switch:before {\n        content: attr(data-checked);\n        position: absolute;\n        top: 0;\n        text-transform: uppercase;\n        text-align: center; }\n      .can-toggle label .can-toggle__switch:after {\n        content: attr(data-unchecked);\n        position: absolute;\n        z-index: 5;\n        text-transform: uppercase;\n        text-align: center;\n        background: #46c2f3;\n        transform: translate3d(0, 0, 0); }\n  .can-toggle input[type=\"checkbox\"][disabled] ~ label {\n    color: rgba(119, 119, 119, 0.5); }\n  .can-toggle input[type=\"checkbox\"]:focus ~ label .can-toggle__switch, .can-toggle input[type=\"checkbox\"]:hover ~ label .can-toggle__switch {\n    background-color: #777; }\n    .can-toggle input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after, .can-toggle input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n      color: white; }\n  .can-toggle input[type=\"checkbox\"]:hover ~ label {\n    color: #6a6a6a; }\n  .can-toggle input[type=\"checkbox\"]:checked ~ label:hover {\n    color: #55bc49; }\n  .can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch {\n    background-color: #70c767; }\n    .can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n      color: white; }\n  .can-toggle input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch, .can-toggle input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch {\n    background-color: #5fc054; }\n    .can-toggle input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n      color: white; }\n  .can-toggle label .can-toggle__label-text {\n    flex: 1; }\n  .can-toggle label .can-toggle__switch {\n    transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);\n    background: #848484; }\n    .can-toggle label .can-toggle__switch:before {\n      color: rgba(255, 255, 255, 0.5); }\n    .can-toggle label .can-toggle__switch:after {\n      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);\n      transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);\n      color: white; }\n  .can-toggle input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after, .can-toggle input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0; }\n  .can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n    transform: translate3d(65px, 0, 0); }\n  .can-toggle input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0; }\n  .can-toggle label {\n    font-size: 14px; }\n    .can-toggle label .can-toggle__switch {\n      height: 36px;\n      flex: 0 0 134px;\n      border-radius: 4px; }\n      .can-toggle label .can-toggle__switch:before {\n        left: 67px;\n        font-size: 12px;\n        line-height: 36px;\n        width: 67px;\n        padding: 0 12px; }\n      .can-toggle label .can-toggle__switch:after {\n        top: 2px;\n        left: 2px;\n        border-radius: 2px;\n        width: 65px;\n        line-height: 32px;\n        font-size: 12px; }\n      .can-toggle label .can-toggle__switch:hover:after {\n        box-shadow: 0; }\n  .can-toggle.can-toggle--size-small input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after, .can-toggle.can-toggle--size-small input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4); }\n  .can-toggle.can-toggle--size-small input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n    transform: translate3d(44px, 0, 0); }\n  .can-toggle.can-toggle--size-small input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.can-toggle--size-small input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4); }\n  .can-toggle.can-toggle--size-small label {\n    font-size: 13px; }\n    .can-toggle.can-toggle--size-small label .can-toggle__switch {\n      height: 28px;\n      flex: 0 0 90px;\n      border-radius: 2px; }\n      .can-toggle.can-toggle--size-small label .can-toggle__switch:before {\n        left: 45px;\n        font-size: 10px;\n        line-height: 28px;\n        width: 45px;\n        padding: 0 12px; }\n      .can-toggle.can-toggle--size-small label .can-toggle__switch:after {\n        top: 1px;\n        left: 1px;\n        border-radius: 1px;\n        width: 44px;\n        line-height: 26px;\n        font-size: 10px; }\n      .can-toggle.can-toggle--size-small label .can-toggle__switch:hover:after {\n        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4); }\n  .can-toggle.can-toggle--size-large input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after, .can-toggle.can-toggle--size-large input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n  .can-toggle.can-toggle--size-large input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n    transform: translate3d(78px, 0, 0); }\n  .can-toggle.can-toggle--size-large input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.can-toggle--size-large input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n  .can-toggle.can-toggle--size-large label {\n    font-size: 14px; }\n    .can-toggle.can-toggle--size-large label .can-toggle__switch {\n      height: 50px;\n      flex: 0 0 160px;\n      border-radius: 4px; }\n      .can-toggle.can-toggle--size-large label .can-toggle__switch:before {\n        left: 80px;\n        font-size: 14px;\n        line-height: 50px;\n        width: 80px;\n        padding: 0 12px; }\n      .can-toggle.can-toggle--size-large label .can-toggle__switch:after {\n        top: 2px;\n        left: 2px;\n        border-radius: 2px;\n        width: 78px;\n        line-height: 46px;\n        font-size: 14px; }\n      .can-toggle.can-toggle--size-large label .can-toggle__switch:hover:after {\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n  .can-toggle.demo-rebrand-1 input[type=\"checkbox\"][disabled] ~ label {\n    color: rgba(181, 62, 116, 0.5); }\n  .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch {\n    background-color: #b53e74; }\n    .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n      color: white; }\n  .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:hover ~ label {\n    color: #a23768; }\n  .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked ~ label:hover {\n    color: #39916a; }\n  .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch {\n    background-color: #44ae7f; }\n    .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n      color: white; }\n  .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch {\n    background-color: #3d9c72; }\n    .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n      color: white; }\n  .can-toggle.demo-rebrand-1 label .can-toggle__label-text {\n    flex: 1; }\n  .can-toggle.demo-rebrand-1 label .can-toggle__switch {\n    transition: background-color 0.3s ease-in-out;\n    background: #c14b81; }\n    .can-toggle.demo-rebrand-1 label .can-toggle__switch:before {\n      color: rgba(255, 255, 255, 0.6); }\n    .can-toggle.demo-rebrand-1 label .can-toggle__switch:after {\n      -webkit-transition: -webkit-transform 0.3s ease-in-out;\n      transition: transform 0.3s ease-in-out;\n      color: white; }\n  .can-toggle.demo-rebrand-2 {\n    width: 80px; }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"][disabled] ~ label {\n      color: rgba(228, 220, 220, 0.5); }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch {\n      background-color: #e4dcdc; }\n      .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n        color: white; }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:hover ~ label {\n      color: #d9cece; }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked ~ label:hover {\n      color: #ddd3d3; }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch {\n      background-color: #efeaea; }\n      .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n        color: white; }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch {\n      background-color: #e4dcdc; }\n      .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n        color: white; }\n    .can-toggle.demo-rebrand-2 label .can-toggle__label-text {\n      flex: 1; }\n    .can-toggle.demo-rebrand-2 label .can-toggle__switch {\n      transition: background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1);\n      background: #efeaea; }\n      .can-toggle.demo-rebrand-2 label .can-toggle__switch:before {\n        color: #46c2f3; }\n      .can-toggle.demo-rebrand-2 label .can-toggle__switch:after {\n        -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);\n        transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);\n        color: white; }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n      box-shadow: 0; }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n      transform: translate3d(38px, 0, 0); }\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n      box-shadow: 0; }\n    .can-toggle.demo-rebrand-2 label {\n      font-size: 13px; }\n      .can-toggle.demo-rebrand-2 label .can-toggle__switch {\n        height: 30px;\n        flex: 0 0 80px;\n        border-radius: 60px; }\n        .can-toggle.demo-rebrand-2 label .can-toggle__switch:before {\n          left: 40px;\n          font-size: 13px;\n          line-height: 30px;\n          width: 40px;\n          padding: 0 12px; }\n        .can-toggle.demo-rebrand-2 label .can-toggle__switch:after {\n          top: 2px;\n          left: 2px;\n          border-radius: 30px;\n          width: 38px;\n          line-height: 26px;\n          font-size: 13px; }\n        .can-toggle.demo-rebrand-2 label .can-toggle__switch:hover:after {\n          box-shadow: 0; }\n    .can-toggle.demo-rebrand-2 label {\n      margin-bottom: 0px; }\n", "",{"version":3,"sources":["webpack://./src/styles/toggle.scss"],"names":[],"mappings":"AA2HA;EACE,kBAAkB,EAAA;EADpB;IAEyB,sBAAsB,EAAA;EAF/C;IAMI,UAAU;IACV,kBAAkB;IAClB,MAAM;IAAE,OAAO,EAAA;IARnB;MAWM,oBAAoB,EAAA;MAX1B;QAY4B,YAAY,EAAA;IAZxC;MAqBY,6BAA6B;MAC7B,OAAO,EAAA;IAtBnB;MA0BY,2BAA2B,EAAA;EA1BvC;IAuCI,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,mBAAmB,EAAA;IA1CvB;MA6CM,OAAO;MACP,kBAAkB,EAAA;IA9CxB;MAkDM,kBAAkB,EAAA;MAlDxB;QAqDQ,2BAA2B;QAC3B,kBAAkB;QAClB,MAAM;QACN,yBAAyB;QACzB,kBAAkB,EAAA;MAzD1B;QA6DQ,6BAA6B;QAC7B,kBAAkB;QAClB,UAAU;QACV,yBAAyB;QACzB,kBAAkB;QAClB,mBAAmB;QACnB,+BAA6B,EAAA;EArLjC;IACE,+BATuB,EAAA;EAavB;IACE,sBAdqB,EAAA;IAerB;MAAU,YAAY,EAAA;EAG1B;IAAiB,cAAwC,EAAA;EAGrD;IAAU,cAAuC,EAAA;EAEjD;IACE,yBAAmD,EAAA;IACnD;MAAU,YAAY,EAAA;EAMtB;IACE,yBA/BmB,EAAA;IAgCnB;MAAU,YAAY,EAAA;EAS9B;IAA0B,OAAO,EAAA;EAEjC;IACE,4DA1C2C;IA2C3C,mBAA8C,EAAA;IAC9C;MAAW,+BA7CsB,EAAA;IA8CjC;MAEE,qEA/CyC;MAgDzC,qDAhDyC;MAiDzC,YAAY,EAAA;EAqBZ;IAAU,aAPK,EAAA;EAcb;IAAU,kCAA+F,EAAA;EAKnF;IAAU,aAnBnB,EAAA;EAyBrB;IACE,eA5B+B,EAAA;IA8B/B;MACE,YAlCoB;MAmCpB,eApCoB;MAqCpB,kBAnC0B,EAAA;MAqC1B;QACE,UAAyB;QACzB,eApC4B;QAqC5B,iBAzCkB;QA0ClB,WAA0B;QAC1B,eAAe,EAAA;MAGjB;QACE,QA7CiB;QA6CQ,SA7CR;QA8CjB,kBAA0C;QAC1C,WAAoD;QACpD,iBAAwD;QACxD,eA/C4B,EAAA;MAmD5B;QAAU,aAlDK,EAAA;EAOf;IAAU,wCAwIQ,EAAA;EAjIhB;IAAU,kCAA+F,EAAA;EAKnF;IAAU,wCA4HhB,EAAA;EAtHxB;IACE,eAmHM,EAAA;IAjHN;MACE,YA6GI;MA5GJ,cA2GI;MA1GJ,kBA4GG,EAAA;MA1GH;QACE,UAAyB;QACzB,eA2GE;QA1GF,iBAsGE;QArGF,WAA0B;QAC1B,eAAe,EAAA;MAGjB;QACE,QAkGC;QAlGwB,SAkGxB;QAjGD,kBAA0C;QAC1C,WAAoD;QACpD,iBAAwD;QACxD,eAgGE,EAAA;MA5FF;QAAU,wCA6FQ,EAAA;EAxIlB;IAAU,wCAqJQ,EAAA;EA9IhB;IAAU,kCAA+F,EAAA;EAKnF;IAAU,wCAyIhB,EAAA;EAnIxB;IACE,eAgIM,EAAA;IA9HN;MACE,YA0HI;MAzHJ,eAwHK;MAvHL,kBAyHG,EAAA;MAvHH;QACE,UAAyB;QACzB,eAwHE;QAvHF,iBAmHE;QAlHF,WAA0B;QAC1B,eAAe,EAAA;MAGjB;QACE,QA+GC;QA/GwB,SA+GxB;QA9GD,kBAA0C;QAC1C,WAAoD;QACpD,iBAAwD;QACxD,eA6GE,EAAA;MAzGF;QAAU,wCA0GQ,EAAA;EAtNtB;IACE,8BA6NO,EAAA;EAzNP;IACE,yBAwNK,EAAA;IAvNL;MAAU,YAAY,EAAA;EAG1B;IAAiB,cAAwC,EAAA;EAGrD;IAAU,cAAuC,EAAA;EAEjD;IACE,yBAAmD,EAAA;IACnD;MAAU,YAAY,EAAA;EAMtB;IACE,yBAuMC,EAAA;IAtMD;MAAU,YAAY,EAAA;EAS9B;IAA0B,OAAO,EAAA;EAEjC;IACE,6CA4LW;IA3LX,mBAA8C,EAAA;IAC9C;MAAW,+BAyLD,EAAA;IAxLV;MAEE,sDAuLS;MAtLT,sCAsLS;MArLT,YAAY,EAAA;EAsEpB;IAsII,WAAW,EAAA;IAxPX;MACE,+BAuOkB,EAAA;IAnOlB;MACE,yBAkOgB,EAAA;MAjOhB;QAAU,YAAY,EAAA;IAG1B;MAAiB,cAAwC,EAAA;IAGrD;MAAU,cAAuC,EAAA;IAEjD;MACE,yBAAmD,EAAA;MACnD;QAAU,YAAY,EAAA;IAMtB;MACE,yBAiNY,EAAA;MAhNZ;QAAU,YAAY,EAAA;IAS9B;MAA0B,OAAO,EAAA;IAEjC;MACE,gEAsMwC;MArMxC,mBAA8C,EAAA;MAC9C;QAAW,cAmMJ,EAAA;MAlMP;QAEE,yEAiMsC;QAhMtC,yDAgMsC;QA/LtC,YAAY,EAAA;IAqBZ;MAAU,aAPK,EAAA;IAcb;MAAU,kCAA+F,EAAA;IAKnF;MAAU,aAnBnB,EAAA;IAyBrB;MACE,eAgKM,EAAA;MA9JN;QACE,YA0JI;QAzJJ,cAwJI;QAvJJ,mBAyJI,EAAA;QAvJJ;UACE,UAAyB;UACzB,eAwJE;UAvJF,iBAmJE;UAlJF,WAA0B;UAC1B,eAAe,EAAA;QAGjB;UACE,QA+IC;UA/IwB,SA+IxB;UA9ID,mBAA0C;UAC1C,WAAoD;UACpD,iBAAwD;UACxD,eA6IE,EAAA;QAzIF;UAAU,aAlDK,EAAA;IAwDvB;MAwIM,kBAAkB,EAAA","sourcesContent":["@mixin can-toggle-branding(\n  $can-toggle-off-color: #777, \n  $can-toggle-on-color: #5fc054,\n  $can-toggle-inactive-text: rgba(white, 0.5),\n  $can-toggle-transition: cubic-bezier(0,1,0.5,1)\n) {\n  \n  input[type=\"checkbox\"] {\n    \n    &[disabled] ~ label {\n      color: rgba($can-toggle-off-color, 0.5);\n    }\n    \n    &:focus ~ label, &:hover ~ label {\n      .can-toggle__switch {\n        background-color: $can-toggle-off-color;\n        &:after { color: white; }\n      }\n    }\n    &:hover ~label { color: darken($can-toggle-off-color, 5%); }\n    &:checked {\n      ~ label {\n        &:hover { color: darken($can-toggle-on-color, 3%); }\n        \n        .can-toggle__switch {\n          background-color: lighten($can-toggle-on-color, 5%);\n          &:after { color: white; }\n        }\n      }\n      \n      &:focus, &:hover {\n        ~ label {\n          .can-toggle__switch {\n            background-color: $can-toggle-on-color;\n            &:after { color: white; }\n          }\n        } \n      }\n    }\n  }\n  \n  label {\n    \n    .can-toggle__label-text { flex: 1; }\n    \n    .can-toggle__switch {\n      transition: background-color 0.3s $can-toggle-transition;\n      background: lighten($can-toggle-off-color, 5%);\n      &:before { color: $can-toggle-inactive-text; }\n      &:after {\n        // Autoprefixer choked here, so making the prefixes explicit\n        -webkit-transition: -webkit-transform 0.3s $can-toggle-transition;\n        transition: transform 0.3s $can-toggle-transition;\n        color: white; \n      }\n    }\n    \n  }\n}\n@mixin can-toggle-appearance \n( \n  $can-toggle-width: 134px,\n  $can-toggle-height: 36px,\n  $can-toggle-border-radius: 4px,\n  $can-toggle-offset: 2px,\n  $can-toggle-label-font-size: 14px,\n  $can-toggle-switch-font-size: 12px,\n  $can-toggle-shadow: 0\n){\n  $can-toggle-switch-width: $can-toggle-width/2;\n  \n  input[type=\"checkbox\"] {\n    &:focus ~ label, &:hover ~ label {\n      .can-toggle__switch {\n        &:after { box-shadow: $can-toggle-shadow; } \n      }\n    }\n    \n    &:checked {\n      ~ label {\n        .can-toggle__switch {\n          &:after { transform: translate3d($can-toggle-width - ($can-toggle-switch-width + $can-toggle-offset),0,0); }  \n        }\n      }\n      &:focus, &:hover {\n        ~ label {\n          .can-toggle__switch { &:after { box-shadow: $can-toggle-shadow; } }\n        } \n      }\n    }\n  }\n  \n  label {\n    font-size: $can-toggle-label-font-size;\n    \n    .can-toggle__switch {\n      height: $can-toggle-height;\n      flex: 0 0 $can-toggle-width;\n      border-radius: $can-toggle-border-radius;\n      \n      &:before {\n        left: $can-toggle-width/2;\n        font-size: $can-toggle-switch-font-size; \n        line-height: $can-toggle-height;\n        width: $can-toggle-width/2;\n        padding: 0 12px;\n      }\n      \n      &:after {\n        top: $can-toggle-offset; left: $can-toggle-offset;\n        border-radius: $can-toggle-border-radius/2;\n        width: $can-toggle-switch-width - $can-toggle-offset; \n        line-height: $can-toggle-height - ($can-toggle-offset*2);\n        font-size: $can-toggle-switch-font-size;\n      }\n      \n      &:hover {\n        &:after { box-shadow: $can-toggle-shadow; }\n      }\n    } \n  }\n}\n\n.can-toggle {\n  position: relative;\n  *, *:before, *:after { box-sizing: border-box; }\n  //overflow: hidden;\n  \n  input[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n    top: 0; left: 0;\n    \n    &[disabled] ~ label {\n      pointer-events: none;\n      .can-toggle__switch { opacity: 0.4; }\n    }\n    \n    &:checked {\n      ~ label {\n        \n        .can-toggle__switch {\n          \n          &:before {\n            content: attr(data-unchecked);\n            left: 0;\n          }\n        \n          &:after {\n            content: attr(data-checked);\n          }  \n        }\n      }\n      \n      &:focus, &:hover {\n        ~ label {\n        } \n      }\n    }\n  }\n  \n  label {\n    user-select: none;\n    position: relative;\n    display: flex;\n    align-items: center;\n    \n    .can-toggle__label-text { \n      flex: 1;\n      padding-left: 32px;\n    }\n    \n    .can-toggle__switch {\n      position: relative;\n      \n      &:before {\n        content: attr(data-checked);\n        position: absolute;\n        top: 0;\n        text-transform: uppercase;\n        text-align: center;\n      }\n      \n      &:after {\n        content: attr(data-unchecked);\n        position: absolute;\n        z-index: 5;\n        text-transform: uppercase;\n        text-align: center;\n        background: #46c2f3;\n        transform: translate3d(0,0,0);\n      }\n    }\n    \n  }\n  \n  // Default values for .can-toggle class\n  @include can-toggle-branding; \n  @include can-toggle-appearance; \n  \n  // Create toggles of different sizes by overriding the can-toggle-appearance mixin defaults\n  &.can-toggle--size-small {\n    @include can-toggle-appearance\n    (\n      90px, // Toggle width\n      28px,  // Toggle height\n      2px,   // Toggle border radius\n      1px,   // Offset (distance btw switch and box)\n      13px,  // Label font size\n      10px,  // Switch font size\n      0 2px 2px rgba(black, 0.4) // Switch shadow on hover/focus\n    ); \n  }\n  \n  &.can-toggle--size-large {\n    @include can-toggle-appearance\n    (\n      160px, // Toggle width\n      50px,  // Toggle height\n      4px,   // Toggle border radius\n      2px,   // Offset (distance btw switch and box)\n      14px,  // Label font size\n      14px,  // Switch font size\n      0 4px 4px rgba(black, 0.4) // Switch shadow on hover/focus\n    ); \n  }\n  \n  // Or re-brand the toggle for different applications\n  &.demo-rebrand-1 {\n    @include can-toggle-branding\n    (\n      #b53e74,  // Off state color\n      #3d9c72,  // On state color\n      rgba(white, 0.6),  // Off state text color\n      ease-in-out  // Transition timing function\n    ); \n  }\n  \n  &.demo-rebrand-2 {\n    @include can-toggle-branding\n    (\n      rgb(228, 220, 220),  // Off state color\n      rgb(228, 220, 220),  // On state color\n      #46c2f3,  // Off state text color\n      cubic-bezier(0.860, 0.000, 0.070, 1.000)  // Transition timing function\n      //rgba(white, 0.7)\n    );\n    @include can-toggle-appearance\n    (\n      80px, // Toggle width\n      30px,  // Toggle height\n      60px,   // Toggle border radius\n      2px,   // Offset (distance btw switch and box)\n      13px,  // Label font size\n      13px,  // Switch font size\n      // 0 4px 4px rgba(black, 0.4) // Switch shadow on hover/focus\n    ); \n    width: 80px;\n    label {\n      margin-bottom: 0px;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/Partly_Cloudy.png":
/*!**************************************!*\
  !*** ./src/assets/Partly_Cloudy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c6432c006c66b48a04ac392a265b0a1.png";

/***/ }),

/***/ "./src/assets/Rainy.png":
/*!******************************!*\
  !*** ./src/assets/Rainy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "826838f751f4efad3bb7e2d43e4b7bd4.png";

/***/ }),

/***/ "./src/assets/Snowy.png":
/*!******************************!*\
  !*** ./src/assets/Snowy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "236550c1b528c3c77731edd8b1118e2d.png";

/***/ }),

/***/ "./src/assets/Sunny.png":
/*!******************************!*\
  !*** ./src/assets/Sunny.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c5c97dd9c74af86b5d9bb30597a2b66.png";

/***/ }),

/***/ "./src/styles/base.scss":
/*!******************************!*\
  !*** ./src/styles/base.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/base.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/toggle.scss":
/*!********************************!*\
  !*** ./src/styles/toggle.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./toggle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/toggle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27 viewBox=%270 0 12 12%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27 viewBox=%270 0 12 12%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27 viewBox=%270 0 12 12%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.5%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.5%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.5%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27 viewBox=%270 0 4 4%27%3e%3cpath stroke=%27%23fff%27 d=%27M0 2h4%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27 viewBox=%270 0 4 4%27%3e%3cpath stroke=%27%23fff%27 d=%27M0 2h4%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27 viewBox=%270 0 4 4%27%3e%3cpath stroke=%27%23fff%27 d=%27M0 2h4%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%275%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23343a40%27 d=%27M2 0L0 2h4zm0 5L0 3h4z%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%275%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23343a40%27 d=%27M2 0L0 2h4zm0 5L0 3h4z%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%275%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23343a40%27 d=%27M2 0L0 2h4zm0 5L0 3h4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%2328a745%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%2328a745%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%2328a745%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23fff%27 d=%27M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23fff%27 d=%27M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23fff%27 d=%27M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweather"] = self["webpackChunkweather"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-router-dom_dist_index_js-node_mod-9959b8"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.36c6f0fa086a2e6af485.js.map