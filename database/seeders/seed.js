const folder = require("../factories/folder.factory");

function seed(nbr, factory) {
    var tab = factory.Factory(nbr);
    tab.forEach(element => {
        element.save((err, element) => {
            if (err) return console.log(err);
            return console.log(element);
        })
    });
}

module.exports.seeders = (req, res) => {
    seed(1, folder)

    res.json("seed effectué");
}