const { Sequelize, DataTypes, Model, Op } = require("sequelize");

const sequelize = new Sequelize("coderhub", "root", "zjtmysql132", {
	host: "localhost",
	dialect: "mysql",
});

async function queryProducts() {}

queryProducts();
