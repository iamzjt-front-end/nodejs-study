define(function (require, exports, module) {
  const name = '李银河';
  const age = 20;
  const sayHello = name => {
    console.log('你好啊，' + name + '！');
  }

  module.exports = {
    name,
    age,
    sayHello
  }
});