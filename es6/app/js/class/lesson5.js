{
	console.log(0b1010)  // 0B 0b开头表示二进制
	console.log(0O101)   // 0O 0o开头表示8进制
}

{   
	/* console.log(Number.isFinite(15))	// true
	console.log(Number.isFinite(NaN))   // false
	console.log(Number.isFinite(1/0))  // false
	let π = Math.PI;
	console.log(Number.isFinite(π))  // true
	 
	console.log(Number.isNaN(NaN))   // true
	console.log(Number.isNaN(0)) */  // false
}


{
	console.log(Number.isInteger(24))	 // true
	console.log(Number.isInteger(24.0))   // true
	console.log(Number.isInteger(24.1))  // false
	console.log(Number.isInteger('24'))  // false
}

{
	console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)  // 9007199254740991 -9007199254740991
	console.log(Number.isSafeInteger(10))   // true
	console.log(Number.isSafeInteger('10'))  // false
}

{
	console.log(Math.trunc(4.2))	// 4
	console.log(Math.trunc(4.92))  // 4

}

{
	console.log(Math.sign(5))  // 1
	console.log(Math.sign(0))	// 0
	console.log(Math.sign(-5)) // -1
	console.log(Math.sign('-5'))  // -1
	console.log(Math.sign('5'))  // 1
	console.log(Math.sign('a'))  // NaN
	
	console.log(Math.cbrt(8))  // 2  取立方根...
	
}




















