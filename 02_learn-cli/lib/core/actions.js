const { promisify } = require("util");

const download = promisify(require("download-git-repo"));
const open = require("open");

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../util/terminal");

// 1. 创建项目的action
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

// 2. 添加组件的action
const addCpnAction = (name, dest = "src/component") => {
  // 1. 有对应的ejs模版

  // 2. 编译ejs模版 result

  // 3. 将result写入到.vue文件中

  // 4. 放到对应的文件夹中

};

module.exports = {
  createProjectAction,
  addCpnAction,
};
