const mysql = require("mysql2");

// 1.创建连接池
const connenctionPool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "zjtmysql132",
  database: "coderhub",
  waitForConnections: "true",
  connectionLimit: 10,
  queueLimit: 0,
});

// 使用连接池
const statement = `
  SELECT * FROM products WHERE price > ? AND score > ?;
`;

connenctionPool.promise.execute(statement, [6000, 7], (err, results) => {
  console.log(results);
});
