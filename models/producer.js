// var mongoose = require('mongoose');

// //TODO make this work with passport local
// // https://github.com/jaredhanson/passport-local
// var userSchema = new mongoose.Schema({
//   username : String,
//   password : String,
// });

// userSchema.methods.validatePassword = function(pwd) {
//   return bcrypt.compareSync(pwd, this.password);
// };

// userSchema.methods.encrypt = function(pwd) {
//   return bcrypt.hashSync(pwd, 8);
// };

// var Producer = mongoose.model('producer', userSchema);

// module.exports = Producer;
