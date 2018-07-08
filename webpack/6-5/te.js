const merge = require('webpack-merge')

let pages = [
    {
        a: 1,
        b:2
    },
    {
        a: 3,
        b: 4
    }
]

const ge = function ({
    entry = '',
    haha = '',
    hehe = '',
    arr = ['a', 'b'],
    template = './src/index.html',
} = {}) {
    return {
        entry,
        plug: [
            haha,
            hehe,
            arr,
            template
        ]
    }
}
console.log(ge({
    entry: 2,
    haha: 3,
    hehe: 4,
    arr: pages
}))

let ha = {
    h: {
        aa: 99
    },
    ou: {
        hh: 98
    },
    plg: [
        {
            cc: 99,
            ll: 76
        }
    ]
}
let he = {
    h: {
        nn: 99
    },
    ou: {
        mm: 98
    },
    plg: [
        {
            aaa: 99,
            ddd: 76
        }
    ]
}
// console.log(merge(ha,he))
console.log(Object.assign(ha, he))

/* { h: { aa: 99, nn: 99 },
  ou: { hh: 98, mm: 98 },
  plg: [ { cc: 99, ll: 76 }, { aaa: 99, ddd: 76 } ] } */