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

{
	var a = [];
	for (let i = 0; i < 10; i++) {
	  a[i] = function () {
		console.log(i);
	  };
	}
	a[6](); // 6
}


