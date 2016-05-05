var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


//TODO make tis work with passport local
// https://github.com/jaredhanson/passport-local
var userSchema = new mongoose.Schema({
  username   : String,
  password    : String,
  email       : String,
  role        : String
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
