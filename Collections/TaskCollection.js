const { configDataService } = require("./ServiceCollections");
const { configDataFolder } = require("./FolderCollection");
const { configMultiUserTask } = require("./UserTaskCollection");

module.exports.configMultiTask = (tasks) => {
    var data = [];
    tasks.forEach((task) => {
        data.push({
            _id: task._id,
            title: task.title,
            dateLimit: task.dateLimit,
            service: configDataService(task.service),
            dateLimit: task.dateLimit,
            folder: configDataFolder(task.folder),
            userTask: configMultiUserTask(task.Users),
        });
    });

    return data;
};

module.exports.configDataTask = (task) => {
    var data = {
        _id: task._id,
        title: task.title,
        dateLimit: task.dateLimit,
        service: configDataService(task.service),
        dateLimit: task.dateLimit,
        folder: configDataFolder(task.folder),
        userTask: configMultiUserTask(task.Users),
    };

    return data;
};