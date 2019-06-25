'use strict';

const express = require('express');

const { users } = require('./userData')
const userRouter = express.Router();

userRouter
  .route('/api/users')
  .get((req, res) => {
    return res.json(users)
  })

userRouter
  .route('/api/users/delete')
  .delete((req, res) => {
    users.dequeue();
    return res.json(users)
  })

module.exports = userRouter;
