const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        lowercase: true,
        required: true,
    },
    lastName: {
        type: String,
        uppercase: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        default: "password",
    },
    admin: {
        type: Boolean,
        default: false,
    },
    archived: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("users", UserSchema);