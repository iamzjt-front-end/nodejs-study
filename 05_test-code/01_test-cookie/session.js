const Koa = require("koa");
const Router = require("koa-router");
const Session = require("koa-session");

const app = new Koa();

const testRouter = new Router();

// 创建session配置
const session = Session(
  {
    key: "sessionid",
    maxAge: 50 * 1000,
    signed: true, // 是否使用加密签名
  },
  app
);

app.keys = ["abc"];
app.use(session);

// 模拟登录接口
testRouter.get("/test", (ctx, next) => {
  // ctx.cookies.set("name", "lilei", {
  //   maxAge: 50 * 1000, // 此处maxAge对应的是毫秒
  // });

  const id = 110;
  const name = "coderwhy";

  ctx.session.user = { id, name };

  ctx.body = "test";
});

// 模拟登陆后其他请求接口
testRouter.get("/demo", (ctx, next) => {
  // 读取cookie
  // const value = ctx.cookies.get("name");

  // ctx.body = "您的cookie是" + value;

  ctx.body = ctx.session.user;
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8686, () => {
  console.log("session测试服务器启动成功~");
});
