const express = require("express");

const app = express();

app.use((req, res, next) => {
  if (req.headers["content-type"] === "application/json") {
    req.on("data", (data) => {
      console.log(data.toString());

      const info = JSON.parse(data.toString());
      req.body = {};
      Object.assign(req.body, info);
    })
  
    req.on("end", () => {
      res.end("登录成功~");
      next();
    })
  } else {
    next();
  }
});

// body-parse: express 3.x 内置到框架中
// body-parse: express 4.0 被分离出去
// body-parse: express 4.16.x 内置成函数

app.use(express.json());
// extended
// true: 那么对urlencoded进行解析时, 它使用的是第三方库: qs
// false: 那么对urlencoded进行解析时，它使用的是Node内置模块: querystring
app.use(express.urlencoded({ extended: true }));


app.post("/login", (req, res, next) => {
  console.log(req.body);
})

app.post("/products", (req, res, next) => {
  console.log(req.body);
})

app.listen(8888, () => {
  console.log("普通中间件服务器启动成功~");
})