'use strict';
//var module = {};
const index_3 = require('./index_03')
const index_4 = require('./index_04')
const index_5 = require('./index_05')
const fs =require('fs')

var stringifyPrimitive = function (v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

//最终暴露的主函数；
module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
    encodeURIComponent(stringifyPrimitive(obj));
};

//判定是不是数组；
var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

/**
 * 毫秒值转换时间对象的案列
 * @param {*} val 
 * @param {*} options 
 */
function getMilliseconds(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return String(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
    JSON.stringify(val)
  );
};
//getMilliseconds(NaN)

/**
 * 准确的es6回调的数据格式
 */
function factory($q, touchid) {
  return {
    authenticate: function (authReasonText) {
      var defer = $q.defer();  //定制promise对象；
      if (!window.cordova) {
        defer.reject('Not supported without cordova.js');
      } else {
        touchid.authenticate(function (value) {
          defer.resolve(value); //成功的返回
        }, function (err) {
          defer.reject(err); // 失败的返回
        }, authReasonText);
      }
      return defer.promise;
    }
  };
};


/**
 * 测试index_03的功能；
 * 数组去重；
 */
console.log(index_3.immutable([1,2,3,1,1,2,16,8,9,0,2,1]))

/**
 * 测试外部方法index_03的功能
 */
// console.log(index_3.show());

/**
 * 测试index_04的数组快速排序
 */
console.log(index_4.sortArr([5,3,7,1,4],0,4));

/**
 * 测试index_04的数组快速排序
 */
console.log('index_4 冒泡排序',index_4.maopao([5,3,7,1,4,8,9]));

/**
 * 测试index_04的路灯循环展示
 */
// console.log(index_4.getLu());


/**
 * 引入node js的fs模块
 * */
// console.log('fs',fs)

/**
 * index_05的数组求和
 * */
console.log('index_05数据求和=13',index_5.sum([3,5,1,4]))
/**
 * 
 * index_05 去重加求交集
 * */
console.log('index_05数据的交集=3，5，7 ===>',index_5.getArrJiao([1,2,3,4,1,3,5,7],[9,7,9,6,3,5,7]))

/*
*
*index_05 处理按条件返回整理之后的数组
**/ 
let line =   { code: 0, data: { lines: '20路,301路,5路,地铁5号线,机场大巴线,107路,机场快轨', lineids: 'lzbd,lwes,lxid,lwic,lwdf,ldfx,loin', linedetails: { lwdf: { name: '机场大巴线' }, lwes: { name: '301路' }, lwic: { name: '地铁5号线' }, ldfx: { name: '107路' }, lzbd: { name: '20路' }, lxid: { name: '5路' }, loin: { name: '机场快轨' } } } }
console.log('index_05返回车次顺序',index_5.getSortLine(line))

/**
 * index_04 对象解释迭代器原理obj_iterator
 * 
 * */ 
console.log('迭代器',index_4.obj_iterator())

/**
 * index_04 函数的原型----面试
 * */ 
index_4.proo()