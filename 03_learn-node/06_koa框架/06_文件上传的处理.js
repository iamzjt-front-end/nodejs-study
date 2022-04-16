const Koa = require("koa");
const Router = require("koa-router");
const multer = require("koa-multer");

const app = new Koa();
const uploadRouter = new Router({
  prefix: "upload",
});
const upload = multer({
  dest: "./uploads/",
});

uploadRouter.post("/avator", upload.single("avator"), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = "上传成功~";
});

app.use(uploadRouter.routes());

app.listen(8888, () => {
  console.log("koa文件上传服务器启动成功~");
});
