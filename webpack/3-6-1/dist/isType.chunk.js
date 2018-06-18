webpackJsonp([1],{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mm_js__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_0__mm_js__["a"]; });


const isType = function(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === '[object '+type+']'
  }
}
/* harmony export (immutable) */ __webpack_exports__["isType"] = isType;



/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shuffle;
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
		_arr[i] = _arr[j]
		_arr[j] = t
  }
  return _arr
}


/***/ })

});