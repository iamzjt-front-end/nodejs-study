const { promisify } = require("util");

const download = promisify(require("download-git-repo"));
const { vueRepo } = require("../config/repo-config");

const { commandSpawn } = require("../util/terminal");

const createProjectAction = async (project) => {
  // 1. clone项目
  await download(vueRepo, project, { clone: true });

  // 2. 执行 npm install
  await commandSpawn("npm", ["install"], { cwd: `./${project}` });

  // 3. 运行 npm run serve

  // 4. 打开浏览器
};

module.exports = {
  createProjectAction,
};
