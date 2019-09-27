/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 11:53:13
 * @LastEditTime: 2019-09-20 19:26:23
 * @LastEditors: Please set LastEditors
 */
const jwt = require('jsonwebtoken');
let {
    secret
} = require('../config.json');

function create(data, expiresIn = 30) {
    let token = jwt.sign({
        data
    }, secret, {
        expiresIn
    });
    return token;
}

function verify(token) {
    let res;
    try {
        let result = jwt.verify(token, secret);
        console.log(result)
        res = true;
    } catch (err) {
        res = false;
    }

    return res;
}

module.exports = {
    create,
    verify
}