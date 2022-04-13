const fs = require("fs");

const express = require("express");
const morgan = require("morgan");

const app = express();

const writableStream = fs.createWriteStream("./logs/access.log", {
  flags: "a+",
});

app.use(morgan("combined", { stream: writableStream }));

app.get("/home", (req, res, next) => {
  res.end("Hello World");
});

app.listen(8888, () => {
  console.log("保存日志信息服务器启动成功~");
});
