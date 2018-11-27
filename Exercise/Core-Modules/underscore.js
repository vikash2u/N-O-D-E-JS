console.log("NPM Module");

var _ = require('underscore');
var names = ["Alan", "Keisha", "Charlie", "Debra"];
_.each(names, function (name) {
    console.log("Name is: " + name);
});