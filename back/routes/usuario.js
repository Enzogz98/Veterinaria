const {Router}=require('express')
const router= Router()
const {mostrar,login, nuevoUsuario,editarUsuario,eliminarUsuario}=require('../controllers/usuario')
router.get('/usuario', mostrar)
router.post('/usuario/login', login)
router.post('/usuario', nuevoUsuario)
router.put('/usuario', editarUsuario)
router.delete('/usuario/delete/:id', eliminarUsuario)

module.exports=router