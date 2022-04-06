const message = "你好啊";

// 1. 编解码相同
// 对中文进行编码: utf8
// const buffer = Buffer.from(message);
// console.log(buffer); // <Buffer e4 bd a0 e5 a5 bd e5 95 8a>

// 对字节进行解码: utf8
// console.log(buffer.toString()); // 你好啊

// 2. 编解码不同
// 对中文进行编码: utf16le
const buffer = Buffer.from(message, "utf16le");
console.log(buffer); // <Buffer 60 4f 7d 59 4a 55>

// 对字节进行解码: utf8
console.log(buffer.toString()); // `O}YJU
console.log(buffer.toString("utf16le")); // 你好啊