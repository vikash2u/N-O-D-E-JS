var events = require("events");

//creating eventEmitter object
var eventEmitter = new events.EventEmitter();

//creating an event handler
var connectHandler = function connected(){
	console.log('connection successful');
	
	//Fire the event
	eventEmitter.emit('data_received');
}

//Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//binding event with function
eventEmitter.on('data_received', function(){
	console.log('data received successfully');
});

console.log("Event being fired");
//fire the key event
eventEmitter.emit('connection');

console.log("Program ended");