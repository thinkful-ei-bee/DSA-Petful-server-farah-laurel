'use strict';

const express = require('express');

const { dogs } = require('./dogData')
const dogRouter = express.Router();


dogRouter
  .route('/api/dog')
  .get((req, res) => {
    res.json(dogs)
  })

dogRouter
  .route('/api/dog/delete')
  .delete((req, res) => {
    dogs.dequeue();
    return res.json(dogs)
  })

module.exports = dogRouter;