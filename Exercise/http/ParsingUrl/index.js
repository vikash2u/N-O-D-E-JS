console.log("Parsing URLs");

var url = require('url');
var testUrl="http://john:7654321@locallhost:3456/path/to/resource?resourceId=someValue&resourceType=someType";

var parseUrlObject = url.parse(testUrl,true);

console.log(parseUrlObject);

var urlString = url.format(parseUrlObject);

console.log(urlString);
