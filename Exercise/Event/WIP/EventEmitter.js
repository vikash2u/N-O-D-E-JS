var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log('listener1 executed');
}

var listener2 = function listener2(){
	console.log('listener2 executed');
}

eventEmitter.once('connection', listener1);

eventEmitter.on('connection', listener2);



//listeners('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log("listening events ::" + eventListeners);

eventEmitter.emit('connection');

/*eventEmitter.removeListener('connection', listener1);
console.log("Removing listener 1 now");

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log("listening events ::" + eventListeners);
*/

eventEmitter.removeAllListeners('connection')

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log("listening events ::" + eventListeners);

eventEmitter.once('connection', listener1);

eventEmitter.emit('connection');



