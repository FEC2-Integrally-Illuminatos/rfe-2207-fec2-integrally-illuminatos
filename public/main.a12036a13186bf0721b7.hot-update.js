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

/***/ "./client/src/components/overview/alexCarousel.jsx":
/*!*********************************************************!*\
  !*** ./client/src/components/overview/alexCarousel.jsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_stylesOverview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/stylesOverview.css */ \"./client/src/assets/stylesOverview.css\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _galleryThumbnail_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./galleryThumbnail.jsx */ \"./client/src/components/overview/galleryThumbnail.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5,\n    _templateObject6,\n    _s2 = __webpack_require__.$Refresh$.signature();\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar ContainerDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  flex: 1 0 auto;\\n  height: auto;\\n  border: solid;\\n  &:after {\\n    content: \\\"\\\";\\n    display: block;\\n    padding-top: 100%;\\n  }\\n\"])));\nvar ThumbnailDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  display: flex;\\n  justify-content: space-between;\\n  width: 60%;\\n  top: 2%;\\n  left: 1%;\\n\"])));\n_c = ThumbnailDiv;\nvar LeftArrowDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  width: 5%;\\n  top: 40%;\\n  left: -1%;\\n\"])));\n_c2 = LeftArrowDiv;\nvar RightArrowDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  width: 5%;\\n  top: 40%;\\n  left: 91%;\\n\"])));\n_c3 = RightArrowDiv;\nvar FullscreenDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\nposition: absolute;\\nwidth: 101%;\\ntop: 0%;\\nleft: -1%;\\ntext-align: right;\\n\"])));\n_c4 = FullscreenDiv;\nvar MainImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  overflow: hidden;\\n  background: no-repeat center center;\\n  float: left;\\n  background-image: url(\", \");\\n  background-size: cover;\\n  height: 0;\\n  padding-bottom: 100%;\\n  width: 100%;\\n\"])), function (props) {\n  return props.image_url;\n});\n_c5 = MainImageDiv;\n\nvar AlexCarousel = function AlexCarousel(props) {\n  _s2();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.product),\n      _useState2 = _slicedToArray(_useState, 2),\n      product = _useState2[0],\n      setProduct = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.style),\n      _useState4 = _slicedToArray(_useState3, 2),\n      style = _useState4[0],\n      setStyle = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState6 = _slicedToArray(_useState5, 2),\n      current = _useState6[0],\n      setCurrent = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {\n    if (props.style.photos.length > 6) {\n      return 7;\n    } else {\n      return props.style.photos.length;\n    }\n  }),\n      _useState8 = _slicedToArray(_useState7, 2),\n      length = _useState8[0],\n      setLength = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {\n    var results = [];\n    props.style.photos.forEach(function (photo, index) {\n      if (index >= 7) {\n        return;\n      }\n\n      ;\n      results.push(photo.url);\n    });\n    return results;\n  }),\n      _useState10 = _slicedToArray(_useState9, 2),\n      MainImageData = _useState10[0],\n      setMainImageData = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {\n    var results = [];\n    props.style.photos.forEach(function (photo, index) {\n      if (index >= 7) {\n        return;\n      }\n\n      ;\n      results.push(photo.thumbnail_url);\n    });\n    return results;\n  }),\n      _useState12 = _slicedToArray(_useState11, 2),\n      ThumbImageData = _useState12[0],\n      setThumbImageData = _useState12[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setProduct(props.product);\n    setStyle(props.style);\n    setCurrent(0);\n    setLength(function () {\n      if (props.style.photos.length > 6) {\n        return 7;\n      } else {\n        return props.style.photos.length;\n      }\n    });\n    setMainImageData(function () {\n      var results = [];\n      props.style.photos.forEach(function (photo, index) {\n        if (index >= 7) {\n          return;\n        }\n\n        ;\n        results.push(photo.url);\n      });\n      return results;\n    });\n    setThumbImageData(function () {\n      var results = [];\n      props.style.photos.forEach(function (photo, index) {\n        if (index >= 7) {\n          return;\n        }\n\n        ;\n        results.push(photo.thumbnail_url);\n      });\n      return results;\n    });\n  }, [props]);\n\n  var handleNextClick = function handleNextClick(e) {\n    e.preventDefault();\n\n    if (current === length - 1) {\n      setCurrent(0);\n    } else {\n      var temp = current + 1;\n      setCurrent(temp);\n    }\n\n    ;\n  };\n\n  var handleBackClick = function handleBackClick(e) {\n    e.preventDefault();\n\n    if (current === 0) {\n      setCurrent(length - 1);\n    } else {\n      var temp = current - 1;\n      setCurrent(temp);\n    }\n\n    ;\n  };\n\n  var handleThumbClick = function handleThumbClick(val) {\n    e.preventDefault();\n    console.log('clicked');\n    setCurrent(val);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainImageDiv, {\n    image_url: MainImageData[current]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThumbnailDiv, null, ThumbImageData.map(function (thumbnail, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_galleryThumbnail_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      handleThumbClick: handleThumbClick,\n      current: current,\n      thumbnail: thumbnail,\n      index: index\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LeftArrowDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineArrowBackIos, {\n    color: \"white\",\n    fontSize: \"72px\",\n    onClick: function onClick(e) {\n      handleBackClick(e);\n    },\n    onMouseEnter: function onMouseEnter(_ref) {\n      var target = _ref.target;\n      target.style.color = \"#4652DF\";\n      target.style.fontSize = \"80px\";\n    },\n    onMouseLeave: function onMouseLeave(_ref2) {\n      var target = _ref2.target;\n      target.style.color = \"white\";\n      target.style.fontSize = \"75px\";\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RightArrowDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineArrowForwardIos, {\n    color: \"white\",\n    fontSize: \"72px\",\n    onClick: function onClick(e) {\n      handleNextClick(e);\n    },\n    onMouseEnter: function onMouseEnter(_ref3) {\n      var target = _ref3.target;\n      target.style.color = \"#4652DF\";\n      target.style.fontSize = \"80px\";\n    },\n    onMouseLeave: function onMouseLeave(_ref4) {\n      var target = _ref4.target;\n      target.style.color = \"white\";\n      target.style.fontSize = \"75px\";\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FullscreenDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdFullscreen, {\n    color: \"#CACACA\",\n    fontSize: \"55px\",\n    onClick: function onClick(e) {\n      handleNextClick(e);\n    },\n    onMouseEnter: function onMouseEnter(_ref5) {\n      var target = _ref5.target;\n      target.style.fontSize = \"60px\";\n    },\n    onMouseLeave: function onMouseLeave(_ref6) {\n      var target = _ref6.target;\n      target.style.fontSize = \"55px\";\n    }\n  })));\n};\n\n_s2(AlexCarousel, \"R4AYnGW+VQ69z6ev8FbfuhpgFd4=\");\n\n_c6 = AlexCarousel;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlexCarousel);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n__webpack_require__.$Refresh$.register(_c, \"ThumbnailDiv\");\n__webpack_require__.$Refresh$.register(_c2, \"LeftArrowDiv\");\n__webpack_require__.$Refresh$.register(_c3, \"RightArrowDiv\");\n__webpack_require__.$Refresh$.register(_c4, \"FullscreenDiv\");\n__webpack_require__.$Refresh$.register(_c5, \"MainImageDiv\");\n__webpack_require__.$Refresh$.register(_c6, \"AlexCarousel\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvb3ZlcnZpZXcvYWxleENhcm91c2VsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFZQTtBQUFBO0FBU0E7QUFBQTtBQU9BO0FBQUE7QUFPQTtBQUFBO0FBUUE7QUFRQTtBQUFBO0FBUkE7O0FBZUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUE5R0E7O0FBQUE7QUFpSEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZmUtMjIwNy1mZWMyLWludGVncmFsbHktaWxsdW1pbmF0b3MvLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvb3ZlcnZpZXcvYWxleENhcm91c2VsLmpzeD8wYTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzT3ZlcnZpZXcuY3NzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEdhbGxlcnlUaHVtYm5haWwgZnJvbSAnLi9nYWxsZXJ5VGh1bWJuYWlsLmpzeCc7XG5pbXBvcnQge01kT3V0bGluZUFycm93Rm9yd2FyZElvcywgTWRPdXRsaW5lQXJyb3dCYWNrSW9zLCBNZEZ1bGxzY3JlZW59IGZyb20gJ3JlYWN0LWljb25zL21kJztcblxuXG5jb25zdCBDb250YWluZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogc29saWQ7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDEwMCU7XG4gIH1cbmBcblxuY29uc3QgVGh1bWJuYWlsRGl2ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA2MCU7XG4gIHRvcDogMiU7XG4gIGxlZnQ6IDElO1xuYFxuXG5jb25zdCBMZWZ0QXJyb3dEaXYgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1JTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IC0xJTtcbmBcblxuY29uc3QgUmlnaHRBcnJvd0RpdiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogOTElO1xuYFxuXG5jb25zdCBGdWxsc2NyZWVuRGl2ID0gc3R5bGVkLmRpdmBcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiAxMDElO1xudG9wOiAwJTtcbmxlZnQ6IC0xJTtcbnRleHQtYWxpZ246IHJpZ2h0O1xuYFxuXG5jb25zdCBNYWluSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcyA9PiBwcm9wcy5pbWFnZV91cmwpfSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBBbGV4Q2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUocHJvcHMucHJvZHVjdCk7XG4gIGNvbnN0IFtzdHlsZSwgc2V0U3R5bGVdID0gdXNlU3RhdGUocHJvcHMuc3R5bGUpO1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xlbmd0aCwgc2V0TGVuZ3RoXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAocHJvcHMuc3R5bGUucGhvdG9zLmxlbmd0aCA+IDYpIHtcbiAgICAgIHJldHVybiA3O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvcHMuc3R5bGUucGhvdG9zLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBbTWFpbkltYWdlRGF0YSwgc2V0TWFpbkltYWdlRGF0YV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBwcm9wcy5zdHlsZS5waG90b3MuZm9yRWFjaCgocGhvdG8sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPj0gNykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9O1xuICAgICAgcmVzdWx0cy5wdXNoKHBob3RvLnVybCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0pO1xuICBjb25zdCBbVGh1bWJJbWFnZURhdGEsIHNldFRodW1iSW1hZ2VEYXRhXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgIHByb3BzLnN0eWxlLnBob3Rvcy5mb3JFYWNoKChwaG90bywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+PSA3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH07XG4gICAgICByZXN1bHRzLnB1c2gocGhvdG8udGh1bWJuYWlsX3VybCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcm9kdWN0KHByb3BzLnByb2R1Y3QpO1xuICAgIHNldFN0eWxlKHByb3BzLnN0eWxlKTtcbiAgICBzZXRDdXJyZW50KDApO1xuICAgIHNldExlbmd0aCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuc3R5bGUucGhvdG9zLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvcHMuc3R5bGUucGhvdG9zLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRNYWluSW1hZ2VEYXRhKCgpID0+IHtcbiAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICBwcm9wcy5zdHlsZS5waG90b3MuZm9yRWFjaCgocGhvdG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA+PSA3KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICByZXN1bHRzLnB1c2gocGhvdG8udXJsKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gICAgc2V0VGh1bWJJbWFnZURhdGEoKCkgPT4ge1xuICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgIHByb3BzLnN0eWxlLnBob3Rvcy5mb3JFYWNoKChwaG90bywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID49IDcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdHMucHVzaChwaG90by50aHVtYm5haWxfdXJsKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sIFtwcm9wc10pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHRDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjdXJyZW50ID09PSBsZW5ndGggLSAxKSB7XG4gICAgICBzZXRDdXJyZW50KDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGVtcCA9IGN1cnJlbnQgKyAxO1xuICAgICAgc2V0Q3VycmVudCh0ZW1wKTtcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGN1cnJlbnQgPT09IDApIHtcbiAgICAgIHNldEN1cnJlbnQobGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZW1wID0gY3VycmVudCAtIDE7XG4gICAgICBzZXRDdXJyZW50KHRlbXApO1xuICAgIH07XG4gIH1cblxuICBjb25zdCBoYW5kbGVUaHVtYkNsaWNrID0gKHZhbCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgIHNldEN1cnJlbnQodmFsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8TWFpbkltYWdlRGl2IGltYWdlX3VybD17TWFpbkltYWdlRGF0YVtjdXJyZW50XX0+XG4gICAgICAgIDxUaHVtYm5haWxEaXY+XG4gICAgICAgICAge1RodW1iSW1hZ2VEYXRhLm1hcCgodGh1bWJuYWlsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxHYWxsZXJ5VGh1bWJuYWlsIGhhbmRsZVRodW1iQ2xpY2s9e2hhbmRsZVRodW1iQ2xpY2t9IGN1cnJlbnQ9e2N1cnJlbnR9IHRodW1ibmFpbD17dGh1bWJuYWlsfSBpbmRleD17aW5kZXh9Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UaHVtYm5haWxEaXY+XG4gICAgICAgIDxMZWZ0QXJyb3dEaXY+XG4gICAgICAgICAgPE1kT3V0bGluZUFycm93QmFja0lvcyBjb2xvcj0nd2hpdGUnIGZvbnRTaXplPSc3MnB4JyBvbkNsaWNrPXsoZSkgPT4ge2hhbmRsZUJhY2tDbGljayhlKTt9fSBvbk1vdXNlRW50ZXI9eyh7dGFyZ2V0fSkgPT4ge3RhcmdldC5zdHlsZS5jb2xvcj1cIiM0NjUyREZcIjsgdGFyZ2V0LnN0eWxlLmZvbnRTaXplPVwiODBweFwiO319IG9uTW91c2VMZWF2ZT17KHt0YXJnZXR9KT0+IHt0YXJnZXQuc3R5bGUuY29sb3I9XCJ3aGl0ZVwiOyB0YXJnZXQuc3R5bGUuZm9udFNpemU9XCI3NXB4XCI7fX0vPlxuICAgICAgICA8L0xlZnRBcnJvd0Rpdj5cbiAgICAgICAgPFJpZ2h0QXJyb3dEaXY+XG4gICAgICAgICAgPE1kT3V0bGluZUFycm93Rm9yd2FyZElvcyBjb2xvcj0nd2hpdGUnIGZvbnRTaXplPSc3MnB4JyBvbkNsaWNrPXsoZSkgPT4ge2hhbmRsZU5leHRDbGljayhlKTt9fSBvbk1vdXNlRW50ZXI9eyh7dGFyZ2V0fSkgPT4ge3RhcmdldC5zdHlsZS5jb2xvcj1cIiM0NjUyREZcIjsgdGFyZ2V0LnN0eWxlLmZvbnRTaXplPVwiODBweFwiO319IG9uTW91c2VMZWF2ZT17KHt0YXJnZXR9KT0+IHt0YXJnZXQuc3R5bGUuY29sb3I9XCJ3aGl0ZVwiOyB0YXJnZXQuc3R5bGUuZm9udFNpemU9XCI3NXB4XCI7fX0vPlxuICAgICAgICA8L1JpZ2h0QXJyb3dEaXY+XG4gICAgICAgIDxGdWxsc2NyZWVuRGl2PlxuICAgICAgICAgIDxNZEZ1bGxzY3JlZW4gY29sb3I9JyNDQUNBQ0EnIGZvbnRTaXplPSc1NXB4JyBvbkNsaWNrPXsoZSkgPT4ge2hhbmRsZU5leHRDbGljayhlKTt9fSBvbk1vdXNlRW50ZXI9eyh7dGFyZ2V0fSkgPT4ge3RhcmdldC5zdHlsZS5mb250U2l6ZT1cIjYwcHhcIn19IG9uTW91c2VMZWF2ZT17KHt0YXJnZXR9KT0+IHt0YXJnZXQuc3R5bGUuZm9udFNpemU9XCI1NXB4XCI7fX0vPlxuICAgICAgICA8L0Z1bGxzY3JlZW5EaXY+XG4gICAgICA8L01haW5JbWFnZURpdj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBbGV4Q2Fyb3VzZWw7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/overview/alexCarousel.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("156ab5a396727c01762e")
/******/ })();
/******/ 
/******/ }
);