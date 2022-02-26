const path = require('path');

// 1. 获取路径的信息
// const filePath = '/User/why/abc.txt';

// console.log(path.dirname(filePath)); // /User/why
// console.log(path.basename(filePath)); // abc.txt
// console.log(path.extname(filePath)); // .txt

// 2. join路径拼接
const basePath = 'User/why';
const fileName = 'abc.txt';

const filePath = path.join(basePath, fileName);
console.log(filePath); 
// /User/why/abc.txt
// User/why/abc.txt

// 3. resolve路径拼接
// resolve会判断拼接的录进字符串中，是否有以/或./或../开头的路径
const filePath2 = path.resolve(basePath, fileName);
console.log(filePath2); 
// /User/why/abc.txt
// /Users/iamzjt/Desktop/personal/study-warehouse/nodejs-study/05_ 常见的内置模块/User/why/abc.txt