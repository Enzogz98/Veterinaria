const {Router}=require('express')
const router= Router()
const {mostrar}=require('../controllers/usuario')
router.get('/usuario', mostrar)

module.exports=router