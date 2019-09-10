const http = require('http')
const {
    writeFileSync
} = require('fs')
// Restful接口规范
// 就是利用协议的名字让你知道后端在做什么
// get post 请求规范的语义化
// console.log(http)

// 创建一个http的服务器
// req前端->后端  请求 请求头 请求体
// res后端->前端  响应 响应头 响应体
const server = http.createServer((req, res) => {
    // writeFileSync('./db.txt', req.url)
    console.log(req.url)
    // 让响应头带上这个参数，浏览器允许跨域策略
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('name', 'yao')
    // 服务器通知客户端，让页面缓存60秒
    res.writeHead(200, {
        'Content-Type': 'text/json',
        // 设置缓存
        'cache-control': 'max-age=60'
    })
    res.write('hello world')
    res.end()
})
// 3306 80 
server.listen(12345) // 0 - 65535

// 发送一个get请求
// http.get()
// 伪造复杂请求
// http.request()
// 要根据状态吗来判断问题，200
// http服务端，客户端

// 服务器，浏览器
// 资源路径写错了，服务器没有这个资源

// http
// https(http + ssl证书)