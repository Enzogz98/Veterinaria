const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "veterinariaBD",
  });
  module.exports ={connection}

