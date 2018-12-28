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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! electron */ "electron"),
    ipcRenderer = _require.ipcRenderer;

var body = document.body;
body.addEventListener('click', function (event) {
  ipcRenderer.send('new-route');
});
body.style.backgroundColor = 'darkred';
ipcRenderer.on('update', function (sender, data) {
  if (!data || !data.data || !data.route) {
    body.innerHTML = '<center><h1>No data</h1></center>';
    return;
  }

  var route = data.route;
  var buses = data.data;

  if (!buses || !buses.length) {
    body.innerHTML = "<center><h3>No ".concat(route.mode, "</h3></center>");
    return;
  }

  var arrivalMins = buses.map(function (bus) {
    var msUntilArrival = new Date(bus.attributes.arrival_time) - Date.now();
    return Math.floor(msUntilArrival / 1000 / 60);
  }).filter(function (mins) {
    return mins > 1;
  }).slice(0, 4);
  render(route, arrivalMins);
});

function render(route, times) {
  var renderEachTime = function renderEachTime(min) {
    return "<h2><span class=\"bold\">".concat(min, " </span><span class=\"small\">mins</span></h2>");
  };

  body.innerHTML = "\n        <center>\n        <div class=\"header\">\n            <h4 class=\"short\">".concat(route.name.toUpperCase(), "</h4>\n            <h5 class=\"short light\">Next ").concat(route.mode, " in:</h5>\n        </div>\n        <div class=\"").concat(times.length < 4 ? 'pad' : '', "\">\n            ").concat(times.map(renderEachTime).join(''), "\n        </div>\n        </center>");
  var waitStart = route.waitStart,
      waitLength = route.waitLength;

  var isWalkable = function isWalkable(mins) {
    return mins >= waitStart && mins <= waitStart + waitLength;
  };

  body.style.backgroundColor = times.some(isWalkable) ? 'darkgreen' : 'darkred'; // Send event to main process to change icon color

  ipcRenderer.send('change-icon', body.style.backgroundColor);
}

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map