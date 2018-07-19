class Hello {
    constructor (x,y) {
        this.x = x
        this.y = y
        console.log('Hello World')
    }
}

let aa = new Hello('GG', 'OO')
console.log(aa.x);

/* import { add } from './modules/moduleA.js'
console.log(add(1, 2)) */

// import(/* webpackChunkName: 'moduleA' */'./modules/moduleA.js')

import(/* webpackChunkName: 'moduleB' */'./modules/moduleB.js')
import(/* webpackChunkName: 'moduleC' */'./modules/moduleC.js')
import(/* webpackChunkName: 'moduleD' */'./modules/moduleD.js')
