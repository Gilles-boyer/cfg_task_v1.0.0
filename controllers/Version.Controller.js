const { Decimal128 } = require("mongodb");
const Version = require("../models/Version.Model");

/**
 *@param next (go to next method)
 * check if table exist, if don't exist, init table with value 0.01
 **/
module.exports.init = (req, res, next) => {
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

/**
 *@param {object} res (response)
 *@param {number} req.params.version
 *@returns {res.status(200).json(version)} { modify : true or false }
 * check version in req.params.version and if version in bdd is sup, so return response
 * object with modify true and a last version in bdd
 **/
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

/**
 * return version in bdd to number
 *@returns {number} numeric of version
 **/
module.exports.show = () => {
    var ver;
    Version.find().then((version) => {
        ver = version[0].version;
    });
    return ver;
};

/**
 * Modify version by new version +0.01;
 **/
module.exports.addModVersion = () => {
    Version.find()
        .then((version) => {
            version[0].version += 0.01;
            version[0].save();
        })
        .catch((error) => res.status(500).send(error));
};