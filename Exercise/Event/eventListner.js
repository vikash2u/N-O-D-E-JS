const EventEmitter = require("events");
class MyEmitter extends EventEmitter { }
var emitter = new MyEmitter();
emitter
    .on("data", () => { // add listener for data event
        console.log("data event emitter");
    });
console.log(emitter.listenerCount("data")) // => 1
console.log(emitter.listenerCount("message")) // => 0
emitter.on("message", function mListener() { //add listener for message event
    console.log("message event emitted");
});
console.log(emitter.listenerCount("data")) // => 1
console.log(emitter.listenerCount("message")) // => 1
emitter.once("data", (stuff) => { //add another listener for data event
    console.log(`Tell me my ${stuff}`);
})
console.log(emitter.listenerCount("data")) // => 2
console.log(emitter.listenerCount("message"))// => 1