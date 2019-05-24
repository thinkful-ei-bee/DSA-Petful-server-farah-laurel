'use strict';

const express = require('express');

const {cats}  = require('./catData');

const catRouter = express.Router();

catRouter
  .route('/api/cat')
  .get((req, res) => {
      res.json(cats);
  })

  .delete((req, res) => {
    cats.dequeue()
      .then(cat => {
        return res.json({ cats })
      })
  })

module.exports = catRouter;