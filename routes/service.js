var express = require("express");
var router = express.Router();
var Service = require("../controllers/Service.Controler");
var Validator = require("../controllers/Validator.Controller");

/**
 * @swagger
 * /store:
 *   post:
 *     parameters:
 *      - in: body
 *        name: service
 *        description: the service to create.
 *        schema:
 *          type: object
 *          required:
 *          - name
 *          - color
 *          - icon
 *          properties:
 *              name:
 *               type:string
 *              color:
 *               type:string
 *              icon:
 *               type:string
 *     summary: Create new service
 *     description: add new service in bdd and return new folder json
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post("/store", Validator.validateService, Service.store);

/**
 * @swagger
 * /all:
 *   get:
 *     summary: list service not archived
 *     description: return data for tab list service.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/all", Service.index);

module.exports = router;