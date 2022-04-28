const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("coderhub", "root", "zjtmysql132", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功~");
  })
  .catch((err) => {
    console.log("数据库连接失败", err);
  });
