const http = require("http");
const url = require("url");
const qs = require("querystring");

// 创建一个服务器
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/login") {
    if (req.method === "POST") {
      // 拿到body中的数据
      // console.log(req.body); // 拿不到body
      req.setEncoding("utf-8");
      req.on("data", (data) => {
        // console.log(data, typeof data);
        // console.log(JSON.parse(data));
        const { username, password } = JSON.parse(data);
        console.log(username, password);
      });
      res.end("Hello World");
    }
  }
});

// 启动服务器, 并且指定端口号和主机
server.listen(8888, "0.0.0.0", () => {
  console.log("服务器启动成功~");
});
