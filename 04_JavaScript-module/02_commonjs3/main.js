// node中实现commonjs：加载文件的过程是同步的
require('./bar'); 

console.log('main.js中的代码被执行了');

// require('./bar');