'use strict';

function f() {
    let a = 10;
    return function g() {
        let b = a + 1;
        return b;
    }
}

module.exports.func =  f(); // returns 11;

module.exports.func2 = function(falg){
    let a = 100;
    if(falg){
        let b = a+1;
        return b;
    }

    return a;
}

// 交换并返回分界点
function getFind(arr,l,h){
    let height = h||arr.length-1;
    let low = l||0;
    let p = arr[low];
    while(low<height){   //升序 > 参考值的往右边放

        while(low<height && arr[height]<=p){ //
            height--;
        }
        arr[low] = arr[height]
        console.log('height',height,low,arr)

        while(low<height && p<=arr[low]){
            low++;
        }
        arr[height] = arr[low]
        console.log('low',low,height,arr)
        
    }
    arr[low] = p;

    console.log('比基准p大的放在p的右边',low,height,arr)

    return low;
}

function quick_arr (arr,l,h){
    if(l>=h){
        return false;
    }
    var bound= getFind(arr,l,h);
    // console.log(bound)
    quick_arr(arr, 0,bound-1); // 递归调用
    quick_arr(arr, bound+1,h); // 递归调用

}

//数组的快速排序算法
module.exports.sortArr = function(arr,l,h){
    quick_arr(arr,0,h)
    // quick_arr(arr, 1, 4); // 递归调用
}

//数组的冒泡排序
module.exports.maopao = function(arr) {
    let {i,l}={i:0,l:arr.length};
    for(i;i<l;i++){
        var isOk = true;
        // ddd:
        for(let j=0;j<l-1-i;j++){
            
            if(arr[j]>arr[j+1]){
                let curent = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = curent;
                isOk = false;
            }
            // continue  终止本次层循环
            // break ddd
        }
        if(isOk){
            break;
        }
    }
    return arr;
    
}


//依次打印 红 黄 绿
function getLu(color,time){
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(color +'是'+ time)
        }, time);
    })
    return p
}

//递归调用自己继续执行
function timeout(params) {
    getLu('红',3000).then(res=>{
        console.log('灯回调',res)
        return getLu('黄',3000)
    }).then(res=>{
        console.log('灯回调',res)
        return getLu('绿',1000)
    }).then(res=>{
        console.log('灯回调',res)
        timeout()
    })
}

module.exports.getLu = timeout;

//for of 迭代对象 
/**
 *  - 迭代器是返回一个包含了 next 方法的对象
    - next 方法返回一个包含 `done` 和 `value` 的对象
        - done 是一个 boolean 值
            - true 表示迭代结束，此时忽略 value
            - false 表示可继续迭代
        - value 是一个任意类型的值，也就是迭代过程中的值
 * 
 * 
 */
module.exports.obj_iterator= function(){
    let obj = {x: 1, y: 2};
        obj[Symbol.iterator] = function() {
            let keys = Object.keys(obj);
            let len = keys.length;
            let n = 0;
            return {
                next() {
                    if (n < len) {
                        return {
                            done: false,
                            // value: {
                            //     k: keys[n],
                            //     v: obj[keys[n++]]
                            // }
                            value:obj[keys[n++]]
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                    
                }
            }
        }

        for (let v of obj) {
            console.log(v);
        }
}
/**
 * 原型判断
 * @param {*} params 
 */ 
module.exports.proo = function() {
    var fn = function(){
        // var a= c = 1;
        // console.log('面试 a=b=c=1',c)
        for (let index = 0; index < 5; index++) {
            setTimeout(() => {
                console.log('let 遍历定时',index)
            }, 0);
            
        }
        for (var i = 0; i < 5; i++) {
            setTimeout(() => {
                console.log('var 遍历定时',i)
            }, 0);
            
        }
    }
    fn.prototype.c = 9;
    fn()
    // let a = b = c = 1;
    // console.log('面试 a=b=c=1',a,c)
    console.log('fn.prototype.c--面试',fn.name,fn.c)








}