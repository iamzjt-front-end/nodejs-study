const http = require("http");

const serve1 = http.createServer((req, res) => {
  res.end("Serve1");
})

serve1.listen(8000, () => {
  console.log("serve1启动成功~");
});

// const serve2 = http.createServer((req, res) => {
//   res.end("Serve2");
// })

const serve2 = new http.Server((req, res) => {
  res.end("Serve2");
});

// serve2.listen(8001, () => {
//   console.log("serve2启动成功~");
// });

serve2.listen(8000, () => {
  console.log("serve2启动成功~");
  // console.log(serve2.address().port);
});