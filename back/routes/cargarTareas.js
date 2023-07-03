const {Router}=require('express')
const router = Router()

const cargarTareas=require('../controllers/cargarTareas')

router.post('/cargarTareas',cargarTareas.cargarTareas)

module.exports=router