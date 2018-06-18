import { createPoint } from './mb.js'
import { isType } from './ma.js'
import * as _ from 'lodash'
import $$ from 'jquery'

let obj = {
	songid: 'QQ',
	songmid: 'PP',
	singer: 'RR',
	songname: 'AA',
	albumname: 'TT',
	interval: 'DD',
	image: 'BB',
	a: 89,
	d: 90,
	c: 86
}
let arr = ['a', 'b', 'c', 'd']

console.log(_.chunk(arr, 2))
console.log(isType('Object')(obj));
let b = createPoint(obj)
console.log(b);
console.log($$('#main').html());
