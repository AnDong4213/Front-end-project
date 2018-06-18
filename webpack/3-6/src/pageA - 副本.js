/* import './subPageA'
import './subPageB' */
require.include('./moduleA')  // './subPageA'和'./subPageB'中共同加载的模块，在父模块中require进来...
let page = 'subPageA'

/* if (page === 'subPageA') {
  require.ensure(['./subPageA'], function() {
    let subPageA = require('./subPageA')
  }, 'subPageA')
} else if (page === 'subPageB') {
  require.ensure(['./subPageB'], function() {
    let subPageA = require('./subPageB')
  }, 'subPageB')
}
// import * as _ from 'lodash'
// require.ensure(['lodash'], function(){
require.ensure([], function(){
  let _ = require('lodash')
  _.join(['a','b'], 'c')
},'vendor') */


if (page === 'subPageA') {
  import(/* webpackChunkName: 'subPageA'*/ './subPageA').then(function(subPageA) {
    console.log(subPageA);
  })
} else if (page === 'subPageB') {
  import(/* webpackChunkName: 'subPageA'*/ './subPageB').then(function(subPageB) {
    console.log(subPageB);
  })
}
// import * as _ from 'lodash'
// require.ensure(['lodash'], function(){
require.ensure([], function(){  // 一般同步加载 import * as _ from 'lodash'
  let _ = require('lodash')
  _.join(['a','b'], 'c')
},'vendor')



export default 'pageA'
