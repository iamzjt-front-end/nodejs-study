const EventEmitter = require("events");

// 1. 创建发射器
const emitter = new EventEmitter();

// 2. 监听某一个事件
// addListener是on的alias简写
// once 只监听一次
emitter.once("click", (args1, args2, args3) => {
  console.log("监听1到了click事件", args1, args2, args3);
});

const listener2 = function (args1, args2, args3) {
  console.log(arguments);
  // [Arguments] { '0': 'coderwhy', '1': 'james', '2': 'kobe' }
  console.log("监听2到了click事件", args1, args2, args3);
};
emitter.on("click", listener2);

// 将本次监听放到最前面
// emitter.prependListener("click", (args1, args2, args3) => {
//   console.log("监听3到了click事件", args1, args2, args3);
// });

// 将本次监听放到最前面 且 只执行一次
emitter.prependOnceListener("click", (args1, args2, args3) => {
  console.log("监听3到了click事件", args1, args2, args3);
});

// 3. 发出一个事件
setTimeout(() => {
  // 4. 移除所有的监听器
  // emitter.removeAllListeners();
  emitter.emit("click", "coderwhy", "james", "kobe");
  emitter.emit("click", "coderwhy", "james", "kobe");
}, 2000);
