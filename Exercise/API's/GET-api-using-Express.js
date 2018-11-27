var express = require('express');
var app = express();
var users = [{
    id: 1,
    name: "John Doe",
    age: 23,
    email: "john@doe.com"
}];
// GET /api/users
app.get('/api/users', function (req, res) {
    return res.json(users); //return response as JSON
});
app.listen('3000', function () {
    console.log('Server listening on port 3000');
});