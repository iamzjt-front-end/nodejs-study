const http = require("http");
const url = require("url");
const qs = require("querystring");

// 创建一个服务器
const serve = http.createServer((req, res) => {
  // 最基本的使用方式
  // if (req.url === "/login") {
  //   res.end("登录成功~");
  // } else if (req.url === "/users") {
  //   res.end("用户列表~");
  // } else {
  //   res.end("错误请求，请检查~")
  // }

  // console.log(req.url); // /login?userName=iamzjt&password=123

  // console.log(url.parse(req.url));

  const { pathname, query } = url.parse(req.url);
  if (pathname === "/login") {
    console.log(query);
    console.log(qs.parse(query));
    const { username, password } = qs.parse(query);
    console.log(username, password);
    res.end("请求成功~");
  }
})

// 启动服务器, 并且指定端口号和主机
serve.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});