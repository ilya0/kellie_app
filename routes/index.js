var express = require('express');
var router = express.Router();
var instructorController = require('../controllers/instructor_controller.js');
var nodemailer = require('nodemailer');
var favicon       = require('serve-favicon');


//node mailer variable used in the send route
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "email@gmail.com",
        pass: "password1"
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
//.get(instructorController.show)
// .delete(instructorController.destroy)
//.put(usersController.update)




//routes for nodemailer
router.get('/send',function(req,res){
    var mailOptions={
        //to : req.query.to,  //this is to pull from the form, but I am hardcoding
        to: "iosovets@gmail.com",
        subject : "req.query.subject",
        text : "req.query.text"
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

