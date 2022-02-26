const fs = require("fs");
const path = require("path");

// 1. 创建文件夹
const dirname = "./why";
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, (err) => {
    console.log(err);
  });
}

// 2. 读取文件夹中的所有文件
// fs.readdir(dirname, (err, files) => {
//   console.log(files); // [ 'abg.jpg', 'why.txt' ]
// });

// 读取文件夹下面的所有文件，包含里层文件夹里面的文件
// function getFiles(dirname) {
//   fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
//     files.forEach((file) => {
//       // console.log(file);
//       // fs.stat(file)  可以, 但是有点麻烦
//       if (file.isDirectory()) {
//         const filePath = path.resolve(dirname, file.name);
//         getFiles(filePath);
//       } else {
//         console.log(file.name);
//       }
//     });
//   });
// }

// getFiles(dirname);

// abc.jpg
// why.txt
// aaa.txt
// bbb.js
// ccc.txt
// ddd.html

// 3. 文件夹的重命名
fs.rename("./why", "./iamzjt", (err) => {
  console.log(err);
});
