var express = require("express");
var router = express.Router();
var Task = require("../controllers/Task.Controller");
var Validator = require("../controllers/Validator.Controller");
var UserTask = require("../controllers/UserTask.Controler");

/**
 * @swagger
 * /all:
 *   get:
 *     summary: list task not archived
 *     description: return data for tab list task.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/all", Task.index);

/**
 * @swagger
 * /archived/:id:
 *   get:
 *     summary: archived task by id
 *     take params id and find task for archived
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/archived/:id", Validator.validateParamsId, Task.archived);

/**
 * @swagger
 * /delete/:id:
 *   get:
 *     summary: delete task by id
 *     take params id and find task for delete
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.delete("/delete/:id", Validator.validateParamsId, Task.delete);

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
router.post(
    "/create",
    Validator.validateTask,
    Task.store,
    UserTask.InsertManyUserTask,
    Task.showById,
    Task.returnResponse
);

router.put(
    "/update/:id",
    Validator.validateParamsId,
    Validator.validateTask,
    Task.showById,
    Task.update,
    UserTask.DeleteManyUserTask,
    UserTask.InsertManyUserTask,
    Task.showById,
    Task.returnResponse
);

module.exports = router;