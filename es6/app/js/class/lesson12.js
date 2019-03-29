{
	class Parent {
		constructor(name='haha') {
			this.name = name
		}
		haha() {
			this.hehe()
			Parent.hehe()
		}
		hehe() {
			// console.log('hehe')
			console.log(this)  // Parent {name: "andong"}
		}
		static hehe() {
			console.log('我是静态方法hehe...')
		}
	}
	let v_child = new Parent('andong')
	// console.log(v_child)
	//console.log(v_child.name)  //  andong
	v_child.hehe();
	v_child.haha();
	console.log('--------------------------------------------------')
}


{
	console.log('kkkkk', new Array(1,2))
	// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。
	// ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
	// 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。

	class Parent {
		constructor(name='haha') {
			this.name = name
		}
		hehe() {
			console.log('pp')
		}
		static func() {
			console.log('父类的静态方法，也会被子类继承,而不是子类的实例继承哦...');
		}
		func() {
			console.log('这不是静态方法...')
		}
		hou() {
			return 'KKKKK--'
		}
	}
	class Child extends Parent {
		constructor(name='KK',type) {
			super(name);
			this.type = type
		}
		yy() {
			console.log('yy')
			// Child.func();  // 在里面调用
		}
		/* static func() {
			console.log('父类的静态承哦...');
		} */
		
		func() {
			console.log('这不是静态方法qqqqqqqqqqqq...')
			console.log(super.hou())
		}
	}
	let child = new Child('mm','nn')
	console.log(child.name)	 // 如果super(name)里有name就是mm。不传name就是haha,如果加上this.name = name又就是mm了
	// console.log(child.type)  // nn
	// child.hehe() // pp
	// child.yy()  // yy
	Child.func(); // 只读静态方法，自己有就读没有就读父的静态方法...  在外边调用
	child.func();  // 子类里有func这个方法的话就用子类里的方法...
	// Object.getPrototypeOf方法可以用来从子类上获取父类。  可以使用这个方法判断，一个类是否继承了另一个类。
	console.log(Object.getPrototypeOf(Child) === Parent);
	console.log('--------------------------------------------------')
}

{
	// 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
// 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
	class A {
	  p() {
	    return 2;
	  }
		hehe() {
			console.log('我是呵呵...');
		}
	}
	class B extends A {
		constructor() {
			super();
			console.log(super.p());
		}
		hehe() {
			console.log('我是呵呵22...');
		}
		haha() {
			console.log(super.p());
			this.hehe()  // 如果B中没有hehe()这个函数，this.hehe()与super.hehe()显示的一样  我是呵呵...
			super.hehe()  // 如果B中有hehe()这个函数，this.hehe()显示 我是呵呵22...  super.hehe()显示  我是呵呵...
		}
	}
	let b = new B();
	b.haha();
	console.log('--------------------------------------------------')
}

{
	// ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
	// 由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。

	class A {
	  constructor() {
	    this.x = 1;
	  }
	}
	// A.prototype.x = 99;
	class B extends A {
	  constructor() {
	    super();
	    this.x = 2;
	    super.x = 3;
	    console.log(super.x); // undefined
	    console.log(this.x); // 2
	  }
	}
	new B()
	// 上面代码中，super.x赋值为3，这时等同于对this.x赋值为3(实际等于2,阮老师写的好像有错...)。而当读取super.x的时候，读的是A.prototype.x，所以返回undefined。
	console.log('--------------------------------------------------')

	// 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。
	class Parent {
	  static myMethod(msg) {
	    console.log('static', msg);
	  }
	  myMethod(msg) {
	    console.log('instance', msg);
		console.log('hehehe');
	  }
	}

	class Child extends Parent {
	  static myMethod(msg) {
	    super.myMethod(msg);
	  }
	  myMethod(msg) {
	    super.myMethod(msg);
		console.log('iiii')
	  }
	}

	Child.myMethod(1); // static 1

	var child = new Child();
	child.myMethod(2); // instance 2

	console.log('--------------------------------------------------')

}

/* {
	// getter, setter
	class Parent {
		constructor(name='haha') {
			this.name = name
		}
		get longName() {
			return 'mk' + this.name
		};
		set longName(value) {
			this.name = value
		};
	};
	let v = new Parent();
	console.log(v.longName)	 //  mkhaha
	v.longName = 'hello'
	console.log(v.longName)  // mkhello
}


{
	// 静态方法通过类调用，而不是通过例的实例去调用....
	class Parent {
		constructor(name='wg') {
			this.name = name
		}
		static tell() {  //  静态方法...
			console.log('tell')
		}
	}
	Parent.type = 'haha'   // 静态属性的定义方法...
	Parent.tell()  // tell
	console.log(Parent.type)
} */
