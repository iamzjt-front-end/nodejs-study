const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("common middleware 01");
  next();
})

app.get("/home", (req, res, next) => {
  console.log("home path and method middleware 01");
})

app.listen(8888, () => {
  console.log("路径和方法中间件服务器启动成功~");
})