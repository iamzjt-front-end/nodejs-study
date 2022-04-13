const express = require("express");
const useRouter = require("./routers/users");

const app = express();

app.use("/users", useRouter);

app.listen(8888, () => {
  console.log("router服务器启动成功~");
});
