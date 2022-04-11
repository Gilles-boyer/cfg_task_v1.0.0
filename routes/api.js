var express = require('express');
var router = express.Router();
var { seeders } = require('../database/seeders/seed');
const bcrypt = require('bcrypt');



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/seed', seeders);
router.get('/test', (req, res, next) => {
    res.json(bcrypt.hashSync('password', 12));
});

module.exports = router;