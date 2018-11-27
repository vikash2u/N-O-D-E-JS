var events = require("events");

//subject
var eventEmitter = new events.EventEmitter();


var listenHandler = function connected(){
	console.log('connection successful');
	eventEmitter.emit('2ndconnection');
}


//Bind the listener to the subject
eventEmitter.on('connection', listenHandler);


//Bind the listener to the subject
eventEmitter.on('2ndconnection', function(){
		console.log('connection 2 successful');
		
});

eventEmitter.emit('connection');


console.log("Program ended");