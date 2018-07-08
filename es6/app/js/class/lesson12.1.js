{
	class Point {
		constructor(x,y) {
			this.x = x
			this.y = y
		}
		para() {
			console.log(this.x)
		}
		ha() {
			console.log(this.y)
		}
		// Class的静态方法  类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”
		static jt() {
			return 'Hello'
		}
		get longName() {
			return '安乐' + this.x
		}
		set longName(value) {
			this.x = value
		}
	}
	Object.assign(Point.prototype, {
		he() {
			console.log(this.y)
		}
	})
	let aa = new Point('HH','KK')
	/* aa.he()  // KK
	aa.para() // HH
	console.log(aa.y) */ // KK
	/* console.log(aa.longName)  // 安乐HH
	aa.longName = '解决'
	console.log(aa.longName) */  // 安乐解决
	
	// 构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。
	// console.log(aa.para === Point.prototype.para)  // true
	// prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。
	// console.log(Point.prototype.constructor === Point)  // true
	
	// console.log(Object.keys(Point.prototype))  // ["he"]
	// console.log(Object.getOwnPropertyNames(Point.prototype))  // (4) ["constructor", "para", "ha", "he"]
	
	// console.log(Point.jt())
	// 如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。
	// console.log(aa.jt())  // Uncaught TypeError: aa.jt is not a function
}


{

	/* class Tea {
		constructor (x,y) {
			this.x = x
			this.y = y
		}
		// 还可以看出，静态方法可以与非静态方法重名。
		ha() {
			console.log(this.x)
		}
		static ha() {
			console.log('this.y')  // this.y
			console.log(this.y)  // undefined
		}
		static he() {
			this.ha()
		}
	}
	// 为Tea类定义了一个静态属性yy。
	// 目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。
	Tea.yy = 'uu'
	let tea = new Tea('MM','NN')
	tea.ha()
	Tea.he() */

	// 父类的静态方法，可以被子类继承。
	// 静态方法也是可以从super对象上调用的。

}


{

	class Point {
		constructor(age,name) {
			this.age = age
			this.name = name
		}
		method() {
			console.log('method')
		}
		static jing() {
			console.log('jing')
		}
	}
// 子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。
// super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
// 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
// 由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
	class aPoint extends Point {
		constructor(age,name,color) {
			super(age,name)
			this.color = color
		}
		haha() {
			super.method()
		}
	}
	let b = new aPoint(12,'anle','red')
	console.log(b.age)  // 12
	b.haha()  // method
	aPoint.jing()  // jing

}