const path = require('path');

const basePath = '/User/why';
const fileName = 'abc.txt';

const filePath = path.resolve(basePath, fileName);
// 会转为对应操作系统下的访问路径

console.log(filePath); // /User/why/abc.txt