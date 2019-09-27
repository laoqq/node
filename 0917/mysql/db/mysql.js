/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 16:32:30
 * @LastEditTime: 2019-09-18 16:15:10
 * @LastEditors: Please set LastEditors
 */
const mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'xiangmu',
    multipleStatements: true

})

function query(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results, fields) => {

            if (error) {
                reject(error);
            }
            resolve(results);
        })

    })

}
module.exports = query;