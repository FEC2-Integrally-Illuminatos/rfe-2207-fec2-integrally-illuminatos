"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterfe_2207_fec2_integrally_illuminatos"]("main",{

/***/ "./client/src/components/faq/QuestionWrapper.jsx":
/*!*******************************************************!*\
  !*** ./client/src/components/faq/QuestionWrapper.jsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QuestionDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionDisplay.jsx */ \"./client/src/components/faq/QuestionDisplay.jsx\");\n/* harmony import */ var _Search_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search.jsx */ \"./client/src/components/faq/Search.jsx\");\n/* harmony import */ var _QuestionModal_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuestionModal.jsx */ \"./client/src/components/faq/QuestionModal.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_FAQWrapper_styled_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/FAQWrapper.styled.js */ \"./client/src/components/faq/styles/FAQWrapper.styled.js\");\n/* harmony import */ var _styles_Main_styled_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Main.styled.js */ \"./client/src/components/faq/styles/Main.styled.js\");\n/* harmony import */ var _styles_Buttons_styled_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Buttons.styled.js */ \"./client/src/components/faq/styles/Buttons.styled.js\");\n/* harmony import */ var _styles_title_styled_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/title.styled.js */ \"./client/src/components/faq/styles/title.styled.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nvar _templateObject,\n    _s2 = __webpack_require__.$Refresh$.signature();\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].button(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  margin: 1% 15% 1% 20%;\\n  height: 3rem;\\n\"])));\n_c = Button;\n\nvar Wrapper = function Wrapper(props) {\n  _s2();\n\n  //TODO: REMOVE WHEN YOU GET APPROPRIATE DATA\n  var dummyData = {\n    \"id\": 37335,\n    \"name\": \"Camo Onesie\",\n    \"slogan\": \"Blend in to your crowd\",\n    \"description\": \"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.\",\n    \"category\": \"Jackets\",\n    \"default_price\": \"140\"\n  };\n  var product = props.product || dummyData;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      allQuestions = _useState2[0],\n      setAllQuestions = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      displayQuestions = _useState4[0],\n      setDisplayQuestions = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState6 = _slicedToArray(_useState5, 2),\n      searchQuestions = _useState6[0],\n      setSearchQuestions = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      isSearched = _useState8[0],\n      setSearched = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState10 = _slicedToArray(_useState9, 2),\n      wantsMore = _useState10[0],\n      setWantsMore = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState12 = _slicedToArray(_useState11, 2),\n      addQuestion = _useState12[0],\n      setAddQuestion = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n      _useState14 = _slicedToArray(_useState13, 2),\n      requestCount = _useState14[0],\n      setRequestCount = _useState14[1];\n\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),\n      _useState16 = _slicedToArray(_useState15, 2),\n      count = _useState16[0],\n      setCount = _useState16[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var fetchQuestions = /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n        var questions;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/questions/all', {\n                  params: {\n                    productID: product.id,\n                    count: count\n                  }\n                });\n\n              case 2:\n                questions = _context.sent;\n                console.log(questions.data);\n                setAllQuestions(questions.data);\n                setDisplayQuestions(questions.data.slice(0, 4));\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchQuestions() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchQuestions()[\"catch\"](console.error);\n  }, [props]);\n\n  var handleMoreClick = function handleMoreClick(e) {\n    setRequestCount(requestCount + 1); // setWantsMore(true);\n\n    if (allQuestions.length !== count) {\n      var addedDisplay = allQuestions.slice(displayQuestions.length, displayQuestions.length + 4);\n      setDisplayQuestions([].concat(_toConsumableArray(displayQuestions), _toConsumableArray(addedDisplay)));\n    } else {\n      setCount(count + 4);\n\n      var fetchQuestions = /*#__PURE__*/function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {\n          var questions, result;\n          return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  _context2.next = 2;\n                  return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/qa/questions/all', {\n                    params: {\n                      productID: product.id,\n                      count: count\n                    }\n                  });\n\n                case 2:\n                  questions = _context2.sent;\n                  result = questions.data.results.sort(function (a, b) {\n                    return b['question_helpfulness'] - a['question_helpfulness'];\n                  });\n                  setAllQuestions(result);\n                  setDisplayQuestions(result);\n\n                case 6:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n\n        return function fetchQuestions() {\n          return _ref2.apply(this, arguments);\n        };\n      }();\n\n      fetchQuestions()[\"catch\"](console.error);\n    }\n  };\n\n  var handleAddQuestion = function handleAddQuestion() {\n    setAddQuestion(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"faq\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FAQWrapper_styled_js__WEBPACK_IMPORTED_MODULE_5__.FAQWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_title_styled_js__WEBPACK_IMPORTED_MODULE_8__.Title, null, \"Q&A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Search_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    questions: displayQuestions,\n    setSearchQuestions: setSearchQuestions,\n    setSearched: setSearched\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_Main_styled_js__WEBPACK_IMPORTED_MODULE_6__.Main, null, allQuestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QuestionDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    questions: isSearched ? searchQuestions : displayQuestions,\n    wantsMore: requestCount,\n    product: product\n  }), addQuestion && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QuestionModal_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    name: product.name,\n    productId: product.id,\n    setAddQuestion: setAddQuestion\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_Buttons_styled_js__WEBPACK_IMPORTED_MODULE_7__.Buttons, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, {\n    onClick: handleMoreClick\n  }, \"MORE ANSWERED QUESTIONS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, {\n    onClick: handleAddQuestion\n  }, \"ADD A QUESTION + \"))));\n};\n\n_s2(Wrapper, \"t9rWb4D+FNW2uK5zxQzdQRyCySg=\");\n\n_c2 = Wrapper;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);\n\nvar _c, _c2;\n\n__webpack_require__.$Refresh$.register(_c, \"Button\");\n__webpack_require__.$Refresh$.register(_c2, \"Wrapper\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvZmFxL1F1ZXN0aW9uV3JhcHBlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBOztBQUtBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBS0E7O0FBNUVBOztBQUFBO0FBOEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmZlLTIyMDctZmVjMi1pbnRlZ3JhbGx5LWlsbHVtaW5hdG9zLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2ZhcS9RdWVzdGlvbldyYXBwZXIuanN4P2RlOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBRdWVzdGlvbkRpc3BsYXkgZnJvbSAnLi9RdWVzdGlvbkRpc3BsYXkuanN4JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanN4JztcbmltcG9ydCBRdWVzdGlvbk1vZGFsIGZyb20gJy4vUXVlc3Rpb25Nb2RhbC5qc3gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0ZBUVdyYXBwZXJ9IGZyb20gJy4vc3R5bGVzL0ZBUVdyYXBwZXIuc3R5bGVkLmpzJztcbmltcG9ydCB7TWFpbn0gZnJvbSAnLi9zdHlsZXMvTWFpbi5zdHlsZWQuanMnO1xuaW1wb3J0IHtCdXR0b25zfSBmcm9tICcuL3N0eWxlcy9CdXR0b25zLnN0eWxlZC5qcyc7XG5pbXBvcnQge1RpdGxlfSBmcm9tICcuL3N0eWxlcy90aXRsZS5zdHlsZWQuanMnO1xuXG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIG1hcmdpbjogMSUgMTUlIDElIDIwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuYFxuXG5jb25zdCBXcmFwcGVyID0gKHByb3BzKSA9PiB7XG4gIC8vVE9ETzogUkVNT1ZFIFdIRU4gWU9VIEdFVCBBUFBST1BSSUFURSBEQVRBXG4gIGNvbnN0IGR1bW15RGF0YSA9IHtcbiAgICBcImlkXCI6IDM3MzM1LFxuICAgIFwibmFtZVwiOiBcIkNhbW8gT25lc2llXCIsXG4gICAgXCJzbG9nYW5cIjogXCJCbGVuZCBpbiB0byB5b3VyIGNyb3dkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBTbyBGYXRpZ3VlcyB3aWxsIHdha2UgeW91IHVwIGFuZCBmaXQgeW91IGluLiBUaGlzIGhpZ2ggZW5lcmd5IGNhbW8gd2lsbCBoYXZlIHlvdSBibGVuZGluZyBpbiB0byBldmVuIHRoZSB3aWxkZXN0IHN1cnJvdW5kaW5ncy5cIixcbiAgICBcImNhdGVnb3J5XCI6IFwiSmFja2V0c1wiLFxuICAgIFwiZGVmYXVsdF9wcmljZVwiOiBcIjE0MFwiXG59XG4gIGNvbnN0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0IHx8IGR1bW15RGF0YTtcbiAgY29uc3QgW2FsbFF1ZXN0aW9ucywgc2V0QWxsUXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Rpc3BsYXlRdWVzdGlvbnMsIHNldERpc3BsYXlRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoUXVlc3Rpb25zLCBzZXRTZWFyY2hRdWVzdGlvbnNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2lzU2VhcmNoZWQsIHNldFNlYXJjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dhbnRzTW9yZSwgc2V0V2FudHNNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FkZFF1ZXN0aW9uLCBzZXRBZGRRdWVzdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXF1ZXN0Q291bnQsIHNldFJlcXVlc3RDb3VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgyMCk7XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hRdWVzdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCBheGlvcy5nZXQoJy9xdWVzdGlvbnMvYWxsJywge3BhcmFtczoge3Byb2R1Y3RJRDogcHJvZHVjdC5pZCwgY291bnQ6IGNvdW50fX0pO1xuICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25zLmRhdGEpO1xuICAgICAgc2V0QWxsUXVlc3Rpb25zKHF1ZXN0aW9ucy5kYXRhKTtcbiAgICAgIHNldERpc3BsYXlRdWVzdGlvbnMocXVlc3Rpb25zLmRhdGEuc2xpY2UoMCwgNCkpXG4gICAgfVxuICAgIGZldGNoUXVlc3Rpb25zKCkuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgfSwgW3Byb3BzXSk7XG5cbiAgY29uc3QgaGFuZGxlTW9yZUNsaWNrID0gKGUpID0+IHtcbiAgICBzZXRSZXF1ZXN0Q291bnQocmVxdWVzdENvdW50ICsgMSk7XG4gICAgLy8gc2V0V2FudHNNb3JlKHRydWUpO1xuICAgIGlmIChhbGxRdWVzdGlvbnMubGVuZ3RoICE9PSBjb3VudCkge1xuICAgICAgbGV0IGFkZGVkRGlzcGxheSA9IGFsbFF1ZXN0aW9ucy5zbGljZShkaXNwbGF5UXVlc3Rpb25zLmxlbmd0aCwgZGlzcGxheVF1ZXN0aW9ucy5sZW5ndGggKyA0KTtcbiAgICBzZXREaXNwbGF5UXVlc3Rpb25zKFsuLi5kaXNwbGF5UXVlc3Rpb25zLCAuLi5hZGRlZERpc3BsYXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q291bnQoY291bnQgKyA0KTtcbiAgICAgIGNvbnN0IGZldGNoUXVlc3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCBheGlvcy5nZXQoJy9xYS9xdWVzdGlvbnMvYWxsJywge3BhcmFtczoge3Byb2R1Y3RJRDogcHJvZHVjdC5pZCwgY291bnQ6IGNvdW50fX0pO1xuICAgICAgICBsZXQgcmVzdWx0ID0gcXVlc3Rpb25zLmRhdGEucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGJbJ3F1ZXN0aW9uX2hlbHBmdWxuZXNzJ10gLSBhWydxdWVzdGlvbl9oZWxwZnVsbmVzcyddXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRBbGxRdWVzdGlvbnMocmVzdWx0KTtcbiAgICAgICAgc2V0RGlzcGxheVF1ZXN0aW9ucyhyZXN1bHQpO1xuICAgICAgfVxuICAgICAgZmV0Y2hRdWVzdGlvbnMoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICB9XG5cblxuICB9XG4gIGNvbnN0IGhhbmRsZUFkZFF1ZXN0aW9uID0gKCkgPT4ge1xuICAgIHNldEFkZFF1ZXN0aW9uKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdmYXEnPlxuXG4gICAgPEZBUVdyYXBwZXIgPlxuICAgICAgPFRpdGxlPlEmQTwvVGl0bGU+XG4gICAgICA8U2VhcmNoIHF1ZXN0aW9ucz17ZGlzcGxheVF1ZXN0aW9uc30gc2V0U2VhcmNoUXVlc3Rpb25zPSB7c2V0U2VhcmNoUXVlc3Rpb25zfSBzZXRTZWFyY2hlZD17c2V0U2VhcmNoZWR9Lz5cbiAgICAgIHsvKiByZW5kZXIgZWl0aGVyIHNlYXJjaGVkIHF1ZXN0aW9ucyBvciBxdWVzdGlvbnMgZm9yIHByb2R1Y3QgKi99XG4gICAgICA8TWFpbj5cbiAgICAgIHthbGxRdWVzdGlvbnMubGVuZ3RoID4gMCAmJiA8UXVlc3Rpb25EaXNwbGF5IHF1ZXN0aW9ucz17aXNTZWFyY2hlZCA/IHNlYXJjaFF1ZXN0aW9ucyA6IGRpc3BsYXlRdWVzdGlvbnMgfSB3YW50c01vcmUgPSB7cmVxdWVzdENvdW50fSBwcm9kdWN0PXtwcm9kdWN0fS8+fVxuICAgICAgey8qIC8vVE9ETzpDaGFuZ2UgdGhlIG5hbWUgd2hlbiBjbGlja2VkIHRvIGJlIGxlc3MgYW5zd2VyZWQgcXVlc3Rpb25zICovfVxuICAgICAge2FkZFF1ZXN0aW9uICYmIDxRdWVzdGlvbk1vZGFsIG5hbWU9e3Byb2R1Y3QubmFtZX0gcHJvZHVjdElkPXtwcm9kdWN0LmlkfSBzZXRBZGRRdWVzdGlvbj17c2V0QWRkUXVlc3Rpb259IC8+fVxuICAgIDwvTWFpbj5cbiAgICAgIDxCdXR0b25zPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrID17aGFuZGxlTW9yZUNsaWNrfT5NT1JFIEFOU1dFUkVEIFFVRVNUSU9OUzwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRRdWVzdGlvbn0+QUREIEEgUVVFU1RJT04gKyA8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9ucz5cbiAgICA8L0ZBUVdyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/faq/QuestionWrapper.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c66e1cacd91c704c9e30")
/******/ })();
/******/ 
/******/ }
);