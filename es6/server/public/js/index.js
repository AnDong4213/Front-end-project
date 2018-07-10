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


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

{
	var a = void 0,
	    b = void 0,
	    rest = void 0;
	a = 1;
	b = 2;

	console.log(a, b);
	console.log(typeof a === 'undefined' ? 'undefined' : _typeof(a)); // number
}

{
	var _a = void 0,
	    _b = void 0,
	    _rest = void 0;
	_a = 1;
	_b = 2;
	_rest = [3, 4, 5, 6];

	console.log(_a, _b, _rest); // 1 2 (4) [3, 4, 5, 6]  // rest是个数组...
}

{
	// ({a,b} = {a:1,b:2})
	var _a$b = { a: { ha: 'hehe', hi: 'oo' }, b: 2 },
	    _a2 = _a$b.a,
	    _b2 = _a$b.b;

	console.log(_a2.hi, _b2); // oo 2
}

{
	var _a3 = void 0,
	    _b3 = void 0,
	    c = void 0,
	    _rest2 = void 0;
	// [a,b,c] = [1,2];  // 1 2 undefined
	// [a,b,c=3] = [1,2];   // 1 2 3
	// 1 2
	var _ref = [1, 2, 3];
	_a3 = _ref[0];
	_b3 = _ref[1];
	console.log(_a3, _b3);
}

{
	var _a4 = 1,
	    _b4 = 2; // 没有分号会报错...
	var _ref2 = [_b4, _a4];
	_a4 = _ref2[0];
	_b4 = _ref2[1];

	console.log(_a4, _b4); // 2 1
}

{
	var f = function f() {
		return [3, 4];
	};

	var _a5 = void 0,
	    _b5 = void 0;

	var _f = f();

	var _f2 = _slicedToArray(_f, 2);

	_a5 = _f2[0];
	_b5 = _f2[1];

	console.log(_a5, _b5); // 3 4
}

{
	var _f3 = function _f3() {
		return [1, 2, 3, 4, 5];
	};

	var _a6 = void 0,
	    _b6 = void 0,
	    _c = void 0;

	var _f4 = _f3();

	var _f5 = _slicedToArray(_f4, 5);

	_a6 = _f5[0];
	_b6 = _f5[4];

	console.log(_a6, _b6); // 1 5
}

{
	var _f6 = function _f6() {
		return [1, 2, 3, 4, 5];
	};

	var _a7 = void 0,
	    _b7 = void 0,
	    _c2 = void 0;

	var _f7 = _f6();

	var _f8 = _toArray(_f7);

	_a7 = _f8[0];
	_b7 = _f8.slice(2);

	console.log(_a7, _b7); // 1 (3) [3, 4, 5]
}

{
	var o = { p: 42, q: true
		//let {a,b} = o
		//console.log(a,b)  // undefined undefined
	};var p = o.p,
	    q = o.q;

	console.log(p, q); // 42 true
}

{
	var _a9 = { a: 3 },
	    _a9$a = _a9.a,
	    _a8 = _a9$a === undefined ? 10 : _a9$a,
	    _a9$b = _a9.b,
	    _b8 = _a9$b === undefined ? 5 : _a9$b;

	console.log(_a8, _b8); //  3 5
}

{
	var metaData = {
		title: 'abc',
		test: [{
			title: 'hehehe',
			desc: 'haha'
		}]
	};

	var esTitle = metaData.title,
	    _metaData$test = _slicedToArray(metaData.test, 1),
	    cnTitle = _metaData$test[0].title;

	console.log(esTitle, cnTitle); // abc hehehe
}

//  ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。   以前，为变量赋值，只能直接指定值。
//  本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

// 解构赋值允许指定默认值。 ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
{
	var _undefined = undefined,
	    y = _undefined === undefined ? 1 : _undefined;

	console.log(y); // 1

	var s = undefined;

	console.log(s); // undefined

	var _undefined2 = 'undefined',
	    z = _undefined2 === undefined ? 1 : _undefined2;

	console.log(z); // undefined  (颜色深)

	var _ref3 = null,
	    x = _ref3 === undefined ? 1 : _ref3;

	console.log(x); // null
}

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
{
	var _f9 = function _f9() {
		return 'uuu';
	};
	// let [x = f(),y] = [,2];  //  uuu 2


	var _ = 1,
	    _x = _ === undefined ? _f9() : _,
	    _y = 2; //  1 2


	console.log(_x, _y);
}

// 解构不仅可以用于数组，还可以用于对象。
// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

// 这实际上说明，对象的解构赋值是下面形式的简写  let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };

//  字符串的解构赋值   字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
{
	var _hello = 'hello',
	    _hello2 = _slicedToArray(_hello, 5),
	    _a10 = _hello2[0],
	    _b9 = _hello2[1],
	    _c3 = _hello2[2],
	    d = _hello2[3],
	    e = _hello2[4];

	console.log(e);
}

// 函数参数的解构赋值      函数的参数也可以使用解构赋值。
{
	var add = function add(_ref4) {
		var _ref5 = _slicedToArray(_ref4, 2),
		    x = _ref5[0],
		    y = _ref5[1];

		return x + y;
	};

	console.log(add([2, 3])); //  5
	// 函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。

	/* [[1, 2], [3, 4]].map(([a, b]) => {
 	console.log(a + b)
 }); */
}

// 用途   变量的解构赋值用途很多。
{
	// （1）交换变量的值  （2）从函数返回多个值   （3）函数参数的定义
	// 参数是一组有次序的值
	/* function f([x, y, z]) {
 	
 }
 f([1, 2, 3]);
 
 // 参数是一组无次序的值
 function f({x, y, z}) {
 	
 }
 f({z: 3, y: 2, x: 1}); */

	// （4）提取 JSON 数据  解构赋值对提取 JSON 对象中的数据，尤其有用。
	var jsonData = {
		id: 42,
		status: "OK",
		data: [867, 5309]
	};
	var id = jsonData.id,
	    status = jsonData.status,
	    number = jsonData.data;

	console.log(id, status, number); //  42 "OK" (2) [867, 5309]

	//  （6）遍历 Map 结构  任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
	/* let arr = ['A', 'BBO', 'CCN']
 for (let [b,,a] of arr) {
 	console.log(b,a)
 } */
	/* A undefined
 B O
 C N */

	var map = new Map();
	var aa = [];
	map.set('first', 'hello');
	map.set('second', 'world');

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    value = _step$value[1];

			console.log(" is " + value);
			aa.push(value);
		}
		// console.log(aa)  //  (2) ["hello", "world"]
		// console.log(map.size)  // 2
		// console.log(map)
		// Map(2) {"first" => "hello", "second" => "world"}
		/* size:2
     __proto__:Map
  [[Entries]]:Array(2)
  0:{"first" => "hello"}
  1:{"second" => "world"}
  length: 2 */
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var kk = _step2.value;

			console.log(kk); // (2) ["first", "hello"]  (2) ["second", "world"]
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}

{
	var strMapToObj = function strMapToObj(strMap) {
		var obj = Object.create(null);
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = strMap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _step3$value = _slicedToArray(_step3.value, 2),
				    k = _step3$value[0],
				    v = _step3$value[1];

				obj[k] = v;
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		return obj;
	};

	// console.log(Map)  // ƒ Map() { [native code] }
	// 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
	/* const map = new Map([
 	['name', '张三'],
 	['title', 'Author']
 ]);
 console.log(map.has('name'))  // true
 console.log(map.get('name')) */ // 张三

	// 只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心
	var _map = new Map();
	_map.set(['a'], 555);
	console.log(_map.get(['a'])); // undefined
	// set和get方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined。

	var map0 = new Map().set(1, 'a').set(2, 'b').set(3, 'c');
	// console.log([...map0])
	var map1 = new Map([].concat(_toConsumableArray(map0)).filter(function (_ref6) {
		var _ref7 = _slicedToArray(_ref6, 2),
		    k = _ref7[0],
		    v = _ref7[1];

		return k < 3;
	}));
	console.log(map1);

	var myMap = new Map().set('yes', true).set('no', false);
	console.log(strMapToObj(myMap));
}

/***/ })
/******/ ]);