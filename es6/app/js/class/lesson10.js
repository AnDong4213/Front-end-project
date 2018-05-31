// S6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。  Set 本身是一个构造函数，用来生成 Set 数据结构。
// 代码通过add方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。
{
	const s = new Set();  // 得有个分号，没有报错...
	[2, 3, 5, 4, 5, 2, 2].forEach((item) => s.add(item))
	console.log(s)  //  Set(4) {2, 3, 5, 4}
	console.log(s.size)  // 4
	for (let i of s) {
		console.log(i)
	}
}

{
	const s = new Set([1, 2, 3, 4, 4,'4'])
	console.log(s)	 // Set(5) {1, 2, 3, 4, "4"}
	console.log(...s)
	const set = new Set(document.querySelectorAll('p'))
	console.log(set)  // Set(3) {p, p, p}
	console.log([...set][0].textContent)	// ES6
}

















