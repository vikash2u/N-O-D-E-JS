const http = require('http')
const fs = require('fs')
const zlib = require('zlib')
http.createServer((request, response) => {
    const stream = fs.createReadStream('index.html')
    const acceptsEncoding = request.headers['accept-encoding']
    let encoder = {
        hasEncoder: false,
        contentEncoding: {},
        createEncoder: () => {
            throw 'There is no encoder'
        }
    },
    if (!acceptsEncoding) {
        acceptsEncoding = ''
    }
    if (acceptsEncoding.match(/\bdeflate\b/)) {
        encoder = {
            hasEncoder: true,
            contentEncoding: { 'content-encoding': 'deflate' },
            createEncoder: zlib.createDeflate
        }
    } else if (acceptsEncoding.match(/\bgzip\b/)) {
        encoder = {
            hasEncoder: true,
            contentEncoding: { 'content-encoding': 'gzip' },
            createEncoder: zlib.createGzip
        }
    }
    response.writeHead(200, encoder.contentEncoding)
    if (encoder.hasEncoder) {
        stream = stream.pipe(encoder.createEncoder())
    }
    stream.pipe(response)
}).listen(1337)