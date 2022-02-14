console.log('Hello ES Modules');

// 常见的导入方式也有三种：
// 方式一: import {} from '路径’
// import { name, age, sayHello } from './modules/foo.js';

// 方式二: 导出之后可以起别名
// import { name as wName, age as wAage, sayHello as wSayHello } from './modules/foo.js';
// import { fName as wName, fAge as wAage, fSayHello as wSayHello } from './modules/foo.js';

// 方式三: * as foo
// import * as foo from './modules/foo.js';

// console.log(foo.name);
// console.log(foo.age);
// foo.sayHello('王小波');


// 演练：export 和 import 结合使用
import { name, age, sayHello } from './modules/bar.js';

// console.log(name); 
// console.log(age);
// sayHello('王小波');


// 演练：default export 如何导入
 import format from './modules/foo.js';

 format();


 // 演练：import() 函数
 let flag = true;
 if (flag) {
  // import format from './modules/foo.js'; // Uncaught SyntaxError: Unexpected identifier
  // require的本质是一个函数
  // require('');
  import('./modules/foo.js').then(res => {
    console.log('在then中打印');
    console.log(res.name);
    console.log(res.age);
  }).catch(err => {

  });
 }