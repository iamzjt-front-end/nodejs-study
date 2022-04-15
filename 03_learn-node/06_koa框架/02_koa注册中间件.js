const Koa = require("koa");

const app = new Koa();

// use注册中间件
app.use((ctx, next) => {
  if (ctx.request.url === "/login") {
    if (ctx.request.method === "GET") {
      ctx.response.body = "Login Success~";
    }
  } else {
    ctx.response.body = "Other Request~";
  }
});

// 没有提供下面的注册方式
// methods方式:  app.get()  app.post()
// path方式:  app.use("/login", (ctx, next) => {})
// 连续注册中间件方式:  app.use((ctx, next) => {}, (ctx, next) => {})

app.listen(8888, () => {
  console.log("koa注册中间件服务器启动成功~");
});
