webpackJsonp([0],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createPoint"] = createPoint;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mm_js__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_0__mm_js__["a"]; });
let urlMap = {}
class Point {
  constructor({id, mid, singer, name, album, duration, image}) {
    Object.assign(this,{id, mid, singer, name, album, duration, image})
    this.url = 'www.baidu.com';
    if (urlMap[this.id]) {
      this.ageurl = urlMap[this.id]
    } else {
      this.genUrl()
    }
  }
  genUrl() {
    this.ageurl = `http://dl.stream.qqmusic.qq.com`
  }
}



function createPoint(d) {
  return new Point({
    id: d.songid,
		mid: d.songmid,
		singer: d.singer,
		name: d.songname,
		album: d.albumname,
		duration: d.interval,
		image: d.image
  })
}


/***/ })

});