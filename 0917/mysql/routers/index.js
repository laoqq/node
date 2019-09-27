/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 16:46:55
 * @LastEditTime: 2019-09-20 19:25:42
 * @LastEditors: Please set LastEditors
 */
const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
// 引入每个模块路由
const goodsRouter = require('./goods');
const userRouter = require('./user')
Router.use(bodyParser.urlencoded({
    extended: true
}));
const {
    Foot,
    token
} = require('../utils/footmate');

// Router.use(express.urlencoded());
Router.use('/goods', goodsRouter);
Router.use('/user', userRouter);
Router.get('/verify', (req, res) => {

    let Authorization = req.get("Authorization");

    let result = token.verify(Authorization);
    res.send(Foot({
        code: result ? 1 : 0
    }))

})
module.exports = Router