const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authSchema = new Schema({ 
    name: {
        type: String,
        required: true,
        trim: true

    },
    usertype: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });

const Auth = mongoose.model('auth', authSchema);

module.exports = Auth;