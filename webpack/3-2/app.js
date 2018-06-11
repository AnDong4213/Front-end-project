import sum from './sum'
let minus = require('./minus.js')

require(['./muti'], function(muti){
	console.log('muti =', muti(3,6))
})
 
console.log('sum =', sum(28,24))
console.log('minus =', minus(28,24))

