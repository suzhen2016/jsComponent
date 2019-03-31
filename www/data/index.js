
'use strict'
const request  = require('request')
const linkedList = require('./linkedList.js');
const stack = require('./stack')
//A:实现链表数据结构的初始化
let link = new linkedList();
link.append({name:'苏镇1'})
link.append({name:'梦姝3'})
link.insert(1,{name:'insert 2位置'})
link.insert(4,{name:'insert 3位置'})
link.insert(0,{name:'insert 0位置'})
link.insert(4,{name:'insert 4末尾位置'})
// console.log('删除第3个数据',link.remove(3))
// console.log('求新的第三个数据',link.getNode(3))
// console.log('当前的长度',link.get_size(),link.get_head(),link.get_tail())

//B:实现栈数据
let st = new stack()
// st.add(1) //添加元素
// st.add(2)
console.log('st',st)
console.log('Set',[...new Set([1,3,5,6,6,2,3])].sort((a,b)=>{return a-b}) )

class Point {
    // static myStaticProp = 42;
    // constructor(x, y) {
    //   this.x = x;
    //   this.y = y;
    // //   this.arr = new Array(this.x)
    //   return Point.myStaticProp
    // }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
    setX(a) {
        // this.x= a;
        return this.x  = a
    }
  
  }
  var point = new Point(2, 3);
//   console.log(point.setX(11))
console.log(point.toString())

link.print()
    