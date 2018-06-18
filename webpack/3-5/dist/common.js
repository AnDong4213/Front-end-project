webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPoint;
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isType = function(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === '[object '+type+']'
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = isType;



/***/ })
]);