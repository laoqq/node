/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 17:04:40
 * @LastEditTime: 2019-09-15 23:38:51
 * @LastEditors: Please set LastEditors
 */
var express = require("express");
var router = express.Router();
var fs = require("fs");
/* GET users listing. */

/* GET users listing. */
router.post("/reg", function (req, res, next) {
    var arr = new Array();
    let {
        name,
        password
    } = req.body;
    let obj = {};
    // obj.name = name;
    // obj.password = password;
    arr.push(`${
        name+':'+
        password
    }`)
    fs.appendFileSync("./data.json", `${arr},`);
    // let fd = fs.readFileSync("./data.json");
    // res.send(fd)
    // console.log(req.body);
    // if (name === 'abc' && password === '123') {
    //     res.send({
    //         status: 'success',
    //     });
    // } else {
    //     res.json({
    //         status: 'failure',
    //     });
    // }
    // router.post('/', function (req, res, next) {
    //     let {
    //         name,
    //         password
    //     } = req.body;
    //     res.send(req.body);

    // fs.appendFileSync("./data.txt", `${ name+password }`, "utf8")
    // if (err) throw err;

    // if (fd.length > 0) {
    //     res.send({
    //         status: success
    //     })
    // } else {
    //     res.send({
    //         status: err
    //     })
    // }
});

module.exports = router;