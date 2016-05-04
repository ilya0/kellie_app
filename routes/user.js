var express = require('express');
var router = express.Router();
var userController = require('../controllers/users_controller');

router.route('/')
  .get(userController.index)
  .post(userController.create);

router.route('/new')
  .get(userController.new);

module.exports = router;
