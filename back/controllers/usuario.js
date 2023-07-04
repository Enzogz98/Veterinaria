const {connection}= require('../db/configDb')

const queryDatabase=(query,values)=>{
    return new Promise((resolve, reject) => {
        connection.query(query,values, (error,rows) =>{
            if(error){
                reject(error)
            } else{
                resolve(rows)
                console.log("Respuesta base de datos --->", rows)
            }
        }) 
    })
}
const login =async (req,res) =>{
    try{
        const{nickEmail,pass}=req.body
        console.log('solicitud frontend-->',req.body)
        const query= 'SELECT * FROM usuario where ((nick =?) or (email=?)) and  pass= ? '
        const values=[nickEmail,nickEmail, pass]
        const rows= await queryDatabase(query,values)
        res.json(rows)
    }catch (error) {
        console.error("Error al realizar la consulta")
        res.status(500).json({error:'Error al realizar la consulta'})
    }
}


const mostrar = (req,res) =>{
    connection.query("SELECT * FROM usuario", (error,results)=>{
        if(error) throw(error)
        res.json(results);
    })

} 
module.exports={mostrar, login}