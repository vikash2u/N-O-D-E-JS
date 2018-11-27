// ** Example - 1 **
function doSomeSynchronousOperation(req, res) {
    if (req.body.username === '') {
        throw new Error('User Name cannot be empty');
    }
    return true;
}
// calling the method above
try {
    // synchronous code
    doSomeSynchronousOperation(req, res)
}
    catch (e) {
        //exception handled here
        console.log(e.message);
    }


    
// ** Example - 2 **
function doSomeAsynchronousOperation(req, res, cb) {
// imitating async operation
return setTimeout(function () {
    cb(null, []);
}, 1000);
}
try {
// asynchronous code
doSomeAsynchronousOperation(req, res, function (err, rs) {
    throw new Error("async operation exception");
})
} catch (e) {
// Exception will not get handled here
console.log(e.message);
}
// The exception is unhandled and hence will cause application to break