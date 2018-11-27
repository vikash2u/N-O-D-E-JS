var async = require('async');
function getUserRequest(callback) {
    // We simulate the request with a timeout
    setTimeout(function () {
        var userResult = {
            name: 'Aamu'
        };
        callback(null, userResult);
    }, 500);
}
function getUserFriendsRequest(user, callback) {
    // Another request simulate with a timeout
    setTimeout(function () {
        var friendsResult = [];
        if (user.name === "Aamu") {
            friendsResult = [{
                name: 'Alice'
            }, {
                name: 'Bob'
            }];
        }
    callback(null, friendsResult);
    }, 500);
}
async.waterfall([
    getUserRequest,
    getUserFriendsRequest
],
    function (err, results) {
        if (err) {
            return console.error(err);
        }
        console.log(JSON.stringify(results));
    });