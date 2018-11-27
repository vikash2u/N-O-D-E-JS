var events = require('events');

var myEmmitter = new events.EventEmitter();

myEmmitter.on('anEvent', function (msg) {
    console.log(msg);
});

myEmmitter.on('anEvent2', function (msg) {
    console.log(msg);
});

myEmmitter.on('anEvent3', function () {
    console.log('Hello world');
});

myEmmitter.emit('anEvent', 'The event is absolutely emmited');
myEmmitter.emit('anEvent3', 'The event 3 is absolutely emmited');
