(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.stylis-rule-sheet"],{

/***/ "TAZq":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (factory) {\n\t true ? (module['exports'] = factory()) :\n\t\tundefined\n}(function () {\n\n\t'use strict'\n\n\treturn function (insertRule) {\n\t\tvar delimiter = '/*|*/'\n\t\tvar needle = delimiter+'}'\n\n\t\tfunction toSheet (block) {\n\t\t\tif (block)\n\t\t\t\ttry {\n\t\t\t\t\tinsertRule(block + '}')\n\t\t\t\t} catch (e) {}\n\t\t}\n\n\t\treturn function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {\n\t\t\tswitch (context) {\n\t\t\t\t// property\n\t\t\t\tcase 1:\n\t\t\t\t\t// @import\n\t\t\t\t\tif (depth === 0 && content.charCodeAt(0) === 64)\n\t\t\t\t\t\treturn insertRule(content+';'), ''\n\t\t\t\t\tbreak\n\t\t\t\t// selector\n\t\t\t\tcase 2:\n\t\t\t\t\tif (ns === 0)\n\t\t\t\t\t\treturn content + delimiter\n\t\t\t\t\tbreak\n\t\t\t\t// at-rule\n\t\t\t\tcase 3:\n\t\t\t\t\tswitch (ns) {\n\t\t\t\t\t\t// @font-face, @page\n\t\t\t\t\t\tcase 102:\n\t\t\t\t\t\tcase 112:\n\t\t\t\t\t\t\treturn insertRule(selectors[0]+content), ''\n\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\treturn content + (at === 0 ? delimiter : '')\n\t\t\t\t\t}\n\t\t\t\tcase -2:\n\t\t\t\t\tcontent.split(needle).forEach(toSheet)\n\t\t\t}\n\t\t}\n\t}\n}))\n\n\n//# sourceURL=webpack:///./node_modules/stylis-rule-sheet/index.js?");

/***/ })

}]);