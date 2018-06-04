{
	let a,b,rest;
	[a,b] = [1,2];
	console.log(a,b)
	console.log(typeof a)  // number
}

{
	let a,b,rest;
	[a,b,...rest] = [1,2,3,4,5,6];
	console.log(a,b,rest)  // 1 2 (4) [3, 4, 5, 6]  // rest是个数组...
}

{
	// ({a,b} = {a:1,b:2})
	let {a,b} = {a:{ha:'hehe',hi: 'oo'},b:2}
	console.log(a.hi,b)  // oo 2
}

{
	let a,b,c,rest;
	// [a,b,c] = [1,2];  // 1 2 undefined
	// [a,b,c=3] = [1,2];   // 1 2 3
	[a,b] = [1,2,3];  // 1 2
	console.log(a,b)  
}

{
	let a = 1, b = 2; // 没有分号会报错...
	[a,b] = [b,a]
	console.log(a,b)  // 2 1
}

{
	function f() {
		return [3,4]
	}
	let a,b;
	[a,b] = f()
	console.log(a,b)  // 3 4
}

{
	function f() {
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a, ,,, b] = f()
	console.log(a,b)  // 1 5
}

{
	function f() {
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a, , ...b] = f()
	console.log(a,b)   // 1 (3) [3, 4, 5]
}

{
	let o = {p:42,q:true}
	//let {a,b} = o
	//console.log(a,b)  // undefined undefined
	let {p,q} = o
	console.log(p,q)  // 42 true
}

{
	let {a=10,b=5} = {a:3}
	console.log(a,b)  //  3 5
}


{
	let metaData = {
		title: 'abc',
		test: [{
			title: 'hehehe',
			desc: 'haha'
		}]
	}
	let {title: esTitle,test: [{title: cnTitle}]} = metaData;
	console.log(esTitle,cnTitle)  // abc hehehe
}

//  ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。   以前，为变量赋值，只能直接指定值。
//  本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

// 解构赋值允许指定默认值。 ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
{
	let [y = 1] = [undefined];
	console.log(y)  // 1
	
	let [s] = [undefined];
	console.log(s)  // undefined
	
	let [z = 1] = ['undefined'];
	console.log(z)  // undefined  (颜色深)
	
	let [x = 1] = [null];
	console.log(x)  // null
}

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
{
	function f() {
	  return 'uuu'
	}
	// let [x = f(),y] = [,2];  //  uuu 2
	let [x = f(),y] = [1,2];  //  1 2
	console.log(x,y)
}

// 解构不仅可以用于数组，还可以用于对象。
// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

// 这实际上说明，对象的解构赋值是下面形式的简写  let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };

//  字符串的解构赋值   字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
{
	const [a, b, c, d, e] = 'hello';
	console.log(e)
}


// 函数参数的解构赋值      函数的参数也可以使用解构赋值。
{
	 function add([x,y]) {
		return x + y;
	}
	console.log(add([2,3]))   //  5
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
	let jsonData = {
	  id: 42,
	  status: "OK",
	  data: [867, 5309]
	};
	let {id, status, data: number} = jsonData;
	console.log(id, status, number);  //  42 "OK" (2) [867, 5309]
	
	//  （6）遍历 Map 结构  任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
	/* let arr = ['A', 'BBO', 'CCN']
	for (let [b,,a] of arr) {
		console.log(b,a)
	} */
	/* A undefined
	B O
	C N */
	
	
	const map = new Map();
	let aa = []
	map.set('first', 'hello');
	map.set('second', 'world');

	for (let [,value] of map) {
	  console.log(" is " + value);
	  aa.push(value)
	}
	console.log(aa)  //  (2) ["hello", "world"]
	
}


























