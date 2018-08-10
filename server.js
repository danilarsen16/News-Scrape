var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var mongoose = require('mongoose');

var app = express();

let Promise = require("bluebird");
mongoose.Promise = Promise;

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;

require("./config/connection");



// mongoose.connect("mongodb://danilarsen:Maverick16@ds153719.mlab.com:53719/heroku_fpg8rrcq");

// mongo ds215502.mlab.com:15502/heroku_p8rl905s -u danilarsen -p Maverick16

// Database configuration with mongoose
mongoose.connect("mongodb://dlarsen:Maverick16@ds153719.mlab.com:53719/heroku_fpg8rrcq");
// mongodb://<dbuser>:<dbpassword>@ds215502.mlab.com:15502/heroku_p8rl905s
// mongoose.connect("mongo ds153719.mlab.com:53719/heroku_fpg8rrcq -u HRFoxhill -p Never4get");

let db = mongoose.connection;

db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
    console.log("Mongoose connected woohoo!.");
});




app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/news.js');
app.use('/',routes);

app.use(function(req, res) {
	res.render('404');
});

app.listen(port, function() {
    console.log("Listening on port:" + port);
});