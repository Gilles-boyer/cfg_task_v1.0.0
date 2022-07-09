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
    var pilotes = [];
    req.query.rallyId = req.query.rallyId.split(' ');

    req.query.rallyId.forEach(id => {
        var pilote = {
                name        : req.query.name,
                voiture     : req.query.voiture,
                formule     : selectFormuleById(req.query.formule).name,
                phone       : req.query.phone,
                rally       : id,
                nbrSession  : selectFormuleById(req.query.formule).nbr,
                paiement    : true
        };
        pilotes.push(pilote);
    });

    Pilote.insertMany(pilotes)
    .then(function(){
        return res.status(201).json({
           response: "pilote ajouté"
        });
    })
    .catch(function(error){
        return res.status(500).json(error);
    });

};

var selectFormuleById = (id) => {
    if(id == 1) {
        return {
            name: "1 sessions 10min => 25€",
            nbr:1
        };
    } else if (id == 2) {
        return {
            name: "3 sesions 10min => 60€",
            nbr:3
        };
    } else if (id == 3) {
        return {
            name: "1/2 journée => 180€",
            nbr:99
        };
    } else {
        return {
            name: "1 journée => 250€",
            nbr:99
        };
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
