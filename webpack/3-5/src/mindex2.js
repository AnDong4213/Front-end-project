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
	image: 'KK'
}
let arr = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(_.chunk(arr, 4))
console.log(isType('Array')(obj));
let b = createPoint(obj)
console.log(b);
console.log($$('#main').text());
