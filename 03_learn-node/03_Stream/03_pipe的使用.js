const fs = require("fs");

// 之前的写法
fs.readFile("./bar.txt", (err, data) => {
  fs.writeFile("./baz.txt", data, (err1, data1) => {
    console.log(err1);
  })
})

// Stream的写法
const reader = fs.createReadStream("./foo.txt");
const writer = fs.createWriteStream("./foz.txt");

reader.pipe(writer);