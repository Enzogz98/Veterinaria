const {Router}=require('express')
const router= Router()

const login= require('../controllers/login')
const perfil=require('../controllers/login')


router.post('/login', login.login)
router.post('/perfil', perfil.perfil)
module.exports=router