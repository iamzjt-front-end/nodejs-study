let name = '李银河';
let age = 20;
let sayHello = name => {
  console.log('你好啊，' + name + '！');
}

setTimeout(() => {
  name = 'coderwhy';
}, 1000)

export {
  name,
  age,
  sayHello
}