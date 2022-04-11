const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
    label: {
        type: String,
        unique: true,
        required: true
    },
    color: {
        type: String,
        unique: true,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('levels', LevelSchema);