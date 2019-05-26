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
    // places "deleted" dog at back of the queue so it's not deleted permanently 
    dogs.enqueue(
      dogs.dequeue()
    )
    return res.json(dogs)
  })

module.exports = dogRouter;