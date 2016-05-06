var express = require('express');
var router = express.Router();
var userController = require('../controllers/users_controller');
var instructorController = require('../controllers/instructors_controller');
var passport = require('passport');
var bodyParser = require('body-parser');


router.route('/')
  .get(userController.index);

router.route('/login2')
  .get(instructorController.getLogin)
  .post(instructorController.postLogin);

router.route('/signup')
  .get(userController.new)
  .post(userController.create);

router.route('/login')
  .get(userController.getLogin)
  .post(userController.postLogin);

router.route('/logout')
  .get(userController.getLogout);

module.exports = router;
