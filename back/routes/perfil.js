const {Router}=require('express')
const router= Router()

const perfil=require('../controllers/perfil')
router.post('/perfil', perfil.perfil)

module.exports=router