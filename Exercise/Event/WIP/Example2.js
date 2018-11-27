var fs =  require("fs");
var events = require("events");
var eventsEmitter = new events.EventEmitter();

var listenHandler = function connected(result){
	console.log(result);
	fs.writeFile(result+'/input1.txt', 'Easy to learn', function(err){
		if(err){
			return console.error(err);
		}
		console.log("data written");
		eventsEmitter.emit('connection1',result+'/input1.txt');
	});
}

var readListenHandler = function connected(path){
	console.log(path);
	fs.readFile(path, function(err, data){
		if(err){
			return console.error(err);
		}
		console.log("read data set ::"+data.toString());
		eventsEmitter.emit('connection2','./tmp');
	});
}

var readDirListenHandler = function connected(dirPath){
	fs.readdir(dirPath, function(err, files){
	if(err){
		return console.error(err);
	}
	files.forEach(function(file){
		console.log(file);
	});
	eventsEmitter.emit('connection3','./tmp/input1.txt');
});
}

var rmvFileListenHandler = function connected(filePath){
	fs.unlink(filePath, function(err){
		if(err){
			return console.error(err);
		}
		console.log("File deleted successfull");
		eventsEmitter.emit('connection4','./tmp');
	});
}

var rmvDirListenHandler = function connected(dirPath){
	fs.rmdir(dirPath, function(err){
		if(err){
			return console.error(err);
		}
		console.log("directory deleted");
	});
}

eventsEmitter.on("connection",listenHandler);
eventsEmitter.on("connection1",readListenHandler);
eventsEmitter.on("connection2",readDirListenHandler);
eventsEmitter.on("connection3",rmvFileListenHandler);
eventsEmitter.on("connection4",rmvDirListenHandler);

fs.mkdir('./tmp',function(err){
	if (err) {
	return console.error(err);
	}
	console.log("Directory created successfully!");
	eventsEmitter.emit('connection','./tmp');
});