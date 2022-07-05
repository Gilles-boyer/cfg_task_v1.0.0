const Resa = require('../models/Rally.model');

module.exports.index = (req, res) => {
    Resa.find()
        .where('dateRoulage').gte((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
        .then((resas) => {
            resas = resas.filter(function(item){
                var nbr = item.pilote.length
                return item.nbrPilote > nbr;
            })
            res.status(200).json(resas)
        })
        .catch((err) => res.status(500).json(err));
};

module.exports.store = (req, res) => {
    var resa = new Resa(
        {
            dateRoulage: req.body.date,
            matinOuSoir: req.body.moment,
            nbrPilote: req.body.nbrPilote
        }
    );

    resa.save((err, newResa) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json(newResa);
    });
};

module.exports.addPilote =  async (req, res) => {
    var resa = await Resa.findById(req.params.id)
    var pilote = JSON.parse(req.body.pilote)
    resa.pilote.push(pilote);

    resa.save((err, resaUpdate) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json(resaUpdate);
    });
};