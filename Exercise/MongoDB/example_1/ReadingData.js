var Auto = require('models/auto')
Auto.find({}, function (err, autos) {
    if (err) return console.error(err);
    // will return a json array of all the documents in the collection
    console.log(autos);
})
//Reading data with a condition
Auto.find({ countOf: { $gte: 5 } }, function (err, autos) {
    if (err) return console.error(err);
    // will return a json array of all the documents in the collection whose count is greater than 5
    console.log(autos);
})

//You can also specify the second parameter as object of what all fields you need
Auto.find({}, { name: 1 }, function (err, autos) {
    if (err) return console.error(err);
    // will return a json array of name field of all the documents in the collection
    console.log(autos);
})
//Finding one document in a collection.
Auto.findOne({ name: "newName" }, function (err, auto) {
    if (err) return console.error(err);
    //will return the first object of the document whose name is "newName"
    console.log(auto);
})
//Finding one document in a collection by id .
Auto.findById(123, function (err, auto) {
    if (err) return console.error(err);
    //will return the first json object of the document whose id is 123
    console.log(auto);
})