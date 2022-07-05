const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    archived: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("services", ServiceSchema);