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

/***/ "./client/src/components/overview/galleryThumbnail.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/overview/galleryThumbnail.jsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _templateObject,\n    _s2 = __webpack_require__.$Refresh$.signature();\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar ThumbBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  border: \", \";\\n  border-radius: 50%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  overflow: hidden;\\n  background: no-repeat center center;\\n  float: left;\\n  background-image: url(\", \");\\n  background-size: cover;\\n  height: 0;\\n  padding-bottom: 14%;\\n  width: 14%;\\n  margin: 1px;\\n\"])), function (props) {\n  return props.selected ? \"3px solid #0E216C\" : \"0.01px solid grey\";\n}, function (props) {\n  return props.link;\n});\n_c = ThumbBox;\n\nvar GalleryThumbnail = function GalleryThumbnail(props) {\n  _s2();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.thumbnail),\n      _useState2 = _slicedToArray(_useState, 2),\n      thumbnail = _useState2[0],\n      setThumbnail = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {\n    console.log(props.index === props.current);\n\n    if (props.index === props.current) {\n      return true;\n    } else {\n      return false;\n    }\n\n    ;\n  }),\n      _useState4 = _slicedToArray(_useState3, 2),\n      active = _useState4[0],\n      setActive = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setThumbnail(props.thumbnail);\n\n    if (props.index === props.current) {\n      setActive(true);\n    } else {\n      setActive(false);\n    }\n\n    ;\n  }, [props]);\n\n  var handleClick = function handleClick(e) {\n    console.log('click');\n    props.handleThumbClick(props.index);\n  };\n\n  var photoSetter = function photoSetter(item) {\n    if (item === undefined) {\n      return 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';\n    } else {\n      return item;\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThumbBox, {\n    selected: active,\n    link: photoSetter(thumbnail),\n    onClick: function onClick(e) {\n      return console.log('aisubiuf');\n    }\n  });\n};\n\n_s2(GalleryThumbnail, \"UVaXmTh3gwe8JiJYfSwJltRWyi8=\");\n\n_c2 = GalleryThumbnail;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryThumbnail);\n\nvar _c, _c2;\n\n__webpack_require__.$Refresh$.register(_c, \"ThumbBox\");\n__webpack_require__.$Refresh$.register(_c2, \"GalleryThumbnail\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvb3ZlcnZpZXcvZ2FsbGVyeVRodW1ibmFpbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFRQTtBQUFBO0FBVEE7O0FBaUJBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7O0FBVUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFyQ0E7O0FBQUE7QUF3Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZmUtMjIwNy1mZWMyLWludGVncmFsbHktaWxsdW1pbmF0b3MvLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvb3ZlcnZpZXcvZ2FsbGVyeVRodW1ibmFpbC5qc3g/ODg5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmNvbnN0IFRodW1iQm94ID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAke3Byb3BzID0+IHByb3BzLnNlbGVjdGVkID8gXCIzcHggc29saWQgIzBFMjE2Q1wiIDogXCIwLjAxcHggc29saWQgZ3JleVwifTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMgPT4gcHJvcHMubGluayl9KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTQlO1xuICB3aWR0aDogMTQlO1xuICBtYXJnaW46IDFweDtcbmBcblxuY29uc3QgR2FsbGVyeVRodW1ibmFpbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbdGh1bWJuYWlsLCBzZXRUaHVtYm5haWxdID0gdXNlU3RhdGUocHJvcHMudGh1bWJuYWlsKTtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5pbmRleCA9PT0gcHJvcHMuY3VycmVudCk7XG4gICAgaWYgKHByb3BzLmluZGV4ID09PSBwcm9wcy5jdXJyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH0pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaHVtYm5haWwocHJvcHMudGh1bWJuYWlsKTtcbiAgICBpZiAocHJvcHMuaW5kZXggPT09IHByb3BzLmN1cnJlbnQpIHtcbiAgICAgIHNldEFjdGl2ZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgICB9O1xuICB9LCBbcHJvcHNdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgcHJvcHMuaGFuZGxlVGh1bWJDbGljayhwcm9wcy5pbmRleCk7XG4gIH07XG5cbiAgY29uc3QgcGhvdG9TZXR0ZXIgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTM3MjgwMTM5OTMtNmQ2NmU5YzkxMjNhP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OGRtbGxkM3hsYm53d2ZId3dmSHclM0Qmdz0xMDAwJnE9ODAnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGh1bWJCb3ggc2VsZWN0ZWQ9e2FjdGl2ZX0gbGluaz17cGhvdG9TZXR0ZXIodGh1bWJuYWlsKX0gb25DbGljaz17KGUpID0+IHtyZXR1cm4gY29uc29sZS5sb2coJ2Fpc3ViaXVmJyk7fX0vPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVRodW1ibmFpbDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/overview/galleryThumbnail.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f7c3f4a460ee0075807")
/******/ })();
/******/ 
/******/ }
);