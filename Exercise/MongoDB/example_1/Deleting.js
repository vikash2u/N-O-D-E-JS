//Deleting documents from a collection in mongoose is done in the following manner.
Auto.remove({ _id: 123 }, function (err, result) {
    if (err) return console.error(err);
    console.log(result); // this will specify the mongo default delete result.
});