/* export const A = 17;

export function test() {
	console.log('test')
}

export class Hello {
	test() {
		console.log('class')
	}
} */

const A = 17;

function test() {
	console.log('test')
}

function haha() {
	console.log('haha')
}

class Hello {
	test() {
		console.log('class')
	}
}

export {foo, bar} from './lesson17.1.js'

export {//没有default的话，这样引进 import {A,test,Hello} from './class/lesson17.js'或者import * as lesson from './class/lesson17.js' 才能用...
	A, test, Hello, haha as hehe
}

/* export default {  // 有default的话，这样引进 import lesson1 from './class/lesson17.js' 才能用...
	A, test, Hello	
} */

