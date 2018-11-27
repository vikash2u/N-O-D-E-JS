//Connect to MongoDB, print 'Connected!' and close the connection.

const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    // MongoClient method 'connect'
    if (err) throw new Error(err);
    console.log("Connected!");
    db.close(); // Don't forget to close the connection when you are done

});
