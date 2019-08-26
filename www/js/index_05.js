

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

/**
 * 整理车次顺序
 * */ 
let line =   { code: 0, data: { lines: '20路,301路,5路,地铁5号线,机场大巴线,107路,机场快轨', lineids: 'lzbd,lwes,lxid,lwic,lwdf,ldfx,loin', linedetails: { lwdf: { name: '机场大巴线' }, lwes: { name: '301路' }, lwic: { name: '地铁5号线' }, ldfx: { name: '107路' }, lzbd: { name: '20路' }, lxid: { name: '5路' }, loin: { name: '机场快轨' } } } }
P={
    len:3,
    num:20,
    set:1,
    name:'20路'
    
}
let parse = function (res) {
    let sort_line = [];
    if(res.code==0){
        let data_arr = res.data.lines.split(','),keys = res.data.lineids.split(','),lines = {one:[],two:[],three:[]};
        for(let i=0;i<data_arr.length;i++){
            var obj={
                len:data_arr[i].length,
                num:data_arr[i].replace(/[^0-9]/ig,"") || 0,
                set:1,
                name:data_arr[i],
                key:keys[i]
            }
            if(data_arr[i].indexOf('地铁')>-1) obj.set = 2;
            if(obj.num==0 && data_arr[i].indexOf('地铁')==-1) obj.set = 3;
            
            if(obj.set == 1){
                lines.one.push(obj)
            }else if(obj.set == 2){
                lines.two.push(obj)
            }else lines.three.push(obj);

        }
        lines.one.sort((o,j)=> o.num - j.num)
        lines.two.sort((o,j)=> o.num - j.num)
        lines.three.sort((o,j)=> o.len - j.len)
        for (const key in lines) {
            if (lines.hasOwnProperty(key)) {
                lines[key].forEach(e => {
                    let line = {}
                    line[e.key] = res.data.linedetails[e.key];
                    sort_line.push(line)
                });
            }
        }
        return sort_line;
        
    }
    
}

/**
 * 查询字符串内的子字符串出现的次数与索引值
 * */ 
function getStringIndex(str,s) {
    var str = str,s_l = str.length,l = s.length,num = 0,arr = [];
    for(var i = 0; i < s_l; i++ ){
        var slice_s = str.slice(i,i+l)
        if(slice_s == s){
            num += 1;
            arr.push(i);
            i += l - 1;
        }
    }
    return {num:num,index:arr.join()}
}
/**
 * 数组 二分法查找元素索引
 * 前提：数组需要是排好序的；
 * 思路：a.确定该区间的中间位置m ;
 *      b.将查找的值T与array[m]比较,若相等，查找成功返回此位置；否则确定新的查找区域，继续二分查找
 *      c.继续二分法查找时只需要改变end或min的指向即可，借助中间索引加或减改变
*/
function dichotomy(arr,num) {
    var min=0,end=arr.length-1;
    while (min<=end) { //循环终止条件
        var m = parseInt((min + end) /2)
        if(arr[m]==num){
            return m;
        }else if(arr[m] > num){
            end = m-1;
        }else{
            min = m + 1;
        }
        console.log('===========',min,end,arr[m])
    }
}




module.exports = {
    sum:getSum,
    getArrJiao:getJiao,
    getSortLine:parse,
    getStringIndex:getStringIndex,
    dichotomy:dichotomy
}