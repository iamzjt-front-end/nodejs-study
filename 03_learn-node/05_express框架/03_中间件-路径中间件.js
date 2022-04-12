const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("common middleware 01");
  next();
})

// 路径匹配中间件
app.use("/home", (req, res, next) => {
  console.log("home middleware 01");
  next();
});

// 中间插入一个普通中间件
app.use((req, res, next) => {
  console.log("common middleware 02");
  next();
})

app.use("/home", (req, res, next) => {
  console.log("home middleware 02");
});

app.listen(8888, () => {
  console.log("路径中间件服务器启动成功~");
})