const {connection}=require('../db/configDb');
const queryDatabase=(query,values)=>{
    return new Promise ((resolve,reject)=>{
        connection.query(query,values,(error,rows)=>{
            if(error){
                reject(error)
            }else {
                resolve(rows)
                console.log("Respuesta base de datos --->",rows)
            }
        })
    })
};

const deleteTareas = async (req,res) =>{
    try {
        const {idTarea}=req.body;
        console.log("solicitud Frontend -->",req.body);
        const query="delete from tareas where id=?";
        const values= [idTarea];
        const rows = await queryDatabase(query,values);
        res.status(200).json(rows)
    } catch (error) {
        console.error("Error al realizar la consulta")
        res.status(500).json({
            error:"Error al realizar la consulta"
        })
    }
}

module.exports= {deleteTareas}