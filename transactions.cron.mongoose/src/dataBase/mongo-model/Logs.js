const { Schema, model } = require('mongoose');

const LogSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    }
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = model('log', LogSchema);
