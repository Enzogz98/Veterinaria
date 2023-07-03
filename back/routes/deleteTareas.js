const {Router}=require('express');
const router = Router ();

const deleteTareas=require('../controllers/deleteTareas');

router.post('/deleteTareas',deleteTareas.deleteTareas);

module.exports=router;
