let express = require('express')
let app = express();
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')

let path = require('path')

let bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use((req, res, next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    // res.send()
    next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))
//Handler for 404 resource not found
app.use((req, res, next) =>{
    res.status(404).send('we think you are lost')
})

app.use((err, req, res, next) =>{
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>console.info('server has started on 3000'))