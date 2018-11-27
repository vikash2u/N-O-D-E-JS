var http = require('http');
http.createServer(function (req, res) {

	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end("Hello world");

}).listen(8002, "127.0.0.1");
console.log('server running at port 8002');