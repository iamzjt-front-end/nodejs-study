const mysql = require("mysql2");

// 1.创建数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "zjtmysql132",
  database: "coderhub",
});

// 2.执行sql语句
const statement = `
  SELECT * FROM products WHERE price > ? AND score > ?; 
`;

connection.execute(statement, [6000, 7], (err, results) => {
  console.log(results);
});
