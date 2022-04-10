const http = require("http");
const url = require("url");
const qs = require("querystring");

// 创建一个服务器
const serve = http.createServer((req, res) => {
  console.log(req.headers);

  res.end("Hello Serve");
})

// 启动服务器, 并且指定端口号和主机
serve.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});