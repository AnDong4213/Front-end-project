let obj = {
  a: 1,
  c: 99
};
Object.defineProperty(obj, "b", {
  value: "bbb",
  enumerable: false
});
Object.defineProperty(obj, "c", {
  enumerable: false
});
console.log(obj);
console.log(Object.keys(obj)); // ["a"]
console.log(obj.hasOwnProperty("b")); // true
console.log("----------------------------------------");

// 装饰器是一个对类进行处理的函数，装饰器的第一个参数就是所要装饰的目标类
/* function testable(target) {
  target.isTestable = true;
}

@testable
class MyTestableClass {
  constructor(name) {
    this.name1 = name;
  }

  getName2() {
    return {
      name1: this.name1,
      name: this.getName3()
    };
  }
  getName3() {
    return this.name;
  }

  static getName1() {
    return {
      name1: this.name1,
      name: this.name
      // name2: this.getName2()  // 静态方法里不能调用实例方法
    };
  }
}

console.log(MyTestableClass.isTestable);
console.log(new MyTestableClass("YT").name1);
console.log(MyTestableClass.getName1()); // {name1: undefined, name: "MyTestableClass"}
console.log(new MyTestableClass("TT").getName2()); // {name1: "TT", name: undefined}
 */

// 如果觉得一个参数不够用，可以在装饰器外面再封装一层函数。
function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}
@testable(true)
class MyTestableClass {}
console.log(MyTestableClass.isTestable);

@testable(false)
export class MyClass {
  constructor() {
    this.isTestable = 79879;
  }
}
console.log(MyClass.isTestable);
console.log(new MyClass().isTestable);

// 装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数。
// 添加实例属性，可以通过目标类的 prototype 对象操作。
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list);
  };
}

let Foo = {
  foo(a) {
    return a;
  }
};
@mixins(Foo)
class MyClass2 {
  constructor() {
    /* this.foo = function (a) {
      return a + "__";
    }; */
  }
}

var aa = new MyClass2();
console.log(aa.foo("99"));

console.log("--------------------------------------------------------");
// 方法的装饰，装饰器不仅可以装饰类，还可以装饰类的属性。
function readonly(target, name, descriptor) {
  descriptor.writable = false;
}
class Person {
  constructor() {
    this.first = "";
    this.last = "";
  }
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}
// readonly(Person.prototype, "name", descriptor);

// 修饰器执行顺序，由内向外执行
class Example {
  @logMethod(1)
  @logMethod(2)
  sum(a, b) {
    return a + b;
  }
}

function logMethod(id) {
  console.log("evaluated logMethod" + id);

  return (target, name, desctiptor) => console.log(`excute logMethod+${id}`);
}

let hh = new Example();
console.log(hh.sum(1, 3));
