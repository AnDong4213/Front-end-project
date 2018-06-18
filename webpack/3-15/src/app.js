import baseLess from './css/base.less'

import { a, addClass } from './common/util';
console.log(a());

let aa = document.getElementById('hello');
let pp = Array.from(aa.getElementsByTagName('p'));
let pdiv = Array.from(aa.getElementsByTagName('div'));
addClass(pdiv[0], 'box');

import { chunk } from 'lodash-es'
console.log(chunk([1,2,3,4,5,6,7], 2));
