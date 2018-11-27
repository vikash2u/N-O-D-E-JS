var fs = require("fs");
var buf = new Buffer(1024);

console.log("File open operation");

//fs.ftruncate(fd, len, callback);
//fs.unlink(path, callback)

fs.open('input.txt', 'r+', function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log("File opened");
	
	//current directory
	console.log("Current directory ::"+process.cwd());
	
	//process version
	console.log("Process version ::"+process.version);
	
	fs.ftruncate(fd, 10, function(err){
		if(err){
			console.log(err);
		}
		console.log("File truncated ");
		
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
			if(err){
				console.log(err.stack);
			}
			
			if(bytes>0){
				console.log(buf.slice(0,bytes).toString());
			}
			
			fs.close(fd, function(err){
				if(err){
					console.log(err);
				}
				console.log("File closed successfully");
			});
				
		});	
	});
	
	
	
});

//File delete operation
fs.unlink('input.txt', function(err){
	if(err){
		return console.error(err);
	}
	console.log("File deleted successfull");
});