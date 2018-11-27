/*Using formidable module
Install module and read docs
npm i formidable@latest*/

var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
http.createServer(function (req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err)
                //do -smth; // process error
                // Copy file from temporary place
                // var fs = require('fs');
                // fs.rename(file.path, <targetPath>, function (err) { ... });
                // Send result on client
                res.writeHead(200, { 'content-type': 'text/plain' });
            res.write('received upload:\n\n');
            res.end(util.inspect({ fields: fields, files: files }));
        });
        return;
    }

    // show a file upload form
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="upload" multiple="multiple"><br>' +
        '<input type="submit" value="Upload">' +
        '</form>'
    );
}).listen(8080);