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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isType = function isType(type) {
	return function (obj) {
		return Object.prototype.toString.call(obj) === '[object ' + type + ']';
	};
};

{
	var createPoint = function createPoint() {
		for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
			a[_key] = arguments[_key];
		}

		return new (Function.prototype.bind.apply(Point, [null].concat(a)))();
	};

	// 1. 属性的简洁表示法 § ⇧
	// ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
	/* let foo = 'haha', baz = {foo};
 console.log(baz)  //  {foo: "haha"}
 console.log(isType('Object')(baz)) */ // true

	/* function f(x,y) {
 	return {x,y}
 }
 console.log(f(4,7)) */ // {x: 4, y: 7}

	/* let birth = '2000/01/01';
 let person = {
 	name: '哈哈',
 	birth,
 	hello() {
 		console.log(this.name)
 	},
 	class() {
 		console.log('我是class')
 	}
 }
 person.class() //  我是class
 console.log(person.birth)  */ // 2000/01/01

	// 属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法
	/* let cart = {
 	_wheels: 14,
 	get wheels() {
 		return this._wheels
 	},
 	set wheels (value) {
 		if (value < this._wheels) {
 			throw new Error('数值太小了！');
 		}
 		this._wheels = value
 	}
 }
 // console.log(cart.wheels)  //  14
 cart._wheels = 12
 console.log(cart.wheels) */ // 12

	/* console.log(-0 === +0)  // true
 console.log(Object.is(-0,+0))  // false
 console.log(Object.is(NaN,NaN)) */ // true

	// console.log(Object.assign(null))  // Cannot convert undefined or null to object

	var arra = ['1', '2', '3', '4', '5', '6', '7'];

	var Point = function Point(id, mid, singer, name, album, duration, image) {
		_classCallCheck(this, Point);

		Object.assign(this, { id: id, mid: mid, singer: singer, name: name, album: album, duration: duration, image: image });
		this.url = 'www.baidu.com';
	};

	var aaa = createPoint.apply(undefined, arra);
	console.log(aaa);

	/* let urlMap = {}
 class Point {
 	constructor({id, mid, singer, name, album, duration, image}) {
 		Object.assign(this,{id, mid, singer, name, album, duration, image});
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
 function createSong(d) {
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
 let haha = {
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
 let b = createSong(haha)
 console.log(b) */

	/* class Point1 {
   constructor(x, y) {
 	  Object.assign(this, {x, y});
   }
 }
 let aa = new Point1(2,6)
 console.log(aa)  */

	/* let haha = {
 	songid: 'QQ',
 	songmid: 'PP',
 	singer: 'RR',
 	songname: 'AA',
 	albumname: 'TT',
 	interval: 'DD',
 	image: 'BB'
 }
 let num = {
 	a: 89,
 	d: 90,
 	c: 86
 }
 const merge = (aa, sources) => Object.assign({}, aa,sources);
 console.log(merge(num, haha)) */

	// console.log(Object.assign(2))

	/* const v1 = 'abc', v2 = true, v3 = 10;
 const obj = Object.assign({}, v1, v2, v3);
 console.log(obj); */ //  {0: "a", 1: "b", 2: "c"}
}

/***/ })
/******/ ]);