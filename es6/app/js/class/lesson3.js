{
	let regex = new RegExp('xyz','i');
	let regex2 = new RegExp(/xyz/i)
	console.log(regex.test('xyz123'), regex2.test('xyz123'))  // true true
	
	let regex3 = new RegExp(/xyz/gi, 'i')
	console.log(regex3)  //    /xyz/i
	console.log(regex3.flags)  //   i
	
}

{
	let s = 'bbb_bb_b', a1 = /b+/g, a2 = /b+/y ;
	console.log('one', a1.exec(s), a2.exec(s))  //  one ["bbb", index: 0, input: "bbb_bb_b", groups: undefined] ["bbb", index: 0, input: "bbb_bb_b", groups: undefined]
	console.log('two', a1.exec(s), a2.exec(s))  //  two ["bb", index: 4, input: "bbb_bb_b", groups: undefined] null
	
	console.log(a1.sticky,a2.sticky)  //  false true   // 是否开启sticky
}

{
	// console.log(`\u{20BB7}`)  // 𠮷
	console.log('aaaa是',`\u{0061}`, '\u0061')  //  aaaa是 a a
	
	console.log(/\u{61}/.test('a'))	 // false
	console.log(/\u{61}/u.test('a'))  // true    a的16进制是61
	
	let s = `\u{20BB7}`;
	console.log('u', /^.$/.test(s))	   //  u false
	console.log('u-1 ', /^.$/u.test(s))  //  u-1  true  	 如果匹配的不是单字节的话，加上u

	console.log('test', /𠮷{2}/.test('𠮷𠮷'))    //  test false
	console.log('test2', /𠮷{2}/u.test('𠮷𠮷'))   //  test2 true

	
}













