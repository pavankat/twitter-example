var express = require("express");

var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");
var tweet = require("../models/tweet.js");

// Create all our routes and set up logic within those routes where required.

router.get("/registration", function(req, res) {
  res.render('newUser')
});

router.post("/create", function(req, res) {
  user.create(['username', 'password'], [req.body.username, req.body.password], function(response){
    res.redirect('/')
  })
});


router.get("/profile/:id", function(req, res) {
  user.findOne(req.params.id, function(userData) {
    tweet.allWhere("user_id = " + req.params.id, function(tweetData) {
      res.render("profile", {
        user: userData,
        tweets: tweetData
      });
    });
  });
});

// Export routes for server.js to use.
module.exports = router;
