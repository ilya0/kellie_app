// // var Instructor = require('../models/')
// var instructorController = {};
// var Instructor = require('../models/instructor');

// instructorController.index = function(req, res) {
//    Instructor.find({}, function(err, equipment) {
//     if (err) {
//       throw err;
//     }
//     res.json(Instructor);
//   });
// };

// instructorController.new = function(req, res) {
//   res.render('new');
// };

// instructorController.create = function(req, res) {
//   var instructor = new Instructor();
//   instructor.firstName = req.body.firstName;
//   instructor.lastName = req.body.lastName;
//   instructor.email = req.body.email;
//   instructor.bio = req.body.bio;
//   instructor.save(function(err) {
//     if (err) {
//       throw err;
//     }
//     res.json(instructor);
//   });
// };

// instructorController.update = function(req, res) {};

// instructorController.show = function(req, res) {};

// instructorController.edit = function(req, res) {};

// instructorController.destroy = function(req, res) {};

// module.exports = instructorController;

