const mongoose = require('mongoose');

const articleSchema = new  mongoose.Schema({
    title: String,
    desc: String,
    // date: new Date()
})

module.exports = mongoose.model('Article', articleSchema)