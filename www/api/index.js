// import request from 'request'
const request = require('request')
const ajax = require('./ajax.js')
class help {
    // static url = 'http://t-web-api.qingoo.cn';
    constructor() {}
    static api(url,method,data){
        return new Promise((resolve,reject)=>{
            let that = this;
            let options = {
                url:'http://t-web-api.qingoo.cn'+url,
                method: method || "POST",
                rejectUnauthorized: false,
                headers: {
                    "postman-token": "2095813c-0096-6167-2f94-642696a3abe8",
                    "cache-control": "no-cache",
                    "content-type":
                        "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
                }

            }
            if (data) {
                options.formData = data;
            }
            request(options, function(error, response, body) {
                // console.log(error, response, body)
                if (error) return reject(error);
                try {
                    return resolve(body);
                } catch (e) {
                    return reject(body);
                }
            });
        })
        
    }
    static getChapter(){
        return new Promise( async (resolve,reject)=>{
            try {
                let res = await help.api(
                    '/api/book/list?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vd3d3LnFpbmdvby5jbiIsInN1YiI6IndlYiIsInVpZCI6IjViODM1YjdhZjcxYTUxNTJhNDQyNjI0NiIsImV4cCI6MTU0NzYyODE2NiwiaWF0IjoxNTQ3NTQxNzY2fQ.8E2ugnFtqhixSjW_P90iKJjFyvOFbG_LKifxloKogAw',
                    'GET',
                )
                console.log('请求',res)
                return resolve(res)
            } catch (error) {
                console.log(error)
                return reject(res)
            }
            

        })
    }
    



    //宽裕
    static bai_api(url,method,data){
        return new Promise((resolve,reject)=>{
            let that = this;
            let options = {
                url:'https://recognition.image.myqcloud.com/ocr/businesscard',
                method: method || "POST",
                rejectUnauthorized: false,
                headers: {
                    'host': 'recognition.image.myqcloud.com',
						'Content-type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                        'authorization':'XDfFhtwAZpRvqWftix+5JhKXB/thPTEyNTU4NjM0MDMmaz1BS0lEZ3pFZHVMZGdvZG9BaDhrZnMwNkxSUElDQjZ1WWl3MDEmZT0xNTUwMDY3MTk2JnQ9MTU0OTk4MDc5NiZyPTE5ODM3NDM2MjEwJmY9',
                        'Cache-Control': 'no-cache'
                }
            }
            // var c = new FormData()
            //     c.append('image', '')
            //     c.append('appid', '1255863403')
            options.formData = {image:'','appid':'1255863403'};
            var reader = new FileReader();
                // console.log('点击了',file)
            reader.onload = async evt => {
                options.formData.image = evt.target.result;
                request(options, function(error, response, body) {
                    // console.log(error, response, body)
                    if (error) return reject(error);
                    try {
                        return resolve(body);
                    } catch (e) {
                        return reject(body);
                    }
                });
            }
            reader.readAsDataURL('./myicon.png');
            console.log(options)
            
        })
    }
    static getMing(){
        return new Promise( async (resolve,reject)=>{
            try {
                let res = await help.bai_api(
                    '',"",
                )
                console.log('请求名片',res)
                return resolve(res)
            } catch (error) {
                console.log('请求名片err',error)
                return reject(res)
            }
        })
    }
}

// help.getChapter()
// help.getMing()