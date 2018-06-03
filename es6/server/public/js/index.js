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


var _lesson = __webpack_require__(2);

console.log(_lesson.A); /*class Test{
                        	constructor() {
                        		this.a = 'hello world'
                        	}
                        }
                        
                        let test = new Test()
                        document.body.innerHTML = test.a*/

// import 'babel-polyfill';
// import './class/lesson1.js';


(0, _lesson.test)();
(0, _lesson.hehe)();
(0, _lesson.bar)();

/* import * as lesson from './class/lesson17.js'
console.log(lesson.A)
lesson.test() */

/* import lesson1 from './class/lesson17.js'
console.log(lesson1.A)
lesson1.test() */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lesson = __webpack_require__(3);

Object.defineProperty(exports, 'foo', {
	enumerable: true,
	get: function get() {
		return _lesson.foo;
	}
});
Object.defineProperty(exports, 'bar', {
	enumerable: true,
	get: function get() {
		return _lesson.bar;
	}
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* export const A = 17;

export function test() {
	console.log('test')
}

export class Hello {
	test() {
		console.log('class')
	}
} */

var A = 17;

function test() {
	console.log('test');
}

function haha() {
	console.log('haha');
}

var Hello = function () {
	function Hello() {
		_classCallCheck(this, Hello);
	}

	_createClass(Hello, [{
		key: 'test',
		value: function test() {
			console.log('class');
		}
	}]);

	return Hello;
}();

exports.A = A;
exports.test = test;
exports.Hello = Hello;
exports.hehe = haha;

/* export default {  // 有default的话，这样引进 import lesson1 from './class/lesson17.js' 才能用...
	A, test, Hello	
} */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var foo = 'hot';

var bar = function bar() {
	console.log('bar');
};

exports.foo = foo;
exports.bar = bar;

/***/ })
/******/ ]);