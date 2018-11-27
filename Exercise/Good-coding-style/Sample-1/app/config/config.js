//This file will manage all the configuration related params which will remain same throughout.
var config = {
    VERSION: 1,
    BUILD: 1,
    URL: 'http://127.0.0.1',
    API_PATH: '/api',
    PORT: process.env.PORT || 8080,
    DB: {
        //MongoDB configuration
        HOST: 'localhost',
        PORT: '27017',
        DATABASE: 'db'
    },
    /*
    * Get DB Connection String for connecting to MongoDB database
    */
    getDBString: function () {
        return 'mongodb://' + this.DB.HOST + ':' + this.DB.PORT + '/' + this.DB.DATABASE;
    },
    /*
    * Get the http URL
    */
    getHTTPUrl: function () {
        return 'http://' + this.URL + ":" + this.PORT;
    }
}
module.exports = config;