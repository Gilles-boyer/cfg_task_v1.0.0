const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTaskSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tasks',
        required: true
    }
});

module.exports = mongoose.model('usersTasks', UserTaskSchema);