const express = require('express');
const app = express();
const articleRoute = require('./routes/article');
const userRouter = require('./routes/user');

app.use(express.json())

require('./database/mongoose');

app.use('/article', articleRoute);
app.use('/user', userRouter)

app.listen(8000, console.log('server is running of port 8080...'))


