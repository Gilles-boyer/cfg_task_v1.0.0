const Task = require("../models/Task.Model");
const UserTask = require("../models/UserTask.model");
const Folder = require("../models/Folder.Model");
const Version = require("../controllers/Version.Controller");

module.exports.update = async(req, res) => {
    if (req.body.title || req.body.level || req.body.users) {
        var task = await Task.findById(req.body.id);

        if (req.body.title) {
            task.title = req.body.title;
        }

        if (req.body.level) {
            task.level = req.body.level;
        }

        if (req.body.users) {
            UserTask.deleteMany({ task: req.body.id }, function(err) {
                if (err) console.log(err);
                console.log("Successful deletion");
            });

            req.body.users.forEach((user) => {
                var rel = new UserTask({
                    task: req.body.id,
                    user: user._id,
                });
                rel.save();
            });
        }
        task.save((err, task) => {
            if (err) return res.status(500).send(err);
            Version.addModVersion();
            return Task.findById(task.id)
                .select([
                    "id",
                    "title",
                    "createdAt",
                    "archived",
                    "Levels",
                    "level",
                    "folder",
                ])
                .populate([
                    "level",
                    {
                        path: "Users",
                        select: ["id", "user"],
                        populate: {
                            path: "user",
                            select: ["id", "firstName", "lastName"],
                        },
                    },
                ])
                .then((x) => res.status(200).json(x))
                .catch((err) => console.error(err));
        });
    }
};

module.exports.store = (req, res) => {
    if (req.method == "POST") {
        var task;

        if (req.body.addFolder) {
            var folder = new Folder({
                label: req.body.folder,
            });
            task = new Task({
                title: req.body.title,
                folder: folder.id,
                level: req.body.level,
            });

            folder.save((err) => {
                if (err) return res.status(500).send(err);
            });
        } else {
            task = new Task({
                title: req.body.title,
                folder: req.body.folder,
                level: req.body.level,
            });
        }

        task.save((err, task) => {
            if (err) return res.status(500).send(err);

            req.body.users.forEach((element) => {
                var usersTasks = new UserTask({
                    user: element._id,
                    task: task.id,
                });
                usersTasks.save();
            });

            Version.addModVersion();

            return Task.findById(task.id)
                .select([
                    "id",
                    "title",
                    "createdAt",
                    "archived",
                    "Levels",
                    "level",
                    "folder",
                ])
                .populate([
                    "level",
                    {
                        path: "Users",
                        select: ["id", "user"],
                        populate: {
                            path: "user",
                            select: ["id", "firstName", "lastName"],
                        },
                    },
                ])
                .then((x) => res.status(200).json(x))
                .catch((err) => console.error(err));
        });
    }
};

module.exports.archived = (req, res) => {
    Task.findById(req.params.id)
        .then((task) => {
            task.archived = true;
            task.save((err, t) => {
                if (err) return res.status(500).send(err);
                Version.addModVersion();
                return res.status(200).json({
                    archived: true,
                    message: "la tache a été archivé",
                });
            });
        })
        .catch((err) => res.status(500).send(err));
};

module.exports.delete = (req, res) => {
    deleteTask(req.params.id);
    deleteUserTask(req.params.id);
    Version.addModVersion();
    return res.status(200).json({
        delete: true,
        message: "la tache a été supprimé",
    });
};

async function deleteTask(taskId) {
    return await Task.deleteOne({ id: taskId });
}

async function deleteUserTask(taskId) {
    return await UserTask.deleteMany({ task: taskId });
}