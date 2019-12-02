const express = require('express');
const app = express();
const gameRoute = express.Router();

let Game = require('../model/Game');
gameRoute.route('/').get((req, res) => {
    Game.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  gameRoute.route('/read-game/:id').get((req, res) => {
    Game.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  module.exports = gameRoute;