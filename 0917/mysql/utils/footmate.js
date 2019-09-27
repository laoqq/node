/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 17:20:25
 * @LastEditTime: 2019-09-20 11:52:50
 * @LastEditors: Please set LastEditors
 */
const token = require('./token')

function Foot({
    code = 1,
    msg = 'success',
    data = []
} = {}) {
    if (code == 0) {
        msg = 'fail';
    }
    return {
        code,
        msg,
        data
    }
}
module.exports = {
    Foot,
    token
};