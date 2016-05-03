var express = require('express');
var router = express.Router();
var producerController = require('./../controllers/producer_controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project 3' });
});

router.get('/', function(req, res, next) {
  res.render('producers', { title: 'Project 3' });
});

router.get('/', function(req, res, next) {
  res.render('instructors', { title: 'Project 3' });
});


module.exports = router;



