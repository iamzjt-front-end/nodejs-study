const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/upload") {
    if (req.method === "POST") {
      // 图片必须设置为二进制的
      req.setEncoding("binary");

      let body = "";
      const boundary = req.headers["content-type"].split(";")[1].replace(" boundary=", "");
      // console.log(boundary);

      req.on("data", (data) => {
        body += data;
        let progress = `上传进度：${body.length / req.headers["content-length"] * 100}%`;
        console.log(progress);
      });

      req.on("end", () => {
        // console.log(body);
        // 处理body
        // 1. 获取image/png的位置
        const payload = qs.parse(body, "\r\n", ": ");
        const type = payload["Content-Type"];

        // 2. 开始在image/png的位置进行截取
        const typeIndex = body.indexOf(type);
        const typeLength = type.length;
        let imageData = body.substring(typeIndex + typeLength);

        // 3. 将中间的两个空格去掉
        imageData = imageData.replace(/^\s\s*/, "");

        // 4. 将最后的boundary去除掉
        imageData = imageData.substring(0, imageData.indexOf(`\r\n--${boundary}--\r\n`));

        fs.writeFile("./foo.png", imageData, "binary", (err) => {
          if (!err) {
            res.end("文件上传成功~");
          }
        });
      });
    }
  }
});

server.listen(8888, () => {
  console.log("文件上传服务器开启成功~");
});
