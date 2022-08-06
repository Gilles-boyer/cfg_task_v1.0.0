const mongoose = require("mongoose");

var CaisseShema = new mongoose.Schema({
    date:{ type: String, required: true },
    user:{ type: String, required: true },
    journalCaisse:{ type: Object, required: true },
    caisseEspece: { type: Object, required: true },
    fondCaisse: { type: Object, required: true },
    cb: { type: Object, required: true },
    cbsc : { type: Object, required: true },
    cheque: { type: Object, required: true },
    ticket: { type: Object, required: true },
    sortie: { type: Object, required: true },
    surPlusEspece: {type: Boolean, required: true},
}, {
    timestamps: true,
    versionKey: false,
    selectPopulatedPaths: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = mongoose.model("caisses", CaisseShema);