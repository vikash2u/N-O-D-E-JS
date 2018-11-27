var http = require("http");
var fs = require("fs");
var querystring = require("querystring");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/college";

http.createServer(function (req, res) {
  if (req.url === "/form") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
  }
  if (req.method === "POST") {
    var data = "";
    req.on("data", function (chunk) {
      data += chunk;

    });

    req.on("end", function (chunk) {

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var q = querystring.parse(data);
        db.collection('students').insertOne(q, function (err, res) {
          if (err) throw err;
          console.log("Data inserted successfully");          
          db.close();
        });
      })


      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var q = querystring.parse(data);
        db.collection('students').findOne({}, function (err, result) {
          if (err) throw err;
          res.writeHead(200, { "content-type": "text/html" });
          res.end(JSON.stringify(result));
          db.close();
        });
      })

    });
  }
}).listen(3000);

console.log("Server is listening on port : 3000");