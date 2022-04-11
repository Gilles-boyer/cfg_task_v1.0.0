const folder = require("../factories/folder.factory");

function seed(nbr, factory) {

    var tab = factory.Factory(nbr);

    if (tab.length > 0) {
        tab.forEach(element => {
            element.save((err, element) => {
                if (err) return console.log(err);
                return console.log(element);
            })
        });
    } else {
        return console.log('this model is already seed');
    }
}

module.exports.seeders = (req, res) => {
    seed(1, folder)

    res.json("seed effectué");
}