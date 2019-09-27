/*
 * @Description: In User Settings Editxpres
 * @Author: your name
 * @Date: 2019-09-17 16:41:06
 * @LastEditTime: 2019-09-19 11:51:12
 * @LastEditors: Please set LastEditors
 */
const express = require("express");
const routers = express.Router();
const {
    mysql
} = require('../db');
const bodyParser = require('body-parser');
// routers.use(express.bodyParser());

routers.use(bodyParser.urlencoded({
    extended: true
}));
routers.route('/')
    .post(async (req, res) => {

        let sql = `select * from book`;
        let results = await mysql(sql);
        res.send(results);

    })
    .delete(async (req, res) => {

        let {
            bookid
        } = req.body;
        let sql = `DELETE FROM book WHERE bookid=${bookid}`
        let result = await mysql(sql)
        res.send(result);
    })

routers.route('/:id').patch(async (req, res) => {
    let {
        id
    } = req.params;

    // 接收请求体内的参数：req.body
    console.log('body:', req.body)
    let {
        price
    } = req.body;

    // 拼接sql语句
    let sql = `update book set `
    for (key in req.body) {
        sql += key + '=' + req.body[key] + ','
    }
    sql = sql.slice(0, -1);

    sql += ` where bookid=${id}`;
    console.log(sql)

    let result = await mysql(sql)
    // res.send(result);
    res.send(result)
})
module.exports = routers;