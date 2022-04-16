const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  // ctx.response.body = "Hello World~";
  // ctx.response.body = {
  //   name: "iamzjt",
  //   age: "18",
  // };
  // 设置状态码
  // ctx.response.status = 400;
  // ctx.response.body = ["abc", "cba", "nba"];

  ctx.status = 400;
  ctx.body = "Hello Koa~";
});

app.listen(8888, () => {
  console.log("koa相应内容服务器启动成功~");
});
