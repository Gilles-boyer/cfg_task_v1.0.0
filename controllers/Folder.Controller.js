const { populate } = require("../models/Folder.Model");
const Folder = require("../models/Folder.Model");

module.exports.index = (req, res) => {
    Folder.find({ archived: false })
        .select(["id", "label", "Tasks"])
        .populate({
            path: "Tasks",
            select: ["id", "title", "createdAt", "archived", "Levels", "level"],
            populate: ["level", {
                path: "Users",
                select: ["id", "user"],
                populate: {
                    path: "user",
                    select: ["id", "firstName", "lastName"],
                }
            }]
        })
        .then(folders => res.status(200).json(folders))
        .catch(err => console.error(err));
}