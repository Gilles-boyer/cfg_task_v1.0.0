const { faker, Faker } = require('@faker-js/faker');
const UserTask = require("../../models/UserTask.model");
var use = []
const User = require("../../models/User.Model").find().then(res => use = res);
var tas = [];
const Task = require("../../models/Task.Model").find().then(res => tas = res);

function VerifySeed(model) {

    var Model = model.find()

    return Model.then(
        mod => {
            if (mod.length > 0) {
                return false;
            } else {
                return true;
            }
        }
    );
}
module.exports.Factory = function(nbr) {
    var tab = [];

    return VerifySeed(UserTask)
        .then(res => {
            if (res) {
                for (let x = 0; x < nbr; x++) {
                    var userTask = UserTask({
                        user: faker.random.arrayElement(use)._id,
                        task: faker.random.arrayElement(tas)._id,
                    });
                    tab.push(userTask);
                }
            }
            return tab;
        });
}