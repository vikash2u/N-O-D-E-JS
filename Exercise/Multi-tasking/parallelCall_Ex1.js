/* async.parallel(tasks, afterTasksCallback) will execute a set of tasks in parallel and wait the 
end of all tasks (reported by the call of callback function).
When tasks are finished, async call the main callback with all errors and all results of tasks.

*/

var async = require('async');
function shortTimeFunction(callback) {
    setTimeout(function () {
        callback(null, 'resultOfShortTime');
    }, 200);
}
function mediumTimeFunction(callback) {
    setTimeout(function () {
        callback(null, 'resultOfMediumTime');
    }, 500);
}
function longTimeFunction(callback) {
    setTimeout(function () {
        callback(null, 'resultOfLongTime');
    }, 1000);
}
async.parallel([
    longTimeFunction,
    shortTimeFunction,
    mediumTimeFunction
    
],
    function (err, results) {
        if (err) {
            return console.error(err);
        }
        console.log(results);
    });
