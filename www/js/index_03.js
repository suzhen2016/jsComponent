
'use strict';
//简化输出变量
exports = module.exports = function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  var len = arr.length,
       i = -1;

  while (i++ < len) { //i=-1 开始 比较后再加一
    var j = i + 1;//这里的i已经加一了，等于 0 + 1；
    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);  //截取,原数组变化  返回值是截取的是数组
        console.log('数组',arr,'---i='+i,'----j='+j)
      }
     
    }
  }
  return arr;
};

exports.immutable = function uniqueImmutable(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  var arrLen = arr.length;
  var newArr = new Array(arrLen);

  for (var i = 0; i < arrLen; i++) {
    newArr[i] = arr[i];
  }
  return module.exports(newArr);
};

exports.show = function showw(){
 return '2342424242'
}
