var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: process.env.DB_URL,
  database: "sql9610435",
  user: "sql9610435",
  password: process.env.DB_PASS,
});
connection.connect(function (err) {
  if (err) {
    console.error(`Error connecting: + err.stack`);
    return;
  }
});
// connection.query('SELECT * FROM users', function (error, results, fields) {
//     if (error)
//         throw error;
//     results.forEach(result => {
//     });
// });

module.exports = connection;
