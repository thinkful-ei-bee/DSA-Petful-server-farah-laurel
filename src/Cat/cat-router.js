'use strict';

const express = require('express');

const {cats}  = require('./catData');

const catRouter = express.Router();

catRouter
  .route('/api/cat')
  .get((req, res) => {
      return res.json(cats);
  })

catRouter
  .route('/api/cat/delete')
  .delete((req, res) => {
    // places "deleted" cat at back of the queue so it's not deleted permanently 
    cats.enqueue(
      cats.dequeue()
      )
    return res.json(cats)
  })


module.exports = catRouter;