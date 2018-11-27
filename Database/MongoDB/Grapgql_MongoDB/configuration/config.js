var config = {
  database: {
    host: 'localhost',     // database host
    user: 'vikash',         // your database username
    password: 'password',     // your database password
    port: 3306,                // default MySQL port
    database: 'mysqldb'         // your database name
  },
  server: {
    host: 'localhost',
    port: '3000'
  },
  dburl: {
    //mongoose.connect('mongodb://localhost/loginapp');
    mongourl: 'mongodb://vikash2umongodb:password2018@ds229290.mlab.com:29290/nodejsdb'
  }

}

module.exports = config