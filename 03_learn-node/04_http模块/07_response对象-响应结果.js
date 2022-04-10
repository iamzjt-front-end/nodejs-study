const http = require("http");

// 创建一个服务器
const serve = http.createServer((req, res) => {
  // 响应结果
  res.write("响应结果一");
  res.end();
})

// 启动服务器, 并且指定端口号和主机
serve.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});