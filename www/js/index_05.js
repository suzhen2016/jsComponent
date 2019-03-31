

/**
 * 数据求和 
 * @param {*} arr 
 */
let getSum  = function (arr) {
    if(!Array.isArray(arr)) return '非数据'
    return arr.reduce((a,b)=>a+b)
}
/**
 * 两数组的交际
 * @param {*} arr1 
 * @param {*} arr2 
 */
let getJiao = function (arr1,arr2) {
    if(!Array.isArray(arr1) && !Array.isArray(arr2)) return '非数据'
    let set1 = new Set(arr1),
        set2 = new Set(arr2);
    console.log('arr2转化为set2',[...set2],arr2);
    return [...set1].filter(b=>set2.has(b)).join() 

}
let compose = function (a,b) {
    // return (a)
}

module.exports = {
    sum:getSum,
    getArrJiao:getJiao
}