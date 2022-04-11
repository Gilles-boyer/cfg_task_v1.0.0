var express = require('express');
var router = express.Router();
var { seeders } = require('../database/seeders/seed');
var { index } = require("../controllers/Folder.Controller");

//route create for seed
// router.get('/seed', seeders);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});





/////////////////////Folder Route/////////////////////////////
router.get('/folders', index);

//Level Route

//User Route

//Task Route

//UserTask Route

module.exports = router;