const Koa = require("koa");

const app = new Koa();

const middleware1 = (ctx, next) => {
  ctx.message = "aaa";
  next();
  ctx.body = ctx.message;
};

const middleware2 = (ctx, next) => {
  ctx.message += "bbb";
  next();
};

const middleware3 = (ctx, next) => {
  ctx.message += "ccc";
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.listen(8888, (req, res, next) => {
  console.log("express服务器启动成功~");
});
