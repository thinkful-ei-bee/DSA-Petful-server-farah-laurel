'use strict';

const express = require('express');

const { dogs } = require('./dogData')
const dogRouter = express.Router();


dogRouter
  .route('/api/dog')
  .get((req, res) => {
    res.json(dogs)
  })

  .delete((req, res) => {
    dogs.dequeue()
      .then(dog => {
        return res.json({ dogs })
      })
  })

module.exports = dogRouter;