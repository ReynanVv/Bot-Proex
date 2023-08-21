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

// Exemplo de consulta ao banco de dados
connection.query('SELECT * FROM mensagens_bot', (error, results) => {
  if (error) throw error;
  console.log('Resultado:', results);
});
  
module.exports = { connection };