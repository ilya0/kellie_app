var userController = {};
var User = require('../models/user');

userController.index = function(req, res) {
   User.find({}, function(err, users) {
    if (err) {
      throw err;
    }
    res.json(users);
  });
};

// make new Instructor and new Producer
userController.new = function(req, res) {
  // different views for instructors and producers
  res.render('new');
};

// make create Instructor and create Producer
userController.create = function(req, res) {
  var user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.bio = req.body.bio;
  // add role field
  user.save(function(err) {
    if (err) {
      throw err;
    }
    // render view later
    res.json(user);
  });
};

userController.update = function(req, res) {};

userController.show = function(req, res) {};

userController.edit = function(req, res) {};

userController.destroy = function(req, res) {};

module.exports = userController;

