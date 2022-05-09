const Koa = require("koa");
const Router = require("koa-router");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const app = new Koa();

const testRouter = new Router();

// 非对称加密: 采用公钥和私钥的方式
const PRIVATE_KEY = fs.readFileSync("./keys/private.key");
const PUBLIC_KEY = fs.readFileSync("./keys/public.key");

// 模拟登录接口
testRouter.post("/test", (ctx, next) => {
  const user = { id: 110, name: "why" };
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 60 * 60,
    algorithm: "RS256",
  });

  ctx.body = token;
});

// 模拟登陆后其他请求接口
testRouter.get("/demo", (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  // 验证token
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    ctx.body = result;
  } catch (error) {
    ctx.body = "token是无效的~";
  }
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8686, () => {
  console.log("token测试服务器启动成功~");
});
