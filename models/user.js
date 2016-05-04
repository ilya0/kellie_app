var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


//TODO make tis work with passport local
// https://github.com/jaredhanson/passport-local
var userSchema = new mongoose.Schema({
  firstName   : String,
  password    : String,
  email       : String,
  bio         : String,
  role        : String
});

userSchema.methods.validatePassword = function(pwd) {
  return bcrypt.compareSync(pwd, this.password);
};

userSchema.methods.encrypt = function(pwd) {
  return bcrypt.hashSync(pwd, 8);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
