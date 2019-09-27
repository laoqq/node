/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 09:49:27
 * @LastEditTime: 2019-09-20 18:32:19
 * @LastEditors: Please set LastEditors
 */
const express = require('express');
const Router = express.Router();
const {
    Foot,
    token
} = require('../utils/footmate');

const {
    mongodb
} = require('../db');
Router.get('/', async (req, res) => {
    let result = await mongodb.create('user', [{
        username: 'xe',
        age: 1,
        password: '1'
    }]);
    res.send(result);
})
Router.post('/reg', async (req, res) => {
    let {
        username,
        password
    } = req.body
    console.log(req.body)

    let result = await mongodb.create('user', [{
        username,
        password,
        regtime: Date.now()

    }]);

    res.send(result);
})
Router.get('/login', async (req, res) => {

    let {
        username,
        password,
        mdl
    } = req.query;
    let result = await mongodb.find("user", {
        username,
        password
    });
    if (result.length > 0) {
        if (mdl) {
            var Authorization = token.create(username);
        }
        res.send(Foot({
            data: Authorization
        }));
    } else {
        res.send(Foot({
            code: 0
        }));
    }


})
Router.post('/', async (req, res) => {
    let result = await mongodb.find('user');
    res.send(result);
})
Router.get('/chek', async (req, res) => {
    let {
        username
    } = req.query
    let result = await mongodb.find('user', {
        username
    })

    if (result.length > 0) {
        res.send(Foot({
            code: 0
        }))

    } else {
        res.send(Foot())
    }

})
Router.route('/:id')
    .delete(async (req, res) => {

        let {
            id
        } = req.params
        let result = await mongodb.del('user', {
            id: id

        })
        res.send(result);
    })
    .patch(async (req, res) => {

        let {
            username

        } = req.body
        let {
            id
        } = req.params
        let result = await mongodb.update('user', {
            age: id * 1
        }, {
            'username': username
        });
        res.send(result);
    })
module.exports = Router