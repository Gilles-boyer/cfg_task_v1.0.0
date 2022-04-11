const { faker } = require('@faker-js/faker');
const Folder = require("../../models/Folder.Model");

function VerifySeed(model) {
    var res = model.find()

    if (res != []) {
        return false;
    } else {
        return true;
    }
}

module.exports.Factory = function(nbr) {
    var tab = []

    if (VerifySeed(Folder)) {
        for (let x = 0; x < nbr; x++) {
            var folder = new Folder({
                label: faker.company.companyName()
            });

            tab.push(folder);
        }
    }
    return tab;
}