var express = require("express");
var router = express.Router();
var User = require("../controllers/User.Controller");

/**
 * @swagger
 * /all:
 *   get:
 *     summary: list user not archived
 *     description: return data for tab list user.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/all", User.index);

module.exports = router;