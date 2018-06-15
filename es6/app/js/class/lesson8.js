{
	let o = 1, k = 2;
	let es5 = {
		o: o,
		k: k
	}
	let es6 = {o, k}
	console.log(es5,es6)	
	console.log(es5 == es6)  // false

}

{
	// 属性表达式...
	let a = 'b'
	let es5_obj = {
		a: 'hh',
		b: 'kk'
	}
	let es6_obj = {
		[a]: 'tt'
	}
	console.log(es5_obj,es6_obj)  // {a: "hh", b: "kk"}  {b: "tt"}
}

{
	// 新增API
	console.log(Object.is('abc','abc'), 'abc' === 'abc')  // true true  // Object.is()和三个等号意思一样...
	console.log(Object.is([],[]), [] === [])  // false false  数组是引用类型，引用地址不一样...
}

{
	let a = {a: 'a'}, b = {b: 'b'}
	console.log(Object.assign(a,b))  // {a: "a", b: "b"}   // 浅拷贝...
	console.log(a)  // {a: "a", b: "b"}
	console.log(b)  // {b: "b"}  
}

{
	//  Object.assign 拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）
	let a = {a: 'a'}, b = {b: 'b'}
	console.log(Object.assign({},a,b)) 
	console.log(a)  // {a: "a"}
	console.log(b)  //  {b: "b"}  
}

{
	for (let [index,value] of ['he', 'c', 'ha'].entries()) {
		console.log(index,value)
	}
}

{
	let aa = {k: 123, o: 456};
	for (let [key,value] of Object.entries(aa)) {
		console.log(key, value)
	}
}

{
	function getMusicList(topid) {
	  const aa = {url: 'https'}
	  const data = Object.assign({}, aa, {
		topid,
		type: 'top',
		platform: 'h5'
	  })

	  return data
	}
	let haha = {b: 'bb'}, hehe = getMusicList('zhuruixin')
	let obj = Object.assign({},haha,hehe)
	console.log(obj)   // {b: "bb", url: "https", topid: "zhuruixin", type: "top", platform: "h5"}
	console.log(obj.topid)  // zhuruixin
}


