(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.memoize-one"],{

/***/ "Wwog":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction areInputsEqual(newInputs, lastInputs) {\n    if (newInputs.length !== lastInputs.length) {\n        return false;\n    }\n    for (var i = 0; i < newInputs.length; i++) {\n        if (newInputs[i] !== lastInputs[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction memoizeOne(resultFn, isEqual) {\n    if (isEqual === void 0) { isEqual = areInputsEqual; }\n    var lastThis;\n    var lastArgs = [];\n    var lastResult;\n    var calledOnce = false;\n    function memoized() {\n        var newArgs = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            newArgs[_i] = arguments[_i];\n        }\n        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {\n            return lastResult;\n        }\n        lastResult = resultFn.apply(this, newArgs);\n        calledOnce = true;\n        lastThis = this;\n        lastArgs = newArgs;\n        return lastResult;\n    }\n    return memoized;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (memoizeOne);\n\n\n//# sourceURL=webpack:///./node_modules/memoize-one/dist/memoize-one.esm.js?");

/***/ })

}]);