// import 'babel-polyfill'   // 引入的话就出错，不引入也能转换 function* func() {}  好像全局引入了...

let func = () => {}
const NUM = 5
let arr = [1,2,4]
let arrB = arr.map(item => item*2)

arr.includes(8)

console.log('new Set(arrB)', new Set(arrB))

function* func() {}