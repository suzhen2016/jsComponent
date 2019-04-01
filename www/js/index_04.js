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
    console.log('之后的')
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

//依次打印 红 黄 绿
function getLu(color,time){
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(color +'是'+ time)
        }, time);
    })
    return p
}
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
// timeout()
