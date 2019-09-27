/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 20:10:09
 * @LastEditTime: 2019-09-21 08:43:41
 * @LastEditors: Please set LastEditors
 */
const wsserver = require('ws').Server;
const express = require("express");
const http = require('http');
const app = express();
app.use(express.static('./'));
let server = http.createServer(app);
let wss = new wsserver({

    server,


})
server.listen(2019, () => {

    console.log("启动");

})
wss.on("connection", (client) => {
    console.log('连接');
    client.on('message', (msg) => {
        wss.clients.forEach(item => {
            item.send(msg);
        })
    })
})