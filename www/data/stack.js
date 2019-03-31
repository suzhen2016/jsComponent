'use strict'
const LinkedList = require('./linkedList')
class Stack {
    constructor(){
        this.data = []
        return this.data;
    }
    //尾部添加
    add(data){
        this.data.push(data);
        this.size ++;
    }
    
}

module.exports = Stack;