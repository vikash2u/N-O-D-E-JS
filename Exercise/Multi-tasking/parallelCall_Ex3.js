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

/*Resolving multiple values
Each parallel function is passed a callback. This callback can either return an error as the first
 argument or success values after that. If a callback is passed several success values, 
 these results are returned as an array.
*/
async.parallel({
    short: function shortTimeFunction(callback) {
        setTimeout(function () {
            callback(null, 'resultOfShortTime1', 'resultOfShortTime2');
        }, 200);
    },
    medium: function mediumTimeFunction(callback) {
        setTimeout(function () {
            callback(null, 'resultOfMediumTime1', 'resultOfMeiumTime2');
        }, 500);
    }
},
    function (err, results) {
        if (err) {
            return console.error(err);
        }
        console.log(results);
    });