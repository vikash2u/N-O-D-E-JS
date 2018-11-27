const EventEmitter = require('events');
function doSomeAsynchronousOperation(req, res) {
    let myEvent = new EventEmitter();
    // runs asynchronously
    setTimeout(function () {
        myEvent.emit('error', new Error('User Name cannot be empty'));
    }, 1000);
    return myEvent;
}
// Invoke the function
let event = doSomeAsynchronousOperation(req, res);
event.on('error', function (err) {
    console.log(err);
});
event.on('done', function (result) {
    console.log(result); // true
});