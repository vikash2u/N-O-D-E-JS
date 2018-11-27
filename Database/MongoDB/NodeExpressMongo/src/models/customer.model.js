let mongoose = require('mongoose')

const server = "localhost"
const database = "rest-api"
const user = "Ankur_mlab"
const password ="ankur@7376"

// mongoose.connect(`mongodb://${server}/${database}`, {
//     auth:{
//         user: 'Ankur_mlab',
//         password: 'ankur@7376'
//     },
//     useNewUrlParser:true
// },function(err, client){
//     if(err){
//         console.log(err);
//     }
//     console.log('connected');
// }

// )

mongoose.connect('mongodb://localhost/graphql-vikash')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

let CustomerSchema = new mongoose.Schema({
    name: String,
    email:{
       type: String, 
       require: true,
       unique: true
    }
})
module.exports = mongoose.model('Customer', CustomerSchema)