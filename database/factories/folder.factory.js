const { faker } = require("@faker-js/faker");
const Folder = require("../../models/Folder.Model");

module.exports.asyncFind = async function() {
    var res = await Folder.find();
    return res;
};

function VerifySeed(model) {
    var Model = model.find();

    return Model.then((mod) => {
        if (mod.length > 0) {
            return false;
        } else {
            return true;
        }
    });
}

module.exports.Factory = function(nbr) {
    var tab = [];

    return VerifySeed(Folder).then((res) => {
        if (res) {
            for (let x = 0; x < nbr; x++) {
                var folder = new Folder({
                    label: faker.company.companyName(),
                });
                tab.push(folder);
            }
        }
        return tab;
    });
};