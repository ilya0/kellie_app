var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema ({
   title: String,
   start_time: Date,
   end_time: Date
});

var Event = mongoose.model('Event', eventSchema);



module.exports = Event;
