module.exports.configMultiData = (services) => {
    var data = [];
    services.forEach((service) => {
        data.push({
            _id: service._id,
            name: service.name,
            color: service.color,
            icon: service.icon,
        });
    });

    return data;
};

module.exports.configDataService = (service) => {
    if (service) {
        var data = {
            _id: service._id,
            name: service.name,
            color: service.color,
            icon: service.icon,
        };
        return data;
    }
};