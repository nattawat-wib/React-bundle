const express = require('express');
const app = express();
const articleRoute = require('./routes/article')

require('./database/mongoose');

// app.use('/', articleRoute)

app.listen(8000, console.log('server is running of port 8080...'))


