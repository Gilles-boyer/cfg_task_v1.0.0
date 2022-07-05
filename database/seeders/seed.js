const folder = require("../factories/folder.factory");
const level = require("../factories/level.factory");
const user = require("../factories/user.factory");
const Task = require("../factories/task.factory");
const UserTask = require("../factories/userTask.factory");

async function seed(nbr, factory) {
    var res = await factory.Factory(nbr);
    if (res.length > 0) {
        res.forEach((element) => {
            element.save((err, task) => {
                if (err) return console.log(err);
                return console.log(task);
            });
        });
    } else {
        console.log("this model is already seed");
    }
}

module.exports.seeders = async(req, res) => {
    await seed(10, folder);
    await seed(5, level);
    await seed(10, user);
    await seed(30, Task);
    await seed(60, UserTask);

    res.json("seed effected");
};