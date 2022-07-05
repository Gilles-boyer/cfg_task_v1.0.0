const mongoose = require("mongoose");

var RallySchema = new mongoose.Schema({
    dateRoulage: {
        type: Date,
        required: true,
    },
    matinOuSoir: {
        type: String,
        lowercase: true,
        required: true,
    },
    nbrPilote:{
        type: Number,
        required: true
    },

    pilote: {
        type: Array
    }
}, {
    timestamps: true,
    versionKey: false,
    selectPopulatedPaths: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = mongoose.model("rallyes", RallySchema);