{
	let arr = Array.of(3,4,5,6,'a'), arrEmpty = Array.of()
	console.log(arr)   // (5) [3, 4, 5, 6, "a"]
	console.log(arrEmpty)  // []

}

{
	let p = document.querySelectorAll('p');
	//let pArr = Array.prototype.slice.call(p)
	let pArr = Array.from(p)
	
	pArr.push('呵呵')
	pArr.forEach((item) => {
		console.log(item)		
		console.log(item.textContent)
	})
	
	console.log(Array.from([1,2,3], function(item) {return item*6}))   // (3) [6, 12, 18]  类似map
}

{
	console.log([1,'a',undefined].fill(7))  //   [7, 7, 7]
	console.log([1,'a','b','d','e'].fill(7,2,4))  // [1, "a", 7, 7, "e"]   // 2表示从第二个开始，4表示从头开始总共取4个
}

{
	for (let index of ['he', 'c', 'ha'].keys()) {
		console.log(index)
	}
	
	for (let value of ['he', 'c', 'ha'].values()) {
		console.log(value)
	}
	
	for (let [index,value] of ['he', 'c', 'ha'].entries()) {
		console.log(index,value)
	}
	
}

{
	console.log([1,2,3,4,5,6,7,8].copyWithin(2,3,5))  // [1, 2, 4, 5, 5, 6, 7, 8]
	console.log([1,2,3,4,5,6,7,8].find((item) => {return item>4}))  // 5
	console.log([1,2,3,4,5,6,7,8].findIndex((item) => {return item>4}))  // 4
}

{
	console.log([1,2,NaN].includes(1))  // true
	console.log([1,2,NaN].includes(NaN))  // true
}























