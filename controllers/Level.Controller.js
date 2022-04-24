const Level = require("../models/Level.Model");

module.exports.index = (req, res) => {
    Level.find({ archived: false })
        .select(["id", "label", "color", "definition"])
        .then((level) => res.status(200).json(level))
        .catch((err) => console.error(err));
};

module.exports.store = (req, res) => {
    var level = new Level({
        label: req.body.label,
        color: req.body.color,
        definition: req.body.definition,
    });

    level.save((err, lev) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(lev);
    });
};

module.exports.update = (req, res) => {
    Level.findById({ _id: req.body._id })
        .then((level) => {
            level.label = req.body.label;
            level.color = req.body.color;
            level.definition = req.body.definition;

            level.save((err, lev) => {
                if (err) return res.status(500).send(err);
                return res.status(200).json(lev);
            });
        })
        .catch((err) => res.status(500).send(err));
};

module.exports.archived = (req, res) => {
    Level.findById({ _id: req.params.id })
        .then((level) => {
            level.archived = true;

            level.save((err, lev) => {
                if (err) return res.status(500).send(err);
                return res.status(200).json({
                    delete: true,
                    message: "le level a été supprimé",
                });
            });
        })
        .catch((err) => res.status(500).send(err));
};