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
        console.log('solicitud frontend-->')
        const query= 'SELECT * FROM usuario WHERE (nick=? OR email=?) AND pass=?'
        const rows= await queryDatabase(query, [nickEmail, nickEmail, pass])
        res.json(rows)
    }catch (error) {
        console.error("Error al realizar la consulta")
        res.status(500).json({error:'Error al realizar la consulta'})
    }
}
module.exports= {login}

