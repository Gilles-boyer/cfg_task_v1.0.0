var express = require('express');
var router = express.Router();
var { seeders } = require('../database/seeders/seed');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/seed', seeders);

module.exports = router;