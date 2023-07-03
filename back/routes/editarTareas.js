const {Router}=require('express')
const router = Router()

const editarTareas=require('../controllers/editarTareas');

router.put('/editarTareas',editarTareas.editarTareas);

module.exports=router