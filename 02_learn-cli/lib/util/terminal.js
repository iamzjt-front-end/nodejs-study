/**
 * 执行终端命令相关的代码
 */

const { spawn } = require("child_process");

const commandSpawn = (...args) => {
  const childProcess = spawn(...args);
};

module.exports = {
  commandSpawn,
};
