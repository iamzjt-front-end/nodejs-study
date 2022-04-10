const http = require("http");

const server1 = http.createServer((req, res) => {
  res.end("Server1");
})

server1.listen(8000, () => {
  console.log("serve1启动成功~");
});

// const server2 = http.createServer((req, res) => {
//   res.end("Server2");
// })

const server2 = new http.Server((req, res) => {
  res.end("Server2");
});

// server2.listen(8001, () => {
//   console.log("server2启动成功~");
// });

server2.listen(8001, () => {
  console.log("serve2启动成功~");
  // console.log(server2.address().port);
});