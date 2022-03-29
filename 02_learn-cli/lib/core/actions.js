const { promisify } = require("util");

const download = promisify(require("download-git-repo"));

const createProjectAction = async (project) => {
  // 1. clone项目
  await download();
  // 2. 执行 npm install

  // 3. 运行 npm run serve

  // 4. 打开浏览器
  
};

module.exports = {
  createProjectAction,
};
