const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  console.log("中间件被执行~");
});

app.listen(8888, () => {
  console.log("koa初体验服务器启动成功~");
});
