const { configDataUser } = require("./UserCollection");

module.exports.configMultiUserTask = (userTasks) => {
    var data = [];
    userTasks.forEach((userTask) => {
        data.push({
            _id: userTask._id,
            user: configDataUser(userTask.user),
        });
    });

    return data;
};