const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect( 'mongodb://localhost:27017/BankDB', { useNewUrlParser: true } )



const BankSchema = new Schema({
    amount : Number,
    category : String,    
    vendor :String
})


const Bank = mongoose.model("Bank", BankSchema)

module.exports = Bank

// const bank=new Bank({
//     amount : 100,
//     category : 'ahi',    
//     vendor :'yakar'
// })
// bank.save()