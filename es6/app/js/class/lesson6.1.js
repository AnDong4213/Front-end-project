{
	//let arr3 = ['d', 'e'], obj = {a: 1, b: 2};
	// 验证是否是数组（前提是toString()方法没有被重写过）
	function isArray(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]'
	}
	/* console.log(isArray(arr3)) */  // true
	
	let isType = function(type) {
		return function(obj) {
			return Object.prototype.toString.call(obj) === '[object '+type+']'
		}
	}
	/* console.log(isType('Object')(obj)) */     // true
	
	/* let ar = Array.apply(null,{0:'a', 1:'b', 2:'c', 3:'d', 4:'e',length: 5});
	console.log(ar) */  //  ["a", "b", "c", "d", "e"]
	/* let ar = Array.apply(null,{length: 5});
	ar[0] = 22;
	console.log(isType('Object')(ar))  // false
	console.log(isType('Array')(ar))  // true
	console.log(ar) */        // (5) [22, undefined, undefined, undefined, undefined]
	
	/* let ccc = Array.apply(null,{length:81});
	ccc.map(function(_,index) {
		console.log(index%9 + 1);
	}) */
	
}

{
	let p = document.querySelectorAll('p');
	// let pArr = Array.prototype.slice.call(p)
	let pArr = Array.from(p)
	
	// console.log(pArr)
	/* pArr.push('呵呵') */
	
	pArr.forEach((item) => {	
		/* console.log(item.textContent)
		console.log(item)	 */
	})
}


// 数组的扩展  扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
{
	// console.log(...[1,2,3,4]);   // 1 2 3 4
	// console.log([...document.querySelectorAll('p')]);  //   [p, p, p]
	
	function add(x,y) {
		return x+y
	}
	let number = [9,7]
	// console.log(add(...number))  //  16  它们的都使用了扩展运算符。该运算符将一个数组，变为参数序列。
	
	// 替代函数的 apply 方法  由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。
	function f(x,y,z) {
		return x + y + z
	}
	let args = [10, 1, 2];
	// console.log(f.apply(null,args))  //  13
	// console.log(f(...args))  //  13
	
	// 扩展运算符取代apply方法的一个实际的例子，应用Math.max方法，简化求出一个数组最大元素的写法。
	/* console.log(Math.max.apply(null, [34,56,78])) // 78
	console.log(Math.max(...[34,56,78]))  // 78
	console.log(Math.max(34,56,78))  */  // 78
	
	// 通过push函数，将一个数组添加到另一个数组的尾部。
	let arr1 = [0, 1, 2], arr2 = [3, 4, 5];
	let hahah = Array.prototype.push.apply(arr1,arr2);
	/* console.log(hahah)  // 6
	console.log(arr1)   */   // (6) [0, 1, 2, 3, 4, 5]
	/* let arr = arr1.concat(arr2)
	console.log(arr)  //  (6) [0, 1, 2, 3, 4, 5]  concat并不改变arr1,arr2，  */
	// arr1.push(...arr2)
	// console.log(arr1) //  [0, 1, 2, 3, 4, 5]
	
	/* let da = new (Date.bind.apply(Date, [null, 2015, 1, 1]));
	console.log(da)
	console.log(new Date(...[2018, 5, 12]).toLocaleDateString()) */  // 2018/6/12
	
	// 扩展运算符的应用
	// （1）复制数组  数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。
	/* let a1 = [1, 2], a2 = a1;
	a2[0] = 99;  // 修改a2，会直接导致a1的变化。
    console.log(a1) // [99, 2] */
	
	/* let a1 = [1, 2], a2 = a1.concat();
	a2[0] = 99;
	console.log(a1)  */// (2) [1, 2]
	
	// 扩展运算符提供了复制数组的简便写法。
    let a1 = [1, 2];
    // 写法一
    // let a2 = [...a1]; console.log(a2)   // (2) [1, 2]
    // 写法二
    // const [...a2] = a1;
	
}

{
	// （2）合并数组
	
	// let arr1 = ['a', 'b'], arr2 = ['c'], arr3 = ['d', 'e'];
    // ES5 的合并数组
    // console.log(arr1.concat(arr2, arr3))  // (5) ["a", "b", "c", "d", "e"]
	// console.log([...arr1,...arr2,...arr3])  //  ["a", "b", "c", "d", "e"]
	// 它们的成员都是对原数组成员的引用，这就是浅拷贝。如果修改了原数组的成员，会同步反映到新数组。
	
	// (3）与解构赋值结合
	let list = ["a", "b", "c", "d", "e"];
	/* let [a, ...rest] = list
	console.log(rest)  // ["b", "c", "d", "e"] */
	// let [...rest, a] = list  // 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
	
	// (4)字符串   // 扩展运算符还可以将字符串转为真正的数组。
	//  [...'hello']  [ "h", "e", "l", "l", "o" ]

}

{
	// 任何 Iterator 接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。 只要是部署了 Iterator 接口的数据结构，Array.from都能将其转为数组。
	
	// Array.from()
	// Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
	// console.log(Array.from('hello'))  //  (5) ["h", "e", "l", "l", "o"]
	
	// 扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。Array.from方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，
	/* let hahaarr = Array.from({0:'a', 1:'b', 2:'c', 3:'d', 4:'e', 6:'kk', length:8})
	console.log(hahaarr)  */  //  ["a", "b", "c", "d", "e", undefined, "kk", undefined]
	
	/* let ar1 = Array.apply(null, {length: 3}), ar2 = Array.from({length:3});
	console.log(ar1,ar2) */
	
	/* let ar2 = Array.from({length:3}, () => 'jack')
	console.log(ar2) */  // ["jack", "jack", "jack"]
	
	/* Array.from({length:81}, (_,index) => {
		console.log(index % 9 + 1);
	}) */
	
	// Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 Unicode 字符，可以避免 JavaScript 将大于\uFFFF的 Unicode 字符，算作两个字符的 bug。
	/* function countSymbols(string) {
	  return Array.from(string).length;
	}
	console.log(countSymbols('hello')) */  // 5
	
	
	// 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
	let letter = ['a', 'b', 'c'];
	let entries = letter.entries();
	console.log(entries.next().value); // [0, 'a']
	console.log(entries.next().value)
	console.log(entries.next().value)  // [2, "c"]
	console.log(entries.next().value)  // undefined

	console.log(new Array(4).fill(9))
	
}

















