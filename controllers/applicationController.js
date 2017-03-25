var express = require("express");

var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {	
  user.all(function(data){
  	res.render('index', {
  		users : data
  	})
  });
});

// Export routes for server.js to use.
module.exports = router;
