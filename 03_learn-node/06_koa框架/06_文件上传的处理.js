const path = require("path");

const Koa = require("koa");
const Router = require("koa-router");
const multer = require("koa-multer");

const app = new Koa();
const uploadRouter = new Router({
  prefix: "/upload",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    // 获取当前时间戳 + 源文件的后缀名
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
});

uploadRouter.post("/avator", upload.single("avator"), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = "上传成功~";
});

app.use(uploadRouter.routes());

app.listen(8888, () => {
  console.log("koa文件上传服务器启动成功~");
});
