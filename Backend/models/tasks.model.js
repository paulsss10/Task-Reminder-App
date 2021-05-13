const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tasksSchema = new Schema({ 
    title: {
        type: String,
        required: true,
        trim: true,

    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    schedule: {
        type: Date,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    reminder: {
        type: Boolean,
        required: true,
        trim: true,
    },
}, { timestamps: true });

const Tasks = mongoose.model('tasks', tasksSchema);

module.exports = Tasks;