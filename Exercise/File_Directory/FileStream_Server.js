var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt', 'utf8');

    console.log('request was made :' + req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    myReadStream.pipe(res)
});

server.listen(3000, '127.0.0.1');
console.log('Now listning to the port 3000');