{
	// Array.of方法用于将一组值，转换为数组。
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
	
	// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
	console.log(Array.from([1,2,3], function(item) {return item*6}))   // (3) [6, 12, 18]  类似map
}

{
	console.log([1,'a',undefined].fill(7))  //   [7, 7, 7]
	console.log([1,'a','b','d','e'].fill(7,2,4))  // [1, "a", 7, 7, "e"]   // 2表示从第二个开始，4表示从头开始总共取4个
}

{
	// ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
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

// Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位





















