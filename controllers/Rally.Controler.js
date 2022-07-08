const Resa = require('../models/Rally.model');
const Pilote = require('../models/Pilote.Model');

module.exports.index = (req, res) => {
    Resa.find()
        .populate({path : "Pilotes"})
        .where('dateRoulage').gte((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
        .then((resas) => {
            resas = resas.filter(function(item){
                var nbr = item.Pilotes.length
                return item.nbrPilote > nbr;
            })
            res.status(200).json(resas);
        })
        .catch((err) => res.status(500).json(err));
};

module.exports.store = (req, res) => {
    var resa = new Resa(
        {
            dateRoulage : req.body.date,
            matinOuSoir : req.body.moment,
            nbrPilote   : req.body.nbrPilote
        }
    );

    resa.save((err, newResa) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json(newResa);
    });
};

module.exports.addPilote = (req, res) => {
    req.query.rallyId = JSON.parse(req.query.rallyId);

    req.query.rallyId.forEach(id => {
        var pilote = new Pilote(
            {
                name        : req.query.name,
                voiture     : req.query.voiture,
                formule     : req.query.formule,
                phone       : req.query.phone,
                rally       : req.query.rallyId,
                nbrSession  : nbrSessionRoulage(req.query.formule),
                paiement    : true
            }
        )
        pilote.save((err, newPilote) => {
            if (err) return res.status(500).json(err);
        });
    });

    return res.status(201).json({
        response: "Pilote ajouté"
    });
};

var nbrSessionRoulage = (formule) => {
    if(formule == "1 sessions 10min => 25€"){
        return 1;
    } else if(formule == "3 sesions 10min => 60€"){
        return 3;
    } else {
        return 99;
    }
};

module.exports.updateSession = async (req, res) => {
    var pilote = await Pilote.findById(req.params.id);

    if(pilote.nbrSession <= 0){
        return res.status(422).json({
            error:"nombre de session insufisant"
        });
    }

    pilote.nbrSession --;

    await pilote.save((err, updatePilote) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(updatePilote);
    });
}
