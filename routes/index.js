var express = require('express');
var router = express.Router();
var instructorController = require('../controllers/instructor_controller.js');




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









module.exports = router;

