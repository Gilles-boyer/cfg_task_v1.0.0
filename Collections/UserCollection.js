module.exports.configMultiUser = (users) => {
    var data = [];

    users.forEach((user) => {
        data.push({
            _id: user._id,
            firstName: user.firstName,
        });
    });

    return data;
};
module.exports.configMultiUserSpec = (users) => {
    var data = [];

    users.forEach((user) => {
        data.push({
            user: {
                _id: user._id,
                firstName: user.firstName,
            },
        });
    });

    return data;
};

module.exports.configDataUser = (user) => {
    var data = {
        _id: user._id,
        firstName: user.firstName,
    };

    return data;
};