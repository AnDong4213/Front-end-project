{
	function test(a,b='haha',c) {
		console.log(a,b,c)
	}
	test('hehe')  //  hehe haha undefined
}

{
	let x = 'haha'
	function test2(x,y=x) {
		console.log(x,y)
	}
	test2()   // undefined undefined
	test2('uu')  // uu uu
}

{
	let x = 'haha'
	function test2(c,y=x) {
		console.log(c,y)
	}
	test2()   //  undefined "haha"
	test2('uu')   //  uu haha
}

{
	function test(...args) {
		for (let value of args) {
			console.log(value)
		}
	}
	test('a','b','c')
}

{
	function test() {
		console.log(arguments)
		let arr = Array.from(arguments)
		console.log(arr)
	}
	test('a','b')
}

{
	console.log('y',...[1,2,4])  //  y 1 2 4
}

{
	let arrow = v => v*2
	console.log(arrow(7))
}

{
	function tail(x) {
		console.log('tail', x)
	}
	function fx(x) {
		return tail(x)
	}
	fx(897)
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
	
	function foo() {
	  return () => {
		return () => {
		  return () => {
			console.log('idhh:', this.id);
		  };
		};
	  };
	}
	var f = foo.call({id: 1});
	f()().call({id: 4})
	
	
}

















