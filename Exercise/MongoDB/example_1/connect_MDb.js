var mongoose = require('mongoose');
//connect to the test database running on default mongod port of localhost
mongoose.connect('mongodb://localhost/test');
//Connecting with custom credentials
//mongoose.connect('mongodb://USER:PASSWORD@HOST:PORT/DATABASE');
//Using Pool Size to define the number of connections opening
//Also you can use a call back function for error handling
mongoose.connect('mongodb://localhost/ABCD', { useNewUrlParser: true },
    // { server: { poolSize: 50 } },
    function (err) {
        if (err) {
            console.log('error in this')
            console.log(err);
            // Do whatever to handle the error
        } else {
            console.log('Connected to the database');
        }
    });