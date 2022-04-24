const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VersionSchema = new Schema({
    version: {
        type: Number,
        unique: true,
        required: true,
    },
});

module.exports = mongoose.model("versions", VersionSchema);