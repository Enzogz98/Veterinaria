const {Router}=require("express");
const router=Router();

const {postVeterinarios,mostrarVeterinarios,deleteVeterinarios}=require("../controllers/veterinarios");

router.get("/veterinarios",mostrarVeterinarios);
router.post("/veterinarios",postVeterinarios);
router.delete("/veterinarios/:id",deleteVeterinarios);


module.exports=router;




