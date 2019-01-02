/* function* helloWorldGenerator() {
	yield 'Hello';
	let haha = yield 13+87
	yield 'World';
	return 'ending'
}
var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next())
console.log(hw.next()) */


function* f() {
  console.log('执行了！')
}
var generator = f();
generator.next()
/* setTimeout(function () {
  generator.next()
}, 2000); */












