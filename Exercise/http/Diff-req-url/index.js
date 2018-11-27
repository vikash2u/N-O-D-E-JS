var connect = require('connect');
var app = connect()

    .use(function (req, res) {
        if (req.url == "/hello") {

            console.log("sending plain");
            res.end("Hello from app");
        }
        else if (req.url == "/hello.json") {
            console.log("sending json");

            var data = "hello";
            var jsonData = JSON.stringify(data);
            res.setHeader('Content-Type', 'application/json');
            res.end(jsonData);
        }
        else if (req.url == "/statusCodeDemo") {
            console.log("sending 404 status code");

            res.statusCode = 404;
            res.end("Oops, could not find something");
        }
    })
    .listen(3456);
console.log("Listening on port 3456");