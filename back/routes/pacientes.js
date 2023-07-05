const {Router}=require('express')
const router = Router()
const {nuevoPaciente,mostrarPacientes,busqueda}=require('../controllers/pacientes')

router.get("/pacientes",mostrarPacientes)
router.post('/pacientes', nuevoPaciente)
router.get("/pacientes/:dato", busqueda)

module.exports=router