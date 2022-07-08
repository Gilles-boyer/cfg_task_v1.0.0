var express = require("express");
var router = express.Router();
var ResaRally = require("../controllers/Rally.Controler");

router.get("/", ResaRally.index);
router.post("/store/resa", ResaRally.store);
router.get("/update/pilote", ResaRally.addPilote);
router.get("/update/session/pilote/:id", ResaRally.updateSession);

module.exports = router;