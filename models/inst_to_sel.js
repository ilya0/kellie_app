var mongoose = require('mongoose');



var instructorSchema = new mongoose.Schema({
  name: { type: String, required: true},
          location: String,
          skills: String,
          email: String
});


var Instructor = mongoose.model('instructor', instructorSchema);


module.exports = Instructor;
