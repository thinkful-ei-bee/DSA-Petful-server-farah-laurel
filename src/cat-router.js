'use strict';

const express = require('express');

const cats  = require('../cats.json')

const catRouter = express.Router();

catRouter
  .route('/api/cat')
  .get((req, res) => {
      res.json(cats);
  })




module.exports = catRouter;