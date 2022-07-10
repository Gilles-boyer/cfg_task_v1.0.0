var express = require("express");
var router = express.Router();
var ResaRally = require("../controllers/Rally.Controler");

router.get("/", ResaRally.index);
router.post("/store/resa", ResaRally.store);
router.post("/update/resa", ResaRally.update);
router.get("/update/pilote", ResaRally.addPilote);
router.get("/update/session/pilote/:id", ResaRally.updateSession);
router.get("/delete/resa/:id", ResaRally.deleteSession);
router.post("/store/pilote", ResaRally.addPiloteAdmin);
router.post("/update/pilote/admin", ResaRally.updatePilote);
router.get("/delete/pilote/:id", ResaRally.deletePilote);

module.exports = router;