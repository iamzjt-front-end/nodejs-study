const express = require("express");

// express其实是一个函数：createApplication
// 返回app
const app = express();

// 监听默认路径
app.get("/", (req, res, next) => {
  res.end("Hello GET Express");
});

app.post("/", (req, res, next) => {
  res.end("Hello POST Express");
});

app.post("/login", (req, res, next) => {
  res.end("登录成功~")
})

// 开启监听
app.listen(8888, () => {
  console.log("express服务器启动成功~");
});
