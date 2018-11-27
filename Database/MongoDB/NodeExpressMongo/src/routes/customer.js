let CustomerModel = require('../models/customer.model')

let express = require('express')

let router = express.Router()

//create a new customer
//POST localhost:3000/customer
//This is the post request
router.post('/customer' , (req, res) =>{
    if(!req.body){
       
        return res.status(400).send('request body is not there')
    }
    // let user ={
    //     name: 'firstname lastname',
    //     email: 'email@gmail.com'
    // }
    console.log(req);
    console.log(res);
    let model = new CustomerModel(req.body)
    model.save()
     .then(doc =>{
         if(!doc || doc.length === 0){
             return res.status(500).send(doc)
         }
         res.status(201).send(doc)
     })
     .catch(err =>{
         res.status(500).json(err)
     }) 
})  
//This is the GET Request
router.get('/customer', (req, res) =>{
    if(!req.query.email){
        return res.status(400).send('Missing URL parameter: email')
    }
    CustomerModel.findOne({
        
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
// this is update request
router.put('/customer', (req, res) =>{
    if(!req.query.email){
        return res.status(400).send('Missing URL parameter: email')
    }
    CustomerModel.findOneAndUpdate({
        
        email: req.query.email
    }, req.body, {
        new: true
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
//this the delete request
router.delete('/customer', (req, res) =>{
    if(!req.query.email){
        return res.status(400).send('Missing URL parameter: email')
    }
    CustomerModel.findOneAndRemove({
        
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
module.exports = router