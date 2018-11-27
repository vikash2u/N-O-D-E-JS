function doSomeAsynchronousOperation(req, res, callback) {
    setTimeout(function () {
        return callback(new Error('User Name cannot be empty'));
    }, 1000);
    return true;
}
doSomeAsynchronousOperation(req, res, function (err, result) {
    if (err) {
        //exception handled here
        console.log(err.message);
    }
    //do some stuff with valid data
});