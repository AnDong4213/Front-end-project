{
	class Parent {
		constructor(name='haha') {
			this.name = name
		}
	}
	let v_child = new Parent('andong')
	console.log(v_child)
	console.log(v_child.name)  //  andong

}


{
	class Parent {
		constructor(name='haha') {
			this.name = name
		}
		hehe() {
			console.log('pp')
		}
	}
	class Child extends Parent {
		constructor(name='KK',type) {
			super(name);
			this.type = type
		}
		yy() {
			console.log('yy')
		}
	}
	let child = new Child('mm','nn')
	console.log(child.name)	
	console.log(child.type)
	child.hehe()
	child.yy()
}

{
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
}

{
	
}








