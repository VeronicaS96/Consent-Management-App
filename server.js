// server.js
var express = require("express");
var app = express();

var passport = require("passport");
var flash = require("connect-flash");

var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// For the database
/*var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(
  "./database/campaigns.db",
  sqlite3.OPEN_READWRITE,
  err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the campaigns SQlite database.");
  }
);*/

//var sqlite3 = require("sqlite3").verbose();
//var db = new sqlite3.Database("./database/campaigns.db");

app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser()); 

//app.use(express.static('login'))

app.set("view engine", "ejs");

app.use(session({ secret: "pryv" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 

// Add restful controller
//require("./config/passport")(passport);
//require('./database/database.js')(app, db, jsonParser);
require('./routes/routes.js')(app, passport);

// Listen to port 5000
app.listen(5000, function() {
  console.log("Login Page");
});
