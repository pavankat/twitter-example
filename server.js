var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var usersController = require("./controllers/usersController.js");
var tweetsController = require("./controllers/tweetsController.js");
var applicationController = require("./controllers/applicationController.js");

app.use("/", applicationController);
app.use("/users", usersController);
app.use("/tweets", tweetsController);


app.listen(port);




