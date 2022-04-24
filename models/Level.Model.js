const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
    label: {
        type: String,
        unique: true,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    definition: {
        type: String,
        required: true,
    },
    archived: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("levels", LevelSchema);