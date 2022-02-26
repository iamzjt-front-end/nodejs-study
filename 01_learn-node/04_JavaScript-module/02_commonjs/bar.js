// 就是一个模块
const name = 'IamZJT';
const age = 26;

let message = 'my name is IamZJT'; 

function sayHello(name) {
  console.log('Hello ' + name );
}

exports.name = name;
exports.age = age;
exports.sayHello = sayHello;