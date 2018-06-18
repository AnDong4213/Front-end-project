(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["isType"],{

/***/ "./src/ma.js":
/*!*******************!*\
  !*** ./src/ma.js ***!
  \*******************/
/*! exports provided: shuffle, isType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isType\", function() { return isType; });\n/* harmony import */ var _mm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mm.js */ \"./src/mm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return _mm_js__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"]; });\n\n\r\n\r\nconst isType = function(type) {\r\n  return function(obj) {\r\n    return Object.prototype.toString.call(obj) === '[object '+type+']'\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/ma.js?");

/***/ }),

/***/ "./src/mm.js":
/*!*******************!*\
  !*** ./src/mm.js ***!
  \*******************/
/*! exports provided: shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\nfunction getRandomInt(min, max) {\r\n\treturn Math.floor(Math.random() * (max - min + 1) + min)\r\n}\r\n\r\nfunction shuffle(arr) {\r\n  let _arr = arr.slice()\r\n  for (let i = 0; i < _arr.length; i++) {\r\n    let j = getRandomInt(0, i)\r\n    let t = _arr[i]\r\n\t\t_arr[i] = _arr[j]\r\n\t\t_arr[j] = t\r\n  }\r\n  return _arr\r\n}\r\n\n\n//# sourceURL=webpack:///./src/mm.js?");

/***/ })

}]);