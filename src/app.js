require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const config = require('./config')

const dogRouter = require('./dog-router');
const catRouter = require('./cat-router');
const userRouter = require('./user-Router');

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())


app.use(catRouter);
app.use(dogRouter);
app.use(userRouter);

app.use(function errorHandler(error, req, res, next){
    let response 
    if (NODE_ENV === "production"){
        response = { error: {message: 'server error'}}
    } else {
        console.log(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app