let element = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerHTML = '我是乐乐...'
h1.setAttribute('id', 'main')
element.appendChild(h1);
document.body.appendChild(element);

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

import(/* webpackMode: 'lazy', webpackChunkName: 'createPoint' */ './mb').then(function(para) {
	let b = para.createPoint(obj)
	console.log(b);
})

import(/* webpackMode: 'lazy', webpackChunkName: 'isType' */ './ma').then(function(para) {
	console.log(para.isType('Object')(obj));
})

let arr = ['a', 'b', 'c', 'd']
console.log(_.chunk(arr, 2))
console.log($$('#main').html());
