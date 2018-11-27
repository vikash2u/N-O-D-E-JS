var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "coverme"
});

conn.connect(function (err) {
    if (err) console.log("Error in connecting database");
    conn.query("select * from Customers", function (err, result) {
        if (err) console.log(err);
        console.log(result);
    });

});