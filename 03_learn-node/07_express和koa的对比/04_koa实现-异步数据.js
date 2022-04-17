const Koa = require("koa");
const axios = require("axios");

const app = new Koa();

const middleware1 = async (ctx, next) => {
  ctx.message = "aaa";
  await next();
  ctx.body = ctx.message;
};

const middleware2 = async (ctx, next) => {
  ctx.message += "bbb";
  await next();
};

const middleware3 = async (ctx, next) => {
  const res = await axios.get("http://123.207.32.32:9001/lyric?id=167876");
  ctx.message += "ccc";
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.listen(8888, (req, res, next) => {
  console.log("express服务器启动成功~");
});
