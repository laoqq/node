/*
 * @Description: In User Settings Edito

 * @Author: your name
 * @Date: 2019-09-17 11:46:06
 * @LastEditTime: 2019-09-17 11:52:23
 * @LastEditors: Please set LastEditors
 */
const express = require("express");
const app = express();
app.use(express.static('/'));
let allRouter = require("./router/index");
app.use(allRouter);
app.listen(3000)