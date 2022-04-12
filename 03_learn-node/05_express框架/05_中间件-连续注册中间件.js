const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("common middleware 01");
  next();
})

app.get("/home", (req, res, next) => {
  console.log("home path and method middleware 01");
  next();
}, (req, res, next) => {
  console.log("home path and method middleware 02");
  next();
}, (req, res, next) => {
  console.log("home path and method middleware 03");
  next();
}, (req, res, next) => {
  console.log("home path and method middleware 04");
  res.end("home end");
})

app.listen(8888, () => {
  console.log("连续注册中间件服务器启动成功~");
})