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
    cats.dequeue();
    return res.json(cats)
  })

module.exports = catRouter;