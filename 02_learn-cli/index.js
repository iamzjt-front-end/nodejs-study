#!/usr/bin/env node

const program = require("commander");

// 查看版本号
program.version(require("./package.json").version);

// 增加自己的options
program.option("-z --zjt", "a zjt cli");
program.option(
  "-d --dest <dest>",
  "a destination folder, 例如：-d /src/components"
);

program.on("--help", function () {
  console.log("Others:");
  console.log("  other options~");
});

program.parse(process.argv);

console.log(program.opts().dest);
