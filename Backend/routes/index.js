const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.get("/object", controllers.getAttacks);

router.get("/defense", controllers.getDefense);


router.post("/object", controllers.createAttack);

router.patch("/object/:id", controllers.updateAttack);

router.get("/defense/:id", controllers.getDefenseById);

router.get("/object/:id", controllers.getAttackById);

// router.delete("objects/:id", controllers.deleteAttack);

module.exports = router;

//routes in Back end= creating routes
//routes in front end = navigating components on screen