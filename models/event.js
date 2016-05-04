var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema ({
   title: String,
   start: Date,
   end: Date
});

var Event = mongoose.model('Event', eventSchema);



module.exports = Event;
