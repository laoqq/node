/*
 * @Description: In User Settings Edit

 * @Author: your name
 * @Date: 2019-09-12 11:57:33
 * @LastEditTime: 2019-09-12 11:59:08
 * @LastEditors: Please set LastEditors
 */


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/abc', function (req, res, next) {
    res.send('abc');
});

module.exports = router;