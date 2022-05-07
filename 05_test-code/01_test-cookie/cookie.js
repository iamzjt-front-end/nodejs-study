const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const testRouter = new Router();

// 模拟登录接口
testRouter.get("/test", (ctx, next) => {
  ctx.cookies.set("name", "lilei", {
    maxAge: 50 * 1000, // 此处maxAge对应的是毫秒
  });

  ctx.body = "test";
});

// 模拟登陆后其他请求接口
testRouter.get("/demo", (ctx, next) => {
  // 读取cookie
  const value = ctx.cookies.get("name");
  ctx.body = "您的cookie是" + value;
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8686, () => {
  console.log("cookie测试服务器启动成功~");
});
