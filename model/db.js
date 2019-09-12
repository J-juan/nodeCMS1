var mysql = require("mysql");
let db = {};

db.insert = function(connection, sql, paras) {
  return new Promise((resolve, reject) => {
    connection.query(sql, paras, (error, results, fields) => {
      if (error) throw reject(error);
      resolve(results);
    });
  });
};
db.close = function(connection) {
  connection.end(function(err) {
    if (err) {
      return;
    } else {
      console.log("关闭连接");
    }
  });
};
db.connection = function() {
  let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "raysync-website",
    port: 3306
  });
  return connection;
};
// db.connection = Util.promisify(db.connection)
module.exports = db;
