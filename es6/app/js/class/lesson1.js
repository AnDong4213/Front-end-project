function test() {
// 	for (let i = 1; i < 3; i++) {
// 		console.log(i)
// 	}
// 	console.log(i)
	
	//let a = 1
	let a = 2
}
//test()

/* function last() {
	const PI = 3.1415
	// PI = 8
	console.log(PI)
}
last() */


/* {
	let a = 10;
    var b = 1;
}
// console.log(a)  // 报错  let声明的变量只在它所在的代码块有效。
console.log(b) */  // 1

/* {
	for (let i = 0; i < 10; i++) {   // 计数器i只在for循环体内有效，在循环体外引用就会报错。
	  // ...
	}
	console.log(i)  // ReferenceError: i is not defined
} */

//console.time("获取数据");
//console.timeEnd('获取数据');

// 下面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10。

/* {
	var a = [], b = []
	for (var i = 0; i < 10; i++) {
	  console.log(i);
	  b[i] = i;
	  a[i] = function () {
		console.log(i);	
	  };
// 	  if (i == 4) {
// 		 a[i]()
// 		 break;
// 	  }
	  console.log('HH',i);
	}
	
	console.log('kk',i)  //  kk 10
	a[4]();  //  10
	console.log(b[4])	
	console.log(b)
} */

/* {
	var a = [];
	for (let i = 0; i < 10; i++) {  //  变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6
	  a[i] = function () {
			console.log(i);
	  };
	}
	a[6](); // 6
} */


// 不存在变量提升 
/* console.log(foo); // 输出undefined
var foo = 2; */ 
/* console.log(bar); // undefined
let bar = 2; */

// 暂时性死区   如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
// 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
/* function bar(x = y, y = 2) {
	return [x, y];
}
console.log(bar()); */  // [undefined, 2]


/* let a = 2;
var a= 3
console.log(a) */  //  Duplicate declaration "a"


//为什么需要块级作用域？   ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。
//第一种场景，内层变量可能会覆盖外层变量。
/* var tmp = new Date().toDateString().split(' ')[3];
console.log(tmp);  //  2018
function f() {
  console.log(tmp);  //  undefined
  if (true) {
    var tmp = 'hello';
		console.log(tmp);   //  hello
  }
}
f(); */


/* console.log(new Date().getFullYear())  // number 2018
let tmp = new Date().toDateString().split(' ')[3];
console.log(tmp);  //  2018
function f() {
  console.log(tmp);  //  2018
  if (true) {
    let tmp = 'hello';
		console.log(tmp);   //  hello
  }
}
f(); */


 function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
f1() 

//  块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。


//  块级作用域与函数声明    函数能不能在块级作用域之中声明？这是一个相当令人混淆的问题。
//  ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。


// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。


//  ES6 声明变量的六种方法
// ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。
var a = 1
// console.log(window.a)
console.log(self == window)  // true















