var request = require('request');
var fs = require('fs');

var data = {
    userFirstName: "John",
    userlastName: "Doe",
    myBuffer: new Buffer([1]), //buffer for passing file data
    //myFile: fs.createReadStream(__dirname + '/image/spinach.jpg')// read stream containing file data to pass
}

//request.post('http://localhost:3456').form(data);
//request.post('http://localhost:3456', { form: data });

//response from the server

var callback = function (error, response, body) {
    if (error) console.log(error);
    else console.log(body);
}

//request.post('http://localhost:3456', { form: data }, callback);


request.post({ url: 'http://localhost:3456', form: data }, function optionalCallback(err, body, response) {
    if (err) {
        return console.err('oops, there was a problem uploading');
    }
    console.log('File uploded to server');
});
