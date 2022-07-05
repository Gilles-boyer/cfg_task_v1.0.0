const Task = require("../models/Task.Model");
const {
    configMultiTask,
    configDataTask,
} = require("../Collections/TaskCollection");
const UserTask = require("../models/UserTask.model");
const Folder = require("../models/Folder.Model");
const Version = require("../controllers/Version.Controller");
const modelPopulate = [
    { path: "service" },
    { path: "folder" },
    {
        path: "Users",
        populate: {
            path: "user",
        },
    },
];

/**
 *@param res
 *@return {Array} list object task not archived
 * return list task with all data and if error return statut 500 with error
 */
module.exports.index = (req, res) => {
    Task.find({ archived: false })
        .populate(modelPopulate)
        .then((tasks) => res.status(200).json(configMultiTask(tasks)))
        .catch((err) => console.log(err));
};

/**
 *@param req.params.id
 *@param next
 *@return next for to go to next function
 * find task by id and set req.body.response with task
 * or if error return error
 */
module.exports.showById = (req, res, next) => {
    Task.findById(req.params.id)
        .populate(modelPopulate)
        .then((result) => {
            req.body.response = configDataTask(result);
            next();
        })
        .catch((errors) => console.log(errors));
};

/**
 *@param req.params.id (folder)
 *@param next
 *@return next for to go to next function
 * find task by folder id and set archived to true and go to next function
 * or if error return error
 */
module.exports.updateManyTaskToArchived = (req, res, next) => {
    Task.updateMany({ folder: req.params.id }, { archived: true }, (err) => {
        if (err) return res.status(500).send(err);
        next();
    });
};

/**
 *@param res.body.response
 *@return {object} response
 * return response in req.body.response
 */
module.exports.returnResponse = (req, res) => {
    res.status(200).json(req.body.response);
};

/**
 *@param res
 *@param next
 *@param req.body data for create task
 *@return next for to go to next function
 * create new task and go to next function
 */
module.exports.store = (req, res, next) => {
    var task = new Task({
        title: req.body.title,
        dateLimit: req.body.dateLimit,
        folder: req.body.folder,
        service: req.body.service,
    });

    task.save((err, newTask) => {
        if (err) return res.status(500).send(err);

        req.params.id = newTask._id;
        req.body.insert = true;
        req.body.create = true;

        next();
    });
};

/**
 *@param res
 *@param next
 *@param req.body data for update task
 *@return next for to go to next function
 * update new task and go to next function
 */
module.exports.update = (req, res, next) => {
    Task.findByIdAndUpdate(
        req.params.id, {
            title: req.body.title,
            dateLimit: req.body.dateLimit,
            folder: req.body.folder,
            service: req.body.service,
        },
        (err, doc) => {
            if (err) return res.status(500).send(err);
            doc.save((error, task) => {
                if (error) return res.status(500).send(error);
                req.body.update = true;
                next();
            });
        }
    );
};

/**
 *@param res
 *@param req.params id task
 *@return message confirmation
 * update task by id and set archived : true
 */
module.exports.archived = (req, res) => {
    Task.findByIdAndUpdate(
        req.params.id, {
            archived: true,
        },
        (err, doc) => {
            if (err) return res.status(500).send(err);
            doc.save((error, task) => {
                if (error) return res.status(500).send(error);
                res.status(200).json({
                    message: "votre tache est archivée",
                });
            });
        }
    );
};

/**
 *@param res
 *@param req.params id task
 *@return message confirmation
 * delete task by id
 */
module.exports.delete = (req, res) => {
    Task.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({
            message: "votre tache est supprimée",
        });
    });
};