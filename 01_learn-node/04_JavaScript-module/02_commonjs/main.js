// exports = { name, age, sayHello }
// bar = exports
const bar = require('./bar');

console.log(bar.name);
console.log(bar.age);
bar.sayHello('Kobe');

// { name, age, sayHello } = exports
// 对象的解构
const { name, age, sayHello } = require('./bar');

console.log(name);
console.log(age);
sayHello('James');