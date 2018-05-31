/* ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。
ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。 */
{
	let a1 = Symbol()
	let a2 = Symbol()
	console.log(a1 === a2)  // false
	let a3 = Symbol.for('a3')	
	let a4 = Symbol.for('a3')
	console.log(a3 === a4)  // true
	let a5 = Symbol('foo')
	console.log(a5)  // Symbol(foo)
}
// Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。
// Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
// 另一个新的 API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
{
	const obj = {}
	let a = Symbol('a'), b = Symbol('b'), c = 'c'
	obj[a] = 'hello'	
	obj[b] = 'world'	
	obj[c] = 'HH'

	console.log(obj)  // {c: "HH", Symbol(a): "hello", Symbol(b): "world"}
	Reflect.ownKeys(obj).forEach((item) => {
		console.log(item,obj[item])
	})
}

{
	let a1 = Symbol.for('abc')
	let obj = {
		[a1]: 123,
		'abc': 345,
		'c': 789
	}
	console.log(obj)  // {abc: 345, c: 789, Symbol(abc): 123}
	for(let [key,value] of Object.entries(obj)) {
		console.log(key,value)
	}
	console.log(Object.getOwnPropertyNames(obj)) // (2) ["abc", "c"]
	Object.getOwnPropertySymbols(obj).forEach((item) => {
		console.log(obj[item])  //  123
	})
}

{
	const obj = {}
	let foo = Symbol('foo')	
	let bar = Symbol('bar')

	Object.defineProperty(obj,foo,{
		value: 'foobar1'
	})
	Object.defineProperty(obj,bar,{
		value: 'foobar2'
	})
	for (let i in obj) {
		console.log(i); // 无输出
	}
	console.log(Object.getOwnPropertyNames(obj))
	console.log(Object.getOwnPropertySymbols(obj))  //  [Symbol(foo), Symbol(bar)]
}











