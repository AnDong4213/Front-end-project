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

class Hello {
	test() {
		console.log('class')
	}
}

export default {
	A, test, Hello	
}

