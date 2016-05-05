var express = require('express');
var router = express.Router();
var instructorController = require('../controllers/instructor_controller.js');
var nodemailer = require('nodemailer');
var favicon       = require('serve-favicon');
var Instructor = require('../models/inst_to_sel.js');
var bodyParser    = require('body-parser');


//node mailer variable used in the send route
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "blackhattest99@gmail.com",
        pass: "blackhattingaround1"
    }
});



/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index');
console.log("this is the root route that goes to index and renders it");

});




//create routes for instructorlist
router.route('/instructorlist')
.get(instructorController.index)
.post(instructorController.create)

// .delete(instructorController.destroy)
//.put(usersController.update)

//slick way to just see all the instructors listed
router.route('/showinstructorlist')
.get(instructorController.show)



//routes for singluar button action
router.get('/send/:id',function(req,res){
console.log("route /send/:id hit");

    var id = req.params.id;
    var email = "";
    var name = "";
console.log("vars passed");


//this is in the controller now - maybe its the way to do it

 // Instructor.findById(req.params.id, function(err, question){
 //  console.log("inside the findbyID");
 //  console.log("re.body contains"+req.params);
 //    //var email = req.params.email;
 //    var email = req.body.email;
 //    });


console.log("email of the link is:"+email);


//     var mailOptions={

//         //to : req.query.to,  //this is to pull from the form, but I am hardcoding
//         to: "i@gmail.com", //this needs to be the instructor email
//         subject : "Invite to GA Schedulizer APP - Please select a time",
//         text : "This is a link to whereever the app will reside please log in and select a time at: <hyperlink"
//     };

//     console.log(mailOptions);
//     smtpTransport.sendMail(mailOptions, function(error, response){
//      if(error){
//             console.log(error);
//         res.end("error");
//      }else{
//             console.log("Message sentto " + email);
//         res.end("sent");
//          }
//          console.log(email);
// });
});

//this is the route to send custom emails

router.get('/sendemail',function(req,res){
    var mailOptions={
        to : req.query.to,  //this is to pull from the form, but I am hardcoding
        subject : req.query.subject,
        text : req.query.text
    };


    console.log(mailOptions);

    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});







module.exports = router;

