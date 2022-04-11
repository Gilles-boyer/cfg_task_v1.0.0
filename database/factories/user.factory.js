const { faker } = require('@faker-js/faker');
const User = require("../../models/User.Model");
const bcrypt = require('bcrypt');

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

    return VerifySeed(User)
        .then(res => {
            if (res) {
                for (let x = 0; x < nbr; x++) {
                    var user = new User({
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        email: faker.internet.email(),
                        password: bcrypt.hashSync('password', 12)
                    });
                    tab.push(user);
                }
            }
            return tab;
        });
}