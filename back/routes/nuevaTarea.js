const {Router}=require('express')
const router = Router()

const nuevaTarea=require('../controllers/nuevaTarea')

router.post('/nuevaTarea',nuevaTarea.nuevaTarea)

module.exports=router


