var express = require("express");
var router = express.Router();
const Caisse = require('../controllers/Caisse.Controle');

router.post("/create", Caisse.store);
router.get("/:id", Caisse.show);
router.get("/", Caisse.index);
router.get("/valid/:id", Caisse.validCaisse);
router.get("/archive/data", Caisse.indexWithArchive);


module.exports = router;