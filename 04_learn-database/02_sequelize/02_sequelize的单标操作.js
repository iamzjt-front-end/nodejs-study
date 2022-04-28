const { Sequelize, DataTypes, Model, Op } = require("sequelize");

const sequelize = new Sequelize("coderhub", "root", "zjtmysql132", {
  host: "localhost",
  dialect: "mysql",
});

class Products extends Model {}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE,
  },
  {
    tableName: "products",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

async function queryProducts() {
  // 1.查询products表中所有的内容
  // const result = await Products.findAll({
  //   where: {
  //     price: {
  //       [Op.gte]: 5000, // gt >, gte >=, lt <,  lte <=
  //     },
  //   },
  // });
  // console.log(result);
  // 2.插入数据
  // const result = await Products.create({
  //   title: "三星Nova",
  //   price: 8888,
  //   score: 5.5,
  // });
  // console.log(result);
  // 3.更新数据
  const result = await Products.update(
    {
      price: 3688,
    },
    {
      where: {
        id: 1,
      },
    }
  );
  console.log(result);
}

queryProducts();
