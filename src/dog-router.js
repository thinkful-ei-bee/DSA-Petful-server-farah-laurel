'use strict';

const express = require('express');

const { dogs } = require('./dogData')
const dogRouter = express.Router();


dogRouter
  .route('/api/dog')
  .get((req, res) => {
    return res.json(dogs)
  })

dogRouter
  .route('/api/dog/delete')
  .delete((req, res) => {
    dogs.dequeue();
    return res.json(dogs)
  })

module.exports = dogRouter;