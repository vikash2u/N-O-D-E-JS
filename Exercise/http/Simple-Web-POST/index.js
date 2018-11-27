var http = require('http');
var connect = require('connect');
var bodyParser = require('body-parser');
var app = connect()

    .use(bodyParser.urlencoded(
        { extended: true }
    ))

    .use(function (req, res) {
        var parseInfo = {};
        parseInfo.firstname = req.body.userFirstName;
        parseInfo.lastname = req.body.userLastName;

        res.end("User info parsed from form: " + parseInfo.firstname + " " + parseInfo.lastname)
    });

http.createServer(app).listen(3456);
console.log("Listening on port 3456");