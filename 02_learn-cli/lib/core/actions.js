const { promisify } = require("util");

const download = promisify(require("download-git-repo"));
const open = require("open");

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../util/terminal");

const createProjectAction = async (project) => {
  console.log("欢迎使用zjt 脚手架！😊");

  // 1. clone项目
  console.log("正在克隆项目，请稍候...");
  await download(vueRepo, project, { clone: true });

  // 2. 执行 npm install
  console.log("项目克隆完成，正在安装依赖，请稍候...");
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` });

  // 3. 运行 npm run serve
  console.log("依赖安装完成，正在启动项目，请稍候...");
  commandSpawn(command, ["run", "serve"], { cwd: `./${project}` });

  // 4. 打开浏览器
  open("http://localhost:8080");
};

const addCpnAction = () => {};

module.exports = {
  createProjectAction,
  addCpnAction,
};
