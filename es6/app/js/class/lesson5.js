{
	console.log(0b1010)  // 0B 0b开头表示二进制
	console.log(0O101)   // 0O 0o开头表示8进制
}

{   
// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。 注意，如果参数类型不是数值，Number.isFinite一律返回false。
	/* console.log(Number.isFinite(15))	// true
	console.log(Number.isFinite(NaN))   // false
	console.log(Number.isFinite(1/0))  // false
	let π = Math.PI;
	console.log(Number.isFinite(π))  // true
	 
	console.log(Number.isNaN(NaN))   // true
	console.log(Number.isNaN(0)) */  // false
}

//  parseFloat() 函数可解析一个字符串，并返回一个浮点数。  parseInt() 函数可解析一个字符串，并返回一个整数
{
	// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。  这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
	console.log(Number.parseInt('12.88'))  //  12
	console.log(Number.EPSILON) 
	console.log(Math.pow(2, 5))  // 2的5次方...
}

//  Number.isInteger()用来判断一个数值是否为整数。 
{
	console.log(Number.isInteger(24))	 // true
	console.log(Number.isInteger(24.0))   // true
	console.log(Number.isInteger(24.1))  // false
	console.log(Number.isInteger('24'))  // false
}

{
	//  JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
	//  Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
	console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)  // 9007199254740991 -9007199254740991
	console.log(Number.isSafeInteger(10))   // true
	console.log(Number.isSafeInteger('10'))  // false
}

{
	// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
	console.log(Math.trunc(4.2))	// 4
	console.log(Math.trunc(4.92))  // 4

}

{
	//  Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
	console.log(Math.sign(5))  // 1
	console.log(Math.sign(0))	// 0
	console.log(Math.sign(-5)) // -1
	console.log(Math.sign('-5'))  // -1
	console.log(Math.sign('5'))  // 1
	console.log(Math.sign('a'))  // NaN
	
	console.log(Math.cbrt(8))  // 2  取立方根...
	
	console.log(Math.PI)
	
}




















