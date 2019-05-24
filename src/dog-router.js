'use strict';

const express = require('express');

//const  dogs = require('../pets')
const dogs = require('../dogs.json')
const dogRouter = express.Router();


dogRouter
  .route('/api/dog')
  .get((req, res) => {
    res.json(dogs)
  })



module.exports = dogRouter;