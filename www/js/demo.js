const index_5 = require('./index_05')

/**
 * index_05
 * set 方法自动去重数组
 **/
let arr = [
    {a: "1",b: "1",c: "1"},
    {a: "1",b: "2",c: "1"},
    {a: "2",b: "1",c: "1"},
    {a: "1",b: "2",c: ""},
    {a: "2",b: "2",c: ""},
    {a: "2",b: "3",c: "1"},
]
 console.log(index_5.isHasDuplicate(arr,'a','b')) ;