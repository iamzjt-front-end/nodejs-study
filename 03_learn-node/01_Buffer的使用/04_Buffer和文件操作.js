const fs = require("fs");
const sharp = require("sharp");

// 读取文本文件
// fs.readFile("./foo.txt", { encoding: "utf-8" }, (err, data) => {
//   console.log(data); // 李银河
// })

// fs.readFile("./foo.txt", (err, data) => {
//   console.log(data); // <Buffer e6 9d 8e e9 93 b6 e6 b2 b3>
//   console.log(data.toString()); // 李银河
// })


// 读取图片文件
// fs.readFile("./background.png", (err, data) => {
//   console.log(data);
//   // <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 06 c6 00 00 03 f8 08 06 00 00 00 6e b6 49 5e 00 00 04 0e 69 43 43 50 6b 43 47 43 6f 6c 6f 72 53 ... 2661799 more bytes>

//   fs.writeFile("./foo.png", data, err => {
//     console.log(err);
//   });
// })


// sharp库的使用
