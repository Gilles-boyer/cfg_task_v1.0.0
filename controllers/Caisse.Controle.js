const Caisse = require("../models/Caisse.Model");

module.exports.show = (req, res) => {
  Caisse.findById(req.params.id)
    .then((caisse) => res.status(200).json(caisse))
    .catch((err) => res.status(500).json(err));
};

module.exports.store = (req, res) => {
  var caisse = new Caisse({
    date: req.body.date,
    user: req.body.user,
    journalCaisse: req.body.journalCaisse,
    caisseEspece: req.body.caisseEspece,
    fondCaisse: req.body.fondCaisse,
    cb: req.body.cb,
    cbsc: req.body.cbsc,
    cheque: req.body.cheque,
    ticket: req.body.ticket,
    sortie: req.body.sortie,
    surPlusEspece : req.body.surPlusEspece,
  });

  caisse.save((err, newCaisse) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json({
      id: newCaisse.id,
    });
  });
};

module.exports.index = (req, res) => {
  Caisse.find({checked : false}).sort({createdAt: 'desc'})
  .then((caisses) => res.status(200).json(caisses))
  .catch((err) => res.status(500).json(err));
}

module.exports.validCaisse = (req, res) => {
  Caisse.findById(req.params.id)
  .then((caisse) => {
    caisse.checked = true;
    caisse.save();
    res.status(200).json({
      response: "Caisse validée"
    })
  })
  .catch((err) => res.status(500).json(err));
}
