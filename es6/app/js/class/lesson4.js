{
	console.log('a', '\u0061', '0xFFFF') //  a a 0xFFFF
	
	console.log('\u20BB7')  // ₻7
	console.log(`\u{20BB7}`)  // 𠮷
}

{
	let s = `\u{20BB7}`, k = '哈哈k';
	console.log(s.length)  // 2
	console.log(k.length)  //  3
	
	console.log(s.charAt(0))	
	console.log(s.charAt(1))	
	console.log(s.charCodeAt(0))	 // 55362
	console.log(s.charCodeAt(1));     // 57271

	let s1 = `\u{20BB7}a`
	console.log(s1.length)  // 3
	console.log(s1.codePointAt(0))  // 134071
	console.log(s1.codePointAt(0).toString(16))   //  20bb7   // 取0的时候是完整的。。。
	
	console.log(s1.codePointAt(1))  // 57271
	console.log(s1.codePointAt(1).toString(16))   //  dfb7  // 取1的时候是不完整的。。。
	
	console.log(s1.codePointAt(2))  // 97
	console.log(s1.codePointAt(2).toString(16))   //  61
	
}

{
	console.log(String.fromCharCode('0x20bb7'))	  // 乱码了..
	console.log(String.fromCodePoint('0x20bb7'))  //  𠮷
}

{
	let str = '\u{20BB7}abc';
	for (let i=0;i<str.length;i++) {
		console.log(str[i])
	}
	for (let code of str) {
		console.log('es6', code)
	}
}

{
	let str = 'string'
	console.log(str.includes('in'))  // true
	console.log(str.startsWith('st'))	
	console.log(str.endsWith('ng'))
	
	console.log(str.repeat(2))  // stringstring
	
}

{
	console.log('1'.padStart(3,'a'))  // aa1
	console.log('1'.padEnd(3,'a'))  // 1aa
}

{
	let user = {
		name: 'list',
		info: 'hello'
	}
	console.log(abc`I am ${user.name},,${user.info}`); //  I am ,,,,listhello
	function abc(s,v1,v2) {
		console.log(s,v1,v2)  //  (3) ["I am ", ",,", "", raw: Array(3)] "list" "hello"
		return s+v1+v2
	}
}

{
	console.log(String.raw`Hi\n${1+2}`)	  //  Hi\n3   // 没有对\n进行转义...
	console.log(`Hi\n${1+2}`)  // 换行了...
// 	Hi
// 	3
}










