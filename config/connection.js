// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  // port: 3306,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "burgers_db"
  });
};
  
  //Connect to mySQL burgers_db.
  connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as ID: " + connection.threadId);
  });


module.exports = connection;