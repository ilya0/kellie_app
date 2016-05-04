var mongoose = require('mongoose');
var mongooseURL = process.env.MONGODB_URI || 'mongodb://localhost/kellie_app_development';
var db = mongoose.connection;

mongoose.connect(mongooseURL, function(err){
  if (err){
    console.log("Cannot connect to database", err);

  }else{
    console.log('Database connected.');
  }
});




module.exports = mongoose;
