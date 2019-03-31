'use strict';
// const request = require("request"); //非核心模块
const fs = require("fs");
const index = require('./www/js/index_01')
const index_4 = require('./www/js/index_04')
// const sign = require('./www/js/sign')
const express = require('express'); //引入express模块   非核心模块
const app = express();//支持页面的路由跳转
//加载数据结构
// const linkd = require('./www/data');
//加载请求api 
const api = require('./www/api')

//app.use(express.static('public'));读取静态资源路径，默认打开静态资源路径的位置；
app.use('/', express.static(__dirname + '/www'));

app.get('/', function (req, res) {
    var obj = {
        text:'111111',
        true:'222222',
        521:'33333',
        arr:[4444,55555,66666],
        script:'zuihou'
    }
    console.log(index(obj,'','','post'))
	res.sendFile( __dirname + "/" + "www/html/index_01.html" );
});
app.get('/04', function (req, res) {
    res.sendFile( __dirname + "/" + "www/html/index_01.html" );
    let str = index_4.func();
    // console.log(str)
    // console.log(index_4.func2(true))
    res.send('22'+str)
    // res.send('Hello World 您好世界');
});

//开启服务的进程;
app.listen(9000,"127.0.0.1");
console.log("应用实例，访问地址为  127.0.0.1:9000");