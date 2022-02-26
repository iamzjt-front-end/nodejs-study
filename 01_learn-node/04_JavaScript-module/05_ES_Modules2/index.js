import { name, age, sayHello } from './modules/foo.js';

setTimeout(() => {
  console.log(name);
}, 2000)
// coderwhy

setTimeout(() => {
  name = 'IamZJT';
  console.log(name);
}, 3000)
// Uncaught TypeError: Assignment to constant variable.