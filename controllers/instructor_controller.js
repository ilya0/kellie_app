//var instructorController = {};
//this is the instructor list requires that operate the instructor
var Instructor = require('../models/inst_to_sel.js');
var instructors = {};


//this the instructor list actions

//create action to display all users
instructors.index = function(req, res) {

  var instructors = Instructor.find({}, function(err,instructors){
    if(err){
      throw err;
    }
    //res.json(instructors);
    res.render('instructor_list_page',{instructors:instructors});
  });
};

//using this to show the list of instructors on /instructorlist
instructors.show = function(req, res) {
  var instructors = Instructor.find({}, function(err,instructors){
    if(err){
      throw err;
    }
    res.json(instructors);
    //res.render('instructor_list_page',{instructors:instructors});
  });

};



//instructor list create function
instructors.create = function(req, res) {
var instructor = new Instructor();

instructor.name = req.body.name;
instructor.skills = req.body.skills;
instructor.location = req.body.location;
instructor.email = req.body.email;
instructor.profit = req.body.profit;
console.log(instructor);

instructor.save(function(err){
  if(err){
    throw err;
  };
res.json({sucess:true,message:'Instructor created! pow'});
  });
};


module.exports = instructors;


















// instructorController.index = function(req, res) {};

// instructorController.new = function(req, res) {};

// instructorController.create = function(req, res) {};

// instructorController.update = function(req, res) {};

// instructorController.show = function(req, res) {};

// instructorController.edit = function(req, res) {};

// instructorController.destroy = function(req, res) {};

//module.exports = instructorController;

