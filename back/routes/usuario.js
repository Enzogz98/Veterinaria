const {Router}=require('express')
const router= Router()
const {mostrar,login, nuevoUsuario,editarUsuario,eliminarUsuario,mostrarUno}=require('../controllers/usuario')
router.get('/usuario', mostrar)
router.post('/usuario/login', login)
router.post('/usuario', nuevoUsuario)
router.put('/usuario', editarUsuario)
router.delete('/usuario/delete/:id', eliminarUsuario)
router.get('/usuario/:id', mostrarUno)

module.exports=router