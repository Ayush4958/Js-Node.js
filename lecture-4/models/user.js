const mongoose = require('mongoose');

// Creating a schema
const userschema = new mongoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name:{
        type : String,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    job_title:{
        type : String,
    },
    gender:{
        type : String,
    }
})

// creating a model
const User = mongoose.model('user' , userschema)

// exporting the model
module.exports = User;
