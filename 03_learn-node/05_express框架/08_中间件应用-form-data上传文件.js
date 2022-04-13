const path = require("path");

const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/");
  },
  filename: (req, file, cb) => {
    // 获取当前时间戳 + 源文件的后缀名
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  // dest: "./upload/",
  storage,
});

// 登录
app.post("/login", upload.any(), (req, res, next) => {
  console.log(req.body);
  res.end("登录成功~");
});

// 单个文件上传
app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.file);
  res.end("文件上传成功~");
});

// 多文件上传
app.post("/uploadFiles", upload.array("file"), (req, res, next) => {
  console.log(req.files);
  res.end("文件上传成功~");
});

app.listen(8888, () => {
  console.log("form-data上传文件服务器启动成功~");
});
