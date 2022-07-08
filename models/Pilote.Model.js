const mongoose = require("mongoose");

var PiloteSchema = new mongoose.Schema({
    name:       { type: String, required: true },
    voiture:    { type: String, required: true  },
    formule:    { type: String, required: true  },
    phone:      { type: String, required: true  },
    nbrSession: { type: Number, default: 0},
    paiement:   { type: Boolean, default:false},
    rally: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rallyes",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
    selectPopulatedPaths: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = mongoose.model("pilotes", PiloteSchema);