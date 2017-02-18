var express = require("express");

var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");
var tweet = require("../models/tweet.js");

// Create all our routes and set up logic within those routes where required.

router.get("/new", function(req, res) {
  res.render("tweet");
});

router.post("/create", function(req, res) {
  tweet.create(['user_id', 'tweet'], [req.body.id, req.body.tweet], function(response){
  	res.redirect('/users/profile/' + req.body.id);
  });
});

// Export routes for server.js to use.
module.exports = router;



