const Koa = require("koa");
const multer = require("koa-multer");

const app = new Koa();
const upload = multer();

app.use(upload.any());

app.use((ctx, next) => {
  console.log(ctx.req.body);
  ctx.response.body = "Hello World";
});

app.listen(8888, () => {
  console.log("koa文件上传服务器启动成功~");
});
