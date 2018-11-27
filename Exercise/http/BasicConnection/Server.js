var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made :' + req.url)
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name : 'Vikash',
        job  : 'Developer',
    }
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Now listning to the port 3000');