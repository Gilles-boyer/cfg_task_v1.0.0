const { faker } = require("@faker-js/faker");
const Level = require("../../models/Service.Model");

module.exports.asyncFind = async function() {
    var res = await Level.find();
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

    return VerifySeed(Level).then((res) => {
        if (res) {
            var tabColor = [];
            for (let x = 0; x < nbr; x++) {
                var colo = faker.vehicle.color();

                tabColor.forEach((element) => {
                    while ((element = colo)) {
                        colo = faker.vehicle.color();
                    }
                });

                var level = new Level({
                    label: faker.vehicle.model(),
                    color: colo,
                    definition: faker.vehicle.manufacturer(),
                });
                tab.push(level);
            }
        }
        return tab;
    });
};