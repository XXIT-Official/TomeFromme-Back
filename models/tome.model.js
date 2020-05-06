const mongoose = require('mongoose')

const tomeSchema = new mongoose.Schema({
    letters: {
        type: Array,
        validate: {
            validator: function (v) {
                return v.length <= 3
            },
            message: '편지는 3장까지 입력 가능합니다.'
        }
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    ukey: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    date: {
        type: String
    }
}, { collection: 'xxit-test' });

const User = mongoose.model('tomeSchema', tomeSchema)

module.exports = { tomeSchema }