const {Router}=require('express')
const router= Router()
const {mostrar,login}=require('../controllers/usuario')
router.get('/usuario', mostrar)
router.post('/usuario/login', login)

module.exports=router