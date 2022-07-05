var express = require("express");
var router = express.Router();
var Folder = require("../controllers/Folder.Controller");
var Task = require("../controllers/Task.Controller");
var Validator = require("../controllers/Validator.Controller");

/**
 * @swagger
 * /all:
 *   get:
 *     summary: list folder not archived
 *     description: return data for tab list folder.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/all", Folder.index);

/**
 * @swagger
 * /all/archived:
 *   get:
 *     summary: list folder archived
 *     description: return data for tab list folder archived.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/all/archived", Folder.archiveList);

/**
 * @swagger
 * /archived/:id:
 *   get:
 *     summary: archived folder and all task for this folder
 *     description: return message , take params id
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get(
    "/archived/:id",
    Validator.validateParamsId,
    Task.updateManyTaskToArchived,
    Folder.archived
);

/**
 * @swagger
 * /create:
 *   post:
 *     parameters:
 *      - in: body
 *        name: task
 *        description: the task to create.
 *        schema:
 *          type: object
 *          required:
 *          - title
 *          - dateLimit
 *          - service
 *          - folder
 *          - userTask
 *          properties:
 *              title:
 *               type:string
 *              dateLimit:
 *               type:date
 *              service:
 *                type:ObjectId
 *              folder:
 *                type:ObjectId
 *              userTask:
 *                 type:array
 *     summary: Create new task
 *     description: add new task in bdd and return new task json
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post("/create", Validator.validateFolder, Folder.store);

module.exports = router;