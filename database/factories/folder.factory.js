const { faker } = require('@faker-js/faker');
const Folder = require("../../models/Folder.Model");

module.exports.Factory = function(nbr) {
    var tab = []

    for (let x = 0; x < nbr; x++) {
        var folder = new Folder({
            label: faker.company.companyName()
        });

        tab.push(folder);
    }

    return tab;
}