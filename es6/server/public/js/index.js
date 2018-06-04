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


{
	var test = function test(a) {
		var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'haha';
		var c = arguments[2];

		console.log(a, b, c);
	};

	test('hehe'); //  hehe haha undefined
}

{
	var test2 = function test2(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

		console.log(x, y);
	};

	var x = 'haha';

	test2(); // undefined undefined
	test2('uu'); // uu uu
}

{
	var _test = function _test(c) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _x3;

		console.log(c, y);
	};

	var _x3 = 'haha';

	_test(); //  undefined "haha"
	_test('uu'); //  uu haha
}

{
	var _test2 = function _test2() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				console.log(value);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	};

	_test2('a', 'b', 'c');
}

{
	var _test3 = function _test3() {
		console.log(arguments);
		var arr = Array.from(arguments);
		console.log(arr);
	};

	_test3('a', 'b');
}

{
	var _console;

	(_console = console).log.apply(_console, ['y'].concat([1, 2, 4])); //  y 1 2 4
}

{
	var arrow = function arrow(v) {
		return v * 2;
	};
	console.log(arrow(7));
}

{
	var tail = function tail(x) {
		console.log('tail', x);
	};

	var fx = function fx(x) {
		return tail(x);
	};

	fx(897);
}

/* {
	function f(a, ...b, v) {  // 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
	  // ...
	}
} */

/* 箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。 */

{
	var foo = function foo() {
		var _this = this;

		return function () {
			return function () {
				return function () {
					console.log('idhh:', _this.id);
				};
			};
		};
	};

	var f = foo.call({ id: 1 });
	f()().call({ id: 4 });
}

/***/ })
/******/ ]);