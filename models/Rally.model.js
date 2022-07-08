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
}, {
    timestamps: true,
    versionKey: false,
    selectPopulatedPaths: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

RallySchema.virtual("Pilotes", {
    localField: "_id",
    foreignField: "rally",
    ref: "pilotes",
});

module.exports = mongoose.model("rallyes", RallySchema);