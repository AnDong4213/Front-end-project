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
	let a,b;
	// ({a,b} = {a:1,b:2})
	({a,b} = {a:{ha:'hehe',hi: 'oo'},b:2})
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





