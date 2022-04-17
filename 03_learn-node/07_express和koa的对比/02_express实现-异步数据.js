const express = require("express");
const axios = require("axios");

const app = express();

const middleware1 = (req, res, next) => {
  req.message = "aaa";
  next();
  res.end(req.message);
};

const middleware2 = (req, res, next) => {
  req.message += "bbb";
  next();
};

const middleware3 = (req, res, next) => {
  axios.get("http://123.207.32.32:9001/lyric?id=167876").then((res) => {
    req.message += "ccc";
  });
};

app.use(middleware1, middleware2, middleware3);

app.listen(8888, (req, res, next) => {
  console.log("express服务器启动成功~");
});
