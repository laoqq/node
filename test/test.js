/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 10:30:23
 * @LastEditTime: 2019-09-16 15:34:20
 * @LastEditors: Please set LastEditors
//  */
// const buf = Buffer.from('runoob', 'ascii');

// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));

// // 输出 cnVub29i
// console.log(buf.toString('base64'));

// process.stdout.write(console.trace())
// var util = require('util');

// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function () {
//         console.log('Hello ' + this.name);
//     };
// }
// Base.prototype.showName = function () {
//     console.log(this.name);
// };

// function Sub() {
//     this.name = 'sub';
// }
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// //objSub.sayHello(); 
// console.log(objSub);

// var http = require('http');
// var url = require('url');
// var util = require('util');

// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     // 解析 url 参数
//     var params = url.parse(req.url, true).query;
//     res.write("网站名：" + params.name);
//     res.write("\n");
//     res.write("网站 URL：" + params.url);
//     res.end();

// }).listen(3000);
var http = require('http');

// 用于请求的选项
var options = {
    host: 'localhost',
    port: '8080',
    path: './index.html'
};

// 处理响应的回调函数
var callback = function (response) {
    // 不断更新数据
    var body = '';
    response.on('data', function (data) {
        body += data;
    });

    response.on('end', function () {
        // 数据接收完成
        console.log(body);
    });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();