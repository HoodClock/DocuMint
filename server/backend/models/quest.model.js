const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
        default: 0,
    },
    type: {
        type: String,
        enum: ['free', 'premium'],
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'missed'],
        default: 'pending',
    },
    assignedAt: {
        type: Date,
        default: Date.now,
    },
    deadline: {
        type: Date,
        required: false,
    },
});

module.exports = mongoose.model('Quest', questSchema);