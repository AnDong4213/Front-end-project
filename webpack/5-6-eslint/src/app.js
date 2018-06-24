import './css/base.less'

import { a, addClass } from './common/util';
import { componentA } from './components/a'
console.log(a());

let aa = document.getElementById('hello');
let pp = Array.from(aa.getElementsByTagName('p'));
let pdiv = Array.from(aa.getElementsByTagName('div'));
addClass(pdiv[0], 'box');

let list = componentA();
aa.appendChild(list);


import { chunk } from 'lodash-es'
console.log(chunk([1,2,3,4,5,6,7], 2));

$('em').addClass('new');

// renderA();

// $.get('/api/comments/show', {
$.get('/comments/show', {
	id: '4193586758833502',
    page: 1
}, function (data) {
	console.log(data)
});

$.get('./msg/index', {
	format: 'cards'
}, function(data) {
	console.log(data)
})

$.get('/container/getIndex', {
	containerid: '102803',
    openApp: '0'
}, function (data) {
	console.log(data)
});

if (module.hot) {
	module.hot.accept('./components/a', function(){
		aa.removeChild(list);
		let ComponentA = require('./components/a').componentA;
		let newList = ComponentA();
		aa.appendChild(newList);
		list = newList;
	})
}
