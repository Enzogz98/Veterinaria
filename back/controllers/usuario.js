const {connection}= require('../db/configDb')

const mostrar = (req,res) =>{
    connection.query("CALL pa_verUsuario()", (error,results)=>{
        if(error) throw(error)
        res.json(results);
    })

} 
module.exports={mostrar}