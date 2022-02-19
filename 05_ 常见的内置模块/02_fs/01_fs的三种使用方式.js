const fs = require("fs");

// 案例：读取文件的信息
const filepath = "./abc.txt";

// 1. 方式一：同步操作
const info = fs.statSync(filepath);
console.log("后续需要执行的代码");
console.log(info);

// 文件信息
// Stats {
//   dev: 16777232,
//   mode: 33188,
//   nlink: 1,
//   uid: 501,
//   gid: 20,
//   rdev: 0,
//   blksize: 4096,
//   ino: 9068827,
//   size: 22,
//   blocks: 8,
//   atimeMs: 1645111576820.8054,
//   mtimeMs: 1645111576467.2651,
//   ctimeMs: 1645111576467.2651,
//   birthtimeMs: 1645111558108.3196,
//   atime: 2022-02-17T15:26:16.821Z,
//   mtime: 2022-02-17T15:26:16.467Z,
//   ctime: 2022-02-17T15:26:16.467Z,
//   birthtime: 2022-02-17T15:25:58.108Z
// }
