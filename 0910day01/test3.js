// const {
//     readFile
// } = require('fs');
// console.log(fs);
// readFile("./intput.txt", (err, data) => {
//     if (err) throw err;
//    console.log(data);

// })
var fs = require("fs");

// 异步读取
fs.readFile('./input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());
fs.writeFileSync("./input.txt", 1235155);
var data2 = fs.readFileSync('input.txt');
console.log("同步读取: " + data2.toString());