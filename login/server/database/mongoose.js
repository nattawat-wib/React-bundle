const mongoose = require('mongoose');

const DB = mongoose.connect('mongodb://localhost:27017/ReactDB', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('connect data base successfully'))
    .catch(() => console.log('fail'))

module.exports = DB;