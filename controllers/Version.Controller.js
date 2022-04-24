const { Decimal128 } = require("mongodb");
const Version = require("../models/Version.Model");

module.exports.index = (req, res, next) => {
    Version.find()
        .then((version) => {
            if (version.length == 0) {
                var v = new Version({
                    version: 0.01,
                });
                v.save();
            }
        })
        .catch((error) => console.log(error));
    next();
};

module.exports.verifyVersion = (req, res) => {
    Version.find()
        .then((version) => {
            var result = {};
            result.modify = false;

            if (version[0].version > req.params.version) {
                result.modify = true;
                result.version = version[0].version;
            }

            res.status(200).json(result);
        })
        .catch((error) => res.status(500).send(error));
};

module.exports.show = () => {
    var ver;
    Version.find().then((version) => {
        ver = version[0].version;
    });
    return ver;
};

module.exports.addModVersion = () => {
    Version.find()
        .then((version) => {
            version[0].version += 0.01;
            version[0].save();
        })
        .catch((error) => res.status(500).send(error));
};