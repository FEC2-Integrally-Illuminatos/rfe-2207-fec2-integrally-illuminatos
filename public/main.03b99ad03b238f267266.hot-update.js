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

/***/ "./client/src/components/overview/Overview.jsx":
/*!*****************************************************!*\
  !*** ./client/src/components/overview/Overview.jsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mainCarousel_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainCarousel.jsx */ \"./client/src/components/overview/mainCarousel.jsx\");\n/* harmony import */ var _productInfo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productInfo.jsx */ \"./client/src/components/overview/productInfo.jsx\");\n/* harmony import */ var _productOverview_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productOverview.jsx */ \"./client/src/components/overview/productOverview.jsx\");\n/* harmony import */ var _metaInfo_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metaInfo.jsx */ \"./client/src/components/overview/metaInfo.jsx\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './alexCarousel.jsx'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _s2 = __webpack_require__.$Refresh$.signature();\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\nvar OverviewDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  background: #F2F1EF;\\n  display: flex;\\n\"])));\n_c = OverviewDiv;\nvar CarouselDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  width: 67%;\\n  margin: 2% 0.5% 2% 2%;\\n\"])));\n_c2 = CarouselDiv;\nvar InfoDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  width: 33%;\\n  margin: 2% 2% 2% 0.5%;\\n\\n\"])));\n_c3 = InfoDiv;\n\nvar Overview = function Overview(props) {\n  _s2();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.product),\n      _useState2 = _slicedToArray(_useState, 2),\n      product = _useState2[0],\n      setProduct = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.style),\n      _useState4 = _slicedToArray(_useState3, 2),\n      style = _useState4[0],\n      setStyle = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.styles),\n      _useState6 = _slicedToArray(_useState5, 2),\n      styles = _useState6[0],\n      setStyles = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      _useState8 = _slicedToArray(_useState7, 2),\n      loading = _useState8[0],\n      setLoading = _useState8[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setProduct(props.product);\n    setStyle(props.style);\n    setStyles(props.styles);\n  }, [props]);\n\n  var handleStyleChange = function handleStyleChange(newStyle) {\n    setStyle(newStyle);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OverviewDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CarouselDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mainCarousel_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    product: product,\n    style: style\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_productInfo_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    handleStyleChange: handleStyleChange,\n    styles: styles,\n    product: product,\n    style: style\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_productOverview_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    product: product,\n    style: style\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_metaInfo_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    product: product\n  }))))); // }\n};\n\n_s2(Overview, \"L5DBcqgSvBahprxG1suAAvzIb30=\");\n\n_c4 = Overview;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);\n\nvar _c, _c2, _c3, _c4;\n\n__webpack_require__.$Refresh$.register(_c, \"OverviewDiv\");\n__webpack_require__.$Refresh$.register(_c2, \"CarouselDiv\");\n__webpack_require__.$Refresh$.register(_c3, \"InfoDiv\");\n__webpack_require__.$Refresh$.register(_c4, \"Overview\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvb3ZlcnZpZXcvT3ZlcnZpZXcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUFBOztBQU1BO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQU9BOztBQTFDQTs7QUFBQTtBQTZDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JmZS0yMjA3LWZlYzItaW50ZWdyYWxseS1pbGx1bWluYXRvcy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9vdmVydmlldy9PdmVydmlldy5qc3g/MGRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluQ2Fyb3VzZWwgZnJvbSAnLi9tYWluQ2Fyb3VzZWwuanN4JztcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tICcuL3Byb2R1Y3RJbmZvLmpzeCc7XG5pbXBvcnQgUHJvZHVjdE92ZXJ2aWV3IGZyb20gJy4vcHJvZHVjdE92ZXJ2aWV3LmpzeCc7XG5pbXBvcnQgTWV0YUluZm8gZnJvbSAnLi9tZXRhSW5mby5qc3gnO1xuaW1wb3J0IEFsZXhDYXJvdXNlbCBmcm9tICcuL2FsZXhDYXJvdXNlbC5qc3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBPdmVydmlld0RpdiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNGMkYxRUY7XG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cbmNvbnN0IENhcm91c2VsRGl2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDY3JTtcbiAgbWFyZ2luOiAyJSAwLjUlIDIlIDIlO1xuYFxuY29uc3QgSW5mb0RpdiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbjogMiUgMiUgMiUgMC41JTtcblxuYFxuXG5jb25zdCBPdmVydmlldyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShwcm9wcy5wcm9kdWN0KTtcbiAgY29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZShwcm9wcy5zdHlsZSk7XG4gIGNvbnN0IFtzdHlsZXMsIHNldFN0eWxlc10gPSB1c2VTdGF0ZShwcm9wcy5zdHlsZXMpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByb2R1Y3QocHJvcHMucHJvZHVjdCk7XG4gICAgc2V0U3R5bGUocHJvcHMuc3R5bGUpO1xuICAgIHNldFN0eWxlcyhwcm9wcy5zdHlsZXMpO1xuICB9LCBbcHJvcHNdKTtcblxuXG4gIGNvbnN0IGhhbmRsZVN0eWxlQ2hhbmdlID0gKG5ld1N0eWxlKSA9PiB7XG4gICAgc2V0U3R5bGUobmV3U3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgPE92ZXJ2aWV3RGl2PlxuICAgICAgPENhcm91c2VsRGl2PlxuICAgICAgICA8TWFpbkNhcm91c2VsIHByb2R1Y3Q9e3Byb2R1Y3R9IHN0eWxlPXtzdHlsZX0vPlxuICAgICAgPC9DYXJvdXNlbERpdj5cbiAgICAgIDxJbmZvRGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxQcm9kdWN0SW5mbyBoYW5kbGVTdHlsZUNoYW5nZT17aGFuZGxlU3R5bGVDaGFuZ2V9IHN0eWxlcz17c3R5bGVzfSBwcm9kdWN0PXtwcm9kdWN0fSBzdHlsZT17c3R5bGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFByb2R1Y3RPdmVydmlldyBwcm9kdWN0PXtwcm9kdWN0fSBzdHlsZT17c3R5bGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE1ldGFJbmZvIHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0luZm9EaXY+XG4gICAgPC9PdmVydmlld0Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgLy8gfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/overview/Overview.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("10ce85ee11d8ea922b24")
/******/ })();
/******/ 
/******/ }
);