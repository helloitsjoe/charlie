/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/credentials.json":
/*!************************************!*\
  !*** ./resources/credentials.json ***!
  \************************************/
/*! exports provided: mbtaKey, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"mbtaKey\\\":\\\"220358def8604846865a08546e986961\\\"}\");\n\n//# sourceURL=webpack:///./resources/credentials.json?");

/***/ }),

/***/ "./resources/routes.config.json":
/*!**************************************!*\
  !*** ./resources/routes.config.json ***!
  \**************************************/
/*! exports provided: enabled, disabled, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"enabled\\\":{\\\"winthrop\\\":{\\\"route\\\":71,\\\"stop\\\":2056,\\\"waitStart\\\":3,\\\"waitLength\\\":6,\\\"morning\\\":true},\\\"holyoke\\\":{\\\"route\\\":1,\\\"stop\\\":110,\\\"waitStart\\\":3,\\\"waitLength\\\":6,\\\"morning\\\":true},\\\"harvardWatertown\\\":{\\\"customName\\\":\\\"Harvard - 71\\\",\\\"route\\\":71,\\\"stop\\\":\\\"place-harsq\\\",\\\"waitStart\\\":3,\\\"waitLength\\\":6},\\\"backBayCR\\\":{\\\"stop\\\":\\\"Back Bay\\\",\\\"direction\\\":1,\\\"waitStart\\\":5,\\\"waitLength\\\":6},\\\"copley\\\":{\\\"stop\\\":70154,\\\"direction\\\":1,\\\"waitStart\\\":5,\\\"waitLength\\\":6},\\\"clearway\\\":{\\\"stop\\\":91,\\\"waitStart\\\":10,\\\"waitLength\\\":6}},\\\"disabled\\\":{\\\"backBayOrange\\\":{\\\"stop\\\":70015,\\\"waitStart\\\":5,\\\"waitLength\\\":6},\\\"southStation\\\":{\\\"stop\\\":70080,\\\"waitStart\\\":20,\\\"waitLength\\\":10}}}\");\n\n//# sourceURL=webpack:///./resources/routes.config.json?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_fallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fallback */ \"./src/components/fallback.js\");\n/* harmony import */ var _components_route_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/route-item */ \"./src/components/route-item.js\");\n/* harmony import */ var _components_spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spacer */ \"./src/components/spacer.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  max-width: 380px;\\n  margin: auto;\\n  background-color: #191919;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n/* eslint-disable function-paren-newline */\n\n\n // import loadable from '@loadable/component';\n\n\n\n\n // import Footer from './components/footer';\n\n\n // Could lazy load, but it doesn't save much from the initial bundle.\n// Cool that @loadable/component works with preact though!\n// const RouteItem = loadable(() => import('./components/route-item'));\n// const Spacer = loadable(() => import('./components/spacer'));\n// import '../css/skeleton.css';\n\nvar StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());\nfunction App(_ref) {\n  var getHourOfDay = _ref.getHourOfDay,\n      fetchData = _ref.fetchData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    routes: [],\n    loading: true,\n    error: null\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      count = _useState4[0],\n      setCount = _useState4[1];\n\n  var updateState = function updateState(newState) {\n    return setState(function (s) {\n      return _objectSpread({}, s, {}, newState);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var fetchNewData = function fetchNewData() {\n      updateState({\n        loading: true\n      });\n      fetchData().then(function (routes) {\n        if (routes.error) {\n          console.error(routes.error.stack);\n          updateState({\n            loading: false,\n            error: routes.error\n          });\n          return;\n        } // console.log(`routes`, routes);\n\n\n        updateState({\n          loading: false,\n          error: null,\n          routes: routes\n        });\n      })[\"catch\"](function (error) {\n        updateState({\n          loading: false,\n          error: error\n        });\n      });\n    };\n\n    fetchNewData();\n    var fetchInterval = setInterval(function () {\n      fetchNewData();\n    }, 1000 * 30);\n    return function () {\n      return clearInterval(fetchInterval);\n    };\n  }, [fetchData, count]);\n  var handleReFetch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return setCount(function (c) {\n      return c + 1;\n    });\n  }, []);\n  Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"usePullRefresh\"])(handleReFetch);\n\n  var getCombinedRoutes = function getCombinedRoutes(routes) {\n    return getHourOfDay() < 12 ? ['Inbound'].concat(_toConsumableArray(routes.morning), ['Outbound'], _toConsumableArray(routes.evening)) : ['Outbound'].concat(_toConsumableArray(routes.evening), ['Inbound'], _toConsumableArray(routes.morning));\n  };\n\n  var routes = state.routes,\n      error = state.error,\n      loading = state.loading;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, {\n    \"data-testid\": \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    reFetch: handleReFetch\n  }), error || loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_fallback__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    error: error\n  }) : getCombinedRoutes(routes).map(function (route) {\n    return typeof route === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      key: route,\n      text: route\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_route_item__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: route.id,\n      route: route\n    });\n  }));\n}\nApp.propTypes = {\n  fetchData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  getHourOfDay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nApp.defaultProps = {\n  fetchData: _fetchData__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  getHourOfDay: function getHourOfDay() {\n    return new Date().getHours();\n  }\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/fallback.js":
/*!************************************!*\
  !*** ./src/components/fallback.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fallback; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Fallback(_ref) {\n  var error = _ref.error;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      textAlign: 'center',\n      margin: '20px'\n    }\n  }, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"header\"\n  }, \"Error!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      color: 'red'\n    }\n  }, error.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    style: {\n      color: 'red',\n      textAlign: 'left'\n    }\n  }, error.stack), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      fontWeight: 300\n    }\n  }, \"Open devtools for more information\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"header\"\n  }, \"Loading...\"));\n}\nFallback.propTypes = {\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    stack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  })\n};\nFallback.defaultProps = {\n  error: null\n};\n\n//# sourceURL=webpack:///./src/components/fallback.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 1rem;\\n  border-radius: 10px;\\n  height: 20px;\\n  line-height: 20px;\\n  padding: 0px 20px;\\n  margin: 0px;\\n  color: #666;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  text-align: center;\\n  padding-top: 20px;\\n  padding-bottom: 10px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject2());\nfunction Header(_ref) {\n  var reFetch = _ref.reFetch;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {\n    onClick: reFetch\n  }, \"REFRESH\"));\n}\nHeader.propTypes = {\n  reFetch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\n//# sourceURL=webpack:///./src/components/header.js?");

/***/ }),

/***/ "./src/components/minutes-list.js":
/*!****************************************!*\
  !*** ./src/components/minutes-list.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MinutesList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: \", \";\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: inline-block;\\n  padding: 10px 0;\\n  font-size: \", \";\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  font-weight: 700;\\n  width: 60px;\\n  transition: color \", \";\\n  color: \", \";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar MinutesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), _constants__WEBPACK_IMPORTED_MODULE_3__[\"TRANS_TIME\"], function (_ref) {\n  var clicked = _ref.clicked,\n      idx = _ref.idx;\n  return clicked || idx === 0 ? '#FFF' : '#888';\n});\nvar StyledMinutes = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (props) {\n  return props.idx > 0 ? '2.5rem' : '3.5rem';\n});\nvar StyledMinutesLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (props) {\n  return props.idx > 0 ? '1.25rem' : '1.5rem';\n});\nfunction MinutesList(_ref2) {\n  var mins = _ref2.mins,\n      clicked = _ref2.clicked;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-testid\": \"minutes-list\",\n    style: {\n      display: 'flex',\n      alignItems: 'flex-end'\n    }\n  }, mins.map(function (min, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MinutesWrapper, {\n      \"data-testid\": \"minutes\" // eslint-disable-next-line\n      ,\n      key: \"\".concat(min, \"-\").concat(idx),\n      clicked: clicked,\n      idx: idx\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMinutes, {\n      idx: idx\n    }, min), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMinutesLabel, {\n      idx: idx\n    }, \"min\"));\n  }));\n}\nMinutesList.propTypes = {\n  mins: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number).isRequired,\n  clicked: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool\n};\nMinutesList.defaultProps = {\n  clicked: false\n};\n\n//# sourceURL=webpack:///./src/components/minutes-list.js?");

/***/ }),

/***/ "./src/components/route-item.js":
/*!**************************************!*\
  !*** ./src/components/route-item.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RouteItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stop_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stop-info */ \"./src/components/stop-info.js\");\n/* harmony import */ var _minutes_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minutes-list */ \"./src/components/minutes-list.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: '0 0 auto';\\n  width: 500px;\\n  border-bottom: 6px solid \", \";\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 10px 15px;\\n  flex: \", \";\\n  transition: \", \";\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  text-align: left;\\n  border-bottom: 1px solid #666;\\n  display: flex;\\n  flex-wrap: nowrap;\\n  overflow-x: hidden;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\nvar RouteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());\nvar StopWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), function (props) {\n  return props.clicked ? '0 0 13%' : '0 0 60%';\n}, _constants__WEBPACK_IMPORTED_MODULE_5__[\"TRANS_TIME\"]);\nvar MinsListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), function (props) {\n  return props.isWalkable ? _constants__WEBPACK_IMPORTED_MODULE_5__[\"GREEN\"] : _constants__WEBPACK_IMPORTED_MODULE_5__[\"RED\"];\n});\nfunction RouteItem(_ref) {\n  var _ref$route = _ref.route,\n      color = _ref$route.color,\n      stopName = _ref$route.stopName,\n      direction = _ref$route.direction,\n      textColor = _ref$route.textColor,\n      customName = _ref$route.customName,\n      isWalkable = _ref$route.isWalkable,\n      departMins = _ref$route.departMins;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      clicked = _useState2[0],\n      setClicked = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RouteWrapper, {\n    onClick: function onClick() {\n      return setClicked(function (c) {\n        return !c;\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StopWrapper, {\n    clicked: clicked\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stop_info__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    color: color,\n    textColor: textColor,\n    name: customName || stopName,\n    direction: direction,\n    isCompact: clicked\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MinsListWrapper, {\n    isWalkable: isWalkable\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_minutes_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    clicked: clicked,\n    mins: departMins\n  })));\n}\nRouteItem.propTypes = {\n  route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    stopName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    textColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    customName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    isWalkable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n    departMins: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)\n  }).isRequired\n};\n\n//# sourceURL=webpack:///./src/components/route-item.js?");

/***/ }),

/***/ "./src/components/spacer.js":
/*!**********************************!*\
  !*** ./src/components/spacer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spacer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 20px;\\n  line-height: 20px;\\n  background-color: #333;\\n  border-bottom: 1px solid #666;\\n  padding-left: 10px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar StyledSpacer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());\nfunction Spacer(_ref) {\n  var text = _ref.text;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSpacer, {\n    \"data-testid\": \"spacer\"\n  }, text);\n}\nSpacer.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\n//# sourceURL=webpack:///./src/components/spacer.js?");

/***/ }),

/***/ "./src/components/stop-info.js":
/*!*************************************!*\
  !*** ./src/components/stop-info.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StopInfo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  color: #999;\\n  padding: 10px 0px 0px 10px;\\n  font-weight: 300;\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n  width: \", \";\\n  opacity: \", \";\\n  transition: opacity \", \";\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  color: #\", \";\\n  font-size: 200%;\\n  font-weight: 700;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  overflow: hidden;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 40px;\\n  text-align: center;\\n  border-radius: 20px;\\n  width: \", \";\\n  margin-left: \", \";\\n  background-color: #\", \";\\n  transition: \", \";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar StyledColorPill = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), function (props) {\n  return props.isCompact ? '40px' : '100%';\n}, function (props) {\n  return props.isCompact ? '6px' : '0';\n}, function (props) {\n  return props.color;\n}, _constants__WEBPACK_IMPORTED_MODULE_3__[\"TRANS_TIME\"]);\nvar StyledStopName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3(_templateObject2(), function (props) {\n  return props.textColor;\n});\nvar StyledDirection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), function (props) {\n  return props.isCompact && '40px';\n}, function (props) {\n  return props.isCompact ? '0' : '1';\n}, _constants__WEBPACK_IMPORTED_MODULE_3__[\"TRANS_TIME\"]);\nfunction StopInfo(_ref) {\n  var color = _ref.color,\n      textColor = _ref.textColor,\n      name = _ref.name,\n      direction = _ref.direction,\n      isCompact = _ref.isCompact;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState2 = _slicedToArray(_useState, 2),\n      showFullText = _useState2[0],\n      setShowFullText = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (isCompact) return setShowFullText(false);\n    var timeout = setTimeout(function () {\n      setShowFullText(true);\n    }, 100);\n    return function () {\n      return clearTimeout(timeout);\n    };\n  }, [isCompact]);\n\n  var _name$split = name.split('@'),\n      _name$split2 = _slicedToArray(_name$split, 2),\n      first = _name$split2[0],\n      second = _name$split2[1];\n\n  var cleanName = second ? second.trim() : first.trim();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledColorPill, {\n    \"data-testid\": \"color-pill\",\n    color: color,\n    isCompact: isCompact\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStopName, {\n    \"data-testid\": \"stop-name\",\n    textColor: textColor\n  }, showFullText ? cleanName : cleanName[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDirection, {\n    \"data-enzyme-id\": \"direction\",\n    isCompact: !showFullText\n  }, \"\\u2794 \".concat(direction)));\n}\nStopInfo.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  textColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  isCompact: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\nStopInfo.defaultProps = {\n  name: '',\n  color: '',\n  textColor: '',\n  direction: '',\n  isCompact: false\n};\n\n//# sourceURL=webpack:///./src/components/stop-info.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: TRANS_TIME, GREEN, RED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRANS_TIME\", function() { return TRANS_TIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GREEN\", function() { return GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RED\", function() { return RED; });\nvar TRANS_TIME = '0.3s';\nvar GREEN = '#228822';\nvar RED = '#bb2222';\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mbta_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mbta-client */ \"mbta-client\");\n/* harmony import */ var mbta_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mbta_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _resources_routes_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/routes.config.json */ \"./resources/routes.config.json\");\nvar _resources_routes_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../resources/routes.config.json */ \"./resources/routes.config.json\", 1);\n/* eslint-disable camelcase */\n\n/* eslint-disable function-paren-newline */\n\n\nvar enabledRoutes = Object.values(_resources_routes_config_json__WEBPACK_IMPORTED_MODULE_1__.enabled);\nvar mbtaKey;\n\ntry {\n  // eslint-disable-next-line\n  var _require = __webpack_require__(/*! ../resources/credentials.json */ \"./resources/credentials.json\");\n\n  mbtaKey = _require.mbtaKey;\n} catch (err) {\n  console.warn('Missing API key, making call without key...');\n}\n\nvar PREDICTIONS_LIMIT = 4;\n\nvar fetchData = function fetchData() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$routes = _ref.routes,\n      routes = _ref$routes === void 0 ? enabledRoutes : _ref$routes,\n      _ref$mbta = _ref.mbta,\n      mbta = _ref$mbta === void 0 ? new mbta_client__WEBPACK_IMPORTED_MODULE_0___default.a(mbtaKey) : _ref$mbta;\n\n  // It would be better to send one request with a list of stops, but parsing\n  // the response isn't feasible because data.relationships.stop.data.id\n  // is sometimes different from route.stop\n  var predictionPromises = Promise.all(routes.map(function (route) {\n    return mbta.fetchPredictions({\n      stop: route.stop,\n      direction_id: route.direction,\n      sort: 'departure_time',\n      include: ['stop', 'route']\n    });\n  }));\n  return predictionPromises.then(function (predictions) {\n    console.log(\"Fetched live data\");\n    var allPreds = predictions.map(function (rawPred, i) {\n      if (!rawPred) {\n        throw new Error('No predictions');\n      }\n\n      var _routes$i = routes[i],\n          waitStart = _routes$i.waitStart,\n          waitLength = _routes$i.waitLength,\n          route = _routes$i.route,\n          morning = _routes$i.morning,\n          customName = _routes$i.customName;\n      var selectDepartures = mbta.selectDepartures,\n          selectIncluded = mbta.selectIncluded; // TODO: Figure out some good defaults to fall back to,\n      // in case of missing data/included info\n      // Filter out other routes for the same stop\n\n      var routeData = rawPred.data.filter(function (ea) {\n        return !route || ea.relationships.route.data.id === route.toString();\n      });\n      var pred = {\n        data: routeData\n      }; // const arrivals = selectArrivals(pred, { convertTo: 'min' });\n\n      var departures = selectDepartures(pred, {\n        convertTo: 'min'\n      });\n      var stopName = selectIncluded(rawPred, 'stop')[0].attributes.name;\n      var routeAttrs = selectIncluded(rawPred, 'route')[0].attributes;\n      var directionIdx = routeData.length > 0 && routeData[0].attributes.direction_id;\n      var dirDestinations = routeAttrs.direction_destinations,\n          dirNames = routeAttrs.direction_names,\n          color = routeAttrs.color,\n          textColor = routeAttrs.text_color; // Either set direction as the destination or\n      // generic Inbound/Outbound, or fall back to empty string\n\n      var direction = dirDestinations[directionIdx] || dirNames[directionIdx] || '';\n      var departMins = departures.filter(function (min) {\n        return min >= 1 && min < 60;\n      }).slice(0, PREDICTIONS_LIMIT);\n      var isWalkable = departMins.some(function (mins) {\n        return mins >= waitStart && mins <= waitStart + waitLength;\n      });\n      var id = i;\n      return {\n        id: id,\n        color: color,\n        morning: morning,\n        stopName: stopName,\n        direction: direction,\n        textColor: textColor,\n        isWalkable: isWalkable,\n        customName: customName,\n        departMins: departMins,\n        // for debugging client side\n        _pastDepartMins: departures.filter(function (min) {\n          return min <= 2;\n        }),\n        _predictions: rawPred,\n        _filtered: routeData\n      };\n    });\n    return {\n      morning: allPreds.filter(function (pred) {\n        return pred.morning;\n      }),\n      evening: allPreds.filter(function (pred) {\n        return !pred.morning;\n      })\n    };\n  })[\"catch\"](function (e) {\n    console.error('Error during fetch:', e);\n    var message = e.message,\n        stack = e.stack;\n    return {\n      error: {\n        message: message,\n        stack: stack\n      }\n    };\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);\n\n//# sourceURL=webpack:///./src/fetchData.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\n\n // FIXME Haven't been able to get preact SSR working - I keep getting Invalid Hooks\n// errors from React, but React shouldn't be referenced at all...\n// import renderToString from 'preact-render-to-string';\n// import { h } from 'preact';\n// Add [at]jsx h to enable JSX\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar PORT = 3000;\napp.get('/', function (req, res) {\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./dist/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFile(indexFile, 'utf-8', function (err, data) {\n    if (err) {\n      console.error(err);\n      return res.status(500).send({\n        message: err.message\n      });\n    }\n\n    var jsx = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n    var html = data.replace('<div id=\"main\" />', \"<div id=\\\"main\\\">\".concat(jsx, \"</div>\")); // console.log(`html:`, html);\n\n    return res.status(200).send(html);\n  });\n}); // This needs to be after app.get('/' ...), which serves the SSRed index.html.\n// We still need this to serve JS, css, etc\n\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a[\"static\"]('./dist'));\napp.listen(PORT, function () {\n  console.log(\"App listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: sleep, usePullRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sleep\", function() { return sleep; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePullRefresh\", function() { return usePullRefresh; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar sleep = function sleep(ms) {\n  return new Promise(function (resolve) {\n    return setTimeout(resolve, ms);\n  });\n};\nvar usePullRefresh = function usePullRefresh(trigger) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var downY;\n    var upY;\n\n    var setDownY = function setDownY(e) {\n      downY = e.targetTouches[0].clientY;\n    };\n\n    var setUpY = function setUpY(e) {\n      upY = e.changedTouches[0].clientY;\n\n      if (upY > downY) {\n        trigger();\n      }\n    };\n\n    document.addEventListener('touchstart', setDownY);\n    document.addEventListener('touchend', setUpY);\n    return function () {\n      document.removeEventListener('touchstart', setDownY);\n      document.removeEventListener('touchend', setUpY);\n    };\n  }, [trigger]);\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mbta-client":
/*!******************************!*\
  !*** external "mbta-client" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mbta-client\");\n\n//# sourceURL=webpack:///external_%22mbta-client%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });