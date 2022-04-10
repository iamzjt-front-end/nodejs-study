const http = require("http");

// 创建一个服务器
const server = http.createServer((req, res) => {
  // 响应结果
  res.write("响应结果一");
  res.end("Hello World");
})

// 启动服务器, 并且指定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});