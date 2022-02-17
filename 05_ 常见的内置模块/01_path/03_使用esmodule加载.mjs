import path from 'path';

const basePath = '../User/why';
const fileName = '/abc.txt';
const othername = '/why.js';

const filePath1 = path.join(basePath, fileName);
console.log(filePath1); // ../User/why/abc.txt