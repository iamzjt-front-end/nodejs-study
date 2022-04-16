const Koa = require("koa");
const koaStatic = require("koa-static");

const app = new Koa();

app.use(koaStatic("./build"));

app.listen(8888, () => {
  console.log("koa静态资源服务器启动成功~");
});
