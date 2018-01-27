'use strict';
const request = require("request"); //非核心模块
const fs = require("fs");
const index = require('./www/js/index_01')

const express = require('express'); //引入express模块   非核心模块
const app = express();//支持页面的路由跳转

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

//开启服务的进程;
app.listen(9000,"127.0.0.1");
console.log("应用实例，访问地址为  127.0.0.1:9000");