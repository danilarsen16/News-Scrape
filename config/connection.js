var mongoose = require("mongoose");


mongoose.connect("mongodb://heroku_l6drmvct:58e0a6rgkm90rdse98d9rj5fc6@ds145208.mlab.com:45208/heroku_l6drmvct", function(err) {
	if(err) throw err;
	console.log('database connected');
});