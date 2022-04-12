const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        lowercase: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    archived: {
        type: Boolean,
        default: false
    },
    folder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'folders',
        required: true
    },
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'levels',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
    selectPopulatedPaths: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

TaskSchema.virtual('Users', {
    localField: '_id',
    foreignField: 'task',
    ref: 'usersTasks',
});

module.exports = mongoose.model('tasks', TaskSchema);