const mongoose = require('mongoose');

var FolderSchema = new mongoose.Schema({
    label: { type: String, required: true },
    archived: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false,
    selectPopulatedPaths: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

FolderSchema.virtual('Tasks', {
    localField: '_id',
    foreignField: 'folder',
    ref: 'tasks',
});

module.exports = mongoose.model('folders', FolderSchema);