var mongoose = require("mongoose");

mongoose.connect("mongodb://danilarsen:Maverick16@ds153719.mlab.com:53719/heroku_fpg8rrcq", function(err) {
	if(err) throw err;
	console.log('database connected');
});


let db = mongoose.connection;

db.on("error", function (error) {
	console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
	console.log("You are now connected to Mongoose!");
});