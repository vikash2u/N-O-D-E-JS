
var fs = require("fs");

console.log("File open operation");

fs.open('input.txt', 'r+', function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log("File opened");
});

fs.stat('input.txt', function(err, stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log("File info received");
	
	console.log("isFile ", +stats.isFile());
	console.log("isDirectory ", +stats.isDirectory());
	
});

//fs.writeFile(filename, data[, options], callback)
//fs.read(fd, buffer, offset, length, position, callback)

fs.writeFile('input1.txt', 'Easy to learn', function(err){
	if(err){
		return console.error(err);
	}
	
	console.log("data written");
	
	fs.readFile('input1.txt', function(err, data){
		if(err){
			return console.error(err);
		}
		console.log("read data set ::"+data.toString());
	});
});

//fs.close(fd, callback)
