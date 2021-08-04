const mongoose = require('mongoose');

const articleSchema = new  mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    desc: String,
    date: {
        type: String,
        default: new Date()
    }
})

module.exports = mongoose.model('Article', articleSchema)