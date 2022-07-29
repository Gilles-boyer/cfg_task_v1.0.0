var express = require("express");
var router = express.Router();
const Caisse = require('../controllers/Caisse.Controle');

router.post("/create", Caisse.store);
router.get("/:id", Caisse.show);


module.exports = router;