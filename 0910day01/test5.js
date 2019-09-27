/*
 * @Description: In User Settings Editb
 * @Author: your name
 * @Date: 2019-09-11 11:56:11
 * @LastEditTime: 2019-09-11 11:58:03
 * @LastEditors: Please set LastEditors
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function () {
    console.log('some_event 事件触发');
});
setTimeout(function () {
    console.log(1);
    event.emit('some_event');
}, 1000);