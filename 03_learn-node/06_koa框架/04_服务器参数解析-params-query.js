const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const userRouter = new Router({
  prefix: "/users",
});

// params
userRouter.get("/:id", (ctx, next) => {
  // console.log(ctx.request.url);
  console.log(ctx.request.params);
});

// query
userRouter.get("/", (ctx, next) => {
  // console.log(ctx.request.url);
  console.log(ctx.request.query);
});

// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.request.query);
//   console.log(ctx.request.params);
// });

app.use(userRouter.routes());

app.listen(8888, () => {
  console.log("koa路由服务器启动成功~");
});
