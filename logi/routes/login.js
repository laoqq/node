/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-15 23:39:01
 * @LastEditTime: 2019-09-16 17:22:27
 * @LastEditors: Please set LastEditors
 */
var express = require("express");
var router = express.Router();
var fs = require("fs");
router.post("/login", function (req, res, next) {

    let {
        name,
        password
    } = req.body;
    fs.readFile("./data.json", function (err, data) {
        data = data.toString();
        let arr2 = data.split(',');
        for (let i = 0; i < arr2.length - 1; i++) {
            let ar = arr2[i].split(':');
            if (ar[0] === name && ar[1] === password) {
                res.send("1");
                break;
            }

        }
    });





});
module.exports = router;