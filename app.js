const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const bookRouter = require('./routers/bookRouter');

const app = express();

// app.use(cors())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/bookverse', bookRouter);

module.exports = app;