var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AutoSchema = new Schema({
    name: String,
    countOf: Number,

});
// defining the document structure
// by default the collection created in the db would be the first parameter we use (or the plural of
//it)
module.exports = mongoose.model('Auto', AutoSchema);
// we can over write it and define the collection name by specifying that in the third parameters.
module.exports = mongoose.model('Auto', AutoSchema, 'collectionName');
// We can also define methods in the models.
AutoSchema.methods.speak = function () {
    var greeting = this.name
        ? "Hello this is " + this.name + " and I have counts of " + this.countOf
        : "I don't have a name";
    console.log(greeting);
}
mongoose.model('Auto', AutoSchema, 'collectionName');