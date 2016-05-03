var mongoose = require('mongoose');
var mongooseURL = process.env.MONGODB_URI || 'mongodb://localhost/kellie_app_development';
mongoose.connect(mongooseURL);

module.exports = mongoose;

