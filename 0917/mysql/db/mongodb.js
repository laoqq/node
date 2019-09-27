/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 22:02:46
 * @LastEditTime: 2019-09-19 19:10:14
 * @LastEditors: Please set LastEditors
 */
const {
    MongoClient
} = require('mongodb');
const {
    DBurl,
    DBName
} = require('../config.json');

async function connect() {
    let result;
    try {
        let client = await MongoClient.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(DBName);
        result = {
            client,
            db
        };
    } catch (err) {
        result = err;
    }
    return result;
}
async function create(colName, data) {
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colName);
    let result = col.insertMany(data);
    client.close();
    return result;
}
async function find(colName, query = {}) {
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colName);

    let result = await col.find(query).toArray();
    client.close();
    return result;
}
async function del(colName, query) {

    let {
        db,
        client
    } = await connect();
    let col = db.collection(colName);
    let result = await col.deleteMany(query);

    client.close();
    return result;

}
// create('user', [{
//     username: 'xiaoe',
//     age: 1,
//     password: '1'
// }])
async function update(colName, query, data) {
    console.log(query, data);
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colName);
    let result = await col.updateMany(query, {
        $set: data

    });

    client.close();
    return result;


}
module.exports = {
    create,
    find,
    del,
    update
}