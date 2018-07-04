// Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
// 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

{

	/* function* helloWorldGenerator() {
		yield 'hello';
		yield  123 + 456;
		yield 'world';
		return 'ending'
	}
	let hw = helloWorldGenerator()
	console.log(hw.next())
	console.log(hw.next())
	console.log(hw.next().value)
	console.log(hw.next()) */

	/* function* f() {
		console.log('执行...')
	}
	let generator = f()
	setTimeout(function() {
		generator.next()
	}, 2000) */

	/* function* demo() {
		console.log('hello' + (yield 123));
		return 'ending';
	}
	console.log(demo().next());  // {value: 123, done: false}
	console.log(demo().next());  // {value: 123, done: false}
	console.log(demo().next());  // {value: 123, done: false}
	console.log(demo().next()); */  // {value: 123, done: false}
	
	// yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。
	/* function foo(a,b) {
		console.log(a,b)
	}
	function* demo() {
		foo(yield 'haha', yield 'hehe'); // OK
		let input = yield; // OK
	}
	console.log(demo().next());  // {value: "haha", done: false}	
	console.log(demo().next()); */  // {value: "haha", done: false}

}

{
	// yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
	/* function* f() {
		for (let i=0; true; i++) {
			let reset = yield i;
			if (reset) {i = -8}
		}
	}
	let g = f()
	console.log(g.next());  // {value: 0, done: false}
	console.log(g.next());  // {value: 1, done: false}
	console.log(g.next(true));  // {value: -7, done: false}
	console.log(g.next()); */  // {value: -6, done: false}

	// Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
	/* function* foo(x) {
		let y = 2 * (yield (x+1));
		let z = yield (y / 3);
		return (x + y + z);
	} */
	/* let a = foo(5)
	console.log(a.next())  // {value: 6, done: false}
	console.log(a.next())  // {value: NaN, done: false}
	console.log(a.next())  // {value: NaN, done: true}
	console.log(a.next()) */          // {value: undefined, done: true}
	// 第二次运行next方法的时候不带参数，导致 y 的值等于2 * undefined（即NaN），除以 3 以后还是NaN，因此返回对象的value属性也等于NaN。第三次运行Next方法的时候不带参数，所以z等于undefined，返回对象的value属性等于5 + NaN + undefined，即NaN。

	/* let b = foo(5)
	console.log(b.next())  // {value: 6, done: false}
	console.log(b.next(12))  // {value: 8, done: false}
	console.log(b.next(13)) */  // {value: 42, done: true}
	// 由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。

}

{

	/* function* dataConsumer() {
		console.log('Started');
		console.log(`1. ${yield}`);
		console.log(`2. ${yield}`);
		return 'result';
	}
	let aa = dataConsumer()
	console.log(aa.next())
	console.log(aa.next('a'))
	console.log(aa.next('b')) */

}

{
	// for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
	/* function* foo() {
		yield 1;
		yield 2;
		yield 3;
		yield 4;
		yield 5;
		return 6;
	}
	for (let v of foo()) {
		console.log(v)  // 1,2,3,4,5
	} */
	// 使用for...of循环，依次显示 5 个yield表达式的值。这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中。

	/* function* fibonacci() {
		let [prev, curr] = [0, 1];
		for (;;) {
		  // console.log(prev/curr);
		  yield curr;
		  [prev, curr] = [curr, prev + curr];
		}
	  }
	  for (let n of fibonacci()) {
		if (n > 10000) break;
		console.log(n);
	} */

	/* let m = 1;
	for (;;) {
		m++;
		if (m>34) break;
		console.log(m)
	} */

	// 除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数。  扩展运算符...
}

{

	// ES2017 标准引入了 async 函数，使得异步操作变得更加方便。  async 函数是什么？一句话，它就是 Generator 函数的语法糖。
	/* const fs = require('fs')
	const readFile = function (fileName) {
		return new Promise(function (resolve,reject) {
			fs.readFile(fileName, function (error,data) {
				if (error) return reject(erroe);
				resolve(data.toString())
			})
		})
	} */
	/* const gen = function* () {
		yield readFile('./a.txt');
		yield readFile('./test.js')
	}
	let a = gen()
	a.next().value.then((data) => {
		console.log(data)
	})
	a.next().value.then((data) => {
		console.log(data)
	}) */

	// 写成async函数，就是下面这样。
	/* const asyncReadFile = async function() {
		return await readFile('./a.txt');
		// return await readFile('./test.js');
	}
	asyncReadFile().then((item) => {
		console.log(item)
	}) */

}

{

	/* function timeout(ms) {
		return new Promise((resolve,reject) => {
			setTimeout(resolve,ms)
		})
	}
	async function asyncPrint(value, ms) {
		await timeout(ms);
		console.log(value);
	}
	asyncPrint('hello world', 2000) */

	async function f() {
		try {
		  await Promise.reject('出错了');
		} catch(e) {

		}
		return await Promise.resolve('万港...');
	  }
	  
	  f().then(v => console.log(v)) // 万港...

}











 







