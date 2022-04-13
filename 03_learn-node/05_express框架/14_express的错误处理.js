const express = require("express");
const useRouter = require("./routers/users");

const app = express();

const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS";
const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS";

app.post("/login", (req, res, next) => {
  // 假如在数据库中未查询到用户名时，发现不存在，登录失败~
  const isLogin = false;
  if (isLogin) {
    res.json("user login success~");
  } else {
    // res.type(400);
    // res.json("username does not exists");
    next(new Error(USERNAME_DOES_NOT_EXISTS));
  }
});

app.post("/register", (req, res, next) => {
  // 假如在数据库中未查询到用户名时，发现用户已存在~
  const isRegister = true;
  if (isRegister) {
    res.json("user register success~");
  } else {
    // res.type(400);
    // res.json("username already exists");
    next(new Error(USERNAME_ALREADY_EXISTS));
  }
});

app.use((err, req, res, next) => {
  let status = 200;
  let message = "";

  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      status = 400;
      message = "username does not exists";
      break;
    case USERNAME_ALREADY_EXISTS:
      status = 400;
      message = "username already exists";
      break;
    default:
      break;
  }

  res.status(status);
  res.json({
    errCode: status,
    errMessage: message,
  });
});

app.listen(8888, () => {
  console.log("静态资源服务器启动成功~");
});
