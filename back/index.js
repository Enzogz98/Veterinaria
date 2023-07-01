const express = require("express");
const app = express();
const {connection}= require('./db/configDb')
const cors = require("cors");
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor Iniciado en el puerto 3000");
});
connection.connect((error) => {
  if ( error) throw error;
  console.log("Conexion establecida con la Base de Datos")
  
  });

app.get("/", (req, res) => {
  console.log("Escuchando puerto 3000");
  res.json("todo ok");
});

 
app.post("/login", async (req, res) => {
  try{
    const{nickEmail, pass}=req.body;
    const query='SELECT * FROM usuario WHERE (nick=? OR email=?) AND pass=?'
    const rows= await queryDatabase(query, [nickEmail,nickEmail,pass])
    res.json(rows);
  }catch(error) {
    console.error('Error al realizar la consulta: ', error)
    res.status(500).json({error:'Error al realizar la consulta'})
  }
  // const nickEmail = req.body.nickEmail;
  // const pass = req.body.pass;
  // connection.query(
  //   "SELECT nick, email, pass FROM usuario WHERE (nick = ? OR email = ?) AND pass = ?",
  //   [nickEmail, nickEmail, pass],
  //   (error, results) => {
  //     if (error) {
  //       console.log(error);
  //       res.status(500).json({ error: "Ocurrió un error en el servidor" });
  //     } else {
  //       res.json(results[0]);
  //     }
  //   }
  // )
});

const queryDatabase = (query, values) => {
  return new Promise((resolve, reject) =>{
    connection.query(query,values,(error,rows)=>{
      if(error){
        reject(error)
      }else{
        resolve(rows)
      }
    })
  })
}
