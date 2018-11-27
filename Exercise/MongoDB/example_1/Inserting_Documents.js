var Auto = require('models/auto')
var autoObj = new Auto({
    name: "NewName",
    countOf: 10
});

autoObj.save(function (err, insertedAuto) {
    if (err) return console.error(err);
    insertedAuto.speak();
    // output: Hello this is NewName and I have counts of 10
});