const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "veterinariaBD",
});

app.listen(3000, () => {
  console.log("Servidor Iniciado en el puerto 3000");
});

app.get("/", (req, res) => {
  console.log("Escuchando puerto 3000");
  res.json("todo ok");
});

app.post("/login", (req, res) => {
  const nickEmail = req.body.nickEmail;
  const pass = req.body.pass;
  console.log(req.body.nickEmail, req.body.pass);
  db.query(
    " select nombre,apellido from usuario where ((nick or email) =? ) and pass=? ",
    [nickEmail, pass],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});
