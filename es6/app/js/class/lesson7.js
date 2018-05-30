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











