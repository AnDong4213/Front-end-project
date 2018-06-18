import * as _ from 'lodash'
import $$ from 'jquery'

import(/* webpackChunkName: 'createPoint'*/ './mb').then(function(createPoint) {
	console.log(createPoint);
})

import(/* webpackChunkName: 'isType'*/ './ma').then(function(isType) {
	console.log(isType);
})

let arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(_.chunk(arr, 4))
console.log($$('#main').text());
