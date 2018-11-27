var express = require('express');
var formidable = require('formidable');
var app = express();

app.use(function (req, res) {

    if (req.method.toLowerCase() == "post") {

        var form = new formidable.IncomingForm();

        //configure the form
        form.uploadDir = __dirname + '/uploads';
        form.keepExtensions = true;
        form.type = "multipart";

        form.parse(req, function (err, fields, files) {

            //Parse fields
            var firstName = fields.userFirstName;
            var lastName = fields.userLastName;
            console.log("User info parsed from Form: " + firstName + " " + lastName);

            res.writeHead(200, { 'content-type': 'text/plain' });
            res.end("Form data received");
        });

        return;
    }
});

//Start server
var port = 3456;
app.listen(port);
console.log("Listening on port " + port);