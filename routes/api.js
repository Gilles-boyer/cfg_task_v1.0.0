var express = require("express");
var router = express.Router();
var { seeders } = require("../database/seeders/seed");
var Folder = require("../controllers/Folder.Controller");
var Level = require("../controllers/Level.Controller");
var User = require("../controllers/User.Controller");
var Task = require("../controllers/Task.Controller");
var Version = require("../controllers/Version.Controller");
var Email = require("../controllers/Email.Controler");
var Validator = require("../controllers/Validator.Controller");
var Token = require("../service/auth");

/**
 * @swagger
 * /:
 *   get:
 *     summary: Test api work.
 *     description: Check if api give a response 200.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.get("/", function(req, res, next) {
    res.status(200).json("respond with a resource");
});

/////////////////////Folder Route/////////////////////////////
router.get("/folders", Token.auth, Folder.index);
router.get("/listfolder", Token.auth, Folder.listFolder);
router.get(
    "/folder/:id/archived",
    Token.auth,
    Validator.validateParamsId,
    Folder.archived
);
router.get(
    "/folder/:id/delete",
    Token.auth,
    Validator.validateParamsId,
    Folder.delete
);
router.post(
    "/folder/store",
    Token.auth,
    Validator.validateFolder,
    Folder.store
);
router.get("/folders/archived", Token.auth, Folder.archiveList);

/////////////////////Level Route/////////////////////////////
router.get("/levels", Token.auth, Level.index);
router.post("/level/store", Token.auth, Validator.validateLevel, Level.store);
router.post(
    "/level/update",
    Token.auth,
    Validator.validateBodyId,
    Validator.validateLevel,
    Level.update
);
router.get(
    "/level/:id/delete",
    Token.auth,
    Validator.validateParamsId,
    Level.archived
);

/////////////////////User Route/////////////////////////////
router.get("/users", Token.auth, User.index);
router.get("/user/auth", Token.auth, User.test);
router.post("/user/login", Validator.validateLogin, User.login);
router.get("/user/list", Token.auth, User.listUser);
router.post("/user/store", Token.auth, Validator.validateUser, User.store);
router.post(
    "/user/reset/password",
    Token.auth,
    Validator.validatePassword,
    User.userResetPassword
);
router.put(
    "/user/update",
    Token.auth,
    Validator.validateBodyId,
    Validator.validateBodyAdmin,
    Validator.validateUser,
    User.update
);
router.get(
    "/user/:id/delete",
    Token.auth,
    Validator.validateParamsId,
    User.delete
);
router.get(
    "/user/:id/reset/password",
    Token.auth,
    Validator.validateParamsId,
    User.resetPassword
);

/////////////////////Task Route/////////////////////////////
router.post(
    "/task/add",
    Token.auth,
    Validator.validateTaskFolder,
    Validator.validateTask,
    Task.store
);
router.put(
    "/task/update",
    Token.auth,
    Validator.validateBodyID,
    Validator.validateTask,
    Task.update
);
router.get(
    "/task/:id/archived",
    Token.auth,
    Validator.validateParamsId,
    Task.archived
);
router.get(
    "/task/:id/delete",
    Token.auth,
    Validator.validateParamsId,
    Task.delete
);

/////////////////////Version Route/////////////////////////////7
router.get("/version/:version", Token.auth, Version.verifyVersion);

//UserTask Route

module.exports = router;