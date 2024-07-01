const mongoose = require('mongoose');

const CoachingSessionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    clientInfo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'scheduled'
    }
});

module.exports = mongoose.model('CoachingSession', CoachingSessionSchema);
