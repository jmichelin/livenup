'use strict';

const express = require('express');
const auth = require('./../auth');

const router = express.Router();

router.route('/', auth.checkUser)
  .get((req, res) => {
    let params = req.body.search.params;
    //calls database and return list plants based on filter
  })
  .post((req, res) => {
    //calls database and saves a plant
  })
  .put((req, res) => {
    let plant = req.body.plant;
    //calls database and modifies a plant
  })
  .delete((req, res) => {
    let plantName = req.body.plant.name;
    //calls a database function that deletes the specified plant
  });

module.exports = router;
