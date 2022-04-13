const express = require("express");

const app = express();

app.get("/products/:id/:name", (req, res, next) => {
  console.log(req.params);
  // req.params  在数据中查询真实的商品数据
  res.end("商品的详情数据~");
});

app.get("/login", (req, res, next) => {
  console.log(req.query);

  // res.type = "application/json";
  // res.end(JSON.stringify({ name: "iamzjt", age: 18 }));

  // res.json({ name: "iamzjt", age: 18 });
  res.json(["a", "b", "c"]);
});

/**
 * 举个栗子:
 *    请求所有的用户信息: get     /users
 *    请求某一个用户信息: post    /users/:id
 *    增加某一个用户信息: post    /users       body  { username: '', password: '' }
 *    修改某一个用户信息: put     /users/:id   body  { username: '', password: '' }
 *    删除某一个用户信息: delete  /users/:id
 */

app.listen(8888, () => {
  console.log("response响应结果服务器启动成功~");
});
