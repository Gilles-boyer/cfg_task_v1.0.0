module.exports.configMultiFolder = (folders) => {
    var data = [];
    folders.forEach((folder) => {
        data.push({
            _id: folder._id,
            label: folder.label,
        });
    });

    return data;
};

module.exports.configDataFolder = (folder) => {
    var data = {
        _id: folder._id,
        label: folder.label,
    };

    return data;
};