import base from './css/base.css'
import baseLess from './css/base.less'
import common from './css/common.css'

let app = document.getElementById('app');
let pp = Array.from(app.getElementsByTagName('p'))
pp[0].className = base.box;
pp[1].className = baseLess.less;

import(/* webpackChunkName: 'a' */ './components/a').then(function(para) {
  // console.log(para);
  pp[2].className = para.a;
})


/*import base from './css/base.css'
import common from './css/common.css'
base.use()
base.unuse()*/
/*let flag = false
setInterval(function() {
  if (flag) {
    base.unuse()
  } else {
    base.use()
  }
  flag = !flag
},1000)*/
