var express = require("express");
var multer = require('multer');
var app = express();
var fs = require('fs');
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        fs.mkdir('./uploads', function (err) {
            if (err) {
                console.log(err.stack)
            } else {
                callback(null, './uploads');
            }
        })
    },
    filename: function (req, file, callback) {
        // callback(null, file.fieldname + '-' + Date.now());
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
app.post('/api/file', function (req, res) {

    /*//Below example, view how to upload files to allow only certain extensions.
    var upload = multer({
        storage: storage,
        fileFilter: function (req, file, callback) {
            var ext = path.extname(file.originalname);
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                return callback(new Error('Only images are allowed'))
            }
            callback(null, true)
        }
    }).single('userFile');*/
    var upload = multer({ storage: storage }).single('userFile');
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded successfully...");
    });
});
app.listen(3000, function () {
    console.log("Working on port 3000");
});