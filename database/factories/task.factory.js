const { faker, Faker } = require('@faker-js/faker');
const Task = require("../../models/Task.Model");
var fold = []
const Folder = require("../../models/Folder.Model").find().then(res => fold = res);
var lev = [];
const Level = require("../../models/Level.Model").find().then(res => lev = res);

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

    return VerifySeed(Task)
        .then(res => {
            if (res) {
                for (let x = 0; x < nbr; x++) {
                    var task = new Task({
                        title: faker.lorem.sentence(4),
                        folder: faker.random.arrayElement(fold)._id,
                        level: faker.random.arrayElement(lev)._id,
                    });
                    tab.push(task);
                }
            }
            return tab;
        });
}