const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer();
app.use(upload.any());

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("登录成功");
});

app.listen(8888, () => {
  console.log("form-data上传文件服务器启动成功~");
});
