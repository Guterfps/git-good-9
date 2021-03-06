const express = require( 'express' )
const app = express()
const bodyParser = require( 'body-parser' )
const mongoose = require('mongoose')
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

const Bank=require('./schema')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.get('/transcations',function(req,res){
Bank.find({},function(err,x){
    
    res.send(x)
})
})
app.post('/transaction',function(req,res){
    const data = req.body
    new Bank(data).save()
    res.end('saved')
})


const port=8000
app.listen( port, () => console.log( `Running server on port ${ port }` ) )
