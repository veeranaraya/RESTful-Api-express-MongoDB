const mongoose =require('mongoose');

const dateSchema = new mongoose.Schema({
    name:{
        required: true,
        type :String
    },
    age:{
        required: true,
        type : Number
    }
})

module.exports = mongoose.model('Data',dateSchema)



































