var fs = require("fs");
var zlib = require('zlib');

//fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

//console.log("File compressed....");

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('GzipOutput.txt'));

console.log("File Decompressed....");