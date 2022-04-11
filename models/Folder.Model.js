const mongoose = require('mongoose');

var FolderSchema = new mongoose.Schema({
    label: { type: String, required: true },
});

module.exports = mongoose.model('folders', FolderSchema);