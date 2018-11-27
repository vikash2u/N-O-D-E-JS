var express = require('express');
var cors = require('cors'); // We will use CORS to enable cross origin domain requests.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var app = express();
var schemaName = new Schema({
    request: String,
    time: Number
}, {
        collection: 'collectionName'
    });
var Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/dbName');
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Node.js listening on port ' + port);
});

app.get('/save/:query', cors(), function (req, res) {
    var query = req.params.query;
    var savedata = new Model({
        'request': query,
        'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
    }).save(function (err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        }
    })
})