const { populate } = require("../models/Folder.Model");
const {
    configMultiFolder,
    configDataFolder,
} = require("../Collections/FolderCollection");
const Folder = require("../models/Folder.Model");
const Task = require("../models/Task.Model");
const UserTask = require("../models/UserTask.model");
const Version = require("../controllers/Version.Controller");

/**
 *@param res
 *@return {object} list folder not archived
 * return list folder with task and if error return statut 500 with error
 */
module.exports.index = (req, res) => {
    Folder.find({ archived: false })
        .then((folders) => res.status(200).json(configMultiFolder(folders)))
        .catch((err) => res.status(500).json(err));
};

/**
 *@param res
 *@return {object} list folder archived
 * return list folder with task and if error return statut 500 with error
 */
module.exports.archiveList = (req, res) => {
    Folder.find({ archived: true })
        .select(["_id", "id", "label", "Tasks", "createdAt", "updatedAt"])
        .populate({
            path: "Tasks",
            select: ["_id", "id", "title", "createdAt", "archived", "updatedAt"],
            populate: [{
                path: "Users",
                select: ["_id", "id", "user"],
                populate: {
                    path: "user",
                    select: ["_id", "id", "firstName", "lastName"],
                },
            }, ],
        })
        .then((folders) => res.status(200).json(folders))
        .catch((err) => res.status(500).json(err));
};

/**
 *@param res
 *@param req.params id folder
 *@return message confirmation
 * update folder by id and set archived : true
 */
module.exports.archived = (req, res) => {
    Folder.findByIdAndUpdate(
        req.params.id, {
            archived: true,
        },
        (err, doc) => {
            if (err) return res.status(500).send(err);
            doc.save((error, task) => {
                if (error) return res.status(500).send(err);
                res.status(200).json({
                    message: "votre dossier est archivée",
                });
            });
        }
    );
};

/**
 *@param {req.body.label} req (req.body.label)
 *@param res
 *@return {object} the new folder
 *add new folder and increment version
 */
module.exports.store = (req, res) => {
    var folder = new Folder({ label: req.body.label });
    folder.save((err, folder) => {
        if (err) return res.status(500).json(err);
        Version.addModVersion();
        return res.status(201).json(configDataFolder(folder));
    });
};