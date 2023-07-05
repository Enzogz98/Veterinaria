const {Router}=require('express')
const router= Router()
const {mostrarTurnos} = require('../controllers/turnos')

router.get('/turnos', mostrarTurnos)
router.put('/turnos', )
router.post('/turnos', )
router.delete('/turnos/delete/:id')


module.exports = router