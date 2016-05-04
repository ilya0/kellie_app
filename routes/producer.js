var express = require('express');
var router = express.Router();
var producerController = require('./../controllers/producer_controller.js');


router.get('/', function(req, res, next) {
  res.render('producers', { title: 'Project 3' });
});

module.exports = router;
