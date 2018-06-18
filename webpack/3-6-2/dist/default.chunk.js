(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default"],{

/***/ "./src/mindex.js":
/*!***********************!*\
  !*** ./src/mindex.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/_lodash@4.17.10@lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/_jquery@3.3.1@jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\nlet element = document.createElement('div');\r\nlet h1 = document.createElement('h1');\r\nh1.innerHTML = '我是乐乐...'\r\nh1.setAttribute('id', 'main')\r\nelement.appendChild(h1);\r\ndocument.body.appendChild(element);\r\n\r\n\r\n\r\n\r\nlet obj = {\r\n\tsongid: 'QQ',\r\n\tsongmid: 'PP',\r\n\tsinger: 'RR',\r\n\tsongname: 'AA',\r\n\talbumname: 'TT',\r\n\tinterval: 'DD',\r\n\timage: 'BB',\r\n\ta: 89,\r\n\td: 90,\r\n\tc: 86\r\n}\r\n\r\n__webpack_require__.e(/*! import() | createPoint */ \"createPoint\").then(__webpack_require__.bind(null, /*! ./mb */ \"./src/mb.js\")).then(function(para) {\r\n\tlet b = para.createPoint(obj)\r\n\tconsole.log(b);\r\n})\r\n\r\n__webpack_require__.e(/*! import() | isType */ \"isType\").then(__webpack_require__.bind(null, /*! ./ma */ \"./src/ma.js\")).then(function(para) {\r\n\tconsole.log(para.isType('Object')(obj));\r\n})\r\n\r\nlet arr = ['a', 'b', 'c', 'd']\r\nconsole.log(lodash__WEBPACK_IMPORTED_MODULE_0__[\"chunk\"](arr, 2))\r\nconsole.log(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#main').html());\r\n\n\n//# sourceURL=webpack:///./src/mindex.js?");

/***/ })

}]);