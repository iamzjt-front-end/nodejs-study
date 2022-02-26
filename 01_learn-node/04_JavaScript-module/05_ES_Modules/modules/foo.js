const name = '李银河';
const age = 20;
const sayHello = name => {
  console.log('你好啊，' + name + '！');
}

// 导出方式有三种
// 方式一：
// export const name = '李银河';
// export const age = 20;
// export const sayHello = name => {
//   console.log('你好啊，' + name + '！');
// }

// 方式二：{}中统一导出
// 注意：{}是大括号，不是一个对象！
// { 放置我们要导出的变量的引用列表 }
export {
  name,
  age,
  sayHello
}

// 方式三：{}导出时可以给变量起别名
// export {
//   name as fName,
//   age as fAge,
//   sayHello as fSayHello
// }


// default 默认导出
// 注意：一个模块中只能有一个默认导出
export default function() {
  console.log('默认导出测试！');
}