const isType = function(type) {
	return function(obj) {
		return Object.prototype.toString.call(obj) === '[object '+type+']'
	}
}
	
{
	// 1. 属性的简洁表示法 § ⇧
	// ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
	/* let foo = 'haha', baz = {foo};
	console.log(baz)  //  {foo: "haha"}
	console.log(isType('Object')(baz)) */  // true
	
	/* function f(x,y) {
		return {x,y}
	}
	console.log(f(4,7)) */  // {x: 4, y: 7}
	
	/* let birth = '2000/01/01';
	let person = {
		name: '哈哈',
		birth,
		hello() {
			console.log(this.name)
		},
		class() {
			console.log('我是class')
		}
	}
	person.class() //  我是class
	console.log(person.birth)  */  // 2000/01/01
	
	// 属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法
	/* let cart = {
		_wheels: 14,
		get wheels() {
			return this._wheels
		},
		set wheels (value) {
			if (value < this._wheels) {
				throw new Error('数值太小了！');
			}
			this._wheels = value
		}
	}
	// console.log(cart.wheels)  //  14
	cart._wheels = 12
	console.log(cart.wheels) */  // 12
	
	/* console.log(-0 === +0)  // true
	console.log(Object.is(-0,+0))  // false
	console.log(Object.is(NaN,NaN)) */  // true
	
	// console.log(Object.assign(null))  // Cannot convert undefined or null to object
	
	let arra = ['1','2','3','4','5','6','7']
	class Point {
		constructor(id, mid, singer, name, album, duration, image) {
			Object.assign(this,{id, mid, singer, name, album, duration, image});
			this.url = 'www.baidu.com';
		}
	}
	function createPoint(...a) {
		return new Point(...a)
	}
	let aaa = createPoint(...arra)
	console.log(aaa) 
	
	/* let urlMap = {}
	class Point {
		constructor({id, mid, singer, name, album, duration, image}) {
			Object.assign(this,{id, mid, singer, name, album, duration, image});
			this.url = 'www.baidu.com';
			if (urlMap[this.id]) {
				this.ageurl = urlMap[this.id]
			} else {
				this.genUrl()
			}
		}
		genUrl() {
			this.ageurl = `http://dl.stream.qqmusic.qq.com`
		}
	}
	function createSong(d) {
		return new Point({
			id: d.songid,
			mid: d.songmid,
			singer: d.singer,
			name: d.songname,
			album: d.albumname,
			duration: d.interval,
			image: d.image
		})
	}
	let haha = {
		songid: 'QQ',
		songmid: 'PP',
		singer: 'RR',
		songname: 'AA',
		albumname: 'TT',
		interval: 'DD',
		image: 'BB',
		a: 89,
		d: 90,
		c: 86
	}
	let b = createSong(haha)
	console.log(b) */
	
	
	
	/* class Point1 {
	  constructor(x, y) {
		  Object.assign(this, {x, y});
	  }
	}
	let aa = new Point1(2,6)
	console.log(aa)  */
	
	/* let haha = {
		songid: 'QQ',
		songmid: 'PP',
		singer: 'RR',
		songname: 'AA',
		albumname: 'TT',
		interval: 'DD',
		image: 'BB'
	}
	let num = {
		a: 89,
		d: 90,
		c: 86
	}
	const merge = (aa, sources) => Object.assign({}, aa,sources);
	console.log(merge(num, haha)) */
	
	// console.log(Object.assign(2))
	
	/* const v1 = 'abc', v2 = true, v3 = 10;
	const obj = Object.assign({}, v1, v2, v3);
	console.log(obj); */  //  {0: "a", 1: "b", 2: "c"}
	
}

{
/* 	const obj = { foo: 'bar', baz: 42 };
  console.log(Object.entries(obj));
	(2) [Array(2), Array(2)]
0
:
(2) ["foo", "bar"]
1
:
(2) ["baz", 42] */
	
	
	// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };   //  报错，必须引入babel...
	/* let [x, y, ...z]  = [ 1,  2,  3, 4];
	console.log(z) */
	
	// 扩展运算符可以用于合并两个对象。
	/* let ab = { ...a, ...b };
	// 等同于
	let ab = Object.assign({}, a, b); */
	
	// 如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。
	/* let aWithOverrides = { ...a, x: 1, y: 2 };
	// 等同于
	let aWithOverrides = { ...a, ...{ x: 1, y: 2 } };
	// 等同于
	let x = 1, y = 2, aWithOverrides = { ...a, x, y };
	// 等同于
	let aWithOverrides = Object.assign({}, a, { x: 1, y: 2 }); */
	
	// 如果把自定义属性放在扩展运算符前面，就变成了设置新对象的默认属性值。
	let a = {x: 66, u: 89, o: 54};
	// let aWithDefaults = { x: 1, y: 2, ...a };  //  报错，必须引入babel...
	let aWithDefaults = Object.assign({}, {x: 1, y: 2}, a);
	console.log(aWithDefaults) //  {x: 66, y: 2, u: 89, o: 54}
	
}








