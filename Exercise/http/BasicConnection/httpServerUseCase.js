const http = require('http');
console.log('Starting server...');
var config = {
    port: 8012,
    contentType: 'application/json; charset=utf-8'
};
// JSON-API server on port 80
var server = http.createServer();
server.listen(config.port);
server.on('error', (err) => {
    if (err.code == 'EADDRINUSE') console.error('Port ' + config.port + ' is already in use');
    else console.error(err.message);
});
server.on('request', (request, res) => {
    var remoteAddress = request.headers['x-forwarded-for'] || request.connection.remoteAddress; //

    console.log(remoteAddress + ' ' + request.method + ' ' + request.url);
    var out = {};
    // Here you can change output according to `request.url`
    out.test = request.url;
    res.writeHead(200, {
        'Content-Type': config.contentType
    });
    res.end(JSON.stringify(out));
});
server.on('listening', () => {
   console.info('Server is available: http://localhost:' + config.port);
});