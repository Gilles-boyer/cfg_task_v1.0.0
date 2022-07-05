var express = require("express");
var router = express.Router();
var { seeders } = require("../database/seeders/seed");
var Folder = require("../controllers/Folder.Controller");
var User = require("../controllers/User.Controller");
var Task = require("../controllers/Task.Controller");
var Version = require("../controllers/Version.Controller");
var Email = require("../controllers/Email.Controler");
var Validator = require("../controllers/Validator.Controller");
var Token = require("../service/auth");

// /**
//  * @swagger
//  * /:
//  *   get:
//  *     summary: Test api work.
//  *     description: Check if api give a response 200.
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: string
//  */
// router.get("/", function(req, res, next) {
//     res.status(200).json("respond with a resource");
// });

// //////////////////////////////////////////Folder Route////////////////////////////////////////////////////////////////////

// /**
//  * @swagger
//  * /folders:
//  *   get:
//  *     summary: list folders with tasks not archived.
//  *     description: this routes give the element for to home screen app.
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  */
// router.get("/folders", Token.auth, Folder.index);

// /**
//  * @swagger
//  * /listfolder:
//  *   get:
//  *     summary: list folders not archived.
//  *     description: this routes give the element for to select app.
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  */
// router.get("/listfolder", Token.auth, Folder.listFolder);

// /**
//  * @swagger
//  * /folder/{id}/archived:
//  *   put:
//  *     parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        type: string
//  *        description: The folder mongo ID.
//  *     summary: Archived specific folder with id
//  *     description: take id and find folder for archived return confirmation
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.put(
//     "/folder/:id/archived",
//     Token.auth,
//     Validator.validateParamsId,
//     Folder.archived
// );

// /**
//  * @swagger
//  * /folder/{id}/delete:
//  *   delete:
//  *     parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        type: string
//  *        description: The folder mongo ID.
//  *     summary: delete specific folder and the dependance with FolderId
//  *     description: take id and find folder for delete and return confirmation
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.delete(
//     "/folder/:id/delete",
//     Token.auth,
//     Validator.validateParamsId,
//     Folder.delete
// );

// /**
//  * @swagger
//  * /folder/store:
//  *   post:
//  *     parameters:
//  *      - in: body
//  *        name: folder
//  *        description: the folder to create.
//  *        schema:
//  *          type: object
//  *          required:
//  *          - label
//  *          properties:
//  *              label:
//  *               type:string
//  *     summary: Create new folder
//  *     description: add new folder in bdd and return new folder json
//  *     responses:
//  *       201:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.post(
//     "/folder/store",
//     Token.auth,
//     Validator.validateFolder,
//     Folder.store
// );

// /**
//  * @swagger
//  * /folders/archived:
//  *   get:
//  *     summary: list folders archived.
//  *     description: this routes give the element view archived.
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  */
// router.get("/folders/archived", Token.auth, Folder.archiveList);

// //////////////////////////////////////////Level Route//////////////////////////////////////////

// ///////////////////////////////////////////////////////User Route///////////////////////////////////////////////
// /**
//  * @swagger
//  *  components:
//  *      schema:
//  *          userLogin:
//  *              type: object
//  *              properties:
//  *                  email:
//  *                      type: string
//  *                  password:
//  *                      type: string
//  */
// /**
//  * @swagger
//  *  components:
//  *      schema:
//  *          users:
//  *              type: object
//  *              properties:
//  *                  lastName:
//  *                      type: string
//  *                  firstName:
//  *                      type: string
//  *                  email:
//  *                      type: string
//  */
// /**
//  * @swagger
//  *  components:
//  *      schema:
//  *          userResetPassword:
//  *              type: object
//  *              properties:
//  *                  password:
//  *                      type: string
//  */

// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     summary: list users with tasks not archived.
//  *     description: give list user in Bdd
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  */
// router.get("/users", Token.auth, User.index);

// /**
//  * @swagger
//  * /user/auth:
//  *   get:
//  *     summary: check if user connected
//  *     description: check if user connected and return the user
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.get("/user/auth", Token.auth, User.auth);

// /**
//  * @swagger
//  * /user/login:
//  *   post:
//  *     summary: login
//  *     description: login and return token if great
//  *     requestBody:
//  *       content:
//  *         application/json:
//  *           schema:
//  *              $ref: '#components/schema/userLogin'
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.post("/user/login", Validator.validateLogin, User.login);

// /**
//  * @swagger
//  * /user/list:
//  *   get:
//  *     summary: list user for filter
//  *     description: give information pour filter
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.get("/user/list", Token.auth, User.listUser);

// /**
//  * @swagger
//  * /user/store:
//  *   post:
//  *     summary: create user
//  *     description: add new user in bdd and return new user
//  *     requestBody:
//  *       content:
//  *         application/json:
//  *           schema:
//  *              $ref: '#components/schema/users'
//  *     responses:
//  *       201:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.post("/user/store", Token.auth, Validator.validateUser, User.store);

// /**
//  * @swagger
//  * /user/reset/password:
//  *   put:
//  *     summary: update  password
//  *     description: take information user with token and reset password
//  *     requestBody:
//  *       content:
//  *         application/json:
//  *           schema:
//  *              $ref: '#components/schema/userResetPassword'
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.put(
//     "/user/reset/password",
//     Token.auth,
//     Validator.validatePassword,
//     User.userResetPassword
// );

// /**
//  * @swagger
//  * /user/{id}/update:
//  *   put:
//  *     parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        type: string
//  *        description: The user mongo ID.
//  *     requestBody:
//  *       content:
//  *         application/json:
//  *           schema:
//  *              $ref: '#components/schema/users'
//  *     summary: Update user with Id
//  *     description: update specific user with id in bdd and return user json
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.put(
//     "/user/:id/update",
//     Token.auth,
//     Validator.validateBodyId,
//     Validator.validateBodyAdmin,
//     Validator.validateUser,
//     User.update
// );

// /**
//  * @swagger
//  * /user/{id}/delete:
//  *   delete:
//  *     parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        type: string
//  *        description: The user mongo ID.
//  *     summary: delete specific user by id
//  *     description: take id and find user for delete and return confirmation
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.delete(
//     "/user/:id/delete",
//     Token.auth,
//     Validator.validateParamsId,
//     User.delete
// );

// /**
//  * @swagger
//  * /user/:id/reset/password:
//  *   get:
//  *     parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        type: string
//  *        description: userId
//  *     summary: Send email for reset password
//  *     description: with id in req.param.id find user and set link for reset password
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.get(
//     "/user/:id/reset/password",
//     Token.auth,
//     Validator.validateParamsId,
//     User.resetPassword
// );

// /////////////////////Task Route/////////////////////////////

// /**
//  * @swagger
//  *  components:
//  *      schema:
//  *          tasks:
//  *              type: object
//  *              properties:
//  *                  title:
//  *                      type: string
//  *                  level:
//  *                      type: levelId
//  *                  users:
//  *                      type: [array userId]
//  *                  folder:
//  *                      type: folderId
//  */

// /**
//  * @swagger
//  * /task/add:
//  *   post:
//  *     parameters:
//  *     requestBody:
//  *       content:
//  *         application/json:
//  *           schema:
//  *              $ref: '#components/schema/tasks'
//  *     summary: Create new task
//  *     description: add new task in bdd and return new task json
//  *     responses:
//  *       201:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.post(
//     "/task/add",
//     Token.auth,
//     Validator.validateTaskFolder,
//     Validator.validateTask,
//     Task.store
// );

// /**
//  * @swagger
//  * /task/{id}/update:
//  *   put:
//  *     parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        type: string
//  *        description: The task mongo ID.
//  *     requestBody:
//  *       content:
//  *         application/json:
//  *           schema:
//  *              $ref: '#components/schema/tasks'
//  *     summary: Update level with Id
//  *     description: update specific task with id in bdd and return task json
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.put(
//     "/task/:id/update",
//     Token.auth,
//     Validator.validateParamsId,
//     Validator.validateTask,
//     Task.update
// );

// /**
//  * @swagger
//  * /task/{id}/archived:
//  *   put:
//  *     parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        type: string
//  *        description: The task mongo ID.
//  *     summary: archived level with Id
//  *     description: archived specific task with id in bdd and return task json
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.put(
//     "/task/:id/archived",
//     Token.auth,
//     Validator.validateParamsId,
//     Task.archived
// );

// /**
//  * @swagger
//  * /task/{id}/delete:
//  *   delete:
//  *     parameters:
//  *      - in: path
//  *        name: id
//  *        required: true
//  *        type: string
//  *        description: The task mongo ID.
//  *     summary: delete specific task
//  *     description: take id and find task for delete and return confirmation
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.delete(
//     "/task/:id/delete",
//     Token.auth,
//     Validator.validateParamsId,
//     Task.delete
// );

// ///////////////////////////////////////////////Version Route////////////////////////////////////////////////////

// /**
//  * @swagger
//  * /version/{version}:
//  *   get:
//  *     parameters:
//  *      - in: path
//  *        name: version
//  *        required: true
//  *        type: string
//  *        description: The version number.
//  *     summary: get version and compare
//  *     description: take front version and compare with version bdd for to know if have modification
//  *     responses:
//  *       200:
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  */
// router.get("/version/:version", Token.auth, Version.verifyVersion);

module.exports = router;