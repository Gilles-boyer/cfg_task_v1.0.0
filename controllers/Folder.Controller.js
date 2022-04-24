const { populate } = require("../models/Folder.Model");
const Folder = require("../models/Folder.Model");
const Task = require("../models/Task.Model");
const UserTask = require("../models/UserTask.model");
const Version = require("../controllers/Version.Controller");

module.exports.index = (req, res) => {
    Folder.find({ archived: false })
        .select(["id", "label", "Tasks"])
        .populate({
            path: "Tasks",
            select: ["id", "title", "createdAt", "archived", "Levels", "level"],
            populate: [
                "level",
                {
                    path: "Users",
                    select: ["id", "user"],
                    populate: {
                        path: "user",
                        select: ["id", "firstName", "lastName"],
                    },
                },
            ],
        })
        .then((folders) => res.status(200).json(folders))
        .catch((err) => console.error(err));
};

module.exports.archiveList = (req, res) => {
    Folder.find({ archived: true })
        .select(["id", "label", "Tasks", "createdAt", "updatedAt"])
        .populate({
            path: "Tasks",
            select: ["id", "title", "createdAt", "archived", "updatedAt"],
            populate: [{
                path: "Users",
                select: ["id", "user"],
                populate: {
                    path: "user",
                    select: ["id", "firstName", "lastName"],
                },
            }, ],
        })
        .then((folders) => res.status(200).json(folders))
        .catch((err) => console.error(err));
};

module.exports.listFolder = (req, res) => {
    Folder.find({ archived: false })
        .select(["id", "label"])
        .then((folders) => res.status(200).json(folders))
        .catch((err) => console.error(err));
};

module.exports.store = (req, res) => {
    if (req.method == "POST") {
        var folder = new Folder({ label: req.body.label });
        folder.save((err, folder) => {
            if (err) return res.status(500).send(err);
            Version.addModVersion();
            return res.status(200).json(folder);
        });
    }
};

module.exports.archived = (req, res) => {
    Folder.findById(req.params.id)
        .then((folder) => {
            folder.archived = true;
            folder.save((err, t) => {
                if (err) return res.status(500).send(err);
                Version.addModVersion();
                return res.status(200).json({
                    archived: true,
                    message: "la dossier a été archivé",
                });
            });
        })
        .catch((err) => res.status(500).send(err));
};

module.exports.delete = async(req, res) => {
    var tasks = await checkTask(req.params.id);
    deleteFolder(req.params.id);
    deleteManyTask(req.params.id);
    deleteManyUserTask(tasks);
    Version.addModVersion();
    return res.status(200).json({
        delete: true,
        message: "la dossier a été supprimé",
    });
};
async function checkTask(folderId) {
    var tasks = await Task.find({ folder: folderId });
    return tasks;
}

function deleteManyUserTask(tasks) {
    tasks.forEach((task) => {
        deleteUserTask(task.id);
    });
}

async function deleteUserTask(taskId) {
    await UserTask.deleteMany({ task: taskId });
}

async function deleteManyTask(folderId) {
    await Task.deleteMany({ folder: folderId });
}

async function deleteFolder(folderId) {
    await Folder.deleteOne({ _id: folderId });
}