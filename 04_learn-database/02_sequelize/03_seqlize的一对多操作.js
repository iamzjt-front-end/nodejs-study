const { Sequelize, DataTypes, Model, Op } = require("sequelize");

const sequelize = new Sequelize("coderhub", "root", "zjtmysql132", {
  host: "localhost",
  dialect: "mysql",
});

class Brand extends Model {}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Brand",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

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
    brandId: {
      field: "brand_id",
      type: DataTypes.INTEGER,
      references: {
        model: Brand,
        key: "id",
      },
    },
  },
  {
    tableName: "products",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

// 将两张表联系在一起
Products.belongsTo(Brand, {
  foreignKey: "brandId",
});

async function queryProducts() {
  const result = await Products.findAll({
    include: {
      model: Brand,
    },
  });
  console.log(result);
}

queryProducts();
