const Service = require("../models/Service.Model");
const { configMultiData } = require("../Collections/ServiceCollections");

/**
 *@param res
 *@return {array} list service
 * return response 200 with all services not archived
 */
module.exports.index = (req, res) => {
    Service.find({ archived: false })
        .then((result) => res.status(200).json(configMultiData(result)))
        .catch((err) => console.log(err));
};

/**
 *@param res
 *@param req
 *@return {object} new service
 * create new service and return
 */
module.exports.store = (req, res) => {
    var service = new Service({
        name: req.body.name,
        color: req.body.color,
        icon: req.body.icon,
    });

    service.save((err, newService) => {
        if (err) return res.status(500).send(err);
        return res.status(201).json(newService);
    });
};