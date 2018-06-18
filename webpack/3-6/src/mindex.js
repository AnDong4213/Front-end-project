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

import(/* webpackChunkName: 'createPoint'*/ './mb').then(function(para) {
	let b = para.createPoint(obj)
	console.log(b);
})

import(/* webpackChunkName: 'isType'*/ './ma').then(function(para) {
	console.log(para.isType('Object')(obj));
})

let arr = ['a', 'b', 'c', 'd']
console.log(_.chunk(arr, 2))
console.log($$('#main').html());
