/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 14:07:27
 * @LastEditTime: 2019-09-12 14:54:57
 * @LastEditors: Please set LastEditors
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/111', function (req, res, next) {
  res.send('post');
});

module.exports = router;