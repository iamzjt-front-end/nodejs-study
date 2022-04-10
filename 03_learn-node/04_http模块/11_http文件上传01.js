const http = require("http");

const server = http
  .createServer((req, res) => {})
  .listen(8888, "0.0.0.0", () => {});
