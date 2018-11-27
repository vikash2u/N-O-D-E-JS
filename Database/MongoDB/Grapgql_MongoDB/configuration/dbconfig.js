var mysql  = require('mysql');
var mongoose =require('mongoose');
var config = require('../configuration/config')
//require chalk module to give colors to console text
var chalk = require('chalk');
var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;
F
const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: 100, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

//const dburl= 'mongodb://localhost:27017/loginapp';
mongoose.connect(config.dburl.mongourl,options).then(()=>{console.log("MongoDB Database is connected on the MLAB url : ",config.dburl.mongourl)},(err)=>{console.log("err",err);});

mongoose.connection.on('connected', function(){
    console.log(connected("Mongoose default connection is open to ", config.dburl.mongourl));
});

mongoose.connection.on('error', function(err){
    console.log(error("Mongoose default connection has occured "+err+" error"));
});

mongoose.connection.on('disconnected', function(){
    console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });

/**
 * This middleware provides a consistent API 
 * for MySQL connections during request/response life cycle
 */ 
//var myConnection  = require('express-myconnection')
/**
 * Store database credentials in a separate config.js file
 * Load the file/module and its values
 */ 

var dbconfig =  mysql.createConnection ({
    host:      config.database.host,
    user:       config.database.user,
    password: config.database.password,
    port:       config.database.port, 
    database: config.database.db,
    multipleStatements: true
});
dbconfig.connect((err) => {
   if(!err) {
     console.log("MySql Database is connected on the port : ",config.database.port);  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
});
dbconfig.serverport =config.server.port; 

module.exports = dbconfig