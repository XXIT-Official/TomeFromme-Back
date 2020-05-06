const mongoose = require('mongoose')

const emailSchema = mongoose.Schema({
    letters: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    ukey: {
        type: String
    },
    date: {
        type: String
    }
})

const User = mongoose.model('Email', emailSchema)

module.exports = { Email }