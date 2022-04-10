const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/upload") {
    if (req.method === "POST") {
      const fileWriter = fs.createWriteStream("./foo.png", { flag: "a+" });
      // req.pipe(fileWriter);

      req.on("data", (data) => {
        // console.log(data);
        // fileWriter.write(data);
      })

      req.on("end", () => {
        console.log("文件上传成功~");
        res.end("文件上传成功~");
      })
    }
  }
});

server.listen(8888, () => {
  console.log("文件上传服务器开启成功~");
});
