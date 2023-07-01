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
        const query= 'SELECT * FROM usuario where ((nick or email) =?) and pass=?;'
        const values=[nickEmail, pass]
        const rows= await queryDatabase(query,values)
        res.json(rows)
    }catch (error) {
        console.error("Error al realizar la consulta")
        res.status(500).json({error:'Error al realizar la consulta'})
    }
}

const perfil = async (req,res)=>{
    try{
        const {id_u}=req.body
        console.log('solicitud frontend -->',req.body)
        const query='select img,notas,colorHeader,background,ligthDark from perfil where id_user=?';
        const values=[id_u]
        const rows= await queryDatabase(query,values)
        res.json(rows)
    }catch (error) {
        console.error("Error al realizar la consulta")
        res.status(500).json({error:'Error al realizar la consulta'})
    }
}
module.exports= {login,perfil}

