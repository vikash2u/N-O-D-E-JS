// Import the native MongoDB driver
const Mongo = require('mongodb')
// Import Winston for async logging
const Winston = require('winston')
// The MongoClient class provides an interface for connecting to a // MondoDB database
const MongoClient = Mongo.MongoClient

// Url of your MongoDB database. Substitute with your own
const dbURI = 'mongodb://localhost/qY6rexaj'
// Call the client comment method and provide a callback to report // connection results
MongoClient.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
    // If the connection failed, report the error and return
    if (err)
        return Winston.error(`Unable to connect to server: ${err}`)

    // The connection worked, let's log that too
    Winston.info(`Connected to MongoDB database at ${dbURI}`)

    // This is where we'll do our work against the db

    // When we're done, make sure to close the connection
    db.close()
})