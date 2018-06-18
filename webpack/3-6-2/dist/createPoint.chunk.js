(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createPoint"],{

/***/ "./src/mb.js":
/*!*******************!*\
  !*** ./src/mb.js ***!
  \*******************/
/*! exports provided: shuffle, createPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPoint\", function() { return createPoint; });\n/* harmony import */ var _mm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mm.js */ \"./src/mm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return _mm_js__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"]; });\n\nlet urlMap = {}\r\nclass Point {\r\n  constructor({id, mid, singer, name, album, duration, image}) {\r\n    Object.assign(this,{id, mid, singer, name, album, duration, image})\r\n    this.url = 'www.baidu.com';\r\n    if (urlMap[this.id]) {\r\n      this.ageurl = urlMap[this.id]\r\n    } else {\r\n      this.genUrl()\r\n    }\r\n  }\r\n  genUrl() {\r\n    this.ageurl = `http://dl.stream.qqmusic.qq.com`\r\n  }\r\n}\r\n\r\n\r\n\r\nfunction createPoint(d) {\r\n  return new Point({\r\n    id: d.songid,\r\n\t\tmid: d.songmid,\r\n\t\tsinger: d.singer,\r\n\t\tname: d.songname,\r\n\t\talbum: d.albumname,\r\n\t\tduration: d.interval,\r\n\t\timage: d.image\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/mb.js?");

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