//fs.mkdir(path[,mode], callback)
//fs.readdir(path, callback)

var fs = require("fs");

/*fs.mkdir('/tmp', function(err){
	if(err){
		return console.error(err);
	}
	console.log("Directory created");
});*/

fs.readdir('/tmp', function(err, files){
	if(err){
		return console.error(err);
	}
	files.forEach(function(file){
		console.log(file);
		
	});
});
//fs.rmdir(path, callback)

