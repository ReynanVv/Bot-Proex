const mysql = require('mysql2');

// Config dotnev
require("dotenv").config();

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT
});

connection.connect((err) => {
    if (err) {
      console.error("CONNECT FAILED", err.code);
    } else console.log("CONNECTED");
  });
  
  module.exports = { connection };