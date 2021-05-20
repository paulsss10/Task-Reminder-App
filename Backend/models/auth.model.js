const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authSchema = new Schema({ 
    username: {
        type: String,
        required: true,
        trim: true,

    },
    password: {
        type: String,
        required: false,
        trim: true,
    },
}, { timestamps: true });

const Auth = mongoose.model('auth', authSchema);

module.exports = Auth;