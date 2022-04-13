const express = require("express");
const useRouter = require("./routers/users");

const app = express();

app.use(express.static("./build"));

app.listen(8888, () => {
  console.log("静态资源服务器启动成功~");
});
