// const $ = require('jquery')

// class $Help{
//     constructor() {}
//     static ajax(){
//         // console.log('$',$.ajax)
//         $.ajax({
//             url:'https://recognition.image.myqcloud.com/ocr/businesscard',
//             type:"POST",
//             rejectUnauthorized: false,
//             headers: {
//                 'host': 'recognition.image.myqcloud.com',
// 						'Content-type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
//                         'authorization':'XDfFhtwAZpRvqWftix+5JhKXB/thPTEyNTU4NjM0MDMmaz1BS0lEZ3pFZHVMZGdvZG9BaDhrZnMwNkxSUElDQjZ1WWl3MDEmZT0xNTUwMDY3MTk2JnQ9MTU0OTk4MDc5NiZyPTE5ODM3NDM2MjEwJmY9',
//                         'Cache-Control': 'no-cache'
//             },
//             data:{image:'','appid':'1255863403'},
//             error:function(jqXHR, textStatus, errorThrown) {
//                 console.log('error',jqXHR, textStatus, errorThrown)
//             },
//             success:function (data) {
//                 console.log('success',data)
//             }
//         })
//     }
// }
// $Help.ajax()