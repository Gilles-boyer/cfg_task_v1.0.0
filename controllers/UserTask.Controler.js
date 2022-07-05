const UserTask = require("../models/UserTask.model");

/**
 *@param next
 *@param res
 *@param req (req.body)
 *@return next for to go next function
 * verify if necessary delete all userTasks for a specific task
 * and if necessary delete all userTask for an one task
 */
module.exports.DeleteManyUserTask = (req, res, next) => {
    try {
        if (
            verifyEgalityUserTaskById(req.body.response.userTask, req.body.userTask)
        ) {
            if (req.body.response.userTask.length > 0) {
                req.body.response.userTask.forEach((data) => {
                    UserTask.findByIdAndDelete(data._id, (err, doc) => {
                        if (err) return res.status(500).send(err);
                    });
                });
            }
            req.body.insert = true;
        }
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
};

/**
 *@param usersTask1
 *@param usersTask2
 *@return {bool}
 * check if to tab it's same and return true if
 * it's different and false it's same
 */
var verifyEgalityUserTaskById = (userTask1, userTask2) => {
    if (userTask1.length === 0 || userTask2.length === 0) return true;
    if (userTask1.length != userTask2.length) {
        return true;
    }
    var result = false;
    userTask1.forEach((ut) => {
        var res = userTask2.filter((x) => {
            return x._id.includes(ut._id);
        });
        if (res == []) {
            result = true;
        }
    });
    return result;
};

/**
 *@param next
 *@param res
 *@param req (req.body et req.params)
 *@return next for to go next function
 * insert many userTask in bdd
 */
module.exports.InsertManyUserTask = (req, res, next) => {
    var command;

    if (req.body.update) {
        command = UserTask;
    }

    if (req.body.create) {
        command = UserTask.collection;
    }

    if (req.body.insert) {
        command.insertMany(
            configDataForUserTask(req.body.userTask, req.params.id),
            function(error) {
                if (error) return res.status(500).send(error);
            }
        );
    }
    next();
};

/**
 *@param usersTasks
 *@param taskId
 *@return {array} list  object for create new userTask
 * element for create many userTasks
 */
var configDataForUserTask = (userTask, taskId) => {
    var result = [];
    userTask.forEach((user) => {
        result.push({
            user: user.user._id,
            task: taskId,
        });
    });
    return result;
};