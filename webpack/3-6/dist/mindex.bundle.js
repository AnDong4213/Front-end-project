webpackJsonp([5],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);



let obj = {
	songid: 'QQ',
	songmid: 'PP',
	singer: 'RR',
	songname: 'AA',
	albumname: 'TT',
	interval: 'DD',
	image: 'BB',
	a: 89,
	d: 90,
	c: 86
}

Promise.all/* import() */([__webpack_require__.e(2), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, 2)).then(function(para) {
	let b = para.createPoint(obj)
	console.log(b);
})

Promise.all/* import() */([__webpack_require__.e(2), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, 3)).then(function(para) {
	console.log(para.isType('Object')(obj));
})

let arr = ['a', 'b', 'c', 'd']
console.log(__WEBPACK_IMPORTED_MODULE_0_lodash__["chunk"](arr, 2))
console.log(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('#main').html());


/***/ })

},[4]);