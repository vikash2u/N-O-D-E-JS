var events = require("events");

//subject
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log("listener 1 executed");
}

var listener2 = function listener2(){
	console.log("listener 2 executed");
}

//Bind the listener to the subject
eventEmitter.on('connection', listener1);

eventEmitter.addListener('connection', listener2);

eventEmitter.once('connection', listener1);

eventEmitter.emit('connection');

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');

console.log("Eventlistener count "+ eventListeners);


eventEmitter.removeListener('connection', listener1);
console.log("Listener 1 will not show in list");


eventEmitter.emit('connection');

console.log("Program ended");