const {Router}=require('express')
const router= Router()

const {perfil,getPerfil}=require('../controllers/perfil')

router.get("/perfil/:id", getPerfil)
router.post('/perfil', perfil)

module.exports=router