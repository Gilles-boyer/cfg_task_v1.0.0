var express = require("express");
var router = express.Router();
var ResaRally = require("../controllers/Rally.Controler");

router.get("/", ResaRally.index);
router.post("/store/resa", ResaRally.store);
router.post("/update/:id/pilote", ResaRally.addPilote);

module.exports = router;