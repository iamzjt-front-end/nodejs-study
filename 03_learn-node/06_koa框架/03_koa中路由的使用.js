const Koa = require("koa");
const userRouter = require("./router/user");

const app = new Koa();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8888, () => {
  console.log("koa路由服务器启动成功~");
});
