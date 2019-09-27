/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 11:51:05
 * @LastEditTime: 2019-09-17 11:55:29
 * @LastEditors: Please set LastEditors
 */
const express = require("express");
const Router = express.Router();
const goodRouter = require('./good');
Router.use("/good", goodRouter);
module.exports = Router;