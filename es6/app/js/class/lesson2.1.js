// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。  Set 本身是一个构造函数，用来生成 Set 数据结构。
/* const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(item => s.add(item))
for (let i of s) {
	console.log(i)
}
console.log(s) */    // Set(4) {2, 3, 5, 4}
// 上面代码通过add方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

// Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
/* let numbers = [2, 3, 5, 4, 5, 2, 2];
const set = new Set(numbers);
console.log(set)  // Set(4) {2, 3, 5, 4}
console.log([...set]) // (4) [2, 3, 5, 4]
console.log(set.size) */  // 4

const setp = document.querySelectorAll('p')
const set = new Set(setp)
let aa = Array.from(set)
aa[2].addEventListener('click', function(e) {
	console.log(e.currentTarget)
}, false)

// 上面代码也展示了一种去除数组重复成员的方法。
// 去除数组的重复成员    [...new Set(array)]

// console.log(Set.prototype.constructor)

// 提供了去除数组重复成员的另一种方法
/* let numbers = [2, 3, 5, 2, 4, 5, 2, 2, 5];
function dedupe(array) {
	return Array.from(new Set(array))
}
console.log(dedupe(numbers)) */

