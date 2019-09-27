/*
 * @Description: In User Settings Editp
 * @Author: your name
 * @Date: 2019-09-17 16:18:53
 * @LastEditTime: 2019-09-19 10:06:35
 * @LastEditors: Please set LastEditors
 */
const express = require('express');
const app = express();
const allRouters = require('./routers');
app.use(express.static('./'));
app.use(allRouters);
app.listen(1907);